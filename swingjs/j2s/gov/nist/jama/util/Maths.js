(function(){var P$=Clazz.newPackage("gov.nist.jama.util"),I$=[];
var C$=Clazz.newClass(P$, "Maths");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hypot$D$D', function (a, b) {
var r;
if (Math.abs(a) > Math.abs(b) ) {
r=b / a;
r=Math.abs(a) * Math.sqrt(1 + r * r);
} else if (b != 0 ) {
r=a / b;
r=Math.abs(b) * Math.sqrt(1 + r * r);
} else {
r=0.0;
}return r;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
