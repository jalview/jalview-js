(function(){var P$=Clazz.newPackage("org.jmol.render"),I$=[[0,'javajs.util.P3','javajs.util.BS','javajs.util.Measure','org.jmol.util.BoxInfo']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CageRenderer", null, 'org.jmol.render.FontLineShapeRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.p3Screens=Clazz.array($I$(1), [8]);
{
for (var i=8; --i >= 0; ) this.p3Screens[i]=Clazz.new_($I$(1,1));

}
this.pt=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['isSlab','isPolymer'],'O',['p3Screens','javajs.util.P3[]','tickEdges','char[]','pt','javajs.util.P3']]]

Clazz.newMeth(C$, 'renderCage$I$javajs_util_P3A$IAA$javajs_util_P3A$I$I$I$F', function (mad, vertices, faces, axisPoints, firstLine, allowedEdges0, allowedEdges1, scale) {
this.g3d.setC$H(this.colix);
var fls=this.shape;
var hiddenLines=(faces != null );
this.imageFontScaling=this.vwr.imageFontScaling;
this.font3d=this.vwr.gdata.getFont3DScaled$org_jmol_util_Font$F(fls.font3d, this.imageFontScaling);
var zSum=0;
for (var i=8; --i >= 0; ) {
this.pt.setT$javajs_util_T3(vertices[i]);
if (scale != 1 ) {
this.pt.sub$javajs_util_T3(vertices[0]);
this.pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(scale, this.pt, vertices[0]);
}this.tm.transformPtNoClip$javajs_util_T3$javajs_util_T3(this.pt, this.p3Screens[i]);
zSum += this.p3Screens[i].z;
}
var bsSolid=null;
if (hiddenLines) {
bsSolid=Clazz.new_($I$(2,1));
for (var i=12; --i >= 0; ) {
var face=faces[i];
$I$(3).getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(this.p3Screens[face[0]], this.p3Screens[face[1]], this.p3Screens[face[2]], this.pt1, this.pt);
if (this.pt1.z <= 0 ) {
bsSolid.set$I(face[0]);
bsSolid.set$I(face[1]);
bsSolid.set$I(face[2]);
}}
}var diameter=this.getDiameter$I$I((Math.floor(zSum / 8)|0), mad);
var axisPt=2;
var edge=String.fromCharCode(0);
allowedEdges0&=(this.isPolymer ? 1 : this.isSlab ? 85 : 255);
allowedEdges1&=(this.isPolymer ? 16 : this.isSlab ? 85 : 255);
for (var i=firstLine * 2; i < 24; i+=2) {
var d=diameter;
var edge0=$I$(4).edges[i];
var edge1=$I$(4).edges[i + 1];
if (hiddenLines && (!bsSolid.get$I(edge0) || !bsSolid.get$I(edge1) ) ) d=-Math.abs(diameter);
if (axisPoints != null  && edge0 == 0 ) this.tm.transformPtNoClip$javajs_util_T3$javajs_util_T3(axisPoints[axisPt--], this.p3Screens[0]);
if ((allowedEdges0 & (1 << edge0)) == 0 || (allowedEdges1 & (1 << edge1)) == 0 ) continue;
var drawTicks=(fls.tickInfos != null  && ((edge=this.tickEdges[i >> 1]).$c()) != 0  );
if (drawTicks) {
this.checkTickTemps$();
this.tickA.setT$javajs_util_T3(vertices[edge0]);
this.tickB.setT$javajs_util_T3(vertices[edge1]);
var start=0;
if (Clazz.instanceOf(this.shape, "org.jmol.shape.Bbcage")) switch (edge.$c()) {
case 120:
start=this.tickA.x;
break;
case 121:
start=this.tickA.y;
break;
case 122:
start=this.tickA.z;
break;
}
this.tickInfo=fls.tickInfos["xyz".indexOf$I(edge) + 1];
if (this.tickInfo == null ) this.tickInfo=fls.tickInfos[0];
if (this.tickInfo == null ) drawTicks=false;
 else this.tickInfo.first=start;
}this.renderLine$javajs_util_P3$javajs_util_P3$I$Z(this.p3Screens[edge0], this.p3Screens[edge1], d, drawTicks);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
