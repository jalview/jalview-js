(function(){var P$=Clazz.newPackage("org.jmol.dialog"),p$1={},I$=[[0,'org.jmol.dialog.Dialog','javax.swing.border.TitledBorder','org.jmol.i18n.GT','java.io.File',['org.jmol.dialog.Dialog','.TypeFilter'],'org.jmol.dialog.FileChooser','javax.swing.UIManager','Boolean','org.jmol.dialog.FilePreview','org.jmol.viewer.FileManager','javax.swing.JFileChooser','java.awt.BorderLayout','javax.swing.JPanel','java.awt.FlowLayout','javax.swing.JComboBox',['org.jmol.dialog.Dialog','.ExportChoiceListener'],'javax.swing.JSlider',['org.jmol.dialog.Dialog','.QualityListener'],'javax.swing.JOptionPane','javax.swing.SwingUtilities','org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Dialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', 'org.jmol.api.JmolDialogInterface');
C$.$classes$=[['QualityListener',1],['ExportChoiceListener',1],['TypeFilter',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.extensions=Clazz.array(String, [10]);
this.imageChoices=Clazz.array(String, -1, ["JPEG", "PNG", "GIF", "PPM"]);
this.imageExtensions=Clazz.array(String, -1, ["jpg", "png", "gif", "ppm"]);
this.qualityJ=-1;
this.qualityP=-1;
},1);

C$.$fields$=[['I',['qualityJ','qualityP'],'S',['choice','extension','outputFileName','dialogType','inputFileName','imageType'],'O',['extensions','String[]','qSliderJPEG','javax.swing.JSlider','+qSliderPNG','cb','javax.swing.JComboBox','qPanelJPEG','javax.swing.JPanel','+qPanelPNG','openPreview','org.jmol.dialog.FilePreview','initialFile','java.io.File','imageChoices','String[]','+imageExtensions','vwr','org.jmol.viewer.Viewer']]
,['Z',['haveTranslations','isMac'],'I',['defaultChoice','qualityJPG','qualityPNG'],'O',['imageChooser','javax.swing.JFileChooser','+saveChooser','openChooser','org.jmol.dialog.FileChooser']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getOpenFileNameFromDialog$java_util_Map$org_jmol_viewer_Viewer$S$org_jmol_api_JmolAppAPI$S$Z', function (vwrOptions, vwr, fileName, jmolApp, windowName, allowAppend) {
if (C$.openChooser == null ) {
C$.openChooser=Clazz.new_($I$(6,1));
var temp=$I$(7).get$O("FileChooser.fileNameLabelText");
(function(a,f){return f.apply(null,a)})(["FileChooser.fileNameLabelText", $I$(3).$$S("File or URL:")],$I$(7).put$O$O);
C$.getXPlatformLook$javax_swing_JFileChooser(C$.openChooser);
$I$(7).put$O$O("FileChooser.fileNameLabelText", temp);
}if (this.openPreview == null  && (vwr.isApplet || (function(a,f){return f.apply(null,a)})([System.getProperty$S$S("openFilePreview", "true")],$I$(8).valueOf$S).booleanValue$() ) ) {
this.openPreview=Clazz.new_($I$(9,1).c$$org_jmol_viewer_Viewer$javax_swing_JFileChooser$Z$java_util_Map,[vwr, C$.openChooser, allowAppend, vwrOptions]);
}if (jmolApp != null ) {
var dim=jmolApp.getHistoryWindowSize$S(windowName);
if (dim != null ) C$.openChooser.setDialogSize$java_awt_Dimension(dim);
var loc=jmolApp.getHistoryWindowPosition$S(windowName);
if (loc != null ) C$.openChooser.setDialogLocation$java_awt_Point(loc);
}C$.openChooser.resetChoosableFileFilters$();
if (this.openPreview != null ) this.openPreview.setPreviewOptions$Z(allowAppend);
if (fileName != null ) {
var pt=fileName.lastIndexOf$S(".");
var sType=fileName.substring$I(pt + 1);
if (pt >= 0 && sType.length$() > 0 ) C$.openChooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(Clazz.new_($I$(5,1).c$$S,[sType]));
if (fileName.indexOf$S(".") == 0) fileName="Jmol" + fileName;
if (fileName.length$() > 0) C$.openChooser.setSelectedFile$java_io_File(Clazz.new_($I$(4,1).c$$S,[fileName]));
}if (fileName == null  || fileName.indexOf$S(":") < 0 && fileName.indexOf$S("/") != 0  ) {
var dir=$I$(10).getLocalDirectory$org_jmol_viewer_Viewer$Z(vwr, true);
C$.openChooser.setCurrentDirectory$java_io_File(dir);
}var file=null;
if (C$.openChooser.showOpenDialog$java_awt_Component(this) == 0) file=C$.openChooser.getSelectedFile$();
if (file == null ) return this.closePreview$();
if (jmolApp != null ) jmolApp.addHistoryWindowInfo$S$java_awt_Component$java_awt_Point(windowName, C$.openChooser.getDialog$(), null);
var url=vwr.getLocalUrl$S(file.getAbsolutePath$());
if (url != null ) {
fileName=url;
} else {
(function(a,f){return f.apply(null,a)})([vwr, file.getParent$(), true],$I$(10).setLocalPath$org_jmol_viewer_Viewer$S$Z);
fileName=file.getAbsolutePath$();
}if (fileName.startsWith$S("/")) fileName="file://" + fileName;
var doCartoons=(jmolApp == null  || allowAppend && this.openPreview != null   && this.openPreview.isCartoonsSelected$()  );
var doAppend=(allowAppend && !$I$(10).isScriptType$S(fileName) && this.openPreview != null    && this.openPreview.isAppendSelected$() );
this.closePreview$();
return (doCartoons ? "" : "#NOCARTOONS#;") + (doAppend ? "#APPEND#;" : "") + fileName ;
});

Clazz.newMeth(C$, 'closePreview$', function () {
if (this.openPreview != null ) this.openPreview.doUpdatePreview$java_io_File(null);
return null;
});

Clazz.newMeth(C$, 'getSaveFileNameFromDialog$org_jmol_viewer_Viewer$S$S', function (vwr, fileName, type) {
if (C$.saveChooser == null ) {
C$.saveChooser=Clazz.new_($I$(11,1));
C$.getXPlatformLook$javax_swing_JFileChooser(C$.saveChooser);
}C$.saveChooser.setCurrentDirectory$java_io_File($I$(10).getLocalDirectory$org_jmol_viewer_Viewer$Z(vwr, true));
var file=null;
C$.saveChooser.resetChoosableFileFilters$();
if (fileName != null ) {
var pt=fileName.lastIndexOf$S(".");
var sType=fileName.substring$I(pt + 1);
if (pt >= 0 && sType.length$() > 0 ) C$.saveChooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(Clazz.new_($I$(5,1).c$$S,[sType]));
if (fileName.equals$O("*")) fileName=vwr.getModelSetFileName$();
if (fileName.indexOf$S(".") == 0) fileName="Jmol" + fileName;
file=Clazz.new_($I$(4,1).c$$S,[fileName]);
}if (type != null ) C$.saveChooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(Clazz.new_($I$(5,1).c$$S,[type]));
C$.saveChooser.setSelectedFile$java_io_File(file);
if ((file=p$1.showSaveDialog$java_awt_Component$javax_swing_JFileChooser$java_io_File.apply(this, [this, C$.saveChooser, file])) == null ) return null;
(function(a,f){return f.apply(null,a)})([vwr, file.getParent$(), true],$I$(10).setLocalPath$org_jmol_viewer_Viewer$S$Z);
return file.getAbsolutePath$();
});

Clazz.newMeth(C$, 'getImageFileNameFromDialog$org_jmol_viewer_Viewer$S$S$SA$SA$I$I', function (vwr, fileName, type, imageChoices, imageExtensions, qualityJPG0, qualityPNG0) {
if (qualityJPG0 < 0 || qualityJPG0 > 100 ) qualityJPG0=C$.qualityJPG;
if (qualityPNG0 < 0) qualityPNG0=C$.qualityPNG;
if (qualityPNG0 > 9) qualityPNG0=2;
C$.qualityJPG=qualityJPG0;
C$.qualityPNG=qualityPNG0;
if (this.extension == null ) this.extension="jpg";
if (C$.imageChooser == null ) {
C$.imageChooser=Clazz.new_($I$(11,1));
C$.getXPlatformLook$javax_swing_JFileChooser(C$.imageChooser);
}C$.imageChooser.setCurrentDirectory$java_io_File($I$(10).getLocalDirectory$org_jmol_viewer_Viewer$Z(vwr, true));
C$.imageChooser.resetChoosableFileFilters$();
var file=null;
if (fileName == null ) {
fileName=vwr.getModelSetFileName$();
if (fileName.indexOf$S("?") >= 0) fileName=fileName.substring$I$I(0, fileName.indexOf$S("?"));
var pathName=C$.imageChooser.getCurrentDirectory$().getPath$();
if (fileName != null  && pathName != null  ) {
var extensionStart=fileName.lastIndexOf$I(".");
if (extensionStart != -1) {
fileName=fileName.substring$I$I(0, extensionStart) + "." + this.extension ;
}file=Clazz.new_($I$(4,1).c$$S$S,[pathName, fileName]);
}} else {
if (fileName.indexOf$S(".") == 0) fileName="Jmol" + fileName;
file=Clazz.new_($I$(4,1).c$$S,[fileName]);
type=fileName.substring$I(fileName.lastIndexOf$S(".") + 1);
for (var i=0; i < imageExtensions.length; i++) if (type.equals$O(imageChoices[i]) || type.toLowerCase$().equals$O(imageExtensions[i]) ) {
type=imageChoices[i];
break;
}
}p$1.createExportPanel$SA$SA$S.apply(this, [imageChoices, imageExtensions, type]);
C$.imageChooser.setSelectedFile$java_io_File(this.initialFile=file);
if ((file=p$1.showSaveDialog$java_awt_Component$javax_swing_JFileChooser$java_io_File.apply(this, [this, C$.imageChooser, file])) == null ) return null;
C$.qualityJPG=this.qSliderJPEG.getValue$();
C$.qualityPNG=this.qSliderPNG.getValue$();
if (this.cb.getSelectedIndex$() >= 0) C$.defaultChoice=this.cb.getSelectedIndex$();
(function(a,f){return f.apply(null,a)})([vwr, file.getParent$(), true],$I$(10).setLocalPath$org_jmol_viewer_Viewer$S$Z);
return file.getAbsolutePath$();
});

Clazz.newMeth(C$, 'createExportPanel$SA$SA$S', function (choices, extensions, type) {
C$.imageChooser.setAccessory$javax_swing_JComponent(this);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1)));
if (type == null  || type.equals$O("JPG") ) type="JPEG";
for (C$.defaultChoice=choices.length; --C$.defaultChoice >= 1; ) if (choices[C$.defaultChoice].equals$O(type)) break;

this.extension=extensions[C$.defaultChoice];
this.choice=choices[C$.defaultChoice];
this.extensions=extensions;
C$.imageChooser.resetChoosableFileFilters$();
C$.imageChooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(Clazz.new_($I$(5,1).c$$S,[this.extension]));
var cbPanel=Clazz.new_($I$(13,1));
cbPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1)));
cbPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(3).$$S("Image Type")],$I$(2,1).c$$S));
this.cb=Clazz.new_($I$(15,1));
for (var i=0; i < choices.length; i++) {
this.cb.addItem$O(choices[i]);
}
cbPanel.add$java_awt_Component(this.cb);
this.cb.setSelectedIndex$I(C$.defaultChoice);
this.cb.addItemListener$java_awt_event_ItemListener(Clazz.new_($I$(16,1),[this, null]));
this.add$java_awt_Component$O(cbPanel, "North");
var qPanel2=Clazz.new_($I$(13,1));
qPanel2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1)));
this.qPanelJPEG=Clazz.new_($I$(13,1));
this.qPanelJPEG.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1)));
this.qPanelJPEG.setBorder$javax_swing_border_Border(Clazz.new_([(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["JPEG Quality ({0})"],$I$(3).$$S), C$.qualityJPG],$I$(3).i$S$I)],$I$(2,1).c$$S));
this.qSliderJPEG=Clazz.new_($I$(17,1).c$$I$I$I$I,[0, 50, 100, C$.qualityJPG]);
this.qSliderJPEG.putClientProperty$O$O("JSlider.isFilled", $I$(8).TRUE);
this.qSliderJPEG.setPaintTicks$Z(true);
this.qSliderJPEG.setMajorTickSpacing$I(10);
this.qSliderJPEG.setPaintLabels$Z(true);
this.qSliderJPEG.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(18,1).c$$Z$javax_swing_JSlider,[this, null, true, this.qSliderJPEG]));
this.qPanelJPEG.add$java_awt_Component$O(this.qSliderJPEG, "South");
qPanel2.add$java_awt_Component$O(this.qPanelJPEG, "North");
this.qPanelPNG=Clazz.new_($I$(13,1));
this.qPanelPNG.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1)));
this.qPanelPNG.setBorder$javax_swing_border_Border(Clazz.new_([(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["PNG Compression  ({0})"],$I$(3).$$S), C$.qualityPNG],$I$(3).i$S$I)],$I$(2,1).c$$S));
this.qSliderPNG=Clazz.new_($I$(17,1).c$$I$I$I$I,[0, 0, 9, C$.qualityPNG]);
this.qSliderPNG.putClientProperty$O$O("JSlider.isFilled", $I$(8).TRUE);
this.qSliderPNG.setPaintTicks$Z(true);
this.qSliderPNG.setMajorTickSpacing$I(2);
this.qSliderPNG.setPaintLabels$Z(true);
this.qSliderPNG.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(18,1).c$$Z$javax_swing_JSlider,[this, null, false, this.qSliderPNG]));
this.qPanelPNG.add$java_awt_Component$O(this.qSliderPNG, "South");
qPanel2.add$java_awt_Component$O(this.qPanelPNG, "South");
this.add$java_awt_Component$O(qPanel2, "South");
}, p$1);

