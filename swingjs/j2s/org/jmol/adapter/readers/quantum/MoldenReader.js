(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'javajs.util.BS','org.jmol.util.Logger','javajs.util.PT','javajs.util.Lst','org.jmol.adapter.readers.quantum.BasisFunctionReader','javajs.util.AU','java.util.Hashtable','java.util.Arrays',['org.jmol.adapter.readers.quantum.BasisFunctionReader','.MOEnergySorter']]],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MoldenReader", null, 'org.jmol.adapter.readers.quantum.MopacSlaterReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.doSort=true;
this.orbitalType="";
this.bsAtomOK=Clazz.new_($I$(1,1));
this.bsBadIndex=Clazz.new_($I$(1,1));
this.haveEnergy=true;
},1);

C$.$fields$=[['Z',['loadGeometries','loadVibrations','vibOnly','optOnly','doSort','haveEnergy'],'I',['modelAtomCount'],'S',['orbitalType'],'O',['bsAtomOK','javajs.util.BS','+bsBadIndex','nSPDF','int[]']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.vibOnly=this.checkFilterKey$S("VIBONLY");
this.optOnly=this.checkFilterKey$S("OPTONLY");
this.doSort=!this.checkFilterKey$S("NOSORT");
this.loadGeometries=!this.vibOnly && this.desiredVibrationNumber < 0  && !this.checkFilterKey$S("NOOPT") ;
this.loadVibrations=!this.optOnly && this.desiredModelNumber < 0  && !this.checkFilterKey$S("NOVIB") ;
if (this.checkFilterKey$S("ALPHA")) this.filter="alpha";
 else if (this.checkFilterKey$S("BETA")) this.filter="beta";
 else this.filter=this.getFilter$S("SYM=");
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (!this.line.contains$CharSequence("[")) return true;
this.line=this.line.toUpperCase$().trim$();
if (!this.line.startsWith$S("[")) return true;
$I$(2).info$S(this.line);
if (this.line.indexOf$S("[ATOMS]") == 0) {
p$1.readAtoms.apply(this, []);
this.modelAtomCount=this.asc.getAtomSetAtomCount$I(0);
if (this.asc.atomSetCount == 1 && this.moData != null  ) this.finalizeMOData$java_util_Map(this.moData);
return false;
}if (this.line.indexOf$S("[GTO]") == 0) return p$1.readGaussianBasis.apply(this, []);
if (this.line.indexOf$S("[STO]") == 0) return this.readSlaterBasis$();
if (this.line.indexOf$S("[MO]") == 0) return (!this.doReadMolecularOrbitals || p$1.readMolecularOrbitals.apply(this, []) );
if (this.line.indexOf$S("[FREQ]") == 0) return (!this.loadVibrations || p$1.readFreqsAndModes.apply(this, []) );
if (this.line.indexOf$S("[GEOCONV]") == 0) return (!this.loadGeometries || p$1.readGeometryOptimization.apply(this, []) );
if (p$1.checkOrbitalType$S.apply(this, [this.line])) return true;
if (p$1.checkSymmetry.apply(this, [])) return false;
return true;
});

