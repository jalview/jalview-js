(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.gui.FeatureRenderer','jalview.gui.SequenceRenderer','java.awt.BorderLayout','jalview.gui.PaintRefresher','java.awt.Color','jalview.renderer.ScaleRenderer','jalview.util.Comparison','java.awt.image.BufferedImage','java.awt.RenderingHints','jalview.gui.AnnotationPanel','java.awt.BasicStroke']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SeqCanvas", null, 'javax.swing.JPanel', 'jalview.viewmodel.ViewportListenerI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fr=null;
this.img=null;
this.av=null;
this.cursorX=0;
this.cursorY=0;
this.seqRdr=null;
this.fastPaint=false;
this.fastpainting=false;
this.annotations=null;
this.labelWidthEast=0;
this.labelWidthWest=0;
this.wrappedSpaceAboveAlignment=0;
this.wrappedRepeatHeightPx=0;
this.wrappedVisibleWidths=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.cursorX=0;
this.cursorY=0;
this.fastPaint=false;
this.fastpainting=false;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel', function (ap) {
Clazz.super_(C$, this,1);
this.av=ap.av;
this.fr=Clazz.new_($I$(1).c$$jalview_gui_AlignmentPanel,[ap]);
this.seqRdr=Clazz.new_($I$(2).c$$jalview_api_AlignViewportI,[this.av]);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3)));
$I$(4).Register$java_awt_Component$S(this, this.av.getSequenceSetId$());
this.setBackground$java_awt_Color($I$(5).white);
this.av.getRanges$().addPropertyChangeListener$jalview_viewmodel_ViewportListenerI(this);
}, 1);

Clazz.newMeth(C$, 'getSequenceRenderer$', function () {
return this.seqRdr;
});

Clazz.newMeth(C$, 'getFeatureRenderer$', function () {
return this.fr;
});

Clazz.newMeth(C$, 'drawNorthScale$java_awt_Graphics$I$I$I', function (g, startx, endx, ypos) {
var charHeight=this.av.getCharHeight$();
var charWidth=this.av.getCharWidth$();
g.setColor$java_awt_Color($I$(5).white);
g.fillRect$I$I$I$I(0, ypos - charHeight - (charHeight/2|0) , this.getWidth$(), (charHeight * 3/2|0) + 2);
g.setColor$java_awt_Color($I$(5).black);
var marks=Clazz.new_($I$(6)).calculateMarks$jalview_api_AlignViewportI$I$I(this.av, startx, endx);
for (var mark, $mark = marks.iterator$(); $mark.hasNext$()&&((mark=($mark.next$())),1);) {
var mpos=mark.column;
if (mpos < 0) {
continue;
}var mstring=mark.text;
if (mark.major) {
if (mstring != null ) {
g.drawString$S$I$I(mstring, mpos * charWidth, ypos - ((charHeight/2|0)));
}var xpos=(mpos * charWidth) + ((charWidth/2|0));
g.drawLine$I$I$I$I(xpos, (ypos + 2) - ((charHeight/2|0)), xpos, ypos - 2);
}}
}, p$1);

Clazz.newMeth(C$, 'drawVerticalScale$java_awt_Graphics$I$I$I$Z', function (g, startx, endx, ypos, left) {
var charHeight=this.av.getCharHeight$();
var charWidth=this.av.getCharWidth$();
var yPos=ypos + charHeight;
var startX=startx;
var endX=endx;
if (this.av.hasHiddenColumns$()) {
var hiddenColumns=this.av.getAlignment$().getHiddenColumns$();
startX=hiddenColumns.visibleToAbsoluteColumn$I(startx);
endX=hiddenColumns.visibleToAbsoluteColumn$I(endx);
}var fm=this.getFontMetrics$java_awt_Font(this.av.getFont$());
for (var i=0; i < this.av.getAlignment$().getHeight$(); i++) {
var seq=this.av.getAlignment$().getSequenceAt$I(i);
var index=left ? startX : endX;
var value=-1;
while (index >= startX && index <= endX ){
if (!$I$(7).isGap$C(seq.getCharAt$I(index))) {
value=seq.findPosition$I(index);
break;
}if (left) {
index++;
} else {
index--;
}}
g.setColor$java_awt_Color($I$(5).white);
var y=(yPos + (i * charHeight)) - ((charHeight/5|0));
g.fillRect$I$I$I$I(0, y - charHeight, left ? this.labelWidthWest : this.labelWidthEast, charHeight + 1);
if (value != -1) {
var labelSpace=left ? this.labelWidthWest : this.labelWidthEast;
labelSpace-=(charWidth/2|0);
var valueAsString=String.valueOf$I(value);
var labelLength=fm.stringWidth$S(valueAsString);
var xOffset=labelSpace - labelLength;
g.setColor$java_awt_Color($I$(5).black);
g.drawString$S$I$I(valueAsString, xOffset, y);
}}
});

