(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.pdb"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.SB','Boolean','javajs.util.PT','org.jmol.util.Logger','org.jmol.util.Escape','javajs.util.Lst','javajs.util.M4','org.jmol.api.JmolAdapter','org.jmol.adapter.smarter.Atom','org.jmol.c.STR','org.jmol.adapter.smarter.Structure','javajs.util.P3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.serMode=0;
this.seqMode=0;
this.htFormul=Clazz.new_($I$(1,1));
this.currentResno=-2147483648;
this.configurationPtr=-2147483648;
this.resetKey=true;
this.compnd=null;
this.lastAltLoc="\u0000";
this.lastGroup=-2147483648;
this.lastInsertion="\u0000";
this.lastSourceSerial=-2147483648;
this.lastTargetSerial=-2147483648;
this.maxLength=80;
this.dataT=Clazz.array(Float.TYPE, [8]);
this.connectNextAtomIndex=0;
this.connectNextAtomSet=0;
},1);

C$.$fields$=[['Z',['applySymmetry','getTlsGroups','isMultiModel','haveMappedSerials','isConnectStateBug','isLegacyModelType','gromacsWideFormat','resetKey','isCourseGrained','isbiomol','haveDoubleBonds'],'C',['lastAltLoc','lastInsertion'],'F',['cryst1'],'I',['serMode','seqMode','serial','lineLength','ac','maxSerial','nUNK','nRes','currentResno','configurationPtr','conformationIndex','fileAtomIndex','lastGroup','lastSourceSerial','lastTargetSerial','tlsGroupID','atomTypePt0','atomTypeLen','maxLength','connectNextAtomIndex','connectNextAtomSet'],'S',['currentGroup3','currentKey','compnd','pdbID','fileSgName'],'O',['pdbHeader','javajs.util.SB','htFormul','java.util.Map','+htHetero','+htSites','+htElementsInCurrentGroup','+htMolIds','vCompnds','javajs.util.Lst','+vBiomolecules','+vTlsModels','sbTlsErrors','javajs.util.SB','biomtChainAtomCounts','int[]','sbIgnored','javajs.util.SB','+sbSelected','+sbConect','+sb','currentCompnd','java.util.Map','+htGroup1','dataT','float[]','tlsU','java.util.Map','vConnect','javajs.util.Lst','connectLast','int[]']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.allowPDBFilter=true;
this.pdbHeader=(this.getHeader ? Clazz.new_($I$(2,1)) : null);
this.applySymmetry=!this.checkFilterKey$S("NOSYMMETRY");
if (this.isDSSP1) this.asc.setInfo$S$O("isDSSP1", $I$(3).TRUE);
this.getTlsGroups=this.checkFilterKey$S("TLS");
if (this.checkFilterKey$S("ASSEMBLY")) this.filter=$I$(4).rep$S$S$S(this.filter, "ASSEMBLY", "BIOMOLECULE");
this.isbiomol=this.checkFilterKey$S("BIOMOLECULE");
if (this.isbiomol) this.filter=this.filter.replace$C$C(":", " ");
var byChain=this.isbiomol && this.checkFilterKey$S("BYCHAIN") ;
var bySymop=this.isbiomol && this.checkFilterKey$S("BYSYMOP") ;
this.isCourseGrained=byChain || bySymop ;
if (!this.isCourseGrained) this.setIsPDB$();
this.isConcatenated|=this.filePath.endsWith$S(".dssr");
if (this.htParams.containsKey$O("vTlsModels")) {
this.vTlsModels=this.htParams.remove$O("vTlsModels");
}var s=this.getFilter$S("TYPE ");
if (s != null ) {
var tokens=(function(a,f){return f.apply(null,a)})([s.replace$C$C(",", " ")],$I$(4).getTokens$S);
this.atomTypePt0=Integer.parseInt$S(tokens[0]) - 1;
var pt=tokens[1].indexOf$S("=");
if (pt >= 0) {
this.setFilterAtomTypeStr$S(tokens[1].substring$I(pt + 1).toUpperCase$());
} else {
pt=tokens[1].length$();
}this.atomTypeLen=Integer.parseInt$S(tokens[1].substring$I$I(0, pt));
}var conf=this.getFilter$S("CONF ");
if (conf != null ) {
this.configurationPtr=this.parseIntStr$S(conf);
this.sbIgnored=Clazz.new_($I$(2,1));
this.sbSelected=Clazz.new_($I$(2,1));
}this.isLegacyModelType=(this.stateScriptVersionInt < 120000);
this.isConnectStateBug=(this.stateScriptVersionInt >= 120151 && this.stateScriptVersionInt <= 120220  || this.stateScriptVersionInt >= 120300 && this.stateScriptVersionInt <= 120320  );
});

Clazz.newMeth(C$, 'checkLine$', function () {
var ptOption=((this.lineLength=this.line.length$()) < 6 ? -1 : "ATOM    HETATM  MODEL   CONECT  HELIX   SHEET   TURN    HET     HETNAM  ANISOU  SITE    CRYST1  SCALE1  SCALE2  SCALE3  EXPDTA  FORMUL  REMARK  HEADER  COMPND  SOURCE  TITLE   SEQADV  ".indexOf$S(this.line.substring$I$I(0, 6))) >> 3;
var isAtom=(ptOption == 0 || ptOption == 1 );
var isModel=(ptOption == 2);
this.serial=(isAtom ? p$1.getSerial$I$I.apply(this, [6, 11]) : 0);
var forceNewModel=((this.isTrajectory || this.isSequential ) && !this.isMultiModel && isAtom && this.serial == 1  );
if (this.getHeader) {
if (isAtom || isModel ) this.getHeader=false;
 else p$1.readHeader$Z.apply(this, [false]);
}if (isModel || forceNewModel ) {
this.isMultiModel=isModel;
this.getHeader=false;
var modelNo=(forceNewModel ? this.modelNumber + 1 : p$1.getModelNumber.apply(this, []));
this.modelNumber=(this.useFileModelNumbers ? modelNo : this.modelNumber + 1);
if (!this.doGetModel$I$S(this.modelNumber, null)) {
p$1.handleTlsMissingModels.apply(this, []);
var isOK=this.checkLastModel$();
if (!isOK && this.isConcatenated ) isOK=this.continuing=true;
return isOK;
}if (!this.isCourseGrained) p$1.connectAll$I$Z.apply(this, [this.maxSerial, this.isConnectStateBug]);
if (this.ac > 0) this.applySymmetryAndSetTrajectory$();
this.model$I(modelNo);
if (this.isLegacyModelType || !isAtom ) return true;
}if (this.isMultiModel && !this.doProcessLines ) {
return true;
}if (isAtom) {
this.getHeader=false;
p$1.atom.apply(this, []);
return true;
}switch (ptOption) {
case 3:
p$1.conect.apply(this, []);
return true;
case 4:
case 5:
case 6:
if (!this.ignoreStructure) p$1.structure.apply(this, []);
return true;
case 7:
p$1.het.apply(this, []);
return true;
case 8:
p$1.hetnam.apply(this, []);
return true;
case 9:
p$1.anisou.apply(this, []);
return true;
case 10:
p$1.site.apply(this, []);
return true;
case 11:
p$1.cryst1.apply(this, []);
return true;
case 12:
case 13:
case 14:
p$1.scale$I.apply(this, [ptOption - 11]);
return true;
case 15:
p$1.expdta.apply(this, []);
return true;
case 16:
p$1.formul.apply(this, []);
return true;
case 17:
if (this.line.startsWith$S("REMARK 285")) return p$1.remark285.apply(this, []);
if (this.line.startsWith$S("REMARK 350")) return p$1.remark350.apply(this, []);
if (this.line.startsWith$S("REMARK 290")) return p$1.remark290.apply(this, []);
if (this.line.contains$CharSequence("This file does not adhere to the PDB standard")) {
this.gromacsWideFormat=true;
}if (this.getTlsGroups) {
if (this.line.indexOf$S("TLS DETAILS") > 0) return p$1.remarkTls.apply(this, []);
}this.checkRemark$();
return true;
case 18:
p$1.header.apply(this, []);
return true;
case 19:
case 20:
p$1.compnd$Z.apply(this, [ptOption == 20]);
return true;
case 21:
p$1.title.apply(this, []);
return true;
case 22:
p$1.seqAdv.apply(this, []);
return true;
}
return true;
});

