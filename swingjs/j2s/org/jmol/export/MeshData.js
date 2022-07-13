(function(){var P$=Clazz.newPackage("org.jmol.export"),I$=[[0,'javajs.util.AU','javajs.util.P3','org.jmol.util.MeshSurface','javajs.util.T3','javajs.util.V3']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MeshData");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getCircleData$', function () {
var ndeg=10;
var n=(360/ndeg|0);
var vertexCount=n + 1;
var faces=$I$(1).newInt2$I(n);
for (var i=0; i < n; i++) {
faces[i]=Clazz.array(Integer.TYPE, -1, [i, (i + 1) % n, n]);
}
var vertexes=Clazz.array($I$(2), [vertexCount]);
var normals=Clazz.array($I$(2), [vertexCount]);
for (var i=0; i < n; i++) {
var x=(Math.cos(i * ndeg / 180.0 * 3.141592653589793));
var y=(Math.sin(i * ndeg / 180.0 * 3.141592653589793));
vertexes[i]=$I$(2).new3$F$F$F(x, y, 0);
normals[i]=$I$(2).new3$F$F$F(0, 0, 1);
}
vertexes[n]=$I$(2).new3$F$F$F(0, 0, 0);
normals[n]=$I$(2).new3$F$F$F(0, 0, 1);
return $I$(3).newMesh$Z$javajs_util_T3A$I$IAA$javajs_util_T3A$I(false, vertexes, 0, faces, normals, 0);
}, 1);

Clazz.newMeth(C$, 'getTriangleData$javajs_util_T3$javajs_util_T3$javajs_util_T3', function (pt1, pt2, pt3) {
var vertexes=Clazz.array($I$(4), -1, [pt1, pt2, pt3]);
var v1=$I$(5).newVsub$javajs_util_T3$javajs_util_T3(pt3, pt1);
var v2=$I$(5).newVsub$javajs_util_T3$javajs_util_T3(pt2, pt1);
v2.cross$javajs_util_T3$javajs_util_T3(v2, v1);
v2.normalize$();
var normals=Clazz.array($I$(5), -1, [v2, v2, v2]);
var faces=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [0, 1, 2])]);
return $I$(3).newMesh$Z$javajs_util_T3A$I$IAA$javajs_util_T3A$I(false, vertexes, 0, faces, normals, 0);
}, 1);

Clazz.newMeth(C$, 'getConeData$', function () {
var ndeg=10;
var n=(360/ndeg|0);
var vertices=Clazz.array($I$(2), [n + 1]);
var faces=$I$(1).newInt2$I(n);
for (var i=0; i < n; i++) faces[i]=Clazz.array(Integer.TYPE, -1, [i, (i + 1) % n, n]);

var d=ndeg / 180.0 * 3.141592653589793;
for (var i=0; i < n; i++) {
var x=(Math.cos(i * d));
var y=(Math.sin(i * d));
vertices[i]=$I$(2).new3$F$F$F(x, y, 0);
}
vertices[n]=$I$(2).new3$F$F$F(0, 0, 1);
return $I$(3).newMesh$Z$javajs_util_T3A$I$IAA$javajs_util_T3A$I(false, vertices, 0, faces, vertices, 0);
}, 1);

Clazz.newMeth(C$, 'getCylinderData$Z', function (inSide) {
var ndeg=10;
var vertexCount=(360/ndeg|0) * 2;
var n=(vertexCount/2|0);
var faces=$I$(1).newInt2$I(vertexCount);
var fpt=-1;
for (var i=0; i < n; i++) {
if (inSide) {
faces[++fpt]=Clazz.array(Integer.TYPE, -1, [i + n, (i + 1) % n, i]);
faces[++fpt]=Clazz.array(Integer.TYPE, -1, [i + n, (i + 1) % n + n, (i + 1) % n]);
} else {
faces[++fpt]=Clazz.array(Integer.TYPE, -1, [i, (i + 1) % n, i + n]);
faces[++fpt]=Clazz.array(Integer.TYPE, -1, [(i + 1) % n, (i + 1) % n + n, i + n]);
}}
var vertexes=Clazz.array($I$(2), [vertexCount]);
var normals=Clazz.array($I$(2), [vertexCount]);
for (var i=0; i < n; i++) {
var x=(Math.cos(i * ndeg / 180.0 * 3.141592653589793));
var y=(Math.sin(i * ndeg / 180.0 * 3.141592653589793));
vertexes[i]=$I$(2).new3$F$F$F(x, y, 0);
normals[i]=$I$(2).new3$F$F$F(x, y, 0);
}
for (var i=0; i < n; i++) {
var x=(Math.cos((i + 0.5) * ndeg / 180 * 3.141592653589793));
var y=(Math.sin((i + 0.5) * ndeg / 180 * 3.141592653589793));
vertexes[i + n]=$I$(2).new3$F$F$F(x, y, 1);
normals[i + n]=normals[i];
}
if (inSide) for (var i=0; i < n; i++) normals[i].scale$F(-1);

return $I$(3).newMesh$Z$javajs_util_T3A$I$IAA$javajs_util_T3A$I(false, vertexes, 0, faces, normals, 0);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:33 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
