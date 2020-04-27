(function(){var P$=Clazz.newPackage("org.jmol.export"),p$1={},I$=[[0,'javajs.util.P3','java.util.Hashtable','javajs.util.M4','javajs.util.SB','javajs.util.AU','org.jmol.export.___Exporter','org.jmol.viewer.Viewer','Boolean','javajs.util.Quat','javajs.util.Lst','org.jmol.util.Geodesic','javajs.util.V3','org.jmol.util.C','javajs.util.T3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "_IdtfExporter", null, 'org.jmol.export.__CartesianExporter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ptMin=$I$(1).new3$F$F$F(1.0E10, 1.0E10, 1.0E10);
this.ptMax=$I$(1).new3$F$F$F(-1.0E10, -1.0E10, -1.0E10);
this.htDefs=Clazz.new_($I$(2,1));
this.m=Clazz.new_($I$(3,1));
this.models=Clazz.new_($I$(4,1));
this.resources=Clazz.new_($I$(4,1));
this.modifiers=Clazz.new_($I$(4,1));
this.htNodes=Clazz.new_($I$(2,1));
this.cylinderMatrix=Clazz.new_($I$(3,1));
this.triangleFace=$I$(5).newInt2$I(1);
{
this.triangleFace[0]=Clazz.array(Integer.TYPE, -1, [0, 1, 2]);
}
},1);

C$.$fields$=[['Z',['haveSphere','haveCylinder','haveCylinderIn','haveCone','haveCircle'],'I',['iObj'],'O',['ptMin','javajs.util.P3','+ptMax','htDefs','java.util.Map','m','javajs.util.M4','models','javajs.util.SB','+resources','+modifiers','htNodes','java.util.Map','cylinderMatrix','javajs.util.M4','sbTemp','javajs.util.SB','triangleFace','int[][]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.commentChar="% ";
}, 1);

Clazz.newMeth(C$, 'output$javajs_util_T3', function (pt) {
p$1.output$javajs_util_T3$javajs_util_SB$Z.apply(this, [pt, this.sbTemp, true]);
});

Clazz.newMeth(C$, 'output$javajs_util_T3$javajs_util_SB$Z', function (pt, sb, checkpt) {
if (checkpt) p$1.checkPoint$javajs_util_T3.apply(this, [pt]);
sb.append$S($I$(6).round$D(pt.x)).append$S(" ").append$S($I$(6).round$D(pt.y)).append$S(" ").append$S($I$(6).round$D(pt.z)).append$S(" ");
}, p$1);

Clazz.newMeth(C$, 'checkPoint$javajs_util_T3', function (pt) {
if (pt.x < this.ptMin.x ) this.ptMin.x=pt.x;
if (pt.y < this.ptMin.y ) this.ptMin.y=pt.y;
if (pt.z < this.ptMin.z ) this.ptMin.z=pt.z;
if (pt.x > this.ptMax.x ) this.ptMax.x=pt.x;
if (pt.y > this.ptMax.y ) this.ptMax.y=pt.y;
if (pt.z > this.ptMax.z ) this.ptMax.z=pt.z;
}, p$1);

Clazz.newMeth(C$, 'outputHeader$', function () {
this.output$S("FILE_FORMAT \"IDTF\"\nFORMAT_VERSION 100\n");
this.m.setIdentity$();
this.m.setToM3$javajs_util_M34(this.tm.matrixRotate);
this.m.rotate2$javajs_util_T3$javajs_util_T3(this.referenceCenter, this.tempP1);
this.m.m03=-this.tempP1.x;
this.m.m13=-this.tempP1.y;
this.m.m23=-this.tempP1.z;
this.m.m33=1;
this.output$S("NODE \"GROUP\" {\n");
this.output$S("NODE_NAME \"Jmol\"\n");
this.output$S("PARENT_LIST {\nPARENT_COUNT 1\n");
this.output$S("PARENT 0 {\n");
this.output$S(p$1.getParentItem$S$javajs_util_M4.apply(this, ["", this.m]));
this.output$S("}}}\n");
});

Clazz.newMeth(C$, 'finalizeOutput$', function () {
this.finalizeOutput2$();
return p$1.getAuxiliaryFileData.apply(this, []);
});

Clazz.newMeth(C$, 'getAuxiliaryFileData', function () {
var fName=this.fileName.substring$I(this.fileName.lastIndexOf$S("/") + 1);
fName=fName.substring$I(fName.lastIndexOf$S("\\") + 1);
var name=fName + ".";
name=name.substring$I$I(0, name.indexOf$S("."));
return "% Created by: Jmol " + $I$(7).getJmolVersion$() + "\n% Creation date: " + this.getExportDate$() + "\n% File created: " + this.fileName + " (" + this.getByteCount$() + " bytes)\n\n" + "\n\\documentclass[12pt,letter]{article}" + "\n\\usepackage{hyperref}" + "\n\\usepackage{media9}" + "\n\\usepackage{verbatim}" + "\n\\pagestyle{empty}" + "\n\\begin{document}" + "\n    \\begin{center}" + "\n        \\addmediapath{./} % here you can set the path where is been saved the u3d file" + "\n        \\includemedia[" + "\n            label=" + name + "," + "\n            width=0.9\\textwidth," + "\n            height=0.9\\textheight," + "\n            activate=pageopen," + "\n            deactivate=pageclose," + "\n            3Dtoolbar=false," + "\n            3Dnavpane=false," + "\n            3Dmenu," + "\n            3Droo=" + new Float(this.cameraDistance).toString() + "," + "\n            3Dcoo= 0.0 0.0 0.0," + "\n            3Dc2c=0.0 0.0 1.0," + "\n            3Daac=" + new Float(this.apertureAngle).toString() + "," + "\n            3Droll=0.0," + "\n            3Dbg=" + this.rgbFractionalFromColix$H(this.backgroundColix) + ", % to set the background color for 3D vwr; white = 1 1 1; so, you need to do the proportion: '255:1=[RGB]:x'" + "\n            transparent=false," + "\n            3Dlights=Headlamp," + "\n            3Drender=Solid," + "\n            3Dpartsattrs=restore," + "\n        ]{}{" + name + ".u3d}" + "\n%  \\\\" + "\n%\\movieref[3Dcalculate]{" + name + "}{Click here!}" + "\n\\end{center}" + "\n\\end{document}" + "\n\\begin{comment}" + this.vwr.getWrappedStateScript$() + "\n\\end{comment}" ;
}, p$1);

Clazz.newMeth(C$, 'getParentItem$S$javajs_util_M4', function (name, m) {
var sb=Clazz.new_($I$(4,1));
sb.append$S("PARENT_NAME \"" + name + "\"\n" );
sb.append$S("PARENT_TM {\n");
sb.append$S(new Float(m.m00).toString() + " " + new Float(m.m10).toString() + " " + new Float(m.m20).toString() + " 0.0\n" );
sb.append$S(new Float(m.m01).toString() + " " + new Float(m.m11).toString() + " " + new Float(m.m21).toString() + " 0.0\n" );
sb.append$S(new Float(m.m02).toString() + " " + new Float(m.m12).toString() + " " + new Float(m.m22).toString() + " 0.0\n" );
sb.append$S(new Float(m.m03).toString() + " " + new Float(m.m13).toString() + " " + new Float(m.m23).toString() + " " + new Float(m.m33).toString() + "\n" );
sb.append$S("}\n");
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'addColix$H$Z', function (colix, haveColors) {
var key="_" + colix;
if (this.htDefs.containsKey$O(key)) return;
var color=(haveColors ? "1.0 1.0 1.0" : this.rgbFractionalFromColix$H(colix));
this.htDefs.put$O$O(key, $I$(8).TRUE);
this.resources.append$S("RESOURCE_LIST \"SHADER\" {\n");
this.resources.append$S("RESOURCE_COUNT 1\n");
this.resources.append$S("RESOURCE 0 {\n");
this.resources.append$S("RESOURCE_NAME \"Shader" + key + "\"\n" );
this.resources.append$S("ATTRIBUTE_USE_VERTEX_COLOR \"FALSE\"\n");
this.resources.append$S("SHADER_MATERIAL_NAME \"Mat" + key + "\"\n" );
this.resources.append$S("SHADER_ACTIVE_TEXTURE_COUNT 0\n");
this.resources.append$S("}}\n");
this.resources.append$S("RESOURCE_LIST \"MATERIAL\" {\n");
this.resources.append$S("RESOURCE_COUNT 1\n");
this.resources.append$S("RESOURCE 0 {\n");
this.resources.append$S("RESOURCE_NAME \"Mat" + key + "\"\n" );
this.resources.append$S("MATERIAL_AMBIENT " + color + "\n" );
this.resources.append$S("MATERIAL_DIFFUSE " + color + "\n" );
this.resources.append$S("MATERIAL_SPECULAR 0.0 0.0 0.0\n");
this.resources.append$S("MATERIAL_EMISSIVE 0.0 0.0 0.0\n");
this.resources.append$S("MATERIAL_REFLECTIVITY 0.00000\n");
this.resources.append$S("MATERIAL_OPACITY " + $I$(6).opacityFractionalFromColix$H(colix) + "\n" );
this.resources.append$S("}}\n");
}, p$1);

Clazz.newMeth(C$, 'addShader$S$H', function (key, colix) {
this.modifiers.append$S("MODIFIER \"SHADING\" {\n");
this.modifiers.append$S("MODIFIER_NAME \"" + key + "\"\n" );
this.modifiers.append$S("PARAMETERS {\n");
this.modifiers.append$S("SHADER_LIST_COUNT 1\n");
this.modifiers.append$S("SHADING_GROUP {\n");
this.modifiers.append$S("SHADER_LIST 0 {\n");
this.modifiers.append$S("SHADER_COUNT 1\n");
this.modifiers.append$S("SHADER_NAME_LIST {\n");
this.modifiers.append$S("SHADER 0 NAME: \"Shader_" + colix + "\"\n" );
this.modifiers.append$S("}}}}}\n");
}, p$1);

Clazz.newMeth(C$, 'outputFooter$', function () {
this.htDefs=null;
p$1.outputNodes.apply(this, []);
this.output$S(this.models.toString());
this.output$S(this.resources.toString());
this.output$S("RESOURCE_LIST \"VIEW\" {\n");
this.output$S("\tRESOURCE_COUNT 1\n");
this.output$S("\tRESOURCE 0 {\n");
this.output$S("\t\tRESOURCE_NAME \"View0\"\n");
this.output$S("\t\tVIEW_PASS_COUNT 1\n");
this.output$S("\t\tVIEW_ROOT_NODE_LIST {\n");
this.output$S("\t\t\tROOT_NODE 0 {\n");
this.output$S("\t\t\t\tROOT_NODE_NAME \"\"\n");
this.output$S("\t\t\t}\n");
this.output$S("\t\t}\n");
this.output$S("\t}\n");
this.output$S("}\n\n");
this.output$S(this.modifiers.toString());
});

Clazz.newMeth(C$, 'outputNodes', function () {
for (var entry, $entry = this.htNodes.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
var v=entry.getValue$();
this.output$S("NODE \"MODEL\" {\n");
this.output$S("NODE_NAME \"" + key + "\"\n" );
System.out.println$S("output idtf " + key);
var n=v.size$();
this.output$S("PARENT_LIST {\nPARENT_COUNT " + n + "\n" );
for (var i=0; i < n; i++) {
this.output$S("PARENT " + i + " {\n" );
this.output$S(v.get$I(i));
this.output$S("}\n");
}
this.output$S("}\n");
var i=key.indexOf$S("_");
if (i > 0) {
key=key.substring$I$I(0, i);
}if (key.equals$O("Ellipse")) {
key="Circle";
}this.output$S("RESOURCE_NAME \"" + key + "_Mesh\"\n}\n" );
}
}, p$1);

Clazz.newMeth(C$, 'outputEllipsoid$javajs_util_P3$javajs_util_P3A$H', function (center, points, colix) {
var a=$I$(9).getQuaternionFrame$javajs_util_P3$javajs_util_T3$javajs_util_T3(center, points[1], points[3]).toAxisAngle4f$();
var sx=points[1].distance$javajs_util_T3(center);
var sy=points[3].distance$javajs_util_T3(center);
var sz=points[5].distance$javajs_util_T3(center);
this.setSphereMatrix$javajs_util_T3$F$F$F$javajs_util_A4$javajs_util_M4(center, sx, sy, sz, a, this.sphereMatrix);
p$1.outputEllipsoid$javajs_util_T3$javajs_util_M4$H.apply(this, [center, this.sphereMatrix, colix]);
});

Clazz.newMeth(C$, 'outputEllipsoid$javajs_util_T3$javajs_util_M4$H', function (center, sphereMatrix, colix) {
if (!this.haveSphere) {
this.models.append$S(p$1.getSphereResource.apply(this, []));
this.haveSphere=true;
}p$1.checkPoint$javajs_util_T3.apply(this, [center]);
p$1.addColix$H$Z.apply(this, [colix, false]);
var key="Sphere_" + colix;
var v=this.htNodes.get$O(key);
if (v == null ) {
v=Clazz.new_($I$(10,1));
this.htNodes.put$O$O(key, v);
p$1.addShader$S$H.apply(this, [key, colix]);
}v.addLast$O(p$1.getParentItem$S$javajs_util_M4.apply(this, ["Jmol", sphereMatrix]));
}, p$1);

Clazz.newMeth(C$, 'getSphereResource', function () {
var sb=Clazz.new_($I$(4,1));
sb.append$S("RESOURCE_LIST \"MODEL\" {\n").append$S("RESOURCE_COUNT 1\n").append$S("RESOURCE 0 {\n").append$S("RESOURCE_NAME \"Sphere_Mesh\"\n").append$S("MODEL_TYPE \"MESH\"\n").append$S("MESH {\n");
var vertexCount=$I$(11).getVertexCount$I(2);
var f=$I$(11).getFaceVertexes$I(2);
var nFaces=(f.length/3|0);
var faces=Clazz.array(Integer.TYPE, [nFaces, 3]);
for (var i=0, p=0; i < nFaces; i++) for (var j=0; j < 3; j++) faces[i][j]=f[p++];


var vertexes=Clazz.array($I$(12), [vertexCount]);
for (var i=0; i < vertexCount; i++) vertexes[i]=$I$(11).getVertexVector$I(i);

return p$1.getMeshData$S$IAA$javajs_util_T3A$javajs_util_T3A.apply(this, ["Sphere", faces, vertexes, vertexes]);
}, p$1);

Clazz.newMeth(C$, 'getMeshData$S$IAA$javajs_util_T3A$javajs_util_T3A', function (type, indices, vertexes, normals) {
var nFaces=indices.length;
var vertexCount=vertexes.length;
var normalCount=normals.length;
var sb=Clazz.new_($I$(4,1));
p$1.getMeshHeader$S$I$I$I$I$javajs_util_SB.apply(this, [type, nFaces, vertexCount, normalCount, 0, sb]);
var sb1=Clazz.new_($I$(4,1));
for (var i=0; i < indices.length; i++) {
sb1.appendI$I(indices[i][0]).append$S(" ");
sb1.appendI$I(indices[i][1]).append$S(" ");
sb1.appendI$I(indices[i][2]).append$S(" ");
}
sb.append$S("MESH_FACE_POSITION_LIST { ");
sb.appendSB$javajs_util_SB(sb1);
sb.append$S("}\n");
sb.append$S("MESH_FACE_NORMAL_LIST { ");
sb.appendSB$javajs_util_SB(sb1);
sb.append$S("}\n");
sb.append$S("MESH_FACE_SHADING_LIST { ");
for (var i=0; i < nFaces; i++) sb.append$S("0 ");

sb.append$S("}\n");
sb.append$S("MODEL_POSITION_LIST { ");
for (var i=0; i < vertexCount; i++) p$1.output$javajs_util_T3$javajs_util_SB$Z.apply(this, [vertexes[i], sb, false]);

sb.append$S("}\n");
sb.append$S("MODEL_NORMAL_LIST { ");
for (var i=0; i < normalCount; i++) p$1.output$javajs_util_T3$javajs_util_SB$Z.apply(this, [normals[i], sb, false]);

sb.append$S("}\n}}}\n");
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'getMeshHeader$S$I$I$I$I$javajs_util_SB', function (type, nFaces, vertexCount, normalCount, colorCount, sb) {
sb.append$S("RESOURCE_LIST \"MODEL\" {\n").append$S("RESOURCE_COUNT 1\n").append$S("RESOURCE 0 {\n").append$S("RESOURCE_NAME \"").append$S(type).append$S("_Mesh\"\n").append$S("MODEL_TYPE \"MESH\"\n").append$S("MESH {\n").append$S("FACE_COUNT ").appendI$I(nFaces).append$S("\n").append$S("MODEL_POSITION_COUNT ").appendI$I(vertexCount).append$S("\n").append$S("MODEL_NORMAL_COUNT ").appendI$I(normalCount).append$S("\n").append$S("MODEL_DIFFUSE_COLOR_COUNT ").appendI$I(colorCount).append$S("\n").append$S("MODEL_SPECULAR_COLOR_COUNT 0\n").append$S("MODEL_TEXTURE_COORD_COUNT 0\n").append$S("MODEL_BONE_COUNT 0\n").append$S("MODEL_SHADING_COUNT 1\n").append$S("MODEL_SHADING_DESCRIPTION_LIST {\n").append$S("SHADING_DESCRIPTION 0 {\n").append$S("TEXTURE_LAYER_COUNT 0\n").append$S("SHADER_ID 0\n}}\n");
}, p$1);

Clazz.newMeth(C$, 'outputCylinder$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$B$F$javajs_util_P3$javajs_util_P3$Z', function (ptCenter, pt1, pt2, colix, endcaps, radius, ptX, ptY, checkRadius) {
if (ptX != null ) {
if (endcaps == 2) {
p$1.outputEllipse$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$H.apply(this, [ptCenter, pt1, ptX, ptY, colix]);
this.tempP3.add2$javajs_util_T3$javajs_util_T3(ptCenter, ptCenter);
this.tempP3.sub$javajs_util_T3(ptX);
p$1.outputEllipse$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$H.apply(this, [ptCenter, pt2, this.tempP3, ptY, colix]);
}} else if (endcaps == 3) {
this.outputSphere$javajs_util_P3$F$H$Z(pt1, radius * 1.01, colix, true);
this.outputSphere$javajs_util_P3$F$H$Z(pt2, radius * 1.01, colix, true);
} else if (endcaps == 2) {
p$1.outputCircle$javajs_util_P3$javajs_util_P3$H$F.apply(this, [pt1, pt2, colix, radius]);
p$1.outputCircle$javajs_util_P3$javajs_util_P3$H$F.apply(this, [pt2, pt1, colix, radius]);
}if (!this.haveCylinder) {
this.models.append$S(p$1.getCylinderResource$Z.apply(this, [false]));
this.haveCylinder=true;
}if (ptX != null  && endcaps == 0  && !this.haveCylinderIn ) {
this.models.append$S(p$1.getCylinderResource$Z.apply(this, [true]));
this.haveCylinderIn=true;
}p$1.checkPoint$javajs_util_T3.apply(this, [pt1]);
p$1.checkPoint$javajs_util_T3.apply(this, [pt2]);
p$1.addColix$H$Z.apply(this, [colix, false]);
var n=(ptX != null  && endcaps == 0  ? 2 : 1);
for (var i=0; i < n; i++) {
var key="Cylinder" + (i == 0 ? "_" : "In_") + colix ;
var v=this.htNodes.get$O(key);
if (v == null ) {
v=Clazz.new_($I$(10,1));
this.htNodes.put$O$O(key, v);
p$1.addShader$S$H.apply(this, [key, colix]);
}if (ptX == null ) this.cylinderMatrix.setToM3$javajs_util_M34(this.getRotationMatrix$javajs_util_P3$javajs_util_P3$F(pt1, pt2, radius));
 else this.cylinderMatrix.setToM3$javajs_util_M34(this.getRotationMatrix$javajs_util_P3$javajs_util_P3$F$javajs_util_P3$javajs_util_P3(ptCenter, pt2, radius, ptX, ptY));
this.cylinderMatrix.m03=pt1.x;
this.cylinderMatrix.m13=pt1.y;
this.cylinderMatrix.m23=pt1.z;
this.cylinderMatrix.m33=1;
v.addLast$O(p$1.getParentItem$S$javajs_util_M4.apply(this, ["Jmol", this.cylinderMatrix]));
radius *= 0.95;
}
return true;
});

Clazz.newMeth(C$, 'outputCircle$javajs_util_P3$javajs_util_P3$F$H$Z', function (pt1, pt2, radius, colix, doFill) {
if (doFill) {
p$1.outputCircle$javajs_util_P3$javajs_util_P3$H$F.apply(this, [pt1, pt2, colix, radius]);
return;
}});

Clazz.newMeth(C$, 'outputEllipse$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$H', function (ptCenter, ptZ, ptX, ptY, colix) {
if (!this.haveCircle) {
this.models.append$S(p$1.getCircleResource.apply(this, []));
this.haveCircle=true;
this.cylinderMatrix=Clazz.new_($I$(3,1));
}p$1.addColix$H$Z.apply(this, [colix, false]);
var key="Ellipse_" + colix;
var v=this.htNodes.get$O(key);
if (v == null ) {
v=Clazz.new_($I$(10,1));
this.htNodes.put$O$O(key, v);
p$1.addShader$S$H.apply(this, [key, colix]);
}p$1.checkPoint$javajs_util_T3.apply(this, [ptCenter]);
this.cylinderMatrix.setToM3$javajs_util_M34(this.getRotationMatrix$javajs_util_P3$javajs_util_P3$F$javajs_util_P3$javajs_util_P3(ptCenter, ptZ, 1, ptX, ptY));
this.cylinderMatrix.m03=ptZ.x;
this.cylinderMatrix.m13=ptZ.y;
this.cylinderMatrix.m23=ptZ.z;
this.cylinderMatrix.m33=1;
v.addLast$O(p$1.getParentItem$S$javajs_util_M4.apply(this, ["Jmol", this.cylinderMatrix]));
return true;
}, p$1);

Clazz.newMeth(C$, 'outputCircle$javajs_util_P3$javajs_util_P3$H$F', function (ptCenter, ptPerp, colix, radius) {
if (!this.haveCircle) {
this.models.append$S(p$1.getCircleResource.apply(this, []));
this.haveCircle=true;
this.cylinderMatrix=Clazz.new_($I$(3,1));
}p$1.addColix$H$Z.apply(this, [colix, false]);
var key="Circle_" + colix;
var v=this.htNodes.get$O(key);
if (v == null ) {
v=Clazz.new_($I$(10,1));
this.htNodes.put$O$O(key, v);
p$1.addShader$S$H.apply(this, [key, colix]);
}p$1.checkPoint$javajs_util_T3.apply(this, [ptCenter]);
this.cylinderMatrix.setToM3$javajs_util_M34(this.getRotationMatrix$javajs_util_P3$javajs_util_P3$F(ptCenter, ptPerp, radius));
this.cylinderMatrix.m03=ptCenter.x;
this.cylinderMatrix.m13=ptCenter.y;
this.cylinderMatrix.m23=ptCenter.z;
this.cylinderMatrix.m33=1;
v.addLast$O(p$1.getParentItem$S$javajs_util_M4.apply(this, ["Jmol", this.cylinderMatrix]));
}, p$1);

Clazz.newMeth(C$, 'getCylinderResource$Z', function (inSide) {
var ndeg=10;
var vertexCount=(360/ndeg|0) * 2;
var n=(vertexCount/2|0);
var faces=$I$(5).newInt2$I(vertexCount);
var fpt=-1;
for (var i=0; i < n; i++) {
if (inSide) {
faces[++fpt]=Clazz.array(Integer.TYPE, -1, [i + n, (i + 1) % n, i]);
faces[++fpt]=Clazz.array(Integer.TYPE, -1, [i + n, (i + 1) % n + n, (i + 1) % n]);
} else {
faces[++fpt]=Clazz.array(Integer.TYPE, -1, [i, (i + 1) % n, i + n]);
faces[++fpt]=Clazz.array(Integer.TYPE, -1, [(i + 1) % n, (i + 1) % n + n, i + n]);
}}
var vertexes=Clazz.array($I$(1), [vertexCount]);
var normals=Clazz.array($I$(1), [vertexCount]);
for (var i=0; i < n; i++) {
var x=(Math.cos(i * ndeg / 180.0 * 3.141592653589793));
var y=(Math.sin(i * ndeg / 180.0 * 3.141592653589793));
vertexes[i]=$I$(1).new3$F$F$F(x, y, 0);
normals[i]=$I$(1).new3$F$F$F(x, y, 0);
}
for (var i=0; i < n; i++) {
var x=(Math.cos((i + 0.5) * ndeg / 180 * 3.141592653589793));
var y=(Math.sin((i + 0.5) * ndeg / 180 * 3.141592653589793));
vertexes[i + n]=$I$(1).new3$F$F$F(x, y, 1);
normals[i + n]=normals[i];
}
if (inSide) for (var i=0; i < n; i++) normals[i].scale$F(-1);

return p$1.getMeshData$S$IAA$javajs_util_T3A$javajs_util_T3A.apply(this, [inSide ? "CylinderIn" : "Cylinder", faces, vertexes, normals]);
}, p$1);

Clazz.newMeth(C$, 'outputFace$IA$IA$I', function (face, map, faceVertexMax) {
this.sbTemp.append$S(" " + map[face[0]] + " " + map[face[1]] + " " + map[face[2]] );
if (faceVertexMax == 4 && face.length == 4 ) {
this.sbTemp.append$S(" " + map[face[0]] + " " + map[face[2]] + " " + map[face[3]] );
}});

Clazz.newMeth(C$, 'outputSurface$javajs_util_T3A$javajs_util_T3A$HA$IAA$HA$I$I$I$javajs_util_BS$I$H$javajs_util_Lst$java_util_Map$javajs_util_P3', function (vertices, normals, colixes, indices, polygonColixes, nVertices, nPolygons, nTriangles, bsPolygons, faceVertexMax, colix, colorList, htColixes, offset) {
p$1.addColix$H$Z.apply(this, [colix, polygonColixes != null  || colixes != null  ]);
if (polygonColixes != null ) {
return;
}var sbFaceCoordIndices=this.sbTemp=Clazz.new_($I$(4,1));
var map=Clazz.array(Integer.TYPE, [nVertices]);
var nCoord=this.getCoordinateMap$javajs_util_T3A$IA$javajs_util_BS(vertices, map, null);
this.outputIndices$IAA$IA$I$javajs_util_BS$I(indices, map, nPolygons, bsPolygons, faceVertexMax);
var sbFaceNormalIndices=this.sbTemp=Clazz.new_($I$(4,1));
var vNormals=null;
if (normals != null ) {
vNormals=Clazz.new_($I$(10,1));
map=this.getNormalMap$javajs_util_T3A$I$javajs_util_BS$javajs_util_Lst(normals, nVertices, null, vNormals);
this.outputIndices$IAA$IA$I$javajs_util_BS$I(indices, map, nPolygons, bsPolygons, faceVertexMax);
}map=null;
var sbColorIndexes=Clazz.new_($I$(4,1));
if (colorList != null ) {
var isAll=(bsPolygons == null );
var i0=(isAll ? nPolygons - 1 : bsPolygons.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsPolygons.nextSetBit$I(i + 1))) {
sbColorIndexes.append$S(" " + htColixes.get$O("" + colixes[indices[i][0]]) + " " + htColixes.get$O("" + colixes[indices[i][1]]) + " " + htColixes.get$O("" + colixes[indices[i][2]]) );
if (faceVertexMax == 4 && indices[i].length == 4 ) sbColorIndexes.append$S(" " + htColixes.get$O("" + colixes[indices[i][0]]) + " " + htColixes.get$O("" + colixes[indices[i][2]]) + " " + htColixes.get$O("" + colixes[indices[i][3]]) );
}
}var sbCoords=this.sbTemp=Clazz.new_($I$(4,1));
this.outputVertices$javajs_util_T3A$I$javajs_util_T3(vertices, nVertices, offset);
var sbNormals=Clazz.new_($I$(4,1));
var nNormals=0;
if (normals != null ) {
nNormals=vNormals.size$();
for (var i=0; i < nNormals; i++) sbNormals.append$S(vNormals.get$I(i));

vNormals=null;
}var sbColors=Clazz.new_($I$(4,1));
var nColors=0;
if (colorList != null ) {
nColors=colorList.size$();
for (var i=0; i < nColors; i++) {
var c=colorList.get$I(i).shortValue$();
sbColors.append$S(this.rgbFractionalFromColix$H(c)).append$S(" ").append$S($I$(6).translucencyFractionalFromColix$H(c)).append$S(" ");
}
}var key="mesh" + (++this.iObj);
p$1.addMeshData$S$I$I$I$I$javajs_util_SB$javajs_util_SB$javajs_util_SB$javajs_util_SB$javajs_util_SB$javajs_util_SB.apply(this, [key, nTriangles, nCoord, nNormals, nColors, sbFaceCoordIndices, sbFaceNormalIndices, sbColorIndexes, sbCoords, sbNormals, sbColors]);
var v=Clazz.new_($I$(10,1));
this.htNodes.put$O$O(key, v);
p$1.addShader$S$H.apply(this, [key, colix]);
this.cylinderMatrix.setIdentity$();
v.addLast$O(p$1.getParentItem$S$javajs_util_M4.apply(this, ["Jmol", this.cylinderMatrix]));
});

Clazz.newMeth(C$, 'addMeshData$S$I$I$I$I$javajs_util_SB$javajs_util_SB$javajs_util_SB$javajs_util_SB$javajs_util_SB$javajs_util_SB', function (key, nFaces, nCoord, nNormals, nColors, sbFaceCoordIndices, sbFaceNormalIndices, sbColorIndices, sbCoords, sbNormals, sbColors) {
p$1.getMeshHeader$S$I$I$I$I$javajs_util_SB.apply(this, [key, nFaces, nCoord, nNormals, nColors, this.models]);
this.models.append$S("MESH_FACE_POSITION_LIST { ").appendSB$javajs_util_SB(sbFaceCoordIndices).append$S(" }\n").append$S("MESH_FACE_NORMAL_LIST { ").appendSB$javajs_util_SB(sbFaceNormalIndices).append$S(" }\n");
this.models.append$S("MESH_FACE_SHADING_LIST { ");
for (var i=0; i < nFaces; i++) this.models.append$S("0 ");

this.models.append$S("}\n");
if (nColors > 0) this.models.append$S("MESH_FACE_DIFFUSE_COLOR_LIST { ").appendSB$javajs_util_SB(sbColorIndices).append$S(" }\n");
this.models.append$S("MODEL_POSITION_LIST { ").appendSB$javajs_util_SB(sbCoords).append$S(" }\n").append$S("MODEL_NORMAL_LIST { ").appendSB$javajs_util_SB(sbNormals).append$S(" }\n");
if (nColors > 0) this.models.append$S("MODEL_DIFFUSE_COLOR_LIST { ").appendSB$javajs_util_SB(sbColors).append$S(" }\n");
this.models.append$S("}}}\n");
}, p$1);

Clazz.newMeth(C$, 'outputCone$javajs_util_P3$javajs_util_P3$F$H', function (ptBase, ptTip, radius, colix) {
if (!this.haveCone) {
this.models.append$S(p$1.getConeResource.apply(this, []));
this.haveCone=true;
}p$1.checkPoint$javajs_util_T3.apply(this, [ptBase]);
p$1.checkPoint$javajs_util_T3.apply(this, [ptTip]);
p$1.addColix$H$Z.apply(this, [colix, false]);
var key="Cone_" + colix;
var v=this.htNodes.get$O(key);
if (v == null ) {
v=Clazz.new_($I$(10,1));
this.htNodes.put$O$O(key, v);
p$1.addShader$S$H.apply(this, [key, colix]);
}this.cylinderMatrix.setToM3$javajs_util_M34(this.getRotationMatrix$javajs_util_P3$javajs_util_P3$F(ptBase, ptTip, radius));
this.cylinderMatrix.m03=ptBase.x;
this.cylinderMatrix.m13=ptBase.y;
this.cylinderMatrix.m23=ptBase.z;
this.cylinderMatrix.m33=1;
v.addLast$O(p$1.getParentItem$S$javajs_util_M4.apply(this, ["Jmol", this.cylinderMatrix]));
});

Clazz.newMeth(C$, 'getConeResource', function () {
var m=$I$(6).getConeMesh$javajs_util_P3$javajs_util_M3$H(null, null, 0);
return p$1.getMeshData$S$IAA$javajs_util_T3A$javajs_util_T3A.apply(this, ["Cone", m.pis, m.vs, m.vs]);
}, p$1);

Clazz.newMeth(C$, 'getCircleResource', function () {
var ndeg=10;
var n=(360/ndeg|0);
var vertexCount=n + 1;
var faces=$I$(5).newInt2$I(n);
for (var i=0; i < n; i++) faces[i]=Clazz.array(Integer.TYPE, -1, [i, (i + 1) % n, n]);

var vertexes=Clazz.array($I$(1), [vertexCount]);
var normals=Clazz.array($I$(1), [vertexCount]);
for (var i=0; i < n; i++) {
var x=(Math.cos(i * ndeg / 180.0 * 3.141592653589793));
var y=(Math.sin(i * ndeg / 180.0 * 3.141592653589793));
vertexes[i]=$I$(1).new3$F$F$F(x, y, 0);
normals[i]=$I$(1).new3$F$F$F(0, 0, 1);
}
vertexes[n]=$I$(1).new3$F$F$F(0, 0, 0);
normals[n]=$I$(1).new3$F$F$F(0, 0, 1);
return p$1.getMeshData$S$IAA$javajs_util_T3A$javajs_util_T3A.apply(this, ["Circle", faces, vertexes, normals]);
}, p$1);

Clazz.newMeth(C$, 'outputSphere$javajs_util_P3$F$H$Z', function (center, radius, colix, checkRadius) {
this.setSphereMatrix$javajs_util_T3$F$F$F$javajs_util_A4$javajs_util_M4(center, radius, radius, radius, null, this.sphereMatrix);
p$1.outputEllipsoid$javajs_util_T3$javajs_util_M4$H.apply(this, [center, this.sphereMatrix, colix]);
});

Clazz.newMeth(C$, 'outputTextPixel$javajs_util_P3$I', function (pt, argb) {
var colix=$I$(13).getColix$I(argb);
this.outputSphere$javajs_util_P3$F$H$Z(pt, 0.02, colix, true);
});

Clazz.newMeth(C$, 'outputTriangle$javajs_util_T3$javajs_util_T3$javajs_util_T3$H', function (pt1, pt2, pt3, colix) {
p$1.addColix$H$Z.apply(this, [colix, false]);
var key="T" + (++this.iObj);
this.models.append$S(p$1.getTriangleResource$S$javajs_util_T3$javajs_util_T3$javajs_util_T3.apply(this, [key, pt1, pt2, pt3]));
var v=Clazz.new_($I$(10,1));
this.htNodes.put$O$O(key, v);
p$1.addShader$S$H.apply(this, [key, colix]);
if (this.cylinderMatrix == null ) this.cylinderMatrix=Clazz.new_($I$(3,1));
this.cylinderMatrix.setIdentity$();
v.addLast$O(p$1.getParentItem$S$javajs_util_M4.apply(this, ["Jmol", this.cylinderMatrix]));
});

Clazz.newMeth(C$, 'getTriangleResource$S$javajs_util_T3$javajs_util_T3$javajs_util_T3', function (key, pt1, pt2, pt3) {
var vertexes=Clazz.array($I$(14), -1, [pt1, pt2, pt3]);
this.tempV1.sub2$javajs_util_T3$javajs_util_T3(pt3, pt1);
this.tempV2.sub2$javajs_util_T3$javajs_util_T3(pt2, pt1);
this.tempV2.cross$javajs_util_T3$javajs_util_T3(this.tempV2, this.tempV1);
this.tempV2.normalize$();
var normals=Clazz.array($I$(12), -1, [this.tempV2, this.tempV2, this.tempV2]);
return p$1.getMeshData$S$IAA$javajs_util_T3A$javajs_util_T3A.apply(this, [key, this.triangleFace, vertexes, normals]);
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
