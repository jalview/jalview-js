(function(){var P$=Clazz.newPackage("org.jmol.export"),p$1={},I$=[[0,'javajs.util.P3','org.jmol.api.Interface','org.jmol.g3d.HermiteRenderer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Export3D", null, null, 'org.jmol.api.JmolRendererInterface');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.exporter=null;
this.privateKey=0;
this.gdata=null;
this.colix=0;
this.hermite3d=null;
this.width=0;
this.height=0;
this.slab=0;
this.depth=0;
this.exportName=null;
this.webGL=false;
this.isCartesian=false;
this.ptA=null;
this.ptB=null;
this.ptC=null;
this.ptD=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.ptA=Clazz.new_($I$(1));
this.ptB=Clazz.new_($I$(1));
this.ptC=Clazz.new_($I$(1));
this.ptD=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'isWebGL$', function () {
return this.webGL;
});

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initializeExporter$org_jmol_viewer_Viewer$D$org_jmol_util_GData$java_util_Map', function (vwr, privateKey, gdata, params) {
this.exportName=params.get$O("type");
this.webGL=this.exportName.equals$O("JS");
if ((this.exporter=$I$(2).getOption$S$org_jmol_viewer_Viewer$S("export." + (this.webGL ? "" : "_") + this.exportName + "Exporter" , vwr, "export")) == null ) return null;
this.exporter.export3D=this;
this.isCartesian=(this.exporter.exportType == 1);
this.gdata=gdata;
gdata.setNewWindowParametersForExport$();
this.slab=gdata.slab;
this.width=gdata.width;
this.height=gdata.height;
this.privateKey=privateKey;
return (this.initializeOutput$org_jmol_viewer_Viewer$D$java_util_Map(vwr, privateKey, params) ? this.exporter : null);
});

Clazz.newMeth(C$, 'initializeOutput$org_jmol_viewer_Viewer$D$java_util_Map', function (vwr, privateKey, params) {
return this.exporter.initializeOutput$org_jmol_viewer_Viewer$D$org_jmol_util_GData$java_util_Map(vwr, privateKey, this.gdata, params);
});

Clazz.newMeth(C$, 'getExportType$', function () {
return this.exporter.exportType;
});

Clazz.newMeth(C$, 'getExportName$', function () {
return this.exportName;
});

Clazz.newMeth(C$, 'finalizeOutput$', function () {
return this.exporter.finalizeOutput$();
});

Clazz.newMeth(C$, 'setSlab$I', function (slabValue) {
this.gdata.setSlab$I(slabValue);
this.slab=this.gdata.slab;
});

Clazz.newMeth(C$, 'setSlabAndZShade$I$I$I$I$I', function (slabValue, depthValue, zSlab, zDepth, zPower) {
this.gdata.setSlab$I(slabValue);
this.slab=this.gdata.slab;
this.gdata.setDepth$I(depthValue);
this.depth=this.gdata.depth;
});

Clazz.newMeth(C$, 'renderBackground$org_jmol_api_JmolRendererInterface', function (me) {
if (!this.isCartesian) this.gdata.renderBackground$org_jmol_api_JmolRendererInterface(me);
});

Clazz.newMeth(C$, 'drawAtom$org_jmol_modelset_Atom$F', function (atom, radius) {
this.exporter.drawAtom$org_jmol_modelset_Atom$F(atom, radius);
});

Clazz.newMeth(C$, 'drawRect$I$I$I$I$I$I', function (x, y, z, zSlab, rWidth, rHeight) {
if (this.webGL) {
return;
}if (zSlab != 0 && this.gdata.isClippedZ$I(zSlab) ) return;
var w=rWidth - 1;
var h=rHeight - 1;
var xRight=x + w;
var yBottom=y + h;
if (y >= 0 && y < this.height ) p$1.drawHLine$I$I$I$I.apply(this, [x, y, z, w]);
if (yBottom >= 0 && yBottom < this.height ) p$1.drawHLine$I$I$I$I.apply(this, [x, yBottom, z, w]);
if (x >= 0 && x < this.width ) p$1.drawVLine$I$I$I$I.apply(this, [x, y, z, h]);
if (xRight >= 0 && xRight < this.width ) p$1.drawVLine$I$I$I$I.apply(this, [xRight, y, z, h]);
});

Clazz.newMeth(C$, 'drawHLine$I$I$I$I', function (x, y, z, w) {
var argbCurrent=this.gdata.getColorArgbOrGray$H(this.colix);
if (w < 0) {
x+=w;
w=-w;
}for (var i=0; i <= w; i++) {
this.exporter.drawTextPixel$I$I$I$I(argbCurrent, x + i, y, z);
}
}, p$1);

Clazz.newMeth(C$, 'drawVLine$I$I$I$I', function (x, y, z, h) {
var argbCurrent=this.gdata.getColorArgbOrGray$H(this.colix);
if (h < 0) {
y+=h;
h=-h;
}for (var i=0; i <= h; i++) {
this.exporter.drawTextPixel$I$I$I$I(argbCurrent, x, y + i, z);
}
}, p$1);

Clazz.newMeth(C$, 'drawFilledCircle$H$H$I$I$I$I', function (colixRing, colixFill, diameter, x, y, z) {
if (!this.gdata.isClippedZ$I(z)) this.exporter.drawFilledCircle$H$H$I$I$I$I(colixRing, colixFill, diameter, x, y, z);
});

Clazz.newMeth(C$, 'drawCircle$H$I$I$I$I$Z', function (colix, diameter, x, y, z, doFill) {
if (!this.gdata.isClippedZ$I(z)) this.exporter.drawCircle$I$I$I$I$H$Z(x, y, z, diameter, colix, doFill);
});

Clazz.newMeth(C$, 'fillSphereXYZ$I$I$I$I', function (diameter, x, y, z) {
this.ptA.set$F$F$F(x, y, z);
this.fillSphereBits$I$javajs_util_P3(diameter, this.ptA);
});

Clazz.newMeth(C$, 'fillSphereI$I$javajs_util_P3i', function (diameter, center) {
this.ptA.set$F$F$F(center.x, center.y, center.z);
this.fillSphereBits$I$javajs_util_P3(diameter, this.ptA);
});

Clazz.newMeth(C$, 'fillSphereBits$I$javajs_util_P3', function (diameter, center) {
if (diameter != 0) this.exporter.fillSphere$H$I$javajs_util_P3(this.colix, diameter, center);
});

Clazz.newMeth(C$, 'fillTextRect$I$I$I$I$I$I', function (x, y, z, zSlab, widthFill, heightFill) {
if (this.isCartesian || this.gdata.isClippedZ$I(zSlab) ) return;
z=this.exporter.fixScreenZ$I(z);
this.ptA.set$F$F$F(x, y, z);
this.ptB.set$F$F$F(x + widthFill, y, z);
this.ptC.set$F$F$F(x + widthFill, y + heightFill, z);
this.ptD.set$F$F$F(x, y + heightFill, z);
this.fillQuadrilateral$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(this.ptA, this.ptB, this.ptC, this.ptD, false);
});

Clazz.newMeth(C$, 'drawString$S$javajs_awt_Font$I$I$I$I$H', function (str, font3d, xBaseline, yBaseline, z, zSlab, bgcolix) {
if (str != null  && !this.gdata.isClippedZ$I(zSlab) ) this.drawStringNoSlab$S$javajs_awt_Font$I$I$I$H(str, font3d, xBaseline, yBaseline, z, bgcolix);
});

Clazz.newMeth(C$, 'drawStringNoSlab$S$javajs_awt_Font$I$I$I$H', function (str, font3d, xBaseline, yBaseline, z, bgcolix) {
if (str == null ) return;
z=Math.max(this.slab, z);
if (font3d == null ) font3d=this.gdata.getFont3DCurrent$();
 else this.gdata.setFont$javajs_awt_Font(font3d);
this.exporter.plotText$I$I$I$H$S$javajs_awt_Font(xBaseline, yBaseline, z, this.colix, str, font3d);
});

Clazz.newMeth(C$, 'drawImage$O$I$I$I$I$H$I$I', function (objImage, x, y, z, zSlab, bgcolix, width, height) {
if (this.isCartesian || objImage == null   || width == 0  || height == 0  || this.gdata.isClippedZ$I(zSlab) ) return;
z=Math.max(this.slab, z);
this.exporter.plotImage$I$I$I$O$H$I$I(x, y, z, objImage, bgcolix, width, height);
});

Clazz.newMeth(C$, 'drawPixel$I$I$I', function (x, y, z) {
this.plotPixelClipped$I$I$I(x, y, z);
});

Clazz.newMeth(C$, 'plotPixelClipped$I$I$I', function (x, y, z) {
if (this.isClipped$I$I$I(x, y, z)) return;
this.exporter.drawPixel$H$I$I$I$I(this.colix, x, y, z, 1);
});

Clazz.newMeth(C$, 'plotPixelClippedP3i$javajs_util_P3i', function (screen) {
if (this.isClipped$I$I$I(screen.x, screen.y, screen.z)) return;
this.exporter.drawPixel$H$I$I$I$I(this.colix, screen.x, screen.y, screen.z, 1);
});

Clazz.newMeth(C$, 'drawPoints$I$IA$I', function (count, coordinates, scale) {
for (var i=count * 3; i > 0; ) {
var z=coordinates[--i];
var y=coordinates[--i];
var x=coordinates[--i];
if (this.isClipped$I$I$I(x, y, z)) continue;
this.exporter.drawPixel$H$I$I$I$I(this.colix, x, y, z, scale);
}
});

Clazz.newMeth(C$, 'drawDashedLineBits$I$I$javajs_util_P3$javajs_util_P3', function (run, rise, pointA, pointB) {
this.exporter.fillCylinderScreenMad$H$B$I$javajs_util_P3$javajs_util_P3(this.colix, ($b$[0] = 2, $b$[0]), this.exporter.lineWidthMad, pointA, pointB);
});

Clazz.newMeth(C$, 'drawLineXYZ$I$I$I$I$I$I', function (x1, y1, z1, x2, y2, z2) {
this.ptA.set$F$F$F(x1, y1, z1);
this.ptB.set$F$F$F(x2, y2, z2);
this.exporter.fillCylinderScreenMad$H$B$I$javajs_util_P3$javajs_util_P3(this.colix, ($b$[0] = 2, $b$[0]), this.exporter.lineWidthMad, this.ptA, this.ptB);
});

Clazz.newMeth(C$, 'drawLine$H$H$I$I$I$I$I$I', function (colixA, colixB, xA, yA, zA, xB, yB, zB) {
this.fillCylinderXYZ$H$H$B$I$I$I$I$I$I$I(colixA, colixB, ($b$[0] = 2, $b$[0]), this.exporter.lineWidthMad, xA, yA, zA, xB, yB, zB);
});

Clazz.newMeth(C$, 'drawLineBits$H$H$javajs_util_P3$javajs_util_P3', function (colixA, colixB, pointA, pointB) {
this.fillCylinderBits2$H$H$B$I$javajs_util_P3$javajs_util_P3(colixA, colixB, ($b$[0] = 2, $b$[0]), this.exporter.lineWidthMad, pointA, pointB);
});

Clazz.newMeth(C$, 'drawLineAB$javajs_util_P3$javajs_util_P3', function (pointA, pointB) {
this.exporter.fillCylinderScreenMad$H$B$I$javajs_util_P3$javajs_util_P3(this.colix, ($b$[0] = 2, $b$[0]), this.exporter.lineWidthMad, pointA, pointB);
});

Clazz.newMeth(C$, 'drawBond$javajs_util_P3$javajs_util_P3$H$H$B$H$I', function (atomA, atomB, colixA, colixB, endcaps, mad, bondOrder) {
if (mad == 1) mad=this.exporter.lineWidthMad;
this.exporter.drawCylinder$javajs_util_P3$javajs_util_P3$H$H$B$I$I(atomA, atomB, colixA, colixB, ($b$[0] = endcaps, $b$[0]), mad, bondOrder);
});

Clazz.newMeth(C$, 'fillCylinderXYZ$H$H$B$I$I$I$I$I$I$I', function (colixA, colixB, endcaps, mad, xA, yA, zA, xB, yB, zB) {
this.ptA.set$F$F$F(xA, yA, zA);
this.ptB.set$F$F$F(xB, yB, zB);
this.exporter.drawCylinder$javajs_util_P3$javajs_util_P3$H$H$B$I$I(this.ptA, this.ptB, colixA, colixB, ($b$[0] = endcaps, $b$[0]), mad, 1);
});

Clazz.newMeth(C$, 'fillCylinderScreen3I$B$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$F', function (endcaps, diameter, pointA, pointB, pt0f, pt1f, radius) {
if (diameter <= 0) return;
this.exporter.fillCylinderScreen$H$B$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$F(this.colix, ($b$[0] = endcaps, $b$[0]), diameter, pointA, pointB, pt0f, pt1f, radius);
});

Clazz.newMeth(C$, 'fillCylinder$B$I$javajs_util_P3i$javajs_util_P3i', function (endcaps, diameter, pointA, pointB) {
if (diameter <= 0) return;
this.ptA.set$F$F$F(pointA.x, pointA.y, pointA.z);
this.ptB.set$F$F$F(pointB.x, pointB.y, pointB.z);
this.exporter.fillCylinderScreenMad$H$B$I$javajs_util_P3$javajs_util_P3(this.colix, ($b$[0] = endcaps, $b$[0]), diameter, this.ptA, this.ptB);
});

Clazz.newMeth(C$, 'fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3', function (endcaps, diameter, pointA, pointB) {
if (diameter <= 0) return;
if (this.isCartesian) {
this.exporter.fillCylinderScreen$H$B$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$F(this.colix, ($b$[0] = endcaps, $b$[0]), diameter, pointA, pointB, null, null, 0);
} else {
this.exporter.fillCylinderScreenMad$H$B$I$javajs_util_P3$javajs_util_P3(this.colix, ($b$[0] = endcaps, $b$[0]), diameter, pointA, pointB);
}});

Clazz.newMeth(C$, 'fillConeScreen3f$B$I$javajs_util_P3$javajs_util_P3$Z', function (endcap, screenDiameter, pointBase, screenTip, isBarb) {
this.exporter.fillConeScreen$H$B$I$javajs_util_P3$javajs_util_P3$Z(this.colix, ($b$[0] = endcap, $b$[0]), screenDiameter, pointBase, screenTip, isBarb);
});

Clazz.newMeth(C$, 'drawHermite4$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (tension, s0, s1, s2, s3) {
this.hermite3d.renderHermiteRope$Z$I$I$I$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3(false, tension, 0, 0, 0, s0, s1, s2, s3);
});

