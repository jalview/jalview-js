(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),p$1={},I$=[[0,'fr.orsay.lri.varna.models.templates.RNATemplateAlign','fr.orsay.lri.varna.models.templates.DrawRNATemplateMethod','java.util.HashMap','java.util.Arrays',['java.awt.geom.Point2D','.Double'],'java.util.HashSet',['fr.orsay.lri.varna.models.templates.RNATemplate','.In1Is'],'fr.orsay.lri.varna.models.geom.MiscGeom',['java.awt.geom.Line2D','.Double'],'fr.orsay.lri.varna.models.geom.LinesIntersect',['fr.orsay.lri.varna.models.templates.RNATemplate','.EdgeEndPointPosition'],['fr.orsay.lri.varna.models.rna.DrawRNATemplate','.UnpairedLineCounts'],'Error','fr.orsay.lri.varna.models.geom.ComputeArcCenter','fr.orsay.lri.varna.models.geom.CubicBezierCurve','fr.orsay.lri.varna.models.geom.ComputeEllipseAxis','fr.orsay.lri.varna.models.geom.HalfEllipse','java.awt.geom.AffineTransform','java.util.ArrayList','fr.orsay.lri.varna.models.templates.DrawRNATemplateCurveMethod']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DrawRNATemplate", function(){
Clazz.newInstance(this, arguments,0,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rna=null;
this.mapping=null;
this._listeBases=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_RNA', function (rna) {
C$.$init$.apply(this);
this.rna=rna;
this._listeBases=rna.getListeBases$();
}, 1);

Clazz.newMeth(C$, 'getMapping$', function () {
return this.mapping;
});

