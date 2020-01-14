(function(){var P$=java.util,I$=[[0,'java.util.concurrent.ForkJoinPool']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ArrayPrefixHelpers", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.ArrayPrefixHelpers, "CumulateTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.CountedCompleter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
this.$function=null;
this.left=null;
this.right=null;
this.$in=null;
this.out=null;
this.lo=0;
this.hi=0;
this.origin=0;
this.fence=0;
this.threshold=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ArrayPrefixHelpers_CumulateTask$java_util_function_BinaryOperator$TTA$I$I', function (parent, $function, array, lo, hi) {
C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this, [parent]);
C$.$init$.apply(this);
this.$function=$function;
this.array=array;
this.lo=this.origin=lo;
this.hi=this.fence=hi;
var p;
this.threshold=(p=((hi - lo)/($I$(1).getCommonPoolParallelism$() << 3)|0)) <= 16 ? 16 : p;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ArrayPrefixHelpers_CumulateTask$java_util_function_BinaryOperator$TTA$I$I$I$I$I', function (parent, $function, array, origin, fence, threshold, lo, hi) {
C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this, [parent]);
C$.$init$.apply(this);
this.$function=$function;
this.array=array;
this.origin=origin;
this.fence=fence;
this.threshold=threshold;
this.lo=lo;
this.hi=hi;
}, 1);

Clazz.newMeth(C$, 'compute$', function () {
var fn;
var a;
if ((fn=this.$function) == null  || (a=this.array) == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
var th=this.threshold;
var org=this.origin;
var fnc=this.fence;
var l;
var h;
var t=this;
 outer : while ((l=t.lo) >= 0 && (h=t.hi) <= a.length ){
if (h - l > th) {
var lt=t.left;
var rt=t.right;
var f;
if (lt == null ) {
var mid=(l + h) >>> 1;
f=rt=t.right=Clazz.new_(C$.c$$java_util_ArrayPrefixHelpers_CumulateTask$java_util_function_BinaryOperator$TTA$I$I$I$I$I,[t, fn, a, org, fnc, th, mid, h]);
t=lt=t.left=Clazz.new_(C$.c$$java_util_ArrayPrefixHelpers_CumulateTask$java_util_function_BinaryOperator$TTA$I$I$I$I$I,[t, fn, a, org, fnc, th, l, mid]);
} else {
var pin=t.$in;
lt.$in=pin;
f=t=null;
if (rt != null ) {
var lout=lt.out;
rt.$in=(l == org ? lout : fn.apply$(pin, lout));
for (var c; ; ) {
if (((c=rt.getPendingCount$()) & 1) != 0) break;
if (rt.compareAndSetPendingCount$I$I(c, c | 1)) {
t=rt;
break;
}}
}for (var c; ; ) {
if (((c=lt.getPendingCount$()) & 1) != 0) break;
if (lt.compareAndSetPendingCount$I$I(c, c | 1)) {
if (t != null ) f=t;
t=lt;
break;
}}
if (t == null ) break;
}if (f != null ) f.fork$();
} else {
var state;
for (var b; ; ) {
if (((b=t.getPendingCount$()) & 4) != 0) break outer;
state=((b & 1) != 0 ? 4 : (l > org) ? 2 : (6));
if (t.compareAndSetPendingCount$I$I(b, b | state)) break;
}
var sum;
if (state != 2) {
var first;
if (l == org) {
sum=a[org];
first=org + 1;
} else {
sum=t.$in;
first=l;
}for (var i=first; i < h; ++i) a[i]=sum=fn.apply$(sum, a[i]);

} else if (h < fnc) {
sum=a[l];
for (var i=l + 1; i < h; ++i) sum=fn.apply$(sum, a[i]);

} else sum=t.$in;
t.out=sum;
for (var par; ; ) {
if ((par=t.getCompleter$()) == null ) {
if ((state & 4) != 0) t.quietlyComplete$();
break outer;
}var b=par.getPendingCount$();
if ((b & state & 4 ) != 0) t=par;
 else if ((b & state & 2 ) != 0) {
var nextState;
var lt;
var rt;
if ((lt=par.left) != null  && (rt=par.right) != null  ) {
var lout=lt.out;
par.out=(rt.hi == fnc ? lout : fn.apply$(lout, rt.out));
}var refork=(((b & 1) == 0 && par.lo == org ) ? 1 : 0);
if ((nextState=b | state | refork ) == b || par.compareAndSetPendingCount$I$I(b, nextState) ) {
state=2;
t=par;
if (refork != 0) par.fork$();
}} else if (par.compareAndSetPendingCount$I$I(b, b | state)) break outer;
}
}}
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ArrayPrefixHelpers, "LongCumulateTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.CountedCompleter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
this.$function=null;
this.left=null;
this.right=null;
this.$in=0;
this.out=0;
this.lo=0;
this.hi=0;
this.origin=0;
this.fence=0;
this.threshold=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ArrayPrefixHelpers_LongCumulateTask$java_util_function_LongBinaryOperator$JA$I$I', function (parent, $function, array, lo, hi) {
C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this, [parent]);
C$.$init$.apply(this);
this.$function=$function;
this.array=array;
this.lo=this.origin=lo;
this.hi=this.fence=hi;
var p;
this.threshold=(p=((hi - lo)/($I$(1).getCommonPoolParallelism$() << 3)|0)) <= 16 ? 16 : p;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ArrayPrefixHelpers_LongCumulateTask$java_util_function_LongBinaryOperator$JA$I$I$I$I$I', function (parent, $function, array, origin, fence, threshold, lo, hi) {
C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this, [parent]);
C$.$init$.apply(this);
this.$function=$function;
this.array=array;
this.origin=origin;
this.fence=fence;
this.threshold=threshold;
this.lo=lo;
this.hi=hi;
}, 1);

