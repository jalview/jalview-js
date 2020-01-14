(function(){var P$=java.util,p$1={},I$=[[0,'java.util.HashMap','java.util.LinkedHashMap','InternalError',['java.util.HashMap','.KeySpliterator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HashSet", null, 'java.util.AbstractSet', ['java.util.Set', 'Cloneable', 'java.io.Serializable']);
C$.PRESENT=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.PRESENT= Clazz.new_();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.map=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.map=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
Clazz.super_(C$, this,1);
this.map=Clazz.new_($I$(1).c$$I,[Math.max(((c.size$() / 0.75)|0) + 1, 16)]);
this.addAll$java_util_Collection(c);
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
Clazz.super_(C$, this,1);
this.map=Clazz.new_($I$(1).c$$I$F,[initialCapacity, loadFactor]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
Clazz.super_(C$, this,1);
this.map=Clazz.new_($I$(1).c$$I,[initialCapacity]);
}, 1);

Clazz.newMeth(C$, 'c$$I$F$Z', function (initialCapacity, loadFactor, dummy) {
Clazz.super_(C$, this,1);
this.map=Clazz.new_($I$(2).c$$I$F,[initialCapacity, loadFactor]);
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return this.map.keySet$().iterator$();
});

Clazz.newMeth(C$, 'size$', function () {
return this.map.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.map.isEmpty$();
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.map.containsKey$O(o);
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
return this.map.put$TK$TV(e, C$.PRESENT) == null ;
});

Clazz.newMeth(C$, 'remove$O', function (o) {
return this.map.remove$O(o) === C$.PRESENT ;
});

Clazz.newMeth(C$, 'clear$', function () {
this.map.clear$();
});

Clazz.newMeth(C$, 'clone$', function () {
try {
var newSet=Clazz.clone(this);
newSet.map=this.map.clone$();
return newSet;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(3).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
s.defaultWriteObject$();
s.writeInt$I(this.map.capacity$());
s.writeFloat$F(this.map.loadFactor$());
s.writeInt$I(this.map.size$());
for (var e, $e = this.map.keySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) s.writeObject$O(e);

}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
s.defaultReadObject$();
var capacity=s.readInt$();
if (capacity < 0) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Illegal capacity: " + capacity]);
}var loadFactor=s.readFloat$();
if (loadFactor <= 0  || Float.isNaN$F(loadFactor) ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Illegal load factor: " + new Float(loadFactor).toString()]);
}var size=s.readInt$();
if (size < 0) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Illegal size: " + size]);
}capacity=(Math.min(size * Math.min(1 / loadFactor, 4.0), 1073741824)|0);
this.map=(Clazz.instanceOf((this), "java.util.LinkedHashSet") ? Clazz.new_($I$(2).c$$I$F,[capacity, loadFactor]) : Clazz.new_($I$(1).c$$I$F,[capacity, loadFactor]));
for (var i=0; i < size; i++) {
var e=s.readObject$();
this.map.put$TK$TV(e, C$.PRESENT);
}
}, p$1);

Clazz.newMeth(C$, 'spliterator$', function () {
return Clazz.new_($I$(4).c$$java_util_HashMap$I$I$I$I,[this.map, 0, -1, 0, 0]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:47 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
