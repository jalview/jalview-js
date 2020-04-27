(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'jalview.appletgui.FeatureRenderer','jalview.appletgui.SequenceRenderer','jalview.appletgui.PaintRefresher','java.awt.Color','jalview.renderer.ScaleRenderer','jalview.util.Comparison','jalview.appletgui.AnnotationPanel']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SeqCanvas", null, 'java.awt.Panel', 'jalview.viewmodel.ViewportListenerI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fastPaint=false;
this.cursorX=0;
this.cursorY=0;
this.avcharHeight=0;
this.avcharWidth=0;
this.lastsr=0;
},1);

C$.$fields$=[['Z',['fastPaint'],'I',['imgWidth','imgHeight','cursorX','cursorY','avcharHeight','avcharWidth','lastsr','LABEL_WEST','LABEL_EAST'],'O',['fr','jalview.appletgui.FeatureRenderer','sr','jalview.appletgui.SequenceRenderer','img','java.awt.Image','gg','java.awt.Graphics','av','jalview.appletgui.AlignViewport','annotations','jalview.appletgui.AnnotationPanel']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignViewport', function (av) {
Clazz.super_(C$, this);
this.av=av;
this.fr=Clazz.new_($I$(1,1).c$$jalview_viewmodel_AlignmentViewport,[av]);
this.sr=Clazz.new_($I$(2,1).c$$jalview_appletgui_AlignViewport,[av]);
$I$(3,"Register$java_awt_Component$S",[this, av.getSequenceSetId$()]);
p$1.updateViewport.apply(this, []);
av.getRanges$().addPropertyChangeListener$jalview_viewmodel_ViewportListenerI(this);
}, 1);

Clazz.newMeth(C$, 'updateViewport', function () {
this.avcharHeight=this.av.getCharHeight$();
this.avcharWidth=this.av.getCharWidth$();
}, p$1);

Clazz.newMeth(C$, 'getViewport$', function () {
return this.av;
});

Clazz.newMeth(C$, 'getFeatureRenderer$', function () {
return this.fr;
});

Clazz.newMeth(C$, 'getSequenceRenderer$', function () {
return this.sr;
});

Clazz.newMeth(C$, 'drawNorthScale$java_awt_Graphics$I$I$I', function (g, startx, endx, ypos) {
p$1.updateViewport.apply(this, []);
g.setColor$java_awt_Color($I$(4).black);
for (var mark, $mark = Clazz.new_($I$(5,1)).calculateMarks$jalview_api_AlignViewportI$I$I(this.av, startx, endx).iterator$(); $mark.hasNext$()&&((mark=($mark.next$())),1);) {
var mpos=mark.column;
if (mpos < 0) {
continue;
}var mstring=mark.text;
if (mark.major) {
if (mstring != null ) {
g.drawString$S$I$I(mstring, mpos * this.avcharWidth, ypos - ((this.avcharHeight/2|0)));
}g.drawLine$I$I$I$I((mpos * this.avcharWidth) + ((this.avcharWidth/2|0)), (ypos + 2) - ((this.avcharHeight/2|0)), (mpos * this.avcharWidth) + ((this.avcharWidth/2|0)), ypos - 2);
}}
}, p$1);

Clazz.newMeth(C$, 'drawWestScale$java_awt_Graphics$I$I$I', function (g, startx, endx, ypos) {
var fm=this.getFontMetrics$java_awt_Font(this.av.getFont$());
ypos+=this.avcharHeight;
if (this.av.hasHiddenColumns$()) {
startx=this.av.getAlignment$().getHiddenColumns$().visibleToAbsoluteColumn$I(startx);
endx=this.av.getAlignment$().getHiddenColumns$().visibleToAbsoluteColumn$I(endx);
}for (var i=0; i < this.av.getAlignment$().getHeight$(); i++) {
var seq=this.av.getAlignment$().getSequenceAt$I(i);
var index=startx;
var value=-1;
while (index < endx){
if ($I$(6,"isGap$C",[seq.getCharAt$I(index)])) {
index++;
continue;
}value=this.av.getAlignment$().getSequenceAt$I(i).findPosition$I(index);
break;
}
if (value != -1) {
var x=this.LABEL_WEST - fm.stringWidth$S(String.valueOf$I(value)) - (this.avcharWidth/2|0) ;
g.drawString$S$I$I(value + "", x, (ypos + (i * this.avcharHeight)) - ((this.avcharHeight/5|0)));
}}
}, p$1);

