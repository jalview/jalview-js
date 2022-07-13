(function(){var P$=Clazz.newPackage("java.time"),I$=[[0,'java.time.chrono.IsoChronology','java.time.chrono.Chronology','java.time.LocalDate','java.time.temporal.ChronoField','java.time.format.DateTimeFormatterBuilder','java.time.temporal.TemporalQueries','java.time.temporal.ChronoUnit']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*e*/var C$=Clazz.newClass(P$, "Month", null, 'Enum', ['java.time.temporal.TemporalAccessor', 'java.time.temporal.TemporalAdjuster']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['ENUMS','java.time.Month[]']]]

Clazz.newMeth(C$, 'of$I', function (month) {
if (month < 1 || month > 12 ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid value for MonthOfYear: " + month]);
}return C$.ENUMS[month - 1];
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.Month")) {
return temporal;
}try {
if ($I$(1).INSTANCE.equals$O($I$(2).from$java_time_temporal_TemporalAccessor(temporal)) == false ) {
temporal=$I$(3).from$java_time_temporal_TemporalAccessor(temporal);
}return C$.of$I(temporal.get$java_time_temporal_TemporalField($I$(4).MONTH_OF_YEAR));
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Unable to obtain Month from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() , ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.ordinal$() + 1;
});

Clazz.newMeth(C$, 'getDisplayName$java_time_format_TextStyle$java_util_Locale', function (style, locale) {
return Clazz.new_($I$(5,1)).appendText$java_time_temporal_TemporalField$java_time_format_TextStyle($I$(4).MONTH_OF_YEAR, style).toFormatter$java_util_Locale(locale).format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
return field === $I$(4).MONTH_OF_YEAR ;
}return field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ;
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (field === $I$(4).MONTH_OF_YEAR ) {
return field.range$();
}return P$.temporal.TemporalAccessor.superclazz.prototype.range$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
if (field === $I$(4).MONTH_OF_YEAR ) {
return this.getValue$();
}return P$.temporal.TemporalAccessor.superclazz.prototype.get$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (field === $I$(4).MONTH_OF_YEAR ) {
return this.getValue$();
} else if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'plus$J', function (months) {
var amount=((months % 12)|0);
return C$.ENUMS[(this.ordinal$() + (amount + 12)) % 12];
});

Clazz.newMeth(C$, 'minus$J', function (months) {
return this.plus$J(-(months % 12));
});

Clazz.newMeth(C$, 'length$Z', function (leapYear) {
switch (this) {
case C$.FEBRUARY:
return (leapYear ? 29 : 28);
case C$.APRIL:
case C$.JUNE:
case C$.SEPTEMBER:
case C$.NOVEMBER:
return 30;
default:
return 31;
}
});

Clazz.newMeth(C$, 'minLength$', function () {
switch (this) {
case C$.FEBRUARY:
return 28;
case C$.APRIL:
case C$.JUNE:
case C$.SEPTEMBER:
case C$.NOVEMBER:
return 30;
default:
return 31;
}
});

Clazz.newMeth(C$, 'maxLength$', function () {
switch (this) {
case C$.FEBRUARY:
return 29;
case C$.APRIL:
case C$.JUNE:
case C$.SEPTEMBER:
case C$.NOVEMBER:
return 30;
default:
return 31;
}
});

Clazz.newMeth(C$, 'firstDayOfYear$Z', function (leapYear) {
var leap=leapYear ? 1 : 0;
switch (this) {
case C$.JANUARY:
return 1;
case C$.FEBRUARY:
return 32;
case C$.MARCH:
return 60 + leap;
case C$.APRIL:
return 91 + leap;
case C$.MAY:
return 121 + leap;
case C$.JUNE:
return 152 + leap;
case C$.JULY:
return 182 + leap;
case C$.AUGUST:
return 213 + leap;
case C$.SEPTEMBER:
return 244 + leap;
case C$.OCTOBER:
return 274 + leap;
case C$.NOVEMBER:
return 305 + leap;
case C$.DECEMBER:
default:
return 335 + leap;
}
});

Clazz.newMeth(C$, 'firstMonthOfQuarter$', function () {
return C$.ENUMS[((this.ordinal$()/3|0)) * 3];
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(6).chronology$() ) {
return $I$(1).INSTANCE;
} else if (query === $I$(6).precision$() ) {
return $I$(7).MONTHS;
}return P$.temporal.TemporalAccessor.superclazz.prototype.query$java_time_temporal_TemporalQuery.apply(this, [query]);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal', function (temporal) {
if ($I$(2).from$java_time_temporal_TemporalAccessor(temporal).equals$O($I$(1).INSTANCE) == false ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Adjustment only supported on ISO date-time"]);
}return temporal.with$java_time_temporal_TemporalField$J($I$(4).MONTH_OF_YEAR, this.getValue$());
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "JANUARY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "FEBRUARY", 1, []);
Clazz.newEnumConst($vals, C$.c$, "MARCH", 2, []);
Clazz.newEnumConst($vals, C$.c$, "APRIL", 3, []);
Clazz.newEnumConst($vals, C$.c$, "MAY", 4, []);
Clazz.newEnumConst($vals, C$.c$, "JUNE", 5, []);
Clazz.newEnumConst($vals, C$.c$, "JULY", 6, []);
Clazz.newEnumConst($vals, C$.c$, "AUGUST", 7, []);
Clazz.newEnumConst($vals, C$.c$, "SEPTEMBER", 8, []);
Clazz.newEnumConst($vals, C$.c$, "OCTOBER", 9, []);
Clazz.newEnumConst($vals, C$.c$, "NOVEMBER", 10, []);
Clazz.newEnumConst($vals, C$.c$, "DECEMBER", 11, []);
C$.ENUMS=C$.values$();
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:53:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
