(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'Thread','javax.swing.JLabel','jalview.io.SequenceAnnotationReport','javax.swing.ToolTipManager','java.awt.Color','jalview.gui.SeqCanvas','java.awt.BorderLayout','jalview.gui.AnnotationPanel',['jalview.gui.SeqPanel','.MousePos'],'StringBuffer','jalview.util.Comparison','jalview.datamodel.SequenceGroup','javax.swing.SwingUtilities','jalview.util.Platform','jalview.gui.Desktop','java.util.ArrayList','StringBuilder','jalview.util.MessageManager','jalview.gui.JvSwingUtils','java.awt.Point','jalview.schemes.ResidueProperties','java.awt.Font','jalview.commands.EditCommand','jalview.datamodel.SequenceI',['jalview.commands.EditCommand','.Action'],['jalview.commands.EditCommand','.Edit'],'jalview.datamodel.SearchResults','jalview.gui.FeatureEditor','java.util.Collections','jalview.gui.SliderPanel','jalview.gui.PopupMenu','jalview.gui.PaintRefresher',['jalview.gui.SeqPanel','.ScrollThread'],'javax.swing.Timer','jalview.bin.Console','jalview.datamodel.ColumnSelection','jalview.util.MappingUtils','jalview.datamodel.HiddenColumns']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SeqPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'java.awt.event.MouseWheelListener', 'jalview.structure.SequenceListener', 'jalview.structure.SelectionListener']);
C$.$classes$=[['MousePos',8],['ScrollThread',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scrollThread=null;
this.mouseDragging=false;
this.editingSeqs=false;
this.groupEditing=false;
this.oldSeq=-1;
this.changeEndSeq=false;
this.changeStartSeq=false;
this.changeEndRes=false;
this.changeStartRes=false;
this.stretchGroup=null;
this.remove=false;
this.mouseWheelPressed=false;
this.startWrapBlock=-1;
this.wrappedBlock=-1;
this.lastTooltipLocation=null;
this.moveTooltip=true;
this.tempTip=Clazz.new_($I$(2,1)).createToolTip$();
this.updateOverviewAndStructs=false;
},1);

C$.$fields$=[['Z',['mouseDragging','editingSeqs','groupEditing','changeEndSeq','changeStartSeq','changeEndRes','changeStartRes','remove','mouseWheelPressed','moveTooltip','updateOverviewAndStructs'],'I',['editLastRes','editStartSeq','oldSeq','startWrapBlock','wrappedBlock'],'S',['lastTooltip','lastFormattedTooltip','lastMessage'],'O',['seqCanvas','jalview.gui.SeqCanvas','ap','jalview.gui.AlignmentPanel','lastMousePosition','jalview.gui.SeqPanel.MousePos','av','jalview.gui.AlignViewport','scrollThread','jalview.gui.SeqPanel.ScrollThread','stretchGroup','jalview.datamodel.SequenceGroup','lastMousePress','java.awt.Point','keyboardNo1','StringBuffer','+keyboardNo2','seqARep','jalview.io.SequenceAnnotationReport','editCommand','jalview.commands.EditCommand','ssm','jalview.structure.StructureSelectionManager','lastSearchResults','jalview.datamodel.SearchResultsI','lastTooltipLocation','java.awt.Point','tempTip','javax.swing.JToolTip']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel',  function (viewport, alignPanel) {
Clazz.super_(C$, this);
this.seqARep=Clazz.new_($I$(3,1).c$$Z,[true]);
$I$(4).sharedInstance$().registerComponent$javax_swing_JComponent(this);
$I$(4).sharedInstance$().setInitialDelay$I(0);
$I$(4).sharedInstance$().setDismissDelay$I(10000);
this.av=viewport;
this.setBackground$java_awt_Color($I$(5).white);
this.seqCanvas=Clazz.new_($I$(6,1).c$$jalview_gui_AlignmentPanel,[alignPanel]);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1)));
this.add$java_awt_Component$O(this.seqCanvas, "Center");
this.ap=alignPanel;
if (!viewport.isDataset$()) {
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseWheelListener$java_awt_event_MouseWheelListener(this);
this.ssm=viewport.getStructureSelectionManager$();
this.ssm.addStructureViewerListener$O(this);
this.ssm.addSelectionListener$jalview_structure_SelectionListener(this);
}}, 1);

Clazz.newMeth(C$, 'findMousePosition$java_awt_event_MouseEvent',  function (evt) {
var col=this.findColumn$java_awt_event_MouseEvent(evt);
var seqIndex=-1;
var annIndex=-1;
var y=evt.getY$();
var charHeight=this.av.getCharHeight$();
var alignmentHeight=this.av.getAlignment$().getHeight$();
if (this.av.getWrapAlignment$()) {
this.seqCanvas.calculateWrappedGeometry$I$I(this.seqCanvas.getWidth$(), this.seqCanvas.getHeight$());
var yOffsetPx=y % this.seqCanvas.wrappedRepeatHeightPx;
var alignmentHeightPixels=this.seqCanvas.wrappedSpaceAboveAlignment + alignmentHeight * charHeight + 3;
if (yOffsetPx >= alignmentHeightPixels) {
var anns=this.av.getAlignment$().getAlignmentAnnotation$();
var rowOffsetPx=yOffsetPx - alignmentHeightPixels;
annIndex=$I$(8).getRowIndex$I$jalview_datamodel_AlignmentAnnotationA(rowOffsetPx, anns);
seqIndex=alignmentHeight - 1;
} else {
yOffsetPx-=this.seqCanvas.wrappedSpaceAboveAlignment;
if (yOffsetPx >= 0) {
seqIndex=Math.min((yOffsetPx/charHeight|0), alignmentHeight - 1);
}}} else {
var ranges=this.av.getRanges$();
seqIndex=Math.min(((y/charHeight|0)) + ranges.getStartSeq$(), alignmentHeight - 1);
seqIndex=Math.min(seqIndex, ranges.getEndSeq$());
}return Clazz.new_($I$(9,1).c$$I$I$I,[col, seqIndex, annIndex]);
});

Clazz.newMeth(C$, 'findColumn$java_awt_event_MouseEvent',  function (evt) {
var res=0;
var x=evt.getX$();
var startRes=this.av.getRanges$().getStartRes$();
var charWidth=this.av.getCharWidth$();
if (this.av.getWrapAlignment$()) {
var hgap=this.av.getCharHeight$();
if (this.av.getScaleAboveWrapped$()) {
hgap+=this.av.getCharHeight$();
}var cHeight=this.av.getAlignment$().getHeight$() * this.av.getCharHeight$() + hgap + this.seqCanvas.getAnnotationHeight$();
var y=evt.getY$();
y=Math.max(0, y - hgap);
x-=this.seqCanvas.getLabelWidthWest$();
if (x < 0) {
return -1;
}var cwidth=this.seqCanvas.getWrappedCanvasWidth$I(this.getWidth$());
if (cwidth < 1) {
return 0;
}if (x >= cwidth * charWidth) {
return -1;
}this.wrappedBlock=(y/cHeight|0);
this.wrappedBlock+=(startRes/cwidth|0);
var startOffset=startRes % cwidth;
res=this.wrappedBlock * cwidth + startOffset + Math.min(cwidth - 1, (x/charWidth|0));
} else {
x=Math.min(x, this.seqCanvas.getX$() + this.seqCanvas.getWidth$());
res=((x/charWidth|0)) + startRes;
res=Math.min(res, this.av.getRanges$().getEndRes$());
}if (this.av.hasHiddenColumns$()) {
res=this.av.getAlignment$().getHiddenColumns$().visibleToAbsoluteColumn$I(res);
}return res;
});

Clazz.newMeth(C$, 'endEditing$',  function () {
try {
if (this.editCommand != null  && this.editCommand.getSize$() > 0 ) {
this.ap.alignFrame.addHistoryItem$jalview_commands_CommandI(this.editCommand);
this.av.firePropertyChange$S$O$O("alignment", null, this.av.getAlignment$().getSequences$());
}} finally {
this.editStartSeq=-1;
this.editLastRes=-1;
this.editingSeqs=false;
this.groupEditing=false;
this.keyboardNo1=null;
this.keyboardNo2=null;
this.editCommand=null;
}
});

