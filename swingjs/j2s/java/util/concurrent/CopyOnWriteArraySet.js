(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[[0,'java.util.concurrent.CopyOnWriteArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CopyOnWriteArraySet", null, 'java.util.AbstractSet', 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.al=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.al=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
Clazz.super_(C$, this,1);
this.al=Clazz.new_($I$(1));
this.al.addAllAbsent$java_util_Collection(c);
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.al.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.al.isEmpty$();
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.al.contains$O(o);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.al.toArray$();
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
return this.al.toArray$TTA(a);
});

Clazz.newMeth(C$, 'clear$', function () {
this.al.clear$();
});

Clazz.newMeth(C$, 'remove$O', function (o) {
return this.al.remove$O(o);
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
return this.al.addIfAbsent$TE(e);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
return this.al.containsAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
return this.al.addAllAbsent$java_util_Collection(c) > 0;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
return this.al.removeAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
return this.al.retainAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.al.iterator$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o === this ) return true;
if (!(Clazz.instanceOf(o, "java.util.Set"))) return false;
var set=(o);
var it=set.iterator$();
var elements=this.al.getArray$();
var len=elements.length;
var matched=Clazz.array(Boolean.TYPE, [len]);
var k=0;
 outer : while (it.hasNext$()){
if (++k > len) return false;
var x=it.next$();
for (var i=0; i < len; ++i) {
if (!matched[i] && C$.eq$O$O(x, elements[i]) ) {
matched[i]=true;
continue outer;
}}
return false;
}
return k == len;
});

Clazz.newMeth(C$, 'eq$O$O', function (o1, o2) {
return (o1 == null  ? o2 == null  : o1.equals$O(o2));
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
