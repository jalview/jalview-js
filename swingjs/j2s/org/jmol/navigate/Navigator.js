(function(){var P$=Clazz.newPackage("org.jmol.navigate"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.V3','org.jmol.util.GData','org.jmol.util.Escape']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Navigator", null, 'org.jmol.thread.JmolThread', 'org.jmol.api.JmolNavigatorInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.multiplier=1;
},1);

C$.$fields$=[['Z',['isPathGuide','isNavTo','isStep'],'F',['floatSecondsTotal','degrees','depthPercent','xTrans','yTrans','depthStart','depthDelta','xTransStart','xTransDelta','yTransStart','yTransDelta','degreeStep'],'I',['nHits','multiplier','frameTimeMillis','totalSteps','iStep','iList'],'O',['tm','org.jmol.viewer.TransformManager','points','javajs.util.P3[]','+pointGuides','axis','javajs.util.V3','center','javajs.util.P3','+centerStart','aaStepCenter','javajs.util.V3','navigationList','javajs.util.Lst']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_viewer_TransformManager$org_jmol_viewer_Viewer', function (tm, vwr) {
this.tm=tm;
this.setViewer$org_jmol_viewer_Viewer$S(vwr, "navigator");
});

Clazz.newMeth(C$, 'navigateList$org_jmol_api_JmolScriptEvaluator$javajs_util_Lst', function (eval, list) {
this.setEval$org_jmol_api_JmolScriptEvaluator(eval);
this.navigationList=list;
this.iList=0;
this.isStep=false;
this.stopped=false;
if (this.isJS) this.useTimeout=true;
this.run$();
});

Clazz.newMeth(C$, 'run1$I', function (mode) {
var ptTemp=Clazz.new_($I$(1,1));
while (this.isJS || this.vwr.isScriptExecuting$() )switch (mode) {
case -1:
if (this.isStep) {
this.targetTime=this.startTime;
this.iStep=0;
mode=(this.totalSteps <= 0 && this.isNavTo  ? 1 : 0);
break;
}mode=2;
break;
case 2:
p$1.nextList$OA$javajs_util_P3.apply(this, [this.navigationList.get$I(this.iList), ptTemp]);
return;
case 0:
if (this.stopped || this.iStep >= this.totalSteps ) {
mode=-2;
break;
}p$1.doNavStep$I.apply(this, [this.iStep++]);
this.vwr.requestRepaintAndWait$S("navigatorThread");
var sleepTime=((this.targetTime - System.currentTimeMillis$())|0);
if (!this.runSleep$I$I(sleepTime, 0)) return;
mode=0;
break;
case 1:
if (!this.runSleep$I$I(((this.floatSecondsTotal * 1000)|0) - 30, -2)) return;
mode=-2;
break;
case -2:
if (this.isNavTo) {
if (!Float.isNaN$F(this.xTrans) || !Float.isNaN$F(this.yTrans) ) this.navTranslatePercentOrTo$F$F$F(-1, this.xTrans, this.yTrans);
if (!Float.isNaN$F(this.depthPercent)) this.setNavigationDepthPercent$F(this.depthPercent);
}this.vwr.setInMotion$Z(false);
this.vwr.moveUpdate$F(this.floatSecondsTotal);
if (!this.stopped && ++this.iList < this.navigationList.size$() ) {
mode=2;
break;
}this.resumeEval$();
return;
}

});

Clazz.newMeth(C$, 'nextList$OA$javajs_util_P3', function (o, ptTemp) {
var tok=(o[0]).intValue$();
var seconds=(o[1]).floatValue$();
switch (tok) {
case 134217751:
var pt=o[2];
if (seconds == 0 ) {
this.tm.setNavigatePt$javajs_util_P3(pt);
this.vwr.moveUpdate$F(0);
return;
}p$1.navigateTo$F$javajs_util_V3$F$javajs_util_P3$F$F$F.apply(this, [seconds, null, NaN, pt, NaN, NaN, NaN]);
break;
case 1073742084:
var path=o[2];
var theta=o[3];
var indexStart=(o[4])[0];
var indexEnd=(o[4])[1];
p$1.navigate$F$javajs_util_P3AA$javajs_util_P3A$FA$I$I.apply(this, [seconds, null, path, theta, indexStart, indexEnd]);
break;
case 1112152078:
var pathGuide=(o[2]);
p$1.navigate$F$javajs_util_P3AA$javajs_util_P3A$FA$I$I.apply(this, [seconds, pathGuide, null, null, 0, 2147483647]);
break;
case 528432:
var rotAxis=o[2];
var degrees=(o[3]).floatValue$();
if (seconds == 0 ) {
this.navigateAxis$javajs_util_V3$F(rotAxis, degrees);
this.vwr.moveUpdate$F(0);
return;
}p$1.navigateTo$F$javajs_util_V3$F$javajs_util_P3$F$F$F.apply(this, [seconds, rotAxis, degrees, null, NaN, NaN, NaN]);
break;
case 4160:
case 268435634:
if (tok == 4160) {
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(o[2], ptTemp);
} else {
ptTemp.x=(o[2]).floatValue$();
ptTemp.y=(o[3]).floatValue$();
p$1.setNavPercent$javajs_util_P3.apply(this, [ptTemp]);
}if (seconds == 0 ) {
this.navTranslatePercentOrTo$F$F$F(-1, ptTemp.x, ptTemp.y);
this.vwr.moveUpdate$F(0);
return;
}p$1.navigateTo$F$javajs_util_V3$F$javajs_util_P3$F$F$F.apply(this, [seconds, null, NaN, null, NaN, ptTemp.x, ptTemp.y]);
break;
case 554176526:
var percent=(o[2]).floatValue$();
p$1.navigateTo$F$javajs_util_V3$F$javajs_util_P3$F$F$F.apply(this, [seconds, null, NaN, null, percent, NaN, NaN]);
break;
}
}, p$1);

Clazz.newMeth(C$, 'navigate$F$javajs_util_P3AA$javajs_util_P3A$FA$I$I', function (seconds, pathGuide, path, theta, indexStart, indexEnd) {
this.floatSecondsTotal=seconds;
p$1.setupNav$F$javajs_util_P3AA$javajs_util_P3A$I$I.apply(this, [seconds, pathGuide, path, indexStart, indexEnd]);
this.isStep=true;
this.run$();
}, p$1);

Clazz.newMeth(C$, 'navigateTo$F$javajs_util_V3$F$javajs_util_P3$F$F$F', function (seconds, axis, degrees, center, depthPercent, xTrans, yTrans) {
this.floatSecondsTotal=seconds;
this.axis=axis;
this.degrees=degrees;
this.center=center;
this.depthPercent=depthPercent;
this.xTrans=xTrans;
this.yTrans=yTrans;
p$1.setupNavTo.apply(this, []);
this.isStep=true;
this.run$();
}, p$1);

Clazz.newMeth(C$, 'setNavPercent$javajs_util_P3', function (pt1) {
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.tm.navigationCenter, this.tm.navigationOffset);
var x=pt1.x;
var y=pt1.y;
if (!Float.isNaN$F(x)) x=this.tm.width * x / 100.0 + (Float.isNaN$F(y) ? this.tm.navigationOffset.x : (this.tm.width / 2.0));
if (!Float.isNaN$F(y)) y=this.tm.height * y / 100.0 + (Float.isNaN$F(x) ? this.tm.navigationOffset.y : this.tm.getNavPtHeight$());
pt1.x=x;
pt1.y=y;
}, p$1);

