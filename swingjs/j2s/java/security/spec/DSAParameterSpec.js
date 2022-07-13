(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DSAParameterSpec", null, null, ['java.security.spec.AlgorithmParameterSpec', 'java.security.interfaces.DSAParams']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['p','java.math.BigInteger','+q','+g']]]

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger',  function (p, q, g) {
;C$.$init$.apply(this);
this.p=p;
this.q=q;
this.g=g;
}, 1);

Clazz.newMeth(C$, 'getP$',  function () {
return this.p;
});

Clazz.newMeth(C$, 'getQ$',  function () {
return this.q;
});

Clazz.newMeth(C$, 'getG$',  function () {
return this.g;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:08 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
