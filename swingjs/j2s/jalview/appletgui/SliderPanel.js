(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.awt.Scrollbar','java.awt.TextField','java.awt.Label','java.awt.Panel','java.awt.Button','java.awt.FlowLayout','java.awt.Checkbox','java.awt.BorderLayout','java.awt.Frame','jalview.util.MessageManager','jalview.bin.JalviewLite','jalview.appletgui.SliderPanel','java.awt.event.WindowAdapter','jalview.analysis.Conservation','java.awt.Color','java.awt.Font','java.awt.event.FocusAdapter']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SliderPanel", null, 'java.awt.Panel', ['java.awt.event.ActionListener', 'java.awt.event.AdjustmentListener', 'java.awt.event.MouseListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.forConservation=true;
this.slider=Clazz.new_($I$(1,1));
this.valueField=Clazz.new_($I$(2,1));
this.label=Clazz.new_($I$(3,1));
this.jPanel1=Clazz.new_($I$(4,1));
this.jPanel2=Clazz.new_($I$(4,1));
this.applyButton=Clazz.new_($I$(5,1));
this.undoButton=Clazz.new_($I$(5,1));
this.flowLayout1=Clazz.new_($I$(6,1));
this.allGroupsCheck=Clazz.new_($I$(7,1));
this.borderLayout1=Clazz.new_($I$(8,1));
this.borderLayout2=Clazz.new_($I$(8,1));
this.flowLayout2=Clazz.new_($I$(6,1));
},1);

C$.$fields$=[['Z',['forConservation'],'O',['ap','jalview.appletgui.AlignmentPanel','cs','jalview.renderer.ResidueShaderI','slider','java.awt.Scrollbar','valueField','java.awt.TextField','label','java.awt.Label','jPanel1','java.awt.Panel','+jPanel2','applyButton','java.awt.Button','+undoButton','flowLayout1','java.awt.FlowLayout','allGroupsCheck','java.awt.Checkbox','borderLayout1','java.awt.BorderLayout','+borderLayout2','flowLayout2','java.awt.FlowLayout']]
,['O',['conservationSlider','java.awt.Frame','+PIDSlider']]]

Clazz.newMeth(C$, 'setConservationSlider$jalview_appletgui_AlignmentPanel$jalview_renderer_ResidueShaderI$S', function (ap, ccs, source) {
var sp=null;
if (C$.conservationSlider == null ) {
sp=Clazz.new_(C$.c$$jalview_appletgui_AlignmentPanel$I$Z$jalview_renderer_ResidueShaderI,[ap, ccs.getConservationInc$(), true, ccs]);
C$.conservationSlider=Clazz.new_($I$(9,1));
C$.conservationSlider.add$java_awt_Component(sp);
} else {
sp=C$.conservationSlider.getComponent$I(0);
sp.cs=ccs;
sp.valueField.setText$S(String.valueOf$I(ccs.getConservationInc$()));
}C$.conservationSlider.setTitle$S($I$(10,"formatMessage$S$SA",["label.conservation_colour_increment", Clazz.array(String, -1, [source == null  ? "Background" : source])]));
var groups=ap.av.getAlignment$().getGroups$();
if (groups != null  && !groups.isEmpty$() ) {
sp.setAllGroupsCheckEnabled$Z(true);
} else {
sp.setAllGroupsCheckEnabled$Z(false);
}return sp.getValue$();
}, 1);

Clazz.newMeth(C$, 'showConservationSlider$', function () {
try {
C$.PIDSlider.setVisible$Z(false);
C$.PIDSlider=null;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (!C$.conservationSlider.isVisible$()) {
$I$(11,"addFrame$java_awt_Frame$S$I$I",[C$.conservationSlider, C$.conservationSlider.getTitle$(), 420, 100]);
C$.conservationSlider.addWindowListener$java_awt_event_WindowListener(((P$.SliderPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliderPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
$I$(12).conservationSlider=null;
});
})()
), Clazz.new_($I$(13,1),[this, null],P$.SliderPanel$1)));
}}, 1);

