(function(){var P$=Clazz.newPackage("java.time.chrono"),p$1={},I$=[[0,'java.util.Collections','java.util.Arrays','java.time.temporal.TemporalUnit','java.time.temporal.ChronoUnit','java.util.Objects','java.time.temporal.ChronoField','java.time.temporal.TemporalQueries','StringBuilder','java.time.chrono.Ser','java.time.chrono.Chronology']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChronoPeriodImpl", null, null, ['java.time.chrono.ChronoPeriod', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['years','months','days'],'O',['chrono','java.time.chrono.Chronology']]
,['O',['SUPPORTED_UNITS','java.util.List']]]

Clazz.newMeth(C$, 'c$$java_time_chrono_Chronology$I$I$I', function (chrono, years, months, days) {
;C$.$init$.apply(this);
$I$(5).requireNonNull$O$S(chrono, "chrono");
this.chrono=chrono;
this.years=years;
this.months=months;
this.days=days;
}, 1);

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalUnit', function (unit) {
if (unit === $I$(4).YEARS ) {
return this.years;
} else if (unit === $I$(4).MONTHS ) {
return this.months;
} else if (unit === $I$(4).DAYS ) {
return this.days;
} else {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}});

Clazz.newMeth(C$, 'getUnits$', function () {
return C$.SUPPORTED_UNITS;
});

Clazz.newMeth(C$, 'getChronology$', function () {
return this.chrono;
});

Clazz.newMeth(C$, 'isZero$', function () {
return this.years == 0 && this.months == 0  && this.days == 0 ;
});

Clazz.newMeth(C$, 'isNegative$', function () {
return this.years < 0 || this.months < 0  || this.days < 0 ;
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amountToAdd) {
var amount=p$1.validateAmount$java_time_temporal_TemporalAmount.apply(this, [amountToAdd]);
return Clazz.new_(C$.c$$java_time_chrono_Chronology$I$I$I,[this.chrono, Math.addExact(this.years, amount.years), Math.addExact(this.months, amount.months), Math.addExact(this.days, amount.days)]);
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amountToSubtract) {
var amount=p$1.validateAmount$java_time_temporal_TemporalAmount.apply(this, [amountToSubtract]);
return Clazz.new_(C$.c$$java_time_chrono_Chronology$I$I$I,[this.chrono, Math.subtractExact(this.years, amount.years), Math.subtractExact(this.months, amount.months), Math.subtractExact(this.days, amount.days)]);
});

Clazz.newMeth(C$, 'validateAmount$java_time_temporal_TemporalAmount', function (amount) {
$I$(5).requireNonNull$O$S(amount, "amount");
if (Clazz.instanceOf(amount, "java.time.chrono.ChronoPeriodImpl") == false ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unable to obtain ChronoPeriod from TemporalAmount: " + amount.getClass$()]);
}var period=amount;
if (this.chrono.equals$O(period.getChronology$()) == false ) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["Chronology mismatch, expected: " + this.chrono.getId$() + ", actual: " + period.getChronology$().getId$() ]);
}return period;
}, p$1);

Clazz.newMeth(C$, 'multipliedBy$I', function (scalar) {
if (this.isZero$() || scalar == 1 ) {
return this;
}return Clazz.new_(C$.c$$java_time_chrono_Chronology$I$I$I,[this.chrono, Math.multiplyExact(this.years, scalar), Math.multiplyExact(this.months, scalar), Math.multiplyExact(this.days, scalar)]);
});

Clazz.newMeth(C$, 'normalized$', function () {
var monthRange=p$1.monthRange.apply(this, []);
if (monthRange > 0) {
var totalMonths=this.years * monthRange + this.months;
var splitYears=Clazz.toLong(totalMonths/monthRange);
var splitMonths=((totalMonths % monthRange)|0);
if (splitYears == this.years && splitMonths == this.months ) {
return this;
}return Clazz.new_(C$.c$$java_time_chrono_Chronology$I$I$I,[this.chrono, Math.toIntExact(splitYears), splitMonths, this.days]);
}return this;
});

Clazz.newMeth(C$, 'monthRange', function () {
var startRange=this.chrono.range$java_time_temporal_ChronoField($I$(6).MONTH_OF_YEAR);
if (startRange.isFixed$() && startRange.isIntValue$() ) {
return startRange.getMaximum$() - startRange.getMinimum$() + 1;
}return -1;
}, p$1);

