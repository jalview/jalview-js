(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.util.Stack','java.util.Vector','jalview.util.MessageManager','Thread','javax.swing.JInternalFrame','jalview.gui.Desktop','javax.swing.event.InternalFrameAdapter','javax.swing.JProgressBar','jalview.analysis.AlignSeq','java.util.ArrayList','jalview.datamodel.SequenceI','jalview.commands.EditCommand',['jalview.commands.EditCommand','.Action'],'jalview.gui.PaintRefresher']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RedundancyPanel", null, 'jalview.jbgui.GSliderPanel', 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.af=null;
this.ap=null;
this.historyList=null;
this.redundancy=null;
this.originalSequences=null;
this.frame=null;
this.redundantSeqs=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.historyList=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$jalview_gui_AlignFrame', function (ap, af) {
Clazz.super_(C$, this,1);
this.ap=ap;
this.af=af;
this.redundantSeqs=Clazz.new_($I$(2));
this.slider.addChangeListener$javax_swing_event_ChangeListener(((P$.RedundancyPanel$1||
(function(){var C$=Clazz.newClass(P$, "RedundancyPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (evt) {
this.b$['jalview.gui.RedundancyPanel'].valueField.setText$S(this.b$['jalview.gui.RedundancyPanel'].slider.getValue$() + "");
this.b$['jalview.gui.RedundancyPanel'].sliderValueChanged$.apply(this.b$['jalview.gui.RedundancyPanel'], []);
});
})()
), Clazz.new_(P$.RedundancyPanel$1.$init$, [this, null])));
this.applyButton.setText$S($I$(3).getString$S("action.remove"));
this.allGroupsCheck.setVisible$Z(false);
this.slider.setMinimum$I(0);
this.slider.setMaximum$I(100);
this.slider.setValue$I(100);
var worker=Clazz.new_($I$(4).c$$Runnable,[this]);
worker.start$();
this.frame=Clazz.new_($I$(5));
this.frame.setContentPane$java_awt_Container(this);
$I$(6).addInternalFrame$javax_swing_JInternalFrame$S$Z$I$I$Z$Z(this.frame, $I$(3).getString$S("label.redundancy_threshold_selection"), true, 420, 120, false, true);
this.frame.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.RedundancyPanel$2||
(function(){var C$=Clazz.newClass(P$, "RedundancyPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent', function (evt) {
this.$finals$.ap.getIdPanel$().getIdCanvas$().setHighlighted$java_util_List(null);
});
})()
), Clazz.new_($I$(7), [this, {ap: ap}],P$.RedundancyPanel$2)));
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var progress=Clazz.new_($I$(8));
progress.setIndeterminate$Z(true);
this.southPanel.add$java_awt_Component$O(progress, "South");
this.label.setText$S($I$(3).getString$S("label.calculating"));
this.slider.setVisible$Z(false);
this.applyButton.setEnabled$Z(false);
this.valueField.setVisible$Z(false);
this.validate$();
var omitHidden=null;
var sg=this.ap.av.getSelectionGroup$();
var height;
var start;
var end;
if ((sg != null ) && (sg.getSize$() >= 1) ) {
this.originalSequences=sg.getSequencesInOrder$jalview_datamodel_AlignmentI(this.ap.av.getAlignment$());
start=sg.getStartRes$();
end=sg.getEndRes$();
} else {
this.originalSequences=this.ap.av.getAlignment$().getSequencesArray$();
start=0;
end=this.ap.av.getAlignment$().getWidth$();
}height=this.originalSequences.length;
if (this.ap.av.hasHiddenColumns$()) {
omitHidden=this.ap.av.getViewAsString$Z(sg != null );
}this.redundancy=$I$(9).computeRedundancyMatrix$jalview_datamodel_SequenceIA$SA$I$I$Z(this.originalSequences, omitHidden, start, end, false);
progress.setIndeterminate$Z(false);
progress.setVisible$Z(false);
progress=null;
this.label.setText$S($I$(3).getString$S("label.enter_redundancy_threshold"));
this.slider.setVisible$Z(true);
this.applyButton.setEnabled$Z(true);
this.valueField.setVisible$Z(true);
this.validate$();
this.sliderValueChanged$();
});

Clazz.newMeth(C$, 'sliderValueChanged$', function () {
if (this.redundancy == null ) {
return;
}var value=this.slider.getValue$();
var redundantSequences=Clazz.new_($I$(10));
for (var i=0; i < this.redundancy.length; i++) {
if (value <= this.redundancy[i] ) {
redundantSequences.add$TE(this.originalSequences[i]);
}}
this.ap.getIdPanel$().getIdCanvas$().setHighlighted$java_util_List(redundantSequences);
});

Clazz.newMeth(C$, 'applyButton_actionPerformed$java_awt_event_ActionEvent', function (e) {
var del=Clazz.new_($I$(10));
this.undoButton.setEnabled$Z(true);
var value=this.slider.getValue$();
var sg=this.ap.av.getSelectionGroup$();
for (var i=0; i < this.redundancy.length; i++) {
if (value <= this.redundancy[i] ) {
del.add$TE(this.originalSequences[i]);
}}
if (del.size$() > 0) {
var deleted=Clazz.array($I$(11), [del.size$()]);
var width=0;
for (var i=0; i < del.size$(); i++) {
deleted[i]=del.get$I(i);
if (deleted[i].getLength$() > width) {
width=deleted[i].getLength$();
}}
var cut=Clazz.new_($I$(12).c$$S$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI,[$I$(3).getString$S("action.remove_redundancy"), $I$(13).CUT, deleted, 0, width, this.ap.av.getAlignment$()]);
for (var i=0; i < del.size$(); i++) {
this.ap.av.getAlignment$().deleteSequence$jalview_datamodel_SequenceI(deleted[i]);
if (sg != null ) {
sg.deleteSequence$jalview_datamodel_SequenceI$Z(deleted[i], false);
}}
this.historyList.push$TE(cut);
this.ap.alignFrame.addHistoryItem$jalview_commands_CommandI(cut);
$I$(14).Refresh$java_awt_Component$S$Z$Z(this, this.ap.av.getSequenceSetId$(), true, true);
this.ap.av.firePropertyChange$S$O$O("alignment", null, this.ap.av.getAlignment$().getSequences$());
}});

Clazz.newMeth(C$, 'undoButton_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.historyList == null  || this.historyList.isEmpty$() ) {
this.undoButton.setEnabled$Z(false);
return;
}var command=this.historyList.pop$();
if (this.ap.av.getHistoryList$().contains$O(command)) {
command.undoCommand$jalview_datamodel_AlignmentIA(this.af.getViewAlignments$());
this.ap.av.getHistoryList$().remove$O(command);
this.ap.av.firePropertyChange$S$O$O("alignment", null, this.ap.av.getAlignment$().getSequences$());
this.af.updateEditMenuBar$();
}this.ap.paintAlignment$Z$Z(true, true);
if (this.historyList.size$() == 0) {
this.undoButton.setEnabled$Z(false);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
