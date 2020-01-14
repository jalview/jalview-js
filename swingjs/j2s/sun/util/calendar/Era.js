(function(){var P$=Clazz.newPackage("sun.util.calendar"),I$=[[0,'sun.util.calendar.CalendarSystem','sun.util.calendar.ImmutableGregorianDate','StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Era");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.abbr=null;
this.since=0;
this.sinceDate=null;
this.localTime=false;
this.hash=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.hash=0;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$J$Z', function (name, abbr, since, localTime) {
C$.$init$.apply(this);
this.name=name;
this.abbr=abbr;
this.since=since;
this.localTime=localTime;
var gcal=$I$(1).getGregorianCalendar$();
var d=gcal.newCalendarDate$java_util_TimeZone(null);
gcal.getCalendarDate$J$sun_util_calendar_CalendarDate(since, d);
this.sinceDate=Clazz.new_($I$(2).c$$sun_util_calendar_BaseCalendar_Date,[d]);
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getDisplayName$java_util_Locale', function (locale) {
return this.name;
});

Clazz.newMeth(C$, 'getAbbreviation$', function () {
return this.abbr;
});

Clazz.newMeth(C$, 'getDiaplayAbbreviation$java_util_Locale', function (locale) {
return this.abbr;
});

Clazz.newMeth(C$, 'getSince$java_util_TimeZone', function (zone) {
if (zone == null  || !this.localTime ) {
return this.since;
}var offset=zone.getOffset$J(this.since);
return this.since - offset;
});

Clazz.newMeth(C$, 'getSinceDate$', function () {
return this.sinceDate;
});

Clazz.newMeth(C$, 'isLocalTime$', function () {
return this.localTime;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "sun.util.calendar.Era"))) {
return false;
}var that=o;
return this.name.equals$O(that.name) && this.abbr.equals$O(that.abbr) && this.since == that.since   && this.localTime == that.localTime  ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.hash == 0) {
this.hash=this.name.hashCode$() ^ this.abbr.hashCode$() ^ (this.since|0) ^ ((this.since >> 32)|0) ^ (this.localTime ? 1 : 0) ;
}return this.hash;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(3));
sb.append$C("[");
sb.append$S(this.getName$()).append$S(" (");
sb.append$S(this.getAbbreviation$()).append$C(")");
sb.append$S(" since ").append$O(this.getSinceDate$());
if (this.localTime) {
sb.setLength$I(sb.length$() - 1);
sb.append$S(" local time");
}sb.append$C("]");
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:41 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
