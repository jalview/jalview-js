(function(){var P$=Clazz.newPackage("sun.util.calendar"),I$=[[0,'sun.util.calendar.Era','sun.util.calendar.CalendarUtils']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractCalendar", null, 'sun.util.calendar.CalendarSystem');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.eras=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'getEra$S', function (eraName) {
if (this.eras != null ) {
for (var i=0; i < this.eras.length; i++) {
if (this.eras[i].equals$O(eraName)) {
return this.eras[i];
}}
}return null;
});

Clazz.newMeth(C$, 'getEras$', function () {
var e=null;
if (this.eras != null ) {
e=Clazz.array($I$(1), [this.eras.length]);
System.arraycopy$O$I$O$I$I(this.eras, 0, e, 0, this.eras.length);
}return e;
});

Clazz.newMeth(C$, 'setEra$sun_util_calendar_CalendarDate$S', function (date, eraName) {
if (this.eras == null ) {
return;
}for (var i=0; i < this.eras.length; i++) {
var e=this.eras[i];
if (e != null  && e.getName$().equals$O(eraName) ) {
date.setEra$sun_util_calendar_Era(e);
return;
}}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["unknown era name: " + eraName]);
});

Clazz.newMeth(C$, 'setEras$sun_util_calendar_EraA', function (eras) {
this.eras=eras;
});

Clazz.newMeth(C$, 'getCalendarDate$', function () {
return this.getCalendarDate$J$sun_util_calendar_CalendarDate(System.currentTimeMillis$(), this.newCalendarDate$());
});

Clazz.newMeth(C$, 'getCalendarDate$J', function (millis) {
return this.getCalendarDate$J$sun_util_calendar_CalendarDate(millis, this.newCalendarDate$());
});

Clazz.newMeth(C$, 'getCalendarDate$J$java_util_TimeZone', function (millis, zone) {
var date=this.newCalendarDate$java_util_TimeZone(zone);
return this.getCalendarDate$J$sun_util_calendar_CalendarDate(millis, date);
});

Clazz.newMeth(C$, 'getCalendarDate$J$sun_util_calendar_CalendarDate', function (millis, date) {
var ms=0;
var zoneOffset=0;
var saving=0;
var days=0;
var zi=date.getZone$();
if (zi != null ) {
var offsets=Clazz.array(Integer.TYPE, [2]);
if (Clazz.instanceOf(zi, "sun.util.calendar.ZoneInfo")) {
zoneOffset=(zi).getOffsets$J$IA(millis, offsets);
} else {
zoneOffset=zi.getOffset$J(millis);
offsets[0]=zi.getRawOffset$();
offsets[1]=zoneOffset - offsets[0];
}days=(zoneOffset/86400000|0);
ms=zoneOffset % 86400000;
saving=offsets[1];
}date.setZoneOffset$I(zoneOffset);
date.setDaylightSaving$I(saving);
days+=(millis/86400000|0);
ms+=((millis % 86400000)|0);
if (ms >= 86400000) {
ms-=86400000;
++days;
} else {
while (ms < 0){
ms+=86400000;
--days;
}
}days+=719163;
this.getCalendarDateFromFixedDate$sun_util_calendar_CalendarDate$J(date, days);
this.setTimeOfDay$sun_util_calendar_CalendarDate$I(date, ms);
date.setLeapYear$Z(this.isLeapYear$sun_util_calendar_CalendarDate(date));
date.setNormalized$Z(true);
return date;
});

Clazz.newMeth(C$, 'getTime$sun_util_calendar_CalendarDate', function (date) {
var gd=this.getFixedDate$sun_util_calendar_CalendarDate(date);
var ms=(gd - 719163) * 86400000 + this.getTimeOfDay$sun_util_calendar_CalendarDate(date);
var zoneOffset=0;
var zi=date.getZone$();
if (zi != null ) {
if (date.isNormalized$()) {
return ms - date.getZoneOffset$();
}var offsets=Clazz.array(Integer.TYPE, [2]);
if (date.isStandardTime$()) {
if (Clazz.instanceOf(zi, "sun.util.calendar.ZoneInfo")) {
(zi).getOffsetsByStandard$J$IA(ms, offsets);
zoneOffset=offsets[0];
} else {
zoneOffset=zi.getOffset$J(ms - zi.getRawOffset$());
}} else {
if (Clazz.instanceOf(zi, "sun.util.calendar.ZoneInfo")) {
zoneOffset=(zi).getOffsetsByWall$J$IA(ms, offsets);
} else {
zoneOffset=zi.getOffset$J(ms - zi.getRawOffset$());
}}}ms-=zoneOffset;
this.getCalendarDate$J$sun_util_calendar_CalendarDate(ms, date);
return ms;
});

