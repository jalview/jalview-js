(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.PT','org.jmol.adapter.smarter.Atom','org.jmol.util.Logger','org.jmol.adapter.smarter.Bond','javajs.util.AU','javajs.util.Lst','org.jmol.adapter.readers.quantum.BasisFunctionReader']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CsfReader", null, 'org.jmol.adapter.readers.quantum.MopacSlaterReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nAtoms=0;
this.strAtomicNumbers="";
this.nVibrations=0;
this.nGaussians=0;
this.nSlaters=0;
this.propertyItemCounts=Clazz.new_($I$(1,1));
this.fieldTypes=Clazz.array(Integer.TYPE, [100]);
},1);

C$.$fields$=[['I',['nAtoms','fieldCount','nVibrations','nGaussians','nSlaters'],'S',['strAtomicNumbers'],'O',['htBonds','java.util.Map','+propertyItemCounts','fieldTypes','int[]','connectors','java.util.Map']]
,['O',['connectorFields','String[]','connectorFieldMap','byte[]','atomFields','String[]','atomFieldMap','byte[]','bondFields','String[]','bondFieldMap','byte[]','vibFields','String[]','vibFieldMap','byte[]','moFields','String[]','moFieldMap','byte[]']]]

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.equals$O("local_transform")) {
p$1.processLocalTransform.apply(this, []);
return true;
}if (this.line.startsWith$S("object_class")) {
if (this.line.equals$O("object_class connector")) {
p$1.processConnectorObject.apply(this, []);
return false;
}if (this.line.equals$O("object_class atom")) {
p$1.processAtomObject.apply(this, []);
return false;
}if (this.line.equals$O("object_class bond")) {
p$1.processBondObject.apply(this, []);
return false;
}if (this.line.equals$O("object_class vibrational_level")) {
p$1.processVibrationObject.apply(this, []);
return false;
}if (this.line.equals$O("object_class mol_orbital")) {
p$1.processMolecularOrbitalObject.apply(this, []);
return false;
}if (this.line.equals$O("object_class sto_basis_fxn")) {
p$1.processBasisObject$S.apply(this, ["sto"]);
return false;
}if (this.line.equals$O("object_class gto_basis_fxn")) {
p$1.processBasisObject$S.apply(this, ["gto"]);
return false;
}}return true;
});

Clazz.newMeth(C$, 'processLocalTransform', function () {
var tokens=$I$(2,"getTokens$S",[this.rd$() + " " + this.rd$() + " " + this.rd$() + " " + this.rd$() ]);
this.setTransform$F$F$F$F$F$F$F$F$F(this.parseFloatStr$S(tokens[0]), this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]), this.parseFloatStr$S(tokens[4]), this.parseFloatStr$S(tokens[5]), this.parseFloatStr$S(tokens[6]), this.parseFloatStr$S(tokens[8]), this.parseFloatStr$S(tokens[9]), this.parseFloatStr$S(tokens[10]));
}, p$1);

Clazz.newMeth(C$, 'getPropertyCount$S', function (what) {
var count=this.propertyItemCounts.get$O(what);
return (what.equals$O("ID") ? 1 : count == null  ? 0 : count.intValue$());
}, p$1);

Clazz.newMeth(C$, 'parseLineParameters$SA$BA', function (fields, fieldMap) {
for (var i=0; i < this.fieldCount; i++) this.fieldTypes[i]=0;

this.fieldCount=-1;
if (this.line == null  || this.line.startsWith$S("property_flags:") ) this.rd$();
if (this.line == null  || this.line.startsWith$S("object_class") ) return this.fieldCount;
var tokens=Clazz.array(String, [0]);
while (this.line != null ){
tokens=this.getTokens$();
if (this.line.indexOf$S("property ") == 0) this.propertyItemCounts.put$O$O(tokens[1], Integer.valueOf$I((tokens[6].equals$O("STRING") ? 1 : this.parseIntStr$S(tokens[5]))));
 else if (this.line.indexOf$S("ID") == 0) break;
this.rd$();
}
for (var ipt=0, fpt=0; ipt < tokens.length; ipt++) {
var field=tokens[ipt];
for (var i=fields.length; --i >= 0; ) if (field.equals$O(fields[i])) {
this.fieldTypes[fpt]=fieldMap[i];
this.fieldCount=fpt + 1;
break;
}
fpt+=p$1.getPropertyCount$S.apply(this, [field]);
}
return this.fieldCount;
}, p$1);

