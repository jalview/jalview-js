(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.SwingUtilities',['javax.swing.JComponent','.IntVector'],'javajs.util.Lst','javax.swing.JComponent','javax.swing.event.EventListenerList','java.util.HashSet','javax.swing.KeyStroke','java.awt.Rectangle','javax.swing.RepaintManager','sun.font.FontDesignMetrics','java.awt.Insets','javax.swing.ClientPropertyKey',['javax.swing.JComponent','.ActionStandin'],'java.util.Hashtable','javax.swing.KeyboardManager','javax.swing.InputMap','javax.swing.ComponentInputMap','javax.swing.ActionMap',['java.awt.Component','.BaselineResizeBehavior'],'java.util.Locale',['javax.swing.JComponent','.KeyboardState'],'javax.swing.Popup','javax.swing.ToolTipManager','javax.swing.JToolTip','javax.swing.Autoscroller','javax.swing.ArrayTable','swingjs.JSUtil','javax.swing.AncestorNotifier','javax.swing.event.AncestorListener','java.beans.PropertyChangeListener','java.util.ArrayList','java.awt.JSComponent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JComponent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.Container');
C$.managingFocusForwardTraversalKeys=null;
C$.managingFocusBackwardTraversalKeys=null;
C$.DEBUG_GRAPHICS_LOADED=false;
C$.INPUT_VERIFIER_SOURCE_KEY=null;
C$._tempRect=null;
C$.componentObtainingGraphicsFrom=null;
C$.componentObtainingGraphicsFromLock=null;
C$.focusController=null;
C$.JComponent_TRANSFER_HANDLER=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.INPUT_VERIFIER_SOURCE_KEY= Clazz.new_();
C$._tempRect=Clazz.new_($I$(3));
C$.componentObtainingGraphicsFromLock= Clazz.new_();
C$.focusController=((P$.JComponent$1||
(function(){var C$=Clazz.newClass(P$, "JComponent$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'sun.awt.RequestFocusController', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['acceptRequestFocus$java_awt_Component$java_awt_Component$Z$Z$sun_awt_CausedFocusEvent_Cause','acceptRequestFocus$'], function (from, to, temporary, focusedWindowChangeAllowed, cause) {
if ((to == null ) || !(Clazz.instanceOf(to, "javax.swing.JComponent")) ) {
return true;
}if ((from == null ) || !(Clazz.instanceOf(from, "javax.swing.JComponent")) ) {
return true;
}var target=to;
if (!target.getVerifyInputWhenFocusTarget$()) {
return true;
}var jFocusOwner=from;
var iv=jFocusOwner.getInputVerifier$();
if (iv == null ) {
return true;
} else {
var currentSource=$I$(1).appContextGet$O($I$(4).INPUT_VERIFIER_SOURCE_KEY);
if (currentSource === jFocusOwner ) {
return true;
}$I$(1).appContextPut$O$O($I$(4).INPUT_VERIFIER_SOURCE_KEY, jFocusOwner);
try {
return iv.shouldYieldFocus$javax_swing_JComponent(jFocusOwner);
} finally {
if (currentSource != null ) {
$I$(1).appContextPut$O$O($I$(4).INPUT_VERIFIER_SOURCE_KEY, currentSource);
} else {
$I$(1).appContextRemove$O($I$(4).INPUT_VERIFIER_SOURCE_KEY);
}}
}});
})()
), Clazz.new_(P$.JComponent$1.$init$, [this, null]));
C$.JComponent_TRANSFER_HANDLER="transfer_handler";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._isAlignmentXSet=false;
this._alignmentX=0;
this._isAlignmentYSet=false;
this._alignmentY=0;
this.listenerList=null;
this.clientProperties=null;
this._autoscrolls=false;
this._border=null;
this._flags=0;
this.verifyInputWhenFocusTarget=false;
this.paintingChild=null;
this._popupMenu=null;
this.focusInputMap=null;
this.ancestorInputMap=null;
this.windowInputMap=null;
this.actionMap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.listenerList=Clazz.new_($I$(5));
this.verifyInputWhenFocusTarget=true;
}, 1);

Clazz.newMeth(C$, 'safelyGetGraphics$java_awt_Component', function (c) {
return C$.safelyGetGraphics$java_awt_Component$java_awt_Component(c, $I$(1).getRoot$java_awt_Component(c));
}, 1);

Clazz.newMeth(C$, 'safelyGetGraphics$java_awt_Component$java_awt_Component', function (c, root) {
{
C$.componentObtainingGraphicsFrom=root;
var g=c.getGraphics$();
C$.componentObtainingGraphicsFrom=null;
return g;
}}, 1);

Clazz.newMeth(C$, 'getGraphicsInvoked$java_awt_Component', function (root) {
if (!C$.isComponentObtainingGraphicsFrom$java_awt_Component(root)) {
var rootPane=(root).getRootPane$();
if (rootPane != null ) {
rootPane.disableTrueDoubleBuffering$();
}}}, 1);

Clazz.newMeth(C$, 'isComponentObtainingGraphicsFrom$java_awt_Component', function (c) {
{
return (C$.componentObtainingGraphicsFrom === c );
}}, 1);

Clazz.newMeth(C$, 'getManagingFocusForwardTraversalKeys$', function () {
{
if (C$.managingFocusForwardTraversalKeys == null ) {
C$.managingFocusForwardTraversalKeys=Clazz.new_($I$(6).c$$I,[1]);
C$.managingFocusForwardTraversalKeys.add$TE($I$(7).getKeyStroke$I$I(9, 2));
}}return C$.managingFocusForwardTraversalKeys;
}, 1);

Clazz.newMeth(C$, 'getManagingFocusBackwardTraversalKeys$', function () {
{
if (C$.managingFocusBackwardTraversalKeys == null ) {
C$.managingFocusBackwardTraversalKeys=Clazz.new_($I$(6).c$$I,[1]);
C$.managingFocusBackwardTraversalKeys.add$TE($I$(7).getKeyStroke$I$I(9, 3));
}}return C$.managingFocusBackwardTraversalKeys;
}, 1);

Clazz.newMeth(C$, 'fetchRectangle$', function () {
{
var rect;
var size=C$._tempRect.size$();
if (size > 0) {
rect=C$._tempRect.removeItemAt$I(size - 1);
} else {
rect=Clazz.new_($I$(8).c$$I$I$I$I,[0, 0, 0, 0]);
}return rect;
}}, 1);

Clazz.newMeth(C$, 'recycleRectangle$java_awt_Rectangle', function (rect) {
{
C$._tempRect.addLast$TV(rect);
}}, 1);

Clazz.newMeth(C$, 'setInheritsPopupMenu$Z', function (value) {
var oldValue=p$1.getFlag$I.apply(this, [23]);
p$1.setFlag$I$Z.apply(this, [23, value]);
this.firePropertyChange$S$Z$Z("inheritsPopupMenu", oldValue, value);
});

Clazz.newMeth(C$, 'getInheritsPopupMenu$', function () {
return p$1.getFlag$I.apply(this, [23]);
});

Clazz.newMeth(C$, 'setComponentPopupMenu$javax_swing_JPopupMenu', function (popup) {
if (popup != null ) {
this.enableEvents$J(16);
}var oldPopup=this._popupMenu;
this._popupMenu=popup;
this.firePropertyChange$S$O$O("componentPopupMenu", oldPopup, popup);
});

Clazz.newMeth(C$, 'getComponentPopupMenu$', function () {
if (!this.getInheritsPopupMenu$()) {
return this._popupMenu;
}if (this._popupMenu == null ) {
var parent=this.getParent$();
while (parent != null ){
if (Clazz.instanceOf(parent, "javax.swing.JComponent")) {
return (parent).getComponentPopupMenu$();
}if (parent.isWindowOrJSApplet$()) {
break;
}parent=parent.getParent$();
}
return null;
}return this._popupMenu;
});

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.enableEvents$J(8);
C$.superclazz.prototype.setLocale$java_util_Locale.apply(this, [C$.getDefaultLocale$()]);
}, 1);

Clazz.newMeth(C$, 'getComponentGraphics$java_awt_Graphics', function (g) {
var componentGraphics=g;
componentGraphics.setColor$java_awt_Color(this.getForeground$());
componentGraphics.setFont$java_awt_Font(this.getFont$());
return componentGraphics;
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
if (this.ui != null ) {
var scratchGraphics=(g == null ) ? null : g.create$();
try {
this._isBackgroundPainted=false;
this.ui.update$java_awt_Graphics$javax_swing_JComponent(scratchGraphics, this);
var jsg=this.getJSGraphic2D$java_awt_Graphics(scratchGraphics);
this._isBackgroundPainted=(jsg != null  && jsg.isBackgroundPainted$() );
} finally {
scratchGraphics.dispose$();
}
}});

