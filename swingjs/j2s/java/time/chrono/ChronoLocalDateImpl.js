(function(){var P$=Clazz.newPackage("java.time.chrono"),p$1={},I$=[[0,'java.time.temporal.ChronoUnit','java.time.temporal.ChronoField','java.util.Objects','StringBuilder']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChronoLocalDateImpl", null, null, ['java.time.chrono.ChronoLocalDate', 'java.time.temporal.Temporal', 'java.time.temporal.TemporalAdjuster', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal', function (chrono, temporal) {
var other=temporal;
if (chrono.equals$O(other.getChronology$()) == false ) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["Chronology mismatch, expected: " + chrono.getId$() + ", actual: " + other.getChronology$().getId$() ]);
}return other;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster', function (adjuster) {
return P$.ChronoLocalDate.superclazz.prototype.with$java_time_temporal_TemporalAdjuster.apply(this, [adjuster]);
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, value) {
return P$.ChronoLocalDate.superclazz.prototype.with$java_time_temporal_TemporalField$J.apply(this, [field, value]);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amount) {
return P$.ChronoLocalDate.superclazz.prototype.plus$java_time_temporal_TemporalAmount.apply(this, [amount]);
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
var f=unit;
switch (f) {
case $I$(1).DAYS:
return this.plusDays$J(amountToAdd);
case $I$(1).WEEKS:
return this.plusDays$J(Math.multiplyExact(amountToAdd, 7));
case $I$(1).MONTHS:
return this.plusMonths$J(amountToAdd);
case $I$(1).YEARS:
return this.plusYears$J(amountToAdd);
case $I$(1).DECADES:
return this.plusYears$J(Math.multiplyExact(amountToAdd, 10));
case $I$(1).CENTURIES:
return this.plusYears$J(Math.multiplyExact(amountToAdd, 100));
case $I$(1).MILLENNIA:
return this.plusYears$J(Math.multiplyExact(amountToAdd, 1000));
case $I$(1).ERAS:
return this.with$java_time_temporal_TemporalField$J($I$(2).ERA, Math.addExact(this.getLong$java_time_temporal_TemporalField($I$(2).ERA), amountToAdd));
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}return P$.ChronoLocalDate.superclazz.prototype.plus$J$java_time_temporal_TemporalUnit.apply(this, [amountToAdd, unit]);
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amount) {
return P$.ChronoLocalDate.superclazz.prototype.minus$java_time_temporal_TemporalAmount.apply(this, [amount]);
});

Clazz.newMeth(C$, 'minus$J$java_time_temporal_TemporalUnit', function (amountToSubtract, unit) {
return P$.ChronoLocalDate.superclazz.prototype.minus$J$java_time_temporal_TemporalUnit.apply(this, [amountToSubtract, unit]);
});

Clazz.newMeth(C$, 'plusWeeks$J', function (weeksToAdd) {
return this.plusDays$J(Math.multiplyExact(weeksToAdd, 7));
});

Clazz.newMeth(C$, 'minusYears$J', function (yearsToSubtract) {
return (yearsToSubtract == -9223372036854775808 ? (this.plusYears$J(9223372036854775807)).plusYears$J(1) : this.plusYears$J(-yearsToSubtract));
});

Clazz.newMeth(C$, 'minusMonths$J', function (monthsToSubtract) {
return (monthsToSubtract == -9223372036854775808 ? (this.plusMonths$J(9223372036854775807)).plusMonths$J(1) : this.plusMonths$J(-monthsToSubtract));
});

Clazz.newMeth(C$, 'minusWeeks$J', function (weeksToSubtract) {
return (weeksToSubtract == -9223372036854775808 ? (this.plusWeeks$J(9223372036854775807)).plusWeeks$J(1) : this.plusWeeks$J(-weeksToSubtract));
});

