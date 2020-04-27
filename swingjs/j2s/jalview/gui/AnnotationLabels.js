(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.awt.Font','jalview.util.MessageManager','javax.swing.ToolTipManager','jalview.datamodel.AlignmentAnnotation','jalview.datamodel.Annotation','jalview.gui.AnnotationExporter','jalview.gui.EditNameDialog','javax.swing.JPopupMenu','javax.swing.JMenuItem','jalview.analysis.AlignmentUtils','java.util.Collections','javax.swing.JCheckBoxMenuItem','java.awt.Dimension','StringBuilder','java.awt.Cursor','javax.swing.SwingUtilities','jalview.util.Platform','jalview.datamodel.SequenceGroup','jalview.gui.PaintRefresher','java.util.Arrays','jalview.datamodel.SequenceI','jalview.datamodel.Sequence','jalview.analysis.AlignSeq','jalview.util.Comparison','jalview.datamodel.Alignment','jalview.io.FormatAdapter','jalview.io.FileFormat','java.awt.Toolkit','java.awt.datatransfer.StringSelection','jalview.gui.Desktop','jalview.datamodel.HiddenColumns','java.awt.RenderingHints','java.awt.Color','java.awt.geom.AffineTransform']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationLabels", null, 'javax.swing.JPanel', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'java.awt.event.ActionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.debugRedraw=false;
this.scrollOffset=0;
this.resizePanel=false;
},1);

C$.$fields$=[['Z',['debugRedraw','hasHiddenRows','resizePanel'],'I',['oldY','selectedRow','scrollOffset'],'O',['ap','jalview.gui.AlignmentPanel','av','jalview.gui.AlignViewport','dragEvent','java.awt.event.MouseEvent']]
,['I',['HEIGHT_ADJUSTER_HEIGHT'],'S',['TOGGLE_LABELSCALE','ADDNEW','EDITNAME','HIDE','DELETE','SHOWALL','OUTPUT_TEXT','COPYCONS_SEQ'],'O',['$font','java.awt.Font']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel', function (ap) {
Clazz.super_(C$, this);
this.ap=ap;
this.av=ap.av;
$I$(3).sharedInstance$().registerComponent$javax_swing_JComponent(this);
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
this.addMouseWheelListener$java_awt_event_MouseWheelListener(ap.getAnnotationPanel$());
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignViewport', function (av) {
Clazz.super_(C$, this);
this.av=av;
}, 1);

Clazz.newMeth(C$, 'setScrollOffset$I', function (y) {
this.scrollOffset=y;
this.repaint$();
});

Clazz.newMeth(C$, 'getSelectedRow$I', function (y) {
var height=0;
var aa=this.ap.av.getAlignment$().getAlignmentAnnotation$();
this.selectedRow=-2;
if (aa != null ) {
for (var i=0; i < aa.length; i++) {
this.selectedRow=-1;
if (!aa[i].visible) {
continue;
}height+=aa[i].height;
if (y < height) {
this.selectedRow=i;
break;
}}
}});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
var aa=this.ap.av.getAlignment$().getAlignmentAnnotation$();
var action=evt.getActionCommand$();
if (C$.ADDNEW.equals$O(action)) {
var newAnnotation=Clazz.new_([null, null, Clazz.array($I$(5), [this.ap.av.getAlignment$().getWidth$()])],$I$(4,1).c$$S$S$jalview_datamodel_AnnotationA);
this.editLabelDescription$jalview_datamodel_AlignmentAnnotation$Z(newAnnotation, true);
} else if (C$.EDITNAME.equals$O(action)) {
this.editLabelDescription$jalview_datamodel_AlignmentAnnotation$Z(aa[this.selectedRow], false);
} else if (C$.HIDE.equals$O(action)) {
aa[this.selectedRow].visible=false;
} else if (C$.DELETE.equals$O(action)) {
this.ap.av.getAlignment$().deleteAnnotation$jalview_datamodel_AlignmentAnnotation(aa[this.selectedRow]);
this.ap.av.getCalcManager$().removeWorkerForAnnotation$jalview_datamodel_AlignmentAnnotation(aa[this.selectedRow]);
} else if (C$.SHOWALL.equals$O(action)) {
for (var i=0; i < aa.length; i++) {
if (!aa[i].visible && aa[i].annotations != null  ) {
aa[i].visible=true;
}}
} else if (C$.OUTPUT_TEXT.equals$O(action)) {
Clazz.new_($I$(6,1).c$$jalview_gui_AlignmentPanel,[this.ap]).exportAnnotation$jalview_datamodel_AlignmentAnnotation(aa[this.selectedRow]);
} else if (C$.COPYCONS_SEQ.equals$O(action)) {
var cons=null;
if (aa[this.selectedRow].groupRef != null ) {
cons=aa[this.selectedRow].groupRef.getConsensusSeq$();
} else {
cons=this.av.getConsensusSeq$();
}if (cons != null ) {
this.copy_annotseqtoclipboard$jalview_datamodel_SequenceI(cons);
}} else if (C$.TOGGLE_LABELSCALE.equals$O(action)) {
aa[this.selectedRow].scaleColLabel=!aa[this.selectedRow].scaleColLabel;
}this.ap.refresh$Z(true);
});

