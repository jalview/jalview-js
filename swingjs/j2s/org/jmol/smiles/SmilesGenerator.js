(function(){var P$=Clazz.newPackage("org.jmol.smiles"),p$1={},I$=[[0,'org.jmol.smiles.VTemp','javajs.util.BS','java.util.Hashtable','org.jmol.util.BSUtil','org.jmol.smiles.SmilesSearch','javajs.util.SB','javajs.util.Lst','org.jmol.util.Elements','org.jmol.util.JmolMolecule','org.jmol.smiles.SmilesParser','javajs.util.AU','org.jmol.util.Edge','org.jmol.util.SimpleNode','org.jmol.smiles.SmilesStereo','org.jmol.util.Logger','org.jmol.util.Node','org.jmol.smiles.SmilesAtom','org.jmol.smiles.SmilesBond']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SmilesGenerator");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.atoms=null;
this.ac=0;
this.bsSelected=null;
this.bsAromatic=null;
this.flags=0;
this.explicitH=false;
this.ringSets=null;
this.vTemp=null;
this.nPairs=0;
this.nPairsMax=0;
this.bsBondsUp=null;
this.bsBondsDn=null;
this.bsToDo=null;
this.prevAtom=null;
this.prevSp2Atoms=null;
this.alleneStereo=null;
this.htRingsSequence=null;
this.htRings=null;
this.bsRingKeys=null;
this.bsIncludingH=null;
this.topologyOnly=false;
this.getAromatic=false;
this.addAtomComment=false;
this.noBioComment=false;
this.aromaticDouble=false;
this.noStereo=false;
this.openSMILES=false;
this.polySmilesCenter=null;
this.smilesStereo=null;
this.isPolyhedral=false;
this.aromaticRings=null;
this.sm=null;
this.iHypervalent=0;
this.ptAtom=0;
this.ptSp2Atom0=0;
this.atemp=null;
this.chainCheck=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.vTemp=Clazz.new_($I$(1));
this.bsBondsUp=Clazz.new_($I$(2));
this.bsBondsDn=Clazz.new_($I$(2));
this.htRingsSequence=Clazz.new_($I$(3));
this.htRings=Clazz.new_($I$(3));
this.bsRingKeys=Clazz.new_($I$(2));
this.getAromatic=true;
}, 1);

Clazz.newMeth(C$, 'getSmiles$org_jmol_smiles_SmilesMatcher$org_jmol_util_NodeA$I$javajs_util_BS$S$I', function (sm, atoms, ac, bsSelected, comment, flags) {
var ipt=bsSelected.nextSetBit$I(0);
if (ipt < 0) return "";
this.sm=sm;
this.flags=flags;
this.atoms=atoms;
this.ac=ac;
bsSelected=$I$(4).copy$javajs_util_BS(bsSelected);
this.bsSelected=bsSelected;
this.flags=flags=$I$(5).addFlags$I$S(flags, comment == null  ? "" : comment.toUpperCase$());
if ((flags & 1048576) == 1048576) return p$1.getBioSmiles$javajs_util_BS$S$I.apply(this, [bsSelected, comment, flags]);
this.openSMILES=((flags & 5) == 5);
this.addAtomComment=((flags & 131072) == 131072);
this.aromaticDouble=((flags & 512) == 512);
this.explicitH=((flags & 4096) == 4096);
this.topologyOnly=((flags & 8192) == 8192);
this.getAromatic=!((flags & 16) == 16);
this.noStereo=((flags & 32) == 32);
this.isPolyhedral=((flags & 65536) == 65536);
return p$1.getSmilesComponent$org_jmol_util_Node$javajs_util_BS$Z$Z$Z.apply(this, [atoms[ipt], bsSelected, true, false, false]);
});

Clazz.newMeth(C$, 'getBioSmiles$javajs_util_BS$S$I', function (bsSelected, comment, flags) {
this.addAtomComment=((flags & 131072) == 131072);
var allowUnmatchedRings=((flags & 3145728) == 3145728);
var noBioComments=((flags & 34603008) == 34603008);
var crosslinkCovalent=((flags & 5242880) == 5242880);
var crosslinkHBonds=((flags & 9437184) == 9437184);
var addCrosslinks=(crosslinkCovalent || crosslinkHBonds );
var sb=Clazz.new_($I$(6));
var bs=bsSelected;
if (comment != null  && !this.noBioComment ) sb.append$S("//* Jmol bioSMILES ").append$S(comment.replace$C$C("*", "_")).append$S(" *//");
var end=(this.noBioComment ? "" : "\n");
var bsIgnore=Clazz.new_($I$(2));
var lastComponent=null;
var groupString="";
var s;
var vLinks=Clazz.new_($I$(7));
try {
var len=0;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var a=this.atoms[i];
var ch=a.getGroup1$C("?");
var bioStructureName=a.getBioStructureTypeName$();
var unknown=(ch == ch.toLowerCase$());
if (end != null ) {
if (sb.length$() > 0) sb.append$S(end);
end=null;
len=0;
if (bioStructureName.length$() > 0) {
var id=a.getChainID$();
if (id != 0 && !noBioComments ) {
s="//* chain " + a.getChainIDStr$() + " " + bioStructureName + " " + a.getResno$() + " *// " ;
len=s.length$();
sb.append$S(s);
}len++;
sb.append$S("~").appendC$C(bioStructureName.toLowerCase$().charAt$I(0)).append$S("~");
} else {
s=p$1.getSmilesComponent$org_jmol_util_Node$javajs_util_BS$Z$Z$Z.apply(this, [a, bs, false, true, true]);
if (s.equals$O(lastComponent)) {
end="";
continue;
}lastComponent=s;
var groupName=a.getGroup3$Z(true);
var key;
if (noBioComments) {
key="/" + s + "/" ;
} else {
if (groupName != null ) {
s="//* " + groupName + " *//" + s ;
}key=s + "//";
}if (groupString.indexOf$S(key) >= 0) {
end="";
continue;
}groupString += key;
sb.append$S(s);
end=(noBioComments ? "." : ".\n");
continue;
}}if (len >= 75 && !noBioComments ) {
sb.append$S("\n  ");
len=2;
}if (this.addAtomComment) sb.append$S("\n//* [" + a.getGroup3$Z(false) + "#" + a.getResno$() + "] *//\t" );
if (unknown) {
p$1.addBracketedBioName$javajs_util_SB$org_jmol_util_Node$S$Z.apply(this, [sb, a, bioStructureName.length$() > 0 ? ".0" : null, false]);
} else {
sb.append$S(ch);
}len++;
if (addCrosslinks) {
a.getCrossLinkVector$javajs_util_Lst$Z$Z(vLinks, crosslinkCovalent, crosslinkHBonds);
for (var j=0; j < vLinks.size$(); j+=3) {
sb.append$S(":");
s=p$1.getRingCache$I$I$java_util_Map.apply(this, [vLinks.get$I(j).intValue$(), vLinks.get$I(j + 1).intValue$(), this.htRingsSequence]);
sb.append$S(s);
len+=1 + s.length$();
}
vLinks.clear$();
}a.getGroupBits$javajs_util_BS(bsIgnore);
bs.andNot$javajs_util_BS(bsIgnore);
var i2=a.getOffsetResidueAtom$S$I("\u0000", 1);
if (i2 < 0 || !bs.get$I(i2) ) {
if (!noBioComments) sb.append$S(" //* ").appendI$I(a.getResno$()).append$S(" *//");
if (i2 < 0 && (i2=bs.nextSetBit$I(i + 1)) < 0 ) break;
if (len > 0) end=(noBioComments ? "." : ".\n");
}i=i2 - 1;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["//* error: " + e.getMessage$() + " *//" ]);
} else {
throw e;
}
}
if (!allowUnmatchedRings && !this.htRingsSequence.isEmpty$() ) {
p$1.dumpRingKeys$javajs_util_SB$java_util_Map.apply(this, [sb, this.htRingsSequence]);
throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["//* ?ring error? *//"]);
}s=sb.toString();
if (s.endsWith$S(".\n")) s=s.substring$I$I(0, s.length$() - 2);
 else if (noBioComments && s.endsWith$S(".") ) s=s.substring$I$I(0, s.length$() - 1);
