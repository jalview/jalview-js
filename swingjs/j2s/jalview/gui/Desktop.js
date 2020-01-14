(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.gui.Desktop','Thread','java.text.NumberFormat','Runtime','java.awt.Color','jalview.util.MessageManager','jalview.gui.JalviewChangeSupport','java.util.ArrayList','java.util.concurrent.Executors','java.util.concurrent.Semaphore','jalview.util.Platform','jalview.bin.Cache',['jalview.gui.Desktop','.MyDesktopPane'],'java.awt.BorderLayout',['jalview.gui.Desktop','.MyDesktopManager'],'javax.swing.DefaultDesktopManager','jalview.gui.AquaInternalFrameManager','java.awt.Toolkit','java.awt.dnd.DropTarget','java.awt.event.WindowAdapter','java.awt.event.MouseAdapter','Boolean','jalview.structure.StructureSelectionManager','jalview.gui.BlogReader','jalview.ws.utils.UrlDownloadClient','jalview.urls.IdOrgSettings','java.awt.Rectangle','javax.swing.JPopupMenu','javax.swing.JMenuItem','java.awt.datatransfer.DataFlavor','jalview.io.IdentifyFile','jalview.io.DataSourceType','jalview.io.FileLoader','java.awt.Dimension','jalview.bin.Jalview','jalview.gui.PaintRefresher','jalview.jbgui.GDesktop','javax.swing.event.InternalFrameAdapter','javax.swing.AbstractAction','javax.swing.KeyStroke','jalview.io.FileFormat','jalview.io.JalviewFileChooser','jalview.io.JalviewFileView','jalview.io.FileFormats','javax.swing.JLabel','javax.swing.JPanel','java.awt.GridLayout','javax.swing.JTextField','jalview.gui.JvOptionPane','jalview.gui.CutAndPasteTransfer','jalview.gui.SplashScreen','StringBuffer','jalview.util.BrowserLauncher','jalview.gui.Preferences','jalview.io.BackupFiles','jalview.project.Jalview2XML','jalview.gui.OOMWarning','jalview.gui.SequenceFetcher','javax.swing.JProgressBar','jalview.gui.AlignmentPanel','jalview.viewmodel.AlignmentViewport','jalview.gui.AlignFrame','java.io.File','java.io.FileOutputStream','java.io.BufferedInputStream','jalview.gui.VamsasApplication','Error','jalview.gui.UserQuestionnaireCheck','jalview.util.UrlConstants','javax.swing.BoxLayout','javax.swing.Box','javax.swing.JCheckBox','javax.swing.JOptionPane','jalview.jbgui.GStructureViewer','groovy.ui.Console','java.util.Hashtable','javax.swing.JButton','jalview.ws.jws1.Discoverer','jalview.ws.jws2.Jws2Discoverer','jalview.gui.WsParamSetManager',['javax.swing.event.HyperlinkEvent','.EventType'],'javax.swing.SwingUtilities','jalview.gui.ImageExporter',['jalview.util.ImageMaker','.TYPE'],'jalview.gui.SplitFrame','java.util.StringTokenizer','java.net.URI','org.stackoverflowusers.file.WindowsShortcut','jalview.io.AppletFormatAdapter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Desktop", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.jbgui.GDesktop', ['java.awt.dnd.DropTargetListener', 'java.awt.datatransfer.ClipboardOwner', 'jalview.gui.IProgressIndicator', 'jalview.api.StructureSelectionManagerProvider']);
C$.DEFAULT_MIN_WIDTH=0;
C$.DEFAULT_MIN_HEIGHT=0;
C$.ALIGN_FRAME_DEFAULT_MIN_WIDTH=0;
C$.ALIGN_FRAME_DEFAULT_MIN_HEIGHT=0;
C$.instance=null;
C$.desktop=null;
C$.openFrameCount=0;
C$.discoverer=null;
C$.jalviewClipboard=null;
C$.internalCopy=false;
C$.fileLoadingCount=0;
C$.wsparamManager=null;
C$.groovyConsole=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.DEFAULT_MIN_WIDTH=300;
C$.DEFAULT_MIN_HEIGHT=250;
C$.ALIGN_FRAME_DEFAULT_MIN_WIDTH=600;
C$.ALIGN_FRAME_DEFAULT_MIN_HEIGHT=70;
C$.openFrameCount=0;
C$.internalCopy=false;
C$.fileLoadingCount=0;
C$.wsparamManager=null;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$changeSupport=null;
this.jvnews=null;
this.projectFile=null;
this.jconsole=null;
this.progressPanel=null;
this.fileLoadingPanels=null;
this.totalProgressCount=0;
this.v_client=null;
this.vamUpdate=null;
this.progressBars=null;
this.progressBarHandlers=null;
this.inBatchMode=false;
this.serviceChangedDialog=null;
this.dialogExecutor=null;
this.dialogPause=false;
this.block=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.$changeSupport=Clazz.new_($I$(7));
this.jvnews=null;
this.jconsole=null;
this.fileLoadingPanels=Clazz.new_($I$(8));
this.totalProgressCount=0;
this.v_client=null;
this.vamUpdate=null;
this.inBatchMode=false;
this.serviceChangedDialog=null;
this.dialogExecutor=$I$(9).newSingleThreadExecutor$();
this.dialogPause=true;
this.block=Clazz.new_($I$(10).c$$I,[0]);
}, 1);

Clazz.newMeth(C$, 'addJalviewPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
this.$changeSupport.addJalviewPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'addJalviewPropertyChangeListener$S$java_beans_PropertyChangeListener', function (propertyName, listener) {
this.$changeSupport.addJalviewPropertyChangeListener$S$java_beans_PropertyChangeListener(propertyName, listener);
});

Clazz.newMeth(C$, 'removeJalviewPropertyChangeListener$S$java_beans_PropertyChangeListener', function (propertyName, listener) {
this.$changeSupport.removeJalviewPropertyChangeListener$S$java_beans_PropertyChangeListener(propertyName, listener);
});

Clazz.newMeth(C$, 'getDesktop$', function () {
return C$.desktop;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
C$.instance=this;
if (!$I$(11).isJS$()) {
p$1.doVamsasClientCheck.apply(this, []);
}this.doConfigureStructurePrefs$();
this.setTitle$S("Jalview " + $I$(12).getProperty$S("VERSION"));
this.setDefaultCloseOperation$I(3);
var selmemusage=$I$(12).getDefault$S$Z("SHOW_MEMUSAGE", false);
var showjconsole=$I$(12).getDefault$S$Z("SHOW_JAVA_CONSOLE", false);
C$.desktop=Clazz.new_($I$(13).c$$Z, [this, null, selmemusage]);
this.showMemusage.setSelected$Z(selmemusage);
C$.desktop.setBackground$java_awt_Color($I$(5).white);
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(14)));
if ($I$(11).isJS$()) {
this.getRootPane$().putClientProperty$O$O("swingjs.overflow.hidden", "false");
}this.getContentPane$().add$java_awt_Component$O(C$.desktop, "Center");
C$.desktop.setDragMode$I(1);
C$.desktop.setDesktopManager$javax_swing_DesktopManager(Clazz.new_($I$(15).c$$javax_swing_DesktopManager, [this, null, ($I$(11).isWindowsAndNotJS$() ? Clazz.new_($I$(16)) : $I$(11).isAMacAndNotJS$() ? Clazz.new_($I$(17).c$$javax_swing_DesktopManager,[C$.desktop.getDesktopManager$()]) : C$.desktop.getDesktopManager$())]));
var dims=this.getLastKnownDimensions$S("");
if (dims != null ) {
this.setBounds$java_awt_Rectangle(dims);
} else {
var screenSize=$I$(18).getDefaultToolkit$().getScreenSize$();
var xPos=Math.max(5, ((screenSize.width - 900)/2|0));
var yPos=Math.max(5, ((screenSize.height - 650)/2|0));
this.setBounds$I$I$I$I(xPos, yPos, 900, 650);
}if (!$I$(11).isJS$()) 
{}
this.setDropTarget$java_awt_dnd_DropTarget(Clazz.new_($I$(19).c$$java_awt_Component$java_awt_dnd_DropTargetListener,[C$.desktop, this]));
this.addWindowListener$java_awt_event_WindowListener(((P$.Desktop$4||
(function(){var C$=Clazz.newClass(P$, "Desktop$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (evt) {
this.b$['jalview.gui.Desktop'].quit$.apply(this.b$['jalview.gui.Desktop'], []);
});
})()
), Clazz.new_($I$(20), [this, null],P$.Desktop$4)));
var ma;
this.addMouseListener$java_awt_event_MouseListener(ma=((P$.Desktop$5||
(function(){var C$=Clazz.newClass(P$, "Desktop$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
if (evt.isPopupTrigger$()) {
this.b$['jalview.gui.Desktop'].showPasteMenu$I$I.apply(this.b$['jalview.gui.Desktop'], [evt.getX$(), evt.getY$()]);
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
if (evt.isPopupTrigger$()) {
this.b$['jalview.gui.Desktop'].showPasteMenu$I$I.apply(this.b$['jalview.gui.Desktop'], [evt.getX$(), evt.getY$()]);
}});
})()
), Clazz.new_($I$(21), [this, null],P$.Desktop$5)));
C$.desktop.addMouseListener$java_awt_event_MouseListener(ma);
}, 1);

Clazz.newMeth(C$, 'showExperimental$', function () {
var experimental=$I$(12).getDefault$S$S("EXPERIMENTAL_FEATURES", $I$(22).FALSE.toString());
return $I$(22).valueOf$S(experimental).booleanValue$();
});

Clazz.newMeth(C$, 'doConfigureStructurePrefs$', function () {
var ssm=$I$(23).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this);
if ($I$(12).getDefault$S$Z("ADD_SS_ANN", true)) {
ssm.setAddTempFacAnnot$Z($I$(12).getDefault$S$Z("ADD_TEMPFACT_ANN", true));
ssm.setProcessSecondaryStructure$Z($I$(12).getDefault$S$Z("STRUCT_FROM_PDB", true));
ssm.setSecStructServices$Z($I$(12).getDefault$S$Z("USE_RNAVIEW", true));
} else {
ssm.setAddTempFacAnnot$Z(false);
ssm.setProcessSecondaryStructure$Z(false);
ssm.setSecStructServices$Z(false);
}});

Clazz.newMeth(C$, 'checkForNews$', function () {
var me=this;
Clazz.new_($I$(2).c$$Runnable,[((P$.Desktop$6||
(function(){var C$=Clazz.newClass(P$, "Desktop$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(12).log.debug$O("Starting news thread.");
this.b$['jalview.gui.Desktop'].jvnews=Clazz.new_($I$(24).c$$jalview_gui_Desktop,[this.$finals$.me]);
this.b$['jalview.gui.Desktop'].showNews.setVisible$Z(true);
$I$(12).log.debug$O("Completed news thread.");
});
})()
), Clazz.new_(P$.Desktop$6.$init$, [this, {me: me}]))]).start$();
});

