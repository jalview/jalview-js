(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.time.LocalDate','java.time.LocalTime','java.time.Clock','java.util.Objects','java.time.temporal.ChronoField','java.time.format.DateTimeFormatter','java.time.temporal.ChronoUnit','java.time.temporal.TemporalQueries','java.time.OffsetDateTime','java.time.ZonedDateTime','java.time.Ser']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LocalDateTime", null, null, ['java.time.temporal.Temporal', 'java.time.temporal.TemporalAdjuster', 'java.time.chrono.ChronoLocalDateTime', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['date','java.time.LocalDate','time','java.time.LocalTime']]
,['O',['MIN','java.time.LocalDateTime','+MAX']]]

Clazz.newMeth(C$, 'now$', function () {
return C$.now$java_time_Clock($I$(3).systemDefaultZone$());
}, 1);

Clazz.newMeth(C$, 'now$java_time_ZoneId', function (zone) {
return C$.now$java_time_Clock($I$(3).system$java_time_ZoneId(zone));
}, 1);

Clazz.newMeth(C$, 'now$java_time_Clock', function (clock) {
$I$(4).requireNonNull$O$S(clock, "clock");
var now=clock.instant$();
var offset=clock.getZone$().getRules$().getOffset$java_time_Instant(now);
return C$.ofEpochSecond$J$I$java_time_ZoneOffset(now.getEpochSecond$(), now.getNano$(), offset);
}, 1);

Clazz.newMeth(C$, 'of$I$java_time_Month$I$I$I', function (year, month, dayOfMonth, hour, minute) {
var date=$I$(1).of$I$java_time_Month$I(year, month, dayOfMonth);
var time=$I$(2).of$I$I(hour, minute);
return Clazz.new_(C$.c$$java_time_LocalDate$java_time_LocalTime,[date, time]);
}, 1);

Clazz.newMeth(C$, 'of$I$java_time_Month$I$I$I$I', function (year, month, dayOfMonth, hour, minute, second) {
var date=$I$(1).of$I$java_time_Month$I(year, month, dayOfMonth);
var time=$I$(2).of$I$I$I(hour, minute, second);
return Clazz.new_(C$.c$$java_time_LocalDate$java_time_LocalTime,[date, time]);
}, 1);

Clazz.newMeth(C$, 'of$I$java_time_Month$I$I$I$I$I', function (year, month, dayOfMonth, hour, minute, second, nanoOfSecond) {
var date=$I$(1).of$I$java_time_Month$I(year, month, dayOfMonth);
var time=$I$(2).of$I$I$I$I(hour, minute, second, nanoOfSecond);
return Clazz.new_(C$.c$$java_time_LocalDate$java_time_LocalTime,[date, time]);
}, 1);

Clazz.newMeth(C$, 'of$I$I$I$I$I', function (year, month, dayOfMonth, hour, minute) {
var date=$I$(1).of$I$I$I(year, month, dayOfMonth);
var time=$I$(2).of$I$I(hour, minute);
return Clazz.new_(C$.c$$java_time_LocalDate$java_time_LocalTime,[date, time]);
}, 1);

Clazz.newMeth(C$, 'of$I$I$I$I$I$I', function (year, month, dayOfMonth, hour, minute, second) {
var date=$I$(1).of$I$I$I(year, month, dayOfMonth);
var time=$I$(2).of$I$I$I(hour, minute, second);
return Clazz.new_(C$.c$$java_time_LocalDate$java_time_LocalTime,[date, time]);
}, 1);

Clazz.newMeth(C$, 'of$I$I$I$I$I$I$I', function (year, month, dayOfMonth, hour, minute, second, nanoOfSecond) {
var date=$I$(1).of$I$I$I(year, month, dayOfMonth);
var time=$I$(2).of$I$I$I$I(hour, minute, second, nanoOfSecond);
return Clazz.new_(C$.c$$java_time_LocalDate$java_time_LocalTime,[date, time]);
}, 1);

