(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),p$1={},I$=[[0,'org.jmol.i18n.GT','javax.swing.InputVerifier','javax.swing.Box','javax.swing.border.TitledBorder','javax.swing.JTextField','javax.swing.JButton','javax.swing.JCheckBox','javax.swing.JLabel','javax.swing.JFormattedTextField','javax.swing.JComboBox','java.io.File','java.util.Hashtable','Runtime','org.jmol.util.Logger','javax.swing.JFileChooser','StringBuilder','org.openscience.jmol.app.jmolpanel.JmolPanel','java.util.Properties']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PovrayDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.povrayPathButton=null;
this.goButton=null;
this.saveField=null;
this.savePathLabel=null;
this.outputWidth=0;
this.outputHeight=0;
this.povrayPathLabel=null;
this.runPovCheck=null;
this.allFramesCheck=null;
this.antiAliasCheck=null;
this.displayWhileRenderingCheck=null;
this.imageSizeWidth=null;
this.imageSizeTextWidth=null;
this.imageSizeHeight=null;
this.imageSizeTextHeight=null;
this.imageSizeRatioBox=null;
this.imageSizeRatioCombo=null;
this.outputFormatCheck=null;
this.outputFormatCombo=null;
this.outputAlphaCheck=null;
this.mosaicPreviewCheck=null;
this.mosaicPreviewStart=null;
this.mosaicPreviewComboStart=null;
this.mosaicPreviewEnd=null;
this.mosaicPreviewComboEnd=null;
this.outputExtension=null;
this.outputFileType=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.outputWidth=-1;
this.outputHeight=-1;
this.outputExtension=".png";
this.outputFileType="N";
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JFrame$org_jmol_viewer_Viewer', function (f, vwr) {
C$.superclazz.c$$java_awt_Frame$S$Z.apply(this, [f, $I$(1).$$S("Render in POV-Ray"), true]);
C$.$init$.apply(this);
this.vwr=vwr;
var text=null;
var screenWidth=vwr.getScreenWidth$();
var screenHeight=vwr.getScreenHeight$();
this.setImageDimensions$I$I(screenWidth, screenHeight);
var updateActionListener=((P$.PovrayDialog$1||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].updateScreen$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$1.$init$, [this, null]));
var updateInputVerifier=((P$.PovrayDialog$2||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.InputVerifier'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'verify$javax_swing_JComponent', function (component) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].updateScreen$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
return true;
});
})()
), Clazz.new_($I$(2), [this, null],P$.PovrayDialog$2));
var updateItemListener=((P$.PovrayDialog$3||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].updateScreen$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$3.$init$, [this, null]));
var windowBox=$I$(3).createVerticalBox$();
this.getContentPane$().add$java_awt_Component(windowBox);
var mainBox=$I$(3).createVerticalBox$();
var justSavingBox=$I$(3).createVerticalBox$();
text=$I$(1).$$S("Conversion from Jmol to POV-Ray");
justSavingBox.setBorder$javax_swing_border_Border(Clazz.new_($I$(4).c$$S,[text]));
var saveBox=$I$(3).createHorizontalBox$();
text=$I$(1).$$S("File Name:");
saveBox.setBorder$javax_swing_border_Border(Clazz.new_($I$(4).c$$S,[text]));
text=$I$(1).$$S("\'caffeine.pov\' -> \'caffeine.pov\', \'caffeine.pov.ini\', \'caffeine.pov.spt\'");
saveBox.setToolTipText$S(text);
this.saveField=Clazz.new_($I$(5).c$$S$I,["Jmol.pov", 20]);
this.saveField.addActionListener$java_awt_event_ActionListener(updateActionListener);
this.saveField.setInputVerifier$javax_swing_InputVerifier(updateInputVerifier);
saveBox.add$java_awt_Component(this.saveField);
justSavingBox.add$java_awt_Component(saveBox);
var savePathBox=$I$(3).createHorizontalBox$();
text=$I$(1).$$S("Working Directory");
savePathBox.setBorder$javax_swing_border_Border(Clazz.new_($I$(4).c$$S,[text]));
text=$I$(1).$$S("Where the .pov files will be saved");
savePathBox.setToolTipText$S(text);
this.savePathLabel=Clazz.new_($I$(5).c$$S,[""]);
this.savePathLabel.setEditable$Z(false);
this.savePathLabel.setBorder$javax_swing_border_Border(null);
savePathBox.add$java_awt_Component(this.savePathLabel);
text=$I$(1).$$S("Select");
var savePathButton=Clazz.new_($I$(6).c$$S,[text]);
savePathButton.addActionListener$java_awt_event_ActionListener(((P$.PovrayDialog$4||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].showSavePathDialog$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$4.$init$, [this, null])));
savePathBox.add$java_awt_Component(savePathButton);
justSavingBox.add$java_awt_Component(savePathBox);
mainBox.add$java_awt_Component(justSavingBox);
var povOptionsBox=$I$(3).createVerticalBox$();
text=$I$(1).$$S("POV-Ray Runtime Options");
povOptionsBox.setBorder$javax_swing_border_Border(Clazz.new_($I$(4).c$$S,[text]));
var runPovBox=$I$(3).createHorizontalBox$();
text=$I$(1).$$S("Run POV-Ray directly");
this.runPovCheck=Clazz.new_($I$(7).c$$S$Z,[text, true]);
text=$I$(1).$$S("Launch POV-Ray from within Jmol");
this.runPovCheck.setToolTipText$S(text);
this.runPovCheck.addItemListener$java_awt_event_ItemListener(updateItemListener);
runPovBox.add$java_awt_Component(this.runPovCheck);
runPovBox.add$java_awt_Component($I$(3).createGlue$());
povOptionsBox.add$java_awt_Component(runPovBox);
var displayBox=$I$(3).createHorizontalBox$();
text=$I$(1).$$S("Display While Rendering");
this.displayWhileRenderingCheck=Clazz.new_($I$(7).c$$S$Z,[text, true]);
text=$I$(1).$$S("Should POV-Ray attempt to display while rendering?");
this.displayWhileRenderingCheck.setToolTipText$S(text);
this.displayWhileRenderingCheck.addItemListener$java_awt_event_ItemListener(updateItemListener);
displayBox.add$java_awt_Component(this.displayWhileRenderingCheck);
displayBox.add$java_awt_Component($I$(3).createGlue$());
povOptionsBox.add$java_awt_Component(displayBox);
var imageBox=$I$(3).createHorizontalBox$();
imageBox.add$java_awt_Component($I$(3).createHorizontalStrut$I(10));
var imageSizeDetailBox=$I$(3).createVerticalBox$();
var imageSizeXYBox=$I$(3).createHorizontalBox$();
text=$I$(1).$$S("width:") + " ";
this.imageSizeWidth=Clazz.new_($I$(8).c$$S,[text]);
text=$I$(1).$$S("Image width");
this.imageSizeWidth.setToolTipText$S(text);
imageSizeXYBox.add$java_awt_Component(this.imageSizeWidth);
this.imageSizeTextWidth=Clazz.new_($I$(9));
this.imageSizeTextWidth.setValue$O(Integer.valueOf$I(this.outputWidth));
this.imageSizeTextWidth.addPropertyChangeListener$S$java_beans_PropertyChangeListener("value", ((P$.PovrayDialog$5||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].imageSizeChanged$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].updateCommandLine$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$5.$init$, [this, null])));
imageSizeXYBox.add$java_awt_Component(this.imageSizeTextWidth);
imageSizeXYBox.add$java_awt_Component($I$(3).createHorizontalStrut$I(10));
text=$I$(1).$$S("height:") + " ";
this.imageSizeHeight=Clazz.new_($I$(8).c$$S,[text]);
text=$I$(1).$$S("Image height");
this.imageSizeHeight.setToolTipText$S(text);
imageSizeXYBox.add$java_awt_Component(this.imageSizeHeight);
this.imageSizeTextHeight=Clazz.new_($I$(9));
this.imageSizeTextHeight.setValue$O(Integer.valueOf$I(this.outputHeight));
this.imageSizeTextHeight.addPropertyChangeListener$S$java_beans_PropertyChangeListener("value", ((P$.PovrayDialog$6||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].imageSizeChanged$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].updateCommandLine$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$6.$init$, [this, null])));
imageSizeXYBox.add$java_awt_Component(this.imageSizeTextHeight);
imageSizeXYBox.add$java_awt_Component($I$(3).createGlue$());
imageSizeDetailBox.add$java_awt_Component(imageSizeXYBox);
var imageSizeBox=$I$(3).createHorizontalBox$();
text=$I$(1).$$S("Fixed ratio : ");
this.imageSizeRatioBox=Clazz.new_($I$(7).c$$S$Z,[text, true]);
text=$I$(1).$$S("Use a fixed ratio for width:height");
this.imageSizeRatioBox.setToolTipText$S(text);
this.imageSizeRatioBox.addItemListener$java_awt_event_ItemListener(((P$.PovrayDialog$7||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].imageSizeChanged$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].updateCommandLine$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$7.$init$, [this, null])));
imageSizeBox.add$java_awt_Component(this.imageSizeRatioBox);
imageSizeBox.add$java_awt_Component($I$(3).createHorizontalStrut$I(10));
this.imageSizeRatioCombo=Clazz.new_($I$(10));
text=$I$(1).$$S("User defined");
this.imageSizeRatioCombo.addItem$TE(text);
text=$I$(1).$$S("Keep ratio of Jmol window");
this.imageSizeRatioCombo.addItem$TE(text);
text="4:3";
this.imageSizeRatioCombo.addItem$TE(text);
text="16:9";
this.imageSizeRatioCombo.addItem$TE(text);
this.imageSizeRatioCombo.setSelectedIndex$I(1);
this.imageSizeRatioCombo.addActionListener$java_awt_event_ActionListener(((P$.PovrayDialog$8||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].imageSizeChanged$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].updateCommandLine$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$8.$init$, [this, null])));
imageSizeBox.add$java_awt_Component(this.imageSizeRatioCombo);
imageSizeBox.add$java_awt_Component($I$(3).createGlue$());
imageSizeDetailBox.add$java_awt_Component(imageSizeBox);
imageSizeDetailBox.add$java_awt_Component($I$(3).createGlue$());
imageBox.add$java_awt_Component(imageSizeDetailBox);
imageBox.add$java_awt_Component($I$(3).createGlue$());
povOptionsBox.add$java_awt_Component(imageBox);
this.imageSizeChanged$();
var outputBox=$I$(3).createHorizontalBox$();
outputBox.add$java_awt_Component($I$(3).createHorizontalStrut$I(10));
this.outputFormatCombo=Clazz.new_($I$(10));
text=$I$(1).$$S("N - PNG");
this.outputFormatCombo.addItem$TE(text);
text=$I$(1).$$S("P - PPM");
this.outputFormatCombo.addItem$TE(text);
text=$I$(1).$$S("C - Compressed Targa-24");
this.outputFormatCombo.addItem$TE(text);
text=$I$(1).$$S("T - Uncompressed Targa-24");
this.outputFormatCombo.addItem$TE(text);
this.outputFormatCombo.setSelectedIndex$I(0);
this.outputFormatCombo.addActionListener$java_awt_event_ActionListener(((P$.PovrayDialog$9||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].outputFormatChanged$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].updateCommandLine$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$9.$init$, [this, null])));
outputBox.add$java_awt_Component(this.outputFormatCombo);
outputBox.add$java_awt_Component($I$(3).createGlue$());
povOptionsBox.add$java_awt_Component(outputBox);
this.outputFormatChanged$();
var alphaBox=$I$(3).createHorizontalBox$();
text=$I$(1).$$S("Alpha transparency");
this.outputAlphaCheck=Clazz.new_($I$(7).c$$S$Z,[text, false]);
text=$I$(1).$$S("Output Alpha transparency data");
this.outputAlphaCheck.setToolTipText$S(text);
this.outputAlphaCheck.addItemListener$java_awt_event_ItemListener(((P$.PovrayDialog$10||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].updateCommandLine$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$10.$init$, [this, null])));
alphaBox.add$java_awt_Component(this.outputAlphaCheck);
alphaBox.add$java_awt_Component($I$(3).createGlue$());
povOptionsBox.add$java_awt_Component(alphaBox);
var mosaicBox=$I$(3).createHorizontalBox$();
text=$I$(1).$$S("Mosaic preview");
this.mosaicPreviewCheck=Clazz.new_($I$(7).c$$S$Z,[text, false]);
text=$I$(1).$$S("Render the image in several passes");
this.mosaicPreviewCheck.setToolTipText$S(text);
this.mosaicPreviewCheck.addItemListener$java_awt_event_ItemListener(((P$.PovrayDialog$11||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].mosaicPreviewChanged$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].updateCommandLine$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$11.$init$, [this, null])));
mosaicBox.add$java_awt_Component(this.mosaicPreviewCheck);
mosaicBox.add$java_awt_Component($I$(3).createHorizontalStrut$I(10));
text=$I$(1).$$S("Start size : ");
this.mosaicPreviewStart=Clazz.new_($I$(8).c$$S,[text]);
text=$I$(1).$$S("Initial size of the tiles");
this.mosaicPreviewStart.setToolTipText$S(text);
mosaicBox.add$java_awt_Component(this.mosaicPreviewStart);
this.mosaicPreviewComboStart=Clazz.new_($I$(10));
for (var power=0; power < 8; power++) {
this.mosaicPreviewComboStart.addItem$TE(Integer.toString$I((Math.pow(2, power)|0)));
}
this.mosaicPreviewComboStart.setSelectedIndex$I(3);
this.mosaicPreviewComboStart.addActionListener$java_awt_event_ActionListener(((P$.PovrayDialog$12||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].mosaicPreviewChanged$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].updateCommandLine$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$12.$init$, [this, null])));
mosaicBox.add$java_awt_Component(this.mosaicPreviewComboStart);
mosaicBox.add$java_awt_Component($I$(3).createHorizontalStrut$I(10));
text=$I$(1).$$S("End size : ");
this.mosaicPreviewEnd=Clazz.new_($I$(8).c$$S,[text]);
text=$I$(1).$$S("Final size of the tiles");
this.mosaicPreviewEnd.setToolTipText$S(text);
mosaicBox.add$java_awt_Component(this.mosaicPreviewEnd);
this.mosaicPreviewComboEnd=Clazz.new_($I$(10));
for (var power=0; power < 8; power++) {
this.mosaicPreviewComboEnd.addItem$TE(Integer.toString$I((Math.pow(2, power)|0)));
}
this.mosaicPreviewComboEnd.setSelectedIndex$I(0);
this.mosaicPreviewComboEnd.addActionListener$java_awt_event_ActionListener(((P$.PovrayDialog$13||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].mosaicPreviewChanged$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].updateCommandLine$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$13.$init$, [this, null])));
mosaicBox.add$java_awt_Component(this.mosaicPreviewComboEnd);
mosaicBox.add$java_awt_Component($I$(3).createGlue$());
povOptionsBox.add$java_awt_Component(mosaicBox);
this.mosaicPreviewChanged$();
var povrayPathBox=$I$(3).createHorizontalBox$();
text=$I$(1).$$S("Location of the POV-Ray Executable");
povrayPathBox.setBorder$javax_swing_border_Border(Clazz.new_($I$(4).c$$S,[text]));
text=$I$(1).$$S("Location of the POV-Ray Executable");
povrayPathBox.setToolTipText$S(text);
this.povrayPathLabel=Clazz.new_($I$(5).c$$S,[""]);
this.povrayPathLabel.setEditable$Z(false);
this.povrayPathLabel.setBorder$javax_swing_border_Border(null);
povrayPathBox.add$java_awt_Component(this.povrayPathLabel);
text=$I$(1).$$S("Select");
this.povrayPathButton=Clazz.new_($I$(6).c$$S,[text]);
this.povrayPathButton.addActionListener$java_awt_event_ActionListener(((P$.PovrayDialog$14||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].showPovrayPathDialog$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$14.$init$, [this, null])));
povrayPathBox.add$java_awt_Component(this.povrayPathButton);
povOptionsBox.add$java_awt_Component(povrayPathBox);
mainBox.add$java_awt_Component(povOptionsBox);
var buttonBox=$I$(3).createHorizontalBox$();
buttonBox.add$java_awt_Component($I$(3).createGlue$());
text=$I$(1).$$S("Go!");
this.goButton=Clazz.new_($I$(6).c$$S,[text]);
text=$I$(1).$$S("Save file and possibly launch POV-Ray");
this.goButton.setToolTipText$S(text);
this.goButton.addActionListener$java_awt_event_ActionListener(((P$.PovrayDialog$15||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].goPressed$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$15.$init$, [this, null])));
buttonBox.add$java_awt_Component(this.goButton);
text=$I$(1).$$S("Cancel");
var cancelButton=Clazz.new_($I$(6).c$$S,[text]);
text=$I$(1).$$S("Cancel this dialog without saving");
cancelButton.setToolTipText$S(text);
cancelButton.addActionListener$java_awt_event_ActionListener(((P$.PovrayDialog$16||
(function(){var C$=Clazz.newClass(P$, "PovrayDialog$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'].cancelPressed$.apply(this.b$['org.openscience.jmol.app.jmolpanel.PovrayDialog'], []);
});
})()
), Clazz.new_(P$.PovrayDialog$16.$init$, [this, null])));
buttonBox.add$java_awt_Component(cancelButton);
windowBox.add$java_awt_Component(mainBox);
windowBox.add$java_awt_Component(buttonBox);
p$1.getPathHistory.apply(this, []);
this.updateScreen$();
this.pack$();
this.centerDialog$();
this.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'setImageDimensions$I$I', function (imageWidth, imageHeight) {
this.outputWidth=imageWidth;
this.outputHeight=imageHeight;
this.updateCommandLine$();
});

