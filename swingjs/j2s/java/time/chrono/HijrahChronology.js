(function(){var P$=Clazz.newPackage("java.time.chrono"),p$1={},I$=[[0,'InternalError','java.time.chrono.AbstractChronology','sun.util.logging.PlatformLogger','java.time.chrono.HijrahDate','java.time.Clock','java.time.LocalDate','java.time.temporal.ChronoField','java.time.chrono.HijrahEra','java.util.Arrays','java.time.temporal.ValueRange','java.security.AccessController','java.io.File','java.util.Properties','java.io.FileInputStream','java.util.Objects','java.util.HashMap']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HijrahChronology", null, 'java.time.chrono.AbstractChronology', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['initComplete'],'I',['minEpochDay','maxEpochDay','hijrahStartEpochMonth','minMonthLength','maxMonthLength','minYearLength','maxYearLength'],'S',['typeId','calendarType'],'O',['hijrahEpochMonthStartDays','int[]']]
,['O',['INSTANCE','java.time.chrono.HijrahChronology','calendarProperties','java.util.Properties']]]

Clazz.newMeth(C$, 'registerVariants$', function () {
for (var name, $name = C$.calendarProperties.stringPropertyNames$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if (name.startsWith$S("calendar.hijrah.")) {
var id=name.substring$I("calendar.hijrah.".length$());
if (id.indexOf$I(".") >= 0) {
continue;
}if (id.equals$O(C$.INSTANCE.getId$())) {
continue;
}try {
var chrono=Clazz.new_(C$.c$$S,[id]);
$I$(2).registerChrono$java_time_chrono_Chronology(chrono);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
var logger=$I$(3).getLogger$S("java.time.chrono");
logger.severe$S$Throwable("Unable to initialize Hijrah calendar: " + id, ex);
} else {
throw ex;
}
}
}}
}, 1);

Clazz.newMeth(C$, 'c$$S', function (id) {
Clazz.super_(C$, this);
if (id.isEmpty$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["calendar id is empty"]);
}var propName="calendar.hijrah." + id + ".type" ;
var calType=C$.calendarProperties.getProperty$S(propName);
if (calType == null  || calType.isEmpty$() ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["calendarType is missing or empty for: " + propName]);
}this.typeId=id;
this.calendarType=calType;
}, 1);

Clazz.newMeth(C$, 'checkCalendarInit', function () {
if (this.initComplete == false ) {
p$1.loadCalendarData.apply(this, []);
this.initComplete=true;
}}, p$1);

Clazz.newMeth(C$, 'getId$', function () {
return this.typeId;
});

Clazz.newMeth(C$, 'getCalendarType$', function () {
return this.calendarType;
});

Clazz.newMeth(C$, 'date$java_time_chrono_Era$I$I$I', function (era, yearOfEra, month, dayOfMonth) {
return this.date$I$I$I(this.prolepticYear$java_time_chrono_Era$I(era, yearOfEra), month, dayOfMonth);
});

Clazz.newMeth(C$, 'date$I$I$I', function (prolepticYear, month, dayOfMonth) {
return $I$(4).of$java_time_chrono_HijrahChronology$I$I$I(this, prolepticYear, month, dayOfMonth);
});

Clazz.newMeth(C$, 'dateYearDay$java_time_chrono_Era$I$I', function (era, yearOfEra, dayOfYear) {
return this.dateYearDay$I$I(this.prolepticYear$java_time_chrono_Era$I(era, yearOfEra), dayOfYear);
});

Clazz.newMeth(C$, 'dateYearDay$I$I', function (prolepticYear, dayOfYear) {
var date=$I$(4).of$java_time_chrono_HijrahChronology$I$I$I(this, prolepticYear, 1, 1);
if (dayOfYear > date.lengthOfYear$()) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid dayOfYear: " + dayOfYear]);
}return date.plusDays$J(dayOfYear - 1);
});

Clazz.newMeth(C$, 'dateEpochDay$J', function (epochDay) {
return $I$(4).ofEpochDay$java_time_chrono_HijrahChronology$J(this, epochDay);
});

