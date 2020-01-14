(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.Timer',['javax.swing.ToolTipManager','.MoveBeforeEnterListener'],'java.awt.Point','java.awt.Toolkit','javax.swing.SwingUtilities','java.awt.Rectangle','javax.swing.PopupFactory','swingjs.JSToolkit']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ToolTipManager", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.event.MouseAdapter', 'java.awt.event.MouseMotionListener');
C$.TOOL_TIP_MANAGER_KEY=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.TOOL_TIP_MANAGER_KEY= Clazz.new_();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.enterTimer=null;
this.exitTimer=null;
this.insideTimer=null;
this.toolTipText=null;
this.preferredLocation=null;
this.insideComponent=null;
this.mouseEvent=null;
this.showImmediately=false;
this.tipWindow=null;
this.window=null;
this.tip=null;
this.popupRect=null;
this.popupFrameRect=null;
this.enabled=false;
this.tipShowing=false;
this.focusChangeListener=null;
this.moveBeforeEnterListener=null;
this.lightWeightPopupEnabled=false;
this.heavyWeightPopupEnabled=false;
this.hasFired=false;
this.useCurrentMenu=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.popupRect=null;
this.popupFrameRect=null;
this.enabled=true;
this.tipShowing=false;
this.focusChangeListener=null;
this.moveBeforeEnterListener=null;
this.lightWeightPopupEnabled=false;
this.heavyWeightPopupEnabled=false;
this.hasFired=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.enterTimer=Clazz.new_($I$(1).c$$I$java_awt_event_ActionListener,[750, ((P$.ToolTipManager$1||
(function(){var C$=Clazz.newClass(P$, "ToolTipManager$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (this.b$['javax.swing.ToolTipManager'].insideComponent != null  && this.b$['javax.swing.ToolTipManager'].insideComponent.isShowing$() ) {
if (this.b$['javax.swing.ToolTipManager'].toolTipText == null  && this.b$['javax.swing.ToolTipManager'].mouseEvent != null  ) {
this.b$['javax.swing.ToolTipManager'].toolTipText=this.b$['javax.swing.ToolTipManager'].insideComponent.getToolTipText$java_awt_event_MouseEvent(this.b$['javax.swing.ToolTipManager'].mouseEvent);
this.b$['javax.swing.ToolTipManager'].preferredLocation=this.b$['javax.swing.ToolTipManager'].insideComponent.getToolTipLocation$java_awt_event_MouseEvent(this.b$['javax.swing.ToolTipManager'].mouseEvent);
}if (this.b$['javax.swing.ToolTipManager'].toolTipText != null ) {
this.b$['javax.swing.ToolTipManager'].showImmediately=true;
this.b$['javax.swing.ToolTipManager'].showTipWindow$.apply(this.b$['javax.swing.ToolTipManager'], []);
} else {
this.b$['javax.swing.ToolTipManager'].insideComponent=null;
this.b$['javax.swing.ToolTipManager'].toolTipText=null;
this.b$['javax.swing.ToolTipManager'].preferredLocation=null;
this.b$['javax.swing.ToolTipManager'].mouseEvent=null;
this.b$['javax.swing.ToolTipManager'].hideTipWindow$.apply(this.b$['javax.swing.ToolTipManager'], []);
}}});
})()
), Clazz.new_(P$.ToolTipManager$1.$init$, [this, null]))]);
this.enterTimer.setRepeats$Z(false);
this.exitTimer=Clazz.new_($I$(1).c$$I$java_awt_event_ActionListener,[500, ((P$.ToolTipManager$2||
(function(){var C$=Clazz.newClass(P$, "ToolTipManager$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['javax.swing.ToolTipManager'].showImmediately=false;
});
})()
), Clazz.new_(P$.ToolTipManager$2.$init$, [this, null]))]);
this.exitTimer.setRepeats$Z(false);
this.insideTimer=Clazz.new_($I$(1).c$$I$java_awt_event_ActionListener,[4000, ((P$.ToolTipManager$3||
(function(){var C$=Clazz.newClass(P$, "ToolTipManager$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['javax.swing.ToolTipManager'].hideTipWindow$.apply(this.b$['javax.swing.ToolTipManager'], []);
this.b$['javax.swing.ToolTipManager'].enterTimer.stop$();
this.b$['javax.swing.ToolTipManager'].showImmediately=false;
this.b$['javax.swing.ToolTipManager'].insideComponent=null;
this.b$['javax.swing.ToolTipManager'].mouseEvent=null;
});
})()
), Clazz.new_(P$.ToolTipManager$3.$init$, [this, null]))]);
this.insideTimer.setRepeats$Z(false);
this.moveBeforeEnterListener=Clazz.new_($I$(2), [this, null]);
}, 1);