Clazz.newMeth(C$, 'fastPaint$I$I', function (horizontal, vertical) {
if (this.fastpainting || this.img == null  ) {
return;
}this.fastpainting=true;
this.fastPaint=true;
try {
var charHeight=this.av.getCharHeight$();
var charWidth=this.av.getCharWidth$();
var ranges=this.av.getRanges$();
var startRes=ranges.getStartRes$();
var endRes=ranges.getEndRes$();
var startSeq=ranges.getStartSeq$();
var endSeq=ranges.getEndSeq$();
var transX=0;
var transY=0;
if (horizontal > 0) {
transX=(endRes - startRes - horizontal ) * charWidth;
startRes=endRes - horizontal;
} else if (horizontal < 0) {
endRes=startRes - horizontal;
}if (vertical > 0) {
startSeq=endSeq - vertical;
if (startSeq < ranges.getStartSeq$()) {
startSeq=ranges.getStartSeq$();
} else {
transY=this.img.getHeight$() - ((vertical + 1) * charHeight);
}} else if (vertical < 0) {
endSeq=startSeq - vertical;
if (endSeq > ranges.getEndSeq$()) {
endSeq=ranges.getEndSeq$();
}}var gg=this.img.getGraphics$();
gg.copyArea$I$I$I$I$I$I(horizontal * charWidth, vertical * charHeight, this.img.getWidth$(), this.img.getHeight$(), -horizontal * charWidth, -vertical * charHeight);

xxi = this.img
gg.translate$I$I(transX, transY);
this.drawPanel$java_awt_Graphics$I$I$I$I$I(gg, startRes, endRes, startSeq, endSeq, 0);
gg.translate$I$I(-transX, -transY);
gg.dispose$();
this.av.getAlignPanel$().repaint$();
} finally {
this.fastpainting=false;
}
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
var charHeight=this.av.getCharHeight$();
var charWidth=this.av.getCharWidth$();
var width=this.getWidth$();
var height=this.getHeight$();
width-=(width % charWidth);
height-=(height % charHeight);
if (width == 0 || height == 0 ) {
return;
}var ranges=this.av.getRanges$();
var startRes=ranges.getStartRes$();
var startSeq=ranges.getStartSeq$();
var endRes=ranges.getEndRes$();
var endSeq=ranges.getEndSeq$();
var vis;
var clip;
if (this.img != null  && (this.fastPaint || (vis=this.getVisibleRect$()).width != (clip=g.getClipBounds$()).width  || vis.height != clip.height ) ) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.img, 0, 0, this);
p$1.drawSelectionGroup$java_awt_Graphics2D$I$I$I$I.apply(this, [g, startRes, endRes, startSeq, endSeq]);
this.fastPaint=false;
} else {
if (this.img == null  || width != this.img.getWidth$()  || height != this.img.getHeight$() ) {
this.img=Clazz.new_($I$(8).c$$I$I$I,[width, height, 1]);
}var gg=this.img.getGraphics$();
gg.setFont$java_awt_Font(this.av.getFont$());
if (this.av.antiAlias) {
gg.setRenderingHint$java_awt_RenderingHints_Key$O($I$(9).KEY_ANTIALIASING, $I$(9).VALUE_ANTIALIAS_ON);
}gg.setColor$java_awt_Color($I$(5).white);
gg.fillRect$I$I$I$I(0, 0, this.img.getWidth$(), this.img.getHeight$());
if (this.av.getWrapAlignment$()) {
this.drawWrappedPanel$java_awt_Graphics$I$I$I(gg, width, height, ranges.getStartRes$());
} else {
this.drawPanel$java_awt_Graphics$I$I$I$I$I(gg, startRes, endRes, startSeq, endSeq, 0);
}p$1.drawSelectionGroup$java_awt_Graphics2D$I$I$I$I.apply(this, [gg, startRes, endRes, startSeq, endSeq]);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.img, 0, 0, this);
gg.dispose$();
}if (this.av.cursorMode) {
p$1.drawCursor$java_awt_Graphics$I$I$I$I.apply(this, [g, startRes, endRes, startSeq, endSeq]);
}});

Clazz.newMeth(C$, 'drawPanelForPrinting$java_awt_Graphics$I$I$I$I', function (g1, startRes, endRes, startSeq, endSeq) {
this.drawPanel$java_awt_Graphics$I$I$I$I$I(g1, startRes, endRes, startSeq, endSeq, 0);
p$1.drawSelectionGroup$java_awt_Graphics2D$I$I$I$I.apply(this, [g1, startRes, endRes, startSeq, endSeq]);
});

Clazz.newMeth(C$, 'drawWrappedPanelForPrinting$java_awt_Graphics$I$I$I', function (g, canvasWidth, canvasHeight, startRes) {
this.drawWrappedPanel$java_awt_Graphics$I$I$I(g, canvasWidth, canvasHeight, startRes);
var group=this.av.getSelectionGroup$();
if (group != null ) {
p$1.drawWrappedSelection$java_awt_Graphics2D$jalview_datamodel_SequenceGroup$I$I$I.apply(this, [g, group, canvasWidth, canvasHeight, startRes]);
}});

Clazz.newMeth(C$, 'getWrappedCanvasWidth$I', function (canvasWidth) {
var charWidth=this.av.getCharWidth$();
var fm=this.getFontMetrics$java_awt_Font(this.av.getFont$());
var labelWidth=0;
if (this.av.getScaleRightWrapped$() || this.av.getScaleLeftWrapped$() ) {
labelWidth=this.getLabelWidth$java_awt_FontMetrics(fm);
}this.labelWidthEast=this.av.getScaleRightWrapped$() ? labelWidth : 0;
this.labelWidthWest=this.av.getScaleLeftWrapped$() ? labelWidth : 0;
return ((canvasWidth - this.labelWidthEast - this.labelWidthWest )/charWidth|0);
});

Clazz.newMeth(C$, 'getLabelWidth$java_awt_FontMetrics', function (fm) {
var maxWidth=0;
var alignment=this.av.getAlignment$();
for (var i=0; i < alignment.getHeight$(); i++) {
maxWidth=Math.max(maxWidth, alignment.getSequenceAt$I(i).getEnd$());
}
var length=0;
for (var i=maxWidth; i > 0; i=(i/(10)|0)) {
length++;
}
return fm.stringWidth$S("0000000000".substring$I$I(0, length)) + this.av.getCharWidth$();
});

Clazz.newMeth(C$, 'drawWrappedPanel$java_awt_Graphics$I$I$I', function (g, canvasWidth, canvasHeight, startColumn) {
var wrappedWidthInResidues=this.calculateWrappedGeometry$I$I(canvasWidth, canvasHeight);
this.av.setWrappedWidth$I(wrappedWidthInResidues);
var ranges=this.av.getRanges$();
ranges.setViewportStartAndWidth$I$I(startColumn, wrappedWidthInResidues);
this.calculateWrappedGeometry$I$I(canvasWidth, canvasHeight);
var ypos=this.wrappedSpaceAboveAlignment;
var maxWidth=ranges.getVisibleAlignmentWidth$();
var start=startColumn;
var currentWidth=0;
while ((currentWidth < this.wrappedVisibleWidths) && (start < maxWidth) ){
var endColumn=Math.min(maxWidth, start + wrappedWidthInResidues - 1);
this.drawWrappedWidth$java_awt_Graphics$I$I$I$I(g, ypos, start, endColumn, canvasHeight);
ypos+=this.wrappedRepeatHeightPx;
start+=wrappedWidthInResidues;
currentWidth++;
}
this.drawWrappedDecorators$java_awt_Graphics$I(g, startColumn);
});