Clazz.newMeth(C$, 'setCursorRow$',  function () {
this.seqCanvas.cursorY=this.getKeyboardNo1$() - 1;
this.scrollToVisible$Z(true);
});

Clazz.newMeth(C$, 'setCursorColumn$',  function () {
this.seqCanvas.cursorX=this.getKeyboardNo1$() - 1;
this.scrollToVisible$Z(true);
});

Clazz.newMeth(C$, 'setCursorRowAndColumn$',  function () {
if (this.keyboardNo2 == null ) {
this.keyboardNo2=Clazz.new_($I$(10,1));
} else {
this.seqCanvas.cursorX=this.getKeyboardNo1$() - 1;
this.seqCanvas.cursorY=this.getKeyboardNo2$() - 1;
this.scrollToVisible$Z(true);
}});

Clazz.newMeth(C$, 'setCursorPosition$',  function () {
var sequence=this.av.getAlignment$().getSequenceAt$I(this.seqCanvas.cursorY);
this.seqCanvas.cursorX=sequence.findIndex$I(this.getKeyboardNo1$()) - 1;
this.scrollToVisible$Z(true);
});

Clazz.newMeth(C$, 'moveCursor$I$I',  function (dx, dy) {
this.moveCursor$I$I$Z(dx, dy, false);
});

Clazz.newMeth(C$, 'moveCursor$I$I$Z',  function (dx, dy, nextWord) {
var hidden=this.av.getAlignment$().getHiddenColumns$();
if (nextWord) {
var maxWidth=this.av.getAlignment$().getWidth$();
var maxHeight=this.av.getAlignment$().getHeight$();
var seqAtRow=this.av.getAlignment$().getSequenceAt$I(this.seqCanvas.cursorY);
var isGap=$I$(11,"isGap$C",[seqAtRow.getCharAt$I(this.seqCanvas.cursorX)]);
var p=this.seqCanvas.cursorX;
var lastP;
var r=this.seqCanvas.cursorY;
var lastR;
do {
lastP=p;
lastR=r;
if (dy != 0) {
r+=dy;
if (r < 0) {
r=0;
}if (r >= maxHeight) {
r=maxHeight - 1;
}seqAtRow=this.av.getAlignment$().getSequenceAt$I(r);
}p=p$1.nextVisible$jalview_datamodel_HiddenColumns$I$I$I.apply(this, [hidden, maxWidth, p, dx]);
} while ((dx != 0 ? p != lastP : r != lastR) && isGap == $I$(11,"isGap$C",[seqAtRow.getCharAt$I(p)])  );
this.seqCanvas.cursorX=p;
this.seqCanvas.cursorY=r;
} else {
var maxWidth=this.av.getAlignment$().getWidth$();
this.seqCanvas.cursorX=p$1.nextVisible$jalview_datamodel_HiddenColumns$I$I$I.apply(this, [hidden, maxWidth, this.seqCanvas.cursorX, dx]);
this.seqCanvas.cursorY+=dy;
}this.scrollToVisible$Z(false);
});

Clazz.newMeth(C$, 'nextVisible$jalview_datamodel_HiddenColumns$I$I$I',  function (hidden, maxWidth, original, dx) {
var newCursorX=original + dx;
if (this.av.hasHiddenColumns$() && !hidden.isVisible$I(newCursorX) ) {
var visx=hidden.absoluteToVisibleColumn$I(newCursorX - dx);
var region=hidden.getRegionWithEdgeAtRes$I(visx);
if (region != null ) {
if (dx == 1) {
newCursorX=region[1] + 1;
} else if (dx == -1) {
newCursorX=region[0] - 1;
}}}newCursorX=(newCursorX < 0) ? 0 : newCursorX;
if (newCursorX >= maxWidth || !hidden.isVisible$I(newCursorX) ) {
newCursorX=original;
}return newCursorX;
}, p$1);

Clazz.newMeth(C$, 'scrollToVisible$Z',  function (jump) {
if (this.seqCanvas.cursorX < 0) {
this.seqCanvas.cursorX=0;
} else if (this.seqCanvas.cursorX > this.av.getAlignment$().getWidth$() - 1) {
this.seqCanvas.cursorX=this.av.getAlignment$().getWidth$() - 1;
}if (this.seqCanvas.cursorY < 0) {
this.seqCanvas.cursorY=0;
} else if (this.seqCanvas.cursorY > this.av.getAlignment$().getHeight$() - 1) {
this.seqCanvas.cursorY=this.av.getAlignment$().getHeight$() - 1;
}this.endEditing$();
var repaintNeeded=true;
if (jump) {
repaintNeeded=!this.av.getRanges$().setViewportLocation$I$I(this.seqCanvas.cursorX, this.seqCanvas.cursorY);
} else {
if (this.av.getWrapAlignment$()) {
var x=this.av.getAlignment$().getHiddenColumns$().absoluteToVisibleColumn$I(this.seqCanvas.cursorX);
this.av.getRanges$().scrollToWrappedVisible$I(x);
} else {
this.av.getRanges$().scrollToVisible$I$I(this.seqCanvas.cursorX, this.seqCanvas.cursorY);
}}if (this.av.getAlignment$().getHiddenColumns$().isVisible$I(this.seqCanvas.cursorX)) {
this.setStatusMessage$jalview_datamodel_SequenceI$I$I(this.av.getAlignment$().getSequenceAt$I(this.seqCanvas.cursorY), this.seqCanvas.cursorX, this.seqCanvas.cursorY);
}if (repaintNeeded) {
this.seqCanvas.repaint$();
}});

Clazz.newMeth(C$, 'setSelectionAreaAtCursor$Z',  function (topLeft) {
var sequence=this.av.getAlignment$().getSequenceAt$I(this.seqCanvas.cursorY);
if (this.av.getSelectionGroup$() != null ) {
var sg=this.av.getSelectionGroup$();
var min=this.av.getAlignment$().getHeight$();
var max=0;
for (var i=0; i < sg.getSize$(); i++) {
var index=this.av.getAlignment$().findIndex$jalview_datamodel_SequenceI(sg.getSequenceAt$I(i));
if (index > max) {
max=index;
}if (index < min) {
min=index;
}}
++max;
if (topLeft) {
sg.setStartRes$I(this.seqCanvas.cursorX);
if (sg.getEndRes$() < this.seqCanvas.cursorX) {
sg.setEndRes$I(this.seqCanvas.cursorX);
}min=this.seqCanvas.cursorY;
} else {
sg.setEndRes$I(this.seqCanvas.cursorX);
if (sg.getStartRes$() > this.seqCanvas.cursorX) {
sg.setStartRes$I(this.seqCanvas.cursorX);
}max=this.seqCanvas.cursorY + 1;
}if (min > max) {
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
} else {
sg.getSequences$java_util_Map(null).clear$();
for (var i=min; i < max; i++) {
sg.addSequence$jalview_datamodel_SequenceI$Z(this.av.getAlignment$().getSequenceAt$I(i), false);
}
}}if (this.av.getSelectionGroup$() == null ) {
var sg=Clazz.new_($I$(12,1));
sg.setStartRes$I(this.seqCanvas.cursorX);
sg.setEndRes$I(this.seqCanvas.cursorX);
sg.addSequence$jalview_datamodel_SequenceI$Z(sequence, false);
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(sg);
}this.ap.paintAlignment$Z$Z(false, false);
this.av.sendSelection$();
});

Clazz.newMeth(C$, 'insertGapAtCursor$Z',  function (group) {
this.groupEditing=group;
this.editStartSeq=this.seqCanvas.cursorY;
this.editLastRes=this.seqCanvas.cursorX;
this.editSequence$Z$Z$I(true, false, this.seqCanvas.cursorX + this.getKeyboardNo1$());
this.endEditing$();
});

