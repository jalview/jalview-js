(function(){var P$=Clazz.newPackage("jalview.workers"),I$=[[0,'java.util.ArrayList','Thread','jalview.renderer.seqfeatures.FeatureRenderer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AnnotationWorker", null, 'jalview.workers.AlignCalcWorker');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.counter=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel$jalview_workers_AnnotationProviderI', function (viewport, panel, counter) {
C$.superclazz.c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel.apply(this, [viewport, panel]);
C$.$init$.apply(this);
this.ourAnnots=Clazz.new_($I$(1));
this.counter=counter;
this.calcMan.registerWorker$jalview_api_AlignCalcWorkerI(this);
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.calcMan.notifyStart$jalview_api_AlignCalcWorkerI(this);
while (!this.calcMan.notifyWorking$jalview_api_AlignCalcWorkerI(this)){
try {
$I$(2).sleep$J(200);
} catch (ex) {
if (Clazz.exceptionOf(ex,"InterruptedException")){
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
if (alignment != null ) {
try {
var anns=this.counter.calculateAnnotation$(alignment, Clazz.new_($I$(3).c$$jalview_api_AlignViewportI,[this.alignViewport]));
for (var ann, $ann = anns.iterator$(); $ann.hasNext$()&&((ann=($ann.next$())),1);) {
var theAnn=alignment.findOrCreateAnnotation$S$S$Z$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup(ann.label, ann.description, false, null, null);
theAnn.showAllColLabels=true;
theAnn.graph=1;
theAnn.scaleColLabel=true;
theAnn.annotations=ann.annotations;
this.setGraphMinMax$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AnnotationA(theAnn, theAnn.annotations);
theAnn.validateRangeAndDisplay$();
if (!this.ourAnnots.contains$O(theAnn)) {
this.ourAnnots.add$TE(theAnn);
}}
} catch (x) {
if (Clazz.exceptionOf(x,"IndexOutOfBoundsException")){
return;
} else {
throw x;
}
}
}} catch (error) {
if (Clazz.exceptionOf(error,"OutOfMemoryError")){
this.ap.raiseOOMWarning$("calculating annotations", error);
this.calcMan.disableWorker$jalview_api_AlignCalcWorkerI(this);
} else {
throw error;
}
} finally {
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
}
if (this.ap != null ) {
this.ap.adjustAnnotationHeight$();
this.ap.paintAlignment$Z$Z(true, true);
}});

Clazz.newMeth(C$, 'updateAnnotation$', function () {
});

Clazz.newMeth(C$, 'isDeletable$', function () {
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
