(function(){var P$=Clazz.newPackage("org.apache.xerces.jaxp.datatype"),I$=[[0,'org.apache.xerces.jaxp.datatype.DurationImpl','org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DatatypeFactoryImpl", null, 'javax.xml.datatype.DatatypeFactory');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'newDuration$S', function (lexicalRepresentation) {
return Clazz.new_($I$(1).c$$S,[lexicalRepresentation]);
});

Clazz.newMeth(C$, 'newDuration$J', function (durationInMilliseconds) {
return Clazz.new_($I$(1).c$$J,[durationInMilliseconds]);
});

Clazz.newMeth(C$, 'newDuration$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigDecimal', function (isPositive, years, months, days, hours, minutes, seconds) {
return Clazz.new_($I$(1).c$$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigDecimal,[isPositive, years, months, days, hours, minutes, seconds]);
});

Clazz.newMeth(C$, 'newXMLGregorianCalendar$', function () {
return Clazz.new_($I$(2));
});

Clazz.newMeth(C$, 'newXMLGregorianCalendar$S', function (lexicalRepresentation) {
return Clazz.new_($I$(2).c$$S,[lexicalRepresentation]);
});

Clazz.newMeth(C$, 'newXMLGregorianCalendar$java_util_GregorianCalendar', function (cal) {
return Clazz.new_($I$(2).c$$java_util_GregorianCalendar,[cal]);
});

Clazz.newMeth(C$, 'newXMLGregorianCalendar$I$I$I$I$I$I$I$I', function (year, month, day, hour, minute, second, millisecond, timezone) {
return $I$(2).createDateTime$I$I$I$I$I$I$I$I(year, month, day, hour, minute, second, millisecond, timezone);
});

Clazz.newMeth(C$, 'newXMLGregorianCalendar$java_math_BigInteger$I$I$I$I$I$java_math_BigDecimal$I', function (year, month, day, hour, minute, second, fractionalSecond, timezone) {
return Clazz.new_($I$(2).c$$java_math_BigInteger$I$I$I$I$I$java_math_BigDecimal$I,[year, month, day, hour, minute, second, fractionalSecond, timezone]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