return s;
}, p$1);

Clazz.newMeth(C$, 'addBracketedBioName$javajs_util_SB$org_jmol_util_Node$S$Z', function (sb, atom, atomName, addComment) {
sb.append$S("[");
if (atomName != null ) {
var chain=atom.getChainIDStr$();
sb.append$S(atom.getGroup3$Z(false));
if (!atomName.equals$O(".0")) sb.append$S(atomName).append$S("#").appendI$I(atom.getElementNumber$());
if (addComment) {
sb.append$S("//* ").appendI$I(atom.getResno$());
if (chain.length$() > 0) sb.append$S(":").append$S(chain);
sb.append$S(" *//");
}} else {
sb.append$S($I$(8).elementNameFromNumber$I(atom.getElementNumber$()));
}sb.append$S("]");
}, p$1);

Clazz.newMeth(C$, 'getSmilesComponent$org_jmol_util_Node$javajs_util_BS$Z$Z$Z', function (atom, bs, allowBioResidues, allowConnectionsToOutsideWorld, forceBrackets) {
if (!this.explicitH && atom.getAtomicAndIsotopeNumber$() == 1  && atom.getEdges$().length > 0 ) atom=this.atoms[atom.getBondedAtomIndex$I(0)];
this.bsSelected=$I$(9).getBranchBitSet$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_Lst$I$Z$Z(this.atoms, atom.getIndex$(), $I$(4).copy$javajs_util_BS(bs), null, -1, true, allowBioResidues);
bs.andNot$javajs_util_BS(this.bsSelected);
this.iHypervalent=-1;
for (var i=this.bsSelected.nextSetBit$I(0); i >= 0 && this.iHypervalent < 0 ; i=this.bsSelected.nextSetBit$I(i + 1)) if (this.atoms[i].getCovalentBondCount$() > 4 || this.isPolyhedral ) this.iHypervalent=i;

this.bsIncludingH=$I$(4).copy$javajs_util_BS(this.bsSelected);
if (!this.explicitH) for (var j=this.bsSelected.nextSetBit$I(0); j >= 0; j=this.bsSelected.nextSetBit$I(j + 1)) {
var a=this.atoms[j];
if (a.getAtomicAndIsotopeNumber$() == 1 && a.getBondCount$() > 0  && a.getBondedAtomIndex$I(0) != this.iHypervalent ) this.bsSelected.clear$I(j);
}
this.bsAromatic=Clazz.new_($I$(2));
if (!this.topologyOnly && this.bsSelected.cardinality$() > 2 ) {
p$1.generateRingData.apply(this, []);
p$1.setBondDirections.apply(this, []);
}this.bsToDo=$I$(4).copy$javajs_util_BS(this.bsSelected);
var sb=Clazz.new_($I$(6));
for (var i=this.bsToDo.nextSetBit$I(0); i >= 0; i=this.bsToDo.nextSetBit$I(i + 1)) if (this.atoms[i].getCovalentBondCount$() > 4 || this.isPolyhedral ) {
if (atom == null ) sb.append$S(".");
p$1.getSmilesAt$javajs_util_SB$org_jmol_util_SimpleNode$Z$Z$Z.apply(this, [sb, this.atoms[i], allowConnectionsToOutsideWorld, false, forceBrackets]);
atom=null;
}
if (atom != null ) while ((atom=p$1.getSmilesAt$javajs_util_SB$org_jmol_util_SimpleNode$Z$Z$Z.apply(this, [sb, atom, allowConnectionsToOutsideWorld, true, forceBrackets])) != null ){
}
while (this.bsToDo.cardinality$() > 0 || !this.htRings.isEmpty$() ){
var e=this.htRings.values$().iterator$();
if (e.hasNext$()) {
atom=this.atoms[(e.next$()[1]).intValue$()];
if (!this.bsToDo.get$I(atom.getIndex$())) break;
} else {
atom=this.atoms[this.bsToDo.nextSetBit$I(0)];
}sb.append$S(".");
this.prevSp2Atoms=this.alleneStereo=null;
this.prevAtom=null;
while ((atom=p$1.getSmilesAt$javajs_util_SB$org_jmol_util_SimpleNode$Z$Z$Z.apply(this, [sb, atom, allowConnectionsToOutsideWorld, true, forceBrackets])) != null ){
}
}
if (!this.htRings.isEmpty$()) {
p$1.dumpRingKeys$javajs_util_SB$java_util_Map.apply(this, [sb, this.htRings]);
throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["//* ?ring error? *//\n" + sb]);
}var s=sb.toString();
if (s.indexOf$S("^-") >= 0) {
var s0=s;
try {
var keys=this.sm.getAtropisomerKeys$S$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_BS$I(s, this.atoms, this.ac, this.bsSelected, this.bsAromatic, this.flags);
for (var i=1; i < keys.length$(); ) {
var pt=s.indexOf$S("^-");
if (pt < 0) break;
s=s.substring$I$I(0, pt + 1) + keys.substring$I$I(i, i + 2) + s.substring$I(pt + 1) ;
i+=3;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("???");
s=s0;
} else {
throw e;
}
}
}return s;
}, p$1);

