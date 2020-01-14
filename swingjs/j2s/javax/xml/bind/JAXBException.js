(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[];
var C$=Clazz.newClass(P$, "JAXBException", null, 'Exception');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.errorCode=null;
this.linkedException=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (message) {
C$.c$$S$S$Throwable.apply(this, [message, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (message, errorCode) {
C$.c$$S$S$Throwable.apply(this, [message, errorCode, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable', function (exception) {
C$.c$$S$S$Throwable.apply(this, [null, null, exception]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable', function (message, exception) {
C$.c$$S$S$Throwable.apply(this, [message, null, exception]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Throwable', function (message, errorCode, exception) {
C$.superclazz.c$$S.apply(this, [message]);
C$.$init$.apply(this);
this.errorCode=errorCode;
this.linkedException=exception;
}, 1);

Clazz.newMeth(C$, 'getErrorCode$', function () {
return this.errorCode;
});

Clazz.newMeth(C$, 'getLinkedException$', function () {
return this.linkedException;
});

Clazz.newMeth(C$, 'setLinkedException$Throwable', function (exception) {
this.linkedException=exception;
});

Clazz.newMeth(C$, 'toString', function () {
return this.linkedException == null  ? C$.superclazz.prototype.toString.apply(this, []) : C$.superclazz.prototype.toString.apply(this, []) + "\n - with linked exception:\n[" + this.linkedException.toString() + "]" ;
});

Clazz.newMeth(C$, 'printStackTrace$java_io_PrintStream', function (s) {
C$.superclazz.prototype.printStackTrace$java_io_PrintStream.apply(this, [s]);
});

Clazz.newMeth(C$, 'printStackTrace$', function () {
C$.superclazz.prototype.printStackTrace$.apply(this, []);
});

Clazz.newMeth(C$, 'printStackTrace$java_io_PrintWriter', function (s) {
C$.superclazz.prototype.printStackTrace$java_io_PrintWriter.apply(this, [s]);
});

Clazz.newMeth(C$, 'getCause$', function () {
return this.linkedException;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
