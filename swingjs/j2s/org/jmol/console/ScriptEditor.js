(function(){var P$=Clazz.newPackage("org.jmol.console"),p$1={},I$=[[0,['org.jmol.console.ScriptEditor','.EditorDocument'],'javax.swing.undo.UndoManager',['org.jmol.console.ScriptEditor','.EditorDocument','.MyUndoableEditListener'],'java.awt.Color','javax.swing.JPanel','org.jmol.i18n.GT','javax.swing.text.SimpleAttributeSet','javax.swing.text.StyleConstants',['org.jmol.console.ScriptEditor','.EditorTextPane'],'java.awt.dnd.DropTarget','org.jmol.awt.FileDropper','javax.swing.JScrollPane','javajs.util.PT','java.awt.BorderLayout','javax.swing.JSplitPane','java.awt.Dimension','javax.swing.JButton','Boolean','java.awt.Font','java.awt.Rectangle','org.jmol.viewer.FileManager']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptEditor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog', ['org.jmol.api.JmolScriptEditorInterface', 'java.awt.event.ActionListener', 'java.awt.event.WindowListener']);
C$.$classes$=[['EditorTextPane',0],['EditorDocument',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.parsedData="";
this.buttonPanel=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['I',['fontSize'],'S',['$title','parsedData','filename','zipFileName'],'O',['editor','org.jmol.console.ScriptEditor.EditorTextPane','openButton','javax.swing.JButton','+closeButton','+loadButton','+topButton','+fontButton','+checkButton','+runButton','+pauseButton','+saveButton','+saveAsButton','+haltButton','+clearButton','+stateButton','+consoleButton','+stepButton','+resumeButton','vwr','org.jmol.viewer.Viewer','jmolConsole','org.jmol.console.JmolConsole','parsedContext','org.jmol.script.ScriptContext','attHighlight','javax.swing.text.SimpleAttributeSet','+attEcho','+attError','buttonPanel','javax.swing.JPanel','map','java.util.Map']]
,['O',['lastOpened','String[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$javax_swing_JFrame$org_jmol_console_JmolConsole', function (vwr, frame, jmolConsole) {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[frame, null, false]);C$.$init$.apply(this);
p$1.setAttributes.apply(this, []);
this.setTitle$S(this.$title=$I$(6).$$S("Jmol Script Editor"));
this.vwr=vwr;
this.jmolConsole=jmolConsole;
this.layoutWindow$java_awt_Container(this.getContentPane$());
this.setSize$I$I(745, 400);
if (frame != null ) this.setLocationRelativeTo$java_awt_Component(frame);
}, 1);

Clazz.newMeth(C$, 'setAttributes', function () {
this.attHighlight=Clazz.new_($I$(7,1));
(function(a,f){return f.apply(null,a)})([this.attHighlight, $I$(4).LIGHT_GRAY],$I$(8).setBackground$javax_swing_text_MutableAttributeSet$java_awt_Color);
(function(a,f){return f.apply(null,a)})([this.attHighlight, $I$(4).blue],$I$(8).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color);
$I$(8).setBold$javax_swing_text_MutableAttributeSet$Z(this.attHighlight, true);
this.attEcho=Clazz.new_($I$(7,1));
(function(a,f){return f.apply(null,a)})([this.attEcho, $I$(4).blue],$I$(8).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color);
$I$(8).setBold$javax_swing_text_MutableAttributeSet$Z(this.attEcho, true);
this.attError=Clazz.new_($I$(7,1));
(function(a,f){return f.apply(null,a)})([this.attError, $I$(4).red],$I$(8).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color);
$I$(8).setBold$javax_swing_text_MutableAttributeSet$Z(this.attError, true);
}, p$1);

Clazz.newMeth(C$, 'layoutWindow$java_awt_Container', function (container) {
this.editor=Clazz.new_($I$(9,1),[this, null]);
this.editor.setDragEnabled$Z(true);
this.editor.setDropTarget$java_awt_dnd_DropTarget(Clazz.new_([this.editor, Clazz.new_($I$(11,1).c$$org_jmol_api_JmolStatusListener$org_jmol_viewer_Viewer$org_jmol_api_JmolDropEditor,[null, this.vwr, this])],$I$(10,1).c$$java_awt_Component$java_awt_dnd_DropTargetListener));
var editorPane=Clazz.new_($I$(12,1).c$$java_awt_Component,[this.editor]);
this.updateFontSize$();
this.consoleButton=p$1.setButton$S.apply(this, [$I$(6).$$S("Console")]);
if (!this.vwr.isApplet || this.vwr.getBooleanProperty$S("_signedApplet") ) this.openButton=p$1.setButton$S.apply(this, [$I$(6).$$S("Open")]);
this.fontButton=p$1.setButton$S.apply(this, [$I$(6).$$S("Font")]);
this.loadButton=p$1.setButton$S.apply(this, [$I$(6).$$S("Script")]);
this.checkButton=p$1.setButton$S.apply(this, [$I$(6).$$S("Check")]);
this.topButton=p$1.setButton$S.apply(this, [(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})(["Top[as in \"go to the top\" - (translators: remove this bracketed part]"],$I$(6).$$S), "["],$I$(13).split$S$S)[0]]);
this.stepButton=p$1.setButton$S.apply(this, [$I$(6).$$S("Step")]);
this.runButton=p$1.setButton$S.apply(this, [$I$(6).$$S("Run")]);
this.pauseButton=p$1.setButton$S.apply(this, [$I$(6).$$S("Pause")]);
this.pauseButton.setEnabled$Z(true);
this.resumeButton=p$1.setButton$S.apply(this, [$I$(6).$$S("Resume")]);
this.resumeButton.setEnabled$Z(false);
this.haltButton=p$1.setButton$S.apply(this, [$I$(6).$$S("Halt")]);
this.haltButton.setEnabled$Z(false);
this.clearButton=p$1.setButton$S.apply(this, [$I$(6).$$S("Clear")]);
this.closeButton=p$1.setButton$S.apply(this, [$I$(6).$$S("Close")]);
this.saveButton=p$1.setButton$S.apply(this, [$I$(6).$$S("Save")]);
this.saveButton.setEnabled$Z(false);
this.saveAsButton=p$1.setButton$S.apply(this, [(function(a,f){return f.apply(null,a)})([$I$(6).$$S("&Save As..."), "&", ""],$I$(13).rep$S$S$S)]);
this.saveAsButton.setEnabled$Z(false);
var buttonPanelWrapper=Clazz.new_($I$(5,1));
buttonPanelWrapper.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1)));
buttonPanelWrapper.add$java_awt_Component$O(this.buttonPanel, "Center");
var spane=Clazz.new_($I$(15,1).c$$I$java_awt_Component$java_awt_Component,[0, editorPane, buttonPanelWrapper]);
editorPane.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(16,1).c$$I$I,[300, 300]));
editorPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(16,1).c$$I$I,[5000, 5000]));
buttonPanelWrapper.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(16,1).c$$I$I,[60, 60]));
buttonPanelWrapper.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(16,1).c$$I$I,[1000, 60]));
buttonPanelWrapper.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(16,1).c$$I$I,[60, 60]));
spane.setDividerSize$I(0);
spane.setResizeWeight$D(0.95);
container.add$java_awt_Component(spane);
});

