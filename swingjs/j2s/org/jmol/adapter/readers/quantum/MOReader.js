(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'javajs.util.PT','org.jmol.util.Logger','javajs.util.Lst','javajs.util.AU','java.util.Hashtable','org.jmol.quantum.QS']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MOReader", null, 'org.jmol.adapter.readers.quantum.BasisFunctionReader');
C$.FC_LIST=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.FC_LIST="(F1)  (F2)  (F10) (F4)  (F2)  (F3)  (F6)  (F9)  (F8)  (F5)";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.shellCount=0;
this.gaussianCount=0;
this.gaussians=null;
this.energyUnits=null;
this.moTypes=null;
this.getNBOs=false;
this.getNBOCharges=false;
this.haveNboCharges=false;
this.haveNboOrbitals=false;
this.orbitalsRead=false;
this.lastMoData=null;
this.allowNoOrbitals=false;
this.HEADER_GAMESS_UK_MO=0;
this.HEADER_GAMESS_OCCUPANCIES=0;
this.HEADER_GAMESS_ORIGINAL=0;
this.HEADER_NONE=0;
this.haveCoeffMap=false;
this.iMo0=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.shellCount=0;
this.gaussianCount=0;
this.energyUnits="";
this.HEADER_GAMESS_UK_MO=3;
this.HEADER_GAMESS_OCCUPANCIES=2;
this.HEADER_GAMESS_ORIGINAL=1;
this.HEADER_NONE=0;
this.iMo0=1;
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.line="\nNBOs";
this.getNBOs=(this.filter != null  && this.filterMO$() );
this.line="\nNBOCHARGES";
this.getNBOCharges=(this.filter != null  && this.filterMO$() );
this.checkAndRemoveFilterKey$S("NBOCHARGES");
});

Clazz.newMeth(C$, 'checkAndRemoveFilterKey$S', function (key) {
if (!this.checkFilterKey$S(key)) return false;
this.filter=$I$(1).rep$S$S$S(this.filter, key, "");
if (this.filter.length$() < 3) this.filter=null;
return true;
});

Clazz.newMeth(C$, 'checkNboLine$', function () {
if (this.getNBOs) {
if (this.line.indexOf$S("(Occupancy)   Bond orbital/ Coefficients/ Hybrids") >= 0) {
this.getNboTypes$();
return false;
}if (this.line.indexOf$S("NBOs in the AO basis:") >= 0) {
this.readMolecularOrbitals$I(0);
return false;
}if (this.line.indexOf$S(" SECOND ORDER PERTURBATION THEORY ANALYSIS") >= 0) {
p$1.readSecondOrderData.apply(this, []);
return false;
}}if (this.getNBOCharges && this.line.indexOf$S("Summary of Natural Population Analysis:") >= 0 ) {
p$1.getNboCharges.apply(this, []);
return true;
}return true;
});

Clazz.newMeth(C$, 'getNboCharges', function () {
if (this.haveNboCharges) return;
this.discardLinesUntilContains$S("----");
this.discardLinesUntilContains$S("----");
this.haveNboCharges=true;
var ac=this.asc.ac;
var i0=this.asc.getLastAtomSetAtomIndex$();
var atoms=this.asc.atoms;
for (var i=i0; i < ac; ++i) {
while (atoms[i].elementNumber == 0)++i;

var tokens=$I$(1).getTokens$S(this.rd$());
var charge;
if (tokens == null  || tokens.length < 3  || Float.isNaN$F(charge=this.parseFloatStr$S(tokens[2])) ) {
$I$(2).info$S("Error reading NBO charges: " + this.line);
return;
}atoms[i].partialCharge=charge;
if (this.debugging) $I$(2).debug$S("Atom " + i + " using NBOcharge: " + new Float(charge).toString() );
}
$I$(2).info$S("Using NBO charges for Model " + this.asc.atomSetCount);
}, p$1);

