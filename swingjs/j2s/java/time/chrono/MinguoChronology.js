(function(){var P$=Clazz.newPackage("java.time.chrono"),p$1={},I$=[[0,'java.time.chrono.MinguoDate','java.time.LocalDate','java.time.Clock','java.time.chrono.IsoChronology','java.time.chrono.MinguoEra','java.util.Arrays','java.time.temporal.ChronoField','java.time.temporal.ValueRange']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MinguoChronology", null, 'java.time.chrono.AbstractChronology', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['INSTANCE','java.time.chrono.MinguoChronology']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getId$', function () {
return "Minguo";
});

Clazz.newMeth(C$, 'getCalendarType$', function () {
return "roc";
});

Clazz.newMeth(C$, 'date$java_time_chrono_Era$I$I$I', function (era, yearOfEra, month, dayOfMonth) {
return this.date$I$I$I(this.prolepticYear$java_time_chrono_Era$I(era, yearOfEra), month, dayOfMonth);
});

Clazz.newMeth(C$, 'date$I$I$I', function (prolepticYear, month, dayOfMonth) {
return Clazz.new_([$I$(2).of$I$I$I(prolepticYear + 1911, month, dayOfMonth)],$I$(1,1).c$$java_time_LocalDate);
});

Clazz.newMeth(C$, 'dateYearDay$java_time_chrono_Era$I$I', function (era, yearOfEra, dayOfYear) {
return this.dateYearDay$I$I(this.prolepticYear$java_time_chrono_Era$I(era, yearOfEra), dayOfYear);
});

Clazz.newMeth(C$, 'dateYearDay$I$I', function (prolepticYear, dayOfYear) {
return Clazz.new_([$I$(2).ofYearDay$I$I(prolepticYear + 1911, dayOfYear)],$I$(1,1).c$$java_time_LocalDate);
});

Clazz.newMeth(C$, 'dateEpochDay$J', function (epochDay) {
return Clazz.new_([$I$(2).ofEpochDay$J(epochDay)],$I$(1,1).c$$java_time_LocalDate);
});

Clazz.newMeth(C$, 'dateNow$', function () {
return this.dateNow$java_time_Clock($I$(3).systemDefaultZone$());
});

Clazz.newMeth(C$, 'dateNow$java_time_ZoneId', function (zone) {
return this.dateNow$java_time_Clock($I$(3).system$java_time_ZoneId(zone));
});

Clazz.newMeth(C$, 'dateNow$java_time_Clock', function (clock) {
return this.date$java_time_temporal_TemporalAccessor($I$(2).now$java_time_Clock(clock));
});

Clazz.newMeth(C$, 'date$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.chrono.MinguoDate")) {
return temporal;
}return Clazz.new_([$I$(2).from$java_time_temporal_TemporalAccessor(temporal)],$I$(1,1).c$$java_time_LocalDate);
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
return $I$(4).INSTANCE.isLeapYear$J(prolepticYear + 1911);
});

Clazz.newMeth(C$, 'prolepticYear$java_time_chrono_Era$I', function (era, yearOfEra) {
if (Clazz.instanceOf(era, "java.time.chrono.MinguoEra") == false ) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["Era must be MinguoEra"]);
}return (era === $I$(5).ROC  ? yearOfEra : 1 - yearOfEra);
});

Clazz.newMeth(C$, 'eraOf$I', function (eraValue) {
return $I$(5).of$I(eraValue);
});

Clazz.newMeth(C$, 'eras$', function () {
return $I$(6,"asList$OA",[$I$(5).values$()]);
});

Clazz.newMeth(C$, 'range$java_time_temporal_ChronoField', function (field) {
switch (field) {
case $I$(7).PROLEPTIC_MONTH:
{
var range=$I$(7).PROLEPTIC_MONTH.range$();
return $I$(8,"of$J$J",[range.getMinimum$() - 22932, range.getMaximum$() - 22932]);
}case $I$(7).YEAR_OF_ERA:
{
var range=$I$(7).YEAR.range$();
return $I$(8,"of$J$J$J",[1, range.getMaximum$() - 1911, -range.getMinimum$() + 1 + 1911 ]);
}case $I$(7).YEAR:
{
var range=$I$(7).YEAR.range$();
return $I$(8,"of$J$J",[range.getMinimum$() - 1911, range.getMaximum$() - 1911]);
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
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
