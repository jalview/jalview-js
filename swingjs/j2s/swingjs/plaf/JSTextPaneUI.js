(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[];
var C$=Clazz.newClass(P$, "JSTextPaneUI", null, 'swingjs.plaf.JSEditorPaneUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
return C$.superclazz.prototype.updateDOMNode$.apply(this, []);
});

Clazz.newMeth(C$, 'getPropertyPrefix$', function () {
return "TextPane";
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [evt]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
