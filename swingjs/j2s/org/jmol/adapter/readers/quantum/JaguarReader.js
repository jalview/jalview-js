(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'org.jmol.util.Logger','javajs.util.AU','javajs.util.Lst','javajs.util.PT','org.jmol.adapter.readers.quantum.BasisFunctionReader','Boolean','java.util.Hashtable']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JaguarReader", null, 'org.jmol.adapter.readers.quantum.MOReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.moCount=0;
this.lumoEnergy=0;
this.haveLine=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.moCount=0;
this.lumoEnergy=3.4028235E38;
}, 1);

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.startsWith$S(" Input geometry:") || this.line.startsWith$S(" Symmetrized geometry:") || this.line.startsWith$S("  final geometry:")  ) {
p$1.readAtoms.apply(this, []);
return true;
}if (this.line.startsWith$S("  Atomic charges from electrostatic potential:")) {
p$1.readCharges.apply(this, []);
return true;
}if (this.line.startsWith$S("  number of basis functions....")) {
this.moCount=this.parseIntAt$S$I(this.line, 32);
return true;
}if (this.line.startsWith$S("  basis set:")) {
this.moData.put$TK$TV("energyUnits", "");
this.moData.put$TK$TV("calculationType", this.calculationType=this.line.substring$I(13).trim$());
if ("sto-3g".equals$O(this.calculationType)) {
$I$(1).error$S("STO-3G not supported for Jaguar -- unusual SP basis definition.");
}return true;
}if (this.line.indexOf$S("XXXXXShell information") >= 0) {
p$1.readUnnormalizedBasis.apply(this, []);
return true;
}if (this.line.indexOf$S("Normalized coefficients") >= 0) {
if (!"sto-3g".equals$O(this.calculationType)) p$1.readBasisNormalized.apply(this, []);
return true;
}if (this.line.startsWith$S(" LUMO energy:")) {
this.lumoEnergy=this.parseFloatStr$S(this.line.substring$I(13));
return true;
}if (this.line.indexOf$S("final wvfn") >= 0) {
if (this.shells != null ) p$1.readJaguarMolecularOrbitals.apply(this, []);
return true;
}if (this.line.startsWith$S("  harmonic frequencies in")) {
p$1.readFrequencies.apply(this, []);
this.continuing=false;
return false;
}return this.checkNboLine$();
});

Clazz.newMeth(C$, 'readAtoms', function () {
this.discardPreviousAtoms$();
this.readLines$I(2);
while (this.rd$() != null  && this.line.length$() >= 60  && this.line.charAt$I(2) != " " ){
var tokens=this.getTokens$();
var atomName=tokens[0];
if (atomName.length$() < 2) return;
var ch2=atomName.charAt$I(1);
var elementSymbol=(ch2 >= "a" && ch2 <= "z"  ? atomName.substring$I$I(0, 2) : atomName.substring$I$I(0, 1));
this.addAtomXYZSymName$SA$I$S$S(tokens, 1, elementSymbol, atomName);
}
}, p$1);

Clazz.newMeth(C$, 'readCharges', function () {
var iAtom=0;
while (this.rd$() != null  && this.line.indexOf$S("sum") < 0 ){
if (this.line.indexOf$S("Charge") < 0) continue;
var tokens=this.getTokens$();
for (var i=1; i < tokens.length; i++) this.asc.atoms[iAtom++].partialCharge=this.parseFloatStr$S(tokens[i]);

}
}, p$1);

