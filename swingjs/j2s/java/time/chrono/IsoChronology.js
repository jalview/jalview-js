(function(){var P$=Clazz.newPackage("java.time.chrono"),p$1={},I$=[[0,'java.time.LocalDate','java.time.LocalDateTime','java.time.ZonedDateTime','java.time.Clock','java.util.Objects','java.time.chrono.IsoEra','java.util.Arrays','java.time.temporal.ChronoField','java.time.format.ResolverStyle','java.time.Month','java.time.Year','java.time.Period']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IsoChronology", null, 'java.time.chrono.AbstractChronology', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['INSTANCE','java.time.chrono.IsoChronology']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getId$', function () {
return "ISO";
});

Clazz.newMeth(C$, 'getCalendarType$', function () {
return "iso8601";
});

Clazz.newMeth(C$, 'date$java_time_chrono_Era$I$I$I', function (era, yearOfEra, month, dayOfMonth) {
return this.date$I$I$I(this.prolepticYear$java_time_chrono_Era$I(era, yearOfEra), month, dayOfMonth);
});

Clazz.newMeth(C$, 'date$I$I$I', function (prolepticYear, month, dayOfMonth) {
return $I$(1).of$I$I$I(prolepticYear, month, dayOfMonth);
});

Clazz.newMeth(C$, 'dateYearDay$java_time_chrono_Era$I$I', function (era, yearOfEra, dayOfYear) {
return this.dateYearDay$I$I(this.prolepticYear$java_time_chrono_Era$I(era, yearOfEra), dayOfYear);
});

Clazz.newMeth(C$, 'dateYearDay$I$I', function (prolepticYear, dayOfYear) {
return $I$(1).ofYearDay$I$I(prolepticYear, dayOfYear);
});

Clazz.newMeth(C$, 'dateEpochDay$J', function (epochDay) {
return $I$(1).ofEpochDay$J(epochDay);
});

Clazz.newMeth(C$, 'date$java_time_temporal_TemporalAccessor', function (temporal) {
return $I$(1).from$java_time_temporal_TemporalAccessor(temporal);
});

Clazz.newMeth(C$, 'localDateTime$java_time_temporal_TemporalAccessor', function (temporal) {
return $I$(2).from$java_time_temporal_TemporalAccessor(temporal);
});

Clazz.newMeth(C$, 'zonedDateTime$java_time_temporal_TemporalAccessor', function (temporal) {
return $I$(3).from$java_time_temporal_TemporalAccessor(temporal);
});

Clazz.newMeth(C$, 'zonedDateTime$java_time_Instant$java_time_ZoneId', function (instant, zone) {
return $I$(3).ofInstant$java_time_Instant$java_time_ZoneId(instant, zone);
});

Clazz.newMeth(C$, 'dateNow$', function () {
return this.dateNow$java_time_Clock($I$(4).systemDefaultZone$());
});

Clazz.newMeth(C$, 'dateNow$java_time_ZoneId', function (zone) {
return this.dateNow$java_time_Clock($I$(4).system$java_time_ZoneId(zone));
});

Clazz.newMeth(C$, 'dateNow$java_time_Clock', function (clock) {
$I$(5).requireNonNull$O$S(clock, "clock");
return this.date$java_time_temporal_TemporalAccessor($I$(1).now$java_time_Clock(clock));
});

Clazz.newMeth(C$, 'isLeapYear$J', function (prolepticYear) {
return ((prolepticYear & 3) == 0) && ((prolepticYear % 100) != 0 || (prolepticYear % 400) == 0 ) ;
});

Clazz.newMeth(C$, 'prolepticYear$java_time_chrono_Era$I', function (era, yearOfEra) {
if (Clazz.instanceOf(era, "java.time.chrono.IsoEra") == false ) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["Era must be IsoEra"]);
}return (era === $I$(6).CE  ? yearOfEra : 1 - yearOfEra);
});

Clazz.newMeth(C$, 'eraOf$I', function (eraValue) {
return $I$(6).of$I(eraValue);
});

Clazz.newMeth(C$, 'eras$', function () {
return $I$(7,"asList$OA",[$I$(6).values$()]);
});

Clazz.newMeth(C$, 'resolveDate$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
return C$.superclazz.prototype.resolveDate$java_util_Map$java_time_format_ResolverStyle.apply(this, [fieldValues, resolverStyle]);
});

