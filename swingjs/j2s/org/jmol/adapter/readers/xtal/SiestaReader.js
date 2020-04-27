(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.PT','org.jmol.adapter.smarter.AtomSetCollectionReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SiestaReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.acfUnits="bohr";
this.STATE_UNKNOWN=0;
this.STATE_INPUT=1;
this.STATE_OUTPUT=2;
this.state=0;
this.latticeConstant=1;
},1);

C$.$fields$=[['F',['acfFactor','latticeConstant'],'I',['noAtoms','STATE_UNKNOWN','STATE_INPUT','STATE_OUTPUT','state'],'S',['acfUnits','latticeUnits'],'O',['tokens','String[]','htSpecies','java.util.Map','unitCellVectors','float[]','+unitCellParamsS']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.doApplySymmetry=true;
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.length$() == 0 || this.line.charAt$I(0) == "#"  || this.line.indexOf$I(" ") < 0 ) return true;
switch (this.state) {
case 0:
if (this.line.indexOf$S("Dump of input data file") >= 0) {
this.state=1;
return true;
}this.tokens=this.getTokens$();
if (p$1.fixToken$I.apply(this, [0]).equals$O("numberofspecies")) {
this.state=1;
return false;
}return true;
case 1:
if (this.line.indexOf$S("End of input data file") >= 0) {
this.state=2;
return true;
}this.tokens=this.getTokens$();
if (this.tokens[0].equals$O("%block")) {
p$1.readBlock$S.apply(this, [p$1.fixToken$I.apply(this, [1])]);
} else {
p$1.readValue$S.apply(this, [p$1.fixToken$I.apply(this, [0])]);
}return true;
}
if (this.line.contains$CharSequence("outcoor: Atomic coordinates")) {
if (this.doGetModel$I$S(++this.modelNumber, null)) p$1.readAtomsCartGeomThenCell.apply(this, []);
return true;
}return true;
});

