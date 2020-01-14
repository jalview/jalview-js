(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'javax.swing.MenuSelectionManager','javax.swing.MenuElement','swingjs.api.js.DOMNode','java.awt.Insets','java.awt.Dimension',['swingjs.plaf.JSMenuBarUI','.Actions'],'swingjs.plaf.DefaultMenuLayout','javax.swing.LookAndFeel','Boolean','javax.swing.SwingUtilities','swingjs.plaf.LazyActionMap','sun.swing.DefaultLookup',['swingjs.plaf.JSMenuBarUI','.Handler']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSMenuBarUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSPanelUI', 'java.awt.event.ContainerListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.menuBar=null;
this.changeListener=null;
this.containerListener=null;
this.handler=null;
this.installed=false;
this.keyListener=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.isContainer=true;
this.allowPaintedBackground=false;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
this.containerNode=this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id, []);
$I$(3).setTopLeftAbsolute(this.domNode, 0, 0);
}this.setBackgroundCUI$java_awt_Color(this.jc.isOpaque$() ? this.getBackground$() : null);
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'propertyChangedFromListener$java_beans_PropertyChangeEvent$S', function (e, prop) {
C$.superclazz.prototype.propertyChangedFromListener$java_beans_PropertyChangeEvent$S.apply(this, [e, prop]);
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
var prop=e.getPropertyName$();
if (!this.installed && this.jc.getRootPane$() != null  ) {
this.jc.getRootPane$().addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.installed=true;
}C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'getContainerHeight$', function () {
var m=this.menuBar.getInsets$();
return this.height=this.menuBar.getFont$().getFontMetrics$().getHeight$() + m.top + m.bottom ;
});

Clazz.newMeth(C$, 'getInsets$', function () {
return Clazz.new_($I$(4).c$$I$I$I$I,[2, 10, 2, 10]);
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent', function (jc) {
var d=Clazz.new_($I$(5).c$$I$I,[0, this.getContainerHeight$()]);
return d;
});

Clazz.newMeth(C$, 'componentAdded$java_awt_event_ContainerEvent', function (e) {
});

Clazz.newMeth(C$, 'componentRemoved$java_awt_event_ContainerEvent', function (e) {
$I$(3).detachAll(this.domNode);
this.setTainted$();
this.setHTMLElement$();
});

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap', function (map) {
map.put$javax_swing_Action(Clazz.new_($I$(6).c$$S,["takeFocus"]));
}, 1);

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (c) {
this.menuBar=c;
this.installDefaults$();
this.installListeners$();
this.installKeyboardActions$();
});

Clazz.newMeth(C$, 'installDefaults$', function () {
if (this.menuBar.getLayout$() == null  || Clazz.instanceOf(this.menuBar.getLayout$(), "javax.swing.plaf.UIResource") ) {
this.menuBar.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7).c$$java_awt_Container$I,[this.menuBar, 2]));
this.menuBar.addContainerListener$java_awt_event_ContainerListener(this);
}$I$(8).installProperty$javax_swing_JComponent$S$O(this.menuBar, "opaque", $I$(9).TRUE);
$I$(8).installBorder$javax_swing_JComponent$S(this.menuBar, "MenuBar.border");
$I$(8).installColorsAndFont$javax_swing_JComponent$S$S$S(this.menuBar, "MenuBar.background", "MenuBar.foreground", "MenuBar.font");
this.menuBar.setOpaque$Z(true);
});

Clazz.newMeth(C$, 'installListeners$', function () {
this.containerListener=this.createContainerListener$();
this.changeListener=this.createChangeListener$();
this.keyListener=this.createKeyListener$();
for (var i=0; i < this.menuBar.getMenuCount$(); i++) {
var menu=this.menuBar.getMenu$I(i);
if (menu != null ) menu.getModel$().addChangeListener$javax_swing_event_ChangeListener(this.changeListener);
}
this.menuBar.addContainerListener$java_awt_event_ContainerListener(this.containerListener);
});

Clazz.newMeth(C$, 'installKeyboardActions$', function () {
var inputMap=this.getInputMap$I(2);
$I$(10).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.menuBar, 2, inputMap);
$I$(11).installLazyActionMap$javax_swing_JComponent$Class$S(this.menuBar, Clazz.getClass(C$), "MenuBar.actionMap");
});

Clazz.newMeth(C$, 'getInputMap$I', function (condition) {
if (condition == 2) {
var bindings=$I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.menuBar, this, "MenuBar.windowBindings");
if (bindings != null ) {
return $I$(8).makeComponentInputMap$javax_swing_JComponent$OA(this.menuBar, bindings);
}}return null;
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (c) {
this.uninstallDefaults$();
this.uninstallListeners$();
this.uninstallKeyboardActions$();
this.menuBar=null;
});

Clazz.newMeth(C$, 'uninstallDefaults$', function () {
if (this.menuBar != null ) {
$I$(8).uninstallBorder$javax_swing_JComponent(this.menuBar);
}});

Clazz.newMeth(C$, 'uninstallListeners$', function () {
this.menuBar.removeContainerListener$java_awt_event_ContainerListener(this.containerListener);
for (var i=0; i < this.menuBar.getMenuCount$(); i++) {
var menu=this.menuBar.getMenu$I(i);
if (menu != null ) menu.getModel$().removeChangeListener$javax_swing_event_ChangeListener(this.changeListener);
}
this.containerListener=null;
this.changeListener=null;
this.handler=null;
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$', function () {
$I$(10).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.menuBar, 2, null);
$I$(10).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.menuBar, null);
});

Clazz.newMeth(C$, 'createContainerListener$', function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createChangeListener$', function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createKeyListener$', function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'getHandler', function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(13), [this, null]);
}return this.handler;
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.JSMenuBarUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['javax.swing.event.ChangeListener', 'java.awt.event.ContainerListener', 'java.awt.event.KeyListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
var i;
var c;
for (i=0, c=this.this$0.menuBar.getMenuCount$(); i < c; i++) {
var menu=this.this$0.menuBar.getMenu$I(i);
if (menu != null  && menu.isSelected$() ) {
this.this$0.menuBar.getSelectionModel$().setSelectedIndex$I(i);
break;
}}
});

Clazz.newMeth(C$, 'componentAdded$java_awt_event_ContainerEvent', function (e) {
var c=e.getChild$();
if (Clazz.instanceOf(c, "javax.swing.JMenu")) (c).getModel$().addChangeListener$javax_swing_event_ChangeListener(this.this$0.changeListener);
});

Clazz.newMeth(C$, 'componentRemoved$java_awt_event_ContainerEvent', function (e) {
var c=e.getChild$();
if (Clazz.instanceOf(c, "javax.swing.JMenu")) (c).getModel$().removeChangeListener$javax_swing_event_ChangeListener(this.this$0.changeListener);
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
var msm=$I$(1).defaultManager$();
msm.setCurrentPath$javax_swing_JComponent(null);
msm.processKeyEvent$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSMenuBarUI, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (key) {
C$.superclazz.c$$S.apply(this, [key]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var menuBar=e.getSource$();
var defaultManager=$I$(1).defaultManager$();
var me;
var subElements;
var menu=menuBar.getMenu$I(0);
if (menu != null ) {
me=Clazz.array($I$(2), [3]);
me[0]=menuBar;
me[1]=menu;
me[2]=menu.getPopupMenu$();
defaultManager.setSelectedPath$javax_swing_MenuElementA(me);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
