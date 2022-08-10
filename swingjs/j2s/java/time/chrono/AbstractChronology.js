(function(){var P$=Clazz.newPackage("java.time.chrono"),p$1={},I$=[[0,'java.util.concurrent.ConcurrentHashMap','java.time.chrono.HijrahChronology','java.time.chrono.JapaneseChronology','java.time.chrono.MinguoChronology','java.time.chrono.ThaiBuddhistChronology','java.util.ServiceLoader','sun.util.logging.PlatformLogger','java.time.chrono.IsoChronology','java.util.Objects','java.time.chrono.Chronology','java.util.HashSet','java.time.temporal.ChronoField','java.time.format.ResolverStyle','java.time.temporal.ChronoUnit','java.time.temporal.TemporalAdjusters','java.time.DayOfWeek','java.time.chrono.Ser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractChronology", null, null, 'java.time.chrono.Chronology');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['DATE_ORDER','java.util.Comparator','+DATE_TIME_ORDER','+INSTANT_ORDER','CHRONOS_BY_ID','java.util.concurrent.ConcurrentHashMap','+CHRONOS_BY_TYPE']]]

Clazz.newMeth(C$, 'registerChrono$java_time_chrono_Chronology', function (chrono) {
return C$.registerChrono$java_time_chrono_Chronology$S(chrono, chrono.getId$());
}, 1);

Clazz.newMeth(C$, 'registerChrono$java_time_chrono_Chronology$S', function (chrono, id) {
var prev=C$.CHRONOS_BY_ID.putIfAbsent$O$O(id, chrono);
if (prev == null ) {
var type=chrono.getCalendarType$();
if (type != null ) {
C$.CHRONOS_BY_TYPE.putIfAbsent$O$O(type, chrono);
}}return prev;
}, 1);

Clazz.newMeth(C$, 'initCache$', function () {
if (C$.CHRONOS_BY_ID.get$O("ISO") == null ) {
C$.registerChrono$java_time_chrono_Chronology($I$(2).INSTANCE);
C$.registerChrono$java_time_chrono_Chronology($I$(3).INSTANCE);
C$.registerChrono$java_time_chrono_Chronology($I$(4).INSTANCE);
C$.registerChrono$java_time_chrono_Chronology($I$(5).INSTANCE);
var loader=$I$(6,"load$Class$ClassLoader",[Clazz.getClass(C$), null]);
for (var chrono, $chrono = loader.iterator$(); $chrono.hasNext$()&&((chrono=($chrono.next$())),1);) {
var id=chrono.getId$();
if (id.equals$O("ISO") || C$.registerChrono$java_time_chrono_Chronology(chrono) != null  ) {
var logger=$I$(7).getLogger$S("java.time.chrono");
logger.warning$S("Ignoring duplicate Chronology, from ServiceLoader configuration " + id);
}}
C$.registerChrono$java_time_chrono_Chronology($I$(8).INSTANCE);
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'ofLocale$java_util_Locale', function (locale) {
$I$(9).requireNonNull$O$S(locale, "locale");
var type=locale.getUnicodeLocaleType$S("ca");
if (type == null  || "iso".equals$O(type)  || "iso8601".equals$O(type) ) {
return $I$(8).INSTANCE;
}do {
var chrono=C$.CHRONOS_BY_TYPE.get$O(type);
if (chrono != null ) {
return chrono;
}} while (C$.initCache$());
var loader=$I$(6,"load$Class",[Clazz.getClass($I$(10),['compareTo$java_time_chrono_Chronology','date$java_time_chrono_Era$I$I$I','date$I$I$I','date$java_time_temporal_TemporalAccessor','dateEpochDay$J','dateNow$','dateNow$java_time_ZoneId','dateNow$java_time_Clock','dateYearDay$java_time_chrono_Era$I$I','dateYearDay$I$I','equals$O','eraOf$I','eras$','from$java_time_temporal_TemporalAccessor','getAvailableChronologies$','getCalendarType$','getDisplayName$java_time_format_TextStyle$java_util_Locale','getId$','hashCode$','isLeapYear$J','localDateTime$java_time_temporal_TemporalAccessor','of$S','ofLocale$java_util_Locale','period$I$I$I','prolepticYear$java_time_chrono_Era$I','range$java_time_temporal_ChronoField','resolveDate$java_util_Map$java_time_format_ResolverStyle','toString','zonedDateTime$java_time_temporal_TemporalAccessor','zonedDateTime$java_time_Instant$java_time_ZoneId'])]);
for (var chrono, $chrono = loader.iterator$(); $chrono.hasNext$()&&((chrono=($chrono.next$())),1);) {
if (type.equals$O(chrono.getCalendarType$())) {
return chrono;
}}
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unknown calendar system: " + type]);
}, 1);

Clazz.newMeth(C$, 'of$S', function (id) {
$I$(9).requireNonNull$O$S(id, "id");
do {
var chrono=C$.of0$S(id);
if (chrono != null ) {
return chrono;
}} while (C$.initCache$());
var loader=$I$(6,"load$Class",[Clazz.getClass($I$(10),['compareTo$java_time_chrono_Chronology','date$java_time_chrono_Era$I$I$I','date$I$I$I','date$java_time_temporal_TemporalAccessor','dateEpochDay$J','dateNow$','dateNow$java_time_ZoneId','dateNow$java_time_Clock','dateYearDay$java_time_chrono_Era$I$I','dateYearDay$I$I','equals$O','eraOf$I','eras$','from$java_time_temporal_TemporalAccessor','getAvailableChronologies$','getCalendarType$','getDisplayName$java_time_format_TextStyle$java_util_Locale','getId$','hashCode$','isLeapYear$J','localDateTime$java_time_temporal_TemporalAccessor','of$S','ofLocale$java_util_Locale','period$I$I$I','prolepticYear$java_time_chrono_Era$I','range$java_time_temporal_ChronoField','resolveDate$java_util_Map$java_time_format_ResolverStyle','toString','zonedDateTime$java_time_temporal_TemporalAccessor','zonedDateTime$java_time_Instant$java_time_ZoneId'])]);
for (var chrono, $chrono = loader.iterator$(); $chrono.hasNext$()&&((chrono=($chrono.next$())),1);) {
if (id.equals$O(chrono.getId$()) || id.equals$O(chrono.getCalendarType$()) ) {
return chrono;
}}
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unknown chronology: " + id]);
}, 1);

Clazz.newMeth(C$, 'of0$S', function (id) {
var chrono=C$.CHRONOS_BY_ID.get$O(id);
if (chrono == null ) {
chrono=C$.CHRONOS_BY_TYPE.get$O(id);
}return chrono;
}, 1);

Clazz.newMeth(C$, 'getAvailableChronologies$', function () {
C$.initCache$();
var chronos=Clazz.new_([C$.CHRONOS_BY_ID.values$()],$I$(11,1).c$$java_util_Collection);
var loader=$I$(6,"load$Class",[Clazz.getClass($I$(10),['compareTo$java_time_chrono_Chronology','date$java_time_chrono_Era$I$I$I','date$I$I$I','date$java_time_temporal_TemporalAccessor','dateEpochDay$J','dateNow$','dateNow$java_time_ZoneId','dateNow$java_time_Clock','dateYearDay$java_time_chrono_Era$I$I','dateYearDay$I$I','equals$O','eraOf$I','eras$','from$java_time_temporal_TemporalAccessor','getAvailableChronologies$','getCalendarType$','getDisplayName$java_time_format_TextStyle$java_util_Locale','getId$','hashCode$','isLeapYear$J','localDateTime$java_time_temporal_TemporalAccessor','of$S','ofLocale$java_util_Locale','period$I$I$I','prolepticYear$java_time_chrono_Era$I','range$java_time_temporal_ChronoField','resolveDate$java_util_Map$java_time_format_ResolverStyle','toString','zonedDateTime$java_time_temporal_TemporalAccessor','zonedDateTime$java_time_Instant$java_time_ZoneId'])]);
for (var chrono, $chrono = loader.iterator$(); $chrono.hasNext$()&&((chrono=($chrono.next$())),1);) {
chronos.add$O(chrono);
}
return chronos;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'resolveDate$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
if (fieldValues.containsKey$O($I$(12).EPOCH_DAY)) {
return this.dateEpochDay$J((fieldValues.remove$O($I$(12).EPOCH_DAY)).valueOf());
}this.resolveProlepticMonth$java_util_Map$java_time_format_ResolverStyle(fieldValues, resolverStyle);
var resolved=this.resolveYearOfEra$java_util_Map$java_time_format_ResolverStyle(fieldValues, resolverStyle);
if (resolved != null ) {
return resolved;
}if (fieldValues.containsKey$O($I$(12).YEAR)) {
if (fieldValues.containsKey$O($I$(12).MONTH_OF_YEAR)) {
if (fieldValues.containsKey$O($I$(12).DAY_OF_MONTH)) {
return this.resolveYMD$java_util_Map$java_time_format_ResolverStyle(fieldValues, resolverStyle);
}if (fieldValues.containsKey$O($I$(12).ALIGNED_WEEK_OF_MONTH)) {
if (fieldValues.containsKey$O($I$(12).ALIGNED_DAY_OF_WEEK_IN_MONTH)) {
return this.resolveYMAA$java_util_Map$java_time_format_ResolverStyle(fieldValues, resolverStyle);
}if (fieldValues.containsKey$O($I$(12).DAY_OF_WEEK)) {
return this.resolveYMAD$java_util_Map$java_time_format_ResolverStyle(fieldValues, resolverStyle);
}}}if (fieldValues.containsKey$O($I$(12).DAY_OF_YEAR)) {
return this.resolveYD$java_util_Map$java_time_format_ResolverStyle(fieldValues, resolverStyle);
}if (fieldValues.containsKey$O($I$(12).ALIGNED_WEEK_OF_YEAR)) {
if (fieldValues.containsKey$O($I$(12).ALIGNED_DAY_OF_WEEK_IN_YEAR)) {
return this.resolveYAA$java_util_Map$java_time_format_ResolverStyle(fieldValues, resolverStyle);
}if (fieldValues.containsKey$O($I$(12).DAY_OF_WEEK)) {
return this.resolveYAD$java_util_Map$java_time_format_ResolverStyle(fieldValues, resolverStyle);
}}}return null;
});

Clazz.newMeth(C$, 'resolveProlepticMonth$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
var pMonth=fieldValues.remove$O($I$(12).PROLEPTIC_MONTH);
if (pMonth != null ) {
if (resolverStyle !== $I$(13).LENIENT ) {
$I$(12).PROLEPTIC_MONTH.checkValidValue$J((pMonth).valueOf());
}var chronoDate=this.dateNow$().with$java_time_temporal_TemporalField$J($I$(12).DAY_OF_MONTH, 1).with$java_time_temporal_TemporalField$J($I$(12).PROLEPTIC_MONTH, (pMonth).valueOf());
this.addFieldValue$java_util_Map$java_time_temporal_ChronoField$J(fieldValues, $I$(12).MONTH_OF_YEAR, chronoDate.get$java_time_temporal_TemporalField($I$(12).MONTH_OF_YEAR));
this.addFieldValue$java_util_Map$java_time_temporal_ChronoField$J(fieldValues, $I$(12).YEAR, chronoDate.get$java_time_temporal_TemporalField($I$(12).YEAR));
}});

Clazz.newMeth(C$, 'resolveYearOfEra$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
var yoeLong=fieldValues.remove$O($I$(12).YEAR_OF_ERA);
if (yoeLong != null ) {
var eraLong=fieldValues.remove$O($I$(12).ERA);
var yoe;
if (resolverStyle !== $I$(13).LENIENT ) {
yoe=this.range$java_time_temporal_ChronoField($I$(12).YEAR_OF_ERA).checkValidIntValue$J$java_time_temporal_TemporalField((yoeLong).valueOf(), $I$(12).YEAR_OF_ERA);
} else {
yoe=Math.toIntExact((yoeLong).valueOf());
}if (eraLong != null ) {
var eraObj=this.eraOf$I(this.range$java_time_temporal_ChronoField($I$(12).ERA).checkValidIntValue$J$java_time_temporal_TemporalField((eraLong).valueOf(), $I$(12).ERA));
this.addFieldValue$java_util_Map$java_time_temporal_ChronoField$J(fieldValues, $I$(12).YEAR, this.prolepticYear$java_time_chrono_Era$I(eraObj, yoe));
} else {
if (fieldValues.containsKey$O($I$(12).YEAR)) {
var year=this.range$java_time_temporal_ChronoField($I$(12).YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.get$O($I$(12).YEAR)).valueOf(), $I$(12).YEAR);
var chronoDate=this.dateYearDay$I$I(year, 1);
this.addFieldValue$java_util_Map$java_time_temporal_ChronoField$J(fieldValues, $I$(12).YEAR, this.prolepticYear$java_time_chrono_Era$I(chronoDate.getEra$(), yoe));
} else if (resolverStyle === $I$(13).STRICT ) {
fieldValues.put$O$O($I$(12).YEAR_OF_ERA, yoeLong);
} else {
var eras=this.eras$();
if (eras.isEmpty$()) {
this.addFieldValue$java_util_Map$java_time_temporal_ChronoField$J(fieldValues, $I$(12).YEAR, yoe);
} else {
var eraObj=eras.get$I(eras.size$() - 1);
this.addFieldValue$java_util_Map$java_time_temporal_ChronoField$J(fieldValues, $I$(12).YEAR, this.prolepticYear$java_time_chrono_Era$I(eraObj, yoe));
}}}} else if (fieldValues.containsKey$O($I$(12).ERA)) {
this.range$java_time_temporal_ChronoField($I$(12).ERA).checkValidValue$J$java_time_temporal_TemporalField((fieldValues.get$O($I$(12).ERA)).valueOf(), $I$(12).ERA);
}return null;
});

Clazz.newMeth(C$, 'resolveYMD$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
var y=this.range$java_time_temporal_ChronoField($I$(12).YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).YEAR)).valueOf(), $I$(12).YEAR);
if (resolverStyle === $I$(13).LENIENT ) {
var months=Math.subtractExact((fieldValues.remove$O($I$(12).MONTH_OF_YEAR)).valueOf(), 1);
var days=Math.subtractExact((fieldValues.remove$O($I$(12).DAY_OF_MONTH)).valueOf(), 1);
return this.date$I$I$I(y, 1, 1).plus$J$java_time_temporal_TemporalUnit(months, $I$(14).MONTHS).plus$J$java_time_temporal_TemporalUnit(days, $I$(14).DAYS);
}var moy=this.range$java_time_temporal_ChronoField($I$(12).MONTH_OF_YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).MONTH_OF_YEAR)).valueOf(), $I$(12).MONTH_OF_YEAR);
var domRange=this.range$java_time_temporal_ChronoField($I$(12).DAY_OF_MONTH);
var dom=domRange.checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).DAY_OF_MONTH)).valueOf(), $I$(12).DAY_OF_MONTH);
if (resolverStyle === $I$(13).SMART ) {
try {
return this.date$I$I$I(y, moy, dom);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
return this.date$I$I$I(y, moy, 1).with$java_time_temporal_TemporalAdjuster($I$(15).lastDayOfMonth$());
} else {
throw ex;
}
}
}return this.date$I$I$I(y, moy, dom);
});

