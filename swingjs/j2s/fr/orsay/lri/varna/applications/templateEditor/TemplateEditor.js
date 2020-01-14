(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.templateEditor"),p$1={},I$=[[0,'fr.orsay.lri.varna.VARNAPanel','javax.swing.JPanel','java.awt.GridLayout','javax.swing.JToolBar','javax.swing.JButton','javax.swing.UIManager','fr.orsay.lri.varna.models.templates.DrawRNATemplateMethod','javax.swing.JComboBox','fr.orsay.lri.varna.models.templates.DrawRNATemplateCurveMethod','java.awt.FlowLayout','javax.swing.JLabel','javax.swing.ButtonGroup','javax.swing.JToggleButton','java.awt.BorderLayout','fr.orsay.lri.varna.applications.templateEditor.TemplatePanel','java.awt.Dimension','javax.swing.undo.UndoManager','javax.swing.JScrollPane','javax.swing.BoxLayout','java.awt.dnd.DropTarget',['fr.orsay.lri.varna.applications.templateEditor.TemplateEditorPanelUI','.Tool'],'javax.swing.JOptionPane','javax.swing.JFileChooser','fr.orsay.lri.varna.applications.FileNameExtensionFilter','java.io.File','fr.orsay.lri.varna.models.templates.Benchmark','java.net.URL','java.io.InputStreamReader','java.io.BufferedReader','java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TemplateEditor", null, 'javax.swing.JFrame', ['java.awt.event.KeyListener', 'java.awt.event.ActionListener', 'java.awt.dnd.DropTargetListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._sk=null;
this._vp=null;
this.currentFilePath=null;
this.saveButton=null;
this.jp=null;
this.manager=null;
this.flipButton=null;
this.ellipseMethodList=null;
this.applyMethodList=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.currentFilePath=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
p$1.init.apply(this, []);
p$1.clearCurrentFilePath.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getJp$', function () {
return this.jp;
});

