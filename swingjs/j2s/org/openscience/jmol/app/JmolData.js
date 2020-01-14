(function(){var P$=Clazz.newPackage("org.openscience.jmol.app"),I$=[[0,'org.openscience.jmol.app.JmolApp','javajs.util.PT','Boolean','org.jmol.util.Escape','org.jmol.viewer.Viewer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JmolData");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.jmolApp=null;
this.vwr=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getJmol$I$I$S', function (width, height, commandOptions) {
var jmolApp=Clazz.new_($I$(1));
jmolApp.startupHeight=height;
jmolApp.startupWidth=width;
jmolApp.haveConsole=false;
jmolApp.isDataOnly=true;
var args=$I$(2).split$S$S(commandOptions, " ");
jmolApp.parseCommandLine$SA(args);
return Clazz.new_(C$.c$$org_openscience_jmol_app_JmolApp,[jmolApp]);
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var jmolApp=Clazz.new_($I$(1));
jmolApp.isDataOnly=true;
jmolApp.haveConsole=false;
jmolApp.info.put$TK$TV("exit", $I$(3).TRUE);
jmolApp.info.put$TK$TV("isDataOnly", $I$(3).TRUE);
jmolApp.parseCommandLine$SA(args);
if (!jmolApp.isSilent) {
System.out.println$S("JmolData using command options " + $I$(4).e$O(args));
System.out.println$O(jmolApp.info);
}Clazz.new_(C$.c$$org_openscience_jmol_app_JmolApp,[jmolApp]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_JmolApp', function (jmolApp) {
C$.$init$.apply(this);
this.jmolApp=jmolApp;
this.vwr=Clazz.new_($I$(5).c$$java_util_Map,[jmolApp.info]);
this.vwr.setScreenDimension$I$I(jmolApp.startupWidth, jmolApp.startupHeight);
this.vwr.setWidthHeightVar$();
jmolApp.startViewer$org_jmol_api_JmolViewer$org_openscience_jmol_app_SplashInterface$Z(this.vwr, null, true);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:57 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
