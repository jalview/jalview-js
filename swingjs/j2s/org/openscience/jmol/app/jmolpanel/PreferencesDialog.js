(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),p$1={},I$=[[0,['org.openscience.jmol.app.jmolpanel.PreferencesDialog','.PrefsAction'],'java.util.ArrayList','org.openscience.jmol.app.jmolpanel.JmolPanel','org.jmol.i18n.GT','java.util.Hashtable','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JTabbedPane','java.awt.FlowLayout','javax.swing.JButton','java.awt.GridBagLayout','java.awt.GridLayout','javax.swing.border.TitledBorder','java.awt.GridBagConstraints','javax.swing.JLabel','javax.swing.JSlider','Boolean','javax.swing.BoxLayout','javax.swing.ButtonGroup','javax.swing.JRadioButton','javax.swing.Box','java.io.FileOutputStream','org.jmol.util.Logger','java.util.Properties','java.io.BufferedInputStream','java.io.FileInputStream','javajs.util.PT']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PreferencesDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog', 'java.awt.event.ActionListener');
C$.$classes$=[['PrefsAction',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fontScale=1;
this.prefsAction=Clazz.new_($I$(1,1),[this, null]);
this.actions=Clazz.new_($I$(2,1));
{
this.addActions$java_util_List(this.actions);
}
this.checkBoxListener=((P$.PreferencesDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PreferencesDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
var cb=e.getSource$();
var key=cb.getKey$();
var isSelected=cb.isSelected$();
var strSelected=isSelected ? "true" : "false";
if (key.equals$O("Prefs.showHydrogens")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].showHydrogens=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("showHydrogens", this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].showHydrogens);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$O$O("showHydrogens", strSelected);
} else if (key.equals$O("Prefs.showMeasurements")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].showMeasurements=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("showMeasurements", this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].showMeasurements);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$O$O("showMeasurements", strSelected);
} else if (key.equals$O("Prefs.perspectiveDepth")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].perspectiveDepth=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("perspectiveDepth", this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].perspectiveDepth);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$O$O("perspectiveDepth", strSelected);
} else if (key.equals$O("Prefs.showAxes")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].showAxes=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("showAxes", isSelected);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.refresh$I$S(3, "pref.showAxes");
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$O$O("showAxes", strSelected);
} else if (key.equals$O("Prefs.showBoundingBox")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].showBoundingBox=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("showBoundBox", isSelected);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.refresh$I$S(3, "pref.showBoundingBox");
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$O$O("showBoundingBox", strSelected);
} else if (key.equals$O("Prefs.axesOrientationRasmol")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].axesOrientationRasmol=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("axesOrientationRasmol", isSelected);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$O$O("axesOrientationRasmol", strSelected);
} else if (key.equals$O("Prefs.openFilePreview")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].openFilePreview=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$O$O("openFilePreview", strSelected);
} else if (key.equals$O("Prefs.clearHistory")) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].clearHistory=isSelected;
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$O$O("clearHistory", strSelected);
if ($I$(3).historyFile != null ) $I$(3).historyFile.addProperty$S$S("clearHistory", strSelected);
}});
})()
), Clazz.new_(P$.PreferencesDialog$1.$init$,[this, null]));
},1);

