(function(){var P$=Clazz.newPackage("sun.util.calendar"),p$1={},I$=[[0,'sun.util.calendar.CalendarUtils']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BaseCalendar", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'sun.util.calendar.AbstractCalendar');
C$.FIXED_DATES=null;
C$.DAYS_IN_MONTH=null;
C$.ACCUMULATED_DAYS_IN_MONTH=null;
C$.ACCUMULATED_DAYS_IN_MONTH_LEAP=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.FIXED_DATES=Clazz.array(Integer.TYPE, -1, [719163, 719528, 719893, 720259, 720624, 720989, 721354, 721720, 722085, 722450, 722815, 723181, 723546, 723911, 724276, 724642, 725007, 725372, 725737, 726103, 726468, 726833, 727198, 727564, 727929, 728294, 728659, 729025, 729390, 729755, 730120, 730486, 730851, 731216, 731581, 731947, 732312, 732677, 733042, 733408, 733773, 734138, 734503, 734869, 735234, 735599, 735964, 736330, 736695, 737060, 737425, 737791, 738156, 738521, 738886, 739252, 739617, 739982, 740347, 740713, 741078, 741443, 741808, 742174, 742539, 742904, 743269, 743635, 744000, 744365]);
C$.DAYS_IN_MONTH=Clazz.array(Integer.TYPE, -1, [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
C$.ACCUMULATED_DAYS_IN_MONTH=Clazz.array(Integer.TYPE, -1, [-30, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]);
C$.ACCUMULATED_DAYS_IN_MONTH_LEAP=Clazz.array(Integer.TYPE, -1, [-30, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'validate$sun_util_calendar_CalendarDate', function (date) {
var bdate=date;
if (bdate.isNormalized$()) {
return true;
}var month=bdate.getMonth$();
if (month < 1 || month > 12 ) {
return false;
}var d=bdate.getDayOfMonth$();
if (d <= 0 || d > p$1.getMonthLength$I$I.apply(this, [bdate.getNormalizedYear$(), month]) ) {
return false;
}var dow=bdate.getDayOfWeek$();
if (dow != -2147483648 && dow != this.getDayOfWeek$sun_util_calendar_CalendarDate(bdate) ) {
return false;
}if (!this.validateTime$sun_util_calendar_CalendarDate(date)) {
return false;
}bdate.setNormalized$Z(true);
return true;
});

Clazz.newMeth(C$, 'normalize$sun_util_calendar_CalendarDate', function (date) {
if (date.isNormalized$()) {
return true;
}var bdate=date;
var zi=bdate.getZone$();
if (zi != null ) {
this.getTime$sun_util_calendar_CalendarDate(date);
return true;
}var days=this.normalizeTime$sun_util_calendar_CalendarDate(bdate);
this.normalizeMonth$sun_util_calendar_CalendarDate(bdate);
var d=bdate.getDayOfMonth$() + days;
var m=bdate.getMonth$();
var y=bdate.getNormalizedYear$();
var ml=p$1.getMonthLength$I$I.apply(this, [y, m]);
if (!(d > 0 && d <= ml )) {
if (d <= 0 && d > -28 ) {
ml=p$1.getMonthLength$I$I.apply(this, [y, --m]);
d+=ml;
bdate.setDayOfMonth$I((d|0));
if (m == 0) {
m=12;
bdate.setNormalizedYear$I(y - 1);
}bdate.setMonth$I(m);
} else if (d > ml && d < (ml + 28) ) {
d-=ml;
++m;
bdate.setDayOfMonth$I((d|0));
if (m > 12) {
bdate.setNormalizedYear$I(y + 1);
m=1;
}bdate.setMonth$I(m);
} else {
var fixedDate=d + this.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(y, m, 1, bdate) - 1;
this.getCalendarDateFromFixedDate$sun_util_calendar_CalendarDate$J(bdate, fixedDate);
}} else {
bdate.setDayOfWeek$I(this.getDayOfWeek$sun_util_calendar_CalendarDate(bdate));
}date.setLeapYear$Z(this.isLeapYear$I(bdate.getNormalizedYear$()));
date.setZoneOffset$I(0);
date.setDaylightSaving$I(0);
bdate.setNormalized$Z(true);
return true;
});

Clazz.newMeth(C$, 'normalizeMonth$sun_util_calendar_CalendarDate', function (date) {
var bdate=date;
var year=bdate.getNormalizedYear$();
var month=bdate.getMonth$();
if (month <= 0) {
var xm=1 - month;
year-=((((xm/12|0)) + 1)|0);
month=13 - (xm % 12);
bdate.setNormalizedYear$I(year);
bdate.setMonth$I((month|0));
} else if (month > 12) {
year+=((((month - 1)/12|0))|0);
month=((month - 1)) % 12 + 1;
bdate.setNormalizedYear$I(year);
bdate.setMonth$I((month|0));
}});

Clazz.newMeth(C$, 'getYearLength$sun_util_calendar_CalendarDate', function (date) {
return this.isLeapYear$I((date).getNormalizedYear$()) ? 366 : 365;
});

Clazz.newMeth(C$, 'getYearLengthInMonths$sun_util_calendar_CalendarDate', function (date) {
return 12;
});

Clazz.newMeth(C$, 'getMonthLength$sun_util_calendar_CalendarDate', function (date) {
var gdate=date;
var month=gdate.getMonth$();
if (month < 1 || month > 12 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal month value: " + month]);
}return p$1.getMonthLength$I$I.apply(this, [gdate.getNormalizedYear$(), month]);
});

Clazz.newMeth(C$, 'getMonthLength$I$I', function (year, month) {
var days=C$.DAYS_IN_MONTH[month];
if (month == 2 && this.isLeapYear$I(year) ) {
days++;
}return days;
}, p$1);

Clazz.newMeth(C$, 'getDayOfYear$sun_util_calendar_CalendarDate', function (date) {
return this.getDayOfYear$I$I$I((date).getNormalizedYear$(), date.getMonth$(), date.getDayOfMonth$());
});

Clazz.newMeth(C$, 'getDayOfYear$I$I$I', function (year, month, dayOfMonth) {
return dayOfMonth + (this.isLeapYear$I(year) ? C$.ACCUMULATED_DAYS_IN_MONTH_LEAP[month] : C$.ACCUMULATED_DAYS_IN_MONTH[month]);
});

Clazz.newMeth(C$, 'getFixedDate$sun_util_calendar_CalendarDate', function (date) {
if (!date.isNormalized$()) {
this.normalizeMonth$sun_util_calendar_CalendarDate(date);
}return this.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date((date).getNormalizedYear$(), date.getMonth$(), date.getDayOfMonth$(), date);
});

Clazz.newMeth(C$, 'getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date', function (year, month, dayOfMonth, cache) {
var isJan1=month == 1 && dayOfMonth == 1 ;
if (cache != null  && cache.hit$I(year) ) {
if (isJan1) {
return cache.getCachedJan1$();
}return cache.getCachedJan1$() + this.getDayOfYear$I$I$I(year, month, dayOfMonth) - 1;
}var n=year - 1970;
if (n >= 0 && n < C$.FIXED_DATES.length ) {
var jan1=C$.FIXED_DATES[n];
if (cache != null ) {
cache.setCache$I$J$I(year, jan1, this.isLeapYear$I(year) ? 366 : 365);
}return isJan1 ? jan1 : jan1 + this.getDayOfYear$I$I$I(year, month, dayOfMonth) - 1;
}var prevyear=year - 1;
var days=dayOfMonth;
if (prevyear >= 0) {
days+=(365 * prevyear) + ((prevyear/4|0)) - ((prevyear/100|0)) + ((prevyear/400|0)) + (((367 * month - 362)/12|0));
} else {
days+=(365 * prevyear) + $I$(1).floorDivide$J$J(prevyear, 4) - $I$(1).floorDivide$J$J(prevyear, 100) + $I$(1).floorDivide$J$J(prevyear, 400) + $I$(1).floorDivide$I$I((367 * month - 362), 12);
}if (month > 2) {
days-=this.isLeapYear$I(year) ? 1 : 2;
}if (cache != null  && isJan1 ) {
cache.setCache$I$J$I(year, days, this.isLeapYear$I(year) ? 366 : 365);
}return days;
});

Clazz.newMeth(C$, 'getCalendarDateFromFixedDate$sun_util_calendar_CalendarDate$J', function (date, fixedDate) {
var gdate=date;
var year;
var jan1;
var isLeap;
if (gdate.hit$J(fixedDate)) {
year=gdate.getCachedYear$();
jan1=gdate.getCachedJan1$();
isLeap=this.isLeapYear$I(year);
} else {
year=this.getGregorianYearFromFixedDate$J(fixedDate);
jan1=this.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(year, 1, 1, null);
isLeap=this.isLeapYear$I(year);
gdate.setCache$I$J$I(year, jan1, isLeap ? 366 : 365);
}var priorDays=((fixedDate - jan1)|0);
var mar1=jan1 + 31 + 28 ;
if (isLeap) {
++mar1;
}if (fixedDate >= mar1) {
priorDays+=isLeap ? 1 : 2;
}var month=12 * priorDays + 373;
if (month > 0) {
month=(month/(367)|0);
} else {
month=$I$(1).floorDivide$I$I(month, 367);
}var month1=jan1 + C$.ACCUMULATED_DAYS_IN_MONTH[month];
if (isLeap && month >= 3 ) {
++month1;
}var dayOfMonth=((fixedDate - month1)|0) + 1;
var dayOfWeek=C$.getDayOfWeekFromFixedDate$J(fixedDate);
Clazz.assert(C$, this, function(){return dayOfWeek > 0}, function(){return "negative day of week " + dayOfWeek});
gdate.setNormalizedYear$I(year);
gdate.setMonth$I(month);
gdate.setDayOfMonth$I(dayOfMonth);
gdate.setDayOfWeek$I(dayOfWeek);
gdate.setLeapYear$Z(isLeap);
gdate.setNormalized$Z(true);
});

Clazz.newMeth(C$, 'getDayOfWeek$sun_util_calendar_CalendarDate', function (date) {
var fixedDate=this.getFixedDate$sun_util_calendar_CalendarDate(date);
return C$.getDayOfWeekFromFixedDate$J(fixedDate);
});

Clazz.newMeth(C$, 'getDayOfWeekFromFixedDate$J', function (fixedDate) {
if (fixedDate >= 0) {
return ((fixedDate % 7)|0) + 1;
}return ($I$(1).mod$J$J(fixedDate, 7)|0) + 1;
}, 1);

Clazz.newMeth(C$, 'getYearFromFixedDate$J', function (fixedDate) {
return this.getGregorianYearFromFixedDate$J(fixedDate);
});

Clazz.newMeth(C$, 'getGregorianYearFromFixedDate$J', function (fixedDate) {
var d0;
var d1;
var d2;
var d3;
var d4;
var n400;
var n100;
var n4;
var n1;
var year;
if (fixedDate > 0) {
d0=fixedDate - 1;
n400=(((d0/146097|0))|0);
d1=((d0 % 146097)|0);
n100=(d1/36524|0);
d2=d1 % 36524;
n4=(d2/1461|0);
d3=d2 % 1461;
n1=(d3/365|0);
d4=(d3 % 365) + 1;
} else {
d0=fixedDate - 1;
n400=($I$(1).floorDivide$J$J(d0, 146097)|0);
d1=($I$(1).mod$J$J(d0, 146097)|0);
n100=$I$(1).floorDivide$I$I(d1, 36524);
d2=$I$(1).mod$I$I(d1, 36524);
n4=$I$(1).floorDivide$I$I(d2, 1461);
d3=$I$(1).mod$I$I(d2, 1461);
n1=$I$(1).floorDivide$I$I(d3, 365);
d4=$I$(1).mod$I$I(d3, 365) + 1;
}year=400 * n400 + 100 * n100 + 4 * n4 + n1;
if (!(n100 == 4 || n1 == 4 )) {
++year;
}return year;
});

Clazz.newMeth(C$, 'isLeapYear$sun_util_calendar_CalendarDate', function (date) {
return this.isLeapYear$I((date).getNormalizedYear$());
});

Clazz.newMeth(C$, 'isLeapYear$I', function (normalizedYear) {
return $I$(1).isGregorianLeapYear$I(normalizedYear);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){var C$=Clazz.newClass(P$.BaseCalendar, "Date", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.util.calendar.CalendarDate');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cachedYear=0;
this.cachedFixedDateJan1=0;
this.cachedFixedDateNextJan1=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.cachedYear=2004;
this.cachedFixedDateJan1=731581;
this.cachedFixedDateNextJan1=this.cachedFixedDateJan1 + 366;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_TimeZone', function (zone) {
C$.superclazz.c$$java_util_TimeZone.apply(this, [zone]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setNormalizedDate$I$I$I', function (normalizedYear, month, dayOfMonth) {
this.setNormalizedYear$I(normalizedYear);
this.setMonth$I(month).setDayOfMonth$I(dayOfMonth);
return this;
});

Clazz.newMeth(C$, 'hit$I', function (year) {
return year == this.cachedYear;
});

Clazz.newMeth(C$, 'hit$J', function (fixedDate) {
return (fixedDate >= this.cachedFixedDateJan1 && fixedDate < this.cachedFixedDateNextJan1 );
});

Clazz.newMeth(C$, 'getCachedYear$', function () {
return this.cachedYear;
});

Clazz.newMeth(C$, 'getCachedJan1$', function () {
return this.cachedFixedDateJan1;
});

Clazz.newMeth(C$, 'setCache$I$J$I', function (year, jan1, len) {
this.cachedYear=year;
this.cachedFixedDateJan1=jan1;
this.cachedFixedDateNextJan1=jan1 + len;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
