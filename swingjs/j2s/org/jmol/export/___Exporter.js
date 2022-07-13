(function(){var P$=Clazz.newPackage("org.jmol.export"),I$=[[0,'javajs.util.P3','javajs.util.V3','org.jmol.util.Logger','javajs.util.SB','org.jmol.util.C','javajs.util.Lst','org.jmol.util.MeshSurface','javajs.util.AU','javajs.util.M3','javajs.util.Quat','java.util.Hashtable']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "___Exporter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.exportScale=1;
this.tempP1=Clazz.new_($I$(1,1));
this.tempP2=Clazz.new_($I$(1,1));
this.tempP3=Clazz.new_($I$(1,1));
this.center=Clazz.new_($I$(1,1));
this.tempV1=Clazz.new_($I$(2,1));
this.tempV2=Clazz.new_($I$(2,1));
this.tempC=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['solidOnly','isWebGL'],'D',['privateKey'],'F',['cameraDistance','apertureAngle','scalePixelsPerAngstrom','exportScale'],'I',['screenWidth','screenHeight','slabZ','depthZ','exportType','nText','nImage'],'H',['backgroundColix','lineWidthMad'],'S',['fileName','commandLineOptions','commentChar'],'O',['vwr','org.jmol.viewer.Viewer','tm','org.jmol.viewer.TransformManager','export3D','org.jmol.api.JmolRendererInterface','out','javajs.util.OC','gdata','org.jmol.util.GData','lightSource','javajs.util.V3','fixedRotationCenter','javajs.util.P3','+referenceCenter','+cameraPosition','+tempP1','+tempP2','+tempP3','+center','tempV1','javajs.util.V3','+tempV2','tempC','javajs.util.P3']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initializeOutput$org_jmol_viewer_Viewer$D$org_jmol_util_GData$java_util_Map', function (vwr, privateKey, gdata, params) {
return this.initOutput$org_jmol_viewer_Viewer$D$org_jmol_util_GData$java_util_Map(vwr, privateKey, gdata, params);
});

Clazz.newMeth(C$, 'initOutput$org_jmol_viewer_Viewer$D$org_jmol_util_GData$java_util_Map', function (vwr, privateKey, g3d, params) {
this.vwr=vwr;
this.tm=vwr.tm;
this.isWebGL=params.get$O("type").equals$O("JS");
this.gdata=g3d;
this.privateKey=privateKey;
this.backgroundColix=vwr.getObjectColix$I(0);
this.center.setT$javajs_util_T3(this.tm.fixedRotationCenter);
this.exportScale=vwr.getFloat$I(570425358);
if (this.exportScale == 0 ) {
this.exportScale=10;
}$I$(3,"info$S",["__Exporter exportScale: " + new Float(this.exportScale).toString()]);
if ((this.screenWidth <= 0) || (this.screenHeight <= 0) ) {
this.screenWidth=vwr.getScreenWidth$();
this.screenHeight=vwr.getScreenHeight$();
}this.slabZ=g3d.slab;
this.depthZ=g3d.depth;
this.lightSource=g3d.getLightSource$();
var cameraFactors=vwr.tm.getCameraFactors$();
this.referenceCenter=cameraFactors[0];
this.cameraPosition=cameraFactors[1];
this.fixedRotationCenter=cameraFactors[2];
this.cameraDistance=cameraFactors[3].x;
this.apertureAngle=cameraFactors[3].y;
this.scalePixelsPerAngstrom=cameraFactors[3].z;
this.out=params.get$O("outputChannel");
this.commandLineOptions=params.get$O("params");
if (this.out != null ) this.fileName=this.out.getFileName$();
this.outputHeader$();
return true;
});

Clazz.newMeth(C$, 'output$S', function (data) {
this.out.append$S(data);
});

Clazz.newMeth(C$, 'getByteCount$', function () {
return this.out.getByteCount$();
});

Clazz.newMeth(C$, 'outputComment$S', function (comment) {
if (this.commentChar != null ) this.output$S(this.commentChar + comment + "\n" );
});

Clazz.newMeth(C$, 'setTempVertex$javajs_util_T3$javajs_util_T3$javajs_util_T3', function (pt, offset, ptTemp) {
ptTemp.setT$javajs_util_T3(pt);
if (offset != null ) ptTemp.add$javajs_util_T3(offset);
}, 1);

Clazz.newMeth(C$, 'outputVertices$javajs_util_T3A$I$javajs_util_T3', function (vertices, nVertices, offset) {
for (var i=0; i < nVertices; i++) {
if (Float.isNaN$F(vertices[i].x)) continue;
this.outputVertex$javajs_util_T3$javajs_util_T3(vertices[i], offset);
this.output$S("\n");
}
});

Clazz.newMeth(C$, 'outputVertex$javajs_util_T3$javajs_util_T3', function (pt, offset) {
C$.setTempVertex$javajs_util_T3$javajs_util_T3$javajs_util_T3(pt, offset, this.tempV1);
this.output$javajs_util_T3(this.tempV1);
});

Clazz.newMeth(C$, 'outputJmolPerspective$', function () {
this.outputComment$S(this.getJmolPerspective$());
});

Clazz.newMeth(C$, 'getJmolPerspective$', function () {
if (this.commentChar == null ) return "";
var sb=Clazz.new_($I$(4,1));
sb.append$S(this.commentChar).append$S("Jmol perspective:");
sb.append$S("\n").append$S(this.commentChar).append$S("screen width height dim: " + this.screenWidth + " " + this.screenHeight + " " + this.vwr.getScreenDim$() );
sb.append$S("\n").append$S(this.commentChar).append$S("perspectiveDepth: " + this.vwr.tm.perspectiveDepth);
sb.append$S("\n").append$S(this.commentChar).append$S("cameraDistance(angstroms): " + new Float(this.cameraDistance).toString());
sb.append$S("\n").append$S(this.commentChar).append$S("aperatureAngle(degrees): " + new Float(this.apertureAngle).toString());
sb.append$S("\n").append$S(this.commentChar).append$S("scalePixelsPerAngstrom: " + new Float(this.scalePixelsPerAngstrom).toString());
sb.append$S("\n").append$S(this.commentChar).append$S("light source: " + this.lightSource);
sb.append$S("\n").append$S(this.commentChar).append$S("lighting: " + this.vwr.getLightingState$().replace$C$C("\n", " "));
sb.append$S("\n").append$S(this.commentChar).append$S("center: " + this.center);
sb.append$S("\n").append$S(this.commentChar).append$S("rotationRadius: " + new Float(this.vwr.getFloat$I(570425388)).toString());
sb.append$S("\n").append$S(this.commentChar).append$S("boundboxCenter: " + this.vwr.getBoundBoxCenter$());
sb.append$S("\n").append$S(this.commentChar).append$S("translationOffset: " + this.tm.getTranslationScript$());
sb.append$S("\n").append$S(this.commentChar).append$S("zoom: " + new Float(this.vwr.tm.zmPct).toString());
sb.append$S("\n").append$S(this.commentChar).append$S("moveto command: " + this.vwr.getOrientationText$I$S$javajs_util_BS(4129, null, null));
sb.append$S("\n");
return sb.toString();
});

Clazz.newMeth(C$, 'outputFooter$', function () {
});

Clazz.newMeth(C$, 'finalizeOutput$', function () {
return this.finalizeOutput2$();
});

Clazz.newMeth(C$, 'finalizeOutput2$', function () {
this.outputFooter$();
if (this.out == null ) return null;
var ret=this.out.closeChannel$();
if (this.fileName == null ) return ret;
if (ret != null ) {
$I$(3).info$S(ret);
return "ERROR EXPORTING FILE: " + ret;
}return "OK " + this.out.getByteCount$() + " " + this.export3D.getExportName$() + " " + this.fileName ;
});

Clazz.newMeth(C$, 'getExportDate$', function () {
return this.vwr.apiPlatform.getDateFormat$S(null);
});

Clazz.newMeth(C$, 'rgbFractionalFromColix$H', function (colix) {
return this.rgbFractionalFromArgb$I(this.gdata.getColorArgbOrGray$H(colix));
});

Clazz.newMeth(C$, 'getTriadC$javajs_util_T3', function (t) {
return this.getTriad$javajs_util_T3(t);
});

Clazz.newMeth(C$, 'getTriad$javajs_util_T3', function (t) {
return C$.round$D(t.x) + " " + C$.round$D(t.y) + " " + C$.round$D(t.z) ;
});

Clazz.newMeth(C$, 'rgbFractionalFromArgb$I', function (argb) {
var red=(argb >> 16) & 255;
var green=(argb >> 8) & 255;
var blue=argb & 255;
this.tempC.set$F$F$F(red == 0 ? 0 : (red + 1) / 256.0, green == 0 ? 0 : (green + 1) / 256.0, blue == 0 ? 0 : (blue + 1) / 256.0);
return this.getTriadC$javajs_util_T3(this.tempC);
});

Clazz.newMeth(C$, 'translucencyFractionalFromColix$H', function (colix) {
return C$.round$D($I$(5).getColixTranslucencyFractional$H(colix));
}, 1);

Clazz.newMeth(C$, 'opacityFractionalFromColix$H', function (colix) {
return C$.round$D(1 - $I$(5).getColixTranslucencyFractional$H(colix));
}, 1);

Clazz.newMeth(C$, 'opacityFractionalFromArgb$I', function (argb) {
var opacity=(argb >> 24) & 255;
return C$.round$D(opacity == 0 ? 0 : (opacity + 1) / 256.0);
}, 1);

Clazz.newMeth(C$, 'round$D', function (number) {
var s;
return (number == 0  ? "0" : number == 1  ? "1" : (s="" + (new Double(Math.round(number * 1000.0) / 1000.0).toString())).startsWith$S("0.") ? s.substring$I(1) : s.startsWith$S("-0.") ? "-" + s.substring$I(2) : s.endsWith$S(".0") ? s.substring$I$I(0, s.length$() - 2) : s);
}, 1);

Clazz.newMeth(C$, 'round$javajs_util_T3', function (pt) {
return C$.round$D(pt.x) + " " + C$.round$D(pt.y) + " " + C$.round$D(pt.z) ;
}, 1);

Clazz.newMeth(C$, 'getColorList$I$HA$I$javajs_util_BS$java_util_Map', function (i00, colixes, nVertices, bsSelected, htColixes) {
var nColix=0;
var list=Clazz.new_($I$(6,1));
var isAll=(bsSelected == null );
var i0=(isAll ? nVertices - 1 : bsSelected.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsSelected.nextSetBit$I(i + 1))) {
var color=Short.valueOf$H(colixes[i]);
if (!htColixes.containsKey$O(color)) {
list.addLast$O(color);
htColixes.put$O$O(color, Integer.valueOf$I(i00 + nColix++));
}}
return list;
});

