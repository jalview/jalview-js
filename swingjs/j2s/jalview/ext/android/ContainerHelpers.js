(function(){var P$=Clazz.newPackage("jalview.ext.android"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ContainerHelpers");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['EMPTY_BOOLEANS','boolean[]','EMPTY_INTS','int[]','EMPTY_DOUBLES','double[]','EMPTY_LONGS','long[]','EMPTY_OBJECTS','Object[]']]]

Clazz.newMeth(C$, 'binarySearch$IA$I$I',  function (array, size, value) {
var lo=0;
var hi=size - 1;
while (lo <= hi){
var mid=(lo + hi) >>> 1;
var midVal=array[mid];
if (midVal < value) {
lo=mid + 1;
} else if (midVal > value) {
hi=mid - 1;
} else {
return mid;
}}
return ~lo;
}, 1);

Clazz.newMeth(C$, 'binarySearch$JA$I$J',  function (array, size, value) {
var lo=0;
var hi=size - 1;
while (lo <= hi){
var mid=(lo + hi) >>> 1;
var midVal=array[mid];
if (Long.$lt(midVal,value )) {
lo=mid + 1;
} else if (Long.$gt(midVal,value )) {
hi=mid - 1;
} else {
return mid;
}}
return ~lo;
}, 1);

Clazz.newMeth(C$, 'binarySearch$HA$I$H',  function (array, size, value) {
var lo=0;
var hi=size - 1;
while (lo <= hi){
var mid=(lo + hi) >>> 1;
var midVal=array[mid];
if (midVal < value) {
lo=mid + 1;
} else if (midVal > value) {
hi=mid - 1;
} else {
return mid;
}}
return ~lo;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.EMPTY_BOOLEANS=Clazz.array(Boolean.TYPE, [0]);
C$.EMPTY_INTS=Clazz.array(Integer.TYPE, [0]);
C$.EMPTY_DOUBLES=Clazz.array(Double.TYPE, [0]);
C$.EMPTY_LONGS=Clazz.array(Long.TYPE, [0]);
C$.EMPTY_OBJECTS=Clazz.array(java.lang.Object, [0]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
