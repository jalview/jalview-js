(function(){var P$=java.util,p$1={},I$=[[0,'sun.util.calendar.CalendarSystem','java.util.TimeZone','java.util.Locale','java.util.Date','sun.util.calendar.AbstractCalendar','sun.util.calendar.CalendarUtils']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GregorianCalendar", null, 'java.util.Calendar');
C$.MONTH_LENGTH=null;
C$.LEAP_MONTH_LENGTH=null;
C$.MIN_VALUES=null;
C$.LEAST_MAX_VALUES=null;
C$.MAX_VALUES=null;
C$.gcal=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.MONTH_LENGTH=Clazz.array(Integer.TYPE, -1, [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
C$.LEAP_MONTH_LENGTH=Clazz.array(Integer.TYPE, -1, [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
C$.MIN_VALUES=Clazz.array(Integer.TYPE, -1, [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, -46800000, 0]);
C$.LEAST_MAX_VALUES=Clazz.array(Integer.TYPE, -1, [1, 292269054, 11, 52, 4, 28, 365, 7, 4, 1, 11, 23, 59, 59, 999, 50400000, 1200000]);
C$.MAX_VALUES=Clazz.array(Integer.TYPE, -1, [1, 292278994, 11, 53, 6, 31, 366, 7, 6, 1, 11, 23, 59, 59, 999, 50400000, 7200000]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.gregorianCutover=0;
this.gregorianCutoverDate=0;
this.gregorianCutoverYear=0;
this.gregorianCutoverYearJulian=0;
this.gdate=null;
this.cdate=null;
this.calsys=null;
this.zoneOffsets=null;
this.originalFields=null;
this.cachedFixedDate=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.gregorianCutover=-12219292800000;
this.gregorianCutoverDate=577736;
this.gregorianCutoverYear=1582;
this.gregorianCutoverYearJulian=1582;
this.cachedFixedDate=-9223372036854775808;
}, 1);

Clazz.newMeth(C$, 'getGcal', function () {
return (C$.gcal == null  ? (C$.gcal=$I$(1).getGregorianCalendar$()) : C$.gcal);
}, p$1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_TimeZone$java_util_Locale.apply(this, [$I$(2).getDefaultRef$(), $I$(3).getDefault$()]);
this.setZoneShared$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_TimeZone', function (zone) {
C$.c$$java_util_TimeZone$java_util_Locale.apply(this, [zone, $I$(3).getDefault$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Locale', function (aLocale) {
C$.c$$java_util_TimeZone$java_util_Locale.apply(this, [$I$(2).getDefaultRef$(), aLocale]);
this.setZoneShared$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_TimeZone$java_util_Locale', function (zone, aLocale) {
C$.superclazz.c$$java_util_TimeZone$java_util_Locale.apply(this, [zone, aLocale]);
C$.$init$.apply(this);
this.gdate=p$1.getGcal.apply(this, []).newCalendarDate$java_util_TimeZone(zone);
this.setTimeInMillis$J(System.currentTimeMillis$());
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (year, month, dayOfMonth) {
C$.c$$I$I$I$I$I$I$I.apply(this, [year, month, dayOfMonth, 0, 0, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I', function (year, month, dayOfMonth, hourOfDay, minute) {
C$.c$$I$I$I$I$I$I$I.apply(this, [year, month, dayOfMonth, hourOfDay, minute, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$I', function (year, month, dayOfMonth, hourOfDay, minute, second) {
C$.c$$I$I$I$I$I$I$I.apply(this, [year, month, dayOfMonth, hourOfDay, minute, second, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$I$I', function (year, month, dayOfMonth, hourOfDay, minute, second, millis) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.gdate=p$1.getGcal.apply(this, []).newCalendarDate$java_util_TimeZone(this.getZone$());
this.set$I$I(1, year);
this.set$I$I(2, month);
this.set$I$I(5, dayOfMonth);
if (hourOfDay >= 12 && hourOfDay <= 23 ) {
this.internalSet$I$I(9, 1);
this.internalSet$I$I(10, hourOfDay - 12);
} else {
this.internalSet$I$I(10, hourOfDay);
}this.setFieldsComputed$I(1536);
this.set$I$I(11, hourOfDay);
this.set$I$I(12, minute);
this.set$I$I(13, second);
this.internalSet$I$I(14, millis);
}, 1);

Clazz.newMeth(C$, 'getGregorianChange$', function () {
return Clazz.new_($I$(4).c$$J,[this.gregorianCutover]);
});

Clazz.newMeth(C$, 'isLeapYear$I', function (year) {
if ((year & 3) != 0) {
return false;
}if (year > this.gregorianCutoverYear) {
return (year % 100 != 0) || (year % 400 == 0) ;
}if (year < this.gregorianCutoverYearJulian) {
return true;
}var gregorian;
if (this.gregorianCutoverYear == this.gregorianCutoverYearJulian) {
var d=p$1.getCalendarDate$J.apply(this, [this.gregorianCutoverDate]);
gregorian=d.getMonth$() < 3;
} else {
gregorian=year == this.gregorianCutoverYear;
}return gregorian ? (year % 100 != 0) || (year % 400 == 0)  : true;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return Clazz.instanceOf(obj, "java.util.GregorianCalendar") && C$.superclazz.prototype.equals$O.apply(this, [obj]) && this.gregorianCutover == (obj).gregorianCutover  ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return C$.superclazz.prototype.hashCode$.apply(this, []) ^ (this.gregorianCutoverDate|0);
});

Clazz.newMeth(C$, 'add$I$I', function (field, amount) {
if (amount == 0) {
return;
}if (field < 0 || field >= 15 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.complete$();
if (field == 1) {
var year=this.internalGet$I(1);
if (p$1.internalGetEra.apply(this, []) == 1) {
year+=amount;
if (year > 0) {
this.set$I$I(1, year);
} else {
this.set$I$I(1, 1 - year);
this.set$I$I(0, 0);
}} else {
year-=amount;
if (year > 0) {
this.set$I$I(1, year);
} else {
this.set$I$I(1, 1 - year);
this.set$I$I(0, 1);
}}p$1.pinDayOfMonth.apply(this, []);
} else if (field == 2) {
var month=this.internalGet$I(2) + amount;
var year=this.internalGet$I(1);
var y_amount;
if (month >= 0) {
y_amount=(month/12|0);
} else {
y_amount=((month + 1)/12|0) - 1;
}if (y_amount != 0) {
if (p$1.internalGetEra.apply(this, []) == 1) {
year+=y_amount;
if (year > 0) {
this.set$I$I(1, year);
} else {
this.set$I$I(1, 1 - year);
this.set$I$I(0, 0);
}} else {
year-=y_amount;
if (year > 0) {
this.set$I$I(1, year);
} else {
this.set$I$I(1, 1 - year);
this.set$I$I(0, 1);
}}}if (month >= 0) {
this.set$I$I(2, (month % 12));
} else {
month%=12;
if (month < 0) {
month+=12;
}this.set$I$I(2, 0 + month);
}p$1.pinDayOfMonth.apply(this, []);
} else if (field == 0) {
var era=this.internalGet$I(0) + amount;
if (era < 0) {
era=0;
}if (era > 1) {
era=1;
}this.set$I$I(0, era);
} else {
var delta=amount;
var timeOfDay=0;
switch (field) {
case 10:
case 11:
delta*=3600000;
break;
case 12:
delta*=60000;
break;
case 13:
delta*=1000;
break;
case 14:
break;
case 3:
case 4:
case 8:
delta*=7;
break;
case 5:
case 6:
case 7:
break;
case 9:
delta=(amount/2|0);
timeOfDay=12 * (amount % 2);
break;
}
if (field >= 10) {
this.setTimeInMillis$J(this.time + delta);
return;
}var fd=p$1.getCurrentFixedDate.apply(this, []);
timeOfDay+=this.internalGet$I(11);
timeOfDay*=60;
timeOfDay+=this.internalGet$I(12);
timeOfDay*=60;
timeOfDay+=this.internalGet$I(13);
timeOfDay*=1000;
timeOfDay+=this.internalGet$I(14);
if (timeOfDay >= 86400000) {
fd++;
timeOfDay-=86400000;
} else if (timeOfDay < 0) {
fd--;
timeOfDay+=86400000;
}fd+=delta;
var zoneOffset=this.internalGet$I(15) + this.internalGet$I(16);
this.setTimeInMillis$J((fd - 719163) * 86400000 + timeOfDay - zoneOffset);
zoneOffset-=this.internalGet$I(15) + this.internalGet$I(16);
if (zoneOffset != 0) {
this.setTimeInMillis$J(this.time + zoneOffset);
var fd2=p$1.getCurrentFixedDate.apply(this, []);
if (fd2 != fd) {
this.setTimeInMillis$J(this.time - zoneOffset);
}}}});

Clazz.newMeth(C$, 'roll$I$Z', function (field, up) {
this.roll$I$I(field, up ? +1 : -1);
});

Clazz.newMeth(C$, 'roll$I$I', function (field, amount) {
if (amount == 0) {
return;
}if (field < 0 || field >= 15 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.complete$();
var min=this.getMinimum$I(field);
var max=this.getMaximum$I(field);
switch (field) {
case 9:
case 0:
case 1:
case 12:
case 13:
case 14:
break;
case 10:
case 11:
{
var unit=max + 1;
var h=this.internalGet$I(field);
var nh=(h + amount) % unit;
if (nh < 0) {
nh+=unit;
}this.time+=3600000 * (nh - h);
var d=this.calsys.getCalendarDate$J$java_util_TimeZone(this.time, this.getZone$());
if (this.internalGet$I(5) != d.getDayOfMonth$()) {
d.setDate$I$I$I(this.internalGet$I(1), this.internalGet$I(2) + 1, this.internalGet$I(5));
if (field == 10) {
Clazz.assert(C$, this, function(){return (this.internalGet$I(9) == 1)});
d.addHours$I(+12);
}this.time=this.calsys.getTime$sun_util_calendar_CalendarDate(d);
}var hourOfDay=d.getHours$();
this.internalSet$I$I(field, hourOfDay % unit);
if (field == 10) {
this.internalSet$I$I(11, hourOfDay);
} else {
this.internalSet$I$I(9, (hourOfDay/12|0));
this.internalSet$I$I(10, hourOfDay % 12);
}var zoneOffset=d.getZoneOffset$();
var saving=d.getDaylightSaving$();
this.internalSet$I$I(15, zoneOffset - saving);
this.internalSet$I$I(16, saving);
return;
}case 2:
{
var mon=(this.internalGet$I(2) + amount) % 12;
if (mon < 0) {
mon+=12;
}this.set$I$I(2, mon);
var monthLen=p$1.monthLength$I.apply(this, [mon]);
if (this.internalGet$I(5) > monthLen) {
this.set$I$I(5, monthLen);
}return;
}case 3:
{
var y=this.cdate.getNormalizedYear$();
max=this.getActualMaximum$I(3);
this.set$I$I(7, this.internalGet$I(7));
var woy=this.internalGet$I(3);
var value=woy + amount;
if (value > min && value < max ) {
this.set$I$I(3, value);
return;
}var fd=p$1.getCurrentFixedDate.apply(this, []);
var day1=fd - (7 * (woy - min));
if (this.calsys.getYearFromFixedDate$J(day1) != y) {
min++;
}fd+=7 * (max - this.internalGet$I(3));
if (this.calsys.getYearFromFixedDate$J(fd) != y) {
max--;
}break;
}case 4:
{
var dow=this.internalGet$I(7) - this.getFirstDayOfWeek$();
if (dow < 0) {
dow+=7;
}var fd=p$1.getCurrentFixedDate.apply(this, []);
var month1;
var monthLength;
month1=fd - this.internalGet$I(5) + 1;
monthLength=this.calsys.getMonthLength$sun_util_calendar_CalendarDate(this.cdate);
var monthDay1st=$I$(5).getDayOfWeekDateOnOrBefore$J$I(month1 + 6, this.getFirstDayOfWeek$());
if (((monthDay1st - month1)|0) >= this.getMinimalDaysInFirstWeek$()) {
monthDay1st-=7;
}max=this.getActualMaximum$I(field);
var value=C$.getRolledValue$I$I$I$I(this.internalGet$I(field), amount, 1, max) - 1;
var nfd=monthDay1st + value * 7 + dow;
if (nfd < month1) {
nfd=month1;
} else if (nfd >= (month1 + monthLength)) {
nfd=month1 + monthLength - 1;
}var dayOfMonth;
dayOfMonth=((nfd - month1)|0) + 1;
this.set$I$I(5, dayOfMonth);
return;
}case 5:
{
max=this.calsys.getMonthLength$sun_util_calendar_CalendarDate(this.cdate);
break;
}case 6:
{
max=this.getActualMaximum$I(field);
break;
}case 7:
{
var weekOfYear=this.internalGet$I(3);
this.set$I$I(3, weekOfYear);
max=7;
break;
}case 8:
{
min=1;
var dom=this.internalGet$I(5);
var monthLength=this.calsys.getMonthLength$sun_util_calendar_CalendarDate(this.cdate);
var lastDays=monthLength % 7;
max=(monthLength/7|0);
var x=(dom - 1) % 7;
if (x < lastDays) {
max++;
}this.set$I$I(7, this.internalGet$I(7));
break;
}}
this.set$I$I(field, C$.getRolledValue$I$I$I$I(this.internalGet$I(field), amount, min, max));
});

Clazz.newMeth(C$, 'getMinimum$I', function (field) {
return C$.MIN_VALUES[field];
});

Clazz.newMeth(C$, 'getMaximum$I', function (field) {
switch (field) {
case 2:
case 5:
case 6:
case 3:
case 4:
case 8:
case 1:
{
if (this.gregorianCutoverYear > 200) {
break;
}var gc=this.clone$();
gc.setLenient$Z(true);
gc.setTimeInMillis$J(this.gregorianCutover);
var v1=gc.getActualMaximum$I(field);
gc.setTimeInMillis$J(this.gregorianCutover - 1);
var v2=gc.getActualMaximum$I(field);
return Math.max(C$.MAX_VALUES[field], Math.max(v1, v2));
}}
return C$.MAX_VALUES[field];
});

Clazz.newMeth(C$, 'getGreatestMinimum$I', function (field) {
return C$.MIN_VALUES[field];
});

Clazz.newMeth(C$, 'getLeastMaximum$I', function (field) {
switch (field) {
case 2:
case 5:
case 6:
case 3:
case 4:
case 8:
case 1:
{
var gc=this.clone$();
gc.setLenient$Z(true);
gc.setTimeInMillis$J(this.gregorianCutover);
var v1=gc.getActualMaximum$I(field);
gc.setTimeInMillis$J(this.gregorianCutover - 1);
var v2=gc.getActualMaximum$I(field);
return Math.min(C$.LEAST_MAX_VALUES[field], Math.min(v1, v2));
}}
return C$.LEAST_MAX_VALUES[field];
});

Clazz.newMeth(C$, 'getActualMinimum$I', function (field) {
if (field == 5) {
}return this.getMinimum$I(field);
});

Clazz.newMeth(C$, 'getActualMaximum$I', function (field) {
var fieldsForFixedMax=130689;
if ((130689 & (1 << field)) != 0) {
return this.getMaximum$I(field);
}var gc=p$1.getNormalizedCalendar.apply(this, []);
var date=gc.cdate;
var cal=gc.calsys;
var value=-1;
var d;
var dd;
switch (field) {
case 2:
{
}break;
case 5:
value=cal.getMonthLength$sun_util_calendar_CalendarDate(date);
break;
case 6:
value=cal.getYearLength$sun_util_calendar_CalendarDate(date);
break;
case 3:
{
dd=cal.newCalendarDate$java_util_TimeZone($I$(2).NO_TIMEZONE);
dd.setDate$I$I$I(date.getYear$(), 1, 1);
var dayOfWeek=cal.getDayOfWeek$sun_util_calendar_CalendarDate(dd);
dayOfWeek-=this.getFirstDayOfWeek$();
if (dayOfWeek < 0) {
dayOfWeek+=7;
}value=52;
var magic=dayOfWeek + this.getMinimalDaysInFirstWeek$() - 1;
if ((magic == 6) || (date.isLeapYear$() && (magic == 5 || magic == 12 ) ) ) {
value++;
}}break;
case 4:
dd=cal.newCalendarDate$java_util_TimeZone(null);
dd.setDate$I$I$I(date.getYear$(), date.getMonth$(), 1);
var dayOfWeek=cal.getDayOfWeek$sun_util_calendar_CalendarDate(dd);
var monthLength=cal.getMonthLength$sun_util_calendar_CalendarDate(dd);
dayOfWeek-=this.getFirstDayOfWeek$();
if (dayOfWeek < 0) {
dayOfWeek+=7;
}var nDaysFirstWeek=7 - dayOfWeek;
value=3;
if (nDaysFirstWeek >= this.getMinimalDaysInFirstWeek$()) {
value++;
}monthLength-=nDaysFirstWeek + 21;
if (monthLength > 0) {
value++;
if (monthLength > 7) {
value++;
}}break;
case 8:
{
var ndays;
var dow1;
var dow=date.getDayOfWeek$();
d=date.clone$();
ndays=cal.getMonthLength$sun_util_calendar_CalendarDate(d);
d.setDayOfMonth$I(1);
cal.normalize$sun_util_calendar_CalendarDate(d);
dow1=d.getDayOfWeek$();
var x=dow - dow1;
if (x < 0) {
x+=7;
}ndays-=x;
value=((ndays + 6)/7|0);
}break;
case 1:
{
if (gc === this ) {
gc=this.clone$();
}var current=p$1.getYearOffsetInMillis.apply(gc, []);
if (p$1.internalGetEra.apply(gc, []) == 1) {
gc.setTimeInMillis$J(9223372036854775807);
value=gc.get$I(1);
var maxEnd=p$1.getYearOffsetInMillis.apply(gc, []);
if (current > maxEnd) {
value--;
}} else {
var mincal=p$1.getGcal.apply(this, []);
dd=mincal.getCalendarDate$J$java_util_TimeZone(-9223372036854775808, this.getZone$());
var maxEnd=(cal.getDayOfYear$sun_util_calendar_CalendarDate(dd) - 1) * 24 + dd.getHours$();
maxEnd*=60;
maxEnd+=dd.getMinutes$();
maxEnd*=60;
maxEnd+=dd.getSeconds$();
maxEnd*=1000;
maxEnd+=dd.getMillis$();
value=dd.getYear$();
if (value <= 0) {
Clazz.assert(C$, this, function(){return mincal === p$1.getGcal.apply(this, []) });
value=1 - value;
}if (current < maxEnd) {
value--;
}}}break;
default:
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[field]);
}
return value;
});

Clazz.newMeth(C$, 'getYearOffsetInMillis', function () {
var t=(this.internalGet$I(6) - 1) * 24;
t+=this.internalGet$I(11);
t*=60;
t+=this.internalGet$I(12);
t*=60;
t+=this.internalGet$I(13);
t*=1000;
return t + this.internalGet$I(14) - (this.internalGet$I(15) + this.internalGet$I(16));
}, p$1);

Clazz.newMeth(C$, 'clone$', function () {
var other=C$.superclazz.prototype.clone$.apply(this, []);
other.gdate=this.gdate.clone$();
if (this.cdate != null ) {
if (this.cdate !== this.gdate ) {
other.cdate=this.cdate.clone$();
} else {
other.cdate=other.gdate;
}}other.originalFields=null;
other.zoneOffsets=null;
return other;
});

Clazz.newMeth(C$, 'getTimeZone$', function () {
var zone=C$.superclazz.prototype.getTimeZone$.apply(this, []);
this.gdate.setZone$java_util_TimeZone(zone);
if (this.cdate != null  && this.cdate !== this.gdate  ) {
this.cdate.setZone$java_util_TimeZone(zone);
}return zone;
});

Clazz.newMeth(C$, 'setTimeZone$java_util_TimeZone', function (zone) {
C$.superclazz.prototype.setTimeZone$java_util_TimeZone.apply(this, [zone]);
this.gdate.setZone$java_util_TimeZone(zone);
if (this.cdate != null  && this.cdate !== this.gdate  ) {
this.cdate.setZone$java_util_TimeZone(zone);
}});

Clazz.newMeth(C$, 'computeFields$', function () {
var mask=0;
if (this.isPartiallyNormalized$()) {
mask=this.getSetStateFields$();
var fieldMask=~mask & 131071;
if (fieldMask != 0 || this.calsys == null  ) {
mask|=p$1.computeFields$I$I.apply(this, [fieldMask, mask & (98304)]);
Clazz.assert(C$, this, function(){return mask == 131071});
}} else {
mask=131071;
p$1.computeFields$I$I.apply(this, [mask, 0]);
}this.setFieldsComputed$I(mask);
});

Clazz.newMeth(C$, 'computeFields$I$I', function (fieldMask, tzMask) {
var zoneOffset=0;
var tz=this.getZone$();
if (this.zoneOffsets == null ) {
this.zoneOffsets=Clazz.array(Integer.TYPE, [2]);
}if (tzMask != (98304)) {
if (Clazz.instanceOf(tz, "sun.util.calendar.ZoneInfo")) {
zoneOffset=(tz).getOffsets$J$IA(this.time, this.zoneOffsets);
} else {
zoneOffset=tz.getOffset$J(this.time);
this.zoneOffsets[0]=tz.getRawOffset$();
this.zoneOffsets[1]=zoneOffset - this.zoneOffsets[0];
}}if (tzMask != 0) {
if (P$.Calendar.isFieldSet$I$I(tzMask, 15)) {
this.zoneOffsets[0]=this.internalGet$I(15);
}if (P$.Calendar.isFieldSet$I$I(tzMask, 16)) {
this.zoneOffsets[1]=this.internalGet$I(16);
}zoneOffset=this.zoneOffsets[0] + this.zoneOffsets[1];
}var fixedDate=(zoneOffset/86400000|0);
var timeOfDay=zoneOffset % 86400000;
fixedDate+=(this.time/86400000|0);
timeOfDay+=((this.time % 86400000)|0);
if (timeOfDay >= 86400000) {
timeOfDay-=86400000;
++fixedDate;
} else {
while (timeOfDay < 0){
timeOfDay+=86400000;
--fixedDate;
}
}fixedDate+=719163;
var era=1;
var year;
Clazz.assert(C$, this, function(){return this.cachedFixedDate == -9223372036854775808 || this.gdate.isNormalized$() }, function(){return "cache control: not normalized"});
Clazz.assert(C$, this, function(){return this.cachedFixedDate == -9223372036854775808 || p$1.getGcal.apply(this, []).getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(this.gdate.getNormalizedYear$(), this.gdate.getMonth$(), this.gdate.getDayOfMonth$(), this.gdate) == this.cachedFixedDate }, function(){return "cache control: inconsictency, cachedFixedDate=" + this.cachedFixedDate + ", computed=" + p$1.getGcal.apply(this, []).getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(this.gdate.getNormalizedYear$(), this.gdate.getMonth$(), this.gdate.getDayOfMonth$(), this.gdate) + ", date=" + this.gdate });
if (fixedDate != this.cachedFixedDate) {
p$1.getGcal.apply(this, []).getCalendarDateFromFixedDate$sun_util_calendar_CalendarDate$J(this.gdate, fixedDate);
this.cachedFixedDate=fixedDate;
}year=this.gdate.getYear$();
if (year <= 0) {
year=1 - year;
era=0;
}this.calsys=p$1.getGcal.apply(this, []);
this.cdate=this.gdate;
Clazz.assert(C$, this, function(){return this.cdate.getDayOfWeek$() > 0}, function(){return "dow=" + this.cdate.getDayOfWeek$() + ", date=" + this.cdate });
this.internalSet$I$I(0, era);
this.internalSet$I$I(1, year);
var mask=fieldMask | (3);
var month=this.cdate.getMonth$() - 1;
var dayOfMonth=this.cdate.getDayOfMonth$();
if ((fieldMask & (164)) != 0) {
this.internalSet$I$I(2, month);
this.internalSet$I$I(5, dayOfMonth);
this.internalSet$I$I(7, this.cdate.getDayOfWeek$());
mask|=164;
}if ((fieldMask & (32256)) != 0) {
if (timeOfDay != 0) {
var hours=(timeOfDay/3600000|0);
this.internalSet$I$I(11, hours);
this.internalSet$I$I(9, (hours/12|0));
this.internalSet$I$I(10, hours % 12);
var r=timeOfDay % 3600000;
this.internalSet$I$I(12, (r/60000|0));
r%=60000;
this.internalSet$I$I(13, (r/1000|0));
this.internalSet$I$I(14, r % 1000);
} else {
this.internalSet$I$I(11, 0);
this.internalSet$I$I(9, 0);
this.internalSet$I$I(10, 0);
this.internalSet$I$I(12, 0);
this.internalSet$I$I(13, 0);
this.internalSet$I$I(14, 0);
}mask|=(32256);
}if ((fieldMask & (98304)) != 0) {
this.internalSet$I$I(15, this.zoneOffsets[0]);
this.internalSet$I$I(16, this.zoneOffsets[1]);
mask|=(98304);
}if ((fieldMask & (344)) != 0) {
var normalizedYear=this.cdate.getNormalizedYear$();
var fixedDateJan1=this.calsys.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(normalizedYear, 1, 1, this.cdate);
var dayOfYear=((fixedDate - fixedDateJan1)|0) + 1;
var fixedDateMonth1=fixedDate - dayOfMonth + 1;
var cutoverYear=(this.calsys === p$1.getGcal.apply(this, []) ) ? this.gregorianCutoverYear : this.gregorianCutoverYearJulian;
var relativeDayOfMonth=dayOfMonth - 1;
if (normalizedYear == cutoverYear) {
var realDayOfYear=((fixedDate - fixedDateJan1)|0) + 1;
dayOfYear=realDayOfYear;
relativeDayOfMonth=((fixedDate - fixedDateMonth1)|0);
}this.internalSet$I$I(6, dayOfYear);
this.internalSet$I$I(8, (relativeDayOfMonth/7|0) + 1);
var weekOfYear=p$1.getWeekNumber$J$J.apply(this, [fixedDateJan1, fixedDate]);
if (weekOfYear == 0) {
var fixedDec31=fixedDateJan1 - 1;
var prevJan1;
prevJan1=fixedDateJan1 - 365;
if ($I$(6).isGregorianLeapYear$I(normalizedYear - 1)) {
--prevJan1;
}weekOfYear=p$1.getWeekNumber$J$J.apply(this, [prevJan1, fixedDec31]);
} else {
if (normalizedYear > this.gregorianCutoverYear || normalizedYear < (this.gregorianCutoverYearJulian - 1) ) {
if (weekOfYear >= 52) {
var nextJan1=fixedDateJan1 + 365;
if (this.cdate.isLeapYear$()) {
nextJan1++;
}var nextJan1st=$I$(5).getDayOfWeekDateOnOrBefore$J$I(nextJan1 + 6, this.getFirstDayOfWeek$());
var ndays=((nextJan1st - nextJan1)|0);
if (ndays >= this.getMinimalDaysInFirstWeek$() && fixedDate >= (nextJan1st - 7) ) {
weekOfYear=1;
}}} else {
var calForJan1=this.calsys;
var nextYear=normalizedYear + 1;
var nextJan1=calForJan1.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(nextYear, 1, 1, null);
if (nextJan1 < fixedDate) {
nextJan1=this.gregorianCutoverDate;
calForJan1=p$1.getGcal.apply(this, []);
}var nextJan1st=$I$(5).getDayOfWeekDateOnOrBefore$J$I(nextJan1 + 6, this.getFirstDayOfWeek$());
var ndays=((nextJan1st - nextJan1)|0);
if (ndays >= this.getMinimalDaysInFirstWeek$() && fixedDate >= (nextJan1st - 7) ) {
weekOfYear=1;
}}}this.internalSet$I$I(3, weekOfYear);
this.internalSet$I$I(4, p$1.getWeekNumber$J$J.apply(this, [fixedDateMonth1, fixedDate]));
mask|=(344);
}return mask;
}, p$1);

Clazz.newMeth(C$, 'getWeekNumber$J$J', function (fixedDay1, fixedDate) {
var fixedDay1st=$I$(5).getDayOfWeekDateOnOrBefore$J$I(fixedDay1 + 6, this.getFirstDayOfWeek$());
var ndays=((fixedDay1st - fixedDay1)|0);
Clazz.assert(C$, this, function(){return ndays <= 7});
if (ndays >= this.getMinimalDaysInFirstWeek$()) {
fixedDay1st-=7;
}var normalizedDayOfPeriod=((fixedDate - fixedDay1st)|0);
if (normalizedDayOfPeriod >= 0) {
return (normalizedDayOfPeriod/7|0) + 1;
}return $I$(6).floorDivide$I$I(normalizedDayOfPeriod, 7) + 1;
}, p$1);

Clazz.newMeth(C$, 'computeTime$', function () {
if (!this.isLenient$()) {
if (this.originalFields == null ) {
this.originalFields=Clazz.array(Integer.TYPE, [17]);
}for (var field=0; field < 17; field++) {
var value=this.internalGet$I(field);
if (this.isExternallySet$I(field)) {
if (value < this.getMinimum$I(field) || value > this.getMaximum$I(field) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[P$.Calendar.getFieldName$I(field)]);
}}this.originalFields[field]=value;
}
}var fieldMask=this.selectFields$();
var year=this.isSet$I(1) ? this.internalGet$I(1) : 1970;
var era=p$1.internalGetEra.apply(this, []);
if (era == 0) {
year=1 - year;
} else if (era != 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid era"]);
}if (year <= 0 && !this.isSet$I(0) ) {
fieldMask|=1;
this.setFieldsComputed$I(1);
}var timeOfDay=0;
if (P$.Calendar.isFieldSet$I$I(fieldMask, 11)) {
timeOfDay+=this.internalGet$I(11);
} else {
timeOfDay+=this.internalGet$I(10);
if (P$.Calendar.isFieldSet$I$I(fieldMask, 9)) {
timeOfDay+=12 * this.internalGet$I(9);
}}timeOfDay*=60;
timeOfDay+=this.internalGet$I(12);
timeOfDay*=60;
timeOfDay+=this.internalGet$I(13);
timeOfDay*=1000;
timeOfDay+=this.internalGet$I(14);
var fixedDate=(timeOfDay/86400000|0);
timeOfDay%=86400000;
while (timeOfDay < 0){
timeOfDay+=86400000;
--fixedDate;
}
 calculateFixedDate : {
var gfd;
gfd=fixedDate + p$1.getFixedDate$sun_util_calendar_BaseCalendar$I$I.apply(this, [p$1.getGcal.apply(this, []), year, fieldMask]);
fixedDate=gfd;
break calculateFixedDate;
}var millis=(fixedDate - 719163) * 86400000 + timeOfDay;
var zone=this.getZone$();
if (this.zoneOffsets == null ) {
this.zoneOffsets=Clazz.array(Integer.TYPE, [2]);
}var tzMask=fieldMask & (98304);
if (tzMask != (98304)) {
if (Clazz.instanceOf(zone, "sun.util.calendar.ZoneInfo")) {
(zone).getOffsetsByWall$J$IA(millis, this.zoneOffsets);
} else {
var gmtOffset=P$.Calendar.isFieldSet$I$I(fieldMask, 15) ? this.internalGet$I(15) : zone.getRawOffset$();
zone.getOffsets$J$IA(millis - gmtOffset, this.zoneOffsets);
}}if (tzMask != 0) {
if (P$.Calendar.isFieldSet$I$I(tzMask, 15)) {
this.zoneOffsets[0]=this.internalGet$I(15);
}if (P$.Calendar.isFieldSet$I$I(tzMask, 16)) {
this.zoneOffsets[1]=this.internalGet$I(16);
}}millis-=this.zoneOffsets[0] + this.zoneOffsets[1];
this.time=millis;
var mask=p$1.computeFields$I$I.apply(this, [fieldMask | this.getSetStateFields$(), tzMask]);
if (!this.isLenient$()) {
for (var field=0; field < 17; field++) {
if (!this.isExternallySet$I(field)) {
continue;
}if (this.originalFields[field] != this.internalGet$I(field)) {
System.arraycopy$O$I$O$I$I(this.originalFields, 0, this.fields, 0, this.fields.length);
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[P$.Calendar.getFieldName$I(field)]);
}}
}this.setFieldsNormalized$I(mask);
});

Clazz.newMeth(C$, 'getFixedDate$sun_util_calendar_BaseCalendar$I$I', function (cal, year, fieldMask) {
var month=0;
if (P$.Calendar.isFieldSet$I$I(fieldMask, 2)) {
month=this.internalGet$I(2);
if (month > 11) {
year+=(month/12|0);
month%=12;
} else if (month < 0) {
var rem=Clazz.array(Integer.TYPE, [1]);
year+=$I$(6).floorDivide$I$I$IA(month, 12, rem);
month=rem[0];
}}var fixedDate=cal.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(year, month + 1, 1, cal === p$1.getGcal.apply(this, [])  ? this.gdate : null);
if (P$.Calendar.isFieldSet$I$I(fieldMask, 2)) {
if (P$.Calendar.isFieldSet$I$I(fieldMask, 5)) {
if (this.isSet$I(5)) {
fixedDate+=this.internalGet$I(5);
fixedDate--;
}} else {
if (P$.Calendar.isFieldSet$I$I(fieldMask, 4)) {
var firstDayOfWeek=$I$(5).getDayOfWeekDateOnOrBefore$J$I(fixedDate + 6, this.getFirstDayOfWeek$());
if ((firstDayOfWeek - fixedDate) >= this.getMinimalDaysInFirstWeek$()) {
firstDayOfWeek-=7;
}if (P$.Calendar.isFieldSet$I$I(fieldMask, 7)) {
firstDayOfWeek=$I$(5).getDayOfWeekDateOnOrBefore$J$I(firstDayOfWeek + 6, this.internalGet$I(7));
}fixedDate=firstDayOfWeek + 7 * (this.internalGet$I(4) - 1);
} else {
var dayOfWeek;
if (P$.Calendar.isFieldSet$I$I(fieldMask, 7)) {
dayOfWeek=this.internalGet$I(7);
} else {
dayOfWeek=this.getFirstDayOfWeek$();
}var dowim;
if (P$.Calendar.isFieldSet$I$I(fieldMask, 8)) {
dowim=this.internalGet$I(8);
} else {
dowim=1;
}if (dowim >= 0) {
fixedDate=$I$(5).getDayOfWeekDateOnOrBefore$J$I(fixedDate + (7 * dowim) - 1, dayOfWeek);
} else {
var lastDate=p$1.monthLength$I$I.apply(this, [month, year]) + (7 * (dowim + 1));
fixedDate=$I$(5).getDayOfWeekDateOnOrBefore$J$I(fixedDate + lastDate - 1, dayOfWeek);
}}}} else {
if (year == this.gregorianCutoverYear && cal === p$1.getGcal.apply(this, [])   && fixedDate < this.gregorianCutoverDate  && this.gregorianCutoverYear != this.gregorianCutoverYearJulian ) {
fixedDate=this.gregorianCutoverDate;
}if (P$.Calendar.isFieldSet$I$I(fieldMask, 6)) {
fixedDate+=this.internalGet$I(6);
fixedDate--;
} else {
var firstDayOfWeek=$I$(5).getDayOfWeekDateOnOrBefore$J$I(fixedDate + 6, this.getFirstDayOfWeek$());
if ((firstDayOfWeek - fixedDate) >= this.getMinimalDaysInFirstWeek$()) {
firstDayOfWeek-=7;
}if (P$.Calendar.isFieldSet$I$I(fieldMask, 7)) {
var dayOfWeek=this.internalGet$I(7);
if (dayOfWeek != this.getFirstDayOfWeek$()) {
firstDayOfWeek=$I$(5).getDayOfWeekDateOnOrBefore$J$I(firstDayOfWeek + 6, dayOfWeek);
}}fixedDate=firstDayOfWeek + 7 * (this.internalGet$I(3) - 1);
}}return fixedDate;
}, p$1);

Clazz.newMeth(C$, 'getNormalizedCalendar', function () {
var gc;
if (this.isFullyNormalized$()) {
gc=this;
} else {
gc=this.clone$();
gc.setLenient$Z(true);
gc.complete$();
}return gc;
}, p$1);

Clazz.newMeth(C$, 'getCalendarDate$J', function (fd) {
var cal=p$1.getGcal.apply(this, []);
var d=cal.newCalendarDate$java_util_TimeZone($I$(2).NO_TIMEZONE);
cal.getCalendarDateFromFixedDate$sun_util_calendar_CalendarDate$J(d, fd);
return d;
}, p$1);

Clazz.newMeth(C$, 'monthLength$I$I', function (month, year) {
return this.isLeapYear$I(year) ? C$.LEAP_MONTH_LENGTH[month] : C$.MONTH_LENGTH[month];
}, p$1);

Clazz.newMeth(C$, 'monthLength$I', function (month) {
var year=this.internalGet$I(1);
if (p$1.internalGetEra.apply(this, []) == 0) {
year=1 - year;
}return p$1.monthLength$I$I.apply(this, [month, year]);
}, p$1);

Clazz.newMeth(C$, 'pinDayOfMonth', function () {
var year=this.internalGet$I(1);
var monthLen;
if (year > this.gregorianCutoverYear || year < this.gregorianCutoverYearJulian ) {
monthLen=p$1.monthLength$I.apply(this, [this.internalGet$I(2)]);
} else {
var gc=p$1.getNormalizedCalendar.apply(this, []);
monthLen=gc.getActualMaximum$I(5);
}var dom=this.internalGet$I(5);
if (dom > monthLen) {
this.set$I$I(5, monthLen);
}}, p$1);

Clazz.newMeth(C$, 'getCurrentFixedDate', function () {
return (this.calsys === p$1.getGcal.apply(this, []) ) ? this.cachedFixedDate : this.calsys.getFixedDate$sun_util_calendar_CalendarDate(this.cdate);
}, p$1);

Clazz.newMeth(C$, 'getRolledValue$I$I$I$I', function (value, amount, min, max) {
Clazz.assert(C$, this, function(){return value >= min && value <= max });
var range=max - min + 1;
amount%=range;
var n=value + amount;
if (n > max) {
n-=range;
} else if (n < min) {
n+=range;
}Clazz.assert(C$, this, function(){return n >= min && n <= max });
return n;
}, 1);

Clazz.newMeth(C$, 'internalGetEra', function () {
return this.isSet$I(0) ? this.internalGet$I(0) : 1;
}, p$1);

Clazz.newMeth(C$, 'setGregorianChange$java_util_Date', function (changeoverDate) {
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:46 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
