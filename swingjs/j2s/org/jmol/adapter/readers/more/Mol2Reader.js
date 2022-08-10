(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.more"),p$1={},I$=[[0,'javajs.util.PT','org.jmol.adapter.smarter.Bond']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Mol2Reader", null, 'org.jmol.adapter.readers.more.ForceFieldReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nAtoms=0;
this.ac=0;
this.isPDB=false;
this.lastSequenceNumber=2147483647;
this.chainID=64;
},1);

C$.$fields$=[['Z',['isPDB'],'I',['nAtoms','ac','lastSequenceNumber','chainID']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.setUserAtomTypes$();
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.equals$O("@<TRIPOS>MOLECULE")) {
if (!p$1.processMolecule.apply(this, [])) {
return true;
}this.continuing=!this.isLastModel$I(this.modelNumber);
return false;
}if (this.line.length$() != 0 && this.line.charAt$I(0) == "#" ) {
this.checkCurrentLineForScript$();
}return true;
});

Clazz.newMeth(C$, 'processMolecule', function () {
this.isPDB=false;
var thisDataSetName=this.rd$().trim$();
if (!this.doGetModel$I$S(++this.modelNumber, thisDataSetName)) {
return false;
}this.lastSequenceNumber=2147483647;
this.chainID=64;
this.rd$();
this.line += " 0 0 0 0 0 0";
this.ac=this.parseIntStr$S(this.line);
var bondCount=this.parseInt$();
if (bondCount == 0) this.asc.setNoAutoBond$();
var resCount=this.parseInt$();
this.rd$();
this.rd$();
if (this.rd$() != null  && (this.line.length$() == 0 || this.line.charAt$I(0) != "@" ) ) {
if (this.rd$() != null  && this.line.length$() != 0  && this.line.charAt$I(0) != "@" ) {
if (this.line.indexOf$S("jmolscript:") >= 0) {
this.checkCurrentLineForScript$();
if (this.line.equals$O("#")) {
this.line="";
}}if (this.line.length$() != 0) {
thisDataSetName += ": " + this.line.trim$();
}}}this.newAtomSet$S(thisDataSetName);
while (this.line != null  && !this.line.equals$O("@<TRIPOS>MOLECULE") ){
if (this.line.equals$O("@<TRIPOS>ATOM")) {
p$1.readAtoms$I.apply(this, [this.ac]);
this.asc.setAtomSetName$S(thisDataSetName);
} else if (this.line.equals$O("@<TRIPOS>BOND")) {
p$1.readBonds$I.apply(this, [bondCount]);
} else if (this.line.equals$O("@<TRIPOS>SUBSTRUCTURE")) {
p$1.readResInfo$I.apply(this, [resCount]);
} else if (this.line.equals$O("@<TRIPOS>CRYSIN")) {
p$1.readCrystalInfo.apply(this, []);
}this.rd$();
}
this.nAtoms+=this.ac;
if (this.isPDB) {
this.setIsPDB$();
this.setModelPDB$Z(true);
}this.applySymmetryAndSetTrajectory$();
return true;
}, p$1);

