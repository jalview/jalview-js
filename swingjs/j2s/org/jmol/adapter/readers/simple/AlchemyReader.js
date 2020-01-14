(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.simple"),p$1={},I$=[[0,'javajs.util.PT','org.jmol.adapter.smarter.Atom']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AlchemyReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isM3D=false;
this.ac=0;
this.bondCount=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.asc.newAtomSet$();
this.rd$();
if (this.line.indexOf$S("ATOMS") < 0) {
this.isM3D=true;
this.rd$();
}var tokens=this.getTokens$();
this.ac=this.parseIntStr$S(tokens[0]);
this.bondCount=this.parseIntStr$S(tokens[this.isM3D ? 1 : 2]);
p$1.readAtoms.apply(this, []);
p$1.readBonds.apply(this, []);
this.continuing=false;
});

Clazz.newMeth(C$, 'readAtoms', function () {
var pt=(this.isM3D ? 3 : 2);
for (var i=this.ac; --i >= 0; ) {
var tokens=$I$(1).getTokens$S(this.rd$());
var atom=Clazz.new_($I$(2));
atom.atomSerial=this.parseIntStr$S(tokens[0]);
var name=tokens[1];
if (!this.isM3D) {
atom.atomName=name;
atom.elementSymbol=name.substring$I$I(0, 1);
var c1=name.charAt$I(0);
var c2=" ";
var nChar=(name.length$() == 2 && ($I$(2).isValidSym2$C$C(c1, c2=Character.toLowerCase$C(name.charAt$I(1))) || name.equals$O("Du") )  ? 2 : 1);
name=(nChar == 1 ? "" + c1 : "" + c1 + c2 );
}atom.elementSymbol=name;
this.setAtomCoordTokens$org_jmol_adapter_smarter_Atom$SA$I(atom, tokens, pt);
atom.partialCharge=(tokens.length >= 6 ? this.parseFloatStr$S(tokens[pt + 3]) : 0);
this.asc.addAtomWithMappedSerialNumber$org_jmol_adapter_smarter_Atom(atom);
}
}, p$1);

Clazz.newMeth(C$, 'readBonds', function () {
for (var i=this.bondCount; --i >= 0; ) {
var tokens=$I$(1).getTokens$S(this.rd$());
var atomSerial1=tokens[1];
var atomSerial2=tokens[2];
var sOrder=(tokens.length < 4 ? "1" : tokens[3].toUpperCase$());
var order=0;
switch ((sOrder.charCodeAt$I(0))) {
default:
case 49:
case 83:
order=1;
break;
case 50:
case 68:
order=2;
break;
case 51:
case 84:
order=3;
break;
case 65:
order=515;
break;
case 72:
order=2048;
break;
}
this.asc.addNewBondFromNames$S$S$I(atomSerial1, atomSerial2, order);
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
