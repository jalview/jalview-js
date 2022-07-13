(function(){var P$=Clazz.newPackage("java.time"),I$=[[0,'java.time.Instant','java.time.Duration',['java.time.Clock','.SystemClock'],'java.time.ZoneOffset','java.time.ZoneId','java.util.Objects',['java.time.Clock','.TickClock'],['java.time.Clock','.FixedClock'],['java.time.Clock','.OffsetClock']]],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Clock", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['SystemClock',24],['FixedClock',24],['OffsetClock',24],['TickClock',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'systemUTC$', function () {
return Clazz.new_([$I$(4).UTC],$I$(3,1).c$$java_time_ZoneId);
}, 1);

Clazz.newMeth(C$, 'systemDefaultZone$', function () {
return Clazz.new_([$I$(5).systemDefault$()],$I$(3,1).c$$java_time_ZoneId);
}, 1);

Clazz.newMeth(C$, 'system$java_time_ZoneId', function (zone) {
$I$(6).requireNonNull$O$S(zone, "zone");
return Clazz.new_($I$(3,1).c$$java_time_ZoneId,[zone]);
}, 1);

Clazz.newMeth(C$, 'tickSeconds$java_time_ZoneId', function (zone) {
return Clazz.new_([C$.system$java_time_ZoneId(zone), 1000000000],$I$(7,1).c$$java_time_Clock$J);
}, 1);

Clazz.newMeth(C$, 'tickMinutes$java_time_ZoneId', function (zone) {
return Clazz.new_([C$.system$java_time_ZoneId(zone), 60000000000],$I$(7,1).c$$java_time_Clock$J);
}, 1);

Clazz.newMeth(C$, 'tick$java_time_Clock$java_time_Duration', function (baseClock, tickDuration) {
$I$(6).requireNonNull$O$S(baseClock, "baseClock");
$I$(6).requireNonNull$O$S(tickDuration, "tickDuration");
if (tickDuration.isNegative$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Tick duration must not be negative"]);
}var tickNanos=tickDuration.toNanos$();
if (tickNanos % 1000000 == 0) {
} else if (1000000000 % tickNanos == 0) {
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid tick duration"]);
}if (tickNanos <= 1) {
return baseClock;
}return Clazz.new_($I$(7,1).c$$java_time_Clock$J,[baseClock, tickNanos]);
}, 1);

Clazz.newMeth(C$, 'fixed$java_time_Instant$java_time_ZoneId', function (fixedInstant, zone) {
$I$(6).requireNonNull$O$S(fixedInstant, "fixedInstant");
$I$(6).requireNonNull$O$S(zone, "zone");
return Clazz.new_($I$(8,1).c$$java_time_Instant$java_time_ZoneId,[fixedInstant, zone]);
}, 1);

