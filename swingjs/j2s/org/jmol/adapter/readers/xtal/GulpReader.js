(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'javajs.util.PT','javajs.util.V3','java.util.Hashtable']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GulpReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');
C$.tags=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.tags=Clazz.array(String, -1, ["a", "b", "c", "alpha", "beta", "gamma"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isSlab=false;
this.isPolymer=false;
this.$isPrimitive=false;
this.sep=null;
this.coordinatesArePrimitive=false;
this.atomCharges=null;
this.bTest=false;
this.a=0;
this.b=0;
this.c=0;
this.alpha=0;
this.beta=0;
this.gamma=0;
this.primitiveData=null;
this.totEnergy=null;
this.energyUnits=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sep="-------";
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.$isPrimitive=!this.checkFilterKey$S("CONV");
this.coordinatesArePrimitive=true;
this.setFractionalCoordinates$Z(p$1.readDimensionality.apply(this, []));
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
if (this.atomCharges == null ) return;
var atoms=this.asc.atoms;
var f;
for (var i=this.asc.ac; --i >= 0; ) if ((f=this.atomCharges.get$O(atoms[i].atomName)) != null  || (f=this.atomCharges.get$O(atoms[i].getElementSymbol$())) != null  ) atoms[i].partialCharge=f.floatValue$();

});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.contains$CharSequence("Space group ")) {
p$1.readSpaceGroup.apply(this, []);
return true;
}if (this.isSlab ? this.line.contains$CharSequence("Surface cell parameters") : this.isPolymer ? this.line.contains$CharSequence("Polymer cell parameter") : (this.bTest=this.line.contains$CharSequence("Cartesian lattice vectors")) || this.line.contains$CharSequence("Cell parameters (Angstroms/Degrees)") || this.line.contains$CharSequence("Primitive cell parameters")  ) {
p$1.readCellParameters$Z.apply(this, [this.bTest]);
return true;
}if (this.line.contains$CharSequence("Monopole - monopole (total)")) {
p$1.readEnergy.apply(this, []);
return true;
}if (this.line.contains$CharSequence("Fractional coordinates of asymmetric unit :") || (this.bTest=this.line.contains$CharSequence("Final asymmetric unit coordinates")) || (this.bTest=this.line.contains$CharSequence("Final fractional coordinates ")) || this.line.contains$CharSequence("Mixed fractional/Cartesian coordinates") || this.line.contains$CharSequence("Cartesian coordinates of cluster ") || this.line.contains$CharSequence("Final cartesian coordinates of atoms :") && this.isMolecular   ) {
if (this.doGetModel$I$S(++this.modelNumber, null)) p$1.readAtomicPos$Z.apply(this, [!this.bTest]);
return true;
}if (this.line.contains$CharSequence("Species output for all configurations")) {
p$1.readPartialCharges.apply(this, []);
return true;
}if (!this.doProcessLines) return true;
if (this.line.contains$CharSequence("Final cell parameters and derivatives")) {
p$1.readFinalCell.apply(this, []);
return true;
}return true;
});