Clazz.newMeth(C$, 'fillHermite$I$I$I$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (tension, diameterBeg, diameterMid, diameterEnd, s0, s1, s2, s3) {
this.hermite3d.renderHermiteRope$Z$I$I$I$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3(true, tension, diameterBeg, diameterMid, diameterEnd, s0, s1, s2, s3);
});

Clazz.newMeth(C$, 'drawTriangle3C$javajs_util_P3i$H$javajs_util_P3i$H$javajs_util_P3i$H$I', function (screenA, colixA, screenB, colixB, screenC, colixC, check) {
if ((check & 1) == 1) this.drawLine$H$H$I$I$I$I$I$I(colixA, colixB, screenA.x, screenA.y, screenA.z, screenB.x, screenB.y, screenB.z);
if ((check & 2) == 2) this.drawLine$H$H$I$I$I$I$I$I(colixB, colixC, screenB.x, screenB.y, screenB.z, screenC.x, screenC.y, screenC.z);
if ((check & 4) == 4) this.drawLine$H$H$I$I$I$I$I$I(colixA, colixC, screenA.x, screenA.y, screenA.z, screenC.x, screenC.y, screenC.z);
});

Clazz.newMeth(C$, 'drawLineBits$javajs_util_P3$javajs_util_P3$H$H', function (screenA, screenB, colixA, colixB) {
this.exporter.drawCylinder$javajs_util_P3$javajs_util_P3$H$H$B$I$I(screenA, screenB, colixA, colixB, ($b$[0] = 2, $b$[0]), this.exporter.lineWidthMad, 1);
});

