(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},p$2={},p$3={},I$=[[0,'org.openscience.jmol.app.janocchio.NmrSaver','org.openscience.jmol.app.janocchio.MyFileFilter','java.io.File','org.openscience.jmol.app.janocchio.LoadMeasureThreadJSON','org.openscience.jmol.app.janocchio.NmrReader','org.openscience.jmol.app.janocchio.NamfisReader','java.io.BufferedReader','java.io.FileReader','org.openscience.jmol.app.janocchio.NamfisSaver','org.jmol.c.CBK','java.util.HashSet','org.openscience.jmol.app.janocchio.NmrResourceHandler','java.util.Hashtable','org.openscience.jmol.app.janocchio.NmrMolecule','javajs.util.BS','javax.swing.Action',['org.openscience.jmol.app.janocchio.NMR_JmolPanel','.ReadNmrAction'],['org.openscience.jmol.app.janocchio.NMR_JmolPanel','.SaveNmrAction'],['org.openscience.jmol.app.janocchio.NMR_JmolPanel','.DetachAppletAction'],['org.openscience.jmol.app.janocchio.NMR_JmolPanel','.ReattachAppletAction'],['org.openscience.jmol.app.janocchio.NMR_JmolPanel','.WriteNamfisAction'],['org.openscience.jmol.app.janocchio.NMR_JmolPanel','.ReadNamfisAction'],['org.openscience.jmol.app.janocchio.NMR_JmolPanel','.LabelNmrAction'],['org.openscience.jmol.app.janocchio.NMR_JmolPanel','.JumpBestFrameAction'],['org.openscience.jmol.app.janocchio.NMR_JmolPanel','.ViewNoeTableAction'],['org.openscience.jmol.app.janocchio.NMR_JmolPanel','.ViewCoupleTableAction'],'org.openscience.jmol.app.jmolpanel.JmolResourceHandler','org.openscience.jmol.app.janocchio.NmrGuiMap','org.openscience.jmol.app.janocchio.FrameCounter','org.jmol.i18n.GT','org.openscience.jmol.app.janocchio.NoeTable','org.openscience.jmol.app.janocchio.CoupleTable','org.openscience.jmol.app.janocchio.LabelSetter','javax.swing.Box','org.openscience.jmol.app.janocchio.NMR_DisplayPanel',['org.openscience.jmol.app.janocchio.NMR_JmolPanel','.MyStatusListener'],'org.openscience.jmol.app.janocchio.NMR_Viewer','java.awt.Color','java.awt.BorderLayout','javax.swing.JSplitPane','java.awt.Dimension','javax.swing.JPanel','javax.swing.BoxLayout','javax.swing.JLabel','org.openscience.jmol.app.janocchio.PopulationDisplay','org.openscience.jmol.app.janocchio.FrameDeltaDisplay',['org.openscience.jmol.app.jmolpanel.JmolPanel','.AppCloser'],'java.util.ArrayList','java.util.StringTokenizer','java.io.PrintWriter','java.io.FileWriter','javajs.util.JSJSONParser','javax.swing.JOptionPane','org.openscience.jmol.app.janocchio.LoadMeasureThread','org.jmol.modelset.Atom','org.jmol.quantum.NMRCalculation']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NMR_JmolPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.openscience.jmol.app.jmolpanel.JmolPanel');
C$.$classes$=[['SaveNmrAction',0],['ReadNmrAction',1],['LabelNmrAction',1],['DetachAppletAction',1],['ReattachAppletAction',1],['ReadNamfisAction',1],['WriteNamfisAction',1],['JumpBestFrameAction',1],['AtomSetChooserAction',0],['ViewNoeTableAction',1],['ViewCoupleTableAction',1],['MoleculeDependentAction',1026],['MyStatusListener',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.htMessageCallbacks=Clazz.new_($I$(13,1));
},1);

C$.$fields$=[['Z',['isApplet'],'O',['nmrDisplay','org.openscience.jmol.app.janocchio.NMR_DisplayPanel','mainSplitPane','javax.swing.JSplitPane','noeTable','org.openscience.jmol.app.janocchio.NoeTable','coupleTable','org.openscience.jmol.app.janocchio.CoupleTable','frameCounter','org.openscience.jmol.app.janocchio.FrameCounter','labelSetter','org.openscience.jmol.app.janocchio.LabelSetter','populationDisplay','org.openscience.jmol.app.janocchio.PopulationDisplay','frameDeltaDisplay','org.openscience.jmol.app.janocchio.FrameDeltaDisplay','openChooser','org.jmol.dialog.FileChooser','exportChooser','javax.swing.JFileChooser','+saveNmrChooser','+readNmrChooser','+saveNamfisChooser','+readNamfisChooser','nmrApplet','org.openscience.jmol.app.janocchio.NmrApplet','nmrguimap','org.openscience.jmol.app.janocchio.NmrGuiMap','htMessageCallbacks','java.util.Map']]
,['O',['currentDir','java.io.File','$border','java.awt.Point','haveBorder','Boolean','htGuiChanges','java.util.Set']]]

Clazz.newMeth(C$, 'getMenuItem$S', function (name) {
return this.nmrguimap.get$S(name);
});

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_JmolApp$org_openscience_jmol_app_jmolpanel_Splash$javax_swing_JFrame$org_openscience_jmol_app_Jmol$I$I$java_util_Map$java_awt_Point', function (jmolApp, splash, frame, parent, startupWidth, startupHeight, vwrOptions, loc) {
;C$.superclazz.c$$org_openscience_jmol_app_JmolApp$org_openscience_jmol_app_jmolpanel_Splash$javax_swing_JFrame$org_openscience_jmol_app_jmolpanel_JmolPanel$I$I$java_util_Map$java_awt_Point.apply(this,[jmolApp, splash, frame, parent, startupWidth, startupHeight, vwrOptions, loc]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDistanceJMolecule$javajs_util_BS$SA$Z', function (mol, labelArray, forNOE) {
return Clazz.new_([this, (mol == null  ? this.vwr.getFrameAtoms$() : mol), labelArray, forNOE],$I$(14,1).c$$org_openscience_jmol_app_janocchio_NMR_JmolPanel$javajs_util_BS$SA$Z);
});

