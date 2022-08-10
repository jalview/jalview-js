(function(){var P$=Clazz.newPackage("org.jmol.export"),p$1={},I$=[[0,'org.jmol.viewer.Viewer','org.jmol.export.___Exporter','javajs.util.Measure','javajs.util.P4']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "_PovrayExporter", null, 'org.jmol.export.__RayTracerExporter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['haveMacros']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.commentChar="// ";
}, 1);

Clazz.newMeth(C$, 'finalizeOutput$', function () {
this.finalizeOutput2$();
return p$1.getAuxiliaryFileData.apply(this, []);
});

Clazz.newMeth(C$, 'outputHeader$', function () {
this.initVars$();
this.output$S("// ******************************************************\n");
this.output$S("// Created by Jmol " + $I$(1).getJmolVersion$() + "\n" );
this.output$S("//\n");
this.output$S("// This script was generated on " + this.getExportDate$() + "\n" );
this.output$S("// ******************************************************\n");
try {
this.output$S(this.vwr.getWrappedStateScript$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.output$S("\n");
this.output$S(this.getJmolPerspective$());
this.output$S("\n");
this.output$S("// ******************************************************\n");
this.output$S("// Declare the resolution, camera, and light sources.\n");
this.output$S("// ******************************************************\n");
this.output$S("\n");
this.output$S("// NOTE: if you plan to render at a different resolution,\n");
this.output$S("// be sure to update the following two lines to maintain\n");
this.output$S("// the correct aspect ratio.\n\n");
this.output$S("#declare Width = " + this.screenWidth + ";\n" );
this.output$S("#declare Height = " + this.screenHeight + ";\n" );
this.output$S("#declare minScreenDimension = " + this.minScreenDimension + ";\n" );
this.output$S("#declare showAtoms = true;\n");
this.output$S("#declare showBonds = true;\n");
this.output$S("#declare noShadows = true;\n");
this.output$S("camera{\n");
var offsetX;
var offsetY;
var f;
if (this.wasPerspective) {
offsetX=this.vwr.tm.getTranslationXPercent$() / 100 * this.screenWidth;
offsetY=this.vwr.tm.getTranslationYPercent$() / 100 * this.screenHeight;
f=1.0 / this.vwr.tm.getPerspectiveFactor$F((this.vwr.tm.getCameraDepth$() - 0.5) * this.vwr.getScreenDim$());
this.output$S("  perspective\n");
this.output$S("  angle " + new Float(this.apertureAngle).toString() + "\n" );
this.output$S("  right < " + this.screenWidth + ", 0, 0>\n" );
this.output$S("  up < 0, " + -this.screenHeight + ", 0 >\n" );
} else {
offsetX=offsetY=f=0;
this.output$S("  orthographic\n");
this.output$S("  right < " + -this.screenWidth + ", 0, 0>\n" );
this.output$S("  up < 0, " + this.screenHeight + ", 0 >\n" );
}this.output$S("  sky < 0, -1, 0 >\n");
this.output$S("  location < " + (new Float(this.screenWidth / 2.0 + offsetX).toString()) + ", " + new Float((this.screenHeight / 2.0 + offsetY)).toString() + ", 0>\n" );
this.output$S("  look_at < " + (new Float(this.screenWidth / 2.0 + f * offsetX).toString()) + ", " + new Float((this.screenHeight / 2.0 + f * offsetY)).toString() + ", 1000 >\n" );
this.output$S("}\n");
this.output$S("\n");
this.output$S("background { color rgb <" + this.rgbFractionalFromColix$H(this.backgroundColix) + "> }\n" );
this.output$S("\n");
var distance=Math.max(this.screenWidth, this.screenHeight);
this.output$S("light_source { <" + new Float(this.lightSource.x * distance).toString() + "," + new Float(this.lightSource.y * distance).toString() + ", " + (new Float(-1 * this.lightSource.z * distance ).toString()) + "> " + " rgb <0.6,0.6,0.6> }\n");
this.output$S("\n");
this.output$S("\n");
this.output$S("// ***********************************************\n");
this.output$S("// macros for common shapes\n");
this.output$S("// ***********************************************\n");
this.output$S("\n");
p$1.writeMacros.apply(this, []);
});

Clazz.newMeth(C$, 'writeMacros', function () {
this.output$S("#default { finish {\n" + "  ambient " + new Float(this.gdata.getAmbientPercent$() / 100.0).toString()  + "\n" + "  diffuse " + new Float(this.gdata.getDiffusePercent$() / 100.0).toString() + "\n" + "  specular " + new Float(this.gdata.getSpecularPercent$() / 100.0).toString() + "\n" + "  roughness .00001\n  metallic\n  phong 0.9\n  phong_size 120\n}}" + "\n\n");
this.output$S("#macro check_shadow()\n #if (noShadows)\n  no_shadow \n #end\n#end\n\n");
this.output$S("#declare slabZ = " + this.slabZ + ";\n" + "#declare depthZ = " + this.depthZ + ";\n" + "#declare dzSlab = 10;\n" + "#declare dzDepth = dzSlab;\n" + "#declare dzStep = 0.001;\n\n" );
this.output$S("#macro clip()\n  clipped_by { box {<0,0,slabZ>,<Width,Height,depthZ>} }\n#end\n\n");
this.output$S("#macro circleCap(Z,RADIUS,R,G,B,T)\n// cap for lower clip\n #local cutDiff = Z - slabZ;\n #local cutRadius2 = (RADIUS*RADIUS) - (cutDiff*cutDiff);\n #if (cutRadius2 > 0)\n  #local cutRadius = sqrt(cutRadius2);\n  #if (dzSlab > 0)\n   #declare dzSlab = dzSlab - dzStep;\n  #end\n  cylinder{<X,Y,slabZ-dzSlab>,<X,Y,(slabZ+1)>,cutRadius\n   pigment{rgbt<R,G,B,T>}\n   translucentFinish(T)\n   check_shadow()}\n #end\n// cap for upper clip\n #declare cutDiff = Z - depthZ;\n #declare cutRadius2 = (RADIUS*RADIUS) - (cutDiff*cutDiff);\n #if (cutRadius2 > 0)\n  #local cutRadius = sqrt(cutRadius2);\n  #if (dzDepth > 0)\n   #declare dzDepth = dzDepth - dzStep;\n  #end\n  cylinder{<X,Y,depthZ+dzDepth>,<X,Y,(depthZ-1)>,cutRadius\n   pigment{rgbt<R,G,B,T>}\n   translucentFinish(T)\n   check_shadow()}\n #end\n#end\n\n");
p$1.writeMacrosFinish.apply(this, []);
p$1.writeMacrosAtom.apply(this, []);
p$1.writeMacrosBond.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'writeMacrosFinish', function () {
this.output$S("#macro translucentFinish(T)\n" + " #local shineFactor = T;\n" + " #if (T <= 0.25)\n" + "  #declare shineFactor = (1.0-4*T);\n" + " #end\n" + " #if (T > 0.25)\n" + "  #declare shineFactor = 0;\n" + " #end\n" + " finish {\n" + "  ambient " + new Float(this.gdata.getAmbientPercent$() / 100.0).toString()  + "\n" + "  diffuse " + new Float(this.gdata.getDiffusePercent$() / 100.0).toString() + "\n" + "  specular " + new Float(this.gdata.getSpecularPercent$() / 100.0).toString() + "\n" + "  roughness .00001\n" + "  metallic shineFactor\n" + "  phong 0.9*shineFactor\n" + "  phong_size 120*shineFactor\n}" + "#end\n\n");
}, p$1);

Clazz.newMeth(C$, 'writeMacrosAtom', function () {
this.output$S("#macro a(X,Y,Z,RADIUS,R,G,B,T)\n sphere{<X,Y,Z>,RADIUS\n  pigment{rgbt<R,G,B,T>}\n  translucentFinish(T)\n  clip()\n  check_shadow()}\n" + (this.isSlabEnabled ? " circleCap(Z,RADIUS,R,G,B,T)\n" : "") + "#end\n\n" );
this.output$S("#macro q(XX,YY,ZZ,XY,XZ,YZ,X,Y,Z,J,R,G,B,T)\n quadric{<XX,YY,ZZ>,<XY,XZ,YZ>,<X,Y,Z>,J\n  pigment{rgbt<R,G,B,T>}\n  translucentFinish(T)\n  clip()\n  check_shadow()}\n#end\n\n");
}, p$1);

Clazz.newMeth(C$, 'writeMacrosBond', function () {
this.output$S("#macro b(X1,Y1,Z1,RADIUS1,X2,Y2,Z2,RADIUS2,R,G,B,T)\n cone{<X1,Y1,Z1>,RADIUS1,<X2,Y2,Z2>,RADIUS2\n  pigment{rgbt<R,G,B,T>}\n  translucentFinish(T)\n  clip()\n  check_shadow()}\n#end\n\n");
this.output$S("#macro c(X1,Y1,Z1,RADIUS1,X2,Y2,Z2,RADIUS2,R,G,B,T)\n cone{<X1,Y1,Z1>,RADIUS1,<X2,Y2,Z2>,RADIUS2 open\n  pigment{rgbt<R,G,B,T>}\n  translucentFinish(T)\n  clip()\n  check_shadow()}\n#end\n\n");
}, p$1);

Clazz.newMeth(C$, 'writeMacros2', function () {
this.output$S("#macro r(X1,Y1,Z1,X2,Y2,Z2,X3,Y3,Z3,R,G,B,T)\n triangle{<X1,Y1,Z1>,<X2,Y2,Z2>,<X3,Y3,Z3>\n  pigment{rgbt<R,G,B,T>}\n  translucentFinish(T)\n  clip()\n  check_shadow()}\n#end\n\n");
this.output$S("#macro p(X,Y,Z,R,G,B,T)\n box{<X,Y,Z>,<X+1,Y+1,Z+1>\n  pigment{rgbt<R,G,B,T>}\n  clip()\n  check_shadow()}\n#end\n\n");
this.output$S("#macro barb(X1,Y1,Z1,RADIUS1,X2,Y2,Z2,RADIUS2,R,G,B,T,X3,Y3,Z3,W3)\n cone{<X1,Y1,Z1>,RADIUS1,<X2,Y2,Z2>,RADIUS2\n  pigment{rgbt<R,G,B,T>}\n  translucentFinish(T)\n  clip()\n  clipped_by{plane{<X3,Y3,Z3>,W3}}\n  check_shadow()}\n#end\n\n");
this.haveMacros=true;
}, p$1);

Clazz.newMeth(C$, 'getTriad$javajs_util_T3', function (pt) {
if (Float.isNaN$F(pt.x)) return "0,0,0";
return new Float(pt.x).toString() + "," + new Float(pt.y).toString() + "," + new Float(pt.z).toString() ;
});

Clazz.newMeth(C$, 'getTriad$IA', function (i) {
return i[0] + "," + i[1] + "," + i[2] ;
}, p$1);

Clazz.newMeth(C$, 'color4$H', function (colix) {
return this.rgbFractionalFromColix$H(colix) + "," + $I$(2).translucencyFractionalFromColix$H(colix) ;
}, p$1);

Clazz.newMeth(C$, 'getAuxiliaryFileData', function () {
var fName=this.fileName.substring$I(this.fileName.lastIndexOf$S("/") + 1);
fName=fName.substring$I(fName.lastIndexOf$S("\\") + 1);
return "; Created by: Jmol " + $I$(1).getJmolVersion$() + "\n; Creation date: " + this.getExportDate$() + "\n; File created: " + this.fileName + " (" + this.getByteCount$() + " bytes)\n\n" + (this.commandLineOptions != null  ? this.commandLineOptions : "\n; Jmol state: (embedded in input file)\nInput_File_Name=" + fName + "\nOutput_to_File=true" + "\nOutput_File_Type=N" + "\nOutput_File_Name=" + fName + ".png" + "\nWidth=" + this.screenWidth + "\nHeight=" + this.screenHeight + "\nAntialias=true" + "\nAntialias_Threshold=0.1" + "\nDisplay=true" + "\nPause_When_Done=true" + "\nWarning_Level=5" + "\nVerbose=false" + "\n" ) ;
}, p$1);

Clazz.newMeth(C$, 'output$javajs_util_T3', function (pt) {
this.output$S(", <" + this.getTriad$javajs_util_T3(pt) + ">" );
});

Clazz.newMeth(C$, 'outputCircle$I$I$I$F$H$Z', function (x, y, z, radius, colix, doFill) {
this.output$S((doFill ? "b(" : "c(") + x + "," + y + "," + z + "," + new Float(radius).toString() + "," + x + "," + y + "," + (z + 1) + "," + new Float((radius + (doFill ? 0 : 2))).toString() + "," + p$1.color4$H.apply(this, [colix]) + ")\n" );
});

Clazz.newMeth(C$, 'outputCone$javajs_util_P3$javajs_util_P3$F$H$Z', function (screenBase, screenTip, radius, colix, isBarb) {
if (isBarb) {
if (!this.haveMacros) p$1.writeMacros2.apply(this, []);
this.tempP1.set$F$F$F(screenBase.x, screenTip.y, 12345.679);
var plane=$I$(3,"getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4",[screenBase, screenTip, this.tempP1, this.tempV1, this.tempV2, Clazz.new_($I$(4,1))]);
this.output$S("barb(" + this.getTriad$javajs_util_T3(screenBase) + "," + new Float(radius).toString() + "," + this.getTriad$javajs_util_T3(screenTip) + ",0" + "," + p$1.color4$H.apply(this, [colix]) + "," + new Float(plane.x).toString() + "," + new Float(plane.y).toString() + "," + new Float(plane.z).toString() + "," + new Float(-plane.w).toString() + ")\n" );
} else {
this.output$S("b(" + this.getTriad$javajs_util_T3(screenBase) + "," + new Float(radius).toString() + "," + this.getTriad$javajs_util_T3(screenTip) + ",0" + "," + p$1.color4$H.apply(this, [colix]) + ")\n" );
}});

Clazz.newMeth(C$, 'outputCylinder$javajs_util_P3$javajs_util_P3$F$H$Z', function (screenA, screenB, radius, colix, withCaps) {
var color=p$1.color4$H.apply(this, [colix]);
this.output$S((withCaps ? "b(" : "c(") + this.getTriad$javajs_util_T3(screenA) + "," + new Float(radius).toString() + "," + this.getTriad$javajs_util_T3(screenB) + "," + new Float(radius).toString() + "," + color + ")\n" );
});

Clazz.newMeth(C$, 'outputCylinderConical$javajs_util_P3$javajs_util_P3$F$F$H', function (screenA, screenB, radius1, radius2, colix) {
this.output$S("b(" + this.getTriad$javajs_util_T3(screenA) + "," + new Float(radius1).toString() + "," + this.getTriad$javajs_util_T3(screenB) + "," + new Float(radius2).toString() + "," + p$1.color4$H.apply(this, [colix]) + ")\n" );
});

Clazz.newMeth(C$, 'outputEllipsoid$javajs_util_P3$F$DA$H', function (center, radius, coef, colix) {
var s=new Double(coef[0]).toString() + "," + new Double(coef[1]).toString() + "," + new Double(coef[2]).toString() + "," + new Double(coef[3]).toString() + "," + new Double(coef[4]).toString() + "," + new Double(coef[5]).toString() + "," + new Double(coef[6]).toString() + "," + new Double(coef[7]).toString() + "," + new Double(coef[8]).toString() + "," + new Double(coef[9]).toString() + "," + p$1.color4$H.apply(this, [colix]) ;
this.output$S("q(" + s + ")\n" );
});

Clazz.newMeth(C$, 'outputSurface$javajs_util_T3A$javajs_util_T3A$HA$IAA$HA$I$I$I$javajs_util_BS$I$H$javajs_util_Lst$java_util_Map$javajs_util_P3', function (vertices, normals, colixes, indices, polygonColixes, nVertices, nPolygons, nTriangles, bsPolygons, faceVertexMax, colix, colorList, htColixes, offset) {
if (polygonColixes != null ) {
var isAll=(bsPolygons == null );
var i0=(isAll ? nPolygons - 1 : bsPolygons.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsPolygons.nextSetBit$I(i + 1))) {
this.output$S("polygon { 4\n");
for (var j=0; j <= 3; j++) this.outputVertex$javajs_util_T3$javajs_util_T3(vertices[indices[i][j % 3]], offset);

this.output$S("\n");
this.output$S("pigment{rgbt<" + p$1.color4$H.apply(this, [colix=polygonColixes[i]]) + ">}\n" );
this.output$S("  translucentFinish(" + $I$(2).translucencyFractionalFromColix$H(colix) + ")\n" );
this.output$S("  check_shadow()\n");
this.output$S("  clip()\n");
this.output$S("}\n");
}
return;
}this.output$S("mesh2 {\n");
this.output$S("vertex_vectors { " + nVertices);
for (var i=0; i < nVertices; i++) this.outputVertex$javajs_util_T3$javajs_util_T3(vertices[i], offset);

this.output$S("\n}\n");
var haveNormals=(normals != null );
if (haveNormals) {
this.output$S("normal_vectors { " + nVertices);
for (var i=0; i < nVertices; i++) {
$I$(2).setTempVertex$javajs_util_T3$javajs_util_T3$javajs_util_T3(vertices[i], offset, this.tempP2);
this.output$javajs_util_T3(this.getScreenNormal$javajs_util_T3$javajs_util_T3$F(this.tempP2, normals[i], 1));
this.output$S("\n");
}
this.output$S("\n}\n");
}if (colixes != null ) {
var nColix=colorList.size$();
this.output$S("texture_list { " + nColix);
var finish=">} translucentFinish(" + $I$(2).translucencyFractionalFromColix$H(colixes[0]) + ")}" ;
for (var i=0; i < nColix; i++) this.output$S("\n, texture{pigment{rgbt<" + p$1.color4$H.apply(this, [colorList.get$I(i).shortValue$()]) + finish );

this.output$S("\n}\n");
}this.output$S("face_indices { " + nTriangles);
var isAll=(bsPolygons == null );
var i0=(isAll ? nPolygons - 1 : bsPolygons.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsPolygons.nextSetBit$I(i + 1))) {
this.output$S(", <" + p$1.getTriad$IA.apply(this, [indices[i]]) + ">" );
if (colixes != null ) {
this.output$S("," + htColixes.get$O(Short.valueOf$H(colixes[indices[i][0]])));
this.output$S("," + htColixes.get$O(Short.valueOf$H(colixes[indices[i][1]])));
this.output$S("," + htColixes.get$O(Short.valueOf$H(colixes[indices[i][2]])));
}if (faceVertexMax == 4 && indices[i].length == 4 ) {
this.output$S(", <" + indices[i][0] + "," + indices[i][2] + "," + indices[i][3] + ">" );
if (colixes != null ) {
this.output$S("," + htColixes.get$O(Short.valueOf$H(colixes[indices[i][0]])));
this.output$S("," + htColixes.get$O(Short.valueOf$H(colixes[indices[i][2]])));
this.output$S("," + htColixes.get$O(Short.valueOf$H(colixes[indices[i][3]])));
}}this.output$S("\n");
}
this.output$S("\n}\n");
if (colixes == null ) {
this.output$S("pigment{rgbt<" + p$1.color4$H.apply(this, [colix]) + ">}\n" );
this.output$S("  translucentFinish(" + $I$(2).translucencyFractionalFromColix$H(colix) + ")\n" );
}this.output$S("  check_shadow()\n");
this.output$S("  clip()\n");
this.output$S("}\n");
});

Clazz.newMeth(C$, 'outputSphere$F$F$F$F$H', function (x, y, z, radius, colix) {
this.output$S("a(" + new Float(x).toString() + "," + new Float(y).toString() + "," + new Float(z).toString() + "," + new Float(radius).toString() + "," + p$1.color4$H.apply(this, [colix]) + ")\n" );
});

Clazz.newMeth(C$, 'outputTextPixel$I$I$I$I', function (x, y, z, argb) {
if (!this.haveMacros) p$1.writeMacros2.apply(this, []);
var tr=((argb >> 24) & 255);
tr=(255 - tr) / 255;
this.output$S("p(" + x + "," + y + "," + z + "," + this.rgbFractionalFromArgb$I(argb) + "," + new Float(tr).toString() + ")\n" );
});

Clazz.newMeth(C$, 'outputTriangle$javajs_util_T3$javajs_util_T3$javajs_util_T3$H', function (ptA, ptB, ptC, colix) {
if (!this.haveMacros) p$1.writeMacros2.apply(this, []);
this.output$S("r(" + this.getTriad$javajs_util_T3(ptA) + "," + this.getTriad$javajs_util_T3(ptB) + "," + this.getTriad$javajs_util_T3(ptC) + "," + p$1.color4$H.apply(this, [colix]) + ")\n" );
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:33 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
