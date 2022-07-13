(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.PT','org.jmol.adapter.smarter.SmarterJmolAdapter','javajs.util.Lst','javajs.util.BS','org.jmol.api.JmolAdapter','org.jmol.util.Elements','org.jmol.adapter.readers.quantum.BasisFunctionReader','javajs.util.AU','org.jmol.util.Logger']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NWChemReader", null, 'org.jmol.adapter.readers.quantum.MOReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.taskNumber=1;
this.equivalentAtomSets=0;
this.energyKey="";
this.energyValue="";
this.htMOs=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['converged','haveEnergy','haveAt','inInput','purging'],'I',['taskNumber','equivalentAtomSets','nBasisFunctions','moCount'],'S',['energyKey','energyValue'],'O',['atomTypes','javajs.util.Lst','htMOs','java.util.Map']]
,['S',['$DS_LIST','$FS_LIST','$DC_LIST','$FC_LIST']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.calculationType="(NWCHEM)";
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.trim$().startsWith$S("NWChem")) {
this.inInput=(this.line.indexOf$S("NWChem Input Module") >= 0);
if (this.inInput) {
p$1.checkMOs.apply(this, []);
}}if (this.line.startsWith$S("          Step")) {
p$1.init.apply(this, []);
return true;
}if (this.line.indexOf$S("  wavefunction    = ") >= 0) {
this.calculationType=this.line.substring$I(this.line.indexOf$S("=") + 1).trim$() + "(NWCHEM)";
this.moData.put$O$O("calculationType", this.calculationType);
return true;
}if (this.line.indexOf$S("Total") >= 0) {
p$1.readTotal.apply(this, []);
return true;
}if (this.line.indexOf$S("@") >= 0) {
p$1.readAtSign.apply(this, []);
return true;
}if (this.line.startsWith$S(" Task  times")) {
p$1.init.apply(this, []);
this.taskNumber++;
return true;
}if (this.line.startsWith$S("      Optimization converged")) {
this.converged=true;
return true;
}if (this.line.startsWith$S("      Symmetry information")) {
p$1.readSymmetry.apply(this, []);
return true;
}if (this.line.indexOf$S("Output coordinates in ") >= 0) {
var thisLine=this.line;
if (!this.htMOs.isEmpty$()) p$1.checkMOs.apply(this, []);
if (!this.doGetModel$I$S(++this.modelNumber, null)) return this.checkLastModel$();
this.equivalentAtomSets++;
p$1.readAtoms$S.apply(this, [thisLine]);
return true;
}if (this.line.indexOf$S("Vibrational analysis") >= 0) {
p$1.readFrequencies.apply(this, []);
return true;
}if (!this.doProcessLines) return true;
if (this.line.startsWith$S("  Mulliken analysis of the total density")) {
if (this.equivalentAtomSets != 0) this.readPartialCharges$();
return true;
}if (this.line.contains$CharSequence("Basis \"ao basis\"") && this.doReadMolecularOrbitals ) {
return p$1.readBasis.apply(this, []);
}if (this.line.contains$CharSequence("Molecular Orbital Analysis")) {
if (this.equivalentAtomSets != 0) p$1.readMOs.apply(this, []);
return true;
}return true;
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
p$1.checkMOs.apply(this, []);
this.finalizeReaderASCR$();
});

Clazz.newMeth(C$, 'init', function () {
this.haveEnergy=false;
this.haveAt=false;
this.converged=false;
this.inInput=false;
this.equivalentAtomSets=0;
}, p$1);

Clazz.newMeth(C$, 'setEnergies$S$S$I', function (key, value, nAtomSets) {
this.energyKey=key;
this.energyValue=value;
p$1.setProps$S$S$I.apply(this, [this.energyKey, this.energyValue, this.equivalentAtomSets]);
p$1.setNames$S$javajs_util_BS$I.apply(this, [this.energyKey + " = " + this.energyValue , null, this.equivalentAtomSets]);
this.asc.setAtomSetEnergy$S$F(value, this.parseFloatStr$S(value));
this.haveEnergy=true;
}, p$1);

