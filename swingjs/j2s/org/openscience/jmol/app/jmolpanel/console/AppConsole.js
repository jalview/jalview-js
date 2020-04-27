(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel.console"),p$1={},I$=[[0,'org.jmol.util.Logger',['org.openscience.jmol.app.jmolpanel.console.AppConsole','.ConsoleDocument'],'javax.swing.Timer','java.awt.EventQueue','javajs.util.PT','javax.swing.text.SimpleAttributeSet','javax.swing.text.StyleConstants','java.awt.Color','javax.swing.JPanel','org.jmol.viewer.Viewer','javax.swing.UIManager','javax.swing.KeyStroke','org.jmol.awt.Platform','javax.swing.JDialog','org.jmol.awt.FileDropper','java.awt.Font','org.jmol.i18n.GT',['org.openscience.jmol.app.jmolpanel.console.AppConsole','.ConsoleTextPane'],'java.awt.dnd.DropTarget','javax.swing.JScrollPane','java.awt.BorderLayout','javax.swing.JSplitPane','java.awt.Dimension',['org.openscience.jmol.app.jmolpanel.console.AppConsole','.ExecuteCommandThread']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AppConsole", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.console.JmolConsole', ['org.openscience.jmol.app.jmolpanel.console.EnterListener', 'org.jmol.api.JmolDropEditor']);
C$.$classes$=[['ExecuteCommandThread',0],['ConsoleTextPane',0],['ConsoleDocument',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buttonPanel=Clazz.new_($I$(9,1));
this.isError=false;
this.undoStack=Clazz.array(String, [C$.MAXUNDO + 1]);
this.undoPointer=0;
this.undoSaved=false;
},1);

C$.$fields$=[['Z',['isError','undoSaved','dontsave'],'I',['fontSize','undoPointer'],'O',['jcd','javax.swing.JDialog','console','org.openscience.jmol.app.jmolpanel.console.AppConsole.ConsoleTextPane','varButton','org.jmol.api.JmolAbstractButton','+haltButton','+closeButton','+clearButton','+stepButton','+helpButton','+undoButton','+redoButton','+checkButton','+topButton','+fontButton','buttonPanel','javax.swing.JPanel','vBar','javax.swing.JScrollBar','+hBar','execThread','org.openscience.jmol.app.jmolpanel.console.AppConsole.ExecuteCommandThread','undoStack','String[]','statusListener','org.jmol.api.JmolStatusListener']]
,['I',['MAXUNDO']]]

Clazz.newMeth(C$, 'loadContent$S', function (script) {
this.getScriptEditor$().setVisible$Z(true);
this.getScriptEditor$().loadContent$S(script);
});

Clazz.newMeth(C$, 'loadFile$S', function (fileName) {
this.getScriptEditor$().setVisible$Z(true);
this.getScriptEditor$().loadFile$S(fileName);
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'start$org_jmol_viewer_Viewer', function (vwr) {
p$1.setup$org_jmol_viewer_Viewer$java_awt_Container$S.apply(this, [vwr, null, null]);
});

Clazz.newMeth(C$, 'c$$org_jmol_api_JmolViewer$java_awt_Container$S', function (vwr, externalContainer, enabledButtons) {
Clazz.super_(C$, this);
p$1.setup$org_jmol_viewer_Viewer$java_awt_Container$S.apply(this, [vwr, externalContainer, enabledButtons]);
}, 1);

Clazz.newMeth(C$, 'setup$org_jmol_viewer_Viewer$java_awt_Container$S', function (vwr, externalContainer, enabledButtons) {
System.out.println$S("appConsole " + System.getProperty$S("os.name"));
if (!$I$(10).isJS) {
var im=$I$(11).get$O("TextPane.focusInputMap");
im.put$javax_swing_KeyStroke$O($I$(12).getKeyStroke$I$I(65, 256), "select-all");
im.put$javax_swing_KeyStroke$O($I$(12).getKeyStroke$I$I(67, 256), "copy-to-clipboard");
im.put$javax_swing_KeyStroke$O($I$(12).getKeyStroke$I$I(86, 256), "paste-from-clipboard");
}this.setViewer$org_jmol_viewer_Viewer(vwr);
var w=$I$(13).getWindow$java_awt_Container(vwr.display);
this.vwrFrame=(Clazz.instanceOf(w, "javax.swing.JFrame") ? w : null);
if (externalContainer == null ) {
this.jcd=Clazz.new_($I$(14,1).c$$java_awt_Frame$S$Z,[this.vwrFrame, null, false]);
this.jcd.setSize$I$I(645, 400);
this.jcd.setLocationRelativeTo$java_awt_Component(this.vwrFrame);
this.externalContainer=this.jcd;
} else {
this.externalContainer=externalContainer;
vwr.setConsole$org_jmol_api_JmolAppConsoleInterface(this);
}this.addWindowListener$();
this.layoutWindow$S(enabledButtons);
Clazz.new_($I$(15,1).c$$org_jmol_api_JmolStatusListener$org_jmol_viewer_Viewer$org_jmol_api_JmolDropEditor,[this.statusListener, vwr, this]);
}, p$1);

Clazz.newMeth(C$, 'updateFontSize$', function () {
var scale=(function(a,f){return f.apply(null,a)})(["" + this.vwr.getProperty$S$S$O("DATA_API", "getPreference", "consoleFontScale")],$I$(5).parseInt$S);
scale=(scale < 0 ? 1 : scale) % 5;
this.fontSize=scale * 4 + 12;
if (this.console != null ) this.console.setFont$java_awt_Font(Clazz.new_($I$(16,1).c$$S$I$I,["dialog", 0, this.fontSize]));
});

Clazz.newMeth(C$, 'sendConsoleEcho$S', function (strEcho) {
if (strEcho == null ) this.updateLabels$();
 else if (strEcho.equals$O("\u0000")) this.sendConsoleMessage$S(null);
 else this.console.outputEcho$S(strEcho);
p$1.setError$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'sendConsoleMessage$S', function (strStatus) {
if (strStatus == null ) {
this.console.clearContent$S(null);
this.console.outputStatus$S("");
} else if (strStatus.indexOf$S("ERROR:") >= 0) {
this.console.outputError$S(strStatus);
p$1.setError$Z.apply(this, [true]);
} else {
this.console.outputStatus$S(strStatus);
this.isError=false;
}});

Clazz.newMeth(C$, 'setButton$S', function (label) {
var b=C$.superclazz.prototype.setButton$S.apply(this, [label]);
this.buttonPanel.add$java_awt_Component(b);
return b;
});

Clazz.newMeth(C$, 'setupLabels0$java_util_Map', function (labels) {
labels.put$O$O("Check", $I$(17).$$S("Check"));
labels.put$O$O("Clear", $I$(17).$$S("Clear"));
labels.put$O$O("Close", $I$(17).$$S("Close"));
labels.put$O$O("Halt", $I$(17).$$S("Halt"));
labels.put$O$O("Help", $I$(17).$$S("Help"));
labels.put$O$O("Editor", $I$(17).$$S("Editor"));
labels.put$O$O("History", $I$(17).$$S("History"));
labels.put$O$O("State", $I$(17).$$S("State"));
labels.put$O$O("Step", $I$(17).$$S("Step"));
labels.put$O$O("Top", $I$(17).$$S("Top"));
labels.put$O$O("Undo", $I$(17).$$S("Undo"));
labels.put$O$O("Redo", $I$(17).$$S("Redo"));
labels.put$O$O("Font", $I$(17).$$S("Font"));
labels.put$O$O("Variables", $I$(17).$$S("Variables"));
});

Clazz.newMeth(C$, 'layoutWindow$S', function (enabledButtons) {
this.setTitle$();
this.console=Clazz.new_($I$(18,1).c$$org_openscience_jmol_app_jmolpanel_console_AppConsole,[this, null, this]);
this.console.setDropTarget$java_awt_dnd_DropTarget(Clazz.new_([this.console, Clazz.new_($I$(15,1).c$$org_jmol_api_JmolStatusListener$org_jmol_viewer_Viewer$org_jmol_api_JmolDropEditor,[null, this.vwr, this])],$I$(19,1).c$$java_awt_Component$java_awt_dnd_DropTargetListener));
this.console.setPrompt$();
this.console.setDragEnabled$Z(true);
if (enabledButtons == null ) enabledButtons="Editor Variables Clear History State UndoRedo Close Font Help";
var consolePane=Clazz.new_($I$(20,1).c$$java_awt_Component,[this.console]);
this.vBar=consolePane.getVerticalScrollBar$();
this.hBar=consolePane.getHorizontalScrollBar$();
var tokens=$I$(5).getTokens$S(enabledButtons);
for (var i=0; i < tokens.length; i++) p$1.enableButton$S.apply(this, [tokens[i]]);

C$.setEnabled$org_jmol_api_JmolAbstractButton$Z(this.undoButton, false);
C$.setEnabled$org_jmol_api_JmolAbstractButton$Z(this.redoButton, false);
var buttonPanelWrapper=Clazz.new_($I$(9,1));
buttonPanelWrapper.setLayout$java_awt_LayoutManager(Clazz.new_($I$(21,1)));
buttonPanelWrapper.add$java_awt_Component$O(this.buttonPanel, "Center");
var spane=Clazz.new_($I$(22,1).c$$I$java_awt_Component$java_awt_Component,[0, consolePane, buttonPanelWrapper]);
consolePane.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(23,1).c$$I$I,[300, 300]));
consolePane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(23,1).c$$I$I,[5000, 5000]));
buttonPanelWrapper.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(23,1).c$$I$I,[60, 60]));
buttonPanelWrapper.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(23,1).c$$I$I,[1000, 60]));
buttonPanelWrapper.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(23,1).c$$I$I,[60, 60]));
spane.setDividerSize$I(0);
spane.setResizeWeight$D(0.95);
this.getPane$().add$java_awt_Component(spane);
});