Clazz.newMeth(C$, 'compute$', function () {
var fn;
var a;
if ((fn=this.$function) == null  || (a=this.array) == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
var th=this.threshold;
var org=this.origin;
var fnc=this.fence;
var l;
var h;
var t=this;
 outer : while ((l=t.lo) >= 0 && (h=t.hi) <= a.length ){
if (h - l > th) {
var lt=t.left;
var rt=t.right;
var f;
if (lt == null ) {
var mid=(l + h) >>> 1;
f=rt=t.right=Clazz.new_(C$.c$$java_util_ArrayPrefixHelpers_LongCumulateTask$java_util_function_LongBinaryOperator$JA$I$I$I$I$I,[t, fn, a, org, fnc, th, mid, h]);
t=lt=t.left=Clazz.new_(C$.c$$java_util_ArrayPrefixHelpers_LongCumulateTask$java_util_function_LongBinaryOperator$JA$I$I$I$I$I,[t, fn, a, org, fnc, th, l, mid]);
} else {
var pin=t.$in;
lt.$in=pin;
f=t=null;
if (rt != null ) {
var lout=lt.out;
rt.$in=(l == org ? lout : fn.applyAsLong$(pin, lout));
for (var c; ; ) {
if (((c=rt.getPendingCount$()) & 1) != 0) break;
if (rt.compareAndSetPendingCount$I$I(c, c | 1)) {
t=rt;
break;
}}
}for (var c; ; ) {
if (((c=lt.getPendingCount$()) & 1) != 0) break;
if (lt.compareAndSetPendingCount$I$I(c, c | 1)) {
if (t != null ) f=t;
t=lt;
break;
}}
if (t == null ) break;
}if (f != null ) f.fork$();
} else {
var state;
for (var b; ; ) {
if (((b=t.getPendingCount$()) & 4) != 0) break outer;
state=((b & 1) != 0 ? 4 : (l > org) ? 2 : (6));
if (t.compareAndSetPendingCount$I$I(b, b | state)) break;
}
var sum;
if (state != 2) {
var first;
if (l == org) {
sum=a[org];
first=org + 1;
} else {
sum=t.$in;
first=l;
}for (var i=first; i < h; ++i) a[i]=sum=fn.applyAsLong$(sum, a[i]);

} else if (h < fnc) {
sum=a[l];
for (var i=l + 1; i < h; ++i) sum=fn.applyAsLong$(sum, a[i]);

} else sum=t.$in;
t.out=sum;
for (var par; ; ) {
if ((par=t.getCompleter$()) == null ) {
if ((state & 4) != 0) t.quietlyComplete$();
break outer;
}var b=par.getPendingCount$();
if ((b & state & 4 ) != 0) t=par;
 else if ((b & state & 2 ) != 0) {
var nextState;
var lt;
var rt;
if ((lt=par.left) != null  && (rt=par.right) != null  ) {
var lout=lt.out;
par.out=(rt.hi == fnc ? lout : fn.applyAsLong$(lout, rt.out));
}var refork=(((b & 1) == 0 && par.lo == org ) ? 1 : 0);
if ((nextState=b | state | refork ) == b || par.compareAndSetPendingCount$I$I(b, nextState) ) {
state=2;
t=par;
if (refork != 0) par.fork$();
}} else if (par.compareAndSetPendingCount$I$I(b, b | state)) break outer;
}
}}
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ArrayPrefixHelpers, "DoubleCumulateTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.CountedCompleter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
this.$function=null;
this.left=null;
this.right=null;
this.$in=0;
this.out=0;
this.lo=0;
this.hi=0;
this.origin=0;
this.fence=0;
this.threshold=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ArrayPrefixHelpers_DoubleCumulateTask$java_util_function_DoubleBinaryOperator$DA$I$I', function (parent, $function, array, lo, hi) {
C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this, [parent]);
C$.$init$.apply(this);
this.$function=$function;
this.array=array;
this.lo=this.origin=lo;
this.hi=this.fence=hi;
var p;
this.threshold=(p=((hi - lo)/($I$(1).getCommonPoolParallelism$() << 3)|0)) <= 16 ? 16 : p;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ArrayPrefixHelpers_DoubleCumulateTask$java_util_function_DoubleBinaryOperator$DA$I$I$I$I$I', function (parent, $function, array, origin, fence, threshold, lo, hi) {
C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this, [parent]);
C$.$init$.apply(this);
this.$function=$function;
this.array=array;
this.origin=origin;
this.fence=fence;
this.threshold=threshold;
this.lo=lo;
this.hi=hi;
}, 1);

