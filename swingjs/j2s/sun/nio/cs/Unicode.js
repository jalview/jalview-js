(function(){var P$=Clazz.newPackage("sun.nio.cs"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Unicode", null, 'java.nio.charset.Charset', 'sun.nio.cs.HistoricallyNamedCharset');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$SA',  function (name, aliases) {
;C$.superclazz.c$$S$SA.apply(this,[name, aliases]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'contains$java_nio_charset_Charset',  function (cs) {
return ((Clazz.instanceOf(cs, "sun.nio.cs.US_ASCII")) || (Clazz.instanceOf(cs, "sun.nio.cs.ISO_8859_1")) || (Clazz.instanceOf(cs, "sun.nio.cs.UTF_8")) || (Clazz.instanceOf(cs, "sun.nio.cs.UTF_16")) || (Clazz.instanceOf(cs, "sun.nio.cs.UTF_16BE")) || (Clazz.instanceOf(cs, "sun.nio.cs.UTF_16LE")) || (Clazz.instanceOf(cs, "sun.nio.cs.UTF_16LE_BOM")) || (cs.name$().equals$O("CESU-8"))  );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:07 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
