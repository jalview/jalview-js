(function(){var P$=java.util,p$1={},p$2={},p$3={},p$4={},p$5={},p$6={},p$7={},p$8={},p$9={},p$10={},p$11={},p$12={},p$13={},p$14={},p$15={},p$16={},p$17={},I$=[[0,'java.util.TreeSet',['java.util.Collections','.UnmodifiableNavigableSet'],['java.util.Collections','.UnmodifiableNavigableSet','.EmptyNavigableSet'],['java.util.Collections','.UnmodifiableRandomAccessList'],['java.util.Collections','.UnmodifiableList'],'java.util.Objects',['java.util.Collections','.UnmodifiableMap','.UnmodifiableEntrySet','.UnmodifiableEntry'],['java.util.Collections','.UnmodifiableMap','.UnmodifiableEntrySet','.UnmodifiableEntrySetSpliterator'],'java.util.stream.StreamSupport','java.util.Arrays',['java.util.Collections','.UnmodifiableMap','.UnmodifiableEntrySet'],'java.util.TreeMap',['java.util.Collections','.UnmodifiableNavigableMap'],['java.util.Collections','.UnmodifiableNavigableMap','.EmptyNavigableMap'],['java.util.Collections','.SynchronizedRandomAccessList'],['java.util.Collections','.SynchronizedList'],['java.util.Collections','.SynchronizedSet'],['java.util.Collections','.SynchronizedCollection'],['java.util.Collections','.SynchronizedNavigableSet'],['java.util.AbstractMap','.SimpleImmutableEntry'],['java.util.Collections','.CheckedMap','.CheckedEntrySet','.CheckedEntry'],'java.util.ArrayList',['java.util.Collections','.CheckedMap','.CheckedEntrySet'],'java.util.Spliterators','java.util.Collections','java.lang.reflect.Array','java.util.stream.IntStream','java.util.Comparator','Boolean',['java.util.Collections','.EmptySet'],['java.util.Collections','.EmptyList'],['java.util.Collections','.EmptyMap'],'java.util.Random',['java.util.Collections','.UnmodifiableCollection'],['java.util.Collections','.UnmodifiableSet'],['java.util.Collections','.UnmodifiableSortedSet'],['java.util.Collections','.UnmodifiableMap'],['java.util.Collections','.UnmodifiableSortedMap'],['java.util.Collections','.SynchronizedSortedSet'],['java.util.Collections','.SynchronizedMap'],['java.util.Collections','.SynchronizedSortedMap'],['java.util.Collections','.SynchronizedNavigableMap'],['java.util.Collections','.CheckedCollection'],['java.util.Collections','.CheckedQueue'],['java.util.Collections','.CheckedSet'],['java.util.Collections','.CheckedSortedSet'],['java.util.Collections','.CheckedNavigableSet'],['java.util.Collections','.CheckedRandomAccessList'],['java.util.Collections','.CheckedList'],['java.util.Collections','.CheckedMap'],['java.util.Collections','.CheckedSortedMap'],['java.util.Collections','.CheckedNavigableMap'],['java.util.Collections','.EmptyIterator'],['java.util.Collections','.EmptyListIterator'],['java.util.Collections','.EmptyEnumeration'],['java.util.Collections','.SingletonSet'],['java.util.Collections','.SingletonList'],['java.util.Collections','.SingletonMap'],['java.util.Collections','.CopiesList'],['java.util.Collections','.ReverseComparator'],['java.util.Collections','.ReverseComparator2'],['java.util.Collections','.SetFromMap'],['java.util.Collections','.AsLIFOQueue']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Collections", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.r=null;
C$.EMPTY_SET=null;
C$.EMPTY_LIST=null;
C$.EMPTY_MAP=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.EMPTY_SET=Clazz.new_($I$(30));
C$.EMPTY_LIST=Clazz.new_($I$(31));
C$.EMPTY_MAP=Clazz.new_($I$(32));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'sort$java_util_List', function (list) {
list.sort$java_util_Comparator(null);
}, 1);

Clazz.newMeth(C$, 'sort$java_util_List$java_util_Comparator', function (list, c) {
list.sort$java_util_Comparator(c);
}, 1);

Clazz.newMeth(C$, 'binarySearch$java_util_List$TT', function (list, key) {
if (Clazz.instanceOf(list, "java.util.RandomAccess") || list.size$() < 5000 ) return C$.indexedBinarySearch$java_util_List$TT(list, key);
 else return C$.iteratorBinarySearch$java_util_List$TT(list, key);
}, 1);

Clazz.newMeth(C$, 'indexedBinarySearch$java_util_List$TT', function (list, key) {
var low=0;
var high=list.size$() - 1;
while (low <= high){
var mid=(low + high) >>> 1;
var midVal=list.get$I(mid);
var cmp=midVal.compareTo$(key);
if (cmp < 0) low=mid + 1;
 else if (cmp > 0) high=mid - 1;
 else return mid;
}
return -(low + 1);
}, 1);

Clazz.newMeth(C$, 'iteratorBinarySearch$java_util_List$TT', function (list, key) {
var low=0;
var high=list.size$() - 1;
var i=list.listIterator$();
while (low <= high){
var mid=(low + high) >>> 1;
var midVal=C$.get$java_util_ListIterator$I(i, mid);
var cmp=midVal.compareTo$(key);
if (cmp < 0) low=mid + 1;
 else if (cmp > 0) high=mid - 1;
 else return mid;
}
return -(low + 1);
}, 1);

Clazz.newMeth(C$, 'get$java_util_ListIterator$I', function (i, index) {
var obj=null;
var pos=i.nextIndex$();
if (pos <= index) {
do {
obj=i.next$();
} while (pos++ < index);
} else {
do {
obj=i.previous$();
} while (--pos > index);
}return obj;
}, 1);

Clazz.newMeth(C$, 'binarySearch$java_util_List$TT$java_util_Comparator', function (list, key, c) {
if (c == null ) return C$.binarySearch$java_util_List$TT(list, key);
if (Clazz.instanceOf(list, "java.util.RandomAccess") || list.size$() < 5000 ) return C$.indexedBinarySearch$java_util_List$TT$java_util_Comparator(list, key, c);
 else return C$.iteratorBinarySearch$java_util_List$TT$java_util_Comparator(list, key, c);
}, 1);

Clazz.newMeth(C$, 'indexedBinarySearch$java_util_List$TT$java_util_Comparator', function (l, key, c) {
var low=0;
var high=l.size$() - 1;
while (low <= high){
var mid=(low + high) >>> 1;
var midVal=l.get$I(mid);
var cmp=c.compare$(midVal, key);
if (cmp < 0) low=mid + 1;
 else if (cmp > 0) high=mid - 1;
 else return mid;
}
return -(low + 1);
}, 1);

Clazz.newMeth(C$, 'iteratorBinarySearch$java_util_List$TT$java_util_Comparator', function (l, key, c) {
var low=0;
var high=l.size$() - 1;
var i=l.listIterator$();
while (low <= high){
var mid=(low + high) >>> 1;
var midVal=C$.get$java_util_ListIterator$I(i, mid);
var cmp=c.compare$(midVal, key);
if (cmp < 0) low=mid + 1;
 else if (cmp > 0) high=mid - 1;
 else return mid;
}
return -(low + 1);
}, 1);

Clazz.newMeth(C$, 'reverse$java_util_List', function (list) {
var size=list.size$();
if (size < 18 || Clazz.instanceOf(list, "java.util.RandomAccess") ) {
for (var i=0, mid=size >> 1, j=size - 1; i < mid; i++, j--) C$.swap$java_util_List$I$I(list, i, j);

} else {
var fwd=list.listIterator$();
var rev=list.listIterator$I(size);
for (var i=0, mid=list.size$() >> 1; i < mid; i++) {
var tmp=fwd.next$();
fwd.set$TE(rev.previous$());
rev.set$TE(tmp);
}
}}, 1);

Clazz.newMeth(C$, 'shuffle$java_util_List', function (list) {
var rnd=C$.r;
if (rnd == null ) C$.r=rnd=Clazz.new_($I$(33));
C$.shuffle$java_util_List$java_util_Random(list, rnd);
}, 1);

Clazz.newMeth(C$, 'shuffle$java_util_List$java_util_Random', function (list, rnd) {
var size=list.size$();
if (size < 5 || Clazz.instanceOf(list, "java.util.RandomAccess") ) {
for (var i=size; i > 1; i--) C$.swap$java_util_List$I$I(list, i - 1, rnd.nextInt$I(i));

} else {
var arr=list.toArray$();
for (var i=size; i > 1; i--) C$.swap$OA$I$I(arr, i - 1, rnd.nextInt$I(i));

var it=list.listIterator$();
for (var i=0; i < arr.length; i++) {
it.next$();
it.set$TE(arr[i]);
}
}}, 1);

Clazz.newMeth(C$, 'swap$java_util_List$I$I', function (list, i, j) {
var l=list;
l.set$I$TE(i, l.set$I$TE(j, l.get$I(i)));
}, 1);

Clazz.newMeth(C$, 'swap$OA$I$I', function (arr, i, j) {
var tmp=arr[i];
arr[i]=arr[j];
arr[j]=tmp;
}, 1);

Clazz.newMeth(C$, 'fill$java_util_List$TT', function (list, obj) {
var size=list.size$();
if (size < 25 || Clazz.instanceOf(list, "java.util.RandomAccess") ) {
for (var i=0; i < size; i++) list.set$I$TE(i, obj);

} else {
var itr=list.listIterator$();
for (var i=0; i < size; i++) {
itr.next$();
itr.set$TE(obj);
}
}}, 1);

Clazz.newMeth(C$, 'copy$java_util_List$java_util_List', function (dest, src) {
var srcSize=src.size$();
if (srcSize > dest.size$()) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Source does not fit in dest"]);
if (srcSize < 10 || (Clazz.instanceOf(src, "java.util.RandomAccess") && Clazz.instanceOf(dest, "java.util.RandomAccess") ) ) {
for (var i=0; i < srcSize; i++) dest.set$I$TE(i, src.get$I(i));

} else {
var di=dest.listIterator$();
var si=src.listIterator$();
for (var i=0; i < srcSize; i++) {
di.next$();
di.set$TE(si.next$());
}
}}, 1);

Clazz.newMeth(C$, 'min$java_util_Collection', function (coll) {
var i=coll.iterator$();
var candidate=i.next$();
while (i.hasNext$()){
var next=i.next$();
if (next.compareTo$(candidate) < 0) candidate=next;
}
return candidate;
}, 1);

Clazz.newMeth(C$, 'min$java_util_Collection$java_util_Comparator', function (coll, comp) {
if (comp == null ) return C$.min$java_util_Collection(coll);
var i=coll.iterator$();
var candidate=i.next$();
while (i.hasNext$()){
var next=i.next$();
if (comp.compare$(next, candidate) < 0) candidate=next;
}
return candidate;
}, 1);

Clazz.newMeth(C$, 'max$java_util_Collection', function (coll) {
var i=coll.iterator$();
var candidate=i.next$();
while (i.hasNext$()){
var next=i.next$();
if (next.compareTo$(candidate) > 0) candidate=next;
}
return candidate;
}, 1);

Clazz.newMeth(C$, 'max$java_util_Collection$java_util_Comparator', function (coll, comp) {
if (comp == null ) return C$.max$java_util_Collection(coll);
var i=coll.iterator$();
var candidate=i.next$();
while (i.hasNext$()){
var next=i.next$();
if (comp.compare$(next, candidate) > 0) candidate=next;
}
return candidate;
}, 1);

Clazz.newMeth(C$, 'rotate$java_util_List$I', function (list, distance) {
if (Clazz.instanceOf(list, "java.util.RandomAccess") || list.size$() < 100 ) C$.rotate1$java_util_List$I(list, distance);
 else C$.rotate2$java_util_List$I(list, distance);
}, 1);

Clazz.newMeth(C$, 'rotate1$java_util_List$I', function (list, distance) {
var size=list.size$();
if (size == 0) return;
distance=distance % size;
if (distance < 0) distance+=size;
if (distance == 0) return;
for (var cycleStart=0, nMoved=0; nMoved != size; cycleStart++) {
var displaced=list.get$I(cycleStart);
var i=cycleStart;
do {
i+=distance;
if (i >= size) i-=size;
displaced=list.set$I$TE(i, displaced);
nMoved++;
} while (i != cycleStart);
}
}, 1);

Clazz.newMeth(C$, 'rotate2$java_util_List$I', function (list, distance) {
var size=list.size$();
if (size == 0) return;
var mid=-distance % size;
if (mid < 0) mid+=size;
if (mid == 0) return;
C$.reverse$java_util_List(list.subList$I$I(0, mid));
C$.reverse$java_util_List(list.subList$I$I(mid, size));
C$.reverse$java_util_List(list);
}, 1);

Clazz.newMeth(C$, 'replaceAll$java_util_List$TT$TT', function (list, oldVal, newVal) {
var result=false;
var size=list.size$();
if (size < 11 || Clazz.instanceOf(list, "java.util.RandomAccess") ) {
if (oldVal == null ) {
for (var i=0; i < size; i++) {
if (list.get$I(i) == null ) {
list.set$I$TE(i, newVal);
result=true;
}}
} else {
for (var i=0; i < size; i++) {
if (oldVal.equals$O(list.get$I(i))) {
list.set$I$TE(i, newVal);
result=true;
}}
}} else {
var itr=list.listIterator$();
if (oldVal == null ) {
for (var i=0; i < size; i++) {
if (itr.next$() == null ) {
itr.set$TE(newVal);
result=true;
}}
} else {
for (var i=0; i < size; i++) {
if (oldVal.equals$O(itr.next$())) {
itr.set$TE(newVal);
result=true;
}}
}}return result;
}, 1);

Clazz.newMeth(C$, 'indexOfSubList$java_util_List$java_util_List', function (source, target) {
var sourceSize=source.size$();
var targetSize=target.size$();
var maxCandidate=sourceSize - targetSize;
if (sourceSize < 35 || (Clazz.instanceOf(source, "java.util.RandomAccess") && Clazz.instanceOf(target, "java.util.RandomAccess") ) ) {
 nextCand : for (var candidate=0; candidate <= maxCandidate; candidate++) {
for (var i=0, j=candidate; i < targetSize; i++, j++) if (!C$.eq$O$O(target.get$I(i), source.get$I(j))) continue nextCand;

return candidate;
}
} else {
var si=source.listIterator$();
 nextCand : for (var candidate=0; candidate <= maxCandidate; candidate++) {
var ti=target.listIterator$();
for (var i=0; i < targetSize; i++) {
if (!C$.eq$O$O(ti.next$(), si.next$())) {
for (var j=0; j < i; j++) si.previous$();

continue nextCand;
}}
return candidate;
}
}return -1;
}, 1);

Clazz.newMeth(C$, 'lastIndexOfSubList$java_util_List$java_util_List', function (source, target) {
var sourceSize=source.size$();
var targetSize=target.size$();
var maxCandidate=sourceSize - targetSize;
if (sourceSize < 35 || Clazz.instanceOf(source, "java.util.RandomAccess") ) {
 nextCand : for (var candidate=maxCandidate; candidate >= 0; candidate--) {
for (var i=0, j=candidate; i < targetSize; i++, j++) if (!C$.eq$O$O(target.get$I(i), source.get$I(j))) continue nextCand;

return candidate;
}
} else {
if (maxCandidate < 0) return -1;
var si=source.listIterator$I(maxCandidate);
 nextCand : for (var candidate=maxCandidate; candidate >= 0; candidate--) {
var ti=target.listIterator$();
for (var i=0; i < targetSize; i++) {
if (!C$.eq$O$O(ti.next$(), si.next$())) {
if (candidate != 0) {
for (var j=0; j <= i + 1; j++) si.previous$();

}continue nextCand;
}}
return candidate;
}
}return -1;
}, 1);

Clazz.newMeth(C$, 'unmodifiableCollection$java_util_Collection', function (c) {
return Clazz.new_($I$(34).c$$java_util_Collection,[c]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableSet$java_util_Set', function (s) {
return Clazz.new_($I$(35).c$$java_util_Set,[s]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableSortedSet$java_util_SortedSet', function (s) {
return Clazz.new_($I$(36).c$$java_util_SortedSet,[s]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableNavigableSet$java_util_NavigableSet', function (s) {
return Clazz.new_($I$(2).c$$java_util_NavigableSet,[s]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableList$java_util_List', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(4).c$$java_util_List,[list]) : Clazz.new_($I$(5).c$$java_util_List,[list]));
}, 1);

Clazz.newMeth(C$, 'unmodifiableMap$java_util_Map', function (m) {
return Clazz.new_($I$(37).c$$java_util_Map,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableSortedMap$java_util_SortedMap', function (m) {
return Clazz.new_($I$(38).c$$java_util_SortedMap,[m]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableNavigableMap$java_util_NavigableMap', function (m) {
return Clazz.new_($I$(13).c$$java_util_NavigableMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$java_util_Collection', function (c) {
return Clazz.new_($I$(18).c$$java_util_Collection,[c]);
}, 1);

Clazz.newMeth(C$, 'synchronizedCollection$java_util_Collection$O', function (c, mutex) {
return Clazz.new_($I$(18).c$$java_util_Collection$O,[c, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$java_util_Set', function (s) {
return Clazz.new_($I$(17).c$$java_util_Set,[s]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSet$java_util_Set$O', function (s, mutex) {
return Clazz.new_($I$(17).c$$java_util_Set$O,[s, mutex]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSortedSet$java_util_SortedSet', function (s) {
return Clazz.new_($I$(39).c$$java_util_SortedSet,[s]);
}, 1);

Clazz.newMeth(C$, 'synchronizedNavigableSet$java_util_NavigableSet', function (s) {
return Clazz.new_($I$(19).c$$java_util_NavigableSet,[s]);
}, 1);

Clazz.newMeth(C$, 'synchronizedList$java_util_List', function (list) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(15).c$$java_util_List,[list]) : Clazz.new_($I$(16).c$$java_util_List,[list]));
}, 1);

Clazz.newMeth(C$, 'synchronizedList$java_util_List$O', function (list, mutex) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(15).c$$java_util_List$O,[list, mutex]) : Clazz.new_($I$(16).c$$java_util_List$O,[list, mutex]));
}, 1);

Clazz.newMeth(C$, 'synchronizedMap$java_util_Map', function (m) {
return Clazz.new_($I$(40).c$$java_util_Map,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedSortedMap$java_util_SortedMap', function (m) {
return Clazz.new_($I$(41).c$$java_util_SortedMap,[m]);
}, 1);

Clazz.newMeth(C$, 'synchronizedNavigableMap$java_util_NavigableMap', function (m) {
return Clazz.new_($I$(42).c$$java_util_NavigableMap,[m]);
}, 1);

Clazz.newMeth(C$, 'checkedCollection$java_util_Collection$Class', function (c, type) {
return Clazz.new_($I$(43).c$$java_util_Collection$Class,[c, type]);
}, 1);

Clazz.newMeth(C$, 'zeroLengthArray$Class', function (type) {
return Clazz.array(type, 0);
}, 1);

Clazz.newMeth(C$, 'checkedQueue$java_util_Queue$Class', function (queue, type) {
return Clazz.new_($I$(44).c$$java_util_Queue$Class,[queue, type]);
}, 1);

Clazz.newMeth(C$, 'checkedSet$java_util_Set$Class', function (s, type) {
return Clazz.new_($I$(45).c$$java_util_Set$Class,[s, type]);
}, 1);

Clazz.newMeth(C$, 'checkedSortedSet$java_util_SortedSet$Class', function (s, type) {
return Clazz.new_($I$(46).c$$java_util_SortedSet$Class,[s, type]);
}, 1);

Clazz.newMeth(C$, 'checkedNavigableSet$java_util_NavigableSet$Class', function (s, type) {
return Clazz.new_($I$(47).c$$java_util_NavigableSet$Class,[s, type]);
}, 1);

Clazz.newMeth(C$, 'checkedList$java_util_List$Class', function (list, type) {
return (Clazz.instanceOf(list, "java.util.RandomAccess") ? Clazz.new_($I$(48).c$$java_util_List$Class,[list, type]) : Clazz.new_($I$(49).c$$java_util_List$Class,[list, type]));
}, 1);

Clazz.newMeth(C$, 'checkedMap$java_util_Map$Class$Class', function (m, keyType, valueType) {
return Clazz.new_($I$(50).c$$java_util_Map$Class$Class,[m, keyType, valueType]);
}, 1);

Clazz.newMeth(C$, 'checkedSortedMap$java_util_SortedMap$Class$Class', function (m, keyType, valueType) {
return Clazz.new_($I$(51).c$$java_util_SortedMap$Class$Class,[m, keyType, valueType]);
}, 1);

Clazz.newMeth(C$, 'checkedNavigableMap$java_util_NavigableMap$Class$Class', function (m, keyType, valueType) {
return Clazz.new_($I$(52).c$$java_util_NavigableMap$Class$Class,[m, keyType, valueType]);
}, 1);

Clazz.newMeth(C$, 'emptyIterator$', function () {
return $I$(53).EMPTY_ITERATOR;
}, 1);

Clazz.newMeth(C$, 'emptyListIterator$', function () {
return $I$(54).$EMPTY_ITERATOR;
}, 1);

Clazz.newMeth(C$, 'emptyEnumeration$', function () {
return $I$(55).EMPTY_ENUMERATION;
}, 1);

Clazz.newMeth(C$, 'emptySet$', function () {
return C$.EMPTY_SET;
}, 1);

Clazz.newMeth(C$, 'emptySortedSet$', function () {
return $I$(2).EMPTY_NAVIGABLE_SET;
}, 1);

Clazz.newMeth(C$, 'emptyNavigableSet$', function () {
return $I$(2).EMPTY_NAVIGABLE_SET;
}, 1);

Clazz.newMeth(C$, 'emptyList$', function () {
return C$.EMPTY_LIST;
}, 1);

Clazz.newMeth(C$, 'emptyMap$', function () {
return C$.EMPTY_MAP;
}, 1);

Clazz.newMeth(C$, 'emptySortedMap$', function () {
return $I$(13).EMPTY_NAVIGABLE_MAP;
}, 1);

Clazz.newMeth(C$, 'emptyNavigableMap$', function () {
return $I$(13).EMPTY_NAVIGABLE_MAP;
}, 1);

Clazz.newMeth(C$, 'singleton$TT', function (o) {
return Clazz.new_($I$(56).c$$TE,[o]);
}, 1);

Clazz.newMeth(C$, 'singletonIterator$TE', function (e) {
return ((P$.Collections$1||
(function(){var C$=Clazz.newClass(P$, "Collections$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.hasNext=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.hasNext=true;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.hasNext;
});

Clazz.newMeth(C$, 'next$', function () {
if (this.hasNext) {
this.hasNext=false;
return this.$finals$.e;
}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (action) {
$I$(6).requireNonNull$TT(action);
if (this.hasNext) {
action.accept$(this.$finals$.e);
this.hasNext=false;
}});
})()
), Clazz.new_(P$.Collections$1.$init$, [this, {e: e}]));
}, 1);

Clazz.newMeth(C$, 'singletonSpliterator$TT', function (element) {
return ((P$.Collections$2||
(function(){var C$=Clazz.newClass(P$, "Collections$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Spliterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.est=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.est=1;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
return null;
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer', function (consumer) {
$I$(6).requireNonNull$TT(consumer);
if (this.est > 0) {
this.est--;
consumer.accept$(this.$finals$.element);
return true;
}return false;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (consumer) {
this.tryAdvance$java_util_function_Consumer(consumer);
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return this.est;
});

Clazz.newMeth(C$, 'characteristics$', function () {
var value=(this.$finals$.element != null ) ? 256 : 0;
return value | 64 | 16384 | 1024 | 1 | 16 ;
});
})()
), Clazz.new_(P$.Collections$2.$init$, [this, {element: element}]));
}, 1);

Clazz.newMeth(C$, 'singletonList$TT', function (o) {
return Clazz.new_($I$(57).c$$TE,[o]);
}, 1);

Clazz.newMeth(C$, 'singletonMap$TK$TV', function (key, value) {
return Clazz.new_($I$(58).c$$TK$TV,[key, value]);
}, 1);

Clazz.newMeth(C$, 'nCopies$I$TT', function (n, o) {
if (n < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["List length = " + n]);
return Clazz.new_($I$(59).c$$I$TE,[n, o]);
}, 1);

Clazz.newMeth(C$, 'reverseOrder$', function () {
return $I$(60).REVERSE_ORDER;
}, 1);

Clazz.newMeth(C$, 'reverseOrder$java_util_Comparator', function (cmp) {
if (cmp == null ) return C$.reverseOrder$();
if (Clazz.instanceOf(cmp, "java.util.Collections.ReverseComparator2")) return (cmp).cmp;
return Clazz.new_($I$(61).c$$java_util_Comparator,[cmp]);
}, 1);

Clazz.newMeth(C$, 'enumeration$java_util_Collection', function (c) {
return ((P$.Collections$3||
(function(){var C$=Clazz.newClass(P$, "Collections$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.i=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.i=this.$finals$.c.iterator$();
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$', function () {
return this.i.hasNext$();
});

Clazz.newMeth(C$, 'nextElement$', function () {
return this.i.next$();
});
})()
), Clazz.new_(P$.Collections$3.$init$, [this, {c: c}]));
}, 1);

Clazz.newMeth(C$, 'list$java_util_Enumeration', function (e) {
var l=Clazz.new_($I$(22));
while (e.hasMoreElements$())l.add$TE(e.nextElement$());

return l;
}, 1);

Clazz.newMeth(C$, 'eq$O$O', function (o1, o2) {
return o1 == null  ? o2 == null  : o1.equals$O(o2);
}, 1);

Clazz.newMeth(C$, 'frequency$java_util_Collection$O', function (c, o) {
var result=0;
if (o == null ) {
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (e == null ) result++;

} else {
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (o.equals$O(e)) result++;

}return result;
}, 1);

Clazz.newMeth(C$, 'disjoint$java_util_Collection$java_util_Collection', function (c1, c2) {
var contains=c2;
var iterate=c1;
if (Clazz.instanceOf(c1, "java.util.Set")) {
iterate=c2;
contains=c1;
} else if (!(Clazz.instanceOf(c2, "java.util.Set"))) {
var c1size=c1.size$();
var c2size=c2.size$();
if (c1size == 0 || c2size == 0 ) {
return true;
}if (c1size > c2size) {
iterate=c2;
contains=c1;
}}for (var e, $e = iterate.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if (contains.contains$O(e)) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'addAll$java_util_Collection$TTA', function (c, elements) {
var result=false;
for (var element, $element = 0, $$element = elements; $element<$$element.length&&((element=($$element[$element])),1);$element++) result|=c.add$TE(element);

return result;
}, 1);

Clazz.newMeth(C$, 'newSetFromMap$java_util_Map', function (map) {
return Clazz.new_($I$(62).c$$java_util_Map,[map]);
}, 1);

Clazz.newMeth(C$, 'asLifoQueue$java_util_Deque', function (deque) {
return Clazz.new_($I$(63).c$$java_util_Deque,[deque]);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.Collections, "UnmodifiableCollection", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.Collection', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.c=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
C$.$init$.apply(this);
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.c=c;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.c.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.c.isEmpty$();
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.c.contains$O(o);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.c.toArray$();
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
return this.c.toArray$TTA(a);
});

Clazz.newMeth(C$, 'toString', function () {
return this.c.toString();
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.Collections$UnmodifiableCollection$1||
(function(){var C$=Clazz.newClass(P$, "Collections$UnmodifiableCollection$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.i=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.i=this.b$['java.util.Collections.UnmodifiableCollection'].c.iterator$();
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.i.next$();
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer','forEachRemaining$'], function (action) {
this.i.forEachRemaining$java_util_function_Consumer(action);
});
})()
), Clazz.new_(P$.Collections$UnmodifiableCollection$1.$init$, [this, null]));
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$O', function (o) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (coll) {
return this.c.containsAll$java_util_Collection(coll);
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clear$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
this.c.forEach$java_util_function_Consumer(action);
});

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate', function (filter) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'spliterator$', function () {
return this.c.spliterator$();
});

Clazz.newMeth(C$, 'stream$', function () {
return this.c.stream$();
});

Clazz.newMeth(C$, 'parallelStream$', function () {
return this.c.parallelStream$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "UnmodifiableSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.UnmodifiableCollection'], ['java.util.Set', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Set', function (s) {
C$.superclazz.c$$java_util_Collection.apply(this, [s]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
return o === this  || this.c.equals$O(o) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.c.hashCode$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "UnmodifiableSortedSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.UnmodifiableSet'], ['java.util.SortedSet', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ss=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SortedSet', function (s) {
C$.superclazz.c$$java_util_Set.apply(this, [s]);
C$.$init$.apply(this);
this.ss=s;
}, 1);

Clazz.newMeth(C$, 'comparator$', function () {
return this.ss.comparator$();
});

Clazz.newMeth(C$, ['subSet$TE$TE'], function (fromElement, toElement) {
return Clazz.new_(C$.c$$java_util_SortedSet,[this.ss.subSet$TE$TE(fromElement, toElement)]);
});

Clazz.newMeth(C$, ['headSet$TE'], function (toElement) {
return Clazz.new_(C$.c$$java_util_SortedSet,[this.ss.headSet$TE(toElement)]);
});

Clazz.newMeth(C$, ['tailSet$TE'], function (fromElement) {
return Clazz.new_(C$.c$$java_util_SortedSet,[this.ss.tailSet$TE(fromElement)]);
});

Clazz.newMeth(C$, 'first$', function () {
return this.ss.first$();
});

Clazz.newMeth(C$, 'last$', function () {
return this.ss.last$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "UnmodifiableNavigableSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.UnmodifiableSortedSet'], ['java.util.NavigableSet', 'java.io.Serializable']);
C$.EMPTY_NAVIGABLE_SET=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.EMPTY_NAVIGABLE_SET=Clazz.new_($I$(3));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ns=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_NavigableSet', function (s) {
C$.superclazz.c$$java_util_SortedSet.apply(this, [s]);
C$.$init$.apply(this);
this.ns=s;
}, 1);

Clazz.newMeth(C$, ['lower$TE'], function (e) {
return this.ns.lower$TE(e);
});

Clazz.newMeth(C$, ['floor$TE'], function (e) {
return this.ns.floor$TE(e);
});

Clazz.newMeth(C$, ['ceiling$TE'], function (e) {
return this.ns.ceiling$TE(e);
});

Clazz.newMeth(C$, ['higher$TE'], function (e) {
return this.ns.higher$TE(e);
});

Clazz.newMeth(C$, 'pollFirst$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'pollLast$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'descendingSet$', function () {
return Clazz.new_(C$.c$$java_util_NavigableSet,[this.ns.descendingSet$()]);
});

Clazz.newMeth(C$, 'descendingIterator$', function () {
return this.descendingSet$().iterator$();
});

Clazz.newMeth(C$, ['subSet$TE$Z$TE$Z'], function (fromElement, fromInclusive, toElement, toInclusive) {
return Clazz.new_(C$.c$$java_util_NavigableSet,[this.ns.subSet$TE$Z$TE$Z(fromElement, fromInclusive, toElement, toInclusive)]);
});

Clazz.newMeth(C$, ['headSet$TE$Z'], function (toElement, inclusive) {
return Clazz.new_(C$.c$$java_util_NavigableSet,[this.ns.headSet$TE$Z(toElement, inclusive)]);
});

Clazz.newMeth(C$, ['tailSet$TE$Z'], function (fromElement, inclusive) {
return Clazz.new_(C$.c$$java_util_NavigableSet,[this.ns.tailSet$TE$Z(fromElement, inclusive)]);
});
;
(function(){var C$=Clazz.newClass(P$.Collections.UnmodifiableNavigableSet, "EmptyNavigableSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.UnmodifiableNavigableSet'], 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$java_util_NavigableSet.apply(this, [Clazz.new_($I$(1))]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'readResolve', function () {
return $I$(2).EMPTY_NAVIGABLE_SET;
}, p$1);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "UnmodifiableList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.UnmodifiableCollection'], 'java.util.List');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.list=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (list) {
C$.superclazz.c$$java_util_Collection.apply(this, [list]);
C$.$init$.apply(this);
this.list=list;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
return o === this  || this.list.equals$O(o) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.list.hashCode$();
});

Clazz.newMeth(C$, 'get$I', function (index) {
return this.list.get$I(index);
});

Clazz.newMeth(C$, 'set$I$TE', function (index, element) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'add$I$TE', function (index, element) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$I', function (index) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
return this.list.indexOf$O(o);
});

Clazz.newMeth(C$, 'lastIndexOf$O', function (o) {
return this.list.lastIndexOf$O(o);
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (index, c) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_UnaryOperator', function (operator) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'sort$java_util_Comparator', function (c) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'listIterator$', function () {
return this.listIterator$I(0);
});

Clazz.newMeth(C$, 'listIterator$I', function (index) {
return ((P$.Collections$UnmodifiableList$1||
(function(){var C$=Clazz.newClass(P$, "Collections$UnmodifiableList$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.ListIterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.i=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.i=this.b$['java.util.Collections.UnmodifiableList'].list.listIterator$I(this.$finals$.index);
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.i.next$();
});

Clazz.newMeth(C$, 'hasPrevious$', function () {
return this.i.hasPrevious$();
});

Clazz.newMeth(C$, 'previous$', function () {
return this.i.previous$();
});

Clazz.newMeth(C$, 'nextIndex$', function () {
return this.i.nextIndex$();
});

Clazz.newMeth(C$, 'previousIndex$', function () {
return this.i.previousIndex$();
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['set$TE'], function (e) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (action) {
this.i.forEachRemaining$java_util_function_Consumer(action);
});
})()
), Clazz.new_(P$.Collections$UnmodifiableList$1.$init$, [this, {index: index}]));
});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
return Clazz.new_(C$.c$$java_util_List,[this.list.subList$I$I(fromIndex, toIndex)]);
});

Clazz.newMeth(C$, 'readResolve', function () {
return (Clazz.instanceOf(this.list, "java.util.RandomAccess") ? Clazz.new_($I$(4).c$$java_util_List,[this.list]) : this);
}, p$2);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "UnmodifiableRandomAccessList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.UnmodifiableList'], 'java.util.RandomAccess');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (list) {
C$.superclazz.c$$java_util_List.apply(this, [list]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
return Clazz.new_(C$.c$$java_util_List,[this.list.subList$I$I(fromIndex, toIndex)]);
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(5).c$$java_util_List,[this.list]);
}, p$3);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "UnmodifiableMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.Map', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.m=null;
this.keySet=null;
this.entrySet=null;
this.values=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (m) {
C$.$init$.apply(this);
if (m == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.m=m;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.m.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.m.isEmpty$();
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
return this.m.containsKey$O(key);
});

