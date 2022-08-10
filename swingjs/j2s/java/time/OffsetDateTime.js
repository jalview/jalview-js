(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.time.LocalDateTime','java.time.ZoneOffset','java.time.Clock','java.util.Objects','java.time.temporal.TemporalQueries','java.time.Instant','java.time.format.DateTimeFormatter','java.time.temporal.ChronoUnit','java.time.temporal.ChronoField','java.time.chrono.IsoChronology','java.time.ZonedDateTime','java.time.OffsetTime','java.time.Ser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OffsetDateTime", null, null, ['java.time.temporal.Temporal', 'java.time.temporal.TemporalAdjuster', 'Comparable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dateTime','java.time.LocalDateTime','offset','java.time.ZoneOffset']]
,['O',['MIN','java.time.OffsetDateTime','+MAX']]]

Clazz.newMeth(C$, 'timeLineOrder$', function () {
return (P$.OffsetDateTime$lambda1$||(P$.OffsetDateTime$lambda1$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "OffsetDateTime$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'compare$O$O', function (t,u) { return compareInstant$java_time_OffsetDateTime$java_time_OffsetDateTime.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.OffsetDateTime$lambda1.$init$,[this, null])})(C$))));
}, 1);

Clazz.newMeth(C$, 'compareInstant$java_time_OffsetDateTime$java_time_OffsetDateTime', function (datetime1, datetime2) {
if (datetime1.getOffset$().equals$O(datetime2.getOffset$())) {
return datetime1.toLocalDateTime$().compareTo$java_time_chrono_ChronoLocalDateTime(datetime2.toLocalDateTime$());
}var cmp=Long.compare$J$J(datetime1.toEpochSecond$(), datetime2.toEpochSecond$());
if (cmp == 0) {
cmp=datetime1.toLocalTime$().getNano$() - datetime2.toLocalTime$().getNano$();
}return cmp;
}, 1);

Clazz.newMeth(C$, 'now$', function () {
return C$.now$java_time_Clock($I$(3).systemDefaultZone$());
}, 1);

Clazz.newMeth(C$, 'now$java_time_ZoneId', function (zone) {
return C$.now$java_time_Clock($I$(3).system$java_time_ZoneId(zone));
}, 1);

Clazz.newMeth(C$, 'now$java_time_Clock', function (clock) {
$I$(4).requireNonNull$O$S(clock, "clock");
var now=clock.instant$();
return C$.ofInstant$java_time_Instant$java_time_ZoneId(now, clock.getZone$().getRules$().getOffset$java_time_Instant(now));
}, 1);

Clazz.newMeth(C$, 'of$java_time_LocalDate$java_time_LocalTime$java_time_ZoneOffset', function (date, time, offset) {
var dt=$I$(1).of$java_time_LocalDate$java_time_LocalTime(date, time);
return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset,[dt, offset]);
}, 1);

Clazz.newMeth(C$, 'of$java_time_LocalDateTime$java_time_ZoneOffset', function (dateTime, offset) {
return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset,[dateTime, offset]);
}, 1);

Clazz.newMeth(C$, 'of$I$I$I$I$I$I$I$java_time_ZoneOffset', function (year, month, dayOfMonth, hour, minute, second, nanoOfSecond, offset) {
var dt=$I$(1).of$I$I$I$I$I$I$I(year, month, dayOfMonth, hour, minute, second, nanoOfSecond);
return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset,[dt, offset]);
}, 1);

Clazz.newMeth(C$, 'ofInstant$java_time_Instant$java_time_ZoneId', function (instant, zone) {
$I$(4).requireNonNull$O$S(instant, "instant");
$I$(4).requireNonNull$O$S(zone, "zone");
var rules=zone.getRules$();
var offset=rules.getOffset$java_time_Instant(instant);
var ldt=$I$(1,"ofEpochSecond$J$I$java_time_ZoneOffset",[instant.getEpochSecond$(), instant.getNano$(), offset]);
return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset,[ldt, offset]);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.OffsetDateTime")) {
return temporal;
}try {
var offset=$I$(2).from$java_time_temporal_TemporalAccessor(temporal);
var date=temporal.query$java_time_temporal_TemporalQuery($I$(5).localDate$());
var time=temporal.query$java_time_temporal_TemporalQuery($I$(5).localTime$());
if (date != null  && time != null  ) {
return C$.of$java_time_LocalDate$java_time_LocalTime$java_time_ZoneOffset(date, time, offset);
} else {
var instant=$I$(6).from$java_time_temporal_TemporalAccessor(temporal);
return C$.ofInstant$java_time_Instant$java_time_ZoneId(instant, offset);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Unable to obtain OffsetDateTime from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() , ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence', function (text) {
return C$.parse$CharSequence$java_time_format_DateTimeFormatter(text, $I$(7).ISO_OFFSET_DATE_TIME);
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence$java_time_format_DateTimeFormatter', function (text, formatter) {
$I$(4).requireNonNull$O$S(formatter, "formatter");
return formatter.parse$CharSequence$java_time_temporal_TemporalQuery(text, (P$.OffsetDateTime$lambda2$||(P$.OffsetDateTime$lambda2$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "OffsetDateTime$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (t) { return $$.from$java_time_temporal_TemporalAccessor.apply(null,[t])});
})()
)); return Clazz.new_(P$.OffsetDateTime$lambda2.$init$,[this, null])})(C$)))));
}, 1);

