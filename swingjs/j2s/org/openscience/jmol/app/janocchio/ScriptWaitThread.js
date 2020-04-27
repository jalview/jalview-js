(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ScriptWaitThread", null, 'Thread');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.strCommand=null;
this.viewer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$org_openscience_jmol_app_janocchio_NMR_Viewer', function (command, viewer) {
Clazz.super_(C$, this);
this.strCommand=command;
this.viewer=viewer;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.viewer.scriptWait$S(this.strCommand);
} catch (ie) {
if (Clazz.exceptionOf(ie,"Exception")){
} else {
throw ie;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v1');//Created 2019-11-23 16:07:41 Java2ScriptVisitor version 3.2.5-v1 net.sf.j2s.core.jar version 3.2.5-v1
