(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.util.HashMap','sun.awt.NullComponentPeer','java.awt.Insets','swingjs.JSToolkit','java.awt.GraphicsEnvironment','java.awt.Cursor',['java.awt.Toolkit','.SelectiveAWTEventListener'],['java.awt.Toolkit','.ToolkitEventMulticaster'],'java.awt.AWTEventMulticaster','java.awt.event.AWTEventListener','java.awt.event.AWTEventListenerProxy','java.util.ArrayList','java.beans.PropertyChangeSupport']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Toolkit", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.lightweightMarker=null;
C$.toolkit=null;
C$.resources=null;
C$.enabledOnToolkitMask=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.desktopProperties=null;
this.desktopPropsSupport=null;
this.calls=null;
this.eventListener=null;
this.listener2SelectiveListener=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.desktopProperties=Clazz.new_($I$(1));
this.desktopPropsSupport=C$.createPropertyChangeSupport$java_awt_Toolkit(this);
this.calls=Clazz.array(Integer.TYPE, [32]);
this.eventListener=null;
this.listener2SelectiveListener=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'createComponent$java_awt_Component', function (target) {
if (C$.lightweightMarker == null ) {
C$.lightweightMarker=Clazz.new_($I$(2));
}return C$.lightweightMarker;
});

Clazz.newMeth(C$, 'loadSystemColors$IA', function (systemColors) {
});

Clazz.newMeth(C$, 'setDynamicLayout$Z', function (dynamic) {
});

Clazz.newMeth(C$, 'isDynamicLayoutSet$', function () {
if (this !== C$.getDefaultToolkit$() ) {
return C$.getDefaultToolkit$().isDynamicLayoutSet$();
} else {
return false;
}});

Clazz.newMeth(C$, 'isDynamicLayoutActive$', function () {
if (this !== C$.getDefaultToolkit$() ) {
return C$.getDefaultToolkit$().isDynamicLayoutActive$();
} else {
return false;
}});

Clazz.newMeth(C$, 'getScreenInsets$java_awt_GraphicsConfiguration', function (gc) {
if (this !== C$.getDefaultToolkit$() ) {
return C$.getDefaultToolkit$().getScreenInsets$java_awt_GraphicsConfiguration(gc);
} else {
return Clazz.new_($I$(3).c$$I$I$I$I,[0, 0, 0, 0]);
}});

Clazz.newMeth(C$, 'getDefaultToolkit$', function () {
return (C$.toolkit == null  ? C$.toolkit=Clazz.new_($I$(4)) : C$.toolkit);
}, 1);

Clazz.newMeth(C$, 'createImage$BA', function (imagedata) {
return this.createImage$BA$I$I(imagedata, 0, imagedata.length);
});

Clazz.newMeth(C$, 'getPrintJob$java_awt_JSFrame$S$java_awt_JobAttributes$java_awt_PageAttributes', function (frame, jobtitle, jobAttributes, pageAttributes) {
if (this !== C$.getDefaultToolkit$() ) {
return C$.getDefaultToolkit$().getPrintJob$java_awt_JSFrame$S$java_awt_JobAttributes$java_awt_PageAttributes(frame, jobtitle, jobAttributes, pageAttributes);
} else {
return this.getPrintJob$java_awt_JSFrame$S$java_util_Properties(frame, jobtitle, null);
}});

Clazz.newMeth(C$, 'getPrintJob$java_awt_Frame$S$java_awt_JobAttributes$java_awt_PageAttributes', function (frame, jobtitle, jobAttributes, pageAttributes) {
if (this !== C$.getDefaultToolkit$() ) {
return C$.getDefaultToolkit$().getPrintJob$java_awt_Frame$S$java_awt_JobAttributes$java_awt_PageAttributes(frame, jobtitle, jobAttributes, pageAttributes);
} else {
return this.getPrintJob$java_awt_Frame$S$java_util_Properties(frame, jobtitle, null);
}});

Clazz.newMeth(C$, 'getSystemSelection$', function () {
if (this !== C$.getDefaultToolkit$() ) {
return C$.getDefaultToolkit$().getSystemSelection$();
} else {
$I$(5).checkHeadless$();
return null;
}});