Clazz.newMeth(C$, 'readUnnormalizedBasis', function () {
var lastAtom="";
var iAtom=0;
var sdata=Clazz.array(Integer.TYPE, [this.moCount, 4]);
var sgdata=$I$(2).createArrayOfArrayList$I(this.moCount);
var tokens;
this.gaussianCount=0;
this.discardLinesUntilContains$S("--------");
while (this.rd$() != null  && (tokens=this.getTokens$()).length == 9 ){
var jCont=this.parseIntStr$S(tokens[2]);
if (jCont > 0) {
if (!tokens[0].equals$O(lastAtom)) iAtom++;
lastAtom=tokens[0];
var iFunc=this.parseIntStr$S(tokens[5]);
var iType=this.parseIntStr$S(tokens[4]);
if (iType <= 2) iType--;
if (sgdata[iFunc] == null ) {
sdata[iFunc][0]=iAtom;
sdata[iFunc][1]=iType;
sdata[iFunc][2]=0;
sdata[iFunc][3]=0;
sgdata[iFunc]=Clazz.new_($I$(3));
}var factor=1;
sgdata[iFunc].addLast$TV(Clazz.array(Float.TYPE, -1, [this.parseFloatStr$S(tokens[6]), this.parseFloatStr$S(tokens[8]) * factor]));
this.gaussianCount+=jCont;
for (var i=jCont - 1; --i >= 0; ) {
tokens=$I$(4).getTokens$S(this.rd$());
sgdata[iFunc].addLast$TV(Clazz.array(Float.TYPE, -1, [this.parseFloatStr$S(tokens[6]), this.parseFloatStr$S(tokens[8]) * factor]));
}
}}
var garray=$I$(2).newFloat2$I(this.gaussianCount);
var sarray=Clazz.new_($I$(3));
this.gaussianCount=0;
for (var i=0; i < this.moCount; i++) if (sgdata[i] != null ) {
var n=sgdata[i].size$();
sdata[i][2]=this.gaussianCount;
sdata[i][3]=n;
for (var j=0; j < n; j++) {
garray[this.gaussianCount++]=sgdata[i].get$I(j);
}
sarray.addLast$TV(sdata[i]);
}
this.moData.put$TK$TV("shells", sarray);
this.moData.put$TK$TV("gaussians", garray);
if (this.debugging) {
$I$(1).debug$S(sarray.size$() + " slater shells read");
$I$(1).debug$S(this.gaussianCount + " gaussian primitives read");
}}, p$1);

Clazz.newMeth(C$, 'readBasisNormalized', function () {
var lastAtom="";
var iAtom=0;
var id;
var iFunc=0;
var iFuncLast=-1;
var sarray=Clazz.new_($I$(3));
var gdata=Clazz.new_($I$(3));
this.gaussianCount=0;
var sdata=null;
this.discardLinesUntilContains$S("--------");
while (this.rd$() != null  && this.line.length$() > 3 ){
var tokens=this.getTokens$();
if (tokens.length == 4) {
id=tokens[0];
continue;
}if (!tokens[0].equals$O(lastAtom)) iAtom++;
lastAtom=tokens[0];
id=tokens[2];
var iType=$I$(5).getQuantumShellTagID$S(id);
iFunc=this.parseIntStr$S(tokens[3]) - 1;
var gPtr=gdata.size$();
if (iFunc == iFuncLast) {
sdata[3]++;
} else if (iFunc < iFuncLast) {
for (var i=gdata.size$(); --i >= 0; ) {
if (gdata.get$I(i)[2] == iFunc ) {
gPtr=i + 1;
break;
}}
for (var i=sarray.size$(); --i >= 0; ) {
if (sarray.get$I(i)[4] == iFunc) {
sarray.get$I(i)[3]++;
while (++i < sarray.size$()){
sarray.get$I(i)[2]++;
}
break;
}}
} else {
sdata=Clazz.array(Integer.TYPE, -1, [iAtom, iType, this.gaussianCount + 1, 1, iFunc]);
sarray.addLast$TV(sdata);
iFuncLast=iFunc;
}this.gaussianCount++;
var z=this.parseFloatStr$S(tokens[4]);
var rCoef=this.parseFloatStr$S(tokens[5]);
if (id.equals$O("XX")) rCoef *= 1.7320508;
gdata.add$I$TE(gPtr, Clazz.array(Float.TYPE, -1, [z, rCoef, iFunc]));
}
var garray=$I$(2).newFloat2$I(this.gaussianCount);
for (var i=gdata.size$(); --i >= 0; ) garray[i]=gdata.get$I(i);

this.moData.put$TK$TV("shells", this.shells=sarray);
this.moData.put$TK$TV("gaussians", garray);
if (this.debugging) {
$I$(1).debug$S(sarray.size$() + " slater shells read");
$I$(1).debug$S(this.gaussianCount + " gaussian primitives read");
}this.moData.put$TK$TV("isNormalized", $I$(6).TRUE);
}, p$1);

