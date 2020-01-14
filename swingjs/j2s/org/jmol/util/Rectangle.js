(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[];
var C$=Clazz.newClass(P$, "Rectangle");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.x=0;
this.y=0;
this.width=0;
this.height=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'contains$I$I', function (X, Y) {
return (X >= this.x && Y >= this.y  && X - this.x < this.width  && Y - this.y < this.height );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