Clazz.newMeth(C$, 'dateNow$', function () {
return this.dateNow$java_time_Clock($I$(5).systemDefaultZone$());
});

Clazz.newMeth(C$, 'dateNow$java_time_ZoneId', function (zone) {
return this.dateNow$java_time_Clock($I$(5).system$java_time_ZoneId(zone));
});

Clazz.newMeth(C$, 'dateNow$java_time_Clock', function (clock) {
return this.date$java_time_temporal_TemporalAccessor($I$(6).now$java_time_Clock(clock));
});

Clazz.newMeth(C$, 'date$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.chrono.HijrahDate")) {
return temporal;
}return $I$(4,"ofEpochDay$java_time_chrono_HijrahChronology$J",[this, temporal.getLong$java_time_temporal_TemporalField($I$(7).EPOCH_DAY)]);
});

Clazz.newMeth(C$, 'localDateTime$java_time_temporal_TemporalAccessor', function (temporal) {
return C$.superclazz.prototype.localDateTime$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
});

Clazz.newMeth(C$, 'zonedDateTime$java_time_temporal_TemporalAccessor', function (temporal) {
return C$.superclazz.prototype.zonedDateTime$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
});

Clazz.newMeth(C$, 'zonedDateTime$java_time_Instant$java_time_ZoneId', function (instant, zone) {
return C$.superclazz.prototype.zonedDateTime$java_time_Instant$java_time_ZoneId.apply(this, [instant, zone]);
});

Clazz.newMeth(C$, 'isLeapYear$J', function (prolepticYear) {
p$1.checkCalendarInit.apply(this, []);
var epochMonth=p$1.yearToEpochMonth$I.apply(this, [(prolepticYear|0)]);
if (epochMonth < 0 || epochMonth > this.maxEpochDay ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Hijrah date out of range"]);
}var len=this.getYearLength$I((prolepticYear|0));
return (len > 354);
});

Clazz.newMeth(C$, 'prolepticYear$java_time_chrono_Era$I', function (era, yearOfEra) {
if (Clazz.instanceOf(era, "java.time.chrono.HijrahEra") == false ) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["Era must be HijrahEra"]);
}return yearOfEra;
});

Clazz.newMeth(C$, 'eraOf$I', function (eraValue) {
switch (eraValue) {
case 1:
return $I$(8).AH;
default:
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["invalid Hijrah era"]);
}
});

Clazz.newMeth(C$, 'eras$', function () {
return $I$(9,"asList$OA",[$I$(8).values$()]);
});

Clazz.newMeth(C$, 'range$java_time_temporal_ChronoField', function (field) {
p$1.checkCalendarInit.apply(this, []);
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
switch (f) {
case $I$(7).DAY_OF_MONTH:
return $I$(10,"of$J$J$J$J",[1, 1, this.getMinimumMonthLength$(), this.getMaximumMonthLength$()]);
case $I$(7).DAY_OF_YEAR:
return $I$(10,"of$J$J",[1, this.getMaximumDayOfYear$()]);
case $I$(7).ALIGNED_WEEK_OF_MONTH:
return $I$(10).of$J$J(1, 5);
case $I$(7).YEAR:
case $I$(7).YEAR_OF_ERA:
return $I$(10,"of$J$J",[this.getMinimumYear$(), this.getMaximumYear$()]);
case $I$(7).ERA:
return $I$(10).of$J$J(1, 1);
default:
return field.range$();
}
}return field.range$();
});

Clazz.newMeth(C$, 'resolveDate$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
return C$.superclazz.prototype.resolveDate$java_util_Map$java_time_format_ResolverStyle.apply(this, [fieldValues, resolverStyle]);
});

Clazz.newMeth(C$, 'checkValidYear$J', function (prolepticYear) {
if (prolepticYear < this.getMinimumYear$() || prolepticYear > this.getMaximumYear$() ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid Hijrah year: " + prolepticYear]);
}return (prolepticYear|0);
});

