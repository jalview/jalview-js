(function(){var P$=Clazz.newPackage("java.time.temporal"),p$1={},p$2={},I$=[[0,'java.time.temporal.ValueRange','java.time.temporal.ChronoUnit','java.time.temporal.IsoFields','java.time.temporal.ChronoField','java.time.temporal.WeekFields','java.time.chrono.Chronology','java.time.format.ResolverStyle','java.util.Objects','sun.util.locale.provider.LocaleProviderAdapter','java.util.concurrent.ConcurrentHashMap','java.time.DayOfWeek',['java.time.temporal.WeekFields','.ComputedDayOfField'],'java.util.Locale','sun.util.locale.provider.CalendarDataUtility']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WeekFields", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['ComputedDayOfField',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dayOfWeek=$I$(12).ofDayOfWeekField$java_time_temporal_WeekFields(this);
this.weekOfMonth=$I$(12).ofWeekOfMonthField$java_time_temporal_WeekFields(this);
this.weekOfYear=$I$(12).ofWeekOfYearField$java_time_temporal_WeekFields(this);
this.weekOfWeekBasedYear=$I$(12).ofWeekOfWeekBasedYearField$java_time_temporal_WeekFields(this);
this.weekBasedYear=$I$(12).ofWeekBasedYearField$java_time_temporal_WeekFields(this);
},1);

C$.$fields$=[['I',['minimalDays'],'O',['firstDayOfWeek','java.time.DayOfWeek','dayOfWeek','java.time.temporal.TemporalField','+weekOfMonth','+weekOfYear','+weekOfWeekBasedYear','+weekBasedYear']]
,['O',['CACHE','java.util.concurrent.ConcurrentMap','ISO','java.time.temporal.WeekFields','+SUNDAY_START','WEEK_BASED_YEARS','java.time.temporal.TemporalUnit']]]

Clazz.newMeth(C$, 'of$java_util_Locale', function (locale) {
$I$(8).requireNonNull$O$S(locale, "locale");
locale=Clazz.new_([locale.getLanguage$(), locale.getCountry$()],$I$(13,1).c$$S$S);
var calDow=$I$(14).retrieveFirstDayOfWeek$java_util_Locale(locale);
var dow=$I$(11).SUNDAY.plus$J(calDow - 1);
var minDays=$I$(14).retrieveMinimalDaysInFirstWeek$java_util_Locale(locale);
return C$.of$java_time_DayOfWeek$I(dow, minDays);
}, 1);

Clazz.newMeth(C$, 'of$java_time_DayOfWeek$I', function (firstDayOfWeek, minimalDaysInFirstWeek) {
var key=firstDayOfWeek.toString() + minimalDaysInFirstWeek;
var rules=C$.CACHE.get$O(key);
if (rules == null ) {
rules=Clazz.new_(C$.c$$java_time_DayOfWeek$I,[firstDayOfWeek, minimalDaysInFirstWeek]);
C$.CACHE.putIfAbsent$O$O(key, rules);
rules=C$.CACHE.get$O(key);
}return rules;
}, 1);

Clazz.newMeth(C$, 'c$$java_time_DayOfWeek$I', function (firstDayOfWeek, minimalDaysInFirstWeek) {
;C$.$init$.apply(this);
$I$(8).requireNonNull$O$S(firstDayOfWeek, "firstDayOfWeek");
if (minimalDaysInFirstWeek < 1 || minimalDaysInFirstWeek > 7 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Minimal number of days is invalid"]);
}this.firstDayOfWeek=firstDayOfWeek;
this.minimalDays=minimalDaysInFirstWeek;
}, 1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
s.defaultReadObject$();
if (this.firstDayOfWeek == null ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["firstDayOfWeek is null"]);
}if (this.minimalDays < 1 || this.minimalDays > 7 ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Minimal number of days is invalid"]);
}}, p$2);

