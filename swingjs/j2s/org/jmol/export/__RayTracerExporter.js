(function(){var P$=Clazz.newPackage("org.jmol.export"),I$=[[0,'org.jmol.export.___Exporter']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "__RayTracerExporter", null, 'org.jmol.export.___Exporter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isSlabEnabled','wasPerspective'],'I',['minScreenDimension']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.exportType=2;
this.lineWidthMad=($s$[0] = 2, $s$[0]);
}, 1);

Clazz.newMeth(C$, 'initOutput$org_jmol_viewer_Viewer$D$org_jmol_util_GData$java_util_Map', function (vwr, privateKey, g3d, params) {
this.wasPerspective=vwr.tm.perspectiveDepth;
if (C$.superclazz.prototype.initOutput$org_jmol_viewer_Viewer$D$org_jmol_util_GData$java_util_Map.apply(this, [vwr, privateKey, g3d, params])) {
vwr.tm.perspectiveDepth=false;
if (this.wasPerspective) vwr.shm.finalizeAtoms$javajs_util_BS$Z(null, false);
return true;
}return false;
});

Clazz.newMeth(C$, 'finalizeOutput2$', function () {
this.vwr.tm.perspectiveDepth=this.wasPerspective;
return C$.superclazz.prototype.finalizeOutput2$.apply(this, []);
});

Clazz.newMeth(C$, 'outputVertex$javajs_util_T3$javajs_util_T3', function (pt, offset) {
$I$(1).setTempVertex$javajs_util_T3$javajs_util_T3$javajs_util_T3(pt, offset, this.tempP1);
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.tempP1, this.tempP1);
this.output$javajs_util_T3(this.tempP1);
});

Clazz.newMeth(C$, 'getScreenNormal$javajs_util_T3$javajs_util_T3$F', function (pt, normal, factor) {
if (Float.isNaN$F(normal.x)) {
this.tempP3.set$F$F$F(0, 0, 0);
return this.tempP3;
}this.tempP1.add2$javajs_util_T3$javajs_util_T3(pt, normal);
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(pt, this.tempP2);
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.tempP1, this.tempP3);
this.tempP3.sub$javajs_util_T3(this.tempP2);
this.tempP3.scale$F(factor);
return this.tempP3;
});

Clazz.newMeth(C$, 'initVars$', function () {
this.isSlabEnabled=this.tm.slabEnabled;
this.minScreenDimension=Math.min(this.screenWidth, this.screenHeight);
});

Clazz.newMeth(C$, 'drawAtom$org_jmol_modelset_Atom$F', function (atom, radius) {
this.outputSphere$F$F$F$F$H(atom.sX, atom.sY, atom.sZ, atom.sD / 2.0, atom.colixAtom);
});

Clazz.newMeth(C$, 'drawCircle$I$I$I$I$H$Z', function (x, y, z, diameter, colix, doFill) {
var radius=diameter / 2.0;
this.outputCircle$I$I$I$F$H$Z(x, y, z, radius, colix, doFill);
});

Clazz.newMeth(C$, 'drawEllipse$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$Z', function (ptAtom, ptX, ptY, colix, doFill) {
return false;
});

Clazz.newMeth(C$, 'drawPixel$H$I$I$I$I', function (colix, x, y, z, scale) {
this.outputSphere$F$F$F$F$H(x, y, z, 0.75 * scale, colix);
});

Clazz.newMeth(C$, 'drawTextPixel$I$I$I$I', function (argb, x, y, z) {
this.outputTextPixel$I$I$I$I(x, y, this.fixScreenZ$I(z), argb);
});

Clazz.newMeth(C$, 'fillConeScreen$H$B$I$javajs_util_P3$javajs_util_P3$Z', function (colix, endcap, screenDiameter, screenBase, screenTip, isBarb) {
this.outputCone$javajs_util_P3$javajs_util_P3$F$H$Z(screenBase, screenTip, screenDiameter / 2.0, colix, isBarb);
});

