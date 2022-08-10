(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.M4','javajs.util.V3','javajs.util.A4','javajs.util.M3','javajs.util.P3i','org.jmol.util.Point3fi','org.jmol.c.STER','org.jmol.api.Interface','javajs.util.SB','javajs.util.Quat','java.util.Hashtable','org.jmol.util.Escape','javajs.util.P4','org.jmol.util.Logger']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TransformManager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.perspectiveModel=11;
this.navigationCenter=Clazz.new_($I$(1,1));
this.navigationOffset=Clazz.new_($I$(1,1));
this.navigationShiftXY=Clazz.new_($I$(1,1));
this.matrixTemp=Clazz.new_($I$(2,1));
this.vectorTemp=Clazz.new_($I$(3,1));
this.haveNotifiedNaN=false;
this.spinY=30;
this.spinFps=30;
this.navFps=NaN;
this.isSpinInternal=false;
this.isSpinFixed=false;
this.isSpinSelected=false;
this.fixedRotationOffset=Clazz.new_($I$(1,1));
this.fixedRotationCenter=Clazz.new_($I$(1,1));
this.perspectiveOffset=Clazz.new_($I$(1,1));
this.perspectiveShiftXY=Clazz.new_($I$(1,1));
this.rotationCenterDefault=Clazz.new_($I$(1,1));
this.fixedRotationAxis=Clazz.new_($I$(4,1));
this.internalRotationAxis=Clazz.new_($I$(4,1));
this.internalRotationCenter=$I$(1).new3$F$F$F(0, 0, 0);
this.internalRotationAngle=0;
this.matrixRotate=Clazz.new_($I$(5,1));
this.matrixTemp3=Clazz.new_($I$(5,1));
this.matrixTemp4=Clazz.new_($I$(2,1));
this.axisangleT=Clazz.new_($I$(4,1));
this.vectorT=Clazz.new_($I$(3,1));
this.vectorT2=Clazz.new_($I$(3,1));
this.pointT2=Clazz.new_($I$(1,1));
this.rotationAxis=Clazz.new_($I$(3,1));
this.rotationRate=0;
this.fixedTranslation=Clazz.new_($I$(1,1));
this.camera=Clazz.new_($I$(1,1));
this.cameraSetting=Clazz.new_($I$(1,1));
this.xTranslationFraction=0.5;
this.yTranslationFraction=0.5;
this.zoomEnabled=true;
this.zmPct=100;
this.zmPctSet=100;
this.zSlabPercentSetting=50;
this.zDepthPercentSetting=0;
this.slabRange=0.0;
this.slabPlane=null;
this.depthPlane=null;
this.perspectiveDepth=true;
this.scale3D=false;
this.cameraDepth=3.0;
this.cameraDepthSetting=3.0;
this.cameraDistance=1000.0;
this.matrixTransform=Clazz.new_($I$(2,1));
this.matrixTransformInv=Clazz.new_($I$(2,1));
this.fScrPt=Clazz.new_($I$(1,1));
this.iScrPt=Clazz.new_($I$(6,1));
this.ptVibTemp=Clazz.new_($I$(7,1));
this.navigating=false;
this.mode=0;
this.defaultMode=0;
this.untransformedPoint=Clazz.new_($I$(1,1));
this.ptTest1=Clazz.new_($I$(1,1));
this.ptTest2=Clazz.new_($I$(1,1));
this.ptTest3=Clazz.new_($I$(1,1));
this.aaTest1=Clazz.new_($I$(4,1));
this.matrixTest=Clazz.new_($I$(5,1));
this.vibrationT=Clazz.new_($I$(1,1));
this.stereoMode=$I$(8).NONE;
this.stereoDegrees=NaN;
this.matrixStereo=Clazz.new_($I$(5,1));
this.frameOffset=Clazz.new_($I$(1,1));
this.ptOffset=Clazz.new_($I$(1,1));
this.navMode=1;
this.zoomFactor=3.4028235E38;
},1);