Clazz.newMeth(C$, 'c$$java_time_LocalDateTime$java_time_ZoneOffset', function (dateTime, offset) {
;C$.$init$.apply(this);
this.dateTime=$I$(4).requireNonNull$O$S(dateTime, "dateTime");
this.offset=$I$(4).requireNonNull$O$S(offset, "offset");
}, 1);

Clazz.newMeth(C$, 'with$java_time_LocalDateTime$java_time_ZoneOffset', function (dateTime, offset) {
if (this.dateTime === dateTime  && this.offset.equals$O(offset) ) {
return this;
}return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset,[dateTime, offset]);
}, p$1);

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
return Clazz.instanceOf(field, "java.time.temporal.ChronoField") || (field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ) ;
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalUnit', function (unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
return unit !== $I$(8).FOREVER ;
}return unit != null  && unit.isSupportedBy$java_time_temporal_Temporal(this) ;
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
if (field === $I$(9).INSTANT_SECONDS  || field === $I$(9).OFFSET_SECONDS  ) {
return field.range$();
}return this.dateTime.range$java_time_temporal_TemporalField(field);
}return field.rangeRefinedBy$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(9).INSTANT_SECONDS:
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Invalid field \'InstantSeconds\' for get() method, use getLong() instead"]);
case $I$(9).OFFSET_SECONDS:
return this.getOffset$().getTotalSeconds$();
}
return this.dateTime.get$java_time_temporal_TemporalField(field);
}return P$.temporal.Temporal.superclazz.prototype.get$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(9).INSTANT_SECONDS:
return this.toEpochSecond$();
case $I$(9).OFFSET_SECONDS:
return this.getOffset$().getTotalSeconds$();
}
return this.dateTime.getLong$java_time_temporal_TemporalField(field);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'withOffsetSameLocal$java_time_ZoneOffset', function (offset) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime, offset]);
});

Clazz.newMeth(C$, 'withOffsetSameInstant$java_time_ZoneOffset', function (offset) {
if (offset.equals$O(this.offset)) {
return this;
}var difference=offset.getTotalSeconds$() - this.offset.getTotalSeconds$();
var adjusted=this.dateTime.plusSeconds$J(difference);
return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset,[adjusted, offset]);
});

Clazz.newMeth(C$, 'toLocalDateTime$', function () {
return this.dateTime;
});

Clazz.newMeth(C$, 'toLocalDate$', function () {
return this.dateTime.toLocalDate$();
});

Clazz.newMeth(C$, 'getYear$', function () {
return this.dateTime.getYear$();
});

Clazz.newMeth(C$, 'getMonthValue$', function () {
return this.dateTime.getMonthValue$();
});

Clazz.newMeth(C$, 'getMonth$', function () {
return this.dateTime.getMonth$();
});

Clazz.newMeth(C$, 'getDayOfMonth$', function () {
return this.dateTime.getDayOfMonth$();
});

Clazz.newMeth(C$, 'getDayOfYear$', function () {
return this.dateTime.getDayOfYear$();
});

Clazz.newMeth(C$, 'getDayOfWeek$', function () {
return this.dateTime.getDayOfWeek$();
});

Clazz.newMeth(C$, 'toLocalTime$', function () {
return this.dateTime.toLocalTime$();
});

Clazz.newMeth(C$, 'getHour$', function () {
return this.dateTime.getHour$();
});

Clazz.newMeth(C$, 'getMinute$', function () {
return this.dateTime.getMinute$();
});

Clazz.newMeth(C$, 'getSecond$', function () {
return this.dateTime.getSecond$();
});

