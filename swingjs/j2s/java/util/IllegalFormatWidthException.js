(function(){var P$=java.util,I$=[];
var C$=Clazz.newClass(P$, "IllegalFormatWidthException", null, 'java.util.IllegalFormatException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.w=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (w) {
Clazz.super_(C$, this,1);
this.w=w;
}, 1);

Clazz.newMeth(C$, 'getWidth$', function () {
return this.w;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return Integer.toString$I(this.w);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
