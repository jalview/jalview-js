(function(){var P$=Clazz.newPackage("org.jmol.render"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.util.Point3fi','org.jmol.shape.Measures','org.jmol.render.FontLineShapeRenderer','javajs.util.P3','javajs.util.Measure','javajs.util.A4','javajs.util.M3']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MeasuresRenderer", null, 'org.jmol.render.LabelsRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['doJustify','modulating'],'I',['count'],'H',['mad0'],'O',['mpts','java.util.Map','m','org.jmol.modelset.Measurement','p','org.jmol.util.Point3fi[]','aaT','javajs.util.A4','matrixT','javajs.util.M3']]]

Clazz.newMeth(C$, 'initRenderer$', function () {
this.mpts=Clazz.new_($I$(1,1));
this.p=Clazz.array($I$(2), [4]);
});

Clazz.newMeth(C$, 'render$', function () {
if (!this.g3d.checkTranslucent$Z(false)) return false;
if (this.atomPt == null ) this.atomPt=Clazz.new_($I$(2,1));
var measures=this.shape;
if (measures.ms !== this.ms ) {
System.out.println$S("!measure wrong modelset!");
measures.clear$();
return false;
}this.doJustify=this.vwr.getBoolean$I(603979870);
this.modulating=this.ms.bsModulated != null ;
this.imageFontScaling=this.vwr.imageFontScaling;
this.mad0=measures.mad;
this.font3d=this.vwr.gdata.getFont3DScaled$org_jmol_util_Font$F($I$(3).font3d, this.imageFontScaling);
this.m=measures.mPending;
if (!this.isExport && this.m != null   && (this.count=this.m.count) != 0 ) p$1.renderPendingMeasurement.apply(this, []);
if (!this.vwr.getBoolean$I(603979926)) return false;
var showMeasurementLabels=this.vwr.getBoolean$I(603979878);
measures.setVisibilityInfo$();
for (var i=measures.measurementCount; --i >= 0; ) {
this.m=measures.measurements.get$I(i);
if (!this.m.isVisible || !this.m.isValid || (this.count=this.m.count) == 1 && this.m.traceX == -2147483648   ) continue;
p$1.getPoints.apply(this, []);
this.colix=this.m.colix;
if (this.colix == 0) this.colix=measures.colix;
if (this.colix == 0) this.colix=this.vwr.cm.colixBackgroundContrast;
this.labelColix=this.m.labelColix;
if (this.labelColix == 0) this.labelColix=this.vwr.cm.colixBackgroundContrast;
 else if (this.labelColix == -1) this.labelColix=this.colix;
this.g3d.setC$H(this.colix);
this.colixA=this.colixB=this.colix;
p$1.renderMeasurement$Z.apply(this, [showMeasurementLabels]);
}
return false;
});

Clazz.newMeth(C$, 'getPoints', function () {
for (var j=this.count; --j >= 0; ) {
var i=this.m.getAtomIndex$I(j + 1);
var pt=(i >= 0 && this.modulating  ? p$1.getModAtom$I.apply(this, [i]) : this.m.getAtom$I(j + 1));
if (pt.sD < 0) {
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(pt, this.pt0i);
pt.sX=this.pt0i.x;
pt.sY=this.pt0i.y;
pt.sZ=this.pt0i.z;
}this.p[j]=pt;
}
if (this.modulating) this.m.refresh$org_jmol_util_Point3fiA(this.p);
}, p$1);

Clazz.newMeth(C$, 'getModAtom$I', function (i) {
var ii=Integer.valueOf$I(i);
var pt=this.mpts.get$O(ii);
if (pt != null ) ii=null;
var v=this.ms.getModulation$I(i);
if (v == null ) {
pt=this.ms.at[i];
} else {
if (pt == null ) pt=Clazz.new_($I$(2,1));
pt.setT$javajs_util_T3(this.ms.at[i]);
if (this.vwr.tm.vibrationOn) this.vwr.tm.getVibrationPoint$org_jmol_util_Vibration$javajs_util_T3$F(v, pt, NaN);
pt.sD=($s$[0] = -1, $s$[0]);
}if (ii != null ) this.mpts.put$O$O(ii, pt);
return pt;
}, p$1);

Clazz.newMeth(C$, 'renderMeasurement$Z', function (renderLabel) {
var s=(renderLabel ? this.m.getString$() : null);
if (s != null ) {
if (s.length$() == 0) {
s=null;
} else if (this.m.text != null ) {
this.m.text.setText$S(s);
this.m.text.colix=this.labelColix;
}}if (this.m.mad == 0) {
this.dotsOrDashes=false;
this.mad=this.mad0;
} else {
this.mad=($s$[0] = this.m.mad, $s$[0]);
this.dotsOrDashes=true;
this.dashDots=(this.mad < 0 ? null : $I$(4).ndots);
}switch (this.count) {
case 1:
this.drawLine$I$I$I$I$I$I$I(this.p[0].sX, this.p[0].sY, this.p[0].sZ, this.m.traceX, this.m.traceY, this.p[0].sZ, this.mad);
break;
case 2:
this.renderDistance$S$org_jmol_util_Point3fi$org_jmol_util_Point3fi(s, this.p[0], this.p[1]);
break;
case 3:
p$1.renderAngle$S$org_jmol_util_Point3fi$org_jmol_util_Point3fi$org_jmol_util_Point3fi.apply(this, [s, this.p[0], this.p[1], this.p[2]]);
break;
case 4:
p$1.renderTorsion$S$org_jmol_util_Point3fi$org_jmol_util_Point3fi$org_jmol_util_Point3fi$org_jmol_util_Point3fi.apply(this, [s, this.p[0], this.p[1], this.p[2], this.p[3]]);
break;
}
this.p[0]=this.p[1]=this.p[2]=this.p[3]=null;
}, p$1);

Clazz.newMeth(C$, 'renderDistance$S$org_jmol_util_Point3fi$org_jmol_util_Point3fi', function (s, a, b) {
if ((this.tickInfo=this.m.tickInfo) != null ) {
this.drawLine$I$I$I$I$I$I$I(a.sX, a.sY, a.sZ, b.sX, b.sY, b.sZ, this.mad);
this.tickA=a;
this.tickB=b;
if (this.tickAs == null ) {
this.tickAs=Clazz.new_($I$(5,1));
this.tickBs=Clazz.new_($I$(5,1));
}this.tickAs.set$F$F$F(a.sX, a.sY, a.sZ);
this.tickBs.set$F$F$F(b.sX, b.sY, b.sZ);
this.drawTicks$I$Z(this.mad, s != null );
return;
}var zA=a.sZ - a.sD - 10 ;
var zB=b.sZ - b.sD - 10 ;
var radius=this.drawLine$I$I$I$I$I$I$I(a.sX, a.sY, zA, b.sX, b.sY, zB, this.mad);
if (s == null ) return;
if (this.mad > 0) radius<<=1;
var z=((zA + zB)/2|0);
if (z < 1) z=1;
var x=((a.sX + b.sX)/2|0);
var y=((a.sY + b.sY)/2|0);
if (this.m.text == null ) {
this.g3d.setC$H(this.labelColix);
this.drawString$I$I$I$I$Z$Z$Z$I$S(x, y, z, radius, this.doJustify && (x - a.sX) * (y - a.sY) > 0 , false, true, (this.doJustify ? 0 : 2147483647), s);
} else {
this.atomPt.ave$javajs_util_T3$javajs_util_T3(a, b);
this.atomPt.sX=((a.sX + b.sX)/2|0);
this.atomPt.sY=((a.sY + b.sY)/2|0);
this.renderLabelOrMeasure$org_jmol_modelset_Text$S(this.m.text, s);
}});

Clazz.newMeth(C$, 'renderAngle$S$org_jmol_util_Point3fi$org_jmol_util_Point3fi$org_jmol_util_Point3fi', function (s, a, b, c) {
var zOffset=b.sD + 10;
var zA=a.sZ - a.sD - 10 ;
var zB=b.sZ - zOffset;
var zC=c.sZ - c.sD - 10 ;
var radius=this.drawLine$I$I$I$I$I$I$I(a.sX, a.sY, zA, b.sX, b.sY, zB, this.mad);
radius+=this.drawLine$I$I$I$I$I$I$I(b.sX, b.sY, zB, c.sX, c.sY, zC, this.mad);
if (s == null ) return;
radius=((radius + 1)/2|0);
if (this.m.value > 175 ) {
if (this.m.text == null ) {
var offset=(Math.floor(5 * this.imageFontScaling)|0);
this.g3d.setC$H(this.labelColix);
this.drawString$I$I$I$I$Z$Z$Z$I$S(b.sX + offset, b.sY - offset, zB, radius, false, false, false, (this.doJustify ? 0 : 2147483647), s);
} else {
this.atomPt.setT$javajs_util_T3(b);
this.renderLabelOrMeasure$org_jmol_modelset_Text$S(this.m.text, s);
}return;
}if (this.m.isTainted$()) {
var radians=$I$(6).computeAngle$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$Z(this.p[0], this.p[1], this.p[2], this.vectorT2, this.vectorT3, false);
this.vectorT.cross$javajs_util_T3$javajs_util_T3(this.vectorT2, this.vectorT3);
this.m.renderAxis=$I$(7).new4$F$F$F$F(this.vectorT.x, this.vectorT.y, this.vectorT.z, radians);
this.vectorT2.normalize$();
this.vectorT2.scale$F(0.5);
this.m.renderArc=$I$(5).newP$javajs_util_T3(this.vectorT2);
}if (this.aaT == null ) {
this.aaT=Clazz.new_($I$(7,1));
this.matrixT=Clazz.new_($I$(8,1));
}var dotCount=(Math.floor((this.m.renderAxis.angle / (6.283185307179586)) * 64)|0);
var stepAngle=this.m.renderAxis.angle / dotCount;
this.aaT.setAA$javajs_util_A4(this.m.renderAxis);
var iMid=(dotCount/2|0);
for (var i=dotCount; --i >= 0; ) {
this.aaT.angle=i * stepAngle;
this.pointT.setT$javajs_util_T3(this.m.renderArc);
this.matrixT.setAA$javajs_util_A4(this.aaT).rotate$javajs_util_T3(this.pointT);
this.pointT.add$javajs_util_T3(b);
var p3i=this.tm.transformPt$javajs_util_T3(this.pointT);
var zArc=p3i.z - zOffset;
if (zArc < 0) zArc=0;
this.g3d.drawPixel$I$I$I(p3i.x, p3i.y, zArc);
if (i != iMid) continue;
this.pointT.setT$javajs_util_T3(this.m.renderArc);
this.pointT.scale$F(1.1);
this.matrixT.rotate$javajs_util_T3(this.pointT);
this.pointT.add$javajs_util_T3(b);
this.tm.transformPt$javajs_util_T3(this.pointT);
var zLabel=p3i.z - zOffset;
if (this.m.text == null ) {
this.g3d.setC$H(this.labelColix);
this.drawString$I$I$I$I$Z$Z$Z$I$S(p3i.x, p3i.y, zLabel, radius, p3i.x < b.sX, false, false, (this.doJustify ? b.sY : 2147483647), s);
} else {
this.atomPt.setT$javajs_util_T3(this.pointT);
this.renderLabelOrMeasure$org_jmol_modelset_Text$S(this.m.text, s);
}}
}, p$1);

Clazz.newMeth(C$, 'renderTorsion$S$org_jmol_util_Point3fi$org_jmol_util_Point3fi$org_jmol_util_Point3fi$org_jmol_util_Point3fi', function (s, a, b, c, d) {
var zA=a.sZ - a.sD - 10 ;
var zB=b.sZ - b.sD - 10 ;
var zC=c.sZ - c.sD - 10 ;
var zD=d.sZ - d.sD - 10 ;
var radius=this.drawLine$I$I$I$I$I$I$I(a.sX, a.sY, zA, b.sX, b.sY, zB, this.mad);
radius+=this.drawLine$I$I$I$I$I$I$I(b.sX, b.sY, zB, c.sX, c.sY, zC, this.mad);
radius+=this.drawLine$I$I$I$I$I$I$I(c.sX, c.sY, zC, d.sX, d.sY, zD, this.mad);
if (s == null ) return;
var zLabel=((zA + zB + zC + zD )/4|0);
radius=(radius/(3)|0);
if (this.m.text == null ) {
this.g3d.setC$H(this.labelColix);
this.drawString$I$I$I$I$Z$Z$Z$I$S(((a.sX + b.sX + c.sX + d.sX )/4|0), ((a.sY + b.sY + c.sY + d.sY )/4|0), zLabel, radius, false, false, false, (this.doJustify ? 0 : 2147483647), s);
} else {
this.atomPt.add2$javajs_util_T3$javajs_util_T3(a, b);
this.atomPt.add$javajs_util_T3(c);
this.atomPt.add$javajs_util_T3(d);
this.atomPt.scale$F(0.25);
this.renderLabelOrMeasure$org_jmol_modelset_Text$S(this.m.text, s);
}}, p$1);

Clazz.newMeth(C$, 'renderPendingMeasurement', function () {
try {
p$1.getPoints.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
(this.shape).mPending=null;
return;
} else {
throw e;
}
}
var renderLabel=(this.m.traceX == -2147483648);
this.g3d.setC$H(this.labelColix=(renderLabel ? this.vwr.cm.colixRubberband : this.count == 2 ? 20 : 23));
if ((this.m).haveTarget) {
p$1.renderMeasurement$Z.apply(this, [renderLabel]);
return;
}var atomLast=this.p[this.count - 1];
if (this.count > 1) p$1.renderMeasurement$Z.apply(this, [false]);
var lastZ=atomLast.sZ - atomLast.sD - 10 ;
var x=this.vwr.getCursorX$();
var y=this.vwr.getCursorY$();
if (this.g3d.isAntialiased$()) {
x<<=1;
y<<=1;
}this.drawLine$I$I$I$I$I$I$I(atomLast.sX, atomLast.sY, lastZ, x, y, lastZ, this.mad);
}, p$1);

Clazz.newMeth(C$, 'drawLine$I$I$I$I$I$I$I', function (x1, y1, z1, x2, y2, z2, mad) {
var diameter=((mad >= 20 && this.exportType != 1  ? this.vwr.tm.scaleToScreen$I$I(((z1 + z2)/2|0), mad) : mad)|0);
if (this.dotsOrDashes && (this.dashDots == null  || this.dashDots === $I$(4).ndots  ) ) this.width=diameter;
return this.drawLine2$I$I$I$I$I$I$I(x1, y1, z1, x2, y2, z2, diameter);
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:41 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
