(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AlignmentAnnotationPojo");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.label=null;
this.description=null;
this.annotations=null;
this.graphType=0;
this.sequenceRef=null;
this.annotationSettings=null;
this.score=0;
this.calcId=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.annotations=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getLabel$', function () {
return this.label;
});

Clazz.newMeth(C$, 'setLabel$S', function (label) {
this.label=label;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (annotationId) {
this.description=annotationId;
});

Clazz.newMeth(C$, 'getAnnotations$', function () {
return this.annotations;
});

Clazz.newMeth(C$, 'setAnnotations$java_util_List', function (annotations) {
this.annotations=annotations;
});

Clazz.newMeth(C$, 'getSequenceRef$', function () {
return this.sequenceRef;
});

Clazz.newMeth(C$, 'setSequenceRef$S', function (sequenceRef) {
this.sequenceRef=sequenceRef;
});

Clazz.newMeth(C$, 'getGraphType$', function () {
return this.graphType;
});

Clazz.newMeth(C$, 'setGraphType$I', function (graphType) {
this.graphType=graphType;
});

Clazz.newMeth(C$, 'getAnnotationSettings$', function () {
return this.annotationSettings;
});

Clazz.newMeth(C$, 'setAnnotationSettings$jalview_json_binding_biojson_v1_AnnotationDisplaySettingPojo', function (annotationSettings) {
this.annotationSettings=annotationSettings;
});

Clazz.newMeth(C$, 'getScore$', function () {
return this.score;
});

Clazz.newMeth(C$, 'setScore$D', function (score) {
this.score=score;
});

Clazz.newMeth(C$, 'getCalcId$', function () {
return this.calcId;
});

Clazz.newMeth(C$, 'setCalcId$S', function (calcId) {
this.calcId=calcId;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
