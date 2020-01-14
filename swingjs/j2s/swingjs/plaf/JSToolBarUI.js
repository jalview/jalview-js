(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'java.awt.JSComponent','java.awt.Dimension','swingjs.plaf.JSToolBarUI','javax.swing.UIManager','java.awt.Color','javax.swing.plaf.basic.BasicGraphicsUtils','java.awt.Point','java.awt.Insets','java.util.HashMap','java.util.Hashtable','swingjs.api.js.DOMNode','javax.swing.LookAndFeel','Boolean','javax.swing.SwingUtilities','swingjs.plaf.LazyActionMap','sun.swing.DefaultLookup',['swingjs.plaf.JSToolBarUI','.Actions'],'javax.swing.border.CompoundBorder',['javax.swing.plaf.basic.BasicBorders','.RolloverButtonBorder'],['javax.swing.plaf.basic.BasicBorders','.RolloverMarginBorder'],['javax.swing.plaf.basic.BasicBorders','.ButtonBorder'],['javax.swing.plaf.basic.BasicBorders','.RadioButtonBorder'],'javax.swing.JRootPane','javax.swing.JFrame','javax.swing.JDialog',['swingjs.plaf.JSToolBarUI','.DragWindow'],'java.awt.event.WindowAdapter',['swingjs.plaf.JSToolBarUI','.Handler'],['swingjs.plaf.JSToolBarUI','.FrameListener']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSToolBarUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSPanelUI');
C$.toolbarCount=0;
C$.IS_ROLLOVER=null;
C$.rolloverBorder=null;
C$.nonRolloverBorder=null;
C$.nonRolloverToggleBorder=null;
C$.FOCUSED_COMP_INDEX=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.IS_ROLLOVER="JToolBar.isRollover";
C$.FOCUSED_COMP_INDEX="JToolBar.focusedCompIndex";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.toolBar=null;
this.floating=false;
this.floatingX=0;
this.floatingY=0;
this.floatingToolBar=null;
this.dragWindow=null;
this.dockingSource=null;
this.dockingSensitivity=0;
this.focusedCompIndex=0;
this.dockingColor=null;
this.floatingColor=null;
this.dockingBorderColor=null;
this.floatingBorderColor=null;
this.dockingListener=null;
this.propertyListener=null;
this.toolBarContListener=null;
this.toolBarFocusListener=null;
this.handler=null;
this.constraintBeforeFloating=null;
this.rolloverBorders=false;
this.borderTable=null;
this.rolloverTable=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.dockingSensitivity=0;
this.focusedCompIndex=-1;
this.dockingColor=null;
this.floatingColor=null;
this.dockingBorderColor=null;
this.floatingBorderColor=null;
this.constraintBeforeFloating="North";
this.rolloverBorders=false;
this.borderTable=Clazz.new_($I$(9));
this.rolloverTable=Clazz.new_($I$(10));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.isContainer=true;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
this.containerNode=this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id, []);
$I$(11).setTopLeftAbsolute(this.domNode, 0, 0);
}return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (c) {
this.toolBar=this.jc;
this.installDefaults$();
this.installComponents$();
this.installListeners$();
this.installKeyboardActions$();
this.dockingSensitivity=0;
this.floating=false;
this.floatingX=this.floatingY=0;
this.floatingToolBar=null;
this.setOrientation$I(this.toolBar.getOrientation$());
$I$(12).installProperty$javax_swing_JComponent$S$O(c, "opaque", $I$(13).TRUE);
if (c.getClientProperty$O(C$.FOCUSED_COMP_INDEX) != null ) {
this.focusedCompIndex=((c.getClientProperty$O(C$.FOCUSED_COMP_INDEX))).intValue$();
}});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (c) {
this.uninstallDefaults$();
this.uninstallComponents$();
this.uninstallListeners$();
this.uninstallKeyboardActions$();
if (this.isFloating$() == true ) this.setFloating$Z$java_awt_Point(false, null);
this.floatingToolBar=null;
this.dragWindow=null;
this.dockingSource=null;
c.putClientProperty$O$O(C$.FOCUSED_COMP_INDEX,  new Integer(this.focusedCompIndex));
});

Clazz.newMeth(C$, 'installDefaults$', function () {
$I$(12).installBorder$javax_swing_JComponent$S(this.toolBar, "ToolBar.border");
$I$(12).installColorsAndFont$javax_swing_JComponent$S$S$S(this.toolBar, "ToolBar.background", "ToolBar.foreground", "ToolBar.font");
if (this.dockingColor == null  || Clazz.instanceOf(this.dockingColor, "javax.swing.plaf.UIResource") ) this.dockingColor=$I$(4).getColor$O("ToolBar.dockingBackground");
if (this.floatingColor == null  || Clazz.instanceOf(this.floatingColor, "javax.swing.plaf.UIResource") ) this.floatingColor=$I$(4).getColor$O("ToolBar.floatingBackground");
if (this.dockingBorderColor == null  || Clazz.instanceOf(this.dockingBorderColor, "javax.swing.plaf.UIResource") ) this.dockingBorderColor=$I$(4).getColor$O("ToolBar.dockingForeground");
if (this.floatingBorderColor == null  || Clazz.instanceOf(this.floatingBorderColor, "javax.swing.plaf.UIResource") ) this.floatingBorderColor=$I$(4).getColor$O("ToolBar.floatingForeground");
var rolloverProp=this.toolBar.getClientProperty$O(C$.IS_ROLLOVER);
if (rolloverProp == null ) {
rolloverProp=$I$(4).get$O("ToolBar.isRollover");
}if (rolloverProp != null ) {
this.rolloverBorders=(rolloverProp).booleanValue$();
}if (C$.rolloverBorder == null ) {
C$.rolloverBorder=this.createRolloverBorder$();
}if (C$.nonRolloverBorder == null ) {
C$.nonRolloverBorder=this.createNonRolloverBorder$();
}if (C$.nonRolloverToggleBorder == null ) {
C$.nonRolloverToggleBorder=p$1.createNonRolloverToggleBorder.apply(this, []);
}this.setRolloverBorders$Z(this.isRolloverBorders$());
});

