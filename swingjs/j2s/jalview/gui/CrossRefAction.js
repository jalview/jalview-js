(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.util.ArrayList','jalview.util.MessageManager','jalview.analysis.CrossRef','jalview.ws.SequenceFetcher','jalview.analysis.AlignmentUtils','jalview.bin.Cache','jalview.gui.AlignFrame','jalview.gui.Desktop','jalview.gui.SplitFrame','jalview.gui.OOMWarning','java.util.HashMap','jalview.ext.ensembl.EnsemblInfo','jalview.util.DBRefUtils','jalview.ext.ensembl.EnsemblMap','jalview.util.MappingUtils','jalview.gui.JvOptionPane','jalview.structure.StructureSelectionManager','jalview.datamodel.SequenceI','jalview.datamodel.Alignment']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CrossRefAction", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.xrefViews=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['_odna'],'S',['source'],'O',['alignFrame','jalview.gui.AlignFrame','sel','jalview.datamodel.SequenceI[]','xrefViews','java.util.List']]]

Clazz.newMeth(C$, 'getXrefViews$', function () {
return this.xrefViews;
});

Clazz.newMeth(C$, 'run$', function () {
var sttime=System.currentTimeMillis$();
this.alignFrame.setProgressBar$S$J($I$(2,"formatMessage$S$OA",["status.searching_for_sequences_from", Clazz.array(java.lang.Object, -1, [this.source])]), sttime);
try {
var alignment=this.alignFrame.getViewport$().getAlignment$();
var dataset=alignment.getDataset$() == null  ? alignment : alignment.getDataset$();
var dna=alignment.isNucleotide$();
if (this._odna != dna ) {
System.err.println$S("Conflict: showProducts for alignment originally thought to be " + (this._odna ? "DNA" : "Protein") + " now searching for " + (dna ? "DNA" : "Protein") + " Context." );
}var xrefs=Clazz.new_($I$(3,1).c$$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI,[this.sel, dataset]).findXrefSequences$S$Z(this.source, dna);
if (xrefs == null ) {
return;
}C$.findGeneLoci$java_util_List(xrefs.getSequences$());
var featureColourScheme=Clazz.new_($I$(4,1)).getFeatureColourScheme$S(this.source);
if (dna && $I$(5).looksLikeEnsembl$jalview_datamodel_AlignmentI(alignment) ) {
featureColourScheme=Clazz.new_($I$(4,1)).getFeatureColourScheme$S("ENSEMBL");
}var xrefsAlignment=this.makeCrossReferencesAlignment$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI(dataset, xrefs);
if (!dna) {
xrefsAlignment=$I$(5,"makeCdsAlignment$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA",[xrefsAlignment.getSequencesArray$(), dataset, this.sel]);
xrefsAlignment.alignAs$jalview_datamodel_AlignmentI(alignment);
}var copyAlignment=null;
if ($I$(6).getDefault$S$Z("ENABLE_SPLIT_FRAME", true)) {
copyAlignment=this.copyAlignmentForSplitFrame$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI$Z$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI(alignment, dataset, dna, xrefs, xrefsAlignment);
if (copyAlignment == null ) {
return;
}}var newFrame=Clazz.new_($I$(7,1).c$$jalview_datamodel_AlignmentI$I$I,[xrefsAlignment, 700, 500]);
if ($I$(6).getDefault$S$Z("HIDE_INTRONS", true)) {
newFrame.hideFeatureColumns$S$Z("exon", false);
}var newtitle=String.format$S$OA("%s %s %s", [dna ? $I$(2).getString$S("label.proteins") : $I$(2).getString$S("label.nucleotides"), $I$(2).getString$S("label.for"), this.alignFrame.getTitle$()]);
newFrame.setTitle$S(newtitle);
if (copyAlignment == null ) {
$I$(8).addInternalFrame$javax_swing_JInternalFrame$S$I$I(newFrame, newtitle, 700, 500);
this.xrefViews.add$O(newFrame.alignPanel);
return;
}var copyThis=Clazz.new_($I$(7,1).c$$jalview_datamodel_AlignmentI$I$I,[copyAlignment, 700, 500]);
copyThis.setTitle$S(this.alignFrame.getTitle$());
var showSequenceFeatures=this.alignFrame.getViewport$().isShowSequenceFeatures$();
newFrame.setShowSeqFeatures$Z(showSequenceFeatures);
copyThis.setShowSeqFeatures$Z(showSequenceFeatures);
var myFeatureStyling=this.alignFrame.alignPanel.getSeqPanel$().seqCanvas.getFeatureRenderer$();
var fr1=newFrame.alignPanel.getSeqPanel$().seqCanvas.getFeatureRenderer$();
fr1.transferSettings$jalview_api_FeatureRenderer(myFeatureStyling);
fr1.findAllFeatures$Z(true);
var fr2=copyThis.alignPanel.getSeqPanel$().seqCanvas.getFeatureRenderer$();
fr2.transferSettings$jalview_api_FeatureRenderer(myFeatureStyling);
fr2.findAllFeatures$Z(true);
newFrame.getViewport$().applyFeaturesStyle$jalview_api_FeatureSettingsModelI(featureColourScheme);
copyThis.getViewport$().applyFeaturesStyle$jalview_api_FeatureSettingsModelI(featureColourScheme);
for (var origpanel, $origpanel = this.alignFrame.getAlignPanels$().iterator$(); $origpanel.hasNext$()&&((origpanel=($origpanel.next$())),1);) {
origpanel.getAlignViewport$().mergeFeaturesStyle$jalview_api_FeatureSettingsModelI(featureColourScheme);
}
var sf=Clazz.new_($I$(9,1).c$$jalview_jbgui_GAlignFrame$jalview_jbgui_GAlignFrame,[dna ? copyThis : newFrame, dna ? newFrame : copyThis]);
newFrame.setVisible$Z(true);
copyThis.setVisible$Z(true);
var linkedTitle=$I$(2).getString$S("label.linked_view_title");
$I$(8).addInternalFrame$javax_swing_JInternalFrame$S$I$I(sf, linkedTitle, -1, -1);
sf.adjustInitialLayout$();
this.xrefViews.add$O(dna ? copyThis.alignPanel : newFrame.alignPanel);
this.xrefViews.add$O(!dna ? copyThis.alignPanel : newFrame.alignPanel);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var e = e$$;
{
Clazz.new_($I$(10,1).c$$S$OutOfMemoryError,["whilst fetching crossreferences", e]);
}
} else {
var e = e$$;
{
$I$(6).log.error$O$Throwable("Error when finding crossreferences", e);
}
}
} finally {
this.alignFrame.setProgressBar$S$J($I$(2,"formatMessage$S$OA",["status.finished_searching_for_sequences_from", Clazz.array(java.lang.Object, -1, [this.source])]), sttime);
}
});

