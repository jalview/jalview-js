(function(){var P$=java.util,I$=[[0,'java.util.Objects','java.util.Arrays','java.util.Spliterators','java.util.DualPivotQuicksort','java.util.concurrent.ForkJoinPool',['java.util.ArraysParallelSortHelpers','.FJByte','.Sorter'],['java.util.ArraysParallelSortHelpers','.FJChar','.Sorter'],['java.util.ArraysParallelSortHelpers','.FJShort','.Sorter'],['java.util.ArraysParallelSortHelpers','.FJInt','.Sorter'],['java.util.ArraysParallelSortHelpers','.FJLong','.Sorter'],['java.util.ArraysParallelSortHelpers','.FJFloat','.Sorter'],['java.util.ArraysParallelSortHelpers','.FJDouble','.Sorter'],'java.util.TimSort',['java.util.Arrays','.NaturalOrder'],['java.util.ArraysParallelSortHelpers','.FJObject','.Sorter'],'java.lang.reflect.Array',['java.util.Arrays','.LegacyMergeSort'],'java.util.ComparableTimSort',['java.util.ArrayPrefixHelpers','.CumulateTask'],['java.util.ArrayPrefixHelpers','.LongCumulateTask'],['java.util.ArrayPrefixHelpers','.DoubleCumulateTask'],['java.util.ArrayPrefixHelpers','.IntCumulateTask'],['java.util.Arrays','.ArrayList'],'StringBuilder','java.util.HashSet','java.util.stream.IntStream','java.util.stream.StreamSupport']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Arrays", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'rangeCheck$I$I$I', function (arrayLength, fromIndex, toIndex) {
if (fromIndex > toIndex) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["fromIndex(" + fromIndex + ") > toIndex(" + toIndex + ")" ]);
}if (fromIndex < 0) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[fromIndex]);
}if (toIndex > arrayLength) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[toIndex]);
}}, 1);

