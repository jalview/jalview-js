(function(){var P$=Clazz.newPackage("org.jmol.thread"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AnimationThread", null, 'org.jmol.thread.JmolThread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isFirst'],'I',['framePointer1','framePointer2','intThread'],'O',['am','org.jmol.viewer.AnimationManager']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setManager$O$org_jmol_viewer_Viewer$O', function (manager, vwr, params) {
var options=params;
this.framePointer1=options[0];
this.framePointer2=options[1];
this.intThread=options[2];
this.am=manager;
this.setViewer$org_jmol_viewer_Viewer$S(vwr, "AnimationThread");
vwr.startHoverWatcher$Z(false);
return 0;
});

Clazz.newMeth(C$, 'interrupt$', function () {
if (this.stopped) return;
this.stopped=true;
if ($I$(1).debugging) $I$(1).debug$S("animation thread interrupted!");
try {
this.am.setAnimationOn$Z(false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
C$.superclazz.prototype.interrupt$.apply(this, []);
});

Clazz.newMeth(C$, 'run1$I', function (mode) {
while (true){
switch (mode) {
case -1:
if ($I$(1).debugging) $I$(1).debug$S("animation thread " + this.intThread + " running" );
this.vwr.requestRepaintAndWait$S("animationThread");
this.vwr.startHoverWatcher$Z(false);
this.haveReference=true;
this.isFirst=true;
mode=0;
break;
case 0:
if (!this.am.animationOn || this.checkInterrupted$org_jmol_thread_JmolThread(this.am.animationThread) ) {
mode=-2;
break;
}if (this.am.currentFrameIs$I(this.framePointer1)) {
this.targetTime+=this.am.firstFrameDelayMs;
this.sleepTime=((this.targetTime - (System.currentTimeMillis$() - this.startTime))|0);
if (!this.runSleep$I$I(this.sleepTime, 1)) return;
}mode=1;
break;
case 1:
if (this.am.currentFrameIs$I(this.framePointer2)) {
this.targetTime+=this.am.lastFrameDelayMs;
this.sleepTime=((this.targetTime - (System.currentTimeMillis$() - this.startTime))|0);
if (!this.runSleep$I$I(this.sleepTime, 2)) return;
}mode=2;
break;
case 2:
if (!this.isFirst && this.am.currentIsLast$() && !this.am.setAnimationNext$()  ) {
mode=-2;
break;
}this.isFirst=false;
this.targetTime+=(((1000.0 / this.am.animationFps) + this.vwr.ms.getFrameDelayMs$I(this.am.cmi))|0);
mode=3;
break;
case 3:
while (this.am.animationOn && !this.checkInterrupted$org_jmol_thread_JmolThread(this.am.animationThread) && !this.vwr.getRefreshing$()  ){
if (!this.runSleep$I$I(10, 3)) return;
}
if (!this.vwr.tm.spinOn) this.vwr.refresh$I$S(1, "animationThread");
this.sleepTime=((this.targetTime - (System.currentTimeMillis$() - this.startTime))|0);
if (!this.runSleep$I$I(this.sleepTime, 0)) return;
mode=0;
break;
case -2:
if ($I$(1).debugging) $I$(1).debug$S("animation thread " + this.intThread + " exiting" );
this.am.stopThread$Z(false);
return;
}
}
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
