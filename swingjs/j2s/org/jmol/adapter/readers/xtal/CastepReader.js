(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'javajs.util.V3','javajs.util.PT','org.jmol.util.Logger','org.jmol.adapter.smarter.Atom','org.jmol.util.Escape','org.jmol.util.Tensor','javajs.util.P3','javajs.util.M4','javajs.util.Lst','javajs.util.DF']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CastepReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');
C$.lengthUnitIds=null;
C$.lengthUnitFactors=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.lengthUnitIds=Clazz.array(String, -1, ["bohr", "m", "cm", "nm", "ang", "a0"]);
C$.lengthUnitFactors=Clazz.array(Float.TYPE, -1, [0.5291772, 1.0E10, 1.0E8, 10.0, 1.0, 0.5291772]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tokens=null;
this.isPhonon=false;
this.isTS=false;
this.isOutput=false;
this.isCell=false;
this.a=0;
this.b=0;
this.c=0;
this.alpha=0;
this.beta=0;
this.gamma=0;
this.abc=null;
this.ac=0;
this.atomPts=null;
this.havePhonons=false;
this.lastQPt=null;
this.qpt2=0;
this.desiredQpt=null;
this.desiredQ=null;
this.chargeType=null;
this.isAllQ=false;
this.haveCharges=false;
this.tsType=null;
this.matSupercell=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.abc=Clazz.array($I$(1), [3]);
this.havePhonons=false;
this.chargeType="MULL";
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
if (this.filter != null ) {
this.chargeType=this.getFilter$S("CHARGE=");
if (this.chargeType != null  && this.chargeType.length$() > 4 ) this.chargeType=this.chargeType.substring$I$I(0, 4);
this.filter=this.filter.replace$C$C("(", "{").replace$C$C(")", "}");
this.filter=$I$(2).rep$S$S$S(this.filter, "  ", " ");
this.isAllQ=this.checkFilterKey$S("Q=ALL");
this.tsType=this.getFilter$S("TSTYPE=");
if (!this.isAllQ && this.filter.indexOf$S("{") >= 0 ) p$1.setDesiredQpt$S.apply(this, [this.filter.substring$I(this.filter.indexOf$S("{"))]);
this.filter=$I$(2).rep$S$S$S(this.filter, "-PT", "");
}this.continuing=p$1.readFileData.apply(this, []);
});

Clazz.newMeth(C$, 'setDesiredQpt$S', function (s) {
this.desiredQpt=Clazz.new_($I$(1));
this.desiredQ="";
var num=1;
var denom=1;
var ipt=0;
var xyz=0;
var useSpace=(s.indexOf$I(",") < 0);
for (var i=0; i < s.length$(); i++) {
var c=s.charAt$I(i);
switch (c.$c()) {
case 123:
ipt=i + 1;
num=1;
denom=1;
break;
case 47:
num=this.parseFloatStr$S(s.substring$I$I(ipt, i));
ipt=i + 1;
denom=0;
break;
case 44:
case 32:
case 125:
if (c == "}") this.desiredQ=s.substring$I$I(0, i + 1);
 else if ((c == " ") != useSpace ) break;
if (denom == 0 ) {
denom=this.parseFloatStr$S(s.substring$I$I(ipt, i));
} else {
num=this.parseFloatStr$S(s.substring$I$I(ipt, i));
}num /= denom;
switch (xyz++) {
case 0:
this.desiredQpt.x=num;
break;
case 1:
this.desiredQpt.y=num;
break;
case 2:
this.desiredQpt.z=num;
break;
}
denom=1;
if (c == "}") i=s.length$();
ipt=i + 1;
break;
}
}
$I$(3).info$S("Looking for q-pt=" + this.desiredQpt);
}, p$1);

