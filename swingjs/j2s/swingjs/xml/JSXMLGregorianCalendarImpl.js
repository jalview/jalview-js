(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[[0,'javax.xml.datatype.DatatypeConstants']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSXMLGregorianCalendarImpl", null, 'org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.xmlSchema=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setXMLSchemaType$S', function (name) {
switch (name) {
case "dateTime":
this.xmlSchema=$I$(1).DATETIME;
break;
case "time":
this.xmlSchema=$I$(1).TIME;
break;
case "date":
this.xmlSchema=$I$(1).DATE;
break;
case "gYearMonth":
this.xmlSchema=$I$(1).GYEARMONTH;
break;
case "gMonthDay":
this.xmlSchema=$I$(1).GMONTHDAY;
break;
case "gYear":
this.xmlSchema=$I$(1).GYEAR;
break;
case "gMonth":
this.xmlSchema=$I$(1).GMONTH;
break;
case "gDay":
this.xmlSchema=$I$(1).GDAY;
break;
case "duration":
this.xmlSchema=$I$(1).DURATION;
break;
case "dayTimeDuration":
this.xmlSchema=$I$(1).DURATION_DAYTIME;
break;
case "yearMonthDuration":
this.xmlSchema=$I$(1).DURATION_YEARMONTH;
break;
}
});

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (lexicalRepresentation) {
C$.superclazz.c$$S.apply(this, [lexicalRepresentation]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_GregorianCalendar', function (cal) {
C$.superclazz.c$$java_util_GregorianCalendar.apply(this, [cal]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger$I$I$I$I$I$java_math_BigDecimal$I', function (year, month, day, hour, minute, second, fractionalSecond, timezone) {
C$.superclazz.c$$java_math_BigInteger$I$I$I$I$I$java_math_BigDecimal$I.apply(this, [year, month, day, hour, minute, second, fractionalSecond, timezone]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$I$I$I', function (year, month, day, hour, minute, second, millisecond, timezone) {
C$.superclazz.c$$I$I$I$I$I$I$I$I.apply(this, [year, month, day, hour, minute, second, millisecond, timezone]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getXMLSchemaType$', function () {
return (this.xmlSchema == null  ? C$.superclazz.prototype.getXMLSchemaType$.apply(this, []) : this.xmlSchema);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
