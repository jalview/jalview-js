(function(){var P$=Clazz.newPackage("jalview.workers"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AlignCalcWorker", null, null, 'jalview.api.AlignCalcWorkerI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['alignViewport','jalview.api.AlignViewportI','calcMan','jalview.api.AlignCalcManagerI','ap','jalview.api.AlignmentViewPanel','ourAnnots','java.util.List']]]

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel',  function (alignViewport, alignPanel) {
;C$.$init$.apply(this);
this.alignViewport=alignViewport;
this.calcMan=alignViewport.getCalcManager$();
this.ap=alignPanel;
}, 1);

Clazz.newMeth(C$, 'abortAndDestroy$',  function () {
if (this.calcMan != null ) {
this.calcMan.workerComplete$jalview_api_AlignCalcWorkerI(this);
}this.alignViewport=null;
this.calcMan=null;
this.ap=null;
});

Clazz.newMeth(C$, 'involves$jalview_datamodel_AlignmentAnnotation',  function (i) {
return this.ourAnnots != null  && this.ourAnnots.contains$O(i) ;
});

Clazz.newMeth(C$, 'removeAnnotation$',  function () {
if (this.ourAnnots != null  && this.alignViewport != null  ) {
var alignment=this.alignViewport.getAlignment$();
{
for (var aa, $aa = this.ourAnnots.iterator$(); $aa.hasNext$()&&((aa=($aa.next$())),1);) {
alignment.deleteAnnotation$jalview_datamodel_AlignmentAnnotation$Z(aa, true);
}
}this.ourAnnots.clear$();
}});

Clazz.newMeth(C$, 'isDeletable$',  function () {
return false;
});

Clazz.newMeth(C$, 'setGraphMinMax$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AnnotationA',  function (ann, anns) {
var max=1.4E-45;
var min=3.4028235E38;
var set=false;
for (var a, $a = 0, $$a = anns; $a<$$a.length&&((a=($$a[$a])),1);$a++) {
if (a != null ) {
set=true;
var val=a.value;
max=Math.max(max, val);
min=Math.min(min, val);
}}
if (set) {
ann.graphMin=min;
ann.graphMax=max;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