Clazz.newMeth(C$, 'getMenuShortcutKeyMask$', function () {
return 2;
});

Clazz.newMeth(C$, 'getNativeContainer$java_awt_Component', function (c) {
return null;
}, 1);

Clazz.newMeth(C$, 'createCustomCursor$java_awt_Image$java_awt_Point$S', function (cursor, hotSpot, name) {
return (name == null  ? Clazz.new_($I$(6).c$$I,[0]) : Clazz.new_($I$(6).c$$S,[name]));
});

Clazz.newMeth(C$, 'isFrameStateSupported$I', function (state) {
return (state == 0);
});

Clazz.newMeth(C$, 'getProperty$S$S', function (key, defaultValue) {
if (C$.resources != null ) {
try {
return C$.resources.getString$S(key);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
} else {
throw e;
}
}
}return defaultValue;
}, 1);

Clazz.newMeth(C$, 'getSystemEventQueue$', function () {
return this.getSystemEventQueueImpl$();
});

Clazz.newMeth(C$, 'getEventQueue$', function () {
return C$.getDefaultToolkit$().getSystemEventQueueImpl$();
}, 1);

Clazz.newMeth(C$, 'createDragGestureRecognizer$Class$java_awt_dnd_DragSource$java_awt_Component$I$java_awt_dnd_DragGestureListener', function (abstractRecognizerClass, ds, c, srcActions, dgl) {
return null;
});

Clazz.newMeth(C$, 'getDesktopProperty$S', function (propertyName) {
if (this.desktopProperties.isEmpty$()) {
this.initializeDesktopProperties$();
}var value;
if (propertyName.equals$O("awt.dynamicLayoutSupported")) {
value=this.lazilyLoadDesktopProperty$S(propertyName);
return value;
}value=this.desktopProperties.get$O(propertyName);
if (value == null ) {
value=this.lazilyLoadDesktopProperty$S(propertyName);
if (value != null ) {
this.setDesktopProperty$S$O(propertyName, value);
}}if (Clazz.instanceOf(value, "java.awt.RenderingHints")) {
value=(value).clone$();
}return value;
});

Clazz.newMeth(C$, 'setDesktopProperty$S$O', function (name, newValue) {
var oldValue;
{
oldValue=this.desktopProperties.get$O(name);
this.desktopProperties.put$TK$TV(name, newValue);
}this.desktopPropsSupport.firePropertyChange$S$O$O(name, oldValue, newValue);
});

Clazz.newMeth(C$, 'lazilyLoadDesktopProperty$S', function (name) {
return null;
});

Clazz.newMeth(C$, 'initializeDesktopProperties$', function () {
});

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener', function (name, pcl) {
this.desktopPropsSupport.addPropertyChangeListener$S$java_beans_PropertyChangeListener(name, pcl);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$S$java_beans_PropertyChangeListener', function (name, pcl) {
this.desktopPropsSupport.removePropertyChangeListener$S$java_beans_PropertyChangeListener(name, pcl);
});

Clazz.newMeth(C$, 'getPropertyChangeListeners$', function () {
return this.desktopPropsSupport.getPropertyChangeListeners$();
});

Clazz.newMeth(C$, 'getPropertyChangeListeners$S', function (propertyName) {
return this.desktopPropsSupport.getPropertyChangeListeners$S(propertyName);
});

Clazz.newMeth(C$, 'isAlwaysOnTopSupported$', function () {
return true;
});

Clazz.newMeth(C$, 'deProxyAWTEventListener$java_awt_event_AWTEventListener', function (l) {
var localL=l;
if (localL == null ) {
return null;
}if (Clazz.instanceOf(l, "java.awt.event.AWTEventListenerProxy")) {
localL=(l).getListener$();
}return localL;
}, 1);

