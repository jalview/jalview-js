(function(){var P$=Clazz.newPackage("org.jmol.smiles"),I$=[[0,'org.jmol.util.BSUtil','javajs.util.Lst','org.jmol.smiles.SmilesRing','javajs.util.V3','javajs.util.Measure','org.jmol.util.Logger','javajs.util.BS','java.util.Hashtable','org.jmol.smiles.SmilesRingSet']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SmilesAromatic");
C$.OS_PI_COUNTS=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.OS_PI_COUNTS=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [-2, 1, 0]), Clazz.array(Integer.TYPE, -1, [1, 2, 1, -1]), Clazz.array(Integer.TYPE, -1, [2, 1, 2, 1, 1]), Clazz.array(Integer.TYPE, -1, [2, 1]), Clazz.array(Integer.TYPE, -1, [-2, 1, 2, 1, -2]), Clazz.array(Integer.TYPE, -1, [2, 1, 2, 2])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setAromatic$I$org_jmol_util_NodeA$javajs_util_BS$javajs_util_Lst$javajs_util_BS$I$Z$Z$Z$org_jmol_smiles_VTemp$javajs_util_Lst$javajs_util_Lst$IA$Z', function (n, jmolAtoms, bsSelected, vR, bsAromatic, strictness, isOpenSMILES, justCheckBonding, checkExplicit, v, vOK, lstSP2, eCounts, doTestAromatic) {
var doCheck=(isOpenSMILES || strictness > 0 );
if (!doTestAromatic) {
for (var r=vR.size$(); --r >= 0; ) {
var bs=$I$(1).copy$javajs_util_BS(vR.get$I(r));
bs.and$javajs_util_BS(bsAromatic);
if (bs.cardinality$() == n) vOK.addLast$TV(bs);
}
return;
}for (var r=vR.size$(); --r >= 0; ) {
var bs=vR.get$I(r);
var isOK=C$.isSp2Ring$I$org_jmol_util_NodeA$javajs_util_BS$javajs_util_BS$F$Z$Z(n, jmolAtoms, bsSelected, bs, (justCheckBonding ? 3.4028235E38 : strictness > 0 ? 0.1 : 0.01), checkExplicit, strictness == 0);
if (!isOK) continue;
bsAromatic.or$javajs_util_BS(bs);
if (doCheck) {
var edges=Clazz.new_($I$(2));
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var a=jmolAtoms[i];
var aedges=a.getEdges$();
var ai=a.getIndex$();
for (var j=aedges.length; --j >= 0; ) {
var a2=aedges[j].getOtherNode$org_jmol_util_SimpleNode(a);
var a2i=a2.getIndex$();
if (a2i > ai && bs.get$I(a2i) ) edges.addLast$TV(aedges[j]);
}
}
switch (C$.checkHueckelAromatic$I$org_jmol_util_NodeA$javajs_util_BS$javajs_util_BS$I$IA(n, jmolAtoms, bsAromatic, bs, strictness, eCounts)) {
case -1:
continue;
case 0:
isOK=false;
case 1:
if (lstSP2 != null ) lstSP2.addLast$TV(Clazz.new_($I$(3).c$$I$javajs_util_BS$javajs_util_Lst$Z,[n, bs, edges, isOK]));
if (!isOK) continue;
}
}vOK.addLast$TV(bs);
}
}, 1);

Clazz.newMeth(C$, 'checkAromaticDefined$org_jmol_util_NodeA$javajs_util_BS$javajs_util_BS', function (jmolAtoms, bsSelected, bsAromatic) {
for (var i=bsSelected.nextSetBit$I(0); i >= 0; i=bsSelected.nextSetBit$I(i + 1)) {
var bonds=jmolAtoms[i].getEdges$();
for (var j=0; j < bonds.length; j++) {
switch (bonds[j].order) {
case 515:
case 514:
case 513:
bsAromatic.set$I(bonds[j].getAtomIndex1$());
bsAromatic.set$I(bonds[j].getAtomIndex2$());
}
}
}
}, 1);

