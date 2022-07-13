(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.time.format.DateTimeFormatterBuilder','java.time.temporal.ChronoField','java.time.format.SignStyle','java.time.Clock','java.time.LocalDate','java.util.Objects','java.time.chrono.IsoChronology','java.time.chrono.Chronology','java.time.temporal.ChronoUnit','java.time.temporal.ValueRange','java.time.temporal.TemporalQueries','java.time.YearMonth','java.time.Ser']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Year", null, null, ['java.time.temporal.Temporal', 'java.time.temporal.TemporalAdjuster', 'Comparable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['year']]
,['O',['PARSER','java.time.format.DateTimeFormatter']]]

Clazz.newMeth(C$, 'now$', function () {
return C$.now$java_time_Clock($I$(4).systemDefaultZone$());
}, 1);

Clazz.newMeth(C$, 'now$java_time_ZoneId', function (zone) {
return C$.now$java_time_Clock($I$(4).system$java_time_ZoneId(zone));
}, 1);

Clazz.newMeth(C$, 'now$java_time_Clock', function (clock) {
var now=$I$(5).now$java_time_Clock(clock);
return C$.of$I(now.getYear$());
}, 1);

Clazz.newMeth(C$, 'of$I', function (isoYear) {
$I$(2).YEAR.checkValidValue$J(isoYear);
return Clazz.new_(C$.c$$I,[isoYear]);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.Year")) {
return temporal;
}$I$(6).requireNonNull$O$S(temporal, "temporal");
try {
if ($I$(7).INSTANCE.equals$O($I$(8).from$java_time_temporal_TemporalAccessor(temporal)) == false ) {
temporal=$I$(5).from$java_time_temporal_TemporalAccessor(temporal);
}return C$.of$I(temporal.get$java_time_temporal_TemporalField($I$(2).YEAR));
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Unable to obtain Year from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() , ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence', function (text) {
return C$.parse$CharSequence$java_time_format_DateTimeFormatter(text, C$.PARSER);
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence$java_time_format_DateTimeFormatter', function (text, formatter) {
$I$(6).requireNonNull$O$S(formatter, "formatter");
return formatter.parse$CharSequence$java_time_temporal_TemporalQuery(text, (P$.Year$lambda1$||(P$.Year$lambda1$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Year$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (t) { return $$.from$java_time_temporal_TemporalAccessor.apply(null,[t])});
})()
)); return Clazz.new_(P$.Year$lambda1.$init$,[this, null])})(C$)))));
}, 1);

Clazz.newMeth(C$, 'isLeap$J', function (year) {
return ((year & 3) == 0) && ((year % 100) != 0 || (year % 400) == 0 ) ;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (year) {
;C$.$init$.apply(this);
this.year=year;
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.year;
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
return field === $I$(2).YEAR  || field === $I$(2).YEAR_OF_ERA   || field === $I$(2).ERA  ;
}return field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ;
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalUnit', function (unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
return unit === $I$(9).YEARS  || unit === $I$(9).DECADES   || unit === $I$(9).CENTURIES   || unit === $I$(9).MILLENNIA   || unit === $I$(9).ERAS  ;
}return unit != null  && unit.isSupportedBy$java_time_temporal_Temporal(this) ;
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (field === $I$(2).YEAR_OF_ERA ) {
return (this.year <= 0 ? $I$(10).of$J$J(1, 1000000000) : $I$(10).of$J$J(1, 999999999));
}return P$.temporal.Temporal.superclazz.prototype.range$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
return this.range$java_time_temporal_TemporalField(field).checkValidIntValue$J$java_time_temporal_TemporalField(this.getLong$java_time_temporal_TemporalField(field), field);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(2).YEAR_OF_ERA:
return (this.year < 1 ? 1 - this.year : this.year);
case $I$(2).YEAR:
return this.year;
case $I$(2).ERA:
return (this.year < 1 ? 0 : 1);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'isLeap$', function () {
return C$.isLeap$J(this.year);
});

Clazz.newMeth(C$, 'isValidMonthDay$java_time_MonthDay', function (monthDay) {
return monthDay != null  && monthDay.isValidYear$I(this.year) ;
});

