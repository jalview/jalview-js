(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},p$2={},I$=[[0,'java.util.ArrayList','java.security.AccessController','java.awt.Toolkit','javax.swing.SwingUtilities','java.awt.Point',['javax.swing.JLayer','.LayerEventController'],'javax.swing.plaf.LayerUI','sun.awt.AWTAccessor','java.awt.Rectangle',['javax.swing.JLayer','.DefaultLayerGlassPane']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JLayer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent', ['javax.swing.Scrollable', 'java.beans.PropertyChangeListener']);
C$.eventController=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.eventController=Clazz.new_($I$(6));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.view=null;
this.layerUI=null;
this.glassPane=null;
this.$eventMask=0;
this.isPainting=false;
this.isPaintingImmediately=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$TV.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$TV', function (view) {
C$.c$$TV$javax_swing_plaf_LayerUI.apply(this, [view, Clazz.new_($I$(7))]);
}, 1);

Clazz.newMeth(C$, 'c$$TV$javax_swing_plaf_LayerUI', function (view, ui) {
Clazz.super_(C$, this,1);
this.setGlassPane$javax_swing_JPanel(this.createGlassPane$());
this.setView$TV(view);
this.setUI$javax_swing_plaf_LayerUI(ui);
}, 1);

Clazz.newMeth(C$, 'getView$', function () {
return this.view;
});

Clazz.newMeth(C$, 'setView$TV', function (view) {
var oldView=this.getView$();
if (oldView != null ) {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [oldView]);
}if (view != null ) {
C$.superclazz.prototype.addImpl$java_awt_Component$O$I.apply(this, [view, null, this.getComponentCount$()]);
}this.view=view;
this.firePropertyChange$S$O$O("view", oldView, view);
this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'setUI$javax_swing_plaf_LayerUI', function (ui) {
this.layerUI=ui;
C$.superclazz.prototype.setUI$javax_swing_plaf_ComponentUI.apply(this, [ui]);
});

Clazz.newMeth(C$, 'getUI$', function () {
return this.layerUI;
});

Clazz.newMeth(C$, 'getGlassPane$', function () {
return this.glassPane;
});

Clazz.newMeth(C$, 'setGlassPane$javax_swing_JPanel', function (glassPane) {
var oldGlassPane=this.getGlassPane$();
var isGlassPaneVisible=false;
if (oldGlassPane != null ) {
isGlassPaneVisible=oldGlassPane.isVisible$();
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [oldGlassPane]);
}if (glassPane != null ) {
$I$(8).getComponentAccessor$().setMixingCutoutShape$java_awt_Component$java_awt_Shape(glassPane, Clazz.new_($I$(9)));
glassPane.setVisible$Z(isGlassPaneVisible);
C$.superclazz.prototype.addImpl$java_awt_Component$O$I.apply(this, [glassPane, null, 0]);
}this.glassPane=glassPane;
this.firePropertyChange$S$O$O("glassPane", oldGlassPane, glassPane);
this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'createGlassPane$', function () {
return Clazz.new_($I$(10));
});

Clazz.newMeth(C$, 'setLayout$java_awt_LayoutManager', function (mgr) {
if (mgr != null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["JLayer.setLayout() not supported"]);
}});

Clazz.newMeth(C$, 'setBorder$javax_swing_border_Border', function (border) {
if (border != null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["JLayer.setBorder() not supported"]);
}});

Clazz.newMeth(C$, 'addImpl$java_awt_Component$O$I', function (comp, constraints, index) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Adding components to JLayer is not supported, use setView() or setGlassPane() instead"]);
});

Clazz.newMeth(C$, 'remove$java_awt_Component', function (comp) {
if (comp == null ) {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [comp]);
} else if (comp === this.getView$() ) {
this.setView$TV(null);
} else if (comp === this.getGlassPane$() ) {
this.setGlassPane$javax_swing_JPanel(null);
} else {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [comp]);
}});

Clazz.newMeth(C$, 'removeAll$', function () {
if (this.view != null ) {
this.setView$TV(null);
}if (this.glassPane != null ) {
this.setGlassPane$javax_swing_JPanel(null);
}});

Clazz.newMeth(C$, 'isPaintingOrigin$', function () {
return true;
});