Clazz.newMeth(C$, 'calculateWrappedGeometry$I$I', function (canvasWidth, canvasHeight) {
var charHeight=this.av.getCharHeight$();
this.wrappedSpaceAboveAlignment=charHeight * (this.av.getScaleAboveWrapped$() ? 2 : 1);
this.wrappedRepeatHeightPx=this.wrappedSpaceAboveAlignment;
this.wrappedRepeatHeightPx+=this.av.getAlignment$().getHeight$() * charHeight;
if (this.av.isShowAnnotation$()) {
this.wrappedRepeatHeightPx+=this.getAnnotationHeight$();
this.wrappedRepeatHeightPx+=3;
}var ranges=this.av.getRanges$();
this.wrappedVisibleWidths=(canvasHeight/this.wrappedRepeatHeightPx|0);
var remainder=canvasHeight % this.wrappedRepeatHeightPx;
if (remainder >= (this.wrappedSpaceAboveAlignment + charHeight)) {
this.wrappedVisibleWidths++;
}var wrappedWidthInResidues=this.getWrappedCanvasWidth$I(canvasWidth);
var xMax=ranges.getVisibleAlignmentWidth$();
var startToEnd=xMax - ranges.getStartRes$();
var maxWidths=(startToEnd/wrappedWidthInResidues|0);
if (startToEnd % wrappedWidthInResidues > 0) {
maxWidths++;
}this.wrappedVisibleWidths=Math.min(this.wrappedVisibleWidths, maxWidths);
return wrappedWidthInResidues;
});

Clazz.newMeth(C$, 'drawWrappedWidth$java_awt_Graphics$I$I$I$I', function (g, ypos, startColumn, endColumn, canvasHeight) {
var ranges=this.av.getRanges$();
var viewportWidth=ranges.getViewportWidth$();
var endx=Math.min(startColumn + viewportWidth - 1, endColumn);
var charWidth=this.av.getCharWidth$();
var xOffset=this.labelWidthWest + ((startColumn - ranges.getStartRes$()) % viewportWidth) * charWidth;
g.translate$I$I(xOffset, 0);
g.setColor$java_awt_Color($I$(5).white);
g.fillRect$I$I$I$I(0, ypos, (endx - startColumn + 1) * charWidth, this.wrappedRepeatHeightPx);
this.drawPanel$java_awt_Graphics$I$I$I$I$I(g, startColumn, endx, 0, this.av.getAlignment$().getHeight$() - 1, ypos);
var cHeight=this.av.getAlignment$().getHeight$() * this.av.getCharHeight$();
if (this.av.isShowAnnotation$()) {
var yShift=cHeight + ypos + 3 ;
g.translate$I$I(0, yShift);
if (this.annotations == null ) {
this.annotations=Clazz.new_($I$(10).c$$jalview_gui_AlignViewport,[this.av]);
}this.annotations.renderer.drawComponent$jalview_renderer_AwtRenderPanelI$jalview_api_AlignViewportI$java_awt_Graphics$I$I$I(this.annotations, this.av, g, -1, startColumn, endx + 1);
g.translate$I$I(0, -yShift);
}g.translate$I$I(-xOffset, 0);
});

Clazz.newMeth(C$, 'drawWrappedDecorators$java_awt_Graphics$I', function (g, startColumn) {
var charWidth=this.av.getCharWidth$();
g.setFont$java_awt_Font(this.av.getFont$());
g.setColor$java_awt_Color($I$(5).black);
var ypos=this.wrappedSpaceAboveAlignment;
var ranges=this.av.getRanges$();
var viewportWidth=ranges.getViewportWidth$();
var maxWidth=ranges.getVisibleAlignmentWidth$();
var widthsDrawn=0;
var startCol=startColumn;
while (widthsDrawn < this.wrappedVisibleWidths){
var endColumn=Math.min(maxWidth, startCol + viewportWidth - 1);
if (this.av.getScaleLeftWrapped$()) {
this.drawVerticalScale$java_awt_Graphics$I$I$I$Z(g, startCol, endColumn - 1, ypos, true);
}if (this.av.getScaleRightWrapped$()) {
var x=this.labelWidthWest + viewportWidth * charWidth;
g.translate$I$I(x, 0);
this.drawVerticalScale$java_awt_Graphics$I$I$I$Z(g, startCol, endColumn, ypos, false);
g.translate$I$I(-x, 0);
}g.translate$I$I(this.labelWidthWest, 0);
g.setColor$java_awt_Color($I$(5).white);
g.fillRect$I$I$I$I(0, ypos - this.wrappedSpaceAboveAlignment, viewportWidth * charWidth + this.labelWidthWest, this.wrappedSpaceAboveAlignment);
g.setColor$java_awt_Color($I$(5).black);
g.translate$I$I(-this.labelWidthWest, 0);
g.translate$I$I(this.labelWidthWest, 0);
if (this.av.getScaleAboveWrapped$()) {
p$1.drawNorthScale$java_awt_Graphics$I$I$I.apply(this, [g, startCol, endColumn, ypos]);
}if (this.av.hasHiddenColumns$() && this.av.getShowHiddenMarkers$() ) {
this.drawHiddenColumnMarkers$java_awt_Graphics$I$I$I(g, ypos, startCol, endColumn);
}g.translate$I$I(-this.labelWidthWest, 0);
ypos+=this.wrappedRepeatHeightPx;
startCol+=viewportWidth;
widthsDrawn++;
}
});

