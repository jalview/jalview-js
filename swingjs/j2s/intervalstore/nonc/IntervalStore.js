(function(){var P$=Clazz.newPackage("intervalstore.nonc"),p$1={},I$=[[0,'intervalstore.api.IntervalI','java.util.Collections','java.util.ArrayList','java.util.BitSet','StringBuffer','java.util.Arrays']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IntervalStore", null, 'java.util.AbstractCollection', 'intervalstore.api.IntervalStoreI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.createUnnested=true;
this.minStart=2147483647;
this.maxStart=-2147483648;
this.maxEnd=2147483647;
this.capacity=8;
this.intervals=Clazz.array($I$(1), [this.capacity]);
},1);

C$.$fields$=[['Z',['bigendian','createUnnested','isTainted'],'I',['minStart','maxStart','maxEnd','capacity','intervalCount','added','deleted','root','unnested'],'O',['icompare','java.util.Comparator','intervals','intervalstore.api.IntervalI[]','offsets','int[]','bsDeleted','java.util.BitSet','nests','intervalstore.api.IntervalI[]','nestOffsets','int[]','+nestLengths']]]

Clazz.newMeth(C$, 'binarySearchFirstEndNotBefore$intervalstore_api_IntervalIA$J$I$I', function (nests, from, start, end) {
var matched=end + 1;
var mid;
while (start <= end){
mid=(start + end) >>> 1;
if (nests[mid].getEnd$() >= from) {
matched=mid;
end=mid - 1;
} else {
start=mid + 1;
}}
return matched;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_List.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (intervals) {
C$.c$$java_util_List$java_util_Comparator$Z.apply(this, [intervals, null, true]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$java_util_Comparator$Z', function (intervals, comparator, bigendian) {
Clazz.super_(C$, this);
this.icompare=(comparator != null  ? comparator : bigendian ? $I$(1).COMPARE_BEGIN_ASC_END_DESC : $I$(1).COMPARE_BEGIN_ASC_END_ASC);
this.bigendian=bigendian;
if (intervals != null ) {
$I$(2).sort$java_util_List$java_util_Comparator(intervals, this.icompare);
intervals.toArray$OA(this.intervals=Clazz.array($I$(1), [this.capacity=this.intervalCount=intervals.size$()]));
}this.isTainted=true;
if (this.intervalCount > 1) {
p$1.updateMinMaxStart.apply(this, []);
p$1.ensureFinalized.apply(this, []);
}}, 1);

Clazz.newMeth(C$, ['add$intervalstore_api_IntervalI','add$O'], function (interval) {
return this.add$intervalstore_api_IntervalI$Z(interval, true);
});

Clazz.newMeth(C$, 'add$intervalstore_api_IntervalI$Z', function (interval, allowDuplicates) {
if (interval == null ) {
return false;
}if (this.deleted > 0) {
p$1.finalizeDeletion.apply(this, []);
}if (!this.isTainted) {
this.offsets=null;
this.isTainted=true;
}{
var index=this.intervalCount;
var start=interval.getBegin$();
if (this.intervalCount + this.added + 1  >= this.capacity) {
this.intervals=p$1.finalizeAddition$intervalstore_api_IntervalIA.apply(this, [Clazz.array($I$(1), [this.capacity=this.capacity << 1])]);
}if (this.intervalCount == 0) {
} else {
index=p$1.findInterval$intervalstore_api_IntervalI$Z.apply(this, [interval, allowDuplicates]);
if (!allowDuplicates && index >= 0 ) {
return false;
}if (index < 0) {
index=-1 - index;
} else {
index++;
}}if (index == this.intervalCount) {
this.intervals[this.intervalCount++]=interval;
} else {
var pt=this.capacity - ++this.added;
this.intervals[pt]=interval;
if (this.offsets == null ) {
this.offsets=Clazz.array(Integer.TYPE, [this.capacity]);
}this.offsets[pt]=this.offsets[index];
this.offsets[index]=pt;
}this.minStart=Math.min(this.minStart, start);
this.maxStart=Math.max(this.maxStart, start);
return true;
}});

Clazz.newMeth(C$, 'finalizeAddition$intervalstore_api_IntervalIA', function (dest) {
if (dest == null ) {
dest=this.intervals;
}if (this.added == 0) {
if (this.intervalCount > 0 && dest !== this.intervals  ) {
System.arraycopy$O$I$O$I$I(this.intervals, 0, dest, 0, this.intervalCount);
}this.capacity=dest.length;
return dest;
}var ntotal=this.intervalCount + this.added;
for (var ptShift=ntotal, pt=this.intervalCount; pt >= 0; ) {
var pt0=pt;
while (--pt >= 0 && this.offsets[pt] == 0 ){
}
if (pt < 0) {
pt=0;
}var nOK=pt0 - pt;
ptShift-=nOK;
if (nOK > 0) {
System.arraycopy$O$I$O$I$I(this.intervals, pt, dest, ptShift, nOK);
}if (this.added == 0) {
break;
}for (var offset=this.offsets[pt]; offset > 0; offset=this.offsets[offset]) {
dest[--ptShift]=this.intervals[offset];
--this.added;
}
}
this.offsets=null;
this.intervalCount=ntotal;
this.capacity=dest.length;
return dest;
}, p$1);

Clazz.newMeth(C$, 'binaryIdentitySearch$intervalstore_api_IntervalI', function (interval) {
return p$1.binaryIdentitySearch$intervalstore_api_IntervalI$java_util_BitSet$Z.apply(this, [interval, null, false]);
});

Clazz.newMeth(C$, 'binaryIdentitySearch$intervalstore_api_IntervalI$java_util_BitSet$Z', function (interval, bsIgnore, rangeOnly) {
var start=0;
var r0=interval.getBegin$();
var r1=interval.getEnd$();
var end=this.intervalCount - 1;
if (end < 0 || r0 < this.minStart ) {
return -1;
}if (r0 > this.maxStart) {
return -1 - this.intervalCount;
}while (start <= end){
var mid=(start + end) >>> 1;
var r=this.intervals[mid];
switch (p$1.compareRange$intervalstore_api_IntervalI$J$J.apply(this, [r, r0, r1])) {
case -1:
start=mid + 1;
continue;
case 1:
end=mid - 1;
continue;
case 0:
var iv=this.intervals[mid];
if (!rangeOnly && (bsIgnore == null  || !bsIgnore.get$I(mid) ) && this.sameInterval$intervalstore_api_IntervalI$intervalstore_api_IntervalI(interval, iv)  ) {
return mid;
}for (var i=mid; ++i <= end; ) {
if ((iv=this.intervals[i]).getBegin$() != r0 || iv.getEnd$() != r1 ) {
break;
}if (!rangeOnly && (bsIgnore == null  || !bsIgnore.get$I(i) ) && this.sameInterval$intervalstore_api_IntervalI$intervalstore_api_IntervalI(interval, iv)  ) {
return i;
}}
for (var i=mid; --i >= start; ) {
if ((iv=this.intervals[i]).getBegin$() != r0 || (this.bigendian ? r1 < iv.getEnd$() : iv.getEnd$() < r1) ) {
return -1 - ++i;
}if ((bsIgnore == null  || !bsIgnore.get$I(i) ) && this.sameInterval$intervalstore_api_IntervalI$intervalstore_api_IntervalI(interval, iv) ) {
return i;
}}
return -1 - mid;
}
}
return -1 - start;
}, p$1);

Clazz.newMeth(C$, 'canCheckForDuplicates$', function () {
return true;
});

Clazz.newMeth(C$, 'clear$', function () {
this.intervalCount=this.added=0;
this.isTainted=true;
this.offsets=null;
this.intervals=Clazz.array($I$(1), [8]);
this.nestOffsets=this.nestLengths=null;
this.nests=null;
this.minStart=this.maxEnd=2147483647;
this.maxStart=-2147483648;
});

Clazz.newMeth(C$, 'compareRange$intervalstore_api_IntervalI$J$J', function (t, from, to) {
var order=Long.signum$J(t.getBegin$() - from);
return (order == 0 ? Long.signum$J(this.bigendian ? to - t.getEnd$() : t.getEnd$() - to) : order);
}, p$1);

Clazz.newMeth(C$, 'contains$O', function (entry) {
if (entry == null  || this.intervalCount == 0 && this.added == 0  && this.deleted == 0  ) {
return false;
}if (this.deleted > 0) {
p$1.sort.apply(this, []);
}return (p$1.findInterval$intervalstore_api_IntervalI$Z.apply(this, [entry, false]) >= 0);
});

Clazz.newMeth(C$, 'containsInterval$intervalstore_api_IntervalI$intervalstore_api_IntervalI', function (outer, inner) {
return false;
});

Clazz.newMeth(C$, 'ensureFinalized', function () {
if (this.isTainted) {
if (this.added > 0 || this.deleted > 0 ) {
p$1.sort.apply(this, []);
}if (this.intervalCount > 0) {
p$1.createArrays.apply(this, []);
}this.isTainted=false;
}}, p$1);

Clazz.newMeth(C$, 'findOverlaps$J$J', function (from, to) {
return this.findOverlaps$J$J$java_util_List(from, to, null);
});

Clazz.newMeth(C$, 'findOverlaps$J$J$java_util_List', function (from, to, result) {
if (result == null ) {
result=Clazz.new_($I$(3,1));
}switch (this.intervalCount + this.added) {
case 0:
return result;
case 1:
var sf=this.intervals[0];
if (sf.getBegin$() <= to && sf.getEnd$() >= from ) {
result.add$O(sf);
}return result;
}
p$1.ensureFinalized.apply(this, []);
if (from > this.maxEnd || to < this.minStart ) {
return result;
}if (this.createUnnested) {
if (this.nestLengths[this.unnested] > 0) {
p$1.searchUnnested$J$J$java_util_List.apply(this, [from, to, result]);
}}if (this.nestLengths[this.root] > 0) {
p$1.search$intervalstore_api_IntervalIA$J$J$I$java_util_List.apply(this, [this.nests, from, to, this.root, result]);
}return result;
});

Clazz.newMeth(C$, 'searchUnnested$J$J$java_util_List', function (from, to, result) {
var start=this.nestOffsets[this.unnested];
var end=start + this.nestLengths[this.unnested] - 1;
for (var pt=C$.binarySearchFirstEndNotBefore$intervalstore_api_IntervalIA$J$I$I(this.nests, from, start, end); pt <= end; pt++) {
var ival=this.nests[pt];
if (ival.getBegin$() > to) {
break;
}result.add$O(ival);
}
}, p$1);

Clazz.newMeth(C$, 'search$intervalstore_api_IntervalIA$J$J$I$java_util_List', function (nests, from, to, nest, result) {
var start=this.nestOffsets[nest];
var n=this.nestLengths[nest];
var end=start + n - 1;
var first=nests[start];
var last=nests[end];
if (last.getEnd$() < from || first.getBegin$() > to ) {
return;
}var pt;
switch (n) {
case 1:
pt=start;
break;
case 2:
pt=(first.getEnd$() >= from ? start : end);
break;
default:
pt=C$.binarySearchFirstEndNotBefore$intervalstore_api_IntervalIA$J$I$I(nests, from, start, end);
break;
}
for (; pt <= end; pt++) {
var ival=nests[pt];
if (ival.getBegin$() > to) {
break;
}result.add$O(ival);
if (this.nestLengths[pt] > 0) {
p$1.search$intervalstore_api_IntervalIA$J$J$I$java_util_List.apply(this, [nests, from, to, pt, result]);
}}
}, p$1);

Clazz.newMeth(C$, 'get$I', function (i) {
if (i < 0 || i >= this.intervalCount + this.added ) {
return null;
}p$1.ensureFinalized.apply(this, []);
return this.intervals[i];
});

Clazz.newMeth(C$, 'getDepth$', function () {
p$1.ensureFinalized.apply(this, []);
var bsTested=Clazz.new_($I$(4,1));
return Math.max((this.createUnnested ? p$1.getDepth$I$java_util_BitSet.apply(this, [this.unnested, bsTested]) : 0), p$1.getDepth$I$java_util_BitSet.apply(this, [this.root, bsTested]));
});

Clazz.newMeth(C$, 'getDepth$I$java_util_BitSet', function (pt, bsTested) {
var maxDepth=0;
var depth;
var n=this.nestLengths[pt];
if (n == 0 || bsTested.get$I(pt) ) {
return 1;
}bsTested.set$I(pt);
for (var st=this.nestOffsets[pt], i=st + n; --i >= st; ) {
if ((depth=p$1.getDepth$I$java_util_BitSet.apply(this, [i, bsTested])) > maxDepth) {
maxDepth=depth;
}}
return maxDepth + 1;
}, p$1);

Clazz.newMeth(C$, 'getWidth$', function () {
p$1.ensureFinalized.apply(this, []);
return this.nestLengths[this.root] + (this.createUnnested ? this.nestLengths[this.unnested] : 0);
});

Clazz.newMeth(C$, 'isValid$', function () {
p$1.ensureFinalized.apply(this, []);
return true;
});

Clazz.newMeth(C$, 'iterator$', function () {
p$1.ensureFinalized.apply(this, []);
return ((P$.IntervalStore$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntervalStore$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['next']]]

Clazz.newMeth(C$, 'hasNext$', function () {
return this.next < this.b$['intervalstore.nonc.IntervalStore'].intervalCount;
});

Clazz.newMeth(C$, 'next$', function () {
if (this.next >= this.b$['intervalstore.nonc.IntervalStore'].intervalCount) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}return this.b$['intervalstore.nonc.IntervalStore'].intervals[this.next++];
});
})()
), Clazz.new_(P$.IntervalStore$1.$init$,[this, null]));
});

