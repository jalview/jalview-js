(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.time.Clock','java.util.Objects','java.time.temporal.ChronoField','java.time.chrono.IsoChronology','java.time.Month','java.time.temporal.TemporalQueries','java.time.format.DateTimeFormatter','java.time.temporal.ValueRange','java.time.DayOfWeek','java.time.temporal.ChronoUnit','java.time.Period','java.time.LocalDateTime','java.time.LocalTime','java.time.OffsetDateTime','java.time.ZonedDateTime','StringBuilder','java.time.Ser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LocalDate", null, null, ['java.time.temporal.Temporal', 'java.time.temporal.TemporalAdjuster', 'java.time.chrono.ChronoLocalDate', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['year'],'H',['month','day']]
,['O',['MIN','java.time.LocalDate','+MAX']]]

Clazz.newMeth(C$, 'now$', function () {
return C$.now$java_time_Clock($I$(1).systemDefaultZone$());
}, 1);

Clazz.newMeth(C$, 'now$java_time_ZoneId', function (zone) {
return C$.now$java_time_Clock($I$(1).system$java_time_ZoneId(zone));
}, 1);

Clazz.newMeth(C$, 'now$java_time_Clock', function (clock) {
$I$(2).requireNonNull$O$S(clock, "clock");
var now=clock.instant$();
var offset=clock.getZone$().getRules$().getOffset$java_time_Instant(now);
var epochSec=now.getEpochSecond$() + offset.getTotalSeconds$();
var epochDay=Math.floorDiv(epochSec, 86400);
return C$.ofEpochDay$J(epochDay);
}, 1);

Clazz.newMeth(C$, 'of$I$java_time_Month$I', function (year, month, dayOfMonth) {
$I$(3).YEAR.checkValidValue$J(year);
$I$(2).requireNonNull$O$S(month, "month");
$I$(3).DAY_OF_MONTH.checkValidValue$J(dayOfMonth);
return C$.create$I$I$I(year, month.getValue$(), dayOfMonth);
}, 1);

Clazz.newMeth(C$, 'of$I$I$I', function (year, month, dayOfMonth) {
$I$(3).YEAR.checkValidValue$J(year);
$I$(3).MONTH_OF_YEAR.checkValidValue$J(month);
$I$(3).DAY_OF_MONTH.checkValidValue$J(dayOfMonth);
return C$.create$I$I$I(year, month, dayOfMonth);
}, 1);

Clazz.newMeth(C$, 'ofYearDay$I$I', function (year, dayOfYear) {
$I$(3).YEAR.checkValidValue$J(year);
$I$(3).DAY_OF_YEAR.checkValidValue$J(dayOfYear);
var leap=$I$(4).INSTANCE.isLeapYear$J(year);
if (dayOfYear == 366 && leap == false  ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid date 'DayOfYear 366' as '" + year + "' is not a leap year" ]);
}var moy=$I$(5,"of$I",[((dayOfYear - 1)/31|0) + 1]);
var monthEnd=moy.firstDayOfYear$Z(leap) + moy.length$Z(leap) - 1;
if (dayOfYear > monthEnd) {
moy=moy.plus$J(1);
}var dom=dayOfYear - moy.firstDayOfYear$Z(leap) + 1;
return Clazz.new_(C$.c$$I$I$I,[year, moy.getValue$(), dom]);
}, 1);