Clazz.newMeth(C$, 'drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_templates_DrawRNATemplateMethod$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z', function (template, conf, helixLengthAdjustmentMethod, curveMethod, straightBulges) {
this.mapping=$I$(1).mapRNAWithTemplate$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_templates_RNATemplate(this.rna, template);
var iter;
var globalIncreaseFactor=1;
var translateVectors=null;
if (helixLengthAdjustmentMethod === $I$(2).MAXSCALINGFACTOR ) {
var lengthIncreaseFactor=Clazz.new_($I$(3));
var maxLengthIncreaseFactor=-Infinity;
iter=template.rnaIterator$();
while (iter.hasNext$()){
var element=iter.next$();
if (Clazz.instanceOf(element, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix") && this.mapping.getAncestor$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(element) != null   && !lengthIncreaseFactor.containsKey$O(element) ) {
var helix=element;
var basesInHelixArray=$I$(1).intArrayFromList$java_util_List(this.mapping.getAncestor$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(helix));
$I$(4).sort$IA(basesInHelixArray);
var l=p$1.computeLengthIncreaseFactor$IA$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix$Z.apply(this, [basesInHelixArray, helix, straightBulges]);
lengthIncreaseFactor.put$TK$TV(helix, new Double(l));
if (l > maxLengthIncreaseFactor ) {
maxLengthIncreaseFactor=l;
}}}
globalIncreaseFactor=Math.max(1, maxLengthIncreaseFactor);
} else if (helixLengthAdjustmentMethod === $I$(2).HELIXTRANSLATE ) {
try {
var templateAsTree=template.toTree$();
translateVectors=p$1.computeHelixTranslations$fr_orsay_lri_varna_models_treealign_Tree$fr_orsay_lri_varna_models_templates_RNATemplateMapping$Z.apply(this, [templateAsTree, this.mapping, straightBulges]);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionInvalidRNATemplate")){
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.templates.RNATemplateDrawingAlgorithmException').c$$S,["ExceptionInvalidRNATemplate: " + e.getMessage$()]));
} else {
throw e;
}
}
}var coords=Clazz.array($I$(5), [this._listeBases.size$()]);
var centers=Clazz.array($I$(5), [this._listeBases.size$()]);
var angles=Clazz.array(Double.TYPE, [this._listeBases.size$()]);
for (var i=0; i < this._listeBases.size$(); i++) {
coords[i]=Clazz.new_($I$(5).c$$D$D,[0, 0]);
centers[i]=Clazz.new_($I$(5).c$$D$D,[0, 0]);
}
var computeCoords=true;
while (computeCoords){
computeCoords=false;
var alreadyDrawnHelixes=Clazz.new_($I$(6));
var lastMappedHelix=null;
var howWeGotOutOfLastHelix=null;
var howWeGotOutOfLastHelixBaseIndex=0;
iter=template.rnaIterator$();
var element=null;
while (iter.hasNext$()){
element=iter.next$();
if (Clazz.instanceOf(element, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix") && this.mapping.getAncestor$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(element) != null  ) {
var helix=element;
var firstTimeWeMeetThisHelix;
var basesInHelixArray=$I$(1).intArrayFromList$java_util_List(this.mapping.getAncestor$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(helix));
$I$(4).sort$IA(basesInHelixArray);
if (!alreadyDrawnHelixes.contains$O(helix)) {
firstTimeWeMeetThisHelix=true;
p$1.drawHelixLikeTemplateHelix$IA$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$D$java_util_Map$Z.apply(this, [basesInHelixArray, helix, coords, centers, angles, globalIncreaseFactor, translateVectors, straightBulges]);
alreadyDrawnHelixes.add$TE(helix);
} else {
firstTimeWeMeetThisHelix=false;
}var howWeGetInCurrentHelix;
if (firstTimeWeMeetThisHelix) {
if (helix.getIn1Is$() === $I$(7).IN1_IS_5PRIME ) {
howWeGetInCurrentHelix=helix.getIn1$();
} else {
howWeGetInCurrentHelix=helix.getIn2$();
}} else {
if (helix.getIn1Is$() === $I$(7).IN1_IS_5PRIME ) {
howWeGetInCurrentHelix=helix.getIn2$();
} else {
howWeGetInCurrentHelix=helix.getIn1$();
}}var P0=Clazz.new_($I$(5));
var P3=Clazz.new_($I$(5));
if (lastMappedHelix != null ) {
if (lastMappedHelix === helix ) {
var helixVector=Clazz.new_($I$(5));
p$1.computeHelixEndPointDirections$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [howWeGotOutOfLastHelix, helixVector, Clazz.new_($I$(5))]);
var angle=$I$(8).angleFromVector$java_awt_geom_Point2D_Double(helixVector);
var b1=basesInHelixArray[(basesInHelixArray.length/2|0) - 1];
P0.setLocation$java_awt_geom_Point2D(coords[b1]);
var b2=basesInHelixArray[(basesInHelixArray.length/2|0)];
P3.setLocation$java_awt_geom_Point2D(coords[b2]);
var loopCenter=Clazz.new_($I$(5).c$$D$D,[(P0.x + P3.x) / 2, (P0.y + P3.y) / 2]);
this.rna.drawLoop$I$I$D$D$D$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$Z(b1, b2, loopCenter.x, loopCenter.y, angle, coords, centers, angles, straightBulges);
if (helix.isFlipped$()) {
C$.symmetric$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$I$I(loopCenter, helixVector, coords, b1, b2);
C$.symmetric$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$I$I(loopCenter, helixVector, centers, b1, b2);
}} else {
var b1=howWeGotOutOfLastHelixBaseIndex;
var b2=firstTimeWeMeetThisHelix ? basesInHelixArray[0] : basesInHelixArray[(basesInHelixArray.length/2|0)];
P0.setLocation$java_awt_geom_Point2D(coords[b1]);
P3.setLocation$java_awt_geom_Point2D(coords[b2]);
var P1;
var P2;
if (Clazz.instanceOf(howWeGotOutOfLastHelix.getOtherElement$(), "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence") && Clazz.instanceOf(howWeGetInCurrentHelix.getOtherElement$(), "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence") ) {
P1=Clazz.new_($I$(5));
p$1.computeBezierTangentVectorTarget$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [howWeGotOutOfLastHelix, P0, P1]);
P2=Clazz.new_($I$(5));
p$1.computeBezierTangentVectorTarget$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [howWeGetInCurrentHelix, P3, P2]);
} else {
P1=null;
P2=null;
}p$1.drawAlongCurve$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z$Z.apply(this, [b1, b2, P0, P1, P2, P3, coords, centers, angles, curveMethod, lastMappedHelix.isFlipped$(), straightBulges]);
}} else if (basesInHelixArray[0] > 0) {
var templateSequence;
var templateSequenceCandidate=this.mapping.getPartner$I(0);
if (templateSequenceCandidate != null  && Clazz.instanceOf(templateSequenceCandidate, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence") ) {
templateSequence=templateSequenceCandidate;
} else {
templateSequenceCandidate=template.getFirst$();
if (templateSequenceCandidate != null  && Clazz.instanceOf(templateSequenceCandidate, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence") ) {
templateSequence=templateSequenceCandidate;
} else {
templateSequence=null;
}}var b1=0;
var b2=firstTimeWeMeetThisHelix ? basesInHelixArray[0] : basesInHelixArray[(basesInHelixArray.length/2|0)];
P3.setLocation$java_awt_geom_Point2D(coords[b2]);
if (templateSequence != null ) {
coords[0].setLocation$java_awt_geom_Point2D(templateSequence.getVertex5$());
coords[0].x *= globalIncreaseFactor;
coords[0].y *= globalIncreaseFactor;
} else {
var idealLength=p$1.computeStraightLineIdealLength$I$I.apply(this, [b1, b2]);
var j=Clazz.new_($I$(5));
if (howWeGetInCurrentHelix != null ) {
p$1.computeHelixEndPointDirections$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [howWeGetInCurrentHelix, Clazz.new_($I$(5)), j]);
} else {
j.setLocation$D$D(1, 0);
}coords[b1].setLocation$D$D(coords[b2].x + j.x * idealLength, coords[b2].y + j.y * idealLength);
}P0.setLocation$java_awt_geom_Point2D(coords[0]);
var P1;
var P2;
if (Clazz.instanceOf(howWeGetInCurrentHelix.getOtherElement$(), "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence") && templateSequence != null  ) {
P1=Clazz.new_($I$(5));
p$1.computeBezierTangentVectorTarget$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [templateSequence.getIn$(), P0, P1]);
P2=Clazz.new_($I$(5));
p$1.computeBezierTangentVectorTarget$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [howWeGetInCurrentHelix, P3, P2]);
} else {
P1=null;
P2=null;
}p$1.drawAlongCurve$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z$Z.apply(this, [b1, b2, P0, P1, P2, P3, coords, centers, angles, curveMethod, false, straightBulges]);
}lastMappedHelix=helix;
howWeGotOutOfLastHelix=howWeGetInCurrentHelix.getNextEndPoint$();
if (firstTimeWeMeetThisHelix) {
howWeGotOutOfLastHelixBaseIndex=basesInHelixArray[(basesInHelixArray.length/2|0) - 1];
} else {
howWeGotOutOfLastHelixBaseIndex=basesInHelixArray[basesInHelixArray.length - 1];
}}}
if (howWeGotOutOfLastHelixBaseIndex < coords.length - 1 && element != null   && coords.length > 1 ) {
var beginTemplateSequence=null;
if (lastMappedHelix == null ) {
var templateSequenceCandidate=this.mapping.getPartner$I(0);
if (templateSequenceCandidate != null  && Clazz.instanceOf(templateSequenceCandidate, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence") ) {
beginTemplateSequence=templateSequenceCandidate;
} else {
templateSequenceCandidate=template.getFirst$();
if (templateSequenceCandidate != null  && Clazz.instanceOf(templateSequenceCandidate, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence") ) {
beginTemplateSequence=templateSequenceCandidate;
} else {
beginTemplateSequence=null;
}}if (beginTemplateSequence != null ) {
coords[0].setLocation$java_awt_geom_Point2D(beginTemplateSequence.getVertex5$());
coords[0].x *= globalIncreaseFactor;
coords[0].y *= globalIncreaseFactor;
}}var endTemplateSequence;
var templateSequenceCandidate=this.mapping.getPartner$I(coords.length - 1);
if (templateSequenceCandidate != null  && Clazz.instanceOf(templateSequenceCandidate, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence") ) {
endTemplateSequence=templateSequenceCandidate;
} else {
templateSequenceCandidate=element;
if (templateSequenceCandidate != null  && Clazz.instanceOf(templateSequenceCandidate, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence") ) {
endTemplateSequence=templateSequenceCandidate;
} else {
endTemplateSequence=null;
}}var b1=howWeGotOutOfLastHelixBaseIndex;
var b2=coords.length - 1;
if (endTemplateSequence != null ) {
coords[b2].setLocation$java_awt_geom_Point2D(endTemplateSequence.getVertex3$());
coords[b2].x *= globalIncreaseFactor;
coords[b2].y *= globalIncreaseFactor;
} else {
var idealLength=p$1.computeStraightLineIdealLength$I$I.apply(this, [b1, b2]);
var j=Clazz.new_($I$(5));
if (howWeGotOutOfLastHelix != null ) {
p$1.computeHelixEndPointDirections$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [howWeGotOutOfLastHelix, Clazz.new_($I$(5)), j]);
} else {
j.setLocation$D$D(1, 0);
}coords[b2].setLocation$D$D(coords[b1].x + j.x * idealLength, coords[b1].y + j.y * idealLength);
}var P0=Clazz.new_($I$(5));
var P3=Clazz.new_($I$(5));
P0.setLocation$java_awt_geom_Point2D(coords[b1]);
P3.setLocation$java_awt_geom_Point2D(coords[b2]);
var P1;
var P2;
if (howWeGotOutOfLastHelix != null  && Clazz.instanceOf(howWeGotOutOfLastHelix.getOtherElement$(), "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence")  && endTemplateSequence != null  ) {
P1=Clazz.new_($I$(5));
p$1.computeBezierTangentVectorTarget$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [howWeGotOutOfLastHelix, P0, P1]);
P2=Clazz.new_($I$(5));
p$1.computeBezierTangentVectorTarget$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [endTemplateSequence.getOut$(), P3, P2]);
} else if (lastMappedHelix == null  && beginTemplateSequence != null   && endTemplateSequence != null  ) {
P1=Clazz.new_($I$(5));
p$1.computeBezierTangentVectorTarget$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [beginTemplateSequence.getIn$(), P0, P1]);
P2=Clazz.new_($I$(5));
p$1.computeBezierTangentVectorTarget$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [endTemplateSequence.getOut$(), P3, P2]);
} else {
P1=null;
P2=null;
}p$1.drawAlongCurve$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z$Z.apply(this, [b1, b2, P0, P1, P2, P3, coords, centers, angles, curveMethod, lastMappedHelix != null  ? lastMappedHelix.isFlipped$() : false, straightBulges]);
}if (helixLengthAdjustmentMethod === $I$(2).NOINTERSECT  && coords.length > 3 ) {
var lines=Clazz.array($I$(9), [coords.length - 1]);
for (var i=0; i < coords.length - 1; i++) {
lines[i]=Clazz.new_($I$(9).c$$java_awt_geom_Point2D$java_awt_geom_Point2D,[coords[i], coords[i + 1]]);
}
var intersectLines=0;
for (var i=0; i < lines.length; i++) {
for (var j=i + 2; j < lines.length; j++) {
if ($I$(10).linesIntersect$java_awt_geom_Line2D_Double$java_awt_geom_Line2D_Double(lines[i], lines[j])) {
intersectLines++;
}}
}
if (intersectLines > 0) {
if (globalIncreaseFactor < 3 ) {
globalIncreaseFactor += 0.1;
computeCoords=true;
}}}}
if (helixLengthAdjustmentMethod === $I$(2).MAXSCALINGFACTOR  || helixLengthAdjustmentMethod === $I$(2).NOINTERSECT  ) {
}for (var i=0; i < this._listeBases.size$(); i++) {
this._listeBases.get$I(i).setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(5).c$$D$D,[coords[i].x * conf._spaceBetweenBases, coords[i].y * conf._spaceBetweenBases]));
this._listeBases.get$I(i).setCenter$java_awt_geom_Point2D_Double(Clazz.new_($I$(5).c$$D$D,[centers[i].x * conf._spaceBetweenBases, centers[i].y * conf._spaceBetweenBases]));
}
});