Clazz.newMeth(C$, 'checkRemark$', function () {
this.checkCurrentLineForScript$();
});

Clazz.newMeth(C$, 'seqAdv', function () {
var g1=this.line.substring$I$I(39, 42).trim$().toLowerCase$();
if (g1.length$() != 1) return;
if (this.htGroup1 == null ) this.asc.setInfo$S$O("htGroup1", this.htGroup1=Clazz.new_($I$(1,1)));
var g3=this.line.substring$I$I(12, 15).trim$();
this.htGroup1.put$O$O(g3, g1);
}, p$1);

Clazz.newMeth(C$, 'readHeader$Z', function (getLine) {
if (getLine) {
this.rd$();
if (!this.getHeader) return this.line;
}this.pdbHeader.append$S(this.line).appendC$C("\n");
return this.line;
}, p$1);

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.finalizeReaderPDB$();
});

Clazz.newMeth(C$, 'finalizeReaderPDB$', function () {
p$1.checkNotPDB.apply(this, []);
if (this.pdbID != null ) {
this.asc.setAtomSetName$S(this.pdbID);
this.asc.setCurrentModelInfo$S$O("pdbID", this.pdbID);
}p$1.checkUnitCellParams.apply(this, []);
if (!this.isCourseGrained) p$1.connectAll$I$Z.apply(this, [this.maxSerial, this.isConnectStateBug]);
var symmetry;
if (this.vBiomolecules != null  && this.vBiomolecules.size$() > 0  && this.asc.ac > 0 ) {
this.asc.setCurrentModelInfo$S$O("biomolecules", this.vBiomolecules);
p$1.setBiomoleculeAtomCounts.apply(this, []);
if (this.thisBiomolecule != null  && this.applySymmetry ) {
this.asc.getXSymmetry$().applySymmetryBio$java_util_Map$Z$S(this.thisBiomolecule, this.applySymmetryToBonds, this.filter);
this.vTlsModels=null;
this.asc.xtalSymmetry=null;
}}if (this.vTlsModels != null ) {
symmetry=this.getInterface$S("org.jmol.symmetry.Symmetry");
var n=this.asc.atomSetCount;
if (n == this.vTlsModels.size$()) {
for (var i=n; --i >= 0; ) p$1.setTlsGroups$I$I$org_jmol_api_SymmetryInterface.apply(this, [i, i, symmetry]);

} else {
(function(a,f){return f.apply(null,a)})([n + " models but " + this.vTlsModels.size$() + " TLS descriptions" ],$I$(5).info$S);
if (this.vTlsModels.size$() == 1) {
$I$(5).info$S(" -- assuming all models have the same TLS description -- check REMARK 3 for details.");
for (var i=n; --i >= 0; ) p$1.setTlsGroups$I$I$org_jmol_api_SymmetryInterface.apply(this, [0, i, symmetry]);

}}p$1.checkForResidualBFactors$org_jmol_api_SymmetryInterface.apply(this, [symmetry]);
}if (this.sbTlsErrors != null ) {
this.asc.setInfo$S$O("tlsErrors", this.sbTlsErrors.toString());
this.appendLoadNote$S(this.sbTlsErrors.toString());
}this.doCheckUnitCell&=this.iHaveUnitCell && this.doApplySymmetry ;
if (this.doCheckUnitCell && this.isbiomol ) {
this.ignoreFileSpaceGroupName=true;
this.sgName=this.fileSgName;
this.fractionalizeCoordinates$Z(true);
this.asc.setModelInfoForSet$S$O$I("biosymmetry", null, this.asc.iSet);
this.asc.checkSpecial=false;
}if (this.latticeCells != null  && this.latticeCells[0] != 0 ) this.addJmolScript$S("unitcell;axes on;axes unitcell;");
this.finalizeReaderASCR$();
if (this.vCompnds != null ) {
this.asc.setInfo$S$O("compoundSource", this.vCompnds);
for (var i=this.asc.iSet + 1; --i >= 0; ) this.asc.setModelInfoForSet$S$O$I("compoundSource", this.vCompnds, i);

}if (this.htSites != null ) {
this.addSites$java_util_Map(this.htSites);
}if (this.pdbHeader != null ) this.asc.setInfo$S$O("fileHeader", this.pdbHeader.toString());
if (this.configurationPtr > 0) {
(function(a,f){return f.apply(null,a)})([this.sbSelected.toString()],$I$(5).info$S);
(function(a,f){return f.apply(null,a)})([this.sbIgnored.toString()],$I$(5).info$S);
}});

Clazz.newMeth(C$, 'checkUnitCellParams', function () {
if (this.iHaveUnitCell) {
this.asc.setCurrentModelInfo$S$O("unitCellParams", this.unitCellParams);
if (this.sgName != null ) this.asc.setCurrentModelInfo$S$O("spaceGroup", this.sgName);
}}, p$1);

Clazz.newMeth(C$, 'checkForResidualBFactors$org_jmol_api_SymmetryInterface', function (symmetry) {
var atoms=this.asc.atoms;
var isResidual=false;
for (var i=this.asc.ac; --i >= 0; ) {
var anisou=this.tlsU.get$O(atoms[i]);
if (anisou == null ) continue;
var resid=anisou[7] - (anisou[0] + anisou[1] + anisou[2] ) / 3.0;
if (resid < 0  || Float.isNaN$F(resid) ) {
isResidual=true;
break;
}}
(function(a,f){return f.apply(null,a)})(["TLS analysis suggests Bfactors are " + (isResidual ? "" : "NOT") + " residuals" ],$I$(5).info$S);
for (var entry, $entry = this.tlsU.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var anisou=entry.getValue$();
var resid=anisou[7];
if (resid == 0 ) continue;
if (!isResidual) resid -= (anisou[0] + anisou[1] + anisou[2] ) / 3.0;
anisou[0] += resid;
anisou[1] += resid;
anisou[2] += resid;
entry.getKey$().addTensor$org_jmol_util_Tensor$S$Z(symmetry.getTensor$org_jmol_viewer_Viewer$FA(this.vwr, anisou).setType$S(null), "TLS-R", false);
(function(a,f){return f.apply(null,a)})(["TLS-U:  " + $I$(6).eAF$FA(anisou)],$I$(5).info$S);
anisou=(entry.getKey$().anisoBorU);
if (anisou != null ) (function(a,f){return f.apply(null,a)})(["ANISOU: " + $I$(6).eAF$FA(anisou)],$I$(5).info$S);
}
this.tlsU=null;
}, p$1);

Clazz.newMeth(C$, 'header', function () {
if (this.lineLength < 8) return;
this.appendLoadNote$S(this.line.substring$I(7).trim$());
if (this.lineLength == 80) this.maxLength=72;
this.pdbID=(this.lineLength >= 66 ? this.line.substring$I$I(62, 66).trim$() : "");
if (this.pdbID.length$() == 4) {
this.asc.setCollectionName$S(this.pdbID);
this.asc.setInfo$S$O("havePDBHeaderName", $I$(3).TRUE);
}if (this.lineLength > 50) this.line=this.line.substring$I$I(0, 50);
this.asc.setInfo$S$O("CLASSIFICATION", this.line.substring$I(7).trim$());
}, p$1);

Clazz.newMeth(C$, 'title', function () {
if (this.lineLength > 10) this.appendLoadNote$S(this.line.substring$I$I(10, Math.min(this.maxLength, this.line.length$())).trim$());
}, p$1);