Clazz.newMeth(C$, 'getIdentifiersOrgData$', function () {
Clazz.new_($I$(2).c$$Runnable,[((P$.Desktop$7||
(function(){var C$=Clazz.newClass(P$, "Desktop$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(12).log.debug$O("Downloading data from identifiers.org");
var client=Clazz.new_($I$(25));
try {
client.download$S$S($I$(26).getUrl$(), $I$(26).getDownloadLocation$());
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(12).log.debug$O("Exception downloading identifiers.org data" + e.getMessage$());
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.Desktop$7.$init$, [this, null]))]).start$();
;});

Clazz.newMeth(C$, 'showNews_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.showNews$Z(this.showNews.isSelected$());
});

Clazz.newMeth(C$, 'showNews$Z', function (visible) {
$I$(12).log.debug$O((visible ? "Showing" : "Hiding") + " news.");
this.showNews.setSelected$Z(visible);
if (visible && !this.jvnews.isVisible$() ) {
Clazz.new_($I$(2).c$$Runnable,[((P$.Desktop$8||
(function(){var C$=Clazz.newClass(P$, "Desktop$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var now=System.currentTimeMillis$();
$I$(1).instance.setProgressBar$S$J($I$(6).getString$S("status.refreshing_news"), now);
this.b$['jalview.gui.Desktop'].jvnews.refreshNews$();
$I$(1).instance.setProgressBar$S$J(null, now);
this.b$['jalview.gui.Desktop'].jvnews.showNews$();
});
})()
), Clazz.new_(P$.Desktop$8.$init$, [this, null]))]).start$();
}});

Clazz.newMeth(C$, 'getLastKnownDimensions$S', function (windowName) {
var screenSize=$I$(18).getDefaultToolkit$().getScreenSize$();
var x=$I$(12).getProperty$S(windowName + "SCREEN_X");
var y=$I$(12).getProperty$S(windowName + "SCREEN_Y");
var width=$I$(12).getProperty$S(windowName + "SCREEN_WIDTH");
var height=$I$(12).getProperty$S(windowName + "SCREEN_HEIGHT");
if ((x != null ) && (y != null ) && (width != null ) && (height != null )  ) {
var ix=Integer.parseInt$S(x);
var iy=Integer.parseInt$S(y);
var iw=Integer.parseInt$S(width);
var ih=Integer.parseInt$S(height);
if ($I$(12).getProperty$S("SCREENGEOMETRY_WIDTH") != null ) {
var sw=((1.0 * screenSize.width) / (1.0 * Integer.parseInt$S($I$(12).getProperty$S("SCREENGEOMETRY_WIDTH"))));
var sh=((1.0 * screenSize.height) / (1.0 * Integer.parseInt$S($I$(12).getProperty$S("SCREENGEOMETRY_HEIGHT"))));
ix=((ix * sw)|0);
iw=((iw * sw)|0);
iy=((iy * sh)|0);
ih=((ih * sh)|0);
while (ix >= screenSize.width){
$I$(12).log.debug$O("Window geometry location recall error: shifting horizontal to within screenbounds.");
ix-=screenSize.width;
}
while (iy >= screenSize.height){
$I$(12).log.debug$O("Window geometry location recall error: shifting vertical to within screenbounds.");
iy-=screenSize.height;
}
$I$(12).log.debug$O("Got last known dimensions for " + windowName + ": x:" + ix + " y:" + iy + " width:" + iw + " height:" + ih );
}return Clazz.new_($I$(27).c$$I$I$I$I,[ix, iy, iw, ih]);
}return null;
});

Clazz.newMeth(C$, 'doVamsasClientCheck', function () {
if ($I$(12).vamsasJarsPresent$()) {
this.setupVamsasDisconnectedGui$();
this.VamsasMenu.setVisible$Z(true);
var us=this;
this.VamsasMenu.addMenuListener$javax_swing_event_MenuListener(((P$.Desktop$9||
(function(){var C$=Clazz.newClass(P$, "Desktop$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.refresh=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.refresh=true;
}, 1);

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent', function (e) {
this.refresh=true;
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent', function (e) {
this.refresh=true;
});

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent', function (e) {
if (this.refresh) {
this.$finals$.us.buildVamsasStMenu$();
this.refresh=false;
}});
})()
), Clazz.new_(P$.Desktop$9.$init$, [this, {us: us}])));
this.vamsasStart.setVisible$Z(true);
}}, p$1);

Clazz.newMeth(C$, 'showPasteMenu$I$I', function (x, y) {
var popup=Clazz.new_($I$(28));
var item=Clazz.new_($I$(29).c$$S,[$I$(6).getString$S("label.paste_new_window")]);
item.addActionListener$java_awt_event_ActionListener(((P$.Desktop$10||
(function(){var C$=Clazz.newClass(P$, "Desktop$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (evt) {
this.b$['jalview.gui.Desktop'].paste$.apply(this.b$['jalview.gui.Desktop'], []);
});
})()
), Clazz.new_(P$.Desktop$10.$init$, [this, null])));
popup.add$javax_swing_JMenuItem(item);
popup.show$java_awt_Component$I$I(this, x, y);
});

Clazz.newMeth(C$, 'paste$', function () {
try {
var c=$I$(18).getDefaultToolkit$().getSystemClipboard$();
var contents=c.getContents$O(this);
if (contents != null ) {
var file=contents.getTransferData$java_awt_datatransfer_DataFlavor($I$(30).stringFlavor);
var format=Clazz.new_($I$(31)).identify$S$jalview_io_DataSourceType(file, $I$(32).PASTE);
Clazz.new_($I$(33)).LoadFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(file, $I$(32).PASTE, format);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Unable to paste alignment from system clipboard:\n" + ex);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'addInternalFrame$javax_swing_JInternalFrame$S$I$I', function (frame, title, w, h) {
C$.addInternalFrame$javax_swing_JInternalFrame$S$Z$I$I$Z$Z(frame, title, true, w, h, true, false);
}, 1);

Clazz.newMeth(C$, 'addInternalFrame$javax_swing_JInternalFrame$S$Z$I$I', function (frame, title, makeVisible, w, h) {
C$.addInternalFrame$javax_swing_JInternalFrame$S$Z$I$I$Z$Z(frame, title, makeVisible, w, h, true, false);
}, 1);

Clazz.newMeth(C$, 'addInternalFrame$javax_swing_JInternalFrame$S$I$I$Z', function (frame, title, w, h, resizable) {
C$.addInternalFrame$javax_swing_JInternalFrame$S$Z$I$I$Z$Z(frame, title, true, w, h, resizable, false);
}, 1);

Clazz.newMeth(C$, 'addInternalFrame$javax_swing_JInternalFrame$S$Z$I$I$Z$Z', function (frame, title, makeVisible, w, h, resizable, ignoreMinSize) {
frame.setTitle$S(title);
if (frame.getWidth$() < 1 || frame.getHeight$() < 1 ) {
frame.setSize$I$I(w, h);
}if (C$.instance == null  || (System.getProperty$S("java.awt.headless") != null  && System.getProperty$S("java.awt.headless").equals$O("true") ) ) {
return;
}C$.openFrameCount++;
if (!ignoreMinSize) {
frame.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(34).c$$I$I,[C$.DEFAULT_MIN_WIDTH, C$.DEFAULT_MIN_HEIGHT]));
if (Clazz.instanceOf(frame, "jalview.gui.AlignFrame")) {
frame.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(34).c$$I$I,[C$.ALIGN_FRAME_DEFAULT_MIN_WIDTH, C$.ALIGN_FRAME_DEFAULT_MIN_HEIGHT]));
}}frame.setVisible$Z(makeVisible);
frame.setClosable$Z(true);
frame.setResizable$Z(resizable);
frame.setMaximizable$Z(resizable);
frame.setIconifiable$Z(resizable);
frame.setOpaque$Z($I$(11).isJS$());
if (frame.getX$() < 1 && frame.getY$() < 1 ) {
frame.setLocation$I$I(30 * C$.openFrameCount, 30 * ((C$.openFrameCount - 1) % 10) + 30);
}var menuItem=Clazz.new_($I$(29).c$$S,[title]);
frame.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.Desktop$11||
(function(){var C$=Clazz.newClass(P$, "Desktop$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'internalFrameActivated$javax_swing_event_InternalFrameEvent', function (evt) {
var itf=$I$(1).desktop.getSelectedFrame$();
if (itf != null ) {
if (Clazz.instanceOf(itf, "jalview.gui.AlignFrame")) {
$I$(35).setCurrentAlignFrame$jalview_gui_AlignFrame(itf);
}itf.requestFocus$();
}});

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (evt) {
$I$(36).RemoveComponent$java_awt_Component(this.$finals$.frame);
if ($I$(1).openFrameCount > 0) {
$I$(1).openFrameCount--;
}if (this.$finals$.menuItem.getActionListeners$().length > 0) {
this.$finals$.menuItem.removeActionListener$java_awt_event_ActionListener(this.$finals$.menuItem.getActionListeners$()[0]);
}$I$(37).windowMenu.remove$javax_swing_JMenuItem(this.$finals$.menuItem);
});
})()
), Clazz.new_($I$(38), [this, {frame: frame, menuItem: menuItem}],P$.Desktop$11)));
menuItem.addActionListener$java_awt_event_ActionListener(((P$.Desktop$12||
(function(){var C$=Clazz.newClass(P$, "Desktop$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
try {
this.$finals$.frame.setSelected$Z(true);
this.$finals$.frame.setIcon$Z(false);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.PropertyVetoException")){
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.Desktop$12.$init$, [this, {frame: frame}])));
C$.setKeyBindings$javax_swing_JInternalFrame(frame);
C$.desktop.add$java_awt_Component(frame);
$I$(37).windowMenu.add$javax_swing_JMenuItem(menuItem);
frame.toFront$();
try {
frame.setSelected$Z(true);
frame.requestFocus$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.beans.PropertyVetoException")){
var ve = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"ClassCastException")){
var cex = e$$;
{
$I$(12).log.warn$O$Throwable("Squashed a possible GUI implementation error. If you can recreate this, please look at http://issues.jalview.org/browse/JAL-869", cex);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'setKeyBindings$javax_swing_JInternalFrame', function (frame) {
var closeAction=((P$.Desktop$13||
(function(){var C$=Clazz.newClass(P$, "Desktop$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.$finals$.frame.dispose$();
});
})()
), Clazz.new_($I$(39), [this, {frame: frame}],P$.Desktop$13));
var ctrlWKey=$I$(40).getKeyStroke$I$I(87, 128);
var cmdWKey=$I$(40).getKeyStroke$I$I(87, $I$(18).getDefaultToolkit$().getMenuShortcutKeyMask$());
var inputMap=frame.getInputMap$I(2);
var ctrlW=ctrlWKey.toString();
inputMap.put$javax_swing_KeyStroke$O(ctrlWKey, ctrlW);
inputMap.put$javax_swing_KeyStroke$O(cmdWKey, ctrlW);
var actionMap=frame.getActionMap$();
actionMap.put$O$javax_swing_Action(ctrlW, closeAction);
}, 1);

Clazz.newMeth(C$, ['lostOwnership$java_awt_datatransfer_Clipboard$java_awt_datatransfer_Transferable','lostOwnership$'], function (clipboard, contents) {
if (!C$.internalCopy) {
C$.jalviewClipboard=null;
}C$.internalCopy=false;
});

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DropTargetDragEvent', function (evt) {
});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DropTargetEvent', function (evt) {
});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DropTargetDragEvent', function (evt) {
});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DropTargetDragEvent', function (evt) {
});

Clazz.newMeth(C$, 'drop$java_awt_dnd_DropTargetDropEvent', function (evt) {
var success=true;
evt.acceptDrop$I(3);
var t=evt.getTransferable$();
var files=Clazz.new_($I$(8));
var protocols=Clazz.new_($I$(8));
try {
C$.transferFromDropTarget$java_util_List$java_util_List$java_awt_dnd_DropTargetDropEvent$java_awt_datatransfer_Transferable(files, protocols, evt, t);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
success=false;
} else {
throw e;
}
}
if (files != null ) {
try {
for (var i=0; i < files.size$(); i++) {
var file=files.get$I(i);
var fileName=file.toString();
var protocol=(protocols == null ) ? $I$(32).FILE : protocols.get$I(i);
var format=null;
if (fileName.endsWith$S(".jar")) {
format=$I$(41).Jalview;
} else {
format=Clazz.new_($I$(31)).identify$O$jalview_io_DataSourceType(file, protocol);
}if (Clazz.instanceOf(file, "java.io.File")) {
$I$(11).cacheFileData$java_io_File(file);
}Clazz.new_($I$(33)).LoadFile$jalview_gui_AlignViewport$O$jalview_io_DataSourceType$jalview_io_FileFormatI(null, file, protocol, format);
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
success=false;
} else {
throw ex;
}
}
}evt.dropComplete$Z(success);
});

