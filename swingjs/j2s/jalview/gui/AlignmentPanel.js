(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.gui.SeqPanel','jalview.gui.IdPanel','jalview.gui.ScalePanel','jalview.gui.IdwidthAdjuster','jalview.gui.AnnotationPanel','jalview.gui.AnnotationLabels','java.awt.event.ComponentAdapter','jalview.gui.PaintRefresher','java.awt.Dimension','java.awt.Container','java.awt.Font','javax.swing.SwingUtilities','jalview.bin.Cache','jalview.analysis.AnnotationSorter','java.awt.Color','jalview.gui.ImageExporter','jalview.util.MessageManager','jalview.bin.Jalview','jalview.math.AlignmentDimension','java.io.PrintWriter','java.io.FileWriter','jalview.io.HTMLOutput','StringBuilder','jalview.schemes.ResidueProperties','jalview.util.Comparison','jalview.gui.OOMWarning','jalview.gui.FeatureRenderer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AlignmentPanel", null, 'jalview.jbgui.GAlignmentPanel', ['java.awt.event.AdjustmentListener', 'java.awt.print.Printable', 'jalview.api.AlignmentViewPanel', 'jalview.viewmodel.ViewportListenerI']);

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
this.hextent=0;
this.vextent=0;
this.scrollComplementaryPanel=false;
this.propertyChangeListener=null;
this.calculationDialog=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.hextent=0;
this.vextent=0;
this.scrollComplementaryPanel=true;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignFrame$jalview_gui_AlignViewport', function (af, av) {
Clazz.super_(C$, this,1);
this.alignFrame=af;
this.av=av;
this.setSeqPanel$jalview_gui_SeqPanel(Clazz.new_($I$(1).c$$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel,[av, this]));
this.setIdPanel$jalview_gui_IdPanel(Clazz.new_($I$(2).c$$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel,[av, this]));
this.setScalePanel$jalview_gui_ScalePanel(Clazz.new_($I$(3).c$$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel,[av, this]));
this.idPanelHolder.add$java_awt_Component$O(this.getIdPanel$(), "Center");
this.idwidthAdjuster=Clazz.new_($I$(4).c$$jalview_gui_AlignmentPanel,[this]);
this.idSpaceFillerPanel1.add$java_awt_Component$O(this.idwidthAdjuster, "Center");
this.setAnnotationPanel$jalview_gui_AnnotationPanel(Clazz.new_($I$(5).c$$jalview_gui_AlignmentPanel,[this]));
this.setAlabels$jalview_gui_AnnotationLabels(Clazz.new_($I$(6).c$$jalview_gui_AlignmentPanel,[this]));
this.annotationScroller.setViewportView$java_awt_Component(this.getAnnotationPanel$());
this.annotationSpaceFillerHolder.add$java_awt_Component$O(this.getAlabels$(), "Center");
this.scalePanelHolder.add$java_awt_Component$O(this.getScalePanel$(), "Center");
this.seqPanelHolder.add$java_awt_Component$O(this.getSeqPanel$(), "Center");
this.setScrollValues$I$I(0, 0);
this.hscroll.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this.vscroll.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this.addComponentListener$java_awt_event_ComponentListener(((P$.AlignmentPanel$1||
(function(){var C$=Clazz.newClass(P$, "AlignmentPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent', function (evt) {
var ranges=this.$finals$.av.getRanges$();
if (this.$finals$.av.getWrapAlignment$()) {
var widthInRes=this.b$['jalview.gui.AlignmentPanel'].getSeqPanel$.apply(this.b$['jalview.gui.AlignmentPanel'], []).seqCanvas.getWrappedCanvasWidth$I(this.b$['jalview.gui.AlignmentPanel'].getSeqPanel$.apply(this.b$['jalview.gui.AlignmentPanel'], []).seqCanvas.getWidth$());
ranges.setViewportWidth$I(widthInRes);
} else {
var widthInRes=(this.b$['jalview.gui.AlignmentPanel'].getSeqPanel$.apply(this.b$['jalview.gui.AlignmentPanel'], []).seqCanvas.getWidth$()/this.$finals$.av.getCharWidth$()|0);
var heightInSeq=(this.b$['jalview.gui.AlignmentPanel'].getSeqPanel$.apply(this.b$['jalview.gui.AlignmentPanel'], []).seqCanvas.getHeight$()/this.$finals$.av.getCharHeight$()|0);
ranges.setViewportWidth$I(widthInRes);
ranges.setViewportHeight$I(heightInSeq);
}});
})()
), Clazz.new_($I$(7), [this, {av: av}],P$.AlignmentPanel$1)));
var ap=this;
this.propertyChangeListener=((P$.AlignmentPanel$2||
(function(){var C$=Clazz.newClass(P$, "AlignmentPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
if (evt.getPropertyName$().equals$O("alignment")) {
$I$(8).Refresh$java_awt_Component$S$Z$Z(this.$finals$.ap, this.$finals$.av.getSequenceSetId$(), true, true);
this.b$['jalview.gui.AlignmentPanel'].alignmentChanged$.apply(this.b$['jalview.gui.AlignmentPanel'], []);
}});
})()
), Clazz.new_(P$.AlignmentPanel$2.$init$, [this, {ap: ap, av: av}]));
av.addPropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
av.getRanges$().addPropertyChangeListener$jalview_viewmodel_ViewportListenerI(this);
this.fontChanged$();
this.adjustAnnotationHeight$();
this.updateLayout$();
}, 1);

