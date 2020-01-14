(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),p$1={},I$=[[0,'org.jmol.c.STR','javajs.util.P3','javajs.util.V3','javajs.util.Quat','javajs.util.Lst','org.jmol.modelset.Group','org.jmol.modelsetbio.NucleicPolymer','javajs.util.A4','javajs.util.M3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "NucleicMonomer", null, 'org.jmol.modelsetbio.PhosphorusMonomer');
C$.interestingNucleicAtomIDs=null;
C$.ring6OffsetIndexes=null;
C$.ring5OffsetIndexes=null;
C$.riboseOffsetIndexes=null;
C$.heavyAtomIndexes=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.interestingNucleicAtomIDs=Clazz.array(Byte.TYPE, -1, [~13, 37, ~79, 36, 32, 33, 34, 35, ~38, ~39, ~40, ~41, ~47, ~46, ~42, ~13, ~44, ~43, ~72, ~6, ~88, 10, 9, ~74, ~76, ~12, ~11, ~8, ~78, ~7]);
C$.ring6OffsetIndexes=Clazz.array(Byte.TYPE, -1, [3, 1, 4, 5, 6, 7]);
C$.ring5OffsetIndexes=Clazz.array(Byte.TYPE, -1, [3, 9, 10, 11, 7]);
C$.riboseOffsetIndexes=Clazz.array(Byte.TYPE, -1, [25, 26, 22, 27, 28, 21, 29, 19, 0]);
C$.heavyAtomIndexes=Clazz.array(Byte.TYPE, -1, [3, 1, 4, 5, 6, 7, 11, 10, 9, 16, 14, 8, 12, 17, 13]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isPurine=false;
this.isPyrimidine=false;
this.hasRnaO2Prime=false;
this.baseCenter=null;
this.bps=null;
this.dssrBox=null;
this.dssrBoxHeight=0;
this.dssrFrame=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'validateAndAllocate$org_jmol_modelset_Chain$S$I$I$I$IA', function (chain, group3, seqcode, firstAtomIndex, lastAtomIndex, specialAtomIndexes) {
var offsets=P$.Monomer.scanForOffsets$I$IA$BA(firstAtomIndex, specialAtomIndexes, C$.interestingNucleicAtomIDs);
if (offsets == null ) return null;
if (!P$.Monomer.checkOptional$BA$B$I$I(offsets, ($b$[0] = 19, $b$[0]), firstAtomIndex, specialAtomIndexes[73])) return null;
P$.Monomer.checkOptional$BA$B$I$I(offsets, ($b$[0] = 20, $b$[0]), firstAtomIndex, specialAtomIndexes[89]);
P$.Monomer.checkOptional$BA$B$I$I(offsets, ($b$[0] = 18, $b$[0]), firstAtomIndex, specialAtomIndexes[90]);
P$.Monomer.checkOptional$BA$B$I$I(offsets, ($b$[0] = 23, $b$[0]), firstAtomIndex, specialAtomIndexes[75]);
P$.Monomer.checkOptional$BA$B$I$I(offsets, ($b$[0] = 24, $b$[0]), firstAtomIndex, specialAtomIndexes[77]);
return p$1.set4$org_jmol_modelset_Chain$S$I$I$I$BA.apply((Clazz.new_(C$)), [chain, group3, seqcode, firstAtomIndex, lastAtomIndex, offsets]);
}, 1);

Clazz.newMeth(C$, 'set4$org_jmol_modelset_Chain$S$I$I$I$BA', function (chain, group3, seqcode, firstAtomIndex, lastAtomIndex, offsets) {
this.set2$org_jmol_modelset_Chain$S$I$I$I$BA(chain, group3, seqcode, firstAtomIndex, lastAtomIndex, offsets);
if (!P$.Monomer.have$BA$B(offsets, ($b$[0] = 15, $b$[0]))) {
offsets[0]=(offsets[19]|0);
this.setLeadAtomIndex$();
}this.hasRnaO2Prime=P$.Monomer.have$BA$B(offsets, ($b$[0] = 2, $b$[0]));
this.isPyrimidine=P$.Monomer.have$BA$B(offsets, ($b$[0] = 8, $b$[0]));
this.isPurine=P$.Monomer.have$BA$B(offsets, ($b$[0] = 9, $b$[0])) && P$.Monomer.have$BA$B(offsets, ($b$[0] = 10, $b$[0])) && P$.Monomer.have$BA$B(offsets, ($b$[0] = 11, $b$[0]))  ;
return this;
}, p$1);

Clazz.newMeth(C$, 'isNucleicMonomer$', function () {
return true;
});

Clazz.newMeth(C$, 'isDna$', function () {
return !this.hasRnaO2Prime;
});

Clazz.newMeth(C$, 'isRna$', function () {
return this.hasRnaO2Prime;
});

Clazz.newMeth(C$, 'isPurine$', function () {
return this.isPurine || !this.isPyrimidine && this.isPurineByID$()  ;
});

Clazz.newMeth(C$, 'isPyrimidine$', function () {
return this.isPyrimidine || !this.isPurine && this.isPyrimidineByID$()  ;
});

Clazz.newMeth(C$, 'isGuanine$', function () {
return P$.Monomer.have$BA$B(this.offsets, ($b$[0] = 17, $b$[0]));
});

Clazz.newMeth(C$, 'getProteinStructureType$', function () {
return (this.hasRnaO2Prime ? $I$(1).RNA : $I$(1).DNA);
});

Clazz.newMeth(C$, 'getP$', function () {
return this.getAtomFromOffsetIndex$I(0);
});

Clazz.newMeth(C$, 'getC1P$', function () {
return this.getAtomFromOffsetIndex$I(25);
});

Clazz.newMeth(C$, 'getC2$', function () {
return this.getAtomFromOffsetIndex$I(5);
});

Clazz.newMeth(C$, 'getC5$', function () {
return this.getAtomFromOffsetIndex$I(3);
});

Clazz.newMeth(C$, 'getC6$', function () {
return this.getAtomFromOffsetIndex$I(1);
});

Clazz.newMeth(C$, 'getC8$', function () {
return this.getAtomFromOffsetIndex$I(10);
});

Clazz.newMeth(C$, 'getC4P$', function () {
return this.getAtomFromOffsetIndex$I(27);
});

Clazz.newMeth(C$, 'getN1$', function () {
return this.getAtomFromOffsetIndex$I(4);
});

Clazz.newMeth(C$, 'getN3$', function () {
return this.getAtomFromOffsetIndex$I(6);
});

Clazz.newMeth(C$, 'getN2$', function () {
return this.getAtomFromOffsetIndex$I(17);
});

Clazz.newMeth(C$, 'getN4$', function () {
return this.getAtomFromOffsetIndex$I(14);
});

Clazz.newMeth(C$, 'getN6$', function () {
return this.getAtomFromOffsetIndex$I(16);
});

Clazz.newMeth(C$, 'getO2$', function () {
return this.getAtomFromOffsetIndex$I(8);
});

Clazz.newMeth(C$, 'getO4$', function () {
return this.getAtomFromOffsetIndex$I(12);
});

Clazz.newMeth(C$, 'getO6$', function () {
return this.getAtomFromOffsetIndex$I(13);
});

Clazz.newMeth(C$, 'getTerminatorAtom$', function () {
return this.getAtomFromOffsetIndex$I(P$.Monomer.have$BA$B(this.offsets, ($b$[0] = 20, $b$[0])) ? ($b$[0] = 20, $b$[0]) : ($b$[0] = 21, $b$[0]));
});

Clazz.newMeth(C$, 'getBaseRing6Points$javajs_util_P3A', function (pts) {
p$1.getPoints$BA$javajs_util_P3A.apply(this, [C$.ring6OffsetIndexes, pts]);
});

Clazz.newMeth(C$, 'getPoints$BA$javajs_util_P3A', function (a, pts) {
for (var i=a.length; --i >= 0; ) pts[i]=this.getAtomFromOffsetIndex$I(a[i]);

}, p$1);

Clazz.newMeth(C$, 'maybeGetBaseRing5Points$javajs_util_P3A', function (pts) {
if (this.isPurine) p$1.getPoints$BA$javajs_util_P3A.apply(this, [C$.ring5OffsetIndexes, pts]);
return this.isPurine;
});

Clazz.newMeth(C$, 'getRiboseRing5Points$javajs_util_P3A', function (pts) {
p$1.getPoints$BA$javajs_util_P3A.apply(this, [C$.riboseOffsetIndexes, pts]);
});

Clazz.newMeth(C$, 'isConnectedAfter$org_jmol_modelsetbio_Monomer', function (possiblyPreviousMonomer) {
if (possiblyPreviousMonomer == null ) return true;
var myPhosphorusAtom=this.getAtomFromOffsetIndex$I(15);
if (myPhosphorusAtom == null ) return false;
return ((possiblyPreviousMonomer).getAtomFromOffsetIndex$I(21).isBonded$org_jmol_modelset_Atom(myPhosphorusAtom) || this.isCA2$org_jmol_modelsetbio_Monomer(possiblyPreviousMonomer) );
});

Clazz.newMeth(C$, 'findNearestAtomIndex$I$I$org_jmol_modelset_AtomA$H$H', function (x, y, closest, madBegin, madEnd) {
var competitor=closest[0];
var lead=this.getLeadAtom$();
var o5prime=this.getAtomFromOffsetIndex$I(19);
var c3prime=this.getAtomFromOffsetIndex$I(22);
var mar=($s$[0] = ((madBegin/2|0)), $s$[0]);
if (mar < 1900) mar=($s$[0] = 1900, $s$[0]);
var radius=(this.scaleToScreen$I$I(lead.sZ, mar)|0);
if (radius < 4) radius=4;
if (this.isCursorOnTopOf$org_jmol_modelset_Atom$I$I$I$org_jmol_modelset_Atom(lead, x, y, radius, competitor) || this.isCursorOnTopOf$org_jmol_modelset_Atom$I$I$I$org_jmol_modelset_Atom(o5prime, x, y, radius, competitor) || this.isCursorOnTopOf$org_jmol_modelset_Atom$I$I$I$org_jmol_modelset_Atom(c3prime, x, y, radius, competitor)  ) closest[0]=lead;
});

Clazz.newMeth(C$, 'setRingsVisible$Z', function (isVisible) {
for (var i=6; --i >= 0; ) this.getAtomFromOffsetIndex$I(C$.ring6OffsetIndexes[i]).setShapeVisibility$I$Z(32768, isVisible);

if (this.isPurine) for (var i=4; --i >= 1; ) this.getAtomFromOffsetIndex$I(C$.ring5OffsetIndexes[i]).setShapeVisibility$I$Z(32768, isVisible);

});

Clazz.newMeth(C$, 'setRingsClickable$', function () {
for (var i=6; --i >= 0; ) this.getAtomFromOffsetIndex$I(C$.ring6OffsetIndexes[i]).setClickable$I(32768);

if (this.isPurine) for (var i=4; --i >= 1; ) this.getAtomFromOffsetIndex$I(C$.ring5OffsetIndexes[i]).setClickable$I(32768);

});

Clazz.newMeth(C$, 'getN0$', function () {
return (this.getAtomFromOffsetIndex$I(this.isPurine ? ($b$[0] = 11, $b$[0]) : ($b$[0] = 4, $b$[0])));
});

Clazz.newMeth(C$, 'getHelixData$I$C$I', function (tokType, qType, mStep) {
return this.getHelixData2$I$C$I(tokType, qType, mStep);
});

Clazz.newMeth(C$, 'getQuaternionFrameCenter$C', function (qType) {
switch (qType.$c()) {
case 120:
case 97:
case 98:
case 112:
return this.getP$();
case 99:
if (this.baseCenter == null ) {
var n=0;
this.baseCenter=Clazz.new_($I$(2));
for (var i=0; i < C$.heavyAtomIndexes.length; i++) {
var a=this.getAtomFromOffsetIndex$I(C$.heavyAtomIndexes[i]);
if (a == null ) continue;
this.baseCenter.add$javajs_util_T3(a);
n++;
}
this.baseCenter.scale$F(1.0 / n);
}return this.baseCenter;
case 110:
default:
return this.getN0$();
}
});

Clazz.newMeth(C$, 'getQuaternion$C', function (qType) {
if (this.bioPolymer == null ) return null;
var ptA=null;
var ptB=null;
var ptNorP;
var yBased=false;
var reverseY=false;
switch (qType.$c()) {
case 97:
ptNorP=this.getP$();
if (this.monomerIndex == 0 || ptNorP == null  ) return null;
yBased=true;
ptA=(this.bioPolymer.monomers[this.monomerIndex - 1]).getC4P$();
ptB=this.getC4P$();
break;
case 120:
ptNorP=this.getP$();
if (this.monomerIndex == this.bioPolymer.monomerCount - 1 || ptNorP == null  ) return null;
ptA=(this.bioPolymer.monomers[this.monomerIndex + 1]).getP$();
ptB=this.getC4P$();
break;
case 98:
return this.getQuaternionP$();
case 99:
case 110:
ptNorP=this.getN0$();
if (ptNorP == null ) return null;
yBased=true;
reverseY=true;
ptA=this.getAtomFromOffsetIndex$I(5);
ptB=this.getAtomFromOffsetIndex$I(25);
break;
case 112:
ptNorP=this.getP$();
if (ptNorP == null ) return null;
var p1=this.getAtomFromOffsetIndex$I(23);
var p2=this.getAtomFromOffsetIndex$I(24);
var bonds=ptNorP.bonds;
if (bonds == null ) return null;
var g=ptNorP.group;
for (var i=0; i < bonds.length; i++) {
var atom=bonds[i].getOtherAtom$org_jmol_modelset_Atom(ptNorP);
if (p1 != null  && atom.i == p1.i ) continue;
if (p2 != null  && atom.i == p2.i ) continue;
if (atom.group === g ) ptB=atom;
 else ptA=atom;
}
break;
case 113:
return null;
default:
ptNorP=this.getN0$();
if (ptNorP == null ) return null;
if (this.isPurine) {
ptA=this.getAtomFromOffsetIndex$I(5);
ptB=this.getAtomFromOffsetIndex$I(9);
} else {
ptA=this.getAtomFromOffsetIndex$I(6);
ptB=this.getAtomFromOffsetIndex$I(1);
}break;
}
if (ptA == null  || ptB == null  ) return null;
var vA=$I$(3).newVsub$javajs_util_T3$javajs_util_T3(ptA, ptNorP);
var vB=$I$(3).newVsub$javajs_util_T3$javajs_util_T3(ptB, ptNorP);
if (reverseY) vB.scale$F(-1);
return $I$(4).getQuaternionFrameV$javajs_util_V3$javajs_util_V3$javajs_util_V3$Z(vA, vB, null, yBased);
});

Clazz.newMeth(C$, 'isCrossLinked$org_jmol_modelset_Group', function (g) {
if (!(Clazz.instanceOf(g, "org.jmol.modelsetbio.NucleicMonomer")) || this.isPurine == g.isPurine$()  ) return false;
var otherNucleotide=(this.isPurine ? g : this);
var myNucleotide=(this.isPurine ? this : g);
var myN1=myNucleotide.getN1$();
var otherN3=otherNucleotide.getN3$();
return (myN1.isBonded$org_jmol_modelset_Atom(otherN3));
});

Clazz.newMeth(C$, 'getCrossLinkVector$javajs_util_Lst$Z$Z', function (vReturn, crosslinkCovalent, crosslinkHBond) {
if (!crosslinkHBond) return false;
var N=(this.isPurine ? this.getN1$() : this.getN3$());
var bonds=N.bonds;
if (bonds == null ) return false;
for (var i=0; i < bonds.length; i++) {
if (bonds[i].isHydrogen$()) {
var N2=bonds[i].getOtherAtom$org_jmol_modelset_Atom(N);
var g=N2.group;
if (!(Clazz.instanceOf(g, "org.jmol.modelsetbio.NucleicMonomer"))) continue;
var m=g;
if ((this.isPurine ? m.getN3$() : m.getN1$()) === N2 ) {
if (vReturn == null ) return true;
vReturn.addLast$TV(Integer.valueOf$I(N.i));
vReturn.addLast$TV(Integer.valueOf$I(N2.i));
vReturn.addLast$TV(Integer.valueOf$I(m.leadAtomIndex));
}}}
return vReturn != null  && vReturn.size$() > 0 ;
});

Clazz.newMeth(C$, 'getEdgePoints$javajs_util_P3A', function (pts) {
pts[0]=this.getLeadAtom$();
pts[1]=this.getC4P$();
pts[2]=pts[5]=this.getC1P$();
switch ((this.getGroup1$()).$c()) {
case 67:
pts[3]=this.getO2$();
pts[4]=this.getN4$();
return true;
case 65:
pts[3]=this.getC2$();
pts[4]=this.getN6$();
return true;
case 71:
case 73:
pts[3]=this.getC2$();
pts[4]=this.getO6$();
return true;
case 84:
case 85:
pts[3]=this.getO2$();
pts[4]=this.getO4$();
return true;
default:
return false;
}
});

Clazz.newMeth(C$, 'addBasePair$org_jmol_modelsetbio_BasePair', function (bp) {
if (this.bps == null ) this.bps=Clazz.new_($I$(5));
this.bps.addLast$TV(bp);
});

Clazz.newMeth(C$, 'setGroup1$C', function (g) {
if (this.group1 == "\u0000") this.group1=g;
});

Clazz.newMeth(C$, 'getBasePairs$', function () {
if (this.bioPolymer != null  && !(this.bioPolymer).isDssrSet ) this.bioPolymer.model.ms.vwr.getAnnotationParser$Z(true).getBasePairs$org_jmol_viewer_Viewer$I(this.bioPolymer.model.ms.vwr, this.bioPolymer.model.modelIndex);
return this.bps;
});

Clazz.newMeth(C$, 'getGroup1b$', function () {
var g3=$I$(6).group3Names[this.groupID];
var g1=($I$(7).htGroup1 == null  ? null : $I$(7).htGroup1.get$O(g3));
return (g1 == null  ? Character.toLowerCase$C(g3.charAt$I(g3.length$() - 1)) : g1.charAt$I(0));
});

Clazz.newMeth(C$, 'getDSSRFrame$org_jmol_viewer_Viewer', function (vwr) {
if (this.dssrFrame != null ) return this.dssrFrame;
if (this.dssrNT != null ) return this.dssrFrame=vwr.getAnnotationParser$Z(true).getDSSRFrame$java_util_Map(this.dssrNT);
var oxyz=this.dssrFrame=Clazz.array($I$(2), [4]);
for (var i=4; --i >= 0; ) oxyz[i]=Clazz.new_($I$(2));

if (this.isPurine$()) {
var v85=$I$(2).newP$javajs_util_T3(this.getC5$());
v85.sub$javajs_util_T3(this.getC8$());
v85.normalize$();
oxyz[2].setT$javajs_util_T3(v85);
oxyz[2].scale$F(-1);
oxyz[0].scaleAdd2$F$javajs_util_T3$javajs_util_T3(4.9, v85, this.getC8$());
var v89=$I$(2).newP$javajs_util_T3(this.getN0$());
v89.sub$javajs_util_T3(this.getC8$());
oxyz[3].cross$javajs_util_T3$javajs_util_T3(v89, v85);
oxyz[3].normalize$();
} else {
var v61=$I$(2).newP$javajs_util_T3(this.getN0$());
v61.sub$javajs_util_T3(this.getC6$());
var v65=$I$(2).newP$javajs_util_T3(this.getC5$());
v65.sub$javajs_util_T3(this.getC6$());
oxyz[3].cross$javajs_util_T3$javajs_util_T3(v61, v65);
oxyz[3].normalize$();
oxyz[2].setT$javajs_util_T3(v61);
oxyz[2].normalize$();
var aa=$I$(8).new4$F$F$F$F(oxyz[3].x, oxyz[3].y, oxyz[3].z, 1.1623893);
var m3=Clazz.new_($I$(9));
m3.setAA$javajs_util_A4(aa);
m3.rotate$javajs_util_T3(oxyz[2]);
oxyz[0].scaleAdd2$F$javajs_util_T3$javajs_util_T3(5.1, oxyz[2], this.getC6$());
oxyz[2].scale$F(-1);
}oxyz[1].cross$javajs_util_T3$javajs_util_T3(oxyz[2], oxyz[3]);
return this.dssrFrame;
});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
