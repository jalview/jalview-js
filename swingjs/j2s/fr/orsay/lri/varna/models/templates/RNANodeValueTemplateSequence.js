(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.templates"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RNANodeValueTemplateSequence", null, 'fr.orsay.lri.varna.models.templates.RNANodeValueTemplate');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sequence','fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence']]]

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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