Clazz.newMeth(C$, 'getAlignViewport$', function () {
return this.av;
});

Clazz.newMeth(C$, 'alignmentChanged$', function () {
this.av.alignmentChanged$jalview_api_AlignmentViewPanel(this);
if (this.getCalculationDialog$() != null ) {
this.getCalculationDialog$().validateCalcTypes$();
}this.alignFrame.updateEditMenuBar$();
this.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'fontChanged$', function () {
var fm=this.getFontMetrics$java_awt_Font(this.av.getFont$());
this.scalePanelHolder.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9).c$$I$I,[10, this.av.getCharHeight$() + fm.getDescent$()]));
this.idSpaceFillerPanel1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9).c$$I$I,[10, this.av.getCharHeight$() + fm.getDescent$()]));
this.idwidthAdjuster.invalidate$();
this.scalePanelHolder.invalidate$();
this.getSeqPanel$().seqCanvas.img=null;
this.getAnnotationPanel$().adjustPanelHeight$();
var d=this.calculateIdWidth$();
d.setSize$I$I(d.width + 4, d.height);
this.getIdPanel$().getIdCanvas$().setPreferredSize$java_awt_Dimension(d);
this.hscrollFillerPanel.setPreferredSize$java_awt_Dimension(d);
this.repaint$();
});

Clazz.newMeth(C$, 'calculateIdWidth$', function () {
var r=null;
if (this.av.getIdWidth$() < 0) {
var afwidth=(this.alignFrame != null  ? this.alignFrame.getWidth$() : 300);
var maxwidth=Math.max(20, Math.min(afwidth - 200, (2 * afwidth/3|0)));
r=this.calculateIdWidth$I(maxwidth);
this.av.setIdWidth$I(r.width);
} else {
r=Clazz.new_($I$(9));
r.width=this.av.getIdWidth$();
r.height=0;
}return r;
});

Clazz.newMeth(C$, 'calculateIdWidth$I', function (maxwidth) {
var c=Clazz.new_($I$(10));
var fm=c.getFontMetrics$java_awt_Font(Clazz.new_($I$(11).c$$S$I$I,[this.av.font.getName$(), 2, this.av.font.getSize$()]));
var al=this.av.getAlignment$();
var i=0;
var idWidth=0;
var id;
while ((i < al.getHeight$()) && (al.getSequenceAt$I(i) != null ) ){
var s=al.getSequenceAt$I(i);
id=s.getDisplayId$Z(this.av.getShowJVSuffix$());
if (fm.stringWidth$S(id) > idWidth) {
idWidth=fm.stringWidth$S(id);
}i++;
}
i=0;
if (al.getAlignmentAnnotation$() != null ) {
fm=c.getFontMetrics$java_awt_Font(this.getAlabels$().getFont$());
while (i < al.getAlignmentAnnotation$().length){
var label=al.getAlignmentAnnotation$()[i].label;
if (fm.stringWidth$S(label) > idWidth) {
idWidth=fm.stringWidth$S(label);
}i++;
}
}return Clazz.new_($I$(9).c$$I$I,[maxwidth < 0 ? idWidth : Math.min(maxwidth, idWidth), 12]);
});

Clazz.newMeth(C$, 'highlightSearchResults$jalview_datamodel_SearchResultsI', function (results) {
var scrolled=this.scrollToPosition$jalview_datamodel_SearchResultsI$I$Z(results, 0, false);
var fastPaint=!(scrolled && this.av.getWrapAlignment$() );
this.getSeqPanel$().seqCanvas.highlightSearchResults$jalview_datamodel_SearchResultsI$Z(results, fastPaint);
});

Clazz.newMeth(C$, 'scrollToPosition$jalview_datamodel_SearchResultsI', function (searchResults) {
return this.scrollToPosition$jalview_datamodel_SearchResultsI$I$Z(searchResults, 0, false);
});

Clazz.newMeth(C$, 'scrollToPosition$jalview_datamodel_SearchResultsI$I$Z', function (results, verticalOffset, centre) {
var startv;
var endv;
var starts;
var ends;
var ranges=this.av.getRanges$();
if (results == null  || results.isEmpty$()  || this.av == null   || this.av.getAlignment$() == null  ) {
return false;
}var seqIndex=this.av.getAlignment$().findIndex$jalview_datamodel_SearchResultsI(results);
if (seqIndex == -1) {
return false;
}var seq=this.av.getAlignment$().getSequenceAt$I(seqIndex);
var r=results.getResults$jalview_datamodel_SequenceI$I$I(seq, 0, this.av.getAlignment$().getWidth$());
if (r == null ) {
return false;
}var start=r[0];
var end=r[1];
if (centre) {
var offset=((ranges.getEndRes$() - ranges.getStartRes$() + 1)/2|0) - 1;
start=Math.max(start - offset, 0);
end=end + offset - 1;
}if (start < 0) {
return false;
}if (end == seq.getEnd$()) {
return false;
}if (this.av.hasHiddenColumns$()) {
var hidden=this.av.getAlignment$().getHiddenColumns$();
start=hidden.absoluteToVisibleColumn$I(start);
end=hidden.absoluteToVisibleColumn$I(end);
if (start == end) {
if (!hidden.isVisible$I(r[0])) {
return false;
}}}seqIndex=Math.max(0, seqIndex - verticalOffset);
var scrollNeeded=true;
if (!this.av.getWrapAlignment$()) {
if ((startv=ranges.getStartRes$()) >= start) {
this.setScrollValues$I$I(start, seqIndex);
} else if ((endv=ranges.getEndRes$()) <= end) {
this.setScrollValues$I$I(startv + end - endv, seqIndex);
} else if ((starts=ranges.getStartSeq$()) > seqIndex) {
this.setScrollValues$I$I(ranges.getStartRes$(), seqIndex);
} else if ((ends=ranges.getEndSeq$()) <= seqIndex) {
this.setScrollValues$I$I(ranges.getStartRes$(), starts + seqIndex - ends + 1);
}scrollNeeded=false;
} else {
scrollNeeded=ranges.scrollToWrappedVisible$I(start);
}this.paintAlignment$Z$Z(false, false);
return scrollNeeded;
});

