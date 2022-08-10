(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MGF1ParameterSpec", null, null, 'java.security.spec.AlgorithmParameterSpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['mdName']]
,['O',['SHA1','java.security.spec.MGF1ParameterSpec','+SHA224','+SHA256','+SHA384','+SHA512']]]

Clazz.newMeth(C$, 'c$$S',  function (mdName) {
;C$.$init$.apply(this);
if (mdName == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["digest algorithm is null"]);
}this.mdName=mdName;
}, 1);

Clazz.newMeth(C$, 'getDigestAlgorithm$',  function () {
return this.mdName;
});

C$.$static$=function(){C$.$static$=0;
C$.SHA1=Clazz.new_(C$.c$$S,["SHA-1"]);
C$.SHA224=Clazz.new_(C$.c$$S,["SHA-224"]);
C$.SHA256=Clazz.new_(C$.c$$S,["SHA-256"]);
C$.SHA384=Clazz.new_(C$.c$$S,["SHA-384"]);
C$.SHA512=Clazz.new_(C$.c$$S,["SHA-512"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:08 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
