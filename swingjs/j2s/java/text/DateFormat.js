(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'java.util.HashMap','java.util.Date','StringBuffer','java.text.DontCareFieldPosition','java.text.ParsePosition','java.util.Locale','java.text.SimpleDateFormat']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DateFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.text.Format');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.calendar=null;
this.numberFormat=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'format$O$StringBuffer$java_text_FieldPosition', function (obj, toAppendTo, fieldPosition) {
if (Clazz.instanceOf(obj, "java.util.Date")) return this.format$java_util_Date$StringBuffer$java_text_FieldPosition(obj, toAppendTo, fieldPosition);
 else if (Clazz.instanceOf(obj, "java.lang.Number")) return this.format$java_util_Date$StringBuffer$java_text_FieldPosition(Clazz.new_($I$(2).c$$J,[(obj).longValue$()]), toAppendTo, fieldPosition);
 else throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot format given Object as a Date"]);
});

Clazz.newMeth(C$, 'format$java_util_Date', function (date) {
return this.format$java_util_Date$StringBuffer$java_text_FieldPosition(date, Clazz.new_($I$(3)), $I$(4).INSTANCE).toString();
});

Clazz.newMeth(C$, 'parse$S', function (source) {
var pos=Clazz.new_($I$(5).c$$I,[0]);
var result=this.parse$S$java_text_ParsePosition(source, pos);
if (pos.index == 0) throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["Unparseable date: \"" + source + "\"" , pos.errorIndex]);
return result;
});

Clazz.newMeth(C$, 'parseObject$S$java_text_ParsePosition', function (source, pos) {
return this.parse$S$java_text_ParsePosition(source, pos);
});