Clazz.newMeth(C$, 'prettyPrint$', function () {
p$1.ensureFinalized.apply(this, []);
var sb=Clazz.new_($I$(5,1));
if (this.createUnnested) {
sb.append$S("unnested:");
p$1.dump$I$StringBuffer$S.apply(this, [this.intervalCount + 1, sb, "\n"]);
sb.append$S("\nnested:");
}p$1.dump$I$StringBuffer$S.apply(this, [this.intervalCount, sb, "\n"]);
return sb.toString();
});

Clazz.newMeth(C$, 'dump$I$StringBuffer$S', function (nest, sb, sep) {
var pt=this.nestOffsets[nest];
var n=this.nestLengths[nest];
sep += "  ";
for (var i=0; i < n; i++) {
sb.append$S(sep).append$S(this.nests[pt + i].toString());
if (this.nestLengths[pt + i] > 0) {
p$1.dump$I$StringBuffer$S.apply(this, [pt + i, sb, sep + "  "]);
}}
}, p$1);

Clazz.newMeth(C$, 'remove$O', function (o) {
return (o != null  && this.intervalCount > 0  && this.removeInterval$intervalstore_api_IntervalI(o) );
});

Clazz.newMeth(C$, 'findInterval$intervalstore_api_IntervalI$Z', function (interval, rangeOnly) {
var pt=p$1.binaryIdentitySearch$intervalstore_api_IntervalI$java_util_BitSet$Z.apply(this, [interval, null, rangeOnly]);
if (pt >= 0 || this.added == 0  || pt == -1 - this.intervalCount ) {
return pt;
}pt=-1 - pt;
var start=interval.getBegin$();
var end=interval.getEnd$();
var match=pt;
while ((pt=this.offsets[pt]) != 0){
var iv=this.intervals[pt];
switch (p$1.compareRange$intervalstore_api_IntervalI$J$J.apply(this, [iv, start, end])) {
case -1:
break;
case 0:
if (!rangeOnly && this.sameInterval$intervalstore_api_IntervalI$intervalstore_api_IntervalI(iv, interval) ) {
return pt;
}case 1:
match=pt;
continue;
}
}
return -1 - match;
}, p$1);

