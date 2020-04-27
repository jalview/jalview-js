(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'jalview.appletgui.PaintRefresher','java.awt.Color','java.awt.Font','jalview.appletgui.AnnotationPanel','jalview.appletgui.AnnotationLabels']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IdCanvas", null, 'java.awt.Panel', 'jalview.viewmodel.ViewportListenerI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.showScores=true;
this.maxIdLength=-1;
this.maxIdStr=null;
this.imgHeight=0;
this.fastPaint=false;
},1);

C$.$fields$=[['Z',['showScores','fastPaint'],'I',['maxIdLength','imgHeight','avcharHeight'],'S',['maxIdStr'],'O',['av','jalview.appletgui.AlignViewport','image','java.awt.Image','gg','java.awt.Graphics','searchResults','java.util.List']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignViewport', function (av) {
Clazz.super_(C$, this);
this.setLayout$java_awt_LayoutManager(null);
this.av=av;
$I$(1,"Register$java_awt_Component$S",[this, av.getSequenceSetId$()]);
av.getRanges$().addPropertyChangeListener$jalview_viewmodel_ViewportListenerI(this);
}, 1);

Clazz.newMeth(C$, 'drawIdString$java_awt_Graphics$Z$jalview_datamodel_SequenceI$I$I$I', function (gg, hiddenRows, s, i, starty, ypos) {
var charHeight=this.av.getCharHeight$();
if (this.searchResults != null  && this.searchResults.contains$O(s) ) {
gg.setColor$java_awt_Color($I$(2).black);
gg.fillRect$I$I$I$I(0, ((i - starty) * charHeight) + ypos, this.getSize$().width, charHeight);
gg.setColor$java_awt_Color($I$(2).white);
} else if (this.av.getSelectionGroup$() != null  && this.av.getSelectionGroup$().getSequences$java_util_Map(null).contains$O(s) ) {
gg.setColor$java_awt_Color($I$(2).lightGray);
gg.fillRect$I$I$I$I(0, ((i - starty) * charHeight) + ypos, this.getSize$().width, charHeight);
gg.setColor$java_awt_Color($I$(2).white);
} else {
gg.setColor$java_awt_Color(this.av.getSequenceColour$jalview_datamodel_SequenceI(s));
gg.fillRect$I$I$I$I(0, ((i - starty) * charHeight) + ypos, this.getSize$().width, charHeight);
gg.setColor$java_awt_Color($I$(2).black);
}gg.drawString$S$I$I(s.getDisplayId$Z(this.av.getShowJVSuffix$()), 0, ((i - starty) * charHeight) + ypos + charHeight  - ((charHeight/5|0)));
if (hiddenRows) {
this.drawMarker$I$I$I(i, starty, ypos);
}});

Clazz.newMeth(C$, 'fastPaint$I', function (vertical) {
if (this.gg == null  || this.av.getWrapAlignment$() ) {
this.repaint$();
return;
}var ranges=this.av.getRanges$();
this.gg.copyArea$I$I$I$I$I$I(0, 0, this.getSize$().width, this.imgHeight, 0, -vertical * this.av.getCharHeight$());
var ss=ranges.getStartSeq$();
var es=ranges.getEndSeq$();
var transY=0;
if (vertical > 0) {
ss=es - vertical;
if (ss < ranges.getStartSeq$()) {
ss=ranges.getStartSeq$();
} else {
transY=this.imgHeight - ((vertical + 1) * this.av.getCharHeight$());
}} else if (vertical < 0) {
es=ss - vertical;
if (es > ranges.getEndSeq$()) {
es=ranges.getEndSeq$();
}}this.gg.translate$I$I(0, transY);
this.drawIds$I$I(ss, es);
this.gg.translate$I$I(0, -transY);
this.fastPaint=true;
this.repaint$();
});

