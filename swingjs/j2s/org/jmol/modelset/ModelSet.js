(function(){var P$=Clazz.newPackage("org.jmol.modelset"),p$1={},I$=[[0,'javajs.util.BS','javajs.util.Lst','org.jmol.util.BoxInfo','javajs.util.P3','org.jmol.modelset.Model','org.jmol.modelset.Atom','javajs.util.M3','javajs.util.M4','javajs.util.V3','org.jmol.util.BSUtil','org.jmol.api.Interface','javajs.util.AU','org.jmol.atomdata.RadiusData','org.jmol.viewer.JC','org.jmol.api.SymmetryInterface','org.jmol.modelset.Group','org.jmol.util.Escape','org.jmol.c.VDW','org.jmol.modelset.StateScript','java.util.Hashtable','org.jmol.util.Logger','org.jmol.util.JmolMolecule','org.jmol.bspt.Bspf','org.jmol.modelset.AtomIteratorWithinModelSet','org.jmol.modelset.AtomIteratorWithinModel','org.jmol.util.Edge','org.jmol.modelset.HBond','javajs.util.SB','javajs.util.PT','org.jmol.util.Elements','org.jmol.c.PAL','org.jmol.script.ScriptCompiler','javajs.util.P4','javajs.util.Quat','Boolean','javajs.util.A4','javajs.util.Measure','org.jmol.util.SimpleUnitCell']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ModelSet", null, 'org.jmol.modelset.BondCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.showRebondTimes=true;
this.echoShapeActive=false;
},1);

C$.$fields$=[['Z',['haveBioModels','haveUnitCells','isXYZ','someModelsHaveSymmetry','someModelsHaveAromaticBonds','someModelsHaveFractionalCoordinates','isBbcageDefault','showRebondTimes','proteinStructureTainted','echoShapeActive','maxBondWarned'],'I',['mc','thisStateModel'],'S',['modelSetName','modelSetTypeName'],'O',['bsSymmetry','javajs.util.BS','am','org.jmol.modelset.Model[]','unitCells','org.jmol.api.SymmetryInterface[]','closest','org.jmol.modelset.Atom[]','modelNumbers','int[]','+modelFileNumbers','modelNumbersForAtomLabel','String[]','+modelNames','+frameTitles','elementsPresent','javajs.util.BS[]','modelSetProperties','java.util.Properties','msInfo','java.util.Map','bboxModels','javajs.util.BS','+bboxAtoms','boxInfo','org.jmol.util.BoxInfo','stateScripts','javajs.util.Lst','+vibrationSteps','selectedMolecules','javajs.util.BS','+bsAll','sm','org.jmol.viewer.ShapeManager','htPeaks','java.util.Hashtable','vOrientations','javajs.util.Quat[]','ptTemp','javajs.util.P3','+ptTemp1','+ptTemp2','matTemp','javajs.util.M3','+matInv','mat4','javajs.util.M4','+mat4t','vTemp','javajs.util.V3','translations','javajs.util.P3[]','defaultBBox','org.jmol.util.BoxInfo']]
,['F',['hbondMinRasmol','hbondMaxReal']]]

Clazz.newMeth(C$, 'getBoxInfo$', function () {
return this.boxInfo;
});

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$S', function (vwr, name) {
Clazz.super_(C$, this);
this.vwr=vwr;
this.modelSetName=name;
this.selectedMolecules=Clazz.new_($I$(1,1));
this.stateScripts=Clazz.new_($I$(2,1));
this.boxInfo=Clazz.new_($I$(3,1));
this.boxInfo.addBoundBoxPoint$javajs_util_T3($I$(4).new3$F$F$F(-10, -10, -10));
this.boxInfo.addBoundBoxPoint$javajs_util_T3($I$(4).new3$F$F$F(10, 10, 10));
this.am=Clazz.array($I$(5), [1]);
this.modelNumbers=Clazz.array(Integer.TYPE, [1]);
this.modelFileNumbers=Clazz.array(Integer.TYPE, [1]);
this.modelNumbersForAtomLabel=Clazz.array(String, [1]);
this.modelNames=Clazz.array(String, [1]);
this.frameTitles=Clazz.array(String, [1]);
this.closest=Clazz.array($I$(6), [1]);
this.ptTemp=Clazz.new_($I$(4,1));
this.ptTemp1=Clazz.new_($I$(4,1));
this.ptTemp2=Clazz.new_($I$(4,1));
this.matTemp=Clazz.new_($I$(7,1));
this.matInv=Clazz.new_($I$(7,1));
this.mat4=Clazz.new_($I$(8,1));
this.mat4t=Clazz.new_($I$(8,1));
this.vTemp=Clazz.new_($I$(9,1));
this.setupBC$();
}, 1);

Clazz.newMeth(C$, 'releaseModelSet$', function () {
this.am=null;
this.closest[0]=null;
this.am=null;
this.bsSymmetry=null;
this.bsAll=null;
this.unitCells=null;
this.releaseModelSetBC$();
});

Clazz.newMeth(C$, 'getEchoStateActive$', function () {
return this.echoShapeActive;
});

Clazz.newMeth(C$, 'setEchoStateActive$Z', function (TF) {
this.echoShapeActive=TF;
});

Clazz.newMeth(C$, 'getModelSetTypeName$', function () {
return this.modelSetTypeName;
});

Clazz.newMeth(C$, 'getModelNumberIndex$I$Z$Z', function (modelNumber, useModelNumber, doSetTrajectory) {
if (useModelNumber) {
for (var i=0; i < this.mc; i++) if (this.modelNumbers[i] == modelNumber || modelNumber < 1000000 && this.modelNumbers[i] == 1000000 + modelNumber  ) return i;

return -1;
}if (modelNumber < 1000000) return modelNumber;
for (var i=0; i < this.mc; i++) if (this.modelFileNumbers[i] == modelNumber) {
if (doSetTrajectory && this.isTrajectory$I(i) ) this.setTrajectory$I(i);
return i;
}
return -1;
});

Clazz.newMeth(C$, 'getModelDataBaseName$javajs_util_BS', function (bsAtoms) {
for (var i=0; i < this.mc; i++) {
if (bsAtoms.equals$O(this.am[i].bsAtoms)) return this.getInfo$I$S(i, "dbName");
}
return null;
});

Clazz.newMeth(C$, 'setTrajectory$I', function (modelIndex) {
if (modelIndex >= 0 && this.isTrajectory$I(modelIndex)  && this.at[this.am[modelIndex].firstAtomIndex].mi != modelIndex ) this.trajectory.setModel$I(modelIndex);
});

Clazz.newMeth(C$, 'getBitSetTrajectories$', function () {
return (this.trajectory == null  ? null : this.trajectory.getModelsSelected$());
});

Clazz.newMeth(C$, 'setTrajectoryBs$javajs_util_BS', function (bsModels) {
if (this.trajectory != null ) for (var i=0; i < this.mc; i++) if (bsModels.get$I(i)) this.setTrajectory$I(i);

});

Clazz.newMeth(C$, 'morphTrajectories$I$I$F', function (m1, m2, f) {
if (m1 >= 0 && m2 >= 0  && this.isTrajectory$I(m1)  && this.isTrajectory$I(m2) ) this.trajectory.morph$I$I$F(m1, m2, f);
});

Clazz.newMeth(C$, 'getTranslation$I', function (iModel) {
return (this.translations == null  || iModel >= this.translations.length  ? null : this.translations[iModel]);
});

Clazz.newMeth(C$, 'translateModel$I$javajs_util_T3', function (iModel, pt) {
if (pt == null ) {
var t=this.getTranslation$I(iModel);
if (t == null ) return;
pt=$I$(4).newP$javajs_util_T3(t);
pt.scale$F(-1);
this.translateModel$I$javajs_util_T3(iModel, pt);
this.translations[iModel]=null;
return;
}if (this.translations == null  || this.translations.length <= iModel ) this.translations=Clazz.array($I$(4), [this.mc]);
if (this.translations[iModel] == null ) this.translations[iModel]=Clazz.new_($I$(4,1));
this.translations[iModel].add$javajs_util_T3(pt);
var bs=this.am[iModel].bsAtoms;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) this.at[i].add$javajs_util_T3(pt);

});

Clazz.newMeth(C$, 'getFrameOffsets$javajs_util_BS$Z', function (bsAtoms, isFull) {
if (bsAtoms == null ) {
if (isFull) for (var i=this.mc; --i >= 0; ) {
var m=this.am[i];
if (!m.isJmolDataFrame && !m.isTrajectory ) this.translateModel$I$javajs_util_T3(m.modelIndex, null);
}
return null;
}var i0=bsAtoms.nextSetBit$I(0);
if (i0 < 0) return null;
if (isFull) {
var bs=$I$(10).copy$javajs_util_BS(bsAtoms);
var pt=null;
var pdiff=Clazz.new_($I$(4,1));
for (var i=0; i < this.mc; i++) {
var m=this.am[i];
if (!m.isJmolDataFrame && !m.isTrajectory ) {
var j=bs.nextSetBit$I(0);
if (m.bsAtoms.get$I(j)) {
if (pt == null ) {
pt=$I$(4).newP$javajs_util_T3(this.at[j]);
} else {
pdiff.sub2$javajs_util_T3$javajs_util_T3(pt, this.at[j]);
this.translateModel$I$javajs_util_T3(i, pdiff);
}}}bs.andNot$javajs_util_BS(m.bsAtoms);
}
return null;
}var offsets=Clazz.array($I$(4), [this.mc]);
for (var i=this.mc; --i >= 0; ) offsets[i]=Clazz.new_($I$(4,1));

var lastModel=0;
var n=0;
var offset=offsets[0];
var asTrajectory=(this.trajectory != null  && this.trajectory.steps.size$() == this.mc );
var m1=(asTrajectory ? this.mc : 1);
offsets[0].set$F$F$F(0, 0, 0);
for (var m=0; m < m1; m++) {
if (asTrajectory) this.setTrajectory$I(m);
for (var i=0; i <= this.ac; i++) {
if (i == this.ac || this.at[i].mi != lastModel ) {
if (n > 0) {
offset.scale$F(-1.0 / n);
if (lastModel != 0) offset.sub$javajs_util_T3(offsets[0]);
n=0;
}if (i == this.ac) break;
lastModel=this.at[i].mi;
offset=offsets[lastModel];
}if (!bsAtoms.get$I(i)) continue;
offset.add$javajs_util_T3(this.at[i]);
n++;
}
}
return offsets;
});

Clazz.newMeth(C$, 'getAtoms$I$O', function (tokType, specInfo) {
switch (tokType) {
default:
return (function(a,f){return f.apply(null,a)})([this.getAtomBitsMaybeDeleted$I$O(tokType, specInfo), this.vwr.slm.bsDeleted],$I$(10).andNot$javajs_util_BS$javajs_util_BS);
case 1073742358:
var modelNumber=(specInfo).intValue$();
var modelIndex=this.getModelNumberIndex$I$Z$Z(modelNumber, true, true);
return (modelIndex < 0 && modelNumber > 0  ? Clazz.new_($I$(1,1)) : this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex));
case 1275203608:
var data=Clazz.array(java.lang.Object, -1, [null, null, null]);
this.vwr.shm.getShapePropertyData$I$S$OA(21, "getCenters", data);
return (data[1] == null  ? Clazz.new_($I$(1,1)) : data[1]);
}
});

Clazz.newMeth(C$, 'findNearestAtomIndex$I$I$javajs_util_BS$I', function (x, y, bsNot, min) {
if (this.ac == 0) return -1;
this.closest[0]=null;
if (this.g3d.isAntialiased$()) {
x<<=1;
y<<=1;
}this.findNearest2$I$I$org_jmol_modelset_AtomA$javajs_util_BS$I(x, y, this.closest, bsNot, min);
this.sm.findNearestShapeAtomIndex$I$I$org_jmol_modelset_AtomA$javajs_util_BS(x, y, this.closest, bsNot);
var closestIndex=(this.closest[0] == null  ? -1 : this.closest[0].i);
this.closest[0]=null;
return closestIndex;
});

Clazz.newMeth(C$, 'calculatePointGroup$javajs_util_BS', function (bsAtoms) {
return p$1.calculatePointGroupForFirstModel$javajs_util_BS$Z$Z$S$I$F$javajs_util_T3A$javajs_util_P3$S.apply(this, [bsAtoms, false, false, null, 0, 0, null, null, null]);
});

Clazz.newMeth(C$, 'getPointGroupInfo$javajs_util_BS', function (bsAtoms) {
return p$1.calculatePointGroupForFirstModel$javajs_util_BS$Z$Z$S$I$F$javajs_util_T3A$javajs_util_P3$S.apply(this, [bsAtoms, false, true, null, 0, 0, null, null, null]);
});

Clazz.newMeth(C$, 'getPointGroupAsString$javajs_util_BS$S$I$F$javajs_util_P3A$javajs_util_P3$S', function (bsAtoms, type, index, scale, pts, center, id) {
return p$1.calculatePointGroupForFirstModel$javajs_util_BS$Z$Z$S$I$F$javajs_util_T3A$javajs_util_P3$S.apply(this, [bsAtoms, true, false, type, index, scale, pts, center, id]);
});

Clazz.newMeth(C$, 'calculatePointGroupForFirstModel$javajs_util_BS$Z$Z$S$I$F$javajs_util_T3A$javajs_util_P3$S', function (bsAtoms, doAll, asInfo, type, index, scale, pts, center, id) {
var pointGroup=this.pointGroup;
var symmetry=$I$(11).getSymmetry$org_jmol_viewer_Viewer$S(this.vwr, "ms");
var bs=null;
var haveVibration=false;
var isPolyhedron=false;
var localEnvOnly=false;
var isPoints=(pts != null );
var modelIndex=this.vwr.am.cmi;
if (!isPoints) {
var iAtom=(bsAtoms == null  ? -1 : bsAtoms.nextSetBit$I(0));
if (modelIndex < 0 && iAtom >= 0 ) modelIndex=this.at[iAtom].mi;
if (modelIndex < 0) {
modelIndex=this.vwr.getVisibleFramesBitSet$().nextSetBit$I(0);
bsAtoms=null;
}bs=this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex);
localEnvOnly=(bsAtoms != null  && bs.cardinality$() != bsAtoms.cardinality$() );
if (bsAtoms != null ) bs.and$javajs_util_BS(bsAtoms);
iAtom=bs.nextSetBit$I(0);
if (iAtom < 0) {
bs=this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex);
iAtom=bs.nextSetBit$I(0);
}var obj=this.vwr.shm.getShapePropertyIndex$I$S$I(18, "mad", iAtom);
haveVibration=(obj != null  && (obj).intValue$() != 0  || this.vwr.tm.vibrationOn );
isPolyhedron=(type != null  && type.toUpperCase$().indexOf$S(":POLY") >= 0 );
if (isPolyhedron) {
var data=Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(iAtom), null]);
this.vwr.shm.getShapePropertyData$I$S$OA(21, "points", data);
pts=data[1];
if (pts == null ) return null;
bs=null;
haveVibration=false;
pointGroup=null;
} else {
pts=this.at;
}}if (type != null  && type.indexOf$S(":") >= 0 ) type=type.substring$I$I(0, type.indexOf$S(":"));
pointGroup=symmetry.setPointGroup$org_jmol_api_SymmetryInterface$javajs_util_T3$javajs_util_T3A$javajs_util_BS$Z$F$F$Z(pointGroup, center, pts, bs, haveVibration, (isPoints ? 0 : this.vwr.getFloat$I(570425382)), this.vwr.getFloat$I(570425384), localEnvOnly);
if (!isPolyhedron && !isPoints ) this.pointGroup=pointGroup;
if (!doAll && !asInfo ) return pointGroup.getPointGroupName$();
var ret=pointGroup.getPointGroupInfo$I$S$Z$S$I$F(modelIndex, id, asInfo, type, index, scale);
return (asInfo ? ret : (this.mc > 1 ? "frame " + this.getModelNumberDotted$I(modelIndex) + "; "  : "") + ret);
}, p$1);

Clazz.newMeth(C$, 'getDefaultStructure$javajs_util_BS$javajs_util_BS', function (bsAtoms, bsModified) {
return (this.haveBioModels ? this.bioModelset.getAllDefaultStructures$javajs_util_BS$javajs_util_BS(bsAtoms, bsModified) : "");
});

Clazz.newMeth(C$, 'deleteModelBonds$I', function (modelIndex) {
var bsAtoms=this.getModelAtomBitSetIncludingDeleted$I$Z(modelIndex, false);
this.makeConnections$F$F$I$I$javajs_util_BS$javajs_util_BS$javajs_util_BS$Z$Z$F(0, 3.4028235E38, 131071, 12291, bsAtoms, bsAtoms, null, false, false, 0);
});

Clazz.newMeth(C$, 'makeConnections$F$F$I$I$javajs_util_BS$javajs_util_BS$javajs_util_BS$Z$Z$F', function (minDistance, maxDistance, order, connectOperation, bsA, bsB, bsBonds, isBonds, addGroup, energy) {
if (connectOperation == 1073741852 && order != 2048 ) {
var stateScript="connect ";
if (minDistance != 0.1 ) stateScript += new Float(minDistance).toString() + " ";
if (maxDistance != 1.0E8 ) stateScript += new Float(maxDistance).toString() + " ";
this.addStateScript$S$javajs_util_BS$javajs_util_BS$javajs_util_BS$S$Z$Z(stateScript, (isBonds ? bsA : null), (isBonds ? null : bsA), (isBonds ? null : bsB), " auto", false, true);
}this.moleculeCount=0;
return this.makeConnections2$F$F$I$I$javajs_util_BS$javajs_util_BS$javajs_util_BS$Z$Z$F(minDistance, maxDistance, order, connectOperation, bsA, bsB, bsBonds, isBonds, addGroup, energy);
});

Clazz.newMeth(C$, 'setPdbConectBonding$I$I$javajs_util_BS', function (baseAtomIndex, baseModelIndex, bsExclude) {
var mad=this.vwr.getMadBond$();
for (var i=baseModelIndex; i < this.mc; i++) {
var vConnect=this.getInfo$I$S(i, "PDB_CONECT_bonds");
if (vConnect == null ) continue;
var nConnect=vConnect.size$();
this.setInfo$I$O$O(i, "initialBondCount", Integer.valueOf$I(nConnect));
var atomInfo=this.getInfo$I$S(i, "PDB_CONECT_firstAtom_count_max");
var firstAtom=atomInfo[0] + baseAtomIndex;
var atomMax=firstAtom + atomInfo[1];
var max=atomInfo[2];
var serialMap=Clazz.array(Integer.TYPE, [max + 1]);
var iSerial;
for (var iAtom=firstAtom; iAtom < atomMax; iAtom++) if ((iSerial=this.atomSerials[iAtom]) > 0) serialMap[iSerial]=iAtom + 1;

for (var iConnect=0; iConnect < nConnect; iConnect++) {
var pair=vConnect.get$I(iConnect);
var sourceSerial=pair[0];
var targetSerial=pair[1];
var order=($s$[0] = pair[2], $s$[0]);
if (sourceSerial < 0 || targetSerial < 0  || sourceSerial > max  || targetSerial > max ) continue;
var sourceIndex=serialMap[sourceSerial] - 1;
var targetIndex=serialMap[targetSerial] - 1;
if (sourceIndex < 0 || targetIndex < 0 ) continue;
var atomA=this.at[sourceIndex];
var atomB=this.at[targetIndex];
if (bsExclude != null ) {
if (atomA.isHetero$()) bsExclude.set$I(sourceIndex);
if (atomB.isHetero$()) bsExclude.set$I(targetIndex);
}if (atomA.altloc == atomB.altloc || atomA.altloc == "\u0000"  || atomB.altloc == "\u0000" ) this.getOrAddBond$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS$F$Z(atomA, atomB, order, (order == 2048 ? ($s$[0] = 1, $s$[0]) : mad), null, 0, false);
}
}
});

