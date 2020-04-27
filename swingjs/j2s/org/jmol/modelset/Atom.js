(function(){var P$=Clazz.newPackage("org.jmol.modelset"),p$1={},I$=[[0,'org.jmol.c.PAL','org.jmol.modelset.Bond',['org.jmol.atomdata.RadiusData','.EnumType'],'org.jmol.c.VDW','org.jmol.util.Edge','org.jmol.util.C','org.jmol.util.Elements','org.jmol.modelset.Group','javajs.util.BS','javajs.util.P3','javajs.util.PT','javajs.util.SB','org.jmol.viewer.JC','javajs.util.CU']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Atom", null, 'org.jmol.util.Point3fi', 'org.jmol.util.Node');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.altloc="\u0000";
this.paletteID=$I$(1).CPK.id;
this.nBondsDisplayed=0;
this.nBackbonesDisplayed=0;
},1);

C$.$fields$=[['B',['atomID','valence','paletteID'],'C',['altloc'],'F',['userDefinedVanDerWaalRadius'],'I',['atomSite','formalChargeAndFlags','nBondsDisplayed','nBackbonesDisplayed','clickabilityFlags','shapeVisibilityFlags'],'H',['atomicAndIsotopeNumber','madAtom','colixAtom'],'O',['group','org.jmol.modelset.Group','atomSymmetry','javajs.util.BS','bonds','org.jmol.modelset.Bond[]']]
,['H',['MAD_GLOBAL']]]

Clazz.newMeth(C$, 'setAtom$I$I$javajs_util_P3$F$javajs_util_BS$I$H$I$Z', function (modelIndex, atomIndex, xyz, radius, atomSymmetry, atomSite, atomicAndIsotopeNumber, formalCharge, isHetero) {
this.mi=($s$[0] = modelIndex, $s$[0]);
this.atomSymmetry=atomSymmetry;
this.atomSite=atomSite;
this.i=atomIndex;
this.atomicAndIsotopeNumber=atomicAndIsotopeNumber;
if (isHetero) this.formalChargeAndFlags=2;
if (formalCharge != 0 && formalCharge != -2147483648 ) this.setFormalCharge$I(formalCharge);
this.userDefinedVanDerWaalRadius=radius;
this.setT$javajs_util_T3(xyz);
return this;
});

Clazz.newMeth(C$, 'setShapeVisibility$I$Z', function (flag, isVisible) {
if (isVisible) this.shapeVisibilityFlags|=flag;
 else this.shapeVisibilityFlags&=~flag;
});

Clazz.newMeth(C$, 'isCovalentlyBonded$org_jmol_modelset_Atom', function (atomOther) {
if (this.bonds != null ) for (var i=this.bonds.length; --i >= 0; ) if (this.bonds[i].isCovalent$() && this.bonds[i].getOtherAtom$org_jmol_modelset_Atom(this) === atomOther  ) return true;

return false;
});

Clazz.newMeth(C$, 'isBonded$org_jmol_modelset_Atom', function (atomOther) {
if (this.bonds != null ) for (var i=this.bonds.length; --i >= 0; ) if (this.bonds[i].getOtherAtom$org_jmol_modelset_Atom(this) === atomOther ) return true;

return false;
});

Clazz.newMeth(C$, 'getBond$org_jmol_modelset_Atom', function (atomOther) {
if (this.bonds != null ) for (var i=this.bonds.length; --i >= 0; ) if (this.bonds[i].getOtherAtom$org_jmol_modelset_Atom(atomOther) != null ) return this.bonds[i];

return null;
});

Clazz.newMeth(C$, 'addDisplayedBond$I$Z', function (stickVisibilityFlag, isVisible) {
this.nBondsDisplayed+=(isVisible ? 1 : -1);
this.setShapeVisibility$I$Z(stickVisibilityFlag, (this.nBondsDisplayed > 0));
});

Clazz.newMeth(C$, 'deleteBond$org_jmol_modelset_Bond', function (bond) {
if (this.bonds != null ) for (var i=this.bonds.length; --i >= 0; ) if (this.bonds[i] === bond ) {
p$1.deleteBondAt$I.apply(this, [i]);
return;
}
});

Clazz.newMeth(C$, 'deleteBondAt$I', function (i) {
this.setCIPChirality$I(0);
var newLength=this.bonds.length - 1;
if (newLength == 0) {
this.bonds=null;
return;
}var bondsNew=Clazz.array($I$(2), [newLength]);
var j=0;
for (; j < i; ++j) bondsNew[j]=this.bonds[j];

for (; j < newLength; ++j) bondsNew[j]=this.bonds[j + 1];

this.bonds=bondsNew;
}, p$1);

Clazz.newMeth(C$, 'getBondedAtomIndex$I', function (bondIndex) {
return this.bonds[bondIndex].getOtherAtom$org_jmol_modelset_Atom(this).i;
});

Clazz.newMeth(C$, 'setMadAtom$org_jmol_viewer_Viewer$org_jmol_atomdata_RadiusData', function (vwr, rd) {
this.madAtom=this.calculateMad$org_jmol_viewer_Viewer$org_jmol_atomdata_RadiusData(vwr, rd);
});

Clazz.newMeth(C$, 'calculateMad$org_jmol_viewer_Viewer$org_jmol_atomdata_RadiusData', function (vwr, rd) {
if (rd == null ) return $s$[0] = 0, $s$[0];
var f=rd.value;
if (f == 0 ) return $s$[0] = 0, $s$[0];
switch (rd.factorType) {
case $I$(3).SCREEN:
return ($s$[0] = f, $s$[0]);
case $I$(3).FACTOR:
case $I$(3).OFFSET:
var r=0;
switch (rd.vdwType) {
case $I$(4).TEMP:
var tmax=vwr.ms.getBfactor100Hi$();
r=(tmax > 0  ? this.getBfactor100$() / tmax : 0);
break;
case $I$(4).HYDRO:
r=Math.abs(this.getHydrophobicity$());
break;
case $I$(4).BONDING:
r=this.getBondingRadius$();
break;
case $I$(4).ADPMIN:
case $I$(4).ADPMAX:
r=this.getADPMinMax$Z(rd.vdwType === $I$(4).ADPMAX );
break;
default:
r=this.getVanderwaalsRadiusFloat$org_jmol_viewer_Viewer$org_jmol_c_VDW(vwr, rd.vdwType);
}
if (rd.factorType === $I$(3).FACTOR ) f *= r;
 else f += r;
break;
case $I$(3).ABSOLUTE:
if (f == 16.1 ) return C$.MAD_GLOBAL;
break;
}
var mad=($s$[0] = (f < 0  ? f : f * 2000), $s$[0]);
if (mad < 0 && f > 0  ) mad=($s$[0] = 0, $s$[0]);
return mad;
});

Clazz.newMeth(C$, 'getADPMinMax$Z', function (isMax) {
var tensors=this.getTensors$();
if (tensors == null ) return 0;
var t=tensors[0];
if (t == null  || t.iType != 1 ) return 0;
if (this.group.chain.model.ms.isModulated$I(this.i) && t.isUnmodulated ) t=tensors[1];
return t.getFactoredValue$I(isMax ? 2 : 1);
});

Clazz.newMeth(C$, 'getTensors$', function () {
return this.group.chain.model.ms.getAtomTensorList$I(this.i);
});

Clazz.newMeth(C$, 'getRasMolRadius$', function () {
return Math.abs(($s$[0] = this.madAtom/8, $s$[0]));
});

Clazz.newMeth(C$, 'getEdges$', function () {
return (this.bonds == null  ? Clazz.array($I$(5), [0]) : this.bonds);
});

Clazz.newMeth(C$, 'getBondCount$', function () {
return (this.bonds == null  ? 0 : this.bonds.length);
});

Clazz.newMeth(C$, 'setTranslucent$Z$F', function (isTranslucent, translucentLevel) {
this.colixAtom=$I$(6).getColixTranslucent3$H$Z$F(this.colixAtom, isTranslucent, translucentLevel);
});

Clazz.newMeth(C$, 'getElementNumber$', function () {
return $I$(7).getElementNumber$I(this.atomicAndIsotopeNumber);
});

Clazz.newMeth(C$, 'getIsotopeNumber$', function () {
return $I$(7).getIsotopeNumber$I(this.atomicAndIsotopeNumber);
});

Clazz.newMeth(C$, 'getAtomicAndIsotopeNumber$', function () {
return this.atomicAndIsotopeNumber;
});

Clazz.newMeth(C$, 'setAtomicAndIsotopeNumber$I', function (n) {
if (n < 0 || (n & 127) >= $I$(7).elementNumberMax  || n > 32767 ) n=0;
this.atomicAndIsotopeNumber=($s$[0] = n, $s$[0]);
});

Clazz.newMeth(C$, 'getElementSymbolIso$Z', function (withIsotope) {
return $I$(7).elementSymbolFromNumber$I(withIsotope ? this.atomicAndIsotopeNumber : this.atomicAndIsotopeNumber & 127);
});

Clazz.newMeth(C$, 'getElementSymbol$', function () {
return this.getElementSymbolIso$Z(true);
});

Clazz.newMeth(C$, 'isHetero$', function () {
return (this.formalChargeAndFlags & 2) != 0;
});

Clazz.newMeth(C$, 'hasVibration$', function () {
return (this.formalChargeAndFlags & 1) != 0;
});

Clazz.newMeth(C$, 'setFormalCharge$I', function (charge) {
this.formalChargeAndFlags=(this.formalChargeAndFlags & 15) | ((charge == -2147483648 ? 0 : charge > 7 ? 7 : charge < -3 ? -3 : charge) << 24);
});

Clazz.newMeth(C$, 'setVibrationVector$', function () {
this.formalChargeAndFlags|=1;
});

Clazz.newMeth(C$, 'getFormalCharge$', function () {
return this.formalChargeAndFlags >> 24;
});

Clazz.newMeth(C$, 'getOccupancy100$', function () {
var occupancies=this.group.chain.model.ms.occupancies;
return (occupancies == null  ? 100 : Math.round(occupancies[this.i]));
});

Clazz.newMeth(C$, 'isOccupied$', function () {
var occupancies=this.group.chain.model.ms.occupancies;
return (occupancies == null  || occupancies[this.i] >= 50  );
});

Clazz.newMeth(C$, 'getBfactor100$', function () {
var bfactor100s=this.group.chain.model.ms.bfactor100s;
return (bfactor100s == null  ? ($s$[0] = 0, $s$[0]) : bfactor100s[this.i]);
});

Clazz.newMeth(C$, 'getHydrophobicity$', function () {
var values=this.group.chain.model.ms.hydrophobicities;
return (values == null  ? $I$(7).getHydrophobicity$I(this.group.groupID) : values[this.i]);
});

Clazz.newMeth(C$, 'setRadius$F', function (radius) {
return !Float.isNaN$F(this.userDefinedVanDerWaalRadius=(radius > 0  ? radius : NaN));
});

Clazz.newMeth(C$, 'delete$javajs_util_BS', function (bsBonds) {
this.valence=($b$[0] = -1, $b$[0]);
if (this.bonds != null ) for (var i=this.bonds.length; --i >= 0; ) {
var bond=this.bonds[i];
bond.getOtherAtom$org_jmol_modelset_Atom(this).deleteBond$org_jmol_modelset_Bond(bond);
bsBonds.set$I(bond.index);
}
this.bonds=null;
});

Clazz.newMeth(C$, 'isDeleted$', function () {
return (this.valence < 0);
});

Clazz.newMeth(C$, 'setValence$I', function (nBonds) {
if (!this.isDeleted$()) this.valence=($b$[0] = (nBonds < 0 ? 0 : nBonds <= 127 ? nBonds : 127), $b$[0]);
});

Clazz.newMeth(C$, 'getValence$', function () {
if (this.isDeleted$()) return -1;
var n=this.valence;
if (n == 0 && this.bonds != null  ) for (var i=this.bonds.length; --i >= 0; ) n+=this.bonds[i].getValence$();

return n;
});

Clazz.newMeth(C$, 'getCovalentBondCount$', function () {
if (this.bonds == null ) return 0;
var n=0;
var b;
for (var i=this.bonds.length; --i >= 0; ) if (((b=this.bonds[i]).order & 1023) != 0 && !b.getOtherAtom$org_jmol_modelset_Atom(this).isDeleted$() ) ++n;

return n;
});

Clazz.newMeth(C$, 'getCovalentHydrogenCount$', function () {
if (this.bonds == null ) return 0;
var n=0;
for (var i=this.bonds.length; --i >= 0; ) {
if ((this.bonds[i].order & 1023) == 0) continue;
var a=this.bonds[i].getOtherAtom$org_jmol_modelset_Atom(this);
if (a.valence >= 0 && a.getElementNumber$() == 1 ) ++n;
}
return n;
});

Clazz.newMeth(C$, 'getImplicitHydrogenCount$', function () {
return this.group.chain.model.ms.getMissingHydrogenCount$org_jmol_modelset_Atom$Z(this, false);
});

Clazz.newMeth(C$, 'getTotalHydrogenCount$', function () {
return this.getCovalentHydrogenCount$() + this.getImplicitHydrogenCount$();
});

Clazz.newMeth(C$, 'getTotalValence$', function () {
var v=this.getValence$();
if (v < 0) return v;
var h=this.getImplicitHydrogenCount$();
var sp2=this.group.chain.model.ms.aaRet[4];
return v + h + sp2 ;
});

Clazz.newMeth(C$, 'getCovalentBondCountPlusMissingH$', function () {
return this.getCovalentBondCount$() + this.getImplicitHydrogenCount$();
});

Clazz.newMeth(C$, 'getTargetValence$', function () {
switch (this.getElementNumber$()) {
case 6:
case 14:
case 32:
return 4;
case 5:
case 7:
case 15:
return 3;
case 8:
case 16:
return 2;
case 1:
case 9:
case 17:
case 35:
case 53:
return 1;
}
return -1;
});

Clazz.newMeth(C$, 'getDimensionValue$I', function (dimension) {
return (dimension == 0 ? this.x : (dimension == 1 ? this.y : this.z));
});

Clazz.newMeth(C$, 'getVanderwaalsRadiusFloat$org_jmol_viewer_Viewer$org_jmol_c_VDW', function (vwr, type) {
return (Float.isNaN$F(this.userDefinedVanDerWaalRadius) ? vwr.getVanderwaalsMarType$I$org_jmol_c_VDW(this.atomicAndIsotopeNumber, p$1.getVdwType$org_jmol_c_VDW.apply(this, [type])) / 1000.0 : this.userDefinedVanDerWaalRadius);
});

Clazz.newMeth(C$, 'getVdwType$org_jmol_c_VDW', function (type) {
switch (type) {
case $I$(4).AUTO:
type=this.group.chain.model.ms.getDefaultVdwType$I(this.mi);
break;
case $I$(4).NOJMOL:
type=this.group.chain.model.ms.getDefaultVdwType$I(this.mi);
if (type === $I$(4).AUTO_JMOL ) type=$I$(4).AUTO_BABEL;
break;
}
return type;
}, p$1);

Clazz.newMeth(C$, 'getBondingRadius$', function () {
var rr=this.group.chain.model.ms.bondingRadii;
var r=(rr == null  ? 0 : rr[this.i]);
return (r == 0  ? (function(a,f){return f.apply(null,a)})([this.atomicAndIsotopeNumber, this.getFormalCharge$()],$I$(7).getBondingRadius$I$I) : r);
});

Clazz.newMeth(C$, 'getVolume$org_jmol_viewer_Viewer$org_jmol_c_VDW', function (vwr, vType) {
var r1=(vType == null  ? this.userDefinedVanDerWaalRadius : NaN);
if (Float.isNaN$F(r1)) r1=vwr.getVanderwaalsMarType$I$org_jmol_c_VDW(this.getElementNumber$(), p$1.getVdwType$org_jmol_c_VDW.apply(this, [vType])) / 1000.0;
var volume=0;
if (this.bonds != null ) for (var j=0; j < this.bonds.length; j++) {
if (!this.bonds[j].isCovalent$()) continue;
var atom2=this.bonds[j].getOtherAtom$org_jmol_modelset_Atom(this);
var r2=(vType == null  ? atom2.userDefinedVanDerWaalRadius : NaN);
if (Float.isNaN$F(r2)) r2=vwr.getVanderwaalsMarType$I$org_jmol_c_VDW(atom2.getElementNumber$(), p$1.getVdwType$org_jmol_c_VDW.apply(atom2, [vType])) / 1000.0;
var d=this.distance$javajs_util_T3(atom2);
if (d > r1 + r2 ) continue;
if (d + r1 <= r2 ) return 0;
var h=r1 - (r1 * r1 + d * d - r2 * r2) / (2.0 * d);
volume -= 1.0471975511965976 * h * h * (3 * r1 - h);
}
return (volume + 4.1887902047863905 * r1 * r1 * r1);
});

Clazz.newMeth(C$, 'getCurrentBondCount$', function () {
return this.bonds == null  ? 0 : this.bonds.length;
});

Clazz.newMeth(C$, 'getRadius$', function () {
return Math.abs(this.madAtom / 2000.0);
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.i;
});

Clazz.newMeth(C$, 'getAtomSite$', function () {
return this.atomSite;
});

Clazz.newMeth(C$, 'getGroupBits$javajs_util_BS', function (bs) {
this.group.setAtomBits$javajs_util_BS(bs);
});

Clazz.newMeth(C$, 'getAtomName$', function () {
return (this.atomID > 0 ? $I$(8).specialAtomNames[this.atomID] : this.group.chain.model.ms.atomNames[this.i]);
});

Clazz.newMeth(C$, 'getAtomType$', function () {
var atomTypes=this.group.chain.model.ms.atomTypes;
var type=(atomTypes == null  ? null : atomTypes[this.i]);
return (type == null  ? this.getAtomName$() : type);
});

Clazz.newMeth(C$, 'getAtomNumber$', function () {
var atomSerials=this.group.chain.model.ms.atomSerials;
return (atomSerials == null  ? this.i : atomSerials[this.i]);
});

Clazz.newMeth(C$, 'getSeqID$', function () {
var ids=this.group.chain.model.ms.atomSeqIDs;
return (ids == null  ? 0 : ids[this.i]);
});

Clazz.newMeth(C$, 'isVisible$I', function (flags) {
return ((this.shapeVisibilityFlags & flags) == flags);
});

Clazz.newMeth(C$, 'getPartialCharge$', function () {
var partialCharges=this.group.chain.model.ms.partialCharges;
return partialCharges == null  ? 0 : partialCharges[this.i];
});

Clazz.newMeth(C$, 'getSymmetryTranslation$I$IA$I', function (symop, cellRange, nOps) {
var pt=symop;
for (var i=0; i < cellRange.length; i++) if (this.atomSymmetry.get$I(pt+=nOps)) return cellRange[i];

return 0;
});

Clazz.newMeth(C$, 'getCellTranslation$I$IA$I', function (cellNNN, cellRange, nOps) {
var pt=nOps;
for (var i=0; i < cellRange.length; i++) for (var j=0; j < nOps; j++, pt++) if (this.atomSymmetry.get$I(pt) && cellRange[i] == cellNNN ) return cellRange[i];


return 0;
});

Clazz.newMeth(C$, 'getSymmetryOperatorList$Z', function (isAll) {
var str="";
var f=this.group.chain.model.ms;
var nOps=f.getModelSymmetryCount$I(this.mi);
if (nOps == 0 || this.atomSymmetry == null  ) return "";
var cellRange=f.getModelCellRange$I(this.mi);
var pt=nOps;
var n=(cellRange == null  ? 1 : cellRange.length);
var bs=(isAll ? null : Clazz.new_($I$(9,1)));
for (var i=0; i < n; i++) for (var j=0; j < nOps; j++) if (this.atomSymmetry.get$I(pt++)) if (isAll) {
str += "," + (j + 1) + cellRange[i] ;
} else {
bs.set$I(j + 1);
}

if (!isAll) for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) str += "," + i;

return (str.length$() == 0 ? "" : str.substring$I(1));
});