Clazz.newMeth(C$, 'setEnabled$org_jmol_api_JmolAbstractButton$Z', function (button, TF) {
if (button != null ) button.setEnabled$Z(TF);
}, 1);

Clazz.newMeth(C$, 'enableButton$S', function (name) {
switch (("Check     Clear     Close     Editor    Halt      Help      History   State     Step      Top       UndoRedo  Font      Variables ").indexOf$S(name)) {
case 0:
this.checkButton=this.setButton$S("Check");
break;
case 10:
this.clearButton=this.setButton$S("Clear");
break;
case 20:
this.closeButton=this.setButton$S("Close");
break;
case 30:
this.editButton=this.setButton$S("Editor");
break;
case 40:
this.haltButton=this.setButton$S("Halt");
break;
case 50:
this.helpButton=this.setButton$S("Help");
break;
case 60:
this.historyButton=this.setButton$S("History");
break;
case 70:
this.stateButton=this.setButton$S("State");
break;
case 80:
this.stepButton=this.setButton$S("Step");
break;
case 90:
this.topButton=this.setButton$S("Top");
break;
case 100:
this.undoButton=this.setButton$S("Undo");
this.redoButton=this.setButton$S("Redo");
break;
case 110:
this.varButton=this.setButton$S("Variables");
break;
case 120:
this.fontButton=this.setButton$S("Font");
this.fontButton.setToolTipText$S($I$(17).$$S("toggle font size"));
}
}, p$1);

