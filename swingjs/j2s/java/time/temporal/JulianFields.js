(function(){var P$=Clazz.newPackage("java.time.temporal"),I$=[[0,'java.time.temporal.ChronoUnit','java.time.temporal.ValueRange','java.time.temporal.ChronoField','java.time.chrono.Chronology','java.time.format.ResolverStyle',['java.time.temporal.JulianFields','.Field'],'AssertionError']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JulianFields", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Field',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['JULIAN_DAY','java.time.temporal.TemporalField','+MODIFIED_JULIAN_DAY','+RATA_DIE']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
throw Clazz.new_($I$(7,1).c$$O,["Not instantiable"]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.JULIAN_DAY=$I$(6).JULIAN_DAY;
C$.MODIFIED_JULIAN_DAY=$I$(6).MODIFIED_JULIAN_DAY;
C$.RATA_DIE=$I$(6).RATA_DIE;
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.JulianFields, "Field", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum', 'java.time.temporal.TemporalField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['offset'],'S',['$name'],'O',['baseUnit','java.time.temporal.TemporalUnit','+rangeUnit','range','java.time.temporal.ValueRange']]]

Clazz.newMeth(C$, 'c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$J', function (name, baseUnit, rangeUnit, offset) {
;C$.$init$.apply(this);
this.$name=name;
this.baseUnit=baseUnit;
this.rangeUnit=rangeUnit;
this.range=$I$(2).of$J$J(-365243219162 + offset, 365241780471 + offset);
this.offset=offset;
}, 1);

Clazz.newMeth(C$, 'getBaseUnit$', function () {
return this.baseUnit;
});

Clazz.newMeth(C$, 'getRangeUnit$', function () {
return this.rangeUnit;
});

Clazz.newMeth(C$, 'isDateBased$', function () {
return true;
});

Clazz.newMeth(C$, 'isTimeBased$', function () {
return false;
});

Clazz.newMeth(C$, 'range$', function () {
return this.range;
});

Clazz.newMeth(C$, 'isSupportedBy$java_time_temporal_TemporalAccessor', function (temporal) {
return temporal.isSupported$java_time_temporal_TemporalField($I$(3).EPOCH_DAY);
});

Clazz.newMeth(C$, 'rangeRefinedBy$java_time_temporal_TemporalAccessor', function (temporal) {
if (this.isSupportedBy$java_time_temporal_TemporalAccessor(temporal) == false ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unsupported field: " + this]);
}return this.range$();
});

Clazz.newMeth(C$, 'getFrom$java_time_temporal_TemporalAccessor', function (temporal) {
return temporal.getLong$java_time_temporal_TemporalField($I$(3).EPOCH_DAY) + this.offset;
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal$J', function (temporal, newValue) {
if (this.range$().isValidValue$J(newValue) == false ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid value: " + this.$name + " " + newValue ]);
}return temporal.with$java_time_temporal_TemporalField$J($I$(3).EPOCH_DAY, Math.subtractExact(newValue, this.offset));
});

Clazz.newMeth(C$, 'resolve$java_util_Map$java_time_temporal_TemporalAccessor$java_time_format_ResolverStyle', function (fieldValues, partialTemporal, resolverStyle) {
var value=(fieldValues.remove$O(this)).valueOf();
var chrono=$I$(4).from$java_time_temporal_TemporalAccessor(partialTemporal);
if (resolverStyle === $I$(5).LENIENT ) {
return chrono.dateEpochDay$J(Math.subtractExact(value, this.offset));
}this.range$().checkValidValue$J$java_time_temporal_TemporalField(value, this);
return chrono.dateEpochDay$J(value - this.offset);
});

Clazz.newMeth(C$, 'toString', function () {
return this.$name;
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$J, "JULIAN_DAY", 0, ["JulianDay", $I$(1).DAYS, $I$(1).FOREVER, 2440588]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$J, "MODIFIED_JULIAN_DAY", 1, ["ModifiedJulianDay", $I$(1).DAYS, $I$(1).FOREVER, 40587]);
Clazz.newEnumConst($vals, C$.c$$S$java_time_temporal_TemporalUnit$java_time_temporal_TemporalUnit$J, "RATA_DIE", 2, ["RataDie", $I$(1).DAYS, $I$(1).FOREVER, 719163]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
