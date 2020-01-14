(function(){var P$=Clazz.newPackage("jalview.ext.android"),I$=[];
var C$=Clazz.newClass(P$, "ContainerHelpers");
C$.EMPTY_BOOLEANS=null;
C$.EMPTY_INTS=null;
C$.EMPTY_DOUBLES=null;
C$.EMPTY_LONGS=null;
C$.EMPTY_OBJECTS=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.EMPTY_BOOLEANS=Clazz.array(Boolean.TYPE, [0]);
C$.EMPTY_INTS=Clazz.array(Integer.TYPE, [0]);
C$.EMPTY_DOUBLES=Clazz.array(Double.TYPE, [0]);
C$.EMPTY_LONGS=Clazz.array(Long.TYPE, [0]);
C$.EMPTY_OBJECTS=Clazz.array(java.lang.Object, [0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'binarySearch$IA$I$I', function (array, size, value) {
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

Clazz.newMeth(C$, 'binarySearch$JA$I$J', function (array, size, value) {
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

Clazz.newMeth(C$, 'binarySearch$HA$I$H', function (array, size, value) {
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

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
