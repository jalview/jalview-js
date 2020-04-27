(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.webexport"),p$1={},p$2={},I$=[[0,'org.openscience.jmol.app.webexport.Widgets','java.awt.Checkbox','javax.swing.JTextField','org.openscience.jmol.app.webexport.WebExport','org.jmol.i18n.GT','javax.swing.JList','javax.swing.DefaultListModel','org.openscience.jmol.app.webexport.ArrayListTransferHandler',['org.openscience.jmol.app.webexport.WebPanel','.InstanceCellRenderer'],'java.awt.Dimension','javax.swing.JScrollPane','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JLabel','javax.swing.JButton','javax.swing.BorderFactory','javax.swing.BoxLayout','org.openscience.jmol.app.jmolpanel.GuiMap','javax.swing.ImageIcon','org.openscience.jmol.app.jmolpanel.HelpDialog','javax.swing.JOptionPane','org.openscience.jmol.app.webexport.JmolInstance','org.openscience.jmol.app.webexport.LogPanel','java.io.File','javajs.util.Lst','org.jmol.viewer.FileManager','java.util.ArrayList','java.io.FileOutputStream','javajs.util.PT','StringBuilder','javajs.util.BS','java.util.zip.GZIPOutputStream','java.util.zip.ZipFile','org.jmol.util.Logger','java.net.URLDecoder','java.awt.datatransfer.DataFlavor',['org.openscience.jmol.app.webexport.ArrayListTransferHandler','.ArrayListTransferable']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "WebPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['java.awt.event.ActionListener', 'javax.swing.event.ListSelectionListener', 'java.awt.event.ItemListener']);
C$.$classes$=[['InstanceCellRenderer',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nWidgets','panelIndex','errCount'],'S',['panelName','htmlAppletTemplate','listLabel','appletInfoDivs','htmlPath'],'O',['appletSizeSpinnerW','javax.swing.JSpinner','+appletSizeSpinnerH','+appletSizeSpinnerP','editorScrollPane','javax.swing.JScrollPane','saveButton','javax.swing.JButton','+viewButton','+helpButton','+addInstanceButton','+deleteInstanceButton','+showInstanceButton','remoteAppletPath','javax.swing.JTextField','+localAppletPath','+pageAuthorName','+webPageTitle','fc','javax.swing.JFileChooser','instanceList','javax.swing.JList','theWidgets','org.openscience.jmol.app.webexport.Widgets','widgetCheckboxes','java.awt.Checkbox[]','vwr','org.jmol.viewer.Viewer','webPanels','org.openscience.jmol.app.webexport.WebPanel[]']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$javax_swing_JFileChooser$org_openscience_jmol_app_webexport_WebPanelA$I', function (vwr, fc, webPanels, panelIndex) {
Clazz.super_(C$, this);
this.vwr=vwr;
this.fc=fc;
this.webPanels=webPanels;
this.panelIndex=panelIndex;
this.theWidgets=Clazz.new_($I$(1,1));
this.nWidgets=this.theWidgets.widgetList.length;
this.widgetCheckboxes=Clazz.array($I$(2), [this.nWidgets]);
this.remoteAppletPath=Clazz.new_($I$(3,1).c$$I,[20]);
this.remoteAppletPath.addActionListener$java_awt_event_ActionListener(this);
this.remoteAppletPath.setText$S($I$(4).getAppletPath$Z(true));
this.localAppletPath=Clazz.new_($I$(3,1).c$$I,[20]);
this.localAppletPath.addActionListener$java_awt_event_ActionListener(this);
this.localAppletPath.setText$S($I$(4).getAppletPath$Z(false));
this.pageAuthorName=Clazz.new_($I$(3,1).c$$I,[20]);
this.pageAuthorName.addActionListener$java_awt_event_ActionListener(this);
this.pageAuthorName.setText$S($I$(4).getPageAuthorName$());
this.webPageTitle=Clazz.new_($I$(3,1).c$$I,[20]);
this.webPageTitle.addActionListener$java_awt_event_ActionListener(this);
this.webPageTitle.setText$S($I$(5).$$S("A web page with JSmol objects"));
}, 1);

Clazz.newMeth(C$, 'getPanel$I$I', function (infoWidth, infoHeight) {
this.instanceList=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$javax_swing_ListModel);
this.instanceList.setSelectionMode$I(1);
this.instanceList.setTransferHandler$javax_swing_TransferHandler(Clazz.new_($I$(8,1).c$$org_openscience_jmol_app_webexport_WebPanel,[this]));
this.instanceList.setCellRenderer$javax_swing_ListCellRenderer(Clazz.new_($I$(9,1),[this, null]));
this.instanceList.setDragEnabled$Z(true);
this.instanceList.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[350, 200]));
this.instanceList.addListSelectionListener$javax_swing_event_ListSelectionListener(this);
var instanceListView=Clazz.new_($I$(11,1).c$$java_awt_Component,[this.instanceList]);
instanceListView.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[350, 200]));
var instanceSet=Clazz.new_($I$(12,1));
instanceSet.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
instanceSet.add$java_awt_Component$O(Clazz.new_($I$(14,1).c$$S,[this.listLabel]), "North");
instanceSet.add$java_awt_Component$O(instanceListView, "Center");
instanceSet.add$java_awt_Component$O(Clazz.new_([$I$(5).$$S("click and drag to reorder")],$I$(14,1).c$$S), "South");
this.addInstanceButton=Clazz.new_([$I$(5).$$S("Add present Jmol state as instance...")],$I$(15,1).c$$S);
this.addInstanceButton.addActionListener$java_awt_event_ActionListener(this);
var buttonPanel=Clazz.new_($I$(12,1));
buttonPanel.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[350, 50]));
this.deleteInstanceButton=Clazz.new_([$I$(5).$$S("Delete selected")],$I$(15,1).c$$S);
this.deleteInstanceButton.addActionListener$java_awt_event_ActionListener(this);
buttonPanel.add$java_awt_Component(this.deleteInstanceButton);
var paramPanel=this.appletParamPanel$();
paramPanel.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[350, 70]));
var instanceButtonPanel=Clazz.new_($I$(12,1));
instanceButtonPanel.add$java_awt_Component(this.addInstanceButton);
instanceButtonPanel.setSize$I$I(300, 70);
var p=Clazz.new_($I$(12,1));
p.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
p.add$java_awt_Component$O(instanceButtonPanel, "North");
p.add$java_awt_Component$O(buttonPanel, "South");
var instancePanel=Clazz.new_($I$(12,1));
instancePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
instancePanel.add$java_awt_Component$O(instanceSet, "Center");
instancePanel.add$java_awt_Component$O(p, "South");
var rightPanel=Clazz.new_($I$(12,1));
rightPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
rightPanel.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[350, 350]));
rightPanel.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[350, 1000]));
rightPanel.add$java_awt_Component$O(paramPanel, "North");
rightPanel.add$java_awt_Component$O(instancePanel, "Center");
rightPanel.setBorder$javax_swing_border_Border((function(a,f){return f.apply(null,a)})([$I$(5).$$S("JSmol Instances:")],$I$(16).createTitledBorder$S));
var widgetPanel=Clazz.new_($I$(12,1));
widgetPanel.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[150, 150]));
widgetPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17,1).c$$java_awt_Container$I,[widgetPanel, 1]));
widgetPanel.setBorder$javax_swing_border_Border((function(a,f){return f.apply(null,a)})([$I$(5).$$S("Select widgets:")],$I$(16).createTitledBorder$S));
for (var i=0; i < this.nWidgets; i++) {
this.widgetCheckboxes[i]=Clazz.new_($I$(2,1).c$$S,[this.theWidgets.widgetList[i].name]);
this.widgetCheckboxes[i].addItemListener$java_awt_event_ItemListener(this);
widgetPanel.add$java_awt_Component(this.widgetCheckboxes[i]);
}
var panel=Clazz.new_($I$(12,1));
panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
var leftPanel=p$1.getLeftPanel$I$I.apply(this, [infoWidth, infoHeight]);
leftPanel.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[350, 1000]));
panel.add$java_awt_Component$O(leftPanel, "West");
panel.add$java_awt_Component$O(rightPanel, "Center");
panel.add$java_awt_Component$O(widgetPanel, "East");
this.enableButtons$javax_swing_JList(this.instanceList);
return panel;
});

