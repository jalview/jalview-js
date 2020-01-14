(function(){var P$=Clazz.newPackage("sun.util.calendar"),I$=[];
var C$=Clazz.newClass(P$, "CalendarUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isGregorianLeapYear$I', function (gregorianYear) {
return (((gregorianYear % 4) == 0) && (((gregorianYear % 100) != 0) || ((gregorianYear % 400) == 0) ) );
}, 1);

Clazz.newMeth(C$, 'isJulianLeapYear$I', function (normalizedJulianYear) {
return (normalizedJulianYear % 4) == 0;
}, 1);

Clazz.newMeth(C$, 'floorDivide$J$J', function (n, d) {
return ((n >= 0) ? ((n/d|0)) : ((((n + 1)/d|0)) - 1));
}, 1);

Clazz.newMeth(C$, 'floorDivide$I$I', function (n, d) {
return ((n >= 0) ? ((n/d|0)) : ((((n + 1)/d|0)) - 1));
}, 1);

Clazz.newMeth(C$, 'floorDivide$I$I$IA', function (n, d, r) {
if (n >= 0) {
r[0]=n % d;
return (n/d|0);
}var q=(((n + 1)/d|0)) - 1;
r[0]=n - (q * d);
return q;
}, 1);

Clazz.newMeth(C$, 'floorDivide$J$I$IA', function (n, d, r) {
if (n >= 0) {
r[0]=((n % d)|0);
return (((n/d|0))|0);
}var q=(((((n + 1)/d|0)) - 1)|0);
r[0]=((n - (q * d))|0);
return q;
}, 1);

Clazz.newMeth(C$, 'mod$J$J', function (x, y) {
return (x - y * C$.floorDivide$J$J(x, y));
}, 1);

Clazz.newMeth(C$, 'mod$I$I', function (x, y) {
return (x - y * C$.floorDivide$I$I(x, y));
}, 1);

Clazz.newMeth(C$, 'amod$I$I', function (x, y) {
var z=C$.mod$I$I(x, y);
return (z == 0) ? y : z;
}, 1);

Clazz.newMeth(C$, 'amod$J$J', function (x, y) {
var z=C$.mod$J$J(x, y);
return (z == 0) ? y : z;
}, 1);

Clazz.newMeth(C$, 'sprintf0d$StringBuilder$I$I', function (sb, value, width) {
var d=value;
if (d < 0) {
sb.append$C("-");
d=-d;
--width;
}var n=10;
for (var i=2; i < width; i++) {
n*=10;
}
for (var i=1; i < width && d < n ; i++) {
sb.append$C("0");
n=(n/10|0);
}
sb.append$S("" + d);
return sb;
}, 1);

Clazz.newMeth(C$, 'sprintf0d$StringBuffer$I$I', function (sb, value, width) {
var d=value;
if (d < 0) {
sb.append$C("-");
d=-d;
--width;
}var n=10;
for (var i=2; i < width; i++) {
n*=10;
}
for (var i=1; i < width && d < n ; i++) {
sb.append$C("0");
n=(n/10|0);
}
sb.append$S("" + d);
return sb;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:41 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
