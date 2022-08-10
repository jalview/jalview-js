(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MeasureCouple", null, 'org.openscience.jmol.app.janocchio.Measure');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$D', function (expValue, calcValue) {
;C$.superclazz.c$$S$D$I.apply(this,[expValue, calcValue, 1]);C$.$init$.apply(this);
this.diff=(expValue == null  ? 0 : Math.abs(calcValue - Double.valueOf$S(expValue).doubleValue$()));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
