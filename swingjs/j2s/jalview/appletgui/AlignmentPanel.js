(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.awt.Panel','java.awt.Scrollbar','jalview.appletgui.SeqPanel','jalview.appletgui.IdPanel','jalview.appletgui.ScalePanel','jalview.appletgui.IdwidthAdjuster','jalview.appletgui.AnnotationPanel','jalview.appletgui.AnnotationLabels','java.awt.event.ComponentAdapter','jalview.appletgui.PaintRefresher','jalview.appletgui.FeatureRenderer','java.awt.Dimension','java.awt.Frame','jalview.bin.JalviewLite','jalview.structure.StructureSelectionManager','jalview.analysis.AnnotationSorter','java.awt.BorderLayout','java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AlignmentPanel", null, 'java.awt.Panel', ['java.awt.event.AdjustmentListener', 'jalview.api.AlignmentViewPanel', 'jalview.viewmodel.ViewportListenerI']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.av=null;
this.overviewPanel=null;
this.seqPanel=null;
this.idPanel=null;
this.idwidthAdjuster=null;
this.alignFrame=null;
this.scalePanel=null;
this.annotationPanel=null;
this.alabels=null;
this.vpRanges=null;
this.fastPaint=false;
this.hextent=0;
this.vextent=0;
this.sequenceHolderPanel=null;
this.vscroll=null;
this.hscroll=null;
this.seqPanelHolder=null;
this.scalePanelHolder=null;
this.idPanelHolder=null;
this.idSpaceFillerPanel1=null;
this.annotationSpaceFillerHolder=null;
this.hscrollFillerPanel=null;
this.annotationPanelHolder=null;
this.apvscroll=null;
this.scrollComplementaryPanel=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.fastPaint=true;
this.hextent=0;
this.vextent=0;
this.sequenceHolderPanel=Clazz.new_($I$(1));
this.vscroll=Clazz.new_($I$(2));
this.hscroll=Clazz.new_($I$(2));
this.seqPanelHolder=Clazz.new_($I$(1));
this.scalePanelHolder=Clazz.new_($I$(1));
this.idPanelHolder=Clazz.new_($I$(1));
this.idSpaceFillerPanel1=Clazz.new_($I$(1));
this.annotationSpaceFillerHolder=Clazz.new_($I$(1));
this.hscrollFillerPanel=Clazz.new_($I$(1));
this.annotationPanelHolder=Clazz.new_($I$(1));
this.apvscroll=Clazz.new_($I$(2));
this.scrollComplementaryPanel=true;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignFrame$jalview_appletgui_AlignViewport', function (af, av) {
Clazz.super_(C$, this,1);
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
this.alignFrame=af;
this.av=av;
this.vpRanges=av.getRanges$();
this.seqPanel=Clazz.new_($I$(3).c$$jalview_appletgui_AlignViewport$jalview_appletgui_AlignmentPanel,[av, this]);
this.idPanel=Clazz.new_($I$(4).c$$jalview_appletgui_AlignViewport$jalview_appletgui_AlignmentPanel,[av, this]);
this.scalePanel=Clazz.new_($I$(5).c$$jalview_appletgui_AlignViewport$jalview_appletgui_AlignmentPanel,[av, this]);
this.idwidthAdjuster=Clazz.new_($I$(6).c$$jalview_appletgui_AlignmentPanel,[this]);
this.annotationPanel=Clazz.new_($I$(7).c$$jalview_appletgui_AlignmentPanel,[this]);
this.annotationPanelHolder.add$java_awt_Component$O(this.annotationPanel, "Center");
this.sequenceHolderPanel.add$java_awt_Component$O(this.annotationPanelHolder, "South");
this.alabels=Clazz.new_($I$(8).c$$jalview_appletgui_AlignmentPanel,[this]);
this.setAnnotationVisible$Z(av.isShowAnnotation$());
this.idPanelHolder.add$java_awt_Component$O(this.idPanel, "Center");
this.idSpaceFillerPanel1.add$java_awt_Component$O(this.idwidthAdjuster, "Center");
this.annotationSpaceFillerHolder.add$java_awt_Component$O(this.alabels, "Center");
this.scalePanelHolder.add$java_awt_Component$O(this.scalePanel, "Center");
this.seqPanelHolder.add$java_awt_Component$O(this.seqPanel, "Center");
this.fontChanged$();
this.setScrollValues$I$I(0, 0);
this.apvscroll.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this.hscroll.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this.vscroll.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this.addComponentListener$java_awt_event_ComponentListener(((P$.AlignmentPanel$1||
(function(){var C$=Clazz.newClass(P$, "AlignmentPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent', function (evt) {
if (this.$finals$.av.getWrapAlignment$()) {
var widthInRes=this.b$['jalview.appletgui.AlignmentPanel'].seqPanel.seqCanvas.getWrappedCanvasWidth$I(this.b$['jalview.appletgui.AlignmentPanel'].seqPanel.seqCanvas.getWidth$());
this.b$['jalview.appletgui.AlignmentPanel'].vpRanges.setViewportWidth$I(widthInRes);
} else {
var widthInRes=(this.b$['jalview.appletgui.AlignmentPanel'].seqPanel.seqCanvas.getWidth$()/this.$finals$.av.getCharWidth$()|0);
var heightInSeq=(this.b$['jalview.appletgui.AlignmentPanel'].seqPanel.seqCanvas.getHeight$()/this.$finals$.av.getCharHeight$()|0);
this.b$['jalview.appletgui.AlignmentPanel'].vpRanges.setViewportWidth$I(widthInRes);
this.b$['jalview.appletgui.AlignmentPanel'].vpRanges.setViewportHeight$I(heightInSeq);
}if (this.b$['java.awt.Component'].getSize$.apply(this.b$['java.awt.Component'], []).height > 0 && this.b$['jalview.appletgui.AlignmentPanel'].annotationPanelHolder.getSize$().height > 0 ) {
this.b$['jalview.appletgui.AlignmentPanel'].validateAnnotationDimensions$Z.apply(this.b$['jalview.appletgui.AlignmentPanel'], [false]);
}this.b$['java.awt.Component'].repaint$.apply(this.b$['java.awt.Component'], []);
});
})()
), Clazz.new_($I$(9), [this, {av: av}],P$.AlignmentPanel$1)));
var d=this.calculateIdWidth$();
this.idPanel.idCanvas.setSize$java_awt_Dimension(d);
this.hscrollFillerPanel.setSize$I$I(d.width, this.annotationPanel.getSize$().height);
this.idPanel.idCanvas.setSize$I$I(d.width, this.seqPanel.seqCanvas.getSize$().height);
this.annotationSpaceFillerHolder.setSize$I$I(d.width, this.annotationPanel.getSize$().height);
this.alabels.setSize$I$I(d.width, this.annotationPanel.getSize$().height);
var ap=this;
av.addPropertyChangeListener$java_beans_PropertyChangeListener(((P$.AlignmentPanel$2||
(function(){var C$=Clazz.newClass(P$, "AlignmentPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
if (evt.getPropertyName$().equals$O("alignment")) {
$I$(10).Refresh$java_awt_Component$S$Z$Z(this.$finals$.ap, this.$finals$.av.getSequenceSetId$(), true, true);
this.b$['jalview.appletgui.AlignmentPanel'].alignmentChanged$.apply(this.b$['jalview.appletgui.AlignmentPanel'], []);
}});
})()
), Clazz.new_(P$.AlignmentPanel$2.$init$, [this, {ap: ap, av: av}])));
av.getRanges$().addPropertyChangeListener$jalview_viewmodel_ViewportListenerI(this);
}, 1);