Clazz.newMeth(C$, 'getModelIndex$', function () {
return this.mi;
});

Clazz.newMeth(C$, 'getMoleculeNumber$Z', function (inModel) {
return (this.group.chain.model.ms.getMoleculeIndex$I$Z(this.i, inModel) + 1);
});

Clazz.newMeth(C$, 'getFractionalCoord$Z$C$Z$javajs_util_P3', function (fixJavaFloat, ch, ignoreOffset, pt) {
pt=this.getFractionalCoordPt$Z$Z$javajs_util_P3(fixJavaFloat, ignoreOffset, pt);
return (ch == "X" ? pt.x : ch == "Y" ? pt.y : pt.z);
}, p$1);

Clazz.newMeth(C$, 'getXYZ$', function () {
return this;
});

Clazz.newMeth(C$, 'getFractionalCoordPt$Z$Z$javajs_util_P3', function (fixJavaFloat, ignoreOffset, pt) {
var c=this.getUnitCell$();
if (c == null ) return this;
if (pt == null ) pt=$I$(10).newP$javajs_util_T3(this);
 else pt.setT$javajs_util_T3(this);
c.toFractional$javajs_util_T3$Z(pt, ignoreOffset);
if (fixJavaFloat) $I$(11).fixPtFloats$javajs_util_T3$F(pt, 100000.0);
return pt;
});

