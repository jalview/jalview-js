(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'java.util.Vector','jalview.io.vamsas.DatastoreRegistry','java.util.Hashtable','jalview.gui.Desktop','jalview.bin.Cache','jalview.util.MessageManager','Error','uk.ac.vamsas.objects.core.DataSet','jalview.io.vamsas.Datasetsequence','uk.ac.vamsas.objects.core.Alignment','uk.ac.vamsas.objects.core.Provenance','uk.ac.vamsas.objects.core.Property','java.util.HashMap','uk.ac.vamsas.objects.core.AlignmentAnnotation','uk.ac.vamsas.objects.core.Seg','uk.ac.vamsas.objects.core.AnnotationElement','uk.ac.vamsas.objects.core.Glyph','uk.ac.vamsas.objects.utils.Properties','jalview.io.vamsas.Tree','uk.ac.vamsas.objects.core.AlignmentSequence','jalview.datamodel.Sequence','uk.ac.vamsas.objects.core.DataSetAnnotations','uk.ac.vamsas.objects.core.AlignmentSequenceAnnotation','jalview.project.Jalview2XML','java.util.jar.JarInputStream','jalview.structure.StructureSelectionManager','java.util.jar.JarOutputStream','java.util.IdentityHashMap','jalview.io.vamsas.Dbref','jalview.datamodel.SequenceI','jalview.datamodel.Alignment','jalview.io.vamsas.Sequencefeature','jalview.gui.AlignFrame','jalview.io.vamsas.Sequencemapping','jalview.datamodel.Annotation','java.awt.Color','jalview.datamodel.GraphLine','jalview.datamodel.AlignmentAnnotation','jalview.util.MapList','uk.ac.vamsas.objects.core.Local','uk.ac.vamsas.objects.core.Mapped','jalview.datamodel.Provenance','uk.ac.vamsas.objects.core.Entry','java.util.Date']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VamsasAppDatastore");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.provEntry=null;
this.dojvsync=true;
this.newAlignmentViews=Clazz.new_($I$(1,1));
this.dsReg=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['dojvsync'],'O',['provEntry','uk.ac.vamsas.objects.core.Entry','cdoc','uk.ac.vamsas.client.IClientDocument','vobj2jv','java.util.Hashtable','jv2vobj','java.util.IdentityHashMap','alignRDHash','java.util.Hashtable','+skipList','newAlignmentViews','java.util.Vector','dsReg','jalview.io.vamsas.DatastoreRegistry']]
,['I',['HASSECSTR','HASVALS','HASHPHOB','HASDC','HASDESCSTR','HASTWOSTATE']]]