Clazz.newMeth(C$, 'doNavStep$I', function (iStep) {
if (!this.isNavTo) {
this.tm.setNavigatePt$javajs_util_P3(this.points[iStep]);
if (this.isPathGuide) {
p$1.alignZX$javajs_util_P3$javajs_util_P3$javajs_util_P3.apply(this, [this.points[iStep], this.points[iStep + 1], this.pointGuides[iStep]]);
}this.targetTime+=this.frameTimeMillis;
return;
}this.tm.navigating=true;
var fStep=(iStep + 1.0) / this.totalSteps;
if (!Float.isNaN$F(this.degrees)) this.tm.navigateAxis$javajs_util_V3$F(this.axis, this.degreeStep);
if (this.center != null ) {
this.centerStart.add$javajs_util_T3(this.aaStepCenter);
this.tm.setNavigatePt$javajs_util_P3(this.centerStart);
}if (!Float.isNaN$F(this.xTrans) || !Float.isNaN$F(this.yTrans) ) {
var x=NaN;
var y=NaN;
if (!Float.isNaN$F(this.xTrans)) x=this.xTransStart + this.xTransDelta * fStep;
if (!Float.isNaN$F(this.yTrans)) y=this.yTransStart + this.yTransDelta * fStep;
this.navTranslatePercentOrTo$F$F$F(-1, x, y);
}if (!Float.isNaN$F(this.depthPercent)) {
this.setNavigationDepthPercent$F(this.depthStart + this.depthDelta * fStep);
}this.tm.navigating=false;
this.targetTime+=this.frameTimeMillis;
}, p$1);