Clazz.newMeth(C$, 'removeInterval$intervalstore_api_IntervalI', function (interval) {
if (this.added > 0) {
p$1.sort.apply(this, []);
}var i=p$1.binaryIdentitySearch$intervalstore_api_IntervalI$java_util_BitSet$Z.apply(this, [interval, this.bsDeleted, false]);
if (i < 0) {
return false;
}if (this.deleted == 0) {
if (this.bsDeleted == null ) {
this.bsDeleted=Clazz.new_($I$(4,1).c$$I,[this.intervalCount]);
} else {
this.bsDeleted.clear$();
}}this.bsDeleted.set$I(i);
this.deleted++;
return (this.isTainted=true);
});

Clazz.newMeth(C$, 'finalizeDeletion', function () {
if (this.deleted == 0) {
return;
}for (var i=this.bsDeleted.nextSetBit$I(0), pt=i; i >= 0; ) {
i=this.bsDeleted.nextClearBit$I(i + 1);
var pt1=this.bsDeleted.nextSetBit$I(i + 1);
if (pt1 < 0) {
pt1=this.intervalCount;
}var n=pt1 - i;
System.arraycopy$O$I$O$I$I(this.intervals, i, this.intervals, pt, n);
pt+=n;
if (pt1 == this.intervalCount) {
for (i=pt1; --i >= pt; ) {
this.intervals[i]=null;
}
this.intervalCount-=this.deleted;
this.deleted=0;
this.bsDeleted.clear$();
break;
}i=pt1;
}
}, p$1);

