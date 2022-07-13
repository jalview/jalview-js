(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.bin.Cache','jalview.viewmodel.OverviewDimensionsShowHidden','jalview.viewmodel.OverviewDimensionsHideHidden','java.awt.BorderLayout','jalview.gui.ProgressPanel','jalview.util.MessageManager','jalview.gui.OverviewCanvas','java.awt.Dimension','java.awt.event.ComponentAdapter','javax.swing.SwingUtilities','java.awt.Cursor','java.awt.event.MouseMotionAdapter','jalview.util.Platform','java.awt.event.MouseAdapter','javax.swing.JPopupMenu','javax.swing.JCheckBoxMenuItem','Thread','javax.swing.JInternalFrame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OverviewPanel", null, 'javax.swing.JPanel', ['Runnable', 'jalview.viewmodel.ViewportListenerI']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.showHidden=true;
this.draggingBox=false;
},1);

C$.$fields$=[['Z',['showHidden','draggingBox'],'O',['od','jalview.viewmodel.OverviewDimensions','oviewCanvas','jalview.gui.OverviewCanvas','av','jalview.gui.AlignViewport','ap','jalview.gui.AlignmentPanel','displayToggle','javax.swing.JCheckBoxMenuItem','progressPanel','jalview.gui.ProgressPanel']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel',  function (alPanel) {
Clazz.super_(C$, this);
this.av=alPanel.av;
this.ap=alPanel;
this.showHidden=$I$(1).getDefault$S$Z("SHOW_OV_HIDDEN_AT_START", false);
if (this.showHidden) {
this.od=Clazz.new_([this.av.getRanges$(), (this.av.isShowAnnotation$() && this.av.getAlignmentConservationAnnotation$() != null  )],$I$(2,1).c$$jalview_viewmodel_ViewportRanges$Z);
} else {
this.od=Clazz.new_([this.av.getRanges$(), (this.av.isShowAnnotation$() && this.av.getAlignmentConservationAnnotation$() != null  )],$I$(3,1).c$$jalview_viewmodel_ViewportRanges$Z);
}this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1)));
this.progressPanel=Clazz.new_(["OverviewUpdate", $I$(6).getString$S("label.oview_calc"), this.getWidth$()],$I$(5,1).c$$S$S$I);
this.add$java_awt_Component$O(this.progressPanel, "South");
this.oviewCanvas=Clazz.new_($I$(7,1).c$$jalview_viewmodel_OverviewDimensions$jalview_api_AlignViewportI$jalview_gui_ProgressPanel,[this.od, this.av, this.progressPanel]);
this.add$java_awt_Component$O(this.oviewCanvas, "Center");
this.av.getRanges$().addPropertyChangeListener$jalview_viewmodel_ViewportListenerI(this);
this.setPreferredSize$java_awt_Dimension(Clazz.new_([this.od.getWidth$(), this.od.getHeight$()],$I$(8,1).c$$I$I));
this.addComponentListener$java_awt_event_ComponentListener(((P$.OverviewPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "OverviewPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (evt) {
if (this.b$['javax.swing.JComponent'].getWidth$.apply(this.b$['javax.swing.JComponent'], []) == this.b$['jalview.gui.OverviewPanel'].od.getWidth$() && this.b$['javax.swing.JComponent'].getHeight$.apply(this.b$['javax.swing.JComponent'], []) == this.b$['jalview.gui.OverviewPanel'].od.getHeight$() + this.b$['jalview.gui.OverviewPanel'].progressPanel.getHeight$() ) {
this.b$['jalview.gui.OverviewPanel'].updateOverviewImage$.apply(this.b$['jalview.gui.OverviewPanel'], []);
} else {
if ((this.b$['javax.swing.JComponent'].getWidth$.apply(this.b$['javax.swing.JComponent'], []) > 0) && (this.b$['javax.swing.JComponent'].getHeight$.apply(this.b$['javax.swing.JComponent'], []) > 0) ) {
this.b$['jalview.gui.OverviewPanel'].od.setWidth$I(this.b$['javax.swing.JComponent'].getWidth$.apply(this.b$['javax.swing.JComponent'], []));
this.b$['jalview.gui.OverviewPanel'].od.setHeight$I(this.b$['javax.swing.JComponent'].getHeight$.apply(this.b$['javax.swing.JComponent'], []) - this.b$['jalview.gui.OverviewPanel'].progressPanel.getHeight$());
}this.b$['javax.swing.JComponent'].setPreferredSize$java_awt_Dimension.apply(this.b$['javax.swing.JComponent'], [Clazz.new_([this.b$['jalview.gui.OverviewPanel'].od.getWidth$(), this.b$['jalview.gui.OverviewPanel'].od.getHeight$() + this.b$['jalview.gui.OverviewPanel'].progressPanel.getHeight$()],$I$(8,1).c$$I$I)]);
}});
})()
), Clazz.new_($I$(9,1),[this, null],P$.OverviewPanel$1)));
this.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.OverviewPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "OverviewPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseMotionAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (evt) {
if (!$I$(10).isRightMouseButton$java_awt_event_MouseEvent(evt)) {
if (this.b$['jalview.gui.OverviewPanel'].draggingBox) {
this.b$['jalview.gui.OverviewPanel'].od.adjustViewportFromMouse$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(evt.getX$(), evt.getY$(), this.b$['jalview.gui.OverviewPanel'].av.getAlignment$().getHiddenSequences$(), this.b$['jalview.gui.OverviewPanel'].av.getAlignment$().getHiddenColumns$());
} else {
this.b$['jalview.gui.OverviewPanel'].od.updateViewportFromMouse$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(evt.getX$(), evt.getY$(), this.b$['jalview.gui.OverviewPanel'].av.getAlignment$().getHiddenSequences$(), this.b$['jalview.gui.OverviewPanel'].av.getAlignment$().getHiddenColumns$());
}}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (evt) {
if (this.b$['jalview.gui.OverviewPanel'].od.isPositionInBox$I$I(evt.getX$(), evt.getY$())) {
this.b$['java.awt.Component'].getParent$.apply(this.b$['java.awt.Component'], []).setCursor$java_awt_Cursor($I$(11).getPredefinedCursor$I(12));
} else {
this.b$['java.awt.Component'].getParent$.apply(this.b$['java.awt.Component'], []).setCursor$java_awt_Cursor($I$(11).getPredefinedCursor$I(1));
}});
})()
), Clazz.new_($I$(12,1),[this, null],P$.OverviewPanel$2)));
this.addMouseListener$java_awt_event_MouseListener(((P$.OverviewPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "OverviewPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
if ($I$(13).isWinRightButton$java_awt_event_MouseEvent(evt)) {
this.b$['jalview.gui.OverviewPanel'].showPopupMenu$java_awt_event_MouseEvent.apply(this.b$['jalview.gui.OverviewPanel'], [evt]);
return;
}if ($I$(10).isRightMouseButton$java_awt_event_MouseEvent(evt)) {
return;
}if (!this.b$['jalview.gui.OverviewPanel'].od.isPositionInBox$I$I(evt.getX$(), evt.getY$())) {
this.b$['jalview.gui.OverviewPanel'].draggingBox=false;
this.b$['java.awt.Component'].setCursor$java_awt_Cursor.apply(this.b$['java.awt.Component'], [$I$(11).getPredefinedCursor$I(13)]);
this.b$['jalview.gui.OverviewPanel'].od.updateViewportFromMouse$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(evt.getX$(), evt.getY$(), this.b$['jalview.gui.OverviewPanel'].av.getAlignment$().getHiddenSequences$(), this.b$['jalview.gui.OverviewPanel'].av.getAlignment$().getHiddenColumns$());
this.b$['java.awt.Component'].getParent$.apply(this.b$['java.awt.Component'], []).setCursor$java_awt_Cursor($I$(11).getPredefinedCursor$I(12));
} else {
this.b$['jalview.gui.OverviewPanel'].draggingBox=true;
this.b$['jalview.gui.OverviewPanel'].od.setDragPoint$I$I$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(evt.getX$(), evt.getY$(), this.b$['jalview.gui.OverviewPanel'].av.getAlignment$().getHiddenSequences$(), this.b$['jalview.gui.OverviewPanel'].av.getAlignment$().getHiddenColumns$());
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (evt) {
if ($I$(10).isRightMouseButton$java_awt_event_MouseEvent(evt)) {
this.b$['jalview.gui.OverviewPanel'].showPopupMenu$java_awt_event_MouseEvent.apply(this.b$['jalview.gui.OverviewPanel'], [evt]);
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
this.b$['jalview.gui.OverviewPanel'].draggingBox=false;
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.OverviewPanel$3)));
if ($I$(13).isJS$()) {
this.updateOverviewImage$();
}}, 1);

Clazz.newMeth(C$, 'showPopupMenu$java_awt_event_MouseEvent',  function (e) {
var popup=Clazz.new_($I$(15,1));
var menuListener=((P$.OverviewPanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "OverviewPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (event) {
this.b$['jalview.gui.OverviewPanel'].toggleHiddenColumns$.apply(this.b$['jalview.gui.OverviewPanel'], []);
this.b$['jalview.gui.OverviewPanel'].displayToggle.setSelected$Z(this.b$['jalview.gui.OverviewPanel'].showHidden);
});
})()
), Clazz.new_(P$.OverviewPanel$4.$init$,[this, null]));
this.displayToggle=Clazz.new_([$I$(6).getString$S("label.togglehidden")],$I$(16,1).c$$S);
this.displayToggle.setEnabled$Z(true);
this.displayToggle.setSelected$Z(this.showHidden);
popup.add$javax_swing_JMenuItem(this.displayToggle);
this.displayToggle.addActionListener$java_awt_event_ActionListener(menuListener);
popup.show$java_awt_Component$I$I(this, e.getX$(), e.getY$());
});