Clazz.newMeth(C$, 'deleteAllBonds$', function () {
this.moleculeCount=0;
for (var i=this.stateScripts.size$(); --i >= 0; ) {
if (this.stateScripts.get$I(i).isConnect$()) {
this.stateScripts.removeItemAt$I(i);
}}
this.deleteAllBonds2$();
});

Clazz.newMeth(C$, 'includeAllRelatedFrames$javajs_util_BS', function (bsModels) {
var baseModel=0;
for (var i=0; i < this.mc; i++) {
var isTraj=this.isTrajectory$I(i);
var isBase=(isTraj && bsModels.get$I(baseModel=this.am[i].trajectoryBaseIndex) );
if (bsModels.get$I(i)) {
if (isTraj && !isBase ) {
bsModels.set$I(baseModel);
p$1.includeAllRelatedFrames$javajs_util_BS.apply(this, [bsModels]);
return;
}} else if (isTraj || this.isJmolDataFrameForModel$I(i) && bsModels.get$I(this.am[i].dataSourceFrame)  ) {
bsModels.set$I(i);
}}
}, p$1);

Clazz.newMeth(C$, 'deleteModels$javajs_util_BS', function (bsModels) {
p$1.includeAllRelatedFrames$javajs_util_BS.apply(this, [bsModels]);
var nModelsDeleted=bsModels.cardinality$();
if (nModelsDeleted == 0) return null;
this.moleculeCount=0;
if (this.msInfo != null ) this.msInfo.remove$O("models");
for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) this.clearDataFrameReference$I(i);

var bsDeleted;
if (nModelsDeleted == this.mc) {
bsDeleted=this.getModelAtomBitSetIncludingDeleted$I$Z(-1, true);
this.vwr.zap$Z$Z$Z(true, false, false);
return bsDeleted;
}this.validateBspf$Z(false);
var newModels=Clazz.array($I$(5), [this.mc - nModelsDeleted]);
var oldModels=this.am;
bsDeleted=Clazz.new_($I$(1,1));
for (var i=0, mpt=0; i < this.mc; i++) if (bsModels.get$I(i)) {
this.getAtomCountInModel$I(i);
bsDeleted.or$javajs_util_BS(this.getModelAtomBitSetIncludingDeleted$I$Z(i, false));
} else {
this.am[i].modelIndex=mpt;
newModels[mpt++]=this.am[i];
}
this.am=newModels;
var oldModelCount=this.mc;
var bsBonds=this.getBondsForSelectedAtoms$javajs_util_BS$Z(bsDeleted, true);
this.deleteBonds$javajs_util_BS$Z(bsBonds, true);
for (var i=0, mpt=0; i < oldModelCount; i++) {
if (!bsModels.get$I(i)) {
mpt++;
continue;
}var nAtoms=oldModels[i].act;
if (nAtoms == 0) continue;
var bsModelAtoms=oldModels[i].bsAtoms;
var firstAtomIndex=oldModels[i].firstAtomIndex;
$I$(10).deleteBits$javajs_util_BS$javajs_util_BS(this.bsSymmetry, bsModelAtoms);
p$1.deleteModel$I$I$I$javajs_util_BS$javajs_util_BS.apply(this, [mpt, firstAtomIndex, nAtoms, bsModelAtoms, bsBonds]);
for (var j=oldModelCount; --j > i; ) oldModels[j].fixIndices$I$I$javajs_util_BS(mpt, nAtoms, bsModelAtoms);

this.vwr.shm.deleteShapeAtoms$OA$javajs_util_BS(Clazz.array(java.lang.Object, -1, [newModels, this.at, Clazz.array(Integer.TYPE, -1, [mpt, firstAtomIndex, nAtoms])]), bsModelAtoms);
this.mc--;
}
this.haveBioModels=false;
for (var i=this.mc; --i >= 0; ) if (this.am[i].isBioModel) {
this.haveBioModels=true;
this.bioModelset.set$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet(this.vwr, this);
}
this.validateBspf$Z(false);
this.bsAll=null;
this.resetMolecules$();
this.isBbcageDefault=false;
this.calcBoundBoxDimensions$javajs_util_BS$F(null, 1);
return bsDeleted;
});

Clazz.newMeth(C$, 'resetMolecules$', function () {
this.molecules=null;
this.moleculeCount=0;
p$1.resetChirality.apply(this, []);
});

Clazz.newMeth(C$, 'resetChirality', function () {
if (this.haveChirality) {
var modelIndex=-1;
for (var i=this.ac; --i >= 0; ) {
var a=this.at[i];
a.setCIPChirality$I(0);
if (a.mi != modelIndex) this.am[modelIndex=a.mi].hasChirality=false;
}
}}, p$1);

Clazz.newMeth(C$, 'deleteModel$I$I$I$javajs_util_BS$javajs_util_BS', function (modelIndex, firstAtomIndex, nAtoms, bsModelAtoms, bsBonds) {
if (modelIndex < 0) {
return;
}this.modelNumbers=$I$(12).deleteElements$O$I$I(this.modelNumbers, modelIndex, 1);
this.modelFileNumbers=$I$(12).deleteElements$O$I$I(this.modelFileNumbers, modelIndex, 1);
this.modelNumbersForAtomLabel=$I$(12).deleteElements$O$I$I(this.modelNumbersForAtomLabel, modelIndex, 1);
this.modelNames=$I$(12).deleteElements$O$I$I(this.modelNames, modelIndex, 1);
this.frameTitles=$I$(12).deleteElements$O$I$I(this.frameTitles, modelIndex, 1);
this.thisStateModel=-1;
var group3Lists=this.getInfoM$S("group3Lists");
var group3Counts=this.getInfoM$S("group3Counts");
var ptm=modelIndex + 1;
if (group3Lists != null  && group3Lists[ptm] != null  ) {
for (var i=(group3Lists[ptm].length$()/6|0); --i >= 0; ) if (group3Counts[ptm][i] > 0) {
group3Counts[0][i]-=group3Counts[ptm][i];
if (group3Counts[0][i] == 0) group3Lists[0]=group3Lists[0].substring$I$I(0, i * 6) + ",[" + group3Lists[0].substring$I(i * 6 + 2) ;
}
}if (group3Lists != null ) {
this.msInfo.put$O$O("group3Lists", $I$(12).deleteElements$O$I$I(group3Lists, modelIndex, 1));
this.msInfo.put$O$O("group3Counts", $I$(12).deleteElements$O$I$I(group3Counts, modelIndex, 1));
}if (this.unitCells != null ) {
this.unitCells=$I$(12).deleteElements$O$I$I(this.unitCells, modelIndex, 1);
}for (var i=this.stateScripts.size$(); --i >= 0; ) {
if (!this.stateScripts.get$I(i).deleteAtoms$I$javajs_util_BS$javajs_util_BS(modelIndex, bsBonds, bsModelAtoms)) {
this.stateScripts.removeItemAt$I(i);
}}
this.deleteModelAtoms$I$I$javajs_util_BS(firstAtomIndex, nAtoms, bsModelAtoms);
this.vwr.deleteModelAtoms$I$I$I$javajs_util_BS(modelIndex, firstAtomIndex, nAtoms, bsModelAtoms);
}, p$1);

Clazz.newMeth(C$, 'setAtomProperty$javajs_util_BS$I$I$F$S$FA$SA', function (bs, tok, iValue, fValue, sValue, values, list) {
switch (tok) {
case 1114249217:
case 1112152066:
case 1112152071:
case 1112152073:
case 1112152074:
case 1649022989:
case 1112152078:
if (fValue > 4.0 ) fValue=4.0;
if (values != null ) {
var newValues=Clazz.array(Float.TYPE, [this.ac]);
try {
for (var i=bs.nextSetBit$I(0), ii=0; i >= 0; i=bs.nextSetBit$I(i + 1)) newValues[i]=values[ii++];

} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return;
} else {
throw e;
}
}
values=newValues;
}case 1112152070:
case 1112152076:
var rd=null;
var mar=0;
if (values == null ) {
if (fValue > 16 ) fValue=16.1;
if (fValue < 0 ) fValue=0;
mar=(Math.floor(fValue * 2000)|0);
} else {
rd=Clazz.new_($I$(13,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW,[values, 0, null, null]);
}this.sm.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS($I$(14).shapeTokenIndex$I(tok), mar, rd, bs);
return;
}
this.setAPm$javajs_util_BS$I$I$F$S$FA$SA(bs, tok, iValue, fValue, sValue, values, list);
});

Clazz.newMeth(C$, 'getFileData$I', function (modelIndex) {
if (modelIndex < 0) return "";
var fileData=this.getInfo$I$S(modelIndex, "fileData");
if (fileData != null ) return fileData;
if (!this.getInfoB$I$S(modelIndex, "isCIF")) return this.getPDBHeader$I(modelIndex);
fileData=this.vwr.getCifData$I(modelIndex);
this.setInfo$I$O$O(modelIndex, "fileData", fileData);
return fileData;
});

Clazz.newMeth(C$, 'addHydrogens$javajs_util_Lst$javajs_util_P3A', function (vConnections, pts) {
var modelIndex=this.mc - 1;
var bs=Clazz.new_($I$(1,1));
if (this.isTrajectory$I(modelIndex) || this.am[modelIndex].getGroupCount$() > 1 ) {
return bs;
}this.growAtomArrays$I(this.ac + pts.length);
var rd=this.vwr.rd;
var mad=this.getDefaultMadFromOrder$I(1);
this.am[modelIndex].resetDSSR$Z(false);
for (var i=0, n=this.am[modelIndex].act + 1; i < vConnections.size$(); i++, n++) {
var atom1=vConnections.get$I(i);
var atom2=this.addAtom$I$org_jmol_modelset_Group$I$S$S$I$I$I$javajs_util_P3$F$javajs_util_V3$I$F$F$F$javajs_util_Lst$Z$B$javajs_util_BS(modelIndex, atom1.group, 1, "H" + n, null, n, atom1.getSeqID$(), n, pts[i], NaN, null, 0, 0, 100, NaN, null, false, 0, null);
atom2.setMadAtom$org_jmol_viewer_Viewer$org_jmol_atomdata_RadiusData(this.vwr, rd);
bs.set$I(atom2.i);
this.bondAtoms$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS$F$Z$Z(atom1, atom2, 1, mad, null, 0, false, false);
}
this.sm.loadDefaultShapes$org_jmol_modelset_ModelSet(this);
return bs;
});

Clazz.newMeth(C$, 'mergeModelArrays$org_jmol_modelset_ModelSet', function (mergeModelSet) {
this.at=mergeModelSet.at;
this.bo=mergeModelSet.bo;
this.stateScripts=mergeModelSet.stateScripts;
this.proteinStructureTainted=mergeModelSet.proteinStructureTainted;
this.thisStateModel=-1;
this.bsSymmetry=mergeModelSet.bsSymmetry;
this.modelFileNumbers=mergeModelSet.modelFileNumbers;
this.modelNumbersForAtomLabel=mergeModelSet.modelNumbersForAtomLabel;
this.modelNames=mergeModelSet.modelNames;
this.modelNumbers=mergeModelSet.modelNumbers;
this.frameTitles=mergeModelSet.frameTitles;
this.haveChirality=mergeModelSet.haveChirality;
if (this.msInfo != null ) this.msInfo.remove$O("models");
this.mergeAtomArrays$org_jmol_modelset_AtomCollection(mergeModelSet);
});

Clazz.newMeth(C$, 'getUnitCell$I', function (modelIndex) {
if (modelIndex < 0 || modelIndex >= this.mc ) return null;
if (this.am[modelIndex].simpleCage != null ) return this.am[modelIndex].simpleCage;
if (this.unitCells != null  && modelIndex < this.unitCells.length  && this.unitCells[modelIndex] != null   && this.unitCells[modelIndex].haveUnitCell$() ) return this.unitCells[modelIndex];
if (this.getInfo$I$S(modelIndex, "unitCellParams") != null ) {
if (this.unitCells == null ) this.unitCells=Clazz.array($I$(15), [this.mc]);
this.haveUnitCells=true;
return this.unitCells[modelIndex]=this.vwr.getSymTemp$().setSymmetryInfo$I$java_util_Map$FA(modelIndex, this.am[modelIndex].auxiliaryInfo, null);
}return null;
});

Clazz.newMeth(C$, 'setModelCage$I$org_jmol_api_SymmetryInterface', function (modelIndex, simpleCage) {
if (modelIndex >= 0 && modelIndex < this.mc ) {
this.am[modelIndex].simpleCage=simpleCage;
this.haveUnitCells=true;
}});

Clazz.newMeth(C$, 'getModelName$I', function (modelIndex) {
return this.mc < 1 ? "" : modelIndex >= 0 ? this.modelNames[modelIndex] : this.modelNumbersForAtomLabel[-1 - modelIndex];
});

Clazz.newMeth(C$, 'getModelTitle$I', function (modelIndex) {
return this.getInfo$I$S(modelIndex, "title");
});

Clazz.newMeth(C$, 'getModelFileName$I', function (modelIndex) {
return this.getInfo$I$S(modelIndex, "fileName");
});

Clazz.newMeth(C$, 'getModelFileType$I', function (modelIndex) {
return this.getInfo$I$S(modelIndex, "fileType");
});

Clazz.newMeth(C$, 'setFrameTitle$javajs_util_BS$O', function (bsFrames, title) {
if (Clazz.instanceOf(title, "java.lang.String")) {
for (var i=bsFrames.nextSetBit$I(0); i >= 0; i=bsFrames.nextSetBit$I(i + 1)) this.frameTitles[i]=title;

} else {
var list=title;
for (var i=bsFrames.nextSetBit$I(0), n=0; i >= 0; i=bsFrames.nextSetBit$I(i + 1)) if (n < list.length) this.frameTitles[i]=list[n++];

}});

Clazz.newMeth(C$, 'getFrameTitle$I', function (modelIndex) {
return (modelIndex >= 0 && modelIndex < this.mc  ? this.frameTitles[modelIndex] : "");
});

Clazz.newMeth(C$, 'getModelNumberForAtomLabel$I', function (modelIndex) {
return this.modelNumbersForAtomLabel[modelIndex];
});

Clazz.newMeth(C$, 'getGroups$', function () {
var n=0;
for (var i=0; i < this.mc; i++) n+=this.am[i].getGroupCount$();

var groups=Clazz.array($I$(16), [n]);
for (var i=0, iGroup=0; i < this.mc; i++) for (var j=0; j < this.am[i].chainCount; j++) for (var k=0; k < this.am[i].chains[j].groupCount; k++) {
groups[iGroup]=this.am[i].chains[j].groups[k];
groups[iGroup].groupIndex=iGroup;
iGroup++;
}


return groups;
});

Clazz.newMeth(C$, 'getUnitCellParams$', function () {
var c=this.getUnitCell$I(0);
return (c == null  ? null : c.getUnitCellParams$());
});

Clazz.newMeth(C$, 'setCrystallographicDefaults$', function () {
return !this.haveBioModels && this.someModelsHaveSymmetry && this.someModelsHaveFractionalCoordinates  ;
});

Clazz.newMeth(C$, 'getBoundBoxCenter$I', function (modelIndex) {
return (this.isJmolDataFrameForModel$I(modelIndex) ? Clazz.new_($I$(4,1)) : (p$1.getDefaultBoundBox.apply(this, []) == null  ? this.boxInfo : this.defaultBBox).getBoundBoxCenter$());
});

Clazz.newMeth(C$, 'getBoundBoxCornerVector$', function () {
return this.boxInfo.getBoundBoxCornerVector$();
});

Clazz.newMeth(C$, 'getBBoxVertices$', function () {
return this.boxInfo.getBoundBoxVertices$();
});

Clazz.newMeth(C$, 'setBoundBox$javajs_util_T3$javajs_util_T3$Z$F', function (pt1, pt2, byCorner, scale) {
this.isBbcageDefault=false;
this.bboxModels=null;
this.bboxAtoms=null;
this.boxInfo.setBoundBox$javajs_util_T3$javajs_util_T3$Z$F(pt1, pt2, byCorner, scale);
});

Clazz.newMeth(C$, 'getBoundBoxCommand$Z', function (withOptions) {
if (!withOptions && this.bboxAtoms != null  ) return "boundbox " + $I$(17).eBS$javajs_util_BS(this.bboxAtoms);
this.ptTemp.setT$javajs_util_T3(this.boxInfo.getBoundBoxCenter$());
var bbVector=this.boxInfo.getBoundBoxCornerVector$();
var s=(withOptions ? "boundbox " + $I$(17).eP$javajs_util_T3(this.ptTemp) + " " + $I$(17).eP$javajs_util_T3(bbVector) + "\n#or\n"  : "");
this.ptTemp.sub$javajs_util_T3(bbVector);
s += "boundbox corners " + $I$(17).eP$javajs_util_T3(this.ptTemp) + " " ;
this.ptTemp.scaleAdd2$F$javajs_util_T3$javajs_util_T3(2, bbVector, this.ptTemp);
var v=Math.abs(8 * bbVector.x * bbVector.y * bbVector.z );
s += $I$(17).eP$javajs_util_T3(this.ptTemp) + " # volume = " + new Float(v).toString() ;
return s;
});

Clazz.newMeth(C$, 'findAtomsInRectangle$org_jmol_util_Rectangle', function (rect) {
var bsModels=this.vwr.getVisibleFramesBitSet$();
var bs=Clazz.new_($I$(1,1));
for (var i=this.ac; --i >= 0; ) {
var atom=this.at[i];
if (!bsModels.get$I(atom.mi)) i=this.am[atom.mi].firstAtomIndex;
 else if (atom.checkVisible$() && rect.contains$I$I(atom.sX, atom.sY) ) bs.set$I(i);
}
return bs;
});

Clazz.newMeth(C$, 'getDefaultVdwType$I', function (modelIndex) {
return (!this.am[modelIndex].isBioModel ? $I$(18).AUTO_BABEL : this.am[modelIndex].hydrogenCount == 0 ? $I$(18).AUTO_JMOL : $I$(18).AUTO_BABEL);
});

