(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'javajs.util.Lst','javajs.util.P3','org.jmol.util.TriangleData','javajs.util.BS','javajs.util.AU']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Triangulator", null, 'org.jmol.util.TriangleData');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['fullCubePolygon','int[][]']]]

Clazz.newMeth(C$, 'intersectPlane$javajs_util_P4$javajs_util_T3A$I', function (plane, vertices, flags) {
var v=Clazz.new_($I$(1,1));
var edgePoints=Clazz.array($I$(2), [12]);
var insideMask=0;
var values=Clazz.array(Float.TYPE, [8]);
for (var i=0; i < 8; i++) {
values[i]=plane.x * vertices[i].x + plane.y * vertices[i].y + plane.z * vertices[i].z + plane.w;
if (values[i] < 0 ) insideMask|=$I$(3).Pwr2[i];
}
var triangles=$I$(3).triangleTable2[insideMask];
if (triangles == null ) return null;
for (var i=0; i < 24; i+=2) {
var v1=$I$(3).edgeVertexes[i];
var v2=$I$(3).edgeVertexes[i + 1];
var result=$I$(2).newP$javajs_util_T3(vertices[v2]);
result.sub$javajs_util_T3(vertices[v1]);
result.scale$F(values[v1] / (values[v1] - values[v2]));
result.add$javajs_util_T3(vertices[v1]);
edgePoints[i >> 1]=result;
}
if (flags == 0) {
var bsPoints=Clazz.new_($I$(4,1));
for (var i=0; i < triangles.length; i++) {
bsPoints.set$I(triangles[i]);
if (i % 4 == 2) i++;
}
var nPoints=bsPoints.cardinality$();
var pts=Clazz.array($I$(2), [nPoints]);
v.addLast$O(pts);
var list=Clazz.array(Integer.TYPE, [12]);
var ptList=0;
for (var i=0; i < triangles.length; i++) {
var pt=triangles[i];
if (bsPoints.get$I(pt)) {
bsPoints.clear$I(pt);
pts[ptList]=edgePoints[pt];
list[pt]=(ptList++|0);
}if (i % 4 == 2) i++;
}
var polygons=$I$(5).newInt2$I(triangles.length >> 2);
v.addLast$O(polygons);
for (var i=0; i < triangles.length; i++) polygons[i >> 2]=Clazz.array(Integer.TYPE, -1, [list[triangles[i++]], list[triangles[i++]], list[triangles[i++]], triangles[i]]);

return v;
}for (var i=0; i < triangles.length; i++) {
var pt1=edgePoints[triangles[i++]];
var pt2=edgePoints[triangles[i++]];
var pt3=edgePoints[triangles[i++]];
if ((flags & 1) == 1) v.addLast$O(Clazz.array($I$(2), -1, [pt1, pt2, pt3]));
if ((flags & 2) == 2) {
var b=triangles[i];
if ((b & 1) == 1) v.addLast$O(Clazz.array($I$(2), -1, [pt1, pt2]));
if ((b & 2) == 2) v.addLast$O(Clazz.array($I$(2), -1, [pt2, pt3]));
if ((b & 4) == 4) v.addLast$O(Clazz.array($I$(2), -1, [pt1, pt3]));
}}
return v;
});

C$.$static$=function(){C$.$static$=0;
C$.fullCubePolygon=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [0, 4, 5, 3]), Clazz.array(Integer.TYPE, -1, [5, 1, 0, 3]), Clazz.array(Integer.TYPE, -1, [1, 5, 6, 2]), Clazz.array(Integer.TYPE, -1, [6, 2, 1, 3]), Clazz.array(Integer.TYPE, -1, [2, 6, 7, 2]), Clazz.array(Integer.TYPE, -1, [7, 3, 2, 3]), Clazz.array(Integer.TYPE, -1, [3, 7, 4, 2]), Clazz.array(Integer.TYPE, -1, [4, 0, 3, 2]), Clazz.array(Integer.TYPE, -1, [6, 5, 4, 0]), Clazz.array(Integer.TYPE, -1, [4, 7, 6, 0]), Clazz.array(Integer.TYPE, -1, [0, 1, 2, 0]), Clazz.array(Integer.TYPE, -1, [2, 3, 0, 0])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
