(function(){var P$=Clazz.newPackage("javax.xml.xpath"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "XPathException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['$cause','Throwable']]]

Clazz.newMeth(C$, 'c$$S',  function (message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
if (message == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["message can\'t be null"]);
}this.$cause=null;
}, 1);

Clazz.newMeth(C$, 'c$$Throwable',  function (cause) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.$cause=cause;
if (cause == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["cause can\'t be null"]);
}}, 1);

Clazz.newMeth(C$, 'getCause$',  function () {
return this.$cause;
});

Clazz.newMeth(C$, 'printStackTrace$java_io_PrintStream',  function (s) {
if (this.getCause$() != null ) {
this.getCause$().printStackTrace$java_io_PrintStream(s);
s.println$S("--------------- linked to ------------------");
}C$.superclazz.prototype.printStackTrace$java_io_PrintStream.apply(this, [s]);
});

Clazz.newMeth(C$, 'printStackTrace$',  function () {
this.printStackTrace$java_io_PrintStream(System.err);
});

Clazz.newMeth(C$, 'printStackTrace$java_io_PrintWriter',  function (s) {
if (this.getCause$() != null ) {
this.getCause$().printStackTrace$java_io_PrintWriter(s);
s.println$S("--------------- linked to ------------------");
}C$.superclazz.prototype.printStackTrace$java_io_PrintWriter.apply(this, [s]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:57 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