Clazz.newMeth(C$, 'setRotationRadius$I$F', function (modelIndex, angstroms) {
if (this.isJmolDataFrameForModel$I(modelIndex)) {
this.am[modelIndex].defaultRotationRadius=angstroms;
return false;
}return true;
});

Clazz.newMeth(C$, 'calcRotationRadius$I$javajs_util_P3$Z', function (modelIndex, center, useBoundBox) {
if (this.isJmolDataFrameForModel$I(modelIndex)) {
var r=this.am[modelIndex].defaultRotationRadius;
return (r == 0  ? 10 : r);
}if (useBoundBox && p$1.getDefaultBoundBox.apply(this, []) != null  ) return this.defaultBBox.getMaxDim$() / 2 * 1.2;
var maxRadius=0;
for (var i=this.ac; --i >= 0; ) {
if (p$1.isJmolDataFrameForAtom$org_jmol_modelset_Atom.apply(this, [this.at[i]])) {
modelIndex=this.at[i].mi;
while (i >= 0 && this.at[i].mi == modelIndex )i--;

continue;
}var atom=this.at[i];
var distAtom=center.distance$javajs_util_T3(atom);
var outerVdw=distAtom + this.getRadiusVdwJmol$org_jmol_modelset_Atom(atom);
if (outerVdw > maxRadius ) maxRadius=outerVdw;
}
return (maxRadius == 0  ? 10 : maxRadius);
});

Clazz.newMeth(C$, 'calcBoundBoxDimensions$javajs_util_BS$F', function (bs, scale) {
if (bs != null  && bs.nextSetBit$I(0) < 0 ) bs=null;
if (bs == null  && this.isBbcageDefault  || this.ac == 0 ) return;
if (p$1.getDefaultBoundBox.apply(this, []) == null ) {
this.bboxModels=this.getModelBS$javajs_util_BS$Z(this.bboxAtoms=$I$(10).copy$javajs_util_BS(bs), false);
if (this.calcAtomsMinMax$javajs_util_BS$org_jmol_util_BoxInfo(bs, this.boxInfo) == this.ac) this.isBbcageDefault=true;
if (bs == null ) {
if (this.unitCells != null ) p$1.calcUnitCellMinMax.apply(this, []);
}} else {
var vertices=this.defaultBBox.getBoundBoxVertices$();
this.boxInfo.reset$();
for (var j=0; j < 8; j++) this.boxInfo.addBoundBoxPoint$javajs_util_T3(vertices[j]);

}this.boxInfo.setBbcage$F(scale);
});

Clazz.newMeth(C$, 'getDefaultBoundBox', function () {
var bbox=this.getInfoM$S("boundbox");
if (bbox == null ) this.defaultBBox=null;
 else {
if (this.defaultBBox == null ) this.defaultBBox=Clazz.new_($I$(3,1));
this.defaultBBox.setBoundBoxFromOABC$javajs_util_T3A(bbox);
}return this.defaultBBox;
}, p$1);

Clazz.newMeth(C$, 'getBoxInfo$javajs_util_BS$F', function (bs, scale) {
if (bs == null ) return this.boxInfo;
var bi=Clazz.new_($I$(3,1));
this.calcAtomsMinMax$javajs_util_BS$org_jmol_util_BoxInfo(bs, bi);
bi.setBbcage$F(scale);
return bi;
});

Clazz.newMeth(C$, 'calcAtomsMinMax$javajs_util_BS$org_jmol_util_BoxInfo', function (bs, boxInfo) {
boxInfo.reset$();
var nAtoms=0;
var isAll=(bs == null );
var i0=(isAll ? this.ac - 1 : bs.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bs.nextSetBit$I(i + 1))) {
nAtoms++;
if (!p$1.isJmolDataFrameForAtom$org_jmol_modelset_Atom.apply(this, [this.at[i]])) boxInfo.addBoundBoxPoint$javajs_util_T3(this.at[i]);
}
return nAtoms;
});

Clazz.newMeth(C$, 'calcUnitCellMinMax', function () {
var pt=Clazz.new_($I$(4,1));
for (var i=0; i < this.mc; i++) {
if (!this.unitCells[i].getCoordinatesAreFractional$()) continue;
var vertices=this.unitCells[i].getUnitCellVerticesNoOffset$();
var offset=this.unitCells[i].getCartesianOffset$();
for (var j=0; j < 8; j++) {
pt.add2$javajs_util_T3$javajs_util_T3(offset, vertices[j]);
this.boxInfo.addBoundBoxPoint$javajs_util_T3(pt);
}
}
}, p$1);

Clazz.newMeth(C$, 'calcRotationRadiusBs$javajs_util_BS', function (bs) {
var center=this.getAtomSetCenter$javajs_util_BS(bs);
var maxRadius=0;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var atom=this.at[i];
var distAtom=center.distance$javajs_util_T3(atom);
var outerVdw=distAtom + this.getRadiusVdwJmol$org_jmol_modelset_Atom(atom);
if (outerVdw > maxRadius ) maxRadius=outerVdw;
}
return (maxRadius == 0  ? 10 : maxRadius);
});

Clazz.newMeth(C$, 'getCenterAndPoints$javajs_util_Lst$Z', function (vAtomSets, addCenters) {
var bsAtoms1;
var bsAtoms2;
var n=(addCenters ? 1 : 0);
for (var ii=vAtomSets.size$(); --ii >= 0; ) {
var bss=vAtomSets.get$I(ii);
bsAtoms1=bss[0];
if (Clazz.instanceOf(bss[1], "javajs.util.BS")) {
bsAtoms2=bss[1];
n+=Math.min(bsAtoms1.cardinality$(), bsAtoms2.cardinality$());
} else {
n+=Math.min(bsAtoms1.cardinality$(), (bss[1]).length);
}}
var points=Clazz.array($I$(4), [2, n]);
if (addCenters) {
points[0][0]=Clazz.new_($I$(4,1));
points[1][0]=Clazz.new_($I$(4,1));
}for (var ii=vAtomSets.size$(); --ii >= 0; ) {
var bss=vAtomSets.get$I(ii);
bsAtoms1=bss[0];
if (Clazz.instanceOf(bss[1], "javajs.util.BS")) {
bsAtoms2=bss[1];
for (var i=bsAtoms1.nextSetBit$I(0), j=bsAtoms2.nextSetBit$I(0); i >= 0 && j >= 0 ; i=bsAtoms1.nextSetBit$I(i + 1), j=bsAtoms2.nextSetBit$I(j + 1)) {
points[0][--n]=this.at[i];
points[1][n]=this.at[j];
if (addCenters) {
points[0][0].add$javajs_util_T3(this.at[i]);
points[1][0].add$javajs_util_T3(this.at[j]);
}}
} else {
var coords=bss[1];
for (var i=bsAtoms1.nextSetBit$I(0), j=0; i >= 0 && j < coords.length ; i=bsAtoms1.nextSetBit$I(i + 1), j++) {
points[0][--n]=this.at[i];
points[1][n]=coords[j];
if (addCenters) {
points[0][0].add$javajs_util_T3(this.at[i]);
points[1][0].add$javajs_util_T3(coords[j]);
}}
}}
if (addCenters) {
points[0][0].scale$F(1.0 / (points[0].length - 1));
points[1][0].scale$F(1.0 / (points[1].length - 1));
}return points;
});

Clazz.newMeth(C$, 'getAtomSetCenter$javajs_util_BS', function (bs) {
var ptCenter=Clazz.new_($I$(4,1));
var nPoints=0;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (!p$1.isJmolDataFrameForAtom$org_jmol_modelset_Atom.apply(this, [this.at[i]])) {
nPoints++;
ptCenter.add$javajs_util_T3(this.at[i]);
}}
if (nPoints > 1) ptCenter.scale$F(1.0 / nPoints);
return ptCenter;
});

Clazz.newMeth(C$, 'getAverageAtomPoint$', function () {
return this.getAtomSetCenter$javajs_util_BS(this.vwr.bsA$());
});

Clazz.newMeth(C$, 'setAPm$javajs_util_BS$I$I$F$S$FA$SA', function (bs, tok, iValue, fValue, sValue, values, list) {
this.setAPa$javajs_util_BS$I$I$F$S$FA$SA(bs, tok, iValue, fValue, sValue, values, list);
switch (tok) {
case 1094715417:
case 1631586315:
if (this.vwr.getBoolean$I(603979944)) this.assignAromaticBondsBs$Z$javajs_util_BS(true, null);
break;
}
});

Clazz.newMeth(C$, 'addStateScript$S$javajs_util_BS$javajs_util_BS$javajs_util_BS$S$Z$Z', function (script1, bsBonds, bsAtoms1, bsAtoms2, script2, addFrameNumber, postDefinitions) {
var iModel=this.vwr.am.cmi;
if (addFrameNumber) {
if (this.thisStateModel != iModel) script1="frame " + (iModel < 0 ? "all #" + iModel : this.getModelNumberDotted$I(iModel)) + ";\n  " + script1 ;
this.thisStateModel=iModel;
} else {
this.thisStateModel=-1;
}var stateScript=Clazz.new_($I$(19,1).c$$I$S$javajs_util_BS$javajs_util_BS$javajs_util_BS$S$Z,[this.thisStateModel, script1, bsBonds, bsAtoms1, bsAtoms2, script2, postDefinitions]);
if (stateScript.isValid$()) {
this.stateScripts.addLast$O(stateScript);
}return stateScript;
});

Clazz.newMeth(C$, 'freezeModels$', function () {
this.haveBioModels=false;
for (var iModel=this.mc; --iModel >= 0; ) this.haveBioModels|=this.am[iModel].freeze$();

});

Clazz.newMeth(C$, 'getStructureList$', function () {
return this.vwr.getStructureList$();
});

Clazz.newMeth(C$, 'getInfoM$S', function (keyName) {
return (this.msInfo == null  ? null : this.msInfo.get$O(keyName));
});

Clazz.newMeth(C$, 'getMSInfoB$S', function (keyName) {
var val=this.getInfoM$S(keyName);
return (Clazz.instanceOf(val, "java.lang.Boolean") && (val).booleanValue$() );
});

Clazz.newMeth(C$, 'isTrajectory$I', function (modelIndex) {
return this.am[modelIndex].isTrajectory;
});

Clazz.newMeth(C$, 'isTrajectorySubFrame$I', function (i) {
return (this.am[i].trajectoryBaseIndex != i);
});

Clazz.newMeth(C$, 'isTrajectoryMeasurement$IA', function (countPlusIndices) {
return (this.trajectory != null  && this.trajectory.hasMeasure$IA(countPlusIndices) );
});

Clazz.newMeth(C$, 'getModelBS$javajs_util_BS$Z', function (atomList, allTrajectories) {
var bs=Clazz.new_($I$(1,1));
var modelIndex=0;
var isAll=(atomList == null );
allTrajectories&=(this.trajectory != null );
var i0=(isAll ? 0 : atomList.nextSetBit$I(0));
for (var i=i0; i >= 0 && i < this.ac ; i=(isAll ? i + 1 : atomList.nextSetBit$I(i + 1))) {
bs.set$I(modelIndex=this.at[i].mi);
if (allTrajectories) this.trajectory.getModelBS$I$javajs_util_BS(modelIndex, bs);
i=this.am[modelIndex].firstAtomIndex + this.am[modelIndex].act - 1;
}
return bs;
});

Clazz.newMeth(C$, 'getIterativeModels$Z', function (allowJmolData) {
var bs=Clazz.new_($I$(1,1));
for (var i=0; i < this.mc; i++) {
if (!allowJmolData && this.isJmolDataFrameForModel$I(i) ) continue;
if (!this.isTrajectorySubFrame$I(i)) bs.set$I(i);
}
return bs;
});

Clazz.newMeth(C$, 'fillAtomData$org_jmol_atomdata_AtomData$I', function (atomData, mode) {
if ((mode & 4) != 0) {
this.getMolecules$();
atomData.bsMolecules=Clazz.array($I$(1), [this.molecules.length]);
atomData.atomMolecule=Clazz.array(Integer.TYPE, [this.ac]);
var bs;
for (var i=0; i < this.molecules.length; i++) {
bs=atomData.bsMolecules[i]=this.molecules[i].atomList;
for (var iAtom=bs.nextSetBit$I(0); iAtom >= 0; iAtom=bs.nextSetBit$I(iAtom + 1)) atomData.atomMolecule[iAtom]=i;

}
}if ((mode & 8) != 0) {
var nH=Clazz.array(Integer.TYPE, [1]);
atomData.hAtomRadius=this.vwr.getVanderwaalsMar$I(1) / 1000.0;
atomData.hAtoms=this.calculateHydrogens$javajs_util_BS$IA$Z$Z$javajs_util_Lst(atomData.bsSelected, nH, false, true, null);
atomData.hydrogenAtomCount=nH[0];
return;
}if (atomData.modelIndex < 0) atomData.firstAtomIndex=(atomData.bsSelected == null  ? 0 : Math.max(0, atomData.bsSelected.nextSetBit$I(0)));
 else atomData.firstAtomIndex=this.am[atomData.modelIndex].firstAtomIndex;
atomData.lastModelIndex=atomData.firstModelIndex=(this.ac == 0 ? ($s$[0] = 0, $s$[0]) : this.at[atomData.firstAtomIndex].mi);
atomData.modelName=this.getModelNumberDotted$I(atomData.firstModelIndex);
this.fillADa$org_jmol_atomdata_AtomData$I(atomData, mode);
});

Clazz.newMeth(C$, 'getModelNumberDotted$I', function (modelIndex) {
return (this.mc < 1 || modelIndex >= this.mc  || modelIndex < 0  ? "" : $I$(17).escapeModelFileNumber$I(this.modelFileNumbers[modelIndex]));
});

Clazz.newMeth(C$, 'getModelNumber$I', function (modelIndex) {
return this.modelNumbers[modelIndex == 2147483647 ? this.mc - 1 : modelIndex];
});

Clazz.newMeth(C$, 'getModelProperty$I$S', function (modelIndex, property) {
var props=this.am[modelIndex].properties;
return props == null  ? null : props.getProperty$S(property);
});

Clazz.newMeth(C$, 'getModelAuxiliaryInfo$I', function (modelIndex) {
return (modelIndex < 0 ? null : this.am[modelIndex].auxiliaryInfo);
});

Clazz.newMeth(C$, 'setInfo$I$O$O', function (modelIndex, key, value) {
if (modelIndex >= 0 && modelIndex < this.mc ) this.am[modelIndex].auxiliaryInfo.put$O$O(key, value);
});

Clazz.newMeth(C$, 'getInfo$I$S', function (modelIndex, key) {
return (modelIndex < 0 ? null : this.am[modelIndex].auxiliaryInfo.get$O(key));
});

Clazz.newMeth(C$, 'getInfoB$I$S', function (modelIndex, keyName) {
var info=this.am[modelIndex].auxiliaryInfo;
return (info != null  && info.containsKey$O(keyName)  && (info.get$O(keyName)).booleanValue$() );
});

Clazz.newMeth(C$, 'getInfoI$I$S', function (modelIndex, keyName) {
var info=this.am[modelIndex].auxiliaryInfo;
if (info != null  && info.containsKey$O(keyName) ) {
return (info.get$O(keyName)).intValue$();
}return -2147483648;
});

Clazz.newMeth(C$, 'getInsertionCountInModel$I', function (modelIndex) {
return this.am[modelIndex].insertionCount;
});

Clazz.newMeth(C$, 'modelFileNumberFromFloat$F', function (fDotM) {
var file=(Math.floor(fDotM)|0);
var model=(Math.floor((fDotM - file + 1.0E-5) * 10000)|0);
while (model != 0 && model % 10 == 0 )model=(model/(10)|0);

return file * 1000000 + model;
}, 1);

Clazz.newMeth(C$, 'getChainCountInModelWater$I$Z', function (modelIndex, countWater) {
if (modelIndex < 0) {
var chainCount=0;
for (var i=this.mc; --i >= 0; ) chainCount+=this.am[i].getChainCount$Z(countWater);

return chainCount;
}return this.am[modelIndex].getChainCount$Z(countWater);
});

Clazz.newMeth(C$, 'getGroupCountInModel$I', function (modelIndex) {
if (modelIndex < 0) {
var groupCount=0;
for (var i=this.mc; --i >= 0; ) groupCount+=this.am[i].getGroupCount$();

return groupCount;
}return this.am[modelIndex].getGroupCount$();
});

Clazz.newMeth(C$, 'calcSelectedGroupsCount$', function () {
var bsSelected=this.vwr.bsA$();
for (var i=this.mc; --i >= 0; ) this.am[i].calcSelectedGroupsCount$javajs_util_BS(bsSelected);

});

Clazz.newMeth(C$, 'isJmolDataFrameForModel$I', function (modelIndex) {
return (modelIndex >= 0 && modelIndex < this.mc  && this.am[modelIndex].isJmolDataFrame );
});

Clazz.newMeth(C$, 'isJmolDataFrameForAtom$org_jmol_modelset_Atom', function (atom) {
return (this.am[atom.mi].isJmolDataFrame);
}, p$1);

Clazz.newMeth(C$, 'setJmolDataFrame$S$I$I', function (type, modelIndex, modelDataIndex) {
var model=this.am[type == null  ? this.am[modelDataIndex].dataSourceFrame : modelIndex];
if (type == null ) {
type=this.am[modelDataIndex].jmolFrameType;
}if (modelIndex >= 0) {
if (model.dataFrames == null ) {
model.dataFrames=Clazz.new_($I$(20,1));
}this.am[modelDataIndex].dataSourceFrame=modelIndex;
this.am[modelDataIndex].jmolFrameType=type;
model.dataFrames.put$O$O(type, Integer.valueOf$I(modelDataIndex));
}if (type.startsWith$S("quaternion") && type.indexOf$S("deriv") < 0 ) {
type=type.substring$I$I(0, type.indexOf$S(" "));
model.dataFrames.put$O$O(type, Integer.valueOf$I(modelDataIndex));
}});

Clazz.newMeth(C$, 'getJmolDataFrameIndex$I$S', function (modelIndex, type) {
if (this.am[modelIndex].dataFrames == null ) {
return -1;
}var index=this.am[modelIndex].dataFrames.get$O(type);
return (index == null  ? -1 : index.intValue$());
});

Clazz.newMeth(C$, 'clearDataFrameReference$I', function (modelIndex) {
for (var i=0; i < this.mc; i++) {
var df=this.am[i].dataFrames;
if (df == null ) {
continue;
}var e=df.values$().iterator$();
while (e.hasNext$()){
if ((e.next$()).intValue$() == modelIndex) {
e.remove$();
}}
}
});

Clazz.newMeth(C$, 'getJmolFrameType$I', function (modelIndex) {
return (modelIndex >= 0 && modelIndex < this.mc  ? this.am[modelIndex].jmolFrameType : "modelSet");
});

