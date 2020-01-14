(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,'javax.xml.bind.JAXBContext',['javax.xml.bind.JAXB','.Cache'],'java.lang.ref.WeakReference','javax.xml.transform.stream.StreamSource','java.net.URI','java.io.File','javax.xml.bind.annotation.XmlRootElement','javax.xml.bind.JAXBElement','javax.xml.namespace.QName','java.beans.Introspector','javax.xml.transform.stream.StreamResult']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JAXB", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.cache=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getContext$Class', function (type) {
var c=C$.cache;
if (c != null ) {
var d=c.get$();
if (d != null  && d.type === type  ) return d.context;
}var d=Clazz.new_($I$(2).c$$Class,[type]);
C$.cache=Clazz.new_($I$(3).c$$TT,[d]);
return d.context;
}, 1);

Clazz.newMeth(C$, 'unmarshal$java_io_File$Class', function (xml, type) {
try {
var item=C$.getContext$Class(type).createUnmarshaller$().unmarshal$javax_xml_transform_Source$Class(Clazz.new_($I$(4).c$$java_io_File,[xml]), type);
return item.getValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.bind.JAXBException")){
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'unmarshal$java_net_URL$Class', function (xml, type) {
try {
var item=C$.getContext$Class(type).createUnmarshaller$().unmarshal$javax_xml_transform_Source$Class(C$.toSource$O(xml), type);
return item.getValue$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'unmarshal$java_net_URI$Class', function (xml, type) {
try {
var item=C$.getContext$Class(type).createUnmarshaller$().unmarshal$javax_xml_transform_Source$Class(C$.toSource$O(xml), type);
return item.getValue$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'unmarshal$S$Class', function (xml, type) {
try {
var item=C$.getContext$Class(type).createUnmarshaller$().unmarshal$javax_xml_transform_Source$Class(C$.toSource$O(xml), type);
return item.getValue$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'unmarshal$java_io_InputStream$Class', function (xml, type) {
try {
var item=C$.getContext$Class(type).createUnmarshaller$().unmarshal$javax_xml_transform_Source$Class(C$.toSource$O(xml), type);
return item.getValue$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'unmarshal$java_io_Reader$Class', function (xml, type) {
try {
var item=C$.getContext$Class(type).createUnmarshaller$().unmarshal$javax_xml_transform_Source$Class(C$.toSource$O(xml), type);
return item.getValue$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'unmarshal$javax_xml_transform_Source$Class', function (xml, type) {
try {
var item=C$.getContext$Class(type).createUnmarshaller$().unmarshal$javax_xml_transform_Source$Class(C$.toSource$O(xml), type);
return item.getValue$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'toSource$O', function (xml) {
if (xml == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["no XML is given"]);
if (Clazz.instanceOf(xml, "java.lang.String")) {
try {
xml=Clazz.new_($I$(5).c$$S,[xml]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
xml=Clazz.new_($I$(6).c$$S,[xml]);
} else {
throw e;
}
}
}if (Clazz.instanceOf(xml, "java.io.File")) {
var file=xml;
return Clazz.new_($I$(4).c$$java_io_File,[file]);
}if (Clazz.instanceOf(xml, "java.net.URI")) {
var uri=xml;
xml=uri.toURL$();
}if (Clazz.instanceOf(xml, "java.net.URL")) {
var url=xml;
return Clazz.new_($I$(4).c$$S,[url.toExternalForm$()]);
}if (Clazz.instanceOf(xml, "java.io.InputStream")) {
var $in=xml;
return Clazz.new_($I$(4).c$$java_io_InputStream,[$in]);
}if (Clazz.instanceOf(xml, "java.io.Reader")) {
var r=xml;
return Clazz.new_($I$(4).c$$java_io_Reader,[r]);
}if (Clazz.instanceOf(xml, "javax.xml.transform.Source")) {
return xml;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["I don't understand how to handle " + xml.getClass$()]);
}, 1);

Clazz.newMeth(C$, 'marshal$O$java_io_File', function (jaxbObject, xml) {
C$._marshal$O$O(jaxbObject, xml);
}, 1);

Clazz.newMeth(C$, 'marshal$O$java_net_URL', function (jaxbObject, xml) {
C$._marshal$O$O(jaxbObject, xml);
}, 1);

Clazz.newMeth(C$, 'marshal$O$java_net_URI', function (jaxbObject, xml) {
C$._marshal$O$O(jaxbObject, xml);
}, 1);

Clazz.newMeth(C$, 'marshal$O$S', function (jaxbObject, xml) {
C$._marshal$O$O(jaxbObject, xml);
}, 1);

Clazz.newMeth(C$, 'marshal$O$java_io_OutputStream', function (jaxbObject, xml) {
C$._marshal$O$O(jaxbObject, xml);
}, 1);

Clazz.newMeth(C$, 'marshal$O$java_io_Writer', function (jaxbObject, xml) {
C$._marshal$O$O(jaxbObject, xml);
}, 1);

Clazz.newMeth(C$, 'marshal$O$javax_xml_transform_Result', function (jaxbObject, xml) {
C$._marshal$O$O(jaxbObject, xml);
}, 1);

Clazz.newMeth(C$, '_marshal$O$O', function (jaxbObject, xml) {
try {
var context;
if (Clazz.instanceOf(jaxbObject, "javax.xml.bind.JAXBElement")) {
context=C$.getContext$Class((jaxbObject).getDeclaredType$());
} else {
var clazz=jaxbObject.getClass$();
var r=clazz.getAnnotation$Class(Clazz.getClass($I$(7),['name$','namespace$']));
context=C$.getContext$Class(clazz);
if (r == null ) {
jaxbObject=Clazz.new_($I$(8).c$$javax_xml_namespace_QName$Class$TT,[Clazz.new_($I$(9).c$$S,[C$.inferName$Class(clazz)]), clazz, jaxbObject]);
}}var m=context.createMarshaller$();
m.setProperty$S$O("jaxb.formatted.output", new Boolean(true));
m.marshal$O$javax_xml_transform_Result(jaxbObject, C$.toResult$O(xml));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'inferName$Class', function (clazz) {
return $I$(10).decapitalize$S(clazz.getSimpleName$());
}, 1);

Clazz.newMeth(C$, 'toResult$O', function (xml) {
if (xml == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["no XML is given"]);
if (Clazz.instanceOf(xml, "java.lang.String")) {
try {
xml=Clazz.new_($I$(5).c$$S,[xml]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
xml=Clazz.new_($I$(6).c$$S,[xml]);
} else {
throw e;
}
}
}if (Clazz.instanceOf(xml, "java.io.File")) {
var file=xml;
return Clazz.new_($I$(11).c$$java_io_File,[file]);
}if (Clazz.instanceOf(xml, "java.net.URI")) {
var uri=xml;
xml=uri.toURL$();
}if (Clazz.instanceOf(xml, "java.net.URL")) {
var url=xml;
var con=url.openConnection$();
con.setDoOutput$Z(true);
con.setDoInput$Z(false);
con.connect$();
return Clazz.new_($I$(11).c$$java_io_OutputStream,[con.getOutputStream$()]);
}if (Clazz.instanceOf(xml, "java.io.OutputStream")) {
var os=xml;
return Clazz.new_($I$(11).c$$java_io_OutputStream,[os]);
}if (Clazz.instanceOf(xml, "java.io.Writer")) {
var w=xml;
return Clazz.new_($I$(11).c$$java_io_Writer,[w]);
}if (Clazz.instanceOf(xml, "javax.xml.transform.Result")) {
return xml;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["I don't understand how to handle " + xml.getClass$()]);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.JAXB, "Cache", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=null;
this.context=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Class', function (type) {
C$.$init$.apply(this);
this.type=type;
this.context=$I$(1).newInstance$ClassA([type]);
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
