(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.util.MessageManager','java.text.DecimalFormat','javax.swing.JRadioButton','javax.swing.JPanel','javax.swing.JComboBox','javax.swing.JSlider','javax.swing.JTextField','javax.swing.JCheckBox','jalview.datamodel.features.FeatureMatcher','jalview.datamodel.GraphLine','java.awt.Color','java.awt.BorderLayout','jalview.datamodel.features.FeatureAttributes','javax.swing.BoxLayout','jalview.gui.JvSwingUtils','java.awt.FlowLayout','java.awt.Dimension','javax.swing.BorderFactory','java.awt.event.MouseAdapter','javax.swing.border.LineBorder','jalview.util.ColorUtils','javax.swing.JLabel','java.awt.event.FocusAdapter','javax.swing.ButtonGroup','jalview.gui.JalviewColourChooser','jalview.schemes.FeatureColour','java.awt.event.ActionEvent','java.util.ArrayList','java.awt.GridLayout','javax.swing.JButton','javax.swing.border.EmptyBorder','jalview.util.matcher.Condition',['jalview.datamodel.features.FeatureAttributes','.Datatype'],'jalview.bin.Cache','jalview.datamodel.features.FeatureMatcherSet','jalview.gui.Desktop']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureTypeSettings", null, 'jalview.gui.JalviewDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.adjusting=false;
this.simpleColour=Clazz.new_($I$(3,1));
this.byCategory=Clazz.new_($I$(3,1));
this.graduatedColour=Clazz.new_($I$(3,1));
this.singleColour=Clazz.new_($I$(4,1));
this.minColour=Clazz.new_($I$(4,1));
this.maxColour=Clazz.new_($I$(4,1));
this.threshold=Clazz.new_($I$(5,1));
this.slider=Clazz.new_($I$(6,1));
this.thresholdValue=Clazz.new_($I$(7,1).c$$I,[20]);
this.thresholdIsMin=Clazz.new_($I$(8,1));
this.featureSettings=null;
},1);

C$.$fields$=[['Z',['adjusting'],'F',['min','max','scaleFactor'],'S',['featureType'],'O',['fr','jalview.gui.FeatureRenderer','ap','jalview.api.AlignmentViewPanel','originalColour','jalview.api.FeatureColourI','originalFilter','jalview.datamodel.features.FeatureMatcherSetI','simpleColour','javax.swing.JRadioButton','+byCategory','+graduatedColour','coloursPanel','javax.swing.JPanel','+filtersPanel','+singleColour','+minColour','+maxColour','threshold','javax.swing.JComboBox','slider','javax.swing.JSlider','thresholdValue','javax.swing.JTextField','thresholdIsMin','javax.swing.JCheckBox','threshline','jalview.datamodel.GraphLine','featureSettings','java.awt.event.ActionListener','+changeColourAction','noValueCombo','javax.swing.JComboBox','+colourByTextCombo','+colourByRangeCombo','andFilters','javax.swing.JRadioButton','+orFilters','filters','java.util.List','chooseFiltersPanel','javax.swing.JPanel']]
,['S',['LABEL_18N','SCORE_18N'],'O',['DECFMT_2_2','java.text.DecimalFormat']]]

Clazz.newMeth(C$, 'c$$jalview_gui_FeatureRenderer$S', function (frender, theType) {
Clazz.super_(C$, this);
this.fr=frender;
this.featureType=theType;
this.ap=this.fr.ap;
this.originalFilter=this.fr.getFeatureFilter$S(theType);
this.originalColour=this.fr.getFeatureColours$().get$O(theType);
this.adjusting=true;
try {
p$1.initialise.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
return;
} else {
throw ex;
}
}
p$1.updateColoursPanel.apply(this, []);
p$1.updateFiltersPanel.apply(this, []);
this.adjusting=false;
this.colourChanged$Z(false);
var title=$I$(1,"formatMessage$S$SA",["label.display_settings_for", Clazz.array(String, -1, [theType])]);
this.initDialogFrame$java_awt_Container$Z$Z$S$I$I(this, true, false, title, 580, 500);
this.waitForInput$();
}, 1);

Clazz.newMeth(C$, 'updateColoursPanel', function () {
var fc=this.fr.getFeatureColours$().get$O(this.featureType);
this.adjusting=true;
try {
if (fc.isSimpleColour$()) {
this.singleColour.setBackground$java_awt_Color(fc.getColour$());
this.singleColour.setForeground$java_awt_Color(fc.getColour$());
this.simpleColour.setSelected$Z(true);
}if (fc.isColourByLabel$()) {
this.byCategory.setSelected$Z(true);
this.colourByTextCombo.setEnabled$Z(this.colourByTextCombo.getItemCount$() > 1);
if (fc.isColourByAttribute$()) {
var attributeName=fc.getAttributeName$();
this.colourByTextCombo.setSelectedItem$O($I$(9).toAttributeDisplayName$SA(attributeName));
} else {
this.colourByTextCombo.setSelectedItem$O(C$.LABEL_18N);
}} else {
this.colourByTextCombo.setEnabled$Z(false);
}if (!fc.isGraduatedColour$()) {
this.colourByRangeCombo.setEnabled$Z(false);
this.minColour.setEnabled$Z(false);
this.maxColour.setEnabled$Z(false);
this.noValueCombo.setEnabled$Z(false);
this.threshold.setEnabled$Z(false);
this.slider.setEnabled$Z(false);
this.thresholdValue.setEnabled$Z(false);
this.thresholdIsMin.setEnabled$Z(false);
return;
}this.graduatedColour.setSelected$Z(true);
this.updateColourMinMax$();
this.colourByRangeCombo.setEnabled$Z(this.colourByRangeCombo.getItemCount$() > 1);
this.minColour.setEnabled$Z(true);
this.maxColour.setEnabled$Z(true);
this.noValueCombo.setEnabled$Z(true);
this.threshold.setEnabled$Z(true);
this.minColour.setBackground$java_awt_Color(fc.getMinColour$());
this.maxColour.setBackground$java_awt_Color(fc.getMaxColour$());
if (fc.isColourByAttribute$()) {
var attributeName=fc.getAttributeName$();
this.colourByRangeCombo.setSelectedItem$O($I$(9).toAttributeDisplayName$SA(attributeName));
} else {
this.colourByRangeCombo.setSelectedItem$O(C$.SCORE_18N);
}var noColour=fc.getNoColour$();
if (noColour == null ) {
this.noValueCombo.setSelectedIndex$I(0);
} else if (noColour.equals$O(fc.getMinColour$())) {
this.noValueCombo.setSelectedIndex$I(1);
} else if (noColour.equals$O(fc.getMaxColour$())) {
this.noValueCombo.setSelectedIndex$I(2);
}this.scaleFactor=(this.max == this.min ) ? 1.0 : 100.0 / (this.max - this.min);
var range=(this.max - this.min) * this.scaleFactor;
this.slider.setMinimum$I(((this.min * this.scaleFactor)|0));
this.slider.setMaximum$I(((this.max * this.scaleFactor)|0));
this.slider.setMajorTickSpacing$I(((range / 10.0)|0));
this.threshline=Clazz.new_([(this.max - this.min) / 2.0, "Threshold", $I$(11).black],$I$(10,1).c$$F$S$java_awt_Color);
this.threshline.value=fc.getThreshold$();
if (fc.hasThreshold$()) {
this.threshold.setSelectedIndex$I(fc.isAboveThreshold$() ? 1 : 2);
this.slider.setEnabled$Z(true);
this.slider.setValue$I(((fc.getThreshold$() * this.scaleFactor)|0));
this.thresholdValue.setText$S(String.valueOf$F(fc.getThreshold$()));
this.thresholdValue.setEnabled$Z(true);
this.thresholdIsMin.setEnabled$Z(true);
} else {
this.slider.setEnabled$Z(false);
this.thresholdValue.setEnabled$Z(false);
this.thresholdIsMin.setEnabled$Z(false);
}this.thresholdIsMin.setSelected$Z(!fc.isAutoScaled$());
} finally {
this.adjusting=false;
}
}, p$1);

