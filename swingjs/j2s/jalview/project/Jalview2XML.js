(function(){var P$=Clazz.newPackage("jalview.project"),p$1={},I$=[[0,'jalview.util.Platform','java.util.HashMap','java.util.IdentityHashMap','java.util.ArrayList',['jalview.project.Jalview2XML','.SeqFref'],'java.io.FileOutputStream','java.util.jar.JarOutputStream','jalview.bin.Console','jalview.gui.Desktop','java.util.Arrays','java.util.Hashtable','java.io.File','jalview.io.BackupFiles','jalview.xml.binding.jalview.ObjectFactory','jalview.xml.binding.jalview.VAMSAS','java.util.GregorianCalendar','javax.xml.datatype.DatatypeFactory','jalview.bin.Cache','jalview.xml.binding.jalview.SequenceSet',['jalview.xml.binding.jalview.SequenceSet','.SequenceSetProperties'],'java.util.HashSet',['jalview.xml.binding.jalview.JalviewModel','.JSeq'],'jalview.xml.binding.jalview.Feature',['jalview.xml.binding.jalview.Feature','.OtherData'],['jalview.xml.binding.jalview.JalviewModel','.JSeq','.Pdbids'],['jalview.xml.binding.jalview.Pdbentry','.Property'],'jalview.xml.binding.jalview.AlcodonFrame',['jalview.xml.binding.jalview.AlcodonFrame','.AlcodMap'],['jalview.xml.binding.jalview.JalviewModel','.Tree'],['jalview.xml.binding.jalview.JalviewModel','.JGroup'],['jalview.xml.binding.jalview.JalviewModel','.Viewport'],'jalview.schemes.ColourSchemeProperty',['jalview.xml.binding.jalview.JalviewModel','.FeatureSettings'],'java.util.Vector',['jalview.xml.binding.jalview.JalviewModel','.FeatureSettings','.Setting'],'jalview.xml.binding.jalview.NoValueColour',['jalview.xml.binding.jalview.JalviewModel','.FeatureSettings','.Group'],['jalview.xml.binding.jalview.JalviewModel','.Viewport','.HiddenColumns'],'java.util.jar.JarEntry','java.io.PrintWriter','java.io.OutputStreamWriter','javax.xml.bind.JAXBContext','jalview.xml.binding.jalview.JalviewModel',['jalview.xml.binding.jalview.JalviewModel','.PcaViewer'],['jalview.math.RotatableMatrix','.Axis'],['jalview.xml.binding.jalview.JalviewModel','.PcaViewer','.SeqPointMin'],['jalview.xml.binding.jalview.JalviewModel','.PcaViewer','.SeqPointMax'],['jalview.xml.binding.jalview.JalviewModel','.PcaViewer','.SequencePoint'],['jalview.xml.binding.jalview.JalviewModel','.PcaViewer','.Axis'],'jalview.xml.binding.jalview.PcaDataType','jalview.xml.binding.jalview.DoubleMatrix','jalview.xml.binding.jalview.DoubleVector','jalview.math.Matrix',['jalview.xml.binding.jalview.JalviewModel','.JSeq','.RnaViewer'],['jalview.xml.binding.jalview.JalviewModel','.JSeq','.RnaViewer','.SecondaryStructure'],'java.io.FileInputStream','java.util.Locale',['jalview.xml.binding.jalview.JalviewModel','.JSeq','.Pdbids','.StructureState'],'jalview.xml.binding.jalview.AnnotationColourScheme','jalview.xml.binding.jalview.Annotation',['jalview.xml.binding.jalview.Annotation','.ThresholdLine'],['jalview.xml.binding.jalview.Annotation','.Property'],'jalview.xml.binding.jalview.AnnotationElement','java.awt.Color',['jalview.xml.binding.jalview.JalviewModel','.Viewport','.CalcIdParam'],'jalview.ws.jws2.Jws2Discoverer','jalview.ws.jws2.dm.AAConSettings','Error','jalview.util.MessageManager','jalview.xml.binding.jalview.Sequence',['jalview.xml.binding.jalview.Sequence','.DBRef'],'jalview.xml.binding.jalview.Mapping',['jalview.xml.binding.jalview.MapListType','.MapListFrom'],['jalview.xml.binding.jalview.MapListType','.MapListTo'],'java.math.BigInteger',['jalview.xml.binding.jalview.JalviewModel','.UserColours'],'jalview.xml.binding.jalview.JalviewUserColours',['jalview.xml.binding.jalview.JalviewUserColours','.Colour'],'jalview.schemes.ResidueProperties','jalview.util.Format','jalview.schemes.UserColourScheme','javax.swing.SwingUtilities','jalview.util.HttpUtils','java.net.URL','java.util.jar.JarInputStream','java.io.ByteArrayInputStream','javax.xml.stream.XMLInputFactory','jalview.structure.StructureSelectionManager','jalview.gui.SplitFrame','jalview.gui.JvOptionPane','jalview.datamodel.Sequence','jalview.datamodel.SequenceI','jalview.datamodel.Alignment','jalview.datamodel.SequenceFeature','jalview.datamodel.PDBEntry',['jalview.datamodel.PDBEntry','.Type'],'jalview.datamodel.AlignedCodonFrame','jalview.datamodel.Annotation','jalview.datamodel.AlignmentAnnotation','jalview.datamodel.GraphLine',['jalview.project.Jalview2XML','.JvAnnotRow'],'jalview.datamodel.SequenceGroup','jalview.analysis.Conservation','jalview.ext.varna.RnaModel','jalview.datamodel.RnaViewerModel','jalview.gui.AppVarna','jalview.io.NewickFile','java.awt.Rectangle','java.awt.Font','java.util.LinkedHashMap',['jalview.gui.StructureViewer','.ViewerType'],'jalview.datamodel.StructureViewerModel',['jalview.datamodel.StructureViewerModel','.StructureData'],'jalview.io.DataSourceType','Thread','jalview.util.StringUtils','jalview.gui.AlignFrame','jalview.io.FileFormat','jalview.gui.PaintRefresher','jalview.viewmodel.seqfeatures.FeaturesDisplayed','jalview.schemes.FeatureColour','jalview.viewmodel.seqfeatures.FeatureRendererSettings','jalview.schemes.AnnotationColourGradient','jalview.util.QuickSort','jalview.analysis.AlignSeq','jalview.util.Comparison','jalview.datamodel.GeneLocus','jalview.datamodel.DBRefEntry','jalview.datamodel.Mapping','StringBuilder','java.io.BufferedReader','java.io.InputStreamReader','jalview.analysis.scoremodels.SimilarityParams','jalview.gui.PCAPanel','jalview.analysis.scoremodels.ScoreModels','jalview.analysis.PCA','jalview.datamodel.Point','jalview.datamodel.SequencePoint','jalview.gui.StructureViewer','jalview.gui.OOMWarning','jalview.xml.binding.jalview.ThresholdType','jalview.xml.binding.jalview.FeatureMatcherSet',['jalview.xml.binding.jalview.FeatureMatcherSet','.CompoundMatcher'],'java.util.Collections','jalview.xml.binding.jalview.FeatureMatcher','jalview.xml.binding.jalview.FilterBy','jalview.datamodel.features.FeatureMatcherSet','jalview.util.matcher.Condition','jalview.datamodel.features.FeatureMatcher']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Jalview2XML", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['SeqFref',1024],['JvAnnotRow',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.counter=0;
this.seqsToIds=null;
this.seqRefIds=null;
this.incompleteSeqs=null;
this.frefedSequence=null;
this.raiseGUI=true;
this.splitFrameCandidates=Clazz.new_($I$(2,1));
this.rnaSessions=Clazz.new_($I$(2,1));
this.viewportsAdded=Clazz.new_($I$(2,1));
this.annotationIds=Clazz.new_($I$(2,1));
this.uniqueSetSuffix="";
this.pdbfiles=null;
this.jv2vobj=null;
this.errorMessage=null;
this.attemptversion1parse=false;
this.alreadyLoadedPDB=Clazz.new_($I$(2,1));
this.updateLocalViews=false;
this.newStructureViewers=null;
this.skipList=null;
this.seqToDataset=Clazz.new_($I$(2,1));
this.datasetIds=null;
this.dataset2Ids=null;
},1);

C$.$fields$=[['Z',['raiseGUI','attemptversion1parse','updateLocalViews'],'I',['counter'],'S',['uniqueSetSuffix','errorMessage'],'O',['seqsToIds','java.util.IdentityHashMap','seqRefIds','java.util.Map','+incompleteSeqs','frefedSequence','java.util.List','splitFrameCandidates','java.util.Map','+rnaSessions','+viewportsAdded','+annotationIds','pdbfiles','java.util.List','jv2vobj','java.util.IdentityHashMap','vobj2jv','java.util.Hashtable','alreadyLoadedPDB','java.util.Map','newStructureViewers','java.util.Vector','skipList','java.util.Hashtable','seqToDataset','java.util.HashMap','datasetIds','java.util.Hashtable','dataset2Ids','java.util.IdentityHashMap','jvids2vobj','java.util.Hashtable']]]

Clazz.newMeth(C$, 'safeBoolean$Boolean',  function (b) {
return b == null  ? false : b.booleanValue$();
}, 1);

Clazz.newMeth(C$, 'safeInt$Integer',  function (i) {
return i == null  ? 0 : i.intValue$();
}, 1);

Clazz.newMeth(C$, 'safeFloat$Float',  function (f) {
return f == null  ? 0.0 : f.floatValue$();
}, 1);

Clazz.newMeth(C$, 'seqHash$jalview_datamodel_SequenceI',  function (sq) {
if (this.seqsToIds == null ) {
this.initSeqRefs$();
}if (this.seqsToIds.containsKey$O(sq)) {
return this.seqsToIds.get$O(sq);
} else {
var key="sq" + (this.seqsToIds.size$() + 1);
key=p$1.makeHashCode$O$S.apply(this, [sq, key]);
this.seqsToIds.put$O$O(sq, key);
return key;
}});

Clazz.newMeth(C$, 'initSeqRefs$',  function () {
if (this.seqsToIds == null ) {
this.seqsToIds=Clazz.new_($I$(3,1));
}if (this.seqRefIds == null ) {
this.seqRefIds=Clazz.new_($I$(2,1));
}if (this.incompleteSeqs == null ) {
this.incompleteSeqs=Clazz.new_($I$(2,1));
}if (this.frefedSequence == null ) {
this.frefedSequence=Clazz.new_($I$(4,1));
}});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (raiseGUI) {
;C$.$init$.apply(this);
this.raiseGUI=raiseGUI;
}, 1);

Clazz.newMeth(C$, 'newMappingRef$S$jalview_datamodel_Mapping',  function (sref, _jmap) {
var fref=((P$.Jalview2XML$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Jalview2XML$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['jalview.project.Jalview2XML','.SeqFref']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.jmap=_jmap;
},1);

C$.$fields$=[['O',['jmap','jalview.datamodel.Mapping']]]

Clazz.newMeth(C$, 'resolve$',  function () {
var seq=this.getSrefDatasetSeq$();
if (seq == null ) {
return false;
}this.jmap.setTo$jalview_datamodel_SequenceI(seq);
return true;
});
})()
), Clazz.new_($I$(5,1).c$$S$S,[this, null, sref, "Mapping"],P$.Jalview2XML$1));
return fref;
});

Clazz.newMeth(C$, 'newAlcodMapRef$S$jalview_datamodel_AlignedCodonFrame$jalview_datamodel_Mapping',  function (sref, _cf, _jmap) {
var fref=((P$.Jalview2XML$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Jalview2XML$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['jalview.project.Jalview2XML','.SeqFref']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cf=_cf;
this.mp=_jmap;
},1);

C$.$fields$=[['O',['cf','jalview.datamodel.AlignedCodonFrame','mp','jalview.datamodel.Mapping']]]

Clazz.newMeth(C$, 'isResolvable$',  function () {
return C$.superclazz.prototype.isResolvable$.apply(this, []) && this.mp.getTo$() != null  ;
});

Clazz.newMeth(C$, 'resolve$',  function () {
var seq=this.getSrefDatasetSeq$();
if (seq == null ) {
return false;
}this.cf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(seq, this.mp.getTo$(), this.mp.getMap$());
return true;
});
})()
), Clazz.new_($I$(5,1).c$$S$S,[this, null, sref, "Codon Frame"],P$.Jalview2XML$2));
return fref;
});

Clazz.newMeth(C$, 'resolveFrefedSequences$',  function () {
var nextFref=this.frefedSequence.iterator$();
var toresolve=this.frefedSequence.size$();
var unresolved=0;
var failedtoresolve=0;
while (nextFref.hasNext$()){
var ref=nextFref.next$();
if (ref.isResolvable$()) {
try {
if (ref.resolve$()) {
nextFref.remove$();
} else {
++failedtoresolve;
}} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
System.err.println$S("IMPLEMENTATION ERROR: Failed to resolve forward reference for sequence " + ref.getSref$());
x.printStackTrace$();
++failedtoresolve;
} else {
throw x;
}
}
} else {
++unresolved;
}}
if (unresolved > 0) {
System.err.println$S("Jalview Project Import: There were " + unresolved + " forward references left unresolved on the stack." );
}if (failedtoresolve > 0) {
System.err.println$S("SERIOUS! " + failedtoresolve + " resolvable forward references failed to resolve." );
}if (this.incompleteSeqs != null  && this.incompleteSeqs.size$() > 0 ) {
System.err.println$S("Jalview Project Import: There are " + this.incompleteSeqs.size$() + " sequences which may have incomplete metadata." );
if (this.incompleteSeqs.size$() < 10) {
for (var s, $s = this.incompleteSeqs.values$().iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
System.err.println$S(s.toString());
}
} else {
System.err.println$S("Too many to report. Skipping output of incomplete sequences.");
}}});

