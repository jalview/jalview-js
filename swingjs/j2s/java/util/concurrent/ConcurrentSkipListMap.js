(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},p$2={},I$=[[0,'java.util.concurrent.atomic.AtomicReferenceFieldUpdater','java.util.concurrent.ConcurrentSkipListMap',['java.util.AbstractMap','.SimpleImmutableEntry'],'java.util.Collections',['java.util.concurrent.ConcurrentSkipListMap','.KeySet'],['java.util.concurrent.ConcurrentSkipListMap','.Values'],['java.util.concurrent.ConcurrentSkipListMap','.EntrySet'],['java.util.concurrent.ConcurrentSkipListMap','.SubMap','.SubMapKeyIterator'],['java.util.concurrent.ConcurrentSkipListMap','.SubMap','.SubMapValueIterator'],['java.util.concurrent.ConcurrentSkipListMap','.SubMap','.SubMapEntryIterator'],'java.util.Random',['java.util.concurrent.ConcurrentSkipListMap','.HeadIndex'],['java.util.concurrent.ConcurrentSkipListMap','.Node'],['java.util.concurrent.ConcurrentSkipListMap','.ComparableUsingComparator'],['java.util.concurrent.ConcurrentSkipListMap','.Index'],'InternalError','java.util.ArrayList',['java.util.concurrent.ConcurrentSkipListMap','.SubMap'],['java.util.concurrent.ConcurrentSkipListMap','.KeyIterator'],['java.util.concurrent.ConcurrentSkipListMap','.ValueIterator'],['java.util.concurrent.ConcurrentSkipListMap','.EntryIterator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ConcurrentSkipListMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractMap', ['java.util.concurrent.ConcurrentNavigableMap', 'Cloneable', 'java.io.Serializable']);
C$.seedGenerator=null;
C$.BASE_HEADER=null;
C$.headUpdater=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.seedGenerator=Clazz.new_($I$(11));
C$.BASE_HEADER= Clazz.new_();
C$.headUpdater=$I$(1).newUpdater$Class$Class$S(Clazz.getClass(C$), Clazz.getClass($I$(12)), "head");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.head=null;
this.comparator=null;
this.randomSeed=0;
this.$keySet=null;
this.entrySet=null;
this.$values=null;
this.descendingMap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initialize$', function () {
this.$keySet=null;
this.entrySet=null;
this.$values=null;
this.descendingMap=null;
this.randomSeed=C$.seedGenerator.nextInt$() | 256;
this.head=Clazz.new_($I$(12).c$$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index$I,[Clazz.new_($I$(13).c$$TK$O$java_util_concurrent_ConcurrentSkipListMap_Node,[null, C$.BASE_HEADER, null]), null, null, 1]);
});

Clazz.newMeth(C$, ['casHead$java_util_concurrent_ConcurrentSkipListMap_HeadIndex$java_util_concurrent_ConcurrentSkipListMap_HeadIndex'], function (cmp, val) {
return C$.headUpdater.compareAndSet$TT$TV$TV(this, cmp, val);
}, p$2);

Clazz.newMeth(C$, 'comparable$O', function (key) {
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.comparator != null ) return Clazz.new_($I$(14).c$$TK$java_util_Comparator,[key, this.comparator]);
 else return key;
}, p$2);

Clazz.newMeth(C$, ['compare$TK$TK'], function (k1, k2) {
var cmp=this.comparator;
if (cmp != null ) return cmp.compare$(k1, k2);
 else return (k1).compareTo$(k2);
});

Clazz.newMeth(C$, ['inHalfOpenRange$TK$TK$TK'], function (key, least, fence) {
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return ((least == null  || this.compare$TK$TK(key, least) >= 0 ) && (fence == null  || this.compare$TK$TK(key, fence) < 0 ) );
});

Clazz.newMeth(C$, ['inOpenRange$TK$TK$TK'], function (key, least, fence) {
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return ((least == null  || this.compare$TK$TK(key, least) >= 0 ) && (fence == null  || this.compare$TK$TK(key, fence) <= 0 ) );
});

Clazz.newMeth(C$, ['findPredecessor$Comparable'], function (key) {
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
for (; ; ) {
var q=this.head;
var r=q.right;
for (; ; ) {
if (r != null ) {
var n=r.node;
var k=n.key;
if (n.value == null ) {
if (!q.unlink$java_util_concurrent_ConcurrentSkipListMap_Index(r)) break;
r=q.right;
continue;
}if (key.compareTo$(k) > 0) {
q=r;
r=r.right;
continue;
}}var d=q.down;
if (d != null ) {
q=d;
r=d.right;
} else return q.node;
}
}
}, p$2);

Clazz.newMeth(C$, ['findNode$Comparable'], function (key) {
for (; ; ) {
var b=p$2.findPredecessor$Comparable.apply(this, [key]);
var n=b.next_;
for (; ; ) {
if (n == null ) return null;
var f=n.next_;
if (n !== b.next_ ) break;
var v=n.value;
if (v == null ) {
n.helpDelete$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node(b, f);
break;
}if (v === n  || b.value == null  ) break;
var c=key.compareTo$(n.key);
if (c == 0) return n;
if (c < 0) return null;
b=n;
n=f;
}
}
}, p$2);

Clazz.newMeth(C$, 'doGet$O', function (okey) {
var key=p$2.comparable$O.apply(this, [okey]);
var bound=null;
var q=this.head;
var r=q.right;
var n;
var k;
var c;
for (; ; ) {
var d;
if (r != null  && (n=r.node) !== bound   && (k=n.key) != null  ) {
if ((c=key.compareTo$(k)) > 0) {
q=r;
r=r.right;
continue;
} else if (c == 0) {
var v=n.value;
return (v != null ) ? v : p$2.getUsingFindNode$Comparable.apply(this, [key]);
} else bound=n;
}if ((d=q.down) != null ) {
q=d;
r=d.right;
} else break;
}
for (n=q.node.next_; n != null ; n=n.next_) {
if ((k=n.key) != null ) {
if ((c=key.compareTo$(k)) == 0) {
var v=n.value;
return (v != null ) ? v : p$2.getUsingFindNode$Comparable.apply(this, [key]);
} else if (c < 0) break;
}}
return null;
}, p$2);

Clazz.newMeth(C$, 'getUsingFindNode$Comparable', function (key) {
for (; ; ) {
var n=p$2.findNode$Comparable.apply(this, [key]);
if (n == null ) return null;
var v=n.value;
if (v != null ) return v;
}
}, p$2);

Clazz.newMeth(C$, ['doPut$TK$TV$Z'], function (kkey, value, onlyIfAbsent) {
var key=p$2.comparable$O.apply(this, [kkey]);
for (; ; ) {
var b=p$2.findPredecessor$Comparable.apply(this, [key]);
var n=b.next_;
for (; ; ) {
if (n != null ) {
var f=n.next_;
if (n !== b.next_ ) break;
;var v=n.value;
if (v == null ) {
n.helpDelete$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node(b, f);
break;
}if (v === n  || b.value == null  ) break;
var c=key.compareTo$(n.key);
if (c > 0) {
b=n;
n=f;
continue;
}if (c == 0) {
if (onlyIfAbsent || n.casValue$O$O(v, value) ) return v;
 else break;
}}var z=Clazz.new_($I$(13).c$$TK$O$java_util_concurrent_ConcurrentSkipListMap_Node,[kkey, value, n]);
if (!b.casNext$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node(n, z)) break;
var level=p$2.randomLevel.apply(this, []);
if (level > 0) p$2.insertIndex$java_util_concurrent_ConcurrentSkipListMap_Node$I.apply(this, [z, level]);
return null;
}
}
}, p$2);

