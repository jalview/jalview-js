(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
var C$=Clazz.newClass(P$, "V3d", null, 'javajs.util.T3d');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'cross$javajs_util_V3d$javajs_util_V3d', function (v1, v2) {
this.set$D$D$D(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
});

Clazz.newMeth(C$, 'normalize$', function () {
var d=this.length$();
this.x /= d;
this.y /= d;
this.z /= d;
});

Clazz.newMeth(C$, 'dot$javajs_util_V3d', function (v) {
return this.x * v.x + this.y * v.y + this.z * v.z;
});

Clazz.newMeth(C$, 'lengthSquared$', function () {
return this.x * this.x + this.y * this.y + this.z * this.z;
});

Clazz.newMeth(C$, 'length$', function () {
return Math.sqrt(this.lengthSquared$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
