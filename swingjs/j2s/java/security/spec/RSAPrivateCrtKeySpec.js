(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RSAPrivateCrtKeySpec", null, 'java.security.spec.RSAPrivateKeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['publicExponent','java.math.BigInteger','+primeP','+primeQ','+primeExponentP','+primeExponentQ','+crtCoefficient']]]

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger', function (modulus, publicExponent, privateExponent, primeP, primeQ, primeExponentP, primeExponentQ, crtCoefficient) {
;C$.superclazz.c$$java_math_BigInteger$java_math_BigInteger.apply(this,[modulus, privateExponent]);C$.$init$.apply(this);
this.publicExponent=publicExponent;
this.primeP=primeP;
this.primeQ=primeQ;
this.primeExponentP=primeExponentP;
this.primeExponentQ=primeExponentQ;
this.crtCoefficient=crtCoefficient;
}, 1);

Clazz.newMeth(C$, 'getPublicExponent$', function () {
return this.publicExponent;
});

Clazz.newMeth(C$, 'getPrimeP$', function () {
return this.primeP;
});

Clazz.newMeth(C$, 'getPrimeQ$', function () {
return this.primeQ;
});

Clazz.newMeth(C$, 'getPrimeExponentP$', function () {
return this.primeExponentP;
});

Clazz.newMeth(C$, 'getPrimeExponentQ$', function () {
return this.primeExponentQ;
});

Clazz.newMeth(C$, 'getCrtCoefficient$', function () {
return this.crtCoefficient;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:35 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
