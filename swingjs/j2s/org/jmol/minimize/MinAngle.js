(function(){var P$=Clazz.newPackage("org.jmol.minimize"),I$=[];
var C$=Clazz.newClass(P$, "MinAngle", null, 'org.jmol.minimize.MinObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sbType=0;
this.sbKey=null;
this.ka=0;
this.theta0=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.theta0=NaN;
}, 1);

Clazz.newMeth(C$, 'c$$IA', function (data) {
Clazz.super_(C$, this,1);
this.data=data;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
