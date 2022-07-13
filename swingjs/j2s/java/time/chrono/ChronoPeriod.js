(function(){var P$=Clazz.newPackage("java.time.chrono"),I$=[[0,'java.util.Objects']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "ChronoPeriod", null, null, 'java.time.temporal.TemporalAmount');

C$.$clinit$=2;

Clazz.newMeth(C$, 'between$java_time_chrono_ChronoLocalDate$java_time_chrono_ChronoLocalDate', function (startDateInclusive, endDateExclusive) {
$I$(1).requireNonNull$O$S(startDateInclusive, "startDateInclusive");
$I$(1).requireNonNull$O$S(endDateExclusive, "endDateExclusive");
return startDateInclusive.until$java_time_chrono_ChronoLocalDate(endDateExclusive);
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'isZero$', function () {
for (var unit, $unit = this.getUnits$().iterator$(); $unit.hasNext$()&&((unit=($unit.next$())),1);) {
if (this.get$java_time_temporal_TemporalUnit(unit) != 0) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'isNegative$', function () {
for (var unit, $unit = this.getUnits$().iterator$(); $unit.hasNext$()&&((unit=($unit.next$())),1);) {
if (this.get$java_time_temporal_TemporalUnit(unit) < 0) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'negated$', function () {
return this.multipliedBy$I(-1);
});
};})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