Clazz.newMeth(C$, 'uninstallDefaults$', function () {
$I$(12).uninstallBorder$javax_swing_JComponent(this.toolBar);
this.dockingColor=null;
this.floatingColor=null;
this.dockingBorderColor=null;
this.floatingBorderColor=null;
this.installNormalBorders$javax_swing_JComponent(this.toolBar);
C$.rolloverBorder=null;
C$.nonRolloverBorder=null;
C$.nonRolloverToggleBorder=null;
});

Clazz.newMeth(C$, 'installComponents$', function () {
});

Clazz.newMeth(C$, 'uninstallComponents$', function () {
});

Clazz.newMeth(C$, 'installListeners$', function () {
this.dockingListener=this.createDockingListener$();
if (this.dockingListener != null ) {
this.toolBar.addMouseMotionListener$java_awt_event_MouseMotionListener(this.dockingListener);
this.toolBar.addMouseListener$java_awt_event_MouseListener(this.dockingListener);
}this.propertyListener=this.createPropertyListener$();
if (this.propertyListener != null ) {
this.toolBar.addPropertyChangeListener$java_beans_PropertyChangeListener(this.propertyListener);
}this.toolBarContListener=this.createToolBarContListener$();
if (this.toolBarContListener != null ) {
this.toolBar.addContainerListener$java_awt_event_ContainerListener(this.toolBarContListener);
}this.toolBarFocusListener=this.createToolBarFocusListener$();
if (this.toolBarFocusListener != null ) {
var components=$I$(1).getChildArray$java_awt_Container(this.toolBar);
for (var i=0, n=this.toolBar.getComponentCount$(); i < n; ++i) {
components[i].addFocusListener$java_awt_event_FocusListener(this.toolBarFocusListener);
}
}});

Clazz.newMeth(C$, 'uninstallListeners$', function () {
if (this.dockingListener != null ) {
this.toolBar.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.dockingListener);
this.toolBar.removeMouseListener$java_awt_event_MouseListener(this.dockingListener);
this.dockingListener=null;
}if (this.propertyListener != null ) {
this.toolBar.removePropertyChangeListener$java_beans_PropertyChangeListener(this.propertyListener);
this.propertyListener=null;
}if (this.toolBarContListener != null ) {
this.toolBar.removeContainerListener$java_awt_event_ContainerListener(this.toolBarContListener);
this.toolBarContListener=null;
}if (this.toolBarFocusListener != null ) {
var components=$I$(1).getChildArray$java_awt_Container(this.toolBar);
for (var i=0, n=this.toolBar.getComponentCount$(); i < n; ++i) {
components[i].removeFocusListener$java_awt_event_FocusListener(this.toolBarFocusListener);
}
this.toolBarFocusListener=null;
}this.handler=null;
});

Clazz.newMeth(C$, 'installKeyboardActions$', function () {
var km=this.getInputMap$I(1);
$I$(14).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.toolBar, 1, km);
$I$(15).installLazyActionMap$javax_swing_JComponent$Class$S(this.toolBar, Clazz.getClass(C$), "ToolBar.actionMap");
});

Clazz.newMeth(C$, 'getInputMap$I', function (condition) {
if (condition == 1) {
return $I$(16).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.toolBar, this, "ToolBar.ancestorInputMap");
}return null;
});

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap', function (map) {
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S,["navigateRight"]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S,["navigateLeft"]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S,["navigateUp"]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S,["navigateDown"]));
}, 1);

Clazz.newMeth(C$, 'uninstallKeyboardActions$', function () {
$I$(14).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.toolBar, null);
$I$(14).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.toolBar, 1, null);
});

Clazz.newMeth(C$, 'navigateFocusedComp$I', function (direction) {
var nComp=this.toolBar.getComponentCount$();
var j;
switch (direction) {
case 3:
case 5:
if (this.focusedCompIndex < 0 || this.focusedCompIndex >= nComp ) break;
j=this.focusedCompIndex + 1;
while (j != this.focusedCompIndex){
if (j >= nComp) j=0;
var comp=this.toolBar.getComponentAtIndex$I(j++);
if (comp != null  && comp.isFocusTraversable$()  && comp.isEnabled$() ) {
comp.requestFocus$();
break;
}}
break;
case 7:
case 1:
if (this.focusedCompIndex < 0 || this.focusedCompIndex >= nComp ) break;
j=this.focusedCompIndex - 1;
while (j != this.focusedCompIndex){
if (j < 0) j=nComp - 1;
var comp=this.toolBar.getComponentAtIndex$I(j--);
if (comp != null  && comp.isFocusTraversable$()  && comp.isEnabled$() ) {
comp.requestFocus$();
break;
}}
break;
default:
break;
}
});

