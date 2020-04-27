(function(){var P$=Clazz.newPackage("org.jmol.smiles"),p$1={},I$=[[0,'org.jmol.smiles.SmilesAtom','javajs.util.Lst','javajs.util.BS','org.jmol.smiles.VTemp','javajs.util.AU','java.util.Hashtable','org.jmol.smiles.SmilesAromatic','org.jmol.smiles.SmilesParser','org.jmol.util.Logger','org.jmol.util.BSUtil','org.jmol.smiles.SmilesMeasure','org.jmol.util.Edge','org.jmol.util.Node','org.jmol.smiles.SmilesBond','javajs.util.SB']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SmilesSearch", null, 'org.jmol.util.JmolMolecule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.patternAtoms=Clazz.array($I$(1), [16]);
this.needAromatic=true;
this.ringDataMax=-2147483648;
this.measures=Clazz.new_($I$(2,1));
this.bsAromatic=Clazz.new_($I$(3,1));
this.bsAromatic5=Clazz.new_($I$(3,1));
this.bsAromatic6=Clazz.new_($I$(3,1));
this.bsFound=Clazz.new_($I$(3,1));
this.bsReturn=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['Z',['isSmarts','aromaticOpen','aromaticStrict','aromaticPlanar','aromaticDouble','aromaticMMFF94','aromaticDefined','aromaticUnknown','noAromatic','ignoreAtomClass','ignoreStereochemistry','invertStereochemistry','exitFirstMatch','groupByModel','setAtropicity','patternAromatic','haveTopo','isTopology','patternBioSequence','haveSelected','haveBondStereochemistry','needRingData','needAromatic','needRingMemberships','asVector','getMaps','isNormalized','haveComponents','isSilent','isRingCheck','mapUnique'],'I',['targetAtomCount','nDouble','ringDataMax','ringCount','flags','selectedAtomCount','nNested'],'S',['pattern','atropKeys'],'O',['top','org.jmol.smiles.SmilesSearch','patternAtoms','org.jmol.smiles.SmilesAtom[]','targetAtoms','org.jmol.util.Node[]','bsSelected','javajs.util.BS','v','org.jmol.smiles.VTemp','subSearches','org.jmol.smiles.SmilesSearch[]','stereo','org.jmol.smiles.SmilesStereo','ringSets','javajs.util.Lst','+measures','bsAromatic','javajs.util.BS','+bsAromatic5','+bsAromatic6','lastChainAtom','org.jmol.smiles.SmilesAtom','ringData','javajs.util.BS[]','ringCounts','int[]','+ringConnections','bsFound','javajs.util.BS','htNested','java.util.Map','nestedBond','org.jmol.smiles.SmilesBond','vReturn','javajs.util.Lst','+uniqueList','bsReturn','javajs.util.BS','+bsCheck','+bsAromaticRings']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.top=this;
this.v=Clazz.new_($I$(4,1));
}, 1);

Clazz.newMeth(C$, 'setTop$org_jmol_smiles_SmilesSearch', function (parent) {
while (parent.top !== parent )parent=parent.top;

this.top=parent;
});

Clazz.newMeth(C$, 'addFlags$I$S', function (flags, strFlags) {
if (strFlags.indexOf$S("OPEN") >= 0) flags|=5;
if (strFlags.indexOf$S("BIO") >= 0) flags|=1048576;
if (strFlags.indexOf$S("HYDROGEN") >= 0) flags|=4096;
if (strFlags.indexOf$S("FIRSTMATCHONLY") >= 0) flags|=8;
if (strFlags.indexOf$S("STRICT") >= 0) flags|=256;
if (strFlags.indexOf$S("PLANAR") >= 0) flags|=1024;
if (strFlags.indexOf$S("NOAROMATIC") >= 0 || strFlags.indexOf$S("NONAROMATIC") >= 0 ) flags|=16;
if (strFlags.indexOf$S("AROMATICDOUBLE") >= 0) flags|=512;
if (strFlags.indexOf$S("AROMATICDEFINED") >= 0) flags|=128;
if (strFlags.indexOf$S("MMFF94") >= 0) flags|=768;
if (strFlags.indexOf$S("TOPOLOGY") >= 0) flags|=8192;
if (strFlags.indexOf$S("NOATOMCLASS") >= 0) flags|=2048;
if (strFlags.indexOf$S("NOSTEREO") >= 0) {
flags|=32;
} else if (strFlags.indexOf$S("INVERTSTEREO") >= 0) {
if ((flags & 64) != 0) flags&=~64;
 else flags|=64;
}if (strFlags.indexOf$S("ATOMCOMMENT") >= 0) flags|=131072;
if (strFlags.indexOf$S("GROUPBYMODEL") >= 0) flags|=67108864;
if ((flags & 1048576) == 1048576) {
if (strFlags.indexOf$S("NOCOMMENT") >= 0) flags|=34603008;
if (strFlags.indexOf$S("UNMATCHED") >= 0) flags|=3145728;
if (strFlags.indexOf$S("COVALENT") >= 0) flags|=5242880;
if (strFlags.indexOf$S("HBOND") >= 0) flags|=9437184;
}return flags;
}, 1);

Clazz.newMeth(C$, 'setFlags$I', function (flags) {
this.flags=flags;
this.exitFirstMatch|=((flags & 8) == 8);
this.aromaticOpen=((flags & 5) == 5);
this.aromaticDouble=((flags & 512) == 512);
this.aromaticStrict=((flags & 256) == 256);
this.aromaticPlanar=((flags & 1024) == 1024);
this.aromaticMMFF94=((flags & 768) == 768);
this.aromaticDefined=((flags & 128) == 128);
this.noAromatic=((flags & 16) == 16);
this.aromaticUnknown=!this.noAromatic && !this.aromaticOpen && !this.aromaticDouble && !this.aromaticStrict && !this.aromaticPlanar && !this.aromaticMMFF94 && !this.aromaticDefined  ;
this.groupByModel=((flags & 67108864) == 67108864);
this.ignoreAtomClass=((flags & 2048) == 2048);
this.ignoreStereochemistry=((flags & 32) == 32);
this.invertStereochemistry=!this.ignoreStereochemistry && ((flags & 64) == 64) ;
});

Clazz.newMeth(C$, 'set$', function () {
if (this.patternAtoms.length > this.ac) this.patternAtoms=$I$(5).arrayCopyObject$O$I(this.patternAtoms, this.ac);
this.nodes=this.patternAtoms;
this.isTopology=true;
this.patternAromatic=false;
this.patternBioSequence=true;
for (var i=this.ac; --i >= 0; ) {
var atom=this.patternAtoms[i];
if (this.isTopology && atom.isDefined$() ) this.isTopology=false;
if (!atom.isBioResidue) this.patternBioSequence=false;
if (atom.isAromatic) this.patternAromatic=true;
atom.setBondArray$();
if (!this.isSmarts && atom.bioType == "\u0000"  && !atom.setHydrogenCount$() ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["unbracketed atoms must be one of: B, C, N, O, P, S, F, Cl, Br, I, *,"]);
}
if (this.haveComponents) {
for (var i=this.ac; --i >= 0; ) {
var a=this.patternAtoms[i];
var bonds=a.bonds;
var ia=a.component;
for (var j=a.bondCount; --j >= 0; ) {
var b=bonds[j];
var ib;
if (b.isConnection && b.atom2 === a   && (ib=b.atom1.component) != ia ) {
for (var k=this.ac; --k >= 0; ) if (this.patternAtoms[k].component == ia) this.patternAtoms[k].component=ib;

}}
}
}});

Clazz.newMeth(C$, 'setSelected$javajs_util_BS', function (bs) {
if (bs == null ) {
bs=$I$(3).newN$I(this.targetAtomCount);
bs.setBits$I$I(0, this.targetAtomCount);
}this.bsSelected=bs;
});

Clazz.newMeth(C$, 'addAtom$', function () {
return this.appendAtom$org_jmol_smiles_SmilesAtom(Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'appendAtom$org_jmol_smiles_SmilesAtom', function (sAtom) {
if (this.ac >= this.patternAtoms.length) this.patternAtoms=$I$(5).doubleLength$O(this.patternAtoms);
return this.patternAtoms[this.ac]=sAtom.setIndex$I(this.ac++);
});

Clazz.newMeth(C$, 'addNested$S', function (pattern) {
if (this.htNested == null ) this.htNested=Clazz.new_($I$(6,1));
this.setNested$I$O(++this.nNested, pattern);
return this.nNested;
});

Clazz.newMeth(C$, 'clear$', function () {
this.bsReturn.clearAll$();
this.nNested=0;
this.htNested=null;
this.nestedBond=null;
p$1.clearBsFound$I.apply(this, [-1]);
});

Clazz.newMeth(C$, 'clearBsFound$I', function (iAtom) {
if (iAtom < 0) {
if (this.bsCheck == null ) {
this.bsFound.clearAll$();
}} else this.bsFound.clear$I(iAtom);
}, p$1);

Clazz.newMeth(C$, 'setNested$I$O', function (iNested, o) {
this.top.htNested.put$O$O("_" + iNested, o);
});

Clazz.newMeth(C$, 'getNested$I', function (iNested) {
return this.top.htNested.get$O("_" + iNested);
});

Clazz.newMeth(C$, 'getMissingHydrogenCount$', function () {
var n=0;
var nH;
for (var i=0; i < this.ac; i++) if ((nH=this.patternAtoms[i].explicitHydrogenCount) >= 0) n+=nH;

return n;
});

Clazz.newMeth(C$, 'setRingData$javajs_util_BS$javajs_util_LstA$Z', function (bsA, vRings, doProcessAromatic) {
if (this.isTopology || this.patternBioSequence ) this.needAromatic=false;
if (this.needAromatic) this.needRingData=true;
this.needAromatic&=!!((bsA == null ) & !this.noAromatic);
if (!this.needAromatic) {
this.bsAromatic.clearAll$();
if (bsA != null ) this.bsAromatic.or$javajs_util_BS(bsA);
if (!this.needRingMemberships && !this.needRingData ) return;
}this.getRingData$javajs_util_LstA$Z$Z(vRings, this.needRingData, doProcessAromatic);
});

Clazz.newMeth(C$, 'getRingData$javajs_util_LstA$Z$Z', function (vRings, needRingData, doTestAromatic) {
var isStrict=(this.needAromatic && (this.aromaticStrict || !this.aromaticOpen && !this.aromaticPlanar  ) );
if (isStrict && this.aromaticUnknown ) {
if (this.targetAtomCount > 0 && this.targetAtoms[this.bsSelected.nextSetBit$I(0)].modelIsRawPDB$() ) isStrict=false;
}var isOpenNotStrict=(this.needAromatic && this.aromaticOpen && !this.aromaticStrict  );
var checkExplicit=(this.needAromatic && !isStrict );
var doFinalize=(this.needAromatic && doTestAromatic && (isStrict || isOpenNotStrict )  );
var setAromatic=(this.needAromatic && !this.aromaticDefined );
var aromaticMax=7;
var lstAromatic=(vRings == null  ? Clazz.new_($I$(2,1)) : (vRings[3]=Clazz.new_($I$(2,1))));
var lstSP2=(doFinalize ? Clazz.new_($I$(2,1)) : null);
var strictness=(!isStrict ? 0 : this.aromaticMMFF94 ? 2 : 1);
if (this.needAromatic && this.aromaticDefined ) {
$I$(7).checkAromaticDefined$org_jmol_util_NodeA$javajs_util_BS$javajs_util_BS(this.targetAtoms, this.bsSelected, this.bsAromatic);
strictness=0;
}if (this.ringDataMax < 0) this.ringDataMax=8;
if (strictness > 0 && this.ringDataMax < 6 ) this.ringDataMax=6;
if (needRingData) {
this.ringCounts=Clazz.array(Integer.TYPE, [this.targetAtomCount]);
this.ringConnections=Clazz.array(Integer.TYPE, [this.targetAtomCount]);
this.ringData=Clazz.array($I$(3), [this.ringDataMax + 1]);
}this.ringSets=Clazz.new_($I$(2,1));
if (this.targetAtomCount < 3) return;
var s="****";
var max=this.ringDataMax;
while (s.length$() < max)s += s;

var eCounts=(doFinalize && setAromatic  ? Clazz.array(Integer.TYPE, [this.targetAtomCount]) : null);
var justCheckBonding=(setAromatic && Clazz.instanceOf(this.targetAtoms[0], "org.jmol.smiles.SmilesAtom") );
for (var i=3; i <= max; i++) {
if (i > this.targetAtomCount) break;
var smarts="*1" + s.substring$I$I(0, i - 2) + "*1" ;
var search=$I$(8).newSearch$S$Z$Z(smarts, true, true);
var vR=this.subsearch$org_jmol_smiles_SmilesSearch$I(search, 2);
if (vRings != null  && i <= 5 ) {
var v=Clazz.new_($I$(2,1));
for (var j=vR.size$(); --j >= 0; ) v.addLast$O(vR.get$I(j));

vRings[i - 3]=v;
}if (vR.size$() == 0) continue;
if (setAromatic && i >= 4  && i <= aromaticMax ) {
$I$(7).setAromatic$I$org_jmol_util_NodeA$javajs_util_BS$javajs_util_Lst$javajs_util_BS$I$Z$Z$Z$org_jmol_smiles_VTemp$javajs_util_Lst$javajs_util_Lst$IA$Z(i, this.targetAtoms, this.bsSelected, vR, this.bsAromatic, strictness, isOpenNotStrict, justCheckBonding, checkExplicit, this.v, lstAromatic, lstSP2, eCounts, doTestAromatic);
}if (needRingData) {
this.ringData[i]=Clazz.new_($I$(3,1));
for (var k=vR.size$(); --k >= 0; ) {
var r=vR.get$I(k);
this.ringData[i].or$javajs_util_BS(r);
for (var j=r.nextSetBit$I(0); j >= 0; j=r.nextSetBit$I(j + 1)) this.ringCounts[j]++;

}
}}
if (this.needAromatic) {
if (doFinalize) $I$(7).finalizeAromatic$org_jmol_util_NodeA$javajs_util_BS$javajs_util_Lst$javajs_util_Lst$IA$Z$Z(this.targetAtoms, this.bsAromatic, lstAromatic, lstSP2, eCounts, isOpenNotStrict, isStrict);
this.bsAromatic5.clearAll$();
this.bsAromatic6.clearAll$();
for (var i=lstAromatic.size$(); --i >= 0; ) {
var bs=lstAromatic.get$I(i);
bs.and$javajs_util_BS(this.bsAromatic);
switch (bs.cardinality$()) {
case 5:
this.bsAromatic5.or$javajs_util_BS(bs);
break;
case 6:
this.bsAromatic6.or$javajs_util_BS(bs);
break;
}
}
}if (needRingData) {
for (var i=this.bsSelected.nextSetBit$I(0); i >= 0; i=this.bsSelected.nextSetBit$I(i + 1)) {
var atom=this.targetAtoms[i];
var bonds=atom.getEdges$();
if (bonds != null ) for (var k=bonds.length; --k >= 0; ) if (this.ringCounts[atom.getBondedAtomIndex$I(k)] > 0) this.ringConnections[i]++;

}
}});

Clazz.newMeth(C$, 'subsearch$org_jmol_smiles_SmilesSearch$I', function (search, submode) {
search.ringSets=this.ringSets;
search.mapUnique=this.mapUnique;
search.targetAtoms=this.targetAtoms;
search.targetAtomCount=this.targetAtomCount;
search.bsSelected=this.bsSelected;
search.htNested=this.htNested;
search.haveTopo=this.haveTopo;
search.bsCheck=this.bsCheck;
search.isSmarts=true;
search.bsAromatic=this.bsAromatic;
search.bsAromatic5=this.bsAromatic5;
search.bsAromatic6=this.bsAromatic6;
search.ringData=this.ringData;
search.ringCounts=this.ringCounts;
search.ringConnections=this.ringConnections;
switch (submode) {
case 1:
search.exitFirstMatch=false;
break;
case 2:
search.isRingCheck=true;
search.isSilent=true;
search.asVector=true;
break;
case 3:
search.ignoreAtomClass=this.ignoreAtomClass;
search.aromaticDouble=this.aromaticDouble;
search.haveSelected=this.haveSelected;
search.exitFirstMatch=this.exitFirstMatch;
search.getMaps=this.getMaps;
search.asVector=this.asVector;
search.vReturn=this.vReturn;
search.bsReturn=this.bsReturn;
search.haveBondStereochemistry=this.haveBondStereochemistry;
break;
}
return p$1.search2$Z.apply(search, [submode == 1]);
});

Clazz.newMeth(C$, 'search$', function () {
return p$1.search2$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'search2$Z', function (firstAtomOnly) {
this.setFlags$I(this.flags);
if (!this.isRingCheck && $I$(9).debugging && !this.isSilent  ) $I$(9).debug$S("SmilesSearch processing " + this.pattern);
if (this.vReturn == null  && (this.asVector || this.getMaps ) ) this.vReturn=Clazz.new_($I$(2,1));
if (this.bsSelected == null ) {
this.bsSelected=$I$(3).newN$I(this.targetAtomCount);
this.bsSelected.setBits$I$I(0, this.targetAtomCount);
}this.selectedAtomCount=this.bsSelected.cardinality$();
if (this.subSearches != null ) {
for (var i=0; i < this.subSearches.length; i++) {
if (this.subSearches[i] == null ) continue;
this.subsearch$org_jmol_smiles_SmilesSearch$I(this.subSearches[i], 3);
if (this.exitFirstMatch) {
if (this.vReturn == null  ? this.bsReturn.nextSetBit$I(0) >= 0 : this.vReturn.size$() > 0) break;
}}
} else if (this.ac > 0) {
if (this.nestedBond == null ) {
p$1.clearBsFound$I.apply(this, [-1]);
} else {
this.bsReturn.clearAll$();
}p$1.nextPatternAtom$I$I$Z$I.apply(this, [-1, -1, firstAtomOnly, -1]);
}return (this.asVector || this.getMaps  ? this.vReturn : this.bsReturn);
}, p$1);

Clazz.newMeth(C$, 'nextPatternAtom$I$I$Z$I', function (atomNum, iAtom, firstAtomOnly, c) {
var jmolAtom;
var jmolBonds;
if (++atomNum < this.ac) {
var newPatternAtom=this.patternAtoms[atomNum];
var newPatternBond=(iAtom >= 0 ? newPatternAtom.getBondTo$org_jmol_smiles_SmilesAtom(null) : atomNum == 0 ? this.nestedBond : null);
if (newPatternBond == null ) {
var bs=$I$(10).copy$javajs_util_BS(this.bsFound);
var bs0=$I$(10).copy$javajs_util_BS(this.bsFound);
if (newPatternAtom.notBondedIndex >= 0) {
var pa=this.patternAtoms[newPatternAtom.notBondedIndex];
var a=pa.getMatchingAtom$();
if (pa.isBioAtom) {
var ii=a.getOffsetResidueAtom$S$I("\u0000", 1);
if (ii >= 0) bs.set$I(ii);
ii=a.getOffsetResidueAtom$S$I("\u0000", -1);
if (ii >= 0) bs.set$I(ii);
} else {
jmolBonds=a.getEdges$();
for (var k=0; k < jmolBonds.length; k++) bs.set$I(jmolBonds[k].getOtherNode$org_jmol_util_SimpleNode(a).getIndex$());

}}var skipGroup=((newPatternAtom.isBioAtomWild));
var j1=this.bsSelected.nextSetBit$I(0);
j1=(skipGroup && j1 >= 0  ? this.targetAtoms[j1].getOffsetResidueAtom$S$I("\u0000", j1) : j1);
var oldJmolComponent;
var oldPatternComponent=(atomNum > 0 ? this.patternAtoms[atomNum - 1] : newPatternAtom).component;
var thisPatternComponent=newPatternAtom.component;
var checkComponents=this.haveComponents && thisPatternComponent != -2147483648 ;
for (var j=j1; j >= 0; j=this.bsSelected.nextSetBit$I(j + 1)) {
if (!bs.get$I(j) && !this.bsFound.get$I(j) ) {
jmolAtom=this.targetAtoms[j];
if (checkComponents && !this.isRingCheck ) {
c=(this.groupByModel ? jmolAtom.getModelIndex$() : jmolAtom.getMoleculeNumber$Z(false));
oldJmolComponent=(atomNum > 0 ? this.patternAtoms[atomNum - 1].matchingComponent : c);
if ((oldPatternComponent == thisPatternComponent) != (oldJmolComponent == c) ) continue;
}if (!p$1.nextTargetAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_Node$I$I$Z$I.apply(this, [newPatternAtom, jmolAtom, atomNum, j, firstAtomOnly, c])) return false;
}if (skipGroup) {
j1=this.targetAtoms[j].getOffsetResidueAtom$S$I(newPatternAtom.bioAtomName, 1);
if (j1 >= 0) j=j1 - 1;
}}
this.bsFound=bs0;
return true;
}jmolAtom=newPatternBond.atom1.getMatchingAtom$();
switch (newPatternBond.order) {
case 96:
var nextGroupAtom=jmolAtom.getOffsetResidueAtom$S$I(newPatternAtom.bioAtomName, 1);
if (nextGroupAtom >= 0) {
var bs=$I$(10).copy$javajs_util_BS(this.bsFound);
jmolAtom.getGroupBits$javajs_util_BS(this.bsFound);
if (p$1.doCheckAtom$I.apply(this, [nextGroupAtom]) && !p$1.nextTargetAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_Node$I$I$Z$I.apply(this, [newPatternAtom, this.targetAtoms[nextGroupAtom], atomNum, nextGroupAtom, firstAtomOnly, c]) ) return false;
this.bsFound=bs;
}return true;
case 112:
var vLinks=Clazz.new_($I$(2,1));
jmolAtom.getCrossLinkVector$javajs_util_Lst$Z$Z(vLinks, true, true);
var bs=$I$(10).copy$javajs_util_BS(this.bsFound);
jmolAtom.getGroupBits$javajs_util_BS(this.bsFound);
for (var j=2; j < vLinks.size$(); j+=3) {
var ia=vLinks.get$I(j).intValue$();
if (p$1.doCheckAtom$I.apply(this, [ia]) && !p$1.nextTargetAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_Node$I$I$Z$I.apply(this, [newPatternAtom, this.targetAtoms[ia], atomNum, ia, firstAtomOnly, c]) ) return false;
}
this.bsFound=bs;
return true;
}
jmolBonds=jmolAtom.getEdges$();
if (jmolBonds != null ) for (var j=0; j < jmolBonds.length; j++) {
var ia=jmolAtom.getBondedAtomIndex$I(j);
if (p$1.doCheckAtom$I.apply(this, [ia]) && !p$1.nextTargetAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_Node$I$I$Z$I.apply(this, [newPatternAtom, this.targetAtoms[ia], atomNum, ia, firstAtomOnly, c]) ) return false;
}
p$1.clearBsFound$I.apply(this, [iAtom]);
return true;
}if (!this.ignoreStereochemistry && !this.isRingCheck && !p$1.checkStereochemistry.apply(this, [])  ) return true;
var bs=Clazz.new_($I$(3,1));
var nMatch=0;
for (var j=0; j < this.ac; j++) {
var i=this.patternAtoms[j].getMatchingAtomIndex$();
if (!firstAtomOnly && this.top.haveSelected && !this.patternAtoms[j].selected  ) continue;
nMatch++;
bs.set$I(i);
if (this.patternAtoms[j].isBioAtomWild) this.targetAtoms[i].getGroupBits$javajs_util_BS(bs);
if (firstAtomOnly) break;
if (!this.isSmarts) if (!this.setAtropicity && this.patternAtoms[j].explicitHydrogenCount > 0 ) {
var atom=this.targetAtoms[i];
for (var k=0, n=atom.getEdges$().length; k < n; k++) {
var ia=atom.getBondedAtomIndex$I(k);
if (this.targetAtoms[ia].getElementNumber$() == 1) bs.set$I(ia);
}
}}
if (!this.isSmarts && bs.cardinality$() != this.selectedAtomCount ) return true;
if (this.bsCheck != null ) {
if (firstAtomOnly) {
this.bsCheck.clearAll$();
for (var j=0; j < this.ac; j++) {
this.bsCheck.set$I(this.patternAtoms[j].getMatchingAtomIndex$());
}
if (this.bsCheck.cardinality$() != this.ac) return true;
} else {
if (bs.cardinality$() != this.ac) return true;
}}this.bsReturn.or$javajs_util_BS(bs);
if (this.getMaps) {
if (this.mapUnique) {
if (this.uniqueList == null ) this.uniqueList=Clazz.new_($I$(2,1));
for (var j=this.uniqueList.size$(); --j >= 0; ) if (this.uniqueList.get$I(j).equals$O(bs)) return true;

this.uniqueList.addLast$O(bs);
}var map=Clazz.array(Integer.TYPE, [nMatch]);
for (var j=0, nn=0; j < this.ac; j++) {
if (!firstAtomOnly && this.top.haveSelected && !this.patternAtoms[j].selected  ) continue;
map[nn++]=this.patternAtoms[j].getMatchingAtomIndex$();
}
this.vReturn.addLast$O(map);
return !this.exitFirstMatch;
}if (this.asVector) {
var isOK=true;
for (var j=this.vReturn.size$(); --j >= 0 && isOK ; ) isOK=!((this.vReturn.get$I(j)).equals$O(bs));

if (!isOK) return true;
this.vReturn.addLast$O(bs);
}if (this.isRingCheck) {
var bsRing=Clazz.new_($I$(3,1));
for (var k=atomNum * 3 + 2; --k > atomNum; ) bsRing.set$I(this.patternAtoms[(k <= atomNum * 2 ? atomNum * 2 - k + 1 : k - 1) % atomNum].getMatchingAtomIndex$());

this.ringSets.addLast$O(bsRing);
return true;
}if (this.exitFirstMatch) return false;
return (bs.cardinality$() != this.selectedAtomCount);
}, p$1);

Clazz.newMeth(C$, 'doCheckAtom$I', function (j) {
return this.bsSelected.get$I(j) && !this.bsFound.get$I(j) ;
}, p$1);

Clazz.newMeth(C$, 'nextTargetAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_Node$I$I$Z$I', function (patternAtom, jmolAtom, atomNum, iAtom, firstAtomOnly, c) {
var jmolBonds;
if (!this.isRingCheck && !this.isTopology ) {
if (patternAtom.subAtoms == null ) {
if (!p$1.checkPrimitiveAtom$org_jmol_smiles_SmilesAtom$I.apply(this, [patternAtom, iAtom])) return true;
} else if (patternAtom.isAND) {
for (var i=0; i < patternAtom.nSubAtoms; i++) if (!p$1.checkPrimitiveAtom$org_jmol_smiles_SmilesAtom$I.apply(this, [patternAtom.subAtoms[i], iAtom])) return true;

} else {
for (var i=0; i < patternAtom.nSubAtoms; i++) if (!p$1.nextTargetAtom$org_jmol_smiles_SmilesAtom$org_jmol_util_Node$I$I$Z$I.apply(this, [patternAtom.subAtoms[i], jmolAtom, atomNum, iAtom, firstAtomOnly, c])) return false;

return true;
}}jmolBonds=jmolAtom.getEdges$();
for (var i=patternAtom.getBondCount$(); --i >= 0; ) {
var patternBond=patternAtom.getBond$I(i);
if (patternBond.getAtomIndex2$() != patternAtom.index) continue;
var atom1=patternBond.atom1;
var matchingAtom=atom1.getMatchingAtomIndex$();
switch (patternBond.order) {
case 96:
case 112:
if (!p$1.checkMatchBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBond$I$I$org_jmol_util_Edge.apply(this, [patternAtom, atom1, patternBond, iAtom, matchingAtom, null])) return true;
break;
default:
var k=0;
var jmolBond=null;
for (; k < jmolBonds.length; k++) if ((jmolBond=jmolBonds[k]).isCovalent$() && (jmolBond.getAtomIndex1$() == matchingAtom || jmolBond.getAtomIndex2$() == matchingAtom ) ) break;

if (k == jmolBonds.length) return true;
if (!p$1.checkMatchBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBond$I$I$org_jmol_util_Edge.apply(this, [patternAtom, atom1, patternBond, iAtom, matchingAtom, jmolBond])) return true;
}
}
patternAtom=this.patternAtoms[patternAtom.index];
patternAtom.setMatchingAtom$org_jmol_util_Node$I(this.targetAtoms[iAtom], iAtom);
patternAtom.matchingComponent=c;
if ($I$(9).debuggingHigh && !this.isRingCheck ) {
for (var i=0; i <= atomNum; i++) $I$(9).debug$S("pattern atoms " + this.patternAtoms[i] + " " + this.patternAtoms[i].matchingComponent );

$I$(9).debug$S("--ss--");
}this.bsFound.set$I(iAtom);
if (!p$1.nextPatternAtom$I$I$Z$I.apply(this, [atomNum, iAtom, firstAtomOnly, c])) return false;
if (iAtom >= 0) p$1.clearBsFound$I.apply(this, [iAtom]);
return true;
}, p$1);

Clazz.newMeth(C$, 'checkPrimitiveAtom$org_jmol_smiles_SmilesAtom$I', function (patternAtom, iTarget) {
if (patternAtom.nSubAtoms > 0) {
for (var i=0; i < patternAtom.nSubAtoms; i++) if (p$1.checkPrimitiveAtom$org_jmol_smiles_SmilesAtom$I.apply(this, [patternAtom.subAtoms[i], iTarget])) return true;

return false;
}var targetAtom=this.targetAtoms[iTarget];
var foundAtom=patternAtom.not;
while (true){
if (patternAtom.iNested > 0) {
var o=this.getNested$I(patternAtom.iNested);
if (Clazz.instanceOf(o, "org.jmol.smiles.SmilesSearch")) {
var search=o;
if (patternAtom.isBioAtom) search.nestedBond=patternAtom.getBondTo$org_jmol_smiles_SmilesAtom(null);
o=this.subsearch$org_jmol_smiles_SmilesSearch$I(search, 1);
if (o == null ) o=Clazz.new_($I$(3,1));
if (!patternAtom.isBioAtom) this.setNested$I$O(patternAtom.iNested, o);
}foundAtom=(patternAtom.not != ((o).get$I(iTarget)) );
break;
}var na=targetAtom.getElementNumber$();
var n=patternAtom.elementNumber;
if (na >= 0 && n >= 0  && n != na ) break;
if (patternAtom.isBioResidue) {
var a=targetAtom;
if (patternAtom.bioAtomName != null  && (patternAtom.isLeadAtom$() ? !a.isLeadAtom$() : !patternAtom.bioAtomName.equals$O(a.getAtomName$().toUpperCase$())) ) break;
if (patternAtom.residueName != null  && !patternAtom.residueName.equals$O(a.getGroup3$Z(false).toUpperCase$()) ) break;
if (patternAtom.residueNumber != -2147483648 && patternAtom.residueNumber != a.getResno$() ) break;
if (patternAtom.insCode != "\u0000" && patternAtom.insCode != a.getInsertionCode$() ) break;
if (patternAtom.residueChar != null  || patternAtom.elementNumber == -2 ) {
var atype=a.getBioSmilesType$();
var ptype=patternAtom.getBioSmilesType$();
var ok=true;
var isNucleic=false;
switch (ptype.$c()) {
case 0:
case 42:
ok=true;
break;
case 110:
ok=(atype == "r" || atype == "c" );
isNucleic=true;
break;
case 114:
case 99:
isNucleic=true;
default:
ok=(atype == ptype);
break;
}
if (!ok) break;
var s=a.getGroup1$C("\u0000").toUpperCase$();
var resChar=(patternAtom.residueChar == null  ? "*" : patternAtom.residueChar.charAt$I(0));
var isOK=(resChar == s.charAt$I(0));
switch (resChar.$c()) {
case 42:
isOK=true;
break;
case 78:
isOK=isNucleic ? (atype == "r" || atype == "c" ) : isOK;
break;
case 82:
isOK=isNucleic ? a.isPurine$() : isOK;
break;
case 89:
isOK=isNucleic ? a.isPyrimidine$() : isOK;
break;
}
if (!isOK) break;
}if (patternAtom.isBioAtom) {
if (patternAtom.notCrossLinked && a.getCrossLinkVector$javajs_util_Lst$Z$Z(null, true, true) ) break;
}} else {
if (patternAtom.atomNumber != -2147483648 && patternAtom.atomNumber != targetAtom.getAtomNumber$() ) break;
if (patternAtom.jmolIndex >= 0 && targetAtom.getIndex$() != patternAtom.jmolIndex ) break;
if (patternAtom.atomType != null  && !patternAtom.atomType.equals$O(targetAtom.getAtomType$()) ) break;
if ((n=patternAtom.getAtomicMass$()) != -2147483648 && (n >= 0 && n != (na=targetAtom.getIsotopeNumber$())  || n < 0 && na != 0  && -n != na  ) ) break;
if (!this.noAromatic && !patternAtom.aromaticAmbiguous && patternAtom.isAromatic != this.bsAromatic.get$I(iTarget)   ) break;
if ((n=patternAtom.getCharge$()) != -2147483648 && n != targetAtom.getFormalCharge$() ) break;
n=patternAtom.getCovalentHydrogenCount$() + patternAtom.explicitHydrogenCount;
if (n >= 0 && n != targetAtom.getTotalHydrogenCount$() ) break;
if ((n=patternAtom.implicitHydrogenCount) != -2147483648) {
na=targetAtom.getImplicitHydrogenCount$();
if (n == -1 ? na == 0 : n != na) break;
}if (patternAtom.degree > 0 && patternAtom.degree != targetAtom.getCovalentBondCount$() - targetAtom.getImplicitHydrogenCount$() ) break;
if (patternAtom.nonhydrogenDegree > 0 && patternAtom.nonhydrogenDegree != targetAtom.getCovalentBondCount$() - targetAtom.getCovalentHydrogenCount$() ) break;
if (this.isSmarts && patternAtom.valence > 0  && patternAtom.valence != targetAtom.getTotalValence$() ) break;
if (patternAtom.connectivity > 0 && patternAtom.connectivity != targetAtom.getCovalentBondCountPlusMissingH$() ) break;
if (patternAtom.atomNumber != -2147483648 && patternAtom.atomNumber != targetAtom.getAtomNumber$() ) break;
if (patternAtom.jmolIndex >= 0 && targetAtom.getIndex$() != patternAtom.jmolIndex ) break;
if (patternAtom.atomType != null  && !patternAtom.atomType.equals$O(targetAtom.getAtomType$()) ) break;
if (!this.ignoreAtomClass || this.isSmarts ) {
if (!Float.isNaN$F(patternAtom.atomClass) && patternAtom.atomClass != targetAtom.getFloatProperty$S("property_atomclass")  ) break;
}if (this.ringData != null ) {
if (patternAtom.ringSize >= -1) {
if (patternAtom.ringSize <= 0) {
if ((this.ringCounts[iTarget] == 0) != (patternAtom.ringSize == 0) ) break;
} else {
var rd=this.ringData[patternAtom.ringSize == 500 ? 5 : patternAtom.ringSize == 600 ? 6 : patternAtom.ringSize];
if (rd == null  || !rd.get$I(iTarget) ) break;
if (!this.noAromatic) if (patternAtom.ringSize == 500) {
if (!this.bsAromatic5.get$I(iTarget)) break;
} else if (patternAtom.ringSize == 600) {
if (!this.bsAromatic6.get$I(iTarget)) break;
}}}if (patternAtom.ringMembership >= -1) {
if (patternAtom.ringMembership == -1 ? this.ringCounts[iTarget] == 0 : this.ringCounts[iTarget] != patternAtom.ringMembership) break;
}if (patternAtom.ringConnectivity >= 0) {
n=this.ringConnections[iTarget];
if (patternAtom.ringConnectivity == -1 && n == 0  || patternAtom.ringConnectivity != -1 && n != patternAtom.ringConnectivity  ) break;
}}}foundAtom=!foundAtom;
break;
}
return foundAtom;
}, p$1);

Clazz.newMeth(C$, 'checkMatchBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBond$I$I$org_jmol_util_Edge', function (patternAtom, atom1, patternBond, iAtom, matchingAtom, bond) {
if (patternBond.bondsOr != null ) {
for (var ii=0; ii < patternBond.nBondsOr; ii++) if (p$1.checkMatchBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBond$I$I$org_jmol_util_Edge.apply(this, [patternAtom, atom1, patternBond.bondsOr[ii], iAtom, matchingAtom, bond])) return true;

return false;
}if (!this.isRingCheck && !this.isTopology ) if (patternBond.nPrimitives == 0) {
if (!p$1.checkPrimitiveBond$org_jmol_smiles_SmilesBond$I$I$org_jmol_util_Edge.apply(this, [patternBond, iAtom, matchingAtom, bond])) return false;
} else {
for (var i=0; i < patternBond.nPrimitives; i++) {
var prim=patternBond.setPrimitive$I(i);
if (!p$1.checkPrimitiveBond$org_jmol_smiles_SmilesBond$I$I$org_jmol_util_Edge.apply(this, [prim, iAtom, matchingAtom, bond])) return false;
}
}patternBond.matchingBond=bond;
return true;
}, p$1);

Clazz.newMeth(C$, 'checkPrimitiveBond$org_jmol_smiles_SmilesBond$I$I$org_jmol_util_Edge', function (patternBond, iAtom1, iAtom2, bond) {
var bondFound=false;
switch (patternBond.order) {
case 96:
return (patternBond.isNot != (this.targetAtoms[iAtom2].getOffsetResidueAtom$S$I("\u0000", 1) == this.targetAtoms[iAtom1].getOffsetResidueAtom$S$I("\u0000", 0)) );
case 112:
return (patternBond.isNot != this.targetAtoms[iAtom1].isCrossLinked$org_jmol_util_Node(this.targetAtoms[iAtom2]) );
}
var isAromatic1=(!this.noAromatic && this.bsAromatic.get$I(iAtom1) );
var isAromatic2=(!this.noAromatic && this.bsAromatic.get$I(iAtom2) );
var order=bond.getCovalentOrder$();
var patternOrder=patternBond.order;
if (isAromatic1 && isAromatic2 ) {
switch (patternOrder) {
case 17:
case 65:
bondFound=C$.isRingBond$javajs_util_Lst$javajs_util_BS$I$I(this.ringSets, null, iAtom1, iAtom2);
break;
case 1:
bondFound=!this.isSmarts || !C$.isRingBond$javajs_util_Lst$javajs_util_BS$I$I(this.ringSets, p$1.getBSAromaticRings.apply(this, []), iAtom1, iAtom2) ;
break;
case 2:
bondFound=this.isNormalized || this.aromaticDouble && (order == 2 || order == 514 )  ;
break;
case 65537:
case 65538:
bondFound=!patternBond.isNot;
break;
case 81:
case -1:
bondFound=true;
break;
}
} else {
switch (patternOrder) {
case 17:
if (!this.noAromatic) break;
case 81:
case -1:
bondFound=true;
break;
case 1:
case 1025:
case 1041:
switch (order) {
case 1:
case 1025:
case 1041:
bondFound=true;
break;
}
break;
case 65537:
case 65538:
switch (order) {
case 1:
case 65537:
case 65538:
bondFound=!patternBond.isNot;
break;
}
break;
case 2:
case 3:
case 4:
bondFound=(order == patternOrder);
break;
case 65:
bondFound=C$.isRingBond$javajs_util_Lst$javajs_util_BS$I$I(this.ringSets, null, iAtom1, iAtom2);
break;
}
}return bondFound != patternBond.isNot ;
}, p$1);

Clazz.newMeth(C$, 'getBSAromaticRings', function () {
if (this.bsAromaticRings == null ) {
this.bsAromaticRings=Clazz.new_($I$(3,1));
if (this.ringSets != null  && this.bsAromatic != null  ) {
for (var i=this.ringSets.size$(); --i >= 0; ) {
var bsRing=this.ringSets.get$I(i).clone$();
bsRing.andNot$javajs_util_BS(this.bsAromatic);
if (bsRing.isEmpty$()) this.bsAromaticRings.set$I(i);
}
}}return this.bsAromaticRings;
}, p$1);

Clazz.newMeth(C$, 'isRingBond$javajs_util_Lst$javajs_util_BS$I$I', function (ringSets, bsAromaticRings, a1, a2) {
if (ringSets != null ) for (var i=ringSets.size$(); --i >= 0; ) {
var bsRing=ringSets.get$I(i);
if (bsRing.get$I(a1) && bsRing.get$I(a2) ) {
if (bsAromaticRings == null  || bsAromaticRings.get$I(i) ) return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'checkStereochemistry', function () {
for (var i=0; i < this.measures.size$(); i++) if (!this.measures.get$I(i).check$()) return false;

if (this.stereo != null  && !this.stereo.checkStereoChemistry$org_jmol_smiles_SmilesSearch$org_jmol_smiles_VTemp(this, this.v) ) return false;
if (!this.haveBondStereochemistry) return true;
var lstAtrop=null;
var b=null;
for (var k=0; k < this.ac; k++) {
var sAtom1=this.patternAtoms[k];
var sAtom2=null;
var sAtomDirected1=null;
var sAtomDirected2=null;
var dir1=0;
var dir2=0;
var bondType=0;
var nBonds=sAtom1.getBondCount$();
var isAtropisomer=false;
var indexOrder=true;
for (var j=0; j < nBonds; j++) {
b=sAtom1.getBond$I(j);
var isAtom2=(b.atom2 === sAtom1 );
indexOrder=(b.atom1.index < b.atom2.index);
var type=b.order;
switch (type) {
case 65537:
case 65538:
if (!indexOrder) continue;
case 2:
if (isAtom2) continue;
sAtom2=b.atom2;
bondType=type;
isAtropisomer=(type != 2);
if (isAtropisomer) dir1=(b.isNot ? -1 : 1);
break;
case 1025:
case 1041:
sAtomDirected1=(isAtom2 ? b.atom1 : b.atom2);
dir1=(isAtom2 != (type == 1025)  ? 1 : -1);
break;
}
}
if (isAtropisomer) {
if (this.setAtropicity) {
if (lstAtrop == null ) lstAtrop=Clazz.new_($I$(2,1));
lstAtrop.addLast$O(b);
continue;
}var b1=sAtom1.getBond$I(b.atropType[0]);
if (b1 == null ) return false;
sAtomDirected1=b1.getOtherAtom$org_jmol_smiles_SmilesAtom(sAtom1);
b1=sAtom2.getBond$I(b.atropType[1]);
if (b1 == null ) return false;
sAtomDirected2=b1.getOtherAtom$org_jmol_smiles_SmilesAtom(sAtom2);
if ($I$(9).debugging) $I$(9).info$S("atropisomer check for atoms " + sAtomDirected1 + sAtom1 + " " + sAtom2 + sAtomDirected2 );
} else {
if (sAtom2 == null  || dir1 == 0 ) continue;
var a10=sAtom1;
var nCumulene=0;
while (sAtom2.getBondCount$() == 2 && sAtom2.getValence$() == 4 ){
nCumulene++;
var e2=sAtom2.getEdges$();
var e=e2[e2[0].getOtherNode$org_jmol_util_SimpleNode(sAtom2) === a10  ? 1 : 0];
a10=sAtom2;
sAtom2=e.getOtherNode$org_jmol_util_SimpleNode(sAtom2);
}
if (nCumulene % 2 == 1) continue;
nBonds=sAtom2.getBondCount$();
for (var j=0; j < nBonds && dir2 == 0 ; j++) {
b=sAtom2.getBond$I(j);
var type=b.order;
switch (type) {
case 1025:
case 1041:
var isAtom2=(b.atom2 === sAtom2 );
sAtomDirected2=(isAtom2 ? b.atom1 : b.atom2);
dir2=(isAtom2 != (type == 1025)  ? 1 : -1);
break;
}
}
if (dir2 == 0) continue;
}var dbAtom1=sAtom1.getMatchingAtom$();
var dbAtom2=sAtom2.getMatchingAtom$();
var dbAtom1a=sAtomDirected1.getMatchingAtom$();
var dbAtom2a=sAtomDirected2.getMatchingAtom$();
if (dbAtom1a == null  || dbAtom2a == null  ) return false;
if (this.haveTopo) p$1.setTopoCoordinates$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I.apply(this, [dbAtom1, dbAtom2, dbAtom1a, dbAtom2a, bondType]);
var d=$I$(11).setTorsionData$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$org_jmol_smiles_VTemp$Z(dbAtom1a, dbAtom1, dbAtom2, dbAtom2a, this.v, isAtropisomer);
if (isAtropisomer) {
d *= dir1 * (bondType == 65537 ? 1 : -1) * (indexOrder ? 1 : -1) ;
if ($I$(9).debugging) (function(a,f){return f.apply(null,a)})(["atrop dihedral " + new Float(d).toString() + " " + sAtom1 + " " + sAtom2 + " " + b ],$I$(9).info$S);
if (d < 1.0 ) return false;
} else {
if (this.v.vTemp1.dot$javajs_util_T3(this.v.vTemp2) * dir1 * dir2  < 0 ) return false;
}}
if (this.setAtropicity) {
this.atropKeys="";
for (var i=0; i < lstAtrop.size$(); i++) this.atropKeys += "," + p$1.getAtropIndex$org_jmol_smiles_SmilesBond$Z.apply(this, [(b=lstAtrop.get$I(i)), true]) + p$1.getAtropIndex$org_jmol_smiles_SmilesBond$Z.apply(this, [b, false]) ;

}return true;
}, p$1);

Clazz.newMeth(C$, 'getAtropIndex$org_jmol_smiles_SmilesBond$Z', function (b, isFirst) {
var s1=(isFirst ? b.atom1 : b.atom2);
var a1=s1.getMatchingAtom$();
var a11=$I$(12).getAtropismNode$I$org_jmol_util_Node$Z(b.matchingBond.order, a1, isFirst);
var b1=s1.bonds;
for (var i=s1.getBondCount$(); --i >= 0; ) if ((b1[i].getOtherNode$org_jmol_util_SimpleNode(s1)).getMatchingAtom$() === a11 ) return i + 1;

return 0;
}, p$1);

Clazz.newMeth(C$, 'setTopoCoordinates$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I', function (dbAtom1, dbAtom2, dbAtom1a, dbAtom2a, bondType) {
dbAtom1.set$F$F$F(-1, 0, 0);
dbAtom2.set$F$F$F(1, 0, 0);
if (bondType != 2) {
var bond=dbAtom1.getBondTo$org_jmol_smiles_SmilesAtom(dbAtom2);
var dir=(bond.order == 65537 ? 1 : -1);
dbAtom1a.set$F$F$F(-1, 1, 0);
dbAtom2a.set$F$F$F(1, 1, dir / 2.0);
return;
}var nBonds=0;
var dir1=0;
var bonds=dbAtom1.getEdges$();
for (var k=bonds.length; --k >= 0; ) {
var bond=bonds[k];
if (bond.order == 2) continue;
var atom=bond.getOtherNode$org_jmol_util_SimpleNode(dbAtom1);
(atom).set$F$F$F(-1, (nBonds++ == 0) ? -1 : 1, 0);
var mode=(bond.getAtomIndex2$() == dbAtom1.getIndex$() ? nBonds : -nBonds);
switch (bond.order) {
case 1025:
dir1=mode;
break;
case 1041:
dir1=-mode;
}
}
var dir2=0;
nBonds=0;
var atoms=Clazz.array($I$(13), [2]);
bonds=dbAtom2.getEdges$();
for (var k=bonds.length; --k >= 0; ) {
var bond=bonds[k];
if (bond.order == 2) continue;
var atom=bond.getOtherNode$org_jmol_util_SimpleNode(dbAtom2);
atoms[nBonds]=atom;
(atom).set$F$F$F(1, (nBonds++ == 0) ? 1 : -1, 0);
var mode=(bond.getAtomIndex2$() == dbAtom2.getIndex$() ? nBonds : -nBonds);
switch (bond.order) {
case 1025:
dir2=mode;
break;
case 1041:
dir2=-mode;
}
}
if ((dir1 * dir2 > 0) == (Math.abs(dir1) % 2 == Math.abs(dir2) % 2) ) {
var y=(atoms[0]).y;
(atoms[0]).y=(atoms[1]).y;
(atoms[1]).y=y;
}}, p$1);

Clazz.newMeth(C$, 'createTopoMap$javajs_util_BS', function (bsAro) {
var isForMF=(bsAro == null );
var nAtomsMissing=this.getMissingHydrogenCount$();
var totalAtoms=this.ac + nAtomsMissing;
var atoms=Clazz.array($I$(1), [totalAtoms]);
this.targetAtoms=atoms;
for (var i=0, ptAtom=0; i < this.ac; i++, ptAtom++) {
var sAtom=this.patternAtoms[i];
var n=sAtom.explicitHydrogenCount;
if (n < 0) n=0;
var atom=atoms[ptAtom]=Clazz.new_($I$(1,1)).setTopoAtom$I$I$S$I$I(sAtom.component, ptAtom, sAtom.symbol, sAtom.getCharge$(), i);
atom.implicitHydrogenCount=n;
if (isForMF) continue;
atom.mapIndex=i;
atom.stereo=sAtom.stereo;
atom.setAtomicMass$I(sAtom.getAtomicMass$());
atom.bioAtomName=sAtom.bioAtomName;
atom.residueName=sAtom.residueName;
atom.residueChar=sAtom.residueChar;
atom.residueNumber=sAtom.residueNumber;
atom.atomNumber=sAtom.residueNumber;
atom.insCode=sAtom.insCode;
atom.atomClass=sAtom.atomClass;
atom.explicitHydrogenCount=0;
atom.isBioAtom=sAtom.isBioAtom;
atom.bioType=sAtom.bioType;
atom.isLeadAtom=sAtom.isLeadAtom;
if (!isForMF && sAtom.isAromatic ) bsAro.set$I(ptAtom);
sAtom.setMatchingAtom$org_jmol_util_Node$I(null, ptAtom);
var bonds=Clazz.array($I$(14), [sAtom.getBondCount$() + n]);
atom.setBonds$org_jmol_smiles_SmilesBondA(bonds);
while (--n >= 0){
var atomH=atoms[++ptAtom]=Clazz.new_($I$(1,1)).setTopoAtom$I$I$S$I$I(atom.component, ptAtom, "H", 0, -1);
atomH.mapIndex=-i - 1;
atomH.setBonds$org_jmol_smiles_SmilesBondA(Clazz.array($I$(14), [1]));
var b=Clazz.new_($I$(14,1).c$$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z,[atom, atomH, 1, false]);
if ($I$(9).debugging) $I$(9).info$S("" + b);
}
}
if (isForMF) return;
for (var i=0; i < this.ac; i++) {
var sAtom=this.patternAtoms[i];
var i1=sAtom.getMatchingAtomIndex$();
var atom1=atoms[i1];
var n=sAtom.getBondCount$();
for (var j=0; j < n; j++) {
var sBond=sAtom.getBond$I(j);
var firstAtom=(sBond.atom1 === sAtom );
if (firstAtom) {
var order=1;
switch (sBond.order) {
case 1:
case 2:
case 3:
case 4:
case 1025:
case 1041:
case 65537:
case 65538:
case 112:
case 96:
order=sBond.order;
break;
case 17:
order=514;
break;
}
var atom2=atoms[sBond.atom2.getMatchingAtomIndex$()];
var b=Clazz.new_($I$(14,1).c$$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z,[atom1, atom2, order, false]);
b.isConnection=sBond.isConnection;
atom2.bondCount--;
if ($I$(9).debugging) $I$(9).info$S("" + b);
} else {
var atom2=atoms[sBond.atom1.getMatchingAtomIndex$()];
var b=atom2.getBondTo$org_jmol_smiles_SmilesAtom(atom1);
atom1.addBond$org_jmol_smiles_SmilesBond(b);
}}
}
for (var i=0; i < totalAtoms; i++) {
var a=atoms[i];
var bonds=a.bonds;
if (bonds.length < 2 || bonds[0].isFromPreviousTo$org_jmol_smiles_SmilesAtom(a) ) continue;
for (var k=bonds.length; --k >= 1; ) if (bonds[k].isFromPreviousTo$org_jmol_smiles_SmilesAtom(a)) {
var b=bonds[k];
bonds[k]=bonds[0];
bonds[0]=b;
break;
}
}
if (!this.ignoreStereochemistry) for (var i=this.ac; --i >= 0; ) {
var sAtom=this.patternAtoms[i];
if (sAtom.stereo != null ) sAtom.stereo.fixStereo$org_jmol_smiles_SmilesAtom(sAtom);
}
});

Clazz.newMeth(C$, 'normalizeAromaticity$org_jmol_smiles_SmilesAtomA$javajs_util_BS$I', function (atoms, bsAromatic, flags) {
var ss=Clazz.new_(C$);
ss.setFlags$I(flags);
ss.targetAtoms=atoms;
ss.targetAtomCount=atoms.length;
ss.bsSelected=$I$(10).newBitSet2$I$I(0, atoms.length);
var vRings=$I$(5).createArrayOfArrayList$I(4);
ss.setRingData$javajs_util_BS$javajs_util_LstA$Z(null, vRings, true);
bsAromatic.or$javajs_util_BS(ss.bsAromatic);
if (!bsAromatic.isEmpty$()) {
var lst=vRings[3];
for (var i=lst.size$(); --i >= 0; ) {
var bs=lst.get$I(i);
for (var j=bs.nextSetBit$I(0); j >= 0; j=bs.nextSetBit$I(j + 1)) {
var a=atoms[j];
if (a.isAromatic || a.elementNumber == -2  || a.elementNumber == 0 ) continue;
a.setSymbol$S(a.symbol.toLowerCase$());
}
}
}}, 1);

Clazz.newMeth(C$, 'getSelections$', function () {
var ht=this.top.htNested;
if (ht == null  || this.targetAtoms.length == 0 ) return;
var htNew=Clazz.new_($I$(6,1));
for (var entry, $entry = ht.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getValue$().toString();
if (key.startsWith$S("select")) {
var bs=(htNew.containsKey$O(key) ? htNew.get$O(key) : this.targetAtoms[0].findAtomsLike$S(key.substring$I(6)));
if (bs == null ) bs=Clazz.new_($I$(3,1));
htNew.put$O$O(key, bs);
entry.setValue$O(bs);
}}
});

Clazz.newMeth(C$, 'findImplicitHydrogen$org_jmol_util_Node', function (atom) {
var edges=atom.getEdges$();
for (var i=edges.length; --i >= 0; ) {
var k=atom.getBondedAtomIndex$I(i);
if (this.targetAtoms[k].getElementNumber$() == 1 && !this.bsFound.get$I(k) ) return this.targetAtoms[k];
}
return null;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(15,1)).append$S(this.pattern);
sb.append$S("\nmolecular formula: " + this.getMolecularFormula$Z$FA$Z(true, null, false));
return sb.toString();
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