Clazz.newMeth(C$, 'deleteGapAtCursor$Z',  function (group) {
this.groupEditing=group;
this.editStartSeq=this.seqCanvas.cursorY;
this.editLastRes=this.seqCanvas.cursorX + this.getKeyboardNo1$();
this.editSequence$Z$Z$I(false, false, this.seqCanvas.cursorX);
this.endEditing$();
});

Clazz.newMeth(C$, 'insertNucAtCursor$Z$S',  function (group, nuc) {
this.groupEditing=group;
this.editStartSeq=this.seqCanvas.cursorY;
this.editLastRes=this.seqCanvas.cursorX;
this.editSequence$Z$Z$I(false, true, this.seqCanvas.cursorX + this.getKeyboardNo1$());
this.endEditing$();
});

Clazz.newMeth(C$, 'numberPressed$C',  function (value) {
if (this.keyboardNo1 == null ) {
this.keyboardNo1=Clazz.new_($I$(10,1));
}if (this.keyboardNo2 != null ) {
this.keyboardNo2.append$C(value);
} else {
this.keyboardNo1.append$C(value);
}});

Clazz.newMeth(C$, 'getKeyboardNo1$',  function () {
try {
if (this.keyboardNo1 != null ) {
var value=Integer.parseInt$S(this.keyboardNo1.toString());
this.keyboardNo1=null;
return value;
}} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
} else {
throw x;
}
}
this.keyboardNo1=null;
return 1;
});

Clazz.newMeth(C$, 'getKeyboardNo2$',  function () {
try {
if (this.keyboardNo2 != null ) {
var value=Integer.parseInt$S(this.keyboardNo2.toString());
this.keyboardNo2=null;
return value;
}} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
} else {
throw x;
}
}
this.keyboardNo2=null;
return 1;
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
var pos=this.findMousePosition$java_awt_event_MouseEvent(evt);
if (pos.isOverAnnotation$() || pos.seqIndex == -1  || pos.column == -1 ) {
return;
}var didDrag=this.mouseDragging;
this.mouseDragging=false;
this.mouseWheelPressed=false;
if (evt.isPopupTrigger$()) {
this.showPopupMenu$java_awt_event_MouseEvent$jalview_gui_SeqPanel_MousePos(evt, pos);
evt.consume$();
return;
}if (this.editingSeqs) {
this.endEditing$();
} else {
this.doMouseReleasedDefineMode$java_awt_event_MouseEvent$Z(evt, didDrag);
}});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
this.lastMousePress=evt.getPoint$();
var pos=this.findMousePosition$java_awt_event_MouseEvent(evt);
if (pos.isOverAnnotation$() || pos.seqIndex == -1  || pos.column == -1 ) {
return;
}if ($I$(13).isMiddleMouseButton$java_awt_event_MouseEvent(evt)) {
this.mouseWheelPressed=true;
return;
}var isControlDown=$I$(14).isControlDown$java_awt_event_MouseEvent(evt);
if (evt.isShiftDown$() || isControlDown ) {
this.editingSeqs=true;
if (isControlDown) {
this.groupEditing=true;
}} else {
this.doMousePressedDefineMode$java_awt_event_MouseEvent$jalview_gui_SeqPanel_MousePos(evt, pos);
return;
}var seq=pos.seqIndex;
var res=pos.column;
if ((seq < this.av.getAlignment$().getHeight$()) && (res < this.av.getAlignment$().getSequenceAt$I(seq).getLength$()) ) {
this.editStartSeq=seq;
this.editLastRes=res;
} else {
this.editStartSeq=-1;
this.editLastRes=-1;
}return;
});

Clazz.newMeth(C$, 'mouseOverSequence$jalview_datamodel_SequenceI$I$I',  function (sequence, index, pos) {
var tmp=sequence.hashCode$() + " " + index + " " + pos ;
if (this.lastMessage == null  || !this.lastMessage.equals$O(tmp) ) {
this.ssm.mouseOverSequence$jalview_datamodel_SequenceI$I$I$jalview_structure_VamsasSource(sequence, index, pos, this.av);
}this.lastMessage=tmp;
});

Clazz.newMeth(C$, 'highlightSequence$jalview_datamodel_SearchResultsI',  function (results) {
if (results == null  || results.equals$O(this.lastSearchResults) ) {
return null;
}this.lastSearchResults=results;
var wasScrolled=false;
if (this.av.isFollowHighlight$()) {
this.ap.setToScrollComplementPanel$Z(false);
wasScrolled=this.ap.scrollToPosition$jalview_datamodel_SearchResultsI(results);
if (wasScrolled) {
this.seqCanvas.revalidate$();
}this.ap.setToScrollComplementPanel$Z(true);
}var fastPaint=!(wasScrolled && this.av.getWrapAlignment$() );
if (this.seqCanvas.highlightSearchResults$jalview_datamodel_SearchResultsI$Z(results, fastPaint)) {
p$1.setStatusMessage$jalview_datamodel_SearchResultsI.apply(this, [results]);
}return results.isEmpty$() ? null : p$1.getHighlightInfo$jalview_datamodel_SearchResultsI.apply(this, [results]);
});

Clazz.newMeth(C$, 'getHighlightInfo$jalview_datamodel_SearchResultsI',  function (results) {
var complement=this.ap.getAlignViewport$().getCodingComplement$();
if (complement == null ) {
return null;
}var af=$I$(15).getAlignFrameFor$jalview_api_AlignViewportI(complement);
var fr2=af.getFeatureRenderer$();
var matches=results.getResults$();
var j=matches.size$();
var infos=Clazz.new_($I$(16,1));
for (var i=0; i < j; i++) {
var match=matches.get$I(i);
var pos=match.getStart$();
if (pos == match.getEnd$()) {
var seq=match.getSequence$();
var ds=seq.getDatasetSequence$() == null  ? seq : seq.getDatasetSequence$();
var mf=fr2.findComplementFeaturesAtResidue$jalview_datamodel_SequenceI$I(ds, pos);
if (mf != null ) {
for (var sf, $sf = mf.features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var pv=mf.findProteinVariants$jalview_datamodel_SequenceFeature(sf);
if (pv.length$() > 0 && !infos.contains$O(pv) ) {
infos.add$O(pv);
}}
}}}
if (infos.isEmpty$()) {
return null;
}var sb=Clazz.new_($I$(17,1));
for (var info, $info = infos.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
if (sb.length$() > 0) {
sb.append$S("|");
}sb.append$S(info);
}
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'getVamsasSource$',  function () {
return this.ap == null  ? null : this.ap.av;
});

Clazz.newMeth(C$, 'updateColours$jalview_datamodel_SequenceI$I',  function (seq, index) {
System.out.println$S("update the seqPanel colours");
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (evt) {
if (this.editingSeqs) {
this.mouseDragged$java_awt_event_MouseEvent(evt);
}var mousePos=this.findMousePosition$java_awt_event_MouseEvent(evt);
if (mousePos.equals$O(this.lastMousePosition)) {
this.moveTooltip=false;
return;
}this.moveTooltip=true;
this.lastMousePosition=mousePos;
if (mousePos.isOverAnnotation$()) {
this.mouseMovedOverAnnotation$jalview_gui_SeqPanel_MousePos(mousePos);
return;
}var seq=mousePos.seqIndex;
var column=mousePos.column;
if (column < 0 || seq < 0  || seq >= this.av.getAlignment$().getHeight$() ) {
this.lastMousePosition=null;
this.setToolTipText$S(null);
this.lastTooltip=null;
this.lastFormattedTooltip=null;
this.ap.alignFrame.setStatus$S("");
return;
}var sequence=this.av.getAlignment$().getSequenceAt$I(seq);
if (column >= sequence.getLength$()) {
return;
}var isGapped=$I$(11,"isGap$C",[sequence.getCharAt$I(column)]);
var pos=this.setStatusMessage$jalview_datamodel_SequenceI$I$I(sequence, column, seq);
if (this.ssm != null  && !isGapped ) {
this.mouseOverSequence$jalview_datamodel_SequenceI$I$I(sequence, column, pos);
}var tooltipText=Clazz.new_($I$(17,1).c$$I,[64]);
var groups=this.av.getAlignment$().findAllGroups$jalview_datamodel_SequenceI(sequence);
if (groups != null ) {
for (var g=0; g < groups.length; g++) {
if (groups[g].getStartRes$() <= column && groups[g].getEndRes$() >= column ) {
if (!groups[g].getName$().startsWith$S("JTreeGroup") && !groups[g].getName$().startsWith$S("JGroup") ) {
tooltipText.append$S(groups[g].getName$());
}if (groups[g].getDescription$() != null ) {
tooltipText.append$S(": " + groups[g].getDescription$());
}}}
}var unshownFeatures=0;
if (this.av.isShowSequenceFeatures$()) {
var features=this.ap.getFeatureRenderer$().findFeaturesAtColumn$jalview_datamodel_SequenceI$I(sequence, column + 1);
unshownFeatures=this.seqARep.appendFeatures$StringBuilder$I$java_util_List$jalview_viewmodel_seqfeatures_FeatureRendererModel$I(tooltipText, pos, features, this.ap.getSeqPanel$().seqCanvas.fr, 300);
if (this.av.isShowComplementFeatures$()) {
if (!$I$(11,"isGap$C",[sequence.getCharAt$I(column)])) {
var complement=this.ap.getAlignViewport$().getCodingComplement$();
var af=$I$(15).getAlignFrameFor$jalview_api_AlignViewportI(complement);
var fr2=af.getFeatureRenderer$();
var mf=fr2.findComplementFeaturesAtResidue$jalview_datamodel_SequenceI$I(sequence, pos);
if (mf != null ) {
unshownFeatures+=this.seqARep.appendFeatures$StringBuilder$I$jalview_datamodel_MappedFeatures$jalview_viewmodel_seqfeatures_FeatureRendererModel$I(tooltipText, pos, mf, fr2, 300);
}}}}if (tooltipText.length$() == 0) {
this.setToolTipText$S(null);
this.lastTooltip=null;
} else {
if (tooltipText.length$() > 300) {
tooltipText.setLength$I(300);
tooltipText.append$S("...");
}if (unshownFeatures > 0) {
tooltipText.append$S("<br/>").append$S("... ").append$S("<i>").append$S($I$(18,"formatMessage$S$OA",["label.features_not_shown", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(unshownFeatures)])])).append$S("</i>");
}var textString=tooltipText.toString();
if (!textString.equals$O(this.lastTooltip)) {
this.lastTooltip=textString;
this.lastFormattedTooltip=$I$(19).wrapTooltip$Z$S(true, textString);
this.setToolTipText$S(this.lastFormattedTooltip);
}}});

