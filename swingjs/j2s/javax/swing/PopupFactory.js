(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.SwingUtilities','java.awt.JSComponent','java.util.HashMap','javax.swing.Popup','java.util.ArrayList','java.awt.event.WindowAdapter','java.awt.Toolkit','java.awt.Rectangle','java.awt.Insets','javax.swing.JLayeredPane','javax.swing.JPanel','java.awt.BorderLayout',['javax.swing.PopupFactory','.MediumWeightPopup','.MediumWeightComponent'],'javax.swing.JRootPane','javax.swing.PopupFactory','javax.swing.ClientPropertyKey','Boolean',['javax.swing.PopupFactory','.LightWeightPopup'],['javax.swing.PopupFactory','.MediumWeightPopup'],['javax.swing.PopupFactory','.HeavyWeightPopup']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PopupFactory", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.popupCount=0;
C$.SharedInstanceKey=null;
C$.lastToolTipPopUp=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.SharedInstanceKey= Clazz.new_();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.popupType=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.popupType=0;
}, 1);

Clazz.newMeth(C$, 'setSharedInstance$javax_swing_PopupFactory', function (factory) {
if (factory == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["PopupFactory can not be null"]);
}$I$(1).appContextPut$O$O(C$.SharedInstanceKey, factory);
}, 1);

Clazz.newMeth(C$, 'getSharedInstance$', function () {
var factory=$I$(1).appContextGet$O(C$.SharedInstanceKey);
if (factory == null ) {
factory=Clazz.new_(C$);
C$.setSharedInstance$javax_swing_PopupFactory(factory);
}return factory;
}, 1);

Clazz.newMeth(C$, 'setPopupType$I', function (type) {
this.popupType=type;
});

Clazz.newMeth(C$, 'getPopupType$', function () {
return this.popupType;
});

Clazz.newMeth(C$, 'getPopup$java_awt_Component$java_awt_Component$I$I', function (owner, contents, x, y) {
if (contents == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Popup.getPopup must be passed non-null contents"]);
}var isToolTip=(Clazz.instanceOf(contents, "javax.swing.JToolTip"));
var popupType=p$1.getPopupType$java_awt_Component$java_awt_Component$I$I.apply(this, [owner, contents, x, y]);
var popup=p$1.getPopup$java_awt_Component$java_awt_Component$I$I$I.apply(this, [owner, contents, x, y, popupType]);
if (popup == null ) {
popup=p$1.getPopup$java_awt_Component$java_awt_Component$I$I$I.apply(this, [owner, contents, x, y, 2]);
}if (isToolTip && C$.lastToolTipPopUp != null  ) {
(popup.getComponent$())._canvas=(C$.lastToolTipPopUp.getComponent$())._canvas;
}C$.lastToolTipPopUp=popup;
return popup;
});

Clazz.newMeth(C$, 'getPopupType$java_awt_Component$java_awt_Component$I$I', function (owner, contents, ownerX, ownerY) {
var popupType=this.getPopupType$();
if (owner == null  || p$1.invokerInHeavyWeightPopup$java_awt_Component.apply(this, [owner]) ) {
popupType=2;
} else if (popupType == 0 && !(Clazz.instanceOf(contents, "javax.swing.JToolTip"))  && !(Clazz.instanceOf(contents, "javax.swing.JPopupMenu")) ) {
popupType=1;
}var c=owner;
while (c != null ){
if (Clazz.instanceOf(c, "javax.swing.JComponent")) {
if ((c).getClientProperty$O($I$(16).PopupFactory_FORCE_HEAVYWEIGHT_POPUP) === $I$(17).TRUE ) {
popupType=2;
break;
}}c=c.getParent$();
}
return popupType;
}, p$1);

Clazz.newMeth(C$, 'getPopup$java_awt_Component$java_awt_Component$I$I$I', function (owner, contents, ownerX, ownerY, popupType) {
switch (popupType) {
case 0:
return p$1.getLightWeightPopup$java_awt_Component$java_awt_Component$I$I.apply(this, [owner, contents, ownerX, ownerY]);
case 1:
return p$1.getMediumWeightPopup$java_awt_Component$java_awt_Component$I$I.apply(this, [owner, contents, ownerX, ownerY]);
case 2:
return p$1.getHeavyWeightPopup$java_awt_Component$java_awt_Component$I$I.apply(this, [owner, contents, ownerX, ownerY]);
}
return null;
}, p$1);

