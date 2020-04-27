(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.spartan"),p$1={},I$=[[0,'Boolean','javajs.util.PT','org.jmol.util.Logger','org.jmol.adapter.smarter.AtomSetCollectionReader','org.jmol.adapter.smarter.Bond','javajs.util.Lst','javajs.util.AU','java.util.Hashtable','javajs.util.V3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SpartanArchive");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.modelCount=0;
this.modelAtomCount=0;
this.ac=0;
this.moCount=0;
this.coefCount=0;
this.shellCount=0;
this.gaussianCount=0;
},1);

C$.$fields$=[['Z',['isSMOL'],'I',['modelCount','modelAtomCount','ac','moCount','coefCount','shellCount','gaussianCount'],'S',['bondData','endCheck','line'],'O',['r','org.jmol.adapter.readers.quantum.BasisFunctionReader']]]

Clazz.newMeth(C$, 'c$$org_jmol_adapter_readers_quantum_BasisFunctionReader$S$S$I', function (r, bondData, endCheck, smolAtomCount) {
;C$.$init$.apply(this);
p$1.initialize$org_jmol_adapter_readers_quantum_BasisFunctionReader$S.apply(this, [r, bondData]);
this.modelAtomCount=smolAtomCount;
this.endCheck=endCheck;
this.isSMOL=(endCheck != null );
}, 1);

Clazz.newMeth(C$, 'initialize$org_jmol_adapter_readers_quantum_BasisFunctionReader$S', function (r, bondData) {
this.r=r;
r.moData.put$O$O("isNormalized", $I$(1).TRUE);
r.moData.put$O$O("energyUnits", "");
this.bondData=bondData;
}, p$1);

Clazz.newMeth(C$, 'readArchive$S$Z$I$Z', function (infoLine, haveGeometryLine, ac0, doAddAtoms) {
this.modelAtomCount=p$1.setInfo$S.apply(this, [infoLine]);
this.line=(haveGeometryLine ? "GEOMETRY" : "");
var haveMOData=false;
var skipping=false;
while (this.line != null ){
if (this.line.equals$O("GEOMETRY")) {
if (!this.isSMOL && !this.r.doGetModel$I$S(++this.modelCount, null) ) {
p$1.readLine.apply(this, []);
skipping=true;
continue;
}skipping=false;
p$1.readAtoms$I$Z.apply(this, [ac0, doAddAtoms]);
if (doAddAtoms && this.bondData.length$() > 0 ) this.addBonds$S$I(this.bondData, ac0);
} else if (this.line.indexOf$S("BASIS") == 0) {
if (this.r.doReadMolecularOrbitals) {
this.readBasis$();
} else {
this.r.discardLinesUntilContains$S("ENERGY");
this.line=this.r.line;
continue;
}} else if (this.line.indexOf$S("WAVEFUNC") == 0 || this.line.indexOf$S("BETA") == 0 ) {
if (this.r.doReadMolecularOrbitals && !skipping ) {
this.readMolecularOrbital$();
haveMOData=true;
} else {
this.r.discardLinesUntilContains$S("GEOM");
this.line=this.r.line;
}} else if (this.line.indexOf$S("ENERGY") == 0 && !skipping ) {
p$1.readEnergy.apply(this, []);
} else if (this.line.equals$O("ENDARCHIVE") || this.isSMOL && this.line.indexOf$S(this.endCheck) == 0  ) {
break;
}p$1.readLine.apply(this, []);
}
if (haveMOData) this.r.finalizeMOData$java_util_Map(this.r.moData);
return this.modelAtomCount;
});

Clazz.newMeth(C$, 'readEnergy', function () {
var tokens=(function(a,f){return f.apply(null,a)})([p$1.readLine.apply(this, [])],$I$(2).getTokens$S);
var value=p$1.parseFloat$S.apply(this, [tokens[0]]);
this.r.asc.setCurrentModelInfo$S$O("energy", Float.valueOf$F(value));
if (this.isSMOL) (this.r).setEnergy$F(value);
this.r.asc.setAtomSetEnergy$S$F(tokens[0], value);
}, p$1);