Clazz.newMeth(C$, 'of$java_time_LocalDate$java_time_LocalTime', function (date, time) {
$I$(4).requireNonNull$O$S(date, "date");
$I$(4).requireNonNull$O$S(time, "time");
return Clazz.new_(C$.c$$java_time_LocalDate$java_time_LocalTime,[date, time]);
}, 1);

Clazz.newMeth(C$, 'ofInstant$java_time_Instant$java_time_ZoneId', function (instant, zone) {
$I$(4).requireNonNull$O$S(instant, "instant");
$I$(4).requireNonNull$O$S(zone, "zone");
var rules=zone.getRules$();
var offset=rules.getOffset$java_time_Instant(instant);
return C$.ofEpochSecond$J$I$java_time_ZoneOffset(instant.getEpochSecond$(), instant.getNano$(), offset);
}, 1);

Clazz.newMeth(C$, 'ofEpochSecond$J$I$java_time_ZoneOffset', function (epochSecond, nanoOfSecond, offset) {
$I$(4).requireNonNull$O$S(offset, "offset");
$I$(5).NANO_OF_SECOND.checkValidValue$J(nanoOfSecond);
var localSecond=epochSecond + offset.getTotalSeconds$();
var localEpochDay=Math.floorDiv(localSecond, 86400);
var secsOfDay=(Math.floorMod(localSecond, 86400)|0);
var date=$I$(1).ofEpochDay$J(localEpochDay);
var time=$I$(2).ofNanoOfDay$J(secsOfDay * 1000000000 + nanoOfSecond);
return Clazz.new_(C$.c$$java_time_LocalDate$java_time_LocalTime,[date, time]);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.LocalDateTime")) {
return temporal;
} else if (Clazz.instanceOf(temporal, "java.time.ZonedDateTime")) {
return (temporal).toLocalDateTime$();
} else if (Clazz.instanceOf(temporal, "java.time.OffsetDateTime")) {
return (temporal).toLocalDateTime$();
}try {
var date=$I$(1).from$java_time_temporal_TemporalAccessor(temporal);
var time=$I$(2).from$java_time_temporal_TemporalAccessor(temporal);
return Clazz.new_(C$.c$$java_time_LocalDate$java_time_LocalTime,[date, time]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Unable to obtain LocalDateTime from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() , ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence', function (text) {
return C$.parse$CharSequence$java_time_format_DateTimeFormatter(text, $I$(6).ISO_LOCAL_DATE_TIME);
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence$java_time_format_DateTimeFormatter', function (text, formatter) {
$I$(4).requireNonNull$O$S(formatter, "formatter");
return formatter.parse$CharSequence$java_time_temporal_TemporalQuery(text, (P$.LocalDateTime$lambda1$||(P$.LocalDateTime$lambda1$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "LocalDateTime$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (t) { return $$.from$java_time_temporal_TemporalAccessor.apply(null,[t])});
})()
)); return Clazz.new_(P$.LocalDateTime$lambda1.$init$,[this, null])})(C$)))));
}, 1);

Clazz.newMeth(C$, 'c$$java_time_LocalDate$java_time_LocalTime', function (date, time) {
;C$.$init$.apply(this);
this.date=date;
this.time=time;
}, 1);

Clazz.newMeth(C$, 'with$java_time_LocalDate$java_time_LocalTime', function (newDate, newTime) {
if (this.date === newDate  && this.time === newTime  ) {
return this;
}return Clazz.new_(C$.c$$java_time_LocalDate$java_time_LocalTime,[newDate, newTime]);
}, p$1);

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
return f.isDateBased$() || f.isTimeBased$() ;
}return field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ;
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalUnit', function (unit) {
return P$.chrono.ChronoLocalDateTime.superclazz.prototype.isSupported$java_time_temporal_TemporalUnit.apply(this, [unit]);
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
}return P$.chrono.ChronoLocalDateTime.superclazz.prototype.get$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
return (f.isTimeBased$() ? this.time.getLong$java_time_temporal_TemporalField(field) : this.date.getLong$java_time_temporal_TemporalField(field));
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'toLocalDate$', function () {
return this.date;
});

