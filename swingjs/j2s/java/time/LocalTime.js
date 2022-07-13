(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.time.Clock','java.util.Objects','java.time.temporal.ChronoField','java.time.temporal.TemporalQueries','java.time.format.DateTimeFormatter','java.time.temporal.ChronoUnit','java.time.LocalDateTime','java.time.OffsetTime','StringBuilder','java.time.Ser']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LocalTime", null, null, ['java.time.temporal.Temporal', 'java.time.temporal.TemporalAdjuster', 'Comparable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['B',['hour','minute','second'],'I',['nano']]
,['O',['MIN','java.time.LocalTime','+MAX','+MIDNIGHT','+NOON','HOURS','java.time.LocalTime[]']]]

Clazz.newMeth(C$, 'now$', function () {
return C$.now$java_time_Clock($I$(1).systemDefaultZone$());
}, 1);

Clazz.newMeth(C$, 'now$java_time_ZoneId', function (zone) {
return C$.now$java_time_Clock($I$(1).system$java_time_ZoneId(zone));
}, 1);

Clazz.newMeth(C$, 'now$java_time_Clock', function (clock) {
$I$(2).requireNonNull$O$S(clock, "clock");
var now=clock.instant$();
var offset=clock.getZone$().getRules$().getOffset$java_time_Instant(now);
var localSecond=now.getEpochSecond$() + offset.getTotalSeconds$();
var secsOfDay=(Math.floorMod(localSecond, 86400)|0);
return C$.ofNanoOfDay$J(secsOfDay * 1000000000 + now.getNano$());
}, 1);

Clazz.newMeth(C$, 'of$I$I', function (hour, minute) {
$I$(3).HOUR_OF_DAY.checkValidValue$J(hour);
if (minute == 0) {
return C$.HOURS[hour];
}$I$(3).MINUTE_OF_HOUR.checkValidValue$J(minute);
return Clazz.new_(C$.c$$I$I$I$I,[hour, minute, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'of$I$I$I', function (hour, minute, second) {
$I$(3).HOUR_OF_DAY.checkValidValue$J(hour);
if ((minute | second) == 0) {
return C$.HOURS[hour];
}$I$(3).MINUTE_OF_HOUR.checkValidValue$J(minute);
$I$(3).SECOND_OF_MINUTE.checkValidValue$J(second);
return Clazz.new_(C$.c$$I$I$I$I,[hour, minute, second, 0]);
}, 1);

Clazz.newMeth(C$, 'of$I$I$I$I', function (hour, minute, second, nanoOfSecond) {
$I$(3).HOUR_OF_DAY.checkValidValue$J(hour);
$I$(3).MINUTE_OF_HOUR.checkValidValue$J(minute);
$I$(3).SECOND_OF_MINUTE.checkValidValue$J(second);
$I$(3).NANO_OF_SECOND.checkValidValue$J(nanoOfSecond);
return C$.create$I$I$I$I(hour, minute, second, nanoOfSecond);
}, 1);

Clazz.newMeth(C$, 'ofSecondOfDay$J', function (secondOfDay) {
$I$(3).SECOND_OF_DAY.checkValidValue$J(secondOfDay);
var hours=((Clazz.toLong(secondOfDay/3600))|0);
secondOfDay-=hours * 3600;
var minutes=((Clazz.toLong(secondOfDay/60))|0);
secondOfDay-=minutes * 60;
return C$.create$I$I$I$I(hours, minutes, (secondOfDay|0), 0);
}, 1);

Clazz.newMeth(C$, 'ofNanoOfDay$J', function (nanoOfDay) {
$I$(3).NANO_OF_DAY.checkValidValue$J(nanoOfDay);
var hours=((Clazz.toLong(nanoOfDay/3600000000000))|0);
nanoOfDay-=hours * 3600000000000;
var minutes=((Clazz.toLong(nanoOfDay/60000000000))|0);
nanoOfDay-=minutes * 60000000000;
var seconds=((Clazz.toLong(nanoOfDay/1000000000))|0);
nanoOfDay-=seconds * 1000000000;
return C$.create$I$I$I$I(hours, minutes, seconds, (nanoOfDay|0));
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
$I$(2).requireNonNull$O$S(temporal, "temporal");
var time=temporal.query$java_time_temporal_TemporalQuery($I$(4).localTime$());
if (time == null ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unable to obtain LocalTime from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() ]);
}return time;
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence', function (text) {
return C$.parse$CharSequence$java_time_format_DateTimeFormatter(text, $I$(5).ISO_LOCAL_TIME);
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence$java_time_format_DateTimeFormatter', function (text, formatter) {
$I$(2).requireNonNull$O$S(formatter, "formatter");
return formatter.parse$CharSequence$java_time_temporal_TemporalQuery(text, (P$.LocalTime$lambda1$||(P$.LocalTime$lambda1$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "LocalTime$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (t) { return $$.from$java_time_temporal_TemporalAccessor.apply(null,[t])});
})()
)); return Clazz.new_(P$.LocalTime$lambda1.$init$,[this, null])})(C$)))));
}, 1);