Clazz.newMeth(C$, 'readResolve', function () {
try {
return C$.of$java_time_DayOfWeek$I(this.firstDayOfWeek, this.minimalDays);
} catch (iae) {
if (Clazz.exceptionOf(iae,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Invalid serialized WeekFields: " + iae.getMessage$()]);
} else {
throw iae;
}
}
}, p$2);

Clazz.newMeth(C$, 'getFirstDayOfWeek$', function () {
return this.firstDayOfWeek;
});

Clazz.newMeth(C$, 'getMinimalDaysInFirstWeek$', function () {
return this.minimalDays;
});

Clazz.newMeth(C$, 'dayOfWeek$', function () {
return this.dayOfWeek;
});

Clazz.newMeth(C$, 'weekOfMonth$', function () {
return this.weekOfMonth;
});

Clazz.newMeth(C$, 'weekOfYear$', function () {
return this.weekOfYear;
});

Clazz.newMeth(C$, 'weekOfWeekBasedYear$', function () {
return this.weekOfWeekBasedYear;
});

Clazz.newMeth(C$, 'weekBasedYear$', function () {
return this.weekBasedYear;
});

Clazz.newMeth(C$, 'equals$O', function (object) {
if (this === object ) {
return true;
}if (Clazz.instanceOf(object, "java.time.temporal.WeekFields")) {
return this.hashCode$() == object.hashCode$();
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.firstDayOfWeek.ordinal$() * 7 + this.minimalDays;
});

Clazz.newMeth(C$, 'toString', function () {
return "WeekFields[" + this.firstDayOfWeek + ',' + this.minimalDays + ']' ;
});

C$.$static$=function(){C$.$static$=0;
C$.CACHE=Clazz.new_($I$(10,1).c$$I$F$I,[4, 0.75, 2]);
C$.ISO=Clazz.new_(C$.c$$java_time_DayOfWeek$I,[$I$(11).MONDAY, 4]);
C$.SUNDAY_START=C$.of$java_time_DayOfWeek$I($I$(11).SUNDAY, 1);
C$.WEEK_BASED_YEARS=$I$(3).WEEK_BASED_YEARS;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.WeekFields, "ComputedDayOfField", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.time.temporal.TemporalField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name'],'O',['weekDef','java.time.temporal.WeekFields','baseUnit','java.time.temporal.TemporalUnit','+rangeUnit','range','java.time.temporal.ValueRange']]
,['O',['DAY_OF_WEEK_RANGE','java.time.temporal.ValueRange','+WEEK_OF_MONTH_RANGE','+WEEK_OF_YEAR_RANGE','+WEEK_OF_WEEK_BASED_YEAR_RANGE']]]

Clazz.newMeth(C$, 'ofDayOfWeekField$java_time_temporal_WeekFields', function (weekDef) {
return Clazz.new_(C$.c$$S$java_time_temporal_WeekFields$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange,["DayOfWeek", weekDef, $I$(2).DAYS, $I$(2).WEEKS, C$.DAY_OF_WEEK_RANGE]);
}, 1);

Clazz.newMeth(C$, 'ofWeekOfMonthField$java_time_temporal_WeekFields', function (weekDef) {
return Clazz.new_(C$.c$$S$java_time_temporal_WeekFields$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange,["WeekOfMonth", weekDef, $I$(2).WEEKS, $I$(2).MONTHS, C$.WEEK_OF_MONTH_RANGE]);
}, 1);

Clazz.newMeth(C$, 'ofWeekOfYearField$java_time_temporal_WeekFields', function (weekDef) {
return Clazz.new_(C$.c$$S$java_time_temporal_WeekFields$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange,["WeekOfYear", weekDef, $I$(2).WEEKS, $I$(2).YEARS, C$.WEEK_OF_YEAR_RANGE]);
}, 1);

Clazz.newMeth(C$, 'ofWeekOfWeekBasedYearField$java_time_temporal_WeekFields', function (weekDef) {
return Clazz.new_(C$.c$$S$java_time_temporal_WeekFields$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange,["WeekOfWeekBasedYear", weekDef, $I$(2).WEEKS, $I$(3).WEEK_BASED_YEARS, C$.WEEK_OF_WEEK_BASED_YEAR_RANGE]);
}, 1);

Clazz.newMeth(C$, 'ofWeekBasedYearField$java_time_temporal_WeekFields', function (weekDef) {
return Clazz.new_(C$.c$$S$java_time_temporal_WeekFields$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange,["WeekBasedYear", weekDef, $I$(3).WEEK_BASED_YEARS, $I$(2).FOREVER, $I$(4).YEAR.range$()]);
}, 1);

Clazz.newMeth(C$, 'ofWeekBasedYear$java_time_chrono_Chronology$I$I$I', function (chrono, yowby, wowby, dow) {
var date=chrono.date$I$I$I(yowby, 1, 1);
var ldow=p$1.localizedDayOfWeek$java_time_temporal_TemporalAccessor.apply(this, [date]);
var offset=p$1.startOfWeekOffset$I$I.apply(this, [1, ldow]);
var yearLen=date.lengthOfYear$();
var newYearWeek=p$1.computeWeek$I$I.apply(this, [offset, yearLen + this.weekDef.getMinimalDaysInFirstWeek$()]);
wowby=Math.min(wowby, newYearWeek - 1);
var days=-offset + (dow - 1) + (wowby - 1) * 7 ;
return date.plus$J$java_time_temporal_TemporalUnit(days, $I$(2).DAYS);
}, p$1);

Clazz.newMeth(C$, 'c$$S$java_time_temporal_WeekFields$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$java_time_temporal_ValueRange', function (name, weekDef, baseUnit, rangeUnit, range) {
;C$.$init$.apply(this);
this.name=name;
this.weekDef=weekDef;
this.baseUnit=baseUnit;
this.rangeUnit=rangeUnit;
this.range=range;
}, 1);

Clazz.newMeth(C$, 'getFrom$java_time_temporal_TemporalAccessor', function (temporal) {
if (this.rangeUnit === $I$(2).WEEKS ) {
return p$1.localizedDayOfWeek$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
} else if (this.rangeUnit === $I$(2).MONTHS ) {
return p$1.localizedWeekOfMonth$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
} else if (this.rangeUnit === $I$(2).YEARS ) {
return p$1.localizedWeekOfYear$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
} else if (this.rangeUnit === $I$(5).WEEK_BASED_YEARS ) {
return p$1.localizedWeekOfWeekBasedYear$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
} else if (this.rangeUnit === $I$(2).FOREVER ) {
return p$1.localizedWeekBasedYear$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
} else {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["unreachable, rangeUnit: " + this.rangeUnit + ", this: " + this ]);
}});

Clazz.newMeth(C$, 'localizedDayOfWeek$java_time_temporal_TemporalAccessor', function (temporal) {
var sow=this.weekDef.getFirstDayOfWeek$().getValue$();
var isoDow=temporal.get$java_time_temporal_TemporalField($I$(4).DAY_OF_WEEK);
return Math.floorMod(isoDow - sow, 7) + 1;
}, p$1);

Clazz.newMeth(C$, 'localizedDayOfWeek$I', function (isoDow) {
var sow=this.weekDef.getFirstDayOfWeek$().getValue$();
return Math.floorMod(isoDow - sow, 7) + 1;
}, p$1);

Clazz.newMeth(C$, 'localizedWeekOfMonth$java_time_temporal_TemporalAccessor', function (temporal) {
var dow=p$1.localizedDayOfWeek$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
var dom=temporal.get$java_time_temporal_TemporalField($I$(4).DAY_OF_MONTH);
var offset=p$1.startOfWeekOffset$I$I.apply(this, [dom, dow]);
return p$1.computeWeek$I$I.apply(this, [offset, dom]);
}, p$1);

Clazz.newMeth(C$, 'localizedWeekOfYear$java_time_temporal_TemporalAccessor', function (temporal) {
var dow=p$1.localizedDayOfWeek$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
var doy=temporal.get$java_time_temporal_TemporalField($I$(4).DAY_OF_YEAR);
var offset=p$1.startOfWeekOffset$I$I.apply(this, [doy, dow]);
return p$1.computeWeek$I$I.apply(this, [offset, doy]);
}, p$1);

Clazz.newMeth(C$, 'localizedWeekBasedYear$java_time_temporal_TemporalAccessor', function (temporal) {
var dow=p$1.localizedDayOfWeek$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
var year=temporal.get$java_time_temporal_TemporalField($I$(4).YEAR);
var doy=temporal.get$java_time_temporal_TemporalField($I$(4).DAY_OF_YEAR);
var offset=p$1.startOfWeekOffset$I$I.apply(this, [doy, dow]);
var week=p$1.computeWeek$I$I.apply(this, [offset, doy]);
if (week == 0) {
return year - 1;
} else {
var dayRange=temporal.range$java_time_temporal_TemporalField($I$(4).DAY_OF_YEAR);
var yearLen=(dayRange.getMaximum$()|0);
var newYearWeek=p$1.computeWeek$I$I.apply(this, [offset, yearLen + this.weekDef.getMinimalDaysInFirstWeek$()]);
if (week >= newYearWeek) {
return year + 1;
}}return year;
}, p$1);

Clazz.newMeth(C$, 'localizedWeekOfWeekBasedYear$java_time_temporal_TemporalAccessor', function (temporal) {
var dow=p$1.localizedDayOfWeek$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
var doy=temporal.get$java_time_temporal_TemporalField($I$(4).DAY_OF_YEAR);
var offset=p$1.startOfWeekOffset$I$I.apply(this, [doy, dow]);
var week=p$1.computeWeek$I$I.apply(this, [offset, doy]);
if (week == 0) {
var date=$I$(6).from$java_time_temporal_TemporalAccessor(temporal).date$java_time_temporal_TemporalAccessor(temporal);
date=date.minus$J$java_time_temporal_TemporalUnit(doy, $I$(2).DAYS);
return p$1.localizedWeekOfWeekBasedYear$java_time_temporal_TemporalAccessor.apply(this, [date]);
} else if (week > 50) {
var dayRange=temporal.range$java_time_temporal_TemporalField($I$(4).DAY_OF_YEAR);
var yearLen=(dayRange.getMaximum$()|0);
var newYearWeek=p$1.computeWeek$I$I.apply(this, [offset, yearLen + this.weekDef.getMinimalDaysInFirstWeek$()]);
if (week >= newYearWeek) {
week=week - newYearWeek + 1;
}}return week;
}, p$1);

Clazz.newMeth(C$, 'startOfWeekOffset$I$I', function (day, dow) {
var weekStart=Math.floorMod(day - dow, 7);
var offset=-weekStart;
if (weekStart + 1 > this.weekDef.getMinimalDaysInFirstWeek$()) {
offset=7 - weekStart;
}return offset;
}, p$1);

Clazz.newMeth(C$, 'computeWeek$I$I', function (offset, day) {
return (((7 + offset + (day - 1) )/7|0));
}, p$1);

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal$J', function (temporal, newValue) {
var newVal=this.range.checkValidIntValue$J$java_time_temporal_TemporalField(newValue, this);
var currentVal=temporal.get$java_time_temporal_TemporalField(this);
if (newVal == currentVal) {
return temporal;
}if (this.rangeUnit === $I$(2).FOREVER ) {
var idow=temporal.get$java_time_temporal_TemporalField(this.weekDef.dayOfWeek);
var wowby=temporal.get$java_time_temporal_TemporalField(this.weekDef.weekOfWeekBasedYear);
return p$1.ofWeekBasedYear$java_time_chrono_Chronology$I$I$I.apply(this, [$I$(6).from$java_time_temporal_TemporalAccessor(temporal), (newValue|0), wowby, idow]);
} else {
return temporal.plus$J$java_time_temporal_TemporalUnit(newVal - currentVal, this.baseUnit);
}});

