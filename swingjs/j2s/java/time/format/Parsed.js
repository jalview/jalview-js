(function(){var P$=Clazz.newPackage("java.time.format"),p$1={},I$=[[0,'java.util.HashMap','java.time.Period','java.util.Objects','java.time.temporal.TemporalQueries','java.time.LocalDate','java.time.temporal.ChronoField','java.time.ZoneOffset','java.time.Instant','java.time.format.ResolverStyle','java.time.LocalTime','StringBuilder']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Parsed", null, null, 'java.time.temporal.TemporalAccessor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fieldValues=Clazz.new_($I$(1,1));
this.excessDays=$I$(2).ZERO;
},1);

C$.$fields$=[['Z',['leapSecond'],'O',['fieldValues','java.util.Map','zone','java.time.ZoneId','chrono','java.time.chrono.Chronology','resolverStyle','java.time.format.ResolverStyle','date','java.time.chrono.ChronoLocalDate','time','java.time.LocalTime','excessDays','java.time.Period']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'copy$', function () {
var cloned=Clazz.new_(C$);
cloned.fieldValues.putAll$java_util_Map(this.fieldValues);
cloned.zone=this.zone;
cloned.chrono=this.chrono;
cloned.leapSecond=this.leapSecond;
return cloned;
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (this.fieldValues.containsKey$O(field) || (this.date != null  && this.date.isSupported$java_time_temporal_TemporalField(field) ) || (this.time != null  && this.time.isSupported$java_time_temporal_TemporalField(field) )  ) {
return true;
}return field != null  && (Clazz.instanceOf(field, "java.time.temporal.ChronoField") == false )  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ;
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
$I$(3).requireNonNull$O$S(field, "field");
var value=this.fieldValues.get$O(field);
if (value != null ) {
return (value).valueOf();
}if (this.date != null  && this.date.isSupported$java_time_temporal_TemporalField(field) ) {
return this.date.getLong$java_time_temporal_TemporalField(field);
}if (this.time != null  && this.time.isSupported$java_time_temporal_TemporalField(field) ) {
return this.time.getLong$java_time_temporal_TemporalField(field);
}if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(4).zoneId$() ) {
return this.zone;
} else if (query === $I$(4).chronology$() ) {
return this.chrono;
} else if (query === $I$(4).localDate$() ) {
return (this.date != null  ? $I$(5).from$java_time_temporal_TemporalAccessor(this.date) : null);
} else if (query === $I$(4).localTime$() ) {
return this.time;
} else if (query === $I$(4).zone$()  || query === $I$(4).offset$()  ) {
return query.queryFrom$java_time_temporal_TemporalAccessor(this);
} else if (query === $I$(4).precision$() ) {
return null;
}return query.queryFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'resolve$java_time_format_ResolverStyle$java_util_Set', function (resolverStyle, resolverFields) {
if (resolverFields != null ) {
this.fieldValues.keySet$().retainAll$java_util_Collection(resolverFields);
}this.resolverStyle=resolverStyle;
p$1.resolveFields.apply(this, []);
p$1.resolveTimeLenient.apply(this, []);
p$1.crossCheck.apply(this, []);
p$1.resolvePeriod.apply(this, []);
p$1.resolveFractional.apply(this, []);
p$1.resolveInstant.apply(this, []);
return this;
});

Clazz.newMeth(C$, 'resolveFields', function () {
p$1.resolveInstantFields.apply(this, []);
p$1.resolveDateFields.apply(this, []);
p$1.resolveTimeFields.apply(this, []);
if (this.fieldValues.size$() > 0) {
var changedCount=0;
 outer : while (changedCount < 50){
for (var entry, $entry = this.fieldValues.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var targetField=entry.getKey$();
var resolvedObject=targetField.resolve$java_util_Map$java_time_temporal_TemporalAccessor$java_time_format_ResolverStyle(this.fieldValues, this, this.resolverStyle);
if (resolvedObject != null ) {
if (Clazz.instanceOf(resolvedObject, "java.time.chrono.ChronoZonedDateTime")) {
var czdt=resolvedObject;
if (this.zone == null ) {
this.zone=czdt.getZone$();
} else if (this.zone.equals$O(czdt.getZone$()) == false ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["ChronoZonedDateTime must use the effective parsed zone: " + this.zone]);
}resolvedObject=czdt.toLocalDateTime$();
}if (Clazz.instanceOf(resolvedObject, "java.time.chrono.ChronoLocalDateTime")) {
var cldt=resolvedObject;
p$1.updateCheckConflict$java_time_LocalTime$java_time_Period.apply(this, [cldt.toLocalTime$(), $I$(2).ZERO]);
p$1.updateCheckConflict$java_time_chrono_ChronoLocalDate.apply(this, [cldt.toLocalDate$()]);
changedCount++;
continue outer;
}if (Clazz.instanceOf(resolvedObject, "java.time.chrono.ChronoLocalDate")) {
p$1.updateCheckConflict$java_time_chrono_ChronoLocalDate.apply(this, [resolvedObject]);
changedCount++;
continue outer;
}if (Clazz.instanceOf(resolvedObject, "java.time.LocalTime")) {
p$1.updateCheckConflict$java_time_LocalTime$java_time_Period.apply(this, [resolvedObject, $I$(2).ZERO]);
changedCount++;
continue outer;
}throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Method resolve() can only return ChronoZonedDateTime, ChronoLocalDateTime, ChronoLocalDate or LocalTime"]);
} else if (this.fieldValues.containsKey$O(targetField) == false ) {
changedCount++;
continue outer;
}}
break;
}
if (changedCount == 50) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["One of the parsed fields has an incorrectly implemented resolve method"]);
}if (changedCount > 0) {
p$1.resolveInstantFields.apply(this, []);
p$1.resolveDateFields.apply(this, []);
p$1.resolveTimeFields.apply(this, []);
}}}, p$1);

