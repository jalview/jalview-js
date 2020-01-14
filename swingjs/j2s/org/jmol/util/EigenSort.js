(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[];
var C$=Clazz.newClass(P$, "EigenSort", null, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$O$O','compare$','compare$TT$TT'], function (o1, o2) {
var a=((o1)[1]).floatValue$();
var b=((o2)[1]).floatValue$();
return (a < b  ? -1 : a > b  ? 1 : 0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
