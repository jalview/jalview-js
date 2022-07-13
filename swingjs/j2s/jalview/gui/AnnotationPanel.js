(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.util.MessageManager','java.awt.Color',['jalview.gui.AnnotationPanel','.DragMode'],'java.awt.Rectangle','javax.swing.ToolTipManager','jalview.renderer.AnnotationRenderer','java.awt.Dimension','jalview.datamodel.Annotation','jalview.gui.JvOptionPane','jalview.gui.JalviewColourChooser','StringBuilder','java.util.ArrayList','java.util.Collections','javax.swing.JPopupMenu','javax.swing.JMenuItem','jalview.gui.JvSwingUtils','jalview.util.Comparison','jalview.schemes.ResidueProperties','java.awt.image.BufferedImage','jalview.gui.OOMWarning','java.awt.RenderingHints','java.awt.AlphaComposite','jalview.util.Platform']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['jalview.renderer.AwtRenderPanelI', 'java.awt.event.MouseListener', 'java.awt.event.MouseWheelListener', 'java.awt.event.MouseMotionListener', 'java.awt.event.ActionListener', 'java.awt.event.AdjustmentListener', 'javax.swing.Scrollable', 'jalview.viewmodel.ViewportListenerI']);
C$.$classes$=[['DragMode',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.HELIX=$I$(1).getString$S("label.helix");
this.SHEET=$I$(1).getString$S("label.sheet");
this.STEM=$I$(1).getString$S("label.rna_helix");
this.LABEL=$I$(1).getString$S("label.label");
this.REMOVE=$I$(1).getString$S("label.remove_annotation");
this.COLOUR=$I$(1).getString$S("action.colour");
this.HELIX_COLOUR=$I$(2).red.darker$();
this.SHEET_COLOUR=$I$(2).green.darker$().darker$();
this.STEM_COLOUR=$I$(2).blue.darker$();
this.activeRow=-1;
this.imgWidth=0;
this.fastPaint=false;
this.graphStretch=-1;
this.mouseDragLastX=-1;
this.mouseDragLastY=-1;
this.dragMode=$I$(3).Undefined;
this.mouseDragging=false;
this.cursorX=0;
this.cursorY=0;
this.imageFresh=false;
this.visibleRect=Clazz.new_($I$(4,1));
this.clipBounds=Clazz.new_($I$(4,1));
this.debugRedraw=false;
this.lastImageGood=false;
this.bounds=Clazz.array(Integer.TYPE, [2]);
},1);

C$.$fields$=[['Z',['fastPaint','mouseDragging','imageFresh','debugRedraw','lastImageGood'],'I',['activeRow','imgWidth','graphStretch','mouseDragLastX','mouseDragLastY','cursorX','cursorY'],'S',['HELIX','SHEET','STEM','LABEL','REMOVE','COLOUR'],'O',['HELIX_COLOUR','java.awt.Color','+SHEET_COLOUR','+STEM_COLOUR','av','jalview.gui.AlignViewport','ap','jalview.gui.AlignmentPanel','image','java.awt.image.BufferedImage','+fadedImage','fm','java.awt.FontMetrics','dragMode','jalview.gui.AnnotationPanel.DragMode','renderer','jalview.renderer.AnnotationRenderer','_mwl','java.awt.event.MouseWheelListener[]','visibleRect','java.awt.Rectangle','+clipBounds','bounds','int[]']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel',  function (ap) {
Clazz.super_(C$, this);
$I$(5).sharedInstance$().registerComponent$javax_swing_JComponent(this);
$I$(5).sharedInstance$().setInitialDelay$I(0);
$I$(5).sharedInstance$().setDismissDelay$I(10000);
this.ap=ap;
this.av=ap.av;
this.setLayout$java_awt_LayoutManager(null);
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
ap.annotationScroller.getVerticalScrollBar$().addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this._mwl=ap.annotationScroller.getMouseWheelListeners$();
ap.annotationScroller.addMouseWheelListener$java_awt_event_MouseWheelListener(this);
this.renderer=Clazz.new_($I$(6,1));
this.av.getRanges$().addPropertyChangeListener$jalview_viewmodel_ViewportListenerI(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignViewport',  function (av) {
Clazz.super_(C$, this);
this.av=av;
this.renderer=Clazz.new_($I$(6,1));
}, 1);

Clazz.newMeth(C$, 'mouseWheelMoved$java_awt_event_MouseWheelEvent',  function (e) {
if (e.isShiftDown$()) {
e.consume$();
var wheelRotation=e.getPreciseWheelRotation$();
if (wheelRotation > 0 ) {
this.av.getRanges$().scrollRight$Z(true);
} else if (wheelRotation < 0 ) {
this.av.getRanges$().scrollRight$Z(false);
}} else {
for (var mwl, $mwl = 0, $$mwl = this._mwl; $mwl<$$mwl.length&&((mwl=($$mwl[$mwl])),1);$mwl++) {
if (mwl != null ) {
mwl.mouseWheelMoved$java_awt_event_MouseWheelEvent(e);
}if (e.isConsumed$()) {
break;
}}
}});

Clazz.newMeth(C$, 'getPreferredScrollableViewportSize$',  function () {
var ps=this.getPreferredSize$();
return Clazz.new_([ps.width, this.adjustForAlignFrame$Z$I(false, ps.height)],$I$(7,1).c$$I$I);
});

Clazz.newMeth(C$, 'getScrollableBlockIncrement$java_awt_Rectangle$I$I',  function (visibleRect, orientation, direction) {
return 30;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportHeight$',  function () {
return false;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportWidth$',  function () {
return true;
});

Clazz.newMeth(C$, 'getScrollableUnitIncrement$java_awt_Rectangle$I$I',  function (visibleRect, orientation, direction) {
return 30;
});

Clazz.newMeth(C$, 'adjustmentValueChanged$java_awt_event_AdjustmentEvent',  function (evt) {
this.ap.getAlabels$().setScrollOffset$I(-evt.getValue$());
});

Clazz.newMeth(C$, 'adjustPanelHeight$',  function () {
var height=this.av.calcPanelHeight$();
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(7,1).c$$I$I,[1, height]));
if (this.ap != null ) {
this.ap.validate$();
}return height;
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
var aa=this.av.getAlignment$().getAlignmentAnnotation$();
if (aa == null ) {
return;
}var anot=aa[this.activeRow].annotations;
if (anot.length < this.av.getColumnSelection$().getMax$()) {
var temp=Clazz.array($I$(8), [this.av.getColumnSelection$().getMax$() + 2]);
System.arraycopy$O$I$O$I$I(anot, 0, temp, 0, anot.length);
anot=temp;
aa[this.activeRow].annotations=anot;
}var action=evt.getActionCommand$();
if (action.equals$O(this.REMOVE)) {
for (var index, $index = this.av.getColumnSelection$().getSelected$().iterator$(); $index.hasNext$()&&((index=($index.next$()).intValue$()),1);) {
if (this.av.getAlignment$().getHiddenColumns$().isVisible$I(index)) {
anot[index]=null;
}}
} else if (action.equals$O(this.LABEL)) {
var exMesg=p$1.collectAnnotVals$jalview_datamodel_AnnotationA$S.apply(this, [anot, this.LABEL]);
var label=$I$(9,"showInputDialog$S$S",[$I$(1).getString$S("label.enter_label"), exMesg]);
if (label == null ) {
return;
}if ((label.length$() > 0) && !aa[this.activeRow].hasText ) {
aa[this.activeRow].hasText=true;
}for (var index, $index = this.av.getColumnSelection$().getSelected$().iterator$(); $index.hasNext$()&&((index=($index.next$()).intValue$()),1);) {
if (!this.av.getAlignment$().getHiddenColumns$().isVisible$I(index)) {
continue;
}if (anot[index] == null ) {
anot[index]=Clazz.new_($I$(8,1).c$$S$S$C$F,[label, "", " ", 0]);
} else {
anot[index].displayCharacter=label;
}}
} else if (action.equals$O(this.COLOUR)) {
var fAnot=anot;
var title=$I$(1).getString$S("label.select_foreground_colour");
var listener=((P$.AnnotationPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'colourSelected$java_awt_Color',  function (c) {
var hiddenColumns=this.b$['jalview.gui.AnnotationPanel'].av.getAlignment$().getHiddenColumns$();
for (var index, $index = this.b$['jalview.gui.AnnotationPanel'].av.getColumnSelection$().getSelected$().iterator$(); $index.hasNext$()&&((index=($index.next$()).intValue$()),1);) {
if (hiddenColumns.isVisible$I(index)) {
if (this.$finals$.fAnot[index] == null ) {
this.$finals$.fAnot[index]=Clazz.new_($I$(8,1).c$$S$S$C$F,["", "", " ", 0]);
}this.$finals$.fAnot[index].colour=c;
}}
});
})()
), Clazz.new_(P$.AnnotationPanel$1.$init$,[this, {fAnot:fAnot}]));
$I$(10,"showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener",[this, title, $I$(2).black, listener]);
} else {
var type=String.fromCharCode(0);
var symbol="\u03b1";
if (action.equals$O(this.HELIX)) {
type="H";
} else if (action.equals$O(this.SHEET)) {
type="E";
symbol="\u03b2";
} else if (action.equals$O(this.STEM)) {
type="S";
var column=this.av.getColumnSelection$().getSelectedRanges$().get$I(0)[0];
symbol=aa[this.activeRow].getDefaultRnaHelixSymbol$I(column);
}if (!aa[this.activeRow].hasIcons) {
aa[this.activeRow].hasIcons=true;
}var label=$I$(9,"showInputDialog$S$S",[$I$(1).getString$S("label.enter_label_for_the_structure"), symbol]);
if (label == null ) {
return;
}if ((label.length$() > 0) && !aa[this.activeRow].hasText ) {
aa[this.activeRow].hasText=true;
if (action.equals$O(this.STEM)) {
aa[this.activeRow].showAllColLabels=true;
}}for (var index, $index = this.av.getColumnSelection$().getSelected$().iterator$(); $index.hasNext$()&&((index=($index.next$()).intValue$()),1);) {
if (!this.av.getAlignment$().getHiddenColumns$().isVisible$I(index)) {
continue;
}if (anot[index] == null ) {
anot[index]=Clazz.new_($I$(8,1).c$$S$S$C$F,[label, "", type, 0]);
}anot[index].secondaryStructure=type != "S" ? type : label.length$() == 0 ? " " : label.charAt$I(0);
anot[index].displayCharacter=label;
}
}this.av.getAlignment$().validateAnnotation$jalview_datamodel_AlignmentAnnotation(aa[this.activeRow]);
this.ap.alignmentChanged$();
this.ap.alignFrame.setMenusForViewport$();
this.adjustPanelHeight$();
this.repaint$();
return;
});