Clazz.newMeth(C$, 'toggleHiddenColumns$',  function () {
if (this.showHidden) {
this.showHidden=false;
this.od=Clazz.new_([this.av.getRanges$(), (this.av.isShowAnnotation$() && this.av.getAlignmentConservationAnnotation$() != null  )],$I$(3,1).c$$jalview_viewmodel_ViewportRanges$Z);
} else {
this.showHidden=true;
this.od=Clazz.new_([this.av.getRanges$(), (this.av.isShowAnnotation$() && this.av.getAlignmentConservationAnnotation$() != null  )],$I$(2,1).c$$jalview_viewmodel_ViewportRanges$Z);
}this.oviewCanvas.resetOviewDims$jalview_viewmodel_OverviewDimensions(this.od);
this.updateOverviewImage$();
p$1.setBoxPosition.apply(this, []);
});

Clazz.newMeth(C$, 'updateOverviewImage$',  function () {
if (this.oviewCanvas == null ) {
return;
}if ((this.getWidth$() > 0) && (this.getHeight$() > 0) ) {
this.od.setWidth$I(this.getWidth$());
this.od.setHeight$I(this.getHeight$() - this.progressPanel.getHeight$());
}this.setPreferredSize$java_awt_Dimension(Clazz.new_([this.od.getWidth$(), this.od.getHeight$() + this.progressPanel.getHeight$()],$I$(8,1).c$$I$I));
if (this.oviewCanvas.restartDraw$()) {
return;
}var thread=Clazz.new_($I$(17,1).c$$Runnable,[this]);
thread.start$();
this.repaint$();
});

