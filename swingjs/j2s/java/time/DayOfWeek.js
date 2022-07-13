(function(){var P$=Clazz.newPackage("java.time"),I$=[[0,'java.time.temporal.ChronoField','java.time.format.DateTimeFormatterBuilder','java.time.temporal.TemporalQueries','java.time.temporal.ChronoUnit']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*e*/var C$=Clazz.newClass(P$, "DayOfWeek", null, 'Enum', ['java.time.temporal.TemporalAccessor', 'java.time.temporal.TemporalAdjuster']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['ENUMS','java.time.DayOfWeek[]']]]

Clazz.newMeth(C$, 'of$I', function (dayOfWeek) {
if (dayOfWeek < 1 || dayOfWeek > 7 ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid value for DayOfWeek: " + dayOfWeek]);
}return C$.ENUMS[dayOfWeek - 1];
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.DayOfWeek")) {
return temporal;
}try {
return C$.of$I(temporal.get$java_time_temporal_TemporalField($I$(1).DAY_OF_WEEK));
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Unable to obtain DayOfWeek from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() , ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.ordinal$() + 1;
});

Clazz.newMeth(C$, 'getDisplayName$java_time_format_TextStyle$java_util_Locale', function (style, locale) {
return Clazz.new_($I$(2,1)).appendText$java_time_temporal_TemporalField$java_time_format_TextStyle($I$(1).DAY_OF_WEEK, style).toFormatter$java_util_Locale(locale).format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
return field === $I$(1).DAY_OF_WEEK ;
}return field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ;
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (field === $I$(1).DAY_OF_WEEK ) {
return field.range$();
}return P$.temporal.TemporalAccessor.superclazz.prototype.range$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
if (field === $I$(1).DAY_OF_WEEK ) {
return this.getValue$();
}return P$.temporal.TemporalAccessor.superclazz.prototype.get$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (field === $I$(1).DAY_OF_WEEK ) {
return this.getValue$();
} else if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'plus$J', function (days) {
var amount=((days % 7)|0);
return C$.ENUMS[(this.ordinal$() + (amount + 7)) % 7];
});

Clazz.newMeth(C$, 'minus$J', function (days) {
return this.plus$J(-(days % 7));
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(3).precision$() ) {
return $I$(4).DAYS;
}return P$.temporal.TemporalAccessor.superclazz.prototype.query$java_time_temporal_TemporalQuery.apply(this, [query]);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal', function (temporal) {
return temporal.with$java_time_temporal_TemporalField$J($I$(1).DAY_OF_WEEK, this.getValue$());
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "MONDAY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "TUESDAY", 1, []);
Clazz.newEnumConst($vals, C$.c$, "WEDNESDAY", 2, []);
Clazz.newEnumConst($vals, C$.c$, "THURSDAY", 3, []);
Clazz.newEnumConst($vals, C$.c$, "FRIDAY", 4, []);
Clazz.newEnumConst($vals, C$.c$, "SATURDAY", 5, []);
Clazz.newEnumConst($vals, C$.c$, "SUNDAY", 6, []);
C$.ENUMS=C$.values$();
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