Clazz.newMeth(C$, 'initialise', function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1)));
this.changeColourAction=((P$.FeatureTypeSettings$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.FeatureTypeSettings'].colourChanged$Z.apply(this.b$['jalview.gui.FeatureTypeSettings'], [true]);
});
})()
), Clazz.new_(P$.FeatureTypeSettings$1.$init$,[this, null]));
var coloursPanel=p$1.initialiseColoursPanel.apply(this, []);
this.add$java_awt_Component$O(coloursPanel, "North");
var filtersPanel=p$1.initialiseFiltersPanel.apply(this, []);
this.add$java_awt_Component$O(filtersPanel, "Center");
var okCancelPanel=p$1.initialiseOkCancelPanel.apply(this, []);
this.add$java_awt_Component$O(okCancelPanel, "South");
}, p$1);

Clazz.newMeth(C$, 'updateColourMinMax$', function () {
if (!this.graduatedColour.isSelected$()) {
return;
}var colourBy=this.colourByRangeCombo.getSelectedItem$();
var minMax=p$1.getMinMax$S.apply(this, [colourBy]);
if (minMax != null ) {
this.min=minMax[0];
this.max=minMax[1];
}});

Clazz.newMeth(C$, 'getMinMax$S', function (attName) {
var minMax=null;
if (C$.SCORE_18N.equals$O(attName)) {
minMax=this.fr.getMinMax$().get$O(this.featureType)[0];
} else {
minMax=$I$(13).getInstance$().getMinMax$S$SA(this.featureType, $I$(9).fromAttributeDisplayName$S(attName));
}return minMax;
}, p$1);