Clazz.newMeth(C$, 'setError$Z', function (TF) {
this.isError=TF;
}, p$1);

Clazz.newMeth(C$, 'enterPressed$', function () {
this.executeCommandAsThread$S(null);
});

Clazz.newMeth(C$, 'execute$S', function (strCommand) {
this.executeCommandAsThread$S(strCommand);
});

Clazz.newMeth(C$, 'executeCommandAsThread$S', function (strCommand) {
if (strCommand == null ) strCommand=this.console.getCommandString$().trim$();
if (strCommand.equalsIgnoreCase$S("undo")) {
p$1.undoRedo$Z.apply(this, [false]);
this.console.appendNewline$();
this.console.setPrompt$();
return;
} else if (strCommand.equalsIgnoreCase$S("redo")) {
p$1.undoRedo$Z.apply(this, [true]);
this.console.appendNewline$();
this.console.setPrompt$();
return;
} else if (strCommand.equalsIgnoreCase$S("exitJmol")) {
System.exit$I(0);
} else if (strCommand.startsWith$S("font console")) {
var s=strCommand.substring$I(12);
if ($I$(5).parseInt$S(s) > 0) s="sansserif-" + s;
this.console.setFont$java_awt_Font($I$(16).decode$S(s));
strCommand=" ";
} else if (strCommand.length$() == 0) {
strCommand="!resume";
p$1.undoSetEnabled.apply(this, []);
}if (strCommand.length$() > 0) {
this.execThread=Clazz.new_($I$(24,1).c$$S,[this, null, strCommand]);
this.execThread.start$();
}});

Clazz.newMeth(C$, 'undoClear', function () {
if (this.undoButton == null ) return;
for (var i=0; i <= C$.MAXUNDO; i++) this.undoStack[i]=null;

this.undoPointer=0;
this.undoButton.setEnabled$Z(false);
this.redoButton.setEnabled$Z(false);
}, p$1);

