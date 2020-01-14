(function(){var P$=Clazz.newPackage("org.jmol.thread"),p$1={},I$=[[0,'org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SpinThread", null, 'org.jmol.thread.JmolThread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.transformManager=null;
this.endDegrees=0;
this.endPositions=null;
this.dihedralList=null;
this.nDegrees=0;
this.bsAtoms=null;
this.isNav=false;
this.isGesture=false;
this.myFps=0;
this.angle=0;
this.haveNotified=false;
this.index=0;
this.bsBranches=null;
this.isDone=false;
this.m4=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isDone=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'setManager$O$org_jmol_viewer_Viewer$O', function (manager, vwr, params) {
this.transformManager=manager;
this.setViewer$org_jmol_viewer_Viewer$S(vwr, "SpinThread");
var options=params;
if (options == null ) {
this.isNav=true;
} else {
this.endDegrees=(options[0]).floatValue$();
this.endPositions=options[1];
this.dihedralList=options[2];
if (this.dihedralList != null ) this.bsBranches=vwr.ms.getBsBranches$FA(this.dihedralList);
this.bsAtoms=options[3];
this.isGesture=(options[4] != null );
}return 0;
});

Clazz.newMeth(C$, 'run1$I', function (mode) {
while (true)switch (mode) {
case -1:
this.myFps=(this.isNav ? this.transformManager.navFps : this.transformManager.spinFps);
this.vwr.g.setB$S$Z(this.isNav ? "_navigating" : "_spinning", true);
this.haveReference=true;
this.vwr.startHoverWatcher$Z(false);
mode=0;
break;
case 0:
if (this.isReset || this.checkInterrupted$org_jmol_thread_JmolThread(this.transformManager.spinThread) ) {
mode=-2;
break;
}if (this.isNav && this.myFps != this.transformManager.navFps  ) {
this.myFps=this.transformManager.navFps;
this.index=0;
this.startTime=System.currentTimeMillis$();
} else if (!this.isNav && this.myFps != this.transformManager.spinFps   && this.bsAtoms == null  ) {
this.myFps=this.transformManager.spinFps;
this.index=0;
this.startTime=System.currentTimeMillis$();
}if (this.myFps == 0  || !(this.isNav ? this.transformManager.navOn : this.transformManager.spinOn) ) {
mode=-2;
break;
}var refreshNeeded=(this.endDegrees >= 1.0E10  ? true : this.isNav ? this.transformManager.navX != 0  || this.transformManager.navY != 0   || this.transformManager.navZ != 0   : this.transformManager.isSpinInternal && this.transformManager.internalRotationAxis.angle != 0   || this.transformManager.isSpinFixed && this.transformManager.fixedRotationAxis.angle != 0    || !this.transformManager.isSpinFixed && !this.transformManager.isSpinInternal && (this.transformManager.spinX != 0  || this.transformManager.spinY != 0   || this.transformManager.spinZ != 0  )   );
this.targetTime=((++this.index * 1000 / this.myFps)|0);
this.currentTime=System.currentTimeMillis$() - this.startTime;
this.sleepTime=((this.targetTime - this.currentTime)|0);
if (this.sleepTime < 0) {
if (!this.haveNotified) $I$(1).info$S("spinFPS is set too fast (" + new Float(this.myFps).toString() + ") -- can't keep up!" );
this.haveNotified=true;
this.startTime-=this.sleepTime;
this.sleepTime=0;
}var isInMotion=(this.bsAtoms == null  && this.vwr.getInMotion$Z(false) );
if (isInMotion) {
if (this.isGesture) {
mode=-2;
break;
}this.sleepTime+=1000;
}if (refreshNeeded && !isInMotion && (this.transformManager.spinOn || this.transformManager.navOn )  ) p$1.doTransform.apply(this, []);
mode=1;
break;
case 1:
while (!this.checkInterrupted$org_jmol_thread_JmolThread(this.transformManager.spinThread) && !this.vwr.getRefreshing$() )if (!this.runSleep$I$I(10, 1)) return;

if (this.bsAtoms != null  || this.vwr.g.waitForMoveTo && this.endDegrees != 3.4028235E38   ) this.vwr.requestRepaintAndWait$S("spin thread");
 else this.vwr.refresh$I$S(1, "SpinThread");
if (this.endDegrees >= 1.0E10  ? this.nDegrees / this.endDegrees > 0.99  : !this.isNav && this.endDegrees >= 0   ? this.nDegrees >= this.endDegrees - 0.001  : -this.nDegrees <= this.endDegrees + 0.001 ) {
this.isDone=true;
this.transformManager.setSpinOff$();
}if (!this.runSleep$I$I(this.sleepTime, 0)) return;
mode=0;
break;
case -2:
if (this.dihedralList != null ) {
this.vwr.setDihedrals$FA$javajs_util_BSA$F(this.dihedralList, this.bsBranches, 0.0);
} else if (this.bsAtoms != null  && this.endPositions != null  ) {
this.vwr.setAtomCoords$javajs_util_BS$I$O(this.bsAtoms, 1145047050, this.endPositions);
this.bsAtoms=null;
this.endPositions=null;
}if (!this.isReset) {
this.transformManager.setSpinOff$();
this.vwr.startHoverWatcher$Z(true);
}this.stopped=!this.isDone;
this.resumeEval$();
this.stopped=true;
return;
}

});

Clazz.newMeth(C$, 'doTransform', function () {
if (this.dihedralList != null ) {
var f=1.0 / this.myFps / this.endDegrees ;
this.vwr.setDihedrals$FA$javajs_util_BSA$F(this.dihedralList, this.bsBranches, f);
this.nDegrees += 1.0 / this.myFps;
} else if (this.isNav) {
this.transformManager.setNavigationOffsetRelative$();
} else if (this.transformManager.isSpinInternal || this.transformManager.isSpinFixed ) {
this.angle=(this.transformManager.isSpinInternal ? this.transformManager.internalRotationAxis : this.transformManager.fixedRotationAxis).angle / this.myFps;
if (this.transformManager.isSpinInternal) {
this.transformManager.rotateAxisAngleRadiansInternal$F$javajs_util_BS$javajs_util_M4(this.angle, this.bsAtoms, this.m4);
} else {
this.transformManager.rotateAxisAngleRadiansFixed$F$javajs_util_BS(this.angle, this.bsAtoms);
}this.nDegrees += Math.abs(this.angle * 57.29577951308232);
} else {
if (this.transformManager.spinX != 0 ) {
this.transformManager.rotateXRadians$F$javajs_util_BS(this.transformManager.spinX * 0.017453292 / this.myFps, null);
}if (this.transformManager.spinY != 0 ) {
this.transformManager.rotateYRadians$F$javajs_util_BS(this.transformManager.spinY * 0.017453292 / this.myFps, null);
}if (this.transformManager.spinZ != 0 ) {
this.transformManager.rotateZRadians$F(this.transformManager.spinZ * 0.017453292 / this.myFps);
}}}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