Clazz.newMeth(C$, 'offset$java_time_Clock$java_time_Duration', function (baseClock, offsetDuration) {
$I$(6).requireNonNull$O$S(baseClock, "baseClock");
$I$(6).requireNonNull$O$S(offsetDuration, "offsetDuration");
if (offsetDuration.equals$O($I$(2).ZERO)) {
return baseClock;
}return Clazz.new_($I$(9,1).c$$java_time_Clock$java_time_Duration,[baseClock, offsetDuration]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'millis$', function () {
return this.instant$().toEpochMilli$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return C$.superclazz.prototype.equals$O.apply(this, [obj]);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return C$.superclazz.prototype.hashCode$.apply(this, []);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Clock, "SystemClock", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.time.Clock', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['zone','java.time.ZoneId']]]

Clazz.newMeth(C$, 'c$$java_time_ZoneId', function (zone) {
Clazz.super_(C$, this);
this.zone=zone;
}, 1);

Clazz.newMeth(C$, 'getZone$', function () {
return this.zone;
});

Clazz.newMeth(C$, 'withZone$java_time_ZoneId', function (zone) {
if (zone.equals$O(this.zone)) {
return this;
}return Clazz.new_(C$.c$$java_time_ZoneId,[zone]);
});

Clazz.newMeth(C$, 'millis$', function () {
return System.currentTimeMillis$();
});

Clazz.newMeth(C$, 'instant$', function () {
return $I$(1,"ofEpochMilli$J",[this.millis$()]);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "java.time.Clock.SystemClock")) {
return this.zone.equals$O((obj).zone);
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.zone.hashCode$() + 1;
});

Clazz.newMeth(C$, 'toString', function () {
return "SystemClock[" + this.zone + "]" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Clock, "FixedClock", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.time.Clock', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['instant','java.time.Instant','zone','java.time.ZoneId']]]

Clazz.newMeth(C$, 'c$$java_time_Instant$java_time_ZoneId', function (fixedInstant, zone) {
Clazz.super_(C$, this);
this.instant=fixedInstant;
this.zone=zone;
}, 1);

Clazz.newMeth(C$, 'getZone$', function () {
return this.zone;
});

Clazz.newMeth(C$, 'withZone$java_time_ZoneId', function (zone) {
if (zone.equals$O(this.zone)) {
return this;
}return Clazz.new_(C$.c$$java_time_Instant$java_time_ZoneId,[this.instant, zone]);
});

Clazz.newMeth(C$, 'millis$', function () {
return this.instant.toEpochMilli$();
});

Clazz.newMeth(C$, 'instant$', function () {
return this.instant;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "java.time.Clock.FixedClock")) {
var other=obj;
return this.instant.equals$O(other.instant) && this.zone.equals$O(other.zone) ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.instant.hashCode$() ^ this.zone.hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return "FixedClock[" + this.instant + "," + this.zone + "]" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Clock, "OffsetClock", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.time.Clock', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['baseClock','java.time.Clock','offset','java.time.Duration']]]

Clazz.newMeth(C$, 'c$$java_time_Clock$java_time_Duration', function (baseClock, offset) {
Clazz.super_(C$, this);
this.baseClock=baseClock;
this.offset=offset;
}, 1);

Clazz.newMeth(C$, 'getZone$', function () {
return this.baseClock.getZone$();
});

Clazz.newMeth(C$, 'withZone$java_time_ZoneId', function (zone) {
if (zone.equals$O(this.baseClock.getZone$())) {
return this;
}return Clazz.new_(C$.c$$java_time_Clock$java_time_Duration,[this.baseClock.withZone$java_time_ZoneId(zone), this.offset]);
});

Clazz.newMeth(C$, 'millis$', function () {
return Math.addExact(this.baseClock.millis$(), this.offset.toMillis$());
});

Clazz.newMeth(C$, 'instant$', function () {
return this.baseClock.instant$().plus$java_time_temporal_TemporalAmount(this.offset);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "java.time.Clock.OffsetClock")) {
var other=obj;
return this.baseClock.equals$O(other.baseClock) && this.offset.equals$O(other.offset) ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.baseClock.hashCode$() ^ this.offset.hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return "OffsetClock[" + this.baseClock + "," + this.offset + "]" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Clock, "TickClock", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.time.Clock', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['tickNanos'],'O',['baseClock','java.time.Clock']]]

Clazz.newMeth(C$, 'c$$java_time_Clock$J', function (baseClock, tickNanos) {
Clazz.super_(C$, this);
this.baseClock=baseClock;
this.tickNanos=tickNanos;
}, 1);

Clazz.newMeth(C$, 'getZone$', function () {
return this.baseClock.getZone$();
});

Clazz.newMeth(C$, 'withZone$java_time_ZoneId', function (zone) {
if (zone.equals$O(this.baseClock.getZone$())) {
return this;
}return Clazz.new_(C$.c$$java_time_Clock$J,[this.baseClock.withZone$java_time_ZoneId(zone), this.tickNanos]);
});

Clazz.newMeth(C$, 'millis$', function () {
var millis=this.baseClock.millis$();
return millis - Math.floorMod(millis, Clazz.toLong(this.tickNanos/1000000));
});

Clazz.newMeth(C$, 'instant$', function () {
if ((this.tickNanos % 1000000) == 0) {
var millis=this.baseClock.millis$();
return $I$(1,"ofEpochMilli$J",[millis - Math.floorMod(millis, Clazz.toLong(this.tickNanos/1000000))]);
}var instant=this.baseClock.instant$();
var nanos=instant.getNano$();
var adjust=Math.floorMod(nanos, this.tickNanos);
return instant.minusNanos$J(adjust);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "java.time.Clock.TickClock")) {
var other=obj;
return this.baseClock.equals$O(other.baseClock) && this.tickNanos == other.tickNanos ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.baseClock.hashCode$() ^ (((this.tickNanos ^ (this.tickNanos >>> 32))|0));
});

Clazz.newMeth(C$, 'toString', function () {
return "TickClock[" + this.baseClock + "," + $I$(2).ofNanos$J(this.tickNanos) + "]" ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