Clazz.newMeth(C$, 'resolve$java_util_Map$java_time_temporal_TemporalAccessor$java_time_format_ResolverStyle', function (fieldValues, partialTemporal, resolverStyle) {
var value=(fieldValues.get$O(this)).valueOf();
var newValue=Math.toIntExact(value);
if (this.rangeUnit === $I$(2).WEEKS ) {
var checkedValue=this.range.checkValidIntValue$J$java_time_temporal_TemporalField(value, this);
var startDow=this.weekDef.getFirstDayOfWeek$().getValue$();
var isoDow=Math.floorMod((startDow - 1) + (checkedValue - 1), 7) + 1;
fieldValues.remove$O(this);
fieldValues.put$O$O($I$(4).DAY_OF_WEEK, Long.valueOf$J(isoDow));
return null;
}if (fieldValues.containsKey$O($I$(4).DAY_OF_WEEK) == false ) {
return null;
}var isoDow=$I$(4).DAY_OF_WEEK.checkValidIntValue$J((fieldValues.get$O($I$(4).DAY_OF_WEEK)).valueOf());
var dow=p$1.localizedDayOfWeek$I.apply(this, [isoDow]);
var chrono=$I$(6).from$java_time_temporal_TemporalAccessor(partialTemporal);
if (fieldValues.containsKey$O($I$(4).YEAR)) {
var year=$I$(4).YEAR.checkValidIntValue$J((fieldValues.get$O($I$(4).YEAR)).valueOf());
if (this.rangeUnit === $I$(2).MONTHS  && fieldValues.containsKey$O($I$(4).MONTH_OF_YEAR) ) {
var month=(fieldValues.get$O($I$(4).MONTH_OF_YEAR)).valueOf();
return p$1.resolveWoM$java_util_Map$java_time_chrono_Chronology$I$J$J$I$java_time_format_ResolverStyle.apply(this, [fieldValues, chrono, year, month, newValue, dow, resolverStyle]);
}if (this.rangeUnit === $I$(2).YEARS ) {
return p$1.resolveWoY$java_util_Map$java_time_chrono_Chronology$I$J$I$java_time_format_ResolverStyle.apply(this, [fieldValues, chrono, year, newValue, dow, resolverStyle]);
}} else if ((this.rangeUnit === $I$(5).WEEK_BASED_YEARS  || this.rangeUnit === $I$(2).FOREVER  ) && fieldValues.containsKey$O(this.weekDef.weekBasedYear) && fieldValues.containsKey$O(this.weekDef.weekOfWeekBasedYear)  ) {
return p$1.resolveWBY$java_util_Map$java_time_chrono_Chronology$I$java_time_format_ResolverStyle.apply(this, [fieldValues, chrono, dow, resolverStyle]);
}return null;
});

