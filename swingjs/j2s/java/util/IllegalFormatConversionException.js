(function(){var P$=java.util,I$=[];
var C$=Clazz.newClass(P$, "IllegalFormatConversionException", null, 'java.util.IllegalFormatException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.c='\0';
this.arg=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$C$Class', function (c, arg) {
Clazz.super_(C$, this,1);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:47 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