Clazz.newMeth(C$, 'getOverviewPanel$', function () {
return this.overviewPanel;
});

Clazz.newMeth(C$, 'setOverviewPanel$jalview_gui_OverviewPanel', function (op) {
this.overviewPanel=op;
});

Clazz.newMeth(C$, 'setAnnotationVisible$Z', function (b) {
if (!this.av.getWrapAlignment$()) {
this.annotationSpaceFillerHolder.setVisible$Z(b);
this.annotationScroller.setVisible$Z(b);
}this.repaint$();
});

Clazz.newMeth(C$, 'adjustAnnotationHeight$', function () {
if (this.alignFrame.getHeight$() == 0) {
System.out.println$S("NEEDS FIXING");
}this.validateAnnotationDimensions$Z(true);
this.addNotify$();
this.paintAlignment$Z$Z(true, this.av.needToUpdateStructureViews$());
});

Clazz.newMeth(C$, 'validateAnnotationDimensions$Z', function (adjustPanelHeight) {
var annotationHeight=this.getAnnotationPanel$().adjustPanelHeight$();
annotationHeight=this.getAnnotationPanel$().adjustForAlignFrame$Z$I(adjustPanelHeight, annotationHeight);
this.hscroll.addNotify$();
this.annotationScroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9).c$$I$I,[this.annotationScroller.getWidth$(), annotationHeight]));
var e=this.idPanel.getSize$();
this.alabels.setSize$java_awt_Dimension(Clazz.new_($I$(9).c$$I$I,[e.width, annotationHeight]));
this.annotationSpaceFillerHolder.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9).c$$I$I,[this.annotationSpaceFillerHolder.getWidth$(), annotationHeight]));
this.annotationScroller.validate$();
this.annotationScroller.addNotify$();
});

Clazz.newMeth(C$, 'updateLayout$', function () {
this.fontChanged$();
this.setAnnotationVisible$Z(this.av.isShowAnnotation$());
var wrap=this.av.getWrapAlignment$();
var ranges=this.av.getRanges$();
ranges.setStartSeq$I(0);
this.scalePanelHolder.setVisible$Z(!wrap);
this.hscroll.setVisible$Z(!wrap);
this.idwidthAdjuster.setVisible$Z(!wrap);
if (wrap) {
this.annotationScroller.setVisible$Z(false);
this.annotationSpaceFillerHolder.setVisible$Z(false);
} else if (this.av.isShowAnnotation$()) {
this.annotationScroller.setVisible$Z(true);
this.annotationSpaceFillerHolder.setVisible$Z(true);
this.validateAnnotationDimensions$Z(false);
}var canvasWidth=this.getSeqPanel$().seqCanvas.getWidth$();
if (canvasWidth > 0) {
if (wrap) {
var widthInRes=this.getSeqPanel$().seqCanvas.getWrappedCanvasWidth$I(canvasWidth);
ranges.setViewportWidth$I(widthInRes);
} else {
var widthInRes=((canvasWidth/this.av.getCharWidth$()|0));
var heightInSeq=((this.getSeqPanel$().seqCanvas.getHeight$()/this.av.getCharHeight$()|0));
ranges.setViewportWidth$I(widthInRes);
ranges.setViewportHeight$I(heightInSeq);
}}this.idSpaceFillerPanel1.setVisible$Z(!wrap);
this.repaint$();
});

Clazz.newMeth(C$, 'setScrollValues$I$I', function (xpos, ypos) {
var x=xpos;
var y=ypos;
if (this.av == null  || this.av.getAlignment$() == null  ) {
return;
}if (this.av.getWrapAlignment$()) {
p$1.setScrollingForWrappedPanel$I.apply(this, [x]);
} else {
var width=this.av.getAlignment$().getVisibleWidth$();
var height=this.av.getAlignment$().getHeight$();
this.hextent=(this.getSeqPanel$().seqCanvas.getWidth$()/this.av.getCharWidth$()|0);
this.vextent=(this.getSeqPanel$().seqCanvas.getHeight$()/this.av.getCharHeight$()|0);
if (this.hextent > width) {
this.hextent=width;
}if (this.vextent > height) {
this.vextent=height;
}if ((this.hextent + x) > width) {
x=width - this.hextent;
}if ((this.vextent + y) > height) {
y=height - this.vextent;
}if (y < 0) {
y=0;
}if (x < 0) {
x=0;
}this.hscroll.setValues$I$I$I$I(x, this.hextent, 0, width);
this.vscroll.setValues$I$I$I$I(y, this.vextent, 0, height);
}});