Clazz.newMeth(C$, 'drawHiddenColumnMarkers$java_awt_Graphics$I$I$I', function (g, ypos, startColumn, endColumn) {
var charHeight=this.av.getCharHeight$();
var charWidth=this.av.getCharWidth$();
g.setColor$java_awt_Color($I$(5).blue);
var res;
var hidden=this.av.getAlignment$().getHiddenColumns$();
var it=hidden.getStartRegionIterator$I$I(startColumn, endColumn);
while (it.hasNext$()){
res=(it.next$()).intValue$() - startColumn;
if (res < 0 || res > endColumn - startColumn + 1 ) {
continue;
}var xMiddle=res * charWidth;
var xPoints=Clazz.array(Integer.TYPE, -1, [xMiddle - (charHeight/4|0), xMiddle + (charHeight/4|0), xMiddle]);
var yTop=ypos - ((charHeight/2|0));
var yPoints=Clazz.array(Integer.TYPE, -1, [yTop, yTop, yTop + 8]);
g.fillPolygon$IA$IA$I(xPoints, yPoints, 3);
}
});

Clazz.newMeth(C$, 'drawWrappedSelection$java_awt_Graphics2D$jalview_datamodel_SequenceGroup$I$I$I', function (g, group, canvasWidth, canvasHeight, startRes) {
var charHeight=this.av.getCharHeight$();
var charWidth=this.av.getCharWidth$();
var hgap=charHeight;
if (this.av.getScaleAboveWrapped$()) {
hgap+=charHeight;
}var cWidth=((canvasWidth - this.labelWidthEast - this.labelWidthWest )/charWidth|0);
var cHeight=this.av.getAlignment$().getHeight$() * charHeight;
var startx=startRes;
var endx;
var ypos=hgap;
var maxwidth=this.av.getAlignment$().getVisibleWidth$();
g.setStroke$java_awt_Stroke(Clazz.new_($I$(11).c$$F$I$I$F$FA$F,[1, 0, 1, 3.0, Clazz.array(Float.TYPE, -1, [5.0, 3.0]), 0.0]));
g.setColor$java_awt_Color($I$(5).RED);
while ((ypos <= canvasHeight) && (startx < maxwidth) ){
endx=startx + cWidth - 1;
if (endx > maxwidth) {
endx=maxwidth;
}g.translate$I$I(this.labelWidthWest, 0);
p$1.drawUnwrappedSelection$java_awt_Graphics2D$jalview_datamodel_SequenceGroup$I$I$I$I$I.apply(this, [g, group, startx, endx, 0, this.av.getAlignment$().getHeight$() - 1, ypos]);
g.translate$I$I(-this.labelWidthWest, 0);
ypos+=cHeight + this.getAnnotationHeight$() + hgap ;
startx+=cWidth;
}
g.setStroke$java_awt_Stroke(Clazz.new_($I$(11)));
}, p$1);

Clazz.newMeth(C$, 'getAnnotationHeight$', function () {
if (!this.av.isShowAnnotation$()) {
return 0;
}if (this.annotations == null ) {
this.annotations=Clazz.new_($I$(10).c$$jalview_gui_AlignViewport,[this.av]);
}return this.annotations.adjustPanelHeight$();
});

Clazz.newMeth(C$, 'drawPanel$java_awt_Graphics$I$I$I$I$I', function (g1, startRes, endRes, startSeq, endSeq, yOffset) {
var charHeight=this.av.getCharHeight$();
var charWidth=this.av.getCharWidth$();
if (!this.av.hasHiddenColumns$()) {
p$1.draw$java_awt_Graphics$I$I$I$I$I.apply(this, [g1, startRes, endRes, startSeq, endSeq, yOffset]);
} else {
var screenY=0;
var blockStart;
var blockEnd;
var hidden=this.av.getAlignment$().getHiddenColumns$();
var regions=hidden.getVisContigsIterator$I$I$Z(startRes, endRes + 1, true);
while (regions.hasNext$()){
var region=regions.next$();
blockEnd=region[1];
blockStart=region[0];
g1.translate$I$I(screenY * charWidth, 0);
p$1.draw$java_awt_Graphics$I$I$I$I$I.apply(this, [g1, blockStart, blockEnd, startSeq, endSeq, yOffset]);
if (this.av.getShowHiddenMarkers$() && (regions.hasNext$() || regions.endsAtHidden$() ) ) {
g1.setColor$java_awt_Color($I$(5).blue);
g1.drawLine$I$I$I$I((blockEnd - blockStart + 1) * charWidth - 1, 0 + yOffset, (blockEnd - blockStart + 1) * charWidth - 1, (endSeq - startSeq + 1) * charHeight + yOffset);
}g1.translate$I$I(-screenY * charWidth, 0);
screenY+=blockEnd - blockStart + 1;
}
}});

Clazz.newMeth(C$, 'draw$java_awt_Graphics$I$I$I$I$I', function (g, startRes, endRes, startSeq, endSeq, offset) {
var charHeight=this.av.getCharHeight$();
var charWidth=this.av.getCharWidth$();
g.setFont$java_awt_Font(this.av.getFont$());
this.seqRdr.prepare$java_awt_Graphics$Z(g, this.av.isRenderGaps$());
var nextSeq;
for (var i=startSeq; i <= endSeq; i++) {
nextSeq=this.av.getAlignment$().getSequenceAt$I(i);
if (nextSeq == null ) {
continue;
}this.seqRdr.drawSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroupA$I$I$I(nextSeq, this.av.getAlignment$().findAllGroups$jalview_datamodel_SequenceI(nextSeq), startRes, endRes, offset + ((i - startSeq) * charHeight));
if (this.av.isShowSequenceFeatures$()) {
this.fr.drawSequence$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$I$Z(g, nextSeq, startRes, endRes, offset + ((i - startSeq) * charHeight), false);
}if (this.av.hasSearchResults$()) {
var searchResults=this.av.getSearchResults$();
var visibleResults=searchResults.getResults$jalview_datamodel_SequenceI$I$I(nextSeq, startRes, endRes);
if (visibleResults != null ) {
for (var r=0; r < visibleResults.length; r+=2) {
this.seqRdr.drawHighlightedText$jalview_datamodel_SequenceI$I$I$I$I(nextSeq, visibleResults[r], visibleResults[r + 1], (visibleResults[r] - startRes) * charWidth, offset + ((i - startSeq) * charHeight));
}
}}}
if (this.av.getSelectionGroup$() != null  || this.av.getAlignment$().getGroups$().size$() > 0 ) {
this.drawGroupsBoundaries$java_awt_Graphics$I$I$I$I$I(g, startRes, endRes, startSeq, endSeq, offset);
}}, p$1);

