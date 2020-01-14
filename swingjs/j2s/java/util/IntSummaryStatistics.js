(function(){var P$=java.util,I$=[];
var C$=Clazz.newClass(P$, "IntSummaryStatistics", null, null, 'java.util.function.IntConsumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.count=0;
this.sum=0;
this.min=0;
this.max=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.min=2147483647;
this.max=-2147483648;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['accept$I','accept$'], function (value) {
++this.count;
this.sum+=value;
this.min=Math.min(this.min, value);
this.max=Math.max(this.max, value);
});

Clazz.newMeth(C$, 'combine$java_util_IntSummaryStatistics', function (other) {
this.count+=other.count;
this.sum+=other.sum;
this.min=Math.min(this.min, other.min);
this.max=Math.max(this.max, other.max);
});

Clazz.newMeth(C$, 'getCount$', function () {
return this.count;
});

Clazz.newMeth(C$, 'getSum$', function () {
return this.sum;
});

Clazz.newMeth(C$, 'getMin$', function () {
return this.min;
});

Clazz.newMeth(C$, 'getMax$', function () {
return this.max;
});

Clazz.newMeth(C$, 'getAverage$', function () {
return this.getCount$() > 0 ? this.getSum$() / this.getCount$() : 0.0;
});

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("%s{count=%d, sum=%d, min=%d, average=%f, max=%d}", [this.getClass$().getSimpleName$(), new Long(this.getCount$()), new Long(this.getSum$()), new Integer(this.getMin$()), new Double(this.getAverage$()), new Integer(this.getMax$())]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