Clazz.newMeth(C$, 'getAllMolecules$', function () {
var mols;
var mc=(this.vwr).getModelCount$();
mols=Clazz.array($I$(15), [mc]);
for (var i=mc; --i >= 0; ) {
mols[i]=this.vwr.getModelUndeletedAtomsBitSet$I(i);
}
return mols;
});

Clazz.newMeth(C$, 'getWindowName$', function () {
return "Janocchio";
});

Clazz.newMeth(C$, 'getFrameActions$', function () {
var actions=C$.superclazz.prototype.getFrameActions$.apply(this, []);
var a=Clazz.array($I$(16), -1, [Clazz.new_($I$(17,1),[this, null]), Clazz.new_($I$(18,1),[this, null]), Clazz.new_($I$(19,1),[this, null]), Clazz.new_($I$(20,1),[this, null]), Clazz.new_($I$(21,1),[this, null]), Clazz.new_($I$(22,1),[this, null]), Clazz.new_($I$(23,1),[this, null]), Clazz.new_($I$(24,1),[this, null]), Clazz.new_($I$(25,1),[this, null]), Clazz.new_($I$(26,1),[this, null])]);
for (var i=a.length; --i >= 0; ) actions.add$O(a[i]);

return actions;
});

Clazz.newMeth(C$, 'getStringX$S', function (cmd) {
return (cmd.indexOf$S("NMR.") == 0 ? $I$(12).getStringX$S(cmd) : $I$(27).getStringX$S(cmd));
});

Clazz.newMeth(C$, 'getIconX$S', function (img) {
return (img.indexOf$S("NMR.") == 0 ? $I$(12).getIconX$S(img) : $I$(27).getIconX$S(img));
});

Clazz.newMeth(C$, 'createGuiMap$', function () {
return this.nmrguimap=Clazz.new_($I$(28,1));
});

Clazz.newMeth(C$, 'createStatusBar$', function () {
return C$.superclazz.prototype.createStatusBar$.apply(this, []);
});

Clazz.newMeth(C$, 'createToolBar$', function () {
var toolbar=this.newToolbar$SA(C$.tokenize$S($I$(12).getStringX$S("toolbar")));
this.frameCounter=Clazz.new_($I$(29,1).c$$org_openscience_jmol_app_janocchio_NMR_Viewer,[this.vwr]);
toolbar.add$java_awt_Component$O(this.frameCounter, "East");
this.say$S($I$(30).$$S("Initializing Noes..."));
this.noeTable=Clazz.new_($I$(31,1).c$$org_openscience_jmol_app_janocchio_NMR_JmolPanel$javax_swing_JFrame,[this, this.frame]);
this.say$S($I$(30).$$S("Initializing Couples..."));
this.coupleTable=Clazz.new_($I$(32,1).c$$org_openscience_jmol_app_janocchio_NMR_JmolPanel$javax_swing_JFrame,[this, this.frame]);
this.labelSetter=Clazz.new_($I$(33,1).c$$org_openscience_jmol_app_janocchio_NMR_Viewer$org_openscience_jmol_app_janocchio_NoeTable$org_openscience_jmol_app_janocchio_CoupleTable,[this.vwr, this.noeTable, this.coupleTable]);
toolbar.add$java_awt_Component$O(this.labelSetter, "East");
toolbar.add$java_awt_Component($I$(34).createHorizontalGlue$());
return toolbar;
});

