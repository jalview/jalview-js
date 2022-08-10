(function(){var P$=Clazz.newPackage("java.time.temporal"),I$=[[0,'java.time.temporal.ChronoUnit','java.time.temporal.IsoFields','java.time.temporal.ValueRange','java.time.temporal.ChronoField',['java.time.temporal.IsoFields','.Field'],'java.time.chrono.IsoChronology','java.time.format.ResolverStyle','java.time.LocalDate','java.util.Objects','sun.util.locale.provider.LocaleProviderAdapter','java.time.chrono.Chronology','java.time.DayOfWeek','java.time.Duration',['java.time.temporal.IsoFields','.Unit'],'AssertionError']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IsoFields", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Field',1034],['Unit',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['DAY_OF_QUARTER','java.time.temporal.TemporalField','+QUARTER_OF_YEAR','+WEEK_OF_WEEK_BASED_YEAR','+WEEK_BASED_YEAR','WEEK_BASED_YEARS','java.time.temporal.TemporalUnit','+QUARTER_YEARS']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
throw Clazz.new_($I$(15,1).c$$O,["Not instantiable"]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.DAY_OF_QUARTER=$I$(5).DAY_OF_QUARTER;
C$.QUARTER_OF_YEAR=$I$(5).QUARTER_OF_YEAR;
C$.WEEK_OF_WEEK_BASED_YEAR=$I$(5).WEEK_OF_WEEK_BASED_YEAR;
C$.WEEK_BASED_YEAR=$I$(5).WEEK_BASED_YEAR;
C$.WEEK_BASED_YEARS=$I$(14).WEEK_BASED_YEARS;
C$.QUARTER_YEARS=$I$(14).QUARTER_YEARS;
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.IsoFields, "Field", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum', 'java.time.temporal.TemporalField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['QUARTER_DAYS','int[]']]]

Clazz.newMeth(C$, 'isDateBased$', function () {
return true;
});

Clazz.newMeth(C$, 'isTimeBased$', function () {
return false;
});

Clazz.newMeth(C$, 'rangeRefinedBy$java_time_temporal_TemporalAccessor', function (temporal) {
return this.range$();
});

Clazz.newMeth(C$, 'isIso$java_time_temporal_TemporalAccessor', function (temporal) {
return $I$(11).from$java_time_temporal_TemporalAccessor(temporal).equals$O($I$(6).INSTANCE);
}, 1);

Clazz.newMeth(C$, 'ensureIso$java_time_temporal_TemporalAccessor', function (temporal) {
if (C$.isIso$java_time_temporal_TemporalAccessor(temporal) == false ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Resolve requires IsoChronology"]);
}}, 1);

Clazz.newMeth(C$, 'getWeekRange$java_time_LocalDate', function (date) {
var wby=C$.getWeekBasedYear$java_time_LocalDate(date);
return $I$(3,"of$J$J",[1, C$.getWeekRange$I(wby)]);
}, 1);

Clazz.newMeth(C$, 'getWeekRange$I', function (wby) {
var date=$I$(8).of$I$I$I(wby, 1, 1);
if (date.getDayOfWeek$() === $I$(12).THURSDAY  || (date.getDayOfWeek$() === $I$(12).WEDNESDAY  && date.isLeapYear$() ) ) {
return 53;
}return 52;
}, 1);

Clazz.newMeth(C$, 'getWeek$java_time_LocalDate', function (date) {
var dow0=date.getDayOfWeek$().ordinal$();
var doy0=date.getDayOfYear$() - 1;
var doyThu0=doy0 + (3 - dow0);
var alignedWeek=(doyThu0/7|0);
var firstThuDoy0=doyThu0 - (alignedWeek * 7);
var firstMonDoy0=firstThuDoy0 - 3;
if (firstMonDoy0 < -3) {
firstMonDoy0+=7;
}if (doy0 < firstMonDoy0) {
return (C$.getWeekRange$java_time_LocalDate(date.withDayOfYear$I(180).minusYears$J(1)).getMaximum$()|0);
}var week=(((doy0 - firstMonDoy0)/7|0)) + 1;
if (week == 53) {
if ((firstMonDoy0 == -3 || (firstMonDoy0 == -2 && date.isLeapYear$() ) ) == false ) {
week=1;
}}return week;
}, 1);

Clazz.newMeth(C$, 'getWeekBasedYear$java_time_LocalDate', function (date) {
var year=date.getYear$();
var doy=date.getDayOfYear$();
if (doy <= 3) {
var dow=date.getDayOfWeek$().ordinal$();
if (doy - dow < -2) {
year--;
}} else if (doy >= 363) {
var dow=date.getDayOfWeek$().ordinal$();
doy=doy - 363 - (date.isLeapYear$() ? 1 : 0) ;
if (doy - dow >= 0) {
year++;
}}return year;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
(P$.IsoFields$Field$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IsoFields$Field$1", null, Clazz.load(['java.time.temporal.IsoFields','.Field']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getBaseUnit$', function () {
return $I$(1).DAYS;
});

Clazz.newMeth(C$, 'getRangeUnit$', function () {
return $I$(2).QUARTER_YEARS;
});

Clazz.newMeth(C$, 'range$', function () {
return $I$(3).of$J$J$J(1, 90, 92);
});

Clazz.newMeth(C$, 'isSupportedBy$java_time_temporal_TemporalAccessor', function (temporal) {
return temporal.isSupported$java_time_temporal_TemporalField($I$(4).DAY_OF_YEAR) && temporal.isSupported$java_time_temporal_TemporalField($I$(4).MONTH_OF_YEAR) && temporal.isSupported$java_time_temporal_TemporalField($I$(4).YEAR) && $I$(5).isIso$java_time_temporal_TemporalAccessor(temporal)  ;
});

Clazz.newMeth(C$, 'rangeRefinedBy$java_time_temporal_TemporalAccessor', function (temporal) {
if (this.isSupportedBy$java_time_temporal_TemporalAccessor(temporal) == false ) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: DayOfQuarter"]);
}var qoy=temporal.getLong$java_time_temporal_TemporalField($I$(5).QUARTER_OF_YEAR);
if (qoy == 1) {
var year=temporal.getLong$java_time_temporal_TemporalField($I$(4).YEAR);
return ($I$(6).INSTANCE.isLeapYear$J(year) ? $I$(3).of$J$J(1, 91) : $I$(3).of$J$J(1, 90));
} else if (qoy == 2) {
return $I$(3).of$J$J(1, 91);
} else if (qoy == 3 || qoy == 4 ) {
return $I$(3).of$J$J(1, 92);
}return this.range$();
});

Clazz.newMeth(C$, 'getFrom$java_time_temporal_TemporalAccessor', function (temporal) {
if (this.isSupportedBy$java_time_temporal_TemporalAccessor(temporal) == false ) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: DayOfQuarter"]);
}var doy=temporal.get$java_time_temporal_TemporalField($I$(4).DAY_OF_YEAR);
var moy=temporal.get$java_time_temporal_TemporalField($I$(4).MONTH_OF_YEAR);
var year=temporal.getLong$java_time_temporal_TemporalField($I$(4).YEAR);
return doy - $I$(5).QUARTER_DAYS[(((moy - 1)/3|0)) + ($I$(6).INSTANCE.isLeapYear$J(year) ? 4 : 0)];
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal$J', function (temporal, newValue) {
var curValue=this.getFrom$java_time_temporal_TemporalAccessor(temporal);
this.range$().checkValidValue$J$java_time_temporal_TemporalField(newValue, this);
return temporal.with$java_time_temporal_TemporalField$J($I$(4).DAY_OF_YEAR, temporal.getLong$java_time_temporal_TemporalField($I$(4).DAY_OF_YEAR) + (newValue - curValue));
});

Clazz.newMeth(C$, 'resolve$java_util_Map$java_time_temporal_TemporalAccessor$java_time_format_ResolverStyle', function (fieldValues, partialTemporal, resolverStyle) {
var yearLong=fieldValues.get$O($I$(4).YEAR);
var qoyLong=fieldValues.get$O($I$(5).QUARTER_OF_YEAR);
if (yearLong == null  || qoyLong == null  ) {
return null;
}var y=$I$(4).YEAR.checkValidIntValue$J((yearLong).valueOf());
var doq=(fieldValues.get$O($I$(5).DAY_OF_QUARTER)).valueOf();
$I$(5).ensureIso$java_time_temporal_TemporalAccessor(partialTemporal);
var date;
if (resolverStyle === $I$(7).LENIENT ) {
date=$I$(8).of$I$I$I(y, 1, 1).plusMonths$J(Math.multiplyExact(Math.subtractExact((qoyLong).valueOf(), 1), 3));
doq=Math.subtractExact(doq, 1);
} else {
var qoy=$I$(5).QUARTER_OF_YEAR.range$().checkValidIntValue$J$java_time_temporal_TemporalField((qoyLong).valueOf(), $I$(5).QUARTER_OF_YEAR);
date=$I$(8,"of$I$I$I",[y, ((qoy - 1) * 3) + 1, 1]);
if (doq < 1 || doq > 90 ) {
if (resolverStyle === $I$(7).STRICT ) {
this.rangeRefinedBy$java_time_temporal_TemporalAccessor(date).checkValidValue$J$java_time_temporal_TemporalField(doq, this);
} else {
this.range$().checkValidValue$J$java_time_temporal_TemporalField(doq, this);
}}doq--;
}fieldValues.remove$O(this);
fieldValues.remove$O($I$(4).YEAR);
fieldValues.remove$O($I$(5).QUARTER_OF_YEAR);
return date.plusDays$J(doq);
});

Clazz.newMeth(C$, 'toString', function () {
return "DayOfQuarter";
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "DAY_OF_QUARTER", 0, [], java.time.temporal.IsoFields$Field$1);
(P$.IsoFields$Field$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "IsoFields$Field$2", null, Clazz.load(['java.time.temporal.IsoFields','.Field']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getBaseUnit$', function () {
return $I$(2).QUARTER_YEARS;
});

Clazz.newMeth(C$, 'getRangeUnit$', function () {
return $I$(1).YEARS;
});

Clazz.newMeth(C$, 'range$', function () {
return $I$(3).of$J$J(1, 4);
});

Clazz.newMeth(C$, 'isSupportedBy$java_time_temporal_TemporalAccessor', function (temporal) {
return temporal.isSupported$java_time_temporal_TemporalField($I$(4).MONTH_OF_YEAR) && $I$(5).isIso$java_time_temporal_TemporalAccessor(temporal) ;
});

Clazz.newMeth(C$, 'getFrom$java_time_temporal_TemporalAccessor', function (temporal) {
if (this.isSupportedBy$java_time_temporal_TemporalAccessor(temporal) == false ) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: QuarterOfYear"]);
}var moy=temporal.getLong$java_time_temporal_TemporalField($I$(4).MONTH_OF_YEAR);
return (Clazz.toLong((moy + 2)/3));
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal$J', function (temporal, newValue) {
var curValue=this.getFrom$java_time_temporal_TemporalAccessor(temporal);
this.range$().checkValidValue$J$java_time_temporal_TemporalField(newValue, this);
return temporal.with$java_time_temporal_TemporalField$J($I$(4).MONTH_OF_YEAR, temporal.getLong$java_time_temporal_TemporalField($I$(4).MONTH_OF_YEAR) + (newValue - curValue) * 3);
});

Clazz.newMeth(C$, 'toString', function () {
return "QuarterOfYear";
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "QUARTER_OF_YEAR", 1, [], java.time.temporal.IsoFields$Field$2);
(P$.IsoFields$Field$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "IsoFields$Field$3", null, Clazz.load(['java.time.temporal.IsoFields','.Field']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDisplayName$java_util_Locale', function (locale) {
$I$(9).requireNonNull$O$S(locale, "locale");
var lr=$I$(10).getResourceBundleBased$().getLocaleResources$java_util_Locale(locale);
var rb=lr.getJavaTimeFormatData$();
return rb.containsKey$S("field.week") ? rb.getString$S("field.week") : this.toString();
});

Clazz.newMeth(C$, 'getBaseUnit$', function () {
return $I$(1).WEEKS;
});

Clazz.newMeth(C$, 'getRangeUnit$', function () {
return $I$(2).WEEK_BASED_YEARS;
});

Clazz.newMeth(C$, 'range$', function () {
return $I$(3).of$J$J$J(1, 52, 53);
});

Clazz.newMeth(C$, 'isSupportedBy$java_time_temporal_TemporalAccessor', function (temporal) {
return temporal.isSupported$java_time_temporal_TemporalField($I$(4).EPOCH_DAY) && $I$(5).isIso$java_time_temporal_TemporalAccessor(temporal) ;
});

Clazz.newMeth(C$, 'rangeRefinedBy$java_time_temporal_TemporalAccessor', function (temporal) {
if (this.isSupportedBy$java_time_temporal_TemporalAccessor(temporal) == false ) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: WeekOfWeekBasedYear"]);
}return $I$(5,"getWeekRange$java_time_LocalDate",[$I$(8).from$java_time_temporal_TemporalAccessor(temporal)]);
});

Clazz.newMeth(C$, 'getFrom$java_time_temporal_TemporalAccessor', function (temporal) {
if (this.isSupportedBy$java_time_temporal_TemporalAccessor(temporal) == false ) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: WeekOfWeekBasedYear"]);
}return $I$(5,"getWeek$java_time_LocalDate",[$I$(8).from$java_time_temporal_TemporalAccessor(temporal)]);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal$J', function (temporal, newValue) {
this.range$().checkValidValue$J$java_time_temporal_TemporalField(newValue, this);
return temporal.plus$J$java_time_temporal_TemporalUnit(Math.subtractExact(newValue, this.getFrom$java_time_temporal_TemporalAccessor(temporal)), $I$(1).WEEKS);
});

