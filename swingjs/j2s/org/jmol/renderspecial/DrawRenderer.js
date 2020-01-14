(function(){var P$=Clazz.newPackage("org.jmol.renderspecial"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.V3','javajs.util.P3i','javajs.util.BS','org.jmol.util.C','org.jmol.shapespecial.Draw',['org.jmol.shapespecial.Draw','.EnumDrawType'],'org.jmol.util.GData','javajs.util.M3','javajs.util.A4','javajs.util.Measure']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DrawRenderer", null, 'org.jmol.render.MeshRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.drawType=null;
this.dmesh=null;
this.controlHermites=null;
this.pt0=null;
this.pt1=null;
this.pt2=null;
this.vTemp=null;
this.vTemp2=null;
this.pt0f=null;
this.pt0i=null;
this.s0f=null;
this.s1f=null;
this.s2f=null;
this.bsHandles=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.pt0=Clazz.new_($I$(1));
this.pt1=Clazz.new_($I$(1));
this.pt2=Clazz.new_($I$(1));
this.vTemp=Clazz.new_($I$(2));
this.vTemp2=Clazz.new_($I$(2));
this.pt0f=Clazz.new_($I$(1));
this.pt0i=Clazz.new_($I$(3));
this.bsHandles=Clazz.new_($I$(4));
}, 1);

Clazz.newMeth(C$, 'render$', function () {
this.needTranslucent=false;
this.imageFontScaling=this.vwr.imageFontScaling;
var draw=this.shape;
for (var i=draw.meshCount; --i >= 0; ) {
var mesh=this.dmesh=draw.meshes[i];
if (mesh.connectedAtoms != null ) {
if (mesh.connectedAtoms[0] < 0) continue;
mesh.vs=Clazz.array($I$(1), [4]);
mesh.vc=4;
var c=mesh.connectedAtoms;
for (var j=0; j < 4; j++) mesh.vs[j]=(c[j] < 0 ? mesh.vs[j - 1] : this.vwr.ms.at[c[j]]);

mesh.recalcAltVertices=true;
}if (this.renderMesh2$org_jmol_shape_Mesh(mesh)) p$1.renderInfo.apply(this, []);
if (!this.isExport && mesh.visibilityFlags != 0  && this.vwr.getPickingMode$() == 4 ) {
if (!this.g3d.setC$H($I$(5).getColixTranslucent3$H$Z$F(23, true, 0.5))) this.needTranslucent=true;
 else p$1.renderHandles.apply(this, []);
}}
return this.needTranslucent;
});

Clazz.newMeth(C$, 'isPolygonDisplayable$I', function (i) {
return $I$(6).isPolygonDisplayable$org_jmol_shape_Mesh$I(this.dmesh, i) && (this.dmesh.modelFlags == null  || this.dmesh.bsMeshesVisible.get$I(i) ) ;
});

Clazz.newMeth(C$, 'render2$Z', function (isExport) {
this.drawType=this.dmesh.drawType;
this.diameter=this.dmesh.diameter;
this.width=this.dmesh.width;
if (this.mesh.connectedAtoms != null ) p$1.getConnectionPoints.apply(this, []);
if (this.mesh.lineData != null ) {
p$1.drawLineData$javajs_util_Lst.apply(this, [this.mesh.lineData]);
return;
}var nPoints=this.vertexCount;
var isCurved=((this.drawType === $I$(7).CURVE  || this.drawType === $I$(7).ARROW   || this.drawType === $I$(7).ARC  ) && this.vertexCount > 2 );
if (this.width > 0  && isCurved  || this.drawType === $I$(7).ARROW  ) {
this.pt1f.set$F$F$F(0, 0, 0);
var n=(this.drawType === $I$(7).ARC  ? 2 : this.vertexCount);
for (var i=0; i < n; i++) this.pt1f.add$javajs_util_T3(this.vertices[i]);

this.pt1f.scale$F(1.0 / n);
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(this.pt1f, this.pt1i);
this.diameter=(this.vwr.tm.scaleToScreen$I$I(this.pt1i.z, (Math.floor(this.width * 1000)|0))|0);
if (this.diameter == 0) this.diameter=1;
}if (this.dmesh.haveXyPoints) {
if (this.dmesh.isVector) {
var ptXY=0;
for (var i=0; i < 2; i++) if (this.vertices[i].z == 3.4028235E38  || this.vertices[i].z == -3.4028235E38  ) ptXY+=i + 1;

if (--ptXY < 2) {
p$1.renderXyArrow$I.apply(this, [ptXY]);
return;
}} else if (this.drawType === $I$(7).POINT ) {
p$1.renderXyPoint.apply(this, []);
}}var tension=5;
switch (this.drawType) {
default:
this.render2b$Z(false);
return;
case $I$(7).CIRCULARPLANE:
if (this.dmesh.scale > 0 ) this.width *= this.dmesh.scale;
this.render2b$Z(false);
return;
case $I$(7).CIRCLE:
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(this.vertices[0], this.pt1i);
if (this.diameter == 0 && this.width == 0  ) this.width=1.0;
if (this.dmesh.scale > 0 ) this.width *= this.dmesh.scale;
if (this.width > 0 ) this.diameter=(this.vwr.tm.scaleToScreen$I$I(this.pt1i.z, (Math.floor(this.width * 1000)|0))|0);
if (this.diameter > 0 && (this.mesh.drawTriangles || this.mesh.fillTriangles ) ) {
this.g3d.addRenderer$I(1073741880);
this.g3d.drawFilledCircle$H$H$I$I$I$I(this.colix, this.mesh.fillTriangles ? this.colix : ($s$[0] = 0, $s$[0]), this.diameter, this.pt1i.x, this.pt1i.y, this.pt1i.z);
}return;
case $I$(7).LINE_SEGMENT:
for (var i=0; i < nPoints - 1; i++) this.drawEdge$I$I$Z$javajs_util_T3$javajs_util_T3$javajs_util_P3i$javajs_util_P3i(i, i + 1, true, this.vertices[i], this.vertices[i + 1], this.screens[i], this.screens[i + 1]);

return;
case $I$(7).CURVE:
break;
case $I$(7).ARC:
var ptRef=(this.vertexCount > 2 ? this.vertices[2] : $I$(6).randomPoint$());
var nDegreesOffset=(this.vertexCount > 3 ? this.vertices[3].x : 0);
var theta=(this.vertexCount > 3 ? this.vertices[3].y : 360);
if (theta == 0 ) return;
var fractionalOffset=(this.vertexCount > 3 ? this.vertices[3].z : 0);
nPoints=p$1.setArc$javajs_util_T3$javajs_util_T3$javajs_util_T3$F$F$F$F.apply(this, [this.vertices[0], this.vertices[1], ptRef, nDegreesOffset, theta, fractionalOffset, this.dmesh.scale]);
if (this.dmesh.isVector && !this.dmesh.noHead ) {
p$1.renderArrowHead$javajs_util_T3$javajs_util_T3$F$Z$Z$Z.apply(this, [this.pt0, this.pt1, 0.3, false, false, this.dmesh.isBarb]);
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(this.pt1f, this.screens[nPoints - 1]);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pt1f, this.p3Screens[nPoints - 1]);
}this.pt1f.setT$javajs_util_T3(this.pt2);
break;
case $I$(7).ARROW:
if (!isCurved) {
p$1.renderArrowHead$javajs_util_T3$javajs_util_T3$F$Z$Z$Z.apply(this, [this.vertices[0], this.vertices[1], 0, false, true, this.dmesh.isBarb]);
return;
}var nHermites=5;
if (this.controlHermites == null  || this.controlHermites.length < nHermites + 1 ) {
this.controlHermites=Clazz.array($I$(1), [nHermites + 1]);
}$I$(8).getHermiteList$I$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3A$I$I$Z(tension, this.vertices[this.vertexCount - 3], this.vertices[this.vertexCount - 2], this.vertices[this.vertexCount - 1], this.vertices[this.vertexCount - 1], this.vertices[this.vertexCount - 1], this.controlHermites, 0, nHermites, true);
p$1.renderArrowHead$javajs_util_T3$javajs_util_T3$F$Z$Z$Z.apply(this, [this.controlHermites[nHermites - 2], this.controlHermites[nHermites - 1], 0, false, false, this.dmesh.isBarb]);
break;
}
if (this.diameter == 0) this.diameter=3;
if (isCurved) {
this.g3d.addRenderer$I(553648146);
for (var i=0, i0=0; i < nPoints - 1; i++) {
this.g3d.fillHermite$I$I$I$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3(tension, this.diameter, this.diameter, this.diameter, this.p3Screens[i0], this.p3Screens[i], this.p3Screens[i + 1], this.p3Screens[i + (i == nPoints - 2 ? 1 : 2)]);
i0=i;
}
} else {
this.render2b$Z(false);
}});

