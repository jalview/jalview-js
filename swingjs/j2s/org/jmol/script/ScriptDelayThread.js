(function(){var P$=Clazz.newPackage("org.jmol.script");
var C$=Clazz.newClass(P$, "ScriptDelayThread", null, 'org.jmol.thread.JmolThread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.millis=0;
this.seconds=0;
this.doPopPush=false;
this.isPauseDelay=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_api_JmolScriptEvaluator$org_jmol_viewer_Viewer$I', function (eval, vwr, millis) {
Clazz.super_(C$, this,1);
this.setViewer$org_jmol_viewer_Viewer$S(vwr, "ScriptDelayThread");
this.millis=millis;
this.setEval$org_jmol_api_JmolScriptEvaluator(eval);
}, 1);

Clazz.newMeth(C$, 'run1$I', function (mode) {
while (true)switch (mode) {
case -1:
var delayMax;
this.doPopPush=(this.millis > 0);
this.isPauseDelay=(this.millis == -100);
if (!this.doPopPush) this.millis=-this.millis;
 else if ((delayMax=this.vwr.getDelayMaximumMs$()) > 0 && this.millis > delayMax ) this.millis=delayMax;
this.millis-=System.currentTimeMillis$() - this.startTime;
if (this.isJS) {
this.seconds=0;
} else {
this.seconds=(this.millis/1000|0);
this.millis-=this.seconds * 1000;
if (this.millis <= 0) this.millis=1;
}if (this.doPopPush) this.vwr.popHoldRepaint$S("scriptDelayThread INIT");
mode=0;
break;
case 0:
if (this.stopped || this.eval.isStopped$() ) {
mode=-2;
break;
}if (!this.runSleep$I$I(this.seconds-- > 0 ? 1000 : this.millis, -2)) return;
if (this.seconds < 0) this.millis=0;
mode=(this.seconds > 0 || this.millis > 0  ? 0 : -2);
break;
case -2:
if (this.doPopPush) this.vwr.pushHoldRepaintWhy$S("delay FINISH");
if (this.isPauseDelay) this.eval.notifyResumeStatus$();
this.resumeEval$();
return;
}

});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
