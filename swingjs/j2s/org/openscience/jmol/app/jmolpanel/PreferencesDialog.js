(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),p$1={},I$=[[0,['org.openscience.jmol.app.jmolpanel.PreferencesDialog','.PrefsAction'],'org.openscience.jmol.app.jmolpanel.JmolPanel','org.jmol.i18n.GT','java.util.Hashtable','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JTabbedPane','java.awt.FlowLayout','javax.swing.JButton','java.awt.GridBagLayout','java.awt.GridLayout','javax.swing.border.TitledBorder','java.awt.GridBagConstraints','javax.swing.JLabel','javax.swing.JSlider','Boolean','javax.swing.BoxLayout','javax.swing.ButtonGroup','javax.swing.JRadioButton','javax.swing.Box','java.io.FileOutputStream','org.jmol.util.Logger','java.util.Properties','java.io.BufferedInputStream','java.io.FileInputStream','javajs.util.PT','javax.swing.Action']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PreferencesDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog', 'java.awt.event.ActionListener');
C$.jmolDefaults=null;
C$.rasmolOverrides=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.jmolDefaults=Clazz.array(String, -1, ["jmolDefaults", "true", "showHydrogens", "true", "showMeasurements", "true", "perspectiveDepth", "true", "showAxes", "false", "showBoundingBox", "false", "axesOrientationRasmol", "false", "openFilePreview", "true", "autoBond", "true", "percentVdwAtom", "23", "marBond", "150", "minBondDistance", "0.4", "bondTolerance", "0.45", "bondingVersion", "0"]);
C$.rasmolOverrides=Clazz.array(String, -1, ["jmolDefaults", "false", "percentVdwAtom", "0", "marBond", "1", "axesOrientationRasmol", "true"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.autoBond=false;
this.showHydrogens=false;
this.showMeasurements=false;
this.perspectiveDepth=false;
this.showAxes=false;
this.showBoundingBox=false;
this.axesOrientationRasmol=false;
this.openFilePreview=false;
this.clearHistory=false;
this.fontScale=0;
this.minBondDistance=0;
this.bondTolerance=0;
this.marBond=0;
this.percentVdwAtom=0;
this.bondingVersion=0;
this.bButton=null;
this.pButton=null;
this.tButton=null;
this.eButton=null;
this.vButton=null;
this.abYes=null;
this.abNo=null;
this.vdwPercentSlider=null;
this.bdSlider=null;
this.bwSlider=null;
this.btSlider=null;
this.cH=null;
this.cM=null;
this.cbPerspectiveDepth=null;
this.cbShowAxes=null;
this.cbShowBoundingBox=null;
this.cbAxesOrientationRasmol=null;
this.cbOpenFilePreview=null;
this.cbClearHistory=null;
this.originalSystemProperties=null;
this.jmolDefaultProperties=null;
this.currentProperties=null;
this.prefsAction=null;
this.commands=null;
this.jmol=null;
this.vwr=null;
this.guimap=null;
this.checkBoxListener=null;
this.applyButton=null;
this.jmolDefaultsButton=null;
this.rasmolDefaultsButton=null;
this.cancelButton=null;
this.okButton=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.fontScale=1;
this.prefsAction=Clazz.new_($I$(1), [this, null]);
this.checkBoxListener=((P$.PreferencesDialog$1||
(function(){var C$=Clazz.newClass(P$, "PreferencesDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
var cb=e.getSource$();
var key=cb.getKey$();
var isSelected=cb.isSelected$();
var strSelected=isSelected ? "true" : "false";
if (key.equals$O("Prefs.showHydrogens")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].showHydrogens=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("showHydrogens", this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].showHydrogens);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$TK$TV("showHydrogens", strSelected);
} else if (key.equals$O("Prefs.showMeasurements")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].showMeasurements=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("showMeasurements", this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].showMeasurements);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$TK$TV("showMeasurements", strSelected);
} else if (key.equals$O("Prefs.perspectiveDepth")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].perspectiveDepth=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("perspectiveDepth", this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].perspectiveDepth);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$TK$TV("perspectiveDepth", strSelected);
} else if (key.equals$O("Prefs.showAxes")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].showAxes=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("showAxes", isSelected);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.refresh$I$S(3, "pref.showAxes");
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$TK$TV("showAxes", strSelected);
} else if (key.equals$O("Prefs.showBoundingBox")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].showBoundingBox=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("showBoundBox", isSelected);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.refresh$I$S(3, "pref.showBoundingBox");
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$TK$TV("showBoundingBox", strSelected);
} else if (key.equals$O("Prefs.axesOrientationRasmol")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].axesOrientationRasmol=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("axesOrientationRasmol", isSelected);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$TK$TV("axesOrientationRasmol", strSelected);
} else if (key.equals$O("Prefs.openFilePreview")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].openFilePreview=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$TK$TV("openFilePreview", strSelected);
} else if (key.equals$O("Prefs.clearHistory")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].clearHistory=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$TK$TV("clearHistory", strSelected);
$I$(2).addJmolProperty$S$S("clearHistory", strSelected);
}});
})()
), Clazz.new_(P$.PreferencesDialog$1.$init$, [this, null]));
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_jmolpanel_JmolPanel$javax_swing_JFrame$org_openscience_jmol_app_jmolpanel_GuiMap$org_jmol_viewer_Viewer', function (jmol, f, guimap, vwr) {
C$.superclazz.c$$java_awt_Frame$Z.apply(this, [f, false]);
C$.$init$.apply(this);
this.jmol=jmol;
this.guimap=guimap;
this.vwr=vwr;
this.initializeProperties$();
this.setTitle$S($I$(3).$$S("Preferences"));
this.initVariables$();
this.commands=Clazz.new_($I$(4));
var actions=this.getActions$();
for (var i=0; i < actions.length; i++) {
var a=actions[i];
var name=a.getValue$S("Name");
this.commands.put$TK$TV((name != null ) ? name.toString() : null, a);
}
var container=Clazz.new_($I$(5));
container.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6)));
var tabs=Clazz.new_($I$(7));
var disp=this.buildDispPanel$();
var atoms=this.buildAtomsPanel$();
var bonds=this.buildBondPanel$();
tabs.addTab$S$javax_swing_Icon$java_awt_Component($I$(3).$$S("Display"), null, disp);
tabs.addTab$S$javax_swing_Icon$java_awt_Component($I$(3).$$S("Atoms"), null, atoms);
tabs.addTab$S$javax_swing_Icon$java_awt_Component($I$(3).$$S("Bonds"), null, bonds);
var buttonPanel=Clazz.new_($I$(5));
buttonPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8).c$$I,[2]));
this.jmolDefaultsButton=Clazz.new_($I$(9).c$$S,[$I$(3).$$S("Jmol Defaults")]);
this.jmolDefaultsButton.addActionListener$java_awt_event_ActionListener(this);
buttonPanel.add$java_awt_Component(this.jmolDefaultsButton);
this.rasmolDefaultsButton=Clazz.new_($I$(9).c$$S,[$I$(3).$$S("RasMol Defaults")]);
this.rasmolDefaultsButton.addActionListener$java_awt_event_ActionListener(this);
buttonPanel.add$java_awt_Component(this.rasmolDefaultsButton);
this.applyButton=Clazz.new_($I$(9).c$$S,[$I$(3).$$S("Apply")]);
this.applyButton.addActionListener$java_awt_event_ActionListener(this);
buttonPanel.add$java_awt_Component(this.applyButton);
this.okButton=Clazz.new_($I$(9).c$$S,[$I$(3).$$S("OK")]);
this.okButton.addActionListener$java_awt_event_ActionListener(this);
buttonPanel.add$java_awt_Component(this.okButton);
this.getRootPane$().setDefaultButton$javax_swing_JButton(this.okButton);
container.add$java_awt_Component$O(tabs, "Center");
container.add$java_awt_Component$O(buttonPanel, "South");
this.getContentPane$().add$java_awt_Component(container);
p$1.updateComponents.apply(this, []);
this.pack$();
this.centerDialog$();
}, 1);

