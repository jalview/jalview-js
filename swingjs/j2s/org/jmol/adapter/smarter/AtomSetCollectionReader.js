(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),p$1={},I$=[[0,'javajs.util.SB','org.jmol.util.Logger','org.jmol.adapter.smarter.AtomSetCollection','org.jmol.adapter.smarter.Atom','javajs.util.Lst','javajs.util.PT','org.jmol.util.BSUtil','javajs.util.P3','javajs.util.BS','javajs.util.M3','javajs.util.V3','javajs.util.Quat','org.jmol.api.JmolAdapter','org.jmol.api.Interface']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomSetCollectionReader", null, null, 'javajs.api.GenericLineReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fixJavaFloat=true;
this.next=Clazz.array(Integer.TYPE, [1]);
this.continuing=true;
this.desiredVibrationNumber=-2147483648;
this.calculationType="?";
this.desiredModelNumber=-2147483648;
this.packingError=0.02;
this.loadNote=Clazz.new_($I$(1,1));
this.lastModelNumber=2147483647;
this.desiredSpaceGroupIndex=-1;
this.latticeScaling=NaN;
this.stateScriptVersionInt=2147483647;
this.nMatrixElements=0;
this.filterAtomNameTerminator=";";
this.vibsFractional=false;
},1);

C$.$fields$=[['Z',['isBinary','debugging','requiresBSFilter','isConcatenated','fixJavaFloat','doProcessLines','iHaveUnitCell','iHaveSymmetryOperators','continuing','doApplySymmetry','ignoreFileSymmetryOperators','isTrajectory','applySymmetryToBonds','doCheckUnitCell','getHeader','isSequential','isMolecular','useFileModelNumbers','havePartialChargeFilter','ignoreFileUnitCell','ignoreFileSpaceGroupName','iHaveFractionalCoordinates','doPackUnitCell','mustFinalizeModelSet','forcePacked','rotateHexCell','isPrimitive','doConvertToFractional','fileCoordinatesAreFractional','merging','unitCellOffsetFractional','isFinalized','haveModel','haveAtomFilter','filterAltLoc','filterGroup3','filterChain','filterAtomName','filterAtomType','filterElement','filterHetero','filterEveryNth','doSetOrientation','doCentralize','addVibrations','useAltNames','ignoreStructure','isDSSP1','allowPDBFilter','doReadMolecularOrbitals','reverseModels','doCentroidUnitCell','centroidPacked','vibsFractional'],'F',['packingError','symmetryRange','latticeScaling'],'I',['ptLine','templateAtomCount','modelNumber','vibrationNumber','desiredVibrationNumber','desiredModelNumber','modDim','lastModelNumber','desiredSpaceGroupIndex','stateScriptVersionInt','baseAtomIndex','nMatrixElements','filterN','nFiltered'],'S',['readerName','addedData','addedDataKey','line','prevline','latticeType','calculationType','sgName','filePath','fileName','previousSpaceGroup','filter','filterAtomTypeStr','filterAtomNameTerminator','filterSymop','nameRequired','strSupercell','filter1','filter2','previousScript','siteScript'],'O',['primitiveToCrystal','javajs.util.M3','asc','org.jmol.adapter.smarter.AtomSetCollection','reader','java.io.BufferedReader','binaryDoc','javajs.api.GenericBinaryDocument','htParams','java.util.Map','trajectorySteps','javajs.util.Lst','domains','java.lang.Object','+validation','+dssr','thisBiomolecule','java.util.Map','lstNCS','javajs.util.Lst','next','int[]','+latticeCells','fillRange','java.lang.Object','vwr','org.jmol.viewer.Viewer','bsModels','javajs.util.BS','unitCellParams','float[]','symmetry','org.jmol.api.SymmetryInterface','out','javajs.util.OC','ptSupercell','javajs.util.P3','loadNote','javajs.util.SB','firstLastStep','int[]','fileScaling','javajs.util.P3','+fileOffset','+fileOffsetFractional','+unitCellOffset','moreUnitCellInfo','javajs.util.Lst','previousUnitCell','float[]','matUnitCellOrientation','javajs.util.M3','bsFilter','javajs.util.BS','matRot','javajs.util.M3','ms','org.jmol.adapter.smarter.MSInterface']]]

Clazz.newMeth(C$, 'setup$S$java_util_Map$O', function (fullPath, htParams, readerOrDocument) {
this.setupASCR$S$java_util_Map$O(fullPath, htParams, readerOrDocument);
});

Clazz.newMeth(C$, 'setupASCR$S$java_util_Map$O', function (fullPath, htParams, readerOrDocument) {
if (fullPath == null ) return;
this.debugging=$I$(2).debugging;
this.htParams=htParams;
this.filePath="" + htParams.get$O("fullPathName");
var i=this.filePath.lastIndexOf$I("/");
this.fileName=this.filePath.substring$I(i + 1);
if (Clazz.instanceOf(readerOrDocument, "java.io.BufferedReader")) this.reader=readerOrDocument;
 else if (Clazz.instanceOf(readerOrDocument, "javajs.api.GenericBinaryDocument")) this.binaryDoc=readerOrDocument;
});

Clazz.newMeth(C$, 'readData$', function () {
p$1.initialize.apply(this, []);
this.asc=Clazz.new_($I$(3,1).c$$S$org_jmol_adapter_smarter_AtomSetCollectionReader$org_jmol_adapter_smarter_AtomSetCollectionA$javajs_util_Lst,[this.readerName, this, null, null]);
try {
this.initializeReader$();
if (this.binaryDoc == null ) {
if (this.line == null  && this.continuing ) this.rd$();
while (this.line != null  && this.continuing )if (this.checkLine$()) this.rd$();

} else {
this.binaryDoc.setOutputChannel$javajs_api_GenericOutputChannel(this.out);
this.processBinaryDocument$();
}this.finalizeSubclassReader$();
if (!this.isFinalized) this.finalizeReaderASCR$();
} catch (e) {
$I$(2).info$S("Reader error: " + e);
e.printStackTrace$();
p$1.setError$Throwable.apply(this, [e]);
}
if (this.reader != null ) this.reader.close$();
if (this.binaryDoc != null ) this.binaryDoc.close$();
return p$1.finish.apply(this, []);
});

