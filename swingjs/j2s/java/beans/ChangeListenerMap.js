(function(){var P$=Clazz.newPackage("java.beans"),I$=[[0,'java.util.HashMap','java.util.ArrayList','java.util.Collections']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ChangeListenerMap");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.map=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'add$S$TL', function (name, listener) {
if (this.map == null ) {
this.map=Clazz.new_($I$(1));
}var array=this.map.get$O(name);
var size=(array != null ) ? array.length : 0;
var clone=this.newArray$I(size + 1);
clone[size]=listener;
if (array != null ) {
System.arraycopy$O$I$O$I$I(array, 0, clone, 0, size);
}this.map.put$TK$TV(name, clone);
});

Clazz.newMeth(C$, 'remove$S$TL', function (name, listener) {
if (this.map != null ) {
var array=this.map.get$O(name);
if (array != null ) {
for (var i=0; i < array.length; i++) {
if (listener.equals$O(array[i])) {
var size=array.length - 1;
if (size > 0) {
var clone=this.newArray$I(size);
System.arraycopy$O$I$O$I$I(array, 0, clone, 0, i);
System.arraycopy$O$I$O$I$I(array, i + 1, clone, i, size - i);
this.map.put$TK$TV(name, clone);
} else {
this.map.remove$O(name);
if (this.map.isEmpty$()) {
this.map=null;
}}break;
}}
}}});

Clazz.newMeth(C$, 'get$S', function (name) {
return (this.map != null ) ? this.map.get$O(name) : null;
});

Clazz.newMeth(C$, 'set$S$TLA', function (name, listeners) {
if (listeners != null ) {
if (this.map == null ) {
this.map=Clazz.new_($I$(1));
}this.map.put$TK$TV(name, listeners);
} else if (this.map != null ) {
this.map.remove$O(name);
if (this.map.isEmpty$()) {
this.map=null;
}}});

Clazz.newMeth(C$, 'getListeners$', function () {
if (this.map == null ) {
return this.newArray$I(0);
}var list=Clazz.new_($I$(2));
var listeners=this.map.get$O(null);
if (listeners != null ) {
for (var listener, $listener = 0, $$listener = listeners; $listener<$$listener.length&&((listener=($$listener[$listener])),1);$listener++) {
list.add$TE(listener);
}
}for (var entry, $entry = this.map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var name=entry.getKey$();
if (name != null ) {
for (var listener, $listener = 0, $$listener = entry.getValue$(); $listener<$$listener.length&&((listener=($$listener[$listener])),1);$listener++) {
list.add$TE(this.newProxy$S$TL(name, listener));
}
}}
return list.toArray$TTA(this.newArray$I(list.size$()));
});

Clazz.newMeth(C$, 'getListeners$S', function (name) {
if (name != null ) {
var listeners=this.get$S(name);
if (listeners != null ) {
return listeners.clone$();
}}return this.newArray$I(0);
});

Clazz.newMeth(C$, 'hasListeners$S', function (name) {
if (this.map == null ) {
return false;
}var array=this.map.get$O(null);
return (array != null ) || ((name != null ) && (null != this.map.get$O(name) ) ) ;
});

Clazz.newMeth(C$, 'getEntries$', function () {
return (this.map != null ) ? this.map.entrySet$() : $I$(3).emptySet$();
});

Clazz.newMeth(C$, 'extract$TL', function (listener) {
while (Clazz.instanceOf(listener, "java.util.EventListenerProxy")){
var proxy=listener;
listener=proxy.getListener$();
}
return listener;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