Clazz.newMeth(C$, 'getAlignViewport$', function () {
return this.av;
});

Clazz.newMeth(C$, 'getSequenceRenderer$', function () {
return this.seqPanel.seqCanvas.sr;
});

Clazz.newMeth(C$, 'getFeatureRenderer$', function () {
return this.seqPanel.seqCanvas.fr;
});

Clazz.newMeth(C$, 'cloneFeatureRenderer$', function () {
var nfr=Clazz.new_($I$(11).c$$jalview_viewmodel_AlignmentViewport,[this.av]);
nfr.transferSettings$jalview_api_FeatureRenderer(this.seqPanel.seqCanvas.fr);
return nfr;
});

Clazz.newMeth(C$, 'alignmentChanged$', function () {
this.av.alignmentChanged$jalview_api_AlignmentViewPanel(this);
if (this.overviewPanel != null ) {
this.overviewPanel.updateOverviewImage$();
}this.alignFrame.updateEditMenuBar$();
this.repaint$();
});

Clazz.newMeth(C$, 'fontChanged$', function () {
this.idPanel.idCanvas.image=null;
var fm=this.getFontMetrics$java_awt_Font(this.av.getFont$());
this.scalePanel.setSize$java_awt_Dimension(Clazz.new_($I$(12).c$$I$I,[10, this.av.getCharHeight$() + fm.getDescent$()]));
this.idwidthAdjuster.setSize$java_awt_Dimension(Clazz.new_($I$(12).c$$I$I,[10, this.av.getCharHeight$() + fm.getDescent$()]));
this.av.updateSequenceIdColours$();
this.annotationPanel.image=null;
var ap=this.annotationPanel.adjustPanelHeight$Z(false);
var d=this.calculateIdWidth$();
d.setSize$I$I(d.width + 4, this.seqPanel.seqCanvas.getSize$().height);
this.alabels.setSize$I$I(d.width + 4, ap);
this.idPanel.idCanvas.setSize$java_awt_Dimension(d);
this.hscrollFillerPanel.setSize$java_awt_Dimension(d);
this.validateAnnotationDimensions$Z(false);
this.annotationPanel.repaint$();
this.validate$();
this.repaint$();
});