Clazz.newMeth(C$, 'getUnitCell$', function () {
return this.group.chain.model.ms.getUnitCellForAtom$I(this.i);
});

Clazz.newMeth(C$, 'getFractionalUnitCoord$Z$C$javajs_util_P3', function (fixJavaFloat, ch, pt) {
pt=this.getFractionalUnitCoordPt$Z$Z$javajs_util_P3(fixJavaFloat, false, pt);
return (ch == "X" ? pt.x : ch == "Y" ? pt.y : pt.z);
}, p$1);

Clazz.newMeth(C$, 'getFractionalUnitCoordPt$Z$Z$javajs_util_P3', function (fixJavaFloat, asCartesian, pt) {
var c=this.getUnitCell$();
if (c == null ) return this;
if (pt == null ) pt=$I$(10).newP$javajs_util_T3(this);
 else pt.setT$javajs_util_T3(this);
if (this.group.chain.model.isJmolDataFrame) {
c.toFractional$javajs_util_T3$Z(pt, false);
if (asCartesian) c.toCartesian$javajs_util_T3$Z(pt, false);
} else {
c.toUnitCell$javajs_util_T3$javajs_util_T3(pt, null);
if (!asCartesian) c.toFractional$javajs_util_T3$Z(pt, false);
}if (fixJavaFloat) $I$(11).fixPtFloats$javajs_util_T3$F(pt, asCartesian ? 10000.0 : 100000.0);
return pt;
});

