(function(){var P$=Clazz.newPackage("java.beans"),p$1={},I$=[[0,'java.beans.PropertyChangeListener','java.beans.PropertyChangeListenerProxy',['java.beans.PropertyChangeSupport','.PropertyChangeListenerMap'],'java.beans.PropertyChangeEvent','Boolean','java.beans.IndexedPropertyChangeEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PropertyChangeSupport", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.map=null;
this.source=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'c$$O', function (sourceBean) {
C$.$init$.apply(this);
if (sourceBean == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.source=sourceBean;
}, 1);

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
if (listener == null ) {
return;
}if (Clazz.instanceOf(listener, "java.beans.PropertyChangeListenerProxy")) {
var proxy=listener;
this.addPropertyChangeListener$S$java_beans_PropertyChangeListener(proxy.getPropertyName$(), proxy.getListener$());
} else {
this.map.add$S$TL(null, listener);
}});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
if (listener == null ) {
return;
}if (Clazz.instanceOf(listener, "java.beans.PropertyChangeListenerProxy")) {
var proxy=listener;
this.removePropertyChangeListener$S$java_beans_PropertyChangeListener(proxy.getPropertyName$(), proxy.getListener$());
} else {
this.map.remove$S$TL(null, listener);
}});

Clazz.newMeth(C$, 'getPropertyChangeListeners$', function () {
return this.map.getListeners$();
});

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener', function (propertyName, listener) {
if (listener == null  || propertyName == null  ) {
return;
}listener=this.map.extract$TL(listener);
if (listener != null ) {
this.map.add$S$TL(propertyName, listener);
}});

Clazz.newMeth(C$, 'removePropertyChangeListener$S$java_beans_PropertyChangeListener', function (propertyName, listener) {
if (listener == null  || propertyName == null  ) {
return;
}listener=this.map.extract$TL(listener);
if (listener != null ) {
this.map.remove$S$TL(propertyName, listener);
}});

Clazz.newMeth(C$, 'getPropertyChangeListeners$S', function (propertyName) {
return this.map.getListeners$S(propertyName);
});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O', function (propertyName, oldValue, newValue) {
if (oldValue != null  && newValue != null   && oldValue.equals$O(newValue) ) {
return;
}this.firePropertyChange$java_beans_PropertyChangeEvent(Clazz.new_($I$(4).c$$O$S$O$O,[this.source, propertyName, oldValue, newValue]));
});

Clazz.newMeth(C$, 'firePropertyChange$S$I$I', function (propertyName, oldValue, newValue) {
if (oldValue == newValue) {
return;
}this.firePropertyChange$S$O$O(propertyName, Integer.valueOf$I(oldValue), Integer.valueOf$I(newValue));
});

Clazz.newMeth(C$, 'firePropertyChange$S$Z$Z', function (propertyName, oldValue, newValue) {
if (oldValue == newValue ) {
return;
}this.firePropertyChange$S$O$O(propertyName, $I$(5).valueOf$Z(oldValue), $I$(5).valueOf$Z(newValue));
});

Clazz.newMeth(C$, 'firePropertyChange$java_beans_PropertyChangeEvent', function (evt) {
var oldValue=evt.getOldValue$();
var newValue=evt.getNewValue$();
var propertyName=evt.getPropertyName$();
if (oldValue != null  && newValue != null   && oldValue.equals$O(newValue) ) {
return;
}var common=this.map.get$S(null);
var named=(propertyName != null ) ? this.map.get$S(propertyName) : null;
p$1.fire$java_beans_PropertyChangeListenerA$java_beans_PropertyChangeEvent.apply(this, [common, evt]);
p$1.fire$java_beans_PropertyChangeListenerA$java_beans_PropertyChangeEvent.apply(this, [named, evt]);
});

Clazz.newMeth(C$, 'fire$java_beans_PropertyChangeListenerA$java_beans_PropertyChangeEvent', function (listeners, event) {
if (listeners != null ) {
for (var i=0, n=listeners.length; i < n; i++) listeners[i].propertyChange$(event);

}}, p$1);

Clazz.newMeth(C$, 'fireIndexedPropertyChange$S$I$O$O', function (propertyName, index, oldValue, newValue) {
this.firePropertyChange$java_beans_PropertyChangeEvent(Clazz.new_($I$(6).c$$O$S$O$O$I,[this.source, propertyName, oldValue, newValue, index]));
});

Clazz.newMeth(C$, 'fireIndexedPropertyChange$S$I$I$I', function (propertyName, index, oldValue, newValue) {
if (oldValue == newValue) {
return;
}this.fireIndexedPropertyChange$S$I$O$O(propertyName, index, Integer.valueOf$I(oldValue), Integer.valueOf$I(newValue));
});

Clazz.newMeth(C$, 'fireIndexedPropertyChange$S$I$Z$Z', function (propertyName, index, oldValue, newValue) {
if (oldValue == newValue ) {
return;
}this.fireIndexedPropertyChange$S$I$O$O(propertyName, index, $I$(5).valueOf$Z(oldValue), $I$(5).valueOf$Z(newValue));
});

Clazz.newMeth(C$, 'hasListeners$S', function (propertyName) {
return this.map.hasListeners$S(propertyName);
});
;
(function(){var C$=Clazz.newClass(P$.PropertyChangeSupport, "PropertyChangeListenerMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.beans.ChangeListenerMap');
C$.EMPTY=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.EMPTY=Clazz.array($I$(1), -1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'newArray$I', function (length) {
return (0 < length) ? Clazz.array($I$(1), [length]) : C$.EMPTY;
});

Clazz.newMeth(C$, ['newProxy$S$java_beans_PropertyChangeListener','newProxy$S$TL'], function (name, listener) {
return Clazz.new_($I$(2).c$$S$java_beans_PropertyChangeListener,[name, listener]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
