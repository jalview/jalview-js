(function(){var P$=Clazz.newPackage("intervalstore.nonc"),p$1={},I$=[[0,'intervalstore.api.IntervalI','java.util.Collections','java.util.ArrayList','StringBuffer','java.util.BitSet','java.util.Arrays']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IntervalStore0", null, 'java.util.AbstractCollection', 'intervalstore.api.IntervalStoreI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.minStart=2147483647;
this.maxStart=-2147483648;
this.maxEnd=2147483647;
this.capacity=8;
this.intervals=Clazz.array($I$(1), [this.capacity]);
this.ret=Clazz.array(Integer.TYPE, [1]);
},1);

C$.$fields$=[['Z',['bigendian','isTainted'],'I',['minStart','maxStart','maxEnd','capacity','intervalCount','added','deleted'],'O',['icompare','java.util.Comparator','intervals','intervalstore.api.IntervalI[]','offsets','int[]','+ret','bsDeleted','java.util.BitSet']]
,['I',['NOT_CONTAINED','CONTAINMENT_UNKNOWN']]]

Clazz.newMeth(C$, 'binaryLastIntervalSearch$J$J$IA', function (from, to, ret) {
var start=0;
var start2=0;
var matched=0;
var end=this.intervalCount - 1;
var end2=this.intervalCount;
var mid;
var begin;
var e;
while (start <= end){
mid=(start + end) >>> 1;
e=this.intervals[mid];
begin=e.getBegin$();
switch (Long.signum$J(begin - from)) {
case -1:
matched=mid;
start=mid + 1;
break;
case 0:
case 1:
end=mid - 1;
if (begin > to) {
end2=mid;
} else {
start2=mid;
}break;
}
}
ret[0]=end2;
start=Math.max(start2, end);
end=end2 - 1;
while (start <= end){
mid=(start + end) >>> 1;
e=this.intervals[mid];
begin=e.getBegin$();
if (begin > to) {
ret[0]=mid;
end=mid - 1;
} else {
start=mid + 1;
}}
return matched;
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_List.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (intervals) {
C$.c$$java_util_List$java_util_Comparator$Z.apply(this, [intervals, null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$java_util_Comparator$Z', function (intervals, comparator, bigendian) {
Clazz.super_(C$, this);
if (intervals != null ) {
intervals.toArray$OA(this.intervals=Clazz.array($I$(1), [this.capacity=this.intervalCount=intervals.size$()]));
}this.icompare=(comparator != null  ? comparator : bigendian ? $I$(1).COMPARE_BEGIN_ASC_END_DESC : $I$(1).COMPARE_BEGIN_ASC_END_ASC);
this.bigendian=bigendian;
if (this.intervalCount > 1) {
p$1.sort.apply(this, []);
}this.isTainted=true;
}, 1);

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
if ((iv=this.intervals[i]).getBegin$() != r0 || iv.getEnd$() < r1 ) {
return -1 - ++i;
}if ((bsIgnore == null  || !bsIgnore.get$I(i) ) && this.sameInterval$intervalstore_api_IntervalI$intervalstore_api_IntervalI(interval, iv) ) {
return i;
}}
return -1 - start;
}
}
return -1 - start;
}, p$1);

Clazz.newMeth(C$, 'clear$', function () {
this.intervalCount=this.added=0;
this.isTainted=true;
this.offsets=null;
this.minStart=this.maxEnd=2147483647;
this.maxStart=-2147483648;
});

Clazz.newMeth(C$, 'compareRange$intervalstore_api_IntervalI$J$J', function (t, from, to) {
var order=Long.signum$J(t.getBegin$() - from);
return (order == 0 ? Long.signum$J(this.bigendian ? to - t.getEnd$() : t.getEnd$() - to) : order);
}, p$1);

Clazz.newMeth(C$, 'contains$O', function (entry) {
if (entry == null  || this.intervalCount == 0 ) {
return false;
}if (this.deleted > 0) {
p$1.sort.apply(this, []);
}return (p$1.findInterval$intervalstore_api_IntervalI$Z.apply(this, [entry, false]) >= 0);
});