Clazz.newMeth(C$, 'updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long', function (targetField, changeField, changeValue) {
var old=this.fieldValues.put$O$O(changeField, changeValue);
if (old != null  && old.longValue$() != changeValue.longValue$() ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Conflict found: " + changeField + " " + old + " differs from " + changeField + " " + changeValue + " while resolving  " + targetField ]);
}}, p$1);

Clazz.newMeth(C$, 'resolveInstantFields', function () {
if (this.fieldValues.containsKey$O($I$(6).INSTANT_SECONDS)) {
if (this.zone != null ) {
p$1.resolveInstantFields0$java_time_ZoneId.apply(this, [this.zone]);
} else {
var offsetSecs=this.fieldValues.get$O($I$(6).OFFSET_SECONDS);
if (offsetSecs != null ) {
var offset=$I$(7,"ofTotalSeconds$I",[offsetSecs.intValue$()]);
p$1.resolveInstantFields0$java_time_ZoneId.apply(this, [offset]);
}}}}, p$1);

Clazz.newMeth(C$, 'resolveInstantFields0$java_time_ZoneId', function (selectedZone) {
var instant=$I$(8,"ofEpochSecond$J",[(this.fieldValues.remove$O($I$(6).INSTANT_SECONDS)).valueOf()]);
var zdt=this.chrono.zonedDateTime$java_time_Instant$java_time_ZoneId(instant, selectedZone);
p$1.updateCheckConflict$java_time_chrono_ChronoLocalDate.apply(this, [zdt.toLocalDate$()]);
p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).INSTANT_SECONDS, $I$(6).SECOND_OF_DAY, Long.valueOf$J(zdt.toLocalTime$().toSecondOfDay$())]);
}, p$1);

Clazz.newMeth(C$, 'resolveDateFields', function () {
p$1.updateCheckConflict$java_time_chrono_ChronoLocalDate.apply(this, [this.chrono.resolveDate$java_util_Map$java_time_format_ResolverStyle(this.fieldValues, this.resolverStyle)]);
}, p$1);

Clazz.newMeth(C$, 'updateCheckConflict$java_time_chrono_ChronoLocalDate', function (cld) {
if (this.date != null ) {
if (cld != null  && this.date.equals$O(cld) == false  ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Conflict found: Fields resolved to two different dates: " + this.date + " " + cld ]);
}} else if (cld != null ) {
if (this.chrono.equals$O(cld.getChronology$()) == false ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["ChronoLocalDate must use the effective parsed chronology: " + this.chrono]);
}this.date=cld;
}}, p$1);

