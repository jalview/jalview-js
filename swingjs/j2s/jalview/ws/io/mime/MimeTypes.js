(function(){var P$=Clazz.newPackage("jalview.ws.io.mime"),I$=[[0,['jalview.io.packed.DataProvider','.JvDataType']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MimeTypes");
C$.typemap=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.typemap=Clazz.array(java.lang.Object, -1, ["application/x-align", $I$(1).ALIGNMENT, "application/x-jalview-annotation", $I$(1).ANNOTATION, "application/x-newick", $I$(1).TREE, "application/x-new-hampshire", $I$(1).TREE, "application/x-new-hampshire-extended", $I$(1).TREE, "application/x-nh", $I$(1).TREE, "application/x-nhx", $I$(1).TREE, "application/x-gff", $I$(1).FEATURES, "application/x-gff3", $I$(1).FEATURES, "application/x-jalview-feature-file", $I$(1).FEATURES, "application/x-pdb", $I$(1).SEQASSOCATED]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getTypeOf$S', function (mimeType) {
var mt=mimeType.toLowerCase$();
for (var i=0; i < C$.typemap.length; i+=2) {
if (C$.typemap[i].equals$O(mt)) {
return C$.typemap[i + 1];
}}
return null;
}, 1);

Clazz.newMeth(C$, 'getMimeTypeOf$jalview_io_packed_DataProvider_JvDataType', function (type) {
for (var i=1; i < C$.typemap.length; i+=2) {
if (C$.typemap[i].equals$O(type)) {
return C$.typemap[i - 1];
}}
return null;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
