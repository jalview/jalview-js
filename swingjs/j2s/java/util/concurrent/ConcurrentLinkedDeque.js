(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'sun.misc.Unsafe','Error','java.util.Spliterators',['java.util.concurrent.ConcurrentLinkedDeque','.Node'],'java.util.ArrayList',['java.util.concurrent.ConcurrentLinkedDeque','.Itr'],['java.util.concurrent.ConcurrentLinkedDeque','.DescendingItr'],['java.util.concurrent.ConcurrentLinkedDeque','.CLDSpliterator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ConcurrentLinkedDeque", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractCollection', ['java.util.Deque', 'java.io.Serializable']);
C$.PREV_TERMINATOR=null;
C$.NEXT_TERMINATOR=null;
C$.UNSAFE=null;
C$.headOffset=0;
C$.tailOffset=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.headOffset=0;
C$.tailOffset=0;
{
C$.PREV_TERMINATOR=Clazz.new_($I$(4));
C$.PREV_TERMINATOR.next=C$.PREV_TERMINATOR;
C$.NEXT_TERMINATOR=Clazz.new_($I$(4));
C$.NEXT_TERMINATOR.prev=C$.NEXT_TERMINATOR;
try {
C$.UNSAFE=$I$(1).getUnsafe$();
var k=Clazz.getClass(C$);
C$.headOffset=C$.UNSAFE.objectFieldOffset$reflect_Field(k.getDeclaredField$S("head"));
C$.tailOffset=C$.UNSAFE.objectFieldOffset$reflect_Field(k.getDeclaredField$S("tail"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(2).c$$Throwable,[e]);
} else {
throw e;
}
}
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.head=null;
this.tail=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'prevTerminator$', function () {
return C$.PREV_TERMINATOR;
});

Clazz.newMeth(C$, 'nextTerminator$', function () {
return C$.NEXT_TERMINATOR;
});

Clazz.newMeth(C$, ['linkFirst$TE'], function (e) {
C$.checkNotNull$O(e);
var newNode=Clazz.new_($I$(4).c$$TE,[e]);
 restartFromHead : for (; ; ) for (var h=this.head, p=h, q; ; ) {
if ((q=p.prev) != null  && (q=(p=q).prev) != null  ) p=(h !== (h=this.head) ) ? h : q;
 else if (p.next === p ) continue restartFromHead;
 else {
newNode.lazySetNext$java_util_concurrent_ConcurrentLinkedDeque_Node(p);
if (p.casPrev$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node(null, newNode)) {
if (p !== h ) p$1.casHead$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [h, newNode]);
return;
}}}

}, p$1);

Clazz.newMeth(C$, ['linkLast$TE'], function (e) {
C$.checkNotNull$O(e);
var newNode=Clazz.new_($I$(4).c$$TE,[e]);
 restartFromTail : for (; ; ) for (var t=this.tail, p=t, q; ; ) {
if ((q=p.next) != null  && (q=(p=q).next) != null  ) p=(t !== (t=this.tail) ) ? t : q;
 else if (p.prev === p ) continue restartFromTail;
 else {
newNode.lazySetPrev$java_util_concurrent_ConcurrentLinkedDeque_Node(p);
if (p.casNext$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node(null, newNode)) {
if (p !== t ) p$1.casTail$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [t, newNode]);
return;
}}}

}, p$1);

Clazz.newMeth(C$, 'unlink$java_util_concurrent_ConcurrentLinkedDeque_Node', function (x) {
var prev=x.prev;
var next=x.next;
if (prev == null ) {
p$1.unlinkFirst$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [x, next]);
} else if (next == null ) {
p$1.unlinkLast$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [x, prev]);
} else {
var activePred;
var activeSucc;
var isFirst;
var isLast;
var hops=1;
for (var p=prev; ; ++hops) {
if (p.item != null ) {
activePred=p;
isFirst=false;
break;
}var q=p.prev;
if (q == null ) {
if (p.next === p ) return;
activePred=p;
isFirst=true;
break;
} else if (p === q ) return;
 else p=q;
}
for (var p=next; ; ++hops) {
if (p.item != null ) {
activeSucc=p;
isLast=false;
break;
}var q=p.next;
if (q == null ) {
if (p.prev === p ) return;
activeSucc=p;
isLast=true;
break;
} else if (p === q ) return;
 else p=q;
}
if (hops < 2 && (!!(isFirst | isLast)) ) return;
p$1.skipDeletedSuccessors$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [activePred]);
p$1.skipDeletedPredecessors$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [activeSucc]);
if ((!!(isFirst | isLast)) && (activePred.next === activeSucc ) && (activeSucc.prev === activePred ) && (isFirst ? activePred.prev == null  : activePred.item != null ) && (isLast ? activeSucc.next == null  : activeSucc.item != null )  ) {
p$1.updateHead.apply(this, []);
p$1.updateTail.apply(this, []);
x.lazySetPrev$java_util_concurrent_ConcurrentLinkedDeque_Node(isFirst ? this.prevTerminator$() : x);
x.lazySetNext$java_util_concurrent_ConcurrentLinkedDeque_Node(isLast ? this.nextTerminator$() : x);
}}});

