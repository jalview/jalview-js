(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'Error','javax.swing.text.DefaultEditorKit','java.awt.Point',['swingjs.plaf.JSTextUI','.RootView'],'swingjs.JSToolkit','swingjs.JSKeyEvent','javax.swing.UIManager','javax.swing.text.DefaultCaret','javax.swing.SwingUtilities','javax.swing.plaf.InputMapUIResource','javax.swing.plaf.ActionMapUIResource','swingjs.plaf.TextListener','swingjs.api.js.DOMNode','swingjs.plaf.JSComponentUI','Boolean','java.awt.KeyboardFocusManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSTextUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSLightweightUI');
C$.defaultKit=null;
C$.markDot=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.defaultKit=Clazz.new_($I$(2));
C$.markDot=Clazz.new_($I$(3));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.editor=null;
this.editable=false;
this.rootView=null;
this.textListener=null;
this.useRootView=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.editable=true;
this.rootView=Clazz.new_($I$(4), [this, null]);
this.useRootView=false;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.editor.isOpaque$() && this.editor.isEnabled$() ) this.setBackgroundCUI$java_awt_Color(this.getBackground$());
this.setEditable$Z(this.editable);
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, ['handleJSEvent$O$I$O','handleJSEvent$'], function (target, eventType, jQueryEvent) {
var type=jQueryEvent.type ||null;
if ($I$(5).isMouseEvent$I(eventType)) {
return false;
}var b=this.checkAllowKey$O(jQueryEvent);
if (b != null ) return b.booleanValue$();
var keyCode=jQueryEvent.keyCode ||0;
var keyEvent=null;
var ret=false;
switch (eventType) {
case -2:
keyEvent=$I$(6).newJSKeyEvent$javax_swing_JComponent$O$I$Z(this.editor, jQueryEvent, 0, false);
if (keyEvent == null ) return true;
switch (keyCode) {
case 18:

jQueryEvent.preventDefault(); jQueryEvent.stopPropagation();
case 16:
case 17:
ret=true;
}
eventType=keyEvent.getID$();
break;
}
if (ret != true ) ret=this.textListener.handleJSTextEvent$swingjs_plaf_JSTextUI$I$O(this, eventType, jQueryEvent);
if (keyEvent != null ) {
this.editor.dispatchEvent$java_awt_AWTEvent(keyEvent);
if (keyEvent.isConsumed$()) {

jQueryEvent.preventDefault(); jQueryEvent.stopPropagation();
ret=true;
}}return ret;
});

Clazz.newMeth(C$, 'checkStopPropagation$O$Z', function (ev, handled) {
return false;
});

Clazz.newMeth(C$, 'installDefaults$', function () {
var prefix=this.getPropertyPrefix$();
var f=this.editor.getFont$();
if ((f == null ) || (Clazz.instanceOf(f, "javax.swing.plaf.UIResource")) ) {
this.editor.setFont$java_awt_Font($I$(7).getFont$O(prefix + ".font"));
}this.setColors$S(prefix);
var margin=this.editor.getMargin$();
if (margin == null  || Clazz.instanceOf(margin, "javax.swing.plaf.UIResource") ) {
this.editor.setMargin$java_awt_Insets($I$(7).getInsets$O(prefix + ".margin"));
}});

Clazz.newMeth(C$, 'setColors$S', function (prefix) {
var bg=this.editor.getBackground$();
if ((bg == null ) || (Clazz.instanceOf(bg, "javax.swing.plaf.UIResource")) ) {
this.editor.setBackground$java_awt_Color($I$(7).getColor$O(prefix + ".background"));
}if (!this.isAWT) {
var fg=this.editor.getForeground$();
if ((fg == null ) || (Clazz.instanceOf(fg, "javax.swing.plaf.UIResource")) ) {
this.editor.setForeground$java_awt_Color($I$(7).getColor$O(prefix + ".foreground"));
}}var dfg=this.editor.getDisabledTextColor$();
if ((dfg == null ) || (Clazz.instanceOf(dfg, "javax.swing.plaf.UIResource")) ) {
this.editor.setDisabledTextColor$java_awt_Color($I$(7).getColor$O(prefix + ".inactiveForeground"));
}dfg=$I$(7).getColor$O(prefix + ".inactiveBackground");
if (dfg != null ) this.inactiveBackground=dfg;
});