Clazz.newMeth(C$, 'createDisplayAndAddStatusListener$', function () {
this.isPlugin=(this.jmolApp).isPlugin$();
this.say$S($I$(30).$$S("Initializing 3D display..."));
this.display=this.nmrDisplay=Clazz.new_($I$(35,1).c$$org_openscience_jmol_app_jmolpanel_JmolPanel,[this]);
this.vwrOptions.put$O$O("display", this.display);
this.myStatusListener=Clazz.new_($I$(36,1).c$$org_openscience_jmol_app_jmolpanel_JmolPanel$org_openscience_jmol_app_jmolpanel_DisplayPanel,[this, null, this, this.display]);
this.vwrOptions.put$O$O("statusListener", this.myStatusListener);
});

Clazz.newMeth(C$, 'setupModelAdapterAndViewer$', function () {
if ($I$(27).codePath != null ) this.vwrOptions.put$O$O("codePath", $I$(27).codePath);
if (this.modelAdapter != null ) this.vwrOptions.put$O$O("modelAdapter", this.modelAdapter);
this.say$S($I$(30).$$S("Initializing 3D display...4"));
this.vwr=Clazz.new_($I$(37,1).c$$java_util_Map,[this.vwrOptions]);
this.say$S($I$(30).$$S("Initializing 3D display...5"));
this.nmrDisplay.setViewer$org_jmol_viewer_Viewer(this.vwr);
this.myStatusListener.setViewer$org_jmol_viewer_Viewer(this.vwr);
});

Clazz.newMeth(C$, 'getDialogs$', function () {
C$.superclazz.prototype.getDialogs$.apply(this, []);
});

Clazz.newMeth(C$, 'getMeasurementTable$', function () {
C$.superclazz.prototype.getMeasurementTable$.apply(this, []);
});

Clazz.newMeth(C$, 'setupDisplay$', function () {
C$.superclazz.prototype.setupDisplay$.apply(this, []);
});

Clazz.newMeth(C$, 'setFrameLocation$java_awt_Point$org_openscience_jmol_app_jmolpanel_JmolPanel', function (loc, parent) {
C$.superclazz.prototype.setFrameLocation$java_awt_Point$org_openscience_jmol_app_jmolpanel_JmolPanel.apply(this, [loc, parent]);
});

Clazz.newMeth(C$, 'setIntoFrame$', function () {
this.frame.setTitle$S("Janocchio");
this.frame.setBackground$java_awt_Color($I$(38).lightGray);
this.frame.setLayout$java_awt_LayoutManager(Clazz.new_($I$(39,1)));
this.frame.setBounds$I$I$I$I(0, 0, this.startupWidth, this.startupHeight);
var contentPane=this.frame.getContentPane$();
this.mainSplitPane=Clazz.new_($I$(40,1).c$$I$java_awt_Component$java_awt_Component,[1, null, null]);
this.mainSplitPane.setOneTouchExpandable$Z(true);
this.mainSplitPane.setContinuousLayout$Z(true);
this.mainSplitPane.setLeftComponent$java_awt_Component(this);
this.frame.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(41,1).c$$I$I,[this.startupWidth + 400, 100]));
var splitPaneRight=Clazz.new_($I$(40,1).c$$I$java_awt_Component$java_awt_Component,[0, null, null]);
splitPaneRight.setOneTouchExpandable$Z(true);
var noePanel=Clazz.new_($I$(42,1));
noePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(43,1).c$$java_awt_Container$I,[noePanel, 3]));
var label=Clazz.new_($I$(44,1).c$$S$javax_swing_Icon$I,["NOE Table", null, 0]);
label.setAlignmentX$F(0.5);
noePanel.add$java_awt_Component(label);
noePanel.add$java_awt_Component(this.noeTable);
var couplePanel=Clazz.new_($I$(42,1));
couplePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(43,1).c$$java_awt_Container$I,[couplePanel, 3]));
var label1=Clazz.new_($I$(44,1).c$$S$javax_swing_Icon$I,["Couple Table", null, 0]);
label1.setAlignmentX$F(0.5);
this.populationDisplay=Clazz.new_([(this.vwr)],$I$(45,1).c$$org_openscience_jmol_app_janocchio_NMR_Viewer);
this.frameDeltaDisplay=Clazz.new_([(this.vwr)],$I$(46,1).c$$org_openscience_jmol_app_janocchio_NMR_Viewer);
this.nmrDisplay.setPopulationDisplay$org_openscience_jmol_app_janocchio_PopulationDisplay(this.populationDisplay);
this.nmrDisplay.setFrameDeltaDisplay$org_openscience_jmol_app_janocchio_FrameDeltaDisplay(this.frameDeltaDisplay);
this.noeTable.setFrameDeltaDisplay$org_openscience_jmol_app_janocchio_FrameDeltaDisplay(this.frameDeltaDisplay);
this.coupleTable.setFrameDeltaDisplay$org_openscience_jmol_app_janocchio_FrameDeltaDisplay(this.frameDeltaDisplay);
couplePanel.add$java_awt_Component$O(label1, "First");
couplePanel.add$java_awt_Component$O(this.coupleTable, "Center");
couplePanel.add$java_awt_Component$O(this.populationDisplay, "Last");
couplePanel.add$java_awt_Component$O(this.frameDeltaDisplay, "Last");
splitPaneRight.setTopComponent$java_awt_Component(couplePanel);
splitPaneRight.setBottomComponent$java_awt_Component(noePanel);
this.mainSplitPane.setRightComponent$java_awt_Component(splitPaneRight);
splitPaneRight.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(41,1).c$$I$I,[300, 500]));
contentPane.add$java_awt_Component$O(this.mainSplitPane, "Center");
contentPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(41,1).c$$I$I,[this.startupWidth, this.startupHeight]));
this.frame.pack$();
var jmolIcon=$I$(27).getIconX$S("icon");
var iconImage=jmolIcon.getImage$();
this.frame.setIconImage$java_awt_Image(iconImage);
if (!(this.jmolApp).isPlugin$()) this.frame.addWindowListener$java_awt_event_WindowListener(Clazz.new_($I$(47,1),[this, null]));
});

