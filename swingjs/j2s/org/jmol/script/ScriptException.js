(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[];
var C$=Clazz.newClass(P$, "ScriptException", null, 'Exception');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.eval=null;
this.message=null;
this.untranslated=null;
this.isError=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_script_ScriptError$S$S$Z', function (se, msg, untranslated, isError) {
Clazz.super_(C$, this,1);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-16 07:18:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
