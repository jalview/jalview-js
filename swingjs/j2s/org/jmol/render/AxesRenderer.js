(function(){var P$=Clazz.newPackage("org.jmol.render"),p$1={},I$=[[0,'javajs.util.P3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AxesRenderer", null, 'org.jmol.render.CageRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.originScreen=Clazz.new_($I$(1,1));
this.colixes=Clazz.array(Short.TYPE, [3]);
},1);

C$.$fields$=[['O',['originScreen','javajs.util.P3','colixes','short[]','pt000','javajs.util.P3']]
,['O',['axisLabels','String[]','+axesTypes']]]

Clazz.newMeth(C$, 'initRenderer$', function () {
this.endcap=2;
this.draw000=false;
});

Clazz.newMeth(C$, 'render$', function () {
var axes=this.shape;
var mad10=this.vwr.getObjectMad10$I(1);
if (mad10 == 0 || !this.g3d.checkTranslucent$Z(false) ) return false;
var isXY=(axes.axisXY.z != 0 );
if (!isXY && this.tm.isNavigating$() && this.vwr.getBoolean$I(603979890)  ) return false;
this.imageFontScaling=this.vwr.imageFontScaling;
if (this.vwr.areAxesTainted$()) axes.reinitShape$();
this.font3d=this.vwr.gdata.getFont3DScaled$org_jmol_util_Font$F(axes.font3d, this.imageFontScaling);
var modelIndex=this.vwr.am.cmi;
var isDataFrame=this.vwr.isJmolDataFrame$();
this.pt000=(isDataFrame ? this.pt0 : axes.originPoint);
var isUnitCell=(this.vwr.g.axesMode == 603979808);
if (this.vwr.ms.isJmolDataFrameForModel$I(modelIndex) && !this.vwr.ms.getJmolFrameType$I(modelIndex).equals$O("plot data") ) return false;
if (isUnitCell && modelIndex < 0  && this.vwr.getCurrentUnitCell$() == null  ) return false;
var nPoints=6;
var labelPtr=0;
if (isUnitCell && this.ms.unitCells != null  ) {
nPoints=3;
labelPtr=6;
} else if (isXY) {
nPoints=3;
labelPtr=9;
} else if (this.vwr.g.axesMode == 603979809) {
nPoints=6;
labelPtr=(this.vwr.getBoolean$I(603979806) ? 15 : 9);
}if (axes.labels != null ) {
if (nPoints != 3) nPoints=(axes.labels.length < 6 ? 3 : 6);
labelPtr=-1;
}var slab=this.vwr.gdata.slab;
var diameter=mad10;
var drawTicks=false;
var ptTemp=this.originScreen;
var checkAxisType=(axes.axisType != null  && (isXY || this.vwr.getFloat$I(570425345) != 0   || axes.fixedOrigin != null  ) );
if (isXY) {
if (this.exportType == 1) return false;
if (mad10 >= 20) {
diameter=(mad10 > 500 ? 5 : (mad10/100|0));
if (diameter == 0) diameter=2;
} else {
if (this.g3d.isAntialiased$()) diameter+=diameter;
}this.g3d.setSlab$I(0);
ptTemp=axes.axisXY;
this.pt0i.setT$javajs_util_T3i(this.tm.transformPt2D$javajs_util_T3(ptTemp));
if (ptTemp.x < 0 ) {
var offx=(ptTemp.x|0);
var offy=(ptTemp.x|0);
this.pointT.setT$javajs_util_T3(this.pt000);
for (var i=0; i < 3; i++) this.pointT.add$javajs_util_T3(axes.getAxisPoint$I$Z(i, false));

this.pt0i.setT$javajs_util_T3i(this.tm.transformPt$javajs_util_T3(this.pt000));
this.pt2i.scaleAdd$I$javajs_util_T3i$javajs_util_T3i(-1, this.pt0i, this.tm.transformPt$javajs_util_T3(this.pointT));
if (this.pt2i.x < 0) offx=-offx;
if (this.pt2i.y < 0) offy=-offy;
this.pt0i.x+=offx;
this.pt0i.y+=offy;
}ptTemp=this.originScreen;
ptTemp.set$F$F$F(this.pt0i.x, this.pt0i.y, this.pt0i.z);
var zoomDimension=this.vwr.getScreenDim$();
var scaleFactor=zoomDimension / 10.0 * axes.scale;
if (this.g3d.isAntialiased$()) scaleFactor *= 2;
for (var i=0; i < 3; i++) {
var pt=this.p3Screens[i];
this.tm.rotatePoint$javajs_util_T3$javajs_util_T3(axes.getAxisPoint$I$Z(i, false), pt);
pt.z *= -1;
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(scaleFactor, pt, ptTemp);
}
} else {
drawTicks=(axes.tickInfos != null );
if (drawTicks) {
this.checkTickTemps$();
this.tickA.setT$javajs_util_T3(this.pt000);
}this.tm.transformPtNoClip$javajs_util_T3$javajs_util_T3(this.pt000, ptTemp);
diameter=this.getDiameter$I$I((ptTemp.z|0), mad10);
for (var i=nPoints; --i >= 0; ) this.tm.transformPtNoClip$javajs_util_T3$javajs_util_T3(axes.getAxisPoint$I$Z(i, isDataFrame), this.p3Screens[i]);

}var xCenter=ptTemp.x;
var yCenter=ptTemp.y;
this.colixes[0]=this.vwr.getObjectColix$I(1);
this.colixes[1]=this.vwr.getObjectColix$I(2);
this.colixes[2]=this.vwr.getObjectColix$I(3);
var showOrigin=(!isXY && nPoints == 3  && axes.scale == 2  );
for (var i=nPoints; --i >= 0; ) {
if (checkAxisType && !axes.axisType.contains$CharSequence(C$.axesTypes[i])  || this.exportType != 1 && (Math.abs(xCenter - this.p3Screens[i].x) + Math.abs(yCenter - this.p3Screens[i].y) <= 2 )  && (!(showOrigin=false))  ) continue;
this.colix=this.colixes[i % 3];
this.g3d.setC$H(this.colix);
var label=(axes.labels == null  ? C$.axisLabels[i + labelPtr] : i < axes.labels.length ? axes.labels[i] : null);
if (label != null  && label.length$() > 0 ) p$1.renderLabel$S$F$F$F$F$F.apply(this, [label, this.p3Screens[i].x, this.p3Screens[i].y, this.p3Screens[i].z, xCenter, yCenter]);
if (drawTicks) {
this.tickInfo=axes.tickInfos[(i % 3) + 1];
if (this.tickInfo == null ) this.tickInfo=axes.tickInfos[0];
this.tickB.setT$javajs_util_T3(axes.getAxisPoint$I$Z(i, isDataFrame));
if (this.tickInfo != null ) {
this.tickInfo.first=0;
this.tickInfo.signFactor=(i % 6 >= 3 ? -1 : 1);
}}this.renderLine$javajs_util_P3$javajs_util_P3$I$Z(ptTemp, this.p3Screens[i], diameter, drawTicks && this.tickInfo != null  );
}
if (showOrigin) {
var label0=(axes.labels == null  || axes.labels.length == 3  || axes.labels[3] == null   ? "0" : axes.labels[3]);
if (label0 != null  && label0.length$() != 0 ) {
this.colix=this.vwr.cm.colixBackgroundContrast;
this.g3d.setC$H(this.colix);
p$1.renderLabel$S$F$F$F$F$F.apply(this, [label0, xCenter, yCenter, ptTemp.z, xCenter, yCenter]);
}}if (isXY) this.g3d.setSlab$I(slab);
return false;
});

Clazz.newMeth(C$, 'renderLabel$S$F$F$F$F$F', function (str, x, y, z, xCenter, yCenter) {
var strAscent=this.font3d.getAscent$();
var strWidth=this.font3d.stringWidth$S(str);
var dx=x - xCenter;
var dy=y - yCenter;
if ((dx != 0  || dy != 0  )) {
var dist=Math.sqrt(dx * dx + dy * dy);
dx=(strWidth * 0.75 * dx  / dist);
dy=(strAscent * 0.75 * dy  / dist);
x += dx;
y += dy;
}var xStrBaseline=Math.floor(x - strWidth / 2.0);
var yStrBaseline=Math.floor(y + strAscent / 2.0);
this.g3d.drawString$S$org_jmol_util_Font$I$I$I$I$H(str, this.font3d, (xStrBaseline|0), (yStrBaseline|0), (z|0), (z|0), 0);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.axisLabels=Clazz.array(String, -1, ["+X", "+Y", "+Z", null, null, null, "a", "b", "c", "X", "Y", "Z", null, null, null, "X", null, "Z", null, "(Y)", null]);
C$.axesTypes=Clazz.array(String, -1, ["a", "b", "c"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:15 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