Clazz.newMeth(C$, 'saveState$java_io_File',  function (statefile) {
var fos=null;
try {
fos=Clazz.new_($I$(6,1).c$$java_io_File,[statefile]);
var jout=Clazz.new_($I$(7,1).c$$java_io_OutputStream,[fos]);
this.saveState$java_util_jar_JarOutputStream(jout);
fos.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(8).error$S$Throwable("Couln't write Jalview state to " + statefile, e);
if (this.errorMessage == null ) {
this.errorMessage="Did't write Jalview Archive to output file '" + statefile + "' - See console error log for details" ;
} else {
this.errorMessage+="(Didn't write Jalview Archive to output file '" + statefile + ")" ;
}e.printStackTrace$();
} else {
throw e;
}
} finally {
if (fos != null ) {
try {
fos.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
this.reportErrors$();
});

Clazz.newMeth(C$, 'saveState$java_util_jar_JarOutputStream',  function (jout) {
var frames=$I$(9).getAlignFrames$();
if (frames == null ) {
return;
}p$1.saveAllFrames$java_util_List$java_util_jar_JarOutputStream.apply(this, [$I$(10).asList$OA(frames), jout]);
});

Clazz.newMeth(C$, 'saveAllFrames$java_util_List$java_util_jar_JarOutputStream',  function (frames, jout) {
var dsses=Clazz.new_($I$(11,1));
this.rnaSessions.clear$();
this.splitFrameCandidates.clear$();
try {
var shortNames=Clazz.new_($I$(4,1));
var viewIds=Clazz.new_($I$(4,1));
for (var i=frames.size$() - 1; i > -1; i--) {
var af=frames.get$I(i);
if (this.skipList != null  && this.skipList.containsKey$O(af.getViewport$().getSequenceSetId$()) ) {
continue;
}var shortName=this.makeFilename$jalview_gui_AlignFrame$java_util_List(af, shortNames);
var apSize=af.getAlignPanels$().size$();
for (var ap=0; ap < apSize; ap++) {
var apanel=af.getAlignPanels$().get$I(ap);
var fileName=apSize == 1 ? shortName : ap + shortName;
if (!fileName.endsWith$S(".xml")) {
fileName=fileName + ".xml";
}this.saveState$jalview_gui_AlignmentPanel$S$java_util_jar_JarOutputStream$java_util_List(apanel, fileName, jout, viewIds);
var dssid=p$1.getDatasetIdRef$jalview_datamodel_AlignmentI.apply(this, [af.getViewport$().getAlignment$().getDataset$()]);
if (!dsses.containsKey$O(dssid)) {
dsses.put$O$O(dssid, af);
}}
}
p$1.writeDatasetFor$java_util_Hashtable$S$java_util_jar_JarOutputStream.apply(this, [dsses, "" + jout.hashCode$() + " " + this.uniqueSetSuffix , jout]);
try {
jout.flush$();
} catch (foo) {
if (Clazz.exceptionOf(foo,"Exception")){
} else {
throw foo;
}
}
jout.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
if (this.errorMessage == null ) {
this.errorMessage="Couldn\'t write Jalview Archive - see error output for details";
}ex.printStackTrace$();
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'makeFilename$jalview_gui_AlignFrame$java_util_List',  function (af, namesUsed) {
var shortName=af.getTitle$();
if (shortName.indexOf$I($I$(12).separatorChar) > -1) {
shortName=shortName.substring$I(shortName.lastIndexOf$I($I$(12).separatorChar) + 1);
}var count=1;
while (namesUsed.contains$O(shortName)){
if (shortName.endsWith$S("_" + (count - 1))) {
shortName=shortName.substring$I$I(0, shortName.lastIndexOf$S("_"));
}shortName=shortName.concat$S("_" + count);
++count;
}
namesUsed.add$O(shortName);
if (!shortName.endsWith$S(".xml")) {
shortName=shortName + ".xml";
}return shortName;
});

Clazz.newMeth(C$, 'saveAlignment$jalview_gui_AlignFrame$S$S',  function (af, jarFile, fileName) {
try {
var doBackup=$I$(13).getEnabled$();
var backupfiles=doBackup ? Clazz.new_($I$(13,1).c$$S,[jarFile]) : null;
var fos=Clazz.new_([doBackup ? backupfiles.getTempFilePath$() : jarFile],$I$(6,1).c$$S);
var jout=Clazz.new_($I$(7,1).c$$java_io_OutputStream,[fos]);
var frames=Clazz.new_($I$(4,1));
if (af.getViewport$().getCodingComplement$() != null ) {
frames=(af.getSplitViewContainer$()).getAlignFrames$();
} else {
frames.add$O(af);
}p$1.saveAllFrames$java_util_List$java_util_jar_JarOutputStream.apply(this, [frames, jout]);
try {
jout.flush$();
} catch (foo) {
if (Clazz.exceptionOf(foo,"Exception")){
} else {
throw foo;
}
}
jout.close$();
var success=true;
if (doBackup) {
backupfiles.setWriteSuccess$Z(success);
success=backupfiles.rollBackupsAndRenameTempFile$();
}return success;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.errorMessage="Couldn\'t Write alignment view to Jalview Archive - see error output for details";
ex.printStackTrace$();
return false;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'writeDatasetFor$java_util_Hashtable$S$java_util_jar_JarOutputStream',  function (dsses, fileName, jout) {
for (var dssids, $dssids = dsses.keySet$().iterator$(); $dssids.hasNext$()&&((dssids=($dssids.next$())),1);) {
var _af=dsses.get$O(dssids);
var jfileName=fileName + " Dataset for " + _af.getTitle$() ;
if (!jfileName.endsWith$S(".xml")) {
jfileName=jfileName + ".xml";
}this.saveState$jalview_gui_AlignmentPanel$S$Z$java_util_jar_JarOutputStream$java_util_List(_af.alignPanel, jfileName, true, jout, null);
}
}, p$1);

Clazz.newMeth(C$, 'saveState$jalview_gui_AlignmentPanel$S$java_util_jar_JarOutputStream$java_util_List',  function (ap, fileName, jout, viewIds) {
return this.saveState$jalview_gui_AlignmentPanel$S$Z$java_util_jar_JarOutputStream$java_util_List(ap, fileName, false, jout, viewIds);
});

Clazz.newMeth(C$, 'saveState$jalview_gui_AlignmentPanel$S$Z$java_util_jar_JarOutputStream$java_util_List',  function (ap, fileName, storeDS, jout, viewIds) {
if (viewIds == null ) {
viewIds=Clazz.new_($I$(4,1));
}this.initSeqRefs$();
var userColours=Clazz.new_($I$(4,1));
var av=ap.av;
var vpRanges=av.getRanges$();
var objectFactory=Clazz.new_($I$(14,1));
var object=objectFactory.createJalviewModel$();
object.setVamsasModel$jalview_xml_binding_jalview_VAMSAS(Clazz.new_($I$(15,1)));
try {
var c=Clazz.new_($I$(16,1));
var datatypeFactory=$I$(17).newInstance$();
var now=datatypeFactory.newXMLGregorianCalendar$java_util_GregorianCalendar(c);
object.setCreationDate$javax_xml_datatype_XMLGregorianCalendar(now);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.datatype.DatatypeConfigurationException")){
System.err.println$S("error writing date: " + e.toString());
} else {
throw e;
}
}
object.setVersion$S($I$(18).getDefault$S$S("VERSION", "Development Build"));
var rjal=av.getAlignment$();
var jal=rjal;
if (av.hasHiddenRows$()) {
rjal=jal.getHiddenSequences$().getFullAlignment$();
}var vamsasSet=Clazz.new_($I$(19,1));
var vamsasSeq;
vamsasSet.setGapChar$S(jal.getGapCharacter$() + "");
if (jal.getDataset$() != null ) {
vamsasSet.setDatasetId$S(p$1.getDatasetIdRef$jalview_datamodel_AlignmentI.apply(this, [jal.getDataset$()]));
if (storeDS) {
jal=jal.getDataset$();
rjal=jal;
}}if (jal.getProperties$() != null ) {
var en=jal.getProperties$().keys$();
while (en.hasMoreElements$()){
var key=en.nextElement$().toString();
var ssp=Clazz.new_($I$(20,1));
ssp.setKey$S(key);
ssp.setValue$S(jal.getProperties$().get$O(key).toString());
vamsasSet.getSequenceSetProperties$().add$O(ssp);
}
}var jseq;
var calcIdSet=Clazz.new_($I$(21,1));
var vamsasSetIds=Clazz.new_($I$(2,1));
for (var jds, $jds = rjal.getSequences$().iterator$(); $jds.hasNext$()&&((jds=($jds.next$())),1);) {
var jdatasq=jds.getDatasetSequence$() == null  ? jds : jds.getDatasetSequence$();
var id=this.seqHash$jalview_datamodel_SequenceI(jds);
if (vamsasSetIds.get$O(id) == null ) {
if (this.seqRefIds.get$O(id) != null  && !storeDS ) {
} else {
vamsasSeq=p$1.createVamsasSequence$S$jalview_datamodel_SequenceI.apply(this, [id, jds]);
vamsasSet.getSequence$().add$O(vamsasSeq);
vamsasSetIds.put$O$O(id, vamsasSeq);
this.seqRefIds.put$O$O(id, jds);
}}jseq=Clazz.new_($I$(22,1));
jseq.setStart$I(jds.getStart$());
jseq.setEnd$I(jds.getEnd$());
jseq.setColour$Integer(Integer.valueOf$I(av.getSequenceColour$jalview_datamodel_SequenceI(jds).getRGB$()));
jseq.setId$S(id);
if (!storeDS) {
if (av.hasHiddenRows$()) {
jseq.setHidden$Boolean(Boolean.valueOf$Z(av.getAlignment$().getHiddenSequences$().isHidden$jalview_datamodel_SequenceI(jds)));
if (av.isHiddenRepSequence$jalview_datamodel_SequenceI(jds)) {
var reps=av.getRepresentedSequences$jalview_datamodel_SequenceI(jds).getSequencesInOrder$jalview_datamodel_AlignmentI(rjal);
for (var h=0; h < reps.length; h++) {
if (reps[h] !== jds ) {
jseq.getHiddenSequences$().add$O(Integer.valueOf$I(rjal.findIndex$jalview_datamodel_SequenceI(reps[h])));
}}
}}if (jal.hasSeqrep$()) {
jseq.setViewreference$Boolean(Boolean.valueOf$Z(jds === jal.getSeqrep$() ));
}}var sfs=jds.getSequenceFeatures$();
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var features=Clazz.new_($I$(23,1));
features.setBegin$I(sf.getBegin$());
features.setEnd$I(sf.getEnd$());
features.setDescription$S(sf.getDescription$());
features.setType$S(sf.getType$());
features.setFeatureGroup$S(sf.getFeatureGroup$());
features.setScore$Float(Float.valueOf$F(sf.getScore$()));
if (sf.links != null ) {
for (var l=0; l < sf.links.size$(); l++) {
var keyValue=Clazz.new_($I$(24,1));
keyValue.setKey$S("LINK_" + l);
keyValue.setValue$S(sf.links.elementAt$I(l).toString());
features.getOtherData$().add$O(keyValue);
}
}if (sf.otherDetails != null ) {
for (var entry, $entry = sf.otherDetails.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
var value=entry.getValue$();
if (Clazz.instanceOf(value, "java.util.Map")) {
for (var subAttribute, $subAttribute = (value).entrySet$().iterator$(); $subAttribute.hasNext$()&&((subAttribute=($subAttribute.next$())),1);) {
var otherData=Clazz.new_($I$(24,1));
otherData.setKey$S(key);
otherData.setKey2$S(subAttribute.getKey$());
otherData.setValue$S(subAttribute.getValue$().toString());
features.getOtherData$().add$O(otherData);
}
} else {
var otherData=Clazz.new_($I$(24,1));
otherData.setKey$S(key);
otherData.setValue$S(value.toString());
features.getOtherData$().add$O(otherData);
}}
}jseq.getFeatures$().add$O(features);
}
if (jdatasq.getAllPDBEntries$() != null ) {
var en=jdatasq.getAllPDBEntries$().elements$();
while (en.hasMoreElements$()){
var pdb=Clazz.new_($I$(25,1));
var entry=en.nextElement$();
var pdbId=entry.getId$();
pdb.setId$S(pdbId);
pdb.setType$S(entry.getType$());
var frames=$I$(9).desktop.getAllFrames$();
var matchedFile=null;
for (var f=frames.length - 1; f > -1; f--) {
if (Clazz.instanceOf(frames[f], "jalview.gui.StructureViewerBase")) {
var viewFrame=frames[f];
matchedFile=this.saveStructureViewer$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceI$jalview_xml_binding_jalview_JalviewModel_JSeq_Pdbids$jalview_datamodel_PDBEntry$java_util_List$S$jalview_gui_StructureViewerBase(ap, jds, pdb, entry, viewIds, matchedFile, viewFrame);
var viewId=viewFrame.getViewId$();
var viewerType=viewFrame.getViewerType$().toString();
if (!storeDS && !viewIds.contains$O(viewId) ) {
viewIds.add$O(viewId);
var viewerState=viewFrame.saveSession$();
if (viewerState != null ) {
this.copyFileToJar$java_util_jar_JarOutputStream$S$S$S(jout, viewerState.getPath$(), this.getViewerJarEntryName$S(viewId), viewerType);
} else {
$I$(8).error$S("Failed to save viewer state for " + viewerType);
}}}}
if (matchedFile != null  || entry.getFile$() != null  ) {
if (entry.getFile$() != null ) {
matchedFile=entry.getFile$();
}pdb.setFile$S(matchedFile);
if (this.pdbfiles == null ) {
this.pdbfiles=Clazz.new_($I$(4,1));
}if (!this.pdbfiles.contains$O(pdbId)) {
this.pdbfiles.add$O(pdbId);
this.copyFileToJar$java_util_jar_JarOutputStream$S$S$S(jout, matchedFile, pdbId, pdbId);
}}var props=entry.getProperties$();
if (props.hasMoreElements$()) {
while (props.hasMoreElements$()){
var prop=Clazz.new_($I$(26,1));
var key=props.nextElement$();
prop.setName$S(key);
prop.setValue$S(entry.getProperty$S(key).toString());
pdb.getProperty$().add$O(prop);
}
}jseq.getPdbids$().add$O(pdb);
}
}this.saveRnaViewers$java_util_jar_JarOutputStream$jalview_xml_binding_jalview_JalviewModel_JSeq$jalview_datamodel_SequenceI$java_util_List$jalview_gui_AlignmentPanel$Z(jout, jseq, jds, viewIds, ap, storeDS);
object.getJSeq$().add$O(jseq);
}
if (!storeDS && av.hasHiddenRows$() ) {
jal=av.getAlignment$();
}if (storeDS && jal.getCodonFrames$() != null  ) {
var jac=jal.getCodonFrames$();
for (var acf, $acf = jac.iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
var alc=Clazz.new_($I$(27,1));
if (acf.getProtMappings$() != null  && acf.getProtMappings$().length > 0 ) {
var hasMap=false;
var dnas=acf.getdnaSeqs$();
var pmaps=acf.getProtMappings$();
for (var m=0; m < pmaps.length; m++) {
var alcmap=Clazz.new_($I$(28,1));
alcmap.setDnasq$S(this.seqHash$jalview_datamodel_SequenceI(dnas[m]));
alcmap.setMapping$jalview_xml_binding_jalview_Mapping(p$1.createVamsasMapping$jalview_datamodel_Mapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$Z.apply(this, [pmaps[m], dnas[m], null, false]));
alc.getAlcodMap$().add$O(alcmap);
hasMap=true;
}
if (hasMap) {
vamsasSet.getAlcodonFrame$().add$O(alc);
}}}
}if (!storeDS && av.getCurrentTree$() != null  ) {
if ($I$(9).desktop != null ) {
var frames=$I$(9).desktop.getAllFrames$();
for (var t=0; t < frames.length; t++) {
if (Clazz.instanceOf(frames[t], "jalview.gui.TreePanel")) {
var tp=frames[t];
if (tp.getTreeCanvas$().getViewport$().getAlignment$() === jal ) {
var tree=Clazz.new_($I$(29,1));
tree.setTitle$S(tp.getTitle$());
tree.setCurrentTree$Boolean(Boolean.valueOf$Z((av.getCurrentTree$() === tp.getTree$() )));
tree.setNewick$S(tp.getTree$().print$());
tree.setThreshold$Float(Float.valueOf$F(tp.getTreeCanvas$().getThreshold$()));
tree.setFitToWindow$Boolean(Boolean.valueOf$Z(tp.fitToWindow.getState$()));
tree.setFontName$S(tp.getTreeFont$().getName$());
tree.setFontSize$Integer(Integer.valueOf$I(tp.getTreeFont$().getSize$()));
tree.setFontStyle$Integer(Integer.valueOf$I(tp.getTreeFont$().getStyle$()));
tree.setMarkUnlinked$Boolean(Boolean.valueOf$Z(tp.placeholdersMenu.getState$()));
tree.setShowBootstrap$Boolean(Boolean.valueOf$Z(tp.bootstrapMenu.getState$()));
tree.setShowDistances$Boolean(Boolean.valueOf$Z(tp.distanceMenu.getState$()));
tree.setHeight$Integer(Integer.valueOf$I(tp.getHeight$()));
tree.setWidth$Integer(Integer.valueOf$I(tp.getWidth$()));
tree.setXpos$Integer(Integer.valueOf$I(tp.getX$()));
tree.setYpos$Integer(Integer.valueOf$I(tp.getY$()));
tree.setId$S(p$1.makeHashCode$O$S.apply(this, [tp, null]));
tree.setLinkToAllViews$Boolean(Boolean.valueOf$Z(tp.getTreeCanvas$().isApplyToAllViews$()));
object.getTree$().add$O(tree);
}}}
}}if (!storeDS && $I$(9).desktop != null  ) {
for (var frame, $frame = 0, $$frame = $I$(9).desktop.getAllFrames$(); $frame<$$frame.length&&((frame=($$frame[$frame])),1);$frame++) {
if (Clazz.instanceOf(frame, "jalview.gui.PCAPanel")) {
var panel=frame;
if (panel.getAlignViewport$().getAlignment$() === jal ) {
this.savePCA$jalview_gui_PCAPanel$jalview_xml_binding_jalview_JalviewModel(panel, object);
}}}
}var groupRefs=Clazz.new_($I$(3,1));
if (storeDS) {
for (var sq, $sq = jal.getSequences$().iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
var aa=sq.getAnnotation$();
if (aa != null  && aa.length > 0 ) {
p$1.storeAlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA$java_util_IdentityHashMap$jalview_viewmodel_AlignmentViewport$java_util_Set$Z$jalview_xml_binding_jalview_SequenceSet.apply(this, [aa, groupRefs, av, calcIdSet, storeDS, vamsasSet]);
}}
} else {
if (jal.getAlignmentAnnotation$() != null ) {
var aa=jal.getAlignmentAnnotation$();
p$1.storeAlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA$java_util_IdentityHashMap$jalview_viewmodel_AlignmentViewport$java_util_Set$Z$jalview_xml_binding_jalview_SequenceSet.apply(this, [aa, groupRefs, av, calcIdSet, storeDS, vamsasSet]);
}}if (jal.getGroups$() != null ) {
var groups=Clazz.array($I$(30), [jal.getGroups$().size$()]);
var i=-1;
for (var sg, $sg = jal.getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
var jGroup=Clazz.new_($I$(30,1));
groups[++i]=jGroup;
jGroup.setStart$Integer(Integer.valueOf$I(sg.getStartRes$()));
jGroup.setEnd$Integer(Integer.valueOf$I(sg.getEndRes$()));
jGroup.setName$S(sg.getName$());
if (groupRefs.containsKey$O(sg)) {
jGroup.setId$S(groupRefs.get$O(sg));
}var colourScheme=sg.getColourScheme$();
if (colourScheme != null ) {
var groupColourScheme=sg.getGroupColourScheme$();
if (groupColourScheme.conservationApplied$()) {
jGroup.setConsThreshold$Integer(Integer.valueOf$I(groupColourScheme.getConservationInc$()));
if (Clazz.instanceOf(colourScheme, "jalview.schemes.UserColourScheme")) {
jGroup.setColour$S(this.setUserColourScheme$jalview_schemes_ColourSchemeI$java_util_List$jalview_xml_binding_jalview_JalviewModel(colourScheme, userColours, object));
} else {
jGroup.setColour$S(colourScheme.getSchemeName$());
}} else if (Clazz.instanceOf(colourScheme, "jalview.schemes.AnnotationColourGradient")) {
jGroup.setColour$S("AnnotationColourGradient");
jGroup.setAnnotationColours$jalview_xml_binding_jalview_AnnotationColourScheme(p$1.constructAnnotationColours$jalview_schemes_AnnotationColourGradient$java_util_List$jalview_xml_binding_jalview_JalviewModel.apply(this, [colourScheme, userColours, object]));
} else if (Clazz.instanceOf(colourScheme, "jalview.schemes.UserColourScheme")) {
jGroup.setColour$S(this.setUserColourScheme$jalview_schemes_ColourSchemeI$java_util_List$jalview_xml_binding_jalview_JalviewModel(colourScheme, userColours, object));
} else {
jGroup.setColour$S(colourScheme.getSchemeName$());
}jGroup.setPidThreshold$Integer(Integer.valueOf$I(groupColourScheme.getThreshold$()));
}jGroup.setOutlineColour$Integer(Integer.valueOf$I(sg.getOutlineColour$().getRGB$()));
jGroup.setDisplayBoxes$Boolean(Boolean.valueOf$Z(sg.getDisplayBoxes$()));
jGroup.setDisplayText$Boolean(Boolean.valueOf$Z(sg.getDisplayText$()));
jGroup.setColourText$Boolean(Boolean.valueOf$Z(sg.getColourText$()));
jGroup.setTextCol1$Integer(Integer.valueOf$I(sg.textColour.getRGB$()));
jGroup.setTextCol2$Integer(Integer.valueOf$I(sg.textColour2.getRGB$()));
jGroup.setTextColThreshold$Integer(Integer.valueOf$I(sg.thresholdTextColour));
jGroup.setShowUnconserved$Boolean(Boolean.valueOf$Z(sg.getShowNonconserved$()));
jGroup.setIgnoreGapsinConsensus$Boolean(Boolean.valueOf$Z(sg.getIgnoreGapsConsensus$()));
jGroup.setShowConsensusHistogram$Boolean(Boolean.valueOf$Z(sg.isShowConsensusHistogram$()));
jGroup.setShowSequenceLogo$Boolean(Boolean.valueOf$Z(sg.isShowSequenceLogo$()));
jGroup.setNormaliseSequenceLogo$Boolean(Boolean.valueOf$Z(sg.isNormaliseSequenceLogo$()));
for (var seq, $seq = sg.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
jGroup.getSeq$().add$O(this.seqHash$jalview_datamodel_SequenceI(seq));
}
}
var group;
for (var grp, $grp = 0, $$grp = groups; $grp<$$grp.length&&((grp=($$grp[$grp])),1);$grp++) {
object.getJGroup$().add$O(grp);
}
}if (!storeDS) {
var view=Clazz.new_($I$(31,1));
view.setTitle$S(ap.alignFrame.getTitle$());
view.setSequenceSetId$S(p$1.makeHashCode$O$S.apply(this, [av.getSequenceSetId$(), av.getSequenceSetId$()]));
view.setId$S(av.getViewId$());
if (av.getCodingComplement$() != null ) {
view.setComplementId$S(av.getCodingComplement$().getViewId$());
}view.setViewName$S(av.getViewName$());
view.setGatheredViews$Boolean(Boolean.valueOf$Z(av.isGatherViewsHere$()));
var size=ap.av.getExplodedGeometry$();
var position=size;
if (size == null ) {
size=ap.alignFrame.getBounds$();
if (av.getCodingComplement$() != null ) {
position=(ap.alignFrame.getSplitViewContainer$()).getBounds$();
} else {
position=size;
}}view.setXpos$Integer(Integer.valueOf$I(position.x));
view.setYpos$Integer(Integer.valueOf$I(position.y));
view.setWidth$Integer(Integer.valueOf$I(size.width));
view.setHeight$Integer(Integer.valueOf$I(size.height));
view.setStartRes$Integer(Integer.valueOf$I(vpRanges.getStartRes$()));
view.setStartSeq$Integer(Integer.valueOf$I(vpRanges.getStartSeq$()));
if (Clazz.instanceOf(av.getGlobalColourScheme$(), "jalview.schemes.UserColourScheme")) {
view.setBgColour$S(this.setUserColourScheme$jalview_schemes_ColourSchemeI$java_util_List$jalview_xml_binding_jalview_JalviewModel(av.getGlobalColourScheme$(), userColours, object));
} else if (Clazz.instanceOf(av.getGlobalColourScheme$(), "jalview.schemes.AnnotationColourGradient")) {
var ac=p$1.constructAnnotationColours$jalview_schemes_AnnotationColourGradient$java_util_List$jalview_xml_binding_jalview_JalviewModel.apply(this, [av.getGlobalColourScheme$(), userColours, object]);
view.setAnnotationColours$jalview_xml_binding_jalview_AnnotationColourScheme(ac);
view.setBgColour$S("AnnotationColourGradient");
} else {
view.setBgColour$S($I$(32,"getColourName$jalview_schemes_ColourSchemeI",[av.getGlobalColourScheme$()]));
}var vcs=av.getResidueShading$();
var cs=av.getGlobalColourScheme$();
if (cs != null ) {
if (vcs.conservationApplied$()) {
view.setConsThreshold$Integer(Integer.valueOf$I(vcs.getConservationInc$()));
if (Clazz.instanceOf(cs, "jalview.schemes.UserColourScheme")) {
view.setBgColour$S(this.setUserColourScheme$jalview_schemes_ColourSchemeI$java_util_List$jalview_xml_binding_jalview_JalviewModel(cs, userColours, object));
}}view.setPidThreshold$Integer(Integer.valueOf$I(vcs.getThreshold$()));
}view.setConservationSelected$Boolean(Boolean.valueOf$Z(av.getConservationSelected$()));
view.setPidSelected$Boolean(Boolean.valueOf$Z(av.getAbovePIDThreshold$()));
var font=av.getFont$();
view.setFontName$S(font.getName$());
view.setFontSize$Integer(Integer.valueOf$I(font.getSize$()));
view.setFontStyle$Integer(Integer.valueOf$I(font.getStyle$()));
view.setScaleProteinAsCdna$Boolean(Boolean.valueOf$Z(av.getViewStyle$().isScaleProteinAsCdna$()));
view.setRenderGaps$Boolean(Boolean.valueOf$Z(av.isRenderGaps$()));
view.setShowAnnotation$Boolean(Boolean.valueOf$Z(av.isShowAnnotation$()));
view.setShowBoxes$Boolean(Boolean.valueOf$Z(av.getShowBoxes$()));
view.setShowColourText$Boolean(Boolean.valueOf$Z(av.getColourText$()));
view.setShowFullId$Boolean(Boolean.valueOf$Z(av.getShowJVSuffix$()));
view.setRightAlignIds$Boolean(Boolean.valueOf$Z(av.isRightAlignIds$()));
view.setShowSequenceFeatures$Boolean(Boolean.valueOf$Z(av.isShowSequenceFeatures$()));
view.setShowText$Boolean(Boolean.valueOf$Z(av.getShowText$()));
view.setShowUnconserved$Boolean(Boolean.valueOf$Z(av.getShowUnconserved$()));
view.setWrapAlignment$Boolean(Boolean.valueOf$Z(av.getWrapAlignment$()));
view.setTextCol1$Integer(Integer.valueOf$I(av.getTextColour$().getRGB$()));
view.setTextCol2$Integer(Integer.valueOf$I(av.getTextColour2$().getRGB$()));
view.setTextColThreshold$Integer(Integer.valueOf$I(av.getThresholdTextColour$()));
view.setShowConsensusHistogram$Boolean(Boolean.valueOf$Z(av.isShowConsensusHistogram$()));
view.setShowSequenceLogo$Boolean(Boolean.valueOf$Z(av.isShowSequenceLogo$()));
view.setNormaliseSequenceLogo$Boolean(Boolean.valueOf$Z(av.isNormaliseSequenceLogo$()));
view.setShowGroupConsensus$Boolean(Boolean.valueOf$Z(av.isShowGroupConsensus$()));
view.setShowGroupConservation$Boolean(Boolean.valueOf$Z(av.isShowGroupConservation$()));
view.setShowNPfeatureTooltip$Boolean(Boolean.valueOf$Z(av.isShowNPFeats$()));
view.setShowDbRefTooltip$Boolean(Boolean.valueOf$Z(av.isShowDBRefs$()));
view.setFollowHighlight$Boolean(Boolean.valueOf$Z(av.isFollowHighlight$()));
view.setFollowSelection$Boolean(Boolean.valueOf$Z(av.followSelection));
view.setIgnoreGapsinConsensus$Boolean(Boolean.valueOf$Z(av.isIgnoreGapsConsensus$()));
view.setShowComplementFeatures$Boolean(Boolean.valueOf$Z(av.isShowComplementFeatures$()));
view.setShowComplementFeaturesOnTop$Boolean(Boolean.valueOf$Z(av.isShowComplementFeaturesOnTop$()));
if (av.getFeaturesDisplayed$() != null ) {
var fs=Clazz.new_($I$(33,1));
var fr=ap.getSeqPanel$().seqCanvas.getFeatureRenderer$();
var renderOrder=fr.getRenderOrder$().toArray$OA(Clazz.array(String, [0]));
var settingsAdded=Clazz.new_($I$(34,1));
if (renderOrder != null ) {
for (var featureType, $featureType = 0, $$featureType = renderOrder; $featureType<$$featureType.length&&((featureType=($$featureType[$featureType])),1);$featureType++) {
var setting=Clazz.new_($I$(35,1));
setting.setType$S(featureType);
var filter=fr.getFeatureFilter$S(featureType);
if (filter != null ) {
var filters=filter.getMatchers$().iterator$();
var firstFilter=filters.next$();
setting.setMatcherSet$jalview_xml_binding_jalview_FeatureMatcherSet(C$.marshalFilter$jalview_datamodel_features_FeatureMatcherI$java_util_Iterator$Z(firstFilter, filters, filter.isAnded$()));
}var fcol=fr.getFeatureStyle$S(featureType);
if (!fcol.isSimpleColour$()) {
setting.setColour$I(fcol.getMaxColour$().getRGB$());
setting.setMincolour$Integer(Integer.valueOf$I(fcol.getMinColour$().getRGB$()));
setting.setMin$Float(Float.valueOf$F(fcol.getMin$()));
setting.setMax$Float(Float.valueOf$F(fcol.getMax$()));
setting.setColourByLabel$Boolean(Boolean.valueOf$Z(fcol.isColourByLabel$()));
if (fcol.isColourByAttribute$()) {
var attName=fcol.getAttributeName$();
setting.getAttributeName$().add$O(attName[0]);
if (attName.length > 1) {
setting.getAttributeName$().add$O(attName[1]);
}}setting.setAutoScale$Boolean(Boolean.valueOf$Z(fcol.isAutoScaled$()));
setting.setThreshold$Float(Float.valueOf$F(fcol.getThreshold$()));
var noColour=fcol.getNoColour$();
if (noColour == null ) {
setting.setNoValueColour$jalview_xml_binding_jalview_NoValueColour($I$(36).NONE);
} else if (noColour.equals$O(fcol.getMaxColour$())) {
setting.setNoValueColour$jalview_xml_binding_jalview_NoValueColour($I$(36).MAX);
} else {
setting.setNoValueColour$jalview_xml_binding_jalview_NoValueColour($I$(36).MIN);
}setting.setThreshstate$Integer(Integer.valueOf$I(fcol.isAboveThreshold$() ? 1 : (fcol.isBelowThreshold$() ? 0 : -1)));
} else {
setting.setColour$I(fcol.getColour$().getRGB$());
}setting.setDisplay$Z(av.getFeaturesDisplayed$().isVisible$S(featureType));
var rorder=fr.getOrder$S(featureType);
if (rorder > -1 ) {
setting.setOrder$Float(Float.valueOf$F(rorder));
}fs.getSetting$().add$O(setting);
settingsAdded.addElement$O(featureType);
}
}var en=fr.getFeatureGroups$().iterator$();
var groupsAdded=Clazz.new_($I$(34,1));
while (en.hasNext$()){
var grp=en.next$();
if (groupsAdded.contains$O(grp)) {
continue;
}var g=Clazz.new_($I$(37,1));
g.setName$S(grp);
g.setDisplay$Z((fr.checkGroupVisibility$S$Z(grp, false)).booleanValue$());
fs.getGroup$().add$O(g);
groupsAdded.addElement$O(grp);
}
object.setFeatureSettings$jalview_xml_binding_jalview_JalviewModel_FeatureSettings(fs);
}if (av.hasHiddenColumns$()) {
var hidden=av.getAlignment$().getHiddenColumns$();
if (hidden == null ) {
$I$(8,"warn$S",["REPORT BUG: avoided null columnselection bug (DMAM reported). Please contact Jim about this."]);
} else {
var hiddenRegions=hidden.iterator$();
while (hiddenRegions.hasNext$()){
var region=hiddenRegions.next$();
var hc=Clazz.new_($I$(38,1));
hc.setStart$Integer(Integer.valueOf$I(region[0]));
hc.setEnd$Integer(Integer.valueOf$I(region[1]));
view.getHiddenColumns$().add$O(hc);
}
}}if (calcIdSet.size$() > 0) {
for (var calcId, $calcId = calcIdSet.iterator$(); $calcId.hasNext$()&&((calcId=($calcId.next$())),1);) {
if (calcId.trim$().length$() > 0) {
var cidp=p$1.createCalcIdParam$S$jalview_gui_AlignViewport.apply(this, [calcId, av]);
if (cidp != null ) {
view.getCalcIdParam$().add$O(cidp);
}}}
}object.getViewport$().add$O(view);
}object.getVamsasModel$().getSequenceSet$().add$O(vamsasSet);
if (jout != null  && fileName != null  ) {
try {
fileName=fileName.replace$C$C("\\", "/");
System.out.println$S("Writing jar entry " + fileName);
var entry=Clazz.new_($I$(39,1).c$$S,[fileName]);
jout.putNextEntry$java_util_zip_ZipEntry(entry);
var pout=Clazz.new_([Clazz.new_($I$(41,1).c$$java_io_OutputStream$S,[jout, "UTF-8"])],$I$(40,1).c$$java_io_Writer);
var jaxbContext=$I$(42,"newInstance$ClassA",[Clazz.array(Class, -1, [Clazz.getClass($I$(43))])]);
var jaxbMarshaller=jaxbContext.createMarshaller$();
jaxbMarshaller.marshal$O$java_io_Writer(Clazz.new_($I$(14,1)).createJalviewModel$jalview_xml_binding_jalview_JalviewModel(object), pout);
pout.flush$();
jout.closeEntry$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Error writing Jalview project");
ex.printStackTrace$();
} else {
throw ex;
}
}
}return object;
});

Clazz.newMeth(C$, 'savePCA$jalview_gui_PCAPanel$jalview_xml_binding_jalview_JalviewModel',  function (panel, object) {
try {
var viewer=Clazz.new_($I$(44,1));
viewer.setHeight$Integer(Integer.valueOf$I(panel.getHeight$()));
viewer.setWidth$Integer(Integer.valueOf$I(panel.getWidth$()));
viewer.setXpos$Integer(Integer.valueOf$I(panel.getX$()));
viewer.setYpos$Integer(Integer.valueOf$I(panel.getY$()));
viewer.setTitle$S(panel.getTitle$());
var pcaModel=panel.getPcaModel$();
viewer.setScoreModelName$S(pcaModel.getScoreModelName$());
viewer.setXDim$Integer(Integer.valueOf$I(panel.getSelectedDimensionIndex$jalview_math_RotatableMatrix_Axis($I$(45).X)));
viewer.setYDim$Integer(Integer.valueOf$I(panel.getSelectedDimensionIndex$jalview_math_RotatableMatrix_Axis($I$(45).Y)));
viewer.setZDim$Integer(Integer.valueOf$I(panel.getSelectedDimensionIndex$jalview_math_RotatableMatrix_Axis($I$(45).Z)));
viewer.setBgColour$Integer(Integer.valueOf$I(panel.getRotatableCanvas$().getBackgroundColour$().getRGB$()));
viewer.setScaleFactor$Float(Float.valueOf$F(panel.getRotatableCanvas$().getScaleFactor$()));
var spMin=panel.getRotatableCanvas$().getSeqMin$();
var spmin=Clazz.new_($I$(46,1));
spmin.setXPos$Float(Float.valueOf$F(spMin[0]));
spmin.setYPos$Float(Float.valueOf$F(spMin[1]));
spmin.setZPos$Float(Float.valueOf$F(spMin[2]));
viewer.setSeqPointMin$jalview_xml_binding_jalview_JalviewModel_PcaViewer_SeqPointMin(spmin);
var spMax=panel.getRotatableCanvas$().getSeqMax$();
var spmax=Clazz.new_($I$(47,1));
spmax.setXPos$Float(Float.valueOf$F(spMax[0]));
spmax.setYPos$Float(Float.valueOf$F(spMax[1]));
spmax.setZPos$Float(Float.valueOf$F(spMax[2]));
viewer.setSeqPointMax$jalview_xml_binding_jalview_JalviewModel_PcaViewer_SeqPointMax(spmax);
viewer.setShowLabels$Boolean(Boolean.valueOf$Z(panel.getRotatableCanvas$().isShowLabels$()));
viewer.setLinkToAllViews$Boolean(Boolean.valueOf$Z(panel.getRotatableCanvas$().isApplyToAllViews$()));
var sp=pcaModel.getSimilarityParameters$();
viewer.setIncludeGaps$Boolean(Boolean.valueOf$Z(sp.includeGaps$()));
viewer.setMatchGaps$Boolean(Boolean.valueOf$Z(sp.matchGaps$()));
viewer.setIncludeGappedColumns$Boolean(Boolean.valueOf$Z(sp.includeGappedColumns$()));
viewer.setDenominateByShortestLength$Boolean(Boolean.valueOf$Z(sp.denominateByShortestLength$()));
for (var spt, $spt = pcaModel.getSequencePoints$().iterator$(); $spt.hasNext$()&&((spt=($spt.next$())),1);) {
var point=Clazz.new_($I$(48,1));
point.setSequenceRef$S(this.seqHash$jalview_datamodel_SequenceI(spt.getSequence$()));
point.setXPos$Float(Float.valueOf$F(spt.coord.x));
point.setYPos$Float(Float.valueOf$F(spt.coord.y));
point.setZPos$Float(Float.valueOf$F(spt.coord.z));
viewer.getSequencePoint$().add$O(point);
}
for (var p, $p = 0, $$p = panel.getRotatableCanvas$().getAxisEndPoints$(); $p<$$p.length&&((p=($$p[$p])),1);$p++) {
var axis=Clazz.new_($I$(49,1));
axis.setXPos$Float(Float.valueOf$F(p.x));
axis.setYPos$Float(Float.valueOf$F(p.y));
axis.setZPos$Float(Float.valueOf$F(p.z));
viewer.getAxis$().add$O(axis);
}
var data=Clazz.new_($I$(50,1));
viewer.setPcaData$jalview_xml_binding_jalview_PcaDataType(data);
var pca=pcaModel.getPcaData$();
var pm=Clazz.new_($I$(51,1));
this.saveDoubleMatrix$jalview_math_MatrixI$jalview_xml_binding_jalview_DoubleMatrix(pca.getPairwiseScores$(), pm);
data.setPairwiseMatrix$jalview_xml_binding_jalview_DoubleMatrix(pm);
var tm=Clazz.new_($I$(51,1));
this.saveDoubleMatrix$jalview_math_MatrixI$jalview_xml_binding_jalview_DoubleMatrix(pca.getTridiagonal$(), tm);
data.setTridiagonalMatrix$jalview_xml_binding_jalview_DoubleMatrix(tm);
var eigenMatrix=Clazz.new_($I$(51,1));
data.setEigenMatrix$jalview_xml_binding_jalview_DoubleMatrix(eigenMatrix);
this.saveDoubleMatrix$jalview_math_MatrixI$jalview_xml_binding_jalview_DoubleMatrix(pca.getEigenmatrix$(), eigenMatrix);
object.getPcaViewer$().add$O(viewer);
} catch (t) {
$I$(8,"error$S",["Error saving PCA: " + t.getMessage$()]);
}
});

Clazz.newMeth(C$, 'saveDoubleMatrix$jalview_math_MatrixI$jalview_xml_binding_jalview_DoubleMatrix',  function (m, xmlMatrix) {
xmlMatrix.setRows$Integer(Integer.valueOf$I(m.height$()));
xmlMatrix.setColumns$Integer(Integer.valueOf$I(m.width$()));
for (var i=0; i < m.height$(); i++) {
var row=Clazz.new_($I$(52,1));
for (var j=0; j < m.width$(); j++) {
row.getV$().add$O(Double.valueOf$D(m.getValue$I$I(i, j)));
}
xmlMatrix.getRow$().add$O(row);
}
if (m.getD$() != null ) {
var dVector=Clazz.new_($I$(52,1));
for (var d, $d = 0, $$d = m.getD$(); $d<$$d.length&&((d=($$d[$d])),1);$d++) {
dVector.getV$().add$O(Double.valueOf$D(d));
}
xmlMatrix.setD$jalview_xml_binding_jalview_DoubleVector(dVector);
}if (m.getE$() != null ) {
var eVector=Clazz.new_($I$(52,1));
for (var e, $e = 0, $$e = m.getE$(); $e<$$e.length&&((e=($$e[$e])),1);$e++) {
eVector.getV$().add$O(Double.valueOf$D(e));
}
xmlMatrix.setE$jalview_xml_binding_jalview_DoubleVector(eVector);
}});

Clazz.newMeth(C$, 'loadDoubleMatrix$jalview_xml_binding_jalview_DoubleMatrix',  function (mData) {
var rows=(mData.getRows$()).$c();
var vals=Clazz.array(Double.TYPE, [rows, null]);
for (var i=0; i < rows; i++) {
var dVector=mData.getRow$().get$I(i).getV$();
vals[i]=Clazz.array(Double.TYPE, [dVector.size$()]);
var dvi=0;
for (var d, $d = dVector.iterator$(); $d.hasNext$()&&((d=($d.next$())),1);) {
vals[i][dvi++]=(d).valueOf();
}
}
var m=Clazz.new_($I$(53,1).c$$DAA,[vals]);
if (mData.getD$() != null ) {
var dVector=mData.getD$().getV$();
var vec=Clazz.array(Double.TYPE, [dVector.size$()]);
var dvi=0;
for (var d, $d = dVector.iterator$(); $d.hasNext$()&&((d=($d.next$())),1);) {
vec[dvi++]=(d).valueOf();
}
m.setD$DA(vec);
}if (mData.getE$() != null ) {
var dVector=mData.getE$().getV$();
var vec=Clazz.array(Double.TYPE, [dVector.size$()]);
var dvi=0;
for (var d, $d = dVector.iterator$(); $d.hasNext$()&&((d=($d.next$())),1);) {
vec[dvi++]=(d).valueOf();
}
m.setE$DA(vec);
}return m;
});

Clazz.newMeth(C$, 'saveRnaViewers$java_util_jar_JarOutputStream$jalview_xml_binding_jalview_JalviewModel_JSeq$jalview_datamodel_SequenceI$java_util_List$jalview_gui_AlignmentPanel$Z',  function (jout, jseq, jds, viewIds, ap, storeDataset) {
if ($I$(9).desktop == null ) {
return;
}var frames=$I$(9).desktop.getAllFrames$();
for (var f=frames.length - 1; f > -1; f--) {
if (Clazz.instanceOf(frames[f], "jalview.gui.AppVarna")) {
var varna=frames[f];
if (varna.isListeningFor$jalview_datamodel_SequenceI(jds) && ap === varna.getAlignmentPanel$()  ) {
var viewId=varna.getViewId$();
var rna=Clazz.new_($I$(54,1));
rna.setViewId$S(viewId);
rna.setTitle$S(varna.getTitle$());
rna.setXpos$Integer(Integer.valueOf$I(varna.getX$()));
rna.setYpos$Integer(Integer.valueOf$I(varna.getY$()));
rna.setWidth$Integer(Integer.valueOf$I(varna.getWidth$()));
rna.setHeight$Integer(Integer.valueOf$I(varna.getHeight$()));
rna.setDividerLocation$Integer(Integer.valueOf$I(varna.getDividerLocation$()));
rna.setSelectedRna$Integer(Integer.valueOf$I(varna.getSelectedIndex$()));
jseq.getRnaViewer$().add$O(rna);
for (var model, $model = varna.getModels$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
if (model.seq === jds ) {
var jarEntryName=this.rnaSessions.get$O(model);
if (jarEntryName == null ) {
var varnaStateFile=varna.getStateInfo$fr_orsay_lri_varna_models_rna_RNA(model.rna);
jarEntryName="rna_" + viewId + "_" + p$1.nextCounter.apply(this, []) ;
this.copyFileToJar$java_util_jar_JarOutputStream$S$S$S(jout, varnaStateFile, jarEntryName, "Varna");
this.rnaSessions.put$O$O(model, jarEntryName);
}var ss=Clazz.new_($I$(55,1));
var annotationId=varna.getAnnotation$jalview_datamodel_SequenceI(jds).annotationId;
ss.setAnnotationId$S(annotationId);
ss.setViewerState$S(jarEntryName);
ss.setGapped$Boolean(Boolean.valueOf$Z(model.gapped));
ss.setTitle$S(model.title);
rna.getSecondaryStructure$().add$O(ss);
}}
}}}
});

Clazz.newMeth(C$, 'copyFileToJar$java_util_jar_JarOutputStream$S$S$S',  function (jout, infilePath, jarEntryName, msg) {
try {
var is=Clazz.new_($I$(56,1).c$$S,[infilePath]);
try {
var file=Clazz.new_($I$(12,1).c$$S,[infilePath]);
if (file.exists$() && jout != null  ) {
System.out.println$S("Writing jar entry " + jarEntryName + " (" + msg + ")" );
jout.putNextEntry$java_util_zip_ZipEntry(Clazz.new_($I$(39,1).c$$S,[jarEntryName]));
this.copyAll$java_io_InputStream$java_io_OutputStream(is, jout);
jout.closeEntry$();
}
}finally{/*res*/is&&is.close$&&is.close$();}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'copyAll$java_io_InputStream$java_io_OutputStream',  function ($in, out) {
var buffer=Clazz.array(Byte.TYPE, [4096]);
var bytesRead=0;
while ((bytesRead=$in.read$BA(buffer)) != -1){
out.write$BA$I$I(buffer, 0, bytesRead);
}
});

Clazz.newMeth(C$, 'saveStructureViewer$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceI$jalview_xml_binding_jalview_JalviewModel_JSeq_Pdbids$jalview_datamodel_PDBEntry$java_util_List$S$jalview_gui_StructureViewerBase',  function (ap, jds, pdb, entry, viewIds, matchedFile, viewFrame) {
var bindingModel=viewFrame.getBinding$();
for (var peid=0; peid < bindingModel.getPdbCount$(); peid++) {
var pdbentry=bindingModel.getPdbEntry$I(peid);
var pdbId=pdbentry.getId$();
if (!pdbId.equals$O(entry.getId$()) && !(entry.getId$().length$() > 4 && entry.getId$().toLowerCase$java_util_Locale($I$(57).ROOT).startsWith$S(pdbId.toLowerCase$java_util_Locale($I$(57).ROOT)) ) ) {
continue;
}if (matchedFile == null ) {
matchedFile=pdbentry.getFile$();
} else if (!matchedFile.equals$O(pdbentry.getFile$())) {
$I$(8,"warn$S",["Probably lost some PDB-Sequence mappings for this structure file (which apparently has same PDB Entry code): " + pdbentry.getFile$()]);
}for (var smap=0; smap < viewFrame.getBinding$().getSequence$()[peid].length; smap++) {
if (jds === viewFrame.getBinding$().getSequence$()[peid][smap] ) {
var state=Clazz.new_($I$(58,1));
state.setVisible$Boolean(Boolean.valueOf$Z(true));
state.setXpos$Integer(Integer.valueOf$I(viewFrame.getX$()));
state.setYpos$Integer(Integer.valueOf$I(viewFrame.getY$()));
state.setWidth$Integer(Integer.valueOf$I(viewFrame.getWidth$()));
state.setHeight$Integer(Integer.valueOf$I(viewFrame.getHeight$()));
var viewId=viewFrame.getViewId$();
state.setViewId$S(viewId);
state.setAlignwithAlignPanel$Boolean(Boolean.valueOf$Z(viewFrame.isUsedforaligment$jalview_api_AlignmentViewPanel(ap)));
state.setColourwithAlignPanel$Boolean(Boolean.valueOf$Z(viewFrame.isUsedForColourBy$jalview_api_AlignmentViewPanel(ap)));
state.setColourByJmol$Boolean(Boolean.valueOf$Z(viewFrame.isColouredByViewer$()));
state.setType$S(viewFrame.getViewerType$().toString());
pdb.getStructureState$().add$O(state);
}}
}
return matchedFile;
});

Clazz.newMeth(C$, 'constructAnnotationColours$jalview_schemes_AnnotationColourGradient$java_util_List$jalview_xml_binding_jalview_JalviewModel',  function (acg, userColours, jm) {
var ac=Clazz.new_($I$(59,1));
ac.setAboveThreshold$Integer(Integer.valueOf$I(acg.getAboveThreshold$()));
ac.setThreshold$Float(Float.valueOf$F(acg.getAnnotationThreshold$()));
ac.setAnnotation$S(acg.getAnnotation$().annotationId);
if (Clazz.instanceOf(acg.getBaseColour$(), "jalview.schemes.UserColourScheme")) {
ac.setColourScheme$S(this.setUserColourScheme$jalview_schemes_ColourSchemeI$java_util_List$jalview_xml_binding_jalview_JalviewModel(acg.getBaseColour$(), userColours, jm));
} else {
ac.setColourScheme$S($I$(32,"getColourName$jalview_schemes_ColourSchemeI",[acg.getBaseColour$()]));
}ac.setMaxColour$Integer(Integer.valueOf$I(acg.getMaxColour$().getRGB$()));
ac.setMinColour$Integer(Integer.valueOf$I(acg.getMinColour$().getRGB$()));
ac.setPerSequence$Boolean(Boolean.valueOf$Z(acg.isSeqAssociated$()));
ac.setPredefinedColours$Boolean(Boolean.valueOf$Z(acg.isPredefinedColours$()));
return ac;
}, p$1);

Clazz.newMeth(C$, 'storeAlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA$java_util_IdentityHashMap$jalview_viewmodel_AlignmentViewport$java_util_Set$Z$jalview_xml_binding_jalview_SequenceSet',  function (aa, groupRefs, av, calcIdSet, storeDS, vamsasSet) {
for (var i=0; i < aa.length; i++) {
var an=Clazz.new_($I$(60,1));
var annotation=aa[i];
if (annotation.annotationId != null ) {
this.annotationIds.put$O$O(annotation.annotationId, annotation);
}an.setId$S(annotation.annotationId);
an.setVisible$Boolean(Boolean.valueOf$Z(annotation.visible));
an.setDescription$S(annotation.description);
if (annotation.sequenceRef != null ) {
an.setSequenceRef$S(this.seqsToIds.get$O(annotation.sequenceRef));
}if (annotation.groupRef != null ) {
var groupIdr=groupRefs.get$O(annotation.groupRef);
if (groupIdr == null ) {
groupRefs.put$O$O(annotation.groupRef, groupIdr=("" + Long.$s(System.currentTimeMillis$()) + annotation.groupRef.getName$() + groupRefs.size$() ));
}an.setGroupRef$S(groupIdr.toString());
}an.setGraphHeight$Integer(Integer.valueOf$I(annotation.graphHeight));
an.setCentreColLabels$Boolean(Boolean.valueOf$Z(annotation.centreColLabels));
an.setScaleColLabels$Boolean(Boolean.valueOf$Z(annotation.scaleColLabel));
an.setShowAllColLabels$Boolean(Boolean.valueOf$Z(annotation.showAllColLabels));
an.setBelowAlignment$Boolean(Boolean.valueOf$Z(annotation.belowAlignment));
if (annotation.graph > 0) {
an.setGraph$Z(true);
an.setGraphType$Integer(Integer.valueOf$I(annotation.graph));
an.setGraphGroup$Integer(Integer.valueOf$I(annotation.graphGroup));
if (annotation.getThreshold$() != null ) {
var line=Clazz.new_($I$(61,1));
line.setLabel$S(annotation.getThreshold$().label);
line.setValue$Float(Float.valueOf$F(annotation.getThreshold$().value));
line.setColour$Integer(Integer.valueOf$I(annotation.getThreshold$().colour.getRGB$()));
an.setThresholdLine$jalview_xml_binding_jalview_Annotation_ThresholdLine(line);
}} else {
an.setGraph$Z(false);
}an.setLabel$S(annotation.label);
if (annotation === av.getAlignmentQualityAnnot$()  || annotation === av.getAlignmentConservationAnnotation$()   || annotation === av.getAlignmentConsensusAnnotation$()   || annotation.autoCalculated ) {
an.setAutoCalculated$Boolean(Boolean.valueOf$Z(annotation.autoCalculated));
}if (annotation.hasScore$()) {
an.setScore$Double(Double.valueOf$D(annotation.getScore$()));
}if (annotation.getCalcId$() != null ) {
calcIdSet.add$O(annotation.getCalcId$());
an.setCalcId$S(annotation.getCalcId$());
}if (annotation.hasProperties$()) {
for (var pr, $pr = annotation.getProperties$().iterator$(); $pr.hasNext$()&&((pr=($pr.next$())),1);) {
var prop=Clazz.new_($I$(62,1));
prop.setName$S(pr);
prop.setValue$S(annotation.getProperty$S(pr));
an.getProperty$().add$O(prop);
}
}var ae;
if (annotation.annotations != null ) {
an.setScoreOnly$Boolean(Boolean.valueOf$Z(false));
for (var a=0; a < annotation.annotations.length; a++) {
if ((annotation == null ) || (annotation.annotations[a] == null ) ) {
continue;
}ae=Clazz.new_($I$(63,1));
if (annotation.annotations[a].description != null ) {
ae.setDescription$S(annotation.annotations[a].description);
}if (annotation.annotations[a].displayCharacter != null ) {
ae.setDisplayCharacter$S(annotation.annotations[a].displayCharacter);
}if (!Float.isNaN$F(annotation.annotations[a].value)) {
ae.setValue$Float(Float.valueOf$F(annotation.annotations[a].value));
}ae.setPosition$I(a);
if (annotation.annotations[a].secondaryStructure > " ") {
ae.setSecondaryStructure$S(annotation.annotations[a].secondaryStructure + "");
}if (annotation.annotations[a].colour != null  && annotation.annotations[a].colour !== $I$(64).black  ) {
ae.setColour$Integer(Integer.valueOf$I(annotation.annotations[a].colour.getRGB$()));
}an.getAnnotationElement$().add$O(ae);
if (annotation.autoCalculated) {
continue;
}}
} else {
an.setScoreOnly$Boolean(Boolean.valueOf$Z(true));
}if (!storeDS || (storeDS && !annotation.autoCalculated ) ) {
vamsasSet.getAnnotation$().add$O(an);
}}
}, p$1);

Clazz.newMeth(C$, 'createCalcIdParam$S$jalview_gui_AlignViewport',  function (calcId, av) {
var settings=av.getCalcIdSettingsFor$S(calcId);
if (settings != null ) {
var vCalcIdParam=Clazz.new_($I$(65,1));
vCalcIdParam.setCalcId$S(calcId);
vCalcIdParam.getServiceURL$().add$O(settings.getServiceURI$());
for (var url, $url = 0, $$url = settings.getServiceURLs$(); $url<$$url.length&&((url=($$url[$url])),1);$url++) {
vCalcIdParam.getServiceURL$().add$O(url);
}
vCalcIdParam.setVersion$S("1.0");
if (settings.getPreset$() != null ) {
var setting=settings.getPreset$();
vCalcIdParam.setName$S(setting.getName$());
vCalcIdParam.setDescription$S(setting.getDescription$());
} else {
vCalcIdParam.setName$S("");
vCalcIdParam.setDescription$S("Last used parameters");
}vCalcIdParam.setParameters$S(settings.getWsParamFile$().replace$CharSequence$CharSequence("\n", "|\\n|"));
vCalcIdParam.setAutoUpdate$Z(settings.isAutoUpdate$());
return vCalcIdParam;
}return null;
}, p$1);

Clazz.newMeth(C$, 'recoverCalcIdParam$jalview_xml_binding_jalview_JalviewModel_Viewport_CalcIdParam$jalview_gui_AlignViewport',  function (calcIdParam, av) {
if (calcIdParam.getVersion$().equals$O("1.0")) {
var calcIds=calcIdParam.getServiceURL$().toArray$OA(Clazz.array(String, [0]));
var service=$I$(66).getDiscoverer$().getPreferredServiceFor$SA(calcIds);
if (service != null ) {
var parmSet=null;
try {
parmSet=service.getParamStore$().parseServiceParameterFile$S$S$SA$S(calcIdParam.getName$(), calcIdParam.getDescription$(), calcIds, calcIdParam.getParameters$().replace$CharSequence$CharSequence("|\\n|", "\n"));
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
$I$(8,"warn$S$Throwable",["Couldn't parse parameter data for " + calcIdParam.getCalcId$(), x]);
return false;
} else {
throw x;
}
}
var argList=null;
if (calcIdParam.getName$().length$() > 0) {
parmSet=service.getParamStore$().getPreset$S(calcIdParam.getName$());
if (parmSet != null ) {
}} else {
argList=parmSet.getArguments$();
parmSet=null;
}var settings=Clazz.new_([calcIdParam.isAutoUpdate$(), service, parmSet, argList],$I$(67,1).c$$Z$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List);
av.setCalcIdSettingsFor$S$jalview_ws_params_AutoCalcSetting$Z(calcIdParam.getCalcId$(), settings, calcIdParam.isNeedsUpdate$());
return true;
} else {
$I$(8).warn$S("Cannot resolve a service for the parameters used in this project. Try configuring a JABAWS server.");
return false;
}}throw Clazz.new_([$I$(69,"formatMessage$S$OA",["error.unsupported_version_calcIdparam", Clazz.array(java.lang.Object, -1, [calcIdParam.toString()])])],$I$(68,1).c$$S);
}, p$1);

Clazz.newMeth(C$, 'makeHashCode$O$S',  function (jvobj, altCode) {
if (this.jv2vobj != null ) {
var id=this.jv2vobj.get$O(jvobj);
if (id != null ) {
return id.toString();
}if (this.jvids2vobj != null  && Clazz.instanceOf(jvobj, "java.lang.String") ) {
id=this.jvids2vobj.get$O(jvobj);
}if (id != null ) {
return id.toString();
}$I$(8).warn$S("Cannot find ID for object in external mapping : " + jvobj);
}return altCode;
}, p$1);

Clazz.newMeth(C$, 'retrieveExistingObj$S',  function (idcode) {
if (idcode != null  && this.vobj2jv != null  ) {
return this.vobj2jv.get$O(idcode);
}return null;
}, p$1);

Clazz.newMeth(C$, 'createVamsasSequence$S$jalview_datamodel_SequenceI',  function (id, jds) {
return p$1.createVamsasSequence$Z$S$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI.apply(this, [true, id, jds, null]);
}, p$1);

Clazz.newMeth(C$, 'createVamsasSequence$Z$S$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI',  function (recurse, id, jds, parentseq) {
var vamsasSeq=Clazz.new_($I$(70,1));
vamsasSeq.setId$S(id);
vamsasSeq.setName$S(jds.getName$());
vamsasSeq.setSequence$S(jds.getSequenceAsString$());
vamsasSeq.setDescription$S(jds.getDescription$());
var dbrefs=null;
if (jds.getDatasetSequence$() != null ) {
vamsasSeq.setDsseqid$S(this.seqHash$jalview_datamodel_SequenceI(jds.getDatasetSequence$()));
} else {
vamsasSeq.setDsseqid$S(id);
dbrefs=jds.getDBRefs$();
if (parentseq == null ) {
parentseq=jds;
}}if (dbrefs != null ) {
for (var d=0, nd=dbrefs.size$(); d < nd; d++) {
var dbref=Clazz.new_($I$(71,1));
var ref=dbrefs.get$I(d);
dbref.setSource$S(ref.getSource$());
dbref.setVersion$S(ref.getVersion$());
dbref.setAccessionId$S(ref.getAccessionId$());
dbref.setCanonical$Boolean(Boolean.valueOf$Z(ref.isCanonical$()));
if (Clazz.instanceOf(ref, "jalview.datamodel.GeneLocus")) {
dbref.setLocus$Boolean(Boolean.valueOf$Z(true));
}if (ref.hasMap$()) {
var mp=p$1.createVamsasMapping$jalview_datamodel_Mapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$Z.apply(this, [ref.getMap$(), parentseq, jds, recurse]);
dbref.setMapping$jalview_xml_binding_jalview_Mapping(mp);
}vamsasSeq.getDBRef$().add$O(dbref);
}
}return vamsasSeq;
}, p$1);

Clazz.newMeth(C$, 'createVamsasMapping$jalview_datamodel_Mapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$Z',  function (jmp, parentseq, jds, recurse) {
var mp=null;
if (jmp.getMap$() != null ) {
mp=Clazz.new_($I$(72,1));
var mlst=jmp.getMap$();
var r=mlst.getFromRanges$();
for (var range, $range = r.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
var mfrom=Clazz.new_($I$(73,1));
mfrom.setStart$I(range[0]);
mfrom.setEnd$I(range[1]);
mp.getMapListFrom$().add$O(mfrom);
}
r=mlst.getToRanges$();
for (var range, $range = r.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
var mto=Clazz.new_($I$(74,1));
mto.setStart$I(range[0]);
mto.setEnd$I(range[1]);
mp.getMapListTo$().add$O(mto);
}
mp.setMapFromUnit$java_math_BigInteger($I$(75,"valueOf$J",[mlst.getFromRatio$()]));
mp.setMapToUnit$java_math_BigInteger($I$(75,"valueOf$J",[mlst.getToRatio$()]));
if (jmp.getTo$() != null ) {
var jmpid="";
var ps=null;
if (parentseq !== jmp.getTo$()  && parentseq.getDatasetSequence$() !== jmp.getTo$()  ) {
jmpid=this.seqHash$jalview_datamodel_SequenceI(ps=jmp.getTo$());
} else {
jmpid=this.seqHash$jalview_datamodel_SequenceI(ps=parentseq);
}mp.setDseqFor$S(jmpid);
if (!this.seqRefIds.containsKey$O(jmpid)) {
$I$(8).debug$S("creatign new DseqFor ID");
this.seqRefIds.put$O$O(jmpid, ps);
} else {
$I$(8).debug$S("reusing DseqFor ID");
}}}return mp;
}, p$1);

Clazz.newMeth(C$, 'setUserColourScheme$jalview_schemes_ColourSchemeI$java_util_List$jalview_xml_binding_jalview_JalviewModel',  function (cs, userColours, jm) {
var id=null;
var ucs=cs;
var newucs=false;
if (!userColours.contains$O(ucs)) {
userColours.add$O(ucs);
newucs=true;
}id="ucs" + userColours.indexOf$O(ucs);
if (newucs) {
var colours=ucs.getColours$();
var uc=Clazz.new_($I$(76,1));
var jbucs=Clazz.new_($I$(77,1));
for (var i=0; i < colours.length; i++) {
var col=Clazz.new_($I$(78,1));
col.setName$S($I$(79).aa[i]);
col.setRGB$S($I$(80).getHexString$java_awt_Color(colours[i]));
jbucs.getColour$().add$O(col);
}
if (ucs.getLowerCaseColours$() != null ) {
colours=ucs.getLowerCaseColours$();
for (var i=0; i < colours.length; i++) {
var col=Clazz.new_($I$(78,1));
col.setName$S($I$(79).aa[i].toLowerCase$java_util_Locale($I$(57).ROOT));
col.setRGB$S($I$(80).getHexString$java_awt_Color(colours[i]));
jbucs.getColour$().add$O(col);
}
}uc.setId$S(id);
uc.setUserColourScheme$jalview_xml_binding_jalview_JalviewUserColours(jbucs);
jm.getUserColours$().add$O(uc);
}return id;
});

Clazz.newMeth(C$, 'getUserColourScheme$jalview_xml_binding_jalview_JalviewModel$S',  function (jm, id) {
var uc=jm.getUserColours$();
var colours=null;
for (var c, $c = uc.iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
if (c.getId$().equals$O(id)) {
colours=c;
break;
}}
var newColours=Clazz.array($I$(64), [24]);
for (var i=0; i < 24; i++) {
newColours[i]=Clazz.new_([Integer.parseInt$S$I(colours.getUserColourScheme$().getColour$().get$I(i).getRGB$(), 16)],$I$(64,1).c$$I);
}
var ucs=Clazz.new_($I$(81,1).c$$java_awt_ColorA,[newColours]);
if (colours.getUserColourScheme$().getColour$().size$() > 24) {
newColours=Clazz.array($I$(64), [23]);
for (var i=0; i < 23; i++) {
newColours[i]=Clazz.new_([Integer.parseInt$S$I(colours.getUserColourScheme$().getColour$().get$I(i + 24).getRGB$(), 16)],$I$(64,1).c$$I);
}
ucs.setLowerCaseColours$java_awt_ColorA(newColours);
}return ucs;
});

Clazz.newMeth(C$, 'loadJalviewAlign$O',  function (file) {
var af=null;
try {
this.newStructureViewers=Clazz.new_($I$(34,1));
var jprovider=p$1.createjarInputStreamProvider$O.apply(this, [file]);
af=this.loadJalviewAlign$jalview_util_jarInputStreamProvider(jprovider);
if (af != null ) {
af.setMenusForViewport$();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
this.errorMessage="Invalid URL format for '" + file + "'" ;
this.reportErrors$();
} else {
throw e;
}
} finally {
try {
$I$(82,"invokeAndWait$Runnable",[((P$.Jalview2XML$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Jalview2XML$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.project.Jalview2XML'].setLoadingFinishedForNewStructureViewers$.apply(this.b$['jalview.project.Jalview2XML'], []);
});
})()
), Clazz.new_(P$.Jalview2XML$3.$init$,[this, null]))]);
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
System.err.println$S("Error loading alignment: " + x.getMessage$());
} else {
throw x;
}
}
}
return af;
});