Clazz.newMeth(C$, 'isSp2Ring$I$org_jmol_util_NodeA$javajs_util_BS$javajs_util_BS$F$Z$Z', function (n, atoms, bsSelected, bs, cutoff, checkExplicit, allowSOxide) {
if (checkExplicit) {
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) if (atoms[i].getCovalentBondCount$() > 3) return false;

} else {
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) if (atoms[i].getCovalentBondCountPlusMissingH$() > 3) return false;

}if (cutoff == 3.4028235E38 ) return true;
if (cutoff <= 0 ) cutoff=0.01;
var vNorm=null;
var vTemp=null;
var vMean=null;
var nPoints=bs.cardinality$();
var vNorms=Clazz.array($I$(4), [nPoints * 2]);
var nNorms=0;
var maxDev=(1 - cutoff * 5);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var ringAtom=atoms[i];
var bonds=ringAtom.getEdges$();
var iSub=-1;
var r1=-1;
var r2=-1;
for (var k=bonds.length; --k >= 0; ) {
var iAtom=ringAtom.getBondedAtomIndex$I(k);
if (!bsSelected.get$I(iAtom)) continue;
if (!bs.get$I(iAtom)) {
if (ringAtom.getElementNumber$() == 16) {
if (!allowSOxide) return false;
iAtom=-1;
}iSub=iAtom;
} else if (r1 < 0) {
r1=iAtom;
} else {
r2=iAtom;
}}
if (vMean == null ) {
vMean=Clazz.new_($I$(4));
vNorm=Clazz.new_($I$(4));
vTemp=Clazz.new_($I$(4));
}for (var k=0, j=i; k < 2; k++) {
$I$(5).getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(atoms[r1], atoms[j], atoms[r2], vNorm, vTemp);
if (!C$.addNormal$javajs_util_V3$javajs_util_V3$F(vNorm, vMean, maxDev)) return false;
vNorms[nNorms++]=$I$(4).newV$javajs_util_T3(vNorm);
if ((j=iSub) < 0) break;
}
}
return C$.checkStandardDeviation$javajs_util_V3A$javajs_util_V3$I$F(vNorms, vMean, nNorms, cutoff);
}, 1);

Clazz.newMeth(C$, 'addNormal$javajs_util_V3$javajs_util_V3$F', function (vTemp, vMean, maxDev) {
var similarity=vMean.dot$javajs_util_T3(vTemp);
if (similarity != 0  && Math.abs(similarity) < maxDev  ) return false;
if (similarity < 0 ) vTemp.scale$F(-1);
vMean.add$javajs_util_T3(vTemp);
vMean.normalize$();
return true;
}, 1);

Clazz.newMeth(C$, 'checkStandardDeviation$javajs_util_V3A$javajs_util_V3$I$F', function (vNorms, vMean, n, cutoff) {
var sum=0;
var sum2=0;
for (var i=0; i < n; i++) {
var v=vNorms[i].dot$javajs_util_T3(vMean);
sum += v;
sum2 += (v) * v;
}
sum=Math.sqrt((sum2 - sum * sum / n) / (n - 1));
return (sum < cutoff );
}, 1);

Clazz.newMeth(C$, 'checkHueckelAromatic$I$org_jmol_util_NodeA$javajs_util_BS$javajs_util_BS$I$IA', function (nAtoms, jmolAtoms, bsAromatic, bsRing, strictness, eCounts) {
var npi=0;
var n1=0;
for (var i=bsRing.nextSetBit$I(0); i >= 0 && npi >= 0 ; i=bsRing.nextSetBit$I(i + 1)) {
var atom=jmolAtoms[i];
var z=atom.getElementNumber$();
var n=atom.getCovalentBondCountPlusMissingH$();
n+=atom.getValence$();
n-=4;
if (z == 6) {
var fc=atom.getFormalCharge$();
if (fc != -2147483648) n+=fc;
}var pt=(z >= 5 && z <= 8  ? z - 5 : z == 15 ? 2 : z == 34 ? 3 : z == 33 ? 4 : z == 16 ? 5 : -1);
if (pt >= 0) {
var a=C$.OS_PI_COUNTS[pt];
if (n < 0 || n >= a.length ) return -1;
switch (n=a[n]) {
case -2:
return -1;
case -1:
var bonds=atom.getEdges$();
n=0;
for (var j=bonds.length; --j >= 0; ) {
var b=bonds[j];
if (b.getCovalentOrder$() != 2) continue;
var het=b.getOtherNode$org_jmol_util_SimpleNode(atom);
n=(het.getElementNumber$() == 6 || bsAromatic.get$I(het.getIndex$())  ? 1 : strictness > 0 ? -100 : 0);
break;
}
default:
if (n < 0) return -1;
if (eCounts != null ) eCounts[i]=n;
npi+=n;
if (n == 1) n1++;
if ($I$(6).debuggingHigh) $I$(6).info$S("atom " + atom + " pi=" + n + " npi=" + npi );
continue;
}
}}
return ((npi - 2) % 4 == 0 && (strictness < 2 || nAtoms == 5  || n1 == 6 )  ? 1 : 0);
}, 1);

