(function(){var P$=Clazz.newPackage("jalview.ws.sifts"),I$=[[0,'java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SiftsSettings");
C$.mapWithSifts=false;
C$.siftDownloadDirectory=null;
C$.cacheThresholdInDays=0;
C$.failSafePIDThreshold=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.mapWithSifts=false;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isMapWithSifts$', function () {
return C$.mapWithSifts;
}, 1);

Clazz.newMeth(C$, 'setMapWithSifts$Z', function (mapWithSifts) {
C$.mapWithSifts=mapWithSifts;
}, 1);

Clazz.newMeth(C$, 'getSiftDownloadDirectory$', function () {
return C$.siftDownloadDirectory;
}, 1);

Clazz.newMeth(C$, 'setSiftDownloadDirectory$S', function (siftDownloadDirectory) {
C$.siftDownloadDirectory=siftDownloadDirectory;
}, 1);

Clazz.newMeth(C$, 'getCacheThresholdInDays$', function () {
return C$.cacheThresholdInDays;
}, 1);

Clazz.newMeth(C$, 'setCacheThresholdInDays$S', function (cacheThresholdInDays) {
$I$(1).requireNonNull$TT(cacheThresholdInDays);
C$.cacheThresholdInDays=(Integer.valueOf$S(cacheThresholdInDays)).intValue$();
}, 1);

Clazz.newMeth(C$, 'getFailSafePIDThreshold$', function () {
return C$.failSafePIDThreshold;
}, 1);

Clazz.newMeth(C$, 'setFailSafePIDThreshold$S', function (failSafePIDThreshold) {
$I$(1).requireNonNull$TT(failSafePIDThreshold);
C$.failSafePIDThreshold=(Integer.valueOf$S(failSafePIDThreshold)).intValue$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
