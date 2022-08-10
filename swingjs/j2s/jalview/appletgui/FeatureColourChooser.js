(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.awt.Panel','java.awt.Choice','java.awt.Scrollbar','java.awt.TextField','java.awt.Checkbox','jalview.datamodel.GraphLine','java.awt.Color','jalview.schemes.FeatureColour','jalview.appletgui.JVDialog','jalview.util.MessageManager','java.awt.Label','java.awt.Font','java.awt.GridLayout','java.awt.FlowLayout','java.awt.event.FocusAdapter','java.awt.Dimension','jalview.appletgui.PaintRefresher','jalview.appletgui.UserDefinedColours']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureColourChooser", null, 'java.awt.Panel', ['java.awt.event.ActionListener', 'java.awt.event.AdjustmentListener', 'java.awt.event.ItemListener', 'java.awt.event.MouseListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fs=null;
this.adjusting=false;
this.type=null;
this.af=null;
this.minColour=Clazz.new_($I$(1,1));
this.maxColour=Clazz.new_($I$(1,1));
this.threshold=Clazz.new_($I$(2,1));
this.slider=Clazz.new_($I$(3,1).c$$I,[0]);
this.thresholdValue=Clazz.new_($I$(4,1).c$$I,[20]);
this.thresholdIsMin=Clazz.new_($I$(5,1));
this.colourFromLabel=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['Z',['adjusting'],'F',['min','max'],'S',['type'],'O',['frame','jalview.appletgui.JVDialog','owner','java.awt.Frame','fr','jalview.appletgui.FeatureRenderer','fs','jalview.appletgui.FeatureSettings','cs','jalview.api.FeatureColourI','+oldcs','af','jalview.appletgui.AlignFrame','minColour','java.awt.Panel','+maxColour','threshold','java.awt.Choice','slider','java.awt.Scrollbar','thresholdValue','java.awt.TextField','thresholdIsMin','java.awt.Checkbox','+colourFromLabel','threshline','jalview.datamodel.GraphLine']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignFrame$S',  function (alignFrame, featureType) {
Clazz.super_(C$, this);
this.af=alignFrame;
p$1.init$jalview_appletgui_FeatureRenderer$S.apply(this, [alignFrame.getSeqcanvas$().getFeatureRenderer$(), featureType]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_FeatureSettings$S',  function (fsettings, featureType) {
Clazz.super_(C$, this);
this.fs=fsettings;
p$1.init$jalview_appletgui_FeatureRenderer$S.apply(this, [fsettings.fr, featureType]);
}, 1);

Clazz.newMeth(C$, 'init$jalview_appletgui_FeatureRenderer$S',  function (frenderer, featureType) {
this.type=featureType;
this.fr=frenderer;
var mm=this.fr.getMinMax$().get$O(this.type)[0];
this.min=mm[0];
this.max=mm[1];
this.threshline=Clazz.new_([(this.max - this.min) / 2.0, "Threshold", $I$(7).black],$I$(6,1).c$$F$S$java_awt_Color);
this.oldcs=this.fr.getFeatureColours$().get$O(this.type);
if (this.oldcs.isGraduatedColour$()) {
this.threshline.value=this.oldcs.getThreshold$();
this.cs=Clazz.new_([this.oldcs.getColour$(), this.oldcs.getMinColour$(), this.oldcs.getMaxColour$(), this.oldcs.getNoColour$(), this.min, this.max],$I$(8,1).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$F$F);
} else {
var bl=$I$(7).black;
if (this.oldcs.isSimpleColour$()) {
bl=this.oldcs.getColour$();
}this.cs=Clazz.new_([bl, $I$(7).white, bl, $I$(7).white, mm[0], mm[1]],$I$(8,1).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$F$F);
}this.minColour.setBackground$java_awt_Color(this.cs.getMinColour$());
this.maxColour.setBackground$java_awt_Color(this.cs.getMaxColour$());
this.minColour.setForeground$java_awt_Color(this.cs.getMinColour$());
this.maxColour.setForeground$java_awt_Color(this.cs.getMaxColour$());
this.colourFromLabel.setState$Z(this.cs.isColourByLabel$());
this.adjusting=true;
try {
p$1.jbInit.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
this.threshold.select$I(this.cs.isAboveThreshold$() ? 1 : (this.cs.isBelowThreshold$() ? 2 : 0));
this.adjusting=false;
this.changeColour$Z(true);
this.colourFromLabel.addItemListener$java_awt_event_ItemListener(this);
this.slider.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this.slider.addMouseListener$java_awt_event_MouseListener(this);
this.owner=(this.af != null ) ? this.af : this.fs.frame;
this.frame=Clazz.new_([this.owner, $I$(10,"formatMessage$S$SA",["label.variable_color_for", Clazz.array(String, -1, [this.type])]), true, 480, 248],$I$(9,1).c$$java_awt_Frame$S$Z$I$I);
this.frame.setMainPanel$java_awt_Panel(this);
this.validate$();
this.frame.setVisible$Z(true);
if (this.frame.accept) {
this.changeColour$Z(true);
} else {
this.reset$();
this.frame.setVisible$Z(false);
}}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
try {
p$1.jbInit.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'jbInit',  function () {
var minLabel=Clazz.new_([$I$(10).getString$S("label.min_value") + ":"],$I$(11,1).c$$S);
var maxLabel=Clazz.new_([$I$(10).getString$S("label.max_value") + ":"],$I$(11,1).c$$S);
minLabel.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 11]));
maxLabel.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 11]));
this.minColour.setBounds$I$I$I$I(0, 0, 40, 27);
this.maxColour.setBounds$I$I$I$I(0, 0, 40, 27);
this.minColour.addMouseListener$java_awt_event_MouseListener(this);
this.maxColour.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 11]));
this.maxColour.addMouseListener$java_awt_event_MouseListener(this);
this.thresholdIsMin.addItemListener$java_awt_event_ItemListener(this);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I,[4, 1]));
var jPanel1=Clazz.new_($I$(1,1));
jPanel1.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1)));
var jPanel2=Clazz.new_($I$(1,1));
jPanel2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1)));
var jPanel3=Clazz.new_($I$(1,1));
jPanel3.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I,[1, 1]));
var jPanel4=Clazz.new_($I$(1,1));
jPanel4.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1)));
jPanel1.setBackground$java_awt_Color($I$(7).white);
jPanel2.setBackground$java_awt_Color($I$(7).white);
jPanel4.setBackground$java_awt_Color($I$(7).white);
this.threshold.addItemListener$java_awt_event_ItemListener(this);
this.threshold.addItem$S($I$(10).getString$S("label.threshold_feature_no_threshold"));
this.threshold.addItem$S($I$(10).getString$S("label.threshold_feature_above_threshold"));
this.threshold.addItem$S($I$(10).getString$S("label.threshold_feature_below_threshold"));
this.thresholdValue.addActionListener$java_awt_event_ActionListener(this);
this.thresholdValue.addFocusListener$java_awt_event_FocusListener(((P$.FeatureColourChooser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureColourChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['jalview.appletgui.FeatureColourChooser'].thresholdValue_actionPerformed$.apply(this.b$['jalview.appletgui.FeatureColourChooser'], []);
});
})()
), Clazz.new_($I$(15,1),[this, null],P$.FeatureColourChooser$1)));
this.slider.setBackground$java_awt_Color($I$(7).white);
this.slider.setEnabled$Z(false);
this.slider.setSize$java_awt_Dimension(Clazz.new_($I$(16,1).c$$I$I,[93, 21]));
this.thresholdValue.setEnabled$Z(false);
this.thresholdValue.setSize$java_awt_Dimension(Clazz.new_($I$(16,1).c$$I$I,[79, 22]));
this.thresholdValue.setColumns$I(5);
jPanel3.setBackground$java_awt_Color($I$(7).white);
this.colourFromLabel.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 11]));
this.colourFromLabel.setLabel$S($I$(10).getString$S("label.colour_by_label"));
this.colourFromLabel.setSize$java_awt_Dimension(Clazz.new_($I$(16,1).c$$I$I,[139, 22]));
this.thresholdIsMin.setBackground$java_awt_Color($I$(7).white);
this.thresholdIsMin.setLabel$S($I$(10).getString$S("label.threshold_minmax"));
this.thresholdIsMin.setSize$java_awt_Dimension(Clazz.new_($I$(16,1).c$$I$I,[135, 23]));
jPanel1.add$java_awt_Component(minLabel);
jPanel1.add$java_awt_Component(this.minColour);
jPanel1.add$java_awt_Component(maxLabel);
jPanel1.add$java_awt_Component(this.maxColour);
jPanel1.add$java_awt_Component(this.colourFromLabel);
jPanel2.add$java_awt_Component(this.threshold);
jPanel3.add$java_awt_Component(this.slider);
jPanel4.add$java_awt_Component(this.thresholdValue);
jPanel4.add$java_awt_Component(this.thresholdIsMin);
this.add$java_awt_Component(jPanel1);
this.add$java_awt_Component(jPanel2);
this.add$java_awt_Component(jPanel3);
this.add$java_awt_Component(jPanel4);
}, p$1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
if (evt.getSource$() === this.thresholdValue ) {
this.thresholdValue_actionPerformed$();
} else if (evt.getSource$() === this.minColour ) {
this.minColour_actionPerformed$java_awt_Color(null);
} else if (evt.getSource$() === this.maxColour ) {
this.maxColour_actionPerformed$java_awt_Color(null);
} else {
this.changeColour$Z(true);
}});

