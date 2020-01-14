(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.treealign"),I$=[];
var C$=Clazz.newClass(P$, "ExampleDistance2", null, null, 'fr.orsay.lri.varna.models.treealign.TreeAlignLabelDistanceSymmetric');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['f$fr_orsay_lri_varna_models_treealign_RNANodeValue2$fr_orsay_lri_varna_models_treealign_RNANodeValue2','f$','f$TValueType1$TValueType2'], function (v1, v2) {
if (v1 == null ) {
if (v2 == null ) {
return 0;
} else if (!v2.isSingleNode$()) {
return v2.getNodes$().size$();
} else {
return 2;
}} else if (!v1.isSingleNode$()) {
if (v2 == null ) {
return v1.getNodes$().size$();
} else if (!v2.isSingleNode$()) {
return Math.abs(v2.getNodes$().size$() - v1.getNodes$().size$());
} else {
return 2 + v1.getNodes$().size$();
}} else {
if (v2 == null ) {
return 2;
} else if (!v2.isSingleNode$()) {
return 2 + v2.getNodes$().size$();
} else {
return 0;
}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