Clazz.newMeth(C$, 'setIdWidth$I$I', function (w, h) {
this.idPanel.idCanvas.setSize$I$I(w, h);
this.idPanelHolder.setSize$I$I(w, this.idPanelHolder.getSize$().height);
this.annotationSpaceFillerHolder.setSize$I$I(w, this.annotationSpaceFillerHolder.getSize$().height);
this.alabels.setSize$I$I(w, this.alabels.getSize$().height);
this.validate$();
});

Clazz.newMeth(C$, 'calculateIdWidth$', function () {
if (this.av.nullFrame == null ) {
this.av.nullFrame=Clazz.new_($I$(13));
this.av.nullFrame.addNotify$();
}var g=this.av.nullFrame.getGraphics$();
var fm=g.getFontMetrics$java_awt_Font(this.av.font);
var al=this.av.getAlignment$();
var i=0;
var idWidth=0;
var id;
while (i < al.getHeight$() && al.getSequenceAt$I(i) != null  ){
var s=al.getSequenceAt$I(i);
id=s.getDisplayId$Z(this.av.getShowJVSuffix$());
if (fm.stringWidth$S(id) > idWidth) {
idWidth=fm.stringWidth$S(id);
}i++;
}
i=0;
if (al.getAlignmentAnnotation$() != null ) {
fm=g.getFontMetrics$java_awt_Font(this.av.nullFrame.getFont$());
while (i < al.getAlignmentAnnotation$().length){
var label=al.getAlignmentAnnotation$()[i].label;
if (fm.stringWidth$S(label) > idWidth) {
idWidth=fm.stringWidth$S(label);
}i++;
}
}return Clazz.new_($I$(12).c$$I$I,[idWidth, this.idPanel.idCanvas.getSize$().height]);
});

Clazz.newMeth(C$, 'highlightSearchResults$jalview_datamodel_SearchResultsI', function (results) {
this.scrollToPosition$jalview_datamodel_SearchResultsI(results);
this.seqPanel.seqCanvas.highlightSearchResults$jalview_datamodel_SearchResultsI(results);
});

Clazz.newMeth(C$, 'scrollToPosition$jalview_datamodel_SearchResultsI', function (results) {
return this.scrollToPosition$jalview_datamodel_SearchResultsI$Z(results, true);
});

Clazz.newMeth(C$, 'scrollToPosition$jalview_datamodel_SearchResultsI$Z', function (results, redrawOverview) {
return this.scrollToPosition$jalview_datamodel_SearchResultsI$I$Z$Z(results, 0, redrawOverview, false);
});

