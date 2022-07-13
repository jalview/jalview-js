(function(){var P$=Clazz.newPackage("java.time.chrono"),p$1={},I$=[[0,'java.time.LocalDate','java.time.Clock','java.util.Objects','java.time.chrono.JapaneseChronology','java.time.chrono.JapaneseEra','java.util.Calendar','java.time.temporal.ChronoField','java.time.temporal.ValueRange','java.time.chrono.Ser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JapaneseDate", null, 'java.time.chrono.ChronoLocalDateImpl', ['java.time.chrono.ChronoLocalDate', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['yearOfEra'],'O',['+isoDate','era','java.time.chrono.JapaneseEra']]
,['O',['MEIJI_6_ISODATE','java.time.LocalDate']]]

Clazz.newMeth(C$, 'now$', function () {
return C$.now$java_time_Clock($I$(2).systemDefaultZone$());
}, 1);

Clazz.newMeth(C$, 'now$java_time_ZoneId', function (zone) {
return C$.now$java_time_Clock($I$(2).system$java_time_ZoneId(zone));
}, 1);

Clazz.newMeth(C$, 'now$java_time_Clock', function (clock) {
return Clazz.new_(C$.c$$java_time_LocalDate,[$I$(1).now$java_time_Clock(clock)]);
}, 1);

Clazz.newMeth(C$, 'of$java_time_chrono_JapaneseEra$I$I$I', function (era, yearOfEra, month, dayOfMonth) {
$I$(3).requireNonNull$O$S(era, "era");
var jdate=$I$(4).JCAL.newCalendarDate$java_util_TimeZone(null);
jdate.setEra$sun_util_calendar_Era(era.getPrivateEra$()).setDate$I$I$I(yearOfEra, month, dayOfMonth);
if (!$I$(4).JCAL.validate$sun_util_calendar_CalendarDate(jdate)) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["year, month, and day not valid for Era"]);
}var date=$I$(1,"of$I$I$I",[jdate.getNormalizedYear$(), month, dayOfMonth]);
return Clazz.new_(C$.c$$java_time_chrono_JapaneseEra$I$java_time_LocalDate,[era, yearOfEra, date]);
}, 1);

Clazz.newMeth(C$, 'of$I$I$I', function (prolepticYear, month, dayOfMonth) {
return Clazz.new_(C$.c$$java_time_LocalDate,[$I$(1).of$I$I$I(prolepticYear, month, dayOfMonth)]);
}, 1);

Clazz.newMeth(C$, 'ofYearDay$java_time_chrono_JapaneseEra$I$I', function (era, yearOfEra, dayOfYear) {
$I$(3).requireNonNull$O$S(era, "era");
var firstDay=era.getPrivateEra$().getSinceDate$();
var jdate=$I$(4).JCAL.newCalendarDate$java_util_TimeZone(null);
jdate.setEra$sun_util_calendar_Era(era.getPrivateEra$());
if (yearOfEra == 1) {
jdate.setDate$I$I$I(yearOfEra, firstDay.getMonth$(), firstDay.getDayOfMonth$() + dayOfYear - 1);
} else {
jdate.setDate$I$I$I(yearOfEra, 1, dayOfYear);
}$I$(4).JCAL.normalize$sun_util_calendar_CalendarDate(jdate);
if (era.getPrivateEra$() !== jdate.getEra$()  || yearOfEra != jdate.getYear$() ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid parameters"]);
}var localdate=$I$(1,"of$I$I$I",[jdate.getNormalizedYear$(), jdate.getMonth$(), jdate.getDayOfMonth$()]);
return Clazz.new_(C$.c$$java_time_chrono_JapaneseEra$I$java_time_LocalDate,[era, yearOfEra, localdate]);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
return $I$(4).INSTANCE.date$java_time_temporal_TemporalAccessor(temporal);
}, 1);

Clazz.newMeth(C$, 'c$$java_time_LocalDate', function (isoDate) {
Clazz.super_(C$, this);
if (isoDate.isBefore$java_time_chrono_ChronoLocalDate(C$.MEIJI_6_ISODATE)) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["JapaneseDate before Meiji 6 is not supported"]);
}var jdate=C$.toPrivateJapaneseDate$java_time_LocalDate(isoDate);
this.era=$I$(5,"toJapaneseEra$sun_util_calendar_Era",[jdate.getEra$()]);
this.yearOfEra=jdate.getYear$();
this.isoDate=isoDate;
}, 1);

Clazz.newMeth(C$, 'c$$java_time_chrono_JapaneseEra$I$java_time_LocalDate', function (era, year, isoDate) {
Clazz.super_(C$, this);
if (isoDate.isBefore$java_time_chrono_ChronoLocalDate(C$.MEIJI_6_ISODATE)) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["JapaneseDate before Meiji 6 is not supported"]);
}this.era=era;
this.yearOfEra=year;
this.isoDate=isoDate;
}, 1);

Clazz.newMeth(C$, 'getChronology$', function () {
return $I$(4).INSTANCE;
});

Clazz.newMeth(C$, 'getEra$', function () {
return this.era;
});

Clazz.newMeth(C$, 'lengthOfMonth$', function () {
return this.isoDate.lengthOfMonth$();
});