Clazz.newMeth(C$, 'setupConsole$', function () {
C$.superclazz.prototype.setupConsole$.apply(this, []);
});

Clazz.newMeth(C$, 'setupDnD$', function () {
C$.superclazz.prototype.setupDnD$.apply(this, []);
});

Clazz.newMeth(C$, 'setAtomChooser$', function () {
C$.superclazz.prototype.setAtomChooser$.apply(this, []);
});

Clazz.newMeth(C$, 'launchMainFrame$', function () {
this.say$S($I$(30).$$S("Launching main frame..."));
});

Clazz.newMeth(C$, 'saveWindowSizes$', function () {
C$.superclazz.prototype.saveWindowSizes$.apply(this, []);
});

Clazz.newMeth(C$, 'getJavaConsole$', function () {
C$.superclazz.prototype.getJavaConsole$.apply(this, []);
});

Clazz.newMeth(C$, 'setMenuKeys$S$S', function (key, tokens) {
if (C$.htGuiChanges.contains$O(key)) {
var s=$I$(12).getStringX$S(key);
if (s == null ) {
System.err.println$S("Replacement for " + key + " not found; using " + tokens );
} else {
if (s.startsWith$S("+")) {
s=s.substring$I(1);
var pt=tokens.lastIndexOf$S(" - ");
if (pt < 0) {
tokens += (key.endsWith$S("bar") ? " " : " - ") + s;
} else {
tokens=tokens.substring$I$I(0, pt + 3) + s + tokens.substring$I(pt) ;
}} else {
tokens=s;
}System.out.println$S("Replacement for " + key + " = " + tokens );
}}return tokens;
});

Clazz.newMeth(C$, 'doClose$Z', function (saveSize) {
if (this.isPlugin) {
this.frame.setVisible$Z(false);
(this.jmolApp).plugin.setVisible$Z(false);
} else {
C$.superclazz.prototype.doClose$Z.apply(this, [saveSize]);
}return true;
});

Clazz.newMeth(C$, 'setCurrentDirectoryAll$java_io_File', function (cDir) {
this.openChooser.setCurrentDirectory$java_io_File(cDir);
this.saveNmrChooser.setCurrentDirectory$java_io_File(cDir);
this.saveNamfisChooser.setCurrentDirectory$java_io_File(cDir);
this.readNmrChooser.setCurrentDirectory$java_io_File(cDir);
this.readNamfisChooser.setCurrentDirectory$java_io_File(cDir);
});

Clazz.newMeth(C$, 'getMinindex$', function () {
return this.labelSetter.getMinindex$();
});

Clazz.newMeth(C$, 'getCurrentStructureFile$', function () {
return this.vwr.getModelSetPathName$();
});

Clazz.newMeth(C$, 'getUserDirectory$', function () {
if (System.getProperty$S("user.dir") == null ) {
return null;
}return Clazz.new_([System.getProperty$S("user.dir")],$I$(3,1).c$$S);
}, 1);

Clazz.newMeth(C$, 'dumpContainer$java_awt_Container$S', function (c, s) {
if (c == null ) return;
for (var i=c.getComponentCount$(); --i >= 0; ) {
var c1=c.getComponent$I(i);
System.out.println$S(s + c1);
C$.dumpContainer$java_awt_Container$S(c1, s + " ");
}
}, 1);

Clazz.newMeth(C$, 'tokenize$S', function (input) {
var v=Clazz.new_($I$(48,1));
var t=Clazz.new_($I$(49,1).c$$S,[input]);
var cmd;
while (t.hasMoreTokens$()){
v.add$O(t.nextToken$());
}
cmd=Clazz.array(String, [v.size$()]);
for (var i=0; i < cmd.length; i++) {
cmd[i]=v.get$I(i);
}
return cmd;
}, 1);

