(function(){var P$=Clazz.newPackage("javax.xml.datatype"),p$1={},I$=[[0,'java.math.BigInteger','java.math.BigDecimal','swingjs.api.Interface','javax.xml.datatype.DatatypeConstants']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DatatypeFactory");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'bigI$I', function (x) {
return (x == -2147483648 ? null : $I$(1).valueOf$J(x));
}, p$1);

Clazz.newMeth(C$, 'bigD$I', function (x) {
return (x == -2147483648 ? null : $I$(2).valueOf$J(x));
}, p$1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newInstance$', function () {
return $I$(3).getInstance$S$Z("swingjs.xml.JSJAXBDatatypeFactory", false);
}, 1);

Clazz.newMeth(C$, 'newDuration$Z$I$I$I$I$I$I', function (isPositive, years, months, days, hours, minutes, seconds) {
return this.newDuration$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigDecimal(isPositive, p$1.bigI$I.apply(this, [years]), p$1.bigI$I.apply(this, [months]), p$1.bigI$I.apply(this, [days]), p$1.bigI$I.apply(this, [hours]), p$1.bigI$I.apply(this, [minutes]), p$1.bigD$I.apply(this, [seconds]));
});

Clazz.newMeth(C$, 'newDurationDayTime$S', function (s) {
if (s == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["DatatypeFactory.newDurationDayTime null parameter"]);
}return this.newDuration$S(s);
});

Clazz.newMeth(C$, 'newDurationDayTime$J', function (ms) {
return this.newDuration$J(ms);
});

Clazz.newMeth(C$, 'newDurationDayTime$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger', function (isPositive, day, hour, minute, second) {
return this.newDuration$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigDecimal(isPositive, null, null, day, hour, minute, (second == null  ? null : Clazz.new_($I$(2).c$$java_math_BigInteger,[second])));
});

Clazz.newMeth(C$, 'newDurationDayTime$Z$I$I$I$I', function (isPositive, day, hour, minute, second) {
return this.newDurationDayTime$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger(isPositive, p$1.bigI$I.apply(this, [day]), p$1.bigI$I.apply(this, [hour]), p$1.bigI$I.apply(this, [minute]), p$1.bigI$I.apply(this, [second]));
});

Clazz.newMeth(C$, 'newDurationYearMonth$S', function (s) {
if (s == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["DatatypeFactory.newDerationYearMonth null value"]);
}return this.newDuration$S(s);
});

Clazz.newMeth(C$, 'newDurationYearMonth$J', function (ms) {
var d=this.newDuration$J(ms);
var years=d.getField$javax_xml_datatype_DatatypeConstants_Field($I$(4).YEARS);
var months=d.getField$javax_xml_datatype_DatatypeConstants_Field($I$(4).MONTHS);
return this.newDurationYearMonth$Z$java_math_BigInteger$java_math_BigInteger((d.getSign$() == -1), years, months);
});

Clazz.newMeth(C$, 'newDurationYearMonth$Z$java_math_BigInteger$java_math_BigInteger', function (isPositive, year, month) {
return this.newDuration$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigDecimal(isPositive, year == null  ? $I$(1).ZERO : year, month == null  ? $I$(1).ZERO : month, null, null, null, null);
});

Clazz.newMeth(C$, 'newDurationYearMonth$Z$I$I', function (isPositive, year, month) {
return this.newDurationYearMonth$Z$java_math_BigInteger$java_math_BigInteger(isPositive, p$1.bigI$I.apply(this, [year]), p$1.bigI$I.apply(this, [month]));
});

Clazz.newMeth(C$, 'newXMLGregorianCalendarDate$I$I$I$I', function (year, month, day, timezone) {
return this.newXMLGregorianCalendar$I$I$I$I$I$I$I$I(year, month, day, -2147483648, -2147483648, -2147483648, -2147483648, timezone);
});

Clazz.newMeth(C$, 'newXMLGregorianCalendarTime$I$I$I$I', function (hours, minutes, seconds, timezone) {
return this.newXMLGregorianCalendar$I$I$I$I$I$I$I$I(-2147483648, -2147483648, -2147483648, hours, minutes, seconds, -2147483648, timezone);
});

Clazz.newMeth(C$, 'newXMLGregorianCalendarTime$I$I$I$java_math_BigDecimal$I', function (hours, minutes, seconds, fractionalSeconds, timezone) {
return this.newXMLGregorianCalendar$java_math_BigInteger$I$I$I$I$I$java_math_BigDecimal$I(null, -2147483648, -2147483648, hours, minutes, seconds, fractionalSeconds, timezone);
});

Clazz.newMeth(C$, 'newXMLGregorianCalendarTime$I$I$I$I$I', function (hours, minutes, seconds, milliseconds, timezone) {
var bdMS=null;
if (milliseconds != -2147483648) {
if (milliseconds < 0 || milliseconds > 1000 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["milliseconds must be between 0 and 1000"]);
}bdMS=p$1.bigD$I.apply(this, [milliseconds]);
}return this.newXMLGregorianCalendarTime$I$I$I$java_math_BigDecimal$I(hours, minutes, seconds, bdMS, timezone);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:29 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
