(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.util.MessageManager','java.awt.event.MouseAdapter','javax.swing.JInternalFrame','javax.swing.JLayeredPane','jalview.gui.Desktop','jalview.gui.SliderPanel','javax.swing.event.InternalFrameAdapter','jalview.analysis.Conservation']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SliderPanel", null, 'jalview.jbgui.GSliderPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.forConservation=true;
},1);

C$.$fields$=[['Z',['forConservation'],'O',['ap','jalview.gui.AlignmentPanel','cs','jalview.renderer.ResidueShaderI']]
,['O',['conservationSlider','javax.swing.JInternalFrame','+PIDSlider']]]

Clazz.newMeth(C$, 'getSliderPanel$', function () {
if (C$.conservationSlider != null  && C$.conservationSlider.isVisible$() ) {
return C$.conservationSlider.getContentPane$();
}if (C$.PIDSlider != null  && C$.PIDSlider.isVisible$() ) {
return C$.PIDSlider.getContentPane$();
}return null;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$I$Z$jalview_renderer_ResidueShaderI', function (ap, value, forConserve, scheme) {
Clazz.super_(C$, this);
this.ap=ap;
this.cs=scheme;
this.forConservation=forConserve;
this.undoButton.setVisible$Z(false);
this.applyButton.setVisible$Z(false);
if (this.forConservation) {
this.label.setText$S($I$(1).getString$S("label.enter_value_increase_conservation_visibility"));
this.slider.setMinimum$I(0);
this.slider.setMaximum$I(100);
} else {
this.label.setText$S($I$(1).getString$S("label.enter_percentage_identity_above_which_colour_residues"));
this.slider.setMinimum$I(0);
this.slider.setMaximum$I(100);
}this.slider.addChangeListener$javax_swing_event_ChangeListener(((P$.SliderPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliderPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (evt) {
this.b$['jalview.gui.SliderPanel'].valueField.setText$S(String.valueOf$I(this.b$['jalview.gui.SliderPanel'].slider.getValue$()));
this.b$['jalview.gui.SliderPanel'].valueChanged$I.apply(this.b$['jalview.gui.SliderPanel'], [this.b$['jalview.gui.SliderPanel'].slider.getValue$()]);
});
})()
), Clazz.new_(P$.SliderPanel$1.$init$,[this, null])));
this.slider.addMouseListener$java_awt_event_MouseListener(((P$.SliderPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliderPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
this.$finals$.ap.paintAlignment$Z$Z(true, true);
});
})()
), Clazz.new_($I$(2,1),[this, {ap:ap}],P$.SliderPanel$2)));
this.slider.setValue$I(value);
this.valueField.setText$S(String.valueOf$I(value));
}, 1);

Clazz.newMeth(C$, 'setConservationSlider$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S', function (ap, rs, source) {
var sliderPanel=null;
if (C$.conservationSlider == null ) {
sliderPanel=Clazz.new_(C$.c$$jalview_gui_AlignmentPanel$I$Z$jalview_renderer_ResidueShaderI,[ap, rs.getConservationInc$(), true, rs]);
C$.conservationSlider=Clazz.new_($I$(3,1));
C$.conservationSlider.setContentPane$java_awt_Container(sliderPanel);
C$.conservationSlider.setLayer$Integer($I$(4).PALETTE_LAYER);
} else {
sliderPanel=C$.conservationSlider.getContentPane$();
sliderPanel.valueField.setText$S(String.valueOf$I(rs.getConservationInc$()));
sliderPanel.cs=rs;
sliderPanel.ap=ap;
sliderPanel.slider.setValue$I(rs.getConservationInc$());
}C$.conservationSlider.setTitle$S($I$(1,"formatMessage$S$SA",["label.conservation_colour_increment", Clazz.array(String, -1, [source == null  ? "Background" : source])]));
var groups=ap.av.getAlignment$().getGroups$();
if (groups != null  && !groups.isEmpty$() ) {
sliderPanel.setAllGroupsCheckEnabled$Z(true);
} else {
sliderPanel.setAllGroupsCheckEnabled$Z(false);
}return sliderPanel.getValue$();
}, 1);

Clazz.newMeth(C$, 'hidePIDSlider$', function () {
if (C$.PIDSlider != null ) {
try {
C$.PIDSlider.setClosed$Z(true);
C$.PIDSlider=null;
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.PropertyVetoException")){
} else {
throw ex;
}
}
}}, 1);

Clazz.newMeth(C$, 'hideConservationSlider$', function () {
if (C$.conservationSlider != null ) {
try {
C$.conservationSlider.setClosed$Z(true);
C$.conservationSlider=null;
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.PropertyVetoException")){
} else {
throw ex;
}
}
}}, 1);

Clazz.newMeth(C$, 'showConservationSlider$', function () {
C$.hidePIDSlider$();
if (!C$.conservationSlider.isVisible$()) {
$I$(5,"addInternalFrame$javax_swing_JInternalFrame$S$Z$I$I$Z$Z",[C$.conservationSlider, C$.conservationSlider.getTitle$(), true, 420, 120, false, true]);
C$.conservationSlider.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.SliderPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliderPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (e) {
$I$(6).conservationSlider=null;
});
})()
), Clazz.new_($I$(7,1),[this, null],P$.SliderPanel$3)));
C$.conservationSlider.setLayer$Integer($I$(4).PALETTE_LAYER);
}}, 1);