Clazz.newMeth(C$, 'update$java_awt_Graphics', function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
if (this.getSize$().height < 0 || this.getSize$().width < 0 ) {
return;
}if (this.fastPaint) {
this.fastPaint=false;
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, this);
return;
}this.imgHeight=this.getSize$().height;
this.imgHeight-=this.imgHeight % this.av.getCharHeight$();
if (this.imgHeight < 1) {
return;
}if (this.image == null  || this.imgHeight != this.image.getHeight$java_awt_image_ImageObserver(this) ) {
this.image=this.createImage$I$I(this.getSize$().width, this.imgHeight);
this.gg=this.image.getGraphics$();
this.gg.setFont$java_awt_Font(this.av.getFont$());
}this.gg.setColor$java_awt_Color($I$(2).white);
var italic=Clazz.new_([this.av.getFont$().getName$(), 2, this.av.getFont$().getSize$()],$I$(3,1).c$$S$I$I);
this.gg.setFont$java_awt_Font(italic);
this.gg.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
this.drawIds$I$I(this.av.getRanges$().getStartSeq$(), this.av.getRanges$().getEndSeq$());
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, this);
});

Clazz.newMeth(C$, 'drawIds$I$I', function (starty, endy) {
this.avcharHeight=this.av.getCharHeight$();
var currentColor=$I$(2).white;
var currentTextColor=$I$(2).black;
var doHiddenCheck=this.av.isDisplayReferenceSeq$() || this.av.hasHiddenRows$() ;
var hiddenRows=this.av.hasHiddenRows$() && this.av.getShowHiddenMarkers$() ;
if (this.av.getWrapAlignment$()) {
this.drawIdsWrapped$I$Z$Z(starty, doHiddenCheck, hiddenRows);
return;
}var seq;
for (var i=starty; i <= endy; i++) {
seq=this.av.getAlignment$().getSequenceAt$I(i);
if (seq == null ) {
continue;
}var italic=Clazz.new_([this.av.getFont$().getName$(), 2, this.av.getFont$().getSize$()],$I$(3,1).c$$S$I$I);
this.gg.setFont$java_awt_Font(italic);
if (doHiddenCheck) {
this.setHiddenFont$jalview_datamodel_SequenceI(seq);
}if ((this.searchResults != null ) && this.searchResults.contains$O(seq) ) {
currentColor=$I$(2).black;
currentTextColor=$I$(2).white;
} else if ((this.av.getSelectionGroup$() != null ) && this.av.getSelectionGroup$().getSequences$java_util_Map(null).contains$O(seq) ) {
currentColor=$I$(2).lightGray;
currentTextColor=$I$(2).black;
} else {
currentColor=this.av.getSequenceColour$jalview_datamodel_SequenceI(seq);
currentTextColor=$I$(2).black;
}this.gg.setColor$java_awt_Color(currentColor);
this.gg.fillRect$I$I$I$I(0, (i - starty) * this.avcharHeight, this.getSize$().width, this.avcharHeight);
this.gg.setColor$java_awt_Color(currentTextColor);
this.gg.drawString$S$I$I(seq.getDisplayId$Z(this.av.getShowJVSuffix$()), 0, (((i - starty) * this.avcharHeight) + this.avcharHeight) - ((this.avcharHeight/5|0)));
if (hiddenRows) {
this.drawMarker$I$I$I(i, starty, 0);
}}
});

