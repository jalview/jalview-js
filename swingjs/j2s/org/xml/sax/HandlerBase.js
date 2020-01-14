(function(){var P$=Clazz.newPackage("org.xml.sax"),I$=[];
var C$=Clazz.newClass(P$, "HandlerBase", null, null, ['org.xml.sax.EntityResolver', 'org.xml.sax.DTDHandler', 'org.xml.sax.DocumentHandler', 'org.xml.sax.ErrorHandler']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['resolveEntity$S$S','resolveEntity$'], function (publicId, systemId) {
return null;
});

Clazz.newMeth(C$, 'notationDecl$S$S$S', function (name, publicId, systemId) {
});

Clazz.newMeth(C$, 'unparsedEntityDecl$S$S$S$S', function (name, publicId, systemId, notationName) {
});

Clazz.newMeth(C$, 'setDocumentLocator$org_xml_sax_Locator', function (locator) {
});

Clazz.newMeth(C$, 'startDocument$', function () {
});

Clazz.newMeth(C$, 'endDocument$', function () {
});

Clazz.newMeth(C$, 'startElement$S$org_xml_sax_AttributeList', function (name, attributes) {
});

Clazz.newMeth(C$, 'endElement$S', function (name) {
});

Clazz.newMeth(C$, 'characters$CA$I$I', function (ch, start, length) {
});

Clazz.newMeth(C$, 'ignorableWhitespace$CA$I$I', function (ch, start, length) {
});

Clazz.newMeth(C$, 'processingInstruction$S$S', function (target, data) {
});

Clazz.newMeth(C$, 'warning$org_xml_sax_SAXParseException', function (e) {
});

Clazz.newMeth(C$, 'error$org_xml_sax_SAXParseException', function (e) {
});

Clazz.newMeth(C$, 'fatalError$org_xml_sax_SAXParseException', function (e) {
throw e;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
