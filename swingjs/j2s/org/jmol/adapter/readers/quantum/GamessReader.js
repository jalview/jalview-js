(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'javajs.util.PT','javajs.util.Lst','java.util.Hashtable','org.jmol.adapter.readers.quantum.BasisFunctionReader','javajs.util.AU','org.jmol.util.Logger']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GamessReader", null, 'org.jmol.adapter.readers.quantum.MOReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isTypeSet'],'O',['atomNames','javajs.util.Lst','calcOptions','java.util.Map']]]

Clazz.newMeth(C$, 'readEnergy$', function () {
var tokens=$I$(1,"getTokens$S",[this.line.substring$I(this.line.indexOf$S("ENERGY"))]);
if (tokens.length < 3) return;
var strEnergy=tokens[2];
var e=this.parseFloatStr$S(strEnergy);
if (!Float.isNaN$F(e)) this.asc.setAtomSetEnergy$S$F(strEnergy, e);
});

Clazz.newMeth(C$, 'readGaussianBasis$S$S', function (initiator, terminator) {
var gdata=Clazz.new_($I$(2,1));
this.gaussianCount=0;
var nGaussians=0;
this.shellCount=0;
var thisShell="0";
var tokens;
this.discardLinesUntilContains$S(initiator);
this.rd$();
var slater=null;
var shellsByAtomType=Clazz.new_($I$(3,1));
var slatersByAtomType=Clazz.new_($I$(2,1));
var atomType=null;
while (this.rd$() != null  && this.line.indexOf$S(terminator) < 0 ){
if (this.line.indexOf$S("(") >= 0) this.line=C$.fixBasisLine$S(this.line);
tokens=this.getTokens$();
switch (tokens.length) {
case 1:
if (atomType != null ) {
if (slater != null ) {
slater[2]=nGaussians;
slatersByAtomType.addLast$O(slater);
slater=null;
}shellsByAtomType.put$O$O(atomType, slatersByAtomType);
}slatersByAtomType=Clazz.new_($I$(2,1));
atomType=tokens[0];
break;
case 0:
break;
default:
if (!tokens[0].equals$O(thisShell)) {
if (slater != null ) {
slater[2]=nGaussians;
slatersByAtomType.addLast$O(slater);
}thisShell=tokens[0];
this.shellCount++;
slater=Clazz.array(Integer.TYPE, -1, [$I$(4,"getQuantumShellTagID$S",[this.fixShellTag$S(tokens[1])]), this.gaussianCount, 0]);
nGaussians=0;
}++nGaussians;
++this.gaussianCount;
gdata.addLast$O(tokens);
}
}
if (slater != null ) {
slater[2]=nGaussians;
slatersByAtomType.addLast$O(slater);
}if (atomType != null ) shellsByAtomType.put$O$O(atomType, slatersByAtomType);
this.gaussians=$I$(5).newFloat2$I(this.gaussianCount);
for (var i=0; i < this.gaussianCount; i++) {
tokens=gdata.get$I(i);
this.gaussians[i]=Clazz.array(Float.TYPE, [tokens.length - 3]);
for (var j=3; j < tokens.length; j++) this.gaussians[i][j - 3]=this.parseFloatStr$S(tokens[j]);

}
var ac=this.atomNames.size$();
if (this.shells == null  && ac > 0 ) {
this.shells=Clazz.new_($I$(2,1));
for (var i=0; i < ac; i++) {
atomType=this.atomNames.get$I(i);
var slaters=shellsByAtomType.get$O(atomType);
if (slaters == null ) {
$I$(6).error$S("slater for atom " + i + " atomType " + atomType + " was not found in listing. Ignoring molecular orbitals" );
return;
}for (var j=0; j < slaters.size$(); j++) {
slater=slaters.get$I(j);
this.shells.addLast$O(Clazz.array(Integer.TYPE, -1, [i + 1, slater[0], slater[1] + 1, slater[2]]));
}
}
}if (this.debugging) {
$I$(6).debug$S(this.shellCount + " slater shells read");
$I$(6).debug$S(this.gaussianCount + " gaussian primitives read");
}});