Clazz.newMeth(C$, 'checkValidDayOfYear$I', function (dayOfYear) {
if (dayOfYear < 1 || dayOfYear > this.getMaximumDayOfYear$() ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid Hijrah day of year: " + dayOfYear]);
}});

Clazz.newMeth(C$, 'checkValidMonth$I', function (month) {
if (month < 1 || month > 12 ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid Hijrah month: " + month]);
}});

Clazz.newMeth(C$, 'getHijrahDateInfo$I', function (epochDay) {
p$1.checkCalendarInit.apply(this, []);
if (epochDay < this.minEpochDay || epochDay >= this.maxEpochDay ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Hijrah date out of range"]);
}var epochMonth=p$1.epochDayToEpochMonth$I.apply(this, [epochDay]);
var year=p$1.epochMonthToYear$I.apply(this, [epochMonth]);
var month=p$1.epochMonthToMonth$I.apply(this, [epochMonth]);
var day1=p$1.epochMonthToEpochDay$I.apply(this, [epochMonth]);
var date=epochDay - day1;
var dateInfo=Clazz.array(Integer.TYPE, [3]);
dateInfo[0]=year;
dateInfo[1]=month + 1;
dateInfo[2]=date + 1;
return dateInfo;
});

Clazz.newMeth(C$, 'getEpochDay$I$I$I', function (prolepticYear, monthOfYear, dayOfMonth) {
p$1.checkCalendarInit.apply(this, []);
this.checkValidMonth$I(monthOfYear);
var epochMonth=p$1.yearToEpochMonth$I.apply(this, [prolepticYear]) + (monthOfYear - 1);
if (epochMonth < 0 || epochMonth >= this.hijrahEpochMonthStartDays.length ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid Hijrah date, year: " + prolepticYear + ", month: " + monthOfYear ]);
}if (dayOfMonth < 1 || dayOfMonth > this.getMonthLength$I$I(prolepticYear, monthOfYear) ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid Hijrah day of month: " + dayOfMonth]);
}return p$1.epochMonthToEpochDay$I.apply(this, [epochMonth]) + (dayOfMonth - 1);
});

Clazz.newMeth(C$, 'getDayOfYear$I$I', function (prolepticYear, month) {
return p$1.yearMonthToDayOfYear$I$I.apply(this, [prolepticYear, (month - 1)]);
});

Clazz.newMeth(C$, 'getMonthLength$I$I', function (prolepticYear, monthOfYear) {
var epochMonth=p$1.yearToEpochMonth$I.apply(this, [prolepticYear]) + (monthOfYear - 1);
if (epochMonth < 0 || epochMonth >= this.hijrahEpochMonthStartDays.length ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid Hijrah date, year: " + prolepticYear + ", month: " + monthOfYear ]);
}return p$1.epochMonthLength$I.apply(this, [epochMonth]);
});

Clazz.newMeth(C$, 'getYearLength$I', function (prolepticYear) {
return p$1.yearMonthToDayOfYear$I$I.apply(this, [prolepticYear, 12]);
});

Clazz.newMeth(C$, 'getMinimumYear$', function () {
return p$1.epochMonthToYear$I.apply(this, [0]);
});

Clazz.newMeth(C$, 'getMaximumYear$', function () {
return p$1.epochMonthToYear$I.apply(this, [this.hijrahEpochMonthStartDays.length - 1]) - 1;
});

Clazz.newMeth(C$, 'getMaximumMonthLength$', function () {
return this.maxMonthLength;
});

Clazz.newMeth(C$, 'getMinimumMonthLength$', function () {
return this.minMonthLength;
});

Clazz.newMeth(C$, 'getMaximumDayOfYear$', function () {
return this.maxYearLength;
});

Clazz.newMeth(C$, 'getSmallestMaximumDayOfYear$', function () {
return this.minYearLength;
});

Clazz.newMeth(C$, 'epochDayToEpochMonth$I', function (epochDay) {
var ndx=$I$(9).binarySearch$IA$I(this.hijrahEpochMonthStartDays, epochDay);
if (ndx < 0) {
ndx=-ndx - 2;
}return ndx;
}, p$1);

