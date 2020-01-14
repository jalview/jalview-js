(function(){var P$=Clazz.newPackage("org.jmol.console"),I$=[[0,'javajs.util.Lst','javajs.util.AU','org.jmol.console.JmolButton','org.jmol.console.GenericConsole','org.jmol.i18n.GT','org.jmol.console.ScriptEditor','org.jmol.viewer.FileManager','java.io.File',['org.jmol.console.JmolConsole','.FileChecker'],'org.jmol.awt.Platform','org.jmol.console.KeyJMenu','org.jmol.console.KeyJMenuItem']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JmolConsole", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.console.GenericConsole', ['java.awt.event.ActionListener', 'java.awt.event.WindowListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwrFrame=null;
this.externalContainer=null;
this.scriptEditor=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'dispose$', function () {
if (Clazz.instanceOf(this.externalContainer, "java.awt.Window")) (this.externalContainer).dispose$();
 else this.externalContainer.setVisible$Z(false);
});

Clazz.newMeth(C$, 'getPane$', function () {
return (Clazz.instanceOf(this.externalContainer, "javax.swing.JFrame") ? (this.externalContainer).getContentPane$() : this.externalContainer);
});

Clazz.newMeth(C$, 'setTitle$', function () {
if (Clazz.instanceOf(this.externalContainer, "javax.swing.JFrame")) (this.externalContainer).setTitle$S(P$.GenericConsole.getLabel$S("title"));
 else if (Clazz.instanceOf(this.externalContainer, "javax.swing.JDialog")) (this.externalContainer).setTitle$S(P$.GenericConsole.getLabel$S("title"));
});

Clazz.newMeth(C$, 'setVisible$Z', function (isVisible) {
this.externalContainer.setVisible$Z(isVisible);
});

Clazz.newMeth(C$, 'setButton$S', function (label) {
return this.addButton$org_jmol_api_JmolAbstractButton$S(Clazz.new_($I$(3).c$$S,[P$.GenericConsole.getLabel$S(label)]), label);
});

Clazz.newMeth(C$, 'updateLabels$', function () {
$I$(4).labels=null;
var doTranslate=$I$(5).setDoTranslate$Z(true);
this.setViewer$org_jmol_viewer_Viewer(this.vwr);
this.defaultMessage=P$.GenericConsole.getLabel$S("default");
P$.GenericConsole.setAbstractButtonLabels$java_util_Map$java_util_Map(this.menuMap, $I$(4).labels);
this.setTitle$();
if (this.label1 != null ) this.label1.setText$S(P$.GenericConsole.getLabel$S("label1"));
$I$(5).setDoTranslate$Z(doTranslate);
});

Clazz.newMeth(C$, 'getScriptEditor$', function () {
return (this.scriptEditor == null  ? (this.scriptEditor=Clazz.new_($I$(6).c$$org_jmol_viewer_Viewer$javax_swing_JFrame$org_jmol_console_JmolConsole,[this.vwr, this.vwrFrame, this])) : this.scriptEditor);
});

Clazz.newMeth(C$, 'nextFileName$S$I', function (stub, nTab) {
var sname=$I$(7).getLocalPathForWritingFile$org_jmol_viewer_Viewer$S(this.vwr, stub);
if (sname == null ) return null;
var root=sname.substring$I$I(0, sname.lastIndexOf$S("/") + 1);
if (sname.startsWith$S("file:/")) sname=sname.substring$I(6);
if (sname.indexOf$S("/") >= 0) {
if (root.equals$O(sname)) {
stub="";
} else {
var dir=Clazz.new_($I$(8).c$$S,[sname]);
sname=dir.getParent$();
stub=dir.getName$();
}}var fileChecker=Clazz.new_($I$(9).c$$S, [this, null, stub]);
try {
(Clazz.new_($I$(8).c$$S,[sname])).list$java_io_FilenameFilter(fileChecker);
return root + fileChecker.getFile$I(nTab);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.doAction$O(e.getSource$());
});

Clazz.newMeth(C$, 'isMenuItem$O', function (source) {
return Clazz.instanceOf(source, "javax.swing.JMenuItem");
});

Clazz.newMeth(C$, 'addWindowListener$', function () {
var w=$I$(10).getWindow$java_awt_Container(this.externalContainer);
if (w != null ) w.addWindowListener$java_awt_event_WindowListener(this);
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent', function (we) {
this.updateFontSize$();
});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (we) {
this.destroyConsole$();
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (we) {
this.destroyConsole$();
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent', function (we) {
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent', function (we) {
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent', function (we) {
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent', function (we) {
});

Clazz.newMeth(C$, 'newJMenu$S', function (key) {
return Clazz.new_($I$(11).c$$S$S$java_util_Map,[key, P$.GenericConsole.getLabel$S(key), null]);
});

Clazz.newMeth(C$, 'newJMenuItem$S', function (key) {
return Clazz.new_($I$(12).c$$S$S$java_util_Map,[key, P$.GenericConsole.getLabel$S(key), null]);
});

Clazz.newMeth(C$, 'updateFontSize$', function () {
});
;
(function(){var C$=Clazz.newClass(P$.JmolConsole, "FileChecker", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.io.FilenameFilter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.stub=null;
this.v=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.v=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$S', function (stub) {
C$.$init$.apply(this);
this.stub=stub.toLowerCase$();
}, 1);

Clazz.newMeth(C$, ['accept$java_io_File$S','accept$'], function (dir, name) {
if (!name.toLowerCase$().startsWith$S(this.stub)) return false;
this.v.addLast$TV(name);
return true;
});

Clazz.newMeth(C$, 'getFile$I', function (n) {
return $I$(2).sortedItem$javajs_util_Lst$I(this.v, n);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
