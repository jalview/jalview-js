(function(){var P$=java.util,p$1={},p$2={},I$=[[0,['java.util.AbstractList','.Itr'],['java.util.AbstractList','.ListItr'],'java.util.RandomAccessSubList','java.util.SubList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SubList", null, 'java.util.AbstractList');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.l=null;
this.offset=0;
this.size=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_AbstractList$I$I', function (list, fromIndex, toIndex) {
Clazz.super_(C$, this,1);
if (fromIndex < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["fromIndex = " + fromIndex]);
if (toIndex > list.size$()) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["toIndex = " + toIndex]);
if (fromIndex > toIndex) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["fromIndex(" + fromIndex + ") > toIndex(" + toIndex + ")" ]);
this.l=list;
this.offset=fromIndex;
this.size=toIndex - fromIndex;
this.modCount=this.l.modCount;
}, 1);

Clazz.newMeth(C$, 'set$I$TE', function (index, element) {
p$2.rangeCheck$I.apply(this, [index]);
p$2.checkForComodification.apply(this, []);
return this.l.set$I$TE(index + this.offset, element);
});

Clazz.newMeth(C$, 'get$I', function (index) {
p$2.rangeCheck$I.apply(this, [index]);
p$2.checkForComodification.apply(this, []);
return this.l.get$I(index + this.offset);
});

Clazz.newMeth(C$, 'size$', function () {
p$2.checkForComodification.apply(this, []);
return this.size;
});

Clazz.newMeth(C$, 'add$I$TE', function (index, element) {
p$2.rangeCheckForAdd$I.apply(this, [index]);
p$2.checkForComodification.apply(this, []);
this.l.add$I$TE(index + this.offset, element);
this.modCount=this.l.modCount;
this.size++;
});

Clazz.newMeth(C$, 'remove$I', function (index) {
p$2.rangeCheck$I.apply(this, [index]);
p$2.checkForComodification.apply(this, []);
var result=this.l.remove$I(index + this.offset);
this.modCount=this.l.modCount;
this.size--;
return result;
});

Clazz.newMeth(C$, 'removeRange$I$I', function (fromIndex, toIndex) {
p$2.checkForComodification.apply(this, []);
this.l.removeRange$I$I(fromIndex + this.offset, toIndex + this.offset);
this.modCount=this.l.modCount;
this.size-=(toIndex - fromIndex);
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
return this.addAll$I$java_util_Collection(this.size, c);
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (index, c) {
p$2.rangeCheckForAdd$I.apply(this, [index]);
var cSize=c.size$();
if (cSize == 0) return false;
p$2.checkForComodification.apply(this, []);
this.l.addAll$I$java_util_Collection(this.offset + index, c);
this.modCount=this.l.modCount;
this.size+=cSize;
return true;
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.listIterator$();
});

Clazz.newMeth(C$, 'listIterator$I', function (index) {
p$2.checkForComodification.apply(this, []);
p$2.rangeCheckForAdd$I.apply(this, [index]);
return ((P$.SubList$1||
(function(){var C$=Clazz.newClass(P$, "SubList$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.ListIterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.i=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.i=this.b$['java.util.SubList'].l.listIterator$I(this.$finals$.index + this.b$['java.util.SubList'].offset);
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.nextIndex$() < this.b$['java.util.SubList'].size;
});

Clazz.newMeth(C$, 'next$', function () {
if (this.hasNext$()) return this.i.next$();
 else throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$, 'hasPrevious$', function () {
return this.previousIndex$() >= 0;
});

Clazz.newMeth(C$, 'previous$', function () {
if (this.hasPrevious$()) return this.i.previous$();
 else throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$, 'nextIndex$', function () {
return this.i.nextIndex$() - this.b$['java.util.SubList'].offset;
});

Clazz.newMeth(C$, 'previousIndex$', function () {
return this.i.previousIndex$() - this.b$['java.util.SubList'].offset;
});

Clazz.newMeth(C$, 'remove$', function () {
this.i.remove$();
this.b$['java.util.SubList'].modCount=this.b$['java.util.SubList'].l.modCount;
this.b$['java.util.SubList'].size--;
});

Clazz.newMeth(C$, ['set$TE'], function (e) {
this.i.set$TE(e);
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
this.i.add$TE(e);
this.b$['java.util.SubList'].modCount=this.b$['java.util.SubList'].l.modCount;
this.b$['java.util.SubList'].size++;
});
})()
), Clazz.new_(P$.SubList$1.$init$, [this, {index: index}]));
});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
return Clazz.new_(C$.c$$java_util_AbstractList$I$I,[this, fromIndex, toIndex]);
});

Clazz.newMeth(C$, 'rangeCheck$I', function (index) {
if (index < 0 || index >= this.size ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[p$2.outOfBoundsMsg$I.apply(this, [index])]);
}, p$2);

Clazz.newMeth(C$, 'rangeCheckForAdd$I', function (index) {
if (index < 0 || index > this.size ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[p$2.outOfBoundsMsg$I.apply(this, [index])]);
}, p$2);

Clazz.newMeth(C$, 'outOfBoundsMsg$I', function (index) {
return "Index: " + index + ", Size: " + this.size ;
}, p$2);

Clazz.newMeth(C$, 'checkForComodification', function () {
if (this.modCount != this.l.modCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}, p$2);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
