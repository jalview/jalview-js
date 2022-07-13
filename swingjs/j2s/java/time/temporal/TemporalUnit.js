(function(){var P$=Clazz.newPackage("java.time.temporal"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "TemporalUnit");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'isSupportedBy$java_time_temporal_Temporal', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.LocalTime")) {
return this.isTimeBased$();
}if (Clazz.instanceOf(temporal, "java.time.chrono.ChronoLocalDate")) {
return this.isDateBased$();
}if (Clazz.instanceOf(temporal, "java.time.chrono.ChronoLocalDateTime") || Clazz.instanceOf(temporal, "java.time.chrono.ChronoZonedDateTime") ) {
return true;
}try {
temporal.plus$J$java_time_temporal_TemporalUnit(1, this);
return true;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.time.temporal.UnsupportedTemporalTypeException")){
var ex = e$$;
{
return false;
}
} else if (Clazz.exceptionOf(e$$,"RuntimeException")){
var ex = e$$;
{
try {
temporal.plus$J$java_time_temporal_TemporalUnit(-1, this);
return true;
} catch (ex2) {
if (Clazz.exceptionOf(ex2,"RuntimeException")){
return false;
} else {
throw ex2;
}
}
}
} else {
throw e$$;
}
}
});
};})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