Clazz.newMeth(C$, 'createjarInputStreamProvider$O',  function (ofile) {
try {
var file=(Clazz.instanceOf(ofile, "java.io.File") ? (ofile).getCanonicalPath$() : ofile.toString());
var bytes=$I$(1).isJS$() ? $I$(1).getFileBytes$java_io_File(ofile) : null;
var url=null;
this.errorMessage=null;
this.uniqueSetSuffix=null;
this.seqRefIds=null;
this.viewportsAdded.clear$();
this.frefedSequence=null;
if ($I$(83).startsWithHttpOrHttps$S(file)) {
url=Clazz.new_($I$(84,1).c$$S,[file]);
}var _url=url;
return ((P$.Jalview2XML$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Jalview2XML$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.util.jarInputStreamProvider', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getJarInputStream$',  function () {
if (this.$finals$.bytes != null ) {
return Clazz.new_([Clazz.new_($I$(86,1).c$$BA,[this.$finals$.bytes])],$I$(85,1).c$$java_io_InputStream);
}if (this.$finals$._url != null ) {
return Clazz.new_([this.$finals$._url.openStream$()],$I$(85,1).c$$java_io_InputStream);
} else {
return Clazz.new_([Clazz.new_($I$(56,1).c$$S,[this.$finals$.file])],$I$(85,1).c$$java_io_InputStream);
}});

Clazz.newMeth(C$, 'getFilename$',  function () {
return this.$finals$.file;
});
})()
), Clazz.new_(P$.Jalview2XML$4.$init$,[this, {file:file,bytes:bytes,_url:_url}]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
return null;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'loadJalviewAlign$jalview_util_jarInputStreamProvider',  function (jprovider) {
this.errorMessage=null;
if (this.uniqueSetSuffix == null ) {
this.uniqueSetSuffix=Long.$s(Long.$mod(System.currentTimeMillis$(),100000)) + "";
}if (this.seqRefIds == null ) {
this.initSeqRefs$();
}var af=null;
var _af=null;
var importedDatasets=Clazz.new_($I$(3,1));
var gatherToThisFrame=Clazz.new_($I$(2,1));
var file=jprovider.getFilename$();
try {
var jin=null;
var jarentry=null;
var entryCount=1;
do {
jin=jprovider.getJarInputStream$();
for (var i=0; i < entryCount; i++) {
jarentry=jin.getNextJarEntry$();
}
if (jarentry != null  && jarentry.getName$().endsWith$S(".xml") ) {
var jc=$I$(42).newInstance$S("jalview.xml.binding.jalview");
var streamReader=$I$(87).newInstance$().createXMLStreamReader$java_io_InputStream(jin);
var um=jc.createUnmarshaller$();
var jbe=um.unmarshal$javax_xml_stream_XMLStreamReader$Class(streamReader, Clazz.getClass($I$(43)));
var object=jbe.getValue$();
if (true) {
_af=this.loadFromObject$jalview_xml_binding_jalview_JalviewModel$S$Z$jalview_util_jarInputStreamProvider(object, file, true, jprovider);
if (_af != null  && object.getViewport$().size$() > 0 ) {
if (af == null ) {
af=_af;
}if (_af.getViewport$().isGatherViewsHere$()) {
af=_af;
gatherToThisFrame.put$O$O(_af.getViewport$().getSequenceSetId$(), _af);
}importedDatasets.put$O$O(af.getViewport$().getAlignment$().getDataset$(), af.getViewport$().getAlignment$().getDataset$());
}}++entryCount;
} else if (jarentry != null ) {
++entryCount;
}} while (jarentry != null );
jin.close$();
this.resolveFrefedSequences$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ex = e$$;
{
ex.printStackTrace$();
this.errorMessage="Couldn't locate Jalview XML file : " + file;
System.err.println$S("Exception whilst loading jalview XML file : " + ex + "\n" );
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
System.err.println$S("Parsing as Jalview Version 2 file failed.");
ex.printStackTrace$java_io_PrintStream(System.err);
if (this.attemptversion1parse) {
}if ($I$(9).instance != null ) {
$I$(9).instance.stopLoading$();
}if (af != null ) {
System.out.println$S("Successfully loaded archive file");
return af;
}ex.printStackTrace$();
System.err.println$S("Exception whilst loading jalview XML file : " + ex + "\n" );
}
} else if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var e = e$$;
{
this.errorMessage="Out of memory loading jalview XML file";
System.err.println$S("Out of memory whilst loading jalview XML file");
e.printStackTrace$();
}
} else {
throw e$$;
}
}
for (var fr, $fr = gatherToThisFrame.values$().iterator$(); $fr.hasNext$()&&((fr=($fr.next$())),1);) {
$I$(9).instance.gatherViews$jalview_gui_AlignFrame(fr);
}
this.restoreSplitFrames$();
for (var ds, $ds = importedDatasets.keySet$().iterator$(); $ds.hasNext$()&&((ds=($ds.next$())),1);) {
if (ds.getCodonFrames$() != null ) {
$I$(88,"getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider",[$I$(9).instance]).registerMappings$java_util_List(ds.getCodonFrames$());
}}
if (this.errorMessage != null ) {
this.reportErrors$();
}if ($I$(9).instance != null ) {
$I$(9).instance.stopLoading$();
}return af;
});