Clazz.newMeth(C$, 'compute$', function () {
var fn;
var a;
if ((fn=this.$function) == null  || (a=this.array) == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
var th=this.threshold;
var org=this.origin;
var fnc=this.fence;
var l;
var h;
var t=this;
 outer : while ((l=t.lo) >= 0 && (h=t.hi) <= a.length ){
if (h - l > th) {
var lt=t.left;
var rt=t.right;
var f;
if (lt == null ) {
var mid=(l + h) >>> 1;
f=rt=t.right=Clazz.new_(C$.c$$java_util_ArrayPrefixHelpers_DoubleCumulateTask$java_util_function_DoubleBinaryOperator$DA$I$I$I$I$I,[t, fn, a, org, fnc, th, mid, h]);
t=lt=t.left=Clazz.new_(C$.c$$java_util_ArrayPrefixHelpers_DoubleCumulateTask$java_util_function_DoubleBinaryOperator$DA$I$I$I$I$I,[t, fn, a, org, fnc, th, l, mid]);
} else {
var pin=t.$in;
lt.$in=pin;
f=t=null;
if (rt != null ) {
var lout=lt.out;
rt.$in=(l == org ? lout : fn.applyAsDouble$(pin, lout));
for (var c; ; ) {
if (((c=rt.getPendingCount$()) & 1) != 0) break;
if (rt.compareAndSetPendingCount$I$I(c, c | 1)) {
t=rt;
break;
}}
}for (var c; ; ) {
if (((c=lt.getPendingCount$()) & 1) != 0) break;
if (lt.compareAndSetPendingCount$I$I(c, c | 1)) {
if (t != null ) f=t;
t=lt;
break;
}}
if (t == null ) break;
}if (f != null ) f.fork$();
} else {
var state;
for (var b; ; ) {
if (((b=t.getPendingCount$()) & 4) != 0) break outer;
state=((b & 1) != 0 ? 4 : (l > org) ? 2 : (6));
if (t.compareAndSetPendingCount$I$I(b, b | state)) break;
}
var sum;
if (state != 2) {
var first;
if (l == org) {
sum=a[org];
first=org + 1;
} else {
sum=t.$in;
first=l;
}for (var i=first; i < h; ++i) a[i]=sum=fn.applyAsDouble$(sum, a[i]);

} else if (h < fnc) {
sum=a[l];
for (var i=l + 1; i < h; ++i) sum=fn.applyAsDouble$(sum, a[i]);

} else sum=t.$in;
t.out=sum;
for (var par; ; ) {
if ((par=t.getCompleter$()) == null ) {
if ((state & 4) != 0) t.quietlyComplete$();
break outer;
}var b=par.getPendingCount$();
if ((b & state & 4 ) != 0) t=par;
 else if ((b & state & 2 ) != 0) {
var nextState;
var lt;
var rt;
if ((lt=par.left) != null  && (rt=par.right) != null  ) {
var lout=lt.out;
par.out=(rt.hi == fnc ? lout : fn.applyAsDouble$(lout, rt.out));
}var refork=(((b & 1) == 0 && par.lo == org ) ? 1 : 0);
if ((nextState=b | state | refork ) == b || par.compareAndSetPendingCount$I$I(b, nextState) ) {
state=2;
t=par;
if (refork != 0) par.fork$();
}} else if (par.compareAndSetPendingCount$I$I(b, b | state)) break outer;
}
}}
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ArrayPrefixHelpers, "IntCumulateTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.CountedCompleter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
this.$function=null;
this.left=null;
this.right=null;
this.$in=0;
this.out=0;
this.lo=0;
this.hi=0;
this.origin=0;
this.fence=0;
this.threshold=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ArrayPrefixHelpers_IntCumulateTask$java_util_function_IntBinaryOperator$IA$I$I', function (parent, $function, array, lo, hi) {
C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this, [parent]);
C$.$init$.apply(this);
this.$function=$function;
this.array=array;
this.lo=this.origin=lo;
this.hi=this.fence=hi;
var p;
this.threshold=(p=((hi - lo)/($I$(1).getCommonPoolParallelism$() << 3)|0)) <= 16 ? 16 : p;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ArrayPrefixHelpers_IntCumulateTask$java_util_function_IntBinaryOperator$IA$I$I$I$I$I', function (parent, $function, array, origin, fence, threshold, lo, hi) {
C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this, [parent]);
C$.$init$.apply(this);
this.$function=$function;
this.array=array;
this.origin=origin;
this.fence=fence;
this.threshold=threshold;
this.lo=lo;
this.hi=hi;
}, 1);

