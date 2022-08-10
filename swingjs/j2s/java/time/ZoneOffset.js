(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.util.concurrent.ConcurrentHashMap','java.util.Objects','java.time.temporal.TemporalQueries','StringBuilder','java.time.zone.ZoneRules','java.time.temporal.ChronoField','java.time.Ser']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZoneOffset", null, 'java.time.ZoneId', ['java.time.temporal.TemporalAccessor', 'java.time.temporal.TemporalAdjuster', 'Comparable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['totalSeconds'],'S',['id']]
,['O',['SECONDS_CACHE','java.util.concurrent.ConcurrentMap','+ID_CACHE','UTC','java.time.ZoneOffset','+MIN','+MAX']]]

Clazz.newMeth(C$, 'of$S', function (offsetId) {
$I$(2).requireNonNull$O$S(offsetId, "offsetId");
var offset=C$.ID_CACHE.get$O(offsetId);
if (offset != null ) {
return offset;
}var hours;
var minutes;
var seconds;
switch (offsetId.length$()) {
case 2:
offsetId=offsetId.charAt$I(0) + "0" + offsetId.charAt$I(1) ;
case 3:
hours=C$.parseNumber$CharSequence$I$Z(offsetId, 1, false);
minutes=0;
seconds=0;
break;
case 5:
hours=C$.parseNumber$CharSequence$I$Z(offsetId, 1, false);
minutes=C$.parseNumber$CharSequence$I$Z(offsetId, 3, false);
seconds=0;
break;
case 6:
hours=C$.parseNumber$CharSequence$I$Z(offsetId, 1, false);
minutes=C$.parseNumber$CharSequence$I$Z(offsetId, 4, true);
seconds=0;
break;
case 7:
hours=C$.parseNumber$CharSequence$I$Z(offsetId, 1, false);
minutes=C$.parseNumber$CharSequence$I$Z(offsetId, 3, false);
seconds=C$.parseNumber$CharSequence$I$Z(offsetId, 5, false);
break;
case 9:
hours=C$.parseNumber$CharSequence$I$Z(offsetId, 1, false);
minutes=C$.parseNumber$CharSequence$I$Z(offsetId, 4, true);
seconds=C$.parseNumber$CharSequence$I$Z(offsetId, 7, true);
break;
default:
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid ID for ZoneOffset, invalid format: " + offsetId]);
}
var first=offsetId.charAt$I(0);
if (first != "+" && first != "-" ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid ID for ZoneOffset, plus/minus not found when expected: " + offsetId]);
}if (first == "-") {
return C$.ofHoursMinutesSeconds$I$I$I(-hours, -minutes, -seconds);
} else {
return C$.ofHoursMinutesSeconds$I$I$I(hours, minutes, seconds);
}}, 1);

Clazz.newMeth(C$, 'parseNumber$CharSequence$I$Z', function (offsetId, pos, precededByColon) {
if (precededByColon && offsetId.charAt$I(pos - 1) != ":" ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid ID for ZoneOffset, colon not found when expected: " + offsetId]);
}var ch1=offsetId.charAt$I(pos);
var ch2=offsetId.charAt$I(pos + 1);
if (ch1 < "0" || ch1 > "9"  || ch2 < "0"  || ch2 > "9" ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid ID for ZoneOffset, non numeric characters found: " + offsetId]);
}return (ch1.$c() - 48) * 10 + (ch2.$c() - 48);
}, 1);

Clazz.newMeth(C$, 'ofHours$I', function (hours) {
return C$.ofHoursMinutesSeconds$I$I$I(hours, 0, 0);
}, 1);

Clazz.newMeth(C$, 'ofHoursMinutes$I$I', function (hours, minutes) {
return C$.ofHoursMinutesSeconds$I$I$I(hours, minutes, 0);
}, 1);

Clazz.newMeth(C$, 'ofHoursMinutesSeconds$I$I$I', function (hours, minutes, seconds) {
C$.validate$I$I$I(hours, minutes, seconds);
var totalSeconds=C$.totalSeconds$I$I$I(hours, minutes, seconds);
return C$.ofTotalSeconds$I(totalSeconds);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
$I$(2).requireNonNull$O$S(temporal, "temporal");
var offset=temporal.query$java_time_temporal_TemporalQuery($I$(3).offset$());
if (offset == null ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unable to obtain ZoneOffset from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() ]);
}return offset;
}, 1);

Clazz.newMeth(C$, 'validate$I$I$I', function (hours, minutes, seconds) {
if (hours < -18 || hours > 18 ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Zone offset hours not in valid range: value " + hours + " is not in the range -18 to 18" ]);
}if (hours > 0) {
if (minutes < 0 || seconds < 0 ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Zone offset minutes and seconds must be positive because hours is positive"]);
}} else if (hours < 0) {
if (minutes > 0 || seconds > 0 ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Zone offset minutes and seconds must be negative because hours is negative"]);
}} else if ((minutes > 0 && seconds < 0 ) || (minutes < 0 && seconds > 0 ) ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Zone offset minutes and seconds must have the same sign"]);
}if (Math.abs(minutes) > 59) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Zone offset minutes not in valid range: abs(value) " + Math.abs(minutes) + " is not in the range 0 to 59" ]);
}if (Math.abs(seconds) > 59) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Zone offset seconds not in valid range: abs(value) " + Math.abs(seconds) + " is not in the range 0 to 59" ]);
}if (Math.abs(hours) == 18 && (Math.abs(minutes) > 0 || Math.abs(seconds) > 0 ) ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Zone offset not in valid range: -18:00 to +18:00"]);
}}, 1);

