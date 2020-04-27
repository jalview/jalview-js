(function(){var P$=Clazz.newPackage("org.openscience.jmol.app"),I$=[[0,'org.openscience.jmol.app.JmolApp','javajs.util.PT','Boolean','org.jmol.util.Escape','org.jmol.viewer.Viewer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JmolData");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['jmolApp','org.openscience.jmol.app.JmolApp','vwr','org.jmol.viewer.Viewer']]]

Clazz.newMeth(C$, 'getJmol$I$I$S', function (width, height, commandOptions) {
var jmolApp=Clazz.new_($I$(1,1));
jmolApp.startupHeight=height;
jmolApp.startupWidth=width;
jmolApp.haveConsole=false;
jmolApp.isDataOnly=true;
var args=$I$(2).split$S$S(commandOptions, " ");
jmolApp.parseCommandLine$SA(args);
return Clazz.new_(C$.c$$org_openscience_jmol_app_JmolApp,[jmolApp]);
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var jmolApp=Clazz.new_($I$(1,1));
jmolApp.isDataOnly=true;
jmolApp.haveConsole=false;
jmolApp.info.put$O$O("exit", $I$(3).TRUE);
jmolApp.info.put$O$O("isDataOnly", $I$(3).TRUE);
jmolApp.parseCommandLine$SA(args);
if (!jmolApp.isSilent) {
System.out.println$S("JmolData using command options " + $I$(4).e$O(args));
System.out.println$O(jmolApp.info);
}Clazz.new_(C$.c$$org_openscience_jmol_app_JmolApp,[jmolApp]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_JmolApp', function (jmolApp) {
;C$.$init$.apply(this);
this.jmolApp=jmolApp;
this.vwr=Clazz.new_($I$(5,1).c$$java_util_Map,[jmolApp.info]);
this.vwr.setScreenDimension$I$I(jmolApp.startupWidth, jmolApp.startupHeight);
this.vwr.setWidthHeightVar$();
jmolApp.startViewer$org_jmol_api_JmolViewer$org_openscience_jmol_app_SplashInterface$Z(this.vwr, null, true);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:28 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
