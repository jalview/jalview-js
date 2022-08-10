(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'org.jmol.dialog.Dialog','javax.swing.UIManager','javax.swing.JFrame','org.openscience.jmol.app.janocchio.NmrResourceHandler','org.jmol.util.Logger','org.openscience.jmol.app.jmolpanel.Splash','java.awt.Cursor','org.jmol.i18n.GT','org.openscience.jmol.app.janocchio.NmrGuiMap','org.openscience.jmol.app.janocchio.NMR_JmolPanel']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Nmr", null, 'org.openscience.jmol.app.JmolApp');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['splash','org.openscience.jmol.app.jmolpanel.Splash','plugin','org.openscience.jmol.app.janocchio.NmrPlugin','mainFrame','javax.swing.JFrame','nmrPanel','org.openscience.jmol.app.janocchio.NMR_JmolPanel']]
,['S',['path']]]

Clazz.newMeth(C$, 'isPlugin$', function () {
return this.plugin != null ;
});

Clazz.newMeth(C$, 'main$SA', function (args) {
Clazz.new_(C$.c$$SA,[args]);
}, 1);

Clazz.newMeth(C$, 'c$$SA$org_openscience_jmol_app_janocchio_NmrPlugin', function (args, plugin) {
;C$.superclazz.c$$SA.apply(this,[args]);C$.$init$.apply(this);
this.plugin=plugin;
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$SA', function (args) {
;C$.superclazz.c$$SA.apply(this,[args]);C$.$init$.apply(this);
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'init', function () {
try {
if (this.haveDisplay) {
$I$(1).setupUIManager$();
try {
$I$(2,"setLookAndFeel$S",[$I$(2).getCrossPlatformLookAndFeelClassName$()]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
System.err.println$S("Error loading L&F: " + exc);
} else {
throw exc;
}
}
}this.mainFrame=Clazz.new_($I$(3,1));
if (this.jmolPosition != null ) {
this.mainFrame.setLocation$java_awt_Point(this.jmolPosition);
}if (this.haveDisplay && this.splashEnabled ) {
var splash_image=$I$(4).getIconX$S("splash");
if (!this.isSilent) $I$(5,"info$S",["splash_image=" + splash_image]);
this.splash=Clazz.new_($I$(6,1).c$$java_awt_Frame$javax_swing_ImageIcon,[this.mainFrame, splash_image]);
this.splash.setCursor$java_awt_Cursor(Clazz.new_($I$(7,1).c$$I,[3]));
this.splash.showStatus$S($I$(8).$$S("Creating main window..."));
this.splash.showStatus$S($I$(8).$$S("Initializing Swing..."));
}this.info.put$O$O("guimap", Clazz.new_($I$(9,1)));
if (this.splash != null ) this.splash.showStatus$S($I$(8).$$S("Initializing Jmol..."));
this.nmrPanel=Clazz.new_($I$(10,1).c$$org_openscience_jmol_app_JmolApp$org_openscience_jmol_app_jmolpanel_Splash$javax_swing_JFrame$org_openscience_jmol_app_Jmol$I$I$java_util_Map$java_awt_Point,[this, this.splash, this.mainFrame, null, this.startupWidth, this.startupHeight, this.info, null]);
if (this.haveDisplay) this.mainFrame.setVisible$Z(true);
this.startViewer$org_jmol_api_JmolViewer$org_openscience_jmol_app_SplashInterface$Z(this.nmrPanel.vwr, this.splash, false);
if (this.haveConsole) this.nmrPanel.getJavaConsole$();
this.nmrPanel.vwr.script$S("set measureAllmodels ON;font measurements 18; font labels 18;measure \'2:%1.1VALUE %UNITS//hz\'");
} catch (t) {
$I$(5).error$S("uncaught exception: " + t);
t.printStackTrace$();
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
{
C$.path=Clazz.getClass(C$).getName$();
C$.path=C$.path.substring$I$I(0, C$.path.lastIndexOf$S(".") + 1);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