Clazz.newMeth(C$, 'installDefaults2$', function () {
var caret=this.editor.getCaret$();
if (caret == null  || Clazz.instanceOf(caret, "javax.swing.plaf.UIResource") ) {
this.editor.setCaret$javax_swing_text_Caret(((P$.JSTextUI$1||
(function(){var C$=Clazz.newClass(P$, "JSTextUI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.text.DefaultCaret'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
});

Clazz.newMeth(C$, 'isVisible$', function () {
return true;
});

Clazz.newMeth(C$, 'setVisible$Z', function (v) {
});

Clazz.newMeth(C$, 'isSelectionVisible$', function () {
return true;
});

Clazz.newMeth(C$, 'setSelectionVisible$Z', function (v) {
});

Clazz.newMeth(C$, 'setBlinkRate$I', function (rate) {
});

Clazz.newMeth(C$, 'getBlinkRate$', function () {
return 0;
});

Clazz.newMeth(C$, 'toString', function () {
return "caret[" + this.dot + "," + this.mark + "]" ;
});
})()
), Clazz.new_($I$(8), [this, null],P$.JSTextUI$1)));
}});

Clazz.newMeth(C$, 'uninstallDefaults$', function () {
if (Clazz.instanceOf(this.editor.getCaretColor$(), "javax.swing.plaf.UIResource")) {
this.editor.setCaretColor$java_awt_Color(null);
}if (Clazz.instanceOf(this.editor.getSelectionColor$(), "javax.swing.plaf.UIResource")) {
this.editor.setSelectionColor$java_awt_Color(null);
}if (Clazz.instanceOf(this.editor.getDisabledTextColor$(), "javax.swing.plaf.UIResource")) {
this.editor.setDisabledTextColor$java_awt_Color(null);
}if (Clazz.instanceOf(this.editor.getSelectedTextColor$(), "javax.swing.plaf.UIResource")) {
this.editor.setSelectedTextColor$java_awt_Color(null);
}if (Clazz.instanceOf(this.editor.getBorder$(), "javax.swing.plaf.UIResource")) {
this.editor.setBorder$javax_swing_border_Border(null);
}if (Clazz.instanceOf(this.editor.getMargin$(), "javax.swing.plaf.UIResource")) {
this.editor.setMargin$java_awt_Insets(null);
}});

Clazz.newMeth(C$, 'installKeyboardActions$', function () {
var km=this.getInputMap$();
if (km != null ) {
$I$(9).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.editor, 0, km);
}var map=this.getActionMap$();
if (map != null ) {
$I$(9).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.editor, map);
}});

Clazz.newMeth(C$, 'getInputMap$', function () {
var map=Clazz.new_($I$(10));
return map;
});

Clazz.newMeth(C$, 'getActionMap$', function () {
var mapName=this.classID + ".actionMap";
var map=$I$(7).get$O(mapName);
if (map == null ) {
map=this.createActionMap$();
if (map != null ) {
$I$(7).getLookAndFeelDefaults$().put$O$O(mapName, map);
}}return map;
});

Clazz.newMeth(C$, 'createActionMap$', function () {
var map=Clazz.new_($I$(11));
var actions=this.editor.getActions$();
var n=(actions == null  ? 0 : actions.length);
for (var i=0; i < n; i++) {
var a=actions[i];
map.put$O$javax_swing_Action(a.getValue$S("Name"), a);
}
return map;
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$', function () {
this.editor.setKeymap$javax_swing_text_Keymap(null);
$I$(9).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.editor, 2, null);
$I$(9).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.editor, null);
});

Clazz.newMeth(C$, 'getComponent$', function () {
return this.editor;
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.editor=jc;
this.textListener=Clazz.new_($I$(12).c$$swingjs_plaf_JSTextUI$javax_swing_text_JTextComponent,[this, this.editor]);
this.installDefaults$();
this.installDefaults2$();
this.installListeners$javax_swing_text_JTextComponent(this.editor);
this.installKeyboardActions$();
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
this.uninstallDefaults$();
jc.removeAll$();
var lm=jc.getLayout$();
if (Clazz.instanceOf(lm, "javax.swing.plaf.UIResource")) {
jc.setLayout$java_awt_LayoutManager(null);
}this.uninstallKeyboardActions$();
this.uninstallListeners$javax_swing_text_JTextComponent(this.editor);
this.editor=null;
this.textListener=null;
});