Clazz.newMeth(C$, 'paintChildren$java_awt_Graphics', function (g) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
var i=this.getComponentCount$() - 1;
if (i < 0) {
return;
}if (this.paintingChild != null  && (Clazz.instanceOf(this.paintingChild, "javax.swing.JComponent")) ) {
for (; i >= 0; i--) {
if (this.getComponent$I(i) === this.paintingChild ) {
break;
}}
}var tmpRect=C$.fetchRectangle$();
var tmpRect2=C$.fetchRectangle$();
for (; i >= 0; i--) {
var jc=this.getComponent$I(i);
if (jc != null  && jc.isVisible$() ) {
jc.getBounds$java_awt_Rectangle(tmpRect);
var isContentPane=jc.getRootPane$().getContentPane$() === jc ;
var vr=(Clazz.instanceOf(jc, "javax.swing.JTable") ? jc.getVisibleRect$() : tmpRect);
var jsg=g.create$I$I$I$I(tmpRect.x, (isContentPane ? 0 : tmpRect.y), vr.width, vr.height);
jsg.setColor$java_awt_Color(jc.getForeground$());
jsg.setFont$java_awt_Font(jc.getFont$());
var shouldSetFlagBack=false;
try {
jc.checkBackgroundPainted$swingjs_JSGraphics2D$Z(jsg, true);
jc.paint$java_awt_Graphics(jsg);
jc.checkBackgroundPainted$swingjs_JSGraphics2D$Z(this.getJSGraphic2D$java_awt_Graphics(jsg), false);
} finally {
jsg.dispose$();
if (shouldSetFlagBack) {
p$1.setFlag$I$Z.apply((jc), [1, false]);
p$1.setFlag$I$Z.apply((jc), [2, false]);
}}
}}
C$.recycleRectangle$java_awt_Rectangle(tmpRect2);
C$.recycleRectangle$java_awt_Rectangle(tmpRect);
}});

Clazz.newMeth(C$, 'paintBorder$java_awt_Graphics', function (g) {
var border=this.getBorder$();
if (border != null ) {
border.paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I(this, g, 0, 0, this.getWidth$(), this.getHeight$());
}});

Clazz.newMeth(C$, 'update$java_awt_Graphics', function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
var shouldClearPaintFlags=false;
if ((this.getWidth$() <= 0) || (this.getHeight$() <= 0) ) {
return;
}var componentGraphics=this.getComponentGraphics$java_awt_Graphics(g);
var cg=componentGraphics.create$();
try {
if (this.getParent$() != null  && !(Clazz.instanceOf(this.getParent$(), "javax.swing.JComponent")) ) {
p$1.adjustPaintFlags.apply(this, []);
shouldClearPaintFlags=true;
}var printing=p$1.getFlag$I.apply(this, [11]);
if (!printing) {
p$1.paintComponentSafely$java_awt_Graphics.apply(this, [cg]);
p$1.paintBorderSafely$java_awt_Graphics.apply(this, [cg]);
} else {
p$1.printComponentSafely$java_awt_Graphics.apply(this, [cg]);
p$1.printBorderSafely$java_awt_Graphics.apply(this, [cg]);
}if (!printing) {
this.paintChildren$java_awt_Graphics(cg);
} else {
this.printChildren$java_awt_Graphics(cg);
}} finally {
cg.dispose$();
if (shouldClearPaintFlags) {
p$1.setFlag$I$Z.apply(this, [1, false]);
p$1.setFlag$I$Z.apply(this, [2, false]);
p$1.setFlag$I$Z.apply(this, [11, false]);
p$1.setFlag$I$Z.apply(this, [12, false]);
}}
});

Clazz.newMeth(C$, 'paintForceDoubleBuffered$java_awt_Graphics', function (g) {
var rm=$I$(9).currentManager$javax_swing_JComponent(this);
var clip=g.getClipBounds$();
rm.beginPaint$();
p$1.setFlag$I$Z.apply(this, [13, true]);
try {
rm.paint$javax_swing_JComponent$javax_swing_JComponent$java_awt_Graphics$I$I$I$I(this, this, g, clip.x, clip.y, clip.width, clip.height);
} finally {
rm.endPaint$();
p$1.setFlag$I$Z.apply(this, [13, false]);
}
});

Clazz.newMeth(C$, 'isPainting$', function () {
var component=this;
while (component != null ){
if (Clazz.instanceOf(component, "javax.swing.JComponent") && p$1.getFlag$I.apply((component), [1]) ) {
return true;
}component=component.getParent$();
}
return false;
});

Clazz.newMeth(C$, 'adjustPaintFlags', function () {
var jparent=null;
var parent;
for (parent=this.getParent$(); parent != null ; parent=parent.getParent$()) {
if (Clazz.instanceOf(parent, "javax.swing.JComponent")) {
jparent=parent;
if (p$1.getFlag$I.apply(jparent, [1])) p$1.setFlag$I$Z.apply(this, [1, true]);
if (p$1.getFlag$I.apply(jparent, [2])) p$1.setFlag$I$Z.apply(this, [2, true]);
if (p$1.getFlag$I.apply(jparent, [11])) p$1.setFlag$I$Z.apply(this, [11, true]);
if (p$1.getFlag$I.apply(jparent, [12])) p$1.setFlag$I$Z.apply(this, [12, true]);
break;
}}
}, p$1);

Clazz.newMeth(C$, 'printAll$java_awt_Graphics', function (g) {
p$1.setFlag$I$Z.apply(this, [12, true]);
try {
this.print$java_awt_Graphics(g);
} finally {
p$1.setFlag$I$Z.apply(this, [12, false]);
}
});

Clazz.newMeth(C$, 'print$java_awt_Graphics', function (g) {
p$1.setFlag$I$Z.apply(this, [11, true]);
this.firePropertyChange$S$Z$Z("paintingForPrint", false, true);
try {
this.paint$java_awt_Graphics(g);
} finally {
p$1.setFlag$I$Z.apply(this, [11, false]);
this.firePropertyChange$S$Z$Z("paintingForPrint", true, false);
}
});