Clazz.newMeth(C$, 'containsValue$O', function (val) {
return this.m.containsValue$O(val);
});

Clazz.newMeth(C$, 'get$O', function (key) {
return this.m.get$O(key);
});

Clazz.newMeth(C$, ['put$TK$TV'], function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$O', function (key) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (m) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clear$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'keySet$', function () {
if (this.keySet == null ) this.keySet=P$.Collections.unmodifiableSet$java_util_Set(this.m.keySet$());
return this.keySet;
});

Clazz.newMeth(C$, 'entrySet$', function () {
if (this.entrySet == null ) this.entrySet=Clazz.new_($I$(11).c$$java_util_Set,[this.m.entrySet$()]);
return this.entrySet;
});

Clazz.newMeth(C$, 'values$', function () {
if (this.values == null ) this.values=P$.Collections.unmodifiableCollection$java_util_Collection(this.m.values$());
return this.values;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return o === this  || this.m.equals$O(o) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.m.hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.m.toString();
});

Clazz.newMeth(C$, ['getOrDefault$O$TV'], function (k, defaultValue) {
return (this.m).getOrDefault$O$TV(k, defaultValue);
});

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer', function (action) {
this.m.forEach$java_util_function_BiConsumer(action);
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction', function ($function) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['putIfAbsent$TK$TV'], function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$O$O', function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['replace$TK$TV$TV'], function (key, oldValue, newValue) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['replace$TK$TV'], function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['computeIfAbsent$TK$java_util_function_Function'], function (key, mappingFunction) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['computeIfPresent$TK$java_util_function_BiFunction'], function (key, remappingFunction) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['compute$TK$java_util_function_BiFunction'], function (key, remappingFunction) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['merge$TK$TV$java_util_function_BiFunction'], function (key, value, remappingFunction) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
;
(function(){var C$=Clazz.newClass(P$.Collections.UnmodifiableMap, "UnmodifiableEntrySet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.UnmodifiableSet']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Set', function (s) {
C$.superclazz.c$$java_util_Set.apply(this, [s]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['entryConsumer$java_util_function_Consumer'], function (action) {
return ((P$.Collections$UnmodifiableMap$UnmodifiableEntrySet$lambda1||
(function(){var C$=Clazz.newClass(P$, "Collections$UnmodifiableMap$UnmodifiableEntrySet$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (e) { return (this.$finals$.action.accept$(Clazz.new_($I$(7).c$$java_util_Map_Entry,[e])));});
})()
), Clazz.new_(P$.Collections$UnmodifiableMap$UnmodifiableEntrySet$lambda1.$init$, [this, {action: action}]));
}, 1);

Clazz.newMeth(C$, ['forEach$java_util_function_Consumer'], function (action) {
$I$(6).requireNonNull$TT(action);
this.c.forEach$java_util_function_Consumer(C$.entryConsumer$java_util_function_Consumer(action));
});

Clazz.newMeth(C$, 'spliterator$', function () {
return Clazz.new_($I$(8).c$$java_util_Spliterator,[this.c.spliterator$()]);
});

Clazz.newMeth(C$, 'stream$', function () {
return $I$(9).stream$java_util_Spliterator$Z(this.spliterator$(), false);
});

Clazz.newMeth(C$, 'parallelStream$', function () {
return $I$(9).stream$java_util_Spliterator$Z(this.spliterator$(), true);
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.Collections$UnmodifiableMap$UnmodifiableEntrySet$1||
(function(){var C$=Clazz.newClass(P$, "Collections$UnmodifiableMap$UnmodifiableEntrySet$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.i=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.i=this.b$['java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet'].c.iterator$();
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
return Clazz.new_($I$(7).c$$java_util_Map_Entry,[this.i.next$()]);
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.Collections$UnmodifiableMap$UnmodifiableEntrySet$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'toArray$', function () {
var a=this.c.toArray$();
for (var i=0; i < a.length; i++) a[i]=Clazz.new_($I$(7).c$$java_util_Map_Entry,[a[i]]);

return a;
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
var arr=this.c.toArray$TTA(a.length == 0 ? a : $I$(10).copyOf$TTA$I(a, 0));
for (var i=0; i < arr.length; i++) arr[i]=Clazz.new_($I$(7).c$$java_util_Map_Entry,[arr[i]]);

if (arr.length > a.length) return arr;
System.arraycopy$O$I$O$I$I(arr, 0, a, 0, arr.length);
if (a.length > arr.length) a[arr.length]=null;
return a;
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
return this.c.contains$O(Clazz.new_($I$(7).c$$java_util_Map_Entry,[o]));
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (coll) {
for (var e, $e = coll.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if (!this.contains$O(e)) return false;
}
return true;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o === this ) return true;
if (!(Clazz.instanceOf(o, "java.util.Set"))) return false;
var s=o;
if (s.size$() != this.c.size$()) return false;
return this.containsAll$java_util_Collection(s);
});
;
(function(){var C$=Clazz.newClass(P$.Collections.UnmodifiableMap.UnmodifiableEntrySet, "UnmodifiableEntrySetSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.s=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_Spliterator'], function (s) {
C$.$init$.apply(this);
this.s=s;
}, 1);

Clazz.newMeth(C$, ['tryAdvance$java_util_function_Consumer'], function (action) {
$I$(6).requireNonNull$TT(action);
return this.s.tryAdvance$java_util_function_Consumer(P$.Collections.UnmodifiableMap.UnmodifiableEntrySet.entryConsumer$java_util_function_Consumer(action));
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer'], function (action) {
$I$(6).requireNonNull$TT(action);
this.s.forEachRemaining$java_util_function_Consumer(P$.Collections.UnmodifiableMap.UnmodifiableEntrySet.entryConsumer$java_util_function_Consumer(action));
});

Clazz.newMeth(C$, 'trySplit$', function () {
var split=this.s.trySplit$();
return split == null  ? null : Clazz.new_(C$.c$$java_util_Spliterator,[split]);
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return this.s.estimateSize$();
});

Clazz.newMeth(C$, 'getExactSizeIfKnown$', function () {
return this.s.getExactSizeIfKnown$();
});

Clazz.newMeth(C$, 'characteristics$', function () {
return this.s.characteristics$();
});

Clazz.newMeth(C$, 'hasCharacteristics$I', function (characteristics) {
return this.s.hasCharacteristics$I(characteristics);
});

Clazz.newMeth(C$, 'getComparator$', function () {
return this.s.getComparator$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections.UnmodifiableMap.UnmodifiableEntrySet, "UnmodifiableEntry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Map','java.util.Map.Entry']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.e=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map_Entry', function (e) {
C$.$init$.apply(this);
this.e=$I$(6).requireNonNull$TT(e);
}, 1);

Clazz.newMeth(C$, 'getKey$', function () {
return this.e.getKey$();
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.e.getValue$();
});

Clazz.newMeth(C$, ['setValue$TV'], function (value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.e.hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) return true;
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var t=o;
return P$.Collections.eq$O$O(this.e.getKey$(), t.getKey$()) && P$.Collections.eq$O$O(this.e.getValue$(), t.getValue$()) ;
});

Clazz.newMeth(C$, 'toString', function () {
return this.e.toString();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "UnmodifiableSortedMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.UnmodifiableMap'], ['java.util.SortedMap', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sm=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SortedMap', function (m) {
C$.superclazz.c$$java_util_Map.apply(this, [m]);
C$.$init$.apply(this);
this.sm=m;
}, 1);

Clazz.newMeth(C$, 'comparator$', function () {
return this.sm.comparator$();
});

Clazz.newMeth(C$, ['subMap$TK$TK'], function (fromKey, toKey) {
return Clazz.new_(C$.c$$java_util_SortedMap,[this.sm.subMap$TK$TK(fromKey, toKey)]);
});

Clazz.newMeth(C$, ['headMap$TK'], function (toKey) {
return Clazz.new_(C$.c$$java_util_SortedMap,[this.sm.headMap$TK(toKey)]);
});

Clazz.newMeth(C$, ['tailMap$TK'], function (fromKey) {
return Clazz.new_(C$.c$$java_util_SortedMap,[this.sm.tailMap$TK(fromKey)]);
});

Clazz.newMeth(C$, 'firstKey$', function () {
return this.sm.firstKey$();
});

Clazz.newMeth(C$, 'lastKey$', function () {
return this.sm.lastKey$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "UnmodifiableNavigableMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.UnmodifiableSortedMap'], ['java.util.NavigableMap', 'java.io.Serializable']);
C$.EMPTY_NAVIGABLE_MAP=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.EMPTY_NAVIGABLE_MAP=Clazz.new_($I$(14));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nm=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_NavigableMap', function (m) {
C$.superclazz.c$$java_util_SortedMap.apply(this, [m]);
C$.$init$.apply(this);
this.nm=m;
}, 1);

Clazz.newMeth(C$, ['lowerKey$TK'], function (key) {
return this.nm.lowerKey$TK(key);
});

Clazz.newMeth(C$, ['floorKey$TK'], function (key) {
return this.nm.floorKey$TK(key);
});

Clazz.newMeth(C$, ['ceilingKey$TK'], function (key) {
return this.nm.ceilingKey$TK(key);
});

Clazz.newMeth(C$, ['higherKey$TK'], function (key) {
return this.nm.higherKey$TK(key);
});

Clazz.newMeth(C$, ['lowerEntry$TK'], function (key) {
var lower=this.nm.lowerEntry$TK(key);
return (null != lower ) ? Clazz.new_($I$(7).c$$java_util_Map_Entry,[lower]) : null;
});

Clazz.newMeth(C$, ['floorEntry$TK'], function (key) {
var floor=this.nm.floorEntry$TK(key);
return (null != floor ) ? Clazz.new_($I$(7).c$$java_util_Map_Entry,[floor]) : null;
});

Clazz.newMeth(C$, ['ceilingEntry$TK'], function (key) {
var ceiling=this.nm.ceilingEntry$TK(key);
return (null != ceiling ) ? Clazz.new_($I$(7).c$$java_util_Map_Entry,[ceiling]) : null;
});

Clazz.newMeth(C$, ['higherEntry$TK'], function (key) {
var higher=this.nm.higherEntry$TK(key);
return (null != higher ) ? Clazz.new_($I$(7).c$$java_util_Map_Entry,[higher]) : null;
});

Clazz.newMeth(C$, 'firstEntry$', function () {
var first=this.nm.firstEntry$();
return (null != first ) ? Clazz.new_($I$(7).c$$java_util_Map_Entry,[first]) : null;
});

Clazz.newMeth(C$, 'lastEntry$', function () {
var last=this.nm.lastEntry$();
return (null != last ) ? Clazz.new_($I$(7).c$$java_util_Map_Entry,[last]) : null;
});

Clazz.newMeth(C$, 'pollFirstEntry$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'pollLastEntry$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'descendingMap$', function () {
return P$.Collections.unmodifiableNavigableMap$java_util_NavigableMap(this.nm.descendingMap$());
});

Clazz.newMeth(C$, 'navigableKeySet$', function () {
return P$.Collections.unmodifiableNavigableSet$java_util_NavigableSet(this.nm.navigableKeySet$());
});

Clazz.newMeth(C$, 'descendingKeySet$', function () {
return P$.Collections.unmodifiableNavigableSet$java_util_NavigableSet(this.nm.descendingKeySet$());
});

Clazz.newMeth(C$, ['subMap$TK$Z$TK$Z'], function (fromKey, fromInclusive, toKey, toInclusive) {
return P$.Collections.unmodifiableNavigableMap$java_util_NavigableMap(this.nm.subMap$TK$Z$TK$Z(fromKey, fromInclusive, toKey, toInclusive));
});

Clazz.newMeth(C$, ['headMap$TK$Z'], function (toKey, inclusive) {
return P$.Collections.unmodifiableNavigableMap$java_util_NavigableMap(this.nm.headMap$TK$Z(toKey, inclusive));
});

Clazz.newMeth(C$, ['tailMap$TK$Z'], function (fromKey, inclusive) {
return P$.Collections.unmodifiableNavigableMap$java_util_NavigableMap(this.nm.tailMap$TK$Z(fromKey, inclusive));
});
;
(function(){var C$=Clazz.newClass(P$.Collections.UnmodifiableNavigableMap, "EmptyNavigableMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.UnmodifiableNavigableMap'], 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$java_util_NavigableMap.apply(this, [Clazz.new_($I$(12))]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'navigableKeySet$', function () {
return P$.Collections.emptyNavigableSet$();
});

Clazz.newMeth(C$, 'readResolve', function () {
return $I$(13).EMPTY_NAVIGABLE_MAP;
}, p$4);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "SynchronizedCollection", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.Collection', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.c=null;
this.mutex=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
C$.$init$.apply(this);
this.c=$I$(6).requireNonNull$TT(c);
this.mutex=this;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection$O', function (c, mutex) {
C$.$init$.apply(this);
this.c=$I$(6).requireNonNull$TT(c);
this.mutex=$I$(6).requireNonNull$TT(mutex);
}, 1);

Clazz.newMeth(C$, 'size$', function () {
{
return this.c.size$();
}});

Clazz.newMeth(C$, 'isEmpty$', function () {
{
return this.c.isEmpty$();
}});

Clazz.newMeth(C$, 'contains$O', function (o) {
{
return this.c.contains$O(o);
}});

Clazz.newMeth(C$, 'toArray$', function () {
{
return this.c.toArray$();
}});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
{
return this.c.toArray$TTA(a);
}});

Clazz.newMeth(C$, 'iterator$', function () {
return this.c.iterator$();
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
{
return this.c.add$TE(e);
}});

Clazz.newMeth(C$, 'remove$O', function (o) {
{
return this.c.remove$O(o);
}});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (coll) {
{
return this.c.containsAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (coll) {
{
return this.c.addAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (coll) {
{
return this.c.removeAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (coll) {
{
return this.c.retainAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'clear$', function () {
{
this.c.clear$();
}});

Clazz.newMeth(C$, 'toString', function () {
{
return this.c.toString();
}});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (consumer) {
{
this.c.forEach$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate', function (filter) {
{
return this.c.removeIf$java_util_function_Predicate(filter);
}});

Clazz.newMeth(C$, 'spliterator$', function () {
return this.c.spliterator$();
});

Clazz.newMeth(C$, 'stream$', function () {
return this.c.stream$();
});

Clazz.newMeth(C$, 'parallelStream$', function () {
return this.c.parallelStream$();
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
{
s.defaultWriteObject$();
}}, p$5);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "SynchronizedSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.SynchronizedCollection'], 'java.util.Set');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Set', function (s) {
C$.superclazz.c$$java_util_Collection.apply(this, [s]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Set$O', function (s, mutex) {
C$.superclazz.c$$java_util_Collection$O.apply(this, [s, mutex]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) return true;
{
return this.c.equals$O(o);
}});

Clazz.newMeth(C$, 'hashCode$', function () {
{
return this.c.hashCode$();
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "SynchronizedSortedSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.SynchronizedSet'], 'java.util.SortedSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ss=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SortedSet', function (s) {
C$.superclazz.c$$java_util_Set.apply(this, [s]);
C$.$init$.apply(this);
this.ss=s;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SortedSet$O', function (s, mutex) {
C$.superclazz.c$$java_util_Set$O.apply(this, [s, mutex]);
C$.$init$.apply(this);
this.ss=s;
}, 1);

Clazz.newMeth(C$, 'comparator$', function () {
{
return this.ss.comparator$();
}});

Clazz.newMeth(C$, ['subSet$TE$TE'], function (fromElement, toElement) {
{
return Clazz.new_(C$.c$$java_util_SortedSet$O,[this.ss.subSet$TE$TE(fromElement, toElement), this.mutex]);
}});

Clazz.newMeth(C$, ['headSet$TE'], function (toElement) {
{
return Clazz.new_(C$.c$$java_util_SortedSet$O,[this.ss.headSet$TE(toElement), this.mutex]);
}});

Clazz.newMeth(C$, ['tailSet$TE'], function (fromElement) {
{
return Clazz.new_(C$.c$$java_util_SortedSet$O,[this.ss.tailSet$TE(fromElement), this.mutex]);
}});

Clazz.newMeth(C$, 'first$', function () {
{
return this.ss.first$();
}});

Clazz.newMeth(C$, 'last$', function () {
{
return this.ss.last$();
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "SynchronizedNavigableSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.SynchronizedSortedSet'], 'java.util.NavigableSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ns=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_NavigableSet', function (s) {
C$.superclazz.c$$java_util_SortedSet.apply(this, [s]);
C$.$init$.apply(this);
this.ns=s;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_NavigableSet$O', function (s, mutex) {
C$.superclazz.c$$java_util_SortedSet$O.apply(this, [s, mutex]);
C$.$init$.apply(this);
this.ns=s;
}, 1);

Clazz.newMeth(C$, ['lower$TE'], function (e) {
{
return this.ns.lower$TE(e);
}});

Clazz.newMeth(C$, ['floor$TE'], function (e) {
{
return this.ns.floor$TE(e);
}});

Clazz.newMeth(C$, ['ceiling$TE'], function (e) {
{
return this.ns.ceiling$TE(e);
}});

Clazz.newMeth(C$, ['higher$TE'], function (e) {
{
return this.ns.higher$TE(e);
}});

Clazz.newMeth(C$, 'pollFirst$', function () {
{
return this.ns.pollFirst$();
}});

Clazz.newMeth(C$, 'pollLast$', function () {
{
return this.ns.pollLast$();
}});

Clazz.newMeth(C$, 'descendingSet$', function () {
{
return Clazz.new_(C$.c$$java_util_NavigableSet$O,[this.ns.descendingSet$(), this.mutex]);
}});

Clazz.newMeth(C$, 'descendingIterator$', function () {
{
return this.descendingSet$().iterator$();
}});

Clazz.newMeth(C$, ['subSet$TE$TE'], function (fromElement, toElement) {
{
return Clazz.new_(C$.c$$java_util_NavigableSet$O,[this.ns.subSet$TE$Z$TE$Z(fromElement, true, toElement, false), this.mutex]);
}});

Clazz.newMeth(C$, ['headSet$TE'], function (toElement) {
{
return Clazz.new_(C$.c$$java_util_NavigableSet$O,[this.ns.headSet$TE$Z(toElement, false), this.mutex]);
}});

Clazz.newMeth(C$, ['tailSet$TE'], function (fromElement) {
{
return Clazz.new_(C$.c$$java_util_NavigableSet$O,[this.ns.tailSet$TE$Z(fromElement, true), this.mutex]);
}});

Clazz.newMeth(C$, ['subSet$TE$Z$TE$Z'], function (fromElement, fromInclusive, toElement, toInclusive) {
{
return Clazz.new_(C$.c$$java_util_NavigableSet$O,[this.ns.subSet$TE$Z$TE$Z(fromElement, fromInclusive, toElement, toInclusive), this.mutex]);
}});

Clazz.newMeth(C$, ['headSet$TE$Z'], function (toElement, inclusive) {
{
return Clazz.new_(C$.c$$java_util_NavigableSet$O,[this.ns.headSet$TE$Z(toElement, inclusive), this.mutex]);
}});

Clazz.newMeth(C$, ['tailSet$TE$Z'], function (fromElement, inclusive) {
{
return Clazz.new_(C$.c$$java_util_NavigableSet$O,[this.ns.tailSet$TE$Z(fromElement, inclusive), this.mutex]);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "SynchronizedList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.SynchronizedCollection'], 'java.util.List');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.list=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (list) {
C$.superclazz.c$$java_util_Collection.apply(this, [list]);
C$.$init$.apply(this);
this.list=list;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$O', function (list, mutex) {
C$.superclazz.c$$java_util_Collection$O.apply(this, [list, mutex]);
C$.$init$.apply(this);
this.list=list;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) return true;
{
return this.list.equals$O(o);
}});

Clazz.newMeth(C$, 'hashCode$', function () {
{
return this.list.hashCode$();
}});

Clazz.newMeth(C$, 'get$I', function (index) {
{
return this.list.get$I(index);
}});

Clazz.newMeth(C$, 'set$I$TE', function (index, element) {
{
return this.list.set$I$TE(index, element);
}});

Clazz.newMeth(C$, 'add$I$TE', function (index, element) {
{
this.list.add$I$TE(index, element);
}});

Clazz.newMeth(C$, 'remove$I', function (index) {
{
return this.list.remove$I(index);
}});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
{
return this.list.indexOf$O(o);
}});

Clazz.newMeth(C$, 'lastIndexOf$O', function (o) {
{
return this.list.lastIndexOf$O(o);
}});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (index, c) {
{
return this.list.addAll$I$java_util_Collection(index, c);
}});

Clazz.newMeth(C$, 'listIterator$', function () {
return this.list.listIterator$();
});

Clazz.newMeth(C$, 'listIterator$I', function (index) {
return this.list.listIterator$I(index);
});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
{
return Clazz.new_(C$.c$$java_util_List$O,[this.list.subList$I$I(fromIndex, toIndex), this.mutex]);
}});

Clazz.newMeth(C$, 'replaceAll$java_util_function_UnaryOperator', function (operator) {
{
this.list.replaceAll$java_util_function_UnaryOperator(operator);
}});

Clazz.newMeth(C$, 'sort$java_util_Comparator', function (c) {
{
this.list.sort$java_util_Comparator(c);
}});

Clazz.newMeth(C$, 'readResolve', function () {
return (Clazz.instanceOf(this.list, "java.util.RandomAccess") ? Clazz.new_($I$(15).c$$java_util_List,[this.list]) : this);
}, p$6);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "SynchronizedRandomAccessList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.SynchronizedList'], 'java.util.RandomAccess');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (list) {
C$.superclazz.c$$java_util_List.apply(this, [list]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$O', function (list, mutex) {
C$.superclazz.c$$java_util_List$O.apply(this, [list, mutex]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
{
return Clazz.new_(C$.c$$java_util_List$O,[this.list.subList$I$I(fromIndex, toIndex), this.mutex]);
}});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(16).c$$java_util_List,[this.list]);
}, p$7);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "SynchronizedMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.Map', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.m=null;
this.mutex=null;
this.keySet=null;
this.entrySet=null;
this.values=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_Map'], function (m) {
C$.$init$.apply(this);
this.m=$I$(6).requireNonNull$TT(m);
this.mutex=this;
}, 1);

Clazz.newMeth(C$, ['c$$java_util_Map$O'], function (m, mutex) {
C$.$init$.apply(this);
this.m=m;
this.mutex=mutex;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
{
return this.m.size$();
}});

Clazz.newMeth(C$, 'isEmpty$', function () {
{
return this.m.isEmpty$();
}});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
{
return this.m.containsKey$O(key);
}});

Clazz.newMeth(C$, 'containsValue$O', function (value) {
{
return this.m.containsValue$O(value);
}});

Clazz.newMeth(C$, 'get$O', function (key) {
{
return this.m.get$O(key);
}});

Clazz.newMeth(C$, ['put$TK$TV'], function (key, value) {
{
return this.m.put$TK$TV(key, value);
}});

Clazz.newMeth(C$, 'remove$O', function (key) {
{
return this.m.remove$O(key);
}});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
{
this.m.putAll$java_util_Map(map);
}});