Clazz.newMeth(C$, 'getFractionalUnitDistance$javajs_util_T3$javajs_util_T3$javajs_util_T3', function (pt, ptTemp1, ptTemp2) {
var c=this.getUnitCell$();
if (c == null ) return this.distance$javajs_util_T3(pt);
ptTemp1.setT$javajs_util_T3(this);
ptTemp2.setT$javajs_util_T3(pt);
if (this.group.chain.model.isJmolDataFrame) {
c.toFractional$javajs_util_T3$Z(ptTemp1, true);
c.toFractional$javajs_util_T3$Z(ptTemp2, true);
} else {
c.toUnitCell$javajs_util_T3$javajs_util_T3(ptTemp1, null);
c.toUnitCell$javajs_util_T3$javajs_util_T3(ptTemp2, null);
}return ptTemp1.distance$javajs_util_T3(ptTemp2);
});

Clazz.newMeth(C$, 'setFractionalCoord$I$F$Z', function (tok, fValue, asAbsolute) {
var c=this.getUnitCell$();
if (c != null ) c.toFractional$javajs_util_T3$Z(this, asAbsolute);
switch (tok) {
case 1111492615:
case 1111492612:
this.x=fValue;
break;
case 1111492616:
case 1111492613:
this.y=fValue;
break;
case 1111492617:
case 1111492614:
this.z=fValue;
break;
}
if (c != null ) c.toCartesian$javajs_util_T3$Z(this, asAbsolute);
});

