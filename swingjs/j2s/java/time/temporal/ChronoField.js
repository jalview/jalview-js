(function(){var P$=Clazz.newPackage("java.time.temporal"),I$=[[0,'java.time.temporal.ChronoUnit','java.time.temporal.ValueRange','java.util.Objects','sun.util.locale.provider.LocaleProviderAdapter']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*e*/var C$=Clazz.newClass(P$, "ChronoField", null, 'Enum', 'java.time.temporal.TemporalField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['$name','displayNameKey'],'O',['baseUnit','java.time.temporal.TemporalUnit','+rangeUnit','range','java.time.temporal.ValueRange']]]

Clazz.newMeth(C$, 'c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange', function (name, baseUnit, rangeUnit, range) {
;C$.$init$.apply(this);
this.$name=name;
this.baseUnit=baseUnit;
this.rangeUnit=rangeUnit;
this.range=range;
this.displayNameKey=null;
}, 1);

Clazz.newMeth(C$, 'c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange$S', function (name, baseUnit, rangeUnit, range, displayNameKey) {
;C$.$init$.apply(this);
this.$name=name;
this.baseUnit=baseUnit;
this.rangeUnit=rangeUnit;
this.range=range;
this.displayNameKey=displayNameKey;
}, 1);

Clazz.newMeth(C$, 'getDisplayName$java_util_Locale', function (locale) {
$I$(3).requireNonNull$O$S(locale, "locale");
if (this.displayNameKey == null ) {
return this.$name;
}var lr=$I$(4).getResourceBundleBased$().getLocaleResources$java_util_Locale(locale);
var rb=lr.getJavaTimeFormatData$();
var key="field." + this.displayNameKey;
return rb.containsKey$S(key) ? rb.getString$S(key) : this.$name;
});

Clazz.newMeth(C$, 'getBaseUnit$', function () {
return this.baseUnit;
});

Clazz.newMeth(C$, 'getRangeUnit$', function () {
return this.rangeUnit;
});

Clazz.newMeth(C$, 'range$', function () {
return this.range;
});

Clazz.newMeth(C$, 'isDateBased$', function () {
return this.ordinal$() >= C$.DAY_OF_WEEK.ordinal$() && this.ordinal$() <= C$.ERA.ordinal$() ;
});

Clazz.newMeth(C$, 'isTimeBased$', function () {
return this.ordinal$() < C$.DAY_OF_WEEK.ordinal$();
});

Clazz.newMeth(C$, 'checkValidValue$J', function (value) {
return this.range$().checkValidValue$J$java_time_temporal_TemporalField(value, this);
});

Clazz.newMeth(C$, 'checkValidIntValue$J', function (value) {
return this.range$().checkValidIntValue$J$java_time_temporal_TemporalField(value, this);
});

Clazz.newMeth(C$, 'isSupportedBy$java_time_temporal_TemporalAccessor', function (temporal) {
return temporal.isSupported$java_time_temporal_TemporalField(this);
});

Clazz.newMeth(C$, 'rangeRefinedBy$java_time_temporal_TemporalAccessor', function (temporal) {
return temporal.range$java_time_temporal_TemporalField(this);
});

Clazz.newMeth(C$, 'getFrom$java_time_temporal_TemporalAccessor', function (temporal) {
return temporal.getLong$java_time_temporal_TemporalField(this);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal$J', function (temporal, newValue) {
return temporal.with$java_time_temporal_TemporalField$J(this, newValue);
});

Clazz.newMeth(C$, 'toString', function () {
return this.$name;
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "NANO_OF_SECOND", 0, ["NanoOfSecond", $I$(1).NANOS, $I$(1).SECONDS, $I$(2).of$J$J(0, 999999999)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "NANO_OF_DAY", 1, ["NanoOfDay", $I$(1).NANOS, $I$(1).DAYS, $I$(2).of$J$J(0, 86399999999999)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "MICRO_OF_SECOND", 2, ["MicroOfSecond", $I$(1).MICROS, $I$(1).SECONDS, $I$(2).of$J$J(0, 999999)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "MICRO_OF_DAY", 3, ["MicroOfDay", $I$(1).MICROS, $I$(1).DAYS, $I$(2).of$J$J(0, 86399999999)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "MILLI_OF_SECOND", 4, ["MilliOfSecond", $I$(1).MILLIS, $I$(1).SECONDS, $I$(2).of$J$J(0, 999)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "MILLI_OF_DAY", 5, ["MilliOfDay", $I$(1).MILLIS, $I$(1).DAYS, $I$(2).of$J$J(0, 86399999)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange$S, "SECOND_OF_MINUTE", 6, ["SecondOfMinute", $I$(1).SECONDS, $I$(1).MINUTES, $I$(2).of$J$J(0, 59), "second"]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "SECOND_OF_DAY", 7, ["SecondOfDay", $I$(1).SECONDS, $I$(1).DAYS, $I$(2).of$J$J(0, 86399)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange$S, "MINUTE_OF_HOUR", 8, ["MinuteOfHour", $I$(1).MINUTES, $I$(1).HOURS, $I$(2).of$J$J(0, 59), "minute"]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "MINUTE_OF_DAY", 9, ["MinuteOfDay", $I$(1).MINUTES, $I$(1).DAYS, $I$(2).of$J$J(0, 1439)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "HOUR_OF_AMPM", 10, ["HourOfAmPm", $I$(1).HOURS, $I$(1).HALF_DAYS, $I$(2).of$J$J(0, 11)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "CLOCK_HOUR_OF_AMPM", 11, ["ClockHourOfAmPm", $I$(1).HOURS, $I$(1).HALF_DAYS, $I$(2).of$J$J(1, 12)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange$S, "HOUR_OF_DAY", 12, ["HourOfDay", $I$(1).HOURS, $I$(1).DAYS, $I$(2).of$J$J(0, 23), "hour"]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "CLOCK_HOUR_OF_DAY", 13, ["ClockHourOfDay", $I$(1).HOURS, $I$(1).DAYS, $I$(2).of$J$J(1, 24)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange$S, "AMPM_OF_DAY", 14, ["AmPmOfDay", $I$(1).HALF_DAYS, $I$(1).DAYS, $I$(2).of$J$J(0, 1), "dayperiod"]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange$S, "DAY_OF_WEEK", 15, ["DayOfWeek", $I$(1).DAYS, $I$(1).WEEKS, $I$(2).of$J$J(1, 7), "weekday"]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "ALIGNED_DAY_OF_WEEK_IN_MONTH", 16, ["AlignedDayOfWeekInMonth", $I$(1).DAYS, $I$(1).WEEKS, $I$(2).of$J$J(1, 7)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "ALIGNED_DAY_OF_WEEK_IN_YEAR", 17, ["AlignedDayOfWeekInYear", $I$(1).DAYS, $I$(1).WEEKS, $I$(2).of$J$J(1, 7)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange$S, "DAY_OF_MONTH", 18, ["DayOfMonth", $I$(1).DAYS, $I$(1).MONTHS, $I$(2).of$J$J$J(1, 28, 31), "day"]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "DAY_OF_YEAR", 19, ["DayOfYear", $I$(1).DAYS, $I$(1).YEARS, $I$(2).of$J$J$J(1, 365, 366)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "EPOCH_DAY", 20, ["EpochDay", $I$(1).DAYS, $I$(1).FOREVER, $I$(2).of$J$J(-365249999634, 365249999634)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "ALIGNED_WEEK_OF_MONTH", 21, ["AlignedWeekOfMonth", $I$(1).WEEKS, $I$(1).MONTHS, $I$(2).of$J$J$J(1, 4, 5)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "ALIGNED_WEEK_OF_YEAR", 22, ["AlignedWeekOfYear", $I$(1).WEEKS, $I$(1).YEARS, $I$(2).of$J$J(1, 53)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange$S, "MONTH_OF_YEAR", 23, ["MonthOfYear", $I$(1).MONTHS, $I$(1).YEARS, $I$(2).of$J$J(1, 12), "month"]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "PROLEPTIC_MONTH", 24, ["ProlepticMonth", $I$(1).MONTHS, $I$(1).FOREVER, $I$(2).of$J$J(-11999999988, 11999999999)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "YEAR_OF_ERA", 25, ["YearOfEra", $I$(1).YEARS, $I$(1).FOREVER, $I$(2).of$J$J$J(1, 999999999, 1000000000)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange$S, "YEAR", 26, ["Year", $I$(1).YEARS, $I$(1).FOREVER, $I$(2).of$J$J(-999999999, 999999999), "year"]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange$S, "ERA", 27, ["Era", $I$(1).ERAS, $I$(1).FOREVER, $I$(2).of$J$J(0, 1), "era"]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "INSTANT_SECONDS", 28, ["InstantSeconds", $I$(1).SECONDS, $I$(1).FOREVER, $I$(2).of$J$J(-9223372036854775808, 9223372036854775807)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange, "OFFSET_SECONDS", 29, ["OffsetSeconds", $I$(1).SECONDS, $I$(1).FOREVER, $I$(2).of$J$J(-64800, 64800)]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
