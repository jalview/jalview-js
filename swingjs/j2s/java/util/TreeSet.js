(function(){var P$=java.util,p$1={},I$=[[0,'java.util.TreeMap','InternalError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TreeSet", null, 'java.util.AbstractSet', ['java.util.NavigableSet', 'Cloneable', 'java.io.Serializable']);
C$.PRESENT=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.PRESENT= Clazz.new_();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.m=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_NavigableMap', function (m) {
Clazz.super_(C$, this,1);
this.m=m;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_NavigableMap.apply(this, [Clazz.new_($I$(1))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Comparator', function (comparator) {
C$.c$$java_util_NavigableMap.apply(this, [Clazz.new_($I$(1).c$$java_util_Comparator,[comparator])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
C$.c$.apply(this, []);
this.addAll$java_util_Collection(c);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SortedSet', function (s) {
C$.c$$java_util_Comparator.apply(this, [s.comparator$()]);
this.addAll$java_util_Collection(s);
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return this.m.navigableKeySet$().iterator$();
});

Clazz.newMeth(C$, 'descendingIterator$', function () {
return this.m.descendingKeySet$().iterator$();
});

Clazz.newMeth(C$, 'descendingSet$', function () {
return Clazz.new_(C$.c$$java_util_NavigableMap,[this.m.descendingMap$()]);
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

Clazz.newMeth(C$, ['add$TE'], function (e) {
return this.m.put$TK$TV(e, C$.PRESENT) == null ;
});

Clazz.newMeth(C$, 'remove$O', function (o) {
return this.m.remove$O(o) === C$.PRESENT ;
});

Clazz.newMeth(C$, 'clear$', function () {
this.m.clear$();
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
if (this.m.size$() == 0 && c.size$() > 0  && Clazz.instanceOf(c, "java.util.SortedSet")  && Clazz.instanceOf(this.m, "java.util.TreeMap") ) {
var set=c;
var map=this.m;
var cc=set.comparator$();
var mc=map.comparator$();
if (cc === mc  || (cc != null  && cc.equals$O(mc) ) ) {
map.addAllForTreeSet$java_util_SortedSet$TV(set, C$.PRESENT);
return true;
}}return C$.superclazz.prototype.addAll$java_util_Collection.apply(this, [c]);
});

Clazz.newMeth(C$, ['subSet$TE$Z$TE$Z'], function (fromElement, fromInclusive, toElement, toInclusive) {
return Clazz.new_(C$.c$$java_util_NavigableMap,[this.m.subMap$TK$Z$TK$Z(fromElement, fromInclusive, toElement, toInclusive)]);
});

Clazz.newMeth(C$, ['headSet$TE$Z'], function (toElement, inclusive) {
return Clazz.new_(C$.c$$java_util_NavigableMap,[this.m.headMap$TK$Z(toElement, inclusive)]);
});

Clazz.newMeth(C$, ['tailSet$TE$Z'], function (fromElement, inclusive) {
return Clazz.new_(C$.c$$java_util_NavigableMap,[this.m.tailMap$TK$Z(fromElement, inclusive)]);
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

Clazz.newMeth(C$, 'comparator$', function () {
return this.m.comparator$();
});

Clazz.newMeth(C$, 'first$', function () {
return this.m.firstKey$();
});

Clazz.newMeth(C$, 'last$', function () {
return this.m.lastKey$();
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

Clazz.newMeth(C$, 'pollFirst$', function () {
var e=this.m.pollFirstEntry$();
return (e == null ) ? null : e.getKey$();
});

Clazz.newMeth(C$, 'pollLast$', function () {
var e=this.m.pollLastEntry$();
return (e == null ) ? null : e.getKey$();
});

Clazz.newMeth(C$, 'clone$', function () {
var clone;
try {
clone=Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(2).c$$Throwable,[e]);
} else {
throw e;
}
}
clone.m=Clazz.new_($I$(1).c$$java_util_SortedMap,[this.m]);
return clone;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
s.defaultWriteObject$();
s.writeObject$O(this.m.comparator$());
s.writeInt$I(this.m.size$());
for (var e, $e = this.m.keySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) s.writeObject$O(e);

}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
s.defaultReadObject$();
var c=s.readObject$();
var tm=Clazz.new_($I$(1).c$$java_util_Comparator,[c]);
this.m=tm;
var size=s.readInt$();
tm.readTreeSet$I$java_io_ObjectInputStream$TV(size, s, C$.PRESENT);
}, p$1);

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(1).keySpliteratorFor$java_util_NavigableMap(this.m);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