Clazz.newMeth(C$, 'c$$uk_ac_vamsas_client_IClientDocument$java_util_Hashtable$java_util_IdentityHashMap$uk_ac_vamsas_objects_core_Entry$java_util_Hashtable', function (cdoc, vobj2jv, jv2vobj, provEntry, alignRDHash) {
;C$.$init$.apply(this);
this.cdoc=cdoc;
this.vobj2jv=vobj2jv;
this.jv2vobj=jv2vobj;
this.provEntry=provEntry;
this.alignRDHash=alignRDHash;
p$1.buildSkipList.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'buildSkipList', function () {
this.skipList=Clazz.new_($I$(3,1));
var al=$I$(4).getAlignFrames$();
for (var f=0; al != null  && f < al.length ; f++) {
this.skipList.put$O$O(al[f].getViewport$().getSequenceSetId$(), al[f]);
}
}, p$1);

Clazz.newMeth(C$, 'getjv2vObj$O', function (jvobj) {
if (this.jv2vobj.containsKey$O(jvobj)) {
return this.cdoc.getObject$uk_ac_vamsas_client_VorbaId(this.jv2vobj.get$O(jvobj));
}if (Clazz.instanceOf(jvobj, "java.lang.String")) {
var seqsetidobj=null;
seqsetidobj=this.getVamsasObjectBinding$().get$O(jvobj);
if (seqsetidobj != null ) {
if (Clazz.instanceOf(seqsetidobj, "java.lang.String")) {
var obj=this.getjv2vObj$O(seqsetidobj);
if (obj != null  && !(Clazz.instanceOf(obj, "uk.ac.vamsas.objects.core.Alignment")) ) {
$I$(5).log.warn$O("IMPLEMENTATION ERROR?: Unexpected mapping for unmapped jalview string object content:" + seqsetidobj + " to object " + obj );
}return obj;
} else {
$I$(5).log.warn$O("Unexpected mapping for Jalview String Object ID " + seqsetidobj + " to another jalview dataset object " + seqsetidobj );
}}}if ($I$(5).log.isDebugEnabled$()) {
$I$(5).log.debug$O("Returning null VorbaID binding for jalview object " + jvobj);
}return null;
});

Clazz.newMeth(C$, 'getvObj2jv$uk_ac_vamsas_client_Vobject', function (vobj) {
var id=vobj.getVorbaId$();
if (id == null ) {
id=this.cdoc.registerObject$uk_ac_vamsas_client_Vobject(vobj);
$I$(5).log.debug$O("Registering new object and returning null for getvObj2jv");
return null;
}if (this.vobj2jv.containsKey$O(vobj.getVorbaId$())) {
return this.vobj2jv.get$O(vobj.getVorbaId$());
}return null;
});

Clazz.newMeth(C$, 'bindjvvobj$O$uk_ac_vamsas_client_Vobject', function (jvobj, vobj) {
var id=vobj.getVorbaId$();
if (id == null ) {
id=this.cdoc.registerObject$uk_ac_vamsas_client_Vobject(vobj);
if (id == null  || vobj.getVorbaId$() == null   || this.cdoc.getObject$uk_ac_vamsas_client_VorbaId(id) !== vobj  ) {
$I$(5).log.error$O("Failed to get id for " + (vobj.isRegisterable$() ? "registerable" : "unregisterable") + " object " + vobj );
}}if (this.vobj2jv.containsKey$O(vobj.getVorbaId$()) && !(this.vobj2jv.get$O(vobj.getVorbaId$())).equals$O(jvobj) ) {
$I$(5).log.debug$O$Throwable("Warning? Overwriting existing vamsas id binding for " + vobj.getVorbaId$(), Clazz.new_(Clazz.load('Exception').c$$S,[$I$(6).getString$S("exception.overwriting_vamsas_id_binding")]));
} else if (this.jv2vobj.containsKey$O(jvobj) && !(this.jv2vobj.get$O(jvobj)).equals$O(vobj.getVorbaId$()) ) {
$I$(5).log.debug$O$Throwable("Warning? Overwriting existing jalview object binding for " + jvobj, Clazz.new_(Clazz.load('Exception').c$$S,["Overwriting jalview object binding."]));
}$I$(5).log.debug$O("Binding " + vobj.getVorbaId$() + " to " + jvobj );
this.vobj2jv.put$O$O(vobj.getVorbaId$(), jvobj);
this.jv2vobj.put$O$O(jvobj, vobj.getVorbaId$());
});

Clazz.newMeth(C$, 'storeVAMSAS$jalview_gui_AlignViewport$S', function (av, aFtitle) {
try {
var jal=av.getAlignment$();
var jds=jal.getDataset$();
var nw=false;
var root=null;
var dataset=null;
if (jds == null ) {
$I$(5).log.warn$O("Creating new dataset for an alignment.");
jal.setDataset$jalview_datamodel_AlignmentI(null);
jds=jal.getDataset$();
}var alignment=this.getjv2vObj$O(av.getSequenceSetId$());
if (alignment != null ) {
dataset=alignment.getV_parent$();
} else {
dataset=this.getjv2vObj$O(jds);
}if (dataset == null ) {
var jdatset=jds.getSequencesArray$();
for (var i=0; i < jdatset.length; i++) {
var vbound=this.getjv2vObj$O(jdatset[i]);
if (vbound != null ) {
if (Clazz.instanceOf(vbound, "uk.ac.vamsas.objects.core.Sequence")) {
if (dataset == null ) {
dataset=vbound.getV_parent$();
} else {
if (vbound.getV_parent$() != null  && dataset !== vbound.getV_parent$()  ) {
throw Clazz.new_([$I$(6).getString$S("error.implementation_error_cannot_map_alignment_sequences")],$I$(7,1).c$$S);
}}}}}
}if (dataset == null ) {
$I$(5).log.warn$O("Creating new vamsas dataset for alignment view " + av.getSequenceSetId$());
root=this.cdoc.getVamsasRoots$()[0];
dataset=Clazz.new_($I$(8,1));
root.addDataSet$uk_ac_vamsas_objects_core_DataSet(dataset);
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(jds, dataset);
dataset.setProvenance$uk_ac_vamsas_objects_core_Provenance(this.dummyProvenance$());
nw=true;
} else {
root=dataset.getV_parent$();
}var sequence;
var dict=jal.isNucleotide$() ? "info:iubmb.org/nucleosides" : "info:iubmb.org/aminoacids";
var dssmods=Clazz.new_($I$(1,1));
for (var i=0; i < jal.getHeight$(); i++) {
var sq=jal.getSequenceAt$I(i).getDatasetSequence$();
var dssync=Clazz.new_($I$(9,1).c$$jalview_io_VamsasAppDatastore$jalview_datamodel_SequenceI$S$uk_ac_vamsas_objects_core_DataSet,[this, sq, dict, dataset]);
sequence=dssync.getVobj$();
if (dssync.getModified$()) {
dssmods.addElement$O(sequence);
};}
if (dssmods.size$() > 0) {
if (!nw) {
var pentry=this.addProvenance$uk_ac_vamsas_objects_core_Provenance$S(dataset.getProvenance$(), "updated sequences");
dssmods.removeAllElements$();
}}if (this.alignmentWillBeSkipped$jalview_viewmodel_AlignmentViewport(av)) {
p$1.addToSkipList$jalview_viewmodel_AlignmentViewport.apply(this, [av]);
return false;
}if (alignment == null ) {
alignment=Clazz.new_($I$(10,1));
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(av.getSequenceSetId$(), alignment);
if (alignment.getProvenance$() == null ) {
alignment.setProvenance$uk_ac_vamsas_objects_core_Provenance(Clazz.new_($I$(11,1)));
}this.addProvenance$uk_ac_vamsas_objects_core_Provenance$S(alignment.getProvenance$(), "added");
dataset.addAlignment$uk_ac_vamsas_objects_core_Alignment(alignment);
{
var title=Clazz.new_($I$(12,1));
title.setName$S("title");
title.setType$S("string");
title.setContent$S(aFtitle);
alignment.addProperty$uk_ac_vamsas_objects_core_Property(title);
}alignment.setGapChar$S(String.valueOf$C(av.getGapCharacter$()));
for (var i=0; i < jal.getHeight$(); i++) {
p$1.syncToAlignmentSequence$jalview_datamodel_SequenceI$uk_ac_vamsas_objects_core_Alignment$java_util_Vector.apply(this, [jal.getSequenceAt$I(i), alignment, null]);
}
this.alignRDHash.put$O$O(av.getSequenceSetId$(), av.getUndoRedoHash$());
} else {
var alismod=av.isUndoRedoHashModified$JA(this.alignRDHash.get$O(av.getSequenceSetId$()));
if (alignment.getModifiable$() == null  || alignment.getModifiable$().length$() == 0 ) {
var modified=false;
var docseqs=Clazz.new_([alignment.getAlignmentSequenceAsReference$()],$I$(1,1).c$$java_util_Collection);
for (var i=0; i < jal.getHeight$(); i++) {
modified|=p$1.syncToAlignmentSequence$jalview_datamodel_SequenceI$uk_ac_vamsas_objects_core_Alignment$java_util_Vector.apply(this, [jal.getSequenceAt$I(i), alignment, docseqs]);
}
if (docseqs.size$() > 0) {
docseqs.removeAllElements$();
System.out.println$S("Sequence deletion from alignment is not implemented.");
}if (modified) {
if (alismod) {
this.addProvenance$uk_ac_vamsas_objects_core_Provenance$S(alignment.getProvenance$(), "Edited");
} else {
this.addProvenance$uk_ac_vamsas_objects_core_Provenance$S(alignment.getProvenance$(), "Attributes Edited");
}}if (alismod) {
System.out.println$S("update alignment in document.");
} else {
System.out.println$S("alignment in document left unchanged.");
}} else {
System.out.println$S("update edited alignment to new alignment in document.");
}}for (var i=0, iSize=alignment.getAlignmentSequenceCount$(); i < iSize; i++) {
var valseq;
var alseq=this.getvObj2jv$uk_ac_vamsas_client_Vobject(valseq=alignment.getAlignmentSequence$I(i));
if (alseq != null  && alseq.getSequenceFeatures$() != null  ) {
}}
if (jal.getAlignmentAnnotation$() != null ) {
var aa=jal.getAlignmentAnnotation$();
var AlSeqMaps=Clazz.new_($I$(13,1));
for (var i=0; i < aa.length; i++) {
if (aa[i] == null  || p$1.isJalviewOnly$jalview_datamodel_AlignmentAnnotation.apply(this, [aa[i]]) ) {
continue;
}if (aa[i].groupRef != null ) {
$I$(5).log.warn$O("Group associated sequence annotation is not stored in VAMSAS document.");
continue;
}if (aa[i].sequenceRef != null ) {
var sref=this.getjv2vObj$O(aa[i].sequenceRef);
if (Clazz.instanceOf(sref, "uk.ac.vamsas.objects.core.AlignmentSequence")) {
p$1.saveAlignmentSequenceAnnotation$java_util_HashMap$uk_ac_vamsas_objects_core_AlignmentSequence$jalview_datamodel_AlignmentAnnotation.apply(this, [AlSeqMaps, sref, aa[i]]);
} else {
for (var jvalsq, $jvalsq = av.getAlignment$().getSequences$().iterator$(); $jvalsq.hasNext$()&&((jvalsq=($jvalsq.next$())),1);) {
if (jvalsq.getDatasetSequence$() === aa[i].sequenceRef ) {
var alsref=this.getjv2vObj$O(jvalsq);
p$1.saveAlignmentSequenceAnnotation$java_util_HashMap$uk_ac_vamsas_objects_core_AlignmentSequence$jalview_datamodel_AlignmentAnnotation.apply(this, [AlSeqMaps, alsref, aa[i]]);
break;
};}
}} else {
var an=this.getjv2vObj$O(aa[i]);
if (an == null ) {
an=Clazz.new_($I$(14,1));
an.setType$S("JalviewAnnotation");
an.setDescription$S(aa[i].description);
alignment.addAlignmentAnnotation$uk_ac_vamsas_objects_core_AlignmentAnnotation(an);
var vSeg=Clazz.new_($I$(15,1));
vSeg.setStart$I(1);
vSeg.setInclusive$Z(true);
vSeg.setEnd$I(jal.getWidth$());
an.addSeg$uk_ac_vamsas_objects_core_Seg(vSeg);
if (aa[i].graph > 0) {
an.setGraph$Z(true);
}an.setLabel$S(aa[i].label);
an.setProvenance$uk_ac_vamsas_objects_core_Provenance(this.dummyProvenance$());
if (aa[i].graph != 0) {
an.setGroup$S(Integer.toString$I(aa[i].graphGroup));
an.setGraph$Z(true);
} else {
an.setGraph$Z(false);
}var ae;
for (var a=0; a < aa[i].annotations.length; a++) {
if ((aa[i] == null ) || (aa[i].annotations[a] == null ) ) {
continue;
}ae=Clazz.new_($I$(16,1));
ae.setDescription$S(aa[i].annotations[a].description);
ae.addGlyph$uk_ac_vamsas_objects_core_Glyph(Clazz.new_($I$(17,1)));
ae.getGlyph$I(0).setContent$S(aa[i].annotations[a].displayCharacter);
if (an.isGraph$()) {
ae.addValue$F(aa[i].annotations[a].value);
}ae.setPosition$J(a + 1);
if (aa[i].annotations[a].secondaryStructure != " ") {
var ss=Clazz.new_($I$(17,1));
ss.setDict$S("aasecstr_3");
ss.setContent$S(String.valueOf$C(aa[i].annotations[a].secondaryStructure));
ae.addGlyph$uk_ac_vamsas_objects_core_Glyph(ss);
}an.addAnnotationElement$uk_ac_vamsas_objects_core_AnnotationElement(ae);
}
if (aa[i].editable) {
}p$1.setAnnotationType$uk_ac_vamsas_objects_core_RangeAnnotation$jalview_datamodel_AlignmentAnnotation.apply(this, [an, aa[i]]);
if (aa[i].graph != 0) {
an.setGraph$Z(true);
an.setGroup$S(Integer.toString$I(aa[i].graphGroup));
if (aa[i].threshold != null  && aa[i].threshold.displayed ) {
an.addProperty$uk_ac_vamsas_objects_core_Property($I$(18,"newProperty$S$S$S",["threshold", "float", "" + new Float(aa[i].threshold.value).toString()]));
if (aa[i].threshold.label != null ) {
an.addProperty$uk_ac_vamsas_objects_core_Property($I$(18).newProperty$S$S$S("thresholdName", "string", "" + aa[i].threshold.label));
}}}} else {
if (an.getModifiable$() == null ) {
$I$(5).log.info$O("update alignment sequence annotation. not yet implemented.");
} else {
$I$(5).log.info$O("updated alignment sequence annotation added.");
}}}}
}if ($I$(4).desktop != null ) {
var frames=$I$(4).instance.getAllFrames$();
for (var t=0; t < frames.length; t++) {
if (Clazz.instanceOf(frames[t], "jalview.gui.TreePanel")) {
var tp=frames[t];
if (tp.getViewPort$().getSequenceSetId$().equals$O(av.getSequenceSetId$())) {
var vtree=Clazz.new_($I$(19,1).c$$jalview_io_VamsasAppDatastore$jalview_gui_TreePanel$jalview_datamodel_AlignmentI$uk_ac_vamsas_objects_core_Alignment,[this, tp, jal, alignment]);
}}}
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
return false;
} else {
throw ex;
}
}
return true;
});

Clazz.newMeth(C$, 'alignmentWillBeSkipped$jalview_viewmodel_AlignmentViewport', function (av) {
return (!av.getAlignment$().isAligned$());
});

Clazz.newMeth(C$, 'addToSkipList$jalview_viewmodel_AlignmentViewport', function (av) {
if (this.skipList == null ) {
this.skipList=Clazz.new_($I$(3,1));
}this.skipList.put$O$O(av.getSequenceSetId$(), av);
}, p$1);

Clazz.newMeth(C$, 'removeValignmentSequences$uk_ac_vamsas_objects_core_Alignment$java_util_Vector', function (alignment, docseqs) {
var en=docseqs.elements$();
while (en.hasMoreElements$()){
alignment.removeAlignmentSequence$uk_ac_vamsas_objects_core_AlignmentSequence(en.nextElement$());
}
var pe=this.addProvenance$uk_ac_vamsas_objects_core_Provenance$S(alignment.getProvenance$(), "Removed " + docseqs.size$() + " sequences" );
en=alignment.enumerateAlignmentAnnotation$();
var toremove=Clazz.new_($I$(1,1));
while (en.hasMoreElements$()){
var alan=en.nextElement$();
if (alan.getSeqrefsCount$() > 0) {
var p=0;
var storem=Clazz.new_($I$(1,1));
var sr=alan.enumerateSeqrefs$();
while (sr.hasMoreElements$()){
var alsr=sr.nextElement$();
if (docseqs.contains$O(alsr)) {
storem.addElement$O(alsr);
}}
sr=storem.elements$();
while (sr.hasMoreElements$()){
alan.removeSeqrefs$O(sr.nextElement$());
}
if (alan.getSeqrefsCount$() == 0) {
toremove.addElement$O(alan);
}}}
en=toremove.elements$();
while (en.hasMoreElements$()){
alignment.removeAlignmentAnnotation$uk_ac_vamsas_objects_core_AlignmentAnnotation(en.nextElement$());
}
}, p$1);

Clazz.newMeth(C$, 'syncToAlignmentSequence$jalview_datamodel_SequenceI$uk_ac_vamsas_objects_core_Alignment$java_util_Vector', function (jvalsq, alignment, unbounddocseq) {
var modal=false;
var up2doc=false;
var alseq=this.getjv2vObj$O(jvalsq);
if (alseq == null ) {
alseq=Clazz.new_($I$(20,1));
up2doc=true;
} else {
if (unbounddocseq != null ) {
unbounddocseq.removeElement$O(alseq);
}}if (up2doc || !alseq.getSequence$().equals$O(jvalsq.getSequenceAsString$()) ) {
alseq.setSequence$S(jvalsq.getSequenceAsString$());
alseq.setStart$J(jvalsq.getStart$());
alseq.setEnd$J(jvalsq.getEnd$());
modal=true;
}if (up2doc || !alseq.getName$().equals$O(jvalsq.getName$()) ) {
modal=true;
alseq.setName$S(jvalsq.getName$());
}if (jvalsq.getDescription$() != null  && (alseq.getDescription$() == null  || !jvalsq.getDescription$().equals$O(alseq.getDescription$()) ) ) {
modal=true;
alseq.setDescription$S(jvalsq.getDescription$());
}if (this.getjv2vObj$O(jvalsq.getDatasetSequence$()) == null ) {
$I$(5).log.warn$O("Serious Implementation error - Unbound dataset sequence in alignment: " + jvalsq.getDatasetSequence$());
}alseq.setRefid$O(this.getjv2vObj$O(jvalsq.getDatasetSequence$()));
if (up2doc) {
alignment.addAlignmentSequence$uk_ac_vamsas_objects_core_AlignmentSequence(alseq);
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(jvalsq, alseq);
}return up2doc || modal ;
}, p$1);

Clazz.newMeth(C$, 'syncFromAlignmentSequence$uk_ac_vamsas_objects_core_AlignmentSequence$C$C$java_util_List', function (valseq, valGapchar, gapChar, dsseqs) {
var modal=false;
var upFromdoc=false;
var alseq=this.getvObj2jv$uk_ac_vamsas_client_Vobject(valseq);
if (alseq == null ) {
upFromdoc=true;
}if (alseq != null ) {
if (upFromdoc || !valseq.getSequence$().equals$O(alseq.getSequenceAsString$()) ) {
alseq.setSequence$S( String.instantialize(valseq.getSequence$()).replace$C$C(valGapchar, gapChar));
alseq.setStart$I((valseq.getStart$()|0));
alseq.setEnd$I((valseq.getEnd$()|0));
modal=true;
}if (!valseq.getName$().equals$O(alseq.getName$())) {
modal=true;
alseq.setName$S(valseq.getName$());
}if (alseq.getDescription$() == null  || (valseq.getDescription$() != null  && !alseq.getDescription$().equals$O(valseq.getDescription$()) ) ) {
alseq.setDescription$S(valseq.getDescription$());
modal=true;
}if (modal && $I$(5).log.isDebugEnabled$() ) {
$I$(5).log.debug$O("Updating apparently edited sequence " + alseq.getName$());
}} else {
alseq=Clazz.new_([valseq.getName$(), valseq.getSequence$().replace$C$C(valGapchar, gapChar), (valseq.getStart$()|0), (valseq.getEnd$()|0)],$I$(21,1).c$$S$S$I$I);
var datsetseq=valseq.getRefid$();
if (datsetseq != null ) {
alseq.setDatasetSequence$jalview_datamodel_SequenceI(this.getvObj2jv$uk_ac_vamsas_client_Vobject(datsetseq));
if (valseq.getDescription$() != null ) {
alseq.setDescription$S(valseq.getDescription$());
} else {
if (alseq.getDatasetSequence$().getDescription$() != null ) {
alseq.setDescription$S(alseq.getDatasetSequence$().getDescription$());
}}} else {
$I$(5).log.error$O("Invalid dataset sequence id (null) for alignment sequence " + valseq.getVorbaId$());
}this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(alseq, valseq);
alseq.setVamsasId$S(valseq.getVorbaId$().getId$());
dsseqs.add$O(alseq);
}var datsetseq=valseq.getRefid$();
if (datsetseq != null ) {
if (datsetseq !== alseq.getDatasetSequence$() ) {
modal=true;
}alseq.setDatasetSequence$jalview_datamodel_SequenceI(this.getvObj2jv$uk_ac_vamsas_client_Vobject(datsetseq));
}return upFromdoc || modal ;
}, p$1);

Clazz.newMeth(C$, 'initRangeAnnotationType$uk_ac_vamsas_objects_core_RangeAnnotation$jalview_datamodel_AlignmentAnnotation$IA', function (an, alan, gapMap) {
var vSeg=Clazz.new_($I$(15,1));
vSeg.setStart$I(1);
vSeg.setInclusive$Z(true);
vSeg.setEnd$I(gapMap.length);
an.addSeg$uk_ac_vamsas_objects_core_Seg(vSeg);
an.setDescription$S(alan.description);
an.setLabel$S(alan.label);
an.setGroup$S(Integer.toString$I(alan.graphGroup));
var ae;
for (var a=0; a < alan.annotations.length; a++) {
if (alan.annotations[a] == null ) {
continue;
}ae=Clazz.new_($I$(16,1));
ae.setDescription$S(alan.annotations[a].description);
ae.addGlyph$uk_ac_vamsas_objects_core_Glyph(Clazz.new_($I$(17,1)));
ae.getGlyph$I(0).setContent$S(alan.annotations[a].displayCharacter);
if (alan.graph != 0) {
ae.addValue$F(alan.annotations[a].value);
}ae.setPosition$J(gapMap[a] + 1);
if (alan.annotations[a].secondaryStructure != " ") {
var ss=Clazz.new_($I$(17,1));
ss.setDict$S("aasecstr_3");
ss.setContent$S(String.valueOf$C(alan.annotations[a].secondaryStructure));
ae.addGlyph$uk_ac_vamsas_objects_core_Glyph(ss);
}an.addAnnotationElement$uk_ac_vamsas_objects_core_AnnotationElement(ae);
}
}, p$1);

Clazz.newMeth(C$, 'saveDatasetSequenceAnnotation$java_util_HashMap$uk_ac_vamsas_objects_core_Sequence$jalview_datamodel_AlignmentAnnotation', function (AlSeqMaps, sref, alan) {
var an=this.getjv2vObj$O(alan);
var gapMap=p$1.getGapMap$java_util_HashMap$jalview_datamodel_AlignmentAnnotation.apply(this, [AlSeqMaps, alan]);
if (an == null ) {
an=Clazz.new_($I$(22,1));
p$1.initRangeAnnotationType$uk_ac_vamsas_objects_core_RangeAnnotation$jalview_datamodel_AlignmentAnnotation$IA.apply(this, [an, alan, gapMap]);
an.setProvenance$uk_ac_vamsas_objects_core_Provenance(this.dummyProvenance$());
p$1.setAnnotationType$uk_ac_vamsas_objects_core_RangeAnnotation$jalview_datamodel_AlignmentAnnotation.apply(this, [an, alan]);
an.setGroup$S(Integer.toString$I(alan.graphGroup));
if (alan.getThreshold$() != null  && alan.getThreshold$().displayed ) {
an.addProperty$uk_ac_vamsas_objects_core_Property($I$(18,"newProperty$S$S$S",["threshold", "float", "" + new Float(alan.getThreshold$().value).toString()]));
if (alan.getThreshold$().label != null ) {
an.addProperty$uk_ac_vamsas_objects_core_Property($I$(18,"newProperty$S$S$S",["thresholdName", "string", "" + alan.getThreshold$().label]));
}}(sref.getV_parent$()).addDataSetAnnotations$uk_ac_vamsas_objects_core_DataSetAnnotations(an);
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(alan, an);
} else {
if (an.getModifiable$() == null ) {
System.out.println$S("update dataset sequence annotation.");
} else {
System.out.println$S("make new alignment dataset sequence annotation if modification has happened.");
}}}, p$1);

Clazz.newMeth(C$, 'getGapMap$java_util_HashMap$jalview_datamodel_AlignmentAnnotation', function (AlSeqMaps, alan) {
var gapMap;
if (AlSeqMaps.containsKey$O(alan.sequenceRef)) {
gapMap=AlSeqMaps.get$O(alan.sequenceRef);
} else {
gapMap=Clazz.array(Integer.TYPE, [alan.sequenceRef.getLength$()]);
var sgapMap=alan.sequenceRef.gapMap$();
for (var a=0; a < sgapMap.length; a++) {
gapMap[sgapMap[a]]=a;
}
}return gapMap;
}, p$1);

Clazz.newMeth(C$, 'saveAlignmentSequenceAnnotation$java_util_HashMap$uk_ac_vamsas_objects_core_AlignmentSequence$jalview_datamodel_AlignmentAnnotation', function (AlSeqMaps, alsref, alan) {
var an=this.getjv2vObj$O(alan);
var gapMap=p$1.getGapMap$java_util_HashMap$jalview_datamodel_AlignmentAnnotation.apply(this, [AlSeqMaps, alan]);
if (an == null ) {
an=Clazz.new_($I$(23,1));
p$1.initRangeAnnotationType$uk_ac_vamsas_objects_core_RangeAnnotation$jalview_datamodel_AlignmentAnnotation$IA.apply(this, [an, alan, gapMap]);
an.setType$S("JalviewAnnotation");
alsref.addAlignmentSequenceAnnotation$uk_ac_vamsas_objects_core_AlignmentSequenceAnnotation(an);
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(alan, an);
p$1.setAnnotationType$uk_ac_vamsas_objects_core_RangeAnnotation$jalview_datamodel_AlignmentAnnotation.apply(this, [an, alan]);
an.setProvenance$uk_ac_vamsas_objects_core_Provenance(this.dummyProvenance$());
} else {
if (an.getModifiable$() == null ) {
System.out.println$S("update alignment sequence annotation.");
} else {
System.out.println$S("make new alignment sequence annotation if modification has happened.");
}}}, p$1);

Clazz.newMeth(C$, 'setAnnotationType$uk_ac_vamsas_objects_core_RangeAnnotation$jalview_datamodel_AlignmentAnnotation', function (an, alan) {
if (Clazz.instanceOf(an, "uk.ac.vamsas.objects.core.AlignmentSequenceAnnotation")) {
if (alan.graph != 0) {
(an).setGraph$Z(true);
} else {
(an).setGraph$Z(false);
}}if (Clazz.instanceOf(an, "uk.ac.vamsas.objects.core.AlignmentAnnotation")) {
if (alan.graph != 0) {
(an).setGraph$Z(true);
} else {
(an).setGraph$Z(false);
}}switch (alan.graph) {
case 1:
an.addProperty$uk_ac_vamsas_objects_core_Property($I$(18).newProperty$S$S$S("discrete", "boolean", "true"));
break;
case 2:
an.addProperty$uk_ac_vamsas_objects_core_Property($I$(18).newProperty$S$S$S("continuous", "boolean", "true"));
break;
default:
}
}, p$1);

Clazz.newMeth(C$, 'getSegRange$uk_ac_vamsas_objects_core_Seg$Z', function (visSeg, ensureDirection) {
var incl=visSeg.getInclusive$();
var pol=(visSeg.getStart$() <= visSeg.getEnd$()) ? 1 : -1;
var start=visSeg.getStart$() + (incl ? 0 : pol);
var end=visSeg.getEnd$() + (incl ? 0 : -pol);
if (ensureDirection && pol == -1 ) {
var t=end;
end=start;
start=t;
}return Clazz.array(Integer.TYPE, -1, [start, end, pol < 0 ? 1 : 0]);
}, p$1);

Clazz.newMeth(C$, 'isJalviewOnly$jalview_datamodel_AlignmentAnnotation', function (annotation) {
return annotation.autoCalculated || annotation.label.equals$O("Quality") || annotation.label.equals$O("Conservation") || annotation.label.equals$O("Consensus")  ;
}, p$1);

Clazz.newMeth(C$, 'updateJalviewFromAppdata$', function () {
{
var cappdata=this.cdoc.getClientAppdata$();
if (cappdata != null ) {
if (cappdata.hasClientAppdata$()) {
try {
var fromxml=Clazz.new_($I$(24,1));
fromxml.attemptversion1parse=false;
fromxml.setUniqueSetSuffix$S("");
fromxml.setObjectMappingTables$java_util_Hashtable$java_util_IdentityHashMap(this.vobj2jv, this.jv2vobj);
fromxml.setSkipList$java_util_Hashtable(this.skipList);
var jprovider=((P$.VamsasAppDatastore$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VamsasAppDatastore$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.util.jarInputStreamProvider', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getFilename$', function () {
return "Jalview Vamsas Document Client Data";
});

Clazz.newMeth(C$, 'getJarInputStream$', function () {
$I$(5).log.debug$O("Returning client input stream for Jalview from Vamsas Document.");
return Clazz.new_([this.$finals$.cappdata.getClientInputStream$()],$I$(25,1).c$$java_io_InputStream);
});
})()
), Clazz.new_(P$.VamsasAppDatastore$1.$init$,[this, {cappdata:cappdata}]));
if (this.dojvsync) {
fromxml.loadJalviewAlign$jalview_util_jarInputStreamProvider(jprovider);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
}}if (cappdata.hasUserAppdata$()) {
try {
var fromxml=Clazz.new_($I$(24,1));
fromxml.attemptversion1parse=false;
fromxml.setUniqueSetSuffix$S("");
fromxml.setSkipList$java_util_Hashtable(this.skipList);
fromxml.setObjectMappingTables$java_util_Hashtable$java_util_IdentityHashMap(p$1.mapKeysToString$java_util_Hashtable.apply(this, [this.vobj2jv]), p$1.mapValuesToString$java_util_IdentityHashMap.apply(this, [this.jv2vobj]));
var jarstream=((P$.VamsasAppDatastore$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "VamsasAppDatastore$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.util.jarInputStreamProvider', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getFilename$', function () {
return "Jalview Vamsas Document User Data";
});

Clazz.newMeth(C$, 'getJarInputStream$', function () {
$I$(5).log.debug$O("Returning user input stream for Jalview from Vamsas Document.");
return Clazz.new_([this.$finals$.cappdata.getUserInputStream$()],$I$(25,1).c$$java_io_InputStream);
});
})()
), Clazz.new_(P$.VamsasAppDatastore$2.$init$,[this, {cappdata:cappdata}]));
if (this.dojvsync) {
fromxml.loadJalviewAlign$jalview_util_jarInputStreamProvider(jarstream);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
}}p$1.flushAlignViewports.apply(this, []);
});

