(function(){var P$=Clazz.newPackage("org.jmol.renderspecial"),I$=[[0,'javajs.util.V3','javajs.util.P3i','org.jmol.shapespecial.Dots','org.jmol.util.Geodesic','org.jmol.util.C']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DotsRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.faceMap=null;
this.v3temp=Clazz.new_($I$(1,1));
this.scrTemp=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['iShowSolid'],'I',['screenLevel','screenDotCount','dotScale'],'O',['scrCoords','int[]','+faceMap','v3temp','javajs.util.V3','scrTemp','javajs.util.P3i']]]

Clazz.newMeth(C$, 'initRenderer$', function () {
this.screenLevel=$I$(3).MAX_LEVEL;
this.screenDotCount=(function(a,f){return f.apply(null,a)})([$I$(3).MAX_LEVEL],$I$(4).getVertexCount$I);
this.scrCoords=Clazz.array(Integer.TYPE, [3 * this.screenDotCount]);
});

Clazz.newMeth(C$, 'render$', function () {
this.render1$org_jmol_shapespecial_Dots(this.shape);
return false;
});

Clazz.newMeth(C$, 'render1$org_jmol_shapespecial_Dots', function (dots) {
if (!this.iShowSolid && !this.g3d.setC$H(4) ) return;
var sppa=(this.vwr.getScalePixelsPerAngstrom$Z(true)|0);
this.screenLevel=(this.iShowSolid || sppa > 20  ? 3 : sppa > 10 ? 2 : sppa > 5 ? 1 : 0);
if (!this.iShowSolid) this.screenLevel+=this.vwr.getInt$I(553648141) - 3;
this.screenLevel=Math.max(Math.min(this.screenLevel, $I$(3).MAX_LEVEL), 0);
this.screenDotCount=$I$(4).getVertexCount$I(this.screenLevel);
this.dotScale=this.vwr.getInt$I(553648142);
var maps=dots.ec.getDotsConvexMaps$();
for (var i=dots.ec.getDotsConvexMax$(); --i >= 0; ) {
var atom=this.ms.at[i];
var map=maps[i];
if (map == null  || !this.isVisibleForMe$org_jmol_modelset_Atom(atom)  || !this.g3d.isInDisplayRange$I$I(atom.sX, atom.sY) ) continue;
try {
var radius=dots.ec.getAppropriateRadius$I(i);
if (this.iShowSolid && this.exportType == 1 ) {
this.g3d.drawAtom$org_jmol_modelset_Atom$F(atom, radius);
continue;
}var nPoints=0;
var j=0;
var iDot=Math.min(map.size$(), this.screenDotCount);
while (--iDot >= 0){
if (!map.get$I(iDot)) continue;
this.v3temp.scaleAdd2$F$javajs_util_T3$javajs_util_T3(radius, $I$(4).getVertexVector$I(iDot), atom);
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(this.v3temp, this.scrTemp);
if (this.faceMap != null ) this.faceMap[iDot]=j;
this.scrCoords[j++]=this.scrTemp.x;
this.scrCoords[j++]=this.scrTemp.y;
this.scrCoords[j++]=this.scrTemp.z;
++nPoints;
}
if (nPoints != 0) this.renderConvex$H$javajs_util_BS$I($I$(5).getColixInherited$H$H(dots.colixes[i], atom.colixAtom), map, nPoints);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Dots rendering error");
System.out.println$S(e.toString());
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'renderConvex$H$javajs_util_BS$I', function (colix, map, nPoints) {
this.colix=$I$(5).getColixTranslucent3$H$Z$F(colix, false, 0);
this.renderDots$I(nPoints);
});

Clazz.newMeth(C$, 'renderDots$I', function (nPoints) {
this.g3d.setC$H(this.colix);
this.g3d.drawPoints$I$IA$I(nPoints, this.scrCoords, this.dotScale);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:16 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
