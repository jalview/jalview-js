(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[];
var C$=Clazz.newClass(P$, "RecursiveTask", null, 'java.util.concurrent.ForkJoinTask');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.result=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRawResult$', function () {
return this.result;
});

Clazz.newMeth(C$, ['setRawResult$TV'], function (value) {
this.result=value;
});

Clazz.newMeth(C$, 'exec$', function () {
this.result=this.compute$();
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:52 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
