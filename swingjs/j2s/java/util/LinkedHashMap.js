(function(){var P$=java.util,p$1={},I$=[[0,['java.util.LinkedHashMap','.LinkedKeyIterator'],'java.util.Spliterators',['java.util.LinkedHashMap','.LinkedValueIterator'],['java.util.LinkedHashMap','.LinkedEntryIterator'],['java.util.LinkedHashMap','.Entry'],['java.util.HashMap','.TreeNode'],['java.util.LinkedHashMap','.LinkedKeySet'],['java.util.LinkedHashMap','.LinkedValues'],['java.util.LinkedHashMap','.LinkedEntrySet']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "LinkedHashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.HashMap', 'java.util.Map');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.head=null;
this.tail=null;
this.accessOrder=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['linkNodeLast$java_util_LinkedHashMap_Entry'], function (p) {
var last=this.tail;
this.tail=p;
if (last == null ) this.head=p;
 else {
p.before=last;
last.after=p;
}}, p$1);

Clazz.newMeth(C$, ['transferLinks$java_util_LinkedHashMap_Entry$java_util_LinkedHashMap_Entry'], function (src, dst) {
var b=dst.before=src.before;
var a=dst.after=src.after;
if (b == null ) this.head=dst;
 else b.after=dst;
if (a == null ) this.tail=dst;
 else a.before=dst;
}, p$1);

Clazz.newMeth(C$, 'reinitialize$', function () {
C$.superclazz.prototype.reinitialize$.apply(this, []);
this.head=this.tail=null;
});

Clazz.newMeth(C$, ['newNode$I$TK$TV$java_util_HashMap_Node'], function (hash, key, value, e) {
var p=Clazz.new_($I$(5).c$$I$TK$TV$java_util_HashMap_Node,[hash, key, value, e]);
p$1.linkNodeLast$java_util_LinkedHashMap_Entry.apply(this, [p]);
return p;
});

Clazz.newMeth(C$, ['replacementNode$java_util_HashMap_Node$java_util_HashMap_Node'], function (p, next) {
var q=p;
var t=Clazz.new_($I$(5).c$$I$TK$TV$java_util_HashMap_Node,[q.hash, q.key, q.value, next]);
p$1.transferLinks$java_util_LinkedHashMap_Entry$java_util_LinkedHashMap_Entry.apply(this, [q, t]);
return t;
});

Clazz.newMeth(C$, ['newTreeNode$I$TK$TV$java_util_HashMap_Node'], function (hash, key, value, next) {
var p=Clazz.new_($I$(6).c$$I$TK$TV$java_util_HashMap_Node,[hash, key, value, next]);
p$1.linkNodeLast$java_util_LinkedHashMap_Entry.apply(this, [p]);
return p;
});

Clazz.newMeth(C$, ['replacementTreeNode$java_util_HashMap_Node$java_util_HashMap_Node'], function (p, next) {
var q=p;
var t=Clazz.new_($I$(6).c$$I$TK$TV$java_util_HashMap_Node,[q.hash, q.key, q.value, next]);
p$1.transferLinks$java_util_LinkedHashMap_Entry$java_util_LinkedHashMap_Entry.apply(this, [q, t]);
return t;
});

Clazz.newMeth(C$, ['afterNodeRemoval$java_util_HashMap_Node'], function (e) {
var p=e;
var b=p.before;
var a=p.after;
p.before=p.after=null;
if (b == null ) this.head=a;
 else b.after=a;
if (a == null ) this.tail=b;
 else a.before=b;
});

Clazz.newMeth(C$, 'afterNodeInsertion$Z', function (evict) {
var first;
if (evict && (first=this.head) != null   && this.removeEldestEntry$java_util_Map_Entry(first) ) {
var key=first.key;
this.removeNode$I$O$O$Z$Z(P$.HashMap.hash$O(key), key, null, false, true);
}});

Clazz.newMeth(C$, ['afterNodeAccess$java_util_HashMap_Node'], function (e) {
var last;
if (this.accessOrder && (last=this.tail) !== e  ) {
var p=e;
var b=p.before;
var a=p.after;
p.after=null;
if (b == null ) this.head=a;
 else b.after=a;
if (a != null ) a.before=b;
 else last=b;
if (last == null ) this.head=p;
 else {
p.before=last;
last.after=p;
}this.tail=p;
++this.modCount;
}});

Clazz.newMeth(C$, 'internalWriteEntries$java_io_ObjectOutputStream', function (s) {
for (var e=this.head; e != null ; e=e.after) {
s.writeObject$O(e.key);
s.writeObject$O(e.value);
}
});

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
C$.superclazz.c$$I$F.apply(this, [initialCapacity, loadFactor]);
C$.$init$.apply(this);
this.accessOrder=false;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
C$.superclazz.c$$I.apply(this, [initialCapacity]);
C$.$init$.apply(this);
this.accessOrder=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.accessOrder=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (m) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.accessOrder=false;
this.putMapEntries$java_util_Map$Z(m, false);
}, 1);

Clazz.newMeth(C$, 'c$$I$F$Z', function (initialCapacity, loadFactor, accessOrder) {
C$.superclazz.c$$I$F.apply(this, [initialCapacity, loadFactor]);
C$.$init$.apply(this);
this.accessOrder=accessOrder;
}, 1);

Clazz.newMeth(C$, 'containsValue$O', function (value) {
for (var e=this.head; e != null ; e=e.after) {
var v=e.value;
if (v === value  || (value != null  && value.equals$O(v) ) ) return true;
}
return false;
});

Clazz.newMeth(C$, 'get$O', function (key) {
var e;
if ((e=this.getNode$I$O(P$.HashMap.hash$O(key), key)) == null ) return null;
if (this.accessOrder) this.afterNodeAccess$java_util_HashMap_Node(e);
return e.value;
});

Clazz.newMeth(C$, ['getOrDefault$O$TV'], function (key, defaultValue) {
var e;
if ((e=this.getNode$I$O(P$.HashMap.hash$O(key), key)) == null ) return defaultValue;
if (this.accessOrder) this.afterNodeAccess$java_util_HashMap_Node(e);
return e.value;
});

Clazz.newMeth(C$, 'clear$', function () {
C$.superclazz.prototype.clear$.apply(this, []);
this.head=this.tail=null;
});

Clazz.newMeth(C$, ['removeEldestEntry$java_util_Map_Entry'], function (eldest) {
return false;
});

Clazz.newMeth(C$, 'keySet$', function () {
var ks;
return (ks=this.keySet) == null  ? (this.keySet=Clazz.new_($I$(7), [this, null])) : ks;
});

Clazz.newMeth(C$, 'values$', function () {
var vs;
return (vs=this.values) == null  ? (this.values=Clazz.new_($I$(8), [this, null])) : vs;
});

Clazz.newMeth(C$, 'entrySet$', function () {
var es;
return (es=this.entrySet) == null  ? (this.entrySet=Clazz.new_($I$(9), [this, null])) : es;
});

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer', function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var mc=this.modCount;
for (var e=this.head; e != null ; e=e.after) action.accept$(e.key, e.value);

if (this.modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction', function ($function) {
if ($function == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var mc=this.modCount;
for (var e=this.head; e != null ; e=e.after) e.value=$function.apply$(e.key, e.value);

if (this.modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});
;
(function(){var C$=Clazz.newClass(P$.LinkedHashMap, "Entry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.HashMap','.Node']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.before=null;
this.after=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$I$TK$TV$java_util_HashMap_Node'], function (hash, key, value, next) {
C$.superclazz.c$$I$TK$TV$java_util_HashMap_Node.apply(this, [hash, key, value, next]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.LinkedHashMap, "LinkedKeySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.this$0.size;
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['java.util.LinkedHashMap'].clear$.apply(this.b$['java.util.LinkedHashMap'], []);
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(1), [this, null]);
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.b$['java.util.HashMap'].containsKey$O.apply(this.b$['java.util.HashMap'], [o]);
});

Clazz.newMeth(C$, 'remove$O', function (key) {
return this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z.apply(this.b$['java.util.HashMap'], [P$.HashMap.hash$O(key), key, null, false, true]) != null ;
});

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(2).spliterator$java_util_Collection$I(this, 81);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var mc=this.this$0.modCount;
for (var e=this.this$0.head; e != null ; e=e.after) action.accept$(e.key);

if (this.this$0.modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.LinkedHashMap, "LinkedValues", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractCollection');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.this$0.size;
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['java.util.LinkedHashMap'].clear$.apply(this.b$['java.util.LinkedHashMap'], []);
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(3), [this, null]);
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.b$['java.util.LinkedHashMap'].containsValue$O.apply(this.b$['java.util.LinkedHashMap'], [o]);
});

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(2).spliterator$java_util_Collection$I(this, 80);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var mc=this.this$0.modCount;
for (var e=this.this$0.head; e != null ; e=e.after) action.accept$(e.value);

if (this.this$0.modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.LinkedHashMap, "LinkedEntrySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.this$0.size;
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['java.util.LinkedHashMap'].clear$.apply(this.b$['java.util.LinkedHashMap'], []);
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(4), [this, null]);
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
var key=e.getKey$();
var candidate=this.b$['java.util.HashMap'].getNode$I$O.apply(this.b$['java.util.HashMap'], [P$.HashMap.hash$O(key), key]);
return candidate != null  && candidate.equals$O(e) ;
});