Clazz.newMeth(C$, 'init', function () {
try {
this._vp=Clazz.new_($I$(1).c$$S$S,[" ", "."]);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
e.printStackTrace$();
} else {
throw e;
}
}
this._vp.setNumPeriod$I(0);
var p=Clazz.new_($I$(2));
p.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3).c$$I$I,[1, 2]));
var systemBar=Clazz.new_($I$(4));
var optionsBar=Clazz.new_($I$(4));
var newButton=Clazz.new_($I$(5).c$$S$javax_swing_Icon,["New", $I$(6).getIcon$O("FileView.fileIcon")]);
newButton.setActionCommand$S("new");
newButton.addActionListener$java_awt_event_ActionListener(this);
newButton.addKeyListener$java_awt_event_KeyListener(this);
var loadButton=Clazz.new_($I$(5).c$$S$javax_swing_Icon,["Open...", $I$(6).getIcon$O("FileView.directoryIcon")]);
loadButton.setActionCommand$S("open");
loadButton.addActionListener$java_awt_event_ActionListener(this);
loadButton.addKeyListener$java_awt_event_KeyListener(this);
this.saveButton=Clazz.new_($I$(5).c$$S$javax_swing_Icon,["Save", $I$(6).getIcon$O("FileView.floppyDriveIcon")]);
this.saveButton.setActionCommand$S("save");
this.saveButton.addActionListener$java_awt_event_ActionListener(this);
this.saveButton.addKeyListener$java_awt_event_KeyListener(this);
this.saveButton.setEnabled$Z(false);
var saveAsButton=Clazz.new_($I$(5).c$$S$javax_swing_Icon,["Save As...", $I$(6).getIcon$O("FileView.floppyDriveIcon")]);
saveAsButton.setActionCommand$S("save as");
saveAsButton.addActionListener$java_awt_event_ActionListener(this);
saveAsButton.addKeyListener$java_awt_event_KeyListener(this);
var undoButton=Clazz.new_($I$(5).c$$S,["Undo"]);
undoButton.setActionCommand$S("undo");
undoButton.addActionListener$java_awt_event_ActionListener(this);
undoButton.addKeyListener$java_awt_event_KeyListener(this);
var redoButton=Clazz.new_($I$(5).c$$S,["Redo"]);
redoButton.setActionCommand$S("redo");
redoButton.addActionListener$java_awt_event_ActionListener(this);
redoButton.addKeyListener$java_awt_event_KeyListener(this);
var benchmarkButton=Clazz.new_($I$(5).c$$S,["Benchmark"]);
benchmarkButton.setActionCommand$S("benchmark");
benchmarkButton.addActionListener$java_awt_event_ActionListener(this);
benchmarkButton.addKeyListener$java_awt_event_KeyListener(this);
var applyMethods=$I$(7).values$();
this.applyMethodList=Clazz.new_($I$(8).c$$TEA,[applyMethods]);
this.applyMethodList.setSelectedItem$O($I$(7).getDefault$());
var ellipseMethods=$I$(9).values$();
this.ellipseMethodList=Clazz.new_($I$(8).c$$TEA,[ellipseMethods]);
this.ellipseMethodList.setSelectedItem$O($I$(9).getDefault$());
var applyButton=Clazz.new_($I$(5).c$$S,["Apply"]);
applyButton.setActionCommand$S("apply");
applyButton.addActionListener$java_awt_event_ActionListener(this);
applyButton.addKeyListener$java_awt_event_KeyListener(this);
var retrieveButton=Clazz.new_($I$(5).c$$S,["Retrieve Templates"]);
retrieveButton.setActionCommand$S("retrieve");
retrieveButton.addActionListener$java_awt_event_ActionListener(this);
this.flipButton=Clazz.new_($I$(5).c$$S,["Flip helix"]);
this.flipButton.setActionCommand$S("flip");
this.flipButton.addActionListener$java_awt_event_ActionListener(this);
this.flipButton.addKeyListener$java_awt_event_KeyListener(this);
this.flipButton.setEnabled$Z(false);
systemBar.add$java_awt_Component(newButton);
systemBar.add$java_awt_Component(loadButton);
systemBar.add$java_awt_Component(this.saveButton);
systemBar.add$java_awt_Component(saveAsButton);
systemBar.addSeparator$();
systemBar.addSeparator$();
systemBar.addSeparator$();
systemBar.add$java_awt_Component(benchmarkButton);
systemBar.addKeyListener$java_awt_event_KeyListener(this);
optionsBar.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10).c$$I,[0]));
optionsBar.add$java_awt_Component(Clazz.new_($I$(11).c$$S,["Single-Stranded "]));
optionsBar.add$java_awt_Component(this.ellipseMethodList);
optionsBar.addSeparator$();
optionsBar.add$java_awt_Component(Clazz.new_($I$(11).c$$S,["Layout "]));
optionsBar.add$java_awt_Component(this.applyMethodList);
optionsBar.addSeparator$();
optionsBar.add$java_awt_Component(applyButton);
optionsBar.addSeparator$();
optionsBar.add$java_awt_Component(retrieveButton);
optionsBar.doLayout$();
var toolBar=Clazz.new_($I$(4));
var bg=Clazz.new_($I$(12));
toolBar.setOrientation$I(1);
var selectButton=Clazz.new_($I$(13).c$$S,["Select"]);
selectButton.setActionCommand$S("select");
selectButton.addActionListener$java_awt_event_ActionListener(this);
selectButton.addKeyListener$java_awt_event_KeyListener(this);
var helixButton=Clazz.new_($I$(13).c$$S,["Helix"]);
helixButton.setActionCommand$S("helix");
helixButton.addActionListener$java_awt_event_ActionListener(this);
helixButton.addKeyListener$java_awt_event_KeyListener(this);
helixButton.setSelected$Z(true);
var unpairedButton=Clazz.new_($I$(13).c$$S,["Unpaired"]);
unpairedButton.setActionCommand$S("unpaired");
unpairedButton.addActionListener$java_awt_event_ActionListener(this);
unpairedButton.addKeyListener$java_awt_event_KeyListener(this);
bg.add$javax_swing_AbstractButton(selectButton);
bg.add$javax_swing_AbstractButton(helixButton);
bg.add$javax_swing_AbstractButton(unpairedButton);
toolBar.add$java_awt_Component(undoButton);
toolBar.add$java_awt_Component(redoButton);
toolBar.addSeparator$();
toolBar.add$java_awt_Component(Clazz.new_($I$(11).c$$S,["Tools:"]));
toolBar.add$java_awt_Component(selectButton);
toolBar.add$java_awt_Component(helixButton);
toolBar.add$java_awt_Component(unpairedButton);
toolBar.addSeparator$();
toolBar.add$java_awt_Component(this.flipButton);
systemBar.addKeyListener$java_awt_event_KeyListener(this);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14)));
this._sk=Clazz.new_($I$(15).c$$fr_orsay_lri_varna_applications_templateEditor_TemplateEditor,[this]);
this._sk.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(16).c$$I$I,[800, 600]));
this.manager=Clazz.new_($I$(17));
this.manager.setLimit$I(2000);
this._sk.addUndoableEditListener$javax_swing_undo_UndoManager(this.manager);
this._sk.addKeyListener$java_awt_event_KeyListener(this);
this.jp=Clazz.new_($I$(18).c$$java_awt_Component$I$I,[this._sk, 22, 32]);
p.add$java_awt_Component(this.jp);
p.add$java_awt_Component(this._vp);
var bars=Clazz.new_($I$(2));
var barsLayout=Clazz.new_($I$(19).c$$java_awt_Container$I,[bars, 1]);
bars.setLayout$java_awt_LayoutManager(barsLayout);
systemBar.setAlignmentX$F(0);
bars.add$java_awt_Component(systemBar);
optionsBar.setAlignmentX$F(0);
bars.add$java_awt_Component(optionsBar);
this.getContentPane$().add$java_awt_Component$O(bars, "First");
this.getContentPane$().add$java_awt_Component$O(toolBar, "West");
this.getContentPane$().add$java_awt_Component$O(p, "Center");
this.addKeyListener$java_awt_event_KeyListener(this);
Clazz.new_($I$(20).c$$java_awt_Component$java_awt_dnd_DropTargetListener,[this._vp, this]);
Clazz.new_($I$(20).c$$java_awt_Component$java_awt_dnd_DropTargetListener,[this._sk, this]);
this.pack$();
this._sk.requestFocusInWindow$();
}, p$1);

