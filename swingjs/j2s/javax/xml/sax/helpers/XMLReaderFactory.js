(function(){var P$=Clazz.newPackage("javax.xml.sax.helpers"),I$=[[0,'javax.xml.sax.helpers.NewInstance','java.io.BufferedReader','java.io.InputStreamReader','javax.xml.sax.helpers.ParserAdapter','javax.xml.sax.helpers.ParserFactory']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "XMLReaderFactory");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createXMLReader$', function () {
var className=null;
var loader=$I$(1).getClassLoader$();
try {
className=System.getProperty$S("javax.xml.sax.driver");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
} else {
throw e;
}
}
if (className == null ) {
try {
var service="META-INF/services/javax.xml.sax.driver";
var $in;
var reader;
if (loader == null ) $in=ClassLoader.getSystemResourceAsStream$S(service);
 else $in=loader.getResourceAsStream$S(service);
if ($in != null ) {
reader=Clazz.new_($I$(2).c$$java_io_Reader,[Clazz.new_($I$(3).c$$java_io_InputStream$S,[$in, "UTF8"])]);
className=reader.readLine$();
$in.close$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}if (className == null ) {
}if (className != null ) return C$.loadClass$ClassLoader$S(loader, className);
try {
return Clazz.new_($I$(4).c$$javax_xml_sax_Parser,[$I$(5).makeParser$()]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXException').c$$S,["Can\'t create default XMLReader; is system property javax.xml.sax.driver set?"]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'createXMLReader$S', function (className) {
return C$.loadClass$ClassLoader$S($I$(1).getClassLoader$(), className);
}, 1);

Clazz.newMeth(C$, 'loadClass$ClassLoader$S', function (loader, className) {
try {
return $I$(1).newInstance$ClassLoader$S(loader, className);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var e1 = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXException').c$$S$Exception,["SAX2 driver class " + className + " not found" , e1]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e2 = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXException').c$$S$Exception,["SAX2 driver class " + className + " found but cannot be loaded" , e2]);
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e3 = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXException').c$$S$Exception,["SAX2 driver class " + className + " loaded but cannot be instantiated (no empty public constructor?)" , e3]);
}
} else if (Clazz.exceptionOf(e$$,"ClassCastException")){
var e4 = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXException').c$$S$Exception,["SAX2 driver class " + className + " does not implement XMLReader" , e4]);
}
} else {
throw e$$;
}
}
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:30 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