Clazz.newMeth(C$, 'clear$', function () {
{
this.m.clear$();
}});

Clazz.newMeth(C$, 'keySet$', function () {
{
if (this.keySet == null ) this.keySet=Clazz.new_($I$(17).c$$java_util_Set$O,[this.m.keySet$(), this.mutex]);
return this.keySet;
}});

Clazz.newMeth(C$, 'entrySet$', function () {
{
if (this.entrySet == null ) this.entrySet=Clazz.new_($I$(17).c$$java_util_Set$O,[this.m.entrySet$(), this.mutex]);
return this.entrySet;
}});

Clazz.newMeth(C$, 'values$', function () {
{
if (this.values == null ) this.values=Clazz.new_($I$(18).c$$java_util_Collection$O,[this.m.values$(), this.mutex]);
return this.values;
}});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) return true;
{
return this.m.equals$O(o);
}});

Clazz.newMeth(C$, 'hashCode$', function () {
{
return this.m.hashCode$();
}});

Clazz.newMeth(C$, 'toString', function () {
{
return this.m.toString();
}});

Clazz.newMeth(C$, ['getOrDefault$O$TV'], function (k, defaultValue) {
{
return this.m.getOrDefault$O$TV(k, defaultValue);
}});

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer', function (action) {
{
this.m.forEach$java_util_function_BiConsumer(action);
}});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction', function ($function) {
{
this.m.replaceAll$java_util_function_BiFunction($function);
}});

