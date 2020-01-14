(function(){var P$=Clazz.newPackage("org.jmol.applet"),I$=[[0,'org.jmol.util.Logger','org.jmol.applet.TickerThread','org.jmol.api.Interface','Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "WrappedAppletLoader", null, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.applet=null;
this.isSigned=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JApplet$Z', function (applet, isSigned) {
Clazz.super_(C$, this,1);
this.applet=applet;
this.isSigned=isSigned;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var startTime=System.currentTimeMillis$();
if ($I$(1).debugging) {
$I$(1).debug$S("WrappedAppletLoader.run(org.jmol.applet.Jmol)");
}var tickerThread=Clazz.new_($I$(2).c$$javax_swing_JApplet,[this.applet]);
tickerThread.start$();
try {
var jmol=(this.applet).wrappedApplet=$I$(3).getOption$S$org_jmol_viewer_Viewer$S("applet.Jmol", null, null);
jmol.setApplet$java_applet_Applet$Z(this.applet, this.isSigned);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(1).errorEx$S$Throwable("Could not instantiate applet", e);
} else {
throw e;
}
}
var loadTimeSeconds=((System.currentTimeMillis$() - startTime + 500)/1000|0);
if ($I$(1).debugging) $I$(1).debug$S("applet load time = " + loadTimeSeconds + " seconds" );
tickerThread.keepRunning=false;
tickerThread.interrupt$();
this.applet.repaint$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