Clazz.newMeth(C$, 'resolveYD$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
var y=this.range$java_time_temporal_ChronoField($I$(12).YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).YEAR)).valueOf(), $I$(12).YEAR);
if (resolverStyle === $I$(13).LENIENT ) {
var days=Math.subtractExact((fieldValues.remove$O($I$(12).DAY_OF_YEAR)).valueOf(), 1);
return this.dateYearDay$I$I(y, 1).plus$J$java_time_temporal_TemporalUnit(days, $I$(14).DAYS);
}var doy=this.range$java_time_temporal_ChronoField($I$(12).DAY_OF_YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).DAY_OF_YEAR)).valueOf(), $I$(12).DAY_OF_YEAR);
return this.dateYearDay$I$I(y, doy);
});

Clazz.newMeth(C$, 'resolveYMAA$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
var y=this.range$java_time_temporal_ChronoField($I$(12).YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).YEAR)).valueOf(), $I$(12).YEAR);
if (resolverStyle === $I$(13).LENIENT ) {
var months=Math.subtractExact((fieldValues.remove$O($I$(12).MONTH_OF_YEAR)).valueOf(), 1);
var weeks=Math.subtractExact((fieldValues.remove$O($I$(12).ALIGNED_WEEK_OF_MONTH)).valueOf(), 1);
var days=Math.subtractExact((fieldValues.remove$O($I$(12).ALIGNED_DAY_OF_WEEK_IN_MONTH)).valueOf(), 1);
return this.date$I$I$I(y, 1, 1).plus$J$java_time_temporal_TemporalUnit(months, $I$(14).MONTHS).plus$J$java_time_temporal_TemporalUnit(weeks, $I$(14).WEEKS).plus$J$java_time_temporal_TemporalUnit(days, $I$(14).DAYS);
}var moy=this.range$java_time_temporal_ChronoField($I$(12).MONTH_OF_YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).MONTH_OF_YEAR)).valueOf(), $I$(12).MONTH_OF_YEAR);
var aw=this.range$java_time_temporal_ChronoField($I$(12).ALIGNED_WEEK_OF_MONTH).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).ALIGNED_WEEK_OF_MONTH)).valueOf(), $I$(12).ALIGNED_WEEK_OF_MONTH);
var ad=this.range$java_time_temporal_ChronoField($I$(12).ALIGNED_DAY_OF_WEEK_IN_MONTH).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).ALIGNED_DAY_OF_WEEK_IN_MONTH)).valueOf(), $I$(12).ALIGNED_DAY_OF_WEEK_IN_MONTH);
var date=this.date$I$I$I(y, moy, 1).plus$J$java_time_temporal_TemporalUnit((aw - 1) * 7 + (ad - 1), $I$(14).DAYS);
if (resolverStyle === $I$(13).STRICT  && date.get$java_time_temporal_TemporalField($I$(12).MONTH_OF_YEAR) != moy ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Strict mode rejected resolved date as it is in a different month"]);
}return date;
});

