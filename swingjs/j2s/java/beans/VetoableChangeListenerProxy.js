(function(){var P$=Clazz.newPackage("java.beans"),I$=[];
var C$=Clazz.newClass(P$, "VetoableChangeListenerProxy", null, 'java.util.EventListenerProxy', 'java.beans.VetoableChangeListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.propertyName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$java_beans_VetoableChangeListener', function (propertyName, listener) {
C$.superclazz.c$$TT.apply(this, [listener]);
C$.$init$.apply(this);
this.propertyName=propertyName;
}, 1);

Clazz.newMeth(C$, ['vetoableChange$java_beans_PropertyChangeEvent','vetoableChange$'], function (evt) {
(this.getListener$()).vetoableChange$(evt);
});

Clazz.newMeth(C$, 'getPropertyName$', function () {
return this.propertyName;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
