(function(){var P$=Clazz.newPackage("jalview.renderer.seqfeatures"),I$=[[0,'java.awt.AlphaComposite','jalview.util.Comparison','java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeatureRenderer", null, 'jalview.viewmodel.seqfeatures.FeatureRendererModel');
C$.NO_TRANSPARENCY=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.NO_TRANSPARENCY=$I$(1).getInstance$I$F(3, 1.0);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI', function (viewport) {
Clazz.super_(C$, this,1);
this.av=viewport;
}, 1);

Clazz.newMeth(C$, 'renderFeature$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$java_awt_Color$I$I$I$Z', function (g, seq, featureStart, featureEnd, featureColour, start, end, y1, colourOnly) {
var charHeight=this.av.getCharHeight$();
var charWidth=this.av.getCharWidth$();
var validCharWidth=this.av.isValidCharWidth$();
if (featureStart > end || featureEnd < start ) {
return false;
}if (featureStart < start) {
featureStart=start;
}if (featureEnd >= end) {
featureEnd=end;
}var pady=(y1 + charHeight) - (charHeight/5|0);
var fm=g.getFontMetrics$();
for (var i=featureStart; i <= featureEnd; i++) {
var s=seq.getCharAt$I(i);
if ($I$(2).isGap$C(s)) {
continue;
}g.setColor$java_awt_Color(featureColour);
g.fillRect$I$I$I$I((i - start) * charWidth, y1, charWidth, charHeight);
if (colourOnly || !validCharWidth ) {
continue;
}g.setColor$java_awt_Color($I$(3).white);
var charOffset=((charWidth - fm.charWidth$C(s))/2|0);
g.drawString$S$I$I(String.valueOf$C(s), charOffset + (charWidth * (i - start)), pady);
}
return true;
});

Clazz.newMeth(C$, 'renderScoreFeature$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$java_awt_Color$I$I$I$BA$Z', function (g, seq, fstart, fend, featureColour, start, end, y1, bs, colourOnly) {
if (fstart > end || fend < start ) {
return false;
}if (fstart < start) {
fstart=start;
}if (fend >= end) {
fend=end;
}var charHeight=this.av.getCharHeight$();
var pady=(y1 + charHeight) - (charHeight/5|0);
var ystrt=0;
var yend=charHeight;
if (bs[0] != 0) {
if (bs[1] < 128) {
yend=(charHeight * (128 - bs[1])/512|0);
ystrt=charHeight - (yend/2|0);
} else {
ystrt=(charHeight/2|0);
yend=(charHeight * (bs[1] - 128)/512|0);
}} else {
yend=(charHeight * bs[1]/255|0);
ystrt=charHeight - yend;
}var fm=g.getFontMetrics$();
var charWidth=this.av.getCharWidth$();
for (var i=fstart; i <= fend; i++) {
var s=seq.getCharAt$I(i);
if ($I$(2).isGap$C(s)) {
continue;
}g.setColor$java_awt_Color(featureColour);
var x=(i - start) * charWidth;
g.drawRect$I$I$I$I(x, y1, charWidth, charHeight);
g.fillRect$I$I$I$I(x, y1 + ystrt, charWidth, yend);
if (colourOnly || !this.av.isValidCharWidth$() ) {
continue;
}g.setColor$java_awt_Color($I$(3).black);
var charOffset=((charWidth - fm.charWidth$C(s))/2|0);
g.drawString$S$I$I(String.valueOf$C(s), charOffset + (charWidth * (i - start)), pady);
}
return true;
});

Clazz.newMeth(C$, 'findFeatureColour$jalview_datamodel_SequenceI$I$java_awt_Graphics', function (seq, column, g) {
if (!this.av.isShowSequenceFeatures$()) {
return null;
}if ($I$(2).isGap$C(seq.getCharAt$I(column - 1))) {
return null;
}var renderedColour=null;
if (this.transparency == 1.0 ) {
renderedColour=this.findFeatureColour$jalview_datamodel_SequenceI$I(seq, column);
} else {
renderedColour=this.drawSequence$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$I$Z(g, seq, column, column, 0, true);
}return renderedColour;
});

Clazz.newMeth(C$, 'drawSequence$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$I$Z', function (g, seq, start, end, y1, colourOnly) {
var visiblePositions=seq.findPositions$I$I(start + 1, end + 1);
if (visiblePositions == null  || !seq.getFeatures$().hasFeatures$() ) {
return null;
}this.updateFeatures$();
if (this.transparency != 1.0  && g != null  ) {
var g2=g;
g2.setComposite$java_awt_Composite($I$(1).getInstance$I$F(3, this.transparency));
}var drawnColour=null;
for (var renderIndex=0; renderIndex < this.renderOrder.length; renderIndex++) {
var type=this.renderOrder[renderIndex];
if (!this.showFeatureOfType$S(type)) {
continue;
}var fc=this.getFeatureStyle$S(type);
var overlaps=seq.getFeatures$().findFeatures$I$I$SA(visiblePositions.getBegin$(), visiblePositions.getEnd$(), [type]);
if (fc.isSimpleColour$()) {
this.filterFeaturesForDisplay$java_util_List(overlaps);
}for (var sf, $sf = overlaps.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var featureColour=this.getColor$jalview_datamodel_SequenceFeature$jalview_api_FeatureColourI(sf, fc);
if (featureColour == null ) {
continue;
}var visibleStart=sf.getBegin$();
if (visibleStart < visiblePositions.getBegin$()) {
visibleStart=sf.isContactFeature$() ? sf.getEnd$() : visiblePositions.getBegin$();
}var visibleEnd=sf.getEnd$();
if (visibleEnd > visiblePositions.getEnd$()) {
visibleEnd=sf.isContactFeature$() ? sf.getBegin$() : visiblePositions.getEnd$();
}var featureStartCol=seq.findIndex$I(visibleStart);
var featureEndCol=sf.begin == sf.end ? featureStartCol : seq.findIndex$I(visibleEnd);
var isContactFeature=sf.isContactFeature$();
if (isContactFeature) {
var drawn=this.renderFeature$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$java_awt_Color$I$I$I$Z(g, seq, featureStartCol - 1, featureStartCol - 1, featureColour, start, end, y1, colourOnly);
drawn|=this.renderFeature$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$java_awt_Color$I$I$I$Z(g, seq, featureEndCol - 1, featureEndCol - 1, featureColour, start, end, y1, colourOnly);
if (drawn) {
drawnColour=featureColour;
}} else {
var drawn=this.renderFeature$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$java_awt_Color$I$I$I$Z(g, seq, featureStartCol - 1, featureEndCol - 1, featureColour, start, end, y1, colourOnly);
if (drawn) {
drawnColour=featureColour;
}}}
}
if (this.transparency != 1.0  && g != null  ) {
var g2=g;
g2.setComposite$java_awt_Composite(C$.NO_TRANSPARENCY);
}return drawnColour;
});

Clazz.newMeth(C$, 'featuresAdded$', function () {
this.findAllFeatures$();
});

Clazz.newMeth(C$, 'findFeatureColour$jalview_datamodel_SequenceI$I', function (seq, column) {
this.updateFeatures$();
for (var renderIndex=this.renderOrder.length - 1; renderIndex >= 0; renderIndex--) {
var type=this.renderOrder[renderIndex];
if (!this.showFeatureOfType$S(type)) {
continue;
}var overlaps=seq.findFeatures$I$I$SA(column, column, [type]);
for (var sequenceFeature, $sequenceFeature = overlaps.iterator$(); $sequenceFeature.hasNext$()&&((sequenceFeature=($sequenceFeature.next$())),1);) {
if (!this.featureGroupNotShown$jalview_datamodel_SequenceFeature(sequenceFeature)) {
var col=this.getColour$jalview_datamodel_SequenceFeature(sequenceFeature);
if (col != null ) {
return col;
}}}
}
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
