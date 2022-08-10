(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'org.jmol.util.Elements','javajs.util.BS','javajs.util.AU','java.util.Hashtable','javajs.util.PT']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JmolMolecule");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.elementCounts=Clazz.array(Integer.TYPE, [$I$(1).elementNumberMax]);
this.altElementCounts=Clazz.array(Integer.TYPE, [$I$(1).altElementMax]);
},1);

C$.$fields$=[['I',['moleculeIndex','modelIndex','indexInModel','firstAtomIndex','ac','nElements','elementNumberMax','altElementMax'],'S',['mf'],'O',['nodes','org.jmol.util.Node[]','elementCounts','int[]','+altElementCounts','atomList','javajs.util.BS']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMolecules$org_jmol_util_NodeA$javajs_util_BSA$javajs_util_Lst$javajs_util_BS', function (atoms, bsModelAtoms, biobranches, bsExclude) {
var bsToTest=null;
var bsBranch=Clazz.new_($I$(2,1));
var thisModelIndex=-1;
var indexInModel=0;
var moleculeCount=0;
var molecules=Clazz.array(C$, [4]);
if (bsExclude == null ) bsExclude=Clazz.new_($I$(2,1));
for (var i=0; i < atoms.length; i++) if (!bsExclude.get$I(i) && !bsBranch.get$I(i) ) {
if (atoms[i].isDeleted$()) {
bsExclude.set$I(i);
continue;
}var modelIndex=atoms[i].getModelIndex$();
if (modelIndex != thisModelIndex) {
thisModelIndex=modelIndex;
indexInModel=0;
bsToTest=bsModelAtoms[modelIndex];
}bsBranch=C$.getBranchBitSet$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_Lst$I$Z$Z(atoms, i, bsToTest, biobranches, -1, true, true);
if (bsBranch.nextSetBit$I(0) >= 0) {
molecules=C$.addMolecule$org_jmol_util_JmolMoleculeA$I$org_jmol_util_NodeA$I$javajs_util_BS$I$I$javajs_util_BS(molecules, moleculeCount++, atoms, i, bsBranch, modelIndex, indexInModel++, bsExclude);
}}
return C$.allocateArray$org_jmol_util_JmolMoleculeA$I(molecules, moleculeCount);
}, 1);

Clazz.newMeth(C$, 'getBranchBitSet$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_Lst$I$Z$Z', function (atoms, atomIndex, bsToTest, biobranches, atomIndexNot, allowCyclic, allowBioResidue) {
var bs=$I$(2).newN$I(atoms.length);
if (atomIndex < 0) return bs;
if (atomIndexNot >= 0) bsToTest.clear$I(atomIndexNot);
return (C$.getCovalentlyConnectedBitSet$org_jmol_util_NodeA$org_jmol_util_Node$javajs_util_BS$Z$Z$javajs_util_Lst$javajs_util_BS(atoms, atoms[atomIndex], bsToTest, allowCyclic, allowBioResidue, biobranches, bs) ? bs : Clazz.new_($I$(2,1)));
}, 1);

Clazz.newMeth(C$, 'addMolecule$org_jmol_util_JmolMoleculeA$I$org_jmol_util_NodeA$I$javajs_util_BS$I$I$javajs_util_BS', function (molecules, iMolecule, atoms, iAtom, bsBranch, modelIndex, indexInModel, bsExclude) {
bsExclude.or$javajs_util_BS(bsBranch);
if (iMolecule == molecules.length) molecules=C$.allocateArray$org_jmol_util_JmolMoleculeA$I(molecules, iMolecule * 2 + 1);
molecules[iMolecule]=C$.initialize$org_jmol_util_NodeA$I$I$javajs_util_BS$I$I(atoms, iMolecule, iAtom, bsBranch, modelIndex, indexInModel);
return molecules;
}, 1);

Clazz.newMeth(C$, 'getMolecularFormulaAtoms$org_jmol_util_NodeA$javajs_util_BS$FA$Z', function (atoms, bsSelected, wts, isEmpirical) {
var m=Clazz.new_(C$);
m.nodes=atoms;
m.atomList=bsSelected;
return m.getMolecularFormula$Z$FA$Z(false, wts, isEmpirical);
}, 1);