Clazz.newMeth(C$, 'drawEastScale$java_awt_Graphics$I$I$I', function (g, startx, endx, ypos) {
ypos+=this.avcharHeight;
if (this.av.hasHiddenColumns$()) {
endx=this.av.getAlignment$().getHiddenColumns$().visibleToAbsoluteColumn$I(endx);
}var seq;
for (var i=0; i < this.av.getAlignment$().getHeight$(); i++) {
seq=this.av.getAlignment$().getSequenceAt$I(i);
var index=endx;
var value=-1;
while (index > startx){
if ($I$(6,"isGap$C",[seq.getCharAt$I(index)])) {
index--;
continue;
}value=seq.findPosition$I(index);
break;
}
if (value != -1) {
g.drawString$S$I$I(String.valueOf$I(value), 0, (ypos + (i * this.avcharHeight)) - ((this.avcharHeight/5|0)));
}}
}, p$1);

Clazz.newMeth(C$, 'fastPaint$I$I', function (horizontal, vertical) {
if (this.fastPaint || this.gg == null  ) {
return;
}var ranges=this.av.getRanges$();
p$1.updateViewport.apply(this, []);
if (this.lastsr + horizontal != ranges.getStartRes$()) {
horizontal=ranges.getStartRes$() - this.lastsr;
}this.lastsr=ranges.getStartRes$();
this.fastPaint=true;
this.gg.copyArea$I$I$I$I$I$I(horizontal * this.avcharWidth, vertical * this.avcharHeight, this.imgWidth - horizontal * this.avcharWidth, this.imgHeight - vertical * this.avcharHeight, -horizontal * this.avcharWidth, -vertical * this.avcharHeight);
var sr=ranges.getStartRes$();
var er=ranges.getEndRes$();
var ss=ranges.getStartSeq$();
var es=ranges.getEndSeq$();
var transX=0;
var transY=0;
if (horizontal > 0) {
transX=(er - sr - horizontal ) * this.avcharWidth;
sr=er - horizontal;
} else if (horizontal < 0) {
er=sr - horizontal;
} else if (vertical > 0) {
ss=es - vertical;
if (ss < ranges.getStartSeq$()) {
ss=ranges.getStartSeq$();
} else {
transY=this.imgHeight - ((vertical + 1) * this.avcharHeight);
}} else if (vertical < 0) {
es=ss - vertical;
if (es > ranges.getEndSeq$()) {
es=ranges.getEndSeq$();
}}this.gg.translate$I$I(transX, transY);
p$1.drawPanel$java_awt_Graphics$I$I$I$I$I.apply(this, [this.gg, sr, er, ss, es, 0]);
this.gg.translate$I$I(-transX, -transY);
this.repaint$();
});

