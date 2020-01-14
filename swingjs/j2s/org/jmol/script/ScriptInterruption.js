(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[];
var C$=Clazz.newClass(P$, "ScriptInterruption", null, 'org.jmol.script.ScriptException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_script_ScriptEval$S$I', function (eval, why, millis) {
C$.superclazz.c$$org_jmol_script_ScriptError$S$S$Z.apply(this, [eval, why, "!", millis == -2147483648 || eval.vwr.autoExit ]);
C$.$init$.apply(this);
if (why.equals$O("delay")) eval.delayScript$I(millis);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-16 07:18:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
