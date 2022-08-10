(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Point");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['x','y','z']]]

Clazz.newMeth(C$, 'c$$F$F$F',  function (xVal, yVal, zVal) {
;C$.$init$.apply(this);
this.x=xVal;
this.y=yVal;
this.z=zVal;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return String.format$S$OA("[%f, %f, %f]", Clazz.array(java.lang.Object, -1, [Float.valueOf$F(this.x), Float.valueOf$F(this.y), Float.valueOf$F(this.z)]));
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var prime=31;
var result=1;
result=31 * result + Float.floatToIntBits$F(this.x);
result=31 * result + Float.floatToIntBits$F(this.y);
result=31 * result + Float.floatToIntBits$F(this.z);
return result;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
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
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
