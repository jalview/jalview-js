(function(){var P$=Clazz.newPackage("java.time.chrono"),I$=[[0,'java.time.chrono.AbstractChronology','java.util.Objects','java.time.temporal.TemporalQueries','java.time.temporal.ChronoField','java.time.chrono.ChronoLocalDateImpl','java.time.temporal.ChronoUnit','java.time.chrono.ChronoLocalDateTimeImpl']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "ChronoLocalDate", null, null, ['java.time.temporal.Temporal', 'java.time.temporal.TemporalAdjuster', 'Comparable']);

C$.$clinit$=2;

Clazz.newMeth(C$, 'timeLineOrder$', function () {
return $I$(1).DATE_ORDER;
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.chrono.ChronoLocalDate")) {
return temporal;
}$I$(2).requireNonNull$O$S(temporal, "temporal");
var chrono=temporal.query$java_time_temporal_TemporalQuery($I$(3).chronology$());
if (chrono == null ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unable to obtain ChronoLocalDate from TemporalAccessor: " + temporal.getClass$()]);
}return chrono.date$java_time_temporal_TemporalAccessor(temporal);
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getEra$', function () {
return this.getChronology$().eraOf$I(this.get$java_time_temporal_TemporalField($I$(4).ERA));
});

Clazz.newMeth(C$, 'isLeapYear$', function () {
return this.getChronology$().isLeapYear$J(this.getLong$java_time_temporal_TemporalField($I$(4).YEAR));
});

Clazz.newMeth(C$, 'lengthOfYear$', function () {
return (this.isLeapYear$() ? 366 : 365);
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
return field.isDateBased$();
}return field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ;
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalUnit', function (unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
return unit.isDateBased$();
}return unit != null  && unit.isSupportedBy$java_time_temporal_Temporal(this) ;
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster', function (adjuster) {
return $I$(5,"ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal",[this.getChronology$(), java.time.temporal.Temporal.superclazz.prototype.with$java_time_temporal_TemporalAdjuster.apply(this, [adjuster])]);
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return $I$(5,"ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal",[this.getChronology$(), field.adjustInto$java_time_temporal_Temporal$J(this, newValue)]);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amount) {
return $I$(5,"ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal",[this.getChronology$(), java.time.temporal.Temporal.superclazz.prototype.plus$java_time_temporal_TemporalAmount.apply(this, [amount])]);
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}return $I$(5,"ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal",[this.getChronology$(), unit.addTo$java_time_temporal_Temporal$J(this, amountToAdd)]);
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
return null;
} else if (query === $I$(3).chronology$() ) {
return this.getChronology$();
} else if (query === $I$(3).precision$() ) {
return $I$(6).DAYS;
}return query.queryFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal', function (temporal) {
return temporal.with$java_time_temporal_TemporalField$J($I$(4).EPOCH_DAY, this.toEpochDay$());
});

Clazz.newMeth(C$, 'format$java_time_format_DateTimeFormatter', function (formatter) {
$I$(2).requireNonNull$O$S(formatter, "formatter");
return formatter.format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'atTime$java_time_LocalTime', function (localTime) {
return $I$(7).of$java_time_chrono_ChronoLocalDate$java_time_LocalTime(this, localTime);
});

Clazz.newMeth(C$, 'toEpochDay$', function () {
return this.getLong$java_time_temporal_TemporalField($I$(4).EPOCH_DAY);
});

Clazz.newMeth(C$, ['compareTo$java_time_chrono_ChronoLocalDate','compareTo$O'], function (other) {
var cmp=Long.compare$J$J(this.toEpochDay$(), other.toEpochDay$());
if (cmp == 0) {
cmp=this.getChronology$().compareTo$java_time_chrono_Chronology(other.getChronology$());
}return cmp;
});

Clazz.newMeth(C$, 'isAfter$java_time_chrono_ChronoLocalDate', function (other) {
return this.toEpochDay$() > other.toEpochDay$();
});

Clazz.newMeth(C$, 'isBefore$java_time_chrono_ChronoLocalDate', function (other) {
return this.toEpochDay$() < other.toEpochDay$();
});

Clazz.newMeth(C$, 'isEqual$java_time_chrono_ChronoLocalDate', function (other) {
return this.toEpochDay$() == other.toEpochDay$();
});
};})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
