(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={},I$=[[0,'java.util.concurrent.locks.ReentrantReadWriteLock','jalview.datamodel.HiddenColumnsCursor','java.util.ArrayList','StringBuilder','java.util.Arrays','java.util.BitSet','jalview.datamodel.RangeIterator','jalview.datamodel.StartRegionIterator','jalview.datamodel.RangeElementsIterator','jalview.datamodel.VisibleContigsIterator']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HiddenColumns");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cursor=Clazz.new_($I$(2,1));
this.numColumns=0;
this.hiddenColumns=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['I',['numColumns'],'O',['cursor','jalview.datamodel.HiddenColumnsCursor','hiddenColumns','java.util.List']]
,['O',['LOCK','java.util.concurrent.locks.ReentrantReadWriteLock']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_HiddenColumns',  function (copy) {
C$.c$$jalview_datamodel_HiddenColumns$I$I$I.apply(this, [copy, -2147483648, 2147483647, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_HiddenColumns$I$I$I',  function (copy, start, end, offset) {
;C$.$init$.apply(this);
try {
C$.LOCK.writeLock$().lock$();
if (copy != null ) {
this.numColumns=0;
var it=copy.getBoundedIterator$I$I(start, end);
while (it.hasNext$()){
var region=it.next$();
if (region[0] >= start && region[1] <= end ) {
this.hiddenColumns.add$O(Clazz.array(Integer.TYPE, -1, [region[0] - offset, region[1] - offset]));
this.numColumns+=region[1] - region[0] + 1;
}}
this.cursor=Clazz.new_($I$(2,1).c$$java_util_List,[this.hiddenColumns]);
}} finally {
C$.LOCK.writeLock$().unlock$();
}
}, 1);

Clazz.newMeth(C$, 'hideColumns$I$I',  function (start, end) {
try {
C$.LOCK.writeLock$().lock$();
var previndex=0;
var prevHiddenCount=0;
var regionindex=0;
if (!this.hiddenColumns.isEmpty$()) {
var cursorPos=this.cursor.findRegionForColumn$I$Z(start, false);
regionindex=cursorPos.getRegionIndex$();
if (regionindex > 0) {
previndex=regionindex - 1;
var prevRegion=this.hiddenColumns.get$I(previndex);
prevHiddenCount=cursorPos.getHiddenSoFar$() - (prevRegion[1] - prevRegion[0] + 1);
}}if (this.hiddenColumns.isEmpty$() || start > this.hiddenColumns.get$I(this.hiddenColumns.size$() - 1)[1] ) {
this.hiddenColumns.add$O(Clazz.array(Integer.TYPE, -1, [start, end]));
this.numColumns+=end - start + 1;
} else {
var added=false;
if (regionindex > 0) {
added=p$1.insertRangeAtRegion$I$I$I.apply(this, [regionindex - 1, start, end]);
}if (!added && regionindex < this.hiddenColumns.size$() ) {
p$1.insertRangeAtRegion$I$I$I.apply(this, [regionindex, start, end]);
}}this.cursor=Clazz.new_($I$(2,1).c$$java_util_List$I$I,[this.hiddenColumns, previndex, prevHiddenCount]);
} finally {
C$.LOCK.writeLock$().unlock$();
}
});

Clazz.newMeth(C$, 'insertRangeAtRegion$I$I$I',  function (i, start, end) {
var added=false;
var region=this.hiddenColumns.get$I(i);
if (end < region[0] - 1) {
this.hiddenColumns.add$I$O(i, Clazz.array(Integer.TYPE, -1, [start, end]));
this.numColumns+=end - start + 1;
added=true;
} else if (end <= region[1]) {
var oldstart=region[0];
region[0]=Math.min(region[0], start);
this.numColumns+=oldstart - region[0];
added=true;
} else if (start <= region[1] + 1) {
p$1.insertRangeAtOverlap$I$I$I$IA.apply(this, [i, start, end, region]);
added=true;
}return added;
}, p$1);

Clazz.newMeth(C$, 'insertRangeAtOverlap$I$I$I$IA',  function (i, start, end, region) {
var oldstart=region[0];
var oldend=region[1];
region[0]=Math.min(region[0], start);
region[1]=Math.max(region[1], end);
this.numColumns+=oldstart - region[0];
var endi=i;
while (endi < this.hiddenColumns.size$() - 1){
var nextRegion=this.hiddenColumns.get$I(endi + 1);
if (nextRegion[0] > end + 1) {
break;
}this.numColumns-=nextRegion[1] - nextRegion[0] + 1;
region[1]=Math.max(nextRegion[1], end);
++endi;
}
this.numColumns+=region[1] - oldend;
this.hiddenColumns.subList$I$I(i + 1, endi + 1).clear$();
}, p$1);

Clazz.newMeth(C$, 'hideList$java_util_List',  function (ranges) {
try {
C$.LOCK.writeLock$().lock$();
for (var r, $r = ranges.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
this.hideColumns$I$I(r[0], r[1]);
}
this.cursor=Clazz.new_($I$(2,1).c$$java_util_List,[this.hiddenColumns]);
} finally {
C$.LOCK.writeLock$().unlock$();
}
});

Clazz.newMeth(C$, 'revealAllHiddenColumns$jalview_datamodel_ColumnSelection',  function (sel) {
try {
C$.LOCK.writeLock$().lock$();
for (var region, $region = this.hiddenColumns.iterator$(); $region.hasNext$()&&((region=($region.next$())),1);) {
for (var j=region[0]; j < region[1] + 1; j++) {
sel.addElement$I(j);
}
}
this.hiddenColumns.clear$();
this.cursor=Clazz.new_($I$(2,1).c$$java_util_List,[this.hiddenColumns]);
this.numColumns=0;
} finally {
C$.LOCK.writeLock$().unlock$();
}
});

Clazz.newMeth(C$, 'revealHiddenColumns$I$jalview_datamodel_ColumnSelection',  function (start, sel) {
try {
C$.LOCK.writeLock$().lock$();
if (!this.hiddenColumns.isEmpty$()) {
var regionIndex=this.cursor.findRegionForColumn$I$Z(start, false).getRegionIndex$();
if (regionIndex != -1 && regionIndex != this.hiddenColumns.size$() ) {
var region=this.hiddenColumns.get$I(regionIndex);
if (start == region[0]) {
for (var j=region[0]; j < region[1] + 1; j++) {
sel.addElement$I(j);
}
var colsToRemove=region[1] - region[0] + 1;
this.hiddenColumns.remove$I(regionIndex);
this.numColumns-=colsToRemove;
}}}} finally {
C$.LOCK.writeLock$().unlock$();
}
});

Clazz.newMeth(C$, 'regionsToString$S$S',  function (delimiter, between) {
try {
C$.LOCK.readLock$().lock$();
var regionBuilder=Clazz.new_($I$(4,1));
var first=true;
for (var range, $range = this.hiddenColumns.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
if (!first) {
regionBuilder.append$S(delimiter);
} else {
first=false;
}regionBuilder.append$I(range[0]).append$S(between).append$I(range[1]);
}
return regionBuilder.toString();
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'getSize$',  function () {
return this.numColumns;
});

Clazz.newMeth(C$, 'getNumberOfRegions$',  function () {
try {
C$.LOCK.readLock$().lock$();
return this.hiddenColumns.size$();
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
try {
C$.LOCK.readLock$().lock$();
if (!(Clazz.instanceOf(obj, "jalview.datamodel.HiddenColumns"))) {
return false;
}var that=obj;
if (that.hiddenColumns.size$() != this.hiddenColumns.size$()) {
return false;
}var it=this.iterator$();
var thatit=that.iterator$();
while (it.hasNext$()){
if (!($I$(5,"equals$IA$IA",[it.next$(), thatit.next$()]))) {
return false;
}}
return true;
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'visibleToAbsoluteColumn$I',  function (column) {
try {
C$.LOCK.readLock$().lock$();
var result=column;
if (!this.hiddenColumns.isEmpty$()) {
result+=this.cursor.findRegionForColumn$I$Z(column, true).getHiddenSoFar$();
}return result;
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'absoluteToVisibleColumn$I',  function (hiddenColumn) {
try {
C$.LOCK.readLock$().lock$();
var result=hiddenColumn;
if (!this.hiddenColumns.isEmpty$()) {
var cursorPos=this.cursor.findRegionForColumn$I$Z(hiddenColumn, false);
var index=cursorPos.getRegionIndex$();
var hiddenBeforeCol=cursorPos.getHiddenSoFar$();
result=hiddenColumn - hiddenBeforeCol;
if (index < this.hiddenColumns.size$()) {
var region=this.hiddenColumns.get$I(index);
if (hiddenColumn >= region[0] && hiddenColumn <= region[1] ) {
if (region[0] == 0) {
result=0;
} else {
result=region[0] - 1 - hiddenBeforeCol ;
}}}}return result;
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'offsetByVisibleColumns$I$I',  function (visibleDistance, startColumn) {
try {
C$.LOCK.readLock$().lock$();
var start=this.absoluteToVisibleColumn$I(startColumn);
return this.visibleToAbsoluteColumn$I(start + visibleDistance);
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'getNextHiddenBoundary$Z$I',  function (left, alPos) {
try {
C$.LOCK.readLock$().lock$();
if (!this.hiddenColumns.isEmpty$()) {
var index=this.cursor.findRegionForColumn$I$Z(alPos, false).getRegionIndex$();
if (left && index > 0 ) {
var region=this.hiddenColumns.get$I(index - 1);
return region[1];
} else if (!left && index < this.hiddenColumns.size$() ) {
var region=this.hiddenColumns.get$I(index);
if (alPos < region[0]) {
return region[0];
} else if ((alPos <= region[1]) && (index + 1 < this.hiddenColumns.size$()) ) {
region=this.hiddenColumns.get$I(index + 1);
return region[0];
}}}return alPos;
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'isVisible$I',  function (column) {
try {
C$.LOCK.readLock$().lock$();
if (!this.hiddenColumns.isEmpty$()) {
var regionindex=this.cursor.findRegionForColumn$I$Z(column, false).getRegionIndex$();
if (regionindex > -1 && regionindex < this.hiddenColumns.size$() ) {
var region=this.hiddenColumns.get$I(regionindex);
if (column >= region[0]) {
return false;
}}}return true;
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'hasHiddenColumns$',  function () {
try {
C$.LOCK.readLock$().lock$();
return (!this.hiddenColumns.isEmpty$());
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'hasMultiHiddenColumnRegions$',  function () {
try {
C$.LOCK.readLock$().lock$();
return !this.hiddenColumns.isEmpty$() && this.hiddenColumns.size$() > 1 ;
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'hashCode$',  function () {
try {
C$.LOCK.readLock$().lock$();
var hashCode=1;
for (var hidden, $hidden = this.hiddenColumns.iterator$(); $hidden.hasNext$()&&((hidden=($hidden.next$())),1);) {
hashCode=31 * hashCode + hidden[0];
hashCode=31 * hashCode + hidden[1];
}
return hashCode;
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'hideColumns$java_util_BitSet',  function (inserts) {
p$1.hideColumns$java_util_BitSet$I$I.apply(this, [inserts, 0, inserts.length$() - 1]);
});

Clazz.newMeth(C$, 'hideColumns$java_util_BitSet$I$I',  function (tohide, start, end) {
try {
C$.LOCK.writeLock$().lock$();
for (var firstSet=tohide.nextSetBit$I(start), lastSet=start; firstSet >= start && lastSet <= end ; firstSet=tohide.nextSetBit$I(lastSet)) {
lastSet=tohide.nextClearBit$I(firstSet);
if (lastSet <= end) {
this.hideColumns$I$I(firstSet, lastSet - 1);
} else if (firstSet <= end) {
this.hideColumns$I$I(firstSet, end);
}}
this.cursor=Clazz.new_($I$(2,1).c$$java_util_List,[this.hiddenColumns]);
} finally {
C$.LOCK.writeLock$().unlock$();
}
}, p$1);

Clazz.newMeth(C$, 'clearAndHideColumns$java_util_BitSet$I$I',  function (tohide, start, end) {
p$1.clearHiddenColumnsInRange$I$I.apply(this, [start, end]);
p$1.hideColumns$java_util_BitSet$I$I.apply(this, [tohide, start, end]);
});

Clazz.newMeth(C$, 'clearHiddenColumnsInRange$I$I',  function (start, end) {
try {
C$.LOCK.writeLock$().lock$();
if (!this.hiddenColumns.isEmpty$()) {
var pos=this.cursor.findRegionForColumn$I$Z(start, false);
var index=pos.getRegionIndex$();
if (index != -1 && index != this.hiddenColumns.size$() ) {
var region=this.hiddenColumns.get$I(index);
if (region[0] < start && region[1] >= start ) {
this.numColumns-=region[1] - start + 1;
region[1]=start - 1;
++index;
}var endi=index;
while (endi < this.hiddenColumns.size$()){
region=this.hiddenColumns.get$I(endi);
if (region[1] > end) {
if (region[0] <= end) {
this.numColumns-=end - region[0] + 1;
region[0]=end + 1;
}break;
}this.numColumns-=region[1] - region[0] + 1;
++endi;
}
this.hiddenColumns.subList$I$I(index, endi).clear$();
}this.cursor=Clazz.new_($I$(2,1).c$$java_util_List,[this.hiddenColumns]);
}} finally {
C$.LOCK.writeLock$().unlock$();
}
}, p$1);

Clazz.newMeth(C$, 'andNot$java_util_BitSet',  function (updates) {
try {
C$.LOCK.writeLock$().lock$();
var hiddenBitSet=Clazz.new_($I$(6,1));
for (var range, $range = this.hiddenColumns.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
hiddenBitSet.set$I$I(range[0], range[1] + 1);
}
hiddenBitSet.andNot$java_util_BitSet(updates);
this.hiddenColumns.clear$();
this.hideColumns$java_util_BitSet(hiddenBitSet);
} finally {
C$.LOCK.writeLock$().unlock$();
}
});

Clazz.newMeth(C$, 'getVisibleStartAndEndIndex$I',  function (width) {
try {
C$.LOCK.readLock$().lock$();
var firstVisible=0;
var lastVisible=width - 1;
if (!this.hiddenColumns.isEmpty$()) {
firstVisible=this.visibleToAbsoluteColumn$I(0);
var lastregion=this.hiddenColumns.get$I(this.hiddenColumns.size$() - 1);
if (lastregion[1] == width - 1) {
lastVisible=lastregion[0] - 1;
}}return Clazz.array(Integer.TYPE, -1, [firstVisible, lastVisible]);
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'getRegionWithEdgeAtRes$I',  function (res) {
try {
C$.LOCK.readLock$().lock$();
var adjres=this.visibleToAbsoluteColumn$I(res);
var reveal=null;
if (!this.hiddenColumns.isEmpty$()) {
var regionindex=this.cursor.findRegionForColumn$I$Z(adjres - 1, false).getRegionIndex$();
if (regionindex < this.hiddenColumns.size$() && this.hiddenColumns.get$I(regionindex)[1] == adjres - 1 ) {
reveal=this.hiddenColumns.get$I(regionindex);
} else if (regionindex < this.hiddenColumns.size$() && this.hiddenColumns.get$I(regionindex)[0] == adjres + 1 ) {
reveal=this.hiddenColumns.get$I(regionindex);
}}return reveal;
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'iterator$',  function () {
try {
C$.LOCK.readLock$().lock$();
return Clazz.new_($I$(7,1).c$$java_util_List,[this.hiddenColumns]);
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'getBoundedIterator$I$I',  function (start, end) {
try {
C$.LOCK.readLock$().lock$();
return Clazz.new_($I$(7,1).c$$I$I$java_util_List,[start, end, this.hiddenColumns]);
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'getStartRegionIterator$I$I',  function (start, end) {
try {
C$.LOCK.readLock$().lock$();
var absoluteStart=this.visibleToAbsoluteColumn$I(start);
var pos=this.cursor.findRegionForColumn$I$Z(absoluteStart - 1, false);
return Clazz.new_($I$(8,1).c$$jalview_datamodel_HiddenCursorPosition$I$I$java_util_List,[pos, start, end, this.hiddenColumns]);
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'getVisibleColsIterator$I$I',  function (start, end) {
try {
C$.LOCK.readLock$().lock$();
return Clazz.new_([Clazz.new_($I$(10,1).c$$I$I$java_util_List,[start, end + 1, this.hiddenColumns])],$I$(9,1).c$$java_util_Iterator);
} finally {
C$.LOCK.readLock$().unlock$();
}
});

Clazz.newMeth(C$, 'getVisContigsIterator$I$I$Z',  function (start, end, useVisibleCoords) {
var adjstart=start;
var adjend=end;
if (useVisibleCoords) {
adjstart=this.visibleToAbsoluteColumn$I(start);
adjend=this.visibleToAbsoluteColumn$I(end);
}try {
C$.LOCK.readLock$().lock$();
return Clazz.new_($I$(10,1).c$$I$I$java_util_List,[adjstart, adjend, this.hiddenColumns]);
} finally {
C$.LOCK.readLock$().unlock$();
}
});

C$.$static$=function(){C$.$static$=0;
C$.LOCK=Clazz.new_($I$(1,1));
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