C$.$fields$=[['Z',['autoBond','showHydrogens','showMeasurements','perspectiveDepth','showAxes','showBoundingBox','axesOrientationRasmol','openFilePreview','clearHistory'],'F',['minBondDistance','bondTolerance'],'I',['fontScale','percentVdwAtom','bondingVersion'],'H',['marBond'],'O',['bButton','javax.swing.JButton','+pButton','+tButton','+eButton','+vButton','abYes','javax.swing.JRadioButton','+abNo','vdwPercentSlider','javax.swing.JSlider','+bdSlider','+bwSlider','+btSlider','cH','javax.swing.JCheckBox','+cM','+cbPerspectiveDepth','+cbShowAxes','+cbShowBoundingBox','+cbAxesOrientationRasmol','+cbOpenFilePreview','+cbClearHistory','originalSystemProperties','java.util.Properties','+jmolDefaultProperties','+currentProperties','prefsAction','org.openscience.jmol.app.jmolpanel.PreferencesDialog.PrefsAction','commands','java.util.Map','jmol','org.openscience.jmol.app.jmolpanel.JmolPanel','vwr','org.jmol.viewer.Viewer','guimap','org.openscience.jmol.app.jmolpanel.GuiMap','actions','java.util.List','checkBoxListener','java.awt.event.ItemListener','applyButton','javax.swing.JButton','+jmolDefaultsButton','+rasmolDefaultsButton','+cancelButton','+okButton']]
,['O',['jmolDefaults','String[]','+rasmolOverrides']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_jmolpanel_JmolPanel$javax_swing_JFrame$org_openscience_jmol_app_jmolpanel_GuiMap$org_jmol_viewer_Viewer', function (jmol, f, guimap, vwr) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[f, false]);C$.$init$.apply(this);
this.jmol=jmol;
this.guimap=guimap;
this.vwr=vwr;
this.initializeProperties$();
this.setTitle$S($I$(4).$$S("Preferences"));
this.initVariables$();
this.commands=Clazz.new_($I$(5,1));
for (var i=0; i < this.actions.size$(); i++) {
var a=this.actions.get$I(i);
var name=a.getValue$S("Name");
this.commands.put$O$O((name != null ) ? name.toString() : null, a);
}
var container=Clazz.new_($I$(6,1));
container.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1)));
var tabs=Clazz.new_($I$(8,1));
var disp=this.buildDispPanel$();
var atoms=this.buildAtomsPanel$();
var bonds=this.buildBondPanel$();
tabs.addTab$S$javax_swing_Icon$java_awt_Component($I$(4).$$S("Display"), null, disp);
tabs.addTab$S$javax_swing_Icon$java_awt_Component($I$(4).$$S("Atoms"), null, atoms);
tabs.addTab$S$javax_swing_Icon$java_awt_Component($I$(4).$$S("Bonds"), null, bonds);
var buttonPanel=Clazz.new_($I$(6,1));
buttonPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(9,1).c$$I,[2]));
this.jmolDefaultsButton=Clazz.new_([$I$(4).$$S("Jmol Defaults")],$I$(10,1).c$$S);
this.jmolDefaultsButton.addActionListener$java_awt_event_ActionListener(this);
buttonPanel.add$java_awt_Component(this.jmolDefaultsButton);
this.rasmolDefaultsButton=Clazz.new_([$I$(4).$$S("RasMol Defaults")],$I$(10,1).c$$S);
this.rasmolDefaultsButton.addActionListener$java_awt_event_ActionListener(this);
buttonPanel.add$java_awt_Component(this.rasmolDefaultsButton);
this.applyButton=Clazz.new_([$I$(4).$$S("Apply")],$I$(10,1).c$$S);
this.applyButton.addActionListener$java_awt_event_ActionListener(this);
buttonPanel.add$java_awt_Component(this.applyButton);
this.okButton=Clazz.new_([$I$(4).$$S("OK")],$I$(10,1).c$$S);
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
var disp=Clazz.new_($I$(6,1));
var gridbag=Clazz.new_($I$(11,1));
disp.setLayout$java_awt_LayoutManager(gridbag);
var constraints;
var showPanel=Clazz.new_($I$(6,1));
showPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$I$I,[1, 3]));
showPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(4).$$S("Show All")],$I$(13,1).c$$S));
this.cH=this.guimap.newJCheckBox$S$Z("Prefs.showHydrogens", this.vwr.getBoolean$I(603979922));
this.cH.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
this.cM=this.guimap.newJCheckBox$S$Z("Prefs.showMeasurements", this.vwr.getBoolean$I(603979926));
this.cM.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
showPanel.add$java_awt_Component(this.cH);
showPanel.add$java_awt_Component(this.cM);
constraints=Clazz.new_($I$(14,1));
constraints.gridwidth=0;
constraints.fill=2;
constraints.weightx=1.0;
disp.add$java_awt_Component$O(showPanel, constraints);
var fooPanel=Clazz.new_($I$(6,1));
fooPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(13,1).c$$S,[""]));
fooPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$I$I,[2, 1]));
this.cbPerspectiveDepth=this.guimap.newJCheckBox$S$Z("Prefs.perspectiveDepth", this.vwr.tm.perspectiveDepth);
this.cbPerspectiveDepth.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
fooPanel.add$java_awt_Component(this.cbPerspectiveDepth);
this.cbShowAxes=this.guimap.newJCheckBox$S$Z("Prefs.showAxes", this.vwr.getShowAxes$());
this.cbShowAxes.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
fooPanel.add$java_awt_Component(this.cbShowAxes);
this.cbShowBoundingBox=this.guimap.newJCheckBox$S$Z("Prefs.showBoundingBox", this.vwr.getShowBbcage$());
this.cbShowBoundingBox.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
fooPanel.add$java_awt_Component(this.cbShowBoundingBox);
constraints=Clazz.new_($I$(14,1));
constraints.gridwidth=0;
constraints.fill=2;
constraints.weightx=1.0;
disp.add$java_awt_Component$O(fooPanel, constraints);
var axesPanel=Clazz.new_($I$(6,1));
axesPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(13,1).c$$S,[""]));
axesPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$I$I,[1, 1]));
this.cbAxesOrientationRasmol=this.guimap.newJCheckBox$S$Z("Prefs.axesOrientationRasmol", this.vwr.getBoolean$I(603979806));
this.cbAxesOrientationRasmol.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
axesPanel.add$java_awt_Component(this.cbAxesOrientationRasmol);
constraints=Clazz.new_($I$(14,1));
constraints.gridwidth=0;
constraints.fill=2;
constraints.weightx=1.0;
disp.add$java_awt_Component$O(axesPanel, constraints);
var otherPanel=Clazz.new_($I$(6,1));
otherPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(13,1).c$$S,[""]));
otherPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$I$I,[2, 1]));
this.cbOpenFilePreview=this.guimap.newJCheckBox$S$Z("Prefs.openFilePreview", this.openFilePreview);
this.cbOpenFilePreview.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
otherPanel.add$java_awt_Component(this.cbOpenFilePreview);
this.cbClearHistory=this.guimap.newJCheckBox$S$Z("Prefs.clearHistory", this.clearHistory);
this.cbClearHistory.addItemListener$java_awt_event_ItemListener(this.checkBoxListener);
otherPanel.add$java_awt_Component(this.cbClearHistory);
constraints=Clazz.new_($I$(14,1));
constraints.gridwidth=0;
constraints.fill=2;
constraints.weightx=1.0;
disp.add$java_awt_Component$O(otherPanel, constraints);
var filler=Clazz.new_($I$(15,1));
constraints=Clazz.new_($I$(14,1));
constraints.gridwidth=0;
constraints.gridheight=0;
constraints.fill=1;
constraints.weightx=1.0;
constraints.weighty=1.0;
disp.add$java_awt_Component$O(filler, constraints);
return disp;
});

