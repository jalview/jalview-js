(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),p$1={},I$=[[0,'org.jmol.i18n.GT','java.util.Properties','java.awt.BorderLayout','javax.swing.JPanel','javax.swing.JList','java.awt.event.MouseAdapter','javax.swing.JButton','org.openscience.jmol.app.jmolpanel.JmolPanel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RecentFilesDialog", null, 'javax.swing.JDialog', ['java.awt.event.ActionListener', 'java.awt.event.WindowListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.selectedFileName=null;
this.files=Clazz.array(String, [10]);
},1);

C$.$fields$=[['S',['selectedFileName'],'O',['okButton','javax.swing.JButton','+cancelButton','+clearButton','files','String[]','fileList','javax.swing.JList','props','java.util.Properties']]]

Clazz.newMeth(C$, 'c$$java_awt_Frame', function (boss) {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[boss, $I$(1).$$S("Recent Files"), true]);C$.$init$.apply(this);
this.props=Clazz.new_($I$(2,1));
p$1.getFiles.apply(this, []);
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
var buttonPanel=Clazz.new_($I$(4,1));
this.okButton=p$1.addButton$javax_swing_JPanel$S.apply(this, [buttonPanel, $I$(1).$$S("Open")]);
this.cancelButton=p$1.addButton$javax_swing_JPanel$S.apply(this, [buttonPanel, $I$(1).$$S("Cancel")]);
this.clearButton=p$1.addButton$javax_swing_JPanel$S.apply(this, [buttonPanel, $I$(1).$$S("Clear")]);
this.getContentPane$().add$S$java_awt_Component("South", buttonPanel);
this.fileList=Clazz.new_($I$(5,1).c$$OA,[this.files]);
this.fileList.setSelectedIndex$I(0);
this.fileList.setSelectionMode$I(0);
var dblClickListener=((P$.RecentFilesDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "RecentFilesDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
if (e.getClickCount$() == 2) {
var dblClickIndex=this.b$['org.openscience.jmol.app.jmolpanel.RecentFilesDialog'].fileList.locationToIndex$java_awt_Point(e.getPoint$());
if (dblClickIndex >= 0 && dblClickIndex < this.b$['org.openscience.jmol.app.jmolpanel.RecentFilesDialog'].files.length  && this.b$['org.openscience.jmol.app.jmolpanel.RecentFilesDialog'].files[dblClickIndex] != null  ) {
this.b$['org.openscience.jmol.app.jmolpanel.RecentFilesDialog'].selectedFileName=this.b$['org.openscience.jmol.app.jmolpanel.RecentFilesDialog'].files[dblClickIndex];
this.b$['org.openscience.jmol.app.jmolpanel.RecentFilesDialog'].close$.apply(this.b$['org.openscience.jmol.app.jmolpanel.RecentFilesDialog'], []);
}}});
})()
), Clazz.new_($I$(6,1),[this, null],P$.RecentFilesDialog$1));
this.fileList.addMouseListener$java_awt_event_MouseListener(dblClickListener);
this.getContentPane$().add$S$java_awt_Component("Center", this.fileList);
this.setLocation$I$I(100, 100);
this.pack$();
}, 1);

Clazz.newMeth(C$, 'addButton$javax_swing_JPanel$S', function (buttonPanel, label) {
var btn=Clazz.new_($I$(7,1).c$$S,[label]);
btn.addActionListener$java_awt_event_ActionListener(this);
buttonPanel.add$java_awt_Component(btn);
return btn;
}, p$1);

Clazz.newMeth(C$, 'getFiles', function () {
this.props=$I$(8).historyFile.getProperties$();
for (var i=0; i < 10; i++) {
this.files[i]=this.props.getProperty$S("recentFilesFile" + i);
}
}, p$1);

Clazz.newMeth(C$, 'addFile$S', function (name) {
var currentPosition=-1;
for (var i=0; i < 10; i++) if (name.equals$O(this.files[i])) currentPosition=i;

if (currentPosition == 0) {
return;
}if (currentPosition > 0) {
for (var i=currentPosition; i < 9; i++) {
this.files[i]=this.files[i + 1];
}
}for (var j=8; j >= 0; j--) {
this.files[j + 1]=this.files[j];
}
this.files[0]=name;
this.fileList.setListData$OA(this.files);
this.fileList.setSelectedIndex$I(0);
this.pack$();
this.saveList$();
});

Clazz.newMeth(C$, 'saveList$', function () {
for (var i=0; i < 10; i++) if (this.files[i] != null ) this.props.setProperty$S$S("recentFilesFile" + i, this.files[i]);

$I$(8).historyFile.addProperties$java_util_Properties(this.props);
});

Clazz.newMeth(C$, 'getFile$', function () {
return this.selectedFileName;
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
this.cancel$();
this.close$();
});

Clazz.newMeth(C$, 'cancel$', function () {
this.selectedFileName=null;
});

Clazz.newMeth(C$, 'clear$', function () {
this.files=Clazz.array(String, [10]);
this.fileList.setListData$OA(this.files);
for (var i=0; i < 10; i++) {
this.props.setProperty$S$S("recentFilesFile" + i, "");
}
$I$(8).historyFile.addProperties$java_util_Properties(this.props);
this.cancel$();
});

Clazz.newMeth(C$, 'close$', function () {
this.setVisible$Z(false);
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if (e.getSource$() === this.okButton ) {
var fileIndex=this.fileList.getSelectedIndex$();
if (fileIndex < this.files.length) {
this.selectedFileName=this.files[fileIndex];
this.close$();
}} else if (e.getSource$() === this.cancelButton ) {
this.cancel$();
this.close$();
} else if (e.getSource$() === this.clearButton ) {
this.clear$();
this.close$();
}});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'notifyFileOpen$S', function (fullPathName) {
if (fullPathName != null  && !fullPathName.equals$O("Jmol Model Kit") ) this.addFile$S(fullPathName);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