Clazz.newMeth(C$, 'generateRingData', function () {
var search=$I$(10).newSearch$S$Z$Z("[r500]", true, true);
search.targetAtoms=this.atoms;
search.setSelected$javajs_util_BS(this.bsSelected);
search.setFlags$I(this.flags);
search.targetAtomCount=this.ac;
search.ringDataMax=7;
search.flags=this.flags;
var vRings=$I$(11).createArrayOfArrayList$I(4);
search.setRingData$javajs_util_BS$javajs_util_LstA$Z(null, vRings, true);
this.bsAromatic=search.bsAromatic;
this.ringSets=search.ringSets;
this.aromaticRings=vRings[3];
}, p$1);

Clazz.newMeth(C$, 'getBondStereochemistry$org_jmol_util_Edge$org_jmol_util_SimpleNode', function (bond, atomFrom) {
if (bond == null ) return "\u0000";
var i=bond.index;
var isFirst=(atomFrom == null  || bond.getAtomIndex1$() == atomFrom.getIndex$() );
return (this.bsBondsUp.get$I(i) ? (isFirst ? "/" : "\\") : this.bsBondsDn.get$I(i) ? (isFirst ? "\\" : "/") : "\u0000");
}, p$1);

Clazz.newMeth(C$, 'setBondDirections', function () {
var bsDone=Clazz.new_($I$(2));
var edges=Clazz.array($I$(12), [2, 3]);
for (var i=this.bsSelected.nextSetBit$I(0); i >= 0; i=this.bsSelected.nextSetBit$I(i + 1)) {
var atom1=this.atoms[i];
var bonds=atom1.getEdges$();
for (var k=0; k < bonds.length; k++) {
var bond=bonds[k];
var index=bond.index;
var atom2;
if (bsDone.get$I(index) || bond.getCovalentOrder$() != 2  || $I$(5).isRingBond$javajs_util_Lst$javajs_util_BS$I$I(this.ringSets, null, i, (atom2=bond.getOtherNode$org_jmol_util_SimpleNode(atom1)).getIndex$()) ) continue;
bsDone.set$I(index);
var nCumulene=0;
var a10=atom1;
while (atom2.getCovalentBondCount$() == 2 && atom2.getValence$() == 4 ){
var e2=atom2.getEdges$();
var e=e2[e2[0].getOtherNode$org_jmol_util_SimpleNode(atom2) === a10  ? 1 : 0];
bsDone.set$I(e.index);
a10=atom2;
atom2=e.getOtherNode$org_jmol_util_SimpleNode(atom2);
nCumulene++;
}
if (nCumulene % 2 == 1) continue;
var b0=null;
var a0=null;
var i0=0;
var atom12=Clazz.array($I$(13), -1, [atom1, atom2]);
var edgeCount=1;
for (var j=0; j < 2 && edgeCount > 0  && edgeCount < 3 ; j++) {
edgeCount=0;
var atomA=atom12[j];
var bb=(atomA).getEdges$();
for (var b=0; b < bb.length; b++) {
var other;
if (bb[b].getCovalentOrder$() != 1 || (other=bb[b].getOtherNode$org_jmol_util_SimpleNode(atomA)).getElementNumber$() == 1 && other.getIsotopeNumber$() == 0  ) continue;
edges[j][edgeCount++]=bb[b];
if (p$1.getBondStereochemistry$org_jmol_util_Edge$org_jmol_util_SimpleNode.apply(this, [bb[b], atomA]) != "\u0000") {
b0=bb[b];
i0=j;
}}
}
if (edgeCount == 3 || edgeCount == 0 ) continue;
if (b0 == null ) {
i0=0;
b0=edges[i0][0];
this.bsBondsUp.set$I(b0.index);
}var c0=p$1.getBondStereochemistry$org_jmol_util_Edge$org_jmol_util_SimpleNode.apply(this, [b0, atom12[i0]]);
a0=b0.getOtherNode$org_jmol_util_SimpleNode(atom12[i0]);
if (a0 == null ) continue;
for (var j=0; j < 2; j++) for (var jj=0; jj < 2; jj++) {
var b1=edges[j][jj];
if (b1 == null  || b1 === b0  ) continue;
var bi=b1.index;
var a1=b1.getOtherNode$org_jmol_util_SimpleNode(atom12[j]);
if (a1 == null ) continue;
var c1=p$1.getBondStereochemistry$org_jmol_util_Edge$org_jmol_util_SimpleNode.apply(this, [b1, atom12[j]]);
var isOpposite=$I$(14).isDiaxial$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp$F(atom12[i0], atom12[j], a0, a1, this.vTemp, 0);
if (c1 == "\u0000" || (c1 != c0) == isOpposite  ) {
var isUp=(c0 == "\\" && isOpposite  || c0 == "/" && !isOpposite  );
if (isUp == (b1.getAtomIndex1$() != a1.getIndex$()) ) this.bsBondsUp.set$I(bi);
 else this.bsBondsDn.set$I(bi);
} else {
$I$(15).error$S("BOND STEREOCHEMISTRY ERROR");
}if ($I$(15).debugging) $I$(15).debug$S(p$1.getBondStereochemistry$org_jmol_util_Edge$org_jmol_util_SimpleNode.apply(this, [b0, atom12[0]]) + " " + a0.getIndex$() + " " + a1.getIndex$() + " " + p$1.getBondStereochemistry$org_jmol_util_Edge$org_jmol_util_SimpleNode.apply(this, [b1, atom12[j]]) );
}

}
}
}, p$1);