Clazz.newMeth(C$, 'goPressed$', function () {
var basename=this.saveField.getText$();
var filename=basename;
var savePath=this.savePathLabel.getText$();
var theFile=Clazz.new_($I$(11).c$$S$S,[savePath, filename]);
basename=filename=theFile.getAbsolutePath$();
var height=Integer.parseInt$S(this.imageSizeTextHeight.getValue$().toString());
var width=Integer.parseInt$S(this.imageSizeTextWidth.getValue$().toString());
var params=Clazz.new_($I$(12));
params.put$TK$TV("type", "Povray");
params.put$TK$TV("fileName", filename);
params.put$TK$TV("width", Integer.valueOf$I(width));
params.put$TK$TV("height", Integer.valueOf$I(height));
params.put$TK$TV("params", p$1.getINI.apply(this, []));
var data=this.vwr.generateOutputForExport$java_util_Map(params);
if (data == null ) return;
this.vwr.writeTextFile$S$S(filename + ".ini", data);
var callPovray=this.runPovCheck.isSelected$();
if (callPovray) {
var commandLineArgs=null;
commandLineArgs=Clazz.array(String, -1, [this.povrayPathLabel.getText$(), filename + ".ini"]);
try {
$I$(13).getRuntime$().exec$SA(commandLineArgs);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(14).errorEx$S$Throwable("Caught IOException in povray exec", e);
$I$(14).error$S("CmdLine:");
for (var i=0; i < commandLineArgs.length; i++) {
$I$(14).error$S("  <" + commandLineArgs[i] + ">" );
}
} else {
throw e;
}
}
}this.setVisible$Z(false);
p$1.saveHistory.apply(this, []);
this.dispose$();
});

