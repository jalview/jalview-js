(function(){var P$=Clazz.newPackage("org.jmol.viewer"),I$=[];
var C$=Clazz.newClass(P$, "MotionPoint");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.index=0;
this.x=0;
this.y=0;
this.time=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'set$I$I$I$J', function (index, x, y, time) {
this.index=index;
this.x=x;
this.y=y;
this.time=time;
});

Clazz.newMeth(C$, 'toString', function () {
return "[x = " + this.x + " y = " + this.y + " time = " + this.time + " ]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-16 07:23:38 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
