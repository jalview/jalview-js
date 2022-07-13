(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.time.format.DateTimeFormatterBuilder','java.time.temporal.ChronoField','java.time.Clock','java.time.LocalDate','java.util.Objects','java.time.Month','java.time.chrono.IsoChronology','java.time.chrono.Chronology','java.time.temporal.ValueRange','java.time.Year','java.time.temporal.TemporalQueries','StringBuilder','java.time.Ser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MonthDay", null, null, ['java.time.temporal.TemporalAccessor', 'java.time.temporal.TemporalAdjuster', 'Comparable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['month','day']]
,['O',['PARSER','java.time.format.DateTimeFormatter']]]

Clazz.newMeth(C$, 'now$', function () {
return C$.now$java_time_Clock($I$(3).systemDefaultZone$());
}, 1);

Clazz.newMeth(C$, 'now$java_time_ZoneId', function (zone) {
return C$.now$java_time_Clock($I$(3).system$java_time_ZoneId(zone));
}, 1);

Clazz.newMeth(C$, 'now$java_time_Clock', function (clock) {
var now=$I$(4).now$java_time_Clock(clock);
return C$.of$java_time_Month$I(now.getMonth$(), now.getDayOfMonth$());
}, 1);

Clazz.newMeth(C$, 'of$java_time_Month$I', function (month, dayOfMonth) {
$I$(5).requireNonNull$O$S(month, "month");
$I$(2).DAY_OF_MONTH.checkValidValue$J(dayOfMonth);
if (dayOfMonth > month.maxLength$()) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Illegal value for DayOfMonth field, value " + dayOfMonth + " is not valid for month " + month.name$() ]);
}return Clazz.new_(C$.c$$I$I,[month.getValue$(), dayOfMonth]);
}, 1);

Clazz.newMeth(C$, 'of$I$I', function (month, dayOfMonth) {
return C$.of$java_time_Month$I($I$(6).of$I(month), dayOfMonth);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.MonthDay")) {
return temporal;
}try {
if ($I$(7).INSTANCE.equals$O($I$(8).from$java_time_temporal_TemporalAccessor(temporal)) == false ) {
temporal=$I$(4).from$java_time_temporal_TemporalAccessor(temporal);
}return C$.of$I$I(temporal.get$java_time_temporal_TemporalField($I$(2).MONTH_OF_YEAR), temporal.get$java_time_temporal_TemporalField($I$(2).DAY_OF_MONTH));
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Unable to obtain MonthDay from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() , ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence', function (text) {
return C$.parse$CharSequence$java_time_format_DateTimeFormatter(text, C$.PARSER);
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence$java_time_format_DateTimeFormatter', function (text, formatter) {
$I$(5).requireNonNull$O$S(formatter, "formatter");
return formatter.parse$CharSequence$java_time_temporal_TemporalQuery(text, (P$.MonthDay$lambda1$||(P$.MonthDay$lambda1$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "MonthDay$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (t) { return $$.from$java_time_temporal_TemporalAccessor.apply(null,[t])});
})()
)); return Clazz.new_(P$.MonthDay$lambda1.$init$,[this, null])})(C$)))));
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (month, dayOfMonth) {
;C$.$init$.apply(this);
this.month=month;
this.day=dayOfMonth;
}, 1);

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
return field === $I$(2).MONTH_OF_YEAR  || field === $I$(2).DAY_OF_MONTH  ;
}return field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ;
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (field === $I$(2).MONTH_OF_YEAR ) {
return field.range$();
} else if (field === $I$(2).DAY_OF_MONTH ) {
return $I$(9,"of$J$J$J",[1, this.getMonth$().minLength$(), this.getMonth$().maxLength$()]);
}return P$.temporal.TemporalAccessor.superclazz.prototype.range$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
return this.range$java_time_temporal_TemporalField(field).checkValidIntValue$J$java_time_temporal_TemporalField(this.getLong$java_time_temporal_TemporalField(field), field);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(2).DAY_OF_MONTH:
return this.day;
case $I$(2).MONTH_OF_YEAR:
return this.month;
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'getMonthValue$', function () {
return this.month;
});

