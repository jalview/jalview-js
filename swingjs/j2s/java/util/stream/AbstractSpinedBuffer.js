(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[];
var C$=Clazz.newClass(P$, "AbstractSpinedBuffer");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.initialChunkPower=0;
this.elementIndex=0;
this.spineIndex=0;
this.priorElementCount=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.initialChunkPower=4;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
C$.$init$.apply(this);
if (initialCapacity < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal Capacity: " + initialCapacity]);
this.initialChunkPower=Math.max(4, 32 - Integer.numberOfLeadingZeros$I(initialCapacity - 1));
}, 1);

Clazz.newMeth(C$, 'isEmpty$', function () {
return (this.spineIndex == 0) && (this.elementIndex == 0) ;
});

Clazz.newMeth(C$, 'count$', function () {
return (this.spineIndex == 0) ? this.elementIndex : this.priorElementCount[this.spineIndex] + this.elementIndex;
});

Clazz.newMeth(C$, 'chunkSize$I', function (n) {
var power=(n == 0 || n == 1 ) ? this.initialChunkPower : Math.min(this.initialChunkPower + n - 1, 30);
return 1 << power;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
