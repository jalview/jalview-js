(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.simple"),p$1={},I$=[[0,'javajs.util.P3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AmpacReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ac=0;
this.freqAtom0=0;
this.partialCharges=null;
this.atomPositions=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.freqAtom0=-1;
}, 1);

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.indexOf$S("CARTESIAN COORDINATES") >= 0) {
if (!this.doGetModel$I$S(++this.modelNumber, null)) return this.checkLastModel$();
p$1.readCoordinates.apply(this, []);
return true;
}if (!this.doProcessLines) return true;
if (this.line.indexOf$S("NET ATOMIC CHARGES") >= 0) {
p$1.readPartialCharges.apply(this, []);
return true;
}if (this.line.indexOf$S("VIBRATIONAL FREQUENCIES") >= 0) {
p$1.readFrequencies.apply(this, []);
return true;
}return true;
});

Clazz.newMeth(C$, 'readCoordinates', function () {
var haveFreq=(this.freqAtom0 >= 0);
if (haveFreq) {
this.atomPositions=Clazz.array($I$(1), [this.ac]);
} else {
this.asc.newAtomSet$();
}this.rd$();
this.ac=0;
while (this.rd$() != null ){
var tokens=this.getTokens$();
if (tokens.length < 5) break;
if (haveFreq) {
this.atomPositions[this.ac]=$I$(1).new3$F$F$F(this.parseFloatStr$S(tokens[2]), this.parseFloatStr$S(tokens[3]), this.parseFloatStr$S(tokens[4]));
} else {
this.addAtomXYZSymName$SA$I$S$S(tokens, 2, tokens[1], null);
}this.ac++;
}
if (haveFreq) p$1.setPositions.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setPositions', function () {
var maxAtom=this.asc.ac;
var atoms=this.asc.atoms;
for (var i=this.freqAtom0; i < maxAtom; i++) {
atoms[i].setT$javajs_util_T3(this.atomPositions[i % this.ac]);
atoms[i].partialCharge=this.partialCharges[i % this.ac];
}
}, p$1);

Clazz.newMeth(C$, 'readPartialCharges', function () {
this.rd$();
this.partialCharges=Clazz.array(Float.TYPE, [this.ac]);
var tokens;
for (var i=0; i < this.ac; i++) {
if (this.rd$() == null  || (tokens=this.getTokens$()).length < 4 ) break;
this.partialCharges[i]=this.parseFloatStr$S(tokens[2]);
}
}, p$1);

Clazz.newMeth(C$, 'readFrequencies', function () {
while (this.rd$() != null  && this.line.indexOf$S("FREQ  :") < 0 ){
}
while (this.line != null  && this.line.indexOf$S("FREQ  :") >= 0 ){
var frequencies=this.getTokens$();
while (this.rd$() != null  && this.line.indexOf$S("IR I") < 0 ){
}
var iAtom0=this.asc.ac;
if (this.vibrationNumber == 0) this.freqAtom0=iAtom0;
var frequencyCount=frequencies.length - 2;
var ignore=Clazz.array(Boolean.TYPE, [frequencyCount]);
for (var i=0; i < frequencyCount; ++i) {
ignore[i]=!this.doGetVibration$I(++this.vibrationNumber);
if (ignore[i]) continue;
this.asc.cloneLastAtomSet$();
this.asc.setAtomSetName$S(frequencies[i + 2] + " cm^-1");
this.asc.setAtomSetModelProperty$S$S("Frequency", frequencies[i + 2] + " cm^-1");
this.asc.setAtomSetModelProperty$S$S(".PATH", "Frequencies");
}
this.fillFrequencyData$I$I$I$ZA$Z$I$I$IA$I$SAA(iAtom0, this.ac, this.ac, ignore, false, 8, 9, null, 0, null);
this.rd$();
this.rd$();
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