Clazz.newMeth(C$, 'flushAlignViewports', function () {
var views;
var av=null;
var af=null;
var newviews=this.newAlignmentViews.iterator$();
while (newviews.hasNext$()){
av=newviews.next$();
af=$I$(4).getAlignFrameFor$jalview_api_AlignViewportI(av);
var seqsetidobj=av.getSequenceSetId$();
views=$I$(4).getViewports$S(seqsetidobj);
$I$(5).log.debug$O("Found " + (views == null  ? " no " : "" + views.length) + " views for '" + av.getSequenceSetId$() + "'" );
if (views.length > 1) {
var gathered=false;
var newviewid=null;
var mappings=av.getAlignment$().getCodonFrames$();
for (var i=0; i < views.length; i++) {
if (views[i] !== av ) {
var viewframe=$I$(4).getAlignFrameFor$jalview_api_AlignViewportI(views[i]);
if (viewframe === af ) {
gathered=true;
}newviewid=views[i].getSequenceSetId$();
} else {
views[i]=null;
}}
if (gathered) {
af.closeView$jalview_api_AlignViewportI(av);
} else {
af.closeMenuItem_actionPerformed$Z(false);
}p$1.replaceJvObjMapping$O$O.apply(this, [seqsetidobj, newviewid]);
seqsetidobj=newviewid;
if (false) {
if (mappings != null ) {
$I$(26,"getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider",[$I$(4).instance]).registerMappings$java_util_List(mappings);
}}}}
newviews=null;
this.newAlignmentViews.clear$();
}, p$1);

