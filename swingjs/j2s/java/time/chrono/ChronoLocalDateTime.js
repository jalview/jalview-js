(function(){var P$=Clazz.newPackage("java.time.chrono"),I$=[[0,'java.time.chrono.AbstractChronology','java.util.Objects','java.time.temporal.TemporalQueries','java.time.temporal.ChronoUnit','java.time.chrono.ChronoLocalDateTimeImpl','java.time.temporal.ChronoField','java.time.Instant']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "ChronoLocalDateTime", null, null, ['java.time.temporal.Temporal', 'java.time.temporal.TemporalAdjuster', 'Comparable']);

C$.$clinit$=2;

Clazz.newMeth(C$, 'timeLineOrder$', function () {
return $I$(1).DATE_TIME_ORDER;
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.chrono.ChronoLocalDateTime")) {
return temporal;
}$I$(2).requireNonNull$O$S(temporal, "temporal");
var chrono=temporal.query$java_time_temporal_TemporalQuery($I$(3).chronology$());
if (chrono == null ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unable to obtain ChronoLocalDateTime from TemporalAccessor: " + temporal.getClass$()]);
}return chrono.localDateTime$java_time_temporal_TemporalAccessor(temporal);
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getChronology$', function () {
return this.toLocalDate$().getChronology$();
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalUnit', function (unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
return unit !== $I$(4).FOREVER ;
}return unit != null  && unit.isSupportedBy$java_time_temporal_Temporal(this) ;
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster', function (adjuster) {
return $I$(5,"ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal",[this.getChronology$(), java.time.temporal.Temporal.superclazz.prototype.with$java_time_temporal_TemporalAdjuster.apply(this, [adjuster])]);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amount) {
return $I$(5,"ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal",[this.getChronology$(), java.time.temporal.Temporal.superclazz.prototype.plus$java_time_temporal_TemporalAmount.apply(this, [amount])]);
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amount) {
return $I$(5,"ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal",[this.getChronology$(), java.time.temporal.Temporal.superclazz.prototype.minus$java_time_temporal_TemporalAmount.apply(this, [amount])]);
});

Clazz.newMeth(C$, 'minus$J$java_time_temporal_TemporalUnit', function (amountToSubtract, unit) {
return $I$(5,"ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal",[this.getChronology$(), java.time.temporal.Temporal.superclazz.prototype.minus$J$java_time_temporal_TemporalUnit.apply(this, [amountToSubtract, unit])]);
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(3).zoneId$()  || query === $I$(3).zone$()   || query === $I$(3).offset$()  ) {
return null;
} else if (query === $I$(3).localTime$() ) {
return this.toLocalTime$();
} else if (query === $I$(3).chronology$() ) {
return this.getChronology$();
} else if (query === $I$(3).precision$() ) {
return $I$(4).NANOS;
}return query.queryFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal', function (temporal) {
return temporal.with$java_time_temporal_TemporalField$J($I$(6).EPOCH_DAY, this.toLocalDate$().toEpochDay$()).with$java_time_temporal_TemporalField$J($I$(6).NANO_OF_DAY, this.toLocalTime$().toNanoOfDay$());
});

Clazz.newMeth(C$, 'format$java_time_format_DateTimeFormatter', function (formatter) {
$I$(2).requireNonNull$O$S(formatter, "formatter");
return formatter.format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'toInstant$java_time_ZoneOffset', function (offset) {
return $I$(7,"ofEpochSecond$J$J",[this.toEpochSecond$java_time_ZoneOffset(offset), this.toLocalTime$().getNano$()]);
});

Clazz.newMeth(C$, 'toEpochSecond$java_time_ZoneOffset', function (offset) {
$I$(2).requireNonNull$O$S(offset, "offset");
var epochDay=this.toLocalDate$().toEpochDay$();
var secs=epochDay * 86400 + this.toLocalTime$().toSecondOfDay$();
secs-=offset.getTotalSeconds$();
return secs;
});

Clazz.newMeth(C$, ['compareTo$java_time_chrono_ChronoLocalDateTime','compareTo$O'], function (other) {
var cmp=this.toLocalDate$().compareTo$java_time_chrono_ChronoLocalDate(other.toLocalDate$());
if (cmp == 0) {
cmp=this.toLocalTime$().compareTo$java_time_LocalTime(other.toLocalTime$());
if (cmp == 0) {
cmp=this.getChronology$().compareTo$java_time_chrono_Chronology(other.getChronology$());
}}return cmp;
});

Clazz.newMeth(C$, 'isAfter$java_time_chrono_ChronoLocalDateTime', function (other) {
var thisEpDay=this.toLocalDate$().toEpochDay$();
var otherEpDay=other.toLocalDate$().toEpochDay$();
return thisEpDay > otherEpDay || (thisEpDay == otherEpDay && this.toLocalTime$().toNanoOfDay$() > other.toLocalTime$().toNanoOfDay$() ) ;
});

Clazz.newMeth(C$, 'isBefore$java_time_chrono_ChronoLocalDateTime', function (other) {
var thisEpDay=this.toLocalDate$().toEpochDay$();
var otherEpDay=other.toLocalDate$().toEpochDay$();
return thisEpDay < otherEpDay || (thisEpDay == otherEpDay && this.toLocalTime$().toNanoOfDay$() < other.toLocalTime$().toNanoOfDay$() ) ;
});

Clazz.newMeth(C$, 'isEqual$java_time_chrono_ChronoLocalDateTime', function (other) {
return this.toLocalTime$().toNanoOfDay$() == other.toLocalTime$().toNanoOfDay$() && this.toLocalDate$().toEpochDay$() == other.toLocalDate$().toEpochDay$() ;
});
};})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