Clazz.newMeth(C$, 'setupNavTo', function () {
this.isNavTo=true;
if (!this.vwr.haveDisplay) this.floatSecondsTotal=0;
var fps=30;
this.totalSteps=((this.floatSecondsTotal * fps)|0) - 1;
if (this.floatSecondsTotal > 0 ) this.vwr.setInMotion$Z(true);
if (this.degrees == 0 ) this.degrees=NaN;
if (this.totalSteps > 0) {
this.frameTimeMillis=(1000/fps|0);
this.depthStart=this.tm.navigationDepthPercent;
this.depthDelta=this.depthPercent - this.depthStart;
this.xTransStart=this.tm.navigationOffset.x;
this.xTransDelta=this.xTrans - this.xTransStart;
this.yTransStart=this.tm.navigationOffset.y;
this.yTransDelta=this.yTrans - this.yTransStart;
this.degreeStep=this.degrees / (this.totalSteps + 1);
this.aaStepCenter=$I$(2,"newVsub$javajs_util_T3$javajs_util_T3",[this.center == null  ? this.tm.navigationCenter : this.center, this.tm.navigationCenter]);
this.aaStepCenter.scale$F(1.0 / (this.totalSteps + 1));
this.centerStart=$I$(1).newP$javajs_util_T3(this.tm.navigationCenter);
}}, p$1);

Clazz.newMeth(C$, 'setupNav$F$javajs_util_P3AA$javajs_util_P3A$I$I', function (seconds, pathGuide, path, indexStart, indexEnd) {
this.isNavTo=false;
if (seconds <= 0 ) seconds=2;
if (!this.vwr.haveDisplay) seconds=0;
this.isPathGuide=(pathGuide != null );
var nSegments=Math.min((this.isPathGuide ? pathGuide.length : path.length) - 1, indexEnd);
if (!this.isPathGuide) while (nSegments > 0 && path[nSegments] == null  )nSegments--;

nSegments-=indexStart;
if (nSegments < 1) return;
var nPer=(Math.floor(10 * seconds)|0);
var nSteps=nSegments * nPer + 1;
this.points=Clazz.array($I$(1), [nSteps + 2]);
this.pointGuides=Clazz.array($I$(1), [this.isPathGuide ? nSteps + 2 : 0]);
for (var i=0; i < nSegments; i++) {
var iPrev=Math.max(i - 1, 0) + indexStart;
var pt=i + indexStart;
var iNext=Math.min(i + 1, nSegments) + indexStart;
var iNext2=Math.min(i + 2, nSegments) + indexStart;
var iNext3=Math.min(i + 3, nSegments) + indexStart;
if (this.isPathGuide) {
$I$(3).getHermiteList$I$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3A$I$I$Z(7, pathGuide[iPrev][0], pathGuide[pt][0], pathGuide[iNext][0], pathGuide[iNext2][0], pathGuide[iNext3][0], this.points, i * nPer, nPer + 1, true);
$I$(3).getHermiteList$I$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3A$I$I$Z(7, pathGuide[iPrev][1], pathGuide[pt][1], pathGuide[iNext][1], pathGuide[iNext2][1], pathGuide[iNext3][1], this.pointGuides, i * nPer, nPer + 1, true);
} else {
$I$(3).getHermiteList$I$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3A$I$I$Z(7, path[iPrev], path[pt], path[iNext], path[iNext2], path[iNext3], this.points, i * nPer, nPer + 1, true);
}}
this.vwr.setInMotion$Z(true);
this.frameTimeMillis=((1000 / this.tm.navFps)|0);
this.totalSteps=nSteps;
}, p$1);