Clazz.newMeth(C$, 'setArc$javajs_util_T3$javajs_util_T3$javajs_util_T3$F$F$F$F', function (v1, v2, ptRef, nDegreesOffset, theta, fractionalOffset, scale) {
this.vTemp.sub2$javajs_util_T3$javajs_util_T3(v2, v1);
this.pt1f.scaleAdd2$F$javajs_util_T3$javajs_util_T3(fractionalOffset, this.vTemp, v1);
var mat=Clazz.new_($I$(9)).setAA$javajs_util_A4($I$(10).newVA$javajs_util_V3$F(this.vTemp, (nDegreesOffset * 3.141592653589793 / 180)));
this.vTemp2.sub2$javajs_util_T3$javajs_util_T3(ptRef, v1);
this.vTemp2.cross$javajs_util_T3$javajs_util_T3(this.vTemp, this.vTemp2);
this.vTemp2.cross$javajs_util_T3$javajs_util_T3(this.vTemp2, this.vTemp);
this.vTemp2.normalize$();
this.vTemp2.scale$F(scale / 2);
mat.rotate$javajs_util_T3(this.vTemp2);
var degrees=theta / 5;
while (Math.abs(degrees) > 5 )degrees /= 2;

var nPoints=Math.round(theta / degrees) + 1;
while (nPoints < 10){
degrees /= 2;
nPoints=Math.round(theta / degrees) + 1;
}
mat.setAA$javajs_util_A4($I$(10).newVA$javajs_util_V3$F(this.vTemp, (degrees * 3.141592653589793 / 180)));
this.screens=this.vwr.allocTempScreens$I(nPoints);
this.p3Screens=this.vwr.allocTempPoints$I(nPoints);
var iBase=nPoints - (this.dmesh.scale < 2  ? 3 : 3);
for (var i=0; i < nPoints; i++) {
if (i == iBase) this.pt0.setT$javajs_util_T3(this.pt1);
this.pt1.scaleAdd2$F$javajs_util_T3$javajs_util_T3(1, this.vTemp2, this.pt1f);
if (i == 0) this.pt2.setT$javajs_util_T3(this.pt1);
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(this.pt1, this.screens[i]);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pt1, this.p3Screens[i]);
mat.rotate$javajs_util_T3(this.vTemp2);
}
return nPoints;
}, p$1);

