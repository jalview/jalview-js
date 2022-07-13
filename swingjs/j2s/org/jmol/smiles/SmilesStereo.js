(function(){var P$=Clazz.newPackage("org.jmol.smiles"),p$1={},I$=[[0,'java.util.Arrays','org.jmol.smiles.PolyhedronStereoSorter','javajs.util.Measure','org.jmol.util.Logger','org.jmol.util.Escape','org.jmol.util.Node','org.jmol.smiles.SmilesAtom','javajs.util.V3','javajs.util.PT','org.jmol.smiles.SmilesParser','javajs.util.AU']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SmilesStereo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.chiralClass=-2147483648;
this.chiralOrder=-2147483648;
},1);

C$.$fields$=[['Z',['isNot'],'I',['chiralClass','chiralOrder','atomCount'],'S',['details','directives'],'O',['search','org.jmol.smiles.SmilesSearch','jmolAtoms','org.jmol.util.Node[]','v','org.jmol.smiles.VTemp','polyhedralOrders','int[][]','sorter','org.jmol.smiles.PolyhedronStereoSorter']]
,['O',['PERM_TB','int[]','+PERM_OCT','+PERM_SS']]]

Clazz.newMeth(C$, 'getChiralityClass$S', function (xx) {
return (("0;PH;AL;TP;TH;TB;OH;SP;TS;SS;".indexOf$S(xx) + 1)/3|0);
}, 1);

Clazz.newMeth(C$, 'newStereo$org_jmol_smiles_SmilesSearch', function (search) {
var stereo=Clazz.new_(C$.c$$I$I$I$S$S,[0, 0, 0, null, null]);
stereo.search=search;
return stereo;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$S$S', function (chiralClass, chiralOrder, atomCount, details, directives) {
;C$.$init$.apply(this);
this.chiralClass=chiralClass;
this.chiralOrder=chiralOrder;
this.atomCount=atomCount;
this.details=details;
this.directives=directives;
if (chiralClass == 1) p$1.getPolyhedralOrders.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getChiralClass$org_jmol_smiles_SmilesAtom', function (sAtom) {
if (this.chiralClass == 0) p$1.setChiralClass$org_jmol_smiles_SmilesAtom.apply(this, [sAtom]);
return this.chiralClass;
});

Clazz.newMeth(C$, 'setChiralClass$org_jmol_smiles_SmilesAtom', function (sAtom) {
var nBonds=Math.max(sAtom.explicitHydrogenCount, 0) + sAtom.getBondCount$();
if (this.chiralClass == 0) {
switch (nBonds) {
case 2:
this.chiralClass=2;
break;
case 3:
this.chiralClass=3;
break;
case 4:
case 5:
case 6:
this.chiralClass=nBonds;
break;
}
}return nBonds;
}, p$1);

Clazz.newMeth(C$, 'fixStereo$org_jmol_smiles_SmilesAtom', function (sAtom) {
var nBonds=p$1.setChiralClass$org_jmol_smiles_SmilesAtom.apply(this, [sAtom]);
var nH=Math.max(sAtom.explicitHydrogenCount, 0);
if (nH <= 1) switch (this.chiralClass) {
case 2:
if (nBonds != 2) sAtom.stereo=null;
break;
case 3:
case 8:
if (nBonds != 3) sAtom.stereo=null;
break;
case 7:
case 4:
if (nBonds != 4) sAtom.stereo=null;
break;
case 9:
case 6:
case 5:
if (nBonds != (this.chiralClass == 9 ? 4 : this.chiralClass) || !p$1.normalizeClass$org_jmol_smiles_SmilesAtom.apply(this, [sAtom]) ) sAtom.stereo=null;
break;
case 1:
if (nBonds != 0 && nBonds != this.atomCount ) sAtom.stereo=null;
break;
default:
sAtom.stereo=null;
}
if (sAtom.stereo == null ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Incorrect number of bonds for stereochemistry descriptor"]);
});

Clazz.newMeth(C$, 'normalizeClass$org_jmol_smiles_SmilesAtom', function (atom) {
try {
var bonds=atom.bonds;
if (this.chiralOrder < 3) return true;
var pt=(this.chiralOrder - 1) * 3;
var perm;
var ilast;
switch (this.chiralClass) {
case 9:
perm=C$.PERM_SS;
ilast=3;
break;
case 5:
perm=C$.PERM_TB;
ilast=4;
break;
case 6:
perm=C$.PERM_OCT;
ilast=5;
break;
default:
return true;
}
if (this.chiralOrder > perm.length) return false;
var a=perm[pt];
var z=perm[pt + 2];
var p=Math.abs(perm[pt + 1]);
var isAtAt=(perm[pt + 1] < 0);
var b;
if (a != 0) {
b=bonds[a];
for (var i=a; i > 0; --i) bonds[i]=bonds[i - 1];

bonds[0]=b;
}if (z != ilast) {
b=bonds[z];
for (var i=z; i < ilast; i++) bonds[i]=bonds[i + 1];

bonds[ilast]=b;
}switch (p) {
case 1:
break;
default:
b=bonds[p + 1];
bonds[p + 1]=bonds[p];
bonds[p]=b;
}
this.chiralOrder=(isAtAt ? 2 : 1);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'setTopoCoordinates$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_NodeA', function (atom, sAtom, sAtom2, cAtoms) {
var chClass=atom.stereo.chiralClass;
var chiralOrder=atom.stereo.chiralOrder;
atom.set$F$F$F(0, 0, 0);
var map;
if (this.jmolAtoms == null ) {
map=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3]);
} else {
atom=this.jmolAtoms[sAtom.getMatchingAtomIndex$()];
atom.set$F$F$F(0, 0, 0);
var a2=(chClass == 2 ? this.jmolAtoms[sAtom2.getMatchingAtomIndex$()] : null);
map=p$1.getMappedTopoAtoms$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_NodeA.apply(this, [atom, a2, cAtoms]);
}var pt;
switch (chClass) {
case 1:
break;
case 2:
case 4:
if (chiralOrder == 2) {
pt=map[0];
map[0]=map[1];
map[1]=pt;
}cAtoms[map[0]].set$F$F$F(0, 0, 1);
cAtoms[map[1]].set$F$F$F(1, 0, -1);
cAtoms[map[2]].set$F$F$F(0, 1, -1);
cAtoms[map[3]].set$F$F$F(-1, -1, -1);
break;
case 7:
switch (chiralOrder) {
case 1:
cAtoms[map[0]].set$F$F$F(1, 0, 0);
cAtoms[map[1]].set$F$F$F(0, 1, 0);
cAtoms[map[2]].set$F$F$F(-1, 0, 0);
cAtoms[map[3]].set$F$F$F(0, -1, 0);
break;
case 2:
cAtoms[map[0]].set$F$F$F(1, 0, 0);
cAtoms[map[1]].set$F$F$F(-1, 0, 0);
cAtoms[map[2]].set$F$F$F(0, 1, 0);
cAtoms[map[3]].set$F$F$F(0, -1, 0);
break;
case 3:
cAtoms[map[0]].set$F$F$F(1, 0, 0);
cAtoms[map[1]].set$F$F$F(0, 1, 0);
cAtoms[map[2]].set$F$F$F(0, -1, 0);
cAtoms[map[3]].set$F$F$F(-1, 0, 0);
break;
}
break;
case 8:
switch (chiralOrder) {
case 1:
break;
case 2:
pt=map[2];
map[2]=map[1];
map[1]=pt;
break;
case 3:
pt=map[0];
map[0]=map[1];
map[1]=pt;
break;
}
cAtoms[map[0]].set$F$F$F(0, 0, -1);
cAtoms[map[1]].set$F$F$F(0, 1, 0);
cAtoms[map[2]].set$F$F$F(0, 0, 1);
break;
case 9:
if (chiralOrder == 2) {
pt=map[0];
map[0]=map[3];
map[3]=pt;
}cAtoms[map[0]].set$F$F$F(0, 0, 1);
cAtoms[map[1]].set$F$F$F(0, 1, 0);
cAtoms[map[1]].set$F$F$F(1, 1, 0);
cAtoms[map[2]].set$F$F$F(0, 0, -1);
break;
case 5:
case 6:
var n=map.length;
if (chiralOrder == 2) {
pt=map[0];
map[0]=map[n - 1];
map[n - 1]=pt;
}cAtoms[map[0]].set$F$F$F(0, 0, 1);
cAtoms[map[n - 1]].set$F$F$F(0, 0, -1);
cAtoms[map[1]].set$F$F$F(1, 0, 0);
cAtoms[map[2]].set$F$F$F(0, 1, 0);
cAtoms[map[3]].set$F$F$F(-1, 0, 0);
if (n == 6) cAtoms[map[4]].set$F$F$F(0, -1, 0);
break;
default:
return false;
}
return true;
});

Clazz.newMeth(C$, 'getMappedTopoAtoms$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_NodeA', function (atom, a2, cAtoms) {
var map=Clazz.array(Integer.TYPE, [cAtoms[4] == null  ? 4 : cAtoms[5] == null  ? 5 : 6]);
for (var i=0; i < map.length; i++) {
map[i]=(cAtoms[i] == null  ? 10004 + i * 10000 : cAtoms[i].getIndex$());
}
var bonds=atom.bonds;
var b2=(a2 == null  ? null : a2.getEdges$());
for (var i=0; i < map.length; i++) {
var c=cAtoms[i];
if (!C$.getTopoMapPt$IA$I$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBondA$I(map, i, atom, c, bonds, 10000)) C$.getTopoMapPt$IA$I$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBondA$I(map, i, a2, c, b2, 30000);
}
$I$(1).sort$IA(map);
for (var i=0; i < map.length; i++) {
map[i]=map[i] % 10;
}
return map;
}, p$1);

Clazz.newMeth(C$, 'getTopoMapPt$IA$I$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBondA$I', function (map, i, atom, cAtom, bonds, n000) {
if (cAtom.index == -2147483648) {
map[i]=(bonds[0].isFromPreviousTo$org_jmol_smiles_SmilesAtom(atom) ? 100 : 0) + n000 + i ;
return true;
}var n=bonds.length;
for (var k=0; k < n; k++) {
var bAtom=bonds[k].getOtherNode$org_jmol_util_SimpleNode(atom);
if (bAtom === cAtom ) {
map[i]=(k + 1) * 10 + n000 + i;
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'getJmolAtom$I', function (i) {
return (i < 0 || i >= this.jmolAtoms.length  ? null : this.jmolAtoms[i]);
}, p$1);

Clazz.newMeth(C$, 'sortBondsByStereo$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$javajs_util_T3$org_jmol_util_SimpleEdgeA$javajs_util_V3', function (atom, atomPrev, ref, bonds, vTemp) {
if (bonds.length < 2 || !(Clazz.instanceOf(atom, "javajs.util.T3")) ) return;
if (atomPrev == null ) atomPrev=bonds[0].getOtherNode$org_jmol_util_SimpleNode(atom);
var aTemp=Clazz.array(java.lang.Object, [bonds.length, 0]);
if (this.sorter == null ) this.sorter=Clazz.new_($I$(2,1));
vTemp.sub2$javajs_util_T3$javajs_util_T3(atomPrev, ref);
this.sorter.setRef$javajs_util_V3(vTemp);
for (var i=bonds.length; --i >= 0; ) {
var a=bonds[i].getOtherNode$org_jmol_util_SimpleNode(atom);
var f=(a === atomPrev  ? 0 : this.sorter.isAligned$javajs_util_T3$javajs_util_T3$javajs_util_T3(a, ref, atomPrev) ? -999 : $I$(3).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(atom, atomPrev, ref, a, true));
if (bonds.length > 2) f += 360;
aTemp[i]=Clazz.array(java.lang.Object, -1, [bonds[i], Float.valueOf$F(f), a]);
}
$I$(1).sort$OA$java_util_Comparator(aTemp, this.sorter);
if ($I$(4).debugging) $I$(4,"info$S",[$I$(5).e$O(aTemp)]);
for (var i=bonds.length; --i >= 0; ) bonds[i]=aTemp[i][0];

});

Clazz.newMeth(C$, 'checkStereoChemistry$org_jmol_smiles_SmilesSearch$org_jmol_smiles_VTemp', function (search, v) {
this.v=v;
this.search=search;
this.jmolAtoms=search.targetAtoms;
var haveTopo=search.haveTopo;
var invertStereochemistry=search.invertStereochemistry;
if ($I$(4).debugging) $I$(4).debug$S("checking stereochemistry...");
for (var i=0; i < search.ac; i++) {
var pAtom=search.patternAtoms[i];
if (pAtom.stereo == null ) continue;
var isNot=(pAtom.not != invertStereochemistry );
var atom0=pAtom.getMatchingAtom$();
switch (this.checkStereoForAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_Node$Z$Z(pAtom, atom0, isNot, haveTopo)) {
case 0:
continue;
case 1:
return true;
case -1:
return false;
}
}
return true;
});

Clazz.newMeth(C$, 'checkStereoForAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_Node$Z$Z', function (pAtom, atom0, isNot, haveTopo) {
var atom1=null;
var atom2=null;
var atom3=null;
var atom4=null;
var atom5=null;
var atom6=null;
var pAtom2=null;
var sAtom0=null;
var jn;
if (haveTopo) sAtom0=atom0;
var nH=Math.max(pAtom.explicitHydrogenCount, 0);
var order=pAtom.stereo.chiralOrder;
var chiralClass=pAtom.stereo.chiralClass;
if (haveTopo && sAtom0.getChiralClass$() != chiralClass ) return -1;
if ($I$(4).debugging) $I$(4).debug$S("...type " + chiralClass + " for pattern atom \n " + pAtom + "\n " + atom0 );
switch (chiralClass) {
case 1:
if (pAtom.stereo.isNot) isNot=!isNot;
if (nH > 1 || pAtom.bondCount == 0 ) return 0;
if (haveTopo) {
return 0;
}var bonds=pAtom.bonds;
var jHpt=-1;
if (nH == 1) {
jHpt=(pAtom.isFirst ? 0 : 1);
if (pAtom.getBondCount$() != 3) return -1;
this.v.vA.set$F$F$F(0, 0, 0);
for (var j=0; j < 3; j++) this.v.vA.add$javajs_util_T3(bonds[j].getOtherAtom$org_jmol_smiles_SmilesAtom(sAtom0).getMatchingAtom$());

this.v.vA.scale$F(0.3333);
this.v.vA.sub2$javajs_util_T3$javajs_util_T3(atom0, this.v.vA);
this.v.vA.add$javajs_util_T3(atom0);
}var po=pAtom.stereo.polyhedralOrders;
var pt;
for (var j=po.length; --j >= 0; ) {
var orders=po[j];
if (orders == null  || orders.length < 2 ) continue;
pt=(j > jHpt ? j - nH : j);
var ta1=(j == jHpt ? this.v.vA : bonds[pt].getOtherAtom$org_jmol_smiles_SmilesAtom(pAtom).getMatchingAtom$());
var flast=(isNot ? 3.4028235E38 : 0);
var ta2=null;
for (var k=0; k < orders.length; k++) {
pt=orders[k];
var ta3;
if (pt == jHpt) {
ta3=this.v.vA;
} else {
if (pt > jHpt) pt--;
ta3=bonds[pt].getOtherAtom$org_jmol_smiles_SmilesAtom(pAtom).getMatchingAtom$();
}if (k == 0) {
ta2=ta3;
continue;
}var f=$I$(3).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(ta3, ta1, atom0, ta2, true);
if (Float.isNaN$F(f)) f=180;
if (orders.length == 2) return ((f < 0 ) != isNot  ? 1 : -1);
if (f < 0 ) f += 360;
if ((f < flast ) != isNot ) return -1;
flast=f;
}
}
return 0;
case 2:
jn=this.getAlleneAtoms$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom(pAtom, null);
if (jn == null ) return 0;
if (haveTopo && !this.setTopoCoordinates$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_NodeA(sAtom0, pAtom, pAtom2, jn) ) return -1;
if (!C$.checkStereochemistryAll$Z$org_jmol_util_SimpleNode$I$I$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp(isNot, atom0, chiralClass, order, jn[0], jn[1], jn[2], jn[3], null, null, this.v)) return -1;
return 0;
case 8:
case 9:
case 3:
case 4:
case 7:
case 5:
case 6:
atom1=p$1.getJmolAtom$I.apply(this, [pAtom.getMatchingBondedAtom$I(0)]);
switch (nH) {
case 0:
atom2=p$1.getJmolAtom$I.apply(this, [pAtom.getMatchingBondedAtom$I(1)]);
break;
case 1:
atom2=this.search.findImplicitHydrogen$org_jmol_util_Node(pAtom.getMatchingAtom$());
if (pAtom.isFirst) {
var a=atom2;
atom2=atom1;
atom1=a;
}break;
default:
return 0;
}
atom3=p$1.getJmolAtom$I.apply(this, [pAtom.getMatchingBondedAtom$I(2 - nH)]);
atom4=p$1.getJmolAtom$I.apply(this, [pAtom.getMatchingBondedAtom$I(3 - nH)]);
atom5=p$1.getJmolAtom$I.apply(this, [pAtom.getMatchingBondedAtom$I(4 - nH)]);
atom6=p$1.getJmolAtom$I.apply(this, [pAtom.getMatchingBondedAtom$I(5 - nH)]);
if (haveTopo && !this.setTopoCoordinates$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_NodeA(sAtom0, pAtom, null, Clazz.array($I$(6), -1, [atom1, atom2, atom3, atom4, atom5, atom6])) ) return -1;
if (!C$.checkStereochemistryAll$Z$org_jmol_util_SimpleNode$I$I$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp(isNot, atom0, chiralClass, order, atom1, atom2, atom3, atom4, atom5, atom6, this.v)) return -1;
return 0;
}
return 0;
});

Clazz.newMeth(C$, 'getAlleneAtoms$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom', function (pAtom, pAtom1) {
if (pAtom1 == null ) pAtom1=pAtom.getBond$I(0).getOtherAtom$org_jmol_smiles_SmilesAtom(pAtom);
var pAtom2=pAtom.getBond$I(1).getOtherAtom$org_jmol_smiles_SmilesAtom(pAtom);
if (pAtom2 === pAtom1 ) pAtom2=pAtom.getBond$I(0).getOtherAtom$org_jmol_smiles_SmilesAtom(pAtom);
if (pAtom1 == null  || pAtom2 == null  ) return null;
var pAtom1a=pAtom;
var pAtom2a=pAtom;
while (pAtom1.getBondCount$() == 2 && pAtom2.getBondCount$() == 2  && pAtom1.getValence$() == 4  && pAtom2.getValence$() == 4 ){
var b=pAtom1.getBondNotTo$org_jmol_smiles_SmilesAtom$Z(pAtom1a, true);
pAtom1a=pAtom1;
pAtom1=b.getOtherAtom$org_jmol_smiles_SmilesAtom(pAtom1);
b=pAtom2.getBondNotTo$org_jmol_smiles_SmilesAtom$Z(pAtom2a, true);
pAtom2a=pAtom2;
pAtom2=b.getOtherAtom$org_jmol_smiles_SmilesAtom(pAtom2);
}
pAtom=pAtom1;
var jn=Clazz.array($I$(6), [6]);
jn[4]=Clazz.new_($I$(7,1)).setIndex$I(60004);
var nBonds=pAtom.getBondCount$();
if (nBonds != 2 && nBonds != 3 ) return null;
for (var k=0, p=0; k < nBonds; k++) {
var b=pAtom.bonds[k];
pAtom1=b.getOtherAtom$org_jmol_smiles_SmilesAtom(pAtom);
if (b.getMatchingBond$().getCovalentOrder$() == 2) {
if (pAtom2 == null ) pAtom2=pAtom1;
continue;
}if ((b.atom1 === pAtom1 ) && (!b.isConnection || pAtom1.index > pAtom.index ) ) {
p=0;
} else if (jn[1] == null ) {
p=1;
} else {
jn[0]=jn[p=1];
}jn[p]=pAtom1.getMatchingAtom$();
}
if (pAtom2 == null ) return null;
nBonds=pAtom2.getBondCount$();
if (nBonds != 2 && nBonds != 3 ) return null;
for (var p=0, k=0; k < nBonds; k++) {
var b=pAtom2.bonds[k];
pAtom1=b.getOtherAtom$org_jmol_smiles_SmilesAtom(pAtom2);
if (b.getMatchingBond$().getCovalentOrder$() == 2) {
continue;
}if ((b.atom1 === pAtom1 ) && (!b.isConnection || pAtom1.index > pAtom2.index ) ) {
p=2;
} else if (jn[3] == null ) {
p=3;
} else {
jn[2]=jn[p=3];
}jn[p]=pAtom1.getMatchingAtom$();
}
for (var k=0; k < 4; k++) if (jn[k] == null ) p$1.addAlleneLonePair$org_jmol_smiles_SmilesAtom$org_jmol_util_NodeA$I.apply(this, [k < 2 ? pAtom : pAtom2, jn, k]);

return jn;
});

Clazz.newMeth(C$, 'addAlleneLonePair$org_jmol_smiles_SmilesAtom$org_jmol_util_NodeA$I', function (pAtom, jn, k) {
var atom=pAtom.getMatchingAtom$();
jn[k]=this.search.findImplicitHydrogen$org_jmol_util_Node(atom);
if (jn[k] != null ) return;
var v=Clazz.new_($I$(8,1));
for (var i=0; i < 4; i++) if (jn[i] != null ) v.sub$javajs_util_T3(jn[i]);

if (v.length$() == 0 ) {
v.setT$javajs_util_T3((jn[4]));
} else {
v.scaleAdd2$F$javajs_util_T3$javajs_util_T3(2, pAtom.getMatchingAtom$(), v);
}jn[k]=Clazz.new_($I$(7,1)).setIndex$I(-2147483648);
(jn[k]).setT$javajs_util_T3(v);
}, p$1);

Clazz.newMeth(C$, 'getStereoFlag$org_jmol_util_SimpleNode$org_jmol_util_SimpleNodeA$I$org_jmol_smiles_VTemp', function (atom0, atoms, nAtoms, v) {
var atom1=atoms[0];
var atom2=atoms[1];
var atom3=atoms[2];
var atom4=atoms[3];
var atom5=atoms[4];
var atom6=atoms[5];
var chiralClass=4;
switch (nAtoms) {
default:
case 5:
case 6:
return (C$.checkStereochemistryAll$Z$org_jmol_util_SimpleNode$I$I$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp(false, atom0, chiralClass, 1, atom1, atom2, atom3, atom4, atom5, atom6, v) ? "@" : "@@");
case 2:
case 4:
if (atom3 == null  || atom4 == null  ) return "";
var d=$I$(3).getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(atom1, atom2, atom3, v.vTemp, v.vA);
if (Math.abs($I$(3).distanceToPlaneV$javajs_util_V3$F$javajs_util_P3(v.vTemp, d, atom4)) < 0.2 ) {
chiralClass=7;
if (C$.checkStereochemistryAll$Z$org_jmol_util_SimpleNode$I$I$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp(false, atom0, chiralClass, 1, atom1, atom2, atom3, atom4, atom5, atom6, v)) return "@SP1";
if (C$.checkStereochemistryAll$Z$org_jmol_util_SimpleNode$I$I$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp(false, atom0, chiralClass, 2, atom1, atom2, atom3, atom4, atom5, atom6, v)) return "@SP2";
if (C$.checkStereochemistryAll$Z$org_jmol_util_SimpleNode$I$I$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp(false, atom0, chiralClass, 3, atom1, atom2, atom3, atom4, atom5, atom6, v)) return "@SP3";
} else {
return (C$.checkStereochemistryAll$Z$org_jmol_util_SimpleNode$I$I$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp(false, atom0, chiralClass, 1, atom1, atom2, atom3, atom4, atom5, atom6, v) ? "@" : "@@");
}}
return "";
}, 1);

Clazz.newMeth(C$, 'checkStereochemistryAll$Z$org_jmol_util_SimpleNode$I$I$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp', function (isNot, atom0, chiralClass, order, atom1, atom2, atom3, atom4, atom5, atom6, v) {
switch (chiralClass) {
default:
return true;
case 2:
case 4:
return (isNot == (C$.getHandedness$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp(atom2, atom3, atom4, atom1, v) != order) );
case 7:
C$.getPlaneNormals$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$org_jmol_smiles_VTemp(atom1, atom2, atom3, atom4, v);
return (v.vNorm2.dot$javajs_util_T3(v.vNorm3) < 0  ? isNot == (order != 3)  : v.vNorm3.dot$javajs_util_T3(v.vNorm4) < 0  ? isNot == (order != 2)  : isNot == (order != 1) );
case 3:
return (isNot == (C$.getHandedness$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp(atom1, atom2, atom3, atom0, v) != order) );
case 5:
if (!C$.isDiaxial$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp$F(atom0, atom0, atom5, atom1, v, -0.95)) return false;
return (isNot == (C$.getHandedness$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp(atom2, atom3, atom4, atom1, v) != order) );
case 8:
switch (order) {
case 1:
break;
case 2:
atom3=atom2;
break;
case 3:
atom1=atom2;
break;
}
return (isNot == !C$.isDiaxial$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp$F(atom0, atom0, atom1, atom3, v, -0.95) );
case 9:
if (!C$.isDiaxial$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp$F(atom0, atom0, atom4, atom1, v, -0.95)) return false;
return (isNot == (C$.getHandedness$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp(atom2, atom3, atom4, atom1, v) != order) );
case 6:
if (!C$.isDiaxial$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp$F(atom0, atom0, atom6, atom1, v, -0.95) || !C$.isDiaxial$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp$F(atom0, atom0, atom2, atom4, v, -0.95) || !C$.isDiaxial$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp$F(atom0, atom0, atom3, atom5, v, -0.95)  ) return false;
C$.getPlaneNormals$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$org_jmol_smiles_VTemp(atom2, atom3, atom4, atom5, v);
if (v.vNorm2.dot$javajs_util_T3(v.vNorm3) < 0  || v.vNorm3.dot$javajs_util_T3(v.vNorm4) < 0  ) return false;
v.vNorm3.sub2$javajs_util_T3$javajs_util_T3(atom0, atom1);
return (isNot == ((v.vNorm2.dot$javajs_util_T3(v.vNorm3) < 0  ? 2 : 1) == order) );
case 1:
return true;
}
}, 1);

Clazz.newMeth(C$, 'isDiaxial$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp$F', function (atomA, atomB, atom1, atom2, v, f) {
v.vA.sub2$javajs_util_T3$javajs_util_T3(atomA, atom1);
v.vB.sub2$javajs_util_T3$javajs_util_T3(atomB, atom2);
v.vA.normalize$();
v.vB.normalize$();
return (v.vA.dot$javajs_util_T3(v.vB) < f );
}, 1);

Clazz.newMeth(C$, 'getHandedness$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp', function (a, b, c, pt, v) {
var d=$I$(3).getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(a, b, c, v.vTemp, v.vA);
d=$I$(3).distanceToPlaneV$javajs_util_V3$F$javajs_util_P3(v.vTemp, d, pt);
return (d > 0  ? 1 : 2);
}, 1);

Clazz.newMeth(C$, 'getPlaneNormals$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$org_jmol_smiles_VTemp', function (atom1, atom2, atom3, atom4, v) {
$I$(3).getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(atom1, atom2, atom3, v.vNorm2, v.vTemp1);
$I$(3).getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(atom2, atom3, atom4, v.vNorm3, v.vTemp1);
$I$(3).getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(atom3, atom4, atom1, v.vNorm4, v.vTemp1);
}, 1);

Clazz.newMeth(C$, 'checkChirality$org_jmol_smiles_SmilesSearch$S$I$org_jmol_smiles_SmilesAtom', function (search, pattern, index, newAtom) {
var stereoClass=0;
var order=-2147483648;
var len=pattern.length$();
var details=null;
var directives=null;
var atomCount=0;
var ch;
stereoClass=0;
order=1;
var isPoly=false;
if (++index < len) {
switch ((ch=pattern.charAt$I(index)).$c()) {
case 64:
order=2;
index++;
break;
case 43:
case 45:
case 72:
break;
case 80:
isPoly=true;
case 65:
case 79:
case 83:
case 84:
stereoClass=(index + 1 < len ? C$.getChiralityClass$S(pattern.substring$I$I(index, index + 2)) : -1);
index+=2;
break;
default:
order=($I$(9).isDigit$C(ch) ? 1 : -1);
}
var pt=index;
if (order == 1 || isPoly ) {
while (pt < len && $I$(9,"isDigit$C",[pattern.charAt$I(pt)]) )pt++;

if (pt > index) {
try {
var n=Integer.parseInt$S(pattern.substring$I$I(index, pt));
if (isPoly) {
atomCount=n;
if (pt < len && pattern.charAt$I(pt) == "(" ) {
details=$I$(10,"getSubPattern$S$I$C",[pattern, pt, "("]);
pt+=details.length$() + 2;
}if (pt < len && pattern.charAt$I(pt) == "/" ) {
directives=$I$(10).getSubPattern$S$I$C(pattern, pt, "/");
pt+=directives.length$() + 2;
}} else {
order=n;
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
order=-1;
} else {
throw e;
}
}
index=pt;
}}if (order < 1 || stereoClass < 0 ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Invalid stereochemistry descriptor"]);
}newAtom.stereo=Clazz.new_(C$.c$$I$I$I$S$S,[stereoClass, order, atomCount, details, directives]);
newAtom.stereo.search=search;
if ($I$(10).getChar$S$I(pattern, index) == "?") {
$I$(4).info$S("Ignoring \'?\' in stereochemistry");
index++;
}return index;
}, 1);

Clazz.newMeth(C$, 'getPolyhedralOrders', function () {
var po=this.polyhedralOrders=$I$(11).newInt2$I(this.atomCount);
if (this.details == null ) return;
var temp=Clazz.array(Integer.TYPE, [this.details.length$()]);
var ret=Clazz.array(Integer.TYPE, [1]);
var msg=null;
var pt=0;
var s=this.details + "/";
var n=0;
var len=s.length$();
var index=0;
var atomPt=0;
do {
var ch=s.charAt$I(index);
switch (ch.$c()) {
case 33:
this.isNot=true;
index++;
break;
case 47:
case 46:
if ((pt=atomPt) >= this.atomCount) {
msg="Too many descriptors";
break;
}var a=po[atomPt]=Clazz.array(Integer.TYPE, [n]);
for (; --n >= 0; ) a[n]=temp[n];

n=0;
if ($I$(4).debugging) $I$(4,"info$S",[$I$(9).toJSON$S$O("@PH" + this.atomCount + "[" + atomPt + "]" , a)]);
if (ch == "/") index=2147483647;
 else index++;
atomPt++;
break;
default:
index=$I$(10).getRingNumber$S$I$C$IA(s, index, ch, ret);
pt=temp[n++]=ret[0] - 1;
if (pt == atomPt) msg="Atom cannot connect to itself";
 else if (pt < 0 || pt >= this.atomCount ) msg="Connection number outside of range (1-" + this.atomCount + ")" ;
 else if (n >= this.atomCount) msg="Too many connections indicated";
}
if (msg != null ) {
msg += ": " + s.substring$I$I(0, index) + "<<" ;
throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,[msg]);
}} while (index < len);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.PERM_TB=Clazz.array(Integer.TYPE, -1, [0, 1, 4, 0, -1, 4, 0, 1, 3, 0, -1, 3, 0, 1, 2, 0, -1, 2, 0, 1, 1, 0, -1, 1, 1, 1, 4, 1, 1, 3, 1, -1, 4, 1, -1, 3, 1, 1, 2, 1, -1, 2, 2, 1, 4, 2, 1, 3, 3, 1, 4, 3, -1, 4, 2, -1, 3, 2, -1, 4]);
C$.PERM_OCT=Clazz.array(Integer.TYPE, -1, [0, 1, 5, 0, -1, 5, 0, 1, 4, 0, 3, 5, 0, 3, 4, 0, 1, 3, 0, 3, 3, 0, 2, 5, 0, 2, 4, 0, -2, 5, 0, -2, 4, 0, 2, 3, 0, -2, 3, 0, -3, 5, 0, -3, 4, 0, -1, 4, 0, -3, 3, 0, -1, 3, 0, 1, 2, 0, 3, 2, 0, 2, 2, 0, -2, 2, 0, -3, 2, 0, -1, 2, 0, 1, 1, 0, 3, 1, 0, 2, 1, 0, -2, 1, 0, -3, 1, 0, -1, 1]);
C$.PERM_SS=Clazz.array(Integer.TYPE, -1, [0, 1, 3, 0, -1, 3, 0, 1, 2, 0, -1, 2, 0, 1, 1, 0, -1, 1, 1, 1, 3, 1, -1, 3, 1, 1, 2, 1, -1, 2, 2, 1, 3, 2, -1, 3]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
