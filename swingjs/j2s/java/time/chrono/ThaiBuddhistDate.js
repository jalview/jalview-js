(function(){var P$=Clazz.newPackage("java.time.chrono"),p$1={},I$=[[0,'java.time.Clock','java.time.LocalDate','java.time.chrono.ThaiBuddhistChronology','java.util.Objects','java.time.chrono.ThaiBuddhistEra','java.time.temporal.ChronoField','java.time.temporal.ValueRange','java.time.chrono.Ser']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ThaiBuddhistDate", null, 'java.time.chrono.ChronoLocalDateImpl', ['java.time.chrono.ChronoLocalDate', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['isoDate','java.time.LocalDate']]]

Clazz.newMeth(C$, 'now$', function () {
return C$.now$java_time_Clock($I$(1).systemDefaultZone$());
}, 1);

Clazz.newMeth(C$, 'now$java_time_ZoneId', function (zone) {
return C$.now$java_time_Clock($I$(1).system$java_time_ZoneId(zone));
}, 1);

Clazz.newMeth(C$, 'now$java_time_Clock', function (clock) {
return Clazz.new_(C$.c$$java_time_LocalDate,[$I$(2).now$java_time_Clock(clock)]);
}, 1);

Clazz.newMeth(C$, 'of$I$I$I', function (prolepticYear, month, dayOfMonth) {
return Clazz.new_(C$.c$$java_time_LocalDate,[$I$(2).of$I$I$I(prolepticYear - 543, month, dayOfMonth)]);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
return $I$(3).INSTANCE.date$java_time_temporal_TemporalAccessor(temporal);
}, 1);

Clazz.newMeth(C$, 'c$$java_time_LocalDate', function (isoDate) {
Clazz.super_(C$, this);
$I$(4).requireNonNull$O$S(isoDate, "isoDate");
this.isoDate=isoDate;
}, 1);

Clazz.newMeth(C$, 'getChronology$', function () {
return $I$(3).INSTANCE;
});

Clazz.newMeth(C$, 'getEra$', function () {
return (p$1.getProlepticYear.apply(this, []) >= 1 ? $I$(5).BE : $I$(5).BEFORE_BE);
});

Clazz.newMeth(C$, 'lengthOfMonth$', function () {
return this.isoDate.lengthOfMonth$();
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
if (this.isSupported$java_time_temporal_TemporalField(field)) {
var f=field;
switch (f) {
case $I$(6).DAY_OF_MONTH:
case $I$(6).DAY_OF_YEAR:
case $I$(6).ALIGNED_WEEK_OF_MONTH:
return this.isoDate.range$java_time_temporal_TemporalField(field);
case $I$(6).YEAR_OF_ERA:
{
var range=$I$(6).YEAR.range$();
var max=(p$1.getProlepticYear.apply(this, []) <= 0 ? -(range.getMinimum$() + 543) + 1 : range.getMaximum$() + 543);
return $I$(7).of$J$J(1, max);
}}
return this.getChronology$().range$java_time_temporal_ChronoField(f);
}throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.rangeRefinedBy$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(6).PROLEPTIC_MONTH:
return p$1.getProlepticMonth.apply(this, []);
case $I$(6).YEAR_OF_ERA:
{
var prolepticYear=p$1.getProlepticYear.apply(this, []);
return (prolepticYear >= 1 ? prolepticYear : 1 - prolepticYear);
}case $I$(6).YEAR:
return p$1.getProlepticYear.apply(this, []);
case $I$(6).ERA:
return (p$1.getProlepticYear.apply(this, []) >= 1 ? 1 : 0);
}
return this.isoDate.getLong$java_time_temporal_TemporalField(field);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'getProlepticMonth', function () {
return p$1.getProlepticYear.apply(this, []) * 12 + this.isoDate.getMonthValue$() - 1;
}, p$1);

Clazz.newMeth(C$, 'getProlepticYear', function () {
return this.isoDate.getYear$() + 543;
}, p$1);

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
if (this.getLong$java_time_temporal_TemporalField(f) == newValue) {
return this;
}switch (f) {
case $I$(6).PROLEPTIC_MONTH:
this.getChronology$().range$java_time_temporal_ChronoField(f).checkValidValue$J$java_time_temporal_TemporalField(newValue, f);
return this.plusMonths$J(newValue - p$1.getProlepticMonth.apply(this, []));
case $I$(6).YEAR_OF_ERA:
case $I$(6).YEAR:
case $I$(6).ERA:
{
var nvalue=this.getChronology$().range$java_time_temporal_ChronoField(f).checkValidIntValue$J$java_time_temporal_TemporalField(newValue, f);
switch (f) {
case $I$(6).YEAR_OF_ERA:
return p$1.with$java_time_LocalDate.apply(this, [this.isoDate.withYear$I((p$1.getProlepticYear.apply(this, []) >= 1 ? nvalue : 1 - nvalue) - 543)]);
case $I$(6).YEAR:
return p$1.with$java_time_LocalDate.apply(this, [this.isoDate.withYear$I(nvalue - 543)]);
case $I$(6).ERA:
return p$1.with$java_time_LocalDate.apply(this, [this.isoDate.withYear$I((1 - p$1.getProlepticYear.apply(this, [])) - 543)]);
}
}}
return p$1.with$java_time_LocalDate.apply(this, [this.isoDate.with$java_time_temporal_TemporalField$J(field, newValue)]);
}return C$.superclazz.prototype.with$java_time_temporal_TemporalField$J.apply(this, [field, newValue]);
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster', function (adjuster) {
return C$.superclazz.prototype.with$java_time_temporal_TemporalAdjuster.apply(this, [adjuster]);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amount) {
return C$.superclazz.prototype.plus$java_time_temporal_TemporalAmount.apply(this, [amount]);
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amount) {
return C$.superclazz.prototype.minus$java_time_temporal_TemporalAmount.apply(this, [amount]);
});

