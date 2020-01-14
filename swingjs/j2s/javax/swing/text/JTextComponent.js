(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,'java.awt.Point','java.util.Hashtable','javax.swing.KeyStroke','javax.swing.Action','java.util.Vector',['javax.swing.text.JTextComponent','.KeymapWrapper'],'sun.awt.AppContext','javax.swing.text.JTextComponent','javax.swing.DropMode',['javax.swing.text.JTextComponent','.MutableCaretEvent'],'javax.swing.event.CaretListener',['javax.swing.text.Position','.Bias'],['javax.swing.text.JTextComponent','.DropLocation'],'Boolean',['javax.swing.text.JTextComponent','.KeymapActionMap'],['javax.swing.text.JTextComponent','.DefaultKeymap'],'java.util.HashMap',['javax.swing.text.DefaultEditorKit','.DefaultKeyTypedAction'],'swingjs.JSUtil']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JTextComponent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent', ['java.awt.TextComponent', 'javax.swing.Scrollable']);
C$.overrideMap=null;
C$.KEYMAP_TABLE=null;
C$.FOCUSED_COMPONENT=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.KEYMAP_TABLE= Clazz.new_();
C$.FOCUSED_COMPONENT= Clazz.new_();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.model=null;
this.caret=null;
this.navigationFilter=null;
this.highlighter=null;
this.keymap=null;
this.caretEvent=null;
this.caretColor=null;
this.selectionColor=null;
this.selectedTextColor=null;
this.disabledTextColor=null;
this.editable=false;
this.margin=null;
this.focusAccelerator='\0';
this.dragEnabled=false;
this.dropMode=null;
this.dropLocation=null;
this.composedTextAttribute=null;
this.composedTextContent=null;
this.composedTextStart=null;
this.composedTextEnd=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.dropMode=$I$(9).USE_SELECTION;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.enableEvents$J(2056);
this.caretEvent=Clazz.new_($I$(10).c$$javax_swing_text_JTextComponent,[this]);
this.addMouseListener$java_awt_event_MouseListener(this.caretEvent);
this.addFocusListener$java_awt_event_FocusListener(this.caretEvent);
this.setEditable$Z(true);
this.setDragEnabled$Z(false);
this.setLayout$java_awt_LayoutManager(null);
this.updateUI$();
this.setOpaque$Z(true);
}, 1);

Clazz.newMeth(C$, 'updateUI$', function () {
C$.superclazz.prototype.updateUI$.apply(this, []);
this.invalidate$();
});

Clazz.newMeth(C$, 'addCaretListener$javax_swing_event_CaretListener', function (listener) {
this.listenerList.add$Class$TT(Clazz.getClass($I$(11),['caretUpdate$javax_swing_event_CaretEvent']), listener);
});

Clazz.newMeth(C$, 'removeCaretListener$javax_swing_event_CaretListener', function (listener) {
this.listenerList.remove$Class$TT(Clazz.getClass($I$(11),['caretUpdate$javax_swing_event_CaretEvent']), listener);
});

Clazz.newMeth(C$, 'getCaretListeners$', function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(11),['caretUpdate$javax_swing_event_CaretEvent']));
});

Clazz.newMeth(C$, 'fireCaretUpdate$javax_swing_event_CaretEvent', function (e) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(11),['caretUpdate$javax_swing_event_CaretEvent']) ) {
(listeners[i + 1]).caretUpdate$(e);
}}
});

