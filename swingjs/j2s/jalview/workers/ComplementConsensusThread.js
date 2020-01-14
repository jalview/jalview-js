(function(){var P$=Clazz.newPackage("jalview.workers"),I$=[[0,'java.util.Hashtable','jalview.analysis.AAFrequency']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ComplementConsensusThread", null, 'jalview.workers.ConsensusThread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel', function (alignViewport, alignPanel) {
C$.superclazz.c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel.apply(this, [alignViewport, alignPanel]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getConsensusAnnotation$', function () {
return this.alignViewport.getComplementConsensusAnnotation$();
});

Clazz.newMeth(C$, 'getViewportConsensus$', function () {
return this.alignViewport.getComplementConsensusHash$();
});

Clazz.newMeth(C$, 'computeConsensus$jalview_datamodel_AlignmentI', function (alignment) {
var hconsensus=Clazz.array($I$(1), [alignment.getWidth$()]);
for (var i=0; i < 3; i++) {
try {
$I$(2).calculateCdna$jalview_datamodel_AlignmentI$java_util_HashtableA(alignment, hconsensus);
break;
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.ConcurrentModificationException")){
} else {
throw e;
}
}
}
this.alignViewport.setComplementConsensusHash$java_util_HashtableA(hconsensus);
});

Clazz.newMeth(C$, 'deriveConsensus$jalview_datamodel_AlignmentAnnotation$java_util_HashtableA', function (consensusAnnotation, consensusData) {
$I$(2).completeCdnaConsensus$jalview_datamodel_AlignmentAnnotation$java_util_HashtableA$Z$I(consensusAnnotation, consensusData, this.alignViewport.isShowSequenceLogo$(), this.getSequences$().length);
});

Clazz.newMeth(C$, 'updateResultAnnotation$Z', function (immediate) {
var consensus=this.getConsensusAnnotation$();
var hconsensus=this.getViewportConsensus$();
if (immediate || !this.calcMan.isWorking$jalview_api_AlignCalcWorkerI(this) && consensus != null   && hconsensus != null   ) {
this.deriveConsensus$jalview_datamodel_AlignmentAnnotation$java_util_HashtableA(consensus, hconsensus);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