Clazz.newMeth(C$, 'addTo$java_time_temporal_Temporal', function (temporal) {
p$1.validateChrono$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
if (this.months == 0) {
if (this.years != 0) {
temporal=temporal.plus$J$java_time_temporal_TemporalUnit(this.years, $I$(4).YEARS);
}} else {
var monthRange=p$1.monthRange.apply(this, []);
if (monthRange > 0) {
temporal=temporal.plus$J$java_time_temporal_TemporalUnit(this.years * monthRange + this.months, $I$(4).MONTHS);
} else {
if (this.years != 0) {
temporal=temporal.plus$J$java_time_temporal_TemporalUnit(this.years, $I$(4).YEARS);
}temporal=temporal.plus$J$java_time_temporal_TemporalUnit(this.months, $I$(4).MONTHS);
}}if (this.days != 0) {
temporal=temporal.plus$J$java_time_temporal_TemporalUnit(this.days, $I$(4).DAYS);
}return temporal;
});

Clazz.newMeth(C$, 'subtractFrom$java_time_temporal_Temporal', function (temporal) {
p$1.validateChrono$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
if (this.months == 0) {
if (this.years != 0) {
temporal=temporal.minus$J$java_time_temporal_TemporalUnit(this.years, $I$(4).YEARS);
}} else {
var monthRange=p$1.monthRange.apply(this, []);
if (monthRange > 0) {
temporal=temporal.minus$J$java_time_temporal_TemporalUnit(this.years * monthRange + this.months, $I$(4).MONTHS);
} else {
if (this.years != 0) {
temporal=temporal.minus$J$java_time_temporal_TemporalUnit(this.years, $I$(4).YEARS);
}temporal=temporal.minus$J$java_time_temporal_TemporalUnit(this.months, $I$(4).MONTHS);
}}if (this.days != 0) {
temporal=temporal.minus$J$java_time_temporal_TemporalUnit(this.days, $I$(4).DAYS);
}return temporal;
});

Clazz.newMeth(C$, 'validateChrono$java_time_temporal_TemporalAccessor', function (temporal) {
$I$(5).requireNonNull$O$S(temporal, "temporal");
var temporalChrono=temporal.query$java_time_temporal_TemporalQuery($I$(7).chronology$());
if (temporalChrono != null  && this.chrono.equals$O(temporalChrono) == false  ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Chronology mismatch, expected: " + this.chrono.getId$() + ", actual: " + temporalChrono.getId$() ]);
}}, p$1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.chrono.ChronoPeriodImpl")) {
var other=obj;
return this.years == other.years && this.months == other.months  && this.days == other.days  && this.chrono.equals$O(other.chrono) ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (this.years + Integer.rotateLeft$I$I(this.months, 8) + Integer.rotateLeft$I$I(this.days, 16) ) ^ this.chrono.hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
if (this.isZero$()) {
return this.getChronology$().toString() + " P0D";
} else {
var buf=Clazz.new_($I$(8,1));
buf.append$S(this.getChronology$().toString()).append$C(" ").append$C("P");
if (this.years != 0) {
buf.append$I(this.years).append$C("Y");
}if (this.months != 0) {
buf.append$I(this.months).append$C("M");
}if (this.days != 0) {
buf.append$I(this.days).append$C("D");
}return buf.toString();
}});

Clazz.newMeth(C$, 'writeReplace$', function () {
return Clazz.new_($I$(9,1).c$$B$O,[9, this]);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
out.writeUTF$S(this.chrono.getId$());
out.writeInt$I(this.years);
out.writeInt$I(this.months);
out.writeInt$I(this.days);
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var chrono=$I$(10,"of$S",[$in.readUTF$()]);
var years=$in.readInt$();
var months=$in.readInt$();
var days=$in.readInt$();
return Clazz.new_(C$.c$$java_time_chrono_Chronology$I$I$I,[chrono, years, months, days]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.SUPPORTED_UNITS=$I$(1,"unmodifiableList$java_util_List",[$I$(2,"asList$OA",[Clazz.array($I$(3), -1, [$I$(4).YEARS, $I$(4).MONTHS, $I$(4).DAYS])])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