Clazz.newMeth(C$, 'fillCylinderBits2$H$H$B$I$javajs_util_P3$javajs_util_P3', function (colixA, colixB, endcaps, mad, screenA, screenB) {
this.exporter.drawCylinder$javajs_util_P3$javajs_util_P3$H$H$B$I$I(screenA, screenB, colixA, colixB, ($b$[0] = endcaps, $b$[0]), mad, 1);
});

Clazz.newMeth(C$, 'fillTriangle3CNBits$javajs_util_P3$H$H$javajs_util_P3$H$H$javajs_util_P3$H$H$Z', function (pA, colixA, nA, pB, colixB, nB, pC, colixC, nC, twoSided) {
if (colixA != colixB || colixB != colixC ) {
return;
}this.exporter.fillTriangle$H$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(colixA, pA, pB, pC, twoSided);
});

Clazz.newMeth(C$, 'fillTriangle3CN$javajs_util_P3i$H$H$javajs_util_P3i$H$H$javajs_util_P3i$H$H', function (pointA, colixA, normixA, pointB, colixB, normixB, pointC, colixC, normixC) {
});

Clazz.newMeth(C$, 'fillTriangleTwoSided$H$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (normix, a, b, c) {
this.exporter.fillTriangle$H$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(this.colix, a, b, c, true);
});

