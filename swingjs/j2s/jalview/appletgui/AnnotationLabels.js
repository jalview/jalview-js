(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'jalview.datamodel.AlignmentAnnotation','jalview.datamodel.Annotation','jalview.appletgui.CutAndPasteTransfer','java.awt.Frame','jalview.bin.JalviewLite','java.awt.Checkbox','jalview.appletgui.EditNameDialog','java.awt.Panel','java.awt.FlowLayout','java.awt.Cursor','jalview.util.ParseHtmlBodyAndLinks','jalview.appletgui.Tooltip','java.awt.Dimension','java.awt.PopupMenu','jalview.util.MessageManager','java.awt.MenuItem','jalview.analysis.AlignmentUtils','java.util.Collections','java.awt.CheckboxMenuItem','jalview.util.Platform','jalview.datamodel.SequenceGroup','jalview.appletgui.PaintRefresher','java.util.Arrays','jalview.datamodel.SequenceI','jalview.appletgui.AlignFrame','StringBuffer','jalview.datamodel.HiddenColumns','java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AnnotationLabels", null, 'java.awt.Panel', ['java.awt.event.ActionListener', 'java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);
C$.HEIGHT_ADJUSTER_HEIGHT=0;
C$.ADDNEW=null;
C$.EDITNAME=null;
C$.HIDE=null;
C$.SHOWALL=null;
C$.OUTPUT_TEXT=null;
C$.COPYCONS_SEQ=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.HEIGHT_ADJUSTER_HEIGHT=10;
C$.ADDNEW="Add New Row";
C$.EDITNAME="Edit Label/Description";
C$.HIDE="Hide This Row";
C$.SHOWALL="Show All Hidden Rows";
C$.OUTPUT_TEXT="Show Values In Textbox";
C$.COPYCONS_SEQ="Copy Consensus Sequence";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.image=null;
this.active=false;
this.ap=null;
this.av=null;
this.resizing=false;
this.oldY=0;
this.mouseX=0;
this.scrollOffset=0;
this.selectedRow=0;
this.tooltip=null;
this.hasHiddenRows=false;
this.resizePanel=false;
this.dragEvent=null;
this.dragCancelled=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.active=false;
this.resizing=false;
this.scrollOffset=0;
this.selectedRow=-1;
this.resizePanel=false;
this.dragEvent=null;
this.dragCancelled=false;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel', function (ap) {
Clazz.super_(C$, this,1);
this.ap=ap;
this.av=ap.av;
this.setLayout$java_awt_LayoutManager(null);
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignViewport', function (av) {
Clazz.super_(C$, this,1);
this.av=av;
}, 1);

Clazz.newMeth(C$, 'setScrollOffset$I$Z', function (y, repaint) {
this.scrollOffset=y;
if (repaint) {
this.repaint$();
}});

