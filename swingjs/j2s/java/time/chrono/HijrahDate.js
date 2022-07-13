(function(){var P$=Clazz.newPackage("java.time.chrono"),p$1={},I$=[[0,'java.time.Clock','java.time.chrono.HijrahChronology','java.time.LocalDate','java.time.chrono.HijrahEra','java.time.temporal.ChronoField','java.time.temporal.ValueRange','java.time.chrono.Ser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HijrahDate", null, 'java.time.chrono.ChronoLocalDateImpl', ['java.time.chrono.ChronoLocalDate', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['prolepticYear','monthOfYear','dayOfMonth'],'O',['chrono','java.time.chrono.HijrahChronology']]]

Clazz.newMeth(C$, 'of$java_time_chrono_HijrahChronology$I$I$I', function (chrono, prolepticYear, monthOfYear, dayOfMonth) {
return Clazz.new_(C$.c$$java_time_chrono_HijrahChronology$I$I$I,[chrono, prolepticYear, monthOfYear, dayOfMonth]);
}, 1);

Clazz.newMeth(C$, 'ofEpochDay$java_time_chrono_HijrahChronology$J', function (chrono, epochDay) {
return Clazz.new_(C$.c$$java_time_chrono_HijrahChronology$J,[chrono, epochDay]);
}, 1);

Clazz.newMeth(C$, 'now$', function () {
return C$.now$java_time_Clock($I$(1).systemDefaultZone$());
}, 1);

Clazz.newMeth(C$, 'now$java_time_ZoneId', function (zone) {
return C$.now$java_time_Clock($I$(1).system$java_time_ZoneId(zone));
}, 1);

Clazz.newMeth(C$, 'now$java_time_Clock', function (clock) {
return C$.ofEpochDay$java_time_chrono_HijrahChronology$J($I$(2).INSTANCE, $I$(3).now$java_time_Clock(clock).toEpochDay$());
}, 1);

Clazz.newMeth(C$, 'of$I$I$I', function (prolepticYear, month, dayOfMonth) {
return $I$(2).INSTANCE.date$I$I$I(prolepticYear, month, dayOfMonth);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
return $I$(2).INSTANCE.date$java_time_temporal_TemporalAccessor(temporal);
}, 1);

Clazz.newMeth(C$, 'c$$java_time_chrono_HijrahChronology$I$I$I', function (chrono, prolepticYear, monthOfYear, dayOfMonth) {
Clazz.super_(C$, this);
chrono.getEpochDay$I$I$I(prolepticYear, monthOfYear, dayOfMonth);
this.chrono=chrono;
this.prolepticYear=prolepticYear;
this.monthOfYear=monthOfYear;
this.dayOfMonth=dayOfMonth;
}, 1);

Clazz.newMeth(C$, 'c$$java_time_chrono_HijrahChronology$J', function (chrono, epochDay) {
Clazz.super_(C$, this);
var dateInfo=chrono.getHijrahDateInfo$I((epochDay|0));
this.chrono=chrono;
this.prolepticYear=dateInfo[0];
this.monthOfYear=dateInfo[1];
this.dayOfMonth=dateInfo[2];
}, 1);

Clazz.newMeth(C$, 'getChronology$', function () {
return this.chrono;
});

Clazz.newMeth(C$, 'getEra$', function () {
return $I$(4).AH;
});

Clazz.newMeth(C$, 'lengthOfMonth$', function () {
return this.chrono.getMonthLength$I$I(this.prolepticYear, this.monthOfYear);
});

Clazz.newMeth(C$, 'lengthOfYear$', function () {
return this.chrono.getYearLength$I(this.prolepticYear);
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
if (this.isSupported$java_time_temporal_TemporalField(field)) {
var f=field;
switch (f) {
case $I$(5).DAY_OF_MONTH:
return $I$(6,"of$J$J",[1, this.lengthOfMonth$()]);
case $I$(5).DAY_OF_YEAR:
return $I$(6,"of$J$J",[1, this.lengthOfYear$()]);
case $I$(5).ALIGNED_WEEK_OF_MONTH:
return $I$(6).of$J$J(1, 5);
}
return this.getChronology$().range$java_time_temporal_ChronoField(f);
}throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.rangeRefinedBy$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(5).DAY_OF_WEEK:
return p$1.getDayOfWeek.apply(this, []);
case $I$(5).ALIGNED_DAY_OF_WEEK_IN_MONTH:
return ((p$1.getDayOfWeek.apply(this, []) - 1) % 7) + 1;
case $I$(5).ALIGNED_DAY_OF_WEEK_IN_YEAR:
return ((p$1.getDayOfYear.apply(this, []) - 1) % 7) + 1;
case $I$(5).DAY_OF_MONTH:
return this.dayOfMonth;
case $I$(5).DAY_OF_YEAR:
return p$1.getDayOfYear.apply(this, []);
case $I$(5).EPOCH_DAY:
return this.toEpochDay$();
case $I$(5).ALIGNED_WEEK_OF_MONTH:
return (((this.dayOfMonth - 1)/7|0)) + 1;
case $I$(5).ALIGNED_WEEK_OF_YEAR:
return (((p$1.getDayOfYear.apply(this, []) - 1)/7|0)) + 1;
case $I$(5).MONTH_OF_YEAR:
return this.monthOfYear;
case $I$(5).PROLEPTIC_MONTH:
return p$1.getProlepticMonth.apply(this, []);
case $I$(5).YEAR_OF_ERA:
return this.prolepticYear;
case $I$(5).YEAR:
return this.prolepticYear;
case $I$(5).ERA:
return p$1.getEraValue.apply(this, []);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'getProlepticMonth', function () {
return this.prolepticYear * 12 + this.monthOfYear - 1;
}, p$1);

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
this.chrono.range$java_time_temporal_ChronoField(f).checkValidValue$J$java_time_temporal_TemporalField(newValue, f);
var nvalue=(newValue|0);
switch (f) {
case $I$(5).DAY_OF_WEEK:
return this.plusDays$J(newValue - p$1.getDayOfWeek.apply(this, []));
case $I$(5).ALIGNED_DAY_OF_WEEK_IN_MONTH:
return this.plusDays$J(newValue - this.getLong$java_time_temporal_TemporalField($I$(5).ALIGNED_DAY_OF_WEEK_IN_MONTH));
case $I$(5).ALIGNED_DAY_OF_WEEK_IN_YEAR:
return this.plusDays$J(newValue - this.getLong$java_time_temporal_TemporalField($I$(5).ALIGNED_DAY_OF_WEEK_IN_YEAR));
case $I$(5).DAY_OF_MONTH:
return p$1.resolvePreviousValid$I$I$I.apply(this, [this.prolepticYear, this.monthOfYear, nvalue]);
case $I$(5).DAY_OF_YEAR:
return this.plusDays$J(Math.min(nvalue, this.lengthOfYear$()) - p$1.getDayOfYear.apply(this, []));
case $I$(5).EPOCH_DAY:
return Clazz.new_(C$.c$$java_time_chrono_HijrahChronology$J,[this.chrono, newValue]);
case $I$(5).ALIGNED_WEEK_OF_MONTH:
return this.plusDays$J((newValue - this.getLong$java_time_temporal_TemporalField($I$(5).ALIGNED_WEEK_OF_MONTH)) * 7);
case $I$(5).ALIGNED_WEEK_OF_YEAR:
return this.plusDays$J((newValue - this.getLong$java_time_temporal_TemporalField($I$(5).ALIGNED_WEEK_OF_YEAR)) * 7);
case $I$(5).MONTH_OF_YEAR:
return p$1.resolvePreviousValid$I$I$I.apply(this, [this.prolepticYear, nvalue, this.dayOfMonth]);
case $I$(5).PROLEPTIC_MONTH:
return this.plusMonths$J(newValue - p$1.getProlepticMonth.apply(this, []));
case $I$(5).YEAR_OF_ERA:
return p$1.resolvePreviousValid$I$I$I.apply(this, [this.prolepticYear >= 1 ? nvalue : 1 - nvalue, this.monthOfYear, this.dayOfMonth]);
case $I$(5).YEAR:
return p$1.resolvePreviousValid$I$I$I.apply(this, [nvalue, this.monthOfYear, this.dayOfMonth]);
case $I$(5).ERA:
return p$1.resolvePreviousValid$I$I$I.apply(this, [1 - this.prolepticYear, this.monthOfYear, this.dayOfMonth]);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return C$.superclazz.prototype.with$java_time_temporal_TemporalField$J.apply(this, [field, newValue]);
});

Clazz.newMeth(C$, 'resolvePreviousValid$I$I$I', function (prolepticYear, month, day) {
var monthDays=this.chrono.getMonthLength$I$I(prolepticYear, month);
if (day > monthDays) {
day=monthDays;
}return C$.of$java_time_chrono_HijrahChronology$I$I$I(this.chrono, prolepticYear, month, day);
}, p$1);

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster', function (adjuster) {
return C$.superclazz.prototype.with$java_time_temporal_TemporalAdjuster.apply(this, [adjuster]);
});

Clazz.newMeth(C$, 'withVariant$java_time_chrono_HijrahChronology', function (chronology) {
if (this.chrono === chronology ) {
return this;
}var monthDays=chronology.getDayOfYear$I$I(this.prolepticYear, this.monthOfYear);
return C$.of$java_time_chrono_HijrahChronology$I$I$I(chronology, this.prolepticYear, this.monthOfYear, (this.dayOfMonth > monthDays) ? monthDays : this.dayOfMonth);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amount) {
return C$.superclazz.prototype.plus$java_time_temporal_TemporalAmount.apply(this, [amount]);
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amount) {
return C$.superclazz.prototype.minus$java_time_temporal_TemporalAmount.apply(this, [amount]);
});

Clazz.newMeth(C$, 'toEpochDay$', function () {
return this.chrono.getEpochDay$I$I$I(this.prolepticYear, this.monthOfYear, this.dayOfMonth);
});

Clazz.newMeth(C$, 'getDayOfYear', function () {
return this.chrono.getDayOfYear$I$I(this.prolepticYear, this.monthOfYear) + this.dayOfMonth;
}, p$1);

Clazz.newMeth(C$, 'getDayOfWeek', function () {
var dow0=(Math.floorMod(this.toEpochDay$() + 3, 7)|0);
return dow0 + 1;
}, p$1);

Clazz.newMeth(C$, 'getEraValue', function () {
return (this.prolepticYear > 1 ? 1 : 0);
}, p$1);

Clazz.newMeth(C$, 'isLeapYear$', function () {
return this.chrono.isLeapYear$J(this.prolepticYear);
});

Clazz.newMeth(C$, 'plusYears$J', function (years) {
if (years == 0) {
return this;
}var newYear=Math.addExact(this.prolepticYear, (years|0));
return p$1.resolvePreviousValid$I$I$I.apply(this, [newYear, this.monthOfYear, this.dayOfMonth]);
});

Clazz.newMeth(C$, 'plusMonths$J', function (monthsToAdd) {
if (monthsToAdd == 0) {
return this;
}var monthCount=this.prolepticYear * 12 + (this.monthOfYear - 1);
var calcMonths=monthCount + monthsToAdd;
var newYear=this.chrono.checkValidYear$J(Math.floorDiv(calcMonths, 12));
var newMonth=(Math.floorMod(calcMonths, 12)|0) + 1;
return p$1.resolvePreviousValid$I$I$I.apply(this, [newYear, newMonth, this.dayOfMonth]);
});

Clazz.newMeth(C$, 'plusWeeks$J', function (weeksToAdd) {
return C$.superclazz.prototype.plusWeeks$J.apply(this, [weeksToAdd]);
});

Clazz.newMeth(C$, 'plusDays$J', function (days) {
return Clazz.new_(C$.c$$java_time_chrono_HijrahChronology$J,[this.chrono, this.toEpochDay$() + days]);
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
return C$.superclazz.prototype.plus$J$java_time_temporal_TemporalUnit.apply(this, [amountToAdd, unit]);
});

Clazz.newMeth(C$, 'minus$J$java_time_temporal_TemporalUnit', function (amountToSubtract, unit) {
return C$.superclazz.prototype.minus$J$java_time_temporal_TemporalUnit.apply(this, [amountToSubtract, unit]);
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

Clazz.newMeth(C$, 'atTime$java_time_LocalTime', function (localTime) {
return C$.superclazz.prototype.atTime$java_time_LocalTime.apply(this, [localTime]);
});

Clazz.newMeth(C$, 'until$java_time_chrono_ChronoLocalDate', function (endDate) {
var end=this.getChronology$().date$java_time_temporal_TemporalAccessor(endDate);
var totalMonths=(end.prolepticYear - this.prolepticYear) * 12 + (end.monthOfYear - this.monthOfYear);
var days=end.dayOfMonth - this.dayOfMonth;
if (totalMonths > 0 && days < 0 ) {
totalMonths--;
var calcDate=this.plusMonths$J(totalMonths);
days=((end.toEpochDay$() - calcDate.toEpochDay$())|0);
} else if (totalMonths < 0 && days > 0 ) {
totalMonths++;
days-=end.lengthOfMonth$();
}var years=Clazz.toLong(totalMonths/12);
var months=((totalMonths % 12)|0);
return this.getChronology$().period$I$I$I(Math.toIntExact(years), months, days);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.chrono.HijrahDate")) {
var otherDate=obj;
return this.prolepticYear == otherDate.prolepticYear && this.monthOfYear == otherDate.monthOfYear  && this.dayOfMonth == otherDate.dayOfMonth  && this.getChronology$().equals$O(otherDate.getChronology$()) ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var yearValue=this.prolepticYear;
var monthValue=this.monthOfYear;
var dayValue=this.dayOfMonth;
return this.getChronology$().getId$().hashCode$() ^ (yearValue & -2048) ^ ((yearValue << 11) + (monthValue << 6) + (dayValue) ) ;
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(7,1).c$$B$O,[6, this]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeObject$O(this.getChronology$());
out.writeInt$I(this.get$java_time_temporal_TemporalField($I$(5).YEAR));
out.writeByte$I(this.get$java_time_temporal_TemporalField($I$(5).MONTH_OF_YEAR));
out.writeByte$I(this.get$java_time_temporal_TemporalField($I$(5).DAY_OF_MONTH));
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
var chrono=$in.readObject$();
var year=$in.readInt$();
var month=$in.readByte$();
var dayOfMonth=$in.readByte$();
return chrono.date$I$I$I(year, month, dayOfMonth);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