Clazz.newMeth(C$, 'printComponent$java_awt_Graphics', function (g) {
this.paintComponent$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'printChildren$java_awt_Graphics', function (g) {
this.paintChildren$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'printBorder$java_awt_Graphics', function (g) {
this.paintBorder$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'isPaintingTile$', function () {
return p$1.getFlag$I.apply(this, [2]);
});

Clazz.newMeth(C$, 'isPaintingForPrint$', function () {
return p$1.getFlag$I.apply(this, [11]);
});

Clazz.newMeth(C$, 'isManagingFocus$', function () {
return false;
});

Clazz.newMeth(C$, 'registerNextFocusableComponent', function () {
p$1.registerNextFocusableComponent$java_awt_Component.apply(this, [this.getNextFocusableComponent$()]);
}, p$1);

Clazz.newMeth(C$, 'registerNextFocusableComponent$java_awt_Component', function (nextFocusableComponent) {
if (nextFocusableComponent == null ) {
return;
}}, p$1);

Clazz.newMeth(C$, 'deregisterNextFocusableComponent', function () {
var nextFocusableComponent=this.getNextFocusableComponent$();
if (nextFocusableComponent == null ) {
return;
}var nearestRoot=(this.isFocusCycleRoot$()) ? this : this.getFocusCycleRootAncestor$();
if (nearestRoot == null ) {
return;
}}, p$1);

Clazz.newMeth(C$, 'setNextFocusableComponent$java_awt_Component', function (aComponent) {
var displayable=this.isDisplayable$();
if (displayable) {
p$1.deregisterNextFocusableComponent.apply(this, []);
}this.putClientProperty$O$O("nextFocus", aComponent);
if (displayable) {
p$1.registerNextFocusableComponent$java_awt_Component.apply(this, [aComponent]);
}});

Clazz.newMeth(C$, 'getNextFocusableComponent$', function () {
return this.getClientProperty$O("nextFocus");
});

Clazz.newMeth(C$, 'setRequestFocusEnabled$Z', function (requestFocusEnabled) {
p$1.setFlag$I$Z.apply(this, [22, !requestFocusEnabled]);
});

Clazz.newMeth(C$, 'isRequestFocusEnabled$', function () {
return !p$1.getFlag$I.apply(this, [22]);
});

Clazz.newMeth(C$, 'requestFocus$', function () {
C$.superclazz.prototype.requestFocus$.apply(this, []);
});

Clazz.newMeth(C$, 'requestFocus$Z', function (temporary) {
C$.superclazz.prototype.requestFocus$.apply(this, []);
return true;
});

Clazz.newMeth(C$, 'requestFocusInWindow$', function () {
return C$.superclazz.prototype.requestFocusInWindow$.apply(this, []);
});

Clazz.newMeth(C$, 'requestFocusInWindow$Z', function (temporary) {
return C$.superclazz.prototype.requestFocusInWindow$.apply(this, []);
});

Clazz.newMeth(C$, 'grabFocus$', function () {
this.requestFocus$();
});

Clazz.newMeth(C$, 'setVerifyInputWhenFocusTarget$Z', function (verifyInputWhenFocusTarget) {
var oldVerifyInputWhenFocusTarget=this.verifyInputWhenFocusTarget;
this.verifyInputWhenFocusTarget=verifyInputWhenFocusTarget;
this.firePropertyChange$S$Z$Z("verifyInputWhenFocusTarget", oldVerifyInputWhenFocusTarget, verifyInputWhenFocusTarget);
});

Clazz.newMeth(C$, 'getVerifyInputWhenFocusTarget$', function () {
return this.verifyInputWhenFocusTarget;
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font', function (font) {
return $I$(10).getMetrics$java_awt_Font(font);
});

Clazz.newMeth(C$, 'setPreferredSize$java_awt_Dimension', function (preferredSize) {
C$.superclazz.prototype.setPreferredSize$java_awt_Dimension.apply(this, [preferredSize]);
});

Clazz.newMeth(C$, 'getPreferredSize$', function () {
return this.getPrefSizeJComp$();
});

Clazz.newMeth(C$, 'getPrefSizeJComp$', function () {
var size=(!this.isPreferredSizeSet$() && this.ui != null   ? this.ui.getPreferredSize$javax_swing_JComponent(this) : null);
return (size == null  ? this.preferredSize$() : size);
});

Clazz.newMeth(C$, 'setMaximumSize$java_awt_Dimension', function (maximumSize) {
C$.superclazz.prototype.setMaximumSize$java_awt_Dimension.apply(this, [maximumSize]);
});

Clazz.newMeth(C$, 'getMaximumSize$', function () {
if (this.isMaximumSizeSet$()) {
return C$.superclazz.prototype.getMaximumSize$.apply(this, []);
}var size=null;
if (this.ui != null ) {
size=this.ui.getMaximumSize$javax_swing_JComponent(this);
}return (size != null ) ? size : C$.superclazz.prototype.getMaximumSize$.apply(this, []);
});

Clazz.newMeth(C$, 'setMinimumSize$java_awt_Dimension', function (minimumSize) {
C$.superclazz.prototype.setMinimumSize$java_awt_Dimension.apply(this, [minimumSize]);
});

Clazz.newMeth(C$, 'getMinimumSize$', function () {
if (this.isMinimumSizeSet$()) {
return C$.superclazz.prototype.getMinimumSize$.apply(this, []);
}var size=null;
if (this.ui != null ) {
size=this.ui.getMinimumSize$javax_swing_JComponent(this);
}return (size != null ) ? size : C$.superclazz.prototype.getMinimumSize$.apply(this, []);
});

Clazz.newMeth(C$, 'contains$I$I', function (x, y) {
return (this.ui != null ) ? this.ui.contains$javax_swing_JComponent$I$I(this, x, y) : this.inside$I$I(x, y);
});

Clazz.newMeth(C$, 'setBorder$javax_swing_border_Border', function (border) {
var oldBorder=this._border;
this._border=border;
this.firePropertyChange$S$O$O("border", oldBorder, border);
if (border !== oldBorder ) {
if (border == null  || oldBorder == null   || !(border.getBorderInsets$java_awt_Component(this).equals$O(oldBorder.getBorderInsets$java_awt_Component(this))) ) {
this.revalidate$();
}this.repaint$();
}});

Clazz.newMeth(C$, 'getBorder$', function () {
return this._border;
});

Clazz.newMeth(C$, 'getInsets$', function () {
if (this._border != null ) {
return this._border.getBorderInsets$java_awt_Component(this);
}return C$.superclazz.prototype.getInsets$.apply(this, []);
});

Clazz.newMeth(C$, 'getInsets$java_awt_Insets', function (insets) {
var $in=null;
if (insets == null ) {
insets=Clazz.new_($I$(11).c$$I$I$I$I,[0, 0, 0, 0]);
}if (this.isAWT || this.isAWTContainer ||false) {
$in=this.getInsets$();
} else {
if (this._border == null ) {
insets.left=insets.top=insets.right=insets.bottom=0;
} else {
if (Clazz.instanceOf(this._border, "javax.swing.border.AbstractBorder")) {
$in=(this._border).getBorderInsets$java_awt_Component$java_awt_Insets(this, insets);
}$in=this._border.getBorderInsets$java_awt_Component(this);
}}if ($in != null ) {
insets.left=$in.left;
insets.right=$in.right;
insets.top=$in.top;
insets.bottom=$in.bottom;
}return insets;
});

Clazz.newMeth(C$, 'getAlignmentY$', function () {
if (this._isAlignmentYSet) {
return this._alignmentY;
}return C$.superclazz.prototype.getAlignmentY$.apply(this, []);
});

Clazz.newMeth(C$, 'setAlignmentY$F', function (alignmentY) {
this._alignmentY=alignmentY > 1.0  ? 1.0 : alignmentY < 0.0  ? 0.0 : alignmentY;
this._isAlignmentYSet=true;
});

Clazz.newMeth(C$, 'getAlignmentX$', function () {
if (this._isAlignmentXSet) {
return this._alignmentX;
}return C$.superclazz.prototype.getAlignmentX$.apply(this, []);
});

Clazz.newMeth(C$, 'setAlignmentX$F', function (alignmentX) {
this._alignmentX=alignmentX > 1.0  ? 1.0 : alignmentX < 0.0  ? 0.0 : alignmentX;
this._isAlignmentXSet=true;
});

Clazz.newMeth(C$, 'setInputVerifier$javax_swing_InputVerifier', function (inputVerifier) {
var oldInputVerifier=this.getClientProperty$O($I$(12).JComponent_INPUT_VERIFIER);
this.putClientProperty$O$O($I$(12).JComponent_INPUT_VERIFIER, inputVerifier);
this.firePropertyChange$S$O$O("inputVerifier", oldInputVerifier, inputVerifier);
});

Clazz.newMeth(C$, 'getInputVerifier$', function () {
return this.getClientProperty$O($I$(12).JComponent_INPUT_VERIFIER);
});

Clazz.newMeth(C$, 'getGraphics$', function () {
return C$.superclazz.prototype.getGraphics$.apply(this, []);
});

Clazz.newMeth(C$, 'registerKeyboardAction$java_awt_event_ActionListener$S$javax_swing_KeyStroke$I', function (anAction, aCommand, aKeyStroke, aCondition) {
var inputMap=this.getInputMap$I$Z(aCondition, true);
if (inputMap != null ) {
var actionMap=this.getActionMap$Z(true);
var action=Clazz.new_($I$(13).c$$java_awt_event_ActionListener$S, [this, null, anAction, aCommand]);
inputMap.put$javax_swing_KeyStroke$O(aKeyStroke, action);
if (actionMap != null ) {
actionMap.put$O$javax_swing_Action(action, action);
}}});

Clazz.newMeth(C$, 'registerWithKM$', function () {
p$1.registerWithKeyboardManager$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'registerWithKeyboardManager$Z', function (onlyIfNew) {
if (java.awt.JSComponent.getTopInvokableAncestor$java_awt_Component$Z(this, true) == null ) return;
var inputMap=this.getInputMap$I$Z(2, false);
var strokes;
var registered=this.getClientProperty$O("_WhenInFocusedWindow");
if (inputMap != null ) {
strokes=inputMap.allKeys$();
if (strokes != null ) {
for (var counter=strokes.length - 1; counter >= 0; counter--) {
if (!onlyIfNew || registered == null   || registered.get$O(strokes[counter]) == null  ) {
p$1.registerWithKeyboardManager$javax_swing_KeyStroke.apply(this, [strokes[counter]]);
}if (registered != null ) {
registered.remove$O(strokes[counter]);
}}
}} else {
strokes=null;
}if (registered != null  && registered.size$() > 0 ) {
var keys=registered.keys$();
while (keys.hasMoreElements$()){
var ks=keys.nextElement$();
p$1.unregisterWithKeyboardManager$javax_swing_KeyStroke.apply(this, [ks]);
}
registered.clear$();
}if (strokes != null  && strokes.length > 0 ) {
if (registered == null ) {
registered=Clazz.new_($I$(14).c$$I,[strokes.length]);
this.putClientProperty$O$O("_WhenInFocusedWindow", registered);
}for (var counter=strokes.length - 1; counter >= 0; counter--) {
registered.put$TK$TV(strokes[counter], strokes[counter]);
}
} else {
this.putClientProperty$O$O("_WhenInFocusedWindow", null);
}}, p$1);

Clazz.newMeth(C$, 'unregisterWithKeyboardManager', function () {
var registered=this.getClientProperty$O("_WhenInFocusedWindow");
if (registered != null  && registered.size$() > 0 ) {
var keys=registered.keys$();
while (keys.hasMoreElements$()){
var ks=keys.nextElement$();
p$1.unregisterWithKeyboardManager$javax_swing_KeyStroke.apply(this, [ks]);
}
}this.putClientProperty$O$O("_WhenInFocusedWindow", null);
}, p$1);

Clazz.newMeth(C$, 'componentInputMapChanged$javax_swing_ComponentInputMap', function (inputMap) {
var km=this.getInputMap$I$Z(2, false);
while (km !== inputMap  && km != null  ){
km=km.getParent$();
}
if (km != null ) {
p$1.registerWithKeyboardManager$Z.apply(this, [false]);
}});

Clazz.newMeth(C$, 'registerWithKeyboardManager$javax_swing_KeyStroke', function (aKeyStroke) {
$I$(15).getCurrentManager$().registerKeyStroke$javax_swing_KeyStroke$javax_swing_JComponent(aKeyStroke, this);
}, p$1);

Clazz.newMeth(C$, 'unregisterWithKeyboardManager$javax_swing_KeyStroke', function (aKeyStroke) {
$I$(15).getCurrentManager$().unregisterKeyStroke$javax_swing_KeyStroke$javax_swing_JComponent(aKeyStroke, this);
}, p$1);

Clazz.newMeth(C$, 'registerKeyboardAction$java_awt_event_ActionListener$javax_swing_KeyStroke$I', function (anAction, aKeyStroke, aCondition) {
this.registerKeyboardAction$java_awt_event_ActionListener$S$javax_swing_KeyStroke$I(anAction, null, aKeyStroke, aCondition);
});

Clazz.newMeth(C$, 'unregisterKeyboardAction$javax_swing_KeyStroke', function (aKeyStroke) {
var am=this.getActionMap$Z(false);
for (var counter=0; counter < 3; counter++) {
var km=this.getInputMap$I$Z(counter, false);
if (km != null ) {
var actionID=km.get$javax_swing_KeyStroke(aKeyStroke);
if (am != null  && actionID != null  ) {
am.remove$O(actionID);
}km.remove$javax_swing_KeyStroke(aKeyStroke);
}}
});

Clazz.newMeth(C$, 'getRegisteredKeyStrokes$', function () {
var counts=Clazz.array(Integer.TYPE, [3]);
var strokes=Clazz.array($I$(7), [3, null]);
for (var counter=0; counter < 3; counter++) {
var km=this.getInputMap$I$Z(counter, false);
strokes[counter]=(km != null ) ? km.allKeys$() : null;
counts[counter]=(strokes[counter] != null ) ? strokes[counter].length : 0;
}
var retValue=Clazz.array($I$(7), [counts[0] + counts[1] + counts[2] ]);
for (var counter=0, last=0; counter < 3; counter++) {
if (counts[counter] > 0) {
System.arraycopy$O$I$O$I$I(strokes[counter], 0, retValue, last, counts[counter]);
last+=counts[counter];
}}
return retValue;
});

Clazz.newMeth(C$, 'getConditionForKeyStroke$javax_swing_KeyStroke', function (aKeyStroke) {
for (var counter=0; counter < 3; counter++) {
var inputMap=this.getInputMap$I$Z(counter, false);
if (inputMap != null  && inputMap.get$javax_swing_KeyStroke(aKeyStroke) != null  ) {
return counter;
}}
return -1;
});

Clazz.newMeth(C$, 'getActionForKeyStroke$javax_swing_KeyStroke', function (aKeyStroke) {
var am=this.getActionMap$Z(false);
if (am == null ) {
return null;
}for (var counter=0; counter < 3; counter++) {
var inputMap=this.getInputMap$I$Z(counter, false);
if (inputMap != null ) {
var actionBinding=inputMap.get$javax_swing_KeyStroke(aKeyStroke);
if (actionBinding != null ) {
var action=am.get$O(actionBinding);
if (Clazz.instanceOf(action, "javax.swing.JComponent.ActionStandin")) {
return (action).actionListener;
}return action;
}}}
return null;
});

Clazz.newMeth(C$, 'resetKeyboardActions$', function () {
for (var counter=0; counter < 3; counter++) {
var inputMap=this.getInputMap$I$Z(counter, false);
if (inputMap != null ) {
inputMap.clear$();
}}
var am=this.getActionMap$Z(false);
if (am != null ) {
am.clear$();
}});

Clazz.newMeth(C$, 'setInputMap$I$javax_swing_InputMap', function (condition, map) {
switch (condition) {
case 2:
if (map != null  && !(Clazz.instanceOf(map, "javax.swing.ComponentInputMap")) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["WHEN_IN_FOCUSED_WINDOW InputMaps must be of type ComponentInputMap"]);
}this.windowInputMap=map;
p$1.setFlag$I$Z.apply(this, [7, true]);
p$1.registerWithKeyboardManager$Z.apply(this, [false]);
break;
case 1:
this.ancestorInputMap=map;
p$1.setFlag$I$Z.apply(this, [6, true]);
break;
case 0:
this.focusInputMap=map;
p$1.setFlag$I$Z.apply(this, [5, true]);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["condition must be one of JComponent.WHEN_IN_FOCUSED_WINDOW, JComponent.WHEN_FOCUSED or JComponent.WHEN_ANCESTOR_OF_FOCUSED_COMPONENT"]);
}
});

Clazz.newMeth(C$, 'getInputMap$I', function (condition) {
return this.getInputMap$I$Z(condition, true);
});

Clazz.newMeth(C$, 'getInputMap$', function () {
return this.getInputMap$I$Z(0, true);
});

Clazz.newMeth(C$, 'setActionMap$javax_swing_ActionMap', function (am) {
this.actionMap=am;
p$1.setFlag$I$Z.apply(this, [8, true]);
});

Clazz.newMeth(C$, 'getActionMap$', function () {
return this.getActionMap$Z(true);
});

Clazz.newMeth(C$, 'getInputMap$I$Z', function (condition, create) {
switch (condition) {
case 0:
if (p$1.getFlag$I.apply(this, [5])) {
return this.focusInputMap;
}if (create) {
var km=Clazz.new_($I$(16));
this.setInputMap$I$javax_swing_InputMap(condition, km);
this.jsInputMapSet$();
return km;
}break;
case 1:
if (p$1.getFlag$I.apply(this, [6])) {
return this.ancestorInputMap;
}if (create) {
var km=Clazz.new_($I$(16));
this.setInputMap$I$javax_swing_InputMap(condition, km);
return km;
}break;
case 2:
if (p$1.getFlag$I.apply(this, [7])) {
return this.windowInputMap;
}if (create) {
var km=Clazz.new_($I$(17).c$$javax_swing_JComponent,[this]);
this.setInputMap$I$javax_swing_InputMap(condition, km);
return km;
}break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["condition must be one of JComponent.WHEN_IN_FOCUSED_WINDOW, JComponent.WHEN_FOCUSED or JComponent.WHEN_ANCESTOR_OF_FOCUSED_COMPONENT"]);
}
return null;
});

Clazz.newMeth(C$, 'getActionMap$Z', function (create) {
if (p$1.getFlag$I.apply(this, [8])) {
return this.actionMap;
}if (create) {
var am=Clazz.new_($I$(18));
this.setActionMap$javax_swing_ActionMap(am);
return am;
}return null;
});

Clazz.newMeth(C$, 'getBaseline$I$I', function (width, height) {
C$.superclazz.prototype.getBaseline$I$I.apply(this, [width, height]);
if (this.ui != null ) {
return this.ui.getBaseline$javax_swing_JComponent$I$I(this, width, height);
}return -1;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$', function () {
if (this.ui != null ) {
return this.ui.getBaselineResizeBehavior$javax_swing_JComponent(this);
}return $I$(19).OTHER;
});

Clazz.newMeth(C$, 'requestDefaultFocus$', function () {
var nearestRoot=(this.isFocusCycleRoot$()) ? this : this.getFocusCycleRootAncestor$();
if (nearestRoot == null ) {
return false;
}return false;
});

Clazz.newMeth(C$, 'setVisible$Z', function (aFlag) {
if (aFlag != this.isVisible$() ) {
C$.superclazz.prototype.setVisible$Z.apply(this, [aFlag]);
var parent=this.getParent$();
if (parent != null ) {
var r=this.getBounds$();
parent.repaint$I$I$I$I(r.x, r.y, r.width, r.height);
}this.revalidate$();
}});

Clazz.newMeth(C$, 'setEnabled$Z', function (enabled) {
var oldEnabled=this.isEnabled$();
C$.superclazz.prototype.setEnabled$Z.apply(this, [enabled]);
this.firePropertyChange$S$Z$Z("enabled", oldEnabled, enabled);
if (enabled != oldEnabled ) {
this.repaint$();
}});

Clazz.newMeth(C$, 'setForeground$java_awt_Color', function (fg) {
var oldFg=this.getForeground$();
C$.superclazz.prototype.setForeground$java_awt_Color.apply(this, [fg]);
if ((oldFg != null ) ? !oldFg.equals$O(fg) : ((fg != null ) && !fg.equals$O(oldFg) )) {
this.repaint$();
}});

Clazz.newMeth(C$, 'setBackground$java_awt_Color', function (bg) {
var oldBg=this.getBackground$();
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [bg]);
if ((oldBg != null ) ? !oldBg.equals$O(bg) : ((bg != null ) && !bg.equals$O(oldBg) )) {
this.repaint$();
}});