Clazz.newMeth(C$, 'readFrequencies$', function () {
this.discardLinesUntilContains$S("FREQUENCY:");
var haveFreq=false;
while (this.line != null  && this.line.indexOf$S("FREQUENCY:") >= 0 ){
var frequencyCount=0;
var tokens=this.getTokens$();
var frequencies=Clazz.array(Float.TYPE, [tokens.length]);
for (var i=0; i < tokens.length; i++) {
var frequency=this.parseFloatStr$S(tokens[i]);
if (tokens[i].equals$O("I")) frequencies[frequencyCount - 1]=-frequencies[frequencyCount - 1];
if (Float.isNaN$F(frequency)) continue;
frequencies[frequencyCount++]=frequency;
if (this.debugging) {
$I$(6,"debug$S",[(this.vibrationNumber + 1) + " frequency=" + new Float(frequency).toString() ]);
}}
var red_masses=null;
var intensities=null;
this.rd$();
if (this.line.indexOf$S("MASS") >= 0) {
red_masses=this.getTokens$();
this.rd$();
}if (this.line.indexOf$S("INTENS") >= 0) {
intensities=this.getTokens$();
}var ac=this.asc.getLastAtomSetAtomCount$();
var iAtom0=this.asc.ac;
var ignore=Clazz.array(Boolean.TYPE, [frequencyCount]);
for (var i=0; i < frequencyCount; i++) {
ignore[i]=!this.doGetVibration$I(++this.vibrationNumber);
if (ignore[i]) continue;
if (haveFreq) {
this.asc.cloneLastAtomSet$();
} else {
haveFreq=true;
iAtom0-=ac;
}this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, null, null, "" + new Float(frequencies[i]).toString(), null);
if (red_masses != null ) this.asc.setAtomSetModelProperty$S$S("ReducedMass", red_masses[red_masses.length - frequencyCount + i] + " AMU");
if (intensities != null ) this.asc.setAtomSetModelProperty$S$S("IRIntensity", intensities[intensities.length - frequencyCount + i] + " D^2/AMU-Angstrom^2");
}
this.discardLinesUntilBlank$();
this.fillFrequencyData$I$I$I$ZA$Z$I$I$IA$I$SAA(iAtom0, ac, ac, ignore, false, 20, 12, null, 0, null);
this.readLines$I(13);
}
});

Clazz.newMeth(C$, 'fixBasisLine$S', function (line) {
var pt;
var pt1;
line=line.replace$C$C(")", " ");
while ((pt=line.indexOf$S("(")) >= 0){
pt1=pt;
while (line.charAt$I(--pt1) == " "){
}
while (line.charAt$I(--pt1) != " "){
}
line=line.substring$I$I(0, ++pt1) + line.substring$I(pt + 1);
}
return line;
}, 1);

