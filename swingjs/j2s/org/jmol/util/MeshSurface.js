(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'org.jmol.api.Interface','javajs.util.T3','javajs.util.AU','javajs.util.P3','org.jmol.util.C','org.jmol.util.TempArray','org.jmol.util.Geodesic','javajs.util.V3','org.jmol.util.BoxInfo']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MeshSurface");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.slicer=null;
this.oabc=null;
this.meshType=null;
this.vc=0;
this.vs=null;
this.vvs=null;
this.vertexSource=null;
this.surfaceAtoms=null;
this.pc=0;
this.pis=null;
this.colorsExplicit=false;
this.isDrawPolygon=false;
this.haveQuads=false;
this.colix=0;
this.colixBack=0;
this.isColorSolid=false;
this.offset=null;
this.altVertices=null;
this.pcs=null;
this.vcs=null;
this.normals=null;
this.normalsTemp=null;
this.normalCount=0;
this.normixCount=0;
this.bsPolygons=null;
this.mat4=null;
this.surfaceSet=null;
this.vertexSets=null;
this.nSets=0;
this.dataOnly=false;
this.lastColor=0;
this.lastColix=0;
this.iA=0;
this.iB=0;
this.iC=0;
this.polygonCount0=0;
this.vertexCount0=0;
this.bsSlabDisplay=null;
this.bsSlabGhost=null;
this.slabMeshType=0;
this.slabColix=0;
this.bsDisplay=null;
this.slabOptions=null;
this.mergeVertexCount0=0;
this.mergePolygonCount0=0;
this.isMerged=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isColorSolid=true;
this.nSets=0;
}, 1);

Clazz.newMeth(C$, 'getMeshSlicer$', function () {
return (this.slicer == null  ? this.slicer=($I$(1).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.util.MeshSlicer", this.vwr, "script")).set$org_jmol_util_MeshSurface(this) : this.slicer);
});

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newMesh$Z$javajs_util_T3A$I$IAA$javajs_util_T3A$I', function (isAlt, vertices, vertexCount, polygonIndexes, normals, nNormals) {
var ms=Clazz.new_(C$);
ms.pis=polygonIndexes;
if (isAlt) ms.altVertices=vertices;
 else ms.vs=vertices;
ms.vc=(vertexCount == 0 ? vertices.length : vertexCount);
ms.normals=normals;
ms.normalCount=(nNormals == 0 && normals != null   ? normals.length : nNormals);
return ms;
}, 1);

Clazz.newMeth(C$, 'getVertices$', function () {
return (this.altVertices == null  ? this.vs : this.altVertices);
});

Clazz.newMeth(C$, 'getFaces$', function () {
return this.pis;
});

Clazz.newMeth(C$, 'setColix$H', function (colix) {
this.colix=colix;
});

Clazz.newMeth(C$, 'setColixBack$H', function (colix) {
this.colixBack=colix;
});

Clazz.newMeth(C$, 'addV$javajs_util_T3$Z', function (vertex, asCopy) {
if (this.vc == 0) this.vs=Clazz.array($I$(2), [25]);
 else if (this.vc == this.vs.length) this.vs=$I$(3).doubleLength$O(this.vs);
this.vs[this.vc]=(asCopy ? $I$(4).newP$javajs_util_T3(vertex) : vertex);
return this.vc++;
});

Clazz.newMeth(C$, 'addTriangle$I$I$I', function (vertexA, vertexB, vertexC) {
this.addPolygon$IA$javajs_util_BS(Clazz.array(Integer.TYPE, -1, [vertexA, vertexB, vertexC]), null);
});

Clazz.newMeth(C$, 'addQuad$I$I$I$I', function (vertexA, vertexB, vertexC, vertexD) {
this.haveQuads=true;
this.addPolygon$IA$javajs_util_BS(Clazz.array(Integer.TYPE, -1, [vertexA, vertexB, vertexC, vertexD]), null);
});

Clazz.newMeth(C$, 'setPolygonCount$I', function (polygonCount) {
this.pc=polygonCount;
if (polygonCount < 0) return;
if (this.pis == null  || polygonCount > this.pis.length ) this.pis=$I$(3).newInt2$I(polygonCount);
});

Clazz.newMeth(C$, 'addVCVal$javajs_util_T3$F$Z', function (vertex, value, asCopy) {
if (this.vc == 0) this.vvs=Clazz.array(Float.TYPE, [25]);
 else if (this.vc >= this.vvs.length) this.vvs=$I$(3).doubleLengthF$FA(this.vvs);
this.vvs[this.vc]=value;
return this.addV$javajs_util_T3$Z(vertex, asCopy);
});

Clazz.newMeth(C$, 'addTriangleCheck$I$I$I$I$I$I', function (vertexA, vertexB, vertexC, check, iContour, color) {
return (this.vs == null  || this.vvs != null  && (Float.isNaN$F(this.vvs[vertexA]) || Float.isNaN$F(this.vvs[vertexB]) || Float.isNaN$F(this.vvs[vertexC])  )   || Float.isNaN$F(this.vs[vertexA].x)  || Float.isNaN$F(this.vs[vertexB].x)  || Float.isNaN$F(this.vs[vertexC].x)  ? -1 : this.addPolygonV3$I$I$I$I$I$I$javajs_util_BS(vertexA, vertexB, vertexC, check, iContour, color, null));
});

Clazz.newMeth(C$, 'addPolygonV3$I$I$I$I$I$I$javajs_util_BS', function (vertexA, vertexB, vertexC, check, iContour, color, bs) {
return (this.dataOnly ? this.addPolygon$IA$javajs_util_BS(Clazz.array(Integer.TYPE, -1, [vertexA, vertexB, vertexC, check]), bs) : this.addPolygonC$IA$I$javajs_util_BS$Z(Clazz.array(Integer.TYPE, -1, [vertexA, vertexB, vertexC, check, iContour]), color, bs, (iContour < 0)));
});

