(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'org.jmol.util.Logger','org.jmol.adapter.smarter.AtomSetCollectionReader','org.jmol.adapter.smarter.Bond','javajs.util.Lst','javajs.util.PT','org.jmol.adapter.readers.quantum.BasisFunctionReader','javajs.util.AU','java.util.Hashtable']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WebMOReader", null, 'org.jmol.adapter.readers.quantum.MopacSlaterReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['DS_LIST','DC_LIST','FS_LIST','FC_LIST']]]

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.equals$O("[HEADER]")) {
this.readHeader$();
return true;
}if (this.line.equals$O("[ATOMS]")) {
this.readAtoms$();
return false;
}if (this.line.equals$O("[BONDS]")) {
this.readBonds$();
return false;
}if (!this.doReadMolecularOrbitals) return true;
if (this.line.equals$O("[AO_ORDER]")) {
this.readAtomicOrbitalOrder$();
return false;
}if (this.line.equals$O("[GTO]")) {
this.readGaussianBasis$();
return false;
}if (this.line.equals$O("[STO]")) {
this.readSlaterBasis$();
return false;
}if (this.line.indexOf$S("[MO") == 0) {
if (!this.doGetModel$I$S(++this.modelNumber, null)) return this.checkLastModel$();
this.readMolecularOrbital$();
return false;
}return true;
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.finalizeReaderASCR$();
if (this.nOrbitals > 0) this.setMOs$S("eV");
if (this.debugging) $I$(1,"debug$S",[this.orbitals.size$() + " molecular orbitals read"]);
});

Clazz.newMeth(C$, 'readHeader$', function () {
this.moData.put$O$O("isNormalized", Boolean.TRUE);
while (this.rd$() != null  && this.line.length$() > 0 ){
this.moData.put$O$O("calculationType", "?");
var tokens=this.getTokens$();
tokens[0]=tokens[0].substring$I$I(0, 1).toLowerCase$() + tokens[0].substring$I$I(1, tokens[0].length$());
var str="";
for (var i=1; i < tokens.length; i++) str += (i == 1 ? "" : " ") + tokens[i].toLowerCase$();

this.moData.put$O$O(tokens[0], str);
}
});

Clazz.newMeth(C$, 'readAtoms$', function () {
while (p$1.getLine.apply(this, [])){
var tokens=this.getTokens$();
if (tokens.length == 0) continue;
var sym=tokens[0];
var atNo=this.parseIntStr$S(sym);
this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(null, tokens, 1, 0.5291772).elementSymbol=(atNo == -2147483648 ? sym : $I$(2).getElementSymbol$I(atNo));
}
});

Clazz.newMeth(C$, 'readBonds$', function () {
while (p$1.getLine.apply(this, [])){
var tokens=this.getTokens$();
if (tokens.length == 0) continue;
var atomIndex1=this.parseIntStr$S(tokens[0]);
var atomIndex2=this.parseIntStr$S(tokens[1]);
var order=this.parseIntStr$S(tokens[2]);
this.asc.addBond$org_jmol_adapter_smarter_Bond(Clazz.new_($I$(3,1).c$$I$I$I,[atomIndex1 - 1, atomIndex2 - 1, order]));
}
});

Clazz.newMeth(C$, 'readAtomicOrbitalOrder$', function () {
while (p$1.getLine.apply(this, [])){
var tokens=this.getTokens$();
if (tokens.length == 0) continue;
var data=this.line.substring$I(9).trim$().toLowerCase$();
var isOK=false;
switch (tokens.length - 1) {
case 3:
case 4:
isOK=true;
break;
case 5:
isOK=(tokens[0].equals$O("DOrbitals") && this.getDFMap$S$S$I$S$I("DS", data, 3, C$.DS_LIST, 99) );
break;
case 6:
isOK=(tokens[0].equals$O("DOrbitals") && this.getDFMap$S$S$I$S$I("DC", data, 4, C$.DC_LIST, 2) );
break;
case 7:
isOK=(tokens[0].equals$O("FOrbitals") && this.getDFMap$S$S$I$S$I("FS", data, 5, C$.FS_LIST, 99) );
break;
case 10:
isOK=(tokens[0].equals$O("FOrbitals") && this.getDFMap$S$S$I$S$I("FC", data, 6, C$.FC_LIST, 3) );
break;
}
if (!isOK) {
$I$(1).error$S("atomic orbital order is unrecognized -- skipping reading of MOs due to line: " + this.line);
this.orbitals=null;
}}
});

