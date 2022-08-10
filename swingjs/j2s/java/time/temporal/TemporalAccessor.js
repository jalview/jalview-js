(function(){var P$=Clazz.newPackage("java.time.temporal"),I$=[[0,'java.util.Objects','java.time.temporal.TemporalQueries']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "TemporalAccessor");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
if (this.isSupported$java_time_temporal_TemporalField(field)) {
return field.range$();
}throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}$I$(1).requireNonNull$O$S(field, "field");
return field.rangeRefinedBy$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
var range=this.range$java_time_temporal_TemporalField(field);
if (range.isIntValue$() == false ) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Invalid field " + field + " for get() method, use getLong() instead" ]);
}var value=this.getLong$java_time_temporal_TemporalField(field);
if (range.isValidValue$J(value) == false ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid value for " + field + " (valid values " + range + "): " + value ]);
}return (value|0);
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(2).zoneId$()  || query === $I$(2).chronology$()   || query === $I$(2).precision$()  ) {
return null;
}return query.queryFrom$java_time_temporal_TemporalAccessor(this);
});
};})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
