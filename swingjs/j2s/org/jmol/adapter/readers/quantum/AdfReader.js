(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'org.jmol.util.Logger','javajs.util.PT','org.jmol.api.JmolAdapter','javajs.util.Lst','java.util.Hashtable',['org.jmol.adapter.readers.quantum.AdfReader','.SymmetryData'],'org.jmol.quantum.SlaterData','javajs.util.AU']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AdfReader", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.adapter.readers.quantum.SlaterReader');
C$.$classes$=[['SymmetryData',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.energy=null;
this.nXX=0;
},1);

C$.$fields$=[['I',['nXX'],'S',['energy','symLine'],'O',['htSymmetries','java.util.Map','vSymmetries','javajs.util.Lst']]]

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.indexOf$S("Irreducible Representations, including subspecies") >= 0) {
p$1.readSymmetries.apply(this, []);
return true;
}if (this.line.indexOf$S("S F O s  ***  (Symmetrized Fragment Orbitals)  ***") >= 0) {
p$1.readSlaterBasis.apply(this, []);
return true;
}if (this.line.indexOf$S(" Coordinates (Cartesian, in Input Orientation)") >= 0 || this.line.indexOf$S("G E O M E T R Y  ***") >= 0 ) {
if (!this.doGetModel$I$S(++this.modelNumber, null)) return this.checkLastModel$();
p$1.readCoordinates.apply(this, []);
return true;
}if (this.line.indexOf$S(" ======  Eigenvectors (rows) in BAS representation") >= 0) {
if (this.doReadMolecularOrbitals) p$1.readMolecularOrbitals$S.apply(this, [$I$(2).getTokens$S(this.symLine)[1]]);
return true;
}if (!this.doProcessLines) return true;
if (this.line.indexOf$S("Energy:") >= 0) {
var tokens=(function(a,f){return f.apply(null,a)})([this.line.substring$I(this.line.indexOf$S("Energy:"))],$I$(2).getTokens$S);
this.energy=tokens[1];
return true;
}if (this.line.indexOf$S("Vibrations") >= 0) {
p$1.readFrequencies.apply(this, []);
return true;
}if (this.line.indexOf$S(" === ") >= 0) {
this.symLine=this.line;
return true;
}if (this.line.indexOf$S(" ======  Eigenvectors (rows) in BAS representation") >= 0) {
p$1.readMolecularOrbitals$S.apply(this, [$I$(2).getTokens$S(this.symLine)[1]]);
return true;
}return true;
});

Clazz.newMeth(C$, 'readCoordinates', function () {
var isGeometry=(this.line.indexOf$S("G E O M E T R Y") >= 0);
this.asc.newAtomSet$();
this.asc.setAtomSetName$S("" + this.energy);
this.discardLinesUntilContains$S("----");
var pt0=(isGeometry ? 2 : 5);
this.nXX=0;
var tokens;
while (this.rd$() != null  && !this.line.startsWith$S(" -----") ){
tokens=this.getTokens$();
if (tokens.length < 5) break;
var symbol=tokens[1];
var name=null;
if (symbol.indexOf$S(".") >= 0) {
name=symbol;
symbol=symbol.substring$I$I(0, symbol.indexOf$S("."));
}if ($I$(3).getElementNumber$S(symbol) < 1) this.nXX++;
 else this.addAtomXYZSymName$SA$I$S$S(tokens, pt0, symbol, name);
}
}, p$1);

