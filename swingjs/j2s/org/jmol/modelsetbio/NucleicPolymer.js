(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),I$=[[0,'javajs.util.Measure','javajs.util.V3','javajs.util.P4','org.jmol.modelset.HBond']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NucleicPolymer", null, 'org.jmol.modelsetbio.PhosphorusPolymer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isDssrSet']]
,['O',['htGroup1','java.util.Map']]]

Clazz.newMeth(C$, 'c$$org_jmol_modelsetbio_MonomerA', function (monomers) {
;C$.superclazz.c$$org_jmol_modelsetbio_MonomerA.apply(this,[monomers]);C$.$init$.apply(this);
this.type=2;
this.hasWingPoints=true;
}, 1);

Clazz.newMeth(C$, 'getNucleicPhosphorusAtom$I', function (monomerIndex) {
return this.monomers[monomerIndex].getLeadAtom$();
});

Clazz.newMeth(C$, 'calcEtaThetaAngles$', function () {
var eta=NaN;
for (var i=0; i < this.monomerCount - 2; ++i) {
var m1=this.monomers[i];
var m2=this.monomers[i + 1];
var p1=m1.getP$();
var c41=m1.getC4P$();
var p2=m2.getP$();
var c42=m2.getC4P$();
if (i > 0) {
var m0=this.monomers[i - 1];
var c40=m0.getC4P$();
eta=$I$(1).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(c40, p1, c41, p2, true);
}var theta=$I$(1).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(p1, c41, p2, c42, true);
if (eta < 0 ) eta += 360;
if (theta < 0 ) theta += 360;
m1.setGroupParameter$I$F(1111490565, eta);
m1.setGroupParameter$I$F(1111490576, theta);
}
return true;
});

Clazz.newMeth(C$, 'calcRasmolHydrogenBonds$org_jmol_modelsetbio_BioPolymer$javajs_util_BS$javajs_util_BS$javajs_util_Lst$I$IAAA$Z$Z', function (polymer, bsA, bsB, vAtoms, nMaxPerResidue, min, checkDistances, dsspIgnoreHydrogens) {
var other=polymer;
var vNorm=Clazz.new_($I$(2,1));
var vAB=Clazz.new_($I$(2,1));
for (var i=this.monomerCount; --i >= 0; ) {
var myNucleotide=this.monomers[i];
if (!myNucleotide.isPurine$()) continue;
var myN3=myNucleotide.getN3$();
var isInA=bsA.get$I(myN3.i);
if (!isInA && !bsB.get$I(myN3.i) ) continue;
var myN1=myNucleotide.getN1$();
var myN9=myNucleotide.getN0$();
var plane=(function(a,f){return f.apply(null,a)})([myN3, myN1, myN9, vNorm, vAB, Clazz.new_($I$(3,1))],$I$(1).getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4);
var bestN3=null;
var minDist2=25;
var bestNucleotide=null;
for (var j=other.monomerCount; --j >= 0; ) {
var otherNucleotide=other.monomers[j];
if (!otherNucleotide.isPyrimidine) continue;
var otherN3=otherNucleotide.getN3$();
if (isInA ? !bsB.get$I(otherN3.i) : !bsA.get$I(otherN3.i)) continue;
var otherN1=otherNucleotide.getN0$();
var dist2=myN1.distanceSquared$javajs_util_T3(otherN3);
if (dist2 < minDist2  && myN9.distanceSquared$javajs_util_T3(otherN1) > 50   && Math.abs($I$(1).distanceToPlane$javajs_util_P4$javajs_util_T3(plane, otherN3)) < 1  ) {
bestNucleotide=otherNucleotide;
bestN3=otherN3;
minDist2=dist2;
}}
var n=0;
if (bestN3 != null ) {
n+=C$.addHydrogenBond$javajs_util_Lst$org_jmol_modelset_Atom$org_jmol_modelset_Atom(vAtoms, myN1, bestN3);
if (n >= nMaxPerResidue) continue;
if (myNucleotide.isGuanine$()) {
n+=C$.addHydrogenBond$javajs_util_Lst$org_jmol_modelset_Atom$org_jmol_modelset_Atom(vAtoms, myNucleotide.getN2$(), bestNucleotide.getO2$());
if (n >= nMaxPerResidue) continue;
n+=C$.addHydrogenBond$javajs_util_Lst$org_jmol_modelset_Atom$org_jmol_modelset_Atom(vAtoms, myNucleotide.getO6$(), bestNucleotide.getN4$());
if (n >= nMaxPerResidue) continue;
} else {
n+=C$.addHydrogenBond$javajs_util_Lst$org_jmol_modelset_Atom$org_jmol_modelset_Atom(vAtoms, myNucleotide.getN6$(), bestNucleotide.getO4$());
}}}
});

Clazz.newMeth(C$, 'addHydrogenBond$javajs_util_Lst$org_jmol_modelset_Atom$org_jmol_modelset_Atom', function (vAtoms, atom1, atom2) {
if (atom1 == null  || atom2 == null  ) return 0;
vAtoms.addLast$O(Clazz.new_($I$(4,1).c$$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$H$F,[atom1, atom2, 18432, 1, 0, 0]));
return 1;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:14 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