Clazz.newMeth(C$, 'buildDispPanel$', function () {
var disp=Clazz.new_($I$(5));
var gridbag=Clazz.new_($I$(10));
disp.setLayout$java_awt_LayoutManager(gridbag);
var constraints;
var showPanel=Clazz.new_($I$(5));
showPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11).c$$I$I,[1, 3]));
showPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(12).c$$S,[$I$(3).$$S("Show All")]));
this.cH=this.guimap.newJCheckBox$S$Z("Prefs.showHydrogens", this.vwr.getBoolean$I(603979922));
this.cH.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
this.cM=this.guimap.newJCheckBox$S$Z("Prefs.showMeasurements", this.vwr.getBoolean$I(603979926));
this.cM.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
showPanel.add$java_awt_Component(this.cH);
showPanel.add$java_awt_Component(this.cM);
constraints=Clazz.new_($I$(13));
constraints.gridwidth=0;
constraints.fill=2;
constraints.weightx=1.0;
disp.add$java_awt_Component$O(showPanel, constraints);
var fooPanel=Clazz.new_($I$(5));
fooPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(12).c$$S,[""]));
fooPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11).c$$I$I,[2, 1]));
this.cbPerspectiveDepth=this.guimap.newJCheckBox$S$Z("Prefs.perspectiveDepth", this.vwr.tm.perspectiveDepth);
this.cbPerspectiveDepth.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
fooPanel.add$java_awt_Component(this.cbPerspectiveDepth);
this.cbShowAxes=this.guimap.newJCheckBox$S$Z("Prefs.showAxes", this.vwr.getShowAxes$());
this.cbShowAxes.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
fooPanel.add$java_awt_Component(this.cbShowAxes);
this.cbShowBoundingBox=this.guimap.newJCheckBox$S$Z("Prefs.showBoundingBox", this.vwr.getShowBbcage$());
this.cbShowBoundingBox.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
fooPanel.add$java_awt_Component(this.cbShowBoundingBox);
constraints=Clazz.new_($I$(13));
constraints.gridwidth=0;
constraints.fill=2;
constraints.weightx=1.0;
disp.add$java_awt_Component$O(fooPanel, constraints);
var axesPanel=Clazz.new_($I$(5));
axesPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(12).c$$S,[""]));
axesPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11).c$$I$I,[1, 1]));
this.cbAxesOrientationRasmol=this.guimap.newJCheckBox$S$Z("Prefs.axesOrientationRasmol", this.vwr.getBoolean$I(603979806));
this.cbAxesOrientationRasmol.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
axesPanel.add$java_awt_Component(this.cbAxesOrientationRasmol);
constraints=Clazz.new_($I$(13));
constraints.gridwidth=0;
constraints.fill=2;
constraints.weightx=1.0;
disp.add$java_awt_Component$O(axesPanel, constraints);
var otherPanel=Clazz.new_($I$(5));
otherPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(12).c$$S,[""]));
otherPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11).c$$I$I,[2, 1]));
this.cbOpenFilePreview=this.guimap.newJCheckBox$S$Z("Prefs.openFilePreview", this.openFilePreview);
this.cbOpenFilePreview.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
otherPanel.add$java_awt_Component(this.cbOpenFilePreview);
this.cbClearHistory=this.guimap.newJCheckBox$S$Z("Prefs.clearHistory", this.clearHistory);
this.cbClearHistory.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
otherPanel.add$java_awt_Component(this.cbClearHistory);
constraints=Clazz.new_($I$(13));
constraints.gridwidth=0;
constraints.fill=2;
constraints.weightx=1.0;
disp.add$java_awt_Component$O(otherPanel, constraints);
var filler=Clazz.new_($I$(14));
constraints=Clazz.new_($I$(13));
constraints.gridwidth=0;
constraints.gridheight=0;
constraints.fill=1;
constraints.weightx=1.0;
constraints.weighty=1.0;
disp.add$java_awt_Component$O(filler, constraints);
return disp;
});