Clazz.newMeth(C$, 'readDimensionality', function () {
this.discardLinesUntilContains$S("Dimensionality");
var tokens=this.getTokens$();
switch (this.parseIntStr$S(tokens[2])) {
case 0:
this.isMolecular=true;
this.$isPrimitive=false;
return false;
case 1:
this.isPolymer=true;
this.$isPrimitive=false;
break;
case 2:
this.isSlab=true;
this.$isPrimitive=false;
break;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'readSpaceGroup', function () {
this.sgName=this.line.substring$I(this.line.indexOf$S(":") + 1).trim$();
}, p$1);

Clazz.newMeth(C$, 'parameterIndex$S', function (key) {
for (var i=C$.tags.length; --i >= 0; ) if (C$.tags[i].equals$O(key)) return i;

return -1;
}, 1);

Clazz.newMeth(C$, 'setParameter$S$F', function (key, value) {
switch (C$.parameterIndex$S(key)) {
case 0:
this.a=value;
break;
case 1:
this.b=value;
break;
case 2:
this.c=value;
break;
case 3:
this.alpha=value;
break;
case 4:
this.beta=value;
break;
case 5:
this.gamma=value;
break;
}
}, p$1);

Clazz.newMeth(C$, 'newAtomSet$Z', function (doSetUnitCell) {
this.asc.newAtomSet$();
if (doSetUnitCell) {
p$1.setModelParameters$Z.apply(this, [this.coordinatesArePrimitive]);
if (this.totEnergy != null ) p$1.setEnergy.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'setModelParameters$Z', function (isPrimitive) {
if (this.sgName != null ) this.setSpaceGroupName$S(isPrimitive ? "P1" : this.sgName);
if (isPrimitive && this.primitiveData != null  ) {
this.addExplicitLatticeVector$I$FA$I(0, this.primitiveData, 0);
this.addExplicitLatticeVector$I$FA$I(1, this.primitiveData, 3);
this.addExplicitLatticeVector$I$FA$I(2, this.primitiveData, 6);
} else if (this.a != 0 ) {
if (this.isSlab) {
this.c=-1;
this.beta=this.gamma=90;
} else if (this.isPolymer) {
this.b=this.c=-1;
this.alpha=this.beta=this.gamma=90;
}this.setUnitCell$F$F$F$F$F$F(this.a, this.b, this.c, this.alpha, this.beta, this.gamma);
}}, p$1);

Clazz.newMeth(C$, 'readCellParameters$Z', function (isLatticeVectors) {
if (isLatticeVectors) {
this.rd$();
this.primitiveData=this.fillFloatArray$S$I$FA(null, 0, Clazz.array(Float.TYPE, [9]));
this.a=0;
return;
}var i0=(this.line.indexOf$S("Full cell") < 0 ? 0 : 4);
this.coordinatesArePrimitive=(i0 == 0);
this.rd$();
while (this.rd$() != null  && this.line.contains$CharSequence("=") ){
var tokens=$I$(1).getTokens$S(this.line.replace$C$C("=", " "));
for (var i=i0; i < i0 + 4; i+=2) if (tokens.length > i + 1) p$1.setParameter$S$F.apply(this, [tokens[i], this.parseFloatStr$S(tokens[i + 1])]);

}
}, p$1);

Clazz.newMeth(C$, 'readFinalCell', function () {
this.discardLinesUntilContains$S(this.sep);
var tokens;
while (this.rd$() != null  && (tokens=this.getTokens$()).length >= 2 )p$1.setParameter$S$F.apply(this, [tokens[0], this.parseFloatStr$S(tokens[1])]);

if (this.primitiveData != null ) {
p$1.scalePrimitiveData$I$F.apply(this, [0, this.a]);
p$1.scalePrimitiveData$I$F.apply(this, [3, this.b]);
p$1.scalePrimitiveData$I$F.apply(this, [6, this.c]);
if (!this.coordinatesArePrimitive) while (this.rd$() != null  && this.line.indexOf$S("Final") < 0 )if (this.line.indexOf$S("Non-primitive lattice parameters") > 0) {
this.rd$();
for (var i=0; i < 2; i++) {
tokens=$I$(1).getTokens$S(this.rd$().replace$C$C("=", " "));
p$1.setParameter$S$F.apply(this, [tokens[0], this.parseFloatStr$S(tokens[1])]);
p$1.setParameter$S$F.apply(this, [tokens[2], this.parseFloatStr$S(tokens[3])]);
p$1.setParameter$S$F.apply(this, [tokens[4], this.parseFloatStr$S(tokens[5])]);
}
break;
}
}p$1.setModelParameters$Z.apply(this, [this.coordinatesArePrimitive]);
this.applySymmetryAndSetTrajectory$();
if (this.totEnergy != null ) p$1.setEnergy.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'scalePrimitiveData$I$F', function (i, value) {
var v=$I$(2).new3$F$F$F(this.primitiveData[i], this.primitiveData[i + 1], this.primitiveData[i + 2]);
v.normalize$();
v.scale$F(value);
this.primitiveData[i++]=v.x;
this.primitiveData[i++]=v.y;
this.primitiveData[i++]=v.z;
}, p$1);

Clazz.newMeth(C$, 'applySymmetryAndSetTrajectory$', function () {
if (this.coordinatesArePrimitive && this.iHaveUnitCell && this.doCheckUnitCell && this.primitiveData != null    && !this.$isPrimitive ) {
p$1.setModelParameters$Z.apply(this, [false]);
var symFull=this.symmetry;
p$1.setModelParameters$Z.apply(this, [true]);
var atoms=this.asc.atoms;
var i0=this.asc.getLastAtomSetAtomIndex$();
var i1=this.asc.ac;
for (var i=i0; i < i1; i++) {
var atom=atoms[i];
this.symmetry.toCartesian$javajs_util_T3$Z(atom, true);
symFull.toFractional$javajs_util_T3$Z(atom, true);
if (this.fixJavaFloat) $I$(1).fixPtFloats$javajs_util_T3$F(atom, 100000.0);
}
p$1.setModelParameters$Z.apply(this, [false]);
}this.applySymTrajASCR$();
});

Clazz.newMeth(C$, 'readAtomicPos$Z', function (finalizeSymmetry) {
p$1.newAtomSet$Z.apply(this, [finalizeSymmetry]);
this.discardLinesUntilContains$S(this.sep);
this.discardLinesUntilContains$S(this.sep);
while (this.rd$() != null ){
if (this.line.indexOf$S(this.sep) >= 0 && this.rd$().indexOf$S("Region") < 0 ) break;
if (this.line.indexOf$S("Region") >= 0) {
this.rd$();
continue;
}this.line=this.line.replace$C$C("*", " ");
var tokens=this.getTokens$();
if (tokens[2].equals$O("c")) this.addAtomXYZSymName$SA$I$S$S(tokens, 3, null, tokens[1]);
}
if (finalizeSymmetry) this.applySymmetryAndSetTrajectory$();
}, p$1);

Clazz.newMeth(C$, 'readPartialCharges', function () {
this.atomCharges=Clazz.new_($I$(3));
this.discardLinesUntilContains$S(this.sep);
this.discardLinesUntilContains$S(this.sep);
var tokens;
while ((tokens=$I$(1).getTokens$S(this.rd$())).length > 5){
var species=tokens[0];
var charge=this.atomCharges.get$O(species);
var f=(charge == null  ? 0 : charge.floatValue$());
this.atomCharges.put$TK$TV(species, Float.valueOf$F((f + this.parseFloatStr$S(tokens[4]))));
}
}, p$1);

Clazz.newMeth(C$, 'readEnergy', function () {
if (this.line.indexOf$S("=") < 0) this.discardLinesUntilContains$S("=");
var tokens=$I$(1).getTokens$S(this.line.substring$I(this.line.indexOf$S("=")));
this.totEnergy=Double.valueOf$D(Double.parseDouble$S(tokens[1]));
this.energyUnits=tokens[2];
this.discardLinesUntilContains$S(this.sep);
}, p$1);

Clazz.newMeth(C$, 'setEnergy', function () {
this.asc.setAtomSetEnergy$S$F("" + this.totEnergy.toString(), this.totEnergy.floatValue$());
this.asc.setInfo$S$O("Energy", this.totEnergy);
this.asc.setAtomSetName$S("E = " + this.totEnergy.toString() + " " + this.energyUnits );
this.totEnergy=null;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
