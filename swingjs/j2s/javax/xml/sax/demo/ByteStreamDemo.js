(function(){var P$=Clazz.newPackage("javax.xml.sax.demo"),I$=[[0,'javax.xml.sax.helpers.ParserFactory','javax.xml.sax.demo.DemoHandler','java.io.FileInputStream','javax.xml.sax.InputSource']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ByteStreamDemo");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var parser;
var source;
var handler;
var input;
if (args.length != 1) {
System.err.println$S("Usage: java -Djavax.xml.sax.parser=<classname> SystemIdDemo <document>");
System.exit$I(2);
}parser=$I$(1).makeParser$();
handler=Clazz.new_($I$(2));
parser.setEntityResolver$javax_xml_sax_EntityResolver(handler);
parser.setDTDHandler$javax_xml_sax_DTDHandler(handler);
parser.setDocumentHandler$javax_xml_sax_DocumentHandler(handler);
parser.setErrorHandler$javax_xml_sax_ErrorHandler(handler);
input=Clazz.new_($I$(3).c$$S,[args[0]]);
source=Clazz.new_($I$(4).c$$java_io_InputStream,[input]);
source.setSystemId$S(args[0]);
parser.parse$javax_xml_sax_InputSource(source);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:30 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