Clazz.newMeth(C$, 'inputLocalFileMenuItem_actionPerformed$jalview_gui_AlignViewport', function (viewport) {
var fileFormat=$I$(12).getProperty$S("DEFAULT_FILE_FORMAT");
var chooser=$I$(42).forRead$S$S$Z($I$(12).getProperty$S("LAST_DIRECTORY"), fileFormat, true);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(43)));
chooser.setDialogTitle$S($I$(6).getString$S("label.open_local_file"));
chooser.setToolTipText$S($I$(6).getString$S("action.open"));
chooser.setResponseHandler$O$Runnable(new Integer(0), ((P$.Desktop$14||
(function(){var C$=Clazz.newClass(P$, "Desktop$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var selectedFile=this.$finals$.chooser.getSelectedFile$();
$I$(12).setProperty$S$S("LAST_DIRECTORY", selectedFile.getParent$());
var format=this.$finals$.chooser.getSelectedFormat$();
if ($I$(44).getInstance$().isIdentifiable$jalview_io_FileFormatI(format)) {
try {
format=Clazz.new_($I$(31)).identify$java_io_File$jalview_io_DataSourceType(selectedFile, $I$(32).FILE);
} catch (e) {
if (Clazz.exceptionOf(e,"jalview.io.FileFormatException")){
} else {
throw e;
}
}
}Clazz.new_($I$(33)).LoadFile$jalview_gui_AlignViewport$O$jalview_io_DataSourceType$jalview_io_FileFormatI(this.$finals$.viewport, selectedFile, $I$(32).FILE, format);
});
})()
), Clazz.new_(P$.Desktop$14.$init$, [this, {chooser: chooser, viewport: viewport}])));
chooser.showOpenDialog$java_awt_Component(this);
});

Clazz.newMeth(C$, 'inputURLMenuItem_actionPerformed$jalview_gui_AlignViewport', function (viewport) {
var label=Clazz.new_($I$(45).c$$S,[$I$(6).getString$S("label.input_file_url")]);
var panel=Clazz.new_($I$(46).c$$java_awt_LayoutManager,[Clazz.new_($I$(47).c$$I$I,[2, 1])]);
panel.add$java_awt_Component(label);
var history;
var urlBase="http://www.";
if ($I$(11).isJS$()) {
history=Clazz.new_($I$(48).c$$S$I,[urlBase, 35]);
} else 
{}
panel.add$java_awt_Component(history);
var options=Clazz.array(java.lang.Object, -1, [$I$(6).getString$S("action.ok"), $I$(6).getString$S("action.cancel")]);
var action=((P$.Desktop$15||
(function(){var C$=Clazz.newClass(P$, "Desktop$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var url=(Clazz.instanceOf(this.$finals$.history, "javax.swing.JTextField") ? (this.$finals$.history).getText$() : (this.$finals$.history).getSelectedItem$().toString());
if (url.toLowerCase$().endsWith$S(".jar")) {
if (this.$finals$.viewport != null ) {
Clazz.new_($I$(33)).LoadFile$jalview_gui_AlignViewport$O$jalview_io_DataSourceType$jalview_io_FileFormatI(this.$finals$.viewport, url, $I$(32).URL, $I$(41).Jalview);
} else {
Clazz.new_($I$(33)).LoadFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(url, $I$(32).URL, $I$(41).Jalview);
}} else {
var format=null;
try {
format=Clazz.new_($I$(31)).identify$S$jalview_io_DataSourceType(url, $I$(32).URL);
} catch (e) {
if (Clazz.exceptionOf(e,"jalview.io.FileFormatException")){
} else {
throw e;
}
}
if (format == null ) {
var msg=$I$(6).formatMessage$S$OA("label.couldnt_locate", [url]);
$I$(49).showInternalMessageDialog$java_awt_Component$S$S$I($I$(1).desktop, msg, $I$(6).getString$S("label.url_not_found"), 2);
return;
}if (this.$finals$.viewport != null ) {
Clazz.new_($I$(33)).LoadFile$jalview_gui_AlignViewport$O$jalview_io_DataSourceType$jalview_io_FileFormatI(this.$finals$.viewport, url, $I$(32).URL, format);
} else {
Clazz.new_($I$(33)).LoadFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(url, $I$(32).URL, format);
}}});
})()
), Clazz.new_(P$.Desktop$15.$init$, [this, {history: history, viewport: viewport}]));
var dialogOption=$I$(6).getString$S("label.input_alignment_from_url");
$I$(49).newOptionDialog$java_awt_Component(C$.desktop).setResponseHandler$O$Runnable(new Integer(0), action).showInternalDialog$javax_swing_JPanel$S$I$I$javax_swing_Icon$OA$S(panel, dialogOption, 1, -1, null, options, $I$(6).getString$S("action.ok"));
});

Clazz.newMeth(C$, 'inputTextboxMenuItem_actionPerformed$jalview_api_AlignmentViewPanel', function (viewPanel) {
var cap=Clazz.new_($I$(50));
cap.setForInput$jalview_api_AlignmentViewPanel(viewPanel);
C$.addInternalFrame$javax_swing_JInternalFrame$S$Z$I$I(cap, $I$(6).getString$S("label.cut_paste_alignmen_file"), true, 600, 500);
});

Clazz.newMeth(C$, 'quit$', function () {
var screen=$I$(18).getDefaultToolkit$().getScreenSize$();
$I$(12).setProperty$S$S("SCREENGEOMETRY_WIDTH", screen.width + "");
$I$(12).setProperty$S$S("SCREENGEOMETRY_HEIGHT", screen.height + "");
p$1.storeLastKnownDimensions$S$java_awt_Rectangle.apply(this, ["", Clazz.new_($I$(27).c$$I$I$I$I,[this.getBounds$().x, this.getBounds$().y, this.getWidth$(), this.getHeight$()])]);
if (this.jconsole != null ) {
p$1.storeLastKnownDimensions$S$java_awt_Rectangle.apply(this, ["JAVA_CONSOLE_", this.jconsole.getBounds$()]);
this.jconsole.stopConsole$();
}if (this.jvnews != null ) {
p$1.storeLastKnownDimensions$S$java_awt_Rectangle.apply(this, ["JALVIEW_RSS_WINDOW_", this.jvnews.getBounds$()]);
}if (this.dialogExecutor != null ) {
this.dialogExecutor.shutdownNow$();
}this.closeAll_actionPerformed$java_awt_event_ActionEvent(null);
if (C$.groovyConsole != null ) {
C$.groovyConsole.setDirty$Z(false);
C$.groovyConsole.exit$();
}System.exit$I(0);
});

Clazz.newMeth(C$, 'storeLastKnownDimensions$S$java_awt_Rectangle', function (string, jc) {
$I$(12).log.debug$O("Storing last known dimensions for " + string + ": x:" + jc.x + " y:" + jc.y + " width:" + jc.width + " height:" + jc.height );
$I$(12).setProperty$S$S(string + "SCREEN_X", jc.x + "");
$I$(12).setProperty$S$S(string + "SCREEN_Y", jc.y + "");
$I$(12).setProperty$S$S(string + "SCREEN_WIDTH", jc.width + "");
$I$(12).setProperty$S$S(string + "SCREEN_HEIGHT", jc.height + "");
}, p$1);

Clazz.newMeth(C$, 'aboutMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_($I$(2).c$$Runnable,[((P$.Desktop$16||
(function(){var C$=Clazz.newClass(P$, "Desktop$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
Clazz.new_($I$(51).c$$Z,[true]);
});
})()
), Clazz.new_(P$.Desktop$16.$init$, [this, null]))]).start$();
});

Clazz.newMeth(C$, 'getAboutMessage$Z', function (shortv) {
var message=Clazz.new_($I$(52));
message.append$S("<html>");
if (shortv) {
message.append$S("<h1><strong>Version: " + $I$(12).getProperty$S("VERSION") + "</strong></h1>" );
message.append$S("<strong>Last Updated: <em>" + $I$(12).getDefault$S$S("BUILD_DATE", "unknown") + "</em></strong>" );
} else {
message.append$S("<strong>Version " + $I$(12).getProperty$S("VERSION") + "; last updated: " + $I$(12).getDefault$S$S("BUILD_DATE", "unknown") );
}if ($I$(12).getDefault$S$S("LATEST_VERSION", "Checking").equals$O("Checking")) {
message.append$S("<br>...Checking latest version...</br>");
} else if (!$I$(12).getDefault$S$S("LATEST_VERSION", "Checking").equals$O($I$(12).getProperty$S("VERSION"))) {
var red=false;
if ($I$(12).getProperty$S("VERSION").toLowerCase$().indexOf$S("automated build") == -1) {
red=true;
message.append$S("<div style=\"color: #FF0000;font-style: bold;\">");
}message.append$S("<br>!! Version " + $I$(12).getDefault$S$S("LATEST_VERSION", "..Checking..") + " is available for download from " + $I$(12).getDefault$S$S("www.jalview.org", "http://www.jalview.org") + " !!" );
if (red) {
message.append$S("</div>");
}}message.append$S("<br>Authors:  " + $I$(12).getDefault$S$S("AUTHORFNAMES", "The Jalview Authors (See AUTHORS file for current list)") + "<br><br>Development managed by The Barton Group, University of Dundee, Scotland, UK.<br>" + "<br><br>For help, see the FAQ at <a href=\"http://www.jalview.org/faq\">www.jalview.org/faq</a> and/or join the jalview-discuss@jalview.org mailing list" + "<br><br>If  you use Jalview, please cite:" + "<br>Waterhouse, A.M., Procter, J.B., Martin, D.M.A, Clamp, M. and Barton, G. J. (2009)" + "<br>Jalview Version 2 - a multiple sequence alignment editor and analysis workbench" + "<br>Bioinformatics doi: 10.1093/bioinformatics/btp033" + "</html>" );
return message;
});

Clazz.newMeth(C$, 'documentationMenuItem_actionPerformed$', function () {
try {
if ($I$(11).isJS$()) {
$I$(53).openURL$S("http://www.jalview.org/help.html");
} else 
{}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Error opening help: " + ex.getMessage$());
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'closeAll_actionPerformed$java_awt_event_ActionEvent', function (e) {
var frames=C$.desktop.getAllFrames$();
for (var i=0; i < frames.length; i++) {
try {
frames[i].setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.PropertyVetoException")){
} else {
throw ex;
}
}
}
$I$(35).setCurrentAlignFrame$jalview_gui_AlignFrame(null);
System.out.println$S("ALL CLOSED");
if (this.v_client != null ) {
}var ssm=$I$(23).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this);
if (ssm != null ) {
ssm.resetAll$();
}});

Clazz.newMeth(C$, 'raiseRelated_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.reorderAssociatedWindows$Z$Z(false, false);
});

Clazz.newMeth(C$, 'minimizeAssociated_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.reorderAssociatedWindows$Z$Z(true, false);
});

Clazz.newMeth(C$, 'closeAssociatedWindows$', function () {
this.reorderAssociatedWindows$Z$Z(false, true);
});

Clazz.newMeth(C$, 'garbageCollect_actionPerformed$java_awt_event_ActionEvent', function (e) {
$I$(12).log.debug$O("Collecting garbage...");
System.gc$();
$I$(12).log.debug$O("Finished garbage collection.");
});

