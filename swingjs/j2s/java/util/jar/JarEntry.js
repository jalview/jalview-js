(function(){var P$=Clazz.newPackage("java.util.jar"),I$=[];
var C$=Clazz.newClass(P$, "JarEntry", null, 'java.util.zip.ZipEntry');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.attr=null;
this.certs=null;
this.signers=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_zip_ZipEntry', function (ze) {
C$.superclazz.c$$java_util_zip_ZipEntry.apply(this, [ze]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_jar_JarEntry', function (je) {
C$.c$$java_util_zip_ZipEntry.apply(this, [je]);
this.attr=je.attr;
this.certs=je.certs;
this.signers=je.signers;
}, 1);

Clazz.newMeth(C$, 'getAttributes$', function () {
return this.attr;
});

Clazz.newMeth(C$, 'getCertificates$', function () {
return this.certs == null  ? null : this.certs.clone$();
});

Clazz.newMeth(C$, 'getCodeSigners$', function () {
return this.signers == null  ? null : this.signers.clone$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