Clazz.newMeth(C$, 'j2sHideToolTip$', function () {
C$.sharedInstance$().hideTipWindow$();
}, 1);

Clazz.newMeth(C$, 'setEnabled$Z', function (flag) {
this.enabled=flag;
if (!flag) {
this.hideTipWindow$();
}});

Clazz.newMeth(C$, 'isEnabled$', function () {
return this.enabled;
});

Clazz.newMeth(C$, 'setLightWeightPopupEnabled$Z', function (aFlag) {
this.lightWeightPopupEnabled=aFlag;
});

Clazz.newMeth(C$, 'isLightWeightPopupEnabled$', function () {
return this.lightWeightPopupEnabled;
});

Clazz.newMeth(C$, 'setInitialDelay$I', function (milliseconds) {
this.enterTimer.setInitialDelay$I(milliseconds);
});

Clazz.newMeth(C$, 'getInitialDelay$', function () {
return this.enterTimer.getInitialDelay$();
});

Clazz.newMeth(C$, 'setDismissDelay$I', function (milliseconds) {
this.insideTimer.setInitialDelay$I(milliseconds);
});

Clazz.newMeth(C$, 'getDismissDelay$', function () {
return this.insideTimer.getInitialDelay$();
});

Clazz.newMeth(C$, 'setReshowDelay$I', function (milliseconds) {
this.exitTimer.setInitialDelay$I(milliseconds);
});

Clazz.newMeth(C$, 'getReshowDelay$', function () {
return this.exitTimer.getInitialDelay$();
});

Clazz.newMeth(C$, 'showTipWindow$', function () {
if (this.insideComponent == null  || !this.insideComponent.isShowing$() ) return;
var win=this.insideComponent.getTopLevelAncestor$();
if (win.isWindowOrJSApplet$()) {
if ((win).getModalBlocker$() != null ) return;
}if (this.enabled) {
var size;
var screenLocation=this.insideComponent.getLocationOnScreen$();
var location=Clazz.new_($I$(3));
var gc;
gc=this.insideComponent.getGraphicsConfiguration$();
var sBounds=gc.getBounds$();
var screenInsets=$I$(4).getDefaultToolkit$().getScreenInsets$java_awt_GraphicsConfiguration(gc);
sBounds.x+=screenInsets.left;
sBounds.y+=screenInsets.top;
sBounds.width-=(screenInsets.left + screenInsets.right);
sBounds.height-=(screenInsets.top + screenInsets.bottom);
var leftToRight=$I$(5).isLeftToRight$java_awt_Component(this.insideComponent);
this.tip=this.insideComponent.createToolTip$();
this.tip.setTipText$S(this.toolTipText);
size=this.tip.getPreferredSize$();
if (this.preferredLocation != null ) {
location.x=screenLocation.x + this.preferredLocation.x;
location.y=screenLocation.y + this.preferredLocation.y;
if (!leftToRight) {
location.x-=size.width;
}} else {
location.x=screenLocation.x + this.mouseEvent.getX$();
location.y=screenLocation.y + this.mouseEvent.getY$() + 20 ;
if (!leftToRight) {
if (location.x - size.width >= 0) {
location.x-=size.width;
}}}if (this.popupRect == null ) {
this.popupRect=Clazz.new_($I$(6));
}this.popupRect.setBounds$I$I$I$I(location.x, location.y, size.width, size.height);
if (location.x < sBounds.x) {
location.x=sBounds.x;
} else if (location.x - sBounds.x + size.width > sBounds.width) {
location.x=sBounds.x + Math.max(0, sBounds.width - size.width);
}if (location.y < sBounds.y) {
location.y=sBounds.y;
} else if (location.y - sBounds.y + size.height > sBounds.height) {
location.y=sBounds.y + Math.max(0, sBounds.height - size.height);
}var popupFactory=$I$(7).getSharedInstance$();
{
popupFactory.setPopupType$I(2);
}var t=this.tip;
this.hideTipWindow$();
this.tip=t;
this.tipWindow=popupFactory.getPopup$java_awt_Component$java_awt_Component$I$I(this.insideComponent, this.tip, location.x, location.y);
popupFactory.setPopupType$I(0);
this.tipWindow.show$();
this.hasFired=true;
var componentWindow=$I$(5).windowForComponent$java_awt_Component(this.insideComponent);
this.window=$I$(5).windowForComponent$java_awt_Component(this.tip);
if (this.window != null  && this.window !== componentWindow  ) {
this.window.addMouseListener$java_awt_event_MouseListener(this);
} else {
this.window=null;
}this.insideTimer.stop$();
this.insideTimer.start$();
this.tipShowing=true;
}});

