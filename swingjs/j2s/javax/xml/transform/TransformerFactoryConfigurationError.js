(function(){var P$=Clazz.newPackage("javax.xml.transform"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TransformerFactoryConfigurationError", null, 'Error');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['exception','Exception']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.exception=null;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (msg) {
;C$.superclazz.c$$S.apply(this,[msg]);C$.$init$.apply(this);
this.exception=null;
}, 1);

Clazz.newMeth(C$, 'c$$Exception',  function (e) {
;C$.superclazz.c$$S.apply(this,[e.toString()]);C$.$init$.apply(this);
this.exception=e;
}, 1);

Clazz.newMeth(C$, 'c$$Exception$S',  function (e, msg) {
;C$.superclazz.c$$S.apply(this,[msg]);C$.$init$.apply(this);
this.exception=e;
}, 1);

Clazz.newMeth(C$, 'getMessage$',  function () {
var message=C$.superclazz.prototype.getMessage$.apply(this, []);
if ((message == null ) && (this.exception != null ) ) {
return this.exception.getMessage$();
}return message;
});

Clazz.newMeth(C$, 'getException$',  function () {
return this.exception;
});

Clazz.newMeth(C$, 'getCause$',  function () {
return this.exception;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:57 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
