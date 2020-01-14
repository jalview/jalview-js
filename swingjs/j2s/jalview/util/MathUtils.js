(function(){var P$=Clazz.newPackage("jalview.util"),I$=[];
var C$=Clazz.newClass(P$, "MathUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'gcd$I$I', function (a, b) {
if (b == 0) {
return Math.abs(a);
}return C$.gcd$I$I(b, a % b);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
