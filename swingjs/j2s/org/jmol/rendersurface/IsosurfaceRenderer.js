(function(){var P$=Clazz.newPackage("org.jmol.rendersurface"),p$1={},I$=[[0,'Boolean','javajs.util.V3','org.jmol.util.C','org.jmol.util.Normix']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IsosurfaceRenderer", null, 'org.jmol.render.MeshRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.iHideBackground=false;
this.isBicolorMap=false;
this.backgroundColix=0;
this.nError=0;
this.vertexValues=null;
this.imesh=null;
this.isosurface=null;
this.isNavigationMode=false;
this.iShowNormals=false;
this.showNumbers=false;
this.showKey=null;
this.hasColorRange=false;
this.meshScale=0;
this.mySlabValue=0;
this.globalSlabValue=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.nError=0;
this.meshScale=-1;
}, 1);

Clazz.newMeth(C$, 'render$', function () {
return this.renderIso$();
});

Clazz.newMeth(C$, 'renderIso$', function () {
p$1.setGlobals.apply(this, []);
for (var i=this.isosurface.meshCount; --i >= 0; ) {
this.mesh=this.imesh=this.isosurface.meshes[i];
if (this.imesh.connectedAtoms != null  && !this.vwr.ms.at[this.imesh.connectedAtoms[0]].checkVisible$() ) continue;
this.hasColorRange=false;
if (p$1.renderMeshSlab.apply(this, [])) {
this.renderInfo$();
if (this.isExport && this.isGhostPass ) {
this.exportPass=1;
p$1.renderMeshSlab.apply(this, []);
this.exportPass=2;
}}}
return this.needTranslucent;
});

Clazz.newMeth(C$, 'setGlobals', function () {
this.needTranslucent=false;
this.antialias=this.g3d.isAntialiased$();
this.iShowNormals=this.vwr.getBoolean$I(603979965);
this.showNumbers=this.vwr.getBoolean$I(603979964);
this.isosurface=this.shape;
this.exportPass=(this.isExport ? 2 : 0);
this.isNavigationMode=this.vwr.getBoolean$I(603979889);
this.showKey=(this.vwr.getBoolean$I(603979867) ? $I$(1).TRUE : null);
this.isosurface.keyXy=null;
this.meshScale=-1;
this.globalSlabValue=this.vwr.gdata.slab;
this.mySlabValue=(this.isNavigationMode ? (this.tm.getNavigationOffset$().z|0) : 2147483647);
}, p$1);

Clazz.newMeth(C$, 'renderInfo$', function () {
if (this.isExport || !this.hasColorRange || this.imesh.colorEncoder == null    || $I$(1).TRUE !== this.showKey  ) return;
this.showKey=$I$(1).FALSE;
var colors=null;
var colixes=null;
var vContours=null;
var n=0;
var type=0;
if (this.imesh.showContourLines) {
vContours=this.imesh.getContours$();
if (vContours == null ) {
colixes=this.imesh.jvxlData.contourColixes;
if (colixes == null ) return;
n=colixes.length;
} else {
n=vContours.length;
type=1;
}} else {
colors=this.imesh.colorEncoder.getColorSchemeArray$I(this.imesh.colorEncoder.currentPalette);
n=(colors == null  ? 0 : colors.length);
type=2;
}if (n < 2) return;
var factor=(this.antialias ? 2 : 1);
var height=this.vwr.getScreenHeight$() * factor;
var dy=(height/2 / (n - 1) |0);
var y=(height/4|0) * 3 - dy;
var x=10 * factor;
var dx=20 * factor;
this.isosurface.keyXy=Clazz.array(Integer.TYPE, -1, [(x/factor|0), 0, ((x + dx)/factor|0), ((y + dy)/factor|0), (dy/factor|0)]);
for (var i=0; i < n; i++, y-=dy) {
switch (type) {
case 0:
if (!this.g3d.setC$H(colixes[i])) return;
break;
case 1:
if (!this.g3d.setC$H((vContours[i].get$I(3))[0])) return;
break;
case 2:
this.vwr.gdata.setColor$I(colors[i]);
break;
}
this.g3d.fillTextRect$I$I$I$I$I$I(x, y, 5, -2147483648, dx, dy);
}
this.isosurface.keyXy[1]=((y + dy)/factor|0);
});

Clazz.newMeth(C$, 'renderMeshSlab', function () {
this.volumeRender=(this.imesh.jvxlData.colorDensity && this.imesh.jvxlData.allowVolumeRender );
var thisSlabValue=this.mySlabValue;
this.frontOnly=this.mesh.frontOnly || this.shapeID == 26 ;
this.isShell=this.mesh.isShell && this.shapeID != 26 ;
if (!this.isNavigationMode) {
this.meshSlabValue=this.imesh.jvxlData.slabValue;
if (this.meshSlabValue != -2147483648 && this.imesh.jvxlData.isSlabbable ) {
var points=this.imesh.jvxlData.boundingBox;
var z0=3.4028235E38;
var z1=1.4E-45;
for (var i=points.length; --i >= 0; ) {
this.pt2f.setT$javajs_util_T3(points[i]);
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.pt2f, this.pt2f);
if (this.pt2f.z < z0 ) z0=this.pt2f.z;
if (this.pt2f.z > z1 ) z1=this.pt2f.z;
}
thisSlabValue=Math.round(z0 + (z1 - z0) * (100.0 - this.meshSlabValue) / 100);
this.frontOnly&=(this.meshSlabValue >= 100);
this.isShell&=(this.meshSlabValue >= 100);
}}var tCover=this.vwr.gdata.translucentCoverOnly;
this.vwr.gdata.translucentCoverOnly=(this.frontOnly || !this.vwr.getBoolean$I(603979967) );
this.thePlane=this.imesh.jvxlData.jvxlPlane;
this.vertexValues=this.mesh.vvs;
var isOK;
if (thisSlabValue != 2147483647 && this.imesh.jvxlData.isSlabbable ) {
this.g3d.setSlab$I(thisSlabValue);
isOK=this.renderMesh2$org_jmol_shape_Mesh(this.mesh);
this.g3d.setSlab$I(this.globalSlabValue);
} else {
isOK=this.renderMesh2$org_jmol_shape_Mesh(this.mesh);
}this.vwr.gdata.translucentCoverOnly=tCover;
return isOK;
}, p$1);