Clazz.newMeth(C$, 'fixBaseIndices', function () {
try {
var baseModelIndex=(this.htParams.get$O("baseModelIndex")).intValue$();
this.baseAtomIndex+=this.asc.ac;
baseModelIndex+=this.asc.atomSetCount;
this.htParams.put$O$O("baseAtomIndex", Integer.valueOf$I(this.baseAtomIndex));
this.htParams.put$O$O("baseModelIndex", Integer.valueOf$I(baseModelIndex));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'readDataObject$O', function (node) {
p$1.initialize.apply(this, []);
this.asc=Clazz.new_($I$(3,1).c$$S$org_jmol_adapter_smarter_AtomSetCollectionReader$org_jmol_adapter_smarter_AtomSetCollectionA$javajs_util_Lst,[this.readerName, this, null, null]);
this.initializeReader$();
this.processDOM$O(node);
return p$1.finish.apply(this, []);
});

Clazz.newMeth(C$, 'processDOM$O', function (DOMNode) {
});

Clazz.newMeth(C$, 'processBinaryDocument$', function () {
});

Clazz.newMeth(C$, 'initializeReader$', function () {
});

Clazz.newMeth(C$, 'checkLine$', function () {
return true;
});

Clazz.newMeth(C$, 'checkLastModel$', function () {
if (this.isLastModel$I(this.modelNumber) && this.doProcessLines ) return (this.continuing=this.doProcessLines=false);
this.doProcessLines=false;
return true;
});

Clazz.newMeth(C$, 'isLastModel$I', function (modelNumber) {
return (this.desiredModelNumber > 0 || modelNumber >= this.lastModelNumber );
});

Clazz.newMeth(C$, 'appendLoadNote$S', function (info) {
if (info == null ) {
this.loadNote=Clazz.new_($I$(1,1));
return;
}this.loadNote.append$S(info).append$S("\n");
$I$(2).info$S(info);
});

Clazz.newMeth(C$, 'initializeTrajectoryFile$', function () {
this.asc.addAtom$org_jmol_adapter_smarter_Atom(Clazz.new_($I$(4,1)));
this.trajectorySteps=this.htParams.get$O("trajectorySteps");
if (this.trajectorySteps == null ) this.htParams.put$O$O("trajectorySteps", this.trajectorySteps=Clazz.new_($I$(5,1)));
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
});

Clazz.newMeth(C$, 'finalizeReaderASCR$', function () {
this.isFinalized=true;
if (this.asc.atomSetCount > 0) {
if (this.asc.atomSetCount == 1) this.asc.setCurrentModelInfo$S$O("dbName", this.htParams.get$O("dbName"));
this.applySymmetryAndSetTrajectory$();
this.asc.finalizeStructures$();
if (this.doCentralize) this.asc.centralize$();
if (this.fillRange != null ) this.asc.setInfo$S$O("boundbox", this.fillRange);
var info=this.asc.getAtomSetAuxiliaryInfo$I(0);
if (info != null ) {
if (this.domains != null ) {
this.asc.setGlobalBoolean$I(5);
var s=(this.domains).getMapKeys$I$Z(2, true);
var pt=s.indexOf$S$I("{ ", 2);
if (pt >= 0) s=s.substring$I(pt + 2);
pt=s.indexOf$S("_metadata");
if (pt < 0) pt=s.indexOf$S("metadata");
if (pt >= 0) s=s.substring$I$I(0, pt);
s=$I$(6,"rep$S$S$S",[$I$(6).replaceAllCharacters$S$S$S(s, "{}", "").trim$(), "\n", "\n  "]) + "\n\nUse SHOW DOMAINS for details.";
this.appendLoadNote$S("\nDomains loaded:\n   " + s);
for (var i=this.asc.atomSetCount; --i >= 0; ) {
info=this.asc.getAtomSetAuxiliaryInfo$I(i);
info.put$O$O("domains", this.domains);
}
}if (this.validation != null ) {
for (var i=this.asc.atomSetCount; --i >= 0; ) {
info=this.asc.getAtomSetAuxiliaryInfo$I(i);
info.put$O$O("validation", this.validation);
}
}if (this.dssr != null ) {
info.put$O$O("dssrJSON", Boolean.TRUE);
for (var i=this.asc.atomSetCount; --i >= 0; ) {
info=this.asc.getAtomSetAuxiliaryInfo$I(i);
info.put$O$O("dssr", this.dssr);
}
}}}if (!this.fixJavaFloat) this.asc.setInfo$S$O("legacyJavaFloat", Boolean.TRUE);
this.setLoadNote$();
});

Clazz.newMeth(C$, 'setLoadNote$', function () {
var s=this.loadNote.toString();
if (this.loadNote.length$() > 0) this.asc.setInfo$S$O("modelLoadNote", s);
return s;
});

Clazz.newMeth(C$, 'setIsPDB$', function () {
this.asc.setGlobalBoolean$I(4);
if (this.htParams.get$O("pdbNoHydrogens") != null ) this.asc.setInfo$S$O("pdbNoHydrogens", this.htParams.get$O("pdbNoHydrogens"));
if (this.checkFilterKey$S("ADDHYDROGENS")) this.asc.setInfo$S$O("pdbAddHydrogens", Boolean.TRUE);
});

Clazz.newMeth(C$, 'setModelPDB$Z', function (isPDB) {
if (isPDB) this.asc.setGlobalBoolean$I(4);
 else this.asc.clearGlobalBoolean$I(4);
this.asc.setCurrentModelInfo$S$O("isPDB", isPDB ? Boolean.TRUE : null);
});

Clazz.newMeth(C$, 'finish', function () {
var s=this.htParams.get$O("loadState");
this.asc.setInfo$S$O("loadState", s == null  ? "" : s);
s=this.htParams.get$O("smilesString");
if (s != null ) this.asc.setInfo$S$O("smilesString", s);
if (!this.htParams.containsKey$O("templateAtomCount")) this.htParams.put$O$O("templateAtomCount", Integer.valueOf$I(this.asc.ac));
if (this.bsFilter != null ) {
this.htParams.put$O$O("filteredAtomCount", Integer.valueOf$I($I$(7).cardinalityOf$javajs_util_BS(this.bsFilter)));
this.htParams.put$O$O("bsFilter", this.bsFilter);
}if (!this.calculationType.equals$O("?")) this.asc.setInfo$S$O("calculationType", this.calculationType);
var name=this.asc.fileTypeName;
var fileType=name;
if (fileType.indexOf$S("(") >= 0) fileType=fileType.substring$I$I(0, fileType.indexOf$S("("));
for (var i=this.asc.atomSetCount; --i >= 0; ) {
this.asc.setModelInfoForSet$S$O$I("fileName", this.filePath, i);
this.asc.setModelInfoForSet$S$O$I("fileType", fileType, i);
}
this.asc.freeze$Z(this.reverseModels);
if (this.asc.errorMessage != null ) return this.asc.errorMessage + "\nfor file " + this.filePath + "\ntype " + name ;
if ((this.asc.bsAtoms == null  ? this.asc.ac == 0 : this.asc.bsAtoms.nextSetBit$I(0) < 0) && fileType.indexOf$S("DataOnly") < 0  && this.asc.atomSetInfo.get$O("dataOnly") == null  ) return "No atoms found\nfor file " + this.filePath + "\ntype " + name ;
p$1.fixBaseIndices.apply(this, []);
return this.asc;
}, p$1);

Clazz.newMeth(C$, 'setError$Throwable', function (e) {
var s=e.getMessage$();
if (this.line == null ) this.asc.errorMessage="Error reading file at end of file \n" + s;
 else this.asc.errorMessage="Error reading file at line " + this.ptLine + ":\n" + this.line + "\n" + s ;
e.printStackTrace$();
}, p$1);

Clazz.newMeth(C$, 'initialize', function () {
if (this.htParams.containsKey$O("baseAtomIndex")) this.baseAtomIndex=(this.htParams.get$O("baseAtomIndex")).intValue$();
this.initializeSymmetry$();
this.vwr=this.htParams.remove$O("vwr");
if (this.htParams.containsKey$O("stateScriptVersionInt")) this.stateScriptVersionInt=(this.htParams.get$O("stateScriptVersionInt")).intValue$();
var o=this.htParams.get$O("packingError");
if (o != null ) this.packingError=(o).floatValue$();
 else if (this.htParams.get$O("legacyJavaFloat") != null ) {
this.fixJavaFloat=false;
}this.merging=this.htParams.containsKey$O("merging");
this.getHeader=this.htParams.containsKey$O("getHeader");
this.isSequential=this.htParams.containsKey$O("isSequential");
this.readerName=this.htParams.get$O("readerName");
if (this.htParams.containsKey$O("outputChannel")) this.out=this.htParams.get$O("outputChannel");
if (this.htParams.containsKey$O("vibrationNumber")) this.desiredVibrationNumber=(this.htParams.get$O("vibrationNumber")).intValue$();
 else if (this.htParams.containsKey$O("modelNumber")) this.desiredModelNumber=(this.htParams.get$O("modelNumber")).intValue$();
this.applySymmetryToBonds=this.htParams.containsKey$O("applySymmetryToBonds");
this.bsFilter=(this.requiresBSFilter ? this.htParams.get$O("bsFilter") : null);
this.setFilter$S(null);
this.fillRange=this.htParams.get$O("fillRange");
if (this.strSupercell != null ) {
if (!this.checkFilterKey$S("NOPACK")) this.forcePacked=true;
}o=this.htParams.get$O("supercell");
if (Clazz.instanceOf(o, "javajs.util.P3")) {
var s=this.ptSupercell=o;
this.strSupercell=((s.x|0)) + "a," + ((s.y|0)) + "b," + ((s.z|0)) + "c" ;
} else if (Clazz.instanceOf(o, "java.lang.String")) {
this.strSupercell=o;
}var ptFile=(this.htParams.containsKey$O("ptFile") ? (this.htParams.get$O("ptFile")).intValue$() : -1);
this.isTrajectory=this.htParams.containsKey$O("isTrajectory");
if (ptFile > 0 && this.htParams.containsKey$O("firstLastSteps") ) {
var val=(this.htParams.get$O("firstLastSteps")).get$I(ptFile - 1);
if (Clazz.instanceOf(val, "javajs.util.BS")) {
this.bsModels=val;
} else {
this.firstLastStep=val;
}} else if (this.htParams.containsKey$O("firstLastStep")) {
this.firstLastStep=this.htParams.get$O("firstLastStep");
} else if (this.htParams.containsKey$O("bsModels")) {
this.bsModels=this.htParams.get$O("bsModels");
}this.useFileModelNumbers=this.htParams.containsKey$O("useFileModelNumbers") || this.checkFilterKey$S("USEFILEMODELNUMBERS") ;
if (this.htParams.containsKey$O("templateAtomCount")) this.templateAtomCount=(this.htParams.get$O("templateAtomCount")).intValue$();
if (this.bsModels != null  || this.firstLastStep != null  ) this.desiredModelNumber=-2147483648;
if (this.bsModels == null  && this.firstLastStep != null  ) {
if (this.firstLastStep[0] < 0) this.firstLastStep[0]=0;
if (this.firstLastStep[2] == 0 || this.firstLastStep[1] < this.firstLastStep[0] ) this.firstLastStep[1]=-1;
if (this.firstLastStep[2] < 1) this.firstLastStep[2]=1;
this.bsModels=$I$(7).newAndSetBit$I(this.firstLastStep[0]);
if (this.firstLastStep[1] > this.firstLastStep[0]) {
for (var i=this.firstLastStep[0]; i <= this.firstLastStep[1]; i+=this.firstLastStep[2]) this.bsModels.set$I(i);

}}if (this.bsModels != null  && (this.firstLastStep == null  || this.firstLastStep[1] != -1 ) ) this.lastModelNumber=this.bsModels.length$();
this.symmetryRange=(this.htParams.containsKey$O("symmetryRange") ? (this.htParams.get$O("symmetryRange")).floatValue$() : 0);
this.initializeSymmetryOptions$();
if (this.htParams.containsKey$O("spaceGroupIndex")) {
this.desiredSpaceGroupIndex=(this.htParams.get$O("spaceGroupIndex")).intValue$();
if (this.desiredSpaceGroupIndex == -2) this.sgName=this.htParams.get$O("spaceGroupName");
this.ignoreFileSpaceGroupName=(this.desiredSpaceGroupIndex == -2 || this.desiredSpaceGroupIndex >= 0 );
this.ignoreFileSymmetryOperators=(this.desiredSpaceGroupIndex != -1);
}if (this.htParams.containsKey$O("unitCellOffset")) {
this.fileScaling=$I$(8).new3$F$F$F(1, 1, 1);
this.fileOffset=this.htParams.get$O("unitCellOffset");
this.fileOffsetFractional=$I$(8).newP$javajs_util_T3(this.fileOffset);
this.unitCellOffsetFractional=this.htParams.containsKey$O("unitCellOffsetFractional");
}if (this.htParams.containsKey$O("unitcell")) {
var fParams=this.htParams.get$O("unitcell");
if (this.merging) this.setFractionalCoordinates$Z(true);
if (fParams.length == 9) {
this.addExplicitLatticeVector$I$FA$I(0, fParams, 0);
this.addExplicitLatticeVector$I$FA$I(1, fParams, 3);
this.addExplicitLatticeVector$I$FA$I(2, fParams, 6);
} else {
this.setUnitCell$F$F$F$F$F$F(fParams[0], fParams[1], fParams[2], fParams[3], fParams[4], fParams[5]);
}this.ignoreFileUnitCell=this.iHaveUnitCell;
if (this.merging && !this.iHaveUnitCell ) this.setFractionalCoordinates$Z(false);
}this.domains=this.htParams.get$O("domains");
this.validation=this.htParams.get$O("validation");
this.dssr=this.htParams.get$O("dssr");
this.isConcatenated=this.htParams.containsKey$O("concatenate");
}, p$1);

Clazz.newMeth(C$, 'initializeSymmetryOptions$', function () {
this.latticeCells=Clazz.array(Integer.TYPE, [4]);
this.doApplySymmetry=false;
var pt=this.htParams.get$O("lattice");
if (pt == null  || pt.length$() == 0  ) {
if (!this.forcePacked && this.strSupercell == null  ) return;
pt=$I$(8).new3$F$F$F(1, 1, 1);
}this.latticeCells[0]=(pt.x|0);
this.latticeCells[1]=(pt.y|0);
this.latticeCells[2]=(pt.z|0);
if (Clazz.instanceOf(pt, "javajs.util.T4")) this.latticeCells[3]=((pt).w|0);
this.doCentroidUnitCell=(this.htParams.containsKey$O("centroid"));
if (this.doCentroidUnitCell && (this.latticeCells[2] == -1 || this.latticeCells[2] == 0 ) ) this.latticeCells[2]=1;
var isPacked=this.forcePacked || this.htParams.containsKey$O("packed") ;
this.centroidPacked=this.doCentroidUnitCell && isPacked ;
this.doPackUnitCell=!this.doCentroidUnitCell && (isPacked || this.latticeCells[2] < 0 ) ;
this.doApplySymmetry=(this.latticeCells[0] > 0 && this.latticeCells[1] > 0 );
if (!this.doApplySymmetry) this.latticeCells=Clazz.array(Integer.TYPE, [3]);
});

Clazz.newMeth(C$, 'doGetModel$I$S', function (modelNumber, title) {
if (title != null  && this.nameRequired != null   && this.nameRequired.length$() > 0  && title.toUpperCase$().indexOf$S(this.nameRequired) < 0 ) return false;
var isOK=(this.bsModels == null  ? this.desiredModelNumber < 1 || modelNumber == this.desiredModelNumber  : modelNumber > this.lastModelNumber ? false : modelNumber > 0 && this.bsModels.get$I(modelNumber - 1)  || this.haveModel && this.firstLastStep != null   && this.firstLastStep[1] < 0  && (this.firstLastStep[2] < 2 || (modelNumber - 1 - this.firstLastStep[0] ) % this.firstLastStep[2] == 0 )  );
if (isOK && this.desiredModelNumber == 0 ) this.discardPreviousAtoms$();
this.haveModel|=isOK;
if (isOK) this.doProcessLines=true;
return isOK;
});

Clazz.newMeth(C$, 'discardPreviousAtoms$', function () {
this.asc.discardPreviousAtoms$();
});

Clazz.newMeth(C$, 'initializeSymmetry$', function () {
this.previousSpaceGroup=this.sgName;
this.previousUnitCell=this.unitCellParams;
this.iHaveUnitCell=this.ignoreFileUnitCell;
if (!this.ignoreFileUnitCell) {
this.unitCellParams=Clazz.array(Float.TYPE, [26]);
for (var i=25; --i >= 0; ) this.unitCellParams[i]=NaN;

this.unitCellParams[25]=this.latticeScaling;
this.symmetry=null;
}if (!this.ignoreFileSpaceGroupName) this.sgName="unspecified!";
this.doCheckUnitCell=false;
});

Clazz.newMeth(C$, 'newAtomSet$S', function (name) {
if (this.asc.iSet >= 0) {
this.asc.newAtomSet$();
this.asc.setCollectionName$S("<collection of " + (this.asc.iSet + 1) + " models>" );
} else {
this.asc.setCollectionName$S(name);
}this.asc.setModelInfoForSet$S$O$I("name", name, Math.max(0, this.asc.iSet));
this.asc.setAtomSetName$S(name);
});

Clazz.newMeth(C$, 'cloneLastAtomSet$I$javajs_util_P3A', function (ac, pts) {
var lastAtomCount=this.asc.getLastAtomSetAtomCount$();
this.asc.cloneLastAtomSetFromPoints$I$javajs_util_P3A(ac, pts);
if (this.asc.haveUnitCell) {
this.iHaveUnitCell=true;
this.doCheckUnitCell=true;
this.sgName=this.previousSpaceGroup;
this.unitCellParams=this.previousUnitCell;
}return lastAtomCount;
});

Clazz.newMeth(C$, 'setSpaceGroupName$S', function (name) {
if (this.ignoreFileSpaceGroupName || name == null  ) return;
var s=name.trim$();
if (s.equals$O(this.sgName)) return;
if (!s.equals$O("P1")) $I$(2).info$S("Setting space group name to " + s);
this.sgName=s;
});

Clazz.newMeth(C$, 'setSymmetryOperator$S', function (xyz) {
if (this.ignoreFileSymmetryOperators) return -1;
var isym=this.asc.getXSymmetry$().addSpaceGroupOperation$S$Z(xyz, true);
if (isym < 0) $I$(2).warn$S("Skippings symmetry operation " + xyz);
this.iHaveSymmetryOperators=true;
return isym;
});

Clazz.newMeth(C$, 'initializeCartesianToFractional', function () {
for (var i=0; i < 16; i++) if (!Float.isNaN$F(this.unitCellParams[6 + i])) return;

for (var i=0; i < 16; i++) this.unitCellParams[6 + i]=((i % 5 == 0 ? 1 : 0));

this.nMatrixElements=0;
}, p$1);

Clazz.newMeth(C$, 'clearUnitCell$', function () {
if (this.ignoreFileUnitCell) return;
for (var i=6; i < 22; i++) this.unitCellParams[i]=NaN;

p$1.checkUnitCell$I.apply(this, [6]);
});

Clazz.newMeth(C$, 'setUnitCellItem$I$F', function (i, x) {
if (this.ignoreFileUnitCell) return;
if (i == 0 && x == 1   && !this.checkFilterKey$S("TOPOS")  || i == 3 && x == 0   ) return;
if (!Float.isNaN$F(x) && i >= 6  && Float.isNaN$F(this.unitCellParams[6]) ) p$1.initializeCartesianToFractional.apply(this, []);
this.unitCellParams[i]=x;
if (this.debugging) {
$I$(2,"debug$S",["setunitcellitem " + i + " " + new Float(x).toString() ]);
}if (i < 6 || Float.isNaN$F(x) ) this.iHaveUnitCell=p$1.checkUnitCell$I.apply(this, [6]);
 else if (++this.nMatrixElements == 12) this.iHaveUnitCell=p$1.checkUnitCell$I.apply(this, [22]);
});

Clazz.newMeth(C$, 'setUnitCell$F$F$F$F$F$F', function (a, b, c, alpha, beta, gamma) {
if (this.ignoreFileUnitCell) return;
this.clearUnitCell$();
this.unitCellParams[0]=a;
this.unitCellParams[1]=b;
this.unitCellParams[2]=c;
if (alpha != 0 ) this.unitCellParams[3]=alpha;
if (beta != 0 ) this.unitCellParams[4]=beta;
if (gamma != 0 ) this.unitCellParams[5]=gamma;
this.iHaveUnitCell=p$1.checkUnitCell$I.apply(this, [6]);
});

Clazz.newMeth(C$, 'addExplicitLatticeVector$I$FA$I', function (i, xyz, i0) {
if (this.ignoreFileUnitCell) return;
if (i == 0) for (var j=0; j < 6; j++) this.unitCellParams[j]=0;

i=6 + i * 3;
this.unitCellParams[i++]=xyz[i0++];
this.unitCellParams[i++]=xyz[i0++];
this.unitCellParams[i]=xyz[i0];
if (Float.isNaN$F(this.unitCellParams[0])) {
for (i=0; i < 6; i++) this.unitCellParams[i]=-1;

}this.iHaveUnitCell=p$1.checkUnitCell$I.apply(this, [15]);
});

Clazz.newMeth(C$, 'checkUnitCell$I', function (n) {
for (var i=0; i < n; i++) if (Float.isNaN$F(this.unitCellParams[i])) return false;

if (n == 22 && this.unitCellParams[0] == 1  ) {
if (this.unitCellParams[1] == 1  && this.unitCellParams[2] == 1   && this.unitCellParams[6] == 1   && this.unitCellParams[11] == 1   && this.unitCellParams[16] == 1  ) return false;
}if (this.doApplySymmetry) {
this.getSymmetry$();
this.doConvertToFractional=!this.fileCoordinatesAreFractional;
}return true;
}, p$1);

Clazz.newMeth(C$, 'getSymmetry$', function () {
if (!this.iHaveUnitCell) return null;
if (this.symmetry == null ) {
this.getNewSymmetry$().setUnitCell$FA$Z(this.unitCellParams, false);
p$1.checkUnitCellOffset.apply(this, []);
}if (this.symmetry == null ) this.iHaveUnitCell=false;
 else this.symmetry.setSpaceGroupName$S(this.sgName);
return this.symmetry;
});

Clazz.newMeth(C$, 'checkUnitCellOffset', function () {
if (this.fileOffsetFractional == null  || this.symmetry == null  ) return;
this.fileOffset.setT$javajs_util_T3(this.fileOffsetFractional);
if (this.unitCellOffsetFractional != this.fileCoordinatesAreFractional ) {
if (this.unitCellOffsetFractional) this.symmetry.toCartesian$javajs_util_T3$Z(this.fileOffset, false);
 else this.symmetry.toFractional$javajs_util_T3$Z(this.fileOffset, false);
}}, p$1);

Clazz.newMeth(C$, 'fractionalizeCoordinates$Z', function (toFrac) {
if (this.getSymmetry$() == null ) return;
var a=this.asc.atoms;
if (toFrac) for (var i=this.asc.ac; --i >= 0; ) this.symmetry.toFractional$javajs_util_T3$Z(a[i], false);

 else for (var i=this.asc.ac; --i >= 0; ) this.symmetry.toCartesian$javajs_util_T3$Z(a[i], false);

this.setFractionalCoordinates$Z(toFrac);
});

Clazz.newMeth(C$, 'getNewSymmetry$', function () {
return this.symmetry=this.getInterface$S("org.jmol.symmetry.Symmetry");
});

Clazz.newMeth(C$, 'setFractionalCoordinates$Z', function (TF) {
this.iHaveFractionalCoordinates=this.fileCoordinatesAreFractional=TF;
p$1.checkUnitCellOffset.apply(this, []);
});

Clazz.newMeth(C$, 'setFilterAtomTypeStr$S', function (s) {
this.filterAtomTypeStr=s;
this.filterAtomNameTerminator="\u0000";
});

Clazz.newMeth(C$, 'setFilter$S', function (filter0) {
if (filter0 == null ) {
filter0=this.htParams.get$O("filter");
} else {
this.bsFilter=null;
}if (filter0 != null ) filter0=filter0.toUpperCase$();
this.filter=filter0;
this.doSetOrientation=!this.checkFilterKey$S("NOORIENT");
this.doCentralize=(!this.checkFilterKey$S("NOCENTER") && this.checkFilterKey$S("CENTER") );
this.addVibrations=!this.checkFilterKey$S("NOVIB");
this.ignoreStructure=this.checkFilterKey$S("DSSP");
this.isDSSP1=this.checkFilterKey$S("DSSP1");
this.doReadMolecularOrbitals=!this.checkFilterKey$S("NOMO");
this.useAltNames=this.checkFilterKey$S("ALTNAME");
this.reverseModels=this.checkFilterKey$S("REVERSEMODELS");
if (this.filter == null ) return;
if (this.checkFilterKey$S("HETATM")) {
this.filterHetero=true;
this.filter=$I$(6).rep$S$S$S(this.filter, "HETATM", "HETATM-Y");
}if (this.checkFilterKey$S("ATOM")) {
this.filterHetero=true;
this.filter=$I$(6).rep$S$S$S(this.filter, "ATOM", "HETATM-N");
}if (this.checkFilterKey$S("CELL=")) this.strSupercell=this.filter.substring$I(this.filter.indexOf$S("CELL=") + 5).toLowerCase$();
this.nameRequired=$I$(6).getQuotedAttribute$S$S(this.filter, "NAME");
if (this.nameRequired != null ) {
if (this.nameRequired.startsWith$S("\'")) this.nameRequired=$I$(6).split$S$S(this.nameRequired, "\'")[1];
 else if (this.nameRequired.startsWith$S("\"")) this.nameRequired=$I$(6).split$S$S(this.nameRequired, "\"")[1];
this.filter=$I$(6).rep$S$S$S(this.filter, this.nameRequired, "");
filter0=this.filter=$I$(6,"rep$S$S$S",[this.filter, "NAME=", ""]);
}this.filterAtomName=this.checkFilterKey$S("*.") || this.checkFilterKey$S("!.") ;
this.filterElement=this.checkFilterKey$S("_");
this.filterGroup3=this.checkFilterKey$S("[");
this.filterChain=this.checkFilterKey$S(":");
this.filterAltLoc=this.checkFilterKey$S("%");
this.filterEveryNth=this.checkFilterKey$S("/=");
if (this.filterEveryNth) this.filterN=this.parseIntAt$S$I(this.filter, this.filter.indexOf$S("/=") + 2);
 else this.filterAtomType=this.checkFilterKey$S("=");
if (this.filterN == -2147483648) this.filterEveryNth=false;
this.haveAtomFilter=this.filterAtomName || this.filterAtomType || this.filterElement || this.filterGroup3 || this.filterChain || this.filterAltLoc || this.filterHetero || this.filterEveryNth || this.checkFilterKey$S("/=")  ;
if (this.bsFilter == null ) {
this.bsFilter=Clazz.new_($I$(9,1));
this.htParams.put$O$O("bsFilter", this.bsFilter);
this.filter=(";" + this.filter + ";" ).replace$C$C(",", ";");
var s=this.getFilter$S("LATTICESCALING=");
if (s != null  && this.unitCellParams.length > 25 ) this.unitCellParams[25]=this.latticeScaling=this.parseFloatStr$S(s);
s=this.getFilter$S("SYMOP=");
if (s != null ) this.filterSymop=" " + s + " " ;
$I$(2).info$S("filtering with " + this.filter);
if (this.haveAtomFilter) {
var ipt;
this.filter1=this.filter;
if ((ipt=this.filter.indexOf$S("|")) >= 0) {
this.filter1=this.filter.substring$I$I(0, ipt).trim$() + ";";
this.filter2=";" + this.filter.substring$I(ipt).trim$();
}}}});

Clazz.newMeth(C$, 'getFilter$S', function (key) {
var pt=(this.filter == null  ? -1 : this.filter.indexOf$S(key));
return (pt < 0 ? null : this.filter.substring$I$I(pt + key.length$(), this.filter.indexOf$S$I(";", pt)));
});

Clazz.newMeth(C$, 'checkFilterKey$S', function (key) {
return (this.filter != null  && this.filter.indexOf$S(key) >= 0 );
});

Clazz.newMeth(C$, 'filterAtom$org_jmol_adapter_smarter_Atom$I', function (atom, iAtom) {
if (!this.haveAtomFilter) return true;
var isOK=p$1.checkFilter$org_jmol_adapter_smarter_Atom$S.apply(this, [atom, this.filter1]);
if (this.filter2 != null ) isOK|=p$1.checkFilter$org_jmol_adapter_smarter_Atom$S.apply(this, [atom, this.filter2]);
if (isOK && this.filterEveryNth ) isOK=(((this.nFiltered++) % this.filterN) == 0);
this.bsFilter.setBitTo$I$Z(iAtom >= 0 ? iAtom : this.asc.ac, isOK);
return isOK;
});

Clazz.newMeth(C$, 'checkFilter$org_jmol_adapter_smarter_Atom$S', function (atom, f) {
return (!this.filterGroup3 || atom.group3 == null   || !this.filterReject$S$S$S(f, "[", atom.group3.toUpperCase$() + "]") ) && (!this.filterAtomName || p$1.allowAtomName$S$S.apply(this, [atom.atomName, f]) ) && (this.filterAtomTypeStr == null  || atom.atomName == null   || atom.atomName.toUpperCase$().indexOf$S("\u0000" + this.filterAtomTypeStr) >= 0 ) && (!this.filterElement || atom.elementSymbol == null   || !this.filterReject$S$S$S(f, "_", atom.elementSymbol.toUpperCase$() + ";") ) && (!this.filterChain || atom.chainID == 0  || !this.filterReject$S$S$S(f, ":", "" + this.vwr.getChainIDStr$I(atom.chainID)) ) && (!this.filterAltLoc || atom.altLoc == "\u0000"  || !this.filterReject$S$S$S(f, "%", "" + atom.altLoc) ) && (!this.filterHetero || !this.allowPDBFilter || !this.filterReject$S$S$S(f, "HETATM", atom.isHetero ? "-Y" : "-N")  )  ;
}, p$1);

Clazz.newMeth(C$, 'rejectAtomName$S', function (name) {
return this.filterAtomName && !p$1.allowAtomName$S$S.apply(this, [name, this.filter]) ;
});

Clazz.newMeth(C$, 'allowAtomName$S$S', function (atomName, f) {
return (atomName == null  || !this.filterReject$S$S$S(f, ".", atomName.toUpperCase$() + this.filterAtomNameTerminator) );
}, p$1);

Clazz.newMeth(C$, 'filterReject$S$S$S', function (f, code, atomCode) {
return (f.indexOf$S(code) >= 0 && (f.indexOf$S("!" + code) >= 0) == (f.indexOf$S(code + atomCode) >= 0)  );
});

Clazz.newMeth(C$, 'set2D$', function () {
this.asc.setInfo$S$O("is2D", Boolean.TRUE);
if (!this.checkFilterKey$S("NOMIN")) this.asc.setInfo$S$O("doMinimize", Boolean.TRUE);
});

Clazz.newMeth(C$, 'doGetVibration$I', function (vibrationNumber) {
return this.addVibrations && (this.desiredVibrationNumber <= 0 || vibrationNumber == this.desiredVibrationNumber ) ;
});

Clazz.newMeth(C$, 'setTransform$F$F$F$F$F$F$F$F$F', function (x1, y1, z1, x2, y2, z2, x3, y3, z3) {
if (this.matRot != null  || !this.doSetOrientation ) return;
this.matRot=Clazz.new_($I$(10,1));
var v=$I$(11).new3$F$F$F(x1, y1, z1);
v.normalize$();
this.matRot.setColumnV$I$javajs_util_T3(0, v);
v.set$F$F$F(x2, y2, z2);
v.normalize$();
this.matRot.setColumnV$I$javajs_util_T3(1, v);
v.set$F$F$F(x3, y3, z3);
v.normalize$();
this.matRot.setColumnV$I$javajs_util_T3(2, v);
this.asc.setInfo$S$O("defaultOrientationMatrix", $I$(10).newM3$javajs_util_M3(this.matRot));
var q=$I$(12).newM$javajs_util_M3(this.matRot);
this.asc.setInfo$S$O("defaultOrientationQuaternion", q);
$I$(2,"info$S",["defaultOrientationMatrix = " + this.matRot]);
});

Clazz.newMeth(C$, 'setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F', function (atom, x, y, z) {
atom.set$F$F$F(x, y, z);
this.setAtomCoord$org_jmol_adapter_smarter_Atom(atom);
});

Clazz.newMeth(C$, 'setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F', function (atom, tokens, i, f) {
if (atom == null ) atom=this.asc.addNewAtom$();
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, this.parseFloatStr$S(tokens[i]) * f, this.parseFloatStr$S(tokens[i + 1]) * f, this.parseFloatStr$S(tokens[i + 2]) * f);
return atom;
});

Clazz.newMeth(C$, 'setAtomCoordTokens$org_jmol_adapter_smarter_Atom$SA$I', function (atom, tokens, i) {
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, this.parseFloatStr$S(tokens[i]), this.parseFloatStr$S(tokens[i + 1]), this.parseFloatStr$S(tokens[i + 2]));
});