Clazz.newMeth(C$, 'lengthOfYear$', function () {
var jcal=$I$(6,"getInstance$java_util_Locale",[$I$(4).LOCALE]);
jcal.set$I$I(0, this.era.getValue$() + 2);
jcal.set$I$I$I(this.yearOfEra, this.isoDate.getMonthValue$() - 1, this.isoDate.getDayOfMonth$());
return jcal.getActualMaximum$I(6);
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (field === $I$(7).ALIGNED_DAY_OF_WEEK_IN_MONTH  || field === $I$(7).ALIGNED_DAY_OF_WEEK_IN_YEAR   || field === $I$(7).ALIGNED_WEEK_OF_MONTH   || field === $I$(7).ALIGNED_WEEK_OF_YEAR  ) {
return false;
}return P$.ChronoLocalDate.superclazz.prototype.isSupported$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
if (this.isSupported$java_time_temporal_TemporalField(field)) {
var f=field;
switch (f) {
case $I$(7).DAY_OF_MONTH:
return $I$(8,"of$J$J",[1, this.lengthOfMonth$()]);
case $I$(7).DAY_OF_YEAR:
return $I$(8,"of$J$J",[1, this.lengthOfYear$()]);
case $I$(7).YEAR_OF_ERA:
{
var jcal=$I$(6,"getInstance$java_util_Locale",[$I$(4).LOCALE]);
jcal.set$I$I(0, this.era.getValue$() + 2);
jcal.set$I$I$I(this.yearOfEra, this.isoDate.getMonthValue$() - 1, this.isoDate.getDayOfMonth$());
return $I$(8,"of$J$J",[1, jcal.getActualMaximum$I(1)]);
}}
return this.getChronology$().range$java_time_temporal_ChronoField(f);
}throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.rangeRefinedBy$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(7).ALIGNED_DAY_OF_WEEK_IN_MONTH:
case $I$(7).ALIGNED_DAY_OF_WEEK_IN_YEAR:
case $I$(7).ALIGNED_WEEK_OF_MONTH:
case $I$(7).ALIGNED_WEEK_OF_YEAR:
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
case $I$(7).YEAR_OF_ERA:
return this.yearOfEra;
case $I$(7).ERA:
return this.era.getValue$();
case $I$(7).DAY_OF_YEAR:
var jcal=$I$(6,"getInstance$java_util_Locale",[$I$(4).LOCALE]);
jcal.set$I$I(0, this.era.getValue$() + 2);
jcal.set$I$I$I(this.yearOfEra, this.isoDate.getMonthValue$() - 1, this.isoDate.getDayOfMonth$());
return jcal.get$I(6);
}
return this.isoDate.getLong$java_time_temporal_TemporalField(field);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'toPrivateJapaneseDate$java_time_LocalDate', function (isoDate) {
var jdate=$I$(4).JCAL.newCalendarDate$java_util_TimeZone(null);
var sunEra=$I$(5).privateEraFrom$java_time_LocalDate(isoDate);
var year=isoDate.getYear$();
if (sunEra != null ) {
year-=sunEra.getSinceDate$().getYear$() - 1;
}jdate.setEra$sun_util_calendar_Era(sunEra).setYear$I(year).setMonth$I(isoDate.getMonthValue$()).setDayOfMonth$I(isoDate.getDayOfMonth$());
$I$(4).JCAL.normalize$sun_util_calendar_CalendarDate(jdate);
return jdate;
}, 1);

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
if (this.getLong$java_time_temporal_TemporalField(f) == newValue) {
return this;
}switch (f) {
case $I$(7).YEAR_OF_ERA:
case $I$(7).YEAR:
case $I$(7).ERA:
{
var nvalue=this.getChronology$().range$java_time_temporal_ChronoField(f).checkValidIntValue$J$java_time_temporal_TemporalField(newValue, f);
switch (f) {
case $I$(7).YEAR_OF_ERA:
return p$1.withYear$I.apply(this, [nvalue]);
case $I$(7).YEAR:
return p$1.with$java_time_LocalDate.apply(this, [this.isoDate.withYear$I(nvalue)]);
case $I$(7).ERA:
{
return p$1.withYear$java_time_chrono_JapaneseEra$I.apply(this, [$I$(5).of$I(nvalue), this.yearOfEra]);
}}
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

Clazz.newMeth(C$, 'withYear$java_time_chrono_JapaneseEra$I', function (era, yearOfEra) {
var year=$I$(4).INSTANCE.prolepticYear$java_time_chrono_Era$I(era, yearOfEra);
return p$1.with$java_time_LocalDate.apply(this, [this.isoDate.withYear$I(year)]);
}, p$1);

Clazz.newMeth(C$, 'withYear$I', function (year) {
return p$1.withYear$java_time_chrono_JapaneseEra$I.apply(this, [this.getEra$(), year]);
}, p$1);

Clazz.newMeth(C$, 'plusYears$J', function (years) {
return p$1.with$java_time_LocalDate.apply(this, [this.isoDate.plusYears$J(years)]);
});

Clazz.newMeth(C$, 'plusMonths$J', function (months) {
return p$1.with$java_time_LocalDate.apply(this, [this.isoDate.plusMonths$J(months)]);
});

Clazz.newMeth(C$, 'plusWeeks$J', function (weeksToAdd) {
return p$1.with$java_time_LocalDate.apply(this, [this.isoDate.plusWeeks$J(weeksToAdd)]);
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
}if (Clazz.instanceOf(obj, "java.time.chrono.JapaneseDate")) {
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
return Clazz.new_($I$(9,1).c$$B$O,[4, this]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
out.writeInt$I(this.get$java_time_temporal_TemporalField($I$(7).YEAR));
out.writeByte$I(this.get$java_time_temporal_TemporalField($I$(7).MONTH_OF_YEAR));
out.writeByte$I(this.get$java_time_temporal_TemporalField($I$(7).DAY_OF_MONTH));
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var year=$in.readInt$();
var month=$in.readByte$();
var dayOfMonth=$in.readByte$();
return $I$(4).INSTANCE.date$I$I$I(year, month, dayOfMonth);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MEIJI_6_ISODATE=$I$(1).of$I$I$I(1873, 1, 1);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:56 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