Clazz.newMeth(C$, 'hideTipWindow$', function () {
if (this.tipWindow != null ) {
if (this.window != null ) {
this.window.removeMouseListener$java_awt_event_MouseListener(this);
this.window=null;
}var win=this.tipWindow;
$I$(8).dispatch$O$I$I(function() {win.hide$()} ||null, 10, 0);
this.tipWindow=null;
this.tipShowing=false;
this.tip=null;
this.insideTimer.stop$();
this.enterTimer.stop$();
this.exitTimer.stop$();
}});

Clazz.newMeth(C$, 'sharedInstance$', function () {
var value=$I$(5).appContextGet$O(C$.TOOL_TIP_MANAGER_KEY);
if (Clazz.instanceOf(value, "javax.swing.ToolTipManager")) {
return value;
}var manager=Clazz.new_(C$);
$I$(5).appContextPut$O$O(C$.TOOL_TIP_MANAGER_KEY, manager);
return manager;
}, 1);

Clazz.newMeth(C$, 'registerComponent$javax_swing_JComponent', function (component) {
component.removeMouseListener$java_awt_event_MouseListener(this);
component.addMouseListener$java_awt_event_MouseListener(this);
component.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.moveBeforeEnterListener);
component.addMouseMotionListener$java_awt_event_MouseMotionListener(this.moveBeforeEnterListener);
});

Clazz.newMeth(C$, 'unregisterComponent$javax_swing_JComponent', function (component) {
component.removeMouseListener$java_awt_event_MouseListener(this);
component.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.moveBeforeEnterListener);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (event) {
p$1.initiateToolTip$java_awt_event_MouseEvent.apply(this, [event]);
});