Clazz.newMeth(C$, 'installListeners$javax_swing_text_JTextComponent', function (b) {
var listener=this.textListener;
b.addFocusListener$java_awt_event_FocusListener(listener);
b.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
b.addCaretListener$javax_swing_event_CaretListener(listener);
});

Clazz.newMeth(C$, 'uninstallListeners$javax_swing_text_JTextComponent', function (b) {
var listener=this.textListener;
b.removeFocusListener$java_awt_event_FocusListener(listener);
b.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
b.getDocument$().removeDocumentListener$javax_swing_event_DocumentListener(listener);
});

Clazz.newMeth(C$, 'updateRootView$', function () {
});

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent', function (jc) {
var d=this.getPreferredSize$javax_swing_JComponent(jc);
var i=jc.getInsets$();
d.width+=i.left + i.right;
d.height+=i.top + i.bottom;
return d;
});

Clazz.newMeth(C$, 'getRootView$javax_swing_text_JTextComponent', function (tc) {
return this.rootView;
});

Clazz.newMeth(C$, 'create$javax_swing_text_Element', function (elem) {
return null;
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent', function (c) {
if (!this.useRootView) return C$.superclazz.prototype.getPreferredSize$javax_swing_JComponent.apply(this, [c]);
var i=c.getInsets$();
var d=c.getSize$();
if ((d.width > (i.left + i.right)) && (d.height > (i.top + i.bottom)) ) {
this.rootView.setSize$F$F(d.width - i.left - i.right , d.height - i.top - i.bottom );
} else if (d.width == 0 && d.height == 0 ) {
this.rootView.setSize$F$F(2147483647, 2147483647);
}d.width=(Math.min((this.rootView.getPreferredSpan$I(0)|0) + i.left + i.right , 2147483647)|0);
d.height=(Math.min((this.rootView.getPreferredSpan$I(1)|0) + i.top + i.bottom , 2147483647)|0);
return d;
});

Clazz.newMeth(C$, 'getEditorKit$javax_swing_text_JTextComponent', function (tc) {
return C$.defaultKit;
});

Clazz.newMeth(C$, 'handleEnter$', function () {
return false;
});

Clazz.newMeth(C$, 'setEditable$Z', function (editable) {
this.editable=editable;
if (this.focusNode == null ) return;
this.setEditableCSS$();
if (this.jc.isOpaque$()) {
var bg=this.getBackground$();
this.setBackgroundCUI$java_awt_Color(editable || !(Clazz.instanceOf(bg, "javax.swing.plaf.UIResource")) || this.inactiveBackground === this.colorUNKNOWN    ? bg : this.inactiveBackground);
}});

Clazz.newMeth(C$, 'setEditableCSS$', function () {
$I$(13).setAttr(this.focusNode, "readOnly", this.editable ? null : "TRUE");
});

Clazz.newMeth(C$, 'getInactiveTextColor$java_awt_Color', function (fg) {
return (!this.editor.isEnabled$() ? this.editor.getDisabledTextColor$() : !this.editor.isEditable$() ? this.inactiveForeground : fg);
});

Clazz.newMeth(C$, 'setCurrentText$', function () {
return (this.editor.getDocument$() == null  ? null : (this.currentText=this.editor.getText$()));
});

Clazz.newMeth(C$, 'checkNewEditorTextValue$', function () {
var val=this.getJSTextValue$();
if (val.equals$O(this.fixText$S(this.currentText))) return false;
this.editor.setTextFromUI$S(val);
this.setCurrentText$();
return true;
});

Clazz.newMeth(C$, 'setJSTextDelayed$', function () {
this.updateDOMNode$();
});

Clazz.newMeth(C$, 'focus$', function () {
if (!C$.superclazz.prototype.focus$.apply(this, [])) return false;
if (this.haveFocus$()) {
} else {
this.updateJSCursor$S("focus");
}return true;
});

Clazz.newMeth(C$, 'haveFocus$', function () {
return $I$(14).jquery.contains(this.focusNode, document.activeElement ||null);
});

