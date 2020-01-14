(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),I$=[[0,'org.jmol.c.STR']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Structure");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.structureType=null;
this.substructureType=null;
this.structureID=null;
this.serialID=0;
this.strandCount=0;
this.startSequenceNumber=0;
this.startChainID=0;
this.startChainStr=null;
this.startInsertionCode='\0';
this.endSequenceNumber=0;
this.endChainID=0;
this.endChainStr=null;
this.endInsertionCode='\0';
this.atomStartEnd=null;
this.modelStartEnd=null;
this.bsAll=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.startInsertionCode="\u0000";
this.endInsertionCode="\u0000";
this.atomStartEnd=Clazz.array(Integer.TYPE, [2]);
this.modelStartEnd=Clazz.array(Integer.TYPE, -1, [-1, -1]);
}, 1);

Clazz.newMeth(C$, 'getHelixType$I', function (type) {
switch (type) {
case 1:
return $I$(1).HELIXALPHA;
case 3:
return $I$(1).HELIXPI;
case 5:
return $I$(1).HELIX310;
}
return $I$(1).HELIX;
}, 1);

Clazz.newMeth(C$, 'c$$I$org_jmol_c_STR$org_jmol_c_STR$S$I$I$javajs_util_BSA', function (modelIndex, structureType, substructureType, structureID, serialID, strandCount, bsAll) {
C$.$init$.apply(this);
if (bsAll != null ) {
this.modelStartEnd=Clazz.array(Integer.TYPE, -1, [0, modelIndex]);
this.bsAll=bsAll;
return;
}this.structureType=structureType;
this.substructureType=substructureType;
if (structureID == null ) return;
this.modelStartEnd[0]=this.modelStartEnd[1]=modelIndex;
this.structureID=structureID;
this.strandCount=strandCount;
this.serialID=serialID;
}, 1);

Clazz.newMeth(C$, 'set$I$I$C$I$I$C$I$I', function (startChainID, startSequenceNumber, startInsertionCode, endChainID, endSequenceNumber, endInsertionCode, istart, iend) {
this.startChainID=startChainID;
this.startSequenceNumber=startSequenceNumber;
this.startInsertionCode=startInsertionCode;
this.endChainID=endChainID;
this.endSequenceNumber=endSequenceNumber;
this.endInsertionCode=endInsertionCode;
this.atomStartEnd[0]=istart;
this.atomStartEnd[1]=iend;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
