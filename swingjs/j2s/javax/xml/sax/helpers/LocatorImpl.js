(function(){var P$=Clazz.newPackage("javax.xml.sax.helpers"),I$=[];
var C$=Clazz.newClass(P$, "LocatorImpl", null, null, 'javax.xml.sax.Locator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.publicId=null;
this.systemId=null;
this.lineNumber=0;
this.columnNumber=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_sax_Locator', function (locator) {
C$.$init$.apply(this);
this.setPublicId$S(locator.getPublicId$());
this.setSystemId$S(locator.getSystemId$());
this.setLineNumber$I(locator.getLineNumber$());
this.setColumnNumber$I(locator.getColumnNumber$());
}, 1);

Clazz.newMeth(C$, 'getPublicId$', function () {
return this.publicId;
});

Clazz.newMeth(C$, 'getSystemId$', function () {
return this.systemId;
});

Clazz.newMeth(C$, 'getLineNumber$', function () {
return this.lineNumber;
});

Clazz.newMeth(C$, 'getColumnNumber$', function () {
return this.columnNumber;
});

Clazz.newMeth(C$, 'setPublicId$S', function (publicId) {
this.publicId=publicId;
});

Clazz.newMeth(C$, 'setSystemId$S', function (systemId) {
this.systemId=systemId;
});

Clazz.newMeth(C$, 'setLineNumber$I', function (lineNumber) {
this.lineNumber=lineNumber;
});

Clazz.newMeth(C$, 'setColumnNumber$I', function (columnNumber) {
this.columnNumber=columnNumber;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:30 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