Clazz.newMeth(C$, 'readFileData', function () {
while (p$1.tokenizeCastepCell.apply(this, []) > 0)if (this.tokens.length >= 2 && this.tokens[0].equalsIgnoreCase$S("%BLOCK") ) {
$I$(3).info$S(this.line);
if (this.tokens[1].equalsIgnoreCase$S("LATTICE_ABC")) {
p$1.readLatticeAbc.apply(this, []);
continue;
}if (this.tokens[1].equalsIgnoreCase$S("LATTICE_CART")) {
p$1.readLatticeCart.apply(this, []);
continue;
}if (this.tokens[1].equalsIgnoreCase$S("POSITIONS_FRAC")) {
this.setFractionalCoordinates$Z(true);
p$1.readPositionsFrac.apply(this, []);
continue;
}if (this.tokens[1].equalsIgnoreCase$S("POSITIONS_ABS")) {
this.setFractionalCoordinates$Z(false);
p$1.readPositionsAbs.apply(this, []);
continue;
}}
if (this.isPhonon || this.isOutput || this.isTS  ) {
if (this.isPhonon) {
this.isTrajectory=(this.desiredVibrationNumber <= 0);
this.asc.allowMultiple=false;
}return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.isOutput) {
if (this.line.contains$CharSequence("Real Lattice(A)")) {
p$1.readOutputUnitCell.apply(this, []);
} else if (this.line.contains$CharSequence("Fractional coordinates of atoms")) {
if (this.doGetModel$I$S(++this.modelNumber, null)) {
p$1.readOutputAtoms.apply(this, []);
}} else if (this.doProcessLines && (this.line.contains$CharSequence("Atomic Populations (Mulliken)") || this.line.contains$CharSequence("Hirshfield Charge (e)") ) ) {
p$1.readOutputCharges.apply(this, []);
} else if (this.doProcessLines && this.line.contains$CharSequence("Born Effective Charges") ) {
p$1.readOutputBornChargeTensors.apply(this, []);
} else if (this.line.contains$CharSequence("Final energy ")) {
p$1.readEnergy$I$S.apply(this, [3, null]);
} else if (this.line.contains$CharSequence("Dispersion corrected final energy*")) {
p$1.readEnergy$I$S.apply(this, [5, null]);
} else if (this.line.contains$CharSequence("Total energy corrected")) {
p$1.readEnergy$I$S.apply(this, [8, null]);
}return true;
}if (this.line.contains$CharSequence("<-- E")) {
p$1.readPhononTrajectories.apply(this, []);
return true;
}if (this.line.indexOf$S("Unit cell vectors") == 1) {
p$1.readPhononUnitCell.apply(this, []);
return true;
}if (this.line.indexOf$S("Fractional Co-ordinates") >= 0) {
p$1.readPhononFractionalCoord.apply(this, []);
return true;
}if (this.line.indexOf$S("q-pt") >= 0) {
p$1.readPhononFrequencies.apply(this, []);
return true;
}return true;
});