Clazz.newMeth(C$, 'alignZX$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (pt0, pt1, ptVectorWing) {
var pt0s=Clazz.new_($I$(1,1));
var pt1s=Clazz.new_($I$(1,1));
var m=this.tm.matrixRotate;
m.rotate2$javajs_util_T3$javajs_util_T3(pt0, pt0s);
m.rotate2$javajs_util_T3$javajs_util_T3(pt1, pt1s);
var vPath=$I$(2).newVsub$javajs_util_T3$javajs_util_T3(pt0s, pt1s);
var v=$I$(2).new3$F$F$F(0, 0, 1);
var angle=vPath.angle$javajs_util_V3(v);
v.cross$javajs_util_T3$javajs_util_T3(vPath, v);
if (angle != 0 ) this.tm.navigateAxis$javajs_util_V3$F(v, (angle * 57.29577951308232));
m.rotate2$javajs_util_T3$javajs_util_T3(pt0, pt0s);
var pt2=$I$(1).newP$javajs_util_T3(ptVectorWing);
pt2.add$javajs_util_T3(pt0);
var pt2s=Clazz.new_($I$(1,1));
m.rotate2$javajs_util_T3$javajs_util_T3(pt2, pt2s);
vPath.sub2$javajs_util_T3$javajs_util_T3(pt2s, pt0s);
vPath.z=0;
v.set$F$F$F(-1, 0, 0);
angle=vPath.angle$javajs_util_V3(v);
if (vPath.y < 0 ) angle=-angle;
v.set$F$F$F(0, 0, 1);
if (angle != 0 ) this.tm.navigateAxis$javajs_util_V3$F(v, (angle * 57.29577951308232));
m.rotate2$javajs_util_T3$javajs_util_T3(pt0, pt0s);
m.rotate2$javajs_util_T3$javajs_util_T3(pt1, pt1s);
m.rotate2$javajs_util_T3$javajs_util_T3(ptVectorWing, pt2s);
}, p$1);

Clazz.newMeth(C$, 'zoomByFactor$F$I$I', function (factor, x, y) {
var navZ=this.tm.navZ;
if (navZ > 0 ) {
navZ /= factor;
if (navZ < 5 ) navZ=-5;
 else if (navZ > 200 ) navZ=200;
} else if (navZ == 0 ) {
navZ=(factor < 1  ? 5 : -5);
} else {
navZ *= factor;
if (navZ > -5 ) navZ=5;
 else if (navZ < -200 ) navZ=-200;
}this.tm.navZ=navZ;
});