Clazz.newMeth(C$, 'editLabelDescription$jalview_datamodel_AlignmentAnnotation$Z', function (annotation, addNew) {
var name=$I$(2).getString$S("label.annotation_name");
var description=$I$(2).getString$S("label.annotation_description");
var title=$I$(2).getString$S("label.edit_annotation_name_description");
var dialog=Clazz.new_($I$(7,1).c$$S$S$S$S,[annotation.label, annotation.description, name, description]);
dialog.showDialog$javax_swing_JComponent$S$Runnable(this.ap.alignFrame, title, ((P$.AnnotationLabels$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationLabels$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.annotation.label=this.$finals$.dialog.getName$();
var text=this.$finals$.dialog.getDescription$();
if (text != null  && text.length$() == 0 ) {
text=null;
}this.$finals$.annotation.description=text;
if (this.$finals$.addNew) {
this.b$['jalview.gui.AnnotationLabels'].ap.av.getAlignment$().addAnnotation$jalview_datamodel_AlignmentAnnotation(this.$finals$.annotation);
this.b$['jalview.gui.AnnotationLabels'].ap.av.getAlignment$().setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I(this.$finals$.annotation, 0);
}this.b$['jalview.gui.AnnotationLabels'].ap.refresh$Z(true);
});
})()
), Clazz.new_(P$.AnnotationLabels$1.$init$,[this, {addNew:addNew,dialog:dialog,annotation:annotation}])));
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
this.getSelectedRow$I(evt.getY$() - this.getScrollOffset$());
this.oldY=evt.getY$();
if (evt.isPopupTrigger$()) {
this.showPopupMenu$java_awt_event_MouseEvent(evt);
}});