Clazz.newMeth(C$, 'undoSetEnabled', function () {
if (this.undoButton == null ) return false;
var undoAllowed=(this.vwr.getBooleanProperty$S("undo") && this.vwr.getBooleanProperty$S("preserveState") );
this.undoButton.setEnabled$Z(undoAllowed && this.undoPointer > 0  && this.undoStack[this.undoPointer - 1] != null  );
this.redoButton.setEnabled$Z(undoAllowed && this.undoPointer < C$.MAXUNDO  && this.undoStack[this.undoPointer + 1] != null  );
return undoAllowed;
}, p$1);

Clazz.newMeth(C$, 'undoRedo$Z', function (isRedo) {
if (this.undoButton == null ) return;
if (!p$1.undoSetEnabled.apply(this, [])) return;
var ptr=this.undoPointer + (isRedo ? 1 : -1);
if (!this.undoSaved) {
p$1.undoSave$Z.apply(this, [false]);
}if (ptr > C$.MAXUNDO || ptr < 0 ) return;
var state=this.undoStack[ptr];
if (state != null ) {
state += "#----";
p$1.setError$Z.apply(this, [false]);
this.vwr.evalStringQuiet$S(state);
this.undoPointer=ptr;
}p$1.undoSetEnabled.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'undoSave$Z', function (incrementPtr) {
if (this.undoButton == null ) return;
if (!this.vwr.getBooleanProperty$S("undo") || !this.vwr.getBooleanProperty$S("preserveState") ) return;
for (var i=this.undoPointer + 1; i <= C$.MAXUNDO; i++) this.undoStack[i]=null;

(function(a,f){return f.apply(null,a)})(["(console"],$I$(1).startTimer$S);
try {
this.undoStack[this.undoPointer]=this.vwr.getProperty$S$S$O("readable", "stateInfo", null);
if (incrementPtr && this.undoPointer == C$.MAXUNDO ) {
for (var i=1; i <= C$.MAXUNDO; i++) this.undoStack[i - 1]=this.undoStack[i];

this.undoStack[C$.MAXUNDO]=null;
} else if (incrementPtr) this.undoPointer++;
} catch (e) {
if (Clazz.exceptionOf(e,"Error")){
this.dontsave=true;
} else {
throw e;
}
}
if (this.dontsave || (function(a,f){return f.apply(null,a)})(["(console", false],$I$(1).checkTimer$S$Z) > 2000 ) {
this.vwr.setBooleanProperty$S$Z("undo", false);
p$1.undoClear.apply(this, []);
$I$(1).info$S("command processing slow; undo disabled");
} else {
p$1.undoSetEnabled.apply(this, []);
}this.undoSaved=true;
}, p$1);

Clazz.newMeth(C$, 'executeCommand$S', function (strCommand) {
var doWait;
this.console.appendNewline$();
this.console.setPrompt$();
if (strCommand.length$() == 0) {
this.console.grabFocus$();
return;
}if (strCommand.charAt$I(0) != "!" && this.vwr.getBooleanProperty$S("executionPaused") ) strCommand="!" + strCommand;
if (strCommand.charAt$I(0) != "!" && !this.isError ) {
p$1.undoSave$Z.apply(this, [true]);
}p$1.setError$Z.apply(this, [false]);
this.undoSaved=false;
var strErrorMessage=null;
doWait=(strCommand.indexOf$S("WAITTEST ") == 0);
if (doWait) {
var o=this.vwr.scriptWaitStatus$S$S(strCommand.substring$I(5), "+fileLoaded,+scriptStarted,+scriptStatus,+scriptEcho,+scriptTerminated");
if (Clazz.instanceOf(o, "java.util.List")) {
var info=o;
for (var i=0; i < info.size$(); i++) {
var statusRecordSet=info.get$I(i);
for (var j=0; j < statusRecordSet.size$(); j++) {
var statusRecord=statusRecordSet.get$I(j);
(function(a,f){return f.apply(null,a)})(["msg#=" + statusRecord.get$I(0) + " " + statusRecord.get$I(1) + " intInfo=" + statusRecord.get$I(2) + " stringInfo=" + statusRecord.get$I(3) ],$I$(1).info$S);
}
}
}this.console.appendNewline$();
} else {
var isScriptExecuting=this.vwr.isScriptExecuting$();
strErrorMessage="";
var str=strCommand;
var isInterrupt=(str.charAt$I(0) == "!");
if (isInterrupt) str=str.substring$I(1);
if (this.vwr.checkHalt$S$Z(str, isInterrupt)) strErrorMessage=(isScriptExecuting ? "script execution halted with " + strCommand : "no script was executing - use exitJmol to exit Jmol");
if (strErrorMessage.length$() > 0) {
this.console.outputError$S(strErrorMessage);
} else {
this.vwr.script$S(strCommand + (strCommand.indexOf$S("\u0001##") >= 0 ? "" : "\u0001## EDITOR_IGNORE ##"));
}}if (strCommand.indexOf$S("\u0001##") < 0) this.console.grabFocus$();
});

Clazz.newMeth(C$, 'clearContent$S', function (text) {
this.console.clearContent$S(text);
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.console.grabFocus$();
var source=e.getSource$();
if (source === this.topButton ) {
if (this.scriptEditor != null ) this.scriptEditor.gotoTop$();
return;
}if (source === this.checkButton ) {
if (this.scriptEditor != null ) this.scriptEditor.checkScript$();
}if (source === this.stepButton ) {
if (this.scriptEditor != null ) this.scriptEditor.doStep$();
return;
}if (source === this.closeButton ) {
this.setVisible$Z(false);
return;
}if (source === this.haltButton ) {
this.vwr.haltScriptExecution$();
return;
}if (source === this.varButton ) {
this.execute$S("!show variables");
return;
}if (source === this.clearButton ) {
this.console.clearContent$S(null);
return;
}if (source === this.undoButton ) {
p$1.undoRedo$Z.apply(this, [false]);
return;
}if (source === this.redoButton ) {
p$1.undoRedo$Z.apply(this, [true]);
return;
}if (source === this.fontButton ) {
var d=this.vwr.getProperty$S$S$O("DATA_API", "getPreference", null);
if (d != null ) d.setFontScale$I(-1);
return;
}if (source === this.helpButton ) {
this.vwr.script$S("help");
}C$.superclazz.prototype.actionPerformed$java_awt_event_ActionEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'getText$', function () {
return this.console.getText$();
});

Clazz.newMeth(C$, 'setStatusListener$org_jmol_api_JmolStatusListener', function (myStatusListener) {
this.statusListener=myStatusListener;
});

C$.$static$=function(){C$.$static$=0;
C$.MAXUNDO=10;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AppConsole, "ExecuteCommandThread", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['strCommand']]]

Clazz.newMeth(C$, 'c$$S', function (command) {
Clazz.super_(C$, this);
this.strCommand=command;
this.setName$S("appConsoleExecuteCommandThread");
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.this$0.executeCommand$S.apply(this.this$0, [this.strCommand]);
} catch (ie) {
if (Clazz.exceptionOf(ie,"Exception")){
$I$(1).errorEx$S$Throwable("execution command interrupted!", ie);
} else {
throw ie;
}
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AppConsole, "ConsoleTextPane", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JTextPane', 'java.awt.event.KeyListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.checking=false;
},1);

C$.$fields$=[['Z',['checking','checkingCommand'],'S',['pageUpBuffer'],'O',['consoleDoc','org.openscience.jmol.app.jmolpanel.console.AppConsole.ConsoleDocument','enterListener','org.openscience.jmol.app.jmolpanel.console.EnterListener','checkTimer','javax.swing.Timer']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_jmolpanel_console_AppConsole', function (appConsole) {
;C$.superclazz.c$$javax_swing_text_StyledDocument.apply(this,[Clazz.new_($I$(2,1),[this, null])]);C$.$init$.apply(this);
this.this$0.updateFontSize$.apply(this.this$0, []);
this.consoleDoc=this.getDocument$();
this.consoleDoc.setConsoleTextPane$org_openscience_jmol_app_jmolpanel_console_AppConsole_ConsoleTextPane(this);
this.enterListener=appConsole;
this.addKeyListener$java_awt_event_KeyListener(this);
}, 1);

Clazz.newMeth(C$, 'getCommandString$', function () {
var cmd=this.consoleDoc.getCommandString$();
return cmd;
});

Clazz.newMeth(C$, 'setPrompt$', function () {
this.consoleDoc.setPrompt$();
});

Clazz.newMeth(C$, 'appendNewline$', function () {
this.consoleDoc.appendNewline$();
});

Clazz.newMeth(C$, 'outputError$S', function (strError) {
this.consoleDoc.outputError$S(strError);
});

Clazz.newMeth(C$, 'outputErrorForeground$S', function (strError) {
this.consoleDoc.outputErrorForeground$S(strError);
});

Clazz.newMeth(C$, 'outputEcho$S', function (strEcho) {
this.consoleDoc.outputEcho$S(strEcho);
});

Clazz.newMeth(C$, 'outputStatus$S', function (strStatus) {
this.consoleDoc.outputStatus$S(strStatus);
});

Clazz.newMeth(C$, 'enterPressed$', function () {
if (this.enterListener != null ) this.enterListener.enterPressed$();
});

Clazz.newMeth(C$, 'clearContent$S', function (text) {
this.consoleDoc.clearContent$();
if (text != null ) this.consoleDoc.outputEcho$S(text);
this.setPrompt$();
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (e) {
this.processKey$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
this.processKey$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (e) {
this.processKey$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'processKey$java_awt_event_KeyEvent', function (ke) {
var kcode=ke.getKeyCode$();
var kid=ke.getID$();
if (kid == 401) {
switch (kcode) {
case 67:
if (ke.isControlDown$() && ke.isAltDown$() ) {
ke.consume$();
this.this$0.vwr.script$S("!quit");
return;
}break;
case 9:
ke.consume$();
if (this.consoleDoc.isAtEnd$()) {
var cmd=this.b$['org.jmol.console.GenericConsole'].completeCommand$S.apply(this.b$['org.jmol.console.GenericConsole'], [this.consoleDoc.getCommandString$()]);
if (cmd != null ) try {
this.consoleDoc.replaceCommand$S$Z(cmd, false);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
this.this$0.nTab++;
return;
}break;
case 27:
ke.consume$();
try {
this.consoleDoc.replaceCommand$S$Z("", false);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
break;
}
this.this$0.nTab=0;
}if ((kcode == 38 || kcode == 40 ) && ke.isControlDown$() && this.consoleDoc.isAtEnd$()  ) {
if (kid == 401) {
this.recallCommand$Z$Z(kcode == 38, true);
}ke.consume$();
return;
}this.pageUpBuffer=null;
if (kcode == 38 && kid == 401  && this.consoleDoc.isAtEnd$() ) {
this.recallCommand$Z$Z(true, false);
ke.consume$();
} else if (kcode == 40 && kid == 401  && this.consoleDoc.isAtEnd$() ) {
this.recallCommand$Z$Z(false, false);
ke.consume$();
} else {
if (!this.checkingCommand && kid == 402  && ke.getModifiers$() < 2  && (kcode == 32 || kcode > 40 && kcode < 400   || kcode == 8 ) ) {
this.checkingCommand=true;
if (this.checkTimer == null ) {
this.checkTimer=Clazz.new_([100, ((P$.AppConsole$ConsoleTextPane$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppConsole$ConsoleTextPane$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.console.AppConsole.ConsoleTextPane'].checkingCommand=false;
this.b$['org.openscience.jmol.app.jmolpanel.console.AppConsole.ConsoleTextPane'].checkCommand$.apply(this.b$['org.openscience.jmol.app.jmolpanel.console.AppConsole.ConsoleTextPane'], []);
});
})()
), Clazz.new_(P$.AppConsole$ConsoleTextPane$1.$init$,[this, null]))],$I$(3,1).c$$I$java_awt_event_ActionListener);
this.checkTimer.setRepeats$Z(false);
this.checkTimer.start$();
} else {
this.checkTimer.restart$();
}}}});

Clazz.newMeth(C$, 'recallCommand$Z$Z', function (up, pageup) {
var cmd=(pageup ? this.this$0.vwr.historyFind$S$I(this.pageUpBuffer == null  ? (this.pageUpBuffer=this.consoleDoc.getCommandString$()) : this.pageUpBuffer, up ? -1 : 1) : this.this$0.vwr.getSetHistory$I(up ? -1 : 1));
if (cmd == null ) {
(function(a,f){return f.apply(null,a)})([((P$.AppConsole$ConsoleTextPane$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppConsole$ConsoleTextPane$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.b$['org.openscience.jmol.app.jmolpanel.console.AppConsole'].hBar.setValue$I(0);
} catch (e) {
}
});
})()
), Clazz.new_(P$.AppConsole$ConsoleTextPane$2.$init$,[this, null]))],$I$(4).invokeLater$Runnable);
return;
}var isError=false;
try {
if (cmd.endsWith$S("#??")) {
isError=true;
cmd=cmd.substring$I$I(0, cmd.indexOf$S("#??"));
}cmd=$I$(5).trim$S$S(cmd, ";");
this.consoleDoc.replaceCommand$S$Z(cmd, isError);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'checkCommand$', function () {
var strCommand=this.consoleDoc.getCommandString$();
if (strCommand.length$() == 0 || strCommand.charAt$I(0) == "!"  || this.this$0.vwr.isScriptExecuting$()  || this.this$0.vwr.getBooleanProperty$S("executionPaused") ) return;
this.checking=true;
var res=this.this$0.vwr.scriptCheck$S(strCommand);
this.consoleDoc.colorCommand$javax_swing_text_SimpleAttributeSet(Clazz.instanceOf(res, "java.lang.String") ? this.consoleDoc.attError : this.consoleDoc.attUserInput);
this.checking=false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AppConsole, "ConsoleDocument", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.DefaultStyledDocument');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['offsetAfterPrompt'],'O',['consoleTextPane','org.openscience.jmol.app.jmolpanel.console.AppConsole.ConsoleTextPane','attError','javax.swing.text.SimpleAttributeSet','+attEcho','+attPrompt','+attUserInput','+attStatus','positionBeforePrompt','javax.swing.text.Position','+positionAfterPrompt']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.attError=Clazz.new_($I$(6,1));
(function(a,f){return f.apply(null,a)})([this.attError, $I$(8).red],$I$(7).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color);
this.attPrompt=Clazz.new_($I$(6,1));
(function(a,f){return f.apply(null,a)})([this.attPrompt, $I$(8).magenta],$I$(7).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color);
this.attUserInput=Clazz.new_($I$(6,1));
(function(a,f){return f.apply(null,a)})([this.attUserInput, $I$(8).black],$I$(7).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color);
this.attEcho=Clazz.new_($I$(6,1));
(function(a,f){return f.apply(null,a)})([this.attEcho, $I$(8).blue],$I$(7).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color);
$I$(7).setBold$javax_swing_text_MutableAttributeSet$Z(this.attEcho, true);
this.attStatus=Clazz.new_($I$(6,1));
(function(a,f){return f.apply(null,a)})([this.attStatus, $I$(8).black],$I$(7).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color);
$I$(7).setItalic$javax_swing_text_MutableAttributeSet$Z(this.attStatus, true);
}, 1);

