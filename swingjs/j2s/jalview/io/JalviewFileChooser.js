(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.awt.Dimension','jalview.bin.Cache','java.util.Vector','java.util.StringTokenizer','javax.swing.JList','javax.swing.DefaultListCellRenderer','java.awt.event.MouseAdapter','javax.swing.border.TitledBorder','jalview.util.MessageManager','javax.swing.JScrollPane','javax.swing.SpringLayout','jalview.util.Platform','javax.swing.SwingUtilities','java.util.HashMap','java.util.ArrayList','jalview.io.FileFormats',['jalview.io.JalviewFileChooser','.RecentlyOpened'],'java.io.File','jalview.io.JalviewFileFilter','javax.swing.JPanel','javax.swing.BoxLayout','Boolean','javax.swing.JCheckBox','java.awt.EventQueue','Thread','jalview.gui.JvOptionPane']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JalviewFileChooser", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JFileChooser', ['jalview.util.dialogrunner.DialogRunnerI', 'java.beans.PropertyChangeListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.callbacks=null;
this.$selectedFile=null;
this.backupfilesCheckBox=null;
this.includeBackupFiles=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.callbacks=Clazz.new_($I$(14));
this.$selectedFile=null;
this.backupfilesCheckBox=null;
this.includeBackupFiles=false;
}, 1);

Clazz.newMeth(C$, 'forRead$S$S', function (directory, selected) {
return C$.forRead$S$S$Z(directory, selected, false);
}, 1);

Clazz.newMeth(C$, 'forRead$S$S$Z', function (directory, selected, allowBackupFiles) {
var extensions=Clazz.new_($I$(15));
var descs=Clazz.new_($I$(15));
for (var format, $format = $I$(16).getInstance$().getFormats$().iterator$(); $format.hasNext$()&&((format=($format.next$())),1);) {
if (format.isReadable$()) {
extensions.add$TE(format.getExtensions$());
descs.add$TE(format.getName$());
}}
return Clazz.new_(C$.c$$S$SA$SA$S$Z$Z,[directory, extensions.toArray$TTA(Clazz.array(String, [extensions.size$()])), descs.toArray$TTA(Clazz.array(String, [descs.size$()])), selected, true, allowBackupFiles]);
}, 1);

