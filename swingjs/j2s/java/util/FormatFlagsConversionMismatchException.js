(function(){var P$=java.util,I$=[];
var C$=Clazz.newClass(P$, "FormatFlagsConversionMismatchException", null, 'java.util.IllegalFormatException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.f=null;
this.c='\0';
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$C', function (f, c) {
Clazz.super_(C$, this,1);
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.f=f;
this.c=c;
}, 1);

Clazz.newMeth(C$, 'getFlags$', function () {
return this.f;
});

Clazz.newMeth(C$, 'getConversion$', function () {
return this.c;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return "Conversion = " + this.c + ", Flags = " + this.f ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:46 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