C$.$fields$=[['Z',['haveNotifiedNaN','isSpinInternal','isSpinFixed','isSpinSelected','doTransform4D','zoomEnabled','slabEnabled','zShadeEnabled','internalSlab','perspectiveDepth','scale3D','antialias','useZoomLarge','zoomHeight','navigating','spinOn','navOn','spinIsGesture','vibrationOn','stereoDoubleDTI','stereoDoubleFull','stereoFrame','windowCentered'],'F',['cameraScaleFactor','referencePlaneOffset','aperatureAngle','cameraDistanceFromCenter','modelCenterOffset','modelRadius','modelRadiusPixels','navigationDepthPercent','spinX','spinY','spinZ','spinFps','navX','navY','navZ','navFps','rotationRadiusDefault','internalRotationAngle','rotationRate','xTranslationFraction','yTranslationFraction','prevZoomSetting','previousX','previousY','zmPct','zmPctSet','zoomRatio','slabRange','cameraDepth','cameraDepthSetting','visualRangeAngstroms','cameraDistance','scalePixelsPerAngstrom','scaleDefaultPixelsPerAngstrom','scale3DAngstromsPerInch','vibrationPeriod','vibrationScale','stereoDegrees','stereoRadians','zoomFactor','navigationSlabOffset'],'I',['perspectiveModel','slabPercentSetting','depthPercentSetting','slabValue','depthValue','zSlabPercentSetting','zDepthPercentSetting','zSlabValue','zDepthValue','width','height','screenPixelCount','screenWidth','screenHeight','mode','defaultMode','vibrationPeriodMs','navMode'],'O',['vwr','org.jmol.viewer.Viewer','movetoThread','org.jmol.thread.JmolThread','+vibrationThread','+spinThread','navigationCenter','javajs.util.P3','+navigationOffset','+navigationShiftXY','matrixTemp','javajs.util.M4','vectorTemp','javajs.util.V3','fixedRotationOffset','javajs.util.P3','+fixedRotationCenter','+perspectiveOffset','+perspectiveShiftXY','+rotationCenterDefault','fixedRotationAxis','javajs.util.A4','+internalRotationAxis','internalTranslation','javajs.util.V3','internalRotationCenter','javajs.util.P3','matrixRotate','javajs.util.M3','+matrixTemp3','matrixTemp4','javajs.util.M4','axisangleT','javajs.util.A4','vectorT','javajs.util.V3','+vectorT2','pointT2','javajs.util.P3','rotationAxis','javajs.util.V3','fixedTranslation','javajs.util.P3','+camera','+cameraSetting','+zSlabPoint','slabPlane','javajs.util.P4','+depthPlane','matrixTransform','javajs.util.M4','+matrixTransformInv','fScrPt','javajs.util.P3','iScrPt','javajs.util.P3i','ptVibTemp','org.jmol.util.Point3fi','untransformedPoint','javajs.util.P3','+ptTest1','+ptTest2','+ptTest3','aaTest1','javajs.util.A4','matrixTest','javajs.util.M3','vibrationT','javajs.util.P3','stereoMode','org.jmol.c.STER','stereoColors','int[]','matrixStereo','javajs.util.M3','frameOffset','javajs.util.P3','frameOffsets','javajs.util.P3[]','bsFrameOffsets','javajs.util.BS','+bsSelectedAtoms','ptOffset','javajs.util.P3','nav','org.jmol.api.JmolNavigatorInterface']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getTransformManager$org_jmol_viewer_Viewer$I$I$Z', function (vwr, width, height, is4D) {
var me=(is4D ? $I$(9).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.viewer.TransformManager4D", vwr, "tm") : Clazz.new_(C$));
me.vwr=vwr;
me.setScreenParameters$I$I$Z$Z$Z$Z(width, height, true, false, true, true);
return me;
}, 1);

Clazz.newMeth(C$, 'setDefaultPerspective$', function () {
this.setCameraDepthPercent$F$Z(3.0, true);
this.setPerspectiveDepth$Z(true);
this.setStereoDegrees$F(-5);
this.visualRangeAngstroms=5.0;
this.setSpinOff$();
this.setVibrationPeriod$F(0);
});

Clazz.newMeth(C$, 'homePosition$Z', function (resetSpin) {
if (resetSpin) this.setSpinOff$();
this.setNavOn$Z(false);
this.navFps=10;
this.navX=this.navY=this.navZ=0;
this.rotationCenterDefault.setT$javajs_util_T3(this.vwr.getBoundBoxCenter$());
p$1.setFixedRotationCenter$javajs_util_T3.apply(this, [this.rotationCenterDefault]);
this.rotationRadiusDefault=this.setRotationRadius$F$Z(0, true);
this.windowCentered=true;
p$1.setRotationCenterAndRadiusXYZ$javajs_util_T3$Z.apply(this, [null, true]);
this.resetRotation$();
var m=this.vwr.ms.getInfoM$S("defaultOrientationMatrix");
if (m != null ) this.setRotation$javajs_util_M3(m);
this.setZoomEnabled$Z(true);
this.zoomToPercent$F(this.vwr.g.modelKitMode ? 50 : 100);
this.zmPct=this.zmPctSet;
this.slabReset$();
p$1.resetFitToScreen$Z.apply(this, [true]);
if (this.vwr.isJmolDataFrame$()) {
this.fixedRotationCenter.set$F$F$F(0, 0, 0);
} else {
if (this.vwr.g.axesOrientationRasmol) this.matrixRotate.setAsXRotation$F(3.1415927);
}this.vwr.stm.saveOrientation$S$FA("default", null);
if (this.mode == 1) this.setNavigationMode$Z(true);
});

Clazz.newMeth(C$, 'setRotation$javajs_util_M3', function (m) {
if (m.isRotation$()) this.matrixRotate.setM3$javajs_util_M34(m);
 else this.resetRotation$();
});

Clazz.newMeth(C$, 'resetRotation$', function () {
this.matrixRotate.setScale$F(1);
});

Clazz.newMeth(C$, 'clearThreads$', function () {
p$1.clearVibration.apply(this, []);
p$1.clearSpin.apply(this, []);
this.setNavOn$Z(false);
this.stopMotion$();
});

Clazz.newMeth(C$, 'clear$', function () {
this.fixedRotationCenter.set$F$F$F(0, 0, 0);
this.navigating=false;
this.slabPlane=null;
this.depthPlane=null;
this.zSlabPoint=null;
this.resetNavigationPoint$Z(true);
});

Clazz.newMeth(C$, 'setFixedRotationCenter$javajs_util_T3', function (center) {
if (center == null ) return;
this.fixedRotationCenter.setT$javajs_util_T3(center);
}, p$1);

Clazz.newMeth(C$, 'setRotationPointXY$javajs_util_P3', function (center) {
var newCenterScreen=this.transformPt$javajs_util_T3(center);
this.fixedTranslation.set$F$F$F(newCenterScreen.x, newCenterScreen.y, 0);
});

Clazz.newMeth(C$, 'spinXYBy$I$I$F', function (xDelta, yDelta, speed) {
if (xDelta == 0 && yDelta == 0 ) {
if (this.spinThread != null  && this.spinIsGesture ) p$1.clearSpin.apply(this, []);
return;
}p$1.clearSpin.apply(this, []);
var pt1=$I$(1).newP$javajs_util_T3(this.fixedRotationCenter);
var ptScreen=Clazz.new_($I$(1,1));
this.transformPt3f$javajs_util_T3$javajs_util_P3(pt1, ptScreen);
var pt2=$I$(1).new3$F$F$F(-yDelta, xDelta, 0);
pt2.add$javajs_util_T3(ptScreen);
this.unTransformPoint$javajs_util_T3$javajs_util_T3(pt2, pt2);
this.vwr.setInMotion$Z(false);
this.rotateAboutPointsInternal$org_jmol_api_JmolScriptEvaluator$javajs_util_T3$javajs_util_T3$F$F$Z$Z$javajs_util_BS$Z$javajs_util_V3$javajs_util_Lst$FA$javajs_util_M4(null, pt2, pt1, 10 * speed, NaN, false, true, null, true, null, null, null, null);
});

Clazz.newMeth(C$, 'rotateXYBy$F$F$javajs_util_BS', function (degX, degY, bsAtoms) {
this.rotate3DBall$F$F$javajs_util_BS(degX, degY, bsAtoms);
});

Clazz.newMeth(C$, 'rotateZBy$I$I$I', function (zDelta, x, y) {
if (x != 2147483647 && y != 2147483647 ) p$1.resetXYCenter$I$I.apply(this, [x, y]);
this.rotateZRadians$F((zDelta / 57.29577951308232));
});

Clazz.newMeth(C$, 'applyRotation$javajs_util_M3$Z$javajs_util_BS$javajs_util_V3$Z$javajs_util_M4', function (mNew, isInternal, bsAtoms, translation, translationOnly, m4) {
if (bsAtoms == null ) {
this.matrixRotate.mul2$javajs_util_M3$javajs_util_M3(mNew, this.matrixRotate);
return;
}this.vwr.moveAtoms$javajs_util_M4$javajs_util_M3$javajs_util_M3$javajs_util_V3$javajs_util_P3$Z$javajs_util_BS$Z(m4, mNew, this.matrixRotate, translation, this.internalRotationCenter, isInternal, bsAtoms, translationOnly);
if (translation != null ) {
this.internalRotationCenter.add$javajs_util_T3(translation);
}}, p$1);

Clazz.newMeth(C$, 'rotate3DBall$F$F$javajs_util_BS', function (xDeg, yDeg, bsAtoms) {
if (this.matrixTemp3.setAsBallRotation$F$F$F(0.017453292, -yDeg, -xDeg)) p$1.applyRotation$javajs_util_M3$Z$javajs_util_BS$javajs_util_V3$Z$javajs_util_M4.apply(this, [this.matrixTemp3, false, bsAtoms, null, false, null]);
});

Clazz.newMeth(C$, 'rotateXRadians$F$javajs_util_BS', function (angleRadians, bsAtoms) {
p$1.applyRotation$javajs_util_M3$Z$javajs_util_BS$javajs_util_V3$Z$javajs_util_M4.apply(this, [this.matrixTemp3.setAsXRotation$F(angleRadians), false, bsAtoms, null, false, null]);
});

Clazz.newMeth(C$, 'rotateYRadians$F$javajs_util_BS', function (angleRadians, bsAtoms) {
p$1.applyRotation$javajs_util_M3$Z$javajs_util_BS$javajs_util_V3$Z$javajs_util_M4.apply(this, [this.matrixTemp3.setAsYRotation$F(angleRadians), false, bsAtoms, null, false, null]);
});

Clazz.newMeth(C$, 'rotateZRadians$F', function (angleRadians) {
p$1.applyRotation$javajs_util_M3$Z$javajs_util_BS$javajs_util_V3$Z$javajs_util_M4.apply(this, [this.matrixTemp3.setAsZRotation$F(angleRadians), false, null, null, false, null]);
});

Clazz.newMeth(C$, 'rotateAxisAngle$javajs_util_V3$F', function (rotAxis, radians) {
this.axisangleT.setVA$javajs_util_V3$F(rotAxis, radians);
p$1.rotateAxisAngle2$javajs_util_A4$javajs_util_BS.apply(this, [this.axisangleT, null]);
});

Clazz.newMeth(C$, 'rotateAxisAngle2$javajs_util_A4$javajs_util_BS', function (axisAngle, bsAtoms) {
p$1.applyRotation$javajs_util_M3$Z$javajs_util_BS$javajs_util_V3$Z$javajs_util_M4.apply(this, [this.matrixTemp3.setAA$javajs_util_A4(axisAngle), false, bsAtoms, null, false, null]);
}, p$1);

Clazz.newMeth(C$, 'rotateAxisAngleAtCenter$org_jmol_api_JmolScriptEvaluator$javajs_util_P3$javajs_util_V3$F$F$Z$javajs_util_BS', function (eval, rotCenter, rotAxis, degreesPerSecond, endDegrees, isSpin, bsAtoms) {
if (rotCenter != null ) this.moveRotationCenter$javajs_util_P3$Z(rotCenter, true);
if (isSpin) this.setSpinOff$();
this.setNavOn$Z(false);
if (this.vwr.headless) {
if (isSpin && endDegrees == 3.4028235E38  ) return false;
isSpin=false;
}if (Float.isNaN$F(degreesPerSecond) || degreesPerSecond == 0   || endDegrees == 0  ) return false;
if (rotCenter != null ) {
this.setRotationPointXY$javajs_util_P3(rotCenter);
}p$1.setFixedRotationCenter$javajs_util_T3.apply(this, [rotCenter]);
this.rotationAxis.setT$javajs_util_T3(rotAxis);
this.rotationRate=degreesPerSecond;
if (isSpin) {
this.fixedRotationAxis.setVA$javajs_util_V3$F(rotAxis, degreesPerSecond * 0.017453292);
this.isSpinInternal=false;
this.isSpinFixed=true;
this.isSpinSelected=(bsAtoms != null );
p$1.setSpin$org_jmol_api_JmolScriptEvaluator$Z$F$javajs_util_Lst$FA$javajs_util_BS$Z.apply(this, [eval, true, endDegrees, null, null, bsAtoms, false]);
return (endDegrees != 3.4028235E38 );
}var radians=endDegrees * 0.017453292;
this.fixedRotationAxis.setVA$javajs_util_V3$F(rotAxis, endDegrees);
this.rotateAxisAngleRadiansFixed$F$javajs_util_BS(radians, bsAtoms);
return true;
});

Clazz.newMeth(C$, 'rotateAxisAngleRadiansFixed$F$javajs_util_BS', function (angleRadians, bsAtoms) {
this.axisangleT.setAA$javajs_util_A4(this.fixedRotationAxis);
this.axisangleT.angle=angleRadians;
p$1.rotateAxisAngle2$javajs_util_A4$javajs_util_BS.apply(this, [this.axisangleT, bsAtoms]);
});

Clazz.newMeth(C$, 'rotateAboutPointsInternal$org_jmol_api_JmolScriptEvaluator$javajs_util_T3$javajs_util_T3$F$F$Z$Z$javajs_util_BS$Z$javajs_util_V3$javajs_util_Lst$FA$javajs_util_M4', function (eval, point1, point2, degreesPerSecond, endDegrees, isClockwise, isSpin, bsAtoms, isGesture, translation, finalPoints, dihedralList, m4) {
if (isSpin) this.setSpinOff$();
this.setNavOn$Z(false);
if (dihedralList == null  && (translation == null  || translation.length$() < 0.001  )  && (isSpin ? Float.isNaN$F(degreesPerSecond) || degreesPerSecond == 0   : endDegrees == 0 ) ) return false;
var axis=null;
if (dihedralList == null ) {
axis=$I$(3).newVsub$javajs_util_T3$javajs_util_T3(point2, point1);
if (isClockwise) axis.scale$F(-1.0);
this.internalRotationCenter.setT$javajs_util_T3(point1);
this.rotationAxis.setT$javajs_util_T3(axis);
this.internalTranslation=(translation == null  ? null : $I$(3).newV$javajs_util_T3(translation));
}var isSelected=(bsAtoms != null );
if (isSpin) {
if (dihedralList == null ) {
if (endDegrees == 0 ) endDegrees=NaN;
if (Float.isNaN$F(endDegrees)) {
this.rotationRate=degreesPerSecond;
} else {
var nFrames=((Math.abs(endDegrees) / Math.abs(degreesPerSecond) * this.spinFps + 0.5)|0);
this.rotationRate=degreesPerSecond=endDegrees / nFrames * this.spinFps;
if (translation != null ) this.internalTranslation.scale$F(1.0 / nFrames);
}this.internalRotationAxis.setVA$javajs_util_V3$F(axis, (Float.isNaN$F(this.rotationRate) ? 0 : this.rotationRate) * 0.017453292);
this.isSpinInternal=true;
this.isSpinFixed=false;
this.isSpinSelected=isSelected;
} else {
endDegrees=degreesPerSecond;
}p$1.setSpin$org_jmol_api_JmolScriptEvaluator$Z$F$javajs_util_Lst$FA$javajs_util_BS$Z.apply(this, [eval, true, endDegrees, finalPoints, dihedralList, bsAtoms, isGesture]);
return !Float.isNaN$F(endDegrees);
}var radians=endDegrees * 0.017453292;
this.internalRotationAxis.setVA$javajs_util_V3$F(axis, radians);
this.rotateAxisAngleRadiansInternal$F$javajs_util_BS$javajs_util_M4(radians, bsAtoms, m4);
return false;
});

Clazz.newMeth(C$, 'rotateAxisAngleRadiansInternal$F$javajs_util_BS$javajs_util_M4', function (radians, bsAtoms, m4) {
this.internalRotationAngle=radians;
this.vectorT.set$F$F$F(this.internalRotationAxis.x, this.internalRotationAxis.y, this.internalRotationAxis.z);
this.matrixRotate.rotate2$javajs_util_T3$javajs_util_T3(this.vectorT, this.vectorT2);
this.axisangleT.setVA$javajs_util_V3$F(this.vectorT2, radians);
p$1.applyRotation$javajs_util_M3$Z$javajs_util_BS$javajs_util_V3$Z$javajs_util_M4.apply(this, [this.matrixTemp3.setAA$javajs_util_A4(this.axisangleT), true, bsAtoms, this.internalTranslation, radians > 1000000.0 , m4]);
if (bsAtoms == null ) this.getNewFixedRotationCenter$();
});

Clazz.newMeth(C$, 'getNewFixedRotationCenter$', function () {
this.axisangleT.setAA$javajs_util_A4(this.internalRotationAxis);
this.axisangleT.angle=-this.internalRotationAngle;
this.matrixTemp4.setToAA$javajs_util_A4(this.axisangleT);
this.vectorT.setT$javajs_util_T3(this.internalRotationCenter);
this.pointT2.sub2$javajs_util_T3$javajs_util_T3(this.fixedRotationCenter, this.vectorT);
var pt=this.matrixTemp4.rotTrans2$javajs_util_T3$javajs_util_T3(this.pointT2, Clazz.new_($I$(1,1)));
pt.add$javajs_util_T3(this.vectorT);
p$1.setRotationCenterAndRadiusXYZ$javajs_util_T3$Z.apply(this, [pt, false]);
});

Clazz.newMeth(C$, 'setTranslationFractions$', function () {
this.xTranslationFraction=this.fixedTranslation.x / this.width;
this.yTranslationFraction=this.fixedTranslation.y / this.height;
});

Clazz.newMeth(C$, 'centerAt$I$I$javajs_util_P3', function (x, y, pt) {
if (pt == null ) {
this.translateXYBy$I$I(x, y);
return;
}if (this.windowCentered) this.vwr.setBooleanProperty$S$Z("windowCentered", false);
this.fixedTranslation.x=x;
this.fixedTranslation.y=y;
p$1.setFixedRotationCenter$javajs_util_T3.apply(this, [pt]);
});

Clazz.newMeth(C$, 'percentToPixels$C$F', function (xyz, percent) {
switch (xyz.$c()) {
case 120:
return (Math.floor(percent / 100 * this.width)|0);
case 121:
return (Math.floor(percent / 100 * this.height)|0);
case 122:
return (Math.floor(percent / 100 * this.screenPixelCount)|0);
}
return 0;
});

Clazz.newMeth(C$, 'angstromsToPixels$F', function (distance) {
return (Math.floor(this.scalePixelsPerAngstrom * distance)|0);
});

Clazz.newMeth(C$, 'translateXYBy$I$I', function (xDelta, yDelta) {
this.fixedTranslation.x += xDelta;
this.fixedTranslation.y += yDelta;
this.setTranslationFractions$();
});

Clazz.newMeth(C$, 'setCamera$F$F', function (x, y) {
this.cameraSetting.set$F$F$F(x, y, (x == 0  && y == 0   ? 0 : 1));
});

Clazz.newMeth(C$, 'translateToPercent$C$F', function (type, percent) {
switch (type.$c()) {
case 120:
this.xTranslationFraction=0.5 + percent / 100;
this.fixedTranslation.x=this.width * this.xTranslationFraction;
return;
case 121:
this.yTranslationFraction=0.5 + percent / 100;
this.fixedTranslation.y=this.height * this.yTranslationFraction;
return;
case 122:
if (this.mode == 1) this.setNavigationDepthPercent$F(percent);
return;
}
});

Clazz.newMeth(C$, 'getTranslationXPercent$', function () {
return (this.width == 0 ? 0 : (this.fixedTranslation.x - this.width / 2.0) * 100 / this.width);
});

Clazz.newMeth(C$, 'getTranslationYPercent$', function () {
return (this.height == 0 ? 0 : (this.fixedTranslation.y - this.height / 2.0) * 100 / this.height);
});

Clazz.newMeth(C$, 'getTranslationScript$', function () {
var info="";
var f=this.getTranslationXPercent$();
if (f != 0.0 ) info += "translate x " + new Float(f).toString() + ";" ;
f=this.getTranslationYPercent$();
if (f != 0.0 ) info += "translate y " + new Float(f).toString() + ";" ;
return info;
});

Clazz.newMeth(C$, 'getOrientationText$I$Z', function (type, isBest) {
switch (type) {
case 4129:
return this.getMoveToText$F$Z(1, false);
case 1073742132:
var q=this.getRotationQ$();
if (isBest) q=q.inv$();
return q.toString();
case 1073742178:
var sb=Clazz.new_($I$(10,1));
var d=this.getTranslationXPercent$();
C$.truncate2$javajs_util_SB$F(sb, (isBest ? -d : d));
d=this.getTranslationYPercent$();
C$.truncate2$javajs_util_SB$F(sb, (isBest ? -d : d));
return sb.toString();
default:
return this.getMoveToText$F$Z(1, true) + "\n#OR\n" + p$1.getRotateZyzText$Z.apply(this, [true]) ;
}
});

Clazz.newMeth(C$, 'getRotationQ$', function () {
return $I$(11).newM$javajs_util_M3(this.matrixRotate);
});

Clazz.newMeth(C$, 'getOrientationInfo$', function () {
var info=Clazz.new_($I$(12,1));
info.put$O$O("moveTo", this.getMoveToText$F$Z(1, false));
info.put$O$O("center", "center " + p$1.getCenterText.apply(this, []));
info.put$O$O("centerPt", this.fixedRotationCenter);
var aa=Clazz.new_($I$(4,1));
aa.setM$javajs_util_M3(this.matrixRotate);
info.put$O$O("axisAngle", aa);
info.put$O$O("quaternion", this.getRotationQ$().toPoint4f$());
info.put$O$O("rotationMatrix", this.matrixRotate);
info.put$O$O("rotateZYZ", p$1.getRotateZyzText$Z.apply(this, [false]));
info.put$O$O("rotateXYZ", p$1.getRotateXyzText.apply(this, []));
info.put$O$O("transXPercent", Float.valueOf$F(this.getTranslationXPercent$()));
info.put$O$O("transYPercent", Float.valueOf$F(this.getTranslationYPercent$()));
info.put$O$O("zoom", Float.valueOf$F(this.zmPct));
info.put$O$O("modelRadius", Float.valueOf$F(this.modelRadius));
if (this.mode == 1) {
info.put$O$O("navigationCenter", "navigate center " + $I$(13).eP$javajs_util_T3(this.navigationCenter));
info.put$O$O("navigationOffsetXPercent", Float.valueOf$F(this.getNavigationOffsetPercent$C("X")));
info.put$O$O("navigationOffsetYPercent", Float.valueOf$F(this.getNavigationOffsetPercent$C("Y")));
info.put$O$O("navigationDepthPercent", Float.valueOf$F(this.navigationDepthPercent));
}return info;
});

Clazz.newMeth(C$, 'getRotation$javajs_util_M3', function (m) {
m.setM3$javajs_util_M34(this.matrixRotate);
});

Clazz.newMeth(C$, 'setZoomHeight$Z$Z', function (zoomHeight, zoomLarge) {
this.zoomHeight=zoomHeight;
this.scaleFitToScreen$Z$Z$Z$Z(false, zoomLarge, false, true);
});

Clazz.newMeth(C$, 'zoomBy$I', function (pixels) {
if (pixels > 20) pixels=20;
 else if (pixels < -20) pixels=-20;
var deltaPercent=pixels * this.zmPctSet / 50;
if (deltaPercent == 0 ) deltaPercent=(pixels > 0 ? 1 : (deltaPercent < 0  ? -1 : 0));
this.zoomRatio=(deltaPercent + this.zmPctSet) / this.zmPctSet;
this.zmPctSet += deltaPercent;
});

Clazz.newMeth(C$, 'zoomByFactor$F$I$I', function (factor, x, y) {
if (factor <= 0  || !this.zoomEnabled ) return;
if (this.mode != 1) {
this.zoomRatio=factor;
this.zmPctSet *= factor;
p$1.resetXYCenter$I$I.apply(this, [x, y]);
} else if (p$1.getNav.apply(this, [])) {
this.nav.zoomByFactor$F$I$I(factor, x, y);
}});

Clazz.newMeth(C$, 'zoomToPercent$F', function (percentZoom) {
this.zmPctSet=percentZoom;
this.zoomRatio=0;
});

Clazz.newMeth(C$, 'translateZBy$I', function (pixels) {
if (pixels >= this.screenPixelCount) return;
var sppa=this.scalePixelsPerAngstrom / (1 - pixels * 1.0 / this.screenPixelCount);
if (sppa >= this.screenPixelCount ) return;
var newZoomPercent=sppa / this.scaleDefaultPixelsPerAngstrom * 100.0;
this.zoomRatio=newZoomPercent / this.zmPctSet;
this.zmPctSet=newZoomPercent;
});

Clazz.newMeth(C$, 'resetXYCenter$I$I', function (x, y) {
if (x == 2147483647 || y == 2147483647 ) return;
if (this.windowCentered) this.vwr.setBooleanProperty$S$Z("windowCentered", false);
var pt=Clazz.new_($I$(1,1));
this.transformPt3f$javajs_util_T3$javajs_util_P3(this.fixedRotationCenter, pt);
pt.set$F$F$F(x, y, pt.z);
this.unTransformPoint$javajs_util_T3$javajs_util_T3(pt, pt);
this.fixedTranslation.set$F$F$F(x, y, 0);
p$1.setFixedRotationCenter$javajs_util_T3.apply(this, [pt]);
}, p$1);

Clazz.newMeth(C$, 'zoomByPercent$F', function (percentZoom) {
var deltaPercent=percentZoom * this.zmPctSet / 100;
if (deltaPercent == 0 ) deltaPercent=(percentZoom < 0 ) ? -1 : 1;
this.zoomRatio=(deltaPercent + this.zmPctSet) / this.zmPctSet;
this.zmPctSet += deltaPercent;
});

Clazz.newMeth(C$, 'setScaleAngstromsPerInch$F', function (angstromsPerInch) {
this.scale3D=(angstromsPerInch > 0 );
if (this.scale3D) this.scale3DAngstromsPerInch=angstromsPerInch;
this.perspectiveDepth=!this.scale3D;
});

Clazz.newMeth(C$, 'setSlabRange$F', function (value) {
this.slabRange=value;
});

Clazz.newMeth(C$, 'setSlabEnabled$Z', function (slabEnabled) {
this.vwr.g.setB$S$Z("slabEnabled", this.slabEnabled=slabEnabled);
});

Clazz.newMeth(C$, 'setZShadeEnabled$Z', function (zShadeEnabled) {
this.zShadeEnabled=zShadeEnabled;
this.vwr.g.setB$S$Z("zShade", zShadeEnabled);
});

Clazz.newMeth(C$, 'setZoomEnabled$Z', function (zoomEnabled) {
this.zoomEnabled=zoomEnabled;
this.vwr.g.setB$S$Z("zoomEnabled", zoomEnabled);
});

Clazz.newMeth(C$, 'slabReset$', function () {
this.slabToPercent$I(100);
this.depthToPercent$I(0);
this.depthPlane=null;
this.slabPlane=null;
this.setSlabEnabled$Z(false);
this.setZShadeEnabled$Z(false);
p$1.slabDepthChanged.apply(this, []);
});

Clazz.newMeth(C$, 'getSlabPercentSetting$', function () {
return this.slabPercentSetting;
});

Clazz.newMeth(C$, 'slabDepthChanged', function () {
this.vwr.g.setI$S$I("slab", this.slabPercentSetting);
this.vwr.g.setI$S$I("depth", this.depthPercentSetting);
this.finalizeTransformParameters$();
}, p$1);

Clazz.newMeth(C$, 'slabByPercentagePoints$I', function (percentage) {
this.slabPlane=null;
if (percentage < 0 ? this.slabPercentSetting <= Math.max(0, this.depthPercentSetting) : this.slabPercentSetting >= 100) return;
this.slabPercentSetting+=percentage;
p$1.slabDepthChanged.apply(this, []);
if (this.depthPercentSetting >= this.slabPercentSetting) this.depthPercentSetting=this.slabPercentSetting - 1;
});

Clazz.newMeth(C$, 'depthByPercentagePoints$I', function (percentage) {
this.depthPlane=null;
if (percentage < 0 ? this.depthPercentSetting <= 0 : this.depthPercentSetting >= Math.min(100, this.slabPercentSetting)) return;
this.depthPercentSetting+=percentage;
if (this.slabPercentSetting <= this.depthPercentSetting) this.slabPercentSetting=this.depthPercentSetting + 1;
p$1.slabDepthChanged.apply(this, []);
});

Clazz.newMeth(C$, 'slabDepthByPercentagePoints$I', function (percentage) {
this.slabPlane=null;
this.depthPlane=null;
if (percentage < 0 ? this.slabPercentSetting <= Math.max(0, this.depthPercentSetting) : this.depthPercentSetting >= Math.min(100, this.slabPercentSetting)) return;
this.slabPercentSetting+=percentage;
this.depthPercentSetting+=percentage;
p$1.slabDepthChanged.apply(this, []);
});

Clazz.newMeth(C$, 'slabToPercent$I', function (percentSlab) {
this.slabPlane=null;
this.vwr.setFloatProperty$S$F("slabRange", 0);
this.slabPercentSetting=percentSlab;
if (this.depthPercentSetting >= this.slabPercentSetting) this.depthPercentSetting=this.slabPercentSetting - 1;
p$1.slabDepthChanged.apply(this, []);
});

Clazz.newMeth(C$, 'depthToPercent$I', function (percentDepth) {
this.depthPlane=null;
this.vwr.g.setI$S$I("depth", percentDepth);
this.depthPercentSetting=percentDepth;
if (this.slabPercentSetting <= this.depthPercentSetting) this.slabPercentSetting=this.depthPercentSetting + 1;
p$1.slabDepthChanged.apply(this, []);
});

Clazz.newMeth(C$, 'zSlabToPercent$I', function (percentSlab) {
this.zSlabPercentSetting=percentSlab;
if (this.zDepthPercentSetting > this.zSlabPercentSetting) this.zDepthPercentSetting=percentSlab;
});

Clazz.newMeth(C$, 'zDepthToPercent$I', function (percentDepth) {
this.zDepthPercentSetting=percentDepth;
if (this.zDepthPercentSetting > this.zSlabPercentSetting) this.zSlabPercentSetting=percentDepth;
});

Clazz.newMeth(C$, 'slabInternal$javajs_util_P4$Z', function (plane, isDepth) {
if (isDepth) {
this.depthPlane=plane;
this.depthPercentSetting=0;
} else {
this.slabPlane=plane;
this.slabPercentSetting=100;
}p$1.slabDepthChanged.apply(this, []);
});

Clazz.newMeth(C$, 'setSlabDepthInternal$Z', function (isDepth) {
if (isDepth) this.depthPlane=null;
 else this.slabPlane=null;
this.finalizeTransformParameters$();
this.slabInternal$javajs_util_P4$Z(p$1.getSlabDepthPlane$Z.apply(this, [isDepth]), isDepth);
});

Clazz.newMeth(C$, 'getSlabDepthPlane$Z', function (isDepth) {
if (isDepth) {
if (this.depthPlane != null ) return this.depthPlane;
} else if (this.slabPlane != null ) {
return this.slabPlane;
}var m=this.matrixTransform;
var plane=$I$(14,"new4$F$F$F$F",[-m.m20, -m.m21, -m.m22, -m.m23 + (isDepth ? this.depthValue : this.slabValue)]);
return plane;
}, p$1);

Clazz.newMeth(C$, 'getCameraFactors$', function () {
this.aperatureAngle=(Math.atan2(this.screenPixelCount / 2.0, this.referencePlaneOffset) * 2 * 180  / 3.141592653589793);
this.cameraDistanceFromCenter=this.referencePlaneOffset / this.scalePixelsPerAngstrom;
var ptRef=$I$(1,"new3$F$F$F",[(this.screenWidth/2|0), (this.screenHeight/2|0), this.referencePlaneOffset]);
this.unTransformPoint$javajs_util_T3$javajs_util_T3(ptRef, ptRef);
var ptCamera=$I$(1,"new3$F$F$F",[(this.screenWidth/2|0), (this.screenHeight/2|0), 0]);
this.unTransformPoint$javajs_util_T3$javajs_util_T3(ptCamera, ptCamera);
ptCamera.sub$javajs_util_T3(this.fixedRotationCenter);
var pt=$I$(1,"new3$F$F$F",[(this.screenWidth/2|0), (this.screenHeight/2|0), this.cameraDistanceFromCenter * this.scalePixelsPerAngstrom]);
this.unTransformPoint$javajs_util_T3$javajs_util_T3(pt, pt);
pt.sub$javajs_util_T3(this.fixedRotationCenter);
ptCamera.add$javajs_util_T3(pt);
return Clazz.array($I$(1), -1, [ptRef, ptCamera, this.fixedRotationCenter, $I$(1).new3$F$F$F(this.cameraDistanceFromCenter, this.aperatureAngle, this.scalePixelsPerAngstrom)]);
});

Clazz.newMeth(C$, 'setPerspectiveDepth$Z', function (perspectiveDepth) {
if (this.perspectiveDepth == perspectiveDepth ) return;
this.perspectiveDepth=perspectiveDepth;
this.vwr.g.setB$S$Z("perspectiveDepth", perspectiveDepth);
p$1.resetFitToScreen$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'getPerspectiveDepth$', function () {
return this.perspectiveDepth;
});

Clazz.newMeth(C$, 'setCameraDepthPercent$F$Z', function (percent, resetSlab) {
this.resetNavigationPoint$Z(resetSlab);
var screenMultiples=(percent < 0  ? -percent / 100 : percent);
if (screenMultiples == 0 ) return;
this.cameraDepthSetting=screenMultiples;
this.vwr.g.setF$S$F("cameraDepth", this.cameraDepthSetting);
this.cameraDepth=NaN;
});

Clazz.newMeth(C$, 'getCameraDepth$', function () {
return this.cameraDepthSetting;
});

Clazz.newMeth(C$, 'setScreenParameters0$I$I$Z$Z$Z$Z', function (screenWidth, screenHeight, useZoomLarge, antialias, resetSlab, resetZoom) {
if (screenWidth == 2147483647) return;
this.screenWidth=screenWidth;
this.screenHeight=screenHeight;
this.useZoomLarge=useZoomLarge;
this.antialias=antialias;
this.width=(antialias ? screenWidth * 2 : screenWidth);
this.height=(antialias ? screenHeight * 2 : screenHeight);
this.scaleFitToScreen$Z$Z$Z$Z(false, useZoomLarge, resetSlab, resetZoom);
}, p$1);

Clazz.newMeth(C$, 'setAntialias$Z', function (TF) {
var isNew=(this.antialias != TF );
this.antialias=TF;
this.width=(this.antialias ? this.screenWidth * 2 : this.screenWidth);
this.height=(this.antialias ? this.screenHeight * 2 : this.screenHeight);
if (isNew) this.scaleFitToScreen$Z$Z$Z$Z(false, this.useZoomLarge, false, false);
});

Clazz.newMeth(C$, 'defaultScaleToScreen$F', function (radius) {
return this.screenPixelCount / 2.0 / radius ;
});

Clazz.newMeth(C$, 'resetFitToScreen$Z', function (andCenter) {
this.scaleFitToScreen$Z$Z$Z$Z(andCenter, this.vwr.g.zoomLarge, true, true);
}, p$1);

Clazz.newMeth(C$, 'scaleFitToScreen$Z$Z$Z$Z', function (andCenter, zoomLarge, resetSlab, resetZoom) {
if (this.width == 0 || this.height == 0 ) {
this.screenPixelCount=1;
} else {
this.fixedTranslation.set$F$F$F(this.width * (andCenter ? 0.5 : this.xTranslationFraction), this.height * (andCenter ? 0.5 : this.yTranslationFraction), 0);
this.setTranslationFractions$();
if (andCenter) this.camera.set$F$F$F(0, 0, 0);
if (resetZoom) this.resetNavigationPoint$Z(resetSlab);
if (this.zoomHeight) zoomLarge=(this.height > this.width);
this.screenPixelCount=(zoomLarge == (this.height > this.width)  ? this.height : this.width);
}if (this.screenPixelCount > 2) this.screenPixelCount-=2;
this.scaleDefaultPixelsPerAngstrom=this.defaultScaleToScreen$F(this.modelRadius);
});

Clazz.newMeth(C$, 'scaleToScreen$I$I', function (z, milliAngstroms) {
if (milliAngstroms == 0 || z < 2 ) return 0;
var pixelSize=this.scaleToPerspective$I$F(z, milliAngstroms * this.scalePixelsPerAngstrom / 1000);
return (pixelSize > 0  ? pixelSize : 1);
});

Clazz.newMeth(C$, 'unscaleToScreen$F$F', function (z, screenDistance) {
var d=screenDistance / this.scalePixelsPerAngstrom;
return (this.perspectiveDepth ? d / this.getPerspectiveFactor$F(z) : d);
});

Clazz.newMeth(C$, 'scaleToPerspective$I$F', function (z, sizeAngstroms) {
return (this.perspectiveDepth ? sizeAngstroms * this.getPerspectiveFactor$F(z) : sizeAngstroms);
});

Clazz.newMeth(C$, 'setNavigationMode$Z', function (TF) {
this.mode=(TF ? 1 : this.defaultMode);
this.resetNavigationPoint$Z(true);
});

Clazz.newMeth(C$, 'isNavigating$', function () {
return this.navigating || this.navOn ;
});

Clazz.newMeth(C$, 'finalizeTransformParameters$', function () {
this.haveNotifiedNaN=false;
this.fixedRotationOffset.setT$javajs_util_T3(this.fixedTranslation);
this.camera.setT$javajs_util_T3(this.cameraSetting);
this.internalSlab=this.slabEnabled && (this.slabPlane != null  || this.depthPlane != null  ) ;
var newZoom=this.getZoomSetting$();
if (this.zmPct != newZoom ) {
this.zmPct=newZoom;
if (!this.vwr.g.fontCaching) this.vwr.gdata.clearFontCache$();
}this.calcCameraFactors$();
this.calcTransformMatrix$();
if (this.mode == 1) this.calcNavigationPoint$();
 else this.calcSlabAndDepthValues$();
});

Clazz.newMeth(C$, 'getZoomSetting$', function () {
if (this.zmPctSet < 5 ) this.zmPctSet=5;
if (this.zmPctSet > 200000 ) this.zmPctSet=200000;
return (this.zoomEnabled || this.mode == 1  ? this.zmPctSet : 100);
});

Clazz.newMeth(C$, 'calcSlabAndDepthValues$', function () {
if (this.slabRange < 1 ) this.slabValue=this.zValueFromPercent$I(this.slabPercentSetting);
 else this.slabValue=(Math.floor(this.modelCenterOffset * this.slabRange / (2 * this.modelRadius) * (this.zmPctSet / 100))|0);
this.depthValue=this.zValueFromPercent$I(this.depthPercentSetting);
if (this.zSlabPercentSetting == this.zDepthPercentSetting) {
this.zSlabValue=this.slabValue;
this.zDepthValue=this.depthValue;
} else {
this.zSlabValue=this.zValueFromPercent$I(this.zSlabPercentSetting);
this.zDepthValue=this.zValueFromPercent$I(this.zDepthPercentSetting);
}if (this.zSlabPoint != null ) {
try {
this.transformPt3f$javajs_util_T3$javajs_util_P3(this.zSlabPoint, this.pointT2);
this.zSlabValue=(this.pointT2.z|0);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}this.vwr.g.setO$S$O("_slabPlane", $I$(13,"eP4$javajs_util_P4",[p$1.getSlabDepthPlane$Z.apply(this, [false])]));
this.vwr.g.setO$S$O("_depthPlane", $I$(13,"eP4$javajs_util_P4",[p$1.getSlabDepthPlane$Z.apply(this, [true])]));
if (this.slabEnabled) return;
this.slabValue=0;
this.depthValue=2147483647;
});

Clazz.newMeth(C$, 'zValueFromPercent$I', function (zPercent) {
return (Math.floor((1 - zPercent / 50.0) * this.modelRadiusPixels + this.modelCenterOffset)|0);
});

Clazz.newMeth(C$, 'calcTransformMatrix$', function () {
this.matrixTransform.setIdentity$();
this.vectorTemp.sub2$javajs_util_T3$javajs_util_T3(this.frameOffset, this.fixedRotationCenter);
this.matrixTransform.setTranslation$javajs_util_T3(this.vectorTemp);
this.matrixTemp.setToM3$javajs_util_M34(this.stereoFrame ? this.matrixStereo : this.matrixRotate);
this.matrixTransform.mul2$javajs_util_M4$javajs_util_M4(this.matrixTemp, this.matrixTransform);
this.matrixTemp.setIdentity$();
this.matrixTemp.m00=this.matrixTemp.m11=this.matrixTemp.m22=this.scalePixelsPerAngstrom;
this.matrixTemp.m11=this.matrixTemp.m22=-this.scalePixelsPerAngstrom;
this.matrixTransform.mul2$javajs_util_M4$javajs_util_M4(this.matrixTemp, this.matrixTransform);
this.matrixTransform.m23 += this.modelCenterOffset;
try {
this.matrixTransformInv.setM4$javajs_util_M4(this.matrixTransform).invert$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("ERROR INVERTING matrixTransform!");
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'rotatePoint$javajs_util_T3$javajs_util_T3', function (pt, ptRot) {
this.matrixRotate.rotate2$javajs_util_T3$javajs_util_T3(pt, ptRot);
ptRot.y=-ptRot.y;
});

Clazz.newMeth(C$, 'getScreenTemp$javajs_util_T3', function (ptXYZ) {
this.matrixTransform.rotTrans2$javajs_util_T3$javajs_util_T3(ptXYZ, this.fScrPt);
});

Clazz.newMeth(C$, 'transformPtScr$javajs_util_T3$javajs_util_P3i', function (ptXYZ, pointScreen) {
pointScreen.setT$javajs_util_T3i(this.transformPt$javajs_util_T3(ptXYZ));
});

Clazz.newMeth(C$, 'transformPtScrT3$javajs_util_T3$javajs_util_T3', function (ptXYZ, pointScreen) {
this.transformPt$javajs_util_T3(ptXYZ);
pointScreen.setT$javajs_util_T3(this.fScrPt);
});

Clazz.newMeth(C$, 'transformPt3f$javajs_util_T3$javajs_util_P3', function (ptXYZ, screen) {
p$1.applyPerspective$javajs_util_T3$javajs_util_T3.apply(this, [ptXYZ, ptXYZ]);
screen.setT$javajs_util_T3(this.fScrPt);
});

Clazz.newMeth(C$, 'transformPtNoClip$javajs_util_T3$javajs_util_T3', function (ptXYZ, pointScreen) {
p$1.applyPerspective$javajs_util_T3$javajs_util_T3.apply(this, [ptXYZ, null]);
pointScreen.setT$javajs_util_T3(this.fScrPt);
});

Clazz.newMeth(C$, 'transformPt$javajs_util_T3', function (ptXYZ) {
return p$1.applyPerspective$javajs_util_T3$javajs_util_T3.apply(this, [ptXYZ, this.internalSlab ? ptXYZ : null]);
});

Clazz.newMeth(C$, 'transformPtVib$javajs_util_P3$org_jmol_util_Vibration', function (ptXYZ, v) {
this.ptVibTemp.setT$javajs_util_T3(ptXYZ);
return p$1.applyPerspective$javajs_util_T3$javajs_util_T3.apply(this, [this.getVibrationPoint$org_jmol_util_Vibration$javajs_util_T3$F(v, this.ptVibTemp, NaN), ptXYZ]);
});

Clazz.newMeth(C$, 'getVibrationPoint$org_jmol_util_Vibration$javajs_util_T3$F', function (v, pt, scale) {
return v.setCalcPoint$javajs_util_T3$javajs_util_T3$F$F(pt, this.vibrationT, (Float.isNaN$F(scale) ? this.vibrationScale : scale), this.vwr.g.modulationScale);
});

Clazz.newMeth(C$, 'transformPt2D$javajs_util_T3', function (ptXyp) {
if (ptXyp.z == -3.4028235E38 ) {
this.iScrPt.x=(Math.floor(ptXyp.x / 100 * this.screenWidth)|0);
this.iScrPt.y=(Math.floor((1 - ptXyp.y / 100) * this.screenHeight)|0);
} else {
this.iScrPt.x=(ptXyp.x|0);
this.iScrPt.y=(this.screenHeight - (ptXyp.y|0));
}if (this.antialias) {
this.iScrPt.x<<=1;
this.iScrPt.y<<=1;
}this.matrixTransform.rotTrans2$javajs_util_T3$javajs_util_T3(this.fixedRotationCenter, this.fScrPt);
this.iScrPt.z=(this.fScrPt.z|0);
return this.iScrPt;
});

Clazz.newMeth(C$, 'applyPerspective$javajs_util_T3$javajs_util_T3', function (ptXYZ, ptRef) {
this.getScreenTemp$javajs_util_T3(ptXYZ);
var z=this.fScrPt.z;
if (Float.isNaN$F(z)) {
if (!this.haveNotifiedNaN && $I$(15).debugging ) $I$(15).debug$S("NaN seen in TransformPoint");
this.haveNotifiedNaN=true;
z=this.fScrPt.z=1;
} else if (z <= 0 ) {
z=this.fScrPt.z=1;
}switch (this.mode) {
case 1:
this.fScrPt.x -= this.navigationShiftXY.x;
this.fScrPt.y -= this.navigationShiftXY.y;
break;
case 2:
this.fScrPt.x += this.perspectiveShiftXY.x;
this.fScrPt.y += this.perspectiveShiftXY.y;
break;
}
if (this.perspectiveDepth) {
var factor=this.getPerspectiveFactor$F(z);
this.fScrPt.x *= factor;
this.fScrPt.y *= factor;
}switch (this.mode) {
case 1:
this.fScrPt.x += this.navigationOffset.x;
this.fScrPt.y += this.navigationOffset.y;
break;
case 2:
this.fScrPt.x -= this.perspectiveShiftXY.x;
this.fScrPt.y -= this.perspectiveShiftXY.y;
case 0:
this.fScrPt.x += this.fixedRotationOffset.x;
this.fScrPt.y += this.fixedRotationOffset.y;
break;
}
if (Float.isNaN$F(this.fScrPt.x) && !this.haveNotifiedNaN ) {
if ($I$(15).debugging) $I$(15).debug$S("NaN found in transformPoint ");
this.haveNotifiedNaN=true;
}this.iScrPt.set$I$I$I((this.fScrPt.x|0), (this.fScrPt.y|0), (this.fScrPt.z|0));
if (ptRef != null  && this.xyzIsSlabbedInternal$javajs_util_T3(ptRef) ) this.fScrPt.z=this.iScrPt.z=1;
return this.iScrPt;
}, p$1);

Clazz.newMeth(C$, 'xyzIsSlabbedInternal$javajs_util_T3', function (ptRef) {
return (this.slabPlane != null  && ptRef.x * this.slabPlane.x + ptRef.y * this.slabPlane.y + ptRef.z * this.slabPlane.z + this.slabPlane.w > 0   || this.depthPlane != null  && ptRef.x * this.depthPlane.x + ptRef.y * this.depthPlane.y + ptRef.z * this.depthPlane.z + this.depthPlane.w < 0   );
});

Clazz.newMeth(C$, 'move$org_jmol_api_JmolScriptEvaluator$javajs_util_V3$F$javajs_util_V3$F$F$I', function (eval, dRot, dZoom, dTrans, dSlab, floatSecondsTotal, fps) {
this.movetoThread=$I$(9).getOption$S$org_jmol_viewer_Viewer$S("thread.MoveToThread", this.vwr, "tm");
this.movetoThread.setManager$O$org_jmol_viewer_Viewer$O(this, this.vwr, Clazz.array(java.lang.Object, -1, [dRot, dTrans, Clazz.array(Float.TYPE, -1, [dZoom, dSlab, floatSecondsTotal, fps])]));
if (floatSecondsTotal > 0 ) this.movetoThread.setEval$org_jmol_api_JmolScriptEvaluator(eval);
this.movetoThread.run$();
});

Clazz.newMeth(C$, 'isInPosition$javajs_util_V3$F', function (axis, degrees) {
if (Float.isNaN$F(degrees)) return true;
this.aaTest1.setVA$javajs_util_V3$F(axis, (degrees / 57.29577951308232));
this.ptTest1.set$F$F$F(4.321, 1.23456, 3.14159);
this.getRotation$javajs_util_M3(this.matrixTest);
this.matrixTest.rotate2$javajs_util_T3$javajs_util_T3(this.ptTest1, this.ptTest2);
this.matrixTest.setAA$javajs_util_A4(this.aaTest1).rotate2$javajs_util_T3$javajs_util_T3(this.ptTest1, this.ptTest3);
return (this.ptTest3.distance$javajs_util_T3(this.ptTest2) < 0.1 );
});

Clazz.newMeth(C$, 'moveToPyMOL$org_jmol_api_JmolScriptEvaluator$F$FA', function (eval, floatSecondsTotal, pymolView) {
var m3=$I$(5).newA9$FA(pymolView);
m3.invert$();
var cameraX=pymolView[9];
var cameraY=-pymolView[10];
var pymolDistanceToCenter=-pymolView[11];
var center=$I$(1).new3$F$F$F(pymolView[12], pymolView[13], pymolView[14]);
var pymolDistanceToSlab=pymolView[15];
var pymolDistanceToDepth=pymolView[16];
var fov=pymolView[17];
var isOrtho=(fov >= 0 );
this.setPerspectiveDepth$Z(!isOrtho);
var theta=Math.abs(fov) / 2;
var tan=Math.tan(theta * 3.141592653589793 / 180);
var rotationRadius=pymolDistanceToCenter * tan;
var jmolCameraToCenter=0.5 / tan;
var cameraDepth=jmolCameraToCenter - 0.5;
var f=50 / rotationRadius;
if (pymolDistanceToSlab > 0 ) {
var slab=50 + (((pymolDistanceToCenter - pymolDistanceToSlab) * f)|0);
var depth=50 + (((pymolDistanceToCenter - pymolDistanceToDepth) * f)|0);
this.setSlabEnabled$Z(true);
this.slabToPercent$I(slab);
this.depthToPercent$I(depth);
if (pymolView.length == 21) {
var depthCue=(pymolView[18] != 0 );
var fog=(pymolView[19] != 0 );
var fogStart=pymolView[20];
this.setZShadeEnabled$Z(depthCue);
if (depthCue) {
if (fog) {
this.vwr.setIntProperty$S$I("zSlab", (Math.min(100, slab + fogStart * (depth - slab))|0));
} else {
this.vwr.setIntProperty$S$I("zSlab", (((slab + depth) / 2.0)|0));
}this.vwr.setIntProperty$S$I("zDepth", depth);
}}}this.moveTo$org_jmol_api_JmolScriptEvaluator$F$javajs_util_P3$javajs_util_T3$F$javajs_util_M3$F$F$F$F$javajs_util_P3$F$F$F$F$F$F(eval, floatSecondsTotal, center, null, 0, m3, 100, NaN, NaN, rotationRadius, null, NaN, NaN, NaN, cameraDepth, cameraX, cameraY);
return true;
});

Clazz.newMeth(C$, 'moveTo$org_jmol_api_JmolScriptEvaluator$F$javajs_util_P3$javajs_util_T3$F$javajs_util_M3$F$F$F$F$javajs_util_P3$F$F$F$F$F$F', function (eval, floatSecondsTotal, center, rotAxis, degrees, matrixEnd, zoom, xTrans, yTrans, newRotationRadius, navCenter, xNav, yNav, navDepth, cameraDepth, cameraX, cameraY) {
if (matrixEnd == null ) {
matrixEnd=Clazz.new_($I$(5,1));
var axis=$I$(3).newV$javajs_util_T3(rotAxis);
if (Float.isNaN$F(degrees)) {
matrixEnd.m00=NaN;
} else if (degrees < 0.01  && degrees > -0.01  ) {
matrixEnd.setScale$F(1);
} else {
if (axis.x == 0  && axis.y == 0   && axis.z == 0  ) {
return;
}var aaMoveTo=Clazz.new_($I$(4,1));
aaMoveTo.setVA$javajs_util_V3$F(axis, (degrees / 57.29577951308232));
matrixEnd.setAA$javajs_util_A4(aaMoveTo);
}}if (cameraX == this.cameraSetting.x ) cameraX=NaN;
if (cameraY == this.cameraSetting.y ) cameraY=NaN;
if (cameraDepth == this.cameraDepth ) cameraDepth=NaN;
if (!Float.isNaN$F(cameraX)) xTrans=cameraX * 50 / newRotationRadius / this.width * this.screenPixelCount;
if (!Float.isNaN$F(cameraY)) yTrans=cameraY * 50 / newRotationRadius / this.height * this.screenPixelCount;
var pixelScale=(center == null  ? this.scaleDefaultPixelsPerAngstrom : this.defaultScaleToScreen$F(newRotationRadius));
if (floatSecondsTotal <= 0 ) {
this.setAll$javajs_util_P3$javajs_util_M3$javajs_util_P3$F$F$F$F$F$F$F$F$F$F$F(center, matrixEnd, navCenter, zoom, xTrans, yTrans, newRotationRadius, pixelScale, navDepth, xNav, yNav, cameraDepth, cameraX, cameraY);
this.vwr.moveUpdate$F(floatSecondsTotal);
this.vwr.finalizeTransformParameters$();
return;
}try {
if (this.movetoThread == null ) this.movetoThread=$I$(9).getOption$S$org_jmol_viewer_Viewer$S("thread.MoveToThread", this.vwr, "tm");
var nSteps=this.movetoThread.setManager$O$org_jmol_viewer_Viewer$O(this, this.vwr, Clazz.array(java.lang.Object, -1, [center, matrixEnd, navCenter, Clazz.array(Float.TYPE, -1, [floatSecondsTotal, zoom, xTrans, yTrans, newRotationRadius, pixelScale, navDepth, xNav, yNav, cameraDepth, cameraX, cameraY])]));
if (nSteps <= 0 || this.vwr.g.waitForMoveTo ) {
if (nSteps > 0) this.movetoThread.setEval$org_jmol_api_JmolScriptEvaluator(eval);
this.movetoThread.run$();
if (!this.vwr.isSingleThreaded) this.movetoThread=null;
} else {
this.movetoThread.start$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setAll$javajs_util_P3$javajs_util_M3$javajs_util_P3$F$F$F$F$F$F$F$F$F$F$F', function (center, m, navCenter, zoom, xTrans, yTrans, rotationRadius, pixelScale, navDepth, xNav, yNav, cameraDepth, cameraX, cameraY) {
if (!Float.isNaN$F(m.m00)) this.setRotation$javajs_util_M3(m);
if (center != null ) this.moveRotationCenter$javajs_util_P3$Z(center, !this.windowCentered);
if (navCenter != null  && this.mode == 1 ) this.navigationCenter.setT$javajs_util_T3(navCenter);
if (!Float.isNaN$F(cameraDepth)) this.setCameraDepthPercent$F$Z(cameraDepth, false);
if (!Float.isNaN$F(cameraX) && !Float.isNaN$F(cameraY) ) this.setCamera$F$F(cameraX, cameraY);
if (!Float.isNaN$F(zoom)) this.zoomToPercent$F(zoom);
if (!Float.isNaN$F(rotationRadius)) this.modelRadius=rotationRadius;
if (!Float.isNaN$F(pixelScale)) this.scaleDefaultPixelsPerAngstrom=pixelScale;
if (!Float.isNaN$F(xTrans) && !Float.isNaN$F(yTrans) ) {
this.translateToPercent$C$F("x", xTrans);
this.translateToPercent$C$F("y", yTrans);
}if (this.mode == 1) {
if (!Float.isNaN$F(xNav) && !Float.isNaN$F(yNav) ) this.navTranslatePercentOrTo$F$F$F(0, xNav, yNav);
if (!Float.isNaN$F(navDepth)) this.setNavigationDepthPercent$F(navDepth);
}});

Clazz.newMeth(C$, 'stopMotion$', function () {
this.movetoThread=null;
});

Clazz.newMeth(C$, 'getRotationText$', function () {
this.axisangleT.setM$javajs_util_M3(this.matrixRotate);
var degrees=(this.axisangleT.angle * 57.29577951308232);
var sb=Clazz.new_($I$(10,1));
this.vectorT.set$F$F$F(this.axisangleT.x, this.axisangleT.y, this.axisangleT.z);
if (degrees < 0.01 ) return "{0 0 1 0}";
this.vectorT.normalize$();
this.vectorT.scale$F(1000);
sb.append$S("{");
C$.truncate0$javajs_util_SB$F(sb, this.vectorT.x);
C$.truncate0$javajs_util_SB$F(sb, this.vectorT.y);
C$.truncate0$javajs_util_SB$F(sb, this.vectorT.z);
C$.truncate2$javajs_util_SB$F(sb, degrees);
sb.append$S("}");
return sb.toString();
});

Clazz.newMeth(C$, 'getMoveToText$F$Z', function (timespan, addComments) {
this.finalizeTransformParameters$();
var sb=Clazz.new_($I$(10,1));
sb.append$S("moveto ");
if (addComments) sb.append$S("/* time, axisAngle */ ");
sb.appendF$F(timespan);
sb.append$S(" ").append$S(this.getRotationText$());
if (addComments) sb.append$S(" /* zoom, translation */ ");
C$.truncate2$javajs_util_SB$F(sb, this.zmPctSet);
C$.truncate2$javajs_util_SB$F(sb, this.getTranslationXPercent$());
C$.truncate2$javajs_util_SB$F(sb, this.getTranslationYPercent$());
sb.append$S(" ");
if (addComments) sb.append$S(" /* center, rotationRadius */ ");
sb.append$S(p$1.getCenterText.apply(this, []));
sb.append$S(" ").appendF$F(this.modelRadius);
sb.append$S(this.getNavigationText$Z(addComments));
if (addComments) sb.append$S(" /* cameraDepth, cameraX, cameraY */ ");
C$.truncate2$javajs_util_SB$F(sb, this.cameraDepth);
C$.truncate2$javajs_util_SB$F(sb, this.cameraSetting.x);
C$.truncate2$javajs_util_SB$F(sb, this.cameraSetting.y);
sb.append$S(";");
return sb.toString();
});

Clazz.newMeth(C$, 'getCenterText', function () {
return $I$(13).eP$javajs_util_T3(this.fixedRotationCenter);
}, p$1);

Clazz.newMeth(C$, 'getRotateXyzText', function () {
var sb=Clazz.new_($I$(10,1));
var m20=this.matrixRotate.m20;
var rY=-(Math.asin(m20) * 57.29577951308232);
var rX;
var rZ;
if (m20 > 0.999  || m20 < -0.999  ) {
rX=-(Math.atan2(this.matrixRotate.m12, this.matrixRotate.m11) * 57.29577951308232);
rZ=0;
} else {
rX=(Math.atan2(this.matrixRotate.m21, this.matrixRotate.m22) * 57.29577951308232);
rZ=(Math.atan2(this.matrixRotate.m10, this.matrixRotate.m00) * 57.29577951308232);
}sb.append$S("reset");
sb.append$S(";center ").append$S(p$1.getCenterText.apply(this, []));
if (rX != 0 ) {
sb.append$S("; rotate x");
C$.truncate2$javajs_util_SB$F(sb, rX);
}if (rY != 0 ) {
sb.append$S("; rotate y");
C$.truncate2$javajs_util_SB$F(sb, rY);
}if (rZ != 0 ) {
sb.append$S("; rotate z");
C$.truncate2$javajs_util_SB$F(sb, rZ);
}sb.append$S(";");
p$1.addZoomTranslationNavigationText$javajs_util_SB.apply(this, [sb]);
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'addZoomTranslationNavigationText$javajs_util_SB', function (sb) {
if (this.zmPct != 100 ) {
sb.append$S(" zoom");
C$.truncate2$javajs_util_SB$F(sb, this.zmPct);
sb.append$S(";");
}var tX=this.getTranslationXPercent$();
if (tX != 0 ) {
sb.append$S(" translate x");
C$.truncate2$javajs_util_SB$F(sb, tX);
sb.append$S(";");
}var tY=this.getTranslationYPercent$();
if (tY != 0 ) {
sb.append$S(" translate y");
C$.truncate2$javajs_util_SB$F(sb, tY);
sb.append$S(";");
}if (this.modelRadius != this.rotationRadiusDefault  || this.modelRadius == 10  ) {
sb.append$S(" set rotationRadius");
C$.truncate2$javajs_util_SB$F(sb, this.modelRadius);
sb.append$S(";");
}if (this.mode == 1) {
sb.append$S("navigate 0 center ").append$S($I$(13).eP$javajs_util_T3(this.navigationCenter));
sb.append$S(";navigate 0 translate");
C$.truncate2$javajs_util_SB$F(sb, this.getNavigationOffsetPercent$C("X"));
C$.truncate2$javajs_util_SB$F(sb, this.getNavigationOffsetPercent$C("Y"));
sb.append$S(";navigate 0 depth ");
C$.truncate2$javajs_util_SB$F(sb, this.navigationDepthPercent);
sb.append$S(";");
}}, p$1);

Clazz.newMeth(C$, 'getRotateZyzText$Z', function (iAddComment) {
var sb=Clazz.new_($I$(10,1));
var m=this.vwr.ms.getInfoM$S("defaultOrientationMatrix");
if (m == null ) {
m=this.matrixRotate;
} else {
m=$I$(5).newM3$javajs_util_M3(m);
m.invert$();
m.mul2$javajs_util_M3$javajs_util_M3(this.matrixRotate, m);
}var m22=m.m22;
var rY=(Math.acos(m22) * 57.29577951308232);
var rZ1;
var rZ2;
if (m22 > 0.999  || m22 < -0.999  ) {
rZ1=(Math.atan2(m.m10, m.m11) * 57.29577951308232);
rZ2=0;
} else {
rZ1=(Math.atan2(m.m21, -m.m20) * 57.29577951308232);
rZ2=(Math.atan2(m.m12, m.m02) * 57.29577951308232);
}if (rZ1 != 0  && rY != 0   && rZ2 != 0   && iAddComment ) sb.append$S("#Follows Z-Y-Z convention for Euler angles\n");
sb.append$S("reset");
sb.append$S(";center ").append$S(p$1.getCenterText.apply(this, []));
if (rZ1 != 0 ) {
sb.append$S("; rotate z");
C$.truncate2$javajs_util_SB$F(sb, rZ1);
}if (rY != 0 ) {
sb.append$S("; rotate y");
C$.truncate2$javajs_util_SB$F(sb, rY);
}if (rZ2 != 0 ) {
sb.append$S("; rotate z");
C$.truncate2$javajs_util_SB$F(sb, rZ2);
}sb.append$S(";");
p$1.addZoomTranslationNavigationText$javajs_util_SB.apply(this, [sb]);
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'truncate0$javajs_util_SB$F', function (sb, val) {
sb.appendC$C(" ");
sb.appendI$I(Math.round(val));
}, 1);

Clazz.newMeth(C$, 'truncate2$javajs_util_SB$F', function (sb, val) {
sb.appendC$C(" ");
sb.appendF$F(Math.round(val * 100) / 100.0);
}, 1);

Clazz.newMeth(C$, 'setSpinXYZ$F$F$F', function (x, y, z) {
if (!Float.isNaN$F(x)) this.spinX=x;
if (!Float.isNaN$F(y)) this.spinY=y;
if (!Float.isNaN$F(z)) this.spinZ=z;
if (this.isSpinInternal || this.isSpinFixed ) p$1.clearSpin.apply(this, []);
});

Clazz.newMeth(C$, 'setSpinFps$I', function (value) {
if (value <= 0) value=1;
 else if (value > 50) value=50;
this.spinFps=value;
});

Clazz.newMeth(C$, 'setNavXYZ$F$F$F', function (x, y, z) {
if (!Float.isNaN$F(x)) this.navX=x;
if (!Float.isNaN$F(y)) this.navY=y;
if (!Float.isNaN$F(z)) this.navZ=z;
});

Clazz.newMeth(C$, 'clearSpin', function () {
this.setSpinOff$();
this.setNavOn$Z(false);
this.isSpinInternal=false;
this.isSpinFixed=false;
}, p$1);

Clazz.newMeth(C$, 'setSpinOn$', function () {
p$1.setSpin$org_jmol_api_JmolScriptEvaluator$Z$F$javajs_util_Lst$FA$javajs_util_BS$Z.apply(this, [null, true, 3.4028235E38, null, null, null, false]);
});

Clazz.newMeth(C$, 'setSpinOff$', function () {
p$1.setSpin$org_jmol_api_JmolScriptEvaluator$Z$F$javajs_util_Lst$FA$javajs_util_BS$Z.apply(this, [null, false, 3.4028235E38, null, null, null, false]);
});

Clazz.newMeth(C$, 'setSpin$org_jmol_api_JmolScriptEvaluator$Z$F$javajs_util_Lst$FA$javajs_util_BS$Z', function (eval, spinOn, endDegrees, endPositions, dihedralList, bsAtoms, isGesture) {
if (this.navOn && spinOn ) this.setNavOn$Z(false);
if (this.spinOn == spinOn ) return;
this.spinOn=spinOn;
this.vwr.g.setB$S$Z("_spinning", spinOn);
if (spinOn) {
if (this.spinThread == null ) {
this.spinThread=$I$(9).getOption$S$org_jmol_viewer_Viewer$S("thread.SpinThread", this.vwr, "tm");
this.spinThread.setManager$O$org_jmol_viewer_Viewer$O(this, this.vwr, Clazz.array(java.lang.Object, -1, [Float.valueOf$F(endDegrees), endPositions, dihedralList, bsAtoms, isGesture ? Boolean.TRUE : null]));
this.spinIsGesture=isGesture;
if ((Float.isNaN$F(endDegrees) || endDegrees == 3.4028235E38   || !this.vwr.g.waitForMoveTo )) {
this.spinThread.start$();
} else {
this.spinThread.setEval$org_jmol_api_JmolScriptEvaluator(eval);
this.spinThread.run$();
}}} else if (this.spinThread != null ) {
this.spinThread.reset$();
this.spinThread=null;
}}, p$1);

Clazz.newMeth(C$, 'setNavOn$Z', function (navOn) {
if (Float.isNaN$F(this.navFps)) return;
var wasOn=this.navOn;
if (navOn && this.spinOn ) p$1.setSpin$org_jmol_api_JmolScriptEvaluator$Z$F$javajs_util_Lst$FA$javajs_util_BS$Z.apply(this, [null, false, 0, null, null, null, false]);
this.navOn=navOn;
this.vwr.g.setB$S$Z("_navigating", navOn);
if (!navOn) p$1.navInterrupt.apply(this, []);
if (navOn) {
if (this.navX == 0  && this.navY == 0   && this.navZ == 0  ) this.navZ=1;
if (this.navFps == 0 ) this.navFps=10;
if (this.spinThread == null ) {
this.spinThread=$I$(9).getOption$S$org_jmol_viewer_Viewer$S("thread.SpinThread", this.vwr, "tm");
this.spinThread.setManager$O$org_jmol_viewer_Viewer$O(this, this.vwr, null);
this.spinThread.start$();
}} else if (wasOn) {
if (this.spinThread != null ) {
this.spinThread.interrupt$();
this.spinThread=null;
}}});

Clazz.newMeth(C$, 'setVibrationScale$F', function (scale) {
this.vibrationScale=scale;
});

Clazz.newMeth(C$, 'setVibrationPeriod$F', function (period) {
if (Float.isNaN$F(period)) {
period=this.vibrationPeriod;
} else if (period == 0 ) {
this.vibrationPeriod=0;
this.vibrationPeriodMs=0;
} else {
this.vibrationPeriod=Math.abs(period);
this.vibrationPeriodMs=((this.vibrationPeriod * 1000)|0);
if (period > 0 ) return;
period=-period;
}p$1.setVibrationOn$Z.apply(this, [period > 0  && (this.vwr.ms.getLastVibrationVector$I$I(this.vwr.am.cmi, 0) >= 0) ]);
});

Clazz.newMeth(C$, 'setVibrationT$F', function (t) {
this.vibrationT.x=t;
if (this.vibrationScale == 0 ) this.vibrationScale=this.vwr.g.vibrationScale;
});

Clazz.newMeth(C$, 'isVibrationOn$', function () {
return this.vibrationOn;
});

Clazz.newMeth(C$, 'setVibrationOn$Z', function (vibrationOn) {
if (!vibrationOn) {
if (this.vibrationThread != null ) {
this.vibrationThread.interrupt$();
this.vibrationThread=null;
}this.vibrationOn=false;
this.vibrationT.x=0;
return;
}if (this.vwr.ms.mc < 1) {
this.vibrationOn=false;
this.vibrationT.x=0;
return;
}if (this.vibrationThread == null ) {
this.vibrationThread=$I$(9).getOption$S$org_jmol_viewer_Viewer$S("thread.VibrationThread", this.vwr, "tm");
this.vibrationThread.setManager$O$org_jmol_viewer_Viewer$O(this, this.vwr, null);
this.vibrationThread.start$();
}this.vibrationOn=true;
}, p$1);

Clazz.newMeth(C$, 'clearVibration', function () {
p$1.setVibrationOn$Z.apply(this, [false]);
this.vibrationScale=0;
}, p$1);

Clazz.newMeth(C$, 'setStereoMode2$IA', function (twoColors) {
this.stereoMode=$I$(8).CUSTOM;
this.stereoColors=twoColors;
});

Clazz.newMeth(C$, 'setStereoMode$org_jmol_c_STER', function (stereoMode) {
this.stereoColors=null;
this.stereoMode=stereoMode;
this.stereoDoubleDTI=(stereoMode === $I$(8).DTI );
this.stereoDoubleFull=(stereoMode === $I$(8).DOUBLE );
});

Clazz.newMeth(C$, 'setStereoDegrees$F', function (stereoDegrees) {
this.stereoDegrees=stereoDegrees;
this.stereoRadians=stereoDegrees * 0.017453292;
});

Clazz.newMeth(C$, 'getStereoRotationMatrix$Z', function (stereoFrame) {
this.stereoFrame=stereoFrame;
if (!stereoFrame) return this.matrixRotate;
this.matrixTemp3.setAsYRotation$F(-this.stereoRadians);
this.matrixStereo.mul2$javajs_util_M3$javajs_util_M3(this.matrixTemp3, this.matrixRotate);
return this.matrixStereo;
});

Clazz.newMeth(C$, 'isWindowCentered$', function () {
return this.windowCentered;
});

Clazz.newMeth(C$, 'setWindowCentered$Z', function (TF) {
this.windowCentered=TF;
this.resetNavigationPoint$Z(true);
});

Clazz.newMeth(C$, 'setRotationRadius$F$Z', function (angstroms, doAll) {
angstroms=(this.modelRadius=(angstroms <= 0  ? this.vwr.ms.calcRotationRadius$I$javajs_util_P3$Z(this.vwr.am.cmi, this.fixedRotationCenter, true) : angstroms));
if (doAll) this.vwr.setRotationRadius$F$Z(angstroms, false);
return angstroms;
});

Clazz.newMeth(C$, 'setRotationCenterAndRadiusXYZ$javajs_util_T3$Z', function (newCenterOfRotation, andRadius) {
this.resetNavigationPoint$Z(false);
if (newCenterOfRotation == null ) {
p$1.setFixedRotationCenter$javajs_util_T3.apply(this, [this.rotationCenterDefault]);
this.modelRadius=this.rotationRadiusDefault;
return;
}p$1.setFixedRotationCenter$javajs_util_T3.apply(this, [newCenterOfRotation]);
if (andRadius && this.windowCentered ) this.modelRadius=this.vwr.ms.calcRotationRadius$I$javajs_util_P3$Z(this.vwr.am.cmi, this.fixedRotationCenter, true);
}, p$1);

Clazz.newMeth(C$, 'setNewRotationCenter$javajs_util_P3$Z', function (center, doScale) {
if (center == null ) center=this.rotationCenterDefault;
if (this.windowCentered) {
this.translateToPercent$C$F("x", 0);
this.translateToPercent$C$F("y", 0);
p$1.setRotationCenterAndRadiusXYZ$javajs_util_T3$Z.apply(this, [center, true]);
if (doScale) p$1.resetFitToScreen$Z.apply(this, [true]);
} else {
this.moveRotationCenter$javajs_util_P3$Z(center, true);
}});

Clazz.newMeth(C$, 'moveRotationCenter$javajs_util_P3$Z', function (center, toXY) {
p$1.setRotationCenterAndRadiusXYZ$javajs_util_T3$Z.apply(this, [center, false]);
if (toXY) this.setRotationPointXY$javajs_util_P3(this.fixedRotationCenter);
});

Clazz.newMeth(C$, 'setCenter$', function () {
p$1.setRotationCenterAndRadiusXYZ$javajs_util_T3$Z.apply(this, [this.fixedRotationCenter, true]);
});

Clazz.newMeth(C$, 'setCenterAt$I$javajs_util_P3', function (relativeTo, pt) {
var pt1=$I$(1).newP$javajs_util_T3(pt);
switch (relativeTo) {
case 1073741826:
break;
case 96:
pt1.add$javajs_util_T3(this.vwr.ms.getAverageAtomPoint$());
break;
case 1678381065:
pt1.add$javajs_util_T3(this.vwr.getBoundBoxCenter$());
break;
default:
pt1.setT$javajs_util_T3(this.rotationCenterDefault);
break;
}
p$1.setRotationCenterAndRadiusXYZ$javajs_util_T3$Z.apply(this, [pt1, true]);
p$1.resetFitToScreen$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'setFrameOffset$I', function (modelIndex) {
if (this.frameOffsets == null  || modelIndex < 0  || modelIndex >= this.frameOffsets.length ) this.frameOffset.set$F$F$F(0, 0, 0);
 else this.frameOffset.setT$javajs_util_T3(this.frameOffsets[modelIndex]);
});

Clazz.newMeth(C$, 'setSelectedTranslation$javajs_util_BS$C$I', function (bsAtoms, xyz, xy) {
this.bsSelectedAtoms=bsAtoms;
switch (xyz.$c()) {
case 88:
case 120:
this.ptOffset.x += xy;
break;
case 89:
case 121:
this.ptOffset.y += xy;
break;
case 90:
case 122:
this.ptOffset.z += xy;
break;
}
});

Clazz.newMeth(C$, 'setNavFps$I', function (navFps) {
this.navFps=navFps;
});

Clazz.newMeth(C$, 'calcCameraFactors$', function () {
if (Float.isNaN$F(this.cameraDepth)) {
this.cameraDepth=this.cameraDepthSetting;
this.zoomFactor=3.4028235E38;
}this.cameraDistance=this.cameraDepth * this.screenPixelCount;
this.referencePlaneOffset=this.cameraDistance + this.screenPixelCount / 2.0;
this.scalePixelsPerAngstrom=(this.scale3D && !this.perspectiveDepth && this.mode != 1   ? 72 / this.scale3DAngstromsPerInch * (this.antialias ? 2 : 1) : this.screenPixelCount / this.visualRangeAngstroms);
if (this.mode != 1) this.mode=(this.camera.z == 0  ? 0 : 2);
this.perspectiveShiftXY.set$F$F$F(this.camera.z == 0  ? 0 : this.camera.x * this.scalePixelsPerAngstrom / this.screenWidth * 100, this.camera.z == 0  ? 0 : this.camera.y * this.scalePixelsPerAngstrom / this.screenHeight * 100, 0);
this.modelRadiusPixels=this.modelRadius * this.scalePixelsPerAngstrom;
var offset100=(2 * this.modelRadius) / this.visualRangeAngstroms * this.referencePlaneOffset;
if (this.mode == 1) {
p$1.calcNavCameraFactors$F.apply(this, [offset100]);
return;
}this.zoomFactor=3.4028235E38;
this.modelCenterOffset=this.referencePlaneOffset;
if (!this.scale3D || this.perspectiveDepth ) this.scalePixelsPerAngstrom *= (this.modelCenterOffset / offset100) * this.zmPct / 100;
this.modelRadiusPixels=this.modelRadius * this.scalePixelsPerAngstrom;
});

Clazz.newMeth(C$, 'calcNavCameraFactors$F', function (offset100) {
if (this.zoomFactor == 3.4028235E38 ) {
if (this.zmPct > 10000 ) this.zmPct=10000;
this.modelCenterOffset=offset100 * 100 / this.zmPct;
} else if (this.prevZoomSetting != this.zmPctSet ) {
if (this.zoomRatio == 0 ) this.modelCenterOffset=offset100 * 100 / this.zmPctSet;
 else this.modelCenterOffset += (1 - this.zoomRatio) * this.referencePlaneOffset;
this.navMode=-1;
}this.prevZoomSetting=this.zmPctSet;
this.zoomFactor=this.modelCenterOffset / this.referencePlaneOffset;
this.zmPct=(this.zoomFactor == 0  ? 10000 : offset100 / this.modelCenterOffset * 100);
}, p$1);

Clazz.newMeth(C$, 'getPerspectiveFactor$F', function (z) {
return (z <= 0  ? this.referencePlaneOffset : this.referencePlaneOffset / z);
});

Clazz.newMeth(C$, 'unTransformPoint$javajs_util_T3$javajs_util_T3', function (screenPt, coordPt) {
this.untransformedPoint.setT$javajs_util_T3(screenPt);
switch (this.mode) {
case 1:
this.untransformedPoint.x -= this.navigationOffset.x;
this.untransformedPoint.y -= this.navigationOffset.y;
break;
case 2:
this.fScrPt.x += this.perspectiveShiftXY.x;
this.fScrPt.y += this.perspectiveShiftXY.y;
case 0:
this.untransformedPoint.x -= this.fixedRotationOffset.x;
this.untransformedPoint.y -= this.fixedRotationOffset.y;
}
if (this.perspectiveDepth) {
var factor=this.getPerspectiveFactor$F(this.untransformedPoint.z);
this.untransformedPoint.x /= factor;
this.untransformedPoint.y /= factor;
}switch (this.mode) {
case 1:
this.untransformedPoint.x += this.navigationShiftXY.x;
this.untransformedPoint.y += this.navigationShiftXY.y;
break;
case 2:
this.untransformedPoint.x -= this.perspectiveShiftXY.x;
this.untransformedPoint.y -= this.perspectiveShiftXY.y;
break;
}
this.matrixTransformInv.rotTrans2$javajs_util_T3$javajs_util_T3(this.untransformedPoint, coordPt);
});

Clazz.newMeth(C$, 'resetNavigationPoint$Z', function (doResetSlab) {
if (this.zmPct < 5  && this.mode != 1 ) {
this.perspectiveDepth=true;
this.mode=1;
return;
}if (this.mode == 1) {
this.navMode=1;
this.slabPercentSetting=0;
this.perspectiveDepth=true;
} else if (doResetSlab) {
this.slabPercentSetting=100;
}this.vwr.setFloatProperty$S$F("slabRange", 0);
if (doResetSlab) {
this.setSlabEnabled$Z(this.mode == 1);
}this.zoomFactor=3.4028235E38;
this.zmPctSet=this.zmPct;
});

Clazz.newMeth(C$, 'setNavigatePt$javajs_util_P3', function (pt) {
this.navigationCenter.setT$javajs_util_T3(pt);
this.navMode=3;
this.navigating=true;
this.finalizeTransformParameters$();
this.navigating=false;
});

Clazz.newMeth(C$, 'setNavigationSlabOffsetPercent$F', function (percent) {
this.vwr.g.setF$S$F("navigationSlab", percent);
this.calcCameraFactors$();
this.navigationSlabOffset=percent / 50 * this.modelRadiusPixels;
});

Clazz.newMeth(C$, 'getNavigationOffset$', function () {
this.transformPt3f$javajs_util_T3$javajs_util_P3(this.navigationCenter, this.navigationOffset);
return this.navigationOffset;
});

Clazz.newMeth(C$, 'getNavPtHeight$', function () {
return this.height / 2.0;
});

Clazz.newMeth(C$, 'getNavigationOffsetPercent$C', function (XorY) {
this.getNavigationOffset$();
if (this.width == 0 || this.height == 0 ) return 0;
return (XorY == "X" ? (this.navigationOffset.x - this.width / 2.0) * 100.0 / this.width : (this.navigationOffset.y - this.getNavPtHeight$()) * 100.0 / this.height);
});

Clazz.newMeth(C$, 'getNavigationText$Z', function (addComments) {
var s=(addComments ? " /* navigation center, translation, depth */ " : " ");
if (this.mode != 1) return s + "{0 0 0} 0 0 0";
this.getNavigationOffset$();
return s + $I$(13).eP$javajs_util_T3(this.navigationCenter) + " " + new Float(this.getNavigationOffsetPercent$C("X")).toString() + " " + new Float(this.getNavigationOffsetPercent$C("Y")).toString() + " " + new Float(this.navigationDepthPercent).toString() ;
});

Clazz.newMeth(C$, 'setScreenParameters$I$I$Z$Z$Z$Z', function (screenWidth, screenHeight, useZoomLarge, antialias, resetSlab, resetZoom) {
var pt=(this.mode == 1 ? $I$(1).newP$javajs_util_T3(this.navigationCenter) : null);
var ptoff=$I$(1).newP$javajs_util_T3(this.navigationOffset);
ptoff.x=ptoff.x / this.width;
ptoff.y=ptoff.y / this.height;
p$1.setScreenParameters0$I$I$Z$Z$Z$Z.apply(this, [screenWidth, screenHeight, useZoomLarge, antialias, resetSlab, resetZoom]);
if (pt != null ) {
this.navigationCenter.setT$javajs_util_T3(pt);
this.navTranslatePercentOrTo$F$F$F(-1, ptoff.x * this.width, ptoff.y * this.height);
this.setNavigatePt$javajs_util_P3(pt);
}});

Clazz.newMeth(C$, 'navInterrupt', function () {
if (this.nav != null ) this.nav.interrupt$();
}, p$1);

Clazz.newMeth(C$, 'getNav', function () {
if (this.nav != null ) return true;
this.nav=$I$(9).getOption$S$org_jmol_viewer_Viewer$S("navigate.Navigator", this.vwr, "tm");
if (this.nav == null ) return false;
this.nav.set$org_jmol_viewer_TransformManager$org_jmol_viewer_Viewer(this, this.vwr);
return true;
}, p$1);

Clazz.newMeth(C$, 'navigateList$org_jmol_api_JmolScriptEvaluator$javajs_util_Lst', function (eval, list) {
if (p$1.getNav.apply(this, [])) this.nav.navigateList$org_jmol_api_JmolScriptEvaluator$javajs_util_Lst(eval, list);
});

Clazz.newMeth(C$, 'navigateAxis$javajs_util_V3$F', function (rotAxis, degrees) {
if (p$1.getNav.apply(this, [])) this.nav.navigateAxis$javajs_util_V3$F(rotAxis, degrees);
});

Clazz.newMeth(C$, 'setNavigationOffsetRelative$', function () {
if (p$1.getNav.apply(this, [])) this.nav.setNavigationOffsetRelative$();
});

Clazz.newMeth(C$, 'navigateKey$I$I', function (keyCode, modifiers) {
if (p$1.getNav.apply(this, [])) this.nav.navigateKey$I$I(keyCode, modifiers);
});

Clazz.newMeth(C$, 'setNavigationDepthPercent$F', function (percent) {
if (p$1.getNav.apply(this, [])) this.nav.setNavigationDepthPercent$F(percent);
});

Clazz.newMeth(C$, 'navTranslatePercentOrTo$F$F$F', function (seconds, x, y) {
if (p$1.getNav.apply(this, [])) this.nav.navTranslatePercentOrTo$F$F$F(seconds, x, y);
});

Clazz.newMeth(C$, 'calcNavigationPoint$', function () {
if (p$1.getNav.apply(this, [])) this.nav.calcNavigationPoint$();
});

Clazz.newMeth(C$, 'getNavigationState$', function () {
return (this.mode == 1 && p$1.getNav.apply(this, [])  ? this.nav.getNavigationState$() : "");
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
