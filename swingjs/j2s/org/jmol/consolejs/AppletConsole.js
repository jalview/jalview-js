(function(){var P$=Clazz.newPackage("org.jmol.consolejs"),I$=[[0,'org.jmol.console.GenericConsole']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AppletConsole", null, 'org.jmol.console.GenericConsole');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['jsConsole','org.jmol.api.js.JSConsole']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
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
if (this.jsConsole != null ) this.jsConsole.setTitle($I$(1).getLabel$S("title"));
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