Clazz.newMeth(C$, 'length$', function () {
return this.isLeap$() ? 366 : 365;
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster', function (adjuster) {
return adjuster.adjustInto$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
f.checkValidValue$J(newValue);
switch (f) {
case $I$(2).YEAR_OF_ERA:
return C$.of$I(((this.year < 1 ? 1 - newValue : newValue)|0));
case $I$(2).YEAR:
return C$.of$I((newValue|0));
case $I$(2).ERA:
return (this.getLong$java_time_temporal_TemporalField($I$(2).ERA) == newValue ? this : C$.of$I(1 - this.year));
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.adjustInto$java_time_temporal_Temporal$J(this, newValue);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amountToAdd) {
return amountToAdd.addTo$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
switch (unit) {
case $I$(9).YEARS:
return this.plusYears$J(amountToAdd);
case $I$(9).DECADES:
return this.plusYears$J(Math.multiplyExact(amountToAdd, 10));
case $I$(9).CENTURIES:
return this.plusYears$J(Math.multiplyExact(amountToAdd, 100));
case $I$(9).MILLENNIA:
return this.plusYears$J(Math.multiplyExact(amountToAdd, 1000));
case $I$(9).ERAS:
return this.with$java_time_temporal_TemporalField$J($I$(2).ERA, Math.addExact(this.getLong$java_time_temporal_TemporalField($I$(2).ERA), amountToAdd));
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}return unit.addTo$java_time_temporal_Temporal$J(this, amountToAdd);
});

Clazz.newMeth(C$, 'plusYears$J', function (yearsToAdd) {
if (yearsToAdd == 0) {
return this;
}return C$.of$I($I$(2).YEAR.checkValidIntValue$J(this.year + yearsToAdd));
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amountToSubtract) {
return amountToSubtract.subtractFrom$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'minus$J$java_time_temporal_TemporalUnit', function (amountToSubtract, unit) {
return (amountToSubtract == -9223372036854775808 ? this.plus$J$java_time_temporal_TemporalUnit(9223372036854775807, unit).plus$J$java_time_temporal_TemporalUnit(1, unit) : this.plus$J$java_time_temporal_TemporalUnit(-amountToSubtract, unit));
});

Clazz.newMeth(C$, 'minusYears$J', function (yearsToSubtract) {
return (yearsToSubtract == -9223372036854775808 ? this.plusYears$J(9223372036854775807).plusYears$J(1) : this.plusYears$J(-yearsToSubtract));
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(11).chronology$() ) {
return $I$(7).INSTANCE;
} else if (query === $I$(11).precision$() ) {
return $I$(9).YEARS;
}return P$.temporal.Temporal.superclazz.prototype.query$java_time_temporal_TemporalQuery.apply(this, [query]);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal', function (temporal) {
if ($I$(8).from$java_time_temporal_TemporalAccessor(temporal).equals$O($I$(7).INSTANCE) == false ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Adjustment only supported on ISO date-time"]);
}return temporal.with$java_time_temporal_TemporalField$J($I$(2).YEAR, this.year);
});

Clazz.newMeth(C$, 'until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit', function (endExclusive, unit) {
var end=C$.from$java_time_temporal_TemporalAccessor(endExclusive);
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
var yearsUntil=(end.year) - this.year;
switch (unit) {
case $I$(9).YEARS:
return yearsUntil;
case $I$(9).DECADES:
return Clazz.toLong(yearsUntil/10);
case $I$(9).CENTURIES:
return Clazz.toLong(yearsUntil/100);
case $I$(9).MILLENNIA:
return Clazz.toLong(yearsUntil/1000);
case $I$(9).ERAS:
return end.getLong$java_time_temporal_TemporalField($I$(2).ERA) - this.getLong$java_time_temporal_TemporalField($I$(2).ERA);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}return unit.between$java_time_temporal_Temporal$java_time_temporal_Temporal(this, end);
});

Clazz.newMeth(C$, 'format$java_time_format_DateTimeFormatter', function (formatter) {
$I$(6).requireNonNull$O$S(formatter, "formatter");
return formatter.format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'atDay$I', function (dayOfYear) {
return $I$(5).ofYearDay$I$I(this.year, dayOfYear);
});

Clazz.newMeth(C$, 'atMonth$java_time_Month', function (month) {
return $I$(12).of$I$java_time_Month(this.year, month);
});

Clazz.newMeth(C$, 'atMonth$I', function (month) {
return $I$(12).of$I$I(this.year, month);
});

Clazz.newMeth(C$, 'atMonthDay$java_time_MonthDay', function (monthDay) {
return monthDay.atYear$I(this.year);
});

Clazz.newMeth(C$, ['compareTo$java_time_Year','compareTo$O'], function (other) {
return this.year - other.year;
});

Clazz.newMeth(C$, 'isAfter$java_time_Year', function (other) {
return this.year > other.year;
});

Clazz.newMeth(C$, 'isBefore$java_time_Year', function (other) {
return this.year < other.year;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.Year")) {
return this.year == (obj).year;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.year;
});

Clazz.newMeth(C$, 'toString', function () {
return Integer.toString$I(this.year);
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(13,1).c$$B$O,[11, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
out.writeInt$I(this.year);
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
return C$.of$I($in.readInt$());
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.PARSER=Clazz.new_($I$(1,1)).appendValue$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle($I$(2).YEAR, 4, 10, $I$(3).EXCEEDS_PAD).toFormatter$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:53:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