Clazz.newMeth(C$, 'addAtomXYZSymName$SA$I$S$S', function (tokens, i, sym, name) {
var atom=this.asc.addNewAtom$();
if (sym != null ) atom.elementSymbol=sym;
if (name != null ) atom.atomName=name;
this.setAtomCoordTokens$org_jmol_adapter_smarter_Atom$SA$I(atom, tokens, i);
return atom;
});

Clazz.newMeth(C$, 'setAtomCoord$org_jmol_adapter_smarter_Atom', function (atom) {
var mustFractionalize=(this.doConvertToFractional && !this.fileCoordinatesAreFractional && this.getSymmetry$() != null   );
if (this.fileScaling != null ) {
atom.x=atom.x * this.fileScaling.x + this.fileOffset.x;
atom.y=atom.y * this.fileScaling.y + this.fileOffset.y;
atom.z=atom.z * this.fileScaling.z + this.fileOffset.z;
}if (mustFractionalize) {
if (!this.symmetry.haveUnitCell$()) this.symmetry.setUnitCell$FA$Z(this.unitCellParams, false);
this.symmetry.toFractional$javajs_util_T3$Z(atom, false);
this.iHaveFractionalCoordinates=true;
}if (this.fixJavaFloat && this.fileCoordinatesAreFractional ) $I$(6).fixPtFloats$javajs_util_T3$F(atom, 100000.0);
this.doCheckUnitCell=true;
});