Clazz.newMeth(C$, 'resolve$java_util_Map$java_time_temporal_TemporalAccessor$java_time_format_ResolverStyle', function (fieldValues, partialTemporal, resolverStyle) {
var wbyLong=fieldValues.get$O($I$(5).WEEK_BASED_YEAR);
var dowLong=fieldValues.get$O($I$(4).DAY_OF_WEEK);
if (wbyLong == null  || dowLong == null  ) {
return null;
}var wby=$I$(5).WEEK_BASED_YEAR.range$().checkValidIntValue$J$java_time_temporal_TemporalField((wbyLong).valueOf(), $I$(5).WEEK_BASED_YEAR);
var wowby=(fieldValues.get$O($I$(5).WEEK_OF_WEEK_BASED_YEAR)).valueOf();
$I$(5).ensureIso$java_time_temporal_TemporalAccessor(partialTemporal);
var date=$I$(8).of$I$I$I(wby, 1, 4);
if (resolverStyle === $I$(7).LENIENT ) {
var dow=(dowLong).valueOf();
if (dow > 7) {
date=date.plusWeeks$J(Clazz.toLong((dow - 1)/7));
dow=((dow - 1) % 7) + 1;
} else if (dow < 1) {
date=date.plusWeeks$J(Clazz.toLong(Math.subtractExact(dow, 7)/7));
dow=((dow + 6) % 7) + 1;
}date=date.plusWeeks$J(Math.subtractExact(wowby, 1)).with$java_time_temporal_TemporalField$J($I$(4).DAY_OF_WEEK, dow);
} else {
var dow=$I$(4).DAY_OF_WEEK.checkValidIntValue$J((dowLong).valueOf());
if (wowby < 1 || wowby > 52 ) {
if (resolverStyle === $I$(7).STRICT ) {
$I$(5).getWeekRange$java_time_LocalDate(date).checkValidValue$J$java_time_temporal_TemporalField(wowby, this);
} else {
this.range$().checkValidValue$J$java_time_temporal_TemporalField(wowby, this);
}}date=date.plusWeeks$J(wowby - 1).with$java_time_temporal_TemporalField$J($I$(4).DAY_OF_WEEK, dow);
}fieldValues.remove$O(this);
fieldValues.remove$O($I$(5).WEEK_BASED_YEAR);
fieldValues.remove$O($I$(4).DAY_OF_WEEK);
return date;
});

