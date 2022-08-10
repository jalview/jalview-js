(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'javajs.util.Lst','javajs.util.PT','javajs.util.DF']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VaspOutcarReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ac=0;
this.mDsimulation=false;
this.isVersion5=false;
this.elementNames=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['inputOnly','mDsimulation','isVersion5'],'F',['temp'],'I',['ac'],'O',['atomNames','String[]','elementNames','javajs.util.Lst','gibbsEnergy','Double','+gibbsEntropy','+electronEne','+kinEne','+totEne']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.isPrimitive=true;
this.setSpaceGroupName$S("P1");
this.setFractionalCoordinates$Z(true);
this.inputOnly=this.checkFilterKey$S("INPUT");
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.contains$CharSequence(" vasp.5")) {
this.isVersion5=true;
} else if (this.line.toUpperCase$().contains$CharSequence("TITEL")) {
p$1.readElementNames.apply(this, []);
} else if (this.line.contains$CharSequence("ions per type")) {
p$1.readAtomCountAndSetNames.apply(this, []);
} else if (this.line.contains$CharSequence("molecular dynamics for ions")) {
this.mDsimulation=true;
} else if (this.line.contains$CharSequence("direct lattice vectors")) {
p$1.readUnitCellVectors.apply(this, []);
} else if (this.line.contains$CharSequence("position of ions in fractional coordinates")) {
p$1.readInitialCoordinates.apply(this, []);
if (this.inputOnly) this.continuing=false;
} else if (this.line.contains$CharSequence("POSITION")) {
p$1.readPOSITION.apply(this, []);
return true;
} else if (this.line.startsWith$S("  FREE ENERGIE") && !this.mDsimulation ) {
p$1.readEnergy.apply(this, []);
} else if (this.line.contains$CharSequence("ENERGIE OF THE ELECTRON-ION-THERMOSTAT") && this.mDsimulation ) {
p$1.readMdyn.apply(this, []);
} else if (this.line.startsWith$S(" Eigenvectors and eigenvalues of the dynamical matrix")) {
p$1.readFrequency.apply(this, []);
}return true;
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
p$1.setSymmetry.apply(this, []);
});

Clazz.newMeth(C$, 'readElementNames', function () {
this.elementNames.addLast$O(this.getTokens$()[3]);
}, p$1);

Clazz.newMeth(C$, 'readAtomCountAndSetNames', function () {
var numofElement=Clazz.array(Integer.TYPE, [100]);
var tokens=$I$(2,"getTokens$S",[this.line.substring$I(this.line.indexOf$S("=") + 1)]);
this.ac=0;
for (var i=0; i < tokens.length; i++) this.ac+=(numofElement[i]=this.parseIntStr$S(tokens[i]));

this.atomNames=Clazz.array(String, [this.ac]);
var nElements=this.elementNames.size$();
for (var pt=0, i=0; i < nElements; i++) for (var j=0; j < numofElement[i]; j++) this.atomNames[pt++]=this.elementNames.get$I(i);


}, p$1);

Clazz.newMeth(C$, 'readUnitCellVectors', function () {
if (this.asc.ac > 0) {
p$1.setSymmetry.apply(this, []);
this.asc.newAtomSet$();
p$1.setAtomSetInfo.apply(this, []);
}var f=Clazz.array(Float.TYPE, [3]);
for (var i=0; i < 3; i++) this.addExplicitLatticeVector$I$FA$I(i, this.fillFloatArray$S$I$FA(p$1.fixMinus$S.apply(this, [this.rd$()]), 0, f), 0);

}, p$1);

Clazz.newMeth(C$, 'fixMinus$S', function (line) {
return $I$(2).rep$S$S$S(line, "-", " -");
}, p$1);

Clazz.newMeth(C$, 'setSymmetry', function () {
this.applySymmetryAndSetTrajectory$();
this.setSpaceGroupName$S("P1");
this.setFractionalCoordinates$Z(false);
}, p$1);

Clazz.newMeth(C$, 'readInitialCoordinates', function () {
var counter=0;
while (this.rd$() != null  && this.line.length$() > 10 ){
this.addAtomXYZSymName$SA$I$S$S($I$(2,"getTokens$S",[p$1.fixMinus$S.apply(this, [this.line])]), 0, null, this.atomNames[counter++]);
}
this.asc.setAtomSetName$S("Initial Coordinates");
}, p$1);

