(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),I$=[[0,'org.jmol.c.STR','org.jmol.modelsetbio.Helix','org.jmol.modelsetbio.Sheet','org.jmol.modelsetbio.Turn','javajs.util.V3','javajs.util.Quat']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AlphaMonomer", null, 'org.jmol.modelsetbio.Monomer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['proteinStructure','org.jmol.modelsetbio.ProteinStructure','nitrogenHydrogenPoint','javajs.util.P3']]
,['O',['alphaOffsets','byte[]']]]

Clazz.newMeth(C$, 'isProtein$', function () {
return true;
});

Clazz.newMeth(C$, 'validateAndAllocateA$org_jmol_modelset_Chain$S$I$I$I$IA', function (chain, group3, seqcode, firstIndex, lastIndex, specialAtomIndexes) {
return (firstIndex != lastIndex || specialAtomIndexes[2] != firstIndex  ? null : Clazz.new_(C$).set2$org_jmol_modelset_Chain$S$I$I$I$BA(chain, group3, seqcode, firstIndex, lastIndex, C$.alphaOffsets));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'isAlphaMonomer$', function () {
return true;
});

Clazz.newMeth(C$, 'getStructure$', function () {
return this.proteinStructure;
});

Clazz.newMeth(C$, 'setStructure$org_jmol_modelsetbio_ProteinStructure', function (ps) {
if ((this.proteinStructure=ps) == null ) this.nitrogenHydrogenPoint=null;
});

Clazz.newMeth(C$, 'setStrucNo$I', function (n) {
if (this.proteinStructure != null ) this.proteinStructure.strucNo=n;
});

Clazz.newMeth(C$, 'getProteinStructureType$', function () {
return this.proteinStructure == null  ? $I$(1).NONE : this.proteinStructure.type;
});

Clazz.newMeth(C$, 'getProteinStructureSubType$', function () {
return this.proteinStructure == null  ? $I$(1).NONE : this.proteinStructure.subtype;
});

Clazz.newMeth(C$, 'getStrucNo$', function () {
return this.proteinStructure != null  ? this.proteinStructure.strucNo : 0;
});

Clazz.newMeth(C$, 'isHelix$', function () {
return this.proteinStructure != null  && this.proteinStructure.type === $I$(1).HELIX  ;
});

Clazz.newMeth(C$, 'isSheet$', function () {
return this.proteinStructure != null  && this.proteinStructure.type === $I$(1).SHEET  ;
});

Clazz.newMeth(C$, 'setProteinStructureType$org_jmol_c_STR$I', function (type, monomerIndexCurrent) {
if (this.proteinStructure != null ) this.proteinStructure.removeMonomer$I(this.monomerIndex);
if (monomerIndexCurrent < 0 || monomerIndexCurrent > 0 && this.monomerIndex == 0  ) {
switch (type) {
case $I$(1).HELIX:
case $I$(1).HELIXALPHA:
case $I$(1).HELIX310:
case $I$(1).HELIXPI:
this.setStructure$org_jmol_modelsetbio_ProteinStructure(Clazz.new_($I$(2,1).c$$org_jmol_modelsetbio_AlphaPolymer$I$I$org_jmol_c_STR,[this.bioPolymer, this.monomerIndex, 1, type]));
break;
case $I$(1).SHEET:
this.setStructure$org_jmol_modelsetbio_ProteinStructure(Clazz.new_($I$(3,1).c$$org_jmol_modelsetbio_AlphaPolymer$I$I$org_jmol_c_STR,[this.bioPolymer, this.monomerIndex, 1, type]));
break;
case $I$(1).TURN:
this.setStructure$org_jmol_modelsetbio_ProteinStructure(Clazz.new_($I$(4,1).c$$org_jmol_modelsetbio_AlphaPolymer$I$I,[this.bioPolymer, this.monomerIndex, 1]));
break;
case $I$(1).NONE:
this.setStructure$org_jmol_modelsetbio_ProteinStructure(null);
}
} else {
this.setStructure$org_jmol_modelsetbio_ProteinStructure(this.bioPolymer.getProteinStructure$I(monomerIndexCurrent));
if (this.proteinStructure != null ) this.proteinStructure.addMonomer$I(this.monomerIndex);
}return this.monomerIndex;
});

Clazz.newMeth(C$, 'getAtom$B', function (specialAtomID) {
return (specialAtomID == 2 ? this.getLeadAtom$() : null);
});

Clazz.newMeth(C$, 'getAtomPoint$B', function (specialAtomID) {
return (specialAtomID == 2 ? this.getLeadAtom$() : null);
});

Clazz.newMeth(C$, 'isConnectedAfter$org_jmol_modelsetbio_Monomer', function (possiblyPreviousMonomer) {
if (possiblyPreviousMonomer == null ) return true;
var atom1=this.getLeadAtom$();
var atom2=possiblyPreviousMonomer.getLeadAtom$();
return atom1.isBonded$org_jmol_modelset_Atom(atom2) || atom1.distance$javajs_util_T3(atom2) <= 4.2  ;
});

Clazz.newMeth(C$, 'getQuaternionFrameCenter$C', function (qType) {
return this.getQuaternionFrameCenterAlpha$C(qType);
});

Clazz.newMeth(C$, 'isWithinStructure$org_jmol_c_STR', function (type) {
return (this.proteinStructure != null  && this.proteinStructure.type === type   && this.proteinStructure.isWithin$I(this.monomerIndex) );
});

Clazz.newMeth(C$, 'getQuaternionFrameCenterAlpha$C', function (qType) {
switch (qType.$c()) {
case 98:
case 99:
case 67:
case 120:
return this.getLeadAtom$();
default:
case 97:
case 110:
case 112:
case 80:
case 113:
return null;
}
});

Clazz.newMeth(C$, 'getHelixData$I$C$I', function (tokType, qType, mStep) {
return this.getHelixData2$I$C$I(tokType, qType, mStep);
});

Clazz.newMeth(C$, 'getQuaternion$C', function (qType) {
return this.getQuaternionAlpha$C(qType);
});

Clazz.newMeth(C$, 'getQuaternionAlpha$C', function (qType) {
if (this.monomerIndex < 0) return null;
var vA=Clazz.new_($I$(5,1));
var vB=Clazz.new_($I$(5,1));
var vC=null;
switch (qType.$c()) {
default:
case 97:
case 110:
case 112:
case 113:
return null;
case 98:
case 99:
case 120:
if (this.monomerIndex == 0 || this.monomerIndex == this.bioPolymer.monomerCount - 1 ) return null;
var ptCa=this.getLeadAtom$();
var ptCaNext=this.bioPolymer.getLeadPoint$I(this.monomerIndex + 1);
var ptCaPrev=this.bioPolymer.getLeadPoint$I(this.monomerIndex - 1);
vA.sub2$javajs_util_T3$javajs_util_T3(ptCaNext, ptCa);
vB.sub2$javajs_util_T3$javajs_util_T3(ptCaPrev, ptCa);
break;
}
return $I$(6).getQuaternionFrameV$javajs_util_V3$javajs_util_V3$javajs_util_V3$Z(vA, vB, vC, false);
});

C$.$static$=function(){C$.$static$=0;
C$.alphaOffsets=Clazz.array(Byte.TYPE, -1, [0]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:13 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