Clazz.newMeth(C$, 'readFrequencies', function () {
this.rd$();
while (this.rd$() != null ){
while (this.rd$() != null  && this.line.indexOf$S(".") < 0  && this.line.indexOf$S("====") < 0 ){
}
if (this.line == null  || this.line.indexOf$S(".") < 0 ) return;
var frequencies=this.getTokens$();
this.rd$();
var iAtom0=this.asc.ac;
var ac=this.asc.getLastAtomSetAtomCount$();
var frequencyCount=frequencies.length;
var ignore=Clazz.array(Boolean.TYPE, [frequencyCount]);
for (var i=0; i < frequencyCount; ++i) {
ignore[i]=!this.doGetVibration$I(++this.vibrationNumber);
if (ignore[i]) continue;
this.asc.cloneLastAtomSet$();
this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, null, null, frequencies[i], null);
}
this.readLines$I(this.nXX);
this.fillFrequencyData$I$I$I$ZA$Z$I$I$IA$I$SAA(iAtom0, ac, ac, ignore, true, 0, 0, null, 0, null);
}
}, p$1);

Clazz.newMeth(C$, 'readSymmetries', function () {
this.vSymmetries=Clazz.new_($I$(4,1));
this.htSymmetries=Clazz.new_($I$(5,1));
this.rd$();
var index=0;
var syms="";
while (this.rd$() != null  && this.line.length$() > 1 )syms += this.line;

var tokens=$I$(2).getTokens$S(syms);
for (var i=0; i < tokens.length; i++) {
var sd=Clazz.new_($I$(6,1).c$$I$S,[this, null, index++, tokens[i]]);
this.htSymmetries.put$O$O(tokens[i], sd);
this.vSymmetries.addLast$O(sd);
}
}, p$1);