Clazz.newMeth(C$, 'drawGroupsBoundaries$java_awt_Graphics$I$I$I$I$I', function (g1, startRes, endRes, startSeq, endSeq, offset) {
var g=g1;
var group=null;
var groupIndex=-1;
if (this.av.getAlignment$().getGroups$().size$() > 0) {
group=this.av.getAlignment$().getGroups$().get$I(0);
groupIndex=0;
}if (group != null ) {
do {
g.setColor$java_awt_Color(group.getOutlineColour$());
p$1.drawPartialGroupOutline$java_awt_Graphics2D$jalview_datamodel_SequenceGroup$I$I$I$I$I.apply(this, [g, group, startRes, endRes, startSeq, endSeq, offset]);
groupIndex++;
if (groupIndex >= this.av.getAlignment$().getGroups$().size$()) {
break;
}group=this.av.getAlignment$().getGroups$().get$I(groupIndex);
} while (groupIndex < this.av.getAlignment$().getGroups$().size$());
}});

Clazz.newMeth(C$, 'drawSelectionGroup$java_awt_Graphics2D$I$I$I$I', function (g, startRes, endRes, startSeq, endSeq) {
var group=this.av.getSelectionGroup$();
if (group == null ) {
return;
}g.setStroke$java_awt_Stroke(Clazz.new_($I$(11).c$$F$I$I$F$FA$F,[1, 0, 1, 3.0, Clazz.array(Float.TYPE, -1, [5.0, 3.0]), 0.0]));
g.setColor$java_awt_Color($I$(5).RED);
if (!this.av.getWrapAlignment$()) {
p$1.drawUnwrappedSelection$java_awt_Graphics2D$jalview_datamodel_SequenceGroup$I$I$I$I$I.apply(this, [g, group, startRes, endRes, startSeq, endSeq, 0]);
} else {
p$1.drawWrappedSelection$java_awt_Graphics2D$jalview_datamodel_SequenceGroup$I$I$I.apply(this, [g, group, this.getWidth$(), this.getHeight$(), this.av.getRanges$().getStartRes$()]);
}g.setStroke$java_awt_Stroke(Clazz.new_($I$(11)));
}, p$1);

Clazz.newMeth(C$, 'drawCursor$java_awt_Graphics$I$I$I$I', function (g, startRes, endRes, startSeq, endSeq) {
var cursor_ypos=this.cursorY;
if (cursor_ypos >= startSeq && cursor_ypos <= endSeq ) {
var yoffset=0;
var xoffset=0;
var startx=startRes;
var endx=endRes;
var cursor_xpos=this.av.getAlignment$().getHiddenColumns$().absoluteToVisibleColumn$I(this.cursorX);
if (this.av.getAlignment$().getHiddenColumns$().isVisible$I(this.cursorX)) {
if (this.av.getWrapAlignment$()) {
var charHeight=this.av.getCharHeight$();
var charWidth=this.av.getCharWidth$();
var canvasWidth=this.getWidth$();
var canvasHeight=this.getHeight$();
var hgap=charHeight;
if (this.av.getScaleAboveWrapped$()) {
hgap+=charHeight;
}var cWidth=((canvasWidth - this.labelWidthEast - this.labelWidthWest )/charWidth|0);
var cHeight=this.av.getAlignment$().getHeight$() * charHeight;
endx=startx + cWidth - 1;
var ypos=hgap;
while ((ypos <= canvasHeight) && (endx < cursor_xpos) ){
ypos+=cHeight + this.getAnnotationHeight$() + hgap ;
startx+=cWidth;
endx=startx + cWidth - 1;
}
yoffset=ypos;
xoffset=this.labelWidthWest;
}if (cursor_xpos >= startx && cursor_xpos <= endx ) {
var seq=this.av.getAlignment$().getSequenceAt$I(this.cursorY);
var s=seq.getCharAt$I(this.cursorX);
this.seqRdr.drawCursor$java_awt_Graphics$C$I$I(g, s, xoffset + (cursor_xpos - startx) * this.av.getCharWidth$(), yoffset + (cursor_ypos - startSeq) * this.av.getCharHeight$());
}}}}, p$1);

Clazz.newMeth(C$, 'drawUnwrappedSelection$java_awt_Graphics2D$jalview_datamodel_SequenceGroup$I$I$I$I$I', function (g, group, startRes, endRes, startSeq, endSeq, offset) {
var charWidth=this.av.getCharWidth$();
if (!this.av.hasHiddenColumns$()) {
p$1.drawPartialGroupOutline$java_awt_Graphics2D$jalview_datamodel_SequenceGroup$I$I$I$I$I.apply(this, [g, group, startRes, endRes, startSeq, endSeq, offset]);
} else {
var screenY=0;
var blockStart;
var blockEnd;
var hidden=this.av.getAlignment$().getHiddenColumns$();
var regions=hidden.getVisContigsIterator$I$I$Z(startRes, endRes + 1, true);
while (regions.hasNext$()){
var region=regions.next$();
blockEnd=region[1];
blockStart=region[0];
g.translate$I$I(screenY * charWidth, 0);
p$1.drawPartialGroupOutline$java_awt_Graphics2D$jalview_datamodel_SequenceGroup$I$I$I$I$I.apply(this, [g, group, blockStart, blockEnd, startSeq, endSeq, offset]);
g.translate$I$I(-screenY * charWidth, 0);
screenY+=blockEnd - blockStart + 1;
}
}}, p$1);