Clazz.newMeth(C$, 'buildAtomsPanel$', function () {
var atomPanel=Clazz.new_($I$(5).c$$java_awt_LayoutManager,[Clazz.new_($I$(10))]);
var constraints;
var sfPanel=Clazz.new_($I$(5));
sfPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6)));
sfPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(12).c$$S,[$I$(3).$$S("Default atom size")]));
var sfLabel=Clazz.new_($I$(14).c$$S$I,[$I$(3).$$S("(percentage of vanDerWaals radius)"), 0]);
sfPanel.add$java_awt_Component$O(sfLabel, "North");
this.vdwPercentSlider=Clazz.new_($I$(15).c$$I$I$I$I,[0, 0, 100, this.vwr.getInt$I(553648154)]);
this.vdwPercentSlider.putClientProperty$O$O("JSlider.isFilled", $I$(16).TRUE);
this.vdwPercentSlider.setPaintTicks$Z(true);
this.vdwPercentSlider.setMajorTickSpacing$I(20);
this.vdwPercentSlider.setMinorTickSpacing$I(10);
this.vdwPercentSlider.setPaintLabels$Z(true);
this.vdwPercentSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.PreferencesDialog$2||
(function(){var C$=Clazz.newClass(P$, "PreferencesDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].rebond$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'], []);
});
})()
), Clazz.new_(P$.PreferencesDialog$2.$init$, [this, null])));
sfPanel.add$java_awt_Component$O(this.vdwPercentSlider, "Center");
constraints=Clazz.new_($I$(13));
constraints.gridwidth=0;
constraints.fill=2;
constraints.weightx=1.0;
atomPanel.add$java_awt_Component$O(sfPanel, constraints);
var filler=Clazz.new_($I$(14));
constraints=Clazz.new_($I$(13));
constraints.gridwidth=0;
constraints.gridheight=0;
constraints.fill=1;
constraints.weightx=1.0;
constraints.weighty=1.0;
atomPanel.add$java_awt_Component$O(filler, constraints);
return atomPanel;
});