Clazz.newMeth(C$, ['putIfAbsent$TK$TV'], function (key, value) {
{
return this.m.putIfAbsent$TK$TV(key, value);
}});

Clazz.newMeth(C$, 'remove$O$O', function (key, value) {
{
return this.m.remove$O$O(key, value);
}});

Clazz.newMeth(C$, ['replace$TK$TV$TV'], function (key, oldValue, newValue) {
{
return this.m.replace$TK$TV$TV(key, oldValue, newValue);
}});

Clazz.newMeth(C$, ['replace$TK$TV'], function (key, value) {
{
return this.m.replace$TK$TV(key, value);
}});

Clazz.newMeth(C$, ['computeIfAbsent$TK$java_util_function_Function'], function (key, mappingFunction) {
{
return this.m.computeIfAbsent$TK$java_util_function_Function(key, mappingFunction);
}});

Clazz.newMeth(C$, ['computeIfPresent$TK$java_util_function_BiFunction'], function (key, remappingFunction) {
{
return this.m.computeIfPresent$TK$java_util_function_BiFunction(key, remappingFunction);
}});

Clazz.newMeth(C$, ['compute$TK$java_util_function_BiFunction'], function (key, remappingFunction) {
{
return this.m.compute$TK$java_util_function_BiFunction(key, remappingFunction);
}});

