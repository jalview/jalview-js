(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'javajs.util.BS','org.jmol.util.BSUtil','org.jmol.api.Interface']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AnimationManager");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.animationThread=null;
this.vwr=null;
this.animationOn=false;
this.animationFps=0;
this.firstFrameDelayMs=0;
this.lastFrameDelayMs=0;
this.bsVisibleModels=null;
this.animationReplayMode=0;
this.bsDisplay=null;
this.animationFrames=null;
this.isMovie=false;
this.animationPaused=false;
this.cmi=0;
this.caf=0;
this.morphCount=0;
this.animationDirection=0;
this.currentDirection=0;
this.firstFrameIndex=0;
this.lastFrameIndex=0;
this.frameStep=0;
this.backgroundModelIndex=0;
this.currentMorphModel=0;
this.firstFrameDelay=0;
this.lastFrameDelay=0;
this.lastFramePainted=0;
this.lastModelPainted=0;
this.intAnimThread=0;
this.cai=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.bsVisibleModels=Clazz.new_($I$(1));
this.animationReplayMode=1073742070;
this.animationDirection=1;
this.currentDirection=1;
this.backgroundModelIndex=-1;
this.lastFrameDelay=1;
this.cai=-1;
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer', function (vwr) {
C$.$init$.apply(this);
this.vwr=vwr;
}, 1);

Clazz.newMeth(C$, 'setAnimationOn$Z', function (animationOn) {
if (animationOn == this.animationOn ) return;
if (!animationOn || this.vwr.headless ) {
this.stopThread$Z(false);
return;
}if (!this.vwr.tm.spinOn) this.vwr.refresh$I$S(3, "Anim:setAnimationOn");
this.setAnimationRange$I$I(-1, -1);
this.resumeAnimation$();
});

Clazz.newMeth(C$, 'stopThread$Z', function (isPaused) {
var stopped=false;
if (this.animationThread != null ) {
this.animationThread.interrupt$();
this.animationThread=null;
stopped=true;
}this.animationPaused=isPaused;
if (stopped && !this.vwr.tm.spinOn ) this.vwr.refresh$I$S(3, "Viewer:setAnimationOff");
p$1.animation$Z.apply(this, [false]);
this.vwr.setStatusFrameChanged$Z$Z(false, false);
});

Clazz.newMeth(C$, 'setAnimationNext$', function () {
return p$1.setAnimationRelative$I.apply(this, [this.animationDirection]);
});

Clazz.newMeth(C$, 'currentIsLast$', function () {
return (this.isMovie ? this.lastFramePainted == this.caf : this.lastModelPainted == this.cmi);
});

Clazz.newMeth(C$, 'currentFrameIs$I', function (f) {
var i=this.cmi;
return (this.morphCount == 0 ? i == f : Math.abs(this.currentMorphModel - f) < 0.001 );
});

Clazz.newMeth(C$, 'clear$', function () {
this.setMovie$java_util_Map(null);
this.initializePointers$I(0);
this.setAnimationOn$Z(false);
this.setModel$I$Z(0, true);
this.currentDirection=1;
this.cai=-1;
this.setAnimationDirection$I(1);
this.setAnimationFps$I(10);
this.setAnimationReplayMode$I$F$F(1073742070, 0, 0);
this.initializePointers$I(0);
});

Clazz.newMeth(C$, 'getModelSpecial$I', function (i) {
switch (i) {
case -1:
if (this.animationFrames != null ) return "1";
i=this.firstFrameIndex;
break;
case 0:
if (this.morphCount > 0) return "-" + (new Float(1 + this.currentMorphModel).toString());
i=this.cmi;
break;
case 1:
if (this.animationFrames != null ) return "" + this.animationFrames.length;
i=this.lastFrameIndex;
break;
}
return this.vwr.getModelNumberDotted$I(i);
});

Clazz.newMeth(C$, 'setDisplay$javajs_util_BS', function (bs) {
this.bsDisplay=(bs == null  || bs.isEmpty$()  ? null : $I$(2).copy$javajs_util_BS(bs));
});

Clazz.newMeth(C$, 'setMorphCount$I', function (n) {
this.morphCount=(this.isMovie ? 0 : n);
});

