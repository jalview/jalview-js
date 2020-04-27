(function(){var P$=Clazz.newPackage("jalview.workers"),I$=[[0,'Thread','jalview.datamodel.Annotation','jalview.analysis.AAFrequency']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ConsensusThread", null, 'jalview.workers.AlignCalcWorker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel', function (alignViewport, alignPanel) {
;C$.superclazz.c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel.apply(this,[alignViewport, alignPanel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if (this.calcMan.isPending$jalview_api_AlignCalcWorkerI(this)) {
return;
}this.calcMan.notifyStart$jalview_api_AlignCalcWorkerI(this);
try {
var consensus=this.getConsensusAnnotation$();
var gap=this.getGapAnnotation$();
if ((consensus == null  && gap == null  ) || this.calcMan.isPending$jalview_api_AlignCalcWorkerI(this) ) {
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
return;
}while (!this.calcMan.notifyWorking$jalview_api_AlignCalcWorkerI(this)){
try {
if (this.ap != null ) {
this.ap.paintAlignment$Z$Z(false, false);
}$I$(1).sleep$J(200);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}
if (this.alignViewport.isClosed$()) {
this.abortAndDestroy$();
return;
}var alignment=this.alignViewport.getAlignment$();
var aWidth=-1;
if (alignment == null  || (aWidth=alignment.getWidth$()) < 0 ) {
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
return;
}this.eraseConsensus$I(aWidth);
this.computeConsensus$jalview_datamodel_AlignmentI(alignment);
this.updateResultAnnotation$Z(true);
if (this.ap != null ) {
this.ap.paintAlignment$Z$Z(true, true);
}} catch (error) {
if (Clazz.exceptionOf(error,"OutOfMemoryError")){
this.calcMan.disableWorker$jalview_api_AlignCalcWorkerI(this);
this.ap.raiseOOMWarning$S$OutOfMemoryError("calculating consensus", error);
} else {
throw error;
}
} finally {
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
}
});

Clazz.newMeth(C$, 'eraseConsensus$I', function (aWidth) {
var consensus=this.getConsensusAnnotation$();
if (consensus != null ) {
consensus.annotations=Clazz.array($I$(2), [aWidth]);
}var gap=this.getGapAnnotation$();
if (gap != null ) {
gap.annotations=Clazz.array($I$(2), [aWidth]);
}});

Clazz.newMeth(C$, 'computeConsensus$jalview_datamodel_AlignmentI', function (alignment) {
var aseqs=this.getSequences$();
var width=alignment.getWidth$();
var hconsensus=$I$(3).calculate$jalview_datamodel_SequenceIA$I$I$I$Z(aseqs, width, 0, width, true);
this.alignViewport.setSequenceConsensusHash$jalview_datamodel_ProfilesI(hconsensus);
this.setColourSchemeConsensus$jalview_datamodel_ProfilesI(hconsensus);
});

Clazz.newMeth(C$, 'getSequences$', function () {
return this.alignViewport.getAlignment$().getSequencesArray$();
});

Clazz.newMeth(C$, 'setColourSchemeConsensus$jalview_datamodel_ProfilesI', function (hconsensus) {
var cs=this.alignViewport.getResidueShading$();
if (cs != null ) {
cs.setConsensus$jalview_datamodel_ProfilesI(hconsensus);
}});

Clazz.newMeth(C$, 'getConsensusAnnotation$', function () {
return this.alignViewport.getAlignmentConsensusAnnotation$();
});

Clazz.newMeth(C$, 'getGapAnnotation$', function () {
return this.alignViewport.getAlignmentGapAnnotation$();
});

Clazz.newMeth(C$, 'updateAnnotation$', function () {
this.updateResultAnnotation$Z(false);
});

Clazz.newMeth(C$, 'updateResultAnnotation$Z', function (immediate) {
var consensus=this.getConsensusAnnotation$();
var hconsensus=this.getViewportConsensus$();
if (immediate || !this.calcMan.isWorking$jalview_api_AlignCalcWorkerI(this) && consensus != null   && hconsensus != null   ) {
this.deriveConsensus$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_ProfilesI(consensus, hconsensus);
var gap=this.getGapAnnotation$();
if (gap != null ) {
this.deriveGap$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_ProfilesI(gap, hconsensus);
}}});

Clazz.newMeth(C$, 'deriveConsensus$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_ProfilesI', function (consensusAnnotation, hconsensus) {
var nseq=this.getSequences$().length;
$I$(3,"completeConsensus$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_ProfilesI$I$I$Z$Z$J",[consensusAnnotation, hconsensus, hconsensus.getStartColumn$(), hconsensus.getEndColumn$() + 1, this.alignViewport.isIgnoreGapsConsensus$(), this.alignViewport.isShowSequenceLogo$(), nseq]);
});

Clazz.newMeth(C$, 'deriveGap$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_ProfilesI', function (gapAnnotation, hconsensus) {
var nseq=this.getSequences$().length;
$I$(3,"completeGapAnnot$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_ProfilesI$I$I$J",[gapAnnotation, hconsensus, hconsensus.getStartColumn$(), hconsensus.getEndColumn$() + 1, nseq]);
});

Clazz.newMeth(C$, 'getViewportConsensus$', function () {
return this.alignViewport.getSequenceConsensusHash$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