Clazz.newMeth(C$, 'containsInterval$intervalstore_api_IntervalI$intervalstore_api_IntervalI', function (outer, inner) {
p$1.ensureFinalized.apply(this, []);
var index=this.binaryIdentitySearch$intervalstore_api_IntervalI(inner);
if (index >= 0) {
while ((index=index - Math.abs(this.offsets[index])) >= 0){
if (this.intervals[index] === outer ) {
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'ensureFinalized', function () {
if (this.isTainted) {
if (this.added > 0 || this.deleted > 0 ) {
p$1.sort.apply(this, []);
}if (this.offsets == null  || this.offsets.length < this.intervalCount ) {
this.offsets=Clazz.array(Integer.TYPE, [this.intervalCount]);
}p$1.linkFeatures.apply(this, []);
this.isTainted=false;
}}, p$1);

Clazz.newMeth(C$, 'findOverlaps$J$J', function (from, to) {
var list=this.findOverlaps$J$J$java_util_List(from, to, null);
$I$(2).reverse$java_util_List(list);
return list;
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
}var index=this.binaryLastIntervalSearch$J$J$IA(from, to, this.ret);
var index1=this.ret[0];
if (index1 < 0) {
return result;
}if (index1 > index + 1) {
while (--index1 > index){
result.add$O(this.intervals[index1]);
}
}var isMonotonic=false;
while (index >= 0){
var sf=this.intervals[index];
if (sf.getEnd$() >= from) {
result.add$O(sf);
} else if (isMonotonic) {
break;
}var offset=this.offsets[index];
isMonotonic=(offset < 0);
index-=(isMonotonic ? -offset : offset);
}
return result;
});

Clazz.newMeth(C$, 'get$I', function (i) {
if (i < 0 || i >= this.intervalCount + this.added ) {
return null;
}p$1.ensureFinalized.apply(this, []);
return this.intervals[i];
});

Clazz.newMeth(C$, 'getContainedBy$I$I', function (index, begin) {
while (index >= 0){
var sf=this.intervals[index];
if (sf.getEnd$() >= begin) {
return index;
}index-=Math.abs(this.offsets[index]);
}
return C$.NOT_CONTAINED;
}, p$1);

Clazz.newMeth(C$, 'getDepth$', function () {
p$1.ensureFinalized.apply(this, []);
if (this.intervalCount < 2) {
return this.intervalCount;
}var maxDepth=1;
var root=null;
for (var i=0; i < this.intervalCount; i++) {
var element=this.intervals[i];
if (this.offsets[i] == C$.NOT_CONTAINED) {
root=element;
}var depth=1;
var index=i;
var offset;
while ((index=index - Math.abs(offset=this.offsets[index])) >= 0){
element=this.intervals[index];
if (++depth > maxDepth && (element === root  || offset < 0 ) ) {
maxDepth=depth;
break;
}}
}
return maxDepth;
});

Clazz.newMeth(C$, 'getWidth$', function () {
p$1.ensureFinalized.apply(this, []);
var w=0;
for (var i=this.offsets.length; --i >= 0; ) {
if (this.offsets[i] > 0) {
w++;
}}
return w;
});

Clazz.newMeth(C$, 'isValid$', function () {
p$1.ensureFinalized.apply(this, []);
return true;
});

Clazz.newMeth(C$, 'iterator$', function () {
p$1.ensureFinalized.apply(this, []);
return ((P$.IntervalStore0$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntervalStore0$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['next']]]

Clazz.newMeth(C$, 'hasNext$', function () {
return this.next < this.b$['intervalstore.nonc.IntervalStore0'].intervalCount;
});

Clazz.newMeth(C$, 'next$', function () {
if (this.next >= this.b$['intervalstore.nonc.IntervalStore0'].intervalCount) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}return this.b$['intervalstore.nonc.IntervalStore0'].intervals[this.next++];
});
})()
), Clazz.new_(P$.IntervalStore0$1.$init$,[this, null]));
});

Clazz.newMeth(C$, 'linkFeatures', function () {
if (this.intervalCount == 0) {
return;
}this.maxEnd=this.intervals[0].getEnd$();
this.offsets[0]=C$.NOT_CONTAINED;
if (this.intervalCount == 1) {
return;
}var isMonotonic=true;
for (var i=1; i < this.intervalCount; i++) {
var sf=this.intervals[i];
var begin=sf.getBegin$();
var index=(begin <= this.maxEnd ? p$1.getContainedBy$I$I.apply(this, [i - 1, begin]) : -1);
this.offsets[i]=(index < 0 ? C$.NOT_CONTAINED : isMonotonic ? index - i : i - index);
isMonotonic=(sf.getEnd$() > this.maxEnd);
if (isMonotonic) {
this.maxEnd=sf.getEnd$();
}}
}, p$1);

Clazz.newMeth(C$, 'prettyPrint$', function () {
switch (this.intervalCount + this.added) {
case 0:
return "";
case 1:
return this.intervals[0] + "\n";
}
p$1.ensureFinalized.apply(this, []);
var sep="\t";
var sb=Clazz.new_($I$(4,1));
for (var i=0; i < this.intervalCount; i++) {
var range=this.intervals[i];
var index=i;
while ((index=index - Math.abs(this.offsets[index])) >= 0){
sb.append$S(sep);
}
sb.append$S(range.toString()).append$C("\n");
}
return sb.toString();
});

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
this.bsDeleted=Clazz.new_($I$(5,1).c$$I,[this.intervalCount]);
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

Clazz.newMeth(C$, 'canCheckForDuplicates$', function () {
return true;
});

Clazz.newMeth(C$, 'sameInterval$intervalstore_api_IntervalI$intervalstore_api_IntervalI', function (i1, i2) {
return (i1).equals$jalview_datamodel_SequenceFeature$Z(i2, false);
});

C$.$static$=function(){C$.$static$=0;
C$.NOT_CONTAINED=-2147483648;
C$.CONTAINMENT_UNKNOWN=0;
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