Clazz.newMeth(C$, 'computeHelixEndPointDirections$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double', function (helixEndPoint, i, j) {
var helix=helixEndPoint.getElement$();
var startpos=helix.getStartPosition$();
var endpos=helix.getEndPosition$();
var helixVector=Clazz.new_($I$(5));
switch (helixEndPoint.getPosition$()) {
case $I$(11).IN1:
case $I$(11).OUT2:
helixVector.x=startpos.x - endpos.x;
helixVector.y=startpos.y - endpos.y;
break;
case $I$(11).IN2:
case $I$(11).OUT1:
helixVector.x=endpos.x - startpos.x;
helixVector.y=endpos.y - startpos.y;
break;
}
var helixVectorLength=Math.hypot(helixVector.x, helixVector.y);
i.x=helixVector.x / helixVectorLength;
i.y=helixVector.y / helixVectorLength;
switch (helixEndPoint.getPosition$()) {
case $I$(11).IN1:
case $I$(11).IN2:
j.x=-i.y;
j.y=i.x;
break;
case $I$(11).OUT1:
case $I$(11).OUT2:
j.x=i.y;
j.y=-i.x;
break;
}
if (helix.isFlipped$()) {
j.x=-j.x;
j.y=-j.y;
}}, p$1);

Clazz.newMeth(C$, 'computeBezierTangentVectorTarget$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double', function (endPoint, curveEndPoint, curveVectorOtherPoint) {
var sequenceEndPointIsIn;
var sequence;
if (Clazz.instanceOf(endPoint.getElement$(), "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix")) {
sequence=endPoint.getOtherElement$();
var endPointPositionOnHelix=endPoint.getPosition$();
switch (endPointPositionOnHelix) {
case $I$(11).IN1:
case $I$(11).IN2:
sequenceEndPointIsIn=false;
break;
default:
sequenceEndPointIsIn=true;
}
var endPointOnHelix=sequenceEndPointIsIn ? sequence.getIn$().getOtherEndPoint$() : sequence.getOut$().getOtherEndPoint$();
if (endPointOnHelix == null ) {
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.templates.RNATemplateDrawingAlgorithmException').c$$S,["Sequence is not connected to an helix."]));
}} else {
sequence=endPoint.getElement$();
if (endPoint === sequence.getIn$() ) {
sequenceEndPointIsIn=true;
} else {
sequenceEndPointIsIn=false;
}}var l=sequenceEndPointIsIn ? sequence.getInTangentVectorLength$() : sequence.getOutTangentVectorLength$();
var theta=sequenceEndPointIsIn ? sequence.getInTangentVectorAngle$() : sequence.getOutTangentVectorAngle$();
var v=Clazz.new_($I$(5));
v.x=l * Math.cos(theta);
v.y=l * Math.sin(theta);
curveVectorOtherPoint.x=curveEndPoint.x + v.x;
curveVectorOtherPoint.y=curveEndPoint.y + v.y;
}, p$1);