Clazz.newMeth(C$, 'setDocument$javax_swing_text_Document', function (doc) {
var old=this.model;
try {
this.model=doc;
this.firePropertyChange$S$O$O("document", old, doc);
} finally {
}
this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'getDocument$', function () {
return this.model;
});

Clazz.newMeth(C$, 'setComponentOrientation$java_awt_ComponentOrientation', function (o) {
C$.superclazz.prototype.setComponentOrientation$java_awt_ComponentOrientation.apply(this, [o]);
});

Clazz.newMeth(C$, 'getActions$', function () {
if (this.getUI$() == null ) return null;
return (this.getUI$()).getEditorKit$javax_swing_text_JTextComponent(this).getActions$();
});

Clazz.newMeth(C$, 'setMargin$java_awt_Insets', function (m) {
var old=this.margin;
this.margin=m;
this.firePropertyChange$S$O$O("margin", old, m);
this.invalidate$();
});

Clazz.newMeth(C$, 'getMargin$', function () {
return this.margin;
});

Clazz.newMeth(C$, 'setNavigationFilter$javax_swing_text_NavigationFilter', function (filter) {
this.navigationFilter=filter;
});

Clazz.newMeth(C$, 'getNavigationFilter$', function () {
return this.navigationFilter;
});

Clazz.newMeth(C$, 'getCaret$', function () {
return this.caret;
});

Clazz.newMeth(C$, 'setCaret$javax_swing_text_Caret', function (c) {
if (this.caret != null ) {
this.caret.removeChangeListener$javax_swing_event_ChangeListener(this.caretEvent);
this.caret.deinstall$javax_swing_text_JTextComponent(this);
}var old=this.caret;
this.caret=c;
if (this.caret != null ) {
this.caret.install$javax_swing_text_JTextComponent(this);
this.caret.addChangeListener$javax_swing_event_ChangeListener(this.caretEvent);
}this.firePropertyChange$S$O$O("caret", old, this.caret);
});

Clazz.newMeth(C$, 'getHighlighter$', function () {
return this.highlighter;
});

Clazz.newMeth(C$, 'setHighlighter$javax_swing_text_Highlighter', function (h) {
if (this.highlighter != null ) {
this.highlighter.deinstall$javax_swing_text_JTextComponent(this);
}var old=this.highlighter;
this.highlighter=h;
if (this.highlighter != null ) {
this.highlighter.install$javax_swing_text_JTextComponent(this);
}this.firePropertyChange$S$O$O("highlighter", old, h);
});

Clazz.newMeth(C$, 'setKeymap$javax_swing_text_Keymap', function (map) {
var old=this.keymap;
this.keymap=map;
this.firePropertyChange$S$O$O("keymap", old, this.keymap);
this.updateInputMap$javax_swing_text_Keymap$javax_swing_text_Keymap(old, map);
});

Clazz.newMeth(C$, 'setDragEnabled$Z', function (b) {
this.dragEnabled=b;
});

Clazz.newMeth(C$, 'getDragEnabled$', function () {
return this.dragEnabled;
});

Clazz.newMeth(C$, 'setDropMode$javax_swing_DropMode', function (dropMode) {
if (dropMode != null ) {
switch (dropMode) {
case $I$(9).USE_SELECTION:
case $I$(9).INSERT:
this.dropMode=dropMode;
return;
}
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[dropMode + ": Unsupported drop mode for text"]);
});

Clazz.newMeth(C$, 'getDropMode$', function () {
return this.dropMode;
});

Clazz.newMeth(C$, 'dropLocationForPoint$java_awt_Point', function (p) {
var bias=Clazz.array($I$(12), [1]);
var index=(this.getUI$()).viewToModel$javax_swing_text_JTextComponent$java_awt_Point$javax_swing_text_Position_BiasA(this, p, bias);
if (bias[0] == null ) {
bias[0]=$I$(12).Forward;
}return Clazz.new_($I$(13).c$$java_awt_Point$I$javax_swing_text_Position_Bias,[p, index, bias[0]]);
});

Clazz.newMeth(C$, 'setDropLocation$javax_swing_TransferHandler_DropLocation$O$Z', function (location, state, forDrop) {
var retVal=null;
var textLocation=location;
if (this.dropMode === $I$(9).USE_SELECTION ) {
if (textLocation == null ) {
if (state != null ) {
var vals=state;
if (!forDrop) {
if (Clazz.instanceOf(this.caret, "javax.swing.text.DefaultCaret")) {
(this.caret).setDot$I$javax_swing_text_Position_Bias((vals[0]).intValue$(), vals[3]);
(this.caret).moveDot$I$javax_swing_text_Position_Bias((vals[1]).intValue$(), vals[4]);
} else {
this.caret.setDot$I((vals[0]).intValue$());
this.caret.moveDot$I((vals[1]).intValue$());
}}this.caret.setVisible$Z((vals[2]).booleanValue$());
}} else {
if (this.dropLocation == null ) {
var visible;
if (Clazz.instanceOf(this.caret, "javax.swing.text.DefaultCaret")) {
var dc=this.caret;
visible=dc.isActive$();
retVal=Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(dc.getMark$()), Integer.valueOf$I(dc.getDot$()), $I$(14).valueOf$Z(visible), dc.getMarkBias$(), dc.getDotBias$()]);
} else {
visible=this.caret.isVisible$();
retVal=Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(this.caret.getMark$()), Integer.valueOf$I(this.caret.getDot$()), $I$(14).valueOf$Z(visible)]);
}this.caret.setVisible$Z(true);
} else {
retVal=state;
}if (Clazz.instanceOf(this.caret, "javax.swing.text.DefaultCaret")) {
(this.caret).setDot$I$javax_swing_text_Position_Bias(textLocation.getIndex$(), textLocation.getBias$());
} else {
this.caret.setDot$I(textLocation.getIndex$());
}}} else {
if (textLocation == null ) {
if (state != null ) {
this.caret.setVisible$Z((state).booleanValue$());
}} else {
if (this.dropLocation == null ) {
var visible=Clazz.instanceOf(this.caret, "javax.swing.text.DefaultCaret") ? (this.caret).isActive$() : this.caret.isVisible$();
retVal=$I$(14).valueOf$Z(visible);
this.caret.setVisible$Z(false);
} else {
retVal=state;
}}}var old=this.dropLocation;
this.dropLocation=textLocation;
this.firePropertyChange$S$O$O("dropLocation", old, this.dropLocation);
return retVal;
});

