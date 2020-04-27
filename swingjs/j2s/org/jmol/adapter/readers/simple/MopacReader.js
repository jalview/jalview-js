(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.simple"),p$1={},I$=[[0,'javajs.util.PT','org.jmol.util.Logger','org.jmol.adapter.smarter.AtomSetCollectionReader','javajs.util.BS']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MopacReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.chargesFound=false;
},1);

C$.$fields$=[['Z',['chargesFound','haveHeader'],'I',['mopacVersion']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
while (this.mopacVersion == 0){
this.discardLinesUntilContains$S("MOPAC");
if (this.line.indexOf$S("2009") >= 0) this.mopacVersion=2009;
 else if (this.line.indexOf$S("6.") >= 0) this.mopacVersion=6;
 else if (this.line.indexOf$S("7.") >= 0) this.mopacVersion=7;
 else if (this.line.indexOf$S("93") >= 0) this.mopacVersion=93;
 else if (this.line.indexOf$S("2002") >= 0) this.mopacVersion=2002;
 else if (this.line.indexOf$S("MOPAC2") >= 0) this.mopacVersion=(function(a,f){return f.apply(null,a)})([this.line.substring$I(this.line.indexOf$S("MOPAC2") + 5)],$I$(1).parseInt$S);
}
$I$(2).info$S("MOPAC version " + this.mopacVersion);
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (!this.haveHeader) {
if (this.line.trim$().equals$O("CARTESIAN COORDINATES")) {
this.processCoordinates$();
this.asc.setAtomSetName$S("Input Structure");
return true;
}this.haveHeader=this.line.startsWith$S(" ---");
return true;
}if (this.line.indexOf$S("TOTAL ENERGY") >= 0) {
this.processTotalEnergy$();
return true;
}if (this.line.indexOf$S("ATOMIC CHARGES") >= 0) {
this.processAtomicCharges$();
return true;
}if (this.line.trim$().equals$O("CARTESIAN COORDINATES")) {
this.processCoordinates$();
return true;
}if (this.line.indexOf$S("ORIENTATION OF MOLECULE IN FORCE") >= 0) {
this.processCoordinates$();
this.asc.setAtomSetName$S("Orientation in Force Field");
return true;
}if (this.line.indexOf$S("NORMAL COORDINATE ANALYSIS") >= 0) {
p$1.readFrequencies.apply(this, []);
return true;
}return true;
});

Clazz.newMeth(C$, 'processTotalEnergy$', function () {
});

Clazz.newMeth(C$, 'processAtomicCharges$', function () {
this.readLines$I(2);
this.asc.newAtomSet$();
this.baseAtomIndex=this.asc.ac;
var expectedAtomNumber=0;
while (this.rd$() != null ){
var atomNumber=this.parseIntStr$S(this.line);
if (atomNumber == -2147483648) break;
++expectedAtomNumber;
if (atomNumber != expectedAtomNumber) throw Clazz.new_(Clazz.load('Exception').c$$S,["unexpected atom number in atomic charges"]);
var atom=this.asc.addNewAtom$();
atom.elementSymbol=this.parseToken$();
atom.partialCharge=this.parseFloat$();
}
this.chargesFound=true;
});

Clazz.newMeth(C$, 'processCoordinates$', function () {
if (!this.chargesFound) {
this.asc.newAtomSet$();
this.baseAtomIndex=this.asc.ac;
} else {
this.chargesFound=false;
}var atoms=this.asc.atoms;
var atomNumber;
while (this.rd$().trim$().length$() == 0 || this.line.indexOf$S("ATOM") >= 0 ){
}
while (this.line != null ){
var tokens=this.getTokens$();
if (tokens.length == 0 || (atomNumber=this.parseIntStr$S(tokens[0])) == -2147483648 ) break;
var atom=atoms[this.baseAtomIndex + atomNumber - 1];
if (atom == null ) atom=this.asc.addNewAtom$();
atom.atomSerial=atomNumber;
this.setAtomCoordTokens$org_jmol_adapter_smarter_Atom$SA$I(atom, tokens, 2);
var elementSymbol=tokens[1];
var atno=this.parseIntStr$S(elementSymbol);
if (atno != -2147483648) elementSymbol=$I$(3).getElementSymbol$I(atno);
atom.elementSymbol=elementSymbol;
this.rd$();
}
});

Clazz.newMeth(C$, 'readFrequencies', function () {
var bsOK=Clazz.new_($I$(4,1));
var n0=this.asc.iSet + 1;
var tokens;
var done=false;
while (!done && this.rd$() != null   && this.line.indexOf$S("DESCRIPTION") < 0  && this.line.indexOf$S("MASS-WEIGHTED") < 0 )if (this.line.toUpperCase$().indexOf$S("ROOT") >= 0) {
this.discardLinesUntilNonBlank$();
tokens=this.getTokens$();
if (Float.isNaN$F($I$(1).parseFloatStrict$S(tokens[tokens.length - 1]))) {
this.discardLinesUntilNonBlank$();
tokens=this.getTokens$();
}var frequencyCount=tokens.length;
this.rd$();
var iAtom0=this.asc.ac;
var ac=this.asc.getLastAtomSetAtomCount$();
var ignore=Clazz.array(Boolean.TYPE, [frequencyCount]);
var freq1=$I$(1).parseFloatStrict$S(tokens[0]);
var ignoreNegative=(freq1 < 0 );
for (var i=0; i < frequencyCount; ++i) {
ignore[i]=done || (done=(!ignoreNegative && $I$(1).parseFloatStrict$S(tokens[i]) < 1  )) || !this.doGetVibration$I(++this.vibrationNumber)  ;
if (ignore[i]) continue;
bsOK.set$I(this.vibrationNumber - 1);
this.asc.cloneLastAtomSet$();
}
this.fillFrequencyData$I$I$I$ZA$Z$I$I$IA$I$SAA(iAtom0, ac, ac, ignore, false, 0, 0, null, 2, null);
}
var info=Clazz.array(String, [this.vibrationNumber, null]);
if (this.line.indexOf$S("DESCRIPTION") < 0) this.discardLinesUntilContains$S("DESCRIPTION");
while (this.discardLinesUntilContains$S("VIBRATION") != null ){
tokens=this.getTokens$();
var freqNo=this.parseIntStr$S(tokens[1]);
tokens[0]=(function(a,f){return f.apply(null,a)})([this.rd$()],$I$(1).getTokens$S)[1];
if (tokens[2].equals$O("ATOM")) tokens[2]=null;
info[freqNo - 1]=tokens;
if (freqNo == this.vibrationNumber) break;
}
for (var i=this.vibrationNumber - 1; --i >= 0; ) if (info[i] == null ) info[i]=info[i + 1];

for (var i=0, n=n0; i < this.vibrationNumber; i++) {
if (!bsOK.get$I(i)) continue;
this.asc.iSet=n++;
this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, null, info[i][2], info[i][0], null);
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