Clazz.newMeth(C$, 'setFont$java_awt_Font', function (font) {
var oldFont=this.getFont$();
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
if (font !== oldFont ) {
this.revalidate$();
this.repaint$();
}});

Clazz.newMeth(C$, 'getDefaultLocale$', function () {
var l=$I$(1).appContextGet$O("JComponent.defaultLocale");
if (l == null ) {
l=$I$(20).getDefault$();
C$.setDefaultLocale$java_util_Locale(l);
}return l;
}, 1);

Clazz.newMeth(C$, 'setDefaultLocale$java_util_Locale', function (l) {
$I$(1).appContextPut$O$O("JComponent.defaultLocale", l);
}, 1);

Clazz.newMeth(C$, 'processComponentKeyEvent$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent', function (e) {
var shouldProcessKey;
C$.superclazz.prototype.processKeyEvent$java_awt_event_KeyEvent.apply(this, [e]);
if (!e.isConsumed$()) {
this.processComponentKeyEvent$java_awt_event_KeyEvent(e);
}shouldProcessKey=$I$(21).shouldProcess$java_awt_event_KeyEvent(e);
if (e.isConsumed$()) {
return;
}if (shouldProcessKey && this.processKeyBindings$java_awt_event_KeyEvent$Z(e, e.getID$() == 401) ) {
e.consume$();
}});