Clazz.newMeth(C$, 'updateJSCursor$S', function (why) {
if (this.editor.getDocument$() == null  || this.editor.getText$().length$() == 0 ) return;
var start=this.editor.getCaret$().getMark$();
var end=this.editor.getCaret$().getDot$();
var r1=this.getJSNodePt$swingjs_api_js_DOMNode$I$I(this.focusNode, -1, start);
var r2=(end == start ? r1 : this.getJSNodePt$swingjs_api_js_DOMNode$I$I(this.focusNode, -1, end));
if (r1 == null  || r2 == null  ) return;
this.jsSelect$OA$OA$Z(r1, r2, start == end && why == "default" );
});

Clazz.newMeth(C$, 'getJSNodePt$swingjs_api_js_DOMNode$I$I', function (node, offset, pt) {
{
return [null, pt];
}
});

Clazz.newMeth(C$, 'jsSelect$OA$OA$Z', function (r1, r2, andScroll) {
this.setJSMarkAndDot$I$I$Z(r1[1] ||0, r2[1] ||0, andScroll);
});

Clazz.newMeth(C$, 'setJSMarkAndDot$I$I$Z', function (mark, dot, andScroll) {
try {
this.focusNode.setSelectionRange(Math.min(mark, dot), Math.max(mark, dot), (mark == dot ? "none" : mark < dot ? "forward" : "backward"));
} catch (e) {
}
});

Clazz.newMeth(C$, 'getJSMarkAndDot$java_awt_Point', function (pt) {
var node=this.focusNode;
var start=node.selectionStart ||0;
var end=node.selectionEnd ||1;
var reversed=node.selectionDirection == "backward" ||false;
pt.x=start;
pt.y=end;
return true;
});

Clazz.newMeth(C$, 'checkAllowKey$O', function (jQueryEvent) {
var b=true;
var checkEditable=false;
switch (jQueryEvent.type ||"") {
case "drop":
checkEditable=true;
break;
case "focusout":
case "dragover":
b=true;
break;
case "keydown":
case "keypress":
case "keyup":
switch (jQueryEvent.keyCode ||0) {
case 38:
case 40:
case 37:
case 39:
case 33:
case 34:
if (!jQueryEvent.altKey && !jQueryEvent.ctrlKey ||false) return null;
b=false;
break;
default:
checkEditable=true;
break;
}
break;
default:
return null;
}
if (checkEditable) {
if (this.editor.isEditable$() && !(Clazz.instanceOf(this.editor.getDocument$(), "javax.swing.text.html.HTMLDocument")) ) return null;
b=false;
}return $I$(15).valueOf$Z(b);
});

Clazz.newMeth(C$, 'viewToModel$javax_swing_text_JTextComponent$java_awt_Point$javax_swing_text_Position_BiasA', function (t, pt, biasReturn) {
pt.x=2147483647;
this.getJSMarkAndDot$java_awt_Point(pt);
return pt.y;
});

Clazz.newMeth(C$, 'setJavaMarkAndDot$java_awt_Point', function (markDot) {
var mark=markDot.x;
var dot=markDot.y;
var c=this.editor.getCaret$();
if (c.getMark$() == mark && c.getDot$() == dot ) return;
if (c.getMark$() != mark) c.setDot$I(mark);
if (c.getDot$() != dot) c.moveDot$I(dot);
});

Clazz.newMeth(C$, 'getNewCaretPosition$java_awt_Point', function (pt) {
if (pt == null ) pt=C$.markDot;
pt.x=0;
this.getJSMarkAndDot$java_awt_Point(pt);
var mark=pt.x;
var dot=pt.y;
var oldMark=this.editor.getCaret$().getMark$();
var oldDot=this.editor.getCaret$().getDot$();
if (dot != mark && oldMark == dot ) {
dot=mark;
mark=oldMark;
}pt.x=(dot == oldDot && mark == oldMark  ? -2147483648 : mark);
pt.y=dot;
return pt;
});

Clazz.newMeth(C$, 'updateJSCursorFromCaret$', function () {
});