Clazz.newMeth(C$, 'resolveTimeFields', function () {
if (this.fieldValues.containsKey$O($I$(6).CLOCK_HOUR_OF_DAY)) {
var ch=(this.fieldValues.remove$O($I$(6).CLOCK_HOUR_OF_DAY)).valueOf();
if (this.resolverStyle === $I$(9).STRICT  || (this.resolverStyle === $I$(9).SMART  && ch != 0 ) ) {
$I$(6).CLOCK_HOUR_OF_DAY.checkValidValue$J(ch);
}p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).CLOCK_HOUR_OF_DAY, $I$(6).HOUR_OF_DAY, Long.valueOf$J(ch == 24 ? 0 : ch)]);
}if (this.fieldValues.containsKey$O($I$(6).CLOCK_HOUR_OF_AMPM)) {
var ch=(this.fieldValues.remove$O($I$(6).CLOCK_HOUR_OF_AMPM)).valueOf();
if (this.resolverStyle === $I$(9).STRICT  || (this.resolverStyle === $I$(9).SMART  && ch != 0 ) ) {
$I$(6).CLOCK_HOUR_OF_AMPM.checkValidValue$J(ch);
}p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).CLOCK_HOUR_OF_AMPM, $I$(6).HOUR_OF_AMPM, Long.valueOf$J(ch == 12 ? 0 : ch)]);
}if (this.fieldValues.containsKey$O($I$(6).AMPM_OF_DAY) && this.fieldValues.containsKey$O($I$(6).HOUR_OF_AMPM) ) {
var ap=(this.fieldValues.remove$O($I$(6).AMPM_OF_DAY)).valueOf();
var hap=(this.fieldValues.remove$O($I$(6).HOUR_OF_AMPM)).valueOf();
if (this.resolverStyle === $I$(9).LENIENT ) {
p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).AMPM_OF_DAY, $I$(6).HOUR_OF_DAY, Long.valueOf$J(Math.addExact(Math.multiplyExact(ap, 12), hap))]);
} else {
$I$(6).AMPM_OF_DAY.checkValidValue$J(ap);
$I$(6).HOUR_OF_AMPM.checkValidValue$J(ap);
p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).AMPM_OF_DAY, $I$(6).HOUR_OF_DAY, Long.valueOf$J(ap * 12 + hap)]);
}}if (this.fieldValues.containsKey$O($I$(6).NANO_OF_DAY)) {
var nod=(this.fieldValues.remove$O($I$(6).NANO_OF_DAY)).valueOf();
if (this.resolverStyle !== $I$(9).LENIENT ) {
$I$(6).NANO_OF_DAY.checkValidValue$J(nod);
}p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).NANO_OF_DAY, $I$(6).HOUR_OF_DAY, Long.valueOf$J(Clazz.toLong(nod/3600000000000))]);
p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).NANO_OF_DAY, $I$(6).MINUTE_OF_HOUR, Long.valueOf$J((Clazz.toLong(nod/60000000000)) % 60)]);
p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).NANO_OF_DAY, $I$(6).SECOND_OF_MINUTE, Long.valueOf$J((Clazz.toLong(nod/1000000000)) % 60)]);
p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).NANO_OF_DAY, $I$(6).NANO_OF_SECOND, Long.valueOf$J(nod % 1000000000)]);
}if (this.fieldValues.containsKey$O($I$(6).MICRO_OF_DAY)) {
var cod=(this.fieldValues.remove$O($I$(6).MICRO_OF_DAY)).valueOf();
if (this.resolverStyle !== $I$(9).LENIENT ) {
$I$(6).MICRO_OF_DAY.checkValidValue$J(cod);
}p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).MICRO_OF_DAY, $I$(6).SECOND_OF_DAY, Long.valueOf$J(Clazz.toLong(cod/1000000))]);
p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).MICRO_OF_DAY, $I$(6).MICRO_OF_SECOND, Long.valueOf$J(cod % 1000000)]);
}if (this.fieldValues.containsKey$O($I$(6).MILLI_OF_DAY)) {
var lod=(this.fieldValues.remove$O($I$(6).MILLI_OF_DAY)).valueOf();
if (this.resolverStyle !== $I$(9).LENIENT ) {
$I$(6).MILLI_OF_DAY.checkValidValue$J(lod);
}p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).MILLI_OF_DAY, $I$(6).SECOND_OF_DAY, Long.valueOf$J(Clazz.toLong(lod/1000))]);
p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).MILLI_OF_DAY, $I$(6).MILLI_OF_SECOND, Long.valueOf$J(lod % 1000)]);
}if (this.fieldValues.containsKey$O($I$(6).SECOND_OF_DAY)) {
var sod=(this.fieldValues.remove$O($I$(6).SECOND_OF_DAY)).valueOf();
if (this.resolverStyle !== $I$(9).LENIENT ) {
$I$(6).SECOND_OF_DAY.checkValidValue$J(sod);
}p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).SECOND_OF_DAY, $I$(6).HOUR_OF_DAY, Long.valueOf$J(Clazz.toLong(sod/3600))]);
p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).SECOND_OF_DAY, $I$(6).MINUTE_OF_HOUR, Long.valueOf$J((Clazz.toLong(sod/60)) % 60)]);
p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).SECOND_OF_DAY, $I$(6).SECOND_OF_MINUTE, Long.valueOf$J(sod % 60)]);
}if (this.fieldValues.containsKey$O($I$(6).MINUTE_OF_DAY)) {
var mod=(this.fieldValues.remove$O($I$(6).MINUTE_OF_DAY)).valueOf();
if (this.resolverStyle !== $I$(9).LENIENT ) {
$I$(6).MINUTE_OF_DAY.checkValidValue$J(mod);
}p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).MINUTE_OF_DAY, $I$(6).HOUR_OF_DAY, Long.valueOf$J(Clazz.toLong(mod/60))]);
p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).MINUTE_OF_DAY, $I$(6).MINUTE_OF_HOUR, Long.valueOf$J(mod % 60)]);
}if (this.fieldValues.containsKey$O($I$(6).NANO_OF_SECOND)) {
var nos=(this.fieldValues.get$O($I$(6).NANO_OF_SECOND)).valueOf();
if (this.resolverStyle !== $I$(9).LENIENT ) {
$I$(6).NANO_OF_SECOND.checkValidValue$J(nos);
}if (this.fieldValues.containsKey$O($I$(6).MICRO_OF_SECOND)) {
var cos=(this.fieldValues.remove$O($I$(6).MICRO_OF_SECOND)).valueOf();
if (this.resolverStyle !== $I$(9).LENIENT ) {
$I$(6).MICRO_OF_SECOND.checkValidValue$J(cos);
}nos=cos * 1000 + (nos % 1000);
p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).MICRO_OF_SECOND, $I$(6).NANO_OF_SECOND, Long.valueOf$J(nos)]);
}if (this.fieldValues.containsKey$O($I$(6).MILLI_OF_SECOND)) {
var los=(this.fieldValues.remove$O($I$(6).MILLI_OF_SECOND)).valueOf();
if (this.resolverStyle !== $I$(9).LENIENT ) {
$I$(6).MILLI_OF_SECOND.checkValidValue$J(los);
}p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).MILLI_OF_SECOND, $I$(6).NANO_OF_SECOND, Long.valueOf$J(los * 1000000 + (nos % 1000000))]);
}}if (this.fieldValues.containsKey$O($I$(6).HOUR_OF_DAY) && this.fieldValues.containsKey$O($I$(6).MINUTE_OF_HOUR) && this.fieldValues.containsKey$O($I$(6).SECOND_OF_MINUTE) && this.fieldValues.containsKey$O($I$(6).NANO_OF_SECOND)  ) {
var hod=(this.fieldValues.remove$O($I$(6).HOUR_OF_DAY)).valueOf();
var moh=(this.fieldValues.remove$O($I$(6).MINUTE_OF_HOUR)).valueOf();
var som=(this.fieldValues.remove$O($I$(6).SECOND_OF_MINUTE)).valueOf();
var nos=(this.fieldValues.remove$O($I$(6).NANO_OF_SECOND)).valueOf();
p$1.resolveTime$J$J$J$J.apply(this, [hod, moh, som, nos]);
}}, p$1);

