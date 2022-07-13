(function(){var P$=Clazz.newPackage("org.jmol.thread"),p$1={},I$=[[0,'javajs.util.V3','javajs.util.A4','javajs.util.M3',['org.jmol.thread.MoveToThread','.Slider'],'javajs.util.P3']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MoveToThread", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.thread.JmolThread');
C$.$classes$=[['Slider',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isMove','doEndMove'],'F',['fStep','floatSecondsTotal','radiansXStep','radiansYStep','radiansZStep','dZoom','dSlab','zoomPercent0','transX','transY'],'I',['fps','totalSteps','iStep','timePerStep','slab'],'J',['frameTimeMillis'],'O',['aaStepCenter','javajs.util.V3','+aaStepNavCenter','aaStep','javajs.util.A4','+aaTotal','matrixStart','javajs.util.M3','+matrixStartInv','+matrixStep','+matrixEnd','center','javajs.util.P3','+navCenter','+ptMoveToCenter','zoom','org.jmol.thread.MoveToThread.Slider','+xTrans','+yTrans','+xNav','+yNav','+navDepth','+cameraDepth','+cameraX','+cameraY','+rotationRadius','+pixelScale','transformManager','org.jmol.viewer.TransformManager','dRot','javajs.util.V3','+dTrans']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.aaStepCenter=Clazz.new_($I$(1,1));
this.aaStepNavCenter=Clazz.new_($I$(1,1));
this.aaStep=Clazz.new_($I$(2,1));
this.aaTotal=Clazz.new_($I$(2,1));
this.matrixStart=Clazz.new_($I$(3,1));
this.matrixStartInv=Clazz.new_($I$(3,1));
this.matrixStep=Clazz.new_($I$(3,1));
this.matrixEnd=Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'setManager$O$org_jmol_viewer_Viewer$O', function (manager, vwr, params) {
var options=params;
this.isMove=(Clazz.instanceOf(options[0], "javajs.util.V3"));
this.setViewer$org_jmol_viewer_Viewer$S(vwr, (this.isMove ? "moveThread" : "MoveToThread"));
this.transformManager=manager;
return (this.isMove ? p$1.setManagerMove$OA.apply(this, [options]) : p$1.setManagerMoveTo$OA.apply(this, [options]));
});

Clazz.newMeth(C$, 'run1$I', function (mode) {
if (this.isMove) p$1.run1Move$I.apply(this, [mode]);
 else p$1.run1MoveTo$I.apply(this, [mode]);
});

Clazz.newMeth(C$, 'interrupt$', function () {
this.doEndMove=false;
C$.superclazz.prototype.interrupt$.apply(this, []);
});

Clazz.newMeth(C$, 'setManagerMove$OA', function (options) {
this.dRot=options[0];
this.dTrans=options[1];
var f=options[2];
this.dZoom=f[0];
this.dSlab=f[1];
this.floatSecondsTotal=f[2];
var fps=(f[3]|0);
this.slab=this.transformManager.getSlabPercentSetting$();
this.transX=this.transformManager.getTranslationXPercent$();
this.transY=this.transformManager.getTranslationYPercent$();
this.timePerStep=(1000/fps|0);
this.totalSteps=((fps * this.floatSecondsTotal)|0);
if (this.totalSteps <= 0) this.totalSteps=1;
var radiansPerDegreePerStep=(1 / 57.29577951308232 / this.totalSteps );
this.radiansXStep=radiansPerDegreePerStep * this.dRot.x;
this.radiansYStep=radiansPerDegreePerStep * this.dRot.y;
this.radiansZStep=radiansPerDegreePerStep * this.dRot.z;
this.zoomPercent0=this.transformManager.zmPct;
this.iStep=0;
return this.totalSteps;
}, p$1);

Clazz.newMeth(C$, 'setManagerMoveTo$OA', function (options) {
this.center=options[0];
this.matrixEnd.setM3$javajs_util_M34(options[1]);
var f=options[3];
this.ptMoveToCenter=(this.center == null  ? this.transformManager.fixedRotationCenter : this.center);
this.floatSecondsTotal=f[0];
this.zoom=p$1.newSlider$F$F.apply(this, [this.transformManager.zmPct, f[1]]);
this.xTrans=p$1.newSlider$F$F.apply(this, [this.transformManager.getTranslationXPercent$(), f[2]]);
this.yTrans=p$1.newSlider$F$F.apply(this, [this.transformManager.getTranslationYPercent$(), f[3]]);
this.rotationRadius=p$1.newSlider$F$F.apply(this, [this.transformManager.modelRadius, (this.center == null  || Float.isNaN$F(f[4])  ? this.transformManager.modelRadius : f[4] <= 0  ? this.vwr.ms.calcRotationRadius$I$javajs_util_P3$Z(this.vwr.am.cmi, this.center, false) : f[4])]);
this.pixelScale=p$1.newSlider$F$F.apply(this, [this.transformManager.scaleDefaultPixelsPerAngstrom, f[5]]);
if (f[6] != 0 ) {
this.navCenter=options[2];
this.navDepth=p$1.newSlider$F$F.apply(this, [this.transformManager.navigationDepthPercent, f[6]]);
this.xNav=p$1.newSlider$F$F.apply(this, [this.transformManager.getNavigationOffsetPercent$C("X"), f[7]]);
this.yNav=p$1.newSlider$F$F.apply(this, [this.transformManager.getNavigationOffsetPercent$C("Y"), f[8]]);
}this.cameraDepth=p$1.newSlider$F$F.apply(this, [this.transformManager.getCameraDepth$(), f[9]]);
this.cameraX=p$1.newSlider$F$F.apply(this, [this.transformManager.camera.x, f[10]]);
this.cameraY=p$1.newSlider$F$F.apply(this, [this.transformManager.camera.y, f[11]]);
this.transformManager.getRotation$javajs_util_M3(this.matrixStart);
this.matrixStartInv.invertM$javajs_util_M3(this.matrixStart);
this.matrixStep.mul2$javajs_util_M3$javajs_util_M3(this.matrixEnd, this.matrixStartInv);
this.aaTotal.setM$javajs_util_M3(this.matrixStep);
this.fps=30;
this.totalSteps=((this.floatSecondsTotal * this.fps)|0);
this.frameTimeMillis=(1000/this.fps|0);
this.targetTime=System.currentTimeMillis$();
this.aaStepCenter.sub2$javajs_util_T3$javajs_util_T3(this.ptMoveToCenter, this.transformManager.fixedRotationCenter);
this.aaStepCenter.scale$F(1.0 / this.totalSteps);
if (this.navCenter != null  && this.transformManager.mode == 1 ) {
this.aaStepNavCenter.sub2$javajs_util_T3$javajs_util_T3(this.navCenter, this.transformManager.navigationCenter);
this.aaStepNavCenter.scale$F(1.0 / this.totalSteps);
}this.iStep=0;
return this.totalSteps;
}, p$1);

Clazz.newMeth(C$, 'newSlider$F$F', function (start, value) {
return (Float.isNaN$F(value) || value == 3.4028235E38   ? null : Clazz.new_($I$(4,1).c$$F$F,[this, null, start, value]));
}, p$1);

Clazz.newMeth(C$, 'run1Move$I', function (mode) {
while (true)switch (mode) {
case -1:
if (this.floatSecondsTotal > 0 ) this.vwr.setInMotion$Z(true);
mode=0;
break;
case 0:
if (this.stopped || this.iStep >= this.totalSteps ) {
mode=-2;
break;
}this.iStep++;
if (this.dRot.x != 0 ) this.transformManager.rotateXRadians$F$javajs_util_BS(this.radiansXStep, null);
if (this.dRot.y != 0 ) this.transformManager.rotateYRadians$F$javajs_util_BS(this.radiansYStep, null);
if (this.dRot.z != 0 ) this.transformManager.rotateZRadians$F(this.radiansZStep);
if (this.dZoom != 0 ) this.transformManager.zoomToPercent$F(this.zoomPercent0 + this.dZoom * this.iStep / this.totalSteps);
if (this.dTrans.x != 0 ) this.transformManager.translateToPercent$C$F("x", this.transX + this.dTrans.x * this.iStep / this.totalSteps);
if (this.dTrans.y != 0 ) this.transformManager.translateToPercent$C$F("y", this.transY + this.dTrans.y * this.iStep / this.totalSteps);
if (this.dTrans.z != 0 ) this.transformManager.translateToPercent$C$F("z", this.dTrans.z * this.iStep / this.totalSteps);
if (this.dSlab != 0 ) this.transformManager.slabToPercent$I((Math.floor(this.slab + this.dSlab * this.iStep / this.totalSteps)|0));
if (this.iStep == this.totalSteps) {
mode=-2;
break;
}var timeSpent=((System.currentTimeMillis$() - this.startTime)|0);
var timeAllowed=this.iStep * this.timePerStep;
if (timeSpent < timeAllowed) {
this.vwr.requestRepaintAndWait$S("moveThread");
if (!this.isJS && !this.vwr.isScriptExecuting$() ) {
mode=-2;
break;
}timeSpent=((System.currentTimeMillis$() - this.startTime)|0);
this.sleepTime=timeAllowed - timeSpent;
if (!this.runSleep$I$I(this.sleepTime, 0)) return;
}break;
case -2:
if (this.floatSecondsTotal > 0 ) this.vwr.setInMotion$Z(false);
this.resumeEval$();
return;
}

}, p$1);

Clazz.newMeth(C$, 'run1MoveTo$I', function (mode) {
while (true)switch (mode) {
case -1:
if (this.totalSteps > 0) this.vwr.setInMotion$Z(true);
mode=0;
break;
case 0:
if (this.stopped || ++this.iStep >= this.totalSteps ) {
mode=-2;
break;
}p$1.doStepTransform.apply(this, []);
this.doEndMove=true;
this.targetTime+=this.frameTimeMillis;
this.currentTime=System.currentTimeMillis$();
var doRender=(this.currentTime < this.targetTime);
if (!doRender && this.isJS ) {
this.targetTime=this.currentTime;
doRender=true;
}if (doRender) this.vwr.requestRepaintAndWait$S("movetoThread");
if (this.transformManager.movetoThread == null  || !this.transformManager.movetoThread.$name.equals$O(this.$name)  || !this.isJS && this.eval != null   && !this.vwr.isScriptExecuting$()  ) {
this.stopped=true;
break;
}this.currentTime=System.currentTimeMillis$();
var sleepTime=((this.targetTime - this.currentTime)|0);
if (!this.runSleep$I$I(sleepTime, 0)) return;
mode=0;
break;
case -2:
if (this.totalSteps <= 0 || this.doEndMove && !this.stopped  ) p$1.doFinalTransform.apply(this, []);
if (this.totalSteps > 0) this.vwr.setInMotion$Z(false);
this.vwr.moveUpdate$F(this.floatSecondsTotal);
if (this.transformManager.movetoThread != null  && !this.stopped ) {
this.transformManager.movetoThread=null;
this.vwr.finalizeTransformParameters$();
}this.resumeEval$();
return;
}

}, p$1);

Clazz.newMeth(C$, 'doStepTransform', function () {
if (!Float.isNaN$F(this.matrixEnd.m00)) {
this.transformManager.getRotation$javajs_util_M3(this.matrixStart);
this.matrixStartInv.invertM$javajs_util_M3(this.matrixStart);
this.matrixStep.mul2$javajs_util_M3$javajs_util_M3(this.matrixEnd, this.matrixStartInv);
this.aaTotal.setM$javajs_util_M3(this.matrixStep);
this.aaStep.setAA$javajs_util_A4(this.aaTotal);
this.aaStep.angle /= (this.totalSteps - this.iStep);
if (this.aaStep.angle == 0 ) this.matrixStep.setScale$F(1);
 else this.matrixStep.setAA$javajs_util_A4(this.aaStep);
this.matrixStep.mul$javajs_util_M3(this.matrixStart);
}this.fStep=this.iStep / (this.totalSteps - 1.0);
if (this.center != null ) this.transformManager.fixedRotationCenter.add$javajs_util_T3(this.aaStepCenter);
if (this.navCenter != null  && this.transformManager.mode == 1 ) {
var pt=$I$(5).newP$javajs_util_T3(this.transformManager.navigationCenter);
pt.add$javajs_util_T3(this.aaStepNavCenter);
this.transformManager.setNavigatePt$javajs_util_P3(pt);
}p$1.setValues$javajs_util_M3$javajs_util_P3$javajs_util_P3.apply(this, [this.matrixStep, null, null]);
}, p$1);

Clazz.newMeth(C$, 'doFinalTransform', function () {
this.fStep=-1;
p$1.setValues$javajs_util_M3$javajs_util_P3$javajs_util_P3.apply(this, [this.matrixEnd, this.center, this.navCenter]);
}, p$1);

Clazz.newMeth(C$, 'setValues$javajs_util_M3$javajs_util_P3$javajs_util_P3', function (m, center, navCenter) {
this.transformManager.setAll$javajs_util_P3$javajs_util_M3$javajs_util_P3$F$F$F$F$F$F$F$F$F$F$F(center, m, navCenter, p$1.getVal$org_jmol_thread_MoveToThread_Slider.apply(this, [this.zoom]), p$1.getVal$org_jmol_thread_MoveToThread_Slider.apply(this, [this.xTrans]), p$1.getVal$org_jmol_thread_MoveToThread_Slider.apply(this, [this.yTrans]), p$1.getVal$org_jmol_thread_MoveToThread_Slider.apply(this, [this.rotationRadius]), p$1.getVal$org_jmol_thread_MoveToThread_Slider.apply(this, [this.pixelScale]), p$1.getVal$org_jmol_thread_MoveToThread_Slider.apply(this, [this.navDepth]), p$1.getVal$org_jmol_thread_MoveToThread_Slider.apply(this, [this.xNav]), p$1.getVal$org_jmol_thread_MoveToThread_Slider.apply(this, [this.yNav]), p$1.getVal$org_jmol_thread_MoveToThread_Slider.apply(this, [this.cameraDepth]), p$1.getVal$org_jmol_thread_MoveToThread_Slider.apply(this, [this.cameraX]), p$1.getVal$org_jmol_thread_MoveToThread_Slider.apply(this, [this.cameraY]));
}, p$1);

Clazz.newMeth(C$, 'getVal$org_jmol_thread_MoveToThread_Slider', function (s) {
return (s == null  ? NaN : s.getVal$F(this.fStep));
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.MoveToThread, "Slider", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['start','delta','value']]]

Clazz.newMeth(C$, 'c$$F$F', function (start, value) {
;C$.$init$.apply(this);
this.start=start;
this.value=value;
this.delta=value - start;
}, 1);

Clazz.newMeth(C$, 'getVal$F', function (fStep) {
return (fStep < 0  ? this.value : this.start + fStep * this.delta);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