Clazz.newMeth(C$, 'getType$', function () {
return this.choice;
});

Clazz.newMeth(C$, 'getQuality$S', function (sType) {
return (sType.equals$O("JPEG") || sType.equals$O("JPG")  ? C$.qualityJPG : sType.equals$O("PNG") ? C$.qualityPNG : -1);
});

Clazz.newMeth(C$, 'doOverWrite$javax_swing_JFileChooser$java_io_File', function (chooser, file) {
var options=Clazz.array(java.lang.Object, -1, [$I$(3).$$S("Yes"), $I$(3).$$S("No")]);
var opt=(function(a,f){return f.apply(null,a)})([chooser, (function(a,f){return f.apply(null,a)})([$I$(3).$$S("Do you want to overwrite file {0}?"), file.getAbsolutePath$()],$I$(3).o$S$O), $I$(3).$$S("Warning"), -1, 2, null, options, options[0]],$I$(19).showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O);
return (opt == 0);
}, 1);

Clazz.newMeth(C$, 'showSaveDialog$java_awt_Component$javax_swing_JFileChooser$java_io_File', function (c, chooser, file) {
while (true){
if (chooser.showSaveDialog$java_awt_Component(c) != 0) return null;
if (this.cb != null  && this.cb.getSelectedIndex$() >= 0 ) C$.defaultChoice=this.cb.getSelectedIndex$();
if ((file=chooser.getSelectedFile$()) == null  || !file.exists$()  || C$.doOverWrite$javax_swing_JFileChooser$java_io_File(chooser, file) ) return file;
}
}, p$1);