Clazz.newMeth(C$, 'setFractionalCoordTo$javajs_util_P3$Z', function (ptNew, asAbsolute) {
this.setFractionalCoordPt$javajs_util_P3$javajs_util_P3$Z(this, ptNew, asAbsolute);
});

Clazz.newMeth(C$, 'setFractionalCoordPt$javajs_util_P3$javajs_util_P3$Z', function (pt, ptNew, asAbsolute) {
pt.setT$javajs_util_T3(ptNew);
var c=this.getUnitCell$();
if (c != null ) c.toCartesian$javajs_util_T3$Z(pt, asAbsolute && !this.group.chain.model.isJmolDataFrame );
});

Clazz.newMeth(C$, 'isCursorOnTopOf$I$I$I$org_jmol_modelset_Atom', function (xCursor, yCursor, minRadius, competitor) {
var r=($s$[0] = this.sD/2, $s$[0]);
if (r < minRadius) r=minRadius;
var r2=r * r;
var dx=this.sX - xCursor;
var dx2=dx * dx;
if (dx2 > r2) return false;
var dy=this.sY - yCursor;
var dy2=dy * dy;
var dz2=r2 - (dx2 + dy2);
if (dz2 < 0) return false;
if (competitor == null ) return true;
var z=this.sZ;
var zCompetitor=competitor.sZ;
var rCompetitor=($s$[0] = competitor.sD/2, $s$[0]);
if (z < zCompetitor - rCompetitor) return true;
var dxCompetitor=competitor.sX - xCursor;
var dx2Competitor=dxCompetitor * dxCompetitor;
var dyCompetitor=competitor.sY - yCursor;
var dy2Competitor=dyCompetitor * dyCompetitor;
var r2Competitor=rCompetitor * rCompetitor;
var dz2Competitor=r2Competitor - (dx2Competitor + dy2Competitor);
return (z - Math.sqrt(dz2) < zCompetitor - Math.sqrt(dz2Competitor) );
});

Clazz.newMeth(C$, 'getInfo$', function () {
return this.getIdentity$Z(true);
});

Clazz.newMeth(C$, 'getIdentityXYZ$Z$javajs_util_P3', function (allInfo, pt) {
pt=(this.group.chain.model.isJmolDataFrame ? this.getFractionalCoordPt$Z$Z$javajs_util_P3(!this.group.chain.model.ms.vwr.g.legacyJavaFloat, false, pt) : this);
return this.getIdentity$Z(allInfo) + " " + $I$(11).formatF$F$I$I$Z$Z(pt.x, 0, 3, true, true) + " " + $I$(11).formatF$F$I$I$Z$Z(pt.y, 0, 3, true, true) + " " + $I$(11).formatF$F$I$I$Z$Z(pt.z, 0, 3, true, true) ;
});

Clazz.newMeth(C$, 'getIdentity$Z', function (allInfo) {
var info=Clazz.new_($I$(12,1));
var group3=this.getGroup3$Z(true);
if (group3 != null  && group3.length$() > 0  && (!group3.equals$O("UNK") || this.group.chain.model.isBioModel ) ) {
info.append$S("[");
info.append$S(group3);
info.append$S("]");
var seqcodeString=this.group.getSeqcodeString$();
if (seqcodeString != null ) info.append$S(seqcodeString);
var chainID=this.group.chain.chainID;
if (chainID != 0 && chainID != 32 ) {
info.append$S(":");
var s=this.getChainIDStr$();
if (chainID >= 256) s=$I$(11).esc$S(s);
info.append$S(s);
}if (!allInfo) return info.toString();
info.append$S(".");
}info.append$S(this.getAtomName$());
if (info.length$() == 0) {
info.append$S(this.getElementSymbolIso$Z(false));
info.append$S(" ");
info.appendI$I(this.getAtomNumber$());
}if (this.altloc != "\u0000") {
info.append$S("%");
info.appendC$C(this.altloc);
}if (this.group.chain.model.ms.mc > 1 && !this.group.chain.model.isJmolDataFrame ) {
info.append$S("/");
info.append$S(this.getModelNumberForLabel$());
}info.append$S(" #");
info.appendI$I(this.getAtomNumber$());
return info.toString();
});

Clazz.newMeth(C$, 'getGroup3$Z', function (allowNull) {
var group3=this.group.getGroup3$();
return (allowNull || group3 != null  && group3.length$() > 0   ? group3 : "UNK");
});

Clazz.newMeth(C$, 'getGroup1$C', function (c0) {
var c=this.group.getGroup1$();
return (c != "\u0000" ? "" + c : c0 != "\u0000" ? "" + c0 : "");
});

Clazz.newMeth(C$, 'getBioSmilesType$', function () {
return (this.group.isProtein$() ? "p" : this.group.isDna$() ? "d" : this.group.isRna$() ? "r" : this.group.isCarbohydrate$() ? "c" : " ");
});

Clazz.newMeth(C$, 'isPurine$', function () {
return this.group.isPurine$();
});

Clazz.newMeth(C$, 'isPyrimidine$', function () {
return this.group.isPyrimidine$();
});

Clazz.newMeth(C$, 'getResno$', function () {
return this.group.getResno$();
});

Clazz.newMeth(C$, 'isClickable$', function () {
return (this.checkVisible$() && this.clickabilityFlags != 0  && ((this.shapeVisibilityFlags | this.group.shapeVisibilityFlags) & this.clickabilityFlags) != 0 );
});

