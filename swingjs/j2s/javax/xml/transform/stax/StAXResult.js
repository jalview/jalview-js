(function(){var P$=Clazz.newPackage("javax.xml.transform.stax"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "StAXResult", null, null, 'javax.xml.transform.Result');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.xmlEventWriter=null;
this.xmlStreamWriter=null;
this.systemId=null;
},1);

C$.$fields$=[['S',['systemId'],'O',['xmlEventWriter','javax.xml.stream.XMLEventWriter','xmlStreamWriter','javax.xml.stream.XMLStreamWriter']]]

Clazz.newMeth(C$, 'c$$javax_xml_stream_XMLEventWriter',  function (xmlEventWriter) {
;C$.$init$.apply(this);
if (xmlEventWriter == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["StAXResult(XMLEventWriter) with XMLEventWriter == null"]);
}this.xmlEventWriter=xmlEventWriter;
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_stream_XMLStreamWriter',  function (xmlStreamWriter) {
;C$.$init$.apply(this);
if (xmlStreamWriter == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["StAXResult(XMLStreamWriter) with XMLStreamWriter == null"]);
}this.xmlStreamWriter=xmlStreamWriter;
}, 1);

Clazz.newMeth(C$, 'getXMLEventWriter$',  function () {
return this.xmlEventWriter;
});

Clazz.newMeth(C$, 'getXMLStreamWriter$',  function () {
return this.xmlStreamWriter;
});

Clazz.newMeth(C$, 'setSystemId$S',  function (systemId) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["StAXResult#setSystemId(systemId) cannot set the system identifier for a StAXResult"]);
});

Clazz.newMeth(C$, 'getSystemId$',  function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:57 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
