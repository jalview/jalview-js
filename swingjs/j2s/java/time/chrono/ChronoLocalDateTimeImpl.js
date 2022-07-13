(function(){var P$=Clazz.newPackage("java.time.chrono"),p$1={},I$=[[0,'java.util.Objects','java.time.chrono.ChronoLocalDateImpl','java.time.temporal.ChronoUnit','java.time.LocalTime','java.time.chrono.ChronoZonedDateTimeImpl','java.time.temporal.ChronoField','java.time.chrono.Ser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChronoLocalDateTimeImpl", null, null, ['java.time.chrono.ChronoLocalDateTime', 'java.time.temporal.Temporal', 'java.time.temporal.TemporalAdjuster', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['date','<D extends java.time.chrono.ChronoLocalDate>','time','java.time.LocalTime']]]

Clazz.newMeth(C$, 'of$java_time_chrono_ChronoLocalDate$java_time_LocalTime', function (date, time) {
return Clazz.new_(C$.c$$java_time_chrono_ChronoLocalDate$java_time_LocalTime,[date, time]);
}, 1);

Clazz.newMeth(C$, 'ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal', function (chrono, temporal) {
var other=temporal;
if (chrono.equals$O(other.getChronology$()) == false ) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["Chronology mismatch, required: " + chrono.getId$() + ", actual: " + other.getChronology$().getId$() ]);
}return other;
}, 1);

Clazz.newMeth(C$, 'c$$java_time_chrono_ChronoLocalDate$java_time_LocalTime', function (date, time) {
;C$.$init$.apply(this);
$I$(1).requireNonNull$O$S(date, "date");
$I$(1).requireNonNull$O$S(time, "time");
this.date=date;
this.time=time;
}, 1);

Clazz.newMeth(C$, 'with$java_time_temporal_Temporal$java_time_LocalTime', function (newDate, newTime) {
if (this.date === newDate  && this.time === newTime  ) {
return this;
}var cd=$I$(2,"ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal",[this.date.getChronology$(), newDate]);
return Clazz.new_(C$.c$$java_time_chrono_ChronoLocalDate$java_time_LocalTime,[cd, newTime]);
}, p$1);

Clazz.newMeth(C$, 'toLocalDate$', function () {
return this.date;
});

Clazz.newMeth(C$, 'toLocalTime$', function () {
return this.time;
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
return f.isDateBased$() || f.isTimeBased$() ;
}return field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ;
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
return (f.isTimeBased$() ? this.time.range$java_time_temporal_TemporalField(field) : this.date.range$java_time_temporal_TemporalField(field));
}return field.rangeRefinedBy$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
return (f.isTimeBased$() ? this.time.get$java_time_temporal_TemporalField(field) : this.date.get$java_time_temporal_TemporalField(field));
}return this.range$java_time_temporal_TemporalField(field).checkValidIntValue$J$java_time_temporal_TemporalField(this.getLong$java_time_temporal_TemporalField(field), field);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
return (f.isTimeBased$() ? this.time.getLong$java_time_temporal_TemporalField(field) : this.date.getLong$java_time_temporal_TemporalField(field));
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster', function (adjuster) {
if (Clazz.instanceOf(adjuster, "java.time.chrono.ChronoLocalDate")) {
return p$1.with$java_time_temporal_Temporal$java_time_LocalTime.apply(this, [adjuster, this.time]);
} else if (Clazz.instanceOf(adjuster, "java.time.LocalTime")) {
return p$1.with$java_time_temporal_Temporal$java_time_LocalTime.apply(this, [this.date, adjuster]);
} else if (Clazz.instanceOf(adjuster, "java.time.chrono.ChronoLocalDateTimeImpl")) {
return C$.ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal(this.date.getChronology$(), adjuster);
}return C$.ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal(this.date.getChronology$(), adjuster.adjustInto$java_time_temporal_Temporal(this));
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
if (f.isTimeBased$()) {
return p$1.with$java_time_temporal_Temporal$java_time_LocalTime.apply(this, [this.date, this.time.with$java_time_temporal_TemporalField$J(field, newValue)]);
} else {
return p$1.with$java_time_temporal_Temporal$java_time_LocalTime.apply(this, [this.date.with$java_time_temporal_TemporalField$J(field, newValue), this.time]);
}}return C$.ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal(this.date.getChronology$(), field.adjustInto$java_time_temporal_Temporal$J(this, newValue));
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
var f=unit;
switch (f) {
case $I$(3).NANOS:
return p$1.plusNanos$J.apply(this, [amountToAdd]);
case $I$(3).MICROS:
return p$1.plusNanos$J.apply(p$1.plusDays$J.apply(this, [Clazz.toLong(amountToAdd/86400000000)]), [(amountToAdd % 86400000000) * 1000]);
case $I$(3).MILLIS:
return p$1.plusNanos$J.apply(p$1.plusDays$J.apply(this, [Clazz.toLong(amountToAdd/86400000)]), [(amountToAdd % 86400000) * 1000000]);
case $I$(3).SECONDS:
return this.plusSeconds$J(amountToAdd);
case $I$(3).MINUTES:
return p$1.plusMinutes$J.apply(this, [amountToAdd]);
case $I$(3).HOURS:
return p$1.plusHours$J.apply(this, [amountToAdd]);
case $I$(3).HALF_DAYS:
return p$1.plusHours$J.apply(p$1.plusDays$J.apply(this, [Clazz.toLong(amountToAdd/256)]), [(amountToAdd % 256) * 12]);
}
return p$1.with$java_time_temporal_Temporal$java_time_LocalTime.apply(this, [this.date.plus$J$java_time_temporal_TemporalUnit(amountToAdd, unit), this.time]);
}return C$.ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal(this.date.getChronology$(), unit.addTo$java_time_temporal_Temporal$J(this, amountToAdd));
});

