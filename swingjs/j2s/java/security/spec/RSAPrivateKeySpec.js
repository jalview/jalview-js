(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RSAPrivateKeySpec", null, null, 'java.security.spec.KeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['modulus','java.math.BigInteger','+privateExponent']]]

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_math_BigInteger', function (modulus, privateExponent) {
;C$.$init$.apply(this);
this.modulus=modulus;
this.privateExponent=privateExponent;
}, 1);

Clazz.newMeth(C$, 'getModulus$', function () {
return this.modulus;
});

Clazz.newMeth(C$, 'getPrivateExponent$', function () {
return this.privateExponent;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:35 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
