(function(){var P$=Clazz.newPackage("sun.swing"),I$=[];
var C$=Clazz.newClass(P$, "UIAction", null, null, 'javax.swing.Action');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getValue$S', function (key) {
if (key == "Name") {
return this.name;
}return null;
});

Clazz.newMeth(C$, 'putValue$S$O', function (key, value) {
});

Clazz.newMeth(C$, 'setEnabled$Z', function (b) {
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return this.isEnabled$O(null);
});

Clazz.newMeth(C$, 'isEnabled$O', function (sender) {
return true;
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
