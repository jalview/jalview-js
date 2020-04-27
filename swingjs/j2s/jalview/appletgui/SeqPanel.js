(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'Thread','jalview.appletgui.SeqCanvas','java.awt.BorderLayout','jalview.structure.StructureSelectionManager','StringBuffer','jalview.datamodel.SequenceGroup','StringBuilder','jalview.schemes.ResidueProperties','jalview.util.Platform','jalview.datamodel.SearchResults','java.util.Collections','jalview.util.Comparison','jalview.appletgui.Tooltip','java.awt.Font','jalview.util.MessageManager','jalview.commands.EditCommand','jalview.datamodel.SequenceI',['jalview.commands.EditCommand','.Action'],'java.util.Vector','jalview.appletgui.APopupMenu','jalview.appletgui.SliderPanel','jalview.appletgui.PaintRefresher',['jalview.appletgui.SeqPanel','.ScrollThread'],'jalview.datamodel.ColumnSelection','jalview.util.MappingUtils','jalview.datamodel.HiddenColumns']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SeqPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.Panel', ['java.awt.event.MouseMotionListener', 'java.awt.event.MouseListener', 'jalview.structure.SequenceListener', 'jalview.structure.SelectionListener']);
C$.$classes$=[['ScrollThread',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.seqEditOccurred=false;
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
this.mouseWheelPressed=false;
this.startWrapBlock=-1;
this.wrappedBlock=-1;
},1);

C$.$fields$=[['Z',['seqEditOccurred','mouseDragging','editingSeqs','groupEditing','changeEndSeq','changeStartSeq','changeEndRes','changeStartRes','mouseWheelPressed','needOverviewUpdate'],'I',['lastres','startseq','oldSeq','startWrapBlock','wrappedBlock'],'S',['lastMessage'],'O',['seqCanvas','jalview.appletgui.SeqCanvas','ap','jalview.appletgui.AlignmentPanel','av','jalview.appletgui.AlignViewport','scrollThread','jalview.appletgui.SeqPanel.ScrollThread','stretchGroup','jalview.datamodel.SequenceGroup','keyboardNo1','StringBuffer','+keyboardNo2','lastMousePress','java.awt.Point','editCommand','jalview.commands.EditCommand','ssm','jalview.structure.StructureSelectionManager','tooltip','jalview.appletgui.Tooltip']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignViewport$jalview_appletgui_AlignmentPanel', function (avp, p) {
Clazz.super_(C$, this);
this.av=avp;
this.seqCanvas=Clazz.new_($I$(2,1).c$$jalview_appletgui_AlignViewport,[avp]);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
this.add$java_awt_Component(this.seqCanvas);
this.ap=p;
this.seqCanvas.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
this.seqCanvas.addMouseListener$java_awt_event_MouseListener(this);
this.ssm=$I$(4).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this.av.applet);
this.ssm.addStructureViewerListener$O(this);
this.ssm.addSelectionListener$jalview_structure_SelectionListener(this);
this.seqCanvas.repaint$();
}, 1);

Clazz.newMeth(C$, 'endEditing$', function () {
if (this.editCommand != null  && this.editCommand.getSize$() > 0 ) {
this.ap.alignFrame.addHistoryItem$jalview_commands_CommandI(this.editCommand);
this.av.firePropertyChange$S$O$O("alignment", null, this.av.getAlignment$().getSequences$());
}this.startseq=-1;
this.lastres=-1;
this.editingSeqs=false;
this.groupEditing=false;
this.keyboardNo1=null;
this.keyboardNo2=null;
this.editCommand=null;
});

Clazz.newMeth(C$, 'setCursorRow$', function () {
this.seqCanvas.cursorY=this.getKeyboardNo1$() - 1;
this.scrollToVisible$Z(true);
});

Clazz.newMeth(C$, 'setCursorColumn$', function () {
this.seqCanvas.cursorX=this.getKeyboardNo1$() - 1;
this.scrollToVisible$Z(true);
});

Clazz.newMeth(C$, 'setCursorRowAndColumn$', function () {
if (this.keyboardNo2 == null ) {
this.keyboardNo2=Clazz.new_($I$(5,1));
} else {
this.seqCanvas.cursorX=this.getKeyboardNo1$() - 1;
this.seqCanvas.cursorY=this.getKeyboardNo2$() - 1;
this.scrollToVisible$Z(true);
}});

Clazz.newMeth(C$, 'setCursorPosition$', function () {
var sequence=this.av.getAlignment$().getSequenceAt$I(this.seqCanvas.cursorY);
this.seqCanvas.cursorX=sequence.findIndex$I(this.getKeyboardNo1$()) - 1;
this.scrollToVisible$Z(true);
});

Clazz.newMeth(C$, 'moveCursor$I$I', function (dx, dy) {
this.seqCanvas.cursorX+=dx;
this.seqCanvas.cursorY+=dy;
if (this.av.hasHiddenColumns$() && !this.av.getAlignment$().getHiddenColumns$().isVisible$I(this.seqCanvas.cursorX) ) {
var original=this.seqCanvas.cursorX - dx;
var maxWidth=this.av.getAlignment$().getWidth$();
while (!this.av.getAlignment$().getHiddenColumns$().isVisible$I(this.seqCanvas.cursorX) && this.seqCanvas.cursorX < maxWidth  && this.seqCanvas.cursorX > 0 ){
this.seqCanvas.cursorX+=dx;
}
if (this.seqCanvas.cursorX >= maxWidth || !this.av.getAlignment$().getHiddenColumns$().isVisible$I(this.seqCanvas.cursorX) ) {
this.seqCanvas.cursorX=original;
}}this.scrollToVisible$Z(false);
});