Clazz.newMeth(C$, 'compnd$Z', function (isSource) {
if (!isSource) {
if (this.compnd == null ) this.compnd="";
 else this.compnd += " ";
var s=this.line;
if (this.lineLength > 62) s=s.substring$I$I(0, 62);
this.compnd += s.substring$I(10).trim$();
this.asc.setInfo$S$O("COMPND", this.compnd);
}if (this.vCompnds == null ) {
if (isSource) return;
this.vCompnds=Clazz.new_($I$(7,1));
this.htMolIds=Clazz.new_($I$(1,1));
this.currentCompnd=Clazz.new_($I$(1,1));
this.currentCompnd.put$O$O("select", "(*)");
this.currentKey="MOLECULE";
this.htMolIds.put$O$O("", this.currentCompnd);
}if (isSource && this.resetKey ) {
this.resetKey=false;
this.currentKey="SOURCE";
this.currentCompnd=this.htMolIds.get$O("");
}this.line=this.line.substring$I$I(10, Math.min(this.lineLength, 72)).trim$();
var pt=this.line.indexOf$S(":");
if (pt < 0 || pt > 0 && this.line.charAt$I(pt - 1) == "\\"  ) pt=this.line.length$();
var key=this.line.substring$I$I(0, pt).trim$();
var value=(pt < this.line.length$() ? this.line.substring$I(pt + 1).trim$() : null);
if (key.equals$O("MOL_ID")) {
if (value == null ) return;
if (isSource) {
this.currentCompnd=this.htMolIds.remove$O(value);
return;
}this.currentCompnd=Clazz.new_($I$(1,1));
this.vCompnds.addLast$O(this.currentCompnd);
this.htMolIds.put$O$O(value, this.currentCompnd);
}if (this.currentCompnd == null ) return;
if (value == null ) {
value=this.currentCompnd.get$O(this.currentKey);
if (value == null ) value="";
value += key;
if (this.vCompnds.size$() == 0) this.vCompnds.addLast$O(this.currentCompnd);
} else {
this.currentKey=key;
}if (value.endsWith$S(";")) value=value.substring$I$I(0, value.length$() - 1);
this.currentCompnd.put$O$O(this.currentKey, value);
if (this.currentKey.equals$O("CHAIN")) this.currentCompnd.put$O$O("select", "(:" + (function(a,f){return f.apply(null,a)})([$I$(4).rep$S$S$S(value, ", ", ",:"), " ", ""],$I$(4).rep$S$S$S) + ")" );
}, p$1);

Clazz.newMeth(C$, 'setBiomoleculeAtomCounts', function () {
for (var i=this.vBiomolecules.size$(); --i >= 0; ) {
var biomolecule=this.vBiomolecules.get$I(i);
var biomts=biomolecule.get$O("biomts");
var biomtchains=biomolecule.get$O("chains");
var nTransforms=biomts.size$();
var nAtoms=0;
for (var k=nTransforms; --k >= 0; ) {
var chains=biomtchains.get$I(k);
for (var j=chains.length$() - 1; --j >= 0; ) if (chains.charAt$I(j) == ":") nAtoms+=this.biomtChainAtomCounts[0 + (chains.charCodeAt$I(j + 1))];

}
biomolecule.put$O$O("atomCount", Integer.valueOf$I(nAtoms));
}
}, p$1);

Clazz.newMeth(C$, 'remark350', function () {
var biomts=null;
var biomtchains=null;
this.vBiomolecules=Clazz.new_($I$(7,1));
this.biomtChainAtomCounts=Clazz.array(Integer.TYPE, [255]);
var title="";
var chainlist="";
var id="";
var needLine=true;
var info=null;
var nBiomt=0;
var mIdent=$I$(8).newM4$javajs_util_M4(null);
while (true){
if (needLine) p$1.readHeader$Z.apply(this, [true]);
 else needLine=true;
if (this.line == null  || !this.line.startsWith$S("REMARK 350") ) break;
try {
if (this.line.startsWith$S("REMARK 350 BIOMOLECULE:")) {
if (nBiomt > 0) $I$(5).info$S("biomolecule " + id + ": number of transforms: " + nBiomt );
info=Clazz.new_($I$(1,1));
id=this.line.substring$I(this.line.indexOf$S(":") + 1).trim$();
title=this.line.trim$();
info.put$O$O("name", "biomolecule " + id);
info.put$O$O("molecule", id.length$() == 3 ? id : Integer.valueOf$I(this.parseIntStr$S(id)));
info.put$O$O("title", title);
info.put$O$O("chains", biomtchains=Clazz.new_($I$(7,1)));
info.put$O$O("biomts", biomts=Clazz.new_($I$(7,1)));
this.vBiomolecules.addLast$O(info);
nBiomt=0;
}if (this.line.indexOf$S("APPLY THE FOLLOWING TO CHAINS:") >= 0) {
if (info == null ) {
needLine=false;
this.line="REMARK 350 BIOMOLECULE: 1  APPLY THE FOLLOWING TO CHAINS:";
continue;
}var list=this.line.substring$I(41).trim$();
this.appendLoadNote$S("found biomolecule " + id + ": " + list );
chainlist=":" + list.replace$C$C(",", ";").replace$C$C(" ", ":");
needLine=false;
while (p$1.readHeader$Z.apply(this, [true]) != null  && this.line.indexOf$S("BIOMT") < 0  && this.line.indexOf$S("350") == 7 )chainlist += ":" + this.line.substring$I(11).trim$().replace$C$C(",", ";").replace$C$C(" ", ":");

chainlist += ";";
if (this.checkFilterKey$S("BIOMOLECULE " + id + ";" ) || this.checkFilterKey$S("BIOMOLECULE=" + id + ";" ) ) {
this.setFilter$S(this.filter + chainlist);
$I$(5).info$S("filter set to \"" + this.filter + "\"" );
this.thisBiomolecule=info;
}continue;
}if (this.line.startsWith$S("REMARK 350   BIOMT1 ")) {
nBiomt++;
var mat=Clazz.array(Float.TYPE, [16]);
for (var i=0; i < 12; ) {
var tokens=this.getTokens$();
mat[i++]=this.parseFloatStr$S(tokens[4]);
mat[i++]=this.parseFloatStr$S(tokens[5]);
mat[i++]=this.parseFloatStr$S(tokens[6]);
mat[i++]=this.parseFloatStr$S(tokens[7]);
if (i == 4 || i == 8 ) p$1.readHeader$Z.apply(this, [true]);
}
mat[15]=1;
var m4=Clazz.new_($I$(8,1));
m4.setA$FA(mat);
if (m4.equals$O(mIdent)) {
biomts.add$I$O(0, m4);
biomtchains.add$I$O(0, chainlist);
} else {
biomts.addLast$O(m4);
biomtchains.addLast$O(chainlist);
}continue;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.thisBiomolecule=null;
this.vBiomolecules=null;
return false;
} else {
throw e;
}
}
}
if (nBiomt > 0) $I$(5).info$S("biomolecule " + id + ": number of transforms: " + nBiomt );
return false;
}, p$1);

Clazz.newMeth(C$, 'remark285', function () {
return true;
}, p$1);