Clazz.newMeth(C$, 'readValue$S', function (key) {
if (key.equals$O("latticeconstant")) {
p$1.setCell$S.apply(this, ["latticeconstant"]);
} else if (key.equals$O("atomiccoordinatesformat")) {
p$1.readAtomicCoordinatesFormat.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'readBlock$S', function (key) {
if (key.equals$O("latticevectors") || key.equals$O("latticeparameters") ) return p$1.setCell$S.apply(this, [key]);
if (key.equals$O("chemicalspecieslabel")) return p$1.readSpecies.apply(this, []);
if (key.equals$O("atomiccoordinatesandatomicspecies")) {
if (!this.doGetModel$I$S(++this.modelNumber, null)) {
p$1.skipModel.apply(this, []);
return false;
}return p$1.readAtoms.apply(this, []);
}this.discardLinesUntilContains$S("%endblock");
return true;
}, p$1);

Clazz.newMeth(C$, 'readSpecies', function () {
this.htSpecies=Clazz.new_($I$(1,1));
while (this.rdSiesta$().indexOf$S("%") < 0){
this.tokens=this.getTokens$();
this.htSpecies.put$O$O(this.tokens[0], this.tokens);
}
return false;
}, p$1);

Clazz.newMeth(C$, 'fixToken$I', function (i) {
var s=this.tokens[i];
return $I$(2).replaceAllCharacters$S$S$S(this.tokens[i], "_.-", "").toLowerCase$();
}, p$1);

Clazz.newMeth(C$, 'rdSiesta$', function () {
var s=this.rd$();
var pt=s.indexOf$S("#");
return (pt < 0 ? s : s.substring$I(pt)).trim$();
});

Clazz.newMeth(C$, 'getACFValue$F', function (v) {
if (this.acfFactor == 0 ) {
var isScaledCartesian=(this.acfUnits == "scaledcartesian");
if (isScaledCartesian) this.acfUnits=this.latticeUnits;
this.acfUnits=$I$(2).rep$S$S$S(this.acfUnits, "notscaledcartesian", "");
switch ((this.acfUnits.charCodeAt$I(0))) {
default:
case 98:
this.setFractionalCoordinates$Z(isScaledCartesian);
this.acfFactor=1.8897269;
break;
case 109:
this.setFractionalCoordinates$Z(isScaledCartesian);
this.acfFactor=1.0E-10;
break;
case 110:
this.setFractionalCoordinates$Z(isScaledCartesian);
this.acfFactor=0.1;
break;
case 97:
this.setFractionalCoordinates$Z(isScaledCartesian);
this.acfFactor=1;
break;
case 102:
case 115:
this.setFractionalCoordinates$Z(true);
this.acfFactor=1;
break;
}
if (isScaledCartesian) {
this.acfFactor /= this.latticeConstant;
this.setFractionalCoordinates$Z(true);
}}return (this.acfFactor * v);
}, p$1);

Clazz.newMeth(C$, 'readAtomicCoordinatesFormat', function () {
this.acfUnits=this.tokens[1].toLowerCase$().intern$();
}, p$1);

Clazz.newMeth(C$, 'skipModel', function () {
this.discardLinesUntilContains$S("%endblock AtomicCoordinatesAndAtomicSpecies");
}, p$1);

Clazz.newMeth(C$, 'setCell$S', function (key) {
if (key.equals$O("latticevectors")) {
this.unitCellVectors=Clazz.array(Float.TYPE, [9]);
this.fillFloatArray$S$I$FA(null, 0, this.unitCellVectors);
} else if (key.equals$O("latticeconstant")) {
var tokens=this.getTokens$();
this.latticeConstant=this.parseFloatStr$S(tokens[1]);
this.latticeUnits=tokens[2].toLowerCase$();
} else if (key.equals$O("latticeparameters")) {
this.unitCellParamsS=Clazz.array(Float.TYPE, [6]);
this.fillFloatArray$S$I$FA(this.line.substring$I(this.line.indexOf$S("ters") + 4), 0, this.unitCellParamsS);
}return true;
}, p$1);

Clazz.newMeth(C$, 'readAtoms', function () {
p$1.newAtomSet.apply(this, []);
if (this.unitCellVectors != null ) {
this.addExplicitLatticeVector$I$FA$I(0, this.unitCellVectors, 0);
this.addExplicitLatticeVector$I$FA$I(1, this.unitCellVectors, 3);
this.addExplicitLatticeVector$I$FA$I(2, this.unitCellVectors, 6);
} else if (this.unitCellParamsS != null ) {
this.setUnitCell$F$F$F$F$F$F(this.unitCellParamsS[0] * this.latticeConstant, this.unitCellParamsS[1] * this.latticeConstant, this.unitCellParamsS[2] * this.latticeConstant, this.unitCellParamsS[3], this.unitCellParamsS[4], this.unitCellParamsS[5]);
}while (this.rdSiesta$() != null  && this.line.indexOf$S("%endblock Atomic") < 0 ){
var tokens=this.getTokens$();
var species=(this.htSpecies == null  ? Clazz.array(String, -1, [null, null, tokens[4]]) : this.htSpecies.get$O(tokens[3]));
var name=species[2];
var sym=(species[1] == null  ? name : (function(a,f){return f.apply(null,a)})([this.parseIntStr$S(species[1])],$I$(3).getElementSymbol$I));
this.addAtomXYZSymName$SA$I$S$S(tokens, 0, sym, name);
}
this.noAtoms=this.asc.ac;
return true;
}, p$1);

Clazz.newMeth(C$, 'setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F', function (atom, x, y, z) {
C$.superclazz.prototype.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F.apply(this, [atom, p$1.getACFValue$F.apply(this, [x]), p$1.getACFValue$F.apply(this, [y]), p$1.getACFValue$F.apply(this, [z])]);
});

Clazz.newMeth(C$, 'newAtomSet', function () {
this.applySymmetryAndSetTrajectory$();
this.asc.newAtomSet$();
this.setSpaceGroupName$S("P1");
this.setFractionalCoordinates$Z(false);
}, p$1);

Clazz.newMeth(C$, 'readAtomsCartGeomThenCell', function () {
this.readLines$I(1);
p$1.newAtomSet.apply(this, []);
var atom0=this.asc.ac;
for (var i=0; i < this.noAtoms; i++) {
var tokens=this.getTokens$();
var atom=this.asc.addNewAtom$();
atom.atomName=tokens[4];
var x=this.parseFloatStr$S(tokens[0]);
var y=this.parseFloatStr$S(tokens[1]);
var z=this.parseFloatStr$S(tokens[2]);
atom.set$F$F$F(x, y, z);
this.rdSiesta$();
}
this.discardLinesUntilContains$S("outcell: Unit cell vectors");
p$1.setCell$S.apply(this, ["vectors"]);
var atoms=this.asc.atoms;
var ac=this.asc.ac;
for (var i=atom0; i < ac; i++) this.setAtomCoord$org_jmol_adapter_smarter_Atom(atoms[i]);

this.discardLinesUntilContains$S("siesta: E_KS(eV) = ");
var tokens=this.getTokens$();
var energy=Double.valueOf$D(Double.parseDouble$S(tokens[3]));
this.asc.setAtomSetEnergy$S$F("" + energy.toString(), energy.floatValue$());
this.asc.setCurrentModelInfo$S$O("Energy", energy);
this.asc.setInfo$S$O("Energy", energy);
this.asc.setAtomSetName$S("Energy = " + energy.toString() + " eV" );
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