Clazz.newMeth(C$, 'getConnectionPoints', function () {
this.vertexCount=3;
var dmax=3.4028235E38;
var i0=0;
var j0=0;
for (var i=0; i < 2; i++) for (var j=2; j < 4; j++) {
var d=this.vertices[i].distance$javajs_util_T3(this.vertices[j]);
if (d < dmax ) {
dmax=d;
i0=i;
j0=j;
}}

this.pt0.ave$javajs_util_T3$javajs_util_T3(this.vertices[0], this.vertices[1]);
this.pt2.ave$javajs_util_T3$javajs_util_T3(this.vertices[2], this.vertices[3]);
this.pt1.ave$javajs_util_T3$javajs_util_T3(this.pt0, this.pt2);
this.vertices[3]=$I$(1).newP$javajs_util_T3(this.vertices[i0]);
this.vertices[3].add$javajs_util_T3(this.vertices[j0]);
this.vertices[3].scale$F(0.5);
this.vertices[1]=$I$(1).newP$javajs_util_T3(this.pt1);
this.vertices[0]=$I$(1).newP$javajs_util_T3(this.pt0);
this.vertices[2]=$I$(1).newP$javajs_util_T3(this.pt2);
for (var i=0; i < 4; i++) this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(this.vertices[i], this.screens[i]);

var f=4 * p$1.getArrowScale.apply(this, []);
var endoffset=0.2;
var offsetside=(this.width == 0  ? 0.1 : this.width);
this.pt0.set$F$F$F(this.screens[0].x, this.screens[0].y, this.screens[0].z);
this.pt1.set$F$F$F(this.screens[1].x, this.screens[1].y, this.screens[1].z);
this.pt2.set$F$F$F(this.screens[3].x, this.screens[3].y, this.screens[3].z);
var dx=(this.screens[1].x - this.screens[0].x) * f;
var dy=(this.screens[1].y - this.screens[0].y) * f;
if (dmax == 0  || $I$(11).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(this.pt2, this.pt0, $I$(1).new3$F$F$F(this.pt0.x, this.pt0.y, 10000.0), this.pt1, false) > 0  ) {
dx=-dx;
dy=-dy;
}this.pt2.set$F$F$F(dy, -dx, 0);
this.pt1.add$javajs_util_T3(this.pt2);
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(this.pt1, this.vertices[1]);
this.pt2.scale$F(offsetside);
this.vTemp.sub2$javajs_util_T3$javajs_util_T3(this.vertices[1], this.vertices[0]);
this.vTemp.scale$F(endoffset);
this.vertices[0].add$javajs_util_T3(this.vTemp);
this.vTemp.sub2$javajs_util_T3$javajs_util_T3(this.vertices[1], this.vertices[2]);
this.vTemp.scale$F(endoffset);
this.vertices[2].add$javajs_util_T3(this.vTemp);
for (var i=0; i < 3; i++) {
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(this.vertices[i], this.screens[i]);
if (offsetside != 0 ) {
this.screens[i].x+=Math.round(this.pt2.x);
this.screens[i].y+=Math.round(this.pt2.y);
this.pt1.set$F$F$F(this.screens[i].x, this.screens[i].y, this.screens[i].z);
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(this.pt1, this.vertices[i]);
}}
}, p$1);

