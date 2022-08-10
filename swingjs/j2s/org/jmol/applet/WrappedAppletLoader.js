(function(){var P$=Clazz.newPackage("org.jmol.applet"),I$=[[0,'org.jmol.util.Logger','org.jmol.api.Interface','Thread']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WrappedAppletLoader", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isSigned'],'O',['applet','javax.swing.JApplet']]]

Clazz.newMeth(C$, 'c$$javax_swing_JApplet$Z', function (applet, isSigned) {
Clazz.super_(C$, this);
this.applet=applet;
this.isSigned=isSigned;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var startTime=System.currentTimeMillis$();
var tickerThread;
if ($I$(1).debugging) {
$I$(1,"debug$S",["WrappedAppletLoader.run(org.jmol.applet.Jmol)"]);
}
{}
try {
var jmol=(this.applet).wrappedApplet=$I$(2).getOption$S$org_jmol_viewer_Viewer$S("applet.Jmol", null, null);
jmol.setApplet$java_applet_Applet$Z(this.applet, this.isSigned);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(1).errorEx$S$Throwable("Could not instantiate applet", e);
} else {
throw e;
}
}
var loadTimeSeconds=((System.currentTimeMillis$() - startTime + 500)/1000|0);
if ($I$(1).debugging) $I$(1,"debug$S",["applet load time = " + loadTimeSeconds + " seconds" ]);

{}
this.applet.repaint$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