Clazz.newMeth(C$, 'getYear$', function () {
return this.date.getYear$();
});

Clazz.newMeth(C$, 'getMonthValue$', function () {
return this.date.getMonthValue$();
});

Clazz.newMeth(C$, 'getMonth$', function () {
return this.date.getMonth$();
});

Clazz.newMeth(C$, 'getDayOfMonth$', function () {
return this.date.getDayOfMonth$();
});

Clazz.newMeth(C$, 'getDayOfYear$', function () {
return this.date.getDayOfYear$();
});

Clazz.newMeth(C$, 'getDayOfWeek$', function () {
return this.date.getDayOfWeek$();
});

Clazz.newMeth(C$, 'toLocalTime$', function () {
return this.time;
});

Clazz.newMeth(C$, 'getHour$', function () {
return this.time.getHour$();
});

Clazz.newMeth(C$, 'getMinute$', function () {
return this.time.getMinute$();
});

Clazz.newMeth(C$, 'getSecond$', function () {
return this.time.getSecond$();
});

Clazz.newMeth(C$, 'getNano$', function () {
return this.time.getNano$();
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster', function (adjuster) {
if (Clazz.instanceOf(adjuster, "java.time.LocalDate")) {
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [adjuster, this.time]);
} else if (Clazz.instanceOf(adjuster, "java.time.LocalTime")) {
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date, adjuster]);
} else if (Clazz.instanceOf(adjuster, "java.time.LocalDateTime")) {
return adjuster;
}return adjuster.adjustInto$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
if (f.isTimeBased$()) {
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date, this.time.with$java_time_temporal_TemporalField$J(field, newValue)]);
} else {
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date.with$java_time_temporal_TemporalField$J(field, newValue), this.time]);
}}return field.adjustInto$java_time_temporal_Temporal$J(this, newValue);
});

Clazz.newMeth(C$, 'withYear$I', function (year) {
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date.withYear$I(year), this.time]);
});

Clazz.newMeth(C$, 'withMonth$I', function (month) {
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date.withMonth$I(month), this.time]);
});

Clazz.newMeth(C$, 'withDayOfMonth$I', function (dayOfMonth) {
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date.withDayOfMonth$I(dayOfMonth), this.time]);
});

Clazz.newMeth(C$, 'withDayOfYear$I', function (dayOfYear) {
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date.withDayOfYear$I(dayOfYear), this.time]);
});

Clazz.newMeth(C$, 'withHour$I', function (hour) {
var newTime=this.time.withHour$I(hour);
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date, newTime]);
});

Clazz.newMeth(C$, 'withMinute$I', function (minute) {
var newTime=this.time.withMinute$I(minute);
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date, newTime]);
});

Clazz.newMeth(C$, 'withSecond$I', function (second) {
var newTime=this.time.withSecond$I(second);
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date, newTime]);
});

Clazz.newMeth(C$, 'withNano$I', function (nanoOfSecond) {
var newTime=this.time.withNano$I(nanoOfSecond);
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date, newTime]);
});

Clazz.newMeth(C$, 'truncatedTo$java_time_temporal_TemporalUnit', function (unit) {
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date, this.time.truncatedTo$java_time_temporal_TemporalUnit(unit)]);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amountToAdd) {
if (Clazz.instanceOf(amountToAdd, "java.time.Period")) {
var periodToAdd=amountToAdd;
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date.plus$java_time_temporal_TemporalAmount(periodToAdd), this.time]);
}$I$(4).requireNonNull$O$S(amountToAdd, "amountToAdd");
return amountToAdd.addTo$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
var f=unit;
switch (f) {
case $I$(7).NANOS:
return this.plusNanos$J(amountToAdd);
case $I$(7).MICROS:
return this.plusDays$J(Clazz.toLong(amountToAdd/86400000000)).plusNanos$J((amountToAdd % 86400000000) * 1000);
case $I$(7).MILLIS:
return this.plusDays$J(Clazz.toLong(amountToAdd/86400000)).plusNanos$J((amountToAdd % 86400000) * 1000000);
case $I$(7).SECONDS:
return this.plusSeconds$J(amountToAdd);
case $I$(7).MINUTES:
return this.plusMinutes$J(amountToAdd);
case $I$(7).HOURS:
return this.plusHours$J(amountToAdd);
case $I$(7).HALF_DAYS:
return this.plusDays$J(Clazz.toLong(amountToAdd/256)).plusHours$J((amountToAdd % 256) * 12);
}
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date.plus$J$java_time_temporal_TemporalUnit(amountToAdd, unit), this.time]);
}return unit.addTo$java_time_temporal_Temporal$J(this, amountToAdd);
});