Clazz.newMeth(C$, 'readJaguarMolecularOrbitals', function () {
var dataBlock=Clazz.array(String, [this.moCount, null]);
this.rd$();
this.rd$();
this.rd$();
var nMo=0;
while (this.line != null ){
this.rd$();
this.rd$();
this.rd$();
if (this.line == null  || this.line.indexOf$S("eigenvalues-") < 0 ) break;
var eigenValues=this.getTokens$();
var n=eigenValues.length - 1;
this.fillDataBlock$SAA$I(dataBlock, 0);
var occ=2;
for (var iOrb=0; iOrb < n; iOrb++) {
var coefs=Clazz.array(Float.TYPE, [this.moCount]);
var mo=Clazz.new_($I$(7));
var energy=this.parseFloatStr$S(eigenValues[iOrb + 1]);
mo.put$TK$TV("energy", Float.valueOf$F(energy));
if (Math.abs(energy - this.lumoEnergy) < 1.0E-4 ) {
this.moData.put$TK$TV("HOMO", Integer.valueOf$I(nMo));
this.lumoEnergy=3.4028235E38;
occ=0;
}mo.put$TK$TV("occupancy", Float.valueOf$F(occ));
nMo++;
for (var i=0, pt=0; i < this.moCount; i++) {
coefs[pt++]=this.parseFloatStr$S(dataBlock[i][iOrb + 3]);
}
mo.put$TK$TV("coefficients", coefs);
this.setMO$java_util_Map(mo);
}
}
this.moData.put$TK$TV("mos", this.orbitals);
this.finalizeMOData$java_util_Map(this.moData);
}, p$1);

Clazz.newMeth(C$, 'readFrequencies', function () {
var ac=this.asc.getLastAtomSetAtomCount$();
this.discardLinesUntilStartsWith$S("  frequencies ");
while (this.line != null  && this.line.startsWith$S("  frequencies ") ){
var iAtom0=this.asc.ac;
var frequencies=this.getTokens$();
var frequencyCount=frequencies.length - 1;
var ignore=Clazz.array(Boolean.TYPE, [frequencyCount]);
var symmetries=null;
var intensities=null;
while (this.line != null  && this.line.charAt$I(2) != " " ){
if (this.line.indexOf$S("symmetries") >= 0) symmetries=this.getTokens$();
 else if (this.line.indexOf$S("intensities") >= 0) intensities=this.getTokens$();
this.rd$();
}
for (var i=0; i < frequencyCount; i++) {
ignore[i]=!this.doGetVibration$I(++this.vibrationNumber);
if (ignore[i]) continue;
this.asc.cloneFirstAtomSet$I(0);
this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, null, symmetries == null  ? null : symmetries[i + 1], frequencies[i + 1], null);
if (intensities != null ) this.asc.setAtomSetModelProperty$S$S("IRIntensity", intensities[i + 1] + " km/mol");
}
this.haveLine=true;
this.fillFrequencyData$I$I$I$ZA$Z$I$I$IA$I$SAA(iAtom0, ac, ac, ignore, false, 0, 0, null, 0, null);
this.rd$();
this.rd$();
}
}, p$1);

Clazz.newMeth(C$, 'rd$', function () {
if (!this.haveLine) return C$.superclazz.prototype.rd$.apply(this, []);
this.haveLine=false;
return this.line;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
