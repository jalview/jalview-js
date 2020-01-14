(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.JSKeyEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TextListener", null, null, ['java.awt.event.FocusListener', 'javax.swing.event.ChangeListener', 'java.beans.PropertyChangeListener', 'javax.swing.event.DocumentListener', 'javax.swing.event.CaretListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.txtComp=null;
this.haveDocument=false;
this.ui=null;
this.working=false;
this.lastKeyEvent=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_plaf_JSTextUI$javax_swing_text_JTextComponent', function (ui, txtComp) {
C$.$init$.apply(this);
this.txtComp=txtComp;
this.ui=ui;
}, 1);

Clazz.newMeth(C$, 'checkDocument$', function () {
if (!this.haveDocument && this.txtComp.getDocument$() != null  ) {
this.haveDocument=true;
this.txtComp.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(this);
}});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
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

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
var txtComp=e.getSource$();
txtComp.repaint$();
});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (e) {
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
});

Clazz.newMeth(C$, 'handleJSTextEvent$swingjs_plaf_JSTextUI$I$O', function (ui, eventType, jqevent) {
var markDot=ui.getNewCaretPosition$java_awt_Point(null);
var mark=markDot.x;
var dot=markDot.y;
var setCaret=(mark != -2147483648);
eventType=$I$(1).fixEventType$O$I(jqevent, eventType);
switch (eventType) {
case 400:
setCaret=false;
break;
case 401:
var keyCode=jqevent.keyCode ||0;
if (keyCode == 13 || keyCode == 10 ) ui.handleEnter$();
setCaret=false;
if (this.lastKeyEvent != 400) break;
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
return true;
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent', function (e) {
if (!this.working) this.ui.setJSTextDelayed$();
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent', function (e) {
if (!this.working) this.ui.setJSTextDelayed$();
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent', function (e) {
if (!this.working) this.ui.setJSTextDelayed$();
});

Clazz.newMeth(C$, ['caretUpdate$javax_swing_event_CaretEvent','caretUpdate$'], function (e) {
this.ui.caretUpdatedByProgram$javax_swing_event_CaretEvent(e);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
