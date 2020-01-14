(function(){var P$=Clazz.newPackage("org.xml.sax.demo"),I$=[[0,'java.io.StringReader','org.xml.sax.helpers.ParserFactory','org.xml.sax.InputSource','java.net.URL']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EntityDemo", null, 'org.xml.sax.demo.DemoHandler');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.reader=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.reader=Clazz.new_($I$(1).c$$S,["Entity resolution works!"]);
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var parser;
var handler;
if (args.length != 1) {
System.err.println$S("Usage: java -Dorg.xml.sax.parser=<classname> EntityDemo <document>");
System.exit$I(2);
}parser=$I$(2).makeParser$();
handler=Clazz.new_(C$);
parser.setEntityResolver$org_xml_sax_EntityResolver(handler);
parser.setDTDHandler$org_xml_sax_DTDHandler(handler);
parser.setDocumentHandler$org_xml_sax_DocumentHandler(handler);
parser.setErrorHandler$org_xml_sax_ErrorHandler(handler);
parser.parse$S(C$.makeAbsoluteURL$S(args[0]));
}, 1);

Clazz.newMeth(C$, ['resolveEntity$S$S','resolveEntity$'], function (publicId, systemId) {
if (publicId != null  && publicId.equals$O("-//megginson//TEXT Sample Entity//EN") ) {
return Clazz.new_($I$(3).c$$java_io_Reader,[this.reader]);
} else {
return null;
}});

Clazz.newMeth(C$, 'makeAbsoluteURL$S', function (url) {
var baseURL;
var currentDirectory=System.getProperty$S("user.dir");
var fileSep=System.getProperty$S("file.separator");
var file=currentDirectory.replace$C$C(fileSep.charAt$I(0), "/") + '/';
if (file.charAt$I(0) != "/") {
file="/" + file;
}baseURL=Clazz.new_($I$(4).c$$S$S$S,["file", null, file]);
return Clazz.new_($I$(4).c$$java_net_URL$S,[baseURL, url]).toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
