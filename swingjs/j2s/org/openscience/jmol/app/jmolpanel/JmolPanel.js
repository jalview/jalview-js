(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),I$=[[0,'org.openscience.jmol.app.jmolpanel.AboutDialog','org.jmol.util.Logger','org.openscience.jmol.app.jmolpanel.WhatsNewDialog','org.openscience.jmol.app.jmolpanel.CreditsDialog','org.openscience.jmol.app.jmolpanel.GaussianDialog','org.openscience.jmol.app.jmolpanel.JmolResourceHandler','org.jmol.i18n.GT','javax.swing.JOptionPane','org.jmol.dialog.Dialog','org.openscience.jmol.app.jmolpanel.JmolPanel','java.util.Hashtable','org.openscience.jmol.app.jmolpanel.PovrayDialog','javax.swing.SwingUtilities','org.jmol.viewer.Viewer','java.awt.Toolkit','java.beans.PropertyChangeSupport',['org.openscience.jmol.app.jmolpanel.JmolPanel','.ExportAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.PovrayAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.ToWebAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.WriteAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.PrintAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.CopyImageAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.CopyScriptAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.SurfaceToolAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.PasteClipboardAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.ViewMeasurementTableAction'],'javax.swing.BorderFactory','java.awt.BorderLayout',['org.openscience.jmol.app.jmolpanel.JmolPanel','.ExecuteScriptAction'],'javax.swing.Action',['org.openscience.jmol.app.jmolpanel.JmolPanel','.NewAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.NewwinAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.OpenAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.OpenUrlAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.OpenPdbAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.OpenMolAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.CloseAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.ExitAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.AboutAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.WhatsNewAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.CreditsAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.UguideAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.ConsoleAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.RecentFilesAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.ScriptWindowAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.ScriptEditorAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.AtomSetChooserAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.GaussianAction'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.ResizeAction'],'java.util.ArrayList','java.util.Arrays','org.openscience.jmol.app.jmolpanel.GuiMap','org.openscience.jmol.app.jmolpanel.StatusBar','javajs.util.PT','java.awt.Dimension','javax.swing.Box','javax.swing.JToolBar','org.openscience.jmol.app.jmolpanel.DisplayPanel','org.openscience.jmol.app.jmolpanel.StatusListener','org.openscience.jmol.app.jmolpanel.PreferencesDialog','org.openscience.jmol.app.jmolpanel.RecentFilesDialog','org.openscience.jmol.app.jmolpanel.MeasurementTable','javax.swing.JPanel','org.openscience.jmol.app.jsonkiosk.BannerFrame','java.awt.Color',['org.openscience.jmol.app.jmolpanel.JmolPanel','.AppCloser'],'Boolean','org.jmol.awt.FileDropper','javax.swing.JFrame','org.openscience.jmol.app.jmolpanel.console.ConsoleTextArea','java.awt.Font','javax.swing.JScrollPane','javax.swing.JTextArea','org.openscience.jmol.app.webexport.WebExport',['org.openscience.jmol.app.jmolpanel.JmolPanel','.ActionChangedListener'],['org.openscience.jmol.app.jmolpanel.JmolPanel','.AnimButton'],'org.jmol.console.JmolButton','org.jmol.console.JmolToggleButton','java.awt.Insets','javax.swing.JMenuBar','java.util.PropertyResourceBundle','javax.swing.JMenuItem','java.io.File','java.io.FileInputStream','java.util.Properties','org.openscience.jmol.app.Jmol','org.jmol.api.Interface','java.awt.print.PrinterJob','org.openscience.jmol.app.surfacetool.SurfaceTool','org.openscience.jmol.app.jmolpanel.AtomSetChooser','org.jmol.util.Parser','org.jmol.awt.Platform']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JmolPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['org.openscience.jmol.app.SplashInterface', 'org.openscience.jmol.app.jsonkiosk.JsonNioClient']);
C$.$classes$=[['AppCloser',4],['ActionChangedListener',12],['CloseAction',1],['ConsoleAction',1],['AboutAction',1],['WhatsNewAction',1],['CreditsAction',1],['GaussianAction',1],['NewwinAction',1],['UguideAction',1],['PasteClipboardAction',1],['CopyImageAction',1],['CopyScriptAction',1],['PrintAction',1],['OpenAction',1],['OpenUrlAction',1],['OpenPdbAction',1],['OpenMolAction',1],['NewAction',1],['ExitAction',1],['ExportAction',1],['RecentFilesAction',1],['ScriptWindowAction',1],['ScriptEditorAction',1],['AtomSetChooserAction',1],['PovrayAction',1],['WriteAction',1],['ToWebAction',1],['ViewMeasurementTableAction',1],['SurfaceToolAction',1],['ExecuteScriptAction',1],['ResizeAction',1],['AnimButton',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pcs=Clazz.new_($I$(16,1).c$$O,[this]);
this.qualityJPG=-1;
this.qualityPNG=-1;
this.exportAction=Clazz.new_($I$(17,1),[this, null]);
this.povrayAction=Clazz.new_($I$(18,1),[this, null]);
this.toWebAction=Clazz.new_($I$(19,1),[this, null]);
this.writeAction=Clazz.new_($I$(20,1),[this, null]);
this.printAction=Clazz.new_($I$(21,1),[this, null]);
this.copyImageAction=Clazz.new_($I$(22,1),[this, null]);
this.copyScriptAction=Clazz.new_($I$(23,1),[this, null]);
this.surfaceToolAction=Clazz.new_($I$(24,1),[this, null]);
this.pasteClipboardAction=Clazz.new_($I$(25,1),[this, null]);
this.viewMeasurementTableAction=Clazz.new_($I$(26,1),[this, null]);
this.plugins=Clazz.new_($I$(11,1));
},1);

C$.$fields$=[['Z',['isPlugin'],'I',['startupWidth','startupHeight','qualityJPG','qualityPNG'],'S',['appletContext','imageType','windowName'],'O',['vwr','org.jmol.viewer.Viewer','modelAdapter','org.jmol.api.JmolAdapter','jmolApp','org.openscience.jmol.app.JmolApp','status','org.openscience.jmol.app.jmolpanel.StatusBar','serverService','org.openscience.jmol.app.jsonkiosk.JsonNioServer','pcs','java.beans.PropertyChangeSupport','display','org.openscience.jmol.app.jmolpanel.DisplayPanel','gaussianDialog','org.openscience.jmol.app.jmolpanel.GaussianDialog','recentFiles','org.openscience.jmol.app.jmolpanel.RecentFilesDialog','atomSetChooser','org.openscience.jmol.app.jmolpanel.AtomSetChooser','frame','javax.swing.JFrame','splash','org.openscience.jmol.app.SplashInterface','consoleframe','javax.swing.JFrame','service','org.openscience.jmol.app.jsonkiosk.JsonNioServer','guimap','org.openscience.jmol.app.jmolpanel.GuiMap','executeScriptAction','org.openscience.jmol.app.jmolpanel.JmolPanel.ExecuteScriptAction','preferencesDialog','org.openscience.jmol.app.jmolpanel.PreferencesDialog','myStatusListener','org.openscience.jmol.app.jmolpanel.StatusListener','surfaceTool','org.openscience.jmol.app.surfacetool.SurfaceTool','measurementTable','org.openscience.jmol.app.jmolpanel.MeasurementTable','commands','java.util.Map','+menuItems','toolbar','javax.swing.JToolBar','exportAction','org.openscience.jmol.app.jmolpanel.JmolPanel.ExportAction','povrayAction','org.openscience.jmol.app.jmolpanel.JmolPanel.PovrayAction','toWebAction','org.openscience.jmol.app.jmolpanel.JmolPanel.ToWebAction','writeAction','org.openscience.jmol.app.jmolpanel.JmolPanel.WriteAction','printAction','org.openscience.jmol.app.jmolpanel.JmolPanel.PrintAction','copyImageAction','org.openscience.jmol.app.jmolpanel.JmolPanel.CopyImageAction','copyScriptAction','org.openscience.jmol.app.jmolpanel.JmolPanel.CopyScriptAction','surfaceToolAction','org.openscience.jmol.app.jmolpanel.JmolPanel.SurfaceToolAction','pasteClipboardAction','org.openscience.jmol.app.jmolpanel.JmolPanel.PasteClipboardAction','viewMeasurementTableAction','org.openscience.jmol.app.jmolpanel.JmolPanel.ViewMeasurementTableAction','vwrOptions','java.util.Map','+plugins','pluginMenu','javax.swing.JMenu','webExport','org.openscience.jmol.app.webexport.WebExport']]
,['Z',['addPreferencesDialog','addMacrosMenu','allowRecentFiles','addAtomChooser','allowPreferences','allowGaussian','allowJavaConsole'],'I',['numWindows'],'O',['historyFile','org.openscience.jmol.app.HistoryFile','+pluginFile','kioskFrame','org.openscience.jmol.app.jsonkiosk.KioskFrame','bannerFrame','org.openscience.jmol.app.jsonkiosk.BannerFrame','screenSize','java.awt.Dimension','imageChoices','String[]','+imageExtensions']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_JmolApp$org_openscience_jmol_app_jmolpanel_Splash$javax_swing_JFrame$org_openscience_jmol_app_jmolpanel_JmolPanel$I$I$java_util_Map$java_awt_Point', function (jmolApp, splash, frame, parent, startupWidth, startupHeight, vwrOptions, loc) {
;C$.superclazz.c$$Z.apply(this,[true]);C$.$init$.apply(this);
if (vwrOptions == null ) vwrOptions=Clazz.new_($I$(11,1));
this.vwrOptions=vwrOptions;
this.splash=splash;
this.jmolApp=jmolApp;
this.frame=frame;
this.startupWidth=startupWidth;
this.startupHeight=startupHeight;
C$.historyFile=jmolApp.historyFile;
C$.pluginFile=jmolApp.pluginFile;
C$.numWindows++;
try {
if (C$.historyFile != null ) this.say$S("history file is " + C$.historyFile.getFile$().getAbsolutePath$());
if (jmolApp.userPropsFile != null ) this.say$S("user properties file is " + jmolApp.userPropsFile.getAbsolutePath$());
} catch (e) {
}
this.setBorder$javax_swing_border_Border($I$(27).createEtchedBorder$());
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(28,1)));
this.windowName=this.getWindowName$();
this.guimap=this.createGuiMap$();
this.executeScriptAction=Clazz.new_($I$(29,1),[this, null]);
this.createDisplayAndAddStatusListener$();
this.setupModelAdapterAndViewer$();
this.getDialogs$();
this.getMeasurementTable$();
this.setCommandHooks$();
this.status=this.createStatusBar$();
this.toolbar=this.createToolBar$();
if (!jmolApp.haveDisplay) return;
this.setupDisplay$();
this.setFrameLocation$java_awt_Point$org_openscience_jmol_app_jmolpanel_JmolPanel(loc, parent);
this.setIntoFrame$();
this.setupConsole$();
this.setupDnD$();
this.setAtomChooser$();
this.launchMainFrame$();
}, 1);

Clazz.newMeth(C$, 'getFrameActions$', function () {
var defaultActions=Clazz.array($I$(30), -1, [Clazz.new_($I$(31,1),[this, null]), Clazz.new_($I$(32,1),[this, null]), Clazz.new_($I$(33,1),[this, null]), Clazz.new_($I$(34,1),[this, null]), Clazz.new_($I$(35,1),[this, null]), Clazz.new_($I$(36,1),[this, null]), this.printAction, this.exportAction, Clazz.new_($I$(37,1),[this, null]), Clazz.new_($I$(38,1),[this, null]), this.copyImageAction, this.copyScriptAction, this.pasteClipboardAction, Clazz.new_($I$(39,1),[this, null]), Clazz.new_($I$(40,1),[this, null]), Clazz.new_($I$(41,1),[this, null]), Clazz.new_($I$(42,1),[this, null]), Clazz.new_($I$(43,1),[this, null]), (C$.allowRecentFiles ? Clazz.new_($I$(44,1),[this, null]) : null), this.povrayAction, this.writeAction, this.toWebAction, Clazz.new_($I$(45,1),[this, null]), Clazz.new_($I$(46,1),[this, null]), (C$.addAtomChooser ? Clazz.new_($I$(47,1),[this, null]) : null), this.viewMeasurementTableAction, (C$.allowGaussian ? Clazz.new_($I$(48,1),[this, null]) : null), Clazz.new_($I$(49,1),[this, null]), this.surfaceToolAction]);
var actions=Clazz.new_($I$(50,1));
actions.addAll$java_util_Collection($I$(51).asList$OA(defaultActions));
this.display.addActions$java_util_List(actions);
if (C$.addPreferencesDialog) this.preferencesDialog.addActions$java_util_List(actions);
return actions;
});

Clazz.newMeth(C$, 'getStringX$S', function (cmd) {
return $I$(6).getStringX$S(cmd);
});

Clazz.newMeth(C$, 'getIconX$S', function (img) {
return $I$(6).getIconX$S(img);
});

Clazz.newMeth(C$, 'getWindowName$', function () {
return "Jmol";
});

Clazz.newMeth(C$, 'createGuiMap$', function () {
return Clazz.new_($I$(52,1));
});

Clazz.newMeth(C$, 'createStatusBar$', function () {
return Clazz.new_($I$(53,1).c$$I,[this.startupWidth]);
});

Clazz.newMeth(C$, 'createToolBar$', function () {
var toolbar=this.newToolbar$SA((function(a,f){return f.apply(null,a)})([this.setMenuKeys$S$S("toolbar", $I$(6).getStringX$S("toolbar"))],$I$(54).getTokens$S));
toolbar.setPreferredSize$java_awt_Dimension(Clazz.new_([this.display.getPreferredSize$().width, 25],$I$(55,1).c$$I$I));
toolbar.add$java_awt_Component($I$(56).createHorizontalGlue$());
return toolbar;
});

Clazz.newMeth(C$, 'newToolbar$SA', function (keys) {
var toolbar=Clazz.new_($I$(57,1));
for (var i=0; i < keys.length; i++) {
if (keys[i].equals$O("-")) {
toolbar.addSeparator$();
} else {
toolbar.add$java_awt_Component(this.createToolbarButton$S(keys[i]));
}}
return toolbar;
});

Clazz.newMeth(C$, 'createDisplayAndAddStatusListener$', function () {
this.say$S($I$(7).$$S("Initializing 3D display..."));
this.display=Clazz.new_($I$(58,1).c$$org_openscience_jmol_app_jmolpanel_JmolPanel,[this]);
this.vwrOptions.put$O$O("display", this.display);
this.myStatusListener=Clazz.new_($I$(59,1).c$$org_openscience_jmol_app_jmolpanel_JmolPanel$org_openscience_jmol_app_jmolpanel_DisplayPanel,[this, this.display]);
this.vwrOptions.put$O$O("statusListener", this.myStatusListener);
});

Clazz.newMeth(C$, 'setupModelAdapterAndViewer$', function () {
if ($I$(6).codePath != null ) this.vwrOptions.put$O$O("codePath", $I$(6).codePath);
if (this.modelAdapter != null ) this.vwrOptions.put$O$O("modelAdapter", this.modelAdapter);
this.say$S($I$(7).$$S("Initializing 3D display...4"));
this.vwr=Clazz.new_($I$(14,1).c$$java_util_Map,[this.vwrOptions]);
this.say$S($I$(7).$$S("Initializing 3D display...5"));
this.display.setViewer$org_jmol_viewer_Viewer(this.vwr);
this.myStatusListener.setViewer$org_jmol_viewer_Viewer(this.vwr);
});

Clazz.newMeth(C$, 'getDialogs$', function () {
if (C$.allowPreferences) {
this.say$S($I$(7).$$S("Initializing Preferences..."));
this.preferencesDialog=Clazz.new_($I$(60,1).c$$org_openscience_jmol_app_jmolpanel_JmolPanel$javax_swing_JFrame$org_openscience_jmol_app_jmolpanel_GuiMap$org_jmol_viewer_Viewer,[this, this.frame, this.guimap, this.vwr]);
}if (C$.allowRecentFiles) {
this.say$S($I$(7).$$S("Initializing Recent Files..."));
this.recentFiles=Clazz.new_($I$(61,1).c$$java_awt_Frame,[this.frame]);
}});

Clazz.newMeth(C$, 'getMeasurementTable$', function () {
if (this.jmolApp.haveDisplay) {
if (this.measurementTable != null ) this.measurementTable.dispose$();
this.measurementTable=Clazz.new_($I$(62,1).c$$org_jmol_viewer_Viewer$javax_swing_JFrame,[this.vwr, this.frame]);
}});

Clazz.newMeth(C$, 'setCommandHooks$', function () {
if (this.display != null ) {
var actions=this.getFrameActions$();
this.say$S($I$(7).$$S("Building Command Hooks..."));
this.commands=Clazz.new_($I$(11,1));
for (var i=0; i < actions.size$(); i++) {
var a=actions.get$I(i);
if (a != null ) this.commands.put$O$O(a.getValue$S("Name").toString(), a);
}
}});

Clazz.newMeth(C$, 'setupDisplay$', function () {
if (this.jmolApp.isKiosk) {
this.add$S$java_awt_Component("Center", this.display);
} else {
var panel=Clazz.new_($I$(63,1));
this.menuItems=Clazz.new_($I$(11,1));
this.say$S($I$(7).$$S("Building Menubar..."));
var menubar=this.createMenubar$();
this.add$S$java_awt_Component("North", menubar);
panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(28,1)));
if (this.toolbar != null ) panel.add$S$java_awt_Component("North", this.toolbar);
var ip=Clazz.new_($I$(63,1));
ip.setLayout$java_awt_LayoutManager(Clazz.new_($I$(28,1)));
ip.add$S$java_awt_Component("Center", this.display);
panel.add$S$java_awt_Component("Center", ip);
this.add$S$java_awt_Component("Center", panel);
if (this.status != null ) this.add$S$java_awt_Component("South", this.status);
}this.say$S($I$(7).$$S("Starting display..."));
this.display.start$();
});