Clazz.newMeth(C$, 'processKeyBinding$javax_swing_KeyStroke$java_awt_event_KeyEvent$I$Z', function (ks, e, condition, pressed) {
var map=this.getInputMap$I$Z(condition, false);
var am=this.getActionMap$Z(false);
if (map != null  && am != null   && this.isEnabled$() ) {
var binding=map.get$javax_swing_KeyStroke(ks);
var action=(binding == null ) ? null : am.get$O(binding);
if (action != null ) {
return $I$(1).notifyAction$javax_swing_Action$javax_swing_KeyStroke$java_awt_event_KeyEvent$O$I(action, ks, e, this, e.getModifiers$());
}}return false;
});

Clazz.newMeth(C$, 'processKeyBindings$java_awt_event_KeyEvent$Z', function (e, pressed) {
if (!$I$(1).isValidKeyEventForKeyBindings$java_awt_event_KeyEvent(e)) {
return false;
}var ks;
if (e.getID$() == 400) {
ks=$I$(7).getKeyStroke$C(e.getKeyChar$());
} else {
ks=$I$(7).getKeyStroke$I$I$Z(e.getKeyCode$(), e.getModifiers$(), (pressed ? false : true));
}if (this.processKeyBinding$javax_swing_KeyStroke$java_awt_event_KeyEvent$I$Z(ks, e, 0, pressed)) return true;
var parent=this;
while (parent != null  && !parent.isWindowOrJSApplet$() ){
if (Clazz.instanceOf(parent, "javax.swing.JComponent")) {
if ((parent).processKeyBinding$javax_swing_KeyStroke$java_awt_event_KeyEvent$I$Z(ks, e, 1, pressed)) return true;
}parent=parent.getParent$();
}
if (parent != null ) {
return C$.processKeyBindingsForAllComponents$java_awt_event_KeyEvent$java_awt_Container$Z(e, parent, pressed);
}return false;
});

Clazz.newMeth(C$, 'processKeyBindingsForAllComponents$java_awt_event_KeyEvent$java_awt_Container$Z', function (e, container, pressed) {
while (true){
if ($I$(15).getCurrentManager$().fireKeyboardAction$java_awt_event_KeyEvent$Z$java_awt_Container(e, pressed, container)) {
return true;
}if ($I$(22).isHeavyWeight$java_awt_Container(container)) {
container=(container).getOwner$();
} else {
return false;
}}
}, 1);

Clazz.newMeth(C$, 'setToolTipText$S', function (text) {
var oldText=this.getToolTipText$();
this.putClientProperty$O$O("ToolTipText", text);
var toolTipManager=$I$(23).sharedInstance$();
if (text != null ) {
if (oldText == null ) {
toolTipManager.registerComponent$javax_swing_JComponent(this);
}} else {
toolTipManager.unregisterComponent$javax_swing_JComponent(this);
}});

Clazz.newMeth(C$, 'getToolTipText$', function () {
return this.getClientProperty$O("ToolTipText");
});

Clazz.newMeth(C$, 'getToolTipText$java_awt_event_MouseEvent', function (event) {
return this.getToolTipText$();
});

Clazz.newMeth(C$, 'getToolTipLocation$java_awt_event_MouseEvent', function (event) {
return null;
});

Clazz.newMeth(C$, 'getPopupLocation$java_awt_event_MouseEvent', function (event) {
return null;
});

Clazz.newMeth(C$, 'createToolTip$', function () {
var tip=Clazz.new_($I$(24));
tip.setComponent$javax_swing_JComponent(this);
return tip;
});

Clazz.newMeth(C$, 'scrollRectToVisible$java_awt_Rectangle', function (aRect) {
var parent;
var dx=this.getX$();
var dy=this.getY$();
for (parent=this.getParent$(); !(parent == null ) && !(Clazz.instanceOf(parent, "javax.swing.JComponent")) && !(Clazz.instanceOf(parent, "javax.swing.CellRendererPane"))  ; parent=parent.getParent$()) {
var bounds=parent.getBounds$();
dx+=bounds.x;
dy+=bounds.y;
}
if (!(parent == null ) && !(Clazz.instanceOf(parent, "javax.swing.CellRendererPane")) ) {
aRect.x+=dx;
aRect.y+=dy;
(parent).scrollRectToVisible$java_awt_Rectangle(aRect);
aRect.x-=dx;
aRect.y-=dy;
}});

Clazz.newMeth(C$, 'setAutoscrolls$Z', function (autoscrolls) {
p$1.setFlag$I$Z.apply(this, [25, true]);
if (this._autoscrolls != autoscrolls ) {
this._autoscrolls=autoscrolls;
if (autoscrolls) {
this.enableEvents$J(16);
this.enableEvents$J(32);
} else {
$I$(25).stop$javax_swing_JComponent(this);
}}});

Clazz.newMeth(C$, 'getAutoscrolls$', function () {
return this._autoscrolls;
});