Clazz.newMeth(C$, ['adjustmentValueChanged$java_awt_event_AdjustmentEvent','adjustmentValueChanged$'], function (evt) {
if (this.av.getWrapAlignment$()) {
this.adjustScrollingWrapped$java_awt_event_AdjustmentEvent(evt);
return;
}var ranges=this.av.getRanges$();
if (evt.getSource$() === this.hscroll ) {
var oldX=ranges.getStartRes$();
var oldwidth=ranges.getViewportWidth$();
var x=this.hscroll.getValue$();
var width=(this.getSeqPanel$().seqCanvas.getWidth$()/this.av.getCharWidth$()|0);
if ((x == oldX) && (width == oldwidth) ) {
return;
}ranges.setViewportStartAndWidth$I$I(x, width);
} else if (evt.getSource$() === this.vscroll ) {
var oldY=ranges.getStartSeq$();
var oldheight=ranges.getViewportHeight$();
var y=this.vscroll.getValue$();
var height=(this.getSeqPanel$().seqCanvas.getHeight$()/this.av.getCharHeight$()|0);
if ((y == oldY) && (height == oldheight) ) {
return;
}ranges.setViewportStartAndHeight$I$I(y, height);
}this.repaint$();
});

Clazz.newMeth(C$, 'adjustScrollingWrapped$java_awt_event_AdjustmentEvent', function (evt) {
if (evt.getSource$() === this.hscroll ) {
return;
}var ranges=this.av.getRanges$();
if (evt.getSource$() === this.vscroll ) {
var newY=this.vscroll.getValue$();
var oldX=ranges.getStartRes$();
var oldY=ranges.getWrappedScrollPosition$I(oldX);
if (oldY == newY) {
return;
}if (newY > -1) {
var rowSize=ranges.getViewportWidth$();
var newX=newY > oldY ? oldX + rowSize : oldX - rowSize;
ranges.setViewportStartAndWidth$I$I(Math.max(0, newX), rowSize);
}} else {
$I$(12).invokeLater$Runnable(((P$.AlignmentPanel$3||
(function(){var C$=Clazz.newClass(P$, "AlignmentPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(13).log.warn$O("Unexpected path through code: Wrapped jar file opened with wrap alignment set in preferences");
this.$finals$.ranges.setStartRes$I(0);
this.$finals$.ranges.setStartSeq$I(0);
});
})()
), Clazz.new_(P$.AlignmentPanel$3.$init$, [this, {ranges: ranges}])));
}this.repaint$();
});

Clazz.newMeth(C$, 'paintAlignment$Z$Z', function (updateOverview, updateStructures) {
var sorter=Clazz.new_($I$(14).c$$jalview_datamodel_AlignmentI$Z,[this.getAlignment$(), this.av.isShowAutocalculatedAbove$()]);
sorter.sort$jalview_datamodel_AlignmentAnnotationA$jalview_analysis_AnnotationSorter_SequenceAnnotationOrder(this.getAlignment$().getAlignmentAnnotation$(), this.av.getSortAnnotationsBy$());
this.repaint$();
if (updateStructures) {
this.av.getStructureSelectionManager$().sequenceColoursChanged$O(this);
}if (updateOverview) {
if (this.overviewPanel != null ) {
this.overviewPanel.updateOverviewImage$();
}}});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
this.invalidate$();
var d=this.getIdPanel$().getIdCanvas$().getPreferredSize$();
this.idPanelHolder.setPreferredSize$java_awt_Dimension(d);
this.hscrollFillerPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9).c$$I$I,[d.width, 12]));
this.validate$();
var ranges=this.av.getRanges$();
this.setScrollValues$I$I(ranges.getStartRes$(), ranges.getStartSeq$());
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'setScrollingForWrappedPanel$I', function (topLeftColumn) {
var ranges=this.av.getRanges$();
var scrollPosition=ranges.getWrappedScrollPosition$I(topLeftColumn);
var maxScroll=ranges.getWrappedMaxScroll$I(topLeftColumn);
this.vscroll.setUnitIncrement$I(1);
this.vscroll.setValues$I$I$I$I(scrollPosition, 1, 0, maxScroll + 1);
}, p$1);

Clazz.newMeth(C$, ['print$java_awt_Graphics$java_awt_print_PageFormat$I','print$'], function (pg, pf, pi) {
pg.translate$I$I((pf.getImageableX$()|0), (pf.getImageableY$()|0));
var pwidth=(pf.getImageableWidth$()|0);
var pheight=(pf.getImageableHeight$()|0);
if (this.av.getWrapAlignment$()) {
return this.printWrappedAlignment$I$I$I$java_awt_Graphics(pwidth, pheight, pi, pg);
} else {
return this.printUnwrapped$I$I$I$java_awt_Graphics$java_awt_Graphics(pwidth, pheight, pi, pg, pg);
}});