Clazz.newMeth(C$, 'resolveYMAD$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
var y=this.range$java_time_temporal_ChronoField($I$(12).YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).YEAR)).valueOf(), $I$(12).YEAR);
if (resolverStyle === $I$(13).LENIENT ) {
var months=Math.subtractExact((fieldValues.remove$O($I$(12).MONTH_OF_YEAR)).valueOf(), 1);
var weeks=Math.subtractExact((fieldValues.remove$O($I$(12).ALIGNED_WEEK_OF_MONTH)).valueOf(), 1);
var dow=Math.subtractExact((fieldValues.remove$O($I$(12).DAY_OF_WEEK)).valueOf(), 1);
return this.resolveAligned$java_time_chrono_ChronoLocalDate$J$J$J(this.date$I$I$I(y, 1, 1), months, weeks, dow);
}var moy=this.range$java_time_temporal_ChronoField($I$(12).MONTH_OF_YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).MONTH_OF_YEAR)).valueOf(), $I$(12).MONTH_OF_YEAR);
var aw=this.range$java_time_temporal_ChronoField($I$(12).ALIGNED_WEEK_OF_MONTH).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).ALIGNED_WEEK_OF_MONTH)).valueOf(), $I$(12).ALIGNED_WEEK_OF_MONTH);
var dow=this.range$java_time_temporal_ChronoField($I$(12).DAY_OF_WEEK).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).DAY_OF_WEEK)).valueOf(), $I$(12).DAY_OF_WEEK);
var date=this.date$I$I$I(y, moy, 1).plus$J$java_time_temporal_TemporalUnit((aw - 1) * 7, $I$(14).DAYS).with$java_time_temporal_TemporalAdjuster($I$(15,"nextOrSame$java_time_DayOfWeek",[$I$(16).of$I(dow)]));
if (resolverStyle === $I$(13).STRICT  && date.get$java_time_temporal_TemporalField($I$(12).MONTH_OF_YEAR) != moy ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Strict mode rejected resolved date as it is in a different month"]);
}return date;
});

