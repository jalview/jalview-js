(function(){var P$=Clazz.newPackage("jalview.workers"),I$=[[0,'java.util.ArrayList','Thread','jalview.renderer.seqfeatures.FeatureRenderer','java.awt.Color','jalview.datamodel.Annotation','jalview.util.ColorUtils','jalview.util.Comparison']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ColumnCounterSetWorker", null, 'jalview.workers.AlignCalcWorker');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.counter=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel$jalview_workers_FeatureSetCounterI', function (viewport, panel, counter) {
C$.superclazz.c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel.apply(this, [viewport, panel]);
C$.$init$.apply(this);
this.ourAnnots=Clazz.new_($I$(1));
this.counter=counter;
this.calcMan.registerWorker$jalview_api_AlignCalcWorkerI(this);
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var annotationAdded=false;
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
}if (this.alignViewport.getAlignment$() != null ) {
try {
annotationAdded=this.computeAnnotations$();
} catch (x) {
if (Clazz.exceptionOf(x,"IndexOutOfBoundsException")){
return;
} else {
throw x;
}
}
}} catch (error) {
if (Clazz.exceptionOf(error,"OutOfMemoryError")){
this.ap.raiseOOMWarning$("calculating feature counts", error);
this.calcMan.disableWorker$jalview_api_AlignCalcWorkerI(this);
} else {
throw error;
}
} finally {
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
}
if (this.ap != null ) {
if (annotationAdded) {
this.ap.adjustAnnotationHeight$();
}this.ap.paintAlignment$Z$Z(true, true);
}});

Clazz.newMeth(C$, 'computeAnnotations$', function () {
var fr=Clazz.new_($I$(3).c$$jalview_api_AlignViewportI,[this.alignViewport]);
var alignment=this.alignViewport.getAlignment$();
var rows=this.counter.getNames$().length;
var width=alignment.getWidth$();
var height=alignment.getHeight$();
var counts=Clazz.array(Integer.TYPE, [width, rows]);
var max=Clazz.array(Integer.TYPE, [rows]);
for (var crow=0; crow < rows; crow++) {
max[crow]=0;
}
var minC=this.counter.getMinColour$();
var maxC=this.counter.getMaxColour$();
var minColour=Clazz.new_($I$(4).c$$I$I$I,[minC[0], minC[1], minC[2]]);
var maxColour=Clazz.new_($I$(4).c$$I$I$I,[maxC[0], maxC[1], maxC[2]]);
for (var col=0; col < width; col++) {
var count=counts[col];
for (var crow=0; crow < rows; crow++) {
count[crow]=0;
}
for (var row=0; row < height; row++) {
var colcount=this.countFeaturesAt$jalview_datamodel_AlignmentI$I$I$jalview_renderer_seqfeatures_FeatureRenderer(alignment, col, row, fr);
if (colcount != null ) {
for (var crow=0; crow < rows; crow++) {
count[crow]+=colcount[crow];
}
}}
counts[col]=count;
for (var crow=0; crow < rows; crow++) {
max[crow]=Math.max(count[crow], max[crow]);
}
}
var annotationAdded=false;
for (var anrow=0; anrow < rows; anrow++) {
var anns=Clazz.array($I$(5), [width]);
var rmax=0;
for (var i=0; i < counts.length; i++) {
var count=counts[i][anrow];
var color=$I$(6).getGraduatedColour$F$F$java_awt_Color$F$java_awt_Color(count, 0, minColour, max[anrow], maxColour);
var str=String.valueOf$I(count);
anns[i]=Clazz.new_($I$(5).c$$S$S$C$F$java_awt_Color,[str, str, "0", count, color]);
rmax=Math.max(count, rmax);
}
var description=this.counter.getDescriptions$()[anrow];
if (!alignment.findAnnotation$S(description).iterator$().hasNext$()) {
annotationAdded=true;
}var ann=alignment.findOrCreateAnnotation$S$S$Z$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup(this.counter.getNames$()[anrow], description, false, null, null);
ann.description=description;
ann.showAllColLabels=true;
ann.scaleColLabel=true;
ann.graph=1;
ann.annotations=anns;
ann.graphMin=0.0;
ann.graphMax=rmax;
ann.validateRangeAndDisplay$();
if (!this.ourAnnots.contains$O(ann)) {
this.ourAnnots.add$TE(ann);
}}
return annotationAdded;
});

Clazz.newMeth(C$, 'countFeaturesAt$jalview_datamodel_AlignmentI$I$I$jalview_renderer_seqfeatures_FeatureRenderer', function (alignment, col, row, fr) {
var seq=alignment.getSequenceAt$I(row);
if (seq == null ) {
return null;
}if (col >= seq.getLength$()) {
return null;
}var res=seq.getCharAt$I(col);
if ($I$(7).isGap$C(res)) {
return null;
}var features=fr.findFeaturesAtColumn$jalview_datamodel_SequenceI$I(seq, col + 1);
var count=this.counter.count$S$java_util_List(String.valueOf$C(res), features);
return count;
});

Clazz.newMeth(C$, 'updateAnnotation$', function () {
});

Clazz.newMeth(C$, 'isDeletable$', function () {
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