Clazz.newMeth(C$, 'printUnwrapped$I$I$I$java_awt_Graphics$java_awt_Graphics', function (pageWidth, pageHeight, pageIndex, idGraphics, alignmentGraphics) {
var idWidth=this.getVisibleIdWidth$Z(false);
var alignmentGraphicsOffset=idGraphics !== alignmentGraphics  ? 0 : idWidth;
var fm=this.getFontMetrics$java_awt_Font(this.av.getFont$());
var charHeight=this.av.getCharHeight$();
var scaleHeight=charHeight + fm.getDescent$();
idGraphics.setColor$java_awt_Color($I$(15).white);
idGraphics.fillRect$I$I$I$I(0, 0, pageWidth, pageHeight);
idGraphics.setFont$java_awt_Font(this.av.getFont$());
var totalRes=((pageWidth - idWidth)/this.av.getCharWidth$()|0);
var totalSeq=((pageHeight - scaleHeight)/charHeight|0) - 1;
var alignmentWidth=this.av.getAlignment$().getVisibleWidth$();
var pagesWide=((alignmentWidth/totalRes|0)) + 1;
var startRes=(pageIndex % pagesWide) * totalRes;
var endRes=Math.min(startRes + totalRes - 1, alignmentWidth - 1);
var startSeq=((pageIndex/pagesWide|0)) * totalSeq;
var alignmentHeight=this.av.getAlignment$().getHeight$();
var endSeq=Math.min(startSeq + totalSeq, alignmentHeight);
var pagesHigh=(((alignmentHeight/totalSeq|0)) + 1) * pageHeight;
if (this.av.isShowAnnotation$()) {
pagesHigh+=this.getAnnotationPanel$().adjustPanelHeight$() + 3;
}pagesHigh=(pagesHigh/(pageHeight)|0);
if (pageIndex >= (pagesWide * pagesHigh)) {
return 1;
}var alignmentDrawnHeight=(endSeq - startSeq) * charHeight + 3;
alignmentGraphics.translate$I$I(alignmentGraphicsOffset, 0);
this.getScalePanel$().drawScale$java_awt_Graphics$I$I$I$I(alignmentGraphics, startRes, endRes, pageWidth - idWidth, scaleHeight);
alignmentGraphics.translate$I$I(-alignmentGraphicsOffset, 0);
idGraphics.translate$I$I(0, scaleHeight);
var idCanvas=this.getIdPanel$().getIdCanvas$();
var selection=this.av.getSelectionGroup$() == null  ? null : this.av.getSelectionGroup$().getSequences$java_util_Map(null);
idCanvas.drawIds$java_awt_Graphics2D$jalview_gui_AlignViewport$I$I$java_util_List(idGraphics, this.av, startSeq, endSeq - 1, selection);
idGraphics.setFont$java_awt_Font(this.av.getFont$());
idGraphics.translate$I$I(0, -scaleHeight);
alignmentGraphics.translate$I$I(alignmentGraphicsOffset, scaleHeight);
this.getSeqPanel$().seqCanvas.drawPanelForPrinting$java_awt_Graphics$I$I$I$I(alignmentGraphics, startRes, endRes, startSeq, endSeq - 1);
alignmentGraphics.translate$I$I(-alignmentGraphicsOffset, 0);
if (this.av.isShowAnnotation$() && (endSeq == alignmentHeight) ) {
var offset=this.getAlabels$().getScrollOffset$();
idGraphics.translate$I$I(0, -offset);
idGraphics.translate$I$I(0, alignmentDrawnHeight);
this.getAlabels$().drawComponent$java_awt_Graphics$I(idGraphics, idWidth);
idGraphics.translate$I$I(0, -alignmentDrawnHeight);
alignmentGraphics.translate$I$I(alignmentGraphicsOffset, alignmentDrawnHeight);
this.getAnnotationPanel$().renderer.drawComponent$jalview_renderer_AwtRenderPanelI$jalview_api_AlignViewportI$java_awt_Graphics$I$I$I(this.getAnnotationPanel$(), this.av, alignmentGraphics, -1, startRes, endRes + 1);
}return 0;
});

Clazz.newMeth(C$, 'printWrappedAlignment$I$I$I$java_awt_Graphics', function (pageWidth, pageHeight, pageNumber, g) {
var annotationHeight=0;
if (this.av.isShowAnnotation$()) {
annotationHeight=this.getAnnotationPanel$().adjustPanelHeight$();
}var hgap=this.av.getCharHeight$();
if (this.av.getScaleAboveWrapped$()) {
hgap+=this.av.getCharHeight$();
}var cHeight=this.av.getAlignment$().getHeight$() * this.av.getCharHeight$() + hgap + annotationHeight;
var idWidth=this.getVisibleIdWidth$Z(false);
var maxwidth=this.av.getAlignment$().getVisibleWidth$();
var resWidth=this.getSeqPanel$().seqCanvas.getWrappedCanvasWidth$I(pageWidth - idWidth);
var totalHeight=cHeight * ((maxwidth/resWidth|0) + 1);
g.setColor$java_awt_Color($I$(15).white);
g.fillRect$I$I$I$I(0, 0, pageWidth, pageHeight);
g.setFont$java_awt_Font(this.av.getFont$());
g.setColor$java_awt_Color($I$(15).black);
g.translate$I$I(0, -pageNumber * pageHeight);
g.setClip$I$I$I$I(0, pageNumber * pageHeight, pageWidth, pageHeight);
var idCanvas=this.getIdPanel$().getIdCanvas$();
idCanvas.drawIdsWrapped$java_awt_Graphics2D$jalview_gui_AlignViewport$I$I(g, this.av, 0, totalHeight);
g.translate$I$I(idWidth, 0);
this.getSeqPanel$().seqCanvas.drawWrappedPanelForPrinting$java_awt_Graphics$I$I$I(g, pageWidth - idWidth, totalHeight, 0);
if ((pageNumber * pageHeight) < totalHeight) {
return 0;
} else {
return 1;
}});