Clazz.newMeth(C$, 'remark290', function () {
while (p$1.readHeader$Z.apply(this, [true]) != null  && this.line.startsWith$S("REMARK 290") ){
if (this.line.indexOf$S("NNNMMM   OPERATOR") >= 0) {
while (p$1.readHeader$Z.apply(this, [true]) != null ){
var tokens=this.getTokens$();
if (tokens.length < 4) break;
if (this.doApplySymmetry || this.isbiomol ) this.setSymmetryOperator$S(tokens[3]);
}
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'getSerial$I$I', function (i, j) {
var c=this.line.charAt$I(i);
var isBase10=(c == " " || this.line.charAt$I(j - 1) == " " );
switch (this.serMode) {
default:
case 0:
if (isBase10) return this.parseIntRange$S$I$I(this.line, i, j);
try {
return this.serial=Integer.parseInt$S(this.line.substring$I$I(i, j));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.serMode=($I$(4).isDigit$C(c) ? 1 : 2);
return p$1.getSerial$I$I.apply(this, [i, j]);
} else {
throw e;
}
}
case 2:
return (isBase10 || $I$(4).isDigit$C(c)  ? this.parseIntRange$S$I$I(this.line, i, j) : (function(a,f){return f.apply(null,a)})([this.line.substring$I$I(i, j), 36],$I$(4).parseIntRadix$S$I) + ($I$(4).isUpperCase$C(c) ? -16696160 : 26973856));
case 1:
if (!isBase10) return this.serial=(function(a,f){return f.apply(null,a)})([this.line.substring$I$I(i, j), 16],$I$(4).parseIntRadix$S$I);
this.serMode=0;
return p$1.getSerial$I$I.apply(this, [i, j]);
}
}, p$1);

Clazz.newMeth(C$, 'getSeqNo$I$I', function (i, j) {
var c=this.line.charAt$I(i);
var isBase10=(c == " " || this.line.charAt$I(j - 1) == " " );
switch (this.seqMode) {
default:
case 0:
if (isBase10) return this.parseIntRange$S$I$I(this.line, i, j);
try {
return Integer.parseInt$S(this.line.substring$I$I(i, j));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.seqMode=($I$(4).isDigit$C(c) ? 1 : 2);
return p$1.getSeqNo$I$I.apply(this, [i, j]);
} else {
throw e;
}
}
case 2:
return (isBase10 || $I$(4).isDigit$C(c)  ? this.parseIntRange$S$I$I(this.line, i, j) : (function(a,f){return f.apply(null,a)})([this.line.substring$I$I(i, j), 36],$I$(4).parseIntRadix$S$I) + ($I$(4).isUpperCase$C(c) ? -456560 : 756496));
case 1:
if (!isBase10) return (function(a,f){return f.apply(null,a)})([this.line.substring$I$I(i, j), 16],$I$(4).parseIntRadix$S$I);
this.seqMode=0;
return p$1.getSeqNo$I$I.apply(this, [i, j]);
}
}, p$1);

Clazz.newMeth(C$, 'processAtom$org_jmol_adapter_smarter_Atom$S$C$S$I$I$C$Z$S', function (atom, name, altID, group3, chainID, seqNo, insCode, isHetero, sym) {
atom.atomName=name;
if (altID != " ") atom.altLoc=altID;
atom.group3=(group3 == null  ? "UNK" : group3);
atom.chainID=chainID;
if (this.biomtChainAtomCounts != null ) this.biomtChainAtomCounts[chainID % 256]++;
atom.sequenceNumber=seqNo;
atom.insertionCode=$I$(9).canonizeInsertionCode$C(insCode);
atom.isHetero=isHetero;
atom.elementSymbol=sym;
return atom;
});

Clazz.newMeth(C$, 'processAtom2$org_jmol_adapter_smarter_Atom$I$F$F$F$I', function (atom, serial, x, y, z, charge) {
atom.atomSerial=serial;
if (serial > this.maxSerial) this.maxSerial=serial;
if (atom.group3 == null ) {
if (this.currentGroup3 != null ) {
this.currentGroup3=null;
this.currentResno=-2147483648;
this.htElementsInCurrentGroup=null;
}} else if (!atom.group3.equals$O(this.currentGroup3) || atom.sequenceNumber != this.currentResno ) {
this.currentGroup3=atom.group3;
this.currentResno=atom.sequenceNumber;
this.htElementsInCurrentGroup=this.htFormul.get$O(atom.group3);
this.nRes++;
if (atom.group3.equals$O("UNK")) this.nUNK++;
}this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, x, y, z);
atom.formalCharge=charge;
this.setAdditionalAtomParameters$org_jmol_adapter_smarter_Atom(atom);
if (this.haveMappedSerials) this.asc.addAtomWithMappedSerialNumber$org_jmol_adapter_smarter_Atom(atom);
 else this.asc.addAtom$org_jmol_adapter_smarter_Atom(atom);
if (this.ac++ == 0 && !this.isCourseGrained ) this.setModelPDB$Z(true);
if (atom.isHetero) {
if (this.htHetero != null ) {
this.asc.setCurrentModelInfo$S$O("hetNames", this.htHetero);
this.htHetero=null;
}}});

Clazz.newMeth(C$, 'atom', function () {
var isHetero=this.line.startsWith$S("HETATM");
var atom=this.processAtom$org_jmol_adapter_smarter_Atom$S$C$S$I$I$C$Z$S(Clazz.new_($I$(10,1)), this.line.substring$I$I(12, 16).trim$(), this.line.charAt$I(16), this.parseTokenRange$S$I$I(this.line, 17, 20), this.vwr.getChainID$S$Z(this.line.substring$I$I(21, 22), true), p$1.getSeqNo$I$I.apply(this, [22, 26]), this.line.charAt$I(26), isHetero, this.deduceElementSymbol$Z(isHetero));
if (this.atomTypeLen > 0) {
var s=this.line.substring$I$I(this.atomTypePt0, this.atomTypePt0 + this.atomTypeLen).trim$();
if (s.length$() > 0) atom.atomName += "\u0000" + s;
}if (!this.filterPDBAtom$org_jmol_adapter_smarter_Atom$I(atom, this.fileAtomIndex++)) return;
var charge=0;
var x;
var y;
var z;
if (this.gromacsWideFormat) {
x=this.parseFloatRange$S$I$I(this.line, 30, 40);
y=this.parseFloatRange$S$I$I(this.line, 40, 50);
z=this.parseFloatRange$S$I$I(this.line, 50, 60);
} else {
if (this.lineLength >= 80) {
var chMagnitude=this.line.charAt$I(78);
var chSign=this.line.charAt$I(79);
if (chSign >= "0" && chSign <= "7" ) {
var chT=chSign;
chSign=chMagnitude;
chMagnitude=chT;
}if ((chSign == "+" || chSign == "-"  || chSign == " " ) && chMagnitude >= "0"  && chMagnitude <= "7" ) {
charge=chMagnitude.$c() - 48;
if (chSign == "-") charge=-charge;
}}x=this.parseFloatRange$S$I$I(this.line, 30, 38);
y=this.parseFloatRange$S$I$I(this.line, 38, 46);
z=this.parseFloatRange$S$I$I(this.line, 46, 54);
}this.processAtom2$org_jmol_adapter_smarter_Atom$I$F$F$F$I(atom, this.serial, x, y, z, charge);
}, p$1);

Clazz.newMeth(C$, 'filterPDBAtom$org_jmol_adapter_smarter_Atom$I', function (atom, iAtom) {
if (!this.filterAtom$org_jmol_adapter_smarter_Atom$I(atom, iAtom)) return false;
if (this.configurationPtr > 0) {
if (atom.sequenceNumber != this.lastGroup || atom.insertionCode != this.lastInsertion ) {
this.conformationIndex=this.configurationPtr - 1;
this.lastGroup=atom.sequenceNumber;
this.lastInsertion=atom.insertionCode;
this.lastAltLoc="\u0000";
}if (atom.altLoc != "\u0000") {
var msg=" atom [" + atom.group3 + "]" + atom.sequenceNumber + (atom.insertionCode == "\u0000" ? "" : "^" + atom.insertionCode) + (atom.chainID == 0 ? "" : ":" + this.vwr.getChainIDStr$I(atom.chainID)) + "." + atom.atomName + "%" + atom.altLoc + "\n" ;
if (this.conformationIndex >= 0 && atom.altLoc != this.lastAltLoc ) {
this.lastAltLoc=atom.altLoc;
this.conformationIndex--;
}if (this.conformationIndex < 0 && atom.altLoc != this.lastAltLoc ) {
this.sbIgnored.append$S("ignoring").append$S(msg);
return false;
}this.sbSelected.append$S("loading").append$S(msg);
}}return true;
});