Clazz.newMeth(C$, 'unlinkFirst$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node', function (first, next) {
for (var o=null, p=next, q; ; ) {
if (p.item != null  || (q=p.next) == null  ) {
if (o != null  && p.prev !== p   && first.casNext$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node(next, p) ) {
p$1.skipDeletedPredecessors$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [p]);
if (first.prev == null  && (p.next == null  || p.item != null  )  && p.prev === first  ) {
p$1.updateHead.apply(this, []);
p$1.updateTail.apply(this, []);
o.lazySetNext$java_util_concurrent_ConcurrentLinkedDeque_Node(o);
o.lazySetPrev$java_util_concurrent_ConcurrentLinkedDeque_Node(this.prevTerminator$());
}}return;
} else if (p === q ) return;
 else {
o=p;
p=q;
}}
}, p$1);

Clazz.newMeth(C$, 'unlinkLast$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node', function (last, prev) {
for (var o=null, p=prev, q; ; ) {
if (p.item != null  || (q=p.prev) == null  ) {
if (o != null  && p.next !== p   && last.casPrev$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node(prev, p) ) {
p$1.skipDeletedSuccessors$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [p]);
if (last.next == null  && (p.prev == null  || p.item != null  )  && p.next === last  ) {
p$1.updateHead.apply(this, []);
p$1.updateTail.apply(this, []);
o.lazySetPrev$java_util_concurrent_ConcurrentLinkedDeque_Node(o);
o.lazySetNext$java_util_concurrent_ConcurrentLinkedDeque_Node(this.nextTerminator$());
}}return;
} else if (p === q ) return;
 else {
o=p;
p=q;
}}
}, p$1);

Clazz.newMeth(C$, 'updateHead', function () {
var h;
var p;
var q;
 restartFromHead : while ((h=this.head).item == null  && (p=h.prev) != null  ){
for (; ; ) {
if ((q=p.prev) == null  || (q=(p=q).prev) == null  ) {
if (p$1.casHead$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [h, p])) return;
 else continue restartFromHead;
} else if (h !== this.head ) continue restartFromHead;
 else p=q;
}
}
}, p$1);

Clazz.newMeth(C$, 'updateTail', function () {
var t;
var p;
var q;
 restartFromTail : while ((t=this.tail).item == null  && (p=t.next) != null  ){
for (; ; ) {
if ((q=p.next) == null  || (q=(p=q).next) == null  ) {
if (p$1.casTail$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [t, p])) return;
 else continue restartFromTail;
} else if (t !== this.tail ) continue restartFromTail;
 else p=q;
}
}
}, p$1);

Clazz.newMeth(C$, 'skipDeletedPredecessors$java_util_concurrent_ConcurrentLinkedDeque_Node', function (x) {
 whileActive : do {
var prev=x.prev;
var p=prev;
 findActive : for (; ; ) {
if (p.item != null ) break findActive;
var q=p.prev;
if (q == null ) {
if (p.next === p ) continue whileActive;
break findActive;
} else if (p === q ) continue whileActive;
 else p=q;
}
if (prev === p  || x.casPrev$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node(prev, p) ) return;
} while (x.item != null  || x.next == null  );
}, p$1);

