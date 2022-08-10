(function(){var P$=Clazz.newPackage("java.time.chrono"),I$=[[0,'java.util.Objects','java.time.temporal.TemporalQueries','java.time.chrono.IsoChronology','java.time.chrono.AbstractChronology','java.time.Clock','java.time.LocalDate','java.time.LocalTime','java.time.ZoneId','java.time.Instant','java.time.chrono.ChronoLocalDateTimeImpl','java.time.chrono.ChronoZonedDateTimeImpl','java.time.format.DateTimeFormatterBuilder','java.time.chrono.ChronoPeriodImpl']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Chronology", null, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
$I$(1).requireNonNull$O$S(temporal, "temporal");
var obj=temporal.query$java_time_temporal_TemporalQuery($I$(2).chronology$());
return (obj != null  ? obj : $I$(3).INSTANCE);
}, 1);

Clazz.newMeth(C$, 'ofLocale$java_util_Locale', function (locale) {
return $I$(4).ofLocale$java_util_Locale(locale);
}, 1);

Clazz.newMeth(C$, 'of$S', function (id) {
return $I$(4).of$S(id);
}, 1);

Clazz.newMeth(C$, 'getAvailableChronologies$', function () {
return $I$(4).getAvailableChronologies$();
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'date$java_time_chrono_Era$I$I$I', function (era, yearOfEra, month, dayOfMonth) {
return this.date$I$I$I(this.prolepticYear$java_time_chrono_Era$I(era, yearOfEra), month, dayOfMonth);
});

Clazz.newMeth(C$, 'dateYearDay$java_time_chrono_Era$I$I', function (era, yearOfEra, dayOfYear) {
return this.dateYearDay$I$I(this.prolepticYear$java_time_chrono_Era$I(era, yearOfEra), dayOfYear);
});

Clazz.newMeth(C$, 'dateNow$', function () {
return this.dateNow$java_time_Clock($I$(5).systemDefaultZone$());
});

Clazz.newMeth(C$, 'dateNow$java_time_ZoneId', function (zone) {
return this.dateNow$java_time_Clock($I$(5).system$java_time_ZoneId(zone));
});

Clazz.newMeth(C$, 'dateNow$java_time_Clock', function (clock) {
$I$(1).requireNonNull$O$S(clock, "clock");
return this.date$java_time_temporal_TemporalAccessor($I$(6).now$java_time_Clock(clock));
});

Clazz.newMeth(C$, 'localDateTime$java_time_temporal_TemporalAccessor', function (temporal) {
try {
return this.date$java_time_temporal_TemporalAccessor(temporal).atTime$java_time_LocalTime($I$(7).from$java_time_temporal_TemporalAccessor(temporal));
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Unable to obtain ChronoLocalDateTime from TemporalAccessor: " + temporal.getClass$(), ex]);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'zonedDateTime$java_time_temporal_TemporalAccessor', function (temporal) {
try {
var zone=$I$(8).from$java_time_temporal_TemporalAccessor(temporal);
try {
var instant=$I$(9).from$java_time_temporal_TemporalAccessor(temporal);
return this.zonedDateTime$java_time_Instant$java_time_ZoneId(instant, zone);
} catch (ex1) {
if (Clazz.exceptionOf(ex1,"java.time.DateTimeException")){
var cldt=$I$(10,"ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal",[this, this.localDateTime$java_time_temporal_TemporalAccessor(temporal)]);
return $I$(11).ofBest$java_time_chrono_ChronoLocalDateTimeImpl$java_time_ZoneId$java_time_ZoneOffset(cldt, zone, null);
} else {
throw ex1;
}
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Unable to obtain ChronoZonedDateTime from TemporalAccessor: " + temporal.getClass$(), ex]);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'zonedDateTime$java_time_Instant$java_time_ZoneId', function (instant, zone) {
return $I$(11).ofInstant$java_time_chrono_Chronology$java_time_Instant$java_time_ZoneId(this, instant, zone);
});

Clazz.newMeth(C$, 'getDisplayName$java_time_format_TextStyle$java_util_Locale', function (style, locale) {
var temporal=((P$.Chronology$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Chronology$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAccessor', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
return false;
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(2).chronology$() ) {
return this.b$['java.time.chrono.Chronology'];
}return java.time.temporal.TemporalAccessor.superclazz.prototype.query$java_time_temporal_TemporalQuery.apply(this.b$['java.time.temporal.TemporalAccessor'], [query]);
});
})()
), Clazz.new_(P$.Chronology$1.$init$,[this, null]));
return Clazz.new_($I$(12,1)).appendChronologyText$java_time_format_TextStyle(style).toFormatter$java_util_Locale(locale).format$java_time_temporal_TemporalAccessor(temporal);
});

Clazz.newMeth(C$, 'period$I$I$I', function (years, months, days) {
return Clazz.new_($I$(13,1).c$$java_time_chrono_Chronology$I$I$I,[this, years, months, days]);
});

/*$synth$*/C$.prototype['compareTo$java_time_chrono_Chronology']=C$.prototype['compareTo$O'];
};})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