Clazz.newMeth(C$, 'initialiseGraduatedColourPanel', function () {
var graduatedColourPanel=Clazz.new_($I$(4,1));
graduatedColourPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1).c$$java_awt_Container$I,[graduatedColourPanel, 1]));
$I$(15,"createTitledBorder$javax_swing_JComponent$S$Z",[graduatedColourPanel, $I$(1).getString$S("label.graduated_colour"), true]);
graduatedColourPanel.setBackground$java_awt_Color($I$(11).white);
var graduatedChoicePanel=Clazz.new_([Clazz.new_($I$(16,1).c$$I,[0])],$I$(4,1).c$$java_awt_LayoutManager);
graduatedChoicePanel.setBackground$java_awt_Color($I$(11).white);
this.graduatedColour=Clazz.new_([$I$(1).getString$S("label.by_range_of") + ":"],$I$(3,1).c$$S);
this.graduatedColour.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[130, 20]));
this.graduatedColour.setOpaque$Z(false);
this.graduatedColour.addItemListener$java_awt_event_ItemListener(((P$.FeatureTypeSettings$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
if (this.b$['jalview.gui.FeatureTypeSettings'].graduatedColour.isSelected$()) {
this.b$['jalview.gui.FeatureTypeSettings'].colourChanged$Z.apply(this.b$['jalview.gui.FeatureTypeSettings'], [true]);
}});
})()
), Clazz.new_(P$.FeatureTypeSettings$2.$init$,[this, null])));
graduatedChoicePanel.add$java_awt_Component(this.graduatedColour);
var attNames=$I$(13).getInstance$().getAttributes$S(this.featureType);
this.colourByRangeCombo=this.populateAttributesDropdown$java_util_List$Z$Z(attNames, true, false);
this.colourByRangeCombo.addItemListener$java_awt_event_ItemListener(((P$.FeatureTypeSettings$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
this.b$['jalview.gui.FeatureTypeSettings'].colourChanged$Z.apply(this.b$['jalview.gui.FeatureTypeSettings'], [true]);
});
})()
), Clazz.new_(P$.FeatureTypeSettings$3.$init$,[this, null])));
this.graduatedColour.setEnabled$Z(this.colourByRangeCombo.getItemCount$() > 0);
graduatedChoicePanel.add$java_awt_Component(this.colourByRangeCombo);
graduatedColourPanel.add$java_awt_Component(graduatedChoicePanel);
var colourRangePanel=Clazz.new_([Clazz.new_($I$(16,1).c$$I,[0])],$I$(4,1).c$$java_awt_LayoutManager);
colourRangePanel.setBackground$java_awt_Color($I$(11).white);
graduatedColourPanel.add$java_awt_Component(colourRangePanel);
this.minColour.setFont$java_awt_Font($I$(15).getLabelFont$());
this.minColour.setBorder$javax_swing_border_Border($I$(18,"createLineBorder$java_awt_Color",[$I$(11).black]));
this.minColour.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[40, 20]));
this.minColour.setToolTipText$S($I$(1).getString$S("label.min_colour"));
this.minColour.addMouseListener$java_awt_event_MouseListener(((P$.FeatureTypeSettings$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
if (this.b$['jalview.gui.FeatureTypeSettings'].minColour.isEnabled$()) {
var ttl=$I$(1).getString$S("label.select_colour_minimum_value");
this.b$['jalview.gui.FeatureTypeSettings'].showColourChooser$javax_swing_JPanel$S.apply(this.b$['jalview.gui.FeatureTypeSettings'], [this.b$['jalview.gui.FeatureTypeSettings'].minColour, ttl]);
}});
})()
), Clazz.new_($I$(19,1),[this, null],P$.FeatureTypeSettings$4)));
this.maxColour.setFont$java_awt_Font($I$(15).getLabelFont$());
this.maxColour.setBorder$javax_swing_border_Border($I$(18,"createLineBorder$java_awt_Color",[$I$(11).black]));
this.maxColour.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[40, 20]));
this.maxColour.setToolTipText$S($I$(1).getString$S("label.max_colour"));
this.maxColour.addMouseListener$java_awt_event_MouseListener(((P$.FeatureTypeSettings$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
if (this.b$['jalview.gui.FeatureTypeSettings'].maxColour.isEnabled$()) {
var ttl=$I$(1).getString$S("label.select_colour_maximum_value");
this.b$['jalview.gui.FeatureTypeSettings'].showColourChooser$javax_swing_JPanel$S.apply(this.b$['jalview.gui.FeatureTypeSettings'], [this.b$['jalview.gui.FeatureTypeSettings'].maxColour, ttl]);
}});
})()
), Clazz.new_($I$(19,1),[this, null],P$.FeatureTypeSettings$5)));
this.maxColour.setBorder$javax_swing_border_Border(Clazz.new_([$I$(11).black],$I$(20,1).c$$java_awt_Color));
var max=this.originalColour.getMaxColour$();
if (max == null ) {
max=this.originalColour.getColour$();
this.minColour.setBackground$java_awt_Color($I$(21).bleachColour$java_awt_Color$F(max, 0.9));
} else {
this.maxColour.setBackground$java_awt_Color(max);
this.minColour.setBackground$java_awt_Color(this.originalColour.getMinColour$());
}this.noValueCombo=Clazz.new_($I$(5,1));
this.noValueCombo.addItem$O($I$(1).getString$S("label.no_colour"));
this.noValueCombo.addItem$O($I$(1).getString$S("label.min_colour"));
this.noValueCombo.addItem$O($I$(1).getString$S("label.max_colour"));
this.noValueCombo.addItemListener$java_awt_event_ItemListener(((P$.FeatureTypeSettings$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
this.b$['jalview.gui.FeatureTypeSettings'].colourChanged$Z.apply(this.b$['jalview.gui.FeatureTypeSettings'], [true]);
});
})()
), Clazz.new_(P$.FeatureTypeSettings$6.$init$,[this, null])));
var minText=Clazz.new_([$I$(1).getString$S("label.min_value") + ":"],$I$(22,1).c$$S);
minText.setFont$java_awt_Font($I$(15).getLabelFont$());
var maxText=Clazz.new_([$I$(1).getString$S("label.max_value") + ":"],$I$(22,1).c$$S);
maxText.setFont$java_awt_Font($I$(15).getLabelFont$());
var noText=Clazz.new_([$I$(1).getString$S("label.no_value") + ":"],$I$(22,1).c$$S);
noText.setFont$java_awt_Font($I$(15).getLabelFont$());
colourRangePanel.add$java_awt_Component(minText);
colourRangePanel.add$java_awt_Component(this.minColour);
colourRangePanel.add$java_awt_Component(maxText);
colourRangePanel.add$java_awt_Component(this.maxColour);
colourRangePanel.add$java_awt_Component(noText);
colourRangePanel.add$java_awt_Component(this.noValueCombo);
var thresholdPanel=Clazz.new_([Clazz.new_($I$(16,1).c$$I,[0])],$I$(4,1).c$$java_awt_LayoutManager);
thresholdPanel.setBackground$java_awt_Color($I$(11).white);
graduatedColourPanel.add$java_awt_Component(thresholdPanel);
this.threshold.addActionListener$java_awt_event_ActionListener(this.changeColourAction);
this.threshold.setToolTipText$S($I$(1).getString$S("label.threshold_feature_display_by_score"));
this.threshold.addItem$O($I$(1).getString$S("label.threshold_feature_no_threshold"));
this.threshold.addItem$O($I$(1).getString$S("label.threshold_feature_above_threshold"));
this.threshold.addItem$O($I$(1).getString$S("label.threshold_feature_below_threshold"));
this.thresholdValue.addActionListener$java_awt_event_ActionListener(((P$.FeatureTypeSettings$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.FeatureTypeSettings'].thresholdValue_actionPerformed$.apply(this.b$['jalview.gui.FeatureTypeSettings'], []);
});
})()
), Clazz.new_(P$.FeatureTypeSettings$7.$init$,[this, null])));
this.thresholdValue.addFocusListener$java_awt_event_FocusListener(((P$.FeatureTypeSettings$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
this.b$['jalview.gui.FeatureTypeSettings'].thresholdValue_actionPerformed$.apply(this.b$['jalview.gui.FeatureTypeSettings'], []);
});
})()
), Clazz.new_($I$(23,1),[this, null],P$.FeatureTypeSettings$8)));
this.slider.setPaintLabels$Z(false);
this.slider.setPaintTicks$Z(true);
this.slider.setBackground$java_awt_Color($I$(11).white);
this.slider.setEnabled$Z(false);
this.slider.setOpaque$Z(false);
this.slider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[100, 32]));
this.slider.setToolTipText$S($I$(1).getString$S("label.adjust_threshold"));
this.slider.addChangeListener$javax_swing_event_ChangeListener(((P$.FeatureTypeSettings$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (evt) {
if (!this.b$['jalview.gui.FeatureTypeSettings'].adjusting) {
this.b$['jalview.gui.FeatureTypeSettings'].thresholdValue.setText$S(String.valueOf$F(this.b$['jalview.gui.FeatureTypeSettings'].slider.getValue$() / this.b$['jalview.gui.FeatureTypeSettings'].scaleFactor));
this.b$['jalview.gui.FeatureTypeSettings'].thresholdValue.setBackground$java_awt_Color($I$(11).white);
this.b$['jalview.gui.FeatureTypeSettings'].sliderValueChanged$.apply(this.b$['jalview.gui.FeatureTypeSettings'], []);
}});
})()
), Clazz.new_(P$.FeatureTypeSettings$9.$init$,[this, null])));
this.slider.addMouseListener$java_awt_event_MouseListener(((P$.FeatureTypeSettings$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
if (this.b$['jalview.gui.FeatureTypeSettings'].ap != null ) {
this.b$['jalview.gui.FeatureTypeSettings'].refreshDisplay$Z.apply(this.b$['jalview.gui.FeatureTypeSettings'], [true]);
}});
})()
), Clazz.new_($I$(19,1),[this, null],P$.FeatureTypeSettings$10)));
this.thresholdValue.setEnabled$Z(false);
this.thresholdValue.setColumns$I(7);
thresholdPanel.add$java_awt_Component(this.threshold);
thresholdPanel.add$java_awt_Component(this.slider);
thresholdPanel.add$java_awt_Component(this.thresholdValue);
this.thresholdIsMin.setBackground$java_awt_Color($I$(11).white);
this.thresholdIsMin.setText$S($I$(1).getString$S("label.threshold_minmax"));
this.thresholdIsMin.setToolTipText$S($I$(1).getString$S("label.toggle_absolute_relative_display_threshold"));
this.thresholdIsMin.addActionListener$java_awt_event_ActionListener(this.changeColourAction);
thresholdPanel.add$java_awt_Component(this.thresholdIsMin);
return graduatedColourPanel;
}, p$1);