Clazz.newMeth(C$, 'getConeMesh$javajs_util_P3$javajs_util_M3$H', function (centerBase, matRotateScale, colix) {
var ms=Clazz.new_($I$(7,1));
var ndeg=10;
var n=(360/ndeg|0);
ms.colix=colix;
ms.vs=Clazz.array($I$(1), [ms.vc=n + 1]);
ms.pis=$I$(8,"newInt2$I",[ms.pc=n]);
for (var i=0; i < n; i++) ms.pis[i]=Clazz.array(Integer.TYPE, -1, [i, (i + 1) % n, n]);

var d=ndeg / 180.0 * 3.141592653589793;
for (var i=0; i < n; i++) {
var x=(Math.cos(i * d));
var y=(Math.sin(i * d));
ms.vs[i]=$I$(1).new3$F$F$F(x, y, 0);
}
ms.vs[n]=$I$(1).new3$F$F$F(0, 0, 1);
if (matRotateScale != null ) {
ms.normals=Clazz.array($I$(2), [ms.vc]);
for (var i=0; i < ms.vc; i++) {
matRotateScale.rotate$javajs_util_T3(ms.vs[i]);
ms.normals[i]=$I$(2).newV$javajs_util_T3(ms.vs[i]);
ms.normals[i].normalize$();
ms.vs[i].add$javajs_util_T3(centerBase);
}
}return ms;
}, 1);

