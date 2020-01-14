(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.util.Arrays',['jalview.util.QuickSort','.FloatComparator'],['jalview.util.QuickSort','.IntComparator'],['jalview.util.QuickSort','.ExternalComparator'],['jalview.util.QuickSort','.DoubleComparator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "QuickSort", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'sort$IA$OA', function (arr, s) {
C$.sort$IA$I$I$OA(arr, 0, arr.length - 1, s);
}, 1);

Clazz.newMeth(C$, 'sort$FA$OA', function (arr, s) {
C$.sort$FA$I$I$OA(arr, 0, arr.length - 1, s);
}, 1);

Clazz.newMeth(C$, 'sort$DA$OA', function (arr, s) {
C$.sort$DA$I$I$OA(arr, 0, arr.length - 1, s);
}, 1);

Clazz.newMeth(C$, 'sort$SA$OA', function (arr, s) {
C$.stringSort$SA$I$I$OA(arr, 0, arr.length - 1, s);
}, 1);

Clazz.newMeth(C$, 'stringSort$SA$I$I$OA', function (arr, p, r, s) {
var q;
if (p < r) {
q=C$.stringPartition$SA$I$I$OA(arr, p, r, s);
C$.stringSort$SA$I$I$OA(arr, p, q, s);
C$.stringSort$SA$I$I$OA(arr, q + 1, r, s);
}}, 1);

Clazz.newMeth(C$, 'sort$FA$I$I$OA', function (arr, p, r, s) {
var q;
if (p < r) {
q=C$.partition$FA$I$I$OA(arr, p, r, s);
C$.sort$FA$I$I$OA(arr, p, q, s);
C$.sort$FA$I$I$OA(arr, q + 1, r, s);
}}, 1);

Clazz.newMeth(C$, 'sort$DA$I$I$OA', function (arr, p, r, s) {
var q;
if (p < r) {
q=C$.partition$DA$I$I$OA(arr, p, r, s);
C$.sort$DA$I$I$OA(arr, p, q, s);
C$.sort$DA$I$I$OA(arr, q + 1, r, s);
}}, 1);

Clazz.newMeth(C$, 'sort$IA$I$I$OA', function (arr, p, r, s) {
var q;
if (p < r) {
q=C$.partition$IA$I$I$OA(arr, p, r, s);
C$.sort$IA$I$I$OA(arr, p, q, s);
C$.sort$IA$I$I$OA(arr, q + 1, r, s);
}}, 1);

Clazz.newMeth(C$, 'partition$FA$I$I$OA', function (arr, p, r, s) {
var x=arr[p];
var i=p - 1;
var j=r + 1;
while (true){
do {
j=j - 1;
} while (arr[j] > x );
do {
i=i + 1;
} while (arr[i] < x );
if (i < j) {
var tmp=arr[i];
arr[i]=arr[j];
arr[j]=tmp;
var tmp2=s[i];
s[i]=s[j];
s[j]=tmp2;
} else {
return j;
}}
}, 1);

Clazz.newMeth(C$, 'partition$FA$I$I$CA', function (arr, p, r, s) {
var x=arr[p];
var i=p - 1;
var j=r + 1;
while (true){
do {
j=j - 1;
} while (arr[j] > x );
do {
i=i + 1;
} while (arr[i] < x );
if (i < j) {
var tmp=arr[i];
arr[i]=arr[j];
arr[j]=tmp;
var tmp2=s[i];
s[i]=s[j];
s[j]=tmp2;
} else {
return j;
}}
}, 1);

Clazz.newMeth(C$, 'partition$IA$I$I$OA', function (arr, p, r, s) {
var x=arr[p];
var i=p - 1;
var j=r + 1;
while (true){
do {
j=j - 1;
} while (arr[j] > x);
do {
i=i + 1;
} while (arr[i] < x);
if (i < j) {
var tmp=arr[i];
arr[i]=arr[j];
arr[j]=tmp;
var tmp2=s[i];
s[i]=s[j];
s[j]=tmp2;
} else {
return j;
}}
}, 1);

