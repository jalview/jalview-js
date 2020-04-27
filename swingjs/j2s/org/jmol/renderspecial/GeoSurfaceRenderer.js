(function(){var P$=Clazz.newPackage("org.jmol.renderspecial"),p$1={},I$=[[0,'javajs.util.P3','org.jmol.util.Geodesic']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GeoSurfaceRenderer", null, 'org.jmol.renderspecial.DotsRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.facePt1=Clazz.new_($I$(1,1));
this.facePt2=Clazz.new_($I$(1,1));
this.facePt3=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['requireTranslucent'],'O',['facePt1','javajs.util.P3','+facePt2','+facePt3']]]

Clazz.newMeth(C$, 'render$', function () {
var gs=this.shape;
this.iShowSolid=!(!this.vwr.checkMotionRendering$I(1112150021) && gs.ec.getDotsConvexMax$() > 100 );
if (!this.iShowSolid && !this.g3d.setC$H(4) ) return false;
var tCover=this.vwr.gdata.translucentCoverOnly;
if (this.iShowSolid) this.vwr.gdata.translucentCoverOnly=true;
this.g3d.addRenderer$I(1073742182);
if (this.iShowSolid && this.faceMap == null  ) this.faceMap=Clazz.array(Integer.TYPE, [this.screenDotCount]);
this.render1$org_jmol_shapespecial_Dots(gs);
this.vwr.gdata.translucentCoverOnly=tCover;
return this.requireTranslucent;
});

Clazz.newMeth(C$, 'renderConvex$H$javajs_util_BS$I', function (colix, visibilityMap, nPoints) {
this.colix=colix;
if (this.iShowSolid) {
if (this.g3d.setC$H(colix)) p$1.renderSurface$javajs_util_BS.apply(this, [visibilityMap]);
 else this.requireTranslucent=true;
return;
}this.renderDots$I(nPoints);
});

Clazz.newMeth(C$, 'renderSurface$javajs_util_BS', function (points) {
if (this.faceMap == null ) return;
var faces=$I$(2).getFaceVertexes$I(this.screenLevel);
var coords=this.scrCoords;
var p1;
var p2;
var p3;
var mapMax=points.size$();
if (this.screenDotCount < mapMax) mapMax=this.screenDotCount;
for (var f=0; f < faces.length; ) {
p1=faces[f++];
p2=faces[f++];
p3=faces[f++];
if (p1 >= mapMax || p2 >= mapMax  || p3 >= mapMax  || !points.get$I(p1)  || !points.get$I(p2)  || !points.get$I(p3) ) continue;
this.facePt1.set$F$F$F(coords[this.faceMap[p1]], coords[this.faceMap[p1] + 1], coords[this.faceMap[p1] + 2]);
this.facePt2.set$F$F$F(coords[this.faceMap[p2]], coords[this.faceMap[p2] + 1], coords[this.faceMap[p2] + 2]);
this.facePt3.set$F$F$F(coords[this.faceMap[p3]], coords[this.faceMap[p3] + 1], coords[this.faceMap[p3] + 2]);
this.g3d.fillTriangle3CNBits$javajs_util_P3$H$H$javajs_util_P3$H$H$javajs_util_P3$H$H$Z(this.facePt1, this.colix, p1, this.facePt2, this.colix, p2, this.facePt3, this.colix, p3, false);
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:17 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