Clazz.newMeth(C$, 'addAWTEventListener$java_awt_event_AWTEventListener$J', function (listener, eventMask) {
var localL=C$.deProxyAWTEventListener$java_awt_event_AWTEventListener(listener);
if (localL == null ) {
return;
}{
var selectiveListener=this.listener2SelectiveListener.get$O(localL);
if (selectiveListener == null ) {
selectiveListener=Clazz.new_($I$(7).c$$java_awt_event_AWTEventListener$J, [this, null, localL, eventMask]);
this.listener2SelectiveListener.put$TK$TV(localL, selectiveListener);
this.eventListener=$I$(8).add$java_awt_event_AWTEventListener$java_awt_event_AWTEventListener(this.eventListener, selectiveListener);
}selectiveListener.orEventMasks$J(eventMask);
C$.enabledOnToolkitMask|=eventMask;
var mask=eventMask;
for (var i=0; i < 32; i++) {
if (mask == 0) {
break;
}if ((mask & 1) != 0) {
this.calls[i]++;
}mask>>>=1;
}
}});

Clazz.newMeth(C$, 'removeAWTEventListener$java_awt_event_AWTEventListener', function (listener) {
var localL=C$.deProxyAWTEventListener$java_awt_event_AWTEventListener(listener);
if (listener == null ) {
return;
}{
var selectiveListener=this.listener2SelectiveListener.get$O(localL);
if (selectiveListener != null ) {
this.listener2SelectiveListener.remove$O(localL);
var listenerCalls=selectiveListener.getCalls$();
for (var i=0; i < 32; i++) {
this.calls[i]-=listenerCalls[i];
if (this.calls[i] == 0) {
C$.enabledOnToolkitMask&=~(1 << i);
}}
}this.eventListener=$I$(8).remove$java_awt_event_AWTEventListener$java_awt_event_AWTEventListener(this.eventListener, (selectiveListener == null ) ? localL : selectiveListener);
}});

Clazz.newMeth(C$, 'enabledOnToolkit$J', function (eventMask) {
return (C$.enabledOnToolkitMask & eventMask) != 0;
}, 1);

Clazz.newMeth(C$, 'countAWTEventListeners$J', function (eventMask) {
var ci=0;
for (; eventMask != 0; eventMask>>>=1, ci++) {
}
ci--;
return this.calls[ci];
});

Clazz.newMeth(C$, 'getAWTEventListeners$', function () {
{
var la=$I$(9).getListeners$java_util_EventListener$Class(this.eventListener, Clazz.getClass($I$(10),['eventDispatched$java_awt_AWTEvent']));
var ret=Clazz.array($I$(10), [la.length]);
for (var i=0; i < la.length; i++) {
var sael=la[i];
var tempL=sael.getListener$();
ret[i]=Clazz.new_($I$(11).c$$J$java_awt_event_AWTEventListener,[sael.getEventMask$(), tempL]);
}
return ret;
}});

Clazz.newMeth(C$, 'getAWTEventListeners$J', function (eventMask) {
{
var la=$I$(9).getListeners$java_util_EventListener$Class(this.eventListener, Clazz.getClass($I$(10),['eventDispatched$java_awt_AWTEvent']));
var list=Clazz.new_($I$(12).c$$I,[la.length]);
for (var i=0; i < la.length; i++) {
var sael=la[i];
if ((sael.getEventMask$() & eventMask) == eventMask) {
list.add$TE(Clazz.new_($I$(11).c$$J$java_awt_event_AWTEventListener,[sael.getEventMask$(), sael.getListener$()]));
}}
return list.toArray$TTA(Clazz.array($I$(10), [0]));
}});

Clazz.newMeth(C$, 'notifyAWTEventListeners$java_awt_AWTEvent', function (theEvent) {
var eventListener=this.eventListener;
if (eventListener != null ) {
eventListener.eventDispatched$(theEvent);
}});

