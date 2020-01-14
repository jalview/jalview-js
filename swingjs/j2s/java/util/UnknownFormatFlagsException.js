(function(){var P$=java.util,I$=[];
var C$=Clazz.newClass(P$, "UnknownFormatFlagsException", null, 'java.util.IllegalFormatException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.flags=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (f) {
Clazz.super_(C$, this,1);
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.flags=f;
}, 1);

Clazz.newMeth(C$, 'getFlags$', function () {
return this.flags;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return "Flags = " + this.flags;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