Clazz.newMeth(C$, 'processMouseEvent$java_awt_event_MouseEvent', function (e) {
if (this._autoscrolls && e.getID$() == 502 ) {
$I$(25).stop$javax_swing_JComponent(this);
}C$.superclazz.prototype.processMouseEvent$java_awt_event_MouseEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'processMouseMotionEvent$java_awt_event_MouseEvent', function (e) {
var dispatch=true;
if (this._autoscrolls && e.getID$() == 506 ) {
dispatch=!$I$(25).isRunning$javax_swing_JComponent(this);
$I$(25).processMouseDragged$java_awt_event_MouseEvent(e);
}if (dispatch) {
C$.superclazz.prototype.processMouseMotionEvent$java_awt_event_MouseEvent.apply(this, [e]);
}});

Clazz.newMeth(C$, 'superProcessMouseMotionEvent$java_awt_event_MouseEvent', function (e) {
C$.superclazz.prototype.processMouseMotionEvent$java_awt_event_MouseEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'setCreatedDoubleBuffer$Z', function (newValue) {
p$1.setFlag$I$Z.apply(this, [9, newValue]);
});

Clazz.newMeth(C$, 'getCreatedDoubleBuffer$', function () {
return p$1.getFlag$I.apply(this, [9]);
});

Clazz.newMeth(C$, 'getTitledBorderText$', function () {
var border=this.getBorder$();
if (Clazz.instanceOf(border, "javax.swing.border.TitledBorder")) {
return (border).getTitle$();
} else {
return null;
}});

Clazz.newMeth(C$, 'getClientProperties', function () {
if (this.clientProperties == null ) {
this.clientProperties=Clazz.new_($I$(26));
}return this.clientProperties;
}, p$1);

Clazz.newMeth(C$, 'getClientProperty$O', function (key) {
return (this.clientProperties == null  ? null : this.clientProperties.get$O(key));
});

Clazz.newMeth(C$, 'putClientProperty$O$O', function (key, value) {
if (value == null  && this.clientProperties == null  ) {
return;
}var clientProperties=p$1.getClientProperties.apply(this, []);
var oldValue;
{
oldValue=clientProperties.get$O(key);
if (value != null ) {
clientProperties.put$O$O(key, value);
} else if (oldValue != null ) {
clientProperties.remove$O(key);
} else {
return;
}}this.clientPropertyChanged$O$O$O(key, oldValue, value);
this.firePropertyChange$S$O$O(key.toString(), oldValue, value);
});

Clazz.newMeth(C$, 'clientPropertyChanged$O$O$O', function (key, oldValue, newValue) {
});

Clazz.newMeth(C$, 'setUI$javax_swing_plaf_ComponentUI', function (newUI) {
var oldUI=this.ui;
p$1.uninstallUIAndProperties.apply(this, []);
this.ui=newUI;
if (oldUI != null ) {
this.revalidate$();
this.repaint$();
}});

Clazz.newMeth(C$, 'uninstallUIAndProperties', function () {
if (this.ui != null ) {
(this.ui).reinstallUI$javax_swing_JComponent$javax_swing_JComponent(this, null);
}}, p$1);

Clazz.newMeth(C$, 'setUIProperty$S$O', function (propertyName, value) {
if (propertyName == "opaque") {
if (!p$1.getFlag$I.apply(this, [24])) {
this.setOpaque$Z((value).booleanValue$());
p$1.setFlag$I$Z.apply(this, [24, false]);
}} else if (propertyName == "autoscrolls") {
if (!p$1.getFlag$I.apply(this, [25])) {
this.setAutoscrolls$Z((value).booleanValue$());
p$1.setFlag$I$Z.apply(this, [25, false]);
}} else if (propertyName == "focusTraversalKeysForward") {
} else if (propertyName == "focusTraversalKeysBackward") {
} else {
System.out.println$S(this.getClass$().getName$() + " property \"" + propertyName + "\" cannot be set using this method" + $I$(27).getStackTrace$I(5) );
}});

Clazz.newMeth(C$, 'setFocusTraversalKeys$I$java_util_Set', function (id, keystrokes) {
C$.superclazz.prototype.setFocusTraversalKeys$I$java_util_Set.apply(this, [id, keystrokes]);
});

Clazz.newMeth(C$, 'isLightweightComponent$java_awt_Component', function (c) {
{
return(!c.rootPane);
}
}, 1);

Clazz.newMeth(C$, 'isOpaque$', function () {
return p$1.getFlag$I.apply(this, [3]);
});

Clazz.newMeth(C$, 'setOpaque$Z', function (isOpaque) {
var oldValue=p$1.getFlag$I.apply(this, [3]);
p$1.setFlag$I$Z.apply(this, [3, isOpaque]);
p$1.setFlag$I$Z.apply(this, [24, true]);
this.firePropertyChange$S$Z$Z("opaque", oldValue, isOpaque);
});

Clazz.newMeth(C$, 'rectangleIsObscured$I$I$I$I', function (x, y, width, height) {
var numChildren=this.getComponentCount$();
for (var i=0; i < numChildren; i++) {
var child=this.getComponent$I(i);
var cx;
var cy;
var cw;
var ch;
cx=child.getX$();
cy=child.getY$();
cw=child.getWidth$();
ch=child.getHeight$();
if (x >= cx && (x + width) <= (cx + cw)  && y >= cy  && (y + height) <= (cy + ch)  && child.isVisible$() ) {
if (Clazz.instanceOf(child, "javax.swing.JComponent")) {
return (child).isOpaque$();
} else {
return false;
}}}
return false;
});

Clazz.newMeth(C$, 'computeVisibleRect$java_awt_Component$java_awt_Rectangle', function (c, visibleRect) {
var p=c.getParent$();
var bounds=c.getBounds$();
if (p == null  || p.isWindowOrJSApplet$() ) {
visibleRect.setBounds$I$I$I$I(0, 0, bounds.width, bounds.height);
} else {
C$.computeVisibleRect$java_awt_Component$java_awt_Rectangle(p, visibleRect);
visibleRect.x-=bounds.x;
visibleRect.y-=bounds.y;
$I$(1).computeIntersection$I$I$I$I$java_awt_Rectangle(0, 0, bounds.width, bounds.height, visibleRect);
}}, 1);

Clazz.newMeth(C$, 'computeVisibleRect$java_awt_Rectangle', function (visibleRect) {
C$.computeVisibleRect$java_awt_Component$java_awt_Rectangle(this, visibleRect);
});

Clazz.newMeth(C$, 'getVisibleRect$', function () {
var visibleRect=Clazz.new_($I$(8));
this.computeVisibleRect$java_awt_Rectangle(visibleRect);
return visibleRect;
});

Clazz.newMeth(C$, 'getTopLevelAncestor$', function () {
for (var p=this; p != null ; p=p.getParent$()) {
if (p.isWindowOrJSApplet$()) {
return p;
}}
return null;
});

Clazz.newMeth(C$, 'getAncestorNotifier', function () {
return this.getClientProperty$O($I$(12).JComponent_ANCESTOR_NOTIFIER);
}, p$1);

Clazz.newMeth(C$, 'addAncestorListener$javax_swing_event_AncestorListener', function (listener) {
var ancestorNotifier=p$1.getAncestorNotifier.apply(this, []);
if (ancestorNotifier == null ) {
ancestorNotifier=Clazz.new_($I$(28).c$$javax_swing_JComponent,[this]);
this.putClientProperty$O$O($I$(12).JComponent_ANCESTOR_NOTIFIER, ancestorNotifier);
}ancestorNotifier.addAncestorListener$javax_swing_event_AncestorListener(listener);
});

Clazz.newMeth(C$, 'removeAncestorListener$javax_swing_event_AncestorListener', function (listener) {
var ancestorNotifier=p$1.getAncestorNotifier.apply(this, []);
if (ancestorNotifier == null ) {
return;
}ancestorNotifier.removeAncestorListener$javax_swing_event_AncestorListener(listener);
if (ancestorNotifier.listenerList.getListenerList$().length == 0) {
ancestorNotifier.removeAllListeners$();
this.putClientProperty$O$O($I$(12).JComponent_ANCESTOR_NOTIFIER, null);
}});

Clazz.newMeth(C$, 'getAncestorListeners$', function () {
var ancestorNotifier=p$1.getAncestorNotifier.apply(this, []);
if (ancestorNotifier == null ) {
return Clazz.array($I$(29), [0]);
}return ancestorNotifier.getAncestorListeners$();
});

Clazz.newMeth(C$, 'getListeners$Class', function (listenerType) {
var result;
if (listenerType === Clazz.getClass($I$(29),['ancestorAdded$javax_swing_event_AncestorEvent','ancestorMoved$javax_swing_event_AncestorEvent','ancestorRemoved$javax_swing_event_AncestorEvent']) ) {
result=this.getAncestorListeners$();
} else if (listenerType === Clazz.getClass($I$(30),['propertyChange$java_beans_PropertyChangeEvent']) ) {
result=this.getPropertyChangeListeners$();
} else {
result=this.listenerList.getListeners$Class(listenerType);
}if (result.length == 0) {
return C$.superclazz.prototype.getListeners$Class.apply(this, [listenerType]);
}return result;
});

Clazz.newMeth(C$, 'addNotify$', function () {
C$.superclazz.prototype.addNotify$.apply(this, []);
this.firePropertyChange$S$O$O("ancestor", null, this.getParent$());
p$1.registerWithKeyboardManager$Z.apply(this, [false]);
p$1.registerNextFocusableComponent.apply(this, []);
});

Clazz.newMeth(C$, 'removeNotify$', function () {
C$.superclazz.prototype.removeNotify$.apply(this, []);
this.firePropertyChange$S$O$O("ancestor", this.getParent$(), null);
p$1.unregisterWithKeyboardManager.apply(this, []);
p$1.deregisterNextFocusableComponent.apply(this, []);
if (this.getCreatedDoubleBuffer$()) {
$I$(9).currentManager$javax_swing_JComponent(this).resetDoubleBuffer$();
this.setCreatedDoubleBuffer$Z(false);
}if (this._autoscrolls) {
$I$(25).stop$javax_swing_JComponent(this);
}});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I', function (tm, x, y, width, height) {
$I$(9).currentManager$javax_swing_JComponent(this).addDirtyRegion$javax_swing_JComponent$I$I$I$I(this, x, y, width, height);
});

Clazz.newMeth(C$, 'repaint$java_awt_Rectangle', function (r) {
this.repaint$J$I$I$I$I(0, r.x, r.y, r.width, r.height);
});

