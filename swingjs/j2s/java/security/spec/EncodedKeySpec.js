(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EncodedKeySpec", null, null, 'java.security.spec.KeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['encodedKey','byte[]']]]

Clazz.newMeth(C$, 'c$$BA',  function (encodedKey) {
;C$.$init$.apply(this);
this.encodedKey=encodedKey.clone$();
}, 1);

Clazz.newMeth(C$, 'getEncoded$',  function () {
return this.encodedKey.clone$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:08 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
