(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),I$=[[0,'org.jmol.c.STR']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Structure");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.startInsertionCode="\u0000";
this.endInsertionCode="\u0000";
this.atomStartEnd=Clazz.array(Integer.TYPE, [2]);
this.modelStartEnd=Clazz.array(Integer.TYPE, -1, [-1, -1]);
},1);

C$.$fields$=[['C',['startInsertionCode','endInsertionCode'],'I',['serialID','strandCount','startSequenceNumber','startChainID','endSequenceNumber','endChainID'],'S',['structureID','startChainStr','endChainStr'],'O',['structureType','org.jmol.c.STR','+substructureType','atomStartEnd','int[]','+modelStartEnd','bsAll','javajs.util.BS[]']]]

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
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:29 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
