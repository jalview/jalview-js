(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[[0,'org.xml.sax.InputSource']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSXMLStreamReader", null, null, 'javax.xml.stream.XMLStreamReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.stream=null;
this.reader=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream', function (stream) {
C$.$init$.apply(this);
this.stream=stream;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader', function (reader) {
C$.$init$.apply(this);
this.reader=reader;
}, 1);

Clazz.newMeth(C$, 'getSource$', function () {
return (this.stream != null  ? Clazz.new_($I$(1).c$$java_io_InputStream,[this.stream]) : this.reader != null  ? Clazz.new_($I$(1).c$$java_io_Reader,[this.reader]) : null);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