Clazz.newMeth(C$, 'getJmolDataSourceFrame$I', function (modelIndex) {
return (modelIndex >= 0 && modelIndex < this.mc  ? this.am[modelIndex].dataSourceFrame : -1);
});

Clazz.newMeth(C$, 'saveModelOrientation$I$org_jmol_modelset_Orientation', function (modelIndex, orientation) {
this.am[modelIndex].orientation=orientation;
});

Clazz.newMeth(C$, 'getModelOrientation$I', function (modelIndex) {
return this.am[modelIndex].orientation;
});

Clazz.newMeth(C$, 'getPDBHeader$I', function (modelIndex) {
return (this.am[modelIndex].isBioModel ? (this.am[modelIndex]).getFullPDBHeader$() : this.getFileHeader$I(modelIndex));
});

Clazz.newMeth(C$, 'getFileHeader$I', function (modelIndex) {
if (modelIndex < 0) return "";
if (this.am[modelIndex].isBioModel) return this.getPDBHeader$I(modelIndex);
var info=this.getInfo$I$S(modelIndex, "fileHeader");
if (info == null ) info=this.modelSetName;
if (info != null ) return info;
return "no header information found";
});

Clazz.newMeth(C$, 'getAltLocCountInModel$I', function (modelIndex) {
return this.am[modelIndex].altLocCount;
});

Clazz.newMeth(C$, 'getAltLocIndexInModel$I$C', function (modelIndex, alternateLocationID) {
if (alternateLocationID == "\u0000") {
return 0;
}var altLocList=this.getAltLocListInModel$I(modelIndex);
if (altLocList.length$() == 0) {
return 0;
}return altLocList.indexOf$I(alternateLocationID) + 1;
});

Clazz.newMeth(C$, 'getInsertionCodeIndexInModel$I$C', function (modelIndex, insertionCode) {
if (insertionCode == "\u0000") return 0;
var codeList=p$1.getInsertionListInModel$I.apply(this, [modelIndex]);
if (codeList.length$() == 0) return 0;
return codeList.indexOf$I(insertionCode) + 1;
});

Clazz.newMeth(C$, 'getAltLocListInModel$I', function (modelIndex) {
var str=this.getInfo$I$S(modelIndex, "altLocs");
return (str == null  ? "" : str);
});

Clazz.newMeth(C$, 'getInsertionListInModel$I', function (modelIndex) {
var str=this.getInfo$I$S(modelIndex, "insertionCodes");
return (str == null  ? "" : str);
}, p$1);

Clazz.newMeth(C$, 'getModelSymmetryCount$I', function (modelIndex) {
return (this.am[modelIndex].biosymmetryCount > 0 ? this.am[modelIndex].biosymmetryCount : this.unitCells == null  || this.unitCells[modelIndex] == null   ? 0 : this.unitCells[modelIndex].getSpaceGroupOperationCount$());
});

Clazz.newMeth(C$, 'getModelCellRange$I', function (modelIndex) {
return (this.unitCells == null  ? null : this.unitCells[modelIndex].getCellRange$());
});

Clazz.newMeth(C$, 'getLastVibrationVector$I$I', function (modelIndex, tok) {
if (this.vibrations != null  && modelIndex < this.vwr.ms.mc ) {
var v;
var a1=(modelIndex < 0 || this.isTrajectory$I(modelIndex)  || modelIndex >= this.mc - 1  ? this.ac : this.am[modelIndex + 1].firstAtomIndex);
var a0=(modelIndex <= 0 ? 0 : this.am[modelIndex].firstAtomIndex);
for (var i=a1; --i >= a0; ) {
if ((modelIndex < 0 || this.at[i].mi == modelIndex ) && ((tok == 1275072532 || tok == 0 ) && (v=this.getModulation$I(i)) != null   || (tok == 4166 || tok == 0 ) && (v=this.getVibration$I$Z(i, false)) != null   ) && v.isNonzero$()  ) return i;
}
}return -1;
});

Clazz.newMeth(C$, 'getModulationList$javajs_util_BS$C$javajs_util_P3', function (bs, type, t456) {
var list=Clazz.new_($I$(2,1));
if (this.vibrations != null ) for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) if (Clazz.instanceOf(this.vibrations[i], "org.jmol.api.JmolModulationSet")) list.addLast$O((this.vibrations[i]).getModulation$C$javajs_util_T3(type, t456));
 else list.addLast$O(Float.valueOf$F(type == "O" ? NaN : -1));

return list;
});

Clazz.newMeth(C$, 'getElementsPresentBitSet$I', function (modelIndex) {
if (modelIndex >= 0) return this.elementsPresent[modelIndex];
var bs=Clazz.new_($I$(1,1));
for (var i=0; i < this.mc; i++) bs.or$javajs_util_BS(this.elementsPresent[i]);

return bs;
});

Clazz.newMeth(C$, 'getMoleculeIndex$I$Z', function (atomIndex, inModel) {
if (this.moleculeCount == 0) this.getMolecules$();
for (var i=0; i < this.moleculeCount; i++) {
if (this.molecules[i].atomList.get$I(atomIndex)) return (inModel ? this.molecules[i].indexInModel : i);
}
return 0;
});

Clazz.newMeth(C$, 'getMoleculeBitSet$javajs_util_BS', function (bs) {
if (this.moleculeCount == 0) this.getMolecules$();
var bsResult=$I$(10).copy$javajs_util_BS(bs);
var bsInitial=$I$(10).copy$javajs_util_BS(bs);
var i=0;
var bsTemp=Clazz.new_($I$(1,1));
while ((i=bsInitial.length$() - 1) >= 0){
bsTemp=this.getMoleculeBitSetForAtom$I(i);
if (bsTemp == null ) {
bsInitial.clear$I(i);
bsResult.clear$I(i);
continue;
}bsInitial.andNot$javajs_util_BS(bsTemp);
bsResult.or$javajs_util_BS(bsTemp);
}
return bsResult;
});

Clazz.newMeth(C$, 'getMoleculeBitSetForAtom$I', function (atomIndex) {
if (this.moleculeCount == 0) this.getMolecules$();
for (var i=0; i < this.moleculeCount; i++) if (this.molecules[i].atomList.get$I(atomIndex)) return this.molecules[i].atomList;

return null;
});

Clazz.newMeth(C$, 'getModelDipole$I', function (modelIndex) {
if (modelIndex < 0) return null;
var dipole=this.getInfo$I$S(modelIndex, "dipole");
if (dipole == null ) dipole=this.getInfo$I$S(modelIndex, "DIPOLE_VEC");
return dipole;
});

Clazz.newMeth(C$, 'calculateMolecularDipole$I$javajs_util_BS', function (modelIndex, bsAtoms) {
if (bsAtoms != null ) {
var ia=bsAtoms.nextSetBit$I(0);
if (ia < 0) return null;
modelIndex=this.at[ia].mi;
}if (modelIndex < 0) return null;
var nPos=0;
var nNeg=0;
var cPos=0;
var cNeg=0;
var pos=Clazz.new_($I$(9,1));
var neg=Clazz.new_($I$(9,1));
if (bsAtoms == null ) bsAtoms=this.getModelAtomBitSetIncludingDeleted$I$Z(-1, false);
this.vwr.getOrCalcPartialCharges$javajs_util_BS$javajs_util_BS(this.am[modelIndex].bsAtoms, null);
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
if (this.at[i].mi != modelIndex || this.at[i].isDeleted$() ) {
continue;
}var c=this.partialCharges[i];
if (c < 0 ) {
nNeg++;
cNeg += c;
neg.scaleAdd2$F$javajs_util_T3$javajs_util_T3(c, this.at[i], neg);
} else if (c > 0 ) {
nPos++;
cPos += c;
pos.scaleAdd2$F$javajs_util_T3$javajs_util_T3(c, this.at[i], pos);
}}
if (Math.abs(cPos + cNeg) > 0.015 ) {
(function(a,f){return f.apply(null,a)})(["Dipole calculation requires balanced charges: " + new Float(cPos).toString() + " " + new Float(cNeg).toString() ],$I$(21).info$S);
return null;
}if (nNeg == 0 || nPos == 0 ) return null;
pos.add$javajs_util_T3(neg);
pos.scale$F(4.8);
return pos;
});

Clazz.newMeth(C$, 'getMoleculeCountInModel$I', function (modelIndex) {
var n=0;
if (this.moleculeCount == 0) this.getMolecules$();
if (modelIndex < 0) return this.moleculeCount;
for (var i=0; i < this.mc; i++) {
if (modelIndex == i) n+=this.am[i].moleculeCount;
}
return n;
});

Clazz.newMeth(C$, 'calcSelectedMoleculesCount$', function () {
var bsSelected=this.vwr.bsA$();
if (this.moleculeCount == 0) this.getMolecules$();
this.selectedMolecules.xor$javajs_util_BS(this.selectedMolecules);
var bsTemp=Clazz.new_($I$(1,1));
for (var i=0; i < this.moleculeCount; i++) {
$I$(10).copy2$javajs_util_BS$javajs_util_BS(bsSelected, bsTemp);
bsTemp.and$javajs_util_BS(this.molecules[i].atomList);
if (bsTemp.length$() > 0) {
this.selectedMolecules.set$I(i);
}}
});

Clazz.newMeth(C$, 'setCentroid$javajs_util_BS$IA', function (bs, minmax) {
var bsDelete=p$1.getNotInCentroid$javajs_util_BS$IA.apply(this, [bs, minmax]);
if (bsDelete != null  && bsDelete.nextSetBit$I(0) >= 0 ) this.vwr.deleteAtoms$javajs_util_BS$Z(bsDelete, false);
});

Clazz.newMeth(C$, 'getNotInCentroid$javajs_util_BS$IA', function (bs, minmax) {
var iAtom0=bs.nextSetBit$I(0);
if (iAtom0 < 0) return null;
var uc=this.getUnitCell$I(this.at[iAtom0].mi);
return (uc == null  ? null : uc.notInCentroid$org_jmol_modelset_ModelSet$javajs_util_BS$IA(this, bs, minmax));
}, p$1);

Clazz.newMeth(C$, 'getMolecules$', function () {
if (this.moleculeCount > 0) return this.molecules;
if (this.molecules == null ) this.molecules=Clazz.array($I$(22), [4]);
this.moleculeCount=0;
var m=null;
var bsModelAtoms=Clazz.array($I$(1), [this.mc]);
var biobranches=null;
for (var i=0; i < this.mc; i++) {
bsModelAtoms[i]=this.vwr.getModelUndeletedAtomsBitSet$I(i);
m=this.am[i];
m.moleculeCount=0;
biobranches=(m.isBioModel ? (m).getBioBranches$javajs_util_Lst(biobranches) : null);
}
this.molecules=$I$(22).getMolecules$org_jmol_util_NodeA$javajs_util_BSA$javajs_util_Lst$javajs_util_BS(this.at, bsModelAtoms, biobranches, null);
this.moleculeCount=this.molecules.length;
for (var i=this.moleculeCount; --i >= 0; ) {
m=this.am[this.molecules[i].modelIndex];
m.firstMoleculeIndex=i;
m.moleculeCount++;
}
return this.molecules;
});

Clazz.newMeth(C$, 'initializeBspf$', function () {
if (this.bspf != null  && this.bspf.isValid ) return;
if (this.showRebondTimes) $I$(21).startTimer$S("build bspf");
var bspf=Clazz.new_($I$(23,1).c$$I,[3]);
if ($I$(21).debugging) $I$(21).debug$S("sequential bspt order");
var bsNew=$I$(1).newN$I(this.mc);
for (var i=this.ac; --i >= 0; ) {
var atom=this.at[i];
if (!atom.isDeleted$() && !this.isTrajectorySubFrame$I(atom.mi) ) {
bspf.addTuple$I$javajs_util_P3(this.am[atom.mi].trajectoryBaseIndex, atom);
bsNew.set$I(atom.mi);
}}
if (this.showRebondTimes) {
$I$(21).checkTimer$S$Z("build bspf", false);
bspf.stats$();
}for (var i=bsNew.nextSetBit$I(0); i >= 0; i=bsNew.nextSetBit$I(i + 1)) bspf.validateModel$I$Z(i, true);

bspf.isValid=true;
this.bspf=bspf;
});

Clazz.newMeth(C$, 'initializeBspt$I', function (modelIndex) {
this.initializeBspf$();
if (this.bspf.isInitializedIndex$I(modelIndex)) return;
this.bspf.initialize$I$javajs_util_P3A$javajs_util_BS(modelIndex, this.at, this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex));
});

Clazz.newMeth(C$, 'setIteratorForPoint$org_jmol_api_AtomIndexIterator$I$javajs_util_T3$F', function (iterator, modelIndex, pt, distance) {
if (modelIndex < 0) {
iterator.setCenter$javajs_util_T3$F(pt, distance);
return;
}this.initializeBspt$I(modelIndex);
iterator.setModel$org_jmol_modelset_ModelSet$I$I$I$javajs_util_T3$F$org_jmol_atomdata_RadiusData(this, modelIndex, this.am[modelIndex].firstAtomIndex, 2147483647, pt, distance, null);
});

Clazz.newMeth(C$, 'setIteratorForAtom$org_jmol_api_AtomIndexIterator$I$I$F$org_jmol_atomdata_RadiusData', function (iterator, modelIndex, atomIndex, distance, rd) {
if (modelIndex < 0) modelIndex=this.at[atomIndex].mi;
modelIndex=this.am[modelIndex].trajectoryBaseIndex;
this.initializeBspt$I(modelIndex);
iterator.setModel$org_jmol_modelset_ModelSet$I$I$I$javajs_util_T3$F$org_jmol_atomdata_RadiusData(this, modelIndex, this.am[modelIndex].firstAtomIndex, atomIndex, this.at[atomIndex], distance, rd);
});

Clazz.newMeth(C$, 'getSelectedAtomIterator$javajs_util_BS$Z$Z$Z$Z', function (bsSelected, isGreaterOnly, modelZeroBased, hemisphereOnly, isMultiModel) {
this.initializeBspf$();
var iter;
if (isMultiModel) {
var bsModels=this.getModelBS$javajs_util_BS$Z(bsSelected, false);
for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) this.initializeBspt$I(i);

iter=Clazz.new_($I$(24,1).c$$javajs_util_BS,[bsModels]);
} else {
iter=Clazz.new_($I$(25,1));
}iter.initialize$org_jmol_bspt_Bspf$javajs_util_BS$Z$Z$Z$Z(this.bspf, bsSelected, isGreaterOnly, modelZeroBased, hemisphereOnly, this.vwr.isParallel$());
return iter;
});

Clazz.newMeth(C$, 'getBondCountInModel$I', function (modelIndex) {
return (modelIndex < 0 ? this.bondCount : this.am[modelIndex].getBondCount$());
});

Clazz.newMeth(C$, 'getAtomCountInModel$I', function (modelIndex) {
return (modelIndex < 0 ? this.ac : this.am[modelIndex].act);
});

Clazz.newMeth(C$, 'getModelAtomBitSetIncludingDeletedBs$javajs_util_BS', function (bsModels) {
var bs=Clazz.new_($I$(1,1));
if (bsModels == null  && this.bsAll == null  ) this.bsAll=$I$(10).setAll$I(this.ac);
if (bsModels == null ) bs.or$javajs_util_BS(this.bsAll);
 else for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) bs.or$javajs_util_BS(this.getModelAtomBitSetIncludingDeleted$I$Z(i, false));

return bs;
});

Clazz.newMeth(C$, 'getModelAtomBitSetIncludingDeleted$I$Z', function (modelIndex, asCopy) {
var bs=(modelIndex < 0 ? this.bsAll : this.am[modelIndex].bsAtoms);
if (bs == null ) bs=this.bsAll=$I$(10).setAll$I(this.ac);
return (asCopy ? $I$(10).copy$javajs_util_BS(bs) : bs);
});

Clazz.newMeth(C$, 'getAtomBitsMaybeDeleted$I$O', function (tokType, specInfo) {
var info;
var bs;
switch (tokType) {
default:
return this.getAtomBitsMDa$I$O$javajs_util_BS(tokType, specInfo, bs=Clazz.new_($I$(1,1)));
case 1073741925:
case 1073742189:
case 1111490587:
case 1073742128:
case 1073741863:
case 1086324744:
bs=Clazz.new_($I$(1,1));
return (this.haveBioModels ? this.bioModelset.getAtomBitsStr$I$S$javajs_util_BS(tokType, specInfo, bs) : bs);
case 1677721602:
case 1073742331:
return this.getAtomBitsMDb$I$O(tokType, specInfo);
case 1678381065:
var boxInfo=this.getBoxInfo$javajs_util_BS$F(specInfo, 1);
bs=this.getAtomsWithin$F$javajs_util_T3$javajs_util_BS$I(boxInfo.getBoundBoxCornerVector$().length$() + 1.0E-4, boxInfo.getBoundBoxCenter$(), null, -1);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) if (!boxInfo.isWithin$javajs_util_P3(this.at[i])) bs.clear$I(i);

return bs;
case 1094713349:
bs=Clazz.new_($I$(1,1));
info=specInfo;
this.ptTemp1.set$F$F$F(info[0] / 1000.0, info[1] / 1000.0, info[2] / 1000.0);
var ignoreOffset=false;
for (var i=this.ac; --i >= 0; ) if (p$1.isInLatticeCell$I$javajs_util_P3$javajs_util_P3$Z.apply(this, [i, this.ptTemp1, this.ptTemp2, ignoreOffset])) bs.set$I(i);

return bs;
case 1094713350:
bs=$I$(10).newBitSet2$I$I(0, this.ac);
info=specInfo;
var minmax=Clazz.array(Integer.TYPE, -1, [(info[0]/1000|0) - 1, (info[1]/1000|0) - 1, (info[2]/1000|0) - 1, (info[0]/1000|0), (info[1]/1000|0), (info[2]/1000|0), 0]);
for (var i=this.mc; --i >= 0; ) {
var uc=this.getUnitCell$I(i);
if (uc == null ) {
$I$(10).andNot$javajs_util_BS$javajs_util_BS(bs, this.am[i].bsAtoms);
continue;
}bs.andNot$javajs_util_BS(uc.notInCentroid$org_jmol_modelset_ModelSet$javajs_util_BS$IA(this, this.am[i].bsAtoms, minmax));
}
return bs;
case 1094713360:
return this.getMoleculeBitSet$javajs_util_BS(specInfo);
case 1073742363:
return p$1.getSelectCodeRange$IA.apply(this, [specInfo]);
case 2097196:
bs=$I$(1).newN$I(this.ac);
var modelIndex=-1;
var nOps=0;
for (var i=this.ac; --i >= 0; ) {
var atom=this.at[i];
var bsSym=atom.atomSymmetry;
if (bsSym != null ) {
if (atom.mi != modelIndex) {
modelIndex=atom.mi;
if (this.getModelCellRange$I(modelIndex) == null ) continue;
nOps=this.getModelSymmetryCount$I(modelIndex);
}var n=0;
for (var j=nOps; --j >= 0; ) if (bsSym.get$I(j)) if (++n > 1) {
bs.set$I(i);
break;
}
}}
return bs;
case 1088421903:
return (function(a,f){return f.apply(null,a)})([this.bsSymmetry == null  ? this.bsSymmetry=$I$(1).newN$I(this.ac) : this.bsSymmetry],$I$(10).copy$javajs_util_BS);
case 1814695966:
bs=Clazz.new_($I$(1,1));
var unitcell=this.vwr.getCurrentUnitCell$();
if (unitcell == null ) return bs;
this.ptTemp1.set$F$F$F(1, 1, 1);
for (var i=this.ac; --i >= 0; ) if (p$1.isInLatticeCell$I$javajs_util_P3$javajs_util_P3$Z.apply(this, [i, this.ptTemp1, this.ptTemp2, false])) bs.set$I(i);

return bs;
}
});