Clazz.newMeth(C$, 'getInstanceList$', function () {
return this.instanceList;
});

Clazz.newMeth(C$, 'getLeftPanel$I$I', function (w, h) {
this.helpButton=Clazz.new_([$I$(5).$$S("Help/Instructions")],$I$(15,1).c$$S);
this.helpButton.addActionListener$java_awt_event_ActionListener(this);
var templateImage=this.panelName + ".png";
var pageCartoon=$I$(18).getResource$O$S(this, templateImage);
var pageImage=null;
if (pageCartoon != null ) {
pageImage=Clazz.new_([pageCartoon, $I$(5).$$S("Cartoon of Page")],$I$(19,1).c$$java_net_URL$S);
} else {
System.err.println$S("Error Loading Page Cartoon Image " + templateImage);
}var pageCartoonLabel=Clazz.new_($I$(14,1).c$$javax_swing_Icon,[pageImage]);
var pageCartoonPanel=Clazz.new_($I$(12,1));
pageCartoonPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
pageCartoonPanel.setBorder$javax_swing_border_Border((function(a,f){return f.apply(null,a)})([$I$(5).$$S("Cartoon of Page") + ":"],$I$(16).createTitledBorder$S));
pageCartoonPanel.add$java_awt_Component(pageCartoonLabel);
this.saveButton=Clazz.new_([$I$(5).$$S("Save HTML as...")],$I$(15,1).c$$S);
this.saveButton.addActionListener$java_awt_event_ActionListener(this);
this.viewButton=Clazz.new_([$I$(5).$$S("View HTML")],$I$(15,1).c$$S);
this.viewButton.addActionListener$java_awt_event_ActionListener(this);
var savePanel=Clazz.new_($I$(12,1));
savePanel.add$java_awt_Component(this.saveButton);
savePanel.add$java_awt_Component(this.viewButton);
var pathPanel=Clazz.new_($I$(12,1));
pathPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
pathPanel.setBorder$javax_swing_border_Border((function(a,f){return f.apply(null,a)})([$I$(5).$$S("Relative server path to JSmol.min.js:")],$I$(16).createTitledBorder$S));
pathPanel.add$java_awt_Component$O(this.remoteAppletPath, "North");
var pathPanel2=Clazz.new_($I$(12,1));
pathPanel2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
pathPanel2.setBorder$javax_swing_border_Border((function(a,f){return f.apply(null,a)})([$I$(5).$$S("Relative local path to JSmol.min.js:")],$I$(16).createTitledBorder$S));
pathPanel2.add$java_awt_Component$O(this.localAppletPath, "North");
var authorPanel=Clazz.new_($I$(12,1));
authorPanel.setBorder$javax_swing_border_Border((function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["Author (your name):"],$I$(5).$$S)],$I$(16).createTitledBorder$S));
authorPanel.add$java_awt_Component$O(this.pageAuthorName, "North");
var titlePanel=Clazz.new_($I$(12,1));
titlePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
titlePanel.setBorder$javax_swing_border_Border((function(a,f){return f.apply(null,a)})([$I$(5).$$S("Browser window title for this web page:")],$I$(16).createTitledBorder$S));
titlePanel.add$java_awt_Component$O(this.webPageTitle, "North");
titlePanel.add$java_awt_Component$O(savePanel, "South");
var pathPanels=Clazz.new_($I$(12,1));
pathPanels.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
pathPanels.add$java_awt_Component$O(pathPanel, "North");
pathPanels.add$java_awt_Component$O(pathPanel2, "South");
var settingsPanel=Clazz.new_($I$(12,1));
settingsPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
settingsPanel.add$java_awt_Component$O(pathPanels, "North");
settingsPanel.add$java_awt_Component$O(authorPanel, "Center");
settingsPanel.add$java_awt_Component$O(titlePanel, "South");
var leftpanel=Clazz.new_($I$(12,1));
leftpanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
leftpanel.add$java_awt_Component$O(this.helpButton, "North");
leftpanel.add$java_awt_Component$O(pageCartoonPanel, "Center");
leftpanel.add$java_awt_Component$O(settingsPanel, "South");
return leftpanel;
}, p$1);