Clazz.newMeth(C$, 'getSmilesAt$javajs_util_SB$org_jmol_util_SimpleNode$Z$Z$Z', function (sb, atom, allowConnectionsToOutsideWorld, allowBranches, forceBrackets) {
var atomIndex=atom.getIndex$();
if (!this.bsToDo.get$I(atomIndex)) return null;
this.ptAtom++;
this.bsToDo.clear$I(atomIndex);
var includeHs=(atomIndex == this.iHypervalent || this.explicitH );
var isExtension=(!this.bsSelected.get$I(atomIndex));
var prevIndex=(this.prevAtom == null  ? -1 : this.prevAtom.getIndex$());
var isAromatic=this.bsAromatic.get$I(atomIndex);
var sp2Atoms=this.prevSp2Atoms;
var havePreviousSp2Atoms=(sp2Atoms != null );
var atomicNumber=atom.getElementNumber$();
var nH=0;
var prevStereo=this.alleneStereo;
this.alleneStereo=null;
var v=Clazz.new_($I$(7));
var bondNext=null;
var bondPrev=null;
var bonds=atom.getEdges$();
if (this.polySmilesCenter != null ) {
allowBranches=false;
this.sortBonds$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$javajs_util_P3(atom, this.prevAtom, this.polySmilesCenter);
}var aH=null;
var stereoFlag=(isAromatic ? 10 : 0);
if ($I$(15).debugging) $I$(15).debug$S(sb.toString());
if (bonds != null ) for (var i=bonds.length; --i >= 0; ) {
var bond=bonds[i];
if (!bond.isCovalent$()) continue;
var atom1=bonds[i].getOtherNode$org_jmol_util_SimpleNode(atom);
var index1=atom1.getIndex$();
if (index1 == prevIndex) {
bondPrev=bonds[i];
continue;
}var isH=!includeHs && (atom1.getElementNumber$() == 1 && atom1.getIsotopeNumber$() == 0 ) ;
if (!this.bsIncludingH.get$I(index1)) {
if (!isH && allowConnectionsToOutsideWorld && this.bsSelected.get$I(atomIndex)  ) this.bsToDo.set$I(index1);
 else continue;
}if (isH) {
aH=atom1;
nH++;
if (nH > 1) stereoFlag=10;
} else {
v.addLast$TV(bonds[i]);
}}
if (nH > 1) sp2Atoms=null;
var nSp2Atoms=(sp2Atoms != null  ? 2 : 0);
if (sp2Atoms == null  && !isAromatic  && nH <= 1 ) sp2Atoms=Clazz.array($I$(16), [5]);
var strPrev=null;
if (bondPrev != null ) {
strPrev=p$1.getBondOrder$org_jmol_util_Edge$I$I$Z.apply(this, [bondPrev, atomIndex, prevIndex, isAromatic]);
if (sp2Atoms != null  && !havePreviousSp2Atoms ) {
sp2Atoms[nSp2Atoms++]=this.prevAtom;
}}if (sp2Atoms != null  && !havePreviousSp2Atoms ) {
this.ptSp2Atom0=this.ptAtom;
}if (sp2Atoms != null  && nH == 1 ) sp2Atoms[nSp2Atoms++]=aH;
var nMax=0;
var bsBranches=Clazz.new_($I$(2));
var nBonds=v.size$();
if (allowBranches) {
for (var i=0; i < nBonds; i++) {
var bond=v.get$I(i);
var a=bond.getOtherNode$org_jmol_util_SimpleNode(atom);
var n=a.getCovalentBondCount$() - (includeHs ? 0 : (a).getCovalentHydrogenCount$());
var order=bond.getCovalentOrder$();
if (n == 1 && (bondNext != null  || i < nBonds - 1 ) ) {
bsBranches.set$I(bond.index);
} else if ((order > 1 || n > nMax ) && !this.htRings.containsKey$O(C$.getRingKey$I$I(a.getIndex$(), atomIndex)) ) {
nMax=(order > 1 ? 1000 + order : n);
bondNext=bond;
}}
}var atomNext=(bondNext == null  ? null : bondNext.getOtherNode$org_jmol_util_SimpleNode(atom));
var orderNext=(bondNext == null  ? 0 : bondNext.getCovalentOrder$());
var stereo=Clazz.array($I$(16), [7]);
if (stereoFlag < 7 && bondPrev != null  ) {
if (havePreviousSp2Atoms && bondPrev.getCovalentOrder$() == 2  && orderNext == 2  && sp2Atoms[1] != null  ) {
stereo[stereoFlag++]=sp2Atoms[0];
stereo[stereoFlag++]=sp2Atoms[1];
} else {
stereo[stereoFlag++]=this.prevAtom;
}}if (stereoFlag < 7 && nH == 1 ) stereo[stereoFlag++]=aH;
var deferStereo=(orderNext == 1 && sp2Atoms == null  );
var chBond=p$1.getBondStereochemistry$org_jmol_util_Edge$org_jmol_util_SimpleNode.apply(this, [bondPrev, this.prevAtom]);
if (strPrev != null  || chBond != "\u0000" ) {
if (chBond != "\u0000") strPrev="" + chBond;
sb.append$S(strPrev);
}var stereoFlag0=stereoFlag;
var nSp2Atoms0=nSp2Atoms;
var sbBranches=Clazz.new_($I$(6));
var vBranches=Clazz.new_($I$(7));
for (var i=0; i < v.size$(); i++) {
var bond=v.get$I(i);
if (!bsBranches.get$I(bond.index)) continue;
var a=bond.getOtherNode$org_jmol_util_SimpleNode(atom);
var s2=Clazz.new_($I$(6));
this.prevAtom=atom;
this.prevSp2Atoms=this.alleneStereo=null;
var bond0t=bondNext;
var ptSp2Atom0t=this.ptSp2Atom0;
var ptAtomt=this.ptAtom;
p$1.getSmilesAt$javajs_util_SB$org_jmol_util_SimpleNode$Z$Z$Z.apply(this, [s2, a, allowConnectionsToOutsideWorld, allowBranches, forceBrackets]);
bondNext=bond0t;
this.ptAtom=ptAtomt;
this.ptSp2Atom0=ptSp2Atom0t;
var branch=s2.toString();
v.removeItemAt$I(i--);
if (bondNext == null ) vBranches.addLast$TV(branch);
 else sbBranches.append$S("(").append$S(branch).append$S(")");
if (stereoFlag < 7) stereo[stereoFlag++]=a;
if (sp2Atoms != null  && nSp2Atoms < 5 ) sp2Atoms[nSp2Atoms++]=a;
}
var sbRings=Clazz.new_($I$(6));
var stereoFlag1=stereoFlag;
var nSp2Atoms1=nSp2Atoms;
var atat=null;
if (!allowBranches && !this.noStereo && this.polySmilesCenter == null    && (v.size$() == 5 || v.size$() == 6 ) ) {
atat=p$1.sortInorganic$org_jmol_util_SimpleNode$javajs_util_Lst$org_jmol_smiles_VTemp.apply(this, [atom, v, this.vTemp]);
}for (var i=0; i < v.size$(); i++) {
var bond=v.get$I(i);
if (bond === bondNext ) continue;
var a=bond.getOtherNode$org_jmol_util_SimpleNode(atom);
strPrev=p$1.getBondOrder$org_jmol_util_Edge$I$I$Z.apply(this, [bond, atomIndex, a.getIndex$(), isAromatic]);
if (!deferStereo) {
chBond=p$1.getBondStereochemistry$org_jmol_util_Edge$org_jmol_util_SimpleNode.apply(this, [bond, atom]);
if (chBond != "\u0000") strPrev="" + chBond;
}sbRings.append$S(strPrev);
sbRings.append$S(p$1.getRingCache$I$I$java_util_Map.apply(this, [atomIndex, a.getIndex$(), this.htRings]));
if (stereoFlag < 7) stereo[stereoFlag++]=a;
if (sp2Atoms != null  && nSp2Atoms < 5 ) sp2Atoms[nSp2Atoms++]=a;
}
if (stereoFlag0 != stereoFlag1 && stereoFlag1 != stereoFlag ) p$1.swapArray$org_jmol_util_SimpleNodeA$I$I$I.apply(this, [stereo, stereoFlag0, stereoFlag1, stereoFlag]);
if (nSp2Atoms0 != nSp2Atoms1 && nSp2Atoms1 != nSp2Atoms ) p$1.swapArray$org_jmol_util_SimpleNodeA$I$I$I.apply(this, [sp2Atoms, nSp2Atoms0, nSp2Atoms1, nSp2Atoms]);
if (havePreviousSp2Atoms && stereoFlag == 2  && orderNext == 2 ) {
var nc=(this.ptAtom - this.ptSp2Atom0);
var nb=atomNext.getCovalentBondCount$();
var lastIsN=(atomNext.getElementNumber$() == 7);
if (nc % 2 == 0) {
stereoFlag=8;
} else {
if (nb == 3 || nb == 2 && lastIsN  ) {
bonds=atomNext.getEdges$();
for (var k=0; k < bonds.length; k++) {
var index=atomNext.getBondedAtomIndex$I(k);
if (bonds[k].isCovalent$() && index != atomIndex ) stereo[stereoFlag++]=this.atoms[index];
}
if (nb == 2) stereo[stereoFlag++]=atomNext;
if (stereoFlag == 4) {
this.alleneStereo=stereo;
if ((stereo[3]).getAtomicAndIsotopeNumber$() == 1) {
var n=stereo[3];
stereo[3]=stereo[2];
stereo[2]=n;
}}}}nSp2Atoms=0;
} else if (atomNext != null  && stereoFlag < 7 ) {
stereo[stereoFlag++]=atomNext;
}if (prevStereo != null ) {
if (prevStereo[3] !== stereo[2] ) {
var ptat=sb.lastIndexOf$S("@]=");
if (ptat > 0) {
var trail=sb.substring$I(ptat);
sb.setLength$I(sb.charAt$I(ptat - 1) == "@" ? ptat - 1 : ptat + 1);
sb.append$S(trail);
}}prevStereo=null;
}var charge=atom.getFormalCharge$();
var isotope=atom.getIsotopeNumber$();
var valence=atom.getValence$();
var osclass=(this.openSMILES ? (atom).getFloatProperty$S("property_atomclass") : NaN);
var atomName=atom.getAtomName$();
var groupType=(atom).getBioStructureTypeName$();
if (this.addAtomComment) sb.append$S("\n//* " + atom.toString() + " *//\t" );
if (this.topologyOnly) sb.append$S("*");
 else if (isExtension && groupType.length$() != 0  && atomName.length$() != 0 ) p$1.addBracketedBioName$javajs_util_SB$org_jmol_util_Node$S$Z.apply(this, [sb, atom, "." + atomName, false]);
 else sb.append$S($I$(17).getAtomLabel$I$I$I$I$F$I$Z$S(atomicNumber, isotope, (forceBrackets ? -1 : valence), charge, osclass, nH, isAromatic, atat != null  ? atat : this.noStereo ? null : p$1.checkStereoPairs$org_jmol_util_SimpleNode$I$org_jmol_util_SimpleNodeA$I.apply(this, [atom, this.alleneStereo == null  ? atomIndex : -1, stereo, stereoFlag])));
sb.appendSB$javajs_util_SB(sbRings);
if (bondNext != null ) {
sb.appendSB$javajs_util_SB(sbBranches);
} else {
var n=vBranches.size$() - 1;
if (n >= 0) {
for (var i=0; i < n; i++) sb.append$S("(").append$S(vBranches.get$I(i)).append$S(")");

sb.append$S(vBranches.get$I(n));
}return null;
}if (sp2Atoms != null  && orderNext == 2  && (nSp2Atoms == 1 || nSp2Atoms == 2 ) ) {
if (sp2Atoms[0] == null ) sp2Atoms[0]=atom;
if (sp2Atoms[1] == null ) sp2Atoms[1]=atom;
} else {
sp2Atoms=null;
nSp2Atoms=0;
}this.prevSp2Atoms=sp2Atoms;
this.prevAtom=atom;
return atomNext;
}, p$1);