Clazz.newMeth(C$, 'getSelectCodeRange$IA', function (info) {
var bs=Clazz.new_($I$(1,1));
var seqcodeA=info[0];
var seqcodeB=info[1];
var chainID=info[2];
var caseSensitive=this.vwr.getBoolean$I(603979822);
if (chainID >= 0 && chainID < 300  && !caseSensitive ) chainID=this.chainToUpper$I(chainID);
for (var iModel=this.mc; --iModel >= 0; ) if (this.am[iModel].isBioModel) {
var m=this.am[iModel];
var id;
for (var i=m.chainCount; --i >= 0; ) {
var chain=m.chains[i];
if (chainID == -1 || chainID == (id=chain.chainID)  || !caseSensitive && id > 0  && id < 300  && chainID == this.chainToUpper$I(id)  ) {
var groups=chain.groups;
var n=chain.groupCount;
for (var index=0; index >= 0; ) {
index=C$.selectSeqcodeRange$org_jmol_modelset_GroupA$I$I$I$I$javajs_util_BS(groups, n, index, seqcodeA, seqcodeB, bs);
}
}}
}
return bs;
}, p$1);

Clazz.newMeth(C$, 'selectSeqcodeRange$org_jmol_modelset_GroupA$I$I$I$I$javajs_util_BS', function (groups, n, index, seqcodeA, seqcodeB, bs) {
var seqcode;
var indexA;
var indexB;
var minDiff;
var isInexact=false;
for (indexA=index; indexA < n && groups[indexA].seqcode != seqcodeA ; indexA++) {
}
if (indexA == n) {
if (index > 0) return -1;
isInexact=true;
minDiff=2147483647;
for (var i=n; --i >= 0; ) if ((seqcode=groups[i].seqcode) > seqcodeA && (seqcode - seqcodeA) < minDiff ) {
indexA=i;
minDiff=seqcode - seqcodeA;
}
if (minDiff == 2147483647) return -1;
}if (seqcodeB == 2147483647) {
indexB=n - 1;
isInexact=true;
} else {
for (indexB=indexA; indexB < n && groups[indexB].seqcode != seqcodeB ; indexB++) {
}
if (indexB == n) {
if (index > 0) return -1;
isInexact=true;
minDiff=2147483647;
for (var i=indexA; i < n; i++) if ((seqcode=groups[i].seqcode) < seqcodeB && (seqcodeB - seqcode) < minDiff ) {
indexB=i;
minDiff=seqcodeB - seqcode;
}
if (minDiff == 2147483647) return -1;
}}for (var i=indexA; i <= indexB; ++i) groups[i].setAtomBits$javajs_util_BS(bs);

return (isInexact ? -1 : indexB + 1);
}, 1);

Clazz.newMeth(C$, 'isInLatticeCell$I$javajs_util_P3$javajs_util_P3$Z', function (i, cell, ptTemp, isAbsolute) {
var iModel=this.at[i].mi;
var uc=this.getUnitCell$I(iModel);
ptTemp.setT$javajs_util_T3(this.at[i]);
return (uc != null  && uc.checkUnitCell$org_jmol_api_SymmetryInterface$javajs_util_P3$javajs_util_P3$Z(uc, cell, ptTemp, isAbsolute) );
}, p$1);

Clazz.newMeth(C$, 'getAtomsWithinRadius$F$javajs_util_BS$Z$org_jmol_atomdata_RadiusData', function (distance, bs, withinAllModels, rd) {
var bsResult=Clazz.new_($I$(1,1));
var bsCheck=this.getIterativeModels$Z(false);
bs=$I$(10).andNot$javajs_util_BS$javajs_util_BS(bs, this.vwr.slm.bsDeleted);
var iter=this.getSelectedAtomIterator$javajs_util_BS$Z$Z$Z$Z(null, false, false, false, false);
if (withinAllModels) {
var fixJavaFloat=!this.vwr.g.legacyJavaFloat;
var ptTemp=Clazz.new_($I$(4,1));
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) for (var iModel=this.mc; --iModel >= 0; ) {
if (!bsCheck.get$I(iModel)) continue;
if (distance < 0 ) {
this.getAtomsWithin$F$javajs_util_T3$javajs_util_BS$I(distance, this.at[i].getFractionalUnitCoordPt$Z$Z$javajs_util_P3(fixJavaFloat, true, ptTemp), bsResult, -1);
continue;
}this.setIteratorForAtom$org_jmol_api_AtomIndexIterator$I$I$F$org_jmol_atomdata_RadiusData(iter, iModel, i, distance, rd);
iter.addAtoms$javajs_util_BS(bsResult);
}

} else {
bsResult.or$javajs_util_BS(bs);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (distance < 0 ) {
this.getAtomsWithin$F$javajs_util_T3$javajs_util_BS$I(distance, this.at[i], bsResult, this.at[i].mi);
continue;
}this.setIteratorForAtom$org_jmol_api_AtomIndexIterator$I$I$F$org_jmol_atomdata_RadiusData(iter, -1, i, distance, rd);
iter.addAtoms$javajs_util_BS(bsResult);
}
}iter.release$();
return bsResult;
});

Clazz.newMeth(C$, 'getAtomsWithin$F$javajs_util_T3$javajs_util_BS$I', function (distance, coord, bsResult, modelIndex) {
if (bsResult == null ) bsResult=Clazz.new_($I$(1,1));
if (distance < 0 ) {
distance=-distance;
for (var i=this.ac; --i >= 0; ) {
var atom=this.at[i];
if (modelIndex >= 0 && this.at[i].mi != modelIndex ) continue;
if (!bsResult.get$I(i) && atom.getFractionalUnitDistance$javajs_util_T3$javajs_util_T3$javajs_util_T3(coord, this.ptTemp1, this.ptTemp2) <= distance  ) bsResult.set$I(atom.i);
}
return bsResult;
}var bsCheck=this.getIterativeModels$Z(true);
var iter=this.getSelectedAtomIterator$javajs_util_BS$Z$Z$Z$Z(null, false, false, false, false);
for (var iModel=this.mc; --iModel >= 0; ) {
if (!bsCheck.get$I(iModel) || this.am[iModel].bsAtoms.isEmpty$() ) continue;
this.setIteratorForAtom$org_jmol_api_AtomIndexIterator$I$I$F$org_jmol_atomdata_RadiusData(iter, -1, this.am[iModel].firstAtomIndex, -1, null);
iter.setCenter$javajs_util_T3$F(coord, distance);
iter.addAtoms$javajs_util_BS(bsResult);
}
iter.release$();
return bsResult;
});

Clazz.newMeth(C$, 'deleteBonds$javajs_util_BS$Z', function (bsBonds, isFullModel) {
if (!isFullModel) {
var bsA=Clazz.new_($I$(1,1));
var bsB=Clazz.new_($I$(1,1));
for (var i=bsBonds.nextSetBit$I(0); i >= 0; i=bsBonds.nextSetBit$I(i + 1)) {
var atom1=this.bo[i].atom1;
if (this.am[atom1.mi].isModelKit) continue;
bsA.clearAll$();
bsB.clearAll$();
bsA.set$I(atom1.i);
bsB.set$I(this.bo[i].getAtomIndex2$());
this.addStateScript$S$javajs_util_BS$javajs_util_BS$javajs_util_BS$S$Z$Z("connect ", null, bsA, bsB, "delete", false, true);
}
}this.dBb$javajs_util_BS$Z(bsBonds, isFullModel);
});