Clazz.newMeth(C$, 'totalSeconds$I$I$I', function (hours, minutes, seconds) {
return hours * 3600 + minutes * 60 + seconds;
}, 1);

Clazz.newMeth(C$, 'ofTotalSeconds$I', function (totalSeconds) {
if (Math.abs(totalSeconds) > 64800) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Zone offset not in valid range: -18:00 to +18:00"]);
}if (totalSeconds % (900) == 0) {
var totalSecs=Integer.valueOf$I(totalSeconds);
var result=C$.SECONDS_CACHE.get$O(totalSecs);
if (result == null ) {
result=Clazz.new_(C$.c$$I,[totalSeconds]);
C$.SECONDS_CACHE.putIfAbsent$O$O(totalSecs, result);
result=C$.SECONDS_CACHE.get$O(totalSecs);
C$.ID_CACHE.putIfAbsent$O$O(result.getId$(), result);
}return result;
} else {
return Clazz.new_(C$.c$$I,[totalSeconds]);
}}, 1);

Clazz.newMeth(C$, 'c$$I', function (totalSeconds) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.totalSeconds=totalSeconds;
this.id=C$.buildId$I(totalSeconds);
}, 1);

Clazz.newMeth(C$, 'buildId$I', function (totalSeconds) {
if (totalSeconds == 0) {
return "Z";
} else {
var absTotalSeconds=Math.abs(totalSeconds);
var buf=Clazz.new_($I$(4,1));
var absHours=(absTotalSeconds/3600|0);
var absMinutes=((absTotalSeconds/60|0)) % 60;
buf.append$S(totalSeconds < 0 ? "-" : "+").append$S(absHours < 10 ? "0" : "").append$I(absHours).append$S(absMinutes < 10 ? ":0" : ":").append$I(absMinutes);
var absSeconds=absTotalSeconds % 60;
if (absSeconds != 0) {
buf.append$S(absSeconds < 10 ? ":0" : ":").append$I(absSeconds);
}return buf.toString();
}}, 1);

Clazz.newMeth(C$, 'getTotalSeconds$', function () {
return this.totalSeconds;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'getRules$', function () {
return $I$(5).of$java_time_ZoneOffset(this);
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
return field === $I$(6).OFFSET_SECONDS ;
}return field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ;
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
return P$.temporal.TemporalAccessor.superclazz.prototype.range$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
if (field === $I$(6).OFFSET_SECONDS ) {
return this.totalSeconds;
} else if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return this.range$java_time_temporal_TemporalField(field).checkValidIntValue$J$java_time_temporal_TemporalField(this.getLong$java_time_temporal_TemporalField(field), field);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (field === $I$(6).OFFSET_SECONDS ) {
return this.totalSeconds;
} else if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(3).offset$()  || query === $I$(3).zone$()  ) {
return this;
}return P$.temporal.TemporalAccessor.superclazz.prototype.query$java_time_temporal_TemporalQuery.apply(this, [query]);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal', function (temporal) {
return temporal.with$java_time_temporal_TemporalField$J($I$(6).OFFSET_SECONDS, this.totalSeconds);
});

Clazz.newMeth(C$, ['compareTo$java_time_ZoneOffset','compareTo$O'], function (other) {
return other.totalSeconds - this.totalSeconds;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.ZoneOffset")) {
return this.totalSeconds == (obj).totalSeconds;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.totalSeconds;
});

Clazz.newMeth(C$, 'toString', function () {
return this.id;
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(7,1).c$$B$O,[8, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'write$java_io_DataOutput', function (out) {
out.writeByte$I(8);
this.writeExternal$java_io_DataOutput(out);
});

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
var offsetSecs=this.totalSeconds;
var offsetByte=offsetSecs % 900 == 0 ? (offsetSecs/900|0) : 127;
out.writeByte$I(offsetByte);
if (offsetByte == 127) {
out.writeInt$I(offsetSecs);
}});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var offsetByte=$in.readByte$();
return (offsetByte == 127 ? C$.ofTotalSeconds$I($in.readInt$()) : C$.ofTotalSeconds$I(offsetByte * 900));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.SECONDS_CACHE=Clazz.new_($I$(1,1).c$$I$F$I,[16, 0.75, 4]);
C$.ID_CACHE=Clazz.new_($I$(1,1).c$$I$F$I,[16, 0.75, 4]);
C$.UTC=C$.ofTotalSeconds$I(0);
C$.MIN=C$.ofTotalSeconds$I(-64800);
C$.MAX=C$.ofTotalSeconds$I(64800);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:53:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
