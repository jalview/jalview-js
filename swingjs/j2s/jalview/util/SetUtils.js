(function(){var P$=Clazz.newPackage("jalview.util"),I$=[];
var C$=Clazz.newClass(P$, "SetUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'countDisjunction$java_util_Set$java_util_Set', function (set1, set2) {
if (set1 == null ) {
return set2 == null  ? 0 : set2.size$();
}if (set2 == null ) {
return set1.size$();
}var size1=set1.size$();
var size2=set2.size$();
var smallerSet=size1 < size2 ? set1 : set2;
var largerSet=(smallerSet === set1  ? set2 : set1);
var inCommon=0;
for (var k, $k = smallerSet.iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
if (largerSet.contains$O(k)) {
inCommon++;
}}
var notInCommon=(size1 - inCommon) + (size2 - inCommon);
return notInCommon;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
