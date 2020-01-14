(function(){var P$=Clazz.newPackage("jalview.jbgui"),I$=[];
var C$=Clazz.newClass(P$, "IntKeyStringValueEntry");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.k=0;
this.v=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$S', function (k, v) {
C$.$init$.apply(this);
this.k=k;
this.v=v;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.getValue$();
});

Clazz.newMeth(C$, 'getKey$', function () {
return this.k;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.v;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