Clazz.newMeth(C$, 'setupUI$Z', function (forceNewTranslation) {
if (forceNewTranslation || !C$.haveTranslations ) C$.setupUIManager$();
C$.haveTranslations=true;
});

Clazz.newMeth(C$, 'setupUIManager$', function () {
(function(a,f){return f.apply(null,a)})(["FileChooser.acceptAllFileFilterText", $I$(3).$$S("All Files")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.cancelButtonText", $I$(3).$$S("Cancel")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.cancelButtonToolTipText", $I$(3).$$S("Abort file chooser dialog")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.detailsViewButtonAccessibleName", $I$(3).$$S("Details")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.detailsViewButtonToolTipText", $I$(3).$$S("Details")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.directoryDescriptionText", $I$(3).$$S("Directory")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.directoryOpenButtonText", $I$(3).$$S("Open")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.directoryOpenButtonToolTipText", $I$(3).$$S("Open selected directory")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.fileAttrHeaderText", $I$(3).$$S("Attributes")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.fileDateHeaderText", $I$(3).$$S("Modified")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.fileDescriptionText", $I$(3).$$S("Generic File")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.fileNameHeaderText", $I$(3).$$S("Name")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.fileNameLabelText", $I$(3).$$S("File Name:")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.fileSizeHeaderText", $I$(3).$$S("Size")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.filesOfTypeLabelText", $I$(3).$$S("Files of Type:")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.fileTypeHeaderText", $I$(3).$$S("Type")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.helpButtonText", $I$(3).$$S("Help")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.helpButtonToolTipText", $I$(3).$$S("FileChooser help")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.homeFolderAccessibleName", $I$(3).$$S("Home")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.homeFolderToolTipText", $I$(3).$$S("Home")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.listViewButtonAccessibleName", $I$(3).$$S("List")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.listViewButtonToolTipText", $I$(3).$$S("List")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.lookInLabelText", $I$(3).$$S("Look In:")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.newFolderErrorText", $I$(3).$$S("Error creating new folder")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.newFolderAccessibleName", $I$(3).$$S("New Folder")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.newFolderToolTipText", $I$(3).$$S("Create New Folder")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.openButtonText", $I$(3).$$S("Open")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.openButtonToolTipText", $I$(3).$$S("Open selected file")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.openDialogTitleText", $I$(3).$$S("Open")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.saveButtonText", $I$(3).$$S("Save")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.saveButtonToolTipText", $I$(3).$$S("Save selected file")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.saveDialogTitleText", $I$(3).$$S("Save")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.saveInLabelText", $I$(3).$$S("Save In:")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.updateButtonText", $I$(3).$$S("Update")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.updateButtonToolTipText", $I$(3).$$S("Update directory listing")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.upFolderAccessibleName", $I$(3).$$S("Up")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["FileChooser.upFolderToolTipText", $I$(3).$$S("Up One Level")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["OptionPane.cancelButtonText", $I$(3).$$S("Cancel")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["OptionPane.noButtonText", $I$(3).$$S("No")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["OptionPane.okButtonText", $I$(3).$$S("OK")],$I$(7).put$O$O);
(function(a,f){return f.apply(null,a)})(["OptionPane.yesButtonText", $I$(3).$$S("Yes")],$I$(7).put$O$O);
}, 1);

Clazz.newMeth(C$, 'getXPlatformLook$javax_swing_JFileChooser', function (fc) {
if (C$.isMac) {
var lnf=$I$(7).getLookAndFeel$();
if (lnf.isNativeLookAndFeel$()) {
try {
(function(a,f){return f.apply(null,a)})([$I$(7).getCrossPlatformLookAndFeelClassName$()],$I$(7).setLookAndFeel$S);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.getMessage$());
} else {
throw e;
}
}
fc.updateUI$();
try {
$I$(7).setLookAndFeel$javax_swing_LookAndFeel(lnf);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.UnsupportedLookAndFeelException")){
System.out.println$S(e.getMessage$());
} else {
throw e;
}
}
}} else {
fc.updateUI$();
}}, 1);