Clazz.newMeth(C$, 'setPIDSliderSource$jalview_appletgui_AlignmentPanel$jalview_renderer_ResidueShaderI$S', function (ap, ccs, source) {
var pid=null;
if (C$.PIDSlider == null ) {
pid=Clazz.new_(C$.c$$jalview_appletgui_AlignmentPanel$I$Z$jalview_renderer_ResidueShaderI,[ap, ccs.getThreshold$(), false, ccs]);
C$.PIDSlider=Clazz.new_($I$(9,1));
C$.PIDSlider.add$java_awt_Component(pid);
} else {
pid=C$.PIDSlider.getComponent$I(0);
pid.cs=ccs;
pid.valueField.setText$S(String.valueOf$I(ccs.getThreshold$()));
}C$.PIDSlider.setTitle$S($I$(10,"formatMessage$S$SA",["label.percentage_identity_threshold", Clazz.array(String, -1, [source == null  ? "Background" : source])]));
if (ap.av.getAlignment$().getGroups$() != null ) {
pid.setAllGroupsCheckEnabled$Z(true);
} else {
pid.setAllGroupsCheckEnabled$Z(false);
}return pid.getValue$();
}, 1);

Clazz.newMeth(C$, 'showPIDSlider$', function () {
try {
C$.conservationSlider.setVisible$Z(false);
C$.conservationSlider=null;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (!C$.PIDSlider.isVisible$()) {
$I$(11,"addFrame$java_awt_Frame$S$I$I",[C$.PIDSlider, C$.PIDSlider.getTitle$(), 420, 100]);
C$.PIDSlider.addWindowListener$java_awt_event_WindowListener(((P$.SliderPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliderPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
$I$(12).PIDSlider=null;
});
})()
), Clazz.new_($I$(13,1),[this, null],P$.SliderPanel$2)));
}}, 1);

Clazz.newMeth(C$, 'hidePIDSlider$', function () {
if (C$.PIDSlider != null ) {
C$.PIDSlider.setVisible$Z(false);
C$.PIDSlider=null;
}}, 1);

Clazz.newMeth(C$, 'hideConservationSlider$', function () {
if (C$.conservationSlider != null ) {
C$.conservationSlider.setVisible$Z(false);
C$.conservationSlider=null;
}}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel$I$Z$jalview_renderer_ResidueShaderI', function (ap, value, forConserve, shader) {
Clazz.super_(C$, this);
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
this.ap=ap;
this.cs=shader;
this.forConservation=forConserve;
this.undoButton.setVisible$Z(false);
this.applyButton.setVisible$Z(false);
if (this.forConservation) {
this.label.setText$S($I$(10).getString$S("label.modify_conservation_visibility"));
this.slider.setMinimum$I(0);
this.slider.setMaximum$I(50 + this.slider.getVisibleAmount$());
this.slider.setUnitIncrement$I(1);
} else {
this.label.setText$S($I$(10).getString$S("label.colour_residues_above_occurrence"));
this.slider.setMinimum$I(0);
this.slider.setMaximum$I(100 + this.slider.getVisibleAmount$());
this.slider.setBlockIncrement$I(1);
}this.slider.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this.slider.addMouseListener$java_awt_event_MouseListener(this);
this.slider.setValue$I(value);
this.valueField.setText$S(value + "");
}, 1);

Clazz.newMeth(C$, 'valueChanged$I', function (i) {
if (this.cs == null ) {
return;
}if (this.forConservation) {
this.cs.setConservationApplied$Z(true);
this.cs.setConservationInc$I(i);
} else {
this.cs.setThreshold$I$Z(i, this.ap.av.isIgnoreGapsConsensus$());
}if (this.allGroupsCheck.getState$()) {
for (var group, $group = this.ap.av.getAlignment$().getGroups$().iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
var groupColourScheme=group.getGroupColourScheme$();
if (this.forConservation) {
if (!groupColourScheme.conservationApplied$()) {
var c=Clazz.new_(["Group", group.getSequences$java_util_Map(null), group.getStartRes$(), group.getEndRes$()],$I$(14,1).c$$S$java_util_List$I$I);
c.calculate$();
c.verdict$Z$F(false, this.ap.av.getConsPercGaps$());
group.cs.setConservation$jalview_analysis_Conservation(c);
}groupColourScheme.setConservationApplied$Z(true);
groupColourScheme.setConservationInc$I(i);
} else {
groupColourScheme.setThreshold$I$Z(i, this.ap.av.isIgnoreGapsConsensus$());
}}
}this.ap.seqPanel.seqCanvas.repaint$();
});

Clazz.newMeth(C$, 'setAllGroupsCheckEnabled$Z', function (b) {
this.allGroupsCheck.setState$Z(this.ap.av.getColourAppliesToAllGroups$());
this.allGroupsCheck.setEnabled$Z(b);
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
if (evt.getSource$() === this.applyButton ) {
this.applyButton_actionPerformed$();
} else if (evt.getSource$() === this.undoButton ) {
this.undoButton_actionPerformed$();
} else if (evt.getSource$() === this.valueField ) {
this.valueField_actionPerformed$();
}});