Clazz.newMeth(C$, 'resolveTimeLenient', function () {
if (this.time == null ) {
if (this.fieldValues.containsKey$O($I$(6).MILLI_OF_SECOND)) {
var los=(this.fieldValues.remove$O($I$(6).MILLI_OF_SECOND)).valueOf();
if (this.fieldValues.containsKey$O($I$(6).MICRO_OF_SECOND)) {
var cos=los * 1000 + ((this.fieldValues.get$O($I$(6).MICRO_OF_SECOND)).valueOf() % 1000);
p$1.updateCheckConflict$java_time_temporal_TemporalField$java_time_temporal_TemporalField$Long.apply(this, [$I$(6).MILLI_OF_SECOND, $I$(6).MICRO_OF_SECOND, Long.valueOf$J(cos)]);
this.fieldValues.remove$O($I$(6).MICRO_OF_SECOND);
this.fieldValues.put$O$O($I$(6).NANO_OF_SECOND, Long.valueOf$J(cos * 1000));
} else {
this.fieldValues.put$O$O($I$(6).NANO_OF_SECOND, Long.valueOf$J(los * 1000000));
}} else if (this.fieldValues.containsKey$O($I$(6).MICRO_OF_SECOND)) {
var cos=(this.fieldValues.remove$O($I$(6).MICRO_OF_SECOND)).valueOf();
this.fieldValues.put$O$O($I$(6).NANO_OF_SECOND, Long.valueOf$J(cos * 1000));
}var hod=this.fieldValues.get$O($I$(6).HOUR_OF_DAY);
if (hod != null ) {
var moh=this.fieldValues.get$O($I$(6).MINUTE_OF_HOUR);
var som=this.fieldValues.get$O($I$(6).SECOND_OF_MINUTE);
var nos=this.fieldValues.get$O($I$(6).NANO_OF_SECOND);
if ((moh == null  && (som != null  || nos != null  ) ) || (moh != null  && som == null   && nos != null  ) ) {
return;
}var mohVal=(moh != null  ? (moh).valueOf() : 0);
var somVal=(som != null  ? (som).valueOf() : 0);
var nosVal=(nos != null  ? (nos).valueOf() : 0);
p$1.resolveTime$J$J$J$J.apply(this, [(hod).valueOf(), mohVal, somVal, nosVal]);
this.fieldValues.remove$O($I$(6).HOUR_OF_DAY);
this.fieldValues.remove$O($I$(6).MINUTE_OF_HOUR);
this.fieldValues.remove$O($I$(6).SECOND_OF_MINUTE);
this.fieldValues.remove$O($I$(6).NANO_OF_SECOND);
}}if (this.resolverStyle !== $I$(9).LENIENT  && this.fieldValues.size$() > 0 ) {
for (var entry, $entry = this.fieldValues.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var field=entry.getKey$();
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField") && field.isTimeBased$() ) {
(field).checkValidValue$J((entry.getValue$()).valueOf());
}}
}}, p$1);