Clazz.newMeth(C$, 'getNboTypes$', function () {
this.moTypes=Clazz.new_($I$(3));
this.iMo0=(this.orbitals == null  ? 0 : this.orbitals.size$()) + 1;
this.rd$();
this.rd$();
var n=0;
var pt=0;
while (this.line != null  && (pt=this.line.indexOf$S(".")) >= 0  && pt < 10 ){
if (this.parseIntRange$S$I$I(this.line, 0, pt) != n + 1) break;
this.moTypes.add$I$TE(n++, this.line.substring$I$I(pt + 1, Math.min(40, this.line.length$())).trim$());
while (this.rd$() != null  && this.line.startsWith$S("       ") ){
}
}
$I$(2).info$S(n + " natural bond AO basis functions found");
});

Clazz.newMeth(C$, 'readMolecularOrbitals$I', function (headerType) {
if (this.ignoreMOs) {
this.rd$();
return;
}this.dfCoefMaps=null;
if (this.haveNboOrbitals) {
this.orbitals=Clazz.new_($I$(3));
this.alphaBeta="";
}this.haveNboOrbitals=true;
this.orbitalsRead=true;
var mos=null;
var data=null;
var dCoeffLabels="";
var fCoeffLabels="";
var pCoeffLabels="";
var ptOffset=-1;
var fieldSize=0;
var nThisLine=0;
this.rd$();
var moCount=0;
var nBlank=0;
var haveMOs=false;
if (this.line.indexOf$S("---") >= 0) this.rd$();
while (this.rd$() != null ){
var tokens=this.getTokens$();
if (this.debugging) {
$I$(2).debug$S(tokens.length + " --- " + this.line );
}if (this.line.indexOf$S("end") >= 0) break;
if (this.line.indexOf$S(" ALPHA SET ") >= 0) {
this.alphaBeta="alpha";
if (this.rd$() == null ) break;
} else if (this.line.indexOf$S(" BETA SET ") >= 0) {
if (haveMOs) break;
this.alphaBeta="beta";
if (this.rd$() == null ) break;
}var str=this.line.toUpperCase$();
if (str.length$() == 0 || str.indexOf$S("--") >= 0  || str.indexOf$S(".....") >= 0  || str.indexOf$S("NBO BASIS") >= 0  || str.indexOf$S("CI EIGENVECTORS WILL BE LABELED") >= 0  || str.indexOf$S("LZ VALUE") >= 0  || str.indexOf$S("   THIS LOCALIZATION HAD") >= 0 ) {
if (!this.haveCoeffMap) {
this.haveCoeffMap=true;
var isOK=true;
if (pCoeffLabels.length$() > 0) isOK=this.getDFMap$S$S$I$S$I("P", pCoeffLabels, 1, "(PX)  (PY)  (PZ)", 4);
if (dCoeffLabels.length$() > 0) {
if (dCoeffLabels.indexOf$S("X") >= 0) isOK=this.getDFMap$S$S$I$S$I("DC", dCoeffLabels, 4, "DXX   DYY   DZZ   DXY   DXZ   DYZ", 2);
 else if (dCoeffLabels.indexOf$S("(D6)") >= 0) isOK=this.getDFMap$S$S$I$S$I("DC", dCoeffLabels, 4, "(D1)  (D4)  (D6)  (D2)  (D3)  (D5)", 4);
 else isOK=this.getDFMap$S$S$I$S$I("DS", dCoeffLabels, 3, "(D5)  (D2)  (D3)  (D4)  (D1)", 4);
}if (fCoeffLabels.length$() > 0) {
if (fCoeffLabels.indexOf$S("X") >= 0) isOK=this.getDFMap$S$S$I$S$I("FC", fCoeffLabels, 6, "XXX   YYY   ZZZ   XYY   XXY   XXZ   XZZ   YZZ   YYZ   XYZ", 2);
 else if (fCoeffLabels.indexOf$S("(F10)") >= 0) isOK=this.getDFMap$S$S$I$S$I("FC", fCoeffLabels, 6, C$.FC_LIST, 5);
 else isOK=this.getDFMap$S$S$I$S$I("FS", fCoeffLabels, 5, "(F1)  (F2)  (F3)  (F4)  (F5)  (F6)  (F7)", 4);
}if (!isOK) {
}}if (str.length$() == 0) nBlank++;
 else nBlank=0;
if (nBlank == 2) break;
if (str.indexOf$S("LZ VALUE") >= 0) this.discardLinesUntilBlank$();
for (var iMo=0; iMo < nThisLine; iMo++) {
var coefs=Clazz.array(Float.TYPE, [data[iMo].size$()]);
var iCoeff=0;
while (iCoeff < coefs.length){
coefs[iCoeff]=this.parseFloatStr$S(data[iMo].get$I(iCoeff));
iCoeff++;
}
haveMOs=true;
this.addCoef$java_util_Map$FA$S$F$F$I(mos[iMo], coefs, null, NaN, NaN, moCount++);
}
nThisLine=0;
if (this.line.length$() == 0) continue;
break;
}nBlank=0;
if (nThisLine == 0) {
nThisLine=tokens.length;
if (tokens[0].equals$O("AO")) {
nThisLine--;
ptOffset=16;
fieldSize=8;
}if (mos == null  || nThisLine > mos.length ) {
mos=$I$(4).createArrayOfHashtable$I(nThisLine);
data=$I$(4).createArrayOfArrayList$I(nThisLine);
}for (var i=0; i < nThisLine; i++) {
mos[i]=Clazz.new_($I$(5));
data[i]=Clazz.new_($I$(3));
}
this.getMOHeader$I$SA$java_util_MapA$I(headerType, tokens, mos, nThisLine);
continue;
}var nSkip=tokens.length - nThisLine;
var type=tokens[nSkip - 1];
var ch;
if (type.charAt$I(0) == "(") {
ch=type.charAt$I(1);
if (!this.haveCoeffMap) {
switch (ch.$c()) {
case 112:
pCoeffLabels += " " + type.toUpperCase$();
break;
case 100:
dCoeffLabels += " " + P$.BasisFunctionReader.canonicalizeQuantumSubshellTag$S(type.toUpperCase$());
break;
case 102:
fCoeffLabels += " " + P$.BasisFunctionReader.canonicalizeQuantumSubshellTag$S(type.toUpperCase$());
break;
case 115:
}
}} else {
var nChar=type.length$();
ch=(nChar < 4 ? "S" : nChar == 4 ? "G" : nChar == 5 ? "H" : "?");
if (!this.haveCoeffMap && nChar == 3 ) fCoeffLabels += " " + P$.BasisFunctionReader.canonicalizeQuantumSubshellTag$S(type.toUpperCase$());
 else if (!this.haveCoeffMap && nChar == 2 ) dCoeffLabels += " " + P$.BasisFunctionReader.canonicalizeQuantumSubshellTag$S(type.toUpperCase$());
}if ($I$(6).isQuantumBasisSupported$C(ch)) {
if (ptOffset < 0) {
for (var i=0; i < nThisLine; i++) data[i].addLast$TV(tokens[i + nSkip]);

} else {
var pt=ptOffset;
for (var i=0; i < nThisLine; i++, pt+=fieldSize) data[i].addLast$TV(this.line.substring$I$I(pt, pt + fieldSize).trim$());

}}this.line="";
}
this.energyUnits="a.u.";
this.setMOData$Z(!this.alphaBeta.equals$O("alpha"));
this.haveCoeffMap=false;
this.dfCoefMaps=null;
});

