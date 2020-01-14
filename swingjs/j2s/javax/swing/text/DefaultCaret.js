(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,'javax.swing.SwingUtilities','javax.swing.text.Segment',['javax.swing.text.Position','.Bias'],'Boolean','javax.swing.event.EventListenerList',['javax.swing.text.DefaultCaret','.Handler'],'javax.swing.event.ChangeListener',['javax.swing.text.DefaultCaret','.SafeScroller'],'java.awt.Point','javax.swing.event.ChangeEvent',['javax.swing.text.DefaultCaret','.DefaultFilterBypass']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DefaultCaret", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.Rectangle', ['javax.swing.text.Caret', 'java.awt.event.FocusListener', 'java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);
C$.biasRet=null;
C$.selectWord=null;
C$.selectLine=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.biasRet=Clazz.array($I$(3), [1]);
C$.selectWord=null;
C$.selectLine=null;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.working=false;
this.listenerList=null;
this.changeEvent=null;
this.component=null;
this.updatePolicy=0;
this.visible=false;
this.active=false;
this.dot=0;
this.mark=0;
this.selectionTag=null;
this.selectionVisible=false;
this.magicCaretPosition=null;
this.dotBias=null;
this.markBias=null;
this.dotLTR=false;
this.markLTR=false;
this.handler=null;
this.flagXPoints=null;
this.flagYPoints=null;
this.filterBypass=null;
this.ownsSelection=false;
this.forceCaretPositionChange=false;
this.shouldHandleRelease=false;
this.selectedWordEvent=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.listenerList=Clazz.new_($I$(5));
this.changeEvent=null;
this.updatePolicy=0;
this.handler=Clazz.new_($I$(6), [this, null]);
this.flagXPoints=Clazz.array(Integer.TYPE, [3]);
this.flagYPoints=Clazz.array(Integer.TYPE, [3]);
this.selectedWordEvent=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'install$javax_swing_text_JTextComponent', function (c) {
this.component=c;
var doc=c.getDocument$();
this.dot=this.mark=0;
this.dotLTR=this.markLTR=true;
this.dotBias=this.markBias=$I$(3).Forward;
if (doc != null ) {
doc.addDocumentListener$javax_swing_event_DocumentListener(this.handler);
}c.addPropertyChangeListener$java_beans_PropertyChangeListener(this.handler);
c.addFocusListener$java_awt_event_FocusListener(this);
c.addMouseListener$java_awt_event_MouseListener(this);
c.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
if (this.component.hasFocus$()) {
this.focusGained$java_awt_event_FocusEvent(null);
}});

Clazz.newMeth(C$, 'deinstall$javax_swing_text_JTextComponent', function (c) {
c.removeMouseListener$java_awt_event_MouseListener(this);
c.removeMouseMotionListener$java_awt_event_MouseMotionListener(this);
c.removeFocusListener$java_awt_event_FocusListener(this);
c.removePropertyChangeListener$java_beans_PropertyChangeListener(this.handler);
var doc=c.getDocument$();
if (doc != null ) {
doc.removeDocumentListener$javax_swing_event_DocumentListener(this.handler);
}{
this.component=null;
}});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener', function (l) {
this.listenerList.add$Class$TT(Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener', function (l) {
this.listenerList.remove$Class$TT(Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'getChangeListeners$', function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']));
});

Clazz.newMeth(C$, 'setUpdatePolicy$I', function (policy) {
this.updatePolicy=policy;
});

Clazz.newMeth(C$, 'getUpdatePolicy$', function () {
return this.updatePolicy;
});

Clazz.newMeth(C$, 'getComponent$', function () {
return this.component;
});

Clazz.newMeth(C$, 'repaint$', function () {
});

Clazz.newMeth(C$, 'adjustVisibility$java_awt_Rectangle', function (nloc) {
if (this.component == null ) {
return;
}if ($I$(1).isEventDispatchThread$()) {
this.component.scrollRectToVisible$java_awt_Rectangle(nloc);
} else {
$I$(1).invokeLater$Runnable(Clazz.new_($I$(8).c$$java_awt_Rectangle, [this, null, nloc]));
}});