Clazz.newMeth(C$, 'morph$F', function (modelIndex) {
var m=(modelIndex|0);
if (Math.abs(m - modelIndex) < 0.001 ) modelIndex=m;
 else if (Math.abs(m - modelIndex) > 0.999 ) modelIndex=m=m + 1;
var f=modelIndex - m;
m-=1;
if (f == 0 ) {
this.currentMorphModel=m;
this.setModel$I$Z(m, true);
return;
}var m1;
this.setModel$I$Z(m, true);
m1=m + 1;
this.currentMorphModel=m + f;
if (m1 == m || m1 < 0  || m < 0 ) return;
this.vwr.ms.morphTrajectories$I$I$F(m, m1, f);
});

Clazz.newMeth(C$, 'setModel$I$Z', function (modelIndex, clearBackgroundModel) {
if (modelIndex < 0) this.stopThread$Z(false);
var formerModelIndex=this.cmi;
var modelSet=this.vwr.ms;
var modelCount=(modelSet == null  ? 0 : modelSet.mc);
if (modelCount == 1) this.cmi=modelIndex=0;
 else if (modelIndex < 0 || modelIndex >= modelCount ) modelIndex=-1;
var ids=null;
var isSameSource=false;
if (this.cmi != modelIndex) {
if (modelCount > 0) {
var ms=this.vwr.ms;
var toDataModel=ms.isJmolDataFrameForModel$I(modelIndex);
var fromDataModel=ms.isJmolDataFrameForModel$I(this.cmi);
if (fromDataModel) ms.setJmolDataFrame$S$I$I(null, -1, this.cmi);
if (this.cmi != -1) this.vwr.saveModelOrientation$();
if (fromDataModel || toDataModel ) {
ids=ms.getJmolFrameType$I(modelIndex) + " " + modelIndex + " <-- " + " " + this.cmi + " " + ms.getJmolFrameType$I(this.cmi) ;
isSameSource=(ms.getJmolDataSourceFrame$I(modelIndex) == ms.getJmolDataSourceFrame$I(this.cmi));
}}this.cmi=modelIndex;
if (ids != null ) {
if (modelIndex >= 0) this.vwr.restoreModelOrientation$I(modelIndex);
if (isSameSource && (ids.indexOf$S("quaternion") >= 0 || ids.indexOf$S("plot") < 0 && ids.indexOf$S("ramachandran") < 0  && ids.indexOf$S(" property ") < 0  ) ) {
this.vwr.restoreModelRotation$I(formerModelIndex);
}}}p$1.setViewer$Z.apply(this, [clearBackgroundModel]);
});

Clazz.newMeth(C$, 'setBackgroundModelIndex$I', function (modelIndex) {
var modelSet=this.vwr.ms;
if (modelSet == null  || modelIndex < 0  || modelIndex >= modelSet.mc ) modelIndex=-1;
this.backgroundModelIndex=modelIndex;
if (modelIndex >= 0) this.vwr.ms.setTrajectory$I(modelIndex);
this.vwr.setTainted$Z(true);
p$1.setFrameRangeVisible.apply(this, []);
});

Clazz.newMeth(C$, 'initializePointers$I', function (frameStep) {
this.firstFrameIndex=0;
this.lastFrameIndex=(frameStep == 0 ? 0 : this.getFrameCount$()) - 1;
this.frameStep=frameStep;
this.vwr.setFrameVariables$();
});

Clazz.newMeth(C$, 'setAnimationDirection$I', function (animationDirection) {
this.animationDirection=animationDirection;
});

Clazz.newMeth(C$, 'setAnimationFps$I', function (fps) {
if (fps < 1) fps=1;
if (fps > 50) fps=50;
this.animationFps=fps;
this.vwr.setFrameVariables$();
});

Clazz.newMeth(C$, 'setAnimationReplayMode$I$F$F', function (animationReplayMode, firstFrameDelay, lastFrameDelay) {
this.firstFrameDelay=firstFrameDelay > 0  ? firstFrameDelay : 0;
this.firstFrameDelayMs=((this.firstFrameDelay * 1000)|0);
this.lastFrameDelay=lastFrameDelay > 0  ? lastFrameDelay : 0;
this.lastFrameDelayMs=((this.lastFrameDelay * 1000)|0);
this.animationReplayMode=animationReplayMode;
this.vwr.setFrameVariables$();
});

Clazz.newMeth(C$, 'setAnimationRange$I$I', function (framePointer, framePointer2) {
var frameCount=this.getFrameCount$();
if (framePointer < 0) framePointer=0;
if (framePointer2 < 0) framePointer2=frameCount;
if (framePointer >= frameCount) framePointer=frameCount - 1;
if (framePointer2 >= frameCount) framePointer2=frameCount - 1;
this.firstFrameIndex=framePointer;
this.currentMorphModel=this.firstFrameIndex;
this.lastFrameIndex=framePointer2;
this.frameStep=(framePointer2 < framePointer ? -1 : 1);
this.rewindAnimation$();
});