Clazz.newMeth(C$, 'toString', function () {
return "WeekOfWeekBasedYear";
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "WEEK_OF_WEEK_BASED_YEAR", 2, [], java.time.temporal.IsoFields$Field$3);
(P$.IsoFields$Field$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "IsoFields$Field$4", null, Clazz.load(['java.time.temporal.IsoFields','.Field']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getBaseUnit$', function () {
return $I$(2).WEEK_BASED_YEARS;
});

Clazz.newMeth(C$, 'getRangeUnit$', function () {
return $I$(1).FOREVER;
});

Clazz.newMeth(C$, 'range$', function () {
return $I$(4).YEAR.range$();
});

Clazz.newMeth(C$, 'isSupportedBy$java_time_temporal_TemporalAccessor', function (temporal) {
return temporal.isSupported$java_time_temporal_TemporalField($I$(4).EPOCH_DAY) && $I$(5).isIso$java_time_temporal_TemporalAccessor(temporal) ;
});

Clazz.newMeth(C$, 'getFrom$java_time_temporal_TemporalAccessor', function (temporal) {
if (this.isSupportedBy$java_time_temporal_TemporalAccessor(temporal) == false ) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: WeekBasedYear"]);
}return $I$(5,"getWeekBasedYear$java_time_LocalDate",[$I$(8).from$java_time_temporal_TemporalAccessor(temporal)]);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal$J', function (temporal, newValue) {
if (this.isSupportedBy$java_time_temporal_TemporalAccessor(temporal) == false ) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: WeekBasedYear"]);
}var newWby=this.range$().checkValidIntValue$J$java_time_temporal_TemporalField(newValue, $I$(5).WEEK_BASED_YEAR);
var date=$I$(8).from$java_time_temporal_TemporalAccessor(temporal);
var dow=date.get$java_time_temporal_TemporalField($I$(4).DAY_OF_WEEK);
var week=$I$(5).getWeek$java_time_LocalDate(date);
if (week == 53 && $I$(5).getWeekRange$I(newWby) == 52 ) {
week=52;
}var resolved=$I$(8).of$I$I$I(newWby, 1, 4);
var days=(dow - resolved.get$java_time_temporal_TemporalField($I$(4).DAY_OF_WEEK)) + ((week - 1) * 7);
resolved=resolved.plusDays$J(days);
return temporal.with$java_time_temporal_TemporalAdjuster(resolved);
});