Clazz.newMeth(C$, 'fillTriangle3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z', function (pointA, pointB, pointC, setNoisy) {
this.exporter.fillTriangle$H$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(this.colix, pointA, pointB, pointC, false);
});

Clazz.newMeth(C$, 'fillTriangle3i$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z', function (screenA, screenB, screenC, ptA0, ptB0, ptC0, doShade) {
this.exporter.fillTriangle$H$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(this.colix, screenA, screenB, screenC, true);
});

Clazz.newMeth(C$, 'fillQuadrilateral$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z', function (pointA, pointB, pointC, pointD, isSolid) {
this.exporter.fillTriangle$H$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(this.colix, pointA, pointB, pointC, false);
this.exporter.fillTriangle$H$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(this.colix, pointA, pointC, pointD, false);
});

Clazz.newMeth(C$, 'drawSurface$org_jmol_util_MeshSurface$H', function (meshSurface, colix) {
this.exporter.drawSurface$org_jmol_util_MeshSurface$H(meshSurface, colix);
});

Clazz.newMeth(C$, 'fillEllipsoid$javajs_util_P3$javajs_util_P3A$I$I$I$I$javajs_util_M3$DA$javajs_util_M4$I$javajs_util_P3A', function (center, points, x, y, z, diameter, mToEllipsoidal, coef, mDeriv, selectedOctant, octantPoints) {
this.exporter.fillEllipsoid$javajs_util_P3$javajs_util_P3A$H$I$I$I$I$javajs_util_M3$DA$javajs_util_M4$javajs_util_P3A(center, points, this.colix, x, y, z, diameter, mToEllipsoidal, coef, mDeriv, octantPoints);
});