Clazz.newMeth(C$, 'replaceJvObjMapping$O$O', function (oldjvobject, newjvobject) {
var vobject=this.jv2vobj.remove$O(oldjvobject);
if (vobject == null ) {
throw Clazz.new_([$I$(6,"formatMessage$S$SA",["error.implementation_error_old_jalview_object_not_bound", Clazz.array(String, -1, [oldjvobject.toString()])])],$I$(7,1).c$$S);
}if (newjvobject != null ) {
this.jv2vobj.put$O$O(newjvobject, vobject);
this.vobj2jv.put$O$O(vobject, newjvobject);
}}, p$1);

Clazz.newMeth(C$, 'updateJalviewClientAppdata$', function () {
var cappdata=this.cdoc.getClientAppdata$();
if (cappdata != null ) {
try {
var jxml=Clazz.new_($I$(24,1));
jxml.setObjectMappingTables$java_util_Hashtable$java_util_IdentityHashMap(p$1.mapKeysToString$java_util_Hashtable.apply(this, [this.vobj2jv]), p$1.mapValuesToString$java_util_IdentityHashMap.apply(this, [this.jv2vobj]));
jxml.setSkipList$java_util_Hashtable(this.skipList);
if (this.dojvsync) {
jxml.saveState$java_util_jar_JarOutputStream(Clazz.new_([cappdata.getClientOutputStream$()],$I$(27,1).c$$java_io_OutputStream));
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).log.error$O$Throwable("Couldn\'t update jalview client application data. Giving up - local settings probably lost.", e);
} else {
throw e;
}
}
} else {
$I$(5).log.error$O("Couldn\'t access client application data for vamsas session. This is probably a vamsas client bug.");
}});