Clazz.newMeth(C$, 'writeNmrData$java_io_File', function (file) {
var out=Clazz.new_([Clazz.new_($I$(51,1).c$$java_io_File,[file])],$I$(50,1).c$$java_io_Writer);
var structurefile=this.vwr.getModelSetPathName$();
out.println$S(structurefile);
var labelArray=this.labelSetter.getLabelArray$();
for (var i=0; i < labelArray.length; i++) {
if (labelArray[i] != null ) {
out.println$S(String.valueOf$I(i + 1) + " " + labelArray[i] );
}}
out.println$S("");
var noeCount=this.noeTable.getRowCount$();
for (var i=0; i < noeCount; i++) {
var atomIndices=this.noeTable.getMeasurementCountPlusIndices$I(i);
out.println$S(String.valueOf$I(atomIndices[1] + 1) + " " + String.valueOf$I(atomIndices[2] + 1) + " " + this.noeTable.getExpNoe$I$I(atomIndices[1], atomIndices[2]) );
}
out.println$S("");
var coupleCount=this.coupleTable.getRowCount$();
for (var i=0; i < coupleCount; i++) {
var atomIndices=this.coupleTable.getMeasurementCountPlusIndices$I(i);
out.println$S(String.valueOf$I(atomIndices[1] + 1) + " " + String.valueOf$I(atomIndices[2] + 1) + " " + String.valueOf$I(atomIndices[3] + 1) + " " + String.valueOf$I(atomIndices[4] + 1) + " " + this.coupleTable.getExpCouple$I$I(atomIndices[1], atomIndices[4]) );
}
out.flush$();
out.close$();
});

Clazz.newMeth(C$, 'readNmrData$java_io_File', function (file) {
var fileData=this.vwr.getFileAsString$S(file.getAbsolutePath$());
var structureFile=C$.firstLineOf$S(fileData);
fileData=fileData.substring$I(structureFile.length$()).trim$();
p$3.checkLoadAndRun$S$O$S.apply(this, [structureFile, fileData, "jnc"]);
});

Clazz.newMeth(C$, 'readNmrDataJSON$java_io_File', function (file) {
var json=this.vwr.getFileAsString$S(file.getAbsolutePath$());
var jsonData=Clazz.new_($I$(52,1)).parseMap$S$Z(json, true);
var structureFile=jsonData.get$O("StructureFile");
p$3.checkLoadAndRun$S$O$S.apply(this, [structureFile, jsonData, "json"]);
});

Clazz.newMeth(C$, 'checkLoadAndRun$S$O$S', function (structureFile, fileData, fileType) {
var currentStructureFile=this.getCurrentStructureFile$();
if (currentStructureFile == null ) {
var opt=$I$(53).showConfirmDialog$java_awt_Component$O$S$I(this, "No Structure File currently loaded.\nLoad Structure File " + structureFile + "\ndefined in this NMR Data File?" , "No Structure Warning", 0);
if (opt != 0) return;
} else if (!currentStructureFile.equals$O(structureFile)) {
var opt=$I$(53).showConfirmDialog$java_awt_Component$O$S$I(this, "This NMR Data file was saved from a different structure file from that currently loaded.\nContinue Reading Data?", "Read NMR Data Warning", 0);
if (opt != 0) {
return;
}structureFile=null;
}var thread=("jnc".equals$O(fileType) ? Clazz.new_($I$(54,1).c$$org_openscience_jmol_app_janocchio_NMR_JmolPanel$S,[this, fileData]) : Clazz.new_($I$(4,1).c$$org_openscience_jmol_app_janocchio_NMR_JmolPanel$java_util_Map,[this, fileData]));
if (structureFile == null ) {
thread.start$();
} else {
thread.loadAndRun$S(structureFile);
}}, p$3);

Clazz.newMeth(C$, 'firstLineOf$S', function (s) {
var pt;
if ((pt=s.indexOf$S("\n")) < 0 && (pt=s.indexOf$S("\r")) < 0 ) pt=s.length$();
return s.substring$I$I(0, pt).trim$();
}, 1);

Clazz.newMeth(C$, 'runScriptWithCallback$Thread$S', function (t, command) {
var key="NMR:" + t.getClass$().getName$();
this.htMessageCallbacks.put$O$O(key, t);
this.vwr.script$S(command);
this.vwr.script$S("#>NMR>" + key + "<NMR<" );
});

Clazz.newMeth(C$, 'notifyScriptCallback$S', function (script) {
var pt=(script.startsWith$S("#>NMR>") ? script.indexOf$S("<NMR<") : -1);
if (pt < 0) return;
var key=script.substring$I$I(6, pt);
var t=this.htMessageCallbacks.remove$O(key);
if (t != null ) t.start$();
});