Clazz.newMeth(C$, 'mouseMovedOverAnnotation$jalview_gui_SeqPanel_MousePos',  function (pos) {
var column=pos.column;
var rowIndex=pos.annotationIndex;
if (column < 0 || !this.av.getWrapAlignment$()  || !this.av.isShowAnnotation$()  || rowIndex < 0 ) {
return;
}var anns=this.av.getAlignment$().getAlignmentAnnotation$();
var tooltip=$I$(8).buildToolTip$jalview_datamodel_AlignmentAnnotation$I$jalview_datamodel_AlignmentAnnotationA(anns[rowIndex], column, anns);
if (tooltip == null  ? tooltip != this.lastTooltip : !tooltip.equals$O(this.lastTooltip)) {
this.lastTooltip=tooltip;
this.lastFormattedTooltip=tooltip == null  ? null : $I$(19).wrapTooltip$Z$S(true, tooltip);
this.setToolTipText$S(this.lastFormattedTooltip);
}var msg=$I$(8,"getStatusMessage$jalview_datamodel_AlignmentI$I$jalview_datamodel_AlignmentAnnotation",[this.av.getAlignment$(), column, anns[rowIndex]]);
this.ap.alignFrame.setStatus$S(msg);
});

Clazz.newMeth(C$, 'getToolTipLocation$java_awt_event_MouseEvent',  function (event) {
if (this.lastTooltip == null  || !this.moveTooltip ) {
return null;
}if (this.lastTooltipLocation != null  && event.isShiftDown$() ) {
return this.lastTooltipLocation;
}var x=event.getX$();
var y=event.getY$();
var w=this.getWidth$();
this.tempTip.setTipText$S(this.lastFormattedTooltip);
var tipWidth=(this.tempTip.getPreferredSize$().getWidth$()|0);
x=(x + tipWidth < w ? x + 10 : w - tipWidth);
var p=Clazz.new_([x, y + this.av.getCharHeight$()],$I$(20,1).c$$I$I);
return this.lastTooltipLocation=p;
});

Clazz.newMeth(C$, 'setStatusMessage$jalview_datamodel_SequenceI$I$I',  function (sequence, column, seqIndex) {
var sequenceChar=sequence.getCharAt$I(column);
var pos=sequence.findPosition$I(column);
this.setStatusMessage$S$I$C$I(sequence.getName$(), seqIndex, sequenceChar, pos);
return pos;
});

Clazz.newMeth(C$, 'setStatusMessage$S$I$C$I',  function (seqName, seqIndex, sequenceChar, residuePos) {
var text=Clazz.new_($I$(17,1).c$$I,[32]);
var seqno=seqIndex == -1 ? "" : " " + (seqIndex + 1);
text.append$S("Sequence").append$S(seqno).append$S(" ID: ").append$S(seqName);
var residue=null;
var isGapped=$I$(11).isGap$C(sequenceChar);
if (!isGapped) {
var nucleotide=this.av.getAlignment$().isNucleotide$();
var displayChar=String.valueOf$C(sequenceChar);
if (nucleotide) {
residue=$I$(21).nucleotideName.get$O(displayChar);
} else {
residue="X".equalsIgnoreCase$S(displayChar) ? "X" : ("*".equals$O(displayChar) ? "STOP" : $I$(21).aa2Triplet.get$O(displayChar));
}text.append$S(" ").append$S(nucleotide ? "Nucleotide" : "Residue").append$S(": ").append$S(residue == null  ? displayChar : residue);
text.append$S(" (").append$S(Integer.toString$I(residuePos)).append$S(")");
}this.ap.alignFrame.setStatus$S(text.toString());
});