Clazz.newMeth(C$, 'setAdditionalAtomParameters$org_jmol_adapter_smarter_Atom', function (atom) {
var floatOccupancy;
if (this.gromacsWideFormat) {
floatOccupancy=this.parseFloatRange$S$I$I(this.line, 60, 68);
atom.bfactor=C$.fixRadius$F(this.parseFloatRange$S$I$I(this.line, 68, 76));
} else {
floatOccupancy=this.parseFloatRange$S$I$I(this.line, 54, 60);
atom.bfactor=this.parseFloatRange$S$I$I(this.line, 60, 66);
}atom.foccupancy=(Float.isNaN$F(floatOccupancy) ? 1 : floatOccupancy);
});

Clazz.newMeth(C$, 'deduceElementSymbol$Z', function (isHetero) {
if (this.lineLength >= 78) {
var ch76=this.line.charAt$I(76);
var ch77=this.line.charAt$I(77);
if (ch76 == " " && $I$(10).isValidSym1$C(ch77) ) return "" + ch77;
if ($I$(10).isValidSymNoCase$C$C(ch76, ch77)) return "" + ch76 + ch77 ;
}var ch12=this.line.charAt$I(12);
var ch13=this.line.charAt$I(13);
if ((this.htElementsInCurrentGroup == null  || this.htElementsInCurrentGroup.get$O(this.line.substring$I$I(12, 14)) != null  ) && $I$(10).isValidSymNoCase$C$C(ch12, ch13) ) return (isHetero || ch12 != "H"  ? "" + ch12 + ch13  : "H");
if (ch12 == "H") return "H";
if ((this.htElementsInCurrentGroup == null  || this.htElementsInCurrentGroup.get$O("" + ch13) != null  ) && $I$(10).isValidSym1$C(ch13) ) return "" + ch13;
if (ch12 != " " && (this.htElementsInCurrentGroup == null  || this.htElementsInCurrentGroup.get$O("" + ch12) != null  )  && $I$(10).isValidSym1$C(ch12) ) return "" + ch12;
var ch14=this.line.charAt$I(14);
if (ch12 == " " && ch13 != "X"  && (this.htElementsInCurrentGroup == null  || this.htElementsInCurrentGroup.get$O(this.line.substring$I$I(13, 15)) != null  )  && $I$(10).isValidSymNoCase$C$C(ch13, ch14) ) return "" + ch13 + ch14 ;
return "Xx";
});

Clazz.newMeth(C$, 'conect', function () {
if (this.sbConect == null ) {
this.sbConect=Clazz.new_($I$(2,1));
this.sb=Clazz.new_($I$(2,1));
} else {
this.sb.setLength$I(0);
}var sourceSerial=p$1.getSerial$I$I.apply(this, [6, 11]);
if (sourceSerial < 0) return;
var order=1;
var pt1=this.line.trim$().length$();
if (pt1 > 56) pt1=this.line.substring$I$I(0, 56).trim$().length$();
for (var pt=11; pt < pt1; pt+=5) {
switch (pt) {
case 31:
order=2048;
break;
case 41:
continue;
}
var targetSerial=p$1.getSerial$I$I.apply(this, [pt, pt + 5]);
if (targetSerial < 0) continue;
var isDoubleBond=(sourceSerial == this.lastSourceSerial && targetSerial == this.lastTargetSerial );
if (isDoubleBond) this.haveDoubleBonds=true;
this.lastSourceSerial=sourceSerial;
this.lastTargetSerial=targetSerial;
var isSwapped=(targetSerial < sourceSerial);
var i1;
if (isSwapped) {
i1=targetSerial;
targetSerial=sourceSerial;
} else {
i1=sourceSerial;
}var st=";" + i1 + " " + targetSerial + ";" ;
if (this.sbConect.indexOf$S(st) >= 0 && !isDoubleBond ) continue;
if (this.haveDoubleBonds) {
var st1="--" + st;
if (this.sbConect.indexOf$S(st1) >= 0) continue;
this.sb.append$S(st1);
}this.sbConect.append$S(st);
p$1.addConnection$IA.apply(this, [Clazz.array(Integer.TYPE, -1, [i1, targetSerial, order])]);
}
this.sbConect.appendSB$javajs_util_SB(this.sb);
}, p$1);

Clazz.newMeth(C$, 'structure', function () {
var structureType=$I$(11).NONE;
var substructureType=$I$(11).NONE;
var startChainIDIndex;
var startIndex;
var endChainIDIndex;
var endIndex;
var strandCount=0;
if (this.line.startsWith$S("HELIX ")) {
structureType=$I$(11).HELIX;
startChainIDIndex=19;
startIndex=21;
endChainIDIndex=31;
endIndex=33;
if (this.line.length$() >= 40) substructureType=(function(a,f){return f.apply(null,a)})([this.parseIntRange$S$I$I(this.line, 38, 40)],$I$(12).getHelixType$I);
} else if (this.line.startsWith$S("SHEET ")) {
structureType=$I$(11).SHEET;
startChainIDIndex=21;
startIndex=22;
endChainIDIndex=32;
endIndex=33;
strandCount=this.parseIntRange$S$I$I(this.line, 14, 16);
} else if (this.line.startsWith$S("TURN  ")) {
structureType=$I$(11).TURN;
startChainIDIndex=19;
startIndex=20;
endChainIDIndex=30;
endIndex=31;
} else return;
if (this.lineLength < endIndex + 4) return;
var structureID=this.line.substring$I$I(11, 15).trim$();
var serialID=this.parseIntRange$S$I$I(this.line, 7, 10);
var startChainID=this.vwr.getChainID$S$Z(this.line.substring$I$I(startChainIDIndex, startChainIDIndex + 1), true);
var startSequenceNumber=this.parseIntRange$S$I$I(this.line, startIndex, startIndex + 4);
var startInsertionCode=this.line.charAt$I(startIndex + 4);
var endChainID=this.vwr.getChainID$S$Z(this.line.substring$I$I(endChainIDIndex, endChainIDIndex + 1), true);
var endSequenceNumber=this.parseIntRange$S$I$I(this.line, endIndex, endIndex + 4);
var endInsertionCode=" ";
if (this.lineLength > endIndex + 4) endInsertionCode=this.line.charAt$I(endIndex + 4);
if (substructureType === $I$(11).NONE ) substructureType=structureType;
var structure=Clazz.new_($I$(12,1).c$$I$org_jmol_c_STR$org_jmol_c_STR$S$I$I$javajs_util_BSA,[-1, structureType, substructureType, structureID, serialID, strandCount, null]);
structure.set$I$I$C$I$I$C$I$I(startChainID, startSequenceNumber, startInsertionCode, endChainID, endSequenceNumber, endInsertionCode, -2147483648, 2147483647);
this.asc.addStructure$org_jmol_adapter_smarter_Structure(structure);
}, p$1);

Clazz.newMeth(C$, 'getModelNumber', function () {
var startModelColumn=6;
var endModelColumn=14;
if (endModelColumn > this.lineLength) endModelColumn=this.lineLength;
var iModel=this.parseIntRange$S$I$I(this.line, startModelColumn, endModelColumn);
return (iModel == -2147483648 ? 0 : iModel);
}, p$1);

Clazz.newMeth(C$, 'model$I', function (modelNumber) {
p$1.checkNotPDB.apply(this, []);
this.haveMappedSerials=false;
this.sbConect=null;
this.asc.newAtomSet$();
this.asc.setCurrentModelInfo$S$O("pdbID", this.pdbID);
if (this.asc.iSet == 0 || this.isTrajectory ) this.asc.setAtomSetName$S(this.pdbID);
 else this.asc.setCurrentModelInfo$S$O("name", this.pdbID);
p$1.checkUnitCellParams.apply(this, []);
if (!this.isCourseGrained) this.setModelPDB$Z(true);
this.asc.setCurrentAtomSetNumber$I(modelNumber);
if (this.isCourseGrained) this.asc.setCurrentModelInfo$S$O("courseGrained", $I$(3).TRUE);
});