Clazz.newMeth(C$, 'calcNavigationPoint$', function () {
p$1.calcNavigationDepthPercent.apply(this, []);
if (!this.tm.navigating && this.tm.navMode != 1 ) {
if (this.tm.navigationDepthPercent < 100  && this.tm.navigationDepthPercent > 0   && !Float.isNaN$F(this.tm.previousX)  && this.tm.previousX == this.tm.fixedTranslation.x   && this.tm.previousY == this.tm.fixedTranslation.y   && this.tm.navMode != -1 ) this.tm.navMode=3;
 else this.tm.navMode=0;
}switch (this.tm.navMode) {
case 1:
this.tm.navigationOffset.set$F$F$F(this.tm.width / 2.0, this.tm.getNavPtHeight$(), this.tm.referencePlaneOffset);
this.tm.zoomFactor=3.4028235E38;
this.tm.calcCameraFactors$();
this.tm.calcTransformMatrix$();
p$1.newNavigationCenter.apply(this, []);
break;
case 0:
case -1:
this.tm.fixedRotationOffset.setT$javajs_util_T3(this.tm.fixedTranslation);
p$1.newNavigationCenter.apply(this, []);
break;
case 2:
p$1.newNavigationCenter.apply(this, []);
break;
case -2:
case 3:
var pt1=this.tm.matrixTransform.rotTrans2$javajs_util_T3$javajs_util_T3(this.tm.navigationCenter, Clazz.new_($I$(1,1)));
var z=pt1.z;
this.tm.matrixTransform.rotTrans2$javajs_util_T3$javajs_util_T3(this.tm.fixedRotationCenter, pt1);
this.tm.modelCenterOffset=this.tm.referencePlaneOffset + (pt1.z - z);
this.tm.calcCameraFactors$();
this.tm.calcTransformMatrix$();
break;
case 4:
this.tm.navigationOffset.z=this.tm.referencePlaneOffset;
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(this.tm.navigationOffset, this.tm.navigationCenter);
break;
}
this.tm.matrixTransform.rotTrans2$javajs_util_T3$javajs_util_T3(this.tm.navigationCenter, this.tm.navigationShiftXY);
if (this.vwr.getBoolean$I(603979890)) {
var pt=$I$(1).newP$javajs_util_T3(this.tm.navigationCenter);
this.vwr.toUnitCell$javajs_util_P3$javajs_util_P3(this.tm.navigationCenter, null);
if (pt.distance$javajs_util_T3(this.tm.navigationCenter) > 0.01 ) {
this.tm.matrixTransform.rotTrans2$javajs_util_T3$javajs_util_T3(this.tm.navigationCenter, pt);
var dz=this.tm.navigationShiftXY.z - pt.z;
this.tm.modelCenterOffset += dz;
this.tm.calcCameraFactors$();
this.tm.calcTransformMatrix$();
this.tm.matrixTransform.rotTrans2$javajs_util_T3$javajs_util_T3(this.tm.navigationCenter, this.tm.navigationShiftXY);
}}this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.tm.fixedRotationCenter, this.tm.fixedTranslation);
this.tm.fixedRotationOffset.setT$javajs_util_T3(this.tm.fixedTranslation);
this.tm.previousX=this.tm.fixedTranslation.x;
this.tm.previousY=this.tm.fixedTranslation.y;
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.tm.navigationCenter, this.tm.navigationOffset);
this.tm.navigationOffset.z=this.tm.referencePlaneOffset;
this.tm.navMode=0;
p$1.calcNavSlabAndDepthValues.apply(this, []);
});

Clazz.newMeth(C$, 'calcNavSlabAndDepthValues', function () {
this.tm.calcSlabAndDepthValues$();
if (this.tm.slabEnabled) {
this.tm.slabValue=(this.tm.mode == 1 ? -100 : 0) + ((this.tm.referencePlaneOffset - this.tm.navigationSlabOffset)|0);
if (this.tm.zSlabPercentSetting == this.tm.zDepthPercentSetting) this.tm.zSlabValue=this.tm.slabValue;
}}, p$1);