Clazz.newMeth(C$, 'mapValuesToString$java_util_IdentityHashMap', function (jv2vobj2) {
var mapped=Clazz.new_($I$(28,1));
var keys=jv2vobj2.keySet$().iterator$();
while (keys.hasNext$()){
var key=keys.next$();
mapped.put$O$O(key, jv2vobj2.get$O(key).toString());
}
return mapped;
}, p$1);

Clazz.newMeth(C$, 'mapKeysToString$java_util_Hashtable', function (vobj2jv2) {
var mapped=Clazz.new_($I$(3,1));
var keys=vobj2jv2.keySet$().iterator$();
while (keys.hasNext$()){
var key=keys.next$();
mapped.put$O$O(key.toString(), vobj2jv2.get$O(key));
}
return mapped;
}, p$1);

Clazz.newMeth(C$, 'updateToJalview$', function () {
var _roots=this.cdoc.getVamsasRoots$();
for (var _root=0; _root < _roots.length; _root++) {
var root=_roots[_root];
var newds=false;
for (var _ds=0, _nds=root.getDataSetCount$(); _ds < _nds; _ds++) {
var dataset=root.getDataSet$I(_ds);
var i;
var iSize=dataset.getSequenceCount$();
var dsseqs;
var jdataset=this.getvObj2jv$uk_ac_vamsas_client_Vobject(dataset);
var jremain=0;
if (jdataset == null ) {
$I$(5).log.debug$O("Initialising new jalview dataset fields");
newds=true;
dsseqs=Clazz.new_($I$(1,1));
} else {
$I$(5).log.debug$O("Update jalview dataset from vamsas.");
jremain=jdataset.getHeight$();
dsseqs=jdataset.getSequences$();
}for (i=0; i < iSize; i++) {
var vdseq=dataset.getSequence$I(i);
var dssync=Clazz.new_($I$(9,1).c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_objects_core_Sequence,[this, vdseq]);
var dsseq=dssync.getJvobj$();
if (dssync.isAddfromdoc$()) {
dsseqs.add$O(dsseq);
}if (vdseq.getDbRefCount$() > 0) {
var dbref=vdseq.getDbRef$();
for (var db=0; db < dbref.length; db++) {
Clazz.new_($I$(29,1).c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_objects_core_DbRef$uk_ac_vamsas_objects_core_Sequence$jalview_datamodel_SequenceI,[this, dbref[db], vdseq, dsseq]);
}
dsseq.updatePDBIds$();
}}
if (newds) {
var seqs=Clazz.array($I$(30), [dsseqs.size$()]);
for (i=0, iSize=dsseqs.size$(); i < iSize; i++) {
seqs[i]=dsseqs.get$I(i);
dsseqs.set$I$O(i, null);
}
jdataset=Clazz.new_($I$(31,1).c$$jalview_datamodel_SequenceIA,[seqs]);
$I$(5).log.debug$O("New vamsas dataset imported into jalview.");
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(jdataset, dataset);
}if (dataset.getDataSetAnnotations$() != null ) {
for (var dsa=0; dsa < dataset.getDataSetAnnotationsCount$(); dsa++) {
var dseta=dataset.getDataSetAnnotations$I(dsa);
if (dseta.getSeqRefCount$() == 1) {
var dsSeq=this.getvObj2jv$uk_ac_vamsas_client_Vobject(dseta.getSeqRef$I(0));
if (dsSeq == null ) {
$I$(5).log.warn$O("Couldn't resolve jalview sequenceI for dataset object reference " + (dataset.getDataSetAnnotations$I(dsa).getSeqRef$I(0)).getVorbaId$().getId$());
} else {
if (dseta.getAnnotationElementCount$() == 0) {
Clazz.new_($I$(32,1).c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_objects_core_DataSetAnnotations$jalview_datamodel_SequenceI,[this, dseta, dsSeq]);
} else {
$I$(5).log.warn$O("Ignoring dataset annotation with annotationElements. Not yet supported in jalview.");
}}} else {
$I$(5).log.warn$O("Ignoring multiply referenced dataset sequence annotation for binding to datsaet sequence features.");
}}
}if (dataset.getAlignmentCount$() > 0) {
for (var al=0, nal=dataset.getAlignmentCount$(); al < nal; al++) {
var alignment=dataset.getAlignment$I(al);
var av=this.findViewport$uk_ac_vamsas_objects_core_Alignment(alignment);
var jal=null;
if (av != null ) {
jal=(av.hasHiddenRows$()) ? av.getAlignment$().getHiddenSequences$().getFullAlignment$() : av.getAlignment$();
}iSize=alignment.getAlignmentSequenceCount$();
var refreshal=false;
var newasAnnots=Clazz.new_($I$(1,1));
var gapChar=" ";
if (jal != null ) {
dsseqs=jal.getSequences$();
gapChar=jal.getGapCharacter$();
} else {
dsseqs=Clazz.new_($I$(1,1));
}var valGapchar=alignment.getGapChar$().charAt$I(0);
for (i=0; i < iSize; i++) {
var valseq=alignment.getAlignmentSequence$I(i);
var alseq=this.getvObj2jv$uk_ac_vamsas_client_Vobject(valseq);
if (p$1.syncFromAlignmentSequence$uk_ac_vamsas_objects_core_AlignmentSequence$C$C$java_util_List.apply(this, [valseq, valGapchar, gapChar, dsseqs]) && alseq != null  ) {
jremain--;
refreshal=true;
}if (valseq.getAlignmentSequenceAnnotationCount$() > 0) {
var vasannot=valseq.getAlignmentSequenceAnnotation$();
for (var a=0; a < vasannot.length; a++) {
var asa=this.getvObj2jv$uk_ac_vamsas_client_Vobject(vasannot[a]);
if (asa == null ) {
var se=p$1.getBounds$uk_ac_vamsas_objects_core_RangeType.apply(this, [vasannot[a]]);
asa=p$1.getjAlignmentAnnotation$jalview_datamodel_AlignmentI$uk_ac_vamsas_objects_core_RangeAnnotation.apply(this, [jal, vasannot[a]]);
asa.setSequenceRef$jalview_datamodel_SequenceI(alseq);
asa.createSequenceMapping$jalview_datamodel_SequenceI$I$Z(alseq, se[0], false);
alseq.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(asa);
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(asa, vasannot[a]);
refreshal=true;
newasAnnots.add$O(asa);
} else {
if (vasannot[a].getModifiable$() == null ) {
$I$(5).log.info$O("UNIMPLEMENTED: not recovering user modifiable sequence alignment annotation");
}}}
}}
if (jal == null ) {
var seqs=Clazz.array($I$(30), [dsseqs.size$()]);
for (i=0, iSize=dsseqs.size$(); i < iSize; i++) {
seqs[i]=dsseqs.get$I(i);
dsseqs.set$I$O(i, null);
}
jal=Clazz.new_($I$(31,1).c$$jalview_datamodel_SequenceIA,[seqs]);
$I$(5).log.debug$O("New vamsas alignment imported into jalview " + alignment.getVorbaId$().getId$());
jal.setDataset$jalview_datamodel_AlignmentI(jdataset);
}if (newasAnnots != null  && newasAnnots.size$() > 0 ) {
for (var an=0, anSize=newasAnnots.size$(); an < anSize; an++) {
jal.addAnnotation$jalview_datamodel_AlignmentAnnotation(newasAnnots.elementAt$I(an));
newasAnnots.setElementAt$O$I(null, an);
}
newasAnnots=null;
}if (alignment.getAlignmentAnnotationCount$() > 0) {
var an=alignment.getAlignmentAnnotation$();
for (var j=0; j < an.length; j++) {
var jan=this.getvObj2jv$uk_ac_vamsas_client_Vobject(an[j]);
if (jan != null ) {
$I$(5).log.debug$O("update from vamsas alignment annotation to existing jalview alignment annotation.");
if (an[j].getModifiable$() == null ) {
$I$(5).log.info$O("NOT IMPLEMENTED - Recovering user-modifiable annotation - yet...");
}} else {
jan=p$1.getjAlignmentAnnotation$jalview_datamodel_AlignmentI$uk_ac_vamsas_objects_core_RangeAnnotation.apply(this, [jal, an[j]]);
jal.addAnnotation$jalview_datamodel_AlignmentAnnotation(jan);
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(jan, an[j]);
refreshal=true;
}}
}var alignFrame;
if (av == null ) {
$I$(5).log.debug$O("New alignframe for alignment " + alignment.getVorbaId$());
alignFrame=Clazz.new_([jal, 700, 500, alignment.getVorbaId$().toString()],$I$(33,1).c$$jalview_datamodel_AlignmentI$I$I$S);
av=alignFrame.getViewport$();
this.newAlignmentViews.addElement$O(av);
var title=alignment.getProvenance$().getEntry$I(alignment.getProvenance$().getEntryCount$() - 1).getAction$();
if (alignment.getPropertyCount$() > 0) {
for (var p=0, pe=alignment.getPropertyCount$(); p < pe; p++) {
if (alignment.getProperty$I(p).getName$().equals$O("title")) {
title=alignment.getProperty$I(p).getContent$();
}}
}if ($I$(5).log.isDebugEnabled$()) {
title=title + "(" + alignment.getVorbaId$() + ")" ;
}$I$(4).addInternalFrame$javax_swing_JInternalFrame$S$I$I(alignFrame, title, 700, 500);
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(av.getSequenceSetId$(), alignment);
} else {
alignFrame=$I$(4).getAlignFrameFor$jalview_api_AlignViewportI(av);
if (refreshal) {
av.alignmentChanged$jalview_api_AlignmentViewPanel(alignFrame.alignPanel);
alignFrame.alignPanel.adjustAnnotationHeight$();
}}if (alignment.getTreeCount$() > 0) {
for (var t=0; t < alignment.getTreeCount$(); t++) {
var vstree=Clazz.new_([this, alignFrame, alignment.getTree$I(t)],$I$(19,1).c$$jalview_io_VamsasAppDatastore$jalview_gui_AlignFrame$uk_ac_vamsas_objects_core_Tree);
var tp=null;
if (vstree.isValidTree$()) {
tp=alignFrame.showNewickTree$jalview_io_NewickFile$S$jalview_datamodel_AlignmentView$I$I$I$I(vstree.getNewickTree$(), vstree.getTitle$(), vstree.getInputData$(), 600, 500, t * 20 + 50, t * 20 + 50);
}if (tp != null ) {
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(tp, alignment.getTree$I(t));
try {
vstree.UpdateSequenceTreeMap$jalview_gui_TreePanel(tp);
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
$I$(5).log.warn$O$Throwable("update of labels failed.", e);
} else {
throw e;
}
}
} else {
$I$(5).log.warn$O("Cannot create tree for tree " + t + " in document (" + alignment.getTree$I(t).getVorbaId$() );
}}
}}
}}
for (var _ds=0, _nds=root.getDataSetCount$(); _ds < _nds; _ds++) {
var dataset=root.getDataSet$I(_ds);
if (dataset.getSequenceMappingCount$() > 0) {
for (var sm=0, smCount=dataset.getSequenceMappingCount$(); sm < smCount; sm++) {
var seqmap=Clazz.new_([this, dataset.getSequenceMapping$I(sm)],$I$(34,1).c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_objects_core_SequenceMapping);
}
}}
}
return this.newAlignmentViews.size$();
});

