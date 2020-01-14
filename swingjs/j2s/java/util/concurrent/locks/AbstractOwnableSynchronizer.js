(function(){var P$=Clazz.newPackage("java.util.concurrent.locks"),I$=[];
var C$=Clazz.newClass(P$, "AbstractOwnableSynchronizer", null, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.exclusiveOwnerThread=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setExclusiveOwnerThread$Thread', function (t) {
this.exclusiveOwnerThread=t;
});

Clazz.newMeth(C$, 'getExclusiveOwnerThread$', function () {
return this.exclusiveOwnerThread;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:53 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