Clazz.newMeth(C$, 'getVisibleIdWidth$', function () {
return this.getVisibleIdWidth$Z(true);
});

Clazz.newMeth(C$, 'getVisibleIdWidth$Z', function (onscreen) {
if (!onscreen && $I$(13).getDefault$S$Z("FIGURE_AUTOIDWIDTH", false) ) {
return this.calculateIdWidth$I(-1).width + 4;
}var idwidth=null;
if (onscreen || (idwidth=$I$(13).getIntegerProperty$S("FIGURE_FIXEDIDWIDTH")) == null  ) {
var w=this.getIdPanel$().getWidth$();
return (w > 0 ? w : this.calculateIdWidth$().width + 4);
}return idwidth.intValue$() + 4;
});

Clazz.newMeth(C$, 'makeAlignmentImage$jalview_util_ImageMaker_TYPE$java_io_File', function (type, file) {
var borderBottomOffset=5;
var aDimension=this.getAlignmentDimension$();
var writer=((P$.AlignmentPanel$4||
(function(){var C$=Clazz.newClass(P$, "AlignmentPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.ImageExporter','jalview.gui.ImageExporter.ImageWriterI']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['exportImage$java_awt_Graphics','exportImage$'], function (graphics) {
if (this.b$['jalview.gui.AlignmentPanel'].av.getWrapAlignment$()) {
this.b$['jalview.gui.AlignmentPanel'].printWrappedAlignment$I$I$I$java_awt_Graphics.apply(this.b$['jalview.gui.AlignmentPanel'], [this.$finals$.aDimension.getWidth$(), this.$finals$.aDimension.getHeight$() + 5, 0, graphics]);
} else {
this.b$['jalview.gui.AlignmentPanel'].printUnwrapped$I$I$I$java_awt_Graphics$java_awt_Graphics.apply(this.b$['jalview.gui.AlignmentPanel'], [this.$finals$.aDimension.getWidth$(), this.$finals$.aDimension.getHeight$(), 0, graphics, graphics]);
}});
})()
), Clazz.new_(P$.AlignmentPanel$4.$init$, [this, {aDimension: aDimension}]));
var fileTitle=this.alignFrame.getTitle$();
var exporter=Clazz.new_($I$(16).c$$jalview_gui_ImageExporter_ImageWriterI$jalview_gui_IProgressIndicator$jalview_util_ImageMaker_TYPE$S,[writer, this.alignFrame, type, fileTitle]);
var imageWidth=aDimension.getWidth$();
var imageHeight=aDimension.getHeight$() + 5;
var of=$I$(17).getString$S("label.alignment");
exporter.doExport$java_io_File$java_awt_Component$I$I$S(file, this, imageWidth, imageHeight, of);
});

Clazz.newMeth(C$, 'getAlignmentDimension$', function () {
var maxwidth=this.av.getAlignment$().getVisibleWidth$();
var height=((this.av.getAlignment$().getHeight$() + 1) * this.av.getCharHeight$()) + this.getScalePanel$().getHeight$();
var width=this.getVisibleIdWidth$Z(false) + (maxwidth * this.av.getCharWidth$());
if (this.av.getWrapAlignment$()) {
height=this.getWrappedHeight$();
if ($I$(18).isHeadlessMode$()) {
width=this.alignFrame.getWidth$() - this.vscroll.getPreferredSize$().width - this.alignFrame.getInsets$().left - this.alignFrame.getInsets$().right - this.getVisibleIdWidth$()  + this.getVisibleIdWidth$Z(false);
} else {
width=this.getSeqPanel$().getWidth$() + this.getVisibleIdWidth$Z(false);
}} else if (this.av.isShowAnnotation$()) {
height+=this.getAnnotationPanel$().adjustPanelHeight$() + 3;
}return Clazz.new_($I$(19).c$$I$I,[width, height]);
});

