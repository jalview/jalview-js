(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),p$1={},I$=[[0,'javajs.util.BS','javajs.util.V3','org.jmol.util.Logger','javajs.util.Lst','org.jmol.util.BSUtil','org.jmol.symmetry.CIPChirality','javajs.util.P3','javajs.util.Measure','javajs.util.P4']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CIPData");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bsXAromatic=Clazz.new_($I$(1,1));
this.bsNegativeAromatic=Clazz.new_($I$(1,1));
this.bsAtropisomeric=Clazz.new_($I$(1,1));
this.bsKekuleAmbiguous=Clazz.new_($I$(1,1));
this.bsEnes=Clazz.new_($I$(1,1));
this.vNorm=Clazz.new_($I$(2,1));
this.vTemp=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['testRule6Full'],'O',['vwr','org.jmol.viewer.Viewer','atoms','org.jmol.util.SimpleNode[]','bsAtoms','javajs.util.BS','+bsMolecule','+bsAromatic','+bsXAromatic','+bsNegativeAromatic','+bsAzacyclic','+bsAtropisomeric','+bsHelixM','+bsHelixP','lstSmallRings','javajs.util.BS[]','bsKekuleAmbiguous','javajs.util.BS','+bsEnes','vNorm','javajs.util.V3','+vTemp']]]

Clazz.newMeth(C$, 'isTracker$', function () {
return false;
});

Clazz.newMeth(C$, 'isSmiles$', function () {
return false;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_viewer_Viewer$javajs_util_BS', function (vwr, bsAtoms) {
this.vwr=vwr;
this.atoms=vwr.ms.at;
this.bsAtoms=bsAtoms;
this.bsMolecule=vwr.ms.getMoleculeBitSet$javajs_util_BS(bsAtoms);
this.init$();
return this;
});