Clazz.newMeth(C$, 'revalidate$', function () {
if (this.ui != null ) (this.ui).setTainted$();
if (this.getParent$() == null ) {
return;
}if ($I$(1).isEventDispatchThread$()) {
this.invalidate$();
$I$(9).currentManager$javax_swing_JComponent(this).addInvalidComponent$javax_swing_JComponent(this);
} else {
if (p$1.getFlag$I.apply(this, [28])) {
return;
}p$1.setFlag$I$Z.apply(this, [28, true]);
var callRevalidate=((P$.JComponent$2||
(function(){var C$=Clazz.newClass(P$, "JComponent$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
p$1.setFlag$I$Z.apply(this.b$['javax.swing.JComponent'], [28, false]);
this.b$['javax.swing.JComponent'].revalidate$.apply(this.b$['javax.swing.JComponent'], []);
});
})()
), Clazz.new_(P$.JComponent$2.$init$, [this, null]));
$I$(1).invokeLater$Runnable(callRevalidate);
}});

Clazz.newMeth(C$, 'isValidateRoot$', function () {
return false;
});

Clazz.newMeth(C$, 'isOptimizedDrawingEnabled$', function () {
return true;
});

Clazz.newMeth(C$, 'isPaintingOrigin$', function () {
return false;
});

Clazz.newMeth(C$, 'paintImmediately$I$I$I$I', function (x, y, w, h) {
var c=this;
var parent;
if (!this.isShowing$()) {
return;
}while (!(c).isOpaque$()){
parent=c.getParent$();
if (parent != null ) {
x+=c.getX$();
y+=c.getY$();
c=parent;
} else {
break;
}if (!(Clazz.instanceOf(c, "javax.swing.JComponent"))) {
break;
}}
if (Clazz.instanceOf(c, "javax.swing.JComponent")) {
(c)._paintImmediately$I$I$I$I(x, y, w, h);
} else {
c.repaint$I$I$I$I(x, y, w, h);
}});

Clazz.newMeth(C$, 'paintImmediately$java_awt_Rectangle', function (r) {
this.paintImmediately$I$I$I$I(r.x, r.y, r.width, r.height);
});

Clazz.newMeth(C$, 'alwaysOnTop$', function () {
return false;
});

Clazz.newMeth(C$, 'setPaintingChild$java_awt_Component', function (paintingChild) {
this.paintingChild=paintingChild;
});

Clazz.newMeth(C$, '_paintImmediately$I$I$I$I', function (x, y, w, h) {
var g;
var c;
var tmpX;
var tmpY;
var tmpWidth;
var tmpHeight;
var offsetX=0;
var offsetY=0;
var hasBuffer=false;
var bufferedComponent=null;
var paintingComponent=this;
var path=Clazz.new_($I$(31).c$$I,[7]);
var pIndex=-1;
var pCount=0;
tmpX=tmpY=tmpWidth=tmpHeight=0;
var paintImmediatelyClip=C$.fetchRectangle$();
paintImmediatelyClip.x=x;
paintImmediatelyClip.y=y;
paintImmediatelyClip.width=w;
paintImmediatelyClip.height=h;
var ontop=this.alwaysOnTop$() && this.isOpaque$() ;
if (ontop) {
$I$(1).computeIntersection$I$I$I$I$java_awt_Rectangle(0, 0, this.getWidth$(), this.getHeight$(), paintImmediatelyClip);
if (paintImmediatelyClip.width == 0) {
C$.recycleRectangle$java_awt_Rectangle(paintImmediatelyClip);
return;
}}var child;
for (c=this, child=null; c != null  && !c.isWindowOrJSApplet$() ; child=c, c=c.getParent$()) {
var jc=(Clazz.instanceOf(c, "javax.swing.JComponent")) ? c : null;
path.add$TE(c);
if (!ontop && jc != null   && !jc.isOptimizedDrawingEnabled$() ) {
var resetPC;
if (c !== this ) {
if (jc.isPaintingOrigin$()) {
resetPC=true;
} else {
var children=$I$(32).getChildArray$java_awt_Container(c);
var i=0;
for (var n=c.getComponentCount$(); i < n; i++) {
if (children[i] === child ) break;
}
switch (p$1.getObscuredState$I$I$I$I$I.apply(jc, [i, paintImmediatelyClip.x, paintImmediatelyClip.y, paintImmediatelyClip.width, paintImmediatelyClip.height])) {
case 0:
resetPC=false;
break;
case 2:
C$.recycleRectangle$java_awt_Rectangle(paintImmediatelyClip);
return;
default:
resetPC=true;
break;
}
}} else {
resetPC=false;
}if (resetPC) {
paintingComponent=jc;
pIndex=pCount;
offsetX=offsetY=0;
hasBuffer=false;
}}pCount++;
if (!ontop) {
var bx=c.getX$();
var by=c.getY$();
tmpWidth=c.getWidth$();
tmpHeight=c.getHeight$();
$I$(1).computeIntersection$I$I$I$I$java_awt_Rectangle(tmpX, tmpY, tmpWidth, tmpHeight, paintImmediatelyClip);
paintImmediatelyClip.x+=bx;
paintImmediatelyClip.y+=by;
offsetX+=bx;
offsetY+=by;
}}
if (c == null  || paintImmediatelyClip.width <= 0  || paintImmediatelyClip.height <= 0 ) {
C$.recycleRectangle$java_awt_Rectangle(paintImmediatelyClip);
return;
}p$1.setFlag$I$Z.apply(paintingComponent, [13, true]);
paintImmediatelyClip.x-=offsetX;
paintImmediatelyClip.y-=offsetY;
if (paintingComponent !== this ) {
var comp;
var i=pIndex;
for (; i > 0; i--) {
comp=path.get$I(i);
if (Clazz.instanceOf(comp, "javax.swing.JComponent")) {
(comp).setPaintingChild$java_awt_Component(path.get$I(i - 1));
}}
}try {
g=C$.safelyGetGraphics$java_awt_Component$java_awt_Component(paintingComponent, c);
try {
if (hasBuffer) {
var rm=$I$(9).currentManager$javax_swing_JComponent(bufferedComponent);
rm.beginPaint$();
try {
rm.paint$javax_swing_JComponent$javax_swing_JComponent$java_awt_Graphics$I$I$I$I(paintingComponent, bufferedComponent, g, paintImmediatelyClip.x, paintImmediatelyClip.y, paintImmediatelyClip.width, paintImmediatelyClip.height);
} finally {
rm.endPaint$();
}
} else {
if (!this.isRootPane) g.setClip$I$I$I$I(paintImmediatelyClip.x, paintImmediatelyClip.y, paintImmediatelyClip.width, paintImmediatelyClip.height);
paintingComponent.paintWithBackgroundCheck$java_awt_Graphics(g);
}} finally {
g.dispose$();
}
} finally {
if (paintingComponent !== this ) {
var comp;
var i=pIndex;
for (; i > 0; i--) {
comp=path.get$I(i);
if (Clazz.instanceOf(comp, "javax.swing.JComponent")) {
(comp).setPaintingChild$java_awt_Component(null);
}}
}p$1.setFlag$I$Z.apply(paintingComponent, [13, false]);
}
C$.recycleRectangle$java_awt_Rectangle(paintImmediatelyClip);
});

Clazz.newMeth(C$, 'paintToOffscreen$java_awt_Graphics$I$I$I$I$I$I', function (g, x, y, w, h, maxX, maxY) {
try {
p$1.setFlag$I$Z.apply(this, [1, true]);
if ((y + h) < maxY || (x + w) < maxX ) {
p$1.setFlag$I$Z.apply(this, [2, true]);
}if (p$1.getFlag$I.apply(this, [13])) {
this.paint$java_awt_Graphics(g);
} else {
if (!this.rectangleIsObscured$I$I$I$I(x, y, w, h)) {
p$1.paintComponentSafely$java_awt_Graphics.apply(this, [g]);
p$1.paintBorderSafely$java_awt_Graphics.apply(this, [g]);
}this.paintChildren$java_awt_Graphics(g);
}} finally {
p$1.setFlag$I$Z.apply(this, [1, false]);
p$1.setFlag$I$Z.apply(this, [2, false]);
}
});

Clazz.newMeth(C$, 'getObscuredState$I$I$I$I$I', function (compIndex, x, y, width, height) {
var retValue=0;
var tmpRect=C$.fetchRectangle$();
for (var i=compIndex - 1; i >= 0; i--) {
var sibling=this.getComponent$I(i);
if (!sibling.isVisible$()) {
continue;
}var siblingRect;
var opaque;
if (Clazz.instanceOf(sibling, "javax.swing.JComponent")) {
opaque=(sibling).isOpaque$();
if (!opaque) {
if (retValue == 1) {
continue;
}}} else {
opaque=true;
}siblingRect=sibling.getBounds$java_awt_Rectangle(tmpRect);
if (opaque && x >= siblingRect.x  && (x + width) <= (siblingRect.x + siblingRect.width)  && y >= siblingRect.y  && (y + height) <= (siblingRect.y + siblingRect.height) ) {
C$.recycleRectangle$java_awt_Rectangle(tmpRect);
return 2;
} else if (retValue == 0 && !((x + width <= siblingRect.x) || (y + height <= siblingRect.y) || (x >= siblingRect.x + siblingRect.width) || (y >= siblingRect.y + siblingRect.height)  ) ) {
retValue=1;
}}
C$.recycleRectangle$java_awt_Rectangle(tmpRect);
return retValue;
}, p$1);