Clazz.newMeth(C$, 'render2$Z', function (isExport) {
if (this.volumeRender) {
this.renderPoints$();
return;
}switch (this.imesh.dataType) {
case 70:
p$1.renderLonePair$Z.apply(this, [false]);
return;
case 71:
p$1.renderLonePair$Z.apply(this, [true]);
return;
}
this.isBicolorMap=this.imesh.jvxlData.isBicolorMap;
this.render2b$Z(isExport);
if (!this.g3d.setC$H(4)) return;
if (this.imesh.showContourLines) p$1.renderContourLines.apply(this, []);
});

Clazz.newMeth(C$, 'renderLonePair$Z', function (isRadical) {
this.pt2f.setT$javajs_util_T3(this.vertices[1]);
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.pt2f, this.pt2f);
var r=(this.vwr.tm.scaleToScreen$I$I((this.pt2f.z|0), 100)|0);
if (r < 1) r=1;
if (!isRadical) {
var v1=Clazz.new_($I$(2));
var v2=Clazz.new_($I$(2));
this.pt1f.setT$javajs_util_T3(this.vertices[0]);
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.pt1f, this.pt1f);
v1.sub2$javajs_util_T3$javajs_util_T3(this.pt2f, this.pt1f);
v2.set$F$F$F(v1.x, v1.y, v1.z + 1);
v2.cross$javajs_util_T3$javajs_util_T3(v2, v1);
v2.normalize$();
var f=this.vwr.tm.scaleToScreen$I$I((this.pt1f.z|0), 100);
v2.scale$F(f);
this.pt1f.add2$javajs_util_T3$javajs_util_T3(this.pt2f, v2);
this.pt2f.sub$javajs_util_T3(v2);
this.screens[0].set$I$I$I(Math.round(this.pt1f.x), Math.round(this.pt1f.y), Math.round(this.pt1f.z));
this.g3d.fillSphereI$I$javajs_util_P3i(r, this.screens[0]);
}this.screens[1].set$I$I$I(Math.round(this.pt2f.x), Math.round(this.pt2f.y), Math.round(this.pt2f.z));
this.g3d.fillSphereI$I$javajs_util_P3i(r, this.screens[1]);
}, p$1);