Clazz.newMeth(C$, 'collectAnnotVals$jalview_datamodel_AnnotationA$S',  function (anots, type) {
var collatedInput=Clazz.new_($I$(11,1).c$$I,[64]);
var last="";
var viscols=this.av.getColumnSelection$();
var hidden=this.av.getAlignment$().getHiddenColumns$();
var selected=Clazz.new_([viscols.getSelected$()],$I$(12,1).c$$java_util_Collection);
$I$(13).sort$java_util_List(selected);
for (var index, $index = selected.iterator$(); $index.hasNext$()&&((index=($index.next$()).intValue$()),1);) {
if (!hidden.isVisible$I(index)) {
continue;
}var tlabel=null;
if (anots[index] != null ) {
if (type.equals$O(this.HELIX) || type.equals$O(this.SHEET) || type.equals$O(this.STEM) || type.equals$O(this.LABEL)  ) {
tlabel=anots[index].description;
if (tlabel == null  || tlabel.length$() < 1 ) {
if (type.equals$O(this.HELIX) || type.equals$O(this.SHEET) || type.equals$O(this.STEM)  ) {
tlabel="" + anots[index].secondaryStructure;
} else {
tlabel="" + anots[index].displayCharacter;
}}}if (tlabel != null  && !tlabel.equals$O(last) ) {
if (last.length$() > 0) {
collatedInput.append$S(" ");
}collatedInput.append$S(tlabel);
}}}
return collatedInput.toString();
}, p$1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
var aa=this.av.getAlignment$().getAlignmentAnnotation$();
if (aa == null ) {
return;
}this.mouseDragLastX=evt.getX$();
this.mouseDragLastY=evt.getY$();
var height=0;
this.activeRow=-1;
var y=evt.getY$();
for (var i=0; i < aa.length; i++) {
if (aa[i].visible) {
height+=aa[i].height;
}if (y < height) {
if (aa[i].editable) {
this.activeRow=i;
} else if (aa[i].graph > 0) {
this.graphStretch=i;
}break;
}}
if (evt.isPopupTrigger$() && this.activeRow != -1 ) {
this.showPopupMenu$I$I(y, evt.getX$());
return;
}this.ap.getScalePanel$().mousePressed$java_awt_event_MouseEvent(evt);
});