Clazz.newMeth(C$, 'createRolloverBorder$', function () {
var border=$I$(4).get$O("ToolBar.rolloverBorder");
if (border != null ) {
return border;
}var table=$I$(4).getLookAndFeelDefaults$();
return Clazz.new_($I$(18).c$$javax_swing_border_Border$javax_swing_border_Border,[Clazz.new_($I$(19).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color,[table.getColor$O("controlShadow"), table.getColor$O("controlDkShadow"), table.getColor$O("controlHighlight"), table.getColor$O("controlLtHighlight")]), Clazz.new_($I$(20))]);
});

Clazz.newMeth(C$, 'createNonRolloverBorder$', function () {
var border=$I$(4).get$O("ToolBar.nonrolloverBorder");
if (border != null ) {
return border;
}var table=$I$(4).getLookAndFeelDefaults$();
return Clazz.new_($I$(18).c$$javax_swing_border_Border$javax_swing_border_Border,[Clazz.new_($I$(21).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color,[table.getColor$O("Button.shadow"), table.getColor$O("Button.darkShadow"), table.getColor$O("Button.light"), table.getColor$O("Button.highlight")]), Clazz.new_($I$(20))]);
});

Clazz.newMeth(C$, 'createNonRolloverToggleBorder', function () {
var table=$I$(4).getLookAndFeelDefaults$();
return Clazz.new_($I$(18).c$$javax_swing_border_Border$javax_swing_border_Border,[Clazz.new_($I$(22).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color,[table.getColor$O("ToggleButton.shadow"), table.getColor$O("ToggleButton.darkShadow"), table.getColor$O("ToggleButton.light"), table.getColor$O("ToggleButton.highlight")]), Clazz.new_($I$(20))]);
}, p$1);

Clazz.newMeth(C$, 'createFloatingFrame$javax_swing_JToolBar', function (toolbar) {
var window=$I$(14).getWindowAncestor$java_awt_Component(toolbar);
var frame=((P$.JSToolBarUI$1||
(function(){var C$=Clazz.newClass(P$, "JSToolBarUI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JFrame'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createRootPane$', function () {
var rootPane=((P$.JSToolBarUI$1$1||
(function(){var C$=Clazz.newClass(P$, "JSToolBarUI$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JRootPane'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.packing=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.packing=false;
}, 1);

Clazz.newMeth(C$, 'validate$', function () {
C$.superclazz.prototype.validate$.apply(this, []);
if (!this.packing) {
this.packing=true;
this.b$['java.awt.Window'].pack$.apply(this.b$['java.awt.Window'], []);
this.packing=false;
}});
})()
), Clazz.new_($I$(23).c$$S$Z$java_awt_Container, [this, null, this.b$['swingjs.plaf.JSToolBarUI'].id + (++$I$(3).toolbarCount), false, this],P$.JSToolBarUI$1$1));
rootPane.setOpaque$Z(true);
return rootPane;
});
})()
), Clazz.new_($I$(24).c$$S$java_awt_GraphicsConfiguration, [this, null, toolbar.getName$(), (window != null ) ? window.getGraphicsConfiguration$() : null],P$.JSToolBarUI$1));
frame.getRootPane$().setName$S("ToolBar.FloatingFrame");
frame.setResizable$Z(false);
var wl=this.createFrameListener$();
frame.addWindowListener$java_awt_event_WindowListener(wl);
return frame;
});

Clazz.newMeth(C$, 'createFloatingWindow$javax_swing_JToolBar', function (toolbar) {
var dialog;
var window=$I$(14).getWindowAncestor$java_awt_Component(toolbar);
if (Clazz.instanceOf(window, "java.awt.JSFrame")) {
dialog=Clazz.new_($I$(25).c$$java_awt_JSFrame$S$Z, [this, null, window, toolbar.getName$(), false],P$.JSToolBarUI$1ToolBarDialog);
} else if (Clazz.instanceOf(window, "java.awt.JSDialog")) {
dialog=Clazz.new_($I$(25).c$$java_awt_JSDialog$S$Z, [this, null, window, toolbar.getName$(), false],P$.JSToolBarUI$1ToolBarDialog);
} else {
dialog=Clazz.new_($I$(25).c$$java_awt_JSFrame$S$Z, [this, null, null, toolbar.getName$(), false],P$.JSToolBarUI$1ToolBarDialog);
}dialog.getRootPane$().setName$S("ToolBar.FloatingWindow");
dialog.setTitle$S(toolbar.getName$());
dialog.setResizable$Z(false);
var wl=this.createFrameListener$();
dialog.addWindowListener$java_awt_event_WindowListener(wl);
return dialog;
});

Clazz.newMeth(C$, 'createDragWindow$javax_swing_JToolBar', function (toolbar) {
var frame=null;
if (this.toolBar != null ) {
var p;
for (p=this.toolBar.getParent$(); p != null  && !p.isWindowOrJSApplet$() ; p=p.getParent$()) ;
if (p != null  && p.isWindowOrJSApplet$() ) frame=p;
}if (this.floatingToolBar == null ) {
this.floatingToolBar=this.createFloatingWindow$javax_swing_JToolBar(this.toolBar);
}if (Clazz.instanceOf(this.floatingToolBar, "java.awt.Window")) frame=this.floatingToolBar;
var dragWindow=Clazz.new_($I$(26).c$$java_awt_Window, [this, null, frame]);
return dragWindow;
});