Clazz.newMeth(C$, 'getCurrentFilePath', function () {
return this.currentFilePath;
}, p$1);

Clazz.newMeth(C$, 'setCurrentFilePath$java_io_File', function (currentFilePath) {
this.currentFilePath=currentFilePath;
this.saveButton.setEnabled$Z(true);
this.setTitle$S("VARNA Template Editor: " + currentFilePath);
}, p$1);

Clazz.newMeth(C$, 'clearCurrentFilePath', function () {
this.currentFilePath=null;
this.saveButton.setEnabled$Z(false);
this.setTitle$S("VARNA Template Editor: New file");
}, p$1);

Clazz.newMeth(C$, 'main$SA', function (argv) {
try {
var lfs=$I$(6).getInstalledLookAndFeels$();
var i=1;
var info=lfs[i % lfs.length];
$I$(6).setLookAndFeel$S(info.getClassName$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
var frame=Clazz.new_(C$);
frame.pack$();
frame.setVisible$Z(true);
frame.setDefaultCloseOperation$I(3);
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
System.out.println$O(e);
switch (e.getKeyCode$()) {
case (127):
{
var h=this._sk.getSelected$();
this._sk.Unselect$();
this._sk.getTemplateUI$().removeElementUI$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(h);
this._sk.repaint$();
}break;
case (90):
{
if (e.isControlDown$()) {
this.undo$();
}}break;
case (89):
{
if (e.isControlDown$()) {
this.redo$();
}}break;
}
});

Clazz.newMeth(C$, 'undo$', function () {
if (this.manager.canUndo$()) {
this.manager.undo$();
}});

Clazz.newMeth(C$, 'redo$', function () {
if (this.manager.canRedo$()) {
this.manager.redo$();
}});

Clazz.newMeth(C$, 'clearTemplate$', function () {
this._sk.clearTemplate$();
p$1.clearCurrentFilePath.apply(this, []);
this.manager.discardAllEdits$();
});

Clazz.newMeth(C$, 'loadTemplate$java_io_File', function (templatePath) {
this._sk.loadFromXmlFile$java_io_File(templatePath);
p$1.setCurrentFilePath$java_io_File.apply(this, [templatePath]);
this.manager.discardAllEdits$();
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (e) {
System.out.println$O(e);
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (e) {
System.out.println$O(e);
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (e.getActionCommand$().equals$O("undo")) {
this.undo$();
} else if (e.getActionCommand$().equals$O("redo")) {
this.redo$();
} else if (e.getActionCommand$().equals$O("flip")) {
var gr=this._sk.getSelected$();
if (gr != null ) {
if (Clazz.instanceOf(gr, "fr.orsay.lri.varna.applications.templateEditor.Helix")) {
this._sk.getTemplateUI$().flipHelixUI$fr_orsay_lri_varna_applications_templateEditor_Helix(gr);
}}} else if (e.getActionCommand$().equals$O("select")) {
this._sk.getTemplateUI$().setSelectedTool$fr_orsay_lri_varna_applications_templateEditor_TemplateEditorPanelUI_Tool($I$(21).SELECT);
} else if (e.getActionCommand$().equals$O("helix")) {
this._sk.getTemplateUI$().setSelectedTool$fr_orsay_lri_varna_applications_templateEditor_TemplateEditorPanelUI_Tool($I$(21).CREATE_HELIX);
} else if (e.getActionCommand$().equals$O("retrieve")) {
this.retrieveTemplates$();
} else if (e.getActionCommand$().equals$O("unpaired")) {
this._sk.getTemplateUI$().setSelectedTool$fr_orsay_lri_varna_applications_templateEditor_TemplateEditorPanelUI_Tool($I$(21).CREATE_UNPAIRED);
} else if (e.getActionCommand$().equals$O("apply")) {
try {
var method=this.applyMethodList.getSelectedItem$();
var curveMethod=this.ellipseMethodList.getSelectedItem$();
var map=this._vp.getRNA$().drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_templates_DrawRNATemplateMethod$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z(this._sk.getTemplate$(), this._vp.getConfig$(), method, curveMethod, p$1.getStraightBulges.apply(this, []));
for (var i, $i = map.getSourceElemsAsSet$().iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
var t=map.getPartner$I(i);
var c=this._sk.getElement$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(t).getDominantColor$();
this._vp.getRNA$().getBaseAt$I(i).getStyleBase$().setBaseInnerColor$java_awt_Color(c);
}
this._vp.repaint$();
} catch (e1) {
if (Clazz.exceptionOf(e1,"fr.orsay.lri.varna.models.templates.RNATemplateDrawingAlgorithmException")){
e1.printStackTrace$();
$I$(22).showMessageDialog$java_awt_Component$O$S$I(this, e1.getMessage$(), "Template-based RNA drawing error", 0);
} else {
throw e1;
}
}
} else if (e.getActionCommand$().equals$O("save")) {
try {
this._sk.getTemplate$().toXMLFile$java_io_File(p$1.getCurrentFilePath.apply(this, []));
System.out.println$S("Template saved in " + p$1.getCurrentFilePath.apply(this, []).toString());
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionXMLGeneration")){
var e1 = e$$;
{
e1.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionInvalidRNATemplate")){
var e1 = e$$;
{
e1.printStackTrace$();
}
} else {
throw e$$;
}
}
} else if (e.getActionCommand$().equals$O("save as")) {
var chooser=Clazz.new_($I$(23));
var filter=Clazz.new_($I$(24).c$$S$S,["VARNA RNA template (.xml)", "xml"]);
chooser.setFileFilter$javax_swing_filechooser_FileFilter(filter);
if (chooser.showSaveDialog$java_awt_Component(this._sk) == 0) {
var path=chooser.getSelectedFile$().getAbsolutePath$();
if (!path.toLowerCase$().endsWith$S(".xml")) {
path=path + ".xml";
}try {
this._sk.getTemplate$().toXMLFile$java_io_File(Clazz.new_($I$(25).c$$S,[path]));
System.out.println$S("Template saved in " + path);
p$1.setCurrentFilePath$java_io_File.apply(this, [Clazz.new_($I$(25).c$$S,[path])]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionXMLGeneration")){
var e1 = e$$;
{
e1.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionInvalidRNATemplate")){
var e1 = e$$;
{
e1.printStackTrace$();
}
} else {
throw e$$;
}
}
}} else if (e.getActionCommand$().equals$O("new")) {
this.clearTemplate$();
} else if (e.getActionCommand$().equals$O("open")) {
var chooser=Clazz.new_($I$(23));
var filter=Clazz.new_($I$(24).c$$S$S,["VARNA RNA template (.xml)", "xml"]);
chooser.setFileFilter$javax_swing_filechooser_FileFilter(filter);
if (chooser.showOpenDialog$java_awt_Component(this._sk) == 0) {
var templatePath=chooser.getSelectedFile$();
this.loadTemplate$java_io_File(templatePath);
}} else if (e.getActionCommand$().equals$O("benchmark")) {
Clazz.new_($I$(26).c$$fr_orsay_lri_varna_models_rna_RNA,[this._vp.getRNA$()]).printAll$();
}});

Clazz.newMeth(C$, 'getStraightBulges', function () {
return false;
}, p$1);

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DropTargetDragEvent', function (arg0) {
});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DropTargetEvent', function (arg0) {
});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DropTargetDragEvent', function (arg0) {
});