Clazz.newMeth(C$, ['merge$TK$TV$java_util_function_BiFunction'], function (key, value, remappingFunction) {
{
return this.m.merge$TK$TV$java_util_function_BiFunction(key, value, remappingFunction);
}});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
{
s.defaultWriteObject$();
}}, p$8);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "SynchronizedSortedMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.SynchronizedMap'], 'java.util.SortedMap');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sm=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_SortedMap'], function (m) {
C$.superclazz.c$$java_util_Map.apply(this, [m]);
C$.$init$.apply(this);
this.sm=m;
}, 1);

Clazz.newMeth(C$, ['c$$java_util_SortedMap$O'], function (m, mutex) {
C$.superclazz.c$$java_util_Map$O.apply(this, [m, mutex]);
C$.$init$.apply(this);
this.sm=m;
}, 1);

Clazz.newMeth(C$, 'comparator$', function () {
{
return this.sm.comparator$();
}});

Clazz.newMeth(C$, ['subMap$TK$TK'], function (fromKey, toKey) {
{
return Clazz.new_(C$.c$$java_util_SortedMap$O,[this.sm.subMap$TK$TK(fromKey, toKey), this.mutex]);
}});

Clazz.newMeth(C$, ['headMap$TK'], function (toKey) {
{
return Clazz.new_(C$.c$$java_util_SortedMap$O,[this.sm.headMap$TK(toKey), this.mutex]);
}});

Clazz.newMeth(C$, ['tailMap$TK'], function (fromKey) {
{
return Clazz.new_(C$.c$$java_util_SortedMap$O,[this.sm.tailMap$TK(fromKey), this.mutex]);
}});

Clazz.newMeth(C$, 'firstKey$', function () {
{
return this.sm.firstKey$();
}});