Clazz.newMeth(C$, 'skipDeletedSuccessors$java_util_concurrent_ConcurrentLinkedDeque_Node', function (x) {
 whileActive : do {
var next=x.next;
var p=next;
 findActive : for (; ; ) {
if (p.item != null ) break findActive;
var q=p.next;
if (q == null ) {
if (p.prev === p ) continue whileActive;
break findActive;
} else if (p === q ) continue whileActive;
 else p=q;
}
if (next === p  || x.casNext$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node(next, p) ) return;
} while (x.item != null  || x.prev == null  );
}, p$1);

Clazz.newMeth(C$, 'succ$java_util_concurrent_ConcurrentLinkedDeque_Node', function (p) {
var q=p.next;
return (p === q ) ? this.first$() : q;
});

Clazz.newMeth(C$, 'pred$java_util_concurrent_ConcurrentLinkedDeque_Node', function (p) {
var q=p.prev;
return (p === q ) ? this.last$() : q;
});

Clazz.newMeth(C$, 'first$', function () {
 restartFromHead : for (; ; ) for (var h=this.head, p=h, q; ; ) {
if ((q=p.prev) != null  && (q=(p=q).prev) != null  ) p=(h !== (h=this.head) ) ? h : q;
 else if (p === h  || p$1.casHead$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [h, p]) ) return p;
 else continue restartFromHead;
}

});

Clazz.newMeth(C$, 'last$', function () {
 restartFromTail : for (; ; ) for (var t=this.tail, p=t, q; ; ) {
if ((q=p.next) != null  && (q=(p=q).next) != null  ) p=(t !== (t=this.tail) ) ? t : q;
 else if (p === t  || p$1.casTail$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [t, p]) ) return p;
 else continue restartFromTail;
}

});

