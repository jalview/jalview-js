(function(){var P$=Clazz.newPackage("org.jmol.applet"),I$=[[0,'org.jmol.util.Logger','org.jmol.api.Interface','Thread']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TickerThread", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keepRunning=true;
},1);

C$.$fields$=[['Z',['keepRunning'],'O',['applet','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$javax_swing_JApplet', function (applet) {
Clazz.super_(C$, this);
this.applet=applet;
this.setName$S("AppletLoaderTickerThread");
}, 1);

Clazz.newMeth(C$, 'run$', function () {
do {
try {
$I$(3).sleep$J(999);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
break;
} else {
throw ie;
}
}
(this.applet).repaintClock$();
} while (this.keepRunning);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
