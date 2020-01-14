(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
var C$=Clazz.newClass(P$, "Image");
C$.UndefinedProperty=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.UndefinedProperty= Clazz.new_();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.accelerationPriority=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.accelerationPriority=0.5;
}, 1);

Clazz.newMeth(C$, 'getScaledInstance$I$I$I', function (width, height, hints) {
return null;
});

Clazz.newMeth(C$, 'flush$', function () {
});

Clazz.newMeth(C$, 'setAccelerationPriority$F', function (priority) {
});

Clazz.newMeth(C$, 'getAccelerationPriority$', function () {
return this.accelerationPriority;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:22 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