Clazz.newMeth(C$, 'initialiseOkCancelPanel', function () {
var okCancelPanel=Clazz.new_($I$(4,1));
okCancelPanel.add$java_awt_Component(this.ok);
okCancelPanel.add$java_awt_Component(this.cancel);
return okCancelPanel;
}, p$1);

Clazz.newMeth(C$, 'initialiseColoursPanel', function () {
var colourByPanel=Clazz.new_($I$(4,1));
colourByPanel.setBackground$java_awt_Color($I$(11).white);
colourByPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1).c$$java_awt_Container$I,[colourByPanel, 1]));
$I$(15,"createTitledBorder$javax_swing_JComponent$S$Z",[colourByPanel, $I$(1).getString$S("action.colour"), true]);
var simpleColourPanel=Clazz.new_([Clazz.new_($I$(16,1).c$$I,[0])],$I$(4,1).c$$java_awt_LayoutManager);
simpleColourPanel.setBackground$java_awt_Color($I$(11).white);
colourByPanel.add$java_awt_Component(simpleColourPanel);
this.simpleColour=Clazz.new_([$I$(1).getString$S("label.simple_colour")],$I$(3,1).c$$S);
this.simpleColour.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[130, 20]));
this.simpleColour.setOpaque$Z(false);
this.simpleColour.addItemListener$java_awt_event_ItemListener(((P$.FeatureTypeSettings$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
if (this.b$['jalview.gui.FeatureTypeSettings'].simpleColour.isSelected$() && !this.b$['jalview.gui.FeatureTypeSettings'].adjusting ) {
this.b$['jalview.gui.FeatureTypeSettings'].colourChanged$Z.apply(this.b$['jalview.gui.FeatureTypeSettings'], [true]);
}});
})()
), Clazz.new_(P$.FeatureTypeSettings$11.$init$,[this, null])));
this.singleColour.setFont$java_awt_Font($I$(15).getLabelFont$());
this.singleColour.setBorder$javax_swing_border_Border($I$(18,"createLineBorder$java_awt_Color",[$I$(11).black]));
this.singleColour.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[40, 20]));
this.singleColour.setBackground$java_awt_Color(this.originalColour.getColour$());
this.singleColour.setForeground$java_awt_Color(this.originalColour.getColour$());
this.singleColour.addMouseListener$java_awt_event_MouseListener(((P$.FeatureTypeSettings$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
if (this.b$['jalview.gui.FeatureTypeSettings'].simpleColour.isSelected$()) {
var ttl=$I$(1).formatMessage$S$OA("label.select_colour_for", [this.b$['jalview.gui.FeatureTypeSettings'].featureType]);
this.b$['jalview.gui.FeatureTypeSettings'].showColourChooser$javax_swing_JPanel$S.apply(this.b$['jalview.gui.FeatureTypeSettings'], [this.b$['jalview.gui.FeatureTypeSettings'].singleColour, ttl]);
}});
})()
), Clazz.new_($I$(19,1),[this, null],P$.FeatureTypeSettings$12)));
simpleColourPanel.add$java_awt_Component(this.simpleColour);
simpleColourPanel.add$java_awt_Component(this.singleColour);
var byTextPanel=Clazz.new_([Clazz.new_($I$(16,1).c$$I,[0])],$I$(4,1).c$$java_awt_LayoutManager);
byTextPanel.setBackground$java_awt_Color($I$(11).white);
$I$(15,"createTitledBorder$javax_swing_JComponent$S$Z",[byTextPanel, $I$(1).getString$S("label.colour_by_text"), true]);
colourByPanel.add$java_awt_Component(byTextPanel);
this.byCategory=Clazz.new_([$I$(1).getString$S("label.by_text_of") + ":"],$I$(3,1).c$$S);
this.byCategory.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[130, 20]));
this.byCategory.setOpaque$Z(false);
this.byCategory.addItemListener$java_awt_event_ItemListener(((P$.FeatureTypeSettings$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
if (this.b$['jalview.gui.FeatureTypeSettings'].byCategory.isSelected$()) {
this.b$['jalview.gui.FeatureTypeSettings'].colourChanged$Z.apply(this.b$['jalview.gui.FeatureTypeSettings'], [true]);
}});
})()
), Clazz.new_(P$.FeatureTypeSettings$13.$init$,[this, null])));
byTextPanel.add$java_awt_Component(this.byCategory);
var attNames=$I$(13).getInstance$().getAttributes$S(this.featureType);
this.colourByTextCombo=this.populateAttributesDropdown$java_util_List$Z$Z(attNames, false, true);
this.colourByTextCombo.addItemListener$java_awt_event_ItemListener(((P$.FeatureTypeSettings$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
this.b$['jalview.gui.FeatureTypeSettings'].colourChanged$Z.apply(this.b$['jalview.gui.FeatureTypeSettings'], [true]);
});
})()
), Clazz.new_(P$.FeatureTypeSettings$14.$init$,[this, null])));
byTextPanel.add$java_awt_Component(this.colourByTextCombo);
var graduatedColourPanel=p$1.initialiseGraduatedColourPanel.apply(this, []);
colourByPanel.add$java_awt_Component(graduatedColourPanel);
var bg=Clazz.new_($I$(24,1));
bg.add$javax_swing_AbstractButton(this.simpleColour);
bg.add$javax_swing_AbstractButton(this.byCategory);
bg.add$javax_swing_AbstractButton(this.graduatedColour);
return colourByPanel;
}, p$1);

