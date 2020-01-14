(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.templates"),I$=[];
var C$=Clazz.newClass(P$, "RNANodeValueTemplateSequence", null, 'fr.orsay.lri.varna.models.templates.RNANodeValueTemplate');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequence=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toGraphvizNodeName$', function () {
return "S(len=" + this.sequence.getLength$() + ")" ;
});

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateUnpairedSequence', function (sequence) {
this.sequence=sequence;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