Clazz.newMeth(C$, 'getLightWeightPopup$java_awt_Component$java_awt_Component$I$I', function (owner, contents, ownerX, ownerY) {
return $I$(18).getLightWeightPopup$java_awt_Component$java_awt_Component$I$I(owner, contents, ownerX, ownerY);
}, p$1);

Clazz.newMeth(C$, 'getMediumWeightPopup$java_awt_Component$java_awt_Component$I$I', function (owner, contents, ownerX, ownerY) {
return $I$(19).getMediumWeightPopup$java_awt_Component$java_awt_Component$I$I(owner, contents, ownerX, ownerY);
}, p$1);

Clazz.newMeth(C$, 'getHeavyWeightPopup$java_awt_Component$java_awt_Component$I$I', function (owner, contents, ownerX, ownerY) {
return $I$(20).getHeavyWeightPopup$java_awt_Component$java_awt_Component$I$I(owner, contents, ownerX, ownerY);
}, p$1);

Clazz.newMeth(C$, 'invokerInHeavyWeightPopup$java_awt_Component', function (i) {
if (i != null ) {
var parent;
for (parent=i.getParent$(); parent != null ; parent=parent.getParent$()) {
if ($I$(4).isHeavyWeight$java_awt_Container(parent)) {
return true;
}}
}return false;
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.PopupFactory, "HeavyWeightPopup", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.Popup');
C$.heavyWeightPopupCacheKey=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.heavyWeightPopupCacheKey= Clazz.new_();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getHeavyWeightPopup$java_awt_Component$java_awt_Component$I$I', function (owner, contents, ownerX, ownerY) {
var window=(owner != null ) ? $I$(1).getWindowAncestor$java_awt_Component(owner) : null;
var popup=null;
if (window != null ) {
popup=C$.getRecycledHeavyWeightPopup$java_awt_Window(window);
}var focusPopup=false;
if (contents != null  && contents.isFocusable$() ) {
if (Clazz.instanceOf(contents, "javax.swing.JPopupMenu")) {
var jpm=contents;
var popComps=$I$(2).getChildArray$java_awt_Container(jpm);
for (var i=0, n=jpm.getComponentCount$(); i < n; i++) {
if (!(Clazz.instanceOf(popComps[i], "javax.swing.MenuElement")) && !(Clazz.instanceOf(popComps[i], "javax.swing.JSeparator")) ) {
focusPopup=true;
break;
}}
}}if (popup == null ) {
popup=Clazz.new_(C$);
}popup.reset$java_awt_Component$java_awt_Component$I$I(owner, contents, ownerX, ownerY);
if (focusPopup) {
var wnd=popup.getComponent$();
wnd.setFocusableWindowState$Z(true);
wnd.setName$S("###focusableSwingPopup###");
}return popup;
}, 1);

Clazz.newMeth(C$, 'getRecycledHeavyWeightPopup$java_awt_Window', function (w) {
{
var cache;
var heavyPopupCache=C$.getHeavyWeightPopupCache$();
if (heavyPopupCache.containsKey$O(w)) {
cache=heavyPopupCache.get$O(w);
} else {
return null;
}if ((cache.size$()) > 0) {
var r=cache.get$I(0);
cache.remove$I(0);
return r;
}return null;
}}, 1);

Clazz.newMeth(C$, 'getHeavyWeightPopupCache$', function () {
{
var cache=$I$(1).appContextGet$O(C$.heavyWeightPopupCacheKey);
if (cache == null ) {
cache=Clazz.new_($I$(3).c$$I,[2]);
$I$(1).appContextPut$O$O(C$.heavyWeightPopupCacheKey, cache);
}return cache;
}}, 1);