Clazz.newMeth(C$, 'update$java_awt_Graphics', function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
if (this.img != null  && (this.fastPaint || (this.getSize$().width != g.getClipBounds$().width) || (this.getSize$().height != g.getClipBounds$().height)  ) ) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.img, 0, 0, this);
this.fastPaint=false;
return;
}if (this.fastPaint) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.img, 0, 0, this);
this.fastPaint=false;
return;
}p$1.updateViewport.apply(this, []);
this.imgWidth=this.getSize$().width;
this.imgHeight=this.getSize$().height;
this.imgWidth-=this.imgWidth % this.avcharWidth;
this.imgHeight-=this.imgHeight % this.avcharHeight;
if (this.imgWidth < 1 || this.imgHeight < 1 ) {
return;
}if (this.img == null  || this.imgWidth != this.img.getWidth$java_awt_image_ImageObserver(this)  || this.imgHeight != this.img.getHeight$java_awt_image_ImageObserver(this) ) {
this.img=this.createImage$I$I(this.imgWidth, this.imgHeight);
this.gg=this.img.getGraphics$();
this.gg.setFont$java_awt_Font(this.av.getFont$());
}this.gg.setColor$java_awt_Color($I$(4).white);
this.gg.fillRect$I$I$I$I(0, 0, this.imgWidth, this.imgHeight);
var ranges=this.av.getRanges$();
if (this.av.getWrapAlignment$()) {
p$1.drawWrappedPanel$java_awt_Graphics$I$I$I.apply(this, [this.gg, this.imgWidth, this.imgHeight, ranges.getStartRes$()]);
} else {
p$1.drawPanel$java_awt_Graphics$I$I$I$I$I.apply(this, [this.gg, ranges.getStartRes$(), ranges.getEndRes$(), ranges.getStartSeq$(), ranges.getEndSeq$(), 0]);
}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.img, 0, 0, this);
});

Clazz.newMeth(C$, 'getWrappedCanvasWidth$I', function (cwidth) {
cwidth-=cwidth % this.av.getCharWidth$();
var fm=this.getFontMetrics$java_awt_Font(this.av.getFont$());
this.LABEL_EAST=0;
this.LABEL_WEST=0;
if (this.av.getScaleRightWrapped$()) {
this.LABEL_EAST=fm.stringWidth$S(this.getMask$());
}if (this.av.getScaleLeftWrapped$()) {
this.LABEL_WEST=fm.stringWidth$S(this.getMask$());
}return ((cwidth - this.LABEL_EAST - this.LABEL_WEST )/this.av.getCharWidth$()|0);
});

Clazz.newMeth(C$, 'getMask$', function () {
var mask="0";
var maxWidth=0;
var tmp;
var alignment=this.av.getAlignment$();
for (var i=0; i < alignment.getHeight$(); i++) {
tmp=alignment.getSequenceAt$I(i).getEnd$();
if (tmp > maxWidth) {
maxWidth=tmp;
}}
for (var i=maxWidth; i > 0; i=(i/(10)|0)) {
mask += "0";
}
return mask;
});