Clazz.newMeth(C$, 'swapArray$org_jmol_util_SimpleNodeA$I$I$I', function (a, i0, i1, i2) {
var n=i1 - i0;
if (this.atemp == null  || this.atemp.length < n ) this.atemp=Clazz.array($I$(16), [n]);
for (var p=n, i=i1; p > 0; ) this.atemp[--p]=a[--i];

for (var i=i1; i < i2; i++) a[i - n]=a[i];

for (var p=n, i=i2; p > 0; ) a[--i]=this.atemp[--p];

}, p$1);

Clazz.newMeth(C$, 'getBondOrder$org_jmol_util_Edge$I$I$Z', function (bondPrev, atomIndex, prevIndex, isAromatic) {
if (this.topologyOnly) return "";
if ((bondPrev.order & 65537) == 65537) {
return "^-";
}var border=bondPrev.getCovalentOrder$();
return (!isAromatic || !this.bsAromatic.get$I(prevIndex)  ? $I$(18).getBondOrderString$I(border) : border == 1 && !p$1.isSameAromaticRing$I$I.apply(this, [atomIndex, prevIndex])  ? "-" : this.aromaticDouble && (border == 2 || border == 514 )  ? "=" : "");
}, p$1);

Clazz.newMeth(C$, 'isSameAromaticRing$I$I', function (a1, a2) {
var bs;
for (var i=this.aromaticRings.size$(); --i >= 0; ) if ((bs=this.aromaticRings.get$I(i)).get$I(a1) && bs.get$I(a2) ) return true;

return false;
}, p$1);