Clazz.newMeth(C$, 'getRotationMatrix$javajs_util_P3$javajs_util_P3$F', function (pt1, pt2, radius) {
var m=Clazz.new_($I$(9,1));
var m1;
if (pt2.x == pt1.x  && pt2.y == pt1.y  ) {
m1=$I$(9).newM3$javajs_util_M3(null);
if (pt1.z > pt2.z ) m1.m11=m1.m22=-1;
} else {
this.tempV1.sub2$javajs_util_T3$javajs_util_T3(pt2, pt1);
this.tempV2.set$F$F$F(0, 0, 1);
this.tempV2.cross$javajs_util_T3$javajs_util_T3(this.tempV2, this.tempV1);
this.tempV1.cross$javajs_util_T3$javajs_util_T3(this.tempV1, this.tempV2);
var q=$I$(10).getQuaternionFrameV$javajs_util_V3$javajs_util_V3$javajs_util_V3$Z(this.tempV2, this.tempV1, null, false);
m1=q.getMatrix$();
}m.m00=radius;
m.m11=radius;
m.m22=pt2.distance$javajs_util_T3(pt1);
m1.mul$javajs_util_M3(m);
return m1;
});

Clazz.newMeth(C$, 'getRotationMatrix$javajs_util_P3$javajs_util_P3$F$javajs_util_P3$javajs_util_P3', function (pt1, ptZ, radius, ptX, ptY) {
var m=Clazz.new_($I$(9,1));
m.m00=ptX.distance$javajs_util_T3(pt1) * radius;
m.m11=ptY.distance$javajs_util_T3(pt1) * radius;
m.m22=ptZ.distance$javajs_util_T3(pt1) * 2;
var q=$I$(10).getQuaternionFrame$javajs_util_P3$javajs_util_T3$javajs_util_T3(pt1, ptX, ptY);
var m1=q.getMatrix$();
m1.mul$javajs_util_M3(m);
return m1;
});