Clazz.newMeth(C$, 'showPopupMenu$java_awt_event_MouseEvent', function (evt) {
evt.consume$();
var aa=this.ap.av.getAlignment$().getAlignmentAnnotation$();
var pop=Clazz.new_([$I$(2).getString$S("label.annotations")],$I$(8,1).c$$S);
var item=Clazz.new_($I$(9,1).c$$S,[C$.ADDNEW]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(item);
if (this.selectedRow < 0) {
if (this.hasHiddenRows) {
item=Clazz.new_($I$(9,1).c$$S,[C$.SHOWALL]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(item);
}pop.show$java_awt_Component$I$I(this, evt.getX$(), evt.getY$());
return;
}item=Clazz.new_($I$(9,1).c$$S,[C$.EDITNAME]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(item);
item=Clazz.new_($I$(9,1).c$$S,[C$.HIDE]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(item);
if (this.selectedRow < aa.length) {
if (aa[this.selectedRow].sequenceRef != null ) {
var label=aa[this.selectedRow].label;
var hideType=Clazz.new_($I$(9,1));
var text=$I$(2).getString$S("label.hide_all") + " " + label ;
hideType.setText$S(text);
hideType.addActionListener$java_awt_event_ActionListener(((P$.AnnotationLabels$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationLabels$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
$I$(10,"showOrHideSequenceAnnotations$jalview_datamodel_AlignmentI$java_util_Collection$java_util_List$Z$Z",[this.b$['jalview.gui.AnnotationLabels'].ap.av.getAlignment$(), $I$(11).singleton$O(this.$finals$.label), null, false, false]);
this.b$['jalview.gui.AnnotationLabels'].ap.refresh$Z(true);
});
})()
), Clazz.new_(P$.AnnotationLabels$2.$init$,[this, {label:label}])));
pop.add$javax_swing_JMenuItem(hideType);
}}item=Clazz.new_($I$(9,1).c$$S,[C$.DELETE]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(item);
if (this.hasHiddenRows) {
item=Clazz.new_($I$(9,1).c$$S,[C$.SHOWALL]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(item);
}item=Clazz.new_($I$(9,1).c$$S,[C$.OUTPUT_TEXT]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(item);
if (this.selectedRow < aa.length) {
var label=aa[this.selectedRow].label;
if (!aa[this.selectedRow].autoCalculated) {
if (aa[this.selectedRow].graph == 0) {
pop.addSeparator$();
item=Clazz.new_($I$(12,1).c$$S$Z,[C$.TOGGLE_LABELSCALE, aa[this.selectedRow].scaleColLabel]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(item);
}} else if (label.indexOf$S("Consensus") > -1) {
C$.addConsensusMenuOptions$jalview_gui_AlignmentPanel$jalview_datamodel_AlignmentAnnotation$javax_swing_JPopupMenu(this.ap, aa[this.selectedRow], pop);
var consclipbrd=Clazz.new_($I$(9,1).c$$S,[C$.COPYCONS_SEQ]);
consclipbrd.addActionListener$java_awt_event_ActionListener(this);
pop.add$javax_swing_JMenuItem(consclipbrd);
}}pop.show$java_awt_Component$I$I(this, evt.getX$(), evt.getY$());
});

Clazz.newMeth(C$, 'addConsensusMenuOptions$jalview_gui_AlignmentPanel$jalview_datamodel_AlignmentAnnotation$javax_swing_JPopupMenu', function (ap, ann, pop) {
pop.addSeparator$();
var cbmi=Clazz.new_([$I$(2).getString$S("label.ignore_gaps_consensus"), (ann.groupRef != null ) ? ann.groupRef.getIgnoreGapsConsensus$() : ap.av.isIgnoreGapsConsensus$()],$I$(12,1).c$$S$Z);
var aaa=ann;
cbmi.addActionListener$java_awt_event_ActionListener(((P$.AnnotationLabels$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationLabels$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.$finals$.aaa.groupRef != null ) {
this.$finals$.aaa.groupRef.setIgnoreGapsConsensus$Z(this.$finals$.cbmi.getState$());
this.$finals$.ap.getAnnotationPanel$().paint$java_awt_Graphics(this.$finals$.ap.getAnnotationPanel$().getGraphics$());
} else {
this.$finals$.ap.av.setIgnoreGapsConsensus$Z$jalview_api_AlignmentViewPanel(this.$finals$.cbmi.getState$(), this.$finals$.ap);
}this.$finals$.ap.alignmentChanged$();
});
})()
), Clazz.new_(P$.AnnotationLabels$3.$init$,[this, {cbmi:cbmi,aaa:aaa,ap:ap}])));
pop.add$javax_swing_JMenuItem(cbmi);
if (aaa.groupRef != null ) {
var chist=Clazz.new_([$I$(2).getString$S("label.show_group_histogram"), ann.groupRef.isShowConsensusHistogram$()],$I$(12,1).c$$S$Z);
chist.addActionListener$java_awt_event_ActionListener(((P$.AnnotationLabels$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationLabels$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.aaa.groupRef.setShowConsensusHistogram$Z(this.$finals$.chist.getState$());
this.$finals$.ap.repaint$();
});
})()
), Clazz.new_(P$.AnnotationLabels$4.$init$,[this, {aaa:aaa,ap:ap,chist:chist}])));
pop.add$javax_swing_JMenuItem(chist);
var cprofl=Clazz.new_([$I$(2).getString$S("label.show_group_logo"), ann.groupRef.isShowSequenceLogo$()],$I$(12,1).c$$S$Z);
cprofl.addActionListener$java_awt_event_ActionListener(((P$.AnnotationLabels$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationLabels$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.aaa.groupRef.setshowSequenceLogo$Z(this.$finals$.cprofl.getState$());
this.$finals$.ap.repaint$();
});
})()
), Clazz.new_(P$.AnnotationLabels$5.$init$,[this, {cprofl:cprofl,aaa:aaa,ap:ap}])));
pop.add$javax_swing_JMenuItem(cprofl);
var cproflnorm=Clazz.new_([$I$(2).getString$S("label.normalise_group_logo"), ann.groupRef.isNormaliseSequenceLogo$()],$I$(12,1).c$$S$Z);
cproflnorm.addActionListener$java_awt_event_ActionListener(((P$.AnnotationLabels$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationLabels$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.aaa.groupRef.setNormaliseSequenceLogo$Z(this.$finals$.cproflnorm.getState$());
this.$finals$.aaa.groupRef.setshowSequenceLogo$Z(true);
this.$finals$.ap.repaint$();
});
})()
), Clazz.new_(P$.AnnotationLabels$6.$init$,[this, {cproflnorm:cproflnorm,aaa:aaa,ap:ap}])));
pop.add$javax_swing_JMenuItem(cproflnorm);
} else {
var chist=Clazz.new_([$I$(2).getString$S("label.show_histogram"), ap.av.isShowConsensusHistogram$()],$I$(12,1).c$$S$Z);
chist.addActionListener$java_awt_event_ActionListener(((P$.AnnotationLabels$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationLabels$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.ap.av.setShowConsensusHistogram$Z(this.$finals$.chist.getState$());
this.$finals$.ap.alignFrame.setMenusForViewport$();
this.$finals$.ap.repaint$();
});
})()
), Clazz.new_(P$.AnnotationLabels$7.$init$,[this, {ap:ap,chist:chist}])));
pop.add$javax_swing_JMenuItem(chist);
var cprof=Clazz.new_([$I$(2).getString$S("label.show_logo"), ap.av.isShowSequenceLogo$()],$I$(12,1).c$$S$Z);
cprof.addActionListener$java_awt_event_ActionListener(((P$.AnnotationLabels$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationLabels$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.ap.av.setShowSequenceLogo$Z(this.$finals$.cprof.getState$());
this.$finals$.ap.alignFrame.setMenusForViewport$();
this.$finals$.ap.repaint$();
});
})()
), Clazz.new_(P$.AnnotationLabels$8.$init$,[this, {ap:ap,cprof:cprof}])));
pop.add$javax_swing_JMenuItem(cprof);
var cprofnorm=Clazz.new_([$I$(2).getString$S("label.normalise_logo"), ap.av.isNormaliseSequenceLogo$()],$I$(12,1).c$$S$Z);
cprofnorm.addActionListener$java_awt_event_ActionListener(((P$.AnnotationLabels$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationLabels$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.ap.av.setShowSequenceLogo$Z(true);
this.$finals$.ap.av.setNormaliseSequenceLogo$Z(this.$finals$.cprofnorm.getState$());
this.$finals$.ap.alignFrame.setMenusForViewport$();
this.$finals$.ap.repaint$();
});
})()
), Clazz.new_(P$.AnnotationLabels$9.$init$,[this, {ap:ap,cprofnorm:cprofnorm}])));
pop.add$javax_swing_JMenuItem(cprofnorm);
}}, 1);

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
if (evt.isPopupTrigger$()) {
this.showPopupMenu$java_awt_event_MouseEvent(evt);
return;
}var start=this.selectedRow;
this.getSelectedRow$I(evt.getY$() - this.getScrollOffset$());
var end=this.selectedRow;
if (start != end) {
var startAA=this.ap.av.getAlignment$().getAlignmentAnnotation$()[start];
if (end == -1) {
end=this.ap.av.getAlignment$().getAlignmentAnnotation$().length - 1;
}var endAA=this.ap.av.getAlignment$().getAlignmentAnnotation$()[end];
this.ap.av.getAlignment$().getAlignmentAnnotation$()[end]=startAA;
this.ap.av.getAlignment$().getAlignmentAnnotation$()[start]=endAA;
}this.resizePanel=false;
this.dragEvent=null;
this.repaint$();
this.ap.getAnnotationPanel$().repaint$();
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (evt) {
if (this.resizePanel && this.dragEvent == null  ) {
this.resizePanel=false;
this.repaint$();
}});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
this.dragEvent=evt;
if (this.resizePanel) {
var d=this.ap.annotationScroller.getPreferredSize$();
var dif=evt.getY$() - this.oldY;
dif=(dif/(this.ap.av.getCharHeight$())|0);
dif*=this.ap.av.getCharHeight$();
if ((d.height - dif) > 20) {
this.ap.annotationScroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[d.width, d.height - dif]));
d=this.ap.annotationSpaceFillerHolder.getPreferredSize$();
this.ap.annotationSpaceFillerHolder.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[d.width, d.height - dif]));
this.ap.paintAlignment$Z$Z(true, false);
}this.ap.addNotify$();
} else {
this.repaint$();
}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (evt) {
this.showOrHideAdjuster$java_awt_event_MouseEvent(evt);
this.getSelectedRow$I(evt.getY$() - this.getScrollOffset$());
if (this.selectedRow > -1 && this.ap.av.getAlignment$().getAlignmentAnnotation$().length > this.selectedRow ) {
var anns=this.ap.av.getAlignment$().getAlignmentAnnotation$();
var aa=anns[this.selectedRow];
var desc=C$.getTooltip$jalview_datamodel_AlignmentAnnotation(aa);
this.setToolTipText$S(desc);
var msg=C$.getStatusMessage$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA(aa, anns);
this.ap.alignFrame.setStatus$S(msg);
}});

