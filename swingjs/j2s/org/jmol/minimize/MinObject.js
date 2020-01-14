(function(){var P$=Clazz.newPackage("org.jmol.minimize"),I$=[];
var C$=Clazz.newClass(P$, "MinObject");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.data=null;
this.type=0;
this.key=null;
this.ddata=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.type + " " + this.data[0] + "," + this.data[1] + (this.data.length > 2 ? "," + this.data[2] + "," + this.data[3]  : "") + " " + C$.decodeKey$Integer(this.key) ;
});

Clazz.newMeth(C$, 'getKey$I$I$I$I$I', function (type, a1, a2, a3, a4) {
return Integer.valueOf$I((((((((a4 << 7) + a3) << 7) + a2) << 7) + a1) << 4) + type);
}, 1);

Clazz.newMeth(C$, 'decodeKey$Integer', function (key) {
if (key == null ) return null;
var i=key.intValue$();
var type=i & 15;
i>>=4;
var a=i & 127;
i>>=7;
var b=i & 127;
i>>=7;
var c=i & 127;
i>>=7;
var d=i & 127;
return (type < 0 ? type + ": " : "") + (a < 10 ? "  " : " ") + a + (b < 10 ? "  " : " ") + b + (c < 10 ? "  " : " ") + c + (d > 120 ? "" : (d < 10 ? "  " : " ") + d) ;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
