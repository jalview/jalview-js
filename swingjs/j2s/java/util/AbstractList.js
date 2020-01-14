(function(){var P$=java.util,p$1={},p$2={},I$=[[0,['java.util.AbstractList','.Itr'],['java.util.AbstractList','.ListItr'],'java.util.RandomAccessSubList','java.util.SubList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractList", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractCollection', 'java.util.List');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.modCount=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.modCount=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, ['add$TE'], function (e) {
this.add$I$TE(this.size$(), e);
return true;
});

Clazz.newMeth(C$, 'set$I$TE', function (index, element) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'add$I$TE', function (index, element) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$I', function (index) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
var it=this.listIterator$();
if (o == null ) {
while (it.hasNext$())if (it.next$() == null ) return it.previousIndex$();

} else {
while (it.hasNext$())if (o.equals$O(it.next$())) return it.previousIndex$();

}return -1;
});

Clazz.newMeth(C$, 'lastIndexOf$O', function (o) {
var it=this.listIterator$I(this.size$());
if (o == null ) {
while (it.hasPrevious$())if (it.previous$() == null ) return it.nextIndex$();

} else {
while (it.hasPrevious$())if (o.equals$O(it.previous$())) return it.nextIndex$();

}return -1;
});

Clazz.newMeth(C$, 'clear$', function () {
this.removeRange$I$I(0, this.size$());
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (index, c) {
p$1.rangeCheckForAdd$I.apply(this, [index]);
var modified=false;
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
this.add$I$TE(index++, e);
modified=true;
}
return modified;
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(1), [this, null]);
});

Clazz.newMeth(C$, 'listIterator$', function () {
return this.listIterator$I(0);
});

Clazz.newMeth(C$, 'listIterator$I', function (index) {
p$1.rangeCheckForAdd$I.apply(this, [index]);
return Clazz.new_($I$(2).c$$I, [this, null, index]);
});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
return (Clazz.instanceOf(this, "java.util.RandomAccess") ? Clazz.new_($I$(3).c$$java_util_AbstractList$I$I,[this, fromIndex, toIndex]) : Clazz.new_($I$(4).c$$java_util_AbstractList$I$I,[this, fromIndex, toIndex]));
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o === this ) return true;
if (!(Clazz.instanceOf(o, "java.util.List"))) return false;
var e1=this.listIterator$();
var e2=(o).listIterator$();
while (e1.hasNext$() && e2.hasNext$() ){
var o1=e1.next$();
var o2=e2.next$();
if (!(o1 == null  ? o2 == null  : o1.equals$O(o2))) return false;
}
return !(e1.hasNext$() || e2.hasNext$() );
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hashCode=1;
for (var e, $e = this.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) hashCode=31 * hashCode + (e == null  ? 0 : e.hashCode$());

return hashCode;
});

Clazz.newMeth(C$, 'removeRange$I$I', function (fromIndex, toIndex) {
var it=this.listIterator$I(fromIndex);
for (var i=0, n=toIndex - fromIndex; i < n; i++) {
it.next$();
it.remove$();
}
});

Clazz.newMeth(C$, 'rangeCheckForAdd$I', function (index) {
if (index < 0 || index > this.size$() ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[p$1.outOfBoundsMsg$I.apply(this, [index])]);
}, p$1);

Clazz.newMeth(C$, 'outOfBoundsMsg$I', function (index) {
return "Index: " + index + ", Size: " + this.size$() ;
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.AbstractList, "Itr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cursor=0;
this.lastRet=0;
this.expectedModCount=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.cursor=0;
this.lastRet=-1;
this.expectedModCount=this.this$0.modCount;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.cursor != this.b$['java.util.AbstractCollection'].size$.apply(this.b$['java.util.AbstractCollection'], []);
});

Clazz.newMeth(C$, 'next$', function () {
this.checkForComodification$();
try {
var i=this.cursor;
var next=this.b$['java.util.AbstractList'].get$I.apply(this.b$['java.util.AbstractList'], [i]);
this.lastRet=i;
this.cursor=i + 1;
return next;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
this.checkForComodification$();
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'remove$', function () {
if (this.lastRet < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.checkForComodification$();
try {
this.b$['java.util.AbstractList'].remove$I.apply(this.b$['java.util.AbstractList'], [this.lastRet]);
if (this.lastRet < this.cursor) this.cursor--;
this.lastRet=-1;
this.expectedModCount=this.this$0.modCount;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'checkForComodification$', function () {
if (this.this$0.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.AbstractList, "ListItr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.AbstractList','.Itr'], 'java.util.ListIterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (index) {
Clazz.super_(C$, this,1);
this.cursor=index;
}, 1);

Clazz.newMeth(C$, 'hasPrevious$', function () {
return this.cursor != 0;
});

Clazz.newMeth(C$, 'previous$', function () {
this.checkForComodification$();
try {
var i=this.cursor - 1;
var previous=this.b$['java.util.AbstractList'].get$I.apply(this.b$['java.util.AbstractList'], [i]);
this.lastRet=this.cursor=i;
return previous;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
this.checkForComodification$();
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'nextIndex$', function () {
return this.cursor;
});

Clazz.newMeth(C$, 'previousIndex$', function () {
return this.cursor - 1;
});

Clazz.newMeth(C$, ['set$TE'], function (e) {
if (this.lastRet < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.checkForComodification$();
try {
this.b$['java.util.AbstractList'].set$I$TE.apply(this.b$['java.util.AbstractList'], [this.lastRet, e]);
this.expectedModCount=this.this$0.modCount;
} catch (ex) {
if (Clazz.exceptionOf(ex,"IndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
this.checkForComodification$();
try {
var i=this.cursor;
this.b$['java.util.AbstractList'].add$I$TE.apply(this.b$['java.util.AbstractList'], [i, e]);
this.lastRet=-1;
this.cursor=i + 1;
this.expectedModCount=this.this$0.modCount;
} catch (ex) {
if (Clazz.exceptionOf(ex,"IndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
} else {
throw ex;
}
}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