Clazz.newMeth(C$, 'makePNGImageMap$java_io_File$S', function (imgMapFile, imageName) {
var idWidth=this.getVisibleIdWidth$Z(false);
var fm=this.getFontMetrics$java_awt_Font(this.av.getFont$());
var scaleHeight=this.av.getCharHeight$() + fm.getDescent$();
if (imgMapFile != null ) {
try {
var sSize=this.av.getAlignment$().getHeight$();
var alwidth=this.av.getAlignment$().getWidth$();
var out=Clazz.new_($I$(20).c$$java_io_Writer,[Clazz.new_($I$(21).c$$java_io_File,[imgMapFile])]);
out.println$S($I$(22).getImageMapHTML$());
out.println$S("<img src=\"" + imageName + "\" border=\"0\" usemap=\"#Map\" >" + "<map name=\"Map\">" );
for (var s=0; s < sSize; s++) {
var sy=s * this.av.getCharHeight$() + scaleHeight;
var seq=this.av.getAlignment$().getSequenceAt$I(s);
var groups=this.av.getAlignment$().findAllGroups$jalview_datamodel_SequenceI(seq);
for (var column=0; column < alwidth; column++) {
var text=Clazz.new_($I$(23).c$$I,[512]);
var triplet=null;
if (this.av.getAlignment$().isNucleotide$()) {
triplet=$I$(24).nucleotideName.get$O(seq.getCharAt$I(column) + "");
} else {
triplet=$I$(24).aa2Triplet.get$O(seq.getCharAt$I(column) + "");
}if (triplet == null ) {
continue;
}var seqPos=seq.findPosition$I(column);
var gSize=groups.length;
for (var g=0; g < gSize; g++) {
if (text.length$() < 1) {
text.append$S("<area shape=\"rect\" coords=\"").append$I((idWidth + column * this.av.getCharWidth$())).append$S(",").append$I(sy).append$S(",").append$I((idWidth + (column + 1) * this.av.getCharWidth$())).append$S(",").append$I((this.av.getCharHeight$() + sy)).append$S("\"").append$S(" onMouseOver=\"toolTip(\'").append$I(seqPos).append$S(" ").append$S(triplet);
}if (groups[g].getStartRes$() < column && groups[g].getEndRes$() > column ) {
text.append$S("<br><em>").append$S(groups[g].getName$()).append$S("</em>");
}}
if (text.length$() < 1) {
text.append$S("<area shape=\"rect\" coords=\"").append$I((idWidth + column * this.av.getCharWidth$())).append$S(",").append$I(sy).append$S(",").append$I((idWidth + (column + 1) * this.av.getCharWidth$())).append$S(",").append$I((this.av.getCharHeight$() + sy)).append$S("\"").append$S(" onMouseOver=\"toolTip(\'").append$I(seqPos).append$S(" ").append$S(triplet);
}if (!$I$(25).isGap$C(seq.getCharAt$I(column))) {
var features=seq.findFeatures$I$I$SA(column, column, []);
for (var sf, $sf = features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if (sf.isContactFeature$()) {
text.append$S("<br>").append$S(sf.getType$()).append$S(" ").append$I(sf.getBegin$()).append$S(":").append$I(sf.getEnd$());
} else {
text.append$S("<br>");
text.append$S(sf.getType$());
var description=sf.getDescription$();
if (description != null  && !sf.getType$().equals$O(description) ) {
description=description.replace$CharSequence$CharSequence("\"", "&quot;");
text.append$S(" ").append$S(description);
}}var status=sf.getStatus$();
if (status != null  && !"".equals$O(status) ) {
text.append$S(" (").append$S(status).append$S(")");
}}
if (text.length$() > 1) {
text.append$S("\')\"; onMouseOut=\"toolTip()\";  href=\"#\">");
out.println$S(text.toString());
}}}
}
out.println$S("</map></body></html>");
out.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'getWrappedHeight$', function () {
var seqPanelWidth=this.getSeqPanel$().seqCanvas.getWidth$();
if (System.getProperty$S("java.awt.headless") != null  && System.getProperty$S("java.awt.headless").equals$O("true") ) {
seqPanelWidth=this.alignFrame.getWidth$() - this.getVisibleIdWidth$() - this.vscroll.getPreferredSize$().width - this.alignFrame.getInsets$().left - this.alignFrame.getInsets$().right ;
}var chunkWidth=this.getSeqPanel$().seqCanvas.getWrappedCanvasWidth$I(seqPanelWidth);
var hgap=this.av.getCharHeight$();
if (this.av.getScaleAboveWrapped$()) {
hgap+=this.av.getCharHeight$();
}var annotationHeight=0;
if (this.av.isShowAnnotation$()) {
annotationHeight=this.getAnnotationPanel$().adjustPanelHeight$();
}var cHeight=this.av.getAlignment$().getHeight$() * this.av.getCharHeight$() + hgap + annotationHeight;
var maxwidth=this.av.getAlignment$().getWidth$();
if (this.av.hasHiddenColumns$()) {
maxwidth=this.av.getAlignment$().getHiddenColumns$().absoluteToVisibleColumn$I(maxwidth) - 1;
}var height=(((maxwidth/chunkWidth|0)) + 1) * cHeight;
return height;
});

Clazz.newMeth(C$, 'closePanel$', function () {
$I$(8).RemoveComponent$java_awt_Component(this.getSeqPanel$().seqCanvas);
$I$(8).RemoveComponent$java_awt_Component(this.getIdPanel$().getIdCanvas$());
$I$(8).RemoveComponent$java_awt_Component(this);
this.closeChildFrames$();
if (this.annotationPanel != null ) {
this.annotationPanel.dispose$();
this.annotationPanel=null;
}if (this.av != null ) {
this.av.removePropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
this.propertyChangeListener=null;
var ssm=this.av.getStructureSelectionManager$();
ssm.removeStructureViewerListener$O$SA(this.getSeqPanel$(), null);
ssm.removeSelectionListener$jalview_structure_SelectionListener(this.getSeqPanel$());
ssm.removeCommandListener$jalview_structure_CommandListener(this.av);
ssm.removeStructureViewerListener$O$SA(this.getSeqPanel$(), null);
ssm.removeSelectionListener$jalview_structure_SelectionListener(this.getSeqPanel$());
this.av.dispose$();
this.av=null;
} else {
if ($I$(13).log.isDebugEnabled$()) {
$I$(13).log.warn$O("Closing alignment panel which is already closed.");
}}});

Clazz.newMeth(C$, 'closeChildFrames$', function () {
if (this.overviewPanel != null ) {
this.overviewPanel.dispose$();
this.overviewPanel=null;
}if (this.calculationDialog != null ) {
this.calculationDialog.closeFrame$();
this.calculationDialog=null;
}});

Clazz.newMeth(C$, 'updateAnnotation$', function () {
this.updateAnnotation$Z$Z(false, false);
});

Clazz.newMeth(C$, 'updateAnnotation$Z', function (applyGlobalSettings) {
this.updateAnnotation$Z$Z(applyGlobalSettings, false);
});

Clazz.newMeth(C$, 'updateAnnotation$Z$Z', function (applyGlobalSettings, preserveNewGroupSettings) {
this.av.updateGroupAnnotationSettings$Z$Z(applyGlobalSettings, preserveNewGroupSettings);
this.adjustAnnotationHeight$();
});

Clazz.newMeth(C$, 'getAlignment$', function () {
return this.av == null  ? null : this.av.getAlignment$();
});

Clazz.newMeth(C$, 'getViewName$', function () {
return this.av.getViewName$();
});

Clazz.newMeth(C$, 'setSelected$Z', function (b) {
try {
if (this.alignFrame.getSplitViewContainer$() != null ) {
(this.alignFrame.getSplitViewContainer$()).setSelected$Z(b);
}this.alignFrame.setSelected$Z(b);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (b) {
this.alignFrame.setDisplayedView$jalview_gui_AlignmentPanel(this);
}});

Clazz.newMeth(C$, 'getStructureSelectionManager$', function () {
return this.av.getStructureSelectionManager$();
});

Clazz.newMeth(C$, ['raiseOOMWarning$S$OutOfMemoryError','raiseOOMWarning$'], function (string, error) {
Clazz.new_($I$(26).c$$S$OutOfMemoryError$java_awt_Component,[string, error, this]);
});

Clazz.newMeth(C$, 'cloneFeatureRenderer$', function () {
return Clazz.new_($I$(27).c$$jalview_gui_AlignmentPanel,[this]);
});

Clazz.newMeth(C$, 'getFeatureRenderer$', function () {
return this.seqPanel.seqCanvas.getFeatureRenderer$();
});

Clazz.newMeth(C$, 'updateFeatureRenderer$jalview_renderer_seqfeatures_FeatureRenderer', function (fr) {
fr.transferSettings$jalview_api_FeatureRenderer(this.getSeqPanel$().seqCanvas.getFeatureRenderer$());
});

Clazz.newMeth(C$, 'updateFeatureRendererFrom$jalview_api_FeatureRenderer', function (fr) {
if (this.getSeqPanel$().seqCanvas.getFeatureRenderer$() != null ) {
this.getSeqPanel$().seqCanvas.getFeatureRenderer$().transferSettings$jalview_api_FeatureRenderer(fr);
}});

Clazz.newMeth(C$, 'getScalePanel$', function () {
return this.scalePanel;
});

Clazz.newMeth(C$, 'setScalePanel$jalview_gui_ScalePanel', function (scalePanel) {
this.scalePanel=scalePanel;
});

Clazz.newMeth(C$, 'getSeqPanel$', function () {
return this.seqPanel;
});

Clazz.newMeth(C$, 'setSeqPanel$jalview_gui_SeqPanel', function (seqPanel) {
this.seqPanel=seqPanel;
});

Clazz.newMeth(C$, 'getAnnotationPanel$', function () {
return this.annotationPanel;
});

Clazz.newMeth(C$, 'setAnnotationPanel$jalview_gui_AnnotationPanel', function (annotationPanel) {
this.annotationPanel=annotationPanel;
});

Clazz.newMeth(C$, 'getAlabels$', function () {
return this.alabels;
});

Clazz.newMeth(C$, 'setAlabels$jalview_gui_AnnotationLabels', function (alabels) {
this.alabels=alabels;
});

Clazz.newMeth(C$, 'getIdPanel$', function () {
return this.idPanel;
});

Clazz.newMeth(C$, 'setIdPanel$jalview_gui_IdPanel', function (idPanel) {
this.idPanel=idPanel;
});

Clazz.newMeth(C$, 'scrollToCentre$jalview_datamodel_SearchResultsI$I', function (sr, verticalOffset) {
this.scrollToPosition$jalview_datamodel_SearchResultsI$I$Z(sr, verticalOffset, true);
});

Clazz.newMeth(C$, 'setToScrollComplementPanel$Z', function (b) {
this.scrollComplementaryPanel=b;
});

Clazz.newMeth(C$, 'isSetToScrollComplementPanel$', function () {
return this.scrollComplementaryPanel;
});

Clazz.newMeth(C$, 'refresh$Z', function (adjustHeight) {
this.validateAnnotationDimensions$Z(adjustHeight);
this.addNotify$();
if (adjustHeight) {
this.paintAlignment$Z$Z(true, false);
} else {
this.repaint$();
}});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
var ranges=this.av.getRanges$();
var x=ranges.getStartRes$();
var y=ranges.getStartSeq$();
this.setScrollValues$I$I(x, y);
if (this.isSetToScrollComplementPanel$()) {
this.setToScrollComplementPanel$Z(false);
this.av.scrollComplementaryAlignment$();
this.setToScrollComplementPanel$Z(true);
}});

Clazz.newMeth(C$, 'setCalculationDialog$jalview_gui_CalculationChooser', function (calculationChooser) {
this.calculationDialog=calculationChooser;
});

Clazz.newMeth(C$, 'getCalculationDialog$', function () {
return this.calculationDialog;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