Clazz.newMeth(C$, 'resolveWoM$java_util_Map$java_time_chrono_Chronology$I$J$J$I$java_time_format_ResolverStyle', function (fieldValues, chrono, year, month, wom, localDow, resolverStyle) {
var date;
if (resolverStyle === $I$(7).LENIENT ) {
date=chrono.date$I$I$I(year, 1, 1).plus$J$java_time_temporal_TemporalUnit(Math.subtractExact(month, 1), $I$(2).MONTHS);
var weeks=Math.subtractExact(wom, p$1.localizedWeekOfMonth$java_time_temporal_TemporalAccessor.apply(this, [date]));
var days=localDow - p$1.localizedDayOfWeek$java_time_temporal_TemporalAccessor.apply(this, [date]);
date=date.plus$J$java_time_temporal_TemporalUnit(Math.addExact(Math.multiplyExact(weeks, 7), days), $I$(2).DAYS);
} else {
var monthValid=$I$(4).MONTH_OF_YEAR.checkValidIntValue$J(month);
date=chrono.date$I$I$I(year, monthValid, 1);
var womInt=this.range.checkValidIntValue$J$java_time_temporal_TemporalField(wom, this);
var weeks=((womInt - p$1.localizedWeekOfMonth$java_time_temporal_TemporalAccessor.apply(this, [date]))|0);
var days=localDow - p$1.localizedDayOfWeek$java_time_temporal_TemporalAccessor.apply(this, [date]);
date=date.plus$J$java_time_temporal_TemporalUnit(weeks * 7 + days, $I$(2).DAYS);
if (resolverStyle === $I$(7).STRICT  && date.getLong$java_time_temporal_TemporalField($I$(4).MONTH_OF_YEAR) != month ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Strict mode rejected resolved date as it is in a different month"]);
}}fieldValues.remove$O(this);
fieldValues.remove$O($I$(4).YEAR);
fieldValues.remove$O($I$(4).MONTH_OF_YEAR);
fieldValues.remove$O($I$(4).DAY_OF_WEEK);
return date;
}, p$1);