Clazz.newMeth(C$, 'setStatusMessage$jalview_datamodel_SearchResultsI',  function (results) {
var al=this.av.getAlignment$();
var sequenceIndex=al.findIndex$jalview_datamodel_SearchResultsI(results);
if (sequenceIndex == -1) {
return;
}var alignedSeq=al.getSequenceAt$I(sequenceIndex);
var ds=alignedSeq.getDatasetSequence$();
for (var m, $m = results.getResults$().iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
var seq=m.getSequence$();
if (seq.getDatasetSequence$() != null ) {
seq=seq.getDatasetSequence$();
}if (seq === ds ) {
var start=m.getStart$();
this.setStatusMessage$S$I$C$I(alignedSeq.getName$(), sequenceIndex, seq.getCharAt$I(start - 1), start);
return;
}}
}, p$1);

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (evt) {
var pos=this.findMousePosition$java_awt_event_MouseEvent(evt);
if (pos.isOverAnnotation$() || pos.column == -1 ) {
return;
}if (this.mouseWheelPressed) {
var inSplitFrame=this.ap.av.getCodingComplement$() != null ;
var copyChanges=inSplitFrame && this.av.isProteinFontAsCdna$() ;
var oldWidth=this.av.getCharWidth$();
if (Math.abs(evt.getY$() - this.lastMousePress.getY$()) > Math.abs(evt.getX$() - this.lastMousePress.getX$()) ) {
var fontSize=this.av.font.getSize$();
var fontChanged=false;
if (evt.getY$() < this.lastMousePress.getY$() ) {
fontChanged=true;
--fontSize;
} else if (evt.getY$() > this.lastMousePress.getY$() ) {
fontChanged=true;
++fontSize;
}if (fontSize < 1) {
fontSize=1;
}if (fontChanged) {
var newFont=Clazz.new_([this.av.font.getName$(), this.av.font.getStyle$(), fontSize],$I$(22,1).c$$S$I$I);
this.av.setFont$java_awt_Font$Z(newFont, true);
this.av.setCharWidth$I(oldWidth);
this.ap.fontChanged$();
if (copyChanges) {
this.ap.av.getCodingComplement$().setFont$java_awt_Font$Z(newFont, true);
var splitFrame=this.ap.alignFrame.getSplitViewContainer$();
splitFrame.adjustLayout$();
splitFrame.repaint$();
}}} else {
var newWidth=0;
if (evt.getX$() < this.lastMousePress.getX$()  && this.av.getCharWidth$() > 1 ) {
newWidth=this.av.getCharWidth$() - 1;
this.av.setCharWidth$I(newWidth);
} else if (evt.getX$() > this.lastMousePress.getX$() ) {
newWidth=this.av.getCharWidth$() + 1;
this.av.setCharWidth$I(newWidth);
}if (newWidth > 0) {
this.ap.paintAlignment$Z$Z(false, false);
if (copyChanges) {
this.av.getCodingComplement$().setCharWidth$I(newWidth);
var splitFrame=this.ap.alignFrame.getSplitViewContainer$();
splitFrame.adjustLayout$();
splitFrame.repaint$();
}}}var fm=this.getFontMetrics$java_awt_Font(this.av.getFont$());
this.av.validCharWidth=fm.charWidth$C("M") <= this.av.getCharWidth$();
this.lastMousePress=evt.getPoint$();
return;
}if (!this.editingSeqs) {
this.dragStretchGroup$java_awt_event_MouseEvent(evt);
return;
}var res=pos.column;
if (res < 0) {
res=0;
}if ((this.editLastRes == -1) || (this.editLastRes == res) ) {
return;
}if ((res < this.av.getAlignment$().getWidth$()) && (res < this.editLastRes) ) {
this.editSequence$Z$Z$I(false, false, res);
} else {
this.editSequence$Z$Z$I(true, false, res);
}this.mouseDragging=true;
if (this.scrollThread != null ) {
this.scrollThread.setMousePosition$java_awt_Point(evt.getPoint$());
}});

Clazz.newMeth(C$, 'editSequence$Z$Z$I',  function (insertGap, editSeq, startres) {
var fixedLeft=-1;
var fixedRight=-1;
var fixedColumns=false;
var sg=this.av.getSelectionGroup$();
var seq=this.av.getAlignment$().getSequenceAt$I(this.editStartSeq);
if (!this.groupEditing && this.av.hasHiddenRows$() ) {
if (this.av.isHiddenRepSequence$jalview_datamodel_SequenceI(seq)) {
sg=this.av.getRepresentedSequences$jalview_datamodel_SequenceI(seq);
this.groupEditing=true;
}}var message=Clazz.new_($I$(17,1).c$$I,[64]);
var label=null;
if (this.groupEditing) {
message.append$S("Edit group:");
label=$I$(18).getString$S("action.edit_group");
} else {
message.append$S("Edit sequence: " + seq.getName$());
label=seq.getName$();
if (label.length$() > 10) {
label=label.substring$I$I(0, 10);
}label=$I$(18,"formatMessage$S$SA",["label.edit_params", Clazz.array(String, -1, [label])]);
}if (this.editCommand == null ) {
this.editCommand=Clazz.new_($I$(23,1).c$$S,[label]);
}if (insertGap) {
message.append$S(" insert ");
} else {
message.append$S(" delete ");
}message.append$S(Math.abs(startres - this.editLastRes) + " gaps.");
this.ap.alignFrame.setStatus$S(message.toString());
var inSelectionGroup=sg != null  && sg.getSequences$java_util_Map(this.av.getHiddenRepSequences$()).contains$O(seq) ;
if (this.groupEditing || inSelectionGroup ) {
fixedColumns=true;
if (sg == null ) {
if (!this.av.isHiddenRepSequence$jalview_datamodel_SequenceI(seq)) {
this.endEditing$();
return;
}sg=this.av.getRepresentedSequences$jalview_datamodel_SequenceI(seq);
}fixedLeft=sg.getStartRes$();
fixedRight=sg.getEndRes$();
if ((startres < fixedLeft && this.editLastRes >= fixedLeft ) || (startres >= fixedLeft && this.editLastRes < fixedLeft ) || (startres > fixedRight && this.editLastRes <= fixedRight ) || (startres <= fixedRight && this.editLastRes > fixedRight )  ) {
this.endEditing$();
return;
}if (fixedLeft > startres) {
fixedRight=fixedLeft - 1;
fixedLeft=0;
} else if (fixedRight < startres) {
fixedLeft=fixedRight;
fixedRight=-1;
}}if (this.av.hasHiddenColumns$()) {
fixedColumns=true;
var y1=this.av.getAlignment$().getHiddenColumns$().getNextHiddenBoundary$Z$I(true, startres);
var y2=this.av.getAlignment$().getHiddenColumns$().getNextHiddenBoundary$Z$I(false, startres);
if ((insertGap && startres > y1  && this.editLastRes < y1 ) || (!insertGap && startres < y2  && this.editLastRes > y2 ) ) {
this.endEditing$();
return;
}if (fixedLeft < y1 && (fixedRight > y2 || fixedRight == -1 ) ) {
if (startres >= y2) {
fixedLeft=y2;
} else {
fixedRight=y2 - 1;
}}}var success=this.doEditSequence$Z$Z$I$I$Z$jalview_datamodel_SequenceGroup(insertGap, editSeq, startres, fixedRight, fixedColumns, sg);
var msg=C$.getEditStatusMessage$jalview_commands_EditCommand(this.editCommand);
this.ap.alignFrame.setStatus$S(msg == null  ? " " : msg);
if (!success) {
this.endEditing$();
}this.editLastRes=startres;
this.seqCanvas.repaint$();
});

Clazz.newMeth(C$, 'doEditSequence$Z$Z$I$I$Z$jalview_datamodel_SequenceGroup',  function (insertGap, editSeq, startres, fixedRight, fixedColumns, sg) {
var seq=this.av.getAlignment$().getSequenceAt$I(this.editStartSeq);
var seqs=Clazz.array($I$(24), -1, [seq]);
if (this.groupEditing) {
var vseqs=sg.getSequences$java_util_Map(this.av.getHiddenRepSequences$());
var g;
var groupSize=vseqs.size$();
var groupSeqs=Clazz.array($I$(24), [groupSize]);
for (g=0; g < groupSeqs.length; g++) {
groupSeqs[g]=vseqs.get$I(g);
}
if (insertGap) {
if (sg.getStartRes$() == 0 && sg.getEndRes$() == fixedRight  && sg.getEndRes$() == this.av.getAlignment$().getWidth$() - 1 ) {
sg.setEndRes$I(this.av.getAlignment$().getWidth$() + startres - this.editLastRes);
fixedRight=sg.getEndRes$();
}var blank=false;
for (; fixedRight > this.editLastRes; fixedRight--) {
blank=true;
for (g=0; g < groupSize; g++) {
for (var j=0; j < startres - this.editLastRes; j++) {
if (!$I$(11,"isGap$C",[groupSeqs[g].getCharAt$I(fixedRight - j)])) {
blank=false;
break;
}}
}
if (blank) {
break;
}}
if (!blank) {
if (sg.getSize$() == this.av.getAlignment$().getHeight$()) {
if ((this.av.hasHiddenColumns$() && startres < this.av.getAlignment$().getHiddenColumns$().getNextHiddenBoundary$Z$I(false, startres) )) {
return false;
}var alWidth=this.av.getAlignment$().getWidth$();
if (this.av.hasHiddenRows$()) {
var hwidth=this.av.getAlignment$().getHiddenSequences$().getWidth$();
if (hwidth > alWidth) {
alWidth=hwidth;
}}sg.setEndRes$I(sg.getEndRes$() + startres - this.editLastRes);
fixedRight=alWidth + startres - this.editLastRes;
} else {
return false;
}}} else if (!insertGap) {
for (g=0; g < groupSize; g++) {
for (var j=startres; j < this.editLastRes; j++) {
if (groupSeqs[g].getLength$() <= j) {
continue;
}if (!$I$(11,"isGap$C",[groupSeqs[g].getCharAt$I(j)])) {
return false;
}}
}
}if (insertGap) {
if (fixedColumns && fixedRight != -1 ) {
for (var j=this.editLastRes; j < startres; j++) {
this.insertGap$I$jalview_datamodel_SequenceIA$I(j, groupSeqs, fixedRight);
}
} else {
this.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$Z($I$(25).INSERT_GAP, groupSeqs, startres, startres - this.editLastRes, false);
}} else {
if (fixedColumns && fixedRight != -1 ) {
for (var j=this.editLastRes; j > startres; j--) {
this.deleteChar$I$jalview_datamodel_SequenceIA$I(startres, groupSeqs, fixedRight);
}
} else {
this.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$Z($I$(25).DELETE_GAP, groupSeqs, startres, this.editLastRes - startres, false);
}}} else {
if (insertGap) {
if (fixedColumns && fixedRight != -1 ) {
for (var j=this.editLastRes; j < startres; j++) {
if (!this.insertGap$I$jalview_datamodel_SequenceIA$I(j, seqs, fixedRight)) {
return false;
}}
} else {
this.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$Z($I$(25).INSERT_GAP, seqs, this.editLastRes, startres - this.editLastRes, false);
}} else {
if (!editSeq) {
if (fixedColumns && fixedRight != -1 ) {
for (var j=this.editLastRes; j > startres; j--) {
if (!$I$(11,"isGap$C",[seq.getCharAt$I(startres)])) {
return false;
}this.deleteChar$I$jalview_datamodel_SequenceIA$I(startres, seqs, fixedRight);
}
} else {
var max=0;
for (var m=startres; m < this.editLastRes; m++) {
if (!$I$(11,"isGap$C",[seq.getCharAt$I(m)])) {
break;
}++max;
}
if (max > 0) {
this.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$Z($I$(25).DELETE_GAP, seqs, startres, max, false);
}}} else {
if (fixedColumns && fixedRight != -1 ) {
for (var j=this.editLastRes; j < startres; j++) {
this.insertGap$I$jalview_datamodel_SequenceIA$I(j, seqs, fixedRight);
}
} else {
this.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$Z($I$(25).INSERT_NUC, seqs, this.editLastRes, startres - this.editLastRes, false);
}}}}return true;
});