Clazz.newMeth(C$, 'partition$DA$I$I$OA', function (arr, p, r, s) {
var x=arr[p];
var i=p - 1;
var j=r + 1;
while (true){
do {
j=j - 1;
} while (arr[j] > x );
do {
i=i + 1;
} while (arr[i] < x );
if (i < j) {
var tmp=arr[i];
arr[i]=arr[j];
arr[j]=tmp;
var tmp2=s[i];
s[i]=s[j];
s[j]=tmp2;
} else {
return j;
}}
}, 1);

Clazz.newMeth(C$, 'stringPartition$SA$I$I$OA', function (arr, p, r, s) {
var x=arr[p];
var i=p - 1;
var j=r + 1;
while (true){
do {
j=j - 1;
} while (arr[j].compareTo$S(x) < 0);
do {
i=i + 1;
} while (arr[i].compareTo$S(x) > 0);
if (i < j) {
var tmp=arr[i];
arr[i]=arr[j];
arr[j]=tmp;
var tmp2=s[i];
s[i]=s[j];
s[j]=tmp2;
} else {
return j;
}}
}, 1);

Clazz.newMeth(C$, 'sort$FA$CA', function (arr, s) {
var f1=Clazz.array(Float.TYPE, [arr.length]);
var s1=Clazz.array(Character.TYPE, [s.length]);
var negativeCount=0;
var zerosCount=0;
var nextNonZeroValue=arr.length - 1;
for (var i=0; i < arr.length; i++) {
var val=arr[i];
if (val != 0.0 ) {
f1[nextNonZeroValue]=val;
s1[nextNonZeroValue]=s[i];
nextNonZeroValue--;
if (val < 0.0 ) {
negativeCount++;
}} else {
f1[zerosCount]=val;
s1[zerosCount]=s[i];
zerosCount++;
}}
var positiveCount=arr.length - zerosCount - negativeCount ;
if (zerosCount == arr.length) {
return;
}var nonZeroFloats=$I$(1).copyOfRange$FA$I$I(f1, zerosCount, f1.length);
var nonZeroChars=$I$(1).copyOfRange$CA$I$I(s1, zerosCount, s1.length);
C$.charSortByFloat$FA$CA$Z(nonZeroFloats, nonZeroChars, true);
System.arraycopy$O$I$O$I$I(f1, 0, arr, negativeCount, zerosCount);
System.arraycopy$O$I$O$I$I(s1, 0, s, negativeCount, zerosCount);
System.arraycopy$O$I$O$I$I(nonZeroFloats, 0, arr, 0, negativeCount);
System.arraycopy$O$I$O$I$I(nonZeroChars, 0, s, 0, negativeCount);
System.arraycopy$O$I$O$I$I(nonZeroFloats, negativeCount, arr, negativeCount + zerosCount, positiveCount);
System.arraycopy$O$I$O$I$I(nonZeroChars, negativeCount, s, negativeCount + zerosCount, positiveCount);
}, 1);

Clazz.newMeth(C$, 'charSortByFloat$FA$CA$Z', function (arr, s, ascending) {
var length=arr.length;
var indices=C$.makeIndexArray$I(length);
$I$(1).sort$TTA$java_util_Comparator(indices, Clazz.new_($I$(2).c$$FA$Z,[arr, ascending]));
var sortedFloats=Clazz.array(Float.TYPE, [length]);
var sortedChars=Clazz.array(Character.TYPE, [s.length]);
for (var i=0; i < length; i++) {
sortedFloats[i]=arr[(indices[i]).intValue$()];
sortedChars[i]=s[(indices[i]).intValue$()];
}
System.arraycopy$O$I$O$I$I(sortedFloats, 0, arr, 0, length);
System.arraycopy$O$I$O$I$I(sortedChars, 0, s, 0, s.length);
}, 1);