Clazz.newMeth(C$, 'resolveYAA$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
var y=this.range$java_time_temporal_ChronoField($I$(12).YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).YEAR)).valueOf(), $I$(12).YEAR);
if (resolverStyle === $I$(13).LENIENT ) {
var weeks=Math.subtractExact((fieldValues.remove$O($I$(12).ALIGNED_WEEK_OF_YEAR)).valueOf(), 1);
var days=Math.subtractExact((fieldValues.remove$O($I$(12).ALIGNED_DAY_OF_WEEK_IN_YEAR)).valueOf(), 1);
return this.dateYearDay$I$I(y, 1).plus$J$java_time_temporal_TemporalUnit(weeks, $I$(14).WEEKS).plus$J$java_time_temporal_TemporalUnit(days, $I$(14).DAYS);
}var aw=this.range$java_time_temporal_ChronoField($I$(12).ALIGNED_WEEK_OF_YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).ALIGNED_WEEK_OF_YEAR)).valueOf(), $I$(12).ALIGNED_WEEK_OF_YEAR);
var ad=this.range$java_time_temporal_ChronoField($I$(12).ALIGNED_DAY_OF_WEEK_IN_YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).ALIGNED_DAY_OF_WEEK_IN_YEAR)).valueOf(), $I$(12).ALIGNED_DAY_OF_WEEK_IN_YEAR);
var date=this.dateYearDay$I$I(y, 1).plus$J$java_time_temporal_TemporalUnit((aw - 1) * 7 + (ad - 1), $I$(14).DAYS);
if (resolverStyle === $I$(13).STRICT  && date.get$java_time_temporal_TemporalField($I$(12).YEAR) != y ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Strict mode rejected resolved date as it is in a different year"]);
}return date;
});