Clazz.newMeth(C$, 'revalidate$', function () {
this.isTainted=true;
p$1.ensureFinalized.apply(this, []);
return true;
});

Clazz.newMeth(C$, 'size$', function () {
return this.intervalCount + this.added - this.deleted;
});

Clazz.newMeth(C$, 'toArray$', function () {
p$1.ensureFinalized.apply(this, []);
return C$.superclazz.prototype.toArray$.apply(this, []);
});

Clazz.newMeth(C$, 'sort', function () {
if (this.added > 0) {
this.intervals=p$1.finalizeAddition$intervalstore_api_IntervalIA.apply(this, [Clazz.array($I$(1), [this.intervalCount + this.added])]);
} else if (this.deleted > 0) {
p$1.finalizeDeletion.apply(this, []);
} else {
$I$(6).sort$OA$I$I$java_util_Comparator(this.intervals, 0, this.intervalCount, this.icompare);
}p$1.updateMinMaxStart.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'createArrays', function () {
var len=this.intervalCount + (this.createUnnested ? 2 : 1);
this.root=this.intervalCount;
this.unnested=this.intervalCount + 1;
this.nests=Clazz.array($I$(1), [this.intervalCount]);
this.nestOffsets=Clazz.array(Integer.TYPE, [len]);
this.nestLengths=Clazz.array(Integer.TYPE, [len]);
var myContainer=Clazz.array(Integer.TYPE, [this.intervalCount]);
var counts=Clazz.array(Integer.TYPE, [len]);
myContainer[0]=(this.createUnnested ? this.unnested : this.root);
counts[myContainer[0]]=1;
var beginLast=this.intervals[0].getBegin$();
var endLast=this.intervals[0].getEnd$();
var ptLastNot2=this.root;
var beginLast2=beginLast;
var endLast2=endLast;
for (var i=1; i < this.intervalCount; i++) {
var pt=i - 1;
var begin=this.intervals[i].getBegin$();
var end=this.intervals[i].getEnd$();
myContainer[i]=myContainer[0];
var isNested;
if (this.createUnnested) {
isNested=C$.isNested$I$I$I$I(begin, end, beginLast2, endLast2);
if (isNested) {
pt=ptLastNot2;
isNested=(pt == this.root || C$.isNested$I$I$I$I(begin, end, this.intervals[pt].getBegin$(), this.intervals[pt].getEnd$()) );
if (!isNested) {
myContainer[i]=this.root;
}}} else {
isNested=C$.isNested$I$I$I$I(begin, end, beginLast, endLast);
}if (isNested) {
myContainer[i]=pt;
} else {
while ((pt=myContainer[pt]) < this.root){
if (C$.isNested$I$I$I$I(begin, end, this.intervals[pt].getBegin$(), this.intervals[pt].getEnd$())) {
myContainer[i]=pt;
break;
}}
}counts[myContainer[i]]++;
if (myContainer[i] == this.unnested) {
endLast2=end;
beginLast2=begin;
} else {
ptLastNot2=i;
endLast=end;
beginLast=begin;
}}
var startPt=Clazz.array(Integer.TYPE, [len]);
startPt[this.root]=this.root;
var nextStart=counts[this.root];
if (this.unnested > 0) {
this.nestOffsets[this.root]=counts[this.unnested];
nextStart+=counts[this.unnested];
startPt[this.unnested]=this.unnested;
}for (var i=0; i < this.intervalCount; i++) {
var ptOffset=startPt[myContainer[i]];
var p=this.nestOffsets[ptOffset] + this.nestLengths[ptOffset]++;
this.nests[p]=this.intervals[i];
if (counts[i] > 0) {
startPt[i]=p;
this.nestOffsets[p]=nextStart;
nextStart+=counts[i];
}}
}, p$1);

Clazz.newMeth(C$, 'isNested$I$I$I$I', function (childStart, childEnd, parentStart, parentEnd) {
return (parentStart <= childStart && parentEnd > childEnd  || parentStart < childStart && parentEnd == childEnd  );
}, 1);

Clazz.newMeth(C$, 'updateMinMaxStart', function () {
if (this.intervalCount > 0) {
this.minStart=this.intervals[0].getBegin$();
this.maxStart=this.intervals[this.intervalCount - 1].getBegin$();
} else {
this.minStart=2147483647;
this.maxStart=-2147483648;
}}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return this.prettyPrint$();
});

Clazz.newMeth(C$, 'sameInterval$intervalstore_api_IntervalI$intervalstore_api_IntervalI', function (i1, i2) {
return (i1).equals$jalview_datamodel_SequenceFeature$Z(i2, false);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