Clazz.newMeth(C$, 'getEditStatusMessage$jalview_commands_EditCommand',  function (editCommand) {
if (editCommand == null ) {
return null;
}var count=0;
for (var cmd, $cmd = editCommand.getEdits$().iterator$(); $cmd.hasNext$()&&((cmd=($cmd.next$())),1);) {
if (!cmd.isSystemGenerated$()) {
count+=cmd.getAction$() === $I$(25).INSERT_GAP  ? cmd.getNumber$() : -cmd.getNumber$();
}}
if (count == 0) {
return null;
}var msgKey=count > 1 ? "label.insert_gaps" : (count == 1 ? "label.insert_gap" : (count == -1 ? "label.delete_gap" : "label.delete_gaps"));
count=Math.abs(count);
return $I$(18,"formatMessage$S$OA",[msgKey, Clazz.array(java.lang.Object, -1, [String.valueOf$I(count)])]);
}, 1);

Clazz.newMeth(C$, 'insertGap$I$jalview_datamodel_SequenceIA$I',  function (j, seq, fixedColumn) {
var blankColumn=fixedColumn;
for (var s=0; s < seq.length; s++) {
for (blankColumn=fixedColumn; blankColumn > j; blankColumn--) {
if ($I$(11,"isGap$C",[seq[s].getCharAt$I(blankColumn)])) {
break;
}}
if (blankColumn <= j) {
blankColumn=fixedColumn;
this.endEditing$();
return false;
}}
this.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$Z($I$(25).DELETE_GAP, seq, blankColumn, 1, true);
this.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$Z($I$(25).INSERT_GAP, seq, j, 1, false);
return true;
});

Clazz.newMeth(C$, 'appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$Z',  function (action, seq, pos, count, systemGenerated) {
var edit=Clazz.new_([Clazz.new_($I$(23,1)), null, action, seq, pos, count, this.av.getAlignment$().getGapCharacter$()],$I$(26,1).c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$C);
edit.setSystemGenerated$Z(systemGenerated);
this.editCommand.appendEdit$jalview_commands_EditCommand_Edit$jalview_datamodel_AlignmentI$Z$jalview_datamodel_AlignmentIA(edit, this.av.getAlignment$(), true, null);
});