Clazz.newMeth(C$, 'checkNotPDB', function () {
var isPDB=(!this.isCourseGrained && (this.nRes == 0 || this.nUNK != this.nRes ) );
this.asc.checkSpecial=!isPDB;
this.setModelPDB$Z(isPDB);
this.nUNK=this.nRes=0;
this.currentGroup3=null;
}, p$1);

Clazz.newMeth(C$, 'cryst1', function () {
var a=this.cryst1=p$1.getFloat$I$I.apply(this, [6, 9]);
if (a == 1 ) a=NaN;
this.setUnitCell$F$F$F$F$F$F(a, p$1.getFloat$I$I.apply(this, [15, 9]), p$1.getFloat$I$I.apply(this, [24, 9]), p$1.getFloat$I$I.apply(this, [33, 7]), p$1.getFloat$I$I.apply(this, [40, 7]), p$1.getFloat$I$I.apply(this, [47, 7]));
if (this.isbiomol) this.doConvertToFractional=false;
if (this.sgName == null  || this.sgName.equals$O("unspecified!") ) this.setSpaceGroupName$S($I$(4).parseTrimmedRange$S$I$I(this.line, 55, 66));
this.fileSgName=this.sgName;
}, p$1);

Clazz.newMeth(C$, 'getFloat$I$I', function (ich, cch) {
return this.parseFloatRange$S$I$I(this.line, ich, ich + cch);
}, p$1);

Clazz.newMeth(C$, 'scale$I', function (n) {
if (this.unitCellParams == null ) return;
var pt=n * 4 + 2;
this.unitCellParams[0]=this.cryst1;
this.setUnitCellItem$I$F(pt++, p$1.getFloat$I$I.apply(this, [10, 10]));
this.setUnitCellItem$I$F(pt++, p$1.getFloat$I$I.apply(this, [20, 10]));
this.setUnitCellItem$I$F(pt++, p$1.getFloat$I$I.apply(this, [30, 10]));
this.setUnitCellItem$I$F(pt++, p$1.getFloat$I$I.apply(this, [45, 10]));
if (this.isbiomol) this.doConvertToFractional=false;
}, p$1);

Clazz.newMeth(C$, 'expdta', function () {
if (this.line.toUpperCase$().indexOf$S("NMR") >= 0) this.asc.setInfo$S$O("isNMRdata", "true");
}, p$1);

Clazz.newMeth(C$, 'formul', function () {
var groupName=this.parseTokenRange$S$I$I(this.line, 12, 15);
var formula=$I$(4).parseTrimmedRange$S$I$I(this.line, 19, 70);
var ichLeftParen=formula.indexOf$I("(");
if (ichLeftParen >= 0) {
var ichRightParen=formula.indexOf$I(")");
if (ichRightParen < 0 || ichLeftParen >= ichRightParen  || ichLeftParen + 1 == ichRightParen ) return;
formula=$I$(4).parseTrimmedRange$S$I$I(formula, ichLeftParen + 1, ichRightParen);
}var htElementsInGroup=this.htFormul.get$O(groupName);
if (htElementsInGroup == null ) this.htFormul.put$O$O(groupName, htElementsInGroup=Clazz.new_($I$(1,1)));
this.next[0]=0;
var elementWithCount;
while ((elementWithCount=this.parseTokenNext$S(formula)) != null ){
if (elementWithCount.length$() < 2) continue;
var chFirst=elementWithCount.charAt$I(0);
var chSecond=elementWithCount.charAt$I(1);
if ($I$(10).isValidSymNoCase$C$C(chFirst, chSecond)) htElementsInGroup.put$O$O("" + chFirst + chSecond , $I$(3).TRUE);
 else if ($I$(10).isValidSym1$C(chFirst)) htElementsInGroup.put$O$O("" + chFirst, $I$(3).TRUE);
}
}, p$1);

Clazz.newMeth(C$, 'het', function () {
if (this.line.length$() < 30) {
return;
}if (this.htHetero == null ) {
this.htHetero=Clazz.new_($I$(1,1));
}var groupName=this.parseTokenRange$S$I$I(this.line, 7, 10);
if (this.htHetero.containsKey$O(groupName)) {
return;
}var hetName=$I$(4).parseTrimmedRange$S$I$I(this.line, 30, 70);
this.htHetero.put$O$O(groupName, hetName);
}, p$1);

Clazz.newMeth(C$, 'hetnam', function () {
if (this.htHetero == null ) {
this.htHetero=Clazz.new_($I$(1,1));
}var groupName=this.parseTokenRange$S$I$I(this.line, 11, 14);
var hetName=$I$(4).parseTrimmedRange$S$I$I(this.line, 15, 70);
if (groupName == null ) {
$I$(5).error$S("ERROR: HETNAM record does not contain a group name: " + this.line);
return;
}var htName=this.htHetero.get$O(groupName);
if (htName != null ) {
hetName=htName + hetName;
}this.htHetero.put$O$O(groupName, hetName);
this.appendLoadNote$S(groupName + " = " + hetName );
}, p$1);

Clazz.newMeth(C$, 'anisou', function () {
var data=Clazz.array(Float.TYPE, [8]);
data[6]=1;
var serial=this.line.substring$I$I(6, 11).trim$();
if (!this.haveMappedSerials && this.asc.ac > 0 ) {
for (var i=this.asc.getAtomSetAtomIndex$I(this.asc.iSet); i < this.asc.ac; i++) {
var atomSerial=this.asc.atoms[i].atomSerial;
if (atomSerial != -2147483648) this.asc.atomSymbolicMap.put$O$O("" + atomSerial, this.asc.atoms[i]);
}
this.haveMappedSerials=true;
}var atom=this.asc.getAtomFromName$S(serial);
if (atom == null ) {
return;
}for (var i=28, pt=0; i < 70; i+=7, pt++) data[pt]=this.parseFloatRange$S$I$I(this.line, i, i + 7);

for (var i=0; i < 6; i++) {
if (Float.isNaN$F(data[i])) {
$I$(5).error$S("Bad ANISOU record: " + this.line);
return;
}data[i] /= 10000.0;
}
this.asc.setAnisoBorU$org_jmol_adapter_smarter_Atom$FA$I(atom, data, 12);
}, p$1);

Clazz.newMeth(C$, 'site', function () {
if (this.htSites == null ) {
this.htSites=Clazz.new_($I$(1,1));
}var nResidues=this.parseIntRange$S$I$I(this.line, 15, 17);
var siteID=$I$(4).parseTrimmedRange$S$I$I(this.line, 11, 14);
var htSite=this.htSites.get$O(siteID);
if (htSite == null ) {
htSite=Clazz.new_($I$(1,1));
htSite.put$O$O("nResidues", Integer.valueOf$I(nResidues));
htSite.put$O$O("groups", "");
this.htSites.put$O$O(siteID, htSite);
}var groups=htSite.get$O("groups");
for (var i=0; i < 4; i++) {
var pt=18 + i * 11;
var resName=$I$(4).parseTrimmedRange$S$I$I(this.line, pt, pt + 3);
if (resName.length$() == 0) break;
var chainID=$I$(4).parseTrimmedRange$S$I$I(this.line, pt + 4, pt + 5);
var seq=$I$(4).parseTrimmedRange$S$I$I(this.line, pt + 5, pt + 9);
var iCode=$I$(4).parseTrimmedRange$S$I$I(this.line, pt + 9, pt + 10);
groups += (groups.length$() == 0 ? "" : ",") + "[" + resName + "]" + seq ;
if (iCode.length$() > 0) groups += "^" + iCode;
if (chainID.length$() > 0) groups += ":" + chainID;
htSite.put$O$O("groups", groups);
}
}, p$1);