Clazz.newMeth(C$, 'showMemusage_actionPerformed$java_awt_event_ActionEvent', function (e) {
C$.desktop.showMemoryUsage$Z(this.showMemusage.isSelected$());
});

Clazz.newMeth(C$, 'showConsole_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.showConsole$Z(this.showConsole.isSelected$());
});

Clazz.newMeth(C$, 'showConsole$Z', function (selected) {
if (this.jconsole != null ) {
this.showConsole.setSelected$Z(selected);
$I$(12).setProperty$S$S("SHOW_JAVA_CONSOLE", $I$(22).valueOf$Z(selected).toString());
this.jconsole.setVisible$Z(selected);
}});

Clazz.newMeth(C$, 'reorderAssociatedWindows$Z$Z', function (minimize, close) {
var frames=C$.desktop.getAllFrames$();
if (frames == null  || frames.length < 1 ) {
return;
}var source=null;
var target=null;
if (Clazz.instanceOf(frames[0], "jalview.gui.AlignFrame")) {
source=(frames[0]).getCurrentView$();
} else if (Clazz.instanceOf(frames[0], "jalview.gui.TreePanel")) {
source=(frames[0]).getViewPort$();
} else if (Clazz.instanceOf(frames[0], "jalview.gui.PCAPanel")) {
source=(frames[0]).av;
} else if (Clazz.instanceOf(frames[0].getContentPane$(), "jalview.gui.PairwiseAlignPanel")) {
source=(frames[0].getContentPane$()).av;
}if (source != null ) {
for (var i=0; i < frames.length; i++) {
target=null;
if (frames[i] == null ) {
continue;
}if (Clazz.instanceOf(frames[i], "jalview.gui.AlignFrame")) {
target=(frames[i]).getCurrentView$();
} else if (Clazz.instanceOf(frames[i], "jalview.gui.TreePanel")) {
target=(frames[i]).getViewPort$();
} else if (Clazz.instanceOf(frames[i], "jalview.gui.PCAPanel")) {
target=(frames[i]).av;
} else if (Clazz.instanceOf(frames[i].getContentPane$(), "jalview.gui.PairwiseAlignPanel")) {
target=(frames[i].getContentPane$()).av;
}if (source === target ) {
try {
if (close) {
frames[i].setClosed$Z(true);
} else {
frames[i].setIcon$Z(minimize);
if (!minimize) {
frames[i].toFront$();
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.PropertyVetoException")){
} else {
throw ex;
}
}
}}
}});

Clazz.newMeth(C$, 'preferences_actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_($I$(54));
});

Clazz.newMeth(C$, 'saveState_actionPerformed$', function () {
this.saveState_actionPerformed$Z(false);
});

Clazz.newMeth(C$, 'saveState_actionPerformed$Z', function (saveAs) {
var projectFile=this.getProjectFile$();
var autoSave=projectFile != null  && !saveAs  && $I$(55).getEnabled$() ;
var approveSave=false;
if (!autoSave) {
var chooser=Clazz.new_($I$(42).c$$S$S,["jvp", "Jalview Project"]);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(43)));
chooser.setDialogTitle$S($I$(6).getString$S("label.save_state"));
var value=chooser.showSaveDialog$java_awt_Component(this);
if (value == 0) {
projectFile=chooser.getSelectedFile$();
p$1.setProjectFile$java_io_File.apply(this, [projectFile]);
approveSave=true;
}}if (approveSave || autoSave ) {
var me=this;
var chosenFile=projectFile;
Clazz.new_($I$(2).c$$Runnable,[((P$.Desktop$17||
(function(){var C$=Clazz.newClass(P$, "Desktop$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.gui.Desktop'].setProgressBar$S$J.apply(this.b$['jalview.gui.Desktop'], [$I$(6).formatMessage$S$OA("label.saving_jalview_project", Clazz.array(java.lang.Object, -1, [this.$finals$.chosenFile.getName$()])), this.$finals$.chosenFile.hashCode$()]);
$I$(12).setProperty$S$S("LAST_DIRECTORY", this.$finals$.chosenFile.getParent$());
try {
var doBackup=$I$(55).getEnabled$();
var backupfiles=doBackup ? Clazz.new_($I$(55).c$$java_io_File,[this.$finals$.chosenFile]) : null;
Clazz.new_($I$(56)).saveState$java_io_File(doBackup ? backupfiles.getTempFile$() : this.$finals$.chosenFile);
if (doBackup) {
backupfiles.setWriteSuccess$Z(true);
backupfiles.rollBackupsAndRenameTempFile$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var oom = e$$;
{
Clazz.new_($I$(57).c$$S$OutOfMemoryError,["Whilst saving current state to " + this.$finals$.chosenFile.getName$(), oom]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
$I$(12).log.error$O$Throwable("Problems whilst trying to save to " + this.$finals$.chosenFile.getName$(), ex);
$I$(49).showMessageDialog$java_awt_Component$S$S$I(this.$finals$.me, $I$(6).formatMessage$S$OA("label.error_whilst_saving_current_state_to", Clazz.array(java.lang.Object, -1, [this.$finals$.chosenFile.getName$()])), $I$(6).getString$S("label.couldnt_save_project"), 2);
}
} else {
throw e$$;
}
}
this.b$['jalview.gui.Desktop'].setProgressBar$S$J.apply(this.b$['jalview.gui.Desktop'], [null, this.$finals$.chosenFile.hashCode$()]);
});
})()
), Clazz.new_(P$.Desktop$17.$init$, [this, {chosenFile: chosenFile, me: me}]))]).start$();
}});

Clazz.newMeth(C$, 'saveAsState_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.saveState_actionPerformed$Z(true);
});

Clazz.newMeth(C$, 'setProjectFile$java_io_File', function (choice) {
this.projectFile=choice;
}, p$1);

Clazz.newMeth(C$, 'getProjectFile$', function () {
return this.projectFile;
});

Clazz.newMeth(C$, 'loadState_actionPerformed$', function () {
var suffix=Clazz.array(String, -1, ["jvp", "jar"]);
var desc=Clazz.array(String, -1, ["Jalview Project", "Jalview Project (old)"]);
var chooser=Clazz.new_($I$(42).c$$S$SA$SA$S$Z$Z,[$I$(12).getProperty$S("LAST_DIRECTORY"), suffix, desc, "Jalview Project", true, true]);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(43)));
chooser.setDialogTitle$S($I$(6).getString$S("label.restore_state"));
chooser.setResponseHandler$O$Runnable(new Integer(0), ((P$.Desktop$18||
(function(){var C$=Clazz.newClass(P$, "Desktop$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var selectedFile=this.$finals$.chooser.getSelectedFile$();
p$1.setProjectFile$java_io_File.apply(this.b$['jalview.gui.Desktop'], [selectedFile]);
var choice=selectedFile.getAbsolutePath$();
$I$(12).setProperty$S$S("LAST_DIRECTORY", selectedFile.getParent$());
Clazz.new_($I$(2).c$$Runnable,[((P$.Desktop$18$1||
(function(){var C$=Clazz.newClass(P$, "Desktop$18$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
Clazz.new_($I$(56)).loadJalviewAlign$O(this.$finals$.choice);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var oom = e$$;
{
Clazz.new_($I$(57).c$$S$OutOfMemoryError,["Whilst loading project from " + this.$finals$.choice, oom]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
$I$(12).log.error$O$Throwable("Problems whilst loading project from " + this.$finals$.choice, ex);
$I$(49).showMessageDialog$java_awt_Component$S$S$I($I$(1).desktop, $I$(6).formatMessage$S$OA("label.error_whilst_loading_project_from", Clazz.array(java.lang.Object, -1, [this.$finals$.choice])), $I$(6).getString$S("label.couldnt_load_project"), 2);
}
} else {
throw e$$;
}
}
});
})()
), Clazz.new_(P$.Desktop$18$1.$init$, [this, {choice: choice}]))]).start$();
});
})()
), Clazz.new_(P$.Desktop$18.$init$, [this, {chooser: chooser}])));
chooser.showOpenDialog$java_awt_Component(this);
});

Clazz.newMeth(C$, 'inputSequence_actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_($I$(58).c$$jalview_gui_IProgressIndicator,[this]);
});

Clazz.newMeth(C$, 'startLoading$O', function (fileName) {
if (C$.fileLoadingCount == 0) {
this.fileLoadingPanels.add$TE(p$1.addProgressPanel$S.apply(this, [$I$(6).formatMessage$S$OA("label.loading_file", Clazz.array(java.lang.Object, -1, [fileName]))]));
}C$.fileLoadingCount++;
});

Clazz.newMeth(C$, 'addProgressPanel$S', function (string) {
if (this.progressPanel == null ) {
this.progressPanel=Clazz.new_($I$(46).c$$java_awt_LayoutManager,[Clazz.new_($I$(47).c$$I$I,[1, 1])]);
this.totalProgressCount=0;
C$.instance.getContentPane$().add$java_awt_Component$O(this.progressPanel, "South");
}var thisprogress=Clazz.new_($I$(46).c$$java_awt_LayoutManager,[Clazz.new_($I$(14).c$$I$I,[10, 5])]);
var progressBar=Clazz.new_($I$(59));
progressBar.setIndeterminate$Z(true);
thisprogress.add$java_awt_Component$O(Clazz.new_($I$(45).c$$S,[string]), "West");
thisprogress.add$java_awt_Component$O(progressBar, "Center");
this.progressPanel.add$java_awt_Component(thisprogress);
(this.progressPanel.getLayout$()).setRows$I((this.progressPanel.getLayout$()).getRows$() + 1);
++this.totalProgressCount;
C$.instance.validate$();
return thisprogress;
}, p$1);

Clazz.newMeth(C$, 'removeProgressPanel$javax_swing_JPanel', function (progbar) {
if (this.progressPanel != null ) {
{
this.progressPanel.remove$java_awt_Component(progbar);
var gl=this.progressPanel.getLayout$();
gl.setRows$I(gl.getRows$() - 1);
if (--this.totalProgressCount < 1) {
this.getContentPane$().remove$java_awt_Component(this.progressPanel);
this.progressPanel=null;
}}}this.validate$();
}, p$1);

Clazz.newMeth(C$, 'stopLoading$', function () {
C$.fileLoadingCount--;
if (C$.fileLoadingCount < 1) {
while (this.fileLoadingPanels.size$() > 0){
p$1.removeProgressPanel$javax_swing_JPanel.apply(this, [this.fileLoadingPanels.remove$I(0)]);
}
this.fileLoadingPanels.clear$();
C$.fileLoadingCount=0;
}this.validate$();
});

Clazz.newMeth(C$, 'getViewCount$S', function (alignmentId) {
var aps=C$.getViewports$S(alignmentId);
return (aps == null ) ? 0 : aps.length;
}, 1);

Clazz.newMeth(C$, 'getAlignmentPanels$S', function (alignmentId) {
if (C$.desktop == null ) {
return null;
}var aps=Clazz.new_($I$(8));
var frames=C$.getAlignFrames$();
if (frames == null ) {
return null;
}for (var af, $af = 0, $$af = frames; $af<$$af.length&&((af=($$af[$af])),1);$af++) {
for (var ap, $ap = af.alignPanels.iterator$(); $ap.hasNext$()&&((ap=($ap.next$())),1);) {
if (alignmentId == null  || alignmentId.equals$O(ap.av.getSequenceSetId$()) ) {
aps.add$TE(ap);
}}
}
if (aps.size$() == 0) {
return null;
}var vap=aps.toArray$TTA(Clazz.array($I$(60), [aps.size$()]));
return vap;
}, 1);