Clazz.newMeth(C$, 'finalizeAromatic$org_jmol_util_NodeA$javajs_util_BS$javajs_util_Lst$javajs_util_Lst$IA$Z$Z', function (jmolAtoms, bsAromatic, lstAromatic, lstSP2, eCounts, isOpenNotStrict, isStrict) {
if (isStrict) C$.removeBridgingRings$javajs_util_Lst$javajs_util_Lst(lstAromatic, lstSP2);
C$.checkFusedRings$javajs_util_Lst$IA$javajs_util_Lst(lstSP2, eCounts, lstAromatic);
bsAromatic.clearAll$();
for (var i=lstAromatic.size$(); --i >= 0; ) bsAromatic.or$javajs_util_BS(lstAromatic.get$I(i));

if (isStrict || isOpenNotStrict ) {
for (var i=bsAromatic.nextSetBit$I(0); i >= 0; i=bsAromatic.nextSetBit$I(i + 1)) {
var bonds=jmolAtoms[i].getEdges$();
var naro=0;
for (var j=bonds.length; --j >= 0; ) {
var otherAtom=bonds[j].getOtherNode$org_jmol_util_SimpleNode(jmolAtoms[i]);
var order=bonds[j].getCovalentOrder$();
var ai2=otherAtom.getIndex$();
var isJAro=bsAromatic.get$I(ai2);
if (isJAro) {
if (order == 2) {
var isOK=false;
for (var k=lstSP2.size$(); --k >= 0; ) {
var r=lstSP2.get$I(k);
if (r.get$I(i) && r.get$I(ai2) ) {
isOK=true;
break;
}}
if (!isOK) {
naro=-1;
break;
}}naro++;
} else if (isStrict && otherAtom.getElementNumber$() == 6  && order == 2 ) {
naro=-1;
break;
}}
if (naro < 2) {
bsAromatic.clear$I(i);
i=-1;
}}
}}, 1);

Clazz.newMeth(C$, 'removeBridgingRings$javajs_util_Lst$javajs_util_Lst', function (lstAromatic, lstSP2) {
var bs=Clazz.new_($I$(7));
var bsBad=Clazz.new_($I$(7));
var bsBad2=Clazz.new_($I$(7));
C$.checkBridges$javajs_util_Lst$javajs_util_BS$javajs_util_Lst$javajs_util_BS$javajs_util_BS(lstAromatic, bsBad, lstAromatic, bsBad, bs);
C$.checkBridges$javajs_util_Lst$javajs_util_BS$javajs_util_Lst$javajs_util_BS$javajs_util_BS(lstSP2, bsBad2, lstSP2, bsBad2, bs);
C$.checkBridges$javajs_util_Lst$javajs_util_BS$javajs_util_Lst$javajs_util_BS$javajs_util_BS(lstAromatic, bsBad, lstSP2, bsBad2, bs);
for (var i=lstAromatic.size$(); --i >= 0; ) if (bsBad.get$I(i)) lstAromatic.removeItemAt$I(i);

for (var i=lstSP2.size$(); --i >= 0; ) if (bsBad2.get$I(i)) lstSP2.removeItemAt$I(i);

}, 1);

Clazz.newMeth(C$, 'checkBridges$javajs_util_Lst$javajs_util_BS$javajs_util_Lst$javajs_util_BS$javajs_util_BS', function (lst, bsBad, lst2, bsBad2, bs) {
var isSameList=(lst === lst2 );
for (var i=lst.size$(); --i >= 0; ) {
var bs1=lst.get$I(i);
for (var j0=(isSameList ? i + 1 : 0), j=lst2.size$(); --j >= j0; ) {
var bs2=lst2.get$I(j);
if (bs2.equals$O(bs1)) continue;
bs.clearAll$();
bs.or$javajs_util_BS(bs1);
bs.and$javajs_util_BS(bs2);
var n=bs.cardinality$();
if (n > 2) {
bsBad.set$I(i);
bsBad2.set$I(j);
}}
}
}, 1);

Clazz.newMeth(C$, 'checkFusedRings$javajs_util_Lst$IA$javajs_util_Lst', function (rings, eCounts, lstAromatic) {
var htEdgeMap=Clazz.new_($I$(8));
for (var i=rings.size$(); --i >= 0; ) {
var r=rings.get$I(i);
var edges=r.edges;
for (var j=edges.size$(); --j >= 0; ) {
var set=$I$(3).getSetByEdge$org_jmol_util_Edge$java_util_Hashtable(edges.get$I(j), htEdgeMap);
if (set == null  || set === r.set  ) continue;
if (r.set != null ) set.addSet$org_jmol_smiles_SmilesRingSet$java_util_Hashtable(r.set, htEdgeMap);
 else set.addRing$org_jmol_smiles_SmilesRing(r);
}
(r.set == null  ? r.set=Clazz.new_($I$(9)) : r.set).addRing$org_jmol_smiles_SmilesRing(r);
r.addEdges$java_util_Hashtable(htEdgeMap);
}
var set;
var r;
for (var i=rings.size$(); --i >= 0; ) {
if ((r=rings.get$I(i)).isOK || (set=r.set) == null   || set.isEmpty$() ) continue;
if ((set.getElectronCount$IA(eCounts) % 4) == 2) for (var j=set.size$(); --j >= 0; ) if (!(r=set.get$I(j)).isOK) lstAromatic.addLast$TV(r);

set.clear$();
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