Clazz.newMeth(C$, 'deleteChar$I$jalview_datamodel_SequenceIA$I',  function (j, seqs, fixedColumn) {
this.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$Z($I$(25).DELETE_GAP, seqs, j, 1, false);
this.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$Z($I$(25).INSERT_GAP, seqs, fixedColumn, 1, true);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
if (this.oldSeq < 0) {
this.oldSeq=0;
}this.stopScrolling$();
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.lastMousePosition=null;
this.ap.alignFrame.setStatus$S(" ");
if (this.av.getWrapAlignment$()) {
return;
}if (this.mouseDragging && this.scrollThread == null  ) {
this.startScrolling$java_awt_Point(e.getPoint$());
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (evt) {
var sg=null;
var pos=this.findMousePosition$java_awt_event_MouseEvent(evt);
if (pos.isOverAnnotation$() || pos.seqIndex == -1  || pos.column == -1 ) {
return;
}if (evt.getClickCount$() > 1 && this.av.isShowSequenceFeatures$() ) {
sg=this.av.getSelectionGroup$();
if (sg != null  && sg.getSize$() == 1  && sg.getEndRes$() - sg.getStartRes$() < 2 ) {
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
}var column=pos.column;
var sequence=this.av.getAlignment$().getSequenceAt$I(pos.seqIndex);
var features=this.seqCanvas.getFeatureRenderer$().findFeaturesAtColumn$jalview_datamodel_SequenceI$I(sequence, column + 1);
if (!features.isEmpty$()) {
var highlight=Clazz.new_($I$(27,1));
highlight.addResult$jalview_datamodel_SequenceI$I$I(sequence, features.get$I(0).getBegin$(), features.get$I(0).getEnd$());
this.seqCanvas.highlightSearchResults$jalview_datamodel_SearchResultsI$Z(highlight, true);
Clazz.new_([this.ap, $I$(29).singletonList$O(sequence), features, false],$I$(28,1).c$$jalview_gui_AlignmentPanel$java_util_List$java_util_List$Z).showDialog$();
}}});

Clazz.newMeth(C$, 'mouseWheelMoved$java_awt_event_MouseWheelEvent',  function (e) {
e.consume$();
var wheelRotation=e.getPreciseWheelRotation$();
if (wheelRotation > 0 ) {
if (e.isShiftDown$()) {
this.av.getRanges$().scrollRight$Z(true);
} else {
this.av.getRanges$().scrollUp$Z(false);
}} else if (wheelRotation < 0 ) {
if (e.isShiftDown$()) {
this.av.getRanges$().scrollRight$Z(false);
} else {
this.av.getRanges$().scrollUp$Z(true);
}}this.mouseMoved$java_awt_event_MouseEvent(e);
$I$(4).sharedInstance$().mouseMoved$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'doMousePressedDefineMode$java_awt_event_MouseEvent$jalview_gui_SeqPanel_MousePos',  function (evt, pos) {
if (pos.isOverAnnotation$() || pos.seqIndex == -1  || pos.column == -1 ) {
return;
}var res=pos.column;
var seq=pos.seqIndex;
this.oldSeq=seq;
this.updateOverviewAndStructs=false;
this.startWrapBlock=this.wrappedBlock;
var sequence=this.av.getAlignment$().getSequenceAt$I(seq);
if ((sequence == null ) || (res > sequence.getLength$()) ) {
return;
}this.stretchGroup=this.av.getSelectionGroup$();
if (this.stretchGroup == null  || !this.stretchGroup.contains$jalview_datamodel_SequenceI$I(sequence, res) ) {
this.stretchGroup=this.av.getAlignment$().findGroup$jalview_datamodel_SequenceI$I(sequence, res);
if (this.stretchGroup != null ) {
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(this.stretchGroup);
}}if ($I$(14).isWinRightButton$java_awt_event_MouseEvent(evt)) {
return;
}if (evt.isPopupTrigger$()) {
this.showPopupMenu$java_awt_event_MouseEvent$jalview_gui_SeqPanel_MousePos(evt, pos);
return;
}if (this.av.cursorMode) {
this.seqCanvas.cursorX=res;
this.seqCanvas.cursorY=seq;
this.seqCanvas.repaint$();
return;
}if (this.stretchGroup == null ) {
p$1.createStretchGroup$I$jalview_datamodel_SequenceI.apply(this, [res, sequence]);
}if (this.stretchGroup != null ) {
this.stretchGroup.addPropertyChangeListener$java_beans_PropertyChangeListener(this.seqCanvas);
}this.seqCanvas.repaint$();
});

Clazz.newMeth(C$, 'createStretchGroup$I$jalview_datamodel_SequenceI',  function (res, sequence) {
var sg=Clazz.new_($I$(12,1));
sg.setStartRes$I(res);
sg.setEndRes$I(res);
sg.addSequence$jalview_datamodel_SequenceI$Z(sequence, false);
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(sg);
this.stretchGroup=sg;
if (this.av.getConservationSelected$()) {
$I$(30,"setConservationSlider$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.ap, this.av.getResidueShading$(), this.ap.getViewName$()]);
}if (this.av.getAbovePIDThreshold$()) {
$I$(30,"setPIDSliderSource$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.ap, this.av.getResidueShading$(), this.ap.getViewName$()]);
}if ((this.stretchGroup != null ) && (this.stretchGroup.getEndRes$() == res) ) {
this.changeEndRes=true;
} else if ((this.stretchGroup != null ) && (this.stretchGroup.getStartRes$() == res) ) {
this.changeStartRes=true;
}this.stretchGroup.getWidth$();
}, p$1);

Clazz.newMeth(C$, 'showPopupMenu$java_awt_event_MouseEvent$jalview_gui_SeqPanel_MousePos',  function (evt, pos) {
var column=pos.column;
var seq=pos.seqIndex;
var sequence=this.av.getAlignment$().getSequenceAt$I(seq);
if (sequence != null ) {
var pop=Clazz.new_($I$(31,1).c$$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceI$I,[this.ap, sequence, column]);
pop.show$java_awt_Component$I$I(this, evt.getX$(), evt.getY$());
}});

Clazz.newMeth(C$, 'doMouseReleasedDefineMode$java_awt_event_MouseEvent$Z',  function (evt, afterDrag) {
if (this.stretchGroup == null ) {
return;
}this.stretchGroup.removePropertyChangeListener$java_beans_PropertyChangeListener(this.seqCanvas);
var vischange=this.stretchGroup.recalcConservation$Z(true);
this.updateOverviewAndStructs=!!(this.updateOverviewAndStructs|(vischange && this.av.isSelectionDefinedGroup$() && afterDrag  ));
if (this.stretchGroup.cs != null ) {
if (afterDrag) {
this.stretchGroup.cs.alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map(this.stretchGroup, this.av.getHiddenRepSequences$());
}var groupColourScheme=this.stretchGroup.getGroupColourScheme$();
var name=this.stretchGroup.getName$();
if (this.stretchGroup.cs.conservationApplied$()) {
$I$(30).setConservationSlider$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S(this.ap, groupColourScheme, name);
}if (this.stretchGroup.cs.getThreshold$() > 0) {
$I$(30).setPIDSliderSource$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S(this.ap, groupColourScheme, name);
}}$I$(32,"Refresh$java_awt_Component$S",[this, this.av.getSequenceSetId$()]);
this.ap.paintAlignment$Z$Z(this.updateOverviewAndStructs, this.updateOverviewAndStructs);
this.updateOverviewAndStructs=false;
this.changeEndRes=false;
this.changeStartRes=false;
this.stretchGroup=null;
this.av.sendSelection$();
});

Clazz.newMeth(C$, 'dragStretchGroup$java_awt_event_MouseEvent',  function (evt) {
if (this.stretchGroup == null ) {
return;
}var pos=this.findMousePosition$java_awt_event_MouseEvent(evt);
if (pos.isOverAnnotation$() || pos.column == -1  || pos.seqIndex == -1 ) {
return;
}var res=pos.column;
var y=pos.seqIndex;
if (this.wrappedBlock != this.startWrapBlock) {
return;
}res=Math.min(res, this.av.getAlignment$().getWidth$() - 1);
if (this.stretchGroup.getEndRes$() == res) {
this.changeEndRes=true;
} else if (this.stretchGroup.getStartRes$() == res) {
this.changeStartRes=true;
}if (res < this.av.getRanges$().getStartRes$()) {
res=this.av.getRanges$().getStartRes$();
}if (this.changeEndRes) {
if (res > (this.stretchGroup.getStartRes$() - 1)) {
this.stretchGroup.setEndRes$I(res);
this.updateOverviewAndStructs=!!(this.updateOverviewAndStructs|(this.av.isSelectionDefinedGroup$()));
}} else if (this.changeStartRes) {
if (res < (this.stretchGroup.getEndRes$() + 1)) {
this.stretchGroup.setStartRes$I(res);
this.updateOverviewAndStructs=!!(this.updateOverviewAndStructs|(this.av.isSelectionDefinedGroup$()));
}}var dragDirection=0;
if (y > this.oldSeq) {
dragDirection=1;
} else if (y < this.oldSeq) {
dragDirection=-1;
}while ((y != this.oldSeq) && (this.oldSeq > -1) && (y < this.av.getAlignment$().getHeight$())  ){
var seq=this.av.getAlignment$().getSequenceAt$I(this.oldSeq);
this.oldSeq+=dragDirection;
if (this.oldSeq < 0) {
break;
}var nextSeq=this.av.getAlignment$().getSequenceAt$I(this.oldSeq);
if (this.stretchGroup.getSequences$java_util_Map(null).contains$O(nextSeq)) {
this.stretchGroup.deleteSequence$jalview_datamodel_SequenceI$Z(seq, false);
this.updateOverviewAndStructs=!!(this.updateOverviewAndStructs|(this.av.isSelectionDefinedGroup$()));
} else {
if (seq != null ) {
this.stretchGroup.addSequence$jalview_datamodel_SequenceI$Z(seq, false);
}this.stretchGroup.addSequence$jalview_datamodel_SequenceI$Z(nextSeq, false);
this.updateOverviewAndStructs=!!(this.updateOverviewAndStructs|(this.av.isSelectionDefinedGroup$()));
}}
if (this.oldSeq < 0) {
this.oldSeq=-1;
}this.mouseDragging=true;
if (this.scrollThread != null ) {
this.scrollThread.setMousePosition$java_awt_Point(evt.getPoint$());
}var status=Clazz.new_($I$(17,1).c$$I,[64]);
var seqs=this.stretchGroup.getSequences$();
var name=seqs.get$I(0).getName$();
if (name.length$() > 20) {
name=name.substring$I$I(0, 20);
}status.append$S(name).append$S(" - ");
name=seqs.get$I(seqs.size$() - 1).getName$();
if (name.length$() > 20) {
name=name.substring$I$I(0, 20);
}status.append$S(name).append$S(" ");
var startRes=this.stretchGroup.getStartRes$();
status.append$S(" cols ").append$S(String.valueOf$I(startRes + 1)).append$S("-");
var endRes=this.stretchGroup.getEndRes$();
status.append$S(String.valueOf$I(endRes + 1));
status.append$S(" (").append$S(String.valueOf$I(seqs.size$())).append$S(" x ").append$S(String.valueOf$I(endRes - startRes + 1)).append$S(")");
this.ap.alignFrame.setStatus$S(status.toString());
});

Clazz.newMeth(C$, 'stopScrolling$',  function () {
if (this.scrollThread != null ) {
this.scrollThread.stopScrolling$();
this.scrollThread=null;
}this.mouseDragging=false;
});

Clazz.newMeth(C$, 'startScrolling$java_awt_Point',  function (mousePos) {
this.mouseDragging=true;
if (!this.av.getWrapAlignment$() && this.scrollThread == null  ) {
this.scrollThread=Clazz.new_($I$(33,1),[this, null]);
this.scrollThread.setMousePosition$java_awt_Point(mousePos);
if ($I$(14).isJS$()) {
var t=Clazz.new_([20, ((P$.SeqPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SeqPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['jalview.gui.SeqPanel'].scrollThread != null ) {
this.b$['jalview.gui.SeqPanel'].scrollThread.scrollOnce$();
}});
})()
), Clazz.new_(P$.SeqPanel$1.$init$,[this, null]))],$I$(34,1).c$$I$java_awt_event_ActionListener);
t.addActionListener$java_awt_event_ActionListener(((P$.SeqPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SeqPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['jalview.gui.SeqPanel'].scrollThread == null ) {
this.$finals$.t.stop$();
}});
})()
), Clazz.new_(P$.SeqPanel$2.$init$,[this, {t:t}])));
t.start$();
} else {
this.scrollThread.start$();
}}});