Clazz.newMeth(C$, 'getFrameAtomCount$', function () {
return this.vwr.getFrameAtoms$().cardinality$();
});

Clazz.newMeth(C$, 'getViewerMeasurement$I$I', function (vRow, type) {
var m=this.vwr.getMeasurementCountPlusIndices$I(vRow);
if (m[0] != 2) return null;
var atoms=Clazz.array($I$(55), -1, [(this.vwr).getAtomAt$I(m[1]), null, null, (this.vwr).getAtomAt$I(m[2])]);
return ($I$(56).getCalcType$org_jmol_modelset_AtomA$SA$I(atoms, null, type) == 0 ? null : atoms);
});

Clazz.newMeth(C$, 'getViewerRow$I$I', function (row, type) {
for (var j=-1, i=0; i < this.vwr.getMeasurementCount$(); i++) {
if (this.getViewerMeasurement$I$I(i, type) == null ) continue;
if (++j == row) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'clearViewerSelection$', function () {
this.vwr.script$S("select none");
});

C$.$static$=function(){C$.$static$=0;
C$.haveBorder=Boolean.FALSE;
{
C$.htGuiChanges=Clazz.new_($I$(11,1));
var changes=C$.tokenize$S($I$(12).getStringX$S("changes"));
for (var i=changes.length; --i >= 0; ) C$.htGuiChanges.add$O(changes[i]);

};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_JmolPanel, "SaveNmrAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["NMR.saveNmr"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var nmrSaver=Clazz.new_($I$(1,1).c$$javax_swing_JFileChooser,[this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].saveNmrChooser]);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].saveNmrChooser.setAccessory$javax_swing_JComponent(nmrSaver);
var retval=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].saveNmrChooser.showSaveDialog$java_awt_Component(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel']);
var cDir=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].saveNmrChooser.getCurrentDirectory$();
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].setCurrentDirectoryAll$java_io_File.apply(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], [cDir]);
if (retval == 0) {
var file=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].saveNmrChooser.getSelectedFile$();
var filter=Clazz.new_($I$(2,1).c$$S$S,["jsn", "NMR Data files"]);
if (file != null ) {
if (!filter.checkExtension$java_io_File(file)) {
var name=file.getAbsolutePath$();
name=name + ".jsn";
file=Clazz.new_($I$(3,1).c$$S,[name]);
}try {
Clazz.new_($I$(4,1).c$$org_openscience_jmol_app_janocchio_NMR_JmolPanel$java_util_Map,[this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], null]).writeNmrDataJSON$java_io_File(file);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
} else {
throw exc;
}
}
}}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_JmolPanel, "ReadNmrAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["NMR.readNmr"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var nmrReader=Clazz.new_($I$(5,1).c$$javax_swing_JFileChooser,[this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].readNmrChooser]);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].readNmrChooser.setAccessory$javax_swing_JComponent(nmrReader);
var retval=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].readNmrChooser.showOpenDialog$java_awt_Component(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel']);
var cDir=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].readNmrChooser.getCurrentDirectory$();
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].setCurrentDirectoryAll$java_io_File.apply(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], [cDir]);
if (retval == 0) {
var file=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].readNmrChooser.getSelectedFile$();
if (file != null ) {
try {
var filter=Clazz.new_($I$(2,1).c$$S$S,["jnc", "NMR Data files"]);
if (filter.checkExtension$java_io_File(file)) {
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].readNmrData$java_io_File.apply(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], [file]);
} else {
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].readNmrDataJSON$java_io_File.apply(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], [file]);
}} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
} else {
throw exc;
}
}
}}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_JmolPanel, "LabelNmrAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["NMR.labelNmr"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var labelArray=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].labelSetter.getLabelArray$();
var command= String.instantialize();
for (var i=0; i < labelArray.length; i++) {
command=command + this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].labelSetter.setLabelString$I$S(i, labelArray[i]);
}
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].vwr.script$S(command);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_JmolPanel, "DetachAppletAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["NMR.detachApplet"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_JmolPanel, "ReattachAppletAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["NMR.reattachApplet"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_JmolPanel, "ReadNamfisAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["NMR.readNamfis"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var namfisReader=Clazz.new_($I$(6,1).c$$javax_swing_JFileChooser,[this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].readNamfisChooser]);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].readNamfisChooser.setAccessory$javax_swing_JComponent(namfisReader);
var retval=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].readNamfisChooser.showOpenDialog$java_awt_Component(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel']);
var cDir=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].readNamfisChooser.getCurrentDirectory$();
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].setCurrentDirectoryAll$java_io_File.apply(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], [cDir]);
if (retval == 0) {
var file=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].readNamfisChooser.getSelectedFile$();
if (file != null ) {
try {
p$1.readNamfisOutput$java_io_File.apply(this, [file]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
} else {
throw exc;
}
}
}}});