Clazz.newMeth(C$, 'thresholdValue_actionPerformed$',  function () {
try {
var f=Float.valueOf$S(this.thresholdValue.getText$()).floatValue$();
this.slider.setValue$I(((f * 1000)|0));
this.adjustmentValueChanged$java_awt_event_AdjustmentEvent(null);
this.changeColour$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (evt) {
this.maxColour.setEnabled$Z(!this.colourFromLabel.getState$());
this.minColour.setEnabled$Z(!this.colourFromLabel.getState$());
this.changeColour$Z(true);
});

Clazz.newMeth(C$, 'adjustmentValueChanged$java_awt_event_AdjustmentEvent',  function (evt) {
if (!this.adjusting) {
this.thresholdValue.setText$S((new Float(this.slider.getValue$() / 1000.0).toString()) + "");
this.valueChanged$();
}});

Clazz.newMeth(C$, 'valueChanged$',  function () {
this.threshline.value=this.slider.getValue$() / 1000.0;
this.cs.setThreshold$F(this.threshline.value);
this.changeColour$Z(false);
$I$(17,"Refresh$java_awt_Component$S",[this, this.fr.getViewport$().getSequenceSetId$()]);
});

Clazz.newMeth(C$, 'minColour_actionPerformed$java_awt_Color',  function (newCol) {
if (newCol == null ) {
Clazz.new_([this, this.minColour.getBackground$(), this.owner, $I$(10).getString$S("label.select_colour_minimum_value")],$I$(18,1).c$$java_awt_Component$java_awt_Color$java_awt_Frame$S);
} else {
this.minColour.setBackground$java_awt_Color(newCol);
this.minColour.setForeground$java_awt_Color(newCol);
this.minColour.repaint$();
this.changeColour$Z(true);
}});

Clazz.newMeth(C$, 'maxColour_actionPerformed$java_awt_Color',  function (newCol) {
if (newCol == null ) {
Clazz.new_([this, this.maxColour.getBackground$(), this.owner, $I$(10).getString$S("label.select_colour_maximum_value")],$I$(18,1).c$$java_awt_Component$java_awt_Color$java_awt_Frame$S);
} else {
this.maxColour.setBackground$java_awt_Color(newCol);
this.maxColour.setForeground$java_awt_Color(newCol);
this.maxColour.repaint$();
this.changeColour$Z(true);
}});

Clazz.newMeth(C$, 'changeColour$Z',  function (updateOverview) {
if (this.adjusting) {
return;
}var thresholdOption=-1;
if (this.threshold.getSelectedIndex$() == 1) {
thresholdOption=1;
} else if (this.threshold.getSelectedIndex$() == 2) {
thresholdOption=0;
}this.slider.setEnabled$Z(true);
this.thresholdValue.setEnabled$Z(true);
var minc=this.minColour.getBackground$();
var maxc=this.maxColour.getBackground$();
var acg=Clazz.new_($I$(8,1).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$F$F,[maxc, minc, maxc, minc, this.min, this.max]);
acg.setColourByLabel$Z(this.colourFromLabel.getState$());
this.maxColour.setEnabled$Z(!this.colourFromLabel.getState$());
this.minColour.setEnabled$Z(!this.colourFromLabel.getState$());
if (thresholdOption == -1) {
this.slider.setEnabled$Z(false);
this.thresholdValue.setEnabled$Z(false);
this.thresholdValue.setText$S("");
}if (thresholdOption != -1) {
this.adjusting=true;
acg.setThreshold$F(this.threshline.value);
this.slider.setMinimum$I(((this.min * 1000)|0));
this.slider.setMaximum$I(((this.max * 1000)|0));
this.slider.setValue$I(((this.threshline.value * 1000)|0));
this.thresholdValue.setText$S(new Float(this.threshline.value).toString() + "");
this.slider.setEnabled$Z(true);
this.thresholdValue.setEnabled$Z(true);
this.adjusting=false;
}acg.setAboveThreshold$Z(thresholdOption == 1);
acg.setBelowThreshold$Z(thresholdOption == 0);
if (this.thresholdIsMin.getState$() && thresholdOption != -1 ) {
if (thresholdOption == 1) {
acg=Clazz.new_([acg.getColour$(), acg.getMinColour$(), acg.getMaxColour$(), acg.getNoColour$(), this.threshline.value, this.max],$I$(8,1).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$F$F);
} else {
acg=Clazz.new_([acg.getColour$(), acg.getMinColour$(), acg.getMaxColour$(), acg.getNoColour$(), this.min, this.threshline.value],$I$(8,1).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$F$F);
}}this.fr.setColour$S$jalview_api_FeatureColourI(this.type, acg);
this.cs=acg;
this.fs.selectionChanged$Z(updateOverview);
});

Clazz.newMeth(C$, 'reset$',  function () {
this.fr.setColour$S$jalview_api_FeatureColourI(this.type, this.oldcs);
this.fs.selectionChanged$Z(true);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
if (evt.getSource$() === this.minColour ) {
this.minColour_actionPerformed$java_awt_Color(null);
} else if (evt.getSource$() === this.maxColour ) {
this.maxColour_actionPerformed$java_awt_Color(null);
} else {
this.changeColour$Z(true);
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (evt) {
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:27 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