Clazz.newMeth(C$, 'getStatusMessage$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA', function (aa, anns) {
if (aa == null ) {
return null;
}var msg=Clazz.new_($I$(14,1).c$$I,[32]);
if (aa.sequenceRef != null ) {
msg.append$S(aa.sequenceRef.getName$()).append$S(" : ");
}if (aa.graphGroup == -1) {
msg.append$S(aa.label);
} else if (anns != null ) {
var first=true;
for (var i=anns.length - 1; i >= 0; i--) {
if (anns[i].graphGroup == aa.graphGroup) {
if (!first) {
msg.append$S(", ");
}msg.append$S(anns[i].label);
first=false;
}}
}return msg.toString();
}, 1);

Clazz.newMeth(C$, 'getTooltip$jalview_datamodel_AlignmentAnnotation', function (aa) {
if (aa == null ) {
return null;
}var tooltip=Clazz.new_($I$(14,1));
if (aa.description != null  && !aa.description.equals$O("New description") ) {
var desc=aa.getDescription$Z(true).trim$();
if (!desc.toLowerCase$().startsWith$S("<html>")) {
tooltip.append$S("<html>");
desc=desc.replace$CharSequence$CharSequence("<", "&lt;");
} else if (desc.toLowerCase$().endsWith$S("</html>")) {
desc=desc.substring$I$I(0, desc.length$() - "</html>".length$());
}tooltip.append$S(desc);
} else {
tooltip.append$S("<html>");
}if (aa.hasScore$()) {
if (tooltip.length$() > "<html>".length$()) {
tooltip.append$S("<br/>");
}tooltip.append$S(" Score: ").append$S(String.valueOf$D(aa.score));
}if (tooltip.length$() > "<html>".length$()) {
return tooltip.append$S("</html>").toString();
}return null;
}, 1);