Clazz.newMeth(C$, 'resolveTime$J$J$J$J', function (hod, moh, som, nos) {
if (this.resolverStyle === $I$(9).LENIENT ) {
var totalNanos=Math.multiplyExact(hod, 3600000000000);
totalNanos=Math.addExact(totalNanos, Math.multiplyExact(moh, 60000000000));
totalNanos=Math.addExact(totalNanos, Math.multiplyExact(som, 1000000000));
totalNanos=Math.addExact(totalNanos, nos);
var excessDays=(Math.floorDiv(totalNanos, 86400000000000)|0);
var nod=Math.floorMod(totalNanos, 86400000000000);
p$1.updateCheckConflict$java_time_LocalTime$java_time_Period.apply(this, [$I$(10).ofNanoOfDay$J(nod), $I$(2).ofDays$I(excessDays)]);
} else {
var mohVal=$I$(6).MINUTE_OF_HOUR.checkValidIntValue$J(moh);
var nosVal=$I$(6).NANO_OF_SECOND.checkValidIntValue$J(nos);
if (this.resolverStyle === $I$(9).SMART  && hod == 24  && mohVal == 0  && som == 0  && nosVal == 0 ) {
p$1.updateCheckConflict$java_time_LocalTime$java_time_Period.apply(this, [$I$(10).MIDNIGHT, $I$(2).ofDays$I(1)]);
} else {
var hodVal=$I$(6).HOUR_OF_DAY.checkValidIntValue$J(hod);
var somVal=$I$(6).SECOND_OF_MINUTE.checkValidIntValue$J(som);
p$1.updateCheckConflict$java_time_LocalTime$java_time_Period.apply(this, [$I$(10).of$I$I$I$I(hodVal, mohVal, somVal, nosVal), $I$(2).ZERO]);
}}}, p$1);

Clazz.newMeth(C$, 'resolvePeriod', function () {
if (this.date != null  && this.time != null   && this.excessDays.isZero$() == false  ) {
this.date=this.date.plus$java_time_temporal_TemporalAmount(this.excessDays);
this.excessDays=$I$(2).ZERO;
}}, p$1);