Clazz.newMeth(C$, 'findGeneLoci$java_util_List', function (sequences) {
var retrievedLoci=Clazz.new_($I$(11,1));
for (var seq, $seq = sequences.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
C$.findGeneLoci$jalview_datamodel_SequenceI$java_util_Map(seq, retrievedLoci);
}
}, 1);

Clazz.newMeth(C$, 'findGeneLoci$jalview_datamodel_SequenceI$java_util_Map', function (seq, retrievedLoci) {
if (seq == null  || seq.isProtein$()  || seq.getGeneLoci$() != null   || seq.getDBRefs$() == null  ) {
return;
}var ensemblDivisions=Clazz.new_($I$(12,1)).getDivisions$();
var divisionsArray=ensemblDivisions.toArray$OA(Clazz.array(String, [ensemblDivisions.size$()]));
var seqRefs=seq.getDBRefs$();
var directEnsemblRefs=$I$(13).selectRefs$java_util_List$SA(seqRefs, divisionsArray);
if (directEnsemblRefs != null ) {
for (var ensemblRef, $ensemblRef = directEnsemblRefs.iterator$(); $ensemblRef.hasNext$()&&((ensemblRef=($ensemblRef.next$())),1);) {
if (C$.fetchGeneLoci$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$java_util_Map(seq, ensemblRef, retrievedLoci)) {
return;
}}
}for (var dbref, $dbref = seq.getDBRefs$().iterator$(); $dbref.hasNext$()&&((dbref=($dbref.next$())),1);) {
if (dbref.getMap$() != null  && dbref.getMap$().getTo$() != null  ) {
var dbrefs=dbref.getMap$().getTo$().getDBRefs$();
var indirectEnsemblRefs=$I$(13).selectRefs$java_util_List$SA(dbrefs, divisionsArray);
if (indirectEnsemblRefs != null ) {
for (var ensemblRef, $ensemblRef = indirectEnsemblRefs.iterator$(); $ensemblRef.hasNext$()&&((ensemblRef=($ensemblRef.next$())),1);) {
if (C$.fetchGeneLoci$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$java_util_Map(seq, ensemblRef, retrievedLoci)) {
return;
}}
}}}
}, 1);