Clazz.newMeth(C$, 'init$', function () {
try {
var lstRing=this.match$S("[r]");
if (lstRing.isEmpty$()) {
this.lstSmallRings=Clazz.array($I$(1), [0]);
} else {
this.lstSmallRings=this.getList$S("*1**1||*1***1||*1****1||*1*****1||*1******1");
}this.bsAromatic=this.match$S("a");
if (!this.bsAromatic.isEmpty$()) {
this.bsAtropisomeric=this.match$S("[!H](.t1:-20,20)a{a(.t2:-20,20)-a}a[!H]");
this.bsHelixM=this.match$S("A{a}(.t:-10,-40)a(.t:-10,-40)aaa");
this.bsHelixP=this.match$S("A{a}(.t:10,40)a(.t:10,40)aaa");
this.bsXAromatic=this.match$S("[r5v3n+0,r5v2o+0]");
this.bsNegativeAromatic=this.match$S("[a-]");
if (!this.match$S("[n+1,o+1]").isEmpty$() && !this.bsXAromatic.isEmpty$() ) {
this.bsKekuleAmbiguous.or$javajs_util_BS(this.match$S("a1[n+,o+]a[n,o]a1"));
this.bsKekuleAmbiguous.or$javajs_util_BS(this.match$S("a1[n+,o+][n,o]aa1"));
}if (!this.bsNegativeAromatic.isEmpty$()) this.bsKekuleAmbiguous.or$javajs_util_BS(this.match$S("a1=a[a-]a=a1"));
var lstR6a=this.getList$S("a1aaaaa1");
for (var i=lstR6a.length; --i >= 0; ) {
this.bsKekuleAmbiguous.or$javajs_util_BS(lstR6a[i]);
}
}p$1.getAzacyclic.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getList$S', function (smarts) {
var level=$I$(3).getLogLevel$();
$I$(3,"setLogLevel$I",[Math.min(level, 4)]);
var list=this.vwr.getSubstructureSetArray$S$javajs_util_BS$I(smarts, this.bsMolecule, 2);
$I$(3).setLogLevel$I(level);
return list;
});

Clazz.newMeth(C$, 'match$S', function (smarts) {
var level=$I$(3).getLogLevel$();
$I$(3,"setLogLevel$I",[Math.min(level, 4)]);
var bs=this.vwr.getSmartsMatch$S$javajs_util_BS(smarts, this.bsMolecule);
$I$(3).setLogLevel$I(level);
return bs;
});

Clazz.newMeth(C$, 'getEneKekule$', function () {
if (this.bsEnes.cardinality$() < 8) return;
var bsAllEnes=this.bsEnes.clone$();
var bsPath=Clazz.new_($I$(1,1));
this.bsEnes.andNot$javajs_util_BS(this.bsKekuleAmbiguous);
var bsEneAtom1=Clazz.new_($I$(1,1));
for (var i=this.bsEnes.nextSetBit$I(0); i >= 0; i=this.bsEnes.nextSetBit$I(i + 1)) {
bsPath.clearAll$();
bsEneAtom1.clearAll$();
p$1.checkEne$javajs_util_BS$javajs_util_BS$I$I$I$javajs_util_BS.apply(this, [bsAllEnes, bsPath, -1, i, 2, bsEneAtom1]);
}
});

Clazz.newMeth(C$, 'checkEne$javajs_util_BS$javajs_util_BS$I$I$I$javajs_util_BS', function (bsAllEnes, bsPath, iLast, iAtom, order, bsEneAtom1) {
if (bsPath.get$I(iAtom)) return (bsEneAtom1.get$I(iAtom) == (order == 2)  ? iAtom : -1);
bsPath.set$I(iAtom);
var a=this.atoms[iAtom];
var isLoop=-1;
var edges=a.getEdges$();
if (order == 2) bsEneAtom1.set$I(iAtom);
for (var ib=a.getBondCount$(); --ib >= 0; ) {
if (this.getBondOrder$org_jmol_util_SimpleEdge(edges[ib]) != order) continue;
var b=edges[ib].getOtherNode$org_jmol_util_SimpleNode(a);
var iNext=b.getIndex$();
if (iNext != iLast && bsAllEnes.get$I(iNext)  && (isLoop=p$1.checkEne$javajs_util_BS$javajs_util_BS$I$I$I$javajs_util_BS.apply(this, [bsAllEnes, bsPath, iAtom, iNext, 3 - order, bsEneAtom1])) >= 0 ) {
}}
if (isLoop >= 0) {
this.bsKekuleAmbiguous.set$I(iAtom);
this.bsEnes.clear$I(iAtom);
}return isLoop == iAtom ? -1 : isLoop;
}, p$1);

Clazz.newMeth(C$, 'getAzacyclic', function () {
 out : for (var i=this.bsAtoms.nextSetBit$I(0); i >= 0; i=this.bsAtoms.nextSetBit$I(i + 1)) {
var atom=this.atoms[i];
if (atom.getElementNumber$() != 7 || atom.getCovalentBondCount$() != 3  || this.bsKekuleAmbiguous.get$I(i) ) continue;
var edges=atom.getEdges$();
for (var k=edges.length; --k >= 0; ) if (edges[k].getOtherNode$org_jmol_util_SimpleNode(atom).getElementNumber$() == 1) continue out;

var nRings=Clazz.new_($I$(4,1));
for (var j=this.lstSmallRings.length; --j >= 0; ) {
var bsRing=this.lstSmallRings[j];
if (!bsRing.get$I(i)) continue;
nRings.addLast$O(bsRing);
if (j == 0) {
p$1.addAzacyclicN$I.apply(this, [i]);
continue out;
}}
var nr=nRings.size$();
if (nr < 2) continue;
var bsSubs=Clazz.new_($I$(1,1));
var bonds=atom.getEdges$();
for (var b=bonds.length; --b >= 0; ) if (bonds[b].isCovalent$()) bsSubs.set$I(bonds[b].getOtherNode$org_jmol_util_SimpleNode(atom).getIndex$());

var bsBoth=Clazz.new_($I$(1,1));
var bsAll=Clazz.new_($I$(1,1));
for (var j=0; j < nr - 1; j++) {
var bs1=nRings.get$I(j);
for (var k=j + 1; k < nr; k++) {
var bs2=nRings.get$I(k);
$I$(5).copy2$javajs_util_BS$javajs_util_BS(bs1, bsBoth);
bsBoth.and$javajs_util_BS(bs2);
if (bsBoth.cardinality$() > 2) {
$I$(5).copy2$javajs_util_BS$javajs_util_BS(bs1, bsAll);
bsAll.or$javajs_util_BS(bs2);
bsAll.and$javajs_util_BS(bsSubs);
if (bsAll.cardinality$() == 3) {
p$1.addAzacyclicN$I.apply(this, [i]);
continue out;
}}}
}
}
}, p$1);

Clazz.newMeth(C$, 'addAzacyclicN$I', function (i) {
if (this.bsAzacyclic == null ) this.bsAzacyclic=Clazz.new_($I$(1,1));
this.bsAzacyclic.set$I(i);
}, p$1);

Clazz.newMeth(C$, 'couldBeChiralAtom$org_jmol_util_SimpleNode', function (a) {
var mustBePlanar=false;
switch (a.getCovalentBondCount$()) {
default:
System.out.println$S("?? too many bonds! " + a);
return false;
case 0:
return false;
case 1:
return false;
case 2:
return a.getElementNumber$() == 7;
case 3:
switch (a.getElementNumber$()) {
case 7:
if (this.bsAzacyclic != null  && this.bsAzacyclic.get$I(a.getIndex$()) ) break;
return false;
case 6:
mustBePlanar=true;
break;
case 15:
case 16:
case 33:
case 34:
case 51:
case 52:
case 83:
case 84:
break;
case 4:
break;
default:
return false;
}
break;
case 4:
break;
}
var edges=a.getEdges$();
var nH=0;
var haveDouble=false;
for (var j=edges.length; --j >= 0; ) {
if (mustBePlanar && edges[j].getCovalentOrder$() == 2 ) haveDouble=true;
if (edges[j].getOtherNode$org_jmol_util_SimpleNode(a).getIsotopeNumber$() == 1) nH++;
}
return (nH < 2 && (haveDouble || this.isSmiles$() || mustBePlanar == Math.abs(this.getTrigonality$org_jmol_util_SimpleNode$javajs_util_V3(a, this.vNorm)) < 0.2    ) );
});

Clazz.newMeth(C$, 'couldBeChiralAlkene$org_jmol_util_SimpleNode$org_jmol_util_SimpleEdge', function (a, edge) {
var b=(edge == null  ? null : edge.getOtherNode$org_jmol_util_SimpleNode(a));
switch (a.getCovalentBondCount$()) {
default:
return -1;
case 2:
if (a.getElementNumber$() != 7) return -1;
break;
case 3:
if (!$I$(6).isFirstRow$org_jmol_util_SimpleNode(a)) return -1;
break;
}
var bonds=a.getEdges$();
var n=0;
for (var i=bonds.length; --i >= 0; ) if (this.getBondOrder$org_jmol_util_SimpleEdge(bonds[i]) == 2) {
if (++n > 1) return 17;
var other=bonds[i].getOtherNode$org_jmol_util_SimpleNode(a);
if (!$I$(6).isFirstRow$org_jmol_util_SimpleNode(other)) return -1;
if (b != null  && (other !== b  || b.getCovalentBondCount$() == 1 ) ) {
return -1;
}}
return 13;
});

Clazz.newMeth(C$, 'getTrigonality$org_jmol_util_SimpleNode$javajs_util_V3', function (a, vNorm) {
var pts=Clazz.array($I$(7), [4]);
var bonds=a.getEdges$();
for (var n=bonds.length, i=n, pt=0; --i >= 0 && pt < 4 ; ) if (bonds[i].isCovalent$()) pts[pt++]=bonds[i].getOtherNode$org_jmol_util_SimpleNode(a).getXYZ$();

var plane=$I$(8,"getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4",[pts[0], pts[1], pts[2], vNorm, this.vTemp, Clazz.new_($I$(9,1))]);
return $I$(8,"distanceToPlane$javajs_util_P4$javajs_util_T3",[plane, (pts[3] == null  ? a.getXYZ$() : pts[3])]);
});

Clazz.newMeth(C$, 'isCis$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom', function (a, b, c, d) {
$I$(8,"getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3",[a.atom.getXYZ$(), b.atom.getXYZ$(), c.atom.getXYZ$(), this.vNorm, this.vTemp]);
var vNorm2=Clazz.new_($I$(2,1));
$I$(8,"getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3",[b.atom.getXYZ$(), c.atom.getXYZ$(), d.atom.getXYZ$(), vNorm2, this.vTemp]);
return (this.vNorm.dot$javajs_util_T3(vNorm2) > 0  ? 13 : 14);
});

Clazz.newMeth(C$, 'isPositiveTorsion$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom', function (a, b, c, d) {
var angle=$I$(8,"computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z",[a.atom.getXYZ$(), b.atom.getXYZ$(), c.atom.getXYZ$(), d.atom.getXYZ$(), true]);
return (angle > 0  ? 18 : 17);
});

Clazz.newMeth(C$, 'getBondOrder$org_jmol_util_SimpleEdge', function (bond) {
return bond.getCovalentOrder$();
});

Clazz.newMeth(C$, 'setCoord$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtomA', function (atom1, atoms) {
return true;
});

Clazz.newMeth(C$, 'checkHandedness$org_jmol_symmetry_CIPChirality_CIPAtom', function (a) {
var atoms=a.atoms;
if (!this.setCoord$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtomA(a.atom, atoms)) return 0;
var p0=(atoms[3].atom == null  ? a.atom : atoms[3].atom).getXYZ$();
var p1=atoms[0].atom.getXYZ$();
var p2=atoms[1].atom.getXYZ$();
var p3=atoms[2].atom.getXYZ$();
$I$(8).getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(p1, p2, p3, this.vNorm, this.vTemp);
this.vTemp.setT$javajs_util_T3(p0);
this.vTemp.sub$javajs_util_T3(p1);
return (this.vTemp.dot$javajs_util_T3(this.vNorm) > 0  ? 1 : 2);
});

Clazz.newMeth(C$, 'track$org_jmol_symmetry_CIPChirality$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$I$I$Z', function (cip, a, b, sphere, finalScore, trackTerminal) {
});

Clazz.newMeth(C$, 'getRootTrackerResult$org_jmol_symmetry_CIPChirality_CIPAtom', function (root) {
return null;
});

Clazz.newMeth(C$, 'setRule6Full$Z', function (rrrr) {
this.testRule6Full=rrrr;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
