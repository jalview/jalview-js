(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.Matrix','javajs.util.V3','org.jmol.util.Logger','org.jmol.util.Escape','java.util.Hashtable','javajs.util.PT','javajs.util.Lst','org.jmol.util.Vibration']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ModulationSet", null, 'org.jmol.util.Vibration', 'org.jmol.api.JmolModulationSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.id=null;
this.r0=null;
this.symmetry=null;
this.axesLengths=null;
this.nOps=0;
this.iop=0;
this.strop=null;
this.spinOp=0;
this.rsvs=null;
this.vib=null;
this.mods=null;
this.isSubsystem=false;
this.isCommensurate=false;
this.fileOcc=0;
this.occParams=null;
this.occSiteMultiplicity=0;
this.occAbsolute=false;
this.modCalc=null;
this.mxyz=null;
this.htUij=null;
this.vOcc=0;
this.occValue=0;
this.qtOffset=null;
this.isQ=false;
this.enabled=false;
this.scale=0;
this.gammaE=null;
this.gammaIinv=null;
this.sigma=null;
this.tau=null;
this.rI=null;
this.tFactorInv=null;
this.ptTemp=null;
this.v0=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.vOcc=NaN;
this.occValue=NaN;
this.qtOffset=Clazz.new_($I$(1));
this.scale=1;
this.ptTemp=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getSubSystemUnitCell$', function () {
return (this.isSubsystem ? this.symmetry : null);
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return this.enabled;
});

