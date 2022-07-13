(function(){var P$=Clazz.newPackage("org.jmol.modelset"),I$=[[0,'org.jmol.modelset.Chain','javajs.util.SB','javajs.util.BS','java.util.Hashtable','org.jmol.util.BSUtil','javajs.util.AU']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Model");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.chains=Clazz.array($I$(1), [8]);
this.dataSourceFrame=-1;
this.loadState="";
this.loadScript=Clazz.new_($I$(2,1));
this.act=0;
this.bondCount=-1;
this.chainCount=0;
this.groupCount=-1;
this.bsAtoms=Clazz.new_($I$(3,1));
this.bsAtomsDeleted=Clazz.new_($I$(3,1));
this.selectedTrajectory=-1;
},1);

C$.$fields$=[['Z',['isBioModel','isPdbWithMultipleBonds','isModelKit','hasRasmolHBonds','structureTainted','isJmolDataFrame','isTrajectory','hasChirality'],'F',['defaultRotationRadius'],'I',['modelIndex','fileIndex','dataSourceFrame','trajectoryBaseIndex','altLocCount','insertionCount','act','bondCount','chainCount','groupCount','hydrogenCount','moleculeCount','biosymmetryCount','firstAtomIndex','firstMoleculeIndex','selectedTrajectory'],'J',['frameDelay'],'S',['loadState','jmolData','jmolFrameType','pdbID'],'O',['ms','org.jmol.modelset.ModelSet','mat4','javajs.util.M4','chains','org.jmol.modelset.Chain[]','simpleCage','org.jmol.api.SymmetryInterface','dssrCache','java.util.Map','orientation','org.jmol.modelset.Orientation','auxiliaryInfo','java.util.Map','properties','java.util.Properties','biosymmetry','org.jmol.api.SymmetryInterface','dataFrames','java.util.Map','translation','javajs.util.P3','loadScript','javajs.util.SB','bsAtoms','javajs.util.BS','+bsAtomsDeleted','+bsCheck']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_modelset_ModelSet$I$I$S$java_util_Properties$java_util_Map', function (modelSet, modelIndex, trajectoryBaseIndex, jmolData, properties, auxiliaryInfo) {
this.ms=modelSet;
this.dataSourceFrame=this.modelIndex=modelIndex;
this.isTrajectory=(trajectoryBaseIndex >= 0);
this.trajectoryBaseIndex=(this.isTrajectory ? trajectoryBaseIndex : modelIndex);
if (auxiliaryInfo == null ) {
auxiliaryInfo=Clazz.new_($I$(4,1));
}this.auxiliaryInfo=auxiliaryInfo;
if (auxiliaryInfo.containsKey$O("biosymmetryCount")) {
this.biosymmetryCount=(auxiliaryInfo.get$O("biosymmetryCount")).intValue$();
this.biosymmetry=auxiliaryInfo.get$O("biosymmetry");
}this.properties=properties;
if (jmolData == null ) {
this.jmolFrameType="modelSet";
} else {
this.jmolData=jmolData;
this.isJmolDataFrame=true;
auxiliaryInfo.put$O$O("jmolData", jmolData);
auxiliaryInfo.put$O$O("title", jmolData);
this.jmolFrameType=(jmolData.indexOf$S("ramachandran") >= 0 ? "ramachandran" : jmolData.indexOf$S("quaternion") >= 0 ? "quaternion" : "data");
}return this;
});

Clazz.newMeth(C$, 'getTrueAtomCount$', function () {
return this.bsAtoms.cardinality$() - this.bsAtomsDeleted.cardinality$();
});

Clazz.newMeth(C$, 'isContainedIn$javajs_util_BS', function (bs) {
if (this.bsCheck == null ) this.bsCheck=Clazz.new_($I$(3,1));
this.bsCheck.or$javajs_util_BS(bs);
this.bsCheck.and$javajs_util_BS(this.bsAtoms);
this.bsCheck.andNot$javajs_util_BS(this.bsAtomsDeleted);
return (this.bsCheck.cardinality$() == this.getTrueAtomCount$());
});

Clazz.newMeth(C$, 'resetBoundCount$', function () {
this.bondCount=-1;
});

Clazz.newMeth(C$, 'getBondCount$', function () {
if (this.bondCount >= 0) return this.bondCount;
var bonds=this.ms.bo;
this.bondCount=0;
for (var i=this.ms.bondCount; --i >= 0; ) if (bonds[i].atom1.mi == this.modelIndex) this.bondCount++;

return this.bondCount;
});

Clazz.newMeth(C$, 'getChainCount$Z', function (countWater) {
if (this.chainCount > 1 && !countWater ) for (var i=0; i < this.chainCount; i++) if (this.chains[i].chainID == 0 ) return this.chainCount - 1;

return this.chainCount;
});

Clazz.newMeth(C$, 'calcSelectedGroupsCount$javajs_util_BS', function (bsSelected) {
for (var i=this.chainCount; --i >= 0; ) this.chains[i].calcSelectedGroupsCount$javajs_util_BS(bsSelected);

});

Clazz.newMeth(C$, 'getGroupCount$', function () {
if (this.groupCount < 0) {
this.groupCount=0;
for (var i=this.chainCount; --i >= 0; ) this.groupCount+=this.chains[i].groupCount;

}return this.groupCount;
});

Clazz.newMeth(C$, 'getChainAt$I', function (i) {
return (i < this.chainCount ? this.chains[i] : null);
});

Clazz.newMeth(C$, 'getChain$I', function (chainID) {
for (var i=this.chainCount; --i >= 0; ) {
var chain=this.chains[i];
if (chain.chainID == chainID) return chain;
}
return null;
});

Clazz.newMeth(C$, 'resetDSSR$Z', function (totally) {
this.dssrCache=null;
if (totally) this.auxiliaryInfo.remove$O("dssr");
});

Clazz.newMeth(C$, 'fixIndices$I$I$javajs_util_BS', function (modelIndex, nAtomsDeleted, bsDeleted) {
this.fixIndicesM$I$I$javajs_util_BS(modelIndex, nAtomsDeleted, bsDeleted);
});

Clazz.newMeth(C$, 'fixIndicesM$I$I$javajs_util_BS', function (modelIndex, nAtomsDeleted, bsDeleted) {
if (this.dataSourceFrame > modelIndex) this.dataSourceFrame--;
if (this.trajectoryBaseIndex > modelIndex) this.trajectoryBaseIndex--;
this.firstAtomIndex-=nAtomsDeleted;
for (var i=0; i < this.chainCount; i++) this.chains[i].fixIndices$I$javajs_util_BS(nAtomsDeleted, bsDeleted);

$I$(5).deleteBits$javajs_util_BS$javajs_util_BS(this.bsAtoms, bsDeleted);
$I$(5).deleteBits$javajs_util_BS$javajs_util_BS(this.bsAtomsDeleted, bsDeleted);
});

Clazz.newMeth(C$, 'freeze$', function () {
this.freezeM$();
return false;
});

Clazz.newMeth(C$, 'freezeM$', function () {
for (var i=0; i < this.chainCount; i++) if (this.chains[i].groupCount == 0) {
for (var j=i + 1; j < this.chainCount; j++) this.chains[j - 1]=this.chains[j];

this.chainCount--;
}
this.chains=$I$(6).arrayCopyObject$O$I(this.chains, this.chainCount);
this.groupCount=-1;
this.getGroupCount$();
for (var i=0; i < this.chainCount; ++i) this.chains[i].groups=$I$(6).arrayCopyObject$O$I(this.chains[i].groups, this.chains[i].groupCount);

});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:38 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
