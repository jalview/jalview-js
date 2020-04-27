(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.geom"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ComputeArcCenter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'computeArcCenter$D$D', function (delta, l) {
var x_n=0;
var x_n_plus_1;
var f_x_n;
var f_x_n_plus_1;
f_x_n=C$.f$D$D(x_n, delta);
while (true){
x_n_plus_1=x_n - (f_x_n - l) / C$.fprime$D$D(x_n, delta);
f_x_n_plus_1=C$.f$D$D(x_n_plus_1, delta);
if (x_n_plus_1 == -Infinity  || Math.abs(f_x_n_plus_1 - f_x_n) < 0.1  ) {
return x_n_plus_1;
}x_n=x_n_plus_1;
f_x_n=f_x_n_plus_1;
}
}, 1);

Clazz.newMeth(C$, 'f$D$D', function (c, delta) {
if (c < 0 ) {
return 2 * Math.atan(delta / (-2 * c)) * Math.sqrt(delta * delta / 4 + c * c) ;
} else if (c != 0 ) {
return (6.283185307179586 - 2 * Math.atan(delta / (2 * c))) * Math.sqrt(delta * delta / 4 + c * c);
} else {
return 3.141592653589793 * Math.sqrt(delta * delta / 4 + c * c);
}}, 1);

Clazz.newMeth(C$, 'fprime$D$D', function (c, delta) {
if (c < 0 ) {
return delta / (c * c + delta / 4) * Math.sqrt(delta * delta / 4 + c * c) + 2 * Math.atan(delta / (-2 * c)) * c  / Math.sqrt(delta * delta / 4 + c * c);
} else if (c != 0 ) {
return delta / (c * c + delta / 4) * Math.sqrt(delta * delta / 4 + c * c) + (6.283185307179586 - 2 * Math.atan(delta / (-2 * c))) * c / Math.sqrt(delta * delta / 4 + c * c);
} else {
return 2;
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