Clazz.newMeth(C$, 'drawLineData$javajs_util_Lst', function (lineData) {
if (this.diameter == 0) this.diameter=3;
for (var i=lineData.size$(); --i >= 0; ) {
var pts=lineData.get$I(i);
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(pts[0], this.pt1i);
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(pts[1], this.pt2i);
this.drawEdge$I$I$Z$javajs_util_T3$javajs_util_T3$javajs_util_P3i$javajs_util_P3i(-1, -2, true, pts[0], pts[1], this.pt1i, this.pt2i);
}
}, p$1);

Clazz.newMeth(C$, 'renderXyPoint', function () {
var f=(this.g3d.isAntialiased$() ? 2 : 1);
this.pt0.setT$javajs_util_T3(this.vertices[0]);
if (this.diameter == 0) this.diameter=(this.width|0);
if (this.pt0.z == -3.4028235E38 ) {
this.pt0.x *= this.vwr.tm.width / 100.0;
this.pt0.y *= this.vwr.tm.height / 100.0;
this.diameter=((this.diameter * this.vwr.getScreenDim$() / 100.0)|0);
}this.diameter*=f;
this.pt1i.set$I$I$I(((this.pt0.x * f)|0), ((this.vwr.tm.height - this.pt0.y * f)|0), (this.vwr.tm.cameraDistance|0));
this.g3d.fillSphereI$I$javajs_util_P3i(this.diameter, this.pt1i);
}, p$1);

Clazz.newMeth(C$, 'renderXyArrow$I', function (ptXY) {
var ptXYZ=1 - ptXY;
var arrowPt=Clazz.array($I$(1), [2]);
arrowPt[ptXYZ]=this.pt1;
arrowPt[ptXY]=this.pt0;
this.pt0.set$F$F$F(this.screens[ptXY].x, this.screens[ptXY].y, this.screens[ptXY].z);
this.tm.rotatePoint$javajs_util_T3$javajs_util_T3(this.vertices[ptXYZ], this.pt1);
this.pt1.z *= -1;
var zoomDimension=this.vwr.getScreenDim$();
var scaleFactor=zoomDimension / 20.0;
this.pt1.scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.dmesh.scale * scaleFactor, this.pt1, this.pt0);
if (this.diameter == 0) this.diameter=1;
if (this.diameter < 0) this.g3d.drawDashedLineBits$I$I$javajs_util_P3$javajs_util_P3(8, 4, this.pt0, this.pt1);
 else this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(($b$[0] = 2, $b$[0]), this.diameter, this.pt0, this.pt1);
p$1.renderArrowHead$javajs_util_T3$javajs_util_T3$F$Z$Z$Z.apply(this, [this.pt0, this.pt1, 0, true, false, false]);
}, p$1);