Clazz.newMeth(C$, 'plusYears$J', function (years) {
return p$1.with$java_time_LocalDate.apply(this, [this.isoDate.plusYears$J(years)]);
});

Clazz.newMeth(C$, 'plusMonths$J', function (months) {
return p$1.with$java_time_LocalDate.apply(this, [this.isoDate.plusMonths$J(months)]);
});

Clazz.newMeth(C$, 'plusWeeks$J', function (weeksToAdd) {
return C$.superclazz.prototype.plusWeeks$J.apply(this, [weeksToAdd]);
});

Clazz.newMeth(C$, 'plusDays$J', function (days) {
return p$1.with$java_time_LocalDate.apply(this, [this.isoDate.plusDays$J(days)]);
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
return C$.superclazz.prototype.plus$J$java_time_temporal_TemporalUnit.apply(this, [amountToAdd, unit]);
});

Clazz.newMeth(C$, 'minus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
return C$.superclazz.prototype.minus$J$java_time_temporal_TemporalUnit.apply(this, [amountToAdd, unit]);
});

Clazz.newMeth(C$, 'minusYears$J', function (yearsToSubtract) {
return C$.superclazz.prototype.minusYears$J.apply(this, [yearsToSubtract]);
});

Clazz.newMeth(C$, 'minusMonths$J', function (monthsToSubtract) {
return C$.superclazz.prototype.minusMonths$J.apply(this, [monthsToSubtract]);
});

Clazz.newMeth(C$, 'minusWeeks$J', function (weeksToSubtract) {
return C$.superclazz.prototype.minusWeeks$J.apply(this, [weeksToSubtract]);
});

Clazz.newMeth(C$, 'minusDays$J', function (daysToSubtract) {
return C$.superclazz.prototype.minusDays$J.apply(this, [daysToSubtract]);
});

Clazz.newMeth(C$, 'with$java_time_LocalDate', function (newDate) {
return (newDate.equals$O(this.isoDate) ? this : Clazz.new_(C$.c$$java_time_LocalDate,[newDate]));
}, p$1);

Clazz.newMeth(C$, 'atTime$java_time_LocalTime', function (localTime) {
return C$.superclazz.prototype.atTime$java_time_LocalTime.apply(this, [localTime]);
});

Clazz.newMeth(C$, 'until$java_time_chrono_ChronoLocalDate', function (endDate) {
var period=this.isoDate.until$java_time_chrono_ChronoLocalDate(endDate);
return this.getChronology$().period$I$I$I(period.getYears$(), period.getMonths$(), period.getDays$());
});

Clazz.newMeth(C$, 'toEpochDay$', function () {
return this.isoDate.toEpochDay$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.chrono.ThaiBuddhistDate")) {
var otherDate=obj;
return this.isoDate.equals$O(otherDate.isoDate);
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getChronology$().getId$().hashCode$() ^ this.isoDate.hashCode$();
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(8,1).c$$B$O,[8, this]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
out.writeInt$I(this.get$java_time_temporal_TemporalField($I$(6).YEAR));
out.writeByte$I(this.get$java_time_temporal_TemporalField($I$(6).MONTH_OF_YEAR));
out.writeByte$I(this.get$java_time_temporal_TemporalField($I$(6).DAY_OF_MONTH));
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var year=$in.readInt$();
var month=$in.readByte$();
var dayOfMonth=$in.readByte$();
return $I$(3).INSTANCE.date$I$I$I(year, month, dayOfMonth);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
