(function(){var P$=Clazz.newPackage("org.openscience.jmol.app"),I$=[[0,'org.openscience.jmol.app.JmolApp','org.jmol.dialog.Dialog','org.openscience.jmol.app.jmolpanel.JmolPanel','org.openscience.jmol.app.jsonkiosk.KioskFrame','javax.swing.JFrame','org.jmol.util.Logger','java.util.Hashtable','org.openscience.jmol.app.jmolpanel.JmolResourceHandler','org.openscience.jmol.app.jmolpanel.Splash','java.awt.Cursor','org.jmol.i18n.GT','javax.swing.UIManager']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Jmol", null, 'org.openscience.jmol.app.jmolpanel.JmolPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['isSwingJS']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_JmolApp$org_openscience_jmol_app_jmolpanel_Splash$javax_swing_JFrame$org_openscience_jmol_app_Jmol$I$I$java_util_Map$java_awt_Point', function (jmolApp, splash, frame, parent, startupWidth, startupHeight, vwrOptions, loc) {
;C$.superclazz.c$$org_openscience_jmol_app_JmolApp$org_openscience_jmol_app_jmolpanel_Splash$javax_swing_JFrame$org_openscience_jmol_app_jmolpanel_JmolPanel$I$I$java_util_Map$java_awt_Point.apply(this,[jmolApp, splash, frame, parent, startupWidth, startupHeight, vwrOptions, loc]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
C$.startJmol$org_openscience_jmol_app_JmolApp(Clazz.new_($I$(1,1).c$$SA,[args]));
}, 1);

Clazz.newMeth(C$, 'startJmol$org_openscience_jmol_app_JmolApp', function (jmolApp) {
$I$(2).setupUIManager$();
var jmolFrame;
if (jmolApp.isKiosk) {
if (jmolApp.startupWidth < 100 || jmolApp.startupHeight < 100 ) {
jmolApp.startupWidth=$I$(3).screenSize.width;
jmolApp.startupHeight=$I$(3).screenSize.height - 75;
}jmolFrame=$I$(3).kioskFrame=Clazz.new_($I$(4,1).c$$I$I$I$I$javax_swing_JPanel,[0, 75, jmolApp.startupWidth, jmolApp.startupHeight, null]);
} else {
jmolFrame=Clazz.new_($I$(5,1));
}var jmol=null;
try {
if (jmolApp.jmolPosition != null ) {
jmolFrame.setLocation$java_awt_Point(jmolApp.jmolPosition);
}jmol=C$.getJmol$org_openscience_jmol_app_JmolApp$javax_swing_JFrame(jmolApp, jmolFrame);
jmolApp.startViewer$org_jmol_api_JmolViewer$org_openscience_jmol_app_SplashInterface$Z(jmol.vwr, jmol.splash, false);
} catch (t) {
$I$(6).error$S("uncaught exception: " + t);
t.printStackTrace$();
}
if (jmolApp.haveConsole && $I$(3).allowJavaConsole ) jmol.getJavaConsole$();
if (jmolApp.isKiosk) {
$I$(3).kioskFrame.setPanel$javax_swing_JPanel(jmol);
$I$(3).bannerFrame.setLabel$S("click below and type exitJmol[enter] to quit");
jmol.vwr.script$S("set allowKeyStrokes;set zoomLarge false;");
}if (jmolApp.port > 0) {
try {
jmol.clientService=$I$(3).getJsonNioServer$();
jmol.clientService.startService$I$org_openscience_jmol_app_jsonkiosk_JsonNioClient$org_jmol_viewer_Viewer$S$I(jmolApp.port, jmol, jmol.vwr, "-1", 1);
} catch (e) {
e.printStackTrace$();
if ($I$(3).bannerFrame != null ) {
$I$(3).bannerFrame.setLabel$S("could not start NIO service on port " + jmolApp.port);
}if (jmol.clientService != null ) jmol.clientService.close$();
}
}}, 1);

Clazz.newMeth(C$, 'getJmol$javax_swing_JFrame$I$I$java_util_Map', function (baseframe, width, height, vwrOptions) {
var jmolApp=Clazz.new_([Clazz.array(String, -1, [])],$I$(1,1).c$$SA);
jmolApp.startupHeight=height;
jmolApp.startupWidth=width;
jmolApp.info=(vwrOptions == null  ? Clazz.new_($I$(7,1)) : vwrOptions);
return C$.getJmol$org_openscience_jmol_app_JmolApp$javax_swing_JFrame(jmolApp, baseframe);
}, 1);

Clazz.newMeth(C$, 'getJmol$org_openscience_jmol_app_JmolApp$javax_swing_JFrame', function (jmolApp, frame) {
var splash=null;
if (jmolApp.haveDisplay && jmolApp.splashEnabled ) {
var splash_image=$I$(8).getIconX$S("splash");
if (!jmolApp.isSilent) $I$(6,"info$S",["splash_image=" + splash_image]);
splash=Clazz.new_($I$(9,1).c$$java_awt_Frame$javax_swing_ImageIcon,[frame, splash_image]);
splash.setCursor$java_awt_Cursor(Clazz.new_($I$(10,1).c$$I,[3]));
splash.showStatus$S($I$(11).$$S("Creating main window..."));
splash.showStatus$S($I$(11).$$S("Initializing Swing..."));
}if (jmolApp.haveDisplay) try {
$I$(12,"setLookAndFeel$S",[$I$(12).getCrossPlatformLookAndFeelClassName$()]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
System.err.println$S("Error loading L&F: " + exc);
} else {
throw exc;
}
}
if (splash != null ) splash.showStatus$S($I$(11).$$S("Initializing Jmol..."));
var window=Clazz.new_(C$.c$$org_openscience_jmol_app_JmolApp$org_openscience_jmol_app_jmolpanel_Splash$javax_swing_JFrame$org_openscience_jmol_app_Jmol$I$I$java_util_Map$java_awt_Point,[jmolApp, splash, frame, null, jmolApp.startupWidth, jmolApp.startupHeight, jmolApp.info, null]);
if (jmolApp.haveDisplay) frame.setVisible$Z(true);
return window;
}, 1);

C$.$static$=function(){C$.$static$=0;
{

self.Jmol || (Jmol = self.J2S);
Jmol._isSwingJS = true; Jmol._isAWTjs = true;
};
C$.isSwingJS=true||false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