Clazz.newMeth(C$, 'create$I$I$I$I', function (hour, minute, second, nanoOfSecond) {
if ((minute | second | nanoOfSecond ) == 0) {
return C$.HOURS[hour];
}return Clazz.new_(C$.c$$I$I$I$I,[hour, minute, second, nanoOfSecond]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (hour, minute, second, nanoOfSecond) {
;C$.$init$.apply(this);
this.hour=($b$[0] = hour, $b$[0]);
this.minute=($b$[0] = minute, $b$[0]);
this.second=($b$[0] = second, $b$[0]);
this.nano=nanoOfSecond;
}, 1);

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
return field.isTimeBased$();
}return field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ;
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalUnit', function (unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
return unit.isTimeBased$();
}return unit != null  && unit.isSupportedBy$java_time_temporal_Temporal(this) ;
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
return P$.temporal.Temporal.superclazz.prototype.range$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
return p$1.get0$java_time_temporal_TemporalField.apply(this, [field]);
}return P$.temporal.Temporal.superclazz.prototype.get$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
if (field === $I$(3).NANO_OF_DAY ) {
return this.toNanoOfDay$();
}if (field === $I$(3).MICRO_OF_DAY ) {
return Clazz.toLong(this.toNanoOfDay$()/1000);
}return p$1.get0$java_time_temporal_TemporalField.apply(this, [field]);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'get0$java_time_temporal_TemporalField', function (field) {
switch (field) {
case $I$(3).NANO_OF_SECOND:
return this.nano;
case $I$(3).NANO_OF_DAY:
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Invalid field \'NanoOfDay\' for get() method, use getLong() instead"]);
case $I$(3).MICRO_OF_SECOND:
return (this.nano/1000|0);
case $I$(3).MICRO_OF_DAY:
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Invalid field \'MicroOfDay\' for get() method, use getLong() instead"]);
case $I$(3).MILLI_OF_SECOND:
return (this.nano/1000000|0);
case $I$(3).MILLI_OF_DAY:
return ((Clazz.toLong(this.toNanoOfDay$()/1000000))|0);
case $I$(3).SECOND_OF_MINUTE:
return this.second;
case $I$(3).SECOND_OF_DAY:
return this.toSecondOfDay$();
case $I$(3).MINUTE_OF_HOUR:
return this.minute;
case $I$(3).MINUTE_OF_DAY:
return this.hour * 60 + this.minute;
case $I$(3).HOUR_OF_AMPM:
return this.hour % 12;
case $I$(3).CLOCK_HOUR_OF_AMPM:
var ham=this.hour % 12;
return (ham % 12 == 0 ? 12 : ham);
case $I$(3).HOUR_OF_DAY:
return this.hour;
case $I$(3).CLOCK_HOUR_OF_DAY:
return (this.hour == 0 ? ($b$[0] = 24, $b$[0]) : this.hour);
case $I$(3).AMPM_OF_DAY:
return ($b$[0] = this.hour/12, $b$[0]);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}, p$1);

Clazz.newMeth(C$, 'getHour$', function () {
return this.hour;
});

Clazz.newMeth(C$, 'getMinute$', function () {
return this.minute;
});

Clazz.newMeth(C$, 'getSecond$', function () {
return this.second;
});