Clazz.newMeth(C$, 'compute$', function () {
var fn;
var a;
if ((fn=this.$function) == null  || (a=this.array) == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
var th=this.threshold;
var org=this.origin;
var fnc=this.fence;
var l;
var h;
var t=this;
 outer : while ((l=t.lo) >= 0 && (h=t.hi) <= a.length ){
if (h - l > th) {
var lt=t.left;
var rt=t.right;
var f;
if (lt == null ) {
var mid=(l + h) >>> 1;
f=rt=t.right=Clazz.new_(C$.c$$java_util_ArrayPrefixHelpers_IntCumulateTask$java_util_function_IntBinaryOperator$IA$I$I$I$I$I,[t, fn, a, org, fnc, th, mid, h]);
t=lt=t.left=Clazz.new_(C$.c$$java_util_ArrayPrefixHelpers_IntCumulateTask$java_util_function_IntBinaryOperator$IA$I$I$I$I$I,[t, fn, a, org, fnc, th, l, mid]);
} else {
var pin=t.$in;
lt.$in=pin;
f=t=null;
if (rt != null ) {
var lout=lt.out;
rt.$in=(l == org ? lout : fn.applyAsInt$(pin, lout));
for (var c; ; ) {
if (((c=rt.getPendingCount$()) & 1) != 0) break;
if (rt.compareAndSetPendingCount$I$I(c, c | 1)) {
t=rt;
break;
}}
}for (var c; ; ) {
if (((c=lt.getPendingCount$()) & 1) != 0) break;
if (lt.compareAndSetPendingCount$I$I(c, c | 1)) {
if (t != null ) f=t;
t=lt;
break;
}}
if (t == null ) break;
}if (f != null ) f.fork$();
} else {
var state;
for (var b; ; ) {
if (((b=t.getPendingCount$()) & 4) != 0) break outer;
state=((b & 1) != 0 ? 4 : (l > org) ? 2 : (6));
if (t.compareAndSetPendingCount$I$I(b, b | state)) break;
}
var sum;
if (state != 2) {
var first;
if (l == org) {
sum=a[org];
first=org + 1;
} else {
sum=t.$in;
first=l;
}for (var i=first; i < h; ++i) a[i]=sum=fn.applyAsInt$(sum, a[i]);

} else if (h < fnc) {
sum=a[l];
for (var i=l + 1; i < h; ++i) sum=fn.applyAsInt$(sum, a[i]);

} else sum=t.$in;
t.out=sum;
for (var par; ; ) {
if ((par=t.getCompleter$()) == null ) {
if ((state & 4) != 0) t.quietlyComplete$();
break outer;
}var b=par.getPendingCount$();
if ((b & state & 4 ) != 0) t=par;
 else if ((b & state & 2 ) != 0) {
var nextState;
var lt;
var rt;
if ((lt=par.left) != null  && (rt=par.right) != null  ) {
var lout=lt.out;
par.out=(rt.hi == fnc ? lout : fn.applyAsInt$(lout, rt.out));
}var refork=(((b & 1) == 0 && par.lo == org ) ? 1 : 0);
if ((nextState=b | state | refork ) == b || par.compareAndSetPendingCount$I$I(b, nextState) ) {
state=2;
t=par;
if (refork != 0) par.fork$();
}} else if (par.compareAndSetPendingCount$I$I(b, b | state)) break outer;
}
}}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:44 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
