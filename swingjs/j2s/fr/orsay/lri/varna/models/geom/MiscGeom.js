(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.geom"),I$=[];
var C$=Clazz.newClass(P$, "MiscGeom");

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'angleFromVector$java_awt_geom_Point2D_Double', function (v) {
return C$.angleFromVector$D$D(v.x, v.y);
}, 1);

Clazz.newMeth(C$, 'angleFromVector$D$D', function (x, y) {
var l=Math.hypot(x, y);
if (y > 0 ) {
return Math.acos(x / l);
} else if (y < 0 ) {
return -Math.acos(x / l);
} else {
return x > 0  ? 0 : 3.141592653589793;
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
