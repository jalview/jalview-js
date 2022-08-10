(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RSAMultiPrimePrivateCrtKeySpec", null, 'java.security.spec.RSAPrivateKeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['publicExponent','java.math.BigInteger','+primeP','+primeQ','+primeExponentP','+primeExponentQ','+crtCoefficient','otherPrimeInfo','java.security.spec.RSAOtherPrimeInfo[]']]]

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_security_spec_RSAOtherPrimeInfoA',  function (modulus, publicExponent, privateExponent, primeP, primeQ, primeExponentP, primeExponentQ, crtCoefficient, otherPrimeInfo) {
;C$.superclazz.c$$java_math_BigInteger$java_math_BigInteger.apply(this,[modulus, privateExponent]);C$.$init$.apply(this);
if (modulus == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the modulus parameter must be non-null"]);
}if (publicExponent == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the publicExponent parameter must be non-null"]);
}if (privateExponent == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the privateExponent parameter must be non-null"]);
}if (primeP == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the primeP parameter must be non-null"]);
}if (primeQ == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the primeQ parameter must be non-null"]);
}if (primeExponentP == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the primeExponentP parameter must be non-null"]);
}if (primeExponentQ == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the primeExponentQ parameter must be non-null"]);
}if (crtCoefficient == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the crtCoefficient parameter must be non-null"]);
}this.publicExponent=publicExponent;
this.primeP=primeP;
this.primeQ=primeQ;
this.primeExponentP=primeExponentP;
this.primeExponentQ=primeExponentQ;
this.crtCoefficient=crtCoefficient;
if (otherPrimeInfo == null ) {
this.otherPrimeInfo=null;
} else if (otherPrimeInfo.length == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["the otherPrimeInfo parameter must not be empty"]);
} else {
this.otherPrimeInfo=otherPrimeInfo.clone$();
}}, 1);

Clazz.newMeth(C$, 'getPublicExponent$',  function () {
return this.publicExponent;
});

Clazz.newMeth(C$, 'getPrimeP$',  function () {
return this.primeP;
});

Clazz.newMeth(C$, 'getPrimeQ$',  function () {
return this.primeQ;
});

Clazz.newMeth(C$, 'getPrimeExponentP$',  function () {
return this.primeExponentP;
});

Clazz.newMeth(C$, 'getPrimeExponentQ$',  function () {
return this.primeExponentQ;
});

Clazz.newMeth(C$, 'getCrtCoefficient$',  function () {
return this.crtCoefficient;
});

Clazz.newMeth(C$, 'getOtherPrimeInfo$',  function () {
if (this.otherPrimeInfo == null ) return null;
return this.otherPrimeInfo.clone$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:08 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