Clazz.newMeth(C$, 'epochMonthToYear$I', function (epochMonth) {
return ((epochMonth + this.hijrahStartEpochMonth)/12|0);
}, p$1);

Clazz.newMeth(C$, 'yearToEpochMonth$I', function (year) {
return (year * 12) - this.hijrahStartEpochMonth;
}, p$1);

Clazz.newMeth(C$, 'epochMonthToMonth$I', function (epochMonth) {
return (epochMonth + this.hijrahStartEpochMonth) % 12;
}, p$1);

Clazz.newMeth(C$, 'epochMonthToEpochDay$I', function (epochMonth) {
return this.hijrahEpochMonthStartDays[epochMonth];
}, p$1);

Clazz.newMeth(C$, 'yearMonthToDayOfYear$I$I', function (prolepticYear, month) {
var epochMonthFirst=p$1.yearToEpochMonth$I.apply(this, [prolepticYear]);
return p$1.epochMonthToEpochDay$I.apply(this, [epochMonthFirst + month]) - p$1.epochMonthToEpochDay$I.apply(this, [epochMonthFirst]);
}, p$1);

Clazz.newMeth(C$, 'epochMonthLength$I', function (epochMonth) {
return this.hijrahEpochMonthStartDays[epochMonth + 1] - this.hijrahEpochMonthStartDays[epochMonth];
}, p$1);

Clazz.newMeth(C$, 'readConfigProperties$S', function (resource) {
try {
return $I$(11,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.HijrahChronology$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "HijrahChronology$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$', function () {
var libDir=System.getProperty$S("java.home") + $I$(12).separator + "lib" ;
var file=Clazz.new_($I$(12,1).c$$S$S,[libDir, this.$finals$.resource]);
var props=Clazz.new_($I$(13,1));
try {
var is=Clazz.new_($I$(14,1).c$$java_io_File,[file]);
try {
props.load$java_io_InputStream(is);

}finally{/*res*/is&&is.close$&&is.close$();}
}finally{}
return props;
});
})()
), Clazz.new_(P$.HijrahChronology$lambda1.$init$,[this, {resource:resource}]))]);
} catch (pax) {
if (Clazz.exceptionOf(pax,"java.security.PrivilegedActionException")){
throw pax.getException$();
} else {
throw pax;
}
}
}, 1);