Clazz.newMeth(C$, 'cancelPressed$', function () {
this.setVisible$Z(false);
this.dispose$();
});

Clazz.newMeth(C$, 'showSavePathDialog$', function () {
var myChooser=Clazz.new_($I$(15));
myChooser.setFileSelectionMode$I(1);
var button=myChooser.showDialog$java_awt_Component$S(this, $I$(1).$$S("Select"));
if (button == 0) {
var newFile=myChooser.getSelectedFile$();
var savePath;
if (newFile.isDirectory$()) {
savePath=newFile.toString();
} else {
savePath=newFile.getParent$();
}this.savePathLabel.setText$S(savePath);
this.updateCommandLine$();
this.pack$();
}});

Clazz.newMeth(C$, 'showPovrayPathDialog$', function () {
var myChooser=Clazz.new_($I$(15));
var button=myChooser.showDialog$java_awt_Component$S(this, $I$(1).$$S("Select"));
if (button == 0) {
var newFile=myChooser.getSelectedFile$();
this.povrayPathLabel.setText$S(newFile.toString());
this.updateCommandLine$();
this.pack$();
}});

Clazz.newMeth(C$, 'imageSizeChanged$', function () {
var selected=true;
var enabled=true;
var ratioSelected=false;
if (this.imageSizeRatioBox != null ) {
ratioSelected=this.imageSizeRatioBox.isSelected$();
this.imageSizeRatioBox.setEnabled$Z(selected && enabled );
}if (this.imageSizeWidth != null ) {
this.imageSizeWidth.setEnabled$Z(selected && enabled );
}if (this.imageSizeTextWidth != null ) {
this.imageSizeTextWidth.setEnabled$Z(selected && enabled );
}if (this.imageSizeHeight != null ) {
this.imageSizeHeight.setEnabled$Z(selected && !ratioSelected && enabled  );
}if (this.imageSizeTextHeight != null ) {
this.imageSizeTextHeight.setEnabled$Z(selected && !ratioSelected && enabled  );
}if (this.imageSizeRatioCombo != null ) {
this.imageSizeRatioCombo.setEnabled$Z(selected && ratioSelected && enabled  );
if ((this.imageSizeTextWidth != null ) && (this.imageSizeTextHeight != null ) ) {
var width=Integer.parseInt$S(this.imageSizeTextWidth.getValue$().toString());
var height;
switch (this.imageSizeRatioCombo.getSelectedIndex$()) {
case 0:
break;
case 1:
height=(((width) * this.outputHeight / this.outputWidth)|0);
this.imageSizeTextHeight.setValue$O(Integer.valueOf$I(height));
break;
case 2:
height=(((width) * 3 / 4)|0);
this.imageSizeTextHeight.setValue$O(Integer.valueOf$I(height));
break;
case 3:
height=(((width) * 9 / 16)|0);
this.imageSizeTextHeight.setValue$O(Integer.valueOf$I(height));
break;
}
}}});