Clazz.newMeth(C$, 'showPopupMenu$I$I',  function (y, x) {
if (this.av.getColumnSelection$() == null  || this.av.getColumnSelection$().isEmpty$() ) {
return;
}var pop=Clazz.new_([$I$(1).getString$S("label.structure_type")],$I$(14,1).c$$S);
var item;
if (this.av.getAlignment$().isNucleotide$()) {
item=Clazz.new_($I$(15,1).c$$S,[this.STEM]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(item);
} else {
item=Clazz.new_($I$(15,1).c$$S,[this.HELIX]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(item);
item=Clazz.new_($I$(15,1).c$$S,[this.SHEET]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(item);
}item=Clazz.new_($I$(15,1).c$$S,[this.LABEL]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(item);
item=Clazz.new_($I$(15,1).c$$S,[this.COLOUR]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(item);
item=Clazz.new_($I$(15,1).c$$S,[this.REMOVE]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(item);
pop.show$java_awt_Component$I$I(this, x, y);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
this.graphStretch=-1;
this.mouseDragLastX=-1;
this.mouseDragLastY=-1;
this.mouseDragging=false;
if (this.dragMode === $I$(3).Resize ) {
this.ap.adjustAnnotationHeight$();
}this.dragMode=$I$(3).Undefined;
this.ap.getScalePanel$().mouseReleased$java_awt_event_MouseEvent(evt);
if (evt.isPopupTrigger$() && this.activeRow != -1 ) {
this.showPopupMenu$I$I(evt.getY$(), evt.getX$());
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (evt) {
this.mouseDragging=false;
this.ap.getScalePanel$().mouseEntered$java_awt_event_MouseEvent(evt);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (evt) {
this.ap.getScalePanel$().mouseExited$java_awt_event_MouseEvent(evt);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (evt) {
var x=evt.getX$();
var y=evt.getY$();
if (this.dragMode === $I$(3).Undefined ) {
var dx=Math.abs(x - this.mouseDragLastX);
var dy=Math.abs(y - this.mouseDragLastY);
if (this.graphStretch == -1 || dx > dy ) {
this.dragMode=$I$(3).Select;
} else if (dy > dx) {
this.dragMode=$I$(3).Resize;
}}if (this.dragMode === $I$(3).Undefined ) {
return;
}try {
if (this.dragMode === $I$(3).Resize ) {
var deltaY=this.mouseDragLastY - evt.getY$();
if (deltaY != 0) {
var graphAnnotation=this.av.getAlignment$().getAlignmentAnnotation$()[this.graphStretch];
var newHeight=Math.max(0, graphAnnotation.graphHeight + deltaY);
graphAnnotation.graphHeight=newHeight;
this.adjustPanelHeight$();
this.ap.paintAlignment$Z$Z(false, false);
}} else {
this.ap.getScalePanel$().mouseDragged$java_awt_event_MouseEvent(evt);
}} finally {
this.mouseDragLastX=x;
this.mouseDragLastY=y;
}
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (evt) {
var yPos=evt.getY$();
var aa=this.av.getAlignment$().getAlignmentAnnotation$();
var row=C$.getRowIndex$I$jalview_datamodel_AlignmentAnnotationA(yPos, aa);
if (row == -1) {
this.setToolTipText$S(null);
return;
}var column=((evt.getX$()/this.av.getCharWidth$()|0)) + this.av.getRanges$().getStartRes$();
column=Math.min(column, this.av.getRanges$().getEndRes$());
if (this.av.hasHiddenColumns$()) {
column=this.av.getAlignment$().getHiddenColumns$().visibleToAbsoluteColumn$I(column);
}var ann=aa[row];
if (row > -1 && ann.annotations != null   && column < ann.annotations.length ) {
var toolTip=C$.buildToolTip$jalview_datamodel_AlignmentAnnotation$I$jalview_datamodel_AlignmentAnnotationA(ann, column, aa);
this.setToolTipText$S(toolTip == null  ? null : $I$(16).wrapTooltip$Z$S(true, toolTip));
var msg=C$.getStatusMessage$jalview_datamodel_AlignmentI$I$jalview_datamodel_AlignmentAnnotation(this.av.getAlignment$(), column, ann);
this.ap.alignFrame.setStatus$S(msg);
} else {
this.setToolTipText$S(null);
this.ap.alignFrame.setStatus$S(" ");
}});

Clazz.newMeth(C$, 'getRowIndex$I$jalview_datamodel_AlignmentAnnotationA',  function (yPos, aa) {
if (aa == null ) {
return -1;
}var row=-1;
var height=0;
for (var i=0; i < aa.length; i++) {
if (aa[i].visible) {
height+=aa[i].height;
}if (height > yPos) {
row=i;
break;
}}
return row;
}, 1);

Clazz.newMeth(C$, 'buildToolTip$jalview_datamodel_AlignmentAnnotation$I$jalview_datamodel_AlignmentAnnotationA',  function (ann, column, anns) {
var tooltip=null;
if (ann.graphGroup > -1) {
var tip=Clazz.new_($I$(11,1).c$$I,[32]);
var first=true;
for (var i=0; i < anns.length; i++) {
if (anns[i].graphGroup == ann.graphGroup && anns[i].annotations[column] != null  ) {
if (!first) {
tip.append$S("<br>");
}first=false;
tip.append$S(anns[i].label);
var description=anns[i].annotations[column].description;
if (description != null  && description.length$() > 0 ) {
tip.append$S(" ").append$S(description);
}}}
tooltip=first ? null : tip.toString();
} else if (column < ann.annotations.length && ann.annotations[column] != null  ) {
tooltip=ann.annotations[column].description;
}return tooltip;
}, 1);

Clazz.newMeth(C$, 'getStatusMessage$jalview_datamodel_AlignmentI$I$jalview_datamodel_AlignmentAnnotation',  function (al, column, ann) {
var text=Clazz.new_($I$(11,1).c$$I,[32]);
text.append$S($I$(1).getString$S("label.column")).append$S(" ").append$I(column + 1);
if (column < ann.annotations.length && ann.annotations[column] != null  ) {
var description=ann.annotations[column].description;
if (description != null  && description.trim$().length$() > 0 ) {
text.append$S("  ").append$S(description);
}}var seqref=ann.sequenceRef;
if (seqref != null ) {
var seqIndex=al.findIndex$jalview_datamodel_SequenceI(seqref);
if (seqIndex != -1) {
text.append$S(", ").append$S($I$(1).getString$S("label.sequence")).append$S(" ").append$I(seqIndex + 1);
var residue=seqref.getCharAt$I(column);
if (!$I$(17).isGap$C(residue)) {
text.append$S(" ");
var name;
if (al.isNucleotide$()) {
name=$I$(18).nucleotideName.get$O(String.valueOf$C(residue));
text.append$S(" Nucleotide: ").append$O(name != null  ? name : Character.valueOf$C(residue));
} else {
name="X" == residue ? "X" : ("*" == residue ? "STOP" : $I$(18).aa2Triplet.get$O(String.valueOf$C(residue)));
text.append$S(" Residue: ").append$O(name != null  ? name : Character.valueOf$C(residue));
}var residuePos=seqref.findPosition$I(column);
text.append$S(" (").append$I(residuePos).append$S(")");
}}}return text.toString();
}, 1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'drawCursor$java_awt_Graphics$jalview_datamodel_SequenceI$I$I$I',  function (graphics, seq, res, x1, y1) {
var pady=(this.av.getCharHeight$()/5|0);
var charOffset=0;
graphics.setColor$java_awt_Color($I$(2).black);
graphics.fillRect$I$I$I$I(x1, y1, this.av.getCharWidth$(), this.av.getCharHeight$());
if (this.av.validCharWidth) {
graphics.setColor$java_awt_Color($I$(2).white);
var s=seq.getCharAt$I(res);
charOffset=((this.av.getCharWidth$() - this.fm.charWidth$C(s))/2|0);
graphics.drawString$S$I$I(String.valueOf$C(s), charOffset + x1, (y1 + this.av.getCharHeight$()) - pady);
}});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
this.computeVisibleRect$java_awt_Rectangle(this.visibleRect);
g.setColor$java_awt_Color($I$(2).white);
g.fillRect$I$I$I$I(0, 0, this.visibleRect.width, this.visibleRect.height);
if (this.image != null ) {
if (this.fastPaint || (this.visibleRect.width != (this.clipBounds=g.getClipBounds$java_awt_Rectangle(this.clipBounds)).width) || (this.visibleRect.height != this.clipBounds.height)  ) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, this);
this.fastPaint=false;
return;
}}this.imgWidth=(this.av.getRanges$().getEndRes$() - this.av.getRanges$().getStartRes$() + 1) * this.av.getCharWidth$();
if (this.imgWidth < 1) {
return;
}var gg;
if (this.image == null  || this.imgWidth != this.image.getWidth$java_awt_image_ImageObserver(this)  || this.image.getHeight$java_awt_image_ImageObserver(this) != this.getHeight$() ) {
try {
this.image=Clazz.new_([this.imgWidth, this.ap.getAnnotationPanel$().getHeight$(), 1],$I$(19,1).c$$I$I$I);
} catch (oom) {
if (Clazz.exceptionOf(oom,"OutOfMemoryError")){
try {
System.gc$();
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
} else {
throw x;
}
}
;Clazz.new_($I$(20,1).c$$S$OutOfMemoryError,["Couldn\'t allocate memory to redraw screen. Please restart Jalview", oom]);
return;
} else {
throw oom;
}
}
gg=this.image.getGraphics$();
if (this.av.antiAlias) {
gg.setRenderingHint$java_awt_RenderingHints_Key$O($I$(21).KEY_ANTIALIASING, $I$(21).VALUE_ANTIALIAS_ON);
}gg.setFont$java_awt_Font(this.av.getFont$());
this.fm=gg.getFontMetrics$();
gg.setColor$java_awt_Color($I$(2).white);
gg.fillRect$I$I$I$I(0, 0, this.imgWidth, this.image.getHeight$());
this.imageFresh=true;
} else {
gg=this.image.getGraphics$();
}this.drawComponent$java_awt_Graphics$I$I(gg, this.av.getRanges$().getStartRes$(), this.av.getRanges$().getEndRes$() + 1);
gg.dispose$();
this.imageFresh=false;
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, this);
});

Clazz.newMeth(C$, 'fastPaint$I',  function (horizontal) {
if ((horizontal == 0) || this.image == null   || this.av.getAlignment$().getAlignmentAnnotation$() == null   || this.av.getAlignment$().getAlignmentAnnotation$().length < 1  || this.av.isCalcInProgress$() ) {
this.repaint$();
return;
}var sr=this.av.getRanges$().getStartRes$();
var er=this.av.getRanges$().getEndRes$() + 1;
var transX=0;
var gg=this.image.getGraphics$();
if (this.imgWidth > Math.abs(horizontal * this.av.getCharWidth$())) {
gg.copyArea$I$I$I$I$I$I(0, 0, this.imgWidth, this.getHeight$(), -horizontal * this.av.getCharWidth$(), 0);
if (horizontal > 0) {
transX=(er - sr - horizontal ) * this.av.getCharWidth$();
sr=er - horizontal;
} else if (horizontal < 0) {
er=sr - horizontal;
}}gg.translate$I$I(transX, 0);
this.drawComponent$java_awt_Graphics$I$I(gg, sr, er);
gg.translate$I$I(-transX, 0);
gg.dispose$();
this.fastPaint=true;
this.av.getAlignPanel$().repaint$();
});

Clazz.newMeth(C$, 'drawComponent$java_awt_Graphics$I$I',  function (g, startRes, endRes) {
var oldFaded=this.fadedImage;
if (this.av.isCalcInProgress$()) {
if (this.image == null ) {
this.lastImageGood=false;
return;
}if (this.lastImageGood && (this.fadedImage == null  || this.fadedImage.getWidth$() != this.imgWidth  || this.fadedImage.getHeight$() != this.image.getHeight$() ) ) {
this.fadedImage=Clazz.new_([this.imgWidth, this.image.getHeight$(), 1],$I$(19,1).c$$I$I$I);
var fadedG=this.fadedImage.getGraphics$();
fadedG.setColor$java_awt_Color($I$(2).white);
fadedG.fillRect$I$I$I$I(0, 0, this.imgWidth, this.image.getHeight$());
fadedG.setComposite$java_awt_Composite($I$(22).getInstance$I$F(3, 0.3));
fadedG.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, this);
}this.lastImageGood=false;
} else {
if (this.fadedImage != null ) {
oldFaded=this.fadedImage;
}this.fadedImage=null;
}g.setColor$java_awt_Color($I$(2).white);
g.fillRect$I$I$I$I(0, 0, (endRes - startRes) * this.av.getCharWidth$(), this.getHeight$());
g.setFont$java_awt_Font(this.av.getFont$());
if (this.fm == null ) {
this.fm=g.getFontMetrics$();
}if ((this.av.getAlignment$().getAlignmentAnnotation$() == null ) || (this.av.getAlignment$().getAlignmentAnnotation$().length < 1) ) {
g.setColor$java_awt_Color($I$(2).white);
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
g.setColor$java_awt_Color($I$(2).black);
if (this.av.validCharWidth) {
g.drawString$S$I$I($I$(1).getString$S("label.alignment_has_no_annotations"), 20, 15);
}return;
}this.lastImageGood=this.renderer.drawComponent$jalview_renderer_AwtRenderPanelI$jalview_api_AlignViewportI$java_awt_Graphics$I$I$I(this, this.av, g, this.activeRow, startRes, endRes);
if (!this.lastImageGood && this.fadedImage == null  ) {
this.fadedImage=oldFaded;
}});

Clazz.newMeth(C$, 'getFontMetrics$',  function () {
return this.fm;
});

Clazz.newMeth(C$, 'getFadedImage$',  function () {
return this.fadedImage;
});

Clazz.newMeth(C$, 'getFadedImageWidth$',  function () {
return this.imgWidth;
});

Clazz.newMeth(C$, 'getVisibleVRange$',  function () {
if (this.ap != null  && this.ap.getAlabels$() != null  ) {
var sOffset=-this.ap.getAlabels$().getScrollOffset$();
var visHeight=sOffset + this.ap.annotationSpaceFillerHolder.getHeight$();
this.bounds[0]=sOffset;
this.bounds[1]=visHeight;
return this.bounds;
} else {
return null;
}});

Clazz.newMeth(C$, 'dispose$',  function () {
this.av=null;
this.ap=null;
this.image=null;
this.fadedImage=null;
this._mwl=null;
if (this.renderer != null ) {
this.renderer.dispose$();
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
if (evt.getPropertyName$().equals$O("startres")) {
this.fastPaint$I(((evt.getNewValue$()).valueOf()|0) - ((evt.getOldValue$()).valueOf()|0));
} else if (evt.getPropertyName$().equals$O("startresandseq")) {
this.fastPaint$I((evt.getNewValue$())[0] - (evt.getOldValue$())[0]);
} else if (evt.getPropertyName$().equals$O("move_viewport")) {
this.repaint$();
}});

Clazz.newMeth(C$, 'adjustForAlignFrame$Z$I',  function (adjustPanelHeight, annotationHeight) {
var stuff=(this.ap.getViewName$() != null  ? 30 : 0) + ($I$(23).isAMacAndNotJS$() ? 120 : 140);
var availableHeight=this.ap.alignFrame.getHeight$() - stuff;
var rowHeight=this.av.getCharHeight$();
if (adjustPanelHeight) {
var alignmentHeight=rowHeight * this.av.getAlignment$().getHeight$();
if (annotationHeight + alignmentHeight > availableHeight) {
annotationHeight=Math.min(annotationHeight, availableHeight - 2 * rowHeight);
}} else {
annotationHeight=Math.min(this.ap.annotationScroller.getSize$().height, availableHeight - 2 * rowHeight);
}return annotationHeight;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.AnnotationPanel, "DragMode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "Select", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Resize", 1, []);
Clazz.newEnumConst($vals, C$.c$, "Undefined", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:33 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