Clazz.newMeth(C$, 'restoreSplitFrames$',  function () {
var gatherTo=Clazz.new_($I$(4,1));
var addedToSplitFrames=Clazz.new_($I$(4,1));
var dna=Clazz.new_($I$(2,1));
for (var candidate, $candidate = this.splitFrameCandidates.entrySet$().iterator$(); $candidate.hasNext$()&&((candidate=($candidate.next$())),1);) {
var af=candidate.getValue$();
if (af.getViewport$().getAlignment$().isNucleotide$()) {
dna.put$O$O(candidate.getKey$().getId$(), af);
}}
for (var candidate, $candidate = this.splitFrameCandidates.entrySet$().iterator$(); $candidate.hasNext$()&&((candidate=($candidate.next$())),1);) {
var af=candidate.getValue$();
if (!af.getViewport$().getAlignment$().isNucleotide$()) {
var complementId=candidate.getKey$().getComplementId$();
if (complementId != null  && dna.containsKey$O(complementId) ) {
var dnaFrame=dna.get$O(complementId);
var sf=this.createSplitFrame$jalview_gui_AlignFrame$jalview_gui_AlignFrame(dnaFrame, af);
addedToSplitFrames.add$O(dnaFrame);
addedToSplitFrames.add$O(af);
dnaFrame.setMenusForViewport$();
af.setMenusForViewport$();
if (af.getViewport$().isGatherViewsHere$()) {
gatherTo.add$O(sf);
}}}}
for (var candidate, $candidate = this.splitFrameCandidates.entrySet$().iterator$(); $candidate.hasNext$()&&((candidate=($candidate.next$())),1);) {
var af=candidate.getValue$();
if (!addedToSplitFrames.contains$O(af)) {
var view=candidate.getKey$();
$I$(9,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[af, view.getTitle$(), C$.safeInt$Integer(view.getWidth$()), C$.safeInt$Integer(view.getHeight$())]);
af.setMenusForViewport$();
System.err.println$S("Failed to restore view " + view.getTitle$() + " to split frame" );
}}
for (var sf, $sf = gatherTo.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
$I$(9).instance.gatherViews$jalview_jbgui_GSplitFrame(sf);
}
this.splitFrameCandidates.clear$();
});

Clazz.newMeth(C$, 'createSplitFrame$jalview_gui_AlignFrame$jalview_gui_AlignFrame',  function (dnaFrame, proteinFrame) {
var splitFrame=Clazz.new_($I$(89,1).c$$jalview_jbgui_GAlignFrame$jalview_jbgui_GAlignFrame,[dnaFrame, proteinFrame]);
var title=$I$(69).getString$S("label.linked_view_title");
var width=(dnaFrame.getBounds$().getWidth$()|0);
var height=((dnaFrame.getBounds$().getHeight$() + proteinFrame.getBounds$().getHeight$() + 50 )|0);
splitFrame.setLocation$I$I(dnaFrame.getX$(), dnaFrame.getY$());
$I$(9).addInternalFrame$javax_swing_JInternalFrame$S$I$I(splitFrame, title, width, height);
proteinFrame.getViewport$().alignmentChanged$jalview_api_AlignmentViewPanel(proteinFrame.alignPanel);
return splitFrame;
});

Clazz.newMeth(C$, 'reportErrors$',  function () {
this.reportErrors$Z(false);
});

Clazz.newMeth(C$, 'reportErrors$Z',  function (saving) {
if (this.errorMessage != null ) {
var finalErrorMessage=this.errorMessage;
if (this.raiseGUI) {
$I$(82,"invokeLater$Runnable",[((P$.Jalview2XML$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Jalview2XML$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(90,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(9).desktop, this.$finals$.finalErrorMessage, "Error " + (this.$finals$.saving ? "saving" : "loading") + " Jalview file" , 2]);
});
})()
), Clazz.new_(P$.Jalview2XML$5.$init$,[this, {finalErrorMessage:finalErrorMessage,saving:saving}]))]);
} else {
System.err.println$S("Problem loading Jalview file: " + this.errorMessage);
}}this.errorMessage=null;
});

Clazz.newMeth(C$, 'loadPDBFile$jalview_util_jarInputStreamProvider$S$S',  function (jprovider, pdbId, origFile) {
if (this.alreadyLoadedPDB.containsKey$O(pdbId)) {
return this.alreadyLoadedPDB.get$O(pdbId).toString();
}var tempFile=this.copyJarEntry$jalview_util_jarInputStreamProvider$S$S$S(jprovider, pdbId, "jalview_pdb", origFile);
if (tempFile != null ) {
this.alreadyLoadedPDB.put$O$O(pdbId, tempFile);
}return tempFile;
});