Clazz.newMeth(C$, 'getViewports$S', function (sequenceSetId) {
var viewp=Clazz.new_($I$(8));
if (C$.desktop != null ) {
var frames=C$.getAlignFrames$();
for (var afr, $afr = 0, $$afr = frames; $afr<$$afr.length&&((afr=($$afr[$afr])),1);$afr++) {
if (sequenceSetId == null  || afr.getViewport$().getSequenceSetId$().equals$O(sequenceSetId) ) {
if (afr.alignPanels != null ) {
for (var ap, $ap = afr.alignPanels.iterator$(); $ap.hasNext$()&&((ap=($ap.next$())),1);) {
if (sequenceSetId == null  || sequenceSetId.equals$O(ap.av.getSequenceSetId$()) ) {
viewp.add$TE(ap.av);
}}
} else {
viewp.add$TE(afr.getViewport$());
}}}
if (viewp.size$() > 0) {
return viewp.toArray$TTA(Clazz.array($I$(61), [viewp.size$()]));
}}return null;
}, 1);

Clazz.newMeth(C$, 'explodeViews$jalview_gui_AlignFrame', function (af) {
var size=af.alignPanels.size$();
if (size < 2) {
return;
}for (var i=0; i < size; i++) {
var ap=af.alignPanels.get$I(i);
var newaf=Clazz.new_($I$(62).c$$jalview_gui_AlignmentPanel,[ap]);
var geometry=ap.av.getExplodedGeometry$();
if (geometry != null ) {
newaf.setBounds$java_awt_Rectangle(geometry);
}ap.av.setGatherViewsHere$Z(false);
C$.addInternalFrame$javax_swing_JInternalFrame$S$I$I(newaf, af.getTitle$(), 700, 500);
}
af.alignPanels.clear$();
af.closeMenuItem_actionPerformed$Z(true);
}, 1);

Clazz.newMeth(C$, 'gatherViews$jalview_gui_AlignFrame', function (source) {
source.viewport.setGatherViewsHere$Z(true);
source.viewport.setExplodedGeometry$java_awt_Rectangle(source.getBounds$());
var frames=C$.desktop.getAllFrames$();
var viewId=source.viewport.getSequenceSetId$();
for (var t=0; t < frames.length; t++) {
if (Clazz.instanceOf(frames[t], "jalview.gui.AlignFrame") && frames[t] !== source  ) {
var af=frames[t];
var gatherThis=false;
for (var a=0; a < af.alignPanels.size$(); a++) {
var ap=af.alignPanels.get$I(a);
if (viewId.equals$O(ap.av.getSequenceSetId$())) {
gatherThis=true;
ap.av.setGatherViewsHere$Z(false);
ap.av.setExplodedGeometry$java_awt_Rectangle(af.getBounds$());
source.addAlignmentPanel$jalview_gui_AlignmentPanel$Z(ap, false);
}}
if (gatherThis) {
af.alignPanels.clear$();
af.closeMenuItem_actionPerformed$Z(true);
}}}
});

Clazz.newMeth(C$, 'vamsasImport_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.v_client == null ) {
var chooser=Clazz.new_($I$(42).c$$S,[$I$(12).getProperty$S("LAST_DIRECTORY")]);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(43)));
chooser.setDialogTitle$S($I$(6).getString$S("label.open_saved_vamsas_session"));
chooser.setToolTipText$S($I$(6).getString$S("label.select_vamsas_session_opened_as_new_vamsas_session"));
var value=chooser.showOpenDialog$java_awt_Component(this);
if (value == 0) {
var fle=chooser.getSelectedFile$().toString();
if (!this.vamsasImport$java_io_File(chooser.getSelectedFile$())) {
$I$(49).showInternalMessageDialog$java_awt_Component$S$S$I(C$.desktop, $I$(6).formatMessage$S$OA("label.couldnt_import_as_vamsas_session", Clazz.array(java.lang.Object, -1, [fle])), $I$(6).getString$S("label.vamsas_document_import_failed"), 0);
}}} else {
$I$(12).log.error$O("Implementation error - load session from a running session is not supported.");
}});

Clazz.newMeth(C$, 'vamsasImport$java_net_URL', function (url) {
if (this.v_client != null ) {
$I$(12).log.error$O("Implementation error - load session from a running session is not supported.");
return false;
}try {
var file=$I$(63).createTempFile$S$S("vdocfromurl", ".vdj");
var fos=Clazz.new_($I$(64).c$$java_io_File,[file]);
var bis=Clazz.new_($I$(65).c$$java_io_InputStream,[url.openStream$()]);
var buffer=Clazz.array(Byte.TYPE, [2048]);
var ln;
while ((ln=bis.read$BA(buffer)) > -1){
fos.write$BA$I$I(buffer, 0, ln);
}
bis.close$();
fos.close$();
this.v_client=Clazz.new_($I$(66).c$$jalview_gui_Desktop$java_io_File$S,[this, file, url.toExternalForm$()]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(12).log.error$O$Throwable("Failed to create new vamsas session from contents of URL " + url, ex);
return false;
} else {
throw ex;
}
}
this.setupVamsasConnectedGui$();
this.v_client.initial_update$();
return this.v_client.inSession$();
});

Clazz.newMeth(C$, 'vamsasImport$java_io_File', function (file) {
if (this.v_client != null ) {
$I$(12).log.error$O("Implementation error - load session from a running session is not supported.");
return false;
}this.setProgressBar$S$J($I$(6).formatMessage$S$OA("status.importing_vamsas_session_from", Clazz.array(java.lang.Object, -1, [file.getName$()])), file.hashCode$());
try {
this.v_client=Clazz.new_($I$(66).c$$jalview_gui_Desktop$java_io_File$S,[this, file, null]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.setProgressBar$S$J($I$(6).formatMessage$S$OA("status.importing_vamsas_session_from", Clazz.array(java.lang.Object, -1, [file.getName$()])), file.hashCode$());
$I$(12).log.error$O$Throwable("New vamsas session from existing session file failed:", ex);
return false;
} else {
throw ex;
}
}
this.setupVamsasConnectedGui$();
this.v_client.initial_update$();
this.setProgressBar$S$J($I$(6).formatMessage$S$OA("status.importing_vamsas_session_from", Clazz.array(java.lang.Object, -1, [file.getName$()])), file.hashCode$());
return this.v_client.inSession$();
});

Clazz.newMeth(C$, 'joinVamsasSession$S', function (mysesid) {
if (this.v_client != null ) {
throw Clazz.new_($I$(67).c$$S,[$I$(6).getString$S("error.try_join_vamsas_session_another")]);
}if (mysesid == null ) {
throw Clazz.new_($I$(67).c$$S,[$I$(6).getString$S("error.invalid_vamsas_session_id")]);
}this.v_client=Clazz.new_($I$(66).c$$jalview_gui_Desktop$S,[this, mysesid]);
this.setupVamsasConnectedGui$();
this.v_client.initial_update$();
return (this.v_client.inSession$());
});

Clazz.newMeth(C$, 'vamsasStart_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.v_client == null ) {
this.v_client=Clazz.new_($I$(66).c$$jalview_gui_Desktop,[this]);
this.setupVamsasConnectedGui$();
this.v_client.initial_update$();
} else {
this.v_client.push_update$();
}});

Clazz.newMeth(C$, 'setupVamsasConnectedGui$', function () {
this.vamsasStart.setText$S($I$(6).getString$S("label.session_update"));
this.vamsasSave.setVisible$Z(true);
this.vamsasStop.setVisible$Z(true);
this.vamsasImport.setVisible$Z(false);
});

Clazz.newMeth(C$, 'setupVamsasDisconnectedGui$', function () {
this.vamsasSave.setVisible$Z(false);
this.vamsasStop.setVisible$Z(false);
this.vamsasImport.setVisible$Z(true);
this.vamsasStart.setText$S($I$(6).getString$S("label.new_vamsas_session"));
});

Clazz.newMeth(C$, 'vamsasStop_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.v_client != null ) {
this.v_client.end_session$();
this.v_client=null;
this.setupVamsasDisconnectedGui$();
}});

Clazz.newMeth(C$, 'buildVamsasStMenu$', function () {
if (this.v_client == null ) {
var sess=null;
try {
sess=$I$(66).getSessionList$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(12).log.warn$O$Throwable("Problem getting current sessions list.", e);
sess=null;
} else {
throw e;
}
}
if (sess != null ) {
$I$(12).log.debug$O("Got current sessions list: " + sess.length + " entries." );
this.VamsasStMenu.removeAll$();
for (var i=0; i < sess.length; i++) {
var sessit=Clazz.new_($I$(29));
sessit.setText$S(sess[i]);
sessit.setToolTipText$S($I$(6).formatMessage$S$OA("label.connect_to_session", Clazz.array(java.lang.Object, -1, [sess[i]])));
var dsktp=this;
var mysesid=sess[i];
sessit.addActionListener$java_awt_event_ActionListener(((P$.Desktop$19||
(function(){var C$=Clazz.newClass(P$, "Desktop$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (this.$finals$.dsktp.v_client == null ) {
var rthr=Clazz.new_($I$(2).c$$Runnable,[((P$.Desktop$19$1||
(function(){var C$=Clazz.newClass(P$, "Desktop$19$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.dsktp.v_client=Clazz.new_($I$(66).c$$jalview_gui_Desktop$S,[this.$finals$.dsktp, this.$finals$.mysesid]);
this.$finals$.dsktp.setupVamsasConnectedGui$();
this.$finals$.dsktp.v_client.initial_update$();
});
})()
), Clazz.new_(P$.Desktop$19$1.$init$, [this, {dsktp: this.$finals$.dsktp, mysesid: this.$finals$.mysesid}]))]);
rthr.start$();
}});
})()
), Clazz.new_(P$.Desktop$19.$init$, [this, {dsktp: dsktp, mysesid: mysesid}])));
this.VamsasStMenu.add$javax_swing_JMenuItem(sessit);
}
this.VamsasStMenu.setVisible$Z(sess.length > 0);
} else {
$I$(12).log.debug$O("No current vamsas sessions.");
this.VamsasStMenu.removeAll$();
this.VamsasStMenu.setVisible$Z(false);
}} else {
this.VamsasStMenu.setVisible$Z(false);
}});

Clazz.newMeth(C$, 'vamsasSave_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.v_client != null ) {
var chooser=Clazz.new_($I$(42).c$$S$S,["vdj", "Vamsas Document"]);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(43)));
chooser.setDialogTitle$S($I$(6).getString$S("label.save_vamsas_document_archive"));
var value=chooser.showSaveDialog$java_awt_Component(this);
if (value == 0) {
var choice=chooser.getSelectedFile$();
var progpanel=p$1.addProgressPanel$S.apply(this, [$I$(6).formatMessage$S$OA("label.saving_vamsas_doc", Clazz.array(java.lang.Object, -1, [choice.getName$()]))]);
$I$(12).setProperty$S$S("LAST_DIRECTORY", choice.getParent$());
var warnmsg=null;
var warnttl=null;
try {
this.v_client.vclient.storeDocument$java_io_File(choice);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Error")){
var ex = e$$;
{
warnttl="Serious Problem saving Vamsas Document";
warnmsg=ex.toString();
$I$(12).log.error$O$Throwable("Error Whilst saving document to " + choice, ex);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
warnttl="Problem saving Vamsas Document.";
warnmsg=ex.toString();
$I$(12).log.warn$O$Throwable("Exception Whilst saving document to " + choice, ex);
}
} else {
throw e$$;
}
}
p$1.removeProgressPanel$javax_swing_JPanel.apply(this, [progpanel]);
if (warnmsg != null ) {
$I$(49).showInternalMessageDialog$java_awt_Component$S$S$I(C$.desktop, warnmsg, warnttl, 0);
}}}});

