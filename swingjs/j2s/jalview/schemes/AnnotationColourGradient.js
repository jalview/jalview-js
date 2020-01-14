(function(){var P$=Clazz.newPackage("jalview.schemes"),p$1={},I$=[[0,'jalview.datamodel.GraphLine','jalview.schemes.ColourSchemeProperty','java.util.IdentityHashMap','java.awt.Color','jalview.util.Comparison','jalview.renderer.AnnotationRenderer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AnnotationColourGradient", null, 'jalview.schemes.FollowerColourScheme');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.annotation=null;
this.aboveAnnotationThreshold=0;
this.thresholdIsMinMax=false;
this.annotationThreshold=null;
this.redMin=0;
this.greenMin=0;
this.blueMin=0;
this.redRange=0;
this.greenRange=0;
this.blueRange=0;
this.predefinedColours=false;
this.seqAssociated=false;
this.noGradient=false;
this.seqannot=null;
this.aamin=0;
this.aamax=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.thresholdIsMinMax=false;
this.predefinedColours=false;
this.seqAssociated=false;
this.noGradient=false;
this.seqannot=null;
this.aamin=0.0;
this.aamax=0.0;
}, 1);

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI', function (view, sg) {
var acg=Clazz.new_(C$.c$$jalview_datamodel_AlignmentAnnotation$jalview_schemes_ColourSchemeI$I,[this.annotation, this.getColourScheme$(), this.aboveAnnotationThreshold]);
acg.thresholdIsMinMax=this.thresholdIsMinMax;
acg.annotationThreshold=(this.annotationThreshold == null ) ? null : Clazz.new_($I$(1).c$$jalview_datamodel_GraphLine,[this.annotationThreshold]);
acg.redMin=this.redMin;
acg.greenMin=this.greenMin;
acg.blueMin=this.blueMin;
acg.redRange=this.redRange;
acg.greenRange=this.greenRange;
acg.blueRange=this.blueRange;
acg.predefinedColours=this.predefinedColours;
acg.seqAssociated=this.seqAssociated;
acg.noGradient=this.noGradient;
return acg;
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentAnnotation$jalview_schemes_ColourSchemeI$I', function (annotation, originalColour, aboveThreshold) {
Clazz.super_(C$, this,1);
if (Clazz.instanceOf(originalColour, "jalview.schemes.AnnotationColourGradient")) {
this.setColourScheme$jalview_schemes_ColourSchemeI((originalColour).getColourScheme$());
} else {
this.setColourScheme$jalview_schemes_ColourSchemeI(originalColour);
}this.annotation=annotation;
this.aboveAnnotationThreshold=aboveThreshold;
if (aboveThreshold != -1 && annotation.threshold != null  ) {
this.annotationThreshold=annotation.threshold;
}this.redMin=254;
this.greenMin=254;
this.blueMin=254;
this.redRange=0;
this.greenRange=0;
this.blueRange=0;
this.noGradient=true;
p$1.checkLimits.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentAnnotation$java_awt_Color$java_awt_Color$I', function (annotation, minColour, maxColour, aboveThreshold) {
Clazz.super_(C$, this,1);
this.annotation=annotation;
this.aboveAnnotationThreshold=aboveThreshold;
if (aboveThreshold != -1 && annotation.threshold != null  ) {
this.annotationThreshold=annotation.threshold;
}this.redMin=minColour.getRed$();
this.greenMin=minColour.getGreen$();
this.blueMin=minColour.getBlue$();
this.redRange=maxColour.getRed$() - this.redMin;
this.greenRange=maxColour.getGreen$() - this.greenMin;
this.blueRange=maxColour.getBlue$() - this.blueMin;
this.noGradient=false;
p$1.checkLimits.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'checkLimits', function () {
this.aamax=this.annotation.graphMax;
this.aamin=this.annotation.graphMin;
if (this.annotation.isRNA$()) {
$I$(2).resetRnaHelicesShading$();
$I$(2).initRnaHelicesShading$I(1 + (this.aamax|0));
}}, p$1);

Clazz.newMeth(C$, 'alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map', function (alignment, hiddenReps) {
C$.superclazz.prototype.alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map.apply(this, [alignment, hiddenReps]);
if (this.seqAssociated && this.annotation.getCalcId$() != null  ) {
if (this.seqannot != null ) {
this.seqannot.clear$();
} else {
this.seqannot=Clazz.new_($I$(3));
}var alcontext=Clazz.instanceOf(alignment, "jalview.datamodel.AlignmentI") ? alignment : alignment.getContext$();
var f=true;
var rna=false;
for (var alan, $alan = alcontext.findAnnotation$S(this.annotation.getCalcId$()).iterator$(); $alan.hasNext$()&&((alan=($alan.next$())),1);) {
if (alan.sequenceRef != null  && (alan.label != null  && this.annotation != null   && alan.label.equals$O(this.annotation.label) ) ) {
if (!rna && alan.isRNA$() ) {
rna=true;
}this.seqannot.put$TK$TV(alan.sequenceRef, alan);
if (f || alan.graphMax > this.aamax  ) {
this.aamax=alan.graphMax;
}if (f || alan.graphMin < this.aamin  ) {
this.aamin=alan.graphMin;
}f=false;
}}
if (rna) {
$I$(2).initRnaHelicesShading$I(1 + (this.aamax|0));
}}});

Clazz.newMeth(C$, 'getAnnotation$', function () {
return this.annotation;
});

Clazz.newMeth(C$, 'getAboveThreshold$', function () {
return this.aboveAnnotationThreshold;
});

Clazz.newMeth(C$, 'getAnnotationThreshold$', function () {
if (this.annotationThreshold == null ) {
return 0;
} else {
return this.annotationThreshold.value;
}});

Clazz.newMeth(C$, 'getMinColour$', function () {
return Clazz.new_($I$(4).c$$I$I$I,[this.redMin, this.greenMin, this.blueMin]);
});

Clazz.newMeth(C$, 'getMaxColour$', function () {
return Clazz.new_($I$(4).c$$I$I$I,[this.redMin + this.redRange, this.greenMin + this.greenRange, this.blueMin + this.blueRange]);
});

Clazz.newMeth(C$, 'findColour$C', function (c) {
return $I$(4).red;
});

Clazz.newMeth(C$, 'findColour$C$I$jalview_datamodel_SequenceI', function (c, j, seq) {
var ann=(this.seqAssociated && this.seqannot != null   ? this.seqannot.get$O(seq) : this.annotation);
if (ann == null  || ann.annotations == null   || j >= ann.annotations.length  || ann.annotations[j] == null   || $I$(5).isGap$C(c) ) {
return $I$(4).white;
}var aj=ann.annotations[j];
if (this.annotationThreshold != null ) {
if ((this.aboveAnnotationThreshold == 1 && aj.value <= this.annotationThreshold.value  ) || (this.aboveAnnotationThreshold == 0 && aj.value >= this.annotationThreshold.value  ) ) {
return $I$(4).white;
}}if (this.predefinedColours && aj.colour != null   && !aj.colour.equals$O($I$(4).black) ) {
return aj.colour;
}var result=$I$(4).white;
if (ann.hasIcons && ann.graph == 0 ) {
if (aj.secondaryStructure > " " && aj.secondaryStructure != "."  && aj.secondaryStructure != "-" ) {
if (this.getColourScheme$() != null ) {
result=this.getColourScheme$().findColour$C$I$jalview_datamodel_SequenceI$S$F(c, j, seq, null, 0.0);
} else {
if (ann.isRNA$()) {
result=$I$(2).rnaHelices[(aj.value|0)];
} else {
result=ann.annotations[j].secondaryStructure == "H" ? $I$(6).HELIX_COLOUR : ann.annotations[j].secondaryStructure == "E" ? $I$(6).SHEET_COLOUR : $I$(6).STEM_COLOUR;
}}} else {
return $I$(4).white;
}} else if (this.noGradient) {
if (this.getColourScheme$() != null ) {
result=this.getColourScheme$().findColour$C$I$jalview_datamodel_SequenceI$S$F(c, j, seq, null, 0.0);
} else {
if (aj.colour != null ) {
result=aj.colour;
}}} else {
result=this.shadeCalculation$jalview_datamodel_AlignmentAnnotation$I(ann, j);
}return result;
});

Clazz.newMeth(C$, 'shadeCalculation$jalview_datamodel_AlignmentAnnotation$I', function (ann, col) {
var range=1.0;
var value=ann.annotations[col].value;
if (this.thresholdIsMinMax && ann.threshold != null   && this.aboveAnnotationThreshold == 1  && value >= ann.threshold.value  ) {
range=ann.graphMax == ann.threshold.value  ? 1.0 : (value - ann.threshold.value) / (ann.graphMax - ann.threshold.value);
} else if (this.thresholdIsMinMax && ann.threshold != null   && this.aboveAnnotationThreshold == 0  && value <= ann.threshold.value  ) {
range=ann.graphMin == ann.threshold.value  ? 0.0 : (value - ann.graphMin) / (ann.threshold.value - ann.graphMin);
} else {
if (ann.graphMax != ann.graphMin ) {
range=(value - ann.graphMin) / (ann.graphMax - ann.graphMin);
} else {
range=0.0;
}}var dr=((this.redRange * range + this.redMin)|0);
var dg=((this.greenRange * range + this.greenMin)|0);
var db=((this.blueRange * range + this.blueMin)|0);
return Clazz.new_($I$(4).c$$I$I$I,[dr, dg, db]);
});

Clazz.newMeth(C$, 'isPredefinedColours$', function () {
return this.predefinedColours;
});

Clazz.newMeth(C$, 'setPredefinedColours$Z', function (predefinedColours) {
this.predefinedColours=predefinedColours;
});

Clazz.newMeth(C$, 'isSeqAssociated$', function () {
return this.seqAssociated;
});

Clazz.newMeth(C$, 'setSeqAssociated$Z', function (sassoc) {
this.seqAssociated=sassoc;
});

Clazz.newMeth(C$, 'isThresholdIsMinMax$', function () {
return this.thresholdIsMinMax;
});

Clazz.newMeth(C$, 'setThresholdIsMinMax$Z', function (minMax) {
this.thresholdIsMinMax=minMax;
});

Clazz.newMeth(C$, 'getSchemeName$', function () {
return "Annotation";
});

Clazz.newMeth(C$, 'isSimple$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
