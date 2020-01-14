(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.event.EventListenerList','javax.swing.event.AncestorListener','javax.swing.event.AncestorEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AncestorNotifier", null, null, ['java.awt.event.ComponentListener', 'java.beans.PropertyChangeListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.firstInvisibleAncestor=null;
this.listenerList=null;
this.root=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.listenerList=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JComponent', function (root) {
C$.$init$.apply(this);
this.root=root;
this.addListeners$java_awt_Component$Z(root, true);
}, 1);

Clazz.newMeth(C$, 'addAncestorListener$javax_swing_event_AncestorListener', function (l) {
this.listenerList.add$Class$TT(Clazz.getClass($I$(2),['ancestorAdded$javax_swing_event_AncestorEvent','ancestorMoved$javax_swing_event_AncestorEvent','ancestorRemoved$javax_swing_event_AncestorEvent']), l);
});

Clazz.newMeth(C$, 'removeAncestorListener$javax_swing_event_AncestorListener', function (l) {
this.listenerList.remove$Class$TT(Clazz.getClass($I$(2),['ancestorAdded$javax_swing_event_AncestorEvent','ancestorMoved$javax_swing_event_AncestorEvent','ancestorRemoved$javax_swing_event_AncestorEvent']), l);
});

Clazz.newMeth(C$, 'getAncestorListeners$', function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(2),['ancestorAdded$javax_swing_event_AncestorEvent','ancestorMoved$javax_swing_event_AncestorEvent','ancestorRemoved$javax_swing_event_AncestorEvent']));
});

Clazz.newMeth(C$, 'fireAncestorAdded$javax_swing_JComponent$I$java_awt_Container$java_awt_Container', function (source, id, ancestor, ancestorParent) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(2),['ancestorAdded$javax_swing_event_AncestorEvent','ancestorMoved$javax_swing_event_AncestorEvent','ancestorRemoved$javax_swing_event_AncestorEvent']) ) {
var ancestorEvent=Clazz.new_($I$(3).c$$javax_swing_JComponent$I$java_awt_Container$java_awt_Container,[source, id, ancestor, ancestorParent]);
(listeners[i + 1]).ancestorAdded$javax_swing_event_AncestorEvent(ancestorEvent);
}}
});

Clazz.newMeth(C$, 'fireAncestorRemoved$javax_swing_JComponent$I$java_awt_Container$java_awt_Container', function (source, id, ancestor, ancestorParent) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(2),['ancestorAdded$javax_swing_event_AncestorEvent','ancestorMoved$javax_swing_event_AncestorEvent','ancestorRemoved$javax_swing_event_AncestorEvent']) ) {
var ancestorEvent=Clazz.new_($I$(3).c$$javax_swing_JComponent$I$java_awt_Container$java_awt_Container,[source, id, ancestor, ancestorParent]);
(listeners[i + 1]).ancestorRemoved$javax_swing_event_AncestorEvent(ancestorEvent);
}}
});

Clazz.newMeth(C$, 'fireAncestorMoved$javax_swing_JComponent$I$java_awt_Container$java_awt_Container', function (source, id, ancestor, ancestorParent) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(2),['ancestorAdded$javax_swing_event_AncestorEvent','ancestorMoved$javax_swing_event_AncestorEvent','ancestorRemoved$javax_swing_event_AncestorEvent']) ) {
var ancestorEvent=Clazz.new_($I$(3).c$$javax_swing_JComponent$I$java_awt_Container$java_awt_Container,[source, id, ancestor, ancestorParent]);
(listeners[i + 1]).ancestorMoved$javax_swing_event_AncestorEvent(ancestorEvent);
}}
});

Clazz.newMeth(C$, 'removeAllListeners$', function () {
this.removeListeners$java_awt_Component(this.root);
});

Clazz.newMeth(C$, 'addListeners$java_awt_Component$Z', function (ancestor, addToFirst) {
var a;
this.firstInvisibleAncestor=null;
for (a=ancestor; this.firstInvisibleAncestor == null ; a=a.getParent$()) {
if (addToFirst || a !== ancestor  ) {
a.addComponentListener$java_awt_event_ComponentListener(this);
if (Clazz.instanceOf(a, "javax.swing.JComponent")) {
var jAncestor=a;
jAncestor.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
}}if (!a.isVisible$() || a.getParent$() == null   || a.isWindowOrJSApplet$() ) {
this.firstInvisibleAncestor=a;
}}
if (this.firstInvisibleAncestor != null  && this.firstInvisibleAncestor.isWindowOrJSApplet$()  && this.firstInvisibleAncestor.isVisible$() ) {
this.firstInvisibleAncestor=null;
}});

Clazz.newMeth(C$, 'removeListeners$java_awt_Component', function (ancestor) {
var a;
for (a=ancestor; a != null ; a=a.getParent$()) {
a.removeComponentListener$java_awt_event_ComponentListener(this);
if (Clazz.instanceOf(a, "javax.swing.JComponent")) {
var jAncestor=a;
jAncestor.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
}if (a === this.firstInvisibleAncestor  || a.isWindowOrJSApplet$() ) {
break;
}}
});

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent', function (e) {
});

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent', function (e) {
var source=e.getComponent$();
this.fireAncestorMoved$javax_swing_JComponent$I$java_awt_Container$java_awt_Container(this.root, 3, source, source.getParent$());
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent', function (e) {
var ancestor=e.getComponent$();
if (ancestor === this.firstInvisibleAncestor ) {
this.addListeners$java_awt_Component$Z(ancestor, false);
if (this.firstInvisibleAncestor == null ) {
this.fireAncestorAdded$javax_swing_JComponent$I$java_awt_Container$java_awt_Container(this.root, 1, ancestor, ancestor.getParent$());
}}});

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent', function (e) {
var ancestor=e.getComponent$();
var needsNotify=this.firstInvisibleAncestor == null ;
if (!ancestor.isWindowOrJSApplet$()) {
this.removeListeners$java_awt_Component(ancestor.getParent$());
}this.firstInvisibleAncestor=ancestor;
if (needsNotify) {
this.fireAncestorRemoved$javax_swing_JComponent$I$java_awt_Container$java_awt_Container(this.root, 2, ancestor, ancestor.getParent$());
}});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
var s=evt.getPropertyName$();
if (s != null  && (s.equals$O("parent") || s.equals$O("ancestor") ) ) {
var component=evt.getSource$();
if (evt.getNewValue$() != null ) {
if (component === this.firstInvisibleAncestor ) {
this.addListeners$java_awt_Component$Z(component, false);
if (this.firstInvisibleAncestor == null ) {
this.fireAncestorAdded$javax_swing_JComponent$I$java_awt_Container$java_awt_Container(this.root, 1, component, component.getParent$());
}}} else {
var needsNotify=this.firstInvisibleAncestor == null ;
var oldParent=evt.getOldValue$();
this.removeListeners$java_awt_Component(oldParent);
this.firstInvisibleAncestor=component;
if (needsNotify) {
this.fireAncestorRemoved$javax_swing_JComponent$I$java_awt_Container$java_awt_Container(this.root, 2, component, oldParent);
}}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