Clazz.newMeth(C$, 'getDropLocation$', function () {
return this.dropLocation;
});

Clazz.newMeth(C$, 'updateInputMap$javax_swing_text_Keymap$javax_swing_text_Keymap', function (oldKm, newKm) {
var km=this.getInputMap$I(0);
var last=km;
while (km != null  && !(Clazz.instanceOf(km, "javax.swing.text.JTextComponent.KeymapWrapper")) ){
last=km;
km=km.getParent$();
}
if (km != null ) {
if (newKm == null ) {
if (last !== km ) {
last.setParent$javax_swing_InputMap(km.getParent$());
} else {
last.setParent$javax_swing_InputMap(null);
}} else {
var newKM=Clazz.new_($I$(6).c$$javax_swing_text_Keymap,[newKm]);
last.setParent$javax_swing_InputMap(newKM);
if (last !== km ) {
newKM.setParent$javax_swing_InputMap(km.getParent$());
}}} else if (newKm != null ) {
km=this.getInputMap$I(0);
if (km != null ) {
var newKM=Clazz.new_($I$(6).c$$javax_swing_text_Keymap,[newKm]);
newKM.setParent$javax_swing_InputMap(km.getParent$());
km.setParent$javax_swing_InputMap(newKM);
}}var am=this.getActionMap$();
var lastAM=am;
while (am != null  && !(Clazz.instanceOf(am, "javax.swing.text.JTextComponent.KeymapActionMap")) ){
lastAM=am;
am=am.getParent$();
}
if (am != null ) {
if (newKm == null ) {
if (lastAM !== am ) {
lastAM.setParent$javax_swing_ActionMap(am.getParent$());
} else {
lastAM.setParent$javax_swing_ActionMap(null);
}} else {
var newAM=Clazz.new_($I$(15).c$$javax_swing_text_Keymap,[newKm]);
lastAM.setParent$javax_swing_ActionMap(newAM);
if (lastAM !== am ) {
newAM.setParent$javax_swing_ActionMap(am.getParent$());
}}} else if (newKm != null ) {
am=this.getActionMap$();
if (am != null ) {
var newAM=Clazz.new_($I$(15).c$$javax_swing_text_Keymap,[newKm]);
newAM.setParent$javax_swing_ActionMap(am.getParent$());
am.setParent$javax_swing_ActionMap(newAM);
}}});

Clazz.newMeth(C$, 'getKeymap$', function () {
return this.keymap;
});

Clazz.newMeth(C$, 'addKeymap$S$javax_swing_text_Keymap', function (nm, parent) {
var map=Clazz.new_($I$(16).c$$S$javax_swing_text_Keymap,[nm, parent]);
if (nm != null ) {
C$.getKeymapTable$().put$TK$TV(nm, map);
}return map;
}, 1);

Clazz.newMeth(C$, 'removeKeymap$S', function (nm) {
return C$.getKeymapTable$().remove$O(nm);
}, 1);

Clazz.newMeth(C$, 'getKeymap$S', function (nm) {
return C$.getKeymapTable$().get$O(nm);
}, 1);

Clazz.newMeth(C$, 'getKeymapTable$', function () {
{
var appContext=$I$(7).getAppContext$();
var keymapTable=appContext.get$O(C$.KEYMAP_TABLE);
if (keymapTable == null ) {
keymapTable=Clazz.new_($I$(17).c$$I,[17]);
appContext.put$O$O(C$.KEYMAP_TABLE, keymapTable);
var binding=C$.addKeymap$S$javax_swing_text_Keymap("default", null);
binding.setDefaultAction$javax_swing_Action(Clazz.new_($I$(18)));
}return keymapTable;
}}, 1);

Clazz.newMeth(C$, 'loadKeymap$javax_swing_text_Keymap$javax_swing_text_JTextComponent_KeyBindingA$javax_swing_ActionA', function (map, bindings, actions) {
var h=Clazz.new_($I$(2));
for (var i=0; i < actions.length; i++) {
var a=actions[i];
var value=a.getValue$S("Name");
h.put$TK$TV((value != null  ? value : ""), a);
}
for (var i=0; i < bindings.length; i++) {
var a=h.get$O(bindings[i].actionName);
if (a != null ) {
map.addActionForKeyStroke$javax_swing_KeyStroke$javax_swing_Action(bindings[i].key, a);
}}
}, 1);

