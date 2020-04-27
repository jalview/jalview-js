(function(){var P$=Clazz.newPackage("org.jmol.export"),p$1={},I$=[[0,'org.jmol.export.UseTable','org.jmol.export.___Exporter','org.jmol.viewer.Viewer','javajs.util.SB']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "_TachyonExporter", null, 'org.jmol.export.__RayTracerExporter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.textures=Clazz.new_($I$(1,1).c$$S,[" "]);
},1);

C$.$fields$=[['S',['lighting','phong','textureCode'],'O',['textures','org.jmol.export.UseTable']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.commentChar="# ";
}, 1);

Clazz.newMeth(C$, 'initializeOutput$org_jmol_viewer_Viewer$D$org_jmol_util_GData$java_util_Map', function (vwr, privateKey, gdata, params) {
p$1.getLightingInfo.apply(this, []);
return this.initOutput$org_jmol_viewer_Viewer$D$org_jmol_util_GData$java_util_Map(vwr, privateKey, gdata, params);
});

Clazz.newMeth(C$, 'getLightingInfo', function () {
this.lighting=" AMBIENT " + (function(a,f){return f.apply(null,a)})([this.gdata.getAmbientPercent$() / 100.0],$I$(2).round$D) + " DIFFUSE " + (function(a,f){return f.apply(null,a)})([this.gdata.getDiffusePercent$() / 100.0],$I$(2).round$D) + " SPECULAR " + (function(a,f){return f.apply(null,a)})([this.gdata.getSpecularPercent$() / 100.0],$I$(2).round$D) ;
this.phong=" Phong Plastic 0.5 Phong_size " + this.gdata.getSpecularExponent$();
}, p$1);

Clazz.newMeth(C$, 'outputHeader$', function () {
this.initVars$();
this.output$S("# ******************************************************\n");
this.output$S("# Created by Jmol " + $I$(3).getJmolVersion$() + "\n" );
this.output$S("#\n");
this.output$S("# This script was generated on " + this.getExportDate$() + "\n" );
this.output$S("#\n");
this.output$S("# Requires Tachyon version 0.98.7 or newer\n");
this.output$S("#\n");
this.output$S("# Default tachyon rendering command for this scene:\n");
this.output$S("#   tachyon  -aasamples 12 %s -format TARGA -o %s.tga\n");
this.output$S("#\n");
this.output$S("# ******************************************************\n");
this.output$S("\n");
this.output$S(this.getJmolPerspective$());
this.output$S("\n");
this.output$S("Begin_Scene\n");
this.output$S("Resolution " + this.screenWidth + " " + this.screenHeight + "\n" );
this.output$S("Shader_Mode Medium\n");
this.output$S("  Trans_VMD\n");
this.output$S("  Fog_VMD\n");
this.output$S("End_Shader_Mode\n");
this.output$S("Camera\n");
this.output$S("  Zoom 3.0\n");
this.output$S("  Aspectratio 1\n");
this.output$S("  Antialiasing 12\n");
this.output$S("  Raydepth 8\n");
this.output$S("  Center " + p$1.triad$F$F$F.apply(this, [(this.screenWidth/2|0), (this.screenHeight/2|0), 0]) + "\n" );
this.output$S("  Viewdir 0 0 1\n");
this.output$S("  Updir   0 1 0\n");
this.output$S("End_Camera\n");
this.output$S("Directional_Light Direction " + $I$(2).round$javajs_util_T3(this.lightSource) + " Color 1 1 1\n" );
this.output$S("\n");
this.output$S("Background " + this.rgbFractionalFromColix$H(this.backgroundColix) + "\n" );
this.output$S("\n");
});

Clazz.newMeth(C$, 'outputFooter$', function () {
this.output$S("End_Scene\n");
});

Clazz.newMeth(C$, 'output$javajs_util_T3', function (pt) {
this.output$S(p$1.triad$javajs_util_T3.apply(this, [pt]));
});

Clazz.newMeth(C$, 'triad$F$F$F', function (x, y, z) {
return (x|0) + " " + ((-y)|0) + " " + (z|0) ;
}, p$1);

Clazz.newMeth(C$, 'triad$javajs_util_T3', function (pt) {
if (Float.isNaN$F(pt.x)) return "0 0 0";
return p$1.triad$F$F$F.apply(this, [pt.x, pt.y, pt.z]);
}, p$1);

Clazz.newMeth(C$, 'outputTextureCode', function () {
this.output$S(this.textureCode);
this.output$S("\n");
}, p$1);

Clazz.newMeth(C$, 'outputTexture$H$Z', function (colix, useTexDef) {
p$1.outputTexture2$S$S$Z.apply(this, [this.rgbFractionalFromColix$H(colix), $I$(2).opacityFractionalFromColix$H(colix), useTexDef]);
}, p$1);

Clazz.newMeth(C$, 'outputTexture$I$Z', function (argb, useTexDef) {
p$1.outputTexture2$S$S$Z.apply(this, [this.rgbFractionalFromArgb$I(argb), $I$(2).opacityFractionalFromArgb$I(argb), useTexDef]);
}, p$1);

Clazz.newMeth(C$, 'outputTexture2$S$S$Z', function (rgb, opacity, useTexDef) {
this.textureCode=(useTexDef ? this.textures.getDef$S("t" + rgb + opacity ) : null);
if (useTexDef && this.textureCode.startsWith$S(" ") ) return;
var sb=Clazz.new_($I$(4,1));
sb.append$S(this.lighting);
sb.append$S(" Opacity " + opacity);
sb.append$S(this.phong);
sb.append$S(" Color " + rgb);
sb.append$S(" TexFunc 0\n");
if (!useTexDef) {
this.textureCode="Texture " + sb;
return;
}this.output$S("TexDef " + this.textureCode);
this.output$S(sb.toString());
this.textureCode=" " + this.textureCode;
}, p$1);

Clazz.newMeth(C$, 'outputCircle$I$I$I$F$H$Z', function (x, y, z, radius, colix, doFill) {
this.tempV1.set$F$F$F(0, 0, -1);
p$1.outputRing$I$I$I$javajs_util_V3$F$H$Z.apply(this, [x, y, z, this.tempV1, radius, colix, doFill]);
});

Clazz.newMeth(C$, 'outputRing$I$I$I$javajs_util_V3$F$H$Z', function (x, y, z, tempV1, radius, colix, doFill) {
p$1.outputTexture$H$Z.apply(this, [colix, true]);
this.output$S("Ring Center ");
this.output$S(p$1.triad$F$F$F.apply(this, [x, y, z]));
this.output$S(" Normal " + p$1.triad$javajs_util_T3.apply(this, [tempV1]));
this.output$S(" Inner " + (function(a,f){return f.apply(null,a)})([(doFill ? 0 : radius * 0.95)],$I$(2).round$D));
this.output$S(" Outer " + $I$(2).round$D(radius));
p$1.outputTextureCode.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'outputCone$javajs_util_P3$javajs_util_P3$F$H$Z', function (screenBase, screenTip, radius, colix, isBarb) {
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(screenBase, this.tempP1);
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(screenTip, this.tempP2);
radius=this.vwr.tm.unscaleToScreen$F$F(screenBase.z, radius);
var matRotateScale=this.getRotationMatrix$javajs_util_P3$javajs_util_P3$F(this.tempP1, this.tempP2, radius);
this.export3D.drawSurface$org_jmol_util_MeshSurface$H($I$(2).getConeMesh$javajs_util_P3$javajs_util_M3$H(this.tempP1, matRotateScale, colix), colix);
});

Clazz.newMeth(C$, 'outputCylinder$javajs_util_P3$javajs_util_P3$F$H$Z', function (screenA, screenB, radius, colix, withCaps) {
p$1.outputTexture$H$Z.apply(this, [colix, true]);
this.output$S("FCylinder Base ");
this.output$S(p$1.triad$javajs_util_T3.apply(this, [screenA]));
this.output$S(" Apex ");
this.output$S(p$1.triad$javajs_util_T3.apply(this, [screenB]));
this.output$S(" Rad " + $I$(2).round$D(radius));
p$1.outputTextureCode.apply(this, []);
if (withCaps && radius > 1  ) {
this.tempV1.sub2$javajs_util_T3$javajs_util_T3(screenA, screenB);
p$1.outputRing$I$I$I$javajs_util_V3$F$H$Z.apply(this, [(screenA.x|0), (screenA.y|0), (screenA.z|0), this.tempV1, radius, colix, true]);
this.tempV1.scale$F(-1);
p$1.outputRing$I$I$I$javajs_util_V3$F$H$Z.apply(this, [(screenB.x|0), (screenB.y|0), (screenB.z|0), this.tempV1, radius, colix, true]);
}});

Clazz.newMeth(C$, 'fillConicalCylinder$javajs_util_P3$javajs_util_P3$I$H$B', function (screenA, screenB, madBond, colix, endcaps) {
var diameter=(this.vwr.tm.scaleToScreen$I$I((((screenA.z + screenB.z) / 2.0)|0), madBond)|0);
this.fillCylinderScreenMad$H$B$I$javajs_util_P3$javajs_util_P3(colix, endcaps, diameter, screenA, screenB);
});

Clazz.newMeth(C$, 'outputCylinderConical$javajs_util_P3$javajs_util_P3$F$F$H', function (screenA, screenB, radius1, radius2, colix) {
});

Clazz.newMeth(C$, 'outputEllipsoid$javajs_util_P3$F$DA$H', function (center, radius, coef, colix) {
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(center, this.tempP1);
this.outputSphere$F$F$F$F$H(this.tempP1.x, this.tempP1.y, this.tempP1.z, radius, colix);
});

Clazz.newMeth(C$, 'outputSurface$javajs_util_T3A$javajs_util_T3A$HA$IAA$HA$I$I$I$javajs_util_BS$I$H$javajs_util_Lst$java_util_Map$javajs_util_P3', function (vertices, normals, colixes, indices, polygonColixes, nVertices, nPolygons, nTriangles, bsPolygons, faceVertexMax, colix, colorList, htColixes, offset) {
if (polygonColixes != null ) {
var isAll=(bsPolygons == null );
var i0=(isAll ? nPolygons - 1 : bsPolygons.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsPolygons.nextSetBit$I(i + 1))) {
$I$(2).setTempVertex$javajs_util_T3$javajs_util_T3$javajs_util_T3(vertices[indices[i][0]], offset, this.tempP1);
$I$(2).setTempVertex$javajs_util_T3$javajs_util_T3$javajs_util_T3(vertices[indices[i][1]], offset, this.tempP2);
$I$(2).setTempVertex$javajs_util_T3$javajs_util_T3$javajs_util_T3(vertices[indices[i][2]], offset, this.tempP3);
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.tempP1, this.tempP1);
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.tempP2, this.tempP2);
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.tempP3, this.tempP3);
this.outputTriangle$javajs_util_T3$javajs_util_T3$javajs_util_T3$H(this.tempP1, this.tempP2, this.tempP3, colix);
}
return;
}p$1.outputTexture$H$Z.apply(this, [colixes == null  ? colix : colixes[0], false]);
this.output$S("VertexArray  Numverts " + nVertices + "\nCoords\n" );
for (var i=0; i < nVertices; i++) this.outputVertex$javajs_util_T3$javajs_util_T3(vertices[i], offset);

