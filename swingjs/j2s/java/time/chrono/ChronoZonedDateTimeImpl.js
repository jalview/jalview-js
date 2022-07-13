(function(){var P$=Clazz.newPackage("java.time.chrono"),p$1={},I$=[[0,'java.util.Objects','java.time.LocalDateTime','java.time.temporal.ChronoField','java.time.temporal.ChronoUnit','java.time.ZoneOffset','java.time.chrono.Ser']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChronoZonedDateTimeImpl", null, null, ['java.time.chrono.ChronoZonedDateTime', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dateTime','java.time.chrono.ChronoLocalDateTimeImpl','offset','java.time.ZoneOffset','zone','java.time.ZoneId']]]

Clazz.newMeth(C$, 'ofBest$java_time_chrono_ChronoLocalDateTimeImpl$java_time_ZoneId$java_time_ZoneOffset', function (localDateTime, zone, preferredOffset) {
$I$(1).requireNonNull$O$S(localDateTime, "localDateTime");
$I$(1).requireNonNull$O$S(zone, "zone");
if (Clazz.instanceOf(zone, "java.time.ZoneOffset")) {
return Clazz.new_(C$.c$$java_time_chrono_ChronoLocalDateTimeImpl$java_time_ZoneOffset$java_time_ZoneId,[localDateTime, zone, zone]);
}var rules=zone.getRules$();
var isoLDT=$I$(2).from$java_time_temporal_TemporalAccessor(localDateTime);
var validOffsets=rules.getValidOffsets$java_time_LocalDateTime(isoLDT);
var offset;
if (validOffsets.size$() == 1) {
offset=validOffsets.get$I(0);
} else if (validOffsets.size$() == 0) {
var trans=rules.getTransition$java_time_LocalDateTime(isoLDT);
localDateTime=localDateTime.plusSeconds$J(trans.getDuration$().getSeconds$());
offset=trans.getOffsetAfter$();
} else {
if (preferredOffset != null  && validOffsets.contains$O(preferredOffset) ) {
offset=preferredOffset;
} else {
offset=validOffsets.get$I(0);
}}$I$(1).requireNonNull$O$S(offset, "offset");
return Clazz.new_(C$.c$$java_time_chrono_ChronoLocalDateTimeImpl$java_time_ZoneOffset$java_time_ZoneId,[localDateTime, offset, zone]);
}, 1);

Clazz.newMeth(C$, 'ofInstant$java_time_chrono_Chronology$java_time_Instant$java_time_ZoneId', function (chrono, instant, zone) {
var rules=zone.getRules$();
var offset=rules.getOffset$java_time_Instant(instant);
$I$(1).requireNonNull$O$S(offset, "offset");
var ldt=$I$(2,"ofEpochSecond$J$I$java_time_ZoneOffset",[instant.getEpochSecond$(), instant.getNano$(), offset]);
var cldt=chrono.localDateTime$java_time_temporal_TemporalAccessor(ldt);
return Clazz.new_(C$.c$$java_time_chrono_ChronoLocalDateTimeImpl$java_time_ZoneOffset$java_time_ZoneId,[cldt, offset, zone]);
}, 1);

Clazz.newMeth(C$, 'create$java_time_Instant$java_time_ZoneId', function (instant, zone) {
return C$.ofInstant$java_time_chrono_Chronology$java_time_Instant$java_time_ZoneId(this.getChronology$(), instant, zone);
}, p$1);

Clazz.newMeth(C$, 'ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal', function (chrono, temporal) {
var other=temporal;
if (chrono.equals$O(other.getChronology$()) == false ) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["Chronology mismatch, required: " + chrono.getId$() + ", actual: " + other.getChronology$().getId$() ]);
}return other;
}, 1);

Clazz.newMeth(C$, 'c$$java_time_chrono_ChronoLocalDateTimeImpl$java_time_ZoneOffset$java_time_ZoneId', function (dateTime, offset, zone) {
;C$.$init$.apply(this);
this.dateTime=$I$(1).requireNonNull$O$S(dateTime, "dateTime");
this.offset=$I$(1).requireNonNull$O$S(offset, "offset");
this.zone=$I$(1).requireNonNull$O$S(zone, "zone");
}, 1);

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'withEarlierOffsetAtOverlap$', function () {
var trans=this.getZone$().getRules$().getTransition$java_time_LocalDateTime($I$(2).from$java_time_temporal_TemporalAccessor(this));
if (trans != null  && trans.isOverlap$() ) {
var earlierOffset=trans.getOffsetBefore$();
if (earlierOffset.equals$O(this.offset) == false ) {
return Clazz.new_(C$.c$$java_time_chrono_ChronoLocalDateTimeImpl$java_time_ZoneOffset$java_time_ZoneId,[this.dateTime, earlierOffset, this.zone]);
}}return this;
});

