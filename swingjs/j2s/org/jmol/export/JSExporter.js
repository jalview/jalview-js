(function(){var P$=Clazz.newPackage("org.jmol.export"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.export.UseTable','Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSExporter", null, 'org.jmol.export.__CartesianExporter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
{
Jmol && Jmol.GLmol && Jmol.GLmol.extendJSExporter(org.jmol.export.JSExporter.prototype);
}
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.htSpheresRendered=null;
this.htObjects=null;
this.html5Applet=null;
this.useTable=null;
this.ret=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.htSpheresRendered=Clazz.new_($I$(1));
this.htObjects=Clazz.new_($I$(1));
this.ret=Clazz.array(String, [1]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'jsInitExport$O', function (applet) {
}, p$1);

Clazz.newMeth(C$, 'jsEndExport$O', function (applet) {
}, p$1);

Clazz.newMeth(C$, 'jsCylinder$O$S$Z$javajs_util_P3$javajs_util_P3$OA', function (applet, id, isNew, pt1, pt2, o) {
}, p$1);

Clazz.newMeth(C$, 'jsSphere$O$S$Z$javajs_util_T3$OA', function (applet, id, isNew, pt, o) {
}, p$1);

Clazz.newMeth(C$, 'jsSurface$O$javajs_util_T3A$javajs_util_T3A$IAA$I$I$I$javajs_util_BS$I$I$IA$IA', function (applet, vertices, normals, indices, nVertices, nPolygons, nFaces, bsPolygons, faceVertexMax, color, vertexColors, polygonColors) {
});

Clazz.newMeth(C$, 'jsTriangle$O$I$javajs_util_T3$javajs_util_T3$javajs_util_T3', function (applet, color, pt1, pt2, pt3) {
});

Clazz.newMeth(C$, 'outputHeader$', function () {
this.html5Applet=this.vwr.html5Applet;
this.useTable=Clazz.new_($I$(2).c$$S,["JS"]);
this.htSpheresRendered.clear$();
this.htObjects.clear$();
p$1.jsInitExport$O.apply(this, [this.html5Applet]);
});

Clazz.newMeth(C$, 'outputFooter$', function () {
p$1.jsEndExport$O.apply(this, [this.html5Applet]);
this.htSpheresRendered.clear$();
this.htObjects.clear$();
this.useTable=null;
});

Clazz.newMeth(C$, 'outputSphere$javajs_util_P3$F$H$Z', function (ptCenter, radius, colix, checkRadius) {
var iRad=Math.round(radius * 100);
var check=P$.___Exporter.round$javajs_util_T3(ptCenter) + (checkRadius ? " " + iRad : "");
if (this.htSpheresRendered.get$O(check) != null ) return;
this.htSpheresRendered.put$TK$TV(check, $I$(3).TRUE);
var found=this.useTable.getDefRet$S$SA("S" + colix + "_" + iRad , this.ret);
var o;
if (found) o=this.htObjects.get$O(this.ret[0]);
 else this.htObjects.put$TK$TV(this.ret[0], o=Clazz.array(java.lang.Object, -1, [p$1.getColor$H.apply(this, [colix]), Float.valueOf$F(radius)]));
p$1.jsSphere$O$S$Z$javajs_util_T3$OA.apply(this, [this.html5Applet, this.ret[0], !found, ptCenter, o]);
});

Clazz.newMeth(C$, 'outputCylinder$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$B$F$javajs_util_P3$javajs_util_P3$Z', function (ptCenter, pt1, pt2, colix, endcaps, radius, ptX, ptY, checkRadius) {
if (ptX != null ) return false;
var length=pt1.distance$javajs_util_T3(pt2);
var found=this.useTable.getDefRet$S$SA("C" + colix + "_" + Math.round(length * 100) + "_" + new Float(radius).toString() + "_" + endcaps , this.ret);
var o;
if (found) o=this.htObjects.get$O(this.ret[0]);
 else this.htObjects.put$TK$TV(this.ret[0], o=Clazz.array(java.lang.Object, -1, [p$1.getColor$H.apply(this, [colix]), Float.valueOf$F(length), Float.valueOf$F(radius)]));
p$1.jsCylinder$O$S$Z$javajs_util_P3$javajs_util_P3$OA.apply(this, [this.html5Applet, this.ret[0], !found, pt1, pt2, o]);
return true;
});

Clazz.newMeth(C$, 'outputCircle$javajs_util_P3$javajs_util_P3$F$H$Z', function (pt1, pt2, radius, colix, doFill) {
});

Clazz.newMeth(C$, 'outputEllipsoid$javajs_util_P3$javajs_util_P3A$H', function (center, points, colix) {
});

Clazz.newMeth(C$, 'outputCone$javajs_util_P3$javajs_util_P3$F$H', function (ptBase, ptTip, radius, colix) {
this.outputCylinder$javajs_util_P3$javajs_util_P3$javajs_util_P3$H$B$F$javajs_util_P3$javajs_util_P3$Z(null, ptBase, ptTip, colix, ($b$[0] = 0, $b$[0]), radius, null, null, false);
});

Clazz.newMeth(C$, 'getColor$H', function (colix) {
return Integer.valueOf$I(this.gdata.getColorArgbOrGray$H(colix));
}, p$1);

Clazz.newMeth(C$, 'outputSurface$javajs_util_T3A$javajs_util_T3A$HA$IAA$HA$I$I$I$javajs_util_BS$I$H$javajs_util_Lst$java_util_Map$javajs_util_P3', function (vertices, normals, vertexColixes, indices, polygonColixes, nVertices, nPolygons, nTriangles, bsPolygons, faceVertexMax, colix, colorList, htColixes, offset) {
var vertexColors=p$1.getColors$HA.apply(this, [vertexColixes]);
var polygonColors=p$1.getColors$HA.apply(this, [polygonColixes]);
this.jsSurface$O$javajs_util_T3A$javajs_util_T3A$IAA$I$I$I$javajs_util_BS$I$I$IA$IA(this.html5Applet, vertices, normals, indices, nVertices, nPolygons, nTriangles, bsPolygons, faceVertexMax, this.gdata.getColorArgbOrGray$H(colix), vertexColors, polygonColors);
});

Clazz.newMeth(C$, 'outputTriangle$javajs_util_T3$javajs_util_T3$javajs_util_T3$H', function (pt1, pt2, pt3, colix) {
this.jsTriangle$O$I$javajs_util_T3$javajs_util_T3$javajs_util_T3(this.html5Applet, this.gdata.getColorArgbOrGray$H(colix), pt1, pt2, pt3);
});

Clazz.newMeth(C$, 'outputTextPixel$javajs_util_P3$I', function (pt, argb) {
});

Clazz.newMeth(C$, 'outputFace$IA$IA$I', function (is, coordMap, faceVertexMax) {
});

Clazz.newMeth(C$, 'output$javajs_util_T3', function (pt) {
});

Clazz.newMeth(C$, 'plotImage$I$I$I$O$H$I$I', function (x, y, z, image, bgcolix, width, height) {
});

Clazz.newMeth(C$, 'plotText$I$I$I$H$S$javajs_awt_Font', function (x, y, z, colix, text, font3d) {
});

Clazz.newMeth(C$, 'getColors$HA', function (colixes) {
if (colixes == null ) return null;
var colors=Clazz.array(Integer.TYPE, [colixes.length]);
for (var i=colors.length; --i >= 0; ) {
colors[i]=this.gdata.getColorArgbOrGray$H(colixes[i]);
}
return colors;
}, p$1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
