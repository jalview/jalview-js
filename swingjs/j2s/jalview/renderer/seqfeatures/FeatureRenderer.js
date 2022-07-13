(function(){var P$=Clazz.newPackage("jalview.renderer.seqfeatures"),I$=[[0,'java.awt.AlphaComposite','jalview.util.Comparison','java.awt.Color','jalview.gui.Desktop','jalview.util.ReverseListIterator']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureRenderer", null, 'jalview.viewmodel.seqfeatures.FeatureRendererModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NO_TRANSPARENCY','java.awt.AlphaComposite']]]

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI',  function (viewport) {
Clazz.super_(C$, this);
this.av=viewport;
}, 1);

Clazz.newMeth(C$, 'renderFeature$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$java_awt_Color$I$I$I$Z',  function (g, seq, featureStart, featureEnd, featureColour, start, end, y1, colourOnly) {
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

Clazz.newMeth(C$, 'renderScoreFeature$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$java_awt_Color$I$I$I$BA$Z',  function (g, seq, fstart, fend, featureColour, start, end, y1, bs, colourOnly) {
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

Clazz.newMeth(C$, 'findFeatureColour$jalview_datamodel_SequenceI$I$java_awt_Graphics',  function (seq, column, g) {
if (!this.av.isShowSequenceFeatures$()) {
return null;
}if ($I$(2,"isGap$C",[seq.getCharAt$I(column - 1)])) {
return null;
}var renderedColour=null;
if (this.transparency == 1.0 ) {
renderedColour=this.findFeatureColour$jalview_datamodel_SequenceI$I(seq, column);
} else {
renderedColour=this.drawSequence$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$I$Z(g, seq, column, column, 0, true);
}return renderedColour;
});

Clazz.newMeth(C$, 'drawSequence$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$I$Z',  function (g, seq, start, end, y1, colourOnly) {
var visiblePositions=seq.findPositions$I$I(start + 1, end + 1);
if (visiblePositions == null  || !seq.getFeatures$().hasFeatures$() && !this.av.isShowComplementFeatures$()  ) {
return null;
}this.updateFeatures$();
if (this.transparency != 1.0  && g != null  ) {
var g2=g;
g2.setComposite$java_awt_Composite($I$(1).getInstance$I$F(3, this.transparency));
}var drawnColour=null;
if (this.av.isShowComplementFeatures$() && !this.av.isShowComplementFeaturesOnTop$() ) {
drawnColour=this.drawComplementFeatures$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$I$Z$jalview_datamodel_ContiguousI$java_awt_Color(g, seq, start, end, y1, colourOnly, visiblePositions, drawnColour);
}for (var renderIndex=0; renderIndex < this.renderOrder.length; renderIndex++) {
var type=this.renderOrder[renderIndex];
if (!this.showFeatureOfType$S(type)) {
continue;
}var fc=this.getFeatureStyle$S(type);
var overlaps=seq.getFeatures$().findFeatures$I$I$SA(visiblePositions.getBegin$(), visiblePositions.getEnd$(), Clazz.array(String, -1, [type]));
if (overlaps.size$() > 1 && fc.isSimpleColour$() ) {
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
drawn=!!(drawn|(this.renderFeature$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$java_awt_Color$I$I$I$Z(g, seq, featureEndCol - 1, featureEndCol - 1, featureColour, start, end, y1, colourOnly)));
if (drawn) {
drawnColour=featureColour;
}} else {
var drawn=this.renderFeature$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$java_awt_Color$I$I$I$Z(g, seq, featureStartCol - 1, featureEndCol - 1, featureColour, start, end, y1, colourOnly);
if (drawn) {
drawnColour=featureColour;
}}}
}
if (this.av.isShowComplementFeatures$() && this.av.isShowComplementFeaturesOnTop$() ) {
drawnColour=this.drawComplementFeatures$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$I$Z$jalview_datamodel_ContiguousI$java_awt_Color(g, seq, start, end, y1, colourOnly, visiblePositions, drawnColour);
}if (this.transparency != 1.0  && g != null  ) {
var g2=g;
g2.setComposite$java_awt_Composite(C$.NO_TRANSPARENCY);
}return drawnColour;
});

Clazz.newMeth(C$, 'drawComplementFeatures$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$I$Z$jalview_datamodel_ContiguousI$java_awt_Color',  function (g, seq, start, end, y1, colourOnly, visiblePositions, drawnColour) {
var comp=this.av.getCodingComplement$();
var fr2=$I$(4).getAlignFrameFor$jalview_api_AlignViewportI(comp).getFeatureRenderer$();
var visibleStart=visiblePositions.getBegin$();
var visibleEnd=visiblePositions.getEnd$();
for (var pos=visibleStart; pos <= visibleEnd; pos++) {
var column=seq.findIndex$I(pos);
var mf=fr2.findComplementFeaturesAtResidue$jalview_datamodel_SequenceI$I(seq, pos);
if (mf != null ) {
for (var sf, $sf = mf.features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var fc=fr2.getFeatureStyle$S(sf.getType$());
var featureColour=fr2.getColor$jalview_datamodel_SequenceFeature$jalview_api_FeatureColourI(sf, fc);
this.renderFeature$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$java_awt_Color$I$I$I$Z(g, seq, column - 1, column - 1, featureColour, start, end, y1, colourOnly);
drawnColour=featureColour;
}
}}
return drawnColour;
});

Clazz.newMeth(C$, 'featuresAdded$',  function () {
this.findAllFeatures$();
});

Clazz.newMeth(C$, 'findFeatureColour$jalview_datamodel_SequenceI$I',  function (seq, column) {
this.updateFeatures$();
if (this.av.isShowComplementFeatures$() && this.av.isShowComplementFeaturesOnTop$() ) {
var col=this.findComplementFeatureColour$jalview_datamodel_SequenceI$I(seq, column);
if (col != null ) {
return col;
}}for (var renderIndex=this.renderOrder.length - 1; renderIndex >= 0; renderIndex--) {
var type=this.renderOrder[renderIndex];
if (!this.showFeatureOfType$S(type)) {
continue;
}var overlaps=seq.findFeatures$I$I$SA(column, column, Clazz.array(String, -1, [type]));
for (var sequenceFeature, $sequenceFeature = overlaps.iterator$(); $sequenceFeature.hasNext$()&&((sequenceFeature=($sequenceFeature.next$())),1);) {
if (!this.featureGroupNotShown$jalview_datamodel_SequenceFeature(sequenceFeature)) {
var col=this.getColour$jalview_datamodel_SequenceFeature(sequenceFeature);
if (col != null ) {
return col;
}}}
}
var col=null;
if (this.av.isShowComplementFeatures$() && !this.av.isShowComplementFeaturesOnTop$() ) {
col=this.findComplementFeatureColour$jalview_datamodel_SequenceI$I(seq, column);
}return col;
});

Clazz.newMeth(C$, 'findComplementFeatureColour$jalview_datamodel_SequenceI$I',  function (seq, column) {
var complement=this.av.getCodingComplement$();
var af=$I$(4).getAlignFrameFor$jalview_api_AlignViewportI(complement);
var fr2=af.getFeatureRenderer$();
var mf=fr2.findComplementFeaturesAtResidue$jalview_datamodel_SequenceI$I(seq, seq.findPosition$I(column - 1));
if (mf == null ) {
return null;
}var it=Clazz.new_($I$(5,1).c$$java_util_List,[mf.features]);
while (it.hasNext$()){
var sf=it.next$();
if (!fr2.featureGroupNotShown$jalview_datamodel_SequenceFeature(sf)) {
var col=fr2.getColour$jalview_datamodel_SequenceFeature(sf);
if (col != null ) {
return col;
}}}
return null;
});

C$.$static$=function(){C$.$static$=0;
C$.NO_TRANSPARENCY=$I$(1).getInstance$I$F(3, 1.0);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