Clazz.newMeth(C$, 'getSelectionPainter$', function () {
return null;
});

Clazz.newMeth(C$, 'positionCaret$java_awt_event_MouseEvent', function (e) {
var pt=Clazz.new_($I$(9).c$$I$I,[e.getX$(), e.getY$()]);
(this.component.getUI$()).viewToModel$javax_swing_text_JTextComponent$java_awt_Point$javax_swing_text_Position_BiasA(this.component, pt, C$.biasRet);
if (pt.x >= 0) {
if (C$.biasRet[0] == null ) C$.biasRet[0]=$I$(3).Forward;
this.setDot$I$javax_swing_text_Position_Bias(pt.x, C$.biasRet[0]);
if (pt.y != pt.x) this.moveDot$I$javax_swing_text_Position_Bias(pt.y, C$.biasRet[0]);
}});

Clazz.newMeth(C$, 'getPosition$java_awt_event_MouseEvent$javax_swing_text_Position_BiasA', function (e, biasret) {
var pt=Clazz.new_($I$(9).c$$I$I,[e.getX$(), e.getY$()]);
var pos=(this.component.getUI$()).viewToModel$javax_swing_text_JTextComponent$java_awt_Point$javax_swing_text_Position_BiasA(this.component, pt, C$.biasRet);
System.out.println$S("def caret getPos " + e.getID$() + " " + pt );
return pos;
}, p$1);

Clazz.newMeth(C$, 'moveCaret$java_awt_event_MouseEvent', function (e) {
this.positionCaret$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (e) {
if (this.component.isEnabled$()) {
if (this.component.isEditable$()) {
this.setVisible$Z(true);
}this.setSelectionVisible$Z(true);
}});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
this.setVisible$Z(false);
this.setSelectionVisible$Z(this.ownsSelection || e.isTemporary$() );
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
if ($I$(1).isLeftMouseButton$java_awt_event_MouseEvent(e)) {
if (e.isConsumed$()) {
this.shouldHandleRelease=true;
} else {
this.shouldHandleRelease=false;
this.adjustCaretAndFocus$java_awt_event_MouseEvent(e);
}}this.working=false;
});

Clazz.newMeth(C$, 'adjustCaretAndFocus$java_awt_event_MouseEvent', function (e) {
this.working=true;
p$1.adjustCaret$java_awt_event_MouseEvent.apply(this, [e]);
p$1.adjustFocus$Z.apply(this, [false]);
this.working=false;
});

Clazz.newMeth(C$, 'adjustCaret$java_awt_event_MouseEvent', function (e) {
if ((e.getModifiers$() & 1) != 0 && this.getDot$() != -1 ) {
this.moveCaret$java_awt_event_MouseEvent(e);
} else {
this.positionCaret$java_awt_event_MouseEvent(e);
}}, p$1);

Clazz.newMeth(C$, 'adjustFocus$Z', function (inWindow) {
if ((this.component != null ) && this.component.isEnabled$() && this.component.isRequestFocusEnabled$()  ) {
if (inWindow) {
this.component.requestFocusInWindow$();
} else {
this.component.requestFocus$();
}}}, p$1);

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
var isLeft=$I$(1).isLeftMouseButton$java_awt_event_MouseEvent(e);
if (!e.isConsumed$() && this.shouldHandleRelease && isLeft  ) {
this.adjustCaretAndFocus$java_awt_event_MouseEvent(e);
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
if ((!e.isConsumed$()) && $I$(1).isLeftMouseButton$java_awt_event_MouseEvent(e) ) {
this.moveCaret$java_awt_event_MouseEvent(e);
}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
if (this.isVisible$()) {
}});

Clazz.newMeth(C$, 'fireStateChanged$', function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) this.changeEvent=Clazz.new_($I$(10).c$$O,[this]);
(listeners[i + 1]).stateChanged$(this.changeEvent);
}}
});

Clazz.newMeth(C$, 'getListeners$Class', function (listenerType) {
return this.listenerList.getListeners$Class(listenerType);
});

Clazz.newMeth(C$, 'setSelectionVisible$Z', function (vis) {
});

