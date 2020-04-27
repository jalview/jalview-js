(function(){var P$=Clazz.newPackage("org.jmol.smiles"),p$1={},I$=[[0,'org.jmol.smiles.SmilesParser','org.jmol.smiles.SmilesGenerator','javajs.util.BS','javajs.util.PT','org.jmol.smiles.SmilesSearch','org.jmol.util.BSUtil','org.jmol.smiles.SmilesAtom','org.jmol.smiles.SmilesBond','javajs.util.AU','org.jmol.util.Elements','org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SmilesMatcher", null, null, 'org.jmol.api.SmilesMatcherInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getLastException$', function () {
return Clazz.load('org.jmol.smiles.InvalidSmilesException').getLastError$();
});

Clazz.newMeth(C$, 'getMolecularFormula$S$Z', function (pattern, isSmarts) {
Clazz.load('org.jmol.smiles.InvalidSmilesException').clear$();
var search=$I$(1).newSearch$S$Z$Z("/nostereo/" + pattern, isSmarts, true);
search.createTopoMap$javajs_util_BS(null);
search.nodes=search.targetAtoms;
return search.getMolecularFormula$Z$FA$Z(!isSmarts, null, false);
});

Clazz.newMeth(C$, 'getSmiles$org_jmol_util_NodeA$I$javajs_util_BS$S$I', function (atoms, ac, bsSelected, bioComment, flags) {
Clazz.load('org.jmol.smiles.InvalidSmilesException').clear$();
return (Clazz.new_($I$(2,1))).getSmiles$org_jmol_smiles_SmilesMatcher$org_jmol_util_NodeA$I$javajs_util_BS$S$I(this, atoms, ac, bsSelected, bioComment, flags);
});

Clazz.newMeth(C$, 'areEqual$S$S', function (smiles1, smiles2) {
Clazz.load('org.jmol.smiles.InvalidSmilesException').clear$();
var result=p$1.findPriv$S$org_jmol_smiles_SmilesSearch$I$I.apply(this, [smiles1, $I$(1).newSearch$S$Z$Z(smiles2, false, true), (smiles1.indexOf$S("*") >= 0 ? 2 : 1) | 8, 2]);
return (result == null  ? -1 : result.length);
});

Clazz.newMeth(C$, 'areEqualTest$S$org_jmol_smiles_SmilesSearch', function (smiles, search) {
var ret=p$1.findPriv$S$org_jmol_smiles_SmilesSearch$I$I.apply(this, [smiles, search, 9, 2]);
return (ret != null  && ret.length == 1 );
});

Clazz.newMeth(C$, 'find$S$S$I', function (pattern, target, flags) {
Clazz.load('org.jmol.smiles.InvalidSmilesException').clear$();
target=$I$(1).cleanPattern$S(target);
pattern=$I$(1).cleanPattern$S(pattern);
var search=$I$(1).newSearch$S$Z$Z(target, false, true);
var array=p$1.findPriv$S$org_jmol_smiles_SmilesSearch$I$I.apply(this, [pattern, search, flags, 3]);
for (var i=array.length; --i >= 0; ) {
var a=array[i];
for (var j=a.length; --j >= 0; ) a[j]=(search.targetAtoms[a[j]]).mapIndex;

}
return array;
});

Clazz.newMeth(C$, 'getAtoms$S', function (target) {
Clazz.load('org.jmol.smiles.InvalidSmilesException').clear$();
target=$I$(1).cleanPattern$S(target);
var search=$I$(1).newSearch$S$Z$Z(target, false, true);
search.createTopoMap$javajs_util_BS(Clazz.new_($I$(3,1)));
return search.targetAtoms;
});

Clazz.newMeth(C$, 'getRelationship$S$S', function (smiles1, smiles2) {
if (smiles1 == null  || smiles2 == null   || smiles1.length$() == 0  || smiles2.length$() == 0 ) return "";
var mf1=this.getMolecularFormula$S$Z(smiles1, false);
var mf2=this.getMolecularFormula$S$Z(smiles2, false);
if (!mf1.equals$O(mf2)) return "none";
var check;
var n1=(function(a,f){return f.apply(null,a)})([$I$(4).rep$S$S$S(smiles1, "@@", "@"), "@"],$I$(4).countChar$S$C);
var n2=(function(a,f){return f.apply(null,a)})([$I$(4).rep$S$S$S(smiles2, "@@", "@"), "@"],$I$(4).countChar$S$C);
check=(n1 == n2 && this.areEqual$S$S(smiles2, smiles1) > 0 );
if (!check) {
var s=smiles1 + smiles2;
if (s.indexOf$S("/") >= 0 || s.indexOf$S("\\") >= 0  || s.indexOf$S("@") >= 0 ) {
if (n1 == n2 && n1 > 0  && s.indexOf$S("@SP") < 0 ) {
check=(this.areEqual$S$S("/invertstereo/" + smiles2, smiles1) > 0);
if (check) return "enantiomers";
}check=(this.areEqual$S$S("/nostereo/" + smiles2, smiles1) > 0);
if (check) return (n1 == n2 ? "diastereomers" : "ambiguous stereochemistry!");
}return "constitutional isomers";
}return "identical";
});

Clazz.newMeth(C$, 'reverseChirality$S', function (smiles) {
smiles=$I$(4).rep$S$S$S(smiles, "@@", "!@");
smiles=$I$(4).rep$S$S$S(smiles, "@", "@@");
smiles=$I$(4).rep$S$S$S(smiles, "!@@", "@");
return smiles;
});

Clazz.newMeth(C$, 'getSubstructureSet$S$org_jmol_util_NodeA$I$javajs_util_BS$I', function (pattern, atoms, ac, bsSelected, flags) {
return p$1.matchPriv$S$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_BS$Z$I$I.apply(this, [pattern, atoms, ac, bsSelected, null, true, flags | $I$(1).getFlags$S(pattern), 1]);
});

Clazz.newMeth(C$, 'getMMFF94AtomTypes$SA$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_Lst$javajs_util_LstA', function (smarts, atoms, ac, bsSelected, ret, vRings) {
Clazz.load('org.jmol.smiles.InvalidSmilesException').clear$();
var sp=Clazz.new_($I$(1,1).c$$Z$Z,[true, true]);
var search=null;
var flags=(770);
search=sp.parse$S("");
search.exitFirstMatch=false;
search.targetAtoms=atoms;
search.targetAtomCount=Math.abs(ac);
search.setSelected$javajs_util_BS(bsSelected);
search.flags=flags;
search.getRingData$javajs_util_LstA$Z$Z(vRings, true, true);
search.asVector=false;
search.subSearches=Clazz.array($I$(5), [1]);
search.getSelections$();
var bsDone=Clazz.new_($I$(3,1));
for (var i=0; i < smarts.length; i++) {
if (smarts[i] == null  || smarts[i].length$() == 0  || smarts[i].startsWith$S("#") ) {
ret.addLast$O(null);
continue;
}search.clear$();
search.subSearches[0]=sp.getSubsearch$org_jmol_smiles_SmilesSearch$S$I(search, $I$(1).cleanPattern$S(smarts[i]), flags);
var bs=(function(a,f){return f.apply(null,a)})([search.search$()],$I$(6).copy$javajs_util_BS);
ret.addLast$O(bs);
bsDone.or$javajs_util_BS(bs);
if (bsDone.cardinality$() == ac) return;
}
});

Clazz.newMeth(C$, 'getSubstructureSetArray$S$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_BS$I', function (pattern, atoms, ac, bsSelected, bsAromatic, flags) {
return p$1.matchPriv$S$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_BS$Z$I$I.apply(this, [pattern, atoms, ac, bsSelected, bsAromatic, true, flags, 2]);
});

Clazz.newMeth(C$, 'getAtropisomerKeys$S$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_BS$I', function (pattern, atoms, ac, bsSelected, bsAromatic, flags) {
return p$1.matchPriv$S$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_BS$Z$I$I.apply(this, [pattern, atoms, ac, bsSelected, bsAromatic, false, flags, 4]);
});

Clazz.newMeth(C$, 'polyhedronToSmiles$org_jmol_util_Node$IAA$I$javajs_util_P3A$I$S', function (center, faces, atomCount, points, flags, details) {
var atoms=Clazz.array($I$(7), [atomCount]);
for (var i=0; i < atomCount; i++) {
atoms[i]=Clazz.new_($I$(7,1));
var pt=(points == null  ? null : points[i]);
if (Clazz.instanceOf(pt, "org.jmol.util.Node")) {
atoms[i].elementNumber=(pt).getElementNumber$();
atoms[i].bioAtomName=(pt).getAtomName$();
atoms[i].atomNumber=(pt).getAtomNumber$();
atoms[i].setT$javajs_util_T3(pt);
} else {
atoms[i].elementNumber=(Clazz.instanceOf(pt, "org.jmol.util.Point3fi") ? (pt).sD : ($s$[0] = -2, $s$[0]));
}atoms[i].index=i;
}
var nBonds=0;
for (var i=faces.length; --i >= 0; ) {
var face=faces[i];
var n=face.length;
var iatom;
var iatom2;
for (var j=n; --j >= 0; ) {
if ((iatom=face[j]) >= atomCount || (iatom2=face[(j + 1) % n]) >= atomCount ) continue;
if (atoms[iatom].getBondTo$org_jmol_smiles_SmilesAtom(atoms[iatom2]) == null ) {
var b=Clazz.new_($I$(8,1).c$$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z,[atoms[iatom], atoms[iatom2], 1, false]);
b.index=nBonds++;
}}
}
for (var i=0; i < atomCount; i++) {
var n=atoms[i].bondCount;
if (n == 0 || n != atoms[i].bonds.length ) atoms[i].bonds=$I$(9).arrayCopyObject$O$I(atoms[i].bonds, n);
}
var s=null;
var g=Clazz.new_($I$(2,1));
if (points != null ) g.polySmilesCenter=center;
Clazz.load('org.jmol.smiles.InvalidSmilesException').clear$();
s=g.getSmiles$org_jmol_smiles_SmilesMatcher$org_jmol_util_NodeA$I$javajs_util_BS$S$I(this, atoms, atomCount, $I$(6).newBitSet2$I$I(0, atomCount), null, flags | 4096 | 16 | 32 );
if ((flags & 65536) == 65536) {
s="//* " + center + " *//\t[" + (function(a,f){return f.apply(null,a)})([center.getElementNumber$()],$I$(10).elementSymbolFromNumber$I) + "@PH" + atomCount + (details == null  ? "" : "/" + details + "/" ) + "]." + s ;
}return s;
});

Clazz.newMeth(C$, 'getCorrelationMaps$S$org_jmol_util_NodeA$I$javajs_util_BS$I', function (pattern, atoms, atomCount, bsSelected, flags) {
return p$1.matchPriv$S$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_BS$Z$I$I.apply(this, [pattern, atoms, atomCount, bsSelected, null, true, flags, 3]);
});

Clazz.newMeth(C$, 'findPriv$S$org_jmol_smiles_SmilesSearch$I$I', function (pattern, search, flags, mode) {
var bsAromatic=Clazz.new_($I$(3,1));
search.setFlags$I(search.flags | $I$(1).getFlags$S(pattern));
search.createTopoMap$javajs_util_BS(bsAromatic);
return p$1.matchPriv$S$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_BS$Z$I$I.apply(this, [pattern, search.targetAtoms, -search.targetAtoms.length, null, bsAromatic, bsAromatic.isEmpty$(), flags, mode]);
}, p$1);

Clazz.newMeth(C$, 'matchPriv$S$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_BS$Z$I$I', function (pattern, atoms, ac, bsSelected, bsAromatic, doTestAromatic, flags, mode) {
Clazz.load('org.jmol.smiles.InvalidSmilesException').clear$();
try {
var isSmarts=((flags & 2) == 2);
var search=$I$(1).newSearch$S$Z$Z(pattern, isSmarts, false);
if (!isSmarts && !search.patternAromatic ) {
if (bsAromatic == null ) bsAromatic=Clazz.new_($I$(3,1));
$I$(5).normalizeAromaticity$org_jmol_smiles_SmilesAtomA$javajs_util_BS$I(search.patternAtoms, bsAromatic, search.flags);
search.isNormalized=true;
}search.targetAtoms=atoms;
search.targetAtomCount=Math.abs(ac);
if (ac < 0) search.haveTopo=true;
if (ac != 0 && (bsSelected == null  || !bsSelected.isEmpty$() ) ) {
var is3D=!(Clazz.instanceOf(atoms[0], "org.jmol.smiles.SmilesAtom"));
search.setSelected$javajs_util_BS(bsSelected);
search.getSelections$();
if (!doTestAromatic) search.bsAromatic=bsAromatic;
search.setRingData$javajs_util_BS$javajs_util_LstA$Z(null, null, is3D || doTestAromatic );
search.exitFirstMatch=((flags & 8) == 8);
search.mapUnique=((flags & 128) == 128);
}switch (mode) {
case 1:
search.asVector=false;
return search.search$();
case 2:
search.asVector=true;
var vb=search.search$();
return vb.toArray$OA(Clazz.array($I$(3), [vb.size$()]));
case 4:
search.exitFirstMatch=true;
search.setAtropicity=true;
search.search$();
return search.atropKeys;
case 3:
search.getMaps=true;
search.setFlags$I(flags | search.flags);
var vl=search.search$();
return vl.toArray$OA((function(a,f){return f.apply(null,a)})([vl.size$()],$I$(9).newInt2$I));
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if ($I$(11).debugging) e.printStackTrace$();
if (Clazz.load('org.jmol.smiles.InvalidSmilesException').getLastError$() == null ) Clazz.load('org.jmol.smiles.InvalidSmilesException').clear$();
throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,[Clazz.load('org.jmol.smiles.InvalidSmilesException').getLastError$()]);
} else {
throw e;
}
}
return null;
}, p$1);

Clazz.newMeth(C$, 'cleanSmiles$S', function (smiles) {
return $I$(1).cleanPattern$S(smiles);
});

Clazz.newMeth(C$, 'getMapForJME$S$org_jmol_modelset_AtomA$javajs_util_BS', function (jme, at, bsAtoms) {
var molecule=Clazz.new_($I$(5,1));
var tokens=$I$(4).getTokens$S(jme);
var nAtoms=$I$(4).parseInt$S(tokens[0]);
var nBonds=$I$(4).parseInt$S(tokens[1]);
var pt=2;
for (var i=0; i < nAtoms; i++, pt+=3) {
var sa=tokens[pt];
var a=molecule.addAtom$();
var ic=sa.indexOf$S("+");
var charge=0;
if (ic >= 0) {
charge=(ic == sa.length$() - 1 ? 1 : (function(a,f){return f.apply(null,a)})([sa.substring$I(ic + 1)],$I$(4).parseInt$S));
} else if ((ic=sa.indexOf$S("-")) >= 0) {
charge=(function(a,f){return f.apply(null,a)})([sa.substring$I(ic)],$I$(4).parseInt$S);
}a.setCharge$I(charge);
a.setSymbol$S(ic < 0 ? sa : sa.substring$I$I(0, ic));
}
for (var i=0; i < nBonds; i++) {
var ia=$I$(4).parseInt$S(tokens[pt++]) - 1;
var ib=$I$(4).parseInt$S(tokens[pt++]) - 1;
var iorder=$I$(4).parseInt$S(tokens[pt++]);
var a1=molecule.patternAtoms[ia];
var a2=molecule.patternAtoms[ib];
var order=1;
switch (iorder) {
default:
case 1:
break;
case 2:
order=2;
break;
case 3:
order=3;
break;
}
Clazz.new_($I$(8,1).c$$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z,[a1, a2, order, false]).index=i;
}
var s="";
try {
molecule.isSmarts=true;
molecule.set$();
var bs=$I$(6).newBitSet2$I$I(0, nAtoms);
s=this.getSmiles$org_jmol_util_NodeA$I$javajs_util_BS$S$I(molecule.patternAtoms, molecule.ac, bs, null, 34);
var map=this.getCorrelationMaps$S$org_jmol_util_NodeA$I$javajs_util_BS$I(s, molecule.patternAtoms, nAtoms, bs, 42);
var map2=this.getCorrelationMaps$S$org_jmol_util_NodeA$I$javajs_util_BS$I(s, at, bsAtoms.cardinality$(), bsAtoms, 42);
return Clazz.array(Integer.TYPE, -2, [map[0], map2[0]]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return null;
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