Clazz.newMeth(C$, 'randomLevel', function () {
var x=this.randomSeed;
x^=x << 13;
x^=x >>> 17;
this.randomSeed=x^=x << 5;
if ((x & 32769) != 0) return 0;
var level=1;
while (((x>>>=1) & 1) != 0)++level;

return level;
}, p$2);

Clazz.newMeth(C$, ['insertIndex$java_util_concurrent_ConcurrentSkipListMap_Node$I'], function (z, level) {
var h=this.head;
var max=h.level;
if (level <= max) {
var idx=null;
for (var i=1; i <= level; ++i) idx=Clazz.new_($I$(15).c$$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index,[z, idx, null]);

p$2.addIndex$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_HeadIndex$I.apply(this, [idx, h, level]);
} else {
level=max + 1;
var idxs=Clazz.array($I$(15), [level + 1]);
var idx=null;
for (var i=1; i <= level; ++i) idxs[i]=idx=Clazz.new_($I$(15).c$$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index,[z, idx, null]);

var oldh;
var k;
for (; ; ) {
oldh=this.head;
var oldLevel=oldh.level;
if (level <= oldLevel) {
k=level;
break;
}var newh=oldh;
var oldbase=oldh.node;
for (var j=oldLevel + 1; j <= level; ++j) newh=Clazz.new_($I$(12).c$$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index$I,[oldbase, newh, idxs[j], j]);

if (p$2.casHead$java_util_concurrent_ConcurrentSkipListMap_HeadIndex$java_util_concurrent_ConcurrentSkipListMap_HeadIndex.apply(this, [oldh, newh])) {
k=oldLevel;
break;
}}
p$2.addIndex$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_HeadIndex$I.apply(this, [idxs[k], oldh, k]);
}}, p$2);

Clazz.newMeth(C$, ['addIndex$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_HeadIndex$I'], function (idx, h, indexLevel) {
var insertionLevel=indexLevel;
var key=p$2.comparable$O.apply(this, [idx.node.key]);
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
for (; ; ) {
var j=h.level;
var q=h;
var r=q.right;
var t=idx;
for (; ; ) {
if (r != null ) {
var n=r.node;
var c=key.compareTo$(n.key);
if (n.value == null ) {
if (!q.unlink$java_util_concurrent_ConcurrentSkipListMap_Index(r)) break;
r=q.right;
continue;
}if (c > 0) {
q=r;
r=r.right;
continue;
}}if (j == insertionLevel) {
if (t.indexesDeletedNode$()) {
p$2.findNode$Comparable.apply(this, [key]);
return;
}if (!q.link$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index(r, t)) break;
if (--insertionLevel == 0) {
if (t.indexesDeletedNode$()) p$2.findNode$Comparable.apply(this, [key]);
return;
}}if (--j >= insertionLevel && j < indexLevel ) t=t.down;
q=q.down;
r=q.right;
}
}
}, p$2);

Clazz.newMeth(C$, 'doRemove$O$O', function (okey, value) {
var key=p$2.comparable$O.apply(this, [okey]);
for (; ; ) {
var b=p$2.findPredecessor$Comparable.apply(this, [key]);
var n=b.next_;
for (; ; ) {
if (n == null ) return null;
var f=n.next_;
if (n !== b.next_ ) break;
var v=n.value;
if (v == null ) {
n.helpDelete$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node(b, f);
break;
}if (v === n  || b.value == null  ) break;
var c=key.compareTo$(n.key);
if (c < 0) return null;
if (c > 0) {
b=n;
n=f;
continue;
}if (value != null  && !value.equals$O(v) ) return null;
if (!n.casValue$O$O(v, null)) break;
if (!n.appendMarker$java_util_concurrent_ConcurrentSkipListMap_Node(f) || !b.casNext$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node(n, f) ) p$2.findNode$Comparable.apply(this, [key]);
 else {
p$2.findPredecessor$Comparable.apply(this, [key]);
if (this.head.right == null ) p$2.tryReduceLevel.apply(this, []);
}return v;
}
}
});

Clazz.newMeth(C$, 'tryReduceLevel', function () {
var h=this.head;
var d;
var e;
if (h.level > 3 && (d=h.down) != null   && (e=d.down) != null   && e.right == null   && d.right == null   && h.right == null   && p$2.casHead$java_util_concurrent_ConcurrentSkipListMap_HeadIndex$java_util_concurrent_ConcurrentSkipListMap_HeadIndex.apply(this, [h, d])  && h.right != null  ) p$2.casHead$java_util_concurrent_ConcurrentSkipListMap_HeadIndex$java_util_concurrent_ConcurrentSkipListMap_HeadIndex.apply(this, [d, h]);
}, p$2);

Clazz.newMeth(C$, 'findFirst$', function () {
for (; ; ) {
var b=this.head.node;
var n=b.next_;
if (n == null ) return null;
if (n.value != null ) return n;
n.helpDelete$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node(b, n.next_);
}
});

Clazz.newMeth(C$, 'doRemoveFirstEntry$', function () {
for (; ; ) {
var b=this.head.node;
var n=b.next_;
if (n == null ) return null;
var f=n.next_;
if (n !== b.next_ ) continue;
var v=n.value;
if (v == null ) {
n.helpDelete$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node(b, f);
continue;
}if (!n.casValue$O$O(v, null)) continue;
if (!n.appendMarker$java_util_concurrent_ConcurrentSkipListMap_Node(f) || !b.casNext$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node(n, f) ) this.findFirst$();
p$2.clearIndexToFirst.apply(this, []);
return Clazz.new_($I$(3).c$$TK$TV,[n.key, v]);
}
});

Clazz.newMeth(C$, 'clearIndexToFirst', function () {
for (; ; ) {
var q=this.head;
for (; ; ) {
var r=q.right;
if (r != null  && r.indexesDeletedNode$()  && !q.unlink$java_util_concurrent_ConcurrentSkipListMap_Index(r) ) break;
if ((q=q.down) == null ) {
if (this.head.right == null ) p$2.tryReduceLevel.apply(this, []);
return;
}}
}
}, p$2);

Clazz.newMeth(C$, 'findLast$', function () {
var q=this.head;
for (; ; ) {
var d;
var r;
if ((r=q.right) != null ) {
if (r.indexesDeletedNode$()) {
q.unlink$java_util_concurrent_ConcurrentSkipListMap_Index(r);
q=this.head;
} else q=r;
} else if ((d=q.down) != null ) {
q=d;
} else {
var b=q.node;
var n=b.next_;
for (; ; ) {
if (n == null ) return (b.isBaseHeader$()) ? null : b;
var f=n.next_;
if (n !== b.next_ ) break;
var v=n.value;
if (v == null ) {
n.helpDelete$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node(b, f);
break;
}if (v === n  || b.value == null  ) break;
b=n;
n=f;
}
q=this.head;
}}
});

Clazz.newMeth(C$, 'findPredecessorOfLast', function () {
for (; ; ) {
var q=this.head;
for (; ; ) {
var d;
var r;
if ((r=q.right) != null ) {
if (r.indexesDeletedNode$()) {
q.unlink$java_util_concurrent_ConcurrentSkipListMap_Index(r);
break;
}if (r.node.next_ != null ) {
q=r;
continue;
}}if ((d=q.down) != null ) q=d;
 else return q.node;
}
}
}, p$2);