Clazz.newMeth(C$, 'findViewport$uk_ac_vamsas_objects_core_Alignment', function (alignment) {
var av=null;
var avs=$I$(4,"getViewports$S",[this.getvObj2jv$uk_ac_vamsas_client_Vobject(alignment)]);
if (avs != null ) {
av=avs[0];
}return av;
});

Clazz.newMeth(C$, 'parseRangeAnnotation$uk_ac_vamsas_objects_core_RangeAnnotation', function (annotation) {
var AeContent=Clazz.array(Boolean.TYPE, -1, [false, false, false, false, false]);
var rangeMap=p$1.getMapping$uk_ac_vamsas_objects_core_RangeType.apply(this, [annotation]);
var anot=Clazz.array($I$(35), -2, [Clazz.array($I$(35), [rangeMap.length]), Clazz.array($I$(35), [rangeMap.length])]);
var mergeable=true;
if (annotation.getAnnotationElementCount$() > 0) {
var ae=annotation.getAnnotationElement$();
for (var aa=0; aa < ae.length; aa++) {
var pos=(ae[aa].getPosition$()|0) - 1;
if (pos >= 0 && pos < rangeMap.length ) {
var row=ae[aa].getAfter$() ? 1 : 0;
if (anot[row][pos] != null ) {
$I$(5).log.debug$O("Ignoring duplicate annotation site at " + pos);
continue;
}if (anot[1 - row][pos] != null ) {
mergeable=false;
}var desc="";
if (ae[aa].getDescription$() != null ) {
desc=ae[aa].getDescription$();
if (desc.length$() > 0) {
AeContent[C$.HASDESCSTR]=true;
}}var dc=null;
var ss=null;
var colour=null;
if (ae[aa].getGlyphCount$() > 0) {
var glyphs=ae[aa].getGlyph$();
for (var g=0; g < glyphs.length; g++) {
if (glyphs[g].getDict$().equals$O("aasecstr_3")) {
ss=glyphs[g].getContent$();
AeContent[C$.HASSECSTR]=true;
} else if (glyphs[g].getDict$().equals$O("kd_hydrophobicity")) {
$I$(5).log.debug$O("ignoring hydrophobicity glyph marker.");
AeContent[C$.HASHPHOB]=true;
var c=(dc=glyphs[g].getContent$()).charAt$I(0);
colour=Clazz.new_([c == "+" ? 255 : 0, c == "." ? 255 : 0, c == "-" ? 255 : 0],$I$(36,1).c$$I$I$I);
} else if (glyphs[g].getDict$().equals$O("utf8")) {
dc=glyphs[g].getContent$();
AeContent[C$.HASDC]=true;
} else {
$I$(5).log.debug$O("IMPLEMENTATION TODO: Ignoring unknown glyph type " + glyphs[g].getDict$());
}}
}var val=0;
if (ae[aa].getValueCount$() > 0) {
AeContent[C$.HASVALS]=true;
if (ae[aa].getValueCount$() > 1) {
$I$(5).log.warn$O("ignoring additional " + (ae[aa].getValueCount$() - 1) + " values in annotation element." );
}val=ae[aa].getValue$I(0);
}if (colour == null ) {
anot[row][pos]=Clazz.new_([(dc != null ) ? dc : "", desc, (ss != null ) ? ss.charAt$I(0) : " ", val],$I$(35,1).c$$S$S$C$F);
} else {
anot[row][pos]=Clazz.new_([(dc != null ) ? dc : "", desc, (ss != null ) ? ss.charAt$I(0) : " ", val, colour],$I$(35,1).c$$S$S$C$F$java_awt_Color);
}} else {
$I$(5).log.warn$O("Ignoring out of bound annotation element " + aa + " in " + annotation.getVorbaId$().getId$() );
}}
if (mergeable) {
for (var i=0; i < anot[0].length; i++) {
if (anot[1][i] != null ) {
anot[0][i]=anot[1][i];
anot[0][i].description=anot[0][i].description + " (after)";
AeContent[C$.HASDESCSTR]=true;
anot[1][i]=null;
}}
anot[1]=null;
} else {
for (var i=0; i < anot[0].length; i++) {
anot[1][i].description=anot[1][i].description + " (after)";
}
}return Clazz.array(java.lang.Object, -1, [AeContent, rangeMap, anot[0], anot[1]]);
} else {
return Clazz.array(java.lang.Object, -1, [AeContent, rangeMap, anot[0], anot[1]]);
}}, p$1);