Clazz.newMeth(C$, 'outputFormatChanged$', function () {
if (this.outputFormatCheck != null ) {
var selected=this.outputFormatCheck.isSelected$();
var enabled=true;
this.outputFormatCheck.setEnabled$Z(enabled);
if (this.outputFormatCombo != null ) {
this.outputFormatCombo.setEnabled$Z(selected && enabled );
switch (this.outputFormatCombo.getSelectedIndex$()) {
case 0:
this.outputExtension=".png";
this.outputFileType="N";
break;
case 1:
this.outputExtension=".ppm";
this.outputFileType="P";
break;
case 2:
this.outputExtension=".tga";
this.outputFileType="C";
break;
case 3:
this.outputExtension=".tga";
this.outputFileType="T";
break;
}
}}});

Clazz.newMeth(C$, 'mosaicPreviewChanged$', function () {
if (this.mosaicPreviewCheck != null ) {
var selected=this.mosaicPreviewCheck.isSelected$();
var enabled=this.runPovCheck.isSelected$();
this.mosaicPreviewCheck.setEnabled$Z(enabled);
if (this.mosaicPreviewStart != null ) {
this.mosaicPreviewStart.setEnabled$Z(selected && enabled );
}if (this.mosaicPreviewComboStart != null ) {
this.mosaicPreviewComboStart.setEnabled$Z(selected && enabled );
}if (this.mosaicPreviewEnd != null ) {
this.mosaicPreviewEnd.setEnabled$Z(selected && enabled );
}if (this.mosaicPreviewComboEnd != null ) {
this.mosaicPreviewComboEnd.setEnabled$Z(selected && enabled );
}}});