Clazz.newMeth(C$, 'getSelectedRow$I', function (y) {
var row=-2;
var aa=this.ap.av.getAlignment$().getAlignmentAnnotation$();
if (aa == null ) {
return row;
}var height=0;
for (var i=0; i < aa.length; i++) {
row=-1;
if (!aa[i].visible) {
continue;
}height+=aa[i].height;
if (y < height) {
row=i;
break;
}}
return row;
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (evt) {
var aa=this.av.getAlignment$().getAlignmentAnnotation$();
if (evt.getActionCommand$().equals$O(C$.ADDNEW)) {
var newAnnotation=Clazz.new_($I$(1).c$$S$S$jalview_datamodel_AnnotationA,["", null, Clazz.array($I$(2), [this.ap.av.getAlignment$().getWidth$()])]);
if (!this.editLabelDescription$jalview_datamodel_AlignmentAnnotation(newAnnotation)) {
return;
}this.ap.av.getAlignment$().addAnnotation$jalview_datamodel_AlignmentAnnotation(newAnnotation);
this.ap.av.getAlignment$().setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I(newAnnotation, 0);
} else if (evt.getActionCommand$().equals$O(C$.EDITNAME)) {
this.editLabelDescription$jalview_datamodel_AlignmentAnnotation(aa[this.selectedRow]);
} else if (evt.getActionCommand$().equals$O(C$.HIDE)) {
aa[this.selectedRow].visible=false;
} else if (evt.getActionCommand$().equals$O(C$.SHOWALL)) {
for (var i=0; i < aa.length; i++) {
aa[i].visible=(aa[i].annotations == null ) ? false : true;
}
} else if (evt.getActionCommand$().equals$O(C$.OUTPUT_TEXT)) {
var cap=Clazz.new_($I$(3).c$$Z$jalview_appletgui_AlignFrame,[false, this.ap.alignFrame]);
var frame=Clazz.new_($I$(4));
frame.add$java_awt_Component(cap);
$I$(5).addFrame$java_awt_Frame$S$I$I(frame, this.ap.alignFrame.getTitle$() + " - " + aa[this.selectedRow].label , 500, 100);
cap.setText$S(aa[this.selectedRow].toString());
} else if (evt.getActionCommand$().equals$O(C$.COPYCONS_SEQ)) {
var group=aa[this.selectedRow].groupRef;
var cons=group == null  ? this.av.getConsensusSeq$() : group.getConsensusSeq$();
if (cons != null ) {
this.copy_annotseqtoclipboard$jalview_datamodel_SequenceI(cons);
}}this.refresh$();
});

Clazz.newMeth(C$, 'refresh$', function () {
this.ap.annotationPanel.adjustPanelHeight$();
this.setSize$I$I(this.getSize$().width, this.ap.annotationPanel.getSize$().height);
this.ap.validate$();
this.ap.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'editLabelDescription$jalview_datamodel_AlignmentAnnotation', function (annotation) {
var padGaps=Clazz.new_($I$(6).c$$S$Z,["Fill Empty Gaps With \"" + this.ap.av.getGapCharacter$() + "\"" , annotation.padGaps]);
var dialog=Clazz.new_($I$(7).c$$S$S$S$S$java_awt_Frame$S$I$I$Z,[annotation.label, annotation.description, "      Annotation Label", "Annotation Description", this.ap.alignFrame, "Edit Annotation Name / Description", 500, 180, false]);
var empty=Clazz.new_($I$(8).c$$java_awt_LayoutManager,[Clazz.new_($I$(9))]);
empty.add$java_awt_Component(padGaps);
dialog.add$java_awt_Component(empty);
dialog.pack$();
dialog.setVisible$Z(true);
if (dialog.accept) {
annotation.label=dialog.getName$();
annotation.description=dialog.getDescription$();
annotation.setPadGaps$Z$C(padGaps.getState$(), this.av.getGapCharacter$());
this.repaint$();
return true;
} else {
return false;
}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (evt) {
this.resizePanel=evt.getY$() < C$.HEIGHT_ADJUSTER_HEIGHT && evt.getX$() < 50 ;
this.setCursor$java_awt_Cursor($I$(10).getPredefinedCursor$I(this.resizePanel ? 9 : 0));
var row=this.getSelectedRow$I(evt.getY$() + this.scrollOffset);
if (row > -1) {
var phb=Clazz.new_($I$(11).c$$S$Z$S,[this.av.getAlignment$().getAlignmentAnnotation$()[row].getDescription$Z(true), true, "\n"]);
if (this.tooltip == null ) {
this.tooltip=Clazz.new_($I$(12).c$$S$java_awt_Component,[phb.getNonHtmlContent$(), this]);
} else {
this.tooltip.setTip$S(phb.getNonHtmlContent$());
}} else if (this.tooltip != null ) {
this.tooltip.setTip$S("");
}});

Clazz.newMeth(C$, 'cancelDrag$', function () {
this.dragEvent=null;
this.dragCancelled=true;
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
if (this.dragCancelled) {
return;
};this.dragEvent=evt;
if (this.resizePanel) {
var d=this.ap.annotationPanelHolder.getSize$();
var e=this.ap.annotationSpaceFillerHolder.getSize$();
var f=this.ap.seqPanelHolder.getSize$();
var dif=evt.getY$() - this.oldY;
dif=(dif/(this.ap.av.getCharHeight$())|0);
dif*=this.ap.av.getCharHeight$();
if ((d.height - dif) > 20 && (f.height + dif) > 20 ) {
this.ap.annotationPanel.setSize$I$I(d.width, d.height - dif);
this.setSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[e.width, d.height - dif]));
this.ap.annotationSpaceFillerHolder.setSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[e.width, d.height - dif]));
this.ap.annotationPanelHolder.setSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[d.width, d.height - dif]));
this.ap.apvscroll.setValues$I$I$I$I(this.ap.apvscroll.getValue$(), d.height - dif, 0, this.av.calcPanelHeight$());
f.height+=dif;
this.ap.seqPanelHolder.setPreferredSize$java_awt_Dimension(f);
this.ap.setScrollValues$I$I(this.av.getRanges$().getStartRes$(), this.av.getRanges$().getStartSeq$());
this.ap.validate$();
this.ap.addNotify$();
}} else {
var diff;
if ((diff=6 - evt.getY$()) > 0) {
this.ap.apvscroll.setValue$I(this.ap.apvscroll.getValue$() - diff);
this.ap.adjustmentValueChanged$java_awt_event_AdjustmentEvent(null);
} else if ((0 < (diff=6 - this.ap.annotationSpaceFillerHolder.getSize$().height + evt.getY$()))) {
this.ap.apvscroll.setValue$I(this.ap.apvscroll.getValue$() + diff);
this.ap.adjustmentValueChanged$java_awt_event_AdjustmentEvent(null);
}this.repaint$();
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
if (!this.resizePanel && !this.dragCancelled ) {
var start=this.selectedRow;
var end=this.getSelectedRow$I(evt.getY$() + this.scrollOffset);
if (start > -1 && start != end ) {
var startAA=this.ap.av.getAlignment$().getAlignmentAnnotation$()[start];
if (end == -1) {
end=this.ap.av.getAlignment$().getAlignmentAnnotation$().length - 1;
}var endAA=this.ap.av.getAlignment$().getAlignmentAnnotation$()[end];
this.ap.av.getAlignment$().getAlignmentAnnotation$()[end]=startAA;
this.ap.av.getAlignment$().getAlignmentAnnotation$()[start]=endAA;
}}this.resizePanel=false;
this.dragEvent=null;
this.dragCancelled=false;
this.setCursor$java_awt_Cursor($I$(10).getPredefinedCursor$I(0));
this.repaint$();
this.ap.annotationPanel.repaint$();
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (evt) {
if (evt.getY$() < 10 && evt.getX$() < 14 ) {
this.resizePanel=true;
this.repaint$();
}this.setCursor$java_awt_Cursor($I$(10).getPredefinedCursor$I(this.resizePanel ? 9 : 0));
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (evt) {
this.dragCancelled=false;
if (this.dragEvent == null ) {
this.resizePanel=false;
} else {
if (!this.resizePanel) {
this.dragEvent=null;
}}this.repaint$();
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
this.oldY=evt.getY$();
if (this.resizePanel) {
return;
}this.dragCancelled=false;
this.selectedRow=this.getSelectedRow$I(evt.getY$() + this.scrollOffset);
var aa=this.ap.av.getAlignment$().getAlignmentAnnotation$();
if ((evt.getModifiers$() & 4) == 4) {
var popup=Clazz.new_($I$(14).c$$S,[$I$(15).getString$S("label.annotations")]);
var item=Clazz.new_($I$(16).c$$S,[C$.ADDNEW]);
item.addActionListener$java_awt_event_ActionListener(this);
popup.add$java_awt_MenuItem(item);
if (this.selectedRow < 0) {
if (this.hasHiddenRows) {
item=Clazz.new_($I$(16).c$$S,[C$.SHOWALL]);
item.addActionListener$java_awt_event_ActionListener(this);
popup.add$java_awt_MenuItem(item);
}this.add$java_awt_PopupMenu(popup);
popup.show$java_awt_Component$I$I(this, evt.getX$(), evt.getY$());
return;
}item=Clazz.new_($I$(16).c$$S,[C$.EDITNAME]);
item.addActionListener$java_awt_event_ActionListener(this);
popup.add$java_awt_MenuItem(item);
item=Clazz.new_($I$(16).c$$S,[C$.HIDE]);
item.addActionListener$java_awt_event_ActionListener(this);
popup.add$java_awt_MenuItem(item);
if (this.selectedRow < aa.length) {
if (aa[this.selectedRow].sequenceRef != null ) {
var label=aa[this.selectedRow].label;
var hideType=Clazz.new_($I$(16).c$$S,[$I$(15).getString$S("label.hide_all") + " " + label ]);
hideType.addActionListener$java_awt_event_ActionListener(((P$.AnnotationLabels$1||
(function(){var C$=Clazz.newClass(P$, "AnnotationLabels$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
$I$(17).showOrHideSequenceAnnotations$jalview_datamodel_AlignmentI$java_util_Collection$java_util_List$Z$Z(this.b$['jalview.appletgui.AnnotationLabels'].ap.av.getAlignment$(), $I$(18).singleton$TT(this.$finals$.label), null, false, false);
this.b$['jalview.appletgui.AnnotationLabels'].refresh$.apply(this.b$['jalview.appletgui.AnnotationLabels'], []);
});
})()
), Clazz.new_(P$.AnnotationLabels$1.$init$, [this, {label: label}])));
popup.add$java_awt_MenuItem(hideType);
}}if (this.hasHiddenRows) {
item=Clazz.new_($I$(16).c$$S,[C$.SHOWALL]);
item.addActionListener$java_awt_event_ActionListener(this);
popup.add$java_awt_MenuItem(item);
}this.add$java_awt_PopupMenu(popup);
item=Clazz.new_($I$(16).c$$S,[C$.OUTPUT_TEXT]);
item.addActionListener$java_awt_event_ActionListener(this);
popup.add$java_awt_MenuItem(item);
if (this.selectedRow < aa.length) {
if (aa[this.selectedRow].autoCalculated) {
if (aa[this.selectedRow].label.indexOf$S("Consensus") > -1) {
popup.addSeparator$();
var cbmi=Clazz.new_($I$(19).c$$S$Z,[$I$(15).getString$S("label.ignore_gaps_consensus"), (aa[this.selectedRow].groupRef != null ) ? aa[this.selectedRow].groupRef.getIgnoreGapsConsensus$() : this.ap.av.isIgnoreGapsConsensus$()]);
var aaa=aa[this.selectedRow];
cbmi.addItemListener$java_awt_event_ItemListener(((P$.AnnotationLabels$2||
(function(){var C$=Clazz.newClass(P$, "AnnotationLabels$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
if (this.$finals$.aaa.groupRef != null ) {
this.$finals$.aaa.groupRef.setIgnoreGapsConsensus$Z(this.$finals$.cbmi.getState$());
} else {
this.b$['jalview.appletgui.AnnotationLabels'].ap.av.setIgnoreGapsConsensus$Z$jalview_api_AlignmentViewPanel(this.$finals$.cbmi.getState$(), this.b$['jalview.appletgui.AnnotationLabels'].ap);
}this.b$['jalview.appletgui.AnnotationLabels'].ap.paintAlignment$Z$Z(true, true);
});
})()
), Clazz.new_(P$.AnnotationLabels$2.$init$, [this, {aaa: aaa, cbmi: cbmi}])));
popup.add$java_awt_MenuItem(cbmi);
if (aaa.groupRef != null ) {
var chist=Clazz.new_($I$(19).c$$S$Z,[$I$(15).getString$S("label.show_group_histogram"), aa[this.selectedRow].groupRef.isShowConsensusHistogram$()]);
chist.addItemListener$java_awt_event_ItemListener(((P$.AnnotationLabels$3||
(function(){var C$=Clazz.newClass(P$, "AnnotationLabels$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
this.$finals$.aaa.groupRef.setShowConsensusHistogram$Z(this.$finals$.chist.getState$());
this.b$['jalview.appletgui.AnnotationLabels'].ap.repaint$();
});
})()
), Clazz.new_(P$.AnnotationLabels$3.$init$, [this, {aaa: aaa, chist: chist}])));
popup.add$java_awt_MenuItem(chist);
var cprofl=Clazz.new_($I$(19).c$$S$Z,[$I$(15).getString$S("label.show_group_logo"), aa[this.selectedRow].groupRef.isShowSequenceLogo$()]);
cprofl.addItemListener$java_awt_event_ItemListener(((P$.AnnotationLabels$4||
(function(){var C$=Clazz.newClass(P$, "AnnotationLabels$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
this.$finals$.aaa.groupRef.setshowSequenceLogo$Z(this.$finals$.cprofl.getState$());
this.b$['jalview.appletgui.AnnotationLabels'].ap.repaint$();
});
})()
), Clazz.new_(P$.AnnotationLabels$4.$init$, [this, {aaa: aaa, cprofl: cprofl}])));
popup.add$java_awt_MenuItem(cprofl);
var cprofn=Clazz.new_($I$(19).c$$S$Z,[$I$(15).getString$S("label.normalise_group_logo"), aa[this.selectedRow].groupRef.isNormaliseSequenceLogo$()]);
cprofn.addItemListener$java_awt_event_ItemListener(((P$.AnnotationLabels$5||
(function(){var C$=Clazz.newClass(P$, "AnnotationLabels$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
this.$finals$.aaa.groupRef.setshowSequenceLogo$Z(true);
this.$finals$.aaa.groupRef.setNormaliseSequenceLogo$Z(this.$finals$.cprofn.getState$());
this.b$['jalview.appletgui.AnnotationLabels'].ap.repaint$();
});
})()
), Clazz.new_(P$.AnnotationLabels$5.$init$, [this, {aaa: aaa, cprofn: cprofn}])));
popup.add$java_awt_MenuItem(cprofn);
} else {
var chist=Clazz.new_($I$(19).c$$S$Z,[$I$(15).getString$S("label.show_histogram"), this.av.isShowConsensusHistogram$()]);
chist.addItemListener$java_awt_event_ItemListener(((P$.AnnotationLabels$6||
(function(){var C$=Clazz.newClass(P$, "AnnotationLabels$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
this.b$['jalview.appletgui.AnnotationLabels'].av.setShowConsensusHistogram$Z(this.$finals$.chist.getState$());
this.b$['jalview.appletgui.AnnotationLabels'].ap.alignFrame.showConsensusHistogram.setState$Z(this.$finals$.chist.getState$());
this.b$['jalview.appletgui.AnnotationLabels'].ap.repaint$();
});
})()
), Clazz.new_(P$.AnnotationLabels$6.$init$, [this, {chist: chist}])));
popup.add$java_awt_MenuItem(chist);
var cprof=Clazz.new_($I$(19).c$$S$Z,[$I$(15).getString$S("label.show_logo"), this.av.isShowSequenceLogo$()]);
cprof.addItemListener$java_awt_event_ItemListener(((P$.AnnotationLabels$7||
(function(){var C$=Clazz.newClass(P$, "AnnotationLabels$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
this.b$['jalview.appletgui.AnnotationLabels'].av.setShowSequenceLogo$Z(this.$finals$.cprof.getState$());
this.b$['jalview.appletgui.AnnotationLabels'].ap.alignFrame.showSequenceLogo.setState$Z(this.$finals$.cprof.getState$());
this.b$['jalview.appletgui.AnnotationLabels'].ap.repaint$();
});
})()
), Clazz.new_(P$.AnnotationLabels$7.$init$, [this, {cprof: cprof}])));
popup.add$java_awt_MenuItem(cprof);
var cprofn=Clazz.new_($I$(19).c$$S$Z,[$I$(15).getString$S("label.normalise_logo"), this.av.isNormaliseSequenceLogo$()]);
cprofn.addItemListener$java_awt_event_ItemListener(((P$.AnnotationLabels$8||
(function(){var C$=Clazz.newClass(P$, "AnnotationLabels$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
this.b$['jalview.appletgui.AnnotationLabels'].av.setShowSequenceLogo$Z(true);
this.b$['jalview.appletgui.AnnotationLabels'].ap.alignFrame.normSequenceLogo.setState$Z(this.$finals$.cprofn.getState$());
this.b$['jalview.appletgui.AnnotationLabels'].av.setNormaliseSequenceLogo$Z(this.$finals$.cprofn.getState$());
this.b$['jalview.appletgui.AnnotationLabels'].ap.repaint$();
});
})()
), Clazz.new_(P$.AnnotationLabels$8.$init$, [this, {cprofn: cprofn}])));
popup.add$java_awt_MenuItem(cprofn);
}item=Clazz.new_($I$(16).c$$S,[C$.COPYCONS_SEQ]);
item.addActionListener$java_awt_event_ActionListener(this);
popup.add$java_awt_MenuItem(item);
}}}popup.show$java_awt_Component$I$I(this, evt.getX$(), evt.getY$());
} else {
if (this.selectedRow > -1 && this.selectedRow < aa.length ) {
if (aa[this.selectedRow].groupRef != null ) {
if (evt.getClickCount$() >= 2) {
this.ap.seqPanel.ap.idPanel.highlightSearchResults$java_util_List(null);
var sg=this.ap.av.getSelectionGroup$();
if (sg == null  || sg === aa[this.selectedRow].groupRef   || !($I$(20).isControlDown$java_awt_event_MouseEvent(evt) || evt.isShiftDown$() ) ) {
if ($I$(20).isControlDown$java_awt_event_MouseEvent(evt) || evt.isShiftDown$() ) {
this.ap.av.setSelectionGroup$jalview_datamodel_SequenceGroup(Clazz.new_($I$(21).c$$jalview_datamodel_SequenceGroup,[aa[this.selectedRow].groupRef]));
} else {
this.ap.av.setSelectionGroup$jalview_datamodel_SequenceGroup(aa[this.selectedRow].groupRef);
}} else {
var remainToAdd=aa[this.selectedRow].groupRef.getSize$();
for (var sgs, $sgs = aa[this.selectedRow].groupRef.getSequences$().iterator$(); $sgs.hasNext$()&&((sgs=($sgs.next$())),1);) {
if ($I$(20).isControlDown$java_awt_event_MouseEvent(evt)) {
sg.addOrRemove$jalview_datamodel_SequenceI$Z(sgs, --remainToAdd == 0);
} else {
sg.addSequence$jalview_datamodel_SequenceI$Z(sgs, --remainToAdd == 0);
}}
}this.ap.paintAlignment$Z$Z(false, false);
$I$(22).Refresh$java_awt_Component$S(this.ap, this.ap.av.getSequenceSetId$());
this.ap.av.sendSelection$();
} else {
this.ap.seqPanel.ap.idPanel.highlightSearchResults$java_util_List(aa[this.selectedRow].groupRef.getSequences$java_util_Map(null));
}return;
} else if (aa[this.selectedRow].sequenceRef != null ) {
if (evt.getClickCount$() == 1) {
this.ap.seqPanel.ap.idPanel.highlightSearchResults$java_util_List($I$(23).asList$TTA(Clazz.array($I$(24), -1, [aa[this.selectedRow].sequenceRef])));
} else if (evt.getClickCount$() >= 2) {
this.ap.seqPanel.ap.idPanel.highlightSearchResults$java_util_List(null);
var sg=this.ap.av.getSelectionGroup$();
if (sg != null ) {
if (!($I$(20).isControlDown$java_awt_event_MouseEvent(evt) || evt.isShiftDown$() )) {
sg=Clazz.new_($I$(21).c$$jalview_datamodel_SequenceGroup,[sg]);
sg.clear$();
sg.addSequence$jalview_datamodel_SequenceI$Z(aa[this.selectedRow].sequenceRef, false);
} else {
if ($I$(20).isControlDown$java_awt_event_MouseEvent(evt)) {
sg.addOrRemove$jalview_datamodel_SequenceI$Z(aa[this.selectedRow].sequenceRef, true);
} else {
sg.addSequence$jalview_datamodel_SequenceI$Z(aa[this.selectedRow].sequenceRef, true);
}}} else {
sg=Clazz.new_($I$(21));
sg.setStartRes$I(0);
sg.setEndRes$I(this.ap.av.getAlignment$().getWidth$() - 1);
sg.addSequence$jalview_datamodel_SequenceI$Z(aa[this.selectedRow].sequenceRef, false);
}this.ap.av.setSelectionGroup$jalview_datamodel_SequenceGroup(sg);
this.ap.paintAlignment$Z$Z(false, false);
$I$(22).Refresh$java_awt_Component$S(this.ap, this.ap.av.getSequenceSetId$());
this.ap.av.sendSelection$();
}}}}});