Clazz.newMeth(C$, 'getInfoWidth$', function () {
return this.editorScrollPane.getWidth$();
});

Clazz.newMeth(C$, 'getInfoHeight$', function () {
return this.editorScrollPane.getHeight$();
});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
var listModel=this.instanceList.getModel$();
var list=this.instanceList.getSelectedIndices$();
if (list.length == 0) return;
var instance=listModel.get$I(list[0]);
var source=e.getSource$();
var stateChange=e.getStateChange$();
for (var i=0; i < this.nWidgets; i++) {
if (source === this.widgetCheckboxes[i] ) {
if (stateChange == 1) {
instance.addWidget$I(i);
}if (stateChange == 2) {
instance.deleteWidget$I(i);
}}}
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if (e.getSource$() === this.helpButton ) {
var webExportHelp=Clazz.new_([$I$(4).getFrame$(), $I$(18).getHtmlResource$O$S(this, this.panelName + "_instructions")],$I$(20,1).c$$javax_swing_JFrame$java_net_URL);
webExportHelp.setVisible$Z(true);
webExportHelp.setDefaultCloseOperation$I(2);
return;
}if (e.getSource$() === this.remoteAppletPath ) {
var path=this.remoteAppletPath.getText$();
$I$(4).setAppletPath$S$Z(path, true);
return;
}if (e.getSource$() === this.localAppletPath ) {
var path=this.localAppletPath.getText$();
$I$(4).setAppletPath$S$Z(path, false);
return;
}if (e.getSource$() === this.addInstanceButton ) {
var label=(this.instanceList.getSelectedIndices$().length != 1 ? "" : this.getInstanceName$I(-1));
var name=(function(a,f){return f.apply(null,a)})([$I$(5).$$S("Give the occurrence of JSmol a name:"), label],$I$(21).showInputDialog$O$O);
if (name == null  || name.length$() == 0 ) return;
var listModel=this.instanceList.getModel$();
var width=300;
var height=300;
if (this.appletSizeSpinnerH != null ) {
width=((this.appletSizeSpinnerW.getModel$())).getNumber$().intValue$();
height=((this.appletSizeSpinnerH.getModel$())).getNumber$().intValue$();
}var instance=$I$(22).getInstance$org_jmol_api_JmolViewer$S$I$I$I(this.vwr, name, width, height, this.nWidgets);
if (instance == null ) {
(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["Error creating new instance containing script(s) and image."],$I$(5).$$S)],$I$(23).log$S);
return;
}var i;
for (i=this.instanceList.getModel$().getSize$(); --i >= 0; ) if (this.getInstanceName$I(i).equals$O(instance.name)) break;