Clazz.newMeth(C$, 'updateScreen$', function () {
var callPovray=false;
if (this.runPovCheck != null ) {
callPovray=this.runPovCheck.isSelected$();
}var text=null;
if (callPovray) {
text=$I$(1).$$S("Go!");
} else {
text=$I$(1).$$S("Save");
}if (this.goButton != null ) {
this.goButton.setText$S(text);
}var useIni=true;
if (this.antiAliasCheck != null ) {
this.antiAliasCheck.setEnabled$Z(callPovray || useIni );
}if (this.povrayPathButton != null ) {
this.povrayPathButton.setEnabled$Z(callPovray || useIni );
}this.imageSizeChanged$();
this.outputFormatChanged$();
this.updateCommandLine$();
});

Clazz.newMeth(C$, 'updateCommandLine$', function () {
});

Clazz.newMeth(C$, 'getCommandLine$', function () {
var basename=null;
if (this.saveField != null ) {
basename=this.saveField.getText$();
}var savePath=null;
if (this.savePathLabel != null ) {
savePath=this.savePathLabel.getText$();
}var povrayPath=null;
if (this.povrayPathLabel != null ) {
povrayPath=this.povrayPathLabel.getText$();
}if ((savePath == null ) || (povrayPath == null ) || (basename == null )  ) {
return "";
}if (!savePath.endsWith$S($I$(11).separator)) {
savePath += $I$(11).separator;
}var commandLine=this.doubleQuoteIfContainsSpace$S(povrayPath) + " +I" + this.simpleQuoteIfContainsSpace$S(savePath + basename + ".pov" ) ;
commandLine += " +O" + this.simpleQuoteIfContainsSpace$S(savePath + basename + this.outputExtension ) + " +F" + this.outputFileType ;
if ((this.outputAlphaCheck != null ) && (this.outputAlphaCheck.isSelected$()) ) {
commandLine += " +UA";
}commandLine += " +H" + this.imageSizeTextHeight.getValue$() + " +W" + this.imageSizeTextWidth.getValue$() ;
commandLine += " +A0.1";
if ((this.displayWhileRenderingCheck != null ) && (this.displayWhileRenderingCheck.isSelected$()) ) {
commandLine += " +D +P";
}if ((this.allFramesCheck != null ) && (this.allFramesCheck.isSelected$()) ) {
commandLine += " +KFI1";
commandLine += " +KFF" + this.vwr.ms.mc;
commandLine += " +KI1";
commandLine += " +KF" + this.vwr.ms.mc;
}if ((this.mosaicPreviewCheck != null ) && (this.mosaicPreviewCheck.isSelected$()) ) {
commandLine += " +SP" + this.mosaicPreviewComboStart.getSelectedItem$() + " +EP" + this.mosaicPreviewComboEnd.getSelectedItem$() ;
}commandLine += " -V";
return commandLine;
});

