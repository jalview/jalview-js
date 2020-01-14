(function(){var P$=Clazz.newPackage("javax.xml.stream"),I$=[];
var C$=Clazz.newClass(P$, "XMLStreamException", null, 'Exception');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.location=null;
this.nested=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S$javax_xml_stream_Location$Throwable.apply(this, [null, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (msg) {
C$.c$$S$javax_xml_stream_Location$Throwable.apply(this, [msg, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable', function (th) {
C$.c$$S$javax_xml_stream_Location$Throwable.apply(this, [null, null, th]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable', function (msg, th) {
C$.c$$S$javax_xml_stream_Location$Throwable.apply(this, [msg, null, th]);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_xml_stream_Location$Throwable', function (msg, location, th) {
C$.superclazz.c$$S.apply(this, [msg]);
C$.$init$.apply(this);
this.location=location;
this.nested=th;
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_xml_stream_Location', function (msg, location) {
C$.c$$S$javax_xml_stream_Location$Throwable.apply(this, [msg, location, null]);
}, 1);

Clazz.newMeth(C$, 'getNestedException$', function () {
return this.nested;
});

Clazz.newMeth(C$, 'getLocation$', function () {
return this.location;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:30 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