Clazz.newMeth(C$, 'recycleHeavyWeightPopup$javax_swing_PopupFactory_HeavyWeightPopup', function (popup) {
{
var cache;
var window=$I$(1).getWindowAncestor$java_awt_Component(popup.getComponent$());
var heavyPopupCache=C$.getHeavyWeightPopupCache$();
if ($I$(4).isDefaultFrame$O(window) || !(window).isVisible$() ) {
popup._dispose$();
return;
} else if (heavyPopupCache.containsKey$O(window)) {
cache=heavyPopupCache.get$O(window);
} else {
cache=Clazz.new_($I$(5));
heavyPopupCache.put$TK$TV(window, cache);
var w=window;
w.addWindowListener$java_awt_event_WindowListener(((P$.PopupFactory$HeavyWeightPopup$1||
(function(){var C$=Clazz.newClass(P$, "PopupFactory$HeavyWeightPopup$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (e) {
var popups;
{
var heavyPopupCache2=P$.PopupFactory.HeavyWeightPopup.getHeavyWeightPopupCache$();
popups=heavyPopupCache2.remove$O(this.$finals$.w);
}if (popups != null ) {
for (var counter=popups.size$() - 1; counter >= 0; counter--) {
(popups.get$I(counter))._dispose$();
}
}});
})()
), Clazz.new_($I$(6), [this, {w: w}],P$.PopupFactory$HeavyWeightPopup$1)));
}if (cache.size$() < 5) {
cache.add$TE(popup);
} else {
popup._dispose$();
}}}, 1);

Clazz.newMeth(C$, 'hide$', function () {
C$.superclazz.prototype.hide$.apply(this, []);
C$.recycleHeavyWeightPopup$javax_swing_PopupFactory_HeavyWeightPopup(this);
});

Clazz.newMeth(C$, 'dispose$', function () {
});

Clazz.newMeth(C$, '_dispose$', function () {
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.PopupFactory, "ContainerPopup", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.Popup');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.owner=null;
this.x=0;
this.y=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hide$', function () {
var component=this.getComponent$();
if (component != null ) {
var parent=component.getParent$();
if (parent != null ) {
var bounds=component.getBounds$();
parent.remove$java_awt_Component(component);
parent.repaint$I$I$I$I(bounds.x, bounds.y, bounds.width, bounds.height);
}}this.owner=null;
});

Clazz.newMeth(C$, 'pack$', function () {
var component=this.getComponent$();
if (component != null ) {
component.setSize$java_awt_Dimension(component.getPreferredSize$());
}});

Clazz.newMeth(C$, 'reset$java_awt_Component$java_awt_Component$I$I', function (owner, contents, ownerX, ownerY) {
if ((Clazz.instanceOf(owner, "javax.swing.JFrame")) || (Clazz.instanceOf(owner, "javax.swing.JDialog")) || (Clazz.instanceOf(owner, "javax.swing.JWindow"))  ) {
owner=(owner).getLayeredPane$();
}C$.superclazz.prototype.reset$java_awt_Component$java_awt_Component$I$I.apply(this, [owner, contents, ownerX, ownerY]);
this.x=ownerX;
this.y=ownerY;
this.owner=owner;
});

Clazz.newMeth(C$, 'overlappedByOwnedWindow$', function () {
var component=this.getComponent$();
if (this.owner != null  && component != null  ) {
var w=$I$(1).getWindowAncestor$java_awt_Component(this.owner);
if (w == null ) {
return false;
}var ownedWindows=w.getOwnedWindows$();
if (ownedWindows != null ) {
var bnd=component.getBounds$();
for (var i=0; i < ownedWindows.length; i++) {
var owned=ownedWindows[i];
if (owned.isVisible$() && bnd.intersects$java_awt_Rectangle(owned.getBounds$()) ) {
return true;
}}
}}return false;
});

Clazz.newMeth(C$, 'fitsOnScreen$', function () {
var component=this.getComponent$();
if (this.owner != null  && component != null  ) {
var parent;
var width=component.getWidth$();
var height=component.getHeight$();
for (parent=this.owner.getParent$(); parent != null ; parent=parent.getParent$()) {
if (Clazz.instanceOf(parent, "javax.swing.JFrame") || Clazz.instanceOf(parent, "javax.swing.JDialog") || Clazz.instanceOf(parent, "javax.swing.JWindow")  ) {
var r=parent.getBounds$();
var i=parent.getInsets$();
r.x+=i.left;
r.y+=i.top;
r.width-=(i.left + i.right);
r.height-=(i.top + i.bottom);
var gc=parent.getGraphicsConfiguration$();
var popupArea=this.getContainerPopupArea$java_awt_GraphicsConfiguration(gc);
return r.intersection$java_awt_Rectangle(popupArea).contains$I$I$I$I(this.x, this.y, width, height);
} else if (Clazz.instanceOf(parent, "javax.swing.JApplet")) {
var r=parent.getBounds$();
var p=parent.getLocationOnScreen$();
r.x=p.x;
r.y=p.y;
return r.contains$I$I$I$I(this.x, this.y, width, height);
} else if (Clazz.instanceOf(parent, "java.awt.Window")) {
break;
}}
}return false;
});