Clazz.newMeth(C$, 'setInfo$S', function (info) {
var tokens=$I$(2).getTokens$S(info);
if ($I$(3).debugging) {
$I$(3).debug$S("reading Spartan archive info :" + info);
}this.modelAtomCount=p$1.parseInt$S.apply(this, [tokens[0]]);
this.coefCount=p$1.parseInt$S.apply(this, [tokens[1]]);
this.shellCount=p$1.parseInt$S.apply(this, [tokens[2]]);
this.gaussianCount=p$1.parseInt$S.apply(this, [tokens[3]]);
this.moCount=p$1.parseInt$S.apply(this, [tokens[6]]);
this.r.calculationType=tokens[9];
var s=this.r.moData.get$O("calculationType");
if (s == null ) s=this.r.calculationType;
 else if (s.indexOf$S(this.r.calculationType) < 0) s=this.r.calculationType + s;
this.r.moData.put$O$O("calculationType", this.r.calculationType=s);
return this.modelAtomCount;
}, p$1);

Clazz.newMeth(C$, 'readAtoms$I$Z', function (ac0, doAddAtoms) {
for (var i=0; i < this.modelAtomCount; i++) {
var tokens=(function(a,f){return f.apply(null,a)})([p$1.readLine.apply(this, [])],$I$(2).getTokens$S);
var atom=(doAddAtoms ? this.r.asc.addNewAtom$() : this.r.asc.atoms[ac0 - this.modelAtomCount + i]);
atom.elementSymbol=(function(a,f){return f.apply(null,a)})([p$1.parseInt$S.apply(this, [tokens[0]])],$I$(4).getElementSymbol$I);
this.r.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(atom, tokens, 1, 0.5291772);
}
if (doAddAtoms && $I$(3).debugging ) {
$I$(3).debug$S(this.r.asc.ac + " atoms read");
}}, p$1);

Clazz.newMeth(C$, 'addBonds$S$I', function (data, ac0) {
var tokens=$I$(2).getTokens$S(data);
for (var i=this.modelAtomCount; i < tokens.length; ) {
var sourceIndex=p$1.parseInt$S.apply(this, [tokens[i++]]) - 1 + ac0;
var targetIndex=p$1.parseInt$S.apply(this, [tokens[i++]]) - 1 + ac0;
var bondOrder=p$1.parseInt$S.apply(this, [tokens[i++]]);
if (bondOrder > 0) {
this.r.asc.addBond$org_jmol_adapter_smarter_Bond(Clazz.new_([sourceIndex, targetIndex, bondOrder < 4 ? bondOrder : bondOrder == 5 ? 515 : 1],$I$(5,1).c$$I$I$I));
}}
var bondCount=this.r.asc.bondCount;
if ($I$(3).debugging) {
$I$(3).debug$S(bondCount + " bonds read");
}});

Clazz.newMeth(C$, 'readBasis$', function () {
var shells=Clazz.new_($I$(6,1));
var gaussians=$I$(7).newFloat2$I(this.gaussianCount);
var typeArray=Clazz.array(Integer.TYPE, [this.gaussianCount]);
for (var i=0; i < this.shellCount; i++) {
var tokens=(function(a,f){return f.apply(null,a)})([p$1.readLine.apply(this, [])],$I$(2).getTokens$S);
var isSpherical=(tokens[4].charAt$I(0) == "1");
var slater=Clazz.array(Integer.TYPE, [4]);
slater[0]=p$1.parseInt$S.apply(this, [tokens[3]]);
var iBasis=p$1.parseInt$S.apply(this, [tokens[0]]);
switch (iBasis) {
case 0:
iBasis=0;
break;
case 1:
iBasis=(isSpherical ? 1 : 2);
break;
case 2:
iBasis=(isSpherical ? 3 : 4);
break;
case 3:
iBasis=(isSpherical ? 5 : 6);
break;
}
slater[1]=iBasis;
slater[2]=p$1.parseInt$S.apply(this, [tokens[2]]);
var gaussianPtr=slater[2] - 1;
var nGaussians=slater[3]=p$1.parseInt$S.apply(this, [tokens[1]]);
for (var j=0; j < nGaussians; j++) typeArray[gaussianPtr + j]=iBasis;

shells.addLast$O(slater);
}
for (var i=0; i < this.gaussianCount; i++) {
var alpha=p$1.parseFloat$S.apply(this, [p$1.readLine.apply(this, [])]);
var tokens=(function(a,f){return f.apply(null,a)})([p$1.readLine.apply(this, [])],$I$(2).getTokens$S);
var nData=tokens.length;
var data=Clazz.array(Float.TYPE, [nData + 1]);
data[0]=alpha;
switch (typeArray[i]) {
case 0:
data[1]=p$1.parseFloat$S.apply(this, [tokens[0]]);
break;
case 1:
data[1]=p$1.parseFloat$S.apply(this, [tokens[1]]);
break;
case 2:
data[1]=p$1.parseFloat$S.apply(this, [tokens[0]]);
data[2]=p$1.parseFloat$S.apply(this, [tokens[1]]);
if (data[1] == 0 ) {
data[1]=data[2];
typeArray[i]=2;
}break;
case 4:
case 3:
data[1]=p$1.parseFloat$S.apply(this, [tokens[2]]);
break;
case 6:
case 5:
data[1]=p$1.parseFloat$S.apply(this, [tokens[3]]);
break;
}
gaussians[i]=data;
}
var nCoeff=0;
for (var i=0; i < this.shellCount; i++) {
var slater=shells.get$I(i);
switch (typeArray[slater[2] - 1]) {
case 0:
nCoeff++;
break;
case 1:
slater[1]=1;
nCoeff+=3;
break;
case 2:
nCoeff+=4;
break;
case 3:
nCoeff+=5;
break;
case 4:
nCoeff+=6;
break;
case 5:
nCoeff+=7;
break;
case 6:
nCoeff+=10;
break;
}
}
var isD5F7=(nCoeff < this.coefCount);
if (isD5F7) for (var i=0; i < this.shellCount; i++) {
var slater=shells.get$I(i);
switch (typeArray[i]) {
case 4:
slater[1]=3;
break;
case 6:
slater[1]=5;
break;
}
}
this.r.moData.put$O$O("shells", shells);
this.r.moData.put$O$O("gaussians", gaussians);
if ($I$(3).debugging) {
(function(a,f){return f.apply(null,a)})([shells.size$() + " slater shells read"],$I$(3).debug$S);
$I$(3).debug$S(gaussians.length + " gaussian primitives read");
}});

