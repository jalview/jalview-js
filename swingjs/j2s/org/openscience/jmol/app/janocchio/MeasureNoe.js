(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MeasureNoe", null, 'org.openscience.jmol.app.janocchio.Measure');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$D', function (expValue, calcValue) {
;C$.superclazz.c$$S$D$I.apply(this,[expValue, calcValue, 2]);C$.$init$.apply(this);
if (expValue != null ) {
var dexp=Math.abs((Double.valueOf$S(expValue)).doubleValue$());
var dcalc=Math.abs(calcValue);
if (dexp < 0.005 ) {
if (dcalc < 0.03 ) {
this.diff=0.0;
} else if (dcalc > 0.03  && dcalc < 0.05  ) {
this.diff=0.30000000000000004;
} else {
this.diff=1.4;
}} else {
this.diff=Math.abs(Math.log(Math.abs(dcalc / dexp)) / Math.log(10.0));
}} else {
this.diff=0.0;
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