Clazz.newMeth(C$, 'setConsoleTextPane$org_openscience_jmol_app_jmolpanel_console_AppConsole_ConsoleTextPane', function (consoleTextPane) {
this.consoleTextPane=consoleTextPane;
});

Clazz.newMeth(C$, 'isAtEnd$', function () {
return this.consoleTextPane.getCaretPosition$() == this.getLength$();
});

Clazz.newMeth(C$, 'clearContent$', function () {
try {
C$.superclazz.prototype.remove$I$I.apply(this, [0, this.getLength$()]);
} catch (exception) {
if (Clazz.exceptionOf(exception,"javax.swing.text.BadLocationException")){
$I$(1).errorEx$S$Throwable("Could not clear script window content", exception);
} else {
throw exception;
}
}
});

Clazz.newMeth(C$, 'setPrompt$', function () {
try {
C$.superclazz.prototype.insertString$I$S$javax_swing_text_AttributeSet.apply(this, [this.getLength$(), "$ ", this.attPrompt]);
this.setOffsetPositions$();
this.consoleTextPane.setCaretPosition$I(this.offsetAfterPrompt);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setOffsetPositions$', function () {
try {
this.offsetAfterPrompt=this.getLength$();
this.positionBeforePrompt=this.createPosition$I(this.offsetAfterPrompt - 2);
this.positionAfterPrompt=this.createPosition$I(this.offsetAfterPrompt - 1);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setNoPrompt$', function () {
try {
this.offsetAfterPrompt=this.getLength$();
this.positionAfterPrompt=this.positionBeforePrompt=this.createPosition$I(this.offsetAfterPrompt);
this.consoleTextPane.setCaretPosition$I(this.offsetAfterPrompt);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'outputBeforePrompt$S$javax_swing_text_SimpleAttributeSet', function (str, attribute) {
try {
var pt=this.consoleTextPane.getCaretPosition$();
var caretPosition=this.createPosition$I(pt);
pt=this.positionBeforePrompt.getOffset$();
C$.superclazz.prototype.insertString$I$S$javax_swing_text_AttributeSet.apply(this, [pt, str + "\n", attribute]);
this.offsetAfterPrompt+=str.length$() + 1;
this.positionBeforePrompt=this.createPosition$I(this.offsetAfterPrompt - 2);
this.positionAfterPrompt=this.createPosition$I(this.offsetAfterPrompt - 1);
pt=caretPosition.getOffset$();
this.consoleTextPane.setCaretPosition$I(pt);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
this.consoleTextPane.setCaretPosition$I(this.getLength$());
} else {
throw e;
}
}
(function(a,f){return f.apply(null,a)})([((P$.AppConsole$ConsoleDocument$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppConsole$ConsoleDocument$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.b$['org.openscience.jmol.app.jmolpanel.console.AppConsole'].vBar.setValue$I(this.b$['org.openscience.jmol.app.jmolpanel.console.AppConsole'].vBar.getMaximum$());
} catch (e) {
}
});
})()
), Clazz.new_(P$.AppConsole$ConsoleDocument$1.$init$,[this, null]))],$I$(4).invokeLater$Runnable);
});

