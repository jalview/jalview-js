(function(){var P$=java.util,p$1={},I$=[[0,'java.util.Objects',['java.util.Hashtable','.Entry'],'InternalError','StringBuilder','java.util.Collections',['java.util.Hashtable','.Enumerator'],['java.util.Hashtable','.KeySet'],['java.util.Hashtable','.EntrySet'],['java.util.Hashtable','.ValueCollection']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Hashtable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.Dictionary', ['java.util.Map', 'Cloneable', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.table=null;
this.count=0;
this.threshold=0;
this.loadFactor=0;
this.modCount=0;
this.keySet=null;
this.entrySet=null;
this.values=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.modCount=0;
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
Clazz.super_(C$, this,1);
if (initialCapacity < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal Capacity: " + initialCapacity]);
if (loadFactor <= 0  || Float.isNaN$F(loadFactor) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal Load: " + new Float(loadFactor).toString()]);
if (initialCapacity == 0) initialCapacity=1;
this.loadFactor=loadFactor;
this.table=Clazz.array($I$(2), [initialCapacity]);
this.threshold=(Math.min(initialCapacity * loadFactor, 2147483640)|0);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
C$.c$$I$F.apply(this, [initialCapacity, 0.75]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I$F.apply(this, [11, 0.75]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (t) {
C$.c$$I$F.apply(this, [Math.max(2 * t.size$(), 11), 0.75]);
this.putAll$java_util_Map(t);
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.count;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.count == 0;
});

Clazz.newMeth(C$, 'keys$', function () {
return p$1.getEnumeration$I.apply(this, [0]);
});

Clazz.newMeth(C$, 'elements$', function () {
return p$1.getEnumeration$I.apply(this, [1]);
});

Clazz.newMeth(C$, 'contains$O', function (value) {
if (value == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var tab=this.table;
for (var i=tab.length; i-- > 0; ) {
for (var e=tab[i]; e != null ; e=e.next_) {
if (e.value.equals$O(value)) {
return true;
}}
}
return false;
});

Clazz.newMeth(C$, 'containsValue$O', function (value) {
return this.contains$O(value);
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
for (var e=tab[index]; e != null ; e=e.next_) {
if ((e.hash == hash) && e.key.equals$O(key) ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'get$O', function (key) {
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
for (var e=tab[index]; e != null ; e=e.next_) {
if ((e.hash == hash) && e.key.equals$O(key) ) {
return e.value;
}}
return null;
});

Clazz.newMeth(C$, 'rehash$', function () {
var oldCapacity=this.table.length;
var oldMap=this.table;
var newCapacity=(oldCapacity << 1) + 1;
if (newCapacity - 2147483639 > 0) {
if (oldCapacity == 2147483639) return;
newCapacity=2147483639;
}var newMap=Clazz.array($I$(2), [newCapacity]);
this.modCount++;
this.threshold=(Math.min(newCapacity * this.loadFactor, 2147483640)|0);
this.table=newMap;
for (var i=oldCapacity; i-- > 0; ) {
for (var old=oldMap[i]; old != null ; ) {
var e=old;
old=old.next_;
var index=(e.hash & 2147483647) % newCapacity;
e.next_=newMap[index];
newMap[index]=e;
}
}
});

Clazz.newMeth(C$, ['addEntry$I$TK$TV$I'], function (hash, key, value, index) {
this.modCount++;
var tab=this.table;
if (this.count >= this.threshold) {
this.rehash$();
tab=this.table;
hash=key.hashCode$();
index=(hash & 2147483647) % tab.length;
}var e=tab[index];
tab[index]=Clazz.new_($I$(2).c$$I$TK$TV$java_util_Hashtable_Entry,[hash, key, value, e]);
this.count++;
}, p$1);

Clazz.newMeth(C$, ['put$TK$TV'], function (key, value) {
if (value == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var entry=tab[index];
for (; entry != null ; entry=entry.next_) {
if ((entry.hash == hash) && entry.key.equals$O(key) ) {
var old=entry.value;
entry.value=value;
return old;
}}
p$1.addEntry$I$TK$TV$I.apply(this, [hash, key, value, index]);
return null;
});

Clazz.newMeth(C$, 'remove$O', function (key) {
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (var prev=null; e != null ; prev=e, e=e.next_) {
if ((e.hash == hash) && e.key.equals$O(key) ) {
this.modCount++;
if (prev != null ) {
prev.next_=e.next_;
} else {
tab[index]=e.next_;
}this.count--;
var oldValue=e.value;
e.value=null;
return oldValue;
}}
return null;
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (t) {
for (var e, $e = t.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) this.put$TK$TV(e.getKey$(), e.getValue$());

});

Clazz.newMeth(C$, 'clear$', function () {
var tab=this.table;
this.modCount++;
for (var index=tab.length; --index >= 0; ) tab[index]=null;

this.count=0;
});

Clazz.newMeth(C$, 'clone$', function () {
try {
var t=Clazz.clone(this);
t.table=Clazz.array($I$(2), [this.table.length]);
for (var i=this.table.length; i-- > 0; ) {
t.table[i]=(this.table[i] != null ) ? this.table[i].clone$() : null;
}
t.keySet=null;
t.entrySet=null;
t.values=null;
t.modCount=0;
return t;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(3).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toString', function () {
var max=this.size$() - 1;
if (max == -1) return "{}";
var sb=Clazz.new_($I$(4));
var it=this.entrySet$().iterator$();
sb.append$C("{");
for (var i=0; ; i++) {
var e=it.next$();
var key=e.getKey$();
var value=e.getValue$();
sb.append$S(key === this  ? "(this Map)" : key.toString());
sb.append$C("=");
sb.append$S(value === this  ? "(this Map)" : value.toString());
if (i == max) return sb.append$C("}").toString();
sb.append$S(", ");
}
});

Clazz.newMeth(C$, 'getEnumeration$I', function (type) {
if (this.count == 0) {
return $I$(5).emptyEnumeration$();
} else {
return Clazz.new_($I$(6).c$$I$Z, [this, null, type, false]);
}}, p$1);

Clazz.newMeth(C$, 'getIterator$I', function (type) {
if (this.count == 0) {
return $I$(5).emptyIterator$();
} else {
return Clazz.new_($I$(6).c$$I$Z, [this, null, type, true]);
}}, p$1);

Clazz.newMeth(C$, 'keySet$', function () {
if (this.keySet == null ) this.keySet=$I$(5).synchronizedSet$java_util_Set$O(Clazz.new_($I$(7), [this, null]), this);
return this.keySet;
});

Clazz.newMeth(C$, 'entrySet$', function () {
if (this.entrySet == null ) this.entrySet=$I$(5).synchronizedSet$java_util_Set$O(Clazz.new_($I$(8), [this, null]), this);
return this.entrySet;
});

Clazz.newMeth(C$, 'values$', function () {
if (this.values == null ) this.values=$I$(5).synchronizedCollection$java_util_Collection$O(Clazz.new_($I$(9), [this, null]), this);
return this.values;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o === this ) return true;
if (!(Clazz.instanceOf(o, "java.util.Map"))) return false;
var t=o;
if (t.size$() != this.size$()) return false;
try {
var i=this.entrySet$().iterator$();
while (i.hasNext$()){
var e=i.next$();
var key=e.getKey$();
var value=e.getValue$();
if (value == null ) {
if (!(t.get$O(key) == null  && t.containsKey$O(key) )) return false;
} else {
if (!value.equals$O(t.get$O(key))) return false;
}}
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
return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var h=0;
if (this.count == 0 || this.loadFactor < 0  ) return h;
this.loadFactor=-this.loadFactor;
var tab=this.table;
for (var entry, $entry = 0, $$entry = tab; $entry<$$entry.length&&((entry=($$entry[$entry])),1);$entry++) {
while (entry != null ){
h+=entry.hashCode$();
entry=entry.next_;
}
}
this.loadFactor=-this.loadFactor;
return h;
});

Clazz.newMeth(C$, ['getOrDefault$O$TV'], function (key, defaultValue) {
var result=this.get$O(key);
return (null == result ) ? defaultValue : result;
});

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer', function (action) {
$I$(1).requireNonNull$TT(action);
var expectedModCount=this.modCount;
var tab=this.table;
for (var entry, $entry = 0, $$entry = tab; $entry<$$entry.length&&((entry=($$entry[$entry])),1);$entry++) {
while (entry != null ){
action.accept$(entry.key, entry.value);
entry=entry.next_;
if (expectedModCount != this.modCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}}
}
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction', function ($function) {
$I$(1).requireNonNull$TT($function);
var expectedModCount=this.modCount;
var tab=this.table;
for (var entry, $entry = 0, $$entry = tab; $entry<$$entry.length&&((entry=($$entry[$entry])),1);$entry++) {
while (entry != null ){
entry.value=$I$(1).requireNonNull$TT($function.apply$(entry.key, entry.value));
entry=entry.next_;
if (expectedModCount != this.modCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}}
}
});

Clazz.newMeth(C$, ['putIfAbsent$TK$TV'], function (key, value) {
$I$(1).requireNonNull$TT(value);
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var entry=tab[index];
for (; entry != null ; entry=entry.next_) {
if ((entry.hash == hash) && entry.key.equals$O(key) ) {
var old=entry.value;
if (old == null ) {
entry.value=value;
}return old;
}}
p$1.addEntry$I$TK$TV$I.apply(this, [hash, key, value, index]);
return null;
});

Clazz.newMeth(C$, 'remove$O$O', function (key, value) {
$I$(1).requireNonNull$TT(value);
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (var prev=null; e != null ; prev=e, e=e.next_) {
if ((e.hash == hash) && e.key.equals$O(key) && e.value.equals$O(value)  ) {
this.modCount++;
if (prev != null ) {
prev.next_=e.next_;
} else {
tab[index]=e.next_;
}this.count--;
e.value=null;
return true;
}}
return false;
});

Clazz.newMeth(C$, ['replace$TK$TV$TV'], function (key, oldValue, newValue) {
$I$(1).requireNonNull$TT(oldValue);
$I$(1).requireNonNull$TT(newValue);
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (; e != null ; e=e.next_) {
if ((e.hash == hash) && e.key.equals$O(key) ) {
if (e.value.equals$O(oldValue)) {
e.value=newValue;
return true;
} else {
return false;
}}}
return false;
});

Clazz.newMeth(C$, ['replace$TK$TV'], function (key, value) {
$I$(1).requireNonNull$TT(value);
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (; e != null ; e=e.next_) {
if ((e.hash == hash) && e.key.equals$O(key) ) {
var oldValue=e.value;
e.value=value;
return oldValue;
}}
return null;
});

Clazz.newMeth(C$, ['computeIfAbsent$TK$java_util_function_Function'], function (key, mappingFunction) {
$I$(1).requireNonNull$TT(mappingFunction);
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (; e != null ; e=e.next_) {
if (e.hash == hash && e.key.equals$O(key) ) {
return e.value;
}}
var newValue=mappingFunction.apply$(key);
if (newValue != null ) {
p$1.addEntry$I$TK$TV$I.apply(this, [hash, key, newValue, index]);
}return newValue;
});

Clazz.newMeth(C$, ['computeIfPresent$TK$java_util_function_BiFunction'], function (key, remappingFunction) {
$I$(1).requireNonNull$TT(remappingFunction);
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (var prev=null; e != null ; prev=e, e=e.next_) {
if (e.hash == hash && e.key.equals$O(key) ) {
var newValue=remappingFunction.apply$(key, e.value);
if (newValue == null ) {
this.modCount++;
if (prev != null ) {
prev.next_=e.next_;
} else {
tab[index]=e.next_;
}this.count--;
} else {
e.value=newValue;
}return newValue;
}}
return null;
});

Clazz.newMeth(C$, ['compute$TK$java_util_function_BiFunction'], function (key, remappingFunction) {
$I$(1).requireNonNull$TT(remappingFunction);
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (var prev=null; e != null ; prev=e, e=e.next_) {
if (e.hash == hash && $I$(1).equals$O$O(e.key, key) ) {
var newValue=remappingFunction.apply$(key, e.value);
if (newValue == null ) {
this.modCount++;
if (prev != null ) {
prev.next_=e.next_;
} else {
tab[index]=e.next_;
}this.count--;
} else {
e.value=newValue;
}return newValue;
}}
var newValue=remappingFunction.apply$(key, null);
if (newValue != null ) {
p$1.addEntry$I$TK$TV$I.apply(this, [hash, key, newValue, index]);
}return newValue;
});

Clazz.newMeth(C$, ['merge$TK$TV$java_util_function_BiFunction'], function (key, value, remappingFunction) {
$I$(1).requireNonNull$TT(remappingFunction);
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (var prev=null; e != null ; prev=e, e=e.next_) {
if (e.hash == hash && e.key.equals$O(key) ) {
var newValue=remappingFunction.apply$(e.value, value);
if (newValue == null ) {
this.modCount++;
if (prev != null ) {
prev.next_=e.next_;
} else {
tab[index]=e.next_;
}this.count--;
} else {
e.value=newValue;
}return newValue;
}}
if (value != null ) {
p$1.addEntry$I$TK$TV$I.apply(this, [hash, key, value, index]);
}return value;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
var entryStack=null;
{
s.defaultWriteObject$();
s.writeInt$I(this.table.length);
s.writeInt$I(this.count);
for (var index=0; index < this.table.length; index++) {
var entry=this.table[index];
while (entry != null ){
entryStack=Clazz.new_($I$(2).c$$I$TK$TV$java_util_Hashtable_Entry,[0, entry.key, entry.value, entryStack]);
entry=entry.next_;
}
}
}while (entryStack != null ){
s.writeObject$O(entryStack.key);
s.writeObject$O(entryStack.value);
entryStack=entryStack.next_;
}
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
s.defaultReadObject$();
var origlength=s.readInt$();
var elements=s.readInt$();
var length=((elements * this.loadFactor)|0) + ((elements/20|0)) + 3 ;
if (length > elements && (length & 1) == 0 ) length--;
if (origlength > 0 && length > origlength ) length=origlength;
this.table=Clazz.array($I$(2), [length]);
this.threshold=(Math.min(length * this.loadFactor, 2147483640)|0);
this.count=0;
for (; elements > 0; elements--) {
var key=s.readObject$();
var value=s.readObject$();
p$1.reconstitutionPut$java_util_Hashtable_EntryA$TK$TV.apply(this, [this.table, key, value]);
}
}, p$1);

Clazz.newMeth(C$, ['reconstitutionPut$java_util_Hashtable_EntryA$TK$TV'], function (tab, key, value) {
if (value == null ) {
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException'));
}var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
for (var e=tab[index]; e != null ; e=e.next_) {
if ((e.hash == hash) && e.key.equals$O(key) ) {
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException'));
}}
var e=tab[index];
tab[index]=Clazz.new_($I$(2).c$$I$TK$TV$java_util_Hashtable_Entry,[hash, key, value, e]);
this.count++;
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.Hashtable, "KeySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return p$1.getIterator$I.apply(this.b$['java.util.Hashtable'], [0]);
});

Clazz.newMeth(C$, 'size$', function () {
return this.this$0.count;
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.b$['java.util.Hashtable'].containsKey$O.apply(this.b$['java.util.Hashtable'], [o]);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
return this.b$['java.util.Hashtable'].remove$O.apply(this.b$['java.util.Hashtable'], [o]) != null ;
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['java.util.Hashtable'].clear$.apply(this.b$['java.util.Hashtable'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Hashtable, "EntrySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return p$1.getIterator$I.apply(this.b$['java.util.Hashtable'], [2]);
});

Clazz.newMeth(C$, ['add$java_util_Map_Entry','add$TE'], function (o) {
return C$.superclazz.prototype.add$TE.apply(this, [o]);
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var entry=o;
var key=entry.getKey$();
var tab=this.this$0.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
for (var e=tab[index]; e != null ; e=e.next_) if (e.hash == hash && e.equals$O(entry) ) return true;

return false;
});

Clazz.newMeth(C$, 'remove$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var entry=o;
var key=entry.getKey$();
var tab=this.this$0.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (var prev=null; e != null ; prev=e, e=e.next_) {
if (e.hash == hash && e.equals$O(entry) ) {
this.this$0.modCount++;
if (prev != null ) prev.next_=e.next_;
 else tab[index]=e.next_;
this.this$0.count--;
e.value=null;
return true;
}}
return false;
});

Clazz.newMeth(C$, 'size$', function () {
return this.this$0.count;
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['java.util.Hashtable'].clear$.apply(this.b$['java.util.Hashtable'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Hashtable, "ValueCollection", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractCollection');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return p$1.getIterator$I.apply(this.b$['java.util.Hashtable'], [1]);
});

Clazz.newMeth(C$, 'size$', function () {
return this.this$0.count;
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.b$['java.util.Hashtable'].containsValue$O.apply(this.b$['java.util.Hashtable'], [o]);
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['java.util.Hashtable'].clear$.apply(this.b$['java.util.Hashtable'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Hashtable, "Entry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Map','java.util.Map.Entry']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.hash=0;
this.key=null;
this.value=null;
this.next_=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$I$TK$TV$java_util_Hashtable_Entry'], function (hash, key, value, next) {
C$.$init$.apply(this);
this.hash=hash;
this.key=key;
this.value=value;
this.next_=next;
}, 1);

Clazz.newMeth(C$, 'clone$', function () {
return Clazz.new_(C$.c$$I$TK$TV$java_util_Hashtable_Entry,[this.hash, this.key, this.value, (this.next_ == null  ? null : this.next_.clone$())]);
});

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, ['setValue$TV'], function (value) {
if (value == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var oldValue=this.value;
this.value=value;
return oldValue;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
return (this.key == null  ? e.getKey$() == null  : this.key.equals$O(e.getKey$())) && (this.value == null  ? e.getValue$() == null  : this.value.equals$O(e.getValue$())) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.hash ^ $I$(1).hashCode$O(this.value);
});

Clazz.newMeth(C$, 'toString', function () {
return this.key.toString() + "=" + this.value.toString() ;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Hashtable, "Enumerator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.util.Enumeration', 'java.util.Iterator']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.table=null;
this.index=0;
this.entry=null;
this.lastReturned=null;
this.type=0;
this.iterator=false;
this.expectedModCount=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.table=this.b$['java.util.Hashtable'].table;
this.index=this.table.length;
this.expectedModCount=this.this$0.modCount;
}, 1);

Clazz.newMeth(C$, 'c$$I$Z', function (type, iterator) {
C$.$init$.apply(this);
this.type=type;
this.iterator=iterator;
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$', function () {
var e=this.entry;
var i=this.index;
var t=this.table;
while (e == null  && i > 0 ){
e=t[--i];
}
this.entry=e;
this.index=i;
return e != null ;
});

Clazz.newMeth(C$, 'nextElement$', function () {
var et=this.entry;
var i=this.index;
var t=this.table;
while (et == null  && i > 0 ){
et=t[--i];
}
this.entry=et;
this.index=i;
if (et != null ) {
var e=this.lastReturned=this.entry;
this.entry=e.next_;
return this.type == 0 ? e.key : (this.type == 1 ? e.value : e);
}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["Hashtable Enumerator"]);
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.hasMoreElements$();
});

Clazz.newMeth(C$, 'next$', function () {
if (this.this$0.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return this.nextElement$();
});

Clazz.newMeth(C$, 'remove$', function () {
if (!this.iterator) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
if (this.lastReturned == null ) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Hashtable Enumerator"]);
if (this.this$0.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
{
var tab=this.b$['java.util.Hashtable'].table;
var index=(this.lastReturned.hash & 2147483647) % tab.length;
var e=tab[index];
for (var prev=null; e != null ; prev=e, e=e.next_) {
if (e === this.lastReturned ) {
this.this$0.modCount++;
this.expectedModCount++;
if (prev == null ) tab[index]=e.next_;
 else prev.next_=e.next_;
this.this$0.count--;
this.lastReturned=null;
return;
}}
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:47 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
