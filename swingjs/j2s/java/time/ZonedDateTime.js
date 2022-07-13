(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.time.Clock','java.util.Objects','java.time.LocalDateTime','java.time.Instant','java.time.ZoneId','java.time.temporal.ChronoField','java.time.LocalDate','java.time.LocalTime','java.time.format.DateTimeFormatter','java.time.ZoneOffset','java.time.temporal.TemporalQueries','java.time.OffsetDateTime','java.time.Ser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZonedDateTime", null, null, ['java.time.temporal.Temporal', 'java.time.chrono.ChronoZonedDateTime', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dateTime','java.time.LocalDateTime','offset','java.time.ZoneOffset','zone','java.time.ZoneId']]]

Clazz.newMeth(C$, 'now$', function () {
return C$.now$java_time_Clock($I$(1).systemDefaultZone$());
}, 1);

Clazz.newMeth(C$, 'now$java_time_ZoneId', function (zone) {
return C$.now$java_time_Clock($I$(1).system$java_time_ZoneId(zone));
}, 1);

Clazz.newMeth(C$, 'now$java_time_Clock', function (clock) {
$I$(2).requireNonNull$O$S(clock, "clock");
var now=clock.instant$();
return C$.ofInstant$java_time_Instant$java_time_ZoneId(now, clock.getZone$());
}, 1);

Clazz.newMeth(C$, 'of$java_time_LocalDate$java_time_LocalTime$java_time_ZoneId', function (date, time, zone) {
return C$.of$java_time_LocalDateTime$java_time_ZoneId($I$(3).of$java_time_LocalDate$java_time_LocalTime(date, time), zone);
}, 1);

Clazz.newMeth(C$, 'of$java_time_LocalDateTime$java_time_ZoneId', function (localDateTime, zone) {
return C$.ofLocal$java_time_LocalDateTime$java_time_ZoneId$java_time_ZoneOffset(localDateTime, zone, null);
}, 1);

Clazz.newMeth(C$, 'of$I$I$I$I$I$I$I$java_time_ZoneId', function (year, month, dayOfMonth, hour, minute, second, nanoOfSecond, zone) {
var dt=$I$(3).of$I$I$I$I$I$I$I(year, month, dayOfMonth, hour, minute, second, nanoOfSecond);
return C$.ofLocal$java_time_LocalDateTime$java_time_ZoneId$java_time_ZoneOffset(dt, zone, null);
}, 1);

Clazz.newMeth(C$, 'ofLocal$java_time_LocalDateTime$java_time_ZoneId$java_time_ZoneOffset', function (localDateTime, zone, preferredOffset) {
$I$(2).requireNonNull$O$S(localDateTime, "localDateTime");
$I$(2).requireNonNull$O$S(zone, "zone");
if (Clazz.instanceOf(zone, "java.time.ZoneOffset")) {
return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId,[localDateTime, zone, zone]);
}var rules=zone.getRules$();
var validOffsets=rules.getValidOffsets$java_time_LocalDateTime(localDateTime);
var offset;
if (validOffsets.size$() == 1) {
offset=validOffsets.get$I(0);
} else if (validOffsets.size$() == 0) {
var trans=rules.getTransition$java_time_LocalDateTime(localDateTime);
localDateTime=localDateTime.plusSeconds$J(trans.getDuration$().getSeconds$());
offset=trans.getOffsetAfter$();
} else {
if (preferredOffset != null  && validOffsets.contains$O(preferredOffset) ) {
offset=preferredOffset;
} else {
offset=$I$(2,"requireNonNull$O$S",[validOffsets.get$I(0), "offset"]);
}}return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId,[localDateTime, offset, zone]);
}, 1);

Clazz.newMeth(C$, 'ofInstant$java_time_Instant$java_time_ZoneId', function (instant, zone) {
$I$(2).requireNonNull$O$S(instant, "instant");
$I$(2).requireNonNull$O$S(zone, "zone");
return C$.create$J$I$java_time_ZoneId(instant.getEpochSecond$(), instant.getNano$(), zone);
}, 1);