Clazz.newMeth(C$, 'computeLengthIncreaseFactor$IA$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix$Z', function (basesInHelixArray, helix, straightBulges) {
var templateLength=p$1.computeHelixTemplateLength$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix.apply(this, [helix]);
var realLength=p$1.computeHelixRealLength$IA$Z.apply(this, [basesInHelixArray, straightBulges]);
return realLength / templateLength;
}, p$1);

Clazz.newMeth(C$, 'computeLengthIncreaseDelta$IA$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix$Z', function (basesInHelixArray, helix, straightBulges) {
var templateLength=p$1.computeHelixTemplateLength$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix.apply(this, [helix]);
var realLength=p$1.computeHelixRealLength$IA$Z.apply(this, [basesInHelixArray, straightBulges]);
var i=Clazz.new_($I$(5));
p$1.computeTemplateHelixVectors$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [helix, null, i, null]);
return Clazz.new_($I$(5).c$$D$D,[i.x * (realLength - templateLength), i.y * (realLength - templateLength)]);
}, p$1);

Clazz.newMeth(C$, 'computeTemplateHelixVectors$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double', function (helix, o, i, j) {
var startpos;
var endpos;
if (helix.getIn1Is$() === $I$(7).IN1_IS_5PRIME ) {
startpos=helix.getStartPosition$();
endpos=helix.getEndPosition$();
} else {
endpos=helix.getStartPosition$();
startpos=helix.getEndPosition$();
}if (o != null ) {
o.x=startpos.x;
o.y=startpos.y;
}if (i != null  || j != null  ) {
if (i == null ) i=Clazz.new_($I$(5));
i.x=(endpos.x - startpos.x);
i.y=(endpos.y - startpos.y);
var i_original_norm=Math.hypot(i.x, i.y);
i.x=i.x / i_original_norm;
i.y=i.y / i_original_norm;
if (j != null ) {
j.x=-i.y;
j.y=i.x;
if (helix.isFlipped$()) {
j.x=-j.x;
j.y=-j.y;
}var j_original_norm=Math.hypot(j.x, j.y);
j.x=j.x / j_original_norm;
j.y=j.y / j_original_norm;
}}}, p$1);