Clazz.newMeth(C$, 'fillCsfArray$S$SA$I$O$Z', function (property, tokens, i0, f, isInteger) {
var n=p$1.getPropertyCount$S.apply(this, [property]);
var ioffset=i0;
for (var i=0; i < n; i++) {
var ipt=ioffset + i;
if (ipt == tokens.length) {
tokens=$I$(2,"getTokens$S",[this.rd$()]);
ioffset-=ipt - i0;
ipt=i0;
}if (isInteger) (f)[i]=this.parseIntStr$S(tokens[ipt]);
 else (f)[i]=this.parseFloatStr$S(tokens[ipt]);
}
}, p$1);

Clazz.newMeth(C$, 'processConnectorObject', function () {
this.connectors=Clazz.new_($I$(1,1));
this.rd$();
p$1.parseLineParameters$SA$BA.apply(this, [C$.connectorFields, C$.connectorFieldMap]);
 out : for (; this.rd$() != null ; ) {
if (this.line.startsWith$S("property_flags:")) break;
var thisAtomID=null;
var thisBondID=null;
var tokens=this.getTokens$();
var field2="";
var isVibration=false;
for (var i=0; i < this.fieldCount; ++i) {
var field=tokens[i];
switch (this.fieldTypes[i]) {
case 1:
if (!field.equals$O("atom")) continue out;
break;
case 3:
field2=field;
if (field.equals$O("sto_basis_fxn")) this.nSlaters++;
 else if (field.equals$O("gto_basis_fxn")) this.nGaussians++;
 else if (field.equals$O("vibrational_level")) isVibration=true;
 else if (!field.equals$O("bond")) continue out;
break;
case 2:
thisAtomID=field;
break;
case 4:
thisBondID=field2 + field;
if (isVibration) this.nVibrations=Math.max(this.nVibrations, this.parseIntStr$S(field));
break;
default:
}
}
if (thisAtomID != null  && thisBondID != null  ) {
if (this.connectors.containsKey$O(thisBondID)) {
var connect=this.connectors.get$O(thisBondID);
connect[1]=thisAtomID;
if (this.htBonds != null ) p$1.setBond$org_jmol_adapter_smarter_Bond$SA.apply(this, [this.htBonds.get$O(thisBondID), connect]);
} else {
var connect=Clazz.array(String, [2]);
connect[0]=thisAtomID;
this.connectors.put$O$O(thisBondID, connect);
}}}
}, p$1);

Clazz.newMeth(C$, 'setBond$org_jmol_adapter_smarter_Bond$SA', function (bond, connect) {
bond.atomIndex1=this.asc.getAtomIndex$S(connect[0]);
bond.atomIndex2=this.asc.getAtomIndex$S(connect[1]);
this.asc.addBond$org_jmol_adapter_smarter_Bond(bond);
}, p$1);