Clazz.newMeth(C$, 'drop$java_awt_dnd_DropTargetDropEvent', function (dtde) {
try {
var tr=dtde.getTransferable$();
var flavors=tr.getTransferDataFlavors$();
for (var i=0; i < flavors.length; i++) {
if (flavors[i].isFlavorJavaFileListType$()) {
dtde.acceptDrop$I(3);
var list=tr.getTransferData$java_awt_datatransfer_DataFlavor(flavors[i]);
for (var j=0; j < list.size$(); j++) {
var o=list.get$I(j);
if (Clazz.instanceOf(dtde.getSource$(), "java.awt.dnd.DropTarget")) {
var dt=dtde.getSource$();
var c=dt.getComponent$();
if (Clazz.instanceOf(c, "fr.orsay.lri.varna.VARNAPanel")) {
var vp=c;
vp.loadFile$java_io_File$Z(o, true);
vp.repaint$();
} else if (Clazz.instanceOf(c, "fr.orsay.lri.varna.applications.templateEditor.TemplatePanel")) {
var sk=c;
sk.loadFromXmlFile$java_io_File(o);
sk.repaint$();
}}}
dtde.dropComplete$Z(true);
return;
}}
dtde.rejectDrop$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
dtde.rejectDrop$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DropTargetDragEvent', function (arg0) {
});

Clazz.newMeth(C$, 'getVarnaPanel$', function () {
return this._vp;
});

Clazz.newMeth(C$, 'flipButtonEnable$', function () {
this.flipButton.setEnabled$Z(true);
});

Clazz.newMeth(C$, 'flipButtonDisable$', function () {
this.flipButton.setEnabled$Z(false);
});

Clazz.newMeth(C$, 'retrieveTemplates$', function () {
var u;
try {
u=Clazz.new_($I$(27).c$$S,["http://127.0.0.1/VARNA/templateShare/actions.php?action=retrieve&nbHelices=3&nbMultiLoops=1&length=50"]);
var uc=u.openConnection$();
var isr=Clazz.new_($I$(28).c$$java_io_InputStream,[uc.getInputStream$()]);
var b=Clazz.new_($I$(29).c$$java_io_Reader,[isr]);
var res=Clazz.new_($I$(30));
var s=b.readLine$();
while (s != null ){
res.add$TE(s);
s=b.readLine$();
}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
});
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