Clazz.newMeth(C$, 'outputError$S', function (strError) {
this.outputBeforePrompt$S$javax_swing_text_SimpleAttributeSet(strError, this.attError);
});

Clazz.newMeth(C$, 'outputErrorForeground$S', function (strError) {
try {
C$.superclazz.prototype.insertString$I$S$javax_swing_text_AttributeSet.apply(this, [this.getLength$(), strError + "\n", this.attError]);
this.consoleTextPane.setCaretPosition$I(this.getLength$());
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'outputEcho$S', function (strEcho) {
this.outputBeforePrompt$S$javax_swing_text_SimpleAttributeSet(strEcho, this.attEcho);
});

Clazz.newMeth(C$, 'outputStatus$S', function (strStatus) {
this.outputBeforePrompt$S$javax_swing_text_SimpleAttributeSet(strStatus, this.attStatus);
});

Clazz.newMeth(C$, 'appendNewline$', function () {
try {
C$.superclazz.prototype.insertString$I$S$javax_swing_text_AttributeSet.apply(this, [this.getLength$(), "\n", this.attUserInput]);
this.consoleTextPane.setCaretPosition$I(this.getLength$());
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'insertString$I$S$javax_swing_text_AttributeSet', function (offs, str, a) {
var ichNewline=str.indexOf$I("\n");
if (ichNewline != 0 || str != "\n" && str.length$() > 0  ) {
if (offs < this.offsetAfterPrompt) {
offs=this.getLength$();
}C$.superclazz.prototype.insertString$I$S$javax_swing_text_AttributeSet.apply(this, [offs, str, a === this.attError  ? a : this.attUserInput]);
this.consoleTextPane.setCaretPosition$I(offs + str.length$());
}if (ichNewline >= 0) {
this.consoleTextPane.enterPressed$();
}});

Clazz.newMeth(C$, 'getCommandString$', function () {
var strCommand="";
try {
var cmdStart=this.positionAfterPrompt.getOffset$();
strCommand=this.getText$I$I(cmdStart, this.getLength$() - cmdStart);
while (strCommand.length$() > 0 && strCommand.charAt$I(0) == " " )strCommand=strCommand.substring$I(1);

} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
e.printStackTrace$();
} else {
throw e;
}
}
return strCommand;
});

Clazz.newMeth(C$, 'remove$I$I', function (offs, len) {
if (offs < this.offsetAfterPrompt) {
len-=this.offsetAfterPrompt - offs;
if (len <= 0) return;
offs=this.offsetAfterPrompt;
}C$.superclazz.prototype.remove$I$I.apply(this, [offs, len]);
});

Clazz.newMeth(C$, 'replace$I$I$S$javax_swing_text_AttributeSet', function (offs, length, str, attrs) {
if (offs < this.offsetAfterPrompt) {
if (offs + length < this.offsetAfterPrompt) {
offs=this.getLength$();
length=0;
} else {
length-=this.offsetAfterPrompt - offs;
offs=this.offsetAfterPrompt;
}}C$.superclazz.prototype.replace$I$I$S$javax_swing_text_AttributeSet.apply(this, [offs, length, str, attrs]);
});

Clazz.newMeth(C$, 'replaceCommand$S$Z', function (newCommand, isError) {
if (this.positionAfterPrompt === this.positionBeforePrompt ) return;
this.replace$I$I$S$javax_swing_text_AttributeSet(this.offsetAfterPrompt, this.getLength$() - this.offsetAfterPrompt, newCommand, isError ? this.attError : this.attUserInput);
});

Clazz.newMeth(C$, 'colorCommand$javax_swing_text_SimpleAttributeSet', function (att) {
if (this.positionAfterPrompt === this.positionBeforePrompt ) return;
this.setCharacterAttributes$I$I$javax_swing_text_AttributeSet$Z(this.offsetAfterPrompt, this.getLength$() - this.offsetAfterPrompt, att, true);
});
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