Clazz.newMeth(C$, 'resolveYAD$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
var y=this.range$java_time_temporal_ChronoField($I$(12).YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).YEAR)).valueOf(), $I$(12).YEAR);
if (resolverStyle === $I$(13).LENIENT ) {
var weeks=Math.subtractExact((fieldValues.remove$O($I$(12).ALIGNED_WEEK_OF_YEAR)).valueOf(), 1);
var dow=Math.subtractExact((fieldValues.remove$O($I$(12).DAY_OF_WEEK)).valueOf(), 1);
return this.resolveAligned$java_time_chrono_ChronoLocalDate$J$J$J(this.dateYearDay$I$I(y, 1), 0, weeks, dow);
}var aw=this.range$java_time_temporal_ChronoField($I$(12).ALIGNED_WEEK_OF_YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).ALIGNED_WEEK_OF_YEAR)).valueOf(), $I$(12).ALIGNED_WEEK_OF_YEAR);
var dow=this.range$java_time_temporal_ChronoField($I$(12).DAY_OF_WEEK).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(12).DAY_OF_WEEK)).valueOf(), $I$(12).DAY_OF_WEEK);
var date=this.dateYearDay$I$I(y, 1).plus$J$java_time_temporal_TemporalUnit((aw - 1) * 7, $I$(14).DAYS).with$java_time_temporal_TemporalAdjuster($I$(15,"nextOrSame$java_time_DayOfWeek",[$I$(16).of$I(dow)]));
if (resolverStyle === $I$(13).STRICT  && date.get$java_time_temporal_TemporalField($I$(12).YEAR) != y ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Strict mode rejected resolved date as it is in a different year"]);
}return date;
});