Clazz.newMeth(C$, 'sort$IA', function (a) {
$I$(4).sort$IA$I$I$IA$I$I(a, 0, a.length - 1, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'sort$IA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
$I$(4).sort$IA$I$I$IA$I$I(a, fromIndex, toIndex - 1, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'sort$JA', function (a) {
$I$(4).sort$JA$I$I$JA$I$I(a, 0, a.length - 1, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'sort$JA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
$I$(4).sort$JA$I$I$JA$I$I(a, fromIndex, toIndex - 1, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'sort$HA', function (a) {
$I$(4).sort$HA$I$I$HA$I$I(a, 0, a.length - 1, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'sort$HA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
$I$(4).sort$HA$I$I$HA$I$I(a, fromIndex, toIndex - 1, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'sort$CA', function (a) {
$I$(4).sort$CA$I$I$CA$I$I(a, 0, a.length - 1, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'sort$CA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
$I$(4).sort$CA$I$I$CA$I$I(a, fromIndex, toIndex - 1, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'sort$BA', function (a) {
$I$(4).sort$BA$I$I(a, 0, a.length - 1);
}, 1);

Clazz.newMeth(C$, 'sort$BA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
$I$(4).sort$BA$I$I(a, fromIndex, toIndex - 1);
}, 1);

Clazz.newMeth(C$, 'sort$FA', function (a) {
$I$(4).sort$FA$I$I$FA$I$I(a, 0, a.length - 1, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'sort$FA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
$I$(4).sort$FA$I$I$FA$I$I(a, fromIndex, toIndex - 1, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'sort$DA', function (a) {
$I$(4).sort$DA$I$I$DA$I$I(a, 0, a.length - 1, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'sort$DA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
$I$(4).sort$DA$I$I$DA$I$I(a, fromIndex, toIndex - 1, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'parallelSort$BA', function (a) {
var n=a.length;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(4).sort$BA$I$I(a, 0, n - 1);
 else Clazz.new_($I$(6).c$$java_util_concurrent_CountedCompleter$BA$BA$I$I$I$I,[null, a, Clazz.array(Byte.TYPE, [n]), 0, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$BA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
var n=toIndex - fromIndex;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(4).sort$BA$I$I(a, fromIndex, toIndex - 1);
 else Clazz.new_($I$(6).c$$java_util_concurrent_CountedCompleter$BA$BA$I$I$I$I,[null, a, Clazz.array(Byte.TYPE, [n]), fromIndex, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$CA', function (a) {
var n=a.length;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(4).sort$CA$I$I$CA$I$I(a, 0, n - 1, null, 0, 0);
 else Clazz.new_($I$(7).c$$java_util_concurrent_CountedCompleter$CA$CA$I$I$I$I,[null, a, Clazz.array(Character.TYPE, [n]), 0, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$CA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
var n=toIndex - fromIndex;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(4).sort$CA$I$I$CA$I$I(a, fromIndex, toIndex - 1, null, 0, 0);
 else Clazz.new_($I$(7).c$$java_util_concurrent_CountedCompleter$CA$CA$I$I$I$I,[null, a, Clazz.array(Character.TYPE, [n]), fromIndex, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$HA', function (a) {
var n=a.length;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(4).sort$HA$I$I$HA$I$I(a, 0, n - 1, null, 0, 0);
 else Clazz.new_($I$(8).c$$java_util_concurrent_CountedCompleter$HA$HA$I$I$I$I,[null, a, Clazz.array(Short.TYPE, [n]), 0, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$HA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
var n=toIndex - fromIndex;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(4).sort$HA$I$I$HA$I$I(a, fromIndex, toIndex - 1, null, 0, 0);
 else Clazz.new_($I$(8).c$$java_util_concurrent_CountedCompleter$HA$HA$I$I$I$I,[null, a, Clazz.array(Short.TYPE, [n]), fromIndex, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$IA', function (a) {
var n=a.length;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(4).sort$IA$I$I$IA$I$I(a, 0, n - 1, null, 0, 0);
 else Clazz.new_($I$(9).c$$java_util_concurrent_CountedCompleter$IA$IA$I$I$I$I,[null, a, Clazz.array(Integer.TYPE, [n]), 0, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$IA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
var n=toIndex - fromIndex;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(4).sort$IA$I$I$IA$I$I(a, fromIndex, toIndex - 1, null, 0, 0);
 else Clazz.new_($I$(9).c$$java_util_concurrent_CountedCompleter$IA$IA$I$I$I$I,[null, a, Clazz.array(Integer.TYPE, [n]), fromIndex, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$JA', function (a) {
var n=a.length;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(4).sort$JA$I$I$JA$I$I(a, 0, n - 1, null, 0, 0);
 else Clazz.new_($I$(10).c$$java_util_concurrent_CountedCompleter$JA$JA$I$I$I$I,[null, a, Clazz.array(Long.TYPE, [n]), 0, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$JA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
var n=toIndex - fromIndex;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(4).sort$JA$I$I$JA$I$I(a, fromIndex, toIndex - 1, null, 0, 0);
 else Clazz.new_($I$(10).c$$java_util_concurrent_CountedCompleter$JA$JA$I$I$I$I,[null, a, Clazz.array(Long.TYPE, [n]), fromIndex, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$FA', function (a) {
var n=a.length;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(4).sort$FA$I$I$FA$I$I(a, 0, n - 1, null, 0, 0);
 else Clazz.new_($I$(11).c$$java_util_concurrent_CountedCompleter$FA$FA$I$I$I$I,[null, a, Clazz.array(Float.TYPE, [n]), 0, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$FA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
var n=toIndex - fromIndex;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(4).sort$FA$I$I$FA$I$I(a, fromIndex, toIndex - 1, null, 0, 0);
 else Clazz.new_($I$(11).c$$java_util_concurrent_CountedCompleter$FA$FA$I$I$I$I,[null, a, Clazz.array(Float.TYPE, [n]), fromIndex, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$DA', function (a) {
var n=a.length;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(4).sort$DA$I$I$DA$I$I(a, 0, n - 1, null, 0, 0);
 else Clazz.new_($I$(12).c$$java_util_concurrent_CountedCompleter$DA$DA$I$I$I$I,[null, a, Clazz.array(Double.TYPE, [n]), 0, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$DA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
var n=toIndex - fromIndex;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(4).sort$DA$I$I$DA$I$I(a, fromIndex, toIndex - 1, null, 0, 0);
 else Clazz.new_($I$(12).c$$java_util_concurrent_CountedCompleter$DA$DA$I$I$I$I,[null, a, Clazz.array(Double.TYPE, [n]), fromIndex, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$TTA', function (a) {
var n=a.length;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(13).sort$TTA$I$I$java_util_Comparator$TTA$I$I(a, 0, n, $I$(14).INSTANCE, null, 0, 0);
 else Clazz.new_($I$(15).c$$java_util_concurrent_CountedCompleter$TTA$TTA$I$I$I$I$java_util_Comparator,[null, a, Clazz.array(a.getClass$().getComponentType$(), n), 0, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g, $I$(14).INSTANCE]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$TTA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
var n=toIndex - fromIndex;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(13).sort$TTA$I$I$java_util_Comparator$TTA$I$I(a, fromIndex, toIndex, $I$(14).INSTANCE, null, 0, 0);
 else Clazz.new_($I$(15).c$$java_util_concurrent_CountedCompleter$TTA$TTA$I$I$I$I$java_util_Comparator,[null, a, Clazz.array(a.getClass$().getComponentType$(), n), fromIndex, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g, $I$(14).INSTANCE]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$TTA$java_util_Comparator', function (a, cmp) {
if (cmp == null ) cmp=$I$(14).INSTANCE;
var n=a.length;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(13).sort$TTA$I$I$java_util_Comparator$TTA$I$I(a, 0, n, cmp, null, 0, 0);
 else Clazz.new_($I$(15).c$$java_util_concurrent_CountedCompleter$TTA$TTA$I$I$I$I$java_util_Comparator,[null, a, Clazz.array(a.getClass$().getComponentType$(), n), 0, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g, cmp]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelSort$TTA$I$I$java_util_Comparator', function (a, fromIndex, toIndex, cmp) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
if (cmp == null ) cmp=$I$(14).INSTANCE;
var n=toIndex - fromIndex;
var p;
var g;
if (n <= 8192 || (p=$I$(5).getCommonPoolParallelism$()) == 1 ) $I$(13).sort$TTA$I$I$java_util_Comparator$TTA$I$I(a, fromIndex, toIndex, cmp, null, 0, 0);
 else Clazz.new_($I$(15).c$$java_util_concurrent_CountedCompleter$TTA$TTA$I$I$I$I$java_util_Comparator,[null, a, Clazz.array(a.getClass$().getComponentType$(), n), fromIndex, n, 0, ((g=(n/(p << 2)|0)) <= 8192) ? 8192 : g, cmp]).invoke$();
}, 1);

Clazz.newMeth(C$, 'sort$OA', function (a) {
if ($I$(17).userRequested) C$.legacyMergeSort$OA(a);
 else $I$(18).sort$OA$I$I$OA$I$I(a, 0, a.length, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'legacyMergeSort$OA', function (a) {
var aux=a.clone$();
C$.mergeSort$OA$OA$I$I$I(aux, a, 0, a.length, 0);
}, 1);

Clazz.newMeth(C$, 'sort$OA$I$I', function (a, fromIndex, toIndex) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
if ($I$(17).userRequested) C$.legacyMergeSort$OA$I$I(a, fromIndex, toIndex);
 else $I$(18).sort$OA$I$I$OA$I$I(a, fromIndex, toIndex, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'legacyMergeSort$OA$I$I', function (a, fromIndex, toIndex) {
var aux=C$.copyOfRange$TTA$I$I(a, fromIndex, toIndex);
C$.mergeSort$OA$OA$I$I$I(aux, a, fromIndex, toIndex, -fromIndex);
}, 1);

Clazz.newMeth(C$, 'mergeSort$OA$OA$I$I$I', function (src, dest, low, high, off) {
var length=high - low;
if (length < 7) {
for (var i=low; i < high; i++) for (var j=i; j > low && (dest[j - 1]).compareTo$(dest[j]) > 0 ; j--) C$.swap$OA$I$I(dest, j, j - 1);


return;
}var destLow=low;
var destHigh=high;
low+=off;
high+=off;
var mid=(low + high) >>> 1;
C$.mergeSort$OA$OA$I$I$I(dest, src, low, mid, -off);
C$.mergeSort$OA$OA$I$I$I(dest, src, mid, high, -off);
if ((src[mid - 1]).compareTo$(src[mid]) <= 0) {
System.arraycopy$O$I$O$I$I(src, low, dest, destLow, length);
return;
}for (var i=destLow, p=low, q=mid; i < destHigh; i++) {
if (q >= high || p < mid && (src[p]).compareTo$(src[q]) <= 0  ) dest[i]=src[p++];
 else dest[i]=src[q++];
}
}, 1);

Clazz.newMeth(C$, 'swap$OA$I$I', function (x, a, b) {
var t=x[a];
x[a]=x[b];
x[b]=t;
}, 1);

Clazz.newMeth(C$, 'sort$TTA$java_util_Comparator', function (a, c) {
if (c == null ) {
C$.sort$OA(a);
} else {
if ($I$(17).userRequested) C$.legacyMergeSort$TTA$java_util_Comparator(a, c);
 else $I$(13).sort$TTA$I$I$java_util_Comparator$TTA$I$I(a, 0, a.length, c, null, 0, 0);
}}, 1);

Clazz.newMeth(C$, 'legacyMergeSort$TTA$java_util_Comparator', function (a, c) {
var aux=a.clone$();
if (c == null ) C$.mergeSort$OA$OA$I$I$I(aux, a, 0, a.length, 0);
 else C$.mergeSort$OA$OA$I$I$I$java_util_Comparator(aux, a, 0, a.length, 0, c);
}, 1);

Clazz.newMeth(C$, 'sort$TTA$I$I$java_util_Comparator', function (a, fromIndex, toIndex, c) {
if (c == null ) {
C$.sort$OA$I$I(a, fromIndex, toIndex);
} else {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
if ($I$(17).userRequested) C$.legacyMergeSort$TTA$I$I$java_util_Comparator(a, fromIndex, toIndex, c);
 else $I$(13).sort$TTA$I$I$java_util_Comparator$TTA$I$I(a, fromIndex, toIndex, c, null, 0, 0);
}}, 1);

Clazz.newMeth(C$, 'legacyMergeSort$TTA$I$I$java_util_Comparator', function (a, fromIndex, toIndex, c) {
var aux=C$.copyOfRange$TTA$I$I(a, fromIndex, toIndex);
if (c == null ) C$.mergeSort$OA$OA$I$I$I(aux, a, fromIndex, toIndex, -fromIndex);
 else C$.mergeSort$OA$OA$I$I$I$java_util_Comparator(aux, a, fromIndex, toIndex, -fromIndex, c);
}, 1);

Clazz.newMeth(C$, 'mergeSort$OA$OA$I$I$I$java_util_Comparator', function (src, dest, low, high, off, c) {
var length=high - low;
if (length < 7) {
for (var i=low; i < high; i++) for (var j=i; j > low && c.compare$(dest[j - 1], dest[j]) > 0 ; j--) C$.swap$OA$I$I(dest, j, j - 1);


return;
}var destLow=low;
var destHigh=high;
low+=off;
high+=off;
var mid=(low + high) >>> 1;
C$.mergeSort$OA$OA$I$I$I$java_util_Comparator(dest, src, low, mid, -off, c);
C$.mergeSort$OA$OA$I$I$I$java_util_Comparator(dest, src, mid, high, -off, c);
if (c.compare$(src[mid - 1], src[mid]) <= 0) {
System.arraycopy$O$I$O$I$I(src, low, dest, destLow, length);
return;
}for (var i=destLow, p=low, q=mid; i < destHigh; i++) {
if (q >= high || p < mid && c.compare$(src[p], src[q]) <= 0  ) dest[i]=src[p++];
 else dest[i]=src[q++];
}
}, 1);

Clazz.newMeth(C$, 'parallelPrefix$TTA$java_util_function_BinaryOperator', function (array, op) {
$I$(1).requireNonNull$TT(op);
if (array.length > 0) Clazz.new_($I$(19).c$$java_util_ArrayPrefixHelpers_CumulateTask$java_util_function_BinaryOperator$TTA$I$I,[null, op, array, 0, array.length]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelPrefix$TTA$I$I$java_util_function_BinaryOperator', function (array, fromIndex, toIndex, op) {
$I$(1).requireNonNull$TT(op);
C$.rangeCheck$I$I$I(array.length, fromIndex, toIndex);
if (fromIndex < toIndex) Clazz.new_($I$(19).c$$java_util_ArrayPrefixHelpers_CumulateTask$java_util_function_BinaryOperator$TTA$I$I,[null, op, array, fromIndex, toIndex]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelPrefix$JA$java_util_function_LongBinaryOperator', function (array, op) {
$I$(1).requireNonNull$TT(op);
if (array.length > 0) Clazz.new_($I$(20).c$$java_util_ArrayPrefixHelpers_LongCumulateTask$java_util_function_LongBinaryOperator$JA$I$I,[null, op, array, 0, array.length]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelPrefix$JA$I$I$java_util_function_LongBinaryOperator', function (array, fromIndex, toIndex, op) {
$I$(1).requireNonNull$TT(op);
C$.rangeCheck$I$I$I(array.length, fromIndex, toIndex);
if (fromIndex < toIndex) Clazz.new_($I$(20).c$$java_util_ArrayPrefixHelpers_LongCumulateTask$java_util_function_LongBinaryOperator$JA$I$I,[null, op, array, fromIndex, toIndex]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelPrefix$DA$java_util_function_DoubleBinaryOperator', function (array, op) {
$I$(1).requireNonNull$TT(op);
if (array.length > 0) Clazz.new_($I$(21).c$$java_util_ArrayPrefixHelpers_DoubleCumulateTask$java_util_function_DoubleBinaryOperator$DA$I$I,[null, op, array, 0, array.length]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelPrefix$DA$I$I$java_util_function_DoubleBinaryOperator', function (array, fromIndex, toIndex, op) {
$I$(1).requireNonNull$TT(op);
C$.rangeCheck$I$I$I(array.length, fromIndex, toIndex);
if (fromIndex < toIndex) Clazz.new_($I$(21).c$$java_util_ArrayPrefixHelpers_DoubleCumulateTask$java_util_function_DoubleBinaryOperator$DA$I$I,[null, op, array, fromIndex, toIndex]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelPrefix$IA$java_util_function_IntBinaryOperator', function (array, op) {
$I$(1).requireNonNull$TT(op);
if (array.length > 0) Clazz.new_($I$(22).c$$java_util_ArrayPrefixHelpers_IntCumulateTask$java_util_function_IntBinaryOperator$IA$I$I,[null, op, array, 0, array.length]).invoke$();
}, 1);

Clazz.newMeth(C$, 'parallelPrefix$IA$I$I$java_util_function_IntBinaryOperator', function (array, fromIndex, toIndex, op) {
$I$(1).requireNonNull$TT(op);
C$.rangeCheck$I$I$I(array.length, fromIndex, toIndex);
if (fromIndex < toIndex) Clazz.new_($I$(22).c$$java_util_ArrayPrefixHelpers_IntCumulateTask$java_util_function_IntBinaryOperator$IA$I$I,[null, op, array, fromIndex, toIndex]).invoke$();
}, 1);

Clazz.newMeth(C$, 'binarySearch$JA$J', function (a, key) {
return C$.binarySearch0$JA$I$I$J(a, 0, a.length, key);
}, 1);

Clazz.newMeth(C$, 'binarySearch$JA$I$I$J', function (a, fromIndex, toIndex, key) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
return C$.binarySearch0$JA$I$I$J(a, fromIndex, toIndex, key);
}, 1);

Clazz.newMeth(C$, 'binarySearch0$JA$I$I$J', function (a, fromIndex, toIndex, key) {
var low=fromIndex;
var high=toIndex - 1;
while (low <= high){
var mid=(low + high) >>> 1;
var midVal=a[mid];
if (midVal < key) low=mid + 1;
 else if (midVal > key) high=mid - 1;
 else return mid;
}
return -(low + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$IA$I', function (a, key) {
return C$.binarySearch0$IA$I$I$I(a, 0, a.length, key);
}, 1);

Clazz.newMeth(C$, 'binarySearch$IA$I$I$I', function (a, fromIndex, toIndex, key) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
return C$.binarySearch0$IA$I$I$I(a, fromIndex, toIndex, key);
}, 1);

Clazz.newMeth(C$, 'binarySearch0$IA$I$I$I', function (a, fromIndex, toIndex, key) {
var low=fromIndex;
var high=toIndex - 1;
while (low <= high){
var mid=(low + high) >>> 1;
var midVal=a[mid];
if (midVal < key) low=mid + 1;
 else if (midVal > key) high=mid - 1;
 else return mid;
}
return -(low + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$HA$H', function (a, key) {
return C$.binarySearch0$HA$I$I$H(a, 0, a.length, key);
}, 1);

Clazz.newMeth(C$, 'binarySearch$HA$I$I$H', function (a, fromIndex, toIndex, key) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
return C$.binarySearch0$HA$I$I$H(a, fromIndex, toIndex, key);
}, 1);

Clazz.newMeth(C$, 'binarySearch0$HA$I$I$H', function (a, fromIndex, toIndex, key) {
var low=fromIndex;
var high=toIndex - 1;
while (low <= high){
var mid=(low + high) >>> 1;
var midVal=a[mid];
if (midVal < key) low=mid + 1;
 else if (midVal > key) high=mid - 1;
 else return mid;
}
return -(low + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$CA$C', function (a, key) {
return C$.binarySearch0$CA$I$I$C(a, 0, a.length, key);
}, 1);

Clazz.newMeth(C$, 'binarySearch$CA$I$I$C', function (a, fromIndex, toIndex, key) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
return C$.binarySearch0$CA$I$I$C(a, fromIndex, toIndex, key);
}, 1);

Clazz.newMeth(C$, 'binarySearch0$CA$I$I$C', function (a, fromIndex, toIndex, key) {
var low=fromIndex;
var high=toIndex - 1;
while (low <= high){
var mid=(low + high) >>> 1;
var midVal=a[mid];
if (midVal < key) low=mid + 1;
 else if (midVal > key) high=mid - 1;
 else return mid;
}
return -(low + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$BA$B', function (a, key) {
return C$.binarySearch0$BA$I$I$B(a, 0, a.length, ($b$[0] = key, $b$[0]));
}, 1);

Clazz.newMeth(C$, 'binarySearch$BA$I$I$B', function (a, fromIndex, toIndex, key) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
return C$.binarySearch0$BA$I$I$B(a, fromIndex, toIndex, ($b$[0] = key, $b$[0]));
}, 1);

Clazz.newMeth(C$, 'binarySearch0$BA$I$I$B', function (a, fromIndex, toIndex, key) {
var low=fromIndex;
var high=toIndex - 1;
while (low <= high){
var mid=(low + high) >>> 1;
var midVal=($b$[0] = a[mid], $b$[0]);
if (midVal < key) low=mid + 1;
 else if (midVal > key) high=mid - 1;
 else return mid;
}
return -(low + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$DA$D', function (a, key) {
return C$.binarySearch0$DA$I$I$D(a, 0, a.length, key);
}, 1);

Clazz.newMeth(C$, 'binarySearch$DA$I$I$D', function (a, fromIndex, toIndex, key) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
return C$.binarySearch0$DA$I$I$D(a, fromIndex, toIndex, key);
}, 1);

Clazz.newMeth(C$, 'binarySearch0$DA$I$I$D', function (a, fromIndex, toIndex, key) {
var low=fromIndex;
var high=toIndex - 1;
while (low <= high){
var mid=(low + high) >>> 1;
var midVal=a[mid];
if (midVal < key ) low=mid + 1;
 else if (midVal > key ) high=mid - 1;
 else {
var midBits=Double.doubleToLongBits$D(midVal);
var keyBits=Double.doubleToLongBits$D(key);
if (midBits == keyBits) return mid;
 else if (midBits < keyBits) low=mid + 1;
 else high=mid - 1;
}}
return -(low + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$FA$F', function (a, key) {
return C$.binarySearch0$FA$I$I$F(a, 0, a.length, key);
}, 1);

Clazz.newMeth(C$, 'binarySearch$FA$I$I$F', function (a, fromIndex, toIndex, key) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
return C$.binarySearch0$FA$I$I$F(a, fromIndex, toIndex, key);
}, 1);

Clazz.newMeth(C$, 'binarySearch0$FA$I$I$F', function (a, fromIndex, toIndex, key) {
var low=fromIndex;
var high=toIndex - 1;
while (low <= high){
var mid=(low + high) >>> 1;
var midVal=a[mid];
if (midVal < key ) low=mid + 1;
 else if (midVal > key ) high=mid - 1;
 else {
var midBits=Float.floatToIntBits$F(midVal);
var keyBits=Float.floatToIntBits$F(key);
if (midBits == keyBits) return mid;
 else if (midBits < keyBits) low=mid + 1;
 else high=mid - 1;
}}
return -(low + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$OA$O', function (a, key) {
return C$.binarySearch0$OA$I$I$O(a, 0, a.length, key);
}, 1);

Clazz.newMeth(C$, 'binarySearch$OA$I$I$O', function (a, fromIndex, toIndex, key) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
return C$.binarySearch0$OA$I$I$O(a, fromIndex, toIndex, key);
}, 1);

Clazz.newMeth(C$, 'binarySearch0$OA$I$I$O', function (a, fromIndex, toIndex, key) {
var low=fromIndex;
var high=toIndex - 1;
while (low <= high){
var mid=(low + high) >>> 1;
var midVal=a[mid];
var cmp=midVal.compareTo$(key);
if (cmp < 0) low=mid + 1;
 else if (cmp > 0) high=mid - 1;
 else return mid;
}
return -(low + 1);
}, 1);

Clazz.newMeth(C$, 'binarySearch$TTA$TT$java_util_Comparator', function (a, key, c) {
return C$.binarySearch0$TTA$I$I$TT$java_util_Comparator(a, 0, a.length, key, c);
}, 1);

Clazz.newMeth(C$, 'binarySearch$TTA$I$I$TT$java_util_Comparator', function (a, fromIndex, toIndex, key, c) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
return C$.binarySearch0$TTA$I$I$TT$java_util_Comparator(a, fromIndex, toIndex, key, c);
}, 1);

Clazz.newMeth(C$, 'binarySearch0$TTA$I$I$TT$java_util_Comparator', function (a, fromIndex, toIndex, key, c) {
if (c == null ) {
return C$.binarySearch0$OA$I$I$O(a, fromIndex, toIndex, key);
}var low=fromIndex;
var high=toIndex - 1;
while (low <= high){
var mid=(low + high) >>> 1;
var midVal=a[mid];
var cmp=c.compare$(midVal, key);
if (cmp < 0) low=mid + 1;
 else if (cmp > 0) high=mid - 1;
 else return mid;
}
return -(low + 1);
}, 1);

Clazz.newMeth(C$, 'equals$JA$JA', function (a, a2) {
if (a === a2 ) return true;
if (a == null  || a2 == null  ) return false;
var length=a.length;
if (a2.length != length) return false;
for (var i=0; i < length; i++) if (a[i] != a2[i]) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'equals$IA$IA', function (a, a2) {
if (a === a2 ) return true;
if (a == null  || a2 == null  ) return false;
var length=a.length;
if (a2.length != length) return false;
for (var i=0; i < length; i++) if (a[i] != a2[i]) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'equals$HA$HA', function (a, a2) {
if (a === a2 ) return true;
if (a == null  || a2 == null  ) return false;
var length=a.length;
if (a2.length != length) return false;
for (var i=0; i < length; i++) if (a[i] != a2[i]) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'equals$CA$CA', function (a, a2) {
if (a === a2 ) return true;
if (a == null  || a2 == null  ) return false;
var length=a.length;
if (a2.length != length) return false;
for (var i=0; i < length; i++) if (a[i] != a2[i]) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'equals$BA$BA', function (a, a2) {
if (a === a2 ) return true;
if (a == null  || a2 == null  ) return false;
var length=a.length;
if (a2.length != length) return false;
for (var i=0; i < length; i++) if (a[i] != a2[i]) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'equals$ZA$ZA', function (a, a2) {
if (a === a2 ) return true;
if (a == null  || a2 == null  ) return false;
var length=a.length;
if (a2.length != length) return false;
for (var i=0; i < length; i++) if (a[i] != a2[i] ) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'equals$DA$DA', function (a, a2) {
if (a === a2 ) return true;
if (a == null  || a2 == null  ) return false;
var length=a.length;
if (a2.length != length) return false;
for (var i=0; i < length; i++) if (Double.doubleToLongBits$D(a[i]) != Double.doubleToLongBits$D(a2[i])) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'equals$FA$FA', function (a, a2) {
if (a === a2 ) return true;
if (a == null  || a2 == null  ) return false;
var length=a.length;
if (a2.length != length) return false;
for (var i=0; i < length; i++) if (Float.floatToIntBits$F(a[i]) != Float.floatToIntBits$F(a2[i])) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'equals$OA$OA', function (a, a2) {
if (a === a2 ) return true;
if (a == null  || a2 == null  ) return false;
var length=a.length;
if (a2.length != length) return false;
for (var i=0; i < length; i++) {
var o1=a[i];
var o2=a2[i];
if (!(o1 == null  ? o2 == null  : o1.equals$O(o2))) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'fill$JA$J', function (a, val) {
for (var i=0, len=a.length; i < len; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$JA$I$I$J', function (a, fromIndex, toIndex, val) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
for (var i=fromIndex; i < toIndex; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$IA$I', function (a, val) {
for (var i=0, len=a.length; i < len; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$IA$I$I$I', function (a, fromIndex, toIndex, val) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
for (var i=fromIndex; i < toIndex; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$HA$H', function (a, val) {
for (var i=0, len=a.length; i < len; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$HA$I$I$H', function (a, fromIndex, toIndex, val) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
for (var i=fromIndex; i < toIndex; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$CA$C', function (a, val) {
for (var i=0, len=a.length; i < len; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$CA$I$I$C', function (a, fromIndex, toIndex, val) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
for (var i=fromIndex; i < toIndex; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$BA$B', function (a, val) {
for (var i=0, len=a.length; i < len; i++) a[i]=(val|0);

}, 1);

Clazz.newMeth(C$, 'fill$BA$I$I$B', function (a, fromIndex, toIndex, val) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
for (var i=fromIndex; i < toIndex; i++) a[i]=(val|0);

}, 1);

Clazz.newMeth(C$, 'fill$ZA$Z', function (a, val) {
for (var i=0, len=a.length; i < len; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$ZA$I$I$Z', function (a, fromIndex, toIndex, val) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
for (var i=fromIndex; i < toIndex; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$DA$D', function (a, val) {
for (var i=0, len=a.length; i < len; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$DA$I$I$D', function (a, fromIndex, toIndex, val) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
for (var i=fromIndex; i < toIndex; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$FA$F', function (a, val) {
for (var i=0, len=a.length; i < len; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$FA$I$I$F', function (a, fromIndex, toIndex, val) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
for (var i=fromIndex; i < toIndex; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$OA$O', function (a, val) {
for (var i=0, len=a.length; i < len; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'fill$OA$I$I$O', function (a, fromIndex, toIndex, val) {
C$.rangeCheck$I$I$I(a.length, fromIndex, toIndex);
for (var i=fromIndex; i < toIndex; i++) a[i]=val;

}, 1);

Clazz.newMeth(C$, 'copyOf$TTA$I', function (original, newLength) {
return C$.copyOf$TUA$I$Class(original, newLength, original.getClass$());
}, 1);

Clazz.newMeth(C$, 'copyOf$TUA$I$Class', function (original, newLength, newType) {
var copy=(newType === Clazz.array(java.lang.Object, -1) ) ? Clazz.array(java.lang.Object, [newLength]) : Clazz.array(newType.getComponentType$(), newLength);
System.arraycopy$O$I$O$I$I(original, 0, copy, 0, Math.min(original.length, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOf$BA$I', function (original, newLength) {
var copy=Clazz.array(Byte.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, 0, copy, 0, Math.min(original.length, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOf$HA$I', function (original, newLength) {
var copy=Clazz.array(Short.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, 0, copy, 0, Math.min(original.length, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOf$IA$I', function (original, newLength) {
var copy=Clazz.array(Integer.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, 0, copy, 0, Math.min(original.length, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOf$JA$I', function (original, newLength) {
var copy=Clazz.array(Long.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, 0, copy, 0, Math.min(original.length, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOf$CA$I', function (original, newLength) {
var copy=Clazz.array(Character.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, 0, copy, 0, Math.min(original.length, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOf$FA$I', function (original, newLength) {
var copy=Clazz.array(Float.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, 0, copy, 0, Math.min(original.length, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOf$DA$I', function (original, newLength) {
var copy=Clazz.array(Double.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, 0, copy, 0, Math.min(original.length, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOf$ZA$I', function (original, newLength) {
var copy=Clazz.array(Boolean.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, 0, copy, 0, Math.min(original.length, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOfRange$TTA$I$I', function (original, from, to) {
return C$.copyOfRange$TUA$I$I$Class(original, from, to, original.getClass$());
}, 1);

Clazz.newMeth(C$, 'copyOfRange$TUA$I$I$Class', function (original, from, to, newType) {
var newLength=to - from;
if (newLength < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[from + " > " + to ]);
var copy=(newType === Clazz.array(java.lang.Object, -1) ) ? Clazz.array(java.lang.Object, [newLength]) : Clazz.array(newType.getComponentType$(), newLength);
System.arraycopy$O$I$O$I$I(original, from, copy, 0, Math.min(original.length - from, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOfRange$BA$I$I', function (original, from, to) {
var newLength=to - from;
if (newLength < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[from + " > " + to ]);
var copy=Clazz.array(Byte.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, from, copy, 0, Math.min(original.length - from, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOfRange$HA$I$I', function (original, from, to) {
var newLength=to - from;
if (newLength < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[from + " > " + to ]);
var copy=Clazz.array(Short.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, from, copy, 0, Math.min(original.length - from, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOfRange$IA$I$I', function (original, from, to) {
var newLength=to - from;
if (newLength < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[from + " > " + to ]);
var copy=Clazz.array(Integer.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, from, copy, 0, Math.min(original.length - from, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOfRange$JA$I$I', function (original, from, to) {
var newLength=to - from;
if (newLength < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[from + " > " + to ]);
var copy=Clazz.array(Long.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, from, copy, 0, Math.min(original.length - from, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOfRange$CA$I$I', function (original, from, to) {
var newLength=to - from;
if (newLength < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[from + " > " + to ]);
var copy=Clazz.array(Character.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, from, copy, 0, Math.min(original.length - from, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOfRange$FA$I$I', function (original, from, to) {
var newLength=to - from;
if (newLength < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[from + " > " + to ]);
var copy=Clazz.array(Float.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, from, copy, 0, Math.min(original.length - from, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOfRange$DA$I$I', function (original, from, to) {
var newLength=to - from;
if (newLength < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[from + " > " + to ]);
var copy=Clazz.array(Double.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, from, copy, 0, Math.min(original.length - from, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'copyOfRange$ZA$I$I', function (original, from, to) {
var newLength=to - from;
if (newLength < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[from + " > " + to ]);
var copy=Clazz.array(Boolean.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(original, from, copy, 0, Math.min(original.length - from, newLength));
return copy;
}, 1);

Clazz.newMeth(C$, 'asList$TTA', function (a) {
return Clazz.new_($I$(23).c$$TEA,[a]);
}, 1);

Clazz.newMeth(C$, 'hashCode$JA', function (a) {
if (a == null ) return 0;
var result=1;
for (var element, $element = 0, $$element = a; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
var elementHash=((element ^ (element >>> 32))|0);
result=31 * result + elementHash;
}
return result;
}, 1);

Clazz.newMeth(C$, 'hashCode$IA', function (a) {
if (a == null ) return 0;
var result=1;
for (var element, $element = 0, $$element = a; $element<$$element.length&&((element=($$element[$element])),1);$element++) result=31 * result + element;

return result;
}, 1);

Clazz.newMeth(C$, 'hashCode$HA', function (a) {
if (a == null ) return 0;
var result=1;
for (var element, $element = 0, $$element = a; $element<$$element.length&&((element=($$element[$element])),1);$element++) result=31 * result + element;

return result;
}, 1);

Clazz.newMeth(C$, 'hashCode$CA', function (a) {
if (a == null ) return 0;
var result=1;
for (var element, $element = 0, $$element = a; $element<$$element.length&&((element=($$element[$element])),1);$element++) result=31 * result + element.$c();

return result;
}, 1);

Clazz.newMeth(C$, 'hashCode$BA', function (a) {
if (a == null ) return 0;
var result=1;
for (var element, $element = 0, $$element = a; $element<$$element.length&&((element=($$element[$element])),1);$element++) result=31 * result + element;

return result;
}, 1);

Clazz.newMeth(C$, 'hashCode$ZA', function (a) {
if (a == null ) return 0;
var result=1;
for (var element, $element = 0, $$element = a; $element<$$element.length&&((element=($$element[$element])),1);$element++) result=31 * result + (element ? 1231 : 1237);

return result;
}, 1);

Clazz.newMeth(C$, 'hashCode$FA', function (a) {
if (a == null ) return 0;
var result=1;
for (var element, $element = 0, $$element = a; $element<$$element.length&&((element=($$element[$element])),1);$element++) result=31 * result + Float.floatToIntBits$F(element);

return result;
}, 1);

Clazz.newMeth(C$, 'hashCode$DA', function (a) {
if (a == null ) return 0;
var result=1;
for (var element, $element = 0, $$element = a; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
var bits=Double.doubleToLongBits$D(element);
result=31 * result + ((bits ^ (bits >>> 32))|0);
}
return result;
}, 1);

Clazz.newMeth(C$, 'hashCode$OA', function (a) {
if (a == null ) return 0;
var result=1;
for (var element, $element = 0, $$element = a; $element<$$element.length&&((element=($$element[$element])),1);$element++) result=31 * result + (element == null  ? 0 : element.hashCode$());

return result;
}, 1);

Clazz.newMeth(C$, 'deepHashCode$OA', function (a) {
if (a == null ) return 0;
var result=1;
for (var element, $element = 0, $$element = a; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
var elementHash=0;
if (Clazz.instanceOf(element, Clazz.array(java.lang.Object, -1))) elementHash=C$.deepHashCode$OA(element);
 else if (Clazz.instanceOf(element, Clazz.array(Byte.TYPE, -1))) elementHash=C$.hashCode$BA(element);
 else if (Clazz.instanceOf(element, Clazz.array(Short.TYPE, -1))) elementHash=C$.hashCode$HA(element);
 else if (Clazz.instanceOf(element, Clazz.array(Integer.TYPE, -1))) elementHash=C$.hashCode$IA(element);
 else if (Clazz.instanceOf(element, Clazz.array(Long.TYPE, -1))) elementHash=C$.hashCode$JA(element);
 else if (Clazz.instanceOf(element, Clazz.array(Character.TYPE, -1))) elementHash=C$.hashCode$CA(element);
 else if (Clazz.instanceOf(element, Clazz.array(Float.TYPE, -1))) elementHash=C$.hashCode$FA(element);
 else if (Clazz.instanceOf(element, Clazz.array(Double.TYPE, -1))) elementHash=C$.hashCode$DA(element);
 else if (Clazz.instanceOf(element, Clazz.array(Boolean.TYPE, -1))) elementHash=C$.hashCode$ZA(element);
 else if (element != null ) elementHash=element.hashCode$();
result=31 * result + elementHash;
}
return result;
}, 1);

Clazz.newMeth(C$, 'deepEquals$OA$OA', function (a1, a2) {
if (a1 === a2 ) return true;
if (a1 == null  || a2 == null  ) return false;
var length=a1.length;
if (a2.length != length) return false;
for (var i=0; i < length; i++) {
var e1=a1[i];
var e2=a2[i];
if (e1 === e2 ) continue;
if (e1 == null ) return false;
var eq=C$.deepEquals0$O$O(e1, e2);
if (!eq) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'deepEquals0$O$O', function (e1, e2) {
Clazz.assert(C$, this, function(){return e1 != null });
var eq;
if (Clazz.instanceOf(e1, Clazz.array(java.lang.Object, -1)) && Clazz.instanceOf(e2, Clazz.array(java.lang.Object, -1)) ) eq=C$.deepEquals$OA$OA(e1, e2);
 else if (Clazz.instanceOf(e1, Clazz.array(Byte.TYPE, -1)) && Clazz.instanceOf(e2, Clazz.array(Byte.TYPE, -1)) ) eq=C$.equals$BA$BA(e1, e2);
 else if (Clazz.instanceOf(e1, Clazz.array(Short.TYPE, -1)) && Clazz.instanceOf(e2, Clazz.array(Short.TYPE, -1)) ) eq=C$.equals$HA$HA(e1, e2);
 else if (Clazz.instanceOf(e1, Clazz.array(Integer.TYPE, -1)) && Clazz.instanceOf(e2, Clazz.array(Integer.TYPE, -1)) ) eq=C$.equals$IA$IA(e1, e2);
 else if (Clazz.instanceOf(e1, Clazz.array(Long.TYPE, -1)) && Clazz.instanceOf(e2, Clazz.array(Long.TYPE, -1)) ) eq=C$.equals$JA$JA(e1, e2);
 else if (Clazz.instanceOf(e1, Clazz.array(Character.TYPE, -1)) && Clazz.instanceOf(e2, Clazz.array(Character.TYPE, -1)) ) eq=C$.equals$CA$CA(e1, e2);
 else if (Clazz.instanceOf(e1, Clazz.array(Float.TYPE, -1)) && Clazz.instanceOf(e2, Clazz.array(Float.TYPE, -1)) ) eq=C$.equals$FA$FA(e1, e2);
 else if (Clazz.instanceOf(e1, Clazz.array(Double.TYPE, -1)) && Clazz.instanceOf(e2, Clazz.array(Double.TYPE, -1)) ) eq=C$.equals$DA$DA(e1, e2);
 else if (Clazz.instanceOf(e1, Clazz.array(Boolean.TYPE, -1)) && Clazz.instanceOf(e2, Clazz.array(Boolean.TYPE, -1)) ) eq=C$.equals$ZA$ZA(e1, e2);
 else eq=e1.equals$O(e2);
return eq;
}, 1);

Clazz.newMeth(C$, 'toString$JA', function (a) {
if (a == null ) return "null";
var iMax=a.length - 1;
if (iMax == -1) return "[]";
var b=Clazz.new_($I$(24));
b.append$C("[");
for (var i=0; ; i++) {
b.append$J(a[i]);
if (i == iMax) return b.append$C("]").toString();
b.append$S(", ");
}
}, 1);

Clazz.newMeth(C$, 'toString$IA', function (a) {
if (a == null ) return "null";
var iMax=a.length - 1;
if (iMax == -1) return "[]";
var b=Clazz.new_($I$(24));
b.append$C("[");
for (var i=0; ; i++) {
b.append$I(a[i]);
if (i == iMax) return b.append$C("]").toString();
b.append$S(", ");
}
}, 1);

Clazz.newMeth(C$, 'toString$HA', function (a) {
if (a == null ) return "null";
var iMax=a.length - 1;
if (iMax == -1) return "[]";
var b=Clazz.new_($I$(24));
b.append$C("[");
for (var i=0; ; i++) {
b.append$I(a[i]);
if (i == iMax) return b.append$C("]").toString();
b.append$S(", ");
}
}, 1);

Clazz.newMeth(C$, 'toString$CA', function (a) {
if (a == null ) return "null";
var iMax=a.length - 1;
if (iMax == -1) return "[]";
var b=Clazz.new_($I$(24));
b.append$C("[");
for (var i=0; ; i++) {
b.append$C(a[i]);
if (i == iMax) return b.append$C("]").toString();
b.append$S(", ");
}
}, 1);

Clazz.newMeth(C$, 'toString$BA', function (a) {
if (a == null ) return "null";
var iMax=a.length - 1;
if (iMax == -1) return "[]";
var b=Clazz.new_($I$(24));
b.append$C("[");
for (var i=0; ; i++) {
b.append$I(a[i]);
if (i == iMax) return b.append$C("]").toString();
b.append$S(", ");
}
}, 1);

Clazz.newMeth(C$, 'toString$ZA', function (a) {
if (a == null ) return "null";
var iMax=a.length - 1;
if (iMax == -1) return "[]";
var b=Clazz.new_($I$(24));
b.append$C("[");
for (var i=0; ; i++) {
b.append$Z(a[i]);
if (i == iMax) return b.append$C("]").toString();
b.append$S(", ");
}
}, 1);

Clazz.newMeth(C$, 'toString$FA', function (a) {
if (a == null ) return "null";
var iMax=a.length - 1;
if (iMax == -1) return "[]";
var b=Clazz.new_($I$(24));
b.append$C("[");
for (var i=0; ; i++) {
b.append$F(a[i]);
if (i == iMax) return b.append$C("]").toString();
b.append$S(", ");
}
}, 1);

Clazz.newMeth(C$, 'toString$DA', function (a) {
if (a == null ) return "null";
var iMax=a.length - 1;
if (iMax == -1) return "[]";
var b=Clazz.new_($I$(24));
b.append$C("[");
for (var i=0; ; i++) {
b.append$D(a[i]);
if (i == iMax) return b.append$C("]").toString();
b.append$S(", ");
}
}, 1);

Clazz.newMeth(C$, 'toString$OA', function (a) {
if (a == null ) return "null";
var iMax=a.length - 1;
if (iMax == -1) return "[]";
var b=Clazz.new_($I$(24));
b.append$C("[");
for (var i=0; ; i++) {
b.append$S(String.valueOf$O(a[i]));
if (i == iMax) return b.append$C("]").toString();
b.append$S(", ");
}
}, 1);

Clazz.newMeth(C$, 'deepToString$OA', function (a) {
if (a == null ) return "null";
var bufLen=20 * a.length;
if (a.length != 0 && bufLen <= 0 ) bufLen=2147483647;
var buf=Clazz.new_($I$(24).c$$I,[bufLen]);
C$.deepToString$OA$StringBuilder$java_util_Set(a, buf, Clazz.new_($I$(25)));
return buf.toString();
}, 1);

Clazz.newMeth(C$, 'deepToString$OA$StringBuilder$java_util_Set', function (a, buf, dejaVu) {
if (a == null ) {
buf.append$S("null");
return;
}var iMax=a.length - 1;
if (iMax == -1) {
buf.append$S("[]");
return;
}dejaVu.add$TE(a);
buf.append$C("[");
for (var i=0; ; i++) {
var element=a[i];
if (element == null ) {
buf.append$S("null");
} else {
var eClass=element.getClass$();
if (eClass.isArray$()) {
if (eClass === Clazz.array(Byte.TYPE, -1) ) buf.append$S(C$.toString$BA(element));
 else if (eClass === Clazz.array(Short.TYPE, -1) ) buf.append$S(C$.toString$HA(element));
 else if (eClass === Clazz.array(Integer.TYPE, -1) ) buf.append$S(C$.toString$IA(element));
 else if (eClass === Clazz.array(Long.TYPE, -1) ) buf.append$S(C$.toString$JA(element));
 else if (eClass === Clazz.array(Character.TYPE, -1) ) buf.append$S(C$.toString$CA(element));
 else if (eClass === Clazz.array(Float.TYPE, -1) ) buf.append$S(C$.toString$FA(element));
 else if (eClass === Clazz.array(Double.TYPE, -1) ) buf.append$S(C$.toString$DA(element));
 else if (eClass === Clazz.array(Boolean.TYPE, -1) ) buf.append$S(C$.toString$ZA(element));
 else {
if (dejaVu.contains$O(element)) buf.append$S("[...]");
 else C$.deepToString$OA$StringBuilder$java_util_Set(element, buf, dejaVu);
}} else {
buf.append$S(element.toString());
}}if (i == iMax) break;
buf.append$S(", ");
}
buf.append$C("]");
dejaVu.remove$O(a);
}, 1);

Clazz.newMeth(C$, 'setAll$TTA$java_util_function_IntFunction', function (array, generator) {
$I$(1).requireNonNull$TT(generator);
for (var i=0; i < array.length; i++) array[i]=generator.apply$(i);

}, 1);

Clazz.newMeth(C$, 'parallelSetAll$TTA$java_util_function_IntFunction', function (array, generator) {
$I$(1).requireNonNull$TT(generator);
$I$(26).range$I$I(0, array.length).parallel$().forEach$java_util_function_IntConsumer(((P$.Arrays$lambda1||
(function(){var C$=Clazz.newClass(P$, "Arrays$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (i) {
this.$finals$.array[i]=this.$finals$.generator.apply$(i);
});
})()
), Clazz.new_(P$.Arrays$lambda1.$init$, [this, {array: array, generator: generator}])));
}, 1);

Clazz.newMeth(C$, 'setAll$IA$java_util_function_IntUnaryOperator', function (array, generator) {
$I$(1).requireNonNull$TT(generator);
for (var i=0; i < array.length; i++) array[i]=generator.applyAsInt$(i);

}, 1);

Clazz.newMeth(C$, 'parallelSetAll$IA$java_util_function_IntUnaryOperator', function (array, generator) {
$I$(1).requireNonNull$TT(generator);
$I$(26).range$I$I(0, array.length).parallel$().forEach$java_util_function_IntConsumer(((P$.Arrays$lambda2||
(function(){var C$=Clazz.newClass(P$, "Arrays$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (i) {
this.$finals$.array[i]=this.$finals$.generator.applyAsInt$(i);
});
})()
), Clazz.new_(P$.Arrays$lambda2.$init$, [this, {array: array, generator: generator}])));
}, 1);

Clazz.newMeth(C$, 'setAll$JA$java_util_function_IntToLongFunction', function (array, generator) {
$I$(1).requireNonNull$TT(generator);
for (var i=0; i < array.length; i++) array[i]=generator.applyAsLong$(i);

}, 1);

Clazz.newMeth(C$, 'parallelSetAll$JA$java_util_function_IntToLongFunction', function (array, generator) {
$I$(1).requireNonNull$TT(generator);
$I$(26).range$I$I(0, array.length).parallel$().forEach$java_util_function_IntConsumer(((P$.Arrays$lambda3||
(function(){var C$=Clazz.newClass(P$, "Arrays$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (i) {
this.$finals$.array[i]=this.$finals$.generator.applyAsLong$(i);
});
})()
), Clazz.new_(P$.Arrays$lambda3.$init$, [this, {array: array, generator: generator}])));
}, 1);

Clazz.newMeth(C$, 'setAll$DA$java_util_function_IntToDoubleFunction', function (array, generator) {
$I$(1).requireNonNull$TT(generator);
for (var i=0; i < array.length; i++) array[i]=generator.applyAsDouble$(i);

}, 1);

Clazz.newMeth(C$, 'parallelSetAll$DA$java_util_function_IntToDoubleFunction', function (array, generator) {
$I$(1).requireNonNull$TT(generator);
$I$(26).range$I$I(0, array.length).parallel$().forEach$java_util_function_IntConsumer(((P$.Arrays$lambda4||
(function(){var C$=Clazz.newClass(P$, "Arrays$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (i) {
this.$finals$.array[i]=this.$finals$.generator.applyAsDouble$(i);
});
})()
), Clazz.new_(P$.Arrays$lambda4.$init$, [this, {array: array, generator: generator}])));
}, 1);

Clazz.newMeth(C$, 'spliterator$TTA', function (array) {
return $I$(3).spliterator$OA$I(array, 1040);
}, 1);

Clazz.newMeth(C$, 'spliterator$TTA$I$I', function (array, startInclusive, endExclusive) {
return $I$(3).spliterator$OA$I$I$I(array, startInclusive, endExclusive, 1040);
}, 1);

Clazz.newMeth(C$, 'spliterator$IA', function (array) {
return $I$(3).spliterator$IA$I(array, 1040);
}, 1);

Clazz.newMeth(C$, 'spliterator$IA$I$I', function (array, startInclusive, endExclusive) {
return $I$(3).spliterator$IA$I$I$I(array, startInclusive, endExclusive, 1040);
}, 1);

Clazz.newMeth(C$, 'spliterator$JA', function (array) {
return $I$(3).spliterator$JA$I(array, 1040);
}, 1);

Clazz.newMeth(C$, 'spliterator$JA$I$I', function (array, startInclusive, endExclusive) {
return $I$(3).spliterator$JA$I$I$I(array, startInclusive, endExclusive, 1040);
}, 1);

Clazz.newMeth(C$, 'spliterator$DA', function (array) {
return $I$(3).spliterator$DA$I(array, 1040);
}, 1);

Clazz.newMeth(C$, 'spliterator$DA$I$I', function (array, startInclusive, endExclusive) {
return $I$(3).spliterator$DA$I$I$I(array, startInclusive, endExclusive, 1040);
}, 1);

Clazz.newMeth(C$, 'stream$TTA', function (array) {
return C$.stream$TTA$I$I(array, 0, array.length);
}, 1);

Clazz.newMeth(C$, 'stream$TTA$I$I', function (array, startInclusive, endExclusive) {
return $I$(27).stream$java_util_Spliterator$Z(C$.spliterator$TTA$I$I(array, startInclusive, endExclusive), false);
}, 1);

Clazz.newMeth(C$, 'stream$IA', function (array) {
return C$.stream$IA$I$I(array, 0, array.length);
}, 1);

Clazz.newMeth(C$, 'stream$IA$I$I', function (array, startInclusive, endExclusive) {
return $I$(27).intStream$java_util_Spliterator_OfInt$Z(C$.spliterator$IA$I$I(array, startInclusive, endExclusive), false);
}, 1);

Clazz.newMeth(C$, 'stream$JA', function (array) {
return C$.stream$JA$I$I(array, 0, array.length);
}, 1);

Clazz.newMeth(C$, 'stream$JA$I$I', function (array, startInclusive, endExclusive) {
return $I$(27).longStream$java_util_Spliterator_OfLong$Z(C$.spliterator$JA$I$I(array, startInclusive, endExclusive), false);
}, 1);

Clazz.newMeth(C$, 'stream$DA', function (array) {
return C$.stream$DA$I$I(array, 0, array.length);
}, 1);

Clazz.newMeth(C$, 'stream$DA$I$I', function (array, startInclusive, endExclusive) {
return $I$(27).doubleStream$java_util_Spliterator_OfDouble$Z(C$.spliterator$DA$I$I(array, startInclusive, endExclusive), false);
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
var $b$ = new Int8Array(1);
;
(function(){var C$=Clazz.newClass(P$.Arrays, "NaturalOrder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');
C$.INSTANCE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.INSTANCE=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$O$O','compare$','compare$TT$TT'], function (first, second) {
return (first).compareTo$(second);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Arrays, "LegacyMergeSort", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.userRequested=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.userRequested=false;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Arrays, "ArrayList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractList', ['java.util.RandomAccess', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.a=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$TEA', function (array) {
Clazz.super_(C$, this,1);
this.a=$I$(1).requireNonNull$TT(array);
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.a.length;
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.a.clone$();
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
var size=this.size$();
if (a.length < size) return $I$(2).copyOf$TUA$I$Class(this.a, size, a.getClass$());
System.arraycopy$O$I$O$I$I(this.a, 0, a, 0, size);
if (a.length > size) a[size]=null;
return a;
});

Clazz.newMeth(C$, 'get$I', function (index) {
return this.a[index];
});

Clazz.newMeth(C$, 'set$I$TE', function (index, element) {
var oldValue=this.a[index];
this.a[index]=element;
return oldValue;
});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
var a=this.a;
if (o == null ) {
for (var i=0; i < a.length; i++) if (a[i] == null ) return i;

} else {
for (var i=0; i < a.length; i++) if (o.equals$O(a[i])) return i;

}return -1;
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.indexOf$O(o) != -1;
});

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(3).spliterator$OA$I(this.a, 16);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
$I$(1).requireNonNull$TT(action);
for (var e, $e = 0, $$e = this.a; $e<$$e.length&&((e=($$e[$e])),1);$e++) {
action.accept$(e);
}
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_UnaryOperator', function (operator) {
$I$(1).requireNonNull$TT(operator);
var a=this.a;
for (var i=0; i < a.length; i++) {
a[i]=operator.apply$(a[i]);
}
});

Clazz.newMeth(C$, 'sort$java_util_Comparator', function (c) {
$I$(2).sort$TTA$java_util_Comparator(this.a, c);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:44 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