Clazz.newMeth(C$, 'setVamsasUpdate$Z', function (b) {
$I$(12).log.debug$O("Setting gui for Vamsas update " + (b ? "in progress" : "finished"));
if (this.vamUpdate != null ) {
p$1.removeProgressPanel$javax_swing_JPanel.apply(this, [this.vamUpdate]);
}if (b) {
this.vamUpdate=p$1.addProgressPanel$S.apply(this, [$I$(6).getString$S("label.updating_vamsas_session")]);
}this.vamsasStart.setVisible$Z(!b);
this.vamsasStop.setVisible$Z(!b);
this.vamsasSave.setVisible$Z(!b);
});

Clazz.newMeth(C$, 'getAllFrames$', function () {
return C$.desktop.getAllFrames$();
});

Clazz.newMeth(C$, 'checkForQuestionnaire$S', function (url) {
var jvq=Clazz.new_($I$(68).c$$S,[url]);
Clazz.new_($I$(2).c$$Runnable,[jvq]).start$();
});

Clazz.newMeth(C$, 'checkURLLinks$', function () {
this.addDialogThread$Runnable(((P$.Desktop$20||
(function(){var C$=Clazz.newClass(P$, "Desktop$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if ($I$(12).getDefault$S$Z("CHECKURLLINKS", true)) {
var links=$I$(54).sequenceUrlLinks.getLinksForMenu$();
var li=links.listIterator$();
var check=false;
var urls=Clazz.new_($I$(8));
while (li.hasNext$()){
var link=li.next$();
if (link.contains$CharSequence("SEQUENCE_ID") && !$I$(69).isDefaultString$S(link) ) {
check=true;
var barPos=link.indexOf$S("|");
var urlMsg=barPos == -1 ? link : link.substring$I$I(0, barPos) + ": " + link.substring$I(barPos + 1) ;
urls.add$TE(Clazz.new_($I$(45).c$$S,[urlMsg]));
}}
if (!check) {
return;
}var msgPanel=Clazz.new_($I$(46));
msgPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(70).c$$java_awt_Container$I,[msgPanel, 3]));
msgPanel.add$java_awt_Component($I$(71).createVerticalGlue$());
var msg=Clazz.new_($I$(45).c$$S,[$I$(6).getString$S("label.SEQUENCE_ID_for_DB_ACCESSION1")]);
var msg2=Clazz.new_($I$(45).c$$S,[$I$(6).getString$S("label.SEQUENCE_ID_for_DB_ACCESSION2")]);
msgPanel.add$java_awt_Component(msg);
for (var url, $url = urls.iterator$(); $url.hasNext$()&&((url=($url.next$())),1);) {
msgPanel.add$java_awt_Component(url);
}
msgPanel.add$java_awt_Component(msg2);
var jcb=Clazz.new_($I$(72).c$$S,[$I$(6).getString$S("label.do_not_display_again")]);
jcb.addActionListener$java_awt_event_ActionListener(((P$.Desktop$20$1||
(function(){var C$=Clazz.newClass(P$, "Desktop$20$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var showWarningAgain=!this.$finals$.jcb.isSelected$();
$I$(12).setProperty$S$S("CHECKURLLINKS", $I$(22).valueOf$Z(showWarningAgain).toString());
});
})()
), Clazz.new_(P$.Desktop$20$1.$init$, [this, {jcb: jcb}])));
msgPanel.add$java_awt_Component(jcb);
$I$(73).showMessageDialog$java_awt_Component$O$S$I($I$(1).desktop, msgPanel, $I$(6).getString$S("label.SEQUENCE_ID_no_longer_used"), 2);
}});
})()
), Clazz.new_(P$.Desktop$20.$init$, [this, null])));
});

Clazz.newMeth(C$, 'getAlignFrames$', function () {
if ($I$(35).isHeadlessMode$()) {
return Clazz.array($I$(62), -1, [$I$(35).currentAlignFrame]);
}var frames=C$.desktop.getAllFrames$();
if (frames == null ) {
return null;
}var avp=Clazz.new_($I$(8));
for (var i=frames.length - 1; i > -1; i--) {
if (Clazz.instanceOf(frames[i], "jalview.gui.AlignFrame")) {
avp.add$TE(frames[i]);
} else if (Clazz.instanceOf(frames[i], "jalview.gui.SplitFrame")) {
var sf=frames[i];
if (Clazz.instanceOf(sf.getTopFrame$(), "jalview.gui.AlignFrame")) {
avp.add$TE(sf.getTopFrame$());
}if (Clazz.instanceOf(sf.getBottomFrame$(), "jalview.gui.AlignFrame")) {
avp.add$TE(sf.getBottomFrame$());
}}}
if (avp.size$() == 0) {
return null;
}var afs=avp.toArray$TTA(Clazz.array($I$(62), [avp.size$()]));
return afs;
}, 1);

Clazz.newMeth(C$, 'getJmols$', function () {
var frames=C$.desktop.getAllFrames$();
if (frames == null ) {
return null;
}var avp=Clazz.new_($I$(8));
for (var i=frames.length - 1; i > -1; i--) {
if (Clazz.instanceOf(frames[i], "jalview.gui.AppJmol")) {
var af=frames[i];
avp.add$TE(af);
}}
if (avp.size$() == 0) {
return null;
}var afs=avp.toArray$TTA(Clazz.array($I$(74), [avp.size$()]));
return afs;
});

Clazz.newMeth(C$, 'groovyShell_actionPerformed$', function () {
try {
this.openGroovyConsole$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(12).log.error$O$Throwable("Groovy Shell Creation failed.", ex);
$I$(49).showInternalMessageDialog$java_awt_Component$S$S$I(C$.desktop, $I$(6).getString$S("label.couldnt_create_groovy_shell"), $I$(6).getString$S("label.groovy_support_failed"), 0);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'openGroovyConsole$', function () {
if (C$.groovyConsole == null ) {
C$.groovyConsole=Clazz.new_($I$(75));
C$.groovyConsole.setVariable$S$O("Jalview", this);
C$.groovyConsole.run$();
var window=C$.groovyConsole.getFrame$();
window.addWindowListener$java_awt_event_WindowListener(((P$.Desktop$21||
(function(){var C$=Clazz.newClass(P$, "Desktop$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (e) {
this.b$['jalview.gui.Desktop'].addQuitHandler$.apply(this.b$['jalview.gui.Desktop'], []);
this.b$['jalview.gui.Desktop'].enableExecuteGroovy$Z.apply(this.b$['jalview.gui.Desktop'], [false]);
});
})()
), Clazz.new_($I$(20), [this, null],P$.Desktop$21)));
}(C$.groovyConsole.getFrame$()).setVisible$Z(true);
this.enableExecuteGroovy$Z(true);
});

Clazz.newMeth(C$, 'addQuitHandler$', function () {
this.getRootPane$().getInputMap$I(2).put$javax_swing_KeyStroke$O($I$(40).getKeyStroke$I$I(81, $I$(18).getDefaultToolkit$().getMenuShortcutKeyMask$()), "Quit");
this.getRootPane$().getActionMap$().put$O$javax_swing_Action("Quit", ((P$.Desktop$22||
(function(){var C$=Clazz.newClass(P$, "Desktop$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.Desktop'].quit$.apply(this.b$['jalview.gui.Desktop'], []);
});
})()
), Clazz.new_($I$(39), [this, null],P$.Desktop$22)));
});

Clazz.newMeth(C$, 'enableExecuteGroovy$Z', function (enabled) {
this.groovyShell.setEnabled$Z(!enabled);
var alignFrames=C$.getAlignFrames$();
if (alignFrames != null ) {
for (var af, $af = 0, $$af = alignFrames; $af<$$af.length&&((af=($$af[$af])),1);$af++) {
af.setGroovyEnabled$Z(enabled);
}
}});

Clazz.newMeth(C$, 'setProgressBar$S$J', function (message, id) {
$I$(11).timeCheck$S$I("Desktop " + message, 1);
if (this.progressBars == null ) {
this.progressBars=Clazz.new_($I$(76));
this.progressBarHandlers=Clazz.new_($I$(76));
}if (this.progressBars.get$O( new Long(id)) != null ) {
var panel=this.progressBars.remove$O( new Long(id));
if (this.progressBarHandlers.contains$O( new Long(id))) {
this.progressBarHandlers.remove$O( new Long(id));
}p$1.removeProgressPanel$javax_swing_JPanel.apply(this, [panel]);
} else {
this.progressBars.put$TK$TV( new Long(id), p$1.addProgressPanel$S.apply(this, [message]));
}});

Clazz.newMeth(C$, 'registerHandler$J$jalview_gui_IProgressIndicatorHandler', function (id, handler) {
if (this.progressBarHandlers == null  || !this.progressBars.containsKey$O( new Long(id)) ) {
throw Clazz.new_($I$(67).c$$S,[$I$(6).getString$S("error.call_setprogressbar_before_registering_handler")]);
}this.progressBarHandlers.put$TK$TV( new Long(id), handler);
var progressPanel=this.progressBars.get$O( new Long(id));
if (handler.canCancel$()) {
var cancel=Clazz.new_($I$(77).c$$S,[$I$(6).getString$S("action.cancel")]);
var us=this;
cancel.addActionListener$java_awt_event_ActionListener(((P$.Desktop$23||
(function(){var C$=Clazz.newClass(P$, "Desktop$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.$finals$.handler.cancelActivity$J(this.$finals$.id);
this.$finals$.us.setProgressBar$S$J($I$(6).formatMessage$S$OA("label.cancelled_params", Clazz.array(java.lang.Object, -1, [(this.$finals$.progressPanel.getComponent$I(0)).getText$()])), this.$finals$.id);
});
})()
), Clazz.new_(P$.Desktop$23.$init$, [this, {handler: handler, id: id, us: us, progressPanel: progressPanel}])));
progressPanel.add$java_awt_Component$O(cancel, "East");
}});

