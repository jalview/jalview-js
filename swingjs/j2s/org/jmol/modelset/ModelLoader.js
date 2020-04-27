(function(){var P$=Clazz.newPackage("org.jmol.modelset"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.BS','org.jmol.modelset.ModelSet','Boolean','org.jmol.api.Interface','org.jmol.util.Logger','org.jmol.modelset.Chain','javajs.util.Lst','javajs.util.SB','javajs.util.PT','org.jmol.modelset.Atom','org.jmol.modelset.Bond','javajs.util.AU','org.jmol.modelset.Model','java.util.Arrays','org.jmol.modelset.Group','org.jmol.util.Elements','org.jmol.script.T','org.jmol.api.SymmetryInterface','org.jmol.viewer.JC','org.jmol.util.JmolMolecule','javajs.util.V3','javajs.util.P3','org.jmol.util.BSUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ModelLoader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.htAtomMap=Clazz.new_($I$(1,1));
this.currentGroupInsertionCode="\u0000";
this.baseModelIndex=0;
this.baseModelCount=0;
this.baseAtomIndex=0;
this.baseGroupIndex=0;
this.baseTrajectoryCount=0;
this.adapterModelCount=0;
this.adapterTrajectoryCount=0;
this.structuresDefinedInFile=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['merging','appendNew','someModelsHaveUnitcells','someModelsAreModulated','is2D','isMutate','isTrajectory','isPyMOLsession','doMinimize','doAddHydrogens','isNewChain','noAutoBond','modulationOn'],'C',['currentGroupInsertionCode'],'I',['groupCount','iModel','currentChainID','currentGroupSequenceNumber','baseModelIndex','baseModelCount','baseAtomIndex','baseGroupIndex','baseTrajectoryCount','adapterModelCount','adapterTrajectoryCount','iChain'],'S',['jmolData','fileHeader','currentGroup3'],'O',['vwr','org.jmol.viewer.Viewer','ms','org.jmol.modelset.ModelSet','+modelSet0','group3Lists','String[]','group3Counts','int[][]','specialAtomIndexes','int[]','jbr','org.jmol.modelsetbio.BioResolver','groups','org.jmol.modelset.Group[]','modulationTUV','javajs.util.P3','htAtomMap','java.util.Map','chainOf','org.jmol.modelset.Chain[]','group3Of','String[]','seqcodes','int[]','+firstAtomIndexes','model','org.jmol.modelset.Model','currentChain','org.jmol.modelset.Chain','nullGroup','org.jmol.modelset.Group','htGroup1','java.util.Map','mergeGroups','org.jmol.modelset.Group[]','vStereo','javajs.util.Lst','structuresDefinedInFile','javajs.util.BS']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$S$javajs_util_SB$O$org_jmol_modelset_ModelSet$javajs_util_BS', function (vwr, modelSetName, loadScript, asc, modelSet0, bsNew) {
;C$.$init$.apply(this);
this.vwr=vwr;
this.ms=Clazz.new_($I$(3,1).c$$org_jmol_viewer_Viewer$S,[vwr, modelSetName]);
var adapter=vwr.getModelAdapter$();
this.modelSet0=modelSet0;
this.merging=(modelSet0 != null  && modelSet0.ac > 0 );
if (this.merging) {
this.ms.canSkipLoad=false;
} else {
vwr.resetShapes$Z(false);
}this.ms.preserveState=vwr.getPreserveState$();
this.ms.showRebondTimes=vwr.getBoolean$I(603979934);
if (bsNew == null ) {
p$1.initializeInfo$S$java_util_Map.apply(this, [modelSetName, null]);
p$1.createModelSet$org_jmol_api_JmolAdapter$O$javajs_util_BS.apply(this, [null, null, null]);
vwr.setStringProperty$S$S("_fileType", "");
return;
}if (!this.ms.preserveState) this.ms.canSkipLoad=false;
var info=adapter.getAtomSetCollectionAuxiliaryInfo$O(asc);
info.put$O$O("loadScript", loadScript);
p$1.initializeInfo$S$java_util_Map.apply(this, [adapter.getFileTypeName$O(asc).toLowerCase$().intern$(), info]);
p$1.createModelSet$org_jmol_api_JmolAdapter$O$javajs_util_BS.apply(this, [adapter, asc, bsNew]);
if (this.jbr != null ) this.jbr.setLoader$org_jmol_modelset_ModelLoader(null);
this.jbr=null;
}, 1);

Clazz.newMeth(C$, 'initializeInfo$S$java_util_Map', function (name, info) {
this.ms.g3d=this.vwr.gdata;
this.ms.modelSetTypeName=name;
this.ms.isXYZ=(name == "xyz");
this.ms.msInfo=info;
this.ms.modelSetProperties=this.ms.getInfoM$S("properties");
this.ms.haveBioModels=this.ms.getMSInfoB$S("isPDB");
this.isMutate=this.ms.getMSInfoB$S("isMutate");
if (this.ms.haveBioModels) this.jbr=this.vwr.getJBR$().setLoader$org_jmol_modelset_ModelLoader(this);
this.jmolData=(this.adapterModelCount == 0 ? this.ms.getInfoM$S("jmolData") : null);
this.fileHeader=this.ms.getInfoM$S("fileHeader");
var steps=this.ms.getInfoM$S("trajectorySteps");
this.isTrajectory=(steps != null );
if (this.isTrajectory) this.ms.trajectory=p$1.newTrajectory$org_jmol_modelset_ModelSet$javajs_util_Lst.apply(this, [this.ms, steps]);
this.isPyMOLsession=this.ms.getMSInfoB$S("isPyMOL");
this.doAddHydrogens=(this.jbr != null  && !this.isTrajectory  && !this.isPyMOLsession  && !this.ms.getMSInfoB$S("pdbNoHydrogens")  && (this.ms.getMSInfoB$S("pdbAddHydrogens") || this.vwr.getBooleanProperty$S("pdbAddHydrogens") ) );
if (info != null ) {
info.remove$O("pdbNoHydrogens");
info.remove$O("pdbAddHydrogens");
info.remove$O("trajectorySteps");
if (this.isTrajectory) this.ms.vibrationSteps=info.remove$O("vibrationSteps");
if (info.containsKey$O("legacyJavaFloat")) {
this.vwr.setBooleanProperty$S$Z("legacyJavaFloat", true);
}}this.htGroup1=this.ms.getInfoM$S("htGroup1");
var mod=this.ms.getInfoM$S("modulationOn");
if (mod != null ) {
this.modulationOn=true;
this.modulationTUV=(mod === $I$(4).TRUE  ? null : mod);
}this.noAutoBond=this.ms.getMSInfoB$S("noAutoBond");
this.is2D=this.ms.getMSInfoB$S("is2D");
this.doMinimize=this.is2D && this.ms.getMSInfoB$S("doMinimize") ;
this.adapterTrajectoryCount=(this.isTrajectory ? this.ms.trajectory.steps.size$() : 0);
this.ms.someModelsHaveSymmetry=this.ms.getMSInfoB$S("someModelsHaveSymmetry");
this.someModelsHaveUnitcells=this.ms.getMSInfoB$S("someModelsHaveUnitcells");
this.someModelsAreModulated=this.ms.getMSInfoB$S("someModelsAreModulated");
this.ms.someModelsHaveFractionalCoordinates=this.ms.getMSInfoB$S("someModelsHaveFractionalCoordinates");
if (this.merging) {
this.ms.haveBioModels|=this.modelSet0.haveBioModels;
this.ms.bioModelset=this.modelSet0.bioModelset;
if (this.ms.bioModelset != null ) this.ms.bioModelset.set$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet(this.vwr, this.ms);
this.ms.someModelsHaveSymmetry|=this.modelSet0.getMSInfoB$S("someModelsHaveSymmetry");
this.someModelsHaveUnitcells|=this.modelSet0.getMSInfoB$S("someModelsHaveUnitcells");
this.ms.someModelsHaveFractionalCoordinates|=this.modelSet0.getMSInfoB$S("someModelsHaveFractionalCoordinates");
this.ms.someModelsHaveAromaticBonds|=this.modelSet0.someModelsHaveAromaticBonds;
this.ms.msInfo.put$O$O("someModelsHaveSymmetry", $I$(4).valueOf$Z(this.ms.someModelsHaveSymmetry));
this.ms.msInfo.put$O$O("someModelsHaveUnitcells", $I$(4).valueOf$Z(this.someModelsHaveUnitcells));
this.ms.msInfo.put$O$O("someModelsHaveFractionalCoordinates", $I$(4).valueOf$Z(this.ms.someModelsHaveFractionalCoordinates));
this.ms.msInfo.put$O$O("someModelsHaveAromaticBonds", $I$(4).valueOf$Z(this.ms.someModelsHaveAromaticBonds));
}}, p$1);

Clazz.newMeth(C$, 'newTrajectory$org_jmol_modelset_ModelSet$javajs_util_Lst', function (ms, steps) {
return ($I$(5).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.modelset.Trajectory", this.vwr, "load")).set$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet$javajs_util_Lst(this.vwr, ms, steps);
}, p$1);

Clazz.newMeth(C$, 'getGroup3$I', function (iGroup) {
return (iGroup >= this.group3Of.length ? null : this.group3Of[iGroup]);
});

Clazz.newMeth(C$, 'getFirstAtomIndex$I', function (iGroup) {
return this.firstAtomIndexes[iGroup];
});

Clazz.newMeth(C$, 'getAtomCount$', function () {
return this.ms.ac;
});

Clazz.newMeth(C$, 'createModelSet$org_jmol_api_JmolAdapter$O$javajs_util_BS', function (adapter, asc, bsNew) {
var nAtoms=(adapter == null  ? 0 : adapter.getAtomCount$O(asc));
if (nAtoms > 0) $I$(6).info$S("reading " + nAtoms + " atoms" );
this.adapterModelCount=(adapter == null  ? 1 : adapter.getAtomSetCount$O(asc));
this.appendNew=!this.isMutate && (!this.merging || adapter == null   || this.adapterModelCount > 1  || this.isTrajectory  || this.vwr.getBoolean$I(603979792) ) ;
this.htAtomMap.clear$();
this.chainOf=Clazz.array($I$(7), [32]);
this.group3Of=Clazz.array(String, [32]);
this.seqcodes=Clazz.array(Integer.TYPE, [32]);
this.firstAtomIndexes=Clazz.array(Integer.TYPE, [32]);
this.currentChainID=2147483647;
this.currentChain=null;
this.currentGroupInsertionCode="\uffff";
this.currentGroup3="xxxxx";
this.iModel=-1;
this.model=null;
if (this.merging) p$1.mergeTrajAndVib$org_jmol_modelset_ModelSet$org_jmol_modelset_ModelSet.apply(this, [this.modelSet0, this.ms]);
p$1.initializeAtomBondModelCounts$I.apply(this, [nAtoms]);
if (bsNew != null  && (this.doMinimize || this.is2D ) ) {
bsNew.setBits$I$I(this.baseAtomIndex, this.baseAtomIndex + nAtoms);
}if (adapter == null ) {
p$1.setModelNameNumberProperties$I$I$S$I$java_util_Properties$java_util_Map$S.apply(this, [0, -1, "", 1, null, null, null]);
} else {
if (this.adapterModelCount > 0) {
$I$(6).info$S("ModelSet: haveSymmetry:" + this.ms.someModelsHaveSymmetry + " haveUnitcells:" + this.someModelsHaveUnitcells + " haveFractionalCoord:" + this.ms.someModelsHaveFractionalCoordinates );
(function(a,f){return f.apply(null,a)})([this.adapterModelCount + " model" + (this.ms.mc == 1 ? "" : "s") + " in this collection. Use getProperty \"modelInfo\" or" + " getProperty \"auxiliaryInfo\" to inspect them." ],$I$(6).info$S);
}var q=this.ms.getInfoM$S("defaultOrientationQuaternion");
if (q != null ) {
(function(a,f){return f.apply(null,a)})(["defaultOrientationQuaternion = " + q],$I$(6).info$S);
$I$(6).info$S("Use \"set autoLoadOrientation TRUE\" before loading or \"restore orientation DEFAULT\" after loading to view this orientation.");
}p$1.iterateOverAllNewModels$org_jmol_api_JmolAdapter$O.apply(this, [adapter, asc]);
p$1.iterateOverAllNewAtoms$org_jmol_api_JmolAdapter$O.apply(this, [adapter, asc]);
p$1.iterateOverAllNewBonds$org_jmol_api_JmolAdapter$O.apply(this, [adapter, asc]);
if (this.merging && !this.appendNew ) {
var info=adapter.getAtomSetAuxiliaryInfo$O$I(asc, 0);
this.ms.setInfo$I$O$O(this.baseModelIndex, "initialAtomCount", info.get$O("initialAtomCount"));
this.ms.setInfo$I$O$O(this.baseModelIndex, "initialBondCount", info.get$O("initialBondCount"));
}p$1.initializeUnitCellAndSymmetry.apply(this, []);
p$1.initializeBonding.apply(this, []);
}p$1.finalizeGroupBuild.apply(this, []);
if (this.is2D && this.doMinimize ) {
p$1.applyStereochemistry.apply(this, []);
}if (this.doAddHydrogens) this.jbr.finalizeHydrogens$();
if (adapter != null ) {
this.ms.calculatePolymers$org_jmol_modelset_GroupA$I$I$javajs_util_BS(this.groups, this.groupCount, this.baseGroupIndex, null);
if (this.jbr != null ) this.jbr.iterateOverAllNewStructures$org_jmol_api_JmolAdapter$O(adapter, asc);
}p$1.setDefaultRendering$I.apply(this, [this.vwr.getInt$I(553648170)]);
var rd=this.vwr.rd;
var ac=this.ms.ac;
var atoms=this.ms.at;
for (var i=this.baseAtomIndex; i < ac; i++) atoms[i].setMadAtom$org_jmol_viewer_Viewer$org_jmol_atomdata_RadiusData(this.vwr, rd);

var models=this.ms.am;
for (var i=models[this.baseModelIndex].firstAtomIndex; i < ac; i++) models[atoms[i].mi].bsAtoms.set$I(i);

p$1.freeze.apply(this, []);
p$1.finalizeShapes.apply(this, []);
this.vwr.setModelSet$org_jmol_modelset_ModelSet(this.ms);
p$1.setAtomProperties.apply(this, []);
if (adapter != null ) adapter.finish$O(asc);
if (this.modelSet0 != null ) {
this.modelSet0.releaseModelSet$();
}this.modelSet0=null;
}, p$1);

Clazz.newMeth(C$, 'mergeTrajAndVib$org_jmol_modelset_ModelSet$org_jmol_modelset_ModelSet', function (oldSet, newSet) {
this.baseModelCount=oldSet.mc;
this.baseTrajectoryCount=0;
if (oldSet.trajectory == null ) {
if (this.isTrajectory) p$1.newTrajectory$org_jmol_modelset_ModelSet$javajs_util_Lst.apply(this, [oldSet, Clazz.new_($I$(8,1))]);
}if (oldSet.trajectory == null  || oldSet.mc == 0 ) return;
this.baseTrajectoryCount=oldSet.mc;
var n=oldSet.trajectory.steps.size$();
for (var i=n; i < this.baseTrajectoryCount; i++) oldSet.trajectory.steps.addLast$O(null);

if (this.isTrajectory) {
if (oldSet.vibrationSteps == null ) {
oldSet.vibrationSteps=Clazz.new_($I$(8,1));
for (var i=n; --i >= 0; ) oldSet.vibrationSteps.addLast$O(null);

}n=newSet.trajectory.steps.size$();
for (var i=0; i < n; i++) {
oldSet.trajectory.steps.addLast$O(newSet.trajectory.steps.get$I(i));
oldSet.vibrationSteps.addLast$O(newSet.vibrationSteps == null  ? null : newSet.vibrationSteps.get$I(i));
}
} else {
newSet.trajectory=p$1.newTrajectory$org_jmol_modelset_ModelSet$javajs_util_Lst.apply(this, [newSet, null]);
}newSet.vibrationSteps=oldSet.vibrationSteps;
newSet.trajectory.steps=oldSet.trajectory.steps;
oldSet.trajectory=null;
}, p$1);

Clazz.newMeth(C$, 'setDefaultRendering$I', function (maxAtoms) {
if (this.isPyMOLsession) return;
var sb=Clazz.new_($I$(9,1));
var modelCount=this.ms.mc;
var models=this.ms.am;
for (var i=this.baseModelIndex; i < modelCount; i++) if (models[i].isBioModel) (models[i]).getDefaultLargePDBRendering$javajs_util_SB$I(sb, maxAtoms);

if (sb.length$() == 0) return;
sb.append$S("select *;");
var script=this.ms.getInfoM$S("jmolscript");
if (script == null ) script="";
sb.append$S(script);
this.ms.msInfo.put$O$O("jmolscript", sb.toString());
}, p$1);

Clazz.newMeth(C$, 'setAtomProperties', function () {
var modelCount=this.ms.mc;
for (var i=this.baseModelIndex; i < modelCount; i++) {
var atomProperties=this.ms.getInfo$I$S(i, "atomProperties");
if (this.jmolData != null ) p$1.addJmolDataProperties$org_jmol_modelset_Model$java_util_Map.apply(this, [this.ms.am[i], this.ms.getInfo$I$S(i, "jmolDataProperties")]);
var groupList=this.ms.getInfo$I$S(i, "groupPropertyList");
if (this.ms.am[i].isBioModel && this.ms.getInfo$I$S(i, "dssr") != null  ) this.vwr.getAnnotationParser$Z(true).setGroup1$org_jmol_modelset_ModelSet$I(this.ms, i);
if (atomProperties == null ) continue;
for (var entry, $entry = atomProperties.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
var value=entry.getValue$();
var bs=this.ms.getModelAtomBitSetIncludingDeleted$I$Z(i, true);
if (this.doAddHydrogens) {
var isGroup=(groupList != null  && $I$(10).isOneOf$S$S(key, groupList) );
value=this.jbr.fixPropertyValue$javajs_util_BS$O$Z(bs, value, isGroup);
}key="property_" + key.toLowerCase$();
(function(a,f){return f.apply(null,a)})(["creating " + key + " for model " + this.ms.getModelName$I(i) ],$I$(6).info$S);
this.vwr.setData$S$OA$I$I$I$I$I(key, Clazz.array(java.lang.Object, -1, [key, value, bs, Integer.valueOf$I(-1), $I$(4).FALSE]), this.ms.ac, 0, 0, 2147483647, 0);
}
}
}, p$1);

Clazz.newMeth(C$, 'initializeAtomBondModelCounts$I', function (nAtoms) {
var trajectoryCount=this.adapterTrajectoryCount;
if (this.merging) {
if (this.appendNew) {
this.baseModelIndex=this.baseModelCount;
this.ms.mc=this.baseModelCount + this.adapterModelCount;
} else {
this.baseModelIndex=this.vwr.am.cmi;
if (this.baseModelIndex < 0) this.baseModelIndex=this.baseModelCount - 1;
this.ms.mc=this.baseModelCount;
}this.ms.ac=this.baseAtomIndex=this.modelSet0.ac;
this.ms.bondCount=this.modelSet0.bondCount;
this.mergeGroups=this.modelSet0.getGroups$();
this.groupCount=this.baseGroupIndex=this.mergeGroups.length;
this.ms.mergeModelArrays$org_jmol_modelset_ModelSet(this.modelSet0);
this.ms.growAtomArrays$I(this.ms.ac + nAtoms);
} else {
this.ms.mc=this.adapterModelCount;
this.ms.ac=0;
this.ms.bondCount=0;
this.ms.at=Clazz.array($I$(11), [nAtoms]);
this.ms.bo=Clazz.array($I$(12), [250 + nAtoms]);
}if (this.doAddHydrogens) this.jbr.initializeHydrogenAddition$();
if (trajectoryCount > 1) this.ms.mc+=trajectoryCount - 1;
this.ms.am=$I$(13).arrayCopyObject$O$I(this.ms.am, this.ms.mc);
this.ms.modelFileNumbers=$I$(13).arrayCopyI$IA$I(this.ms.modelFileNumbers, this.ms.mc);
this.ms.modelNumbers=$I$(13).arrayCopyI$IA$I(this.ms.modelNumbers, this.ms.mc);
this.ms.modelNumbersForAtomLabel=$I$(13).arrayCopyS$SA$I(this.ms.modelNumbersForAtomLabel, this.ms.mc);
this.ms.modelNames=$I$(13).arrayCopyS$SA$I(this.ms.modelNames, this.ms.mc);
this.ms.frameTitles=$I$(13).arrayCopyS$SA$I(this.ms.frameTitles, this.ms.mc);
if (this.merging) for (var i=0; i < this.modelSet0.mc; i++) (this.ms.am[i]=this.modelSet0.am[i]).ms=this.ms;

}, p$1);

Clazz.newMeth(C$, 'mergeGroups', function () {
var info=this.modelSet0.getAuxiliaryInfo$javajs_util_BS(null);
var mergeGroup3Lists=info.get$O("group3Lists");
var mergeGroup3Counts=info.get$O("group3Counts");
if (mergeGroup3Lists != null ) {
for (var i=0; i < this.baseModelCount; i++) {
this.group3Lists[i + 1]=mergeGroup3Lists[i + 1];
this.group3Counts[i + 1]=mergeGroup3Counts[i + 1];
this.structuresDefinedInFile.set$I(i);
}
this.group3Lists[0]=mergeGroup3Lists[0];
this.group3Counts[0]=mergeGroup3Counts[0];
}if (!this.appendNew && this.ms.haveBioModels ) this.structuresDefinedInFile.clear$I(this.baseModelIndex);
}, p$1);

Clazz.newMeth(C$, 'iterateOverAllNewModels$org_jmol_api_JmolAdapter$O', function (adapter, asc) {
this.group3Lists=Clazz.array(String, [this.ms.mc + 1]);
this.group3Counts=$I$(13).newInt2$I(this.ms.mc + 1);
this.structuresDefinedInFile=Clazz.new_($I$(2,1));
if (this.merging) p$1.mergeGroups.apply(this, []);
var iTrajectory=(this.isTrajectory ? this.baseTrajectoryCount : -1);
var ipt=this.baseModelIndex;
for (var i=0; i < this.adapterModelCount; ++i, ++ipt) {
var modelNumber=adapter.getAtomSetNumber$O$I(asc, i);
var modelName=adapter.getAtomSetName$O$I(asc, i);
var modelAuxiliaryInfo=adapter.getAtomSetAuxiliaryInfo$O$I(asc, i);
if (modelAuxiliaryInfo.containsKey$O("modelID")) modelAuxiliaryInfo.put$O$O("modelID0", modelAuxiliaryInfo.get$O("modelID"));
var modelProperties=modelAuxiliaryInfo.get$O("modelProperties");
this.vwr.setStringProperty$S$S("_fileType", modelAuxiliaryInfo.get$O("fileType"));
if (modelName == null ) modelName=(this.jmolData != null  && this.jmolData.indexOf$S(";") > 2  ? this.jmolData.substring$I$I(this.jmolData.indexOf$S(":") + 2, this.jmolData.indexOf$S(";")) : this.appendNew ? "" + (modelNumber % 1000000) : "");
p$1.setModelNameNumberProperties$I$I$S$I$java_util_Properties$java_util_Map$S.apply(this, [ipt, iTrajectory, modelName, modelNumber, modelProperties, modelAuxiliaryInfo, this.jmolData]);
}
var m=this.ms.am[this.baseModelIndex];
this.vwr.setSmilesString$S(this.ms.msInfo.get$O("smilesString"));
var loadState=this.ms.msInfo.remove$O("loadState");
var loadScript=this.ms.msInfo.remove$O("loadScript");
if (loadScript.indexOf$S("Viewer.AddHydrogens") < 0 || !m.isModelKit ) {
var lines=$I$(10).split$S$S(loadState, "\n");
var sb=Clazz.new_($I$(9,1));
for (var i=0; i < lines.length; i++) {
var pt=m.loadState.indexOf$S(lines[i]);
if (pt < 0 || pt != m.loadState.lastIndexOf$S(lines[i]) ) sb.append$S(lines[i]).appendC$C("\n");
}
m.loadState += m.loadScript.toString() + sb.toString();
m.loadScript=Clazz.new_($I$(9,1));
if (loadScript.indexOf$S("load append ") >= 0) loadScript.append$S("; set appendNew true");
m.loadScript.append$S("  ").appendSB$javajs_util_SB(loadScript).append$S(";\n");
}if (this.isTrajectory) {
var n=(this.ms.mc - ipt + 1);
$I$(6).info$S(n + " trajectory steps read");
this.ms.setInfo$I$O$O(this.baseModelCount, "trajectoryStepCount", Integer.valueOf$I(n));
for (var ia=this.adapterModelCount, i=ipt; i < this.ms.mc; i++, ia++) {
this.ms.am[i]=this.ms.am[this.baseModelCount];
this.ms.modelNumbers[i]=adapter.getAtomSetNumber$O$I(asc, ia);
this.ms.modelNames[i]=adapter.getAtomSetName$O$I(asc, ia);
this.structuresDefinedInFile.set$I(i);
}
}p$1.finalizeModels$I.apply(this, [this.baseModelCount]);
}, p$1);

Clazz.newMeth(C$, 'setModelNameNumberProperties$I$I$S$I$java_util_Properties$java_util_Map$S', function (modelIndex, trajectoryBaseIndex, modelName, modelNumber, modelProperties, modelAuxiliaryInfo, jmolData) {
if (this.appendNew) {
var modelIsPDB=(modelAuxiliaryInfo != null  && $I$(4).TRUE === modelAuxiliaryInfo.get$O("isPDB")  );
this.ms.am[modelIndex]=(modelIsPDB ? this.jbr.getBioModel$I$I$S$java_util_Properties$java_util_Map(modelIndex, trajectoryBaseIndex, jmolData, modelProperties, modelAuxiliaryInfo) : Clazz.new_($I$(14,1)).set$org_jmol_modelset_ModelSet$I$I$S$java_util_Properties$java_util_Map(this.ms, modelIndex, trajectoryBaseIndex, jmolData, modelProperties, modelAuxiliaryInfo));
this.ms.modelNumbers[modelIndex]=modelNumber;
this.ms.modelNames[modelIndex]=modelName;
if (modelIsPDB) this.jbr.setGroupLists$I(modelIndex);
} else {
var atomInfo=modelAuxiliaryInfo.get$O("PDB_CONECT_firstAtom_count_max");
if (atomInfo != null ) this.ms.setInfo$I$O$O(modelIndex, "PDB_CONECT_firstAtom_count_max", atomInfo);
}var models=this.ms.am;
var atoms=this.ms.at;
try {
models[modelIndex].bsAtoms.set$I(atoms.length + 1);
models[modelIndex].bsAtoms.clear$I(atoms.length + 1);
var codes=this.ms.getInfo$I$S(modelIndex, "altLocs");
models[modelIndex].altLocCount=(codes == null  ? 0 : codes.length$());
if (codes != null ) {
var altlocs=codes.toCharArray$();
$I$(15).sort$CA(altlocs);
codes=String.valueOf$CA(altlocs);
this.ms.setInfo$I$O$O(modelIndex, "altLocs", codes);
}codes=this.ms.getInfo$I$S(modelIndex, "insertionCodes");
models[modelIndex].insertionCount=(codes == null  ? 0 : codes.length$());
var isModelKit=(this.ms.modelSetName != null  && this.ms.modelSetName.startsWith$S("Jmol Model Kit")  || modelName.startsWith$S("Jmol Model Kit")  || "Jme".equals$O(this.ms.getInfo$I$S(modelIndex, "fileType")) );
models[modelIndex].isModelKit=isModelKit;
} catch (t) {
System.gc$();
System.out.println$I(atoms.length);
System.out.println$O(t);
}
}, p$1);

Clazz.newMeth(C$, 'finalizeModels$I', function (baseModelCount) {
var modelCount=this.ms.mc;
if (modelCount == baseModelCount) return;
var sNum;
var modelnumber=0;
var lastfilenumber=-1;
var modelNumbers=this.ms.modelNumbers;
var modelNames=this.ms.modelNames;
if (this.isTrajectory) for (var i=baseModelCount; ++i < this.ms.mc; ) modelNumbers[i]=modelNumbers[i - 1] + 1;

if (baseModelCount > 0) {
if (modelNumbers[0] < 1000000) {
for (var i=0; i < baseModelCount; i++) {
if (modelNames[i].length$() == 0) modelNames[i]="" + modelNumbers[i];
modelNumbers[i]+=1000000;
this.ms.modelNumbersForAtomLabel[i]="1." + (i + 1);
}
}var filenumber=modelNumbers[baseModelCount - 1];
filenumber-=filenumber % 1000000;
if (modelNumbers[baseModelCount] < 1000000) filenumber+=1000000;
for (var i=baseModelCount; i < modelCount; i++) modelNumbers[i]+=filenumber;

}var models=this.ms.am;
for (var i=baseModelCount; i < modelCount; ++i) {
this.ms.setInfo$I$O$O(i, "fileType", this.ms.modelSetTypeName);
if (this.fileHeader != null ) this.ms.setInfo$I$O$O(i, "fileHeader", this.fileHeader);
var filenumber=(modelNumbers[i]/1000000|0);
if (filenumber != lastfilenumber) {
modelnumber=0;
lastfilenumber=filenumber;
}modelnumber++;
if (filenumber == 0) {
sNum="" + this.ms.getModelNumber$I(i);
filenumber=1;
} else {
sNum=filenumber + "." + modelnumber ;
}this.ms.modelNumbersForAtomLabel[i]=sNum;
models[i].fileIndex=filenumber - 1;
this.ms.modelFileNumbers[i]=filenumber * 1000000 + modelnumber;
if (modelNames[i] == null  || modelNames[i].length$() == 0 ) modelNames[i]=sNum;
}
if (this.merging) for (var i=0; i < baseModelCount; i++) models[i].ms=this.ms;

for (var i=0; i < modelCount; i++) {
this.ms.setInfo$I$O$O(i, "modelName", modelNames[i]);
this.ms.setInfo$I$O$O(i, "modelNumber", Integer.valueOf$I(modelNumbers[i] % 1000000));
this.ms.setInfo$I$O$O(i, "modelFileNumber", Integer.valueOf$I(this.ms.modelFileNumbers[i]));
this.ms.setInfo$I$O$O(i, "modelNumberDotted", this.ms.getModelNumberDotted$I(i));
var codes=this.ms.getInfo$I$S(i, "altLocs");
if (codes != null ) {
(function(a,f){return f.apply(null,a)})(["model " + this.ms.getModelNumberDotted$I(i) + " alternative locations: " + codes ],$I$(6).info$S);
}}
}, p$1);

Clazz.newMeth(C$, 'iterateOverAllNewAtoms$org_jmol_api_JmolAdapter$O', function (adapter, asc) {
var iLast=-1;
var isPdbThisModel=false;
var addH=false;
var isLegacyHAddition=false;
var iterAtom=adapter.getAtomIterator$O(asc);
this.ms.setCapacity$I(adapter.getAtomCount$O(asc));
var nRead=0;
var models=this.ms.am;
if (this.ms.mc > 0) this.nullGroup=Clazz.new_($I$(16,1)).setGroup$org_jmol_modelset_Chain$S$I$I$I(Clazz.new_($I$(7,1).c$$org_jmol_modelset_Model$I$I,[this.ms.am[this.baseModelIndex], 32, 0]), "", 0, -1, -1);
while (iterAtom.hasNext$()){
nRead++;
var modelIndex=iterAtom.getAtomSetIndex$() + this.baseModelIndex;
if (modelIndex != iLast) {
this.iChain=0;
this.iModel=modelIndex;
this.model=models[modelIndex];
this.currentChainID=2147483647;
this.isNewChain=true;
models[modelIndex].bsAtoms.clearAll$();
isPdbThisModel=models[modelIndex].isBioModel;
iLast=modelIndex;
addH=isPdbThisModel && this.doAddHydrogens ;
if (this.jbr != null ) this.jbr.setHaveHsAlready$Z(false);
}var group3=iterAtom.getGroup3$();
var chainID=iterAtom.getChainID$();
p$1.checkNewGroup$org_jmol_api_JmolAdapter$I$S$I$C$Z$Z.apply(this, [adapter, chainID, group3, iterAtom.getSequenceNumber$(), iterAtom.getInsertionCode$(), addH, isLegacyHAddition]);
var isotope=iterAtom.getElementNumber$();
if (addH && $I$(17).getElementNumber$I(isotope) == 1 ) this.jbr.setHaveHsAlready$Z(true);
var name=iterAtom.getAtomName$();
var charge=(addH ? p$1.getPdbCharge$S$S.apply(this, [group3, name]) : iterAtom.getFormalCharge$());
p$1.addAtom$Z$javajs_util_BS$I$O$I$S$I$F$javajs_util_Lst$F$F$javajs_util_P3$Z$I$I$S$javajs_util_V3$C$F.apply(this, [isPdbThisModel, iterAtom.getSymmetry$(), iterAtom.getAtomSite$(), iterAtom.getUniqueID$(), isotope, name, charge, iterAtom.getPartialCharge$(), iterAtom.getTensors$(), iterAtom.getOccupancy$(), iterAtom.getBfactor$(), iterAtom.getXYZ$(), iterAtom.getIsHetero$(), iterAtom.getSerial$(), iterAtom.getSeqID$(), group3, iterAtom.getVib$(), iterAtom.getAltLoc$(), iterAtom.getRadius$()]);
}
if (this.groupCount > 0 && addH ) {
this.jbr.addImplicitHydrogenAtoms$org_jmol_api_JmolAdapter$I$I(adapter, this.groupCount - 1, this.isNewChain && !isLegacyHAddition  ? 1 : 0);
}iLast=-1;
var vdwtypeLast=null;
var atoms=this.ms.at;
for (var i=0; i < this.ms.ac; i++) {
if (atoms[i].mi != iLast) {
iLast=atoms[i].mi;
models[iLast].firstAtomIndex=i;
var vdwtype=this.ms.getDefaultVdwType$I(iLast);
if (vdwtype !== vdwtypeLast ) {
(function(a,f){return f.apply(null,a)})(["Default Van der Waals type for model" + " set to " + vdwtype.getVdwLabel$() ],$I$(6).info$S);
vdwtypeLast=vdwtype;
}}}
$I$(6).info$S(nRead + " atoms created");
}, p$1);

Clazz.newMeth(C$, 'addJmolDataProperties$org_jmol_modelset_Model$java_util_Map', function (m, jmolDataProperties) {
if (jmolDataProperties == null ) return;
var bs=m.bsAtoms;
var nAtoms=bs.cardinality$();
for (var e, $e = jmolDataProperties.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
var data=e.getValue$();
if (data.length != nAtoms) return;
var tok=(key.startsWith$S("property_") ? 1715472409 : $I$(18).getTokFromName$S(key));
switch (tok) {
default:
if ($I$(18).tokAttr$I$I(tok, 2048)) {
this.vwr.setAtomProperty$javajs_util_BS$I$I$F$S$FA$SA(bs, tok, 0, 0, null, data, null);
break;
}case 1111492629:
case 1111492630:
case 1111492631:
key="property_" + key;
tok=1715472409;
case 1715472409:
this.vwr.setData$S$OA$I$I$I$I$I(key, Clazz.array(java.lang.Object, -1, [key, data, bs, Integer.valueOf$I(1)]), 0, 0, 0, 0, 0);
}
}
}, p$1);

Clazz.newMeth(C$, 'getPdbCharge$S$S', function (group3, name) {
return (group3.equals$O("ARG") && name.equals$O("NH1")  || group3.equals$O("LYS") && name.equals$O("NZ")   || group3.equals$O("HIS") && name.equals$O("ND1")   ? 1 : 0);
}, p$1);

Clazz.newMeth(C$, 'addAtom$Z$javajs_util_BS$I$O$I$S$I$F$javajs_util_Lst$F$F$javajs_util_P3$Z$I$I$S$javajs_util_V3$C$F', function (isPDB, atomSymmetry, atomSite, atomUid, atomicAndIsotopeNumber, atomName, formalCharge, partialCharge, tensors, occupancy, bfactor, xyz, isHetero, atomSerial, atomSeqID, group3, vib, alternateLocationID, radius) {
var specialAtomID=($b$[0] = 0, $b$[0]);
var atomType=null;
if (atomName != null ) {
var i;
if ((i=atomName.indexOf$I("\u0000")) >= 0) {
atomType=atomName.substring$I(i + 1);
atomName=atomName.substring$I$I(0, i);
}if (isPDB) {
if (atomName.indexOf$I("*") >= 0) atomName=atomName.replace$C$C("*", "\'");
specialAtomID=this.vwr.getJBR$().lookupSpecialAtomID$S(atomName);
if (specialAtomID == 2 && "CA".equalsIgnoreCase$S(group3) ) specialAtomID=($b$[0] = 0, $b$[0]);
}}var atom=this.ms.addAtom$I$org_jmol_modelset_Group$I$S$S$I$I$I$javajs_util_P3$F$javajs_util_V3$I$F$F$F$javajs_util_Lst$Z$B$javajs_util_BS(this.iModel, this.nullGroup, atomicAndIsotopeNumber, atomName, atomType, atomSerial, atomSeqID, atomSite, xyz, radius, vib, formalCharge, partialCharge, occupancy, bfactor, tensors, isHetero, specialAtomID, atomSymmetry);
atom.altloc=alternateLocationID;
this.htAtomMap.put$O$O(atomUid, atom);
}, p$1);

Clazz.newMeth(C$, 'checkNewGroup$org_jmol_api_JmolAdapter$I$S$I$C$Z$Z', function (adapter, chainID, group3, groupSequenceNumber, groupInsertionCode, addH, isLegacyHAddition) {
var group3i=(group3 == null  ? null : group3.intern$());
if (chainID != this.currentChainID) {
this.currentChainID=chainID;
this.currentChain=p$1.getOrAllocateChain$org_jmol_modelset_Model$I.apply(this, [this.model, chainID]);
this.currentGroupInsertionCode="\uffff";
this.currentGroupSequenceNumber=-1;
this.currentGroup3="xxxx";
this.isNewChain=true;
}if (groupSequenceNumber != this.currentGroupSequenceNumber || groupInsertionCode != this.currentGroupInsertionCode  || group3i != this.currentGroup3 ) {
if (this.groupCount > 0 && addH ) {
this.jbr.addImplicitHydrogenAtoms$org_jmol_api_JmolAdapter$I$I(adapter, this.groupCount - 1, this.isNewChain && !isLegacyHAddition  ? 1 : 0);
this.jbr.setHaveHsAlready$Z(false);
}this.currentGroupSequenceNumber=groupSequenceNumber;
this.currentGroupInsertionCode=groupInsertionCode;
this.currentGroup3=group3i;
while (this.groupCount >= this.group3Of.length){
this.chainOf=$I$(13).doubleLength$O(this.chainOf);
this.group3Of=$I$(13).doubleLengthS$SA(this.group3Of);
this.seqcodes=$I$(13).doubleLengthI$IA(this.seqcodes);
this.firstAtomIndexes=$I$(13).doubleLengthI$IA(this.firstAtomIndexes);
}
this.firstAtomIndexes[this.groupCount]=this.ms.ac;
this.chainOf[this.groupCount]=this.currentChain;
this.group3Of[this.groupCount]=group3;
this.seqcodes[this.groupCount]=$I$(16).getSeqcodeFor$I$C(groupSequenceNumber, groupInsertionCode);
++this.groupCount;
}}, p$1);

Clazz.newMeth(C$, 'getOrAllocateChain$org_jmol_modelset_Model$I', function (model, chainID) {
var chain=model.getChain$I(chainID);
if (chain != null ) return chain;
if (model.chainCount == model.chains.length) model.chains=$I$(13).doubleLength$O(model.chains);
return model.chains[model.chainCount++]=Clazz.new_([model, chainID, (chainID == 0 || chainID == 32  ? 0 : ++this.iChain)],$I$(7,1).c$$org_jmol_modelset_Model$I$I);
}, p$1);

Clazz.newMeth(C$, 'iterateOverAllNewBonds$org_jmol_api_JmolAdapter$O', function (adapter, asc) {
var iterBond=adapter.getBondIterator$O(asc);
if (iterBond == null ) return;
var mad=this.vwr.getMadBond$();
this.ms.defaultCovalentMad=(this.jmolData == null  ? mad : ($s$[0] = 0, $s$[0]));
var haveMultipleBonds=false;
while (iterBond.hasNext$()){
var iOrder=iterBond.getEncodedOrder$();
var order=($s$[0] = iOrder, $s$[0]);
var b=p$1.bondAtoms$O$O$H.apply(this, [iterBond.getAtomUniqueID1$(), iterBond.getAtomUniqueID2$(), order]);
if (b != null ) {
if (order > 1 && order != 1025  && order != 1041 ) haveMultipleBonds=true;
var radius=iterBond.getRadius$();
if (radius > 0 ) b.setMad$H(($s$[0] = (radius * 2000), $s$[0]));
var colix=iterBond.getColix$();
if (colix >= 0) b.colix=colix;
b.order|=(iOrder & 98304);
}}
if (haveMultipleBonds && this.ms.someModelsHaveSymmetry && !this.vwr.getBoolean$I(603979794)  ) $I$(6).info$S("ModelSet: use \"set appletSymmetryToBonds TRUE \" to apply the file-based multiple bonds to symmetry-generated atoms.");
this.ms.defaultCovalentMad=mad;
}, p$1);

Clazz.newMeth(C$, 'bondAtoms$O$O$H', function (atomUid1, atomUid2, order) {
var atom1=this.htAtomMap.get$O(atomUid1);
if (atom1 == null ) {
$I$(6).error$S("bondAtoms cannot find atomUid1?:" + atomUid1);
return null;
}var atom2=this.htAtomMap.get$O(atomUid2);
if (atom2 == null ) {
$I$(6).error$S("bondAtoms cannot find atomUid2?:" + atomUid2);
return null;
}if (atom1.isBonded$org_jmol_modelset_Atom(atom2)) return null;
var isNear=(order == 1025);
var isFar=(order == 1041);
var bond;
if (isNear || isFar ) {
bond=this.ms.bondMutually$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$F(atom1, atom2, (this.is2D ? order : ($s$[0] = 1, $s$[0])), this.ms.getDefaultMadFromOrder$I(1), 0);
if (this.vStereo == null ) {
this.vStereo=Clazz.new_($I$(8,1));
}this.vStereo.addLast$O(bond);
} else {
bond=this.ms.bondMutually$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$F(atom1, atom2, order, this.ms.getDefaultMadFromOrder$I(order), 0);
if (bond.isAromatic$()) {
this.ms.someModelsHaveAromaticBonds=true;
}}if (this.ms.bondCount == this.ms.bo.length) {
this.ms.bo=$I$(13).arrayCopyObject$O$I(this.ms.bo, this.ms.bondCount + 250);
}this.ms.setBond$I$org_jmol_modelset_Bond(this.ms.bondCount++, bond);
return bond;
}, p$1);

Clazz.newMeth(C$, 'initializeUnitCellAndSymmetry', function () {
if (this.someModelsAreModulated && this.ms.bsModulated == null  ) this.ms.bsModulated=Clazz.new_($I$(2,1));
if (this.someModelsHaveUnitcells) {
this.ms.unitCells=Clazz.array($I$(19), [this.ms.mc]);
this.ms.haveUnitCells=true;
var haveMergeCells=(this.modelSet0 != null  && this.modelSet0.unitCells != null  );
for (var i=0, pt=0; i < this.ms.mc; i++) {
if (haveMergeCells && i < this.baseModelCount ) {
this.ms.unitCells[i]=this.modelSet0.unitCells[i];
} else {
this.ms.unitCells[i]=$I$(5).getSymmetry$org_jmol_viewer_Viewer$S(this.vwr, "file");
var notionalCell=null;
if (this.isTrajectory) {
var lst=this.ms.getInfoM$S("unitCells");
if (lst != null ) notionalCell=lst.get$I(pt++);
}this.ms.unitCells[i].setSymmetryInfo$I$java_util_Map$FA(i, this.ms.getModelAuxiliaryInfo$I(i), notionalCell);
}}
}if (this.appendNew && this.ms.someModelsHaveSymmetry ) {
this.ms.getAtoms$I$O(1088421903, null);
var atoms=this.ms.at;
for (var iAtom=this.baseAtomIndex, iModel=-1, i0=0; iAtom < this.ms.ac; iAtom++) {
if (atoms[iAtom].mi != iModel) {
iModel=atoms[iAtom].mi;
i0=this.baseAtomIndex + this.ms.getInfoI$I$S(iModel, "presymmetryAtomIndex") + this.ms.getInfoI$I$S(iModel, "presymmetryAtomCount") ;
}if (iAtom >= i0) this.ms.bsSymmetry.set$I(iAtom);
}
}if (this.appendNew && this.ms.someModelsHaveFractionalCoordinates ) {
var atoms=this.ms.at;
var modelIndex=-1;
var c=null;
var isFractional=false;
var roundCoords=!this.vwr.g.legacyJavaFloat;
for (var i=this.baseAtomIndex; i < this.ms.ac; i++) {
if (atoms[i].mi != modelIndex) {
modelIndex=atoms[i].mi;
c=this.ms.getUnitCell$I(modelIndex);
isFractional=(c != null  && c.getCoordinatesAreFractional$() );
}if (isFractional) {
c=atoms[i].getUnitCell$();
c.toCartesian$javajs_util_T3$Z(c.toSupercell$javajs_util_P3(atoms[i]), false);
if (roundCoords) $I$(10).fixPtFloats$javajs_util_T3$F(atoms[i], 10000.0);
}}
for (var imodel=this.baseModelIndex; imodel < this.ms.mc; imodel++) if (this.ms.isTrajectory$I(imodel)) this.ms.trajectory.setUnitCell$I(imodel);

}}, p$1);

Clazz.newMeth(C$, 'initializeBonding', function () {
var bsExclude=(this.ms.getInfoM$S("someModelsHaveCONECT") == null  ? null : Clazz.new_($I$(2,1)));
if (bsExclude != null ) this.ms.setPdbConectBonding$I$I$javajs_util_BS(this.baseAtomIndex, this.baseModelIndex, bsExclude);
var modelAtomCount=0;
var symmetryAlreadyAppliedToBonds=this.vwr.getBoolean$I(603979794);
var doAutoBond=this.vwr.getBoolean$I(603979798);
var forceAutoBond=this.vwr.getBoolean$I(603979846);
var bs=null;
var autoBonding=false;
var modelCount=this.ms.mc;
var models=this.ms.am;
if (!this.noAutoBond) for (var i=this.baseModelIndex; i < modelCount; i++) {
modelAtomCount=models[i].bsAtoms.cardinality$();
var modelBondCount=this.ms.getInfoI$I$S(i, "initialBondCount");
var modelIsPDB=models[i].isBioModel;
if (modelBondCount < 0) {
modelBondCount=this.ms.bondCount;
}var doBond=(forceAutoBond || doAutoBond && (modelBondCount == 0 || modelIsPDB && this.jmolData == null   && (this.ms.getMSInfoB$S("havePDBHeaderName") || modelBondCount < (modelAtomCount/2|0) )   || this.ms.getInfoB$I$S(i, "hasSymmetry") && !symmetryAlreadyAppliedToBonds && !this.ms.getInfoB$I$S(i, "hasBonds")   )  );
if (!doBond) continue;
autoBonding=true;
if (this.merging || modelCount > 1 ) {
if (bs == null ) bs=$I$(2).newN$I(this.ms.ac);
if (i == this.baseModelIndex || !this.isTrajectory ) bs.or$javajs_util_BS(models[i].bsAtoms);
}}
if (this.modulationOn) this.ms.setModulation$javajs_util_BS$Z$javajs_util_P3$Z(null, true, this.modulationTUV, false);
if (autoBonding) {
this.ms.autoBondBs4$javajs_util_BS$javajs_util_BS$javajs_util_BS$javajs_util_BS$H$Z(bs, bs, bsExclude, null, this.ms.defaultCovalentMad, this.vwr.getBoolean$I(603979872));
(function(a,f){return f.apply(null,a)})(["ModelSet: autobonding; use  autobond=false  to not generate bonds automatically"],$I$(6).info$S);
} else {
(function(a,f){return f.apply(null,a)})(["ModelSet: not autobonding; use  forceAutobond=true  to force automatic bond creation"],$I$(6).info$S);
}}, p$1);

Clazz.newMeth(C$, 'finalizeGroupBuild', function () {
this.groups=Clazz.array($I$(16), [this.groupCount]);
if (this.merging) for (var i=0; i < this.mergeGroups.length; i++) (this.groups[i]=this.mergeGroups[i]).chain.model.ms=this.ms;

for (var i=this.baseGroupIndex; i < this.groupCount; ++i) p$1.distinguishAndPropagateGroup$I$org_jmol_modelset_Chain$S$I$I$I.apply(this, [i, this.chainOf[i], this.group3Of[i], this.seqcodes[i], this.firstAtomIndexes[i], (i == this.groupCount - 1 ? this.ms.ac : this.firstAtomIndexes[i + 1]) - 1]);

if (this.group3Lists != null ) {
this.ms.msInfo.put$O$O("group3Lists", this.group3Lists);
this.ms.msInfo.put$O$O("group3Counts", this.group3Counts);
for (var i=0; i < this.group3Counts.length; i++) if (this.group3Counts[i] == null ) this.group3Counts[i]=Clazz.array(Integer.TYPE, [0]);

}}, p$1);

Clazz.newMeth(C$, 'distinguishAndPropagateGroup$I$org_jmol_modelset_Chain$S$I$I$I', function (groupIndex, chain, group3, seqcode, firstAtomIndex, lastAtomIndex) {
if (lastAtomIndex < firstAtomIndex) throw Clazz.new_(Clazz.load('NullPointerException'));
var group=(group3 == null  || this.jbr == null   ? null : this.jbr.distinguishAndPropagateGroup$org_jmol_modelset_Chain$S$I$I$I$IA$org_jmol_modelset_AtomA(chain, group3, seqcode, firstAtomIndex, lastAtomIndex, this.specialAtomIndexes, this.ms.at));
var key;
if (group == null ) {
group=Clazz.new_($I$(16,1)).setGroup$org_jmol_modelset_Chain$S$I$I$I(chain, group3, seqcode, firstAtomIndex, lastAtomIndex);
if (this.jbr != null ) group.groupID=this.jbr.getGroupID$S(group3);
key="o>";
} else {
key=(group.isProtein$() ? "p>" : group.isNucleic$() ? "n>" : group.isCarbohydrate$() ? "c>" : "o>");
}if (group3 != null ) {
p$1.countGroup$I$S$S.apply(this, [this.ms.at[firstAtomIndex].mi, key, group3]);
if (group.isNucleic$()) {
var g1=(this.htGroup1 == null  ? null : this.htGroup1.get$O(group3));
if (g1 != null ) group.group1=g1.charAt$I(0);
}}p$1.addGroup$org_jmol_modelset_Chain$org_jmol_modelset_Group.apply(this, [chain, group]);
this.groups[groupIndex]=group;
group.groupIndex=groupIndex;
for (var i=lastAtomIndex + 1; --i >= firstAtomIndex; ) this.ms.at[i].group=group;

}, p$1);

Clazz.newMeth(C$, 'addGroup$org_jmol_modelset_Chain$org_jmol_modelset_Group', function (chain, group) {
if (chain.groupCount == chain.groups.length) chain.groups=$I$(13).doubleLength$O(chain.groups);
chain.groups[chain.groupCount++]=group;
}, p$1);

Clazz.newMeth(C$, 'countGroup$I$S$S', function (modelIndex, code, group3) {
var ptm=modelIndex + 1;
if (this.group3Lists == null  || this.group3Lists[ptm] == null  ) return;
var g3code=(group3 + "   ").substring$I$I(0, 3);
var pt=this.group3Lists[ptm].indexOf$S(g3code);
if (pt < 0) {
this.group3Lists[ptm] += ",[" + g3code + "]" ;
pt=this.group3Lists[ptm].indexOf$S(g3code);
this.group3Counts[ptm]=$I$(13).arrayCopyI$IA$I(this.group3Counts[ptm], this.group3Counts[ptm].length + 10);
}this.group3Counts[ptm][(pt/6|0)]++;
pt=this.group3Lists[ptm].indexOf$S(",[" + g3code);
if (pt >= 0) this.group3Lists[ptm]=this.group3Lists[ptm].substring$I$I(0, pt) + code + this.group3Lists[ptm].substring$I(pt + 2) ;
if (modelIndex >= 0) p$1.countGroup$I$S$S.apply(this, [-1, code, group3]);
}, p$1);

Clazz.newMeth(C$, 'freeze', function () {
this.htAtomMap.clear$();
if (this.ms.ac < this.ms.at.length) this.ms.growAtomArrays$I(this.ms.ac);
if (this.ms.bondCount < this.ms.bo.length) this.ms.bo=$I$(13).arrayCopyObject$O$I(this.ms.bo, this.ms.bondCount);
for (var i=5; --i > 0; ) {
this.ms.numCached[i]=0;
var bondsCache=this.ms.freeBonds[i];
for (var j=bondsCache.length; --j >= 0; ) bondsCache[j]=null;

}
this.ms.setAtomNamesAndNumbers$I$I$org_jmol_modelset_AtomCollection(0, this.baseAtomIndex, this.modelSet0);
p$1.findElementsPresent.apply(this, []);
this.ms.resetMolecules$();
this.model=null;
this.currentChain=null;
if (!this.ms.haveBioModels || this.isPyMOLsession || this.isMutate  ) {
this.ms.freezeModels$();
return;
}var asDSSP=this.vwr.getBoolean$I(603979826);
var ret=this.ms.calculateStructuresAllExcept$javajs_util_BS$Z$Z$Z$Z$Z$I(this.structuresDefinedInFile, asDSSP, false, true, true, asDSSP, $I$(20).versionInt >= 1405000 && this.ms.getInfoM$S("DSSP1") == null   ? 2 : 1);
if (ret.length$() > 0) $I$(6).info$S(ret);
}, p$1);

Clazz.newMeth(C$, 'findElementsPresent', function () {
this.ms.elementsPresent=Clazz.array($I$(2), [this.ms.mc]);
for (var i=0; i < this.ms.mc; i++) this.ms.elementsPresent[i]=$I$(2).newN$I(64);

for (var i=this.ms.ac; --i >= 0; ) {
var n=this.ms.at[i].getAtomicAndIsotopeNumber$();
if (n >= $I$(17).elementNumberMax) n=$I$(17).elementNumberMax + $I$(17).altElementIndexFromNumber$I(n);
this.ms.elementsPresent[this.ms.at[i].mi].set$I(n);
}
}, p$1);

Clazz.newMeth(C$, 'applyStereochemistry', function () {
p$1.set2dZ$I$I.apply(this, [this.baseAtomIndex, this.ms.ac]);
if (this.vStereo != null ) {
var bsToTest=Clazz.new_($I$(2,1));
bsToTest.setBits$I$I(this.baseAtomIndex, this.ms.ac);
for (var i=this.vStereo.size$(); --i >= 0; ) {
var b=this.vStereo.get$I(i);
var dz2=(b.order == 1025 ? 3 : -3);
b.order=1;
if (b.atom2.z != b.atom1.z  && (dz2 < 0 ) == (b.atom2.z < b.atom1.z )  ) dz2 /= 3;
var bs=$I$(21).getBranchBitSet$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_Lst$I$Z$Z(this.ms.at, b.atom2.i, bsToTest, null, b.atom1.i, false, true);
bs.set$I(b.atom2.i);
for (var j=bs.nextSetBit$I(0); j >= 0; j=bs.nextSetBit$I(j + 1)) this.ms.at[j].z += dz2;

b.atom2.x=(b.atom1.x + b.atom2.x) / 2;
b.atom2.y=(b.atom1.y + b.atom2.y) / 2;
}
this.vStereo=null;
}this.is2D=false;
}, p$1);

Clazz.newMeth(C$, 'set2dZ$I$I', function (iatom1, iatom2) {
var atomlist=$I$(2).newN$I(iatom2);
var bsBranch=Clazz.new_($I$(2,1));
var v=Clazz.new_($I$(22,1));
var v0=$I$(22).new3$F$F$F(0, 1, 0);
var v1=Clazz.new_($I$(22,1));
var bs0=Clazz.new_($I$(2,1));
bs0.setBits$I$I(iatom1, iatom2);
for (var i=iatom1; i < iatom2; i++) if (!atomlist.get$I(i) && !bsBranch.get$I(i) ) {
bsBranch=p$1.getBranch2dZ$I$I$javajs_util_BS$javajs_util_BS$javajs_util_V3$javajs_util_V3$javajs_util_V3.apply(this, [i, -1, bs0, bsBranch, v, v0, v1]);
atomlist.or$javajs_util_BS(bsBranch);
}
}, p$1);

Clazz.newMeth(C$, 'getBranch2dZ$I$I$javajs_util_BS$javajs_util_BS$javajs_util_V3$javajs_util_V3$javajs_util_V3', function (atomIndex, atomIndexNot, bs0, bsBranch, v, v0, v1) {
var bs=$I$(2).newN$I(this.ms.ac);
if (atomIndex < 0) return bs;
var bsToTest=Clazz.new_($I$(2,1));
bsToTest.or$javajs_util_BS(bs0);
if (atomIndexNot >= 0) bsToTest.clear$I(atomIndexNot);
C$.setBranch2dZ$org_jmol_modelset_Atom$javajs_util_BS$javajs_util_BS$javajs_util_V3$javajs_util_V3$javajs_util_V3(this.ms.at[atomIndex], bs, bsToTest, v, v0, v1);
return bs;
}, p$1);

Clazz.newMeth(C$, 'setBranch2dZ$org_jmol_modelset_Atom$javajs_util_BS$javajs_util_BS$javajs_util_V3$javajs_util_V3$javajs_util_V3', function (atom, bs, bsToTest, v, v0, v1) {
var atomIndex=atom.i;
if (!bsToTest.get$I(atomIndex)) return;
bsToTest.clear$I(atomIndex);
bs.set$I(atomIndex);
if (atom.bonds == null ) return;
for (var i=atom.bonds.length; --i >= 0; ) {
var bond=atom.bonds[i];
if (bond.isHydrogen$()) continue;
var atom2=bond.getOtherAtom$org_jmol_modelset_Atom(atom);
C$.setAtom2dZ$org_jmol_modelset_Atom$org_jmol_modelset_Atom$javajs_util_V3$javajs_util_V3$javajs_util_V3(atom, atom2, v, v0, v1);
C$.setBranch2dZ$org_jmol_modelset_Atom$javajs_util_BS$javajs_util_BS$javajs_util_V3$javajs_util_V3$javajs_util_V3(atom2, bs, bsToTest, v, v0, v1);
}
}, 1);

Clazz.newMeth(C$, 'setAtom2dZ$org_jmol_modelset_Atom$org_jmol_modelset_Atom$javajs_util_V3$javajs_util_V3$javajs_util_V3', function (atomRef, atom2, v, v0, v1) {
v.sub2$javajs_util_T3$javajs_util_T3(atom2, atomRef);
v.z=0;
v.normalize$();
v1.cross$javajs_util_T3$javajs_util_T3(v0, v);
var theta=Math.acos(v.dot$javajs_util_T3(v0));
atom2.z=atomRef.z + (0.8 * Math.sin(4 * theta));
}, 1);

Clazz.newMeth(C$, 'finalizeShapes', function () {
this.ms.sm=this.vwr.shm;
this.ms.sm.setModelSet$org_jmol_modelset_ModelSet(this.ms);
this.ms.setBsHidden$javajs_util_BS(this.vwr.slm.getHiddenSet$());
if (!this.merging) this.ms.sm.resetShapes$();
this.ms.sm.loadDefaultShapes$org_jmol_modelset_ModelSet(this.ms);
if (this.ms.someModelsHaveAromaticBonds && this.vwr.getBoolean$I(603979944) ) this.ms.assignAromaticBondsBs$Z$javajs_util_BS(false, null);
if (this.merging && this.baseModelCount == 1 ) this.ms.sm.setShapePropertyBs$I$S$O$javajs_util_BS(6, "clearModelIndex", null, null);
}, p$1);

Clazz.newMeth(C$, 'undeleteAtom$I', function (iAtom) {
this.ms.at[iAtom].valence=($b$[0] = 0, $b$[0]);
});

Clazz.newMeth(C$, 'createAtomDataSet$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet$I$O$javajs_util_BS', function (vwr, modelSet, tokType, asc, bsSelected) {
if (asc == null ) return null;
var adapter=vwr.getModelAdapter$();
var pt=Clazz.new_($I$(23,1));
var atoms=modelSet.at;
var tolerance=vwr.getFloat$I(570425363);
if (modelSet.unitCells != null ) for (var i=bsSelected.nextSetBit$I(0); i >= 0; i=bsSelected.nextSetBit$I(i + 1)) if (atoms[i].atomSymmetry != null ) {
tolerance=-tolerance;
break;
}
var i=-1;
var n=0;
var loadAllData=($I$(24).cardinalityOf$javajs_util_BS(bsSelected) == vwr.ms.ac);
for (var iterAtom=adapter.getAtomIterator$O(asc); iterAtom.hasNext$(); ) {
var xyz=iterAtom.getXYZ$();
if (Float.isNaN$F(xyz.x + xyz.y + xyz.z )) continue;
if (tokType == 1145047050) {
i=bsSelected.nextSetBit$I(i + 1);
if (i < 0) break;
n++;
if ($I$(6).debugging) (function(a,f){return f.apply(null,a)})(["atomIndex = " + i + ": " + atoms[i] + " --> (" + new Float(xyz.x).toString() + "," + new Float(xyz.y).toString() + "," + new Float(xyz.z).toString() ],$I$(6).debug$S);
modelSet.setAtomCoord$I$F$F$F(i, xyz.x, xyz.y, xyz.z);
continue;
}pt.setT$javajs_util_T3(xyz);
var bs=$I$(2).newN$I(modelSet.ac);
modelSet.getAtomsWithin$F$javajs_util_T3$javajs_util_BS$I(tolerance, pt, bs, -1);
bs.and$javajs_util_BS(bsSelected);
if (loadAllData) {
n=$I$(24).cardinalityOf$javajs_util_BS(bs);
if (n == 0) {
$I$(6).warn$S("createAtomDataSet: no atom found at position " + pt);
continue;
} else if (n > 1 && $I$(6).debugging ) {
$I$(6).debug$S("createAtomDataSet: " + n + " atoms found at position " + pt );
}}switch (tokType) {
case 1145047055:
var vib=iterAtom.getVib$();
if (vib == null ) continue;
if ($I$(6).debugging) $I$(6).debug$S("xyz: " + pt + " vib: " + vib );
modelSet.setAtomCoords$javajs_util_BS$I$O(bs, 1145047055, vib);
break;
case 1128269825:
modelSet.setAtomProperty$javajs_util_BS$I$I$F$S$FA$SA(bs, tokType, 0, iterAtom.getOccupancy$(), null, null, null);
break;
case 1111492619:
modelSet.setAtomProperty$javajs_util_BS$I$I$F$S$FA$SA(bs, tokType, 0, iterAtom.getPartialCharge$(), null, null, null);
break;
case 1111492620:
modelSet.setAtomProperty$javajs_util_BS$I$I$F$S$FA$SA(bs, tokType, 0, iterAtom.getBfactor$(), null, null, null);
break;
}
}
switch (tokType) {
case 1145047055:
var vibName=adapter.getAtomSetName$O$I(asc, 0);
(function(a,f){return f.apply(null,a)})(["_vibrationName = " + vibName],$I$(6).info$S);
vwr.setStringProperty$S$S("_vibrationName", vibName);
break;
case 1145047050:
$I$(6).info$S(n + " atom positions read");
modelSet.recalculateLeadMidpointsAndWingVectors$I(-1);
if (n == modelSet.ac) return "boundbox {*};reset";
break;
}
return null;
}, 1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:13 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
