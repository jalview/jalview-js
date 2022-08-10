(function(){var P$=Clazz.newPackage("java.time.chrono"),I$=[[0,'java.time.temporal.ChronoField','java.time.temporal.TemporalQueries','java.time.temporal.ChronoUnit','java.time.format.DateTimeFormatterBuilder']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Era", null, null, ['java.time.temporal.TemporalAccessor', 'java.time.temporal.TemporalAdjuster']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
return field === $I$(1).ERA ;
}return field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ;
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
return java.time.temporal.TemporalAccessor.superclazz.prototype.range$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
if (field === $I$(1).ERA ) {
return this.getValue$();
}return java.time.temporal.TemporalAccessor.superclazz.prototype.get$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (field === $I$(1).ERA ) {
return this.getValue$();
} else if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(2).precision$() ) {
return $I$(3).ERAS;
}return java.time.temporal.TemporalAccessor.superclazz.prototype.query$java_time_temporal_TemporalQuery.apply(this, [query]);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal', function (temporal) {
return temporal.with$java_time_temporal_TemporalField$J($I$(1).ERA, this.getValue$());
});

Clazz.newMeth(C$, 'getDisplayName$java_time_format_TextStyle$java_util_Locale', function (style, locale) {
return Clazz.new_($I$(4,1)).appendText$java_time_temporal_TemporalField$java_time_format_TextStyle($I$(1).ERA, style).toFormatter$java_util_Locale(locale).format$java_time_temporal_TemporalAccessor(this);
});
};})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