Clazz.newMeth(C$, 'readNamfisOutput$java_io_File', function (file) {
var inp=Clazz.new_([Clazz.new_($I$(8,1).c$$java_io_File,[file])],$I$(7,1).c$$java_io_Reader);
var line;
line=inp.readLine$();
if (line.matches$S("No feasible solution")) {
inp.close$();
return false;
}inp.readLine$();
inp.readLine$();
inp.readLine$();
var nmodel=(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].vwr).getModelCount$();
var population=Clazz.array(Double.TYPE, [nmodel + 1]);
for (var i=0; i <= nmodel; i++) {
population[i]=0.0;
}
while ((line=inp.readLine$()).trim$().length$() != 0){
var l=line.split$S("[()=\\s]+");
var i=( new Integer(l[1])).intValue$();
var p=( new Double(l[2])).doubleValue$();
population[i]=p;
}
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].populationDisplay.addPopulation$DA(population);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].frameDeltaDisplay.setVisible$Z(false);
var mi=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].getMenuItem$S.apply(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], ["NMR.populationDisplayCheck"]);
mi.setSelected$Z(true);
inp.close$();
return true;
}, p$1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_JmolPanel, "WriteNamfisAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["NMR.writeNamfis"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var namfisSaver=Clazz.new_($I$(9,1).c$$javax_swing_JFileChooser,[this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].saveNamfisChooser]);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].saveNamfisChooser.setAccessory$javax_swing_JComponent(namfisSaver);
var retval=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].saveNamfisChooser.showSaveDialog$java_awt_Component(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel']);
var cDir=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].saveNamfisChooser.getCurrentDirectory$();
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].setCurrentDirectoryAll$java_io_File.apply(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], [cDir]);
if (retval == 0) {
var file=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].saveNamfisChooser.getSelectedFile$();
if (file != null ) {
var name=file.getAbsolutePath$();
var exts=Clazz.array(String, -1, ["in1", "in2", "in3"]);
var filter=Clazz.new_($I$(2,1).c$$SA$S,[exts, ""]);
if (filter.checkExtension$java_io_File(file)) {
name=name.replaceFirst$S$S(".in[0-9]$", "");
}try {
Clazz.new_($I$(4,1).c$$org_openscience_jmol_app_janocchio_NMR_JmolPanel$java_util_Map,[this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], null]).writeNamfisFiles$S(name);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
} else {
throw exc;
}
}
}}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_JmolPanel, "JumpBestFrameAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["NMR.jumpBestFrame"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var frame=Clazz.new_($I$(4,1).c$$org_openscience_jmol_app_janocchio_NMR_JmolPanel$java_util_Map,[this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], null]).jumpBestFrame$();
if (frame >= 0) this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].frameCounter.setFrameNumberChangeViewer$I(frame);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_JmolPanel, "AtomSetChooserAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["atomsetchooser"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].atomSetChooser != null ) this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].atomSetChooser.setVisible$Z(true);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_JmolPanel, "ViewNoeTableAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.jmol.app.janocchio.NMR_JmolPanel','.MoleculeDependentAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["viewNoeTable"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].noeTable.activate$();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_JmolPanel, "ViewCoupleTableAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.jmol.app.janocchio.NMR_JmolPanel','.MoleculeDependentAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["viewCoupleTable"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].coupleTable.activate$();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_JmolPanel, "MoleculeDependentAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.setEnabled$Z(false);
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (event) {
if (event.getPropertyName$().equals$O("chemFile")) {
if (event.getNewValue$() != null ) {
this.setEnabled$Z(true);
} else {
this.setEnabled$Z(false);
}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_JmolPanel, "MyStatusListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.openscience.jmol.app.jmolpanel.StatusListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultFormat="set measurementUnits noe_hz";
},1);

C$.$fields$=[['S',['defaultFormat']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_jmolpanel_JmolPanel$org_openscience_jmol_app_jmolpanel_DisplayPanel', function (jmol, display) {
;C$.superclazz.c$$org_openscience_jmol_app_jmolpanel_JmolPanel$org_openscience_jmol_app_jmolpanel_DisplayPanel.apply(this,[jmol, display]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'notifyFileLoaded$S$S$S$S$Boolean', function (fullPathName, fileName, modelName, errorMsg, isAsync) {
if (errorMsg != null ) {
return;
}if (this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].jmolApp.haveDisplay) this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].pcs.firePropertyChange$S$O$O("chemFile", null, fullPathName);
var nmodel=(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].vwr).getModelCount$();
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].frameCounter.setFrameCount$I(nmodel);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].populationDisplay.setVisible$Z(false);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].frameDeltaDisplay.setVisible$Z(true);
var mi=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].getMenuItem$S.apply(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], ["NMR.frameDeltaDisplayCheck"]);
mi.setSelected$Z(true);
if (this.defaultFormat != null ) this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].vwr.script$S(this.defaultFormat);
}, p$2);