Clazz.newMeth(C$, 'getMolecularFormula$Z$FA$Z', function (includeMissingHydrogens, wts, isEmpirical) {
if (this.mf != null ) return this.mf;
if (this.atomList == null ) {
this.atomList=Clazz.new_($I$(2,1));
this.atomList.setBits$I$I(0, this.nodes.length);
}this.elementCounts=Clazz.array(Integer.TYPE, [$I$(1).elementNumberMax]);
this.altElementCounts=Clazz.array(Integer.TYPE, [$I$(1).altElementMax]);
this.ac=this.atomList.cardinality$();
this.nElements=0;
for (var p=0, i=this.atomList.nextSetBit$I(0); i >= 0; i=this.atomList.nextSetBit$I(i + 1), p++) {
var node=this.nodes[i];
if (node == null ) continue;
var n=node.getAtomicAndIsotopeNumber$();
var f=(wts == null  ? 1 : ((8 * wts[p])|0));
if (n < $I$(1).elementNumberMax) {
if (this.elementCounts[n] == 0) this.nElements++;
this.elementCounts[n]+=f;
this.elementNumberMax=Math.max(this.elementNumberMax, n);
if (includeMissingHydrogens) {
var nH=node.getImplicitHydrogenCount$();
if (nH > 0) {
if (this.elementCounts[1] == 0) this.nElements++;
this.elementCounts[1]+=nH * f;
}}} else {
n=$I$(1).altElementIndexFromNumber$I(n);
if (this.altElementCounts[n] == 0) this.nElements++;
this.altElementCounts[n]+=f;
this.altElementMax=Math.max(this.altElementMax, n);
}}
if (wts != null ) for (var i=1; i <= this.elementNumberMax; i++) {
var c=(this.elementCounts[i]/8|0);
if (c * 8 != this.elementCounts[i]) return "?";
this.elementCounts[i]=c;
}
if (isEmpirical) {
var min=2;
var ok=true;
while (ok){
min=100000;
var c;
for (var i=1; i <= this.elementNumberMax; i++) if ((c=this.elementCounts[i]) > 0 && c < min ) min=c;

if (min == 1) break;
var j=min;
for (; j > 1; j--) {
ok=true;
for (var i=1; i <= this.elementNumberMax && ok ; i++) if (((c=this.elementCounts[i])/j|0) * j != c) ok=false;

if (ok) {
for (var i=1; i <= this.elementNumberMax; i++) this.elementCounts[i]=(this.elementCounts[i]/(j)|0);

break;
}}
}
}var mf="";
var sep="";
var nX;
for (var i=1; i <= this.elementNumberMax; i++) {
nX=this.elementCounts[i];
if (nX != 0) {
mf += sep + $I$(1).elementSymbolFromNumber$I(i) + " " + nX ;
sep=" ";
}}
for (var i=1; i <= this.altElementMax; i++) {
nX=this.altElementCounts[i];
if (nX != 0) {
mf += sep + $I$(1,"elementSymbolFromNumber$I",[$I$(1).altElementNumberFromIndex$I(i)]) + " " + nX ;
sep=" ";
}}
return mf;
});

Clazz.newMeth(C$, 'initialize$org_jmol_util_NodeA$I$I$javajs_util_BS$I$I', function (nodes, moleculeIndex, firstAtomIndex, atomList, modelIndex, indexInModel) {
var jm=Clazz.new_(C$);
jm.nodes=nodes;
jm.firstAtomIndex=firstAtomIndex;
jm.atomList=atomList;
jm.ac=atomList.cardinality$();
jm.moleculeIndex=moleculeIndex;
jm.modelIndex=modelIndex;
jm.indexInModel=indexInModel;
return jm;
}, 1);

Clazz.newMeth(C$, 'getCovalentlyConnectedBitSet$org_jmol_util_NodeA$org_jmol_util_Node$javajs_util_BS$Z$Z$javajs_util_Lst$javajs_util_BS', function (atoms, atom, bsToTest, allowCyclic, allowBioResidue, biobranches, bsResult) {
var atomIndex=atom.getIndex$();
if (!bsToTest.get$I(atomIndex)) return allowCyclic;
if (!allowBioResidue && atom.getBioStructureTypeName$().length$() > 0 ) return allowCyclic;
bsToTest.clear$I(atomIndex);
if (biobranches != null  && !bsResult.get$I(atomIndex) ) {
for (var i=biobranches.size$(); --i >= 0; ) {
var b=biobranches.get$I(i);
if (b.get$I(atomIndex)) {
bsResult.or$javajs_util_BS(b);
bsToTest.andNot$javajs_util_BS(b);
for (var j=b.nextSetBit$I(0); j >= 0; j=b.nextSetBit$I(j + 1)) {
var atom1=atoms[j];
bsToTest.set$I(j);
C$.getCovalentlyConnectedBitSet$org_jmol_util_NodeA$org_jmol_util_Node$javajs_util_BS$Z$Z$javajs_util_Lst$javajs_util_BS(atoms, atom1, bsToTest, allowCyclic, allowBioResidue, biobranches, bsResult);
bsToTest.clear$I(j);
}
break;
}}
}bsResult.set$I(atomIndex);
var bonds=atom.getEdges$();
if (bonds == null ) return true;
for (var i=bonds.length; --i >= 0; ) {
var bond=bonds[i];
if (bond != null  && bond.isCovalent$()  && !C$.getCovalentlyConnectedBitSet$org_jmol_util_NodeA$org_jmol_util_Node$javajs_util_BS$Z$Z$javajs_util_Lst$javajs_util_BS(atoms, bond.getOtherNode$org_jmol_util_SimpleNode(atom), bsToTest, allowCyclic, allowBioResidue, biobranches, bsResult) ) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'allocateArray$org_jmol_util_JmolMoleculeA$I', function (molecules, len) {
return (len == molecules.length ? molecules : $I$(3).arrayCopyObject$O$I(molecules, len));
}, 1);

Clazz.newMeth(C$, 'getBitSetForMF$org_jmol_modelset_AtomA$javajs_util_BS$S', function (at, bsAtoms, mf) {
var map=Clazz.new_($I$(4,1));
var ch;
var isDigit;
mf=$I$(5,"rep$S$S$S",[$I$(5).clean$S(mf + "Z"), " ", ""]);
for (var i=0, pt=0, pt0=0, n=mf.length$(); i < n; i++) {
if ((isDigit=Character.isDigit$C((ch=mf.charAt$I(i)))) || i > 0 && Character.isUpperCase$C(ch)  ) {
pt0=i;
var s=mf.substring$I$I(pt, pt0).trim$();
if (isDigit) while (i < n && Character.isDigit$C(mf.charAt$I(i)) )i++;

pt=i;
map.put$O$O(s, Clazz.array(Integer.TYPE, -1, [isDigit ? $I$(5,"parseInt$S",[mf.substring$I$I(pt0, pt)]) : 1]));
}}
var bs=Clazz.new_($I$(2,1));
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
var a=at[i].getElementSymbol$();
var c=map.get$O(a);
if (c == null  || c[0]-- < 1 ) continue;
bs.set$I(i);
}
for (var e, $e = map.values$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (e[0] > 0) return Clazz.new_($I$(2,1));

return bs;
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