Clazz.newMeth(C$, 'getNano$', function () {
return this.nano;
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster', function (adjuster) {
if (Clazz.instanceOf(adjuster, "java.time.LocalTime")) {
return adjuster;
}return adjuster.adjustInto$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
f.checkValidValue$J(newValue);
switch (f) {
case $I$(3).NANO_OF_SECOND:
return this.withNano$I((newValue|0));
case $I$(3).NANO_OF_DAY:
return C$.ofNanoOfDay$J(newValue);
case $I$(3).MICRO_OF_SECOND:
return this.withNano$I((newValue|0) * 1000);
case $I$(3).MICRO_OF_DAY:
return C$.ofNanoOfDay$J(newValue * 1000);
case $I$(3).MILLI_OF_SECOND:
return this.withNano$I((newValue|0) * 1000000);
case $I$(3).MILLI_OF_DAY:
return C$.ofNanoOfDay$J(newValue * 1000000);
case $I$(3).SECOND_OF_MINUTE:
return this.withSecond$I((newValue|0));
case $I$(3).SECOND_OF_DAY:
return this.plusSeconds$J(newValue - this.toSecondOfDay$());
case $I$(3).MINUTE_OF_HOUR:
return this.withMinute$I((newValue|0));
case $I$(3).MINUTE_OF_DAY:
return this.plusMinutes$J(newValue - (this.hour * 60 + this.minute));
case $I$(3).HOUR_OF_AMPM:
return this.plusHours$J(newValue - (this.hour % 12));
case $I$(3).CLOCK_HOUR_OF_AMPM:
return this.plusHours$J((newValue == 12 ? 0 : newValue) - (this.hour % 12));
case $I$(3).HOUR_OF_DAY:
return this.withHour$I((newValue|0));
case $I$(3).CLOCK_HOUR_OF_DAY:
return this.withHour$I(((newValue == 24 ? 0 : newValue)|0));
case $I$(3).AMPM_OF_DAY:
return this.plusHours$J((newValue - (($b$[0] = this.hour/12, $b$[0]))) * 12);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.adjustInto$java_time_temporal_Temporal$J(this, newValue);
});

Clazz.newMeth(C$, 'withHour$I', function (hour) {
if (this.hour == hour) {
return this;
}$I$(3).HOUR_OF_DAY.checkValidValue$J(hour);
return C$.create$I$I$I$I(hour, this.minute, this.second, this.nano);
});

Clazz.newMeth(C$, 'withMinute$I', function (minute) {
if (this.minute == minute) {
return this;
}$I$(3).MINUTE_OF_HOUR.checkValidValue$J(minute);
return C$.create$I$I$I$I(this.hour, minute, this.second, this.nano);
});

Clazz.newMeth(C$, 'withSecond$I', function (second) {
if (this.second == second) {
return this;
}$I$(3).SECOND_OF_MINUTE.checkValidValue$J(second);
return C$.create$I$I$I$I(this.hour, this.minute, second, this.nano);
});

Clazz.newMeth(C$, 'withNano$I', function (nanoOfSecond) {
if (this.nano == nanoOfSecond) {
return this;
}$I$(3).NANO_OF_SECOND.checkValidValue$J(nanoOfSecond);
return C$.create$I$I$I$I(this.hour, this.minute, this.second, nanoOfSecond);
});

Clazz.newMeth(C$, 'truncatedTo$java_time_temporal_TemporalUnit', function (unit) {
if (unit === $I$(6).NANOS ) {
return this;
}var unitDur=unit.getDuration$();
if (unitDur.getSeconds$() > 86400) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unit is too large to be used for truncation"]);
}var dur=unitDur.toNanos$();
if ((86400000000000 % dur) != 0) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unit must divide into a standard day without remainder"]);
}var nod=this.toNanoOfDay$();
return C$.ofNanoOfDay$J((Clazz.toLong(nod/dur)) * dur);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amountToAdd) {
return amountToAdd.addTo$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
switch (unit) {
case $I$(6).NANOS:
return this.plusNanos$J(amountToAdd);
case $I$(6).MICROS:
return this.plusNanos$J((amountToAdd % 86400000000) * 1000);
case $I$(6).MILLIS:
return this.plusNanos$J((amountToAdd % 86400000) * 1000000);
case $I$(6).SECONDS:
return this.plusSeconds$J(amountToAdd);
case $I$(6).MINUTES:
return this.plusMinutes$J(amountToAdd);
case $I$(6).HOURS:
return this.plusHours$J(amountToAdd);
case $I$(6).HALF_DAYS:
return this.plusHours$J((amountToAdd % 2) * 12);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}return unit.addTo$java_time_temporal_Temporal$J(this, amountToAdd);
});

Clazz.newMeth(C$, 'plusHours$J', function (hoursToAdd) {
if (hoursToAdd == 0) {
return this;
}var newHour=(((hoursToAdd % 24)|0) + this.hour + 24 ) % 24;
return C$.create$I$I$I$I(newHour, this.minute, this.second, this.nano);
});