Clazz.newMeth(C$, 'setClickable$I', function (flag) {
if (flag == 0) {
this.clickabilityFlags=0;
} else {
this.clickabilityFlags|=flag;
if (flag != 1040384) this.shapeVisibilityFlags|=flag;
}});

Clazz.newMeth(C$, 'checkVisible$', function () {
if (this.isVisible$I(2)) return this.isVisible$I(4);
var isVis=this.isVisible$I(9);
if (isVis) {
var flags=this.shapeVisibilityFlags;
if (this.group.shapeVisibilityFlags != 0 && (this.group.shapeVisibilityFlags != 8192 || this.isLeadAtom$() ) ) flags|=this.group.shapeVisibilityFlags;
flags&=-10;
if (flags == 32 && this.clickabilityFlags == 0 ) flags=0;
isVis=(flags != 0);
if (isVis) this.shapeVisibilityFlags|=4;
}this.shapeVisibilityFlags|=2;
return isVis;
});

Clazz.newMeth(C$, 'isLeadAtom$', function () {
return this.group.isLeadAtom$I(this.i);
});

Clazz.newMeth(C$, 'getChainID$', function () {
return this.group.chain.chainID;
});

Clazz.newMeth(C$, 'getChainIDStr$', function () {
return this.group.chain.getIDStr$();
});

Clazz.newMeth(C$, 'getSurfaceDistance100$', function () {
return this.group.chain.model.ms.getSurfaceDistance100$I(this.i);
});

Clazz.newMeth(C$, 'getVibrationVector$', function () {
return this.group.chain.model.ms.getVibration$I$Z(this.i, false);
});

Clazz.newMeth(C$, 'getModulation$', function () {
return this.group.chain.model.ms.getModulation$I(this.i);
});

Clazz.newMeth(C$, 'getModelNumberForLabel$', function () {
return this.group.chain.model.ms.getModelNumberForAtomLabel$I(this.mi);
});

Clazz.newMeth(C$, 'getModelNumber$', function () {
return this.group.chain.model.ms.getModelNumber$I(this.mi) % 1000000;
});

Clazz.newMeth(C$, 'getBioStructureTypeName$', function () {
return this.group.getProteinStructureType$().getBioStructureTypeName$Z(true);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return (this === obj );
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.i;
});

Clazz.newMeth(C$, 'findAromaticNeighbor$I', function (notAtomIndex) {
if (this.bonds == null ) return null;
for (var i=this.bonds.length; --i >= 0; ) {
var bondT=this.bonds[i];
var a=bondT.getOtherAtom$org_jmol_modelset_Atom(this);
if (bondT.isAromatic$() && a.i != notAtomIndex ) return a;
}
return null;
});

Clazz.newMeth(C$, 'atomPropertyInt$I', function (tokWhat) {
switch (tokWhat) {
case 1094715393:
return this.getAtomNumber$();
case 1094713365:
return this.getSeqID$();
case 1094713346:
return this.atomID;
case 1094713368:
return Math.max(0, this.altloc.$c() - 32);
case 1094713347:
return this.i;
case 1228931587:
return this.getCovalentBondCount$();
case 1094713351:
return this.group.chain.chainNo;
case 1765808134:
return this.group.chain.model.ms.vwr.gdata.getColorArgbOrGray$H(this.colixAtom);
case 1086326789:
case 1094715402:
return this.getElementNumber$();
case 1094713353:
return this.atomicAndIsotopeNumber;
case 1228935687:
return this.group.chain.model.fileIndex + 1;
case 1631586315:
return this.getFormalCharge$();
case 1094713356:
return this.group.groupID;
case 1094713357:
return this.group.groupIndex;
case 1094717454:
return this.getModelNumber$();
case -1094717454:
return this.group.chain.model.ms.modelFileNumbers[this.mi];
case 1094713359:
return this.mi;
case 1094713360:
return this.getMoleculeNumber$Z(true);
case 1094713361:
return this.group.getMonomerIndex$() + 1;
case 1128269825:
return this.getOccupancy100$();
case 1094713362:
return this.group.getBioPolymerIndexInModel$() + 1;
case 1094713363:
return this.group.getBioPolymerLength$();
case 1665140738:
return this.getRasMolRadius$();
case 1094715412:
return this.getResno$();
case 1094713366:
return this.getAtomSite$();
case 1639976963:
return this.group.getProteinStructureType$().getId$();
case 1237320707:
return this.group.getProteinStructureSubType$().getId$();
case 1094713367:
return this.group.getStrucNo$();
case 1296041986:
return this.getSymOp$();
case 1094715417:
return this.getValence$();
}
return 0;
});

Clazz.newMeth(C$, 'getSymOp$', function () {
return (this.atomSymmetry == null  ? 0 : this.atomSymmetry.nextSetBit$I(0) + 1);
});

