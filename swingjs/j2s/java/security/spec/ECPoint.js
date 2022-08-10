(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ECPoint");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['x','java.math.BigInteger','+y']]
,['O',['POINT_INFINITY','java.security.spec.ECPoint']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.x=null;
this.y=null;
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_math_BigInteger',  function (x, y) {
;C$.$init$.apply(this);
if ((x == null ) || (y == null ) ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["affine coordinate x or y is null"]);
}this.x=x;
this.y=y;
}, 1);

Clazz.newMeth(C$, 'getAffineX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getAffineY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) return true;
if (this === C$.POINT_INFINITY ) return false;
if (Clazz.instanceOf(obj, "java.security.spec.ECPoint")) {
return ((this.x.equals$O((obj).x)) && (this.y.equals$O((obj).y)) );
}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this === C$.POINT_INFINITY ) return 0;
return this.x.hashCode$() << 5 + this.y.hashCode$();
});

C$.$static$=function(){C$.$static$=0;
C$.POINT_INFINITY=Clazz.new_(C$);
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:08 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