Clazz.newMeth(C$, 'readOutputUnitCell', function () {
this.applySymmetryAndSetTrajectory$();
this.asc.newAtomSetClear$Z(false);
this.setFractionalCoordinates$Z(true);
this.abc=this.read3Vectors$Z(false);
p$1.setLatticeVectors.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'readOutputAtoms', function () {
this.readLines$I(2);
while (this.rd$().indexOf$S("xxx") < 0){
var atom=Clazz.new_($I$(4));
this.tokens=this.getTokens$();
atom.elementSymbol=this.tokens[1];
atom.atomName=this.tokens[1] + this.tokens[2];
this.asc.addAtomWithMappedName$org_jmol_adapter_smarter_Atom(atom);
this.setAtomCoordTokens$org_jmol_adapter_smarter_Atom$SA$I(atom, this.tokens, 3);
}
}, p$1);

Clazz.newMeth(C$, 'readEnergy$I$S', function (pt, prefix) {
if (this.isTrajectory) this.applySymmetryAndSetTrajectory$();
this.tokens=this.getTokens$();
try {
var energy=Double.valueOf$D(Double.parseDouble$S(this.tokens[pt]));
this.asc.setAtomSetName$S(prefix + "Energy = " + energy.toString() + " eV" );
this.asc.setAtomSetEnergy$S$F("" + energy.toString(), energy.floatValue$());
this.asc.setCurrentModelInfo$S$O("Energy", energy);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.appendLoadNote$S("CASTEP Energy could not be read: " + this.line);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'readPhononTrajectories', function () {
if (!this.isTS) this.isTrajectory=(this.desiredVibrationNumber <= 0);
if (this.isTrajectory) this.asc.setTrajectory$();
this.doApplySymmetry=true;
while (this.line != null  && this.line.contains$CharSequence("<-- E") ){
var skip=(this.isTS && this.tsType != null   && this.prevline.indexOf$S(this.tsType) < 0 );
if (!skip) {
this.asc.newAtomSetClear$Z(false);
if (this.isTS) p$1.readEnergy$I$S.apply(this, [0, $I$(2).getTokens$S(this.prevline + " -")[0] + " "]);
this.discardLinesUntilContains$S("<-- h");
this.setSpaceGroupName$S("P1");
this.abc=this.read3Vectors$Z(true);
p$1.setLatticeVectors.apply(this, []);
this.setFractionalCoordinates$Z(false);
this.discardLinesUntilContains$S("<-- R");
while (this.line != null  && this.line.contains$CharSequence("<-- R") ){
this.tokens=this.getTokens$();
this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(null, this.tokens, 2, 0.5291772).elementSymbol=this.tokens[0];
this.rd$();
}
this.applySymmetryAndSetTrajectory$();
}this.discardLinesUntilContains$S("<-- E");
}
}, p$1);

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
if (this.isPhonon || this.isOutput || this.isTS  ) {
this.isTrajectory=false;
} else {
this.doApplySymmetry=true;
p$1.setLatticeVectors.apply(this, []);
var nAtoms=this.asc.ac;
for (var i=0; i < nAtoms; i++) this.setAtomCoord$org_jmol_adapter_smarter_Atom(this.asc.atoms[i]);

}this.finalizeReaderASCR$();
});

Clazz.newMeth(C$, 'setLatticeVectors', function () {
if (this.abc[0] == null ) {
this.setUnitCell$F$F$F$F$F$F(this.a, this.b, this.c, this.alpha, this.beta, this.gamma);
return;
}var lv=Clazz.array(Float.TYPE, [3]);
for (var i=0; i < 3; i++) {
lv[0]=this.abc[i].x;
lv[1]=this.abc[i].y;
lv[2]=this.abc[i].z;
this.addExplicitLatticeVector$I$FA$I(i, lv, 0);
}
}, p$1);

Clazz.newMeth(C$, 'readLatticeAbc', function () {
if (p$1.tokenizeCastepCell.apply(this, []) == 0) return;
var factor=p$1.readLengthUnit$S.apply(this, [this.tokens[0]]);
if (this.tokens.length >= 3) {
this.a=this.parseFloatStr$S(this.tokens[0]) * factor;
this.b=this.parseFloatStr$S(this.tokens[1]) * factor;
this.c=this.parseFloatStr$S(this.tokens[2]) * factor;
} else {
$I$(3).warn$S("error reading a,b,c in %BLOCK LATTICE_ABC in CASTEP .cell file");
return;
}if (p$1.tokenizeCastepCell.apply(this, []) == 0) return;
if (this.tokens.length >= 3) {
this.alpha=this.parseFloatStr$S(this.tokens[0]);
this.beta=this.parseFloatStr$S(this.tokens[1]);
this.gamma=this.parseFloatStr$S(this.tokens[2]);
} else {
$I$(3).warn$S("error reading alpha,beta,gamma in %BLOCK LATTICE_ABC in CASTEP .cell file");
}}, p$1);

Clazz.newMeth(C$, 'readLatticeCart', function () {
if (p$1.tokenizeCastepCell.apply(this, []) == 0) return;
var factor=p$1.readLengthUnit$S.apply(this, [this.tokens[0]]);
var x;
var y;
var z;
for (var i=0; i < 3; i++) {
if (this.tokens.length >= 3) {
x=this.parseFloatStr$S(this.tokens[0]) * factor;
y=this.parseFloatStr$S(this.tokens[1]) * factor;
z=this.parseFloatStr$S(this.tokens[2]) * factor;
this.abc[i]=$I$(1).new3$F$F$F(x, y, z);
} else {
$I$(3).warn$S("error reading coordinates of lattice vector " + Integer.toString$I(i + 1) + " in %BLOCK LATTICE_CART in CASTEP .cell file" );
return;
}if (p$1.tokenizeCastepCell.apply(this, []) == 0) return;
}
this.a=this.abc[0].length$();
this.b=this.abc[1].length$();
this.c=this.abc[2].length$();
this.alpha=(this.abc[1].angle$javajs_util_V3(this.abc[2]) * 57.29578);
this.beta=(this.abc[2].angle$javajs_util_V3(this.abc[0]) * 57.29578);
this.gamma=(this.abc[0].angle$javajs_util_V3(this.abc[1]) * 57.29578);
}, p$1);

Clazz.newMeth(C$, 'readPositionsFrac', function () {
if (p$1.tokenizeCastepCell.apply(this, []) == 0) return;
p$1.readAtomData$F.apply(this, [1.0]);
}, p$1);

Clazz.newMeth(C$, 'readPositionsAbs', function () {
if (p$1.tokenizeCastepCell.apply(this, []) == 0) return;
var factor=p$1.readLengthUnit$S.apply(this, [this.tokens[0]]);
p$1.readAtomData$F.apply(this, [factor]);
}, p$1);

Clazz.newMeth(C$, 'readLengthUnit$S', function (units) {
var factor=1.0;
for (var i=0; i < C$.lengthUnitIds.length; i++) if (units.equalsIgnoreCase$S(C$.lengthUnitIds[i])) {
factor=C$.lengthUnitFactors[i];
p$1.tokenizeCastepCell.apply(this, []);
break;
}
return factor;
}, p$1);

Clazz.newMeth(C$, 'readAtomData$F', function (factor) {
do {
if (this.tokens.length >= 4) {
var atom=this.asc.addNewAtom$();
var pt=this.tokens[0].indexOf$S(":");
if (pt >= 0) {
atom.elementSymbol=this.tokens[0].substring$I$I(0, pt);
atom.atomName=this.tokens[0];
} else {
atom.elementSymbol=this.tokens[0];
}atom.set$F$F$F(this.parseFloatStr$S(this.tokens[1]), this.parseFloatStr$S(this.tokens[2]), this.parseFloatStr$S(this.tokens[3]));
atom.scale$F(factor);
} else {
$I$(3).warn$S("cannot read line with CASTEP atom data: " + this.line);
}} while (p$1.tokenizeCastepCell.apply(this, []) > 0 && !this.tokens[0].equalsIgnoreCase$S("%ENDBLOCK") );
}, p$1);

Clazz.newMeth(C$, 'tokenizeCastepCell', function () {
while (this.rd$() != null ){
if ((this.line=this.line.trim$()).length$() == 0 || this.line.startsWith$S("#")  || this.line.startsWith$S("!") ) continue;
if (!this.isCell) {
if (this.line.startsWith$S("%")) {
this.isCell=true;
break;
}if (this.line.startsWith$S("LST")) {
this.isTS=true;
$I$(3).info$S("reading CASTEP .ts file");
return -1;
}if (this.line.startsWith$S("BEGIN header")) {
this.isPhonon=true;
$I$(3).info$S("reading CASTEP .phonon file");
return -1;
}if (this.line.contains$CharSequence("CASTEP")) {
this.isOutput=true;
$I$(3).info$S("reading CASTEP .castep file");
return -1;
}}break;
}
return (this.line == null  ? 0 : (this.tokens=this.getTokens$()).length);
}, p$1);

Clazz.newMeth(C$, 'readOutputBornChargeTensors', function () {
if (this.rd$().indexOf$S("--------") < 0) return;
var atoms=this.asc.atoms;
this.appendLoadNote$S("Ellipsoids: Born Charge Tensors");
while (this.rd$().indexOf$I("=") < 0)p$1.getTensor$org_jmol_adapter_smarter_Atom$S.apply(this, [atoms[p$1.readOutputAtomIndex.apply(this, [])], this.line.substring$I(12)]);

}, p$1);

Clazz.newMeth(C$, 'readOutputAtomIndex', function () {
this.tokens=this.getTokens$();
return this.asc.getAtomIndex$S(this.tokens[0] + this.tokens[1]);
}, p$1);

Clazz.newMeth(C$, 'getTensor$org_jmol_adapter_smarter_Atom$S', function (atom, line0) {
var data=Clazz.array(Float.TYPE, [9]);
var a=Clazz.array(Double.TYPE, [3, 3]);
this.fillFloatArray$S$I$FA(line0, 0, data);
$I$(3).info$S("tensor " + atom.atomName + "\t" + $I$(5).eAF$FA(data) );
for (var p=0, i=0; i < 3; i++) for (var j=0; j < 3; j++) a[i][j]=data[p++];


atom.addTensor$org_jmol_util_Tensor$S$Z((Clazz.new_($I$(6))).setFromAsymmetricTensor$DAA$S$S(a, "charge", atom.atomName + " " + line0 ), null, false);
if (!this.haveCharges) this.appendLoadNote$S("Ellipsoids set \"charge\": Born Effective Charges");
this.haveCharges=true;
}, p$1);

Clazz.newMeth(C$, 'readOutputCharges', function () {
if (this.line.toUpperCase$().indexOf$S(this.chargeType) < 0) return;
$I$(3).info$S("reading charges: " + this.line);
this.readLines$I(2);
var haveSpin=(this.line.indexOf$S("Spin") >= 0);
this.rd$();
var atoms=this.asc.atoms;
var spins=(haveSpin ? Clazz.array(Float.TYPE, [atoms.length]) : null);
if (spins != null ) for (var i=0; i < spins.length; i++) spins[i]=0;

while (this.rd$() != null  && this.line.indexOf$I("=") < 0 ){
var index=p$1.readOutputAtomIndex.apply(this, []);
var charge=this.parseFloatStr$S(this.tokens[haveSpin ? this.tokens.length - 2 : this.tokens.length - 1]);
atoms[index].partialCharge=charge;
if (haveSpin) spins[index]=this.parseFloatStr$S(this.tokens[this.tokens.length - 1]);
}
if (haveSpin) this.asc.setAtomProperties$S$O$I$Z("spin", spins, -1, false);
}, p$1);

Clazz.newMeth(C$, 'readPhononUnitCell', function () {
this.abc=this.read3Vectors$Z(this.line.indexOf$S("bohr") >= 0);
this.setSpaceGroupName$S("P1");
p$1.setLatticeVectors.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'readPhononFractionalCoord', function () {
this.setFractionalCoordinates$Z(true);
while (this.rd$() != null  && this.line.indexOf$S("END") < 0 ){
this.tokens=this.getTokens$();
this.addAtomXYZSymName$SA$I$S$S(this.tokens, 1, this.tokens[4], null).bfactor=this.parseFloatStr$S(this.tokens[5]);
}
this.ac=this.asc.ac;
this.atomPts=Clazz.array($I$(7), [this.ac]);
var atoms=this.asc.atoms;
for (var i=0; i < this.ac; i++) this.atomPts[i]=$I$(7).newP$javajs_util_T3(atoms[i]);

}, p$1);

Clazz.newMeth(C$, 'readPhononFrequencies', function () {
this.tokens=this.getTokens$();
var v=Clazz.new_($I$(1));
var qvec=$I$(1).new3$F$F$F(this.parseFloatStr$S(this.tokens[2]), this.parseFloatStr$S(this.tokens[3]), this.parseFloatStr$S(this.tokens[4]));
var fcoord=p$1.getFractionalCoord$javajs_util_V3.apply(this, [qvec]);
var qtoks="{" + this.tokens[2] + " " + this.tokens[3] + " " + this.tokens[4] + "}" ;
if (fcoord == null ) fcoord=qtoks;
 else fcoord="{" + fcoord + "}" ;
var isOK=this.isAllQ;
var isSecond=(this.tokens[1].equals$O(this.lastQPt));
this.qpt2=(isSecond ? this.qpt2 + 1 : 1);
this.lastQPt=this.tokens[1];
if (!isOK && this.checkFilterKey$S("Q=") ) {
if (this.desiredQpt != null ) {
v.sub2$javajs_util_T3$javajs_util_T3(this.desiredQpt, qvec);
if (v.length$() < 0.001 ) fcoord=this.desiredQ;
}isOK=(this.checkFilterKey$S("Q=" + fcoord + "." + this.qpt2 + ";" ) || this.checkFilterKey$S("Q=" + this.lastQPt + "." + this.qpt2 + ";" ) || !isSecond && this.checkFilterKey$S("Q=" + fcoord + ";" )    || !isSecond && this.checkFilterKey$S("Q=" + this.lastQPt + ";" )  );
if (!isOK) return;
}var isGammaPoint=(qvec.length$() == 0 );
var nx=1;
var ny=1;
var nz=1;
if (this.ptSupercell != null  && !isOK  && !isSecond ) {
this.matSupercell=Clazz.new_($I$(8));
this.matSupercell.m00=this.ptSupercell.x;
this.matSupercell.m11=this.ptSupercell.y;
this.matSupercell.m22=this.ptSupercell.z;
this.matSupercell.m33=1;
$I$(3).info$S("Using supercell \n" + this.matSupercell);
nx=this.ptSupercell.x;
ny=this.ptSupercell.y;
nz=this.ptSupercell.z;
var dx=(qvec.x == 0  ? 1 : qvec.x) * nx;
var dy=(qvec.y == 0  ? 1 : qvec.y) * ny;
var dz=(qvec.z == 0  ? 1 : qvec.z) * nz;
if ((nx != 1  || ny != 1   || nz != 1  ) && isGammaPoint  || !C$.isInt$F(dx)  || !C$.isInt$F(dy)  || !C$.isInt$F(dz) ) return;
isOK=true;
}if (this.ptSupercell == null  || !this.havePhonons ) this.appendLoadNote$S(this.line);
if (!isOK && isSecond ) return;
if (!isOK && (this.ptSupercell == null ) == !isGammaPoint  ) return;
if (this.havePhonons && !this.isAllQ ) return;
this.havePhonons=true;
var qname="q=" + this.lastQPt + " " + fcoord ;
this.applySymmetryAndSetTrajectory$();
if (isGammaPoint) qvec=null;
var freqs=Clazz.new_($I$(9));
while (this.rd$() != null  && this.line.indexOf$S("Phonon") < 0 ){
this.tokens=this.getTokens$();
freqs.addLast$TV(Float.valueOf$F(this.parseFloatStr$S(this.tokens[1])));
}
this.rd$();
var frequencyCount=freqs.size$();
var data=Clazz.array(Float.TYPE, [8]);
var t=Clazz.new_($I$(1));
this.asc.setCollectionName$S(qname);
for (var i=0; i < frequencyCount; i++) {
if (!this.doGetVibration$I(++this.vibrationNumber)) {
for (var j=0; j < this.ac; j++) this.rd$();

continue;
}if (this.desiredVibrationNumber <= 0) {
if (!this.isTrajectory) {
this.cloneLastAtomSet$I$javajs_util_P3A(this.ac, this.atomPts);
this.applySymmetryAndSetTrajectory$();
}}this.symmetry=this.asc.getSymmetry$();
var iatom=this.asc.getLastAtomSetAtomIndex$();
var freq=freqs.get$I(i).floatValue$();
var atoms=this.asc.atoms;
var aCount=this.asc.ac;
for (var j=0; j < this.ac; j++) {
this.fillFloatArray$S$I$FA(null, 0, data);
for (var k=iatom++; k < aCount; k++) if (atoms[k].atomSite == j) {
t.sub2$javajs_util_T3$javajs_util_T3(atoms[k], atoms[atoms[k].atomSite]);
if (this.matSupercell != null ) this.matSupercell.rotTrans$javajs_util_T3(t);
p$1.setPhononVector$FA$org_jmol_adapter_smarter_Atom$javajs_util_V3$javajs_util_V3$javajs_util_V3.apply(this, [data, atoms[k], t, qvec, v]);
this.asc.addVibrationVectorWithSymmetry$I$F$F$F$Z(k, v.x, v.y, v.z, true);
}
}
if (this.isTrajectory) this.asc.setTrajectory$();
this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, null, null, "" + new Float(freq).toString(), null);
this.asc.setAtomSetName$S($I$(10).formatDecimal$F$I(freq, 2) + " cm-1 " + qname );
}
}, p$1);

Clazz.newMeth(C$, 'getFractionalCoord$javajs_util_V3', function (qvec) {
return (this.symmetry != null  && C$.isInt$F(qvec.x * 12)  && C$.isInt$F(qvec.y * 12)  && C$.isInt$F(qvec.z * 12)  ? this.symmetry.fcoord$javajs_util_T3(qvec) : null);
}, p$1);

Clazz.newMeth(C$, 'isInt$F', function (f) {
return (Math.abs(f - Math.round(f)) < 0.001 );
}, 1);

Clazz.newMeth(C$, 'setPhononVector$FA$org_jmol_adapter_smarter_Atom$javajs_util_V3$javajs_util_V3$javajs_util_V3', function (data, atom, rTrans, qvec, v) {
if (qvec == null ) {
v.set$F$F$F(data[2], data[4], data[6]);
} else {
var phase=qvec.dot$javajs_util_T3(rTrans);
var cosph=Math.cos(6.283185307179586 * phase);
var sinph=Math.sin(6.283185307179586 * phase);
v.x=(cosph * data[2] - sinph * data[3]);
v.y=(cosph * data[4] - sinph * data[5]);
v.z=(cosph * data[6] - sinph * data[7]);
}v.scale$F(Math.sqrt(1 / atom.bfactor));
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
