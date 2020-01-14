(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[];
var C$=Clazz.newClass(P$, "StringTooLongException", null, 'Exception');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.msg=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (msg) {
Clazz.super_(C$, this,1);
this.msg=msg;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.msg;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return this.msg;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