Clazz.newMeth(C$, 'fetchGeneLoci$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$java_util_Map', function (seq, dbref, retrievedLoci) {
var accession=dbref.getAccessionId$();
var division=dbref.getSource$();
if (accession.startsWith$S("ENSP")) {
return false;
}var mapper=Clazz.new_($I$(14,1));
var geneLoci=mapper.getCdsMapping$S$S$I$I(division, accession, 1, seq.getLength$());
if (geneLoci != null ) {
var map=geneLoci.getMapping$();
var mappedFromLength=$I$(15,"getLength$java_util_List",[map.getFromRanges$()]);
if (mappedFromLength == seq.getLength$()) {
seq.setGeneLoci$S$S$S$jalview_util_MapList(geneLoci.getSpeciesId$(), geneLoci.getAssemblyId$(), geneLoci.getChromosomeId$(), map);
retrievedLoci.put$O$O(dbref, geneLoci);
return true;
}}geneLoci=mapper.getCdnaMapping$S$S$I$I(division, accession, 1, seq.getLength$());
if (geneLoci != null ) {
var map=geneLoci.getMapping$();
var mappedFromLength=$I$(15,"getLength$java_util_List",[map.getFromRanges$()]);
if (mappedFromLength == seq.getLength$()) {
seq.setGeneLoci$S$S$S$jalview_util_MapList(geneLoci.getSpeciesId$(), geneLoci.getAssemblyId$(), geneLoci.getChromosomeId$(), map);
retrievedLoci.put$O$O(dbref, geneLoci);
return true;
}}return false;
}, 1);

Clazz.newMeth(C$, 'copyAlignmentForSplitFrame$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI$Z$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI', function (alignment, dataset, dna, xrefs, xrefsAlignment) {
var copyAlignment;
var copyAlignmentIsAligned=false;
if (dna) {
copyAlignment=$I$(5,"makeCdsAlignment$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA",[this.sel, dataset, xrefsAlignment.getSequencesArray$()]);
if (copyAlignment.getHeight$() == 0) {
$I$(16,"showMessageDialog$java_awt_Component$S$S$I",[this.alignFrame, $I$(2).getString$S("label.cant_map_cds"), $I$(2).getString$S("label.operation_failed"), 0]);
System.err.println$S("Failed to make CDS alignment");
return null;
}if ("ENSEMBL".equalsIgnoreCase$S(this.source) || $I$(5).looksLikeEnsembl$jalview_datamodel_AlignmentI(alignment) ) {
copyAlignment.alignAs$jalview_datamodel_AlignmentI(alignment);
copyAlignmentIsAligned=true;
}} else {
copyAlignment=$I$(5,"makeCopyAlignment$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI",[this.sel, xrefs.getSequencesArray$(), dataset]);
}copyAlignment.setGapCharacter$C(this.alignFrame.viewport.getGapCharacter$());
var ssm=$I$(17,"getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider",[$I$(8).instance]);
ssm.registerMappings$java_util_List(dataset.getCodonFrames$());
if (copyAlignment.getHeight$() <= 0) {
System.err.println$S("No Sequences generated for xRef type " + this.source);
return null;
}if (dna && copyAlignmentIsAligned ) {
xrefsAlignment.alignAs$jalview_datamodel_AlignmentI(copyAlignment);
} else {
if (dna && "ENSEMBL".equalsIgnoreCase$S(this.source) ) {
copyAlignment.alignAs$jalview_datamodel_AlignmentI(xrefsAlignment);
}}return copyAlignment;
});

Clazz.newMeth(C$, 'makeCrossReferencesAlignment$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI', function (dataset, seqs) {
var sprods=Clazz.array($I$(18), [seqs.getHeight$()]);
for (var s=0; s < sprods.length; s++) {
sprods[s]=(seqs.getSequenceAt$I(s)).deriveSequence$();
if (dataset.getSequences$() == null  || !dataset.getSequences$().contains$O(sprods[s].getDatasetSequence$()) ) {
dataset.addSequence$jalview_datamodel_SequenceI(sprods[s].getDatasetSequence$());
}sprods[s].updatePDBIds$();
}
var al=Clazz.new_($I$(19,1).c$$jalview_datamodel_SequenceIA,[sprods]);
al.setDataset$jalview_datamodel_AlignmentI(dataset);
return al;
});

Clazz.newMeth(C$, 'c$$jalview_gui_AlignFrame$jalview_datamodel_SequenceIA$Z$S', function (af, seqs, fromDna, dbSource) {
;C$.$init$.apply(this);
this.alignFrame=af;
this.sel=seqs;
this._odna=fromDna;
this.source=dbSource;
}, 1);

Clazz.newMeth(C$, 'getHandlerFor$jalview_datamodel_SequenceIA$Z$S$jalview_gui_AlignFrame', function (sel, fromDna, source, alignFrame) {
return Clazz.new_(C$.c$$jalview_gui_AlignFrame$jalview_datamodel_SequenceIA$Z$S,[alignFrame, sel, fromDna, source]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