Clazz.newMeth(C$, 'getjAlignmentAnnotation$jalview_datamodel_AlignmentI$uk_ac_vamsas_objects_core_RangeAnnotation', function (jal, annotation) {
if (annotation == null ) {
return null;
}var parsedRangeAnnotation=p$1.parseRangeAnnotation$uk_ac_vamsas_objects_core_RangeAnnotation.apply(this, [annotation]);
var a_label=annotation.getLabel$();
var a_descr=annotation.getDescription$();
var gl=null;
var type=0;
var interp=true;
if (annotation.getPropertyCount$() > 0) {
var props=annotation.getProperty$();
for (var p=0; p < props.length; p++) {
if (props[p].getName$().equalsIgnoreCase$S("discrete")) {
type=1;
interp=false;
} else if (props[p].getName$().equalsIgnoreCase$S("continuous")) {
type=2;
} else if (props[p].getName$().equalsIgnoreCase$S("threshold")) {
var val=null;
try {
val=Float.valueOf$S(props[p].getContent$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).log.warn$O("Failed to parse threshold property");
} else {
throw e;
}
}
if (val != null ) {
if (gl == null ) {
gl=Clazz.new_([val.floatValue$(), "", $I$(36).black],$I$(37,1).c$$F$S$java_awt_Color);
} else {
gl.value=val.floatValue$();
}}} else if (props[p].getName$().equalsIgnoreCase$S("thresholdName")) {
if (gl == null ) {
gl=Clazz.new_([0, "", $I$(36).black],$I$(37,1).c$$F$S$java_awt_Color);
}gl.label=props[p].getContent$();
}}
}var jan=null;
if (a_label == null  || a_label.length$() == 0 ) {
a_label=annotation.getType$();
if (a_label.length$() == 0) {
a_label="Unamed annotation";
}}if (a_descr == null  || a_descr.length$() == 0 ) {
a_descr="Annotation of type '" + annotation.getType$() + "'" ;
}if (parsedRangeAnnotation == null ) {
$I$(5).log.debug$O("Inserting empty annotation row elements for a whole-alignment annotation.");
} else {
if (parsedRangeAnnotation[3] != null ) {
$I$(5).log.warn$O("Ignoring 'After' annotation row in " + annotation.getVorbaId$());
}var arow=parsedRangeAnnotation[2];
var has=parsedRangeAnnotation[0];
if (has[C$.HASVALS]) {
if (type == 0) {
type=1;
if (has[C$.HASHPHOB]) {
type=1;
}}var first=true;
var min=0;
var max=1;
var lastval=0;
for (var i=0; i < arow.length; i++) {
if (arow[i] != null ) {
if (i - lastval > 1 && interp ) {
if (arow[lastval] != null ) {
var interval=arow[i].value - arow[lastval].value;
interval /= i - lastval;
var base=arow[lastval].value;
for (var ip=lastval + 1, np=0; ip < i; np++, ip++) {
arow[ip]=Clazz.new_($I$(35,1).c$$S$S$C$F,["", "", " ", interval * np + base]);
}
}}lastval=i;
if (first) {
min=max=arow[i].value;
first=false;
} else {
if (arow[i].value < min ) {
min=arow[i].value;
} else if (arow[i].value > max ) {
max=arow[i].value;
}}if (!has[C$.HASDESCSTR]) {
arow[i].description=new Float(arow[i].value).toString() + "";
}if (!has[C$.HASDC]) {
if (!interp) {
if (arow[i].description != null  && arow[i].description.length$() < 3 ) {
arow[i].displayCharacter= String.instantialize(arow[i].description);
}} else {
arow[i].displayCharacter=new Float(arow[i].value).toString() + "";
}}}}
jan=Clazz.new_($I$(38,1).c$$S$S$jalview_datamodel_AnnotationA$F$F$I,[a_label, a_descr, arow, min, max, type]);
} else {
if (annotation.getAnnotationElementCount$() == 0) {
}jan=Clazz.new_($I$(38,1).c$$S$S$jalview_datamodel_AnnotationA,[a_label, a_descr, arow]);
jan.setThreshold$jalview_datamodel_GraphLine(null);
jan.annotationId=annotation.getVorbaId$().toString();
}if (annotation.getLinkCount$() > 0) {
$I$(5).log.warn$O("Ignoring " + annotation.getLinkCount$() + "links added to AlignmentAnnotation." );
}if (annotation.getModifiable$() == null  || annotation.getModifiable$().length$() == 0 ) {
jan.editable=true;
}try {
if (annotation.getGroup$() != null  && annotation.getGroup$().length$() > 0 ) {
jan.graphGroup=Integer.parseInt$S(annotation.getGroup$());
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).log.info$O("UNIMPLEMENTED : Couldn\'t parse non-integer group value for setting graphGroup correctly.");
} else {
throw e;
}
}
return jan;
}return null;
}, p$1);

Clazz.newMeth(C$, 'getBounds$uk_ac_vamsas_objects_core_RangeType', function (dseta) {
if (dseta != null ) {
var se=null;
if (dseta.getSegCount$() > 0 && dseta.getPosCount$() > 0 ) {
throw Clazz.new_([$I$(6).getString$S("error.invalid_vamsas_rangetype_cannot_resolve_lists")],$I$(7,1).c$$S);
}if (dseta.getSegCount$() > 0) {
se=p$1.getSegRange$uk_ac_vamsas_objects_core_Seg$Z.apply(this, [dseta.getSeg$I(0), true]);
for (var s=1, sSize=dseta.getSegCount$(); s < sSize; s++) {
var nse=p$1.getSegRange$uk_ac_vamsas_objects_core_Seg$Z.apply(this, [dseta.getSeg$I(s), true]);
if (se[0] > nse[0]) {
se[0]=nse[0];
}if (se[1] < nse[1]) {
se[1]=nse[1];
}}
}if (dseta.getPosCount$() > 0) {
var pos=dseta.getPos$I(0).getI$();
se=Clazz.array(Integer.TYPE, -1, [pos, pos]);
for (var p=0, pSize=dseta.getPosCount$(); p < pSize; p++) {
pos=dseta.getPos$I(p).getI$();
if (se[0] > pos) {
se[0]=pos;
}if (se[1] < pos) {
se[1]=pos;
}}
}return se;
}return null;
}, p$1);

