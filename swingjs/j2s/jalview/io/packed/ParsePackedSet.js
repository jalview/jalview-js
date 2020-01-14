(function(){var P$=Clazz.newPackage("jalview.io.packed"),I$=[[0,'java.util.ArrayList','jalview.io.packed.JalviewDataset',['jalview.io.packed.DataProvider','.JvDataType'],'jalview.io.IdentifyFile','jalview.io.FormatAdapter','java.io.BufferedReader','jalview.io.AnnotationFile','java.util.HashMap','jalview.io.FeaturesFile','jalview.io.NewickFile']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ParsePackedSet");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getAlignment$jalview_io_packed_JalviewDataset$Iterable', function (context, files) {
var rslt=Clazz.new_($I$(1));
if (context == null ) {
context=Clazz.new_($I$(2));
}var deuniquify=false;
for (var dta, $dta = files.iterator$(); $dta.hasNext$()&&((dta=($dta.next$())),1);) {
var exerror=null;
var errmsg=null;
var src=dta.getDataSource$();
if (dta.getType$().equals$O($I$(3).ALIGNMENT)) {
var fmt=null;
try {
fmt=Clazz.new_($I$(4)).identify$jalview_io_FileParse$Z(src, false);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
exerror=ex;
errmsg="Couldn\'t identify alignment format.";
} else {
throw ex;
}
}
if (fmt != null ) {
var al=null;
try {
al=Clazz.new_($I$(5)).readFromFile$jalview_io_FileParse$jalview_io_FileFormatI(src, fmt);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
errmsg="Failed to parse alignment from result set";
exerror=e;
} else {
throw e;
}
}
if (al != null ) {
context.addAlignment$jalview_datamodel_AlignmentI(al);
context.updateSetModified$Z(true);
rslt.add$TE(al);
deuniquify=true;
}}}if (dta.getType$().equals$O($I$(3).ANNOTATION)) {
if (!context.hasAlignments$()) {
errmsg="No alignment or sequence dataset to associate annotation with.";
}try {
var br;
if (Clazz.instanceOf(src.getReader$(), "java.io.BufferedReader")) {
br=src.getReader$();
} else {
br=Clazz.new_($I$(6).c$$java_io_Reader,[src.getReader$()]);
}if (Clazz.new_($I$(7)).parseAnnotationFrom$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$java_io_BufferedReader(context.getLastAlignment$(), null, br)) {
context.updateSetModified$Z(true);
} else {
errmsg="Annotation file contained no data.";
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
errmsg=((errmsg == null ) ? "" : errmsg) + "Failed to parse the annotation file associated with the alignment.";
exerror=e;
} else {
throw e;
}
}
}if (dta.getType$().equals$O($I$(3).SEQASSOCATED)) {
if (!context.hasSequenceAssoc$()) {
errmsg="No sequence to associate data with.";
}errmsg="parsing of sequence associated data is not implemented";
exerror=Clazz.new_(Clazz.load('Exception').c$$S,[errmsg]);
}if (dta.getType$().equals$O($I$(3).FEATURES)) {
if (context.featureColours == null ) {
context.featureColours=Clazz.new_($I$(8));
}try {
var ff=Clazz.new_($I$(9).c$$jalview_io_FileParse,[src]);
context.updateSetModified$Z(ff.parse$jalview_datamodel_AlignmentI$java_util_Map$Z$Z(context.getLastAlignment$(), context.featureColours, false, context.relaxedIdMatching));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
errmsg=("Failed to parse the Features file associated with the alignment.");
exerror=e;
} else {
throw e;
}
}
}if (dta.getType$().equals$O($I$(3).TREE)) {
try {
var nf=Clazz.new_($I$(10).c$$jalview_io_FileParse,[src]);
if (!nf.isValid$()) {
nf.close$();
nf=null;
} else {
context.addTreeFromFile$jalview_io_NewickFile(nf);
rslt.add$TE(nf);
context.updateSetModified$Z(true);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
errmsg=("Failed to parse the treeFile associated with the result.");
exerror=e;
} else {
throw e;
}
}
}if (exerror != null ) {
if (errmsg != null  && errmsg.length$() > 0 ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S$Throwable,[errmsg, exerror]);
} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S$Throwable,[errmsg, exerror]);
}} else {
if (errmsg != null  && errmsg.length$() > 0 ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[errmsg]);
}}}
if (deuniquify) {
context.getLastAlignmentSet$().deuniquifyAlignment$();
}return rslt.toArray$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
