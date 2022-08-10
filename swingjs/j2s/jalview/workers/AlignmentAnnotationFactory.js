(function(){var P$=Clazz.newPackage("jalview.workers"),I$=[[0,'jalview.bin.Jalview','jalview.workers.ColumnCounterSetWorker','jalview.workers.AnnotationWorker','jalview.datamodel.Annotation','jalview.datamodel.AlignmentAnnotation']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignmentAnnotationFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newCalculator$jalview_workers_FeatureSetCounterI',  function (counter) {
var currentAlignFrame=$I$(1).getCurrentAlignFrame$().alignPanel;
if (currentAlignFrame == null ) {
System.err.println$S("Can\'t register calculator as no alignment window has focus");
return;
}Clazz.new_([currentAlignFrame.getAlignViewport$(), currentAlignFrame, counter],$I$(2,1).c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel$jalview_workers_FeatureSetCounterI);
}, 1);

Clazz.newMeth(C$, 'newCalculator$jalview_workers_AnnotationProviderI',  function (calculator) {
var currentAlignFrame=$I$(1).getCurrentAlignFrame$();
if (currentAlignFrame != null ) {
Clazz.new_([currentAlignFrame.getViewport$(), currentAlignFrame.getAlignPanels$().get$I(0), calculator],$I$(3,1).c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel$jalview_workers_AnnotationProviderI);
} else {
System.err.println$S("Can\'t register calculator as no alignment window has focus");
}}, 1);

Clazz.newMeth(C$, 'newCalculator$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel$jalview_workers_AnnotationProviderI',  function (viewport, panel, calculator) {
Clazz.new_($I$(3,1).c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel$jalview_workers_AnnotationProviderI,[viewport, panel, calculator]);
}, 1);

Clazz.newMeth(C$, 'newAnnotation$S$S$C$F$java_awt_Color',  function (displayChar, desc, secondaryStructure, val, color) {
return Clazz.new_($I$(4,1).c$$S$S$C$F$java_awt_Color,[displayChar, desc, secondaryStructure, val, color]);
}, 1);

Clazz.newMeth(C$, 'newAlignmentAnnotation$S$S$jalview_datamodel_AnnotationA',  function (name, desc, anns) {
return Clazz.new_($I$(5,1).c$$S$S$jalview_datamodel_AnnotationA,[name, desc, anns]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