Clazz.newMeth(C$, 'makeConnections2$F$F$I$I$javajs_util_BS$javajs_util_BS$javajs_util_BS$Z$Z$F', function (minD, maxD, order, connectOperation, bsA, bsB, bsBonds, isBonds, addGroup, energy) {
if (bsBonds == null ) bsBonds=Clazz.new_($I$(1,1));
var matchAny=(order == 65535);
var matchNull=(order == 131071);
var isAtrop=(order == 65537);
if (matchNull) order=1;
var matchHbond=$I$(26).isOrderH$I(order);
var identifyOnly=false;
var idOrModifyOnly=false;
var createOnly=false;
var autoAromatize=false;
switch (connectOperation) {
case 12291:
return this.deleteConnections$F$F$I$javajs_util_BS$javajs_util_BS$Z$Z(minD, maxD, order, bsA, bsB, isBonds, matchNull);
case 603979872:
case 1073741852:
if (order != 515) {
if (isBonds) {
var bs=bsA;
bsA=Clazz.new_($I$(1,1));
bsB=Clazz.new_($I$(1,1));
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
bsA.set$I(this.bo[i].atom1.i);
bsB.set$I(this.bo[i].atom2.i);
}
}return Clazz.array(Integer.TYPE, -1, [matchHbond ? this.autoHbond$javajs_util_BS$javajs_util_BS$Z(bsA, bsB, false) : this.autoBondBs4$javajs_util_BS$javajs_util_BS$javajs_util_BS$javajs_util_BS$H$Z(bsA, bsB, null, bsBonds, this.vwr.getMadBond$(), connectOperation == 603979872), 0]);
}idOrModifyOnly=autoAromatize=true;
break;
case 1086324745:
identifyOnly=idOrModifyOnly=true;
break;
case 1073742025:
idOrModifyOnly=true;
break;
case 1073741904:
createOnly=true;
break;
}
var anyOrNoId=(!identifyOnly || matchAny );
var notAnyAndNoId=(!identifyOnly && !matchAny );
this.defaultCovalentMad=this.vwr.getMadBond$();
var minDIsFrac=(minD < 0 );
var maxDIsFrac=(maxD < 0 );
var isFractional=(minDIsFrac || maxDIsFrac );
var checkDistance=(!isBonds || minD != 0.1   || maxD != 1.0E8  );
if (checkDistance) {
minD=this.fixD$F$Z(minD, minDIsFrac);
maxD=this.fixD$F$Z(maxD, maxDIsFrac);
}var mad=this.getDefaultMadFromOrder$I(order);
var nNew=0;
var nModified=0;
var bondAB=null;
var atomA=null;
var atomB=null;
var altloc="\u0000";
var newOrder=($s$[0] = (order | 131072), $s$[0]);
var isAromatic=((order & 512) != 0);
try {
for (var i=bsA.nextSetBit$I(0); i >= 0; i=bsA.nextSetBit$I(i + 1)) {
if (isBonds) {
bondAB=this.bo[i];
atomA=bondAB.atom1;
atomB=bondAB.atom2;
} else {
atomA=this.at[i];
if (atomA.isDeleted$()) continue;
altloc=(this.isModulated$I(i) ? "\u0000" : atomA.altloc);
}for (var j=(isBonds ? 0 : bsB.nextSetBit$I(0)); j >= 0; j=bsB.nextSetBit$I(j + 1)) {
if (isBonds) {
j=2147483646;
} else {
if (j == i) continue;
atomB=this.at[j];
if (atomA.mi != atomB.mi || atomB.isDeleted$() ) continue;
if (altloc != "\u0000" && altloc != atomB.altloc  && atomB.altloc != "\u0000" ) continue;
bondAB=atomA.getBond$org_jmol_modelset_Atom(atomB);
}if ((bondAB == null  ? idOrModifyOnly : createOnly) || checkDistance && !this.isInRange$org_jmol_modelset_Atom$org_jmol_modelset_Atom$F$F$Z$Z$Z(atomA, atomB, minD, maxD, minDIsFrac, maxDIsFrac, isFractional)   || isAromatic && !this.allowAromaticBond$org_jmol_modelset_Bond(bondAB)  ) continue;
if (bondAB == null ) {
bsBonds.set$I(this.bondAtoms$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS$F$Z$Z(atomA, atomB, order, mad, bsBonds, energy, addGroup, true).index);
nNew++;
} else {
if (notAnyAndNoId) {
bondAB.setOrder$I(order);
if (isAtrop) bondAB.setAtropisomerOptions$javajs_util_BS$javajs_util_BS(bsA, bsB);
this.bsAromatic.clear$I(bondAB.index);
}if (anyOrNoId || order == bondAB.order  || newOrder == bondAB.order  || matchHbond && bondAB.isHydrogen$()  ) {
bsBonds.set$I(bondAB.index);
nModified++;
}}}
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (autoAromatize) this.assignAromaticBondsBs$Z$javajs_util_BS(true, bsBonds);
if (!identifyOnly) this.sm.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(1, -2147483648, null, bsBonds);
return Clazz.array(Integer.TYPE, -1, [nNew, nModified]);
});

Clazz.newMeth(C$, 'autoBondBs4$javajs_util_BS$javajs_util_BS$javajs_util_BS$javajs_util_BS$H$Z', function (bsA, bsB, bsExclude, bsBonds, mad, preJmol11_9_24) {
if (preJmol11_9_24) return p$1.autoBond_Pre_11_9_24$javajs_util_BS$javajs_util_BS$javajs_util_BS$javajs_util_BS$H.apply(this, [bsA, bsB, bsExclude, bsBonds, mad]);
if (this.ac == 0) return 0;
if (mad == 0) mad=($s$[0] = 1, $s$[0]);
if (this.maxBondingRadius == 1.4E-45 ) this.findMaxRadii$();
var bondTolerance=this.vwr.getFloat$I(570425348);
var minBondDistance=this.vwr.getFloat$I(570425364);
var minBondDistance2=minBondDistance * minBondDistance;
var nNew=0;
if (this.showRebondTimes) $I$(21).startTimer$S("autobond");
var lastModelIndex=-1;
var isAll=(bsA == null );
var bsCheck;
var i0;
if (isAll) {
i0=0;
bsCheck=null;
} else {
if (bsA.equals$O(bsB)) {
bsCheck=bsA;
} else {
bsCheck=$I$(10).copy$javajs_util_BS(bsA);
bsCheck.or$javajs_util_BS(bsB);
}i0=bsCheck.nextSetBit$I(0);
}var iter=this.getSelectedAtomIterator$javajs_util_BS$Z$Z$Z$Z(null, false, false, true, false);
var useOccupation=false;
for (var i=i0; i >= 0 && i < this.ac ; i=(isAll ? i + 1 : bsCheck.nextSetBit$I(i + 1))) {
var isAtomInSetA=(isAll || bsA.get$I(i) );
var isAtomInSetB=(isAll || bsB.get$I(i) );
var atom=this.at[i];
if (atom.isDeleted$()) continue;
var modelIndex=atom.mi;
if (modelIndex != lastModelIndex) {
lastModelIndex=modelIndex;
if (this.isJmolDataFrameForModel$I(modelIndex)) {
i=this.am[modelIndex].firstAtomIndex + this.am[modelIndex].act - 1;
continue;
}useOccupation=this.getInfoB$I$S(modelIndex, "autoBondUsingOccupation");
}var myBondingRadius=atom.getBondingRadius$();
if (myBondingRadius == 0 ) continue;
var isFirstExcluded=(bsExclude != null  && bsExclude.get$I(i) );
var searchRadius=myBondingRadius + this.maxBondingRadius + bondTolerance ;
this.setIteratorForAtom$org_jmol_api_AtomIndexIterator$I$I$F$org_jmol_atomdata_RadiusData(iter, -1, i, searchRadius, null);
while (iter.hasNext$()){
var atomNear=this.at[iter.next$()];
if (atomNear.isDeleted$()) continue;
var j=atomNear.i;
var isNearInSetA=(isAll || bsA.get$I(j) );
var isNearInSetB=(isAll || bsB.get$I(j) );
if (!isNearInSetA && !isNearInSetB  || !(isAtomInSetA && isNearInSetB  || isAtomInSetB && isNearInSetA  )  || isFirstExcluded && bsExclude.get$I(j)   || useOccupation && this.occupancies != null   && (this.occupancies[i] < 50 ) != (this.occupancies[j] < 50 )   ) continue;
var order=(this.isBondable$F$F$F$F$F(myBondingRadius, atomNear.getBondingRadius$(), iter.foundDistance2$(), minBondDistance2, bondTolerance) ? 1 : 0);
if (order > 0 && p$1.autoBondCheck$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS.apply(this, [atom, atomNear, order, mad, bsBonds]) ) nNew++;
}
iter.release$();
}
if (this.showRebondTimes) $I$(21).checkTimer$S$Z("autoBond", false);
return nNew;
});

Clazz.newMeth(C$, 'isBondable$F$F$F$F$F', function (bondingRadiusA, bondingRadiusB, distance2, minBondDistance2, bondTolerance) {
if (bondingRadiusA == 0  || bondingRadiusB == 0   || distance2 < minBondDistance2  ) return false;
var maxAcceptable=bondingRadiusA + bondingRadiusB + bondTolerance ;
var maxAcceptable2=maxAcceptable * maxAcceptable;
return (distance2 <= maxAcceptable2 );
});

Clazz.newMeth(C$, 'autoBondCheck$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS', function (atomA, atomB, order, mad, bsBonds) {
if (atomA.getCurrentBondCount$() > 20 || atomB.getCurrentBondCount$() > 20 ) {
if (!this.maxBondWarned) $I$(21).warn$S("maximum auto bond count reached");
this.maxBondWarned=true;
return false;
}var formalChargeA=atomA.getFormalCharge$();
if (formalChargeA != 0) {
var formalChargeB=atomB.getFormalCharge$();
if ((formalChargeA < 0 && formalChargeB < 0 ) || (formalChargeA > 0 && formalChargeB > 0 ) ) return false;
}if (atomA.altloc != atomB.altloc && atomA.altloc != "\u0000"  && atomB.altloc != "\u0000"  && this.getModulation$I(atomA.i) == null  ) return false;
this.getOrAddBond$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS$F$Z(atomA, atomB, order, mad, bsBonds, 0, false);
return true;
}, p$1);

Clazz.newMeth(C$, 'autoBond_Pre_11_9_24$javajs_util_BS$javajs_util_BS$javajs_util_BS$javajs_util_BS$H', function (bsA, bsB, bsExclude, bsBonds, mad) {
if (this.ac == 0) return 0;
if (mad == 0) mad=($s$[0] = 1, $s$[0]);
if (this.maxBondingRadius == 1.4E-45 ) this.findMaxRadii$();
var bondTolerance=this.vwr.getFloat$I(570425348);
var minBondDistance=this.vwr.getFloat$I(570425364);
var minBondDistance2=minBondDistance * minBondDistance;
var nNew=0;
this.initializeBspf$();
var lastModelIndex=-1;
for (var i=this.ac; --i >= 0; ) {
var isAtomInSetA=(bsA == null  || bsA.get$I(i) );
var isAtomInSetB=(bsB == null  || bsB.get$I(i) );
if (!isAtomInSetA && !isAtomInSetB ) continue;
var atom=this.at[i];
if (atom.isDeleted$()) continue;
var modelIndex=atom.mi;
if (modelIndex != lastModelIndex) {
lastModelIndex=modelIndex;
if (this.isJmolDataFrameForModel$I(modelIndex)) {
for (; --i >= 0; ) if (this.at[i].mi != modelIndex) break;

i++;
continue;
}}var myBondingRadius=atom.getBondingRadius$();
if (myBondingRadius == 0 ) continue;
var searchRadius=myBondingRadius + this.maxBondingRadius + bondTolerance ;
this.initializeBspt$I(modelIndex);
var iter=this.bspf.getCubeIterator$I(modelIndex);
iter.initialize$javajs_util_T3$F$Z(atom, searchRadius, true);
while (iter.hasMoreElements$()){
var atomNear=iter.nextElement$();
if (atomNear === atom  || atomNear.isDeleted$() ) continue;
var atomIndexNear=atomNear.i;
var isNearInSetA=(bsA == null  || bsA.get$I(atomIndexNear) );
var isNearInSetB=(bsB == null  || bsB.get$I(atomIndexNear) );
if (!isNearInSetA && !isNearInSetB  || bsExclude != null  && bsExclude.get$I(atomIndexNear)  && bsExclude.get$I(i)  ) continue;
if (!(isAtomInSetA && isNearInSetB  || isAtomInSetB && isNearInSetA  )) continue;
var order=(this.isBondable$F$F$F$F$F(myBondingRadius, atomNear.getBondingRadius$(), iter.foundDistance2$(), minBondDistance2, bondTolerance) ? 1 : 0);
if (order > 0) {
if (p$1.autoBondCheck$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS.apply(this, [atom, atomNear, order, mad, bsBonds])) nNew++;
}}
iter.release$();
}
return nNew;
}, p$1);

Clazz.newMeth(C$, 'autoHbond$javajs_util_BS$javajs_util_BS$Z', function (bsA, bsB, onlyIfHaveCalculated) {
if (onlyIfHaveCalculated) {
var bsModels=this.getModelBS$javajs_util_BS$Z(bsA, false);
for (var i=bsModels.nextSetBit$I(0); i >= 0 && onlyIfHaveCalculated ; i=bsModels.nextSetBit$I(i + 1)) onlyIfHaveCalculated=!this.am[i].hasRasmolHBonds;

if (onlyIfHaveCalculated) return 0;
}var haveHAtoms=false;
for (var i=bsA.nextSetBit$I(0); i >= 0; i=bsA.nextSetBit$I(i + 1)) if (this.at[i].getElementNumber$() == 1) {
haveHAtoms=true;
break;
}
var bsHBonds=Clazz.new_($I$(1,1));
var useRasMol=this.vwr.getBoolean$I(603979853);
if (bsB == null  || useRasMol && !haveHAtoms  ) {
(function(a,f){return f.apply(null,a)})([(bsB == null  ? "DSSP/DSSR " : "RasMol") + " pseudo-hbond calculation"],$I$(21).info$S);
this.calcRasmolHydrogenBonds$javajs_util_BS$javajs_util_BS$javajs_util_Lst$Z$I$Z$javajs_util_BS(bsA, bsB, null, false, 2147483647, false, bsHBonds);
return -bsHBonds.cardinality$();
}$I$(21).info$S(haveHAtoms ? "Standard Hbond calculation" : "Jmol pseudo-hbond calculation");
var bsCO=null;
if (!haveHAtoms) {
bsCO=Clazz.new_($I$(1,1));
for (var i=bsA.nextSetBit$I(0); i >= 0; i=bsA.nextSetBit$I(i + 1)) {
var atomID=this.at[i].atomID;
switch (atomID) {
case 64:
case 4:
case 14:
case 15:
case 16:
case 17:
bsCO.set$I(i);
break;
}
}
}var dmax=this.vwr.getFloat$I(570425361);
var min2;
if (haveHAtoms) {
if (dmax > C$.hbondMaxReal ) dmax=C$.hbondMaxReal;
min2=1.0;
} else {
min2=C$.hbondMinRasmol * C$.hbondMinRasmol;
}var max2=dmax * dmax;
var minAttachedAngle=(this.vwr.getFloat$I(570425360) * 3.141592653589793 / 180);
var nNew=0;
var d2=0;
var v1=Clazz.new_($I$(9,1));
var v2=Clazz.new_($I$(9,1));
if (this.showRebondTimes && $I$(21).debugging ) $I$(21).startTimer$S("hbond");
var C=null;
var D=null;
var iter=this.getSelectedAtomIterator$javajs_util_BS$Z$Z$Z$Z(bsB, false, false, false, false);
for (var i=bsA.nextSetBit$I(0); i >= 0; i=bsA.nextSetBit$I(i + 1)) {
var atom=this.at[i];
var elementNumber=atom.getElementNumber$();
var isH=(elementNumber == 1);
if (isH ? !haveHAtoms : haveHAtoms || elementNumber != 7 && elementNumber != 8  ) continue;
var firstIsCO;
if (isH) {
firstIsCO=false;
var b=atom.bonds;
if (b == null ) continue;
var isOK=false;
for (var j=0; !isOK && j < b.length ; j++) {
var a2=b[j].getOtherAtom$org_jmol_modelset_Atom(atom);
var element=a2.getElementNumber$();
isOK=(element == 7 || element == 8 );
}
if (!isOK) continue;
} else {
firstIsCO=bsCO.get$I(i);
}this.setIteratorForAtom$org_jmol_api_AtomIndexIterator$I$I$F$org_jmol_atomdata_RadiusData(iter, -1, atom.i, dmax, null);
while (iter.hasNext$()){
var atomNear=this.at[iter.next$()];
var elementNumberNear=atomNear.getElementNumber$();
if (atomNear === atom  || (isH ? elementNumberNear == 1 : elementNumberNear != 7 && elementNumberNear != 8 )  || (d2=iter.foundDistance2$()) < min2   || d2 > max2   || firstIsCO && bsCO.get$I(atomNear.i)   || atom.isBonded$org_jmol_modelset_Atom(atomNear) ) {
continue;
}if (minAttachedAngle > 0 ) {
v1.sub2$javajs_util_T3$javajs_util_T3(atom, atomNear);
if ((D=C$.checkMinAttachedAngle$org_jmol_modelset_Atom$F$javajs_util_V3$javajs_util_V3$Z(atom, minAttachedAngle, v1, v2, haveHAtoms)) == null ) continue;
v1.scale$F(-1);
if ((C=C$.checkMinAttachedAngle$org_jmol_modelset_Atom$F$javajs_util_V3$javajs_util_V3$Z(atomNear, minAttachedAngle, v1, v2, haveHAtoms)) == null ) continue;
}var energy=0;
var bo;
if (isH && !Float.isNaN$F(C.x) && !Float.isNaN$F(D.x)  ) {
bo=($s$[0] = 4096, $s$[0]);
energy=(function(a,f){return f.apply(null,a)})([Math.sqrt(d2), C.distance$javajs_util_T3(atom), C.distance$javajs_util_T3(D), atomNear.distance$javajs_util_T3(D)],$I$(27).getEnergy$D$D$D$D) / 1000.0;
} else {
bo=($s$[0] = 2048, $s$[0]);
}bsHBonds.set$I(this.addHBond$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$F(atom, atomNear, bo, energy));
nNew++;
}
}
iter.release$();
this.sm.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(1, -2147483648, null, bsHBonds);
if (this.showRebondTimes) $I$(21).checkTimer$S$Z("hbond", false);
return (haveHAtoms ? nNew : -nNew);
});

Clazz.newMeth(C$, 'checkMinAttachedAngle$org_jmol_modelset_Atom$F$javajs_util_V3$javajs_util_V3$Z', function (atom1, minAngle, v1, v2, haveHAtoms) {
var bonds=atom1.bonds;
var ignore=true;
var X=null;
if (bonds != null  && bonds.length > 0 ) {
var dMin=3.4028235E38;
for (var i=bonds.length; --i >= 0; ) if (bonds[i].isCovalent$()) {
ignore=false;
var atomA=bonds[i].getOtherAtom$org_jmol_modelset_Atom(atom1);
if (!haveHAtoms && atomA.getElementNumber$() == 1 ) continue;
v2.sub2$javajs_util_T3$javajs_util_T3(atom1, atomA);
var d=v2.angle$javajs_util_V3(v1);
if (d < minAngle ) return null;
if (d < dMin ) {
X=atomA;
dMin=d;
}}
}return (ignore ? $I$(4).new3$F$F$F(NaN, 0, 0) : X);
}, 1);

Clazz.newMeth(C$, 'setStructureIndexes$', function () {
var id;
var idnew=0;
var lastid=-1;
var imodel=-1;
var lastmodel=-1;
for (var i=0; i < this.ac; i++) {
if ((imodel=this.at[i].mi) != lastmodel) {
idnew=0;
lastmodel=imodel;
lastid=-1;
}if ((id=this.at[i].group.getStrucNo$()) != lastid && id != 0 ) {
this.at[i].group.setStrucNo$I(++idnew);
lastid=idnew;
}}
});

Clazz.newMeth(C$, 'getModelInfoAsString$', function () {
var sb=Clazz.new_($I$(28,1)).append$S("<models count=\"");
sb.appendI$I(this.mc).append$S("\" modelSetHasVibrationVectors=\"").append$S(this.modelSetHasVibrationVectors$() + "\">\n<properties>");
if (this.modelSetProperties != null ) {
var e=this.modelSetProperties.propertyNames$();
while (e.hasMoreElements$()){
var propertyName=e.nextElement$();
sb.append$S("\n <property name=\"").append$S(propertyName).append$S("\" value=").append$S((function(a,f){return f.apply(null,a)})([this.modelSetProperties.getProperty$S(propertyName)],$I$(29).esc$S)).append$S(" />");
}
sb.append$S("\n</properties>");
}for (var i=0; i < this.mc; ++i) {
sb.append$S("\n<model index=\"").appendI$I(i).append$S("\" n=\"").append$S(this.getModelNumberDotted$I(i)).append$S("\" id=").append$S((function(a,f){return f.apply(null,a)})(["" + this.getInfo$I$S(i, "modelID")],$I$(29).esc$S));
var ib=this.vwr.getJDXBaseModelIndex$I(i);
if (ib != i) sb.append$S(" baseModelId=").append$S((function(a,f){return f.apply(null,a)})([this.getInfo$I$S(ib, "jdxModelID")],$I$(29).esc$S));
sb.append$S(" name=").append$S((function(a,f){return f.apply(null,a)})([this.getModelName$I(i)],$I$(29).esc$S)).append$S(" title=").append$S((function(a,f){return f.apply(null,a)})([this.getModelTitle$I(i)],$I$(29).esc$S)).append$S(" hasVibrationVectors=\"").appendB$Z(this.vwr.modelHasVibrationVectors$I(i)).append$S("\" />");
}
sb.append$S("\n</models>");
return sb.toString();
});

Clazz.newMeth(C$, 'getSymmetryInfoAsString$', function () {
var sb=Clazz.new_($I$(28,1)).append$S("Symmetry Information:");
for (var i=0; i < this.mc; ++i) {
sb.append$S("\nmodel #").append$S(this.getModelNumberDotted$I(i)).append$S("; name=").append$S(this.getModelName$I(i)).append$S("\n");
var unitCell=this.getUnitCell$I(i);
sb.append$S(unitCell == null  ? "no symmetry information" : unitCell.getSymmetryInfoStr$());
}
return sb.toString();
});

Clazz.newMeth(C$, 'createModels$I', function (n) {
var newModelCount=this.mc + n;
var newModels=$I$(12).arrayCopyObject$O$I(this.am, newModelCount);
this.validateBspf$Z(false);
this.modelNumbers=$I$(12).arrayCopyI$IA$I(this.modelNumbers, newModelCount);
this.modelFileNumbers=$I$(12).arrayCopyI$IA$I(this.modelFileNumbers, newModelCount);
this.modelNumbersForAtomLabel=$I$(12).arrayCopyS$SA$I(this.modelNumbersForAtomLabel, newModelCount);
this.modelNames=$I$(12).arrayCopyS$SA$I(this.modelNames, newModelCount);
this.frameTitles=$I$(12).arrayCopyS$SA$I(this.frameTitles, newModelCount);
var f=(this.modelFileNumbers[this.mc - 1]/1000000|0) + 1;
for (var i=this.mc, pt=0; i < newModelCount; i++) {
this.modelNumbers[i]=i + this.mc;
this.modelFileNumbers[i]=f * 1000000 + (++pt);
this.modelNumbersForAtomLabel[i]=this.modelNames[i]=f + "." + pt ;
}
this.thisStateModel=-1;
var group3Lists=this.getInfoM$S("group3Lists");
if (group3Lists != null ) {
var group3Counts=this.getInfoM$S("group3Counts");
group3Lists=$I$(12).arrayCopyS$SA$I(group3Lists, newModelCount);
group3Counts=$I$(12).arrayCopyII$IAA$I(group3Counts, newModelCount);
this.msInfo.put$O$O("group3Lists", group3Lists);
this.msInfo.put$O$O("group3Counts", group3Counts);
}this.unitCells=$I$(12).arrayCopyObject$O$I(this.unitCells, newModelCount);
for (var i=this.mc; i < newModelCount; i++) {
newModels[i]=Clazz.new_($I$(5,1)).set$org_jmol_modelset_ModelSet$I$I$S$java_util_Properties$java_util_Map(this, i, -1, null, null, null);
newModels[i].loadState=" model create #" + i + ";" ;
}
this.am=newModels;
this.mc=newModelCount;
});

Clazz.newMeth(C$, 'deleteAtoms$javajs_util_BS', function (bs) {
if (bs == null ) return;
var bsBonds=Clazz.new_($I$(1,1));
for (var i=bs.nextSetBit$I(0); i >= 0 && i < this.ac ; i=bs.nextSetBit$I(i + 1)) this.at[i].delete$javajs_util_BS(bsBonds);

for (var i=0; i < this.mc; i++) {
this.am[i].bsAtomsDeleted.or$javajs_util_BS(bs);
this.am[i].bsAtomsDeleted.and$javajs_util_BS(this.am[i].bsAtoms);
this.am[i].resetDSSR$Z(false);
}
this.deleteBonds$javajs_util_BS$Z(bsBonds, false);
this.validateBspf$Z(false);
});

Clazz.newMeth(C$, 'clearDB$I', function (atomIndex) {
this.getModelAuxiliaryInfo$I(this.at[atomIndex].mi).remove$O("dbName");
});

Clazz.newMeth(C$, 'adjustAtomArrays$IA$I$I', function (map, i0, ac) {
this.ac=ac;
for (var i=i0; i < ac; i++) {
this.at[i]=this.at[map[i]];
this.at[i].i=i;
var m=this.am[this.at[i].mi];
if (m.firstAtomIndex == map[i]) m.firstAtomIndex=i;
m.bsAtoms.set$I(i);
}
if (this.vibrations != null ) for (var i=i0; i < ac; i++) this.vibrations[i]=this.vibrations[map[i]];

if (this.atomTensorList != null ) {
for (var i=i0; i < ac; i++) {
var list=this.atomTensorList[i]=this.atomTensorList[map[i]];
if (list != null ) for (var j=list.length; --j >= 0; ) {
var t=list[j];
if (t != null ) {
t.atomIndex1=i;
}}
}
}if (this.atomNames != null ) for (var i=i0; i < ac; i++) this.atomNames[i]=this.atomNames[map[i]];

if (this.atomTypes != null ) for (var i=i0; i < ac; i++) this.atomTypes[i]=this.atomTypes[map[i]];

if (this.atomResnos != null ) for (var i=i0; i < ac; i++) this.atomResnos[i]=this.atomResnos[map[i]];

if (this.atomSerials != null ) for (var i=i0; i < ac; i++) this.atomSerials[i]=this.atomSerials[map[i]];

if (this.atomSeqIDs != null ) for (var i=i0; i < ac; i++) this.atomSeqIDs[i]=this.atomSeqIDs[map[i]];

if (this.bfactor100s != null ) for (var i=i0; i < ac; i++) this.bfactor100s[i]=this.bfactor100s[map[i]];

if (this.occupancies != null ) for (var i=i0; i < ac; i++) this.occupancies[i]=this.occupancies[map[i]];

if (this.partialCharges != null ) for (var i=i0; i < ac; i++) this.partialCharges[i]=this.partialCharges[map[i]];

});

Clazz.newMeth(C$, 'growAtomArrays$I', function (newLength) {
this.at=$I$(12).arrayCopyObject$O$I(this.at, newLength);
if (this.vibrations != null ) this.vibrations=$I$(12).arrayCopyObject$O$I(this.vibrations, newLength);
if (this.occupancies != null ) this.occupancies=$I$(12).arrayCopyF$FA$I(this.occupancies, newLength);
if (this.bfactor100s != null ) this.bfactor100s=$I$(12).arrayCopyShort$HA$I(this.bfactor100s, newLength);
if (this.partialCharges != null ) this.partialCharges=$I$(12).arrayCopyF$FA$I(this.partialCharges, newLength);
if (this.atomTensorList != null ) this.atomTensorList=$I$(12).arrayCopyObject$O$I(this.atomTensorList, newLength);
if (this.atomNames != null ) this.atomNames=$I$(12).arrayCopyS$SA$I(this.atomNames, newLength);
if (this.atomTypes != null ) this.atomTypes=$I$(12).arrayCopyS$SA$I(this.atomTypes, newLength);
if (this.atomResnos != null ) this.atomResnos=$I$(12).arrayCopyI$IA$I(this.atomResnos, newLength);
if (this.atomSerials != null ) this.atomSerials=$I$(12).arrayCopyI$IA$I(this.atomSerials, newLength);
if (this.atomSeqIDs != null ) this.atomSeqIDs=$I$(12).arrayCopyI$IA$I(this.atomSeqIDs, newLength);
});

Clazz.newMeth(C$, 'addAtom$I$org_jmol_modelset_Group$I$S$S$I$I$I$javajs_util_P3$F$javajs_util_V3$I$F$F$F$javajs_util_Lst$Z$B$javajs_util_BS', function (modelIndex, group, atomicAndIsotopeNumber, atomName, atomType, atomSerial, atomSeqID, atomSite, xyz, radius, vib, formalCharge, partialCharge, occupancy, bfactor, tensors, isHetero, specialAtomID, atomSymmetry) {
var atom=Clazz.new_($I$(6,1)).setAtom$I$I$javajs_util_P3$F$javajs_util_BS$I$H$I$Z(modelIndex, this.ac, xyz, radius, atomSymmetry, atomSite, ($s$[0] = atomicAndIsotopeNumber, $s$[0]), formalCharge, isHetero);
this.am[modelIndex].act++;
this.am[modelIndex].bsAtoms.set$I(this.ac);
if ($I$(30).isElement$I$I(atomicAndIsotopeNumber, 1)) this.am[modelIndex].hydrogenCount++;
if (this.ac >= this.at.length) this.growAtomArrays$I(this.ac + 100);
this.at[this.ac]=atom;
this.setBFactor$I$F$Z(this.ac, bfactor, false);
this.setOccupancy$I$F$Z(this.ac, occupancy, false);
this.setPartialCharge$I$F$Z(this.ac, partialCharge, false);
if (tensors != null ) this.setAtomTensors$I$javajs_util_Lst(this.ac, tensors);
atom.group=group;
atom.colixAtom=this.vwr.cm.getColixAtomPalette$org_jmol_modelset_Atom$B(atom, $I$(31).CPK.id);
if (atomName != null ) {
if (atomType != null ) {
if (this.atomTypes == null ) this.atomTypes=Clazz.array(String, [this.at.length]);
this.atomTypes[this.ac]=atomType;
}atom.atomID=specialAtomID;
if (specialAtomID == 0) {
if (this.atomNames == null ) this.atomNames=Clazz.array(String, [this.at.length]);
this.atomNames[this.ac]=atomName.intern$();
}}if (atomSerial != -2147483648) {
if (this.atomSerials == null ) this.atomSerials=Clazz.array(Integer.TYPE, [this.at.length]);
this.atomSerials[this.ac]=atomSerial;
}if (atomSeqID != 0) {
if (this.atomSeqIDs == null ) this.atomSeqIDs=Clazz.array(Integer.TYPE, [this.at.length]);
this.atomSeqIDs[this.ac]=atomSeqID;
}if (vib != null ) this.setVibrationVector$I$javajs_util_T3(this.ac, vib);
this.ac++;
return atom;
});

Clazz.newMeth(C$, 'getInlineData$I', function (modelIndex) {
var data=null;
if (modelIndex >= 0) data=this.am[modelIndex].loadScript;
 else for (modelIndex=this.mc; --modelIndex >= 0; ) if ((data=this.am[modelIndex].loadScript).length$() > 0) break;

var pt=data.lastIndexOf$S("data \"");
if (pt < 0) {
var s=(function(a,f){return f.apply(null,a)})([data.toString(), 0],$I$(29).getQuotedStringAt$S$I);
return (function(a,f){return f.apply(null,a)})([s, 0, s.length$()],$I$(32).unescapeString$S$I$I);
}pt=data.indexOf2$S$I("\"", pt + 7);
var pt2=data.lastIndexOf$S("end \"");
if (pt2 < pt || pt < 0 ) return null;
return data.substring2$I$I(pt + 2, pt2);
});

Clazz.newMeth(C$, 'isAtomPDB$I', function (i) {
return i >= 0 && this.am[this.at[i].mi].isBioModel ;
});

Clazz.newMeth(C$, 'isAtomInLastModel$I', function (i) {
return i >= 0 && this.at[i].mi == this.mc - 1 ;
});

Clazz.newMeth(C$, 'haveModelKit$', function () {
for (var i=0; i < this.mc; i++) if (this.am[i].isModelKit) return true;

return false;
});

Clazz.newMeth(C$, 'getModelKitStateBitset$javajs_util_BS$javajs_util_BS', function (bs, bsDeleted) {
var bs1=$I$(10).copy$javajs_util_BS(bsDeleted);
for (var i=0; i < this.mc; i++) if (!this.am[i].isModelKit) bs1.andNot$javajs_util_BS(this.am[i].bsAtoms);

return $I$(10).deleteBits$javajs_util_BS$javajs_util_BS(bs, bs1);
});

Clazz.newMeth(C$, 'setAtomNamesAndNumbers$I$I$org_jmol_modelset_AtomCollection', function (iFirst, baseAtomIndex, mergeSet) {
if (baseAtomIndex < 0) iFirst=this.am[this.at[iFirst].mi].firstAtomIndex;
if (this.atomSerials == null ) this.atomSerials=Clazz.array(Integer.TYPE, [this.ac]);
if (this.atomNames == null ) this.atomNames=Clazz.array(String, [this.ac]);
var isZeroBased=this.isXYZ && this.vwr.getBoolean$I(603979978) ;
var lastModelIndex=2147483647;
var atomNo=1;
for (var i=iFirst; i < this.ac; ++i) {
var atom=this.at[i];
if (atom.mi != lastModelIndex) {
lastModelIndex=atom.mi;
atomNo=(isZeroBased ? 0 : 1);
}if (i >= -baseAtomIndex) {
if (this.atomSerials[i] == 0 || baseAtomIndex < 0 ) this.atomSerials[i]=(i < baseAtomIndex ? mergeSet.atomSerials[i] : atomNo);
if (this.atomNames[i] == null  || baseAtomIndex < 0 ) this.atomNames[i]=(atom.getElementSymbol$() + this.atomSerials[i]).intern$();
}if (!this.am[lastModelIndex].isModelKit || atom.getElementNumber$() > 0 && !atom.isDeleted$()  ) atomNo++;
}
});

Clazz.newMeth(C$, 'setUnitCellOffset$org_jmol_api_SymmetryInterface$javajs_util_T3$I', function (unitCell, pt, ijk) {
if (unitCell == null ) return;
if (pt == null ) unitCell.setOffset$I(ijk);
 else unitCell.setOffsetPt$javajs_util_T3(pt);
});

Clazz.newMeth(C$, 'connect$FAA', function (connections) {
this.resetMolecules$();
var bsDelete=Clazz.new_($I$(1,1));
for (var i=0; i < connections.length; i++) {
var f=connections[i];
if (f == null  || f.length < 2 ) continue;
var index1=(f[0]|0);
var addGroup=(index1 < 0);
if (addGroup) index1=-1 - index1;
var index2=(f[1]|0);
if (index2 < 0 || index1 >= this.ac  || index2 >= this.ac ) continue;
var order=(f.length > 2 ? (f[2]|0) : 1);
if (order < 0) order&=65535;
var mad=(f.length > 3 ? ($s$[0] = (1000.0 * connections[i][3]), $s$[0]) : this.getDefaultMadFromOrder$I(order));
if (order == 0 || mad == 0 && order != 32768  && !$I$(26).isOrderH$I(order)  ) {
var b=this.at[index1].getBond$org_jmol_modelset_Atom(this.at[index2]);
if (b != null ) bsDelete.set$I(b.index);
continue;
}var energy=(f.length > 4 ? f[4] : 0);
this.bondAtoms$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS$F$Z$Z(this.at[index1], this.at[index2], order, mad, null, energy, addGroup, true);
}
if (bsDelete.nextSetBit$I(0) >= 0) this.deleteBonds$javajs_util_BS$Z(bsDelete, false);
});

Clazz.newMeth(C$, 'setFrameDelayMs$J$javajs_util_BS', function (millis, bsModels) {
for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) this.am[this.am[i].trajectoryBaseIndex].frameDelay=millis;

});

