(function(){var P$=Clazz.newPackage("jalview.ws.io.mime"),I$=[[0,['jalview.io.packed.DataProvider','.JvDataType'],'java.util.Locale']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MimeTypes");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['typemap','Object[]']]]

Clazz.newMeth(C$, 'getTypeOf$S',  function (mimeType) {
var mt=mimeType.toLowerCase$java_util_Locale($I$(2).ROOT);
for (var i=0; i < C$.typemap.length; i+=2) {
if (C$.typemap[i].equals$O(mt)) {
return C$.typemap[i + 1];
}}
return null;
}, 1);

Clazz.newMeth(C$, 'getMimeTypeOf$jalview_io_packed_DataProvider_JvDataType',  function (type) {
for (var i=1; i < C$.typemap.length; i+=2) {
if (C$.typemap[i].equals$O(type)) {
return C$.typemap[i - 1];
}}
return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.typemap=Clazz.array(java.lang.Object, -1, ["application/x-align", $I$(1).ALIGNMENT, "application/x-jalview-annotation", $I$(1).ANNOTATION, "application/x-newick", $I$(1).TREE, "application/x-new-hampshire", $I$(1).TREE, "application/x-new-hampshire-extended", $I$(1).TREE, "application/x-nh", $I$(1).TREE, "application/x-nhx", $I$(1).TREE, "application/x-gff", $I$(1).FEATURES, "application/x-gff3", $I$(1).FEATURES, "application/x-jalview-feature-file", $I$(1).FEATURES, "application/x-pdb", $I$(1).SEQASSOCATED]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:42 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