Clazz.newMeth(C$, 'setFrameLocation$java_awt_Point$org_openscience_jmol_app_jmolpanel_JmolPanel', function (loc, parent) {
if (this.jmolApp.isKiosk) {
C$.bannerFrame=Clazz.new_($I$(64,1).c$$I$I,[this.jmolApp.startupWidth, 75]);
} else {
if (loc == null ) {
if (parent != null ) {
loc=parent.frame.getLocationOnScreen$();
var maxX=C$.screenSize.width - 50;
var maxY=C$.screenSize.height - 50;
loc.x+=40;
loc.y+=40;
if (loc.x > maxX || loc.y > maxY ) loc.setLocation$I$I(0, 0);
} else if (C$.historyFile == null  || (loc=C$.historyFile.getWindowPosition$S(this.windowName)) == null  ) {
return;
}}this.frame.setLocation$java_awt_Point(loc);
}});

Clazz.newMeth(C$, 'setIntoFrame$', function () {
this.frame.setTitle$S(this.windowName);
this.frame.setDefaultCloseOperation$I(0);
this.frame.setBackground$java_awt_Color($I$(65).lightGray);
this.frame.setLayout$java_awt_LayoutManager(Clazz.new_($I$(28,1)));
this.frame.add$S$java_awt_Component("Center", this);
this.frame.pack$();
var jmolIcon=$I$(6).getIconX$S("icon");
var iconImage=jmolIcon.getImage$();
this.frame.setIconImage$java_awt_Image(iconImage);
if (!this.isPlugin) this.frame.addWindowListener$java_awt_event_WindowListener(Clazz.new_($I$(66,1),[this, null]));
});