Clazz.newMeth(C$, 'pauseAnimation$', function () {
this.stopThread$Z(true);
});

Clazz.newMeth(C$, 'reverseAnimation$', function () {
this.currentDirection=-this.currentDirection;
if (!this.animationOn) this.resumeAnimation$();
});

Clazz.newMeth(C$, 'repaintDone$', function () {
this.lastModelPainted=this.cmi;
this.lastFramePainted=this.caf;
});

Clazz.newMeth(C$, 'resumeAnimation$', function () {
if (this.cmi < 0) this.setAnimationRange$I$I(this.firstFrameIndex, this.lastFrameIndex);
if (this.getFrameCount$() <= 1) {
p$1.animation$Z.apply(this, [false]);
return;
}p$1.animation$Z.apply(this, [true]);
this.animationPaused=false;
if (this.animationThread == null ) {
this.intAnimThread++;
this.animationThread=$I$(3).getOption$S$org_jmol_viewer_Viewer$S("thread.AnimationThread", this.vwr, "script");
this.animationThread.setManager$O$org_jmol_viewer_Viewer$O(this, this.vwr, Clazz.array(Integer.TYPE, -1, [this.firstFrameIndex, this.lastFrameIndex, this.intAnimThread]));
this.animationThread.start$();
}});

Clazz.newMeth(C$, 'setAnimationLast$', function () {
this.setFrame$I(this.animationDirection > 0 ? this.lastFrameIndex : this.firstFrameIndex);
});

Clazz.newMeth(C$, 'rewindAnimation$', function () {
this.setFrame$I(this.animationDirection > 0 ? this.firstFrameIndex : this.lastFrameIndex);
this.currentDirection=1;
this.vwr.setFrameVariables$();
});

Clazz.newMeth(C$, 'setAnimationPrevious$', function () {
return p$1.setAnimationRelative$I.apply(this, [-this.animationDirection]);
});

Clazz.newMeth(C$, 'getAnimRunTimeSeconds$', function () {
var frameCount=this.getFrameCount$();
if (this.firstFrameIndex == this.lastFrameIndex || this.lastFrameIndex < 0  || this.firstFrameIndex < 0  || this.lastFrameIndex >= frameCount  || this.firstFrameIndex >= frameCount ) return 0;
var i0=Math.min(this.firstFrameIndex, this.lastFrameIndex);
var i1=Math.max(this.firstFrameIndex, this.lastFrameIndex);
var nsec=1.0 * (i1 - i0) / this.animationFps + this.firstFrameDelay + this.lastFrameDelay;
for (var i=i0; i <= i1; i++) nsec += this.vwr.ms.getFrameDelayMs$I(this.modelIndexForFrame$I(i)) / 1000.0;

return nsec;
});

Clazz.newMeth(C$, 'setMovie$java_util_Map', function (info) {
this.isMovie=(info != null  && info.get$O("scripts") == null  );
if (this.isMovie) {
this.animationFrames=info.get$O("frames");
if (this.animationFrames == null  || this.animationFrames.length == 0 ) {
this.isMovie=false;
} else {
this.caf=(info.get$O("currentFrame")).intValue$();
if (this.caf < 0 || this.caf >= this.animationFrames.length ) this.caf=0;
}this.setFrame$I(this.caf);
}if (!this.isMovie) {
this.animationFrames=null;
}this.vwr.setBooleanProperty$S$Z("_ismovie", this.isMovie);
this.bsDisplay=null;
this.currentMorphModel=this.morphCount=0;
this.vwr.setFrameVariables$();
});

Clazz.newMeth(C$, 'modelIndexForFrame$I', function (i) {
return (this.isMovie ? this.animationFrames[i] - 1 : i);
});

Clazz.newMeth(C$, 'getFrameCount$', function () {
return (this.isMovie ? this.animationFrames.length : this.vwr.ms.mc);
});