Clazz.newMeth(C$, 'isSelectionVisible$', function () {
return this.selectionVisible;
});

Clazz.newMeth(C$, 'isActive$', function () {
return this.active;
});

Clazz.newMeth(C$, 'isVisible$', function () {
return this.visible;
});

Clazz.newMeth(C$, 'setVisible$Z', function (e) {
if (this.component != null ) {
this.active=e;
var mapper=this.component.getUI$();
if (this.visible != e ) {
this.visible=e;
}}});

Clazz.newMeth(C$, 'setBlinkRate$I', function (rate) {
});

Clazz.newMeth(C$, 'getBlinkRate$', function () {
return 0;
});

Clazz.newMeth(C$, 'getDot$', function () {
return this.dot;
});

Clazz.newMeth(C$, 'getMark$', function () {
return this.mark;
});

Clazz.newMeth(C$, 'setDot$I', function (dot) {
this.setDot$I$javax_swing_text_Position_Bias(dot, $I$(3).Forward);
});

Clazz.newMeth(C$, 'moveDot$I', function (dot) {
this.moveDot$I$javax_swing_text_Position_Bias(dot, $I$(3).Forward);
});

Clazz.newMeth(C$, 'moveDot$I$javax_swing_text_Position_Bias', function (dot, dotBias) {
if (dotBias == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null bias"]);
}if (!this.component.isEnabled$()) {
this.setDot$I$javax_swing_text_Position_Bias(dot, dotBias);
return;
}if (dot != this.dot) {
var filter=this.component.getNavigationFilter$();
if (filter == null ) {
this.handleMoveDot$I$javax_swing_text_Position_Bias(dot, dotBias);
} else {
filter.moveDot$javax_swing_text_NavigationFilter_FilterBypass$I$javax_swing_text_Position_Bias(p$1.getFilterBypass.apply(this, []), dot, dotBias);
}}});

Clazz.newMeth(C$, 'handleMoveDot$I$javax_swing_text_Position_Bias', function (dot, dotBias) {
this.changeCaretPosition$I$javax_swing_text_Position_Bias(dot, dotBias);
});

Clazz.newMeth(C$, 'setDot$I$javax_swing_text_Position_Bias', function (dot, dotBias) {
if (dotBias == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null bias"]);
}var filter=this.component.getNavigationFilter$();
if (filter != null ) {
filter.setDot$javax_swing_text_NavigationFilter_FilterBypass$I$javax_swing_text_Position_Bias(p$1.getFilterBypass.apply(this, []), dot, dotBias);
} else {
this.handleSetDot$I$javax_swing_text_Position_Bias(dot, dotBias);
}});

Clazz.newMeth(C$, 'handleSetDot$I$javax_swing_text_Position_Bias', function (dot, dotBias) {
var doc=this.component.getDocument$();
if (doc != null ) {
dot=Math.min(dot, doc.getLength$());
}dot=Math.max(dot, 0);
if (dot == 0) dotBias=$I$(3).Forward;
this.mark=dot;
if (this.dot != dot || this.dotBias !== dotBias   || this.selectionTag != null   || this.forceCaretPositionChange ) {
this.changeCaretPosition$I$javax_swing_text_Position_Bias(dot, dotBias);
}this.markBias=this.dotBias;
this.markLTR=this.dotLTR;
});

Clazz.newMeth(C$, 'getDotBias$', function () {
return this.dotBias;
});

Clazz.newMeth(C$, 'getMarkBias$', function () {
return this.markBias;
});

Clazz.newMeth(C$, 'isDotLeftToRight$', function () {
return this.dotLTR;
});

Clazz.newMeth(C$, 'isMarkLeftToRight$', function () {
return this.markLTR;
});

Clazz.newMeth(C$, 'isPositionLTR$I$javax_swing_text_Position_Bias', function (position, bias) {
var doc=this.component.getDocument$();
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
if (bias === $I$(3).Backward  && --position < 0 ) position=0;
return (doc).isLeftToRight$I$I(position, position);
}return true;
});

