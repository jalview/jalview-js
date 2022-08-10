(function(){var P$=Clazz.newPackage("org.jmol.renderspecial"),p$1={},I$=[[0,'org.jmol.util.Point3fi','javajs.util.P3','javajs.util.V3','org.jmol.shape.Shape','org.jmol.util.Vibration']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VectorsRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ptTemp=Clazz.new_($I$(1,1));
this.pointVectorStart=Clazz.new_($I$(2,1));
this.pointVectorEnd=Clazz.new_($I$(1,1));
this.pointArrowHead=Clazz.new_($I$(2,1));
this.screenVectorStart=Clazz.new_($I$(2,1));
this.screenVectorEnd=Clazz.new_($I$(2,1));
this.screenArrowHead=Clazz.new_($I$(2,1));
this.headOffsetVector=Clazz.new_($I$(3,1));
this.pTemp3=Clazz.new_($I$(2,1));
this.standardVector=true;
},1);

C$.$fields$=[['Z',['vectorSymmetry','drawShaft','vectorsCentered','standardVector','vibrationOn','drawCap','showModVecs'],'F',['vectorScale','headScale'],'I',['diameter','headWidthPixels','vectorTrail'],'O',['ptTemp','org.jmol.util.Point3fi','pointVectorStart','javajs.util.P3','pointVectorEnd','org.jmol.util.Point3fi','pointArrowHead','javajs.util.P3','+screenVectorStart','+screenVectorEnd','+screenArrowHead','headOffsetVector','javajs.util.V3','pTemp3','javajs.util.P3','vibTemp','org.jmol.util.Vibration','ptTemp4','javajs.util.P3','+ptTemp2']]]

Clazz.newMeth(C$, 'render$', function () {
var vectors=this.shape;
if (!vectors.isActive) return false;
var mads=vectors.mads;
if (mads == null ) return false;
var atoms=vectors.atoms;
var colixes=vectors.colixes;
var needTranslucent=false;
this.vectorScale=this.vwr.getFloat$I(1648361473);
this.vectorTrail=this.vwr.getInt$I(553648185);
if (this.vectorScale < 0 ) this.vectorScale=1;
this.vectorSymmetry=this.vwr.getBoolean$I(603979973);
this.vectorsCentered=this.vwr.getBoolean$I(603979972);
this.showModVecs=this.vwr.getBoolean$I(603979927);
this.vibrationOn=this.vwr.tm.vibrationOn;
this.headScale=-0.2;
if (this.vectorScale < 0 ) this.headScale=-this.headScale;
var haveModulations=false;
for (var i=this.ms.ac; --i >= 0; ) {
var atom=atoms[i];
if (!this.isVisibleForMe$org_jmol_modelset_Atom(atom)) continue;
var mod=this.ms.getModulation$I(i);
if (this.showModVecs && !haveModulations && mod != null   ) haveModulations=true;
var vib=this.ms.getVibration$I$Z(i, false);
if (vib == null ) continue;
if (!p$1.transform$H$org_jmol_modelset_Atom$org_jmol_util_Vibration$org_jmol_api_JmolModulationSet.apply(this, [mads[i], atom, vib, mod])) continue;
if (!this.g3d.setC$H($I$(4).getColix$HA$I$org_jmol_modelset_Atom(colixes, i, atom))) {
needTranslucent=true;
continue;
}p$1.renderVector$org_jmol_modelset_Atom$org_jmol_util_Vibration.apply(this, [atom, vib]);
if (this.vectorSymmetry) {
if (this.vibTemp == null ) this.vibTemp=Clazz.new_($I$(5,1));
this.vibTemp.setT$javajs_util_T3(vib);
this.vibTemp.scale$F(-1);
p$1.transform$H$org_jmol_modelset_Atom$org_jmol_util_Vibration$org_jmol_api_JmolModulationSet.apply(this, [mads[i], atom, this.vibTemp, null]);
p$1.renderVector$org_jmol_modelset_Atom$org_jmol_util_Vibration.apply(this, [atom, vib]);
}}
if (haveModulations) for (var i=this.ms.ac; --i >= 0; ) {
var atom=atoms[i];
if (!this.isVisibleForMe$org_jmol_modelset_Atom(atom)) continue;
var mod=this.ms.getModulation$I(i);
if (mod == null ) continue;
if (!this.g3d.setC$H($I$(4).getColix$HA$I$org_jmol_modelset_Atom(colixes, i, atom))) {
needTranslucent=true;
continue;
}if (!p$1.transform$H$org_jmol_modelset_Atom$org_jmol_util_Vibration$org_jmol_api_JmolModulationSet.apply(this, [mads[i], atom, null, mod])) continue;
p$1.renderVector$org_jmol_modelset_Atom$org_jmol_util_Vibration.apply(this, [atom, null]);
}
return needTranslucent;
});

Clazz.newMeth(C$, 'transform$H$org_jmol_modelset_Atom$org_jmol_util_Vibration$org_jmol_api_JmolModulationSet', function (mad, atom, vib, mod2) {
var isMod=(vib == null  || vib.modDim >= 0 );
var isSpin=(!isMod && vib.modDim == -2 );
if (vib == null ) vib=mod2;
this.drawCap=true;
if (!isMod) {
var len=vib.length$();
if (Math.abs(len * this.vectorScale) < 0.01 ) return false;
this.standardVector=true;
this.drawShaft=(0.1 + Math.abs(this.headScale / len) < Math.abs(this.vectorScale) );
this.headOffsetVector.setT$javajs_util_T3(vib);
this.headOffsetVector.scale$F(this.headScale / len);
}this.ptTemp.setT$javajs_util_T3(atom);
var mod=atom.getModulation$();
if (this.vibrationOn && mod != null  ) this.vwr.tm.getVibrationPoint$org_jmol_util_Vibration$javajs_util_T3$F(mod, this.ptTemp, 1);
if (isMod) {
this.standardVector=false;
this.drawShaft=true;
mod=vib;
this.pointVectorStart.setT$javajs_util_T3(this.ptTemp);
this.pointVectorEnd.setT$javajs_util_T3(this.ptTemp);
if (mod.isEnabled$()) {
if (this.vibrationOn) {
this.vwr.tm.getVibrationPoint$org_jmol_util_Vibration$javajs_util_T3$F(vib, this.pointVectorEnd, NaN);
}mod.addTo$javajs_util_T3$F(this.pointVectorStart, NaN);
} else {
mod.addTo$javajs_util_T3$F(this.pointVectorEnd, 1);
}this.headOffsetVector.sub2$javajs_util_T3$javajs_util_T3(this.pointVectorEnd, this.pointVectorStart);
var len=this.headOffsetVector.length$();
this.drawCap=(len + -0.2 > 0.001 );
this.drawShaft=(len > 0.01 );
this.headOffsetVector.scale$F(this.headScale / this.headOffsetVector.length$());
} else if (this.vectorsCentered || isSpin ) {
this.standardVector=false;
this.pointVectorEnd.scaleAdd2$F$javajs_util_T3$javajs_util_T3(0.5 * this.vectorScale, vib, this.ptTemp);
this.pointVectorStart.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-0.5 * this.vectorScale, vib, this.ptTemp);
} else {
this.pointVectorEnd.scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.vectorScale, vib, this.ptTemp);
this.pointArrowHead.add2$javajs_util_T3$javajs_util_T3(this.pointVectorEnd, this.headOffsetVector);
if (this.vibrationOn) {
var screen=this.tm.transformPtVib$javajs_util_P3$org_jmol_util_Vibration(this.pointVectorEnd, vib);
this.screenVectorEnd.set$F$F$F(screen.x, screen.y, screen.z);
screen=this.tm.transformPtVib$javajs_util_P3$org_jmol_util_Vibration(this.pointArrowHead, vib);
this.screenArrowHead.set$F$F$F(screen.x, screen.y, screen.z);
} else {
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pointVectorEnd, this.screenVectorEnd);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pointArrowHead, this.screenArrowHead);
}}if (!this.standardVector) {
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pointVectorEnd, this.screenVectorEnd);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pointVectorStart, this.screenVectorStart);
if (this.drawCap) this.pointArrowHead.add2$javajs_util_T3$javajs_util_T3(this.pointVectorEnd, this.headOffsetVector);
 else this.pointArrowHead.setT$javajs_util_T3(this.pointVectorEnd);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pointArrowHead, this.screenArrowHead);
}this.diameter=((mad < 0 ? (($s$[0]=-mad,mad=$s$[0],$s$[0])) : mad < 1 ? 1 : this.vwr.tm.scaleToScreen$I$I((this.screenVectorEnd.z|0), mad))|0);
this.headWidthPixels=this.diameter << 1;
if (this.headWidthPixels < this.diameter + 2) this.headWidthPixels=this.diameter + 2;
return true;
}, p$1);