Clazz.newMeth(C$, 'drawSurface$org_jmol_util_MeshSurface$H', function (meshSurface, colix) {
var nVertices=meshSurface.vc;
if (nVertices == 0) return;
var nTriangles=0;
var nPolygons=meshSurface.pc;
var bsPolygons=meshSurface.bsPolygons;
var faceVertexMax=(meshSurface.haveQuads ? 4 : 3);
var indices=meshSurface.pis;
var isAll=(bsPolygons == null );
var i0=(isAll ? nPolygons - 1 : bsPolygons.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsPolygons.nextSetBit$I(i + 1))) nTriangles+=(faceVertexMax == 4 && indices[i].length == 4  ? 2 : 1);

if (nTriangles == 0) return;
var vertices=meshSurface.getVertices$();
var normals=meshSurface.normals;
var colorSolid=(colix != 0);
var colixes=(colorSolid ? null : meshSurface.vcs);
var polygonColixes=(colorSolid ? meshSurface.pcs : null);
var htColixes=null;
var colorList=null;
if (!this.isWebGL) {
htColixes=Clazz.new_($I$(11,1));
if (polygonColixes != null ) colorList=this.getColorList$I$HA$I$javajs_util_BS$java_util_Map(0, polygonColixes, nPolygons, bsPolygons, htColixes);
 else if (colixes != null ) colorList=this.getColorList$I$HA$I$javajs_util_BS$java_util_Map(0, colixes, nVertices, null, htColixes);
}this.outputSurface$javajs_util_T3A$javajs_util_T3A$HA$IAA$HA$I$I$I$javajs_util_BS$I$H$javajs_util_Lst$java_util_Map$javajs_util_P3(vertices, normals, colixes, indices, polygonColixes, nVertices, nPolygons, nTriangles, bsPolygons, faceVertexMax, colix, colorList, htColixes, meshSurface.offset);
});

Clazz.newMeth(C$, 'outputSurface$javajs_util_T3A$javajs_util_T3A$HA$IAA$HA$I$I$I$javajs_util_BS$I$H$javajs_util_Lst$java_util_Map$javajs_util_P3', function (vertices, normals, colixes, indices, polygonColixes, nVertices, nPolygons, nTriangles, bsPolygons, faceVertexMax, colix, colorList, htColixes, offset) {
});

Clazz.newMeth(C$, 'drawFilledCircle$H$H$I$I$I$I', function (colixRing, colixFill, diameter, x, y, z) {
if (colixRing != 0) this.drawCircle$I$I$I$I$H$Z(x, y, z, diameter, colixRing, false);
if (colixFill != 0) this.drawCircle$I$I$I$I$H$Z(x, y, z, diameter, colixFill, true);
});

Clazz.newMeth(C$, 'fixScreenZ$I', function (z) {
return (z <= 3 ? z + (this.tm.cameraDistance|0) : z);
});

Clazz.newMeth(C$, 'plotImage$I$I$I$O$H$I$I', function (x, y, z, image, bgcolix, width, height) {
this.outputComment$S("start image " + (++this.nImage));
this.gdata.plotImage$I$I$I$O$org_jmol_api_JmolRendererInterface$H$I$I(x, y, z, image, this.export3D, bgcolix, width, height);
this.outputComment$S("end image " + this.nImage);
});

Clazz.newMeth(C$, 'plotText$I$I$I$H$S$org_jmol_util_Font', function (x, y, z, colix, text, font3d) {
this.outputComment$S("start text " + (++this.nText) + ": " + text );
this.gdata.plotText$I$I$I$I$I$S$org_jmol_util_Font$org_jmol_api_JmolRendererInterface(x, y, z, this.gdata.getColorArgbOrGray$H(colix), 0, text, font3d, this.export3D);
this.outputComment$S("end text " + this.nText + ": " + text );
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:33 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
