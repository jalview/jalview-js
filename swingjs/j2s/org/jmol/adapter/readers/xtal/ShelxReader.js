(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'javajs.util.PT','javajs.util.AU','org.jmol.util.Logger','org.jmol.adapter.smarter.Atom']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ShelxReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');
C$.supportedRecordTypes=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.supportedRecordTypes=Clazz.array(String, -1, ["TITL", "CELL", "SPGR", "SFAC", "LATT", "SYMM", "NOTE", "ATOM", "END"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sfacElementSymbols=null;
this.isCmdf=false;
this.tokens=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.setFractionalCoordinates$Z(true);
});

Clazz.newMeth(C$, 'checkLine$', function () {
var lineLength;
while ((lineLength=(this.line=this.line.trim$()).length$()) > 0 && this.line.charAt$I(lineLength - 1) == "=" )this.line=this.line.substring$I$I(0, lineLength - 1) + this.rd$();

this.tokens=this.getTokens$();
if (this.tokens.length == 0) return true;
var command=this.tokens[0].toUpperCase$();
if (command.equals$O("TITL")) {
if (!this.doGetModel$I$S(++this.modelNumber, null)) return this.checkLastModel$();
this.sfacElementSymbols=null;
this.applySymmetryAndSetTrajectory$();
this.setFractionalCoordinates$Z(true);
this.asc.newAtomSet$();
this.asc.setAtomSetName$S(this.line.substring$I(4).trim$());
return true;
}if (!this.doProcessLines || lineLength < 3 ) return true;
if (";ZERR;DISP;UNIT;LAUE;REM;MORE;TIME;HKLF;OMIT;SHEL;BASF;TWIN;EXTI;SWAT;HOPE;MERG;SPEC;RESI;MOVE;ANIS;AFIX;HFIX;FRAG;FEND;EXYZ;EXTI;EADP;EQIV;CONN;PART;BIND;FREE;DFIX;DANG;BUMP;SAME;SADI;CHIV;FLAT;DELU;SIMU;DEFS;ISOR;NCSY;SUMP;L.S.;CGLS;BLOC;DAMP;STIR;WGHT;FVAR;BOND;CONF;MPLA;RTAB;HTAB;LIST;ACTA;SIZE;TEMP;WPDB;FMAP;GRID;PLAN;MOLE;".indexOf$S(";" + command + ";" ) >= 0) return true;
for (var i=C$.supportedRecordTypes.length; --i >= 0; ) if (command.equals$O(C$.supportedRecordTypes[i])) {
p$1.processSupportedRecord$I.apply(this, [i]);
return true;
}
if (!this.isCmdf) p$1.assumeAtomRecord.apply(this, []);
return true;
});

Clazz.newMeth(C$, 'processSupportedRecord$I', function (recordIndex) {
switch (recordIndex) {
case 0:
case 8:
break;
case 1:
p$1.cell.apply(this, []);
this.setSymmetryOperator$S("x,y,z");
break;
case 2:
this.setSpaceGroupName$S($I$(1).parseTrimmedAt$S$I(this.line, 4));
break;
case 3:
p$1.parseSfacRecord.apply(this, []);
break;
case 4:
p$1.parseLattRecord.apply(this, []);
break;
case 5:
p$1.parseSymmRecord.apply(this, []);
break;
case 6:
this.isCmdf=true;
break;
case 7:
this.isCmdf=true;
p$1.processCmdfAtoms.apply(this, []);
break;
}
}, p$1);

Clazz.newMeth(C$, 'parseLattRecord', function () {
this.asc.getXSymmetry$().setLatticeParameter$I(this.parseIntStr$S(this.tokens[1]));
}, p$1);

Clazz.newMeth(C$, 'parseSymmRecord', function () {
this.setSymmetryOperator$S(this.line.substring$I(4).trim$());
}, p$1);

Clazz.newMeth(C$, 'cell', function () {
var ioff=this.tokens.length - 6;
if (ioff == 2) this.asc.setInfo$S$O("wavelength", Float.valueOf$F(this.parseFloatStr$S(this.tokens[1])));
for (var ipt=0; ipt < 6; ipt++) this.setUnitCellItem$I$F(ipt, this.parseFloatStr$S(this.tokens[ipt + ioff]));

}, p$1);

Clazz.newMeth(C$, 'parseSfacRecord', function () {
var allElementSymbols=true;
for (var i=this.tokens.length; allElementSymbols && --i >= 1 ; ) {
var token=this.tokens[i];
allElementSymbols=C$.isValidElementSymbolNoCaseSecondChar$S(token);
}
var sfacTokens=$I$(1).getTokens$S(this.line.substring$I(4));
if (allElementSymbols) p$1.parseSfacElementSymbols$SA.apply(this, [sfacTokens]);
 else p$1.parseSfacCoefficients$SA.apply(this, [sfacTokens]);
}, p$1);

