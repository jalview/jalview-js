(function(){var P$=Clazz.newPackage("org.jmol.smiles"),I$=[];
var C$=Clazz.newClass(P$, "SmilesBond", null, 'org.jmol.util.Edge');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.atom1=null;
this.atom2=null;
this.isNot=false;
this.matchingBond=null;
this.primitives=null;
this.nPrimitives=0;
this.bondsOr=null;
this.nBondsOr=0;
this.isConnection=false;
this.atropType=null;
this.isChain=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getBondOrderString$I', function (order) {
switch (order) {
case 2:
return "=";
case 3:
return "#";
case 4:
return "$";
default:
return "";
}
}, 1);

Clazz.newMeth(C$, 'getBondTypeFromCode$C', function (code) {
switch (code.$c()) {
case 46:
return 0;
case 45:
return 1;
case 61:
return 2;
case 35:
return 3;
case 36:
return 4;
case 58:
return 17;
case 47:
return 1025;
case 92:
return 1041;
case 94:
return 65537;
case 96:
return 65538;
case 64:
return 65;
case 126:
return 81;
case 43:
return 96;
}
return -1;
}, 1);

Clazz.newMeth(C$, 'getAtom1$', function () {
return this.atom1;
});

Clazz.newMeth(C$, 'set$org_jmol_smiles_SmilesBond', function (bond) {
this.order=bond.order;
this.isNot=bond.isNot;
this.primitives=bond.primitives;
this.nPrimitives=bond.nPrimitives;
this.bondsOr=bond.bondsOr;
this.nBondsOr=bond.nBondsOr;
});

Clazz.newMeth(C$, 'setAtropType$I', function (nn) {
this.atropType=Clazz.array(Integer.TYPE, -1, [(nn/10|0) - 1, nn % 10 - 1]);
});

Clazz.newMeth(C$, 'setPrimitive$I', function (i) {
var p=this.primitives[i];
this.order=p.order;
this.isNot=p.isNot;
this.atropType=p.atropType;
return p;
});

Clazz.newMeth(C$, 'addBondOr$', function () {
if (this.bondsOr == null ) this.bondsOr=Clazz.array(C$, [2]);
if (this.nBondsOr >= this.bondsOr.length) {
var tmp=Clazz.array(C$, [this.bondsOr.length * 2]);
System.arraycopy$O$I$O$I$I(this.bondsOr, 0, tmp, 0, this.bondsOr.length);
this.bondsOr=tmp;
}var sBond=Clazz.new_(C$.c$$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z,[null, null, -1, false]);
this.bondsOr[this.nBondsOr]=sBond;
this.nBondsOr++;
return sBond;
});

Clazz.newMeth(C$, 'addPrimitive$', function () {
if (this.primitives == null ) this.primitives=Clazz.array(C$, [2]);
if (this.nPrimitives >= this.primitives.length) {
var tmp=Clazz.array(C$, [this.primitives.length * 2]);
System.arraycopy$O$I$O$I$I(this.primitives, 0, tmp, 0, this.primitives.length);
this.primitives=tmp;
}var sBond=Clazz.new_(C$.c$$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z,[null, null, -1, false]);
this.primitives[this.nPrimitives]=sBond;
this.nPrimitives++;
return sBond;
});

Clazz.newMeth(C$, 'toString', function () {
return this.atom1 + " -" + (this.isNot ? "!" : "") + this.order + "- " + this.atom2 ;
});

Clazz.newMeth(C$, 'c$$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z', function (atom1, atom2, bondType, isNot) {
Clazz.super_(C$, this,1);
this.set2$I$Z(bondType, isNot);
this.set2a$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom(atom1, atom2);
}, 1);

Clazz.newMeth(C$, 'set2$I$Z', function (bondType, isNot) {
this.order=bondType;
this.isNot=isNot;
});

Clazz.newMeth(C$, 'set2a$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom', function (a1, a2) {
if (a1 != null ) {
this.atom1=a1;
a1.addBond$org_jmol_smiles_SmilesBond(this);
}if (a2 != null ) {
this.atom2=a2;
if (a2.isBioAtomWild && this.atom1.isBioAtomWild ) this.order=96;
a2.isFirst=false;
a2.addBond$org_jmol_smiles_SmilesBond(this);
}});

Clazz.newMeth(C$, 'setAtom2$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesSearch', function (atom, molecule) {
this.atom2=atom;
if (this.atom2 != null ) {
atom.addBond$org_jmol_smiles_SmilesBond(this);
this.isConnection=true;
}});

Clazz.newMeth(C$, 'isFromPreviousTo$org_jmol_smiles_SmilesAtom', function (atom) {
return (!this.isConnection && this.atom2 === atom  );
});

Clazz.newMeth(C$, 'isBondType$C$Z$Z', function (ch, isSearch, isBioSequence) {
if (ch == ">") return 1;
if ("-=#$:/\\.~^`+!,&;@".indexOf$I(ch) < 0) return 0;
if (!isSearch && "-=#$:/\\.~^`".indexOf$I(ch) < 0 ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["SMARTS bond type " + ch + " not allowed in SMILES" ]);
switch (ch.$c()) {
case 126:
return (isBioSequence ? 0 : 1);
case 94:
case 96:
return -1;
default:
return 1;
}
}, 1);

Clazz.newMeth(C$, 'getBondType$', function () {
return this.order;
});

Clazz.newMeth(C$, 'getValence$', function () {
return (this.order & 7);
});

Clazz.newMeth(C$, 'getOtherAtom$org_jmol_smiles_SmilesAtom', function (a) {
return (this.atom1 === a  ? this.atom2 : this.atom1);
});

Clazz.newMeth(C$, 'getAtomIndex1$', function () {
return this.atom1.index;
});

Clazz.newMeth(C$, 'getAtomIndex2$', function () {
return this.atom2.index;
});

Clazz.newMeth(C$, 'getCovalentOrder$', function () {
return this.order;
});

Clazz.newMeth(C$, 'getOtherNode$org_jmol_util_SimpleNode', function (atom) {
return (atom === this.atom1  ? this.atom2 : atom === this.atom2  || atom == null   ? this.atom1 : null);
});

Clazz.newMeth(C$, 'isCovalent$', function () {
return this.order != 112;
});

Clazz.newMeth(C$, 'isHydrogen$', function () {
return this.order == 112;
});

Clazz.newMeth(C$, 'switchAtoms$', function () {
var a=this.atom1;
this.atom1=this.atom2;
this.atom2=a;
switch (this.order) {
case 65537:
this.order=65538;
break;
case 65538:
this.order=65537;
break;
case 1025:
this.order=1041;
break;
case 1041:
this.order=1025;
break;
}
});

Clazz.newMeth(C$, 'getRealCovalentOrder$', function () {
switch (this.order) {
case 65537:
case 65538:
case 1025:
case 1041:
return 1;
}
return this.order;
});

Clazz.newMeth(C$, 'getMatchingBond$', function () {
return this.matchingBond == null  ? this : this.matchingBond;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
