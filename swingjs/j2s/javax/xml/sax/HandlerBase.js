(function(){var P$=Clazz.newPackage("javax.xml.sax"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "HandlerBase", null, null, ['javax.xml.sax.EntityResolver', 'javax.xml.sax.DTDHandler', 'javax.xml.sax.DocumentHandler', 'javax.xml.sax.ErrorHandler']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'resolveEntity$S$S',  function (publicId, systemId) {
return null;
});

Clazz.newMeth(C$, 'notationDecl$S$S$S',  function (name, publicId, systemId) {
});

Clazz.newMeth(C$, 'unparsedEntityDecl$S$S$S$S',  function (name, publicId, systemId, notationName) {
});

Clazz.newMeth(C$, 'setDocumentLocator$javax_xml_sax_Locator',  function (locator) {
});

Clazz.newMeth(C$, 'startDocument$',  function () {
});

Clazz.newMeth(C$, 'endDocument$',  function () {
});

Clazz.newMeth(C$, 'startElement$S$javax_xml_sax_AttributeList',  function (name, attributes) {
});

Clazz.newMeth(C$, 'endElement$S',  function (name) {
});

Clazz.newMeth(C$, 'characters$CA$I$I',  function (ch, start, length) {
});

Clazz.newMeth(C$, 'ignorableWhitespace$CA$I$I',  function (ch, start, length) {
});

Clazz.newMeth(C$, 'processingInstruction$S$S',  function (target, data) {
});

Clazz.newMeth(C$, 'warning$javax_xml_sax_SAXParseException',  function (e) {
});

Clazz.newMeth(C$, 'error$javax_xml_sax_SAXParseException',  function (e) {
});

Clazz.newMeth(C$, 'fatalError$javax_xml_sax_SAXParseException',  function (e) {
throw e;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:56 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