Clazz.newMeth(C$, 'renderContourLines', function () {
var vContours=this.imesh.getContours$();
if (vContours == null ) {
if (this.imesh.jvxlData.contourValues != null ) this.hasColorRange=true;
return;
}this.hasColorRange=(this.mesh.meshColix == 0);
for (var i=vContours.length; --i >= 0; ) {
var v=vContours[i];
if (v.size$() < 6) continue;
this.colix=(this.mesh.meshColix == 0 ? (v.get$I(3))[0] : this.mesh.meshColix);
if (!this.g3d.setC$H(this.colix)) return;
var n=v.size$() - 1;
var diam=p$1.getDiameter.apply(this, []);
for (var j=6; j < n; j++) {
var pt1=v.get$I(j);
var pt2=v.get$I(++j);
if (Float.isNaN$F(pt1.x) || Float.isNaN$F(pt2.x) ) break;
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(pt1, this.pt1f);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(pt2, this.pt2f);
this.pt1f.z -= 2;
this.pt2f.z -= 2;
if (!this.antialias && diam == 1 ) {
this.g3d.drawLineAB$javajs_util_P3$javajs_util_P3(this.pt1f, this.pt2f);
} else {
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(($b$[0] = 1, $b$[0]), diam, this.pt1f, this.pt2f);
}}
}
}, p$1);

Clazz.newMeth(C$, 'renderPoints$', function () {
try {
if (this.volumeRender) this.g3d.volumeRender$Z(true);
var slabPoints=((this.volumeRender || this.mesh.pc == 0 ) && this.selectedPolyOnly );
var incr=this.imesh.vertexIncrement;
var diam;
if (this.mesh.diameter <= 0) {
diam=this.vwr.getInt$I(553648143);
this.frontOnly=this.isShell=false;
} else {
diam=(this.vwr.getScreenDim$()/(this.volumeRender ? 50 : 100)|0);
}var ptSize=Math.round(Float.isNaN$F(this.mesh.volumeRenderPointSize) ? 150 : this.mesh.volumeRenderPointSize * 1000);
if (diam < 1) diam=1;
var cX=(this.showNumbers ? (this.vwr.getScreenWidth$()/2|0) : 0);
var cY=(this.showNumbers ? (this.vwr.getScreenHeight$()/2|0) : 0);
if (this.showNumbers) this.vwr.gdata.setFontFid$B(($b$[0] = this.vwr.gdata.getFontFidFS$S$F("Monospaced", 24), $b$[0]));
for (var i=(!this.imesh.hasGridPoints || this.imesh.firstRealVertex < 0  ? 0 : this.imesh.firstRealVertex); i < this.vertexCount; i+=incr) {
if (this.vertexValues != null  && Float.isNaN$F(this.vertexValues[i])  || this.frontOnly && !this.isVisibleNormix$H(this.normixes[i])   || this.imesh.jvxlData.thisSet >= 0 && this.mesh.vertexSets[i] != this.imesh.jvxlData.thisSet   || !this.mesh.isColorSolid && this.mesh.vcs != null   && !this.setColix$H(this.mesh.vcs[i])   || this.haveBsDisplay && !this.mesh.bsDisplay.get$I(i)   || slabPoints && !this.bsPolygons.get$I(i)  ) continue;
this.hasColorRange=true;
if (this.showNumbers && this.screens[i].z > 10  && Math.abs(this.screens[i].x - cX) < 150  && Math.abs(this.screens[i].y - cY) < 150 ) {
var s=i + (this.mesh.isColorSolid ? "" : " " + new Float(this.mesh.vvs[i]).toString());
this.g3d.setC$H(4);
this.g3d.drawStringNoSlab$S$javajs_awt_Font$I$I$I$H(s, null, this.screens[i].x, this.screens[i].y, this.screens[i].z - 30, 0);
}if (this.volumeRender) {
diam=(this.vwr.tm.scaleToScreen$I$I(this.screens[i].z, ptSize)|0);
if (diam < 1) diam=1;
this.g3d.volumeRender4$I$I$I$I(diam, this.screens[i].x, this.screens[i].y, this.screens[i].z);
} else {
this.g3d.fillSphereI$I$javajs_util_P3i(diam, this.screens[i]);
}}
if (incr == 3) {
this.g3d.setC$H(this.isTranslucent ? $I$(3).getColixTranslucent3$H$Z$F(12, true, 0.5) : 12);
for (var i=1; i < this.vertexCount; i+=3) this.g3d.fillCylinder$B$I$javajs_util_P3i$javajs_util_P3i(($b$[0] = 3, $b$[0]), (diam/4|0), this.screens[i], this.screens[i + 1]);

this.g3d.setC$H(this.isTranslucent ? $I$(3).getColixTranslucent3$H$Z$F(21, true, 0.5) : 21);
for (var i=1; i < this.vertexCount; i+=3) this.g3d.fillSphereI$I$javajs_util_P3i(diam, this.screens[i]);

this.g3d.setC$H(this.isTranslucent ? $I$(3).getColixTranslucent3$H$Z$F(7, true, 0.5) : 7);
for (var i=2; i < this.vertexCount; i+=3) {
this.g3d.fillSphereI$I$javajs_util_P3i(diam, this.screens[i]);
}
}} catch (e) {
}
if (this.volumeRender) this.g3d.volumeRender$Z(false);
});