Clazz.newMeth(C$, 'paintImmediately$I$I$I$I', function (x, y, w, h) {
if (!this.isPaintingImmediately && this.getUI$() != null  ) {
this.isPaintingImmediately=true;
try {
this.getUI$().paintImmediately$I$I$I$I$javax_swing_JLayer(x, y, w, h, this);
} finally {
this.isPaintingImmediately=false;
}
} else {
C$.superclazz.prototype.paintImmediately$I$I$I$I.apply(this, [x, y, w, h]);
}});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
if (!this.isPainting) {
this.isPainting=true;
try {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
} finally {
this.isPainting=false;
}
} else {
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
}});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
});

Clazz.newMeth(C$, 'isOptimizedDrawingEnabled$', function () {
return false;
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
if (this.getUI$() != null ) {
this.getUI$().applyPropertyChange$java_beans_PropertyChangeEvent$javax_swing_JLayer(evt, this);
}});

Clazz.newMeth(C$, 'setLayerEventMask$J', function (layerEventMask) {
var oldEventMask=this.getLayerEventMask$();
this.$eventMask=layerEventMask;
this.firePropertyChange$S$J$J("layerEventMask", oldEventMask, layerEventMask);
if (layerEventMask != oldEventMask) {
this.disableEvents$J(oldEventMask);
this.enableEvents$J(this.$eventMask);
if (this.isDisplayable$()) {
p$1.updateAWTEventListener$J$J.apply(C$.eventController, [oldEventMask, layerEventMask]);
}}});

Clazz.newMeth(C$, 'getLayerEventMask$', function () {
return this.$eventMask;
});

Clazz.newMeth(C$, 'updateUI$', function () {
if (this.getUI$() != null ) {
this.getUI$().updateUI$javax_swing_JLayer(this);
}});

Clazz.newMeth(C$, 'getPreferredScrollableViewportSize$', function () {
if (Clazz.instanceOf(this.getView$(), "javax.swing.Scrollable")) {
return (this.getView$()).getPreferredScrollableViewportSize$();
}return this.getPreferredSize$();
});

Clazz.newMeth(C$, 'getScrollableBlockIncrement$java_awt_Rectangle$I$I', function (visibleRect, orientation, direction) {
if (Clazz.instanceOf(this.getView$(), "javax.swing.Scrollable")) {
return (this.getView$()).getScrollableBlockIncrement$java_awt_Rectangle$I$I(visibleRect, orientation, direction);
}return (orientation == 1) ? visibleRect.height : visibleRect.width;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportHeight$', function () {
if (Clazz.instanceOf(this.getView$(), "javax.swing.Scrollable")) {
return (this.getView$()).getScrollableTracksViewportHeight$();
}return false;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportWidth$', function () {
if (Clazz.instanceOf(this.getView$(), "javax.swing.Scrollable")) {
return (this.getView$()).getScrollableTracksViewportWidth$();
}return false;
});

Clazz.newMeth(C$, 'getScrollableUnitIncrement$java_awt_Rectangle$I$I', function (visibleRect, orientation, direction) {
if (Clazz.instanceOf(this.getView$(), "javax.swing.Scrollable")) {
return (this.getView$()).getScrollableUnitIncrement$java_awt_Rectangle$I$I(visibleRect, orientation, direction);
}return 1;
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
s.defaultReadObject$();
if (this.layerUI != null ) {
this.setUI$javax_swing_plaf_LayerUI(this.layerUI);
}if (this.$eventMask != 0) {
p$1.updateAWTEventListener$J$J.apply(C$.eventController, [0, this.$eventMask]);
}}, p$2);

Clazz.newMeth(C$, 'addNotify$', function () {
C$.superclazz.prototype.addNotify$.apply(this, []);
p$1.updateAWTEventListener$J$J.apply(C$.eventController, [0, this.$eventMask]);
});

Clazz.newMeth(C$, 'removeNotify$', function () {
C$.superclazz.prototype.removeNotify$.apply(this, []);
p$1.updateAWTEventListener$J$J.apply(C$.eventController, [this.$eventMask, 0]);
});