Clazz.newMeth(C$, 'lastKey$', function () {
{
return this.sm.lastKey$();
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "SynchronizedNavigableMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.SynchronizedSortedMap'], 'java.util.NavigableMap');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nm=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_NavigableMap'], function (m) {
C$.superclazz.c$$java_util_SortedMap.apply(this, [m]);
C$.$init$.apply(this);
this.nm=m;
}, 1);

Clazz.newMeth(C$, ['c$$java_util_NavigableMap$O'], function (m, mutex) {
C$.superclazz.c$$java_util_SortedMap$O.apply(this, [m, mutex]);
C$.$init$.apply(this);
this.nm=m;
}, 1);

Clazz.newMeth(C$, ['lowerEntry$TK'], function (key) {
{
return this.nm.lowerEntry$TK(key);
}});

Clazz.newMeth(C$, ['lowerKey$TK'], function (key) {
{
return this.nm.lowerKey$TK(key);
}});

Clazz.newMeth(C$, ['floorEntry$TK'], function (key) {
{
return this.nm.floorEntry$TK(key);
}});

Clazz.newMeth(C$, ['floorKey$TK'], function (key) {
{
return this.nm.floorKey$TK(key);
}});

Clazz.newMeth(C$, ['ceilingEntry$TK'], function (key) {
{
return this.nm.ceilingEntry$TK(key);
}});

Clazz.newMeth(C$, ['ceilingKey$TK'], function (key) {
{
return this.nm.ceilingKey$TK(key);
}});

Clazz.newMeth(C$, ['higherEntry$TK'], function (key) {
{
return this.nm.higherEntry$TK(key);
}});

Clazz.newMeth(C$, ['higherKey$TK'], function (key) {
{
return this.nm.higherKey$TK(key);
}});

Clazz.newMeth(C$, 'firstEntry$', function () {
{
return this.nm.firstEntry$();
}});

Clazz.newMeth(C$, 'lastEntry$', function () {
{
return this.nm.lastEntry$();
}});

Clazz.newMeth(C$, 'pollFirstEntry$', function () {
{
return this.nm.pollFirstEntry$();
}});

Clazz.newMeth(C$, 'pollLastEntry$', function () {
{
return this.nm.pollLastEntry$();
}});

Clazz.newMeth(C$, 'descendingMap$', function () {
{
return Clazz.new_(C$.c$$java_util_NavigableMap$O,[this.nm.descendingMap$(), this.mutex]);
}});

Clazz.newMeth(C$, 'keySet$', function () {
return this.navigableKeySet$();
});

Clazz.newMeth(C$, 'navigableKeySet$', function () {
{
return Clazz.new_($I$(19).c$$java_util_NavigableSet$O,[this.nm.navigableKeySet$(), this.mutex]);
}});

Clazz.newMeth(C$, 'descendingKeySet$', function () {
{
return Clazz.new_($I$(19).c$$java_util_NavigableSet$O,[this.nm.descendingKeySet$(), this.mutex]);
}});

Clazz.newMeth(C$, ['subMap$TK$TK'], function (fromKey, toKey) {
{
return Clazz.new_(C$.c$$java_util_NavigableMap$O,[this.nm.subMap$TK$Z$TK$Z(fromKey, true, toKey, false), this.mutex]);
}});

Clazz.newMeth(C$, ['headMap$TK'], function (toKey) {
{
return Clazz.new_(C$.c$$java_util_NavigableMap$O,[this.nm.headMap$TK$Z(toKey, false), this.mutex]);
}});

Clazz.newMeth(C$, ['tailMap$TK'], function (fromKey) {
{
return Clazz.new_(C$.c$$java_util_NavigableMap$O,[this.nm.tailMap$TK$Z(fromKey, true), this.mutex]);
}});

Clazz.newMeth(C$, ['subMap$TK$Z$TK$Z'], function (fromKey, fromInclusive, toKey, toInclusive) {
{
return Clazz.new_(C$.c$$java_util_NavigableMap$O,[this.nm.subMap$TK$Z$TK$Z(fromKey, fromInclusive, toKey, toInclusive), this.mutex]);
}});

Clazz.newMeth(C$, ['headMap$TK$Z'], function (toKey, inclusive) {
{
return Clazz.new_(C$.c$$java_util_NavigableMap$O,[this.nm.headMap$TK$Z(toKey, inclusive), this.mutex]);
}});

Clazz.newMeth(C$, ['tailMap$TK$Z'], function (fromKey, inclusive) {
{
return Clazz.new_(C$.c$$java_util_NavigableMap$O,[this.nm.tailMap$TK$Z(fromKey, inclusive), this.mutex]);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "CheckedCollection", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.Collection', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.c=null;
this.type=null;
this.zeroLengthElementArray=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'typeCheck$O', function (o) {
if (o != null  && !this.type.isInstance$O(o) ) throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[p$9.badElementMsg$O.apply(this, [o])]);
return o;
});

Clazz.newMeth(C$, 'badElementMsg$O', function (o) {
return "Attempt to insert " + o.getClass$() + " element into collection with element type " + this.type ;
}, p$9);

Clazz.newMeth(C$, 'c$$java_util_Collection$Class', function (c, type) {
C$.$init$.apply(this);
this.c=$I$(6).requireNonNull$TT$S(c, "c");
this.type=$I$(6).requireNonNull$TT$S(type, "type");
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.c.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.c.isEmpty$();
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.c.contains$O(o);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.c.toArray$();
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
return this.c.toArray$TTA(a);
});

Clazz.newMeth(C$, 'toString', function () {
return this.c.toString();
});

Clazz.newMeth(C$, 'remove$O', function (o) {
return this.c.remove$O(o);
});

Clazz.newMeth(C$, 'clear$', function () {
this.c.clear$();
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (coll) {
return this.c.containsAll$java_util_Collection(coll);
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (coll) {
return this.c.removeAll$java_util_Collection(coll);
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (coll) {
return this.c.retainAll$java_util_Collection(coll);
});

Clazz.newMeth(C$, 'iterator$', function () {
var it=this.c.iterator$();
return ((P$.Collections$CheckedCollection$1||
(function(){var C$=Clazz.newClass(P$, "Collections$CheckedCollection$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.$finals$.it.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.$finals$.it.next$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.$finals$.it.remove$();
});
})()
), Clazz.new_(P$.Collections$CheckedCollection$1.$init$, [this, {it: it}]));
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
return this.c.add$TE(this.typeCheck$O(e));
});

Clazz.newMeth(C$, 'zeroLengthElementArray', function () {
return this.zeroLengthElementArray != null  ? this.zeroLengthElementArray : (this.zeroLengthElementArray=P$.Collections.zeroLengthArray$Class(this.type));
}, p$9);

Clazz.newMeth(C$, 'checkedCopyOf$java_util_Collection', function (coll) {
var a;
try {
var z=p$9.zeroLengthElementArray.apply(this, []);
a=coll.toArray$TTA(z);
if (a.getClass$() !== z.getClass$() ) a=$I$(10).copyOf$TUA$I$Class(a, a.length, z.getClass$());
} catch (ignore) {
if (Clazz.exceptionOf(ignore,"ArrayStoreException")){
a=coll.toArray$().clone$();
for (var o, $o = 0, $$o = a; $o<$$o.length&&((o=($$o[$o])),1);$o++) this.typeCheck$O(o);

} else {
throw ignore;
}
}
return $I$(10).asList$TTA(a);
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (coll) {
return this.c.addAll$java_util_Collection(this.checkedCopyOf$java_util_Collection(coll));
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
this.c.forEach$java_util_function_Consumer(action);
});

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate', function (filter) {
return this.c.removeIf$java_util_function_Predicate(filter);
});

Clazz.newMeth(C$, 'spliterator$', function () {
return this.c.spliterator$();
});

Clazz.newMeth(C$, 'stream$', function () {
return this.c.stream$();
});

Clazz.newMeth(C$, 'parallelStream$', function () {
return this.c.parallelStream$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "CheckedQueue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.CheckedCollection'], ['java.util.Queue', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.queue=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Queue$Class', function (queue, elementType) {
C$.superclazz.c$$java_util_Collection$Class.apply(this, [queue, elementType]);
C$.$init$.apply(this);
this.queue=queue;
}, 1);

Clazz.newMeth(C$, 'element$', function () {
return this.queue.element$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return o === this  || this.c.equals$O(o) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.c.hashCode$();
});

Clazz.newMeth(C$, 'peek$', function () {
return this.queue.peek$();
});

Clazz.newMeth(C$, 'poll$', function () {
return this.queue.poll$();
});

Clazz.newMeth(C$, 'remove$', function () {
return this.queue.remove$();
});

Clazz.newMeth(C$, ['offer$TE'], function (e) {
return this.queue.offer$TE(this.typeCheck$O(e));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "CheckedSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.CheckedCollection'], ['java.util.Set', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Set$Class', function (s, elementType) {
C$.superclazz.c$$java_util_Collection$Class.apply(this, [s, elementType]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
return o === this  || this.c.equals$O(o) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.c.hashCode$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "CheckedSortedSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.CheckedSet'], ['java.util.SortedSet', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ss=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SortedSet$Class', function (s, type) {
C$.superclazz.c$$java_util_Set$Class.apply(this, [s, type]);
C$.$init$.apply(this);
this.ss=s;
}, 1);

Clazz.newMeth(C$, 'comparator$', function () {
return this.ss.comparator$();
});

Clazz.newMeth(C$, 'first$', function () {
return this.ss.first$();
});

Clazz.newMeth(C$, 'last$', function () {
return this.ss.last$();
});

Clazz.newMeth(C$, ['subSet$TE$TE'], function (fromElement, toElement) {
return P$.Collections.checkedSortedSet$java_util_SortedSet$Class(this.ss.subSet$TE$TE(fromElement, toElement), this.type);
});

Clazz.newMeth(C$, ['headSet$TE'], function (toElement) {
return P$.Collections.checkedSortedSet$java_util_SortedSet$Class(this.ss.headSet$TE(toElement), this.type);
});

Clazz.newMeth(C$, ['tailSet$TE'], function (fromElement) {
return P$.Collections.checkedSortedSet$java_util_SortedSet$Class(this.ss.tailSet$TE(fromElement), this.type);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "CheckedNavigableSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.CheckedSortedSet'], ['java.util.NavigableSet', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ns=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_NavigableSet$Class', function (s, type) {
C$.superclazz.c$$java_util_SortedSet$Class.apply(this, [s, type]);
C$.$init$.apply(this);
this.ns=s;
}, 1);

Clazz.newMeth(C$, ['lower$TE'], function (e) {
return this.ns.lower$TE(e);
});

Clazz.newMeth(C$, ['floor$TE'], function (e) {
return this.ns.floor$TE(e);
});

Clazz.newMeth(C$, ['ceiling$TE'], function (e) {
return this.ns.ceiling$TE(e);
});

Clazz.newMeth(C$, ['higher$TE'], function (e) {
return this.ns.higher$TE(e);
});

Clazz.newMeth(C$, 'pollFirst$', function () {
return this.ns.pollFirst$();
});

Clazz.newMeth(C$, 'pollLast$', function () {
return this.ns.pollLast$();
});

Clazz.newMeth(C$, 'descendingSet$', function () {
return P$.Collections.checkedNavigableSet$java_util_NavigableSet$Class(this.ns.descendingSet$(), this.type);
});

Clazz.newMeth(C$, 'descendingIterator$', function () {
return P$.Collections.checkedNavigableSet$java_util_NavigableSet$Class(this.ns.descendingSet$(), this.type).iterator$();
});

Clazz.newMeth(C$, ['subSet$TE$TE'], function (fromElement, toElement) {
return P$.Collections.checkedNavigableSet$java_util_NavigableSet$Class(this.ns.subSet$TE$Z$TE$Z(fromElement, true, toElement, false), this.type);
});

Clazz.newMeth(C$, ['headSet$TE'], function (toElement) {
return P$.Collections.checkedNavigableSet$java_util_NavigableSet$Class(this.ns.headSet$TE$Z(toElement, false), this.type);
});

Clazz.newMeth(C$, ['tailSet$TE'], function (fromElement) {
return P$.Collections.checkedNavigableSet$java_util_NavigableSet$Class(this.ns.tailSet$TE$Z(fromElement, true), this.type);
});

Clazz.newMeth(C$, ['subSet$TE$Z$TE$Z'], function (fromElement, fromInclusive, toElement, toInclusive) {
return P$.Collections.checkedNavigableSet$java_util_NavigableSet$Class(this.ns.subSet$TE$Z$TE$Z(fromElement, fromInclusive, toElement, toInclusive), this.type);
});

Clazz.newMeth(C$, ['headSet$TE$Z'], function (toElement, inclusive) {
return P$.Collections.checkedNavigableSet$java_util_NavigableSet$Class(this.ns.headSet$TE$Z(toElement, inclusive), this.type);
});

Clazz.newMeth(C$, ['tailSet$TE$Z'], function (fromElement, inclusive) {
return P$.Collections.checkedNavigableSet$java_util_NavigableSet$Class(this.ns.tailSet$TE$Z(fromElement, inclusive), this.type);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "CheckedList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.CheckedCollection'], 'java.util.List');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.list=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$Class', function (list, type) {
C$.superclazz.c$$java_util_Collection$Class.apply(this, [list, type]);
C$.$init$.apply(this);
this.list=list;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
return o === this  || this.list.equals$O(o) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.list.hashCode$();
});

Clazz.newMeth(C$, 'get$I', function (index) {
return this.list.get$I(index);
});

Clazz.newMeth(C$, 'remove$I', function (index) {
return this.list.remove$I(index);
});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
return this.list.indexOf$O(o);
});

Clazz.newMeth(C$, 'lastIndexOf$O', function (o) {
return this.list.lastIndexOf$O(o);
});

Clazz.newMeth(C$, 'set$I$TE', function (index, element) {
return this.list.set$I$TE(index, this.typeCheck$O(element));
});

Clazz.newMeth(C$, 'add$I$TE', function (index, element) {
this.list.add$I$TE(index, this.typeCheck$O(element));
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (index, c) {
return this.list.addAll$I$java_util_Collection(index, this.checkedCopyOf$java_util_Collection(c));
});

Clazz.newMeth(C$, 'listIterator$', function () {
return this.listIterator$I(0);
});

Clazz.newMeth(C$, 'listIterator$I', function (index) {
var i=this.list.listIterator$I(index);
return ((P$.Collections$CheckedList$1||
(function(){var C$=Clazz.newClass(P$, "Collections$CheckedList$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.ListIterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.$finals$.i.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.$finals$.i.next$();
});

Clazz.newMeth(C$, 'hasPrevious$', function () {
return this.$finals$.i.hasPrevious$();
});

Clazz.newMeth(C$, 'previous$', function () {
return this.$finals$.i.previous$();
});

Clazz.newMeth(C$, 'nextIndex$', function () {
return this.$finals$.i.nextIndex$();
});

Clazz.newMeth(C$, 'previousIndex$', function () {
return this.$finals$.i.previousIndex$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.$finals$.i.remove$();
});

Clazz.newMeth(C$, ['set$TE'], function (e) {
this.$finals$.i.set$TE(this.b$['java.util.Collections.CheckedCollection'].typeCheck$O.apply(this.b$['java.util.Collections.CheckedCollection'], [e]));
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
this.$finals$.i.add$TE(this.b$['java.util.Collections.CheckedCollection'].typeCheck$O.apply(this.b$['java.util.Collections.CheckedCollection'], [e]));
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (action) {
this.$finals$.i.forEachRemaining$java_util_function_Consumer(action);
});
})()
), Clazz.new_(P$.Collections$CheckedList$1.$init$, [this, {i: i}]));
});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
return Clazz.new_(C$.c$$java_util_List$Class,[this.list.subList$I$I(fromIndex, toIndex), this.type]);
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_UnaryOperator', function (operator) {
$I$(6).requireNonNull$TT(operator);
this.list.replaceAll$java_util_function_UnaryOperator(((P$.Collections$CheckedList$lambda1||
(function(){var C$=Clazz.newClass(P$, "Collections$CheckedList$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.UnaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (e) { return (this.b$['java.util.Collections.CheckedCollection'].typeCheck$O.apply(this.b$['java.util.Collections.CheckedCollection'], [this.$finals$.operator.apply$(e)]));});
})()
), Clazz.new_(P$.Collections$CheckedList$lambda1.$init$, [this, {operator: operator}])));
});

Clazz.newMeth(C$, 'sort$java_util_Comparator', function (c) {
this.list.sort$java_util_Comparator(c);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "CheckedRandomAccessList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.CheckedList'], 'java.util.RandomAccess');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$Class', function (list, type) {
C$.superclazz.c$$java_util_List$Class.apply(this, [list, type]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
return Clazz.new_(C$.c$$java_util_List$Class,[this.list.subList$I$I(fromIndex, toIndex), this.type]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "CheckedMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.Map', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.m=null;
this.keyType=null;
this.valueType=null;
this.entrySet=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'typeCheck$O$O', function (key, value) {
if (key != null  && !this.keyType.isInstance$O(key) ) throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[p$12.badKeyMsg$O.apply(this, [key])]);
if (value != null  && !this.valueType.isInstance$O(value) ) throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[p$12.badValueMsg$O.apply(this, [value])]);
}, p$12);

Clazz.newMeth(C$, 'typeCheck$java_util_function_BiFunction', function (func) {
$I$(6).requireNonNull$TT(func);
return ((P$.Collections$CheckedMap$lambda1||
(function(){var C$=Clazz.newClass(P$, "Collections$CheckedMap$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (k, v) {
var newValue=this.$finals$.func.apply$(k, v);
p$12.typeCheck$O$O.apply(this.b$['java.util.Collections.CheckedMap'], [k, newValue]);
return newValue;
});
})()
), Clazz.new_(P$.Collections$CheckedMap$lambda1.$init$, [this, {func: func}]));
}, p$12);

Clazz.newMeth(C$, 'badKeyMsg$O', function (key) {
return "Attempt to insert " + key.getClass$() + " key into map with key type " + this.keyType ;
}, p$12);

Clazz.newMeth(C$, 'badValueMsg$O', function (value) {
return "Attempt to insert " + value.getClass$() + " value into map with value type " + this.valueType ;
}, p$12);

Clazz.newMeth(C$, ['c$$java_util_Map$Class$Class'], function (m, keyType, valueType) {
C$.$init$.apply(this);
this.m=$I$(6).requireNonNull$TT(m);
this.keyType=$I$(6).requireNonNull$TT(keyType);
this.valueType=$I$(6).requireNonNull$TT(valueType);
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.m.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.m.isEmpty$();
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
return this.m.containsKey$O(key);
});

Clazz.newMeth(C$, 'containsValue$O', function (v) {
return this.m.containsValue$O(v);
});

Clazz.newMeth(C$, 'get$O', function (key) {
return this.m.get$O(key);
});

Clazz.newMeth(C$, 'remove$O', function (key) {
return this.m.remove$O(key);
});

Clazz.newMeth(C$, 'clear$', function () {
this.m.clear$();
});

Clazz.newMeth(C$, 'keySet$', function () {
return this.m.keySet$();
});

Clazz.newMeth(C$, 'values$', function () {
return this.m.values$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return o === this  || this.m.equals$O(o) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.m.hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.m.toString();
});

Clazz.newMeth(C$, ['put$TK$TV'], function (key, value) {
p$12.typeCheck$O$O.apply(this, [key, value]);
return this.m.put$TK$TV(key, value);
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (t) {
var entries=t.entrySet$().toArray$();
var checked=Clazz.new_($I$(22).c$$I,[entries.length]);
for (var o, $o = 0, $$o = entries; $o<$$o.length&&((o=($$o[$o])),1);$o++) {
var e=o;
var k=e.getKey$();
var v=e.getValue$();
p$12.typeCheck$O$O.apply(this, [k, v]);
checked.add$TE(Clazz.new_($I$(20).c$$TK$TV,[k, v]));
}
for (var e, $e = checked.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) this.m.put$TK$TV(e.getKey$(), e.getValue$());

});

Clazz.newMeth(C$, 'entrySet$', function () {
if (this.entrySet == null ) this.entrySet=Clazz.new_($I$(23).c$$java_util_Set$Class,[this.m.entrySet$(), this.valueType]);
return this.entrySet;
});

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer', function (action) {
this.m.forEach$java_util_function_BiConsumer(action);
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction', function ($function) {
this.m.replaceAll$java_util_function_BiFunction(p$12.typeCheck$java_util_function_BiFunction.apply(this, [$function]));
});

Clazz.newMeth(C$, ['putIfAbsent$TK$TV'], function (key, value) {
p$12.typeCheck$O$O.apply(this, [key, value]);
return this.m.putIfAbsent$TK$TV(key, value);
});

Clazz.newMeth(C$, 'remove$O$O', function (key, value) {
return this.m.remove$O$O(key, value);
});

Clazz.newMeth(C$, ['replace$TK$TV$TV'], function (key, oldValue, newValue) {
p$12.typeCheck$O$O.apply(this, [key, newValue]);
return this.m.replace$TK$TV$TV(key, oldValue, newValue);
});

Clazz.newMeth(C$, ['replace$TK$TV'], function (key, value) {
p$12.typeCheck$O$O.apply(this, [key, value]);
return this.m.replace$TK$TV(key, value);
});

Clazz.newMeth(C$, ['computeIfAbsent$TK$java_util_function_Function'], function (key, mappingFunction) {
$I$(6).requireNonNull$TT(mappingFunction);
return this.m.computeIfAbsent$TK$java_util_function_Function(key, ((P$.Collections$CheckedMap$lambda2||
(function(){var C$=Clazz.newClass(P$, "Collections$CheckedMap$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (k) {
var value=this.$finals$.mappingFunction.apply$(k);
p$12.typeCheck$O$O.apply(this.b$['java.util.Collections.CheckedMap'], [k, value]);
return value;
});
})()
), Clazz.new_(P$.Collections$CheckedMap$lambda2.$init$, [this, {mappingFunction: mappingFunction}])));
});

