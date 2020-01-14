(function(){var P$=Clazz.newPackage("org.jmol.applet"),I$=[[0,'org.jmol.util.Logger','org.jmol.applet.TickerThread','org.jmol.api.Interface','Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TickerThread", null, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.applet=null;
this.keepRunning=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.keepRunning=true;
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JApplet', function (applet) {
Clazz.super_(C$, this,1);
this.applet=applet;
this.setName$S("AppletLoaderTickerThread");
}, 1);

Clazz.newMeth(C$, 'run$', function () {
do {
try {
$I$(4).sleep$J(999);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