Clazz.newMeth(C$, 'getMapping$uk_ac_vamsas_objects_core_RangeType', function (dseta) {
var posList=Clazz.new_($I$(1,1));
if (dseta != null ) {
var se=null;
if (dseta.getSegCount$() > 0 && dseta.getPosCount$() > 0 ) {
throw Clazz.new_([$I$(6).getString$S("error.invalid_vamsas_rangetype_cannot_resolve_lists")],$I$(7,1).c$$S);
}if (dseta.getSegCount$() > 0) {
for (var s=0, sSize=dseta.getSegCount$(); s < sSize; s++) {
se=p$1.getSegRange$uk_ac_vamsas_objects_core_Seg$Z.apply(this, [dseta.getSeg$I(s), false]);
var se_end=se[1 - se[2]] + (se[2] == 0 ? 1 : -1);
for (var p=se[se[2]]; p != se_end; p+=se[2] == 0 ? 1 : -1) {
posList.add$O(Integer.valueOf$I(p));
}
}
} else if (dseta.getPosCount$() > 0) {
var pos=dseta.getPos$I(0).getI$();
for (var p=0, pSize=dseta.getPosCount$(); p < pSize; p++) {
pos=dseta.getPos$I(p).getI$();
posList.add$O(Integer.valueOf$I(pos));
}
}}if (posList != null  && posList.size$() > 0 ) {
var range=Clazz.array(Integer.TYPE, [posList.size$()]);
for (var i=0; i < range.length; i++) {
range[i]=(posList.elementAt$I(i)).intValue$();
}
posList.clear$();
return range;
}return null;
}, p$1);

Clazz.newMeth(C$, 'parsemapType$uk_ac_vamsas_objects_core_MapType$I$I', function (maprange, localu, mappedu) {
var ml=null;
var localRange=p$1.getMapping$uk_ac_vamsas_objects_core_RangeType.apply(this, [maprange.getLocal$()]);
var mappedRange=p$1.getMapping$uk_ac_vamsas_objects_core_RangeType.apply(this, [maprange.getMapped$()]);
var lu=maprange.getLocal$().hasUnit$() ? maprange.getLocal$().getUnit$() : localu;
var mu=maprange.getMapped$().hasUnit$() ? maprange.getMapped$().getUnit$() : mappedu;
ml=Clazz.new_([localRange, mappedRange, (lu|0), (mu|0)],$I$(39,1).c$$IA$IA$I$I);
return ml;
}, p$1);

Clazz.newMeth(C$, 'initRangeType$uk_ac_vamsas_objects_core_RangeType$java_util_List', function (mrt, ranges) {
for (var range, $range = ranges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
var vSeg=Clazz.new_($I$(15,1));
vSeg.setStart$I(range[0]);
vSeg.setEnd$I(range[1]);
mrt.addSeg$uk_ac_vamsas_objects_core_Seg(vSeg);
}
}, p$1);

Clazz.newMeth(C$, 'initMapType$uk_ac_vamsas_objects_core_MapType$jalview_util_MapList$Z', function (maprange, ml, setUnits) {
maprange.setLocal$uk_ac_vamsas_objects_core_Local(Clazz.new_($I$(40,1)));
maprange.setMapped$uk_ac_vamsas_objects_core_Mapped(Clazz.new_($I$(41,1)));
p$1.initRangeType$uk_ac_vamsas_objects_core_RangeType$java_util_List.apply(this, [maprange.getLocal$(), ml.getFromRanges$()]);
p$1.initRangeType$uk_ac_vamsas_objects_core_RangeType$java_util_List.apply(this, [maprange.getMapped$(), ml.getToRanges$()]);
if (setUnits) {
maprange.getLocal$().setUnit$J(ml.getFromRatio$());
maprange.getLocal$().setUnit$J(ml.getToRatio$());
}}, p$1);

Clazz.newMeth(C$, 'getJalviewProvenance$uk_ac_vamsas_objects_core_Provenance', function (prov) {
var jprov=Clazz.new_($I$(42,1));
for (var i=0; i < prov.getEntryCount$(); i++) {
jprov.addEntry$S$S$java_util_Date$S(prov.getEntry$I(i).getUser$(), prov.getEntry$I(i).getAction$(), prov.getEntry$I(i).getDate$(), prov.getEntry$I(i).getId$());
}
return jprov;
});

Clazz.newMeth(C$, 'dummyProvenance$', function () {
return this.dummyProvenance$S(null);
});

Clazz.newMeth(C$, 'dummyPEntry$S', function (action) {
var entry=Clazz.new_($I$(43,1));
entry.setApp$S(this.provEntry.getApp$());
if (action != null ) {
entry.setAction$S(action);
} else {
entry.setAction$S("created.");
}entry.setDate$java_util_Date(Clazz.new_($I$(44,1)));
entry.setUser$S(this.provEntry.getUser$());
return entry;
});

Clazz.newMeth(C$, 'dummyProvenance$S', function (action) {
var prov=Clazz.new_($I$(11,1));
prov.addEntry$uk_ac_vamsas_objects_core_Entry(this.dummyPEntry$S(action));
return prov;
});

Clazz.newMeth(C$, 'addProvenance$uk_ac_vamsas_objects_core_Provenance$S', function (p, action) {
var dentry=this.dummyPEntry$S(action);
p.addEntry$uk_ac_vamsas_objects_core_Entry(dentry);
return dentry;
});

Clazz.newMeth(C$, 'getProvEntry$', function () {
return this.provEntry;
});

Clazz.newMeth(C$, 'getClientDocument$', function () {
return this.cdoc;
});

Clazz.newMeth(C$, 'getJvObjectBinding$', function () {
return this.jv2vobj;
});

Clazz.newMeth(C$, 'getVamsasObjectBinding$', function () {
return this.vobj2jv;
});

Clazz.newMeth(C$, 'storeSequenceMappings$jalview_viewmodel_AlignmentViewport$S', function (viewport, title) {
var av=viewport;
try {
var jal=av.getAlignment$();
var dataset=null;
if (jal.getDataset$() == null ) {
$I$(5).log.warn$O("Creating new dataset for an alignment.");
jal.setDataset$jalview_datamodel_AlignmentI(null);
}dataset=(this.getjv2vObj$O(viewport.getSequenceSetId$())).getV_parent$();
if (dataset == null ) {
dataset=this.getjv2vObj$O(jal.getDataset$());
$I$(5).log.error$O("Can\'t find the correct dataset for the alignment in this view. Creating new one.");
}var cframes=av.getAlignment$().getCodonFrames$();
if (cframes != null ) {
for (var acf, $acf = cframes.iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
if (acf.getdnaSeqs$() != null  && acf.getdnaSeqs$().length > 0 ) {
var dmps=acf.getdnaSeqs$();
var mps=acf.getProtMappings$();
for (var smp=0; smp < mps.length; smp++) {
var mfrom=this.getjv2vObj$O(dmps[smp]);
if (mfrom != null ) {
Clazz.new_($I$(34,1).c$$jalview_io_VamsasAppDatastore$jalview_datamodel_Mapping$uk_ac_vamsas_objects_core_SequenceType$uk_ac_vamsas_objects_core_DataSet,[this, mps[smp], mfrom, dataset]);
} else {
$I$(5).log.warn$O("NO Vamsas Binding for local sequence! NOT CREATING MAPPING FOR " + dmps[smp].getDisplayId$Z(true) + " to " + mps[smp].getTo$().getName$() );
}}
}}
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('Exception').c$$S$Throwable,[$I$(6,"formatMessage$S$SA",["exception.couldnt_store_sequence_mappings", Clazz.array(String, -1, [title])]), e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'clearSkipList$', function () {
if (this.skipList != null ) {
this.skipList.clear$();
}});

Clazz.newMeth(C$, 'getSkipList$', function () {
return this.skipList;
});

Clazz.newMeth(C$, 'setSkipList$java_util_Hashtable', function (skipList) {
this.skipList=skipList;
});

Clazz.newMeth(C$, 'getDatastoreRegisty$', function () {
if (this.dsReg == null ) {
this.dsReg=Clazz.new_($I$(2,1));
}return this.dsReg;
});

C$.$static$=function(){C$.$static$=0;
C$.HASSECSTR=0;
C$.HASVALS=1;
C$.HASHPHOB=2;
C$.HASDC=3;
C$.HASDESCSTR=4;
C$.HASTWOSTATE=5;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