Clazz.newMeth(C$, 'setupConsole$', function () {
this.say$S($I$(7).$$S("Initializing Script Window..."));
this.vwr.getProperty$S$S$O("DATA_API", "getAppConsole", $I$(67).TRUE);
var console=this.vwr.getProperty$S$S$O("DATA_API", "getAppConsole", null);
if (console != null ) {
if (console.jcd != null  && C$.historyFile != null  ) {
C$.historyFile.repositionWindow$S$java_awt_Component$I$I$Z("ScriptWindow", console.jcd, 200, 100, !this.jmolApp.isKiosk);
}console.setStatusListener$org_jmol_api_JmolStatusListener(this.myStatusListener);
}});

Clazz.newMeth(C$, 'setupDnD$', function () {
this.say$S($I$(7).$$S("Setting up Drag-and-Drop..."));
Clazz.new_($I$(68,1).c$$org_jmol_api_JmolStatusListener$org_jmol_viewer_Viewer$org_jmol_api_JmolDropEditor,[this.myStatusListener, this.vwr, null]);
});

Clazz.newMeth(C$, 'setAtomChooser$', function () {
{

}
});

Clazz.newMeth(C$, 'launchMainFrame$', function () {
this.say$S($I$(7).$$S("Launching main frame..."));
});

Clazz.newMeth(C$, 'getJavaConsole$org_openscience_jmol_app_Jmol', function (jmol) {
jmol.getJavaConsole$();
}, 1);

Clazz.newMeth(C$, 'getJavaConsole$', function () {
if (!this.jmolApp.haveConsole || !C$.allowJavaConsole ) return;
this.consoleframe=Clazz.new_([$I$(7).$$S("Jmol Java Console")],$I$(69,1).c$$S);
this.consoleframe.setIconImage$java_awt_Image(this.frame.getIconImage$());
try {
var consoleTextArea=Clazz.new_($I$(70,1).c$$Z,[true]);
consoleTextArea.setFont$java_awt_Font($I$(71).decode$S("monospaced"));
this.consoleframe.getContentPane$().add$java_awt_Component$O(Clazz.new_($I$(72,1).c$$java_awt_Component,[consoleTextArea]), "Center");
var buttonClear=this.guimap.newJButton$S("JavaConsole.Clear");
buttonClear.addActionListener$java_awt_event_ActionListener(((P$.JmolPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JmolPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.consoleTextArea.setText$S("");
});
})()
), Clazz.new_(P$.JmolPanel$1.$init$,[this, {consoleTextArea:consoleTextArea}])));
this.consoleframe.getContentPane$().add$java_awt_Component$O(buttonClear, "South");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
var errorTextArea=Clazz.new_($I$(73,1));
errorTextArea.setFont$java_awt_Font($I$(71).decode$S("monospaced"));
this.consoleframe.getContentPane$().add$java_awt_Component$O(Clazz.new_($I$(72,1).c$$java_awt_Component,[errorTextArea]), "Center");
errorTextArea.append$S($I$(7).$$S("Could not create ConsoleTextArea: ") + e);
} else {
throw e;
}
}
var location=this.frame.getLocation$();
var size=this.frame.getSize$();
location.y+=size.height;
size.height=200;
if (size.height < 200 || size.height > 800 ) size.height=200;
if (size.width < 300 || size.width > 800 ) size.width=300;
if (location.y < 0 || location.y + size.height > C$.screenSize.height ) location.y=C$.screenSize.height - size.height;
if (location.x < 0 || location.x + size.width > C$.screenSize.width ) location.x=0;
this.consoleframe.setBounds$I$I$I$I(location.x, location.y, size.width, size.height);
});

