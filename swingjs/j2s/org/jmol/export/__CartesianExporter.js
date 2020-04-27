(function(){var P$=Clazz.newPackage("org.jmol.export"),p$1={},I$=[[0,'javajs.util.A4','javajs.util.M4','javajs.util.P3','java.util.Hashtable','org.jmol.util.Logger','org.jmol.util.C','javajs.util.M3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "__CartesianExporter", null, 'org.jmol.export.___Exporter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.viewpoint=Clazz.new_($I$(1,1));
this.sphereMatrix=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['canCapCylinders','noColor'],'O',['viewpoint','javajs.util.A4','sphereMatrix','javajs.util.M4']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.exportType=1;
this.lineWidthMad=($s$[0] = 100, $s$[0]);
}, 1);

Clazz.newMeth(C$, 'getModelCenter$', function () {
return this.referenceCenter;
});

Clazz.newMeth(C$, 'getCameraPosition$', function () {
var ptCamera=Clazz.new_($I$(3,1));
var pt=(function(a,f){return f.apply(null,a)})([(this.screenWidth/2|0), (this.screenHeight/2|0), 0],$I$(3).new3$F$F$F);
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(pt, ptCamera);
ptCamera.sub$javajs_util_T3(this.center);
this.tempP3.set$F$F$F((this.screenWidth/2|0), (this.screenHeight/2|0), this.cameraDistance * this.scalePixelsPerAngstrom);
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(this.tempP3, this.tempP3);
this.tempP3.sub$javajs_util_T3(this.center);
ptCamera.add$javajs_util_T3(this.tempP3);
return this.cameraPosition;
});

Clazz.newMeth(C$, 'setTempPoints$javajs_util_P3$javajs_util_P3$Z', function (ptA, ptB, isCartesian) {
if (isCartesian) {
this.tempP1.setT$javajs_util_T3(ptA);
this.tempP2.setT$javajs_util_T3(ptB);
} else {
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(ptA, this.tempP1);
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(ptB, this.tempP2);
}}, p$1);

Clazz.newMeth(C$, 'getCoordinateMap$javajs_util_T3A$IA$javajs_util_BS', function (vertices, coordMap, bsValid) {
var n=0;
for (var i=0; i < coordMap.length; i++) {
if (bsValid != null  && !bsValid.get$I(i)  || Float.isNaN$F(vertices[i].x) ) {
if (bsValid != null ) bsValid.clear$I(i);
continue;
}coordMap[i]=n++;
}
return n;
});

Clazz.newMeth(C$, 'getNormalMap$javajs_util_T3A$I$javajs_util_BS$javajs_util_Lst', function (normals, nNormals, bsValid, vNormals) {
var htNormals=Clazz.new_($I$(4,1));
var normalMap=Clazz.array(Integer.TYPE, [nNormals]);
for (var i=0; i < nNormals; i++) {
var s;
if (bsValid != null  && !bsValid.get$I(i)  || Float.isNaN$F(normals[i].x) ) {
if (bsValid != null ) bsValid.clear$I(i);
continue;
}s=this.getTriad$javajs_util_T3(normals[i]) + "\n";
if (htNormals.containsKey$O(s)) {
normalMap[i]=htNormals.get$O(s).intValue$();
} else {
normalMap[i]=vNormals.size$();
vNormals.addLast$O(s);
htNormals.put$O$O(s, Integer.valueOf$I(normalMap[i]));
}}
return normalMap;
});

Clazz.newMeth(C$, 'outputIndices$IAA$IA$I$javajs_util_BS$I', function (indices, map, nPolygons, bsPolygons, faceVertexMax) {
var isAll=(bsPolygons == null );
var i0=(isAll ? nPolygons - 1 : bsPolygons.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsPolygons.nextSetBit$I(i + 1))) this.outputFace$IA$IA$I(indices[i], map, faceVertexMax);

});

Clazz.newMeth(C$, 'plotText$I$I$I$H$S$org_jmol_util_Font', function (x, y, z, colix, text, font3d) {
this.gdata.plotText$I$I$I$I$I$S$org_jmol_util_Font$org_jmol_api_JmolRendererInterface(x, y, z, this.gdata.getColorArgbOrGray$H(colix), 0, text, font3d, this.export3D);
});

Clazz.newMeth(C$, 'plotImage$I$I$I$O$H$I$I', function (x, y, z, image, bgcolix, width, height) {
});

Clazz.newMeth(C$, 'drawAtom$org_jmol_modelset_Atom$F', function (atom, radius) {
if ($I$(5).debugging) this.outputComment$S("atom " + atom);
var colix=atom.colixAtom;
this.outputSphere$javajs_util_P3$F$H$Z(atom, radius == 0  ? atom.madAtom / 2000.0 : radius, colix, $I$(6).isColixTranslucent$H(colix));
});

Clazz.newMeth(C$, 'drawCircle$I$I$I$I$H$Z', function (x, y, z, diameter, colix, doFill) {
this.tempP3.set$F$F$F(x, y, z);
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(this.tempP3, this.tempP1);
var radius=this.vwr.tm.unscaleToScreen$F$F(z, diameter) / 2;
this.tempP3.set$F$F$F(x, y, z + 1);
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(this.tempP3, this.tempP3);
this.outputCircle$javajs_util_P3$javajs_util_P3$F$H$Z(this.tempP1, this.tempP3, radius, colix, doFill);
});

Clazz.newMeth(C$, 'drawEllipse$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$Z', function (ptCenter, ptX, ptY, colix, doFill) {
this.tempV1.sub2$javajs_util_T3$javajs_util_T3(ptX, ptCenter);
this.tempV2.sub2$javajs_util_T3$javajs_util_T3(ptY, ptCenter);
this.tempV2.cross$javajs_util_T3$javajs_util_T3(this.tempV1, this.tempV2);
this.tempV2.normalize$();
this.tempV2.scale$F(doFill ? 0.002 : 0.005);
this.tempP1.sub2$javajs_util_T3$javajs_util_T3(ptCenter, this.tempV2);
this.tempP2.add2$javajs_util_T3$javajs_util_T3(ptCenter, this.tempV2);
return this.outputCylinder$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$B$F$javajs_util_P3$javajs_util_P3$Z(ptCenter, this.tempP1, this.tempP2, colix, doFill ? 2 : 0, 1.01, ptX, ptY, true);
});

Clazz.newMeth(C$, 'drawPixel$H$I$I$I$I', function (colix, x, y, z, scale) {
this.tempP3.set$F$F$F(x, y, z);
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(this.tempP3, this.tempP1);
this.outputSphere$javajs_util_P3$F$H$Z(this.tempP1, 0.02 * scale, colix, true);
});

Clazz.newMeth(C$, 'drawTextPixel$I$I$I$I', function (argb, x, y, z) {
this.tempP3.set$F$F$F(x, y, z);
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(this.tempP3, this.tempP1);
this.outputTextPixel$javajs_util_P3$I(this.tempP1, argb);
});

Clazz.newMeth(C$, 'fillConeScreen$H$B$I$javajs_util_P3$javajs_util_P3$Z', function (colix, endcap, screenDiameter, screenBase, screenTip, isBarb) {
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(screenBase, this.tempP1);
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(screenTip, this.tempP2);
var radius=this.vwr.tm.unscaleToScreen$F$F(screenBase.z, screenDiameter) / 2;
if (radius < 0.05 ) radius=0.05;
this.outputCone$javajs_util_P3$javajs_util_P3$F$H(this.tempP1, this.tempP2, radius, colix);
});

Clazz.newMeth(C$, 'drawCylinder$javajs_util_P3$javajs_util_P3$H$H$B$I$I', function (ptA, ptB, colix1, colix2, endcaps, mad, bondOrder) {
p$1.setTempPoints$javajs_util_P3$javajs_util_P3$Z.apply(this, [ptA, ptB, bondOrder < 0]);
var radius=mad / 2000.0;
if ($I$(5).debugging) this.outputComment$S("bond " + ptA + " " + ptB );
if (colix1 == colix2 || this.noColor ) {
this.outputCylinder$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$B$F$javajs_util_P3$javajs_util_P3$Z(null, this.tempP1, this.tempP2, colix1, endcaps, radius, null, null, bondOrder != -1);
} else {
this.tempV2.ave$javajs_util_T3$javajs_util_T3(this.tempP2, this.tempP1);
this.tempP3.setT$javajs_util_T3(this.tempV2);
if (this.solidOnly && endcaps == 0 ) endcaps=2;
 else if (this.canCapCylinders && endcaps == 3 ) endcaps=(this.solidOnly ? 5 : 4);
this.outputCylinder$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$B$F$javajs_util_P3$javajs_util_P3$Z(null, this.tempP3, this.tempP1, colix1, (endcaps == 3 ? 0 : endcaps), radius, null, null, true);
this.outputCylinder$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$B$F$javajs_util_P3$javajs_util_P3$Z(null, this.tempP3, this.tempP2, colix2, (endcaps == 3 ? 0 : endcaps), radius, null, null, true);
if (endcaps == 3) {
this.outputSphere$javajs_util_P3$F$H$Z(this.tempP1, radius * 1.01, colix1, bondOrder != -2);
this.outputSphere$javajs_util_P3$F$H$Z(this.tempP2, radius * 1.01, colix2, bondOrder != -2);
}}});

Clazz.newMeth(C$, 'fillCylinderScreenMad$H$B$I$javajs_util_P3$javajs_util_P3', function (colix, endcaps, mad, screenA, screenB) {
var radius=mad / 2000.0;
p$1.setTempPoints$javajs_util_P3$javajs_util_P3$Z.apply(this, [screenA, screenB, false]);
this.outputCylinder$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$B$F$javajs_util_P3$javajs_util_P3$Z(null, this.tempP1, this.tempP2, colix, endcaps, radius, null, null, true);
});

Clazz.newMeth(C$, 'fillCylinderScreen$H$B$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$F', function (colix, endcaps, screenDiameter, screenA, screenB, ptA, ptB, radius) {
if (ptA != null ) {
this.drawCylinder$javajs_util_P3$javajs_util_P3$H$H$B$I$I(ptA, ptB, colix, colix, endcaps, Math.round(radius * 2000.0), -1);
return;
}var mad=Math.round(this.vwr.tm.unscaleToScreen$F$F((screenA.z + screenB.z) / 2, screenDiameter) * 1000);
this.fillCylinderScreenMad$H$B$I$javajs_util_P3$javajs_util_P3(colix, endcaps, mad, screenA, screenB);
});

Clazz.newMeth(C$, 'fillEllipsoid$javajs_util_P3$javajs_util_P3A$H$I$I$I$I$javajs_util_M3$DA$javajs_util_M4$javajs_util_P3A', function (center, points, colix, x, y, z, diameter, toEllipsoidal, coef, deriv, octantPoints) {
this.outputEllipsoid$javajs_util_P3$javajs_util_P3A$H(center, points, colix);
});

Clazz.newMeth(C$, 'fillSphere$H$I$javajs_util_P3', function (colix, diameter, pt) {
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(pt, this.tempP1);
this.outputSphere$javajs_util_P3$F$H$Z(this.tempP1, this.vwr.tm.unscaleToScreen$F$F(pt.z, diameter) / 2, colix, true);
});

Clazz.newMeth(C$, 'fillTriangle$H$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z', function (colix, ptA, ptB, ptC, twoSided) {
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(ptA, this.tempP1);
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(ptB, this.tempP2);
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(ptC, this.tempP3);
if (this.solidOnly) {
this.outputSolidPlate$javajs_util_P3$javajs_util_P3$javajs_util_P3$H(this.tempP1, this.tempP2, this.tempP3, colix);
} else {
this.outputTriangle$javajs_util_T3$javajs_util_T3$javajs_util_T3$H(this.tempP1, this.tempP2, this.tempP3, colix);
if (twoSided) this.outputTriangle$javajs_util_T3$javajs_util_T3$javajs_util_T3$H(this.tempP1, this.tempP3, this.tempP2, colix);
}});

Clazz.newMeth(C$, 'outputSolidPlate$javajs_util_P3$javajs_util_P3$javajs_util_P3$H', function (tempP1, tempP2, tempP3, colix) {
});

Clazz.newMeth(C$, 'setSphereMatrix$javajs_util_T3$F$F$F$javajs_util_A4$javajs_util_M4', function (center, rx, ry, rz, a, sphereMatrix) {
if (a != null ) {
var m=Clazz.new_($I$(7,1));
m.m00=rx;
m.m11=ry;
m.m22=rz;
var mq=Clazz.new_($I$(7,1)).setAA$javajs_util_A4(a);
mq.mul$javajs_util_M3(m);
sphereMatrix.setToM3$javajs_util_M34(mq);
} else {
sphereMatrix.setIdentity$();
sphereMatrix.m00=rx;
sphereMatrix.m11=ry;
sphereMatrix.m22=rz;
}sphereMatrix.m03=center.x;
sphereMatrix.m13=center.y;
sphereMatrix.m23=center.z;
sphereMatrix.m33=1;
});
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:08 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