Clazz.newMeth(C$, 'drawCylinder$javajs_util_P3$javajs_util_P3$H$H$B$I$I', function (screenA, screenB, colix1, colix2, endcaps, madBond, bondOrder) {
if (colix1 == colix2) {
this.fillConicalCylinder$javajs_util_P3$javajs_util_P3$I$H$B(screenA, screenB, madBond, colix1, endcaps);
} else {
this.tempV2.ave$javajs_util_T3$javajs_util_T3(screenB, screenA);
this.tempP1.setT$javajs_util_T3(this.tempV2);
this.fillConicalCylinder$javajs_util_P3$javajs_util_P3$I$H$B(screenA, this.tempP1, madBond, colix1, endcaps);
this.fillConicalCylinder$javajs_util_P3$javajs_util_P3$I$H$B(this.tempP1, screenB, madBond, colix2, endcaps);
}if (endcaps != 3) return;
var radius=this.vwr.tm.scaleToScreen$I$I((screenA.z|0), madBond) / 2.0;
if (radius <= 1 ) return;
this.outputSphere$F$F$F$F$H(screenA.x, screenA.y, screenA.z, radius, colix1);
radius=this.vwr.tm.scaleToScreen$I$I((screenB.z|0), madBond) / 2.0;
if (radius <= 1 ) return;
this.outputSphere$F$F$F$F$H(screenB.x, screenB.y, screenB.z, radius, colix2);
});

Clazz.newMeth(C$, 'fillConicalCylinder$javajs_util_P3$javajs_util_P3$I$H$B', function (screenA, screenB, madBond, colix, endcaps) {
var radius1=this.vwr.tm.scaleToScreen$I$I((screenA.z|0), madBond) / 2.0;
if (radius1 == 0 ) return;
if (radius1 < 1 ) radius1=1;
if (screenA.distance$javajs_util_T3(screenB) == 0 ) {
this.outputSphere$F$F$F$F$H(screenA.x, screenA.y, screenA.z, radius1, colix);
return;
}var radius2=this.vwr.tm.scaleToScreen$I$I((screenB.z|0), madBond) / 2.0;
if (radius2 == 0 ) return;
if (radius2 < 1 ) radius2=1;
this.outputCylinderConical$javajs_util_P3$javajs_util_P3$F$F$H(screenA, screenB, radius1, radius2, colix);
});

Clazz.newMeth(C$, 'fillCylinderScreenMad$H$B$I$javajs_util_P3$javajs_util_P3', function (colix, endcaps, diameter, screenA, screenB) {
if (diameter == 0) return;
if (diameter < 1) diameter=1;
var radius=diameter / 2.0;
if (screenA.distance$javajs_util_T3(screenB) == 0 ) {
this.outputSphere$F$F$F$F$H(screenA.x, screenA.y, screenA.z, radius, colix);
return;
}this.outputCylinder$javajs_util_P3$javajs_util_P3$F$H$Z(screenA, screenB, radius, colix, endcaps == 2);
if (endcaps != 3 || radius <= 1  ) return;
this.outputSphere$F$F$F$F$H(screenA.x, screenA.y, screenA.z, radius, colix);
this.outputSphere$F$F$F$F$H(screenB.x, screenB.y, screenB.z, radius, colix);
});

Clazz.newMeth(C$, 'fillCylinderScreen$H$B$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$F', function (colix, endcaps, screenDiameter, screenA, screenB, ptA, ptB, radius) {
this.fillCylinderScreenMad$H$B$I$javajs_util_P3$javajs_util_P3(colix, endcaps, screenDiameter, screenA, screenB);
});

Clazz.newMeth(C$, 'fillSphere$H$I$javajs_util_P3', function (colix, diameter, pt) {
this.outputSphere$F$F$F$F$H(pt.x, pt.y, pt.z, diameter / 2.0, colix);
});

Clazz.newMeth(C$, 'fillTriangle$H$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z', function (colix, ptA, ptB, ptC, twoSided) {
this.outputTriangle$javajs_util_T3$javajs_util_T3$javajs_util_T3$H(ptA, ptB, ptC, colix);
});

Clazz.newMeth(C$, 'fillEllipsoid$javajs_util_P3$javajs_util_P3A$H$I$I$I$I$javajs_util_M3$DA$javajs_util_M4$javajs_util_P3A', function (center, points, colix, x, y, z, diameter, toEllipsoidal, coef, deriv, octantPoints) {
var radius=diameter / 2.0;
if (radius == 0 ) return;
if (radius < 1 ) radius=1;
this.outputEllipsoid$javajs_util_P3$F$DA$H(center, radius, coef, colix);
});
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:33 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