Clazz.newMeth(C$, 'getJSliderLabelTable$javax_swing_JSlider', function (slider) {
return slider.getLabelTable$();
}, p$1);

Clazz.newMeth(C$, 'buildBondPanel$', function () {
var bondPanel=Clazz.new_($I$(5));
var gridbag=Clazz.new_($I$(10));
var c=Clazz.new_($I$(13));
bondPanel.setLayout$java_awt_LayoutManager(gridbag);
c.fill=1;
c.weightx=1.0;
c.weighty=1.0;
var autobondPanel=Clazz.new_($I$(5));
autobondPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17).c$$java_awt_Container$I,[autobondPanel, 1]));
autobondPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(12).c$$S,[$I$(3).$$S("Compute Bonds")]));
var abGroup=Clazz.new_($I$(18));
this.abYes=Clazz.new_($I$(19).c$$S,[$I$(3).$$S("Automatically")]);
this.abNo=Clazz.new_($I$(19).c$$S,[$I$(3).$$S("Don\'t Compute Bonds")]);
abGroup.add$javax_swing_AbstractButton(this.abYes);
abGroup.add$javax_swing_AbstractButton(this.abNo);
autobondPanel.add$java_awt_Component(this.abYes);
autobondPanel.add$java_awt_Component(this.abNo);
autobondPanel.add$java_awt_Component($I$(20).createVerticalGlue$());
this.abYes.setSelected$Z(this.vwr.getBoolean$I(603979798));
this.abYes.addActionListener$java_awt_event_ActionListener(((P$.PreferencesDialog$3||
(function(){var C$=Clazz.newClass(P$, "PreferencesDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("autoBond", true);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$TK$TV("autoBond", "true");
});
})()
), Clazz.new_(P$.PreferencesDialog$3.$init$, [this, null])));
this.abNo.setSelected$Z(!this.vwr.getBoolean$I(603979798));
this.abNo.addActionListener$java_awt_event_ActionListener(((P$.PreferencesDialog$4||
(function(){var C$=Clazz.newClass(P$, "PreferencesDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("autoBond", false);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$TK$TV("autoBond", "false");
});
})()
), Clazz.new_(P$.PreferencesDialog$4.$init$, [this, null])));
c.gridwidth=0;
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(autobondPanel, c);
bondPanel.add$java_awt_Component(autobondPanel);
var bwPanel=Clazz.new_($I$(5));
bwPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6)));
bwPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(12).c$$S,[$I$(3).$$S("Default Bond Radius")]));
var bwLabel=Clazz.new_($I$(14).c$$S$I,[$I$(3).$$S("(Angstroms)"), 0]);
bwPanel.add$java_awt_Component$O(bwLabel, "North");
this.bwSlider=Clazz.new_($I$(15).c$$I$I$I,[0, 250, ($s$[0] = this.vwr.getMadBond$()/2, $s$[0])]);
this.bwSlider.putClientProperty$O$O("JSlider.isFilled", $I$(16).TRUE);
this.bwSlider.setPaintTicks$Z(true);
this.bwSlider.setMajorTickSpacing$I(50);
this.bwSlider.setMinorTickSpacing$I(25);
this.bwSlider.setPaintLabels$Z(true);
for (var i=0; i <= 250; i+=50) {
var label="" + (1000 + i);
label="0." + label.substring$I(1);
var labelTable=p$1.getJSliderLabelTable$javax_swing_JSlider.apply(this, [this.bwSlider]);
labelTable.put$TK$TV(Integer.valueOf$I(i), Clazz.new_($I$(14).c$$S$I,[label, 0]));
this.bwSlider.setLabelTable$java_util_Dictionary(labelTable);
}
this.bwSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.PreferencesDialog$5||
(function(){var C$=Clazz.newClass(P$, "PreferencesDialog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].rebond$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'], []);
});
})()
), Clazz.new_(P$.PreferencesDialog$5.$init$, [this, null])));
bwPanel.add$java_awt_Component$O(this.bwSlider, "South");
c.weightx=0.0;
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(bwPanel, c);
bondPanel.add$java_awt_Component(bwPanel);
var btPanel=Clazz.new_($I$(5));
btPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6)));
btPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(12).c$$S,[$I$(3).$$S("Bond Tolerance - sum of two covalent radii + this value")]));
var btLabel=Clazz.new_($I$(14).c$$S$I,[$I$(3).$$S("(Angstroms)"), 0]);
btPanel.add$java_awt_Component$O(btLabel, "North");
this.btSlider=Clazz.new_($I$(15).c$$I$I$I$I,[0, 0, 100, ((100 * this.vwr.getFloat$I(570425348))|0)]);
this.btSlider.putClientProperty$O$O("JSlider.isFilled", $I$(16).TRUE);
this.btSlider.setPaintTicks$Z(true);
this.btSlider.setMajorTickSpacing$I(20);
this.btSlider.setMinorTickSpacing$I(10);
this.btSlider.setPaintLabels$Z(true);
var labelTable=p$1.getJSliderLabelTable$javax_swing_JSlider.apply(this, [this.btSlider]);
labelTable.put$TK$TV(Integer.valueOf$I(0), Clazz.new_($I$(14).c$$S$I,["0.0", 0]));
this.btSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$TK$TV(Integer.valueOf$I(20), Clazz.new_($I$(14).c$$S$I,["0.2", 0]));
this.btSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$TK$TV(Integer.valueOf$I(40), Clazz.new_($I$(14).c$$S$I,["0.4", 0]));
this.btSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$TK$TV(Integer.valueOf$I(60), Clazz.new_($I$(14).c$$S$I,["0.6", 0]));
this.btSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$TK$TV(Integer.valueOf$I(80), Clazz.new_($I$(14).c$$S$I,["0.8", 0]));
this.btSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$TK$TV(Integer.valueOf$I(100), Clazz.new_($I$(14).c$$S$I,["1.0", 0]));
this.btSlider.setLabelTable$java_util_Dictionary(labelTable);
this.btSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.PreferencesDialog$6||
(function(){var C$=Clazz.newClass(P$, "PreferencesDialog$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].rebond$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'], []);
});
})()
), Clazz.new_(P$.PreferencesDialog$6.$init$, [this, null])));
btPanel.add$java_awt_Component(this.btSlider);
c.weightx=0.0;
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(btPanel, c);
bondPanel.add$java_awt_Component(btPanel);
var bdPanel=Clazz.new_($I$(5));
bdPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6)));
bdPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(12).c$$S,[$I$(3).$$S("Minimum Bonding Distance")]));
var bdLabel=Clazz.new_($I$(14).c$$S$I,[$I$(3).$$S("(Angstroms)"), 0]);
bdPanel.add$java_awt_Component$O(bdLabel, "North");
this.bdSlider=Clazz.new_($I$(15).c$$I$I$I$I,[0, 0, 100, ((100 * this.vwr.getFloat$I(570425364))|0)]);
this.bdSlider.putClientProperty$O$O("JSlider.isFilled", $I$(16).TRUE);
this.bdSlider.setPaintTicks$Z(true);
this.bdSlider.setMajorTickSpacing$I(20);
this.bdSlider.setMinorTickSpacing$I(10);
this.bdSlider.setPaintLabels$Z(true);
labelTable=p$1.getJSliderLabelTable$javax_swing_JSlider.apply(this, [this.bdSlider]);
labelTable.put$TK$TV(Integer.valueOf$I(0), Clazz.new_($I$(14).c$$S$I,["0.0", 0]));
this.bdSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$TK$TV(Integer.valueOf$I(20), Clazz.new_($I$(14).c$$S$I,["0.2", 0]));
this.bdSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$TK$TV(Integer.valueOf$I(40), Clazz.new_($I$(14).c$$S$I,["0.4", 0]));
this.bdSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$TK$TV(Integer.valueOf$I(60), Clazz.new_($I$(14).c$$S$I,["0.6", 0]));
this.bdSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$TK$TV(Integer.valueOf$I(80), Clazz.new_($I$(14).c$$S$I,["0.8", 0]));
this.bdSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$TK$TV(Integer.valueOf$I(100), Clazz.new_($I$(14).c$$S$I,["1.0", 0]));
this.bdSlider.setLabelTable$java_util_Dictionary(labelTable);
this.bdSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.PreferencesDialog$7||
(function(){var C$=Clazz.newClass(P$, "PreferencesDialog$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].rebond$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'], []);
});
})()
), Clazz.new_(P$.PreferencesDialog$7.$init$, [this, null])));
bdPanel.add$java_awt_Component(this.bdSlider);
c.weightx=0.0;
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(bdPanel, c);
bondPanel.add$java_awt_Component(bdPanel);
return bondPanel;
});