Clazz.newMeth(C$, 'doRemoveLastEntry$', function () {
for (; ; ) {
var b=p$2.findPredecessorOfLast.apply(this, []);
var n=b.next_;
if (n == null ) {
if (b.isBaseHeader$()) return null;
 else continue;
}for (; ; ) {
var f=n.next_;
if (n !== b.next_ ) break;
var v=n.value;
if (v == null ) {
n.helpDelete$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node(b, f);
break;
}if (v === n  || b.value == null  ) break;
if (f != null ) {
b=n;
n=f;
continue;
}if (!n.casValue$O$O(v, null)) break;
var key=n.key;
var ck=p$2.comparable$O.apply(this, [key]);
if (!n.appendMarker$java_util_concurrent_ConcurrentSkipListMap_Node(f) || !b.casNext$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node(n, f) ) p$2.findNode$Comparable.apply(this, [ck]);
 else {
p$2.findPredecessor$Comparable.apply(this, [ck]);
if (this.head.right == null ) p$2.tryReduceLevel.apply(this, []);
}return Clazz.new_($I$(3).c$$TK$TV,[key, v]);
}
}
});

Clazz.newMeth(C$, ['findNear$TK$I'], function (kkey, rel) {
var key=p$2.comparable$O.apply(this, [kkey]);
for (; ; ) {
var b=p$2.findPredecessor$Comparable.apply(this, [key]);
var n=b.next_;
for (; ; ) {
if (n == null ) return ((rel & 2) == 0 || b.isBaseHeader$() ) ? null : b;
var f=n.next_;
if (n !== b.next_ ) break;
var v=n.value;
if (v == null ) {
n.helpDelete$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node(b, f);
break;
}if (v === n  || b.value == null  ) break;
var c=key.compareTo$(n.key);
if ((c == 0 && (rel & 1) != 0 ) || (c < 0 && (rel & 2) == 0 ) ) return n;
if (c <= 0 && (rel & 2) != 0 ) return (b.isBaseHeader$()) ? null : b;
b=n;
n=f;
}
}
});

Clazz.newMeth(C$, ['getNear$TK$I'], function (key, rel) {
for (; ; ) {
var n=this.findNear$TK$I(key, rel);
if (n == null ) return null;
var e=n.createSnapshot$();
if (e != null ) return e;
}
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.comparator=null;
this.initialize$();
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Comparator', function (comparator) {
Clazz.super_(C$, this,1);
this.comparator=comparator;
this.initialize$();
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (m) {
Clazz.super_(C$, this,1);
this.comparator=null;
this.initialize$();
this.putAll$java_util_Map(m);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SortedMap', function (m) {
Clazz.super_(C$, this,1);
this.comparator=m.comparator$();
this.initialize$();
p$2.buildFromSorted$java_util_SortedMap.apply(this, [m]);
}, 1);

Clazz.newMeth(C$, 'clone$', function () {
var clone=null;
try {
clone=C$.superclazz.prototype.clone$.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(16));
} else {
throw e;
}
}
clone.initialize$();
p$2.buildFromSorted$java_util_SortedMap.apply(clone, [this]);
return clone;
});

Clazz.newMeth(C$, 'buildFromSorted$java_util_SortedMap', function (map) {
if (map == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var h=this.head;
var basepred=h.node;
var preds=Clazz.new_($I$(17));
for (var i=0; i <= h.level; ++i) preds.add$TE(null);

var q=h;
for (var i=h.level; i > 0; --i) {
preds.set$I$TE(i, q);
q=q.down;
}
var it=map.entrySet$().iterator$();
while (it.hasNext$()){
var e=it.next$();
var j=p$2.randomLevel.apply(this, []);
if (j > h.level) j=h.level + 1;
var k=e.getKey$();
var v=e.getValue$();
if (k == null  || v == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
var z=Clazz.new_($I$(13).c$$TK$O$java_util_concurrent_ConcurrentSkipListMap_Node,[k, v, null]);
basepred.next_=z;
basepred=z;
if (j > 0) {
var idx=null;
for (var i=1; i <= j; ++i) {
idx=Clazz.new_($I$(15).c$$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index,[z, idx, null]);
if (i > h.level) h=Clazz.new_($I$(12).c$$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index$I,[h.node, h, idx, i]);
if (i < preds.size$()) {
preds.get$I(i).right=idx;
preds.set$I$TE(i, idx);
} else preds.add$TE(idx);
}
}}
this.head=h;
}, p$2);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
s.defaultWriteObject$();
for (var n=this.findFirst$(); n != null ; n=n.next_) {
var v=n.getValidValue$();
if (v != null ) {
s.writeObject$O(n.key);
s.writeObject$O(v);
}}
s.writeObject$O(null);
}, p$2);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
s.defaultReadObject$();
this.initialize$();
var h=this.head;
var basepred=h.node;
var preds=Clazz.new_($I$(17));
for (var i=0; i <= h.level; ++i) preds.add$TE(null);

var q=h;
for (var i=h.level; i > 0; --i) {
preds.set$I$TE(i, q);
q=q.down;
}
for (; ; ) {
var k=s.readObject$();
if (k == null ) break;
var v=s.readObject$();
if (v == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var key=k;
var val=v;
var j=p$2.randomLevel.apply(this, []);
if (j > h.level) j=h.level + 1;
var z=Clazz.new_($I$(13).c$$TK$O$java_util_concurrent_ConcurrentSkipListMap_Node,[key, val, null]);
basepred.next_=z;
basepred=z;
if (j > 0) {
var idx=null;
for (var i=1; i <= j; ++i) {
idx=Clazz.new_($I$(15).c$$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index,[z, idx, null]);
if (i > h.level) h=Clazz.new_($I$(12).c$$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index$I,[h.node, h, idx, i]);
if (i < preds.size$()) {
preds.get$I(i).right=idx;
preds.set$I$TE(i, idx);
} else preds.add$TE(idx);
}
}}
this.head=h;
}, p$2);

Clazz.newMeth(C$, 'containsKey$O', function (key) {
return p$2.doGet$O.apply(this, [key]) != null ;
});

Clazz.newMeth(C$, 'get$O', function (key) {
return p$2.doGet$O.apply(this, [key]);
});