Clazz.newMeth(C$, 'minusDays$J', function (daysToSubtract) {
return (daysToSubtract == -9223372036854775808 ? (this.plusDays$J(9223372036854775807)).plusDays$J(1) : this.plusDays$J(-daysToSubtract));
});

Clazz.newMeth(C$, 'until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit', function (endExclusive, unit) {
$I$(3).requireNonNull$O$S(endExclusive, "endExclusive");
var end=this.getChronology$().date$java_time_temporal_TemporalAccessor(endExclusive);
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
switch (unit) {
case $I$(1).DAYS:
return p$1.daysUntil$java_time_chrono_ChronoLocalDate.apply(this, [end]);
case $I$(1).WEEKS:
return Clazz.toLong(p$1.daysUntil$java_time_chrono_ChronoLocalDate.apply(this, [end])/7);
case $I$(1).MONTHS:
return p$1.monthsUntil$java_time_chrono_ChronoLocalDate.apply(this, [end]);
case $I$(1).YEARS:
return Clazz.toLong(p$1.monthsUntil$java_time_chrono_ChronoLocalDate.apply(this, [end])/12);
case $I$(1).DECADES:
return Clazz.toLong(p$1.monthsUntil$java_time_chrono_ChronoLocalDate.apply(this, [end])/120);
case $I$(1).CENTURIES:
return Clazz.toLong(p$1.monthsUntil$java_time_chrono_ChronoLocalDate.apply(this, [end])/1200);
case $I$(1).MILLENNIA:
return Clazz.toLong(p$1.monthsUntil$java_time_chrono_ChronoLocalDate.apply(this, [end])/12000);
case $I$(1).ERAS:
return end.getLong$java_time_temporal_TemporalField($I$(2).ERA) - this.getLong$java_time_temporal_TemporalField($I$(2).ERA);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}$I$(3).requireNonNull$O$S(unit, "unit");
return unit.between$java_time_temporal_Temporal$java_time_temporal_Temporal(this, end);
});

Clazz.newMeth(C$, 'daysUntil$java_time_chrono_ChronoLocalDate', function (end) {
return end.toEpochDay$() - this.toEpochDay$();
}, p$1);

Clazz.newMeth(C$, 'monthsUntil$java_time_chrono_ChronoLocalDate', function (end) {
var range=this.getChronology$().range$java_time_temporal_ChronoField($I$(2).MONTH_OF_YEAR);
if (range.getMaximum$() != 12) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["ChronoLocalDateImpl only supports Chronologies with 12 months per year"]);
}var packed1=this.getLong$java_time_temporal_TemporalField($I$(2).PROLEPTIC_MONTH) * 32 + this.get$java_time_temporal_TemporalField($I$(2).DAY_OF_MONTH);
var packed2=end.getLong$java_time_temporal_TemporalField($I$(2).PROLEPTIC_MONTH) * 32 + end.get$java_time_temporal_TemporalField($I$(2).DAY_OF_MONTH);
return Clazz.toLong((packed2 - packed1)/32);
}, p$1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.chrono.ChronoLocalDate")) {
return this.compareTo$java_time_chrono_ChronoLocalDate(obj) == 0;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var epDay=this.toEpochDay$();
return this.getChronology$().hashCode$() ^ (((epDay ^ (epDay >>> 32))|0));
});

Clazz.newMeth(C$, 'toString', function () {
var yoe=this.getLong$java_time_temporal_TemporalField($I$(2).YEAR_OF_ERA);
var moy=this.getLong$java_time_temporal_TemporalField($I$(2).MONTH_OF_YEAR);
var dom=this.getLong$java_time_temporal_TemporalField($I$(2).DAY_OF_MONTH);
var buf=Clazz.new_($I$(4,1).c$$I,[30]);
buf.append$S(this.getChronology$().toString()).append$S(" ").append$O(this.getEra$()).append$S(" ").append$J(yoe).append$S(moy < 10 ? "-0" : "-").append$J(moy).append$S(dom < 10 ? "-0" : "-").append$J(dom);
return buf.toString();
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