Clazz.newMeth(C$, 'initiateToolTip$java_awt_event_MouseEvent', function (event) {
this.hasFired=false;
if (event.getSource$() === this.window ) {
return;
}var component=event.getSource$();
component.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.moveBeforeEnterListener);
var location=event.getPoint$();
if (location.x < 0 || location.x >= component.getWidth$()  || location.y < 0  || location.y >= component.getHeight$() ) {
return;
}if (this.insideComponent != null ) {
this.enterTimer.stop$();
}component.removeMouseMotionListener$java_awt_event_MouseMotionListener(this);
component.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
var sameComponent=(this.insideComponent === component );
this.insideComponent=component;
if (this.tipWindow != null ) {
this.mouseEvent=event;
if (this.showImmediately) {
var newToolTipText=component.getToolTipText$java_awt_event_MouseEvent(event);
var newPreferredLocation=component.getToolTipLocation$java_awt_event_MouseEvent(event);
var sameLoc=(this.preferredLocation != null ) ? this.preferredLocation.equals$O(newPreferredLocation) : (newPreferredLocation == null );
if (!sameComponent || !this.toolTipText.equals$O(newToolTipText) || !sameLoc  ) {
this.toolTipText=newToolTipText;
this.preferredLocation=newPreferredLocation;
this.showTipWindow$();
}} else {
this.useCurrentMenu=true;
this.enterTimer.start$();
}}}, p$1);

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (event) {
this.hasFired=true;
var shouldHide=true;
if (this.insideComponent == null ) {
}if (this.window != null  && event.getSource$() === this.window  ) {
var insideComponentWindow=this.insideComponent.getTopLevelAncestor$();
if (insideComponentWindow != null ) {
var location=event.getPoint$();
$I$(5).convertPointToScreen$java_awt_Point$java_awt_Component(location, this.window);
location.x-=insideComponentWindow.getX$();
location.y-=insideComponentWindow.getY$();
location=$I$(5).convertPoint$java_awt_Component$java_awt_Point$java_awt_Component(null, location, this.insideComponent);
if (location.x >= 0 && location.x < this.insideComponent.getWidth$()  && location.y >= 0  && location.y < this.insideComponent.getHeight$() ) {
shouldHide=false;
} else {
shouldHide=true;
}}} else if (event.getSource$() === this.insideComponent  && this.tipWindow != null  ) {
var win=$I$(5).getWindowAncestor$java_awt_Component(this.insideComponent);
if (win != null ) {
var location=$I$(5).convertPoint$java_awt_Component$java_awt_Point$java_awt_Component(this.insideComponent, event.getPoint$(), win);
var bounds=this.insideComponent.getTopLevelAncestor$().getBounds$();
location.x+=bounds.x;
location.y+=bounds.y;
var loc=Clazz.new_($I$(3).c$$I$I,[0, 0]);
$I$(5).convertPointToScreen$java_awt_Point$java_awt_Component(loc, this.tip);
bounds.x=loc.x;
bounds.y=loc.y;
bounds.width=this.tip.getWidth$();
bounds.height=this.tip.getHeight$();
if (location.x >= bounds.x && location.x < (bounds.x + bounds.width)  && location.y >= bounds.y  && location.y < (bounds.y + bounds.height) ) {
shouldHide=false;
} else {
shouldHide=true;
}}}if (shouldHide) {
this.enterTimer.stop$();
if (this.insideComponent != null ) {
this.insideComponent.removeMouseMotionListener$java_awt_event_MouseMotionListener(this);
}this.insideComponent=null;
this.toolTipText=null;
this.mouseEvent=null;
this.hideTipWindow$();
this.exitTimer.restart$();
}});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (event) {
this.hideTipWindow$();
this.insideTimer.stop$();
this.exitTimer.stop$();
this.enterTimer.stop$();
this.showImmediately=false;
this.insideComponent=null;
this.mouseEvent=null;
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (event) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (event) {
if (this.tipShowing) {
p$1.checkForTipChange$java_awt_event_MouseEvent.apply(this, [event]);
} else if (this.showImmediately) {
var component=event.getSource$();
this.toolTipText=component.getToolTipText$java_awt_event_MouseEvent(event);
if (this.toolTipText != null ) {
this.preferredLocation=component.getToolTipLocation$java_awt_event_MouseEvent(event);
this.mouseEvent=event;
this.insideComponent=component;
this.exitTimer.stop$();
this.showTipWindow$();
}} else {
this.hideTipWindow$();
if (this.hasFired) return;
this.insideComponent=event.getSource$();
this.mouseEvent=event;
this.toolTipText=null;
this.enterTimer.restart$();
}});

Clazz.newMeth(C$, 'checkForTipChange$java_awt_event_MouseEvent', function (event) {
var component=event.getSource$();
var newText=component.getToolTipText$java_awt_event_MouseEvent(event);
var newPreferredLocation=component.getToolTipLocation$java_awt_event_MouseEvent(event);
this.showImmediately=false;
this.hideTipWindow$();
if (newText != null  || newPreferredLocation != null  ) {
this.mouseEvent=event;
if ((newText == null  || newText.equals$O(this.toolTipText) ) && (newPreferredLocation == null  || newPreferredLocation.equals$O(this.preferredLocation) ) ) {
if (newText != null ) {
this.enterTimer.restart$();
return;
}} else {
this.toolTipText=newText;
this.preferredLocation=newPreferredLocation;
if (this.showImmediately) {
this.hideTipWindow$();
this.showTipWindow$();
this.exitTimer.stop$();
} else {
this.enterTimer.restart$();
}return;
}this.toolTipText=null;
this.preferredLocation=null;
this.mouseEvent=null;
this.insideComponent=null;
this.hideTipWindow$();
this.enterTimer.stop$();
this.insideTimer.stop$();
this.exitTimer.restart$();
}}, p$1);

Clazz.newMeth(C$, 'frameForComponent$java_awt_Component', function (component) {
while (!(Clazz.instanceOf(component, "java.awt.JSFrame"))){
component=component.getParent$();
}
return component;
}, 1);
;
(function(){var C$=Clazz.newClass(P$.ToolTipManager, "MoveBeforeEnterListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.MouseMotionAdapter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
p$1.initiateToolTip$java_awt_event_MouseEvent.apply(this.this$0, [e]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