Clazz.newMeth(C$, 'readPOSITION', function () {
var counter=0;
this.readLines$I(1);
while (this.rd$() != null  && this.line.indexOf$S("----------") < 0 )this.addAtomXYZSymName$SA$I$S$S(this.getTokens$(), 0, null, this.atomNames[counter++]);

}, p$1);

Clazz.newMeth(C$, 'readEnergy', function () {
this.rd$();
var tokens=$I$(2,"getTokens$S",[this.rd$()]);
this.gibbsEnergy=Double.valueOf$D(Double.parseDouble$S(tokens[4]));
this.rd$();
tokens=$I$(2,"getTokens$S",[this.rd$()]);
var enthalpy=Double.parseDouble$S(tokens[3]);
this.gibbsEntropy=Double.valueOf$D(enthalpy - this.gibbsEnergy.doubleValue$());
}, p$1);

Clazz.newMeth(C$, 'setAtomSetInfo', function () {
if (this.gibbsEnergy == null ) return;
this.asc.setAtomSetEnergy$S$F("" + this.gibbsEnergy.toString(), this.gibbsEnergy.floatValue$());
this.asc.setCurrentModelInfo$S$O("Energy", this.gibbsEnergy);
this.asc.setCurrentModelInfo$S$O("Entropy", this.gibbsEntropy);
this.asc.setInfo$S$O("Energy", this.gibbsEnergy);
this.asc.setInfo$S$O("Entropy", this.gibbsEntropy);
this.asc.setAtomSetName$S("G = " + this.gibbsEnergy.toString() + " eV, T*S = " + this.gibbsEntropy.toString() + " eV" );
}, p$1);

Clazz.newMeth(C$, 'readMdyn', function () {
var tokens=this.getTokens$();
this.rd$();
tokens=$I$(2,"getTokens$S",[this.rd$()]);
this.electronEne=Double.valueOf$D(Double.parseDouble$S(tokens[4]));
tokens=$I$(2,"getTokens$S",[this.rd$()]);
this.kinEne=Double.valueOf$D(Double.parseDouble$S(tokens[4]));
this.temp=this.parseFloatStr$S(tokens[6]);
this.readLines$I(3);
tokens=$I$(2,"getTokens$S",[this.rd$()]);
this.totEne=Double.valueOf$D(Double.parseDouble$S(tokens[4]));
p$1.setAtomSetInfoMd.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setAtomSetInfoMd', function () {
this.asc.setAtomSetName$S("Temp. = " + $I$(3,"formatDecimal$F$I",[(this.temp), 2]) + " K, Energy = " + this.totEne.toString() + " eV" );
this.asc.setCurrentModelInfo$S$O("Energy", this.totEne);
this.asc.setInfo$S$O("Energy", this.totEne);
this.asc.setCurrentModelInfo$S$O("EleEnergy", this.kinEne);
this.asc.setInfo$S$O("EleEnergy", this.electronEne);
this.asc.setCurrentModelInfo$S$O("Kinetic", this.electronEne);
this.asc.setInfo$S$O("Kinetic", this.kinEne);
this.asc.setCurrentModelInfo$S$O("Temperature", $I$(3,"formatDecimal$F$I",[(this.temp), 2]));
this.asc.setInfo$S$O("Temperature", $I$(3,"formatDecimal$F$I",[(this.temp), 2]));
}, p$1);

Clazz.newMeth(C$, 'readFrequency', function () {
var pt=this.asc.iSet;
this.asc.baseSymmetryAtomCount=this.ac;
if (this.isVersion5) {
this.readLines$I(3);
} else {
this.discardLinesUntilContains$S("Eigenvectors after division by SQRT(mass)");
this.readLines$I(5);
}var ignore=Clazz.array(Boolean.TYPE, [1]);
while (this.rd$() != null  && (this.line.contains$CharSequence("f  = ") || this.line.contains$CharSequence("f/i= ") ) ){
this.applySymmetryAndSetTrajectory$();
var iAtom0=this.asc.ac;
this.cloneLastAtomSet$I$javajs_util_P3A(this.ac, null);
if (!ignore[0]) {
this.asc.iSet=++pt;
this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, null, null, this.line.substring$I$I(this.line.indexOf$S("2PiTHz") + 6, this.line.indexOf$S("c") - 1).trim$(), null);
}this.rd$();
this.fillFrequencyData$I$I$I$ZA$Z$I$I$IA$I$SAA(iAtom0, this.ac, this.ac, ignore, true, 35, 12, null, 0, null);
this.rd$();
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:28 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
