(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[[0,'java.util.HashMap','swingjs.xml.JSXMLStreamReader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSXMLInputFactory", null, 'javax.xml.stream.XMLInputFactory');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.properties=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.properties=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'createXMLStreamReader$java_io_Reader', function (reader) {
return Clazz.new_($I$(2).c$$java_io_Reader,[reader]);
});

Clazz.newMeth(C$, 'createXMLStreamReader$java_io_InputStream', function (stream) {
return Clazz.new_($I$(2).c$$java_io_InputStream,[stream]);
});

Clazz.newMeth(C$, 'createXMLStreamReader$java_io_InputStream$S', function (stream, encoding) {
return Clazz.new_($I$(2).c$$java_io_InputStream,[stream]);
});

Clazz.newMeth(C$, 'setProperty$S$O', function (name, value) {
this.properties.put$TK$TV(name, value);
});

Clazz.newMeth(C$, 'getProperty$S', function (name) {
return this.properties.get$O(name);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