Clazz.newMeth(C$, 'setButton$S', function (s) {
var b=Clazz.new_($I$(17,1).c$$S,[s]);
b.addActionListener$java_awt_event_ActionListener(this);
this.buttonPanel.add$java_awt_Component(b);
return b;
}, p$1);

Clazz.newMeth(C$, 'notifyScriptStart$', function () {
this.runButton.setEnabled$Z(false);
this.resumeButton.setEnabled$Z(false);
this.haltButton.setEnabled$Z(true);
this.pauseButton.setEnabled$Z(true);
});

Clazz.newMeth(C$, 'notifyScriptTermination$', function () {
this.runButton.setEnabled$Z(true);
this.pauseButton.setEnabled$Z(false);
this.resumeButton.setEnabled$Z(false);
this.haltButton.setEnabled$Z(false);
this.editor.editorDoc.clearHighlight$();
this.editor.setCaretPosition$I(this.editor.editorDoc.getLength$());
});

Clazz.newMeth(C$, 'setVisible$Z', function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
this.vwr.getProperty$S$S$O("DATA_API", "scriptEditorState", b ? $I$(18).TRUE : $I$(18).FALSE);
if (b) this.editor.grabFocus$();
});

Clazz.newMeth(C$, 'getText$', function () {
return this.editor.getText$();
});