this.output$S("\nNormals\n");
for (var i=0; i < nVertices; i++) {
$I$(2).setTempVertex$javajs_util_T3$javajs_util_T3$javajs_util_T3(vertices[i], offset, this.tempP1);
this.output$S(p$1.triad$javajs_util_T3.apply(this, [this.getScreenNormal$javajs_util_T3$javajs_util_T3$F(this.tempP1, normals[i], 10)]) + "\n");
}
var rgb=(colixes == null  ? this.rgbFractionalFromColix$H(colix) : null);
this.output$S("\nColors\n");
for (var i=0; i < nVertices; i++) {
this.output$S((colixes == null  ? rgb : this.rgbFractionalFromColix$H(colixes[i])) + "\n");
}
p$1.outputTextureCode.apply(this, []);
this.output$S("\nTriMesh " + nTriangles + "\n" );
var isAll=(bsPolygons == null );
var i0=(isAll ? nPolygons - 1 : bsPolygons.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsPolygons.nextSetBit$I(i + 1))) {
this.output$S(indices[i][0] + " " + indices[i][1] + " " + indices[i][2] + "\n" );
if (faceVertexMax == 4 && indices[i].length == 4 ) this.output$S(indices[i][0] + " " + indices[i][2] + " " + indices[i][3] + "\n" );
}
this.output$S("\nEnd_VertexArray\n");
});