Clazz.newMeth(C$, 'getINI', function () {
var data=Clazz.new_($I$(16));
var savePath=this.savePathLabel.getText$();
if (!savePath.endsWith$S($I$(11).separator)) {
savePath += $I$(11).separator;
}var basename=this.saveField.getText$();
data.append$S("Input_File_Name=" + savePath + basename + "\n" );
data.append$S("Output_to_File=true\n");
data.append$S("Output_File_Type=" + this.outputFileType + "\n" );
data.append$S("Output_File_Name=" + savePath + basename + this.outputExtension + "\n" );
data.append$S("Height=" + this.imageSizeTextHeight.getValue$() + "\n" );
data.append$S("Width=" + this.imageSizeTextWidth.getValue$() + "\n" );
if ((this.allFramesCheck != null ) && (this.allFramesCheck.isSelected$()) ) {
data.append$S("Initial_Frame=1\n");
data.append$S("Final_Frame=" + this.vwr.ms.mc + "\n" );
data.append$S("Initial_Clock=1\n");
data.append$S("Final_Clock=" + this.vwr.ms.mc + "\n" );
}if ((this.outputAlphaCheck != null ) && (this.outputAlphaCheck.isSelected$()) ) {
data.append$S("Output_Alpha=true\n");
}data.append$S("Antialias=true\n");
data.append$S("Antialias_Threshold=0.1\n");
if ((this.displayWhileRenderingCheck != null ) && (this.displayWhileRenderingCheck.isSelected$()) ) {
data.append$S("Display=true\n");
data.append$S("Pause_When_Done=true\n");
}if ((this.mosaicPreviewCheck != null ) && (this.mosaicPreviewCheck.isSelected$()) ) {
data.append$S("Preview_Start_Size=" + this.mosaicPreviewComboStart.getSelectedItem$() + "\n" );
data.append$S("Preview_End_Size=" + this.mosaicPreviewComboEnd.getSelectedItem$() + "\n" );
}data.append$S("Warning_Level=5\n");
data.append$S("Verbose=false\n");
return data.toString();
}, p$1);

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