Clazz.newMeth(C$, 'getTimeInstance$', function () {
return C$.get$I$I$I$java_util_Locale(2, 0, 1, $I$(6).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getTimeInstance$I', function (style) {
return C$.get$I$I$I$java_util_Locale(style, 0, 1, $I$(6).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getTimeInstance$I$java_util_Locale', function (style, aLocale) {
return C$.get$I$I$I$java_util_Locale(style, 0, 1, aLocale);
}, 1);

Clazz.newMeth(C$, 'getDateInstance$', function () {
return C$.get$I$I$I$java_util_Locale(0, 2, 2, $I$(6).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getDateInstance$I', function (style) {
return C$.get$I$I$I$java_util_Locale(0, style, 2, $I$(6).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getDateInstance$I$java_util_Locale', function (style, aLocale) {
return C$.get$I$I$I$java_util_Locale(0, style, 2, aLocale);
}, 1);

Clazz.newMeth(C$, 'getDateTimeInstance$', function () {
return C$.get$I$I$I$java_util_Locale(2, 2, 3, $I$(6).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getDateTimeInstance$I$I', function (dateStyle, timeStyle) {
return C$.get$I$I$I$java_util_Locale(timeStyle, dateStyle, 3, $I$(6).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getDateTimeInstance$I$I$java_util_Locale', function (dateStyle, timeStyle, aLocale) {
return C$.get$I$I$I$java_util_Locale(timeStyle, dateStyle, 3, aLocale);
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
return C$.getDateTimeInstance$I$I(3, 3);
}, 1);

Clazz.newMeth(C$, 'setCalendar$java_util_Calendar', function (newCalendar) {
this.calendar=newCalendar;
});

Clazz.newMeth(C$, 'getCalendar$', function () {
return this.calendar;
});

Clazz.newMeth(C$, 'setNumberFormat$java_text_NumberFormat', function (newNumberFormat) {
this.numberFormat=newNumberFormat;
});

Clazz.newMeth(C$, 'getNumberFormat$', function () {
return this.numberFormat;
});

Clazz.newMeth(C$, 'setTimeZone$java_util_TimeZone', function (zone) {
this.calendar.setTimeZone$java_util_TimeZone(zone);
});

Clazz.newMeth(C$, 'getTimeZone$', function () {
return this.calendar.getTimeZone$();
});

Clazz.newMeth(C$, 'setLenient$Z', function (lenient) {
this.calendar.setLenient$Z(lenient);
});

Clazz.newMeth(C$, 'isLenient$', function () {
return this.calendar.isLenient$();
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.numberFormat.hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) return true;
if (obj == null  || this.getClass$() !== obj.getClass$()  ) return false;
var other=obj;
return (this.calendar.getFirstDayOfWeek$() == other.calendar.getFirstDayOfWeek$() && this.calendar.getMinimalDaysInFirstWeek$() == other.calendar.getMinimalDaysInFirstWeek$()  && this.calendar.isLenient$() == other.calendar.isLenient$()   && this.calendar.getTimeZone$().equals$O(other.calendar.getTimeZone$())  && this.numberFormat.equals$O(other.numberFormat) );
});

Clazz.newMeth(C$, 'clone$', function () {
var other=C$.superclazz.prototype.clone$.apply(this, []);
other.calendar=this.calendar.clone$();
other.numberFormat=this.numberFormat.clone$();
return other;
});

Clazz.newMeth(C$, 'get$I$I$I$java_util_Locale', function (timeStyle, dateStyle, flags, loc) {
if ((flags & 1) != 0) {
if (timeStyle < 0 || timeStyle > 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal time style " + timeStyle]);
}} else {
timeStyle=-1;
}if ((flags & 2) != 0) {
if (dateStyle < 0 || dateStyle > 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal date style " + dateStyle]);
}} else {
dateStyle=-1;
}try {
return Clazz.new_($I$(7).c$$I$I$java_util_Locale,[timeStyle, dateStyle, loc]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
return Clazz.new_($I$(7).c$$S,["M/d/yy h:mm a"]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.DateFormat, "Field", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.text.Format','.Field']);
C$.$instanceMap=null;
C$.calendarToFieldMapping=null;
C$.ERA=null;
C$.YEAR=null;
C$.MONTH=null;
C$.DAY_OF_MONTH=null;
C$.HOUR_OF_DAY1=null;
C$.HOUR_OF_DAY0=null;
C$.MINUTE=null;
C$.SECOND=null;
C$.MILLISECOND=null;
C$.DAY_OF_WEEK=null;
C$.DAY_OF_YEAR=null;
C$.DAY_OF_WEEK_IN_MONTH=null;
C$.WEEK_OF_YEAR=null;
C$.WEEK_OF_MONTH=null;
C$.AM_PM=null;
C$.HOUR1=null;
C$.HOUR0=null;
C$.TIME_ZONE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.$instanceMap=Clazz.new_($I$(1).c$$I,[18]);
C$.calendarToFieldMapping=Clazz.array(C$, [17]);
C$.ERA=Clazz.new_(C$.c$$S$I,["era", 0]);
C$.YEAR=Clazz.new_(C$.c$$S$I,["year", 1]);
C$.MONTH=Clazz.new_(C$.c$$S$I,["month", 2]);
C$.DAY_OF_MONTH=Clazz.new_(C$.c$$S$I,["day of month", 5]);
C$.HOUR_OF_DAY1=Clazz.new_(C$.c$$S$I,["hour of day 1", -1]);
C$.HOUR_OF_DAY0=Clazz.new_(C$.c$$S$I,["hour of day", 11]);
C$.MINUTE=Clazz.new_(C$.c$$S$I,["minute", 12]);
C$.SECOND=Clazz.new_(C$.c$$S$I,["second", 13]);
C$.MILLISECOND=Clazz.new_(C$.c$$S$I,["millisecond", 14]);
C$.DAY_OF_WEEK=Clazz.new_(C$.c$$S$I,["day of week", 7]);
C$.DAY_OF_YEAR=Clazz.new_(C$.c$$S$I,["day of year", 6]);
C$.DAY_OF_WEEK_IN_MONTH=Clazz.new_(C$.c$$S$I,["day of week in month", 8]);
C$.WEEK_OF_YEAR=Clazz.new_(C$.c$$S$I,["week of year", 3]);
C$.WEEK_OF_MONTH=Clazz.new_(C$.c$$S$I,["week of month", 4]);
C$.AM_PM=Clazz.new_(C$.c$$S$I,["am pm", 9]);
C$.HOUR1=Clazz.new_(C$.c$$S$I,["hour 1", -1]);
C$.HOUR0=Clazz.new_(C$.c$$S$I,["hour", 10]);
C$.TIME_ZONE=Clazz.new_(C$.c$$S$I,["time zone", -1]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.calendarField=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'ofCalendarField$I', function (calendarField) {
if (calendarField < 0 || calendarField >= C$.calendarToFieldMapping.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown Calendar constant " + calendarField]);
}return C$.calendarToFieldMapping[calendarField];
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (name, calendarField) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
this.calendarField=calendarField;
if (this.getClass$() === Clazz.getClass(C$) ) {
C$.$instanceMap.put$TK$TV(name, this);
if (calendarField >= 0) {
C$.calendarToFieldMapping[calendarField]=this;
}}}, 1);

Clazz.newMeth(C$, 'getCalendarField$', function () {
return this.calendarField;
});

Clazz.newMeth(C$, 'readResolve$', function () {
if (this.getClass$() !== Clazz.getClass(C$) ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["subclass didn\'t correctly implement readResolve"]);
}var instance=C$.$instanceMap.get$O(this.getName$());
if (instance != null ) {
return instance;
} else {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["unknown attribute name"]);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