Clazz.newMeth(C$, 'ofInstant$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId', function (localDateTime, offset, zone) {
$I$(2).requireNonNull$O$S(localDateTime, "localDateTime");
$I$(2).requireNonNull$O$S(offset, "offset");
$I$(2).requireNonNull$O$S(zone, "zone");
if (zone.getRules$().isValidOffset$java_time_LocalDateTime$java_time_ZoneOffset(localDateTime, offset)) {
return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId,[localDateTime, offset, zone]);
}return C$.create$J$I$java_time_ZoneId(localDateTime.toEpochSecond$java_time_ZoneOffset(offset), localDateTime.getNano$(), zone);
}, 1);

Clazz.newMeth(C$, 'create$J$I$java_time_ZoneId', function (epochSecond, nanoOfSecond, zone) {
var rules=zone.getRules$();
var instant=$I$(4).ofEpochSecond$J$J(epochSecond, nanoOfSecond);
var offset=rules.getOffset$java_time_Instant(instant);
var ldt=$I$(3).ofEpochSecond$J$I$java_time_ZoneOffset(epochSecond, nanoOfSecond, offset);
return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId,[ldt, offset, zone]);
}, 1);

Clazz.newMeth(C$, 'ofStrict$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId', function (localDateTime, offset, zone) {
$I$(2).requireNonNull$O$S(localDateTime, "localDateTime");
$I$(2).requireNonNull$O$S(offset, "offset");
$I$(2).requireNonNull$O$S(zone, "zone");
var rules=zone.getRules$();
if (rules.isValidOffset$java_time_LocalDateTime$java_time_ZoneOffset(localDateTime, offset) == false ) {
var trans=rules.getTransition$java_time_LocalDateTime(localDateTime);
if (trans != null  && trans.isGap$() ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["LocalDateTime '" + localDateTime + "' does not exist in zone '" + zone + "' due to a gap in the local time-line, typically caused by daylight savings" ]);
}throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["ZoneOffset '" + offset + "' is not valid for LocalDateTime '" + localDateTime + "' in zone '" + zone + "'" ]);
}return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId,[localDateTime, offset, zone]);
}, 1);

Clazz.newMeth(C$, 'ofLenient$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId', function (localDateTime, offset, zone) {
$I$(2).requireNonNull$O$S(localDateTime, "localDateTime");
$I$(2).requireNonNull$O$S(offset, "offset");
$I$(2).requireNonNull$O$S(zone, "zone");
if (Clazz.instanceOf(zone, "java.time.ZoneOffset") && offset.equals$O(zone) == false  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ZoneId must match ZoneOffset"]);
}return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId,[localDateTime, offset, zone]);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.ZonedDateTime")) {
return temporal;
}try {
var zone=$I$(5).from$java_time_temporal_TemporalAccessor(temporal);
if (temporal.isSupported$java_time_temporal_TemporalField($I$(6).INSTANT_SECONDS)) {
var epochSecond=temporal.getLong$java_time_temporal_TemporalField($I$(6).INSTANT_SECONDS);
var nanoOfSecond=temporal.get$java_time_temporal_TemporalField($I$(6).NANO_OF_SECOND);
return C$.create$J$I$java_time_ZoneId(epochSecond, nanoOfSecond, zone);
} else {
var date=$I$(7).from$java_time_temporal_TemporalAccessor(temporal);
var time=$I$(8).from$java_time_temporal_TemporalAccessor(temporal);
return C$.of$java_time_LocalDate$java_time_LocalTime$java_time_ZoneId(date, time, zone);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Unable to obtain ZonedDateTime from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() , ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence', function (text) {
return C$.parse$CharSequence$java_time_format_DateTimeFormatter(text, $I$(9).ISO_ZONED_DATE_TIME);
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence$java_time_format_DateTimeFormatter', function (text, formatter) {
$I$(2).requireNonNull$O$S(formatter, "formatter");
return formatter.parse$CharSequence$java_time_temporal_TemporalQuery(text, (P$.ZonedDateTime$lambda1$||(P$.ZonedDateTime$lambda1$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "ZonedDateTime$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (t) { return $$.from$java_time_temporal_TemporalAccessor.apply(null,[t])});
})()
)); return Clazz.new_(P$.ZonedDateTime$lambda1.$init$,[this, null])})(C$)))));
}, 1);