Clazz.newMeth(C$, 'resolveAligned$java_time_chrono_ChronoLocalDate$J$J$J', function (base, months, weeks, dow) {
var date=base.plus$J$java_time_temporal_TemporalUnit(months, $I$(14).MONTHS).plus$J$java_time_temporal_TemporalUnit(weeks, $I$(14).WEEKS);
if (dow > 7) {
date=date.plus$J$java_time_temporal_TemporalUnit(Clazz.toLong((dow - 1)/7), $I$(14).WEEKS);
dow=((dow - 1) % 7) + 1;
} else if (dow < 1) {
date=date.plus$J$java_time_temporal_TemporalUnit(Clazz.toLong(Math.subtractExact(dow, 7)/7), $I$(14).WEEKS);
dow=((dow + 6) % 7) + 1;
}return date.with$java_time_temporal_TemporalAdjuster($I$(15,"nextOrSame$java_time_DayOfWeek",[$I$(16,"of$I",[(dow|0)])]));
});

Clazz.newMeth(C$, 'addFieldValue$java_util_Map$java_time_temporal_ChronoField$J', function (fieldValues, field, value) {
var old=fieldValues.get$O(field);
if (old != null  && old.longValue$() != value ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Conflict found: " + field + " " + old + " differs from " + field + " " + value ]);
}fieldValues.put$O$O(field, Long.valueOf$J(value));
});