Clazz.newMeth(C$, 'showColourChooser$javax_swing_JPanel$S', function (colourPanel, title) {
var listener=((P$.FeatureTypeSettings$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'colourSelected$java_awt_Color', function (col) {
this.$finals$.colourPanel.setBackground$java_awt_Color(col);
this.$finals$.colourPanel.setForeground$java_awt_Color(col);
this.$finals$.colourPanel.repaint$();
this.b$['jalview.gui.FeatureTypeSettings'].colourChanged$Z.apply(this.b$['jalview.gui.FeatureTypeSettings'], [true]);
});
})()
), Clazz.new_(P$.FeatureTypeSettings$15.$init$,[this, {colourPanel:colourPanel}]));
$I$(25,"showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener",[this, title, colourPanel.getBackground$(), listener]);
});

Clazz.newMeth(C$, 'colourChanged$Z', function (updateStructsAndOverview) {
if (this.adjusting) {
return;
}this.updateColourMinMax$();
var acg=p$1.makeColourFromInputs.apply(this, []);
this.fr.setColour$S$jalview_api_FeatureColourI(this.featureType, acg);
this.refreshDisplay$Z(updateStructsAndOverview);
p$1.updateColoursPanel.apply(this, []);
});

Clazz.newMeth(C$, 'makeColourFromInputs', function () {
var thresh=0.0;
try {
thresh=(Float.valueOf$S(this.thresholdValue.getText$())).valueOf();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
var minValue=this.min;
var maxValue=this.max;
var thresholdOption=this.threshold.getSelectedIndex$();
if (this.thresholdIsMin.isSelected$() && thresholdOption == 1 ) {
minValue=thresh;
}if (this.thresholdIsMin.isSelected$() && thresholdOption == 2 ) {
maxValue=thresh;
}var noColour=null;
if (this.noValueCombo.getSelectedIndex$() == 1) {
noColour=this.minColour.getBackground$();
} else if (this.noValueCombo.getSelectedIndex$() == 2) {
noColour=this.maxColour.getBackground$();
}var fc=Clazz.new_([this.singleColour.getBackground$(), this.minColour.getBackground$(), this.maxColour.getBackground$(), noColour, minValue, maxValue],$I$(26,1).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$F$F);
if (this.simpleColour.isSelected$()) {
(fc).setGraduatedColour$Z(false);
return fc;
}if (this.byCategory.isSelected$()) {
fc.setColourByLabel$Z(true);
var byWhat=this.colourByTextCombo.getSelectedItem$();
if (!C$.LABEL_18N.equals$O(byWhat)) {
fc.setAttributeName$SA($I$(9).fromAttributeDisplayName$S(byWhat));
}return fc;
}var byWhat=this.colourByRangeCombo.getSelectedItem$();
if (!C$.SCORE_18N.equals$O(byWhat)) {
fc.setAttributeName$SA($I$(9).fromAttributeDisplayName$S(byWhat));
}fc.setThreshold$F(thresh);
fc.setAutoScaled$Z(!this.thresholdIsMin.isSelected$());
fc.setAboveThreshold$Z(thresholdOption == 1);
fc.setBelowThreshold$Z(thresholdOption == 2);
if (this.threshline == null ) {
this.threshline=Clazz.new_([(this.max - this.min) / 2.0, "Threshold", $I$(11).black],$I$(10,1).c$$F$S$java_awt_Color);
}return fc;
}, p$1);

Clazz.newMeth(C$, 'raiseClosed$', function () {
if (this.featureSettings != null ) {
this.featureSettings.actionPerformed$java_awt_event_ActionEvent(Clazz.new_($I$(27,1).c$$O$I$S,[this, 0, "CLOSED"]));
}});

Clazz.newMeth(C$, 'okPressed$', function () {
});

Clazz.newMeth(C$, 'cancelPressed$', function () {
this.fr.setColour$S$jalview_api_FeatureColourI(this.featureType, this.originalColour);
this.fr.setFeatureFilter$S$jalview_datamodel_features_FeatureMatcherSetI(this.featureType, this.originalFilter);
this.refreshDisplay$Z(true);
});

Clazz.newMeth(C$, 'thresholdValue_actionPerformed$', function () {
try {
this.adjusting=true;
var f=Float.parseFloat$S(this.thresholdValue.getText$());
f=Float.max$F$F(f, this.min);
f=Float.min$F$F(f, this.max);
this.thresholdValue.setText$S(String.valueOf$F(f));
this.slider.setValue$I(((f * this.scaleFactor)|0));
this.threshline.value=f;
this.thresholdValue.setBackground$java_awt_Color($I$(11).white);
this.adjusting=false;
this.colourChanged$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
this.thresholdValue.setBackground$java_awt_Color($I$(11).red);
this.adjusting=false;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'sliderValueChanged$', function () {
this.threshline.value=p$1.getRoundedSliderValue.apply(this, []);
this.colourChanged$Z(false);
});

Clazz.newMeth(C$, 'getRoundedSliderValue', function () {
var value=this.slider.getValue$();
var f=value == this.slider.getMaximum$() ? this.max : (value == this.slider.getMinimum$() ? this.min : value / this.scaleFactor);
return f;
}, p$1);

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener', function (listener) {
if (this.featureSettings != null ) {
System.err.println$S("IMPLEMENTATION ISSUE: overwriting action listener for FeatureColourChooser");
}this.featureSettings=listener;
});

Clazz.newMeth(C$, 'populateAttributesDropdown$java_util_List$Z$Z', function (attNames, withRange, withText) {
var displayAtts=Clazz.new_($I$(28,1));
var tooltips=Clazz.new_($I$(28,1));
if (withText) {
displayAtts.add$O(C$.LABEL_18N);
tooltips.add$O($I$(1).getString$S("label.description"));
}if (withRange) {
var minMax=this.fr.getMinMax$().get$O(this.featureType);
if (minMax != null  && minMax[0][0] != minMax[0][1]  ) {
displayAtts.add$O(C$.SCORE_18N);
tooltips.add$O(C$.SCORE_18N);
}}var fa=$I$(13).getInstance$();
for (var attName, $attName = attNames.iterator$(); $attName.hasNext$()&&((attName=($attName.next$())),1);) {
var minMax=fa.getMinMax$S$SA(this.featureType, attName);
var hasRange=minMax != null  && minMax[0] != minMax[1]  ;
if (!withText && !hasRange ) {
continue;
}displayAtts.add$O($I$(9).toAttributeDisplayName$SA(attName));
var desc=fa.getDescription$S$SA(this.featureType, attName);
if (desc != null  && desc.length$() > 50 ) {
desc=desc.substring$I$I(0, 50) + "...";
}tooltips.add$O(desc == null  ? "" : desc);
}
var displayAttsObjects=Clazz.new_($I$(28,1).c$$java_util_Collection,[displayAtts]);
var attCombo=$I$(15).buildComboWithTooltips$java_util_List$java_util_List(displayAttsObjects, tooltips);
return attCombo;
});

Clazz.newMeth(C$, 'initialiseFiltersPanel', function () {
this.filters=Clazz.new_($I$(28,1));
var filtersPanel=Clazz.new_($I$(4,1));
filtersPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1).c$$java_awt_Container$I,[filtersPanel, 1]));
filtersPanel.setBackground$java_awt_Color($I$(11).white);
$I$(15,"createTitledBorder$javax_swing_JComponent$S$Z",[filtersPanel, $I$(1).getString$S("label.filters"), true]);
var andOrPanel=p$1.initialiseAndOrPanel.apply(this, []);
filtersPanel.add$java_awt_Component(andOrPanel);
this.chooseFiltersPanel=Clazz.new_($I$(4,1));
this.chooseFiltersPanel.setBackground$java_awt_Color($I$(11).white);
filtersPanel.add$java_awt_Component(this.chooseFiltersPanel);
return filtersPanel;
}, p$1);

