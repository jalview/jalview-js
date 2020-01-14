(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.ConcurrentSkipListMap','InternalError','Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ConcurrentSkipListSet", null, 'java.util.AbstractSet', ['java.util.NavigableSet', 'Cloneable', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.m=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.m=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Comparator', function (comparator) {
Clazz.super_(C$, this,1);
this.m=Clazz.new_($I$(1).c$$java_util_Comparator,[comparator]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
Clazz.super_(C$, this,1);
this.m=Clazz.new_($I$(1));
this.addAll$java_util_Collection(c);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SortedSet', function (s) {
Clazz.super_(C$, this,1);
this.m=Clazz.new_($I$(1).c$$java_util_Comparator,[s.comparator$()]);
this.addAll$java_util_Collection(s);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_ConcurrentNavigableMap', function (m) {
Clazz.super_(C$, this,1);
this.m=m;
}, 1);

Clazz.newMeth(C$, 'clone$', function () {
var clone=null;
try {
clone=Clazz.clone(this);
p$1.setMap$java_util_concurrent_ConcurrentNavigableMap.apply(clone, [Clazz.new_($I$(1).c$$java_util_SortedMap,[this.m])]);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(2));
} else {
throw e;
}
}
return clone;
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
return this.m.putIfAbsent$TK$TV(e, $I$(3).TRUE) == null ;
});

Clazz.newMeth(C$, 'remove$O', function (o) {
return this.m.remove$O$O(o, $I$(3).TRUE);
});

Clazz.newMeth(C$, 'clear$', function () {
this.m.clear$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.m.navigableKeySet$().iterator$();
});

Clazz.newMeth(C$, 'descendingIterator$', function () {
return this.m.descendingKeySet$().iterator$();
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

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
var modified=false;
for (var i=c.iterator$(); i.hasNext$(); ) if (this.remove$O(i.next$())) modified=true;

return modified;
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
return e == null  ? null : e.getKey$();
});

Clazz.newMeth(C$, 'pollLast$', function () {
var e=this.m.pollLastEntry$();
return e == null  ? null : e.getKey$();
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

Clazz.newMeth(C$, 'setMap$java_util_concurrent_ConcurrentNavigableMap', function (map) {
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