Clazz.newMeth(C$, 'renderTriangles$Z$Z$Z', function (fill, iShowTriangles, isExport) {
this.g3d.addRenderer$I(1073742182);
var polygonIndexes=this.mesh.pis;
this.colix=(this.isGhostPass ? this.mesh.slabColix : !fill && this.mesh.meshColix != 0  ? this.mesh.meshColix : this.mesh.colix);
var vertexColixes=(!fill && this.mesh.meshColix != 0  ? null : this.mesh.vcs);
if (this.isTranslucentInherit) this.colix=$I$(3).copyColixTranslucency$H$H(this.mesh.slabColix, this.mesh.colix);
this.g3d.setC$H(this.colix);
var generateSet=isExport;
if (generateSet) {
if (this.frontOnly && fill ) this.frontOnly=false;
this.bsPolygonsToExport.clearAll$();
}if (this.exportType == 1) {
this.frontOnly=false;
}var colorSolid=(this.isGhostPass && (!this.isBicolorMap)  || vertexColixes == null   || this.mesh.isColorSolid );
var noColor=(this.isGhostPass && !this.isBicolorMap  || vertexColixes == null   || !fill && this.mesh.meshColix != 0  );
var isPlane=(this.imesh.jvxlData.jvxlPlane != null );
var colix=this.colix;
if (isPlane && !colorSolid && !fill && this.mesh.fillTriangles  ) {
colorSolid=true;
colix=4;
}var colorArrayed=(colorSolid && this.mesh.pcs != null  );
if (colorArrayed && !fill && this.mesh.fillTriangles  ) colorArrayed=false;
var contourColixes=this.imesh.jvxlData.contourColixes;
this.hasColorRange=!colorSolid && !this.isBicolorMap ;
var diam=p$1.getDiameter.apply(this, []);
var i0=0;
for (var i=this.mesh.pc; --i >= i0; ) {
var polygon=polygonIndexes[i];
if (polygon == null  || this.selectedPolyOnly && !this.bsPolygons.get$I(i)  ) continue;
var iA=polygon[0];
var iB=polygon[1];
var iC=polygon[2];
if (this.imesh.jvxlData.thisSet >= 0 && this.mesh.vertexSets != null   && this.mesh.vertexSets[iA] != this.imesh.jvxlData.thisSet ) continue;
if (this.haveBsDisplay && (!this.mesh.bsDisplay.get$I(iA) || !this.mesh.bsDisplay.get$I(iB) || !this.mesh.bsDisplay.get$I(iC)  ) ) continue;
var nA=this.normixes[iA];
var nB=this.normixes[iB];
var nC=this.normixes[iC];
var check=(this.frontOnly || this.isShell  ? this.checkFront$H$H$H(nA, nB, nC) : 7);
if (fill && check == 0 ) continue;
var colixA;
var colixB;
var colixC;
if (colorSolid) {
if (colorArrayed && i < this.mesh.pcs.length ) {
var c=this.mesh.pcs[i];
if (c == 0) continue;
colix=c;
}if (iShowTriangles) colix=($s$[0] = (Math.round(Math.random() * 10) + 5), $s$[0]);
colixA=colixB=colixC=colix;
} else {
colixA=vertexColixes[iA];
colixB=vertexColixes[iB];
colixC=vertexColixes[iC];
if (this.isBicolorMap) {
if (colixA != colixB || colixB != colixC ) continue;
if (this.isGhostPass) {
colixA=colixB=colixC=$I$(3).copyColixTranslucency$H$H(this.mesh.slabColix, colixA);
}}}if (fill) {
if (generateSet) {
this.bsPolygonsToExport.set$I(i);
continue;
}if (iB == iC) {
this.setColix$H(colixA);
if (iA == iB) this.g3d.fillSphereI$I$javajs_util_P3i(diam, this.screens[iA]);
 else this.g3d.fillCylinder$B$I$javajs_util_P3i$javajs_util_P3i(($b$[0] = 3, $b$[0]), diam, this.screens[iA], this.screens[iB]);
} else if (this.mesh.colorsExplicit) {
this.vwr.gdata.setColor$I(polygon[4]);
colixA=$I$(3).copyColixTranslucency$H$H(this.mesh.colix, 2047);
this.g3d.setC$H(colixA);
this.g3d.fillTriangle3CN$javajs_util_P3i$H$H$javajs_util_P3i$H$H$javajs_util_P3i$H$H(this.screens[iA], colixA, nA, this.screens[iB], colixA, nB, this.screens[iC], colixA, nC);
} else {
if (this.isTranslucentInherit && vertexColixes != null  ) {
colixA=$I$(3).copyColixTranslucency$H$H(this.mesh.slabColix, vertexColixes[iA]);
colixB=$I$(3).copyColixTranslucency$H$H(this.mesh.slabColix, vertexColixes[iB]);
colixC=$I$(3).copyColixTranslucency$H$H(this.mesh.slabColix, vertexColixes[iC]);
}this.g3d.fillTriangle3CN$javajs_util_P3i$H$H$javajs_util_P3i$H$H$javajs_util_P3i$H$H(this.screens[iA], colixA, nA, this.screens[iB], colixB, nB, this.screens[iC], colixC, nC);
}if (this.iShowNormals) p$1.renderNormals.apply(this, []);
} else {
check&=polygon[3];
if (check == 0) continue;
if (iShowTriangles) check=7;
this.pt1i.setT$javajs_util_T3i(this.screens[iA]);
this.pt2i.setT$javajs_util_T3i(this.screens[iB]);
this.pt3i.setT$javajs_util_T3i(this.screens[iC]);
this.pt1i.z-=2;
this.pt2i.z-=2;
this.pt3i.z-=2;
if (noColor) {
} else if (colorArrayed) {
this.g3d.setC$H(this.mesh.fillTriangles ? 4 : contourColixes[polygon[4] % contourColixes.length]);
} else {
this.drawTriangle$javajs_util_P3i$H$javajs_util_P3i$H$javajs_util_P3i$H$I$I(this.pt1i, colixA, this.pt2i, colixB, this.pt3i, colixC, check, diam);
continue;
}this.drawTriangle$javajs_util_P3i$H$javajs_util_P3i$H$javajs_util_P3i$H$I$I(this.pt1i, colix, this.pt2i, colix, this.pt3i, colix, check, diam);
}}
if (generateSet) this.exportSurface$H(colorSolid ? colix : ($s$[0] = 0, $s$[0]));
});