Clazz.newMeth(C$, 'readMolecularOrbital$', function () {
var tokenPt=0;
this.r.orbitals=Clazz.new_($I$(6,1));
var tokens=$I$(2).getTokens$S("");
var energies=Clazz.array(Float.TYPE, [this.moCount]);
var coefficients=Clazz.array(Float.TYPE, [this.moCount, this.coefCount]);
for (var i=0; i < this.moCount; i++) {
if (tokenPt == tokens.length) {
tokens=(function(a,f){return f.apply(null,a)})([p$1.readLine.apply(this, [])],$I$(2).getTokens$S);
tokenPt=0;
}energies[i]=p$1.parseFloat$S.apply(this, [tokens[tokenPt++]]);
}
for (var i=0; i < this.moCount; i++) {
for (var j=0; j < this.coefCount; j++) {
if (tokenPt == tokens.length) {
tokens=(function(a,f){return f.apply(null,a)})([p$1.readLine.apply(this, [])],$I$(2).getTokens$S);
tokenPt=0;
}coefficients[i][j]=p$1.parseFloat$S.apply(this, [tokens[tokenPt++]]);
}
}
for (var i=0; i < this.moCount; i++) {
var mo=Clazz.new_($I$(8,1));
mo.put$O$O("energy", Float.valueOf$F(energies[i]));
mo.put$O$O("coefficients", coefficients[i]);
this.r.setMO$java_util_Map(mo);
}
if ($I$(3).debugging) {
(function(a,f){return f.apply(null,a)})([this.r.orbitals.size$() + " molecular orbitals read"],$I$(3).debug$S);
}this.r.moData.put$O$O("mos", this.r.orbitals);
});

Clazz.newMeth(C$, 'readProperties$', function () {
if ($I$(3).debugging) $I$(3).debug$S("Reading PROPARC properties records...");
while (p$1.readLine.apply(this, []) != null  && !this.line.startsWith$S("ENDPROPARC")  && !this.line.startsWith$S("END Directory Entry ") ){
if (this.line.startsWith$S("PROP")) p$1.readProperty.apply(this, []);
 else if (this.line.startsWith$S("DIPOLE")) this.readDipole$();
 else if (this.line.startsWith$S("VIBFREQ")) this.readVibFreqs$();
}
p$1.setVibrationsFromProperties.apply(this, []);
});

Clazz.newMeth(C$, 'readDipole$', function () {
p$1.setDipole$SA.apply(this, [(function(a,f){return f.apply(null,a)})([p$1.readLine.apply(this, [])],$I$(2).getTokens$S)]);
});