Clazz.newMeth(C$, 'atomPropertyFloat$org_jmol_viewer_Viewer$I$javajs_util_P3', function (vwr, tokWhat, ptTemp) {
switch (tokWhat) {
case 1111490561:
return this.getADPMinMax$Z(true);
case 1111490562:
return this.getADPMinMax$Z(false);
case 1111492609:
case 1111492629:
return this.x;
case 1111492610:
case 1111492630:
return this.y;
case 1111492611:
case 1111492631:
return this.z;
case 1111490587:
return this.group.chain.model.ms.getAtomicDSSRData$I(this.i);
case 1114249217:
case 1112152066:
case 1112150019:
case 1112150020:
case 1112150021:
case 1112152070:
case 1112152071:
case 1112152073:
case 1112152074:
case 1112152076:
case 1649022989:
case 1112152078:
return vwr.shm.getAtomShapeValue$I$org_jmol_modelset_Group$I(tokWhat, this.group, this.i);
case 1111492618:
return this.getBondingRadius$();
case 1111490563:
return vwr.getNMRCalculation$().getChemicalShift$org_jmol_modelset_Atom(this);
case 1111490564:
return $I$(7).getCovalentRadius$I(this.atomicAndIsotopeNumber);
case 1111490565:
case 1111490576:
case 1111490574:
return this.group.getGroupParameter$I(tokWhat);
case 1111492615:
case 1111492612:
return p$1.getFractionalCoord$Z$C$Z$javajs_util_P3.apply(this, [!vwr.g.legacyJavaFloat, "X", false, ptTemp]);
case 1111492616:
case 1111492613:
return p$1.getFractionalCoord$Z$C$Z$javajs_util_P3.apply(this, [!vwr.g.legacyJavaFloat, "Y", false, ptTemp]);
case 1111492617:
case 1111492614:
return p$1.getFractionalCoord$Z$C$Z$javajs_util_P3.apply(this, [!vwr.g.legacyJavaFloat, "Z", false, ptTemp]);
case 1113589786:
return this.getHydrophobicity$();
case 1111490566:
return vwr.getNMRCalculation$().getMagneticShielding$org_jmol_modelset_Atom(this);
case 1111490567:
return this.getMass$();
case 1128269825:
return this.getOccupancy100$() / 100.0;
case 1111492619:
return this.getPartialCharge$();
case 1111490569:
case 1111490570:
case 1111490568:
if (this.group.chain.model.isJmolDataFrame && this.group.chain.model.jmolFrameType.startsWith$S("plot ramachandran") ) {
switch (tokWhat) {
case 1111490569:
return p$1.getFractionalCoord$Z$C$Z$javajs_util_P3.apply(this, [!vwr.g.legacyJavaFloat, "X", false, ptTemp]);
case 1111490570:
return p$1.getFractionalCoord$Z$C$Z$javajs_util_P3.apply(this, [!vwr.g.legacyJavaFloat, "Y", false, ptTemp]);
case 1111490568:
if (this.group.chain.model.isJmolDataFrame && this.group.chain.model.jmolFrameType.equals$O("plot ramachandran") ) {
var omega=p$1.getFractionalCoord$Z$C$Z$javajs_util_P3.apply(this, [!vwr.g.legacyJavaFloat, "Z", false, ptTemp]) - 180;
return (omega < -180  ? 360 + omega : omega);
}}
}return this.group.getGroupParameter$I(tokWhat);
case 1665140738:
case 1112152075:
return this.getRadius$();
case 1111490571:
return (vwr.antialiased ? (this.sX/2|0) : this.sX);
case 1111490572:
return vwr.getScreenHeight$() - (vwr.antialiased ? (this.sY/2|0) : this.sY);
case 1111490573:
return (vwr.antialiased ? (this.sZ/2|0) : this.sZ);
case 1113589787:
return (vwr.slm.isAtomSelected$I(this.i) ? 1 : 0);
case 1111490575:
vwr.ms.getSurfaceDistanceMax$();
return this.getSurfaceDistance100$() / 100.0;
case 1111492620:
return this.getBfactor100$() / 100.0;
case 1111490577:
return p$1.getFractionalUnitCoord$Z$C$javajs_util_P3.apply(this, [!vwr.g.legacyJavaFloat, "X", ptTemp]);
case 1111490578:
return p$1.getFractionalUnitCoord$Z$C$javajs_util_P3.apply(this, [!vwr.g.legacyJavaFloat, "Y", ptTemp]);
case 1111490579:
return p$1.getFractionalUnitCoord$Z$C$javajs_util_P3.apply(this, [!vwr.g.legacyJavaFloat, "Z", ptTemp]);
case 1648363544:
return this.getVanderwaalsRadiusFloat$org_jmol_viewer_Viewer$org_jmol_c_VDW(vwr, $I$(4).AUTO);
case 1648361473:
var v=this.getVibrationVector$();
return (v == null  ? 0 : v.length$() * vwr.getFloat$I(1648361473));
case 1111492626:
return this.getVib$C("x");
case 1111492627:
return this.getVib$C("y");
case 1111492628:
return this.getVib$C("z");
case 1111490583:
return this.getVib$C("X");
case 1111490584:
return this.getVib$C("Y");
case 1111490585:
return this.getVib$C("Z");
case 1111490586:
return this.getVib$C("O");
case 1111490580:
return this.getVib$C("1");
case 1111490581:
return this.getVib$C("2");
case 1111490582:
return this.getVib$C("3");
case 1312817669:
return this.getVolume$org_jmol_viewer_Viewer$org_jmol_c_VDW(vwr, $I$(4).AUTO);
case 1145047051:
case 1145047053:
case 1145045006:
case 1145047052:
case 1145047055:
case 1145045008:
case 1145047050:
var v3=this.atomPropertyTuple$org_jmol_viewer_Viewer$I$javajs_util_P3(vwr, tokWhat, ptTemp);
return (v3 == null  ? -1 : v3.length$());
}
return this.atomPropertyInt$I(tokWhat);
});

Clazz.newMeth(C$, 'getVib$C', function (ch) {
return this.group.chain.model.ms.getVibCoord$I$C(this.i, ch);
});

Clazz.newMeth(C$, 'getNominalMass$', function () {
var mass=this.getIsotopeNumber$();
return (mass > 0 ? mass : (function(a,f){return f.apply(null,a)})([this.getElementNumber$()],$I$(7).getNaturalIsotope$I));
});

Clazz.newMeth(C$, 'getMass$', function () {
var mass=this.getIsotopeNumber$();
return (mass > 0  ? mass : (function(a,f){return f.apply(null,a)})([this.getElementNumber$()],$I$(7).getAtomicMass$I));
});