Clazz.newMeth(C$, 'setEnergy$S$S', function (key, value) {
this.energyKey=key;
this.energyValue=value;
this.asc.setAtomSetModelProperty$S$S(this.energyKey, this.energyValue);
this.asc.setAtomSetName$S(this.energyKey + " = " + this.energyValue );
this.haveEnergy=true;
}, p$1);

Clazz.newMeth(C$, 'readSymmetry', function () {
var tokens=$I$(2,"getTokens$S",[this.readLines$I(3)]);
p$1.setProps$S$S$I.apply(this, ["Symmetry group name", tokens[tokens.length - 1], this.equivalentAtomSets]);
}, p$1);

Clazz.newMeth(C$, 'readTotal', function () {
var tokens=this.getTokens$();
try {
if (tokens[2].startsWith$S("energy")) {
if (!this.haveAt) p$1.setEnergies$S$S$I.apply(this, ["E(" + tokens[1] + ")" , tokens[tokens.length - 1], this.equivalentAtomSets]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'readAtSign', function () {
if (this.line.charAt$I(2) == "S") {
if (this.readLines$I(2) == null ) return;
}var tokens=this.getTokens$();
if (!this.haveEnergy) {
p$1.setEnergies$S$S$I.apply(this, ["E", tokens[2], this.equivalentAtomSets]);
} else {
p$1.setEnergies$S$S$I.apply(this, [this.energyKey, this.energyValue, this.equivalentAtomSets]);
}p$1.setProps$S$S$I.apply(this, ["Step", tokens[1], this.equivalentAtomSets]);
this.haveAt=true;
}, p$1);

Clazz.newMeth(C$, 'setProps$S$S$I', function (key, value, n) {
for (var i=this.asc.iSet; --n >= 0 && i >= 0 ; --i) this.asc.setAtomSetModelPropertyForSet$S$S$I(key, value, i);

}, p$1);

Clazz.newMeth(C$, 'setNames$S$javajs_util_BS$I', function (atomSetName, namedSets, n) {
for (var i=this.asc.iSet; --n >= 0 && i >= 0 ; --i) if (namedSets == null  || !namedSets.get$I(i) ) this.asc.setModelInfoForSet$S$O$I("name", atomSetName, i);

}, p$1);

Clazz.newMeth(C$, 'readAtoms$S', function (thisLine) {
var scale=(thisLine.indexOf$S("angstroms") < 0 ? 0.5291772 : 1);
this.readLines$I(3);
var tokens;
this.haveEnergy=false;
this.asc.newAtomSet$();
this.asc.setAtomSetModelProperty$S$S(".PATH", "Task " + this.taskNumber + (this.inInput ? $I$(3).PATH_SEPARATOR + "Input" : $I$(3).PATH_SEPARATOR + "Geometry") );
this.atomTypes=Clazz.new_($I$(4,1));
while (this.rd$() != null  && this.line.length$() > 0 ){
tokens=this.getTokens$();
if (tokens.length < 6) break;
var name=p$1.fixTag$S.apply(this, [tokens[1]]);
this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(null, tokens, 3, scale).atomName=name;
this.atomTypes.addLast$O(name);
}
if (this.converged) {
p$1.setEnergy$S$S.apply(this, [this.energyKey, this.energyValue]);
this.asc.setAtomSetModelProperty$S$S("Step", "converged");
} else if (this.inInput) {
this.asc.setAtomSetName$S("Input");
}}, p$1);

Clazz.newMeth(C$, 'readGradients', function () {
this.readLines$I(3);
var tokens;
this.asc.newAtomSet$();
if (this.equivalentAtomSets > 1) {
var p=this.asc.getAtomSetAuxiliaryInfoValue$I$S(this.asc.iSet - 1, "modelProperties");
if (p != null ) this.asc.setCurrentModelInfo$S$O("modelProperties", p.clone$());
}this.asc.setAtomSetModelProperty$S$S("vector", "gradient");
this.asc.setAtomSetModelProperty$S$S(".PATH", "Task " + this.taskNumber + $I$(3).PATH_SEPARATOR + "Gradients" );
var f=0.5291772;
while (this.rd$() != null  && this.line.length$() > 0 ){
tokens=this.getTokens$();
if (tokens.length < 8) break;
var atom=this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(null, tokens, 2, f);
atom.atomName=p$1.fixTag$S.apply(this, [tokens[1]]);
this.asc.addVibrationVector$I$F$F$F(atom.index, -this.parseFloatStr$S(tokens[5]), -this.parseFloatStr$S(tokens[6]), -this.parseFloatStr$S(tokens[7]));
}
}, p$1);

Clazz.newMeth(C$, 'readFrequencies', function () {
var firstFrequencyAtomSetIndex=this.asc.atomSetCount;
var firstVibrationNumber=this.vibrationNumber;
var path="Task " + this.taskNumber + $I$(3).PATH_SEPARATOR + "Frequencies" ;
this.discardLinesUntilContains$S("Atom information");
this.readLines$I(2);
this.asc.newAtomSet$();
var tokens;
while (this.rd$() != null  && this.line.indexOf$S("---") < 0 ){
tokens=this.getTokens$();
this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(null, tokens, 2, 0.5291772).atomName=p$1.fixTag$S.apply(this, [tokens[0]]);
}
this.discardLinesUntilContains$S("(Projected Frequencies expressed in cm-1)");
this.readLines$I(3);
var firstTime=true;
var bsIgnore=Clazz.new_($I$(5,1));
while (this.rd$() != null  && this.line.indexOf$S("P.Frequency") >= 0 ){
tokens=$I$(2).getTokensAt$S$I(this.line, 12);
var frequencyCount=tokens.length;
var iAtom0=this.asc.ac;
var ac=this.asc.getLastAtomSetAtomCount$();
if (firstTime) iAtom0-=ac;
var ignore=Clazz.array(Boolean.TYPE, [frequencyCount]);
for (var i=0; i < frequencyCount; ++i) {
ignore[i]=(tokens[i].equals$O("0.00") || !this.doGetVibration$I(++this.vibrationNumber) );
if (ignore[i]) {
bsIgnore.set$I(this.vibrationNumber);
continue;
}if (!firstTime) this.asc.cloneLastAtomSet$();
firstTime=false;
this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, path, null, tokens[i], null);
}
this.readLines$I(1);
this.fillFrequencyData$I$I$I$ZA$Z$I$I$IA$I$SAA(iAtom0, ac, ac, ignore, false, 0, 0, null, 0, null);
this.readLines$I(3);
}
try {
this.discardLinesUntilContains$S("Infra Red Intensities");
this.readLines$I(2);
var idx=firstFrequencyAtomSetIndex;
for (var i=firstVibrationNumber; i < this.vibrationNumber; ++i) {
if (this.rd$() == null ) return;
if (bsIgnore.get$I(i)) continue;
tokens=this.getTokens$();
var iset=this.asc.iSet;
this.asc.iSet=idx++;
this.asc.setAtomSetModelProperty$S$S("IRIntensity", tokens[3] + " au");
this.asc.iSet=iset;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("nwchem infra red issue" + e);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'readPartialCharges$', function () {
var tokens;
this.readLines$I(4);
var ac=this.asc.ac;
var i0=this.asc.getLastAtomSetAtomIndex$();
var atoms=this.asc.atoms;
for (var i=i0; i < ac; ++i) {
while (atoms[i].elementNumber == 0)++i;

do {
if (this.rd$() == null  || this.line.length$() < 3 ) return;
tokens=this.getTokens$();
} while (tokens[0].indexOf$S(".") >= 0);
atoms[i].partialCharge=this.parseIntStr$S(tokens[2]) - this.parseFloatStr$S(tokens[3]);
}
});

Clazz.newMeth(C$, 'fixTag$S', function (tag) {
if (tag.equalsIgnoreCase$S("bq")) return "X";
if (tag.toLowerCase$().startsWith$S("bq")) tag=tag.substring$I(2) + "-Bq";
return "" + Character.toUpperCase$C(tag.charAt$I(0)) + (tag.length$() == 1 ? "" : "" + Character.toLowerCase$C(tag.charAt$I(1))) ;
}, p$1);

Clazz.newMeth(C$, 'readBasis', function () {
this.gaussianCount=0;
this.shellCount=0;
this.nBasisFunctions=0;
var isD6F10=(this.line.indexOf$S("cartesian") >= 0);
if (isD6F10) {
this.getDFMap$S$S$I$S$I("DC", C$.$DC_LIST, 4, "DXX   DYY   DZZ   DXY   DXZ   DYZ", 3);
this.getDFMap$S$S$I$S$I("FC", C$.$FC_LIST, 6, "XXX   YYY   ZZZ   XYY   XXY   XXZ   XZZ   YZZ   YYZ   XYZ", 3);
} else {
this.getDFMap$S$S$I$S$I("DS", C$.$DS_LIST, 3, "d0    d1+   d1-   d2+   d2-", 2);
this.getDFMap$S$S$I$S$I("FS", C$.$FS_LIST, 5, "f0    f1+   f1-   f2+   f2-   f3+   f3-", 2);
}this.shells=Clazz.new_($I$(4,1));
var atomInfo=Clazz.new_($I$(1,1));
var atomSym=null;
var atomData=null;
var shellData=null;
while (this.line != null ){
var nBlankLines=0;
while (this.line.length$() < 3 || this.line.charAt$I(2) == " " ){
shellData=Clazz.new_($I$(4,1));
this.rd$();
if (this.line.length$() < 3) nBlankLines++;
}
if (nBlankLines >= 2) break;
if (this.parseIntStr$S(this.line) == -2147483648) {
atomSym=this.getTokens$()[0];
if (atomSym.length$() > 2) atomSym=$I$(6,"getElementSymbol$I",[$I$(7).elementNumberFromName$S(atomSym)]);
atomData=Clazz.new_($I$(4,1));
atomInfo.put$O$O(atomSym, atomData);
this.rd$();
this.rd$();
continue;
}while (this.line != null  && this.line.length$() > 3 ){
var tokens=this.getTokens$();
var o=Clazz.array(java.lang.Object, -1, [tokens[1], Clazz.array(Float.TYPE, -1, [this.parseFloatStr$S(tokens[2]), this.parseFloatStr$S(tokens[3])])]);
shellData.addLast$O(o);
this.rd$();
}
atomData.addLast$O(shellData);
}
var nD=(isD6F10 ? 6 : 5);
var nF=(isD6F10 ? 10 : 7);
var gdata=Clazz.new_($I$(4,1));
for (var i=0; i < this.atomTypes.size$(); i++) {
atomData=atomInfo.get$O(this.atomTypes.get$I(i));
var nShells=atomData.size$();
for (var ishell=0; ishell < nShells; ishell++) {
this.shellCount++;
shellData=atomData.get$I(ishell);
var nGaussians=shellData.size$();
var type=shellData.get$I(0)[0];
switch ((type.charCodeAt$I(0))) {
case 83:
this.nBasisFunctions+=1;
break;
case 80:
this.nBasisFunctions+=3;
break;
case 68:
this.nBasisFunctions+=nD;
break;
case 70:
this.nBasisFunctions+=nF;
break;
}
var slater=Clazz.array(Integer.TYPE, [4]);
slater[0]=i + 1;
slater[1]=(isD6F10 ? $I$(8).getQuantumShellTagID$S(type) : $I$(8).getQuantumShellTagIDSpherical$S(type));
slater[2]=this.gaussianCount + 1;
slater[3]=nGaussians;
this.shells.addLast$O(slater);
for (var ifunc=0; ifunc < nGaussians; ifunc++) gdata.addLast$O(shellData.get$I(ifunc)[1]);

this.gaussianCount+=nGaussians;
}
}
this.gaussians=$I$(9).newFloat2$I(this.gaussianCount);
for (var i=0; i < this.gaussianCount; i++) this.gaussians[i]=gdata.get$I(i);

$I$(10).info$S(this.gaussianCount + " Gaussians read");
return true;
}, p$1);

Clazz.newMeth(C$, 'readMOs', function () {
var lines=Clazz.new_($I$(4,1));
this.htMOs.put$O$O(this.line, lines);
lines.addLast$O(this.line);
var nblank=0;
while (nblank != 2 && this.rd$() != null  ){
lines.addLast$O(this.line);
if (this.line.length$() < 2) nblank++;
 else nblank=0;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'checkMOs', function () {
if (this.shells == null ) return;
for (var entry, $entry = this.htMOs.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
this.line=entry.getKey$();
this.alphaBeta=this.line.substring$I$I(0, this.line.indexOf$S("Final")).trim$() + " ";
var moCount=0;
if (!this.filterMO$()) continue;
var list=entry.getValue$();
var n=list.size$();
$I$(10).info$S(this.line);
for (var i=3; i < n; i++) {
while (i < n && ((this.line=list.get$I(i)).length$() < 2 || this.line.charAt$I(1) != "V" ) )i++;

if (i == n) break;
this.line=this.line.replace$C$C("=", " ");
var tokens=this.getTokens$();
var occupancy=this.parseFloatStr$S(tokens[3]);
var energy=this.parseFloatStr$S(tokens[5]);
var symmetry=(tokens.length > 7 ? tokens[7] : null);
var mo=Clazz.new_($I$(1,1));
mo.put$O$O("occupancy", Float.valueOf$F(occupancy));
mo.put$O$O("energy", Float.valueOf$F(energy));
if (symmetry != null ) mo.put$O$O("symmetry", symmetry);
var coefs=null;
this.setMO$java_util_Map(mo);
mo.put$O$O("type", this.alphaBeta + (++moCount));
coefs=Clazz.array(Float.TYPE, [this.nBasisFunctions]);
mo.put$O$O("coefficients", coefs);
i+=3;
while ((this.line=list.get$I(++i)) != null  && this.line.length$() > 3 ){
tokens=this.getTokens$();
coefs[this.parseIntStr$S(tokens[0]) - 1]=this.parseFloatStr$S(tokens[1]);
var pt=(tokens.length/2|0);
if (pt == 5 || pt == 6 ) coefs[this.parseIntStr$S(tokens[pt]) - 1]=this.parseFloatStr$S(tokens[pt + 1]);
}
}
}
this.energyUnits="a.u.";
this.setMOData$Z(true);
this.htMOs.clear$();
}, p$1);

Clazz.newMeth(C$, 'rd$', function () {
this.RL$();
if (!this.purging && this.line != null   && this.line.startsWith$S("--") ) {
this.purging=true;
this.discardLinesUntilStartsWith$S("*");
this.rd$();
this.purging=false;
this.RL$();
}return this.line;
});

C$.$static$=function(){C$.$static$=0;
C$.$DS_LIST="d2-   d1-   d0    d1+   d2+";
C$.$FS_LIST="f3-   f2-   f1-   f0    f1+   f2+   f3+";
C$.$DC_LIST="DXX   DXY   DXZ   DYY   DYZ   DZZ";
C$.$FC_LIST="XXX   XXY   XXZ   XYY   XYZ   XZZ   YYY   YYZ   YZZ   ZZZ";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:26 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
