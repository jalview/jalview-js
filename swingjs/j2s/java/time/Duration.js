(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.util.Collections','java.util.Arrays','java.time.temporal.TemporalUnit','java.time.temporal.ChronoUnit','java.math.BigInteger','java.util.regex.Pattern','java.util.Objects','java.time.temporal.ChronoField',['java.time.Duration','.DurationUnits'],'java.math.BigDecimal','java.math.RoundingMode','StringBuilder','java.time.Ser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Duration", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.time.temporal.TemporalAmount', 'Comparable', 'java.io.Serializable']);
C$.$classes$=[['DurationUnits',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nanos'],'J',['seconds']]
,['O',['ZERO','java.time.Duration','BI_NANOS_PER_SECOND','java.math.BigInteger','PATTERN','java.util.regex.Pattern']]]

Clazz.newMeth(C$, 'ofDays$J', function (days) {
return C$.create$J$I(Math.multiplyExact(days, 86400), 0);
}, 1);

Clazz.newMeth(C$, 'ofHours$J', function (hours) {
return C$.create$J$I(Math.multiplyExact(hours, 3600), 0);
}, 1);

Clazz.newMeth(C$, 'ofMinutes$J', function (minutes) {
return C$.create$J$I(Math.multiplyExact(minutes, 60), 0);
}, 1);

Clazz.newMeth(C$, 'ofSeconds$J', function (seconds) {
return C$.create$J$I(seconds, 0);
}, 1);

Clazz.newMeth(C$, 'ofSeconds$J$J', function (seconds, nanoAdjustment) {
var secs=Math.addExact(seconds, Math.floorDiv(nanoAdjustment, 1000000000));
var nos=(Math.floorMod(nanoAdjustment, 1000000000)|0);
return C$.create$J$I(secs, nos);
}, 1);

Clazz.newMeth(C$, 'ofMillis$J', function (millis) {
var secs=Clazz.toLong(millis/1000);
var mos=((millis % 1000)|0);
if (mos < 0) {
mos+=1000;
secs--;
}return C$.create$J$I(secs, mos * 1000000);
}, 1);

Clazz.newMeth(C$, 'ofNanos$J', function (nanos) {
var secs=Clazz.toLong(nanos/1000000000);
var nos=((nanos % 1000000000)|0);
if (nos < 0) {
nos+=1000000000;
secs--;
}return C$.create$J$I(secs, nos);
}, 1);

Clazz.newMeth(C$, 'of$J$java_time_temporal_TemporalUnit', function (amount, unit) {
return C$.ZERO.plus$J$java_time_temporal_TemporalUnit(amount, unit);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAmount', function (amount) {
$I$(7).requireNonNull$O$S(amount, "amount");
var duration=C$.ZERO;
for (var unit, $unit = amount.getUnits$().iterator$(); $unit.hasNext$()&&((unit=($unit.next$())),1);) {
duration=duration.plus$J$java_time_temporal_TemporalUnit(amount.get$java_time_temporal_TemporalUnit(unit), unit);
}
return duration;
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence', function (text) {
$I$(7).requireNonNull$O$S(text, "text");
var matcher=C$.PATTERN.matcher$CharSequence(text);
if (matcher.matches$()) {
if ("T".equals$O(matcher.group$I(3)) == false ) {
var negate="-".equals$O(matcher.group$I(1));
var dayMatch=matcher.group$I(2);
var hourMatch=matcher.group$I(4);
var minuteMatch=matcher.group$I(5);
var secondMatch=matcher.group$I(6);
var fractionMatch=matcher.group$I(7);
if (dayMatch != null  || hourMatch != null   || minuteMatch != null   || secondMatch != null  ) {
var daysAsSecs=C$.parseNumber$CharSequence$S$I$S(text, dayMatch, 86400, "days");
var hoursAsSecs=C$.parseNumber$CharSequence$S$I$S(text, hourMatch, 3600, "hours");
var minsAsSecs=C$.parseNumber$CharSequence$S$I$S(text, minuteMatch, 60, "minutes");
var seconds=C$.parseNumber$CharSequence$S$I$S(text, secondMatch, 1, "seconds");
var nanos=C$.parseFraction$CharSequence$S$I(text, fractionMatch, seconds < 0 ? -1 : 1);
try {
return C$.create$Z$J$J$J$J$I(negate, daysAsSecs, hoursAsSecs, minsAsSecs, seconds, nanos);
} catch (ex) {
if (Clazz.exceptionOf(ex,"ArithmeticException")){
throw Clazz.new_(Clazz.load('java.time.format.DateTimeParseException').c$$S$CharSequence$I,["Text cannot be parsed to a Duration: overflow", text, 0]).initCause$Throwable(ex);
} else {
throw ex;
}
}
}}}throw Clazz.new_(Clazz.load('java.time.format.DateTimeParseException').c$$S$CharSequence$I,["Text cannot be parsed to a Duration", text, 0]);
}, 1);

Clazz.newMeth(C$, 'parseNumber$CharSequence$S$I$S', function (text, parsed, multiplier, errorText) {
if (parsed == null ) {
return 0;
}try {
var val=Long.parseLong$S(parsed);
return Math.multiplyExact(val, multiplier);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException") || Clazz.exceptionOf(ex,"ArithmeticException")){
throw Clazz.new_(Clazz.load('java.time.format.DateTimeParseException').c$$S$CharSequence$I,["Text cannot be parsed to a Duration: " + errorText, text, 0]).initCause$Throwable(ex);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'parseFraction$CharSequence$S$I', function (text, parsed, negate) {
if (parsed == null  || parsed.length$() == 0 ) {
return 0;
}try {
parsed=(parsed + "000000000").substring$I$I(0, 9);
return Integer.parseInt$S(parsed) * negate;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException") || Clazz.exceptionOf(ex,"ArithmeticException")){
throw Clazz.new_(Clazz.load('java.time.format.DateTimeParseException').c$$S$CharSequence$I,["Text cannot be parsed to a Duration: fraction", text, 0]).initCause$Throwable(ex);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'create$Z$J$J$J$J$I', function (negate, daysAsSecs, hoursAsSecs, minsAsSecs, secs, nanos) {
var seconds=Math.addExact(daysAsSecs, Math.addExact(hoursAsSecs, Math.addExact(minsAsSecs, secs)));
if (negate) {
return C$.ofSeconds$J$J(seconds, nanos).negated$();
}return C$.ofSeconds$J$J(seconds, nanos);
}, 1);

Clazz.newMeth(C$, 'between$java_time_temporal_Temporal$java_time_temporal_Temporal', function (startInclusive, endExclusive) {
try {
return C$.ofNanos$J(startInclusive.until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit(endExclusive, $I$(4).NANOS));
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException") || Clazz.exceptionOf(ex,"ArithmeticException")){
var secs=startInclusive.until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit(endExclusive, $I$(4).SECONDS);
var nanos;
try {
nanos=endExclusive.getLong$java_time_temporal_TemporalField($I$(8).NANO_OF_SECOND) - startInclusive.getLong$java_time_temporal_TemporalField($I$(8).NANO_OF_SECOND);
if (secs > 0 && nanos < 0 ) {
secs++;
} else if (secs < 0 && nanos > 0 ) {
secs--;
}} catch (ex2) {
if (Clazz.exceptionOf(ex2,"java.time.DateTimeException")){
nanos=0;
} else {
throw ex2;
}
}
return C$.ofSeconds$J$J(secs, nanos);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'create$J$I', function (seconds, nanoAdjustment) {
if ((seconds | nanoAdjustment) == 0) {
return C$.ZERO;
}return Clazz.new_(C$.c$$J$I,[seconds, nanoAdjustment]);
}, 1);

Clazz.newMeth(C$, 'c$$J$I', function (seconds, nanos) {
;C$.$init$.apply(this);
this.seconds=seconds;
this.nanos=nanos;
}, 1);

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalUnit', function (unit) {
if (unit === $I$(4).SECONDS ) {
return this.seconds;
} else if (unit === $I$(4).NANOS ) {
return this.nanos;
} else {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}});

Clazz.newMeth(C$, 'getUnits$', function () {
return $I$(9).UNITS;
});

Clazz.newMeth(C$, 'isZero$', function () {
return (this.seconds | this.nanos) == 0;
});

Clazz.newMeth(C$, 'isNegative$', function () {
return this.seconds < 0;
});

Clazz.newMeth(C$, 'getSeconds$', function () {
return this.seconds;
});

Clazz.newMeth(C$, 'getNano$', function () {
return this.nanos;
});

Clazz.newMeth(C$, 'withSeconds$J', function (seconds) {
return C$.create$J$I(seconds, this.nanos);
});

Clazz.newMeth(C$, 'withNanos$I', function (nanoOfSecond) {
$I$(8).NANO_OF_SECOND.checkValidIntValue$J(nanoOfSecond);
return C$.create$J$I(this.seconds, nanoOfSecond);
});

Clazz.newMeth(C$, 'plus$java_time_Duration', function (duration) {
return p$1.plus$J$J.apply(this, [duration.getSeconds$(), duration.getNano$()]);
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
$I$(7).requireNonNull$O$S(unit, "unit");
if (unit === $I$(4).DAYS ) {
return p$1.plus$J$J.apply(this, [Math.multiplyExact(amountToAdd, 86400), 0]);
}if (unit.isDurationEstimated$()) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unit must not have an estimated duration"]);
}if (amountToAdd == 0) {
return this;
}if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
switch (unit) {
case $I$(4).NANOS:
return this.plusNanos$J(amountToAdd);
case $I$(4).MICROS:
return this.plusSeconds$J((Clazz.toLong(amountToAdd/(1000000000))) * 1000).plusNanos$J((amountToAdd % (1000000000)) * 1000);
case $I$(4).MILLIS:
return this.plusMillis$J(amountToAdd);
case $I$(4).SECONDS:
return this.plusSeconds$J(amountToAdd);
}
return this.plusSeconds$J(Math.multiplyExact(unit.getDuration$().seconds, amountToAdd));
}var duration=unit.getDuration$().multipliedBy$J(amountToAdd);
return this.plusSeconds$J(duration.getSeconds$()).plusNanos$J(duration.getNano$());
});

Clazz.newMeth(C$, 'plusDays$J', function (daysToAdd) {
return p$1.plus$J$J.apply(this, [Math.multiplyExact(daysToAdd, 86400), 0]);
});

Clazz.newMeth(C$, 'plusHours$J', function (hoursToAdd) {
return p$1.plus$J$J.apply(this, [Math.multiplyExact(hoursToAdd, 3600), 0]);
});

Clazz.newMeth(C$, 'plusMinutes$J', function (minutesToAdd) {
return p$1.plus$J$J.apply(this, [Math.multiplyExact(minutesToAdd, 60), 0]);
});

Clazz.newMeth(C$, 'plusSeconds$J', function (secondsToAdd) {
return p$1.plus$J$J.apply(this, [secondsToAdd, 0]);
});

Clazz.newMeth(C$, 'plusMillis$J', function (millisToAdd) {
return p$1.plus$J$J.apply(this, [Clazz.toLong(millisToAdd/1000), (millisToAdd % 1000) * 1000000]);
});

Clazz.newMeth(C$, 'plusNanos$J', function (nanosToAdd) {
return p$1.plus$J$J.apply(this, [0, nanosToAdd]);
});

Clazz.newMeth(C$, 'plus$J$J', function (secondsToAdd, nanosToAdd) {
if ((secondsToAdd | nanosToAdd) == 0) {
return this;
}var epochSec=Math.addExact(this.seconds, secondsToAdd);
epochSec=Math.addExact(epochSec, Clazz.toLong(nanosToAdd/1000000000));
nanosToAdd=nanosToAdd % 1000000000;
var nanoAdjustment=this.nanos + nanosToAdd;
return C$.ofSeconds$J$J(epochSec, nanoAdjustment);
}, p$1);

Clazz.newMeth(C$, 'minus$java_time_Duration', function (duration) {
var secsToSubtract=duration.getSeconds$();
var nanosToSubtract=duration.getNano$();
if (secsToSubtract == -9223372036854775808) {
return p$1.plus$J$J.apply(p$1.plus$J$J.apply(this, [9223372036854775807, -nanosToSubtract]), [1, 0]);
}return p$1.plus$J$J.apply(this, [-secsToSubtract, -nanosToSubtract]);
});

Clazz.newMeth(C$, 'minus$J$java_time_temporal_TemporalUnit', function (amountToSubtract, unit) {
return (amountToSubtract == -9223372036854775808 ? this.plus$J$java_time_temporal_TemporalUnit(9223372036854775807, unit).plus$J$java_time_temporal_TemporalUnit(1, unit) : this.plus$J$java_time_temporal_TemporalUnit(-amountToSubtract, unit));
});

Clazz.newMeth(C$, 'minusDays$J', function (daysToSubtract) {
return (daysToSubtract == -9223372036854775808 ? this.plusDays$J(9223372036854775807).plusDays$J(1) : this.plusDays$J(-daysToSubtract));
});

Clazz.newMeth(C$, 'minusHours$J', function (hoursToSubtract) {
return (hoursToSubtract == -9223372036854775808 ? this.plusHours$J(9223372036854775807).plusHours$J(1) : this.plusHours$J(-hoursToSubtract));
});

Clazz.newMeth(C$, 'minusMinutes$J', function (minutesToSubtract) {
return (minutesToSubtract == -9223372036854775808 ? this.plusMinutes$J(9223372036854775807).plusMinutes$J(1) : this.plusMinutes$J(-minutesToSubtract));
});

Clazz.newMeth(C$, 'minusSeconds$J', function (secondsToSubtract) {
return (secondsToSubtract == -9223372036854775808 ? this.plusSeconds$J(9223372036854775807).plusSeconds$J(1) : this.plusSeconds$J(-secondsToSubtract));
});

Clazz.newMeth(C$, 'minusMillis$J', function (millisToSubtract) {
return (millisToSubtract == -9223372036854775808 ? this.plusMillis$J(9223372036854775807).plusMillis$J(1) : this.plusMillis$J(-millisToSubtract));
});

Clazz.newMeth(C$, 'minusNanos$J', function (nanosToSubtract) {
return (nanosToSubtract == -9223372036854775808 ? this.plusNanos$J(9223372036854775807).plusNanos$J(1) : this.plusNanos$J(-nanosToSubtract));
});

Clazz.newMeth(C$, 'multipliedBy$J', function (multiplicand) {
if (multiplicand == 0) {
return C$.ZERO;
}if (multiplicand == 1) {
return this;
}return C$.create$java_math_BigDecimal(p$1.toSeconds.apply(this, []).multiply$java_math_BigDecimal($I$(10).valueOf$J(multiplicand)));
});

Clazz.newMeth(C$, 'dividedBy$J', function (divisor) {
if (divisor == 0) {
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Cannot divide by zero"]);
}if (divisor == 1) {
return this;
}return C$.create$java_math_BigDecimal(p$1.toSeconds.apply(this, []).divide$java_math_BigDecimal$java_math_RoundingMode($I$(10).valueOf$J(divisor), $I$(11).DOWN));
});

Clazz.newMeth(C$, 'toSeconds', function () {
return $I$(10).valueOf$J(this.seconds).add$java_math_BigDecimal($I$(10).valueOf$J$I(this.nanos, 9));
}, p$1);

Clazz.newMeth(C$, 'create$java_math_BigDecimal', function (seconds) {
var nanos=seconds.movePointRight$I(9).toBigIntegerExact$();
var divRem=nanos.divideAndRemainder$java_math_BigInteger(C$.BI_NANOS_PER_SECOND);
if (divRem[0].bitLength$() > 63) {
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Exceeds capacity of Duration: " + nanos]);
}return C$.ofSeconds$J$J(divRem[0].longValue$(), divRem[1].intValue$());
}, 1);

Clazz.newMeth(C$, 'negated$', function () {
return this.multipliedBy$J(-1);
});

Clazz.newMeth(C$, 'abs$', function () {
return this.isNegative$() ? this.negated$() : this;
});

Clazz.newMeth(C$, 'addTo$java_time_temporal_Temporal', function (temporal) {
if (this.seconds != 0) {
temporal=temporal.plus$J$java_time_temporal_TemporalUnit(this.seconds, $I$(4).SECONDS);
}if (this.nanos != 0) {
temporal=temporal.plus$J$java_time_temporal_TemporalUnit(this.nanos, $I$(4).NANOS);
}return temporal;
});

Clazz.newMeth(C$, 'subtractFrom$java_time_temporal_Temporal', function (temporal) {
if (this.seconds != 0) {
temporal=temporal.minus$J$java_time_temporal_TemporalUnit(this.seconds, $I$(4).SECONDS);
}if (this.nanos != 0) {
temporal=temporal.minus$J$java_time_temporal_TemporalUnit(this.nanos, $I$(4).NANOS);
}return temporal;
});

Clazz.newMeth(C$, 'toDays$', function () {
return Clazz.toLong(this.seconds/86400);
});

Clazz.newMeth(C$, 'toHours$', function () {
return Clazz.toLong(this.seconds/3600);
});

Clazz.newMeth(C$, 'toMinutes$', function () {
return Clazz.toLong(this.seconds/60);
});

Clazz.newMeth(C$, 'toMillis$', function () {
var millis=Math.multiplyExact(this.seconds, 1000);
millis=Math.addExact(millis, (this.nanos/1000000|0));
return millis;
});

Clazz.newMeth(C$, 'toNanos$', function () {
var totalNanos=Math.multiplyExact(this.seconds, 1000000000);
totalNanos=Math.addExact(totalNanos, this.nanos);
return totalNanos;
});

Clazz.newMeth(C$, ['compareTo$java_time_Duration','compareTo$O'], function (otherDuration) {
var cmp=Long.compare$J$J(this.seconds, otherDuration.seconds);
if (cmp != 0) {
return cmp;
}return this.nanos - otherDuration.nanos;
});

Clazz.newMeth(C$, 'equals$O', function (otherDuration) {
if (this === otherDuration ) {
return true;
}if (Clazz.instanceOf(otherDuration, "java.time.Duration")) {
var other=otherDuration;
return this.seconds == other.seconds && this.nanos == other.nanos ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (((this.seconds ^ (this.seconds >>> 32))|0)) + (51 * this.nanos);
});

Clazz.newMeth(C$, 'toString', function () {
if (this === C$.ZERO ) {
return "PT0S";
}var hours=Clazz.toLong(this.seconds/3600);
var minutes=((Clazz.toLong((this.seconds % 3600)/60))|0);
var secs=((this.seconds % 60)|0);
var buf=Clazz.new_($I$(12,1).c$$I,[24]);
buf.append$S("PT");
if (hours != 0) {
buf.append$J(hours).append$C("H");
}if (minutes != 0) {
buf.append$I(minutes).append$C("M");
}if (secs == 0 && this.nanos == 0  && buf.length$() > 2 ) {
return buf.toString();
}if (secs < 0 && this.nanos > 0 ) {
if (secs == -1) {
buf.append$S("-0");
} else {
buf.append$I(secs + 1);
}} else {
buf.append$I(secs);
}if (this.nanos > 0) {
var pos=buf.length$();
if (secs < 0) {
buf.append$J(2000000000 - this.nanos);
} else {
buf.append$J(this.nanos + 1000000000);
}while (buf.charAt$I(buf.length$() - 1) == "0"){
buf.setLength$I(buf.length$() - 1);
}
buf.setCharAt$I$C(pos, ".");
}buf.append$C("S");
return buf.toString();
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(13,1).c$$B$O,[1, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
out.writeLong$J(this.seconds);
out.writeInt$I(this.nanos);
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var seconds=$in.readLong$();
var nanos=$in.readInt$();
return C$.ofSeconds$J$J(seconds, nanos);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.ZERO=Clazz.new_(C$.c$$J$I,[0, 0]);
C$.BI_NANOS_PER_SECOND=$I$(5).valueOf$J(1000000000);
C$.PATTERN=$I$(6,"compile$S$I",["([-+]?)P(?:([-+]?[0-9]+)D)?(T(?:([-+]?[0-9]+)H)?(?:([-+]?[0-9]+)M)?(?:([-+]?[0-9]+)(?:[.,]([0-9]{0,9}))?S)?)?", 2]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Duration, "DurationUnits", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['UNITS','java.util.List']]]

C$.$static$=function(){C$.$static$=0;
C$.UNITS=$I$(1,"unmodifiableList$java_util_List",[$I$(2,"asList$OA",[Clazz.array($I$(3), -1, [$I$(4).SECONDS, $I$(4).NANOS])])]);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