Clazz.newMeth(C$, 'scrollToPosition$jalview_datamodel_SearchResultsI$I$Z$Z', function (results, verticalOffset, redrawOverview, centre) {
if (results != null  && results.getSize$() > 0 ) {
var alignment=this.av.getAlignment$();
var seqIndex=alignment.findIndex$jalview_datamodel_SearchResultsI(results);
if (seqIndex == -1) {
return false;
}var seq=alignment.getSequenceAt$I(seqIndex);
var r=results.getResults$jalview_datamodel_SequenceI$I$I(seq, 0, alignment.getWidth$());
if (r == null ) {
if ($I$(14).debug) {
System.out.println$S("DEBUG: scroll didn't happen - results not within alignment : " + seq.getStart$() + "," + seq.getEnd$() );
}return false;
}if ($I$(14).debug) {
}var start=r[0];
var end=r[1];
if (centre) {
var offset=((this.vpRanges.getEndRes$() - this.vpRanges.getStartRes$() + 1)/2|0) - 1;
start=Math.max(start - offset, 0);
end=end + offset - 1;
}if (start < 0) {
return false;
}if (end == seq.getEnd$()) {
return false;
}seqIndex=Math.max(0, seqIndex - verticalOffset);
return this.scrollTo$I$I$I$Z$Z(start, end, seqIndex, false, redrawOverview);
}return true;
});

Clazz.newMeth(C$, 'scrollTo$I$I$I$Z$Z', function (ostart, end, seqIndex, scrollToNearest, redrawOverview) {
var startv;
var endv;
var starts;
var ends;
var start=-1;
if (this.av.hasHiddenColumns$()) {
var al=this.av.getAlignment$();
start=al.getHiddenColumns$().absoluteToVisibleColumn$I(ostart);
end=al.getHiddenColumns$().absoluteToVisibleColumn$I(end);
if (start == end) {
if (!scrollToNearest && !al.getHiddenColumns$().isVisible$I(ostart) ) {
return false;
}}} else {
start=ostart;
}if (!this.av.getWrapAlignment$()) {
if ((startv=this.vpRanges.getStartRes$()) >= start) {
this.setScrollValues$I$I(start - 1, seqIndex);
} else if ((endv=this.vpRanges.getEndRes$()) <= end) {
this.setScrollValues$I$I(startv + 1 + end  - endv, seqIndex);
} else if ((starts=this.vpRanges.getStartSeq$()) > seqIndex) {
this.setScrollValues$I$I(this.vpRanges.getStartRes$(), seqIndex);
} else if ((ends=this.vpRanges.getEndSeq$()) <= seqIndex) {
this.setScrollValues$I$I(this.vpRanges.getStartRes$(), starts + seqIndex - ends + 1);
}} else {
this.vpRanges.scrollToWrappedVisible$I(start);
}this.paintAlignment$Z$Z(redrawOverview, false);
return true;
});

Clazz.newMeth(C$, 'getOverviewPanel$', function () {
return this.overviewPanel;
});

Clazz.newMeth(C$, 'setOverviewPanel$jalview_appletgui_OverviewPanel', function (op) {
this.overviewPanel=op;
});

Clazz.newMeth(C$, 'setAnnotationVisible$Z', function (b) {
if (!this.av.getWrapAlignment$()) {
this.annotationSpaceFillerHolder.setVisible$Z(b);
this.annotationPanelHolder.setVisible$Z(b);
} else {
this.annotationSpaceFillerHolder.setVisible$Z(false);
this.annotationPanelHolder.setVisible$Z(false);
}this.validate$();
this.repaint$();
});

