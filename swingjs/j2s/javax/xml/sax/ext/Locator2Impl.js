(function(){var P$=Clazz.newPackage("javax.xml.sax.ext"),I$=[];
var C$=Clazz.newClass(P$, "Locator2Impl", null, 'javax.xml.sax.helpers.LocatorImpl', 'javax.xml.sax.ext.Locator2');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.encoding=null;
this.version=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_sax_Locator', function (locator) {
C$.superclazz.c$$javax_xml_sax_Locator.apply(this, [locator]);
C$.$init$.apply(this);
if (Clazz.instanceOf(locator, "javax.xml.sax.ext.Locator2")) {
var l2=locator;
this.version=l2.getXMLVersion$();
this.encoding=l2.getEncoding$();
}}, 1);

Clazz.newMeth(C$, 'getXMLVersion$', function () {
return this.version;
});

Clazz.newMeth(C$, 'getEncoding$', function () {
return this.encoding;
});

Clazz.newMeth(C$, 'setXMLVersion$S', function (version) {
this.version=version;
});

Clazz.newMeth(C$, 'setEncoding$S', function (encoding) {
this.encoding=encoding;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:30 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