Clazz.newMeth(C$, 'remove$O', function (o) {
if (Clazz.instanceOf(o, "java.util.Map.Entry")) {
var e=o;
var key=e.getKey$();
var value=e.getValue$();
return this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z.apply(this.b$['java.util.HashMap'], [P$.HashMap.hash$O(key), key, value, true, true]) != null ;
}return false;
});

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(2).spliterator$java_util_Collection$I(this, 81);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var mc=this.this$0.modCount;
for (var e=this.this$0.head; e != null ; e=e.after) action.accept$(e);

if (this.this$0.modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.LinkedHashMap, "LinkedHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nextItem=null;
this.current=null;
this.expectedModCount=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.nextItem=this.this$0.head;
this.expectedModCount=this.this$0.modCount;
this.current=null;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.nextItem != null ;
});

Clazz.newMeth(C$, 'nextNode$', function () {
var e=this.nextItem;
if (this.this$0.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
if (e == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.current=e;
this.nextItem=e.after;
return e;
});

Clazz.newMeth(C$, 'remove$', function () {
var p=this.current;
if (p == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
if (this.this$0.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
this.current=null;
var key=p.key;
this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z.apply(this.b$['java.util.HashMap'], [P$.HashMap.hash$O(key), key, null, false, false]);
this.expectedModCount=this.this$0.modCount;
});
})()
;
(function(){var C$=Clazz.newClass(P$.LinkedHashMap, "LinkedKeyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.LinkedHashMap','.LinkedHashIterator'], 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'next$', function () {
return this.nextNode$().getKey$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.LinkedHashMap, "LinkedValueIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.LinkedHashMap','.LinkedHashIterator'], 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'next$', function () {
return this.nextNode$().value;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.LinkedHashMap, "LinkedEntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.LinkedHashMap','.LinkedHashIterator'], 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'next$', function () {
return this.nextNode$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