var m=$I$(5).$$S("added Instance {0}");
if (i < 0) {
i=listModel.getSize$();
listModel.addElement$O(instance);
(function(a,f){return f.apply(null,a)})([$I$(5).o$S$O(m, instance.name)],$I$(23).log$S);
} else {
listModel.setElementAt$O$I(instance, i);
(function(a,f){return f.apply(null,a)})([$I$(5).o$S$O(m, instance.name)],$I$(23).log$S);
}this.instanceList.setSelectedIndex$I(i);
this.syncLists$();
return;
}if (e.getSource$() === this.deleteInstanceButton ) {
var listModel=this.instanceList.getModel$();
var todelete=this.instanceList.getSelectedIndices$();
for (var i=0; i < todelete.length; i++) {
var instance=listModel.get$I(todelete[i]);
try {
instance.delete$();
} catch (err) {
if (Clazz.exceptionOf(err,"java.io.IOException")){
(function(a,f){return f.apply(null,a)})([err.getMessage$()],$I$(23).log$S);
} else {
throw err;
}
}
}
listModel.removeRange$I$I(todelete[0], todelete[todelete.length - 1]);
this.syncLists$();
return;
}if (e.getSource$() === this.showInstanceButton ) {
var listModel=this.instanceList.getModel$();
var list=this.instanceList.getSelectedIndices$();
if (list.length != 1) return;
var instance=listModel.get$I(list[0]);
this.vwr.evalStringQuiet$S(")" + instance.script);
return;
}if (e.getSource$() === this.viewButton ) {
this.vwr.showUrl$S(this.htmlPath);
} else if (e.getSource$() === this.saveButton ) {
this.fc.setDialogTitle$S($I$(5).$$S("Select a folder to create or an HTML file to save"));
var returnVal=this.fc.showSaveDialog$java_awt_Component(this);
if (returnVal != 0) return;
var file=this.fc.getSelectedFile$();
this.htmlPath="file:///" + file.getAbsolutePath$().replace$C$C("\\", "/");
var retVal=null;
this.errCount=0;
try {
var path=this.remoteAppletPath.getText$();
$I$(4).setAppletPath$S$Z(path, true);
path=this.localAppletPath.getText$();
$I$(4).setAppletPath$S$Z(path, false);
var authorName=this.pageAuthorName.getText$();
$I$(4).setWebPageAuthor$S(authorName);
retVal=this.fileWriter$java_io_File$javax_swing_JList(file, this.instanceList);
this.viewButton.setEnabled$Z(true);
} catch (IOe) {
if (Clazz.exceptionOf(IOe,"java.io.IOException")){
(function(a,f){return f.apply(null,a)})([IOe.getMessage$()],$I$(23).log$S);
this.errCount+=1;
} else {
throw IOe;
}
}
if (retVal != null ) {
(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([$I$(5).$$S("file {0} created"), retVal],$I$(5).o$S$O)],$I$(23).log$S);
} else {
(function(a,f){return f.apply(null,a)})([$I$(5).$$S("Call to FileWriter unsuccessful.")],$I$(23).log$S);
this.errCount+=1;
}if (this.errCount > 0) {
(function(a,f){return f.apply(null,a)})([$I$(5).$$S("Errors occurred during web page creation.  See Log Tab!")],$I$(23).log$S);
}return;
}});

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent', function (e) {
if (e.getValueIsAdjusting$()) return;
var whichList=e.getSource$();
if (whichList.isSelectionEmpty$()) return;
if (whichList.getMinSelectionIndex$() != whichList.getMaxSelectionIndex$()) return;
var index=whichList.getSelectedIndex$();
var instance=whichList.getModel$().getElementAt$I(index);
var width=instance.width;
var height=instance.height;
if (this.appletSizeSpinnerW != null ) this.appletSizeSpinnerW.getModel$().setValue$O(Integer.valueOf$I(width));
if (this.appletSizeSpinnerH != null ) this.appletSizeSpinnerH.getModel$().setValue$O(Integer.valueOf$I(height));
this.vwr.evalStringQuiet$S(")" + instance.script);
for (var i=0; i < this.nWidgets; i++) this.widgetCheckboxes[i].setState$Z(instance.whichWidgets.get$I(i));

});