Clazz.newMeth(C$, 'buildAtomsPanel$', function () {
var atomPanel=Clazz.new_([Clazz.new_($I$(11,1))],$I$(6,1).c$$java_awt_LayoutManager);
var constraints;
var sfPanel=Clazz.new_($I$(6,1));
sfPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1)));
sfPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(4).$$S("Default atom size")],$I$(13,1).c$$S));
var sfLabel=Clazz.new_([(function(a,f){return f.apply(null,a)})(["(percentage of vanDerWaals radius)"],$I$(4).$$S), 0],$I$(15,1).c$$S$I);
sfPanel.add$java_awt_Component$O(sfLabel, "North");
this.vdwPercentSlider=Clazz.new_([0, 0, 100, this.vwr.getInt$I(553648154)],$I$(16,1).c$$I$I$I$I);
this.vdwPercentSlider.putClientProperty$O$O("JSlider.isFilled", $I$(17).TRUE);
this.vdwPercentSlider.setPaintTicks$Z(true);
this.vdwPercentSlider.setMajorTickSpacing$I(20);
this.vdwPercentSlider.setMinorTickSpacing$I(10);
this.vdwPercentSlider.setPaintLabels$Z(true);
this.vdwPercentSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.PreferencesDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PreferencesDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].rebond$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'], []);
});
})()
), Clazz.new_(P$.PreferencesDialog$2.$init$,[this, null])));
sfPanel.add$java_awt_Component$O(this.vdwPercentSlider, "Center");
constraints=Clazz.new_($I$(14,1));
constraints.gridwidth=0;
constraints.fill=2;
constraints.weightx=1.0;
atomPanel.add$java_awt_Component$O(sfPanel, constraints);
var filler=Clazz.new_($I$(15,1));
constraints=Clazz.new_($I$(14,1));
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
var bondPanel=Clazz.new_($I$(6,1));
var gridbag=Clazz.new_($I$(11,1));
var c=Clazz.new_($I$(14,1));
bondPanel.setLayout$java_awt_LayoutManager(gridbag);
c.fill=1;
c.weightx=1.0;
c.weighty=1.0;
var autobondPanel=Clazz.new_($I$(6,1));
autobondPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(18,1).c$$java_awt_Container$I,[autobondPanel, 1]));
autobondPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(4).$$S("Compute Bonds")],$I$(13,1).c$$S));
var abGroup=Clazz.new_($I$(19,1));
this.abYes=Clazz.new_([$I$(4).$$S("Automatically")],$I$(20,1).c$$S);
this.abNo=Clazz.new_([$I$(4).$$S("Don\'t Compute Bonds")],$I$(20,1).c$$S);
abGroup.add$javax_swing_AbstractButton(this.abYes);
abGroup.add$javax_swing_AbstractButton(this.abNo);
autobondPanel.add$java_awt_Component(this.abYes);
autobondPanel.add$java_awt_Component(this.abNo);
autobondPanel.add$java_awt_Component($I$(21).createVerticalGlue$());
this.abYes.setSelected$Z(this.vwr.getBoolean$I(603979798));
this.abYes.addActionListener$java_awt_event_ActionListener(((P$.PreferencesDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PreferencesDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("autoBond", true);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$O$O("autoBond", "true");
});
})()
), Clazz.new_(P$.PreferencesDialog$3.$init$,[this, null])));
this.abNo.setSelected$Z(!this.vwr.getBoolean$I(603979798));
this.abNo.addActionListener$java_awt_event_ActionListener(((P$.PreferencesDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "PreferencesDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].vwr.setBooleanProperty$S$Z("autoBond", false);
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].currentProperties.put$O$O("autoBond", "false");
});
})()
), Clazz.new_(P$.PreferencesDialog$4.$init$,[this, null])));
c.gridwidth=0;
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(autobondPanel, c);
bondPanel.add$java_awt_Component(autobondPanel);
var bwPanel=Clazz.new_($I$(6,1));
bwPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1)));
bwPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(4).$$S("Default Bond Radius")],$I$(13,1).c$$S));
var bwLabel=Clazz.new_([(function(a,f){return f.apply(null,a)})(["(Angstroms)"],$I$(4).$$S), 0],$I$(15,1).c$$S$I);
bwPanel.add$java_awt_Component$O(bwLabel, "North");
this.bwSlider=Clazz.new_([0, 250, ($s$[0] = this.vwr.getMadBond$()/2, $s$[0])],$I$(16,1).c$$I$I$I);
this.bwSlider.putClientProperty$O$O("JSlider.isFilled", $I$(17).TRUE);
this.bwSlider.setPaintTicks$Z(true);
this.bwSlider.setMajorTickSpacing$I(50);
this.bwSlider.setMinorTickSpacing$I(25);
this.bwSlider.setPaintLabels$Z(true);
for (var i=0; i <= 250; i+=50) {
var label="" + (1000 + i);
label="0." + label.substring$I(1);
var labelTable=p$1.getJSliderLabelTable$javax_swing_JSlider.apply(this, [this.bwSlider]);
labelTable.put$O$O(Integer.valueOf$I(i), Clazz.new_($I$(15,1).c$$S$I,[label, 0]));
this.bwSlider.setLabelTable$java_util_Dictionary(labelTable);
}
this.bwSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.PreferencesDialog$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "PreferencesDialog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].rebond$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'], []);
});
})()
), Clazz.new_(P$.PreferencesDialog$5.$init$,[this, null])));
bwPanel.add$java_awt_Component$O(this.bwSlider, "South");
c.weightx=0.0;
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(bwPanel, c);
bondPanel.add$java_awt_Component(bwPanel);
var btPanel=Clazz.new_($I$(6,1));
btPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1)));
btPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(4).$$S("Bond Tolerance - sum of two covalent radii + this value")],$I$(13,1).c$$S));
var btLabel=Clazz.new_([(function(a,f){return f.apply(null,a)})(["(Angstroms)"],$I$(4).$$S), 0],$I$(15,1).c$$S$I);
btPanel.add$java_awt_Component$O(btLabel, "North");
this.btSlider=Clazz.new_([0, 0, 100, ((100 * this.vwr.getFloat$I(570425348))|0)],$I$(16,1).c$$I$I$I$I);
this.btSlider.putClientProperty$O$O("JSlider.isFilled", $I$(17).TRUE);
this.btSlider.setPaintTicks$Z(true);
this.btSlider.setMajorTickSpacing$I(20);
this.btSlider.setMinorTickSpacing$I(10);
this.btSlider.setPaintLabels$Z(true);
var labelTable=p$1.getJSliderLabelTable$javax_swing_JSlider.apply(this, [this.btSlider]);
labelTable.put$O$O(Integer.valueOf$I(0), Clazz.new_($I$(15,1).c$$S$I,["0.0", 0]));
this.btSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$O$O(Integer.valueOf$I(20), Clazz.new_($I$(15,1).c$$S$I,["0.2", 0]));
this.btSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$O$O(Integer.valueOf$I(40), Clazz.new_($I$(15,1).c$$S$I,["0.4", 0]));
this.btSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$O$O(Integer.valueOf$I(60), Clazz.new_($I$(15,1).c$$S$I,["0.6", 0]));
this.btSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$O$O(Integer.valueOf$I(80), Clazz.new_($I$(15,1).c$$S$I,["0.8", 0]));
this.btSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$O$O(Integer.valueOf$I(100), Clazz.new_($I$(15,1).c$$S$I,["1.0", 0]));
this.btSlider.setLabelTable$java_util_Dictionary(labelTable);
this.btSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.PreferencesDialog$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "PreferencesDialog$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].rebond$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'], []);
});
})()
), Clazz.new_(P$.PreferencesDialog$6.$init$,[this, null])));
btPanel.add$java_awt_Component(this.btSlider);
c.weightx=0.0;
gridbag.setConstraints$java_awt_Component$java_awt_GridBagConstraints(btPanel, c);
bondPanel.add$java_awt_Component(btPanel);
var bdPanel=Clazz.new_($I$(6,1));
bdPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1)));
bdPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(4).$$S("Minimum Bonding Distance")],$I$(13,1).c$$S));
var bdLabel=Clazz.new_([(function(a,f){return f.apply(null,a)})(["(Angstroms)"],$I$(4).$$S), 0],$I$(15,1).c$$S$I);
bdPanel.add$java_awt_Component$O(bdLabel, "North");
this.bdSlider=Clazz.new_([0, 0, 100, ((100 * this.vwr.getFloat$I(570425364))|0)],$I$(16,1).c$$I$I$I$I);
this.bdSlider.putClientProperty$O$O("JSlider.isFilled", $I$(17).TRUE);
this.bdSlider.setPaintTicks$Z(true);
this.bdSlider.setMajorTickSpacing$I(20);
this.bdSlider.setMinorTickSpacing$I(10);
this.bdSlider.setPaintLabels$Z(true);
labelTable=p$1.getJSliderLabelTable$javax_swing_JSlider.apply(this, [this.bdSlider]);
labelTable.put$O$O(Integer.valueOf$I(0), Clazz.new_($I$(15,1).c$$S$I,["0.0", 0]));
this.bdSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$O$O(Integer.valueOf$I(20), Clazz.new_($I$(15,1).c$$S$I,["0.2", 0]));
this.bdSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$O$O(Integer.valueOf$I(40), Clazz.new_($I$(15,1).c$$S$I,["0.4", 0]));
this.bdSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$O$O(Integer.valueOf$I(60), Clazz.new_($I$(15,1).c$$S$I,["0.6", 0]));
this.bdSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$O$O(Integer.valueOf$I(80), Clazz.new_($I$(15,1).c$$S$I,["0.8", 0]));
this.bdSlider.setLabelTable$java_util_Dictionary(labelTable);
labelTable.put$O$O(Integer.valueOf$I(100), Clazz.new_($I$(15,1).c$$S$I,["1.0", 0]));
this.bdSlider.setLabelTable$java_util_Dictionary(labelTable);
this.bdSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.PreferencesDialog$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "PreferencesDialog$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'].rebond$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PreferencesDialog'], []);
});
})()
), Clazz.new_(P$.PreferencesDialog$7.$init$,[this, null])));
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
var fileOutputStream=Clazz.new_($I$(22,1).c$$java_io_File,[this.jmol.jmolApp.userPropsFile]);
this.currentProperties.store$java_io_OutputStream$S(fileOutputStream, "Jmol");
fileOutputStream.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(23).errorEx$S$Throwable("Error saving preferences", e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'initializeProperties$', function () {
this.originalSystemProperties=System.getProperties$();
this.jmolDefaultProperties=Clazz.new_($I$(24,1).c$$java_util_Properties,[this.originalSystemProperties]);
for (var i=C$.jmolDefaults.length; (i-=2) >= 0; ) this.jmolDefaultProperties.put$O$O(C$.jmolDefaults[i], C$.jmolDefaults[i + 1]);

this.currentProperties=Clazz.new_($I$(24,1).c$$java_util_Properties,[this.jmolDefaultProperties]);
try {
var bis=Clazz.new_([Clazz.new_($I$(26,1).c$$java_io_File,[this.jmol.jmolApp.userPropsFile]), 1024],$I$(25,1).c$$java_io_InputStream$I);
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
this.currentProperties=Clazz.new_($I$(24,1).c$$java_util_Properties,[this.jmolDefaultProperties]);
System.setProperties$java_util_Properties(this.currentProperties);
if (overrides != null ) {
for (var i=overrides.length; (i-=2) >= 0; ) this.currentProperties.put$O$O(overrides[i], overrides[i + 1]);

}this.initVariables$();
this.vwr.refresh$I$S(3, "PreferencesDialog:resetDefaults()");
p$1.updateComponents.apply(this, []);
});

Clazz.newMeth(C$, 'rebond$', function () {
this.percentVdwAtom=this.vdwPercentSlider.getValue$();
this.vwr.setIntProperty$S$I("PercentVdwAtom", this.percentVdwAtom);
this.currentProperties.put$O$O("percentVdwAtom", "" + this.percentVdwAtom);
this.bondTolerance=this.btSlider.getValue$() / 100.0;
this.vwr.setFloatProperty$S$F("bondTolerance", this.bondTolerance);
this.currentProperties.put$O$O("bondTolerance", "" + new Float(this.bondTolerance).toString());
this.minBondDistance=this.bdSlider.getValue$() / 100.0;
this.vwr.setFloatProperty$S$F("minBondDistance", this.minBondDistance);
this.currentProperties.put$O$O("minBondDistance", "" + new Float(this.minBondDistance).toString());
this.marBond=($s$[0] = this.bwSlider.getValue$(), $s$[0]);
this.vwr.setIntProperty$S$I("bondRadiusMilliAngstroms", this.marBond);
this.currentProperties.put$O$O("marBond", "" + this.marBond);
this.vwr.rebond$();
this.vwr.refresh$I$S(3, "PreferencesDialog:rebond()");
});

Clazz.newMeth(C$, 'initVariables$', function () {
this.autoBond=$I$(17).getBoolean$S("autoBond");
this.showHydrogens=$I$(17).getBoolean$S("showHydrogens");
this.showMeasurements=$I$(17).getBoolean$S("showMeasurements");
this.perspectiveDepth=$I$(17).getBoolean$S("perspectiveDepth");
this.showAxes=$I$(17).getBoolean$S("showAxes");
this.showBoundingBox=$I$(17).getBoolean$S("showBoundingBox");
this.axesOrientationRasmol=$I$(17).getBoolean$S("axesOrientationRasmol");
this.openFilePreview=(function(a,f){return f.apply(null,a)})([System.getProperty$S$S("openFilePreview", "true")],$I$(17).valueOf$S).booleanValue$();
this.clearHistory=$I$(17).getBoolean$S("clearHistory");
this.minBondDistance=Float.parseFloat$S(this.currentProperties.getProperty$S("minBondDistance"));
this.bondTolerance=Float.parseFloat$S(this.currentProperties.getProperty$S("bondTolerance"));
this.marBond=Short.parseShort$S(this.currentProperties.getProperty$S("marBond"));
this.percentVdwAtom=Integer.parseInt$S(this.currentProperties.getProperty$S("percentVdwAtom"));
this.bondingVersion=Integer.parseInt$S(this.currentProperties.getProperty$S("bondingVersion"));
this.fontScale=Math.max((function(a,f){return f.apply(null,a)})(["" + this.currentProperties.getProperty$S("consoleFontScale")],$I$(27).parseInt$S), 0) % 5;
if ($I$(17).getBoolean$S("jmolDefaults")) this.vwr.setStringProperty$S$S("defaults", "Jmol");
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

Clazz.newMeth(C$, 'addActions$java_util_List', function (list) {
list.add$O(this.prefsAction);
});

Clazz.newMeth(C$, 'getAction$S', function (cmd) {
return this.commands.get$O(cmd);
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (event) {
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
this.currentProperties.put$O$O("consoleFontScale", "" + this.fontScale);
this.save$();
this.jmol.updateConsoleFont$();
});

C$.$static$=function(){C$.$static$=0;
C$.jmolDefaults=Clazz.array(String, -1, ["jmolDefaults", "true", "showHydrogens", "true", "showMeasurements", "true", "perspectiveDepth", "true", "showAxes", "false", "showBoundingBox", "false", "axesOrientationRasmol", "false", "openFilePreview", "true", "autoBond", "true", "percentVdwAtom", "23", "marBond", "150", "minBondDistance", "0.4", "bondTolerance", "0.45", "bondingVersion", "0"]);
C$.rasmolOverrides=Clazz.array(String, -1, ["jmolDefaults", "false", "percentVdwAtom", "0", "marBond", "1", "axesOrientationRasmol", "true"]);
};
var $s$ = new Int16Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.PreferencesDialog, "PrefsAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["prefs"]);C$.$init$.apply(this);
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [true]);
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