Clazz.newMeth(C$, 'setImageInfo$I$I$S', function (qualityJPG, qualityPNG, imageType) {
this.qualityJ=qualityJPG;
this.qualityP=qualityPNG;
this.imageType=imageType;
});

Clazz.newMeth(C$, 'getFileNameFromDialog$org_jmol_viewer_Viewer$S$S', function (v, dType, iFileName) {
this.vwr=v;
this.dialogType=dType;
this.inputFileName=iFileName;
this.outputFileName=null;
try {
(function(a,f){return f.apply(null,a)})([((P$.Dialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Dialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
if (this.b$['org.jmol.dialog.Dialog'].dialogType.equals$O("Load")) {
this.b$['org.jmol.dialog.Dialog'].outputFileName=this.b$['org.jmol.dialog.Dialog'].getOpenFileNameFromDialog$java_util_Map$org_jmol_viewer_Viewer$S$org_jmol_api_JmolAppAPI$S$Z.apply(this.b$['org.jmol.dialog.Dialog'], [this.b$['org.jmol.dialog.Dialog'].vwr.vwrOptions, this.b$['org.jmol.dialog.Dialog'].vwr, this.b$['org.jmol.dialog.Dialog'].inputFileName, null, null, false]);
return;
}if (this.b$['org.jmol.dialog.Dialog'].dialogType.equals$O("Save")) {
this.b$['org.jmol.dialog.Dialog'].outputFileName=this.b$['org.jmol.dialog.Dialog'].getSaveFileNameFromDialog$org_jmol_viewer_Viewer$S$S.apply(this.b$['org.jmol.dialog.Dialog'], [this.b$['org.jmol.dialog.Dialog'].vwr, this.b$['org.jmol.dialog.Dialog'].inputFileName, null]);
return;
}if (this.b$['org.jmol.dialog.Dialog'].dialogType.startsWith$S("Save Image")) {
this.b$['org.jmol.dialog.Dialog'].outputFileName=this.b$['org.jmol.dialog.Dialog'].getImageFileNameFromDialog$org_jmol_viewer_Viewer$S$S$SA$SA$I$I.apply(this.b$['org.jmol.dialog.Dialog'], [this.b$['org.jmol.dialog.Dialog'].vwr, this.b$['org.jmol.dialog.Dialog'].inputFileName, this.b$['org.jmol.dialog.Dialog'].imageType, this.b$['org.jmol.dialog.Dialog'].imageChoices, this.b$['org.jmol.dialog.Dialog'].imageExtensions, this.b$['org.jmol.dialog.Dialog'].qualityJ, this.b$['org.jmol.dialog.Dialog'].qualityP]);
return;
}this.b$['org.jmol.dialog.Dialog'].outputFileName=null;
});
})()
), Clazz.new_(P$.Dialog$1.$init$,[this, null]))],$I$(20).invokeAndWait$Runnable);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
(function(a,f){return f.apply(null,a)})([e.getMessage$()],$I$(21).error$S);
} else {
throw e;
}
}
return this.outputFileName;
});

