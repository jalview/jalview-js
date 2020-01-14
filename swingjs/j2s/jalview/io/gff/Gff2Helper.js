(function(){var P$=Clazz.newPackage("jalview.io.gff"),I$=[];
var C$=Clazz.newClass(P$, "Gff2Helper", null, 'jalview.io.gff.GffHelperBase');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'parseNameValuePairs$S', function (text) {
return P$.GffHelperBase.parseNameValuePairs$S$S$C$S(text, ";", " ", ",");
}, 1);

Clazz.newMeth(C$, 'getNameValueSeparator$', function () {
return " ";
});

Clazz.newMeth(C$, ['processGff$jalview_datamodel_SequenceI$SA$jalview_datamodel_AlignmentI$java_util_List$Z','processGff$'], function (seq, gff, align, newseqs, relaxedIdMatching) {
var attributes=null;
if (gff.length > 8) {
attributes=C$.parseNameValuePairs$S(gff[8]);
}return this.buildSequenceFeature$SA$java_util_Map(gff, attributes);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
