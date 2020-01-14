(function(){var P$=Clazz.newPackage("javax.print.attribute.standard"),I$=[];
var C$=Clazz.newClass(P$, "Copies", null, 'javax.print.attribute.IntegerSyntax', ['javax.print.attribute.PrintRequestAttribute', 'javax.print.attribute.PrintJobAttribute']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (value) {
C$.superclazz.c$$I$I$I.apply(this, [value, 1, 2147483647]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (object) {
return C$.superclazz.prototype.equals$O.apply(this, [object]) && Clazz.instanceOf(object, "javax.print.attribute.standard.Copies") ;
});

Clazz.newMeth(C$, 'getCategory$', function () {
return Clazz.getClass(C$);
});

Clazz.newMeth(C$, 'getName$', function () {
return "copies";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
