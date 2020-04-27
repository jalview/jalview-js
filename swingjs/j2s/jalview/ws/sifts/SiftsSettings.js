(function(){var P$=Clazz.newPackage("jalview.ws.sifts"),I$=[[0,'java.util.Objects']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SiftsSettings");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['mapWithSifts'],'I',['cacheThresholdInDays','failSafePIDThreshold'],'S',['siftDownloadDirectory']]]

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
$I$(1).requireNonNull$O(cacheThresholdInDays);
C$.cacheThresholdInDays=(Integer.valueOf$S(cacheThresholdInDays)).valueOf();
}, 1);

Clazz.newMeth(C$, 'getFailSafePIDThreshold$', function () {
return C$.failSafePIDThreshold;
}, 1);

Clazz.newMeth(C$, 'setFailSafePIDThreshold$S', function (failSafePIDThreshold) {
$I$(1).requireNonNull$O(failSafePIDThreshold);
C$.failSafePIDThreshold=(Integer.valueOf$S(failSafePIDThreshold)).valueOf();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.mapWithSifts=false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