Clazz.newMeth(C$, ['compareTo$java_time_chrono_Chronology','compareTo$O'], function (other) {
return this.getId$().compareTo$S(other.getId$());
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.chrono.AbstractChronology")) {
return this.compareTo$java_time_chrono_Chronology(obj) == 0;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getClass$().hashCode$() ^ this.getId$().hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.getId$();
});

Clazz.newMeth(C$, 'writeReplace$', function () {
return Clazz.new_($I$(17,1).c$$B$O,[1, this]);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
out.writeUTF$S(this.getId$());
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var id=$in.readUTF$();
return $I$(10).of$S(id);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.DATE_ORDER=(P$.AbstractChronology$lambda1$||(P$.AbstractChronology$lambda1$=(((P$.AbstractChronology$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "AbstractChronology$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Serializable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$java_time_chrono_ChronoLocalDate$java_time_chrono_ChronoLocalDate','compare$O$O'], function (date1, date2) {
return null;
});
})()
), Clazz.new_(P$.AbstractChronology$lambda1.$init$,[this, null])))));
C$.DATE_TIME_ORDER=(P$.AbstractChronology$lambda2$||(P$.AbstractChronology$lambda2$=(((P$.AbstractChronology$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "AbstractChronology$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Serializable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['compare$java_time_chrono_ChronoLocalDateTime$java_time_chrono_ChronoLocalDateTime','compare$O$O'], function (dateTime1, dateTime2) {
var cmp=Long.compare$J$J(dateTime1.toLocalDate$().toEpochDay$(), dateTime2.toLocalDate$().toEpochDay$());
if (cmp == 0) {
cmp=Long.compare$J$J(dateTime1.toLocalTime$().toNanoOfDay$(), dateTime2.toLocalTime$().toNanoOfDay$());
}return null;
});
})()
), Clazz.new_(P$.AbstractChronology$lambda2.$init$,[this, null])))));
C$.INSTANT_ORDER=(P$.AbstractChronology$lambda3$||(P$.AbstractChronology$lambda3$=(((P$.AbstractChronology$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "AbstractChronology$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Serializable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['compare$java_time_chrono_ChronoZonedDateTime$java_time_chrono_ChronoZonedDateTime','compare$O$O'], function (dateTime1, dateTime2) {
var cmp=Long.compare$J$J(dateTime1.toEpochSecond$(), dateTime2.toEpochSecond$());
if (cmp == 0) {
cmp=Long.compare$J$J(dateTime1.toLocalTime$().getNano$(), dateTime2.toLocalTime$().getNano$());
}return null;
});
})()
), Clazz.new_(P$.AbstractChronology$lambda3.$init$,[this, null])))));
C$.CHRONOS_BY_ID=Clazz.new_($I$(1,1));
C$.CHRONOS_BY_TYPE=Clazz.new_($I$(1,1));
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
