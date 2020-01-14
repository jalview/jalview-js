(function(){var P$=Clazz.newPackage("org.jmol.thread");
var C$=Clazz.newClass(P$, "VibrationThread", null, 'org.jmol.thread.JmolThread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.transformManager=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'setManager$O$org_jmol_viewer_Viewer$O', function (manager, vwr, options) {
this.transformManager=manager;
this.setViewer$org_jmol_viewer_Viewer$S(vwr, "VibrationThread");
return 0;
});

Clazz.newMeth(C$, 'run1$I', function (mode) {
var elapsed;
while (true)switch (mode) {
case -1:
this.lastRepaintTime=this.startTime=System.currentTimeMillis$();
this.vwr.startHoverWatcher$Z(false);
this.haveReference=true;
mode=0;
break;
case 0:
elapsed=((System.currentTimeMillis$() - this.lastRepaintTime)|0);
this.sleepTime=33 - elapsed;
if (!this.runSleep$I$I(this.sleepTime, 1)) return;
mode=1;
break;
case 1:
this.lastRepaintTime=System.currentTimeMillis$();
elapsed=((this.lastRepaintTime - this.startTime)|0);
if (this.transformManager.vibrationPeriodMs == 0) {
mode=-2;
} else {
var t=(elapsed % this.transformManager.vibrationPeriodMs) / this.transformManager.vibrationPeriodMs;
this.transformManager.setVibrationT$F(t);
this.vwr.refresh$I$S(3, "VibrationThread");
mode=(this.checkInterrupted$org_jmol_thread_JmolThread(this.transformManager.vibrationThread) ? -2 : 0);
}break;
case -2:
this.vwr.startHoverWatcher$Z(true);
return;
}

});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