Clazz.newMeth(C$, 'drawEllipse$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z$Z', function (ptAtom, ptX, ptY, fillArc, wireframeOnly) {
return this.exporter.drawEllipse$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$Z(ptAtom, ptX, ptY, this.colix, fillArc);
});

Clazz.newMeth(C$, 'isAntialiased$', function () {
return false;
});

Clazz.newMeth(C$, 'checkTranslucent$Z', function (isAlphaTranslucent) {
return true;
});

Clazz.newMeth(C$, 'haveTranslucentObjects$', function () {
return true;
});

Clazz.newMeth(C$, 'setC$H', function (colix) {
this.colix=colix;
this.gdata.setC$H(colix);
return true;
});

Clazz.newMeth(C$, 'isInDisplayRange$I$I', function (x, y) {
return (this.isCartesian || this.gdata.isInDisplayRange$I$I(x, y) );
});

Clazz.newMeth(C$, 'clipCode$I$I$I', function (x, y, z) {
return (this.isCartesian ? this.gdata.clipCode$I(z) : this.gdata.clipCode3$I$I$I(x, y, z));
});

Clazz.newMeth(C$, 'isClippedXY$I$I$I', function (diameter, x, y) {
return (!this.isCartesian && this.gdata.isClippedXY$I$I$I(diameter, x, y) );
});