Clazz.newMeth(C$, 'getNano$', function () {
return this.dateTime.getNano$();
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster', function (adjuster) {
if (Clazz.instanceOf(adjuster, "java.time.LocalDate") || Clazz.instanceOf(adjuster, "java.time.LocalTime") || Clazz.instanceOf(adjuster, "java.time.LocalDateTime")  ) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.with$java_time_temporal_TemporalAdjuster(adjuster), this.offset]);
} else if (Clazz.instanceOf(adjuster, "java.time.Instant")) {
return C$.ofInstant$java_time_Instant$java_time_ZoneId(adjuster, this.offset);
} else if (Clazz.instanceOf(adjuster, "java.time.ZoneOffset")) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime, adjuster]);
} else if (Clazz.instanceOf(adjuster, "java.time.OffsetDateTime")) {
return adjuster;
}return adjuster.adjustInto$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
switch (f) {
case $I$(9).INSTANT_SECONDS:
return C$.ofInstant$java_time_Instant$java_time_ZoneId($I$(6,"ofEpochSecond$J$J",[newValue, this.getNano$()]), this.offset);
case $I$(9).OFFSET_SECONDS:
{
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime, $I$(2,"ofTotalSeconds$I",[f.checkValidIntValue$J(newValue)])]);
}}
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.with$java_time_temporal_TemporalField$J(field, newValue), this.offset]);
}return field.adjustInto$java_time_temporal_Temporal$J(this, newValue);
});

Clazz.newMeth(C$, 'withYear$I', function (year) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.withYear$I(year), this.offset]);
});

Clazz.newMeth(C$, 'withMonth$I', function (month) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.withMonth$I(month), this.offset]);
});

Clazz.newMeth(C$, 'withDayOfMonth$I', function (dayOfMonth) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.withDayOfMonth$I(dayOfMonth), this.offset]);
});

Clazz.newMeth(C$, 'withDayOfYear$I', function (dayOfYear) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.withDayOfYear$I(dayOfYear), this.offset]);
});

Clazz.newMeth(C$, 'withHour$I', function (hour) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.withHour$I(hour), this.offset]);
});

Clazz.newMeth(C$, 'withMinute$I', function (minute) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.withMinute$I(minute), this.offset]);
});

Clazz.newMeth(C$, 'withSecond$I', function (second) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.withSecond$I(second), this.offset]);
});

Clazz.newMeth(C$, 'withNano$I', function (nanoOfSecond) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.withNano$I(nanoOfSecond), this.offset]);
});

Clazz.newMeth(C$, 'truncatedTo$java_time_temporal_TemporalUnit', function (unit) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.truncatedTo$java_time_temporal_TemporalUnit(unit), this.offset]);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amountToAdd) {
return amountToAdd.addTo$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.plus$J$java_time_temporal_TemporalUnit(amountToAdd, unit), this.offset]);
}return unit.addTo$java_time_temporal_Temporal$J(this, amountToAdd);
});

Clazz.newMeth(C$, 'plusYears$J', function (years) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.plusYears$J(years), this.offset]);
});

Clazz.newMeth(C$, 'plusMonths$J', function (months) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.plusMonths$J(months), this.offset]);
});

Clazz.newMeth(C$, 'plusWeeks$J', function (weeks) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.plusWeeks$J(weeks), this.offset]);
});

Clazz.newMeth(C$, 'plusDays$J', function (days) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.plusDays$J(days), this.offset]);
});

Clazz.newMeth(C$, 'plusHours$J', function (hours) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.plusHours$J(hours), this.offset]);
});

Clazz.newMeth(C$, 'plusMinutes$J', function (minutes) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.plusMinutes$J(minutes), this.offset]);
});

Clazz.newMeth(C$, 'plusSeconds$J', function (seconds) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.plusSeconds$J(seconds), this.offset]);
});

Clazz.newMeth(C$, 'plusNanos$J', function (nanos) {
return p$1.with$java_time_LocalDateTime$java_time_ZoneOffset.apply(this, [this.dateTime.plusNanos$J(nanos), this.offset]);
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amountToSubtract) {
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
return (hours == -9223372036854775808 ? this.plusHours$J(9223372036854775807).plusHours$J(1) : this.plusHours$J(-hours));
});

Clazz.newMeth(C$, 'minusMinutes$J', function (minutes) {
return (minutes == -9223372036854775808 ? this.plusMinutes$J(9223372036854775807).plusMinutes$J(1) : this.plusMinutes$J(-minutes));
});

Clazz.newMeth(C$, 'minusSeconds$J', function (seconds) {
return (seconds == -9223372036854775808 ? this.plusSeconds$J(9223372036854775807).plusSeconds$J(1) : this.plusSeconds$J(-seconds));
});

