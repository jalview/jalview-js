(function(){var P$=Clazz.newPackage("java.time.format"),I$=[[0,'java.time.temporal.TemporalQueries','java.util.Objects','java.time.temporal.ChronoField','java.time.chrono.IsoChronology','java.time.Instant']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DateTimePrintContext");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['optional'],'O',['temporal','java.time.temporal.TemporalAccessor','formatter','java.time.format.DateTimeFormatter']]]

Clazz.newMeth(C$, 'c$$java_time_temporal_TemporalAccessor$java_time_format_DateTimeFormatter', function (temporal, formatter) {
;C$.$init$.apply(this);
this.temporal=C$.adjust$java_time_temporal_TemporalAccessor$java_time_format_DateTimeFormatter(temporal, formatter);
this.formatter=formatter;
}, 1);

Clazz.newMeth(C$, 'adjust$java_time_temporal_TemporalAccessor$java_time_format_DateTimeFormatter', function (temporal, formatter) {
var overrideChrono=formatter.getChronology$();
var overrideZone=formatter.getZone$();
if (overrideChrono == null  && overrideZone == null  ) {
return temporal;
}var temporalChrono=temporal.query$java_time_temporal_TemporalQuery($I$(1).chronology$());
var temporalZone=temporal.query$java_time_temporal_TemporalQuery($I$(1).zoneId$());
if ($I$(2).equals$O$O(overrideChrono, temporalChrono)) {
overrideChrono=null;
}if ($I$(2).equals$O$O(overrideZone, temporalZone)) {
overrideZone=null;
}if (overrideChrono == null  && overrideZone == null  ) {
return temporal;
}var effectiveChrono=(overrideChrono != null  ? overrideChrono : temporalChrono);
if (overrideZone != null ) {
if (temporal.isSupported$java_time_temporal_TemporalField($I$(3).INSTANT_SECONDS)) {
var chrono=(effectiveChrono != null  ? effectiveChrono : $I$(4).INSTANCE);
return chrono.zonedDateTime$java_time_Instant$java_time_ZoneId($I$(5).from$java_time_temporal_TemporalAccessor(temporal), overrideZone);
}if (Clazz.instanceOf(overrideZone.normalized$(), "java.time.ZoneOffset") && temporal.isSupported$java_time_temporal_TemporalField($I$(3).OFFSET_SECONDS) && temporal.get$java_time_temporal_TemporalField($I$(3).OFFSET_SECONDS) != overrideZone.getRules$().getOffset$java_time_Instant($I$(5).EPOCH).getTotalSeconds$()  ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unable to apply override zone '" + overrideZone + "' because the temporal object being formatted has a different offset but" + " does not represent an instant: " + temporal ]);
}}var effectiveZone=(overrideZone != null  ? overrideZone : temporalZone);
var effectiveDate;
if (overrideChrono != null ) {
if (temporal.isSupported$java_time_temporal_TemporalField($I$(3).EPOCH_DAY)) {
effectiveDate=effectiveChrono.date$java_time_temporal_TemporalAccessor(temporal);
} else {
if (!(overrideChrono === $I$(4).INSTANCE  && temporalChrono == null  )) {
for (var f, $f = 0, $$f = $I$(3).values$(); $f<$$f.length&&((f=($$f[$f])),1);$f++) {
if (f.isDateBased$() && temporal.isSupported$java_time_temporal_TemporalField(f) ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unable to apply override chronology '" + overrideChrono + "' because the temporal object being formatted contains date fields but" + " does not represent a whole date: " + temporal ]);
}}
}effectiveDate=null;
}} else {
effectiveDate=null;
}return ((P$.DateTimePrintContext$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DateTimePrintContext$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAccessor', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (this.$finals$.effectiveDate != null  && field.isDateBased$() ) {
return this.$finals$.effectiveDate.isSupported$java_time_temporal_TemporalField(field);
}return this.$finals$.temporal.isSupported$java_time_temporal_TemporalField(field);
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (this.$finals$.effectiveDate != null  && field.isDateBased$() ) {
return this.$finals$.effectiveDate.range$java_time_temporal_TemporalField(field);
}return this.$finals$.temporal.range$java_time_temporal_TemporalField(field);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (this.$finals$.effectiveDate != null  && field.isDateBased$() ) {
return this.$finals$.effectiveDate.getLong$java_time_temporal_TemporalField(field);
}return this.$finals$.temporal.getLong$java_time_temporal_TemporalField(field);
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(1).chronology$() ) {
return this.$finals$.effectiveChrono;
}if (query === $I$(1).zoneId$() ) {
return this.$finals$.effectiveZone;
}if (query === $I$(1).precision$() ) {
return this.$finals$.temporal.query$java_time_temporal_TemporalQuery(query);
}return query.queryFrom$java_time_temporal_TemporalAccessor(this);
});
})()
), Clazz.new_(P$.DateTimePrintContext$1.$init$,[this, {temporal:temporal,effectiveZone:effectiveZone,effectiveChrono:effectiveChrono,effectiveDate:effectiveDate}]));
}, 1);

Clazz.newMeth(C$, 'getTemporal$', function () {
return this.temporal;
});

Clazz.newMeth(C$, 'getLocale$', function () {
return this.formatter.getLocale$();
});

Clazz.newMeth(C$, 'getDecimalStyle$', function () {
return this.formatter.getDecimalStyle$();
});

Clazz.newMeth(C$, 'startOptional$', function () {
this.optional++;
});

Clazz.newMeth(C$, 'endOptional$', function () {
this.optional--;
});

Clazz.newMeth(C$, 'getValue$java_time_temporal_TemporalQuery', function (query) {
var result=this.temporal.query$java_time_temporal_TemporalQuery(query);
if (result == null  && this.optional == 0 ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unable to extract value: " + this.temporal.getClass$()]);
}return result;
});

Clazz.newMeth(C$, 'getValue$java_time_temporal_TemporalField', function (field) {
try {
return Long.valueOf$J(this.temporal.getLong$java_time_temporal_TemporalField(field));
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
if (this.optional > 0) {
return null;
}throw ex;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'toString', function () {
return this.temporal.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