Clazz.newMeth(C$, 'isClipped$I$I$I', function (x, y, z) {
return (this.gdata.isClippedZ$I(z) || this.isClipped$I$I(x, y) );
});

Clazz.newMeth(C$, 'isClipped$I$I', function (x, y) {
return (!this.isCartesian && this.gdata.isClipped$I$I(x, y) );
});

Clazz.newMeth(C$, 'getPrivateKey$', function () {
return this.privateKey;
});

Clazz.newMeth(C$, 'volumeRender4$I$I$I$I', function (diam, x, y, z) {
this.fillSphereXYZ$I$I$I$I(diam, x, y, z);
});

Clazz.newMeth(C$, 'renderCrossHairs$IA$I$I$javajs_util_P3$F', function (minMax, screenWidth, screenHeight, navigationOffset, navigationDepthPercent) {
});

Clazz.newMeth(C$, 'volumeRender$Z', function (TF) {
});

Clazz.newMeth(C$, 'addRenderer$I', function (tok) {
if (tok == 553648146) this.hermite3d=Clazz.new_($I$(3)).set$org_jmol_api_JmolRendererInterface$org_jmol_util_GData(this, this.gdata);
});

Clazz.newMeth(C$, 'plotImagePixel$I$I$I$I$B$I$I$I$IA$O$I', function (argb, x, y, z, shade, bgargb, width, height, pbuf, p, transpLog) {
if (this.webGL) return;
z=Math.max(this.slab, z);
if (shade != 0) {
var a=(shade == 8 ? 255 : ((8 - shade) << 4) + (8 - shade));
argb=(argb & 16777215) | (a << 24);
}this.exporter.drawTextPixel$I$I$I$I(argb, x, y, z);
});

Clazz.newMeth(C$, 'drawHermite7$Z$Z$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$I$H', function (fill, border, tension, s0, s1, s2, s3, s4, s5, s6, s7, aspectRatio, colixBack) {
if (colixBack == 0 || this.webGL ) {
this.hermite3d.renderHermiteRibbon$Z$Z$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$I$I(fill, border, tension, s0, s1, s2, s3, s4, s5, s6, s7, aspectRatio, 0);
return;
}this.hermite3d.renderHermiteRibbon$Z$Z$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$I$I(fill, border, tension, s0, s1, s2, s3, s4, s5, s6, s7, aspectRatio, 1);
var colix=this.colix;
this.setC$H(colixBack);
this.hermite3d.renderHermiteRibbon$Z$Z$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$I$I(fill, border, tension, s0, s1, s2, s3, s4, s5, s6, s7, aspectRatio, -1);
this.setC$H(colix);
});

Clazz.newMeth(C$, 'renderAllStrings$O', function (jr) {
if (this.webGL) {
return;
}this.gdata.renderAllStrings$O(this);
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