Clazz.newMeth(C$, 'drawPartialGroupOutline$java_awt_Graphics2D$jalview_datamodel_SequenceGroup$I$I$I$I$I', function (g, group, startRes, endRes, startSeq, endSeq, verticalOffset) {
var charHeight=this.av.getCharHeight$();
var charWidth=this.av.getCharWidth$();
var visWidth=(endRes - startRes + 1) * charWidth;
var oldY=-1;
var i=0;
var inGroup=false;
var top=-1;
var bottom=-1;
var sy=-1;
var seqs=group.getSequences$java_util_Map(null);
var sx=(group.getStartRes$() - startRes) * charWidth;
var xwidth=(((group.getEndRes$() + 1) - group.getStartRes$()) * charWidth) - 1;
if (!(sx + xwidth < 0 || sx > visWidth )) {
for (i=startSeq; i <= endSeq; i++) {
sy=verticalOffset + (i - startSeq) * charHeight;
if ((sx <= (endRes - startRes) * charWidth) && seqs.contains$O(this.av.getAlignment$().getSequenceAt$I(i)) ) {
if ((bottom == -1) && !seqs.contains$O(this.av.getAlignment$().getSequenceAt$I(i + 1)) ) {
bottom=sy + charHeight;
}if (!inGroup) {
if (((top == -1) && (i == 0) ) || !seqs.contains$O(this.av.getAlignment$().getSequenceAt$I(i - 1)) ) {
top=sy;
}oldY=sy;
inGroup=true;
}} else if (inGroup) {
p$1.drawVerticals$java_awt_Graphics2D$I$I$I$I$I.apply(this, [g, sx, xwidth, visWidth, oldY, sy]);
p$1.drawHorizontals$java_awt_Graphics2D$I$I$I$I$I.apply(this, [g, sx, xwidth, visWidth, top, bottom]);
top=-1;
bottom=-1;
inGroup=false;
}}
if (inGroup) {
sy=verticalOffset + ((i - startSeq) * charHeight);
p$1.drawVerticals$java_awt_Graphics2D$I$I$I$I$I.apply(this, [g, sx, xwidth, visWidth, oldY, sy]);
p$1.drawHorizontals$java_awt_Graphics2D$I$I$I$I$I.apply(this, [g, sx, xwidth, visWidth, top, bottom]);
}}}, p$1);

Clazz.newMeth(C$, 'drawHorizontals$java_awt_Graphics2D$I$I$I$I$I', function (g, sx, xwidth, visWidth, top, bottom) {
var width=xwidth;
var startx=sx;
if (startx < 0) {
width+=startx;
startx=0;
}if (startx + width >= visWidth) {
width=visWidth - startx;
}if (top != -1) {
g.drawLine$I$I$I$I(startx, top, startx + width, top);
}if (bottom != -1) {
g.drawLine$I$I$I$I(startx, bottom - 1, startx + width, bottom - 1);
}}, p$1);

Clazz.newMeth(C$, 'drawVerticals$java_awt_Graphics2D$I$I$I$I$I', function (g, sx, xwidth, visWidth, oldY, sy) {
if (sx >= 0 && sx < visWidth ) {
g.drawLine$I$I$I$I(sx, oldY, sx, sy);
}if (sx + xwidth < visWidth) {
g.drawLine$I$I$I$I(sx + xwidth, oldY, sx + xwidth, sy);
}}, p$1);

Clazz.newMeth(C$, 'highlightSearchResults$jalview_datamodel_SearchResultsI', function (results) {
return this.highlightSearchResults$jalview_datamodel_SearchResultsI$Z(results, false);
});

Clazz.newMeth(C$, 'highlightSearchResults$jalview_datamodel_SearchResultsI$Z', function (results, doFastPaint) {
if (this.fastpainting) {
return false;
}var wrapped=this.av.getWrapAlignment$();
try {
this.fastPaint=doFastPaint;
this.fastpainting=this.fastPaint;
var previous=this.av.getSearchResults$();
this.av.setSearchResults$jalview_datamodel_SearchResultsI(results);
var redrawn=false;
var drawn=false;
if (wrapped) {
redrawn=this.drawMappedPositionsWrapped$jalview_datamodel_SearchResultsI(previous);
drawn=this.drawMappedPositionsWrapped$jalview_datamodel_SearchResultsI(results);
redrawn|=drawn;
} else {
redrawn=this.drawMappedPositions$jalview_datamodel_SearchResultsI(previous);
drawn=this.drawMappedPositions$jalview_datamodel_SearchResultsI(results);
redrawn|=drawn;
}if (redrawn) {
this.repaint$();
}return drawn;
} finally {
this.fastpainting=false;
}
});

