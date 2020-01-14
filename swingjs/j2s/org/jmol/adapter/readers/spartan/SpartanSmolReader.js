(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.spartan"),p$1={},I$=[[0,'java.util.Hashtable','Boolean','javajs.util.PT','javajs.util.BC','javajs.util.SB','org.jmol.adapter.readers.spartan.SpartanArchive','org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SpartanSmolReader", null, 'org.jmol.adapter.readers.spartan.SpartanInputReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.iHaveModelStatement=false;
this.isCompoundDocument=false;
this.inputOnly=false;
this.espCharges=false;
this.natCharges=false;
this.isInputFirst=false;
this.iHaveNewDir=false;
this.title=null;
this.spartanArchive=null;
this.titles=null;
this.haveCharges=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.isCompoundDocument=(this.rd$().indexOf$S("Compound Document File Directory") >= 0);
this.inputOnly=this.checkFilterKey$S("INPUT");
this.natCharges=this.checkFilterKey$S("NATCHAR");
this.espCharges=!this.natCharges && !this.checkFilterKey$S("MULLIKEN") ;
});

Clazz.newMeth(C$, 'checkLine$', function () {
var pt=3;
var isNewDir=(this.isCompoundDocument && this.line.startsWith$S("NEW Directory M") && !this.line.startsWith$S("NEW Directory Molecules")  );
if (isNewDir) this.iHaveNewDir=true;
var isMolecule=(!this.iHaveNewDir && !isNewDir && this.isCompoundDocument && this.line.equals$O("BEGIN Directory Entry Molecule")  );
var isMacDir=(!this.isCompoundDocument && (pt=this.line.indexOf$S("#JMOL_MODEL")) >= 0 );
if (isNewDir || isMolecule || isMacDir  ) {
if (this.modelNumber > 0 && !this.isInputFirst ) this.applySymmetryAndSetTrajectory$();
this.iHaveModelStatement=true;
var modelNo=(isMolecule ? 0 : this.parseIntAt$S$I(this.line, pt + 12));
this.modelNumber=(this.bsModels == null  && modelNo != -2147483648  && modelNo != 0  ? modelNo : this.modelNumber + 1);
this.bondData="";
if (!this.doGetModel$I$S(this.modelNumber, null)) {
if (this.isInputFirst) {
this.asc.removeCurrentAtomSet$();
this.discardLinesUntilContains$S("BEGIN Directory Entry Input");
} else if (isNewDir) {
this.discardLinesUntilContains$S("NEW Directory M");
} else if (isMolecule) {
this.discardLinesUntilContains$S("BEGIN Directory Entry M");
} else {
this.discardLinesUntilContains$S("#JMOL_MODEL");
}this.checkLastModel$();
return false;
}if (!this.isInputFirst) {
p$1.makeNewAtomSet.apply(this, []);
}this.moData=Clazz.new_($I$(1));
this.moData.put$TK$TV("isNormalized", $I$(2).TRUE);
var isOK=false;
if (modelNo == -2147483648 || this.titles == null  ) {
modelNo=this.modelNumber;
this.title="Model " + modelNo;
} else {
isOK=true;
this.title=this.titles.get$O("Title" + modelNo);
this.title="Profile " + modelNo + (this.title == null  ? "" : ": " + this.title) ;
}if (this.constraints == null  && (isOK || !this.isInputFirst ) ) this.asc.setAtomSetName$S(this.title);
this.setModelPDB$Z(false);
this.asc.setCurrentAtomSetNumber$I(modelNo);
if (isMolecule) p$1.readMyTransform.apply(this, []);
return true;
}if (this.iHaveModelStatement && !this.doProcessLines ) return true;
if ((this.line.indexOf$S("BEGIN") == 0)) {
var lcline=this.line.toLowerCase$();
if (lcline.endsWith$S("input")) {
if (!this.iHaveModelStatement) this.isInputFirst=true;
if (this.isInputFirst) {
p$1.makeNewAtomSet.apply(this, []);
}this.bondData="";
this.title=this.readInputRecords$();
if (this.asc.errorMessage != null ) {
this.continuing=false;
return false;
}if (this.title != null  && this.constraints == null  ) this.asc.setAtomSetName$S(this.title);
p$1.setCharges.apply(this, []);
if (this.inputOnly) {
this.continuing=false;
return false;
}} else if (lcline.endsWith$S("_output")) {
return true;
} else if (lcline.endsWith$S("output")) {
p$1.readOutput.apply(this, []);
return false;
} else if (lcline.endsWith$S("molecule") || lcline.endsWith$S("molecule:asbinarystring") ) {
p$1.readMyTransform.apply(this, []);
return false;
} else if (lcline.endsWith$S("proparc") || lcline.endsWith$S("propertyarchive") ) {
p$1.readProperties.apply(this, []);
return false;
} else if (lcline.endsWith$S("archive")) {
this.asc.setAtomSetName$S(p$1.readArchive.apply(this, []));
return false;
}return true;
}if (this.line.indexOf$S("5D shell") >= 0) this.moData.put$TK$TV("calculationType", this.calculationType=this.line);
return true;
});

