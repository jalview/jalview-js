(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.JSMouse']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextListener", null, null, ['java.awt.event.KeyListener', 'java.awt.event.FocusListener', 'javax.swing.event.ChangeListener', 'java.beans.PropertyChangeListener', 'javax.swing.event.DocumentListener', 'javax.swing.event.CaretListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['haveDocument','working'],'I',['lastKeyEvent'],'O',['txtComp','javax.swing.text.JTextComponent','ui','swingjs.plaf.JSTextUI']]]

Clazz.newMeth(C$, 'c$$swingjs_plaf_JSTextUI$javax_swing_text_JTextComponent', function (ui, txtComp) {
;C$.$init$.apply(this);
this.txtComp=txtComp;
this.ui=ui;
}, 1);

Clazz.newMeth(C$, 'checkDocument$', function () {
if (!this.haveDocument && this.txtComp.getDocument$() != null  ) {
this.haveDocument=true;
this.txtComp.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(this);
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (e) {
var prop=e.getPropertyName$();
switch (prop) {
case "font":
case "foreground":
case "preferredSize":
var txtComp=e.getSource$();
(txtComp.getUI$()).propertyChangedFromListener$java_beans_PropertyChangeEvent$S(e, prop);
break;
case "editable":
this.ui.setEditable$Z((e.getNewValue$()).booleanValue$());
break;
case "document":
if (e.getNewValue$() != null ) this.ui.updateRootView$();
break;
}
});

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
var txtComp=e.getSource$();
txtComp.秘repaint$();
});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (e) {
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
});

Clazz.newMeth(C$, 'handleJSTextEvent$swingjs_plaf_JSTextUI$I$O', function (ui, eventType, jqevent) {
var activeElement=(document.activeElement ||null);
if (activeElement !== ui.domNode ) return;
eventType=$I$(1).fixEventType$O$I(jqevent, eventType);
var keyCode=jqevent.keyCode ||0;
var markDot=ui.getNewCaretPosition$I$I(eventType, keyCode);
var mark=markDot.x;
var dot=markDot.y;
var setCaret=(mark != -2147483648);
switch (eventType) {
case 400:
break;
case 401:
if (keyCode == 13 || keyCode == 10 ) {
ui.handleEnter$();
} else if (keyCode != 8) {
setCaret=false;
}if (this.lastKeyEvent != 400) break;
case 402:
this.working=true;
if (ui.checkNewEditorTextValue$()) {
if (dot >= 0) {
ui.setJSMarkAndDot$I$I$Z(dot, dot, false);
setCaret=false;
}}this.working=false;
break;
}
this.lastKeyEvent=eventType;
if (setCaret) ui.setJavaMarkAndDot$java_awt_Point(markDot);
ui.setIgnoreEvent$O(jqevent);
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent', function (e) {
if (!this.working) this.ui.setJSText$();
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent', function (e) {
if (!this.working) this.ui.setJSText$();
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent', function (e) {
if (!this.working) this.ui.setJSText$();
});

Clazz.newMeth(C$, 'caretUpdate$javax_swing_event_CaretEvent', function (e) {
this.ui.caretUpdatedByProgram$javax_swing_event_CaretEvent(e);
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 08:17:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