Clazz.newMeth(C$, 'c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId', function (dateTime, offset, zone) {
;C$.$init$.apply(this);
this.dateTime=dateTime;
this.offset=offset;
this.zone=zone;
}, 1);

Clazz.newMeth(C$, 'resolveLocal$java_time_LocalDateTime', function (newDateTime) {
return C$.ofLocal$java_time_LocalDateTime$java_time_ZoneId$java_time_ZoneOffset(newDateTime, this.zone, this.offset);
}, p$1);

Clazz.newMeth(C$, 'resolveInstant$java_time_LocalDateTime', function (newDateTime) {
return C$.ofInstant$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId(newDateTime, this.offset, this.zone);
}, p$1);

Clazz.newMeth(C$, 'resolveOffset$java_time_ZoneOffset', function (offset) {
if (offset.equals$O(this.offset) == false  && this.zone.getRules$().isValidOffset$java_time_LocalDateTime$java_time_ZoneOffset(this.dateTime, offset) ) {
return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId,[this.dateTime, offset, this.zone]);
}return this;
}, p$1);

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
return Clazz.instanceOf(field, "java.time.temporal.ChronoField") || (field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ) ;
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalUnit', function (unit) {
return P$.chrono.ChronoZonedDateTime.superclazz.prototype.isSupported$java_time_temporal_TemporalUnit.apply(this, [unit]);
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
if (field === $I$(6).INSTANT_SECONDS  || field === $I$(6).OFFSET_SECONDS  ) {
return field.range$();
}return this.dateTime.range$java_time_temporal_TemporalField(field);
}return field.rangeRefinedBy$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(6).INSTANT_SECONDS:
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Invalid field \'InstantSeconds\' for get() method, use getLong() instead"]);
case $I$(6).OFFSET_SECONDS:
return this.getOffset$().getTotalSeconds$();
}
return this.dateTime.get$java_time_temporal_TemporalField(field);
}return P$.chrono.ChronoZonedDateTime.superclazz.prototype.get$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(6).INSTANT_SECONDS:
return this.toEpochSecond$();
case $I$(6).OFFSET_SECONDS:
return this.getOffset$().getTotalSeconds$();
}
return this.dateTime.getLong$java_time_temporal_TemporalField(field);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'withEarlierOffsetAtOverlap$', function () {
var trans=this.getZone$().getRules$().getTransition$java_time_LocalDateTime(this.dateTime);
if (trans != null  && trans.isOverlap$() ) {
var earlierOffset=trans.getOffsetBefore$();
if (earlierOffset.equals$O(this.offset) == false ) {
return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId,[this.dateTime, earlierOffset, this.zone]);
}}return this;
});

Clazz.newMeth(C$, 'withLaterOffsetAtOverlap$', function () {
var trans=this.getZone$().getRules$().getTransition$java_time_LocalDateTime(this.toLocalDateTime$());
if (trans != null ) {
var laterOffset=trans.getOffsetAfter$();
if (laterOffset.equals$O(this.offset) == false ) {
return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId,[this.dateTime, laterOffset, this.zone]);
}}return this;
});

Clazz.newMeth(C$, 'getZone$', function () {
return this.zone;
});

Clazz.newMeth(C$, 'withZoneSameLocal$java_time_ZoneId', function (zone) {
$I$(2).requireNonNull$O$S(zone, "zone");
return this.zone.equals$O(zone) ? this : C$.ofLocal$java_time_LocalDateTime$java_time_ZoneId$java_time_ZoneOffset(this.dateTime, zone, this.offset);
});