Clazz.newMeth(C$, 'makeNewAtomSet', function () {
if (this.asc.ac == 0) this.asc.removeCurrentAtomSet$();
this.asc.newAtomSet$();
}, p$1);

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.finalizeReaderASCR$();
if (this.asc.ac > 0 && this.spartanArchive != null   && this.asc.bondCount == 0  && this.bondData != null  ) this.spartanArchive.addBonds$S$I(this.bondData, 0);
if (this.moData != null ) {
var n=this.asc.atomSetInfo.get$O("HOMO_N");
if (n != null ) {
var i=n.intValue$();
this.moData.put$TK$TV("HOMO", Integer.valueOf$I(i));
}}});

Clazz.newMeth(C$, 'readMyTransform', function () {
var mat;
var binaryCodes=this.rd$();
var tokens=$I$(3).getTokens$S(binaryCodes.trim$());
if (tokens.length < 16) return;
var bytes=Clazz.array(Byte.TYPE, [tokens.length]);
for (var i=0; i < tokens.length; i++) bytes[i]=(($I$(3).parseIntRadix$S$I(tokens[i], 16)|0)|0);

mat=Clazz.array(Float.TYPE, [16]);
for (var i=16, j=bytes.length - 8; --i >= 0; j-=8) mat[i]=$I$(4).bytesToDoubleToFloat$BA$I$Z(bytes, j, false);

this.setTransform$F$F$F$F$F$F$F$F$F(mat[0], mat[1], mat[2], mat[4], mat[5], mat[6], mat[8], mat[9], mat[10]);
}, p$1);

Clazz.newMeth(C$, 'readOutput', function () {
this.titles=Clazz.new_($I$(1));
var header=Clazz.new_($I$(5));
var pt;
while (this.rd$() != null  && !this.line.startsWith$S("END ") ){
header.append$S(this.line).append$S("\n");
if ((pt=this.line.indexOf$S(")")) > 0) this.titles.put$TK$TV("Title" + this.parseIntRange$S$I$I(this.line, 0, pt), (this.line.substring$I(pt + 1).trim$()));
}
this.asc.setInfo$S$O("fileHeader", header.toString());
}, p$1);

Clazz.newMeth(C$, 'readArchive', function () {
this.spartanArchive=Clazz.new_($I$(6).c$$org_jmol_adapter_readers_quantum_BasisFunctionReader$S$S$I,[this, this.bondData, "END Directory Entry ", 0]);
var modelName=p$1.readArchiveHeader.apply(this, []);
if (modelName != null ) this.modelAtomCount=this.spartanArchive.readArchive$S$Z$I$Z(this.line, false, this.asc.ac, false);
return (this.constraints == null  ? modelName : null);
}, p$1);

Clazz.newMeth(C$, 'setCharges', function () {
if (this.haveCharges || this.asc.ac == 0 ) return;
this.haveCharges=(this.espCharges && this.asc.setAtomSetCollectionPartialCharges$S("ESPCHARGES")  || this.natCharges && this.asc.setAtomSetCollectionPartialCharges$S("NATCHARGES")   || this.asc.setAtomSetCollectionPartialCharges$S("MULCHARGES")  || this.asc.setAtomSetCollectionPartialCharges$S("Q1_CHARGES")  || this.asc.setAtomSetCollectionPartialCharges$S("ESPCHARGES") );
}, p$1);

Clazz.newMeth(C$, 'readProperties', function () {
if (this.modelAtomCount == 0) {
this.rd$();
return;
}if (this.spartanArchive == null ) this.spartanArchive=Clazz.new_($I$(6).c$$org_jmol_adapter_readers_quantum_BasisFunctionReader$S$S$I,[this, this.bondData, "END Directory Entry ", this.modelAtomCount]);
this.spartanArchive.readProperties$();
this.rd$();
p$1.setCharges.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'readArchiveHeader', function () {
var modelInfo=this.rd$();
if (this.debugging) $I$(7).debug$S(modelInfo);
if (modelInfo.indexOf$S("Error:") == 0) return null;
this.asc.setCollectionName$S(modelInfo);
this.asc.setAtomSetName$S(modelInfo);
var modelName=this.rd$();
if (this.debugging) $I$(7).debug$S(modelName);
this.rd$();
return modelName;
}, p$1);

Clazz.newMeth(C$, 'setEnergy$F', function (value) {
this.asc.setAtomSetName$S(this.constraints + (this.constraints.length$() == 0 ? "" : " ") + "Energy=" + new Float(value).toString() + " KJ" );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