Clazz.newMeth(C$, 'setCalculationType$', function () {
if (this.calcOptions == null  || this.isTypeSet ) return;
this.isTypeSet=true;
var SCFtype=this.calcOptions.get$O("contrl_options_SCFTYP");
var Runtype=this.calcOptions.get$O("contrl_options_RUNTYP");
var igauss=this.calcOptions.get$O("basis_options_IGAUSS");
var gbasis=this.calcOptions.get$O("basis_options_GBASIS");
var DFunc=!"0".equals$O(this.calcOptions.get$O("basis_options_NDFUNC"));
var PFunc=!"0".equals$O(this.calcOptions.get$O("basis_options_NPFUNC"));
var FFunc=!"0".equals$O(this.calcOptions.get$O("basis_options_NFFUNC"));
var DFTtype=this.calcOptions.get$O("contrl_options_DFTTYP");
var perturb=this.parseIntStr$S(this.calcOptions.get$O("contrl_options_MPLEVL"));
var CItype=this.calcOptions.get$O("contrl_options_CITYP");
var CCtype=this.calcOptions.get$O("contrl_options_CCTYP");
if (igauss == null  && SCFtype == null  ) return;
if (this.calculationType.equals$O("?")) this.calculationType="";
if (igauss != null ) {
if ("0".equals$O(igauss)) {
var recognized=false;
if (this.calculationType.length$() > 0) this.calculationType += " ";
if (gbasis.startsWith$S("ACC")) this.calculationType += "aug-cc-p";
if (gbasis.startsWith$S("CC")) this.calculationType += "cc-p";
if ((gbasis.startsWith$S("ACC") || gbasis.startsWith$S("CC") ) && gbasis.endsWith$S("C") ) this.calculationType += "C";
if (gbasis.indexOf$S("CCD") >= 0) {
this.calculationType += "VDZ";
recognized=true;
}if (gbasis.indexOf$S("CCT") >= 0) {
this.calculationType += "VTZ";
recognized=true;
}if (gbasis.indexOf$S("CCQ") >= 0) {
this.calculationType += "VQZ";
recognized=true;
}if (gbasis.indexOf$S("CC5") >= 0) {
this.calculationType += "V5Z";
recognized=true;
}if (gbasis.indexOf$S("CC6") >= 0) {
this.calculationType += "V6Z";
recognized=true;
}if (!recognized) this.calculationType += gbasis;
} else {
if (this.calculationType.length$() > 0) this.calculationType += " ";
this.calculationType += igauss + "-" + $I$(1).rep$S$S$S(gbasis, "N", "") ;
if ("T".equals$O(this.calcOptions.get$O("basis_options_DIFFSP"))) {
if ("T".equals$O(this.calcOptions.get$O("basis_options_DIFFS"))) this.calculationType += "+";
this.calculationType += "+";
}this.calculationType += "G";
if (DFunc || PFunc || FFunc  ) {
this.calculationType += "(";
if (FFunc) {
this.calculationType += "f";
if (DFunc || PFunc ) this.calculationType += ",";
}if (DFunc) {
this.calculationType += "d";
if (PFunc) this.calculationType += ",";
}if (PFunc) this.calculationType += "p";
this.calculationType += ")";
}}if (DFTtype != null  && DFTtype.indexOf$S("NONE") < 0 ) {
if (this.calculationType.length$() > 0) this.calculationType += " ";
this.calculationType += DFTtype;
}if (CItype != null  && CItype.indexOf$S("NONE") < 0 ) {
if (this.calculationType.length$() > 0) this.calculationType += " ";
this.calculationType += CItype;
}if (CCtype != null  && CCtype.indexOf$S("NONE") < 0 ) {
if (this.calculationType.length$() > 0) this.calculationType += " ";
this.calculationType += CCtype;
}if (perturb > 0) {
if (this.calculationType.length$() > 0) this.calculationType += " ";
this.calculationType += "MP" + perturb;
}if (SCFtype != null ) {
if (this.calculationType.length$() > 0) this.calculationType += " ";
this.calculationType += SCFtype + " " + Runtype ;
}}});

Clazz.newMeth(C$, 'readControlInfo$', function () {
p$1.readCalculationInfo$S.apply(this, ["contrl_options_"]);
});

Clazz.newMeth(C$, 'readBasisInfo$', function () {
p$1.readCalculationInfo$S.apply(this, ["basis_options_"]);
});

Clazz.newMeth(C$, 'readCalculationInfo$S', function (type) {
if (this.calcOptions == null ) {
this.calcOptions=Clazz.new_($I$(3,1));
this.asc.setInfo$S$O("calculationOptions", this.calcOptions);
}while (this.rd$() != null  && (this.line=this.line.trim$()).length$() > 0 ){
if (this.line.indexOf$S("=") < 0) continue;
var tokens=$I$(1,"getTokens$S",[$I$(1,"rep$S$S$S",[this.line, "=", " = "]) + " ?"]);
for (var i=0; i < tokens.length; i++) {
if (!tokens[i].equals$O("=")) continue;
try {
var key=type + tokens[i - 1];
var value=(key.equals$O("basis_options_SPLIT3") ? tokens[++i] + " " + tokens[++i] + " " + tokens[++i]  : tokens[++i]);
if (this.debugging) $I$(6,"debug$S",[key + " = " + value ]);
this.calcOptions.put$O$O(key, value);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:25 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
