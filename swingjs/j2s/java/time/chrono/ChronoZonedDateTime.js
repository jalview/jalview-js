(function(){var P$=Clazz.newPackage("java.time.chrono"),I$=[[0,'java.time.chrono.AbstractChronology','java.util.Objects','java.time.temporal.TemporalQueries','java.time.temporal.ChronoField','java.time.temporal.ChronoUnit','java.time.chrono.ChronoZonedDateTimeImpl','java.time.Instant']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "ChronoZonedDateTime", null, null, ['java.time.temporal.Temporal', 'Comparable']);

C$.$clinit$=2;

Clazz.newMeth(C$, 'timeLineOrder$', function () {
return $I$(1).INSTANT_ORDER;
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.chrono.ChronoZonedDateTime")) {
return temporal;
}$I$(2).requireNonNull$O$S(temporal, "temporal");
var chrono=temporal.query$java_time_temporal_TemporalQuery($I$(3).chronology$());
if (chrono == null ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unable to obtain ChronoZonedDateTime from TemporalAccessor: " + temporal.getClass$()]);
}return chrono.zonedDateTime$java_time_temporal_TemporalAccessor(temporal);
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
if (field === $I$(4).INSTANT_SECONDS  || field === $I$(4).OFFSET_SECONDS  ) {
return field.range$();
}return this.toLocalDateTime$().range$java_time_temporal_TemporalField(field);
}return field.rangeRefinedBy$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(4).INSTANT_SECONDS:
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Invalid field \'InstantSeconds\' for get() method, use getLong() instead"]);
case $I$(4).OFFSET_SECONDS:
return this.getOffset$().getTotalSeconds$();
}
return this.toLocalDateTime$().get$java_time_temporal_TemporalField(field);
}return java.time.temporal.Temporal.superclazz.prototype.get$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(4).INSTANT_SECONDS:
return this.toEpochSecond$();
case $I$(4).OFFSET_SECONDS:
return this.getOffset$().getTotalSeconds$();
}
return this.toLocalDateTime$().getLong$java_time_temporal_TemporalField(field);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'toLocalDate$', function () {
return this.toLocalDateTime$().toLocalDate$();
});

Clazz.newMeth(C$, 'toLocalTime$', function () {
return this.toLocalDateTime$().toLocalTime$();
});

Clazz.newMeth(C$, 'getChronology$', function () {
return this.toLocalDate$().getChronology$();
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalUnit', function (unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
return unit !== $I$(5).FOREVER ;
}return unit != null  && unit.isSupportedBy$java_time_temporal_Temporal(this) ;
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster', function (adjuster) {
return $I$(6,"ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal",[this.getChronology$(), java.time.temporal.Temporal.superclazz.prototype.with$java_time_temporal_TemporalAdjuster.apply(this, [adjuster])]);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amount) {
return $I$(6,"ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal",[this.getChronology$(), java.time.temporal.Temporal.superclazz.prototype.plus$java_time_temporal_TemporalAmount.apply(this, [amount])]);
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amount) {
return $I$(6,"ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal",[this.getChronology$(), java.time.temporal.Temporal.superclazz.prototype.minus$java_time_temporal_TemporalAmount.apply(this, [amount])]);
});

Clazz.newMeth(C$, 'minus$J$java_time_temporal_TemporalUnit', function (amountToSubtract, unit) {
return $I$(6,"ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal",[this.getChronology$(), java.time.temporal.Temporal.superclazz.prototype.minus$J$java_time_temporal_TemporalUnit.apply(this, [amountToSubtract, unit])]);
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(3).zone$()  || query === $I$(3).zoneId$()  ) {
return this.getZone$();
} else if (query === $I$(3).offset$() ) {
return this.getOffset$();
} else if (query === $I$(3).localTime$() ) {
return this.toLocalTime$();
} else if (query === $I$(3).chronology$() ) {
return this.getChronology$();
} else if (query === $I$(3).precision$() ) {
return $I$(5).NANOS;
}return query.queryFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'format$java_time_format_DateTimeFormatter', function (formatter) {
$I$(2).requireNonNull$O$S(formatter, "formatter");
return formatter.format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'toInstant$', function () {
return $I$(7,"ofEpochSecond$J$J",[this.toEpochSecond$(), this.toLocalTime$().getNano$()]);
});

Clazz.newMeth(C$, 'toEpochSecond$', function () {
var epochDay=this.toLocalDate$().toEpochDay$();
var secs=epochDay * 86400 + this.toLocalTime$().toSecondOfDay$();
secs-=this.getOffset$().getTotalSeconds$();
return secs;
});

Clazz.newMeth(C$, ['compareTo$java_time_chrono_ChronoZonedDateTime','compareTo$O'], function (other) {
var cmp=Long.compare$J$J(this.toEpochSecond$(), other.toEpochSecond$());
if (cmp == 0) {
cmp=this.toLocalTime$().getNano$() - other.toLocalTime$().getNano$();
if (cmp == 0) {
cmp=this.toLocalDateTime$().compareTo$java_time_chrono_ChronoLocalDateTime(other.toLocalDateTime$());
if (cmp == 0) {
cmp=this.getZone$().getId$().compareTo$S(other.getZone$().getId$());
if (cmp == 0) {
cmp=this.getChronology$().compareTo$java_time_chrono_Chronology(other.getChronology$());
}}}}return cmp;
});

Clazz.newMeth(C$, 'isBefore$java_time_chrono_ChronoZonedDateTime', function (other) {
var thisEpochSec=this.toEpochSecond$();
var otherEpochSec=other.toEpochSecond$();
return thisEpochSec < otherEpochSec || (thisEpochSec == otherEpochSec && this.toLocalTime$().getNano$() < other.toLocalTime$().getNano$() ) ;
});

Clazz.newMeth(C$, 'isAfter$java_time_chrono_ChronoZonedDateTime', function (other) {
var thisEpochSec=this.toEpochSecond$();
var otherEpochSec=other.toEpochSecond$();
return thisEpochSec > otherEpochSec || (thisEpochSec == otherEpochSec && this.toLocalTime$().getNano$() > other.toLocalTime$().getNano$() ) ;
});

Clazz.newMeth(C$, 'isEqual$java_time_chrono_ChronoZonedDateTime', function (other) {
return this.toEpochSecond$() == other.toEpochSecond$() && this.toLocalTime$().getNano$() == other.toLocalTime$().getNano$() ;
});
};})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