Clazz.newMeth(C$, 'guessBiasForOffset$I$javax_swing_text_Position_Bias$Z', function (offset, lastBias, lastLTR) {
if (lastLTR != this.isPositionLTR$I$javax_swing_text_Position_Bias(offset, lastBias) ) {
lastBias=$I$(3).Backward;
} else if (lastBias !== $I$(3).Backward  && lastLTR != this.isPositionLTR$I$javax_swing_text_Position_Bias(offset, $I$(3).Backward)  ) {
lastBias=$I$(3).Backward;
}if (lastBias === $I$(3).Backward  && offset > 0 ) {
try {
var s=Clazz.new_($I$(2));
this.component.getDocument$().getText$I$I$javax_swing_text_Segment(offset - 1, 1, s);
if (s.count > 0 && s.array[s.offset] == "\n" ) {
lastBias=$I$(3).Forward;
}} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
}
}return lastBias;
});

Clazz.newMeth(C$, 'changeCaretPosition$I$javax_swing_text_Position_Bias', function (dot, dotBias) {
this.dot=dot;
this.dotBias=dotBias;
this.dotLTR=this.isPositionLTR$I$javax_swing_text_Position_Bias(dot, dotBias);
this.fireStateChanged$();
if (false && !this.working ) p$1.updateSystemSelection.apply(this, []);
this.setMagicCaretPosition$java_awt_Point(null);
});

Clazz.newMeth(C$, 'repaintNewCaret$', function () {
});

Clazz.newMeth(C$, 'updateSystemSelection', function () {
(this.component.ui).updateJSCursorFromCaret$();
}, p$1);

Clazz.newMeth(C$, 'ensureValidPosition$', function () {
var length=this.component.getDocument$().getLength$();
if (this.dot > length || this.mark > length ) {
this.handleSetDot$I$javax_swing_text_Position_Bias(length, $I$(3).Forward);
}});

Clazz.newMeth(C$, 'setMagicCaretPosition$java_awt_Point', function (p) {
this.magicCaretPosition=p;
});

Clazz.newMeth(C$, 'getMagicCaretPosition$', function () {
return this.magicCaretPosition;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return (this === obj );
});

Clazz.newMeth(C$, 'toString', function () {
var s="Dot=(" + this.dot + ", " + this.dotBias + ")" ;
s += " Mark=(" + this.mark + ", " + this.markBias + ")" ;
return s;
});

Clazz.newMeth(C$, 'getFilterBypass', function () {
if (this.filterBypass == null ) {
this.filterBypass=Clazz.new_($I$(11), [this, null]);
}return this.filterBypass;
}, p$1);

Clazz.newMeth(C$, '_contains$I$I$I$I', function (X, Y, W, H) {
var w=this.width;
var h=this.height;
if ((w | h | W | H ) < 0) {
return false;
}var x=this.x;
var y=this.y;
if (X < x || Y < y ) {
return false;
}if (W > 0) {
w+=x;
W+=X;
if (W <= X) {
if (w >= x || W > w ) return false;
} else {
if (w >= x && W > w ) return false;
}} else if ((x + w) < X) {
return false;
}if (H > 0) {
h+=y;
H+=Y;
if (H <= Y) {
if (h >= y || H > h ) return false;
} else {
if (h >= y && H > h ) return false;
}} else if ((y + h) < Y) {
return false;
}return true;
}, p$1);