Clazz.newMeth(C$, 'adjustAnnotationHeight$', function () {
if (this.alignFrame.getSize$().height == 0) {
System.out.println$S("adjustAnnotationHeight frame size zero NEEDS FIXING");
}this.fontChanged$();
this.validateAnnotationDimensions$Z(true);
this.apvscroll.addNotify$();
this.hscroll.addNotify$();
this.validate$();
this.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'validateAnnotationDimensions$Z', function (adjustPanelHeight) {
var rowHeight=this.av.getCharHeight$();
var alignmentHeight=rowHeight * this.av.getAlignment$().getHeight$();
var annotationHeight=this.av.calcPanelHeight$();
var mheight=annotationHeight;
var d=this.sequenceHolderPanel.getSize$();
var availableHeight=d.height - this.scalePanelHolder.getHeight$();
if (adjustPanelHeight) {
if (annotationHeight + alignmentHeight > availableHeight) {
annotationHeight=Math.min(annotationHeight, availableHeight - 2 * rowHeight);
}} else {
annotationHeight=this.annotationPanelHolder.getSize$().height;
}if (availableHeight - annotationHeight < 5) {
annotationHeight=availableHeight;
}this.annotationPanel.setSize$java_awt_Dimension(Clazz.new_($I$(12).c$$I$I,[d.width, annotationHeight]));
this.annotationPanelHolder.setSize$java_awt_Dimension(Clazz.new_($I$(12).c$$I$I,[d.width, annotationHeight]));
this.seqPanel.seqCanvas.setSize$I$I(d.width, this.seqPanel.seqCanvas.getSize$().height);
var e=this.idPanel.getSize$();
this.alabels.setSize$java_awt_Dimension(Clazz.new_($I$(12).c$$I$I,[e.width, annotationHeight]));
this.annotationSpaceFillerHolder.setSize$java_awt_Dimension(Clazz.new_($I$(12).c$$I$I,[e.width, annotationHeight]));
var s=this.apvscroll.getValue$();
if (s > mheight - annotationHeight) {
s=0;
}this.apvscroll.setValues$I$I$I$I(s, annotationHeight, 0, mheight);
this.annotationPanel.setScrollOffset$I$Z(this.apvscroll.getValue$(), false);
this.alabels.setScrollOffset$I$Z(this.apvscroll.getValue$(), false);
});

Clazz.newMeth(C$, 'setWrapAlignment$Z', function (wrap) {
this.vpRanges.setStartEndSeq$I$I(0, this.vpRanges.getVisibleAlignmentHeight$());
this.vpRanges.setStartRes$I(0);
this.scalePanelHolder.setVisible$Z(!wrap);
this.hscroll.setVisible$Z(!wrap);
this.idwidthAdjuster.setVisible$Z(!wrap);
if (wrap) {
this.annotationPanelHolder.setVisible$Z(false);
this.annotationSpaceFillerHolder.setVisible$Z(false);
} else if (this.av.isShowAnnotation$()) {
this.annotationPanelHolder.setVisible$Z(true);
this.annotationSpaceFillerHolder.setVisible$Z(true);
}this.idSpaceFillerPanel1.setVisible$Z(!wrap);
this.fontChanged$();
this.validate$();
this.sequenceHolderPanel.validate$();
this.repaint$();
});

Clazz.newMeth(C$, 'setScrollValues$I$I', function (xpos, ypos) {
var x=xpos;
var y=ypos;
if (this.av.getWrapAlignment$()) {
p$1.setScrollingForWrappedPanel$I.apply(this, [x]);
} else {
var width=this.av.getAlignment$().getVisibleWidth$();
var height=this.av.getAlignment$().getHeight$();
if (x < 0) {
x=0;
}this.hextent=(this.seqPanel.seqCanvas.getSize$().width/this.av.getCharWidth$()|0);
this.vextent=(this.seqPanel.seqCanvas.getSize$().height/this.av.getCharHeight$()|0);
if (this.hextent > width) {
this.hextent=width;
}if (this.vextent > height) {
this.vextent=height;
}if ((this.hextent + x) > width) {
System.err.println$S("hextent was " + this.hextent + " and x was " + x );
x=width - this.hextent;
}if ((this.vextent + y) > height) {
y=height - this.vextent;
}if (y < 0) {
y=0;
}if (x < 0) {
System.err.println$S("x was " + x);
x=0;
}this.hscroll.setValues$I$I$I$I(x, this.hextent, 0, width);
this.vscroll.setValues$I$I$I$I(y, this.vextent, 0, height);
p$1.adjustHorizontal$I.apply(this, [x]);
p$1.adjustVertical$I.apply(this, [y]);
p$1.sendViewPosition.apply(this, []);
}});

Clazz.newMeth(C$, ['adjustmentValueChanged$java_awt_event_AdjustmentEvent','adjustmentValueChanged$'], function (evt) {
if (evt == null  || evt.getSource$() === this.apvscroll  ) {
this.annotationPanel.setScrollOffset$I$Z(this.apvscroll.getValue$(), false);
this.alabels.setScrollOffset$I$Z(this.apvscroll.getValue$(), false);
}if (evt == null  || evt.getSource$() === this.hscroll  ) {
var x=this.hscroll.getValue$();
p$1.adjustHorizontal$I.apply(this, [x]);
}if (evt == null  || evt.getSource$() === this.vscroll  ) {
var offy=this.vscroll.getValue$();
p$1.adjustVertical$I.apply(this, [offy]);
}});

Clazz.newMeth(C$, 'adjustHorizontal$I', function (x) {
var oldX=this.vpRanges.getStartRes$();
var oldwidth=this.vpRanges.getViewportWidth$();
var width=(this.seqPanel.seqCanvas.getWidth$()/this.av.getCharWidth$()|0);
if ((x == oldX) && (width == oldwidth) ) {
return;
}this.vpRanges.setViewportStartAndWidth$I$I(x, width);
if (this.av.getWrapAlignment$() || !this.fastPaint ) {
this.repaint$();
}p$1.sendViewPosition.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'adjustVertical$I', function (newY) {
if (this.av.getWrapAlignment$()) {
var oldX=this.vpRanges.getStartRes$();
var oldY=this.vpRanges.getWrappedScrollPosition$I(oldX);
if (oldY == newY) {
return;
}if (newY > -1) {
var rowSize=this.vpRanges.getViewportWidth$();
var newX=newY > oldY ? oldX + rowSize : oldX - rowSize;
this.vpRanges.setViewportStartAndWidth$I$I(Math.max(0, newX), rowSize);
}} else {
var height=(this.seqPanel.seqCanvas.getHeight$()/this.av.getCharHeight$()|0);
var oldY=this.vpRanges.getStartSeq$();
var oldheight=this.vpRanges.getViewportHeight$();
if ((newY == oldY) && (height == oldheight) ) {
return;
}this.vpRanges.setViewportStartAndHeight$I$I(newY, height);
}if (this.av.getWrapAlignment$() || !this.fastPaint ) {
this.repaint$();
}p$1.sendViewPosition.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getComplementPanel', function () {
var ap=null;
if (this.alignFrame != null ) {
var sf=this.alignFrame.getSplitFrame$();
if (sf != null ) {
var other=sf.getComplement$jalview_appletgui_AlignFrame(this.alignFrame);
if (other != null ) {
ap=other.alignPanel;
}}}return ap;
}, p$1);

Clazz.newMeth(C$, 'scrollToCentre$jalview_datamodel_SearchResultsI$I', function (sr, seqOffset) {
var mappedTo=sr.getResults$().get$I(0).getSequence$();
var seqs=this.av.getAlignment$().getSequences$();
var matched=false;
for (var seq, $seq = seqs.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
if (mappedTo === seq.getDatasetSequence$() ) {
matched=true;
break;
}}
if (!matched) {
return;
}this.scrollToPosition$jalview_datamodel_SearchResultsI$I$Z$Z(sr, seqOffset, true, true);
});

Clazz.newMeth(C$, 'sendViewPosition', function () {
$I$(15).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this.av.applet).sendViewPosition$jalview_api_AlignmentViewPanel$I$I$I$I(this, this.vpRanges.getStartRes$(), this.vpRanges.getEndRes$(), this.vpRanges.getStartSeq$(), this.vpRanges.getEndSeq$());
}, p$1);

Clazz.newMeth(C$, 'paintAlignment$Z$Z', function (updateOverview, updateStructures) {
var sorter=Clazz.new_($I$(16).c$$jalview_datamodel_AlignmentI$Z,[this.getAlignment$(), this.av.isShowAutocalculatedAbove$()]);
sorter.sort$jalview_datamodel_AlignmentAnnotationA$jalview_analysis_AnnotationSorter_SequenceAnnotationOrder(this.getAlignment$().getAlignmentAnnotation$(), this.av.getSortAnnotationsBy$());
this.repaint$();
if (updateStructures) {
$I$(15).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this.av.applet).sequenceColoursChanged$O(this);
}if (updateOverview) {
if (this.overviewPanel != null ) {
this.overviewPanel.updateOverviewImage$();
}}});

