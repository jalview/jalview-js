(function(){var P$=Clazz.newPackage("org.jmol.export"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "_MayaExporter", null, 'org.jmol.export.__CartesianExporter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nBalls=0;
this.nCyl=0;
},1);

C$.$fields$=[['I',['nBalls','nCyl'],'S',['name','id']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.commentChar="// ";
}, 1);

Clazz.newMeth(C$, 'outputHeader$', function () {
this.output$S("//  Maya ASCII 8.5 scene\n");
this.output$S("//  Name: ball_stripped.ma\n");
this.output$S("//  Last modified: Thu, Jul 5, 2007 10:25:55 PM\n");
this.output$S("//  Codeset: UTF-8\n");
this.output$S("requires maya \"8.5\";\n");
this.output$S("currentUnit -l centimeter -a degree -t film;\n");
this.output$S("fileInfo \"application\" \"maya\";\n");
this.output$S("fileInfo \"product\" \"Maya Unlimited 8.5\";\n");
this.output$S("fileInfo \"version\" \"8.5\";\n");
this.output$S("fileInfo \"cutIdentifier\" \"200612170012-692032\";\n");
this.output$S("fileInfo \"osv\" \"Mac OS X 10.4.9\";  \n");
});

Clazz.newMeth(C$, 'addAttr', function () {
this.output$S(" setAttr -k off \".v\";\n");
this.output$S(" setAttr \".vir\" yes;\n");
this.output$S(" setAttr \".vif\" yes;\n");
this.output$S(" setAttr \".tw\" yes;\n");
this.output$S(" setAttr \".covm[0]\"  0 1 1;\n");
this.output$S(" setAttr \".cdvm[0]\"  0 1 1;\n");
}, p$1);

Clazz.newMeth(C$, 'addConnect', function () {
this.output$S(" connectAttr \"make" + this.name + ".os\" \"" + this.id + ".cr\";\n" );
this.output$S("connectAttr \"" + this.id + ".iog\" \":initialShadingGroup.dsm\" -na;\n" );
}, p$1);

Clazz.newMeth(C$, 'setAttr$S$F', function (attr, val) {
this.output$S(" setAttr \"." + attr + "\" " + new Float(val).toString() + ";\n" );
}, p$1);

Clazz.newMeth(C$, 'setAttr$S$I', function (attr, val) {
this.output$S(" setAttr \"." + attr + "\" " + val + ";\n" );
}, p$1);

Clazz.newMeth(C$, 'setAttr$S$javajs_util_T3', function (attr, pt) {
this.output$S(" setAttr \"." + attr + "\" -type \"double3\" " + new Float(pt.x).toString() + " " + new Float(pt.y).toString() + " " + new Float(pt.z).toString() + ";\n" );
}, p$1);

Clazz.newMeth(C$, 'outputCylinder$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$B$F$javajs_util_P3$javajs_util_P3$Z', function (ptCenter, pt1, pt2, colix, endcaps, radius, ptX, ptY, checkRadius) {
if (ptX != null ) return false;
this.nCyl++;
this.name="nurbsCylinder" + this.nCyl;
this.id="nurbsCylinderShape" + this.nCyl;
this.output$S(" createNode transform -n \"" + this.name + "\";\n" );
var length=pt1.distance$javajs_util_T3(pt2);
this.tempV1.ave$javajs_util_T3$javajs_util_T3(pt2, pt1);
p$1.setAttr$S$javajs_util_T3.apply(this, ["t", this.tempV1]);
this.tempV1.sub$javajs_util_T3(pt1);
this.tempV2.setT$javajs_util_T3(this.tempV1);
this.tempV2.normalize$();
var r=this.tempV1.length$();
var rX=Math.acos(this.tempV1.y / r) * 57.29578;
if (this.tempV1.x < 0 ) rX += 180;
var rY=Math.atan2(this.tempV1.x, this.tempV1.z) * 57.29578;
this.tempV2.set$F$F$F(rX, rY, 0);
p$1.setAttr$S$javajs_util_T3.apply(this, ["r", this.tempV2]);
this.output$S(" createNode nurbsSurface -n \"" + this.id + "\" -p \"" + this.name + "\";\n" );
p$1.addAttr.apply(this, []);
this.output$S("createNode makeNurbCylinder -n \"make" + this.name + "\";\n" );
this.output$S(" setAttr \".ax\" -type \"double3\" 0 1 0;\n");
p$1.setAttr$S$F.apply(this, ["r", radius]);
p$1.setAttr$S$I.apply(this, ["s", 4]);
p$1.setAttr$S$F.apply(this, ["hr", length / radius]);
p$1.addConnect.apply(this, []);
return true;
});

Clazz.newMeth(C$, 'outputSphere$javajs_util_P3$F$H$Z', function (pt, radius, colix, checkRadius) {
this.nBalls++;
this.name="nurbsSphere" + this.nBalls;
this.id="nurbsSphereShape" + this.nBalls;
this.output$S("createNode transform -n \"" + this.name + "\";\n" );
p$1.setAttr$S$javajs_util_T3.apply(this, ["t", pt]);
this.output$S("createNode nurbsSurface -n \"" + this.id + "\" -p \"" + this.name + "\";\n" );
p$1.addAttr.apply(this, []);
this.output$S("createNode makeNurbSphere -n \"make" + this.name + "\";\n" );
this.output$S(" setAttr \".ax\" -type \"double3\" 0 1 0;\n");
p$1.setAttr$S$F.apply(this, ["r", radius]);
p$1.setAttr$S$I.apply(this, ["s", 4]);
p$1.setAttr$S$I.apply(this, ["nsp", 3]);
p$1.addConnect.apply(this, []);
});

Clazz.newMeth(C$, 'drawTextPixel$I$I$I$I', function (argb, x, y, z) {
});

Clazz.newMeth(C$, 'outputTextPixel$javajs_util_P3$I', function (pt, argb) {
});

Clazz.newMeth(C$, 'outputSurface$javajs_util_T3A$javajs_util_T3A$HA$IAA$HA$I$I$I$javajs_util_BS$I$H$javajs_util_Lst$java_util_Map$javajs_util_P3', function (vertices, normals, colixes, indices, polygonColixes, nVertices, nPolygons, nTriangles, bsPolygons, faceVertexMax, colix, colorList, htColixes, offset) {
});

Clazz.newMeth(C$, 'outputTriangle$javajs_util_T3$javajs_util_T3$javajs_util_T3$H', function (pt1, pt2, pt3, colix) {
});

Clazz.newMeth(C$, 'outputCircle$javajs_util_P3$javajs_util_P3$F$H$Z', function (pt1, pt2, radius, colix, doFill) {
});

Clazz.newMeth(C$, 'outputCone$javajs_util_P3$javajs_util_P3$F$H', function (ptBase, ptTip, radius, colix) {
});

Clazz.newMeth(C$, 'outputEllipsoid$javajs_util_P3$javajs_util_P3A$H', function (center, points, colix) {
});

Clazz.newMeth(C$, 'outputFace$IA$IA$I', function (is, coordMap, faceVertexMax) {
});

Clazz.newMeth(C$, 'output$javajs_util_T3', function (pt) {
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:33 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