C$.$static$=function(){C$.$static$=0;
C$.qualityJPG=75;
C$.qualityPNG=2;
C$.haveTranslations=false;
C$.isMac=System.getProperty$S$S("os.name", "").startsWith$S("Mac");
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Dialog, "QualityListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isJPEG'],'O',['slider','javax.swing.JSlider']]]

Clazz.newMeth(C$, 'c$$Z$javax_swing_JSlider', function (isJPEG, slider) {
;C$.$init$.apply(this);
this.isJPEG=isJPEG;
this.slider=slider;
}, 1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (arg0) {
var value=this.slider.getValue$();
if (this.isJPEG) {
$I$(1).qualityJPG=value;
this.this$0.qPanelJPEG.setBorder$javax_swing_border_Border(Clazz.new_([(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["JPEG Quality ({0})"],$I$(3).$$S), value],$I$(3).i$S$I)],$I$(2,1).c$$S));
} else {
$I$(1).qualityPNG=value;
this.this$0.qPanelPNG.setBorder$javax_swing_border_Border(Clazz.new_([(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["PNG Quality ({0})"],$I$(3).$$S), value],$I$(3).i$S$I)],$I$(2,1).c$$S));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Dialog, "ExportChoiceListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ItemListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
var source=e.getSource$();
var selectedFile=$I$(1).imageChooser.getSelectedFile$();
if (selectedFile == null ) selectedFile=this.this$0.initialFile;
var newFile=null;
var name;
var newExt=this.this$0.extensions[source.getSelectedIndex$()];
if ((name=selectedFile.getName$()) != null  && name.endsWith$S("." + this.this$0.extension) ) {
name=name.substring$I$I(0, name.length$() - this.this$0.extension.length$());
name += newExt;
this.this$0.initialFile=newFile=Clazz.new_([selectedFile.getParent$(), name],$I$(4,1).c$$S$S);
}this.this$0.extension=newExt;
$I$(1).imageChooser.resetChoosableFileFilters$();
$I$(1).imageChooser.addChoosableFileFilter$javax_swing_filechooser_FileFilter(Clazz.new_($I$(5,1).c$$S,[this.this$0.extension]));
if (newFile != null ) $I$(1).imageChooser.setSelectedFile$java_io_File(newFile);
this.this$0.choice=source.getSelectedItem$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Dialog, "TypeFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.filechooser.FileFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['thisType']]]

Clazz.newMeth(C$, 'c$$S', function (type) {
Clazz.super_(C$, this);
this.thisType=type.toLowerCase$();
}, 1);

Clazz.newMeth(C$, 'accept$java_io_File', function (f) {
if (f.isDirectory$() || this.thisType == null  ) {
return true;
}var ext=f.getName$();
var pt=ext.lastIndexOf$S(".");
return (pt >= 0 && ext.substring$I(pt + 1).toLowerCase$().equals$O(this.thisType) );
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.thisType.toUpperCase$() + " (*." + this.thisType + ")" ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