Clazz.newMeth(C$, 'ofEpochDay$J', function (epochDay) {
var zeroDay=epochDay + 719528;
zeroDay-=60;
var adjust=0;
if (zeroDay < 0) {
var adjustCycles=Clazz.toLong((zeroDay + 1)/146097) - 1;
adjust=adjustCycles * 400;
zeroDay+=-adjustCycles * 146097;
}var yearEst=Clazz.toLong((400 * zeroDay + 591)/146097);
var doyEst=zeroDay - (365 * yearEst + Clazz.toLong(yearEst/4) - Clazz.toLong(yearEst/100) + Clazz.toLong(yearEst/400));
if (doyEst < 0) {
yearEst--;
doyEst=zeroDay - (365 * yearEst + Clazz.toLong(yearEst/4) - Clazz.toLong(yearEst/100) + Clazz.toLong(yearEst/400));
}yearEst+=adjust;
var marchDoy0=(doyEst|0);
var marchMonth0=((marchDoy0 * 5 + 2)/153|0);
var month=(marchMonth0 + 2) % 12 + 1;
var dom=marchDoy0 - ((marchMonth0 * 306 + 5)/10|0) + 1;
yearEst+=(marchMonth0/10|0);
var year=$I$(3).YEAR.checkValidIntValue$J(yearEst);
return Clazz.new_(C$.c$$I$I$I,[year, month, dom]);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
$I$(2).requireNonNull$O$S(temporal, "temporal");
var date=temporal.query$java_time_temporal_TemporalQuery($I$(6).localDate$());
if (date == null ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unable to obtain LocalDate from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() ]);
}return date;
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence', function (text) {
return C$.parse$CharSequence$java_time_format_DateTimeFormatter(text, $I$(7).ISO_LOCAL_DATE);
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence$java_time_format_DateTimeFormatter', function (text, formatter) {
$I$(2).requireNonNull$O$S(formatter, "formatter");
return formatter.parse$CharSequence$java_time_temporal_TemporalQuery(text, (P$.LocalDate$lambda1$||(P$.LocalDate$lambda1$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "LocalDate$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (t) { return $$.from$java_time_temporal_TemporalAccessor.apply(null,[t])});
})()
)); return Clazz.new_(P$.LocalDate$lambda1.$init$,[this, null])})(C$)))));
}, 1);

Clazz.newMeth(C$, 'create$I$I$I', function (year, month, dayOfMonth) {
if (dayOfMonth > 28) {
var dom=31;
switch (month) {
case 2:
dom=($I$(4).INSTANCE.isLeapYear$J(year) ? 29 : 28);
break;
case 4:
case 6:
case 9:
case 11:
dom=30;
break;
}
if (dayOfMonth > dom) {
if (dayOfMonth == 29) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid date 'February 29' as '" + year + "' is not a leap year" ]);
} else {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid date '" + $I$(5).of$I(month).name$() + " " + dayOfMonth + "'" ]);
}}}return Clazz.new_(C$.c$$I$I$I,[year, month, dayOfMonth]);
}, 1);