Clazz.newMeth(C$, 'plusYears$J', function (years) {
var newDate=this.date.plusYears$J(years);
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [newDate, this.time]);
});

Clazz.newMeth(C$, 'plusMonths$J', function (months) {
var newDate=this.date.plusMonths$J(months);
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [newDate, this.time]);
});

Clazz.newMeth(C$, 'plusWeeks$J', function (weeks) {
var newDate=this.date.plusWeeks$J(weeks);
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [newDate, this.time]);
});

Clazz.newMeth(C$, 'plusDays$J', function (days) {
var newDate=this.date.plusDays$J(days);
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [newDate, this.time]);
});

Clazz.newMeth(C$, 'plusHours$J', function (hours) {
return p$1.plusWithOverflow$java_time_LocalDate$J$J$J$J$I.apply(this, [this.date, hours, 0, 0, 0, 1]);
});

Clazz.newMeth(C$, 'plusMinutes$J', function (minutes) {
return p$1.plusWithOverflow$java_time_LocalDate$J$J$J$J$I.apply(this, [this.date, 0, minutes, 0, 0, 1]);
});

Clazz.newMeth(C$, 'plusSeconds$J', function (seconds) {
return p$1.plusWithOverflow$java_time_LocalDate$J$J$J$J$I.apply(this, [this.date, 0, 0, seconds, 0, 1]);
});

Clazz.newMeth(C$, 'plusNanos$J', function (nanos) {
return p$1.plusWithOverflow$java_time_LocalDate$J$J$J$J$I.apply(this, [this.date, 0, 0, 0, nanos, 1]);
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amountToSubtract) {
if (Clazz.instanceOf(amountToSubtract, "java.time.Period")) {
var periodToSubtract=amountToSubtract;
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [this.date.minus$java_time_temporal_TemporalAmount(periodToSubtract), this.time]);
}$I$(4).requireNonNull$O$S(amountToSubtract, "amountToSubtract");
return amountToSubtract.subtractFrom$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'minus$J$java_time_temporal_TemporalUnit', function (amountToSubtract, unit) {
return (amountToSubtract == -9223372036854775808 ? this.plus$J$java_time_temporal_TemporalUnit(9223372036854775807, unit).plus$J$java_time_temporal_TemporalUnit(1, unit) : this.plus$J$java_time_temporal_TemporalUnit(-amountToSubtract, unit));
});

Clazz.newMeth(C$, 'minusYears$J', function (years) {
return (years == -9223372036854775808 ? this.plusYears$J(9223372036854775807).plusYears$J(1) : this.plusYears$J(-years));
});

Clazz.newMeth(C$, 'minusMonths$J', function (months) {
return (months == -9223372036854775808 ? this.plusMonths$J(9223372036854775807).plusMonths$J(1) : this.plusMonths$J(-months));
});

Clazz.newMeth(C$, 'minusWeeks$J', function (weeks) {
return (weeks == -9223372036854775808 ? this.plusWeeks$J(9223372036854775807).plusWeeks$J(1) : this.plusWeeks$J(-weeks));
});

Clazz.newMeth(C$, 'minusDays$J', function (days) {
return (days == -9223372036854775808 ? this.plusDays$J(9223372036854775807).plusDays$J(1) : this.plusDays$J(-days));
});

Clazz.newMeth(C$, 'minusHours$J', function (hours) {
return p$1.plusWithOverflow$java_time_LocalDate$J$J$J$J$I.apply(this, [this.date, hours, 0, 0, 0, -1]);
});