Clazz.newMeth(C$, 'scrollToVisible$Z', function (jump) {
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
this.av.getRanges$().scrollToWrappedVisible$I(this.seqCanvas.cursorX);
} else {
this.av.getRanges$().scrollToVisible$I$I(this.seqCanvas.cursorX, this.seqCanvas.cursorY);
}}this.setStatusMessage$jalview_datamodel_SequenceI$I$I(this.av.getAlignment$().getSequenceAt$I(this.seqCanvas.cursorY), this.seqCanvas.cursorX, this.seqCanvas.cursorY);
if (repaintNeeded) {
this.seqCanvas.repaint$();
}});

Clazz.newMeth(C$, 'setSelectionAreaAtCursor$Z', function (topLeft) {
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
max++;
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
sg.clear$();
for (var i=min; i < max; i++) {
sg.addSequence$jalview_datamodel_SequenceI$Z(this.av.getAlignment$().getSequenceAt$I(i), false);
}
}}if (this.av.getSelectionGroup$() == null ) {
var sg=Clazz.new_($I$(6,1));
sg.setStartRes$I(this.seqCanvas.cursorX);
sg.setEndRes$I(this.seqCanvas.cursorX);
sg.addSequence$jalview_datamodel_SequenceI$Z(sequence, false);
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(sg);
}this.ap.paintAlignment$Z$Z(false, false);
this.av.sendSelection$();
});

Clazz.newMeth(C$, 'insertGapAtCursor$Z', function (group) {
this.groupEditing=group;
this.startseq=this.seqCanvas.cursorY;
this.lastres=this.seqCanvas.cursorX;
this.editSequence$Z$I(true, this.seqCanvas.cursorX + this.getKeyboardNo1$());
this.endEditing$();
});

Clazz.newMeth(C$, 'deleteGapAtCursor$Z', function (group) {
this.groupEditing=group;
this.startseq=this.seqCanvas.cursorY;
this.lastres=this.seqCanvas.cursorX + this.getKeyboardNo1$();
this.editSequence$Z$I(false, this.seqCanvas.cursorX);
this.endEditing$();
});

Clazz.newMeth(C$, 'numberPressed$C', function (value) {
if (this.keyboardNo1 == null ) {
this.keyboardNo1=Clazz.new_($I$(5,1));
}if (this.keyboardNo2 != null ) {
this.keyboardNo2.append$C(value);
} else {
this.keyboardNo1.append$C(value);
}});

