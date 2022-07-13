(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.util.HashMap','java.util.Collections','java.util.TimeZone','java.time.zone.ZoneRulesProvider','java.util.Objects','java.time.ZoneRegion','java.time.ZoneOffset','java.time.temporal.TemporalQueries','AssertionError','java.time.format.DateTimeFormatterBuilder','java.time.Instant','java.time.Ser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZoneId", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['SHORT_IDS','java.util.Map']]]

Clazz.newMeth(C$, 'systemDefault$', function () {
return $I$(3).getDefault$().toZoneId$();
}, 1);

Clazz.newMeth(C$, 'getAvailableZoneIds$', function () {
return $I$(4).getAvailableZoneIds$();
}, 1);

Clazz.newMeth(C$, 'of$S$java_util_Map', function (zoneId, aliasMap) {
$I$(5).requireNonNull$O$S(zoneId, "zoneId");
$I$(5).requireNonNull$O$S(aliasMap, "aliasMap");
var id=aliasMap.get$O(zoneId);
id=(id != null  ? id : zoneId);
return C$.of$S(id);
}, 1);

Clazz.newMeth(C$, 'of$S', function (zoneId) {
return C$.of$S$Z(zoneId, true);
}, 1);

Clazz.newMeth(C$, 'ofOffset$S$java_time_ZoneOffset', function (prefix, offset) {
$I$(5).requireNonNull$O$S(prefix, "prefix");
$I$(5).requireNonNull$O$S(offset, "offset");
if (prefix.length$() == 0) {
return offset;
}if (!prefix.equals$O("GMT") && !prefix.equals$O("UTC") && !prefix.equals$O("UT")  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["prefix should be GMT, UTC or UT, is: " + prefix]);
}if (offset.getTotalSeconds$() != 0) {
prefix=prefix.concat$S(offset.getId$());
}return Clazz.new_([prefix, offset.getRules$()],$I$(6,1).c$$S$java_time_zone_ZoneRules);
}, 1);

Clazz.newMeth(C$, 'of$S$Z', function (zoneId, checkAvailable) {
$I$(5).requireNonNull$O$S(zoneId, "zoneId");
if (zoneId.length$() <= 1 || zoneId.startsWith$S("+")  || zoneId.startsWith$S("-") ) {
return $I$(7).of$S(zoneId);
} else if (zoneId.startsWith$S("UTC") || zoneId.startsWith$S("GMT") ) {
return C$.ofWithPrefix$S$I$Z(zoneId, 3, checkAvailable);
} else if (zoneId.startsWith$S("UT")) {
return C$.ofWithPrefix$S$I$Z(zoneId, 2, checkAvailable);
}return $I$(6).ofId$S$Z(zoneId, checkAvailable);
}, 1);

Clazz.newMeth(C$, 'ofWithPrefix$S$I$Z', function (zoneId, prefixLength, checkAvailable) {
var prefix=zoneId.substring$I$I(0, prefixLength);
if (zoneId.length$() == prefixLength) {
return C$.ofOffset$S$java_time_ZoneOffset(prefix, $I$(7).UTC);
}if (zoneId.charAt$I(prefixLength) != "+" && zoneId.charAt$I(prefixLength) != "-" ) {
return $I$(6).ofId$S$Z(zoneId, checkAvailable);
}try {
var offset=$I$(7,"of$S",[zoneId.substring$I(prefixLength)]);
if (offset === $I$(7).UTC ) {
return C$.ofOffset$S$java_time_ZoneOffset(prefix, offset);
}return C$.ofOffset$S$java_time_ZoneOffset(prefix, offset);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Invalid ID for offset-based ZoneId: " + zoneId, ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
var obj=temporal.query$java_time_temporal_TemporalQuery($I$(8).zone$());
if (obj == null ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unable to obtain ZoneId from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() ]);
}return obj;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
if (this.getClass$() !== Clazz.getClass($I$(7))  && this.getClass$() !== Clazz.getClass($I$(6))  ) {
throw Clazz.new_($I$(9,1).c$$O,["Invalid subclass"]);
}}, 1);

Clazz.newMeth(C$, 'getDisplayName$java_time_format_TextStyle$java_util_Locale', function (style, locale) {
return Clazz.new_($I$(10,1)).appendZoneText$java_time_format_TextStyle(style).toFormatter$java_util_Locale(locale).format$java_time_temporal_TemporalAccessor(p$1.toTemporal.apply(this, []));
});

Clazz.newMeth(C$, 'toTemporal', function () {
return ((P$.ZoneId$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ZoneId$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAccessor', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
return false;
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(8).zoneId$() ) {
return this.b$['java.time.ZoneId'];
}return P$.temporal.TemporalAccessor.superclazz.prototype.query$java_time_temporal_TemporalQuery.apply(this.b$['java.time.temporal.TemporalAccessor'], [query]);
});
})()
), Clazz.new_(P$.ZoneId$1.$init$,[this, null]));
}, p$1);

Clazz.newMeth(C$, 'normalized$', function () {
try {
var rules=this.getRules$();
if (rules.isFixedOffset$()) {
return rules.getOffset$java_time_Instant($I$(11).EPOCH);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.zone.ZoneRulesException")){
} else {
throw ex;
}
}
return this;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.ZoneId")) {
var other=obj;
return this.getId$().equals$O(other.getId$());
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getId$().hashCode$();
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return this.getId$();
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(12,1).c$$B$O,[7, this]);
}, p$1);

C$.$static$=function(){C$.$static$=0;
{
var map=Clazz.new_($I$(1,1).c$$I,[64]);
map.put$O$O("ACT", "Australia/Darwin");
map.put$O$O("AET", "Australia/Sydney");
map.put$O$O("AGT", "America/Argentina/Buenos_Aires");
map.put$O$O("ART", "Africa/Cairo");
map.put$O$O("AST", "America/Anchorage");
map.put$O$O("BET", "America/Sao_Paulo");
map.put$O$O("BST", "Asia/Dhaka");
map.put$O$O("CAT", "Africa/Harare");
map.put$O$O("CNT", "America/St_Johns");
map.put$O$O("CST", "America/Chicago");
map.put$O$O("CTT", "Asia/Shanghai");
map.put$O$O("EAT", "Africa/Addis_Ababa");
map.put$O$O("ECT", "Europe/Paris");
map.put$O$O("IET", "America/Indiana/Indianapolis");
map.put$O$O("IST", "Asia/Kolkata");
map.put$O$O("JST", "Asia/Tokyo");
map.put$O$O("MIT", "Pacific/Apia");
map.put$O$O("NET", "Asia/Yerevan");
map.put$O$O("NST", "Pacific/Auckland");
map.put$O$O("PLT", "Asia/Karachi");
map.put$O$O("PNT", "America/Phoenix");
map.put$O$O("PRT", "America/Puerto_Rico");
map.put$O$O("PST", "America/Los_Angeles");
map.put$O$O("SST", "Pacific/Guadalcanal");
map.put$O$O("VST", "Asia/Ho_Chi_Minh");
map.put$O$O("EST", "-05:00");
map.put$O$O("MST", "-07:00");
map.put$O$O("HST", "-10:00");
C$.SHORT_IDS=$I$(2).unmodifiableMap$java_util_Map(map);
};
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:53:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