Clazz.newMeth(C$, 'caretUpdatedByProgram$javax_swing_event_CaretEvent', function (e) {
if (false && this.isAWT && !this.jc.hasFocus$()  ) {
var fc=$I$(16).getCurrentKeyboardFocusManager$().getFocusOwner$();
this.jc.requestFocus$();
if (fc != null ) fc.requestFocus$();
}});
;
(function(){var C$=Clazz.newClass(P$.JSTextUI, "RootView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.View');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.view=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$javax_swing_text_Element.apply(this, [null]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDocument$', function () {
return this.this$0.editor.getDocument$();
});

Clazz.newMeth(C$, 'getStartOffset$', function () {
if (this.view != null ) {
return this.view.getStartOffset$();
}return this.getElement$().getStartOffset$();
});

Clazz.newMeth(C$, 'getEndOffset$', function () {
if (this.view != null ) {
return this.view.getEndOffset$();
}return this.getElement$().getEndOffset$();
});

Clazz.newMeth(C$, 'getElement$', function () {
if (this.view != null ) {
return this.view.getElement$();
}return this.this$0.editor.getDocument$().getDefaultRootElement$();
});

Clazz.newMeth(C$, 'setSize$F$F', function (width, height) {
if (this.view != null ) {
this.view.setSize$F$F(width, height);
}});

Clazz.newMeth(C$, 'getContainer$', function () {
return this.this$0.editor;
});

Clazz.newMeth(C$, 'setView$javax_swing_text_View', function (v) {
var oldView=this.view;
this.view=null;
if (oldView != null ) {
oldView.setParent$javax_swing_text_View(null);
}if (v != null ) {
v.setParent$javax_swing_text_View(this);
}this.view=v;
});

Clazz.newMeth(C$, 'getAttributes$', function () {
return null;
});

Clazz.newMeth(C$, 'getPreferredSpan$I', function (axis) {
switch (axis) {
case 0:
return (this.view == null  ? 10 : this.view.getPreferredSpan$I(axis));
default:
case 1:
var area=this.this$0.editor;
var h=area.getFont$().getFontMetrics$().getHeight$();
var r=area.getRows$();
return h * (r > 0 ? r : this.this$0.isAWT ? 10 : 6);
}
});

Clazz.newMeth(C$, 'getMinimumSpan$I', function (axis) {
if (this.view != null ) {
return this.view.getMinimumSpan$I(axis);
}return 10;
});

Clazz.newMeth(C$, 'getMaximumSpan$I', function (axis) {
return 2147483647;
});

Clazz.newMeth(C$, 'preferenceChanged$javax_swing_text_View$Z$Z', function (child, width, height) {
this.this$0.editor.revalidate$();
});

Clazz.newMeth(C$, 'getAlignment$I', function (axis) {
if (this.view != null ) {
return this.view.getAlignment$I(axis);
}return 0;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape', function (g, allocation) {
if (this.view != null ) {
var alloc=(Clazz.instanceOf(allocation, "java.awt.Rectangle")) ? allocation : allocation.getBounds$();
this.setSize$F$F(alloc.width, alloc.height);
this.view.paint$java_awt_Graphics$java_awt_Shape(g, allocation);
}});

Clazz.newMeth(C$, 'setParent$javax_swing_text_View', function (parent) {
throw Clazz.new_($I$(1).c$$S,["Can\'t set parent on root view"]);
});

Clazz.newMeth(C$, 'getViewCount$', function () {
return 1;
});

Clazz.newMeth(C$, 'getView$I', function (n) {
return this.view;
});

Clazz.newMeth(C$, 'getViewIndex$I$javax_swing_text_Position_Bias', function (pos, b) {
return 0;
});

Clazz.newMeth(C$, 'getChildAllocation$I$java_awt_Shape', function (index, a) {
return a;
});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias', function (pos, a, b) {
return null;
});

Clazz.newMeth(C$, 'viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA', function (x, y, a, biasReturn) {
return 0;
});
})()
;
(function(){var C$=Clazz.newClass(P$.JSTextUI, "TextActionWrapper", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.TextAction');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.action=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.action=null;
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_TextAction', function (action) {
C$.superclazz.c$$S.apply(this, [action.getValue$S("Name")]);
C$.$init$.apply(this);
this.action=action;
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.action.actionPerformed$(e);
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return (this.this$0.editor == null  || this.this$0.editor.isEditable$() ) ? this.action.isEnabled$() : false;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSTextUI, "FocusAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.this$0.editor.requestFocus$();
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return this.this$0.editor.isEditable$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