Clazz.newMeth(C$, 'showStatus$S', function (message) {
this.splash.showStatus$S(message);
});

Clazz.newMeth(C$, 'report$S', function (str) {
if (this.jmolApp.isSilent) return;
$I$(2).info$S(str);
});

Clazz.newMeth(C$, 'say$S', function (message) {
if (this.jmolApp.haveDisplay) if (this.splash == null ) {
this.report$S(message);
} else {
this.splash.showStatus$S(message);
}});

Clazz.newMeth(C$, 'doClose$Z', function (saveSize) {
if (C$.numWindows == 1 && this.vwr.ms.ac > 0  && (function(a,f){return f.apply(null,a)})([this.frame, $I$(7).$$S("Exit Jmol?"), "Exit", 0, 3],$I$(8).showConfirmDialog$java_awt_Component$O$S$I$I) != 0 ) return false;
this.dispose$javax_swing_JFrame$Z(this.frame, saveSize);
return true;
});

Clazz.newMeth(C$, 'dispose$javax_swing_JFrame$Z', function (f, saveSize) {
if (this.webExport != null ) $I$(74).cleanUp$();
if (saveSize) this.saveWindowSizes$();
if (this.service != null ) {
this.service.close$();
this.service=null;
}if (this.serverService != null ) {
this.serverService.close$();
this.serverService=null;
}for (var e, $e = this.plugins.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
try {
e.getValue$().destroy$();
} catch (err) {
}
}
this.plugins.clear$();
if (C$.numWindows <= 1) {
this.report$S($I$(7).$$S("Closing Jmol..."));
System.exit$I(0);
} else {
C$.numWindows--;
this.vwr.dispose$();
try {
f.dispose$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(2).error$S("frame disposal exception");
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'saveWindowSizes$', function () {
if (C$.historyFile == null ) return;
if (this.frame != null ) {
C$.historyFile.addWindowInfo$S$java_awt_Component$java_awt_Point$java_awt_Dimension(this.windowName, this.frame, null, this.display.dimSize);
}var console=this.vwr.getProperty$S$S$O("DATA_API", "getAppConsole", null);
if (console != null  && console.jcd != null  ) C$.historyFile.addWindowInfo$S$java_awt_Component$java_awt_Point("ScriptWindow", console.jcd, null);
var c=this.vwr.getProperty$S$S$O("DATA_API", "getScriptEditor", null);
if (c != null ) C$.historyFile.addWindowInfo$S$java_awt_Component$java_awt_Point("ScriptEditor", c, null);
if (C$.historyFile.getProperty$S$S("clearHistory", "false").equals$O("true")) C$.historyFile.clear$();
});

Clazz.newMeth(C$, 'createMenuItem$S', function (cmd) {
var mi;
if (cmd.endsWith$S("Check")) {
mi=this.guimap.newJCheckBoxMenuItem$S$Z(cmd, false);
} else {
mi=this.guimap.newJMenuItem$S(cmd);
}var f=this.getIconX$S(cmd + "Image");
if (f != null ) {
mi.setHorizontalTextPosition$I(4);
mi.setIcon$javax_swing_Icon(f);
}if (cmd.endsWith$S("Script")) {
mi.setActionCommand$S(this.getStringX$S(cmd));
mi.addActionListener$java_awt_event_ActionListener(this.executeScriptAction);
} else {
mi.setActionCommand$S(cmd);
var a=this.getAction$S(cmd);
if (a != null ) {
mi.addActionListener$java_awt_event_ActionListener(a);
a.addPropertyChangeListener$java_beans_PropertyChangeListener(Clazz.new_($I$(75,1).c$$javax_swing_AbstractButton,[mi]));
mi.setEnabled$Z(a.isEnabled$());
} else {
mi.setEnabled$Z(false);
}}this.menuItems.put$O$O(cmd, mi);
return mi;
});

Clazz.newMeth(C$, 'getMenuItem$S', function (cmd) {
return this.menuItems.get$O(cmd);
});

Clazz.newMeth(C$, 'getAction$S', function (cmd) {
return this.commands.get$O(cmd);
});

Clazz.newMeth(C$, 'createToolbarButton$S', function (key) {
var ii=$I$(6).getIconX$S(key + "Image");
var isHoldButton=(key.startsWith$S("animatePrev") || key.startsWith$S("animateNext") );
var b=(isHoldButton ? Clazz.new_([this, null, ii, $I$(6).getStringX$S(key)],$I$(76,1).c$$javax_swing_ImageIcon$S) : Clazz.new_($I$(77,1).c$$javax_swing_ImageIcon,[ii]));
var isToggleString=$I$(6).getStringX$S(key + "Toggle");
if (isToggleString != null ) {
var isToggle=$I$(67).valueOf$S(isToggleString).booleanValue$();
if (isToggle) {
b=Clazz.new_($I$(78,1).c$$javax_swing_ImageIcon,[ii]);
if (key.equals$O("rotateScript")) {
this.display.buttonRotate=b;
}if (key.equals$O("modelkitScript")) {
this.display.buttonModelkit=b;
}this.display.toolbarButtonGroup.add$javax_swing_AbstractButton(b);
var isSelectedString=$I$(6).getStringX$S(key + "ToggleSelected");
if (isSelectedString != null ) {
var isSelected=$I$(67).valueOf$S(isSelectedString).booleanValue$();
b.setSelected$Z(isSelected);
}}}b.setRequestFocusEnabled$Z(false);
b.setMargin$java_awt_Insets(Clazz.new_($I$(79,1).c$$I$I$I$I,[1, 1, 1, 1]));
var a=null;
var actionCommand=null;
if (isHoldButton) {
} else if (key.endsWith$S("Script")) {
actionCommand=$I$(6).getStringX$S(key);
a=this.executeScriptAction;
} else {
actionCommand=key;
a=this.getAction$S(key);
}if (a != null ) {
b.setActionCommand$S(actionCommand);
b.addActionListener$java_awt_event_ActionListener(a);
a.addPropertyChangeListener$java_beans_PropertyChangeListener(Clazz.new_($I$(75,1).c$$javax_swing_AbstractButton,[b]));
b.setEnabled$Z(a.isEnabled$());
} else {
b.setEnabled$Z(isHoldButton);
}var tip=this.guimap.getLabel$S(key + "Tip");
if (tip != null ) {
this.guimap.map.put$O$O(key + "Tip", b);
b.setToolTipText$S(tip);
}return b;
});

Clazz.newMeth(C$, 'createMenubar$', function () {
var mb=Clazz.new_($I$(80,1));
this.addNormalMenuBar$javax_swing_JMenuBar(mb);
this.addPluginMenu$javax_swing_JMenuBar(mb);
if (C$.addMacrosMenu) this.addMacrosMenu$javax_swing_JMenuBar(mb);
this.addHelpMenuBar$javax_swing_JMenuBar(mb);
return mb;
});

Clazz.newMeth(C$, 'addPluginMenu$javax_swing_JMenuBar', function (mb) {
this.pluginMenu=this.guimap.newJMenu$S("plugins");
try {
var bundle=Clazz.new_([this.getClass$().getResourceAsStream$S("/org/openscience/jmol/app/plugins/plugin.properties")],$I$(81,1).c$$java_io_InputStream);
var keys=bundle.getKeys$();
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
var p=this.plugins.get$O(key);
if (p != null ) continue;
var path=bundle.getString$S(key);
if (!!(!!(path == null  | path.length$() == 0) || path.indexOf$S("disabled") >= 0)) continue;
try {
p=this.getAndRegisterPlugin$S$S(key, path);
if (p != null ) {
var text=p.getMenuText$();
var icon=p.getMenuIcon$();
if (text == null ) text=key;
var item=Clazz.new_($I$(82,1).c$$S,[text]);
if (icon != null ) {
item.setHorizontalTextPosition$I(4);
item.setIcon$javax_swing_Icon(icon);
}this.pluginMenu.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.JmolPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JmolPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.JmolPanel'].showPlugin$S$S$java_util_Map.apply(this.b$['org.openscience.jmol.app.jmolpanel.JmolPanel'], [this.$finals$.key, null, null]);
});
})()
), Clazz.new_(P$.JmolPanel$2.$init$,[this, {key:key}])));
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Cannot create plugin " + key + " " + path );
} else {
throw e;
}
}
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[ex.toString()]);
} else {
throw ex;
}
}
mb.add$javax_swing_JMenu(this.pluginMenu);
this.pluginMenu.setEnabled$Z(this.pluginMenu.getPopupMenu$().getComponentCount$() > 0);
});

