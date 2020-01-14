(function(){var P$=Clazz.newPackage("javax.xml.bind.helpers"),p$1={},I$=[[0,'javax.xml.bind.helpers.DefaultValidationEventHandler','javax.xml.transform.stream.StreamResult','java.io.BufferedOutputStream','java.io.FileOutputStream','javax.xml.transform.sax.SAXResult','javax.xml.transform.dom.DOMResult','Boolean','javax.xml.bind.helpers.Messages']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractMarshallerImpl", null, null, 'javax.xml.bind.Marshaller');
C$.aliases=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.aliases=Clazz.array(String, -1, ["UTF-8", "UTF8", "UTF-16", "Unicode", "UTF-16BE", "UnicodeBigUnmarked", "UTF-16LE", "UnicodeLittleUnmarked", "US-ASCII", "ASCII", "TIS-620", "TIS620", "ISO-10646-UCS-2", "Unicode", "EBCDIC-CP-US", "cp037", "EBCDIC-CP-CA", "cp037", "EBCDIC-CP-NL", "cp037", "EBCDIC-CP-WT", "cp037", "EBCDIC-CP-DK", "cp277", "EBCDIC-CP-NO", "cp277", "EBCDIC-CP-FI", "cp278", "EBCDIC-CP-SE", "cp278", "EBCDIC-CP-IT", "cp280", "EBCDIC-CP-ES", "cp284", "EBCDIC-CP-GB", "cp285", "EBCDIC-CP-FR", "cp297", "EBCDIC-CP-AR1", "cp420", "EBCDIC-CP-HE", "cp424", "EBCDIC-CP-BE", "cp500", "EBCDIC-CP-CH", "cp500", "EBCDIC-CP-ROECE", "cp870", "EBCDIC-CP-YU", "cp870", "EBCDIC-CP-IS", "cp871", "EBCDIC-CP-AR2", "cp918"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.eventHandler=null;
this.encoding=null;
this.schemaLocation=null;
this.noNSSchemaLocation=null;
this.formattedOutput=false;
this.fragment=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.eventHandler=Clazz.new_($I$(1));
this.encoding="UTF-8";
this.schemaLocation=null;
this.noNSSchemaLocation=null;
this.formattedOutput=false;
this.fragment=false;
}, 1);

Clazz.newMeth(C$, 'marshal$O$java_io_OutputStream', function (obj, os) {
p$1.checkNotNull$O$S$O$S.apply(this, [obj, "obj", os, "os"]);
this.marshal$O$javax_xml_transform_Result(obj, Clazz.new_($I$(2).c$$java_io_OutputStream,[os]));
});

Clazz.newMeth(C$, 'marshal$O$java_io_File', function (jaxbElement, output) {
p$1.checkNotNull$O$S$O$S.apply(this, [jaxbElement, "jaxbElement", output, "output"]);
try {
var os=Clazz.new_($I$(3).c$$java_io_OutputStream,[Clazz.new_($I$(4).c$$java_io_File,[output])]);
try {
this.marshal$O$javax_xml_transform_Result(jaxbElement, Clazz.new_($I$(2).c$$java_io_OutputStream,[os]));
} finally {
os.close$();
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'marshal$O$java_io_Writer', function (obj, w) {
p$1.checkNotNull$O$S$O$S.apply(this, [obj, "obj", w, "writer"]);
this.marshal$O$javax_xml_transform_Result(obj, Clazz.new_($I$(2).c$$java_io_Writer,[w]));
});

Clazz.newMeth(C$, 'marshal$O$org_xml_sax_ContentHandler', function (obj, handler) {
p$1.checkNotNull$O$S$O$S.apply(this, [obj, "obj", handler, "handler"]);
this.marshal$O$javax_xml_transform_Result(obj, Clazz.new_($I$(5).c$$org_xml_sax_ContentHandler,[handler]));
});

Clazz.newMeth(C$, 'marshal$O$org_w3c_dom_Node', function (obj, node) {
p$1.checkNotNull$O$S$O$S.apply(this, [obj, "obj", node, "node"]);
this.marshal$O$javax_xml_transform_Result(obj, Clazz.new_($I$(6).c$$org_w3c_dom_Node,[node]));
});

Clazz.newMeth(C$, 'getNode$O', function (obj) {
p$1.checkNotNull$O$S$O$S.apply(this, [obj, "obj", $I$(7).TRUE, "foo"]);
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getEncoding$', function () {
return this.encoding;
});

Clazz.newMeth(C$, 'setEncoding$S', function (encoding) {
this.encoding=encoding;
});

Clazz.newMeth(C$, 'getSchemaLocation$', function () {
return this.schemaLocation;
});

Clazz.newMeth(C$, 'setSchemaLocation$S', function (location) {
this.schemaLocation=location;
});

Clazz.newMeth(C$, 'getNoNSSchemaLocation$', function () {
return this.noNSSchemaLocation;
});

Clazz.newMeth(C$, 'setNoNSSchemaLocation$S', function (location) {
this.noNSSchemaLocation=location;
});

Clazz.newMeth(C$, 'isFormattedOutput$', function () {
return this.formattedOutput;
});

Clazz.newMeth(C$, 'setFormattedOutput$Z', function (v) {
this.formattedOutput=v;
});

Clazz.newMeth(C$, 'isFragment$', function () {
return this.fragment;
});

Clazz.newMeth(C$, 'setFragment$Z', function (v) {
this.fragment=v;
});

Clazz.newMeth(C$, 'getJavaEncoding$S', function (encoding) {
try {
"1".getBytes$S(encoding);
return encoding;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
for (var i=0; i < C$.aliases.length; i+=2) {
if (encoding.equals$O(C$.aliases[i])) {
"1".getBytes$S(C$.aliases[i + 1]);
return C$.aliases[i + 1];
}}
throw Clazz.new_(Clazz.load('java.io.UnsupportedEncodingException').c$$S,[encoding]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setProperty$S$O', function (name, value) {
if (name == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(8).format$S$O("Shared.MustNotBeNull", "name")]);
}if ("jaxb.encoding".equals$O(name)) {
p$1.checkString$S$O.apply(this, [name, value]);
this.setEncoding$S(value);
return;
}if ("jaxb.formatted.output".equals$O(name)) {
p$1.checkBoolean$S$O.apply(this, [name, value]);
this.setFormattedOutput$Z((value).booleanValue$());
return;
}if ("jaxb.noNamespaceSchemaLocation".equals$O(name)) {
p$1.checkString$S$O.apply(this, [name, value]);
this.setNoNSSchemaLocation$S(value);
return;
}if ("jaxb.schemaLocation".equals$O(name)) {
p$1.checkString$S$O.apply(this, [name, value]);
this.setSchemaLocation$S(value);
return;
}if ("jaxb.fragment".equals$O(name)) {
p$1.checkBoolean$S$O.apply(this, [name, value]);
this.setFragment$Z((value).booleanValue$());
return;
}throw Clazz.new_(Clazz.load('javax.xml.bind.PropertyException').c$$S$O,[name, value]);
});

Clazz.newMeth(C$, 'getProperty$S', function (name) {
if (name == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(8).format$S$O("Shared.MustNotBeNull", "name")]);
}if ("jaxb.encoding".equals$O(name)) return this.getEncoding$();
if ("jaxb.formatted.output".equals$O(name)) return this.isFormattedOutput$() ? $I$(7).TRUE : $I$(7).FALSE;
if ("jaxb.noNamespaceSchemaLocation".equals$O(name)) return this.getNoNSSchemaLocation$();
if ("jaxb.schemaLocation".equals$O(name)) return this.getSchemaLocation$();
if ("jaxb.fragment".equals$O(name)) return this.isFragment$() ? $I$(7).TRUE : $I$(7).FALSE;
throw Clazz.new_(Clazz.load('javax.xml.bind.PropertyException').c$$S,[name]);
});

Clazz.newMeth(C$, 'getEventHandler$', function () {
return this.eventHandler;
});

Clazz.newMeth(C$, 'setEventHandler$javax_xml_bind_ValidationEventHandler', function (handler) {
if (handler == null ) {
this.eventHandler=Clazz.new_($I$(1));
} else {
this.eventHandler=handler;
}});

Clazz.newMeth(C$, 'checkBoolean$S$O', function (name, value) {
if (!(Clazz.instanceOf(value, "java.lang.Boolean"))) throw Clazz.new_(Clazz.load('javax.xml.bind.PropertyException').c$$S,[$I$(8).format$S$O("AbstractMarshallerImpl.MustBeBoolean", name)]);
}, p$1);

Clazz.newMeth(C$, 'checkString$S$O', function (name, value) {
if (!(Clazz.instanceOf(value, "java.lang.String"))) throw Clazz.new_(Clazz.load('javax.xml.bind.PropertyException').c$$S,[$I$(8).format$S$O("AbstractMarshallerImpl.MustBeString", name)]);
}, p$1);

Clazz.newMeth(C$, 'checkNotNull$O$S$O$S', function (o1, o1Name, o2, o2Name) {
if (o1 == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(8).format$S$O("Shared.MustNotBeNull", o1Name)]);
}if (o2 == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(8).format$S$O("Shared.MustNotBeNull", o2Name)]);
}}, p$1);

Clazz.newMeth(C$, 'marshal$O$javax_xml_stream_XMLEventWriter', function (obj, writer) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'marshal$O$javax_xml_stream_XMLStreamWriter', function (obj, writer) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setSchema$javax_xml_validation_Schema', function (schema) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getSchema$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setAdapter$javax_xml_bind_annotation_adapters_XmlAdapter', function (adapter) {
if (adapter == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.setAdapter$Class$TA(adapter.getClass$(), adapter);
});

Clazz.newMeth(C$, 'setAdapter$Class$TA', function (type, adapter) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getAdapter$Class', function (type) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setAttachmentMarshaller$javax_xml_bind_attachment_AttachmentMarshaller', function (am) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getAttachmentMarshaller$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setListener$javax_xml_bind_Marshaller_Listener', function (listener) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getListener$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:29 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