Clazz.newMeth(C$, 'withZoneSameInstant$java_time_ZoneId', function (zone) {
$I$(2).requireNonNull$O$S(zone, "zone");
return this.zone.equals$O(zone) ? this : C$.create$J$I$java_time_ZoneId(this.dateTime.toEpochSecond$java_time_ZoneOffset(this.offset), this.dateTime.getNano$(), zone);
});

Clazz.newMeth(C$, 'withFixedOffsetZone$', function () {
return this.zone.equals$O(this.offset) ? this : Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId,[this.dateTime, this.offset, this.offset]);
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
if (Clazz.instanceOf(adjuster, "java.time.LocalDate")) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [$I$(3,"of$java_time_LocalDate$java_time_LocalTime",[adjuster, this.dateTime.toLocalTime$()])]);
} else if (Clazz.instanceOf(adjuster, "java.time.LocalTime")) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [$I$(3,"of$java_time_LocalDate$java_time_LocalTime",[this.dateTime.toLocalDate$(), adjuster])]);
} else if (Clazz.instanceOf(adjuster, "java.time.LocalDateTime")) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [adjuster]);
} else if (Clazz.instanceOf(adjuster, "java.time.OffsetDateTime")) {
var odt=adjuster;
return C$.ofLocal$java_time_LocalDateTime$java_time_ZoneId$java_time_ZoneOffset(odt.toLocalDateTime$(), this.zone, odt.getOffset$());
} else if (Clazz.instanceOf(adjuster, "java.time.Instant")) {
var instant=adjuster;
return C$.create$J$I$java_time_ZoneId(instant.getEpochSecond$(), instant.getNano$(), this.zone);
} else if (Clazz.instanceOf(adjuster, "java.time.ZoneOffset")) {
return p$1.resolveOffset$java_time_ZoneOffset.apply(this, [adjuster]);
}return adjuster.adjustInto$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
switch (f) {
case $I$(6).INSTANT_SECONDS:
return C$.create$J$I$java_time_ZoneId(newValue, this.getNano$(), this.zone);
case $I$(6).OFFSET_SECONDS:
var offset=$I$(10,"ofTotalSeconds$I",[f.checkValidIntValue$J(newValue)]);
return p$1.resolveOffset$java_time_ZoneOffset.apply(this, [offset]);
}
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.with$java_time_temporal_TemporalField$J(field, newValue)]);
}return field.adjustInto$java_time_temporal_Temporal$J(this, newValue);
});

Clazz.newMeth(C$, 'withYear$I', function (year) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.withYear$I(year)]);
});

Clazz.newMeth(C$, 'withMonth$I', function (month) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.withMonth$I(month)]);
});

Clazz.newMeth(C$, 'withDayOfMonth$I', function (dayOfMonth) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.withDayOfMonth$I(dayOfMonth)]);
});

Clazz.newMeth(C$, 'withDayOfYear$I', function (dayOfYear) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.withDayOfYear$I(dayOfYear)]);
});

Clazz.newMeth(C$, 'withHour$I', function (hour) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.withHour$I(hour)]);
});

Clazz.newMeth(C$, 'withMinute$I', function (minute) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.withMinute$I(minute)]);
});

Clazz.newMeth(C$, 'withSecond$I', function (second) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.withSecond$I(second)]);
});

Clazz.newMeth(C$, 'withNano$I', function (nanoOfSecond) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.withNano$I(nanoOfSecond)]);
});

Clazz.newMeth(C$, 'truncatedTo$java_time_temporal_TemporalUnit', function (unit) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.truncatedTo$java_time_temporal_TemporalUnit(unit)]);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amountToAdd) {
if (Clazz.instanceOf(amountToAdd, "java.time.Period")) {
var periodToAdd=amountToAdd;
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.plus$java_time_temporal_TemporalAmount(periodToAdd)]);
}$I$(2).requireNonNull$O$S(amountToAdd, "amountToAdd");
return amountToAdd.addTo$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
if (unit.isDateBased$()) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.plus$J$java_time_temporal_TemporalUnit(amountToAdd, unit)]);
} else {
return p$1.resolveInstant$java_time_LocalDateTime.apply(this, [this.dateTime.plus$J$java_time_temporal_TemporalUnit(amountToAdd, unit)]);
}}return unit.addTo$java_time_temporal_Temporal$J(this, amountToAdd);
});

