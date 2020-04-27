(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "IllegalFormatConversionException", null, 'java.util.IllegalFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['c'],'O',['arg','Class']]]

Clazz.newMeth(C$, 'c$$C$Class', function (c, arg) {
Clazz.super_(C$, this);
if (arg == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.c=c;
this.arg=arg;
}, 1);

Clazz.newMeth(C$, 'getConversion$', function () {
return this.c;
});

Clazz.newMeth(C$, 'getArgumentClass$', function () {
return this.arg;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return String.format$S$OA("%c != %s", [new Character(this.c), this.arg.getName$()]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:38 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