Clazz.newMeth(C$, 'getLine', function () {
return (this.rd$() != null  && (this.line.length$() == 0 || this.line.charAt$I(0) != "[" ) );
}, p$1);

Clazz.newMeth(C$, 'readGaussianBasis$', function () {
var sdata=Clazz.new_($I$(4,1));
var gdata=Clazz.new_($I$(4,1));
var atomNo=1;
var gaussianPtr=0;
while (p$1.getLine.apply(this, [])){
var tokens=this.getTokens$();
if (tokens.length == 0) continue;
if (tokens.length != 1) throw Clazz.new_(Clazz.load('Exception').c$$S,["Error reading GTOs: missing atom index"]);
var slater=Clazz.array(Integer.TYPE, [4]);
atomNo=this.parseIntStr$S(tokens[0]);
tokens=$I$(5,"getTokens$S",[this.rd$()]);
var nGaussians=this.parseIntStr$S(tokens[1]);
slater[0]=atomNo;
slater[1]=$I$(6).getQuantumShellTagID$S(tokens[0]);
slater[2]=gaussianPtr + 1;
slater[3]=nGaussians;
for (var i=0; i < nGaussians; i++) {
var strData=$I$(5,"getTokens$S",[this.rd$()]);
var nData=strData.length;
var data=Clazz.array(Float.TYPE, [nData]);
for (var d=0; d < nData; d++) {
data[d]=this.parseFloatStr$S(strData[d]);
}
gdata.addLast$O(data);
gaussianPtr++;
}
sdata.addLast$O(slater);
}
var garray=$I$(7).newFloat2$I(gaussianPtr);
for (var i=0; i < gaussianPtr; i++) {
garray[i]=gdata.get$I(i);
}
this.moData.put$O$O("shells", sdata);
this.moData.put$O$O("gaussians", garray);
if (this.debugging) {
$I$(1,"debug$S",[sdata.size$() + " slater shells read"]);
$I$(1).debug$S(garray.length + " gaussian primitives read");
}this.asc.setCurrentModelInfo$S$O("moData", this.moData);
});

Clazz.newMeth(C$, 'readSlaterBasis$', function () {
while (p$1.getLine.apply(this, [])){
var tokens=this.getTokens$();
if (tokens.length < 7) continue;
this.addSlater$I$I$I$I$I$D$F(this.parseIntStr$S(tokens[0]), this.parseIntStr$S(tokens[1]), this.parseIntStr$S(tokens[2]), this.parseIntStr$S(tokens[3]), this.parseIntStr$S(tokens[4]), this.parseFloatStr$S(tokens[5]), this.parseFloatStr$S(tokens[6]));
}
this.setSlaters$Z$Z(false, false);
});

Clazz.newMeth(C$, 'readMolecularOrbital$', function () {
if (this.orbitals == null ) {
$I$(1).error$S("MOLECULAR ORBITALS SKIPPED");
while (p$1.getLine.apply(this, [])){
}
return;
}var mo=Clazz.new_($I$(8,1));
var data=Clazz.new_($I$(4,1));
var energy=this.parseFloatStr$S(this.rd$());
var occupancy=this.parseFloatStr$S(this.rd$());
while (p$1.getLine.apply(this, [])){
var tokens=this.getTokens$();
if (tokens.length == 0) {
continue;
}data.addLast$O(tokens[1]);
}
var coefs=Clazz.array(Float.TYPE, [data.size$()]);
for (var i=data.size$(); --i >= 0; ) {
coefs[i]=this.parseFloatStr$S(data.get$I(i));
}
mo.put$O$O("energy", Float.valueOf$F(energy));
mo.put$O$O("occupancy", Float.valueOf$F(occupancy));
mo.put$O$O("coefficients", coefs);
this.orbitals.addLast$O(mo);
this.nOrbitals++;
if (occupancy > 0 ) this.moData.put$O$O("HOMO", Integer.valueOf$I(this.nOrbitals));
});

C$.$static$=function(){C$.$static$=0;
C$.DS_LIST="NOT IMPLEMENTED IN THIS READER";
C$.DC_LIST="xx    yy    zz    xy    xz    yz";
C$.FS_LIST="NOT IMPLEMENTED IN THIS READER";
C$.FC_LIST="xxx   yyy   zzz   yyx   xxy   xxz   zzx   zzy   yyz   xyz";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:26 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