Clazz.newMeth(C$, 'notifyFrameChanged$I', function (modelIndex) {
if (this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].vwr == null  || modelIndex < 0 ) return;
if (modelIndex == -2147483648) modelIndex=(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].vwr).getCurrentModelIndex$();
var modelAtomCount=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].getFrameAtomCount$.apply(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], []);
if (this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].labelSetter.getLabelArray$() == null  || modelAtomCount != this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].labelSetter.getLabelArray$().length ) {
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].labelSetter.allocateLabelArray$I(modelAtomCount);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].noeTable.allocateLabelArray$I(modelAtomCount);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].noeTable.allocateExpNoes$I(modelAtomCount);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].coupleTable.allocateLabelArray$I(modelAtomCount);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].coupleTable.allocateExpCouples$I(modelAtomCount);
}this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].frameCounter.setFrameNumberFromViewer$I(modelIndex + 1);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].populationDisplay.setFrameNumberFromViewer$I(modelIndex + 1);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].coupleTable.setmolCDKuptodate$Z(false);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].noeTable.setmolCDKuptodate$Z(false);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].noeTable.addMol$();
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].coupleTable.updateTables$();
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].noeTable.updateTables$();
});

Clazz.newMeth(C$, 'notifyAtomPicked$I$S', function (atomIndex, strInfo) {
if (atomIndex < 0) {
return;
}var atomNo=(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].vwr).getAtomNumber$I(atomIndex);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].labelSetter.setSelectedAtomIndex$I(atomNo - 1);
var command="set display SELECTED; select (atomindex=" + atomIndex + ")" ;
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].vwr.script$S(command);
});

Clazz.newMeth(C$, 'notifyCallback$org_jmol_c_CBK$OA', function (type, data) {
var strInfo=(data == null  || data[1] == null   ? null : data[1].toString());
C$.superclazz.prototype.notifyCallback$org_jmol_c_CBK$OA.apply(this, [type, data]);
switch (type) {
case $I$(10).LOADSTRUCT:
p$2.notifyFileLoaded$S$S$S$S$Boolean.apply(this, [strInfo, data[2], data[3], data[4], data[8]]);
break;
case $I$(10).ANIMFRAME:
var iData=data[1];
var modelIndex=iData[0];
this.notifyFrameChanged$I(modelIndex);
break;
case $I$(10).PICK:
var atomIndex=(data[2]).intValue$();
this.notifyAtomPicked$I$S(atomIndex, strInfo);
break;
case $I$(10).MEASURE:
var mystatus=data[3];
if (this.defaultFormat != null ) {
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].vwr.script$S(this.defaultFormat);
this.defaultFormat=null;
}if (mystatus.equals$O("measurePending") || mystatus.equals$O("measureDeleted") ) return;
if (mystatus.indexOf$S("Sequence") < 0) {
if (mystatus.indexOf$S("Picked") >= 0) {
var picked=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].vwr.getPOrNull$S("_picked");
if (picked != null ) this.notifyAtomPicked$I$S(picked.intValue$(), strInfo);
}}var n=this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].vwr.getMeasurementCount$() - 1;
System.out.println$S("checking for measurement " + n);
if (this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].getViewerMeasurement$I$I.apply(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], [n, 7]) == null  && this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].getViewerMeasurement$I$I.apply(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], [n, 8]) == null  ) {
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].vwr.deleteMeasurement$I(n);
return;
}System.out.println$S("updating for measurement " + n);
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].noeTable.updateTables$();
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].coupleTable.updateTables$();
break;
case $I$(10).MESSAGE:
break;
case $I$(10).APPLETREADY:
break;
case $I$(10).ATOMMOVED:
break;
case $I$(10).AUDIO:
break;
case $I$(10).CLICK:
break;
case $I$(10).DRAGDROP:
break;
case $I$(10).ECHO:
break;
case $I$(10).ERROR:
break;
case $I$(10).EVAL:
break;
case $I$(10).HOVER:
break;
case $I$(10).IMAGE:
break;
case $I$(10).MINIMIZATION:
break;
case $I$(10).RESIZE:
break;
case $I$(10).SCRIPT:
var status=data[3];
if (status.intValue$() < -1) this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].notifyScriptCallback$S.apply(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'], [data[2].toString()]);
break;
case $I$(10).SERVICE:
break;
case $I$(10).STRUCTUREMODIFIED:
this.notifyStructureModified$();
break;
case $I$(10).SYNC:
break;
default:
break;
}
});

Clazz.newMeth(C$, 'notifyStructureModified$', function () {
this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].vwr.deleteMeasurement$I(this.b$['org.openscience.jmol.app.janocchio.NMR_JmolPanel'].vwr.getMeasurementCount$() - 1);
this.notifyFrameChanged$I(-2147483648);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
