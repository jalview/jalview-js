(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[];
var C$=Clazz.newClass(P$, "Point3fi", null, 'javajs.util.P3', 'Cloneable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mi=0;
this.i=0;
this.sX=0;
this.sY=0;
this.sZ=0;
this.sD=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.mi=($s$[0] = -1, $s$[0]);
this.sD=($s$[0] = -1, $s$[0]);
}, 1);

Clazz.newMeth(C$, 'copy$', function () {
try {
return this.clone$();
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
