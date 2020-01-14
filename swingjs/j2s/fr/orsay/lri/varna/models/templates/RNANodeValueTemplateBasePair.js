(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.templates"),I$=[];
var C$=Clazz.newClass(P$, "RNANodeValueTemplateBasePair", null, 'fr.orsay.lri.varna.models.templates.RNANodeValueTemplate');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.helix=null;
this.positionInHelix=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toGraphvizNodeName$', function () {
return "H[" + this.positionInHelix + "]" ;
});

Clazz.newMeth(C$, 'getHelix$', function () {
return this.helix;
});

Clazz.newMeth(C$, 'setHelix$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix', function (helix) {
this.helix=helix;
});

Clazz.newMeth(C$, 'getPositionInHelix$', function () {
return this.positionInHelix;
});

Clazz.newMeth(C$, 'setPositionInHelix$I', function (positionInHelix) {
this.positionInHelix=positionInHelix;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