Clazz.newMeth(C$, 'isRolloverBorders$', function () {
return this.rolloverBorders;
});

Clazz.newMeth(C$, 'setRolloverBorders$Z', function (rollover) {
this.rolloverBorders=rollover;
if (this.rolloverBorders) {
this.installRolloverBorders$javax_swing_JComponent(this.toolBar);
} else {
this.installNonRolloverBorders$javax_swing_JComponent(this.toolBar);
}});

Clazz.newMeth(C$, 'installRolloverBorders$javax_swing_JComponent', function (c) {
var components=$I$(1).getChildArray$java_awt_Container(c);
for (var i=0, n=c.getComponentCount$(); i < n; ++i) {
(components[i]).updateUI$();
}
});

Clazz.newMeth(C$, 'installNonRolloverBorders$javax_swing_JComponent', function (c) {
var components=$I$(1).getChildArray$java_awt_Container(c);
for (var i=0, n=this.toolBar.getComponentCount$(); i < n; ++i) {
if (Clazz.instanceOf(components[i], "javax.swing.JComponent")) {
(components[i]).updateUI$();
this.setBorderToNonRollover$java_awt_Component(components[i]);
}}
});

Clazz.newMeth(C$, 'installNormalBorders$javax_swing_JComponent', function (c) {
var components=$I$(1).getChildArray$java_awt_Container(c);
for (var i=0, n=c.getComponentCount$(); i < n; ++i) {
this.setBorderToNormal$java_awt_Component(components[i]);
}
});

Clazz.newMeth(C$, 'setBorderToRollover$java_awt_Component', function (c) {
if (Clazz.instanceOf(c, "javax.swing.AbstractButton")) {
var b=c;
var border=this.borderTable.get$O(b);
if (border == null  || Clazz.instanceOf(border, "javax.swing.plaf.UIResource") ) {
this.borderTable.put$TK$TV(b, b.getBorder$());
}if (Clazz.instanceOf(b.getBorder$(), "javax.swing.plaf.UIResource")) {
b.setBorder$javax_swing_border_Border(this.getRolloverBorder$javax_swing_AbstractButton(b));
}this.rolloverTable.put$TK$TV(b, b.isRolloverEnabled$() ? $I$(13).TRUE : $I$(13).FALSE);
b.setRolloverEnabled$Z(true);
}});

Clazz.newMeth(C$, 'getRolloverBorder$javax_swing_AbstractButton', function (b) {
return C$.rolloverBorder;
});

Clazz.newMeth(C$, 'setBorderToNonRollover$java_awt_Component', function (c) {
if (Clazz.instanceOf(c, "javax.swing.AbstractButton")) {
var b=c;
var border=this.borderTable.get$O(b);
if (border == null  || Clazz.instanceOf(border, "javax.swing.plaf.UIResource") ) {
this.borderTable.put$TK$TV(b, b.getBorder$());
}if (Clazz.instanceOf(b.getBorder$(), "javax.swing.plaf.UIResource")) {
b.setBorder$javax_swing_border_Border(this.getNonRolloverBorder$javax_swing_AbstractButton(b));
}this.rolloverTable.put$TK$TV(b, b.isRolloverEnabled$() ? $I$(13).TRUE : $I$(13).FALSE);
b.setRolloverEnabled$Z(false);
}});

Clazz.newMeth(C$, 'getNonRolloverBorder$javax_swing_AbstractButton', function (b) {
if (Clazz.instanceOf(b, "javax.swing.JToggleButton")) {
return C$.nonRolloverToggleBorder;
} else {
return C$.nonRolloverBorder;
}});

Clazz.newMeth(C$, 'setBorderToNormal$java_awt_Component', function (c) {
if (Clazz.instanceOf(c, "javax.swing.AbstractButton")) {
var b=c;
var border=this.borderTable.remove$O(b);
b.setBorder$javax_swing_border_Border(border);
var value=this.rolloverTable.remove$O(b);
if (value != null ) {
b.setRolloverEnabled$Z(value.booleanValue$());
}}});

Clazz.newMeth(C$, 'setFloatingLocation$I$I', function (x, y) {
this.floatingX=x;
this.floatingY=y;
});

Clazz.newMeth(C$, 'isFloating$', function () {
return this.floating;
});