Clazz.newMeth(C$, 'addCoef$java_util_Map$FA$S$F$F$I', function (mo, coefs, type, energy, occ, moCount) {
mo.put$TK$TV("coefficients", coefs);
if (this.moTypes != null ) {
type=this.moTypes.get$I(moCount % this.moTypes.size$());
occ=(type.indexOf$S("*") >= 0 ? 0 : 2);
} else if (this.alphaBeta.length$() > 0) {
type=this.alphaBeta;
}if (type != null ) mo.put$TK$TV("type", type);
if (!Float.isNaN$F(energy)) mo.put$TK$TV("energy", Float.valueOf$F(energy));
if (!Float.isNaN$F(occ)) mo.put$TK$TV("occupancy", Float.valueOf$F(occ));
this.setMO$java_util_Map(mo);
});

Clazz.newMeth(C$, 'getMOHeader$I$SA$java_util_MapA$I', function (headerType, tokens, mos, nThisLine) {
this.rd$();
switch (headerType) {
default:
case 0:
return;
case 3:
for (var i=0; i < nThisLine; i++) mos[i].put$TK$TV("energy", Float.valueOf$S(tokens[i]));

this.readLines$I(5);
return;
case 1:
tokens=this.getTokens$();
if (tokens.length == 0) tokens=$I$(1).getTokens$S(this.rd$());
for (var i=0; i < nThisLine; i++) {
mos[i].put$TK$TV("energy", Float.valueOf$S(tokens[i]));
}
this.rd$();
break;
case 2:
var haveSymmetry=(this.line.length$() > 0 || this.rd$() != null  );
tokens=this.getTokens$();
for (var i=0; i < nThisLine; i++) mos[i].put$TK$TV("occupancy", Float.valueOf$F(tokens[i].charAt$I(0) == "-" ? 2.0 : this.parseFloatStr$S(tokens[i])));

this.rd$();
if (!haveSymmetry) return;
}
if (this.line.length$() > 0) {
tokens=this.getTokens$();
for (var i=0; i < nThisLine; i++) mos[i].put$TK$TV("symmetry", tokens[i]);

}});