Clazz.newMeth(C$, 'addSites$java_util_Map', function (htSites) {
this.asc.setCurrentModelInfo$S$O("pdbSites", htSites);
var sites="";
for (var entry, $entry = htSites.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var name=entry.getKey$();
var htSite=entry.getValue$();
var ch;
for (var i=name.length$(); --i >= 0; ) if (!$I$(6,"isLetterOrDigit$C",[ch=name.charAt$I(i)]) && ch != "\'" ) name=name.substring$I$I(0, i) + "_" + name.substring$I(i + 1) ;

var groups=htSite.get$O("groups");
if (groups.length$() == 0) continue;
this.addSiteScript$S("@site_" + name + " " + groups );
this.addSiteScript$S("site_" + name + " = [\"" + $I$(6).rep$S$S$S(groups, ",", "\",\"") + "\"]" );
sites += ",\"site_" + name + "\"" ;
}
if (sites.length$() > 0) this.addSiteScript$S("site_list = [" + sites.substring$I(1) + "]" );
});

Clazz.newMeth(C$, 'applySymmetryAndSetTrajectory$', function () {
this.applySymTrajASCR$();
});

Clazz.newMeth(C$, 'applySymTrajASCR$', function () {
if (this.forcePacked) this.initializeSymmetryOptions$();
var sym=(this.iHaveUnitCell && this.doCheckUnitCell  ? this.asc.getXSymmetry$().applySymmetryFromReader$org_jmol_api_SymmetryInterface(this.getSymmetry$()) : null);
if (sym == null ) this.asc.setTensors$();
if (this.isTrajectory) this.asc.setTrajectory$();
if (this.moreUnitCellInfo != null ) {
this.asc.setCurrentModelInfo$S$O("moreUnitCellInfo", this.moreUnitCellInfo);
this.moreUnitCellInfo=null;
}this.finalizeSubclassSymmetry$Z(sym != null );
this.initializeSymmetry$();
return sym;
});