Clazz.newMeth(C$, 'setFloating$Z$java_awt_Point', function (b, p) {
if (this.toolBar.isFloatable$() == true ) {
var visible=false;
var ancestor=$I$(14).getWindowAncestor$java_awt_Component(this.toolBar);
if (ancestor != null ) {
visible=ancestor.isVisible$();
}if (this.dragWindow != null ) this.dragWindow.setVisible$Z(false);
this.floating=b;
if (this.floatingToolBar == null ) {
this.floatingToolBar=this.createFloatingWindow$javax_swing_JToolBar(this.toolBar);
}if (b == true ) {
if (this.dockingSource == null ) {
this.dockingSource=this.toolBar.getParent$();
this.dockingSource.remove$java_awt_Component(this.toolBar);
}this.constraintBeforeFloating=p$1.calculateConstraint.apply(this, []);
if (this.propertyListener != null ) $I$(4).addPropertyChangeListener$java_beans_PropertyChangeListener(this.propertyListener);
this.floatingToolBar.getContentPane$().add$java_awt_Component$O(this.toolBar, "Center");
if (Clazz.instanceOf(this.floatingToolBar, "java.awt.Window")) {
(this.floatingToolBar).pack$();
(this.floatingToolBar).setLocation$I$I(this.floatingX, this.floatingY);
if (visible) {
(this.floatingToolBar).show$();
} else {
ancestor.addWindowListener$java_awt_event_WindowListener(((P$.JSToolBarUI$2||
(function(){var C$=Clazz.newClass(P$, "JSToolBarUI$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent', function (e) {
(this.b$['swingjs.plaf.JSToolBarUI'].floatingToolBar).show$();
});
})()
), Clazz.new_($I$(27), [this, null],P$.JSToolBarUI$2)));
}}} else {
if (this.floatingToolBar == null ) this.floatingToolBar=this.createFloatingWindow$javax_swing_JToolBar(this.toolBar);
if (Clazz.instanceOf(this.floatingToolBar, "java.awt.Window")) (this.floatingToolBar).setVisible$Z(false);
this.floatingToolBar.getContentPane$().remove$java_awt_Component(this.toolBar);
var constraint=p$1.getDockingConstraint$java_awt_Component$java_awt_Point.apply(this, [this.dockingSource, p]);
if (constraint == null ) {
constraint="North";
}var orientation=p$1.mapConstraintToOrientation$S.apply(this, [constraint]);
this.setOrientation$I(orientation);
if (this.dockingSource == null ) this.dockingSource=this.toolBar.getParent$();
if (this.propertyListener != null ) $I$(4).removePropertyChangeListener$java_beans_PropertyChangeListener(this.propertyListener);
this.dockingSource.add$S$java_awt_Component(constraint, this.toolBar);
}this.dockingSource.invalidate$();
var dockingSourceParent=this.dockingSource.getParent$();
if (dockingSourceParent != null ) dockingSourceParent.validate$();
this.dockingSource.repaint$();
}});

Clazz.newMeth(C$, 'mapConstraintToOrientation$S', function (constraint) {
var orientation=this.toolBar.getOrientation$();
if (constraint != null ) {
if (constraint.equals$O("East") || constraint.equals$O("West") ) orientation=1;
 else if (constraint.equals$O("North") || constraint.equals$O("South") ) orientation=0;
}return orientation;
}, p$1);

Clazz.newMeth(C$, 'setOrientation$I', function (orientation) {
this.toolBar.setOrientation$I(orientation);
if (this.dragWindow != null ) this.dragWindow.setOrientation$I(orientation);
});

Clazz.newMeth(C$, 'getDockingColor$', function () {
return this.dockingColor;
});

Clazz.newMeth(C$, 'setDockingColor$java_awt_Color', function (c) {
this.dockingColor=c;
});

Clazz.newMeth(C$, 'getFloatingColor$', function () {
return this.floatingColor;
});

Clazz.newMeth(C$, 'setFloatingColor$java_awt_Color', function (c) {
this.floatingColor=c;
});

Clazz.newMeth(C$, 'isBlocked$java_awt_Component$O', function (comp, constraint) {
if (Clazz.instanceOf(comp, "java.awt.Container")) {
var cont=comp;
var lm=cont.getLayout$();
if (Clazz.instanceOf(lm, "java.awt.BorderLayout")) {
var blm=lm;
var c=blm.getLayoutComponent$java_awt_Container$O(cont, constraint);
return (c != null  && c !== this.toolBar  );
}}return false;
}, p$1);

Clazz.newMeth(C$, 'canDock$java_awt_Component$java_awt_Point', function (c, p) {
return (p != null  && p$1.getDockingConstraint$java_awt_Component$java_awt_Point.apply(this, [c, p]) != null  );
});

Clazz.newMeth(C$, 'calculateConstraint', function () {
var constraint=null;
var lm=this.dockingSource.getLayout$();
if (Clazz.instanceOf(lm, "java.awt.BorderLayout")) {
constraint=(lm).getConstraints$java_awt_Component(this.toolBar);
}return (constraint != null ) ? constraint : this.constraintBeforeFloating;
}, p$1);

Clazz.newMeth(C$, 'getDockingConstraint$java_awt_Component$java_awt_Point', function (c, p) {
if (p == null ) return this.constraintBeforeFloating;
if (c.contains$java_awt_Point(p)) {
this.dockingSensitivity=(this.toolBar.getOrientation$() == 0) ? this.toolBar.getSize$().height : this.toolBar.getSize$().width;
if (p.y < this.dockingSensitivity && !p$1.isBlocked$java_awt_Component$O.apply(this, [c, "North"]) ) {
return "North";
}if (p.x >= c.getWidth$() - this.dockingSensitivity && !p$1.isBlocked$java_awt_Component$O.apply(this, [c, "East"]) ) {
return "East";
}if (p.x < this.dockingSensitivity && !p$1.isBlocked$java_awt_Component$O.apply(this, [c, "West"]) ) {
return "West";
}if (p.y >= c.getHeight$() - this.dockingSensitivity && !p$1.isBlocked$java_awt_Component$O.apply(this, [c, "South"]) ) {
return "South";
}}return null;
}, p$1);

