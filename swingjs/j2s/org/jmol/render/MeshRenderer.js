(function(){var P$=Clazz.newPackage("org.jmol.render"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.P3i','javajs.util.BS','javajs.util.AU','org.jmol.util.SimpleUnitCell','org.jmol.util.C']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MeshRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mesh=null;
this.vertices=null;
this.normixes=null;
this.screens=null;
this.p3Screens=null;
this.transformedVectors=null;
this.vertexCount=0;
this.imageFontScaling=0;
this.scalePixelsPerMicron=0;
this.diameter=0;
this.width=0;
this.isTranslucent=false;
this.frontOnly=false;
this.isShell=false;
this.antialias=false;
this.haveBsDisplay=false;
this.selectedPolyOnly=false;
this.isGhostPass=false;
this.thePlane=null;
this.latticeOffset=null;
this.pt1f=null;
this.pt2f=null;
this.pt1i=null;
this.pt2i=null;
this.pt3i=null;
this.exportPass=0;
this.needTranslucent=false;
this.doRender=false;
this.volumeRender=false;
this.bsPolygons=null;
this.isTranslucentInherit=false;
this.renderLow=false;
this.meshSlabValue=0;
this.showTriangles=false;
this.forceShowTriangles=false;
this.bsPolygonsToExport=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.latticeOffset=Clazz.new_($I$(1));
this.pt1f=Clazz.new_($I$(1));
this.pt2f=Clazz.new_($I$(1));
this.pt1i=Clazz.new_($I$(2));
this.pt2i=Clazz.new_($I$(2));
this.pt3i=Clazz.new_($I$(2));
this.meshSlabValue=100;
this.bsPolygonsToExport=Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'renderMesh2$org_jmol_shape_Mesh', function (mesh) {
this.mesh=mesh;
if (!p$1.setVariables.apply(this, [])) return false;
if (!this.doRender) return mesh.title != null ;
this.latticeOffset.set$F$F$F(0, 0, 0);
if (mesh.modelIndex < 0 || mesh.lattice == null  && mesh.symops == null   ) {
for (var i=this.vertexCount; --i >= 0; ) if (this.vertices[i] != null ) this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(this.vertices[i], this.screens[i]);

for (var i=this.vertexCount; --i >= 0; ) if (this.vertices[i] != null ) this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.vertices[i], this.p3Screens[i]);

this.render2$Z(this.isExport);
} else {
var vTemp=Clazz.new_($I$(1));
var unitcell=mesh.getUnitCell$();
if (unitcell != null ) {
if (mesh.symops != null ) {
if (mesh.symopNormixes == null ) mesh.symopNormixes=$I$(4).newShort2$I(mesh.symops.length);
var verticesTemp=null;
var max=mesh.symops.length;
var c=mesh.colix;
for (var j=max; --j >= 0; ) {
var m=mesh.symops[j];
if (m == null ) continue;
if (mesh.colorType == 1296041986) mesh.colix=mesh.symopColixes[j];
var normals=mesh.symopNormixes[j];
var needNormals=(normals == null );
verticesTemp=(needNormals ? Clazz.array($I$(1), [this.vertexCount]) : null);
for (var i=this.vertexCount; --i >= 0; ) {
vTemp.setT$javajs_util_T3(this.vertices[i]);
unitcell.toFractional$javajs_util_T3$Z(vTemp, true);
m.rotTrans$javajs_util_T3(vTemp);
unitcell.toCartesian$javajs_util_T3$Z(vTemp, true);
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(vTemp, this.screens[i]);
if (needNormals) {
verticesTemp[i]=vTemp;
vTemp=Clazz.new_($I$(1));
}}
if (needNormals) this.normixes=mesh.symopNormixes[j]=mesh.setNormixes$javajs_util_V3A(mesh.getNormals$javajs_util_T3A$javajs_util_P4(verticesTemp, null));
 else this.normixes=mesh.normixes=mesh.symopNormixes[j];
this.render2$Z(this.isExport);
}
mesh.colix=c;
} else {
var minXYZ=Clazz.new_($I$(2));
var maxXYZ=$I$(2).new3$I$I$I((mesh.lattice.x|0), (mesh.lattice.y|0), (mesh.lattice.z|0));
$I$(5).setMinMaxLatticeParameters$I$javajs_util_P3i$javajs_util_P3i$I((unitcell.getUnitCellInfoType$I(6)|0), minXYZ, maxXYZ, 0);
for (var tx=minXYZ.x; tx < maxXYZ.x; tx++) for (var ty=minXYZ.y; ty < maxXYZ.y; ty++) for (var tz=minXYZ.z; tz < maxXYZ.z; tz++) {
this.latticeOffset.set$F$F$F(tx, ty, tz);
unitcell.toCartesian$javajs_util_T3$Z(this.latticeOffset, false);
for (var i=this.vertexCount; --i >= 0; ) {
vTemp.add2$javajs_util_T3$javajs_util_T3(this.vertices[i], this.latticeOffset);
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(vTemp, this.screens[i]);
}
this.render2$Z(this.isExport);
}


}}}if (this.screens != null ) this.vwr.freeTempScreens$javajs_util_P3iA(this.screens);
if (this.p3Screens != null ) this.vwr.freeTempPoints$javajs_util_P3A(this.p3Screens);
return true;
});

Clazz.newMeth(C$, 'setVariables', function () {
if (this.mesh.visibilityFlags == 0) return false;
this.forceShowTriangles=this.vwr.getBoolean$I(603979964);
this.showTriangles=this.forceShowTriangles || this.mesh.showTriangles ;
if (this.mesh.bsSlabGhost != null ) this.g3d.setC$H(this.mesh.slabColix);
if (this.mesh.colorsExplicit) this.g3d.setC$H(2047);
this.isGhostPass=(this.mesh.bsSlabGhost != null  && (this.isExport ? this.exportPass == 2 : this.vwr.gdata.isPass2) );
this.isTranslucentInherit=(this.isGhostPass && $I$(6).getColixTranslucent3$H$Z$F(this.mesh.slabColix, false, 0) == 1 );
this.isTranslucent=this.isGhostPass || $I$(6).renderPass2$H(this.mesh.colix) ;
if (this.isTranslucent || this.volumeRender || this.mesh.bsSlabGhost != null   ) this.needTranslucent=true;
this.doRender=(this.setColix$H(this.mesh.colix) || this.mesh.showContourLines );
if (!this.doRender || this.isGhostPass && !(this.doRender=this.g3d.setC$H(this.mesh.slabColix))  ) {
this.vertices=this.mesh.vs;
if (this.needTranslucent) this.g3d.setC$H($I$(6).getColixTranslucent3$H$Z$F(4, true, 0.5));
return true;
}if (this.mesh.isModelConnected) this.mesh.mat4=this.ms.am[this.mesh.modelIndex].mat4;
this.vertices=(this.mesh.scale3d == 0  && this.mesh.mat4 == null   ? this.mesh.vs : this.mesh.getOffsetVertices$javajs_util_P4(this.thePlane));
if (this.mesh.lineData == null ) {
if ((this.vertexCount=this.mesh.vc) == 0) return false;
this.normixes=this.mesh.normixes;
if (this.normixes == null  && this.mesh.pc >= 0  || this.vertices == null  ) return false;
this.haveBsDisplay=(this.mesh.bsDisplay != null );
this.selectedPolyOnly=(this.isGhostPass || this.mesh.bsSlabDisplay != null  );
this.bsPolygons=(this.isGhostPass ? this.mesh.bsSlabGhost : this.selectedPolyOnly ? this.mesh.bsSlabDisplay : null);
this.renderLow=(!this.isExport && !this.vwr.checkMotionRendering$I(1073742018) );
var allowFrontOnly=(!this.mesh.isTwoSided && !this.selectedPolyOnly && (this.meshSlabValue == -2147483648 || this.meshSlabValue >= 100 )  );
this.frontOnly=this.renderLow || this.mesh.frontOnly && !this.tm.slabEnabled && allowFrontOnly   ;
this.isShell=this.mesh.isShell && allowFrontOnly ;
this.screens=this.vwr.allocTempScreens$I(this.vertexCount);
this.p3Screens=this.vwr.allocTempPoints$I(this.vertexCount);
if (this.frontOnly || this.isShell ) this.transformedVectors=this.vwr.gdata.getTransformedVertexVectors$();
if (this.transformedVectors == null ) this.frontOnly=this.isShell=false;
}return true;
}, p$1);

Clazz.newMeth(C$, 'setColix$H', function (colix) {
if (this.isGhostPass) return true;
if (this.volumeRender && !this.isTranslucent ) colix=$I$(6).getColixTranslucent3$H$Z$F(colix, true, 0.8);
this.colix=colix;
if ($I$(6).isColixLastAvailable$H(colix)) this.vwr.gdata.setColor$I(this.mesh.color);
return this.g3d.setC$H(colix);
});

Clazz.newMeth(C$, 'isPolygonDisplayable$I', function (i) {
return true;
});

Clazz.newMeth(C$, 'render2$Z', function (generateSet) {
this.render2b$Z(generateSet);
});

Clazz.newMeth(C$, 'render2b$Z', function (generateSet) {
if (!this.g3d.setC$H(this.isGhostPass ? this.mesh.slabColix : this.colix)) return;
if (this.renderLow || this.mesh.showPoints || this.mesh.pc <= 0  ) this.renderPoints$();
if (!this.renderLow && (this.isGhostPass ? this.mesh.slabMeshType == 1073742018 : this.mesh.drawTriangles) ) this.renderTriangles$Z$Z$Z(false, this.showTriangles, false);
if (!this.renderLow && this.mesh.pc > 0  && (this.isGhostPass ? this.mesh.slabMeshType == 1073741938 : this.mesh.fillTriangles) ) this.renderTriangles$Z$Z$Z(true, this.showTriangles, generateSet);
});

Clazz.newMeth(C$, 'renderPoints$', function () {
if (!this.mesh.isDrawPolygon || this.mesh.pc < 0 ) {
for (var i=this.vertexCount; --i >= 0; ) if (!this.frontOnly || this.normixes == null   || this.isVisibleNormix$H(this.normixes[i]) ) p$1.drawPoint$I$Z.apply(this, [i, false]);

return;
}var polygonIndexes=this.mesh.pis;
var bsPoints=$I$(3).newN$I(this.mesh.vc);
if (this.haveBsDisplay) {
bsPoints.setBits$I$I(0, this.mesh.vc);
bsPoints.andNot$javajs_util_BS(this.mesh.bsDisplay);
}for (var i=this.mesh.pc; --i >= 0; ) {
if (!this.isPolygonDisplayable$I(i)) continue;
var p=polygonIndexes[i];
if (this.frontOnly && !this.isVisibleNormix$H(this.normixes[i]) ) continue;
for (var j=p.length - 1; --j >= 0; ) {
var pt=p[j];
if (bsPoints.get$I(pt)) continue;
bsPoints.set$I(pt);
p$1.drawPoint$I$Z.apply(this, [pt, true]);
}
}
});

Clazz.newMeth(C$, 'drawPoint$I$Z', function (pt, forTriangle) {
if (this.renderLow && forTriangle ) {
var s=this.screens[pt];
this.g3d.drawPixel$I$I$I(s.x, s.y, s.z);
} else if (this.mesh.pc >= 0) {
p$1.drawMeshSphere$javajs_util_P3i.apply(this, [this.screens[pt]]);
} else {
this.drawEdge$I$I$Z$javajs_util_T3$javajs_util_T3$javajs_util_P3i$javajs_util_P3i(pt, pt, false, this.vertices[pt], this.vertices[pt], this.screens[pt], null);
}}, p$1);

Clazz.newMeth(C$, 'drawMeshSphere$javajs_util_P3i', function (pt) {
this.g3d.fillSphereI$I$javajs_util_P3i(4, pt);
}, p$1);

Clazz.newMeth(C$, 'renderTriangles$Z$Z$Z', function (fill, iShowTriangles, generateSet) {
this.g3d.addRenderer$I(1073742182);
var polygons=this.mesh.pis;
this.colix=(this.isGhostPass ? this.mesh.slabColix : this.mesh.colix);
if (this.isTranslucentInherit) this.colix=$I$(6).copyColixTranslucency$H$H(this.mesh.slabColix, this.mesh.colix);
this.g3d.setC$H(this.colix);
if (generateSet) {
if (this.frontOnly && fill ) this.frontOnly=false;
this.bsPolygonsToExport.clearAll$();
}for (var i=this.mesh.pc; --i >= 0; ) {
if (!this.isPolygonDisplayable$I(i)) continue;
var polygon=polygons[i];
var iA=polygon[0];
var iB=polygon[1];
var iC=polygon[2];
if (iShowTriangles) this.setColix$H(($s$[0] = (Math.round(Math.random() * 10) + 5), $s$[0]));
if (this.haveBsDisplay && (!this.mesh.bsDisplay.get$I(iA) || !this.mesh.bsDisplay.get$I(iB) || !this.mesh.bsDisplay.get$I(iC)  ) ) continue;
if (iB == iC) {
this.drawEdge$I$I$Z$javajs_util_T3$javajs_util_T3$javajs_util_P3i$javajs_util_P3i(iA, iB, fill, this.vertices[iA], this.vertices[iB], this.screens[iA], this.screens[iB]);
continue;
}var check;
if (this.mesh.isDrawPolygon) {
var normix=this.normixes[i];
if (this.frontOnly && !this.isVisibleNormix$H(normix) ) continue;
if (fill) {
this.g3d.fillTriangle3CNBits$javajs_util_P3$H$H$javajs_util_P3$H$H$javajs_util_P3$H$H$Z(this.p3Screens[iA], this.colix, normix, this.p3Screens[iB], this.colix, normix, this.p3Screens[iC], this.colix, normix, true);
continue;
}check=polygon[3];
if (iShowTriangles) check=7;
if ((check & 1) == 1) this.drawEdge$I$I$Z$javajs_util_T3$javajs_util_T3$javajs_util_P3i$javajs_util_P3i(iA, iB, true, this.vertices[iA], this.vertices[iB], this.screens[iA], this.screens[iB]);
if ((check & 2) == 2) this.drawEdge$I$I$Z$javajs_util_T3$javajs_util_T3$javajs_util_P3i$javajs_util_P3i(iB, iC, true, this.vertices[iB], this.vertices[iC], this.screens[iB], this.screens[iC]);
if ((check & 4) == 4) this.drawEdge$I$I$Z$javajs_util_T3$javajs_util_T3$javajs_util_P3i$javajs_util_P3i(iA, iC, true, this.vertices[iA], this.vertices[iC], this.screens[iA], this.screens[iC]);
continue;
}var nA=this.normixes[iA];
var nB=this.normixes[iB];
var nC=this.normixes[iC];
check=(this.frontOnly || this.isShell  ? this.checkFront$H$H$H(nA, nB, nC) : 7);
if (fill && check != 7 ) continue;
switch (polygon.length) {
case 3:
if (fill) {
if (generateSet) {
this.bsPolygonsToExport.set$I(i);
continue;
}this.g3d.fillTriangle3CNBits$javajs_util_P3$H$H$javajs_util_P3$H$H$javajs_util_P3$H$H$Z(this.p3Screens[iA], this.colix, nA, this.p3Screens[iB], this.colix, nB, this.p3Screens[iC], this.colix, nC, false);
continue;
}p$1.drawTriangleBits$javajs_util_P3$H$javajs_util_P3$H$javajs_util_P3$H$I$I.apply(this, [this.p3Screens[iA], this.colix, this.p3Screens[iB], this.colix, this.p3Screens[iC], this.colix, check, 1]);
continue;
case 4:
var iD=polygon[3];
var nD=this.normixes[iD];
if (this.frontOnly && (check != 7 || !this.isVisibleNormix$H(nD) ) ) continue;
if (fill) {
if (generateSet) {
this.bsPolygonsToExport.set$I(i);
continue;
}this.g3d.fillTriangle3CNBits$javajs_util_P3$H$H$javajs_util_P3$H$H$javajs_util_P3$H$H$Z(this.p3Screens[iA], this.colix, nA, this.p3Screens[iB], this.colix, nB, this.p3Screens[iC], this.colix, nC, false);
this.g3d.fillTriangle3CNBits$javajs_util_P3$H$H$javajs_util_P3$H$H$javajs_util_P3$H$H$Z(this.p3Screens[iA], this.colix, nA, this.p3Screens[iC], this.colix, nC, this.p3Screens[iD], this.colix, nD, false);
continue;
}this.vwr.gdata.drawQuadrilateralBits$org_jmol_api_JmolRendererInterface$H$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3(this.g3d, this.colix, this.p3Screens[iA], this.p3Screens[iB], this.p3Screens[iC], this.p3Screens[iD]);
}
}
if (generateSet) this.exportSurface$H(this.colix);
});

Clazz.newMeth(C$, 'isVisibleNormix$H', function (normix) {
return (normix < 0 || this.transformedVectors[normix].z >= 0  );
});

Clazz.newMeth(C$, 'drawTriangleBits$javajs_util_P3$H$javajs_util_P3$H$javajs_util_P3$H$I$I', function (screenA, colixA, screenB, colixB, screenC, colixC, check, diam) {
if (!this.antialias && diam == 1 ) {
this.vwr.gdata.drawTriangleBits$org_jmol_api_JmolRendererInterface$javajs_util_P3$H$javajs_util_P3$H$javajs_util_P3$H$I(this.g3d, screenA, colixA, screenB, colixB, screenC, colixC, check);
return;
}if (this.antialias) diam<<=1;
if ((check & 1) == 1) this.g3d.fillCylinderBits2$H$H$B$I$javajs_util_P3$javajs_util_P3(colixA, colixB, ($b$[0] = 1, $b$[0]), diam, screenA, screenB);
if ((check & 2) == 2) this.g3d.fillCylinderBits2$H$H$B$I$javajs_util_P3$javajs_util_P3(colixB, colixC, ($b$[0] = 1, $b$[0]), diam, screenB, screenC);
if ((check & 4) == 4) this.g3d.fillCylinderBits2$H$H$B$I$javajs_util_P3$javajs_util_P3(colixA, colixC, ($b$[0] = 1, $b$[0]), diam, screenA, screenC);
}, p$1);

Clazz.newMeth(C$, 'drawTriangle$javajs_util_P3i$H$javajs_util_P3i$H$javajs_util_P3i$H$I$I', function (screenA, colixA, screenB, colixB, screenC, colixC, check, diam) {
if (!this.antialias && diam == 1 ) {
this.g3d.drawTriangle3C$javajs_util_P3i$H$javajs_util_P3i$H$javajs_util_P3i$H$I(screenA, colixA, screenB, colixB, screenC, colixC, check);
return;
}if (this.antialias) diam<<=1;
if ((check & 1) == 1) this.g3d.fillCylinderXYZ$H$H$B$I$I$I$I$I$I$I(colixA, colixB, ($b$[0] = 1, $b$[0]), diam, screenA.x, screenA.y, screenA.z, screenB.x, screenB.y, screenB.z);
if ((check & 2) == 2) this.g3d.fillCylinderXYZ$H$H$B$I$I$I$I$I$I$I(colixB, colixC, ($b$[0] = 1, $b$[0]), diam, screenB.x, screenB.y, screenB.z, screenC.x, screenC.y, screenC.z);
if ((check & 4) == 4) this.g3d.fillCylinderXYZ$H$H$B$I$I$I$I$I$I$I(colixA, colixC, ($b$[0] = 1, $b$[0]), diam, screenA.x, screenA.y, screenA.z, screenC.x, screenC.y, screenC.z);
});

Clazz.newMeth(C$, 'checkFront$H$H$H', function (nA, nB, nC) {
var check=7;
if (this.transformedVectors[nA].z < 0 ) check^=1;
if (this.transformedVectors[nB].z < 0 ) check^=2;
if (this.transformedVectors[nC].z < 0 ) check^=4;
return check;
});

Clazz.newMeth(C$, 'drawEdge$I$I$Z$javajs_util_T3$javajs_util_T3$javajs_util_P3i$javajs_util_P3i', function (iA, iB, fill, vA, vB, sA, sB) {
var endCap=($b$[0] = (iA != iB && !fill  ? (0|0) : (this.width < 0  || this.width == -0.0   || iA != iB && this.isTranslucent   ? (2|0) : (3|0)|0)), $b$[0]);
if (this.width == 0 ) {
if (this.diameter == 0) this.diameter=(this.mesh.diameter > 0 ? this.mesh.diameter : iA == iB ? 7 : 3);
if (this.exportType == 1) {
this.pt1f.ave$javajs_util_T3$javajs_util_T3(vA, vB);
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(this.pt1f, this.pt1i);
}if (iA == iB) {
this.pt1f.set$F$F$F(sA.x, sA.y, sA.z);
this.g3d.fillSphereBits$I$javajs_util_P3(this.diameter, this.pt1f);
return;
}} else {
this.pt1f.ave$javajs_util_T3$javajs_util_T3(vA, vB);
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(this.pt1f, this.pt1i);
var mad=(Math.floor(Math.abs(this.width) * 1000)|0);
this.diameter=((this.vwr.tm.scaleToScreen$I$I(this.pt1i.z, mad))|0);
}if (this.diameter == 0) this.diameter=1;
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(vA, this.pt1f);
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(vB, this.pt2f);
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(($b$[0] = endCap, $b$[0]), this.diameter, this.pt1f, this.pt2f);
});

Clazz.newMeth(C$, 'exportSurface$H', function (colix) {
this.mesh.normals=this.mesh.getNormals$javajs_util_T3A$javajs_util_P4(this.vertices, null);
this.mesh.bsPolygons=this.bsPolygonsToExport;
this.mesh.offset=this.latticeOffset;
this.g3d.drawSurface$org_jmol_util_MeshSurface$H(this.mesh, colix);
this.mesh.normals=null;
this.mesh.bsPolygons=null;
});
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