Clazz.newMeth(C$, ['computeIfPresent$TK$java_util_function_BiFunction'], function (key, remappingFunction) {
return this.m.computeIfPresent$TK$java_util_function_BiFunction(key, p$12.typeCheck$java_util_function_BiFunction.apply(this, [remappingFunction]));
});

Clazz.newMeth(C$, ['compute$TK$java_util_function_BiFunction'], function (key, remappingFunction) {
return this.m.compute$TK$java_util_function_BiFunction(key, p$12.typeCheck$java_util_function_BiFunction.apply(this, [remappingFunction]));
});

Clazz.newMeth(C$, ['merge$TK$TV$java_util_function_BiFunction'], function (key, value, remappingFunction) {
$I$(6).requireNonNull$TT(remappingFunction);
return this.m.merge$TK$TV$java_util_function_BiFunction(key, value, ((P$.Collections$CheckedMap$lambda3||
(function(){var C$=Clazz.newClass(P$, "Collections$CheckedMap$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (v1, v2) {
var newValue=this.$finals$.remappingFunction.apply$(v1, v2);
p$12.typeCheck$O$O.apply(this.b$['java.util.Collections.CheckedMap'], [null, newValue]);
return newValue;
});
})()
), Clazz.new_(P$.Collections$CheckedMap$lambda3.$init$, [this, {remappingFunction: remappingFunction}])));
});
;
(function(){var C$=Clazz.newClass(P$.Collections.CheckedMap, "CheckedEntrySet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Set');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.s=null;
this.valueType=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_Set$Class'], function (s, valueType) {
C$.$init$.apply(this);
this.s=s;
this.valueType=valueType;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.s.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.s.isEmpty$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.s.toString();
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.s.hashCode$();
});

Clazz.newMeth(C$, 'clear$', function () {
this.s.clear$();
});

Clazz.newMeth(C$, ['add$java_util_Map_Entry','add$TE'], function (e) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['addAll$java_util_Collection'], function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'iterator$', function () {
var i=this.s.iterator$();
var valueType=this.valueType;
return ((P$.Collections$CheckedMap$CheckedEntrySet$1||
(function(){var C$=Clazz.newClass(P$, "Collections$CheckedMap$CheckedEntrySet$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.$finals$.i.hasNext$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.$finals$.i.remove$();
});

Clazz.newMeth(C$, 'next$', function () {
return P$.Collections.CheckedMap.CheckedEntrySet.checkedEntry$java_util_Map_Entry$Class(this.$finals$.i.next$(), this.$finals$.valueType);
});
})()
), Clazz.new_(P$.Collections$CheckedMap$CheckedEntrySet$1.$init$, [this, {i: i, valueType: valueType}]));
});

Clazz.newMeth(C$, 'toArray$', function () {
var source=this.s.toArray$();
var dest=(Clazz.getClass($I$(21)).isInstance$O(source.getClass$().getComponentType$()) ? source : Clazz.array(java.lang.Object, [source.length]));
for (var i=0; i < source.length; i++) dest[i]=C$.checkedEntry$java_util_Map_Entry$Class(source[i], this.valueType);

return dest;
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
var arr=this.s.toArray$TTA(a.length == 0 ? a : $I$(10).copyOf$TTA$I(a, 0));
for (var i=0; i < arr.length; i++) arr[i]=C$.checkedEntry$java_util_Map_Entry$Class(arr[i], this.valueType);

if (arr.length > a.length) return arr;
System.arraycopy$O$I$O$I$I(arr, 0, a, 0, arr.length);
if (a.length > arr.length) a[arr.length]=null;
return a;
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
return this.s.contains$O((Clazz.instanceOf(e, "java.util.Collections.CheckedMap.CheckedEntrySet.CheckedEntry")) ? e : C$.checkedEntry$java_util_Map_Entry$Class(e, this.valueType));
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) if (!this.contains$O(o)) return false;

return true;
});

Clazz.newMeth(C$, 'remove$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
return this.s.remove$O(Clazz.new_($I$(20).c$$java_util_Map_Entry,[o]));
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
return p$11.batchRemove$java_util_Collection$Z.apply(this, [c, false]);
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
return p$11.batchRemove$java_util_Collection$Z.apply(this, [c, true]);
});

Clazz.newMeth(C$, 'batchRemove$java_util_Collection$Z', function (c, complement) {
$I$(6).requireNonNull$TT(c);
var modified=false;
var it=this.iterator$();
while (it.hasNext$()){
if (c.contains$O(it.next$()) != complement ) {
it.remove$();
modified=true;
}}
return modified;
}, p$11);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o === this ) return true;
if (!(Clazz.instanceOf(o, "java.util.Set"))) return false;
var that=o;
return that.size$() == this.s.size$() && this.containsAll$java_util_Collection(that) ;
});

Clazz.newMeth(C$, ['checkedEntry$java_util_Map_Entry$Class'], function (e, valueType) {
return Clazz.new_($I$(21).c$$java_util_Map_Entry$Class,[e, valueType]);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.Collections.CheckedMap.CheckedEntrySet, "CheckedEntry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Map','java.util.Map.Entry']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.e=null;
this.valueType=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_Map_Entry$Class'], function (e, valueType) {
C$.$init$.apply(this);
this.e=$I$(6).requireNonNull$TT(e);
this.valueType=$I$(6).requireNonNull$TT(valueType);
}, 1);

Clazz.newMeth(C$, 'getKey$', function () {
return this.e.getKey$();
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.e.getValue$();
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.e.hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.e.toString();
});

Clazz.newMeth(C$, ['setValue$TV'], function (value) {
if (value != null  && !this.valueType.isInstance$O(value) ) throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[p$10.badValueMsg$O.apply(this, [value])]);
return this.e.setValue$TV(value);
});

Clazz.newMeth(C$, 'badValueMsg$O', function (value) {
return "Attempt to insert " + value.getClass$() + " value into map with value type " + this.valueType ;
}, p$10);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o === this ) return true;
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
return this.e.equals$O(Clazz.new_($I$(20).c$$java_util_Map_Entry,[o]));
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "CheckedSortedMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.CheckedMap'], ['java.util.SortedMap', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sm=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_SortedMap$Class$Class'], function (m, keyType, valueType) {
C$.superclazz.c$$java_util_Map$Class$Class.apply(this, [m, keyType, valueType]);
C$.$init$.apply(this);
this.sm=m;
}, 1);

Clazz.newMeth(C$, 'comparator$', function () {
return this.sm.comparator$();
});

Clazz.newMeth(C$, 'firstKey$', function () {
return this.sm.firstKey$();
});

Clazz.newMeth(C$, 'lastKey$', function () {
return this.sm.lastKey$();
});

Clazz.newMeth(C$, ['subMap$TK$TK'], function (fromKey, toKey) {
return P$.Collections.checkedSortedMap$java_util_SortedMap$Class$Class(this.sm.subMap$TK$TK(fromKey, toKey), this.keyType, this.valueType);
});

Clazz.newMeth(C$, ['headMap$TK'], function (toKey) {
return P$.Collections.checkedSortedMap$java_util_SortedMap$Class$Class(this.sm.headMap$TK(toKey), this.keyType, this.valueType);
});

Clazz.newMeth(C$, ['tailMap$TK'], function (fromKey) {
return P$.Collections.checkedSortedMap$java_util_SortedMap$Class$Class(this.sm.tailMap$TK(fromKey), this.keyType, this.valueType);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "CheckedNavigableMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.CheckedSortedMap'], ['java.util.NavigableMap', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nm=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_NavigableMap$Class$Class'], function (m, keyType, valueType) {
C$.superclazz.c$$java_util_SortedMap$Class$Class.apply(this, [m, keyType, valueType]);
C$.$init$.apply(this);
this.nm=m;
}, 1);

Clazz.newMeth(C$, 'comparator$', function () {
return this.nm.comparator$();
});

Clazz.newMeth(C$, 'firstKey$', function () {
return this.nm.firstKey$();
});

Clazz.newMeth(C$, 'lastKey$', function () {
return this.nm.lastKey$();
});

Clazz.newMeth(C$, ['lowerEntry$TK'], function (key) {
var lower=this.nm.lowerEntry$TK(key);
return (null != lower ) ? Clazz.new_($I$(21).c$$java_util_Map_Entry$Class,[lower, this.valueType]) : null;
});

Clazz.newMeth(C$, ['lowerKey$TK'], function (key) {
return this.nm.lowerKey$TK(key);
});

Clazz.newMeth(C$, ['floorEntry$TK'], function (key) {
var floor=this.nm.floorEntry$TK(key);
return (null != floor ) ? Clazz.new_($I$(21).c$$java_util_Map_Entry$Class,[floor, this.valueType]) : null;
});

Clazz.newMeth(C$, ['floorKey$TK'], function (key) {
return this.nm.floorKey$TK(key);
});

Clazz.newMeth(C$, ['ceilingEntry$TK'], function (key) {
var ceiling=this.nm.ceilingEntry$TK(key);
return (null != ceiling ) ? Clazz.new_($I$(21).c$$java_util_Map_Entry$Class,[ceiling, this.valueType]) : null;
});

Clazz.newMeth(C$, ['ceilingKey$TK'], function (key) {
return this.nm.ceilingKey$TK(key);
});

Clazz.newMeth(C$, ['higherEntry$TK'], function (key) {
var higher=this.nm.higherEntry$TK(key);
return (null != higher ) ? Clazz.new_($I$(21).c$$java_util_Map_Entry$Class,[higher, this.valueType]) : null;
});

Clazz.newMeth(C$, ['higherKey$TK'], function (key) {
return this.nm.higherKey$TK(key);
});

Clazz.newMeth(C$, 'firstEntry$', function () {
var first=this.nm.firstEntry$();
return (null != first ) ? Clazz.new_($I$(21).c$$java_util_Map_Entry$Class,[first, this.valueType]) : null;
});

Clazz.newMeth(C$, 'lastEntry$', function () {
var last=this.nm.lastEntry$();
return (null != last ) ? Clazz.new_($I$(21).c$$java_util_Map_Entry$Class,[last, this.valueType]) : null;
});

Clazz.newMeth(C$, 'pollFirstEntry$', function () {
var entry=this.nm.pollFirstEntry$();
return (null == entry ) ? null : Clazz.new_($I$(21).c$$java_util_Map_Entry$Class,[entry, this.valueType]);
});

Clazz.newMeth(C$, 'pollLastEntry$', function () {
var entry=this.nm.pollLastEntry$();
return (null == entry ) ? null : Clazz.new_($I$(21).c$$java_util_Map_Entry$Class,[entry, this.valueType]);
});

Clazz.newMeth(C$, 'descendingMap$', function () {
return P$.Collections.checkedNavigableMap$java_util_NavigableMap$Class$Class(this.nm.descendingMap$(), this.keyType, this.valueType);
});

Clazz.newMeth(C$, 'keySet$', function () {
return this.navigableKeySet$();
});

Clazz.newMeth(C$, 'navigableKeySet$', function () {
return P$.Collections.checkedNavigableSet$java_util_NavigableSet$Class(this.nm.navigableKeySet$(), this.keyType);
});

Clazz.newMeth(C$, 'descendingKeySet$', function () {
return P$.Collections.checkedNavigableSet$java_util_NavigableSet$Class(this.nm.descendingKeySet$(), this.keyType);
});

Clazz.newMeth(C$, ['subMap$TK$TK'], function (fromKey, toKey) {
return P$.Collections.checkedNavigableMap$java_util_NavigableMap$Class$Class(this.nm.subMap$TK$Z$TK$Z(fromKey, true, toKey, false), this.keyType, this.valueType);
});

Clazz.newMeth(C$, ['headMap$TK'], function (toKey) {
return P$.Collections.checkedNavigableMap$java_util_NavigableMap$Class$Class(this.nm.headMap$TK$Z(toKey, false), this.keyType, this.valueType);
});

Clazz.newMeth(C$, ['tailMap$TK'], function (fromKey) {
return P$.Collections.checkedNavigableMap$java_util_NavigableMap$Class$Class(this.nm.tailMap$TK$Z(fromKey, true), this.keyType, this.valueType);
});

Clazz.newMeth(C$, ['subMap$TK$Z$TK$Z'], function (fromKey, fromInclusive, toKey, toInclusive) {
return P$.Collections.checkedNavigableMap$java_util_NavigableMap$Class$Class(this.nm.subMap$TK$Z$TK$Z(fromKey, fromInclusive, toKey, toInclusive), this.keyType, this.valueType);
});

Clazz.newMeth(C$, ['headMap$TK$Z'], function (toKey, inclusive) {
return P$.Collections.checkedNavigableMap$java_util_NavigableMap$Class$Class(this.nm.headMap$TK$Z(toKey, inclusive), this.keyType, this.valueType);
});

Clazz.newMeth(C$, ['tailMap$TK$Z'], function (fromKey, inclusive) {
return P$.Collections.checkedNavigableMap$java_util_NavigableMap$Class$Class(this.nm.tailMap$TK$Z(fromKey, inclusive), this.keyType, this.valueType);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "EmptyIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Iterator');
C$.EMPTY_ITERATOR=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.EMPTY_ITERATOR=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return false;
});

