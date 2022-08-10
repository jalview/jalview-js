(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),I$=[[0,'org.jmol.c.STR','javajs.util.V3','javajs.util.Quat']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PhosphorusMonomer", null, 'org.jmol.modelsetbio.Monomer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['F',['MAX_ADJACENT_PHOSPHORUS_DISTANCE'],'O',['phosphorusOffsets','byte[]']]]

Clazz.newMeth(C$, 'isNucleic$', function () {
return true;
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'validateAndAllocateP$org_jmol_modelset_Chain$S$I$I$I$IA', function (chain, group3, seqcode, firstIndex, lastIndex, specialAtomIndexes) {
return (firstIndex != lastIndex || specialAtomIndexes[13] != firstIndex  ? null : Clazz.new_(C$).set2$org_jmol_modelset_Chain$S$I$I$I$BA(chain, group3, seqcode, firstIndex, lastIndex, C$.phosphorusOffsets));
}, 1);

Clazz.newMeth(C$, 'isDna$', function () {
return this.isDnaByID$();
});

Clazz.newMeth(C$, 'isRna$', function () {
return this.isRnaByID$();
});

Clazz.newMeth(C$, 'isPurine$', function () {
return this.isPurineByID$();
});

Clazz.newMeth(C$, 'isPyrimidine$', function () {
return this.isPyrimidineByID$();
});

Clazz.newMeth(C$, 'getStructure$', function () {
return this.chain;
});

Clazz.newMeth(C$, 'getProteinStructureType$', function () {
return $I$(1).NONE;
});

Clazz.newMeth(C$, 'isConnectedAfter$org_jmol_modelsetbio_Monomer', function (possiblyPreviousMonomer) {
return this.isCA2$org_jmol_modelsetbio_Monomer(possiblyPreviousMonomer);
});

Clazz.newMeth(C$, 'isCA2$org_jmol_modelsetbio_Monomer', function (possiblyPreviousMonomer) {
if (possiblyPreviousMonomer == null ) return true;
var distance=this.getLeadAtom$().distance$javajs_util_T3(possiblyPreviousMonomer.getLeadAtom$());
return distance <= C$.MAX_ADJACENT_PHOSPHORUS_DISTANCE ;
});

Clazz.newMeth(C$, 'getQuaternion$C', function (qType) {
return this.getQuaternionP$();
});

Clazz.newMeth(C$, 'getQuaternionP$', function () {
var i=this.monomerIndex;
if (i <= 0 || i >= this.bioPolymer.monomerCount - 1 ) return null;
var ptP=this.bioPolymer.monomers[i].getAtomFromOffsetIndex$I(0);
var ptA;
var ptB;
ptA=this.bioPolymer.monomers[i + 1].getAtomFromOffsetIndex$I(0);
ptB=this.bioPolymer.monomers[i - 1].getAtomFromOffsetIndex$I(0);
if (ptP == null  || ptA == null   || ptB == null  ) return null;
var vA=Clazz.new_($I$(2,1));
var vB=Clazz.new_($I$(2,1));
vA.sub2$javajs_util_T3$javajs_util_T3(ptA, ptP);
vB.sub2$javajs_util_T3$javajs_util_T3(ptB, ptP);
return $I$(3).getQuaternionFrameV$javajs_util_V3$javajs_util_V3$javajs_util_V3$Z(vA, vB, null, false);
});

Clazz.newMeth(C$, 'getQuaternionFrameCenter$C', function (qType) {
return this.getAtomFromOffsetIndex$I(0);
});

Clazz.newMeth(C$, 'getHelixData$I$C$I', function (tokType, qType, mStep) {
return this.getHelixData2$I$C$I(tokType, qType, mStep);
});

C$.$static$=function(){C$.$static$=0;
C$.phosphorusOffsets=Clazz.array(Byte.TYPE, -1, [0]);
C$.MAX_ADJACENT_PHOSPHORUS_DISTANCE=8.0;
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
