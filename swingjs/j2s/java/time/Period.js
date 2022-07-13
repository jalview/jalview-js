(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.util.regex.Pattern','java.util.Collections','java.util.Arrays','java.time.temporal.TemporalUnit','java.time.temporal.ChronoUnit','java.time.chrono.IsoChronology','java.util.Objects','java.time.temporal.TemporalQueries','StringBuilder','java.time.Ser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Period", null, null, ['java.time.chrono.ChronoPeriod', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['years','months','days']]
,['O',['ZERO','java.time.Period','PATTERN','java.util.regex.Pattern','SUPPORTED_UNITS','java.util.List']]]

Clazz.newMeth(C$, 'ofYears$I', function (years) {
return C$.create$I$I$I(years, 0, 0);
}, 1);

Clazz.newMeth(C$, 'ofMonths$I', function (months) {
return C$.create$I$I$I(0, months, 0);
}, 1);

Clazz.newMeth(C$, 'ofWeeks$I', function (weeks) {
return C$.create$I$I$I(0, 0, Math.multiplyExact(weeks, 7));
}, 1);

Clazz.newMeth(C$, 'ofDays$I', function (days) {
return C$.create$I$I$I(0, 0, days);
}, 1);

Clazz.newMeth(C$, 'of$I$I$I', function (years, months, days) {
return C$.create$I$I$I(years, months, days);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAmount', function (amount) {
if (Clazz.instanceOf(amount, "java.time.Period")) {
return amount;
}if (Clazz.instanceOf(amount, "java.time.chrono.ChronoPeriod")) {
if ($I$(6).INSTANCE.equals$O((amount).getChronology$()) == false ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Period requires ISO chronology: " + amount]);
}}$I$(7).requireNonNull$O$S(amount, "amount");
var years=0;
var months=0;
var days=0;
for (var unit, $unit = amount.getUnits$().iterator$(); $unit.hasNext$()&&((unit=($unit.next$())),1);) {
var unitAmount=amount.get$java_time_temporal_TemporalUnit(unit);
if (unit === $I$(5).YEARS ) {
years=Math.toIntExact(unitAmount);
} else if (unit === $I$(5).MONTHS ) {
months=Math.toIntExact(unitAmount);
} else if (unit === $I$(5).DAYS ) {
days=Math.toIntExact(unitAmount);
} else {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unit must be Years, Months or Days, but was " + unit]);
}}
return C$.create$I$I$I(years, months, days);
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence', function (text) {
$I$(7).requireNonNull$O$S(text, "text");
var matcher=C$.PATTERN.matcher$CharSequence(text);
if (matcher.matches$()) {
var negate=("-".equals$O(matcher.group$I(1)) ? -1 : 1);
var yearMatch=matcher.group$I(2);
var monthMatch=matcher.group$I(3);
var weekMatch=matcher.group$I(4);
var dayMatch=matcher.group$I(5);
if (yearMatch != null  || monthMatch != null   || dayMatch != null   || weekMatch != null  ) {
try {
var years=C$.parseNumber$CharSequence$S$I(text, yearMatch, negate);
var months=C$.parseNumber$CharSequence$S$I(text, monthMatch, negate);
var weeks=C$.parseNumber$CharSequence$S$I(text, weekMatch, negate);
var days=C$.parseNumber$CharSequence$S$I(text, dayMatch, negate);
days=Math.addExact(days, Math.multiplyExact(weeks, 7));
return C$.create$I$I$I(years, months, days);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
throw Clazz.new_(Clazz.load('java.time.format.DateTimeParseException').c$$S$CharSequence$I$Throwable,["Text cannot be parsed to a Period", text, 0, ex]);
} else {
throw ex;
}
}
}}throw Clazz.new_(Clazz.load('java.time.format.DateTimeParseException').c$$S$CharSequence$I,["Text cannot be parsed to a Period", text, 0]);
}, 1);