Clazz.newMeth(C$, 'estimateBulgeArcLength$I$I', function (firstBase, lastBase) {
if (firstBase + 1 == lastBase) return 40.0;
var len=0.0;
var k=firstBase;
while (k < lastBase){
var l=this._listeBases.get$I(k).getElementStructure$();
if (k < l && l < lastBase ) {
len += 65.0;
k=l;
} else {
len += 40.0;
k++;
}}
return len;
}, p$1);

Clazz.newMeth(C$, 'estimateBulgeWidth$I$I', function (firstBase, lastBase) {
var len=p$1.estimateBulgeArcLength$I$I.apply(this, [firstBase, lastBase]);
return 2 * (len / 3.141592653589793);
}, p$1);

Clazz.newMeth(C$, 'computeHelixTemplateLength$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix', function (helix) {
return Math.hypot(helix.getStartPosition$().x - helix.getEndPosition$().x, helix.getStartPosition$().y - helix.getEndPosition$().y);
}, p$1);

Clazz.newMeth(C$, 'computeHelixRealLength$IA$Z', function (basesInHelixArray, straightBulges) {
return p$1.drawHelixLikeTemplateHelix$IA$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$D$java_util_Map$Z.apply(this, [basesInHelixArray, null, null, null, null, 0, null, straightBulges]);
}, p$1);

Clazz.newMeth(C$, 'countUnpairedLine$I$I', function (firstBase, lastBase) {
var counts=Clazz.new_($I$(12));
var nBP=0;
var nLD=0;
{
var b=firstBase;
while (b < lastBase){
var l=this._listeBases.get$I(b).getElementStructure$();
if (b < l && l < lastBase ) {
nBP++;
b=l;
} else {
nLD++;
b++;
}}
}counts.nBP=nBP;
counts.nLD=nLD;
counts.total=nBP + nLD;
return counts;
}, p$1);