Clazz.newMeth(C$, 'showOrHideAdjuster$java_awt_event_MouseEvent', function (evt) {
var was=this.resizePanel;
this.resizePanel=evt.getY$() < C$.HEIGHT_ADJUSTER_HEIGHT && evt.getX$() < 50 ;
if (this.resizePanel != was ) {
this.setCursor$java_awt_Cursor($I$(15).getPredefinedCursor$I(this.resizePanel ? 9 : 0));
this.repaint$();
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
var aa=this.ap.av.getAlignment$().getAlignmentAnnotation$();
if (!evt.isPopupTrigger$() && $I$(16).isLeftMouseButton$java_awt_event_MouseEvent(evt) ) {
if (this.selectedRow > -1 && this.selectedRow < aa.length ) {
if (aa[this.selectedRow].groupRef != null ) {
if (evt.getClickCount$() >= 2) {
this.ap.getSeqPanel$().ap.getIdPanel$().highlightSearchResults$java_util_List(null);
var sg=this.ap.av.getSelectionGroup$();
if (sg == null  || sg === aa[this.selectedRow].groupRef   || !($I$(17).isControlDown$java_awt_event_MouseEvent(evt) || evt.isShiftDown$() ) ) {
if ($I$(17).isControlDown$java_awt_event_MouseEvent(evt) || evt.isShiftDown$() ) {
this.ap.av.setSelectionGroup$jalview_datamodel_SequenceGroup(Clazz.new_($I$(18,1).c$$jalview_datamodel_SequenceGroup,[aa[this.selectedRow].groupRef]));
} else {
this.ap.av.setSelectionGroup$jalview_datamodel_SequenceGroup(aa[this.selectedRow].groupRef);
}} else {
var remainToAdd=aa[this.selectedRow].groupRef.getSize$();
for (var sgs, $sgs = aa[this.selectedRow].groupRef.getSequences$().iterator$(); $sgs.hasNext$()&&((sgs=($sgs.next$())),1);) {
if ($I$(17).isControlDown$java_awt_event_MouseEvent(evt)) {
sg.addOrRemove$jalview_datamodel_SequenceI$Z(sgs, --remainToAdd == 0);
} else {
sg.addSequence$jalview_datamodel_SequenceI$Z(sgs, --remainToAdd == 0);
}}
}this.ap.paintAlignment$Z$Z(false, false);
$I$(19,"Refresh$java_awt_Component$S",[this.ap, this.ap.av.getSequenceSetId$()]);
this.ap.av.sendSelection$();
} else {
this.ap.getSeqPanel$().ap.getIdPanel$().highlightSearchResults$java_util_List(aa[this.selectedRow].groupRef.getSequences$java_util_Map(null));
}return;
} else if (aa[this.selectedRow].sequenceRef != null ) {
if (evt.getClickCount$() == 1) {
this.ap.getSeqPanel$().ap.getIdPanel$().highlightSearchResults$java_util_List($I$(20,"asList$OA",[Clazz.array($I$(21), -1, [aa[this.selectedRow].sequenceRef])]));
} else if (evt.getClickCount$() >= 2) {
this.ap.getSeqPanel$().ap.getIdPanel$().highlightSearchResults$java_util_List(null);
var sg=this.ap.av.getSelectionGroup$();
if (sg != null ) {
if (!($I$(17).isControlDown$java_awt_event_MouseEvent(evt) || evt.isShiftDown$() )) {
sg=Clazz.new_($I$(18,1).c$$jalview_datamodel_SequenceGroup,[sg]);
sg.clear$();
sg.addSequence$jalview_datamodel_SequenceI$Z(aa[this.selectedRow].sequenceRef, false);
} else {
if ($I$(17).isControlDown$java_awt_event_MouseEvent(evt)) {
sg.addOrRemove$jalview_datamodel_SequenceI$Z(aa[this.selectedRow].sequenceRef, true);
} else {
sg.addSequence$jalview_datamodel_SequenceI$Z(aa[this.selectedRow].sequenceRef, true);
}}} else {
sg=Clazz.new_($I$(18,1));
sg.setStartRes$I(0);
sg.setEndRes$I(this.ap.av.getAlignment$().getWidth$() - 1);
sg.addSequence$jalview_datamodel_SequenceI$Z(aa[this.selectedRow].sequenceRef, false);
}this.ap.av.setSelectionGroup$jalview_datamodel_SequenceGroup(sg);
this.ap.paintAlignment$Z$Z(false, false);
$I$(19,"Refresh$java_awt_Component$S",[this.ap, this.ap.av.getSequenceSetId$()]);
this.ap.av.sendSelection$();
}}}return;
}});

Clazz.newMeth(C$, 'copy_annotseqtoclipboard$jalview_datamodel_SequenceI', function (sq) {
var seqs=Clazz.array($I$(21), -1, [sq]);
var omitHidden=null;
var dseqs=Clazz.array($I$(21), -1, [sq.getDatasetSequence$()]);
if (dseqs[0] == null ) {
dseqs[0]=Clazz.new_($I$(22,1).c$$jalview_datamodel_SequenceI,[sq]);
dseqs[0].setSequence$S($I$(23,"extractGaps$S$S",[$I$(24).GapChars, sq.getSequenceAsString$()]));
sq.setDatasetSequence$jalview_datamodel_SequenceI(dseqs[0]);
}var ds=Clazz.new_($I$(25,1).c$$jalview_datamodel_SequenceIA,[dseqs]);
if (this.av.hasHiddenColumns$()) {
var it=this.av.getAlignment$().getHiddenColumns$().getVisContigsIterator$I$I$Z(0, sq.getLength$(), false);
omitHidden=Clazz.array(String, -1, [sq.getSequenceStringFromIterator$java_util_Iterator(it)]);
}var alignmentStartEnd=Clazz.array(Integer.TYPE, -1, [0, ds.getWidth$() - 1]);
if (this.av.hasHiddenColumns$()) {
alignmentStartEnd=this.av.getAlignment$().getHiddenColumns$().getVisibleStartAndEndIndex$I(this.av.getAlignment$().getWidth$());
}var output=Clazz.new_($I$(26,1)).formatSequences$jalview_io_FileFormatI$jalview_datamodel_SequenceIA$SA$IA($I$(27).Fasta, seqs, omitHidden, alignmentStartEnd);
$I$(28).getDefaultToolkit$().getSystemClipboard$().setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(Clazz.new_($I$(29,1).c$$S,[output]), $I$(30).instance);
var hiddenColumns=null;
if (this.av.hasHiddenColumns$()) {
hiddenColumns=Clazz.new_([this.av.getAlignment$().getHiddenColumns$()],$I$(31,1).c$$jalview_datamodel_HiddenColumns);
}$I$(30).jalviewClipboard=Clazz.array(java.lang.Object, -1, [seqs, ds, hiddenColumns]);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
var width=this.getWidth$();
if (width == 0) {
width=this.ap.calculateIdWidth$().width;
}var g2=g;
if (this.av.antiAlias) {
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(32).KEY_ANTIALIASING, $I$(32).VALUE_ANTIALIAS_ON);
}this.drawComponent$java_awt_Graphics$Z$I(g2, true, width);
});