Clazz.newMeth(C$, 'getInstanceName$I', function (i) {
if (i < 0) i=this.instanceList.getSelectedIndex$();
var instance=this.instanceList.getModel$().getElementAt$I(i);
return (instance == null  ? "" : instance.name);
});

Clazz.newMeth(C$, 'fileWriter$java_io_File$javax_swing_JList', function (file, InstanceList) {
var datadirPath=file.getPath$().replace$C$C("\\", "/");
var datadirName=file.getName$();
var fileName;
if (datadirName.indexOf$S(".htm") < 0) {
var f=Clazz.new_($I$(24,1).c$$S,[datadirPath + ".html"]);
if (f.exists$()) {
datadirName += ".html";
file=f;
} else if ((f=Clazz.new_($I$(24,1).c$$S,[datadirPath + ".htm"])).exists$()) {
datadirName += ".htm";
file=f;
}}if (datadirName.indexOf$S(".htm") > 0) {
fileName=datadirName;
datadirPath=file.getParent$();
file=Clazz.new_($I$(24,1).c$$S,[datadirPath]);
datadirName=file.getName$();
} else {
fileName=datadirName + ".html";
}datadirPath=datadirPath.replace$C$C("\\", "/");
fileName=datadirPath + "/" + fileName ;
var made_datadir=(file.exists$() && file.isDirectory$()  || file.mkdir$() );
var listModel=InstanceList.getModel$();
$I$(23).log$S("");
if (made_datadir) {
(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([$I$(5).$$S("Using directory {0}"), datadirPath],$I$(5).o$S$O)],$I$(23).log$S);
(function(a,f){return f.apply(null,a)})(["  " + (function(a,f){return f.apply(null,a)})([$I$(5).$$S("adding {0}"), "support.js"],$I$(5).o$S$O)],$I$(23).log$S);
try {
this.vwr.writeTextFile$S$S(datadirPath + "/support.js", $I$(18).getResourceString$O$S(this, "support.js"));
} catch (IOe) {
if (Clazz.exceptionOf(IOe,"java.io.IOException")){
throw IOe;
} else {
throw IOe;
}
}
for (var i=0; i < listModel.getSize$(); i++) {
var thisInstance=listModel.getElementAt$I(i);
var javaname=thisInstance.javaname;
var script=thisInstance.script;
$I$(23).log$S("  ...jmolApplet" + i);
(function(a,f){return f.apply(null,a)})(["      ..." + (function(a,f){return f.apply(null,a)})([$I$(5).$$S("adding {0}"), javaname + ".png"],$I$(5).o$S$O)],$I$(23).log$S);
try {
thisInstance.movepict$S(datadirPath);
} catch (IOe) {
if (Clazz.exceptionOf(IOe,"java.io.IOException")){
throw IOe;
} else {
throw IOe;
}
}
var filesToCopy=Clazz.new_($I$(25,1));
var localPath=this.localAppletPath.getText$();
if (localPath.equals$O(".") || this.remoteAppletPath.getText$().equals$O(".") ) {
try {
var jmolJarDirPath=p$1.jmolJarPath.apply(this, []).substring$I$I(0, p$1.jmolJarPath.apply(this, []).lastIndexOf$S("/"));
filesToCopy.addLast$O(jmolJarDirPath + "/jsmol.zip");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
(function(a,f){return f.apply(null,a)})([$I$(5).$$S("There was an error in the text encoding so the path to jsmol.zip is unknown.")],$I$(23).log$S);
} else {
throw e;
}
}
}$I$(26).getFileReferences$S$javajs_util_Lst(script, filesToCopy);
var copiedFileNames=Clazz.new_($I$(27,1));
var nFiles=filesToCopy.size$();
for (var iFile=0; iFile < nFiles; iFile++) {
var newName=p$1.copyBinaryFile$S$S.apply(this, [filesToCopy.get$I(iFile), datadirPath]);
copiedFileNames.add$O(newName.substring$I(newName.lastIndexOf$I("/") + 1));
}
script=C$.replaceQuotedStrings$S$java_util_ArrayList$java_util_ArrayList(script, filesToCopy, copiedFileNames);
(function(a,f){return f.apply(null,a)})(["      ..." + (function(a,f){return f.apply(null,a)})([$I$(5).$$S("adding {0}"), javaname + ".spt"],$I$(5).o$S$O)],$I$(23).log$S);
this.vwr.writeTextFile$S$S(datadirPath + "/" + javaname + ".spt" , script);
}
var html=$I$(18).getResourceString$O$S(this, this.panelName + "_template");
html=this.fixHtml$S(html);
var jsStr="";
var whichWidgets=this.allSelectedWidgets$();
for (var i=0; i < this.nWidgets; i++) {
if (whichWidgets.get$I(i)) {
var scriptFileName=this.theWidgets.widgetList[i].getJavaScriptFileName$();
if (!scriptFileName.equalsIgnoreCase$S("none")) {
jsStr += "\n<script src=\"" + scriptFileName + "\" type=\"text/javascript\"></script>" ;
(function(a,f){return f.apply(null,a)})(["  " + (function(a,f){return f.apply(null,a)})([$I$(5).$$S("adding {0}"), scriptFileName],$I$(5).o$S$O)],$I$(23).log$S);
this.vwr.writeTextFile$S$S(datadirPath + "/" + scriptFileName + "" , $I$(18).getResourceString$O$S(this, scriptFileName));
}var supportFileNames=this.theWidgets.widgetList[i].getSupportFileNames$();
var nFiles=supportFileNames.length;
if (nFiles != 0) {
for (var fileN=0; fileN < nFiles; fileN++) {
var inFile=supportFileNames[fileN];
var outFile=inFile;
if ((inFile.lastIndexOf$S("/")) != -1) {
outFile=inFile.substring$I((inFile.lastIndexOf$S("/") + 1));
}var fileURL=$I$(18).getResource$O$S(this, inFile);
if (fileURL == null ) {
(function(a,f){return f.apply(null,a)})(["    " + (function(a,f){return f.apply(null,a)})([$I$(5).$$S("Unable to load resource {0}"), inFile],$I$(5).o$S$O)],$I$(23).log$S);
this.errCount+=1;
} else {
var is=fileURL.openConnection$().getInputStream$();
var os=Clazz.new_($I$(28,1).c$$S,[datadirPath + "/" + outFile ]);
var temp=is.read$();
while (temp != -1){
os.write$I(temp);
temp=is.read$();
}
os.flush$();
os.close$();
(function(a,f){return f.apply(null,a)})(["  " + (function(a,f){return f.apply(null,a)})([$I$(5).$$S("adding {0}"), outFile],$I$(5).o$S$O)],$I$(23).log$S);
}}
}}}
html=$I$(29).rep$S$S$S(html, "@WIDGETJSFILES@", jsStr);
this.appletInfoDivs="";
var appletDefs=Clazz.new_($I$(30,1));
this.htmlAppletTemplate=$I$(18).getResourceString$O$S(this, this.panelName + "_template2");
for (var i=0; i < listModel.getSize$(); i++) html=this.getAppletDefs$I$S$StringBuilder$org_openscience_jmol_app_webexport_JmolInstance(i, html, appletDefs, listModel.getElementAt$I(i));

html=(function(a,f){return f.apply(null,a)})([html, "@AUTHOR@", (function(a,f){return f.apply(null,a)})([this.pageAuthorName.getText$()],$I$(5).escapeHTML$S)],$I$(29).rep$S$S$S);
html=(function(a,f){return f.apply(null,a)})([html, "@TITLE@", (function(a,f){return f.apply(null,a)})([this.webPageTitle.getText$()],$I$(5).escapeHTML$S)],$I$(29).rep$S$S$S);
html=(function(a,f){return f.apply(null,a)})([html, "@REMOTEAPPLETPATH@", this.remoteAppletPath.getText$()],$I$(29).rep$S$S$S);
var localPath=this.localAppletPath.getText$();
if (localPath.contentEquals$CharSequence(".")) {
localPath="jsmol";
}html=$I$(29).rep$S$S$S(html, "@LOCALAPPLETPATH@", localPath);
html=$I$(29).rep$S$S$S(html, "@DATADIRNAME@", datadirName);
if (this.appletInfoDivs.length$() > 0) this.appletInfoDivs="\n<div style='display:none'>\n" + this.appletInfoDivs + "\n</div>\n" ;
var str=appletDefs.toString();
html=$I$(29).rep$S$S$S(html, "@APPLETINFO@", this.appletInfoDivs);
html=$I$(29).rep$S$S$S(html, "@APPLETDEFS@", str);
html=(function(a,f){return f.apply(null,a)})([html, "@CREATIONDATA@", (function(a,f){return f.apply(null,a)})([$I$(4).TimeStamp_WebLink$()],$I$(5).escapeHTML$S)],$I$(29).rep$S$S$S);
html=(function(a,f){return f.apply(null,a)})([html, "@AUTHORDATA@", (function(a,f){return f.apply(null,a)})([$I$(5).$$S("Based on a template by A. Herr&#x00E1;ez and J. Gutow")],$I$(5).escapeHTML$S)],$I$(29).rep$S$S$S);
html=(function(a,f){return f.apply(null,a)})([html, "@LOGDATA@", "<pre>\n" + $I$(23).getText$() + "\n</pre>\n" ],$I$(29).rep$S$S$S);
(function(a,f){return f.apply(null,a)})(["      ..." + (function(a,f){return f.apply(null,a)})([$I$(5).$$S("creating {0}"), fileName],$I$(5).o$S$O)],$I$(23).log$S);
this.vwr.writeTextFile$S$S(fileName, html);
} else {
var IOe=Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(5).$$S("Error creating directory: ") + datadirPath]);
throw IOe;
}return fileName;
});