Clazz.newMeth(C$, 'resolveFractional', function () {
if (this.time == null  && (this.fieldValues.containsKey$O($I$(6).INSTANT_SECONDS) || this.fieldValues.containsKey$O($I$(6).SECOND_OF_DAY) || this.fieldValues.containsKey$O($I$(6).SECOND_OF_MINUTE)  ) ) {
if (this.fieldValues.containsKey$O($I$(6).NANO_OF_SECOND)) {
var nos=(this.fieldValues.get$O($I$(6).NANO_OF_SECOND)).valueOf();
this.fieldValues.put$O$O($I$(6).MICRO_OF_SECOND, Long.valueOf$J(Clazz.toLong(nos/1000)));
this.fieldValues.put$O$O($I$(6).MILLI_OF_SECOND, Long.valueOf$J(Clazz.toLong(nos/1000000)));
} else {
this.fieldValues.put$O$O($I$(6).NANO_OF_SECOND, Long.valueOf$J(0));
this.fieldValues.put$O$O($I$(6).MICRO_OF_SECOND, Long.valueOf$J(0));
this.fieldValues.put$O$O($I$(6).MILLI_OF_SECOND, Long.valueOf$J(0));
}}}, p$1);

Clazz.newMeth(C$, 'resolveInstant', function () {
if (this.date != null  && this.time != null  ) {
if (this.zone != null ) {
var instant=this.date.atTime$java_time_LocalTime(this.time).atZone$java_time_ZoneId(this.zone).getLong$java_time_temporal_TemporalField($I$(6).INSTANT_SECONDS);
this.fieldValues.put$O$O($I$(6).INSTANT_SECONDS, Long.valueOf$J(instant));
} else {
var offsetSecs=this.fieldValues.get$O($I$(6).OFFSET_SECONDS);
if (offsetSecs != null ) {
var offset=$I$(7,"ofTotalSeconds$I",[offsetSecs.intValue$()]);
var instant=this.date.atTime$java_time_LocalTime(this.time).atZone$java_time_ZoneId(offset).getLong$java_time_temporal_TemporalField($I$(6).INSTANT_SECONDS);
this.fieldValues.put$O$O($I$(6).INSTANT_SECONDS, Long.valueOf$J(instant));
}}}}, p$1);

Clazz.newMeth(C$, 'updateCheckConflict$java_time_LocalTime$java_time_Period', function (timeToSet, periodToSet) {
if (this.time != null ) {
if (this.time.equals$O(timeToSet) == false ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Conflict found: Fields resolved to different times: " + this.time + " " + timeToSet ]);
}if (this.excessDays.isZero$() == false  && periodToSet.isZero$() == false   && this.excessDays.equals$O(periodToSet) == false  ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Conflict found: Fields resolved to different excess periods: " + this.excessDays + " " + periodToSet ]);
} else {
this.excessDays=periodToSet;
}} else {
this.time=timeToSet;
this.excessDays=periodToSet;
}}, p$1);

Clazz.newMeth(C$, 'crossCheck', function () {
if (this.date != null ) {
p$1.crossCheck$java_time_temporal_TemporalAccessor.apply(this, [this.date]);
}if (this.time != null ) {
p$1.crossCheck$java_time_temporal_TemporalAccessor.apply(this, [this.time]);
if (this.date != null  && this.fieldValues.size$() > 0 ) {
p$1.crossCheck$java_time_temporal_TemporalAccessor.apply(this, [this.date.atTime$java_time_LocalTime(this.time)]);
}}}, p$1);

Clazz.newMeth(C$, 'crossCheck$java_time_temporal_TemporalAccessor', function (target) {
for (var it=this.fieldValues.entrySet$().iterator$(); it.hasNext$(); ) {
var entry=it.next$();
var field=entry.getKey$();
if (target.isSupported$java_time_temporal_TemporalField(field)) {
var val1;
try {
val1=target.getLong$java_time_temporal_TemporalField(field);
} catch (ex) {
if (Clazz.exceptionOf(ex,"RuntimeException")){
continue;
} else {
throw ex;
}
}
var val2=(entry.getValue$()).valueOf();
if (val1 != val2) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Conflict found: Field " + field + " " + val1 + " differs from " + field + " " + val2 + " derived from " + target ]);
}it.remove$();
}}
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(11,1).c$$I,[64]);
buf.append$O(this.fieldValues).append$C(",").append$O(this.chrono);
if (this.zone != null ) {
buf.append$C(",").append$O(this.zone);
}if (this.date != null  || this.time != null  ) {
buf.append$S(" resolved to ");
if (this.date != null ) {
buf.append$O(this.date);
if (this.time != null ) {
buf.append$C("T").append$O(this.time);
}} else {
buf.append$O(this.time);
}}return buf.toString();
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