Clazz.newMeth(C$, 'resolveWoY$java_util_Map$java_time_chrono_Chronology$I$J$I$java_time_format_ResolverStyle', function (fieldValues, chrono, year, woy, localDow, resolverStyle) {
var date=chrono.date$I$I$I(year, 1, 1);
if (resolverStyle === $I$(7).LENIENT ) {
var weeks=Math.subtractExact(woy, p$1.localizedWeekOfYear$java_time_temporal_TemporalAccessor.apply(this, [date]));
var days=localDow - p$1.localizedDayOfWeek$java_time_temporal_TemporalAccessor.apply(this, [date]);
date=date.plus$J$java_time_temporal_TemporalUnit(Math.addExact(Math.multiplyExact(weeks, 7), days), $I$(2).DAYS);
} else {
var womInt=this.range.checkValidIntValue$J$java_time_temporal_TemporalField(woy, this);
var weeks=((womInt - p$1.localizedWeekOfYear$java_time_temporal_TemporalAccessor.apply(this, [date]))|0);
var days=localDow - p$1.localizedDayOfWeek$java_time_temporal_TemporalAccessor.apply(this, [date]);
date=date.plus$J$java_time_temporal_TemporalUnit(weeks * 7 + days, $I$(2).DAYS);
if (resolverStyle === $I$(7).STRICT  && date.getLong$java_time_temporal_TemporalField($I$(4).YEAR) != year ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Strict mode rejected resolved date as it is in a different year"]);
}}fieldValues.remove$O(this);
fieldValues.remove$O($I$(4).YEAR);
fieldValues.remove$O($I$(4).DAY_OF_WEEK);
return date;
}, p$1);

