(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[];
var C$=Clazz.newClass(P$, "ScriptProcess");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.processName=null;
this.context=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$org_jmol_script_ScriptContext', function (name, context) {
C$.$init$.apply(this);
this.processName=name;
this.context=context;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
