(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EigenSort", null, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'compare$O$O', function (o1, o2) {
var a=((o1)[1]).floatValue$();
var b=((o2)[1]).floatValue$();
return (a < b  ? -1 : a > b  ? 1 : 0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