Clazz.newMeth(C$, 'getPathHistory', function () {
if (this.povrayPathLabel != null ) {
var povrayPath=$I$(17).getJmolProperty$S$S("povrayPath", System.getProperty$S("user.home"));
if (povrayPath != null ) {
this.povrayPathLabel.setText$S(povrayPath);
}}if (this.savePathLabel != null ) {
var savePath=$I$(17).getJmolProperty$S$S("povraySavePath", System.getProperty$S("user.home"));
if (savePath != null ) {
this.savePathLabel.setText$S(savePath);
}}}, p$1);

Clazz.newMeth(C$, 'saveHistory', function () {
var props=Clazz.new_($I$(18));
props.setProperty$S$S("povrayPath", this.povrayPathLabel.getText$());
props.setProperty$S$S("povraySavePath", this.savePathLabel.getText$());
$I$(17).addJmolProperties$java_util_Properties(props);
}, p$1);

Clazz.newMeth(C$, 'doubleQuoteIfContainsSpace$S', function (str) {
for (var i=str.length$(); --i >= 0; ) if (str.charAt$I(i) == " ") return "\"" + str + "\"" ;

return str;
});

Clazz.newMeth(C$, 'simpleQuoteIfContainsSpace$S', function (str) {
for (var i=str.length$(); --i >= 0; ) if (str.charAt$I(i) == " ") return "\'" + str + "\'" ;

return str;
});
;
(function(){var C$=Clazz.newClass(P$.PovrayDialog, "PovrayWindowListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.WindowAdapter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
this.this$0.cancelPressed$.apply(this.this$0, []);
this.b$['java.awt.Dialog'].setVisible$Z.apply(this.b$['java.awt.Dialog'], [false]);
this.b$['java.awt.Window'].dispose$.apply(this.b$['java.awt.Window'], []);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
