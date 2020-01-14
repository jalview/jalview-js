(function(){var P$=Clazz.newPackage("java.beans"),p$1={},I$=[[0,'java.beans.VetoableChangeListener','java.beans.VetoableChangeListenerProxy','java.io.ObjectStreamField','java.util.Hashtable',['java.beans.VetoableChangeSupport','.VetoableChangeListenerMap'],'java.beans.PropertyChangeEvent','Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VetoableChangeSupport", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.serialPersistentFields=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.serialPersistentFields=Clazz.array($I$(3), -1, [Clazz.new_($I$(3).c$$S$Class,["children", Clazz.getClass($I$(4))]), Clazz.new_($I$(3).c$$S$Class,["source", Clazz.getClass(java.lang.Object)]), Clazz.new_($I$(3).c$$S$Class,["vetoableChangeSupportSerializedDataVersion", Integer.TYPE])]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.map=null;
this.source=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(5));
}, 1);

Clazz.newMeth(C$, 'c$$O', function (sourceBean) {
C$.$init$.apply(this);
if (sourceBean == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.source=sourceBean;
}, 1);

Clazz.newMeth(C$, 'addVetoableChangeListener$java_beans_VetoableChangeListener', function (listener) {
if (listener == null ) {
return;
}if (Clazz.instanceOf(listener, "java.beans.VetoableChangeListenerProxy")) {
var proxy=listener;
this.addVetoableChangeListener$S$java_beans_VetoableChangeListener(proxy.getPropertyName$(), proxy.getListener$());
} else {
this.map.add$S$TL(null, listener);
}});

Clazz.newMeth(C$, 'removeVetoableChangeListener$java_beans_VetoableChangeListener', function (listener) {
if (listener == null ) {
return;
}if (Clazz.instanceOf(listener, "java.beans.VetoableChangeListenerProxy")) {
var proxy=listener;
this.removeVetoableChangeListener$S$java_beans_VetoableChangeListener(proxy.getPropertyName$(), proxy.getListener$());
} else {
this.map.remove$S$TL(null, listener);
}});

Clazz.newMeth(C$, 'getVetoableChangeListeners$', function () {
return this.map.getListeners$();
});

Clazz.newMeth(C$, 'addVetoableChangeListener$S$java_beans_VetoableChangeListener', function (propertyName, listener) {
if (listener == null  || propertyName == null  ) {
return;
}listener=this.map.extract$TL(listener);
if (listener != null ) {
this.map.add$S$TL(propertyName, listener);
}});

Clazz.newMeth(C$, 'removeVetoableChangeListener$S$java_beans_VetoableChangeListener', function (propertyName, listener) {
if (listener == null  || propertyName == null  ) {
return;
}listener=this.map.extract$TL(listener);
if (listener != null ) {
this.map.remove$S$TL(propertyName, listener);
}});

Clazz.newMeth(C$, 'getVetoableChangeListeners$S', function (propertyName) {
return this.map.getListeners$S(propertyName);
});

Clazz.newMeth(C$, 'fireVetoableChange$S$O$O', function (propertyName, oldValue, newValue) {
if (oldValue != null  && newValue != null   && oldValue.equals$O(newValue) ) {
return;
}var evt=Clazz.new_($I$(6).c$$O$S$O$O,[this.source, propertyName, oldValue, newValue]);
this.fireVetoableChange$java_beans_PropertyChangeEvent(evt);
});

Clazz.newMeth(C$, 'fireVetoableChange$S$I$I', function (propertyName, oldValue, newValue) {
if (oldValue == newValue) {
return;
}this.fireVetoableChange$S$O$O(propertyName, Integer.valueOf$I(oldValue), Integer.valueOf$I(newValue));
});

Clazz.newMeth(C$, 'fireVetoableChange$S$Z$Z', function (propertyName, oldValue, newValue) {
if (oldValue == newValue ) {
return;
}this.fireVetoableChange$S$O$O(propertyName, $I$(7).valueOf$Z(oldValue), $I$(7).valueOf$Z(newValue));
});

Clazz.newMeth(C$, 'fireVetoableChange$java_beans_PropertyChangeEvent', function (evt) {
var oldValue=evt.getOldValue$();
var newValue=evt.getNewValue$();
var propertyName=evt.getPropertyName$();
if (oldValue != null  && newValue != null   && oldValue.equals$O(newValue) ) {
return;
}var common=this.map.get$S(null);
var named=(propertyName != null ) ? this.map.get$S(propertyName) : null;
p$1.fire$java_beans_VetoableChangeListenerA$java_beans_PropertyChangeEvent.apply(this, [common, evt]);
p$1.fire$java_beans_VetoableChangeListenerA$java_beans_PropertyChangeEvent.apply(this, [named, evt]);
});

Clazz.newMeth(C$, 'fire$java_beans_VetoableChangeListenerA$java_beans_PropertyChangeEvent', function (listeners, event) {
if (listeners != null ) {
var current=null;
try {
for (var listener, $listener = 0, $$listener = listeners; $listener<$$listener.length&&((listener=($$listener[$listener])),1);$listener++) {
current=listener;
listener.vetoableChange$(event);
}
} catch (veto) {
if (Clazz.exceptionOf(veto,"java.beans.PropertyVetoException")){
event=Clazz.new_($I$(6).c$$O$S$O$O,[this.source, event.getPropertyName$(), event.getNewValue$(), event.getOldValue$()]);
for (var listener, $listener = 0, $$listener = listeners; $listener<$$listener.length&&((listener=($$listener[$listener])),1);$listener++) {
try {
listener.vetoableChange$(event);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.PropertyVetoException")){
} else {
throw ex;
}
}
}
throw veto;
} else {
throw veto;
}
}
}}, p$1);

Clazz.newMeth(C$, 'hasListeners$S', function (propertyName) {
return this.map.hasListeners$S(propertyName);
});
;
(function(){var C$=Clazz.newClass(P$.VetoableChangeSupport, "VetoableChangeListenerMap", function(){
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

Clazz.newMeth(C$, ['newProxy$S$java_beans_VetoableChangeListener','newProxy$S$TL'], function (name, listener) {
return Clazz.new_($I$(2).c$$S$java_beans_VetoableChangeListener,[name, listener]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