Clazz.newMeth(C$, 'forWrite$S$S', function (directory, selected) {
var extensions=Clazz.new_($I$(15));
var descs=Clazz.new_($I$(15));
for (var format, $format = $I$(16).getInstance$().getFormats$().iterator$(); $format.hasNext$()&&((format=($format.next$())),1);) {
if (format.isWritable$()) {
extensions.add$TE(format.getExtensions$());
descs.add$TE(format.getName$());
}}
return Clazz.new_(C$.c$$S$SA$SA$S$Z,[directory, extensions.toArray$TTA(Clazz.array(String, [extensions.size$()])), descs.toArray$TTA(Clazz.array(String, [descs.size$()])), selected, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (dir) {
C$.superclazz.c$$java_io_File.apply(this, [C$.safePath$S(dir)]);
C$.$init$.apply(this);
this.setAccessory$javax_swing_JComponent(Clazz.new_($I$(17), [this, null]));
}, 1);

Clazz.newMeth(C$, 'c$$S$SA$SA$S', function (dir, suffix, desc, selected) {
C$.c$$S$SA$SA$S$Z.apply(this, [dir, suffix, desc, selected, true]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (extension, desc) {
C$.c$$S$SA$SA$S$Z.apply(this, [$I$(2).getProperty$S("LAST_DIRECTORY"), Clazz.array(String, -1, [extension]), Clazz.array(String, -1, [desc]), desc, true]);
}, 1);

Clazz.newMeth(C$, 'c$$S$SA$SA$S$Z', function (dir, extensions, descs, selected, acceptAny) {
C$.c$$S$SA$SA$S$Z$Z.apply(this, [dir, extensions, descs, selected, acceptAny, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$SA$SA$S$Z$Z', function (dir, extensions, descs, selected, acceptAny, allowBackupFiles) {
C$.superclazz.c$$java_io_File.apply(this, [C$.safePath$S(dir)]);
C$.$init$.apply(this);
if (extensions.length == descs.length) {
var formats=Clazz.new_($I$(15));
for (var i=0; i < extensions.length; i++) {
formats.add$TE(Clazz.array(String, -1, [extensions[i], descs[i]]));
}
this.init$java_util_List$S$Z$Z(formats, selected, acceptAny, allowBackupFiles);
} else {
System.err.println$S("JalviewFileChooser arguments mismatch: " + extensions + ", " + descs );
}}, 1);

Clazz.newMeth(C$, 'safePath$S', function (dir) {
if (dir == null ) {
return null;
}var f=Clazz.new_($I$(18).c$$S,[dir]);
if (f.getName$().indexOf$I(":") > -1) {
return null;
}return f;
}, 1);

Clazz.newMeth(C$, 'showOpenDialog$java_awt_Component', function (parent) {
var value=C$.superclazz.prototype.showOpenDialog$java_awt_Component.apply(this, [this]);
if (!$I$(12).isJS$()) 
{}
return value;
});

Clazz.newMeth(C$, 'init$java_util_List$S$Z', function (formats, selected, acceptAny) {
this.init$java_util_List$S$Z$Z(formats, selected, acceptAny, false);
});

Clazz.newMeth(C$, 'init$java_util_List$S$Z$Z', function (formats, selected, acceptAny, allowBackupFiles) {
var chosen=null;
this.setAcceptAllFileFilterUsed$Z(acceptAny);
for (var format, $format = formats.iterator$(); $format.hasNext$()&&((format=($format.next$())),1);) {
var jvf=Clazz.new_($I$(19).c$$S$S,[format[0], format[1]]);
if (allowBackupFiles) {
jvf.setParentJFC$jalview_io_JalviewFileChooser(this);
}this.addChoosableFileFilter$javax_swing_filechooser_FileFilter(jvf);
if ((selected != null ) && selected.equalsIgnoreCase$S(format[1]) ) {
chosen=jvf;
}}
if (chosen != null ) {
this.setFileFilter$javax_swing_filechooser_FileFilter(chosen);
}if (allowBackupFiles) {
var multi=Clazz.new_($I$(20));
multi.setLayout$java_awt_LayoutManager(Clazz.new_($I$(21).c$$java_awt_Container$I,[multi, 3]));
if (this.backupfilesCheckBox == null ) {
try {
this.includeBackupFiles=$I$(22).parseBoolean$S($I$(2).getProperty$S("BACKUPFILES_FC_INCLUDE"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.includeBackupFiles=false;
} else {
throw e;
}
}
this.backupfilesCheckBox=Clazz.new_($I$(23).c$$S$Z,[$I$(9).getString$S("label.include_backup_files"), this.includeBackupFiles]);
this.backupfilesCheckBox.setAlignmentX$F(0.5);
var jfc=this;
this.backupfilesCheckBox.addActionListener$java_awt_event_ActionListener(((P$.JalviewFileChooser$1||
(function(){var C$=Clazz.newClass(P$, "JalviewFileChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.io.JalviewFileChooser'].includeBackupFiles=this.b$['jalview.io.JalviewFileChooser'].backupfilesCheckBox.isSelected$();
$I$(2).setProperty$S$S("BACKUPFILES_FC_INCLUDE", String.valueOf$Z(this.b$['jalview.io.JalviewFileChooser'].includeBackupFiles));
var f=this.$finals$.jfc.getFileFilter$();
var selectedFile=this.$finals$.jfc.getSelectedFile$();
if (selectedFile != null  && !f.accept$java_io_File(selectedFile) ) {
this.$finals$.jfc.setSelectedFile$java_io_File(null);
}var s=this.$finals$.jfc.getApproveButtonText$();
this.$finals$.jfc.firePropertyChange$S$O$O("ApproveButtonTextChangedProperty", null, s);
this.$finals$.jfc.firePropertyChange$S$O$O("fileFilterChanged", null, f);
this.$finals$.jfc.rescanCurrentDirectory$();
this.$finals$.jfc.revalidate$();
this.$finals$.jfc.repaint$();
});
})()
), Clazz.new_(P$.JalviewFileChooser$1.$init$, [this, {jfc: jfc}])));
}multi.add$java_awt_Component(Clazz.new_($I$(17), [this, null]));
multi.add$java_awt_Component(this.backupfilesCheckBox);
this.setAccessory$javax_swing_JComponent(multi);
} else {
this.includeBackupFiles=false;
this.setAccessory$javax_swing_JComponent(Clazz.new_($I$(17), [this, null]));
}});

Clazz.newMeth(C$, 'setFileFilter$javax_swing_filechooser_FileFilter', function (filter) {
C$.superclazz.prototype.setFileFilter$javax_swing_filechooser_FileFilter.apply(this, [filter]);
try {
if (Clazz.instanceOf(this.getUI$(), "javax.swing.plaf.basic.BasicFileChooserUI")) {
var fcui=this.getUI$();
var name=fcui.getFileName$().trim$();
if ((name == null ) || (name.length$() == 0) ) {
return;
}$I$(24).invokeLater$Runnable(((P$.JalviewFileChooser$2||
(function(){var C$=Clazz.newClass(P$, "JalviewFileChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var currentName=this.$finals$.fcui.getFileName$();
if ((currentName == null ) || (currentName.length$() == 0) ) {
this.$finals$.fcui.setFileName$S(this.$finals$.name);
}});
})()
), Clazz.new_($I$(25), [this, {fcui: fcui, name: name}],P$.JalviewFileChooser$2)));
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getSelectedFormat$', function () {
if (this.getFileFilter$() == null ) {
return null;
}var format=this.getFileFilter$().getDescription$();
var parenPos=format.indexOf$S("(");
if (parenPos > 0) {
format=format.substring$I$I(0, parenPos).trim$();
try {
return $I$(16).getInstance$().forName$S(format);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
System.err.println$S("Unexpected format: " + format);
} else {
throw e;
}
}
}return null;
});

Clazz.newMeth(C$, 'getSelectedFile$', function () {
var f=C$.superclazz.prototype.getSelectedFile$.apply(this, []);
return f == null  ? this.$selectedFile : f;
});

Clazz.newMeth(C$, 'showSaveDialog$java_awt_Component', function (parent) {
this.setAccessory$javax_swing_JComponent(null);
this.setSelectedFile$java_io_File(null);
return C$.superclazz.prototype.showSaveDialog$java_awt_Component.apply(this, [parent]);
});

Clazz.newMeth(C$, 'approveSelection$', function () {
if (this.getDialogType$() != 1) {
C$.superclazz.prototype.approveSelection$.apply(this, []);
return;
}this.$selectedFile=this.getSelectedFile$();
if (this.$selectedFile == null ) {
try {
var filename=(this.getUI$()).getFileName$();
if (filename != null  && filename.length$() > 0 ) {
this.$selectedFile=Clazz.new_($I$(18).c$$java_io_File$S,[this.getCurrentDirectory$(), filename]);
}} catch (x) {
System.err.println$S("Unexpected exception when trying to get filename.");
x.printStackTrace$();
}
}if (this.$selectedFile == null ) {
return;
}if (Clazz.instanceOf(this.getFileFilter$(), "jalview.io.JalviewFileFilter")) {
var jvf=this.getFileFilter$();
if (!jvf.accept$java_io_File(this.$selectedFile)) {
var withExtension=this.getSelectedFile$().getName$() + "." + jvf.getAcceptableExtension$() ;
this.$selectedFile=(Clazz.new_($I$(18).c$$java_io_File$S,[this.getCurrentDirectory$(), withExtension]));
this.setSelectedFile$java_io_File(this.$selectedFile);
}}if (this.$selectedFile.exists$()) {
var confirm=$I$(26).showConfirmDialog$java_awt_Component$O$S$I(this, $I$(9).getString$S("label.overwrite_existing_file"), $I$(9).getString$S("label.file_already_exists"), 0);
if (confirm != 0) {
return;
}}C$.superclazz.prototype.approveSelection$.apply(this, []);
});

Clazz.newMeth(C$, 'recentListSelectionChanged$O', function (selection) {
this.setSelectedFile$java_io_File(null);
if (selection != null ) {
var file=Clazz.new_($I$(18).c$$S,[selection]);
if (Clazz.instanceOf(this.getFileFilter$(), "jalview.io.JalviewFileFilter")) {
var jvf=this.getFileFilter$();
if (!jvf.accept$java_io_File(file)) {
this.setFileFilter$javax_swing_filechooser_FileFilter(this.getChoosableFileFilters$()[0]);
}}this.setSelectedFile$java_io_File(file);
}});

Clazz.newMeth(C$, ['setResponseHandler$O$Runnable','setResponseHandler$'], function (response, action) {
this.callbacks.put$TK$TV(response, action);
return this;
});

Clazz.newMeth(C$, 'handleResponse$O', function (response) {
if (response != null  && !response.equals$O(response) ) {
return;
}var action=this.callbacks.get$O(response);
if (action != null ) {
action.run$();
}});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
switch (evt.getPropertyName$()) {
case "SelectedFile":
this.handleResponse$O(new Integer(0));
break;
}
});
;
(function(){var C$=Clazz.newClass(P$.JalviewFileChooser, "RecentlyOpened", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.list=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1).c$$I$I,[300, 100]));
var historyItems=$I$(2).getProperty$S("RECENT_FILE");
var st;
var recent=Clazz.new_($I$(3));
if (historyItems != null ) {
st=Clazz.new_($I$(4).c$$S$S,[historyItems, "\t"]);
while (st.hasMoreTokens$()){
recent.addElement$TE(st.nextToken$());
}
}this.list=Clazz.new_($I$(5).c$$java_util_Vector,[recent]);
var dlcr=Clazz.new_($I$(6));
dlcr.setHorizontalAlignment$I(4);
this.list.setCellRenderer$javax_swing_ListCellRenderer(dlcr);
this.list.addMouseListener$java_awt_event_MouseListener(((P$.JalviewFileChooser$RecentlyOpened$1||
(function(){var C$=Clazz.newClass(P$, "JalviewFileChooser$RecentlyOpened$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
this.b$['jalview.io.JalviewFileChooser'].recentListSelectionChanged$O.apply(this.b$['jalview.io.JalviewFileChooser'], [this.b$['jalview.io.JalviewFileChooser.RecentlyOpened'].list.getSelectedValue$()]);
});
})()
), Clazz.new_($I$(7), [this, null],P$.JalviewFileChooser$RecentlyOpened$1)));
this.setBorder$javax_swing_border_Border(Clazz.new_($I$(8).c$$S,[$I$(9).getString$S("label.recently_opened")]));
var scroller=Clazz.new_($I$(10).c$$java_awt_Component,[this.list]);
var layout=Clazz.new_($I$(11));
layout.putConstraint$S$java_awt_Component$I$S$java_awt_Component("West", scroller, 5, "West", this);
layout.putConstraint$S$java_awt_Component$I$S$java_awt_Component("North", scroller, 5, "North", this);
if ($I$(12).isAMacAndNotJS$()) {
scroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1).c$$I$I,[500, 100]));
} else {
scroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1).c$$I$I,[530, 200]));
}this.add$java_awt_Component(scroller);
$I$(13).invokeLater$Runnable(((P$.JalviewFileChooser$RecentlyOpened$2||
(function(){var C$=Clazz.newClass(P$, "JalviewFileChooser$RecentlyOpened$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.scroller.getHorizontalScrollBar$().setValue$I(this.$finals$.scroller.getHorizontalScrollBar$().getMaximum$());
});
})()
), Clazz.new_(P$.JalviewFileChooser$RecentlyOpened$2.$init$, [this, {scroller: scroller}])));
}, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