Clazz.newMeth(C$, 'initialiseAndOrPanel', function () {
var andOrPanel=Clazz.new_([Clazz.new_($I$(16,1).c$$I,[0])],$I$(4,1).c$$java_awt_LayoutManager);
andOrPanel.setBackground$java_awt_Color($I$(11).white);
this.andFilters=Clazz.new_([$I$(1).getString$S("label.and")],$I$(3,1).c$$S);
this.orFilters=Clazz.new_([$I$(1).getString$S("label.or")],$I$(3,1).c$$S);
this.andFilters.setOpaque$Z(false);
this.orFilters.setOpaque$Z(false);
var actionListener=((P$.FeatureTypeSettings$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.FeatureTypeSettings'].filtersChanged$.apply(this.b$['jalview.gui.FeatureTypeSettings'], []);
});
})()
), Clazz.new_(P$.FeatureTypeSettings$16.$init$,[this, null]));
this.andFilters.addActionListener$java_awt_event_ActionListener(actionListener);
this.orFilters.addActionListener$java_awt_event_ActionListener(actionListener);
var andOr=Clazz.new_($I$(24,1));
andOr.add$javax_swing_AbstractButton(this.andFilters);
andOr.add$javax_swing_AbstractButton(this.orFilters);
this.andFilters.setSelected$Z(true);
andOrPanel.add$java_awt_Component(Clazz.new_([$I$(1).getString$S("label.join_conditions")],$I$(22,1).c$$S));
andOrPanel.add$java_awt_Component(this.andFilters);
andOrPanel.add$java_awt_Component(this.orFilters);
return andOrPanel;
}, p$1);

Clazz.newMeth(C$, 'updateFiltersPanel', function () {
this.chooseFiltersPanel.removeAll$();
this.filters.clear$();
var attNames=$I$(13).getInstance$().getAttributes$S(this.featureType);
var featureFilters=this.fr.getFeatureFilter$S(this.featureType);
if (featureFilters != null ) {
if (!featureFilters.isAnded$()) {
this.orFilters.setSelected$Z(true);
}for (var matcher, $matcher = featureFilters.getMatchers$().iterator$(); $matcher.hasNext$()&&((matcher=($matcher.next$())),1);) {
this.filters.add$O(matcher);
}
}this.filters.add$O($I$(9).NULL_MATCHER);
if (this.filters.size$() <= 5) {
this.chooseFiltersPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(29,1).c$$I$I,[5, 1]));
} else {
this.chooseFiltersPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1).c$$java_awt_Container$I,[this.chooseFiltersPanel, 1]));
}var filterIndex=0;
for (var filter, $filter = this.filters.iterator$(); $filter.hasNext$()&&((filter=($filter.next$())),1);) {
var row=this.addFilter$jalview_datamodel_features_FeatureMatcherI$java_util_List$I(filter, attNames, filterIndex);
this.chooseFiltersPanel.add$java_awt_Component(row);
filterIndex++;
}
this.validate$();
this.repaint$();
}, p$1);