Clazz.newMeth(C$, 'newNavigationCenter', function () {
this.tm.mode=this.tm.defaultMode;
var pt=Clazz.new_($I$(1,1));
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.tm.fixedRotationCenter, pt);
pt.x -= this.tm.navigationOffset.x;
pt.y -= this.tm.navigationOffset.y;
var f=-this.tm.getPerspectiveFactor$F(pt.z);
pt.x /= f;
pt.y /= f;
pt.z=this.tm.referencePlaneOffset;
this.tm.matrixTransformInv.rotTrans2$javajs_util_T3$javajs_util_T3(pt, this.tm.navigationCenter);
this.tm.mode=1;
}, p$1);

Clazz.newMeth(C$, 'setNavigationOffsetRelative$', function () {
if (this.tm.navigationDepthPercent < 0  && this.tm.navZ > 0   || this.tm.navigationDepthPercent > 100  && this.tm.navZ < 0   ) {
this.tm.navZ=0;
}this.tm.rotateXRadians$F$javajs_util_BS(0.017453292 * -0.02 * this.tm.navY , null);
this.tm.rotateYRadians$F$javajs_util_BS(0.017453292 * 0.02 * this.tm.navX , null);
var pt=this.tm.navigationCenter;
var pts=Clazz.new_($I$(1,1));
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(pt, pts);
pts.z += this.tm.navZ;
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(pts, pt);
this.tm.setNavigatePt$javajs_util_P3(pt);
});

Clazz.newMeth(C$, 'navigateKey$I$I', function (keyCode, modifiers) {
var key=null;
var value=0;
if (this.tm.mode != 1) return;
if (keyCode == 0) {
this.nHits=0;
this.multiplier=1;
if (!this.tm.navigating) return;
this.tm.navigating=false;
return;
}this.nHits++;
if (this.nHits % 10 == 0) this.multiplier*=(this.multiplier == 4 ? 1 : 2);
var isShiftKey=((modifiers & 1) > 0);
var isAltKey=((modifiers & 8) > 0);
var isCtrlKey=((modifiers & 2) > 0);
var speed=this.vwr.getFloat$I(570425374) * (isCtrlKey ? 10 : 1);
switch (keyCode) {
case 46:
this.tm.navX=this.tm.navY=this.tm.navZ=0;
this.tm.homePosition$Z(true);
return;
case 32:
if (!this.tm.navOn) return;
this.tm.navX=this.tm.navY=this.tm.navZ=0;
return;
case 38:
if (this.tm.navOn) {
if (isAltKey) {
this.tm.navY += this.multiplier;
value=this.tm.navY;
key="navY";
} else {
this.tm.navZ += this.multiplier;
value=this.tm.navZ;
key="navZ";
}break;
}if (isShiftKey) {
this.tm.navigationOffset.y -= 2 * this.multiplier;
this.tm.navMode=2;
break;
}if (isAltKey) {
this.tm.rotateXRadians$F$javajs_util_BS(0.017453292 * -0.2 * this.multiplier , null);
this.tm.navMode=3;
break;
}this.tm.modelCenterOffset -= speed * (this.vwr.getBoolean$I(603979890) ? 1 : this.multiplier);
this.tm.navMode=4;
break;
case 40:
if (this.tm.navOn) {
if (isAltKey) {
this.tm.navY -= this.multiplier;
value=this.tm.navY;
key="navY";
} else {
this.tm.navZ -= this.multiplier;
value=this.tm.navZ;
key="navZ";
}break;
}if (isShiftKey) {
this.tm.navigationOffset.y += 2 * this.multiplier;
this.tm.navMode=2;
break;
}if (isAltKey) {
this.tm.rotateXRadians$F$javajs_util_BS(0.017453292 * 0.2 * this.multiplier , null);
this.tm.navMode=3;
break;
}this.tm.modelCenterOffset += speed * (this.vwr.getBoolean$I(603979890) ? 1 : this.multiplier);
this.tm.navMode=4;
break;
case 37:
if (this.tm.navOn) {
this.tm.navX -= this.multiplier;
value=this.tm.navX;
key="navX";
break;
}if (isShiftKey) {
this.tm.navigationOffset.x -= 2 * this.multiplier;
this.tm.navMode=2;
break;
}this.tm.rotateYRadians$F$javajs_util_BS(0.017453292 * 3 * -0.2 * this.multiplier , null);
this.tm.navMode=3;
break;
case 39:
if (this.tm.navOn) {
this.tm.navX += this.multiplier;
value=this.tm.navX;
key="navX";
break;
}if (isShiftKey) {
this.tm.navigationOffset.x += 2 * this.multiplier;
this.tm.navMode=2;
break;
}this.tm.rotateYRadians$F$javajs_util_BS(0.017453292 * 3 * 0.2 * this.multiplier , null);
this.tm.navMode=3;
break;
default:
this.tm.navigating=false;
this.tm.navMode=0;
return;
}
if (key != null ) this.vwr.g.setF$S$F(key, value);
this.tm.navigating=true;
this.tm.finalizeTransformParameters$();
});

