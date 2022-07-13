(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ScriptException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isError'],'S',['message','untranslated'],'O',['eval','org.jmol.script.ScriptEval']]]

Clazz.newMeth(C$, 'c$$org_jmol_script_ScriptError$S$S$Z', function (se, msg, untranslated, isError) {
Clazz.super_(C$, this);
this.eval=se;
this.message=msg;
this.isError=isError;
if (!isError) return;
this.eval.setException$org_jmol_script_ScriptException$S$S(this, msg, untranslated);
}, 1);

Clazz.newMeth(C$, 'getErrorMessageUntranslated$', function () {
return this.untranslated;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return this.message;
});

Clazz.newMeth(C$, 'toString', function () {
return this.message;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:43 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
