(function(){var P$=Clazz.newPackage("jalview.io.gff"),I$=[[0,'jalview.io.gff.GffHelperBase']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Gff2Helper", null, 'jalview.io.gff.GffHelperBase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'parseNameValuePairs$S', function (text) {
return $I$(1).parseNameValuePairs$S$S$C$S(text, ";", " ", ",");
}, 1);

Clazz.newMeth(C$, 'processGff$jalview_datamodel_SequenceI$SA$jalview_datamodel_AlignmentI$java_util_List$Z', function (seq, gff, align, newseqs, relaxedIdMatching) {
var attributes=null;
if (gff.length > 8) {
attributes=C$.parseNameValuePairs$S(gff[8]);
}return this.buildSequenceFeature$SA$java_util_Map(gff, attributes);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
