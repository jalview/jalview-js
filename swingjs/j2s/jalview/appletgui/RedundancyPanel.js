(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.util.Stack','java.util.Vector','jalview.util.MessageManager','java.awt.Frame','jalview.bin.JalviewLite','Thread','jalview.analysis.AlignSeq','java.util.ArrayList','jalview.appletgui.PaintRefresher','jalview.datamodel.SequenceI','jalview.commands.EditCommand',['jalview.commands.EditCommand','.Action']]],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RedundancyPanel", null, 'jalview.appletgui.SliderPanel', ['Runnable', 'java.awt.event.WindowListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.historyList=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['historyList','java.util.Stack','redundancy','float[]','originalSequences','jalview.datamodel.SequenceI[]','frame','java.awt.Frame','redundantSeqs','java.util.Vector']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel', function (ap) {
;C$.superclazz.c$$jalview_appletgui_AlignmentPanel$I$Z$jalview_renderer_ResidueShaderI.apply(this,[ap, 0, false, null]);C$.$init$.apply(this);
this.redundantSeqs=Clazz.new_($I$(2,1));
this.ap=ap;
this.undoButton.setVisible$Z(true);
this.applyButton.setVisible$Z(true);
this.allGroupsCheck.setVisible$Z(false);
this.label.setText$S($I$(3).getString$S("label.enter_redundancy_threshold"));
this.valueField.setText$S("100");
this.slider.setVisibleAmount$I(1);
this.slider.setMinimum$I(0);
this.slider.setMaximum$I(100 + this.slider.getVisibleAmount$());
this.slider.setValue$I(100);
this.slider.addAdjustmentListener$java_awt_event_AdjustmentListener(((P$.RedundancyPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "RedundancyPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.AdjustmentListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'adjustmentValueChanged$java_awt_event_AdjustmentEvent', function (evt) {
this.b$['jalview.appletgui.RedundancyPanel'].valueField.setText$S(String.valueOf$I(this.b$['jalview.appletgui.RedundancyPanel'].slider.getValue$()));
this.b$['jalview.appletgui.RedundancyPanel'].sliderValueChanged$.apply(this.b$['jalview.appletgui.RedundancyPanel'], []);
});
})()
), Clazz.new_(P$.RedundancyPanel$1.$init$,[this, null])));
this.frame=Clazz.new_($I$(4,1));
this.frame.add$java_awt_Component(this);
$I$(5,"addFrame$java_awt_Frame$S$I$I",[this.frame, $I$(3).getString$S("label.redundancy_threshold_selection"), 400, 100]);
this.frame.addWindowListener$java_awt_event_WindowListener(this);
var worker=Clazz.new_($I$(6,1).c$$Runnable,[this]);
worker.start$();
}, 1);

Clazz.newMeth(C$, 'run$', function () {
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
this.redundancy=$I$(7).computeRedundancyMatrix$jalview_datamodel_SequenceIA$SA$I$I$Z(this.originalSequences, omitHidden, start, end, false);
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
var redundantSequences=Clazz.new_($I$(8,1));
for (var i=0; i < this.redundancy.length; i++) {
if (value <= this.redundancy[i] ) {
redundantSequences.add$O(this.originalSequences[i]);
}}
this.ap.idPanel.idCanvas.setHighlighted$java_util_List(redundantSequences);
$I$(9,"Refresh$java_awt_Component$S$Z$Z",[this, this.ap.av.getSequenceSetId$(), true, true]);
});

Clazz.newMeth(C$, 'applyButton_actionPerformed$', function () {
var del=Clazz.new_($I$(2,1));
this.undoButton.setEnabled$Z(true);
var value=this.slider.getValue$();
var sg=this.ap.av.getSelectionGroup$();
for (var i=0; i < this.redundancy.length; i++) {
if (value <= this.redundancy[i] ) {
del.addElement$O(this.originalSequences[i]);
}}
if (del.size$() > 0) {
var deleted=Clazz.array($I$(10), [del.size$()]);
var width=0;
for (var i=0; i < del.size$(); i++) {
deleted[i]=del.elementAt$I(i);
if (deleted[i].getLength$() > width) {
width=deleted[i].getLength$();
}}
var cut=Clazz.new_([$I$(3).getString$S("action.remove_redundancy"), $I$(12).CUT, deleted, 0, width, this.ap.av.getAlignment$()],$I$(11,1).c$$S$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI);
var alignment=this.ap.av.getAlignment$();
for (var i=0; i < del.size$(); i++) {
alignment.deleteSequence$jalview_datamodel_SequenceI(deleted[i]);
if (sg != null ) {
sg.deleteSequence$jalview_datamodel_SequenceI$Z(deleted[i], false);
}}
this.historyList.push$O(cut);
this.ap.alignFrame.addHistoryItem$jalview_commands_CommandI(cut);
$I$(9,"Refresh$java_awt_Component$S$Z$Z",[this, this.ap.av.getSequenceSetId$(), true, true]);
this.ap.av.firePropertyChange$S$O$O("alignment", null, this.ap.av.getAlignment$().getSequences$());
}});

Clazz.newMeth(C$, 'undoButton_actionPerformed$', function () {
var command=this.historyList.pop$();
command.undoCommand$jalview_datamodel_AlignmentIA(null);
if (this.ap.av.getHistoryList$().contains$O(command)) {
this.ap.av.getHistoryList$().remove$O(command);
this.ap.alignFrame.updateEditMenuBar$();
this.ap.av.firePropertyChange$S$O$O("alignment", null, this.ap.av.getAlignment$().getSequences$());
}this.ap.paintAlignment$Z$Z(true, true);
if (this.historyList.size$() == 0) {
this.undoButton.setEnabled$Z(false);
}});

Clazz.newMeth(C$, 'valueField_actionPerformed$java_awt_event_ActionEvent', function (e) {
try {
var i=Integer.parseInt$S(this.valueField.getText$());
this.slider.setValue$I(i);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.valueField.setText$S(this.slider.getValue$() + "");
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent', function (evt) {
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (evt) {
this.ap.idPanel.idCanvas.setHighlighted$java_util_List(null);
});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (evt) {
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent', function (evt) {
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent', function (evt) {
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent', function (evt) {
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent', function (evt) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:45 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