Clazz.newMeth(C$, 'parseNumber$CharSequence$S$I', function (text, str, negate) {
if (str == null ) {
return 0;
}var val=Integer.parseInt$S(str);
try {
return Math.multiplyExact(val, negate);
} catch (ex) {
if (Clazz.exceptionOf(ex,"ArithmeticException")){
throw Clazz.new_(Clazz.load('java.time.format.DateTimeParseException').c$$S$CharSequence$I$Throwable,["Text cannot be parsed to a Period", text, 0, ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'between$java_time_LocalDate$java_time_LocalDate', function (startDateInclusive, endDateExclusive) {
return startDateInclusive.until$java_time_chrono_ChronoLocalDate(endDateExclusive);
}, 1);

Clazz.newMeth(C$, 'create$I$I$I', function (years, months, days) {
if ((years | months | days ) == 0) {
return C$.ZERO;
}return Clazz.new_(C$.c$$I$I$I,[years, months, days]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (years, months, days) {
;C$.$init$.apply(this);
this.years=years;
this.months=months;
this.days=days;
}, 1);

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalUnit', function (unit) {
if (unit === $I$(5).YEARS ) {
return this.getYears$();
} else if (unit === $I$(5).MONTHS ) {
return this.getMonths$();
} else if (unit === $I$(5).DAYS ) {
return this.getDays$();
} else {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}});

Clazz.newMeth(C$, 'getUnits$', function () {
return C$.SUPPORTED_UNITS;
});

Clazz.newMeth(C$, 'getChronology$', function () {
return $I$(6).INSTANCE;
});

Clazz.newMeth(C$, 'isZero$', function () {
return (this === C$.ZERO );
});

Clazz.newMeth(C$, 'isNegative$', function () {
return this.years < 0 || this.months < 0  || this.days < 0 ;
});

Clazz.newMeth(C$, 'getYears$', function () {
return this.years;
});

Clazz.newMeth(C$, 'getMonths$', function () {
return this.months;
});

Clazz.newMeth(C$, 'getDays$', function () {
return this.days;
});

Clazz.newMeth(C$, 'withYears$I', function (years) {
if (years == this.years) {
return this;
}return C$.create$I$I$I(years, this.months, this.days);
});

Clazz.newMeth(C$, 'withMonths$I', function (months) {
if (months == this.months) {
return this;
}return C$.create$I$I$I(this.years, months, this.days);
});

Clazz.newMeth(C$, 'withDays$I', function (days) {
if (days == this.days) {
return this;
}return C$.create$I$I$I(this.years, this.months, days);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amountToAdd) {
var isoAmount=C$.from$java_time_temporal_TemporalAmount(amountToAdd);
return C$.create$I$I$I(Math.addExact(this.years, isoAmount.years), Math.addExact(this.months, isoAmount.months), Math.addExact(this.days, isoAmount.days));
});

Clazz.newMeth(C$, 'plusYears$J', function (yearsToAdd) {
if (yearsToAdd == 0) {
return this;
}return C$.create$I$I$I(Math.toIntExact(Math.addExact(this.years, yearsToAdd)), this.months, this.days);
});

Clazz.newMeth(C$, 'plusMonths$J', function (monthsToAdd) {
if (monthsToAdd == 0) {
return this;
}return C$.create$I$I$I(this.years, Math.toIntExact(Math.addExact(this.months, monthsToAdd)), this.days);
});

Clazz.newMeth(C$, 'plusDays$J', function (daysToAdd) {
if (daysToAdd == 0) {
return this;
}return C$.create$I$I$I(this.years, this.months, Math.toIntExact(Math.addExact(this.days, daysToAdd)));
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amountToSubtract) {
var isoAmount=C$.from$java_time_temporal_TemporalAmount(amountToSubtract);
return C$.create$I$I$I(Math.subtractExact(this.years, isoAmount.years), Math.subtractExact(this.months, isoAmount.months), Math.subtractExact(this.days, isoAmount.days));
});

Clazz.newMeth(C$, 'minusYears$J', function (yearsToSubtract) {
return (yearsToSubtract == -9223372036854775808 ? this.plusYears$J(9223372036854775807).plusYears$J(1) : this.plusYears$J(-yearsToSubtract));
});

Clazz.newMeth(C$, 'minusMonths$J', function (monthsToSubtract) {
return (monthsToSubtract == -9223372036854775808 ? this.plusMonths$J(9223372036854775807).plusMonths$J(1) : this.plusMonths$J(-monthsToSubtract));
});

Clazz.newMeth(C$, 'minusDays$J', function (daysToSubtract) {
return (daysToSubtract == -9223372036854775808 ? this.plusDays$J(9223372036854775807).plusDays$J(1) : this.plusDays$J(-daysToSubtract));
});

Clazz.newMeth(C$, 'multipliedBy$I', function (scalar) {
if (this === C$.ZERO  || scalar == 1 ) {
return this;
}return C$.create$I$I$I(Math.multiplyExact(this.years, scalar), Math.multiplyExact(this.months, scalar), Math.multiplyExact(this.days, scalar));
});

Clazz.newMeth(C$, 'negated$', function () {
return this.multipliedBy$I(-1);
});

Clazz.newMeth(C$, 'normalized$', function () {
var totalMonths=this.toTotalMonths$();
var splitYears=Clazz.toLong(totalMonths/12);
var splitMonths=((totalMonths % 12)|0);
if (splitYears == this.years && splitMonths == this.months ) {
return this;
}return C$.create$I$I$I(Math.toIntExact(splitYears), splitMonths, this.days);
});

Clazz.newMeth(C$, 'toTotalMonths$', function () {
return this.years * 12 + this.months;
});

Clazz.newMeth(C$, 'addTo$java_time_temporal_Temporal', function (temporal) {
p$1.validateChrono$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
if (this.months == 0) {
if (this.years != 0) {
temporal=temporal.plus$J$java_time_temporal_TemporalUnit(this.years, $I$(5).YEARS);
}} else {
var totalMonths=this.toTotalMonths$();
if (totalMonths != 0) {
temporal=temporal.plus$J$java_time_temporal_TemporalUnit(totalMonths, $I$(5).MONTHS);
}}if (this.days != 0) {
temporal=temporal.plus$J$java_time_temporal_TemporalUnit(this.days, $I$(5).DAYS);
}return temporal;
});

Clazz.newMeth(C$, 'subtractFrom$java_time_temporal_Temporal', function (temporal) {
p$1.validateChrono$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
if (this.months == 0) {
if (this.years != 0) {
temporal=temporal.minus$J$java_time_temporal_TemporalUnit(this.years, $I$(5).YEARS);
}} else {
var totalMonths=this.toTotalMonths$();
if (totalMonths != 0) {
temporal=temporal.minus$J$java_time_temporal_TemporalUnit(totalMonths, $I$(5).MONTHS);
}}if (this.days != 0) {
temporal=temporal.minus$J$java_time_temporal_TemporalUnit(this.days, $I$(5).DAYS);
}return temporal;
});

Clazz.newMeth(C$, 'validateChrono$java_time_temporal_TemporalAccessor', function (temporal) {
$I$(7).requireNonNull$O$S(temporal, "temporal");
var temporalChrono=temporal.query$java_time_temporal_TemporalQuery($I$(8).chronology$());
if (temporalChrono != null  && $I$(6).INSTANCE.equals$O(temporalChrono) == false  ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Chronology mismatch, expected: ISO, actual: " + temporalChrono.getId$()]);
}}, p$1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.Period")) {
var other=obj;
return this.years == other.years && this.months == other.months  && this.days == other.days ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.years + Integer.rotateLeft$I$I(this.months, 8) + Integer.rotateLeft$I$I(this.days, 16) ;
});

Clazz.newMeth(C$, 'toString', function () {
if (this === C$.ZERO ) {
return "P0D";
} else {
var buf=Clazz.new_($I$(9,1));
buf.append$C("P");
if (this.years != 0) {
buf.append$I(this.years).append$C("Y");
}if (this.months != 0) {
buf.append$I(this.months).append$C("M");
}if (this.days != 0) {
buf.append$I(this.days).append$C("D");
}return buf.toString();
}});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(10,1).c$$B$O,[14, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
out.writeInt$I(this.years);
out.writeInt$I(this.months);
out.writeInt$I(this.days);
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var years=$in.readInt$();
var months=$in.readInt$();
var days=$in.readInt$();
return C$.of$I$I$I(years, months, days);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.ZERO=Clazz.new_(C$.c$$I$I$I,[0, 0, 0]);
C$.PATTERN=$I$(1,"compile$S$I",["([-+]?)P(?:([-+]?[0-9]+)Y)?(?:([-+]?[0-9]+)M)?(?:([-+]?[0-9]+)W)?(?:([-+]?[0-9]+)D)?", 2]);
C$.SUPPORTED_UNITS=$I$(2,"unmodifiableList$java_util_List",[$I$(3,"asList$OA",[Clazz.array($I$(4), -1, [$I$(5).YEARS, $I$(5).MONTHS, $I$(5).DAYS])])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:53:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
