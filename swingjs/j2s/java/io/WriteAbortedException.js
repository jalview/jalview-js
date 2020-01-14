(function(){var P$=java.io,I$=[];
var C$=Clazz.newClass(P$, "WriteAbortedException", null, 'java.io.ObjectStreamException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.detail=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$Exception', function (detailMessage, rootCause) {
C$.superclazz.c$$S.apply(this, [detailMessage]);
C$.$init$.apply(this);
this.detail=rootCause;
this.initCause$Throwable(rootCause);
}, 1);

Clazz.newMeth(C$, 'getMessage$', function () {
var msg=C$.superclazz.prototype.getMessage$.apply(this, []);
if (this.detail != null ) {
msg=msg + "; " + this.detail.toString() ;
}return msg;
});

Clazz.newMeth(C$, 'getCause$', function () {
return this.detail;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