Clazz.newMeth(C$, 'run$',  function () {
if (this.oviewCanvas != null ) {
this.oviewCanvas.draw$Z$Z$jalview_viewmodel_seqfeatures_FeatureRendererModel(this.av.isShowSequenceFeatures$(), (this.av.isShowAnnotation$() && this.av.getAlignmentConservationAnnotation$() != null  ), this.ap.getSeqPanel$().seqCanvas.getFeatureRenderer$());
p$1.setBoxPosition.apply(this, []);
}});

Clazz.newMeth(C$, 'setBoxPositionOnly',  function () {
if (this.od != null ) {
var oldX=this.od.getBoxX$();
var oldY=this.od.getBoxY$();
var oldWidth=this.od.getBoxWidth$();
var oldHeight=this.od.getBoxHeight$();
this.od.setBoxPosition$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(this.av.getAlignment$().getHiddenSequences$(), this.av.getAlignment$().getHiddenColumns$());
this.repaint$I$I$I$I(oldX - 1, oldY - 1, oldWidth + 2, oldHeight + 2);
this.repaint$I$I$I$I(this.od.getBoxX$(), this.od.getBoxY$(), this.od.getBoxWidth$(), this.od.getBoxHeight$());
}}, p$1);

Clazz.newMeth(C$, 'setBoxPosition',  function () {
if (this.od != null ) {
this.od.setBoxPosition$jalview_datamodel_HiddenSequences$jalview_datamodel_HiddenColumns(this.av.getAlignment$().getHiddenSequences$(), this.av.getAlignment$().getHiddenColumns$());
this.repaint$();
}}, p$1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
p$1.setBoxPositionOnly.apply(this, []);
});

Clazz.newMeth(C$, 'dispose$',  function () {
try {
if (this.av != null ) {
this.av.getRanges$().removePropertyChangeListener$jalview_viewmodel_ViewportListenerI(this);
}this.oviewCanvas.dispose$();
($I$(10,"getAncestorOfClass$Class$java_awt_Component",[Clazz.getClass($I$(18)), (this)])).setClosed$Z(true);
} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
} else {
throw e;
}
} finally {
this.progressPanel=null;
this.av=null;
this.oviewCanvas=null;
this.ap=null;
this.od=null;
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:34 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