Clazz.newMeth(C$, 'getCaretWidth$I', function (height) {
return 1;
});
;
(function(){var C$=Clazz.newClass(P$.DefaultCaret, "SafeScroller", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.r=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Rectangle', function (r) {
C$.$init$.apply(this);
this.r=r;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if (this.this$0.component != null ) {
this.this$0.component.scrollRectToVisible$java_awt_Rectangle(this.r);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.DefaultCaret, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.beans.PropertyChangeListener', 'javax.swing.event.DocumentListener', 'java.awt.event.ActionListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (this.this$0.width == 0 || this.this$0.height == 0 ) {
if (this.this$0.component != null ) {
}}this.this$0.visible=!this.this$0.visible;
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent', function (e) {
if (this.this$0.getUpdatePolicy$.apply(this.this$0, []) == 1 || (this.this$0.getUpdatePolicy$.apply(this.this$0, []) == 0 && !$I$(1).isEventDispatchThread$() ) ) {
if ((e.getOffset$() <= this.this$0.dot || e.getOffset$() <= this.this$0.mark ) && this.this$0.selectionTag != null  ) {
try {
this.this$0.component.getHighlighter$().changeHighlight$O$I$I(this.this$0.selectionTag, Math.min(this.this$0.dot, this.this$0.mark), Math.max(this.this$0.dot, this.this$0.mark));
} catch (e1) {
if (Clazz.exceptionOf(e1,"javax.swing.text.BadLocationException")){
e1.printStackTrace$();
} else {
throw e1;
}
}
}return;
}var adjust=0;
var offset=e.getOffset$();
var length=e.getLength$();
var newDot=this.this$0.dot;
var changed=($s$[0] = 0, $s$[0]);
if (Clazz.instanceOf(e, "javax.swing.text.AbstractDocument.UndoRedoDocumentEvent")) {
this.this$0.setDot$I.apply(this.this$0, [offset + length]);
return;
}if (newDot >= offset) {
newDot+=length;
changed=($s$[0] = changed|(1), $s$[0]);
}var newMark=this.this$0.mark;
if (newMark >= offset) {
newMark+=length;
changed=($s$[0] = changed|(2), $s$[0]);
}if (changed != 0) {
var dotBias=this.this$0.dotBias;
if (this.this$0.dot == offset) {
var doc=this.this$0.component.getDocument$();
var isNewline;
try {
var s=Clazz.new_($I$(2));
doc.getText$I$I$javax_swing_text_Segment(newDot - 1, 1, s);
isNewline=(s.count > 0 && s.array[s.offset] == "\n" );
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
isNewline=false;
} else {
throw ble;
}
}
if (isNewline) {
dotBias=$I$(3).Forward;
} else {
dotBias=$I$(3).Backward;
}}if (newMark == newDot) {
this.this$0.setDot$I$javax_swing_text_Position_Bias.apply(this.this$0, [newDot, dotBias]);
this.this$0.ensureValidPosition$.apply(this.this$0, []);
} else {
this.this$0.setDot$I$javax_swing_text_Position_Bias.apply(this.this$0, [newMark, this.this$0.markBias]);
if (this.this$0.getDot$.apply(this.this$0, []) == newMark) {
this.this$0.moveDot$I$javax_swing_text_Position_Bias.apply(this.this$0, [newDot, dotBias]);
}this.this$0.ensureValidPosition$.apply(this.this$0, []);
}}});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent', function (e) {
if (this.this$0.getUpdatePolicy$.apply(this.this$0, []) == 1 || (this.this$0.getUpdatePolicy$.apply(this.this$0, []) == 0 && !$I$(1).isEventDispatchThread$() ) ) {
var length=this.this$0.component.getDocument$().getLength$();
this.this$0.dot=Math.min(this.this$0.dot, length);
this.this$0.mark=Math.min(this.this$0.mark, length);
if ((e.getOffset$() < this.this$0.dot || e.getOffset$() < this.this$0.mark ) && this.this$0.selectionTag != null  ) {
try {
this.this$0.component.getHighlighter$().changeHighlight$O$I$I(this.this$0.selectionTag, Math.min(this.this$0.dot, this.this$0.mark), Math.max(this.this$0.dot, this.this$0.mark));
} catch (e1) {
if (Clazz.exceptionOf(e1,"javax.swing.text.BadLocationException")){
e1.printStackTrace$();
} else {
throw e1;
}
}
}return;
}var offs0=e.getOffset$();
var offs1=offs0 + e.getLength$();
var adjust=0;
var newDot=this.this$0.dot;
var adjustDotBias=false;
var newMark=this.this$0.mark;
var adjustMarkBias=false;
if (Clazz.instanceOf(e, "javax.swing.text.AbstractDocument.UndoRedoDocumentEvent")) {
this.this$0.setDot$I.apply(this.this$0, [offs0]);
return;
}if (newDot >= offs1) {
newDot-=(offs1 - offs0);
if (newDot == offs1) {
adjustDotBias=true;
}} else if (newDot >= offs0) {
newDot=offs0;
adjustDotBias=true;
}if (newMark >= offs1) {
newMark-=(offs1 - offs0);
if (newMark == offs1) {
adjustMarkBias=true;
}} else if (newMark >= offs0) {
newMark=offs0;
adjustMarkBias=true;
}if (newMark == newDot) {
this.this$0.forceCaretPositionChange=true;
try {
this.this$0.setDot$I$javax_swing_text_Position_Bias.apply(this.this$0, [newDot, this.this$0.guessBiasForOffset$I$javax_swing_text_Position_Bias$Z.apply(this.this$0, [newDot, this.this$0.dotBias, this.this$0.dotLTR])]);
} finally {
this.this$0.forceCaretPositionChange=false;
}
this.this$0.ensureValidPosition$.apply(this.this$0, []);
} else {
var dotBias=this.this$0.dotBias;
var markBias=this.this$0.markBias;
if (adjustDotBias) {
dotBias=this.this$0.guessBiasForOffset$I$javax_swing_text_Position_Bias$Z.apply(this.this$0, [newDot, dotBias, this.this$0.dotLTR]);
}if (adjustMarkBias) {
markBias=this.this$0.guessBiasForOffset$I$javax_swing_text_Position_Bias$Z.apply(this.this$0, [this.this$0.mark, markBias, this.this$0.markLTR]);
}this.this$0.setDot$I$javax_swing_text_Position_Bias.apply(this.this$0, [newMark, markBias]);
if (this.this$0.getDot$.apply(this.this$0, []) == newMark) {
this.this$0.moveDot$I$javax_swing_text_Position_Bias.apply(this.this$0, [newDot, dotBias]);
}this.this$0.ensureValidPosition$.apply(this.this$0, []);
}});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent', function (e) {
if (this.this$0.getUpdatePolicy$.apply(this.this$0, []) == 1 || (this.this$0.getUpdatePolicy$.apply(this.this$0, []) == 0 && !$I$(1).isEventDispatchThread$() ) ) {
return;
}if (Clazz.instanceOf(e, "javax.swing.text.AbstractDocument.UndoRedoDocumentEvent")) {
this.this$0.setDot$I.apply(this.this$0, [e.getOffset$() + e.getLength$()]);
}});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
var oldValue=evt.getOldValue$();
var newValue=evt.getNewValue$();
if ((Clazz.instanceOf(oldValue, "javax.swing.text.Document")) || (Clazz.instanceOf(newValue, "javax.swing.text.Document")) ) {
this.this$0.setDot$I.apply(this.this$0, [0]);
if (oldValue != null ) {
(oldValue).removeDocumentListener$javax_swing_event_DocumentListener(this);
}if (newValue != null ) {
(newValue).addDocumentListener$javax_swing_event_DocumentListener(this);
}} else if ("enabled".equals$O(evt.getPropertyName$())) {
var enabled=evt.getNewValue$();
if (this.this$0.component.isFocusOwner$()) {
if (enabled === $I$(4).TRUE ) {
if (this.this$0.component.isEditable$()) {
this.this$0.setVisible$Z.apply(this.this$0, [true]);
}this.this$0.setSelectionVisible$Z.apply(this.this$0, [true]);
} else {
this.this$0.setVisible$Z.apply(this.this$0, [false]);
this.this$0.setSelectionVisible$Z.apply(this.this$0, [false]);
}}}});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.DefaultCaret, "DefaultFilterBypass", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.NavigationFilter','.FilterBypass']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCaret$', function () {
return this.this$0;
});

Clazz.newMeth(C$, 'setDot$I$javax_swing_text_Position_Bias', function (dot, bias) {
this.this$0.handleSetDot$I$javax_swing_text_Position_Bias.apply(this.this$0, [dot, bias]);
});

Clazz.newMeth(C$, 'moveDot$I$javax_swing_text_Position_Bias', function (dot, bias) {
this.this$0.handleMoveDot$I$javax_swing_text_Position_Bias.apply(this.this$0, [dot, bias]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:23 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