Clazz.newMeth(C$, 'setFrame$I', function (i) {
try {
if (this.isMovie) {
var iModel=this.modelIndexForFrame$I(i);
this.caf=i;
i=iModel;
} else {
this.caf=i;
}this.setModel$I$Z(i, true);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setViewer$Z', function (clearBackgroundModel) {
this.vwr.ms.setTrajectory$I(this.cmi);
this.vwr.tm.setFrameOffset$I(this.cmi);
if (this.cmi == -1 && clearBackgroundModel ) this.setBackgroundModelIndex$I(-1);
this.vwr.setTainted$Z(true);
var nDisplay=p$1.setFrameRangeVisible.apply(this, []);
this.vwr.setStatusFrameChanged$Z$Z(false, false);
if (!this.vwr.g.selectAllModels) this.setSelectAllSubset$Z(nDisplay < 2);
}, p$1);

Clazz.newMeth(C$, 'setSelectAllSubset$Z', function (justOne) {
if (this.vwr.ms != null ) this.vwr.slm.setSelectionSubset$javajs_util_BS(justOne ? this.vwr.ms.getModelAtomBitSetIncludingDeleted$I$Z(this.cmi, true) : this.vwr.ms.getModelAtomBitSetIncludingDeletedBs$javajs_util_BS(this.bsVisibleModels));
});

Clazz.newMeth(C$, 'setFrameRangeVisible', function () {
var nDisplayed=0;
this.bsVisibleModels.clearAll$();
if (this.backgroundModelIndex >= 0) {
this.bsVisibleModels.set$I(this.backgroundModelIndex);
nDisplayed=1;
}if (this.cmi >= 0) {
this.bsVisibleModels.set$I(this.cmi);
return ++nDisplayed;
}if (this.frameStep == 0) return nDisplayed;
var frameDisplayed=0;
nDisplayed=0;
for (var iframe=this.firstFrameIndex; iframe != this.lastFrameIndex; iframe+=this.frameStep) {
var i=this.modelIndexForFrame$I(iframe);
if (!this.vwr.ms.isJmolDataFrameForModel$I(i)) {
this.bsVisibleModels.set$I(i);
nDisplayed++;
frameDisplayed=iframe;
}}
var i=this.modelIndexForFrame$I(this.lastFrameIndex);
if (this.firstFrameIndex == this.lastFrameIndex || !this.vwr.ms.isJmolDataFrameForModel$I(i)  || nDisplayed == 0 ) {
this.bsVisibleModels.set$I(i);
if (nDisplayed == 0) this.firstFrameIndex=this.lastFrameIndex;
nDisplayed=0;
}if (nDisplayed == 1 && this.cmi < 0 ) this.setFrame$I(frameDisplayed);
return nDisplayed;
}, p$1);

Clazz.newMeth(C$, 'animation$Z', function (TF) {
this.animationOn=TF;
this.vwr.setBooleanProperty$S$Z("_animating", TF);
}, p$1);

Clazz.newMeth(C$, 'setAnimationRelative$I', function (direction) {
var frameStep=p$1.getFrameStep$I.apply(this, [direction]);
var thisFrame=(this.isMovie ? this.caf : this.cmi);
var frameNext=thisFrame + frameStep;
var morphStep=0.0;
var nextMorphFrame=0.0;
var isDone;
if (this.morphCount > 0) {
morphStep=1.0 / (this.morphCount + 1);
nextMorphFrame=this.currentMorphModel + frameStep * morphStep;
isDone=p$1.isNotInRange$F.apply(this, [nextMorphFrame]);
} else {
isDone=p$1.isNotInRange$F.apply(this, [frameNext]);
}if (isDone) {
switch (this.animationReplayMode) {
case 1073742070:
return false;
case 528411:
nextMorphFrame=frameNext=(this.animationDirection == this.currentDirection ? this.firstFrameIndex : this.lastFrameIndex);
break;
case 1073742082:
this.currentDirection=-this.currentDirection;
frameNext-=2 * frameStep;
nextMorphFrame -= 2 * frameStep * morphStep ;
}
}if (this.morphCount < 1) {
if (frameNext < 0 || frameNext >= this.getFrameCount$() ) return false;
this.setFrame$I(frameNext);
return true;
}this.morph$F(nextMorphFrame + 1);
return true;
}, p$1);

Clazz.newMeth(C$, 'isNotInRange$F', function (frameNext) {
var f=frameNext - 0.001;
return (f > this.firstFrameIndex  && f > this.lastFrameIndex   || (f=frameNext + 0.001) < this.firstFrameIndex  && f < this.lastFrameIndex   );
}, p$1);

Clazz.newMeth(C$, 'getFrameStep$I', function (direction) {
return this.frameStep * direction * this.currentDirection ;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:21 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
