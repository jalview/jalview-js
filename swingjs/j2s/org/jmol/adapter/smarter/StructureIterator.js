(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),I$=[[0,'org.jmol.api.JmolAdapter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructureIterator", null, 'org.jmol.api.JmolAdapterStructureIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['structureCount','istructure'],'O',['structures','org.jmol.adapter.smarter.Structure[]','structure','org.jmol.adapter.smarter.Structure','bsModelsDefined','javajs.util.BS']]]

Clazz.newMeth(C$, 'c$$org_jmol_adapter_smarter_AtomSetCollection', function (asc) {
Clazz.super_(C$, this);
this.structureCount=asc.structureCount;
this.structures=asc.structures;
this.istructure=0;
this.bsModelsDefined=asc.bsStructuredModels;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
if (this.istructure == this.structureCount) return false;
this.structure=this.structures[this.istructure++];
return true;
});

Clazz.newMeth(C$, 'getStructureType$', function () {
return this.structure.structureType;
});

Clazz.newMeth(C$, 'getSubstructureType$', function () {
return this.structure.substructureType;
});

Clazz.newMeth(C$, 'getStructureID$', function () {
return this.structure.structureID;
});

Clazz.newMeth(C$, 'getSerialID$', function () {
return this.structure.serialID;
});

Clazz.newMeth(C$, 'getStartChainID$', function () {
return this.structure.startChainID;
});

Clazz.newMeth(C$, 'getStartSequenceNumber$', function () {
return this.structure.startSequenceNumber;
});

Clazz.newMeth(C$, 'getStartInsertionCode$', function () {
return $I$(1).canonizeInsertionCode$C(this.structure.startInsertionCode);
});

Clazz.newMeth(C$, 'getEndChainID$', function () {
return this.structure.endChainID;
});

Clazz.newMeth(C$, 'getEndSequenceNumber$', function () {
return this.structure.endSequenceNumber;
});

Clazz.newMeth(C$, 'getEndInsertionCode$', function () {
return this.structure.endInsertionCode;
});

Clazz.newMeth(C$, 'getStrandCount$', function () {
return this.structure.strandCount;
});

Clazz.newMeth(C$, 'getStructuredModels$', function () {
return this.bsModelsDefined;
});

Clazz.newMeth(C$, 'getAtomIndices$', function () {
return this.structure.atomStartEnd;
});

Clazz.newMeth(C$, 'getModelIndices$', function () {
return this.structure.modelStartEnd;
});

Clazz.newMeth(C$, 'getBSAll$', function () {
return this.structure.bsAll;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