Clazz.newMeth(C$, 'getTimeOfDay$sun_util_calendar_CalendarDate', function (date) {
var fraction=date.getTimeOfDay$();
if (fraction != -9223372036854775808) {
return fraction;
}fraction=this.getTimeOfDayValue$sun_util_calendar_CalendarDate(date);
date.setTimeOfDay$J(fraction);
return fraction;
});

Clazz.newMeth(C$, 'getTimeOfDayValue$sun_util_calendar_CalendarDate', function (date) {
var fraction=date.getHours$();
fraction*=60;
fraction+=date.getMinutes$();
fraction*=60;
fraction+=date.getSeconds$();
fraction*=1000;
fraction+=date.getMillis$();
return fraction;
});

Clazz.newMeth(C$, 'setTimeOfDay$sun_util_calendar_CalendarDate$I', function (cdate, fraction) {
if (fraction < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}var normalizedState=cdate.isNormalized$();
var time=fraction;
var hours=(time/3600000|0);
time%=3600000;
var minutes=(time/60000|0);
time%=60000;
var seconds=(time/1000|0);
time%=1000;
cdate.setHours$I(hours);
cdate.setMinutes$I(minutes);
cdate.setSeconds$I(seconds);
cdate.setMillis$I(time);
cdate.setTimeOfDay$J(fraction);
if (hours < 24 && normalizedState ) {
cdate.setNormalized$Z(normalizedState);
}return cdate;
});

Clazz.newMeth(C$, 'getWeekLength$', function () {
return 7;
});

Clazz.newMeth(C$, 'getNthDayOfWeek$I$I$sun_util_calendar_CalendarDate', function (nth, dayOfWeek, date) {
var ndate=date.clone$();
this.normalize$sun_util_calendar_CalendarDate(ndate);
var fd=this.getFixedDate$sun_util_calendar_CalendarDate(ndate);
var nfd;
if (nth > 0) {
nfd=7 * nth + C$.getDayOfWeekDateBefore$J$I(fd, dayOfWeek);
} else {
nfd=7 * nth + C$.getDayOfWeekDateAfter$J$I(fd, dayOfWeek);
}this.getCalendarDateFromFixedDate$sun_util_calendar_CalendarDate$J(ndate, nfd);
return ndate;
});

Clazz.newMeth(C$, 'getDayOfWeekDateBefore$J$I', function (fixedDate, dayOfWeek) {
return C$.getDayOfWeekDateOnOrBefore$J$I(fixedDate - 1, dayOfWeek);
}, 1);

Clazz.newMeth(C$, 'getDayOfWeekDateAfter$J$I', function (fixedDate, dayOfWeek) {
return C$.getDayOfWeekDateOnOrBefore$J$I(fixedDate + 7, dayOfWeek);
}, 1);

Clazz.newMeth(C$, 'getDayOfWeekDateOnOrBefore$J$I', function (fixedDate, dayOfWeek) {
var fd=fixedDate - (dayOfWeek - 1);
if (fd >= 0) {
return fixedDate - (fd % 7);
}return fixedDate - $I$(2).mod$J$J(fd, 7);
}, 1);

Clazz.newMeth(C$, 'validateTime$sun_util_calendar_CalendarDate', function (date) {
var t=date.getHours$();
if (t < 0 || t >= 24 ) {
return false;
}t=date.getMinutes$();
if (t < 0 || t >= 60 ) {
return false;
}t=date.getSeconds$();
if (t < 0 || t >= 60 ) {
return false;
}t=date.getMillis$();
if (t < 0 || t >= 1000 ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'normalizeTime$sun_util_calendar_CalendarDate', function (date) {
var fraction=this.getTimeOfDay$sun_util_calendar_CalendarDate(date);
var days=0;
if (fraction >= 86400000) {
days=(fraction/86400000|0);
fraction%=86400000;
} else if (fraction < 0) {
days=$I$(2).floorDivide$J$J(fraction, 86400000);
if (days != 0) {
fraction-=86400000 * days;
}}if (days != 0) {
date.setTimeOfDay$J(fraction);
}date.setMillis$I(((fraction % 1000)|0));
fraction=(fraction/1000|0);
date.setSeconds$I(((fraction % 60)|0));
fraction=(fraction/60|0);
date.setMinutes$I(((fraction % 60)|0));
date.setHours$I((((fraction/60|0))|0));
return (days|0);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