Clazz.newMeth(C$, 'getKeyboardNo1$', function () {
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

Clazz.newMeth(C$, 'getKeyboardNo2$', function () {
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

Clazz.newMeth(C$, 'setStatusMessage$jalview_datamodel_SequenceI$I$I', function (sequence, column, seq) {
var text=Clazz.new_($I$(7,1).c$$I,[32]);
var seqno=seq == -1 ? "" : " " + (seq + 1);
text.append$S("Sequence" + seqno + " ID: " + sequence.getName$() );
var residue=null;
var displayChar=String.valueOf$C(sequence.getCharAt$I(column));
if (this.av.getAlignment$().isNucleotide$()) {
residue=$I$(8).nucleotideName.get$O(displayChar);
if (residue != null ) {
text.append$S(" Nucleotide: ").append$S(residue);
}} else {
residue="X".equalsIgnoreCase$S(displayChar) ? "X" : ("*".equals$O(displayChar) ? "STOP" : $I$(8).aa2Triplet.get$O(displayChar));
if (residue != null ) {
text.append$S(" Residue: ").append$S(residue);
}}var pos=-1;
if (residue != null ) {
pos=sequence.findPosition$I(column);
text.append$S(" (").append$S(Integer.toString$I(pos)).append$S(")");
}this.ap.alignFrame.statusBar.setText$S(text.toString());
});

Clazz.newMeth(C$, 'setStatusMessage$jalview_datamodel_SearchResultsI', function (results) {
var al=this.av.getAlignment$();
var sequenceIndex=al.findIndex$jalview_datamodel_SearchResultsI(results);
if (sequenceIndex == -1) {
return false;
}var ds=al.getSequenceAt$I(sequenceIndex).getDatasetSequence$();
for (var m, $m = results.getResults$().iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
var seq=m.getSequence$();
if (seq.getDatasetSequence$() != null ) {
seq=seq.getDatasetSequence$();
}if (seq === ds ) {
var start=m.getStart$() - m.getSequence$().getStart$();
this.setStatusMessage$jalview_datamodel_SequenceI$I$I(seq, start, sequenceIndex);
return true;
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
this.lastMousePress=evt.getPoint$();
if ($I$(9).isWinMiddleButton$java_awt_event_MouseEvent(evt)) {
this.mouseWheelPressed=true;
return;
}if (evt.isShiftDown$() || evt.isControlDown$() || evt.isAltDown$()  ) {
if (evt.isControlDown$() || evt.isAltDown$() ) {
this.groupEditing=true;
}this.editingSeqs=true;
} else {
this.doMousePressedDefineMode$java_awt_event_MouseEvent(evt);
return;
}var seq=this.findSeq$java_awt_event_MouseEvent(evt);
var res=this.findColumn$java_awt_event_MouseEvent(evt);
if (seq < 0 || res < 0 ) {
return;
}if ((seq < this.av.getAlignment$().getHeight$()) && (res < this.av.getAlignment$().getSequenceAt$I(seq).getLength$()) ) {
this.startseq=seq;
this.lastres=res;
} else {
this.startseq=-1;
this.lastres=-1;
}return;
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
var sequence=this.av.getAlignment$().getSequenceAt$I(this.findSeq$java_awt_event_MouseEvent(evt));
if (evt.getClickCount$() > 1) {
if (this.av.getSelectionGroup$() != null  && this.av.getSelectionGroup$().getSize$() == 1  && this.av.getSelectionGroup$().getEndRes$() - this.av.getSelectionGroup$().getStartRes$() < 2 ) {
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
}var column=this.findColumn$java_awt_event_MouseEvent(evt);
var features=this.findFeaturesAtColumn$jalview_datamodel_SequenceI$I(sequence, column + 1);
if (!features.isEmpty$()) {
var highlight=Clazz.new_($I$(10,1));
highlight.addResult$jalview_datamodel_SequenceI$I$I(sequence, features.get$I(0).getBegin$(), features.get$I(0).getEnd$());
this.seqCanvas.highlightSearchResults$jalview_datamodel_SearchResultsI(highlight);
this.seqCanvas.getFeatureRenderer$().amendFeatures$java_util_List$java_util_List$Z$jalview_appletgui_AlignmentPanel($I$(11).singletonList$O(sequence), features, false, this.ap);
this.av.setSearchResults$jalview_datamodel_SearchResultsI(null);
this.seqCanvas.repaint$();
}}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
var didDrag=this.mouseDragging;
this.mouseDragging=false;
this.mouseWheelPressed=false;
if (!this.editingSeqs) {
this.doMouseReleasedDefineMode$java_awt_event_MouseEvent$Z(evt, didDrag);
return;
}this.endEditing$();
});

Clazz.newMeth(C$, 'findColumn$java_awt_event_MouseEvent', function (evt) {
var res=0;
var x=evt.getX$();
var startRes=this.av.getRanges$().getStartRes$();
if (this.av.getWrapAlignment$()) {
var hgap=this.av.getCharHeight$();
if (this.av.getScaleAboveWrapped$()) {
hgap+=this.av.getCharHeight$();
}var cHeight=this.av.getAlignment$().getHeight$() * this.av.getCharHeight$() + hgap + this.seqCanvas.getAnnotationHeight$();
var y=evt.getY$();
y-=hgap;
x=Math.max(0, x - this.seqCanvas.LABEL_WEST);
var cwidth=this.seqCanvas.getWrappedCanvasWidth$I(this.getSize$().width);
if (cwidth < 1) {
return 0;
}this.wrappedBlock=(y/cHeight|0);
this.wrappedBlock+=(startRes/cwidth|0);
var startOffset=startRes % cwidth;
res=this.wrappedBlock * cwidth + startOffset + +Math.min(cwidth - 1, (x/this.av.getCharWidth$()|0));
} else {
res=((x/this.av.getCharWidth$()|0)) + startRes;
}if (this.av.hasHiddenColumns$()) {
res=this.av.getAlignment$().getHiddenColumns$().visibleToAbsoluteColumn$I(res);
}return res;
});

Clazz.newMeth(C$, 'findSeq$java_awt_event_MouseEvent', function (evt) {
var sqnum=p$1.findAlRow$java_awt_event_MouseEvent.apply(this, [evt]);
return (sqnum < 0) ? 0 : sqnum;
});

Clazz.newMeth(C$, 'findAlRow$java_awt_event_MouseEvent', function (evt) {
var seq=0;
var y=evt.getY$();
if (this.av.getWrapAlignment$()) {
var hgap=this.av.getCharHeight$();
if (this.av.getScaleAboveWrapped$()) {
hgap+=this.av.getCharHeight$();
}var cHeight=this.av.getAlignment$().getHeight$() * this.av.getCharHeight$() + hgap + this.seqCanvas.getAnnotationHeight$();
y-=hgap;
seq=Math.min(((y % cHeight)/this.av.getCharHeight$()|0), this.av.getAlignment$().getHeight$() - 1);
if (seq < 0) {
seq=-1;
}} else {
seq=Math.min(((y/this.av.getCharHeight$()|0)) + this.av.getRanges$().getStartSeq$(), this.av.getAlignment$().getHeight$() - 1);
if (seq < 0) {
seq=-1;
}}return seq;
}, p$1);

Clazz.newMeth(C$, 'doMousePressed$java_awt_event_MouseEvent', function (evt) {
var seq=this.findSeq$java_awt_event_MouseEvent(evt);
var res=this.findColumn$java_awt_event_MouseEvent(evt);
if (seq < this.av.getAlignment$().getHeight$() && res < this.av.getAlignment$().getSequenceAt$I(seq).getLength$() ) {
this.startseq=seq;
this.lastres=res;
} else {
this.startseq=-1;
this.lastres=-1;
}return;
});

Clazz.newMeth(C$, 'mouseOverSequence$jalview_datamodel_SequenceI$I$I', function (sequence, index, pos) {
var tmp=sequence.hashCode$() + index + "" ;
if (this.lastMessage == null  || !this.lastMessage.equals$O(tmp) ) {
this.ssm.mouseOverSequence$jalview_datamodel_SequenceI$I$I$jalview_structure_VamsasSource(sequence, index, pos, this.av);
}this.lastMessage=tmp;
});

Clazz.newMeth(C$, 'highlightSequence$jalview_datamodel_SearchResultsI', function (results) {
if (this.av.isFollowHighlight$()) {
this.ap.setToScrollComplementPanel$Z(false);
if (this.ap.scrollToPosition$jalview_datamodel_SearchResultsI$Z(results, true)) {
this.ap.alignFrame.repaint$();
}this.ap.setToScrollComplementPanel$Z(true);
}p$1.setStatusMessage$jalview_datamodel_SearchResultsI.apply(this, [results]);
this.seqCanvas.highlightSearchResults$jalview_datamodel_SearchResultsI(results);
return null;
});

Clazz.newMeth(C$, 'getVamsasSource$', function () {
return this.ap == null  ? null : this.ap.av;
});

Clazz.newMeth(C$, 'updateColours$jalview_datamodel_SequenceI$I', function (seq, index) {
System.out.println$S("update the seqPanel colours");
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (evt) {
var column=this.findColumn$java_awt_event_MouseEvent(evt);
var seq=this.findSeq$java_awt_event_MouseEvent(evt);
if (seq >= this.av.getAlignment$().getHeight$() || seq < 0  || column < 0 ) {
if (this.tooltip != null ) {
this.tooltip.setTip$S("");
}return;
}var sequence=this.av.getAlignment$().getSequenceAt$I(seq);
if (column > sequence.getLength$()) {
if (this.tooltip != null ) {
this.tooltip.setTip$S("");
}return;
}var ch=sequence.getCharAt$I(column);
var isGapped=$I$(12).isGap$C(ch);
var respos=sequence.findPosition$I(column);
if (this.ssm != null  && !isGapped ) {
this.mouseOverSequence$jalview_datamodel_SequenceI$I$I(sequence, column, respos);
}var text=Clazz.new_($I$(7,1));
text.append$S("Sequence ").append$S(Integer.toString$I(seq + 1)).append$S(" ID: ").append$S(sequence.getName$());
if (!isGapped) {
if (this.av.getAlignment$().isNucleotide$()) {
var base=$I$(8).nucleotideName.get$O(new Character(ch));
text.append$S(" Nucleotide: ").append$O(base == null  ? new Character(ch) : base);
} else {
var residue=(ch == "x" || ch == "X" ) ? "X" : $I$(8).aa2Triplet.get$O(String.valueOf$C(ch));
text.append$S(" Residue: ").append$O(residue == null  ? new Character(ch) : residue);
}text.append$S(" (").append$S(Integer.toString$I(respos)).append$S(")");
}this.ap.alignFrame.statusBar.setText$S(text.toString());
var tooltipText=Clazz.new_($I$(7,1));
var groups=this.av.getAlignment$().findAllGroups$jalview_datamodel_SequenceI(sequence);
if (groups != null ) {
for (var g=0; g < groups.length; g++) {
if (groups[g].getStartRes$() <= column && groups[g].getEndRes$() >= column ) {
if (!groups[g].getName$().startsWith$S("JTreeGroup") && !groups[g].getName$().startsWith$S("JGroup") ) {
tooltipText.append$S(groups[g].getName$()).append$S(" ");
}if (groups[g].getDescription$() != null ) {
tooltipText.append$S(groups[g].getDescription$());
}tooltipText.append$S("\n");
}}
}if (this.av.isShowSequenceFeatures$()) {
var allFeatures=this.findFeaturesAtColumn$jalview_datamodel_SequenceI$I(sequence, column + 1);
for (var sf, $sf = allFeatures.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
tooltipText.append$S(sf.getType$() + " " + sf.begin + ":" + sf.end );
if (sf.getDescription$() != null ) {
tooltipText.append$S(" " + sf.getDescription$());
}if (sf.getValue$S("status") != null ) {
var status=sf.getValue$S("status").toString();
if (status.length$() > 0) {
tooltipText.append$S(" (" + sf.getValue$S("status") + ")" );
}}tooltipText.append$S("\n");
}
}if (this.tooltip == null ) {
this.tooltip=Clazz.new_([tooltipText.toString(), this.seqCanvas],$I$(13,1).c$$S$java_awt_Component);
} else {
this.tooltip.setTip$S(tooltipText.toString());
}});

Clazz.newMeth(C$, 'findFeaturesAtColumn$jalview_datamodel_SequenceI$I', function (sequence, column) {
return this.seqCanvas.getFeatureRenderer$().findFeaturesAtColumn$jalview_datamodel_SequenceI$I(sequence, column);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
if (this.mouseWheelPressed) {
var oldWidth=this.av.getCharWidth$();
if (Math.abs(evt.getY$() - this.lastMousePress.y) > Math.abs(evt.getX$() - this.lastMousePress.x)) {
var fontSize=this.av.font.getSize$();
if (evt.getY$() < this.lastMousePress.y && this.av.getCharHeight$() > 1 ) {
fontSize--;
} else if (evt.getY$() > this.lastMousePress.y) {
fontSize++;
}if (fontSize < 1) {
fontSize=1;
}this.av.setFont$java_awt_Font$Z(Clazz.new_([this.av.font.getName$(), this.av.font.getStyle$(), fontSize],$I$(14,1).c$$S$I$I), true);
this.av.setCharWidth$I(oldWidth);
} else {
if (evt.getX$() < this.lastMousePress.x && this.av.getCharWidth$() > 1 ) {
this.av.setCharWidth$I(this.av.getCharWidth$() - 1);
} else if (evt.getX$() > this.lastMousePress.x) {
this.av.setCharWidth$I(this.av.getCharWidth$() + 1);
}if (this.av.getCharWidth$() < 1) {
this.av.setCharWidth$I(1);
}}this.ap.fontChanged$();
var fm=this.getFontMetrics$java_awt_Font(this.av.getFont$());
this.av.validCharWidth=fm.charWidth$C("M") <= this.av.getCharWidth$();
this.lastMousePress=evt.getPoint$();
this.ap.paintAlignment$Z$Z(false, false);
this.ap.annotationPanel.image=null;
return;
}if (!this.editingSeqs) {
this.doMouseDraggedDefineMode$java_awt_event_MouseEvent(evt);
return;
}var res=this.findColumn$java_awt_event_MouseEvent(evt);
if (res < 0) {
res=0;
}if ((this.lastres == -1) || (this.lastres == res) ) {
return;
}if ((res < this.av.getAlignment$().getWidth$()) && (res < this.lastres) ) {
this.editSequence$Z$I(false, res);
} else {
this.editSequence$Z$I(true, res);
}this.mouseDragging=true;
if (this.scrollThread != null ) {
this.scrollThread.setEvent$java_awt_event_MouseEvent(evt);
}});

Clazz.newMeth(C$, 'editSequence$Z$I', function (insertGap, startres) {
var fixedLeft=-1;
var fixedRight=-1;
var fixedColumns=false;
var sg=this.av.getSelectionGroup$();
var seq=this.av.getAlignment$().getSequenceAt$I(this.startseq);
if (!this.groupEditing && this.av.hasHiddenRows$() ) {
if (this.av.isHiddenRepSequence$jalview_datamodel_SequenceI(seq)) {
sg=this.av.getRepresentedSequences$jalview_datamodel_SequenceI(seq);
this.groupEditing=true;
}}var message=Clazz.new_($I$(5,1));
if (this.groupEditing) {
message.append$S($I$(15).getString$S("action.edit_group")).append$S(":");
if (this.editCommand == null ) {
this.editCommand=Clazz.new_([$I$(15).getString$S("action.edit_group")],$I$(16,1).c$$S);
}} else {
message.append$S($I$(15).getString$S("label.edit_sequence")).append$S(" " + seq.getName$());
var label=seq.getName$();
if (label.length$() > 10) {
label=label.substring$I$I(0, 10);
}if (this.editCommand == null ) {
this.editCommand=Clazz.new_([$I$(15,"formatMessage$S$SA",["label.edit_params", Clazz.array(String, -1, [label])])],$I$(16,1).c$$S);
}}if (insertGap) {
message.append$S(" insert ");
} else {
message.append$S(" delete ");
}message.append$S(Math.abs(startres - this.lastres) + " gaps.");
this.ap.alignFrame.statusBar.setText$S(message.toString());
if (this.groupEditing || (sg != null  && sg.getSequences$java_util_Map(this.av.getHiddenRepSequences$()).contains$O(seq) ) ) {
fixedColumns=true;
if (sg == null ) {
if (!this.av.isHiddenRepSequence$jalview_datamodel_SequenceI(seq)) {
this.endEditing$();
return;
}sg=this.av.getRepresentedSequences$jalview_datamodel_SequenceI(seq);
}fixedLeft=sg.getStartRes$();
fixedRight=sg.getEndRes$();
if ((startres < fixedLeft && this.lastres >= fixedLeft ) || (startres >= fixedLeft && this.lastres < fixedLeft ) || (startres > fixedRight && this.lastres <= fixedRight ) || (startres <= fixedRight && this.lastres > fixedRight )  ) {
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
if ((insertGap && startres > y1  && this.lastres < y1 ) || (!insertGap && startres < y2  && this.lastres > y2 ) ) {
this.endEditing$();
return;
}if (fixedLeft < y1 && (fixedRight > y2 || fixedRight == -1 ) ) {
if (startres >= y2) {
fixedLeft=y2;
} else {
fixedRight=y2 - 1;
}}}if (this.groupEditing) {
var groupSeqs=sg.getSequences$java_util_Map(this.av.getHiddenRepSequences$()).toArray$OA(Clazz.array($I$(17), [0]));
if (insertGap) {
if (sg.getStartRes$() == 0 && sg.getEndRes$() == fixedRight  && sg.getEndRes$() == this.av.getAlignment$().getWidth$() - 1 ) {
sg.setEndRes$I(this.av.getAlignment$().getWidth$() + startres - this.lastres);
fixedRight=sg.getEndRes$();
}var blank=false;
for (; fixedRight > this.lastres; fixedRight--) {
blank=true;
for (var gs, $gs = 0, $$gs = groupSeqs; $gs<$$gs.length&&((gs=($$gs[$gs])),1);$gs++) {
for (var j=0; j < startres - this.lastres; j++) {
if (!$I$(12,"isGap$C",[gs.getCharAt$I(fixedRight - j)])) {
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
this.endEditing$();
return;
}var alWidth=this.av.getAlignment$().getWidth$();
if (this.av.hasHiddenRows$()) {
var hwidth=this.av.getAlignment$().getHiddenSequences$().getWidth$();
if (hwidth > alWidth) {
alWidth=hwidth;
}}sg.setEndRes$I(sg.getEndRes$() + startres - this.lastres);
fixedRight=alWidth + startres - this.lastres;
} else {
this.endEditing$();
return;
}}} else if (!insertGap) {
for (var gs, $gs = 0, $$gs = groupSeqs; $gs<$$gs.length&&((gs=($$gs[$gs])),1);$gs++) {
for (var j=startres; j < this.lastres; j++) {
if (gs.getLength$() <= j) {
continue;
}if (!$I$(12,"isGap$C",[gs.getCharAt$I(j)])) {
this.endEditing$();
return;
}}
}
}if (insertGap) {
if (fixedColumns && fixedRight != -1 ) {
for (var j=this.lastres; j < startres; j++) {
this.insertChar$I$jalview_datamodel_SequenceIA$I(j, groupSeqs, fixedRight);
}
} else {
this.editCommand.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z($I$(18).INSERT_GAP, groupSeqs, startres, startres - this.lastres, this.av.getAlignment$(), true);
}} else {
if (fixedColumns && fixedRight != -1 ) {
for (var j=this.lastres; j > startres; j--) {
this.deleteChar$I$jalview_datamodel_SequenceIA$I(startres, groupSeqs, fixedRight);
}
} else {
this.editCommand.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z($I$(18).DELETE_GAP, groupSeqs, startres, this.lastres - startres, this.av.getAlignment$(), true);
}}} else {
if (insertGap) {
if (fixedColumns && fixedRight != -1 ) {
for (var j=this.lastres; j < startres; j++) {
this.insertChar$I$jalview_datamodel_SequenceIA$I(j, Clazz.array($I$(17), -1, [seq]), fixedRight);
}
} else {
this.editCommand.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z($I$(18).INSERT_GAP, Clazz.array($I$(17), -1, [seq]), this.lastres, startres - this.lastres, this.av.getAlignment$(), true);
}} else {
if (fixedColumns && fixedRight != -1 ) {
for (var j=this.lastres; j > startres; j--) {
if (!$I$(12,"isGap$C",[seq.getCharAt$I(startres)])) {
this.endEditing$();
break;
}this.deleteChar$I$jalview_datamodel_SequenceIA$I(startres, Clazz.array($I$(17), -1, [seq]), fixedRight);
}
} else {
var max=0;
for (var m=startres; m < this.lastres; m++) {
if (!$I$(12,"isGap$C",[seq.getCharAt$I(m)])) {
break;
}max++;
}
if (max > 0) {
this.editCommand.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z($I$(18).DELETE_GAP, Clazz.array($I$(17), -1, [seq]), startres, max, this.av.getAlignment$(), true);
}}}}this.lastres=startres;
this.seqCanvas.repaint$();
});

Clazz.newMeth(C$, 'insertChar$I$jalview_datamodel_SequenceIA$I', function (j, seq, fixedColumn) {
var blankColumn=fixedColumn;
for (var s=0; s < seq.length; s++) {
for (blankColumn=fixedColumn; blankColumn > j; blankColumn--) {
if ($I$(12,"isGap$C",[seq[s].getCharAt$I(blankColumn)])) {
break;
}}
if (blankColumn <= j) {
blankColumn=fixedColumn;
this.endEditing$();
return;
}}
this.editCommand.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z($I$(18).DELETE_GAP, seq, blankColumn, 1, this.av.getAlignment$(), true);
this.editCommand.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z($I$(18).INSERT_GAP, seq, j, 1, this.av.getAlignment$(), true);
});

Clazz.newMeth(C$, 'deleteChar$I$jalview_datamodel_SequenceIA$I', function (j, seq, fixedColumn) {
this.editCommand.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z($I$(18).DELETE_GAP, seq, j, 1, this.av.getAlignment$(), true);
this.editCommand.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z($I$(18).INSERT_GAP, seq, fixedColumn, 1, this.av.getAlignment$(), true);
});

Clazz.newMeth(C$, 'doMousePressedDefineMode$java_awt_event_MouseEvent', function (evt) {
if (this.scrollThread != null ) {
this.scrollThread.threadRunning=false;
this.scrollThread=null;
}var column=this.findColumn$java_awt_event_MouseEvent(evt);
var seq=this.findSeq$java_awt_event_MouseEvent(evt);
this.oldSeq=seq;
this.startWrapBlock=this.wrappedBlock;
if (seq == -1) {
return;
}var sequence=this.av.getAlignment$().getSequenceAt$I(seq);
if (sequence == null  || column > sequence.getLength$() ) {
return;
}this.stretchGroup=this.av.getSelectionGroup$();
if (this.stretchGroup == null  || !this.stretchGroup.contains$jalview_datamodel_SequenceI$I(sequence, column) ) {
this.stretchGroup=this.av.getAlignment$().findGroup$jalview_datamodel_SequenceI$I(sequence, column);
if (this.stretchGroup != null ) {
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(this.stretchGroup);
}}if ((evt.getModifiersEx$() & 4096) == 4096) {
var allFeatures=this.findFeaturesAtColumn$jalview_datamodel_SequenceI$I(sequence, sequence.findPosition$I(column + 1));
var links=null;
for (var sf, $sf = allFeatures.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if (sf.links != null ) {
if (links == null ) {
links=Clazz.new_($I$(19,1));
}links.addAll$java_util_Collection(sf.links);
}}
var popup=Clazz.new_($I$(20,1).c$$jalview_appletgui_AlignmentPanel$jalview_datamodel_SequenceI$java_util_List,[this.ap, null, links]);
this.add$java_awt_PopupMenu(popup);
popup.show$java_awt_Component$I$I(this, evt.getX$(), evt.getY$());
return;
}if (this.av.cursorMode) {
this.seqCanvas.cursorX=this.findColumn$java_awt_event_MouseEvent(evt);
this.seqCanvas.cursorY=this.findSeq$java_awt_event_MouseEvent(evt);
this.seqCanvas.repaint$();
return;
}if (this.stretchGroup == null ) {
var sg=Clazz.new_($I$(6,1));
sg.setStartRes$I(column);
sg.setEndRes$I(column);
sg.addSequence$jalview_datamodel_SequenceI$Z(sequence, false);
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(sg);
this.stretchGroup=sg;
if (this.av.getConservationSelected$()) {
$I$(21,"setConservationSlider$jalview_appletgui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.ap, this.av.getResidueShading$(), this.ap.getViewName$()]);
}if (this.av.getAbovePIDThreshold$()) {
$I$(21,"setPIDSliderSource$jalview_appletgui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.ap, this.av.getResidueShading$(), this.ap.getViewName$()]);
}}});

Clazz.newMeth(C$, 'doMouseReleasedDefineMode$java_awt_event_MouseEvent$Z', function (evt, afterDrag) {
if (this.stretchGroup == null ) {
return;
}var vischange=this.stretchGroup.recalcConservation$Z(true);
this.needOverviewUpdate|=vischange && this.av.isSelectionDefinedGroup$() && afterDrag  ;
if (this.stretchGroup.cs != null ) {
this.stretchGroup.cs.alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map(this.stretchGroup, this.av.getHiddenRepSequences$());
if (this.stretchGroup.cs.conservationApplied$()) {
$I$(21,"setConservationSlider$jalview_appletgui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.ap, this.stretchGroup.cs, this.stretchGroup.getName$()]);
}if (this.stretchGroup.cs.getThreshold$() > 0) {
$I$(21,"setPIDSliderSource$jalview_appletgui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.ap, this.stretchGroup.cs, this.stretchGroup.getName$()]);
}}$I$(22,"Refresh$java_awt_Component$S",[this.ap, this.av.getSequenceSetId$()]);
this.ap.paintAlignment$Z$Z(this.needOverviewUpdate, this.needOverviewUpdate);
this.needOverviewUpdate=false;
this.changeEndRes=false;
this.changeStartRes=false;
this.stretchGroup=null;
this.av.sendSelection$();
});

Clazz.newMeth(C$, 'doMouseDraggedDefineMode$java_awt_event_MouseEvent', function (evt) {
var res=this.findColumn$java_awt_event_MouseEvent(evt);
var y=this.findSeq$java_awt_event_MouseEvent(evt);
if (this.wrappedBlock != this.startWrapBlock) {
return;
}if (this.stretchGroup == null ) {
return;
}this.mouseDragging=true;
if (y > this.av.getAlignment$().getHeight$()) {
y=this.av.getAlignment$().getHeight$() - 1;
}if (res >= this.av.getAlignment$().getWidth$()) {
res=this.av.getAlignment$().getWidth$() - 1;
}if (this.stretchGroup.getEndRes$() == res) {
this.changeEndRes=true;
} else if (this.stretchGroup.getStartRes$() == res) {
this.changeStartRes=true;
}if (res < 0) {
res=0;
}if (this.changeEndRes) {
if (res > (this.stretchGroup.getStartRes$() - 1)) {
this.stretchGroup.setEndRes$I(res);
this.needOverviewUpdate|=this.av.isSelectionDefinedGroup$();
}} else if (this.changeStartRes) {
if (res < (this.stretchGroup.getEndRes$() + 1)) {
this.stretchGroup.setStartRes$I(res);
this.needOverviewUpdate|=this.av.isSelectionDefinedGroup$();
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
this.needOverviewUpdate|=this.av.isSelectionDefinedGroup$();
} else {
if (seq != null ) {
this.stretchGroup.addSequence$jalview_datamodel_SequenceI$Z(seq, false);
}this.stretchGroup.addSequence$jalview_datamodel_SequenceI$Z(nextSeq, false);
this.needOverviewUpdate|=this.av.isSelectionDefinedGroup$();
}}
if (this.oldSeq < 0) {
this.oldSeq=-1;
}if (res > this.av.getRanges$().getEndRes$() || res < this.av.getRanges$().getStartRes$()  || y < this.av.getRanges$().getStartSeq$()  || y > this.av.getRanges$().getEndSeq$() ) {
this.mouseExited$java_awt_event_MouseEvent(evt);
}if ((this.scrollThread != null ) && (this.scrollThread.isRunning$()) ) {
this.scrollThread.setEvent$java_awt_event_MouseEvent(evt);
}this.seqCanvas.repaint$();
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
if (this.oldSeq < 0) {
this.oldSeq=0;
}if ((this.scrollThread != null ) && (this.scrollThread.isRunning$()) ) {
this.scrollThread.stopScrolling$();
this.scrollThread=null;
}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
if (this.av.getWrapAlignment$()) {
return;
}if (this.mouseDragging && this.scrollThread == null  ) {
this.scrollThread=Clazz.new_($I$(23,1),[this, null]);
}});

Clazz.newMeth(C$, 'scrollCanvas$java_awt_event_MouseEvent', function (evt) {
if (evt == null ) {
if ((this.scrollThread != null ) && (this.scrollThread.isRunning$()) ) {
this.scrollThread.stopScrolling$();
this.scrollThread=null;
}this.mouseDragging=false;
} else {
if (this.scrollThread == null ) {
this.scrollThread=Clazz.new_($I$(23,1),[this, null]);
}this.mouseDragging=true;
this.scrollThread.setEvent$java_awt_event_MouseEvent(evt);
}});

Clazz.newMeth(C$, 'selection$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource', function (seqsel, colsel, hidden, source) {
if (this.av != null  && (this.av === source  || !this.av.followSelection  || (Clazz.instanceOf(source, "jalview.appletgui.AlignViewport") && (source).getSequenceSetId$().equals$O(this.av.getSequenceSetId$()) ) ) ) {
return;
}if (this.selectionFromTranslation$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource(seqsel, colsel, hidden, source)) {
return;
}var repaint=false;
var copycolsel=false;
if (this.av.getSelectionGroup$() == null  || !this.av.isSelectionGroupChanged$Z(true) ) {
var sgroup=null;
if (seqsel != null  && seqsel.getSize$() > 0 ) {
if (this.av.getAlignment$() == null ) {
System.out.println$S("Selection message: alignviewport av SeqSetId=" + this.av.getSequenceSetId$() + " ViewId=" + this.av.getViewId$() + " 's alignment is NULL! returning immediatly." );
return;
}sgroup=seqsel.intersect$jalview_datamodel_AlignmentI$java_util_Map(this.av.getAlignment$(), (this.av.hasHiddenRows$()) ? this.av.getHiddenRepSequences$() : null);
if ((sgroup != null  && sgroup.getSize$() > 0 )) {
copycolsel=true;
}}if (sgroup != null  && sgroup.getSize$() > 0 ) {
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(sgroup);
} else {
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
}repaint=this.av.isSelectionGroupChanged$Z(true);
}if (copycolsel && (this.av.getColumnSelection$() == null  || !this.av.isColSelChanged$Z(true) ) ) {
if (colsel == null  || colsel.isEmpty$() ) {
if (this.av.getColumnSelection$() != null ) {
this.av.getColumnSelection$().clear$();
}} else {
if (this.av.getColumnSelection$() == null ) {
this.av.setColumnSelection$jalview_datamodel_ColumnSelection(Clazz.new_($I$(24,1).c$$jalview_datamodel_ColumnSelection,[colsel]));
} else {
this.av.getColumnSelection$().setElementsFrom$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns(colsel, this.av.getAlignment$().getHiddenColumns$());
}}repaint|=this.av.isColSelChanged$Z(true);
}if (copycolsel && this.av.hasHiddenColumns$() && (this.av.getColumnSelection$() == null )  ) {
System.err.println$S("Bad things");
}if (repaint) {
this.ap.scalePanelHolder.repaint$();
this.ap.repaint$();
}});

Clazz.newMeth(C$, 'scrollTo$I$I', function (row, column) {
row=row < 0 ? this.ap.av.getRanges$().getStartSeq$() : row;
column=column < 0 ? this.ap.av.getRanges$().getStartRes$() : column;
this.ap.scrollTo$I$I$I$Z$Z(column, column, row, true, true);
});

Clazz.newMeth(C$, 'scrollToRow$I', function (row) {
row=row < 0 ? this.ap.av.getRanges$().getStartSeq$() : row;
this.ap.scrollTo$I$I$I$Z$Z(this.ap.av.getRanges$().getStartRes$(), this.ap.av.getRanges$().getStartRes$(), row, true, true);
});

Clazz.newMeth(C$, 'scrollToColumn$I', function (column) {
column=column < 0 ? this.ap.av.getRanges$().getStartRes$() : column;
this.ap.scrollTo$I$I$I$Z$Z(column, column, this.ap.av.getRanges$().getStartSeq$(), true, true);
});

Clazz.newMeth(C$, 'selectionFromTranslation$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource', function (seqsel, colsel, hidden, source) {
if (!(Clazz.instanceOf(source, "jalview.api.AlignViewportI"))) {
return false;
}var sourceAv=source;
if (sourceAv.getCodingComplement$() !== this.av  && this.av.getCodingComplement$() !== sourceAv  ) {
return false;
}var sg=$I$(25).mapSequenceGroup$jalview_datamodel_SequenceGroup$jalview_api_AlignViewportI$jalview_api_AlignViewportI(seqsel, sourceAv, this.av);
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(sg);
this.av.isSelectionGroupChanged$Z(true);
var cs=Clazz.new_($I$(24,1));
var hs=Clazz.new_($I$(26,1));
$I$(25).mapColumnSelection$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_api_AlignViewportI$jalview_api_AlignViewportI$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns(colsel, hidden, sourceAv, this.av, cs, hs);
this.av.setColumnSelection$jalview_datamodel_ColumnSelection(cs);
this.av.getAlignment$().setHiddenColumns$jalview_datamodel_HiddenColumns(hs);
this.ap.scalePanelHolder.repaint$();
this.ap.repaint$();
return true;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.SeqPanel, "ScrollThread", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.threadRunning=true;
},1);

C$.$fields$=[['Z',['threadRunning'],'O',['evt','java.awt.event.MouseEvent']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.start$();
}, 1);

Clazz.newMeth(C$, 'setEvent$java_awt_event_MouseEvent', function (e) {
this.evt=e;
});

Clazz.newMeth(C$, 'stopScrolling$', function () {
this.threadRunning=false;
});

Clazz.newMeth(C$, 'isRunning$', function () {
return this.threadRunning;
});

Clazz.newMeth(C$, 'run$', function () {
while (this.threadRunning){
if (this.evt != null ) {
if (this.this$0.mouseDragging && this.evt.getY$() < 0  && this.this$0.av.getRanges$().getStartSeq$() > 0 ) {
this.this$0.av.getRanges$().scrollUp$Z(true);
}if (this.this$0.mouseDragging && this.evt.getY$() >= this.b$['java.awt.Component'].getSize$.apply(this.b$['java.awt.Component'], []).height  && this.this$0.av.getAlignment$().getHeight$() > this.this$0.av.getRanges$().getEndSeq$() ) {
this.this$0.av.getRanges$().scrollUp$Z(false);
}if (this.this$0.mouseDragging && this.evt.getX$() < 0 ) {
this.this$0.av.getRanges$().scrollRight$Z(false);
} else if (this.this$0.mouseDragging && this.evt.getX$() >= this.b$['java.awt.Component'].getSize$.apply(this.b$['java.awt.Component'], []).width ) {
this.this$0.av.getRanges$().scrollRight$Z(true);
}}try {
$I$(1).sleep$J(75);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:45 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