Clazz.newMeth(C$, 'readSlaterBasis', function () {
if (this.vSymmetries == null ) return;
var nBF=0;
for (var i=0; i < this.vSymmetries.size$(); i++) {
var sd=this.vSymmetries.get$I(i);
$I$(1).info$S(sd.sym);
this.discardLinesUntilContains$S("=== " + sd.sym + " ===" );
if (this.line == null ) {
$I$(1).error$S("Symmetry slater basis section not found: " + sd.sym);
return;
}sd.nSFO=this.parseIntAt$S$I(this.rd$(), 15);
sd.nBF=this.parseIntAt$S$I(this.rd$(), 75);
var funcList="";
while (this.rd$() != null  && this.line.length$() > 1 )funcList += this.line;

var tokens=$I$(2).getTokens$S(funcList);
if (tokens.length != sd.nBF) return;
sd.basisFunctions=Clazz.array(Integer.TYPE, [tokens.length]);
for (var j=tokens.length; --j >= 0; ) {
var n=this.parseIntStr$S(tokens[j]);
if (n > nBF) nBF=n;
sd.basisFunctions[j]=n - 1;
}
}
this.slaterArray=Clazz.array($I$(7), [nBF]);
this.discardLinesUntilContains$S("(power of)");
this.readLines$I(2);
while (this.rd$() != null  && this.line.length$() > 3  && this.line.charAt$I(3) == " " ){
var data=this.line;
while (this.rd$().indexOf$S("---") < 0)data += this.line;

var tokens=$I$(2).getTokens$S(data);
var nAtoms=tokens.length - 1;
var atomList=Clazz.array(Integer.TYPE, [nAtoms]);
for (var i=1; i <= nAtoms; i++) atomList[i - 1]=this.parseIntStr$S(tokens[i]) - 1;

this.rd$();
while (this.line.length$() >= 10){
data=this.line;
while (this.rd$().length$() > 35 && this.line.substring$I$I(0, 35).trim$().length$() == 0 )data += this.line;

tokens=$I$(2).getTokens$S(data);
var isCore=tokens[0].equals$O("Core");
var pt=(isCore ? 1 : 0);
var x=this.parseIntStr$S(tokens[pt++]);
var y=this.parseIntStr$S(tokens[pt++]);
var z=this.parseIntStr$S(tokens[pt++]);
var r=this.parseIntStr$S(tokens[pt++]);
var zeta=this.parseFloatStr$S(tokens[pt++]);
for (var i=0; i < nAtoms; i++) {
var ptBF=this.parseIntStr$S(tokens[pt++]) - 1;
this.slaterArray[ptBF]=Clazz.new_($I$(7,1).c$$I$I$I$I$I$D$D,[atomList[i], x, y, z, r, zeta, 1]);
this.slaterArray[ptBF].index=ptBF;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'readMolecularOrbitals$S', function (sym) {
var sd=this.htSymmetries.get$O(sym);
if (sd == null ) return;
var ptSym=sd.index;
var isLast=(ptSym == this.vSymmetries.size$() - 1);
var n=0;
var nBF=this.slaterArray.length;
sd.coefs=Clazz.array(Float.TYPE, [sd.nSFO, nBF]);
while (n < sd.nBF){
this.rd$();
var nLine=(function(a,f){return f.apply(null,a)})([this.rd$()],$I$(2).getTokens$S).length;
this.rd$();
sd.mos=$I$(8).createArrayOfHashtable$I(sd.nSFO);
var data=Clazz.array(String, [sd.nSFO, null]);
this.fillDataBlock$SAA$I(data, 0);
for (var j=1; j < nLine; j++) {
var pt=sd.basisFunctions[n++];
for (var i=0; i < sd.nSFO; i++) sd.coefs[i][pt]=this.parseFloatStr$S(data[i][j]);

}
}
for (var i=0; i < sd.nSFO; i++) {
var mo=Clazz.new_($I$(5,1));
mo.put$O$O("coefficients", sd.coefs[i]);
mo.put$O$O("id", sym + " " + (i + 1) );
sd.mos[i]=mo;
}
if (!isLast) return;
var nSym=this.htSymmetries.size$();
this.discardLinesUntilContains$S(nSym == 1 ? "Orbital Energies, per Irrep" : "Orbital Energies, all Irreps");
this.readLines$I(4);
var pt=(nSym == 1 ? 0 : 1);
if (nSym == 1) sym=this.rd$().trim$();
while (this.rd$() != null  && this.line.length$() > 10 ){
this.line=this.line.replace$C$C("(", " ").replace$C$C(")", " ");
var tokens=this.getTokens$();
var len=tokens.length;
if (nSym > 1) sym=tokens[0];
var moPt=this.parseIntStr$S(tokens[pt]);
var occ=this.parseFloatStr$S(tokens[len - 4 + pt]);
var energy=this.parseFloatStr$S(tokens[len - 2 + pt]);
p$1.addMo$S$I$F$F.apply(this, [sym, moPt, occ, energy]);
}
var iAtom0=this.asc.getLastAtomSetAtomIndex$();
for (var i=0; i < nBF; i++) this.slaterArray[i].atomNo+=iAtom0 + 1;

this.setSlaters$Z$Z(true, true);
this.sortOrbitals$();
this.setMOs$S("eV");
}, p$1);

Clazz.newMeth(C$, 'addMo$S$I$F$F', function (sym, moPt, occ, energy) {
var sd=this.htSymmetries.get$O(sym);
if (sd == null ) {
for (var entry, $entry = this.htSymmetries.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) if (entry.getKey$().startsWith$S(sym + ":")) {
sd=entry.getValue$();
break;
}
if (sd == null ) return;
}var mo=sd.mos[moPt - 1];
mo.put$O$O("occupancy", Float.valueOf$F(occ > 2  ? 2 : occ));
mo.put$O$O("energy", Float.valueOf$F(energy));
mo.put$O$O("symmetry", sd.sym + "_" + moPt );
this.setMO$java_util_Map(mo);
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AdfReader, "SymmetryData", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index','nSFO','nBF'],'S',['sym'],'O',['coefs','float[][]','mos','java.util.Map[]','basisFunctions','int[]']]]

Clazz.newMeth(C$, 'c$$I$S', function (index, sym) {
;C$.$init$.apply(this);
$I$(1).info$S("ADF reader creating SymmetryData " + sym + " " + index );
this.index=index;
this.sym=sym;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