Clazz.newMeth(C$, 'readAtoms$I', function (ac) {
if (ac == 0) return;
var i0=this.asc.ac;
for (var i=0; i < ac; ++i) {
var atom=this.asc.addNewAtom$();
var tokens=$I$(1,"getTokens$S",[this.rd$()]);
var atomType=tokens[5];
var name=tokens[1];
var pt=atomType.indexOf$S(".");
if (pt >= 0) {
atom.elementSymbol=atomType.substring$I$I(0, pt);
} else {
atom.atomName=name;
atom.elementSymbol=atom.getElementSymbol$();
}atom.atomName=name + '\u0000' + atomType ;
atom.set$F$F$F(this.parseFloatStr$S(tokens[2]), this.parseFloatStr$S(tokens[3]), this.parseFloatStr$S(tokens[4]));
if (tokens.length > 6) {
atom.sequenceNumber=this.parseIntStr$S(tokens[6]);
if (atom.sequenceNumber < this.lastSequenceNumber) {
if (this.chainID == 90) this.chainID=96;
this.chainID++;
}this.lastSequenceNumber=atom.sequenceNumber;
this.setChainID$org_jmol_adapter_smarter_Atom$S(atom, "" + String.fromCharCode(this.chainID));
}if (tokens.length > 7) atom.group3=tokens[7];
if (tokens.length > 8) {
atom.partialCharge=this.parseFloatStr$S(tokens[8]);
if (atom.partialCharge == (atom.partialCharge|0) ) atom.formalCharge=(atom.partialCharge|0);
}}
var atoms=this.asc.atoms;
var g3=atoms[i0].group3;
if (g3 == null ) return;
var isPDB=false;
if (!g3.equals$O("UNK") && !g3.startsWith$S("RES") ) {
for (var i=this.asc.ac; --i >= i0; ) if (!g3.equals$O(atoms[this.asc.ac - 1].group3)) {
isPDB=true;
break;
}
if (isPDB) {
isPDB=false;
for (var i=this.asc.ac; --i >= i0; ) {
var pt=p$1.getPDBGroupLength$S.apply(this, [atoms[i].group3]);
if (pt == 0 || pt > 3 ) break;
if (this.vwr.getJBR$().isKnownPDBGroup$S$I(g3.substring$I$I(0, pt), 2147483647)) {
isPDB=this.isPDB=true;
break;
}}
}}for (var i=this.asc.ac; --i >= i0; ) {
if (isPDB) {
g3=atoms[i].group3;
g3=g3.substring$I$I(0, p$1.getPDBGroupLength$S.apply(this, [g3]));
atoms[i].isHetero=this.vwr.getJBR$().isHetero$S(g3);
} else {
g3=null;
}atoms[i].group3=g3;
}
}, p$1);

Clazz.newMeth(C$, 'getPDBGroupLength$S', function (g3) {
var pt0=g3.length$();
var pt=pt0;
while (--pt > 0 && Character.isDigit$C(g3.charAt$I(pt)) ){
}
return ++pt;
}, p$1);

Clazz.newMeth(C$, 'readBonds$I', function (bondCount) {
for (var i=0; i < bondCount; ++i) {
var tokens=$I$(1,"getTokens$S",[this.rd$()]);
var atomIndex1=this.parseIntStr$S(tokens[1]);
var atomIndex2=this.parseIntStr$S(tokens[2]);
var order=this.parseIntStr$S(tokens[3]);
if (order == -2147483648) order=(tokens[3].equals$O("ar") ? 515 : tokens[3].equals$O("am") ? 1 : 17);
this.asc.addBond$org_jmol_adapter_smarter_Bond(Clazz.new_($I$(2,1).c$$I$I$I,[this.nAtoms + atomIndex1 - 1, this.nAtoms + atomIndex2 - 1, order]));
}
}, p$1);

Clazz.newMeth(C$, 'readResInfo$I', function (resCount) {
for (var i=0; i < resCount; ++i) {
this.rd$();
}
}, p$1);

Clazz.newMeth(C$, 'readCrystalInfo', function () {
this.rd$();
var tokens=this.getTokens$();
if (tokens.length < 6) return;
var name="";
for (var i=6; i < tokens.length; i++) name += " " + tokens[i];

if (name === "" ) name=" P1";
 else name += " *";
name=name.substring$I(1);
this.setSpaceGroupName$S(name);
if (this.ignoreFileUnitCell) return;
for (var i=0; i < 6; i++) this.setUnitCellItem$I$F(i, this.parseFloatStr$S(tokens[i]));

var atoms=this.asc.atoms;
for (var i=0; i < this.ac; ++i) this.setAtomCoord$org_jmol_adapter_smarter_Atom(atoms[this.nAtoms + i]);

}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