Clazz.newMeth(C$, 'addFilter$jalview_datamodel_features_FeatureMatcherI$java_util_List$I', function (filter, attNames, filterIndex) {
var attName=filter.getAttribute$();
var cond=filter.getMatcher$().getCondition$();
var pattern=filter.getMatcher$().getPattern$();
var filterRow=Clazz.new_([Clazz.new_($I$(16,1).c$$I,[0])],$I$(4,1).c$$java_awt_LayoutManager);
filterRow.setBackground$java_awt_Color($I$(11).white);
var attCombo=this.populateAttributesDropdown$java_util_List$Z$Z(attNames, true, true);
var filterBy=p$1.setSelectedAttribute$javax_swing_JComboBox$jalview_datamodel_features_FeatureMatcherI.apply(this, [attCombo, filter]);
var condCombo=Clazz.new_($I$(5,1));
var patternField=Clazz.new_($I$(7,1).c$$I,[8]);
patternField.setText$S(pattern);
var actionListener=((P$.FeatureTypeSettings$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.b$['jalview.gui.FeatureTypeSettings'].validateFilter$javax_swing_JTextField$javax_swing_JComboBox.apply(this.b$['jalview.gui.FeatureTypeSettings'], [this.$finals$.patternField, this.$finals$.condCombo])) {
if (this.b$['jalview.gui.FeatureTypeSettings'].updateFilter$javax_swing_JComboBox$javax_swing_JComboBox$javax_swing_JTextField$I.apply(this.b$['jalview.gui.FeatureTypeSettings'], [this.$finals$.attCombo, this.$finals$.condCombo, this.$finals$.patternField, this.$finals$.filterIndex])) {
this.b$['jalview.gui.FeatureTypeSettings'].filtersChanged$.apply(this.b$['jalview.gui.FeatureTypeSettings'], []);
}}});
})()
), Clazz.new_(P$.FeatureTypeSettings$17.$init$,[this, {condCombo:condCombo,filterIndex:filterIndex,patternField:patternField,attCombo:attCombo}]));
var itemListener=((P$.FeatureTypeSettings$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
this.$finals$.actionListener.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_(P$.FeatureTypeSettings$18.$init$,[this, {actionListener:actionListener}]));
if (filter === $I$(9).NULL_MATCHER ) {
attCombo.setSelectedIndex$I(0);
} else {
attCombo.setSelectedItem$O($I$(9).toAttributeDisplayName$SA(attName));
}attCombo.addItemListener$java_awt_event_ItemListener(((P$.FeatureTypeSettings$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
this.b$['jalview.gui.FeatureTypeSettings'].populateConditions$S$jalview_util_matcher_Condition$javax_swing_JComboBox$javax_swing_JTextField.apply(this.b$['jalview.gui.FeatureTypeSettings'], [this.$finals$.attCombo.getSelectedItem$(), this.$finals$.condCombo.getSelectedItem$(), this.$finals$.condCombo, this.$finals$.patternField]);
this.$finals$.actionListener.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_(P$.FeatureTypeSettings$19.$init$,[this, {condCombo:condCombo,actionListener:actionListener,patternField:patternField,attCombo:attCombo}])));
filterRow.add$java_awt_Component(attCombo);
this.populateConditions$S$jalview_util_matcher_Condition$javax_swing_JComboBox$javax_swing_JTextField(filterBy, cond, condCombo, patternField);
condCombo.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[150, 20]));
condCombo.addItemListener$java_awt_event_ItemListener(itemListener);
filterRow.add$java_awt_Component(condCombo);
patternField.addActionListener$java_awt_event_ActionListener(actionListener);
patternField.addFocusListener$java_awt_event_FocusListener(((P$.FeatureTypeSettings$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
this.$finals$.actionListener.actionPerformed$java_awt_event_ActionEvent(null);
});
})()
), Clazz.new_($I$(23,1),[this, {actionListener:actionListener}],P$.FeatureTypeSettings$20)));
filterRow.add$java_awt_Component(patternField);
var selectedCondition=condCombo.getSelectedItem$();
patternField.setEnabled$Z(selectedCondition.needsAPattern$());
p$1.setNumericHints$S$jalview_util_matcher_Condition$javax_swing_JTextField.apply(this, [filterBy, selectedCondition, patternField]);
if (!patternField.isEnabled$() || (pattern != null  && pattern.trim$().length$() > 0 ) ) {
var removeCondition=Clazz.new_($I$(30,1).c$$S,["\u2717"]);
removeCondition.setBorder$javax_swing_border_Border(Clazz.new_($I$(31,1).c$$I$I$I$I,[0, 0, 0, 0]));
removeCondition.setBackground$java_awt_Color($I$(11).WHITE);
removeCondition.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[23, 17]));
removeCondition.setToolTipText$S($I$(1).getString$S("label.delete_condition"));
removeCondition.addActionListener$java_awt_event_ActionListener(((P$.FeatureTypeSettings$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureTypeSettings$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.FeatureTypeSettings'].filters.remove$I(this.$finals$.filterIndex);
this.b$['jalview.gui.FeatureTypeSettings'].filtersChanged$.apply(this.b$['jalview.gui.FeatureTypeSettings'], []);
});
})()
), Clazz.new_(P$.FeatureTypeSettings$21.$init$,[this, {filterIndex:filterIndex}])));
filterRow.add$java_awt_Component(removeCondition);
}return filterRow;
});

Clazz.newMeth(C$, 'setSelectedAttribute$javax_swing_JComboBox$jalview_datamodel_features_FeatureMatcherI', function (attCombo, filter) {
var item=null;
if (filter.isByScore$()) {
item=C$.SCORE_18N;
} else if (filter.isByLabel$()) {
item=C$.LABEL_18N;
} else {
item=$I$(9,"toAttributeDisplayName$SA",[filter.getAttribute$()]);
}attCombo.setSelectedItem$O(item);
return item;
}, p$1);