Clazz.newMeth(C$, 'getMonth$', function () {
return $I$(6).of$I(this.month);
});

Clazz.newMeth(C$, 'getDayOfMonth$', function () {
return this.day;
});

Clazz.newMeth(C$, 'isValidYear$I', function (year) {
return (this.day == 29 && this.month == 2  && $I$(10).isLeap$J(year) == false  ) == false ;
});

Clazz.newMeth(C$, 'withMonth$I', function (month) {
return this.with$java_time_Month($I$(6).of$I(month));
});

Clazz.newMeth(C$, 'with$java_time_Month', function (month) {
$I$(5).requireNonNull$O$S(month, "month");
if (month.getValue$() == this.month) {
return this;
}var day=Math.min(this.day, month.maxLength$());
return Clazz.new_(C$.c$$I$I,[month.getValue$(), day]);
});

Clazz.newMeth(C$, 'withDayOfMonth$I', function (dayOfMonth) {
if (dayOfMonth == this.day) {
return this;
}return C$.of$I$I(this.month, dayOfMonth);
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(11).chronology$() ) {
return $I$(7).INSTANCE;
}return P$.temporal.TemporalAccessor.superclazz.prototype.query$java_time_temporal_TemporalQuery.apply(this, [query]);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal', function (temporal) {
if ($I$(8).from$java_time_temporal_TemporalAccessor(temporal).equals$O($I$(7).INSTANCE) == false ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Adjustment only supported on ISO date-time"]);
}temporal=temporal.with$java_time_temporal_TemporalField$J($I$(2).MONTH_OF_YEAR, this.month);
return temporal.with$java_time_temporal_TemporalField$J($I$(2).DAY_OF_MONTH, Math.min(temporal.range$java_time_temporal_TemporalField($I$(2).DAY_OF_MONTH).getMaximum$(), this.day));
});

Clazz.newMeth(C$, 'format$java_time_format_DateTimeFormatter', function (formatter) {
$I$(5).requireNonNull$O$S(formatter, "formatter");
return formatter.format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'atYear$I', function (year) {
return $I$(4,"of$I$I$I",[year, this.month, this.isValidYear$I(year) ? this.day : 28]);
});

Clazz.newMeth(C$, ['compareTo$java_time_MonthDay','compareTo$O'], function (other) {
var cmp=(this.month - other.month);
if (cmp == 0) {
cmp=(this.day - other.day);
}return cmp;
});

Clazz.newMeth(C$, 'isAfter$java_time_MonthDay', function (other) {
return this.compareTo$java_time_MonthDay(other) > 0;
});

Clazz.newMeth(C$, 'isBefore$java_time_MonthDay', function (other) {
return this.compareTo$java_time_MonthDay(other) < 0;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.MonthDay")) {
var other=obj;
return this.month == other.month && this.day == other.day ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (this.month << 6) + this.day;
});

Clazz.newMeth(C$, 'toString', function () {
return Clazz.new_($I$(12,1).c$$I,[10]).append$S("--").append$S(this.month < 10 ? "0" : "").append$I(this.month).append$S(this.day < 10 ? "-0" : "-").append$I(this.day).toString();
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(13,1).c$$B$O,[13, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
out.writeByte$I(this.month);
out.writeByte$I(this.day);
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var month=$in.readByte$();
var day=$in.readByte$();
return C$.of$I$I(month, day);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.PARSER=Clazz.new_($I$(1,1)).appendLiteral$S("--").appendValue$java_time_temporal_TemporalField$I($I$(2).MONTH_OF_YEAR, 2).appendLiteral$C("-").appendValue$java_time_temporal_TemporalField$I($I$(2).DAY_OF_MONTH, 2).toFormatter$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:53:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
