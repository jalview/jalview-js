(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},p$2={},I$=[[0,['java.util.concurrent.CopyOnWriteArrayList','.COWSubListIterator'],'java.util.concurrent.locks.ReentrantLock','java.util.Arrays','InternalError',['java.util.concurrent.CopyOnWriteArrayList','.COWIterator'],['java.util.concurrent.CopyOnWriteArrayList','.COWSubList']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CopyOnWriteArrayList", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.util.List', 'java.util.RandomAccess', 'Cloneable', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lock=null;
this.array=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.lock=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'getArray$', function () {
return this.array;
});

Clazz.newMeth(C$, 'setArray$OA', function (a) {
this.array=a;
});

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.setArray$OA(Clazz.array(java.lang.Object, [0]));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
C$.$init$.apply(this);
var elements=c.toArray$();
if (elements.getClass$() !== Clazz.array(java.lang.Object, -1) ) elements=$I$(3).copyOf$TUA$I$Class(elements, elements.length, Clazz.array(java.lang.Object, -1));
this.setArray$OA(elements);
}, 1);

Clazz.newMeth(C$, 'c$$TEA', function (toCopyIn) {
C$.$init$.apply(this);
this.setArray$OA($I$(3).copyOf$TUA$I$Class(toCopyIn, toCopyIn.length, Clazz.array(java.lang.Object, -1)));
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.getArray$().length;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.size$() == 0;
});

Clazz.newMeth(C$, 'eq$O$O', function (o1, o2) {
return (o1 == null  ? o2 == null  : o1.equals$O(o2));
}, 1);

Clazz.newMeth(C$, 'indexOf$O$OA$I$I', function (o, elements, index, fence) {
if (o == null ) {
for (var i=index; i < fence; i++) if (elements[i] == null ) return i;

} else {
for (var i=index; i < fence; i++) if (o.equals$O(elements[i])) return i;

}return -1;
}, 1);

Clazz.newMeth(C$, 'lastIndexOf$O$OA$I', function (o, elements, index) {
if (o == null ) {
for (var i=index; i >= 0; i--) if (elements[i] == null ) return i;

} else {
for (var i=index; i >= 0; i--) if (o.equals$O(elements[i])) return i;

}return -1;
}, 1);

Clazz.newMeth(C$, 'contains$O', function (o) {
var elements=this.getArray$();
return C$.indexOf$O$OA$I$I(o, elements, 0, elements.length) >= 0;
});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
var elements=this.getArray$();
return C$.indexOf$O$OA$I$I(o, elements, 0, elements.length);
});

Clazz.newMeth(C$, ['indexOf$TE$I'], function (e, index) {
var elements=this.getArray$();
return C$.indexOf$O$OA$I$I(e, elements, index, elements.length);
});

Clazz.newMeth(C$, 'lastIndexOf$O', function (o) {
var elements=this.getArray$();
return C$.lastIndexOf$O$OA$I(o, elements, elements.length - 1);
});

Clazz.newMeth(C$, ['lastIndexOf$TE$I'], function (e, index) {
var elements=this.getArray$();
return C$.lastIndexOf$O$OA$I(e, elements, index);
});

Clazz.newMeth(C$, 'clone$', function () {
try {
var c=(Clazz.clone(this));
return c;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(4));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toArray$', function () {
var elements=this.getArray$();
return $I$(3).copyOf$TTA$I(elements, elements.length);
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
var elements=this.getArray$();
var len=elements.length;
if (a.length < len) return $I$(3).copyOf$TUA$I$Class(elements, len, a.getClass$());
 else {
System.arraycopy$O$I$O$I$I(elements, 0, a, 0, len);
if (a.length > len) a[len]=null;
return a;
}});

Clazz.newMeth(C$, 'get$OA$I', function (a, index) {
return a[index];
}, p$2);

Clazz.newMeth(C$, 'get$I', function (index) {
return p$2.get$OA$I.apply(this, [this.getArray$(), index]);
});

