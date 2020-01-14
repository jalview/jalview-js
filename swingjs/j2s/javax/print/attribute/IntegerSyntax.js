(function(){var P$=Clazz.newPackage("javax.print.attribute"),I$=[];
var C$=Clazz.newClass(P$, "IntegerSyntax", null, null, ['javax.print.attribute.Attribute', 'java.io.Serializable', 'Cloneable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (value) {
C$.$init$.apply(this);
this.value=value;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (value, lowerBound, upperBound) {
C$.$init$.apply(this);
if (lowerBound > value || value > upperBound ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Value " + value + " not in range " + lowerBound + ".." + upperBound ]);
}this.value=value;
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'equals$O', function (object) {
return (object != null  && Clazz.instanceOf(object, "javax.print.attribute.IntegerSyntax")  && this.value == (object).value );
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.value;
});

Clazz.newMeth(C$, 'toString', function () {
return "" + this.value;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
