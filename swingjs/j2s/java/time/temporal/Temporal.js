(function(){var P$=Clazz.newPackage("java.time.temporal"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "Temporal", null, null, 'java.time.temporal.TemporalAccessor');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster', function (adjuster) {
return adjuster.adjustInto$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amount) {
return amount.addTo$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amount) {
return amount.subtractFrom$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'minus$J$java_time_temporal_TemporalUnit', function (amountToSubtract, unit) {
return (amountToSubtract == -9223372036854775808 ? this.plus$J$java_time_temporal_TemporalUnit(9223372036854775807, unit).plus$J$java_time_temporal_TemporalUnit(1, unit) : this.plus$J$java_time_temporal_TemporalUnit(-amountToSubtract, unit));
});
};})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
