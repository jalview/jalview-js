(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'InternalError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ImageCapabilities", null, null, 'Cloneable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.accelerated=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.accelerated=false;
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (accelerated) {
C$.$init$.apply(this);
this.accelerated=accelerated;
}, 1);

Clazz.newMeth(C$, 'isAccelerated$', function () {
return this.accelerated;
});

Clazz.newMeth(C$, 'isTrueVolatile$', function () {
return false;
});

Clazz.newMeth(C$, 'clone$', function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:22 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
