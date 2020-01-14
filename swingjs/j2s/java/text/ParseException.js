(function(){var P$=Clazz.newPackage("java.text"),I$=[];
var C$=Clazz.newClass(P$, "ParseException", null, 'Exception');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.errorOffset=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (s, errorOffset) {
C$.superclazz.c$$S.apply(this, [s]);
C$.$init$.apply(this);
this.errorOffset=errorOffset;
}, 1);

Clazz.newMeth(C$, 'getErrorOffset$', function () {
return this.errorOffset;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