Clazz.newMeth(C$, 'set$I$TE', function (index, element) {
var lock=this.lock;
lock.lock$();
try {
var elements=this.getArray$();
var oldValue=p$2.get$OA$I.apply(this, [elements, index]);
if (oldValue !== element ) {
var len=elements.length;
var newElements=$I$(3).copyOf$TTA$I(elements, len);
newElements[index]=element;
this.setArray$OA(newElements);
} else {
this.setArray$OA(elements);
}return oldValue;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
var lock=this.lock;
lock.lock$();
try {
var elements=this.getArray$();
var len=elements.length;
var newElements=$I$(3).copyOf$TTA$I(elements, len + 1);
newElements[len]=e;
this.setArray$OA(newElements);
return true;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'add$I$TE', function (index, element) {
var lock=this.lock;
lock.lock$();
try {
var elements=this.getArray$();
var len=elements.length;
if (index > len || index < 0 ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index + ", Size: " + len ]);
var newElements;
var numMoved=len - index;
if (numMoved == 0) newElements=$I$(3).copyOf$TTA$I(elements, len + 1);
 else {
newElements=Clazz.array(java.lang.Object, [len + 1]);
System.arraycopy$O$I$O$I$I(elements, 0, newElements, 0, index);
System.arraycopy$O$I$O$I$I(elements, index, newElements, index + 1, numMoved);
}newElements[index]=element;
this.setArray$OA(newElements);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'remove$I', function (index) {
var lock=this.lock;
lock.lock$();
try {
var elements=this.getArray$();
var len=elements.length;
var oldValue=p$2.get$OA$I.apply(this, [elements, index]);
var numMoved=len - index - 1 ;
if (numMoved == 0) this.setArray$OA($I$(3).copyOf$TTA$I(elements, len - 1));
 else {
var newElements=Clazz.array(java.lang.Object, [len - 1]);
System.arraycopy$O$I$O$I$I(elements, 0, newElements, 0, index);
System.arraycopy$O$I$O$I$I(elements, index + 1, newElements, index, numMoved);
this.setArray$OA(newElements);
}return oldValue;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'remove$O', function (o) {
var lock=this.lock;
lock.lock$();
try {
var elements=this.getArray$();
var len=elements.length;
if (len != 0) {
var newlen=len - 1;
var newElements=Clazz.array(java.lang.Object, [newlen]);
for (var i=0; i < newlen; ++i) {
if (C$.eq$O$O(o, elements[i])) {
for (var k=i + 1; k < len; ++k) newElements[k - 1]=elements[k];

this.setArray$OA(newElements);
return true;
} else newElements[i]=elements[i];
}
if (C$.eq$O$O(o, elements[newlen])) {
this.setArray$OA(newElements);
return true;
}}return false;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'removeRange$I$I', function (fromIndex, toIndex) {
var lock=this.lock;
lock.lock$();
try {
var elements=this.getArray$();
var len=elements.length;
if (fromIndex < 0 || toIndex > len  || toIndex < fromIndex ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
var newlen=len - (toIndex - fromIndex);
var numMoved=len - toIndex;
if (numMoved == 0) this.setArray$OA($I$(3).copyOf$TTA$I(elements, newlen));
 else {
var newElements=Clazz.array(java.lang.Object, [newlen]);
System.arraycopy$O$I$O$I$I(elements, 0, newElements, 0, fromIndex);
System.arraycopy$O$I$O$I$I(elements, toIndex, newElements, fromIndex, numMoved);
this.setArray$OA(newElements);
}} finally {
lock.unlock$();
}
}, p$2);

Clazz.newMeth(C$, ['addIfAbsent$TE'], function (e) {
var lock=this.lock;
lock.lock$();
try {
var elements=this.getArray$();
var len=elements.length;
var newElements=Clazz.array(java.lang.Object, [len + 1]);
for (var i=0; i < len; ++i) {
if (C$.eq$O$O(e, elements[i])) return false;
 else newElements[i]=elements[i];
}
newElements[len]=e;
this.setArray$OA(newElements);
return true;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
var elements=this.getArray$();
var len=elements.length;
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if (C$.indexOf$O$OA$I$I(e, elements, 0, len) < 0) return false;
}
return true;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
var lock=this.lock;
lock.lock$();
try {
var elements=this.getArray$();
var len=elements.length;
if (len != 0) {
var newlen=0;
var temp=Clazz.array(java.lang.Object, [len]);
for (var i=0; i < len; ++i) {
var element=elements[i];
if (!c.contains$O(element)) temp[newlen++]=element;
}
if (newlen != len) {
this.setArray$OA($I$(3).copyOf$TTA$I(temp, newlen));
return true;
}}return false;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
var lock=this.lock;
lock.lock$();
try {
var elements=this.getArray$();
var len=elements.length;
if (len != 0) {
var newlen=0;
var temp=Clazz.array(java.lang.Object, [len]);
for (var i=0; i < len; ++i) {
var element=elements[i];
if (c.contains$O(element)) temp[newlen++]=element;
}
if (newlen != len) {
this.setArray$OA($I$(3).copyOf$TTA$I(temp, newlen));
return true;
}}return false;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'addAllAbsent$java_util_Collection', function (c) {
var cs=c.toArray$();
if (cs.length == 0) return 0;
var uniq=Clazz.array(java.lang.Object, [cs.length]);
var lock=this.lock;
lock.lock$();
try {
var elements=this.getArray$();
var len=elements.length;
var added=0;
for (var i=0; i < cs.length; ++i) {
var e=cs[i];
if (C$.indexOf$O$OA$I$I(e, elements, 0, len) < 0 && C$.indexOf$O$OA$I$I(e, uniq, 0, added) < 0 ) uniq[added++]=e;
}
if (added > 0) {
var newElements=$I$(3).copyOf$TTA$I(elements, len + added);
System.arraycopy$O$I$O$I$I(uniq, 0, newElements, len, added);
this.setArray$OA(newElements);
}return added;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'clear$', function () {
var lock=this.lock;
lock.lock$();
try {
this.setArray$OA(Clazz.array(java.lang.Object, [0]));
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
var cs=c.toArray$();
if (cs.length == 0) return false;
var lock=this.lock;
lock.lock$();
try {
var elements=this.getArray$();
var len=elements.length;
var newElements=$I$(3).copyOf$TTA$I(elements, len + cs.length);
System.arraycopy$O$I$O$I$I(cs, 0, newElements, len, cs.length);
this.setArray$OA(newElements);
return true;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (index, c) {
var cs=c.toArray$();
var lock=this.lock;
lock.lock$();
try {
var elements=this.getArray$();
var len=elements.length;
if (index > len || index < 0 ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index + ", Size: " + len ]);
if (cs.length == 0) return false;
var numMoved=len - index;
var newElements;
if (numMoved == 0) newElements=$I$(3).copyOf$TTA$I(elements, len + cs.length);
 else {
newElements=Clazz.array(java.lang.Object, [len + cs.length]);
System.arraycopy$O$I$O$I$I(elements, 0, newElements, 0, index);
System.arraycopy$O$I$O$I$I(elements, index, newElements, index + cs.length, numMoved);
}System.arraycopy$O$I$O$I$I(cs, 0, newElements, index, cs.length);
this.setArray$OA(newElements);
return true;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
s.defaultWriteObject$();
var elements=this.getArray$();
var len=elements.length;
s.writeInt$I(len);
for (var i=0; i < len; i++) s.writeObject$O(elements[i]);

}, p$2);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
s.defaultReadObject$();
var len=s.readInt$();
var elements=Clazz.array(java.lang.Object, [len]);
for (var i=0; i < len; i++) elements[i]=s.readObject$();

this.setArray$OA(elements);
}, p$2);

Clazz.newMeth(C$, 'toString', function () {
return $I$(3).toString$OA(this.getArray$());
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o === this ) return true;
if (!(Clazz.instanceOf(o, "java.util.List"))) return false;
var list=(o);
var it=list.iterator$();
var elements=this.getArray$();
var len=elements.length;
for (var i=0; i < len; ++i) if (!it.hasNext$() || !C$.eq$O$O(elements[i], it.next$()) ) return false;

if (it.hasNext$()) return false;
return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hashCode=1;
var elements=this.getArray$();
var len=elements.length;
for (var i=0; i < len; ++i) {
var obj=elements[i];
hashCode=31 * hashCode + (obj == null  ? 0 : obj.hashCode$());
}
return hashCode;
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(5).c$$OA$I,[this.getArray$(), 0]);
});

Clazz.newMeth(C$, 'listIterator$', function () {
return Clazz.new_($I$(5).c$$OA$I,[this.getArray$(), 0]);
});

Clazz.newMeth(C$, 'listIterator$I', function (index) {
var elements=this.getArray$();
var len=elements.length;
if (index < 0 || index > len ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index]);
return Clazz.new_($I$(5).c$$OA$I,[elements, index]);
});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
var lock=this.lock;
lock.lock$();
try {
var elements=this.getArray$();
var len=elements.length;
if (fromIndex < 0 || toIndex > len  || fromIndex > toIndex ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
return Clazz.new_($I$(6).c$$java_util_concurrent_CopyOnWriteArrayList$I$I,[this, fromIndex, toIndex]);
} finally {
lock.unlock$();
}
});
;
(function(){var C$=Clazz.newClass(P$.CopyOnWriteArrayList, "COWIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.ListIterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.snapshot=null;
this.cursor=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$OA$I', function (elements, initialCursor) {
C$.$init$.apply(this);
this.cursor=initialCursor;
this.snapshot=elements;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.cursor < this.snapshot.length;
});

Clazz.newMeth(C$, 'hasPrevious$', function () {
return this.cursor > 0;
});

Clazz.newMeth(C$, 'next$', function () {
if (!this.hasNext$()) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return this.snapshot[this.cursor++];
});

Clazz.newMeth(C$, 'previous$', function () {
if (!this.hasPrevious$()) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return this.snapshot[--this.cursor];
});

Clazz.newMeth(C$, 'nextIndex$', function () {
return this.cursor;
});

Clazz.newMeth(C$, 'previousIndex$', function () {
return this.cursor - 1;
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

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.CopyOnWriteArrayList, "COWSubList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractList', 'java.util.RandomAccess');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.l=null;
this.offset=0;
this.size=0;
this.expectedArray=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_CopyOnWriteArrayList$I$I', function (list, fromIndex, toIndex) {
Clazz.super_(C$, this,1);
this.l=list;
this.expectedArray=this.l.getArray$();
this.offset=fromIndex;
this.size=toIndex - fromIndex;
}, 1);

Clazz.newMeth(C$, 'checkForComodification', function () {
if (this.l.getArray$() !== this.expectedArray ) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}, p$1);

Clazz.newMeth(C$, 'rangeCheck$I', function (index) {
if (index < 0 || index >= this.size ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index + ",Size: " + this.size ]);
}, p$1);

Clazz.newMeth(C$, 'set$I$TE', function (index, element) {
var lock=this.l.lock;
lock.lock$();
try {
p$1.rangeCheck$I.apply(this, [index]);
p$1.checkForComodification.apply(this, []);
var x=this.l.set$I$TE(index + this.offset, element);
this.expectedArray=this.l.getArray$();
return x;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'get$I', function (index) {
var lock=this.l.lock;
lock.lock$();
try {
p$1.rangeCheck$I.apply(this, [index]);
p$1.checkForComodification.apply(this, []);
return this.l.get$I(index + this.offset);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'size$', function () {
var lock=this.l.lock;
lock.lock$();
try {
p$1.checkForComodification.apply(this, []);
return this.size;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'add$I$TE', function (index, element) {
var lock=this.l.lock;
lock.lock$();
try {
p$1.checkForComodification.apply(this, []);
if (index < 0 || index > this.size ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
this.l.add$I$TE(index + this.offset, element);
this.expectedArray=this.l.getArray$();
this.size++;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'clear$', function () {
var lock=this.l.lock;
lock.lock$();
try {
p$1.checkForComodification.apply(this, []);
p$2.removeRange$I$I.apply(this.l, [this.offset, this.offset + this.size]);
this.expectedArray=this.l.getArray$();
this.size=0;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'remove$I', function (index) {
var lock=this.l.lock;
lock.lock$();
try {
p$1.rangeCheck$I.apply(this, [index]);
p$1.checkForComodification.apply(this, []);
var result=this.l.remove$I(index + this.offset);
this.expectedArray=this.l.getArray$();
this.size--;
return result;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'remove$O', function (o) {
var index=this.indexOf$O(o);
if (index == -1) return false;
this.remove$I(index);
return true;
});

Clazz.newMeth(C$, 'iterator$', function () {
var lock=this.l.lock;
lock.lock$();
try {
p$1.checkForComodification.apply(this, []);
return Clazz.new_($I$(1).c$$java_util_List$I$I$I,[this.l, 0, this.offset, this.size]);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'listIterator$I', function (index) {
var lock=this.l.lock;
lock.lock$();
try {
p$1.checkForComodification.apply(this, []);
if (index < 0 || index > this.size ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index + ", Size: " + this.size ]);
return Clazz.new_($I$(1).c$$java_util_List$I$I$I,[this.l, index, this.offset, this.size]);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
var lock=this.l.lock;
lock.lock$();
try {
p$1.checkForComodification.apply(this, []);
if (fromIndex < 0 || toIndex > this.size ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
return Clazz.new_(C$.c$$java_util_concurrent_CopyOnWriteArrayList$I$I,[this.l, fromIndex + this.offset, toIndex + this.offset]);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.CopyOnWriteArrayList, "COWSubListIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.ListIterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.i=null;
this.index=0;
this.offset=0;
this.size=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$I$I$I', function (l, index, offset, size) {
C$.$init$.apply(this);
this.index=index;
this.offset=offset;
this.size=size;
this.i=l.listIterator$I(index + offset);
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.nextIndex$() < this.size;
});

Clazz.newMeth(C$, 'next$', function () {
if (this.hasNext$()) return this.i.next$();
 else throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$, 'hasPrevious$', function () {
return this.previousIndex$() >= 0;
});

Clazz.newMeth(C$, 'previous$', function () {
if (this.hasPrevious$()) return this.i.previous$();
 else throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$, 'nextIndex$', function () {
return this.i.nextIndex$() - this.offset;
});

Clazz.newMeth(C$, 'previousIndex$', function () {
return this.i.previousIndex$() - this.offset;
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

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