Clazz.newMeth(C$, 'drawHelixLikeTemplateHelix$IA$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$D$java_util_Map$Z', function (basesInHelixArray, helix, coords, centers, angles, scaleHelixOrigin, translateVectors, straightBulges) {
var n=(basesInHelixArray.length/2|0);
if (n == 0) return 0;
var o=Clazz.new_($I$(5).c$$D$D,[0, 0]);
var i=Clazz.new_($I$(5).c$$D$D,[1, 0]);
var j=Clazz.new_($I$(5).c$$D$D,[0, 1]);
var flipped=false;
if (helix != null ) {
p$1.computeTemplateHelixVectors$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [helix, o, i, j]);
flipped=helix.isFlipped$();
}var li=Clazz.new_($I$(5).c$$D$D,[i.x * 40.0, i.y * 40.0]);
o.x=(o.x - j.x * 65.0 / 2) * scaleHelixOrigin;
o.y=(o.y - j.y * 65.0 / 2) * scaleHelixOrigin;
if (translateVectors != null  && translateVectors.containsKey$O(helix) ) {
var v=translateVectors.get$O(helix);
o.x=o.x + v.x;
o.y=o.y + v.y;
}var helixBasesPositions=Clazz.array($I$(5), [basesInHelixArray.length]);
for (var k=0; k < helixBasesPositions.length; k++) {
helixBasesPositions[k]=Clazz.new_($I$(5));
}
var accDelta=Clazz.new_($I$(5).c$$D$D,[0, 0]);
for (var k=0; k < n; k++) {
var kp=2 * n - k - 1;
var p1=helixBasesPositions[k];
var p2=helixBasesPositions[kp];
var bulge=k >= 1 && (basesInHelixArray[k] != basesInHelixArray[k - 1] + 1 || basesInHelixArray[kp + 1] != basesInHelixArray[kp] + 1 ) ;
if (k >= 1) {
if (basesInHelixArray[k] < basesInHelixArray[k - 1] || basesInHelixArray[kp + 1] < basesInHelixArray[kp] ) {
throw Clazz.new_($I$(13).c$$S,["Internal bug: basesInHelixArray must be sorted"]);
}if (bulge) {
var delta1=p$1.estimateBulgeWidth$I$I.apply(this, [basesInHelixArray[k - 1], basesInHelixArray[k]]);
var delta2=p$1.estimateBulgeWidth$I$I.apply(this, [basesInHelixArray[kp], basesInHelixArray[kp + 1]]);
var delta=Math.max(delta1, delta2);
if (coords != null ) {
for (var side=0; side < 2; side++) {
var pstart=Clazz.new_($I$(5));
var pend=Clazz.new_($I$(5));
var bisectVect=Clazz.new_($I$(5));
var is=Clazz.new_($I$(5));
var firstBase;
var lastBase;
var alphasign=flipped ? -1 : 1;
if (side == 0) {
firstBase=basesInHelixArray[k - 1];
lastBase=basesInHelixArray[k];
pstart.setLocation$D$D(o.x + accDelta.x, o.y + accDelta.y);
pend.setLocation$D$D(o.x + accDelta.x + i.x * delta , o.y + accDelta.y + i.y * delta );
bisectVect.setLocation$D$D(-j.x, -j.y);
is.setLocation$java_awt_geom_Point2D(i);
} else {
firstBase=basesInHelixArray[kp];
lastBase=basesInHelixArray[kp + 1];
pstart.setLocation$D$D(o.x + accDelta.x + i.x * delta  + j.x * 65.0, o.y + accDelta.y + i.y * delta  + j.y * 65.0);
pend.setLocation$D$D(o.x + accDelta.x + j.x * 65.0 , o.y + accDelta.y + j.y * 65.0 );
bisectVect.setLocation$java_awt_geom_Point2D(j);
is.setLocation$D$D(-i.x, -i.y);
}var arclen=p$1.estimateBulgeArcLength$I$I.apply(this, [firstBase, lastBase]);
var centerOnBisect=$I$(14).computeArcCenter$D$D(delta, arclen);
if (centerOnBisect > -1000 ) {
var center=Clazz.new_($I$(5).c$$D$D,[pstart.x + is.x * delta / 2 + bisectVect.x * centerOnBisect, pstart.y + is.y * delta / 2 + bisectVect.y * centerOnBisect]);
var b=firstBase;
var len=0;
var r=Math.hypot(pstart.x - center.x, pstart.y - center.y);
var alpha0=$I$(8).angleFromVector$D$D(pstart.x - center.x, pstart.y - center.y);
while (b < lastBase){
var l=this._listeBases.get$I(b).getElementStructure$();
if (b < l && l < lastBase ) {
len += 65.0;
b=l;
} else {
len += 40.0;
b++;
}if (b < lastBase) {
coords[b].x=center.x + r * Math.cos(alpha0 + alphasign * len / r);
coords[b].y=center.y + r * Math.sin(alpha0 + alphasign * len / r);
}}
} else {
var counts=p$1.countUnpairedLine$I$I.apply(this, [firstBase, lastBase]);
var LD=Math.max((delta - counts.nBP * 65.0) / counts.nLD, 0);
var len=0;
{
var b=firstBase;
while (b < lastBase){
var l=this._listeBases.get$I(b).getElementStructure$();
if (b < l && l < lastBase ) {
len += 65.0;
b=l;
} else {
len += LD;
b++;
}if (b < lastBase) {
coords[b].x=pstart.x + is.x * len;
coords[b].y=pstart.y + is.y * len;
}}
}}{
var b=firstBase;
while (b < lastBase){
var l=this._listeBases.get$I(b).getElementStructure$();
if (b < l && l < lastBase ) {
var b1pos=coords[b];
var b2pos=coords[l];
var beta=$I$(8).angleFromVector$D$D(b2pos.x - b1pos.x, b2pos.y - b1pos.y) - 1.5707963267948966 + (flipped ? 3.141592653589793 : 0);
var loopCenter=Clazz.new_($I$(5).c$$D$D,[(b1pos.x + b2pos.x) / 2, (b1pos.y + b2pos.y) / 2]);
this.rna.drawLoop$I$I$D$D$D$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$Z(b, l, loopCenter.x, loopCenter.y, beta, coords, centers, angles, straightBulges);
if (helix.isFlipped$()) {
var v=Clazz.new_($I$(5).c$$D$D,[Math.cos(beta), Math.sin(beta)]);
C$.symmetric$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$I$I(loopCenter, v, coords, b, l);
C$.symmetric$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$I$I(loopCenter, v, centers, b, l);
}b=l;
} else {
b++;
}}
}}
}accDelta.x += i.x * delta;
accDelta.y += i.y * delta;
p1.x=o.x + accDelta.x;
p1.y=o.y + accDelta.y;
p2.x=p1.x + j.x * 65.0;
p2.y=p1.y + j.y * 65.0;
} else {
accDelta.x += li.x;
accDelta.y += li.y;
p1.x=o.x + accDelta.x;
p1.y=o.y + accDelta.y;
p2.x=p1.x + j.x * 65.0;
p2.y=p1.y + j.y * 65.0;
}} else {
p1.x=o.x;
p1.y=o.y;
p2.x=p1.x + j.x * 65.0;
p2.y=p1.y + j.y * 65.0;
}}
var p1=helixBasesPositions[0];
var p2=helixBasesPositions[n - 1];
if (coords != null ) {
for (var k=0; k < helixBasesPositions.length; k++) {
coords[basesInHelixArray[k]]=helixBasesPositions[k];
}
}return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}, p$1);

Clazz.newMeth(C$, 'computeStraightLineIdealLength$I$I', function (firstBase, lastBase) {
var counts=p$1.countUnpairedLine$I$I.apply(this, [firstBase, lastBase]);
return 65.0 * counts.nBP + 40.0 * counts.nLD;
}, p$1);

Clazz.newMeth(C$, 'drawOnStraightLine$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$Z', function (firstBase, lastBase, P0, P3, coords, centers, cancelIfNotGood) {
var vector=Clazz.new_($I$(5).c$$D$D,[P3.x - P0.x, P3.y - P0.y]);
var vectorNorm=Math.hypot(vector.x, vector.y);
var counts=p$1.countUnpairedLine$I$I.apply(this, [firstBase, lastBase]);
var LD=Math.max((vectorNorm - counts.nBP * 65.0) / counts.nLD, 0);
if (cancelIfNotGood && LD < 30.0  ) {
return false;
}var len=0;
{
var b=firstBase;
while (b <= lastBase){
coords[b].x=P0.x + vector.x * len / vectorNorm;
coords[b].y=P0.y + vector.y * len / vectorNorm;
var l=this._listeBases.get$I(b).getElementStructure$();
if (b < l && l < lastBase ) {
len += 65.0;
b=l;
} else {
len += LD;
b++;
}}
}return true;
}, p$1);

