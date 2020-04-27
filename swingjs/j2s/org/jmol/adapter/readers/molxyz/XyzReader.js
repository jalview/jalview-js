(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.molxyz"),p$1={},I$=[[0,'org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "XyzReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'checkLine$', function () {
var modelAtomCount=this.parseIntStr$S(this.line);
if (modelAtomCount == -2147483648) {
this.continuing=false;
return false;
}this.vibrationNumber=++this.modelNumber;
if (this.desiredVibrationNumber <= 0 ? this.doGetModel$I$S(this.modelNumber, null) : this.doGetVibration$I(this.vibrationNumber)) {
this.rd$();
this.checkCurrentLineForScript$();
this.asc.newAtomSet$();
var name=this.line.trim$();
p$1.readAtoms$I.apply(this, [modelAtomCount]);
this.applySymmetryAndSetTrajectory$();
this.asc.setAtomSetName$S(name);
if (this.isLastModel$I(this.modelNumber)) {
this.continuing=false;
return false;
}} else {
p$1.skipAtomSet$I.apply(this, [modelAtomCount]);
}this.discardLinesUntilNonBlank$();
return false;
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.isTrajectory=false;
this.finalizeReaderASCR$();
});

Clazz.newMeth(C$, 'skipAtomSet$I', function (modelAtomCount) {
this.rd$();
for (var i=modelAtomCount; --i >= 0; ) this.rd$();

}, p$1);

Clazz.newMeth(C$, 'readAtoms$I', function (modelAtomCount) {
for (var i=0; i < modelAtomCount; ++i) {
this.rd$();
var tokens=this.getTokens$();
if (tokens.length < 4) {
$I$(1).warn$S("line cannot be read for XYZ atom data: " + this.line);
continue;
}var atom=this.addAtomXYZSymName$SA$I$S$S(tokens, 1, null, null);
this.setElementAndIsotope$org_jmol_adapter_smarter_Atom$S(atom, tokens[0]);
var vpt=4;
switch (tokens.length) {
case 4:
continue;
case 5:
case 6:
case 8:
case 9:
if (tokens[4].indexOf$S(".") >= 0) {
atom.partialCharge=this.parseFloatStr$S(tokens[4]);
} else {
var charge=this.parseIntStr$S(tokens[4]);
if (charge != -2147483648) atom.formalCharge=charge;
}switch (tokens.length) {
case 5:
continue;
case 6:
atom.radius=this.parseFloatStr$S(tokens[5]);
continue;
case 9:
atom.atomSerial=this.parseIntStr$S(tokens[8]);
}
vpt++;
default:
var vx=this.parseFloatStr$S(tokens[vpt++]);
var vy=this.parseFloatStr$S(tokens[vpt++]);
var vz=this.parseFloatStr$S(tokens[vpt++]);
if (Float.isNaN$F(vx) || Float.isNaN$F(vy) || Float.isNaN$F(vz)  ) continue;
this.asc.addVibrationVector$I$F$F$F(atom.index, vx, vy, vz);
}
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