Clazz.newMeth(C$, 'atomPropertyString$org_jmol_viewer_Viewer$I', function (vwr, tokWhat) {
var ch;
var s;
switch (tokWhat) {
case 1086324739:
ch=this.altloc;
return (ch == "\u0000" ? "" : "" + ch);
case 1086326786:
return this.getAtomName$();
case 1086326785:
return this.getAtomType$();
case 1086326788:
return this.getChainIDStr$();
case 1086324752:
return this.getCIPChirality$Z(true);
case 1086324753:
return this.getCIPChiralityRule$();
case 1086324744:
return this.getGroup1$C("?");
case 1086324747:
s=this.group.getSeqcodeString$();
return (s == null  ? "" : s);
case 1086324743:
return this.getGroup1$C("\u0000");
case 1086324742:
return this.getGroup3$Z(false);
case 1086326789:
return this.getElementSymbolIso$Z(true);
case 1086324745:
return this.getIdentity$Z(true);
case 1086324746:
ch=this.group.getInsertionCode$();
return (ch == "\u0000" ? "" : "" + ch);
case 1825200146:
case 1287653388:
s=vwr.shm.getShapePropertyIndex$I$S$I(5, "label", this.i);
if (s == null ) s="";
return s;
case 1639976963:
return this.group.getProteinStructureType$().getBioStructureTypeName$Z(false);
case 1237320707:
return this.group.getProteinStructureSubType$().getBioStructureTypeName$Z(false);
case 1086324749:
return this.group.getStructureId$();
case 1086324748:
return vwr.getHybridizationAndAxes$I$javajs_util_V3$javajs_util_V3$S(this.i, null, null, "d");
case 1086326798:
return this.getElementSymbolIso$Z(false);
case 1088421903:
return this.getSymmetryOperatorList$Z(true);
}
return "";
});

Clazz.newMeth(C$, 'getCIPChirality$Z', function (doCalculate) {
var flags=(this.formalChargeAndFlags & 496) >> 4;
if (flags == 0 && this.atomicAndIsotopeNumber > 1  && doCalculate ) {
flags=this.group.chain.model.ms.getAtomCIPChiralityCode$org_jmol_modelset_Atom(this);
this.formalChargeAndFlags|=((flags == 0 ? 3 : flags) << 4);
}return ($I$(13).getCIPChiralityName$I(flags));
});

Clazz.newMeth(C$, 'getCIPChiralityRule$', function () {
var rs=this.getCIPChirality$Z(true);
var flags=(rs.length$() == 0 ? -1 : (this.formalChargeAndFlags & 3584) >> 9);
return $I$(13).getCIPRuleName$I(flags + 1);
});

Clazz.newMeth(C$, 'setCIPChirality$I', function (c) {
this.formalChargeAndFlags=(this.formalChargeAndFlags & ~4080) | (c << 4);
});

Clazz.newMeth(C$, 'getCIPChiralityCode$', function () {
return (this.formalChargeAndFlags & 496) >> 4;
});

Clazz.newMeth(C$, 'getInsertionCode$', function () {
return this.group.getInsertionCode$();
});

Clazz.newMeth(C$, 'atomPropertyTuple$org_jmol_viewer_Viewer$I$javajs_util_P3', function (vwr, tok, ptTemp) {
switch (tok) {
case 1073742329:
return $I$(10).newP$javajs_util_T3(this);
case 1145047051:
return this.getFractionalCoordPt$Z$Z$javajs_util_P3(!vwr.g.legacyJavaFloat, false, ptTemp);
case 1145047053:
return this.getFractionalCoordPt$Z$Z$javajs_util_P3(!vwr.g.legacyJavaFloat, false, ptTemp);
case 1145045006:
return (this.group.chain.model.isJmolDataFrame ? this.getFractionalCoordPt$Z$Z$javajs_util_P3(!vwr.g.legacyJavaFloat, false, ptTemp) : this.getFractionalUnitCoordPt$Z$Z$javajs_util_P3(!vwr.g.legacyJavaFloat, false, ptTemp));
case 1145047052:
return (function(a,f){return f.apply(null,a)})([vwr.antialiased ? (this.sX/2|0) : this.sX, vwr.getScreenHeight$() - (vwr.antialiased ? (this.sY/2|0) : this.sY), vwr.antialiased ? (this.sZ/2|0) : this.sZ],$I$(10).new3$F$F$F);
case 1145047055:
return this.getVibrationVector$();
case 1145045008:
var ms=this.getModulation$();
return (ms == null  ? null : ms.getV3$());
case 1145047050:
return this;
case 1765808134:
return (function(a,f){return f.apply(null,a)})([this.group.chain.model.ms.vwr.gdata.getColorArgbOrGray$H(this.colixAtom), ptTemp],$I$(14).colorPtFromInt$I$javajs_util_P3);
}
return null;
});

Clazz.newMeth(C$, 'getOffsetResidueAtom$S$I', function (name, offset) {
return this.group.getAtomIndex$S$I(name, offset);
});

Clazz.newMeth(C$, 'isCrossLinked$org_jmol_util_Node', function (node) {
return this.group.isCrossLinked$org_jmol_modelset_Group((node).group);
});

Clazz.newMeth(C$, 'getCrossLinkVector$javajs_util_Lst$Z$Z', function (vReturn, crosslinkCovalent, crosslinkHBond) {
return this.group.getCrossLinkVector$javajs_util_Lst$Z$Z(vReturn, crosslinkCovalent, crosslinkHBond);
});

Clazz.newMeth(C$, 'toString', function () {
return this.getInfo$();
});

Clazz.newMeth(C$, 'findAtomsLike$S', function (atomExpression) {
return this.group.chain.model.ms.vwr.getAtomBitSet$O(atomExpression);
});

Clazz.newMeth(C$, 'getUnitID$I', function (flags) {
var m=this.group.chain.model;
return (m.isBioModel ? (m).getUnitID$org_jmol_modelset_Atom$I(this, flags) : "");
});

Clazz.newMeth(C$, 'getFloatProperty$S', function (property) {
var data=this.group.chain.model.ms.vwr.getDataObj$S$javajs_util_BS$I(property, null, 1);
var f=NaN;
if (data != null ) {
try {
f=(data)[this.i];
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}return f;
});

Clazz.newMeth(C$, 'modelIsRawPDB$', function () {
var m=this.group.chain.model;
return (m.isBioModel && !m.isPdbWithMultipleBonds && m.hydrogenCount == 0  );
});

C$.$static$=function(){C$.$static$=0;
C$.MAD_GLOBAL=($s$[0] = 32200, $s$[0]);
};
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:12 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
