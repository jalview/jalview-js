(function(){var P$=Clazz.newPackage("javax.xml.sax.helpers"),p$1={},I$=[[0,'javax.xml.sax.helpers.XMLReaderFactory',['javax.xml.sax.helpers.XMLReaderAdapter','.AttributesAdapter'],'javax.xml.sax.InputSource']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "XMLReaderAdapter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['javax.xml.sax.Parser', 'javax.xml.sax.ContentHandler']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.xmlReader=null;
this.documentHandler=null;
this.qAtts=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
p$1.setup$javax_xml_sax_XMLReader.apply(this, [$I$(1).createXMLReader$()]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_sax_XMLReader', function (xmlReader) {
C$.$init$.apply(this);
p$1.setup$javax_xml_sax_XMLReader.apply(this, [xmlReader]);
}, 1);

Clazz.newMeth(C$, 'setup$javax_xml_sax_XMLReader', function (xmlReader) {
if (xmlReader == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["XMLReader must not be null"]);
}this.xmlReader=xmlReader;
this.qAtts=Clazz.new_($I$(2), [this, null]);
}, p$1);

Clazz.newMeth(C$, 'setLocale$java_util_Locale', function (locale) {
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXNotSupportedException').c$$S,["setLocale not supported"]);
});

Clazz.newMeth(C$, 'setEntityResolver$javax_xml_sax_EntityResolver', function (resolver) {
this.xmlReader.setEntityResolver$javax_xml_sax_EntityResolver(resolver);
});

Clazz.newMeth(C$, 'setDTDHandler$javax_xml_sax_DTDHandler', function (handler) {
this.xmlReader.setDTDHandler$javax_xml_sax_DTDHandler(handler);
});

Clazz.newMeth(C$, 'setDocumentHandler$javax_xml_sax_DocumentHandler', function (handler) {
this.documentHandler=handler;
});

Clazz.newMeth(C$, 'setErrorHandler$javax_xml_sax_ErrorHandler', function (handler) {
this.xmlReader.setErrorHandler$javax_xml_sax_ErrorHandler(handler);
});

Clazz.newMeth(C$, 'parse$S', function (systemId) {
this.parse$javax_xml_sax_InputSource(Clazz.new_($I$(3).c$$S,[systemId]));
});

Clazz.newMeth(C$, 'parse$javax_xml_sax_InputSource', function (input) {
p$1.setupXMLReader.apply(this, []);
this.xmlReader.parse$javax_xml_sax_InputSource(input);
});

Clazz.newMeth(C$, 'setupXMLReader', function () {
this.xmlReader.setFeature$S$Z("http://xml.org/sax/features/namespace-prefixes", true);
try {
this.xmlReader.setFeature$S$Z("http://xml.org/sax/features/namespaces", false);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.sax.SAXException")){
} else {
throw e;
}
}
this.xmlReader.setContentHandler$javax_xml_sax_ContentHandler(this);
}, p$1);

Clazz.newMeth(C$, 'setDocumentLocator$javax_xml_sax_Locator', function (locator) {
if (this.documentHandler != null ) this.documentHandler.setDocumentLocator$javax_xml_sax_Locator(locator);
});

Clazz.newMeth(C$, 'startDocument$', function () {
if (this.documentHandler != null ) this.documentHandler.startDocument$();
});

Clazz.newMeth(C$, 'endDocument$', function () {
if (this.documentHandler != null ) this.documentHandler.endDocument$();
});

Clazz.newMeth(C$, 'startPrefixMapping$S$S', function (prefix, uri) {
});

Clazz.newMeth(C$, 'endPrefixMapping$S', function (prefix) {
});

Clazz.newMeth(C$, 'startElement$S$S$S$javax_xml_sax_Attributes', function (uri, localName, qName, atts) {
if (this.documentHandler != null ) {
this.qAtts.setAttributes$javax_xml_sax_Attributes(atts);
this.documentHandler.startElement$S$javax_xml_sax_AttributeList(qName, this.qAtts);
}});

Clazz.newMeth(C$, 'endElement$S$S$S', function (uri, localName, qName) {
if (this.documentHandler != null ) this.documentHandler.endElement$S(qName);
});

Clazz.newMeth(C$, 'characters$CA$I$I', function (ch, start, length) {
if (this.documentHandler != null ) this.documentHandler.characters$CA$I$I(ch, start, length);
});

Clazz.newMeth(C$, 'ignorableWhitespace$CA$I$I', function (ch, start, length) {
if (this.documentHandler != null ) this.documentHandler.ignorableWhitespace$CA$I$I(ch, start, length);
});

Clazz.newMeth(C$, 'processingInstruction$S$S', function (target, data) {
if (this.documentHandler != null ) this.documentHandler.processingInstruction$S$S(target, data);
});

Clazz.newMeth(C$, 'skippedEntity$S', function (name) {
});
;
(function(){var C$=Clazz.newClass(P$.XMLReaderAdapter, "AttributesAdapter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.xml.sax.AttributeList');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.attributes=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setAttributes$javax_xml_sax_Attributes', function (attributes) {
this.attributes=attributes;
});

Clazz.newMeth(C$, 'getLength$', function () {
return this.attributes.getLength$();
});

Clazz.newMeth(C$, 'getName$I', function (i) {
return this.attributes.getQName$I(i);
});

Clazz.newMeth(C$, 'getType$I', function (i) {
return this.attributes.getType$I(i);
});

Clazz.newMeth(C$, 'getValue$I', function (i) {
return this.attributes.getValue$I(i);
});

Clazz.newMeth(C$, 'getType$S', function (qName) {
return this.attributes.getType$S(qName);
});

Clazz.newMeth(C$, 'getValue$S', function (qName) {
return this.attributes.getValue$S(qName);
});
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:30 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
