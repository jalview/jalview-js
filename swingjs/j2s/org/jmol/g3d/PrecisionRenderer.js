(function(){var P$=Clazz.newPackage("org.jmol.g3d"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PrecisionRenderer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isOrthographic'],'F',['a','b']]]

Clazz.newMeth(C$, 'getZCurrent$F$F$I', function (a, b, x) {
return Math.round(a == 1.4E-45  ? b : this.isOrthographic ? a * x + b : a / (b - x));
});

Clazz.newMeth(C$, 'setRastABFloat$F$F$F$F', function (xa, za, xb, zb) {
var zdif=(zb - za);
var xdif=(xb - xa);
if (zdif == 0  || xdif == 0  ) {
this.a=1.4E-45;
this.b=za;
return;
}if (this.isOrthographic) {
this.a=zdif / xdif;
this.b=za - this.a * xa;
} else {
this.a=xdif * za * (zb / zdif) ;
this.b=(xb * zb - xa * za) / zdif;
}});

Clazz.newMeth(C$, 'setRastAB$I$I$I$I', function (xa, za, xb, zb) {
var zdif=(zb - za);
var xdif=(xb - xa);
if (xa == 1.4E-45  || zdif == 0   || xdif == 0  ) {
this.a=1.4E-45;
this.b=zb;
return;
}if (this.isOrthographic) {
this.a=zdif / xdif;
this.b=za - this.a * xa;
} else {
this.a=xdif * za * (zb / zdif) ;
this.b=(xb * zb - xa * za) / zdif;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