Clazz.newMeth(C$, 'replaceQuotedStrings$S$java_util_ArrayList$java_util_ArrayList', function (s, list, newList) {
var n=list.size$();
for (var i=0; i < n; i++) {
var name=list.get$I(i);
var newName=newList.get$I(i);
if (!newName.equals$O(name)) s=$I$(29).rep$S$S$S(s, "\"" + name + "\"" , "\"" + newName + "\"" );
}
return s;
}, 1);

Clazz.newMeth(C$, 'allSelectedWidgets$', function () {
var selectedWidgets=$I$(31).newN$I(this.nWidgets);
var listModel=this.instanceList.getModel$();
for (var i=0; i < listModel.getSize$(); i++) {
var thisInstance=listModel.getElementAt$I(i);
selectedWidgets.or$javajs_util_BS(thisInstance.whichWidgets);
}
return selectedWidgets;
});

Clazz.newMeth(C$, 'copyBinaryFile$S$S', function (fullPathName, dataPath) {
var name=fullPathName.substring$I(fullPathName.lastIndexOf$I("/") + 1).replace$C$C("|", "_");
if (name.contentEquals$CharSequence("jsmol.zip")) {
(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([$I$(5).$$S("copying and unzipping jsmol.zip directory into {0}"), dataPath],$I$(5).o$S$O)],$I$(23).log$S);
var tempDP=p$1.copyandUnzip$S$S$S.apply(this, [fullPathName, dataPath, name]);
return (tempDP);
}name=dataPath + "/" + name ;
var gzname=name + ".gz";
var outFile=Clazz.new_($I$(24,1).c$$S,[name]);
var gzoutFile=Clazz.new_($I$(24,1).c$$S,[gzname]);
if (outFile.exists$()) return name;
if (gzoutFile.exists$()) return gzname;
try {
var ret=this.vwr.fm.getFileAsBytes$S$javajs_util_OC(fullPathName, null);
if (Clazz.instanceOf(ret, "java.lang.String")) {
(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([$I$(5).$$S("Could not find or open:\n{0}\nPlease check that you are using a Jmol.jar that is part of a full Jmol distribution."), fullPathName],$I$(5).o$S$O)],$I$(23).log$S);
this.errCount+=1;
} else {
(function(a,f){return f.apply(null,a)})(["      ..." + (function(a,f){return f.apply(null,a)})([$I$(5).$$S("copying\n{0}\n         to"), fullPathName],$I$(5).o$S$O)],$I$(23).log$S);
var data=ret;
var retName=Clazz.array(String, -1, [name]);
var maxUnzipped=(name.indexOf$S(".js") >= 0 ? 2147483647 : 100000);
var err=C$.writeFileZipped$SA$BA$I(retName, data, maxUnzipped);
if (!retName[0].equals$O(name)) (function(a,f){return f.apply(null,a)})(["      ..." + $I$(5).$$S("compressing large data file to") + "\n" + (name=retName[0]) ],$I$(23).log$S);
$I$(23).log$S(name);
if (err != null ) {
$I$(23).log$S(err);
this.errCount+=1;
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
(function(a,f){return f.apply(null,a)})([e.getMessage$()],$I$(23).log$S);
this.errCount+=1;
} else {
throw e;
}
}
return name;
}, p$1);

