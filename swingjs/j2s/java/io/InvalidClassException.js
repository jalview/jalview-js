(function(){var P$=java.io,I$=[];
/*c*/var C$=Clazz.newClass(P$, "InvalidClassException", null, 'java.io.ObjectStreamException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['classname']]]

Clazz.newMeth(C$, 'c$$S', function (detailMessage) {
;C$.superclazz.c$$S.apply(this,[detailMessage]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (className, detailMessage) {
;C$.superclazz.c$$S.apply(this,[detailMessage]);C$.$init$.apply(this);
this.classname=className;
}, 1);

Clazz.newMeth(C$, 'getMessage$', function () {
var msg=C$.superclazz.prototype.getMessage$.apply(this, []);
if (this.classname != null ) {
msg=this.classname + ';' + ' ' + msg ;
}return msg;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