Clazz.newMeth(C$, 'minusMinutes$J', function (minutes) {
return p$1.plusWithOverflow$java_time_LocalDate$J$J$J$J$I.apply(this, [this.date, 0, minutes, 0, 0, -1]);
});

Clazz.newMeth(C$, 'minusSeconds$J', function (seconds) {
return p$1.plusWithOverflow$java_time_LocalDate$J$J$J$J$I.apply(this, [this.date, 0, 0, seconds, 0, -1]);
});

Clazz.newMeth(C$, 'minusNanos$J', function (nanos) {
return p$1.plusWithOverflow$java_time_LocalDate$J$J$J$J$I.apply(this, [this.date, 0, 0, 0, nanos, -1]);
});

Clazz.newMeth(C$, 'plusWithOverflow$java_time_LocalDate$J$J$J$J$I', function (newDate, hours, minutes, seconds, nanos, sign) {
if ((hours | minutes | seconds | nanos ) == 0) {
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [newDate, this.time]);
}var totDays=Clazz.toLong(nanos/86400000000000) + Clazz.toLong(seconds/86400) + Clazz.toLong(minutes/1440) + Clazz.toLong(hours/24);
totDays*=sign;
var totNanos=nanos % 86400000000000 + (seconds % 86400) * 1000000000 + (minutes % 1440) * 60000000000 + (hours % 24) * 3600000000000;
var curNoD=this.time.toNanoOfDay$();
totNanos=totNanos * sign + curNoD;
totDays+=Math.floorDiv(totNanos, 86400000000000);
var newNoD=Math.floorMod(totNanos, 86400000000000);
var newTime=(newNoD == curNoD ? this.time : $I$(2).ofNanoOfDay$J(newNoD));
return p$1.with$java_time_LocalDate$java_time_LocalTime.apply(this, [newDate.plusDays$J(totDays), newTime]);
}, p$1);

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(8).localDate$() ) {
return this.date;
}return P$.chrono.ChronoLocalDateTime.superclazz.prototype.query$java_time_temporal_TemporalQuery.apply(this, [query]);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal', function (temporal) {
return P$.chrono.ChronoLocalDateTime.superclazz.prototype.adjustInto$java_time_temporal_Temporal.apply(this, [temporal]);
});

Clazz.newMeth(C$, 'until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit', function (endExclusive, unit) {
var end=C$.from$java_time_temporal_TemporalAccessor(endExclusive);
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
if (unit.isTimeBased$()) {
var amount=this.date.daysUntil$java_time_LocalDate(end.date);
if (amount == 0) {
return this.time.until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit(end.time, unit);
}var timePart=end.time.toNanoOfDay$() - this.time.toNanoOfDay$();
if (amount > 0) {
amount--;
timePart+=86400000000000;
} else {
amount++;
timePart-=86400000000000;
}switch (unit) {
case $I$(7).NANOS:
amount=Math.multiplyExact(amount, 86400000000000);
break;
case $I$(7).MICROS:
amount=Math.multiplyExact(amount, 86400000000);
timePart=Clazz.toLong(timePart/1000);
break;
case $I$(7).MILLIS:
amount=Math.multiplyExact(amount, 86400000);
timePart=Clazz.toLong(timePart/1000000);
break;
case $I$(7).SECONDS:
amount=Math.multiplyExact(amount, 86400);
timePart=Clazz.toLong(timePart/1000000000);
break;
case $I$(7).MINUTES:
amount=Math.multiplyExact(amount, 1440);
timePart=Clazz.toLong(timePart/60000000000);
break;
case $I$(7).HOURS:
amount=Math.multiplyExact(amount, 24);
timePart=Clazz.toLong(timePart/3600000000000);
break;
case $I$(7).HALF_DAYS:
amount=Math.multiplyExact(amount, 2);
timePart=Clazz.toLong(timePart/(43200000000000));
break;
}
return Math.addExact(amount, timePart);
}var endDate=end.date;
if (endDate.isAfter$java_time_chrono_ChronoLocalDate(this.date) && end.time.isBefore$java_time_LocalTime(this.time) ) {
endDate=endDate.minusDays$J(1);
} else if (endDate.isBefore$java_time_chrono_ChronoLocalDate(this.date) && end.time.isAfter$java_time_LocalTime(this.time) ) {
endDate=endDate.plusDays$J(1);
}return this.date.until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit(endDate, unit);
}return unit.between$java_time_temporal_Temporal$java_time_temporal_Temporal(this, end);
});

