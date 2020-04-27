(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'javajs.util.Lst','java.util.Hashtable','org.jmol.api.JmolAdapter','org.jmol.adapter.readers.quantum.BasisFunctionReader','javajs.util.AU','org.jmol.util.Logger','javajs.util.PT','org.jmol.adapter.smarter.AtomSetCollectionReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PsiReader", null, 'org.jmol.adapter.readers.quantum.MOReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.atomNames=Clazz.new_($I$(1,1));
this.shellsByUniqueAtom=Clazz.new_($I$(1,1));
this.uniqueAtomMap=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['atomNames','javajs.util.Lst','+shellsByUniqueAtom','uniqueAtomMap','java.util.Map']]]

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.indexOf$S("-Geometry after Center-of-Mass shift and reorientation (a.u.):") >= 0) {
p$1.readAtoms$Z.apply(this, [true]);
this.doProcessLines=true;
return true;
}if (this.line.indexOf$S("-Unique atoms in the canonical coordinate system (a.u.):") >= 0) {
p$1.readUniqueAtoms.apply(this, []);
this.doProcessLines=true;
return true;
}if (!this.doProcessLines) return true;
if (this.line.indexOf$S("New Cartesian Geometry in a.u.") >= 0) {
p$1.readAtoms$Z.apply(this, [false]);
return true;
}if (this.line.startsWith$S("  label        = ")) {
this.moData.put$O$O("calculationType", this.calculationType=this.line.substring$I(17).trim$());
return true;
}if (this.line.startsWith$S("molecular orbitals for ")) {
this.moData.put$O$O("energyUnits", "");
return true;
}if (this.line.startsWith$S("  -BASIS SETS:")) {
this.readBasis$();
return true;
}if (this.line.indexOf$S("Molecular Orbital Coefficients") >= 0) {
if (this.filterMO$()) this.readPsiMolecularOrbitals$();
return true;
}if (this.line.indexOf$S("SCF total energy   =") >= 0) {
p$1.readSCFDone.apply(this, []);
return true;
}if (this.line.indexOf$S("Normal Modes") >= 0) {
p$1.readFrequencies.apply(this, []);
return true;
}return this.checkNboLine$();
});

Clazz.newMeth(C$, 'readSCFDone', function () {
this.asc.setAtomSetName$S(this.line);
}, p$1);

Clazz.newMeth(C$, 'readAtoms$Z', function (isInitial) {
if (isInitial) {
this.asc.newAtomSet$();
this.asc.setAtomSetName$S("");
this.discardLinesUntilContains$S("----");
}var atomPt=0;
while (this.rd$() != null  && this.line.length$() > 0 ){
var tokens=this.getTokens$();
var atom=(isInitial ? this.asc.addNewAtom$() : this.asc.atoms[atomPt++]);
if (isInitial) {
this.atomNames.addLast$O(tokens[0]);
if (tokens[0].length$() <= 2) atom.elementNumber=($s$[0] = $I$(3).getElementNumber$S(tokens[0]), $s$[0]);
} else {
atom.elementNumber=($s$[0] = this.parseIntStr$S(tokens[0]), $s$[0]);
}if (atom.elementNumber < 0) atom.elementNumber=($s$[0] = 0, $s$[0]);
this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(atom, tokens, 1, 0.5291772);
}
}, p$1);

Clazz.newMeth(C$, 'readBasis$', function () {
var gdata=Clazz.new_($I$(1,1));
this.gaussianCount=0;
this.shellCount=0;
var tokens;
var slater=null;
var slatersByUniqueAtom=null;
this.rd$();
while (this.rd$() != null  && this.line.startsWith$S("   -Basis set on") ){
slatersByUniqueAtom=Clazz.new_($I$(1,1));
var nGaussians=0;
while (this.rd$() != null  && !this.line.startsWith$S("       )") ){
this.line=this.line.replace$C$C("(", " ").replace$C$C(")", " ");
tokens=this.getTokens$();
var ipt=0;
switch (tokens.length) {
case 3:
if (slater != null ) {
slatersByUniqueAtom.addLast$O(slater);
}ipt=1;
slater=Clazz.array(Integer.TYPE, [3]);
slater[0]=$I$(4).getQuantumShellTagID$S(tokens[0]);
slater[1]=this.gaussianCount;
this.shellCount++;
break;
case 2:
break;
}
nGaussians++;
gdata.addLast$O(Clazz.array(String, -1, [tokens[ipt], tokens[ipt + 1]]));
slater[2]=nGaussians;
}
if (slater != null ) {
slatersByUniqueAtom.addLast$O(slater);
}this.shellsByUniqueAtom.addLast$O(slatersByUniqueAtom);
this.gaussianCount+=nGaussians;
this.rd$();
}
var garray=$I$(5).newFloat2$I(this.gaussianCount);
for (var i=0; i < this.gaussianCount; i++) {
tokens=gdata.get$I(i);
garray[i]=Clazz.array(Float.TYPE, [tokens.length]);
for (var j=0; j < tokens.length; j++) garray[i][j]=this.parseFloatStr$S(tokens[j]);

}
this.moData.put$O$O("gaussians", garray);
if (this.debugging) {
$I$(6).debug$S(this.shellCount + " slater shells read");
$I$(6).debug$S(this.gaussianCount + " gaussian primitives read");
}});

