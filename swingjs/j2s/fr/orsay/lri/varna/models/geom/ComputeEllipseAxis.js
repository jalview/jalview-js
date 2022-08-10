(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.geom"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ComputeEllipseAxis");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['debug']]]

Clazz.newMeth(C$, 'computeEllipseAxis$D$D', function (b, l) {
if (l / 4 <= b  || b <= 0   || l <= 0  ) {
return 0;
} else {
var steps=0;
var x_n=10;
var x_n_plus_1;
var f_x_n;
var f_x_n_plus_1;
f_x_n=C$.f$D$D(x_n, b) - l;
while (true){
x_n_plus_1=x_n - f_x_n / C$.fprime$D$D(x_n, b);
f_x_n_plus_1=C$.f$D$D(x_n_plus_1, b) - l;
if (x_n_plus_1 < 0 ) {
System.out.println$S("ComputeEllipseAxis: x_n < 0 => returning 0");
return 0;
}if (Math.abs(f_x_n_plus_1 - f_x_n) < 0.01 ) {
if (C$.debug) System.out.println$S("#steps = " + steps);
return x_n_plus_1;
}x_n=x_n_plus_1;
f_x_n=f_x_n_plus_1;
steps++;
}
}}, 1);

Clazz.newMeth(C$, 'f$D$D', function (a, b) {
return 3.141592653589793 * (3 * (a + b) - Math.sqrt(10 * a * b  + 3 * (a * a + b * b)));
}, 1);

Clazz.newMeth(C$, 'fprime$D$D', function (a, b) {
return 3.141592653589793 * (3 - (5 * b + 3 * a) / Math.sqrt(10 * a * b  + 3 * (a * a + b * b)));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.debug=false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