Clazz.newMeth(C$, 'finalizeSubclassSymmetry$Z', function (haveSymmetry) {
});

Clazz.newMeth(C$, 'doPreSymmetry$', function () {
});

Clazz.newMeth(C$, 'finalizeMOData$java_util_Map', function (moData) {
this.asc.setCurrentModelInfo$S$O("moData", moData);
if (moData == null ) return;
var orbitals=moData.get$O("mos");
if (orbitals != null ) $I$(2,"info$S",[orbitals.size$() + " molecular orbitals read in model " + this.asc.atomSetCount ]);
});

Clazz.newMeth(C$, 'getElementSymbol$I', function (elementNumber) {
return $I$(13).getElementSymbol$I(elementNumber);
}, 1);

Clazz.newMeth(C$, 'fillDataBlock$SAA$I', function (data, minLineLen) {
var nLines=data.length;
for (var i=0; i < nLines; i++) {
data[i]=$I$(6,"getTokens$S",[this.discardLinesUntilNonBlank$()]);
if (data[i].length < minLineLen) --i;
}
});

Clazz.newMeth(C$, 'fill3x3$SA$I', function (tokens, pt) {
var a=Clazz.array(Double.TYPE, [3, 3]);
var needTokens=(tokens == null );
var pt0=pt;
for (var i=0; i < 3; i++) {
if (needTokens || pt >= tokens.length ) {
while ((tokens=$I$(6,"getTokens$S",[this.rd$()])).length < 3){
}
pt=(pt0 < 0 ? tokens.length + pt0 : pt0);
}for (var j=0; j < 3; j++) a[i][j]=Double.valueOf$S(tokens[pt++]).doubleValue$();

}
return a;
});