Clazz.newMeth(C$, 'resolveProlepticMonth$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
var pMonth=fieldValues.remove$O($I$(8).PROLEPTIC_MONTH);
if (pMonth != null ) {
if (resolverStyle !== $I$(9).LENIENT ) {
$I$(8).PROLEPTIC_MONTH.checkValidValue$J((pMonth).valueOf());
}this.addFieldValue$java_util_Map$java_time_temporal_ChronoField$J(fieldValues, $I$(8).MONTH_OF_YEAR, Math.floorMod((pMonth).valueOf(), 12) + 1);
this.addFieldValue$java_util_Map$java_time_temporal_ChronoField$J(fieldValues, $I$(8).YEAR, Math.floorDiv((pMonth).valueOf(), 12));
}});

Clazz.newMeth(C$, 'resolveYearOfEra$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
var yoeLong=fieldValues.remove$O($I$(8).YEAR_OF_ERA);
if (yoeLong != null ) {
if (resolverStyle !== $I$(9).LENIENT ) {
$I$(8).YEAR_OF_ERA.checkValidValue$J((yoeLong).valueOf());
}var era=fieldValues.remove$O($I$(8).ERA);
if (era == null ) {
var year=fieldValues.get$O($I$(8).YEAR);
if (resolverStyle === $I$(9).STRICT ) {
if (year != null ) {
this.addFieldValue$java_util_Map$java_time_temporal_ChronoField$J(fieldValues, $I$(8).YEAR, ((year).valueOf() > 0  ? (yoeLong).valueOf() : Math.subtractExact(1, (yoeLong).valueOf())));
} else {
fieldValues.put$O$O($I$(8).YEAR_OF_ERA, yoeLong);
}} else {
this.addFieldValue$java_util_Map$java_time_temporal_ChronoField$J(fieldValues, $I$(8).YEAR, (year == null  || (year).valueOf() > 0   ? (yoeLong).valueOf() : Math.subtractExact(1, (yoeLong).valueOf())));
}} else if (era.longValue$() == 1) {
this.addFieldValue$java_util_Map$java_time_temporal_ChronoField$J(fieldValues, $I$(8).YEAR, (yoeLong).valueOf());
} else if (era.longValue$() == 0) {
this.addFieldValue$java_util_Map$java_time_temporal_ChronoField$J(fieldValues, $I$(8).YEAR, Math.subtractExact(1, (yoeLong).valueOf()));
} else {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid value for era: " + era]);
}} else if (fieldValues.containsKey$O($I$(8).ERA)) {
$I$(8).ERA.checkValidValue$J((fieldValues.get$O($I$(8).ERA)).valueOf());
}return null;
});

Clazz.newMeth(C$, 'resolveYMD$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
var y=$I$(8).YEAR.checkValidIntValue$J((fieldValues.remove$O($I$(8).YEAR)).valueOf());
if (resolverStyle === $I$(9).LENIENT ) {
var months=Math.subtractExact((fieldValues.remove$O($I$(8).MONTH_OF_YEAR)).valueOf(), 1);
var days=Math.subtractExact((fieldValues.remove$O($I$(8).DAY_OF_MONTH)).valueOf(), 1);
return $I$(1).of$I$I$I(y, 1, 1).plusMonths$J(months).plusDays$J(days);
}var moy=$I$(8).MONTH_OF_YEAR.checkValidIntValue$J((fieldValues.remove$O($I$(8).MONTH_OF_YEAR)).valueOf());
var dom=$I$(8).DAY_OF_MONTH.checkValidIntValue$J((fieldValues.remove$O($I$(8).DAY_OF_MONTH)).valueOf());
if (resolverStyle === $I$(9).SMART ) {
if (moy == 4 || moy == 6  || moy == 9  || moy == 11 ) {
dom=Math.min(dom, 30);
} else if (moy == 2) {
dom=Math.min(dom, $I$(10).FEBRUARY.length$Z($I$(11).isLeap$J(y)));
}}return $I$(1).of$I$I$I(y, moy, dom);
});

Clazz.newMeth(C$, 'range$java_time_temporal_ChronoField', function (field) {
return field.range$();
});

Clazz.newMeth(C$, 'period$I$I$I', function (years, months, days) {
return $I$(12).of$I$I$I(years, months, days);
});

Clazz.newMeth(C$, 'writeReplace$', function () {
return C$.superclazz.prototype.writeReplace$.apply(this, []);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.INSTANCE=Clazz.new_(C$);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:56 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
