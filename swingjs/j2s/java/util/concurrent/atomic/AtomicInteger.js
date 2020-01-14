(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),I$=[];
var C$=Clazz.newClass(P$, "AtomicInteger", null, 'Number', 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialValue) {
Clazz.super_(C$, this,1);
this.value=initialValue;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.value;
});

Clazz.newMeth(C$, 'set$I', function (newValue) {
this.value=newValue;
});

Clazz.newMeth(C$, 'lazySet$I', function (newValue) {
this.value=newValue;
});

Clazz.newMeth(C$, 'getAndSet$I', function (newValue) {
for (; ; ) {
var current=this.get$();
if (this.compareAndSet$I$I(current, newValue)) return current;
}
});

Clazz.newMeth(C$, 'compareAndSet$I$I', function (expect, update) {
if (this.value != expect) return false;
this.value=update;
return true;
});

Clazz.newMeth(C$, 'weakCompareAndSet$I$I', function (expect, update) {
return this.compareAndSet$I$I(expect, update);
});

Clazz.newMeth(C$, 'getAndIncrement$', function () {
for (; ; ) {
var current=this.get$();
var next=current + 1;
if (this.compareAndSet$I$I(current, next)) return current;
}
});

Clazz.newMeth(C$, 'getAndDecrement$', function () {
for (; ; ) {
var current=this.get$();
var next=current - 1;
if (this.compareAndSet$I$I(current, next)) return current;
}
});

Clazz.newMeth(C$, 'getAndAdd$I', function (delta) {
for (; ; ) {
var current=this.get$();
var next=current + delta;
if (this.compareAndSet$I$I(current, next)) return current;
}
});

Clazz.newMeth(C$, 'incrementAndGet$', function () {
for (; ; ) {
var current=this.get$();
var next=current + 1;
if (this.compareAndSet$I$I(current, next)) return next;
}
});

Clazz.newMeth(C$, 'decrementAndGet$', function () {
for (; ; ) {
var current=this.get$();
var next=current - 1;
if (this.compareAndSet$I$I(current, next)) return next;
}
});

Clazz.newMeth(C$, 'addAndGet$I', function (delta) {
for (; ; ) {
var current=this.get$();
var next=current + delta;
if (this.compareAndSet$I$I(current, next)) return next;
}
});

Clazz.newMeth(C$, 'toString', function () {
return Integer.toString$I(this.get$());
});

Clazz.newMeth(C$, 'intValue$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'longValue$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'floatValue$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'doubleValue$', function () {
return this.get$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:53 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