Clazz.newMeth(C$, 'copy_annotseqtoclipboard$jalview_datamodel_SequenceI', function (sq) {
if (sq == null  || sq.getLength$() < 1 ) {
return;
}$I$(25).copiedSequences=Clazz.new_($I$(26));
$I$(25).copiedSequences.append$S(sq.getName$() + "\t" + sq.getStart$() + "\t" + sq.getEnd$() + "\t" + sq.getSequenceAsString$() + "\n" );
if (this.av.hasHiddenColumns$()) {
$I$(25).copiedHiddenColumns=Clazz.new_($I$(27).c$$jalview_datamodel_HiddenColumns,[this.av.getAlignment$().getHiddenColumns$()]);
}});

Clazz.newMeth(C$, 'update$java_awt_Graphics', function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
var w=this.getSize$().width;
var h=this.getSize$().height;
if (this.image == null  || w != this.image.getWidth$java_awt_image_ImageObserver(this)  || h != this.image.getHeight$java_awt_image_ImageObserver(this) ) {
this.image=this.createImage$I$I(w, this.ap.annotationPanel.getSize$().height);
}this.drawComponent$java_awt_Graphics$I(this.image.getGraphics$(), w);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, this);
});

Clazz.newMeth(C$, 'drawComponent$java_awt_Graphics$I', function (g, width) {
g.setFont$java_awt_Font(this.av.getFont$());
var fm=g.getFontMetrics$java_awt_Font(this.av.getFont$());
g.setColor$java_awt_Color($I$(28).white);
g.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
g.translate$I$I(0, -this.scrollOffset);
g.setColor$java_awt_Color($I$(28).black);
var aa=this.av.getAlignment$().getAlignmentAnnotation$();
var y=0;
var fy=g.getFont$().getSize$();
var x=0;
var offset;
if (aa != null ) {
this.hasHiddenRows=false;
for (var i=0; i < aa.length; i++) {
if (!aa[i].visible) {
this.hasHiddenRows=true;
continue;
}x=width - fm.stringWidth$S(aa[i].label) - 3 ;
y+=aa[i].height;
offset=(-(aa[i].height - fy)/2|0);
g.drawString$S$I$I(aa[i].label, x, y + offset);
}
}g.translate$I$I(0, +this.scrollOffset);
if (!this.resizePanel && !this.dragCancelled && this.dragEvent != null    && aa != null  ) {
g.setColor$java_awt_Color($I$(28).lightGray);
g.drawString$S$I$I(aa[this.selectedRow].label, this.dragEvent.getX$(), this.dragEvent.getY$());
}if (!this.av.getWrapAlignment$() && ((aa == null ) || (aa.length < 1) ) ) {
g.setColor$java_awt_Color($I$(28).black);
g.drawString$S$I$I($I$(15).getString$S("label.right_click"), 2, 8);
g.drawString$S$I$I($I$(15).getString$S("label.to_add_annotation"), 2, 18);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:06 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