Clazz.newMeth(C$, 'setDipole$SA', function (tokens) {
if (tokens.length != 3) return;
var dipole=(function(a,f){return f.apply(null,a)})([p$1.parseFloat$S.apply(this, [tokens[0]]), p$1.parseFloat$S.apply(this, [tokens[1]]), p$1.parseFloat$S.apply(this, [tokens[2]])],$I$(9).new3$F$F$F);
this.r.asc.setCurrentModelInfo$S$O("dipole", dipole);
}, p$1);

Clazz.newMeth(C$, 'readProperty', function () {
var tokens=$I$(2).getTokens$S(this.line);
if (tokens.length == 0) return;
var isString=(tokens[1].startsWith$S("STRING"));
var keyName=tokens[2];
var isDipole=(keyName.equals$O("DIPOLE_VEC"));
var value= Clazz.new_();
var vector=Clazz.new_($I$(6,1));
if (tokens[3].equals$O("=")) {
if (isString) {
value=p$1.getQuotedString$S.apply(this, [tokens[4].substring$I$I(0, 1)]);
} else {
value=Float.valueOf$F(p$1.parseFloat$S.apply(this, [tokens[4]]));
}} else if (tokens[tokens.length - 1].equals$O("BEGIN")) {
var nValues=p$1.parseInt$S.apply(this, [tokens[tokens.length - 2]]);
if (nValues == 0) nValues=1;
var isArray=(tokens.length == 6);
var atomInfo=Clazz.new_($I$(6,1));
var ipt=0;
while (p$1.readLine.apply(this, []) != null  && !this.line.substring$I$I(0, 3).equals$O("END") ){
if (isString) {
value=p$1.getQuotedString$S.apply(this, ["\""]);
vector.addLast$O(value);
} else {
var tokens2=$I$(2).getTokens$S(this.line);
if (isDipole) p$1.setDipole$SA.apply(this, [tokens2]);
for (var i=0; i < tokens2.length; i++, ipt++) {
if (isArray) {
atomInfo.addLast$O(Float.valueOf$F(p$1.parseFloat$S.apply(this, [tokens2[i]])));
if ((ipt + 1) % nValues == 0) {
vector.addLast$O(atomInfo);
atomInfo=Clazz.new_($I$(6,1));
}} else {
value=Float.valueOf$F(p$1.parseFloat$S.apply(this, [tokens2[i]]));
vector.addLast$O(value);
}}
}}
value=null;
} else {
if ($I$(3).debugging) {
$I$(3).debug$S(" Skipping property line " + this.line);
}}if (value != null ) this.r.asc.setInfo$S$O(keyName, value);
if (vector.size$() != 0) this.r.asc.setInfo$S$O(keyName, vector);
}, p$1);

Clazz.newMeth(C$, 'readVibFreqs$', function () {
p$1.readLine.apply(this, []);
var label="";
var frequencyCount=p$1.parseInt$S.apply(this, [this.line]);
var vibrations=Clazz.new_($I$(6,1));
var freqs=Clazz.new_($I$(6,1));
if ($I$(3).debugging) {
(function(a,f){return f.apply(null,a)})(["reading VIBFREQ vibration records: frequencyCount = " + frequencyCount],$I$(3).debug$S);
}var ignore=Clazz.array(Boolean.TYPE, [frequencyCount]);
for (var i=0; i < frequencyCount; ++i) {
var ac0=this.r.asc.ac;
ignore[i]=!this.r.doGetVibration$I(++this.r.vibrationNumber);
if (!ignore[i] && this.r.desiredVibrationNumber <= 0 ) {
this.r.asc.cloneLastAtomSet$();
this.addBonds$S$I(this.bondData, ac0);
}p$1.readLine.apply(this, []);
var info=Clazz.new_($I$(8,1));
var freq=p$1.parseFloat$S.apply(this, [this.line]);
info.put$O$O("freq", Float.valueOf$F(freq));
if (this.line.length$() > 15 && !(label=this.line.substring$I$I(15, this.line.length$())).equals$O("???") ) info.put$O$O("label", label);
freqs.addLast$O(info);
if (!ignore[i]) {
this.r.asc.setAtomSetFrequency$I$S$S$S$S(this.r.vibrationNumber, null, label, "" + new Float(freq).toString(), null);
}}
this.r.asc.setInfo$S$O("VibFreqs", freqs);
var ac=this.r.asc.getAtomSetAtomCount$I(0);
var vib=Clazz.new_($I$(6,1));
var vibatom=Clazz.new_($I$(6,1));
var ifreq=0;
var iatom=ac;
var nValues=3;
var atomInfo=Clazz.array(Float.TYPE, [3]);
while (p$1.readLine.apply(this, []) != null ){
var tokens2=$I$(2).getTokens$S(this.line);
for (var i=0; i < tokens2.length; i++) {
var f=p$1.parseFloat$S.apply(this, [tokens2[i]]);
atomInfo[i % nValues]=f;
vibatom.addLast$O(Float.valueOf$F(f));
if ((i + 1) % nValues == 0) {
if (!ignore[ifreq]) {
this.r.asc.addVibrationVector$I$F$F$F(iatom, atomInfo[0], atomInfo[1], atomInfo[2]);
vib.addLast$O(vibatom);
vibatom=Clazz.new_($I$(6,1));
}++iatom;
}}
if (iatom % ac == 0) {
if (!ignore[ifreq]) {
vibrations.addLast$O(vib);
}vib=Clazz.new_($I$(6,1));
if (++ifreq == frequencyCount) {
break;
}}}
this.r.asc.setInfo$S$O("vibration", vibrations);
});

