(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
var C$=Clazz.newClass(P$, "Lst", null, 'java.util.ArrayList');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['addLast$TV'], function (v) {
return C$.superclazz.prototype.add$TE.apply(this, [v]);
});

Clazz.newMeth(C$, 'removeItemAt$I', function (location) {
return C$.superclazz.prototype.remove$I.apply(this, [location]);
});

Clazz.newMeth(C$, 'removeObj$O', function (v) {
return C$.superclazz.prototype.remove$O.apply(this, [v]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