Clazz.newMeth(C$, 'drawComponent$java_awt_Graphics$I', function (g, width) {
this.drawComponent$java_awt_Graphics$Z$I(g, false, width);
});

Clazz.newMeth(C$, 'drawComponent$java_awt_Graphics$Z$I', function (g, clip, width) {
if (this.av.getFont$().getSize$() < 10) {
g.setFont$java_awt_Font(C$.$font);
} else {
g.setFont$java_awt_Font(this.av.getFont$());
}var fm=g.getFontMetrics$java_awt_Font(g.getFont$());
g.setColor$java_awt_Color($I$(33).white);
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
g.translate$I$I(0, this.getScrollOffset$());
g.setColor$java_awt_Color($I$(33).black);
var aa=this.av.getAlignment$().getAlignmentAnnotation$();
var fontHeight=g.getFont$().getSize$();
var y=0;
var x=0;
var graphExtras=0;
var offset=0;
var baseFont=g.getFont$();
var baseMetrics=fm;
var ofontH=fontHeight;
var sOffset=0;
var visHeight=0;
var visr=(this.ap != null  && this.ap.getAnnotationPanel$() != null  ) ? this.ap.getAnnotationPanel$().getVisibleVRange$() : null;
if (clip && visr != null  ) {
sOffset=visr[0];
visHeight=visr[1];
}var visible=true;
var before=false;
var after=false;
if (aa != null ) {
this.hasHiddenRows=false;
var olY=0;
for (var i=0; i < aa.length; i++) {
visible=true;
if (!aa[i].visible) {
this.hasHiddenRows=true;
continue;
}olY=y;
y+=aa[i].height;
if (clip) {
if (y < sOffset) {
if (!before) {
if (false) {
System.out.println$S("before vis: " + i);
}before=true;
}continue;
}if (olY > visHeight) {
if (!after) {
if (false) {
System.out.println$S("Scroll offset: " + sOffset + " after vis: " + i );
}after=true;
}continue;
}}g.setColor$java_awt_Color($I$(33).black);
offset=(-aa[i].height/2|0);
if (aa[i].hasText) {
offset+=(fm.getHeight$()/2|0);
offset-=fm.getDescent$();
} else {
offset+=fm.getDescent$();
}x=width - fm.stringWidth$S(aa[i].label) - 3 ;
if (aa[i].graphGroup > -1) {
var groupSize=0;
for (var gg=0; gg < aa.length; gg++) {
if (aa[gg].graphGroup == aa[i].graphGroup) {
groupSize++;
}}
if (groupSize * (fontHeight + 8) < aa[i].height) {
graphExtras=((aa[i].height - (groupSize * (fontHeight + 8)))/2|0);
} else {
var h=aa[i].height / groupSize;
var s;
if (h < 9 ) {
visible=false;
} else {
fontHeight=-8 + (h|0);
s=(fontHeight) / ofontH;
var f=baseFont.deriveFont$java_awt_geom_AffineTransform($I$(34).getScaleInstance$D$D(s, s));
g.setFont$java_awt_Font(f);
fm=g.getFontMetrics$();
graphExtras=((aa[i].height - (groupSize * (fontHeight + 8)))/2|0);
}}if (visible) {
for (var gg=0; gg < aa.length; gg++) {
if (aa[gg].graphGroup == aa[i].graphGroup) {
x=width - fm.stringWidth$S(aa[gg].label) - 3 ;
g.drawString$S$I$I(aa[gg].label, x, y - graphExtras);
if (aa[gg]._linecolour != null ) {
g.setColor$java_awt_Color(aa[gg]._linecolour);
g.drawLine$I$I$I$I(x, y - graphExtras + 3, x + fm.stringWidth$S(aa[gg].label), y - graphExtras + 3);
}g.setColor$java_awt_Color($I$(33).black);
graphExtras+=fontHeight + 8;
}}
}g.setFont$java_awt_Font(baseFont);
fm=baseMetrics;
fontHeight=ofontH;
} else {
g.drawString$S$I$I(aa[i].label, x, y + offset);
}}
}if (!this.resizePanel && this.dragEvent != null   && aa != null  ) {
g.setColor$java_awt_Color($I$(33).lightGray);
g.drawString$S$I$I(aa[this.selectedRow].label, this.dragEvent.getX$(), this.dragEvent.getY$() - this.getScrollOffset$());
}if (!this.av.getWrapAlignment$() && ((aa == null ) || (aa.length < 1) ) ) {
g.drawString$S$I$I($I$(2).getString$S("label.right_click"), 2, 8);
g.drawString$S$I$I($I$(2).getString$S("label.to_add_annotation"), 2, 18);
}});

Clazz.newMeth(C$, 'getScrollOffset$', function () {
return this.scrollOffset;
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

C$.$static$=function(){C$.$static$=0;
C$.HEIGHT_ADJUSTER_HEIGHT=10;
C$.$font=Clazz.new_($I$(1,1).c$$S$I$I,["Arial", 0, 11]);
C$.TOGGLE_LABELSCALE=$I$(2).getString$S("label.scale_label_to_column");
C$.ADDNEW=$I$(2).getString$S("label.add_new_row");
C$.EDITNAME=$I$(2).getString$S("label.edit_label_description");
C$.HIDE=$I$(2).getString$S("label.hide_row");
C$.DELETE=$I$(2).getString$S("label.delete_row");
C$.SHOWALL=$I$(2).getString$S("label.show_all_hidden_rows");
C$.OUTPUT_TEXT=$I$(2).getString$S("label.export_annotation");
C$.COPYCONS_SEQ=$I$(2).getString$S("label.copy_consensus_sequence");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