Clazz.newMeth(C$, 'sortBonds$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$javajs_util_P3', function (atom, refAtom, center) {
if (this.smilesStereo == null ) try {
this.smilesStereo=$I$(14).newStereo$org_jmol_smiles_SmilesSearch(null);
} catch (e) {
if (Clazz.exceptionOf(e,"org.jmol.smiles.InvalidSmilesException")){
} else {
throw e;
}
}
this.smilesStereo.sortBondsByStereo$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$javajs_util_T3$org_jmol_util_SimpleEdgeA$javajs_util_V3(atom, refAtom, center, atom.getEdges$(), this.vTemp.vA);
});

Clazz.newMeth(C$, 'sortInorganic$org_jmol_util_SimpleNode$javajs_util_Lst$org_jmol_smiles_VTemp', function (atom, v, vTemp) {
var atomIndex=atom.getIndex$();
var n=v.size$();
var axialPairs=Clazz.new_($I$(7));
var bonds=Clazz.new_($I$(7));
var a1;
var a2;
var a01=null;
var a02=null;
var bond1;
var bond2;
var bsDone=Clazz.new_($I$(2));
var pair0=null;
var stereo=Clazz.array($I$(16), [6]);
var isOK=true;
var s="";
var naxial=0;
for (var i=0; i < n; i++) {
bond1=v.get$I(i);
stereo[0]=a1=bond1.getOtherNode$org_jmol_util_SimpleNode(atom);
if (i == 0) s=p$1.addStereoCheck$I$I$org_jmol_util_SimpleNode$S$javajs_util_BS.apply(this, [0, atomIndex, a1, "", null]);
 else if (isOK && p$1.addStereoCheck$I$I$org_jmol_util_SimpleNode$S$javajs_util_BS.apply(this, [0, atomIndex, a1, s, null]) != null  ) isOK=false;
if (bsDone.get$I(i)) continue;
bsDone.set$I(i);
var isAxial=false;
for (var j=i + 1; j < n; j++) {
if (bsDone.get$I(j)) continue;
bond2=v.get$I(j);
a2=bond2.getOtherNode$org_jmol_util_SimpleNode(atom);
if ($I$(14).isDiaxial$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp$F(atom, atom, a1, a2, vTemp, -0.95)) {
switch (++naxial) {
case 1:
a01=a1;
break;
case 2:
a02=a1;
break;
case 3:
if ($I$(14).getHandedness$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_smiles_VTemp(a02, a01, a1, atom, vTemp) == 2) {
var b=bond1;
bond1=bond2;
bond2=b;
}break;
}
axialPairs.addLast$TV(Clazz.array($I$(12), -1, [bond1, bond2]));
isAxial=true;
bsDone.set$I(j);
break;
}}
if (!isAxial) bonds.addLast$TV(bond1);
}
var npAxial=axialPairs.size$();
if (isOK || n == 6 && npAxial != 3   || n == 5 && npAxial == 0  ) return "";
pair0=axialPairs.get$I(0);
bond1=pair0[0];
stereo[0]=bond1.getOtherNode$org_jmol_util_SimpleNode(atom);
v.clear$();
v.addLast$TV(bond1);
if (npAxial > 1) bonds.addLast$TV(axialPairs.get$I(1)[0]);
if (npAxial == 3) bonds.addLast$TV(axialPairs.get$I(2)[0]);
if (npAxial > 1) bonds.addLast$TV(axialPairs.get$I(1)[1]);
if (npAxial == 3) bonds.addLast$TV(axialPairs.get$I(2)[1]);
for (var i=0; i < bonds.size$(); i++) {
bond1=bonds.get$I(i);
v.addLast$TV(bond1);
stereo[i + 1]=bond1.getOtherNode$org_jmol_util_SimpleNode(atom);
}
v.addLast$TV(pair0[1]);
stereo[n - 1]=pair0[1].getOtherNode$org_jmol_util_SimpleNode(atom);
return $I$(14).getStereoFlag$org_jmol_util_SimpleNode$org_jmol_util_SimpleNodeA$I$org_jmol_smiles_VTemp(atom, stereo, n, vTemp);
}, p$1);