Clazz.newMeth(C$, 'createPropertyChangeSupport$java_awt_Toolkit', function (toolkit) {
return Clazz.new_($I$(13).c$$O,[toolkit]);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.Toolkit, "ToolkitEventMulticaster", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.AWTEventMulticaster', 'java.awt.event.AWTEventListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_event_AWTEventListener$java_awt_event_AWTEventListener', function (a, b) {
C$.superclazz.c$$java_util_EventListener$java_util_EventListener.apply(this, [a, b]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_AWTEventListener$java_awt_event_AWTEventListener', function (a, b) {
if (a == null ) return b;
if (b == null ) return a;
return Clazz.new_(C$.c$$java_awt_event_AWTEventListener$java_awt_event_AWTEventListener,[a, b]);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_AWTEventListener$java_awt_event_AWTEventListener', function (l, oldl) {
return P$.AWTEventMulticaster.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_util_EventListener', function (oldl) {
if (oldl === this.a ) return this.b;
if (oldl === this.b ) return this.a;
var a2=P$.AWTEventMulticaster.removeInternal$java_util_EventListener$java_util_EventListener(this.a, oldl);
var b2=P$.AWTEventMulticaster.removeInternal$java_util_EventListener$java_util_EventListener(this.b, oldl);
if (a2 === this.a  && b2 === this.b  ) {
return this;
}return C$.add$java_awt_event_AWTEventListener$java_awt_event_AWTEventListener(a2, b2);
});

Clazz.newMeth(C$, ['eventDispatched$java_awt_AWTEvent','eventDispatched$'], function (event) {
(this.a).eventDispatched$(event);
(this.b).eventDispatched$(event);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Toolkit, "SelectiveAWTEventListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.AWTEventListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.listener=null;
this.eventMask=0;
this.calls=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.calls=Clazz.array(Integer.TYPE, [32]);
}, 1);

Clazz.newMeth(C$, 'getListener$', function () {
return this.listener;
});

Clazz.newMeth(C$, 'getEventMask$', function () {
return this.eventMask;
});

Clazz.newMeth(C$, 'getCalls$', function () {
return this.calls;
});

Clazz.newMeth(C$, 'orEventMasks$J', function (mask) {
this.eventMask|=mask;
for (var i=0; i < 32; i++) {
if (mask == 0) {
break;
}if ((mask & 1) != 0) {
this.calls[i]++;
}mask>>>=1;
}
});

Clazz.newMeth(C$, 'c$$java_awt_event_AWTEventListener$J', function (l, mask) {
C$.$init$.apply(this);
this.listener=l;
this.eventMask=mask;
}, 1);

Clazz.newMeth(C$, ['eventDispatched$java_awt_AWTEvent','eventDispatched$'], function (event) {
var eventBit=0;
if (((eventBit=this.eventMask & 1) != 0 && event.id >= 100  && event.id <= 103 ) || ((eventBit=this.eventMask & 2) != 0 && event.id >= 300  && event.id <= 301 ) || ((eventBit=this.eventMask & 4) != 0 && event.id >= 1004  && event.id <= 1005 ) || ((eventBit=this.eventMask & 8) != 0 && event.id >= 400  && event.id <= 402 ) || ((eventBit=this.eventMask & 131072) != 0 && event.id == 507 ) || ((eventBit=this.eventMask & 32) != 0 && (event.id == 503 || event.id == 506 ) ) || ((eventBit=this.eventMask & 16) != 0 && event.id != 503  && event.id != 506  && event.id != 507  && event.id >= 500  && event.id <= 507 ) || ((eventBit=this.eventMask & 64) != 0 && (event.id >= 200 && event.id <= 209 ) ) || ((eventBit=this.eventMask & 128) != 0 && event.id >= 1001  && event.id <= 1001 ) || ((eventBit=this.eventMask & 256) != 0 && event.id >= 601  && event.id <= 601 ) || ((eventBit=this.eventMask & 512) != 0 && event.id >= 701  && event.id <= 701 ) || ((eventBit=this.eventMask & 1024) != 0 && event.id >= 900  && event.id <= 900 ) || ((eventBit=this.eventMask & 2048) != 0 && event.id >= 1100  && event.id <= 1101 ) || ((eventBit=this.eventMask & 8192) != 0 && event.id >= 800  && event.id <= 801 ) || ((eventBit=this.eventMask & 16384) != 0 && event.id >= 1200  && event.id <= 1201 ) || ((eventBit=this.eventMask & 32768) != 0 && event.id == 1400 ) || ((eventBit=this.eventMask & 65536) != 0 && (event.id == 1401 || event.id == 1402 ) ) || ((eventBit=this.eventMask & 262144) != 0 && event.id == 209 ) || ((eventBit=this.eventMask & 524288) != 0 && (event.id == 207 || event.id == 208 ) )  ) {
var ci=0;
for (var eMask=eventBit; eMask != 0; eMask>>>=1, ci++) {
}
ci--;
for (var i=0; i < this.calls[ci]; i++) {
this.listener.eventDispatched$(event);
}
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:26 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