Clazz.newMeth(C$, 'dragTo$java_awt_Point$java_awt_Point', function (position, origin) {
if (this.toolBar.isFloatable$() == true ) {
try {
if (this.dragWindow == null ) this.dragWindow=this.createDragWindow$javax_swing_JToolBar(this.toolBar);
var offset=this.dragWindow.getOffset$();
if (offset == null ) {
var size=this.toolBar.getPreferredSize$();
offset=Clazz.new_($I$(7).c$$I$I,[(size.width/2|0), (size.height/2|0)]);
this.dragWindow.setOffset$java_awt_Point(offset);
}var global=Clazz.new_($I$(7).c$$I$I,[origin.x + position.x, origin.y + position.y]);
var dragPoint=Clazz.new_($I$(7).c$$I$I,[global.x - offset.x, global.y - offset.y]);
if (this.dockingSource == null ) this.dockingSource=this.toolBar.getParent$();
this.constraintBeforeFloating=p$1.calculateConstraint.apply(this, []);
var dockingPosition=this.dockingSource.getLocationOnScreen$();
var comparisonPoint=Clazz.new_($I$(7).c$$I$I,[global.x - dockingPosition.x, global.y - dockingPosition.y]);
if (this.canDock$java_awt_Component$java_awt_Point(this.dockingSource, comparisonPoint)) {
this.dragWindow.setBackground$java_awt_Color(this.getDockingColor$());
var constraint=p$1.getDockingConstraint$java_awt_Component$java_awt_Point.apply(this, [this.dockingSource, comparisonPoint]);
var orientation=p$1.mapConstraintToOrientation$S.apply(this, [constraint]);
this.dragWindow.setOrientation$I(orientation);
this.dragWindow.setBorderColor$java_awt_Color(this.dockingBorderColor);
} else {
this.dragWindow.setBackground$java_awt_Color(this.getFloatingColor$());
this.dragWindow.setBorderColor$java_awt_Color(this.floatingBorderColor);
this.dragWindow.setOrientation$I(this.toolBar.getOrientation$());
}this.dragWindow.setLocation$I$I(dragPoint.x, dragPoint.y);
if (this.dragWindow.isVisible$() == false ) {
var size=this.toolBar.getPreferredSize$();
this.dragWindow.setSize$I$I(size.width, size.height);
this.dragWindow.show$();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.IllegalComponentStateException")){
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'floatAt$java_awt_Point$java_awt_Point', function (position, origin) {
if (this.toolBar.isFloatable$() == true ) {
try {
var offset=this.dragWindow.getOffset$();
if (offset == null ) {
offset=position;
this.dragWindow.setOffset$java_awt_Point(offset);
}var global=Clazz.new_($I$(7).c$$I$I,[origin.x + position.x, origin.y + position.y]);
this.setFloatingLocation$I$I(global.x - offset.x, global.y - offset.y);
if (this.dockingSource != null ) {
var dockingPosition=this.dockingSource.getLocationOnScreen$();
var comparisonPoint=Clazz.new_($I$(7).c$$I$I,[global.x - dockingPosition.x, global.y - dockingPosition.y]);
if (this.canDock$java_awt_Component$java_awt_Point(this.dockingSource, comparisonPoint)) {
this.setFloating$Z$java_awt_Point(false, comparisonPoint);
} else {
this.setFloating$Z$java_awt_Point(true, null);
}} else {
this.setFloating$Z$java_awt_Point(true, null);
}this.dragWindow.setOffset$java_awt_Point(null);
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.IllegalComponentStateException")){
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'getHandler$', function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(28), [this, null]);
}return this.handler;
});

Clazz.newMeth(C$, 'createToolBarContListener$', function () {
return this.getHandler$();
});

Clazz.newMeth(C$, 'createToolBarFocusListener$', function () {
return this.getHandler$();
});

Clazz.newMeth(C$, 'createPropertyListener$', function () {
return this.getHandler$();
});

Clazz.newMeth(C$, 'createDockingListener$', function () {
this.getHandler$().tb=this.toolBar;
return this.getHandler$();
});

Clazz.newMeth(C$, 'createFrameListener$', function () {
return Clazz.new_($I$(29), [this, null]);
});

Clazz.newMeth(C$, 'paintDragWindow$java_awt_Graphics', function (g) {
g.setColor$java_awt_Color(this.dragWindow.getBackground$());
var w=this.dragWindow.getWidth$();
var h=this.dragWindow.getHeight$();
g.fillRect$I$I$I$I(0, 0, w, h);
g.setColor$java_awt_Color(this.dragWindow.getBorderColor$());
g.drawRect$I$I$I$I(0, 0, w - 1, h - 1);
});
;
(function(){var C$=Clazz.newClass(P$, "JSToolBarUI$1ToolBarDialog", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JDialog', null, 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSFrame$S$Z', function (owner, title, modal) {
C$.superclazz.c$$java_awt_JSFrame$S$Z.apply(this, [owner, title, modal]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSDialog$S$Z', function (owner, title, modal) {
C$.superclazz.c$$java_awt_JSDialog$S$Z.apply(this, [owner, title, modal]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createRootPane$', function () {
var rootPane=((P$.JSToolBarUI$1ToolBarDialog$1||
(function(){var C$=Clazz.newClass(P$, "JSToolBarUI$1ToolBarDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JRootPane'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.packing=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.packing=false;
}, 1);

Clazz.newMeth(C$, 'validate$', function () {
C$.superclazz.prototype.validate$.apply(this, []);
if (!this.packing) {
this.packing=true;
this.b$['java.awt.Window'].pack$.apply(this.b$['java.awt.Window'], []);
this.packing=false;
}});
})()
), Clazz.new_($I$(23).c$$S$Z$java_awt_Container, [this, null, this.this$0.id + (++$I$(3).toolbarCount), false, this],P$.JSToolBarUI$1ToolBarDialog$1));
rootPane.setOpaque$Z(true);
return rootPane;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSToolBarUI, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (evt) {
var key=this.getName$();
var toolBar=evt.getSource$();
var ui=toolBar.getUI$();
if ("navigateRight" == key) {
ui.navigateFocusedComp$I(3);
} else if ("navigateLeft" == key) {
ui.navigateFocusedComp$I(7);
} else if ("navigateUp" == key) {
ui.navigateFocusedComp$I(1);
} else if ("navigateDown" == key) {
ui.navigateFocusedComp$I(5);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSToolBarUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.awt.event.ContainerListener', 'java.awt.event.FocusListener', 'javax.swing.event.MouseInputListener', 'java.beans.PropertyChangeListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tb=null;
this.isDragging=false;
this.origin=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isDragging=false;
this.origin=null;
}, 1);

Clazz.newMeth(C$, 'componentAdded$java_awt_event_ContainerEvent', function (evt) {
var c=evt.getChild$();
if (this.this$0.toolBarFocusListener != null ) {
c.addFocusListener$java_awt_event_FocusListener(this.this$0.toolBarFocusListener);
}if (this.this$0.isRolloverBorders$.apply(this.this$0, [])) {
this.this$0.setBorderToRollover$java_awt_Component.apply(this.this$0, [c]);
} else {
this.this$0.setBorderToNonRollover$java_awt_Component.apply(this.this$0, [c]);
}});

Clazz.newMeth(C$, 'componentRemoved$java_awt_event_ContainerEvent', function (evt) {
var c=evt.getChild$();
if (this.this$0.toolBarFocusListener != null ) {
c.removeFocusListener$java_awt_event_FocusListener(this.this$0.toolBarFocusListener);
}this.this$0.setBorderToNormal$java_awt_Component.apply(this.this$0, [c]);
});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (evt) {
var c=evt.getComponent$();
this.this$0.focusedCompIndex=this.this$0.toolBar.getComponentIndex$java_awt_Component(c);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (evt) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
if (!this.tb.isEnabled$()) {
return;
}this.isDragging=false;
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
if (!this.tb.isEnabled$()) {
return;
}if (this.isDragging == true ) {
var position=evt.getPoint$();
if (this.origin == null ) this.origin=evt.getComponent$().getLocationOnScreen$();
this.this$0.floatAt$java_awt_Point$java_awt_Point.apply(this.this$0, [position, this.origin]);
}this.origin=null;
this.isDragging=false;
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
if (!this.tb.isEnabled$()) {
return;
}this.isDragging=true;
var position=evt.getPoint$();
if (this.origin == null ) {
this.origin=evt.getComponent$().getLocationOnScreen$();
}this.this$0.dragTo$java_awt_Point$java_awt_Point.apply(this.this$0, [position, this.origin]);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
var propertyName=evt.getPropertyName$();
if (propertyName == "lookAndFeel") {
this.this$0.toolBar.updateUI$();
} else if (propertyName == "orientation") {
var components=$I$(1).getChildArray$java_awt_Container(this.this$0.toolBar);
var n=this.this$0.toolBar.getComponentCount$();
var orientation=(evt.getNewValue$()).intValue$();
var separator;
for (var i=0; i < n; ++i) {
if (Clazz.instanceOf(components[i], "javax.swing.JToolBar.Separator")) {
separator=components[i];
if ((orientation == 0)) {
separator.setOrientation$I(1);
} else {
separator.setOrientation$I(0);
}var size=separator.getSeparatorSize$();
if (size != null  && size.width != size.height ) {
var newSize=Clazz.new_($I$(2).c$$I$I,[size.height, size.width]);
separator.setSeparatorSize$java_awt_Dimension(newSize);
}}}
} else if (propertyName == $I$(3).IS_ROLLOVER) {
this.this$0.installNormalBorders$javax_swing_JComponent.apply(this.this$0, [this.this$0.toolBar]);
this.this$0.setRolloverBorders$Z.apply(this.this$0, [(evt.getNewValue$()).booleanValue$()]);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSToolBarUI, "FrameListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.WindowAdapter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (w) {
if (this.this$0.toolBar.isFloatable$() == true ) {
if (this.this$0.dragWindow != null ) this.this$0.dragWindow.setVisible$Z(false);
this.this$0.floating=false;
if (this.this$0.floatingToolBar == null ) this.this$0.floatingToolBar=this.this$0.createFloatingWindow$javax_swing_JToolBar.apply(this.this$0, [this.this$0.toolBar]);
if (Clazz.instanceOf(this.this$0.floatingToolBar, "java.awt.Window")) (this.this$0.floatingToolBar).setVisible$Z(false);
this.this$0.floatingToolBar.getContentPane$().remove$java_awt_Component(this.this$0.toolBar);
var constraint=this.this$0.constraintBeforeFloating;
if (this.this$0.toolBar.getOrientation$() == 0) {
if (constraint == "West" || constraint == "East" ) {
constraint="North";
}} else {
if (constraint == "North" || constraint == "South" ) {
constraint="West";
}}if (this.this$0.dockingSource == null ) this.this$0.dockingSource=this.this$0.toolBar.getParent$();
if (this.this$0.propertyListener != null ) $I$(4).removePropertyChangeListener$java_beans_PropertyChangeListener(this.this$0.propertyListener);
this.this$0.dockingSource.add$java_awt_Component$O(this.this$0.toolBar, constraint);
this.this$0.dockingSource.invalidate$();
var dockingSourceParent=this.this$0.dockingSource.getParent$();
if (dockingSourceParent != null ) dockingSourceParent.validate$();
this.this$0.dockingSource.repaint$();
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSToolBarUI, "ToolBarContListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ContainerListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'componentAdded$java_awt_event_ContainerEvent', function (e) {
this.this$0.getHandler$.apply(this.this$0, []).componentAdded$java_awt_event_ContainerEvent(e);
});

Clazz.newMeth(C$, 'componentRemoved$java_awt_event_ContainerEvent', function (e) {
this.this$0.getHandler$.apply(this.this$0, []).componentRemoved$java_awt_event_ContainerEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSToolBarUI, "ToolBarFocusListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.FocusListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (e) {
this.this$0.getHandler$.apply(this.this$0, []).focusGained$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
this.this$0.getHandler$.apply(this.this$0, []).focusLost$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSToolBarUI, "PropertyListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
this.this$0.getHandler$.apply(this.this$0, []).propertyChange$java_beans_PropertyChangeEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSToolBarUI, "DockingListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.MouseInputListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.toolBar=null;
this.isDragging=false;
this.origin=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isDragging=false;
this.origin=null;
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JToolBar', function (t) {
C$.$init$.apply(this);
this.toolBar=t;
this.this$0.getHandler$.apply(this.this$0, []).tb=t;
}, 1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
this.this$0.getHandler$.apply(this.this$0, []).mouseClicked$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
this.this$0.getHandler$.apply(this.this$0, []).tb=this.toolBar;
this.this$0.getHandler$.apply(this.this$0, []).mousePressed$java_awt_event_MouseEvent(e);
this.isDragging=this.this$0.getHandler$.apply(this.this$0, []).isDragging;
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
this.this$0.getHandler$.apply(this.this$0, []).tb=this.toolBar;
this.this$0.getHandler$.apply(this.this$0, []).isDragging=this.isDragging;
this.this$0.getHandler$.apply(this.this$0, []).origin=this.origin;
this.this$0.getHandler$.apply(this.this$0, []).mouseReleased$java_awt_event_MouseEvent(e);
this.isDragging=this.this$0.getHandler$.apply(this.this$0, []).isDragging;
this.origin=this.this$0.getHandler$.apply(this.this$0, []).origin;
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
this.this$0.getHandler$.apply(this.this$0, []).mouseEntered$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
this.this$0.getHandler$.apply(this.this$0, []).mouseExited$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
this.this$0.getHandler$.apply(this.this$0, []).tb=this.toolBar;
this.this$0.getHandler$.apply(this.this$0, []).origin=this.origin;
this.this$0.getHandler$.apply(this.this$0, []).mouseDragged$java_awt_event_MouseEvent(e);
this.isDragging=this.this$0.getHandler$.apply(this.this$0, []).isDragging;
this.origin=this.this$0.getHandler$.apply(this.this$0, []).origin;
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
this.this$0.getHandler$.apply(this.this$0, []).mouseMoved$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSToolBarUI, "DragWindow", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.Window');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.borderColor=null;
this.orientation=0;
this.offset=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.borderColor=$I$(5).gray;
this.orientation=this.this$0.toolBar.getOrientation$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window', function (w) {
C$.superclazz.c$$java_awt_Window.apply(this, [w]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getOrientation$', function () {
return this.orientation;
});

Clazz.newMeth(C$, 'setOrientation$I', function (o) {
if (this.isShowing$()) {
if (o == this.orientation) return;
this.orientation=o;
var size=this.getSize$();
this.setSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[size.height, size.width]));
if (this.offset != null ) {
if ($I$(6).isLeftToRight$java_awt_Component(this.this$0.toolBar)) {
this.setOffset$java_awt_Point(Clazz.new_($I$(7).c$$I$I,[this.offset.y, this.offset.x]));
} else if (o == 0) {
this.setOffset$java_awt_Point(Clazz.new_($I$(7).c$$I$I,[size.height - this.offset.y, this.offset.x]));
} else {
this.setOffset$java_awt_Point(Clazz.new_($I$(7).c$$I$I,[this.offset.y, size.width - this.offset.x]));
}}this.repaint$();
}});

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'setOffset$java_awt_Point', function (p) {
this.offset=p;
});

Clazz.newMeth(C$, 'setBorderColor$java_awt_Color', function (c) {
if (this.borderColor === c ) return;
this.borderColor=c;
this.repaint$();
});

Clazz.newMeth(C$, 'getBorderColor$', function () {
return this.borderColor;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
this.this$0.paintDragWindow$java_awt_Graphics.apply(this.this$0, [g]);
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'getInsets$', function () {
return Clazz.new_($I$(8).c$$I$I$I$I,[1, 1, 1, 1]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