Clazz.newMeth(C$, 'output$S', function (message) {
p$1.setSaveEnabled$S.apply(this, [null]);
this.editor.clearContent$S(message);
});

Clazz.newMeth(C$, 'setSaveEnabled$S', function (zipName) {
this.saveButton.setEnabled$Z(zipName != null );
this.saveAsButton.setEnabled$Z(zipName != null );
this.zipFileName=zipName;
}, p$1);

Clazz.newMeth(C$, 'dispose$', function () {
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'notifyContext$org_jmol_script_ScriptContext$OA', function (context, data) {
this.haltButton.setEnabled$Z(context.errorMessage == null );
this.pauseButton.setEnabled$Z(context.errorMessage == null );
this.resumeButton.setEnabled$Z(false);
if (context.errorMessage == null ) p$1.setContext$org_jmol_script_ScriptContext.apply(this, [context]);
});

Clazz.newMeth(C$, 'setContext$org_jmol_script_ScriptContext', function (context) {
this.pauseButton.setEnabled$Z(this.vwr.isScriptExecuting$());
if (context.script.indexOf$S("\u0001## EDITOR_IGNORE ##") >= 0) return;
this.parsedContext=context;
this.filename=context.scriptFileName;
this.setTitle$S(this.$title + this.parsedContext.contextPath);
if (this.filename == null  && context.functionName != null  ) this.filename="function " + context.functionName;
this.parsedData=this.editor.editorDoc.outputEcho$S(context.script);
var isPaused=context.executionPaused || context.executionStepping ;
this.pauseButton.setEnabled$Z(!isPaused && this.vwr.isScriptExecuting$() );
this.resumeButton.setEnabled$Z(isPaused);
p$1.gotoCommand$I$Z$javax_swing_text_SimpleAttributeSet.apply(this, [context.pc, isPaused, this.attHighlight]);
}, p$1);

Clazz.newMeth(C$, 'gotoCommand$I$Z$javax_swing_text_SimpleAttributeSet', function (pt, isPaused, attr) {
var context=this.parsedContext;
try {
try {
this.setVisible$Z(true);
var pt2;
var pt1;
if (pt < 0) {
pt1=0;
pt2=this.editor.getDocument$().getLength$();
} else if (context == null  || context.getTokenCount$() < 0 ) {
pt1=pt2=0;
} else if (pt < context.getTokenCount$()) {
pt1=context.lineIndices[pt][0];
pt2=context.lineIndices[pt][1];
} else {
pt1=pt2=this.editor.getDocument$().getLength$();
}if (isPaused) {
this.editor.setCaretPosition$I(pt1);
this.editor.editorDoc.doHighlight$I$I$javax_swing_text_SimpleAttributeSet(pt1, pt2, attr);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.editor.setCaretPosition$I(0);
} else {
throw e;
}
}
} catch (er) {
if (Clazz.exceptionOf(er,"Error")){
} else {
throw er;
}
}
}, p$1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
p$1.checkAction$java_awt_event_ActionEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'checkAction$java_awt_event_ActionEvent', function (e) {
var source=e.getSource$();
if (source === this.consoleButton ) {
this.jmolConsole.setVisible$Z(true);
return;
}if (source === this.openButton ) {
p$1.doOpen.apply(this, []);
return;
}if (source === this.closeButton ) {
this.setVisible$Z(false);
return;
}if (source === this.loadButton ) {
p$1.setContext$org_jmol_script_ScriptContext.apply(this, [this.vwr.getScriptContext$S("SE loadButton")]);
return;
}if (source === this.topButton ) {
this.gotoTop$();
return;
}if (source === this.fontButton ) {
var d=this.vwr.getProperty$S$S$O("DATA_API", "getPreference", null);
if (d != null ) d.setFontScale$I(-1);
this.updateFontSize$();
return;
}if (source === this.checkButton ) {
this.checkScript$();
return;
}if (source === this.runButton ) {
this.notifyScriptStart$();
var s=this.editor.getText$();
this.jmolConsole.execute$S(s + "\u0001##");
return;
}if (source === this.pauseButton ) {
this.jmolConsole.execute$S("!pause\u0001##");
return;
}if (source === this.resumeButton ) {
this.doResume$();
return;
}if (source === this.stepButton ) {
this.doStep$();
return;
}if (source === this.clearButton ) {
this.editor.clearContent$();
return;
}if (source === this.stateButton ) {
this.editor.clearContent$S(this.vwr.getStateInfo$());
return;
}if (source === this.haltButton ) {
this.vwr.haltScriptExecution$();
return;
}if (source === this.saveButton ) {
p$1.saveZip$Z.apply(this, [false]);
return;
}if (source === this.saveAsButton ) {
p$1.saveZip$Z.apply(this, [true]);
return;
}}, p$1);

Clazz.newMeth(C$, 'saveZip$Z', function (isAs) {
if (isAs) {
} else {
var script=this.editor.getText$().trim$();
if (script.startsWith$S("load ")) script=script.substring$I(script.indexOf$S(";") + 1);
this.map=this.vwr.fm.getFileAsMap$S$S(this.zipFileName, null);
if (this.map == null ) return;
this.map.put$O$O("movie.spt", script);
}}, p$1);

Clazz.newMeth(C$, 'updateFontSize$', function () {
var scale=(function(a,f){return f.apply(null,a)})(["" + this.vwr.getProperty$S$S$O("DATA_API", "getPreference", "consoleFontScale")],$I$(13).parseInt$S);
scale=(scale < 0 ? 1 : scale) % 5;
this.fontSize=scale * 4 + 12;
if (this.editor != null ) this.editor.setFont$java_awt_Font(Clazz.new_($I$(19,1).c$$S$I$I,["dialog", 0, this.fontSize]));
});

Clazz.newMeth(C$, 'doOpen', function () {
this.vwr.fm.getFileDataAsString$SA$I$Z$Z$Z(C$.lastOpened, -1, false, false, true);
this.editor.clearContent$S(C$.lastOpened[1]);
C$.lastOpened[1]=null;
}, p$1);

Clazz.newMeth(C$, 'gotoTop$', function () {
this.editor.setCaretPosition$I(0);
this.editor.grabFocus$();
p$1.gotoPosition$I$I.apply(this, [0, 0]);
});

Clazz.newMeth(C$, 'checkScript$', function () {
this.parsedContext=null;
this.parseScript$S(this.editor.getText$());
});

Clazz.newMeth(C$, 'parseScript$S', function (text) {
if (text == null  || text.length$() == 0 ) {
this.parsedContext=null;
this.parsedData="";
this.setTitle$S(this.$title);
return;
}if (this.parsedContext == null  || !text.equals$O(this.parsedData) ) {
this.parsedData=text;
this.parsedContext=this.vwr.getProperty$S$S$O("DATA_API", "scriptCheck", text);
}p$1.gotoParsedLine.apply(this, []);
});

Clazz.newMeth(C$, 'gotoParsedLine', function () {
this.setTitle$S(this.$title + " " + this.parsedContext.contextPath + " -- " + (this.parsedContext.getTokenCount$() < 0 ? "" : this.parsedContext.getTokenCount$() + " commands ") + (this.parsedContext.iCommandError < 0 ? "" : " ERROR: " + this.parsedContext.errorType) );
var isError=(this.parsedContext.iCommandError >= 0);
p$1.gotoCommand$I$Z$javax_swing_text_SimpleAttributeSet.apply(this, [isError ? this.parsedContext.iCommandError : 0, true, isError ? this.attError : this.attHighlight]);
}, p$1);

Clazz.newMeth(C$, 'doStep$', function () {
var isPaused=this.vwr.getBooleanProperty$S("executionPaused");
this.jmolConsole.execute$S(isPaused ? "!step\u0001##" : this.editor.getText$() + "\u0001##SCRIPT_STEP\n##SCRIPT_START=" + this.editor.getCaretPosition$() );
});

Clazz.newMeth(C$, 'doResume$', function () {
this.editor.clearContent$();
this.jmolConsole.execute$S("!resume\u0001##");
});

Clazz.newMeth(C$, 'gotoPosition$I$I', function (i, j) {
this.editor.scrollRectToVisible$java_awt_Rectangle(Clazz.new_($I$(20,1).c$$I$I,[i, j]));
}, p$1);

Clazz.newMeth(C$, 'setFilename$S', function (filename) {
this.filename=filename;
});

Clazz.newMeth(C$, 'show$SA', function (fileText) {
if (fileText == null ) fileText=Clazz.array(String, -1, [null, null]);
if (fileText[1] == null ) fileText[1]="#no data#";
var filename=fileText[0];
var msg=fileText[1];
if (msg != null ) {
this.setFilename$S(filename);
this.output$S($I$(21).getEmbeddedScript$S(msg));
}this.setVisible$Z(true);
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent', function (e) {
this.updateFontSize$();
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'loadContent$S', function (script) {
System.out.println$S("SCRIPT is " + script);
});

Clazz.newMeth(C$, 'loadFile$S', function (fileName) {
System.out.println$S(fileName);
if (!fileName.endsWith$S("png") && !fileName.endsWith$S("pngj") && !fileName.endsWith$S("jmol") && !fileName.endsWith$S("zip")  ) return;
try {
p$1.setSaveEnabled$S.apply(this, [fileName]);
this.output$S(this.vwr.fm.getEmbeddedFileState$S$Z$S(fileName, false, "movie.spt"));
} catch (e) {
}
try {
var data=this.vwr.fm.getEmbeddedFileState$S$Z$S(fileName, false, "state.spt");
if (data.indexOf$S("preferredWidthHeight") >= 0) this.vwr.sm.resizeInnerPanelString$S(data);
} catch (e) {
}
this.vwr.openFileAsyncSpecial$S$I(fileName, 11);
});

Clazz.newMeth(C$, 'notify$I$OA', function (msWalltime, data) {
if (msWalltime > 0) {
this.notifyScriptTermination$();
} else if (msWalltime < 0) {
if (msWalltime == -2) this.notifyScriptStart$();
} else if (this.isVisible$() && (data[2]).length$() > 0 ) {
this.notifyContext$org_jmol_script_ScriptContext$OA(this.vwr.getScriptContext$S("SE notify"), data);
}});

C$.$static$=function(){C$.$static$=0;
C$.lastOpened=Clazz.array(String, -1, ["?.spt", null]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ScriptEditor, "EditorTextPane", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JTextPane');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.checking=false;
},1);

C$.$fields$=[['Z',['checking'],'O',['editorDoc','org.jmol.console.ScriptEditor.EditorDocument']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$javax_swing_text_StyledDocument.apply(this,[Clazz.new_($I$(1,1),[this, null])]);C$.$init$.apply(this);
this.editorDoc=this.getDocument$();
this.editorDoc.setEditorTextPane$org_jmol_console_ScriptEditor_EditorTextPane(this);
}, 1);

Clazz.newMeth(C$, 'clearContent$', function () {
this.this$0.filename=null;
this.clearContent$S(null);
});

Clazz.newMeth(C$, 'clearContent$S', function (text) {
this.editorDoc.outputEcho$S(text);
this.this$0.parseScript$S.apply(this.this$0, [text]);
});

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent', function (ke) {
var kcode=ke.getKeyCode$();
var kid=ke.getID$();
if (kid == 401) {
switch (kcode) {
case 90:
if (ke.isControlDown$()) {
if (ke.isShiftDown$()) this.this$0.editor.editorDoc.redo$();
 else this.this$0.editor.editorDoc.undo$();
return;
}break;
case 89:
if (ke.isControlDown$()) {
this.this$0.editor.editorDoc.redo$();
return;
}break;
case 116:
if (this.this$0.stepButton.isEnabled$()) this.this$0.doStep$.apply(this.this$0, []);
return;
case 119:
if (this.this$0.resumeButton.isEnabled$()) this.this$0.doResume$.apply(this.this$0, []);
return;
}
}C$.superclazz.prototype.processKeyEvent$java_awt_event_KeyEvent.apply(this, [ke]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ScriptEditor, "EditorDocument", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.DefaultStyledDocument');
C$.$classes$=[['MyUndoableEditListener',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.undo=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['EditorTextPane','org.jmol.console.ScriptEditor.EditorTextPane','undo','javax.swing.undo.UndoManager']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.putProperty$O$O("__EndOfLine__", "\n");
this.addUndoableEditListener$javax_swing_event_UndoableEditListener(Clazz.new_($I$(3,1),[this, null]));
}, 1);

Clazz.newMeth(C$, 'setEditorTextPane$org_jmol_console_ScriptEditor_EditorTextPane', function (EditorTextPane) {
this.EditorTextPane=EditorTextPane;
});

Clazz.newMeth(C$, 'doHighlight$I$I$javax_swing_text_SimpleAttributeSet', function (from, to, attr) {
this.clearHighlight$();
if (from >= to) return;
this.setCharacterAttributes$I$I$javax_swing_text_AttributeSet$Z(from, to - from, attr, true);
this.this$0.editor.select$I$I(from, to);
this.this$0.editor.setSelectedTextColor$java_awt_Color(attr === this.this$0.attError  ? $I$(4).RED : $I$(4).black);
});

Clazz.newMeth(C$, 'clearHighlight$', function () {
this.setCharacterAttributes$I$I$javax_swing_text_AttributeSet$Z(0, this.this$0.editor.editorDoc.getLength$(), this.this$0.attEcho, true);
});

Clazz.newMeth(C$, 'undo$', function () {
try {
this.undo.undo$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'redo$', function () {
try {
this.undo.redo$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'clearContent$', function () {
try {
C$.superclazz.prototype.remove$I$I.apply(this, [0, this.getLength$()]);
} catch (exception) {
if (Clazz.exceptionOf(exception,"Exception")){
} else {
throw exception;
}
}
});

Clazz.newMeth(C$, 'outputEcho$S', function (text) {
this.clearContent$();
if (text == null ) return "";
var pt=text.indexOf$I("\u0001");
if (pt >= 0) text=text.substring$I$I(0, pt).trim$();
if (!text.endsWith$S("\n")) text += "\n";
try {
C$.superclazz.prototype.insertString$I$S$javax_swing_text_AttributeSet.apply(this, [0, text, this.this$0.attEcho]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.getMessage$());
} else {
throw e;
}
}
return text;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ScriptEditor.EditorDocument, "MyUndoableEditListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.UndoableEditListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'undoableEditHappened$javax_swing_event_UndoableEditEvent', function (e) {
this.this$0.undo.addEdit$javax_swing_undo_UndoableEdit(e.getEdit$());
});

Clazz.newMeth(C$);
})()
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