Clazz.newMeth(C$, 'centerDialog$', function () {
var screenSize=this.getToolkit$().getScreenSize$();
var size=this.getSize$();
screenSize.height=(screenSize.height/2|0);
screenSize.width=(screenSize.width/2|0);
size.height=(size.height/2|0);
size.width=(size.width/2|0);
var y=screenSize.height - size.height;
var x=screenSize.width - size.width;
this.setLocation$I$I(x, y);
});

Clazz.newMeth(C$, 'ok$', function () {
this.save$();
this.dispose$();
});

Clazz.newMeth(C$, 'cancel$', function () {
p$1.updateComponents.apply(this, []);
this.dispose$();
});

Clazz.newMeth(C$, 'updateComponents', function () {
this.cH.setSelected$Z(this.vwr.getBoolean$I(603979922));
this.cM.setSelected$Z(this.vwr.getBoolean$I(603979926));
this.cbPerspectiveDepth.setSelected$Z(this.vwr.tm.perspectiveDepth);
this.cbShowAxes.setSelected$Z(this.vwr.getShowAxes$());
this.cbShowBoundingBox.setSelected$Z(this.vwr.getShowBbcage$());
this.cbAxesOrientationRasmol.setSelected$Z(this.vwr.getBoolean$I(603979806));
this.cbOpenFilePreview.setSelected$Z(this.openFilePreview);
this.cbClearHistory.setSelected$Z(this.clearHistory);
this.vdwPercentSlider.setValue$I(this.vwr.getInt$I(553648154));
this.abYes.setSelected$Z(this.vwr.getBoolean$I(603979798));
this.bwSlider.setValue$I(($s$[0] = this.vwr.getMadBond$()/2, $s$[0]));
this.bdSlider.setValue$I(((100 * this.vwr.getFloat$I(570425364))|0));
this.btSlider.setValue$I(((100 * this.vwr.getFloat$I(570425348))|0));
}, p$1);

