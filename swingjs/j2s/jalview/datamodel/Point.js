(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "Point");

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

Clazz.newMeth(C$, 'c$$F$F$F', function (xVal, yVal, zVal) {
C$.$init$.apply(this);
this.x=xVal;
this.y=yVal;
this.z=zVal;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("[%f, %f, %f]", [new Float(this.x), new Float(this.y), new Float(this.z)]);
});

Clazz.newMeth(C$, 'hashCode$', function () {
var prime=31;
var result=1;
result=31 * result + Float.floatToIntBits$F(this.x);
result=31 * result + Float.floatToIntBits$F(this.y);
result=31 * result + Float.floatToIntBits$F(this.z);
return result;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (obj == null ) {
return false;
}if (this.getClass$() !== obj.getClass$() ) {
return false;
}var other=obj;
if (Float.floatToIntBits$F(this.x) != Float.floatToIntBits$F(other.x)) {
return false;
}if (Float.floatToIntBits$F(this.y) != Float.floatToIntBits$F(other.y)) {
return false;
}if (Float.floatToIntBits$F(this.z) != Float.floatToIntBits$F(other.z)) {
return false;
}return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