Clazz.newMeth(C$, 'addMacrosMenu$javax_swing_JMenuBar', function (menuBar) {
var macroMenu=this.guimap.newJMenu$S("macros");
var macroDir=Clazz.new_([System.getProperty$S("user.home") + System.getProperty$S("file.separator") + ".jmol" + System.getProperty$S("file.separator") + "macros" ],$I$(83,1).c$$S);
this.report$S("User macros dir: " + macroDir);
this.report$S("       exists: " + macroDir.exists$());
this.report$S("  isDirectory: " + macroDir.isDirectory$());
if (macroDir.exists$() && macroDir.isDirectory$() ) {
var macros=macroDir.listFiles$();
for (var i=0; i < macros.length; i++) {
var macroName=macros[i].getName$();
if (macroName.endsWith$S(".macro")) {
if ($I$(2).debugging) {
$I$(2).debug$S("Possible macro found: " + macroName);
}var macro=null;
try {
macro=Clazz.new_($I$(84,1).c$$java_io_File,[macros[i]]);
var macroProps=Clazz.new_($I$(85,1));
macroProps.load$java_io_InputStream(macro);
var macroTitle=macroProps.getProperty$S("Title");
var macroScript=macroProps.getProperty$S("Script");
var mi=Clazz.new_($I$(82,1).c$$S,[macroTitle]);
mi.setActionCommand$S(macroScript);
mi.addActionListener$java_awt_event_ActionListener(this.executeScriptAction);
macroMenu.add$javax_swing_JMenuItem(mi);
} catch (exception) {
if (Clazz.exceptionOf(exception,"java.io.IOException")){
System.err.println$S("Could not load macro file: ");
System.err.println$O(exception);
} else {
throw exception;
}
} finally {
if (macro != null ) {
try {
macro.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
}}
}menuBar.add$javax_swing_JMenu(macroMenu);
});

Clazz.newMeth(C$, 'addNormalMenuBar$javax_swing_JMenuBar', function (menuBar) {
var menuKeys=(function(a,f){return f.apply(null,a)})([this.setMenuKeys$S$S("menubar", $I$(6).getStringX$S("menubar"))],$I$(54).getTokens$S);
for (var i=0; i < menuKeys.length; i++) {
if (menuKeys[i].equals$O("-")) {
menuBar.add$java_awt_Component($I$(56).createHorizontalGlue$());
} else {
var m=this.createMenu$S(menuKeys[i]);
if (m != null ) menuBar.add$javax_swing_JMenu(m);
}}
});

Clazz.newMeth(C$, 'addHelpMenuBar$javax_swing_JMenuBar', function (menuBar) {
var m=this.createMenu$S("help");
if (m != null ) {
menuBar.add$javax_swing_JMenu(m);
}});

Clazz.newMeth(C$, 'createMenu$S', function (key) {
var itemKeys=(function(a,f){return f.apply(null,a)})([this.setMenuKeys$S$S(key, $I$(6).getStringX$S(key))],$I$(54).getTokens$S);
var menu=this.guimap.newJMenu$S(key);
var f=$I$(6).getIconX$S(key + "Image");
if (f != null ) {
menu.setHorizontalTextPosition$I(4);
menu.setIcon$javax_swing_Icon(f);
}for (var i=0; i < itemKeys.length; i++) {
var item=itemKeys[i];
if (item.equals$O("-")) {
menu.addSeparator$();
} else if (item.endsWith$S("Menu")) {
menu.add$javax_swing_JMenuItem(this.createMenu$S(item));
} else {
var mi=this.createMenuItem$S(item);
menu.add$javax_swing_JMenuItem(mi);
}}
menu.addMenuListener$javax_swing_event_MenuListener(((P$.JmolPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "JmolPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent', function (e) {
var menuKey=(e.getSource$()).getKey$();
if (menuKey.equals$O("display") || menuKey.equals$O("tools") ) this.b$['org.openscience.jmol.app.jmolpanel.JmolPanel'].setMenuState$.apply(this.b$['org.openscience.jmol.app.jmolpanel.JmolPanel'], []);
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent', function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent', function (e) {
});
})()
), Clazz.new_(P$.JmolPanel$3.$init$,[this, null])));
return menu;
});

Clazz.newMeth(C$, 'setMenuKeys$S$S', function (key, tokens) {
return tokens;
});

Clazz.newMeth(C$, 'setMenuState$', function () {
this.guimap.setSelected$S$Z("perspectiveCheck", this.vwr.tm.perspectiveDepth);
this.guimap.setSelected$S$Z("hydrogensCheck", this.vwr.getBoolean$I(603979922));
this.guimap.setSelected$S$Z("measurementsCheck", this.vwr.getBoolean$I(603979926));
this.guimap.setSelected$S$Z("axesCheck", this.vwr.getShowAxes$());
this.guimap.setSelected$S$Z("boundboxCheck", this.vwr.getShowBbcage$());
this.guimap.setEnabled$S$Z("openJSpecViewScript", !this.vwr.getBoolean$I(1073742086));
this.guimap.setEnabled$S$Z("simulate1HSpectrumScript", !this.vwr.getBoolean$I(1073742086));
this.guimap.setEnabled$S$Z("simulate13CSpectrumScript", !this.vwr.getBoolean$I(1073742086));
});

Clazz.newMeth(C$, 'doNew$', function () {
var newFrame=Clazz.new_($I$(69,1));
Clazz.new_($I$(86,1).c$$org_openscience_jmol_app_JmolApp$org_openscience_jmol_app_jmolpanel_Splash$javax_swing_JFrame$org_openscience_jmol_app_Jmol$I$I$java_util_Map$java_awt_Point,[this.jmolApp, null, newFrame, this, this.startupWidth, this.startupHeight, this.vwrOptions, null]);
newFrame.setVisible$Z(true);
});

Clazz.newMeth(C$, 'setMenuNBO$javax_swing_JMenu', function (item) {
});

Clazz.newMeth(C$, 'startNBO$java_util_Map', function (jmolOptions) {
this.showPlugin$S$S$java_util_Map("NBO", "org.gennbo.NBOPlugin", jmolOptions);
});

