(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.time.LocalTime','java.time.ZoneOffset','java.time.Clock','java.util.Objects','java.time.format.DateTimeFormatter','java.time.temporal.ChronoField','java.time.temporal.TemporalQueries','java.time.temporal.ChronoUnit','java.time.OffsetDateTime','java.time.Ser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OffsetTime", null, null, ['java.time.temporal.Temporal', 'java.time.temporal.TemporalAdjuster', 'Comparable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['time','java.time.LocalTime','offset','java.time.ZoneOffset']]
,['O',['MIN','java.time.OffsetTime','+MAX']]]

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

Clazz.newMeth(C$, 'of$java_time_LocalTime$java_time_ZoneOffset', function (time, offset) {
return Clazz.new_(C$.c$$java_time_LocalTime$java_time_ZoneOffset,[time, offset]);
}, 1);

Clazz.newMeth(C$, 'of$I$I$I$I$java_time_ZoneOffset', function (hour, minute, second, nanoOfSecond, offset) {
return Clazz.new_(C$.c$$java_time_LocalTime$java_time_ZoneOffset,[$I$(1).of$I$I$I$I(hour, minute, second, nanoOfSecond), offset]);
}, 1);

Clazz.newMeth(C$, 'ofInstant$java_time_Instant$java_time_ZoneId', function (instant, zone) {
$I$(4).requireNonNull$O$S(instant, "instant");
$I$(4).requireNonNull$O$S(zone, "zone");
var rules=zone.getRules$();
var offset=rules.getOffset$java_time_Instant(instant);
var localSecond=instant.getEpochSecond$() + offset.getTotalSeconds$();
var secsOfDay=(Math.floorMod(localSecond, 86400)|0);
var time=$I$(1,"ofNanoOfDay$J",[secsOfDay * 1000000000 + instant.getNano$()]);
return Clazz.new_(C$.c$$java_time_LocalTime$java_time_ZoneOffset,[time, offset]);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.OffsetTime")) {
return temporal;
}try {
var time=$I$(1).from$java_time_temporal_TemporalAccessor(temporal);
var offset=$I$(2).from$java_time_temporal_TemporalAccessor(temporal);
return Clazz.new_(C$.c$$java_time_LocalTime$java_time_ZoneOffset,[time, offset]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Unable to obtain OffsetTime from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() , ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence', function (text) {
return C$.parse$CharSequence$java_time_format_DateTimeFormatter(text, $I$(5).ISO_OFFSET_TIME);
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence$java_time_format_DateTimeFormatter', function (text, formatter) {
$I$(4).requireNonNull$O$S(formatter, "formatter");
return formatter.parse$CharSequence$java_time_temporal_TemporalQuery(text, (P$.OffsetTime$lambda1$||(P$.OffsetTime$lambda1$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "OffsetTime$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (t) { return $$.from$java_time_temporal_TemporalAccessor.apply(null,[t])});
})()
)); return Clazz.new_(P$.OffsetTime$lambda1.$init$,[this, null])})(C$)))));
}, 1);

Clazz.newMeth(C$, 'c$$java_time_LocalTime$java_time_ZoneOffset', function (time, offset) {
;C$.$init$.apply(this);
this.time=$I$(4).requireNonNull$O$S(time, "time");
this.offset=$I$(4).requireNonNull$O$S(offset, "offset");
}, 1);

Clazz.newMeth(C$, 'with$java_time_LocalTime$java_time_ZoneOffset', function (time, offset) {
if (this.time === time  && this.offset.equals$O(offset) ) {
return this;
}return Clazz.new_(C$.c$$java_time_LocalTime$java_time_ZoneOffset,[time, offset]);
}, p$1);

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
return field.isTimeBased$() || field === $I$(6).OFFSET_SECONDS  ;
}return field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ;
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalUnit', function (unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
return unit.isTimeBased$();
}return unit != null  && unit.isSupportedBy$java_time_temporal_Temporal(this) ;
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
if (field === $I$(6).OFFSET_SECONDS ) {
return field.range$();
}return this.time.range$java_time_temporal_TemporalField(field);
}return field.rangeRefinedBy$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
return P$.temporal.Temporal.superclazz.prototype.get$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
if (field === $I$(6).OFFSET_SECONDS ) {
return this.offset.getTotalSeconds$();
}return this.time.getLong$java_time_temporal_TemporalField(field);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'withOffsetSameLocal$java_time_ZoneOffset', function (offset) {
return offset != null  && offset.equals$O(this.offset)  ? this : Clazz.new_(C$.c$$java_time_LocalTime$java_time_ZoneOffset,[this.time, offset]);
});

