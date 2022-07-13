(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractSpinedBuffer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['initialChunkPower','elementIndex','spineIndex'],'O',['priorElementCount','long[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.initialChunkPower=4;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
;C$.$init$.apply(this);
if (initialCapacity < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal Capacity: " + initialCapacity]);
this.initialChunkPower=Math.max(4, 32 - Integer.numberOfLeadingZeros$I(initialCapacity - 1));
}, 1);

Clazz.newMeth(C$, 'isEmpty$',  function () {
return (this.spineIndex == 0) && (this.elementIndex == 0) ;
});

Clazz.newMeth(C$, 'count$',  function () {
return (this.spineIndex == 0) ? this.elementIndex : Long.$add(this.priorElementCount[this.spineIndex],this.elementIndex);
});

Clazz.newMeth(C$, 'chunkSize$I',  function (n) {
var power=(n == 0 || n == 1 ) ? this.initialChunkPower : Math.min(this.initialChunkPower + n - 1, 30);
return 1 << power;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:21 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