Clazz.newMeth(C$, 'makeIndexArray$I', function (length) {
var indices=Clazz.array(Integer, [length]);
for (var i=0; i < length; i++) {
indices[i]=new Integer(i);
}
return indices;
}, 1);

Clazz.newMeth(C$, 'sort$FA$I$I$CA', function (arr, p, r, s) {
var q;
if (p < r) {
q=C$.partition$FA$I$I$CA(arr, p, r, s);
C$.sort$FA$I$I$CA(arr, p, q, s);
C$.sort$FA$I$I$CA(arr, q + 1, r, s);
}}, 1);

Clazz.newMeth(C$, 'sort$IA$CA', function (arr, s) {
var f1=Clazz.array(Integer.TYPE, [arr.length]);
var s1=Clazz.array(Character.TYPE, [s.length]);
var negativeCount=0;
var zerosCount=0;
var nextNonZeroValue=arr.length - 1;
for (var i=0; i < arr.length; i++) {
var val=arr[i];
if (val != 0.0 ) {
f1[nextNonZeroValue]=val;
s1[nextNonZeroValue]=s[i];
nextNonZeroValue--;
if (val < 0) {
negativeCount++;
}} else {
f1[zerosCount]=val;
s1[zerosCount]=s[i];
zerosCount++;
}}
var positiveCount=arr.length - zerosCount - negativeCount ;
if (zerosCount == arr.length) {
return;
}var nonZeroInts=$I$(1).copyOfRange$IA$I$I(f1, zerosCount, f1.length);
var nonZeroChars=$I$(1).copyOfRange$CA$I$I(s1, zerosCount, s1.length);
C$.charSortByInt$IA$CA$Z(nonZeroInts, nonZeroChars, true);
System.arraycopy$O$I$O$I$I(f1, 0, arr, negativeCount, zerosCount);
System.arraycopy$O$I$O$I$I(s1, 0, s, negativeCount, zerosCount);
System.arraycopy$O$I$O$I$I(nonZeroInts, 0, arr, 0, negativeCount);
System.arraycopy$O$I$O$I$I(nonZeroChars, 0, s, 0, negativeCount);
System.arraycopy$O$I$O$I$I(nonZeroInts, negativeCount, arr, negativeCount + zerosCount, positiveCount);
System.arraycopy$O$I$O$I$I(nonZeroChars, negativeCount, s, negativeCount + zerosCount, positiveCount);
}, 1);

Clazz.newMeth(C$, 'charSortByInt$IA$CA$Z', function (arr, s, ascending) {
var length=arr.length;
var indices=C$.makeIndexArray$I(length);
$I$(1).sort$TTA$java_util_Comparator(indices, Clazz.new_($I$(3).c$$IA$Z,[arr, ascending]));
var sortedInts=Clazz.array(Integer.TYPE, [length]);
var sortedChars=Clazz.array(Character.TYPE, [s.length]);
for (var i=0; i < length; i++) {
sortedInts[i]=arr[(indices[i]).intValue$()];
sortedChars[i]=s[(indices[i]).intValue$()];
}
System.arraycopy$O$I$O$I$I(sortedInts, 0, arr, 0, length);
System.arraycopy$O$I$O$I$I(sortedChars, 0, s, 0, s.length);
}, 1);

Clazz.newMeth(C$, 'sortByInt$IA$OA$Z', function (arr, s, ascending) {
var length=arr.length;
var indices=C$.makeIndexArray$I(length);
$I$(1).sort$TTA$java_util_Comparator(indices, Clazz.new_($I$(3).c$$IA$Z,[arr, ascending]));
var sortedInts=Clazz.array(Integer.TYPE, [length]);
var sortedObjects=Clazz.array(java.lang.Object, [s.length]);
for (var i=0; i < length; i++) {
sortedInts[i]=arr[(indices[i]).intValue$()];
sortedObjects[i]=s[(indices[i]).intValue$()];
}
System.arraycopy$O$I$O$I$I(sortedInts, 0, arr, 0, length);
System.arraycopy$O$I$O$I$I(sortedObjects, 0, s, 0, s.length);
}, 1);

