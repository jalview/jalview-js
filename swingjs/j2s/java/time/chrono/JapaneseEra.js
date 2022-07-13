(function(){var P$=Clazz.newPackage("java.time.chrono"),p$1={},I$=[[0,'java.time.LocalDate','java.time.chrono.JapaneseChronology','java.util.Objects','java.util.Arrays','java.time.chrono.JapaneseDate','java.time.temporal.ChronoField','java.time.chrono.Ser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JapaneseEra", null, null, ['java.time.chrono.Era', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['eraValue'],'O',['since','java.time.LocalDate']]
,['I',['N_ERA_CONSTANTS'],'O',['ERA_CONFIG','sun.util.calendar.Era[]','MEIJI','java.time.chrono.JapaneseEra','+TAISHO','+SHOWA','+HEISEI','KNOWN_ERAS','java.time.chrono.JapaneseEra[]']]]

Clazz.newMeth(C$, 'c$$I$java_time_LocalDate', function (eraValue, since) {
;C$.$init$.apply(this);
this.eraValue=eraValue;
this.since=since;
}, 1);

Clazz.newMeth(C$, 'getPrivateEra$', function () {
return C$.ERA_CONFIG[C$.ordinal$I(this.eraValue)];
});

Clazz.newMeth(C$, 'of$I', function (japaneseEra) {
if (japaneseEra < C$.MEIJI.eraValue || japaneseEra + 2 > C$.KNOWN_ERAS.length ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid era: " + japaneseEra]);
}return C$.KNOWN_ERAS[C$.ordinal$I(japaneseEra)];
}, 1);

Clazz.newMeth(C$, 'valueOf$S', function (japaneseEra) {
$I$(3).requireNonNull$O$S(japaneseEra, "japaneseEra");
for (var era, $era = 0, $$era = C$.KNOWN_ERAS; $era<$$era.length&&((era=($$era[$era])),1);$era++) {
if (era.getName$().equals$O(japaneseEra)) {
return era;
}}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["japaneseEra is invalid"]);
}, 1);

Clazz.newMeth(C$, 'values$', function () {
return $I$(4).copyOf$OA$I(C$.KNOWN_ERAS, C$.KNOWN_ERAS.length);
}, 1);

Clazz.newMeth(C$, 'from$java_time_LocalDate', function (date) {
if (date.isBefore$java_time_chrono_ChronoLocalDate($I$(5).MEIJI_6_ISODATE)) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["JapaneseDate before Meiji 6 are not supported"]);
}for (var i=C$.KNOWN_ERAS.length - 1; i > 0; i--) {
var era=C$.KNOWN_ERAS[i];
if (date.compareTo$java_time_chrono_ChronoLocalDate(era.since) >= 0) {
return era;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'toJapaneseEra$sun_util_calendar_Era', function (privateEra) {
for (var i=C$.ERA_CONFIG.length - 1; i >= 0; i--) {
if (C$.ERA_CONFIG[i].equals$O(privateEra)) {
return C$.KNOWN_ERAS[i];
}}
return null;
}, 1);

Clazz.newMeth(C$, 'privateEraFrom$java_time_LocalDate', function (isoDate) {
for (var i=C$.KNOWN_ERAS.length - 1; i > 0; i--) {
var era=C$.KNOWN_ERAS[i];
if (isoDate.compareTo$java_time_chrono_ChronoLocalDate(era.since) >= 0) {
return C$.ERA_CONFIG[i];
}}
return null;
}, 1);

Clazz.newMeth(C$, 'ordinal$I', function (eraValue) {
return eraValue + 2 - 1;
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.eraValue;
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (field === $I$(6).ERA ) {
return $I$(2).INSTANCE.range$java_time_temporal_ChronoField($I$(6).ERA);
}return P$.Era.superclazz.prototype.range$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'getAbbreviation$', function () {
var index=C$.ordinal$I(this.getValue$());
if (index == 0) {
return "";
}return C$.ERA_CONFIG[index].getAbbreviation$();
});

Clazz.newMeth(C$, 'getName$', function () {
return C$.ERA_CONFIG[C$.ordinal$I(this.getValue$())].getName$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.getName$();
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(7,1).c$$B$O,[5, this]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
out.writeByte$I(this.getValue$());
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var eraValue=$in.readByte$();
return C$.of$I(eraValue);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MEIJI=Clazz.new_(C$.c$$I$java_time_LocalDate,[-1, $I$(1).of$I$I$I(1868, 1, 1)]);
C$.TAISHO=Clazz.new_(C$.c$$I$java_time_LocalDate,[0, $I$(1).of$I$I$I(1912, 7, 30)]);
C$.SHOWA=Clazz.new_(C$.c$$I$java_time_LocalDate,[1, $I$(1).of$I$I$I(1926, 12, 25)]);
C$.HEISEI=Clazz.new_(C$.c$$I$java_time_LocalDate,[2, $I$(1).of$I$I$I(1989, 1, 8)]);
C$.N_ERA_CONSTANTS=C$.HEISEI.getValue$() + 2;
{
C$.ERA_CONFIG=$I$(2).JCAL.getEras$();
C$.KNOWN_ERAS=Clazz.array(C$, [C$.ERA_CONFIG.length]);
C$.KNOWN_ERAS[0]=C$.MEIJI;
C$.KNOWN_ERAS[1]=C$.TAISHO;
C$.KNOWN_ERAS[2]=C$.SHOWA;
C$.KNOWN_ERAS[3]=C$.HEISEI;
for (var i=C$.N_ERA_CONSTANTS; i < C$.ERA_CONFIG.length; i++) {
var date=C$.ERA_CONFIG[i].getSinceDate$();
var isoDate=$I$(1,"of$I$I$I",[date.getYear$(), date.getMonth$(), date.getDayOfMonth$()]);
C$.KNOWN_ERAS[i]=Clazz.new_(C$.c$$I$java_time_LocalDate,[i - 2 + 1, isoDate]);
}
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
