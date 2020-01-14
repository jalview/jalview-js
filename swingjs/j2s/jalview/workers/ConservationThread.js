(function(){var P$=Clazz.newPackage("jalview.workers"),p$1={},I$=[[0,'Thread','java.util.ArrayList','jalview.analysis.Conservation']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ConservationThread", null, 'jalview.workers.AlignCalcWorker');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ConsPercGaps=0;
this.cons=null;
this.conservation=null;
this.quality=null;
this.alWidth=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.ConsPercGaps=25;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel', function (alignViewport, alignPanel) {
C$.superclazz.c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel.apply(this, [alignViewport, alignPanel]);
C$.$init$.apply(this);
this.ConsPercGaps=alignViewport.getConsPercGaps$();
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.calcMan.notifyStart$jalview_api_AlignCalcWorkerI(this);
while ((this.calcMan != null ) && (!this.calcMan.notifyWorking$jalview_api_AlignCalcWorkerI(this)) ){
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
if ((this.alignViewport == null ) || (this.calcMan == null ) || (this.alignViewport.isClosed$())  ) {
this.abortAndDestroy$();
return;
}var ourAnnot=Clazz.new_($I$(2));
var alignment=this.alignViewport.getAlignment$();
this.conservation=this.alignViewport.getAlignmentConservationAnnotation$();
this.quality=this.alignViewport.getAlignmentQualityAnnot$();
ourAnnot.add$TE(this.conservation);
ourAnnot.add$TE(this.quality);
this.ourAnnots=ourAnnot;
this.ConsPercGaps=this.alignViewport.getConsPercGaps$();
if (alignment == null  || (this.alWidth=alignment.getWidth$()) < 0 ) {
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
return;
}try {
this.cons=$I$(3).calculateConservation$S$java_util_List$I$I$Z$I$Z("All", alignment.getSequences$(), 0, this.alWidth - 1, false, this.ConsPercGaps, this.quality != null );
} catch (x) {
if (Clazz.exceptionOf(x,"IndexOutOfBoundsException")){
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
return;
} else {
throw x;
}
}
p$1.updateResultAnnotation$Z.apply(this, [true]);
} catch (error) {
if (Clazz.exceptionOf(error,"OutOfMemoryError")){
this.ap.raiseOOMWarning$("calculating conservation", error);
this.calcMan.disableWorker$jalview_api_AlignCalcWorkerI(this);
} else {
throw error;
}
}
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
if ((this.alignViewport == null ) || (this.calcMan == null ) || (this.alignViewport.isClosed$())  ) {
this.abortAndDestroy$();
return;
}if (this.ap != null ) {
this.ap.paintAlignment$Z$Z(true, true);
}});

Clazz.newMeth(C$, 'updateResultAnnotation$Z', function (b) {
if (b || !this.calcMan.isWorking$jalview_api_AlignCalcWorkerI(this) && this.cons != null   && this.conservation != null   && this.quality != null   ) {
this.alignViewport.setConservation$jalview_analysis_Conservation(this.cons);
this.cons.completeAnnotations$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotation$I$I(this.conservation, this.quality, 0, this.alWidth);
}}, p$1);

Clazz.newMeth(C$, 'updateAnnotation$', function () {
p$1.updateResultAnnotation$Z.apply(this, [false]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