Clazz.newMeth(C$, 'getCaretColor$', function () {
return this.caretColor;
});

Clazz.newMeth(C$, 'setCaretColor$java_awt_Color', function (c) {
var old=this.caretColor;
this.caretColor=c;
this.firePropertyChange$S$O$O("caretColor", old, this.caretColor);
});

Clazz.newMeth(C$, 'getSelectionColor$', function () {
return this.selectionColor;
});

Clazz.newMeth(C$, 'setSelectionColor$java_awt_Color', function (c) {
var old=this.selectionColor;
this.selectionColor=c;
this.firePropertyChange$S$O$O("selectionColor", old, this.selectionColor);
});

Clazz.newMeth(C$, 'getSelectedTextColor$', function () {
return this.selectedTextColor;
});

Clazz.newMeth(C$, 'setSelectedTextColor$java_awt_Color', function (c) {
var old=this.selectedTextColor;
this.selectedTextColor=c;
this.firePropertyChange$S$O$O("selectedTextColor", old, this.selectedTextColor);
});

Clazz.newMeth(C$, 'getDisabledTextColor$', function () {
return this.disabledTextColor;
});

Clazz.newMeth(C$, 'setDisabledTextColor$java_awt_Color', function (c) {
var old=this.disabledTextColor;
this.disabledTextColor=c;
this.firePropertyChange$S$O$O("disabledTextColor", old, this.disabledTextColor);
});