Clazz.newMeth(C$, 'checkNotNull$O', function (v) {
if (v == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
}, 1);

Clazz.newMeth(C$, ['screenNullResult$TE'], function (v) {
if (v == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return v;
}, p$1);

Clazz.newMeth(C$, 'toArrayList', function () {
var list=Clazz.new_($I$(5));
for (var p=this.first$(); p != null ; p=this.succ$java_util_concurrent_ConcurrentLinkedDeque_Node(p)) {
var item=p.item;
if (item != null ) list.add$TE(item);
}
return list;
}, p$1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.head=this.tail=Clazz.new_($I$(4).c$$TE,[null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
Clazz.super_(C$, this,1);
var h=null;
var t=null;
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
C$.checkNotNull$O(e);
var newNode=Clazz.new_($I$(4).c$$TE,[e]);
if (h == null ) h=t=newNode;
 else {
t.lazySetNext$java_util_concurrent_ConcurrentLinkedDeque_Node(newNode);
newNode.lazySetPrev$java_util_concurrent_ConcurrentLinkedDeque_Node(t);
t=newNode;
}}
p$1.initHeadTail$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [h, t]);
}, 1);

Clazz.newMeth(C$, 'initHeadTail$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node', function (h, t) {
if (h === t ) {
if (h == null ) h=t=Clazz.new_($I$(4).c$$TE,[null]);
 else {
var newNode=Clazz.new_($I$(4).c$$TE,[null]);
t.lazySetNext$java_util_concurrent_ConcurrentLinkedDeque_Node(newNode);
newNode.lazySetPrev$java_util_concurrent_ConcurrentLinkedDeque_Node(t);
t=newNode;
}}this.head=h;
this.tail=t;
}, p$1);

Clazz.newMeth(C$, ['addFirst$TE'], function (e) {
p$1.linkFirst$TE.apply(this, [e]);
});

Clazz.newMeth(C$, ['addLast$TE'], function (e) {
p$1.linkLast$TE.apply(this, [e]);
});

Clazz.newMeth(C$, ['offerFirst$TE'], function (e) {
p$1.linkFirst$TE.apply(this, [e]);
return true;
});

Clazz.newMeth(C$, ['offerLast$TE'], function (e) {
p$1.linkLast$TE.apply(this, [e]);
return true;
});

Clazz.newMeth(C$, 'peekFirst$', function () {
for (var p=this.first$(); p != null ; p=this.succ$java_util_concurrent_ConcurrentLinkedDeque_Node(p)) {
var item=p.item;
if (item != null ) return item;
}
return null;
});

Clazz.newMeth(C$, 'peekLast$', function () {
for (var p=this.last$(); p != null ; p=this.pred$java_util_concurrent_ConcurrentLinkedDeque_Node(p)) {
var item=p.item;
if (item != null ) return item;
}
return null;
});

Clazz.newMeth(C$, 'getFirst$', function () {
return p$1.screenNullResult$TE.apply(this, [this.peekFirst$()]);
});

Clazz.newMeth(C$, 'getLast$', function () {
return p$1.screenNullResult$TE.apply(this, [this.peekLast$()]);
});

Clazz.newMeth(C$, 'pollFirst$', function () {
for (var p=this.first$(); p != null ; p=this.succ$java_util_concurrent_ConcurrentLinkedDeque_Node(p)) {
var item=p.item;
if (item != null  && p.casItem$TE$TE(item, null) ) {
this.unlink$java_util_concurrent_ConcurrentLinkedDeque_Node(p);
return item;
}}
return null;
});

Clazz.newMeth(C$, 'pollLast$', function () {
for (var p=this.last$(); p != null ; p=this.pred$java_util_concurrent_ConcurrentLinkedDeque_Node(p)) {
var item=p.item;
if (item != null  && p.casItem$TE$TE(item, null) ) {
this.unlink$java_util_concurrent_ConcurrentLinkedDeque_Node(p);
return item;
}}
return null;
});

Clazz.newMeth(C$, 'removeFirst$', function () {
return p$1.screenNullResult$TE.apply(this, [this.pollFirst$()]);
});

Clazz.newMeth(C$, 'removeLast$', function () {
return p$1.screenNullResult$TE.apply(this, [this.pollLast$()]);
});

Clazz.newMeth(C$, ['offer$TE'], function (e) {
return this.offerLast$TE(e);
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
return this.offerLast$TE(e);
});

Clazz.newMeth(C$, 'poll$', function () {
return this.pollFirst$();
});

Clazz.newMeth(C$, 'peek$', function () {
return this.peekFirst$();
});

Clazz.newMeth(C$, 'remove$', function () {
return this.removeFirst$();
});

Clazz.newMeth(C$, 'pop$', function () {
return this.removeFirst$();
});

Clazz.newMeth(C$, 'element$', function () {
return this.getFirst$();
});

Clazz.newMeth(C$, ['push$TE'], function (e) {
this.addFirst$TE(e);
});

Clazz.newMeth(C$, 'removeFirstOccurrence$O', function (o) {
C$.checkNotNull$O(o);
for (var p=this.first$(); p != null ; p=this.succ$java_util_concurrent_ConcurrentLinkedDeque_Node(p)) {
var item=p.item;
if (item != null  && o.equals$O(item)  && p.casItem$TE$TE(item, null) ) {
this.unlink$java_util_concurrent_ConcurrentLinkedDeque_Node(p);
return true;
}}
return false;
});

Clazz.newMeth(C$, 'removeLastOccurrence$O', function (o) {
C$.checkNotNull$O(o);
for (var p=this.last$(); p != null ; p=this.pred$java_util_concurrent_ConcurrentLinkedDeque_Node(p)) {
var item=p.item;
if (item != null  && o.equals$O(item)  && p.casItem$TE$TE(item, null) ) {
this.unlink$java_util_concurrent_ConcurrentLinkedDeque_Node(p);
return true;
}}
return false;
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (o == null ) return false;
for (var p=this.first$(); p != null ; p=this.succ$java_util_concurrent_ConcurrentLinkedDeque_Node(p)) {
var item=p.item;
if (item != null  && o.equals$O(item) ) return true;
}
return false;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.peekFirst$() == null ;
});

Clazz.newMeth(C$, 'size$', function () {
var count=0;
for (var p=this.first$(); p != null ; p=this.succ$java_util_concurrent_ConcurrentLinkedDeque_Node(p)) if (p.item != null ) if (++count == 2147483647) break;

return count;
});

Clazz.newMeth(C$, 'remove$O', function (o) {
return this.removeFirstOccurrence$O(o);
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var beginningOfTheEnd=null;
var last=null;
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
C$.checkNotNull$O(e);
var newNode=Clazz.new_($I$(4).c$$TE,[e]);
if (beginningOfTheEnd == null ) beginningOfTheEnd=last=newNode;
 else {
last.lazySetNext$java_util_concurrent_ConcurrentLinkedDeque_Node(newNode);
newNode.lazySetPrev$java_util_concurrent_ConcurrentLinkedDeque_Node(last);
last=newNode;
}}
if (beginningOfTheEnd == null ) return false;
 restartFromTail : for (; ; ) for (var t=this.tail, p=t, q; ; ) {
if ((q=p.next) != null  && (q=(p=q).next) != null  ) p=(t !== (t=this.tail) ) ? t : q;
 else if (p.prev === p ) continue restartFromTail;
 else {
beginningOfTheEnd.lazySetPrev$java_util_concurrent_ConcurrentLinkedDeque_Node(p);
if (p.casNext$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node(null, beginningOfTheEnd)) {
if (!p$1.casTail$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [t, last])) {
t=this.tail;
if (last.next == null ) p$1.casTail$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [t, last]);
}return true;
}}}

});