Clazz.newMeth(C$, 'writeFileZipped$SA$BA$I', function (retName, data, maxUnzipped) {
var err=null;
try {
var doCompress=false;
if (data.length > maxUnzipped) {
doCompress=true;
for (var i=0; i < 10; i++) if (data[i] < 10) doCompress=false;

}if (doCompress) {
retName[0] += ".gz";
var gzFile=Clazz.new_([Clazz.new_($I$(28,1).c$$S,[retName[0]])],$I$(32,1).c$$java_io_OutputStream);
gzFile.write$BA(data);
gzFile.flush$();
gzFile.close$();
} else {
var os=Clazz.new_($I$(28,1).c$$S,[retName[0]]);
os.write$BA(data);
os.flush$();
os.close$();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
err=e.getMessage$();
} else {
throw e;
}
}
return err;
}, 1);

Clazz.newMeth(C$, 'copyandUnzip$S$S$S', function (fullPathName, dataPath, name) {
var zipFile=null;
try {
zipFile=Clazz.new_($I$(33,1).c$$S,[fullPathName]);
var files=zipFile.entries$();
var f=null;
var fos=null;
var buffer=Clazz.array(Byte.TYPE, [1024]);
while (files.hasMoreElements$()){
try {
fos=null;
var entry=files.nextElement$();
if (!entry.getName$().endsWith$S(".htm") && !entry.getName$().contains$CharSequence("data" + $I$(24).separator) && !entry.getName$().contains$CharSequence(".html")  ) {
var eis=zipFile.getInputStream$java_util_zip_ZipEntry(entry);
f=Clazz.new_([dataPath + $I$(24).separator + entry.getName$() ],$I$(24,1).c$$S);
if (entry.isDirectory$()) {
$I$(34).info$S("creating directory " + f);
f.mkdirs$();
} else {
f.getParentFile$().mkdirs$();
f.createNewFile$();
fos=Clazz.new_($I$(28,1).c$$java_io_File,[f]);
var bytesRead=0;
while ((bytesRead=eis.read$BA(buffer)) != -1){
fos.write$BA$I$I(buffer, 0, bytesRead);
}
}}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
(function(a,f){return f.apply(null,a)})([e.getMessage$()],$I$(34).error$S);
break;
} else {
throw e;
}
}
if (fos != null ) {
try {
fos.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["Error encountered while openning zip file. You may not have\n" + "a complete copy of the Jmol distribution.  Check for the file jsmol.zip.\n" + e.getMessage$() ],$I$(5).$$S)],$I$(23).log$S);
this.errCount+=1;
} else {
throw e;
}
}
try {
zipFile.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return (dataPath);
}, p$1);