Clazz.newMeth(C$, 'setNumericHints$S$jalview_util_matcher_Condition$javax_swing_JTextField', function (attName, selectedCondition, patternField) {
patternField.setToolTipText$S("");
if (selectedCondition.isNumeric$()) {
var minMax=p$1.getMinMax$S.apply(this, [attName]);
if (minMax != null ) {
var minFormatted=C$.DECFMT_2_2.format$D(minMax[0]);
var maxFormatted=C$.DECFMT_2_2.format$D(minMax[1]);
var tip=String.format$S$OA("(%s - %s)", [minFormatted, maxFormatted]);
patternField.setToolTipText$S(tip);
if (patternField.getText$().isEmpty$()) {
if (selectedCondition === $I$(32).GE  || selectedCondition === $I$(32).GT  ) {
patternField.setText$S(minFormatted);
} else {
if (selectedCondition === $I$(32).LE  || selectedCondition === $I$(32).LT  ) {
patternField.setText$S(maxFormatted);
}}}}}}, p$1);

Clazz.newMeth(C$, 'populateConditions$S$jalview_util_matcher_Condition$javax_swing_JComboBox$javax_swing_JTextField', function (attName, cond, condCombo, patternField) {
var type=$I$(13).getInstance$().getDatatype$S$SA(this.featureType, $I$(9).fromAttributeDisplayName$S(attName));
if (C$.LABEL_18N.equals$O(attName)) {
type=$I$(33).Character;
} else if (C$.SCORE_18N.equals$O(attName)) {
type=$I$(33).Number;
}var listener=condCombo.getItemListeners$()[0];
condCombo.removeItemListener$java_awt_event_ItemListener(listener);
var condIsValid=false;
condCombo.removeAllItems$();
for (var c, $c = 0, $$c = $I$(32).values$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if ((c.isNumeric$() && type === $I$(33).Number  ) || (!c.isNumeric$() && type !== $I$(33).Number  ) ) {
condCombo.addItem$O(c);
if (c === cond ) {
condIsValid=true;
}}}
if (condIsValid) {
condCombo.setSelectedItem$O(cond);
} else {
condCombo.setSelectedIndex$I(0);
}if ((condCombo.getSelectedItem$()).isNumeric$()) {
try {
var pattern=patternField.getText$().trim$();
if (pattern.length$() > 0) {
Float.valueOf$S(pattern);
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
patternField.setText$S("");
} else {
throw e;
}
}
}condCombo.addItemListener$java_awt_event_ItemListener(listener);
});

Clazz.newMeth(C$, 'validateFilter$javax_swing_JTextField$javax_swing_JComboBox', function (value, condCombo) {
if (value == null  || condCombo == null  ) {
return true;
}var cond=condCombo.getSelectedItem$();
if (!cond.needsAPattern$()) {
return true;
}value.setBackground$java_awt_Color($I$(11).white);
value.setToolTipText$S("");
var v1=value.getText$().trim$();
if (v1.length$() == 0) {
}if (cond.isNumeric$() && v1.length$() > 0 ) {
try {
Float.valueOf$S(v1);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
value.setBackground$java_awt_Color($I$(11).red);
value.setToolTipText$S($I$(1).getString$S("label.numeric_required"));
return false;
} else {
throw e;
}
}
}return true;
});

Clazz.newMeth(C$, 'updateFilter$javax_swing_JComboBox$javax_swing_JComboBox$javax_swing_JTextField$I', function (attCombo, condCombo, valueField, filterIndex) {
var attName;
try {
attName=attCombo.getSelectedItem$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(34).log.error$O("Problem casting Combo box entry to String");
attName=attCombo.getSelectedItem$().toString();
} else {
throw e;
}
}
var cond=condCombo.getSelectedItem$();
var pattern=valueField.getText$().trim$();
p$1.setNumericHints$S$jalview_util_matcher_Condition$javax_swing_JTextField.apply(this, [attName, cond, valueField]);
if (pattern.length$() == 0 && cond.needsAPattern$() ) {
valueField.setEnabled$Z(true);
return false;
}var km=null;
if (C$.LABEL_18N.equals$O(attName)) {
km=$I$(9).byLabel$jalview_util_matcher_Condition$S(cond, pattern);
} else if (C$.SCORE_18N.equals$O(attName)) {
km=$I$(9).byScore$jalview_util_matcher_Condition$S(cond, pattern);
} else {
km=$I$(9,"byAttribute$jalview_util_matcher_Condition$S$SA",[cond, pattern, $I$(9).fromAttributeDisplayName$S(attName)]);
}this.filters.set$I$O(filterIndex, km);
return true;
});

Clazz.newMeth(C$, 'filtersChanged$', function () {
var anded=this.andFilters.isSelected$();
var combined=Clazz.new_($I$(35,1));
for (var filter, $filter = this.filters.iterator$(); $filter.hasNext$()&&((filter=($filter.next$())),1);) {
var pattern=filter.getMatcher$().getPattern$();
var condition=filter.getMatcher$().getCondition$();
if (pattern.trim$().length$() > 0 || !condition.needsAPattern$() ) {
if (anded) {
combined.and$jalview_datamodel_features_FeatureMatcherI(filter);
} else {
combined.or$jalview_datamodel_features_FeatureMatcherI(filter);
}}}
this.fr.setFeatureFilter$S$jalview_datamodel_features_FeatureMatcherSetI(this.featureType, combined.isEmpty$() ? null : combined);
this.refreshDisplay$Z(true);
p$1.updateFiltersPanel.apply(this, []);
});

Clazz.newMeth(C$, 'refreshDisplay$Z', function (updateStructsAndOverview) {
this.ap.paintAlignment$Z$Z(true, updateStructsAndOverview);
var complement=this.ap.getAlignViewport$().getCodingComplement$();
if (complement != null  && complement.isShowComplementFeatures$() ) {
var af2=$I$(36).getAlignFrameFor$jalview_api_AlignViewportI(complement);
af2.alignPanel.paintAlignment$Z$Z(true, updateStructsAndOverview);
}});

C$.$static$=function(){C$.$static$=0;
C$.LABEL_18N=$I$(1).getString$S("label.label");
C$.SCORE_18N=$I$(1).getString$S("label.score");
C$.DECFMT_2_2=Clazz.new_($I$(2,1).c$$S,["##.##"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