Clazz.newMeth(C$, 'clear$', function () {
while (this.pollFirst$() != null );
});

Clazz.newMeth(C$, 'toArray$', function () {
return p$1.toArrayList.apply(this, []).toArray$();
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
return p$1.toArrayList.apply(this, []).toArray$TTA(a);
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(6), [this, null]);
});

Clazz.newMeth(C$, 'descendingIterator$', function () {
return Clazz.new_($I$(7), [this, null]);
});

Clazz.newMeth(C$, 'spliterator$', function () {
return Clazz.new_($I$(8).c$$java_util_concurrent_ConcurrentLinkedDeque,[this]);
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
s.defaultWriteObject$();
for (var p=this.first$(); p != null ; p=this.succ$java_util_concurrent_ConcurrentLinkedDeque_Node(p)) {
var item=p.item;
if (item != null ) s.writeObject$O(item);
}
s.writeObject$O(null);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
s.defaultReadObject$();
var h=null;
var t=null;
var item;
while ((item=s.readObject$()) != null ){
var newNode=Clazz.new_($I$(4).c$$TE,[item]);
if (h == null ) h=t=newNode;
 else {
t.lazySetNext$java_util_concurrent_ConcurrentLinkedDeque_Node(newNode);
newNode.lazySetPrev$java_util_concurrent_ConcurrentLinkedDeque_Node(t);
t=newNode;
}}
p$1.initHeadTail$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this, [h, t]);
}, p$1);

Clazz.newMeth(C$, 'casHead$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node', function (cmp, val) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.headOffset, cmp, val);
}, p$1);

Clazz.newMeth(C$, 'casTail$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node', function (cmp, val) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.tailOffset, cmp, val);
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.ConcurrentLinkedDeque, "Node", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.UNSAFE=null;
C$.prevOffset=0;
C$.itemOffset=0;
C$.nextOffset=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.prevOffset=0;
C$.itemOffset=0;
C$.nextOffset=0;
{
try {
C$.UNSAFE=$I$(1).getUnsafe$();
var k=Clazz.getClass(C$);
C$.prevOffset=C$.UNSAFE.objectFieldOffset$reflect_Field(k.getDeclaredField$S("prev"));
C$.itemOffset=C$.UNSAFE.objectFieldOffset$reflect_Field(k.getDeclaredField$S("item"));
C$.nextOffset=C$.UNSAFE.objectFieldOffset$reflect_Field(k.getDeclaredField$S("next"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(2).c$$Throwable,[e]);
} else {
throw e;
}
}
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.prev=null;
this.item=null;
this.next=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$TE', function (item) {
C$.$init$.apply(this);
C$.UNSAFE.putObject$O$J$O(this, C$.itemOffset, item);
}, 1);

Clazz.newMeth(C$, 'casItem$TE$TE', function (cmp, val) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.itemOffset, cmp, val);
});

Clazz.newMeth(C$, 'lazySetNext$java_util_concurrent_ConcurrentLinkedDeque_Node', function (val) {
C$.UNSAFE.putOrderedObject$O$J$O(this, C$.nextOffset, val);
});

Clazz.newMeth(C$, 'casNext$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node', function (cmp, val) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.nextOffset, cmp, val);
});

Clazz.newMeth(C$, 'lazySetPrev$java_util_concurrent_ConcurrentLinkedDeque_Node', function (val) {
C$.UNSAFE.putOrderedObject$O$J$O(this, C$.prevOffset, val);
});