Clazz.newMeth(C$, 'withOffsetSameInstant$java_time_ZoneOffset', function (offset) {
if (offset.equals$O(this.offset)) {
return this;
}var difference=offset.getTotalSeconds$() - this.offset.getTotalSeconds$();
var adjusted=this.time.plusSeconds$J(difference);
return Clazz.new_(C$.c$$java_time_LocalTime$java_time_ZoneOffset,[adjusted, offset]);
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
if (Clazz.instanceOf(adjuster, "java.time.LocalTime")) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [adjuster, this.offset]);
} else if (Clazz.instanceOf(adjuster, "java.time.ZoneOffset")) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time, adjuster]);
} else if (Clazz.instanceOf(adjuster, "java.time.OffsetTime")) {
return adjuster;
}return adjuster.adjustInto$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
if (field === $I$(6).OFFSET_SECONDS ) {
var f=field;
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time, $I$(2,"ofTotalSeconds$I",[f.checkValidIntValue$J(newValue)])]);
}return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.with$java_time_temporal_TemporalField$J(field, newValue), this.offset]);
}return field.adjustInto$java_time_temporal_Temporal$J(this, newValue);
});

Clazz.newMeth(C$, 'withHour$I', function (hour) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.withHour$I(hour), this.offset]);
});

Clazz.newMeth(C$, 'withMinute$I', function (minute) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.withMinute$I(minute), this.offset]);
});

Clazz.newMeth(C$, 'withSecond$I', function (second) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.withSecond$I(second), this.offset]);
});

Clazz.newMeth(C$, 'withNano$I', function (nanoOfSecond) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.withNano$I(nanoOfSecond), this.offset]);
});

Clazz.newMeth(C$, 'truncatedTo$java_time_temporal_TemporalUnit', function (unit) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.truncatedTo$java_time_temporal_TemporalUnit(unit), this.offset]);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amountToAdd) {
return amountToAdd.addTo$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.plus$J$java_time_temporal_TemporalUnit(amountToAdd, unit), this.offset]);
}return unit.addTo$java_time_temporal_Temporal$J(this, amountToAdd);
});

Clazz.newMeth(C$, 'plusHours$J', function (hours) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.plusHours$J(hours), this.offset]);
});

Clazz.newMeth(C$, 'plusMinutes$J', function (minutes) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.plusMinutes$J(minutes), this.offset]);
});

Clazz.newMeth(C$, 'plusSeconds$J', function (seconds) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.plusSeconds$J(seconds), this.offset]);
});

Clazz.newMeth(C$, 'plusNanos$J', function (nanos) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.plusNanos$J(nanos), this.offset]);
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amountToSubtract) {
return amountToSubtract.subtractFrom$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'minus$J$java_time_temporal_TemporalUnit', function (amountToSubtract, unit) {
return (amountToSubtract == -9223372036854775808 ? this.plus$J$java_time_temporal_TemporalUnit(9223372036854775807, unit).plus$J$java_time_temporal_TemporalUnit(1, unit) : this.plus$J$java_time_temporal_TemporalUnit(-amountToSubtract, unit));
});

Clazz.newMeth(C$, 'minusHours$J', function (hours) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.minusHours$J(hours), this.offset]);
});

Clazz.newMeth(C$, 'minusMinutes$J', function (minutes) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.minusMinutes$J(minutes), this.offset]);
});

Clazz.newMeth(C$, 'minusSeconds$J', function (seconds) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.minusSeconds$J(seconds), this.offset]);
});