Clazz.newMeth(C$, 'drawOnBezierCurve$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$Z', function (firstBase, lastBase, P0, P1, P2, P3, coords, centers, cancelIfNotGood) {
var counts=p$1.countUnpairedLine$I$I.apply(this, [firstBase, lastBase]);
var n=counts.total;
var bezier=Clazz.new_($I$(15).c$$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$I,[P0, P1, P2, P3, 10 * n]);
var curveLength=bezier.getApproxCurveLength$();
var LD=Math.max((curveLength - counts.nBP * 65.0) / counts.nLD, 0);
if (cancelIfNotGood && LD < 30.0  ) {
return false;
}var t=Clazz.array(Double.TYPE, [n + 1]);
{
var len=0;
var k=0;
var b=firstBase;
while (b <= lastBase){
t[k]=len;
k++;
var l=this._listeBases.get$I(b).getElementStructure$();
if (b < l && l < lastBase ) {
len += 65.0;
b=l;
} else {
len += LD;
b++;
}}
}var sequenceBasesCoords=bezier.uniformParam$DA(t);
{
var k=0;
var b=firstBase;
while (b <= lastBase){
coords[b]=sequenceBasesCoords[k];
var l=this._listeBases.get$I(b).getElementStructure$();
if (b < l && l < lastBase ) {
b=l;
} else {
b++;
}k++;
}
}return true;
}, p$1);

Clazz.newMeth(C$, 'drawOnEllipse$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$Z', function (firstBase, lastBase, P0, P3, coords, centers, reverse) {
var counts=p$1.countUnpairedLine$I$I.apply(this, [firstBase, lastBase]);
var halfEllipseLength=65.0 * counts.nBP + 40.0 * counts.nLD;
var fullEllipseLength=halfEllipseLength * 2;
var axisA=P0.distance$java_awt_geom_Point2D(P3) / 2;
var axisB=$I$(16).computeEllipseAxis$D$D(axisA, fullEllipseLength);
if (axisB == 0 ) {
p$1.drawOnStraightLine$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$Z.apply(this, [firstBase, lastBase, P0, P3, coords, centers, false]);
return;
}var n=counts.total;
var curve=Clazz.new_($I$(17).c$$D$D$I,[axisA, axisB, 10 * n]);
var curveLength=curve.getApproxCurveLength$();
var LD=Math.max((curveLength - counts.nBP * 65.0) / counts.nLD, 0);
var t=Clazz.array(Double.TYPE, [n + 1]);
{
var len=0;
var k=0;
var b=firstBase;
while (b <= lastBase){
t[k]=len;
k++;
var l=this._listeBases.get$I(b).getElementStructure$();
if (b < l && l < lastBase ) {
len += 65.0;
b=l;
} else {
len += LD;
b++;
}}
}var sequenceBasesCoords=curve.uniformParam$DA(t);
if (reverse) {
var tranform1=Clazz.new_($I$(18));
tranform1.scale$D$D(1, -1);
tranform1.transform$java_awt_geom_Point2DA$I$java_awt_geom_Point2DA$I$I(sequenceBasesCoords, 0, sequenceBasesCoords, 0, sequenceBasesCoords.length);
}var tranform=$I$(17).matchAxisA$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(P0, P3);
tranform.transform$java_awt_geom_Point2DA$I$java_awt_geom_Point2DA$I$I(sequenceBasesCoords, 0, sequenceBasesCoords, 0, sequenceBasesCoords.length);
{
var k=0;
var b=firstBase;
while (b <= lastBase){
coords[b]=sequenceBasesCoords[k];
var l=this._listeBases.get$I(b).getElementStructure$();
if (b < l && l < lastBase ) {
b=l;
} else {
b++;
}k++;
}
}}, p$1);

