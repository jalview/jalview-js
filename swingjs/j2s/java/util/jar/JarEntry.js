(function(){var P$=Clazz.newPackage("java.util.jar"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JarEntry", null, 'java.util.zip.ZipEntry');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['attr','java.util.jar.Attributes','certs','java.security.cert.Certificate[]','signers','java.security.CodeSigner[]']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_zip_ZipEntry',  function (ze) {
;C$.superclazz.c$$java_util_zip_ZipEntry.apply(this,[ze]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_jar_JarEntry',  function (je) {
C$.c$$java_util_zip_ZipEntry.apply(this, [je]);
this.attr=je.attr;
this.certs=je.certs;
this.signers=je.signers;
}, 1);

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this.attr;
});

Clazz.newMeth(C$, 'getCertificates$',  function () {
return this.certs == null  ? null : this.certs.clone$();
});

Clazz.newMeth(C$, 'getCodeSigners$',  function () {
return this.signers == null  ? null : this.signers.clone$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:19 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