Clazz.newMeth(C$, 'resolveWBY$java_util_Map$java_time_chrono_Chronology$I$java_time_format_ResolverStyle', function (fieldValues, chrono, localDow, resolverStyle) {
var yowby=this.weekDef.weekBasedYear.range$().checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.get$O(this.weekDef.weekBasedYear)).valueOf(), this.weekDef.weekBasedYear);
var date;
if (resolverStyle === $I$(7).LENIENT ) {
date=p$1.ofWeekBasedYear$java_time_chrono_Chronology$I$I$I.apply(this, [chrono, yowby, 1, localDow]);
var wowby=(fieldValues.get$O(this.weekDef.weekOfWeekBasedYear)).valueOf();
var weeks=Math.subtractExact(wowby, 1);
date=date.plus$J$java_time_temporal_TemporalUnit(weeks, $I$(2).WEEKS);
} else {
var wowby=this.weekDef.weekOfWeekBasedYear.range$().checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.get$O(this.weekDef.weekOfWeekBasedYear)).valueOf(), this.weekDef.weekOfWeekBasedYear);
date=p$1.ofWeekBasedYear$java_time_chrono_Chronology$I$I$I.apply(this, [chrono, yowby, wowby, localDow]);
if (resolverStyle === $I$(7).STRICT  && p$1.localizedWeekBasedYear$java_time_temporal_TemporalAccessor.apply(this, [date]) != yowby ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Strict mode rejected resolved date as it is in a different week-based-year"]);
}}fieldValues.remove$O(this);
fieldValues.remove$O(this.weekDef.weekBasedYear);
fieldValues.remove$O(this.weekDef.weekOfWeekBasedYear);
fieldValues.remove$O($I$(4).DAY_OF_WEEK);
return date;
}, p$1);

Clazz.newMeth(C$, 'getDisplayName$java_util_Locale', function (locale) {
$I$(8).requireNonNull$O$S(locale, "locale");
if (this.rangeUnit === $I$(2).YEARS ) {
var lr=$I$(9).getResourceBundleBased$().getLocaleResources$java_util_Locale(locale);
var rb=lr.getJavaTimeFormatData$();
return rb.containsKey$S("field.week") ? rb.getString$S("field.week") : this.name;
}return this.name;
});

Clazz.newMeth(C$, 'getBaseUnit$', function () {
return this.baseUnit;
});

Clazz.newMeth(C$, 'getRangeUnit$', function () {
return this.rangeUnit;
});

Clazz.newMeth(C$, 'isDateBased$', function () {
return true;
});

Clazz.newMeth(C$, 'isTimeBased$', function () {
return false;
});

Clazz.newMeth(C$, 'range$', function () {
return this.range;
});

Clazz.newMeth(C$, 'isSupportedBy$java_time_temporal_TemporalAccessor', function (temporal) {
if (temporal.isSupported$java_time_temporal_TemporalField($I$(4).DAY_OF_WEEK)) {
if (this.rangeUnit === $I$(2).WEEKS ) {
return true;
} else if (this.rangeUnit === $I$(2).MONTHS ) {
return temporal.isSupported$java_time_temporal_TemporalField($I$(4).DAY_OF_MONTH);
} else if (this.rangeUnit === $I$(2).YEARS ) {
return temporal.isSupported$java_time_temporal_TemporalField($I$(4).DAY_OF_YEAR);
} else if (this.rangeUnit === $I$(5).WEEK_BASED_YEARS ) {
return temporal.isSupported$java_time_temporal_TemporalField($I$(4).DAY_OF_YEAR);
} else if (this.rangeUnit === $I$(2).FOREVER ) {
return temporal.isSupported$java_time_temporal_TemporalField($I$(4).YEAR);
}}return false;
});