Clazz.newMeth(C$, 'readUniqueAtoms', function () {
var sdata=Clazz.new_($I$(1,1));
this.discardLinesUntilContains$S("----");
var n=0;
while (this.rd$() != null  && this.line.length$() > 0 ){
var tokens=this.getTokens$();
this.uniqueAtomMap.put$O$O(tokens[0], Integer.valueOf$I(n++));
}
var ac=this.atomNames.size$();
for (var i=0; i < ac; i++) {
var atomType=this.atomNames.get$I(i);
var iUnique=this.uniqueAtomMap.get$O(atomType).intValue$();
var slaters=this.shellsByUniqueAtom.get$I(iUnique);
if (slaters == null ) {
$I$(6).error$S("slater for atom " + i + " atomType " + atomType + " was not found in listing. Ignoring molecular orbitals" );
return;
}for (var j=0; j < slaters.size$(); j++) {
var slater=slaters.get$I(j);
sdata.addLast$O(Clazz.array(Integer.TYPE, -1, [i + 1, slater[0], slater[1], slater[2]]));
}
}
this.moData.put$O$O("shells", sdata);
}, p$1);

Clazz.newMeth(C$, 'readPsiMolecularOrbitals$', function () {
var mos=$I$(5).createArrayOfHashtable$I(5);
var data=$I$(5).createArrayOfArrayList$I(5);
var nThisLine=0;
while (this.rd$() != null  && this.line.toUpperCase$().indexOf$S("DENS") < 0 ){
var tokens=this.getTokens$();
var ptData=(this.line.charAt$I(5) == " " ? 2 : 4);
if (this.line.indexOf$S("                    ") == 0) {
this.addMOData$I$javajs_util_LstA$java_util_MapA(nThisLine, data, mos);
nThisLine=tokens.length;
tokens=(function(a,f){return f.apply(null,a)})([this.rd$()],$I$(7).getTokens$S);
for (var i=0; i < nThisLine; i++) {
mos[i]=Clazz.new_($I$(2,1));
data[i]=Clazz.new_($I$(1,1));
mos[i].put$O$O("symmetry", tokens[i]);
}
tokens=(function(a,f){return f.apply(null,a)})([this.rd$().substring$I(21), nThisLine, 10],$I$(8).getStrings$S$I$I);
for (var i=0; i < nThisLine; i++) {
mos[i].put$O$O("energy", Float.valueOf$S(tokens[i]));
}
continue;
}try {
for (var i=0; i < nThisLine; i++) {
data[i].addLast$O(tokens[i + ptData]);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(6).error$S("Error reading Psi3 file molecular orbitals at line: " + this.line);
break;
} else {
throw e;
}
}
}
this.addMOData$I$javajs_util_LstA$java_util_MapA(nThisLine, data, mos);
this.moData.put$O$O("mos", this.orbitals);
this.finalizeMOData$java_util_Map(this.moData);
});

Clazz.newMeth(C$, 'readFrequencies', function () {
this.rd$();
var ac=this.asc.getLastAtomSetAtomCount$();
var tokens;
while (this.rd$() != null  && this.line.indexOf$S("Frequency") >= 0 ){
tokens=this.getTokens$();
var iAtom0=this.asc.ac;
var ignore=Clazz.array(Boolean.TYPE, [1]);
if (!this.doGetVibration$I(++this.vibrationNumber)) continue;
this.asc.cloneLastAtomSet$();
this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, null, null, tokens[1], null);
this.readLines$I(2);
this.fillFrequencyData$I$I$I$ZA$Z$I$I$IA$I$SAA(iAtom0, ac, ac, ignore, true, 0, 0, null, 0, null);
this.rd$();
}
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