Clazz.newMeth(C$, 'fillFloatArray$S$I$FA', function (s, width, data) {
var tokens=Clazz.array(String, [0]);
var pt=0;
for (var i=0; i < data.length; i++) {
while (tokens != null  && pt >= tokens.length ){
if (s == null ) s=this.rd$();
if (width == 0) {
tokens=$I$(6).getTokens$S(s);
} else {
tokens=Clazz.array(String, [(s.length$()/width|0)]);
for (var j=0; j < tokens.length; j++) tokens[j]=s.substring$I$I(j * width, (j + 1) * width);

}s=null;
pt=0;
}
if (tokens == null ) break;
data[i]=this.parseFloatStr$S(tokens[pt++]);
}
return data;
});

Clazz.newMeth(C$, 'fillFrequencyData$I$I$I$ZA$Z$I$I$IA$I$SAA', function (iAtom0, ac, modelAtomCount, ignore, isWide, col0, colWidth, atomIndexes, minLineLen, data) {
var withSymmetry=(ac != 0 && modelAtomCount != ac  && data == null  );
if (ac == 0 && atomIndexes != null  ) ac=atomIndexes.length;
var nLines=(isWide ? ac : ac * 3);
var nFreq=ignore.length;
if (data == null ) {
data=Clazz.array(String, [nLines, null]);
this.fillDataBlockFixed$SAA$I$I$I(data, col0, colWidth, minLineLen);
} else if (!isWide) {
var ptNonblank=minLineLen;
this.fillDataBlockFixed$SAA$I$I$I(data, col0, colWidth, -ptNonblank);
if (data[0] == null ) return;
iAtom0+=this.parseIntAt$S$I(this.line, ptNonblank - 5) - 1;
}for (var i=0, atomPt=0; i < nLines; i++, atomPt++) {
var values=data[i];
var valuesY=(isWide ? null : data[++i]);
var valuesZ=(isWide ? null : data[++i]);
var dataPt=values.length - (isWide ? nFreq * 3 : nFreq) - 1 ;
for (var j=0, jj=0; jj < nFreq; jj++) {
++dataPt;
var x=values[dataPt];
if (x.charAt$I(0) == ")") x=x.substring$I(1);
var vx=this.parseFloatStr$S(x);
var vy=this.parseFloatStr$S(isWide ? values[++dataPt] : valuesY[dataPt]);
var vz=this.parseFloatStr$S(isWide ? values[++dataPt] : valuesZ[dataPt]);
if (ignore[jj]) continue;
var iAtom=(atomIndexes == null  ? atomPt : atomIndexes[atomPt]);
if (iAtom < 0) continue;
iAtom+=iAtom0 + modelAtomCount * j++;
if (this.debugging) $I$(2,"debug$S",["atom " + iAtom + " vib" + j + ": " + new Float(vx).toString() + " " + new Float(vy).toString() + " " + new Float(vz).toString() ]);
this.asc.addVibrationVectorWithSymmetry$I$F$F$F$Z(iAtom, vx, vy, vz, withSymmetry);
}
}
});

