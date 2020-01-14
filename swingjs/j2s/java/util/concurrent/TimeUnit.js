(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[[0,'AbstractMethodError','Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TimeUnit", null, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
(P$.TimeUnit$1||
(function(){var C$=Clazz.newClass(P$, "TimeUnit$1", null, Clazz.load('java.util.concurrent.TimeUnit'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toNanos$J', function (d) {
return d;
});

Clazz.newMeth(C$, 'toMicros$J', function (d) {
return (d/(1000)|0);
});

Clazz.newMeth(C$, 'toMillis$J', function (d) {
return (d/(1000000)|0);
});

Clazz.newMeth(C$, 'toSeconds$J', function (d) {
return (d/(1000000000)|0);
});

Clazz.newMeth(C$, 'toMinutes$J', function (d) {
return (d/(60000000000)|0);
});

Clazz.newMeth(C$, 'toHours$J', function (d) {
return (d/(3600000000000)|0);
});

Clazz.newMeth(C$, 'toDays$J', function (d) {
return (d/(86400000000000)|0);
});

Clazz.newMeth(C$, 'convert$J$java_util_concurrent_TimeUnit', function (d, u) {
return u.toNanos$J(d);
});

Clazz.newMeth(C$, 'excessNanos$J$J', function (d, m) {
return ((d - (m * 1000000))|0);
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "NANOSECONDS", 0, [], java.util.concurrent.TimeUnit$1);
(P$.TimeUnit$2||
(function(){var C$=Clazz.newClass(P$, "TimeUnit$2", null, Clazz.load('java.util.concurrent.TimeUnit'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toNanos$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 1000, 9223372036854775);
});

Clazz.newMeth(C$, 'toMicros$J', function (d) {
return d;
});

Clazz.newMeth(C$, 'toMillis$J', function (d) {
return (d/(1000)|0);
});

Clazz.newMeth(C$, 'toSeconds$J', function (d) {
return (d/(1000000)|0);
});

Clazz.newMeth(C$, 'toMinutes$J', function (d) {
return (d/(60000000)|0);
});

Clazz.newMeth(C$, 'toHours$J', function (d) {
return (d/(3600000000)|0);
});

Clazz.newMeth(C$, 'toDays$J', function (d) {
return (d/(86400000000)|0);
});

Clazz.newMeth(C$, 'convert$J$java_util_concurrent_TimeUnit', function (d, u) {
return u.toMicros$J(d);
});

Clazz.newMeth(C$, 'excessNanos$J$J', function (d, m) {
return (((d * 1000) - (m * 1000000))|0);
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "MICROSECONDS", 1, [], java.util.concurrent.TimeUnit$2);
(P$.TimeUnit$3||
(function(){var C$=Clazz.newClass(P$, "TimeUnit$3", null, Clazz.load('java.util.concurrent.TimeUnit'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toNanos$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 1000000, 9223372036854);
});

Clazz.newMeth(C$, 'toMicros$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 1000, 9223372036854775);
});

Clazz.newMeth(C$, 'toMillis$J', function (d) {
return d;
});

Clazz.newMeth(C$, 'toSeconds$J', function (d) {
return (d/(1000)|0);
});

Clazz.newMeth(C$, 'toMinutes$J', function (d) {
return (d/(60000)|0);
});

Clazz.newMeth(C$, 'toHours$J', function (d) {
return (d/(3600000)|0);
});

Clazz.newMeth(C$, 'toDays$J', function (d) {
return (d/(86400000)|0);
});

Clazz.newMeth(C$, 'convert$J$java_util_concurrent_TimeUnit', function (d, u) {
return u.toMillis$J(d);
});

Clazz.newMeth(C$, 'excessNanos$J$J', function (d, m) {
return 0;
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "MILLISECONDS", 2, [], java.util.concurrent.TimeUnit$3);
(P$.TimeUnit$4||
(function(){var C$=Clazz.newClass(P$, "TimeUnit$4", null, Clazz.load('java.util.concurrent.TimeUnit'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toNanos$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 1000000000, 9223372036);
});

Clazz.newMeth(C$, 'toMicros$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 1000000, 9223372036854);
});

Clazz.newMeth(C$, 'toMillis$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 1000, 9223372036854775);
});

Clazz.newMeth(C$, 'toSeconds$J', function (d) {
return d;
});

Clazz.newMeth(C$, 'toMinutes$J', function (d) {
return (d/(60)|0);
});

Clazz.newMeth(C$, 'toHours$J', function (d) {
return (d/(3600)|0);
});

Clazz.newMeth(C$, 'toDays$J', function (d) {
return (d/(86400)|0);
});

Clazz.newMeth(C$, 'convert$J$java_util_concurrent_TimeUnit', function (d, u) {
return u.toSeconds$J(d);
});

Clazz.newMeth(C$, 'excessNanos$J$J', function (d, m) {
return 0;
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "SECONDS", 3, [], java.util.concurrent.TimeUnit$4);
(P$.TimeUnit$5||
(function(){var C$=Clazz.newClass(P$, "TimeUnit$5", null, Clazz.load('java.util.concurrent.TimeUnit'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toNanos$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 60000000000, 153722867);
});

Clazz.newMeth(C$, 'toMicros$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 60000000, 153722867280);
});

Clazz.newMeth(C$, 'toMillis$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 60000, 153722867280912);
});

Clazz.newMeth(C$, 'toSeconds$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 60, 153722867280912930);
});

Clazz.newMeth(C$, 'toMinutes$J', function (d) {
return d;
});

Clazz.newMeth(C$, 'toHours$J', function (d) {
return (d/(60)|0);
});

Clazz.newMeth(C$, 'toDays$J', function (d) {
return (d/(1440)|0);
});

Clazz.newMeth(C$, 'convert$J$java_util_concurrent_TimeUnit', function (d, u) {
return u.toMinutes$J(d);
});

Clazz.newMeth(C$, 'excessNanos$J$J', function (d, m) {
return 0;
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "MINUTES", 4, [], java.util.concurrent.TimeUnit$5);
(P$.TimeUnit$6||
(function(){var C$=Clazz.newClass(P$, "TimeUnit$6", null, Clazz.load('java.util.concurrent.TimeUnit'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toNanos$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 3600000000000, 2562047);
});

Clazz.newMeth(C$, 'toMicros$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 3600000000, 2562047788);
});

Clazz.newMeth(C$, 'toMillis$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 3600000, 2562047788015);
});

Clazz.newMeth(C$, 'toSeconds$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 3600, 2562047788015215);
});

Clazz.newMeth(C$, 'toMinutes$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 60, 153722867280912930);
});

Clazz.newMeth(C$, 'toHours$J', function (d) {
return d;
});

Clazz.newMeth(C$, 'toDays$J', function (d) {
return (d/(24)|0);
});

Clazz.newMeth(C$, 'convert$J$java_util_concurrent_TimeUnit', function (d, u) {
return u.toHours$J(d);
});

Clazz.newMeth(C$, 'excessNanos$J$J', function (d, m) {
return 0;
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "HOURS", 5, [], java.util.concurrent.TimeUnit$6);
(P$.TimeUnit$7||
(function(){var C$=Clazz.newClass(P$, "TimeUnit$7", null, Clazz.load('java.util.concurrent.TimeUnit'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toNanos$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 86400000000000, 106751);
});

Clazz.newMeth(C$, 'toMicros$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 86400000000, 106751991);
});

Clazz.newMeth(C$, 'toMillis$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 86400000, 106751991167);
});

Clazz.newMeth(C$, 'toSeconds$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 86400, 106751991167300);
});

Clazz.newMeth(C$, 'toMinutes$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 1440, 6405119470038038);
});

Clazz.newMeth(C$, 'toHours$J', function (d) {
return P$.TimeUnit.x$J$J$J(d, 24, 384307168202282325);
});

Clazz.newMeth(C$, 'toDays$J', function (d) {
return d;
});

Clazz.newMeth(C$, 'convert$J$java_util_concurrent_TimeUnit', function (d, u) {
return u.toDays$J(d);
});

Clazz.newMeth(C$, 'excessNanos$J$J', function (d, m) {
return 0;
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "DAYS", 6, [], java.util.concurrent.TimeUnit$7);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'x$J$J$J', function (d, m, over) {
if (d > over) return 9223372036854775807;
if (d < -over) return -9223372036854775808;
return d * m;
}, 1);

Clazz.newMeth(C$, 'convert$J$java_util_concurrent_TimeUnit', function (sourceDuration, sourceUnit) {
throw Clazz.new_($I$(1));
});

Clazz.newMeth(C$, 'toNanos$J', function (duration) {
throw Clazz.new_($I$(1));
});

Clazz.newMeth(C$, 'toMicros$J', function (duration) {
throw Clazz.new_($I$(1));
});

Clazz.newMeth(C$, 'toMillis$J', function (duration) {
throw Clazz.new_($I$(1));
});

Clazz.newMeth(C$, 'toSeconds$J', function (duration) {
throw Clazz.new_($I$(1));
});

Clazz.newMeth(C$, 'toMinutes$J', function (duration) {
throw Clazz.new_($I$(1));
});

Clazz.newMeth(C$, 'toHours$J', function (duration) {
throw Clazz.new_($I$(1));
});

Clazz.newMeth(C$, 'toDays$J', function (duration) {
throw Clazz.new_($I$(1));
});

Clazz.newMeth(C$, 'timedWait$O$J', function (obj, timeout) {
if (timeout > 0) {
var ms=this.toMillis$J(timeout);
var ns=this.excessNanos$J$J(timeout, ms);
obj.wait$J$I(ms, ns);
}});

Clazz.newMeth(C$, 'timedJoin$Thread$J', function (thread, timeout) {
if (timeout > 0) {
var ms=this.toMillis$J(timeout);
var ns=this.excessNanos$J$J(timeout, ms);
thread.join$J$I(ms, ns);
}});

Clazz.newMeth(C$, 'sleep$J', function (timeout) {
if (timeout > 0) {
var ms=this.toMillis$J(timeout);
var ns=this.excessNanos$J$J(timeout, ms);
$I$(2).sleep$J$I(ms, ns);
}});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:53 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