Clazz.newMeth(C$, 'setNavigationDepthPercent$F', function (percent) {
this.vwr.g.setF$S$F("navigationDepth", percent);
this.tm.calcCameraFactors$();
this.tm.modelCenterOffset=this.tm.referencePlaneOffset - (1 - percent / 50) * this.tm.modelRadiusPixels;
this.tm.calcCameraFactors$();
this.tm.navMode=-1;
});

Clazz.newMeth(C$, 'calcNavigationDepthPercent', function () {
this.tm.calcCameraFactors$();
this.tm.navigationDepthPercent=(this.tm.modelRadiusPixels == 0  ? 50 : 50 * (1 + (this.tm.modelCenterOffset - this.tm.referencePlaneOffset) / this.tm.modelRadiusPixels));
}, p$1);

Clazz.newMeth(C$, 'getNavigationState$', function () {
return "# navigation state;\nnavigate 0 center " + $I$(4).eP$javajs_util_T3(this.tm.navigationCenter) + ";\nnavigate 0 translate " + new Float(this.tm.getNavigationOffsetPercent$C("X")).toString() + " " + new Float(this.tm.getNavigationOffsetPercent$C("Y")).toString() + ";\nset navigationDepth " + new Float(this.tm.navigationDepthPercent).toString() + ";\nset navigationSlab " + new Float(p$1.getNavigationSlabOffsetPercent.apply(this, [])).toString() + ";\n\n" ;
});

Clazz.newMeth(C$, 'getNavigationSlabOffsetPercent', function () {
this.tm.calcCameraFactors$();
return 50 * this.tm.navigationSlabOffset / this.tm.modelRadiusPixels;
}, p$1);

Clazz.newMeth(C$, 'navigateAxis$javajs_util_V3$F', function (rotAxis, degrees) {
if (degrees == 0 ) return;
this.tm.rotateAxisAngle$javajs_util_V3$F(rotAxis, (degrees / 57.29577951308232));
this.tm.navMode=3;
this.tm.navigating=true;
this.tm.finalizeTransformParameters$();
this.tm.navigating=false;
});

Clazz.newMeth(C$, 'navTranslatePercentOrTo$F$F$F', function (seconds, x, y) {
var pt1=$I$(1).new3$F$F$F(x, y, 0);
if (seconds >= 0 ) p$1.setNavPercent$javajs_util_P3.apply(this, [pt1]);
if (!Float.isNaN$F(pt1.x)) this.tm.navigationOffset.x=pt1.x;
if (!Float.isNaN$F(pt1.y)) this.tm.navigationOffset.y=pt1.y;
this.tm.navMode=2;
this.tm.navigating=true;
this.tm.finalizeTransformParameters$();
this.tm.navigating=false;
});

Clazz.newMeth(C$, 'oops$Exception', function (e) {
C$.superclazz.prototype.oops$Exception.apply(this, [e]);
this.tm.navigating=false;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
