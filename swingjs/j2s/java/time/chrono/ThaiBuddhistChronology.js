(function(){var P$=Clazz.newPackage("java.time.chrono"),p$1={},I$=[[0,'java.util.HashMap','java.time.chrono.ThaiBuddhistDate','java.time.LocalDate','java.time.Clock','java.time.chrono.IsoChronology','java.time.chrono.ThaiBuddhistEra','java.util.Arrays','java.time.temporal.ChronoField','java.time.temporal.ValueRange']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ThaiBuddhistChronology", null, 'java.time.chrono.AbstractChronology', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['INSTANCE','java.time.chrono.ThaiBuddhistChronology','ERA_NARROW_NAMES','java.util.HashMap','+ERA_SHORT_NAMES','+ERA_FULL_NAMES']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getId$', function () {
return "ThaiBuddhist";
});

Clazz.newMeth(C$, 'getCalendarType$', function () {
return "buddhist";
});

Clazz.newMeth(C$, 'date$java_time_chrono_Era$I$I$I', function (era, yearOfEra, month, dayOfMonth) {
return this.date$I$I$I(this.prolepticYear$java_time_chrono_Era$I(era, yearOfEra), month, dayOfMonth);
});

Clazz.newMeth(C$, 'date$I$I$I', function (prolepticYear, month, dayOfMonth) {
return Clazz.new_([$I$(3).of$I$I$I(prolepticYear - 543, month, dayOfMonth)],$I$(2,1).c$$java_time_LocalDate);
});

Clazz.newMeth(C$, 'dateYearDay$java_time_chrono_Era$I$I', function (era, yearOfEra, dayOfYear) {
return this.dateYearDay$I$I(this.prolepticYear$java_time_chrono_Era$I(era, yearOfEra), dayOfYear);
});

Clazz.newMeth(C$, 'dateYearDay$I$I', function (prolepticYear, dayOfYear) {
return Clazz.new_([$I$(3).ofYearDay$I$I(prolepticYear - 543, dayOfYear)],$I$(2,1).c$$java_time_LocalDate);
});

Clazz.newMeth(C$, 'dateEpochDay$J', function (epochDay) {
return Clazz.new_([$I$(3).ofEpochDay$J(epochDay)],$I$(2,1).c$$java_time_LocalDate);
});

Clazz.newMeth(C$, 'dateNow$', function () {
return this.dateNow$java_time_Clock($I$(4).systemDefaultZone$());
});

Clazz.newMeth(C$, 'dateNow$java_time_ZoneId', function (zone) {
return this.dateNow$java_time_Clock($I$(4).system$java_time_ZoneId(zone));
});

Clazz.newMeth(C$, 'dateNow$java_time_Clock', function (clock) {
return this.date$java_time_temporal_TemporalAccessor($I$(3).now$java_time_Clock(clock));
});

Clazz.newMeth(C$, 'date$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.chrono.ThaiBuddhistDate")) {
return temporal;
}return Clazz.new_([$I$(3).from$java_time_temporal_TemporalAccessor(temporal)],$I$(2,1).c$$java_time_LocalDate);
});

Clazz.newMeth(C$, 'localDateTime$java_time_temporal_TemporalAccessor', function (temporal) {
return C$.superclazz.prototype.localDateTime$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
});

Clazz.newMeth(C$, 'zonedDateTime$java_time_temporal_TemporalAccessor', function (temporal) {
return C$.superclazz.prototype.zonedDateTime$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
});

Clazz.newMeth(C$, 'zonedDateTime$java_time_Instant$java_time_ZoneId', function (instant, zone) {
return C$.superclazz.prototype.zonedDateTime$java_time_Instant$java_time_ZoneId.apply(this, [instant, zone]);
});

Clazz.newMeth(C$, 'isLeapYear$J', function (prolepticYear) {
return $I$(5).INSTANCE.isLeapYear$J(prolepticYear - 543);
});

Clazz.newMeth(C$, 'prolepticYear$java_time_chrono_Era$I', function (era, yearOfEra) {
if (Clazz.instanceOf(era, "java.time.chrono.ThaiBuddhistEra") == false ) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["Era must be BuddhistEra"]);
}return (era === $I$(6).BE  ? yearOfEra : 1 - yearOfEra);
});

Clazz.newMeth(C$, 'eraOf$I', function (eraValue) {
return $I$(6).of$I(eraValue);
});

Clazz.newMeth(C$, 'eras$', function () {
return $I$(7,"asList$OA",[$I$(6).values$()]);
});

Clazz.newMeth(C$, 'range$java_time_temporal_ChronoField', function (field) {
switch (field) {
case $I$(8).PROLEPTIC_MONTH:
{
var range=$I$(8).PROLEPTIC_MONTH.range$();
return $I$(9,"of$J$J",[range.getMinimum$() + 6516, range.getMaximum$() + 6516]);
}case $I$(8).YEAR_OF_ERA:
{
var range=$I$(8).YEAR.range$();
return $I$(9,"of$J$J$J",[1, -(range.getMinimum$() + 543) + 1, range.getMaximum$() + 543]);
}case $I$(8).YEAR:
{
var range=$I$(8).YEAR.range$();
return $I$(9,"of$J$J",[range.getMinimum$() + 543, range.getMaximum$() + 543]);
}}
return field.range$();
});

Clazz.newMeth(C$, 'resolveDate$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
return C$.superclazz.prototype.resolveDate$java_util_Map$java_time_format_ResolverStyle.apply(this, [fieldValues, resolverStyle]);
});

Clazz.newMeth(C$, 'writeReplace$', function () {
return C$.superclazz.prototype.writeReplace$.apply(this, []);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.INSTANCE=Clazz.new_(C$);
C$.ERA_NARROW_NAMES=Clazz.new_($I$(1,1));
C$.ERA_SHORT_NAMES=Clazz.new_($I$(1,1));
C$.ERA_FULL_NAMES=Clazz.new_($I$(1,1));
{
C$.ERA_NARROW_NAMES.put$O$O("en", Clazz.array(String, -1, ["BB", "BE"]));
C$.ERA_NARROW_NAMES.put$O$O("th", Clazz.array(String, -1, ["BB", "BE"]));
C$.ERA_SHORT_NAMES.put$O$O("en", Clazz.array(String, -1, ["B.B.", "B.E."]));
C$.ERA_SHORT_NAMES.put$O$O("th", Clazz.array(String, -1, ["\u0e1e.\u0e28.", "\u0e1b\u0e35\u0e01\u0e48\u0e2d\u0e19\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e4c\u0e01\u0e32\u0e25\u0e17\u0e35\u0e48"]));
C$.ERA_FULL_NAMES.put$O$O("en", Clazz.array(String, -1, ["Before Buddhist", "Budhhist Era"]));
C$.ERA_FULL_NAMES.put$O$O("th", Clazz.array(String, -1, ["\u0e1e\u0e38\u0e17\u0e18\u0e28\u0e31\u0e01\u0e23\u0e32\u0e0a", "\u0e1b\u0e35\u0e01\u0e48\u0e2d\u0e19\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e4c\u0e01\u0e32\u0e25\u0e17\u0e35\u0e48"]));
};
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