Clazz.newMeth(C$, 'format$java_time_format_DateTimeFormatter', function (formatter) {
$I$(4).requireNonNull$O$S(formatter, "formatter");
return formatter.format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'atOffset$java_time_ZoneOffset', function (offset) {
return $I$(9).of$java_time_LocalDateTime$java_time_ZoneOffset(this, offset);
});

Clazz.newMeth(C$, 'atZone$java_time_ZoneId', function (zone) {
return $I$(10).of$java_time_LocalDateTime$java_time_ZoneId(this, zone);
});

Clazz.newMeth(C$, ['compareTo$java_time_chrono_ChronoLocalDateTime','compareTo$O'], function (other) {
if (Clazz.instanceOf(other, "java.time.LocalDateTime")) {
return p$1.compareTo0$java_time_LocalDateTime.apply(this, [other]);
}return P$.chrono.ChronoLocalDateTime.superclazz.prototype.compareTo$java_time_chrono_ChronoLocalDateTime.apply(this, [other]);
});

Clazz.newMeth(C$, 'compareTo0$java_time_LocalDateTime', function (other) {
var cmp=this.date.compareTo0$java_time_LocalDate(other.toLocalDate$());
if (cmp == 0) {
cmp=this.time.compareTo$java_time_LocalTime(other.toLocalTime$());
}return cmp;
}, p$1);

Clazz.newMeth(C$, 'isAfter$java_time_chrono_ChronoLocalDateTime', function (other) {
if (Clazz.instanceOf(other, "java.time.LocalDateTime")) {
return p$1.compareTo0$java_time_LocalDateTime.apply(this, [other]) > 0;
}return P$.chrono.ChronoLocalDateTime.superclazz.prototype.isAfter$java_time_chrono_ChronoLocalDateTime.apply(this, [other]);
});

Clazz.newMeth(C$, 'isBefore$java_time_chrono_ChronoLocalDateTime', function (other) {
if (Clazz.instanceOf(other, "java.time.LocalDateTime")) {
return p$1.compareTo0$java_time_LocalDateTime.apply(this, [other]) < 0;
}return P$.chrono.ChronoLocalDateTime.superclazz.prototype.isBefore$java_time_chrono_ChronoLocalDateTime.apply(this, [other]);
});

Clazz.newMeth(C$, 'isEqual$java_time_chrono_ChronoLocalDateTime', function (other) {
if (Clazz.instanceOf(other, "java.time.LocalDateTime")) {
return p$1.compareTo0$java_time_LocalDateTime.apply(this, [other]) == 0;
}return P$.chrono.ChronoLocalDateTime.superclazz.prototype.isEqual$java_time_chrono_ChronoLocalDateTime.apply(this, [other]);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.LocalDateTime")) {
var other=obj;
return this.date.equals$O(other.date) && this.time.equals$O(other.time) ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.date.hashCode$() ^ this.time.hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.date.toString() + 'T' + this.time.toString() ;
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(11,1).c$$B$O,[5, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
this.date.writeExternal$java_io_DataOutput(out);
this.time.writeExternal$java_io_DataOutput(out);
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var date=$I$(1).readExternal$java_io_DataInput($in);
var time=$I$(2).readExternal$java_io_DataInput($in);
return C$.of$java_time_LocalDate$java_time_LocalTime(date, time);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MIN=C$.of$java_time_LocalDate$java_time_LocalTime($I$(1).MIN, $I$(2).MIN);
C$.MAX=C$.of$java_time_LocalDate$java_time_LocalTime($I$(1).MAX, $I$(2).MAX);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:53:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
