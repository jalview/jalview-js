(function(){var P$=Clazz.newPackage("java.util.jar"),I$=[];
var C$=Clazz.newClass(P$, "JavaUtilJarAccessImpl");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'jarFileHasClassPathAttribute$java_util_jar_JarFile', function (jar) {
return jar.hasClassPathAttribute$();
});

Clazz.newMeth(C$, 'getCodeSources$java_util_jar_JarFile$java_net_URL', function (jar, url) {
return jar.getCodeSources$java_net_URL(url);
});

Clazz.newMeth(C$, 'getCodeSource$java_util_jar_JarFile$java_net_URL$S', function (jar, url, name) {
return null;
});

Clazz.newMeth(C$, 'entryNames$java_util_jar_JarFile$java_security_CodeSourceA', function (jar, cs) {
return jar.unsignedEntryNames$();
});

Clazz.newMeth(C$, 'entries2$java_util_jar_JarFile', function (jar) {
return jar.entries2$();
});

Clazz.newMeth(C$, 'setEagerValidation$java_util_jar_JarFile$Z', function (jar, eager) {
});

Clazz.newMeth(C$, 'getManifestDigests$java_util_jar_JarFile', function (jar) {
return jar.getManifestDigests$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
