(function(){var P$=java.util,I$=[];
var C$=Clazz.newClass(P$, "IllegalFormatCodePointException", null, 'java.util.IllegalFormatException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.c=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (c) {
Clazz.super_(C$, this,1);
this.c=c;
}, 1);

Clazz.newMeth(C$, 'getCodePoint$', function () {
return this.c;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return String.format$S$OA("Code point = %#x", [new Integer(this.c)]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:47 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