Clazz.newMeth(C$, 'minusNanos$J', function (nanos) {
return (nanos == -9223372036854775808 ? this.plusNanos$J(9223372036854775807).plusNanos$J(1) : this.plusNanos$J(-nanos));
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(5).offset$()  || query === $I$(5).zone$()  ) {
return this.getOffset$();
} else if (query === $I$(5).zoneId$() ) {
return null;
} else if (query === $I$(5).localDate$() ) {
return this.toLocalDate$();
} else if (query === $I$(5).localTime$() ) {
return this.toLocalTime$();
} else if (query === $I$(5).chronology$() ) {
return $I$(10).INSTANCE;
} else if (query === $I$(5).precision$() ) {
return $I$(8).NANOS;
}return query.queryFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal', function (temporal) {
return temporal.with$java_time_temporal_TemporalField$J($I$(9).EPOCH_DAY, this.toLocalDate$().toEpochDay$()).with$java_time_temporal_TemporalField$J($I$(9).NANO_OF_DAY, this.toLocalTime$().toNanoOfDay$()).with$java_time_temporal_TemporalField$J($I$(9).OFFSET_SECONDS, this.getOffset$().getTotalSeconds$());
});

Clazz.newMeth(C$, 'until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit', function (endExclusive, unit) {
var end=C$.from$java_time_temporal_TemporalAccessor(endExclusive);
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
end=end.withOffsetSameInstant$java_time_ZoneOffset(this.offset);
return this.dateTime.until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit(end.dateTime, unit);
}return unit.between$java_time_temporal_Temporal$java_time_temporal_Temporal(this, end);
});

Clazz.newMeth(C$, 'format$java_time_format_DateTimeFormatter', function (formatter) {
$I$(4).requireNonNull$O$S(formatter, "formatter");
return formatter.format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'atZoneSameInstant$java_time_ZoneId', function (zone) {
return $I$(11).ofInstant$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId(this.dateTime, this.offset, zone);
});

Clazz.newMeth(C$, 'atZoneSimilarLocal$java_time_ZoneId', function (zone) {
return $I$(11).ofLocal$java_time_LocalDateTime$java_time_ZoneId$java_time_ZoneOffset(this.dateTime, zone, this.offset);
});

Clazz.newMeth(C$, 'toOffsetTime$', function () {
return $I$(12,"of$java_time_LocalTime$java_time_ZoneOffset",[this.dateTime.toLocalTime$(), this.offset]);
});

Clazz.newMeth(C$, 'toZonedDateTime$', function () {
return $I$(11).of$java_time_LocalDateTime$java_time_ZoneId(this.dateTime, this.offset);
});

Clazz.newMeth(C$, 'toInstant$', function () {
return this.dateTime.toInstant$java_time_ZoneOffset(this.offset);
});

Clazz.newMeth(C$, 'toEpochSecond$', function () {
return this.dateTime.toEpochSecond$java_time_ZoneOffset(this.offset);
});

Clazz.newMeth(C$, ['compareTo$java_time_OffsetDateTime','compareTo$O'], function (other) {
var cmp=C$.compareInstant$java_time_OffsetDateTime$java_time_OffsetDateTime(this, other);
if (cmp == 0) {
cmp=this.toLocalDateTime$().compareTo$java_time_chrono_ChronoLocalDateTime(other.toLocalDateTime$());
}return cmp;
});

Clazz.newMeth(C$, 'isAfter$java_time_OffsetDateTime', function (other) {
var thisEpochSec=this.toEpochSecond$();
var otherEpochSec=other.toEpochSecond$();
return thisEpochSec > otherEpochSec || (thisEpochSec == otherEpochSec && this.toLocalTime$().getNano$() > other.toLocalTime$().getNano$() ) ;
});

Clazz.newMeth(C$, 'isBefore$java_time_OffsetDateTime', function (other) {
var thisEpochSec=this.toEpochSecond$();
var otherEpochSec=other.toEpochSecond$();
return thisEpochSec < otherEpochSec || (thisEpochSec == otherEpochSec && this.toLocalTime$().getNano$() < other.toLocalTime$().getNano$() ) ;
});

Clazz.newMeth(C$, 'isEqual$java_time_OffsetDateTime', function (other) {
return this.toEpochSecond$() == other.toEpochSecond$() && this.toLocalTime$().getNano$() == other.toLocalTime$().getNano$() ;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.OffsetDateTime")) {
var other=obj;
return this.dateTime.equals$O(other.dateTime) && this.offset.equals$O(other.offset) ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.dateTime.hashCode$() ^ this.offset.hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.dateTime.toString() + this.offset.toString();
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(13,1).c$$B$O,[10, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
this.dateTime.writeExternal$java_io_DataOutput(out);
this.offset.writeExternal$java_io_DataOutput(out);
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
var dateTime=$I$(1).readExternal$java_io_DataInput($in);
var offset=$I$(2).readExternal$java_io_DataInput($in);
return C$.of$java_time_LocalDateTime$java_time_ZoneOffset(dateTime, offset);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MIN=$I$(1).MIN.atOffset$java_time_ZoneOffset($I$(2).MAX);
C$.MAX=$I$(1).MAX.atOffset$java_time_ZoneOffset($I$(2).MIN);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:53:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
