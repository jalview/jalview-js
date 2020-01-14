(function(){var P$=Clazz.newPackage("jalview.workers"),I$=[[0,'Thread','jalview.datamodel.Annotation','java.util.Hashtable','jalview.analysis.StructureFrequency']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StrucConsensusThread", null, 'jalview.workers.AlignCalcWorker');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.strucConsensus=null;
this.hStrucConsensus=null;
this.nseq=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.nseq=-1;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel', function (alignViewport, alignPanel) {
C$.superclazz.c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel.apply(this, [alignViewport, alignPanel]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
if (this.calcMan.isPending$jalview_api_AlignCalcWorkerI(this)) {
return;
}this.calcMan.notifyStart$jalview_api_AlignCalcWorkerI(this);
while (!this.calcMan.notifyWorking$jalview_api_AlignCalcWorkerI(this)){
try {
if (this.ap != null ) {
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
}this.strucConsensus=this.alignViewport.getAlignmentStrucConsensusAnnotation$();
this.hStrucConsensus=this.alignViewport.getRnaStructureConsensusHash$();
this.strucConsensus.annotations=null;
this.strucConsensus.annotations=Clazz.array($I$(2), [aWidth]);
this.hStrucConsensus=Clazz.array($I$(3), [aWidth]);
var aa=this.alignViewport.getAlignment$().getAlignmentAnnotation$();
var rnaStruc=null;
if (aa != null ) {
for (var i=0; i < aa.length; i++) {
if (aa[i].visible && aa[i].isRNA$() && aa[i].isValidStruc$()  ) {
rnaStruc=aa[i];
break;
}}
}if (rnaStruc == null  || !rnaStruc.isValidStruc$() ) {
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
return;
}try {
var arr=alignment.getSequencesArray$();
this.nseq=arr.length;
$I$(4).calculate$jalview_datamodel_SequenceIA$I$I$java_util_HashtableA$Z$jalview_datamodel_AlignmentAnnotation(arr, 0, alignment.getWidth$(), this.hStrucConsensus, true, rnaStruc);
} catch (x) {
if (Clazz.exceptionOf(x,"ArrayIndexOutOfBoundsException")){
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
return;
} else {
throw x;
}
}
this.alignViewport.setRnaStructureConsensusHash$java_util_HashtableA(this.hStrucConsensus);
this.updateResultAnnotation$Z(true);
} catch (error) {
if (Clazz.exceptionOf(error,"OutOfMemoryError")){
this.calcMan.disableWorker$jalview_api_AlignCalcWorkerI(this);
this.ap.raiseOOMWarning$("calculating RNA structure consensus", error);
} else {
throw error;
}
} finally {
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
if (this.ap != null ) {
this.ap.paintAlignment$Z$Z(true, true);
}}
});

Clazz.newMeth(C$, 'updateAnnotation$', function () {
this.updateResultAnnotation$Z(false);
});

Clazz.newMeth(C$, 'updateResultAnnotation$Z', function (immediate) {
if (immediate || !this.calcMan.isWorking$jalview_api_AlignCalcWorkerI(this) && this.strucConsensus != null   && this.hStrucConsensus != null   ) {
$I$(4).completeConsensus$jalview_datamodel_AlignmentAnnotation$java_util_HashtableA$I$I$Z$Z$J(this.strucConsensus, this.hStrucConsensus, 0, this.hStrucConsensus.length, this.alignViewport.isIgnoreGapsConsensus$(), this.alignViewport.isShowSequenceLogo$(), this.nseq);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
