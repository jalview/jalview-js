(function(){var P$=Clazz.newPackage("org.jmol.consolejs"),I$=[];
var C$=Clazz.newClass(P$, "AppletConsole", null, 'org.jmol.console.GenericConsole');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.jsConsole=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'start$org_jmol_viewer_Viewer', function (vwr) {
this.setViewer$org_jmol_viewer_Viewer(vwr);
this.setLabels$();
this.displayConsole$();
});

Clazz.newMeth(C$, 'layoutWindow$S', function (enabledButtons) {
{
this.jsConsole = new Jmol.Console.JSConsole(this);
}
this.setTitle$();
});

Clazz.newMeth(C$, 'setTitle$', function () {
if (this.jsConsole != null ) this.jsConsole.setTitle(org.jmol.console.GenericConsole.getLabel$S("title"));
});

Clazz.newMeth(C$, 'setVisible$Z', function (visible) {
this.jsConsole.setVisible(visible);
});

Clazz.newMeth(C$, 'setButton$S', function (text) {
{
return new Jmol.Console.Button(text);
}
});

Clazz.newMeth(C$, 'dispose$', function () {
this.setVisible$Z(false);
});

Clazz.newMeth(C$, 'isMenuItem$O', function (source) {
return false;
});

Clazz.newMeth(C$, 'getScriptEditor$', function () {
return null;
});

Clazz.newMeth(C$, 'nextFileName$S$I', function (stub, nTab) {
return null;
});

Clazz.newMeth(C$, 'newJMenu$S', function (key) {
return null;
});

Clazz.newMeth(C$, 'newJMenuItem$S', function (key) {
return null;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