Clazz.newMeth(C$, 'getFrameDelayMs$I', function (i) {
return (i < this.am.length && i >= 0  ? this.am[this.am[i].trajectoryBaseIndex].frameDelay : 0);
});

Clazz.newMeth(C$, 'getModelIndexFromId$S', function (id) {
var haveFile=(id.indexOf$S("#") >= 0);
var isBaseModel=id.toLowerCase$().endsWith$S(".basemodel");
if (isBaseModel) id=id.substring$I$I(0, id.length$() - 10);
var errCode=-1;
var fname=null;
for (var i=0; i < this.mc; i++) {
var mid=this.getInfo$I$S(i, "modelID");
var mnum=(id.startsWith$S("~") ? "~" + this.getModelNumberDotted$I(i) : null);
if (mnum == null  && mid == null   && (mid=this.getModelTitle$I(i)) == null  ) continue;
if (haveFile) {
fname=this.getModelFileName$I(i);
if (fname.endsWith$S("#molfile")) {
mid=fname;
} else {
fname += "#";
mid=fname + mid;
}}if (id.equalsIgnoreCase$S(mid) || id.equalsIgnoreCase$S(mnum) ) return (isBaseModel ? this.vwr.getJDXBaseModelIndex$I(i) : i);
if (fname != null  && id.startsWith$S(fname) ) errCode=-2;
}
return (fname == null  && !haveFile  ? -2 : errCode);
});

Clazz.newMeth(C$, 'getAuxiliaryInfo$javajs_util_BS', function (bsModels) {
var info=this.msInfo;
if (info == null ) info=Clazz.new_($I$(20,1));
if (bsModels != null  || !info.containsKey$O("models") ) {
var minfo=Clazz.new_($I$(2,1));
for (var i=0; i < this.mc; ++i) if (bsModels == null  || bsModels.get$I(i) ) {
var m=this.getModelAuxiliaryInfo$I(i);
m.put$O$O("modelIndex", Integer.valueOf$I(i));
minfo.addLast$O(m);
}
info.put$O$O("models", minfo);
}return info;
});

Clazz.newMeth(C$, 'getDihedralMap$IA', function (alist) {
var list=Clazz.new_($I$(2,1));
var n=alist.length;
var ai=null;
var aj=null;
var ak=null;
var al=null;
for (var i=n - 1; --i >= 0; ) for (var j=n; --j > i; ) {
ai=this.at[alist[i]];
aj=this.at[alist[j]];
if (ai.isBonded$org_jmol_modelset_Atom(aj)) {
for (var k=n; --k >= 0; ) if (k != i && k != j  && (ak=this.at[alist[k]]).isBonded$org_jmol_modelset_Atom(ai) ) for (var l=n; --l >= 0; ) if (l != i && l != j  && l != k  && (al=this.at[alist[l]]).isBonded$org_jmol_modelset_Atom(aj) ) {
var a=Clazz.array(Integer.TYPE, [4]);
a[0]=ak.i;
a[1]=ai.i;
a[2]=aj.i;
a[3]=al.i;
list.addLast$O(a);
}

}}

n=list.size$();
var ilist=$I$(12).newInt2$I(n);
for (var i=n; --i >= 0; ) ilist[n - i - 1 ]=list.get$I(i);

return ilist;
});

Clazz.newMeth(C$, 'setModulation$javajs_util_BS$Z$javajs_util_P3$Z', function (bs, isOn, qtOffset, isQ) {
if (this.bsModulated == null ) {
if (isOn) this.bsModulated=Clazz.new_($I$(1,1));
 else if (bs == null ) return;
}if (bs == null ) bs=this.getModelAtomBitSetIncludingDeleted$I$Z(-1, false);
var scale=this.vwr.getFloat$I(1275072532);
var haveMods=false;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var ms=this.getModulation$I(i);
if (ms == null ) continue;
ms.setModTQ$javajs_util_T3$Z$javajs_util_T3$Z$F(this.at[i], isOn, qtOffset, isQ, scale);
if (this.bsModulated != null ) this.bsModulated.setBitTo$I$Z(i, isOn);
haveMods=true;
}
if (!haveMods) this.bsModulated=null;
});

Clazz.newMeth(C$, 'getBoundBoxOrientation$I$javajs_util_BS', function (type, bsAtoms) {
var dx=0;
var dy=0;
var dz=0;
var q=null;
var qBest=null;
var j0=bsAtoms.nextSetBit$I(0);
var vMin=0;
if (j0 >= 0) {
var n=(this.vOrientations == null  ? 0 : this.vOrientations.length);
if (n == 0) {
var av=Clazz.array($I$(9), [3375]);
n=0;
var p4=Clazz.new_($I$(33,1));
for (var i=-7; i <= 7; i++) for (var j=-7; j <= 7; j++) for (var k=0; k <= 14; k++, n++) if ((av[n]=$I$(9).new3$F$F$F(i / 7.0, j / 7.0, k / 14.0)).length$() > 1 ) --n;



this.vOrientations=Clazz.array($I$(34), [n]);
for (var i=n; --i >= 0; ) {
var cos=Math.sqrt(1 - av[i].lengthSquared$());
if (Float.isNaN$F(cos)) cos=0;
p4.set4$F$F$F$F(av[i].x, av[i].y, av[i].z, cos);
this.vOrientations[i]=$I$(34).newP4$javajs_util_P4(p4);
}
}var pt=Clazz.new_($I$(4,1));
vMin=3.4028235E38;
var bBest=null;
var v;
var b=Clazz.new_($I$(3,1));
b.setMargin$F(type == 1312817669 ? 0 : 0.1);
for (var i=0; i < n; i++) {
q=this.vOrientations[i];
b.reset$();
for (var j=j0; j >= 0; j=bsAtoms.nextSetBit$I(j + 1)) b.addBoundBoxPoint$javajs_util_T3(q.transform2$javajs_util_T3$javajs_util_T3(this.at[j], pt));

switch (type) {
default:
case 1312817669:
case 1073741864:
case 1814695966:
v=(b.bbCorner1.x - b.bbCorner0.x) * (b.bbCorner1.y - b.bbCorner0.y) * (b.bbCorner1.z - b.bbCorner0.z) ;
break;
case 1111492629:
v=b.bbCorner1.x - b.bbCorner0.x;
break;
case 1111492630:
v=b.bbCorner1.y - b.bbCorner0.y;
break;
case 1111492631:
v=b.bbCorner1.z - b.bbCorner0.z;
break;
}
if (v < vMin ) {
qBest=q;
bBest=b;
b=Clazz.new_($I$(3,1));
b.setMargin$F(0.1);
vMin=v;
}}
switch (type) {
default:
return qBest;
case 1814695966:
var pts=bBest.getBoundBoxVertices$();
pts=Clazz.array($I$(4), -1, [pts[0], pts[4], pts[2], pts[1]]);
qBest=qBest.inv$();
for (var i=0; i < 4; i++) {
qBest.transform2$javajs_util_T3$javajs_util_T3(pts[i], pts[i]);
if (i > 0) pts[i].sub$javajs_util_T3(pts[0]);
}
return pts;
case 1312817669:
case 1073741864:
q=$I$(34).newQ$javajs_util_Quat(qBest);
dx=bBest.bbCorner1.x - bBest.bbCorner0.x;
dy=bBest.bbCorner1.y - bBest.bbCorner0.y;
dz=bBest.bbCorner1.z - bBest.bbCorner0.z;
if (dx < dy ) {
pt.set$F$F$F(0, 0, 1);
q=$I$(34).newVA$javajs_util_T3$F(pt, 90).mulQ$javajs_util_Quat(q);
var f=dx;
dx=dy;
dy=f;
}if (dy < dz ) {
if (dz > dx ) {
pt.set$F$F$F(0, 1, 0);
q=$I$(34).newVA$javajs_util_T3$F(pt, 90).mulQ$javajs_util_Quat(q);
var f=dx;
dx=dz;
dz=f;
}pt.set$F$F$F(1, 0, 0);
q=$I$(34).newVA$javajs_util_T3$F(pt, 90).mulQ$javajs_util_Quat(q);
var f=dy;
dy=dz;
dz=f;
}break;
}
}return (type == 1312817669 ? new Float(vMin).toString() + "\t{" + new Float(dx).toString() + " " + new Float(dy).toString() + " " + new Float(dz).toString() + "}\t" + bsAtoms  : type == 1814695966 ? null : q == null  || q.getTheta$() == 0   ? Clazz.new_($I$(34,1)) : q);
});

Clazz.newMeth(C$, 'getUnitCellForAtom$I', function (index) {
if (index < 0 || index > this.ac ) return null;
if (this.bsModulated != null ) {
var ms=this.getModulation$I(index);
var uc=(ms == null  ? null : ms.getSubSystemUnitCell$());
if (uc != null ) return uc;
}return this.getUnitCell$I(this.at[index].mi);
});

Clazz.newMeth(C$, 'clearCache$', function () {
for (var i=this.mc; --i >= 0; ) this.am[i].resetDSSR$Z(false);

});

Clazz.newMeth(C$, 'getSymMatrices$I', function (modelIndex) {
var n=this.getModelSymmetryCount$I(modelIndex);
if (n == 0) return null;
var ops=Clazz.array($I$(8), [n]);
var unitcell=this.am[modelIndex].biosymmetry;
if (unitcell == null ) unitcell=this.getUnitCell$I(modelIndex);
for (var i=n; --i >= 0; ) ops[i]=unitcell.getSpaceGroupOperation$I(i);

return ops;
});

Clazz.newMeth(C$, 'getBsBranches$FA', function (dihedralList) {
var n=(dihedralList.length/6|0);
var bsBranches=Clazz.array($I$(1), [n]);
var map=Clazz.new_($I$(20,1));
for (var i=0, pt=0; i < n; i++, pt+=6) {
var dv=dihedralList[pt + 5] - dihedralList[pt + 4];
if (Math.abs(dv) < 1.0 ) continue;
var i0=(dihedralList[pt + 1]|0);
var i1=(dihedralList[pt + 2]|0);
var s="" + i0 + "_" + i1 ;
if (map.containsKey$O(s)) continue;
map.put$O$O(s, $I$(35).TRUE);
var bs=this.vwr.getBranchBitSet$I$I$Z(i1, i0, true);
var bonds=this.at[i0].bonds;
var a0=this.at[i0];
for (var j=0; j < bonds.length; j++) {
var b=bonds[j];
if (!b.isCovalent$()) continue;
var i2=b.getOtherAtom$org_jmol_modelset_Atom(a0).i;
if (i2 == i1) continue;
if (bs.get$I(i2)) {
bs=null;
break;
}}
bsBranches[i]=bs;
}
return bsBranches;
});

Clazz.newMeth(C$, 'recalculatePositionDependentQuantities$javajs_util_BS$javajs_util_M4', function (bs, mat) {
if ((this.vwr.shm.getShape$I(21) != null )) this.vwr.shm.getShapePropertyData$I$S$OA(21, "move", Clazz.array(java.lang.Object, -1, [bs, mat]));
if (this.haveStraightness) this.calculateStraightnessAll$();
this.recalculateLeadMidpointsAndWingVectors$I(-1);
var bsModels=this.getModelBS$javajs_util_BS$Z(bs, false);
for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) {
this.sm.notifyAtomPositionsChanged$I$javajs_util_BS$javajs_util_M4(i, bs, mat);
if (mat != null ) {
var m=this.am[i];
if (m.isContainedIn$javajs_util_BS(bs)) {
if (m.mat4 == null ) m.mat4=$I$(8).newM4$javajs_util_M4(null);
m.mat4.mul2$javajs_util_M4$javajs_util_M4(mat, m.mat4);
}}}
});