Clazz.newMeth(C$, 'setVibrationsFromProperties', function () {
var freq_modes=this.r.asc.atomSetInfo.get$O("FREQ_MODES");
if (freq_modes == null ) {
return;
}var freq_lab=this.r.asc.atomSetInfo.get$O("FREQ_LAB");
var freq_val=this.r.asc.atomSetInfo.get$O("FREQ_VAL");
var frequencyCount=freq_val.size$();
var vibrations=Clazz.new_($I$(6,1));
var freqs=Clazz.new_($I$(6,1));
if ($I$(3).debugging) {
(function(a,f){return f.apply(null,a)})(["reading PROP VALUE:VIB FREQ_MODE vibration records: frequencyCount = " + frequencyCount],$I$(3).debug$S);
}var v;
for (var i=0; i < frequencyCount; ++i) {
var ac0=this.r.asc.ac;
this.r.asc.cloneLastAtomSet$();
this.addBonds$S$I(this.bondData, ac0);
var info=Clazz.new_($I$(8,1));
info.put$O$O("freq", (v=freq_val.get$I(i)));
var freq=v.floatValue$();
var label=freq_lab.get$I(i);
if (!label.equals$O("???")) {
info.put$O$O("label", label);
}freqs.addLast$O(info);
this.r.asc.setAtomSetName$S(label + " " + new Float(freq).toString() + " cm^-1" );
this.r.asc.setAtomSetModelProperty$S$S("Frequency", new Float(freq).toString() + " cm^-1");
this.r.asc.setAtomSetModelProperty$S$S(".PATH", "Frequencies");
}
this.r.asc.setInfo$S$O("VibFreqs", freqs);
var ac=this.r.asc.getAtomSetAtomCount$I(0);
var iatom=ac;
for (var i=0; i < frequencyCount; i++) {
if (!this.r.doGetVibration$I(i + 1)) continue;
var ipt=0;
var vib=Clazz.new_($I$(6,1));
var mode=freq_modes.get$I(i);
for (var ia=0; ia < ac; ia++, iatom++) {
var vibatom=Clazz.new_($I$(6,1));
var vx=(v=mode.get$I(ipt++)).floatValue$();
vibatom.addLast$O(v);
var vy=(v=mode.get$I(ipt++)).floatValue$();
vibatom.addLast$O(v);
var vz=(v=mode.get$I(ipt++)).floatValue$();
vibatom.addLast$O(v);
this.r.asc.addVibrationVector$I$F$F$F(iatom, vx, vy, vz);
vib.addLast$O(vibatom);
}
vibrations.addLast$O(vib);
}
this.r.asc.setInfo$S$O("vibration", vibrations);
}, p$1);

Clazz.newMeth(C$, 'getQuotedString$S', function (strQuote) {
var i=this.line.indexOf$S(strQuote);
var j=this.line.lastIndexOf$S(strQuote);
return (j == i ? "" : this.line.substring$I$I(i + 1, j));
}, p$1);

Clazz.newMeth(C$, 'parseInt$S', function (info) {
return this.r.parseIntStr$S(info);
}, p$1);

Clazz.newMeth(C$, 'parseFloat$S', function (info) {
return this.r.parseFloatStr$S(info);
}, p$1);

Clazz.newMeth(C$, 'readLine', function () {
return (this.line=this.r.rd$());
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
