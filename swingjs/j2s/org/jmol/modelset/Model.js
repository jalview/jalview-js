(function(){var P$=Clazz.newPackage("org.jmol.modelset"),I$=[[0,'org.jmol.modelset.Chain','javajs.util.SB','javajs.util.BS','java.util.Hashtable','org.jmol.util.BSUtil','javajs.util.AU']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Model");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ms=null;
this.mat4=null;
this.modelIndex=0;
this.fileIndex=0;
this.isBioModel=false;
this.isPdbWithMultipleBonds=false;
this.isModelKit=false;
this.chains=null;
this.simpleCage=null;
this.dssrCache=null;
this.orientation=null;
this.auxiliaryInfo=null;
this.properties=null;
this.biosymmetry=null;
this.dataFrames=null;
this.translation=null;
this.dataSourceFrame=0;
this.loadState=null;
this.loadScript=null;
this.hasRasmolHBonds=false;
this.structureTainted=false;
this.isJmolDataFrame=false;
this.isTrajectory=false;
this.trajectoryBaseIndex=0;
this.altLocCount=0;
this.insertionCount=0;
this.act=0;
this.bondCount=0;
this.chainCount=0;
this.groupCount=0;
this.hydrogenCount=0;
this.moleculeCount=0;
this.biosymmetryCount=0;
this.firstAtomIndex=0;
this.firstMoleculeIndex=0;
this.bsAtoms=null;
this.bsAtomsDeleted=null;
this.defaultRotationRadius=0;
this.frameDelay=0;
this.selectedTrajectory=0;
this.jmolData=null;
this.jmolFrameType=null;
this.pdbID=null;
this.bsCheck=null;
this.hasChirality=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.chains=Clazz.array($I$(1), [8]);
this.dataSourceFrame=-1;
this.loadState="";
this.loadScript=Clazz.new_($I$(2));
this.act=0;
this.bondCount=-1;
this.chainCount=0;
this.groupCount=-1;
this.bsAtoms=Clazz.new_($I$(3));
this.bsAtomsDeleted=Clazz.new_($I$(3));
this.selectedTrajectory=-1;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_modelset_ModelSet$I$I$S$java_util_Properties$java_util_Map', function (modelSet, modelIndex, trajectoryBaseIndex, jmolData, properties, auxiliaryInfo) {
this.ms=modelSet;
this.dataSourceFrame=this.modelIndex=modelIndex;
this.isTrajectory=(trajectoryBaseIndex >= 0);
this.trajectoryBaseIndex=(this.isTrajectory ? trajectoryBaseIndex : modelIndex);
if (auxiliaryInfo == null ) {
auxiliaryInfo=Clazz.new_($I$(4));
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
auxiliaryInfo.put$TK$TV("jmolData", jmolData);
auxiliaryInfo.put$TK$TV("title", jmolData);
this.jmolFrameType=(jmolData.indexOf$S("ramachandran") >= 0 ? "ramachandran" : jmolData.indexOf$S("quaternion") >= 0 ? "quaternion" : "data");
}return this;
});

Clazz.newMeth(C$, 'getTrueAtomCount$', function () {
return this.bsAtoms.cardinality$() - this.bsAtomsDeleted.cardinality$();
});

Clazz.newMeth(C$, 'isContainedIn$javajs_util_BS', function (bs) {
if (this.bsCheck == null ) this.bsCheck=Clazz.new_($I$(3));
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:21 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