Clazz.newMeth(C$, 'resolvePreviousValid$I$I$I', function (year, month, day) {
switch (month) {
case 2:
day=Math.min(day, $I$(4).INSTANCE.isLeapYear$J(year) ? 29 : 28);
break;
case 4:
case 6:
case 9:
case 11:
day=Math.min(day, 30);
break;
}
return Clazz.new_(C$.c$$I$I$I,[year, month, day]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (year, month, dayOfMonth) {
;C$.$init$.apply(this);
this.year=year;
this.month=($s$[0] = month, $s$[0]);
this.day=($s$[0] = dayOfMonth, $s$[0]);
}, 1);

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
return P$.chrono.ChronoLocalDate.superclazz.prototype.isSupported$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalUnit', function (unit) {
return P$.chrono.ChronoLocalDate.superclazz.prototype.isSupported$java_time_temporal_TemporalUnit.apply(this, [unit]);
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
if (f.isDateBased$()) {
switch (f) {
case $I$(3).DAY_OF_MONTH:
return $I$(8,"of$J$J",[1, this.lengthOfMonth$()]);
case $I$(3).DAY_OF_YEAR:
return $I$(8,"of$J$J",[1, this.lengthOfYear$()]);
case $I$(3).ALIGNED_WEEK_OF_MONTH:
return $I$(8,"of$J$J",[1, this.getMonth$() === $I$(5).FEBRUARY  && this.isLeapYear$() == false   ? 4 : 5]);
case $I$(3).YEAR_OF_ERA:
return (this.getYear$() <= 0 ? $I$(8).of$J$J(1, 1000000000) : $I$(8).of$J$J(1, 999999999));
}
return field.range$();
}throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.rangeRefinedBy$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
return p$1.get0$java_time_temporal_TemporalField.apply(this, [field]);
}return P$.chrono.ChronoLocalDate.superclazz.prototype.get$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
if (field === $I$(3).EPOCH_DAY ) {
return this.toEpochDay$();
}if (field === $I$(3).PROLEPTIC_MONTH ) {
return p$1.getProlepticMonth.apply(this, []);
}return p$1.get0$java_time_temporal_TemporalField.apply(this, [field]);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'get0$java_time_temporal_TemporalField', function (field) {
switch (field) {
case $I$(3).DAY_OF_WEEK:
return this.getDayOfWeek$().getValue$();
case $I$(3).ALIGNED_DAY_OF_WEEK_IN_MONTH:
return ((this.day - 1) % 7) + 1;
case $I$(3).ALIGNED_DAY_OF_WEEK_IN_YEAR:
return ((this.getDayOfYear$() - 1) % 7) + 1;
case $I$(3).DAY_OF_MONTH:
return this.day;
case $I$(3).DAY_OF_YEAR:
return this.getDayOfYear$();
case $I$(3).EPOCH_DAY:
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Invalid field \'EpochDay\' for get() method, use getLong() instead"]);
case $I$(3).ALIGNED_WEEK_OF_MONTH:
return (((this.day - 1)/7|0)) + 1;
case $I$(3).ALIGNED_WEEK_OF_YEAR:
return (((this.getDayOfYear$() - 1)/7|0)) + 1;
case $I$(3).MONTH_OF_YEAR:
return this.month;
case $I$(3).PROLEPTIC_MONTH:
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Invalid field \'ProlepticMonth\' for get() method, use getLong() instead"]);
case $I$(3).YEAR_OF_ERA:
return (this.year >= 1 ? this.year : 1 - this.year);
case $I$(3).YEAR:
return this.year;
case $I$(3).ERA:
return (this.year >= 1 ? 1 : 0);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}, p$1);

Clazz.newMeth(C$, 'getProlepticMonth', function () {
return (this.year * 12 + this.month - 1);
}, p$1);

Clazz.newMeth(C$, 'getChronology$', function () {
return $I$(4).INSTANCE;
});

Clazz.newMeth(C$, 'getEra$', function () {
return P$.chrono.ChronoLocalDate.superclazz.prototype.getEra$.apply(this, []);
});

Clazz.newMeth(C$, 'getYear$', function () {
return this.year;
});

Clazz.newMeth(C$, 'getMonthValue$', function () {
return this.month;
});

Clazz.newMeth(C$, 'getMonth$', function () {
return $I$(5).of$I(this.month);
});

Clazz.newMeth(C$, 'getDayOfMonth$', function () {
return this.day;
});

Clazz.newMeth(C$, 'getDayOfYear$', function () {
return this.getMonth$().firstDayOfYear$Z(this.isLeapYear$()) + this.day - 1;
});

Clazz.newMeth(C$, 'getDayOfWeek$', function () {
var dow0=(Math.floorMod(this.toEpochDay$() + 3, 7)|0);
return $I$(9).of$I(dow0 + 1);
});

Clazz.newMeth(C$, 'isLeapYear$', function () {
return $I$(4).INSTANCE.isLeapYear$J(this.year);
});

Clazz.newMeth(C$, 'lengthOfMonth$', function () {
switch (this.month) {
case 2:
return (this.isLeapYear$() ? 29 : 28);
case 4:
case 6:
case 9:
case 11:
return 30;
default:
return 31;
}
});

Clazz.newMeth(C$, 'lengthOfYear$', function () {
return (this.isLeapYear$() ? 366 : 365);
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster', function (adjuster) {
if (Clazz.instanceOf(adjuster, "java.time.LocalDate")) {
return adjuster;
}return adjuster.adjustInto$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
f.checkValidValue$J(newValue);
switch (f) {
case $I$(3).DAY_OF_WEEK:
return this.plusDays$J(newValue - this.getDayOfWeek$().getValue$());
case $I$(3).ALIGNED_DAY_OF_WEEK_IN_MONTH:
return this.plusDays$J(newValue - this.getLong$java_time_temporal_TemporalField($I$(3).ALIGNED_DAY_OF_WEEK_IN_MONTH));
case $I$(3).ALIGNED_DAY_OF_WEEK_IN_YEAR:
return this.plusDays$J(newValue - this.getLong$java_time_temporal_TemporalField($I$(3).ALIGNED_DAY_OF_WEEK_IN_YEAR));
case $I$(3).DAY_OF_MONTH:
return this.withDayOfMonth$I((newValue|0));
case $I$(3).DAY_OF_YEAR:
return this.withDayOfYear$I((newValue|0));
case $I$(3).EPOCH_DAY:
return C$.ofEpochDay$J(newValue);
case $I$(3).ALIGNED_WEEK_OF_MONTH:
return this.plusWeeks$J(newValue - this.getLong$java_time_temporal_TemporalField($I$(3).ALIGNED_WEEK_OF_MONTH));
case $I$(3).ALIGNED_WEEK_OF_YEAR:
return this.plusWeeks$J(newValue - this.getLong$java_time_temporal_TemporalField($I$(3).ALIGNED_WEEK_OF_YEAR));
case $I$(3).MONTH_OF_YEAR:
return this.withMonth$I((newValue|0));
case $I$(3).PROLEPTIC_MONTH:
return this.plusMonths$J(newValue - p$1.getProlepticMonth.apply(this, []));
case $I$(3).YEAR_OF_ERA:
return this.withYear$I(((this.year >= 1 ? newValue : 1 - newValue)|0));
case $I$(3).YEAR:
return this.withYear$I((newValue|0));
case $I$(3).ERA:
return (this.getLong$java_time_temporal_TemporalField($I$(3).ERA) == newValue ? this : this.withYear$I(1 - this.year));
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.adjustInto$java_time_temporal_Temporal$J(this, newValue);
});

Clazz.newMeth(C$, 'withYear$I', function (year) {
if (this.year == year) {
return this;
}$I$(3).YEAR.checkValidValue$J(year);
return C$.resolvePreviousValid$I$I$I(year, this.month, this.day);
});

Clazz.newMeth(C$, 'withMonth$I', function (month) {
if (this.month == month) {
return this;
}$I$(3).MONTH_OF_YEAR.checkValidValue$J(month);
return C$.resolvePreviousValid$I$I$I(this.year, month, this.day);
});

Clazz.newMeth(C$, 'withDayOfMonth$I', function (dayOfMonth) {
if (this.day == dayOfMonth) {
return this;
}return C$.of$I$I$I(this.year, this.month, dayOfMonth);
});

Clazz.newMeth(C$, 'withDayOfYear$I', function (dayOfYear) {
if (this.getDayOfYear$() == dayOfYear) {
return this;
}return C$.ofYearDay$I$I(this.year, dayOfYear);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amountToAdd) {
if (Clazz.instanceOf(amountToAdd, "java.time.Period")) {
var periodToAdd=amountToAdd;
return this.plusMonths$J(periodToAdd.toTotalMonths$()).plusDays$J(periodToAdd.getDays$());
}$I$(2).requireNonNull$O$S(amountToAdd, "amountToAdd");
return amountToAdd.addTo$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
var f=unit;
switch (f) {
case $I$(10).DAYS:
return this.plusDays$J(amountToAdd);
case $I$(10).WEEKS:
return this.plusWeeks$J(amountToAdd);
case $I$(10).MONTHS:
return this.plusMonths$J(amountToAdd);
case $I$(10).YEARS:
return this.plusYears$J(amountToAdd);
case $I$(10).DECADES:
return this.plusYears$J(Math.multiplyExact(amountToAdd, 10));
case $I$(10).CENTURIES:
return this.plusYears$J(Math.multiplyExact(amountToAdd, 100));
case $I$(10).MILLENNIA:
return this.plusYears$J(Math.multiplyExact(amountToAdd, 1000));
case $I$(10).ERAS:
return this.with$java_time_temporal_TemporalField$J($I$(3).ERA, Math.addExact(this.getLong$java_time_temporal_TemporalField($I$(3).ERA), amountToAdd));
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}return unit.addTo$java_time_temporal_Temporal$J(this, amountToAdd);
});

Clazz.newMeth(C$, 'plusYears$J', function (yearsToAdd) {
if (yearsToAdd == 0) {
return this;
}var newYear=$I$(3).YEAR.checkValidIntValue$J(this.year + yearsToAdd);
return C$.resolvePreviousValid$I$I$I(newYear, this.month, this.day);
});

Clazz.newMeth(C$, 'plusMonths$J', function (monthsToAdd) {
if (monthsToAdd == 0) {
return this;
}var monthCount=this.year * 12 + (this.month - 1);
var calcMonths=monthCount + monthsToAdd;
var newYear=$I$(3).YEAR.checkValidIntValue$J(Math.floorDiv(calcMonths, 12));
var newMonth=(Math.floorMod(calcMonths, 12)|0) + 1;
return C$.resolvePreviousValid$I$I$I(newYear, newMonth, this.day);
});

Clazz.newMeth(C$, 'plusWeeks$J', function (weeksToAdd) {
return this.plusDays$J(Math.multiplyExact(weeksToAdd, 7));
});

Clazz.newMeth(C$, 'plusDays$J', function (daysToAdd) {
if (daysToAdd == 0) {
return this;
}var mjDay=Math.addExact(this.toEpochDay$(), daysToAdd);
return C$.ofEpochDay$J(mjDay);
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amountToSubtract) {
if (Clazz.instanceOf(amountToSubtract, "java.time.Period")) {
var periodToSubtract=amountToSubtract;
return this.minusMonths$J(periodToSubtract.toTotalMonths$()).minusDays$J(periodToSubtract.getDays$());
}$I$(2).requireNonNull$O$S(amountToSubtract, "amountToSubtract");
return amountToSubtract.subtractFrom$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'minus$J$java_time_temporal_TemporalUnit', function (amountToSubtract, unit) {
return (amountToSubtract == -9223372036854775808 ? this.plus$J$java_time_temporal_TemporalUnit(9223372036854775807, unit).plus$J$java_time_temporal_TemporalUnit(1, unit) : this.plus$J$java_time_temporal_TemporalUnit(-amountToSubtract, unit));
});

Clazz.newMeth(C$, 'minusYears$J', function (yearsToSubtract) {
return (yearsToSubtract == -9223372036854775808 ? this.plusYears$J(9223372036854775807).plusYears$J(1) : this.plusYears$J(-yearsToSubtract));
});

Clazz.newMeth(C$, 'minusMonths$J', function (monthsToSubtract) {
return (monthsToSubtract == -9223372036854775808 ? this.plusMonths$J(9223372036854775807).plusMonths$J(1) : this.plusMonths$J(-monthsToSubtract));
});

Clazz.newMeth(C$, 'minusWeeks$J', function (weeksToSubtract) {
return (weeksToSubtract == -9223372036854775808 ? this.plusWeeks$J(9223372036854775807).plusWeeks$J(1) : this.plusWeeks$J(-weeksToSubtract));
});

Clazz.newMeth(C$, 'minusDays$J', function (daysToSubtract) {
return (daysToSubtract == -9223372036854775808 ? this.plusDays$J(9223372036854775807).plusDays$J(1) : this.plusDays$J(-daysToSubtract));
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(6).localDate$() ) {
return this;
}return P$.chrono.ChronoLocalDate.superclazz.prototype.query$java_time_temporal_TemporalQuery.apply(this, [query]);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal', function (temporal) {
return P$.chrono.ChronoLocalDate.superclazz.prototype.adjustInto$java_time_temporal_Temporal.apply(this, [temporal]);
});

Clazz.newMeth(C$, 'until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit', function (endExclusive, unit) {
var end=C$.from$java_time_temporal_TemporalAccessor(endExclusive);
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
switch (unit) {
case $I$(10).DAYS:
return this.daysUntil$java_time_LocalDate(end);
case $I$(10).WEEKS:
return Clazz.toLong(this.daysUntil$java_time_LocalDate(end)/7);
case $I$(10).MONTHS:
return p$1.monthsUntil$java_time_LocalDate.apply(this, [end]);
case $I$(10).YEARS:
return Clazz.toLong(p$1.monthsUntil$java_time_LocalDate.apply(this, [end])/12);
case $I$(10).DECADES:
return Clazz.toLong(p$1.monthsUntil$java_time_LocalDate.apply(this, [end])/120);
case $I$(10).CENTURIES:
return Clazz.toLong(p$1.monthsUntil$java_time_LocalDate.apply(this, [end])/1200);
case $I$(10).MILLENNIA:
return Clazz.toLong(p$1.monthsUntil$java_time_LocalDate.apply(this, [end])/12000);
case $I$(10).ERAS:
return end.getLong$java_time_temporal_TemporalField($I$(3).ERA) - this.getLong$java_time_temporal_TemporalField($I$(3).ERA);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}return unit.between$java_time_temporal_Temporal$java_time_temporal_Temporal(this, end);
});

Clazz.newMeth(C$, 'daysUntil$java_time_LocalDate', function (end) {
return end.toEpochDay$() - this.toEpochDay$();
});

Clazz.newMeth(C$, 'monthsUntil$java_time_LocalDate', function (end) {
var packed1=p$1.getProlepticMonth.apply(this, []) * 32 + this.getDayOfMonth$();
var packed2=p$1.getProlepticMonth.apply(end, []) * 32 + end.getDayOfMonth$();
return Clazz.toLong((packed2 - packed1)/32);
}, p$1);

Clazz.newMeth(C$, 'until$java_time_chrono_ChronoLocalDate', function (endDateExclusive) {
var end=C$.from$java_time_temporal_TemporalAccessor(endDateExclusive);
var totalMonths=p$1.getProlepticMonth.apply(end, []) - p$1.getProlepticMonth.apply(this, []);
var days=end.day - this.day;
if (totalMonths > 0 && days < 0 ) {
totalMonths--;
var calcDate=this.plusMonths$J(totalMonths);
days=((end.toEpochDay$() - calcDate.toEpochDay$())|0);
} else if (totalMonths < 0 && days > 0 ) {
totalMonths++;
days-=end.lengthOfMonth$();
}var years=Clazz.toLong(totalMonths/12);
var months=((totalMonths % 12)|0);
return $I$(11,"of$I$I$I",[Math.toIntExact(years), months, days]);
});

Clazz.newMeth(C$, 'format$java_time_format_DateTimeFormatter', function (formatter) {
$I$(2).requireNonNull$O$S(formatter, "formatter");
return formatter.format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'atTime$java_time_LocalTime', function (time) {
return $I$(12).of$java_time_LocalDate$java_time_LocalTime(this, time);
});

Clazz.newMeth(C$, 'atTime$I$I', function (hour, minute) {
return this.atTime$java_time_LocalTime($I$(13).of$I$I(hour, minute));
});

Clazz.newMeth(C$, 'atTime$I$I$I', function (hour, minute, second) {
return this.atTime$java_time_LocalTime($I$(13).of$I$I$I(hour, minute, second));
});

Clazz.newMeth(C$, 'atTime$I$I$I$I', function (hour, minute, second, nanoOfSecond) {
return this.atTime$java_time_LocalTime($I$(13).of$I$I$I$I(hour, minute, second, nanoOfSecond));
});

Clazz.newMeth(C$, 'atTime$java_time_OffsetTime', function (time) {
return $I$(14,"of$java_time_LocalDateTime$java_time_ZoneOffset",[$I$(12,"of$java_time_LocalDate$java_time_LocalTime",[this, time.toLocalTime$()]), time.getOffset$()]);
});

Clazz.newMeth(C$, 'atStartOfDay$', function () {
return $I$(12,"of$java_time_LocalDate$java_time_LocalTime",[this, $I$(13).MIDNIGHT]);
});

Clazz.newMeth(C$, 'atStartOfDay$java_time_ZoneId', function (zone) {
$I$(2).requireNonNull$O$S(zone, "zone");
var ldt=this.atTime$java_time_LocalTime($I$(13).MIDNIGHT);
if (Clazz.instanceOf(zone, "java.time.ZoneOffset") == false ) {
var rules=zone.getRules$();
var trans=rules.getTransition$java_time_LocalDateTime(ldt);
if (trans != null  && trans.isGap$() ) {
ldt=trans.getDateTimeAfter$();
}}return $I$(15).of$java_time_LocalDateTime$java_time_ZoneId(ldt, zone);
});

Clazz.newMeth(C$, 'toEpochDay$', function () {
var y=this.year;
var m=this.month;
var total=0;
total+=365 * y;
if (y >= 0) {
total+=Clazz.toLong((y + 3)/4) - Clazz.toLong((y + 99)/100) + Clazz.toLong((y + 399)/400);
} else {
total-=Clazz.toLong(y/-4) - Clazz.toLong(y/-100) + Clazz.toLong(y/-400);
}total+=(Clazz.toLong((367 * m - 362)/12));
total+=this.day - 1;
if (m > 2) {
total--;
if (this.isLeapYear$() == false ) {
total--;
}}return total - 719528;
});

Clazz.newMeth(C$, ['compareTo$java_time_chrono_ChronoLocalDate','compareTo$O'], function (other) {
if (Clazz.instanceOf(other, "java.time.LocalDate")) {
return this.compareTo0$java_time_LocalDate(other);
}return P$.chrono.ChronoLocalDate.superclazz.prototype.compareTo$java_time_chrono_ChronoLocalDate.apply(this, [other]);
});

Clazz.newMeth(C$, 'compareTo0$java_time_LocalDate', function (otherDate) {
var cmp=(this.year - otherDate.year);
if (cmp == 0) {
cmp=(this.month - otherDate.month);
if (cmp == 0) {
cmp=(this.day - otherDate.day);
}}return cmp;
});

Clazz.newMeth(C$, 'isAfter$java_time_chrono_ChronoLocalDate', function (other) {
if (Clazz.instanceOf(other, "java.time.LocalDate")) {
return this.compareTo0$java_time_LocalDate(other) > 0;
}return P$.chrono.ChronoLocalDate.superclazz.prototype.isAfter$java_time_chrono_ChronoLocalDate.apply(this, [other]);
});

Clazz.newMeth(C$, 'isBefore$java_time_chrono_ChronoLocalDate', function (other) {
if (Clazz.instanceOf(other, "java.time.LocalDate")) {
return this.compareTo0$java_time_LocalDate(other) < 0;
}return P$.chrono.ChronoLocalDate.superclazz.prototype.isBefore$java_time_chrono_ChronoLocalDate.apply(this, [other]);
});

Clazz.newMeth(C$, 'isEqual$java_time_chrono_ChronoLocalDate', function (other) {
if (Clazz.instanceOf(other, "java.time.LocalDate")) {
return this.compareTo0$java_time_LocalDate(other) == 0;
}return P$.chrono.ChronoLocalDate.superclazz.prototype.isEqual$java_time_chrono_ChronoLocalDate.apply(this, [other]);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.LocalDate")) {
return this.compareTo0$java_time_LocalDate(obj) == 0;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var yearValue=this.year;
var monthValue=this.month;
var dayValue=this.day;
return (yearValue & -2048) ^ ((yearValue << 11) + (monthValue << 6) + (dayValue) );
});

Clazz.newMeth(C$, 'toString', function () {
var yearValue=this.year;
var monthValue=this.month;
var dayValue=this.day;
var absYear=Math.abs(yearValue);
var buf=Clazz.new_($I$(16,1).c$$I,[10]);
if (absYear < 1000) {
if (yearValue < 0) {
buf.append$I(yearValue - 10000).deleteCharAt$I(1);
} else {
buf.append$I(yearValue + 10000).deleteCharAt$I(0);
}} else {
if (yearValue > 9999) {
buf.append$C("+");
}buf.append$I(yearValue);
}return buf.append$S(monthValue < 10 ? "-0" : "-").append$I(monthValue).append$S(dayValue < 10 ? "-0" : "-").append$I(dayValue).toString();
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(17,1).c$$B$O,[3, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
out.writeInt$I(this.year);
out.writeByte$I(this.month);
out.writeByte$I(this.day);
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var year=$in.readInt$();
var month=$in.readByte$();
var dayOfMonth=$in.readByte$();
return C$.of$I$I$I(year, month, dayOfMonth);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MIN=C$.of$I$I$I(-999999999, 1, 1);
C$.MAX=C$.of$I$I$I(999999999, 12, 31);
};
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:53:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