Clazz.newMeth(C$, 'getScale$', function () {
return this.scale;
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'setMod$S$javajs_util_P3$javajs_util_P3$I$javajs_util_Lst$javajs_util_M3$javajs_util_MatrixA$org_jmol_api_SymmetryInterface$I$I$org_jmol_util_Vibration$Z', function (id, r00, r0, d, mods, gammaE, factors, symmetry, nOps, iop, v, isCommensurate) {
this.id=id;
this.symmetry=symmetry;
this.strop=symmetry.getSpaceGroupXyz$I$Z(iop, false);
this.iop=iop;
this.nOps=nOps;
this.r0=r0;
this.modDim=d;
this.rI=Clazz.new_($I$(2).c$$DAA$I$I,[null, d, 1]);
this.mods=mods;
this.gammaE=gammaE;
this.sigma=factors[0];
if (factors[1] != null ) {
this.isSubsystem=true;
this.tFactorInv=factors[1].inverse$();
}if (v != null ) {
this.vib=v;
this.vib.modScale=1;
this.mxyz=Clazz.new_($I$(3));
this.axesLengths=symmetry.getUnitCellParams$();
if (this.axesLengths == null ) this.axesLengths=symmetry.getUnitCellParams$();
}var vR00=$I$(2).newT$javajs_util_T3$Z(r00, true);
var vR0=$I$(2).newT$javajs_util_T3$Z(r0, true);
this.rsvs=symmetry.getOperationRsVs$I(iop);
this.gammaIinv=this.rsvs.getSubmatrix$I$I$I$I(3, 3, d, d).inverse$();
var gammaM=this.rsvs.getSubmatrix$I$I$I$I(3, 0, d, 3);
var sI=this.rsvs.getSubmatrix$I$I$I$I(3, 3 + d, d, 1);
this.spinOp=symmetry.getSpinOp$I(iop);
this.tau=this.gammaIinv.mul$javajs_util_Matrix(this.sigma.mul$javajs_util_Matrix(vR0).sub$javajs_util_Matrix(gammaM.mul$javajs_util_Matrix(vR00)).sub$javajs_util_Matrix(sI));
if ($I$(4).debuggingHigh) $I$(4).debug$S("MODSET create " + id + " r0=" + $I$(5).eP$javajs_util_T3(r0) + " tau=" + this.tau );
return this;
});

Clazz.newMeth(C$, 'calculate$javajs_util_T3$Z', function (tuv, isQ) {
this.x=this.y=this.z=0;
this.htUij=null;
this.vOcc=NaN;
if (this.mxyz != null ) this.mxyz.set$F$F$F(0, 0, 0);
var a;
if (isQ && this.qtOffset != null  ) {
var q=Clazz.new_($I$(2).c$$DAA$I$I,[null, 3, 1]);
a=q.getArray$();
a[0][0]=this.qtOffset.x;
a[1][0]=this.qtOffset.y;
a[2][0]=this.qtOffset.z;
a=(this.rI=this.sigma.mul$javajs_util_Matrix(q)).getArray$();
} else {
a=this.rI.getArray$();
for (var i=0; i < this.modDim; i++) a[i][0]=0;

}if (tuv != null ) {
switch (this.modDim) {
default:
a[2][0] += tuv.z;
case 2:
a[1][0] += tuv.y;
case 1:
a[0][0] += tuv.x;
break;
}
}if (this.isSubsystem) {
this.rI=this.tFactorInv.mul$javajs_util_Matrix(this.rI);
}this.rI=this.tau.add$javajs_util_Matrix(this.gammaIinv.mul$javajs_util_Matrix(this.rI));
var arI=this.rI.getArray$();
for (var i=this.mods.size$(); --i >= 0; ) this.mods.get$I(i).apply$org_jmol_util_ModulationSet$DAA(this, arI);

this.gammaE.rotate$javajs_util_T3(this);
if (this.mxyz != null ) {
this.gammaE.rotate$javajs_util_T3(this.mxyz);
if (this.spinOp < 0 ) this.mxyz.scale$F(this.spinOp);
}return this;
});

Clazz.newMeth(C$, 'addUTens$S$F', function (utens, v) {
if (this.htUij == null ) this.htUij=Clazz.new_($I$(6));
var f=this.htUij.get$O(utens);
if ($I$(4).debuggingHigh) $I$(4).debug$S("MODSET " + this.id + " utens=" + utens + " f=" + f.toString() + " v=" + new Float(v).toString() );
if (f != null ) v += f.floatValue$();
this.htUij.put$TK$TV(utens, Float.valueOf$F(v));
});

Clazz.newMeth(C$, 'setModTQ$javajs_util_T3$Z$javajs_util_T3$Z$F', function (a, isOn, qtOffset, isQ, scale) {
if (this.enabled) this.addTo$javajs_util_T3$F(a, NaN);
this.enabled=false;
this.scale=scale;
if (qtOffset != null ) {
this.qtOffset.setT$javajs_util_T3(qtOffset);
this.isQ=isQ;
if (isQ) qtOffset=null;
this.calculate$javajs_util_T3$Z(qtOffset, isQ);
if (!Float.isNaN$F(this.vOcc)) this.occValue=p$1.getOccupancy.apply(this, []);
}if (isOn) {
this.addTo$javajs_util_T3$F(a, 1);
this.enabled=true;
}});

Clazz.newMeth(C$, 'addTo$javajs_util_T3$F', function (a, scale) {
var isReset=(Float.isNaN$F(scale));
if (isReset) scale=-1;
this.ptTemp.setT$javajs_util_T3(this);
this.ptTemp.scale$F(this.scale * scale);
if (a != null ) {
this.symmetry.toCartesian$javajs_util_T3$Z(this.ptTemp, true);
a.add$javajs_util_T3(this.ptTemp);
}if (this.mxyz != null ) p$1.setVib$Z$F.apply(this, [isReset, scale]);
});

Clazz.newMeth(C$, 'setVib$Z$F', function (isReset, modulationScale) {
if (isReset) {
this.vib.setT$javajs_util_T3(this.v0);
return;
}this.ptTemp.setT$javajs_util_T3(this.mxyz);
this.symmetry.toCartesian$javajs_util_T3$Z(this.ptTemp, true);
$I$(7).fixPtFloats$javajs_util_T3$F(this.ptTemp, 10000.0);
this.ptTemp.add$javajs_util_T3(this.v0);
this.ptTemp.scale$F(this.vib.modScale * modulationScale * this.scale );
this.vib.setT$javajs_util_T3(this.ptTemp);
}, p$1);

Clazz.newMeth(C$, 'getState$', function () {
var s="";
if (this.qtOffset != null  && this.qtOffset.length$() > 0  ) s += "; modulation " + $I$(5).eP$javajs_util_T3(this.qtOffset) + " " + this.isQ + ";\n" ;
s += "modulation {selected} " + (this.enabled ? "ON" : "OFF");
return s;
});

Clazz.newMeth(C$, 'getModPoint$Z', function (asEnabled) {
return (asEnabled ? this : this.r0);
});

Clazz.newMeth(C$, 'getModulation$C$javajs_util_T3', function (type, tuv) {
p$1.getModCalc.apply(this, []);
switch (type.$c()) {
case 68:
return $I$(1).newP$javajs_util_T3(tuv == null  ? this.r0 : this.modCalc.calculate$javajs_util_T3$Z(tuv, false));
case 77:
return $I$(1).newP$javajs_util_T3(tuv == null  ? this.v0 : this.modCalc.calculate$javajs_util_T3$Z(tuv, false).mxyz);
case 84:
this.modCalc.calculate$javajs_util_T3$Z(tuv, false);
var ta=this.modCalc.rI.getArray$();
return $I$(1).new3$F$F$F(ta[0][0], (this.modDim > 1 ? ta[1][0] : 0), (this.modDim > 2 ? ta[2][0] : 0));
case 79:
return Float.valueOf$F(Math.abs(tuv == null  ? this.getOccupancy100$Z(false) : this.modCalc.calculate$javajs_util_T3$Z(tuv, false).getOccupancy100$Z(false)));
}
return null;
});

Clazz.newMeth(C$, 'setCalcPoint$javajs_util_T3$javajs_util_T3$F$F', function (pt, t456, vibScale, scale) {
if (this.enabled) {
this.addTo$javajs_util_T3$F(pt, NaN);
p$1.getModCalc.apply(this, []).calculate$javajs_util_T3$Z(t456, false).addTo$javajs_util_T3$F(pt, scale);
}return pt;
});

Clazz.newMeth(C$, 'getModCalc', function () {
if (this.modCalc == null ) {
this.modCalc=Clazz.new_(C$);
this.modCalc.axesLengths=this.axesLengths;
this.modCalc.enabled=true;
this.modCalc.fileOcc=this.fileOcc;
this.modCalc.gammaE=this.gammaE;
this.modCalc.gammaIinv=this.gammaIinv;
this.modCalc.id=this.id;
this.modCalc.modDim=this.modDim;
this.modCalc.mods=this.mods;
this.modCalc.nOps=this.nOps;
this.modCalc.occParams=this.occParams;
this.modCalc.occSiteMultiplicity=this.occSiteMultiplicity;
this.modCalc.r0=this.r0;
this.modCalc.rI=this.rI;
this.modCalc.sigma=this.sigma;
this.modCalc.spinOp=this.spinOp;
this.modCalc.symmetry=this.symmetry;
this.modCalc.tau=this.tau;
this.modCalc.v0=this.v0;
this.modCalc.vib=this.vib;
if (this.mxyz != null ) this.modCalc.mxyz=Clazz.new_($I$(3));
}return this.modCalc;
}, p$1);

Clazz.newMeth(C$, 'getInfo$java_util_Map', function (info) {
var modInfo=Clazz.new_($I$(6));
modInfo.put$TK$TV("id", this.id);
modInfo.put$TK$TV("r0", this.r0);
modInfo.put$TK$TV("tau", this.tau.getArray$());
modInfo.put$TK$TV("modDim", Integer.valueOf$I(this.modDim));
modInfo.put$TK$TV("rsvs", this.rsvs);
modInfo.put$TK$TV("sigma", this.sigma.getArray$());
modInfo.put$TK$TV("symop", Integer.valueOf$I(this.iop + 1));
modInfo.put$TK$TV("strop", this.strop);
modInfo.put$TK$TV("unitcell", this.symmetry.getUnitCellInfo$());
var mInfo=Clazz.new_($I$(8));
for (var i=0; i < this.mods.size$(); i++) mInfo.addLast$TV(this.mods.get$I(i).getInfo$());

modInfo.put$TK$TV("mods", mInfo);
info.put$TK$TV("modulation", modInfo);
});

Clazz.newMeth(C$, 'setXYZ$javajs_util_T3', function (v) {
if (this.vib == null ) return;
if (this.vib.modDim == -2) {
if (v.x == 1.4E-45  && v.y == 1.4E-45  ) {
this.vib.modScale=v.z;
return;
}}this.vib.setT$javajs_util_T3(v);
});

Clazz.newMeth(C$, 'getVibration$Z', function (forceNew) {
if (this.vib == null  && forceNew ) this.vib=Clazz.new_($I$(9));
return this.vib;
});

Clazz.newMeth(C$, 'getV3$', function () {
return (this.mxyz == null  ? this : this.mxyz);
});

Clazz.newMeth(C$, 'scaleVibration$F', function (m) {
if (this.vib == null ) return;
if (m == 0 ) {
m=1 / this.vib.modScale;
}this.vib.scale$F(m);
this.vib.modScale *= m;
});

Clazz.newMeth(C$, 'setMoment$', function () {
if (this.mxyz == null ) return;
this.symmetry.toCartesian$javajs_util_T3$Z(this.vib, true);
this.v0=$I$(3).newV$javajs_util_T3(this.vib);
});

Clazz.newMeth(C$, 'isNonzero$', function () {
return this.x != 0  || this.y != 0   || this.z != 0   || this.mxyz != null  && (this.mxyz.x != 0  || this.mxyz.y != 0   || this.mxyz.z != 0  )  ;
});

Clazz.newMeth(C$, 'setOccupancy$DA$D$D', function (pt, foccupancy, siteMult) {
this.occParams=pt;
this.fileOcc=foccupancy;
this.occSiteMultiplicity=siteMult;
return p$1.getOccupancy.apply(this, []);
});

Clazz.newMeth(C$, 'getOccupancy100$Z', function (isTemp) {
if (this.isCommensurate || Float.isNaN$F(this.vOcc) ) return -2147483648;
if (!isTemp && !this.enabled ) return ((-this.fileOcc * 100)|0);
if (isTemp && this.modCalc != null  ) {
p$1.getOccupancy.apply(this.modCalc, []);
return this.modCalc.getOccupancy100$Z(false);
}return ((this.occValue * 100)|0);
});

Clazz.newMeth(C$, 'getOccupancy', function () {
var occ;
if (this.occAbsolute) {
occ=this.vOcc;
} else if (this.occParams == null ) {
occ=this.fileOcc + this.vOcc;
} else if (this.occSiteMultiplicity > 0 ) {
var o_site=this.fileOcc * this.occSiteMultiplicity / this.nOps / this.occParams[1];
occ=o_site * (this.occParams[1] + this.vOcc);
} else {
occ=this.occParams[0] * (this.occParams[1] + this.vOcc);
}occ=(occ > 0.49  && occ < 0.5   ? 0.489 : Math.min(1, Math.max(0, occ)));
return this.occValue=occ;
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