Clazz.newMeth(C$, 'processAtomObject', function () {
this.rd$();
p$1.parseLineParameters$SA$BA.apply(this, [C$.atomFields, C$.atomFieldMap]);
this.nAtoms=0;
for (; this.rd$() != null ; ) {
if (this.line.startsWith$S("property_flags:")) break;
var tokens=this.getTokens$();
var atom=Clazz.new_($I$(3,1));
var field;
for (var i=0; i < this.fieldCount; i++) {
var type=this.fieldTypes[i];
if (type == 0) continue;
if ((field=tokens[i]) == null ) $I$(4,"warn$S",["field == null in " + this.line]);
switch (type) {
case -1:
atom.atomSerial=$I$(2).parseInt$S(field);
break;
case 1:
atom.elementSymbol=field;
atom.atomName=field + atom.atomSerial;
break;
case 2:
this.strAtomicNumbers += field + " ";
break;
case 3:
atom.formalCharge=this.parseIntStr$S(field);
break;
case 5:
atom.partialCharge=this.parseFloatStr$S(field);
break;
case 4:
this.setAtomCoordTokens$org_jmol_adapter_smarter_Atom$SA$I(atom, tokens, i);
i+=2;
break;
}
}
if (Float.isNaN$F(atom.x) || Float.isNaN$F(atom.y) || Float.isNaN$F(atom.z)  ) {
$I$(4).warn$S("atom " + atom.atomName + " has invalid/unknown coordinates" );
} else {
this.nAtoms++;
this.asc.addAtomWithMappedSerialNumber$org_jmol_adapter_smarter_Atom(atom);
}}
}, p$1);