Clazz.newMeth(C$, 'update$java_awt_Graphics', function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
this.invalidate$();
var d=this.idPanel.idCanvas.getSize$();
var canvasHeight=this.seqPanel.seqCanvas.getSize$().height;
if (canvasHeight != d.height) {
this.idPanel.idCanvas.setSize$I$I(d.width, canvasHeight);
}this.setScrollValues$I$I(this.vpRanges.getStartRes$(), this.vpRanges.getStartSeq$());
this.seqPanel.seqCanvas.repaint$();
this.idPanel.idCanvas.repaint$();
if (!this.av.getWrapAlignment$()) {
if (this.av.isShowAnnotation$()) {
this.alabels.repaint$();
this.annotationPanel.repaint$();
}this.scalePanel.repaint$();
}});

Clazz.newMeth(C$, 'setScrollingForWrappedPanel$I', function (topLeftColumn) {
var scrollPosition=this.vpRanges.getWrappedScrollPosition$I(topLeftColumn);
var maxScroll=this.vpRanges.getWrappedMaxScroll$I(topLeftColumn);
this.vscroll.setUnitIncrement$I(1);
this.vscroll.setValues$I$I$I$I(scrollPosition, 1, 0, maxScroll + 1);
}, p$1);

Clazz.newMeth(C$, 'jbInit', function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17)));
this.sequenceHolderPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17)));
this.seqPanelHolder.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17)));
this.scalePanelHolder.setBackground$java_awt_Color($I$(18).white);
this.scalePanelHolder.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17)));
this.idPanelHolder.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17)));
this.idSpaceFillerPanel1.setBackground$java_awt_Color($I$(18).white);
this.idSpaceFillerPanel1.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17)));
this.annotationSpaceFillerHolder.setBackground$java_awt_Color($I$(18).white);
this.annotationSpaceFillerHolder.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17)));
this.hscroll.setOrientation$I(0);
var hscrollHolder=Clazz.new_($I$(1));
hscrollHolder.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17)));
this.hscrollFillerPanel.setBackground$java_awt_Color($I$(18).white);
this.apvscroll.setOrientation$I(1);
this.apvscroll.setVisible$Z(true);
this.apvscroll.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this.annotationPanelHolder.setBackground$java_awt_Color($I$(18).white);
this.annotationPanelHolder.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17)));
this.annotationPanelHolder.add$java_awt_Component$O(this.apvscroll, "East");
hscrollHolder.setBackground$java_awt_Color($I$(18).white);
this.seqPanelHolder.setBackground$java_awt_Color($I$(18).white);
this.idPanelHolder.setBackground$java_awt_Color($I$(18).white);
this.sequenceHolderPanel.add$java_awt_Component$O(this.scalePanelHolder, "North");
this.sequenceHolderPanel.add$java_awt_Component$O(this.seqPanelHolder, "Center");
this.seqPanelHolder.add$java_awt_Component$O(this.vscroll, "East");
this.add$java_awt_Component$O(this.idPanelHolder, "West");
this.idPanelHolder.add$java_awt_Component$O(this.idSpaceFillerPanel1, "North");
this.idPanelHolder.add$java_awt_Component$O(this.annotationSpaceFillerHolder, "South");
this.add$java_awt_Component$O(hscrollHolder, "South");
hscrollHolder.add$java_awt_Component$O(this.hscroll, "Center");
hscrollHolder.add$java_awt_Component$O(this.hscrollFillerPanel, "West");
this.add$java_awt_Component$O(this.sequenceHolderPanel, "Center");
}, p$1);