Clazz.newMeth(C$, 'renderArrowHead$javajs_util_T3$javajs_util_T3$F$Z$Z$Z', function (pt1, pt2, factor2, isTransformed, withShaft, isBarb) {
if (this.dmesh.noHead) return;
if (this.s0f == null ) {
this.s0f=Clazz.new_($I$(1));
this.s1f=Clazz.new_($I$(1));
this.s2f=Clazz.new_($I$(1));
}var fScale=p$1.getArrowScale.apply(this, []);
if (isTransformed) fScale *= 40;
if (factor2 > 0 ) fScale *= factor2;
this.pt0f.setT$javajs_util_T3(pt1);
this.pt2f.setT$javajs_util_T3(pt2);
var d=this.pt0f.distance$javajs_util_T3(this.pt2f);
if (d == 0 ) return;
this.vTemp.sub2$javajs_util_T3$javajs_util_T3(this.pt2f, this.pt0f);
this.vTemp.normalize$();
this.vTemp.scale$F(fScale / 5);
if (!withShaft) this.pt2f.add$javajs_util_T3(this.vTemp);
this.vTemp.scale$F(5);
this.pt1f.sub2$javajs_util_T3$javajs_util_T3(this.pt2f, this.vTemp);
if (isTransformed) {
this.s1f.setT$javajs_util_T3(this.pt1f);
this.s2f.setT$javajs_util_T3(this.pt2f);
} else {
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pt2f, this.s2f);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pt1f, this.s1f);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pt0f, this.s0f);
}if (this.s2f.z == 1  || this.s1f.z == 1  ) return;
var headDiameter;
if (this.diameter > 0) {
headDiameter=this.diameter * 3;
} else {
this.vTemp.set$F$F$F(this.s2f.x - this.s1f.x, this.s2f.y - this.s1f.y, this.s2f.z - this.s1f.z);
headDiameter=Math.round(this.vTemp.length$() * 0.5);
this.diameter=(headDiameter/5|0);
}if (this.diameter < 1) this.diameter=1;
if (headDiameter > 2) this.g3d.fillConeScreen3f$B$I$javajs_util_P3$javajs_util_P3$Z(($b$[0] = 2, $b$[0]), headDiameter, this.s1f, this.s2f, isBarb);
if (withShaft) this.g3d.fillCylinderScreen3I$B$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$F(($b$[0] = 2, $b$[0]), this.diameter, this.s0f, this.s1f, null, null, 0);
}, p$1);

Clazz.newMeth(C$, 'getArrowScale', function () {
var fScale=(this.dmesh.isScaleSet ? this.dmesh.scale : 0);
if (fScale == 0 ) fScale=this.vwr.getFloat$I(570425352) * (this.dmesh.connectedAtoms == null  ? 1.0 : 0.5);
if (fScale <= 0 ) fScale=0.5;
return fScale;
}, p$1);

Clazz.newMeth(C$, 'renderHandles', function () {
var diameter=Math.round(10 * this.imageFontScaling);
switch (this.drawType) {
case $I$(7).NONE:
return;
default:
var colixFill=$I$(5).getColixTranslucent3$H$Z$F(23, true, 0.5);
this.bsHandles.clearAll$();
this.g3d.addRenderer$I(1073741880);
for (var i=this.dmesh.pc; --i >= 0; ) {
if (!this.isPolygonDisplayable$I(i)) continue;
var vertexIndexes=this.dmesh.pis[i];
if (vertexIndexes == null ) continue;
for (var j=(this.dmesh.isDrawPolygon ? 3 : vertexIndexes.length); --j >= 0; ) {
var k=vertexIndexes[j];
if (this.bsHandles.get$I(k)) continue;
this.bsHandles.set$I(k);
this.g3d.drawFilledCircle$H$H$I$I$I$I(23, colixFill, diameter, this.screens[k].x, this.screens[k].y, this.screens[k].z);
}
}
break;
}
}, p$1);

Clazz.newMeth(C$, 'renderInfo', function () {
if (this.isExport || this.mesh.title == null   || this.vwr.getDrawHover$()  || !this.g3d.setC$H(this.vwr.cm.colixBackgroundContrast) ) return;
for (var i=this.dmesh.pc; --i >= 0; ) if (this.isPolygonDisplayable$I(i)) {
var size=this.vwr.getFloat$I(570425356);
if (size <= 0 ) size=14;
this.vwr.gdata.setFontFid$B(($b$[0] = this.vwr.gdata.getFontFid$F(size * this.imageFontScaling), $b$[0]));
var s=this.mesh.title[i < this.mesh.title.length ? i : this.mesh.title.length - 1];
var pt=0;
if (s.length$() > 1 && s.charAt$I(0) == ">" ) {
pt=this.dmesh.pis[i].length - 1;
s=s.substring$I(1);
if (this.drawType === $I$(7).ARC ) this.pt1f.setT$javajs_util_T3(this.pt2f);
}if (this.drawType !== $I$(7).ARC ) this.pt1f.setT$javajs_util_T3(this.vertices[this.dmesh.pis[i][pt]]);
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(this.pt1f, this.pt1i);
var offset=Math.round(5 * this.imageFontScaling);
this.g3d.drawString$S$javajs_awt_Font$I$I$I$I$H(s, null, this.pt1i.x + offset, this.pt1i.y - offset, this.pt1i.z, this.pt1i.z, 0);
break;
}
}, p$1);
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-16 07:20:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