Clazz.newMeth(C$, 'operationInProgress$', function () {
if (this.progressBars != null  && this.progressBars.size$() > 0 ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getAlignFrameFor$jalview_api_AlignViewportI', function (viewport) {
if (C$.desktop != null ) {
var aps=C$.getAlignmentPanels$S(viewport.getSequenceSetId$());
for (var panel=0; aps != null  && panel < aps.length ; panel++) {
if (aps[panel] != null  && aps[panel].av === viewport  ) {
return aps[panel].alignFrame;
}}
}return null;
}, 1);

Clazz.newMeth(C$, 'getVamsasApplication$', function () {
return this.v_client;
});

Clazz.newMeth(C$, 'isInBatchMode$', function () {
return this.inBatchMode;
});

Clazz.newMeth(C$, 'setInBatchMode$Z', function (inBatchMode) {
this.inBatchMode=inBatchMode;
});

Clazz.newMeth(C$, 'startServiceDiscovery$', function () {
this.startServiceDiscovery$Z(false);
});

Clazz.newMeth(C$, 'startServiceDiscovery$Z', function (blocking) {
var alive=true;
var t0=null;
var t1=null;
var t2=null;
if (true) {
if (C$.discoverer == null ) {
C$.discoverer=Clazz.new_($I$(78));
C$.discoverer.addPropertyChangeListener$java_beans_PropertyChangeListener(this.$changeSupport);
}(t0=Clazz.new_($I$(2).c$$Runnable,[C$.discoverer])).start$();
}if ($I$(12).getDefault$S$Z("SHOW_JWS2_SERVICES", true)) {
t2=$I$(79).getDiscoverer$().startDiscoverer$java_beans_PropertyChangeListener(this.$changeSupport);
}var t3=null;
{
}if (blocking) {
while (alive){
try {
$I$(2).sleep$J(15);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
alive=(t1 != null  && t1.isAlive$() ) || (t2 != null  && t2.isAlive$() ) || (t3 != null  && t3.isAlive$() ) || (t0 != null  && t0.isAlive$() )  ;
}
}});

Clazz.newMeth(C$, 'JalviewServicesChanged$java_beans_PropertyChangeEvent', function (evt) {
if (evt.getNewValue$() == null  || Clazz.instanceOf(evt.getNewValue$(), "java.util.Vector") ) {
var ermsg=$I$(79).getDiscoverer$().getErrorMessages$();
if (ermsg != null ) {
if ($I$(12).getDefault$S$Z("SHOW_WSDISCOVERY_ERRORS", true)) {
if (this.serviceChangedDialog == null ) {
this.addDialogThread$Runnable(this.serviceChangedDialog=((P$.Desktop$24||
(function(){var C$=Clazz.newClass(P$, "Desktop$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(49).showConfirmDialog$java_awt_Component$O$S$I$I($I$(1).desktop, Clazz.new_($I$(45).c$$S,["<html><table width=\"450\"><tr><td>" + this.$finals$.ermsg + "</td></tr></table>" + "<p>It may be that you have invalid JABA URLs<br/>in your web service preferences," + "<br>or as a command-line argument, or mis-configured HTTP proxy settings.</p>" + "<p>Check the <em>Connections</em> and <em>Web services</em> tab<br/>of the" + " Tools->Preferences dialog box to change them.</p></html>" ]), "Web Service Configuration Problem", -1, 0);
this.b$['jalview.gui.Desktop'].serviceChangedDialog=null;
});
})()
), Clazz.new_(P$.Desktop$24.$init$, [this, {ermsg: ermsg}])));
}} else {
$I$(12).log.error$O("Errors reported by JABA discovery service. Check web services preferences.\n" + ermsg);
}}}});

Clazz.newMeth(C$, 'showUrl$S', function (url) {
C$.showUrl$S$jalview_gui_IProgressIndicator(url, C$.instance);
}, 1);

Clazz.newMeth(C$, 'showUrl$S$jalview_gui_IProgressIndicator', function (url, progress) {
Clazz.new_($I$(2).c$$Runnable,[((P$.Desktop$25||
(function(){var C$=Clazz.newClass(P$, "Desktop$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
if (this.$finals$.progress != null ) {
this.$finals$.progress.setProgressBar$S$J($I$(6).formatMessage$S$OA("status.opening_params", Clazz.array(java.lang.Object, -1, [this.$finals$.url])), this.hashCode$());
}$I$(53).openURL$S(this.$finals$.url);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(49).showInternalMessageDialog$java_awt_Component$S$S$I($I$(1).desktop, $I$(6).getString$S("label.web_browser_not_found_unix"), $I$(6).getString$S("label.web_browser_not_found"), 2);
ex.printStackTrace$();
} else {
throw ex;
}
}
if (this.$finals$.progress != null ) {
this.$finals$.progress.setProgressBar$S$J(null, this.hashCode$());
}});
})()
), Clazz.new_(P$.Desktop$25.$init$, [this, {progress: progress, url: url}]))]).start$();
}, 1);

Clazz.newMeth(C$, 'getUserParameterStore$', function () {
if (C$.wsparamManager == null ) {
C$.wsparamManager=Clazz.new_($I$(80));
}return C$.wsparamManager;
}, 1);

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent', function (e) {
if (e.getEventType$() === $I$(81).ACTIVATED ) {
var url=null;
try {
url=e.getURL$().toString();
C$.showUrl$S(url);
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
if (url != null ) {
if ($I$(12).log != null ) {
$I$(12).log.error$O("Couldn't handle string " + url + " as a URL." );
} else {
System.err.println$S("Couldn't handle string " + url + " as a URL." );
}}} else {
throw x;
}
}
}}, 1);

Clazz.newMeth(C$, 'addDialogThread$Runnable', function (prompter) {
this.dialogExecutor.submit$Runnable(((P$.Desktop$26||
(function(){var C$=Clazz.newClass(P$, "Desktop$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if (this.b$['jalview.gui.Desktop'].dialogPause) {
try {
this.b$['jalview.gui.Desktop'].block.acquire$();
} catch (x) {
if (Clazz.exceptionOf(x,"InterruptedException")){
} else {
throw x;
}
}
;}if ($I$(1).instance == null ) {
return;
}try {
$I$(82).invokeAndWait$Runnable(this.$finals$.prompter);
} catch (q) {
if (Clazz.exceptionOf(q,"Exception")){
$I$(12).log.warn$O$Throwable("Unexpected Exception in dialog thread.", q);
} else {
throw q;
}
}
});
})()
), Clazz.new_(P$.Desktop$26.$init$, [this, {prompter: prompter}])));
});

Clazz.newMeth(C$, 'startDialogQueue$', function () {
this.dialogPause=false;
this.block.release$();
});

Clazz.newMeth(C$, 'snapShotWindow_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.invalidate$();
var width=this.getWidth$();
var height=this.getHeight$();
var of=Clazz.new_($I$(63).c$$S,["Jalview_snapshot_" + System.currentTimeMillis$() + ".eps" ]);
var writer=((P$.Desktop$27||
(function(){var C$=Clazz.newClass(P$, "Desktop$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.ImageExporter','jalview.gui.ImageExporter.ImageWriterI']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['exportImage$java_awt_Graphics','exportImage$'], function (g) {
this.b$['java.awt.Component'].paintAll$java_awt_Graphics.apply(this.b$['java.awt.Component'], [g]);
$I$(12).log.info$O("Successfully written snapshot to file " + this.$finals$.of.getAbsolutePath$());
});
})()
), Clazz.new_(P$.Desktop$27.$init$, [this, {of: of}]));
var title="View of desktop";
var exporter=Clazz.new_($I$(83).c$$jalview_gui_ImageExporter_ImageWriterI$jalview_gui_IProgressIndicator$jalview_util_ImageMaker_TYPE$S,[writer, null, $I$(84).EPS, title]);
exporter.doExport$java_io_File$java_awt_Component$I$I$S(of, this, width, height, title);
});

Clazz.newMeth(C$, 'explodeViews$jalview_gui_SplitFrame', function (sf) {
var oldTopFrame=sf.getTopFrame$();
var oldBottomFrame=sf.getBottomFrame$();
var topPanels=oldTopFrame.getAlignPanels$();
var bottomPanels=oldBottomFrame.getAlignPanels$();
var viewCount=topPanels.size$();
if (viewCount < 2) {
return;
}for (var i=viewCount - 1; i >= 0; i--) {
var topPanel=topPanels.get$I(i);
var newTopFrame=Clazz.new_($I$(62).c$$jalview_gui_AlignmentPanel,[topPanel]);
newTopFrame.setSize$java_awt_Dimension(oldTopFrame.getSize$());
newTopFrame.setVisible$Z(true);
var geometry=(topPanel.getAlignViewport$()).getExplodedGeometry$();
if (geometry != null ) {
newTopFrame.setSize$java_awt_Dimension(geometry.getSize$());
}var bottomPanel=bottomPanels.get$I(i);
var newBottomFrame=Clazz.new_($I$(62).c$$jalview_gui_AlignmentPanel,[bottomPanel]);
newBottomFrame.setSize$java_awt_Dimension(oldBottomFrame.getSize$());
newBottomFrame.setVisible$Z(true);
geometry=(bottomPanel.getAlignViewport$()).getExplodedGeometry$();
if (geometry != null ) {
newBottomFrame.setSize$java_awt_Dimension(geometry.getSize$());
}topPanel.av.setGatherViewsHere$Z(false);
bottomPanel.av.setGatherViewsHere$Z(false);
var splitFrame=Clazz.new_($I$(85).c$$jalview_jbgui_GAlignFrame$jalview_jbgui_GAlignFrame,[newTopFrame, newBottomFrame]);
if (geometry != null ) {
splitFrame.setLocation$java_awt_Point(geometry.getLocation$());
}C$.addInternalFrame$javax_swing_JInternalFrame$S$I$I(splitFrame, sf.getTitle$(), -1, -1);
}
topPanels.clear$();
bottomPanels.clear$();
sf.close$();
});

Clazz.newMeth(C$, 'gatherViews$jalview_jbgui_GSplitFrame', function (source) {
var myTopFrame=source.getTopFrame$();
var myBottomFrame=source.getBottomFrame$();
myTopFrame.viewport.setExplodedGeometry$java_awt_Rectangle(Clazz.new_($I$(27).c$$I$I$I$I,[source.getX$(), source.getY$(), myTopFrame.getWidth$(), myTopFrame.getHeight$()]));
myBottomFrame.viewport.setExplodedGeometry$java_awt_Rectangle(Clazz.new_($I$(27).c$$I$I$I$I,[source.getX$(), source.getY$(), myBottomFrame.getWidth$(), myBottomFrame.getHeight$()]));
myTopFrame.viewport.setGatherViewsHere$Z(true);
myBottomFrame.viewport.setGatherViewsHere$Z(true);
var topViewId=myTopFrame.viewport.getSequenceSetId$();
var bottomViewId=myBottomFrame.viewport.getSequenceSetId$();
var frames=C$.desktop.getAllFrames$();
for (var frame, $frame = 0, $$frame = frames; $frame<$$frame.length&&((frame=($$frame[$frame])),1);$frame++) {
if (Clazz.instanceOf(frame, "jalview.gui.SplitFrame") && frame !== source  ) {
var sf=frame;
var topFrame=sf.getTopFrame$();
var bottomFrame=sf.getBottomFrame$();
var gatherThis=false;
for (var a=0; a < topFrame.alignPanels.size$(); a++) {
var topPanel=topFrame.alignPanels.get$I(a);
var bottomPanel=bottomFrame.alignPanels.get$I(a);
if (topViewId.equals$O(topPanel.av.getSequenceSetId$()) && bottomViewId.equals$O(bottomPanel.av.getSequenceSetId$()) ) {
gatherThis=true;
topPanel.av.setGatherViewsHere$Z(false);
bottomPanel.av.setGatherViewsHere$Z(false);
topPanel.av.setExplodedGeometry$java_awt_Rectangle(Clazz.new_($I$(27).c$$java_awt_Point$java_awt_Dimension,[sf.getLocation$(), topFrame.getSize$()]));
bottomPanel.av.setExplodedGeometry$java_awt_Rectangle(Clazz.new_($I$(27).c$$java_awt_Point$java_awt_Dimension,[sf.getLocation$(), bottomFrame.getSize$()]));
myTopFrame.addAlignmentPanel$jalview_gui_AlignmentPanel$Z(topPanel, false);
myBottomFrame.addAlignmentPanel$jalview_gui_AlignmentPanel$Z(bottomPanel, false);
}}
if (gatherThis) {
topFrame.getAlignPanels$().clear$();
bottomFrame.getAlignPanels$().clear$();
sf.close$();
}}}
myTopFrame.setDisplayedView$jalview_gui_AlignmentPanel(myTopFrame.alignPanel);
});

Clazz.newMeth(C$, 'getGroovyConsole$', function () {
return C$.groovyConsole;
}, 1);