Clazz.newMeth(C$, 'jmolJarURL', function () {
return (this.getClass$().getProtectionDomain$().getCodeSource$().getLocation$());
}, p$1);

Clazz.newMeth(C$, 'jmolJarPath', function () {
var pathStr;
pathStr=null;
var jarURL=p$1.jmolJarURL.apply(this, []);
pathStr=(function(a,f){return f.apply(null,a)})([jarURL.toString(), System.getProperty$S("file.encoding")],$I$(35).decode$S$S);
pathStr=pathStr.substring$I$I(pathStr.indexOf$S(":") + 1, pathStr.length$());
return (pathStr);
}, p$1);

Clazz.newMeth(C$, 'syncLists$', function () {
var model1=this.instanceList.getModel$();
for (var j=0; j < this.webPanels.length; j++) {
if (j != this.panelIndex) {
var list=this.webPanels[j].instanceList;
var model2=list.getModel$();
model2.clear$();
var n=model1.getSize$();
for (var i=0; i < n; i++) model2.addElement$O(model1.get$I(i));

list.setSelectedIndices$IA(Clazz.array(Integer.TYPE, -1, []));
this.webPanels[j].enableButtons$javax_swing_JList(list);
}}
this.enableButtons$javax_swing_JList(this.instanceList);
});

Clazz.newMeth(C$, 'enableButtons$javax_swing_JList', function (list) {
var nSelected=list.getSelectedIndices$().length;
var nListed=list.getModel$().getSize$();
this.saveButton.setEnabled$Z(nListed > 0);
this.viewButton.setEnabled$Z(false);
this.deleteInstanceButton.setEnabled$Z(nSelected > 0);
});

Clazz.newMeth(C$, 'checkOption$O', function (o) {
return (Clazz.instanceOf(o, "java.lang.Boolean") && (o).booleanValue$()  || Clazz.instanceOf(o, "java.lang.Integer") && (o).intValue$() != 0  );
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.WebPanel, "InstanceCellRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel', 'javax.swing.ListCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getListCellRendererComponent$javax_swing_JList$O$I$Z$Z', function (list, value, index, isSelected, cellHasFocus) {
this.setText$S(" " + (value).name);
if (isSelected) {
this.setBackground$java_awt_Color(list.getSelectionBackground$());
this.setForeground$java_awt_Color(list.getSelectionForeground$());
} else {
this.setBackground$java_awt_Color(list.getBackground$());
this.setForeground$java_awt_Color(list.getForeground$());
}this.setEnabled$Z(list.isEnabled$());
this.setFont$java_awt_Font(list.getFont$());
this.setOpaque$Z(true);
this.this$0.enableButtons$javax_swing_JList.apply(this.this$0, [list]);
return this;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