Clazz.newMeth(C$, 'addPolygonC$IA$I$javajs_util_BS$Z', function (polygon, color, bs, isExplicit) {
if (color != 0) {
if (this.pcs == null  || this.pc == 0 ) this.lastColor=0;
if (isExplicit) {
this.colorsExplicit=true;
} else {
if (this.pcs == null ) {
this.pcs=Clazz.array(Short.TYPE, [25]);
} else if (this.pc >= this.pcs.length) {
this.pcs=$I$(3).doubleLengthShort$HA(this.pcs);
}this.pcs[this.pc]=(isExplicit ? (2047|0) : color == this.lastColor ? this.lastColix : (this.lastColix=$I$(5).getColix$I(this.lastColor=color)));
}}return this.addPolygon$IA$javajs_util_BS(polygon, bs);
});

Clazz.newMeth(C$, 'addPolygon$IA$javajs_util_BS', function (polygon, bs) {
var n=this.pc;
if (n == 0) this.pis=$I$(3).newInt2$I(25);
 else if (n == this.pis.length) this.pis=$I$(3).doubleLength$O(this.pis);
if (bs != null ) bs.set$I(n);
this.pis[this.pc++]=polygon;
return n;
});

Clazz.newMeth(C$, 'invalidatePolygons$', function () {
for (var i=this.pc; --i >= this.mergePolygonCount0; ) if ((this.bsSlabDisplay == null  || this.bsSlabDisplay.get$I(i) ) && this.setABC$I(i) == null  ) this.pis[i]=null;

});

Clazz.newMeth(C$, 'setABC$I', function (i) {
if (this.bsSlabDisplay != null  && !this.bsSlabDisplay.get$I(i)  && (this.bsSlabGhost == null  || !this.bsSlabGhost.get$I(i) ) ) return null;
var polygon=this.pis[i];
if (polygon == null  || polygon.length < 3 ) return null;
this.iA=polygon[0];
this.iB=polygon[1];
this.iC=polygon[2];
return (this.vvs == null  || !Float.isNaN$F(this.vvs[this.iA]) && !Float.isNaN$F(this.vvs[this.iB]) && !Float.isNaN$F(this.vvs[this.iC])    ? polygon : null);
});

Clazz.newMeth(C$, 'setTranslucentVertices$javajs_util_BS', function (bsVertices) {
});

Clazz.newMeth(C$, 'getSlabColor$', function () {
return (this.bsSlabGhost == null  ? null : $I$(5).getHexCode$H(this.slabColix));
});

Clazz.newMeth(C$, 'getSlabType$', function () {
return (this.bsSlabGhost != null  && this.slabMeshType == 1073742018  ? "mesh" : null);
});

Clazz.newMeth(C$, 'resetSlab$', function () {
if (this.slicer != null ) this.slicer.slabPolygons$OA$Z($I$(6).getSlabObjectType$I$O$Z$O(1073742333, null, false, null), false);
});

Clazz.newMeth(C$, 'slabPolygonsList$javajs_util_Lst$Z', function (slabInfo, allowCap) {
this.getMeshSlicer$();
for (var i=0; i < slabInfo.size$(); i++) if (!this.slicer.slabPolygons$OA$Z(slabInfo.get$I(i), allowCap)) break;

});

Clazz.newMeth(C$, 'slabBrillouin$javajs_util_P3A', function (unitCellVectors) {
return;
});

Clazz.newMeth(C$, 'getResolution$', function () {
return 0;
});

Clazz.newMeth(C$, 'getSphereData$I', function (lvl) {
$I$(7).createGeodesic$I(lvl);
var vertexCount=$I$(7).getVertexCount$I(lvl);
var f=$I$(7).getFaceVertexes$I(lvl);
var nFaces=(f.length/3|0);
var faces=$I$(3).newInt2$I(nFaces);
for (var i=0, fpt=0; i < nFaces; i++) {
faces[i]=Clazz.array(Integer.TYPE, -1, [f[fpt++], f[fpt++], f[fpt++]]);
}
var vectors=Clazz.array($I$(8), [vertexCount]);
for (var i=0; i < vertexCount; i++) vectors[i]=$I$(7).getVertexVector$I(i);

return C$.newMesh$Z$javajs_util_T3A$I$IAA$javajs_util_T3A$I(true, vectors, 0, faces, vectors, 0);
}, 1);

Clazz.newMeth(C$, 'setBox$javajs_util_P3$javajs_util_P3', function (xyzMin, xyzMax) {
xyzMin.set$F$F$F(3.4028235E38, 3.4028235E38, 3.4028235E38);
xyzMax.set$F$F$F(-3.4028235E38, -3.4028235E38, -3.4028235E38);
for (var i=0; i < this.vc; i++) {
var p=this.vs[i];
if (!Float.isNaN$F(p.x)) $I$(9).addPoint$javajs_util_T3$javajs_util_T3$javajs_util_T3$F(p, xyzMin, xyzMax, 0);
}
});

Clazz.newMeth(C$, 'setBoundingBox$javajs_util_P3A', function (boundBoxPoints) {
});

Clazz.newMeth(C$, 'getSphericalInterpolationFraction$D$D$D$D', function (r, valueA, valueB, d) {
var ra=Math.abs(r + valueA) / d;
var rb=Math.abs(r + valueB) / d;
r /= d;
var ra2=ra * ra;
var q=ra2 - rb * rb + 1;
var p=4 * (r * r - ra2);
var factor=(ra < rb  ? 1 : -1);
return (((q) + factor * Math.sqrt(q * q + p)) / 2);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