Clazz.newMeth(C$, 'fillDataBlockFixed$SAA$I$I$I', function (data, col0, colWidth, minLineLen) {
if (colWidth == 0) {
this.fillDataBlock$SAA$I(data, minLineLen);
return;
}var nLines=data.length;
for (var i=0; i < nLines; i++) {
this.discardLinesUntilNonBlank$();
if (minLineLen < 0 && this.line.charAt$I(-minLineLen) == " " ) {
data[0]=null;
return;
}var nFields=((this.line.length$() - col0 + 1)/colWidth|0);
data[i]=Clazz.array(String, [nFields]);
for (var j=0, start=col0; j < nFields; j++, start+=colWidth) data[i][j]=this.line.substring$I$I(start, Math.min(this.line.length$(), start + colWidth));

}
});

Clazz.newMeth(C$, 'readLines$I', function (nLines) {
for (var i=nLines; --i >= 0; ) this.rd$();

return this.line;
});

Clazz.newMeth(C$, 'discardLinesUntilStartsWith$S', function (startsWith) {
while (this.rd$() != null  && !this.line.startsWith$S(startsWith) ){
}
return this.line;
});

Clazz.newMeth(C$, 'discardLinesUntilContains$S', function (containsMatch) {
while (this.rd$() != null  && this.line.indexOf$S(containsMatch) < 0 ){
}
return this.line;
});

Clazz.newMeth(C$, 'discardLinesUntilContains2$S$S', function (s1, s2) {
while (this.rd$() != null  && this.line.indexOf$S(s1) < 0  && this.line.indexOf$S(s2) < 0 ){
}
return this.line;
});

Clazz.newMeth(C$, 'discardLinesUntilBlank$', function () {
while (this.rd$() != null  && this.line.trim$().length$() != 0 ){
}
return this.line;
});

Clazz.newMeth(C$, 'discardLinesUntilNonBlank$', function () {
while (this.rd$() != null  && this.line.trim$().length$() == 0 ){
}
return this.line;
});

Clazz.newMeth(C$, 'checkLineForScript$S', function (line) {
this.line=line;
this.checkCurrentLineForScript$();
});

Clazz.newMeth(C$, 'checkCurrentLineForScript$', function () {
if (this.line.endsWith$S("#noautobond")) {
this.line=this.line.substring$I$I(0, this.line.lastIndexOf$I("#")).trim$();
this.asc.setNoAutoBond$();
}var pt=this.line.indexOf$S("jmolscript:");
if (pt >= 0) {
var script=this.line.substring$I$I(pt + 11, this.line.length$());
if (script.indexOf$S("#") >= 0) {
script=script.substring$I$I(0, script.indexOf$S("#"));
}this.addJmolScript$S(script);
this.line=this.line.substring$I$I(0, pt).trim$();
}});