Clazz.newMeth(C$, 'parseSfacElementSymbols$SA', function (sfacTokens) {
if (this.sfacElementSymbols == null ) {
this.sfacElementSymbols=sfacTokens;
} else {
var oldCount=this.sfacElementSymbols.length;
var tokenCount=sfacTokens.length;
this.sfacElementSymbols=$I$(2).arrayCopyS$SA$I(this.sfacElementSymbols, oldCount + tokenCount);
for (var i=tokenCount; --i >= 0; ) this.sfacElementSymbols[oldCount + i]=sfacTokens[i];

}}, p$1);

Clazz.newMeth(C$, 'parseSfacCoefficients$SA', function (sfacTokens) {
var a1=this.parseFloatStr$S(sfacTokens[1]);
var a2=this.parseFloatStr$S(sfacTokens[3]);
var a3=this.parseFloatStr$S(sfacTokens[5]);
var a4=this.parseFloatStr$S(sfacTokens[7]);
var c=this.parseFloatStr$S(sfacTokens[9]);
var z=Math.round(a1 + a2 + a3 + a4 + c );
var elementSymbol=org.jmol.adapter.smarter.AtomSetCollectionReader.getElementSymbol$I(z);
var oldCount=0;
if (this.sfacElementSymbols == null ) {
this.sfacElementSymbols=Clazz.array(String, [1]);
} else {
oldCount=this.sfacElementSymbols.length;
this.sfacElementSymbols=$I$(2).arrayCopyS$SA$I(this.sfacElementSymbols, oldCount + 1);
this.sfacElementSymbols[oldCount]=elementSymbol;
}this.sfacElementSymbols[oldCount]=elementSymbol;
}, p$1);

Clazz.newMeth(C$, 'assumeAtomRecord', function () {
var atomName=this.tokens[0];
var elementIndex=this.parseIntStr$S(this.tokens[1]);
var x=this.parseFloatStr$S(this.tokens[2]);
var y=this.parseFloatStr$S(this.tokens[3]);
var z=this.parseFloatStr$S(this.tokens[4]);
if (Float.isNaN$F(x) || Float.isNaN$F(y) || Float.isNaN$F(z)  ) {
$I$(3).error$S("skipping line " + this.line);
return;
}elementIndex--;
var atom=this.asc.addNewAtom$();
atom.atomName=atomName;
if (this.sfacElementSymbols != null  && elementIndex >= 0  && elementIndex < this.sfacElementSymbols.length ) atom.elementSymbol=this.sfacElementSymbols[elementIndex];
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, x, y, z);
if (this.tokens.length == 12) {
var data=Clazz.array(Float.TYPE, [8]);
data[0]=this.parseFloatStr$S(this.tokens[6]);
data[1]=this.parseFloatStr$S(this.tokens[7]);
data[2]=this.parseFloatStr$S(this.tokens[8]);
data[3]=this.parseFloatStr$S(this.tokens[11]);
data[4]=this.parseFloatStr$S(this.tokens[10]);
data[5]=this.parseFloatStr$S(this.tokens[9]);
for (var i=0; i < 6; i++) if (Float.isNaN$F(data[i])) {
$I$(3).error$S("Bad anisotropic Uij data: " + this.line);
return;
}
this.asc.setAnisoBorU$org_jmol_adapter_smarter_Atom$FA$I(atom, data, 8);
}}, p$1);

Clazz.newMeth(C$, 'processCmdfAtoms', function () {
while (this.rd$() != null  && this.line.length$() > 10 ){
this.tokens=this.getTokens$();
this.addAtomXYZSymName$SA$I$S$S(this.tokens, 2, p$1.getSymbol$S.apply(this, [this.tokens[0]]), this.tokens[1]);
}
}, p$1);

Clazz.newMeth(C$, 'getSymbol$S', function (sym) {
if (sym == null ) return "Xx";
var len=sym.length$();
if (len < 2) return sym;
var ch1=sym.charAt$I(1);
if (ch1 >= "a" && ch1 <= "z" ) return sym.substring$I$I(0, 2);
return "" + sym.charAt$I(0);
}, p$1);

Clazz.newMeth(C$, 'isValidElementSymbolNoCaseSecondChar$S', function (str) {
if (str == null ) return false;
var length=str.length$();
if (length == 0) return false;
var chFirst=str.charAt$I(0);
if (length == 1) return $I$(4).isValidSym1$C(chFirst);
if (length > 2) return false;
var chSecond=str.charAt$I(1);
return $I$(4).isValidSymNoCase$C$C(chFirst, chSecond);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
