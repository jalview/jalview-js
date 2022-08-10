(function(){var P$=Clazz.newPackage("java.time.temporal"),I$=[[0,'java.util.Objects']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "TemporalField");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getDisplayName$java_util_Locale', function (locale) {
$I$(1).requireNonNull$O$S(locale, "locale");
return this.toString();
});

Clazz.newMeth(C$, 'resolve$java_util_Map$java_time_temporal_TemporalAccessor$java_time_format_ResolverStyle', function (fieldValues, partialTemporal, resolverStyle) {
return null;
});
};})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
