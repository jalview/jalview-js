(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'javajs.util.PT','org.jmol.util.Logger','javajs.util.DF']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DmolReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.unitCellData=null;
this.totE=null;
this.geomOpt=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.contains$CharSequence("** GEOMETRY OPTIMIZATION IN DELOCALIZED COORDINATES **")) {
this.geomOpt=true;
} else if (this.line.contains$CharSequence("INCOOR, atomic coordinates")) {
this.geomOpt=false;
} else if (!this.geomOpt ? this.line.contains$CharSequence("$cell vectors") : this.line.contains$CharSequence("Lattice:")) {
p$1.readCellParam.apply(this, []);
} else if (!this.geomOpt ? this.line.contains$CharSequence("$coordinates") : this.line.contains$CharSequence("Input Coordinates")) {
p$1.readCoord.apply(this, []);
} else if (this.line.contains$CharSequence(" Total Energy")) {
p$1.readEnergy.apply(this, []);
} else if (this.line.contains$CharSequence("Frequencies (cm-1)")) {
p$1.readFreq.apply(this, []);
}return true;
});

Clazz.newMeth(C$, 'readCellParam', function () {
this.unitCellData=Clazz.array(Float.TYPE, [9]);
for (var n=0, i=0; n < 3; n++) {
var tokens=$I$(1).getTokens$S(this.rd$());
this.unitCellData[i++]=this.parseFloatStr$S(!this.geomOpt ? tokens[0] : tokens[4]) * 0.5291772;
this.unitCellData[i++]=this.parseFloatStr$S(!this.geomOpt ? tokens[1] : tokens[5]) * 0.5291772;
this.unitCellData[i++]=this.parseFloatStr$S(!this.geomOpt ? tokens[2] : tokens[6]) * 0.5291772;
}
}, p$1);

Clazz.newMeth(C$, 'newAtomSet', function () {
this.applySymmetryAndSetTrajectory$();
this.asc.newAtomSet$();
if (this.totE != null ) p$1.setEnergy.apply(this, []);
this.doApplySymmetry=true;
if (this.unitCellData != null ) {
this.addExplicitLatticeVector$I$FA$I(0, this.unitCellData, 0);
this.addExplicitLatticeVector$I$FA$I(1, this.unitCellData, 3);
this.addExplicitLatticeVector$I$FA$I(2, this.unitCellData, 6);
this.setSpaceGroupName$S("P1");
}this.setFractionalCoordinates$Z(false);
}, p$1);

Clazz.newMeth(C$, 'readCoord', function () {
p$1.newAtomSet.apply(this, []);
if (this.geomOpt) this.readLines$I(2);
while (this.rd$() != null  && !this.geomOpt  ? !this.line.contains$CharSequence("$end") : !this.line.contains$CharSequence("-----")){
var tokens=this.getTokens$();
var atom=this.asc.addNewAtom$();
atom.atomName=!this.geomOpt ? tokens[0] : tokens[1];
var factor=(!this.geomOpt ? 0.5291772 : 1.0);
var x=this.parseFloatStr$S(!this.geomOpt ? tokens[1] : tokens[2]) * factor;
var y=this.parseFloatStr$S(!this.geomOpt ? tokens[2] : tokens[3]) * factor;
var z=this.parseFloatStr$S(!this.geomOpt ? tokens[3] : tokens[4]) * factor;
atom.set$F$F$F(x, y, z);
this.setAtomCoord$org_jmol_adapter_smarter_Atom(atom);
}
}, p$1);

Clazz.newMeth(C$, 'readEnergy', function () {
this.rd$();
if (this.line.contains$CharSequence("Ef")) this.totE=Double.valueOf$D(Double.parseDouble$S($I$(1).getTokens$S(this.line.substring$I$I(this.line.indexOf$S("Ef") + 1, this.line.indexOf$S("Ha")))[1]));
}, p$1);

Clazz.newMeth(C$, 'setEnergy', function () {
this.asc.setAtomSetEnergy$S$F("" + this.totE.toString(), this.totE.floatValue$());
this.asc.setInfo$S$O("Energy", this.totE);
this.asc.setAtomSetName$S("E = " + this.totE.toString() + " Hartree" );
}, p$1);

Clazz.newMeth(C$, 'readFreq', function () {
var lastAtomCount=0;
var ac=this.asc.getLastAtomSetAtomCount$();
while (this.rd$() != null  && this.line.charAt$I(1) == " " ){
var tokens=this.getTokens$();
var frequencyCount=(tokens.length/2|0);
var frequencies=Clazz.array(Float.TYPE, [frequencyCount]);
for (var i=1, n=0; i < tokens.length; i+=2, n++) {
frequencies[n]=this.parseFloatStr$S(tokens[i]);
if (this.debugging) $I$(2).debug$S((this.vibrationNumber + n) + " frequency=" + new Float(frequencies[n]).toString() );
}
var ignore=Clazz.array(Boolean.TYPE, [frequencyCount]);
var iAtom0=0;
for (var i=0; i < frequencyCount; i++) {
ignore[i]=(!this.doGetVibration$I(++this.vibrationNumber));
if (ignore[i]) continue;
this.applySymmetryAndSetTrajectory$();
lastAtomCount=this.cloneLastAtomSet$I$javajs_util_P3A(ac, null);
if (i == 0) iAtom0=this.asc.getLastAtomSetAtomIndex$();
this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, null, null, String.valueOf$F(frequencies[i]), null);
this.asc.setAtomSetName$S($I$(3).formatDecimal$F$I(frequencies[i], 2) + " cm-1");
}
this.rd$();
this.fillFrequencyData$I$I$I$ZA$Z$I$I$IA$I$SAA(iAtom0, ac, lastAtomCount, ignore, false, 5, 13, null, 0, null);
this.readLines$I(2);
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