Clazz.newMeth(C$, 'remarkTls', function () {
var nGroups=0;
var iGroup=0;
var components=null;
var tlsGroups=null;
var tlsGroup=null;
var ranges=null;
var range=null;
var remark=this.line.substring$I$I(0, 11);
while (p$1.readHeader$Z.apply(this, [true]) != null  && this.line.startsWith$S(remark) ){
try {
var tokens=(function(a,f){return f.apply(null,a)})([this.line.substring$I(10).replace$C$C(":", " ")],$I$(4).getTokens$S);
if (tokens.length < 2) continue;
$I$(5).info$S(this.line);
if (tokens[1].equalsIgnoreCase$S("GROUP")) {
tlsGroup=Clazz.new_($I$(1,1));
ranges=Clazz.new_($I$(7,1));
tlsGroup.put$O$O("ranges", ranges);
tlsGroups.addLast$O(tlsGroup);
this.tlsGroupID=this.parseIntStr$S(tokens[tokens.length - 1]);
tlsGroup.put$O$O("id", Integer.valueOf$I(this.tlsGroupID));
} else if (tokens[0].equalsIgnoreCase$S("NUMBER")) {
if (tokens[2].equalsIgnoreCase$S("COMPONENTS")) {
} else {
nGroups=this.parseIntStr$S(tokens[tokens.length - 1]);
if (nGroups < 1) break;
if (this.vTlsModels == null ) this.vTlsModels=Clazz.new_($I$(7,1));
tlsGroups=Clazz.new_($I$(7,1));
this.appendLoadNote$S(this.line.substring$I(11).trim$());
}} else if (tokens[0].equalsIgnoreCase$S("COMPONENTS")) {
components=this.line;
} else if (tokens[0].equalsIgnoreCase$S("RESIDUE")) {
range=Clazz.new_($I$(1,1));
var chain1;
var chain2;
var res1;
var res2;
if (tokens.length == 6) {
chain1=tokens[2].charAt$I(0);
chain2=tokens[4].charAt$I(0);
res1=this.parseIntStr$S(tokens[3]);
res2=this.parseIntStr$S(tokens[5]);
} else {
var toC=components.indexOf$S(" C ");
var fromC=components.indexOf$S$I(" C ", toC + 4);
chain1=this.line.charAt$I(fromC);
chain2=this.line.charAt$I(toC);
res1=this.parseIntRange$S$I$I(this.line, fromC + 1, toC);
res2=this.parseIntStr$S(this.line.substring$I(toC + 1));
}if (chain1 == chain2) {
range.put$O$O("chains", "" + chain1 + chain2 );
if (res1 <= res2) {
range.put$O$O("residues", Clazz.array(Integer.TYPE, -1, [res1, res2]));
ranges.addLast$O(range);
} else {
p$1.tlsAddError$S.apply(this, [" TLS group residues are not in order (range ignored)"]);
}} else {
p$1.tlsAddError$S.apply(this, [" TLS group chains are different (range ignored)"]);
}} else if (tokens[0].equalsIgnoreCase$S("SELECTION")) {
var chain="\u0000";
for (var i=1; i < tokens.length; i++) {
if (tokens[i].toUpperCase$().indexOf$S("CHAIN") >= 0) {
chain=tokens[++i].charAt$I(0);
continue;
}var resno=this.parseIntStr$S(tokens[i]);
if (resno == -2147483648) continue;
range=Clazz.new_($I$(1,1));
range.put$O$O("residues", Clazz.array(Integer.TYPE, -1, [resno, this.parseIntStr$S(tokens[++i])]));
if (chain != "\u0000") range.put$O$O("chains", "" + chain + chain );
ranges.addLast$O(range);
}
} else if (tokens[0].equalsIgnoreCase$S("ORIGIN")) {
var origin=Clazz.new_($I$(13,1));
tlsGroup.put$O$O("origin", origin);
if (tokens.length == 8) {
origin.set$F$F$F(this.parseFloatStr$S(tokens[5]), this.parseFloatStr$S(tokens[6]), this.parseFloatStr$S(tokens[7]));
} else {
var n=this.line.length$();
origin.set$F$F$F(this.parseFloatRange$S$I$I(this.line, n - 27, n - 18), this.parseFloatRange$S$I$I(this.line, n - 18, n - 9), this.parseFloatRange$S$I$I(this.line, n - 9, n));
}if (Float.isNaN$F(origin.x) || Float.isNaN$F(origin.y) || Float.isNaN$F(origin.z)  ) {
origin.set$F$F$F(NaN, NaN, NaN);
p$1.tlsAddError$S.apply(this, ["invalid origin: " + this.line]);
}} else if (tokens[1].equalsIgnoreCase$S("TENSOR")) {
var tensorType=tokens[0].charAt$I(0);
var s=(p$1.readHeader$Z.apply(this, [true]).substring$I(10) + p$1.readHeader$Z.apply(this, [true]).substring$I(10) + p$1.readHeader$Z.apply(this, [true]).substring$I(10) ).replace$C$C(tensorType, " ").replace$C$C(":", " ");
tokens=$I$(4).getTokens$S(s);
var data=Clazz.array(Float.TYPE, [3, 3]);
tlsGroup.put$O$O("t" + tensorType, data);
for (var i=0; i < tokens.length; i++) {
var ti=(tokens[i].charCodeAt$I(0)) - 49;
var tj=(tokens[i].charCodeAt$I(1)) - 49;
data[ti][tj]=this.parseFloatStr$S(tokens[++i]);
if (ti < tj) data[tj][ti]=data[ti][tj];
}
for (var i=0; i < 3; i++) for (var j=0; j < 3; j++) if (Float.isNaN$F(data[i][j])) p$1.tlsAddError$S.apply(this, ["invalid tensor: " + $I$(6).escapeFloatAA$FAA$Z(data, false)]);


if (tensorType == "S" && ++iGroup == nGroups ) {
$I$(5).info$S(nGroups + " TLS groups read");
p$1.readHeader$Z.apply(this, [true]);
break;
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).error$S(this.line + "\nError in TLS parser: ");
System.out.println$S(e.getMessage$());
tlsGroups=null;
break;
} else {
throw e;
}
}
}
if (tlsGroups != null ) {
var tlsModel=Clazz.new_($I$(1,1));
tlsModel.put$O$O("groupCount", Integer.valueOf$I(nGroups));
tlsModel.put$O$O("groups", tlsGroups);
this.vTlsModels.addLast$O(tlsModel);
}return (nGroups < 1);
}, p$1);

Clazz.newMeth(C$, 'handleTlsMissingModels', function () {
this.vTlsModels=null;
}, p$1);

Clazz.newMeth(C$, 'setTlsGroups$I$I$org_jmol_api_SymmetryInterface', function (iGroup, iModel, symmetry) {
(function(a,f){return f.apply(null,a)})(["TLS model " + (iModel + 1) + " set " + (iGroup + 1) ],$I$(5).info$S);
var tlsGroupInfo=this.vTlsModels.get$I(iGroup);
var groups=tlsGroupInfo.get$O("groups");
var index0=this.asc.getAtomSetAtomIndex$I(iModel);
var data=Clazz.array(Float.TYPE, [this.asc.getAtomSetAtomCount$I(iModel)]);
var indexMax=index0 + data.length;
var atoms=this.asc.atoms;
var nGroups=groups.size$();
for (var i=0; i < nGroups; i++) {
var group=groups.get$I(i);
var ranges=group.get$O("ranges");
this.tlsGroupID=(group.get$O("id")).intValue$();
for (var j=ranges.size$(); --j >= 0; ) {
var chains=ranges.get$I(j).get$O("chains");
var residues=ranges.get$I(j).get$O("residues");
var chain0=0 + (chains.charCodeAt$I(0));
var chain1=0 + (chains.charCodeAt$I(1));
var res0=residues[0];
var res1=residues[1];
var index1=p$1.findAtomForRange$I$I$I$I$Z.apply(this, [index0, indexMax, chain0, res0, false]);
var index2=(index1 >= 0 ? p$1.findAtomForRange$I$I$I$I$Z.apply(this, [index1, indexMax, chain1, res1, false]) : -1);
if (index2 < 0) {
$I$(5).info$S("TLS processing terminated");
return;
}(function(a,f){return f.apply(null,a)})(["TLS ID=" + this.tlsGroupID + " model atom index range " + index1 + "-" + index2 ],$I$(5).info$S);
var isSameChain=(chain0 == chain1);
for (var iAtom=index0; iAtom < indexMax; iAtom++) {
var atom=atoms[iAtom];
if (isSameChain ? atom.sequenceNumber >= res0 && atom.sequenceNumber <= res1  : atom.chainID > chain0 && atom.chainID < chain1  || atom.chainID == chain0 && atom.sequenceNumber >= res0   || atom.chainID == chain1 && atom.sequenceNumber <= res1  ) {
data[iAtom - index0]=this.tlsGroupID;
p$1.setTlsTensor$org_jmol_adapter_smarter_Atom$java_util_Map$org_jmol_api_SymmetryInterface.apply(this, [atom, group, symmetry]);
}}
}
}
this.asc.setAtomProperties$S$O$I$Z("tlsGroup", data, iModel, true);
this.asc.setModelInfoForSet$S$O$I("TLS", tlsGroupInfo, iModel);
this.asc.setTensors$();
}, p$1);