Clazz.newMeth(C$, 'apply', function () {
this.rebond$();
this.save$();
this.vwr.refresh$I$S(3, "PreferencesDialog:apply()");
}, p$1);

Clazz.newMeth(C$, 'save$', function () {
try {
var fileOutputStream=Clazz.new_($I$(21).c$$java_io_File,[this.jmol.jmolApp.userPropsFile]);
this.currentProperties.store$java_io_OutputStream$S(fileOutputStream, "Jmol");
fileOutputStream.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(22).errorEx$S$Throwable("Error saving preferences", e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'initializeProperties$', function () {
this.originalSystemProperties=System.getProperties$();
this.jmolDefaultProperties=Clazz.new_($I$(23).c$$java_util_Properties,[this.originalSystemProperties]);
for (var i=C$.jmolDefaults.length; (i-=2) >= 0; ) this.jmolDefaultProperties.put$TK$TV(C$.jmolDefaults[i], C$.jmolDefaults[i + 1]);

this.currentProperties=Clazz.new_($I$(23).c$$java_util_Properties,[this.jmolDefaultProperties]);
try {
var bis=Clazz.new_($I$(24).c$$java_io_InputStream$I,[Clazz.new_($I$(25).c$$java_io_File,[this.jmol.jmolApp.userPropsFile]), 1024]);
this.currentProperties.load$java_io_InputStream(bis);
bis.close$();
} catch (e2) {
if (Clazz.exceptionOf(e2,"Exception")){
} else {
throw e2;
}
}
System.setProperties$java_util_Properties(this.currentProperties);
});

Clazz.newMeth(C$, 'resetDefaults$SA', function (overrides) {
this.currentProperties=Clazz.new_($I$(23).c$$java_util_Properties,[this.jmolDefaultProperties]);
System.setProperties$java_util_Properties(this.currentProperties);
if (overrides != null ) {
for (var i=overrides.length; (i-=2) >= 0; ) this.currentProperties.put$TK$TV(overrides[i], overrides[i + 1]);

}this.initVariables$();
this.vwr.refresh$I$S(3, "PreferencesDialog:resetDefaults()");
p$1.updateComponents.apply(this, []);
});

Clazz.newMeth(C$, 'rebond$', function () {
this.percentVdwAtom=this.vdwPercentSlider.getValue$();
this.vwr.setIntProperty$S$I("PercentVdwAtom", this.percentVdwAtom);
this.currentProperties.put$TK$TV("percentVdwAtom", "" + this.percentVdwAtom);
this.bondTolerance=this.btSlider.getValue$() / 100.0;
this.vwr.setFloatProperty$S$F("bondTolerance", this.bondTolerance);
this.currentProperties.put$TK$TV("bondTolerance", "" + new Float(this.bondTolerance).toString());
this.minBondDistance=this.bdSlider.getValue$() / 100.0;
this.vwr.setFloatProperty$S$F("minBondDistance", this.minBondDistance);
this.currentProperties.put$TK$TV("minBondDistance", "" + new Float(this.minBondDistance).toString());
this.marBond=($s$[0] = this.bwSlider.getValue$(), $s$[0]);
this.vwr.setIntProperty$S$I("bondRadiusMilliAngstroms", this.marBond);
this.currentProperties.put$TK$TV("marBond", "" + this.marBond);
this.vwr.rebond$();
this.vwr.refresh$I$S(3, "PreferencesDialog:rebond()");
});

Clazz.newMeth(C$, 'initVariables$', function () {
this.autoBond=$I$(16).getBoolean$S("autoBond");
this.showHydrogens=$I$(16).getBoolean$S("showHydrogens");
this.showMeasurements=$I$(16).getBoolean$S("showMeasurements");
this.perspectiveDepth=$I$(16).getBoolean$S("perspectiveDepth");
this.showAxes=$I$(16).getBoolean$S("showAxes");
this.showBoundingBox=$I$(16).getBoolean$S("showBoundingBox");
this.axesOrientationRasmol=$I$(16).getBoolean$S("axesOrientationRasmol");
this.openFilePreview=$I$(16).valueOf$S(System.getProperty$S$S("openFilePreview", "true")).booleanValue$();
this.clearHistory=$I$(16).getBoolean$S("clearHistory");
this.minBondDistance=Float.parseFloat$S(this.currentProperties.getProperty$S("minBondDistance"));
this.bondTolerance=Float.parseFloat$S(this.currentProperties.getProperty$S("bondTolerance"));
this.marBond=Short.parseShort$S(this.currentProperties.getProperty$S("marBond"));
this.percentVdwAtom=Integer.parseInt$S(this.currentProperties.getProperty$S("percentVdwAtom"));
this.bondingVersion=Integer.parseInt$S(this.currentProperties.getProperty$S("bondingVersion"));
this.fontScale=Math.max($I$(26).parseInt$S("" + this.currentProperties.getProperty$S("consoleFontScale")), 0) % 5;
if ($I$(16).getBoolean$S("jmolDefaults")) this.vwr.setStringProperty$S$S("defaults", "Jmol");
 else this.vwr.setStringProperty$S$S("defaults", "RasMol");
this.vwr.setIntProperty$S$I("percentVdwAtom", this.percentVdwAtom);
this.vwr.setIntProperty$S$I("bondRadiusMilliAngstroms", this.marBond);
this.vwr.setIntProperty$S$I("bondingVersion", this.bondingVersion);
this.vwr.setFloatProperty$S$F("minBondDistance", this.minBondDistance);
this.vwr.setFloatProperty$S$F("BondTolerance", this.bondTolerance);
this.vwr.setBooleanProperty$S$Z("autoBond", this.autoBond);
this.vwr.setBooleanProperty$S$Z("showHydrogens", this.showHydrogens);
this.vwr.setBooleanProperty$S$Z("showMeasurements", this.showMeasurements);
this.vwr.setBooleanProperty$S$Z("perspectiveDepth", this.perspectiveDepth);
this.vwr.setBooleanProperty$S$Z("showAxes", this.showAxes);
this.vwr.setBooleanProperty$S$Z("showBoundBox", this.showBoundingBox);
this.vwr.setBooleanProperty$S$Z("axesOrientationRasmol", this.axesOrientationRasmol);
this.jmol.updateConsoleFont$();
});

Clazz.newMeth(C$, 'getActions$', function () {
var defaultActions=Clazz.array($I$(27), -1, [this.prefsAction]);
return defaultActions;
});

Clazz.newMeth(C$, 'getAction$S', function (cmd) {
return this.commands.get$O(cmd);
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (event) {
if (event.getSource$() === this.applyButton ) {
p$1.apply.apply(this, []);
} else if (event.getSource$() === this.jmolDefaultsButton ) {
this.resetDefaults$SA(null);
} else if (event.getSource$() === this.rasmolDefaultsButton ) {
this.resetDefaults$SA(C$.rasmolOverrides);
} else if (event.getSource$() === this.cancelButton ) {
this.cancel$();
} else if (event.getSource$() === this.okButton ) {
this.ok$();
}});

Clazz.newMeth(C$, 'setFontScale$I', function (scale) {
this.fontScale=(scale == -2147483648 ? this.fontScale : scale < 0 ? this.fontScale + 1 : scale) % 5;
this.currentProperties.put$TK$TV("consoleFontScale", "" + this.fontScale);
this.save$();
this.jmol.updateConsoleFont$();
});
var $s$ = new Int16Array(1);
;
(function(){var C$=Clazz.newClass(P$.PreferencesDialog, "PrefsAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S.apply(this, ["prefs"]);
C$.$init$.apply(this);
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [true]);
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