Clazz.newMeth(C$, 'doLayout$', function () {
if (this.getUI$() != null ) {
this.getUI$().doLayout$javax_swing_JLayer(this);
}});
;
(function(){var C$=Clazz.newClass(P$.JLayer, "LayerEventController", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.awt.event.AWTEventListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.layerMaskList=null;
this.currentEventMask=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.layerMaskList=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, ['eventDispatched$java_awt_AWTEvent','eventDispatched$'], function (event) {
var source=event.getSource$();
if (Clazz.instanceOf(source, "java.awt.Component")) {
var component=source;
while (component != null ){
if (Clazz.instanceOf(component, "javax.swing.JLayer")) {
var l=component;
var ui=l.getUI$();
if (ui != null  && p$1.isEventEnabled$J$I.apply(this, [l.getLayerEventMask$(), event.getID$()])  && (!(Clazz.instanceOf(event, "java.awt.event.InputEvent")) || !(event).isConsumed$() ) ) {
ui.eventDispatched$java_awt_AWTEvent$javax_swing_JLayer(event, l);
}}component=component.getParent$();
}
}});

Clazz.newMeth(C$, 'updateAWTEventListener$J$J', function (oldEventMask, newEventMask) {
if (oldEventMask != 0) {
this.layerMaskList.remove$O(new Long(oldEventMask));
}if (newEventMask != 0) {
this.layerMaskList.add$TE(new Long(newEventMask));
}var combinedMask=0;
for (var mask, $mask = this.layerMaskList.iterator$(); $mask.hasNext$()&&((mask=($mask.next$())),1);) {
combinedMask=(combinedMask|((mask).longValue$())|0);
}
combinedMask&=231487;
if (combinedMask == 0) {
p$1.removeAWTEventListener.apply(this, []);
} else if (p$1.getCurrentEventMask.apply(this, []) != combinedMask) {
p$1.removeAWTEventListener.apply(this, []);
p$1.addAWTEventListener$J.apply(this, [combinedMask]);
}this.currentEventMask=combinedMask;
}, p$1);

Clazz.newMeth(C$, 'getCurrentEventMask', function () {
return this.currentEventMask;
}, p$1);

Clazz.newMeth(C$, 'addAWTEventListener$J', function (eventMask) {
$I$(2).doPrivileged$java_security_PrivilegedAction(((P$.JLayer$LayerEventController$1||
(function(){var C$=Clazz.newClass(P$, "JLayer$LayerEventController$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(3).getDefaultToolkit$().addAWTEventListener$java_awt_event_AWTEventListener$J(this.b$['javax.swing.JLayer.LayerEventController'], this.$finals$.eventMask);
return null;
});
})()
), Clazz.new_(P$.JLayer$LayerEventController$1.$init$, [this, {eventMask: eventMask}])));
}, p$1);

Clazz.newMeth(C$, 'removeAWTEventListener', function () {
$I$(2).doPrivileged$java_security_PrivilegedAction(((P$.JLayer$LayerEventController$2||
(function(){var C$=Clazz.newClass(P$, "JLayer$LayerEventController$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(3).getDefaultToolkit$().removeAWTEventListener$java_awt_event_AWTEventListener(this.b$['javax.swing.JLayer.LayerEventController']);
return null;
});
})()
), Clazz.new_(P$.JLayer$LayerEventController$2.$init$, [this, null])));
}, p$1);

Clazz.newMeth(C$, 'isEventEnabled$J$I', function (eventMask, id) {
return (((eventMask & 1) != 0 && id >= 100  && id <= 103 ) || ((eventMask & 2) != 0 && id >= 300  && id <= 301 ) || ((eventMask & 4) != 0 && id >= 1004  && id <= 1005 ) || ((eventMask & 8) != 0 && id >= 400  && id <= 402 ) || ((eventMask & 131072) != 0 && id == 507 ) || ((eventMask & 32) != 0 && (id == 503 || id == 506 ) ) || ((eventMask & 16) != 0 && id != 503  && id != 506  && id != 507  && id >= 500  && id <= 507 ) || ((eventMask & 2048) != 0 && id >= 1100  && id <= 1101 ) || ((eventMask & 32768) != 0 && id == 1400 ) || ((eventMask & 65536) != 0 && (id == 1401 || id == 1402 ) )  );
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JLayer, "DefaultLayerGlassPane", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setOpaque$Z(false);
}, 1);

Clazz.newMeth(C$, 'contains$I$I', function (x, y) {
for (var i=0; i < this.getComponentCount$(); i++) {
var c=this.getComponent$I(i);
var point=$I$(4).convertPoint$java_awt_Component$java_awt_Point$java_awt_Component(this, Clazz.new_($I$(5).c$$I$I,[x, y]), c);
if (c.isVisible$() && c.contains$java_awt_Point(point) ) {
return true;
}}
if (this.getMouseListeners$().length == 0 && this.getMouseMotionListeners$().length == 0  && this.getMouseWheelListeners$().length == 0  && !this.isCursorSet$() ) {
return false;
}return C$.superclazz.prototype.contains$I$I.apply(this, [x, y]);
});
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