Clazz.newMeth(C$, 'plusMinutes$J', function (minutesToAdd) {
if (minutesToAdd == 0) {
return this;
}var mofd=this.hour * 60 + this.minute;
var newMofd=(((minutesToAdd % 1440)|0) + mofd + 1440 ) % 1440;
if (mofd == newMofd) {
return this;
}var newHour=(newMofd/60|0);
var newMinute=newMofd % 60;
return C$.create$I$I$I$I(newHour, newMinute, this.second, this.nano);
});

Clazz.newMeth(C$, 'plusSeconds$J', function (secondstoAdd) {
if (secondstoAdd == 0) {
return this;
}var sofd=this.hour * 3600 + this.minute * 60 + this.second;
var newSofd=(((secondstoAdd % 86400)|0) + sofd + 86400 ) % 86400;
if (sofd == newSofd) {
return this;
}var newHour=(newSofd/3600|0);
var newMinute=((newSofd/60|0)) % 60;
var newSecond=newSofd % 60;
return C$.create$I$I$I$I(newHour, newMinute, newSecond, this.nano);
});

Clazz.newMeth(C$, 'plusNanos$J', function (nanosToAdd) {
if (nanosToAdd == 0) {
return this;
}var nofd=this.toNanoOfDay$();
var newNofd=((nanosToAdd % 86400000000000) + nofd + 86400000000000 ) % 86400000000000;
if (nofd == newNofd) {
return this;
}var newHour=((Clazz.toLong(newNofd/3600000000000))|0);
var newMinute=(((Clazz.toLong(newNofd/60000000000)) % 60)|0);
var newSecond=(((Clazz.toLong(newNofd/1000000000)) % 60)|0);
var newNano=((newNofd % 1000000000)|0);
return C$.create$I$I$I$I(newHour, newMinute, newSecond, newNano);
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amountToSubtract) {
return amountToSubtract.subtractFrom$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'minus$J$java_time_temporal_TemporalUnit', function (amountToSubtract, unit) {
return (amountToSubtract == -9223372036854775808 ? this.plus$J$java_time_temporal_TemporalUnit(9223372036854775807, unit).plus$J$java_time_temporal_TemporalUnit(1, unit) : this.plus$J$java_time_temporal_TemporalUnit(-amountToSubtract, unit));
});

Clazz.newMeth(C$, 'minusHours$J', function (hoursToSubtract) {
return this.plusHours$J(-(hoursToSubtract % 24));
});

Clazz.newMeth(C$, 'minusMinutes$J', function (minutesToSubtract) {
return this.plusMinutes$J(-(minutesToSubtract % 1440));
});

Clazz.newMeth(C$, 'minusSeconds$J', function (secondsToSubtract) {
return this.plusSeconds$J(-(secondsToSubtract % 86400));
});

Clazz.newMeth(C$, 'minusNanos$J', function (nanosToSubtract) {
return this.plusNanos$J(-(nanosToSubtract % 86400000000000));
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(4).chronology$()  || query === $I$(4).zoneId$()   || query === $I$(4).zone$()   || query === $I$(4).offset$()  ) {
return null;
} else if (query === $I$(4).localTime$() ) {
return this;
} else if (query === $I$(4).localDate$() ) {
return null;
} else if (query === $I$(4).precision$() ) {
return $I$(6).NANOS;
}return query.queryFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal', function (temporal) {
return temporal.with$java_time_temporal_TemporalField$J($I$(3).NANO_OF_DAY, this.toNanoOfDay$());
});

Clazz.newMeth(C$, 'until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit', function (endExclusive, unit) {
var end=C$.from$java_time_temporal_TemporalAccessor(endExclusive);
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
var nanosUntil=end.toNanoOfDay$() - this.toNanoOfDay$();
switch (unit) {
case $I$(6).NANOS:
return nanosUntil;
case $I$(6).MICROS:
return Clazz.toLong(nanosUntil/1000);
case $I$(6).MILLIS:
return Clazz.toLong(nanosUntil/1000000);
case $I$(6).SECONDS:
return Clazz.toLong(nanosUntil/1000000000);
case $I$(6).MINUTES:
return Clazz.toLong(nanosUntil/60000000000);
case $I$(6).HOURS:
return Clazz.toLong(nanosUntil/3600000000000);
case $I$(6).HALF_DAYS:
return Clazz.toLong(nanosUntil/(43200000000000));
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}return unit.between$java_time_temporal_Temporal$java_time_temporal_Temporal(this, end);
});