Clazz.newMeth(C$, 'outputSphere$F$F$F$F$H', function (x, y, z, radius, colix) {
p$1.outputTexture$H$Z.apply(this, [colix, true]);
this.output$S("Sphere Center ");
this.output$S(p$1.triad$F$F$F.apply(this, [x, y, z]));
this.output$S(" Rad " + $I$(2).round$D(radius));
p$1.outputTextureCode.apply(this, []);
});

Clazz.newMeth(C$, 'outputTextPixel$I$I$I$I', function (x, y, z, argb) {
p$1.outputTexture$I$Z.apply(this, [argb, true]);
this.output$S("Sphere Center ");
this.output$S(p$1.triad$F$F$F.apply(this, [x, y, z]));
this.output$S(" Rad 1");
p$1.outputTextureCode.apply(this, []);
});

Clazz.newMeth(C$, 'outputTriangle$javajs_util_T3$javajs_util_T3$javajs_util_T3$H', function (ptA, ptB, ptC, colix) {
p$1.outputTexture$H$Z.apply(this, [colix, true]);
this.output$S("TRI");
this.output$S(" V0 " + p$1.triad$javajs_util_T3.apply(this, [ptA]));
this.output$S(" V1 " + p$1.triad$javajs_util_T3.apply(this, [ptB]));
this.output$S(" V2 " + p$1.triad$javajs_util_T3.apply(this, [ptC]));
p$1.outputTextureCode.apply(this, []);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:08 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