Clazz.newMeth(C$, 'plusYears$J', function (years) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.plusYears$J(years)]);
});

Clazz.newMeth(C$, 'plusMonths$J', function (months) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.plusMonths$J(months)]);
});

Clazz.newMeth(C$, 'plusWeeks$J', function (weeks) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.plusWeeks$J(weeks)]);
});

Clazz.newMeth(C$, 'plusDays$J', function (days) {
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.plusDays$J(days)]);
});

Clazz.newMeth(C$, 'plusHours$J', function (hours) {
return p$1.resolveInstant$java_time_LocalDateTime.apply(this, [this.dateTime.plusHours$J(hours)]);
});

Clazz.newMeth(C$, 'plusMinutes$J', function (minutes) {
return p$1.resolveInstant$java_time_LocalDateTime.apply(this, [this.dateTime.plusMinutes$J(minutes)]);
});

Clazz.newMeth(C$, 'plusSeconds$J', function (seconds) {
return p$1.resolveInstant$java_time_LocalDateTime.apply(this, [this.dateTime.plusSeconds$J(seconds)]);
});

Clazz.newMeth(C$, 'plusNanos$J', function (nanos) {
return p$1.resolveInstant$java_time_LocalDateTime.apply(this, [this.dateTime.plusNanos$J(nanos)]);
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amountToSubtract) {
if (Clazz.instanceOf(amountToSubtract, "java.time.Period")) {
var periodToSubtract=amountToSubtract;
return p$1.resolveLocal$java_time_LocalDateTime.apply(this, [this.dateTime.minus$java_time_temporal_TemporalAmount(periodToSubtract)]);
}$I$(2).requireNonNull$O$S(amountToSubtract, "amountToSubtract");
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
if (query === $I$(11).localDate$() ) {
return this.toLocalDate$();
}return P$.chrono.ChronoZonedDateTime.superclazz.prototype.query$java_time_temporal_TemporalQuery.apply(this, [query]);
});

Clazz.newMeth(C$, 'until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit', function (endExclusive, unit) {
var end=C$.from$java_time_temporal_TemporalAccessor(endExclusive);
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
end=end.withZoneSameInstant$java_time_ZoneId(this.zone);
if (unit.isDateBased$()) {
return this.dateTime.until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit(end.dateTime, unit);
} else {
return this.toOffsetDateTime$().until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit(end.toOffsetDateTime$(), unit);
}}return unit.between$java_time_temporal_Temporal$java_time_temporal_Temporal(this, end);
});

Clazz.newMeth(C$, 'format$java_time_format_DateTimeFormatter', function (formatter) {
$I$(2).requireNonNull$O$S(formatter, "formatter");
return formatter.format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'toOffsetDateTime$', function () {
return $I$(12).of$java_time_LocalDateTime$java_time_ZoneOffset(this.dateTime, this.offset);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.ZonedDateTime")) {
var other=obj;
return this.dateTime.equals$O(other.dateTime) && this.offset.equals$O(other.offset) && this.zone.equals$O(other.zone)  ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.dateTime.hashCode$() ^ this.offset.hashCode$() ^ Integer.rotateLeft$I$I(this.zone.hashCode$(), 3) ;
});

Clazz.newMeth(C$, 'toString', function () {
var str=this.dateTime.toString() + this.offset.toString();
if (this.offset !== this.zone ) {
str += '[' + this.zone.toString() + ']' ;
}return str;
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(13,1).c$$B$O,[6, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
this.dateTime.writeExternal$java_io_DataOutput(out);
this.offset.writeExternal$java_io_DataOutput(out);
this.zone.write$java_io_DataOutput(out);
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
var dateTime=$I$(3).readExternal$java_io_DataInput($in);
var offset=$I$(10).readExternal$java_io_DataInput($in);
var zone=$I$(13).read$java_io_ObjectInput($in);
return C$.ofLenient$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneId(dateTime, offset, zone);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:53:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