Clazz.newMeth(C$, 'format$java_time_format_DateTimeFormatter', function (formatter) {
$I$(2).requireNonNull$O$S(formatter, "formatter");
return formatter.format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'atDate$java_time_LocalDate', function (date) {
return $I$(7).of$java_time_LocalDate$java_time_LocalTime(date, this);
});

Clazz.newMeth(C$, 'atOffset$java_time_ZoneOffset', function (offset) {
return $I$(8).of$java_time_LocalTime$java_time_ZoneOffset(this, offset);
});

Clazz.newMeth(C$, 'toSecondOfDay$', function () {
var total=this.hour * 3600;
total+=this.minute * 60;
total+=this.second;
return total;
});

Clazz.newMeth(C$, 'toNanoOfDay$', function () {
var total=this.hour * 3600000000000;
total+=this.minute * 60000000000;
total+=this.second * 1000000000;
total+=this.nano;
return total;
});

Clazz.newMeth(C$, ['compareTo$java_time_LocalTime','compareTo$O'], function (other) {
var cmp=Integer.compare$I$I(this.hour, other.hour);
if (cmp == 0) {
cmp=Integer.compare$I$I(this.minute, other.minute);
if (cmp == 0) {
cmp=Integer.compare$I$I(this.second, other.second);
if (cmp == 0) {
cmp=Integer.compare$I$I(this.nano, other.nano);
}}}return cmp;
});

Clazz.newMeth(C$, 'isAfter$java_time_LocalTime', function (other) {
return this.compareTo$java_time_LocalTime(other) > 0;
});

Clazz.newMeth(C$, 'isBefore$java_time_LocalTime', function (other) {
return this.compareTo$java_time_LocalTime(other) < 0;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.LocalTime")) {
var other=obj;
return this.hour == other.hour && this.minute == other.minute  && this.second == other.second  && this.nano == other.nano ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var nod=this.toNanoOfDay$();
return ((nod ^ (nod >>> 32))|0);
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(9,1).c$$I,[18]);
var hourValue=this.hour;
var minuteValue=this.minute;
var secondValue=this.second;
var nanoValue=this.nano;
buf.append$S(hourValue < 10 ? "0" : "").append$I(hourValue).append$S(minuteValue < 10 ? ":0" : ":").append$I(minuteValue);
if (secondValue > 0 || nanoValue > 0 ) {
buf.append$S(secondValue < 10 ? ":0" : ":").append$I(secondValue);
if (nanoValue > 0) {
buf.append$C(".");
if (nanoValue % 1000000 == 0) {
buf.append$S(Integer.toString$I(((nanoValue/1000000|0)) + 1000).substring$I(1));
} else if (nanoValue % 1000 == 0) {
buf.append$S(Integer.toString$I(((nanoValue/1000|0)) + 1000000).substring$I(1));
} else {
buf.append$S(Integer.toString$I((nanoValue) + 1000000000).substring$I(1));
}}}return buf.toString();
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(10,1).c$$B$O,[4, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
if (this.nano == 0) {
if (this.second == 0) {
if (this.minute == 0) {
out.writeByte$I(~this.hour);
} else {
out.writeByte$I(this.hour);
out.writeByte$I(~this.minute);
}} else {
out.writeByte$I(this.hour);
out.writeByte$I(this.minute);
out.writeByte$I(~this.second);
}} else {
out.writeByte$I(this.hour);
out.writeByte$I(this.minute);
out.writeByte$I(this.second);
out.writeInt$I(this.nano);
}});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var hour=$in.readByte$();
var minute=0;
var second=0;
var nano=0;
if (hour < 0) {
hour=~hour;
} else {
minute=$in.readByte$();
if (minute < 0) {
minute=~minute;
} else {
second=$in.readByte$();
if (second < 0) {
second=~second;
} else {
nano=$in.readInt$();
}}}return C$.of$I$I$I$I(hour, minute, second, nano);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.HOURS=Clazz.array(C$, [24]);
{
for (var i=0; i < C$.HOURS.length; i++) {
C$.HOURS[i]=Clazz.new_(C$.c$$I$I$I$I,[i, 0, 0, 0]);
}
C$.MIDNIGHT=C$.HOURS[0];
C$.NOON=C$.HOURS[12];
C$.MIN=C$.HOURS[0];
C$.MAX=Clazz.new_(C$.c$$I$I$I$I,[23, 59, 59, 999999999]);
};
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:53:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
