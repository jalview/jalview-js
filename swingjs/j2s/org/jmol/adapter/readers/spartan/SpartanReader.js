(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.spartan"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.adapter.readers.spartan.SpartanArchive']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SpartanReader", null, 'org.jmol.adapter.readers.quantum.BasisFunctionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'initializeReader$', function () {
var cartesianHeader="Cartesian Coordinates (Ang";
if (p$1.isSpartanArchive$S.apply(this, [cartesianHeader])) {
this.moData=Clazz.new_($I$(1,1));
var spartanArchive=Clazz.new_($I$(2,1).c$$org_jmol_adapter_readers_quantum_BasisFunctionReader$S$S$I,[this, "", null, 0]);
var ac=spartanArchive.readArchive$S$Z$I$Z(this.line, true, 0, true);
if (ac > 0) this.asc.setAtomSetName$S("Spartan file");
} else if (this.line.indexOf$S(cartesianHeader) >= 0) {
p$1.readAtoms.apply(this, []);
this.discardLinesUntilContains$S("Vibrational Frequencies");
if (this.line != null ) p$1.readFrequencies.apply(this, []);
}this.continuing=false;
});

Clazz.newMeth(C$, 'isSpartanArchive$S', function (strNotArchive) {
var lastLine="";
while (this.rd$() != null ){
if (this.line.equals$O("GEOMETRY")) {
this.line=lastLine;
return true;
}if (this.line.indexOf$S(strNotArchive) >= 0) return false;
lastLine=this.line;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'readAtoms', function () {
this.discardLinesUntilBlank$();
while (this.rd$() != null  && (this.parseIntRange$S$I$I(this.line, 0, 3)) > 0 ){
var atom=this.asc.addNewAtom$();
atom.elementSymbol=this.parseTokenRange$S$I$I(this.line, 4, 6);
atom.atomName=this.parseTokenRange$S$I$I(this.line, 7, 13);
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, this.parseFloatRange$S$I$I(this.line, 17, 30), this.parseFloatRange$S$I$I(this.line, 31, 44), this.parseFloatRange$S$I$I(this.line, 45, 58));
}
}, p$1);

Clazz.newMeth(C$, 'readFrequencies', function () {
var ac=this.asc.getAtomSetAtomCount$I(0);
while (true){
this.discardLinesUntilNonBlank$();
var lineBaseFreqCount=this.vibrationNumber;
this.next[0]=16;
var lineFreqCount;
var ignore=Clazz.array(Boolean.TYPE, [3]);
for (lineFreqCount=0; lineFreqCount < 3; ++lineFreqCount) {
var frequency=this.parseFloat$();
if (Float.isNaN$F(frequency)) break;
ignore[lineFreqCount]=!this.doGetVibration$I(++this.vibrationNumber);
if (!ignore[lineFreqCount]) {
if (this.vibrationNumber > 1) this.asc.cloneFirstAtomSet$I(0);
this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, null, null, "" + new Float(frequency).toString(), null);
}}
if (lineFreqCount == 0) return;
this.readLines$I(2);
for (var i=0; i < ac; ++i) {
this.rd$();
for (var j=0; j < lineFreqCount; ++j) {
var ichCoords=j * 23 + 10;
var x=this.parseFloatRange$S$I$I(this.line, ichCoords, ichCoords + 7);
var y=this.parseFloatRange$S$I$I(this.line, ichCoords + 7, ichCoords + 14);
var z=this.parseFloatRange$S$I$I(this.line, ichCoords + 14, ichCoords + 21);
if (!ignore[j]) this.asc.addVibrationVector$I$F$F$F(i + (lineBaseFreqCount + j) * ac, x, y, z);
}
}
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