Clazz.newMeth(C$, 'sortByString$SA$OA$Z', function (arr, s, ascending) {
var length=arr.length;
var indices=C$.makeIndexArray$I(length);
$I$(1).sort$TTA$java_util_Comparator(indices, Clazz.new_($I$(4).c$$ComparableA$Z,[arr, ascending]));
var sortedStrings=Clazz.array(String, [length]);
var sortedObjects=Clazz.array(java.lang.Object, [s.length]);
for (var i=0; i < length; i++) {
sortedStrings[i]=arr[(indices[i]).intValue$()];
sortedObjects[i]=s[(indices[i]).intValue$()];
}
System.arraycopy$O$I$O$I$I(sortedStrings, 0, arr, 0, length);
System.arraycopy$O$I$O$I$I(sortedObjects, 0, s, 0, s.length);
}, 1);

Clazz.newMeth(C$, 'sortByDouble$DA$OA$Z', function (arr, s, ascending) {
var length=arr.length;
var indices=C$.makeIndexArray$I(length);
$I$(1).sort$TTA$java_util_Comparator(indices, Clazz.new_($I$(5).c$$DA$Z,[arr, ascending]));
var sortedDoubles=Clazz.array(Double.TYPE, [length]);
var sortedObjects=Clazz.array(java.lang.Object, [s.length]);
for (var i=0; i < length; i++) {
sortedDoubles[i]=arr[(indices[i]).intValue$()];
sortedObjects[i]=s[(indices[i]).intValue$()];
}
System.arraycopy$O$I$O$I$I(sortedDoubles, 0, arr, 0, length);
System.arraycopy$O$I$O$I$I(sortedObjects, 0, s, 0, s.length);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.QuickSort, "FloatComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.values=null;
this.ascending=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$FA$Z', function (v, asc) {
C$.$init$.apply(this);
this.values=v;
this.ascending=asc;
}, 1);

Clazz.newMeth(C$, ['compare$Integer$Integer','compare$','compare$TT$TT'], function (o1, o2) {
return this.ascending ? Float.compare$F$F(this.values[o1.intValue$()], this.values[o2.intValue$()]) : Float.compare$F$F(this.values[o2.intValue$()], this.values[o1.intValue$()]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.QuickSort, "DoubleComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.values=null;
this.ascending=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$DA$Z', function (v, asc) {
C$.$init$.apply(this);
this.values=v;
this.ascending=asc;
}, 1);

Clazz.newMeth(C$, ['compare$Integer$Integer','compare$','compare$TT$TT'], function (o1, o2) {
if (this.ascending) {
return Double.compare$D$D(this.values[o1.intValue$()], this.values[o2.intValue$()]);
} else {
return Double.compare$D$D(this.values[o2.intValue$()], this.values[o1.intValue$()]);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.QuickSort, "IntComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.values=null;
this.ascending=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$IA$Z', function (v, asc) {
C$.$init$.apply(this);
this.values=v;
this.ascending=asc;
}, 1);

Clazz.newMeth(C$, ['compare$Integer$Integer','compare$','compare$TT$TT'], function (o1, o2) {
return this.ascending ? Integer.compare$I$I(this.values[o1.intValue$()], this.values[o2.intValue$()]) : Integer.compare$I$I(this.values[o2.intValue$()], this.values[o1.intValue$()]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.QuickSort, "ExternalComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.values=null;
this.ascending=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$ComparableA$Z', function (v, asc) {
C$.$init$.apply(this);
this.values=v;
this.ascending=asc;
}, 1);

Clazz.newMeth(C$, ['compare$Integer$Integer','compare$','compare$TT$TT'], function (o1, o2) {
return this.ascending ? this.values[o1.intValue$()].compareTo$(this.values[o2.intValue$()]) : this.values[o2.intValue$()].compareTo$(this.values[o1.intValue$()]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