Clazz.newMeth(C$, 'processBondObject', function () {
this.rd$();
p$1.parseLineParameters$SA$BA.apply(this, [C$.bondFields, C$.bondFieldMap]);
for (; this.rd$() != null ; ) {
if (this.line.startsWith$S("property_flags:")) break;
var thisBondID=null;
var tokens=this.getTokens$();
for (var i=0; i < this.fieldCount; ++i) {
var field=tokens[i];
switch (this.fieldTypes[i]) {
case -1:
thisBondID="bond" + field;
break;
case 1:
var order=1;
if (field.equals$O("single")) order=1;
 else if (field.equals$O("double")) order=2;
 else if (field.equals$O("triple")) order=3;
 else $I$(4).warn$S("unknown CSF bond order: " + field);
var bond=Clazz.new_($I$(5,1).c$$I$I$I,[-1, -1, 1]);
bond.order=order;
if (this.connectors == null ) {
if (this.htBonds == null ) this.htBonds=Clazz.new_($I$(1,1));
this.htBonds.put$O$O(thisBondID, bond);
} else {
p$1.setBond$org_jmol_adapter_smarter_Bond$SA.apply(this, [bond, this.connectors.get$O(thisBondID)]);
}break;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'processVibrationObject', function () {
var vibData=Clazz.array(Float.TYPE, [this.nVibrations, this.nAtoms * 3]);
var energies=Clazz.array(String, [this.nVibrations]);
this.rd$();
while (this.line != null  && p$1.parseLineParameters$SA$BA.apply(this, [C$.vibFields, C$.vibFieldMap]) > 0 ){
while (this.rd$() != null  && !this.line.startsWith$S("property_flags:") ){
var tokens=this.getTokens$();
var thisvib=-1;
for (var i=0; i < this.fieldCount; ++i) {
var field=tokens[i];
switch (this.fieldTypes[i]) {
case -1:
thisvib=this.parseIntStr$S(field) - 1;
break;
case 1:
p$1.fillCsfArray$S$SA$I$O$Z.apply(this, ["normalMode", tokens, i, vibData[thisvib], false]);
break;
case 2:
energies[thisvib]=field;
break;
}
}
}
}
for (var i=0; i < this.nVibrations; i++) {
if (!this.doGetVibration$I(++this.vibrationNumber)) continue;
this.asc.cloneAtomSetWithBonds$Z(false);
this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, null, null, energies[i], null);
var ipt=0;
var baseAtom=this.nAtoms * (i + 1);
for (var iAtom=0; iAtom < this.nAtoms; iAtom++) this.asc.addVibrationVector$I$F$F$F(baseAtom + iAtom, vibData[i][ipt++], vibData[i][ipt++], vibData[i][ipt++]);

}
}, p$1);

Clazz.newMeth(C$, 'processMolecularOrbitalObject', function () {
if (this.nSlaters == 0 && this.nGaussians == 0  || !this.doReadMolecularOrbitals ) {
this.rd$();
return;
}this.nOrbitals=(this.nSlaters + this.nGaussians);
$I$(4).info$S("Reading CSF data for " + this.nOrbitals + " molecular orbitals" );
var energy=Clazz.array(Float.TYPE, [this.nOrbitals]);
var occupancy=Clazz.array(Float.TYPE, [this.nOrbitals]);
var list=Clazz.array(Float.TYPE, [this.nOrbitals, this.nOrbitals]);
var listCompressed=null;
var coefIndices=null;
var ipt=0;
var isCompressed=false;
this.rd$();
while (this.line != null  && p$1.parseLineParameters$SA$BA.apply(this, [C$.moFields, C$.moFieldMap]) > 0 )while (this.rd$() != null  && !this.line.startsWith$S("property_flags:") ){
var tokens=this.getTokens$();
for (var i=0; i < this.fieldCount; ++i) {
switch (this.fieldTypes[i]) {
case -1:
ipt=this.parseIntStr$S(tokens[i]) - 1;
break;
case 1:
energy[ipt]=this.parseFloatStr$S(tokens[i]);
break;
case 2:
occupancy[ipt]=this.parseFloatStr$S(tokens[i]);
break;
case 3:
p$1.fillCsfArray$S$SA$I$O$Z.apply(this, ["eig_vec", tokens, i, list[ipt], false]);
break;
case 4:
isCompressed=true;
if (listCompressed == null ) listCompressed=Clazz.array(Float.TYPE, [this.nOrbitals, this.nOrbitals]);
p$1.fillCsfArray$S$SA$I$O$Z.apply(this, ["eig_vec_compressed", tokens, i, listCompressed[ipt], false]);
break;
case 5:
if (coefIndices == null ) coefIndices=Clazz.array(Integer.TYPE, [this.nOrbitals, this.nOrbitals]);
p$1.fillCsfArray$S$SA$I$O$Z.apply(this, ["coef_indices", tokens, i, coefIndices[ipt], true]);
break;
}
}
}

for (var iMo=0; iMo < this.nOrbitals; iMo++) {
if (isCompressed) {
for (var i=0; i < coefIndices[iMo].length; i++) {
var pt=coefIndices[iMo][i] - 1;
if (pt < 0) break;
list[iMo][pt]=listCompressed[iMo][i];
}
}for (var i=0; i < this.nOrbitals; i++) if (Math.abs(list[iMo][i]) < 1.0E-4 ) list[iMo][i]=0;

var mo=Clazz.new_($I$(1,1));
mo.put$O$O("energy", Float.valueOf$F(energy[iMo]));
mo.put$O$O("occupancy", Float.valueOf$F(occupancy[iMo]));
mo.put$O$O("coefficients", list[iMo]);
this.setMO$java_util_Map(mo);
}
this.setMOs$S("eV");
}, p$1);

Clazz.newMeth(C$, 'processBasisObject$S', function (sto_gto) {
var atomNos=$I$(2).getTokens$S(this.strAtomicNumbers);
this.atomicNumbers=Clazz.array(Integer.TYPE, [atomNos.length]);
for (var i=0; i < this.atomicNumbers.length; i++) this.atomicNumbers[i]=this.parseIntStr$S(atomNos[i]);

this.nOrbitals=(this.nSlaters + this.nGaussians);
var isGaussian=(sto_gto.equals$O("gto"));
var zetas=$I$(6).newFloat2$I(this.nOrbitals);
var contractionCoefs=null;
var types=Clazz.array(String, [this.nOrbitals]);
var shells=Clazz.array(Integer.TYPE, [this.nOrbitals]);
var nZetas=0;
this.rd$();
while (this.line != null  && p$1.parseLineParameters$SA$BA.apply(this, [C$.moFields, C$.moFieldMap]) > 0 ){
if (nZetas == 0) nZetas=p$1.getPropertyCount$S.apply(this, [sto_gto + "_exp"]);
var ipt=0;
while (this.rd$() != null  && !this.line.startsWith$S("property_flags:") ){
var tokens=this.getTokens$();
for (var i=0; i < this.fieldCount; ++i) {
var field=tokens[i];
switch (this.fieldTypes[i]) {
case -1:
ipt=this.parseIntStr$S(field) - 1;
break;
case 6:
types[ipt]=field;
break;
case 7:
case 9:
zetas[ipt]=Clazz.array(Float.TYPE, [nZetas]);
p$1.fillCsfArray$S$SA$I$O$Z.apply(this, [sto_gto + "_exp", tokens, i, zetas[ipt], false]);
break;
case 10:
shells[ipt]=this.parseIntStr$S(field);
break;
case 8:
if (contractionCoefs == null ) contractionCoefs=Clazz.array(Float.TYPE, [this.nOrbitals, nZetas]);
p$1.fillCsfArray$S$SA$I$O$Z.apply(this, ["contractions", tokens, i, contractionCoefs[ipt], false]);
}
}
}
}
if (isGaussian) {
var sdata=Clazz.new_($I$(7,1));
var gdata=Clazz.new_($I$(7,1));
var iShell=0;
var gaussianCount=0;
for (var ipt=0; ipt < this.nGaussians; ipt++) {
if (shells[ipt] != iShell) {
iShell=shells[ipt];
var slater=Clazz.array(Integer.TYPE, [4]);
var iAtom=this.asc.getAtomIndex$S(this.connectors.get$O(sto_gto + "_basis_fxn" + (ipt + 1) )[0]);
slater[0]=iAtom + 1;
slater[1]=$I$(8,"getQuantumShellTagID$S",[types[ipt].substring$I$I(0, 1)]);
var nZ=0;
while (++nZ < nZetas && zetas[ipt][nZ] != 0  ){
}
slater[2]=gaussianCount;
slater[3]=nZ;
sdata.addLast$O(slater);
gaussianCount+=nZ;
for (var i=0; i < nZ; i++) gdata.addLast$O(Clazz.array(Float.TYPE, -1, [zetas[ipt][i], contractionCoefs[ipt][i]]));

}}
var garray=$I$(6).newFloat2$I(gaussianCount);
for (var i=0; i < gaussianCount; i++) garray[i]=gdata.get$I(i);

this.moData.put$O$O("shells", sdata);
this.moData.put$O$O("gaussians", garray);
} else {
for (var ipt=0; ipt < this.nSlaters; ipt++) {
var iAtom=this.asc.getAtomIndex$S(this.connectors.get$O(sto_gto + "_basis_fxn" + (ipt + 1) )[0]);
for (var i=0; i < nZetas; i++) {
if (zetas[ipt][i] == 0 ) break;
this.createSphericalSlaterByType$I$I$S$F$F(iAtom, this.atomicNumbers[iAtom], types[ipt], zetas[ipt][i] * (i == 0 ? 1 : -1), contractionCoefs == null  ? 1 : contractionCoefs[ipt][i]);
}
}
this.setSlaters$Z$Z(true, false);
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.connectorFields=Clazz.array(String, -1, ["objCls1", "objID1", "objCls2", "objID2"]);
C$.connectorFieldMap=Clazz.array(Byte.TYPE, -1, [1, 2, 3, 4]);
C$.atomFields=Clazz.array(String, -1, ["ID", "sym", "anum", "chrg", "xyz_coordinates", "pchrg"]);
C$.atomFieldMap=Clazz.array(Byte.TYPE, -1, [-1, 1, 2, 3, 4, 5]);
C$.bondFields=Clazz.array(String, -1, ["ID", "type"]);
C$.bondFieldMap=Clazz.array(Byte.TYPE, -1, [-1, 1]);
C$.vibFields=Clazz.array(String, -1, ["ID", "normalMode", "Energy", "transitionDipole"]);
C$.vibFieldMap=Clazz.array(Byte.TYPE, -1, [-1, 1, 2, 3]);
C$.moFields=Clazz.array(String, -1, ["ID", "eig_val", "mo_occ", "eig_vec", "eig_vec_compressed", "coef_indices", "bfxn_ang", "sto_exp", "contractions", "gto_exp", "shell"]);
C$.moFieldMap=Clazz.array(Byte.TYPE, -1, [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:25 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