Clazz.newMeth(C$, 'getContainerPopupArea$java_awt_GraphicsConfiguration', function (gc) {
var screenBounds;
var toolkit=$I$(7).getDefaultToolkit$();
var insets;
if (gc != null ) {
screenBounds=gc.getBounds$();
insets=toolkit.getScreenInsets$java_awt_GraphicsConfiguration(gc);
} else {
screenBounds=Clazz.new_($I$(8).c$$java_awt_Dimension,[toolkit.getScreenSize$()]);
insets=Clazz.new_($I$(9).c$$I$I$I$I,[0, 0, 0, 0]);
}screenBounds.x+=insets.left;
screenBounds.y+=insets.top;
screenBounds.width-=(insets.left + insets.right);
screenBounds.height-=(insets.top + insets.bottom);
return screenBounds;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.PopupFactory, "LightWeightPopup", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.PopupFactory','.ContainerPopup']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getLightWeightPopup$java_awt_Component$java_awt_Component$I$I', function (owner, contents, ownerX, ownerY) {
var popup=null;
if (popup == null ) {
popup=Clazz.new_(C$);
}popup.reset$java_awt_Component$java_awt_Component$I$I(owner, contents, ownerX, ownerY);
if (!popup.fitsOnScreen$() || popup.overlappedByOwnedWindow$() ) {
popup.hide$();
return null;
}return popup;
}, 1);

Clazz.newMeth(C$, 'hide$', function () {
C$.superclazz.prototype.hide$.apply(this, []);
var component=this.getComponent$();
component.removeAll$();
});

Clazz.newMeth(C$, 'show$', function () {
var parent=null;
if (this.owner != null ) {
parent=(Clazz.instanceOf(this.owner, "java.awt.Container") ? this.owner : this.owner.getParent$());
}for (var p=parent; p != null ; p=p.getParent$()) {
if (Clazz.instanceOf(p, "javax.swing.JRootPane")) {
parent=(p).getLayeredPane$();
} else if (Clazz.instanceOf(p, "java.awt.Window")) {
if (parent == null ) {
parent=p;
}break;
} else if (Clazz.instanceOf(p, "javax.swing.JApplet")) {
break;
}}
var p=$I$(1).convertScreenLocationToParent$java_awt_Container$I$I(parent, this.x, this.y);
var component=this.getComponent$();
component.setLocation$I$I(p.x, p.y);
if (Clazz.instanceOf(parent, "javax.swing.JLayeredPane")) {
(parent).add$java_awt_Component$O$I(component, $I$(10).POPUP_LAYER, 0);
} else {
parent.add$java_awt_Component(component);
}});

Clazz.newMeth(C$, 'createComponent$java_awt_Component', function (owner) {
var component=Clazz.new_($I$(11).c$$java_awt_LayoutManager$Z,[Clazz.new_($I$(12)), true]);
component.setOpaque$Z(true);
return component;
});

Clazz.newMeth(C$, 'reset$java_awt_Component$java_awt_Component$I$I', function (owner, contents, ownerX, ownerY) {
C$.superclazz.prototype.reset$java_awt_Component$java_awt_Component$I$I.apply(this, [owner, contents, ownerX, ownerY]);
var component=this.getComponent$();
component.setOpaque$Z(contents.isOpaque$());
component.setLocation$I$I(ownerX, ownerY);
component.add$java_awt_Component$O(contents, "Center");
contents.invalidate$();
this.pack$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.PopupFactory, "MediumWeightPopup", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.PopupFactory','.ContainerPopup']);
C$.mediumWeightPopupCacheKey=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.mediumWeightPopupCacheKey= Clazz.new_();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rootPane=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getMediumWeightPopup$java_awt_Component$java_awt_Component$I$I', function (owner, contents, ownerX, ownerY) {
var popup=C$.getRecycledMediumWeightPopup$();
if (popup == null ) {
popup=Clazz.new_(C$);
}popup.reset$java_awt_Component$java_awt_Component$I$I(owner, contents, ownerX, ownerY);
if (!popup.fitsOnScreen$() || popup.overlappedByOwnedWindow$() ) {
popup.hide$();
return null;
}return popup;
}, 1);

Clazz.newMeth(C$, 'getMediumWeightPopupCache$', function () {
var cache=$I$(1).appContextGet$O(C$.mediumWeightPopupCacheKey);
if (cache == null ) {
cache=Clazz.new_($I$(5));
$I$(1).appContextPut$O$O(C$.mediumWeightPopupCacheKey, cache);
}return cache;
}, 1);

Clazz.newMeth(C$, 'recycleMediumWeightPopup$javax_swing_PopupFactory_MediumWeightPopup', function (popup) {
{
var mediumPopupCache=C$.getMediumWeightPopupCache$();
if (mediumPopupCache.size$() < 5) {
mediumPopupCache.add$TE(popup);
}}}, 1);

Clazz.newMeth(C$, 'getRecycledMediumWeightPopup$', function () {
{
var mediumPopupCache=C$.getMediumWeightPopupCache$();
if ((mediumPopupCache.size$()) > 0) {
var r=mediumPopupCache.get$I(0);
mediumPopupCache.remove$I(0);
return r;
}return null;
}}, 1);

Clazz.newMeth(C$, 'hide$', function () {
C$.superclazz.prototype.hide$.apply(this, []);
this.rootPane.getContentPane$().removeAll$();
C$.recycleMediumWeightPopup$javax_swing_PopupFactory_MediumWeightPopup(this);
});

Clazz.newMeth(C$, 'show$', function () {
var component=this.getComponent$();
var parent=null;
if (this.owner != null ) {
parent=this.owner.getParent$();
}while (parent != null  && !parent.isWindowOrJSApplet$() ){
parent=parent.getParent$();
}
if (Clazz.instanceOf(parent, "javax.swing.RootPaneContainer")) {
parent=(parent).getLayeredPane$();
var p=$I$(1).convertScreenLocationToParent$java_awt_Container$I$I(parent, this.x, this.y);
component.setVisible$Z(false);
component.setLocation$I$I(p.x, p.y);
(parent).add$java_awt_Component$O$I(component, $I$(10).POPUP_LAYER, 0);
} else {
var p=$I$(1).convertScreenLocationToParent$java_awt_Container$I$I(parent, this.x, this.y);
component.setLocation$I$I(p.x, p.y);
component.setVisible$Z(false);
parent.add$java_awt_Component(component);
}component.setVisible$Z(true);
});

Clazz.newMeth(C$, 'createComponent$java_awt_Component', function (owner) {
var component=Clazz.new_($I$(13));
this.rootPane=Clazz.new_($I$(14).c$$S$Z$java_awt_Container,["_Popup" + (++$I$(15).popupCount), false, component]);
this.rootPane.setFrameViewer$swingjs_JSFrameViewer((owner).getFrameViewer$());
this.rootPane.setOpaque$Z(true);
component.add$java_awt_Component$O(this.rootPane, "Center");
return component;
});

Clazz.newMeth(C$, 'reset$java_awt_Component$java_awt_Component$I$I', function (owner, contents, ownerX, ownerY) {
C$.superclazz.prototype.reset$java_awt_Component$java_awt_Component$I$I.apply(this, [owner, contents, ownerX, ownerY]);
var component=this.getComponent$();
component.setLocation$I$I(ownerX, ownerY);
this.rootPane.getContentPane$().add$java_awt_Component$O(contents, "Center");
contents.invalidate$();
component.validate$();
this.pack$();
});
;
(function(){var C$=Clazz.newClass(P$.PopupFactory.MediumWeightPopup, "MediumWeightComponent", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.Panel', 'javax.swing.SwingHeavyWeight');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(12))]);
C$.$init$.apply(this);
}, 1);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-18 23:03:42 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