Clazz.newMeth(C$, ['put$TK$TV'], function (key, value) {
if (value == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return p$2.doPut$TK$TV$Z.apply(this, [key, value, false]);
});

Clazz.newMeth(C$, 'remove$O', function (key) {
return this.doRemove$O$O(key, null);
});

Clazz.newMeth(C$, 'containsValue$O', function (value) {
if (value == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
for (var n=this.findFirst$(); n != null ; n=n.next_) {
var v=n.getValidValue$();
if (v != null  && value.equals$O(v) ) return true;
}
return false;
});

Clazz.newMeth(C$, 'size$', function () {
var count=0;
for (var n=this.findFirst$(); n != null ; n=n.next_) {
if (n.getValidValue$() != null ) ++count;
}
return (count >= 2147483647) ? 2147483647 : (count|0);
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.findFirst$() == null ;
});

Clazz.newMeth(C$, 'clear$', function () {
this.initialize$();
});

Clazz.newMeth(C$, 'keySet$', function () {
var ks=this.$keySet;
return (ks != null ) ? ks : (this.$keySet=Clazz.new_($I$(5).c$$java_util_concurrent_ConcurrentNavigableMap,[this]));
});

Clazz.newMeth(C$, 'navigableKeySet$', function () {
var ks=this.$keySet;
return (ks != null ) ? ks : (this.$keySet=Clazz.new_($I$(5).c$$java_util_concurrent_ConcurrentNavigableMap,[this]));
});

Clazz.newMeth(C$, 'values$', function () {
var vs=this.$values;
return (vs != null ) ? vs : (this.$values=Clazz.new_($I$(6).c$$java_util_concurrent_ConcurrentNavigableMap,[this]));
});

Clazz.newMeth(C$, 'entrySet$', function () {
var es=this.entrySet;
return (es != null ) ? es : (this.entrySet=Clazz.new_($I$(7).c$$java_util_concurrent_ConcurrentNavigableMap,[this]));
});

Clazz.newMeth(C$, 'descendingMap$', function () {
var dm=this.descendingMap;
return (dm != null ) ? dm : (this.descendingMap=Clazz.new_($I$(18).c$$java_util_concurrent_ConcurrentSkipListMap$TK$Z$TK$Z$Z,[this, null, false, null, false, true]));
});

Clazz.newMeth(C$, 'descendingKeySet$', function () {
return this.descendingMap$().navigableKeySet$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o === this ) return true;
if (!(Clazz.instanceOf(o, "java.util.Map"))) return false;
var m=o;
try {
for (var e, $e = this.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (!e.getValue$().equals$O(m.get$O(e.getKey$()))) return false;

for (var e, $e = m.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var k=e.getKey$();
var v=e.getValue$();
if (k == null  || v == null   || !v.equals$O(this.get$O(k)) ) return false;
}
return true;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassCastException")){
var unused = e$$;
{
return false;
}
} else if (Clazz.exceptionOf(e$$,"NullPointerException")){
var unused = e$$;
{
return false;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, ['putIfAbsent$TK$TV'], function (key, value) {
if (value == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return p$2.doPut$TK$TV$Z.apply(this, [key, value, true]);
});

Clazz.newMeth(C$, 'remove$O$O', function (key, value) {
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (value == null ) return false;
return this.doRemove$O$O(key, value) != null ;
});

Clazz.newMeth(C$, ['replace$TK$TV$TV'], function (key, oldValue, newValue) {
if (oldValue == null  || newValue == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
var k=p$2.comparable$O.apply(this, [key]);
for (; ; ) {
var n=p$2.findNode$Comparable.apply(this, [k]);
if (n == null ) return false;
var v=n.value;
if (v != null ) {
if (!oldValue.equals$O(v)) return false;
if (n.casValue$O$O(v, newValue)) return true;
}}
});

Clazz.newMeth(C$, ['replace$TK$TV'], function (key, value) {
if (value == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var k=p$2.comparable$O.apply(this, [key]);
for (; ; ) {
var n=p$2.findNode$Comparable.apply(this, [k]);
if (n == null ) return null;
var v=n.value;
if (v != null  && n.casValue$O$O(v, value) ) return v;
}
});

Clazz.newMeth(C$, 'comparator$', function () {
return this.comparator;
});

Clazz.newMeth(C$, 'firstKey$', function () {
var n=this.findFirst$();
if (n == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return n.key;
});

Clazz.newMeth(C$, 'lastKey$', function () {
var n=this.findLast$();
if (n == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return n.key;
});

Clazz.newMeth(C$, ['subMap$TK$Z$TK$Z'], function (fromKey, fromInclusive, toKey, toInclusive) {
if (fromKey == null  || toKey == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
return Clazz.new_($I$(18).c$$java_util_concurrent_ConcurrentSkipListMap$TK$Z$TK$Z$Z,[this, fromKey, fromInclusive, toKey, toInclusive, false]);
});

Clazz.newMeth(C$, ['headMap$TK$Z'], function (toKey, inclusive) {
if (toKey == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return Clazz.new_($I$(18).c$$java_util_concurrent_ConcurrentSkipListMap$TK$Z$TK$Z$Z,[this, null, false, toKey, inclusive, false]);
});

Clazz.newMeth(C$, ['tailMap$TK$Z'], function (fromKey, inclusive) {
if (fromKey == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return Clazz.new_($I$(18).c$$java_util_concurrent_ConcurrentSkipListMap$TK$Z$TK$Z$Z,[this, fromKey, inclusive, null, false, false]);
});

Clazz.newMeth(C$, ['subMap$TK$TK'], function (fromKey, toKey) {
return this.subMap$TK$Z$TK$Z(fromKey, true, toKey, false);
});

Clazz.newMeth(C$, ['headMap$TK'], function (toKey) {
return this.headMap$TK$Z(toKey, false);
});

Clazz.newMeth(C$, ['tailMap$TK'], function (fromKey) {
return this.tailMap$TK$Z(fromKey, true);
});

Clazz.newMeth(C$, ['lowerEntry$TK'], function (key) {
return this.getNear$TK$I(key, 2);
});

Clazz.newMeth(C$, ['lowerKey$TK'], function (key) {
var n=this.findNear$TK$I(key, 2);
return (n == null ) ? null : n.key;
});

Clazz.newMeth(C$, ['floorEntry$TK'], function (key) {
return this.getNear$TK$I(key, 3);
});

Clazz.newMeth(C$, ['floorKey$TK'], function (key) {
var n=this.findNear$TK$I(key, 3);
return (n == null ) ? null : n.key;
});

Clazz.newMeth(C$, ['ceilingEntry$TK'], function (key) {
return this.getNear$TK$I(key, 1);
});

Clazz.newMeth(C$, ['ceilingKey$TK'], function (key) {
var n=this.findNear$TK$I(key, 1);
return (n == null ) ? null : n.key;
});

Clazz.newMeth(C$, ['higherEntry$TK'], function (key) {
return this.getNear$TK$I(key, 0);
});

Clazz.newMeth(C$, ['higherKey$TK'], function (key) {
var n=this.findNear$TK$I(key, 0);
return (n == null ) ? null : n.key;
});

Clazz.newMeth(C$, 'firstEntry$', function () {
for (; ; ) {
var n=this.findFirst$();
if (n == null ) return null;
var e=n.createSnapshot$();
if (e != null ) return e;
}
});

Clazz.newMeth(C$, 'lastEntry$', function () {
for (; ; ) {
var n=this.findLast$();
if (n == null ) return null;
var e=n.createSnapshot$();
if (e != null ) return e;
}
});

Clazz.newMeth(C$, 'pollFirstEntry$', function () {
return this.doRemoveFirstEntry$();
});

Clazz.newMeth(C$, 'pollLastEntry$', function () {
return this.doRemoveLastEntry$();
});

Clazz.newMeth(C$, 'keyIterator$', function () {
return Clazz.new_($I$(19), [this, null]);
});

Clazz.newMeth(C$, 'valueIterator$', function () {
return Clazz.new_($I$(20), [this, null]);
});

Clazz.newMeth(C$, 'entryIterator$', function () {
return Clazz.new_($I$(21), [this, null]);
});

Clazz.newMeth(C$, 'toList$java_util_Collection', function (c) {
var list=Clazz.new_($I$(17));
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) list.add$TE(e);

return list;
}, 1);
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap, "Node", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.nextUpdater=null;
C$.valueUpdater=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.nextUpdater=$I$(1).newUpdater$Class$Class$S(Clazz.getClass(C$), Clazz.getClass(C$), "next");
C$.valueUpdater=$I$(1).newUpdater$Class$Class$S(Clazz.getClass(C$), Clazz.getClass(java.lang.Object), "value");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.key=null;
this.value=null;
this.next_=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$TK$O$java_util_concurrent_ConcurrentSkipListMap_Node', function (key, value, next) {
C$.$init$.apply(this);
this.key=key;
this.value=value;
this.next_=next;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_ConcurrentSkipListMap_Node', function (next) {
C$.$init$.apply(this);
this.key=null;
this.value=this;
this.next_=next;
}, 1);

Clazz.newMeth(C$, 'casValue$O$O', function (cmp, val) {
return C$.valueUpdater.compareAndSet$TT$TV$TV(this, cmp, val);
});

Clazz.newMeth(C$, 'casNext$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node', function (cmp, val) {
return C$.nextUpdater.compareAndSet$TT$TV$TV(this, cmp, val);
});

Clazz.newMeth(C$, 'isMarker$', function () {
return this.value === this ;
});

Clazz.newMeth(C$, 'isBaseHeader$', function () {
return this.value === $I$(2).BASE_HEADER ;
});

Clazz.newMeth(C$, 'appendMarker$java_util_concurrent_ConcurrentSkipListMap_Node', function (f) {
return this.casNext$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node(f, Clazz.new_(C$.c$$java_util_concurrent_ConcurrentSkipListMap_Node,[f]));
});

Clazz.newMeth(C$, 'helpDelete$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node', function (b, f) {
if (f === this.next_  && this === b.next_  ) {
if (f == null  || f.value !== f  ) this.appendMarker$java_util_concurrent_ConcurrentSkipListMap_Node(f);
 else b.casNext$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Node(this, f.next_);
}});

Clazz.newMeth(C$, 'getValidValue$', function () {
var v=this.value;
if (v === this  || v === $I$(2).BASE_HEADER  ) return null;
return v;
});

Clazz.newMeth(C$, 'createSnapshot$', function () {
var v=this.getValidValue$();
if (v == null ) return null;
return Clazz.new_($I$(3).c$$TK$TV,[this.key, v]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap, "Index", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.rightUpdater=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.rightUpdater=$I$(1).newUpdater$Class$Class$S(Clazz.getClass(C$), Clazz.getClass(C$), "right");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.node=null;
this.down=null;
this.right=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index', function (node, down, right) {
C$.$init$.apply(this);
this.node=node;
this.down=down;
this.right=right;
}, 1);

Clazz.newMeth(C$, 'casRight$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index', function (cmp, val) {
return C$.rightUpdater.compareAndSet$TT$TV$TV(this, cmp, val);
});

Clazz.newMeth(C$, 'indexesDeletedNode$', function () {
return this.node.value == null ;
});

Clazz.newMeth(C$, 'link$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index', function (succ, newSucc) {
var n=this.node;
newSucc.right=succ;
return n.value != null  && this.casRight$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index(succ, newSucc) ;
});

Clazz.newMeth(C$, 'unlink$java_util_concurrent_ConcurrentSkipListMap_Index', function (succ) {
return !this.indexesDeletedNode$() && this.casRight$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index(succ, succ.right) ;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap, "HeadIndex", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.ConcurrentSkipListMap','.Index']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.level=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index$I'], function (node, down, right, level) {
C$.superclazz.c$$java_util_concurrent_ConcurrentSkipListMap_Node$java_util_concurrent_ConcurrentSkipListMap_Index$java_util_concurrent_ConcurrentSkipListMap_Index.apply(this, [node, down, right]);
C$.$init$.apply(this);
this.level=level;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap, "ComparableUsingComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Comparable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.actualKey=null;
this.cmp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TK$java_util_Comparator'], function (key, cmp) {
C$.$init$.apply(this);
this.actualKey=key;
this.cmp=cmp;
}, 1);

Clazz.newMeth(C$, ['compareTo$TK','compareTo$','compareTo$TT'], function (k2) {
return this.cmp.compare$(this.actualKey, k2);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap, "Iter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lastReturned=null;
this.next=null;
this.nextValue=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
for (; ; ) {
this.next=this.b$['java.util.concurrent.ConcurrentSkipListMap'].findFirst$.apply(this.b$['java.util.concurrent.ConcurrentSkipListMap'], []);
if (this.next == null ) break;
var x=this.next.value;
if (x != null  && x !== this.next  ) {
this.nextValue=x;
break;
}}
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.next != null ;
});

Clazz.newMeth(C$, 'advance$', function () {
if (this.next == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.lastReturned=this.next;
for (; ; ) {
this.next=this.next.next_;
if (this.next == null ) break;
var x=this.next.value;
if (x != null  && x !== this.next  ) {
this.nextValue=x;
break;
}}
});

Clazz.newMeth(C$, 'remove$', function () {
var l=this.lastReturned;
if (l == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.b$['java.util.concurrent.ConcurrentSkipListMap'].remove$O.apply(this.b$['java.util.concurrent.ConcurrentSkipListMap'], [l.key]);
this.lastReturned=null;
});
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap, "ValueIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.concurrent.ConcurrentSkipListMap','.Iter']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'next$', function () {
var v=this.nextValue;
this.advance$();
return v;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap, "KeyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.concurrent.ConcurrentSkipListMap','.Iter']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'next$', function () {
var n=this.next;
this.advance$();
return n.key;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap, "EntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.concurrent.ConcurrentSkipListMap','.Iter']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'next$', function () {
var n=this.next;
var v=this.nextValue;
this.advance$();
return Clazz.new_($I$(3).c$$TK$TV,[n.key, v]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap, "KeySet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractSet', 'java.util.NavigableSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.m=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_ConcurrentNavigableMap', function (map) {
Clazz.super_(C$, this,1);
this.m=map;
}, 1);

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

Clazz.newMeth(C$, 'clear$', function () {
this.m.clear$();
});

Clazz.newMeth(C$, ['lower$TE'], function (e) {
return this.m.lowerKey$TK(e);
});

Clazz.newMeth(C$, ['floor$TE'], function (e) {
return this.m.floorKey$TK(e);
});

Clazz.newMeth(C$, ['ceiling$TE'], function (e) {
return this.m.ceilingKey$TK(e);
});

Clazz.newMeth(C$, ['higher$TE'], function (e) {
return this.m.higherKey$TK(e);
});

Clazz.newMeth(C$, 'comparator$', function () {
return this.m.comparator$();
});

Clazz.newMeth(C$, 'first$', function () {
return this.m.firstKey$();
});

Clazz.newMeth(C$, 'last$', function () {
return this.m.lastKey$();
});

Clazz.newMeth(C$, 'pollFirst$', function () {
var e=this.m.pollFirstEntry$();
return e == null  ? null : e.getKey$();
});

Clazz.newMeth(C$, 'pollLast$', function () {
var e=this.m.pollLastEntry$();
return e == null  ? null : e.getKey$();
});

Clazz.newMeth(C$, 'iterator$', function () {
if (Clazz.instanceOf(this.m, "java.util.concurrent.ConcurrentSkipListMap")) return (this.m).keyIterator$();
 else return (this.m).keyIterator$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o === this ) return true;
if (!(Clazz.instanceOf(o, "java.util.Set"))) return false;
var c=o;
try {
return this.containsAll$java_util_Collection(c) && c.containsAll$java_util_Collection(this) ;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassCastException")){
var unused = e$$;
{
return false;
}
} else if (Clazz.exceptionOf(e$$,"NullPointerException")){
var unused = e$$;
{
return false;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'toArray$', function () {
return P$.ConcurrentSkipListMap.toList$java_util_Collection(this).toArray$();
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
return P$.ConcurrentSkipListMap.toList$java_util_Collection(this).toArray$TTA(a);
});

Clazz.newMeth(C$, 'descendingIterator$', function () {
return this.descendingSet$().iterator$();
});

Clazz.newMeth(C$, ['subSet$TE$Z$TE$Z'], function (fromElement, fromInclusive, toElement, toInclusive) {
return Clazz.new_(C$.c$$java_util_concurrent_ConcurrentNavigableMap,[this.m.subMap$TK$Z$TK$Z(fromElement, fromInclusive, toElement, toInclusive)]);
});

Clazz.newMeth(C$, ['headSet$TE$Z'], function (toElement, inclusive) {
return Clazz.new_(C$.c$$java_util_concurrent_ConcurrentNavigableMap,[this.m.headMap$TK$Z(toElement, inclusive)]);
});

Clazz.newMeth(C$, ['tailSet$TE$Z'], function (fromElement, inclusive) {
return Clazz.new_(C$.c$$java_util_concurrent_ConcurrentNavigableMap,[this.m.tailMap$TK$Z(fromElement, inclusive)]);
});

Clazz.newMeth(C$, ['subSet$TE$TE'], function (fromElement, toElement) {
return this.subSet$TE$Z$TE$Z(fromElement, true, toElement, false);
});

Clazz.newMeth(C$, ['headSet$TE'], function (toElement) {
return this.headSet$TE$Z(toElement, false);
});

Clazz.newMeth(C$, ['tailSet$TE'], function (fromElement) {
return this.tailSet$TE$Z(fromElement, true);
});

Clazz.newMeth(C$, 'descendingSet$', function () {
return Clazz.new_(C$.c$$java_util_concurrent_ConcurrentNavigableMap,[this.m.descendingMap$()]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap, "Values", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractCollection');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.m=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_concurrent_ConcurrentNavigableMap'], function (map) {
Clazz.super_(C$, this,1);
this.m=map;
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
if (Clazz.instanceOf(this.m, "java.util.concurrent.ConcurrentSkipListMap")) return (this.m).valueIterator$();
 else return (this.m).valueIterator$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.m.isEmpty$();
});

Clazz.newMeth(C$, 'size$', function () {
return this.m.size$();
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.m.containsValue$O(o);
});

Clazz.newMeth(C$, 'clear$', function () {
this.m.clear$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return P$.ConcurrentSkipListMap.toList$java_util_Collection(this).toArray$();
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
return P$.ConcurrentSkipListMap.toList$java_util_Collection(this).toArray$TTA(a);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap, "EntrySet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.m=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_concurrent_ConcurrentNavigableMap'], function (map) {
Clazz.super_(C$, this,1);
this.m=map;
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
if (Clazz.instanceOf(this.m, "java.util.concurrent.ConcurrentSkipListMap")) return (this.m).entryIterator$();
 else return (this.m).entryIterator$();
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
var v=this.m.get$O(e.getKey$());
return v != null  && v.equals$O(e.getValue$()) ;
});

Clazz.newMeth(C$, 'remove$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
return this.m.remove$O$O(e.getKey$(), e.getValue$());
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.m.isEmpty$();
});

Clazz.newMeth(C$, 'size$', function () {
return this.m.size$();
});

Clazz.newMeth(C$, 'clear$', function () {
this.m.clear$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o === this ) return true;
if (!(Clazz.instanceOf(o, "java.util.Set"))) return false;
var c=o;
try {
return this.containsAll$java_util_Collection(c) && c.containsAll$java_util_Collection(this) ;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassCastException")){
var unused = e$$;
{
return false;
}
} else if (Clazz.exceptionOf(e$$,"NullPointerException")){
var unused = e$$;
{
return false;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'toArray$', function () {
return P$.ConcurrentSkipListMap.toList$java_util_Collection(this).toArray$();
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
return P$.ConcurrentSkipListMap.toList$java_util_Collection(this).toArray$TTA(a);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap, "SubMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractMap', ['java.util.concurrent.ConcurrentNavigableMap', 'Cloneable', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.m=null;
this.lo=null;
this.hi=null;
this.loInclusive=false;
this.hiInclusive=false;
this.isDescending=false;
this.keySetView=null;
this.entrySetView=null;
this.valuesView=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_concurrent_ConcurrentSkipListMap$TK$Z$TK$Z$Z'], function (map, fromKey, fromInclusive, toKey, toInclusive, isDescending) {
Clazz.super_(C$, this,1);
if (fromKey != null  && toKey != null   && map.compare$TK$TK(fromKey, toKey) > 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["inconsistent range"]);
this.m=map;
this.lo=fromKey;
this.hi=toKey;
this.loInclusive=fromInclusive;
this.hiInclusive=toInclusive;
this.isDescending=isDescending;
}, 1);

Clazz.newMeth(C$, ['tooLow$TK'], function (key) {
if (this.lo != null ) {
var c=this.m.compare$TK$TK(key, this.lo);
if (c < 0 || (c == 0 && !this.loInclusive ) ) return true;
}return false;
}, p$1);

Clazz.newMeth(C$, ['tooHigh$TK'], function (key) {
if (this.hi != null ) {
var c=this.m.compare$TK$TK(key, this.hi);
if (c > 0 || (c == 0 && !this.hiInclusive ) ) return true;
}return false;
}, p$1);

Clazz.newMeth(C$, ['inBounds$TK'], function (key) {
return !p$1.tooLow$TK.apply(this, [key]) && !p$1.tooHigh$TK.apply(this, [key]) ;
}, p$1);

Clazz.newMeth(C$, ['checkKeyBounds$TK'], function (key) {
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (!p$1.inBounds$TK.apply(this, [key])) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["key out of range"]);
}, p$1);

Clazz.newMeth(C$, ['isBeforeEnd$java_util_concurrent_ConcurrentSkipListMap_Node'], function (n) {
if (n == null ) return false;
if (this.hi == null ) return true;
var k=n.key;
if (k == null ) return true;
var c=this.m.compare$TK$TK(k, this.hi);
if (c > 0 || (c == 0 && !this.hiInclusive ) ) return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'loNode', function () {
if (this.lo == null ) return this.m.findFirst$();
 else if (this.loInclusive) return this.m.findNear$TK$I(this.lo, $I$(2).GT | $I$(2).EQ);
 else return this.m.findNear$TK$I(this.lo, $I$(2).GT);
}, p$1);

Clazz.newMeth(C$, 'hiNode', function () {
if (this.hi == null ) return this.m.findLast$();
 else if (this.hiInclusive) return this.m.findNear$TK$I(this.hi, $I$(2).LT | $I$(2).EQ);
 else return this.m.findNear$TK$I(this.hi, $I$(2).LT);
}, p$1);

Clazz.newMeth(C$, 'lowestKey', function () {
var n=p$1.loNode.apply(this, []);
if (p$1.isBeforeEnd$java_util_concurrent_ConcurrentSkipListMap_Node.apply(this, [n])) return n.key;
 else throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}, p$1);

Clazz.newMeth(C$, 'highestKey', function () {
var n=p$1.hiNode.apply(this, []);
if (n != null ) {
var last=n.key;
if (p$1.inBounds$TK.apply(this, [last])) return last;
}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}, p$1);

Clazz.newMeth(C$, 'lowestEntry', function () {
for (; ; ) {
var n=p$1.loNode.apply(this, []);
if (!p$1.isBeforeEnd$java_util_concurrent_ConcurrentSkipListMap_Node.apply(this, [n])) return null;
var e=n.createSnapshot$();
if (e != null ) return e;
}
}, p$1);

Clazz.newMeth(C$, 'highestEntry', function () {
for (; ; ) {
var n=p$1.hiNode.apply(this, []);
if (n == null  || !p$1.inBounds$TK.apply(this, [n.key]) ) return null;
var e=n.createSnapshot$();
if (e != null ) return e;
}
}, p$1);

Clazz.newMeth(C$, 'removeLowest', function () {
for (; ; ) {
var n=p$1.loNode.apply(this, []);
if (n == null ) return null;
var k=n.key;
if (!p$1.inBounds$TK.apply(this, [k])) return null;
var v=this.m.doRemove$O$O(k, null);
if (v != null ) return Clazz.new_($I$(3).c$$TK$TV,[k, v]);
}
}, p$1);

Clazz.newMeth(C$, 'removeHighest', function () {
for (; ; ) {
var n=p$1.hiNode.apply(this, []);
if (n == null ) return null;
var k=n.key;
if (!p$1.inBounds$TK.apply(this, [k])) return null;
var v=this.m.doRemove$O$O(k, null);
if (v != null ) return Clazz.new_($I$(3).c$$TK$TV,[k, v]);
}
}, p$1);

Clazz.newMeth(C$, ['getNearEntry$TK$I'], function (key, rel) {
if (this.isDescending) {
if ((rel & $I$(2).LT) == 0) rel|=$I$(2).LT;
 else rel&=~$I$(2).LT;
}if (p$1.tooLow$TK.apply(this, [key])) return ((rel & $I$(2).LT) != 0) ? null : p$1.lowestEntry.apply(this, []);
if (p$1.tooHigh$TK.apply(this, [key])) return ((rel & $I$(2).LT) != 0) ? p$1.highestEntry.apply(this, []) : null;
for (; ; ) {
var n=this.m.findNear$TK$I(key, rel);
if (n == null  || !p$1.inBounds$TK.apply(this, [n.key]) ) return null;
var k=n.key;
var v=n.getValidValue$();
if (v != null ) return Clazz.new_($I$(3).c$$TK$TV,[k, v]);
}
}, p$1);

Clazz.newMeth(C$, ['getNearKey$TK$I'], function (key, rel) {
if (this.isDescending) {
if ((rel & $I$(2).LT) == 0) rel|=$I$(2).LT;
 else rel&=~$I$(2).LT;
}if (p$1.tooLow$TK.apply(this, [key])) {
if ((rel & $I$(2).LT) == 0) {
var n=p$1.loNode.apply(this, []);
if (p$1.isBeforeEnd$java_util_concurrent_ConcurrentSkipListMap_Node.apply(this, [n])) return n.key;
}return null;
}if (p$1.tooHigh$TK.apply(this, [key])) {
if ((rel & $I$(2).LT) != 0) {
var n=p$1.hiNode.apply(this, []);
if (n != null ) {
var last=n.key;
if (p$1.inBounds$TK.apply(this, [last])) return last;
}}return null;
}for (; ; ) {
var n=this.m.findNear$TK$I(key, rel);
if (n == null  || !p$1.inBounds$TK.apply(this, [n.key]) ) return null;
var k=n.key;
var v=n.getValidValue$();
if (v != null ) return k;
}
}, p$1);

Clazz.newMeth(C$, 'containsKey$O', function (key) {
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var k=key;
return p$1.inBounds$TK.apply(this, [k]) && this.m.containsKey$O(k) ;
});

Clazz.newMeth(C$, 'get$O', function (key) {
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var k=key;
return ((!p$1.inBounds$TK.apply(this, [k])) ? null : this.m.get$O(k));
});

Clazz.newMeth(C$, ['put$TK$TV'], function (key, value) {
p$1.checkKeyBounds$TK.apply(this, [key]);
return this.m.put$TK$TV(key, value);
});

Clazz.newMeth(C$, 'remove$O', function (key) {
var k=key;
return (!p$1.inBounds$TK.apply(this, [k])) ? null : this.m.remove$O(k);
});

Clazz.newMeth(C$, 'size$', function () {
var count=0;
for (var n=p$1.loNode.apply(this, []); p$1.isBeforeEnd$java_util_concurrent_ConcurrentSkipListMap_Node.apply(this, [n]); n=n.next_) {
if (n.getValidValue$() != null ) ++count;
}
return count >= 2147483647 ? 2147483647 : (count|0);
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return !p$1.isBeforeEnd$java_util_concurrent_ConcurrentSkipListMap_Node.apply(this, [p$1.loNode.apply(this, [])]);
});

Clazz.newMeth(C$, 'containsValue$O', function (value) {
if (value == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
for (var n=p$1.loNode.apply(this, []); p$1.isBeforeEnd$java_util_concurrent_ConcurrentSkipListMap_Node.apply(this, [n]); n=n.next_) {
var v=n.getValidValue$();
if (v != null  && value.equals$O(v) ) return true;
}
return false;
});

Clazz.newMeth(C$, 'clear$', function () {
for (var n=p$1.loNode.apply(this, []); p$1.isBeforeEnd$java_util_concurrent_ConcurrentSkipListMap_Node.apply(this, [n]); n=n.next_) {
if (n.getValidValue$() != null ) this.m.remove$O(n.key);
}
});

Clazz.newMeth(C$, ['putIfAbsent$TK$TV'], function (key, value) {
p$1.checkKeyBounds$TK.apply(this, [key]);
return this.m.putIfAbsent$TK$TV(key, value);
});

Clazz.newMeth(C$, 'remove$O$O', function (key, value) {
var k=key;
return p$1.inBounds$TK.apply(this, [k]) && this.m.remove$O$O(k, value) ;
});

Clazz.newMeth(C$, ['replace$TK$TV$TV'], function (key, oldValue, newValue) {
p$1.checkKeyBounds$TK.apply(this, [key]);
return this.m.replace$TK$TV$TV(key, oldValue, newValue);
});

Clazz.newMeth(C$, ['replace$TK$TV'], function (key, value) {
p$1.checkKeyBounds$TK.apply(this, [key]);
return this.m.replace$TK$TV(key, value);
});

Clazz.newMeth(C$, 'comparator$', function () {
var cmp=this.m.comparator$();
if (this.isDescending) return $I$(4).reverseOrder$java_util_Comparator(cmp);
 else return cmp;
});

Clazz.newMeth(C$, ['newSubMap$TK$Z$TK$Z'], function (fromKey, fromInclusive, toKey, toInclusive) {
if (this.isDescending) {
var tk=fromKey;
fromKey=toKey;
toKey=tk;
var ti=fromInclusive;
fromInclusive=toInclusive;
toInclusive=ti;
}if (this.lo != null ) {
if (fromKey == null ) {
fromKey=this.lo;
fromInclusive=this.loInclusive;
} else {
var c=this.m.compare$TK$TK(fromKey, this.lo);
if (c < 0 || (c == 0 && !this.loInclusive  && fromInclusive ) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["key out of range"]);
}}if (this.hi != null ) {
if (toKey == null ) {
toKey=this.hi;
toInclusive=this.hiInclusive;
} else {
var c=this.m.compare$TK$TK(toKey, this.hi);
if (c > 0 || (c == 0 && !this.hiInclusive  && toInclusive ) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["key out of range"]);
}}return Clazz.new_(C$.c$$java_util_concurrent_ConcurrentSkipListMap$TK$Z$TK$Z$Z,[this.m, fromKey, fromInclusive, toKey, toInclusive, this.isDescending]);
}, p$1);

Clazz.newMeth(C$, ['subMap$TK$Z$TK$Z'], function (fromKey, fromInclusive, toKey, toInclusive) {
if (fromKey == null  || toKey == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
return p$1.newSubMap$TK$Z$TK$Z.apply(this, [fromKey, fromInclusive, toKey, toInclusive]);
});

Clazz.newMeth(C$, ['headMap$TK$Z'], function (toKey, inclusive) {
if (toKey == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return p$1.newSubMap$TK$Z$TK$Z.apply(this, [null, false, toKey, inclusive]);
});

Clazz.newMeth(C$, ['tailMap$TK$Z'], function (fromKey, inclusive) {
if (fromKey == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return p$1.newSubMap$TK$Z$TK$Z.apply(this, [fromKey, inclusive, null, false]);
});

Clazz.newMeth(C$, ['subMap$TK$TK'], function (fromKey, toKey) {
return this.subMap$TK$Z$TK$Z(fromKey, true, toKey, false);
});

Clazz.newMeth(C$, ['headMap$TK'], function (toKey) {
return this.headMap$TK$Z(toKey, false);
});

Clazz.newMeth(C$, ['tailMap$TK'], function (fromKey) {
return this.tailMap$TK$Z(fromKey, true);
});

Clazz.newMeth(C$, 'descendingMap$', function () {
return Clazz.new_(C$.c$$java_util_concurrent_ConcurrentSkipListMap$TK$Z$TK$Z$Z,[this.m, this.lo, this.loInclusive, this.hi, this.hiInclusive, !this.isDescending]);
});

Clazz.newMeth(C$, ['ceilingEntry$TK'], function (key) {
return p$1.getNearEntry$TK$I.apply(this, [key, ($I$(2).GT | $I$(2).EQ)]);
});

Clazz.newMeth(C$, ['ceilingKey$TK'], function (key) {
return p$1.getNearKey$TK$I.apply(this, [key, ($I$(2).GT | $I$(2).EQ)]);
});

Clazz.newMeth(C$, ['lowerEntry$TK'], function (key) {
return p$1.getNearEntry$TK$I.apply(this, [key, ($I$(2).LT)]);
});

Clazz.newMeth(C$, ['lowerKey$TK'], function (key) {
return p$1.getNearKey$TK$I.apply(this, [key, ($I$(2).LT)]);
});

Clazz.newMeth(C$, ['floorEntry$TK'], function (key) {
return p$1.getNearEntry$TK$I.apply(this, [key, ($I$(2).LT | $I$(2).EQ)]);
});

Clazz.newMeth(C$, ['floorKey$TK'], function (key) {
return p$1.getNearKey$TK$I.apply(this, [key, ($I$(2).LT | $I$(2).EQ)]);
});

Clazz.newMeth(C$, ['higherEntry$TK'], function (key) {
return p$1.getNearEntry$TK$I.apply(this, [key, ($I$(2).GT)]);
});

Clazz.newMeth(C$, ['higherKey$TK'], function (key) {
return p$1.getNearKey$TK$I.apply(this, [key, ($I$(2).GT)]);
});

Clazz.newMeth(C$, 'firstKey$', function () {
return this.isDescending ? p$1.highestKey.apply(this, []) : p$1.lowestKey.apply(this, []);
});

Clazz.newMeth(C$, 'lastKey$', function () {
return this.isDescending ? p$1.lowestKey.apply(this, []) : p$1.highestKey.apply(this, []);
});

Clazz.newMeth(C$, 'firstEntry$', function () {
return this.isDescending ? p$1.highestEntry.apply(this, []) : p$1.lowestEntry.apply(this, []);
});

Clazz.newMeth(C$, 'lastEntry$', function () {
return this.isDescending ? p$1.lowestEntry.apply(this, []) : p$1.highestEntry.apply(this, []);
});

Clazz.newMeth(C$, 'pollFirstEntry$', function () {
return this.isDescending ? p$1.removeHighest.apply(this, []) : p$1.removeLowest.apply(this, []);
});

Clazz.newMeth(C$, 'pollLastEntry$', function () {
return this.isDescending ? p$1.removeLowest.apply(this, []) : p$1.removeHighest.apply(this, []);
});

Clazz.newMeth(C$, 'keySet$', function () {
var ks=this.keySetView;
return (ks != null ) ? ks : (this.keySetView=Clazz.new_($I$(5).c$$java_util_concurrent_ConcurrentNavigableMap,[this]));
});

Clazz.newMeth(C$, 'navigableKeySet$', function () {
var ks=this.keySetView;
return (ks != null ) ? ks : (this.keySetView=Clazz.new_($I$(5).c$$java_util_concurrent_ConcurrentNavigableMap,[this]));
});

Clazz.newMeth(C$, 'values$', function () {
var vs=this.valuesView;
return (vs != null ) ? vs : (this.valuesView=Clazz.new_($I$(6).c$$java_util_concurrent_ConcurrentNavigableMap,[this]));
});

Clazz.newMeth(C$, 'entrySet$', function () {
var es=this.entrySetView;
return (es != null ) ? es : (this.entrySetView=Clazz.new_($I$(7).c$$java_util_concurrent_ConcurrentNavigableMap,[this]));
});

Clazz.newMeth(C$, 'descendingKeySet$', function () {
return this.descendingMap$().navigableKeySet$();
});

Clazz.newMeth(C$, 'keyIterator$', function () {
return Clazz.new_($I$(8), [this, null]);
});

Clazz.newMeth(C$, 'valueIterator$', function () {
return Clazz.new_($I$(9), [this, null]);
});

Clazz.newMeth(C$, 'entryIterator$', function () {
return Clazz.new_($I$(10), [this, null]);
});
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap.SubMap, "SubMapIter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lastReturned=null;
this.next=null;
this.nextValue=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
for (; ; ) {
this.next=this.this$0.isDescending ? p$1.hiNode.apply(this.b$['java.util.concurrent.ConcurrentSkipListMap.SubMap'], []) : p$1.loNode.apply(this.b$['java.util.concurrent.ConcurrentSkipListMap.SubMap'], []);
if (this.next == null ) break;
var x=this.next.value;
if (x != null  && x !== this.next  ) {
if (!p$1.inBounds$TK.apply(this.b$['java.util.concurrent.ConcurrentSkipListMap.SubMap'], [this.next.key])) this.next=null;
 else this.nextValue=x;
break;
}}
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.next != null ;
});

Clazz.newMeth(C$, 'advance$', function () {
if (this.next == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.lastReturned=this.next;
if (this.this$0.isDescending) p$1.descend.apply(this, []);
 else p$1.ascend.apply(this, []);
});

Clazz.newMeth(C$, 'ascend', function () {
for (; ; ) {
this.next=this.next.next_;
if (this.next == null ) break;
var x=this.next.value;
if (x != null  && x !== this.next  ) {
if (p$1.tooHigh$TK.apply(this.b$['java.util.concurrent.ConcurrentSkipListMap.SubMap'], [this.next.key])) this.next=null;
 else this.nextValue=x;
break;
}}
}, p$1);

Clazz.newMeth(C$, 'descend', function () {
for (; ; ) {
this.next=this.this$0.m.findNear$TK$I(this.lastReturned.key, 2);
if (this.next == null ) break;
var x=this.next.value;
if (x != null  && x !== this.next  ) {
if (p$1.tooLow$TK.apply(this.b$['java.util.concurrent.ConcurrentSkipListMap.SubMap'], [this.next.key])) this.next=null;
 else this.nextValue=x;
break;
}}
}, p$1);

Clazz.newMeth(C$, 'remove$', function () {
var l=this.lastReturned;
if (l == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.this$0.m.remove$O(l.key);
this.lastReturned=null;
});
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap.SubMap, "SubMapValueIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.concurrent.ConcurrentSkipListMap','.SubMap','.SubMapIter']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'next$', function () {
var v=this.nextValue;
this.advance$();
return v;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap.SubMap, "SubMapKeyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.concurrent.ConcurrentSkipListMap','.SubMap','.SubMapIter']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'next$', function () {
var n=this.next;
this.advance$();
return n.key;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentSkipListMap.SubMap, "SubMapEntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.concurrent.ConcurrentSkipListMap','.SubMap','.SubMapIter']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'next$', function () {
var n=this.next;
var v=this.nextValue;
this.advance$();
return Clazz.new_($I$(3).c$$TK$TV,[n.key, v]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