Clazz.newMeth(C$, 'copyJarEntry$jalview_util_jarInputStreamProvider$S$S$S',  function (jprovider, jarEntryName, prefix, suffixModel) {
var suffix=".tmp";
if (suffixModel == null ) {
suffixModel=jarEntryName;
}var sfpos=suffixModel.lastIndexOf$S(".");
if (sfpos > -1 && sfpos < (suffixModel.length$() - 1) ) {
suffix="." + suffixModel.substring$I(sfpos + 1);
}try {
var jin=jprovider.getJarInputStream$();
try {
var entry=null;
do {
entry=jin.getNextJarEntry$();
} while (entry != null  && !entry.getName$().equals$O(jarEntryName) );
if (entry != null ) {
var outFile=$I$(12).createTempFile$S$S(prefix, suffix);
outFile.deleteOnExit$();
try {
var os=Clazz.new_($I$(6,1).c$$java_io_File,[outFile]);
try {
this.copyAll$java_io_InputStream$java_io_OutputStream(jin, os);

}finally{/*res*/os&&os.close$&&os.close$();}
}finally{}
var t=outFile.getAbsolutePath$();
return t;
} else {
$I$(8).warn$S("Couldn't find entry in Jalview Jar for " + jarEntryName);
}
}finally{/*res*/jin&&jin.close$&&jin.close$();}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return null;
});

Clazz.newMeth(C$, 'loadFromObject$jalview_xml_binding_jalview_JalviewModel$S$Z$jalview_util_jarInputStreamProvider',  function (jalviewModel, file, loadTreesAndStructures, jprovider) {
var vamsasSet=jalviewModel.getVamsasModel$().getSequenceSet$().get$I(0);
var vamsasSeqs=vamsasSet.getSequence$();
var view=(jalviewModel.getViewport$().size$() > 0) ? jalviewModel.getViewport$().get$I(0) : null;
var uniqueSeqSetId=null;
var viewId=null;
if (view != null ) {
uniqueSeqSetId=view.getSequenceSetId$() + this.uniqueSetSuffix;
viewId=(view.getId$() == null  ? null : view.getId$() + this.uniqueSetSuffix);
}var hiddenSeqs=null;
var tmpseqs=Clazz.new_($I$(4,1));
var multipleView=false;
var referenceseqForView=null;
var jseqs=jalviewModel.getJSeq$();
var vi=0;
for (var i=0; i < jseqs.size$(); i++) {
var jseq=jseqs.get$I(i);
var seqId=jseq.getId$();
var tmpSeq=this.seqRefIds.get$O(seqId);
if (tmpSeq != null ) {
if (!this.incompleteSeqs.containsKey$O(seqId)) {
if (tmpSeq.getStart$() != jseq.getStart$() || tmpSeq.getEnd$() != jseq.getEnd$() ) {
System.err.println$S(String.format$S$OA("Warning JAL-2154 regression: updating start/end for sequence %s from %d/%d to %d/%d", Clazz.array(java.lang.Object, -1, [tmpSeq.getName$(), Integer.valueOf$I(tmpSeq.getStart$()), Integer.valueOf$I(tmpSeq.getEnd$()), Integer.valueOf$I(jseq.getStart$()), Integer.valueOf$I(jseq.getEnd$())])));
}} else {
this.incompleteSeqs.remove$O(seqId);
}if (vamsasSeqs.size$() > vi && vamsasSeqs.get$I(vi).getId$().equals$O(seqId) ) {
tmpSeq.setName$S(vamsasSeqs.get$I(vi).getName$());
tmpSeq.setDescription$S(vamsasSeqs.get$I(vi).getDescription$());
tmpSeq.setSequence$S(vamsasSeqs.get$I(vi).getSequence$());
++vi;
} else {
multipleView=true;
}tmpSeq.setStart$I(jseq.getStart$());
tmpSeq.setEnd$I(jseq.getEnd$());
tmpseqs.add$O(tmpSeq);
} else {
var vamsasSeq=vamsasSeqs.get$I(vi);
tmpSeq=Clazz.new_([vamsasSeq.getName$(), vamsasSeq.getSequence$()],$I$(91,1).c$$S$S);
tmpSeq.setDescription$S(vamsasSeq.getDescription$());
tmpSeq.setStart$I(jseq.getStart$());
tmpSeq.setEnd$I(jseq.getEnd$());
tmpSeq.setVamsasId$S(this.uniqueSetSuffix + seqId);
this.seqRefIds.put$O$O(vamsasSeq.getId$(), tmpSeq);
tmpseqs.add$O(tmpSeq);
++vi;
}if (C$.safeBoolean$Boolean(jseq.isViewreference$())) {
referenceseqForView=tmpseqs.get$I(tmpseqs.size$() - 1);
}if (jseq.isHidden$() != null  && jseq.isHidden$().booleanValue$() ) {
if (hiddenSeqs == null ) {
hiddenSeqs=Clazz.new_($I$(4,1));
}hiddenSeqs.add$O(tmpSeq);
}}
var orderedSeqs=tmpseqs.toArray$OA(Clazz.array($I$(92), [tmpseqs.size$()]));
var al=null;
if (vamsasSet.getDatasetId$() == null  || vamsasSet.getDatasetId$() === ""  ) {
al=Clazz.new_($I$(93,1).c$$jalview_datamodel_SequenceIA,[orderedSeqs]);
al.setDataset$jalview_datamodel_AlignmentI(null);
} else {
var isdsal=jalviewModel.getViewport$().isEmpty$();
if (isdsal) {
al=p$1.getDatasetFor$S.apply(this, [vamsasSet.getDatasetId$()]);
}if (al == null ) {
al=Clazz.new_($I$(93,1).c$$jalview_datamodel_SequenceIA,[orderedSeqs]);
}if (isdsal) {
p$1.addDatasetRef$S$jalview_datamodel_AlignmentI.apply(this, [vamsasSet.getDatasetId$(), al]);
}p$1.recoverDatasetFor$jalview_xml_binding_jalview_SequenceSet$jalview_datamodel_AlignmentI$Z$S.apply(this, [vamsasSet, al, isdsal, uniqueSeqSetId]);
}if (referenceseqForView != null ) {
al.setSeqrep$jalview_datamodel_SequenceI(referenceseqForView);
}for (var i=0; i < vamsasSet.getSequenceSetProperties$().size$(); i++) {
var ssp=vamsasSet.getSequenceSetProperties$().get$I(i);
al.setProperty$O$O(ssp.getKey$(), ssp.getValue$());
}
var pdbloaded=Clazz.new_($I$(11,1));
if (!multipleView) {
for (var i=0; i < vamsasSeqs.size$(); i++) {
var jseq=jseqs.get$I(i);
if (jseq.getFeatures$().size$() > 0) {
var features=jseq.getFeatures$();
for (var f=0; f < features.size$(); f++) {
var feat=features.get$I(f);
var sf=Clazz.new_([feat.getType$(), feat.getDescription$(), feat.getBegin$(), feat.getEnd$(), C$.safeFloat$Float(feat.getScore$()), feat.getFeatureGroup$()],$I$(94,1).c$$S$S$I$I$F$S);
sf.setStatus$S(feat.getStatus$());
var mapAttributes=Clazz.new_($I$(2,1));
for (var od=0; od < feat.getOtherData$().size$(); od++) {
var keyValue=feat.getOtherData$().get$I(od);
var attributeName=keyValue.getKey$();
var attributeValue=keyValue.getValue$();
if (attributeName.startsWith$S("LINK")) {
sf.addLink$S(attributeValue);
} else {
var subAttribute=keyValue.getKey2$();
if (subAttribute == null ) {
sf.setValue$S$O(attributeName, attributeValue);
} else {
if (!mapAttributes.containsKey$O(attributeName)) {
mapAttributes.put$O$O(attributeName, Clazz.new_($I$(2,1)));
}mapAttributes.get$O(attributeName).put$O$O(subAttribute, attributeValue);
}}}
for (var mapAttribute, $mapAttribute = mapAttributes.entrySet$().iterator$(); $mapAttribute.hasNext$()&&((mapAttribute=($mapAttribute.next$())),1);) {
sf.setValue$S$O(mapAttribute.getKey$(), mapAttribute.getValue$());
}
al.getSequenceAt$I(i).addSequenceFeature$jalview_datamodel_SequenceFeature(sf);
}
}if (vamsasSeqs.get$I(i).getDBRef$().size$() > 0) {
p$1.addDBRefs$jalview_datamodel_SequenceI$jalview_xml_binding_jalview_Sequence.apply(this, [al.getSequenceAt$I(i).getDatasetSequence$() == null  ? al.getSequenceAt$I(i) : al.getSequenceAt$I(i).getDatasetSequence$(), vamsasSeqs.get$I(i)]);
}if (jseq.getPdbids$().size$() > 0) {
var ids=jseq.getPdbids$();
for (var p=0; p < ids.size$(); p++) {
var pdbid=ids.get$I(p);
var entry=Clazz.new_($I$(95,1));
entry.setId$S(pdbid.getId$());
if (pdbid.getType$() != null ) {
if ($I$(96,"getType$S",[pdbid.getType$()]) != null ) {
entry.setType$jalview_datamodel_PDBEntry_Type($I$(96,"getType$S",[pdbid.getType$()]));
} else {
entry.setType$jalview_datamodel_PDBEntry_Type($I$(96).FILE);
}}if (pdbid.getFile$() != null  && jprovider != null  ) {
if (!pdbloaded.containsKey$O(pdbid.getFile$())) {
entry.setFile$S(this.loadPDBFile$jalview_util_jarInputStreamProvider$S$S(jprovider, pdbid.getId$(), pdbid.getFile$()));
} else {
entry.setFile$S(pdbloaded.get$O(pdbid.getId$()).toString());
}}for (var prop, $prop = pdbid.getProperty$().iterator$(); $prop.hasNext$()&&((prop=($prop.next$())),1);) {
entry.setProperty$S$O(prop.getName$(), prop.getValue$());
}
$I$(88,"getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider",[$I$(9).instance]).registerPDBEntry$jalview_datamodel_PDBEntry(entry);
if (al.getSequenceAt$I(i).getDatasetSequence$() != null ) {
al.getSequenceAt$I(i).getDatasetSequence$().addPDBId$jalview_datamodel_PDBEntry(entry);
} else {
al.getSequenceAt$I(i).addPDBId$jalview_datamodel_PDBEntry(entry);
}}
}}
}if (vamsasSet.getAlcodonFrame$().size$() > 0) {
var alc=vamsasSet.getAlcodonFrame$();
for (var i=0; i < alc.size$(); i++) {
var cf=Clazz.new_($I$(97,1));
if (alc.get$I(i).getAlcodMap$().size$() > 0) {
var maps=alc.get$I(i).getAlcodMap$();
for (var m=0; m < maps.size$(); m++) {
var map=maps.get$I(m);
var dnaseq=this.seqRefIds.get$O(map.getDnasq$());
var mapping=null;
if (map.getMapping$() != null ) {
mapping=p$1.addMapping$jalview_xml_binding_jalview_Mapping.apply(this, [map.getMapping$()]);
if (dnaseq != null  && mapping.getTo$() != null  ) {
cf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(dnaseq, mapping.getTo$(), mapping.getMap$());
} else {
this.frefedSequence.add$O(this.newAlcodMapRef$S$jalview_datamodel_AlignedCodonFrame$jalview_datamodel_Mapping(map.getDnasq$(), cf, mapping));
}}}
al.addCodonFrame$jalview_datamodel_AlignedCodonFrame(cf);
}}
}var autoAlan=Clazz.new_($I$(4,1));
var groupAnnotRefs=Clazz.new_($I$(11,1));
if (vamsasSet.getAnnotation$().size$() > 0) {
var an=vamsasSet.getAnnotation$();
for (var i=0; i < an.size$(); i++) {
var annotation=an.get$I(i);
var autoForView=false;
if (annotation.getLabel$().equals$O("Quality") || annotation.getLabel$().equals$O("Conservation") || annotation.getLabel$().equals$O("Consensus")  ) {
autoForView=true;
}if (autoForView || annotation.isAutoCalculated$() ) {
annotation.setId$S(null);
}var annotationId=annotation.getId$();
if (annotationId != null  && this.annotationIds.containsKey$O(annotationId) ) {
var jda=this.annotationIds.get$O(annotationId);
if (annotation.isVisible$() != null ) {
jda.visible=(annotation.isVisible$()).valueOf();
}al.addAnnotation$jalview_datamodel_AlignmentAnnotation(jda);
continue;
}var ae=annotation.getAnnotationElement$();
var anot=null;
var firstColour=null;
var anpos;
if (!annotation.isScoreOnly$()) {
anot=Clazz.array($I$(98), [al.getWidth$()]);
for (var aa=0; aa < ae.size$() && aa < anot.length ; aa++) {
var annElement=ae.get$I(aa);
anpos=annElement.getPosition$();
if (anpos >= anot.length) {
continue;
}var value=C$.safeFloat$Float(annElement.getValue$());
anot[anpos]=Clazz.new_([annElement.getDisplayCharacter$(), annElement.getDescription$(), (annElement.getSecondaryStructure$() == null  || annElement.getSecondaryStructure$().length$() == 0 ) ? " " : annElement.getSecondaryStructure$().charAt$I(0), value],$I$(98,1).c$$S$S$C$F);
anot[anpos].colour=Clazz.new_([C$.safeInt$Integer(annElement.getColour$())],$I$(64,1).c$$I);
if (firstColour == null ) {
firstColour=anot[anpos].colour;
}}
}var jaa=null;
if (annotation.isGraph$()) {
var llim=0;
var hlim=0;
jaa=Clazz.new_([annotation.getLabel$(), annotation.getDescription$(), anot, llim, hlim, C$.safeInt$Integer(annotation.getGraphType$())],$I$(99,1).c$$S$S$jalview_datamodel_AnnotationA$F$F$I);
jaa.graphGroup=C$.safeInt$Integer(annotation.getGraphGroup$());
jaa._linecolour=firstColour;
if (annotation.getThresholdLine$() != null ) {
jaa.setThreshold$jalview_datamodel_GraphLine(Clazz.new_([C$.safeFloat$Float(annotation.getThresholdLine$().getValue$()), annotation.getThresholdLine$().getLabel$(), Clazz.new_([C$.safeInt$Integer(annotation.getThresholdLine$().getColour$())],$I$(64,1).c$$I)],$I$(100,1).c$$F$S$java_awt_Color));
}if (autoForView || annotation.isAutoCalculated$() ) {
jaa.hasText=true;
}} else {
jaa=Clazz.new_([annotation.getLabel$(), annotation.getDescription$(), anot],$I$(99,1).c$$S$S$jalview_datamodel_AnnotationA);
jaa._linecolour=firstColour;
}if (annotation.getId$() != null ) {
this.annotationIds.put$O$O(annotation.getId$(), jaa);
jaa.annotationId=annotation.getId$();
}var sequenceRef=annotation.getSequenceRef$();
if (sequenceRef != null ) {
var sequence=this.seqRefIds.get$O(sequenceRef);
if (sequence == null ) {
sequence=al.findName$S(sequenceRef);
}if (sequence != null ) {
jaa.createSequenceMapping$jalview_datamodel_SequenceI$I$Z(sequence, 1, true);
sequence.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(jaa);
}}if (annotation.getGroupRef$() != null  && annotation.getGroupRef$().length$() > 0 ) {
var aal=groupAnnotRefs.get$O(annotation.getGroupRef$());
if (aal == null ) {
aal=Clazz.new_($I$(4,1));
groupAnnotRefs.put$O$O(annotation.getGroupRef$(), aal);
}aal.add$O(jaa);
}if (annotation.getScore$() != null ) {
jaa.setScore$D(annotation.getScore$().doubleValue$());
}if (annotation.isVisible$() != null ) {
jaa.visible=annotation.isVisible$().booleanValue$();
}if (annotation.isCentreColLabels$() != null ) {
jaa.centreColLabels=annotation.isCentreColLabels$().booleanValue$();
}if (annotation.isScaleColLabels$() != null ) {
jaa.scaleColLabel=annotation.isScaleColLabels$().booleanValue$();
}if (annotation.isAutoCalculated$()) {
jaa.autoCalculated=true;
}if (annotation.getGraphHeight$() != null ) {
jaa.graphHeight=annotation.getGraphHeight$().intValue$();
}jaa.belowAlignment=annotation.isBelowAlignment$();
jaa.setCalcId$S(annotation.getCalcId$());
if (annotation.getProperty$().size$() > 0) {
for (var prop, $prop = annotation.getProperty$().iterator$(); $prop.hasNext$()&&((prop=($prop.next$())),1);) {
jaa.setProperty$S$S(prop.getName$(), prop.getValue$());
}
}if (jaa.autoCalculated) {
autoAlan.add$O(Clazz.new_($I$(101,1).c$$I$jalview_datamodel_AlignmentAnnotation,[this, null, i, jaa]));
} else {
al.addAnnotation$jalview_datamodel_AlignmentAnnotation(jaa);
}}
}if (jalviewModel.getJGroup$().size$() > 0) {
var groups=jalviewModel.getJGroup$();
var addAnnotSchemeGroup=false;
for (var i=0; i < groups.size$(); i++) {
var jGroup=groups.get$I(i);
var cs=null;
if (jGroup.getColour$() != null ) {
if (jGroup.getColour$().startsWith$S("ucs")) {
cs=this.getUserColourScheme$jalview_xml_binding_jalview_JalviewModel$S(jalviewModel, jGroup.getColour$());
} else if (jGroup.getColour$().equals$O("AnnotationColourGradient") && jGroup.getAnnotationColours$() != null  ) {
addAnnotSchemeGroup=true;
} else {
cs=$I$(32,"getColourScheme$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$S",[null, al, jGroup.getColour$()]);
}}var pidThreshold=C$.safeInt$Integer(jGroup.getPidThreshold$());
var seqs=Clazz.new_($I$(34,1));
for (var s=0; s < jGroup.getSeq$().size$(); s++) {
var seqId=jGroup.getSeq$().get$I(s);
var ts=this.seqRefIds.get$O(seqId);
if (ts != null ) {
seqs.addElement$O(ts);
}}
if (seqs.size$() < 1) {
continue;
}var sg=Clazz.new_([seqs, jGroup.getName$(), cs, C$.safeBoolean$Boolean(jGroup.isDisplayBoxes$()), C$.safeBoolean$Boolean(jGroup.isDisplayText$()), C$.safeBoolean$Boolean(jGroup.isColourText$()), C$.safeInt$Integer(jGroup.getStart$()), C$.safeInt$Integer(jGroup.getEnd$())],$I$(102,1).c$$java_util_List$S$jalview_schemes_ColourSchemeI$Z$Z$Z$I$I);
sg.getGroupColourScheme$().setThreshold$I$Z(pidThreshold, true);
sg.getGroupColourScheme$().setConservationInc$I(C$.safeInt$Integer(jGroup.getConsThreshold$()));
sg.setOutlineColour$java_awt_Color(Clazz.new_([C$.safeInt$Integer(jGroup.getOutlineColour$())],$I$(64,1).c$$I));
sg.textColour=Clazz.new_([C$.safeInt$Integer(jGroup.getTextCol1$())],$I$(64,1).c$$I);
sg.textColour2=Clazz.new_([C$.safeInt$Integer(jGroup.getTextCol2$())],$I$(64,1).c$$I);
sg.setShowNonconserved$Z(C$.safeBoolean$Boolean(jGroup.isShowUnconserved$()));
sg.thresholdTextColour=C$.safeInt$Integer(jGroup.getTextColThreshold$());
sg.setShowConsensusHistogram$Z(jGroup.isShowConsensusHistogram$());
sg.setshowSequenceLogo$Z(jGroup.isShowSequenceLogo$());
sg.setNormaliseSequenceLogo$Z(jGroup.isNormaliseSequenceLogo$());
sg.setIgnoreGapsConsensus$Z(jGroup.isIgnoreGapsinConsensus$());
if (jGroup.getConsThreshold$() != null  && jGroup.getConsThreshold$().intValue$() != 0 ) {
var c=Clazz.new_(["All", sg.getSequences$java_util_Map(null), 0, sg.getWidth$() - 1],$I$(103,1).c$$S$java_util_List$I$I);
c.calculate$();
c.verdict$Z$F(false, 25);
sg.cs.setConservation$jalview_analysis_Conservation(c);
}if (jGroup.getId$() != null  && groupAnnotRefs.size$() > 0 ) {
var jaal=groupAnnotRefs.get$O(jGroup.getId$());
if (jaal != null ) {
for (var jaa, $jaa = jaal.iterator$(); $jaa.hasNext$()&&((jaa=($jaa.next$())),1);) {
jaa.groupRef=sg;
if (jaa.autoCalculated) {
if (jaa.label.startsWith$S("Consensus for ")) {
sg.setConsensus$jalview_datamodel_AlignmentAnnotation(jaa);
}if (jaa.label.startsWith$S("Conservation for ")) {
sg.setConservationRow$jalview_datamodel_AlignmentAnnotation(jaa);
}}}
}}al.addGroup$jalview_datamodel_SequenceGroup(sg);
if (addAnnotSchemeGroup) {
sg.setColourScheme$jalview_schemes_ColourSchemeI(p$1.constructAnnotationColour$jalview_xml_binding_jalview_AnnotationColourScheme$jalview_gui_AlignFrame$jalview_datamodel_AlignmentI$jalview_xml_binding_jalview_JalviewModel$Z.apply(this, [jGroup.getAnnotationColours$(), null, al, jalviewModel, false]));
}}
}if (view == null ) {
return null;
}var af=null;
var av=null;
if (multipleView && this.viewportsAdded.size$() == 0 ) {
System.err.println$S("About to recover a viewport for existing alignment: Sequence set ID is " + uniqueSeqSetId);
var seqsetobj=p$1.retrieveExistingObj$S.apply(this, [uniqueSeqSetId]);
if (seqsetobj != null ) {
if (Clazz.instanceOf(seqsetobj, "java.lang.String")) {
uniqueSeqSetId=seqsetobj;
System.err.println$S("Recovered extant sequence set ID mapping for ID : New Sequence set ID is " + uniqueSeqSetId);
} else {
System.err.println$S("Warning : Collision between sequence set ID string and existing jalview object mapping.");
}}}var doGroupAnnColour=C$.isVersionStringLaterThan$S$S("2.8.1", jalviewModel.getVersion$());
var ap=null;
var isnewview=true;
if (viewId != null ) {
var views=$I$(9).getAlignmentPanels$S(uniqueSeqSetId);
if (views != null  && views.length > 0 ) {
for (var v=0; v < views.length; v++) {
if (views[v].av.getViewId$().equalsIgnoreCase$S(viewId)) {
af=views[v].alignFrame;
av=views[v].av;
ap=views[v];
isnewview=false;
}}
}}if (isnewview) {
af=this.loadViewport$S$java_util_List$java_util_List$jalview_datamodel_AlignmentI$jalview_xml_binding_jalview_JalviewModel$jalview_xml_binding_jalview_JalviewModel_Viewport$S$S$java_util_List(file, jseqs, hiddenSeqs, al, jalviewModel, view, uniqueSeqSetId, viewId, autoAlan);
av=af.getViewport$();
ap=af.alignPanel;
}if (loadTreesAndStructures) {
this.loadTrees$jalview_xml_binding_jalview_JalviewModel$jalview_xml_binding_jalview_JalviewModel_Viewport$jalview_gui_AlignFrame$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel(jalviewModel, view, af, av, ap);
this.loadPCAViewers$jalview_xml_binding_jalview_JalviewModel$jalview_gui_AlignmentPanel(jalviewModel, ap);
this.loadPDBStructures$jalview_util_jarInputStreamProvider$java_util_List$jalview_gui_AlignFrame$jalview_gui_AlignmentPanel(jprovider, jseqs, af, ap);
p$1.loadRnaViewers$jalview_util_jarInputStreamProvider$java_util_List$jalview_gui_AlignmentPanel.apply(this, [jprovider, jseqs, ap]);
}return af;
});

Clazz.newMeth(C$, 'loadRnaViewers$jalview_util_jarInputStreamProvider$java_util_List$jalview_gui_AlignmentPanel',  function (jprovider, jseqs, ap) {
for (var jseq, $jseq = jseqs.iterator$(); $jseq.hasNext$()&&((jseq=($jseq.next$())),1);) {
for (var i=0; i < jseq.getRnaViewer$().size$(); i++) {
var viewer=jseq.getRnaViewer$().get$I(i);
var appVarna=this.findOrCreateVarnaViewer$jalview_xml_binding_jalview_JalviewModel_JSeq_RnaViewer$S$jalview_gui_AlignmentPanel(viewer, this.uniqueSetSuffix, ap);
for (var j=0; j < viewer.getSecondaryStructure$().size$(); j++) {
var ss=viewer.getSecondaryStructure$().get$I(j);
var seq=this.seqRefIds.get$O(jseq.getId$());
var ann=this.annotationIds.get$O(ss.getAnnotationId$());
var gapped=C$.safeBoolean$Boolean(ss.isGapped$());
var rnaTitle=ss.getTitle$();
var sessionState=ss.getViewerState$();
var tempStateFile=this.copyJarEntry$jalview_util_jarInputStreamProvider$S$S$S(jprovider, sessionState, "varna", null);
var rna=Clazz.new_($I$(104,1).c$$S$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_SequenceI$fr_orsay_lri_varna_models_rna_RNA$Z,[rnaTitle, ann, seq, null, gapped]);
appVarna.addModelSession$jalview_ext_varna_RnaModel$S$S(rna, rnaTitle, tempStateFile);
}
appVarna.setInitialSelection$I(C$.safeInt$Integer(viewer.getSelectedRna$()));
}
}
}, p$1);

Clazz.newMeth(C$, 'findOrCreateVarnaViewer$jalview_xml_binding_jalview_JalviewModel_JSeq_RnaViewer$S$jalview_gui_AlignmentPanel',  function (viewer, viewIdSuffix, ap) {
var postLoadId=viewer.getViewId$() + viewIdSuffix;
for (var frame, $frame = 0, $$frame = this.getAllFrames$(); $frame<$$frame.length&&((frame=($$frame[$frame])),1);$frame++) {
if (Clazz.instanceOf(frame, "jalview.gui.AppVarna")) {
var varna=frame;
if (postLoadId.equals$O(varna.getViewId$())) {
return varna;
}}}
var model=Clazz.new_([postLoadId, viewer.getTitle$(), C$.safeInt$Integer(viewer.getXpos$()), C$.safeInt$Integer(viewer.getYpos$()), C$.safeInt$Integer(viewer.getWidth$()), C$.safeInt$Integer(viewer.getHeight$()), C$.safeInt$Integer(viewer.getDividerLocation$())],$I$(105,1).c$$S$S$I$I$I$I$I);
var varna=Clazz.new_($I$(106,1).c$$jalview_datamodel_RnaViewerModel$jalview_gui_AlignmentPanel,[model, ap]);
return varna;
});

Clazz.newMeth(C$, 'loadTrees$jalview_xml_binding_jalview_JalviewModel$jalview_xml_binding_jalview_JalviewModel_Viewport$jalview_gui_AlignFrame$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel',  function (jm, view, af, av, ap) {
try {
for (var t=0; t < jm.getTree$().size$(); t++) {
var tree=jm.getTree$().get$I(t);
var tp=p$1.retrieveExistingObj$S.apply(this, [tree.getId$()]);
if (tp == null ) {
tp=af.showNewickTree$jalview_io_NewickFile$S$I$I$I$I(Clazz.new_([tree.getNewick$()],$I$(107,1).c$$S), tree.getTitle$(), C$.safeInt$Integer(tree.getWidth$()), C$.safeInt$Integer(tree.getHeight$()), C$.safeInt$Integer(tree.getXpos$()), C$.safeInt$Integer(tree.getYpos$()));
if (tree.getId$() != null ) {
}} else {
tp.setTitle$S(tree.getTitle$());
tp.setBounds$java_awt_Rectangle(Clazz.new_([C$.safeInt$Integer(tree.getXpos$()), C$.safeInt$Integer(tree.getYpos$()), C$.safeInt$Integer(tree.getWidth$()), C$.safeInt$Integer(tree.getHeight$())],$I$(108,1).c$$I$I$I$I));
tp.setViewport$jalview_gui_AlignViewport(av);
tp.getTreeCanvas$().setViewport$jalview_gui_AlignViewport(av);
tp.getTreeCanvas$().setAssociatedPanel$jalview_gui_AlignmentPanel(ap);
}tp.getTreeCanvas$().setApplyToAllViews$Z(tree.isLinkToAllViews$());
if (tp == null ) {
$I$(8,"warn$S",["There was a problem recovering stored Newick tree: \n" + tree.getNewick$()]);
continue;
}tp.fitToWindow.setState$Z(C$.safeBoolean$Boolean(tree.isFitToWindow$()));
tp.fitToWindow_actionPerformed$java_awt_event_ActionEvent(null);
if (tree.getFontName$() != null ) {
tp.setTreeFont$java_awt_Font(Clazz.new_([tree.getFontName$(), C$.safeInt$Integer(tree.getFontStyle$()), C$.safeInt$Integer(tree.getFontSize$())],$I$(109,1).c$$S$I$I));
} else {
tp.setTreeFont$java_awt_Font(Clazz.new_([view.getFontName$(), C$.safeInt$Integer(view.getFontStyle$()), C$.safeInt$Integer(view.getFontSize$())],$I$(109,1).c$$S$I$I));
}tp.showPlaceholders$Z(C$.safeBoolean$Boolean(tree.isMarkUnlinked$()));
tp.showBootstrap$Z(C$.safeBoolean$Boolean(tree.isShowBootstrap$()));
tp.showDistances$Z(C$.safeBoolean$Boolean(tree.isShowDistances$()));
tp.getTreeCanvas$().setThreshold$F(C$.safeFloat$Float(tree.getThreshold$()));
if (C$.safeBoolean$Boolean(tree.isCurrentTree$())) {
af.getViewport$().setCurrentTree$jalview_analysis_TreeModel(tp.getTree$());
}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'loadPDBStructures$jalview_util_jarInputStreamProvider$java_util_List$jalview_gui_AlignFrame$jalview_gui_AlignmentPanel',  function (jprovider, jseqs, af, ap) {
var structureViewers=Clazz.new_($I$(110,1));
for (var i=0; i < jseqs.size$(); i++) {
var jseq=jseqs.get$I(i);
if (jseq.getPdbids$().size$() > 0) {
var ids=jseq.getPdbids$();
for (var p=0; p < ids.size$(); p++) {
var pdbid=ids.get$I(p);
var structureStateCount=pdbid.getStructureState$().size$();
for (var s=0; s < structureStateCount; s++) {
var structureState=pdbid.getStructureState$().get$I(s);
var sviewid=(structureState.getViewId$() == null ) ? null : structureState.getViewId$() + this.uniqueSetSuffix;
var jpdb=Clazz.new_($I$(95,1));
jpdb.setFile$S(this.loadPDBFile$jalview_util_jarInputStreamProvider$S$S(jprovider, pdbid.getId$(), pdbid.getFile$()));
jpdb.setId$S(pdbid.getId$());
var x=C$.safeInt$Integer(structureState.getXpos$());
var y=C$.safeInt$Integer(structureState.getYpos$());
var width=C$.safeInt$Integer(structureState.getWidth$());
var height=C$.safeInt$Integer(structureState.getHeight$());
var pdbFile=this.loadPDBFile$jalview_util_jarInputStreamProvider$S$S(jprovider, pdbid.getId$(), pdbid.getFile$());
var seq=this.seqRefIds.get$O(jseq.getId$() + "");
if (sviewid == null ) {
sviewid="_jalview_pre2_4_" + x + "," + y + "," + width + "," + height ;
}if (!structureViewers.containsKey$O(sviewid)) {
var viewerType=structureState.getType$();
if (viewerType == null ) {
viewerType=$I$(111).JMOL.toString();
}structureViewers.put$O$O(sviewid, Clazz.new_([x, y, width, height, false, false, true, structureState.getViewId$(), viewerType],$I$(112,1).c$$I$I$I$I$Z$Z$Z$S$S));
}var jmoldat=structureViewers.get$O(sviewid);
jmoldat.setAlignWithPanel$Z(jmoldat.isAlignWithPanel$() || structureState.isAlignwithAlignPanel$() );
var colourWithAlignPanel=jmoldat.isColourWithAlignPanel$();
colourWithAlignPanel=!!(colourWithAlignPanel|(structureState.isColourwithAlignPanel$()));
jmoldat.setColourWithAlignPanel$Z(colourWithAlignPanel);
var colourByViewer=jmoldat.isColourByViewer$();
colourByViewer=!!(colourByViewer&(structureState.isColourByJmol$()));
jmoldat.setColourByViewer$Z(colourByViewer);
if (jmoldat.getStateData$().length$() < structureState.getValue$().length$()) {
jmoldat.setStateData$S(structureState.getValue$());
}if (pdbid.getFile$() != null ) {
var mapkey=Clazz.new_([pdbid.getFile$()],$I$(12,1).c$$S);
var seqstrmaps=jmoldat.getFileData$().get$O(mapkey);
if (seqstrmaps == null ) {
jmoldat.getFileData$().put$O$O(mapkey, seqstrmaps=Clazz.new_([jmoldat, null, pdbFile, pdbid.getId$()],$I$(113,1).c$$S$S));
}if (!seqstrmaps.getSeqList$().contains$O(seq)) {
seqstrmaps.getSeqList$().add$O(seq);
}} else {
this.errorMessage=("The Jmol views in this project were imported\nfrom an older version of Jalview.\nPlease review the sequence colour associations\nin the Colour by section of the Jmol View menu.\n\nIn the case of problems, see note at\nhttp://issues.jalview.org/browse/JAL-747");
$I$(8).warn$S(this.errorMessage);
}}
}
}}
for (var entry, $entry = structureViewers.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
try {
this.createOrLinkStructureViewer$java_util_Map_Entry$jalview_gui_AlignFrame$jalview_gui_AlignmentPanel$jalview_util_jarInputStreamProvider(entry, af, ap, jprovider);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error loading structure viewer: " + e.getMessage$());
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'createOrLinkStructureViewer$java_util_Map_Entry$jalview_gui_AlignFrame$jalview_gui_AlignmentPanel$jalview_util_jarInputStreamProvider',  function (viewerData, af, ap, jprovider) {
var stateData=viewerData.getValue$();
var comp=this.findMatchingViewer$java_util_Map_Entry(viewerData);
if (comp != null ) {
this.linkStructureViewer$jalview_gui_AlignmentPanel$jalview_gui_StructureViewerBase$jalview_datamodel_StructureViewerModel(ap, comp, stateData);
return;
}var type=stateData.getType$();
try {
var viewerType=$I$(111).valueOf$S(type);
this.createStructureViewer$jalview_gui_StructureViewer_ViewerType$java_util_Map_Entry$jalview_gui_AlignFrame$jalview_util_jarInputStreamProvider(viewerType, viewerData, af, jprovider);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException") || Clazz.exceptionOf(e,"NullPointerException")){
$I$(8).error$S("Invalid structure viewer type: " + type);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getViewerJarEntryName$S',  function (viewId) {
return "viewer_" + viewId;
});

Clazz.newMeth(C$, 'findMatchingViewer$java_util_Map_Entry',  function (viewerData) {
var sviewid=viewerData.getKey$();
var svattrib=viewerData.getValue$();
var comp=null;
var frames=this.getAllFrames$();
for (var frame, $frame = 0, $$frame = frames; $frame<$$frame.length&&((frame=($$frame[$frame])),1);$frame++) {
if (Clazz.instanceOf(frame, "jalview.gui.StructureViewerBase")) {
if (sviewid != null  && (frame).getViewId$().equals$O(sviewid) ) {
comp=frame;
break;
} else if (frame.getX$() == svattrib.getX$() && frame.getY$() == svattrib.getY$()  && frame.getHeight$() == svattrib.getHeight$()  && frame.getWidth$() == svattrib.getWidth$() ) {
comp=frame;
}}}
return comp;
});

Clazz.newMeth(C$, 'linkStructureViewer$jalview_gui_AlignmentPanel$jalview_gui_StructureViewerBase$jalview_datamodel_StructureViewerModel',  function (ap, viewer, stateData) {
var useinViewerSuperpos=stateData.isAlignWithPanel$();
var usetoColourbyseq=stateData.isColourWithAlignPanel$();
var viewerColouring=stateData.isColourByViewer$();
var oldFiles=stateData.getFileData$();
var binding=viewer.getBinding$();
for (var id, $id = oldFiles.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
var filedat=oldFiles.get$O(id);
var pdbFile=filedat.getFilePath$();
var seq=filedat.getSeqList$().toArray$OA(Clazz.array($I$(92), [0]));
binding.getSsm$().setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(seq, null, pdbFile, $I$(114).FILE, null);
binding.addSequenceForStructFile$S$jalview_datamodel_SequenceIA(pdbFile, seq);
}
viewer.addAlignmentPanel$jalview_gui_AlignmentPanel(ap);
if (useinViewerSuperpos) {
viewer.useAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel(ap);
} else {
viewer.excludeAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel(ap);
}if (usetoColourbyseq) {
viewer.useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel$Z(ap, !viewerColouring);
} else {
viewer.excludeAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel(ap);
}});

Clazz.newMeth(C$, 'getAllFrames$',  function () {
var frames=null;
do {
try {
frames=$I$(9).desktop.getAllFrames$();
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
try {
$I$(115).sleep$J(10);
} catch (f) {
if (Clazz.exceptionOf(f,"InterruptedException")){
} else {
throw f;
}
}
} else {
throw e;
}
}
} while (frames == null );
return frames;
});

Clazz.newMeth(C$, 'isVersionStringLaterThan$S$S',  function (supported, version) {
if (supported == null  || version == null   || version.equalsIgnoreCase$S("DEVELOPMENT BUILD")  || version.equalsIgnoreCase$S("Test")  || version.equalsIgnoreCase$S("AUTOMATED BUILD") ) {
System.err.println$S("Assuming project file with " + (version == null  ? "null" : version) + " is compatible with Jalview version " + supported );
return true;
} else {
return $I$(116).compareVersions$S$S$S(version, supported, "b") >= 0;
}}, 1);

Clazz.newMeth(C$, 'addNewStructureViewer$jalview_api_structures_JalviewStructureDisplayI',  function (sview) {
if (this.newStructureViewers != null ) {
sview.getBinding$().setFinishedLoadingFromArchive$Z(false);
this.newStructureViewers.add$O(sview);
}});

Clazz.newMeth(C$, 'setLoadingFinishedForNewStructureViewers$',  function () {
if (this.newStructureViewers != null ) {
for (var sview, $sview = this.newStructureViewers.iterator$(); $sview.hasNext$()&&((sview=($sview.next$())),1);) {
sview.getBinding$().setFinishedLoadingFromArchive$Z(true);
}
this.newStructureViewers.clear$();
this.newStructureViewers=null;
}});

Clazz.newMeth(C$, 'loadViewport$S$java_util_List$java_util_List$jalview_datamodel_AlignmentI$jalview_xml_binding_jalview_JalviewModel$jalview_xml_binding_jalview_JalviewModel_Viewport$S$S$java_util_List',  function (file, JSEQ, hiddenSeqs, al, jm, view, uniqueSeqSetId, viewId, autoAlan) {
var af=null;
af=Clazz.new_([al, C$.safeInt$Integer(view.getWidth$()), C$.safeInt$Integer(view.getHeight$()), uniqueSeqSetId, viewId],$I$(117,1).c$$jalview_datamodel_AlignmentI$I$I$S$S);
af.setFileName$S$jalview_io_FileFormatI(file, $I$(118).Jalview);
var viewport=af.getViewport$();
for (var i=0; i < JSEQ.size$(); i++) {
var colour=C$.safeInt$Integer(JSEQ.get$I(i).getColour$());
viewport.setSequenceColour$jalview_datamodel_SequenceI$java_awt_Color(viewport.getAlignment$().getSequenceAt$I(i), Clazz.new_($I$(64,1).c$$I,[colour]));
}
if (al.hasSeqrep$()) {
viewport.setColourByReferenceSeq$Z(true);
viewport.setDisplayReferenceSeq$Z(true);
}viewport.setGatherViewsHere$Z(C$.safeBoolean$Boolean(view.isGatheredViews$()));
if (view.getSequenceSetId$() != null ) {
var av=this.viewportsAdded.get$O(uniqueSeqSetId);
viewport.setSequenceSetId$S(uniqueSeqSetId);
if (av != null ) {
viewport.setHistoryList$java_util_Deque(av.getHistoryList$());
viewport.setRedoList$java_util_Deque(av.getRedoList$());
} else {
this.viewportsAdded.put$O$O(uniqueSeqSetId, viewport);
}$I$(119).Register$java_awt_Component$S(af.alignPanel, uniqueSeqSetId);
}if (hiddenSeqs != null ) {
for (var s=0; s < JSEQ.size$(); s++) {
var hidden=Clazz.new_($I$(102,1));
var isRepresentative=false;
for (var r=0; r < JSEQ.get$I(s).getHiddenSequences$().size$(); r++) {
isRepresentative=true;
var sequenceToHide=al.getSequenceAt$I((JSEQ.get$I(s).getHiddenSequences$().get$I(r)).$c());
hidden.addSequence$jalview_datamodel_SequenceI$Z(sequenceToHide, false);
hiddenSeqs.remove$O(sequenceToHide);
}
if (isRepresentative) {
var representativeSequence=al.getSequenceAt$I(s);
hidden.addSequence$jalview_datamodel_SequenceI$Z(representativeSequence, false);
viewport.hideRepSequences$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup(representativeSequence, hidden);
}}
var hseqs=hiddenSeqs.toArray$OA(Clazz.array($I$(92), [hiddenSeqs.size$()]));
viewport.hideSequence$jalview_datamodel_SequenceIA(hseqs);
}viewport.setShowAnnotation$Z(C$.safeBoolean$Boolean(view.isShowAnnotation$()));
viewport.setAbovePIDThreshold$Z(C$.safeBoolean$Boolean(view.isPidSelected$()));
var pidThreshold=C$.safeInt$Integer(view.getPidThreshold$());
viewport.setThreshold$I(pidThreshold);
viewport.setColourText$Z(C$.safeBoolean$Boolean(view.isShowColourText$()));
viewport.setConservationSelected$Z(C$.safeBoolean$Boolean(view.isConservationSelected$()));
viewport.setIncrement$I(C$.safeInt$Integer(view.getConsThreshold$()));
viewport.setShowJVSuffix$Z(C$.safeBoolean$Boolean(view.isShowFullId$()));
viewport.setRightAlignIds$Z(C$.safeBoolean$Boolean(view.isRightAlignIds$()));
viewport.setFont$java_awt_Font$Z(Clazz.new_([view.getFontName$(), C$.safeInt$Integer(view.getFontStyle$()), C$.safeInt$Integer(view.getFontSize$())],$I$(109,1).c$$S$I$I), true);
var vs=viewport.getViewStyle$();
vs.setScaleProteinAsCdna$Z(view.isScaleProteinAsCdna$());
viewport.setViewStyle$jalview_api_ViewStyleI(vs);
viewport.setRenderGaps$Z(C$.safeBoolean$Boolean(view.isRenderGaps$()));
viewport.setWrapAlignment$Z(C$.safeBoolean$Boolean(view.isWrapAlignment$()));
viewport.setShowAnnotation$Z(C$.safeBoolean$Boolean(view.isShowAnnotation$()));
viewport.setShowBoxes$Z(C$.safeBoolean$Boolean(view.isShowBoxes$()));
viewport.setShowText$Z(C$.safeBoolean$Boolean(view.isShowText$()));
viewport.setTextColour$java_awt_Color(Clazz.new_([C$.safeInt$Integer(view.getTextCol1$())],$I$(64,1).c$$I));
viewport.setTextColour2$java_awt_Color(Clazz.new_([C$.safeInt$Integer(view.getTextCol2$())],$I$(64,1).c$$I));
viewport.setThresholdTextColour$I(C$.safeInt$Integer(view.getTextColThreshold$()));
viewport.setShowUnconserved$Z(view.isShowUnconserved$());
viewport.getRanges$().setStartRes$I(C$.safeInt$Integer(view.getStartRes$()));
if (view.getViewName$() != null ) {
viewport.setViewName$S(view.getViewName$());
af.setInitialTabVisible$();
}af.setBounds$I$I$I$I(C$.safeInt$Integer(view.getXpos$()), C$.safeInt$Integer(view.getYpos$()), C$.safeInt$Integer(view.getWidth$()), C$.safeInt$Integer(view.getHeight$()));
af.alignPanel.updateLayout$();
var cs=null;
if (view.getBgColour$() != null ) {
if (view.getBgColour$().startsWith$S("ucs")) {
cs=this.getUserColourScheme$jalview_xml_binding_jalview_JalviewModel$S(jm, view.getBgColour$());
} else if (view.getBgColour$().startsWith$S("Annotation")) {
var viewAnnColour=view.getAnnotationColours$();
cs=p$1.constructAnnotationColour$jalview_xml_binding_jalview_AnnotationColourScheme$jalview_gui_AlignFrame$jalview_datamodel_AlignmentI$jalview_xml_binding_jalview_JalviewModel$Z.apply(this, [viewAnnColour, af, al, jm, true]);
} else {
cs=$I$(32,"getColourScheme$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$S",[af.getViewport$(), al, view.getBgColour$()]);
}}viewport.setColourAppliesToAllGroups$Z(false);
viewport.setGlobalColourScheme$jalview_schemes_ColourSchemeI(cs);
viewport.getResidueShading$().setThreshold$I$Z(pidThreshold, view.isIgnoreGapsinConsensus$());
viewport.getResidueShading$().setConsensus$jalview_datamodel_ProfilesI(viewport.getSequenceConsensusHash$());
if (C$.safeBoolean$Boolean(view.isConservationSelected$()) && cs != null  ) {
viewport.getResidueShading$().setConservationInc$I(C$.safeInt$Integer(view.getConsThreshold$()));
}af.changeColour$jalview_schemes_ColourSchemeI(cs);
viewport.setColourAppliesToAllGroups$Z(true);
viewport.setShowSequenceFeatures$Z(C$.safeBoolean$Boolean(view.isShowSequenceFeatures$()));
viewport.setCentreColumnLabels$Z(view.isCentreColumnLabels$());
viewport.setIgnoreGapsConsensus$Z$jalview_api_AlignmentViewPanel(view.isIgnoreGapsinConsensus$(), null);
viewport.setFollowHighlight$Z(view.isFollowHighlight$());
viewport.followSelection=view.isFollowSelection$();
viewport.setShowConsensusHistogram$Z(view.isShowConsensusHistogram$());
viewport.setShowSequenceLogo$Z(view.isShowSequenceLogo$());
viewport.setNormaliseSequenceLogo$Z(view.isNormaliseSequenceLogo$());
viewport.setShowDBRefs$Z(C$.safeBoolean$Boolean(view.isShowDbRefTooltip$()));
viewport.setShowNPFeats$Z(C$.safeBoolean$Boolean(view.isShowNPfeatureTooltip$()));
viewport.setShowGroupConsensus$Z(view.isShowGroupConsensus$());
viewport.setShowGroupConservation$Z(view.isShowGroupConservation$());
viewport.setShowComplementFeatures$Z(view.isShowComplementFeatures$());
viewport.setShowComplementFeaturesOnTop$Z(view.isShowComplementFeaturesOnTop$());
if (jm.getFeatureSettings$() != null ) {
var fr=af.alignPanel.getSeqPanel$().seqCanvas.getFeatureRenderer$();
var fdi;
viewport.setFeaturesDisplayed$jalview_api_FeaturesDisplayedI(fdi=Clazz.new_($I$(120,1)));
var renderOrder=Clazz.array(String, [jm.getFeatureSettings$().getSetting$().size$()]);
var featureColours=Clazz.new_($I$(11,1));
var featureOrder=Clazz.new_($I$(11,1));
for (var fs=0; fs < jm.getFeatureSettings$().getSetting$().size$(); fs++) {
var setting=jm.getFeatureSettings$().getSetting$().get$I(fs);
var featureType=setting.getType$();
var filters=setting.getMatcherSet$();
if (filters != null ) {
var filter=C$.parseFilter$S$jalview_xml_binding_jalview_FeatureMatcherSet(featureType, filters);
if (!filter.isEmpty$()) {
fr.setFeatureFilter$S$jalview_datamodel_features_FeatureMatcherSetI(featureType, filter);
}}var maxColour=Clazz.new_([setting.getColour$()],$I$(64,1).c$$I);
if (setting.getMincolour$() != null ) {
var minColour=Clazz.new_([setting.getMincolour$().intValue$()],$I$(64,1).c$$I);
var noValueColour=minColour;
var noColour=setting.getNoValueColour$();
if (noColour === $I$(36).NONE ) {
noValueColour=null;
} else if (noColour === $I$(36).MAX ) {
noValueColour=maxColour;
}var min=C$.safeFloat$Float(Float.valueOf$F(C$.safeFloat$Float(setting.getMin$())));
var max=setting.getMax$() == null  ? 1.0 : setting.getMax$().floatValue$();
var gc=Clazz.new_($I$(121,1).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$F$F,[maxColour, minColour, maxColour, noValueColour, min, max]);
if (setting.getAttributeName$().size$() > 0) {
gc.setAttributeName$SA(setting.getAttributeName$().toArray$OA(Clazz.array(String, [setting.getAttributeName$().size$()])));
}if (setting.getThreshold$() != null ) {
gc.setThreshold$F(setting.getThreshold$().floatValue$());
var threshstate=C$.safeInt$Integer(setting.getThreshstate$());
if (threshstate == 0) {
gc.setBelowThreshold$Z(true);
} else if (threshstate == 1) {
gc.setAboveThreshold$Z(true);
}}gc.setAutoScaled$Z(true);
if (setting.isAutoScale$() != null ) {
gc.setAutoScaled$Z((setting.isAutoScale$()).valueOf());
}if (setting.isColourByLabel$() != null ) {
gc.setColourByLabel$Z((setting.isColourByLabel$()).valueOf());
}featureColours.put$O$O(featureType, gc);
} else {
featureColours.put$O$O(featureType, Clazz.new_($I$(121,1).c$$java_awt_Color,[maxColour]));
}renderOrder[fs]=featureType;
if (setting.getOrder$() != null ) {
featureOrder.put$O$O(featureType, Float.valueOf$F(setting.getOrder$().floatValue$()));
} else {
featureOrder.put$O$O(featureType, Float.valueOf$F((fs/jm.getFeatureSettings$().getSetting$().size$()|0)));
}if (C$.safeBoolean$Boolean(Boolean.valueOf$Z(setting.isDisplay$()))) {
fdi.setVisible$S(featureType);
}}
var fgtable=Clazz.new_($I$(11,1));
for (var gs=0; gs < jm.getFeatureSettings$().getGroup$().size$(); gs++) {
var grp=jm.getFeatureSettings$().getGroup$().get$I(gs);
fgtable.put$O$O(grp.getName$(), Boolean.valueOf$Z(grp.isDisplay$()));
}
var frs=Clazz.new_($I$(122,1).c$$SA$java_util_Map$java_util_Map$F$java_util_Map,[renderOrder, fgtable, featureColours, 1.0, featureOrder]);
fr.transferSettings$jalview_viewmodel_seqfeatures_FeatureRendererSettings(frs);
}if (view.getHiddenColumns$().size$() > 0) {
for (var c=0; c < view.getHiddenColumns$().size$(); c++) {
var hc=view.getHiddenColumns$().get$I(c);
viewport.hideColumns$I$I(C$.safeInt$Integer(hc.getStart$()), C$.safeInt$Integer(hc.getEnd$()));
}
}if (view.getCalcIdParam$() != null ) {
for (var calcIdParam, $calcIdParam = view.getCalcIdParam$().iterator$(); $calcIdParam.hasNext$()&&((calcIdParam=($calcIdParam.next$())),1);) {
if (calcIdParam != null ) {
if (p$1.recoverCalcIdParam$jalview_xml_binding_jalview_JalviewModel_Viewport_CalcIdParam$jalview_gui_AlignViewport.apply(this, [calcIdParam, viewport])) {
} else {
$I$(8,"warn$S",["Couldn't recover parameters for " + calcIdParam.getCalcId$()]);
}}}
}af.setMenusFromViewport$jalview_gui_AlignViewport(viewport);
af.setTitle$S(view.getTitle$());
var complementaryViewId=view.getComplementId$();
if (complementaryViewId == null ) {
$I$(9,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[af, view.getTitle$(), C$.safeInt$Integer(view.getWidth$()), C$.safeInt$Integer(view.getHeight$())]);
af.alignPanel.updateAnnotation$Z$Z(false, true);
p$1.reorderAutoannotation$jalview_gui_AlignFrame$jalview_datamodel_AlignmentI$java_util_List.apply(this, [af, al, autoAlan]);
af.alignPanel.alignmentChanged$();
} else {
this.splitFrameCandidates.put$O$O(view, af);
}return af;
});

Clazz.newMeth(C$, 'constructAnnotationColour$jalview_xml_binding_jalview_AnnotationColourScheme$jalview_gui_AlignFrame$jalview_datamodel_AlignmentI$jalview_xml_binding_jalview_JalviewModel$Z',  function (viewAnnColour, af, al, model, checkGroupAnnColour) {
var propagateAnnColour=false;
var annAlignment=af != null  ? af.getViewport$().getAlignment$() : al;
if (checkGroupAnnColour && al.getGroups$() != null   && al.getGroups$().size$() > 0 ) {
propagateAnnColour=true;
for (var sg, $sg = al.getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (Clazz.instanceOf(sg.getColourScheme$(), "jalview.schemes.AnnotationColourGradient")) {
propagateAnnColour=false;
}}
}var annotationId=viewAnnColour.getAnnotation$();
var matchedAnnotation=this.annotationIds.get$O(annotationId);
if (matchedAnnotation == null  && annAlignment.getAlignmentAnnotation$() != null  ) {
for (var i=0; i < annAlignment.getAlignmentAnnotation$().length; i++) {
if (annotationId.equals$O(annAlignment.getAlignmentAnnotation$()[i].label)) {
matchedAnnotation=annAlignment.getAlignmentAnnotation$()[i];
break;
}}
}if (matchedAnnotation == null ) {
System.err.println$S("Failed to match annotation colour scheme for " + annotationId);
return null;
}if (matchedAnnotation.getThreshold$() == null ) {
matchedAnnotation.setThreshold$jalview_datamodel_GraphLine(Clazz.new_([C$.safeFloat$Float(viewAnnColour.getThreshold$()), "Threshold", $I$(64).black],$I$(100,1).c$$F$S$java_awt_Color));
}var cs=null;
if (viewAnnColour.getColourScheme$().equals$O("None")) {
cs=Clazz.new_([matchedAnnotation, Clazz.new_([C$.safeInt$Integer(viewAnnColour.getMinColour$())],$I$(64,1).c$$I), Clazz.new_([C$.safeInt$Integer(viewAnnColour.getMaxColour$())],$I$(64,1).c$$I), C$.safeInt$Integer(viewAnnColour.getAboveThreshold$())],$I$(123,1).c$$jalview_datamodel_AlignmentAnnotation$java_awt_Color$java_awt_Color$I);
} else if (viewAnnColour.getColourScheme$().startsWith$S("ucs")) {
cs=Clazz.new_([matchedAnnotation, this.getUserColourScheme$jalview_xml_binding_jalview_JalviewModel$S(model, viewAnnColour.getColourScheme$()), C$.safeInt$Integer(viewAnnColour.getAboveThreshold$())],$I$(123,1).c$$jalview_datamodel_AlignmentAnnotation$jalview_schemes_ColourSchemeI$I);
} else {
cs=Clazz.new_([matchedAnnotation, $I$(32,"getColourScheme$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$S",[af.getViewport$(), al, viewAnnColour.getColourScheme$()]), C$.safeInt$Integer(viewAnnColour.getAboveThreshold$())],$I$(123,1).c$$jalview_datamodel_AlignmentAnnotation$jalview_schemes_ColourSchemeI$I);
}var perSequenceOnly=C$.safeBoolean$Boolean(viewAnnColour.isPerSequence$());
var useOriginalColours=C$.safeBoolean$Boolean(viewAnnColour.isPredefinedColours$());
cs.setSeqAssociated$Z(perSequenceOnly);
cs.setPredefinedColours$Z(useOriginalColours);
if (propagateAnnColour && al.getGroups$() != null  ) {
for (var g=0; g < al.getGroups$().size$(); g++) {
var sg=al.getGroups$().get$I(g);
if (sg.getGroupColourScheme$() == null ) {
continue;
}var groupScheme=Clazz.new_([matchedAnnotation, sg.getColourScheme$(), C$.safeInt$Integer(viewAnnColour.getAboveThreshold$())],$I$(123,1).c$$jalview_datamodel_AlignmentAnnotation$jalview_schemes_ColourSchemeI$I);
sg.setColourScheme$jalview_schemes_ColourSchemeI(groupScheme);
groupScheme.setSeqAssociated$Z(perSequenceOnly);
groupScheme.setPredefinedColours$Z(useOriginalColours);
}
}return cs;
}, p$1);

Clazz.newMeth(C$, 'reorderAutoannotation$jalview_gui_AlignFrame$jalview_datamodel_AlignmentI$java_util_List',  function (af, al, autoAlan) {
if (al.getAlignmentAnnotation$() != null ) {
var magicNames=Clazz.array(String, -1, ["Consensus", "Quality", "Conservation"]);
var nullAnnot=Clazz.new_($I$(101,1).c$$I$jalview_datamodel_AlignmentAnnotation,[this, null, -1, null]);
var visan=Clazz.new_($I$(11,1));
for (var nm, $nm = 0, $$nm = magicNames; $nm<$$nm.length&&((nm=($$nm[$nm])),1);$nm++) {
visan.put$O$O(nm, nullAnnot);
}
for (var auan, $auan = autoAlan.iterator$(); $auan.hasNext$()&&((auan=($auan.next$())),1);) {
visan.put$O$O(auan.template.label + (auan.template.getCalcId$() == null  ? "" : "\t" + auan.template.getCalcId$()), auan);
}
var hSize=al.getAlignmentAnnotation$().length;
var reorder=Clazz.new_($I$(4,1));
var remains=Clazz.new_([visan.keySet$()],$I$(4,1).c$$java_util_Collection);
for (var h=0; h < hSize; h++) {
var jalan=al.getAlignmentAnnotation$()[h];
if (jalan.autoCalculated) {
var k;
var valan=visan.get$O(k=jalan.label);
if (jalan.getCalcId$() != null ) {
valan=visan.get$O(k=jalan.label + "\t" + jalan.getCalcId$() );
}if (valan != null ) {
al.deleteAnnotation$jalview_datamodel_AlignmentAnnotation$Z(jalan, false);
remains.remove$O(k);
--hSize;
--h;
if (valan !== nullAnnot ) {
if (jalan !== valan.template ) {
if (valan.template.graphHeight >= 0) {
jalan.graphHeight=valan.template.graphHeight;
}jalan.visible=valan.template.visible;
}reorder.add$O(Clazz.new_($I$(101,1).c$$I$jalview_datamodel_AlignmentAnnotation,[this, null, valan.order, jalan]));
}}}}
for (var other, $other = remains.iterator$(); $other.hasNext$()&&((other=($other.next$())),1);) {
var othera=visan.get$O(other);
if (othera !== nullAnnot  && othera.template.getCalcId$() != null   && othera.template.getCalcId$().length$() > 0 ) {
reorder.add$O(othera);
}}
var s=0;
var srt=Clazz.array(Integer.TYPE, [reorder.size$()]);
var rws=Clazz.array($I$(101), [reorder.size$()]);
for (var jvar, $jvar = reorder.iterator$(); $jvar.hasNext$()&&((jvar=($jvar.next$())),1);) {
rws[s]=jvar;
srt[s++]=jvar.order;
}
reorder.clear$();
$I$(124).sort$IA$OA(srt, rws);
for (var jvar, $jvar = 0, $$jvar = rws; $jvar<$$jvar.length&&((jvar=($$jvar[$jvar])),1);$jvar++) {
al.addAnnotation$jalview_datamodel_AlignmentAnnotation$I(jvar.template, jvar.order);
}
af.alignPanel.adjustAnnotationHeight$();
}}, p$1);

Clazz.newMeth(C$, 'skipViewport$jalview_xml_binding_jalview_JalviewModel',  function (object) {
if (this.skipList == null ) {
return false;
}var id=object.getViewport$().get$I(0).getSequenceSetId$();
if (this.skipList.containsKey$O(id)) {
$I$(8).debug$S("Skipping seuqence set id " + id);
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'addToSkipList$jalview_gui_AlignFrame',  function (af) {
if (this.skipList == null ) {
this.skipList=Clazz.new_($I$(11,1));
}this.skipList.put$O$O(af.getViewport$().getSequenceSetId$(), af);
});

Clazz.newMeth(C$, 'clearSkipList$',  function () {
if (this.skipList != null ) {
this.skipList.clear$();
this.skipList=null;
}});

Clazz.newMeth(C$, 'recoverDatasetFor$jalview_xml_binding_jalview_SequenceSet$jalview_datamodel_AlignmentI$Z$S',  function (vamsasSet, al, ignoreUnrefed, uniqueSeqSetId) {
var ds=p$1.getDatasetFor$S.apply(this, [vamsasSet.getDatasetId$()]);
var xtant_ds=ds;
if (xtant_ds == null ) {
xtant_ds=this.checkIfHasDataset$java_util_List(vamsasSet.getSequence$());
if (xtant_ds != null ) {
ds=xtant_ds;
p$1.addDatasetRef$S$jalview_datamodel_AlignmentI.apply(this, [vamsasSet.getDatasetId$(), ds]);
}}var dseqs=null;
if (!ignoreUnrefed) {
var seqSetDS=p$1.getDatasetFor$S.apply(this, ["uniqueSeqSetId." + uniqueSeqSetId]);
if (seqSetDS != null ) {
if (ds != null  && ds !== seqSetDS  ) {
$I$(8).warn$S("JAL-3171 regression: Overwriting a dataset reference for an alignment - CDS/Protein crossreference data may be lost");
if (xtant_ds != null ) {
$I$(8).warn$S("JAL-3171 SERIOUS!  TOTAL CONFUSION - please consider contacting the Jalview Development team so they can investigate why your project caused this message to be displayed.");
}}ds=seqSetDS;
p$1.addDatasetRef$S$jalview_datamodel_AlignmentI.apply(this, [vamsasSet.getDatasetId$(), ds]);
}}if (ds == null ) {
var xtantDS=this.checkIfHasDataset$java_util_List(vamsasSet.getSequence$());
dseqs=Clazz.new_($I$(34,1));
}for (var i=0, iSize=vamsasSet.getSequence$().size$(); i < iSize; i++) {
var vamsasSeq=vamsasSet.getSequence$().get$I(i);
p$1.ensureJalviewDatasetSequence$jalview_xml_binding_jalview_Sequence$jalview_datamodel_AlignmentI$java_util_Vector$Z$I.apply(this, [vamsasSeq, ds, dseqs, ignoreUnrefed, i]);
}
if (ds == null ) {
var dsseqs=Clazz.array($I$(92), [dseqs.size$()]);
dseqs.copyInto$OA(dsseqs);
ds=Clazz.new_($I$(93,1).c$$jalview_datamodel_SequenceIA,[dsseqs]);
$I$(8,"debug$S",["Created new dataset " + vamsasSet.getDatasetId$() + " for alignment " + System.identityHashCode$O(al) ]);
p$1.addDatasetRef$S$jalview_datamodel_AlignmentI.apply(this, [vamsasSet.getDatasetId$(), ds]);
}if (al.getDataset$() == null  && !ignoreUnrefed ) {
al.setDataset$jalview_datamodel_AlignmentI(ds);
p$1.addDatasetRef$S$jalview_datamodel_AlignmentI.apply(this, ["uniqueSeqSetId." + uniqueSeqSetId, ds]);
}this.updateSeqDatasetBinding$java_util_List$jalview_datamodel_AlignmentI(vamsasSet.getSequence$(), ds);
}, p$1);

Clazz.newMeth(C$, 'checkIfHasDataset$java_util_List',  function (list) {
for (var restoredSeq, $restoredSeq = list.iterator$(); $restoredSeq.hasNext$()&&((restoredSeq=($restoredSeq.next$())),1);) {
var datasetFor=this.seqToDataset.get$O(restoredSeq.getDsseqid$());
if (datasetFor != null ) {
return datasetFor;
}}
return null;
});

Clazz.newMeth(C$, 'updateSeqDatasetBinding$java_util_List$jalview_datamodel_AlignmentI',  function (list, ds) {
for (var restoredSeq, $restoredSeq = list.iterator$(); $restoredSeq.hasNext$()&&((restoredSeq=($restoredSeq.next$())),1);) {
var prevDS=this.seqToDataset.put$O$O(restoredSeq.getDsseqid$(), ds);
if (prevDS != null  && prevDS !== ds  ) {
$I$(8,"warn$S",["Dataset sequence appears in many datasets: " + restoredSeq.getDsseqid$()]);
}}
});

Clazz.newMeth(C$, 'ensureJalviewDatasetSequence$jalview_xml_binding_jalview_Sequence$jalview_datamodel_AlignmentI$java_util_Vector$Z$I',  function (vamsasSeq, ds, dseqs, ignoreUnrefed, vseqpos) {
var sq=this.seqRefIds.get$O(vamsasSeq.getId$());
var reorder=false;
var dsq=null;
if (sq != null  && sq.getDatasetSequence$() != null  ) {
dsq=sq.getDatasetSequence$();
} else {
reorder=true;
}if (sq == null  && ignoreUnrefed ) {
return;
}var sqid=vamsasSeq.getDsseqid$();
if (dsq == null ) {
if (sqid != null ) {
dsq=this.seqRefIds.get$O(sqid);
}if (dsq == null ) {
dsq=sq.createDatasetSequence$();
if (sqid == null ) {
sqid=this.seqHash$jalview_datamodel_SequenceI(dsq);
}dsq.setVamsasId$S(this.uniqueSetSuffix + sqid);
this.seqRefIds.put$O$O(sqid, dsq);
if (ds == null ) {
if (dseqs != null ) {
dseqs.addElement$O(dsq);
}} else {
ds.addSequence$jalview_datamodel_SequenceI(dsq);
}} else {
if (sq !== dsq ) {
sq.setDatasetSequence$jalview_datamodel_SequenceI(dsq);
if (ds == null ) {
if (dseqs != null ) {
if (!dseqs.contains$O(dsq)) {
dseqs.add$O(dsq);
}} else {
if (ds.findIndex$jalview_datamodel_SequenceI(dsq) < 0) {
ds.addSequence$jalview_datamodel_SequenceI(dsq);
}}}}}}if (sq !== dsq ) {
var newres=$I$(125,"extractGaps$S$S",[$I$(126).GapChars, sq.getSequenceAsString$()]);
if (!newres.equalsIgnoreCase$S(dsq.getSequenceAsString$()) && newres.length$() > dsq.getLength$() ) {
{
dsq.setSequence$S(newres);
}System.err.println$S("DEBUG Notice:  Merged dataset sequence (if you see this often, post at http://issues.jalview.org/browse/JAL-1474)");
}} else {
if (ds != null  && dseqs == null  ) {
var opos=ds.findIndex$jalview_datamodel_SequenceI(dsq);
var tseq=null;
if (opos != -1 && vseqpos != opos ) {
ds.deleteSequence$jalview_datamodel_SequenceI(dsq);
}if (vseqpos < ds.getHeight$()) {
if (vseqpos != opos) {
tseq=ds.getSequenceAt$I(vseqpos);
ds.replaceSequenceAt$I$jalview_datamodel_SequenceI(vseqpos, dsq);
ds.addSequence$jalview_datamodel_SequenceI(tseq);
}} else {
ds.addSequence$jalview_datamodel_SequenceI(dsq);
}}}}, p$1);

Clazz.newMeth(C$, 'getDatasetFor$S',  function (datasetId) {
if (this.datasetIds == null ) {
this.datasetIds=Clazz.new_($I$(11,1));
return null;
}if (this.datasetIds.containsKey$O(datasetId)) {
return this.datasetIds.get$O(datasetId);
}return null;
}, p$1);

Clazz.newMeth(C$, 'addDatasetRef$S$jalview_datamodel_AlignmentI',  function (datasetId, dataset) {
if (this.datasetIds == null ) {
this.datasetIds=Clazz.new_($I$(11,1));
}this.datasetIds.put$O$O(datasetId, dataset);
}, p$1);

Clazz.newMeth(C$, 'getDatasetIdRef$jalview_datamodel_AlignmentI',  function (dataset) {
if (dataset.getDataset$() != null ) {
$I$(8).warn$S("Serious issue!  Dataset Object passed to getDatasetIdRef is not a Jalview DATASET alignment...");
}var datasetId=p$1.makeHashCode$O$S.apply(this, [dataset, null]);
if (datasetId == null ) {
if (this.dataset2Ids == null ) {
this.dataset2Ids=Clazz.new_($I$(3,1));
} else {
datasetId=this.dataset2Ids.get$O(dataset);
}if (datasetId == null ) {
datasetId="ds" + this.dataset2Ids.size$() + 1 ;
this.dataset2Ids.put$O$O(dataset, datasetId);
}}return datasetId;
}, p$1);

Clazz.newMeth(C$, 'addDBRefs$jalview_datamodel_SequenceI$jalview_xml_binding_jalview_Sequence',  function (datasetSequence, sequence) {
for (var d=0; d < sequence.getDBRef$().size$(); d++) {
var dr=sequence.getDBRef$().get$I(d);
var entry;
if (dr.isLocus$()) {
entry=Clazz.new_([dr.getSource$(), dr.getVersion$(), dr.getAccessionId$()],$I$(127,1).c$$S$S$S);
} else {
entry=Clazz.new_([dr.getSource$(), dr.getVersion$(), dr.getAccessionId$()],$I$(128,1).c$$S$S$S);
}if (dr.getMapping$() != null ) {
entry.setMap$jalview_datamodel_Mapping(p$1.addMapping$jalview_xml_binding_jalview_Mapping.apply(this, [dr.getMapping$()]));
}entry.setCanonical$Z(dr.isCanonical$());
datasetSequence.addDBRef$jalview_datamodel_DBRefEntry(entry);
}
}, p$1);

Clazz.newMeth(C$, 'addMapping$jalview_xml_binding_jalview_Mapping',  function (m) {
var dsto=null;
var fr=Clazz.array(Integer.TYPE, [m.getMapListFrom$().size$() * 2]);
var from=m.getMapListFrom$().iterator$();
for (var _i=0; from.hasNext$(); _i+=2) {
var mf=from.next$();
fr[_i]=mf.getStart$();
fr[_i + 1]=mf.getEnd$();
}
var fto=Clazz.array(Integer.TYPE, [m.getMapListTo$().size$() * 2]);
var to=m.getMapListTo$().iterator$();
for (var _i=0; to.hasNext$(); _i+=2) {
var mf=to.next$();
fto[_i]=mf.getStart$();
fto[_i + 1]=mf.getEnd$();
}
var jmap=Clazz.new_([dsto, fr, fto, m.getMapFromUnit$().intValue$(), m.getMapToUnit$().intValue$()],$I$(129,1).c$$jalview_datamodel_SequenceI$IA$IA$I$I);
if (m.getDseqFor$() != null ) {
var dsfor=m.getDseqFor$();
if (this.seqRefIds.containsKey$O(dsfor)) {
jmap.setTo$jalview_datamodel_SequenceI(this.seqRefIds.get$O(dsfor));
} else {
this.frefedSequence.add$O(this.newMappingRef$S$jalview_datamodel_Mapping(dsfor, jmap));
}} else if (m.getSequence$() != null ) {
var ms=m.getSequence$();
var djs=null;
var sqid=ms.getDsseqid$();
if (sqid != null  && sqid.length$() > 0 ) {
djs=this.seqRefIds.get$O(sqid);
} else {
System.err.println$S("Warning - making up dataset sequence id for DbRef sequence map reference");
sqid=(ms).toString();
}if (djs == null ) {
djs=Clazz.new_([ms.getName$(), ms.getSequence$()],$I$(91,1).c$$S$S);
djs.setStart$I(jmap.getMap$().getToLowest$());
djs.setEnd$I(jmap.getMap$().getToHighest$());
djs.setVamsasId$S(this.uniqueSetSuffix + sqid);
jmap.setTo$jalview_datamodel_SequenceI(djs);
this.incompleteSeqs.put$O$O(sqid, djs);
this.seqRefIds.put$O$O(sqid, djs);
}$I$(8).debug$S("about to recurse on addDBRefs.");
p$1.addDBRefs$jalview_datamodel_SequenceI$jalview_xml_binding_jalview_Sequence.apply(this, [djs, ms]);
}return jmap;
}, p$1);

Clazz.newMeth(C$, 'copyAlignPanel$jalview_gui_AlignmentPanel',  function (ap) {
this.initSeqRefs$();
var jm=this.saveState$jalview_gui_AlignmentPanel$S$java_util_jar_JarOutputStream$java_util_List(ap, null, null, null);
p$1.addDatasetRef$S$jalview_datamodel_AlignmentI.apply(this, [jm.getVamsasModel$().getSequenceSet$().get$I(0).getDatasetId$(), ap.getAlignment$().getDataset$()]);
this.uniqueSetSuffix="";
jm.getViewport$().get$I(0).setId$S(null);
if (this.frefedSequence == null ) {
this.frefedSequence=Clazz.new_($I$(34,1));
}this.viewportsAdded.clear$();
var af=this.loadFromObject$jalview_xml_binding_jalview_JalviewModel$S$Z$jalview_util_jarInputStreamProvider(jm, null, false, null);
af.getAlignPanels$().clear$();
af.closeMenuItem_actionPerformed$Z(true);
return af.alignPanel;
});

Clazz.newMeth(C$, 'setObjectMappingTables$java_util_Hashtable$java_util_IdentityHashMap',  function (vobj2jv, jv2vobj) {
this.jv2vobj=jv2vobj;
this.vobj2jv=vobj2jv;
var ds=jv2vobj.keySet$().iterator$();
var id;
while (ds.hasNext$()){
var jvobj=ds.next$();
id=jv2vobj.get$O(jvobj).toString();
if (Clazz.instanceOf(jvobj, "jalview.datamodel.Alignment")) {
if ((jvobj).getDataset$() == null ) {
p$1.addDatasetRef$S$jalview_datamodel_AlignmentI.apply(this, [id, jvobj]);
}} else if (Clazz.instanceOf(jvobj, "jalview.datamodel.Sequence")) {
if (this.seqRefIds == null ) {
this.seqRefIds=Clazz.new_($I$(2,1));
}if (this.seqsToIds == null ) {
this.seqsToIds=Clazz.new_($I$(3,1));
}this.seqRefIds.put$O$O(jv2vobj.get$O(jvobj).toString(), jvobj);
this.seqsToIds.put$O$O(jvobj, id);
} else if (Clazz.instanceOf(jvobj, "jalview.datamodel.AlignmentAnnotation")) {
var anid;
var jvann=jvobj;
this.annotationIds.put$O$O(anid=jv2vobj.get$O(jvobj).toString(), jvann);
if (jvann.annotationId == null ) {
jvann.annotationId=anid;
}if (!jvann.annotationId.equals$O(anid)) {
$I$(8).warn$S("Overriding Annotation ID for " + anid + " from different id : " + jvann.annotationId );
jvann.annotationId=anid;
}} else if (Clazz.instanceOf(jvobj, "java.lang.String")) {
if (this.jvids2vobj == null ) {
this.jvids2vobj=Clazz.new_($I$(11,1));
this.jvids2vobj.put$O$O(jvobj, jv2vobj.get$O(jvobj).toString());
}} else {
$I$(8,"debug$S",["Ignoring " + jvobj.getClass$() + " (ID = " + id ]);
}}
});

Clazz.newMeth(C$, 'setUniqueSetSuffix$S',  function (string) {
this.uniqueSetSuffix=string;
});

Clazz.newMeth(C$, 'setSkipList$java_util_Hashtable',  function (skipList2) {
this.skipList=skipList2;
});

Clazz.newMeth(C$, 'readJarEntry$jalview_util_jarInputStreamProvider$S',  function (jprovider, jarEntryName) {
var result=null;
var $in=null;
try {
var jin=jprovider.getJarInputStream$();
var entry=null;
do {
entry=jin.getNextJarEntry$();
} while (entry != null  && !entry.getName$().equals$O(jarEntryName) );
if (entry != null ) {
var out=Clazz.new_($I$(130,1).c$$I,[256]);
$in=Clazz.new_([Clazz.new_($I$(132,1).c$$java_io_InputStream$S,[jin, "UTF-8"])],$I$(131,1).c$$java_io_Reader);
var data;
while ((data=$in.readLine$()) != null ){
out.append$S(data);
}
result=out.toString();
} else {
$I$(8).warn$S("Couldn't find entry in Jalview Jar for " + jarEntryName);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
} finally {
if ($in != null ) {
try {
$in.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
return result;
});

Clazz.newMeth(C$, 'nextCounter',  function () {
return this.counter++;
}, p$1);

Clazz.newMeth(C$, 'loadPCAViewers$jalview_xml_binding_jalview_JalviewModel$jalview_gui_AlignmentPanel',  function (model, ap) {
try {
var pcaviewers=model.getPcaViewer$();
for (var viewer, $viewer = pcaviewers.iterator$(); $viewer.hasNext$()&&((viewer=($viewer.next$())),1);) {
var modelName=viewer.getScoreModelName$();
var params=Clazz.new_([(viewer.isIncludeGappedColumns$()).valueOf(), (viewer.isMatchGaps$()).valueOf(), (viewer.isIncludeGaps$()).valueOf(), (viewer.isDenominateByShortestLength$()).valueOf()],$I$(133,1).c$$Z$Z$Z$Z);
var panel=Clazz.new_($I$(134,1).c$$jalview_gui_AlignmentPanel$S$jalview_api_analysis_SimilarityParamsI,[ap, modelName, params]);
panel.setTitle$S(viewer.getTitle$());
panel.setBounds$java_awt_Rectangle(Clazz.new_([(viewer.getXpos$()).$c(), (viewer.getYpos$()).$c(), (viewer.getWidth$()).$c(), (viewer.getHeight$()).$c()],$I$(108,1).c$$I$I$I$I));
var showLabels=(viewer.isShowLabels$()).valueOf();
panel.setShowLabels$Z(showLabels);
panel.getRotatableCanvas$().setShowLabels$Z(showLabels);
panel.getRotatableCanvas$().setBgColour$java_awt_Color(Clazz.new_([(viewer.getBgColour$()).$c()],$I$(64,1).c$$I));
panel.getRotatableCanvas$().setApplyToAllViews$Z((viewer.isLinkToAllViews$()).valueOf());
var scoreModel=$I$(135).getInstance$().getScoreModel$S$jalview_api_AlignmentViewPanel(modelName, ap);
var pca=Clazz.new_($I$(136,1).c$$jalview_datamodel_AlignmentView$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI,[null, scoreModel, params]);
var pcaData=viewer.getPcaData$();
var pairwise=this.loadDoubleMatrix$jalview_xml_binding_jalview_DoubleMatrix(pcaData.getPairwiseMatrix$());
pca.setPairwiseScores$jalview_math_MatrixI(pairwise);
var triDiag=this.loadDoubleMatrix$jalview_xml_binding_jalview_DoubleMatrix(pcaData.getTridiagonalMatrix$());
pca.setTridiagonal$jalview_math_MatrixI(triDiag);
var result=this.loadDoubleMatrix$jalview_xml_binding_jalview_DoubleMatrix(pcaData.getEigenMatrix$());
pca.setEigenmatrix$jalview_math_MatrixI(result);
panel.getPcaModel$().setPCA$jalview_analysis_PCA(pca);
panel.setInputData$jalview_datamodel_AlignmentView(null);
var seqPoints=Clazz.new_($I$(4,1));
for (var sp, $sp = viewer.getSequencePoint$().iterator$(); $sp.hasNext$()&&((sp=($sp.next$())),1);) {
var seqId=sp.getSequenceRef$();
var seq=this.seqRefIds.get$O(seqId);
if (seq == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Unmatched seqref for PCA: " + seqId]);
}var pt=Clazz.new_([(sp.getXPos$()).valueOf(), (sp.getYPos$()).valueOf(), (sp.getZPos$()).valueOf()],$I$(137,1).c$$F$F$F);
var seqPoint=Clazz.new_($I$(138,1).c$$jalview_datamodel_SequenceI$jalview_datamodel_Point,[seq, pt]);
seqPoints.add$O(seqPoint);
}
panel.getRotatableCanvas$().setPoints$java_util_List$I(seqPoints, seqPoints.size$());
panel.getRotatableCanvas$().setScaleFactor$F((viewer.getScaleFactor$()).valueOf());
var spMin=viewer.getSeqPointMin$();
var min=Clazz.array(Float.TYPE, -1, [(spMin.getXPos$()).valueOf(), (spMin.getYPos$()).valueOf(), (spMin.getZPos$()).valueOf()]);
var spMax=viewer.getSeqPointMax$();
var max=Clazz.array(Float.TYPE, -1, [(spMax.getXPos$()).valueOf(), (spMax.getYPos$()).valueOf(), (spMax.getZPos$()).valueOf()]);
panel.getRotatableCanvas$().setSeqMinMax$FA$FA(min, max);
panel.getPcaModel$().setSequencePoints$java_util_List(seqPoints);
panel.setSelectedDimensionIndex$I$jalview_math_RotatableMatrix_Axis((viewer.getXDim$()).$c(), $I$(45).X);
panel.setSelectedDimensionIndex$I$jalview_math_RotatableMatrix_Axis((viewer.getYDim$()).$c(), $I$(45).Y);
panel.setSelectedDimensionIndex$I$jalview_math_RotatableMatrix_Axis((viewer.getZDim$()).$c(), $I$(45).Z);
panel.setTop$I(seqPoints.size$() - 1);
panel.getPcaModel$().setTop$I(seqPoints.size$() - 1);
for (var i=0; i < 3; i++) {
var axis=viewer.getAxis$().get$I(i);
panel.getRotatableCanvas$().getAxisEndPoints$()[i]=Clazz.new_([(axis.getXPos$()).valueOf(), (axis.getYPos$()).valueOf(), (axis.getZPos$()).valueOf()],$I$(137,1).c$$F$F$F);
}
$I$(9,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[panel, $I$(69,"formatMessage$S$OA",["label.calc_title", Clazz.array(java.lang.Object, -1, ["PCA", modelName])]), 475, 450]);
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(8,"error$S",["Error loading PCA: " + ex.toString()]);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'createStructureViewer$jalview_gui_StructureViewer_ViewerType$java_util_Map_Entry$jalview_gui_AlignFrame$jalview_util_jarInputStreamProvider',  function (viewerType, viewerData, af, jprovider) {
var viewerModel=viewerData.getValue$();
var sessionFilePath=null;
if (viewerType === $I$(111).JMOL ) {
sessionFilePath=p$1.rewriteJmolSession$jalview_datamodel_StructureViewerModel$jalview_util_jarInputStreamProvider.apply(this, [viewerModel, jprovider]);
} else {
var viewerJarEntryName=this.getViewerJarEntryName$S(viewerModel.getViewId$());
sessionFilePath=this.copyJarEntry$jalview_util_jarInputStreamProvider$S$S$S(jprovider, viewerJarEntryName, "viewerSession", ".tmp");
}var sessionPath=sessionFilePath;
var sviewid=viewerData.getKey$();
try {
$I$(82,"invokeAndWait$Runnable",[((P$.Jalview2XML$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Jalview2XML$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var sview=null;
try {
sview=$I$(139).createView$jalview_gui_StructureViewer_ViewerType$jalview_gui_AlignmentPanel$jalview_datamodel_StructureViewerModel$S$S(this.$finals$.viewerType, this.$finals$.af.alignPanel, this.$finals$.viewerModel, this.$finals$.sessionPath, this.$finals$.sviewid);
this.b$['jalview.project.Jalview2XML'].addNewStructureViewer$jalview_api_structures_JalviewStructureDisplayI.apply(this.b$['jalview.project.Jalview2XML'], [sview]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"OutOfMemoryError")){
Clazz.new_(["Restoring structure view for " + this.$finals$.viewerType, ex.getCause$()],$I$(140,1).c$$S$OutOfMemoryError);
if (sview != null  && sview.isVisible$() ) {
sview.closeViewer$Z(false);
sview.setVisible$Z(false);
sview.dispose$();
}} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.Jalview2XML$6.$init$,[this, {af:af,sviewid:sviewid,viewerType:viewerType,sessionPath:sessionPath,viewerModel:viewerModel}]))]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.lang.reflect.InvocationTargetException") || Clazz.exceptionOf(ex,"InterruptedException")){
$I$(8).warn$S$Throwable("Unexpected error when opening " + viewerType + " structure viewer" , ex);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'rewriteJmolSession$jalview_datamodel_StructureViewerModel$jalview_util_jarInputStreamProvider',  function (svattrib, jprovider) {
var state=svattrib.getStateData$();
if (state == null  || state.isEmpty$() ) {
var jarEntryName=this.getViewerJarEntryName$S(svattrib.getViewId$());
state=this.readJarEntry$jalview_util_jarInputStreamProvider$S(jprovider, jarEntryName);
}var rewritten=Clazz.new_([state.length$()],$I$(130,1).c$$I);
var cp=0;
var ncp;
var ecp;
var oldFiles=svattrib.getFileData$();
while ((ncp=state.indexOf$S$I("load ", cp)) > -1){
do {
rewritten.append$S(state.substring$I$I(cp, ncp=(state.indexOf$S$I("\"", ncp + 1) + 1)));
var oldfilenam=state.substring$I$I(ncp, ecp=state.indexOf$S$I("\"", ncp));
var filedat=oldFiles.get$O(Clazz.new_($I$(12,1).c$$S,[oldfilenam]));
if (filedat == null ) {
var reformatedOldFilename=oldfilenam.replaceAll$S$S("/", "\\\\");
filedat=oldFiles.get$O(Clazz.new_($I$(12,1).c$$S,[reformatedOldFilename]));
}rewritten.append$S($I$(1,"escapeBackslashes$S",[filedat.getFilePath$()]));
rewritten.append$S("\"");
cp=ecp + 1;
} while ((ncp=state.indexOf$S$I("/*file*/", cp)) > -1);
}
if (cp > 0) {
rewritten.append$S(state.substring$I(cp));
} else {
System.err.print$S("Ignoring incomplete Jmol state for PDB ids: ");
rewritten=Clazz.new_($I$(130,1).c$$S,[state]);
rewritten.append$S("; load append ");
for (var id, $id = oldFiles.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
var filedat=oldFiles.get$O(id);
rewritten.append$S(" \"").append$S(filedat.getFilePath$()).append$S("\"");
}
rewritten.append$S(";");
}if (rewritten.length$() == 0) {
return null;
}var history="history = ";
var historyIndex=rewritten.indexOf$S("history = ");
if (historyIndex > -1) {
historyIndex+="history = ".length$();
var val=rewritten.substring$I$I(historyIndex, historyIndex + 5);
if (val.startsWith$S("true")) {
rewritten.replace$I$I$S(historyIndex, historyIndex + 4, "1");
} else if (val.startsWith$S("false")) {
rewritten.replace$I$I$S(historyIndex, historyIndex + 5, "0");
}}try {
var tmp=$I$(12).createTempFile$S$S("viewerSession", ".tmp");
try {
var os=Clazz.new_($I$(6,1).c$$java_io_File,[tmp]);
try {
var is=Clazz.new_([rewritten.toString().getBytes$()],$I$(86,1).c$$BA);
this.copyAll$java_io_InputStream$java_io_OutputStream(is, os);
return tmp.getAbsolutePath$();

}finally{/*res*/os&&os.close$&&os.close$();}
}finally{}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(8,"error$S",["Error restoring Jmol session: " + e.toString()]);
} else {
throw e;
}
}
return null;
}, p$1);

Clazz.newMeth(C$, 'marshalColour$S$jalview_api_FeatureColourI',  function (featureType, fcol) {
var col=Clazz.new_($I$(78,1));
if (fcol.isSimpleColour$()) {
col.setRGB$S($I$(80,"getHexString$java_awt_Color",[fcol.getColour$()]));
} else {
col.setRGB$S($I$(80,"getHexString$java_awt_Color",[fcol.getMaxColour$()]));
col.setMin$Float(Float.valueOf$F(fcol.getMin$()));
col.setMax$Float(Float.valueOf$F(fcol.getMax$()));
col.setMinRGB$S($I$(80,"getHexString$java_awt_Color",[fcol.getMinColour$()]));
col.setAutoScale$Boolean(Boolean.valueOf$Z(fcol.isAutoScaled$()));
col.setThreshold$Float(Float.valueOf$F(fcol.getThreshold$()));
col.setColourByLabel$Boolean(Boolean.valueOf$Z(fcol.isColourByLabel$()));
col.setThreshType$jalview_xml_binding_jalview_ThresholdType(fcol.isAboveThreshold$() ? $I$(141).ABOVE : (fcol.isBelowThreshold$() ? $I$(141).BELOW : $I$(141).NONE));
if (fcol.isColourByAttribute$()) {
var attName=fcol.getAttributeName$();
col.getAttributeName$().add$O(attName[0]);
if (attName.length > 1) {
col.getAttributeName$().add$O(attName[1]);
}}var noColour=fcol.getNoColour$();
if (noColour == null ) {
col.setNoValueColour$jalview_xml_binding_jalview_NoValueColour($I$(36).NONE);
} else if (noColour === fcol.getMaxColour$() ) {
col.setNoValueColour$jalview_xml_binding_jalview_NoValueColour($I$(36).MAX);
} else {
col.setNoValueColour$jalview_xml_binding_jalview_NoValueColour($I$(36).MIN);
}}col.setName$S(featureType);
return col;
}, 1);

Clazz.newMeth(C$, 'marshalFilter$jalview_datamodel_features_FeatureMatcherI$java_util_Iterator$Z',  function (firstMatcher, filters, and) {
var result=Clazz.new_($I$(142,1));
if (filters.hasNext$()) {
var compound=Clazz.new_($I$(143,1));
compound.setAnd$Z(and);
var matcher1=C$.marshalFilter$jalview_datamodel_features_FeatureMatcherI$java_util_Iterator$Z(firstMatcher, $I$(144).emptyIterator$(), and);
compound.getMatcherSet$().add$O(matcher1);
var nextMatcher=filters.next$();
var matcher2=C$.marshalFilter$jalview_datamodel_features_FeatureMatcherI$java_util_Iterator$Z(nextMatcher, filters, and);
compound.getMatcherSet$().add$O(matcher2);
result.setCompoundMatcher$jalview_xml_binding_jalview_FeatureMatcherSet_CompoundMatcher(compound);
} else {
var matcherModel=Clazz.new_($I$(145,1));
matcherModel.setCondition$S(firstMatcher.getMatcher$().getCondition$().getStableName$());
matcherModel.setValue$S(firstMatcher.getMatcher$().getPattern$());
if (firstMatcher.isByAttribute$()) {
matcherModel.setBy$jalview_xml_binding_jalview_FilterBy($I$(146).BY_ATTRIBUTE);
var attName=firstMatcher.getAttribute$();
matcherModel.getAttributeName$().add$O(attName[0]);
if (attName.length > 1) {
matcherModel.getAttributeName$().add$O(attName[1]);
}} else if (firstMatcher.isByLabel$()) {
matcherModel.setBy$jalview_xml_binding_jalview_FilterBy($I$(146).BY_LABEL);
} else if (firstMatcher.isByScore$()) {
matcherModel.setBy$jalview_xml_binding_jalview_FilterBy($I$(146).BY_SCORE);
}result.setMatchCondition$jalview_xml_binding_jalview_FeatureMatcher(matcherModel);
}return result;
}, 1);

Clazz.newMeth(C$, 'parseFilter$S$jalview_xml_binding_jalview_FeatureMatcherSet',  function (featureType, matcherSetModel) {
var result=Clazz.new_($I$(147,1));
try {
C$.parseFilterConditions$jalview_datamodel_features_FeatureMatcherSetI$jalview_xml_binding_jalview_FeatureMatcherSet$Z(result, matcherSetModel, true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalStateException")){
System.err.println$S(String.format$S$OA("Error reading filter conditions for \'%s\': %s", Clazz.array(java.lang.Object, -1, [featureType, e.getMessage$()])));
} else {
throw e;
}
}
return result;
}, 1);

Clazz.newMeth(C$, 'parseFilterConditions$jalview_datamodel_features_FeatureMatcherSetI$jalview_xml_binding_jalview_FeatureMatcherSet$Z',  function (matcherSet, matcherSetModel, and) {
var mc=matcherSetModel.getMatchCondition$();
if (mc != null ) {
var filterBy=mc.getBy$();
var cond=$I$(148,"fromString$S",[mc.getCondition$()]);
var pattern=mc.getValue$();
var matchCondition=null;
if (filterBy === $I$(146).BY_LABEL ) {
matchCondition=$I$(149).byLabel$jalview_util_matcher_Condition$S(cond, pattern);
} else if (filterBy === $I$(146).BY_SCORE ) {
matchCondition=$I$(149).byScore$jalview_util_matcher_Condition$S(cond, pattern);
} else if (filterBy === $I$(146).BY_ATTRIBUTE ) {
var attributeName=mc.getAttributeName$();
var attNames=attributeName.toArray$OA(Clazz.array(String, [attributeName.size$()]));
matchCondition=$I$(149).byAttribute$jalview_util_matcher_Condition$S$SA(cond, pattern, attNames);
}if (and) {
matcherSet.and$jalview_datamodel_features_FeatureMatcherI(matchCondition);
} else {
matcherSet.or$jalview_datamodel_features_FeatureMatcherI(matchCondition);
}} else {
var matchers=matcherSetModel.getCompoundMatcher$().getMatcherSet$();
var anded=matcherSetModel.getCompoundMatcher$().isAnd$();
if (matchers.size$() == 2) {
C$.parseFilterConditions$jalview_datamodel_features_FeatureMatcherSetI$jalview_xml_binding_jalview_FeatureMatcherSet$Z(matcherSet, matchers.get$I(0), anded);
C$.parseFilterConditions$jalview_datamodel_features_FeatureMatcherSetI$jalview_xml_binding_jalview_FeatureMatcherSet$Z(matcherSet, matchers.get$I(1), anded);
} else {
System.err.println$S("Malformed compound filter condition");
}}}, 1);

Clazz.newMeth(C$, 'parseColour$jalview_xml_binding_jalview_JalviewUserColours_Colour',  function (colourModel) {
var colour=null;
if (colourModel.getMax$() != null ) {
var mincol=null;
var maxcol=null;
var noValueColour=null;
try {
mincol=Clazz.new_([Integer.parseInt$S$I(colourModel.getMinRGB$(), 16)],$I$(64,1).c$$I);
maxcol=Clazz.new_([Integer.parseInt$S$I(colourModel.getRGB$(), 16)],$I$(64,1).c$$I);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(8).warn$S$Throwable("Couldn\'t parse out graduated feature color.", e);
} else {
throw e;
}
}
var noCol=colourModel.getNoValueColour$();
if (noCol === $I$(36).MIN ) {
noValueColour=mincol;
} else if (noCol === $I$(36).MAX ) {
noValueColour=maxcol;
}colour=Clazz.new_([maxcol, mincol, maxcol, noValueColour, C$.safeFloat$Float(colourModel.getMin$()), C$.safeFloat$Float(colourModel.getMax$())],$I$(121,1).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$F$F);
var attributeName=colourModel.getAttributeName$();
var attributes=attributeName.toArray$OA(Clazz.array(String, [attributeName.size$()]));
if (attributes != null  && attributes.length > 0 ) {
colour.setAttributeName$SA(attributes);
}if (colourModel.isAutoScale$() != null ) {
colour.setAutoScaled$Z(colourModel.isAutoScale$().booleanValue$());
}if (colourModel.isColourByLabel$() != null ) {
colour.setColourByLabel$Z(colourModel.isColourByLabel$().booleanValue$());
}if (colourModel.getThreshold$() != null ) {
colour.setThreshold$F(colourModel.getThreshold$().floatValue$());
}var ttyp=colourModel.getThreshType$();
if (ttyp === $I$(141).ABOVE ) {
colour.setAboveThreshold$Z(true);
} else if (ttyp === $I$(141).BELOW ) {
colour.setBelowThreshold$Z(true);
}} else {
var color=Clazz.new_([Integer.parseInt$S$I(colourModel.getRGB$(), 16)],$I$(64,1).c$$I);
colour=Clazz.new_($I$(121,1).c$$java_awt_Color,[color]);
}return colour;
}, 1);

C$.$static$=function(){C$.$static$=0;
{
$I$(1).addJ2SBinaryType$S(".jvp?");
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Jalview2XML, "SeqFref", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['sref','type']]]

Clazz.newMeth(C$, 'c$$S$S',  function (_sref, type) {
;C$.$init$.apply(this);
this.sref=_sref;
this.type=type;
}, 1);

Clazz.newMeth(C$, 'getSref$',  function () {
return this.sref;
});

Clazz.newMeth(C$, 'getSrefSeq$',  function () {
return this.b$['jalview.project.Jalview2XML'].seqRefIds.get$O(this.sref);
});

Clazz.newMeth(C$, 'isResolvable$',  function () {
return this.b$['jalview.project.Jalview2XML'].seqRefIds.get$O(this.sref) != null ;
});

Clazz.newMeth(C$, 'getSrefDatasetSeq$',  function () {
var sq=this.b$['jalview.project.Jalview2XML'].seqRefIds.get$O(this.sref);
if (sq != null ) {
while (sq.getDatasetSequence$() != null ){
sq=sq.getDatasetSequence$();
}
}return sq;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.type + " reference to " + this.sref ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Jalview2XML, "JvAnnotRow", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['order'],'O',['template','jalview.datamodel.AlignmentAnnotation']]]

Clazz.newMeth(C$, 'c$$I$jalview_datamodel_AlignmentAnnotation',  function (i, jaa) {
;C$.$init$.apply(this);
this.order=i;
this.template=jaa;
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
