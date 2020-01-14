(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.templates"),I$=[[0,['fr.orsay.lri.varna.models.treealign.RNANodeValue','.Origin']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RNANodeValue2TemplateDistance", null, null, 'fr.orsay.lri.varna.models.treealign.TreeAlignLabelDistanceAsymmetric');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'delete$fr_orsay_lri_varna_models_treealign_RNANodeValue2', function (v) {
if (v == null ) {
return 0;
} else {
if (v.isSingleNode$()) {
if (v.getNode$().getRightBasePosition$() < 0) {
return 1;
} else {
return 2;
}} else {
return v.getNodes$().size$();
}}});

Clazz.newMeth(C$, 'insert$fr_orsay_lri_varna_models_templates_RNANodeValueTemplate', function (v) {
if (v == null ) {
return 0;
} else {
if (Clazz.instanceOf(v, "fr.orsay.lri.varna.models.templates.RNANodeValueTemplateSequence")) {
return (v).getSequence$().getLength$();
} else if (Clazz.instanceOf(v, "fr.orsay.lri.varna.models.templates.RNANodeValueTemplateBrokenBasePair")) {
return 1;
} else {
return 2;
}}});

Clazz.newMeth(C$, ['f$fr_orsay_lri_varna_models_treealign_RNANodeValue2$fr_orsay_lri_varna_models_templates_RNANodeValueTemplate','f$','f$TValueType1$TValueType2'], function (v1, v2) {
if (v1 == null ) {
return this.insert$fr_orsay_lri_varna_models_templates_RNANodeValueTemplate(v2);
} else if (v2 == null ) {
return this.delete$fr_orsay_lri_varna_models_treealign_RNANodeValue2(v1);
} else if (!v1.isSingleNode$()) {
if (Clazz.instanceOf(v2, "fr.orsay.lri.varna.models.templates.RNANodeValueTemplateSequence")) {
return Math.abs(v1.getNodes$().size$() - (v2).getSequence$().getLength$());
} else {
return Infinity;
}} else if (v1.getNode$().getRightBasePosition$() >= 0) {
if (Clazz.instanceOf(v2, "fr.orsay.lri.varna.models.templates.RNANodeValueTemplateBasePair")) {
return 0;
} else {
return Infinity;
}} else {
if (Clazz.instanceOf(v2, "fr.orsay.lri.varna.models.templates.RNANodeValueTemplateBrokenBasePair")) {
var brokenBasePair=(v2);
var strand5onTemplateSide=brokenBasePair.getPositionInHelix$() < brokenBasePair.getHelix$().getLength$();
var strand3onTemplateSide=!strand5onTemplateSide;
var strand5onRNASide=(v1.getNode$().getOrigin$() === $I$(1).BASE_FROM_HELIX_STRAND5 );
var strand3onRNASide=(v1.getNode$().getOrigin$() === $I$(1).BASE_FROM_HELIX_STRAND3 );
if ((strand5onTemplateSide && strand5onRNASide ) || (strand3onTemplateSide && strand3onRNASide ) ) {
return 0.0;
} else {
return Infinity;
}} else {
return Infinity;
}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