Clazz.newMeth(C$, 'drawWrappedPanel$java_awt_Graphics$I$I$I', function (g, canvasWidth, canvasHeight, startRes) {
var al=this.av.getAlignment$();
var fm=this.getFontMetrics$java_awt_Font(this.av.getFont$());
this.LABEL_EAST=0;
this.LABEL_WEST=0;
if (this.av.getScaleRightWrapped$()) {
this.LABEL_EAST=fm.stringWidth$S(this.getMask$());
}if (this.av.getScaleLeftWrapped$()) {
this.LABEL_WEST=fm.stringWidth$S(this.getMask$());
}var hgap=this.avcharHeight;
if (this.av.getScaleAboveWrapped$()) {
hgap+=this.avcharHeight;
}var cWidth=((canvasWidth - this.LABEL_EAST - this.LABEL_WEST )/this.avcharWidth|0);
var cHeight=this.av.getAlignment$().getHeight$() * this.avcharHeight;
this.av.setWrappedWidth$I(cWidth);
this.av.getRanges$().setViewportStartAndWidth$I$I(startRes, cWidth);
var endx;
var ypos=hgap;
var maxwidth=this.av.getAlignment$().getVisibleWidth$();
while ((ypos <= canvasHeight) && (startRes < maxwidth) ){
endx=startRes + cWidth - 1;
if (endx > maxwidth) {
endx=maxwidth;
}g.setColor$java_awt_Color($I$(4).black);
if (this.av.getScaleLeftWrapped$()) {
p$1.drawWestScale$java_awt_Graphics$I$I$I.apply(this, [g, startRes, endx, ypos]);
}if (this.av.getScaleRightWrapped$()) {
g.translate$I$I(canvasWidth - this.LABEL_EAST, 0);
p$1.drawEastScale$java_awt_Graphics$I$I$I.apply(this, [g, startRes, endx, ypos]);
g.translate$I$I(-(canvasWidth - this.LABEL_EAST), 0);
}g.translate$I$I(this.LABEL_WEST, 0);
if (this.av.getScaleAboveWrapped$()) {
p$1.drawNorthScale$java_awt_Graphics$I$I$I.apply(this, [g, startRes, endx, ypos]);
}if (this.av.hasHiddenColumns$() && this.av.getShowHiddenMarkers$() ) {
var hidden=this.av.getAlignment$().getHiddenColumns$();
g.setColor$java_awt_Color($I$(4).blue);
var res;
var it=hidden.getStartRegionIterator$I$I(startRes, endx + 1);
while (it.hasNext$()){
res=(it.next$()).valueOf() - startRes;
this.gg.fillPolygon$IA$IA$I(Clazz.array(Integer.TYPE, -1, [res * this.avcharWidth - (this.avcharHeight/4|0), res * this.avcharWidth + (this.avcharHeight/4|0), res * this.avcharWidth]), Clazz.array(Integer.TYPE, -1, [ypos - ((this.avcharHeight/2|0)), ypos - ((this.avcharHeight/2|0)), ypos - ((this.avcharHeight/2|0)) + 8]), 3);
}
}if (g.getClip$() == null ) {
g.setClip$I$I$I$I(0, 0, cWidth * this.avcharWidth, canvasHeight);
}p$1.drawPanel$java_awt_Graphics$I$I$I$I$I.apply(this, [g, startRes, endx, 0, al.getHeight$() - 1, ypos]);
g.setClip$java_awt_Shape(null);
if (this.av.isShowAnnotation$()) {
g.translate$I$I(0, cHeight + ypos + 4 );
if (this.annotations == null ) {
this.annotations=Clazz.new_($I$(7,1).c$$jalview_appletgui_AlignViewport,[this.av]);
}this.annotations.drawComponent$java_awt_Graphics$I$I(g, startRes, endx + 1);
g.translate$I$I(0, -cHeight - ypos - 4 );
}g.translate$I$I(-this.LABEL_WEST, 0);
ypos+=cHeight + this.getAnnotationHeight$() + hgap ;
startRes+=cWidth;
}
}, p$1);

Clazz.newMeth(C$, 'getAnnotationHeight$', function () {
if (!this.av.isShowAnnotation$()) {
return 0;
}if (this.annotations == null ) {
this.annotations=Clazz.new_($I$(7,1).c$$jalview_appletgui_AlignViewport,[this.av]);
}return this.annotations.adjustPanelHeight$();
});