Clazz.newMeth(C$, 'drawMappedPositions$jalview_datamodel_SearchResultsI', function (results) {
if ((results == null ) || (this.img == null ) ) {
return false;
}var firstSeq=2147483647;
var lastSeq=-1;
var firstCol=2147483647;
var lastCol=-1;
var matchFound=false;
var ranges=this.av.getRanges$();
var firstVisibleColumn=ranges.getStartRes$();
var lastVisibleColumn=ranges.getEndRes$();
var alignment=this.av.getAlignment$();
if (this.av.hasHiddenColumns$()) {
firstVisibleColumn=alignment.getHiddenColumns$().visibleToAbsoluteColumn$I(firstVisibleColumn);
lastVisibleColumn=alignment.getHiddenColumns$().visibleToAbsoluteColumn$I(lastVisibleColumn);
}for (var seqNo=ranges.getStartSeq$(); seqNo <= ranges.getEndSeq$(); seqNo++) {
var seq=alignment.getSequenceAt$I(seqNo);
var visibleResults=results.getResults$jalview_datamodel_SequenceI$I$I(seq, firstVisibleColumn, lastVisibleColumn);
if (visibleResults != null ) {
for (var i=0; i < visibleResults.length - 1; i+=2) {
var firstMatchedColumn=visibleResults[i];
var lastMatchedColumn=visibleResults[i + 1];
if (firstMatchedColumn <= lastVisibleColumn && lastMatchedColumn >= firstVisibleColumn ) {
matchFound=true;
firstSeq=Math.min(firstSeq, seqNo);
lastSeq=Math.max(lastSeq, seqNo);
firstMatchedColumn=Math.max(firstMatchedColumn, firstVisibleColumn);
lastMatchedColumn=Math.min(lastMatchedColumn, lastVisibleColumn);
firstCol=Math.min(firstCol, firstMatchedColumn);
lastCol=Math.max(lastCol, lastMatchedColumn);
}}
}}
if (matchFound) {
if (this.av.hasHiddenColumns$()) {
firstCol=alignment.getHiddenColumns$().absoluteToVisibleColumn$I(firstCol);
lastCol=alignment.getHiddenColumns$().absoluteToVisibleColumn$I(lastCol);
}var transX=(firstCol - ranges.getStartRes$()) * this.av.getCharWidth$();
var transY=(firstSeq - ranges.getStartSeq$()) * this.av.getCharHeight$();
var gg=this.img.getGraphics$();
gg.translate$I$I(transX, transY);
this.drawPanel$java_awt_Graphics$I$I$I$I$I(gg, firstCol, lastCol, firstSeq, lastSeq, 0);
gg.translate$I$I(-transX, -transY);
gg.dispose$();
}return matchFound;
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
var eventName=evt.getPropertyName$();
if (eventName.equals$O("Sequence group changed")) {
this.fastPaint=true;
this.repaint$();
return;
} else if (eventName.equals$O("move_viewport")) {
this.fastPaint=false;
this.repaint$();
return;
}var scrollX=0;
if (eventName.equals$O("startres") || eventName.equals$O("startresandseq") ) {
if (eventName.equals$O("startres")) {
scrollX=((evt.getNewValue$()).objectValue$()|0) - ((evt.getOldValue$()).objectValue$()|0);
} else {
scrollX=(evt.getNewValue$())[0] - (evt.getOldValue$())[0];
}var vpRanges=this.av.getRanges$();
var range=vpRanges.getEndRes$() - vpRanges.getStartRes$() + 1;
if (scrollX > range) {
scrollX=range;
} else if (scrollX < -range) {
scrollX=-range;
}}if (eventName.equals$O("startres")) {
if (this.av.getWrapAlignment$()) {
this.fastPaintWrapped$I(scrollX);
} else {
this.fastPaint$I$I(scrollX, 0);
}} else if (eventName.equals$O("startseq")) {
this.fastPaint$I$I(0, ((evt.getNewValue$()).objectValue$()|0) - ((evt.getOldValue$()).objectValue$()|0));
} else if (eventName.equals$O("startresandseq")) {
if (this.av.getWrapAlignment$()) {
this.fastPaintWrapped$I(scrollX);
} else {
this.fastPaint$I$I(scrollX, 0);
}} else if (eventName.equals$O("startseq")) {
this.fastPaint$I$I(0, ((evt.getNewValue$()).objectValue$()|0) - ((evt.getOldValue$()).objectValue$()|0));
} else if (eventName.equals$O("startresandseq")) {
if (this.av.getWrapAlignment$()) {
this.fastPaintWrapped$I(scrollX);
}}});

Clazz.newMeth(C$, 'fastPaintWrapped$I', function (scrollX) {
var ranges=this.av.getRanges$();
if (Math.abs(scrollX) >= ranges.getViewportWidth$()) {
this.fastPaint=false;
this.repaint$();
return;
}if (this.fastpainting || this.img == null  ) {
return;
}this.fastPaint=true;
this.fastpainting=true;
try {
var gg=this.img.getGraphics$();
this.calculateWrappedGeometry$I$I(this.getWidth$(), this.getHeight$());
this.shiftWrappedAlignment$I(-scrollX);
if (scrollX < 0) {
var startRes=ranges.getStartRes$();
this.drawWrappedWidth$java_awt_Graphics$I$I$I$I(gg, this.wrappedSpaceAboveAlignment, startRes, startRes - scrollX - 1 , this.getHeight$());
} else {
this.fastPaintWrappedAddRight$I(scrollX);
}this.drawWrappedDecorators$java_awt_Graphics$I(gg, ranges.getStartRes$());
gg.dispose$();
this.repaint$();
} finally {
this.fastpainting=false;
}
});

Clazz.newMeth(C$, 'fastPaintWrappedAddRight$I', function (columns) {
if (columns == 0) {
return;
}var gg=this.img.getGraphics$();
var ranges=this.av.getRanges$();
var viewportWidth=ranges.getViewportWidth$();
var charWidth=this.av.getCharWidth$();
var visibleWidths=this.wrappedVisibleWidths;
var canvasHeight=this.getHeight$();
var lastWidthPartHeight=(this.wrappedVisibleWidths * this.wrappedRepeatHeightPx) > canvasHeight;
if (lastWidthPartHeight) {
var widthsAbove=Math.max(0, visibleWidths - 2);
var ypos=this.wrappedRepeatHeightPx * widthsAbove + this.wrappedSpaceAboveAlignment;
var endRes=ranges.getEndRes$();
endRes+=widthsAbove * viewportWidth;
var startRes=endRes - columns;
var xOffset=((startRes - ranges.getStartRes$()) % viewportWidth) * charWidth;
gg.translate$I$I(xOffset, 0);
gg.setColor$java_awt_Color($I$(5).white);
gg.fillRect$I$I$I$I(this.labelWidthWest, ypos, (endRes - startRes + 1) * charWidth, this.wrappedRepeatHeightPx);
gg.translate$I$I(-xOffset, 0);
this.drawWrappedWidth$java_awt_Graphics$I$I$I$I(gg, ypos, startRes, endRes, canvasHeight);
}var widthsAbove=visibleWidths - 1;
var ypos=this.wrappedRepeatHeightPx * widthsAbove + this.wrappedSpaceAboveAlignment;
var endRes=ranges.getEndRes$();
endRes+=widthsAbove * viewportWidth;
var startRes=endRes - columns + 1;
var xOffset=((startRes - ranges.getStartRes$()) % viewportWidth) * charWidth;
gg.translate$I$I(xOffset, 0);
gg.setColor$java_awt_Color($I$(5).white);
var width=viewportWidth * charWidth - xOffset;
gg.fillRect$I$I$I$I(this.labelWidthWest, ypos, width, this.wrappedRepeatHeightPx);
gg.translate$I$I(-xOffset, 0);
gg.setFont$java_awt_Font(this.av.getFont$());
gg.setColor$java_awt_Color($I$(5).black);
if (startRes < ranges.getVisibleAlignmentWidth$()) {
this.drawWrappedWidth$java_awt_Graphics$I$I$I$I(gg, ypos, startRes, endRes, canvasHeight);
}var heightBelow=canvasHeight - visibleWidths * this.wrappedRepeatHeightPx;
if (heightBelow > 0) {
gg.setColor$java_awt_Color($I$(5).white);
gg.fillRect$I$I$I$I(0, canvasHeight - heightBelow, this.getWidth$(), heightBelow);
}gg.dispose$();
});