Clazz.newMeth(C$, 'plusDays$J', function (days) {
return p$1.with$java_time_temporal_Temporal$java_time_LocalTime.apply(this, [this.date.plus$J$java_time_temporal_TemporalUnit(days, $I$(3).DAYS), this.time]);
}, p$1);

Clazz.newMeth(C$, 'plusHours$J', function (hours) {
return p$1.plusWithOverflow$java_time_chrono_ChronoLocalDate$J$J$J$J.apply(this, [this.date, hours, 0, 0, 0]);
}, p$1);

Clazz.newMeth(C$, 'plusMinutes$J', function (minutes) {
return p$1.plusWithOverflow$java_time_chrono_ChronoLocalDate$J$J$J$J.apply(this, [this.date, 0, minutes, 0, 0]);
}, p$1);

Clazz.newMeth(C$, 'plusSeconds$J', function (seconds) {
return p$1.plusWithOverflow$java_time_chrono_ChronoLocalDate$J$J$J$J.apply(this, [this.date, 0, 0, seconds, 0]);
});

Clazz.newMeth(C$, 'plusNanos$J', function (nanos) {
return p$1.plusWithOverflow$java_time_chrono_ChronoLocalDate$J$J$J$J.apply(this, [this.date, 0, 0, 0, nanos]);
}, p$1);

Clazz.newMeth(C$, 'plusWithOverflow$java_time_chrono_ChronoLocalDate$J$J$J$J', function (newDate, hours, minutes, seconds, nanos) {
if ((hours | minutes | seconds | nanos ) == 0) {
return p$1.with$java_time_temporal_Temporal$java_time_LocalTime.apply(this, [newDate, this.time]);
}var totDays=Clazz.toLong(nanos/86400000000000) + Clazz.toLong(seconds/86400) + Clazz.toLong(minutes/1440) + Clazz.toLong(hours/24);
var totNanos=nanos % 86400000000000 + (seconds % 86400) * 1000000000 + (minutes % 1440) * 60000000000 + (hours % 24) * 3600000000000;
var curNoD=this.time.toNanoOfDay$();
totNanos=totNanos + curNoD;
totDays+=Math.floorDiv(totNanos, 86400000000000);
var newNoD=Math.floorMod(totNanos, 86400000000000);
var newTime=(newNoD == curNoD ? this.time : $I$(4).ofNanoOfDay$J(newNoD));
return p$1.with$java_time_temporal_Temporal$java_time_LocalTime.apply(this, [newDate.plus$J$java_time_temporal_TemporalUnit(totDays, $I$(3).DAYS), newTime]);
}, p$1);

Clazz.newMeth(C$, 'atZone$java_time_ZoneId', function (zone) {
return $I$(5).ofBest$java_time_chrono_ChronoLocalDateTimeImpl$java_time_ZoneId$java_time_ZoneOffset(this, zone, null);
});

Clazz.newMeth(C$, 'until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit', function (endExclusive, unit) {
$I$(1).requireNonNull$O$S(endExclusive, "endExclusive");
var end=this.getChronology$().localDateTime$java_time_temporal_TemporalAccessor(endExclusive);
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
if (unit.isTimeBased$()) {
var amount=end.getLong$java_time_temporal_TemporalField($I$(6).EPOCH_DAY) - this.date.getLong$java_time_temporal_TemporalField($I$(6).EPOCH_DAY);
switch (unit) {
case $I$(3).NANOS:
amount=Math.multiplyExact(amount, 86400000000000);
break;
case $I$(3).MICROS:
amount=Math.multiplyExact(amount, 86400000000);
break;
case $I$(3).MILLIS:
amount=Math.multiplyExact(amount, 86400000);
break;
case $I$(3).SECONDS:
amount=Math.multiplyExact(amount, 86400);
break;
case $I$(3).MINUTES:
amount=Math.multiplyExact(amount, 1440);
break;
case $I$(3).HOURS:
amount=Math.multiplyExact(amount, 24);
break;
case $I$(3).HALF_DAYS:
amount=Math.multiplyExact(amount, 2);
break;
}
return Math.addExact(amount, this.time.until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit(end.toLocalTime$(), unit));
}var endDate=end.toLocalDate$();
if (end.toLocalTime$().isBefore$java_time_LocalTime(this.time)) {
endDate=endDate.minus$J$java_time_temporal_TemporalUnit(1, $I$(3).DAYS);
}return this.date.until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit(endDate, unit);
}$I$(1).requireNonNull$O$S(unit, "unit");
return unit.between$java_time_temporal_Temporal$java_time_temporal_Temporal(this, end);
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(7,1).c$$B$O,[2, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeObject$O(this.date);
out.writeObject$O(this.time);
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
var date=$in.readObject$();
var time=$in.readObject$();
return date.atTime$java_time_LocalTime(time);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.chrono.ChronoLocalDateTime")) {
return this.compareTo$java_time_chrono_ChronoLocalDateTime(obj) == 0;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.toLocalDate$().hashCode$() ^ this.toLocalTime$().hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.toLocalDate$().toString() + 'T' + this.toLocalTime$().toString() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