Clazz.newMeth(C$, 'drawIdsWrapped$I$Z$Z', function (starty, doHiddenCheck, hiddenRows) {
var maxwidth=this.av.getAlignment$().getVisibleWidth$();
var alheight=this.av.getAlignment$().getHeight$();
var annotationHeight=0;
var labels=null;
if (this.av.isShowAnnotation$()) {
var ap=Clazz.new_($I$(4,1).c$$jalview_appletgui_AlignViewport,[this.av]);
annotationHeight=ap.adjustPanelHeight$();
labels=Clazz.new_($I$(5,1).c$$jalview_appletgui_AlignViewport,[this.av]);
}var hgap=this.avcharHeight;
if (this.av.getScaleAboveWrapped$()) {
hgap+=this.avcharHeight;
}var cHeight=alheight * this.avcharHeight + hgap + annotationHeight;
var rowSize=this.av.getRanges$().getViewportWidth$();
var italic=Clazz.new_([this.av.getFont$().getName$(), 2, this.av.getFont$().getSize$()],$I$(3,1).c$$S$I$I);
this.gg.setFont$java_awt_Font(italic);
var ypos=hgap;
var row=this.av.getRanges$().getStartRes$();
while ((ypos <= this.getHeight$()) && (row < maxwidth) ){
for (var i=starty; i < alheight; i++) {
var s=this.av.getAlignment$().getSequenceAt$I(i);
if (doHiddenCheck) {
this.setHiddenFont$jalview_datamodel_SequenceI(s);
}this.drawIdString$java_awt_Graphics$Z$jalview_datamodel_SequenceI$I$I$I(this.gg, hiddenRows, s, i, 0, ypos);
}
if (labels != null ) {
this.gg.translate$I$I(0, ypos + (alheight * this.avcharHeight));
labels.drawComponent$java_awt_Graphics$I(this.gg, this.getSize$().width);
this.gg.translate$I$I(0, -ypos - (alheight * this.avcharHeight));
}ypos+=cHeight;
row+=rowSize;
}
});

Clazz.newMeth(C$, 'setHighlighted$java_util_List', function (list) {
this.searchResults=list;
this.repaint$();
});

Clazz.newMeth(C$, 'drawMarker$I$I$I', function (i, starty, yoffset) {
var hseqs=this.av.getAlignment$().getHiddenSequences$().hiddenSequences;
var hSize=hseqs.length;
var hiddenIndex=i;
var lastIndex=i - 1;
var nextIndex=i + 1;
for (var j=0; j < hSize; j++) {
if (hseqs[j] != null ) {
if (j - 1 < hiddenIndex) {
hiddenIndex++;
}if (j - 1 < lastIndex) {
lastIndex++;
}if (j - 1 < nextIndex) {
nextIndex++;
}}}
var below=(hiddenIndex > lastIndex + 1);
var above=(nextIndex > hiddenIndex + 1);
this.gg.setColor$java_awt_Color($I$(2).blue);
if (below) {
this.gg.fillPolygon$IA$IA$I(Clazz.array(Integer.TYPE, -1, [this.getSize$().width - this.avcharHeight, this.getSize$().width - this.avcharHeight, this.getSize$().width]), Clazz.array(Integer.TYPE, -1, [(i - starty) * this.avcharHeight + yoffset, (i - starty) * this.avcharHeight + yoffset + (this.avcharHeight/4|0), (i - starty) * this.avcharHeight + yoffset]), 3);
}if (above) {
this.gg.fillPolygon$IA$IA$I(Clazz.array(Integer.TYPE, -1, [this.getSize$().width - this.avcharHeight, this.getSize$().width - this.avcharHeight, this.getSize$().width]), Clazz.array(Integer.TYPE, -1, [(i - starty + 1) * this.avcharHeight + yoffset, (i - starty + 1) * this.avcharHeight + yoffset - (this.avcharHeight/4|0), (i - starty + 1) * this.avcharHeight + yoffset]), 3);
}});

Clazz.newMeth(C$, 'setHiddenFont$jalview_datamodel_SequenceI', function (seq) {
var bold=Clazz.new_([this.av.getFont$().getName$(), 1, this.av.getFont$().getSize$()],$I$(3,1).c$$S$I$I);
if (this.av.isReferenceSeq$jalview_datamodel_SequenceI(seq) || this.av.isHiddenRepSequence$jalview_datamodel_SequenceI(seq) ) {
this.gg.setFont$java_awt_Font(bold);
return true;
}return false;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (evt) {
var propertyName=evt.getPropertyName$();
if (propertyName.equals$O("startseq") || (this.av.getWrapAlignment$() && propertyName.equals$O("startres") ) ) {
this.fastPaint$I(((evt.getNewValue$()).valueOf()|0) - ((evt.getOldValue$()).valueOf()|0));
} else if (propertyName.equals$O("startresandseq")) {
this.fastPaint$I((evt.getNewValue$())[1] - (evt.getOldValue$())[1]);
} else if (propertyName.equals$O("move_viewport")) {
this.repaint$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:45 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