Clazz.newMeth(C$, 'findAtomForRange$I$I$I$I$Z', function (atom1, atom2, chain, resno, isLast) {
var iAtom=p$1.findAtom$I$I$I$I$Z.apply(this, [atom1, atom2, chain, resno, true]);
return (isLast && iAtom >= 0  ? p$1.findAtom$I$I$I$I$Z.apply(this, [iAtom, atom2, chain, resno, false]) : iAtom);
}, p$1);

Clazz.newMeth(C$, 'findAtom$I$I$I$I$Z', function (atom1, atom2, chain, resno, isTrue) {
var atoms=this.asc.atoms;
for (var i=atom1; i < atom2; i++) {
var atom=atoms[i];
if ((atom.chainID == chain && atom.sequenceNumber == resno ) == isTrue ) return i;
}
if (isTrue) {
(function(a,f){return f.apply(null,a)})(["PdbReader findAtom chain=" + chain + " resno=" + resno + " not found" ],$I$(5).warn$S);
p$1.tlsAddError$S.apply(this, ["atom not found: chain=" + chain + " resno=" + resno ]);
}return (isTrue ? -1 : atom2);
}, p$1);

Clazz.newMeth(C$, 'setTlsTensor$org_jmol_adapter_smarter_Atom$java_util_Map$org_jmol_api_SymmetryInterface', function (atom, group, symmetry) {
var origin=group.get$O("origin");
if (Float.isNaN$F(origin.x)) return;
var T=group.get$O("tT");
var L=group.get$O("tL");
var S=group.get$O("tS");
if (T == null  || L == null   || S == null  ) return;
var x=(atom.x - origin.x) * 0.017453292;
var y=(atom.y - origin.y) * 0.017453292;
var z=(atom.z - origin.z) * 0.017453292;
var xx=x * x;
var yy=y * y;
var zz=z * z;
var xy=x * y;
var xz=x * z;
var yz=y * z;
this.dataT[0]=T[0][0];
this.dataT[1]=T[1][1];
this.dataT[2]=T[2][2];
this.dataT[3]=T[0][1];
this.dataT[4]=T[0][2];
this.dataT[5]=T[1][2];
this.dataT[6]=12;
var anisou=Clazz.array(Float.TYPE, [8]);
var bresidual=(Float.isNaN$F(atom.bfactor) ? 0 : atom.bfactor / 78.95683);
anisou[0]=this.dataT[0] + L[1][1] * zz + L[2][2] * yy - 2 * L[1][2] * yz  + 2 * S[1][0] * z  - 2 * S[2][0] * y ;
anisou[1]=this.dataT[1] + L[0][0] * zz + L[2][2] * xx - 2 * L[2][0] * xz  - 2 * S[0][1] * z  + 2 * S[2][1] * x ;
anisou[2]=this.dataT[2] + L[0][0] * yy + L[1][1] * xx - 2 * L[0][1] * xy  - 2 * S[1][2] * x  + 2 * S[0][2] * y ;
anisou[3]=this.dataT[3] - L[2][2] * xy + L[1][2] * xz + L[2][0] * yz - L[0][1] * zz - S[0][0] * z + S[1][1] * z + S[2][0] * x - S[2][1] * y;
anisou[4]=this.dataT[4] - L[1][1] * xz + L[1][2] * xy - L[2][0] * yy + L[0][1] * yz + S[0][0] * y - S[2][2] * y + S[1][2] * z - S[1][0] * x;
anisou[5]=this.dataT[5] - L[0][0] * yz - L[1][2] * xx + L[2][0] * xy + L[0][1] * xz - S[1][1] * x + S[2][2] * x + S[0][1] * y - S[0][2] * z;
anisou[6]=12;
anisou[7]=bresidual;
if (this.tlsU == null ) this.tlsU=Clazz.new_($I$(1,1));
this.tlsU.put$O$O(atom, anisou);
atom.addTensor$org_jmol_util_Tensor$S$Z(symmetry.getTensor$org_jmol_viewer_Viewer$FA(this.vwr, this.dataT).setType$S(null), "TLS-U", false);
}, p$1);

Clazz.newMeth(C$, 'tlsAddError$S', function (error) {
if (this.sbTlsErrors == null ) this.sbTlsErrors=Clazz.new_($I$(2,1));
this.sbTlsErrors.append$S(this.fileName).appendC$C("\t").append$S("TLS group ").appendI$I(this.tlsGroupID).appendC$C("\t").append$S(error).appendC$C("\n");
}, p$1);

Clazz.newMeth(C$, 'fixRadius$F', function (r) {
return (r < 0.9  ? 1 : r);
}, 1);

Clazz.newMeth(C$, 'addConnection$IA', function (is) {
if (this.vConnect == null ) {
this.connectLast=null;
this.vConnect=Clazz.new_($I$(7,1));
}if (this.connectLast != null ) {
if (is[0] == this.connectLast[0] && is[1] == this.connectLast[1]  && is[2] != 2048 ) {
this.connectLast[2]++;
return;
}}this.vConnect.addLast$O(this.connectLast=is);
}, p$1);

Clazz.newMeth(C$, 'connectAllBad$I', function (maxSerial) {
var firstAtom=this.connectNextAtomIndex;
for (var i=this.connectNextAtomSet; i < this.asc.atomSetCount; i++) {
var count=this.asc.getAtomSetAtomCount$I(i);
this.asc.setModelInfoForSet$S$O$I("PDB_CONECT_firstAtom_count_max", Clazz.array(Integer.TYPE, -1, [firstAtom, count, maxSerial]), i);
if (this.vConnect != null ) {
this.asc.setModelInfoForSet$S$O$I("PDB_CONECT_bonds", this.vConnect, i);
this.asc.setGlobalBoolean$I(3);
}firstAtom+=count;
}
this.vConnect=null;
this.connectNextAtomSet=this.asc.iSet + 1;
this.connectNextAtomIndex=firstAtom;
}, p$1);

Clazz.newMeth(C$, 'connectAll$I$Z', function (maxSerial, isConnectStateBug) {
var a=this.asc;
var index=a.iSet;
if (index < 0) return;
if (isConnectStateBug) {
p$1.connectAllBad$I.apply(this, [maxSerial]);
return;
}a.setCurrentModelInfo$S$O("PDB_CONECT_firstAtom_count_max", Clazz.array(Integer.TYPE, -1, [a.getAtomSetAtomIndex$I(index), a.getAtomSetAtomCount$I(index), maxSerial]));
if (this.vConnect == null ) return;
var firstAtom=this.connectNextAtomIndex;
for (var i=a.atomSetCount; --i >= this.connectNextAtomSet; ) {
a.setModelInfoForSet$S$O$I("PDB_CONECT_bonds", this.vConnect, i);
a.setGlobalBoolean$I(3);
firstAtom+=a.getAtomSetAtomCount$I(i);
}
this.vConnect=null;
this.connectNextAtomSet=index + 1;
this.connectNextAtomIndex=firstAtom;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
