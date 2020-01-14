(function(){var P$=Clazz.newPackage("org.jmol.export"),p$1={},I$=[[0,'java.util.HashSet','javajs.util.P3','org.jmol.util.Logger','javajs.util.Quat','org.jmol.viewer.Viewer','javajs.util.AU','org.jmol.util.MeshSurface','javajs.util.M4','javajs.util.V3','javajs.util.BS','javajs.util.Lst','org.jmol.util.Escape','org.jmol.export.MeshData','javajs.util.PT','javajs.util.SB','javajs.util.CU','java.util.Hashtable']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "_ObjExporter", null, 'org.jmol.export.__CartesianExporter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.surfacesOnly=false;
this.normalizeUV=false;
this.mtlout=null;
this.objFileRootName=null;
this.nMtlBytes=0;
this.textures=null;
this.textureFiles=null;
this.sphereNum=0;
this.cylinderNum=0;
this.ellipseNum=0;
this.circleNum=0;
this.ellipsoidNum=0;
this.coneNum=0;
this.triangleNum=0;
this.surfaceNum=0;
this.currentVertexOrigin=0;
this.currentNormalOrigin=0;
this.currentTextureOrigin=0;
this.ptTemp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.surfacesOnly=false;
this.normalizeUV=true;
this.textures=Clazz.new_($I$(1));
this.sphereNum=1;
this.cylinderNum=1;
this.ellipseNum=1;
this.circleNum=1;
this.ellipsoidNum=1;
this.coneNum=1;
this.triangleNum=1;
this.surfaceNum=1;
this.currentVertexOrigin=1;
this.currentNormalOrigin=1;
this.currentTextureOrigin=1;
this.ptTemp=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.debugPrint$S("_WavefrontObjExporter CTOR");
this.commentChar="# ";
}, 1);

Clazz.newMeth(C$, 'debugPrint$S', function (string) {
if (false) {
$I$(3).debug$S(string);
}});

Clazz.newMeth(C$, 'outputFace$IA$IA$I', function (face, map, faceVertexMax) {
});

Clazz.newMeth(C$, 'outputCircle$javajs_util_P3$javajs_util_P3$F$H$Z', function (pt1, pt2, radius, colix, doFill) {
this.debugPrint$S("outputCircle");
if (this.surfacesOnly) {
this.debugPrint$S("  Not done owing to surfacesOnly");
return;
}if (doFill) {
p$1.outputCircle1$javajs_util_P3$javajs_util_P3$H$F.apply(this, [pt1, pt2, colix, radius]);
}});

Clazz.newMeth(C$, 'outputCone$javajs_util_P3$javajs_util_P3$F$H', function (ptBase, ptTip, radius, colix) {
this.debugPrint$S("outputCone");
if (this.surfacesOnly) {
this.debugPrint$S("  Not done owing to surfacesOnly");
return;
}p$1.outputCone1$javajs_util_P3$javajs_util_P3$F$H.apply(this, [ptBase, ptTip, radius, colix]);
});

Clazz.newMeth(C$, 'outputCylinder$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$B$F$javajs_util_P3$javajs_util_P3$Z', function (ptCenter, pt1, pt2, colix, endcaps, radius, ptX, ptY, checkRadius) {
if (false) {
this.debugPrint$S("outputCylinder: colix=" + String.format$S$OA("%04x", [Short.valueOf$H(colix)]));
this.debugPrint$S("  ptCenter=" + ptCenter);
this.debugPrint$S("  pt1=" + pt1);
this.debugPrint$S("  endcaps=" + endcaps + " NONE=" + 0 + " FLAT=" + 2 + " SPHERICAL=" + 3 );
this.debugPrint$S("  radius=" + new Float(radius).toString());
this.debugPrint$S("  pt2=" + pt2);
this.debugPrint$S("  ptX=" + ptX);
this.debugPrint$S("  ptY=" + ptY);
}if (this.surfacesOnly) {
this.debugPrint$S("  Not done owing to surfacesOnly");
return true;
}if (ptX != null ) {
if (endcaps == 2) {
p$1.outputEllipse1$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$H.apply(this, [ptCenter, pt1, ptX, ptY, colix]);
this.tempP3.add2$javajs_util_T3$javajs_util_T3(ptCenter, ptCenter);
this.tempP3.sub$javajs_util_T3(ptX);
p$1.outputEllipse1$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$H.apply(this, [ptCenter, pt2, this.tempP3, ptY, colix]);
}} else if (endcaps == 3) {
this.outputSphere$javajs_util_P3$F$H$Z(pt1, radius * 1.01, colix, true);
this.outputSphere$javajs_util_P3$F$H$Z(pt2, radius * 1.01, colix, true);
} else if (endcaps == 2) {
p$1.outputCircle1$javajs_util_P3$javajs_util_P3$H$F.apply(this, [pt1, pt2, colix, radius]);
p$1.outputCircle1$javajs_util_P3$javajs_util_P3$H$F.apply(this, [pt2, pt1, colix, radius]);
}p$1.outputCylinder1$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$B$F$javajs_util_P3$javajs_util_P3.apply(this, [ptCenter, pt1, pt2, colix, ($b$[0] = endcaps, $b$[0]), radius, ptX, ptY]);
return true;
});

Clazz.newMeth(C$, 'outputEllipsoid$javajs_util_P3$javajs_util_P3A$H', function (center, points, colix) {
if (false) {
this.debugPrint$S("outputEllipsoid: colix=" + String.format$S$OA("%04x", [Short.valueOf$H(colix)]));
this.debugPrint$S("  center=" + center);
this.debugPrint$S("  points[0]=" + points[0]);
this.debugPrint$S("  points[1]=" + points[1]);
this.debugPrint$S("  points[2]=" + points[2]);
}if (this.surfacesOnly) {
this.debugPrint$S("  Not done owing to surfacesOnly");
return;
}var a=$I$(4).getQuaternionFrame$javajs_util_P3$javajs_util_T3$javajs_util_T3(center, points[1], points[3]).toAxisAngle4f$();
var sx=points[1].distance$javajs_util_T3(center);
var sy=points[3].distance$javajs_util_T3(center);
var sz=points[5].distance$javajs_util_T3(center);
p$1.outputEllipsoid1$javajs_util_T3$F$F$F$javajs_util_A4$H.apply(this, [center, sx, sy, sz, a, colix]);
});

Clazz.newMeth(C$, 'outputSphere$javajs_util_P3$F$H$Z', function (center, radius, colix, checkRadius) {
if (false) {
this.debugPrint$S("outputSphere: colix=" + String.format$S$OA("%04x", [Short.valueOf$H(colix)]));
this.debugPrint$S("  center.getClass().getName()=" + center.getClass$().getName$());
this.debugPrint$S("  center=" + center);
this.debugPrint$S("  center.x=" + new Float(center.x).toString());
this.debugPrint$S("  center.y=" + new Float(center.y).toString());
this.debugPrint$S("  center.z=" + new Float(center.z).toString());
this.debugPrint$S("  radius=" + new Float(radius).toString());
}if (this.surfacesOnly) {
this.debugPrint$S("  Not done owing to surfacesOnly");
return;
}p$1.outputEllipsoid1$javajs_util_T3$F$F$F$javajs_util_A4$H.apply(this, [center, radius, radius, radius, null, colix]);
});

Clazz.newMeth(C$, 'outputTextPixel$javajs_util_P3$I', function (pt, argb) {
});

Clazz.newMeth(C$, 'outputTriangle$javajs_util_T3$javajs_util_T3$javajs_util_T3$H', function (pt1, pt2, pt3, colix) {
if (this.surfacesOnly) {
return;
}p$1.outputTriangle1$javajs_util_T3$javajs_util_T3$javajs_util_T3$H.apply(this, [pt1, pt2, pt3, colix]);
});

Clazz.newMeth(C$, 'outputHeader$', function () {
this.debugPrint$S("outputHeader");
this.output$S("#obj Created by Jmol " + $I$(5).getJmolVersion$() + "\n" );
});

Clazz.newMeth(C$, 'output$javajs_util_T3', function (pt) {
this.debugPrint$S("output");
});

Clazz.newMeth(C$, 'drawSurface$org_jmol_util_MeshSurface$H', function (meshSurface, colix) {
if ($I$(3).debugging) {
this.debugPrint$S("outputSurface");
this.debugPrint$S("  nVertices=" + meshSurface.vc);
if (meshSurface.normals == null ) {
this.debugPrint$S("  no vertex normals");
} else {
this.debugPrint$S("  nNormals=" + meshSurface.vc);
}if (meshSurface.vcs == null ) {
this.debugPrint$S("  no vertex colors");
} else {
this.debugPrint$S("  nColixes=" + meshSurface.vc);
}this.debugPrint$S("  number of triangles or quads=" + meshSurface.pc);
if (meshSurface.pcs == null ) {
this.debugPrint$S("  no face colors");
} else {
this.debugPrint$S("  nPolygonColixes=" + meshSurface.pc);
}if (meshSurface.bsPolygons == null ) {
this.debugPrint$S("  all polygons used");
} else {
this.debugPrint$S("  number of polygons used=" + meshSurface.bsPolygons.cardinality$());
}this.debugPrint$S("  solid color=" + this.gdata.getColorArgbOrGray$H(colix));
}var bsPolygons=meshSurface.bsPolygons;
var nPolygons=meshSurface.pc;
if (meshSurface.normals != null ) meshSurface.normalCount=meshSurface.vc;
var isAll=(bsPolygons == null );
var faces=$I$(6).newInt2$I(isAll ? nPolygons : bsPolygons.cardinality$());
var i0=(isAll ? nPolygons - 1 : bsPolygons.nextSetBit$I(0));
for (var i=i0, ipt=0; i >= 0; i=isAll ? i - 1 : bsPolygons.nextSetBit$I(i + 1)) {
var polygon=meshSurface.pis[i];
faces[ipt++]=(meshSurface.haveQuads ? polygon : Clazz.array(Integer.TYPE, -1, [polygon[0], polygon[1], polygon[2]]));
}
var data=$I$(7).newMesh$Z$javajs_util_T3A$I$IAA$javajs_util_T3A$I(false, meshSurface.vs, meshSurface.vc, faces, meshSurface.normals, 0);
data.vcs=meshSurface.vcs;
var name="Surface" + this.surfaceNum++;
var isSolidColor=(colix != 0);
p$1.addTexture$H$S.apply(this, [colix, isSolidColor ? null : name]);
var dim=null;
if (isSolidColor) {
this.debugPrint$S("outputSurface: coloring solid");
this.debugPrint$S("  Omitting texture map");
} else {
var nFaces=faces.length;
var width=(Math.ceil(Math.sqrt(nFaces))|0);
var height=(nFaces/width|0);
if (nFaces % width != 0) {
height++;
}dim=Clazz.array(Integer.TYPE, -1, [width, height]);
this.debugPrint$S("  width=" + width + " height=" + height + " size = " + (width * height) );
var file=p$1.createTextureFile$S$org_jmol_util_MeshSurface$IA.apply(this, [name, data, dim]);
if (file == null  || file.getByteCount$() == 0 ) {
System.out.println$S("Error creating texture file: " + name);
this.textureFiles.addLast$TV("Error creating texture file: " + name);
return;
}this.textureFiles.addLast$TV(file.getByteCount$() + " (" + width + "x" + height + ") " + name );
var shortName=file.getName$();
p$1.outputMtl$S.apply(this, [" map_Kd " + shortName + "\n" ]);
p$1.outputMtl$S.apply(this, [" map_Ka " + shortName + "\n" ]);
}var matrix=$I$(8).newM4$javajs_util_M4(null);
matrix.setTranslation$javajs_util_T3($I$(9).newV$javajs_util_T3(meshSurface.offset));
var bsValid=Clazz.new_($I$(10));
p$1.addMesh$S$org_jmol_util_MeshSurface$javajs_util_M4$javajs_util_M4$H$IA$javajs_util_BS.apply(this, [name, data, matrix, null, colix, dim, bsValid]);
});

Clazz.newMeth(C$, 'initializeOutput$org_jmol_viewer_Viewer$D$org_jmol_util_GData$java_util_Map', function (vwr, privateKey, gdata, params) {
this.debugPrint$S("initializeOutput: + output");
var retVal=this.initOutput$org_jmol_viewer_Viewer$D$org_jmol_util_GData$java_util_Map(vwr, privateKey, gdata, params);
if (!retVal) {
this.debugPrint$S("End initializeOutput (error in super):");
return false;
}var dot=this.fileName.lastIndexOf$S(".");
if (dot < 0) {
this.debugPrint$S("End initializeOutput (Error creating .mtl file):");
return false;
}this.objFileRootName=this.fileName.substring$I$I(0, dot);
try {
var mtlFileName=this.objFileRootName + ".mtl";
this.mtlout=vwr.openExportChannel$D$S$Z(privateKey, mtlFileName, true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.debugPrint$S("End initializeOutput (" + ex.getMessage$() + "):" );
return false;
} else {
throw ex;
}
}
p$1.outputMtl$S.apply(this, ["# Created by Jmol " + $I$(5).getJmolVersion$() + "\n" ]);
this.output$S("\nmtllib " + this.mtlout.getName$() + "\n" );
this.textureFiles=Clazz.new_($I$(11));
this.debugPrint$S("End initializeOutput:");
return true;
});

Clazz.newMeth(C$, 'finalizeOutput$', function () {
this.debugPrint$S("finalizeOutput");
var retVal=this.finalizeOutput2$();
var ret=this.mtlout.closeChannel$();
if (ret != null ) {
$I$(3).info$S(ret);
ret="ERROR EXPORTING MTL FILE: " + ret;
if (retVal.startsWith$S("OK")) return ret;
return retVal + " and " + ret ;
}retVal += ", " + this.nMtlBytes + " " + this.mtlout.getFileName$() ;
for (var string, $string = this.textureFiles.iterator$(); $string.hasNext$()&&((string=($string.next$())),1);) {
retVal += ", " + string;
}
this.debugPrint$S(retVal);
this.debugPrint$S("End finalizeOutput:");
return retVal;
});

Clazz.newMeth(C$, 'outputMtl$S', function (data) {
this.nMtlBytes+=data.length$();
this.mtlout.append$S(data);
}, p$1);

Clazz.newMeth(C$, 'getTextureName$H', function (colix) {
return "k" + $I$(12).getHexColorFromRGB$I(this.gdata.getColorArgbOrGray$H(colix));
}, p$1);

Clazz.newMeth(C$, 'outputCircle1$javajs_util_P3$javajs_util_P3$H$F', function (ptCenter, ptPerp, colix, radius) {
var data=$I$(13).getCircleData$();
var matrix=Clazz.new_($I$(8));
p$1.addTexture$H$S.apply(this, [colix, null]);
var name="Circle" + this.circleNum++;
matrix.setToM3$javajs_util_M34(this.getRotationMatrix$javajs_util_P3$javajs_util_P3$F(ptCenter, ptPerp, radius));
matrix.m03=ptCenter.x;
matrix.m13=ptCenter.y;
matrix.m23=ptCenter.z;
matrix.m33=1;
p$1.addMesh$S$org_jmol_util_MeshSurface$javajs_util_M4$javajs_util_M4$H$IA$javajs_util_BS.apply(this, [name, data, matrix, matrix, colix, null, null]);
}, p$1);

Clazz.newMeth(C$, 'outputCone1$javajs_util_P3$javajs_util_P3$F$H', function (ptBase, ptTip, radius, colix) {
var data=$I$(13).getConeData$();
var matrix=Clazz.new_($I$(8));
p$1.addTexture$H$S.apply(this, [colix, null]);
var name="Cone" + this.coneNum++;
matrix.setToM3$javajs_util_M34(this.getRotationMatrix$javajs_util_P3$javajs_util_P3$F(ptBase, ptTip, radius));
matrix.m03=ptBase.x;
matrix.m13=ptBase.y;
matrix.m23=ptBase.z;
matrix.m33=1;
p$1.addMesh$S$org_jmol_util_MeshSurface$javajs_util_M4$javajs_util_M4$H$IA$javajs_util_BS.apply(this, [name, data, matrix, matrix, colix, null, null]);
}, p$1);

Clazz.newMeth(C$, 'outputEllipse1$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$H', function (ptCenter, ptZ, ptX, ptY, colix) {
var data=$I$(13).getCircleData$();
var matrix=Clazz.new_($I$(8));
p$1.addTexture$H$S.apply(this, [colix, null]);
var name="Ellipse" + this.ellipseNum++;
matrix.setToM3$javajs_util_M34(this.getRotationMatrix$javajs_util_P3$javajs_util_P3$F$javajs_util_P3$javajs_util_P3(ptCenter, ptZ, 1, ptX, ptY));
matrix.m03=ptZ.x;
matrix.m13=ptZ.y;
matrix.m23=ptZ.z;
matrix.m33=1;
p$1.addMesh$S$org_jmol_util_MeshSurface$javajs_util_M4$javajs_util_M4$H$IA$javajs_util_BS.apply(this, [name, data, matrix, matrix, colix, null, null]);
return true;
}, p$1);

Clazz.newMeth(C$, 'outputEllipsoid1$javajs_util_T3$F$F$F$javajs_util_A4$H', function (center, rx, ry, rz, a, colix) {
var data=$I$(7).getSphereData$I(3);
p$1.addTexture$H$S.apply(this, [colix, null]);
var name;
if (Clazz.instanceOf(center, "org.jmol.modelset.Atom")) {
var atom=center;
name=$I$(14).replaceAllCharacters$S$S$S(atom.getAtomName$(), " \t", "") + "_Atom";
} else if (rx == ry  && rx == rz  ) {
name="Sphere" + this.sphereNum++;
} else {
name="Ellipsoid" + this.ellipsoidNum++;
}this.setSphereMatrix$javajs_util_T3$F$F$F$javajs_util_A4$javajs_util_M4(center, rx, ry, rz, a, this.sphereMatrix);
p$1.addMesh$S$org_jmol_util_MeshSurface$javajs_util_M4$javajs_util_M4$H$IA$javajs_util_BS.apply(this, [name, data, this.sphereMatrix, this.sphereMatrix, colix, null, null]);
}, p$1);

Clazz.newMeth(C$, 'outputCylinder1$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$B$F$javajs_util_P3$javajs_util_P3', function (ptCenter, pt1, pt2, colix, endcaps, radius, ptX, ptY) {
var data=$I$(13).getCylinderData$Z(false);
var matrix=Clazz.new_($I$(8));
p$1.addTexture$H$S.apply(this, [colix, null]);
var name="Cylinder" + this.cylinderNum++;
var n=(ptX != null  && endcaps == 0  ? 2 : 1);
for (var i=0; i < n; i++) {
if (ptX == null ) matrix.setToM3$javajs_util_M34(this.getRotationMatrix$javajs_util_P3$javajs_util_P3$F(pt1, pt2, radius));
 else matrix.setToM3$javajs_util_M34(this.getRotationMatrix$javajs_util_P3$javajs_util_P3$F$javajs_util_P3$javajs_util_P3(ptCenter, pt2, radius, ptX, ptY));
matrix.m03=pt1.x;
matrix.m13=pt1.y;
matrix.m23=pt1.z;
matrix.m33=1;
}
p$1.addMesh$S$org_jmol_util_MeshSurface$javajs_util_M4$javajs_util_M4$H$IA$javajs_util_BS.apply(this, [name, data, matrix, matrix, colix, null, null]);
}, p$1);

Clazz.newMeth(C$, 'outputTriangle1$javajs_util_T3$javajs_util_T3$javajs_util_T3$H', function (pt1, pt2, pt3, colix) {
var data=$I$(13).getTriangleData$javajs_util_T3$javajs_util_T3$javajs_util_T3(pt1, pt2, pt3);
p$1.addTexture$H$S.apply(this, [colix, null]);
var name="Triangle" + this.triangleNum++;
var matrix=$I$(8).newM4$javajs_util_M4(null);
p$1.addMesh$S$org_jmol_util_MeshSurface$javajs_util_M4$javajs_util_M4$H$IA$javajs_util_BS.apply(this, [name, data, matrix, matrix, colix, null, null]);
}, p$1);

Clazz.newMeth(C$, 'addTexture$H$S', function (colix, name) {
var scolix=Short.valueOf$H(colix);
if (name == null  && this.textures.contains$O(scolix) ) {
return;
}this.textures.add$TE(scolix);
var sb=Clazz.new_($I$(15));
sb.append$S("\nnewmtl " + (name == null  ? p$1.getTextureName$H.apply(this, [colix]) : name) + "\n" );
sb.append$S(" Ns 163\n");
sb.append$S(" Tr " + P$.___Exporter.opacityFractionalFromColix$H(colix) + "\n" );
sb.append$S(" Ni 0.001\n");
sb.append$S(" illum 2\n");
sb.append$S(" Ka 0.20 0.20 0.20\n");
sb.append$S(" Kd " + this.rgbFractionalFromColix$H(colix) + "\n" );
sb.append$S(" Ks 0.25 0.25 0.25\n");
p$1.outputMtl$S.apply(this, [sb.toString()]);
}, p$1);

Clazz.newMeth(C$, 'addMesh$S$org_jmol_util_MeshSurface$javajs_util_M4$javajs_util_M4$H$IA$javajs_util_BS', function (name, data, matrix, matrix1, colix, dim, bsValid) {
if (this.surfacesOnly) {
if (name == null  || !name.startsWith$S("Surface") ) {
return;
}}this.output$S("\ng " + name + "\n" );
this.output$S("usemtl " + (dim == null  ? p$1.getTextureName$H.apply(this, [colix]) : name) + "\n" );
var faces=data.getFaces$();
var nFaces=faces.length;
if (bsValid != null ) for (var face, $face = 0, $$face = faces; $face<$$face.length&&((face=($$face[$face])),1);$face++) for (var i, $i = 0, $$i = face; $i<$$i.length&&((i=($$i[$i])),1);$i++) bsValid.set$I(i);


var vertices=data.getVertices$();
var nVertices=data.vc;
var map=Clazz.array(Integer.TYPE, [nVertices]);
var nCoord=this.getCoordinateMap$javajs_util_T3A$IA$javajs_util_BS(vertices, map, bsValid);
this.output$S("# Number of vertices: " + nCoord + "\n" );
p$1.outputList$javajs_util_T3A$I$javajs_util_M4$S$javajs_util_BS.apply(this, [vertices, nVertices, matrix, "v ", bsValid]);
nVertices=nCoord;
var normals=data.normals;
var nNormals=data.normalCount;
var map2=null;
var vNormals=null;
if (normals != null ) {
vNormals=Clazz.new_($I$(11));
map2=this.getNormalMap$javajs_util_T3A$I$javajs_util_BS$javajs_util_Lst(normals, nNormals, bsValid, vNormals);
nNormals=vNormals.size$();
this.output$S("# Number of normals: " + nNormals + "\n" );
for (var i=0; i < nNormals; i++) this.output$S("vn " + vNormals.get$I(i));

}if (dim != null ) {
this.output$S("# Number of texture coordinates: " + nFaces + "\n" );
var width=dim[0];
var height=dim[1];
var u;
var v;
for (var row=0, iFace=0; row < height; row++) {
v=row + 0.5;
if (this.normalizeUV) v /= height;
for (var col=0; col < width; col++) {
u=col + 0.5;
if (this.normalizeUV) u /= width;
this.output$S("vt " + new Float(u).toString() + " " + new Float(v).toString() + "\n" );
if (++iFace == nFaces) break;
}
}
if (!this.normalizeUV) {
this.output$S("vt 0.0 0.0\n");
this.output$S("vt " + new Float(width).toString() + " " + new Float(height).toString() + "\n" );
}}this.output$S("# Number of faces: " + nFaces + "\n" );
for (var i=0; i < nFaces; i++) if (dim != null ) p$1.outputFace2$IA$I$IA$IA.apply(this, [faces[i], i, map, map2]);
 else p$1.outputFace1$IA$IA$IA.apply(this, [faces[i], map, map2]);

if (dim != null ) this.currentTextureOrigin+=nFaces;
this.currentVertexOrigin+=nVertices;
this.currentNormalOrigin+=nNormals;
}, p$1);

Clazz.newMeth(C$, 'outputList$javajs_util_T3A$I$javajs_util_M4$S$javajs_util_BS', function (pts, nPts, m, prefix, bsValid) {
for (var i=0; i < nPts; i++) {
if (bsValid != null  && !bsValid.get$I(i) ) continue;
this.ptTemp.setT$javajs_util_T3(pts[i]);
if (m != null ) m.rotTrans$javajs_util_T3(this.ptTemp);
this.output$S(prefix + new Float(this.ptTemp.x).toString() + " " + new Float(this.ptTemp.y).toString() + " " + new Float(this.ptTemp.z).toString() + "\n" );
}
}, p$1);

Clazz.newMeth(C$, 'outputFace1$IA$IA$IA', function (face, map, map2) {
this.output$S("f");
for (var i, $i = 0, $$i = face; $i<$$i.length&&((i=($$i[$i])),1);$i++) this.output$S(" " + ((map == null  ? i : map[i]) + this.currentVertexOrigin) + "//" + ((map2 == null  ? i : map2[i]) + this.currentNormalOrigin) );

this.output$S("\n");
}, p$1);

Clazz.newMeth(C$, 'outputFace2$IA$I$IA$IA', function (face, vt, map, map2) {
this.output$S("f");
for (var i, $i = 0, $$i = face; $i<$$i.length&&((i=($$i[$i])),1);$i++) {
this.output$S(" " + ((map == null  ? i : map[i]) + this.currentVertexOrigin) + "/" + (this.currentTextureOrigin + vt) + "/" + ((map2 == null  ? i : map2[i]) + this.currentNormalOrigin) );
}
this.output$S("\n");
}, p$1);

Clazz.newMeth(C$, 'createTextureFile$S$org_jmol_util_MeshSurface$IA', function (name, data, dim) {
this.debugPrint$S("createTextureFile: " + name);
var colixes=(data.pcs == null  ? data.vcs : data.pcs);
if (colixes == null  || colixes.length == 0 ) {
this.debugPrint$S("createTextureFile: Array problem");
this.debugPrint$S("  colixes=" + colixes + " data=" + data );
if (colixes != null ) {
this.debugPrint$S("  colixes.length=" + colixes.length);
}return null;
}var nUsed=data.pis.length;
if (nUsed <= 0) {
this.debugPrint$S("createTextureFile: nFaces = 0");
return null;
}var width=dim[0];
var height=dim[1];
var textureType="png";
var row=height - 1;
var col=0;
var sum=Clazz.new_($I$(2));
var w=width * 3;
var h=height * 3;
var bytes=(textureType.equals$O("tga") ? Clazz.array(Byte.TYPE, [h, w * 3]) : null);
var rgbbuf=(bytes == null  ? Clazz.array(Integer.TYPE, [h * w]) : null);
var ptTemp=Clazz.new_($I$(2));
for (var i=0; i < data.pis.length; i++) {
var rgb;
if (data.pcs == null ) {
var face=data.pis[i];
sum.set$F$F$F(0, 0, 0);
for (var iVertex, $iVertex = 0, $$iVertex = face; $iVertex<$$iVertex.length&&((iVertex=($$iVertex[$iVertex])),1);$iVertex++) sum.add$javajs_util_T3($I$(16).colorPtFromInt$I$javajs_util_P3(this.gdata.getColorArgbOrGray$H(colixes[iVertex]), ptTemp));

sum.scale$F(1.0 / face.length);
rgb=$I$(16).colorPtToFFRGB$javajs_util_T3(sum);
} else {
rgb=this.gdata.getColorArgbOrGray$H(colixes[i]);
}if (bytes == null ) {
for (var j=0; j < 3; j++) for (var k=0; k < 3; k++) rgbbuf[(row * 3 + k) * w + col * 3 + j]=rgb;


} else {
}if ((col=(col + 1) % width) == 0) row--;
}
try {
var params=Clazz.new_($I$(17));
var fname=this.fileName;
if (rgbbuf != null ) {
params.put$TK$TV("rgbbuf", rgbbuf);
params.put$TK$TV("fileName", this.objFileRootName + "_" + name + "." + textureType );
params.put$TK$TV("type", textureType);
params.put$TK$TV("width", Integer.valueOf$I(w));
params.put$TK$TV("height", Integer.valueOf$I(h));
fname=this.fileName=this.vwr.outputToFile$java_util_Map(params);
}this.debugPrint$S("End createTextureFile: " + fname);
return params.get$O("outputChannel");
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.debugPrint$S("End createTextureFile (" + ex.getMessage$() + "):" );
return null;
} else {
throw ex;
}
}
}, p$1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
