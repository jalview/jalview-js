(function(){var P$=java.util,p$1={},I$=[[0,['java.util.JumboEnumSet','.EnumSetIterator'],'java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JumboEnumSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.EnumSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.elements=null;
this.size=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.size=0;
}, 1);

Clazz.newMeth(C$, 'c$$Class$EnumA', function (elementType, universe) {
C$.superclazz.c$$Class$EnumA.apply(this, [elementType, universe]);
C$.$init$.apply(this);
this.elements=Clazz.array(Long.TYPE, [(universe.length + 63) >>> 6]);
}, 1);

Clazz.newMeth(C$, ['addRange$TE$TE'], function (from, to) {
var fromIndex=from.ordinal$() >>> 6;
var toIndex=to.ordinal$() >>> 6;
if (fromIndex == toIndex) {
this.elements[fromIndex]=(-1 >>> (from.ordinal$() - to.ordinal$() - 1 )) << from.ordinal$();
} else {
this.elements[fromIndex]=(-1 << from.ordinal$());
for (var i=fromIndex + 1; i < toIndex; i++) this.elements[i]=-1;

this.elements[toIndex]=-1 >>> (63 - to.ordinal$());
}this.size=to.ordinal$() - from.ordinal$() + 1;
});

Clazz.newMeth(C$, 'addAll$', function () {
for (var i=0; i < this.elements.length; i++) this.elements[i]=-1;

this.elements[this.elements.length - 1]>>>=-this.universe.length;
this.size=this.universe.length;
});

Clazz.newMeth(C$, 'complement$', function () {
for (var i=0; i < this.elements.length; i++) this.elements[i]=~this.elements[i];

this.elements[this.elements.length - 1]&=(-1 >>> -this.universe.length);
this.size=this.universe.length - this.size;
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(1), [this, null]);
});

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.size == 0;
});

Clazz.newMeth(C$, 'contains$O', function (e) {
if (e == null ) return false;
var eClass=e.getClass$();
if (eClass !== this.elementType  && eClass.getSuperclass$() !== this.elementType  ) return false;
var eOrdinal=(e).ordinal$();
return (this.elements[eOrdinal >>> 6] & (1 << eOrdinal)) != 0;
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
this.typeCheck$TE(e);
var eOrdinal=e.ordinal$();
var eWordNum=eOrdinal >>> 6;
var oldElements=this.elements[eWordNum];
this.elements[eWordNum]|=(1 << eOrdinal);
var result=(this.elements[eWordNum] != oldElements);
if (result) this.size++;
return result;
});

Clazz.newMeth(C$, 'remove$O', function (e) {
if (e == null ) return false;
var eClass=e.getClass$();
if (eClass !== this.elementType  && eClass.getSuperclass$() !== this.elementType  ) return false;
var eOrdinal=(e).ordinal$();
var eWordNum=eOrdinal >>> 6;
var oldElements=this.elements[eWordNum];
this.elements[eWordNum]&=~(1 << eOrdinal);
var result=(this.elements[eWordNum] != oldElements);
if (result) this.size--;
return result;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
if (!(Clazz.instanceOf(c, "java.util.JumboEnumSet"))) return C$.superclazz.prototype.containsAll$java_util_Collection.apply(this, [c]);
var es=c;
if (es.elementType !== this.elementType ) return es.isEmpty$();
for (var i=0; i < this.elements.length; i++) if ((es.elements[i] & ~this.elements[i]) != 0) return false;

return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
if (!(Clazz.instanceOf(c, "java.util.JumboEnumSet"))) return C$.superclazz.prototype.addAll$java_util_Collection.apply(this, [c]);
var es=c;
if (es.elementType !== this.elementType ) {
if (es.isEmpty$()) return false;
 else throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[es.elementType + " != " + this.elementType ]);
}for (var i=0; i < this.elements.length; i++) this.elements[i]|=es.elements[i];

return p$1.recalculateSize.apply(this, []);
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
if (!(Clazz.instanceOf(c, "java.util.JumboEnumSet"))) return C$.superclazz.prototype.removeAll$java_util_Collection.apply(this, [c]);
var es=c;
if (es.elementType !== this.elementType ) return false;
for (var i=0; i < this.elements.length; i++) this.elements[i]&=~es.elements[i];

return p$1.recalculateSize.apply(this, []);
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
if (!(Clazz.instanceOf(c, "java.util.JumboEnumSet"))) return C$.superclazz.prototype.retainAll$java_util_Collection.apply(this, [c]);
var es=c;
if (es.elementType !== this.elementType ) {
var changed=(this.size != 0);
this.clear$();
return changed;
}for (var i=0; i < this.elements.length; i++) this.elements[i]&=es.elements[i];

return p$1.recalculateSize.apply(this, []);
});

Clazz.newMeth(C$, 'clear$', function () {
$I$(2).fill$JA$J(this.elements, 0);
this.size=0;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.JumboEnumSet"))) return C$.superclazz.prototype.equals$O.apply(this, [o]);
var es=o;
if (es.elementType !== this.elementType ) return this.size == 0 && es.size == 0 ;
return $I$(2).equals$JA$JA(es.elements, this.elements);
});

Clazz.newMeth(C$, 'recalculateSize', function () {
var oldSize=this.size;
this.size=0;
for (var elt, $elt = 0, $$elt = this.elements; $elt<$$elt.length&&((elt=($$elt[$elt])),1);$elt++) this.size+=Long.bitCount$J(elt);

return this.size != oldSize;
}, p$1);

Clazz.newMeth(C$, 'clone$', function () {
var result=C$.superclazz.prototype.clone$.apply(this, []);
result.elements=result.elements.clone$();
return result;
});
;
(function(){var C$=Clazz.newClass(P$.JumboEnumSet, "EnumSetIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.unseen=0;
this.unseenIndex=0;
this.lastReturned=0;
this.lastReturnedIndex=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.unseenIndex=0;
this.lastReturned=0;
this.lastReturnedIndex=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.unseen=this.this$0.elements[0];
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
while (this.unseen == 0 && this.unseenIndex < this.this$0.elements.length - 1 )this.unseen=this.this$0.elements[++this.unseenIndex];

return this.unseen != 0;
});

Clazz.newMeth(C$, 'next$', function () {
if (!this.hasNext$()) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.lastReturned=this.unseen & -this.unseen;
this.lastReturnedIndex=this.unseenIndex;
this.unseen-=this.lastReturned;
return this.this$0.universe[(this.lastReturnedIndex << 6) + Long.numberOfTrailingZeros$J(this.lastReturned)];
});

Clazz.newMeth(C$, 'remove$', function () {
if (this.lastReturned == 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
var oldElements=this.this$0.elements[this.lastReturnedIndex];
this.this$0.elements[this.lastReturnedIndex]&=~this.lastReturned;
if (oldElements != this.this$0.elements[this.lastReturnedIndex]) {
this.this$0.size--;
}this.lastReturned=0;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
