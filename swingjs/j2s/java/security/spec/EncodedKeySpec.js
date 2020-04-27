(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EncodedKeySpec", null, null, 'java.security.spec.KeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['encodedKey','byte[]']]]

Clazz.newMeth(C$, 'c$$BA', function (encodedKey) {
;C$.$init$.apply(this);
this.encodedKey=encodedKey.clone$();
}, 1);

Clazz.newMeth(C$, 'getEncoded$', function () {
return this.encodedKey.clone$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:35 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