Clazz.newMeth(C$, 'rangeRefinedBy$java_time_temporal_TemporalAccessor', function (temporal) {
if (this.rangeUnit === $I$(2).WEEKS ) {
return this.range;
} else if (this.rangeUnit === $I$(2).MONTHS ) {
return p$1.rangeByWeek$java_time_temporal_TemporalAccessor$java_time_temporal_TemporalField.apply(this, [temporal, $I$(4).DAY_OF_MONTH]);
} else if (this.rangeUnit === $I$(2).YEARS ) {
return p$1.rangeByWeek$java_time_temporal_TemporalAccessor$java_time_temporal_TemporalField.apply(this, [temporal, $I$(4).DAY_OF_YEAR]);
} else if (this.rangeUnit === $I$(5).WEEK_BASED_YEARS ) {
return p$1.rangeWeekOfWeekBasedYear$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
} else if (this.rangeUnit === $I$(2).FOREVER ) {
return $I$(4).YEAR.range$();
} else {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["unreachable, rangeUnit: " + this.rangeUnit + ", this: " + this ]);
}});

Clazz.newMeth(C$, 'rangeByWeek$java_time_temporal_TemporalAccessor$java_time_temporal_TemporalField', function (temporal, field) {
var dow=p$1.localizedDayOfWeek$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
var offset=p$1.startOfWeekOffset$I$I.apply(this, [temporal.get$java_time_temporal_TemporalField(field), dow]);
var fieldRange=temporal.range$java_time_temporal_TemporalField(field);
return $I$(1,"of$J$J",[p$1.computeWeek$I$I.apply(this, [offset, (fieldRange.getMinimum$()|0)]), p$1.computeWeek$I$I.apply(this, [offset, (fieldRange.getMaximum$()|0)])]);
}, p$1);

Clazz.newMeth(C$, 'rangeWeekOfWeekBasedYear$java_time_temporal_TemporalAccessor', function (temporal) {
if (!temporal.isSupported$java_time_temporal_TemporalField($I$(4).DAY_OF_YEAR)) {
return C$.WEEK_OF_YEAR_RANGE;
}var dow=p$1.localizedDayOfWeek$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
var doy=temporal.get$java_time_temporal_TemporalField($I$(4).DAY_OF_YEAR);
var offset=p$1.startOfWeekOffset$I$I.apply(this, [doy, dow]);
var week=p$1.computeWeek$I$I.apply(this, [offset, doy]);
if (week == 0) {
var date=$I$(6).from$java_time_temporal_TemporalAccessor(temporal).date$java_time_temporal_TemporalAccessor(temporal);
date=date.minus$J$java_time_temporal_TemporalUnit(doy + 7, $I$(2).DAYS);
return p$1.rangeWeekOfWeekBasedYear$java_time_temporal_TemporalAccessor.apply(this, [date]);
}var dayRange=temporal.range$java_time_temporal_TemporalField($I$(4).DAY_OF_YEAR);
var yearLen=(dayRange.getMaximum$()|0);
var newYearWeek=p$1.computeWeek$I$I.apply(this, [offset, yearLen + this.weekDef.getMinimalDaysInFirstWeek$()]);
if (week >= newYearWeek) {
var date=$I$(6).from$java_time_temporal_TemporalAccessor(temporal).date$java_time_temporal_TemporalAccessor(temporal);
date=date.plus$J$java_time_temporal_TemporalUnit(yearLen - doy + 1 + 7, $I$(2).DAYS);
return p$1.rangeWeekOfWeekBasedYear$java_time_temporal_TemporalAccessor.apply(this, [date]);
}return $I$(1).of$J$J(1, newYearWeek - 1);
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return this.name + "[" + this.weekDef.toString() + "]" ;
});

C$.$static$=function(){C$.$static$=0;
C$.DAY_OF_WEEK_RANGE=$I$(1).of$J$J(1, 7);
C$.WEEK_OF_MONTH_RANGE=$I$(1).of$J$J$J$J(0, 1, 4, 6);
C$.WEEK_OF_YEAR_RANGE=$I$(1).of$J$J$J$J(0, 1, 52, 54);
C$.WEEK_OF_WEEK_BASED_YEAR_RANGE=$I$(1).of$J$J$J(1, 52, 53);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:56 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
