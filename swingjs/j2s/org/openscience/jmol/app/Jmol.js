(function(){var P$=Clazz.newPackage("org.openscience.jmol.app"),I$=[[0,'org.openscience.jmol.app.JmolApp','java.util.Hashtable']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Jmol", null, 'org.openscience.jmol.app.jmolpanel.JmolPanel');
C$.isSwingJS=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
{

self.Jmol || (Jmol = self.J2S);
Jmol._isSwingJS = true; Jmol._isAWTjs = true;
};
C$.isSwingJS=true||false;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_JmolApp$org_openscience_jmol_app_jmolpanel_Splash$javax_swing_JFrame$org_openscience_jmol_app_Jmol$I$I$java_util_Map$java_awt_Point', function (jmolApp, splash, frame, parent, startupWidth, startupHeight, vwrOptions, loc) {
C$.superclazz.c$$org_openscience_jmol_app_JmolApp$org_openscience_jmol_app_jmolpanel_Splash$javax_swing_JFrame$org_openscience_jmol_app_jmolpanel_JmolPanel$I$I$java_util_Map$java_awt_Point.apply(this, [jmolApp, splash, frame, parent, startupWidth, startupHeight, vwrOptions, loc]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var jmolApp=Clazz.new_($I$(1).c$$SA,[args]);
P$.jmolpanel.JmolPanel.startJmol$org_openscience_jmol_app_JmolApp(jmolApp);
}, 1);

Clazz.newMeth(C$, 'getJmol$javax_swing_JFrame$I$I$java_util_Map', function (baseframe, width, height, vwrOptions) {
var jmolApp=Clazz.new_($I$(1).c$$SA,[Clazz.array(String, -1, [])]);
jmolApp.startupHeight=height;
jmolApp.startupWidth=width;
jmolApp.info=(vwrOptions == null  ? Clazz.new_($I$(2)) : vwrOptions);
return P$.jmolpanel.JmolPanel.getJmol$org_openscience_jmol_app_JmolApp$javax_swing_JFrame(jmolApp, baseframe);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
