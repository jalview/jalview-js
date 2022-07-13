(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xml"),I$=[[0,'org.xml.sax.InputSource','org.jmol.util.Logger']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XmlHandler", null, 'org.xml.sax.helpers.DefaultHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.debugContext="";
},1);

C$.$fields$=[['S',['debugContext'],'O',['xmlReader','org.jmol.adapter.readers.xml.XmlReader']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'parseXML$org_jmol_adapter_readers_xml_XmlReader$O$java_io_BufferedReader', function (xmlReader, saxReaderObj, reader) {
this.xmlReader=xmlReader;
var saxReader=saxReaderObj;
saxReader.setFeature$S$Z("http://xml.org/sax/features/validation", false);
saxReader.setFeature$S$Z("http://xml.org/sax/features/namespaces", true);
saxReader.setEntityResolver$org_xml_sax_EntityResolver(this);
saxReader.setContentHandler$org_xml_sax_ContentHandler(this);
saxReader.setErrorHandler$org_xml_sax_ErrorHandler(this);
var is=Clazz.new_($I$(1,1).c$$java_io_Reader,[reader]);
is.setSystemId$S("foo");
saxReader.parse$org_xml_sax_InputSource(is);
});

Clazz.newMeth(C$, 'startDocument$', function () {
});

Clazz.newMeth(C$, 'endDocument$', function () {
this.xmlReader.endDocument$();
});

Clazz.newMeth(C$, 'startElement$S$S$S$org_xml_sax_Attributes', function (namespaceURI, localName, nodeName, attributes) {
this.xmlReader.atts.clear$();
for (var i=attributes.getLength$(); --i >= 0; ) this.xmlReader.atts.put$O$O(attributes.getLocalName$I(i).toLowerCase$(), attributes.getValue$I(i));

if ($I$(2).debugging) {
this.debugContext += " " + localName;
$I$(2).debug$S("start " + this.debugContext);
}this.xmlReader.processStartElement$S$S(localName.toLowerCase$(), nodeName.toLowerCase$());
});

Clazz.newMeth(C$, 'endElement$S$S$S', function (uri, localName, qName) {
if ($I$(2).debugging) {
if ($I$(2).debugging) {
$I$(2).debug$S("end " + this.debugContext);
}this.debugContext=this.debugContext.substring$I$I(0, this.debugContext.lastIndexOf$S(" "));
}this.xmlReader.processEndElement$S(localName.toLowerCase$());
});

Clazz.newMeth(C$, 'characters$CA$I$I', function (ch, start, length) {
if (this.xmlReader.keepChars) this.xmlReader.chars.appendCB$CA$I$I(ch, start, length);
});

Clazz.newMeth(C$, 'resolveEntity$S$S$S$S', function (name, publicId, baseURI, systemId) {
if ($I$(2).debugging) {
$I$(2).debug$S("Not resolving this:\n      name: " + name + "\n  systemID: " + systemId + "\n  publicID: " + publicId + "\n   baseURI: " + baseURI );
}return null;
});

Clazz.newMeth(C$, 'error$org_xml_sax_SAXParseException', function (exception) {
$I$(2,"error$S",["SAX ERROR:" + exception.getMessage$()]);
});

Clazz.newMeth(C$, 'fatalError$org_xml_sax_SAXParseException', function (exception) {
$I$(2,"error$S",["SAX FATAL:" + exception.getMessage$()]);
});

Clazz.newMeth(C$, 'warning$org_xml_sax_SAXParseException', function (exception) {
$I$(2,"warn$S",["SAX WARNING:" + exception.getMessage$()]);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:27 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