Clazz.newMeth(C$, 'loadCalendarData', function () {
try {
var resourceName=C$.calendarProperties.getProperty$S("calendar.hijrah." + this.typeId);
$I$(15).requireNonNull$O$S(resourceName, "Resource missing for calendar: " + "calendar.hijrah." + this.typeId );
var props=C$.readConfigProperties$S(resourceName);
var years=Clazz.new_($I$(16,1));
var minYear=2147483647;
var maxYear=-2147483648;
var id=null;
var type=null;
var version=null;
var isoStart=0;
for (var entry, $entry = props.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
switch (key) {
case "id":
id=entry.getValue$();
break;
case "type":
type=entry.getValue$();
break;
case "version":
version=entry.getValue$();
break;
case "iso-start":
{
var ymd=p$1.parseYMD$S.apply(this, [entry.getValue$()]);
isoStart=($I$(6).of$I$I$I(ymd[0], ymd[1], ymd[2]).toEpochDay$()|0);
break;
}default:
try {
var year=(Integer.valueOf$S(key)).valueOf();
var months=p$1.parseMonths$S.apply(this, [entry.getValue$()]);
years.put$O$O(Integer.valueOf$I(year), months);
maxYear=Math.max(maxYear, year);
minYear=Math.min(minYear, year);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad key: " + key]);
} else {
throw nfe;
}
}
}
}
if (!this.getId$().equals$O(id)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Configuration is for a different calendar: " + id]);
}if (!this.getCalendarType$().equals$O(type)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Configuration is for a different calendar type: " + type]);
}if (version == null  || version.isEmpty$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Configuration does not contain a version"]);
}if (isoStart == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Configuration does not contain a ISO start date"]);
}this.hijrahStartEpochMonth=minYear * 12;
this.minEpochDay=isoStart;
this.hijrahEpochMonthStartDays=p$1.createEpochMonths$I$I$I$java_util_Map.apply(this, [this.minEpochDay, minYear, maxYear, years]);
this.maxEpochDay=this.hijrahEpochMonthStartDays[this.hijrahEpochMonthStartDays.length - 1];
for (var year=minYear; year < maxYear; year++) {
var length=this.getYearLength$I(year);
this.minYearLength=Math.min(this.minYearLength, length);
this.maxYearLength=Math.max(this.maxYearLength, length);
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
var logger=$I$(3).getLogger$S("java.time.chrono");
logger.severe$S$Throwable("Unable to initialize Hijrah calendar proxy: " + this.typeId, ex);
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Unable to initialize HijrahCalendar: " + this.typeId, ex]);
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'createEpochMonths$I$I$I$java_util_Map', function (epochDay, minYear, maxYear, years) {
var numMonths=(maxYear - minYear + 1) * 12 + 1;
var epochMonth=0;
var epochMonths=Clazz.array(Integer.TYPE, [numMonths]);
this.minMonthLength=2147483647;
this.maxMonthLength=-2147483648;
for (var year=minYear; year <= maxYear; year++) {
var months=years.get$O(Integer.valueOf$I(year));
for (var month=0; month < 12; month++) {
var length=months[month];
epochMonths[epochMonth++]=epochDay;
if (length < 29 || length > 32 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid month length in year: " + minYear]);
}epochDay+=length;
this.minMonthLength=Math.min(this.minMonthLength, length);
this.maxMonthLength=Math.max(this.maxMonthLength, length);
}
}
epochMonths[epochMonth++]=epochDay;
if (epochMonth != epochMonths.length) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Did not fill epochMonths exactly: ndx = " + epochMonth + " should be " + epochMonths.length ]);
}return epochMonths;
}, p$1);

Clazz.newMeth(C$, 'parseMonths$S', function (line) {
var months=Clazz.array(Integer.TYPE, [12]);
var numbers=line.split$S("\\s");
if (numbers.length != 12) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["wrong number of months on line: " + $I$(9).toString$OA(numbers) + "; count: " + numbers.length ]);
}for (var i=0; i < 12; i++) {
try {
months[i]=(Integer.valueOf$S(numbers[i])).valueOf();
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad key: " + numbers[i]]);
} else {
throw nfe;
}
}
}
return months;
}, p$1);

Clazz.newMeth(C$, 'parseYMD$S', function (string) {
string=string.trim$();
try {
if (string.charAt$I(4) != "-" || string.charAt$I(7) != "-" ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["date must be yyyy-MM-dd"]);
}var ymd=Clazz.array(Integer.TYPE, [3]);
ymd[0]=(Integer.valueOf$S(string.substring$I$I(0, 4))).valueOf();
ymd[1]=(Integer.valueOf$S(string.substring$I$I(5, 7))).valueOf();
ymd[2]=(Integer.valueOf$S(string.substring$I$I(8, 10))).valueOf();
return ymd;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S$Throwable,["date must be yyyy-MM-dd", ex]);
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'writeReplace$', function () {
return C$.superclazz.prototype.writeReplace$.apply(this, []);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

C$.$static$=function(){C$.$static$=0;
{
try {
;
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_($I$(1,1).c$$S$Throwable,["Can\'t initialize lib/calendars.properties", ioe]);
} else {
throw ioe;
}
}
try {
C$.INSTANCE=Clazz.new_(C$.c$$S,["Hijrah-umalqura"]);
$I$(2).registerChrono$java_time_chrono_Chronology$S(C$.INSTANCE, "Hijrah");
$I$(2).registerChrono$java_time_chrono_Chronology$S(C$.INSTANCE, "islamic");
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
var logger=$I$(3).getLogger$S("java.time.chrono");
logger.severe$S$Throwable("Unable to initialize Hijrah calendar: Hijrah-umalqura", ex);
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["Unable to initialize Hijrah-umalqura calendar", ex.getCause$()]);
} else {
throw ex;
}
}
C$.registerVariants$();
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