Clazz.newMeth(C$, 'toString', function () {
return "WeekBasedYear";
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "WEEK_BASED_YEAR", 3, [], java.time.temporal.IsoFields$Field$4);
C$.QUARTER_DAYS=Clazz.array(Integer.TYPE, -1, [0, 90, 181, 273, 0, 91, 182, 274]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.IsoFields, "Unit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum', 'java.time.temporal.TemporalUnit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['$name'],'O',['duration','java.time.Duration']]]

Clazz.newMeth(C$, 'c$$S$java_time_Duration', function (name, estimatedDuration) {
;C$.$init$.apply(this);
this.$name=name;
this.duration=estimatedDuration;
}, 1);

Clazz.newMeth(C$, 'getDuration$', function () {
return this.duration;
});

Clazz.newMeth(C$, 'isDurationEstimated$', function () {
return true;
});

Clazz.newMeth(C$, 'isDateBased$', function () {
return true;
});

Clazz.newMeth(C$, 'isTimeBased$', function () {
return false;
});

Clazz.newMeth(C$, 'isSupportedBy$java_time_temporal_Temporal', function (temporal) {
return temporal.isSupported$java_time_temporal_TemporalField($I$(4).EPOCH_DAY);
});

Clazz.newMeth(C$, 'addTo$java_time_temporal_Temporal$J', function (temporal, amount) {
switch (this) {
case C$.WEEK_BASED_YEARS:
return temporal.with$java_time_temporal_TemporalField$J($I$(2).WEEK_BASED_YEAR, Math.addExact(temporal.get$java_time_temporal_TemporalField($I$(2).WEEK_BASED_YEAR), amount));
case C$.QUARTER_YEARS:
return temporal.plus$J$java_time_temporal_TemporalUnit(Clazz.toLong(amount/256), $I$(1).YEARS).plus$J$java_time_temporal_TemporalUnit((amount % 256) * 3, $I$(1).MONTHS);
default:
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Unreachable"]);
}
});

Clazz.newMeth(C$, 'between$java_time_temporal_Temporal$java_time_temporal_Temporal', function (temporal1Inclusive, temporal2Exclusive) {
if (temporal1Inclusive.getClass$() !== temporal2Exclusive.getClass$() ) {
return temporal1Inclusive.until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit(temporal2Exclusive, this);
}switch (this) {
case C$.WEEK_BASED_YEARS:
return Math.subtractExact(temporal2Exclusive.getLong$java_time_temporal_TemporalField($I$(2).WEEK_BASED_YEAR), temporal1Inclusive.getLong$java_time_temporal_TemporalField($I$(2).WEEK_BASED_YEAR));
case C$.QUARTER_YEARS:
return Clazz.toLong(temporal1Inclusive.until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit(temporal2Exclusive, $I$(1).MONTHS)/3);
default:
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Unreachable"]);
}
});

Clazz.newMeth(C$, 'toString', function () {
return this.$name;
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "WEEK_BASED_YEARS", 0, ["WeekBasedYears", $I$(13).ofSeconds$J(31556952)]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_Duration, "QUARTER_YEARS", 1, ["QuarterYears", $I$(13).ofSeconds$J(7889238)]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