Clazz.newMeth(C$, 'next$', function () {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (action) {
$I$(6).requireNonNull$TT(action);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "EmptyListIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Collections','.EmptyIterator'], 'java.util.ListIterator');
C$.$EMPTY_ITERATOR=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.$EMPTY_ITERATOR=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hasPrevious$', function () {
return false;
});

Clazz.newMeth(C$, 'previous$', function () {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$, 'nextIndex$', function () {
return 0;
});

Clazz.newMeth(C$, 'previousIndex$', function () {
return -1;
});

Clazz.newMeth(C$, ['set$TE'], function (e) {
throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "EmptyEnumeration", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Enumeration');
C$.EMPTY_ENUMERATION=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.EMPTY_ENUMERATION=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$', function () {
return false;
});

Clazz.newMeth(C$, 'nextElement$', function () {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "EmptySet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractSet', 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return P$.Collections.emptyIterator$();
});

Clazz.newMeth(C$, 'size$', function () {
return 0;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return true;
});

Clazz.newMeth(C$, 'contains$O', function (obj) {
return false;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
return c.isEmpty$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return Clazz.array(java.lang.Object, [0]);
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
if (a.length > 0) a[0]=null;
return a;
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
$I$(6).requireNonNull$TT(action);
});

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate', function (filter) {
$I$(6).requireNonNull$TT(filter);
return false;
});

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(24).emptySpliterator$();
});

Clazz.newMeth(C$, 'readResolve', function () {
return $I$(25).EMPTY_SET;
}, p$13);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "EmptyList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractList', ['java.util.RandomAccess', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return P$.Collections.emptyIterator$();
});

Clazz.newMeth(C$, 'listIterator$', function () {
return P$.Collections.emptyListIterator$();
});

Clazz.newMeth(C$, 'size$', function () {
return 0;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return true;
});

Clazz.newMeth(C$, 'contains$O', function (obj) {
return false;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
return c.isEmpty$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return Clazz.array(java.lang.Object, [0]);
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
if (a.length > 0) a[0]=null;
return a;
});

Clazz.newMeth(C$, 'get$I', function (index) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index]);
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return (Clazz.instanceOf(o, "java.util.List")) && (o).isEmpty$() ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return 1;
});

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate', function (filter) {
$I$(6).requireNonNull$TT(filter);
return false;
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_UnaryOperator', function (operator) {
$I$(6).requireNonNull$TT(operator);
});

Clazz.newMeth(C$, 'sort$java_util_Comparator', function (c) {
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
$I$(6).requireNonNull$TT(action);
});

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(24).emptySpliterator$();
});

Clazz.newMeth(C$, 'readResolve', function () {
return $I$(25).EMPTY_LIST;
}, p$14);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "EmptyMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractMap', 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return 0;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return true;
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
return false;
});

Clazz.newMeth(C$, 'containsValue$O', function (value) {
return false;
});

Clazz.newMeth(C$, 'get$O', function (key) {
return null;
});

Clazz.newMeth(C$, 'keySet$', function () {
return P$.Collections.emptySet$();
});

Clazz.newMeth(C$, 'values$', function () {
return P$.Collections.emptySet$();
});

Clazz.newMeth(C$, 'entrySet$', function () {
return P$.Collections.emptySet$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return (Clazz.instanceOf(o, "java.util.Map")) && (o).isEmpty$() ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return 0;
});

Clazz.newMeth(C$, ['getOrDefault$O$TV'], function (k, defaultValue) {
return defaultValue;
});

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer', function (action) {
$I$(6).requireNonNull$TT(action);
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction', function ($function) {
$I$(6).requireNonNull$TT($function);
});

Clazz.newMeth(C$, ['putIfAbsent$TK$TV'], function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$O$O', function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['replace$TK$TV$TV'], function (key, oldValue, newValue) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['replace$TK$TV'], function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['computeIfAbsent$TK$java_util_function_Function'], function (key, mappingFunction) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['computeIfPresent$TK$java_util_function_BiFunction'], function (key, remappingFunction) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['compute$TK$java_util_function_BiFunction'], function (key, remappingFunction) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['merge$TK$TV$java_util_function_BiFunction'], function (key, value, remappingFunction) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'readResolve', function () {
return $I$(25).EMPTY_MAP;
}, p$15);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "SingletonSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractSet', 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.element=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TE'], function (e) {
Clazz.super_(C$, this,1);
this.element=e;
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return P$.Collections.singletonIterator$TE(this.element);
});

Clazz.newMeth(C$, 'size$', function () {
return 1;
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return P$.Collections.eq$O$O(o, this.element);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
action.accept$(this.element);
});

Clazz.newMeth(C$, 'spliterator$', function () {
return P$.Collections.singletonSpliterator$TT(this.element);
});

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate', function (filter) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "SingletonList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractList', ['java.util.RandomAccess', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.element=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TE'], function (obj) {
Clazz.super_(C$, this,1);
this.element=obj;
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return P$.Collections.singletonIterator$TE(this.element);
});

Clazz.newMeth(C$, 'size$', function () {
return 1;
});

Clazz.newMeth(C$, 'contains$O', function (obj) {
return P$.Collections.eq$O$O(obj, this.element);
});

Clazz.newMeth(C$, 'get$I', function (index) {
if (index != 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index + ", Size: 1" ]);
return this.element;
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
action.accept$(this.element);
});

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate', function (filter) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_UnaryOperator', function (operator) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'sort$java_util_Comparator', function (c) {
});

Clazz.newMeth(C$, 'spliterator$', function () {
return P$.Collections.singletonSpliterator$TT(this.element);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "SingletonMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractMap', 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.k=null;
this.v=null;
this.$keySet=null;
this.entrySet=null;
this.$values=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TK$TV'], function (key, value) {
Clazz.super_(C$, this,1);
this.k=key;
this.v=value;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return 1;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return false;
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
return P$.Collections.eq$O$O(key, this.k);
});

Clazz.newMeth(C$, 'containsValue$O', function (value) {
return P$.Collections.eq$O$O(value, this.v);
});

Clazz.newMeth(C$, 'get$O', function (key) {
return (P$.Collections.eq$O$O(key, this.k) ? this.v : null);
});

Clazz.newMeth(C$, 'keySet$', function () {
if (this.$keySet == null ) this.$keySet=P$.Collections.singleton$TT(this.k);
return this.$keySet;
});

Clazz.newMeth(C$, 'entrySet$', function () {
if (this.entrySet == null ) this.entrySet=$I$(25).singleton$TT(Clazz.new_($I$(20).c$$TK$TV,[this.k, this.v]));
return this.entrySet;
});

Clazz.newMeth(C$, 'values$', function () {
if (this.$values == null ) this.$values=P$.Collections.singleton$TT(this.v);
return this.$values;
});

Clazz.newMeth(C$, ['getOrDefault$O$TV'], function (key, defaultValue) {
return P$.Collections.eq$O$O(key, this.k) ? this.v : defaultValue;
});

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer', function (action) {
action.accept$(this.k, this.v);
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction', function ($function) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['putIfAbsent$TK$TV'], function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$O$O', function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['replace$TK$TV$TV'], function (key, oldValue, newValue) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['replace$TK$TV'], function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['computeIfAbsent$TK$java_util_function_Function'], function (key, mappingFunction) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['computeIfPresent$TK$java_util_function_BiFunction'], function (key, remappingFunction) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['compute$TK$java_util_function_BiFunction'], function (key, remappingFunction) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['merge$TK$TV$java_util_function_BiFunction'], function (key, value, remappingFunction) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "CopiesList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractList', ['java.util.RandomAccess', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.n=0;
this.element=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$TE', function (n, e) {
Clazz.super_(C$, this,1);
Clazz.assert(C$, this, function(){return n >= 0});
this.n=n;
this.element=e;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.n;
});

Clazz.newMeth(C$, 'contains$O', function (obj) {
return this.n != 0 && P$.Collections.eq$O$O(obj, this.element) ;
});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
return this.contains$O(o) ? 0 : -1;
});

Clazz.newMeth(C$, 'lastIndexOf$O', function (o) {
return this.contains$O(o) ? this.n - 1 : -1;
});

Clazz.newMeth(C$, 'get$I', function (index) {
if (index < 0 || index >= this.n ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index + ", Size: " + this.n ]);
return this.element;
});

Clazz.newMeth(C$, 'toArray$', function () {
var a=Clazz.array(java.lang.Object, [this.n]);
if (this.element != null ) $I$(10).fill$OA$I$I$O(a, 0, this.n, this.element);
return a;
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
var n=this.n;
if (a.length < n) {
a=Clazz.array(a.getClass$().getComponentType$(), n);
if (this.element != null ) $I$(10).fill$OA$I$I$O(a, 0, n, this.element);
} else {
$I$(10).fill$OA$I$I$O(a, 0, n, this.element);
if (a.length > n) a[n]=null;
}return a;
});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
if (fromIndex < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["fromIndex = " + fromIndex]);
if (toIndex > this.n) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["toIndex = " + toIndex]);
if (fromIndex > toIndex) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["fromIndex(" + fromIndex + ") > toIndex(" + toIndex + ")" ]);
return Clazz.new_(C$.c$$I$TE,[toIndex - fromIndex, this.element]);
});

Clazz.newMeth(C$, 'stream$', function () {
return $I$(27).range$I$I(0, this.n).mapToObj$java_util_function_IntFunction(((P$.Collections$CopiesList$lambda1||
(function(){var C$=Clazz.newClass(P$, "Collections$CopiesList$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (i) { return (this.element);});
})()
), Clazz.new_(P$.Collections$CopiesList$lambda1.$init$, [this, null])));
});

Clazz.newMeth(C$, 'parallelStream$', function () {
return $I$(27).range$I$I(0, this.n).parallel$().mapToObj$java_util_function_IntFunction(((P$.Collections$CopiesList$lambda2||
(function(){var C$=Clazz.newClass(P$, "Collections$CopiesList$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (i) { return (this.element);});
})()
), Clazz.new_(P$.Collections$CopiesList$lambda2.$init$, [this, null])));
});

Clazz.newMeth(C$, 'spliterator$', function () {
return this.stream$().spliterator$();
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "ReverseComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.Comparator', 'java.io.Serializable']);
C$.REVERSE_ORDER=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.REVERSE_ORDER=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$Comparable$Comparable','compare$','compare$TT$TT'], function (c1, c2) {
return c2.compareTo$(c1);
});

Clazz.newMeth(C$, 'readResolve', function () {
return $I$(25).reverseOrder$();
}, p$16);

Clazz.newMeth(C$, 'reversed$', function () {
return $I$(28).naturalOrder$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "ReverseComparator2", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.Comparator', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cmp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Comparator', function (cmp) {
C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return cmp != null });
this.cmp=cmp;
}, 1);

Clazz.newMeth(C$, ['compare$TT$TT','compare$'], function (t1, t2) {
return this.cmp.compare$(t2, t1);
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return (o === this ) || (Clazz.instanceOf(o, "java.util.Collections.ReverseComparator2") && this.cmp.equals$O((o).cmp) ) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.cmp.hashCode$() ^ -2147483648;
});

Clazz.newMeth(C$, 'reversed$', function () {
return this.cmp;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "SetFromMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractSet', ['java.util.Set', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.m=null;
this.s=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (map) {
Clazz.super_(C$, this,1);
if (!map.isEmpty$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Map is non-empty"]);
this.m=map;
this.s=map.keySet$();
}, 1);

Clazz.newMeth(C$, 'clear$', function () {
this.m.clear$();
});

Clazz.newMeth(C$, 'size$', function () {
return this.m.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.m.isEmpty$();
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.m.containsKey$O(o);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
return this.m.remove$O(o) != null ;
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
return this.m.put$TK$TV(e, $I$(29).TRUE) == null ;
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.s.iterator$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.s.toArray$();
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
return this.s.toArray$TTA(a);
});

Clazz.newMeth(C$, 'toString', function () {
return this.s.toString();
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.s.hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return o === this  || this.s.equals$O(o) ;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
return this.s.containsAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
return this.s.removeAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
return this.s.retainAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
this.s.forEach$java_util_function_Consumer(action);
});

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate', function (filter) {
return this.s.removeIf$java_util_function_Predicate(filter);
});

Clazz.newMeth(C$, 'spliterator$', function () {
return this.s.spliterator$();
});

Clazz.newMeth(C$, 'stream$', function () {
return this.s.stream$();
});

Clazz.newMeth(C$, 'parallelStream$', function () {
return this.s.parallelStream$();
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (stream) {
stream.defaultReadObject$();
this.s=this.m.keySet$();
}, p$17);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Collections, "AsLIFOQueue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractQueue', ['java.util.Queue', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.q=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Deque', function (q) {
Clazz.super_(C$, this,1);
this.q=q;
}, 1);

Clazz.newMeth(C$, ['add$TE'], function (e) {
this.q.addFirst$TE(e);
return true;
});

Clazz.newMeth(C$, ['offer$TE'], function (e) {
return this.q.offerFirst$TE(e);
});

Clazz.newMeth(C$, 'poll$', function () {
return this.q.pollFirst$();
});

Clazz.newMeth(C$, 'remove$', function () {
return this.q.removeFirst$();
});

Clazz.newMeth(C$, 'peek$', function () {
return this.q.peekFirst$();
});

Clazz.newMeth(C$, 'element$', function () {
return this.q.getFirst$();
});

Clazz.newMeth(C$, 'clear$', function () {
this.q.clear$();
});

Clazz.newMeth(C$, 'size$', function () {
return this.q.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.q.isEmpty$();
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.q.contains$O(o);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
return this.q.remove$O(o);
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.q.iterator$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.q.toArray$();
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
return this.q.toArray$TTA(a);
});

Clazz.newMeth(C$, 'toString', function () {
return this.q.toString();
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
return this.q.containsAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
return this.q.removeAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
return this.q.retainAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
this.q.forEach$java_util_function_Consumer(action);
});

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate', function (filter) {
return this.q.removeIf$java_util_function_Predicate(filter);
});

Clazz.newMeth(C$, 'spliterator$', function () {
return this.q.spliterator$();
});

Clazz.newMeth(C$, 'stream$', function () {
return this.q.stream$();
});

Clazz.newMeth(C$, 'parallelStream$', function () {
return this.q.parallelStream$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:45 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