Clazz.newMeth(C$, 'replaceSelection$S', function (content) {
var doc=this.getDocument$();
if (doc != null ) {
try {
var composedTextSaved=p$1.saveComposedText$I.apply(this, [this.caret.getDot$()]);
var p0=Math.min(this.caret.getDot$(), this.caret.getMark$());
var p1=Math.max(this.caret.getDot$(), this.caret.getMark$());
if (Clazz.instanceOf(doc, "swingjs.api.JSMinimalAbstractDocument")) {
(doc).replace$I$I$S$javax_swing_text_AttributeSet(p0, p1 - p0, content, null);
} else {
if (p0 != p1) {
doc.remove$I$I(p0, p1 - p0);
}if (content != null  && content.length$() > 0 ) {
doc.insertString$I$S$javax_swing_text_AttributeSet(p0, content, null);
}}if (composedTextSaved) {
p$1.restoreComposedText.apply(this, []);
}} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
$I$(19).alert$O("SWINGJS BAD LOCATION EXCEPTION (replace):" + e.getMessage$() + $I$(19).getStackTrace$I(-10) );
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'getText$I$I', function (offs, len) {
return this.getDocument$().getText$I$I(offs, len);
});

Clazz.newMeth(C$, 'modelToView$I', function (pos) {
return (this.getUI$()).modelToView$javax_swing_text_JTextComponent$I(this, pos);
});

Clazz.newMeth(C$, 'viewToModel$java_awt_Point', function (pt) {
return (this.getUI$()).viewToModel$javax_swing_text_JTextComponent$java_awt_Point(this, pt);
});

Clazz.newMeth(C$, 'cut$', function () {
});

Clazz.newMeth(C$, 'copy$', function () {
});

Clazz.newMeth(C$, 'paste$', function () {
});

Clazz.newMeth(C$, 'moveCaretPosition$I', function (pos) {
var doc=this.getDocument$();
if (doc != null ) {
if (pos > doc.getLength$() || pos < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad position: " + pos]);
}this.caret.moveDot$I(pos);
}});

Clazz.newMeth(C$, 'setFocusAccelerator$C', function (aKey) {
aKey=Character.toUpperCase$C(aKey);
var old=this.focusAccelerator;
this.focusAccelerator=aKey;
this.firePropertyChange$S$C$C("focusAcceleratorKey", old, this.focusAccelerator);
this.firePropertyChange$S$C$C("focusAccelerator", old, this.focusAccelerator);
});

Clazz.newMeth(C$, 'getFocusAccelerator$', function () {
return this.focusAccelerator;
});

Clazz.newMeth(C$, 'read$java_io_Reader$O', function ($in, desc) {
var kit=(this.getUI$()).getEditorKit$javax_swing_text_JTextComponent(this);
var doc=kit.createDefaultDocument$();
if (desc != null ) {
doc.putProperty$O$O("stream", desc);
}try {
kit.read$java_io_Reader$javax_swing_text_Document$I($in, doc, 0);
this.setDocument$javax_swing_text_Document(doc);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'write$java_io_Writer', function (out) {
var doc=this.getDocument$();
try {
(this.getUI$()).getEditorKit$javax_swing_text_JTextComponent(this).write$java_io_Writer$javax_swing_text_Document$I$I(out, doc, 0, doc.getLength$());
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'removeNotify$', function () {
C$.superclazz.prototype.removeNotify$.apply(this, []);
if (C$.getFocusedComponent$() === this ) {
$I$(7).getAppContext$().remove$O(C$.FOCUSED_COMPONENT);
}});

Clazz.newMeth(C$, 'setCaretPosition$I', function (position) {
var doc=this.getDocument$();
if (doc != null ) {
if (position > doc.getLength$() || position < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad position: " + position]);
}this.caret.setDot$I(position);
}});

Clazz.newMeth(C$, 'getCaretPosition$', function () {
return this.caret.getDot$();
});

Clazz.newMeth(C$, 'setText$S', function (t) {
try {
var doc=this.getDocument$();
if (Clazz.instanceOf(doc, "swingjs.api.JSMinimalAbstractDocument")) {
(doc).replace$I$I$S$javax_swing_text_AttributeSet(0, doc.getLength$(), t, null);
} else {
doc.remove$I$I(0, doc.getLength$());
doc.insertString$I$S$javax_swing_text_AttributeSet(0, t, null);
}} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
$I$(19).alert$O("SWINGJS BAD LOCATION EXCEPTION (setText):" + e.getMessage$() + $I$(19).getStackTrace$I(-10) );
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getText$', function () {
var doc=this.getDocument$();
var txt;
try {
txt=doc.getText$I$I(0, doc.getLength$());
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
txt=null;
} else {
throw e;
}
}
return txt;
});

Clazz.newMeth(C$, 'getSelectedText$', function () {
var txt=null;
var p0=Math.min(this.caret.getDot$(), this.caret.getMark$());
var p1=Math.max(this.caret.getDot$(), this.caret.getMark$());
if (p0 != p1) {
try {
var doc=this.getDocument$();
txt=doc.getText$I$I(p0, p1 - p0);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
}return txt;
});

Clazz.newMeth(C$, 'isEditable$', function () {
return this.editable;
});

Clazz.newMeth(C$, 'setEditable$Z', function (b) {
if (b != this.editable ) {
var oldVal=this.editable;
this.editable=b;
this.firePropertyChange$S$O$O("editable", $I$(14).valueOf$Z(oldVal), $I$(14).valueOf$Z(this.editable));
this.repaint$();
}});

Clazz.newMeth(C$, 'getSelectionStart$', function () {
var start=Math.min(this.caret.getDot$(), this.caret.getMark$());
return start;
});

Clazz.newMeth(C$, 'setSelectionStart$I', function (selectionStart) {
this.select$I$I(selectionStart, this.getSelectionEnd$());
});

Clazz.newMeth(C$, 'getSelectionEnd$', function () {
var end=Math.max(this.caret.getDot$(), this.caret.getMark$());
return end;
});

Clazz.newMeth(C$, 'setSelectionEnd$I', function (selectionEnd) {
this.select$I$I(this.getSelectionStart$(), selectionEnd);
});

Clazz.newMeth(C$, 'select$I$I', function (selectionStart, selectionEnd) {
var docLength=this.getDocument$().getLength$();
if (selectionStart < 0) {
selectionStart=0;
}if (selectionStart > docLength) {
selectionStart=docLength;
}if (selectionEnd > docLength) {
selectionEnd=docLength;
}if (selectionEnd < selectionStart) {
selectionEnd=selectionStart;
}this.setCaretPosition$I(selectionStart);
this.moveCaretPosition$I(selectionEnd);
});

Clazz.newMeth(C$, 'selectAll$', function () {
var doc=this.getDocument$();
if (doc != null ) {
this.setCaretPosition$I(0);
this.moveCaretPosition$I(doc.getLength$());
}});

Clazz.newMeth(C$, 'getToolTipText$java_awt_event_MouseEvent', function (event) {
var retValue=C$.superclazz.prototype.getToolTipText$java_awt_event_MouseEvent.apply(this, [event]);
if (retValue == null ) {
var ui=(this.getUI$());
if (ui != null ) {
retValue=ui.getToolTipText$javax_swing_text_JTextComponent$java_awt_Point(this, Clazz.new_($I$(1).c$$I$I,[event.getX$(), event.getY$()]));
}}return retValue;
});

Clazz.newMeth(C$, 'getPreferredScrollableViewportSize$', function () {
return this.getPreferredSize$();
});

Clazz.newMeth(C$, 'getScrollableUnitIncrement$java_awt_Rectangle$I$I', function (visibleRect, orientation, direction) {
switch (orientation) {
case 1:
return (visibleRect.height/10|0);
case 0:
return (visibleRect.width/10|0);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid orientation: " + orientation]);
}
});

Clazz.newMeth(C$, 'getScrollableBlockIncrement$java_awt_Rectangle$I$I', function (visibleRect, orientation, direction) {
switch (orientation) {
case 1:
return visibleRect.height;
case 0:
return visibleRect.width;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid orientation: " + orientation]);
}
});

Clazz.newMeth(C$, 'getScrollableTracksViewportWidth$', function () {
if (Clazz.instanceOf(this.getParent$(), "javax.swing.JViewport")) {
return ((this.getParent$()).getWidth$() > this.getPreferredSize$().width);
}return false;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportHeight$', function () {
if (Clazz.instanceOf(this.getParent$(), "javax.swing.JViewport")) {
return ((this.getParent$()).getHeight$() > this.getPreferredSize$().height);
}return false;
});

Clazz.newMeth(C$, 'paramString$', function () {
var editableString=(this.editable ? "true" : "false");
var caretColorString=(this.caretColor != null  ? this.caretColor.toString() : "");
var selectionColorString=(this.selectionColor != null  ? this.selectionColor.toString() : "");
var selectedTextColorString=(this.selectedTextColor != null  ? this.selectedTextColor.toString() : "");
var disabledTextColorString=(this.disabledTextColor != null  ? this.disabledTextColor.toString() : "");
var marginString=(this.margin != null  ? this.margin.toString() : "");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",caretColor=" + caretColorString + ",disabledTextColor=" + disabledTextColorString + ",editable=" + editableString + ",margin=" + marginString + ",selectedTextColor=" + selectedTextColorString + ",selectionColor=" + selectionColorString ;
});

Clazz.newMeth(C$, 'getFocusedComponent$', function () {
return $I$(7).getAppContext$().get$O(C$.FOCUSED_COMPONENT);
}, 1);

Clazz.newMeth(C$, 'addInputMethodListener$java_awt_event_InputMethodListener', function (l) {
C$.superclazz.prototype.addInputMethodListener$java_awt_event_InputMethodListener.apply(this, [l]);
if (l != null ) {
}});

Clazz.newMeth(C$, 'saveComposedText$I', function (pos) {
if (this.composedTextExists$()) {
var start=this.composedTextStart.getOffset$();
var len=this.composedTextEnd.getOffset$() - this.composedTextStart.getOffset$();
if (pos >= start && pos <= start + len ) {
try {
this.getDocument$().remove$I$I(start, len);
return true;
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
}
}}return false;
}, p$1);

Clazz.newMeth(C$, 'restoreComposedText', function () {
var doc=this.getDocument$();
try {
doc.insertString$I$S$javax_swing_text_AttributeSet(this.caret.getDot$(), this.composedTextContent, this.composedTextAttribute);
this.composedTextStart=doc.createPosition$I(this.caret.getDot$() - this.composedTextContent.length$());
this.composedTextEnd=doc.createPosition$I(this.caret.getDot$());
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
}
}, p$1);

Clazz.newMeth(C$, 'composedTextExists$', function () {
return (this.composedTextStart != null );
});

Clazz.newMeth(C$, 'setTextFromUI$S', function (val) {
this.setText$S(val);
});
;
(function(){var C$=Clazz.newClass(P$.JTextComponent, "KeyBinding", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.key=null;
this.actionName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_KeyStroke$S', function (key, actionName) {
C$.$init$.apply(this);
this.key=key;
this.actionName=actionName;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JTextComponent, "DropLocation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.TransferHandler','.DropLocation']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.index=0;
this.bias=null;
this.$dropPoint=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Point$I$javax_swing_text_Position_Bias', function (p, index, bias) {
C$.superclazz.c$$java_awt_Point.apply(this, [p]);
C$.$init$.apply(this);
this.$dropPoint=Clazz.new_($I$(1).c$$java_awt_Point,[p]);
this.index=index;
this.bias=bias;
}, 1);

Clazz.newMeth(C$, 'getIndex$', function () {
return this.index;
});

Clazz.newMeth(C$, 'getBias$', function () {
return this.bias;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + "[dropPoint=" + this.getDropPoint$() + "," + "index=" + this.index + "," + "bias=" + this.bias + "]" ;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JTextComponent, "DefaultKeymap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.swing.text.Keymap');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nm=null;
this.parent=null;
this.bindings=null;
this.defaultAction=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_text_Keymap', function (nm, parent) {
C$.$init$.apply(this);
this.nm=nm;
this.parent=parent;
this.bindings=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'getDefaultAction$', function () {
if (this.defaultAction != null ) {
return this.defaultAction;
}return (this.parent != null ) ? this.parent.getDefaultAction$() : null;
});

Clazz.newMeth(C$, 'setDefaultAction$javax_swing_Action', function (a) {
this.defaultAction=a;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.nm;
});

Clazz.newMeth(C$, 'getAction$javax_swing_KeyStroke', function (key) {
var a=this.bindings.get$O(key);
if ((a == null ) && (this.parent != null ) ) {
a=this.parent.getAction$javax_swing_KeyStroke(key);
}return a;
});

Clazz.newMeth(C$, 'getBoundKeyStrokes$', function () {
var keys=Clazz.array($I$(3), [this.bindings.size$()]);
var i=0;
for (var e=this.bindings.keys$(); e.hasMoreElements$(); ) {
keys[i++]=e.nextElement$();
}
return keys;
});

Clazz.newMeth(C$, 'getBoundActions$', function () {
var actions=Clazz.array($I$(4), [this.bindings.size$()]);
var i=0;
for (var e=this.bindings.elements$(); e.hasMoreElements$(); ) {
actions[i++]=e.nextElement$();
}
return actions;
});

Clazz.newMeth(C$, 'getKeyStrokesForAction$javax_swing_Action', function (a) {
if (a == null ) {
return null;
}var retValue=null;
var keyStrokes=null;
for (var enum_=this.bindings.keys$(); enum_.hasMoreElements$(); ) {
var key=enum_.nextElement$();
if (this.bindings.get$O(key) === a ) {
if (keyStrokes == null ) {
keyStrokes=Clazz.new_($I$(5));
}keyStrokes.addElement$TE(key);
}}
if (this.parent != null ) {
var pStrokes=this.parent.getKeyStrokesForAction$javax_swing_Action(a);
if (pStrokes != null ) {
var rCount=0;
for (var counter=pStrokes.length - 1; counter >= 0; counter--) {
if (this.isLocallyDefined$javax_swing_KeyStroke(pStrokes[counter])) {
pStrokes[counter]=null;
rCount++;
}}
if (rCount > 0 && rCount < pStrokes.length ) {
if (keyStrokes == null ) {
keyStrokes=Clazz.new_($I$(5));
}for (var counter=pStrokes.length - 1; counter >= 0; counter--) {
if (pStrokes[counter] != null ) {
keyStrokes.addElement$TE(pStrokes[counter]);
}}
} else if (rCount == 0) {
if (keyStrokes == null ) {
retValue=pStrokes;
} else {
retValue=Clazz.array($I$(3), [keyStrokes.size$() + pStrokes.length]);
keyStrokes.copyInto$OA(retValue);
System.arraycopy$O$I$O$I$I(pStrokes, 0, retValue, keyStrokes.size$(), pStrokes.length);
keyStrokes=null;
}}}}if (keyStrokes != null ) {
retValue=Clazz.array($I$(3), [keyStrokes.size$()]);
keyStrokes.copyInto$OA(retValue);
}return retValue;
});

Clazz.newMeth(C$, 'isLocallyDefined$javax_swing_KeyStroke', function (key) {
return this.bindings.containsKey$O(key);
});

Clazz.newMeth(C$, 'addActionForKeyStroke$javax_swing_KeyStroke$javax_swing_Action', function (key, a) {
this.bindings.put$TK$TV(key, a);
});

Clazz.newMeth(C$, 'removeKeyStrokeBinding$javax_swing_KeyStroke', function (key) {
this.bindings.remove$O(key);
});

Clazz.newMeth(C$, 'removeBindings$', function () {
this.bindings.clear$();
});

Clazz.newMeth(C$, 'getResolveParent$', function () {
return this.parent;
});

Clazz.newMeth(C$, 'setResolveParent$javax_swing_text_Keymap', function (parent) {
this.parent=parent;
});

Clazz.newMeth(C$, 'toString', function () {
return "Keymap[" + this.nm + "]" + this.bindings ;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JTextComponent, "KeymapWrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.InputMap');
C$.DefaultActionKey=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.DefaultActionKey= Clazz.new_();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.keymap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Keymap', function (keymap) {
Clazz.super_(C$, this,1);
this.keymap=keymap;
}, 1);

Clazz.newMeth(C$, 'keys$', function () {
var sKeys=C$.superclazz.prototype.keys$.apply(this, []);
var keymapKeys=this.keymap.getBoundKeyStrokes$();
var sCount=(sKeys == null ) ? 0 : sKeys.length;
var keymapCount=(keymapKeys == null ) ? 0 : keymapKeys.length;
if (sCount == 0) {
return keymapKeys;
}if (keymapCount == 0) {
return sKeys;
}var retValue=Clazz.array($I$(3), [sCount + keymapCount]);
System.arraycopy$O$I$O$I$I(sKeys, 0, retValue, 0, sCount);
System.arraycopy$O$I$O$I$I(keymapKeys, 0, retValue, sCount, keymapCount);
return retValue;
});

Clazz.newMeth(C$, 'size$', function () {
var keymapStrokes=this.keymap.getBoundKeyStrokes$();
var keymapCount=(keymapStrokes == null ) ? 0 : keymapStrokes.length;
return C$.superclazz.prototype.size$.apply(this, []) + keymapCount;
});

Clazz.newMeth(C$, 'get$javax_swing_KeyStroke', function (keyStroke) {
var retValue=this.keymap.getAction$javax_swing_KeyStroke(keyStroke);
if (retValue == null ) {
retValue=C$.superclazz.prototype.get$javax_swing_KeyStroke.apply(this, [keyStroke]);
if (retValue == null  && keyStroke.getKeyChar$() != "\uffff"  && this.keymap.getDefaultAction$() != null  ) {
retValue=C$.DefaultActionKey;
}}return retValue;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JTextComponent, "KeymapActionMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.ActionMap');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.keymap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Keymap', function (keymap) {
Clazz.super_(C$, this,1);
this.keymap=keymap;
}, 1);

Clazz.newMeth(C$, 'keys$', function () {
var sKeys=C$.superclazz.prototype.keys$.apply(this, []);
var keymapKeys=this.keymap.getBoundActions$();
var sCount=(sKeys == null ) ? 0 : sKeys.length;
var keymapCount=(keymapKeys == null ) ? 0 : keymapKeys.length;
var hasDefault=(this.keymap.getDefaultAction$() != null );
if (hasDefault) {
keymapCount++;
}if (sCount == 0) {
if (hasDefault) {
var retValue=Clazz.array(java.lang.Object, [keymapCount]);
if (keymapCount > 1) {
System.arraycopy$O$I$O$I$I(keymapKeys, 0, retValue, 0, keymapCount - 1);
}retValue[keymapCount - 1]=$I$(6).DefaultActionKey;
return retValue;
}return keymapKeys;
}if (keymapCount == 0) {
return sKeys;
}var retValue=Clazz.array(java.lang.Object, [sCount + keymapCount]);
System.arraycopy$O$I$O$I$I(sKeys, 0, retValue, 0, sCount);
if (hasDefault) {
if (keymapCount > 1) {
System.arraycopy$O$I$O$I$I(keymapKeys, 0, retValue, sCount, keymapCount - 1);
}retValue[sCount + keymapCount - 1]=$I$(6).DefaultActionKey;
} else {
System.arraycopy$O$I$O$I$I(keymapKeys, 0, retValue, sCount, keymapCount);
}return retValue;
});

Clazz.newMeth(C$, 'size$', function () {
var actions=this.keymap.getBoundActions$();
var keymapCount=(actions == null ) ? 0 : actions.length;
if (this.keymap.getDefaultAction$() != null ) {
keymapCount++;
}return C$.superclazz.prototype.size$.apply(this, []) + keymapCount;
});

Clazz.newMeth(C$, 'get$O', function (key) {
var retValue=C$.superclazz.prototype.get$O.apply(this, [key]);
if (retValue == null ) {
if (key === $I$(6).DefaultActionKey ) {
retValue=this.keymap.getDefaultAction$();
} else if (Clazz.instanceOf(key, "javax.swing.Action")) {
retValue=key;
}}return retValue;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JTextComponent, "MutableCaretEvent", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.event.CaretEvent', ['javax.swing.event.ChangeListener', 'java.awt.event.FocusListener', 'java.awt.event.MouseListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dragActive=false;
this.dot=0;
this.mark=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_JTextComponent', function (c) {
C$.superclazz.c$$O.apply(this, [c]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'fire$', function () {
var c=this.getSource$();
if (c != null ) {
var caret=c.getCaret$();
if (caret != null ) {
this.dot=caret.getDot$();
this.mark=caret.getMark$();
c.fireCaretUpdate$javax_swing_event_CaretEvent(this);
}}});

Clazz.newMeth(C$, 'toString', function () {
return "dot=" + this.dot + "," + "mark=" + this.mark ;
});

Clazz.newMeth(C$, 'getDot$', function () {
return this.dot;
});

Clazz.newMeth(C$, 'getMark$', function () {
return this.mark;
});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
if (!this.dragActive) {
this.fire$();
}});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (fe) {
$I$(7).getAppContext$().put$O$O($I$(8).FOCUSED_COMPONENT, fe.getSource$());
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (fe) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
this.dragActive=true;
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
this.dragActive=false;
this.fire$();
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:24 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
