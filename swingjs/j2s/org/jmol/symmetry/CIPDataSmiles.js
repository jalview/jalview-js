(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),p$1={},I$=[[0,'org.jmol.util.Node','org.jmol.util.BSUtil','javajs.util.Measure','javajs.util.Lst']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CIPDataSmiles", null, 'org.jmol.symmetry.CIPData');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.smiles=null;
this.nodes=Clazz.array($I$(1), [6]);
},1);

C$.$fields$=[['S',['smiles'],'O',['nodes','org.jmol.util.Node[]']]]

Clazz.newMeth(C$, 'isSmiles$', function () {
return true;
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setAtomsForSmiles$org_jmol_viewer_Viewer$S', function (vwr, smiles) {
this.vwr=vwr;
this.smiles=smiles;
this.atoms=vwr.getSmilesAtoms$S(smiles);
this.bsAtoms=$I$(2).newBitSet2$I$I(0, this.atoms.length);
this.bsMolecule=this.bsAtoms.clone$();
this.init$();
return this;
});

Clazz.newMeth(C$, 'getList$S', function (smarts) {
return this.vwr.getSubstructureSetArrayForNodes$S$org_jmol_util_NodeA$I(smarts, this.atoms, 2);
});

Clazz.newMeth(C$, 'match$S', function (smarts) {
return this.vwr.getSmartsMatchForNodes$S$org_jmol_util_NodeA(smarts, this.atoms);
});

Clazz.newMeth(C$, 'getBondOrder$org_jmol_util_SimpleEdge', function (bond) {
return (bond).getRealCovalentOrder$();
});

Clazz.newMeth(C$, 'isCis$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom', function (a, b, c, d) {
var stereo1=p$1.getStereoEdge$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode.apply(this, [b.atom, a.atom]);
var stereo2=p$1.getStereoEdge$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode.apply(this, [c.atom, d.atom]);
return (stereo1 == 0 || stereo2 == 0  ? 0 : stereo1 != stereo2 ? 14 : 13);
});

Clazz.newMeth(C$, 'getStereoEdge$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode', function (atom, winner) {
var edges=atom.getEdges$();
var order=0;
for (var i=edges.length; --i >= 0; ) {
var edge=edges[i];
switch (order=edge.getCovalentOrder$()) {
case 1025:
return (edge.getOtherNode$org_jmol_util_SimpleNode(atom) === winner ) == (edge.getAtom1$() === atom )  ? 1041 : order;
case 1041:
return (edges[i].getOtherNode$org_jmol_util_SimpleNode(atom) === winner ) == (edge.getAtom1$() === atom )  ? 1025 : order;
}
}
return 0;
}, p$1);

Clazz.newMeth(C$, 'isPositiveTorsion$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom', function (a, b, c, d) {
var center=p$1.findCumulativeCenter$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom.apply(this, [b, c]);
if (center == null ) return 0;
var jn=center.stereo.getAlleneAtoms$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom(center, b.atom);
if (jn == null ) return 0;
center.stereo.setTopoCoordinates$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_NodeA(center, null, null, jn);
var angle=$I$(3,"computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z",[jn[0].getXYZ$(), jn[1].getXYZ$(), jn[2].getXYZ$(), jn[3].getXYZ$(), true]);
return ((angle > 0 ) == ((a.atom.getIndex$() == jn[0].getIndex$()) && (d.atom.getIndex$() == jn[3].getIndex$())  || (a.atom.getIndex$() == jn[1].getIndex$()) && (d.atom.getIndex$() == jn[2].getIndex$())  )  ? 18 : 17);
});

Clazz.newMeth(C$, 'findCumulativeCenter$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom', function (a, a2) {
var center=a.atom;
var c=null;
var b=null;
while (center != null  && center !== a2.atom  ){
var edges=center.getEdges$();
for (var i=edges.length; --i >= 0; ) {
if (edges[i].getCovalentOrder$() == 2 && (c=edges[i].getOtherNode$org_jmol_util_SimpleNode(center)) !== b  ) {
var sa=c;
if (sa.stereo != null ) {
return sa;
}}}
b=center;
center=c;
}
return null;
}, p$1);

Clazz.newMeth(C$, 'setCoord$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtomA', function (atom, atoms) {
var a=atom;
if (a.stereo == null ) return false;
var edges=a.getEdges$();
for (var i=edges.length; --i >= 0; ) this.nodes[i]=edges[i].getOtherNode$org_jmol_util_SimpleNode(a);

a.stereo.setTopoCoordinates$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_NodeA(a, null, null, this.nodes);
return true;
});

Clazz.newMeth(C$, 'getSmilesChiralityArray$', function () {
var chirality=Clazz.new_($I$(4,1));
for (var i=0; i < this.atoms.length; i++) {
var a=this.atoms[i];
var pt=a.getPatternIndex$();
if (pt >= 0) {
var c=a.getCIPChirality$Z(false);
chirality.addLast$O(c);
}}
return chirality.toArray$OA(Clazz.array(String, [chirality.size$()]));
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
