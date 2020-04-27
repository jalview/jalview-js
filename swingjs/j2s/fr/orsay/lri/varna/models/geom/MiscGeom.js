(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.geom"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MiscGeom");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
