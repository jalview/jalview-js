(function(){var P$=java.util,p$1={},I$=[[0,['java.util.IdentityHashMap','.EntryIterator','.Entry'],['java.util.IdentityHashMap','.KeyIterator'],'java.util.Objects','java.lang.reflect.Array',['java.util.IdentityHashMap','.KeySpliterator'],['java.util.IdentityHashMap','.ValueIterator'],['java.util.IdentityHashMap','.ValueSpliterator'],['java.util.IdentityHashMap','.EntryIterator'],['java.util.AbstractMap','.SimpleEntry'],['java.util.IdentityHashMap','.EntrySpliterator'],['java.util.AbstractMap','.SimpleImmutableEntry'],'InternalError',['java.util.IdentityHashMap','.KeySet'],['java.util.IdentityHashMap','.Values'],['java.util.IdentityHashMap','.EntrySet']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IdentityHashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractMap', ['java.util.Map', 'java.io.Serializable', 'Cloneable']);
C$.NULL_KEY=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.NULL_KEY= Clazz.new_();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.table=null;
this.size=0;
this.modCount=0;
this.entrySet=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'maskNull$O', function (key) {
return (key == null  ? C$.NULL_KEY : key);
}, 1);

Clazz.newMeth(C$, 'unmaskNull$O', function (key) {
return (key === C$.NULL_KEY  ? null : key);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
p$1.init$I.apply(this, [32]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (expectedMaxSize) {
Clazz.super_(C$, this,1);
if (expectedMaxSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["expectedMaxSize is negative: " + expectedMaxSize]);
p$1.init$I.apply(this, [C$.capacity$I(expectedMaxSize)]);
}, 1);

Clazz.newMeth(C$, 'capacity$I', function (expectedMaxSize) {
return (expectedMaxSize > 178956970) ? 536870912 : (expectedMaxSize <= 2) ? 4 : Integer.highestOneBit$I(expectedMaxSize + (expectedMaxSize << 1));
}, 1);

Clazz.newMeth(C$, 'init$I', function (initCapacity) {
this.table=Clazz.array(java.lang.Object, [2 * initCapacity]);
}, p$1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (m) {
C$.c$$I.apply(this, [(((1 + m.size$()) * 1.1)|0)]);
this.putAll$java_util_Map(m);
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.size == 0;
});

Clazz.newMeth(C$, 'hash$O$I', function (x, length) {
var h=System.identityHashCode$O(x);
return ((h << 1) - (h << 8)) & (length - 1);
}, 1);

Clazz.newMeth(C$, 'nextKeyIndex$I$I', function (i, len) {
return (i + 2 < len ? i + 2 : 0);
}, 1);

Clazz.newMeth(C$, 'get$O', function (key) {
var k=C$.maskNull$O(key);
var tab=this.table;
var len=tab.length;
var i=C$.hash$O$I(k, len);
while (true){
var item=tab[i];
if (item === k ) return tab[i + 1];
if (item == null ) return null;
i=C$.nextKeyIndex$I$I(i, len);
}
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
var k=C$.maskNull$O(key);
var tab=this.table;
var len=tab.length;
var i=C$.hash$O$I(k, len);
while (true){
var item=tab[i];
if (item === k ) return true;
if (item == null ) return false;
i=C$.nextKeyIndex$I$I(i, len);
}
});

Clazz.newMeth(C$, 'containsValue$O', function (value) {
var tab=this.table;
for (var i=1; i < tab.length; i+=2) if (tab[i] === value  && tab[i - 1] != null  ) return true;

return false;
});

Clazz.newMeth(C$, 'containsMapping$O$O', function (key, value) {
var k=C$.maskNull$O(key);
var tab=this.table;
var len=tab.length;
var i=C$.hash$O$I(k, len);
while (true){
var item=tab[i];
if (item === k ) return tab[i + 1] === value ;
if (item == null ) return false;
i=C$.nextKeyIndex$I$I(i, len);
}
}, p$1);

Clazz.newMeth(C$, ['put$TK$TV'], function (key, value) {
var k=C$.maskNull$O(key);
 retryAfterResize : for (; ; ) {
var tab=this.table;
var len=tab.length;
var i=C$.hash$O$I(k, len);
for (var item; (item=tab[i]) != null ; i=C$.nextKeyIndex$I$I(i, len)) {
if (item === k ) {
var oldValue=tab[i + 1];
tab[i + 1]=value;
return oldValue;
}}
var s=this.size + 1;
if (s + (s << 1) > len && p$1.resize$I.apply(this, [len]) ) continue retryAfterResize;
this.modCount++;
tab[i]=k;
tab[i + 1]=value;
this.size=s;
return null;
}
});

Clazz.newMeth(C$, 'resize$I', function (newCapacity) {
var newLength=newCapacity * 2;
var oldTable=this.table;
var oldLength=oldTable.length;
if (oldLength == 1073741824) {
if (this.size == 536870911) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Capacity exhausted."]);
return false;
}if (oldLength >= newLength) return false;
var newTable=Clazz.array(java.lang.Object, [newLength]);
for (var j=0; j < oldLength; j+=2) {
var key=oldTable[j];
if (key != null ) {
var value=oldTable[j + 1];
oldTable[j]=null;
oldTable[j + 1]=null;
var i=C$.hash$O$I(key, newLength);
while (newTable[i] != null )i=C$.nextKeyIndex$I$I(i, newLength);

newTable[i]=key;
newTable[i + 1]=value;
}}
this.table=newTable;
return true;
}, p$1);

Clazz.newMeth(C$, 'putAll$java_util_Map', function (m) {
var n=m.size$();
if (n == 0) return;
if (n > this.size) p$1.resize$I.apply(this, [C$.capacity$I(n)]);
for (var e, $e = m.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) this.put$TK$TV(e.getKey$(), e.getValue$());

});

Clazz.newMeth(C$, 'remove$O', function (key) {
var k=C$.maskNull$O(key);
var tab=this.table;
var len=tab.length;
var i=C$.hash$O$I(k, len);
while (true){
var item=tab[i];
if (item === k ) {
this.modCount++;
this.size--;
var oldValue=tab[i + 1];
tab[i + 1]=null;
tab[i]=null;
p$1.closeDeletion$I.apply(this, [i]);
return oldValue;
}if (item == null ) return null;
i=C$.nextKeyIndex$I$I(i, len);
}
});

Clazz.newMeth(C$, 'removeMapping$O$O', function (key, value) {
var k=C$.maskNull$O(key);
var tab=this.table;
var len=tab.length;
var i=C$.hash$O$I(k, len);
while (true){
var item=tab[i];
if (item === k ) {
if (tab[i + 1] !== value ) return false;
this.modCount++;
this.size--;
tab[i]=null;
tab[i + 1]=null;
p$1.closeDeletion$I.apply(this, [i]);
return true;
}if (item == null ) return false;
i=C$.nextKeyIndex$I$I(i, len);
}
}, p$1);

Clazz.newMeth(C$, 'closeDeletion$I', function (d) {
var tab=this.table;
var len=tab.length;
var item;
for (var i=C$.nextKeyIndex$I$I(d, len); (item=tab[i]) != null ; i=C$.nextKeyIndex$I$I(i, len)) {
var r=C$.hash$O$I(item, len);
if ((i < r && (r <= d || d <= i ) ) || (r <= d && d <= i ) ) {
tab[d]=item;
tab[d + 1]=tab[i + 1];
tab[i]=null;
tab[i + 1]=null;
d=i;
}}
}, p$1);

Clazz.newMeth(C$, 'clear$', function () {
this.modCount++;
var tab=this.table;
for (var i=0; i < tab.length; i++) tab[i]=null;

this.size=0;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o === this ) {
return true;
} else if (Clazz.instanceOf(o, "java.util.IdentityHashMap")) {
var m=o;
if (m.size$() != this.size) return false;
var tab=m.table;
for (var i=0; i < tab.length; i+=2) {
var k=tab[i];
if (k != null  && !p$1.containsMapping$O$O.apply(this, [k, tab[i + 1]]) ) return false;
}
return true;
} else if (Clazz.instanceOf(o, "java.util.Map")) {
var m=o;
return this.entrySet$().equals$O(m.entrySet$());
} else {
return false;
}});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=0;
var tab=this.table;
for (var i=0; i < tab.length; i+=2) {
var key=tab[i];
if (key != null ) {
var k=C$.unmaskNull$O(key);
result+=System.identityHashCode$O(k) ^ System.identityHashCode$O(tab[i + 1]);
}}
return result;
});

Clazz.newMeth(C$, 'clone$', function () {
try {
var m=C$.superclazz.prototype.clone$.apply(this, []);
m.entrySet=null;
m.table=this.table.clone$();
return m;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(12).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'keySet$', function () {
var ks=this.keySet;
if (ks != null ) return ks;
 else return this.keySet=Clazz.new_($I$(13), [this, null]);
});

Clazz.newMeth(C$, 'values$', function () {
var vs=this.values;
if (vs != null ) return vs;
 else return this.values=Clazz.new_($I$(14), [this, null]);
});

Clazz.newMeth(C$, 'entrySet$', function () {
var es=this.entrySet;
if (es != null ) return es;
 else return this.entrySet=Clazz.new_($I$(15), [this, null]);
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
s.defaultWriteObject$();
s.writeInt$I(this.size);
var tab=this.table;
for (var i=0; i < tab.length; i+=2) {
var key=tab[i];
if (key != null ) {
s.writeObject$O(C$.unmaskNull$O(key));
s.writeObject$O(tab[i + 1]);
}}
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
s.defaultReadObject$();
var size=s.readInt$();
if (size < 0) throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["Illegal mappings count: " + size]);
p$1.init$I.apply(this, [C$.capacity$I(size)]);
for (var i=0; i < size; i++) {
var key=s.readObject$();
var value=s.readObject$();
p$1.putForCreate$TK$TV.apply(this, [key, value]);
}
}, p$1);

Clazz.newMeth(C$, ['putForCreate$TK$TV'], function (key, value) {
var k=C$.maskNull$O(key);
var tab=this.table;
var len=tab.length;
var i=C$.hash$O$I(k, len);
var item;
while ((item=tab[i]) != null ){
if (item === k ) throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException'));
i=C$.nextKeyIndex$I$I(i, len);
}
tab[i]=k;
tab[i + 1]=value;
}, p$1);

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer', function (action) {
$I$(3).requireNonNull$TT(action);
var expectedModCount=this.modCount;
var t=this.table;
for (var index=0; index < t.length; index+=2) {
var k=t[index];
if (k != null ) {
action.accept$(C$.unmaskNull$O(k), t[index + 1]);
}if (this.modCount != expectedModCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}}
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction', function ($function) {
$I$(3).requireNonNull$TT($function);
var expectedModCount=this.modCount;
var t=this.table;
for (var index=0; index < t.length; index+=2) {
var k=t[index];
if (k != null ) {
t[index + 1]=$function.apply$(C$.unmaskNull$O(k), t[index + 1]);
}if (this.modCount != expectedModCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}}
});
;
(function(){var C$=Clazz.newClass(P$.IdentityHashMap, "IdentityHashMapIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.index=0;
this.expectedModCount=0;
this.lastReturnedIndex=0;
this.indexValid=false;
this.traversalTable=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.index=(this.this$0.size != 0 ? 0 : this.this$0.table.length);
this.expectedModCount=this.this$0.modCount;
this.lastReturnedIndex=-1;
this.traversalTable=this.this$0.table;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
var tab=this.traversalTable;
for (var i=this.index; i < tab.length; i+=2) {
var key=tab[i];
if (key != null ) {
this.index=i;
return this.indexValid=true;
}}
this.index=tab.length;
return false;
});

Clazz.newMeth(C$, 'nextIndex$', function () {
if (this.this$0.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
if (!this.indexValid && !this.hasNext$() ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.indexValid=false;
this.lastReturnedIndex=this.index;
this.index+=2;
return this.lastReturnedIndex;
});

Clazz.newMeth(C$, 'remove$', function () {
if (this.lastReturnedIndex == -1) throw Clazz.new_(Clazz.load('IllegalStateException'));
if (this.this$0.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
this.expectedModCount=++this.this$0.modCount;
var deletedSlot=this.lastReturnedIndex;
this.lastReturnedIndex=-1;
this.index=deletedSlot;
this.indexValid=false;
var tab=this.traversalTable;
var len=tab.length;
var d=deletedSlot;
var key=tab[d];
tab[d]=null;
tab[d + 1]=null;
if (tab !== this.b$['java.util.IdentityHashMap'].table ) {
this.b$['java.util.IdentityHashMap'].remove$O.apply(this.b$['java.util.IdentityHashMap'], [key]);
this.expectedModCount=this.this$0.modCount;
return;
}this.this$0.size--;
var item;
for (var i=P$.IdentityHashMap.nextKeyIndex$I$I(d, len); (item=tab[i]) != null ; i=P$.IdentityHashMap.nextKeyIndex$I$I(i, len)) {
var r=P$.IdentityHashMap.hash$O$I(item, len);
if ((i < r && (r <= d || d <= i ) ) || (r <= d && d <= i ) ) {
if (i < deletedSlot && d >= deletedSlot  && this.traversalTable === this.b$['java.util.IdentityHashMap'].table  ) {
var remaining=len - deletedSlot;
var newTable=Clazz.array(java.lang.Object, [remaining]);
System.arraycopy$O$I$O$I$I(tab, deletedSlot, newTable, 0, remaining);
this.traversalTable=newTable;
this.index=0;
}tab[d]=item;
tab[d + 1]=tab[i + 1];
tab[i]=null;
tab[i + 1]=null;
d=i;
}}
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.IdentityHashMap, "KeyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.IdentityHashMap','.IdentityHashMapIterator']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'next$', function () {
return P$.IdentityHashMap.unmaskNull$O(this.traversalTable[this.nextIndex$()]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.IdentityHashMap, "ValueIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.IdentityHashMap','.IdentityHashMapIterator']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'next$', function () {
return this.traversalTable[this.nextIndex$() + 1];
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.IdentityHashMap, "EntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.IdentityHashMap','.IdentityHashMapIterator']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lastReturnedEntry=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'next$', function () {
this.lastReturnedEntry=Clazz.new_($I$(1).c$$I, [this, null, this.nextIndex$()]);
return this.lastReturnedEntry;
});

Clazz.newMeth(C$, 'remove$', function () {
this.lastReturnedIndex=((null == this.lastReturnedEntry ) ? -1 : this.lastReturnedEntry.index);
C$.superclazz.prototype.remove$.apply(this, []);
this.lastReturnedEntry.index=this.lastReturnedIndex;
this.lastReturnedEntry=null;
});
;
(function(){var C$=Clazz.newClass(P$.IdentityHashMap.EntryIterator, "Entry", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.Map','java.util.Map.Entry']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.index=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (index) {
C$.$init$.apply(this);
this.index=index;
}, 1);

Clazz.newMeth(C$, 'getKey$', function () {
p$1.checkIndexForEntryUse.apply(this, []);
return P$.IdentityHashMap.unmaskNull$O(this.this$0.traversalTable[this.index]);
});

Clazz.newMeth(C$, 'getValue$', function () {
p$1.checkIndexForEntryUse.apply(this, []);
return this.this$0.traversalTable[this.index + 1];
});

Clazz.newMeth(C$, ['setValue$TV'], function (value) {
p$1.checkIndexForEntryUse.apply(this, []);
var oldValue=this.this$0.traversalTable[this.index + 1];
this.this$0.traversalTable[this.index + 1]=value;
if (this.this$0.traversalTable !== this.b$['java.util.IdentityHashMap'].table ) this.b$['java.util.IdentityHashMap'].put$TK$TV.apply(this.b$['java.util.IdentityHashMap'], [this.this$0.traversalTable[this.index], value]);
return oldValue;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this.index < 0) return C$.superclazz.prototype.equals$O.apply(this, [o]);
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
return (e.getKey$() === P$.IdentityHashMap.unmaskNull$O(this.this$0.traversalTable[this.index])  && e.getValue$() === this.this$0.traversalTable[this.index + 1]  );
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.this$0.lastReturnedIndex < 0) return C$.superclazz.prototype.hashCode$.apply(this, []);
return (System.identityHashCode$O(P$.IdentityHashMap.unmaskNull$O(this.this$0.traversalTable[this.index])) ^ System.identityHashCode$O(this.this$0.traversalTable[this.index + 1]));
});

Clazz.newMeth(C$, 'toString', function () {
if (this.index < 0) return C$.superclazz.prototype.toString.apply(this, []);
return (P$.IdentityHashMap.unmaskNull$O(this.this$0.traversalTable[this.index]) + "=" + this.this$0.traversalTable[this.index + 1] );
});

Clazz.newMeth(C$, 'checkIndexForEntryUse', function () {
if (this.index < 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Entry was removed"]);
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.IdentityHashMap, "KeySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(2), [this, null]);
});

Clazz.newMeth(C$, 'size$', function () {
return this.this$0.size;
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.b$['java.util.IdentityHashMap'].containsKey$O.apply(this.b$['java.util.IdentityHashMap'], [o]);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
var oldSize=this.this$0.size;
this.b$['java.util.IdentityHashMap'].remove$O.apply(this.b$['java.util.IdentityHashMap'], [o]);
return this.this$0.size != oldSize;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
$I$(3).requireNonNull$TT(c);
var modified=false;
for (var i=this.iterator$(); i.hasNext$(); ) {
if (c.contains$O(i.next$())) {
i.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['java.util.IdentityHashMap'].clear$.apply(this.b$['java.util.IdentityHashMap'], []);
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=0;
for (var key, $key = this.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) result+=System.identityHashCode$O(key);

return result;
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.toArray$TTA(Clazz.array(java.lang.Object, [0]));
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
var expectedModCount=this.this$0.modCount;
var size=this.size$();
if (a.length < size) a=Clazz.array(a.getClass$().getComponentType$(), size);
var tab=this.this$0.table;
var ti=0;
for (var si=0; si < tab.length; si+=2) {
var key;
if ((key=tab[si]) != null ) {
if (ti >= size) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}a[ti++]=P$.IdentityHashMap.unmaskNull$O(key);
}}
if (ti < size || expectedModCount != this.this$0.modCount ) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}if (ti < a.length) {
a[ti]=null;
}return a;
});

Clazz.newMeth(C$, 'spliterator$', function () {
return Clazz.new_($I$(5).c$$java_util_IdentityHashMap$I$I$I$I,[this.b$['java.util.IdentityHashMap'], 0, -1, 0, 0]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.IdentityHashMap, "Values", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractCollection');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(6), [this, null]);
});

Clazz.newMeth(C$, 'size$', function () {
return this.this$0.size;
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.b$['java.util.IdentityHashMap'].containsValue$O.apply(this.b$['java.util.IdentityHashMap'], [o]);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
for (var i=this.iterator$(); i.hasNext$(); ) {
if (i.next$() === o ) {
i.remove$();
return true;
}}
return false;
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['java.util.IdentityHashMap'].clear$.apply(this.b$['java.util.IdentityHashMap'], []);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.toArray$TTA(Clazz.array(java.lang.Object, [0]));
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
var expectedModCount=this.this$0.modCount;
var size=this.size$();
if (a.length < size) a=Clazz.array(a.getClass$().getComponentType$(), size);
var tab=this.this$0.table;
var ti=0;
for (var si=0; si < tab.length; si+=2) {
if (tab[si] != null ) {
if (ti >= size) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}a[ti++]=tab[si + 1];
}}
if (ti < size || expectedModCount != this.this$0.modCount ) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}if (ti < a.length) {
a[ti]=null;
}return a;
});

Clazz.newMeth(C$, 'spliterator$', function () {
return Clazz.new_($I$(7).c$$java_util_IdentityHashMap$I$I$I$I,[this.b$['java.util.IdentityHashMap'], 0, -1, 0, 0]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.IdentityHashMap, "EntrySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(8), [this, null]);
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var entry=o;
return p$1.containsMapping$O$O.apply(this.b$['java.util.IdentityHashMap'], [entry.getKey$(), entry.getValue$()]);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var entry=o;
return p$1.removeMapping$O$O.apply(this.b$['java.util.IdentityHashMap'], [entry.getKey$(), entry.getValue$()]);
});

Clazz.newMeth(C$, 'size$', function () {
return this.this$0.size;
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['java.util.IdentityHashMap'].clear$.apply(this.b$['java.util.IdentityHashMap'], []);
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
$I$(3).requireNonNull$TT(c);
var modified=false;
for (var i=this.iterator$(); i.hasNext$(); ) {
if (c.contains$O(i.next$())) {
i.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.toArray$TTA(Clazz.array(java.lang.Object, [0]));
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
var expectedModCount=this.this$0.modCount;
var size=this.size$();
if (a.length < size) a=Clazz.array(a.getClass$().getComponentType$(), size);
var tab=this.this$0.table;
var ti=0;
for (var si=0; si < tab.length; si+=2) {
var key;
if ((key=tab[si]) != null ) {
if (ti >= size) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}a[ti++]=Clazz.new_($I$(9).c$$TK$TV,[P$.IdentityHashMap.unmaskNull$O(key), tab[si + 1]]);
}}
if (ti < size || expectedModCount != this.this$0.modCount ) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}if (ti < a.length) {
a[ti]=null;
}return a;
});

Clazz.newMeth(C$, 'spliterator$', function () {
return Clazz.new_($I$(10).c$$java_util_IdentityHashMap$I$I$I$I,[this.b$['java.util.IdentityHashMap'], 0, -1, 0, 0]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.IdentityHashMap, "IdentityHashMapSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.map=null;
this.index=0;
this.fence=0;
this.est=0;
this.expectedModCount=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_IdentityHashMap$I$I$I$I', function (map, origin, fence, est, expectedModCount) {
C$.$init$.apply(this);
this.map=map;
this.index=origin;
this.fence=fence;
this.est=est;
this.expectedModCount=expectedModCount;
}, 1);

Clazz.newMeth(C$, 'getFence$', function () {
var hi;
if ((hi=this.fence) < 0) {
this.est=this.map.size;
this.expectedModCount=this.map.modCount;
hi=this.fence=this.map.table.length;
}return hi;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
this.getFence$();
return this.est;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.IdentityHashMap, "KeySpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.IdentityHashMap','.IdentityHashMapSpliterator'], 'java.util.Spliterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_IdentityHashMap$I$I$I$I'], function (map, origin, fence, est, expectedModCount) {
C$.superclazz.c$$java_util_IdentityHashMap$I$I$I$I.apply(this, [map, origin, fence, est, expectedModCount]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var hi=this.getFence$();
var lo=this.index;
var mid=((lo + hi) >>> 1) & ~1;
return (lo >= mid) ? null : Clazz.new_(C$.c$$java_util_IdentityHashMap$I$I$I$I,[this.map, lo, this.index=mid, this.est>>>=1, this.expectedModCount]);
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i;
var hi;
var mc;
var key;
var m;
var a;
if ((m=this.map) != null  && (a=m.table) != null   && (i=this.index) >= 0  && (this.index=hi=this.getFence$()) <= a.length ) {
for (; i < hi; i+=2) {
if ((key=a[i]) != null ) action.accept$(P$.IdentityHashMap.unmaskNull$O(key));
}
if (m.modCount == this.expectedModCount) return;
}throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer', function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var a=this.map.table;
var hi=this.getFence$();
while (this.index < hi){
var key=a[this.index];
this.index+=2;
if (key != null ) {
action.accept$(P$.IdentityHashMap.unmaskNull$O(key));
if (this.map.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
}}
return false;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return (this.fence < 0 || this.est == this.map.size  ? 64 : 0) | 1;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.IdentityHashMap, "ValueSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.IdentityHashMap','.IdentityHashMapSpliterator'], 'java.util.Spliterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_IdentityHashMap$I$I$I$I'], function (m, origin, fence, est, expectedModCount) {
C$.superclazz.c$$java_util_IdentityHashMap$I$I$I$I.apply(this, [m, origin, fence, est, expectedModCount]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var hi=this.getFence$();
var lo=this.index;
var mid=((lo + hi) >>> 1) & ~1;
return (lo >= mid) ? null : Clazz.new_(C$.c$$java_util_IdentityHashMap$I$I$I$I,[this.map, lo, this.index=mid, this.est>>>=1, this.expectedModCount]);
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i;
var hi;
var mc;
var m;
var a;
if ((m=this.map) != null  && (a=m.table) != null   && (i=this.index) >= 0  && (this.index=hi=this.getFence$()) <= a.length ) {
for (; i < hi; i+=2) {
if (a[i] != null ) {
var v=a[i + 1];
action.accept$(v);
}}
if (m.modCount == this.expectedModCount) return;
}throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer', function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var a=this.map.table;
var hi=this.getFence$();
while (this.index < hi){
var key=a[this.index];
var v=a[this.index + 1];
this.index+=2;
if (key != null ) {
action.accept$(v);
if (this.map.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
}}
return false;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return (this.fence < 0 || this.est == this.map.size  ? 64 : 0);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.IdentityHashMap, "EntrySpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.IdentityHashMap','.IdentityHashMapSpliterator'], 'java.util.Spliterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_IdentityHashMap$I$I$I$I'], function (m, origin, fence, est, expectedModCount) {
C$.superclazz.c$$java_util_IdentityHashMap$I$I$I$I.apply(this, [m, origin, fence, est, expectedModCount]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var hi=this.getFence$();
var lo=this.index;
var mid=((lo + hi) >>> 1) & ~1;
return (lo >= mid) ? null : Clazz.new_(C$.c$$java_util_IdentityHashMap$I$I$I$I,[this.map, lo, this.index=mid, this.est>>>=1, this.expectedModCount]);
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer'], function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i;
var hi;
var mc;
var m;
var a;
if ((m=this.map) != null  && (a=m.table) != null   && (i=this.index) >= 0  && (this.index=hi=this.getFence$()) <= a.length ) {
for (; i < hi; i+=2) {
var key=a[i];
if (key != null ) {
var k=P$.IdentityHashMap.unmaskNull$O(key);
var v=a[i + 1];
action.accept$(Clazz.new_($I$(11).c$$TK$TV,[k, v]));
}}
if (m.modCount == this.expectedModCount) return;
}throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_Consumer'], function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var a=this.map.table;
var hi=this.getFence$();
while (this.index < hi){
var key=a[this.index];
var v=a[this.index + 1];
this.index+=2;
if (key != null ) {
var k=P$.IdentityHashMap.unmaskNull$O(key);
action.accept$(Clazz.new_($I$(11).c$$TK$TV,[k, v]));
if (this.map.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
}}
return false;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return (this.fence < 0 || this.est == this.map.size  ? 64 : 0) | 1;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:47 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