Clazz.newMeth(C$, 'setPIDSliderSource$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S', function (ap, rs, source) {
var threshold=rs.getThreshold$();
var sliderPanel=null;
if (C$.PIDSlider == null ) {
sliderPanel=Clazz.new_(C$.c$$jalview_gui_AlignmentPanel$I$Z$jalview_renderer_ResidueShaderI,[ap, threshold, false, rs]);
C$.PIDSlider=Clazz.new_($I$(3,1));
C$.PIDSlider.setContentPane$java_awt_Container(sliderPanel);
C$.PIDSlider.setLayer$Integer($I$(4).PALETTE_LAYER);
} else {
sliderPanel=C$.PIDSlider.getContentPane$();
sliderPanel.cs=rs;
sliderPanel.ap=ap;
sliderPanel.valueField.setText$S(String.valueOf$I(rs.getThreshold$()));
sliderPanel.slider.setValue$I(rs.getThreshold$());
}C$.PIDSlider.setTitle$S($I$(1,"formatMessage$S$SA",["label.percentage_identity_threshold", Clazz.array(String, -1, [source == null  ? "Background" : source])]));
if (ap.av.getAlignment$().getGroups$() != null ) {
sliderPanel.setAllGroupsCheckEnabled$Z(true);
} else {
sliderPanel.setAllGroupsCheckEnabled$Z(false);
}return sliderPanel.getValue$();
}, 1);

Clazz.newMeth(C$, 'showPIDSlider$', function () {
C$.hideConservationSlider$();
if (!C$.PIDSlider.isVisible$()) {
$I$(5,"addInternalFrame$javax_swing_JInternalFrame$S$Z$I$I$Z$Z",[C$.PIDSlider, C$.PIDSlider.getTitle$(), true, 420, 120, false, true]);
C$.PIDSlider.setLayer$Integer($I$(4).PALETTE_LAYER);
C$.PIDSlider.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.SliderPanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliderPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (e) {
$I$(6).PIDSlider=null;
});
})()
), Clazz.new_($I$(7,1),[this, null],P$.SliderPanel$4)));
C$.PIDSlider.setLayer$Integer($I$(4).PALETTE_LAYER);
}return C$.PIDSlider;
}, 1);

Clazz.newMeth(C$, 'valueChanged$I', function (percent) {
if (!this.forConservation) {
this.ap.av.setThreshold$I(percent);
}this.updateColourScheme$I$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceGroup(percent, this.cs, null);
if (this.allGroupsCheck.isSelected$()) {
var groups=this.ap.av.getAlignment$().getGroups$();
for (var sg, $sg = groups.iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
this.updateColourScheme$I$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceGroup(percent, sg.getGroupColourScheme$(), sg);
}
}this.ap.getSeqPanel$().seqCanvas.repaint$();
});

Clazz.newMeth(C$, 'updateColourScheme$I$jalview_renderer_ResidueShaderI$jalview_datamodel_SequenceGroup', function (percent, scheme, sg) {
if (scheme == null ) {
return;
}if (this.forConservation) {
if (!scheme.conservationApplied$() && sg != null  ) {
var c=Clazz.new_(["Group", sg.getSequences$java_util_Map(null), sg.getStartRes$(), sg.getEndRes$()],$I$(8,1).c$$S$java_util_List$I$I);
c.calculate$();
c.verdict$Z$F(false, this.ap.av.getConsPercGaps$());
sg.cs.setConservation$jalview_analysis_Conservation(c);
}scheme.setConservationApplied$Z(true);
scheme.setConservationInc$I(percent);
} else {
scheme.setThreshold$I$Z(percent, this.ap.av.isIgnoreGapsConsensus$());
}});

Clazz.newMeth(C$, 'setAllGroupsCheckEnabled$Z', function (b) {
this.allGroupsCheck.setEnabled$Z(b);
});

Clazz.newMeth(C$, 'valueField_actionPerformed$', function () {
try {
var i=Integer.parseInt$S(this.valueField.getText$());
this.slider.setValue$I(i);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
this.valueField.setText$S(this.slider.getValue$() + "");
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

Clazz.newMeth(C$, 'slider_mouseReleased$java_awt_event_MouseEvent', function (e) {
if (this.ap.overviewPanel != null ) {
this.ap.overviewPanel.updateOverviewImage$();
}});

Clazz.newMeth(C$, 'getConservationValue$', function () {
return C$.getValue$javax_swing_JInternalFrame(C$.conservationSlider);
}, 1);

Clazz.newMeth(C$, 'getValue$javax_swing_JInternalFrame', function (slider) {
return slider == null  ? 0 : (slider.getContentPane$()).getValue$();
}, 1);

Clazz.newMeth(C$, 'getPIDValue$', function () {
return C$.getValue$javax_swing_JInternalFrame(C$.PIDSlider);
}, 1);

Clazz.newMeth(C$, 'isForConservation$', function () {
return this.forConservation;
});

Clazz.newMeth(C$, 'getTitle$', function () {
var title=null;
if (this.isForConservation$()) {
if (C$.conservationSlider != null ) {
title=C$.conservationSlider.getTitle$();
}} else if (C$.PIDSlider != null ) {
title=C$.PIDSlider.getTitle$();
}return title;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
