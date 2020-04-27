(function(){var P$=Clazz.newPackage("org.jmol.script");
/*c*/var C$=Clazz.newClass(P$, "ScriptDelayThread", null, 'org.jmol.thread.JmolThread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['doPopPush','isPauseDelay'],'I',['millis','seconds']]]

Clazz.newMeth(C$, 'c$$org_jmol_api_JmolScriptEvaluator$org_jmol_viewer_Viewer$I', function (eval, vwr, millis) {
Clazz.super_(C$, this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:17 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