Clazz.newMeth(C$, 'addMOData$I$javajs_util_LstA$java_util_MapA', function (nColumns, data, mos) {
for (var i=0; i < nColumns; i++) {
var coefs=Clazz.array(Float.TYPE, [data[i].size$()]);
for (var j=coefs.length; --j >= 0; ) coefs[j]=this.parseFloatStr$S(data[i].get$I(j));

mos[i].put$TK$TV("coefficients", coefs);
this.setMO$java_util_Map(mos[i]);
}
});

Clazz.newMeth(C$, 'setMOData$Z', function (clearOrbitals) {
if (this.shells != null  && this.gaussians != null   && (this.allowNoOrbitals || this.orbitals.size$() != 0 ) ) {
this.moData.put$TK$TV("calculationType", this.calculationType);
this.moData.put$TK$TV("energyUnits", this.energyUnits);
this.moData.put$TK$TV("shells", this.shells);
this.moData.put$TK$TV("gaussians", this.gaussians);
this.moData.put$TK$TV("mos", this.orbitals);
this.finalizeMOData$java_util_Map(this.lastMoData=this.moData);
}if (clearOrbitals) {
this.clearOrbitals$();
}});

Clazz.newMeth(C$, 'readSecondOrderData', function () {
this.readLines$I(5);
if (this.lastMoData == null  || this.moTypes == null  ) return;
var ht=Clazz.new_($I$(5));
for (var i=this.moTypes.size$(); --i >= 0; ) ht.put$TK$TV($I$(1).rep$S$S$S(this.moTypes.get$I(i).substring$I(10), " ", ""), Integer.valueOf$I(i + this.iMo0));

var strSecondOrderData=Clazz.new_($I$(3));
while (this.rd$() != null  && this.line.indexOf$S("NBO") < 0 ){
if (this.line.length$() < 5 || this.line.charAt$I(4) != "." ) continue;
strSecondOrderData.addLast$TV(Clazz.array(String, -1, [$I$(1).rep$S$S$S(this.line.substring$I$I(5, 27).trim$(), " ", ""), $I$(1).rep$S$S$S(this.line.substring$I$I(32, 54).trim$(), " ", ""), this.line.substring$I$I(55, 62).trim$(), this.line.substring$I(71).trim$()]));
}
var secondOrderData=Clazz.array(Float.TYPE, [strSecondOrderData.size$(), 4]);
this.lastMoData.put$TK$TV("secondOrderData", secondOrderData);
this.lastMoData=null;
var IMO;
for (var i=strSecondOrderData.size$(); --i >= 0; ) {
var a=strSecondOrderData.get$I(i);
IMO=ht.get$O(a[0]);
if (IMO != null ) secondOrderData[i][0]=IMO.intValue$();
IMO=ht.get$O(a[1]);
if (IMO != null ) secondOrderData[i][1]=IMO.intValue$();
secondOrderData[i][2]=this.parseFloatStr$S(a[2]);
secondOrderData[i][3]=this.parseFloatStr$S(a[3]);
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