Clazz.newMeth(C$, 'addJmolScript$S', function (script) {
$I$(2).info$S("#jmolScript: " + script);
if (this.previousScript == null ) this.previousScript="";
 else if (!this.previousScript.endsWith$S(";")) this.previousScript += ";";
this.previousScript += script;
this.asc.setInfo$S$O("jmolscript", this.previousScript);
});

Clazz.newMeth(C$, 'addSiteScript$S', function (script) {
if (this.siteScript == null ) this.siteScript="";
 else if (!this.siteScript.endsWith$S(";")) this.siteScript += ";";
this.siteScript += script;
this.asc.setInfo$S$O("sitescript", this.siteScript);
});

Clazz.newMeth(C$, 'rd$', function () {
return this.RL$();
});

Clazz.newMeth(C$, 'RL$', function () {
this.prevline=this.line;
this.line=this.reader.readLine$();
if (this.out != null  && this.line != null  ) this.out.append$S(this.line).append$S("\n");
this.ptLine++;
if (this.debugging && this.line != null  ) $I$(2).debug$S(this.line);
return this.line;
});

Clazz.newMeth(C$, 'getStrings$S$I$I', function (sinfo, nFields, width) {
var fields=Clazz.array(String, [nFields]);
for (var i=0, pt=0; i < nFields; i++, pt+=width) fields[i]=sinfo.substring$I$I(pt, pt + width);

return fields;
}, 1);

Clazz.newMeth(C$, 'getTokens$', function () {
return $I$(6).getTokens$S(this.line);
});

Clazz.newMeth(C$, 'getTokensFloat$S$FA$I', function (s, f, n) {
if (f == null ) f=Clazz.array(Float.TYPE, [n]);
$I$(6,"parseFloatArrayDataN$SA$FA$I",[$I$(6).getTokens$S(s), f, n]);
return f;
}, 1);

Clazz.newMeth(C$, 'parseFloat$', function () {
return $I$(6).parseFloatNext$S$IA(this.line, this.next);
});

Clazz.newMeth(C$, 'parseFloatStr$S', function (s) {
this.next[0]=0;
return $I$(6).parseFloatNext$S$IA(s, this.next);
});

Clazz.newMeth(C$, 'parseFloatRange$S$I$I', function (s, iStart, iEnd) {
this.next[0]=iStart;
return $I$(6).parseFloatRange$S$I$IA(s, iEnd, this.next);
});

Clazz.newMeth(C$, 'parseInt$', function () {
return $I$(6).parseIntNext$S$IA(this.line, this.next);
});

Clazz.newMeth(C$, 'parseIntStr$S', function (s) {
this.next[0]=0;
return $I$(6).parseIntNext$S$IA(s, this.next);
});

Clazz.newMeth(C$, 'parseIntAt$S$I', function (s, iStart) {
this.next[0]=iStart;
return $I$(6).parseIntNext$S$IA(s, this.next);
});

Clazz.newMeth(C$, 'parseIntRange$S$I$I', function (s, iStart, iEnd) {
this.next[0]=iStart;
return $I$(6).parseIntRange$S$I$IA(s, iEnd, this.next);
});

Clazz.newMeth(C$, 'parseToken$', function () {
return $I$(6).parseTokenNext$S$IA(this.line, this.next);
});

Clazz.newMeth(C$, 'parseTokenStr$S', function (s) {
this.next[0]=0;
return $I$(6).parseTokenNext$S$IA(s, this.next);
});

Clazz.newMeth(C$, 'parseTokenNext$S', function (s) {
return $I$(6).parseTokenNext$S$IA(s, this.next);
});

Clazz.newMeth(C$, 'parseTokenRange$S$I$I', function (s, iStart, iEnd) {
this.next[0]=iStart;
return $I$(6).parseTokenRange$S$I$IA(s, iEnd, this.next);
});

Clazz.newMeth(C$, 'getFortranFormatLengths$S', function (s) {
var vdata=Clazz.new_($I$(5,1));
var n=0;
var c=0;
var factor=1;
var inN=false;
var inCount=true;
s += ",";
for (var i=0; i < s.length$(); i++) {
var ch=s.charAt$I(i);
switch (ch.$c()) {
case 46:
inN=false;
continue;
case 44:
for (var j=0; j < c; j++) vdata.addLast$O(Integer.valueOf$I(n * factor));

inN=false;
inCount=true;
c=0;
continue;
case 88:
n=c;
c=1;
factor=-1;
continue;
}
var isDigit=$I$(6).isDigit$C(ch);
if (isDigit) {
if (inN) n=n * 10 + ch.$c() - 48;
 else if (inCount) c=c * 10 + ch.$c() - 48;
} else if ($I$(6).isLetter$C(ch)) {
n=0;
inN=true;
inCount=false;
factor=1;
} else {
inN=false;
}}
return vdata;
}, 1);

Clazz.newMeth(C$, 'read3Vectors$Z', function (isBohr) {
var vectors=Clazz.array($I$(11), [3]);
var f=Clazz.array(Float.TYPE, [3]);
for (var i=0; i < 3; i++) {
if (i > 0 || Float.isNaN$F(this.parseFloatStr$S(this.line)) ) {
this.rd$();
if (i == 0 && this.line != null  ) {
i=-1;
continue;
}}this.fillFloatArray$S$I$FA(this.line, 0, f);
vectors[i]=Clazz.new_($I$(11,1));
vectors[i].setA$FA(f);
if (isBohr) vectors[i].scale$F(0.5291772);
}
return vectors;
});

Clazz.newMeth(C$, 'setElementAndIsotope$org_jmol_adapter_smarter_Atom$S', function (atom, str) {
var isotope=this.parseIntStr$S(str);
if (isotope == -2147483648) {
atom.elementSymbol=str;
} else {
str=str.substring$I(("" + isotope).length$());
atom.elementNumber=($s$[0] = (str.length$() == 0 ? isotope : ((isotope << 7) + $I$(13).getElementNumber$S(str))), $s$[0]);
}});

Clazz.newMeth(C$, 'finalizeModelSet$', function () {
});

Clazz.newMeth(C$, 'setChainID$org_jmol_adapter_smarter_Atom$S', function (atom, label) {
atom.chainID=this.vwr.getChainID$S$Z(label, true);
});

Clazz.newMeth(C$, 'readNextLine$', function () {
if (this.rd$() != null  && this.line.indexOf$S("#jmolscript:") >= 0 ) this.checkCurrentLineForScript$();
return this.line;
});

Clazz.newMeth(C$, 'appendUunitCellInfo$S', function (info) {
if (this.moreUnitCellInfo == null ) this.moreUnitCellInfo=Clazz.new_($I$(5,1));
this.moreUnitCellInfo.addLast$O(info);
this.appendLoadNote$S(info);
});

Clazz.newMeth(C$, 'getInterface$S', function (className) {
var o=$I$(14).getInterface$S$org_jmol_viewer_Viewer$S(className, this.vwr, "file");
if (o == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Interface"]);
return o;
});

Clazz.newMeth(C$, 'forceSymmetry$Z', function (andPack) {
if (andPack) this.doPackUnitCell=andPack;
if (!this.doApplySymmetry) {
this.doApplySymmetry=true;
this.latticeCells[0]=1;
this.latticeCells[1]=1;
this.latticeCells[2]=1;
}});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:29 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
