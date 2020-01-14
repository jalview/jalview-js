(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,'javax.xml.bind.Messages']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PropertyException", null, 'javax.xml.bind.JAXBException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (message) {
C$.superclazz.c$$S.apply(this, [message]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (message, errorCode) {
C$.superclazz.c$$S$S.apply(this, [message, errorCode]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable', function (exception) {
C$.superclazz.c$$Throwable.apply(this, [exception]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable', function (message, exception) {
C$.superclazz.c$$S$Throwable.apply(this, [message, exception]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Throwable', function (message, errorCode, exception) {
C$.superclazz.c$$S$S$Throwable.apply(this, [message, errorCode, exception]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$O', function (name, value) {
C$.superclazz.c$$S.apply(this, [$I$(1).format$S$O$O("PropertyException.NameValue", name, value.toString())]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
