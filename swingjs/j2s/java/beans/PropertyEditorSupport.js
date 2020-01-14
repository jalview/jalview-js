(function(){var P$=Clazz.newPackage("java.beans"),I$=[[0,'java.util.Vector','java.beans.PropertyChangeEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PropertyEditorSupport", null, null, 'java.beans.PropertyEditor');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=null;
this.source=null;
this.listeners=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.setSource$O(this);
}, 1);

Clazz.newMeth(C$, 'c$$O', function (source) {
C$.$init$.apply(this);
if (source == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.setSource$O(source);
}, 1);

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'setSource$O', function (source) {
this.source=source;
});

Clazz.newMeth(C$, 'setValue$O', function (value) {
this.value=value;
this.firePropertyChange$();
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'isPaintable$', function () {
return false;
});

Clazz.newMeth(C$, 'paintValue$java_awt_Graphics$java_awt_Rectangle', function (gfx, box) {
});

Clazz.newMeth(C$, 'getJavaInitializationString$', function () {
return "???";
});

Clazz.newMeth(C$, 'getAsText$', function () {
return (this.value != null ) ? this.value.toString() : "null";
});

Clazz.newMeth(C$, 'setAsText$S', function (text) {
if (Clazz.instanceOf(this.value, "java.lang.String")) {
this.setValue$O(text);
return;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[text]);
});

Clazz.newMeth(C$, 'getTags$', function () {
return null;
});

Clazz.newMeth(C$, 'getCustomEditor$', function () {
return null;
});

Clazz.newMeth(C$, 'supportsCustomEditor$', function () {
return false;
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
if (this.listeners == null ) {
this.listeners=Clazz.new_($I$(1));
}this.listeners.addElement$TE(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
if (this.listeners == null ) {
return;
}this.listeners.removeElement$O(listener);
});

Clazz.newMeth(C$, 'firePropertyChange$', function () {
var targets;
{
if (this.listeners == null ) {
return;
}targets=this.listeners.clone$();
}var evt=Clazz.new_($I$(2).c$$O$S$O$O,[this.source, null, null, null]);
for (var i=0; i < targets.size$(); i++) {
var target=targets.elementAt$I(i);
target.propertyChange$(evt);
}
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