Clazz.newMeth(C$, 'checkStereoPairs$org_jmol_util_SimpleNode$I$org_jmol_util_SimpleNodeA$I', function (atom, atomIndex, stereo, stereoFlag) {
if (stereoFlag < 4) return "";
if (atomIndex >= 0 && stereoFlag == 4  && (atom.getElementNumber$()) == 6 ) {
var s="";
for (var i=0; i < 4; i++) {
if ((s=p$1.addStereoCheck$I$I$org_jmol_util_SimpleNode$S$javajs_util_BS.apply(this, [0, atomIndex, stereo[i], s, $I$(4).newAndSetBit$I(atomIndex)])) == null ) {
stereoFlag=10;
break;
}}
}return (stereoFlag > 6 ? "" : $I$(14).getStereoFlag$org_jmol_util_SimpleNode$org_jmol_util_SimpleNodeA$I$org_jmol_smiles_VTemp(atom, stereo, stereoFlag, this.vTemp));
}, p$1);

Clazz.newMeth(C$, 'addStereoCheck$I$I$org_jmol_util_SimpleNode$S$javajs_util_BS', function (level, atomIndex, atom, s, bsDone) {
if (bsDone != null ) bsDone.set$I(atomIndex);
var n=(atom).getAtomicAndIsotopeNumber$();
var nx=atom.getCovalentBondCount$();
var nh=(n == 6 && !this.explicitH  ? (atom).getCovalentHydrogenCount$() : 0);
if (n == 6 ? nx != 4 : n == 1 || nx > 1 ) return s + (++this.chainCheck);
var sa=";" + level + "/" + n + "/" + nh + "/" + nx + (level == 0 ? "," : "_") ;
if (n == 6) {
switch (nh) {
case 1:
return s + sa + (++this.chainCheck) ;
case 0:
case 2:
if (bsDone == null ) return s;
var edges=(atom).getEdges$();
var s2="";
var sa2="";
var nunique=(nh == 2 ? 0 : 3);
for (var j=atom.getBondCount$(); --j >= 0; ) {
var a2=edges[j].getOtherNode$org_jmol_util_SimpleNode(atom);
var i2=a2.getIndex$();
if (bsDone.get$I(i2) || !edges[j].isCovalent$() || a2.getElementNumber$() == 1  ) continue;
bsDone.set$I(i2);
sa2=p$1.addStereoCheck$I$I$org_jmol_util_SimpleNode$S$javajs_util_BS.apply(this, [level + 1, atom.getIndex$(), a2, "", bsDone.clone$()]);
if (s2.indexOf$S(sa2) >= 0) nunique--;
s2 += sa2;
}
if (nunique == 3) return s + sa + (++this.chainCheck) ;
sa=(sa + s2).replace$C$C(",", "_");
if (level > 0) return s + sa;
break;
case 3:
break;
}
}if (s.indexOf$S(sa) >= 0) {
if (nh == 3) {
var ndt=0;
for (var j=0; j < nx && ndt < 3 ; j++) {
var ia=(atom).getBondedAtomIndex$I(j);
if (ia == atomIndex) continue;
ndt+=this.atoms[ia].getAtomicAndIsotopeNumber$();
}
if (ndt > 3) return s;
}return null;
}return s + sa;
}, p$1);

