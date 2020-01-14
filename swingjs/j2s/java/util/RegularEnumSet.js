(function(){var P$=java.util,I$=[[0,['java.util.RegularEnumSet','.EnumSetIterator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RegularEnumSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.EnumSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.elements=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.elements=0;
}, 1);

Clazz.newMeth(C$, 'c$$Class$EnumA', function (elementType, universe) {
C$.superclazz.c$$Class$EnumA.apply(this, [elementType, universe]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['addRange$TE$TE'], function (from, to) {
this.elements=(-1 >>> (from.ordinal$() - to.ordinal$() - 1 )) << from.ordinal$();
});

Clazz.newMeth(C$, 'addAll$', function () {
if (this.universe.length != 0) this.elements=-1 >>> -this.universe.length;
});

Clazz.newMeth(C$, 'complement$', function () {
if (this.universe.length != 0) {
this.elements=~this.elements;
this.elements&=-1 >>> -this.universe.length;
}});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(1), [this, null]);
});

Clazz.newMeth(C$, 'size$', function () {
return Long.bitCount$J(this.elements);
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.elements == 0;
});

Clazz.newMeth(C$, 'contains$O', function (e) {
if (e == null ) return false;
var eClass=e.getClass$();
if (eClass !== this.elementType  && eClass.getSuperclass$() !== this.elementType  ) return false;
return (this.elements & (1 << (e).ordinal$())) != 0;
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
this.typeCheck$TE(e);
var oldElements=this.elements;
this.elements|=(1 << (e).ordinal$());
return this.elements != oldElements;
});

Clazz.newMeth(C$, 'remove$O', function (e) {
if (e == null ) return false;
var eClass=e.getClass$();
if (eClass !== this.elementType  && eClass.getSuperclass$() !== this.elementType  ) return false;
var oldElements=this.elements;
this.elements&=~(1 << (e).ordinal$());
return this.elements != oldElements;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
if (!(Clazz.instanceOf(c, "java.util.RegularEnumSet"))) return C$.superclazz.prototype.containsAll$java_util_Collection.apply(this, [c]);
var es=c;
if (es.elementType !== this.elementType ) return es.isEmpty$();
return (es.elements & ~this.elements) == 0;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
if (!(Clazz.instanceOf(c, "java.util.RegularEnumSet"))) return C$.superclazz.prototype.addAll$java_util_Collection.apply(this, [c]);
var es=c;
if (es.elementType !== this.elementType ) {
if (es.isEmpty$()) return false;
 else throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[es.elementType + " != " + this.elementType ]);
}var oldElements=this.elements;
this.elements|=es.elements;
return this.elements != oldElements;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
if (!(Clazz.instanceOf(c, "java.util.RegularEnumSet"))) return C$.superclazz.prototype.removeAll$java_util_Collection.apply(this, [c]);
var es=c;
if (es.elementType !== this.elementType ) return false;
var oldElements=this.elements;
this.elements&=~es.elements;
return this.elements != oldElements;
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
if (!(Clazz.instanceOf(c, "java.util.RegularEnumSet"))) return C$.superclazz.prototype.retainAll$java_util_Collection.apply(this, [c]);
var es=c;
if (es.elementType !== this.elementType ) {
var changed=(this.elements != 0);
this.elements=0;
return changed;
}var oldElements=this.elements;
this.elements&=es.elements;
return this.elements != oldElements;
});

Clazz.newMeth(C$, 'clear$', function () {
this.elements=0;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.RegularEnumSet"))) return C$.superclazz.prototype.equals$O.apply(this, [o]);
var es=o;
if (es.elementType !== this.elementType ) return this.elements == 0 && es.elements == 0 ;
return es.elements == this.elements;
});
;
(function(){var C$=Clazz.newClass(P$.RegularEnumSet, "EnumSetIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.unseen=0;
this.lastReturned=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.lastReturned=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.unseen=this.this$0.elements;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.unseen != 0;
});

Clazz.newMeth(C$, 'next$', function () {
if (this.unseen == 0) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.lastReturned=this.unseen & -this.unseen;
this.unseen-=this.lastReturned;
return this.this$0.universe[Long.numberOfTrailingZeros$J(this.lastReturned)];
});

Clazz.newMeth(C$, 'remove$', function () {
if (this.lastReturned == 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.this$0.elements&=~this.lastReturned;
this.lastReturned=0;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:49 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
