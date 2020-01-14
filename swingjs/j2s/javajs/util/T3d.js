(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
var C$=Clazz.newClass(P$, "T3d", null, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.x=0;
this.y=0;
this.z=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$D$D$D', function (x, y, z) {
this.x=x;
this.y=y;
this.z=z;
});

Clazz.newMeth(C$, 'setA$DA', function (t) {
this.x=t[0];
this.y=t[1];
this.z=t[2];
});

Clazz.newMeth(C$, 'setT$javajs_util_T3d', function (t1) {
this.x=t1.x;
this.y=t1.y;
this.z=t1.z;
});

Clazz.newMeth(C$, 'add2$javajs_util_T3d$javajs_util_T3d', function (t1, t2) {
this.x=t1.x + t2.x;
this.y=t1.y + t2.y;
this.z=t1.z + t2.z;
});

Clazz.newMeth(C$, 'add$javajs_util_T3d', function (t1) {
this.x += t1.x;
this.y += t1.y;
this.z += t1.z;
});

Clazz.newMeth(C$, 'sub2$javajs_util_T3d$javajs_util_T3d', function (t1, t2) {
this.x=t1.x - t2.x;
this.y=t1.y - t2.y;
this.z=t1.z - t2.z;
});

Clazz.newMeth(C$, 'sub$javajs_util_T3d', function (t1) {
this.x -= t1.x;
this.y -= t1.y;
this.z -= t1.z;
});

Clazz.newMeth(C$, 'scale$D', function (s) {
this.x *= s;
this.y *= s;
this.z *= s;
});

Clazz.newMeth(C$, 'scaleAdd$D$javajs_util_T3d$javajs_util_T3d', function (s, t1, t2) {
this.x=s * t1.x + t2.x;
this.y=s * t1.y + t2.y;
this.z=s * t1.z + t2.z;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var xbits=C$.doubleToLongBits0$D(this.x);
var ybits=C$.doubleToLongBits0$D(this.y);
var zbits=C$.doubleToLongBits0$D(this.z);
return ((xbits ^ (xbits >> 32) ^ ybits ^ (ybits >> 32) ^ zbits ^ (zbits >> 32) )|0);
});

Clazz.newMeth(C$, 'doubleToLongBits0$D', function (d) {
return (d == 0  ? 0 : Double.doubleToLongBits$D(d));
}, 1);

Clazz.newMeth(C$, 'equals$O', function (t1) {
if (!(Clazz.instanceOf(t1, "javajs.util.T3d"))) return false;
var t2=t1;
return (this.x == t2.x  && this.y == t2.y   && this.z == t2.z  );
});

Clazz.newMeth(C$, 'toString', function () {
return "{" + new Double(this.x).toString() + ", " + new Double(this.y).toString() + ", " + new Double(this.z).toString() + "}" ;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