Clazz.newMeth(C$, 'transferFromDropTarget$java_util_List$java_util_List$java_awt_dnd_DropTargetDropEvent$java_awt_datatransfer_Transferable', function (files, protocols, evt, t) {
var uriListFlavor=Clazz.new_($I$(30).c$$S,["text/uri-list;class=java.lang.String"]);
var urlFlavour=null;
try {
urlFlavour=Clazz.new_($I$(30).c$$S,["application/x-java-url; class=java.net.URL"]);
} catch (cfe) {
if (Clazz.exceptionOf(cfe,"ClassNotFoundException")){
$I$(12).log.debug$O$Throwable("Couldn\'t instantiate the URL dataflavor.", cfe);
} else {
throw cfe;
}
}
if (urlFlavour != null  && t.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(urlFlavour) ) {
try {
var url=t.getTransferData$java_awt_datatransfer_DataFlavor(urlFlavour);
if (url != null ) {
protocols.add$TE($I$(32).URL);
files.add$TE(url.toString());
$I$(12).log.debug$O("Drop handled as URL dataflavor " + files.get$I(files.size$() - 1));
return;
} else {
if ($I$(11).isAMacAndNotJS$()) {
System.err.println$S("Please ignore plist error - occurs due to problem with java 8 on OSX");
};}} catch (ex) {
$I$(12).log.debug$O$Throwable("URL drop handler failed.", ex);
}
}if (t.isDataFlavorSupported$java_awt_datatransfer_DataFlavor($I$(30).javaFileListFlavor)) {
$I$(12).log.debug$O("Drop handled as javaFileListFlavor");
for (var file, $file = t.getTransferData$java_awt_datatransfer_DataFlavor($I$(30).javaFileListFlavor).iterator$(); $file.hasNext$()&&((file=($file.next$())),1);) {
files.add$TE(file);
protocols.add$TE($I$(32).FILE);
}
} else {
var added=false;
var data=null;
if (t.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(uriListFlavor)) {
$I$(12).log.debug$O("Drop handled as uriListFlavor");
data=t.getTransferData$java_awt_datatransfer_DataFlavor(uriListFlavor);
}if (data == null ) {
$I$(12).log.debug$O("standard URIListFlavor failed. Trying text");
var textDf=Clazz.new_($I$(30).c$$S,["text/plain;class=java.lang.String"]);
if (t.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(textDf)) {
data=t.getTransferData$java_awt_datatransfer_DataFlavor(textDf);
}$I$(12).log.debug$O("Plain text drop content returned " + (data == null  ? "Null - failed" : data));
}if (data != null ) {
while (protocols.size$() < files.size$()){
$I$(12).log.debug$O("Adding missing FILE protocol for " + files.get$I(protocols.size$()));
protocols.add$TE($I$(32).FILE);
}
for (var st=Clazz.new_($I$(86).c$$S$S,[data, "\r\n"]); st.hasMoreTokens$(); ) {
added=true;
var s=st.nextToken$();
if (s.startsWith$S("#")) {
continue;
}var uri=Clazz.new_($I$(87).c$$S,[s]);
if (uri.getScheme$().toLowerCase$().startsWith$S("http")) {
protocols.add$TE($I$(32).URL);
files.add$TE(uri.toString());
} else {
var file=Clazz.new_($I$(63).c$$java_net_URI,[uri]);
protocols.add$TE($I$(32).FILE);
files.add$TE(file.toString());
}}
}if ($I$(12).log.isDebugEnabled$()) {
if (data == null  || !added ) {
if (t.getTransferDataFlavors$() != null  && t.getTransferDataFlavors$().length > 0 ) {
$I$(12).log.debug$O("Couldn\'t resolve drop data. Here are the supported flavors:");
for (var fl, $fl = 0, $$fl = t.getTransferDataFlavors$(); $fl<$$fl.length&&((fl=($$fl[$fl])),1);$fl++) {
$I$(12).log.debug$O("Supported transfer dataflavor: " + fl.toString());
var df=t.getTransferData$java_awt_datatransfer_DataFlavor(fl);
if (df != null ) {
$I$(12).log.debug$O("Retrieves: " + df);
} else {
$I$(12).log.debug$O("Retrieved nothing");
}}
} else {
$I$(12).log.debug$O("Couldn't resolve dataflavor for drop: " + t.toString());
}}}}if ($I$(11).isWindowsAndNotJS$()) {
$I$(12).log.debug$O("Scanning dropped content for Windows Link Files");
for (var f=0; f < files.size$(); f++) {
var source=files.get$I(f).toString().toLowerCase$();
if (protocols.get$I(f).equals$O($I$(32).FILE) && (source.endsWith$S(".lnk") || source.endsWith$S(".url") || source.endsWith$S(".site")  ) ) {
try {
var obj=files.get$I(f);
var lf=(Clazz.instanceOf(obj, "java.io.File") ? obj : Clazz.new_($I$(63).c$$S,[obj]));
$I$(12).log.debug$O("Found potential link file: " + lf);
var wscfile=Clazz.new_($I$(88).c$$java_io_File,[lf]);
var fullname=wscfile.getRealFilename$();
protocols.set$I$TE(f, $I$(89).checkProtocol$O(fullname));
files.set$I$TE(f, fullname);
$I$(12).log.debug$O("Parsed real filename " + fullname + " to extract protocol: " + protocols.get$I(f) );
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(12).log.error$O$Throwable("Couldn't parse " + files.get$I(f) + " as a link file." , ex);
} else {
throw ex;
}
}
}}
}}, 1);

Clazz.newMeth(C$, 'showExperimental_actionPerformed$Z', function (selected) {
$I$(12).setProperty$S$S("EXPERIMENTAL_FEATURES", $I$(22).toString$Z(selected));
});

Clazz.newMeth(C$, 'getStructureViewers$jalview_gui_AlignmentPanel$Class', function (apanel, structureViewerClass) {
var result=Clazz.new_($I$(8));
var frames=C$.instance.getAllFrames$();
for (var frame, $frame = 0, $$frame = frames; $frame<$$frame.length&&((frame=($$frame[$frame])),1);$frame++) {
if (Clazz.instanceOf(frame, "jalview.gui.StructureViewerBase")) {
if (structureViewerClass == null  || structureViewerClass.isInstance$O(frame) ) {
if (apanel == null  || (frame).isLinkedWith$jalview_gui_AlignmentPanel(apanel) ) {
result.add$TE(frame);
}}}}
return result;
});
;
(function(){var C$=Clazz.newClass(P$.Desktop, "MyDesktopManager", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.DesktopManager');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.delegate=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_DesktopManager', function (delegate) {
C$.$init$.apply(this);
this.delegate=delegate;
}, 1);

Clazz.newMeth(C$, 'activateFrame$javax_swing_JInternalFrame', function (f) {
try {
this.delegate.activateFrame$javax_swing_JInternalFrame(f);
} catch (npe) {
if (Clazz.exceptionOf(npe,"NullPointerException")){
var p=this.b$['java.awt.Component'].getMousePosition$.apply(this.b$['java.awt.Component'], []);
$I$(1).instance.showPasteMenu$I$I(p.x, p.y);
} else {
throw npe;
}
}
});

Clazz.newMeth(C$, 'beginDraggingFrame$javax_swing_JComponent', function (f) {
this.delegate.beginDraggingFrame$javax_swing_JComponent(f);
});

Clazz.newMeth(C$, 'beginResizingFrame$javax_swing_JComponent$I', function (f, direction) {
this.delegate.beginResizingFrame$javax_swing_JComponent$I(f, direction);
});

Clazz.newMeth(C$, 'closeFrame$javax_swing_JInternalFrame', function (f) {
this.delegate.closeFrame$javax_swing_JInternalFrame(f);
});

Clazz.newMeth(C$, 'deactivateFrame$javax_swing_JInternalFrame', function (f) {
this.delegate.deactivateFrame$javax_swing_JInternalFrame(f);
});

Clazz.newMeth(C$, 'deiconifyFrame$javax_swing_JInternalFrame', function (f) {
this.delegate.deiconifyFrame$javax_swing_JInternalFrame(f);
});

Clazz.newMeth(C$, 'dragFrame$javax_swing_JComponent$I$I', function (f, newX, newY) {
if (newY < 0) {
newY=0;
}this.delegate.dragFrame$javax_swing_JComponent$I$I(f, newX, newY);
});

Clazz.newMeth(C$, 'endDraggingFrame$javax_swing_JComponent', function (f) {
this.delegate.endDraggingFrame$javax_swing_JComponent(f);
$I$(1).desktop.repaint$();
});

Clazz.newMeth(C$, 'endResizingFrame$javax_swing_JComponent', function (f) {
this.delegate.endResizingFrame$javax_swing_JComponent(f);
$I$(1).desktop.repaint$();
});

Clazz.newMeth(C$, 'iconifyFrame$javax_swing_JInternalFrame', function (f) {
this.delegate.iconifyFrame$javax_swing_JInternalFrame(f);
});

Clazz.newMeth(C$, 'maximizeFrame$javax_swing_JInternalFrame', function (f) {
this.delegate.maximizeFrame$javax_swing_JInternalFrame(f);
});

Clazz.newMeth(C$, 'minimizeFrame$javax_swing_JInternalFrame', function (f) {
this.delegate.minimizeFrame$javax_swing_JInternalFrame(f);
});

Clazz.newMeth(C$, 'openFrame$javax_swing_JInternalFrame', function (f) {
this.delegate.openFrame$javax_swing_JInternalFrame(f);
});

Clazz.newMeth(C$, 'resizeFrame$javax_swing_JComponent$I$I$I$I', function (f, newX, newY, newWidth, newHeight) {
if (newY < 0) {
newY=0;
}this.delegate.resizeFrame$javax_swing_JComponent$I$I$I$I(f, newX, newY, newWidth, newHeight);
});

Clazz.newMeth(C$, 'setBoundsForFrame$javax_swing_JComponent$I$I$I$I', function (f, newX, newY, newWidth, newHeight) {
this.delegate.setBoundsForFrame$javax_swing_JComponent$I$I$I$I(f, newX, newY, newWidth, newHeight);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Desktop, "MyDesktopPane", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JDesktopPane', 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.showMemoryUsage=false;
this.runtime=null;
this.df=null;
this.maxMemory=0;
this.allocatedMemory=0;
this.freeMemory=0;
this.totalFreeMemory=0;
this.percentUsage=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.showMemoryUsage=false;
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (showMemoryUsage) {
Clazz.super_(C$, this,1);
this.showMemoryUsage$Z(showMemoryUsage);
}, 1);

Clazz.newMeth(C$, 'showMemoryUsage$Z', function (showMemory) {
this.showMemoryUsage=showMemory;
if (showMemory) {
var worker=Clazz.new_($I$(2).c$$Runnable,[this]);
worker.start$();
}this.repaint$();
});

Clazz.newMeth(C$, 'isShowMemoryUsage$', function () {
return this.showMemoryUsage;
});

Clazz.newMeth(C$, 'run$', function () {
this.df=$I$(3).getNumberInstance$();
this.df.setMaximumFractionDigits$I(2);
this.runtime=$I$(4).getRuntime$();
while (this.showMemoryUsage){
try {
this.maxMemory=this.runtime.maxMemory$() / 1048576.0;
this.allocatedMemory=this.runtime.totalMemory$() / 1048576.0;
this.freeMemory=this.runtime.freeMemory$() / 1048576.0;
this.totalFreeMemory=this.freeMemory + (this.maxMemory - this.allocatedMemory);
this.percentUsage=(this.totalFreeMemory / this.maxMemory) * 100;
{
}this.repaint$();
$I$(2).sleep$J(3000);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
if (this.showMemoryUsage && g != null   && this.df != null  ) {
if (this.percentUsage < 20 ) {
g.setColor$java_awt_Color($I$(5).red);
}var fm=g.getFontMetrics$();
if (fm != null ) {
g.drawString$S$I$I($I$(6).formatMessage$S$OA("label.memory_stats", Clazz.array(java.lang.Object, -1, [this.df.format$D(this.totalFreeMemory), this.df.format$D(this.maxMemory), this.df.format$D(this.percentUsage)])), 10, this.getHeight$() - fm.getHeight$());
}}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