Clazz.newMeth(C$, 'getRingCache$I$I$java_util_Map', function (i0, i1, ht) {
var key=C$.getRingKey$I$I(i0, i1);
var o=ht.get$O(key);
var s=(o == null  ? null : o[0]);
if (s == null ) {
this.bsRingKeys.set$I(++this.nPairs);
this.nPairsMax=Math.max(this.nPairs, this.nPairsMax);
ht.put$TK$TV(key, Clazz.array(java.lang.Object, -1, [s=p$1.getRingPointer$I.apply(this, [this.nPairs]), Integer.valueOf$I(i1), Integer.valueOf$I(this.nPairs)]));
if ($I$(15).debugging) $I$(15).debug$S("adding for " + i0 + " ring key " + this.nPairs + ": " + key );
} else {
ht.remove$O(key);
var nPair=(o[2]).intValue$();
this.bsRingKeys.clear$I(nPair);
if (this.bsRingKeys.nextSetBit$I(0) < 0 && (this.nPairsMax == 2 || this.nPairsMax == 99 ) ) {
this.nPairsMax=this.nPairs=(this.nPairsMax == 99 ? 10 : 0);
}if ($I$(15).debugging) $I$(15).debug$S("using ring key " + key);
}return s;
}, p$1);

Clazz.newMeth(C$, 'getRingPointer$I', function (i) {
return (i < 10 ? "" + i : i < 100 ? "%" + i : "%(" + i + ")" );
}, p$1);

Clazz.newMeth(C$, 'dumpRingKeys$javajs_util_SB$java_util_Map', function (sb, ht) {
$I$(15).info$S(sb.toString() + "\n\n");
for (var key, $key = ht.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) $I$(15).info$S("unmatched connection: " + key);

}, p$1);

Clazz.newMeth(C$, 'getRingKey$I$I', function (i0, i1) {
return Math.min(i0, i1) + "_" + Math.max(i0, i1) ;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