Clazz.newMeth(C$, 'drawPanel$java_awt_Graphics$I$I$I$I$I', function (g1, startRes, endRes, startSeq, endSeq, offset) {
if (!this.av.hasHiddenColumns$()) {
this.draw$java_awt_Graphics$I$I$I$I$I(g1, startRes, endRes, startSeq, endSeq, offset);
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
g1.translate$I$I(screenY * this.avcharWidth, 0);
this.draw$java_awt_Graphics$I$I$I$I$I(g1, blockStart, blockEnd, startSeq, endSeq, offset);
if (this.av.getShowHiddenMarkers$() && (regions.hasNext$() || regions.endsAtHidden$() ) ) {
g1.setColor$java_awt_Color($I$(4).blue);
g1.drawLine$I$I$I$I((blockEnd - blockStart + 1) * this.avcharWidth - 1, 0 + offset, (blockEnd - blockStart + 1) * this.avcharWidth - 1, (endSeq - startSeq + 1) * this.avcharHeight + offset);
}g1.translate$I$I(-screenY * this.avcharWidth, 0);
screenY+=blockEnd - blockStart + 1;
}
}}, p$1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics$I$I$I$I$I', function (g, startRes, endRes, startSeq, endSeq, offset) {
g.setFont$java_awt_Font(this.av.getFont$());
this.sr.prepare$java_awt_Graphics$Z(g, this.av.isRenderGaps$());
p$1.updateViewport.apply(this, []);
var nextSeq;
for (var i=startSeq; i <= endSeq; i++) {
nextSeq=this.av.getAlignment$().getSequenceAt$I(i);
if (nextSeq == null ) {
continue;
}this.sr.drawSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroupA$I$I$I(nextSeq, this.av.getAlignment$().findAllGroups$jalview_datamodel_SequenceI(nextSeq), startRes, endRes, offset + ((i - startSeq) * this.avcharHeight));
if (this.av.isShowSequenceFeatures$()) {
this.fr.drawSequence$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$I$Z(g, nextSeq, startRes, endRes, offset + ((i - startSeq) * this.avcharHeight), false);
}if (this.av.hasSearchResults$()) {
var visibleResults=this.av.getSearchResults$().getResults$jalview_datamodel_SequenceI$I$I(nextSeq, startRes, endRes);
if (visibleResults != null ) {
for (var r=0; r < visibleResults.length; r+=2) {
this.sr.drawHighlightedText$jalview_datamodel_SequenceI$I$I$I$I(nextSeq, visibleResults[r], visibleResults[r + 1], (visibleResults[r] - startRes) * this.avcharWidth, offset + ((i - startSeq) * this.avcharHeight));
}
}}if (this.av.cursorMode && this.cursorY == i  && this.cursorX >= startRes  && this.cursorX <= endRes ) {
this.sr.drawCursor$jalview_datamodel_SequenceI$I$I$I(nextSeq, this.cursorX, (this.cursorX - startRes) * this.avcharWidth, offset + ((i - startSeq) * this.avcharHeight));
}}
if (this.av.getSelectionGroup$() != null  || this.av.getAlignment$().getGroups$().size$() > 0 ) {
p$1.drawGroupsBoundaries$java_awt_Graphics$I$I$I$I$I.apply(this, [g, startRes, endRes, startSeq, endSeq, offset]);
}});

