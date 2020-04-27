(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "IllegalFormatCodePointException", null, 'java.util.IllegalFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['c']]]

Clazz.newMeth(C$, 'c$$I', function (c) {
Clazz.super_(C$, this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:38 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