Clazz.newMeth(C$, 'casPrev$java_util_concurrent_ConcurrentLinkedDeque_Node$java_util_concurrent_ConcurrentLinkedDeque_Node', function (cmp, val) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.prevOffset, cmp, val);
});
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentLinkedDeque, "AbstractItr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nextNode=null;
this.nextItem=null;
this.lastRet=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
p$1.advance.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'advance', function () {
this.lastRet=this.nextNode;
var p=(this.nextNode == null ) ? this.startNode$() : this.nextNode$java_util_concurrent_ConcurrentLinkedDeque_Node(this.nextNode);
for (; ; p=this.nextNode$java_util_concurrent_ConcurrentLinkedDeque_Node(p)) {
if (p == null ) {
this.nextNode=null;
this.nextItem=null;
break;
}var item=p.item;
if (item != null ) {
this.nextNode=p;
this.nextItem=item;
break;
}}
}, p$1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.nextItem != null ;
});

Clazz.newMeth(C$, 'next$', function () {
var item=this.nextItem;
if (item == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
p$1.advance.apply(this, []);
return item;
});

Clazz.newMeth(C$, 'remove$', function () {
var l=this.lastRet;
if (l == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
l.item=null;
this.b$['java.util.concurrent.ConcurrentLinkedDeque'].unlink$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this.b$['java.util.concurrent.ConcurrentLinkedDeque'], [l]);
this.lastRet=null;
});
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentLinkedDeque, "Itr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.concurrent.ConcurrentLinkedDeque','.AbstractItr']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'startNode$', function () {
return this.b$['java.util.concurrent.ConcurrentLinkedDeque'].first$.apply(this.b$['java.util.concurrent.ConcurrentLinkedDeque'], []);
});

Clazz.newMeth(C$, 'nextNode$java_util_concurrent_ConcurrentLinkedDeque_Node', function (p) {
return this.b$['java.util.concurrent.ConcurrentLinkedDeque'].succ$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this.b$['java.util.concurrent.ConcurrentLinkedDeque'], [p]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentLinkedDeque, "DescendingItr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.concurrent.ConcurrentLinkedDeque','.AbstractItr']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'startNode$', function () {
return this.b$['java.util.concurrent.ConcurrentLinkedDeque'].last$.apply(this.b$['java.util.concurrent.ConcurrentLinkedDeque'], []);
});

Clazz.newMeth(C$, 'nextNode$java_util_concurrent_ConcurrentLinkedDeque_Node', function (p) {
return this.b$['java.util.concurrent.ConcurrentLinkedDeque'].pred$java_util_concurrent_ConcurrentLinkedDeque_Node.apply(this.b$['java.util.concurrent.ConcurrentLinkedDeque'], [p]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ConcurrentLinkedDeque, "CLDSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.queue=null;
this.current=null;
this.batch=0;
this.exhausted=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_ConcurrentLinkedDeque', function (queue) {
C$.$init$.apply(this);
this.queue=queue;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var p;
var q=this.queue;
var b=this.batch;
var n=(b <= 0) ? 1 : (b >= 33554432) ? 33554432 : b + 1;
if (!this.exhausted && ((p=this.current) != null  || (p=q.first$()) != null  ) ) {
if (p.item == null  && p === (p=p.next)  ) this.current=p=q.first$();
if (p != null  && p.next != null  ) {
var a=Clazz.array(java.lang.Object, [n]);
var i=0;
do {
if ((a[i]=p.item) != null ) ++i;
if (p === (p=p.next) ) p=q.first$();
} while (p != null  && i < n );
if ((this.current=p) == null ) this.exhausted=true;
if (i > 0) {
this.batch=i;
return $I$(3).spliterator$OA$I$I$I(a, 0, i, 4368);
}}}return null;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (action) {
var p;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var q=this.queue;
if (!this.exhausted && ((p=this.current) != null  || (p=q.first$()) != null  ) ) {
this.exhausted=true;
do {
var e=p.item;
if (p === (p=p.next) ) p=q.first$();
if (e != null ) action.accept$(e);
} while (p != null );
}});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer', function (action) {
var p;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var q=this.queue;
if (!this.exhausted && ((p=this.current) != null  || (p=q.first$()) != null  ) ) {
var e;
do {
e=p.item;
if (p === (p=p.next) ) p=q.first$();
} while (e == null  && p != null  );
if ((this.current=p) == null ) this.exhausted=true;
if (e != null ) {
action.accept$(e);
return true;
}}return false;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return 9223372036854775807;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return 4368;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