Clazz.newMeth(C$, 'drawAlongCurve$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z$Z', function (firstBase, lastBase, P0, P1, P2, P3, coords, centers, angles, curveMethod, reverse, straightBulges) {
var alongBezierCurve=Clazz.new_($I$(19));
for (var depth=0, i=firstBase; i <= lastBase; i++) {
var k=this._listeBases.get$I(i).getElementStructure$();
if (k < 0 || k > lastBase  || k < firstBase ) {
if (depth == 0) {
alongBezierCurve.add$TE(new Integer(i));
}} else {
if (i < k) {
if (depth == 0) {
alongBezierCurve.add$TE(new Integer(i));
alongBezierCurve.add$TE(new Integer(k));
}depth++;
} else {
depth--;
}}}
var n=alongBezierCurve.size$();
var alongBezierCurveArray=$I$(1).intArrayFromList$java_util_List(alongBezierCurve);
if (n > 0) {
if (curveMethod === $I$(20).ALWAYS_REPLACE_BY_ELLIPSES ) {
p$1.drawOnEllipse$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$Z.apply(this, [firstBase, lastBase, P0, P3, coords, centers, reverse]);
} else if (curveMethod === $I$(20).SMART ) {
var passed;
if (P1 != null  && P2 != null  ) {
passed=p$1.drawOnBezierCurve$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$Z.apply(this, [firstBase, lastBase, P0, P1, P2, P3, coords, centers, true]);
} else {
passed=p$1.drawOnStraightLine$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$Z.apply(this, [firstBase, lastBase, P0, P3, coords, centers, true]);
}if (!passed) {
p$1.drawOnEllipse$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$Z.apply(this, [firstBase, lastBase, P0, P3, coords, centers, reverse]);
}} else {
if (P1 != null  && P2 != null  ) {
p$1.drawOnBezierCurve$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$Z.apply(this, [firstBase, lastBase, P0, P1, P2, P3, coords, centers, false]);
} else {
p$1.drawOnStraightLine$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$Z.apply(this, [firstBase, lastBase, P0, P3, coords, centers, false]);
}}}for (var k=0; k < n - 1; k++) {
var b1=alongBezierCurveArray[k];
var b2=alongBezierCurveArray[k + 1];
if (this._listeBases.get$I(b1).getElementStructure$() == b2) {
var b1pos=coords[b1];
var b2pos=coords[b2];
var alpha=$I$(8).angleFromVector$D$D(b2pos.x - b1pos.x, b2pos.y - b1pos.y);
this.rna.drawLoop$I$I$D$D$D$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$Z(b1, b2, (b1pos.x + b2pos.x) / 2, (b1pos.y + b2pos.y) / 2, alpha - 1.5707963267948966, coords, centers, angles, straightBulges);
if (reverse) {
var symAxisVect=Clazz.new_($I$(5).c$$D$D,[coords[b2].x - coords[b1].x, coords[b2].y - coords[b1].y]);
C$.symmetric$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$I$I(coords[b1], symAxisVect, coords, b1, b2);
C$.symmetric$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$I$I(coords[b1], symAxisVect, centers, b1, b2);
}}}
}, p$1);

Clazz.newMeth(C$, 'symmetric$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_DoubleA$I$I', function (p, v, points, first, last) {
var lv=v.x * v.x + v.y * v.y;
for (var i=first; i <= last; i++) {
var A=Clazz.new_($I$(5).c$$D$D,[points[i].x - p.x, points[i].y - p.y]);
var B=Clazz.new_($I$(5).c$$D$D,[-(A.x * v.y * v.y  - 2 * A.y * v.x * v.y  - A.x * v.x * v.x ) / lv, (A.y * v.y * v.y  + 2 * A.x * v.x * v.y  - A.y * v.x * v.x ) / lv]);
points[i].x=B.x + p.x;
points[i].y=B.y + p.y;
}
}, 1);

Clazz.newMeth(C$, 'computeHelixTranslations$fr_orsay_lri_varna_models_treealign_Tree$java_util_Map$fr_orsay_lri_varna_models_templates_RNATemplateMapping$java_awt_geom_Point2D_Double$Z', function (tree, translateVectors, mapping, parentDeltaVector, straightBulges) {
var nvt=tree.getValue$();
var newDeltaVector=parentDeltaVector;
if (Clazz.instanceOf(nvt, "fr.orsay.lri.varna.models.templates.RNANodeValueTemplateBasePair")) {
var helix=(nvt).getHelix$();
if (!translateVectors.containsKey$O(helix)) {
translateVectors.put$TK$TV(helix, parentDeltaVector);
var basesInHelixArray;
if (mapping.getAncestor$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(helix) != null ) {
basesInHelixArray=$I$(1).intArrayFromList$java_util_List(mapping.getAncestor$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(helix));
$I$(4).sort$IA(basesInHelixArray);
} else {
basesInHelixArray=Clazz.array(Integer.TYPE, [0]);
}var helixDeltaVector=p$1.computeLengthIncreaseDelta$IA$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix$Z.apply(this, [basesInHelixArray, helix, straightBulges]);
newDeltaVector=Clazz.new_($I$(5).c$$D$D,[parentDeltaVector.x + helixDeltaVector.x, parentDeltaVector.y + helixDeltaVector.y]);
}}for (var subtree, $subtree = tree.getChildren$().iterator$(); $subtree.hasNext$()&&((subtree=($subtree.next$())),1);) {
p$1.computeHelixTranslations$fr_orsay_lri_varna_models_treealign_Tree$java_util_Map$fr_orsay_lri_varna_models_templates_RNATemplateMapping$java_awt_geom_Point2D_Double$Z.apply(this, [subtree, translateVectors, mapping, newDeltaVector, straightBulges]);
}
}, p$1);

Clazz.newMeth(C$, 'computeHelixTranslations$fr_orsay_lri_varna_models_treealign_Tree$fr_orsay_lri_varna_models_templates_RNATemplateMapping$Z', function (tree, mapping, straightBulges) {
var translateVectors=Clazz.new_($I$(3));
p$1.computeHelixTranslations$fr_orsay_lri_varna_models_treealign_Tree$java_util_Map$fr_orsay_lri_varna_models_templates_RNATemplateMapping$java_awt_geom_Point2D_Double$Z.apply(this, [tree, translateVectors, mapping, Clazz.new_($I$(5).c$$D$D,[0, 0]), straightBulges]);
return translateVectors;
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.DrawRNATemplate, "UnpairedLineCounts", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nBP=0;
this.nLD=0;
this.total=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
