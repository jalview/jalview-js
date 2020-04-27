(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.molxyz"),p$1={},I$=[[0,'org.jmol.util.Logger','org.jmol.api.JmolAdapter','java.util.Hashtable','javajs.util.Lst','javajs.util.PT','org.jmol.adapter.smarter.Atom']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MolReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.allow2D=true;
},1);

C$.$fields$=[['Z',['optimize2D','haveAtomSerials','allow2D','is2D'],'I',['iatom0','atomCount'],'O',['vr','org.jmol.adapter.readers.molxyz.V3000Rdr','atomData','String[]']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.optimize2D=this.checkFilterKey$S("2D");
});

Clazz.newMeth(C$, 'checkLine$', function () {
var isMDL=(this.line.startsWith$S("$MDL"));
if (isMDL) {
this.discardLinesUntilStartsWith$S("$HDR");
this.rd$();
if (this.line == null ) {
$I$(1).warn$S("$HDR not found in MDL RG file");
this.continuing=false;
return false;
}} else if (this.line.equals$O("M  END")) {
return true;
}if (this.doGetModel$I$S(++this.modelNumber, null)) {
this.iatom0=this.asc.ac;
p$1.processMolSdHeader.apply(this, []);
p$1.processCtab$Z.apply(this, [isMDL]);
this.vr=null;
if (this.isLastModel$I(this.modelNumber)) {
this.continuing=false;
return false;
}}if (this.line != null  && this.line.indexOf$S("$$$$") < 0 ) this.discardLinesUntilStartsWith$S("$$$$");
return true;
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.finalizeReaderMR$();
});

Clazz.newMeth(C$, 'finalizeReaderMR$', function () {
if (this.optimize2D) this.set2D$();
this.isTrajectory=false;
this.finalizeReaderASCR$();
});

Clazz.newMeth(C$, 'processMolSdHeader', function () {
var header="";
var thisDataSetName=this.line.trim$();
this.asc.setCollectionName$S(thisDataSetName);
header += this.line + "\n";
this.rd$();
if (this.line == null ) return;
header += this.line + "\n";
p$1.set2D$Z.apply(this, [this.line.length$() >= 22 && this.line.substring$I$I(20, 22).equals$O("2D") ]);
if (this.is2D) {
if (!this.allow2D) throw Clazz.new_(Clazz.load('Exception').c$$S,["File is 2D, not 3D"]);
this.appendLoadNote$S("This model is 2D. Its 3D structure has not been generated.");
}this.rd$();
if (this.line == null ) return;
this.line=this.line.trim$();
header += this.line + "\n";
$I$(1).info$S(header);
this.checkCurrentLineForScript$();
this.asc.setInfo$S$O("fileHeader", header);
this.newAtomSet$S(thisDataSetName);
}, p$1);

Clazz.newMeth(C$, 'processCtab$Z', function (isMDL) {
if (isMDL) this.discardLinesUntilStartsWith$S("$CTAB");
if (this.rd$() == null ) return;
if (this.line.indexOf$S("V3000") >= 0) {
this.optimize2D=this.is2D;
this.vr=(this.getInterface$S("org.jmol.adapter.readers.molxyz.V3000Rdr")).set$org_jmol_adapter_smarter_AtomSetCollectionReader(this);
this.discardLinesUntilContains$S("COUNTS");
this.vr.readAtomsAndBonds$SA(this.getTokens$());
} else {
p$1.readAtomsAndBonds$I$I.apply(this, [this.parseIntRange$S$I$I(this.line, 0, 3), this.parseIntRange$S$I$I(this.line, 3, 6)]);
}this.applySymmetryAndSetTrajectory$();
}, p$1);