Clazz.newMeth(C$, 'selection$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource',  function (seqsel, colsel, hidden, source) {
var iSentTheSelection=(this.av === source  || (Clazz.instanceOf(source, "jalview.gui.AlignViewport") && (source).getSequenceSetId$().equals$O(this.av.getSequenceSetId$()) ) );
if (iSentTheSelection) {
if (this.ap.getCalculationDialog$() != null ) {
this.ap.getCalculationDialog$().validateCalcTypes$();
}return;
}if (!this.av.followSelection) {
return;
}if (this.av.isSelectionGroupChanged$Z(false) || this.av.isColSelChanged$Z(false) ) {
return;
}if (this.selectionFromTranslation$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource(seqsel, colsel, hidden, source)) {
return;
}var repaint=false;
var copycolsel=false;
var sgroup=null;
if (seqsel != null  && seqsel.getSize$() > 0 ) {
if (this.av.getAlignment$() == null ) {
$I$(35,"warn$S",["alignviewport av SeqSetId=" + this.av.getSequenceSetId$() + " ViewId=" + this.av.getViewId$() + " 's alignment is NULL! returning immediately." ]);
return;
}sgroup=seqsel.intersect$jalview_datamodel_AlignmentI$java_util_Map(this.av.getAlignment$(), (this.av.hasHiddenRows$()) ? this.av.getHiddenRepSequences$() : null);
if ((sgroup != null  && sgroup.getSize$() > 0 )) {
copycolsel=true;
}}if (sgroup != null  && sgroup.getSize$() > 0 ) {
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(sgroup);
} else {
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
}this.av.isSelectionGroupChanged$Z(true);
repaint=true;
if (copycolsel) {
if (colsel == null  || colsel.isEmpty$() ) {
if (this.av.getColumnSelection$() != null ) {
this.av.getColumnSelection$().clear$();
repaint=true;
}} else {
if (this.av.getColumnSelection$() == null ) {
this.av.setColumnSelection$jalview_datamodel_ColumnSelection(Clazz.new_($I$(36,1).c$$jalview_datamodel_ColumnSelection,[colsel]));
} else {
this.av.getColumnSelection$().setElementsFrom$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns(colsel, this.av.getAlignment$().getHiddenColumns$());
}}this.av.isColSelChanged$Z(true);
repaint=true;
}if (copycolsel && this.av.hasHiddenColumns$() && (this.av.getAlignment$().getHiddenColumns$() == null )  ) {
System.err.println$S("Bad things");
}if (repaint) {
$I$(32,"Refresh$java_awt_Component$S",[this, this.av.getSequenceSetId$()]);
}if (this.ap.getCalculationDialog$() != null ) {
this.ap.getCalculationDialog$().validateCalcTypes$();
}});

Clazz.newMeth(C$, 'selectionFromTranslation$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource',  function (seqsel, colsel, hidden, source) {
if (!(Clazz.instanceOf(source, "jalview.api.AlignViewportI"))) {
return false;
}var sourceAv=source;
if (sourceAv.getCodingComplement$() !== this.av  && this.av.getCodingComplement$() !== sourceAv  ) {
return false;
}var sg=$I$(37).mapSequenceGroup$jalview_datamodel_SequenceGroup$jalview_api_AlignViewportI$jalview_api_AlignViewportI(seqsel, sourceAv, this.av);
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(sg != null  && sg.getSize$() > 0  ? sg : null);
this.av.isSelectionGroupChanged$Z(true);
var cs=Clazz.new_($I$(36,1));
var hs=Clazz.new_($I$(38,1));
$I$(37).mapColumnSelection$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_api_AlignViewportI$jalview_api_AlignViewportI$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns(colsel, hidden, sourceAv, this.av, cs, hs);
this.av.setColumnSelection$jalview_datamodel_ColumnSelection(cs);
var hiddenChanged=this.av.getAlignment$().setHiddenColumns$jalview_datamodel_HiddenColumns(hs);
if (this.ap.getCalculationDialog$() != null ) {
this.ap.getCalculationDialog$().validateCalcTypes$();
}this.ap.paintAlignment$Z$Z(hiddenChanged, hiddenChanged);
return true;
});

Clazz.newMeth(C$, 'getLastSearchResults$',  function () {
return this.lastSearchResults;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.SeqPanel, "MousePos", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['column','seqIndex','annotationIndex']]]

Clazz.newMeth(C$, 'c$$I$I$I',  function (col, seq, ann) {
;C$.$init$.apply(this);
this.column=col;
this.seqIndex=seq;
this.annotationIndex=ann;
}, 1);

Clazz.newMeth(C$, 'isOverAnnotation$',  function () {
return this.annotationIndex != -1;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null  || !(Clazz.instanceOf(obj, "jalview.gui.SeqPanel.MousePos")) ) {
return false;
}var o=obj;
var b=(this.column == o.column && this.seqIndex == o.seqIndex  && this.annotationIndex == o.annotationIndex );
return b;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.column + this.seqIndex + this.annotationIndex ;
});

Clazz.newMeth(C$, 'toString',  function () {
return String.format$S$OA("c%d:s%d:a%d", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(this.column), Integer.valueOf$I(this.seqIndex), Integer.valueOf$I(this.annotationIndex)]));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SeqPanel, "ScrollThread", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keepRunning=true;
},1);

C$.$fields$=[['Z',['keepRunning'],'O',['mousePos','java.awt.Point']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setName$S("SeqPanel$ScrollThread");
}, 1);

Clazz.newMeth(C$, 'setMousePosition$java_awt_Point',  function (p) {
this.mousePos=p;
});

Clazz.newMeth(C$, 'stopScrolling$',  function () {
this.keepRunning=false;
});

Clazz.newMeth(C$, 'run$',  function () {
while (this.keepRunning){
if (this.mousePos != null ) {
this.keepRunning=this.scrollOnce$();
}try {
$I$(1).sleep$J(20);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}
this.b$['jalview.gui.SeqPanel'].scrollThread=null;
});

Clazz.newMeth(C$, 'scrollOnce$',  function () {
if (!this.b$['jalview.gui.SeqPanel'].mouseDragging) {
return false;
}var scrolled=false;
var ranges=this.b$['jalview.gui.SeqPanel'].av.getRanges$();
if (this.mousePos.y < 0) {
scrolled=ranges.scrollUp$Z(true);
} else if (this.mousePos.y >= this.b$['javax.swing.JComponent'].getHeight$.apply(this.b$['javax.swing.JComponent'], [])) {
scrolled=ranges.scrollUp$Z(false);
}if (this.mousePos.x < 0) {
scrolled=!!(scrolled|(ranges.scrollRight$Z(false)));
} else if (this.mousePos.x >= this.b$['javax.swing.JComponent'].getWidth$.apply(this.b$['javax.swing.JComponent'], [])) {
scrolled=!!(scrolled|(ranges.scrollRight$Z(true)));
}return scrolled;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:35 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