Clazz.newMeth(C$, 'showPlugin$S$S$java_util_Map', function (name, path, jmolOptions) {
try {
var p=this.getAndRegisterPlugin$S$S(name, path);
if (!p.isStarted$()) p.start$javax_swing_JFrame$org_jmol_viewer_Viewer$java_util_Map(this.frame, this.vwr, jmolOptions);
p.setVisible$Z(true);
} catch (e) {
System.out.println$S("Error creating plugin " + name);
e.printStackTrace$();
}
});

Clazz.newMeth(C$, 'getAndRegisterPlugin$S$S', function (name, path) {
var p=this.plugins.get$O(name);
if (p == null ) {
this.plugins.put$O$O(name, p=$I$(87).getInterface$S$org_jmol_viewer_Viewer$S(path, this.vwr, "plugin"));
}return p;
});

Clazz.newMeth(C$, 'getInstanceWithParams$S$ClassA$OA', function (name, classes, params) {
try {
var cl=Clazz.forName(name);
return cl.getConstructor$ClassA(classes).newInstance$OA(params);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'print$', function () {
var job=$I$(88).getPrinterJob$();
job.setPrintable$java_awt_print_Printable(this.display);
if (job.printDialog$()) {
try {
job.print$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.print.PrinterException")){
$I$(2).errorEx$S$Throwable("Error while printing", e);
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'createImageStatus$S$S$O$I', function (fileName, type, text_or_bytes, quality) {
if (fileName != null  && text_or_bytes != null  ) return null;
var msg=fileName;
if (msg != null  && !msg.startsWith$S("OK")  && this.status != null  ) {
this.setStatus$I$S(1, $I$(7).$$S("IO Exception:"));
this.setStatus$I$S(2, msg);
}return msg;
});

Clazz.newMeth(C$, 'createWebExport$', function () {
this.webExport=$I$(74).createAndShowGUI$org_jmol_viewer_Viewer$org_openscience_jmol_app_HistoryFile$S(this.vwr, C$.historyFile, "JmolWebPageMaker");
});

Clazz.newMeth(C$, 'createSurfaceTool$', function () {
if (this.surfaceTool != null ) {
this.surfaceTool.toFront$();
} else {
this.surfaceTool=Clazz.new_($I$(89,1).c$$org_jmol_api_JmolViewer$org_openscience_jmol_app_HistoryFile$S$Z,[this.vwr, C$.historyFile, "SurfaceToolWindow", true]);
}});

Clazz.newMeth(C$, 'getUserDirectory$', function () {
var dir=System.getProperty$S("user.dir");
return dir == null  ? null : Clazz.new_([System.getProperty$S("user.dir")],$I$(83,1).c$$S);
}, 1);

Clazz.newMeth(C$, 'openFile$', function () {
var fileName=(Clazz.new_($I$(9,1))).getOpenFileNameFromDialog$java_util_Map$org_jmol_viewer_Viewer$S$org_jmol_api_JmolAppAPI$S$Z(this.vwrOptions, this.vwr, null, this.jmolApp, "FileOpen", true);
if (fileName == null ) return;
var flags=9;
if (fileName.startsWith$S("#NOCARTOONS#;")) {
flags-=1;
fileName=fileName.substring$I(13);
}if (fileName.startsWith$S("#APPEND#;")) {
fileName=fileName.substring$I(9);
flags+=4;
}this.vwr.openFileAsyncSpecial$S$I(fileName, flags);
});

Clazz.newMeth(C$, 'notifyFileOpen$S$S', function (fullPathName, title) {
if (fullPathName == null  || !fullPathName.equals$O("String[]") ) {
var pt=(fullPathName == null  ? -1 : fullPathName.lastIndexOf$S("|"));
if (pt > 0) fullPathName=fullPathName.substring$I$I(0, pt);
if (this.recentFiles != null ) this.recentFiles.notifyFileOpen$S(fullPathName);
this.frame.setTitle$S(title);
}if (this.atomSetChooser == null  && C$.addAtomChooser ) {
this.atomSetChooser=Clazz.new_($I$(90,1).c$$org_jmol_viewer_Viewer$javax_swing_JFrame,[this.vwr, this.frame]);
this.pcs.addPropertyChangeListener$S$java_beans_PropertyChangeListener("chemFile", this.atomSetChooser);
}this.pcs.firePropertyChange$S$O$O("chemFile", null, null);
});

Clazz.newMeth(C$, 'resizeInnerPanel$S', function (data) {
var width=this.vwr.getScreenWidth$();
var height=this.vwr.getScreenHeight$();
var info=width + " " + height ;
if (data == null ) {
data=info;
} else {
var pt=data.indexOf$S("preferredWidthHeight ");
var pt2=data.indexOf$S$I(";", pt + 1);
if (pt >= 0 && pt2 > pt ) data=data.substring$I$I(pt + 21, pt2).trim$();
if (data.equals$O(info)) return Clazz.array(Integer.TYPE, -1, [width, height]);
}info=(function(a,f){return f.apply(null,a)})([$I$(7).$$S("width height?"), data],$I$(8).showInputDialog$O$O);
if (info == null ) return Clazz.array(Integer.TYPE, -1, [width, height]);
var dims=Clazz.array(Float.TYPE, [2]);
var n=(function(a,f){return f.apply(null,a)})([info.replace$C$C(",", " "), null, dims],$I$(91).parseStringInfestedFloatArray$S$javajs_util_BS$FA);
if (n < 2) return Clazz.array(Integer.TYPE, -1, [width, height]);
this.resizeDisplay$I$I((dims[0]|0), (dims[1]|0));
return Clazz.array(Integer.TYPE, -1, [(dims[0]|0), (dims[1]|0)]);
});

Clazz.newMeth(C$, 'resizeDisplay$I$I', function (width, height) {
var d=Clazz.new_($I$(55,1).c$$I$I,[width, height]);
this.display.setJmolSize$java_awt_Dimension(d);
d=Clazz.new_($I$(55,1).c$$I$I,[width, 30]);
if (this.status != null ) this.status.setPreferredSize$java_awt_Dimension(d);
if (this.toolbar != null ) this.toolbar.setPreferredSize$java_awt_Dimension(d);
$I$(92).getWindow$java_awt_Container(this).pack$();
d=Clazz.new_($I$(55,1).c$$I$I,[width, height]);
System.out.println$S("resizeDisplay " + this.display.getSize$java_awt_Dimension(d).width);
});

Clazz.newMeth(C$, 'updateLabels$', function () {
if (this.atomSetChooser != null ) {
this.atomSetChooser.dispose$();
this.atomSetChooser=null;
}if (this.gaussianDialog != null ) {
this.gaussianDialog.dispose$();
this.gaussianDialog=null;
}var doTranslate=$I$(7).setDoTranslate$Z(true);
this.getDialogs$();
this.getMeasurementTable$();
$I$(7).setDoTranslate$Z(doTranslate);
this.guimap.updateLabels$();
});

Clazz.newMeth(C$, 'nioRunContent$org_openscience_jmol_app_jsonkiosk_JsonNioServer', function (jns) {
});

Clazz.newMeth(C$, 'nioClosed$org_openscience_jmol_app_jsonkiosk_JsonNioServer', function (jns) {
if (C$.bannerFrame != null ) {
this.vwr.scriptWait$S("delay 2");
C$.bannerFrame.dispose$();
this.vwr.dispose$();
System.exit$I(0);
}if (jns.equals$O(this.service)) this.service=null;
 else if (jns.equals$O(this.serverService)) this.serverService=null;
});

Clazz.newMeth(C$, 'setBannerLabel$S', function (label) {
if (C$.bannerFrame != null ) C$.bannerFrame.setLabel$S(label);
});

Clazz.newMeth(C$, 'sendNioMessage$I$S', function (port, strInfo) {
try {
if (port < 0) {
if (this.serverService != null  && "STOP".equalsIgnoreCase$S(strInfo) ) {
this.serverService.close$();
} else if (this.serverService == null ) {
this.serverService=C$.getJsonNioServer$();
if (this.serverService != null ) this.serverService.startService$I$org_openscience_jmol_app_jsonkiosk_JsonNioClient$org_jmol_viewer_Viewer$S$I(port, this, this.vwr, "-1", 1);
}if (this.serverService != null  && this.serverService.getPort$() == -port  && strInfo != null  ) {
if (this.service == null ) {
this.service=C$.getJsonNioServer$();
if (this.service != null ) this.service.startService$I$org_openscience_jmol_app_jsonkiosk_JsonNioClient$org_jmol_viewer_Viewer$S$I(-port, this, this.vwr, null, 1);
}if (this.service != null ) this.service.send$I$S(-port, strInfo);
return;
}return;
}if (strInfo == null ) return;
if (strInfo.equalsIgnoreCase$S("STOP")) strInfo="{\"type\":\"quit\"}";
if (this.service == null  && this.serverService != null   && this.serverService.getPort$() == port ) {
this.serverService.send$I$S(port, strInfo);
return;
}if (this.service == null ) {
this.service=C$.getJsonNioServer$();
if (this.service != null ) this.service.startService$I$org_openscience_jmol_app_jsonkiosk_JsonNioClient$org_jmol_viewer_Viewer$S$I(port, this, this.vwr, null, 1);
}if (this.service != null ) this.service.send$I$S(port, strInfo);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getJsonNioServer$', function () {
return $I$(87).getInterface$S$org_jmol_viewer_Viewer$S("org.openscience.jmol.app.jsonkiosk.JsonNioService", null, null);
}, 1);

Clazz.newMeth(C$, 'syncScript$S', function (script) {
this.vwr.syncScript$S$S$I(script, "~", 0);
});

Clazz.newMeth(C$, 'updateConsoleFont$', function () {
var console=this.vwr.getProperty$S$S$O("DATA_API", "getAppConsole", null);
if (console != null ) console.updateFontSize$();
});

Clazz.newMeth(C$, 'getPreference$S', function (key) {
return (this.preferencesDialog == null  ? null : this.preferencesDialog.currentProperties.get$O(key));
});

Clazz.newMeth(C$, 'getJmolProperty$S$S', function (key, defaultValue) {
return (C$.historyFile == null  ? defaultValue : C$.historyFile.getProperty$S$S(key, defaultValue));
}, 1);

Clazz.newMeth(C$, 'setPluginOption$S$S$S', function (pluginName, key, value) {
if (C$.pluginFile == null ) return;
C$.pluginFile.addProperty$S$S(pluginName + "_" + key , value);
C$.pluginFile.save$();
}, 1);

Clazz.newMeth(C$, 'getPluginOption$S$S$S', function (pluginName, key, defaultValue) {
return (C$.pluginFile == null  ? defaultValue : C$.pluginFile.getProperty$S$S(pluginName + "_" + key , defaultValue));
}, 1);

Clazz.newMeth(C$, 'addJmolProperties$java_util_Properties', function (props) {
if (C$.historyFile != null ) C$.historyFile.addProperties$java_util_Properties(props);
}, 1);

Clazz.newMeth(C$, 'addJmolProperty$S$S', function (key, value) {
if (C$.historyFile != null ) C$.historyFile.addProperty$S$S(key, value);
}, 1);

Clazz.newMeth(C$, 'setStatus$I$S', function (pos, msg) {
if (this.status != null ) this.status.setStatus$I$S(pos, msg);
});

Clazz.newMeth(C$, 'addJmolWindowInfo$S$java_awt_Component$java_awt_Point', function (name, window, border) {
if (C$.historyFile != null ) C$.historyFile.addWindowInfo$S$java_awt_Component$java_awt_Point$java_awt_Dimension(name, window, border, null);
}, 1);

Clazz.newMeth(C$, 'addJmolWindowInnerInfo$S$java_awt_Component$java_awt_Dimension', function (name, window, inner) {
if (C$.historyFile != null ) C$.historyFile.addWindowInnerInfo$S$java_awt_Component$java_awt_Dimension(name, window, inner);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.addPreferencesDialog=!$I$(14).isSwingJS;
C$.addMacrosMenu=!$I$(14).isSwingJS;
C$.allowRecentFiles=!$I$(14).isSwingJS;
C$.addAtomChooser=!$I$(14).isSwingJS;
C$.allowPreferences=!$I$(14).isSwingJS;
C$.allowGaussian=!$I$(14).isSwingJS;
C$.numWindows=0;
C$.allowJavaConsole=true;
C$.screenSize=$I$(15).getDefaultToolkit$().getScreenSize$();
C$.imageChoices=Clazz.array(String, -1, ["JPEG", "PNG", "GIF", "PPM", "PDF"]);
C$.imageExtensions=Clazz.array(String, -1, ["jpg", "png", "gif", "ppm", "pdf"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "AppCloser", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.WindowAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
this.this$0.doClose$Z.apply(this.this$0, [false]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "ActionChangedListener", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['button','javax.swing.AbstractButton']]]

Clazz.newMeth(C$, 'c$$javax_swing_AbstractButton', function (button) {
;C$.$init$.apply(this);
this.button=button;
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (e) {
var propertyName=e.getPropertyName$();
if (e.getPropertyName$().equals$O("Name")) {
var text=e.getNewValue$();
if (this.button.getText$() != null ) {
this.button.setText$S(text);
}} else if (propertyName.equals$O("enabled")) {
var enabledState=e.getNewValue$();
this.button.setEnabled$Z(enabledState.booleanValue$());
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "CloseAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["close"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if (!this.this$0.doClose$Z.apply(this.this$0, [true])) {
this.this$0.vwr.script$S("zap");
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "ConsoleAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["jconsole"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.this$0.consoleframe != null ) this.this$0.consoleframe.setVisible$Z(true);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "AboutAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["about"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
try {
var ad=Clazz.new_($I$(1,1).c$$javax_swing_JFrame$org_jmol_api_JmolViewer,[this.this$0.frame, this.this$0.vwr]);
ad.setVisible$Z(true);
} catch (ee) {
if (Clazz.exceptionOf(ee,"Exception")){
(function(a,f){return f.apply(null,a)})([ee.getMessage$()],$I$(2).error$S);
} else {
throw ee;
}
}
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "WhatsNewAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["whatsnew"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var wnd=Clazz.new_($I$(3,1).c$$javax_swing_JFrame,[this.this$0.frame]);
wnd.setVisible$Z(true);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "CreditsAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["credits"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
(Clazz.new_($I$(4,1).c$$javax_swing_JFrame,[this.this$0.frame])).setVisible$Z(true);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "GaussianAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["gauss"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.this$0.gaussianDialog == null ) this.this$0.gaussianDialog=Clazz.new_($I$(5,1).c$$javax_swing_JFrame$org_jmol_viewer_Viewer,[this.this$0.frame, this.this$0.vwr]);
this.this$0.gaussianDialog.setVisible$Z(true);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "NewwinAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["newwin"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.doNew$.apply(this.this$0, []);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "UguideAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["uguide"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.vwr.showUrl$S($I$(6).getStringX$S("UGuide.wikiURL"));
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "PasteClipboardAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["pasteClipboard"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.vwr.loadInlineAppend$S$Z(this.this$0.vwr.getClipboardText$(), false);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "CopyImageAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["copyImage"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.vwr.clipImageOrPasteText$S(null);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "CopyScriptAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["copyScript"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.vwr.clipImageOrPasteText$S(this.this$0.vwr.getProperty$S$S$O("string", "stateInfo", null));
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "PrintAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["print"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.print$.apply(this.this$0, []);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "OpenAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.jmol.app.jmolpanel.JmolPanel','.NewAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["open"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.openFile$.apply(this.this$0, []);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "OpenUrlAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.jmol.app.jmolpanel.JmolPanel','.NewAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['title','prompt']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["openurl"]);C$.$init$.apply(this);
this.title=$I$(7).$$S("Open URL");
this.prompt=$I$(7).$$S("Enter URL of molecular model");
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var url=$I$(8).showInputDialog$java_awt_Component$O$S$I(this.this$0.frame, this.prompt, this.title, -1);
if (url != null ) {
if (url.indexOf$S("://") < 0) {
if (url.length$() == 4 && url.indexOf$S(".") < 0 ) url="=" + url;
if (!url.startsWith$S("=")) url="http://" + url;
}this.this$0.vwr.openFileAsync$S(url);
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "OpenPdbAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.jmol.app.jmolpanel.JmolPanel','.NewAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["openpdb"]);C$.$init$.apply(this);
this.script="var x__id__ = _modelTitle; if (x__id__.length != 4) { x__id__ = '1crn'};x__id__ = prompt('" + (function(a,f){return f.apply(null,a)})(["Enter a four-digit PDB model ID or \"=\" and a three-digit ligand ID"],$I$(7).$$S) + "',x__id__);if (!x__id__) { quit }; load @{'=' + x__id__}" ;
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "OpenMolAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.jmol.app.jmolpanel.JmolPanel','.NewAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["openmol"]);C$.$init$.apply(this);
this.script="var x__id__ = _smilesString; if (!x__id__) { x__id__ = 'tylenol'};x__id__ = prompt('" + (function(a,f){return f.apply(null,a)})(["Enter the name or identifier (SMILES, InChI, CAS) of a compound. Preface with \":\" to load from PubChem; otherwise Jmol will use the NCI/NIH Resolver."],$I$(7).$$S) + "',x__id__);if (!x__id__) { quit }; load @{(x__id__[1]==':' ? x__id__ : '$' + x__id__)}" ;
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "NewAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['script']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["new"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (nm) {
;C$.superclazz.c$$S.apply(this,[nm]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.script == null ) this.b$['javax.swing.JComponent'].revalidate$.apply(this.b$['javax.swing.JComponent'], []);
 else this.this$0.vwr.script$S(this.script);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "ExitAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["exit"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.saveWindowSizes$.apply(this.this$0, []);
System.exit$I(0);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "ExportAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["export"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var sd=Clazz.new_($I$(9,1));
var fileName=sd.getImageFileNameFromDialog$org_jmol_viewer_Viewer$S$S$SA$SA$I$I(this.this$0.vwr, null, this.this$0.imageType, $I$(10).imageChoices, $I$(10).imageExtensions, this.this$0.qualityJPG, this.this$0.qualityPNG);
if (fileName == null ) return;
this.this$0.qualityJPG=sd.getQuality$S("JPG");
this.this$0.qualityPNG=sd.getQuality$S("PNG");
var sType=this.this$0.imageType=sd.getType$();
if (sType == null ) {
sType=fileName;
var i=sType.lastIndexOf$S(".");
if (i < 0) return;
sType=sType.substring$I(i + 1).toUpperCase$();
}if (fileName.indexOf$S(".") < 0) fileName += "." + (sType.equalsIgnoreCase$S("JPEG") ? "jpg" : sType.toLowerCase$());
var params=Clazz.new_($I$(11,1));
params.put$O$O("fileName", fileName);
params.put$O$O("type", sType);
params.put$O$O("quality", Integer.valueOf$I(sd.getQuality$S(sType)));
var msg=this.this$0.vwr.outputToFile$java_util_Map(params);
$I$(2).info$S(msg);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "RecentFilesAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["recentFiles"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
{

}
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "ScriptWindowAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["console"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var console=this.this$0.vwr.getProperty$S$S$O("DATA_API", "getAppConsole", null);
if (console != null ) {
console.setVisible$Z(true);
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "ScriptEditorAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["editor"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var c=this.this$0.vwr.getProperty$S$S$O("DATA_API", "getScriptEditor", null);
if (c != null ) c.setVisible$Z(true);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "AtomSetChooserAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["atomsetchooser"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.atomSetChooser.setVisible$Z(true);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "PovrayAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["povray"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_($I$(12,1).c$$javax_swing_JFrame$org_jmol_viewer_Viewer,[this.this$0.frame, this.this$0.vwr]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "WriteAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["write"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var fileName=(Clazz.new_($I$(9,1))).getSaveFileNameFromDialog$org_jmol_viewer_Viewer$S$S(this.this$0.vwr, null, "SPT");
if (fileName != null ) {
var params=Clazz.new_($I$(11,1));
params.put$O$O("fileName", fileName);
params.put$O$O("type", "SPT");
params.put$O$O("text", this.this$0.vwr.getStateInfo$());
var msg=this.this$0.vwr.outputToFile$java_util_Map(params);
$I$(2).info$S(msg);
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "ToWebAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["toweb"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
(function(a,f){return f.apply(null,a)})([((P$.JmolPanel$ToWebAction$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JmolPanel$ToWebAction$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['org.openscience.jmol.app.jmolpanel.JmolPanel'].createWebExport$.apply(this.b$['org.openscience.jmol.app.jmolpanel.JmolPanel'], []);
});
})()
), Clazz.new_(P$.JmolPanel$ToWebAction$1.$init$,[this, null]))],$I$(13).invokeLater$Runnable);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "ViewMeasurementTableAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["viewMeasurementTable"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.measurementTable.activate$();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "SurfaceToolAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["surfaceTool"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
(function(a,f){return f.apply(null,a)})([((P$.JmolPanel$SurfaceToolAction$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JmolPanel$SurfaceToolAction$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['org.openscience.jmol.app.jmolpanel.JmolPanel'].createSurfaceTool$.apply(this.b$['org.openscience.jmol.app.jmolpanel.JmolPanel'], []);
});
})()
), Clazz.new_(P$.JmolPanel$SurfaceToolAction$1.$init$,[this, null]))],$I$(13).invokeLater$Runnable);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "ExecuteScriptAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["executeScriptAction"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var script=e.getActionCommand$();
if (script.indexOf$S("#showMeasurementTable") >= 0) this.this$0.measurementTable.activate$();
this.this$0.vwr.evalStringQuiet$S(script);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "ResizeAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["resize"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.resizeInnerPanel$S.apply(this.this$0, [null]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolPanel, "AnimButton", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.jmol.console.JmolButton', 'java.awt.event.MouseListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['lastPressTime'],'S',['script']]]

Clazz.newMeth(C$, 'c$$javax_swing_ImageIcon$S', function (ii, script) {
;C$.superclazz.c$$javax_swing_ImageIcon.apply(this,[ii]);C$.$init$.apply(this);
this.script=script;
this.addMouseListener$java_awt_event_MouseListener(this);
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
this.this$0.vwr.evalStringQuiet$S(this.script);
var t=System.currentTimeMillis$();
if (t - this.lastPressTime > this.this$0.jmolApp.autoAnimationDelay * 2000  && this.this$0.jmolApp.autoAnimationDelay > 0  ) this.this$0.vwr.evalStringQuiet$S("timeout '__animBtn' OFF;animation_running = true; delay " + new Float(this.this$0.jmolApp.autoAnimationDelay).toString() + "; if(animation_running){timeout '__animBtn' -200 \"" + this.script + "\"}" );
this.lastPressTime=t;
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
if (this.this$0.jmolApp.autoAnimationDelay > 0 ) this.this$0.vwr.evalStringQuiet$S("animation_running = false; timeout \'__animBtn\' OFF");
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