Clazz.newMeth(C$, 'adjustmentValueChanged$java_awt_event_AdjustmentEvent', function (evt) {
this.valueField.setText$S(this.slider.getValue$() + "");
this.valueChanged$I(this.slider.getValue$());
});

Clazz.newMeth(C$, 'valueField_actionPerformed$', function () {
try {
var i=(Integer.valueOf$S(this.valueField.getText$())).valueOf();
this.slider.setValue$I(i);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
this.valueField.setText$S(String.valueOf$I(this.slider.getValue$()));
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'setValue$I', function (value) {
this.slider.setValue$I(value);
});

Clazz.newMeth(C$, 'getValue$', function () {
return Integer.parseInt$S(this.valueField.getText$());
});

Clazz.newMeth(C$, 'jbInit', function () {
this.setLayout$java_awt_LayoutManager(this.borderLayout2);
this.slider.setBackground$java_awt_Color($I$(15).white);
this.slider.setFont$java_awt_Font(Clazz.new_($I$(16,1).c$$S$I$I,["Verdana", 0, 11]));
this.slider.setOrientation$I(0);
this.valueField.setFont$java_awt_Font(Clazz.new_($I$(16,1).c$$S$I$I,["Verdana", 0, 11]));
this.valueField.setText$S("   ");
this.valueField.addActionListener$java_awt_event_ActionListener(this);
this.valueField.setColumns$I(3);
this.valueField.addFocusListener$java_awt_event_FocusListener(((P$.SliderPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliderPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
this.b$['jalview.appletgui.SliderPanel'].valueField_actionPerformed$.apply(this.b$['jalview.appletgui.SliderPanel'], []);
this.b$['jalview.appletgui.SliderPanel'].valueChanged$I.apply(this.b$['jalview.appletgui.SliderPanel'], [this.b$['jalview.appletgui.SliderPanel'].slider.getValue$()]);
});
})()
), Clazz.new_($I$(17,1),[this, null],P$.SliderPanel$3)));
this.label.setFont$java_awt_Font(Clazz.new_($I$(16,1).c$$S$I$I,["Verdana", 0, 11]));
this.label.setText$S($I$(10).getString$S("label.set_this_label_text"));
this.jPanel1.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.jPanel2.setLayout$java_awt_LayoutManager(this.flowLayout1);
this.applyButton.setFont$java_awt_Font(Clazz.new_($I$(16,1).c$$S$I$I,["Verdana", 0, 11]));
this.applyButton.setLabel$S($I$(10).getString$S("action.apply"));
this.applyButton.addActionListener$java_awt_event_ActionListener(this);
this.undoButton.setEnabled$Z(false);
this.undoButton.setFont$java_awt_Font(Clazz.new_($I$(16,1).c$$S$I$I,["Verdana", 0, 11]));
this.undoButton.setLabel$S($I$(10).getString$S("action.undo"));
this.undoButton.addActionListener$java_awt_event_ActionListener(this);
this.allGroupsCheck.setEnabled$Z(false);
this.allGroupsCheck.setFont$java_awt_Font(Clazz.new_($I$(16,1).c$$S$I$I,["Verdana", 0, 11]));
this.allGroupsCheck.setLabel$S($I$(10).getString$S("action.apply_threshold_all_groups"));
this.allGroupsCheck.setName$S($I$(10).getString$S("action.apply_all_groups"));
this.setBackground$java_awt_Color($I$(15).white);
this.setForeground$java_awt_Color($I$(15).black);
this.jPanel2.add$java_awt_Component$O(this.label, null);
this.jPanel2.add$java_awt_Component$O(this.applyButton, null);
this.jPanel2.add$java_awt_Component$O(this.undoButton, null);
this.jPanel2.add$java_awt_Component(this.allGroupsCheck);
this.jPanel1.add$java_awt_Component$O(this.valueField, "East");
this.jPanel1.add$java_awt_Component$O(this.slider, "Center");
this.add$java_awt_Component$O(this.jPanel1, "South");
this.add$java_awt_Component$O(this.jPanel2, "Center");
}, p$1);

Clazz.newMeth(C$, 'applyButton_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'undoButton_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
this.ap.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:46 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