Clazz.newMeth(C$, 'withLaterOffsetAtOverlap$', function () {
var trans=this.getZone$().getRules$().getTransition$java_time_LocalDateTime($I$(2).from$java_time_temporal_TemporalAccessor(this));
if (trans != null ) {
var offset=trans.getOffsetAfter$();
if (offset.equals$O(this.getOffset$()) == false ) {
return Clazz.new_(C$.c$$java_time_chrono_ChronoLocalDateTimeImpl$java_time_ZoneOffset$java_time_ZoneId,[this.dateTime, offset, this.zone]);
}}return this;
});

Clazz.newMeth(C$, 'toLocalDateTime$', function () {
return this.dateTime;
});

Clazz.newMeth(C$, 'getZone$', function () {
return this.zone;
});

Clazz.newMeth(C$, 'withZoneSameLocal$java_time_ZoneId', function (zone) {
return C$.ofBest$java_time_chrono_ChronoLocalDateTimeImpl$java_time_ZoneId$java_time_ZoneOffset(this.dateTime, zone, this.offset);
});

Clazz.newMeth(C$, 'withZoneSameInstant$java_time_ZoneId', function (zone) {
$I$(1).requireNonNull$O$S(zone, "zone");
return this.zone.equals$O(zone) ? this : p$1.create$java_time_Instant$java_time_ZoneId.apply(this, [this.dateTime.toInstant$java_time_ZoneOffset(this.offset), zone]);
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
return Clazz.instanceOf(field, "java.time.temporal.ChronoField") || (field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ) ;
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
switch (f) {
case $I$(3).INSTANT_SECONDS:
return this.plus$J$java_time_temporal_TemporalUnit(newValue - this.toEpochSecond$(), $I$(4).SECONDS);
case $I$(3).OFFSET_SECONDS:
{
var offset=$I$(5,"ofTotalSeconds$I",[f.checkValidIntValue$J(newValue)]);
return p$1.create$java_time_Instant$java_time_ZoneId.apply(this, [this.dateTime.toInstant$java_time_ZoneOffset(offset), this.zone]);
}}
return C$.ofBest$java_time_chrono_ChronoLocalDateTimeImpl$java_time_ZoneId$java_time_ZoneOffset(this.dateTime.with$java_time_temporal_TemporalField$J(field, newValue), this.zone, this.offset);
}return C$.ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal(this.getChronology$(), field.adjustInto$java_time_temporal_Temporal$J(this, newValue));
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
return this.with$java_time_temporal_TemporalAdjuster(this.dateTime.plus$J$java_time_temporal_TemporalUnit(amountToAdd, unit));
}return C$.ensureValid$java_time_chrono_Chronology$java_time_temporal_Temporal(this.getChronology$(), unit.addTo$java_time_temporal_Temporal$J(this, amountToAdd));
});

Clazz.newMeth(C$, 'until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit', function (endExclusive, unit) {
$I$(1).requireNonNull$O$S(endExclusive, "endExclusive");
var end=this.getChronology$().zonedDateTime$java_time_temporal_TemporalAccessor(endExclusive);
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
end=end.withZoneSameInstant$java_time_ZoneId(this.offset);
return this.dateTime.until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit(end.toLocalDateTime$(), unit);
}$I$(1).requireNonNull$O$S(unit, "unit");
return unit.between$java_time_temporal_Temporal$java_time_temporal_Temporal(this, end);
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(6,1).c$$B$O,[3, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeObject$O(this.dateTime);
out.writeObject$O(this.offset);
out.writeObject$O(this.zone);
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
var dateTime=$in.readObject$();
var offset=$in.readObject$();
var zone=$in.readObject$();
return dateTime.atZone$java_time_ZoneId(offset).withZoneSameLocal$java_time_ZoneId(zone);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.chrono.ChronoZonedDateTime")) {
return this.compareTo$java_time_chrono_ChronoZonedDateTime(obj) == 0;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.toLocalDateTime$().hashCode$() ^ this.getOffset$().hashCode$() ^ Integer.rotateLeft$I$I(this.getZone$().hashCode$(), 3) ;
});

Clazz.newMeth(C$, 'toString', function () {
var str=this.toLocalDateTime$().toString() + this.getOffset$().toString();
if (this.getOffset$() !== this.getZone$() ) {
str += '[' + this.getZone$().toString() + ']' ;
}return str;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