Clazz.newMeth(C$, 'checkIfChildObscuredBySibling$', function () {
return true;
});

Clazz.newMeth(C$, 'setFlag$I$Z', function (aFlag, aValue) {
if (aValue) {
this._flags|=(1 << aFlag);
} else {
this._flags&=~(1 << aFlag);
}}, p$1);

Clazz.newMeth(C$, 'getFlag$I', function (aFlag) {
var mask=(1 << aFlag);
return ((this._flags & mask) == mask);
}, p$1);

Clazz.newMeth(C$, 'setDoubleBuffered$Z', function (aFlag) {
});

Clazz.newMeth(C$, 'isDoubleBuffered$', function () {
return p$1.getFlag$I.apply(this, [0]);
});

Clazz.newMeth(C$, 'getRootPane$', function () {
return $I$(1).getRootPane$java_awt_Component(this);
});

Clazz.newMeth(C$, 'paramString$', function () {
var preferredSizeString=(this.isPreferredSizeSet$() ? this.getPreferredSize$().toString() : "");
var minimumSizeString=(this.isMinimumSizeSet$() ? this.getMinimumSize$().toString() : "");
var maximumSizeString=(this.isMaximumSizeSet$() ? this.getMaximumSize$().toString() : "");
var borderString=(this._border == null  ? "" : (this._border === this  ? "this" : this._border.toString()));
return C$.superclazz.prototype.paramString$.apply(this, []) + ",alignmentX=" + new Float(this._alignmentX).toString() + ",alignmentY=" + new Float(this._alignmentY).toString() + ",border=" + borderString + ",flags=" + this._flags + ",maximumSize=" + maximumSizeString + ",minimumSize=" + minimumSizeString + ",preferredSize=" + preferredSizeString ;
});

Clazz.newMeth(C$, 'isActionStandin$javax_swing_Action', function (action) {
return Clazz.instanceOf(action, "javax.swing.JComponent.ActionStandin");
}, 1);

Clazz.newMeth(C$, 'dropLocationForPoint$java_awt_Point', function (p) {
return null;
});

Clazz.newMeth(C$, 'setTransferHandler$javax_swing_TransferHandler', function (newHandler) {
var oldHandler=this.getClientProperty$O(C$.JComponent_TRANSFER_HANDLER);
this.putClientProperty$O$O(C$.JComponent_TRANSFER_HANDLER, newHandler);
$I$(1).installSwingDropTargetAsNecessary$java_awt_Component$javax_swing_TransferHandler(this, newHandler);
this.firePropertyChange$S$O$O("transferHandler", oldHandler, newHandler);
});

Clazz.newMeth(C$, 'getTransferHandler$', function () {
return null;
});

Clazz.newMeth(C$, 'setDropLocation$javax_swing_TransferHandler_DropLocation$O$Z', function (dropLocation, state, forDrop) {
return null;
});

Clazz.newMeth(C$, 'dndDone$', function () {
});

Clazz.newMeth(C$, 'paintComponentSafely$java_awt_Graphics', function (g) {
var jsg=this.getJSGraphic2D$java_awt_Graphics(g);
var nSave=(jsg == null  ? 0 : jsg.mark$());
this.checkBackgroundPainted$swingjs_JSGraphics2D$Z(jsg, true);
this.paintComponent$java_awt_Graphics(g);
this.checkBackgroundPainted$swingjs_JSGraphics2D$Z(jsg, false);
if (jsg != null ) {
jsg.reset$I(nSave);
}}, p$1);

Clazz.newMeth(C$, 'printComponentSafely$java_awt_Graphics', function (g) {
var jsg=this.getJSGraphic2D$java_awt_Graphics(g);
var nSave=(jsg == null  ? 0 : jsg.mark$());
this.printComponent$java_awt_Graphics(g);
if (jsg != null ) jsg.reset$I(nSave);
}, p$1);

Clazz.newMeth(C$, 'paintBorderSafely$java_awt_Graphics', function (g) {
if (this.getBorder$() == null ) return;
var jsg=this.getJSGraphic2D$java_awt_Graphics(g);
var nSave=(jsg == null  ? 0 : jsg.mark$());
this.paintBorder$java_awt_Graphics(g);
if (jsg != null ) jsg.reset$I(nSave);
}, p$1);

Clazz.newMeth(C$, 'printBorderSafely$java_awt_Graphics', function (g) {
if (this.getBorder$() == null ) return;
this._isBackgroundPainted=true;
var jsg=this.getJSGraphic2D$java_awt_Graphics(g);
var nSave=(jsg == null  ? 0 : jsg.mark$());
this.printBorder$java_awt_Graphics(g);
if (jsg != null ) jsg.reset$I(nSave);
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.JComponent, "ActionStandin", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.Action');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.actionListener=null;
this.command=null;
this.action=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_event_ActionListener$S', function (actionListener, command) {
C$.$init$.apply(this);
this.actionListener=actionListener;
if (Clazz.instanceOf(actionListener, "javax.swing.Action")) {
this.action=actionListener;
} else {
this.action=null;
}this.command=command;
}, 1);

Clazz.newMeth(C$, 'getValue$S', function (key) {
if (key != null ) {
if (key.equals$O("ActionCommandKey")) {
return this.command;
}if (this.action != null ) {
return this.action.getValue$S(key);
}if (key.equals$O("Name")) {
return "ActionStandin";
}}return null;
});

Clazz.newMeth(C$, 'isEnabled$', function () {
if (this.actionListener == null ) {
return false;
}if (this.action == null ) {
return true;
}return this.action.isEnabled$();
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (ae) {
if (this.actionListener != null ) {
this.actionListener.actionPerformed$(ae);
}});

Clazz.newMeth(C$, 'putValue$S$O', function (key, value) {
});

Clazz.newMeth(C$, 'setEnabled$Z', function (b) {
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JComponent, "IntVector", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
this.count=0;
this.capacity=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.array=(null|0);
this.count=0;
this.capacity=0;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.count;
});

Clazz.newMeth(C$, 'elementAt$I', function (index) {
return this.array[index];
});

Clazz.newMeth(C$, 'addElement$I', function (value) {
if (this.count == this.capacity) {
this.capacity=(this.capacity + 2) * 2;
var newarray=Clazz.array(Integer.TYPE, [this.capacity]);
if (this.count > 0) {
System.arraycopy$O$I$O$I$I(this.array, 0, newarray, 0, this.count);
}this.array=newarray;
}this.array[this.count++]=value;
});

Clazz.newMeth(C$, 'setElementAt$I$I', function (value, index) {
this.array[index]=value;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JComponent, "KeyboardState", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.keyCodesKey=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.keyCodesKey=Clazz.getClass(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getKeyCodeArray$', function () {
var iv=$I$(1).appContextGet$O(C$.keyCodesKey);
if (iv == null ) {
iv=Clazz.new_($I$(2));
$I$(1).appContextPut$O$O(C$.keyCodesKey, iv);
}return iv;
}, 1);

Clazz.newMeth(C$, 'registerKeyPressed$I', function (keyCode) {
var kca=C$.getKeyCodeArray$();
var count=kca.size$();
var i;
for (i=0; i < count; i++) {
if (kca.elementAt$I(i) == -1) {
kca.setElementAt$I$I(keyCode, i);
return;
}}
kca.addElement$I(keyCode);
}, 1);

Clazz.newMeth(C$, 'registerKeyReleased$I', function (keyCode) {
var kca=C$.getKeyCodeArray$();
var count=kca.size$();
var i;
for (i=0; i < count; i++) {
if (kca.elementAt$I(i) == keyCode) {
kca.setElementAt$I$I(-1, i);
return;
}}
}, 1);

Clazz.newMeth(C$, 'keyIsPressed$I', function (keyCode) {
var kca=C$.getKeyCodeArray$();
var count=kca.size$();
var i;
for (i=0; i < count; i++) {
if (kca.elementAt$I(i) == keyCode) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'shouldProcess$java_awt_event_KeyEvent', function (e) {
switch (e.getID$()) {
case 401:
if (!C$.keyIsPressed$I(e.getKeyCode$())) {
C$.registerKeyPressed$I(e.getKeyCode$());
}return true;
case 402:
if (C$.keyIsPressed$I(e.getKeyCode$()) || e.getKeyCode$() == 154 ) {
C$.registerKeyReleased$I(e.getKeyCode$());
return true;
}return false;
case 400:
return true;
default:
return false;
}
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-18 23:03:45 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