Clazz.newMeth(C$, 'readAtomsAndBonds$I$I', function (ac, bc) {
this.atomCount=ac;
for (var i=0; i < ac; ++i) {
this.rd$();
var len=this.line.length$();
var elementSymbol;
var x;
var y;
var z;
var charge=0;
var isotope=0;
var iAtom=-2147483648;
x=this.parseFloatRange$S$I$I(this.line, 0, 10);
y=this.parseFloatRange$S$I$I(this.line, 10, 20);
z=this.parseFloatRange$S$I$I(this.line, 20, 30);
if (this.is2D && z != 0  ) p$1.set2D$Z.apply(this, [false]);
if (len < 34) {
elementSymbol=this.line.substring$I(31).trim$();
} else {
elementSymbol=this.line.substring$I$I(31, 34).trim$();
if (elementSymbol.equals$O("H1")) {
elementSymbol="H";
isotope=1;
}if (len >= 39) {
var code=this.parseIntRange$S$I$I(this.line, 36, 39);
if (code >= 1 && code <= 7 ) charge=4 - code;
code=this.parseIntRange$S$I$I(this.line, 34, 36);
if (code != 0 && code >= -3  && code <= 4 ) {
isotope=(function(a,f){return f.apply(null,a)})([$I$(2).getElementNumber$S(elementSymbol)],$I$(2).getNaturalIsotope$I) + code;
}if (iAtom == -2147483648 && this.haveAtomSerials ) iAtom=i + 1;
}}this.addMolAtom$I$I$S$I$F$F$F(iAtom, isotope, elementSymbol, charge, x, y, z);
}
this.asc.setModelInfoForSet$S$O$I("dimension", (this.is2D ? "2D" : "3D"), this.asc.iSet);
this.rd$();
if (this.line.startsWith$S("V  ")) {
p$1.readAtomValues.apply(this, []);
}if (bc == 0) this.asc.setNoAutoBond$();
for (var i=0; i < bc; ++i) {
if (i > 0) this.rd$();
var iAtom1;
var iAtom2;
var stereo=0;
iAtom1=this.line.substring$I$I(0, 3).trim$();
iAtom2=this.line.substring$I$I(3, 6).trim$();
var order=this.parseIntRange$S$I$I(this.line, 6, 9);
if (this.optimize2D && order == 1  && this.line.length$() >= 12 ) stereo=this.parseIntRange$S$I$I(this.line, 9, 12);
order=this.fixOrder$I$I(order, stereo);
if (this.haveAtomSerials) this.asc.addNewBondFromNames$S$S$I(iAtom1, iAtom2, order);
 else this.asc.addNewBondWithOrder$I$I$I(this.iatom0 + this.parseIntStr$S(iAtom1) - 1, this.iatom0 + this.parseIntStr$S(iAtom2) - 1, order);
}
var molData=Clazz.new_($I$(3,1));
var _keyList=Clazz.new_($I$(4,1));
this.rd$();
while (this.line != null  && this.line.indexOf$S("$$$$") != 0 ){
if (this.line.indexOf$S(">") == 0) {
p$1.readMolData$java_util_Map$javajs_util_Lst.apply(this, [molData, _keyList]);
continue;
}if (this.line.startsWith$S("M  ISO")) {
p$1.readIsotopes.apply(this, []);
continue;
}this.rd$();
}
if (this.atomData != null ) {
var atomValueName=molData.get$O("atom_value_name");
molData.put$O$O(atomValueName == null  ? "atom_values" : atomValueName.toString(), this.atomData);
}if (!molData.isEmpty$()) {
this.asc.setCurrentModelInfo$S$O("molDataKeys", _keyList);
this.asc.setCurrentModelInfo$S$O("molData", molData);
}}, p$1);

Clazz.newMeth(C$, 'set2D$Z', function (b) {
this.is2D=b;
this.asc.setInfo$S$O("dimension", (b ? "2D" : "3D"));
}, p$1);

Clazz.newMeth(C$, 'readAtomValues', function () {
this.atomData=Clazz.array(String, [this.atomCount]);
for (var i=this.atomData.length; --i >= 0; ) this.atomData[i]="";

while (this.line.indexOf$S("V  ") == 0){
var iAtom=this.parseIntAt$S$I(this.line, 3);
if (iAtom < 1 || iAtom > this.atomCount ) {
$I$(1).error$S("V  nnn does not evalute to a valid atom number: " + iAtom);
return;
}var s=this.line.substring$I(6).trim$();
this.atomData[iAtom - 1]=s;
this.rd$();
}
}, p$1);

Clazz.newMeth(C$, 'readIsotopes', function () {
var n=this.parseIntAt$S$I(this.line, 6);
try {
var i0=this.asc.getLastAtomSetAtomIndex$();
for (var i=0, pt=9; i < n; i++) {
var ipt=this.parseIntAt$S$I(this.line, pt);
var atom=this.asc.atoms[ipt + i0 - 1];
var iso=this.parseIntAt$S$I(this.line, pt + 4);
pt+=8;
atom.elementSymbol="" + iso + $I$(5).replaceAllCharacters$S$S$S(atom.elementSymbol, "0123456789", "") ;
}
} catch (e) {
}
this.rd$();
}, p$1);