Clazz.newMeth(C$, 'checkSymmetry', function () {
if (this.line.startsWith$S("[SPACEGROUP]")) {
this.setSpaceGroupName$S(this.rd$());
this.rd$();
return true;
}if (this.line.startsWith$S("[OPERATORS]")) {
while (this.rd$() != null  && this.line.indexOf$S("[") < 0 )if (this.line.length$() > 0) {
$I$(2).info$S("adding operator " + this.line);
this.setSymmetryOperator$S(this.line);
}
return true;
}if (this.line.startsWith$S("[CELL]")) {
this.rd$();
$I$(2).info$S("setting cell dimensions " + this.line);
this.next[0]=0;
for (var i=0; i < 6; i++) this.setUnitCellItem$I$F(i, this.parseFloat$());

this.rd$();
return true;
}if (this.line.startsWith$S("[CELLAXES]")) {
var f=Clazz.array(Float.TYPE, [9]);
this.fillFloatArray$S$I$FA(null, 0, f);
this.addExplicitLatticeVector$I$FA$I(0, f, 0);
this.addExplicitLatticeVector$I$FA$I(1, f, 3);
this.addExplicitLatticeVector$I$FA$I(2, f, 6);
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
if (!this.bsBadIndex.isEmpty$()) try {
var ilast=0;
var atoms=this.asc.atoms;
var nAtoms=this.asc.ac;
this.bsAtomOK.set$I(nAtoms);
var n=this.shells.size$();
for (var i=0; i < n; i++) {
var iatom=this.shells.get$I(i)[0];
if (iatom != 2147483647) {
ilast=atoms[iatom - 1].elementNumber;
continue;
}for (var j=this.bsAtomOK.nextClearBit$I(0); j >= 0; j=this.bsAtomOK.nextClearBit$I(j + 1)) {
if (atoms[j].elementNumber == ilast) {
this.shells.get$I(i)[0]=j + 1;
$I$(2,"info$S",["MoldenReader assigning shells starting with " + i + " for ** to atom " + (j + 1) + " z " + ilast ]);
for (; ++i < n && !this.bsBadIndex.get$I(i)  && this.shells.get$I(i)[0] == 2147483647 ; ) this.shells.get$I(i)[0]=j + 1;

i--;
this.bsAtomOK.set$I(j);
break;
}}
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(2).error$S("Molden reader could not assign shells -- abandoning MOs");
this.asc.setCurrentModelInfo$S$O("moData", null);
} else {
throw e;
}
}
this.finalizeReaderASCR$();
});

Clazz.newMeth(C$, 'readAtoms', function () {
var coordUnit=$I$(3,"getTokens$S",[this.line.replace$C$C("]", " ")])[1];
var isFractional=(coordUnit.indexOf$S("FRACTIONAL") >= 0);
var isAU=(!isFractional && coordUnit.indexOf$S("ANGS") < 0 );
if (isAU && coordUnit.indexOf$S("AU") < 0 ) $I$(2).error$S("Molden atom line does not indicate units ANGS, AU, or FRACTIONAL -- AU assumed: " + this.line);
this.setFractionalCoordinates$Z(isFractional);
var f=(isAU ? 0.5291772 : 1);
while (this.rd$() != null  && this.line.indexOf$I("[") < 0 ){
var tokens=this.getTokens$();
if (tokens.length < 6) continue;
var atom=this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(null, tokens, 3, f);
atom.atomName=tokens[0];
atom.elementNumber=($s$[0] = this.parseIntStr$S(tokens[2]), $s$[0]);
}
}, p$1);

Clazz.newMeth(C$, 'readSlaterBasis$', function () {
this.nCoef=0;
while (this.rd$() != null  && this.line.indexOf$S("[") < 0 ){
var tokens=this.getTokens$();
if (tokens.length < 7) continue;
this.addSlater$I$I$I$I$I$D$F(this.parseIntStr$S(tokens[0]), this.parseIntStr$S(tokens[1]), this.parseIntStr$S(tokens[2]), this.parseIntStr$S(tokens[3]), this.parseIntStr$S(tokens[4]), this.parseFloatStr$S(tokens[5]), this.parseFloatStr$S(tokens[6]));
this.nCoef++;
}
this.setSlaters$Z$Z(false, false);
return false;
});

Clazz.newMeth(C$, 'readGaussianBasis', function () {
this.shells=Clazz.new_($I$(4,1));
var gdata=Clazz.new_($I$(4,1));
var atomIndex=0;
var gaussianPtr=0;
this.nCoef=0;
this.nSPDF=Clazz.array(Integer.TYPE, [12]);
this.discardLinesUntilNonBlank$();
while (this.line != null  && !((this.line=this.line.trim$()).length$() == 0 || this.line.charAt$I(0) == "[" ) ){
var tokens=this.getTokens$();
atomIndex=this.parseIntStr$S(tokens[0]) - 1;
if (atomIndex == 2147483647) {
this.bsBadIndex.set$I(this.shells.size$());
} else {
this.bsAtomOK.set$I(atomIndex);
}while (this.rd$() != null  && (this.line=this.line.trim$()).length$() > 0  && this.line.charAt$I(0) != "[" ){
tokens=this.getTokens$();
var shellLabel=tokens[0].toUpperCase$();
var type=$I$(5).getQuantumShellTagID$S(shellLabel);
var nPrimitives=this.parseIntStr$S(tokens[1]);
var slater=Clazz.array(Integer.TYPE, [4]);
this.nSPDF[type]++;
slater[0]=atomIndex + 1;
slater[1]=type;
slater[2]=gaussianPtr + 1;
slater[3]=nPrimitives;
var n=this.getDfCoefMaps$()[type].length;
this.nCoef+=n;
for (var ip=nPrimitives; --ip >= 0; ) {
var primTokens=$I$(3,"getTokens$S",[this.rd$()]);
var nTokens=primTokens.length;
var orbData=Clazz.array(Float.TYPE, [nTokens]);
for (var d=0; d < nTokens; d++) orbData[d]=this.parseFloatStr$S(primTokens[d]);

gdata.addLast$O(orbData);
gaussianPtr++;
}
this.shells.addLast$O(slater);
}
if (this.line.length$() > 0 && this.line.charAt$I(0) == "[" ) break;
this.rd$();
}
var garray=$I$(6).newFloat2$I(gaussianPtr);
for (var i=0; i < gaussianPtr; i++) {
garray[i]=gdata.get$I(i);
}
this.moData.put$O$O("shells", this.shells);
this.moData.put$O$O("gaussians", garray);
$I$(2,"info$S",[this.shells.size$() + " slater shells read"]);
$I$(2).info$S(garray.length + " gaussian primitives read");
$I$(2).info$S(this.nCoef + " MO coefficients expected for orbital type " + this.orbitalType );
this.asc.setCurrentModelInfo$S$O("moData", this.moData);
return false;
}, p$1);

Clazz.newMeth(C$, 'readMolecularOrbitals', function () {
while (p$1.checkOrbitalType$S.apply(this, [this.rd$()])){
}
p$1.fixOrbitalType.apply(this, []);
var tokens=p$1.getMoTokens$S.apply(this, [this.line]);
while (tokens != null  && tokens.length > 0  && tokens[0].indexOf$I("[") < 0 ){
var mo=Clazz.new_($I$(7,1));
var data=Clazz.new_($I$(4,1));
var energy=NaN;
var occupancy=NaN;
var symmetry=null;
var key;
while (this.parseIntStr$S(key=tokens[0]) == -2147483648){
if (key.startsWith$S("Ene")) {
energy=this.parseFloatStr$S(tokens[1]);
} else if (key.startsWith$S("Occup")) {
occupancy=this.parseFloatStr$S(tokens[1]);
} else if (key.startsWith$S("Sym")) {
symmetry=tokens[1];
} else if (key.startsWith$S("Spin")) {
this.alphaBeta=tokens[1].toLowerCase$();
}tokens=p$1.getMoTokens$S.apply(this, [null]);
}
var pt=0;
var offset=0;
while (tokens != null  && tokens.length > 0  && this.parseIntStr$S(tokens[0]) != -2147483648 ){
if (tokens.length != 2) throw Clazz.new_(Clazz.load('Exception').c$$S,["invalid MO coefficient specification"]);
var i=this.parseIntStr$S(tokens[0]);
if (pt == 0 && i == this.nCoef + 1  && "beta".equals$O(this.alphaBeta) ) offset=-this.nCoef;
i+=offset;
while (i > ++pt)data.addLast$O("0");

data.addLast$O(tokens[1]);
tokens=p$1.getMoTokens$S.apply(this, [null]);
}
if (this.orbitalType.equals$O("") && data.size$() < this.nCoef ) {
$I$(2).info$S("too few orbital coefficients for 6D");
p$1.checkOrbitalType$S.apply(this, ["[5D]"]);
}while (++pt <= this.nCoef){
data.addLast$O("0");
}
var coefs=Clazz.array(Float.TYPE, [this.nCoef]);
for (var i=data.size$(); --i >= 0; ) coefs[i]=this.parseFloatStr$S(data.get$I(i));

var l=this.line;
this.line="" + symmetry;
if (this.filterMO$()) {
mo.put$O$O("coefficients", coefs);
if (Float.isNaN$F(energy)) {
this.haveEnergy=false;
} else {
mo.put$O$O("energy", Float.valueOf$F(energy));
}if (!Float.isNaN$F(occupancy)) mo.put$O$O("occupancy", Float.valueOf$F(occupancy));
if (symmetry != null ) mo.put$O$O("symmetry", symmetry);
if (this.alphaBeta.length$() > 0) mo.put$O$O("type", this.alphaBeta);
this.setMO$java_util_Map(mo);
if (this.debugging) {
$I$(2,"debug$S",[coefs.length + " coefficients in MO " + this.orbitals.size$() ]);
}}this.line=l;
}
if (this.debugging) $I$(2,"debug$S",["read " + this.orbitals.size$() + " MOs" ]);
this.setMOs$S("eV");
if (this.haveEnergy && this.doSort ) p$1.sortMOs.apply(this, []);
return false;
}, p$1);

Clazz.newMeth(C$, 'sortMOs', function () {
var list=this.orbitals.toArray$OA(Clazz.array(java.lang.Object, [this.orbitals.size$()]));
$I$(8,"sort$OA$java_util_Comparator",[list, Clazz.new_($I$(9,1),[this, null])]);
this.orbitals.clear$();
for (var i=0; i < list.length; i++) this.orbitals.addLast$O(list[i]);

}, p$1);

Clazz.newMeth(C$, 'getMoTokens$S', function (line) {
return (line == null  && (line=this.rd$()) == null   ? null : $I$(3,"getTokens$S",[line.replace$C$C("=", " ")]));
}, p$1);

Clazz.newMeth(C$, 'checkOrbitalType$S', function (line) {
if (line.length$() > 3 && "5D 6D 7F 10 9G 15 11 21".indexOf$S(line.substring$I$I(1, 3)) >= 0 ) {
if (this.orbitalType.indexOf$S(line) >= 0) return true;
if (line.indexOf$S("G") >= 0 || line.indexOf$S("H") >= 0  || line.indexOf$S("I") >= 0 ) this.appendLoadNote$S("Unsupported orbital type ignored: " + line);
this.orbitalType += line;
$I$(2).info$S("Orbital type set to " + this.orbitalType);
p$1.fixOrbitalType.apply(this, []);
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'fixOrbitalType', function () {
if (this.orbitalType.contains$CharSequence("5D")) {
this.fixSlaterTypes$I$I(4, 3);
this.fixSlaterTypes$I$I(6, 5);
this.fixSlaterTypes$I$I(8, 7);
this.fixSlaterTypes$I$I(10, 9);
}if (this.orbitalType.contains$CharSequence("10F")) {
this.fixSlaterTypes$I$I(5, 6);
this.fixSlaterTypes$I$I(7, 8);
this.fixSlaterTypes$I$I(9, 10);
}if (this.orbitalType.contains$CharSequence("15G")) {
this.fixSlaterTypes$I$I(7, 8);
this.fixSlaterTypes$I$I(9, 10);
}}, p$1);

Clazz.newMeth(C$, 'readFreqsAndModes', function () {
var tokens;
var frequencies=Clazz.new_($I$(4,1));
while (this.rd$() != null  && this.line.indexOf$I("[") < 0 ){
var f=this.getTokens$()[0];
frequencies.addLast$O(f);
}
var nFreqs=frequencies.size$();
p$1.skipTo$S.apply(this, ["[FR-COORD]"]);
if (!this.vibOnly) p$1.readAtomSet$S$Z$Z.apply(this, ["frequency base geometry", true, true]);
p$1.skipTo$S.apply(this, ["[FR-NORM-COORD]"]);
var haveVib=false;
for (var nFreq=0; nFreq < nFreqs; nFreq++) {
p$1.skipTo$S.apply(this, ["vibration"]);
this.doGetVibration$I(++this.vibrationNumber);
if (haveVib) this.asc.cloneLastAtomSet$();
haveVib=true;
this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, null, null, "" + Double.valueOf$S(frequencies.get$I(nFreq)).toString(), null);
var i0=this.asc.getLastAtomSetAtomIndex$();
for (var i=0; i < this.modelAtomCount; i++) {
tokens=$I$(3,"getTokens$S",[this.rd$()]);
this.asc.addVibrationVector$I$F$F$F(i + i0, this.parseFloatStr$S(tokens[0]) * 0.5291772, this.parseFloatStr$S(tokens[1]) * 0.5291772, this.parseFloatStr$S(tokens[2]) * 0.5291772);
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'readGeometryOptimization', function () {
var energies=Clazz.new_($I$(4,1));
this.rd$();
while (this.rd$() != null  && this.line.indexOf$S("force") < 0 )energies.addLast$O("" + Double.valueOf$S(this.line.trim$()).toString());

p$1.skipTo$S.apply(this, ["[GEOMETRIES] XYZ"]);
var nGeom=energies.size$();
var firstModel=(this.optOnly || this.desiredModelNumber >= 0  ? 0 : 1);
this.modelNumber=firstModel;
var haveModel=false;
if (this.desiredModelNumber == 0 || this.desiredModelNumber == nGeom ) this.desiredModelNumber=nGeom;
 else if (this.asc.atomSetCount > 0) this.finalizeMOData$java_util_Map(this.moData);
for (var i=0; i < nGeom; i++) {
this.readLines$I(2);
if (this.doGetModel$I$S(++this.modelNumber, null)) {
p$1.readAtomSet$S$Z$Z.apply(this, ["Step " + (this.modelNumber - firstModel) + "/" + nGeom + ": " + energies.get$I(i) , false, !this.optOnly || haveModel ]);
haveModel=true;
} else {
this.readLines$I(this.modelAtomCount);
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'skipTo$S', function (key) {
key=key.toUpperCase$();
if (this.line == null  || !this.line.toUpperCase$().contains$CharSequence(key) ) while (this.rd$() != null  && this.line.toUpperCase$().indexOf$S(key) < 0 ){
}
}, p$1);

Clazz.newMeth(C$, 'readAtomSet$S$Z$Z', function (atomSetName, isBohr, asClone) {
if (asClone && this.desiredModelNumber < 0 ) this.asc.cloneFirstAtomSet$I(0);
var f=(isBohr ? 0.5291772 : 1);
this.asc.setAtomSetName$S(atomSetName);
if (this.asc.ac == 0) {
while (this.rd$() != null  && this.line.indexOf$I("[") < 0 ){
var tokens=this.getTokens$();
if (tokens.length == 4) this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(null, tokens, 1, f).atomName=tokens[0];
}
this.modelAtomCount=this.asc.getLastAtomSetAtomCount$();
return;
}var atoms=this.asc.atoms;
var i0=this.asc.getLastAtomSetAtomIndex$();
for (var i=0; i < this.modelAtomCount; i++) this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(atoms[i + i0], $I$(3,"getTokens$S",[this.rd$()]), 1, f);

}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:25 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
