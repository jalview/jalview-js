(function(){var P$=Clazz.newPackage("java.time.temporal"),I$=[[0,'java.time.Duration']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*e*/var C$=Clazz.newClass(P$, "ChronoUnit", null, 'Enum', 'java.time.temporal.TemporalUnit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['$name'],'O',['duration','java.time.Duration']]]

Clazz.newMeth(C$, 'c$$S$java_time_Duration', function (name, estimatedDuration) {
;C$.$init$.apply(this);
this.$name=name;
this.duration=estimatedDuration;
}, 1);

Clazz.newMeth(C$, 'getDuration$', function () {
return this.duration;
});

Clazz.newMeth(C$, 'isDurationEstimated$', function () {
return this.compareTo$Enum(C$.DAYS) >= 0;
});

Clazz.newMeth(C$, 'isDateBased$', function () {
return this.compareTo$Enum(C$.DAYS) >= 0 && this !== C$.FOREVER  ;
});

Clazz.newMeth(C$, 'isTimeBased$', function () {
return this.compareTo$Enum(C$.DAYS) < 0;
});

Clazz.newMeth(C$, 'isSupportedBy$java_time_temporal_Temporal', function (temporal) {
return temporal.isSupported$java_time_temporal_TemporalUnit(this);
});

Clazz.newMeth(C$, 'addTo$java_time_temporal_Temporal$J', function (temporal, amount) {
return temporal.plus$J$java_time_temporal_TemporalUnit(amount, this);
});

Clazz.newMeth(C$, 'between$java_time_temporal_Temporal$java_time_temporal_Temporal', function (temporal1Inclusive, temporal2Exclusive) {
return temporal1Inclusive.until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit(temporal2Exclusive, this);
});

Clazz.newMeth(C$, 'toString', function () {
return this.$name;
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "NANOS", 0, ["Nanos", $I$(1).ofNanos$J(1)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "MICROS", 1, ["Micros", $I$(1).ofNanos$J(1000)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "MILLIS", 2, ["Millis", $I$(1).ofNanos$J(1000000)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "SECONDS", 3, ["Seconds", $I$(1).ofSeconds$J(1)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "MINUTES", 4, ["Minutes", $I$(1).ofSeconds$J(60)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "HOURS", 5, ["Hours", $I$(1).ofSeconds$J(3600)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "HALF_DAYS", 6, ["HalfDays", $I$(1).ofSeconds$J(43200)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "DAYS", 7, ["Days", $I$(1).ofSeconds$J(86400)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "WEEKS", 8, ["Weeks", $I$(1).ofSeconds$J(604800)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "MONTHS", 9, ["Months", $I$(1).ofSeconds$J(2629746)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "YEARS", 10, ["Years", $I$(1).ofSeconds$J(31556952)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "DECADES", 11, ["Decades", $I$(1).ofSeconds$J(315569520)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "CENTURIES", 12, ["Centuries", $I$(1).ofSeconds$J(3155695200)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "MILLENNIA", 13, ["Millennia", $I$(1).ofSeconds$J(31556952000)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "ERAS", 14, ["Eras", $I$(1).ofSeconds$J(31556952000000000)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "FOREVER", 15, ["Forever", $I$(1).ofSeconds$J$J(9223372036854775807, 999999999)]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