Clazz.newMeth(C$, 'updateAnnotation$', function () {
this.updateAnnotation$Z(false);
});

Clazz.newMeth(C$, 'updateAnnotation$Z', function (applyGlobalSettings) {
this.updateAnnotation$Z$Z(applyGlobalSettings, false);
});

Clazz.newMeth(C$, 'updateAnnotation$Z$Z', function (applyGlobalSettings, preserveNewGroupSettings) {
this.av.updateGroupAnnotationSettings$Z$Z(applyGlobalSettings, preserveNewGroupSettings);
this.adjustAnnotationHeight$();
});

Clazz.newMeth(C$, 'getAlignment$', function () {
return this.av.getAlignment$();
});

Clazz.newMeth(C$, 'getViewName$', function () {
return this.getName$();
});

Clazz.newMeth(C$, 'getStructureSelectionManager$', function () {
return $I$(15).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this.av.applet);
});

Clazz.newMeth(C$, ['raiseOOMWarning$S$OutOfMemoryError','raiseOOMWarning$'], function (string, error) {
System.err.println$S("Out of memory whilst '" + string + "'" );
error.printStackTrace$();
});

Clazz.newMeth(C$, 'setToScrollComplementPanel$Z', function (b) {
this.scrollComplementaryPanel=b;
});

Clazz.newMeth(C$, 'isSetToScrollComplementPanel$', function () {
return this.scrollComplementaryPanel;
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
var x=this.vpRanges.getStartRes$();
var y=this.vpRanges.getStartSeq$();
this.setScrollValues$I$I(x, y);
if (this.isSetToScrollComplementPanel$()) {
this.setToScrollComplementPanel$Z(false);
this.av.scrollComplementaryAlignment$jalview_appletgui_AlignmentPanel(p$1.getComplementPanel.apply(this, []));
this.setToScrollComplementPanel$Z(true);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:06 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