Clazz.newMeth(C$, 'shiftWrappedAlignment$I', function (positions) {
if (positions == 0) {
return;
}var gg=this.img.getGraphics$();
var charWidth=this.av.getCharWidth$();
var canvasHeight=this.getHeight$();
var ranges=this.av.getRanges$();
var viewportWidth=ranges.getViewportWidth$();
var widthToCopy=(ranges.getViewportWidth$() - Math.abs(positions)) * charWidth;
var heightToCopy=this.wrappedRepeatHeightPx - this.wrappedSpaceAboveAlignment;
var xMax=ranges.getVisibleAlignmentWidth$();
if (positions > 0) {
var y=(canvasHeight/this.wrappedRepeatHeightPx|0) * this.wrappedRepeatHeightPx;
y+=this.wrappedSpaceAboveAlignment;
var copyFromLeftStart=this.labelWidthWest;
var copyFromRightStart=copyFromLeftStart + widthToCopy;
while (y >= 0){
gg.copyArea$I$I$I$I$I$I(copyFromLeftStart, y, widthToCopy, heightToCopy, positions * charWidth, 0);
if (y > 0) {
gg.copyArea$I$I$I$I$I$I(copyFromRightStart, y - this.wrappedRepeatHeightPx, positions * charWidth, heightToCopy, -widthToCopy, this.wrappedRepeatHeightPx);
}y-=this.wrappedRepeatHeightPx;
}
} else {
var xpos=this.av.getRanges$().getStartRes$();
var y=this.wrappedSpaceAboveAlignment;
var copyFromRightStart=this.labelWidthWest - positions * charWidth;
while (y < canvasHeight){
gg.copyArea$I$I$I$I$I$I(copyFromRightStart, y, widthToCopy, heightToCopy, positions * charWidth, 0);
if (y + this.wrappedRepeatHeightPx < canvasHeight - this.wrappedRepeatHeightPx && (xpos + viewportWidth <= xMax) ) {
gg.copyArea$I$I$I$I$I$I(this.labelWidthWest, y + this.wrappedRepeatHeightPx, -positions * charWidth, heightToCopy, widthToCopy, -this.wrappedRepeatHeightPx);
}y+=this.wrappedRepeatHeightPx;
xpos+=viewportWidth;
}
}gg.dispose$();
});

Clazz.newMeth(C$, 'drawMappedPositionsWrapped$jalview_datamodel_SearchResultsI', function (results) {
if ((results == null ) || (this.img == null ) ) {
return false;
}var charHeight=this.av.getCharHeight$();
var matchFound=false;
this.calculateWrappedGeometry$I$I(this.getWidth$(), this.getHeight$());
var wrappedWidth=this.av.getWrappedWidth$();
var wrappedHeight=this.wrappedRepeatHeightPx;
var ranges=this.av.getRanges$();
var canvasHeight=this.getHeight$();
var repeats=(canvasHeight/wrappedHeight|0);
if ((canvasHeight/wrappedHeight|0) > 0) {
repeats++;
}var firstVisibleColumn=ranges.getStartRes$();
var lastVisibleColumn=ranges.getStartRes$() + repeats * ranges.getViewportWidth$() - 1;
var alignment=this.av.getAlignment$();
if (this.av.hasHiddenColumns$()) {
firstVisibleColumn=alignment.getHiddenColumns$().visibleToAbsoluteColumn$I(firstVisibleColumn);
lastVisibleColumn=alignment.getHiddenColumns$().visibleToAbsoluteColumn$I(lastVisibleColumn);
}var gapHeight=charHeight * (this.av.getScaleAboveWrapped$() ? 2 : 1);
var gg=this.img.getGraphics$();
for (var seqNo=ranges.getStartSeq$(); seqNo <= ranges.getEndSeq$(); seqNo++) {
var seq=alignment.getSequenceAt$I(seqNo);
var visibleResults=results.getResults$jalview_datamodel_SequenceI$I$I(seq, firstVisibleColumn, lastVisibleColumn);
if (visibleResults != null ) {
for (var i=0; i < visibleResults.length - 1; i+=2) {
var firstMatchedColumn=visibleResults[i];
var lastMatchedColumn=visibleResults[i + 1];
if (firstMatchedColumn <= lastVisibleColumn && lastMatchedColumn >= firstVisibleColumn ) {
firstMatchedColumn=Math.max(firstMatchedColumn, firstVisibleColumn);
lastMatchedColumn=Math.min(lastMatchedColumn, lastVisibleColumn);
for (var mappedPos=firstMatchedColumn; mappedPos <= lastMatchedColumn; mappedPos++) {
var displayColumn=mappedPos;
if (this.av.hasHiddenColumns$()) {
displayColumn=alignment.getHiddenColumns$().absoluteToVisibleColumn$I(displayColumn);
}var transX=this.labelWidthWest + ((displayColumn - ranges.getStartRes$()) % wrappedWidth) * this.av.getCharWidth$();
var transY=gapHeight;
transY+=((displayColumn - ranges.getStartRes$())/wrappedWidth|0) * wrappedHeight;
transY+=(seqNo - ranges.getStartSeq$()) * this.av.getCharHeight$();
var yOffset=0;
if (transY < this.getHeight$()) {
matchFound=true;
gg.translate$I$I(transX, transY);
this.drawPanel$java_awt_Graphics$I$I$I$I$I(gg, displayColumn, displayColumn, seqNo, seqNo, yOffset);
gg.translate$I$I(-transX, -transY);
}}
}}
}}
gg.dispose$();
return matchFound;
});

Clazz.newMeth(C$, 'getLabelWidthWest$', function () {
return this.labelWidthWest;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