Clazz.newMeth(C$, 'minusNanos$J', function (nanos) {
return p$1.with$java_time_LocalTime$java_time_ZoneOffset.apply(this, [this.time.minusNanos$J(nanos), this.offset]);
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(7).offset$()  || query === $I$(7).zone$()  ) {
return this.offset;
} else if (!!(!!(query === $I$(7).zoneId$()  | query === $I$(7).chronology$() ) || query === $I$(7).localDate$() )) {
return null;
} else if (query === $I$(7).localTime$() ) {
return this.time;
} else if (query === $I$(7).precision$() ) {
return $I$(8).NANOS;
}return query.queryFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal', function (temporal) {
return temporal.with$java_time_temporal_TemporalField$J($I$(6).NANO_OF_DAY, this.time.toNanoOfDay$()).with$java_time_temporal_TemporalField$J($I$(6).OFFSET_SECONDS, this.offset.getTotalSeconds$());
});

Clazz.newMeth(C$, 'until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit', function (endExclusive, unit) {
var end=C$.from$java_time_temporal_TemporalAccessor(endExclusive);
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
var nanosUntil=p$1.toEpochNano.apply(end, []) - p$1.toEpochNano.apply(this, []);
switch (unit) {
case $I$(8).NANOS:
return nanosUntil;
case $I$(8).MICROS:
return Clazz.toLong(nanosUntil/1000);
case $I$(8).MILLIS:
return Clazz.toLong(nanosUntil/1000000);
case $I$(8).SECONDS:
return Clazz.toLong(nanosUntil/1000000000);
case $I$(8).MINUTES:
return Clazz.toLong(nanosUntil/60000000000);
case $I$(8).HOURS:
return Clazz.toLong(nanosUntil/3600000000000);
case $I$(8).HALF_DAYS:
return Clazz.toLong(nanosUntil/(43200000000000));
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}return unit.between$java_time_temporal_Temporal$java_time_temporal_Temporal(this, end);
});

Clazz.newMeth(C$, 'format$java_time_format_DateTimeFormatter', function (formatter) {
$I$(4).requireNonNull$O$S(formatter, "formatter");
return formatter.format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'atDate$java_time_LocalDate', function (date) {
return $I$(9).of$java_time_LocalDate$java_time_LocalTime$java_time_ZoneOffset(date, this.time, this.offset);
});

Clazz.newMeth(C$, 'toEpochNano', function () {
var nod=this.time.toNanoOfDay$();
var offsetNanos=this.offset.getTotalSeconds$() * 1000000000;
return nod - offsetNanos;
}, p$1);

Clazz.newMeth(C$, ['compareTo$java_time_OffsetTime','compareTo$O'], function (other) {
if (this.offset.equals$O(other.offset)) {
return this.time.compareTo$java_time_LocalTime(other.time);
}var compare=Long.compare$J$J(p$1.toEpochNano.apply(this, []), p$1.toEpochNano.apply(other, []));
if (compare == 0) {
compare=this.time.compareTo$java_time_LocalTime(other.time);
}return compare;
});

Clazz.newMeth(C$, 'isAfter$java_time_OffsetTime', function (other) {
return p$1.toEpochNano.apply(this, []) > p$1.toEpochNano.apply(other, []);
});

Clazz.newMeth(C$, 'isBefore$java_time_OffsetTime', function (other) {
return p$1.toEpochNano.apply(this, []) < p$1.toEpochNano.apply(other, []);
});

Clazz.newMeth(C$, 'isEqual$java_time_OffsetTime', function (other) {
return p$1.toEpochNano.apply(this, []) == p$1.toEpochNano.apply(other, []);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.OffsetTime")) {
var other=obj;
return this.time.equals$O(other.time) && this.offset.equals$O(other.offset) ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.time.hashCode$() ^ this.offset.hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.time.toString() + this.offset.toString();
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(10,1).c$$B$O,[9, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
this.time.writeExternal$java_io_DataOutput(out);
this.offset.writeExternal$java_io_DataOutput(out);
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
var time=$I$(1).readExternal$java_io_DataInput($in);
var offset=$I$(2).readExternal$java_io_DataInput($in);
return C$.of$java_time_LocalTime$java_time_ZoneOffset(time, offset);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MIN=$I$(1).MIN.atOffset$java_time_ZoneOffset($I$(2).MAX);
C$.MAX=$I$(1).MAX.atOffset$java_time_ZoneOffset($I$(2).MIN);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:53:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