Clazz.newMeth(C$, 'renderVector$org_jmol_modelset_Atom$org_jmol_util_Vibration', function (atom, vib) {
if (vib != null  && this.vectorTrail > 0 ) {
if (this.ptTemp4 == null ) {
this.ptTemp4=Clazz.new_($I$(2,1));
this.ptTemp2=Clazz.new_($I$(2,1));
}var d=Math.max(1, this.diameter >> 2);
var pts=vib.addTracePt$I$org_jmol_util_Point3fi(this.vectorTrail, this.vibrationOn ? this.pointVectorEnd : null);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(atom, this.ptTemp4);
if (pts != null ) for (var i=pts.length, p=this.vectorTrail; --i >= 0; ) {
var pt=pts[--p];
if (pt == null ) break;
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(pt, this.ptTemp2);
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, d, this.ptTemp4, this.ptTemp2);
}
}if (this.drawShaft) {
this.pTemp3.set$F$F$F(atom.sX, atom.sY, atom.sZ);
if (this.standardVector) this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.pTemp3, this.screenArrowHead);
 else this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.screenVectorStart, this.screenArrowHead);
}if (this.drawCap) this.g3d.fillConeScreen3f$B$I$javajs_util_P3$javajs_util_P3$Z(2, this.headWidthPixels, this.screenArrowHead, this.screenVectorEnd, false);
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
