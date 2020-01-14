(function(){var P$=Clazz.newPackage("org.jmol.render"),p$1={},I$=[[0,'javajs.util.P3','org.jmol.util.BoxInfo','org.jmol.util.C','org.jmol.util.SimpleUnitCell','javajs.util.PT','javajs.util.DF']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UccageRenderer", null, 'org.jmol.render.CageRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.verticesT=null;
this.fset0=null;
this.cell0=null;
this.cell1=null;
this.offset=null;
this.offsetT=null;
this.unitcell=null;
this.lineheight=0;
this.xpos=0;
this.ypos=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.verticesT=Clazz.array($I$(1), [8]);
this.fset0=$I$(1).new3$F$F$F(555, 555, 1);
this.cell0=Clazz.new_($I$(1));
this.cell1=Clazz.new_($I$(1));
this.offset=Clazz.new_($I$(1));
this.offsetT=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'initRenderer$', function () {
for (var i=8; --i >= 0; ) this.verticesT[i]=Clazz.new_($I$(1));

this.tickEdges=$I$(2).uccageTickEdges;
this.draw000=false;
});

Clazz.newMeth(C$, 'render$', function () {
this.imageFontScaling=this.vwr.imageFontScaling;
this.font3d=this.vwr.gdata.getFont3DScaled$javajs_awt_Font$F((this.shape).font3d, this.imageFontScaling);
var mad10=this.vwr.getObjectMad10$I(5);
if (mad10 == 0 || this.vwr.isJmolDataFrame$()  || this.tm.isNavigating$() && this.vwr.getBoolean$I(603979890)  ) return false;
this.colix=this.vwr.getObjectColix$I(5);
var needTranslucent=$I$(3).renderPass2$H(this.colix);
if (!this.isExport && needTranslucent != this.vwr.gdata.isPass2  ) return needTranslucent;
p$1.render1$I.apply(this, [mad10]);
return false;
});

Clazz.newMeth(C$, 'render1$I', function (mad10) {
this.g3d.setC$H(this.colix);
this.unitcell=this.vwr.getCurrentUnitCell$();
if (this.unitcell == null ) return;
this.isPolymer=this.unitcell.isPolymer$();
this.isSlab=this.unitcell.isSlab$();
var vertices=this.unitcell.getUnitCellVerticesNoOffset$();
this.offset.setT$javajs_util_T3(this.unitcell.getCartesianOffset$());
this.offsetT.setT$javajs_util_T3(this.unitcell.getFractionalOrigin$());
this.unitcell.toCartesian$javajs_util_T3$Z(this.offsetT, true);
this.offset.sub$javajs_util_T3(this.offsetT);
var hiddenLines=this.vwr.getBoolean$I(603979856);
var fset=this.unitcell.getUnitCellMultiplier$();
var haveMultiple=(fset != null  && fset.distanceSquared$javajs_util_T3(this.fset0) != 0  );
if (!haveMultiple) fset=this.fset0;
var t3w=(Clazz.instanceOf(fset, "javajs.util.T4") ? ((fset).w|0) : 0);
$I$(4).ijkToPoint3f$I$javajs_util_P3$I$I((fset.x|0), this.cell0, 0, t3w);
$I$(4).ijkToPoint3f$I$javajs_util_P3$I$I((fset.y|0), this.cell1, 1, t3w);
var firstLine;
var allow0;
var allow1;
if (fset.z < 0 ) {
this.cell0.scale$F(-1 / fset.z);
this.cell1.scale$F(-1 / fset.z);
}var scale=Math.abs(fset.z);
var axes=this.vwr.shm.getShape$I(34);
if (axes != null  && this.vwr.areAxesTainted$() ) axes.reinitShape$();
var axisPoints=(axes == null  || this.vwr.getObjectMad10$I(1) == 0  || axes.axisXY.z != 0   || axes.fixedOrigin != null   || axes.fixedOriginUC.lengthSquared$() > 0   ? null : axes.axisPoints);
var drawAllLines=(this.isExport || this.vwr.getObjectMad10$I(1) == 0  || this.vwr.getFloat$I(570425346) < 2   || axisPoints == null  );
var aPoints=axisPoints;
var faces=(hiddenLines ? $I$(2).facePoints : null);
if (fset.z == 0 ) {
this.offsetT.setT$javajs_util_T3(this.cell0);
this.unitcell.toCartesian$javajs_util_T3$Z(this.offsetT, true);
this.offsetT.add$javajs_util_T3(this.offset);
aPoints=(this.cell0.x == 0  && this.cell0.y == 0   && this.cell0.z == 0   ? axisPoints : null);
firstLine=0;
allow0=255;
allow1=255;
var pts=$I$(2).unitCubePoints;
for (var i=8; --i >= 0; ) {
var v=$I$(1).new3$F$F$F(pts[i].x * (this.cell1.x - this.cell0.x), pts[i].y * (this.cell1.y - this.cell0.y), pts[i].z * (this.cell1.z - this.cell0.z));
this.unitcell.toCartesian$javajs_util_T3$Z(v, true);
this.verticesT[i].add2$javajs_util_T3$javajs_util_T3(v, this.offsetT);
}
this.renderCage$I$javajs_util_P3A$IAA$javajs_util_P3A$I$I$I$F(mad10, this.verticesT, faces, aPoints, firstLine, allow0, allow1, 1);
} else for (var x=(this.cell0.x|0); x < this.cell1.x ; x++) {
for (var y=(this.cell0.y|0); y < this.cell1.y ; y++) {
for (var z=(this.cell0.z|0); z < this.cell1.z ; z++) {
if (haveMultiple) {
this.offsetT.set$F$F$F(x, y, z);
this.offsetT.scale$F(scale);
this.unitcell.toCartesian$javajs_util_T3$Z(this.offsetT, true);
this.offsetT.add$javajs_util_T3(this.offset);
aPoints=(x == 0 && y == 0  && z == 0  ? axisPoints : null);
firstLine=(drawAllLines || aPoints == null   ? 0 : 3);
} else {
this.offsetT.setT$javajs_util_T3(this.offset);
firstLine=(drawAllLines ? 0 : 3);
}allow0=255;
allow1=255;
for (var i=8; --i >= 0; ) this.verticesT[i].add2$javajs_util_T3$javajs_util_T3(vertices[i], this.offsetT);

this.renderCage$I$javajs_util_P3A$IAA$javajs_util_P3A$I$I$I$F(mad10, this.verticesT, faces, aPoints, firstLine, allow0, allow1, scale);
}
}
}
p$1.renderInfo.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'renderInfo', function () {
if (this.isExport || !this.vwr.getBoolean$I(603979828) || this.unitcell.isSimple$() || this.vwr.isPreviewOnly || !this.vwr.gdata.setC$H(this.vwr.cm.colixBackgroundContrast) || this.vwr.gdata.getTextPosition$() != 0  ) return;
this.vwr.gdata.setFontFid$B(($b$[0] = this.vwr.gdata.getFontFidFS$S$F("Monospaced", 14 * this.imageFontScaling), $b$[0]));
this.xpos=(Math.floor(5 * this.imageFontScaling)|0);
this.ypos=this.lineheight=(Math.floor(15 * this.imageFontScaling)|0);
var sgName=(this.isPolymer ? "polymer" : this.isSlab ? "slab" : this.unitcell.getSpaceGroupName$());
if (sgName != null ) {
if (sgName.startsWith$S("cell=!")) sgName="cell=inverse[" + sgName.substring$I(6) + "]" ;
sgName=$I$(5).rep$S$S$S(sgName, ";0,0,0", "");
if (sgName.indexOf$S("#") < 0) {
var intTab=this.unitcell.getIntTableNumber$();
if (intTab != null ) sgName += " #" + intTab;
}if (!sgName.equals$O("-- [--]")) {
p$1.drawInfo$S$I$S.apply(this, [sgName, 0, null]);
}}var info=this.unitcell.getMoreInfo$();
if (info != null ) for (var i=0; i < info.size$(); i++) p$1.drawInfo$S$I$S.apply(this, [info.get$I(i), 0, null]);

if (!this.vwr.getBoolean$I(603979937)) return;
p$1.drawInfo$S$I$S.apply(this, ["a=", 0, "\u00c5"]);
if (!this.isPolymer) p$1.drawInfo$S$I$S.apply(this, ["b=", 1, "\u00c5"]);
if (!this.isPolymer && !this.isSlab ) p$1.drawInfo$S$I$S.apply(this, ["c=", 2, "\u00c5"]);
if (!this.isPolymer) {
if (!this.isSlab) {
p$1.drawInfo$S$I$S.apply(this, ["\u03b1=", 3, "\u00b0"]);
p$1.drawInfo$S$I$S.apply(this, ["\u03b2=", 4, "\u00b0"]);
}p$1.drawInfo$S$I$S.apply(this, ["\u03b3=", 5, "\u00b0"]);
}}, p$1);

Clazz.newMeth(C$, 'drawInfo$S$I$S', function (s, type, post) {
this.ypos+=this.lineheight;
if (post != null ) s += $I$(6).formatDecimal$F$I(this.unitcell.getUnitCellInfoType$I(type), 3) + post;
this.g3d.drawStringNoSlab$S$javajs_awt_Font$I$I$I$H(s, null, this.xpos, this.ypos, 0, 0);
}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