Clazz.newMeth(C$, 'getDiameter', function () {
var diam;
if (this.mesh.diameter <= 0) {
diam=(this.meshScale < 0 ? this.meshScale=this.vwr.getInt$I(553648151) : this.meshScale);
if (this.antialias) diam*=2;
} else {
diam=(this.vwr.getScreenDim$()/100|0);
}if (diam < 1) diam=1;
return diam;
}, p$1);

Clazz.newMeth(C$, 'renderNormals', function () {
if (!this.g3d.setC$H($I$(3).copyColixTranslucency$H$H(this.mesh.colix, 8))) return;
this.vwr.gdata.setFontFid$B(($b$[0] = this.vwr.gdata.getFontFidFS$S$F("Monospaced", 24), $b$[0]));
var vertexVectors=$I$(4).getVertexVectors$();
for (var i=this.vertexCount; --i >= 0; ) {
if (this.vertexValues != null  && Float.isNaN$F(this.vertexValues[i]) ) continue;
this.pt1f.setT$javajs_util_T3(this.vertices[i]);
var n=this.mesh.normixes[i];
if (n >= 0) {
this.pt2f.scaleAdd2$F$javajs_util_T3$javajs_util_T3(0.3, vertexVectors[n], this.pt1f);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pt2f, this.pt2f);
this.pt1f.set$F$F$F(this.screens[i].x, this.screens[i].y, this.screens[i].z);
this.g3d.drawLineAB$javajs_util_P3$javajs_util_P3(this.pt1f, this.pt2f);
}}
}, p$1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