Clazz.newMeth(C$, 'drawGroupsBoundaries$java_awt_Graphics$I$I$I$I$I', function (g, startRes, endRes, startSeq, endSeq, offset) {
var group=this.av.getSelectionGroup$();
var sx=-1;
var sy=-1;
var ex=-1;
var groupIndex=-1;
if ((group == null ) && (this.av.getAlignment$().getGroups$().size$() > 0) ) {
group=this.av.getAlignment$().getGroups$().get$I(0);
groupIndex=0;
}if (group != null ) {
do {
var oldY=-1;
var i=0;
var inGroup=false;
var top=-1;
var bottom=-1;
var alHeight=this.av.getAlignment$().getHeight$() - 1;
for (i=startSeq; i <= endSeq; i++) {
sx=(group.getStartRes$() - startRes) * this.avcharWidth;
sy=offset + ((i - startSeq) * this.avcharHeight);
ex=(((group.getEndRes$() + 1) - group.getStartRes$()) * this.avcharWidth) - 1;
if (sx + ex < 0 || sx > this.imgWidth ) {
continue;
}if ((sx <= (endRes - startRes) * this.avcharWidth) && group.getSequences$java_util_Map(null).contains$O(this.av.getAlignment$().getSequenceAt$I(i)) ) {
if ((bottom == -1) && (i >= alHeight || !group.getSequences$java_util_Map(null).contains$O(this.av.getAlignment$().getSequenceAt$I(i + 1)) ) ) {
bottom=sy + this.avcharHeight;
}if (!inGroup) {
if (((top == -1) && (i == 0) ) || !group.getSequences$java_util_Map(null).contains$O(this.av.getAlignment$().getSequenceAt$I(i - 1)) ) {
top=sy;
}oldY=sy;
inGroup=true;
if (group === this.av.getSelectionGroup$() ) {
g.setColor$java_awt_Color($I$(4).red);
} else {
g.setColor$java_awt_Color(group.getOutlineColour$());
}}} else {
if (inGroup) {
if (sx >= 0 && sx < this.imgWidth ) {
g.drawLine$I$I$I$I(sx, oldY, sx, sy);
}if (sx + ex < this.imgWidth) {
g.drawLine$I$I$I$I(sx + ex, oldY, sx + ex, sy);
}if (sx < 0) {
ex+=sx;
sx=0;
}if (sx + ex > this.imgWidth) {
ex=this.imgWidth;
} else if (sx + ex >= (endRes - startRes + 1) * this.avcharWidth) {
ex=(endRes - startRes + 1) * this.avcharWidth;
}if (top != -1) {
g.drawLine$I$I$I$I(sx, top, sx + ex, top);
top=-1;
}if (bottom != -1) {
g.drawLine$I$I$I$I(sx, bottom, sx + ex, bottom);
bottom=-1;
}inGroup=false;
}}}
if (inGroup) {
sy=offset + ((i - startSeq) * this.avcharHeight);
if (sx >= 0 && sx < this.imgWidth ) {
g.drawLine$I$I$I$I(sx, oldY, sx, sy);
}if (sx + ex < this.imgWidth) {
g.drawLine$I$I$I$I(sx + ex, oldY, sx + ex, sy);
}if (sx < 0) {
ex+=sx;
sx=0;
}if (sx + ex > this.imgWidth) {
ex=this.imgWidth;
} else if (sx + ex >= (endRes - startRes + 1) * this.avcharWidth) {
ex=(endRes - startRes + 1) * this.avcharWidth;
}if (top != -1) {
g.drawLine$I$I$I$I(sx, top, sx + ex, top);
top=-1;
}if (bottom != -1) {
g.drawLine$I$I$I$I(sx, bottom - 1, sx + ex, bottom - 1);
bottom=-1;
}inGroup=false;
}groupIndex++;
if (groupIndex >= this.av.getAlignment$().getGroups$().size$()) {
break;
}group=this.av.getAlignment$().getGroups$().get$I(groupIndex);
} while (groupIndex < this.av.getAlignment$().getGroups$().size$());
}}, p$1);

Clazz.newMeth(C$, 'highlightSearchResults$jalview_datamodel_SearchResultsI', function (results) {
this.av.setSearchResults$jalview_datamodel_SearchResultsI(results);
this.repaint$();
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (evt) {
var eventName=evt.getPropertyName$();
if (eventName.equals$O("Sequence group changed")) {
this.fastPaint=true;
this.repaint$();
return;
} else if (eventName.equals$O("move_viewport")) {
this.fastPaint=false;
this.repaint$();
return;
}if (!this.av.getWrapAlignment$()) {
var scrollX=0;
if (eventName.equals$O("startres") || eventName.equals$O("startresandseq") ) {
if (eventName.equals$O("startres")) {
scrollX=((evt.getNewValue$()).valueOf()|0) - ((evt.getOldValue$()).valueOf()|0);
} else {
scrollX=(evt.getNewValue$())[0] - (evt.getOldValue$())[0];
}var vpRanges=this.av.getRanges$();
var range=vpRanges.getEndRes$() - vpRanges.getStartRes$();
if (scrollX > range) {
scrollX=range;
} else if (scrollX < -range) {
scrollX=-range;
}}if (eventName.equals$O("startres")) {
this.fastPaint$I$I(scrollX, 0);
} else if (eventName.equals$O("startseq")) {
this.fastPaint$I$I(0, ((evt.getNewValue$()).valueOf()|0) - ((evt.getOldValue$()).valueOf()|0));
} else if (eventName.equals$O("startresandseq")) {
this.fastPaint$I$I(scrollX, 0);
}}});

Clazz.newMeth(C$, 'clearFastPaint$', function () {
this.fastPaint=false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:45 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
