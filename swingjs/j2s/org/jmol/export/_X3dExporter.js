(function(){var P$=Clazz.newPackage("org.jmol.export"),I$=[[0,'org.jmol.export.UseTable','javajs.util.PT','org.jmol.viewer.Viewer','javajs.util.Lst']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "_X3dExporter", null, 'org.jmol.export._VrmlExporter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.useTable=Clazz.new_($I$(1).c$$S,["USE=\'"]);
}, 1);

Clazz.newMeth(C$, 'outputHeader$', function () {
this.output$S("<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n");
this.output$S("<!DOCTYPE X3D PUBLIC \"ISO//Web3D//DTD X3D 3.1//EN\" \"http://www.web3d.org/specifications/x3d-3.1.dtd\">\n");
this.output$S("<X3D profile=\'Immersive\' version=\'3.1\' xmlns:xsd=\'http://www.w3.org/2001/XMLSchema-instance\' xsd:noNamespaceSchemaLocation=\' http://www.web3d.org/specifications/x3d-3.1.xsd \'>\n");
this.output$S("<head>\n");
this.output$S("<meta name='title' content=" + $I$(2).esc$S(this.vwr.ms.modelSetName).replace$C$C("<", " ").replace$C$C(">", " ").replace$C$C("&", " ") + "/>\n" );
this.output$S("<meta name=\'description\' content=\'Jmol rendering\'/>\n");
this.output$S("<meta name=\'creator\' content=\' \'/>\n");
this.output$S("<meta name='created' content='" + this.getExportDate$() + "'/>\n" );
this.output$S("<meta name='generator' content='Jmol " + $I$(3).getJmolVersion$() + ", http://www.jmol.org'/>\n" );
this.output$S("<meta name=\'license\' content=\'http://www.gnu.org/licenses/licenses.html#LGPL\'/>\n");
this.output$S("</head>\n");
this.output$S("<Scene>\n");
this.output$S("<NavigationInfo type=\'EXAMINE\'/>\n");
this.output$S("<Background skyColor='" + this.rgbFractionalFromColix$H(this.backgroundColix) + "'/>\n" );
var angle=this.getViewpoint$();
this.output$S("<Viewpoint fieldOfView='" + new Float(angle).toString());
this.output$S("\' position=\'");
this.cameraPosition.z *= this.exportScale;
this.output$javajs_util_T3(this.cameraPosition);
this.output$S("\' orientation=\'");
this.output$javajs_util_T3(this.tempP1);
this.output$S(" " + new Float(-this.viewpoint.angle).toString() + "'\n jump='true' description='v1'/>\n" );
this.output$S("\n  <!-- \n");
this.output$S(this.getJmolPerspective$());
this.output$S("\n  -->\n\n");
this.commentChar=null;
this.outputInitialTransform$();
});

Clazz.newMeth(C$, 'outputAttrPt$S$javajs_util_T3', function (attr, pt) {
this.output$S(" " + attr + "='" + new Float(pt.x).toString() + " " + new Float(pt.y).toString() + " " + new Float(pt.z).toString() + "'" );
});

Clazz.newMeth(C$, 'pushMatrix$', function () {
this.output$S("<Transform ");
});

Clazz.newMeth(C$, 'popMatrix$', function () {
this.output$S("</Transform>\n");
});

Clazz.newMeth(C$, 'outputAttr$S$F$F$F', function (attr, x, y, z) {
this.output$S(" " + attr + "='" + P$.___Exporter.round$D(x) + " " + P$.___Exporter.round$D(y) + " " + P$.___Exporter.round$D(z) + "'" );
});

Clazz.newMeth(C$, 'outputRotation$javajs_util_A4', function (a) {
this.output$S(" rotation='" + new Float(a.x).toString() + " " + new Float(a.y).toString() + " " + new Float(a.z).toString() + " " + new Float(a.angle).toString() + "'" );
});

Clazz.newMeth(C$, 'outputFooter$', function () {
this.useTable=null;
this.popMatrix$();
this.popMatrix$();
this.output$S("</Scene>\n");
this.output$S("</X3D>\n");
});

Clazz.newMeth(C$, 'outputAppearance$H$Z', function (colix, isText) {
var def=this.getDef$S((isText ? "T" : "") + colix);
this.output$S("<Appearance ");
if (def.charAt$I(0) == "_") {
var color=this.rgbFractionalFromColix$H(colix);
this.output$S("DEF='" + def + "'><Material diffuseColor='" );
if (isText) this.output$S("0 0 0' specularColor='0 0 0' ambientIntensity='0.0' shininess='0.0' emissiveColor='" + color + "'/>" );
 else this.output$S(color + "' transparency='" + P$.___Exporter.translucencyFractionalFromColix$H(colix) + "'/>" );
} else this.output$S(def + ">");
this.output$S("</Appearance>");
});

Clazz.newMeth(C$, 'outputChildShapeStart$', function () {
this.outputShapeStart$();
});

Clazz.newMeth(C$, 'outputShapeStart$', function () {
this.output$S("<Shape>");
this.outputFaceSetStart$();
});

Clazz.newMeth(C$, 'outputChildStart$', function () {
});

Clazz.newMeth(C$, 'outputChildClose$', function () {
});

Clazz.newMeth(C$, 'outputDefChildFaceSet$S', function (child) {
if (child != null ) this.output$S("DEF='" + child + "'" );
});

Clazz.newMeth(C$, 'outputFaceSetStart$', function () {
this.output$S("<IndexedFaceSet ");
});

Clazz.newMeth(C$, 'outputFaceSetClose$', function () {
this.output$S("</IndexedFaceSet>\n");
});

Clazz.newMeth(C$, 'outputUseChildClose$S', function (child) {
this.output$S(child + "/>");
});

Clazz.newMeth(C$, 'outputChildShapeClose$', function () {
this.outputShapeClose$();
});

Clazz.newMeth(C$, 'outputShapeClose$', function () {
this.output$S("</Shape>\n");
});

Clazz.newMeth(C$, 'outputCloseTag$', function () {
this.output$S(">\n");
});

Clazz.newMeth(C$, 'outputTriangle$javajs_util_T3$javajs_util_T3$javajs_util_T3$H', function (pt1, pt2, pt3, colix) {
this.output$S("<Shape>\n");
this.output$S("<IndexedFaceSet solid=\'false\' ");
this.output$S("coordIndex=\'0 1 2 -1\'>");
this.output$S("<Coordinate point=\'");
this.output$javajs_util_T3(pt1);
this.output$S(" ");
this.output$javajs_util_T3(pt2);
this.output$S(" ");
this.output$javajs_util_T3(pt3);
this.output$S("\'/>");
this.output$S("</IndexedFaceSet>\n");
this.outputAppearance$H$Z(colix, false);
this.output$S("\n</Shape>\n");
});

Clazz.newMeth(C$, 'outputCircle$javajs_util_P3$javajs_util_P3$F$H$Z', function (pt1, pt2, radius, colix, doFill) {
if (doFill) {
this.pushMatrix$();
this.output$S("translation=\'");
this.tempV1.ave$javajs_util_T3$javajs_util_T3(this.tempP3, pt1);
this.output$javajs_util_T3(this.tempV1);
this.output$S("\'><Billboard axisOfRotation=\'0 0 0\'>");
this.pushMatrix$();
this.output$S("rotation=\'1 0 0 1.5708\'");
var height=pt1.distance$javajs_util_T3(pt2);
this.outputAttr$S$F$F$F("scale", radius, height, radius);
this.output$S(">");
this.outputCylinderChildScaled$H$B(colix, ($b$[0] = 2, $b$[0]));
this.popMatrix$();
this.output$S("</Billboard>");
this.popMatrix$();
return;
}var child=this.getDef$S("C" + colix + "_" + new Float(radius).toString() );
this.pushMatrix$();
this.outputTransRot$javajs_util_P3$javajs_util_P3$I$I$I(this.tempP3, pt1, 0, 0, 1);
this.tempP3.set$F$F$F(1, 1, 1);
this.tempP3.scale$F(radius);
this.outputAttr$S$F$F$F("scale", this.tempP3.x, this.tempP3.y, this.tempP3.z);
this.output$S(">\n<Billboard ");
if (child.charAt$I(0) == "_") {
this.output$S("DEF='" + child + "'" );
this.output$S(" axisOfRotation=\'0 0 0\'>");
this.pushMatrix$();
this.output$S("<Shape><Extrusion beginCap=\'false\' convex=\'false\' endCap=\'false\' creaseAngle=\'1.57\'");
this.output$S(" crossSection=\'");
var rpd=0.017453292;
var scale=0.02 / radius;
for (var i=0; i <= 360; i+=10) {
this.output$S(P$.___Exporter.round$D(Math.cos(i * rpd) * scale) + " ");
this.output$S(P$.___Exporter.round$D(Math.sin(i * rpd) * scale) + " ");
}
this.output$S("\' spine=\'");
for (var i=0; i <= 360; i+=10) {
this.output$S(P$.___Exporter.round$D(Math.cos(i * rpd)) + " ");
this.output$S(P$.___Exporter.round$D(Math.sin(i * rpd)) + " 0 ");
}
this.output$S("\'/>");
this.outputAppearance$H$Z(colix, false);
this.output$S("</Shape>");
this.popMatrix$();
} else {
this.output$S(child + ">");
}this.output$S("</Billboard>\n");
this.popMatrix$();
});

Clazz.newMeth(C$, 'outputGeometry$javajs_util_T3A$javajs_util_T3A$HA$IAA$HA$I$I$javajs_util_BS$I$javajs_util_Lst$java_util_Map$javajs_util_P3', function (vertices, normals, colixes, indices, polygonColixes, nVertices, nPolygons, bsPolygons, faceVertexMax, colorList, htColixes, offset) {
this.output$S(" creaseAngle=\'0.5\'\n");
if (polygonColixes != null ) this.output$S(" colorPerVertex=\'false\'\n");
this.output$S("coordIndex=\'\n");
var map=Clazz.array(Integer.TYPE, [nVertices]);
this.getCoordinateMap$javajs_util_T3A$IA$javajs_util_BS(vertices, map, null);
this.outputIndices$IAA$IA$I$javajs_util_BS$I(indices, map, nPolygons, bsPolygons, faceVertexMax);
this.output$S("\'\n");
var vNormals=null;
if (normals != null ) {
vNormals=Clazz.new_($I$(4));
map=this.getNormalMap$javajs_util_T3A$I$javajs_util_BS$javajs_util_Lst(normals, nVertices, null, vNormals);
this.output$S("  solid=\'false\'\n  normalPerVertex=\'true\'\n  normalIndex=\'\n");
this.outputIndices$IAA$IA$I$javajs_util_BS$I(indices, map, nPolygons, bsPolygons, faceVertexMax);
this.output$S("\'\n");
}map=null;
if (colorList != null ) {
this.output$S("  colorIndex=\'\n");
this.outputColorIndices$IAA$I$javajs_util_BS$I$java_util_Map$HA$HA(indices, nPolygons, bsPolygons, faceVertexMax, htColixes, colixes, polygonColixes);
this.output$S("\'\n");
}this.output$S(">\n");
this.output$S("<Coordinate point=\'\n");
this.outputVertices$javajs_util_T3A$I$javajs_util_T3(vertices, nVertices, offset);
this.output$S("\'/>\n");
if (normals != null ) {
this.output$S("<Normal vector=\'\n");
this.outputNormals$javajs_util_Lst(vNormals);
vNormals=null;
this.output$S("\'/>\n");
}if (colorList != null ) {
this.output$S("<Color color=\'\n");
this.outputColors$javajs_util_Lst(colorList);
this.output$S("\'/>\n");
}});

Clazz.newMeth(C$, 'outputTextPixel$javajs_util_P3$I', function (pt, argb) {
});

Clazz.newMeth(C$, 'plotText$I$I$I$H$S$javajs_awt_Font', function (x, y, z, colix, text, font3d) {
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