Clazz.newMeth(C$, 'moveAtoms$javajs_util_M4$javajs_util_M3$javajs_util_M3$javajs_util_V3$javajs_util_BS$javajs_util_P3$Z$Z', function (m4, mNew, rotation, translation, bs, center, isInternal, translationOnly) {
if (m4 != null ) {
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
m4.rotTrans$javajs_util_T3(this.at[i]);
this.taintAtom$I$I(i, 2);
}
this.mat4.setM4$javajs_util_M4(m4);
translation=null;
} else if (!translationOnly) {
if (mNew == null ) {
this.matTemp.setM3$javajs_util_M34(rotation);
} else {
this.ptTemp.set$F$F$F(0, 0, 0);
this.matInv.setM3$javajs_util_M34(rotation);
this.matInv.invert$();
this.matTemp.mul2$javajs_util_M3$javajs_util_M3(mNew, rotation);
this.matTemp.mul2$javajs_util_M3$javajs_util_M3(this.matInv, this.matTemp);
}if (isInternal) {
this.vTemp.setT$javajs_util_T3(center);
this.mat4.setIdentity$();
this.mat4.setTranslation$javajs_util_T3(this.vTemp);
this.mat4t.setToM3$javajs_util_M34(this.matTemp);
this.mat4.mul$javajs_util_M4(this.mat4t);
this.mat4t.setIdentity$();
this.vTemp.scale$F(-1);
this.mat4t.setTranslation$javajs_util_T3(this.vTemp);
this.mat4.mul$javajs_util_M4(this.mat4t);
} else {
this.mat4.setToM3$javajs_util_M34(this.matTemp);
}for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (isInternal) {
this.mat4.rotTrans$javajs_util_T3(this.at[i]);
} else {
this.ptTemp.add$javajs_util_T3(this.at[i]);
this.mat4.rotTrans$javajs_util_T3(this.at[i]);
this.ptTemp.sub$javajs_util_T3(this.at[i]);
}this.taintAtom$I$I(i, 2);
}
if (!isInternal) {
this.ptTemp.scale$F(1.0 / bs.cardinality$());
if (translation == null ) translation=Clazz.new_($I$(9,1));
translation.add$javajs_util_T3(this.ptTemp);
}}if (translation != null ) {
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
this.at[i].add$javajs_util_T3(translation);
this.taintAtom$I$I(i, 2);
}
if (!translationOnly) {
this.mat4t.setIdentity$();
this.mat4t.setTranslation$javajs_util_T3(translation);
this.mat4.mul2$javajs_util_M4$javajs_util_M4(this.mat4t, this.mat4);
}}this.recalculatePositionDependentQuantities$javajs_util_BS$javajs_util_M4(bs, this.mat4);
});

Clazz.newMeth(C$, 'setDihedrals$FA$javajs_util_BSA$F', function (dihedralList, bsBranches, f) {
var n=(dihedralList.length/6|0);
if (f > 1 ) f=1;
for (var j=0, pt=0; j < n; j++, pt+=6) {
var bs=bsBranches[j];
if (bs == null  || bs.isEmpty$() ) continue;
var a1=this.at[(dihedralList[pt + 1]|0)];
var v=(function(a,f){return f.apply(null,a)})([this.at[(dihedralList[pt + 2]|0)], a1],$I$(9).newVsub$javajs_util_T3$javajs_util_T3);
var angle=(dihedralList[pt + 5] - dihedralList[pt + 4]) * f;
var aa=(function(a,f){return f.apply(null,a)})([v, (-angle / 57.29577951308232)],$I$(36).newVA$javajs_util_V3$F);
this.matTemp.setAA$javajs_util_A4(aa);
this.ptTemp.setT$javajs_util_T3(a1);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
this.at[i].sub$javajs_util_T3(this.ptTemp);
this.matTemp.rotate$javajs_util_T3(this.at[i]);
this.at[i].add$javajs_util_T3(this.ptTemp);
this.taintAtom$I$I(i, 2);
}
}
});

Clazz.newMeth(C$, 'setAtomCoordsRelative$javajs_util_T3$javajs_util_BS', function (offset, bs) {
this.setAtomsCoordRelative$javajs_util_BS$F$F$F(bs, offset.x, offset.y, offset.z);
this.mat4.setIdentity$();
this.vTemp.setT$javajs_util_T3(offset);
this.mat4.setTranslation$javajs_util_T3(this.vTemp);
this.recalculatePositionDependentQuantities$javajs_util_BS$javajs_util_M4(bs, this.mat4);
});

Clazz.newMeth(C$, 'setAtomCoords$javajs_util_BS$I$O', function (bs, tokType, xyzValues) {
this.setAtomCoord2$javajs_util_BS$I$O(bs, tokType, xyzValues);
switch (tokType) {
case 1111492626:
case 1111492627:
case 1111492628:
case 1145047055:
break;
default:
this.recalculatePositionDependentQuantities$javajs_util_BS$javajs_util_M4(bs, null);
}
});

Clazz.newMeth(C$, 'invertSelected$javajs_util_P3$javajs_util_P4$I$javajs_util_BS', function (pt, plane, iAtom, bsAtoms) {
p$1.resetChirality.apply(this, []);
if (pt != null ) {
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
var x=(pt.x - this.at[i].x) * 2;
var y=(pt.y - this.at[i].y) * 2;
var z=(pt.z - this.at[i].z) * 2;
this.setAtomCoordRelative$I$F$F$F(i, x, y, z);
}
return;
}if (plane != null ) {
var norm=$I$(9).new3$F$F$F(plane.x, plane.y, plane.z);
norm.normalize$();
var d=Math.sqrt(plane.x * plane.x + plane.y * plane.y + plane.z * plane.z);
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
var twoD=-$I$(37).distanceToPlaneD$javajs_util_P4$F$javajs_util_P3(plane, d, this.at[i]) * 2;
var x=norm.x * twoD;
var y=norm.y * twoD;
var z=norm.z * twoD;
this.setAtomCoordRelative$I$F$F$F(i, x, y, z);
}
return;
}if (iAtom >= 0) {
var thisAtom=this.at[iAtom];
var bonds=thisAtom.bonds;
if (bonds == null ) return;
var bsToMove=Clazz.new_($I$(1,1));
var vNot=Clazz.new_($I$(2,1));
var bsModel=this.vwr.getModelUndeletedAtomsBitSet$I(thisAtom.mi);
for (var i=0; i < bonds.length; i++) {
var a=bonds[i].getOtherAtom$org_jmol_modelset_Atom(thisAtom);
if (bsAtoms.get$I(a.i)) {
bsToMove.or$javajs_util_BS($I$(22).getBranchBitSet$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_Lst$I$Z$Z(this.at, a.i, bsModel, null, iAtom, true, true));
} else {
vNot.addLast$O(a);
}}
if (vNot.size$() == 0) return;
pt=$I$(37).getCenterAndPoints$javajs_util_Lst(vNot)[0];
var v=$I$(9).newVsub$javajs_util_T3$javajs_util_T3(thisAtom, pt);
var q=$I$(34).newVA$javajs_util_T3$F(v, 180);
this.moveAtoms$javajs_util_M4$javajs_util_M3$javajs_util_M3$javajs_util_V3$javajs_util_BS$javajs_util_P3$Z$Z(null, null, q.getMatrix$(), null, bsToMove, thisAtom, true, false);
}});

Clazz.newMeth(C$, 'getCellWeights$javajs_util_BS', function (bsAtoms) {
var wts=null;
var i=bsAtoms.nextSetBit$I(0);
var iModel=-1;
if (i >= 0 && this.getUnitCell$I(iModel=this.at[i].mi) != null  ) {
var pt=Clazz.new_($I$(4,1));
var bs=this.getModelAtomBitSetIncludingDeleted$I$Z(iModel, true);
bs.and$javajs_util_BS(bsAtoms);
wts=Clazz.array(Float.TYPE, [bsAtoms.cardinality$()]);
for (var p=0; i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) wts[p++]=(function(a,f){return f.apply(null,a)})([this.at[i].getFractionalUnitCoordPt$Z$Z$javajs_util_P3(true, false, pt)],$I$(38).getCellWeight$javajs_util_P3);

}return wts;
});

Clazz.newMeth(C$, 'getAtomGroupQuaternions$javajs_util_BS$I$C', function (bsAtoms, nMax, qtype) {
var n=0;
var v=Clazz.new_($I$(2,1));
bsAtoms=$I$(10).copy$javajs_util_BS(bsAtoms);
var bsDone=Clazz.new_($I$(1,1));
for (var i=bsAtoms.nextSetBit$I(0); i >= 0 && n < nMax ; i=bsAtoms.nextSetBit$I(i + 1)) {
var g=this.at[i].group;
g.setAtomBits$javajs_util_BS(bsDone);
bsAtoms.andNot$javajs_util_BS(bsDone);
var q=g.getQuaternion$C(qtype);
if (q == null ) {
if (!this.am[this.at[i].mi].isBioModel) q=g.getQuaternionFrame$org_jmol_modelset_AtomA(this.at);
if (q == null ) continue;
}n++;
v.addLast$O(q);
}
return v.toArray$OA(Clazz.array($I$(34), [v.size$()]));
});

Clazz.newMeth(C$, 'getConformation$I$I$Z$javajs_util_BS', function (modelIndex, conformationIndex, doSet, bsSelected) {
var bs=Clazz.new_($I$(1,1));
if (conformationIndex >= 0) for (var i=this.mc; --i >= 0; ) {
if (i != modelIndex && modelIndex >= 0 ) continue;
var m=this.am[i];
var bsAtoms=this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex);
if (bsSelected != null ) bsAtoms.and$javajs_util_BS(bsSelected);
if (bsAtoms.nextSetBit$I(0) < 0) continue;
if (conformationIndex >= m.altLocCount) {
if (conformationIndex == 0) bs.or$javajs_util_BS(bsAtoms);
continue;
}if (this.am[i].isBioModel && (this.am[i]).getConformation$I$Z$javajs_util_BS$javajs_util_BS(conformationIndex, doSet, bsAtoms, bs) ) continue;
var nAltLocs=this.getAltLocCountInModel$I(i);
var altLocs=this.getAltLocListInModel$I(i);
var bsTemp=Clazz.new_($I$(1,1));
for (var c=nAltLocs; --c >= 0; ) if (c != conformationIndex) bsAtoms.andNot$javajs_util_BS(this.getAtomBitsMDa$I$O$javajs_util_BS(1073742355, altLocs.substring$I$I(c, c + 1), bsTemp));

if (bsAtoms.nextSetBit$I(0) >= 0) bs.or$javajs_util_BS(bsAtoms);
}
return bs;
});

Clazz.newMeth(C$, 'getSequenceBits$S$javajs_util_BS$javajs_util_BS', function (specInfo, bsAtoms, bsResult) {
return (this.haveBioModels ? this.bioModelset.getAllSequenceBits$S$javajs_util_BS$javajs_util_BS(specInfo, bsAtoms, bsResult) : bsResult);
});

Clazz.newMeth(C$, 'getBioPolymerCountInModel$I', function (modelIndex) {
return (this.haveBioModels ? this.bioModelset.getBioPolymerCountInModel$I(modelIndex) : 0);
});

Clazz.newMeth(C$, 'getPolymerPointsAndVectors$javajs_util_BS$javajs_util_Lst$Z$F', function (bs, vList, isTraceAlpha, sheetSmoothing) {
if (this.haveBioModels) this.bioModelset.getAllPolymerPointsAndVectors$javajs_util_BS$javajs_util_Lst$Z$F(bs, vList, isTraceAlpha, sheetSmoothing);
});

Clazz.newMeth(C$, 'recalculateLeadMidpointsAndWingVectors$I', function (modelIndex) {
if (this.haveBioModels) this.bioModelset.recalculatePoints$I(modelIndex);
});

Clazz.newMeth(C$, 'calcRasmolHydrogenBonds$javajs_util_BS$javajs_util_BS$javajs_util_Lst$Z$I$Z$javajs_util_BS', function (bsA, bsB, vHBonds, nucleicOnly, nMax, dsspIgnoreHydrogens, bsHBonds) {
if (this.haveBioModels) this.bioModelset.calcAllRasmolHydrogenBonds$javajs_util_BS$javajs_util_BS$javajs_util_Lst$Z$I$Z$javajs_util_BS$I(bsA, bsB, vHBonds, nucleicOnly, nMax, dsspIgnoreHydrogens, bsHBonds, 2);
});

Clazz.newMeth(C$, 'calculateStraightnessAll$', function () {
if (this.haveBioModels && !this.haveStraightness ) this.bioModelset.calculateStraightnessAll$();
});

Clazz.newMeth(C$, 'calculateStruts$javajs_util_BS$javajs_util_BS', function (bs1, bs2) {
return (this.haveBioModels ? this.bioModelset.calculateStruts$javajs_util_BS$javajs_util_BS(bs1, bs2) : 0);
});

Clazz.newMeth(C$, 'getGroupsWithin$I$javajs_util_BS', function (nResidues, bs) {
return (this.haveBioModels ? this.bioModelset.getGroupsWithinAll$I$javajs_util_BS(nResidues, bs) : Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'getProteinStructureState$javajs_util_BS$I', function (bsAtoms, mode) {
return (this.haveBioModels ? this.bioModelset.getFullProteinStructureState$javajs_util_BS$I(bsAtoms, mode) : "");
});

Clazz.newMeth(C$, 'calculateStructures$javajs_util_BS$Z$Z$Z$Z$I', function (bsAtoms, asDSSP, doReport, dsspIgnoreHydrogen, setStructure, version) {
return (this.haveBioModels ? this.bioModelset.calculateAllStuctures$javajs_util_BS$Z$Z$Z$Z$I(bsAtoms, asDSSP, doReport, dsspIgnoreHydrogen, setStructure, version) : "");
});

Clazz.newMeth(C$, 'calculateStructuresAllExcept$javajs_util_BS$Z$Z$Z$Z$Z$I', function (alreadyDefined, asDSSP, doReport, dsspIgnoreHydrogen, setStructure, includeAlpha, version) {
this.freezeModels$();
return (this.haveBioModels ? this.bioModelset.calculateAllStructuresExcept$javajs_util_BS$Z$Z$Z$Z$Z$I(alreadyDefined, asDSSP, doReport, dsspIgnoreHydrogen, setStructure, includeAlpha, version) : "");
});

Clazz.newMeth(C$, 'recalculatePolymers$javajs_util_BS', function (bsModelsExcluded) {
this.bioModelset.recalculateAllPolymers$javajs_util_BS$org_jmol_modelset_GroupA(bsModelsExcluded, this.getGroups$());
});

Clazz.newMeth(C$, 'calculatePolymers$org_jmol_modelset_GroupA$I$I$javajs_util_BS', function (groups, groupCount, baseGroupIndex, modelsExcluded) {
if (this.bioModelset != null ) this.bioModelset.calculateAllPolymers$org_jmol_modelset_GroupA$I$I$javajs_util_BS(groups, groupCount, baseGroupIndex, modelsExcluded);
});

Clazz.newMeth(C$, 'calcSelectedMonomersCount$', function () {
if (this.haveBioModels) this.bioModelset.calcSelectedMonomersCount$();
});

Clazz.newMeth(C$, 'setProteinType$javajs_util_BS$org_jmol_c_STR', function (bs, type) {
if (this.haveBioModels) this.bioModelset.setAllProteinType$javajs_util_BS$org_jmol_c_STR(bs, type);
});

Clazz.newMeth(C$, 'setStructureList$java_util_Map', function (structureList) {
if (this.haveBioModels) this.bioModelset.setAllStructureList$java_util_Map(structureList);
});

Clazz.newMeth(C$, 'setConformation$javajs_util_BS', function (bsAtoms) {
if (this.haveBioModels) this.bioModelset.setAllConformation$javajs_util_BS(bsAtoms);
return bsAtoms;
});

Clazz.newMeth(C$, 'getHeteroList$I', function (modelIndex) {
var o=(this.haveBioModels ? this.bioModelset.getAllHeteroList$I(modelIndex) : null);
return (o == null  ? this.getInfoM$S("hetNames") : o);
});

Clazz.newMeth(C$, 'getUnitCellPointsWithin$F$javajs_util_BS$javajs_util_P3$Z', function (distance, bs, pt, asMap) {
var lst=Clazz.new_($I$(2,1));
var map=null;
var lstI=null;
if (asMap) {
map=Clazz.new_($I$(20,1));
lstI=Clazz.new_($I$(2,1));
map.put$O$O("atoms", lstI);
map.put$O$O("points", lst);
}var iAtom=(bs == null  ? -1 : bs.nextSetBit$I(0));
bs=this.vwr.getModelUndeletedAtomsBitSet$I(iAtom < 0 ? this.vwr.am.cmi : this.at[iAtom].mi);
if (iAtom < 0) iAtom=bs.nextSetBit$I(0);
if (iAtom >= 0) {
var unitCell=this.getUnitCellForAtom$I(iAtom);
if (unitCell != null ) {
var iter=unitCell.getIterator$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_AtomA$javajs_util_BS$F(this.vwr, this.at[iAtom], this.at, bs, distance);
if (pt != null ) iter.setCenter$javajs_util_T3$F(pt, distance);
while (iter.hasNext$()){
iAtom=iter.next$();
pt=iter.getPosition$();
lst.addLast$O(pt);
if (asMap) {
lstI.addLast$O(Integer.valueOf$I(iAtom));
}}
}}return (asMap ? map : lst);
});

Clazz.newMeth(C$, 'calculateDssrProperty$S', function (dataType) {
if (dataType == null ) return;
if (this.dssrData == null  || this.dssrData.length < this.ac ) this.dssrData=Clazz.array(Float.TYPE, [this.ac]);
for (var i=0; i < this.ac; i++) this.dssrData[i]=NaN;

for (var i=this.mc; --i >= 0; ) if (this.am[i].isBioModel) (this.am[i]).getAtomicDSSRData$FA$S(this.dssrData, dataType);

});

Clazz.newMeth(C$, 'getAtomicDSSRData$I', function (i) {
return (this.dssrData == null  || this.dssrData.length <= i  ? NaN : this.dssrData[i]);
});

Clazz.newMeth(C$, 'getAtomCIPChiralityCode$org_jmol_modelset_Atom', function (atom) {
this.haveChirality=true;
var m=this.am[atom.mi];
if (!m.hasChirality) {
this.calculateChiralityForAtoms$javajs_util_BS$Z(m.bsAtoms, false);
m.hasChirality=true;
}return atom.getCIPChiralityCode$();
});

Clazz.newMeth(C$, 'calculateChiralityForAtoms$javajs_util_BS$Z', function (bsAtoms, withReturn) {
this.haveChirality=true;
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) this.at[i].setCIPChirality$I(0);

$I$(11).getSymmetry$org_jmol_viewer_Viewer$S(this.vwr, "ms").calculateCIPChiralityForAtoms$org_jmol_viewer_Viewer$javajs_util_BS(this.vwr, bsAtoms);
if (!withReturn) return null;
var s="";
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) s += this.at[i].getCIPChirality$Z(false);

return s;
});

C$.$static$=function(){C$.$static$=0;
C$.hbondMinRasmol=2.5;
C$.hbondMaxReal=2.5;
};
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:13 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