Clazz.newMeth(C$, 'readMolData$java_util_Map$javajs_util_Lst', function (molData, _keyList) {
var atoms=this.asc.atoms;
var dataName=$I$(5).trim$S$S(this.line, "> <").toLowerCase$();
var data="";
var fdata=null;
while (this.rd$() != null  && !this.line.equals$O("$$$$")  && this.line.length$() > 0 )data += (this.line.length$() == 81 && this.line.charAt$I(80) == "+"  ? this.line.substring$I$I(0, 80) : this.line + "\n");

data=$I$(5).trim$S$S(data, "\n");
(function(a,f){return f.apply(null,a)})([dataName + ":" + $I$(5).esc$S(data) ],$I$(1).info$S);
molData.put$O$O(dataName, data);
_keyList.addLast$O(dataName);
var ndata=0;
if (dataName.toUpperCase$().contains$CharSequence("_PARTIAL_CHARGES")) {
try {
fdata=$I$(5).parseFloatArray$S(data);
for (var i=this.asc.getLastAtomSetAtomIndex$(), n=this.asc.ac; i < n; i++) atoms[i].partialCharge=0;

var pt=0;
for (var i=(fdata[pt++]|0); --i >= 0; ) {
var atomIndex=(fdata[pt++]|0) + this.iatom0 - 1;
var partialCharge=fdata[pt++];
atoms[atomIndex].partialCharge=partialCharge;
ndata++;
}
} catch (e) {
for (var i=this.asc.getLastAtomSetAtomIndex$(), n=this.asc.ac; i < n; i++) atoms[i].partialCharge=0;

$I$(1).error$S("error reading " + dataName + " field -- partial charges cleared" );
}
$I$(1).info$S(ndata + " partial charges read");
} else if (dataName.toUpperCase$().contains$CharSequence("ATOM_NAMES")) {
ndata=0;
try {
var tokens=$I$(5).getTokens$S(data);
var pt=0;
for (var i=this.parseIntStr$S(tokens[pt++]); --i >= 0; ) {
var iatom;
while ((iatom=this.parseIntStr$S(tokens[pt++])) == -2147483648){
}
var atomIndex=iatom + this.iatom0 - 1;
var name=tokens[pt++];
if (!name.equals$O(".")) atoms[atomIndex].atomName=name;
ndata++;
}
} catch (e) {
$I$(1).error$S("error reading " + dataName + " field" );
}
$I$(1).info$S(ndata + " atom names read");
}}, p$1);

Clazz.newMeth(C$, 'addMolAtom$I$I$S$I$F$F$F', function (iAtom, isotope, elementSymbol, charge, x, y, z) {
switch (isotope) {
case 0:
break;
case 1:
elementSymbol="1H";
break;
case 2:
elementSymbol="2H";
break;
case 3:
elementSymbol="3H";
break;
default:
elementSymbol=isotope + elementSymbol;
}
if (this.optimize2D && z != 0  ) this.optimize2D=false;
var atom=Clazz.new_($I$(6,1));
atom.elementSymbol=elementSymbol;
atom.formalCharge=charge;
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, x, y, z);
if (iAtom == -2147483648) {
this.asc.addAtom$org_jmol_adapter_smarter_Atom(atom);
} else {
this.haveAtomSerials=true;
atom.atomSerial=iAtom;
this.asc.addAtomWithMappedSerialNumber$org_jmol_adapter_smarter_Atom(atom);
}});

Clazz.newMeth(C$, 'fixOrder$I$I', function (order, stereo) {
switch (order) {
default:
case 0:
case -10:
return 1;
case 1:
switch (stereo) {
case 1:
return 1025;
case 3:
case 6:
return 1041;
}
break;
case 2:
case 3:
break;
case 4:
return 515;
case 5:
return 66;
case 6:
return 513;
case 7:
return 514;
case 8:
case 9:
return 33;
case 14:
return 4;
case 15:
return 5;
case 16:
return 6;
}
return order;
});

Clazz.newMeth(C$, 'addMolBond$S$S$I$I', function (iAtom1, iAtom2, order, stereo) {
order=this.fixOrder$I$I(order, stereo);
if (this.haveAtomSerials) this.asc.addNewBondFromNames$S$S$I(iAtom1, iAtom2, order);
 else this.asc.addNewBondWithOrder$I$I$I(this.iatom0 + this.parseIntStr$S(iAtom1) - 1, this.iatom0 + this.parseIntStr$S(iAtom2) - 1, order);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
