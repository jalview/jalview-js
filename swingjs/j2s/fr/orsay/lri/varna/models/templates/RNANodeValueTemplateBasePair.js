(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.templates"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RNANodeValueTemplateBasePair", null, 'fr.orsay.lri.varna.models.templates.RNANodeValueTemplate');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['positionInHelix'],'O',['helix','fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix']]]

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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
