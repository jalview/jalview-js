(function(){var P$=Clazz.newPackage("intervalstore.impl"),I$=[[0,'java.util.ArrayList','intervalstore.impl.NCListBuilder','intervalstore.impl.NCList','intervalstore.impl.BinarySearcher',['intervalstore.impl.BinarySearcher','.Compare'],['intervalstore.impl.IntervalStore','.IntervalIterator']]],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IntervalStore", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractCollection', 'intervalstore.api.IntervalStoreI');
C$.$classes$=[['IntervalIterator',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['nonNested','java.util.List','nested','intervalstore.impl.NCList']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.nonNested=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (intervals) {
C$.c$.apply(this, []);
var sublists=Clazz.new_($I$(2,1)).partitionNestedSublists$java_util_List(intervals);
var nested=Clazz.new_($I$(1,1));
for (var subrange, $subrange = sublists.iterator$(); $subrange.hasNext$()&&((subrange=($subrange.next$())),1);) {
var listIndex=subrange.getBegin$();
var root=intervals.get$I(listIndex);
while (listIndex <= subrange.getEnd$()){
var t=intervals.get$I(listIndex);
if (root.equalsInterval$intervalstore_api_IntervalI(t)) {
this.nonNested.add$O(t);
} else {
nested.add$O(t);
}listIndex++;
}
}
if (!nested.isEmpty$()) {
this.nested=Clazz.new_($I$(3,1).c$$java_util_List,[nested]);
}}, 1);

Clazz.newMeth(C$, ['add$intervalstore_api_IntervalI','add$O'], function (interval) {
return this.add$intervalstore_api_IntervalI$Z(interval, true);
});

Clazz.newMeth(C$, 'add$intervalstore_api_IntervalI$Z', function (interval, allowDuplicates) {
if (interval == null ) {
return false;
}if (!allowDuplicates && this.contains$O(interval) ) {
return false;
}if (!this.addNonNestedInterval$intervalstore_api_IntervalI(interval)) {
this.addNestedInterval$intervalstore_api_IntervalI(interval);
}return true;
});

Clazz.newMeth(C$, 'contains$O', function (entry) {
if (this.listContains$java_util_List$O(this.nonNested, entry)) {
return true;
}return this.nested == null  ? false : this.nested.contains$O(entry);
});

Clazz.newMeth(C$, 'addNonNestedInterval$intervalstore_api_IntervalI', function (entry) {
{
var insertPosition=$I$(4,"findFirst$java_util_List$Z$intervalstore_impl_BinarySearcher_Compare$I",[this.nonNested, true, $I$(5).GE, entry.getBegin$()]);
if (insertPosition > 0) {
if (this.nonNested.get$I(insertPosition - 1).properlyContainsInterval$intervalstore_api_IntervalI(entry)) {
return false;
}}if (insertPosition < this.nonNested.size$()) {
var following=this.nonNested.get$I(insertPosition);
if (entry.properlyContainsInterval$intervalstore_api_IntervalI(following) || following.properlyContainsInterval$intervalstore_api_IntervalI(entry) ) {
return false;
}}this.nonNested.add$I$O(insertPosition, entry);
return true;
}});

Clazz.newMeth(C$, 'findOverlaps$J$J', function (from, to) {
return this.findOverlaps$J$J$java_util_List(from, to, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'findOverlaps$J$J$java_util_List', function (from, to, result) {
if (result == null ) {
result=Clazz.new_($I$(1,1));
}this.findNonNestedOverlaps$J$J$java_util_List(from, to, result);
if (this.nested != null ) {
this.nested.findOverlaps$J$J$java_util_List(from, to, result);
}return result;
});

Clazz.newMeth(C$, 'prettyPrint$', function () {
var pp=this.nonNested.toString();
if (this.nested != null ) {
pp += System.lineSeparator$() + this.nested.prettyPrint$();
}return pp;
});

Clazz.newMeth(C$, 'isValid$', function () {
for (var i=0; i < this.nonNested.size$() - 1; i++) {
var i1=this.nonNested.get$I(i);
var i2=this.nonNested.get$I(i + 1);
if (i2.getBegin$() < i1.getBegin$()) {
System.err.println$S("nonNested wrong start order : " + i1.toString() + ", " + i2.toString() );
return false;
}if (i1.properlyContainsInterval$intervalstore_api_IntervalI(i2) || i2.properlyContainsInterval$intervalstore_api_IntervalI(i1) ) {
System.err.println$S("nonNested invalid containment!: " + i1.toString() + ", " + i2.toString() );
return false;
}}
return this.nested == null  ? true : this.nested.isValid$();
});

Clazz.newMeth(C$, 'size$', function () {
var i=this.nonNested.size$();
if (this.nested != null ) {
i+=this.nested.size$();
}return i;
});

Clazz.newMeth(C$, 'remove$O', function (o) {
if (o == null ) {
return false;
}try {
var entry=o;
var removed=this.removeNonNested$intervalstore_api_IntervalI(entry);
if (!removed && this.nested != null  ) {
removed=this.nested.remove$intervalstore_api_IntervalI(entry);
}return removed;
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'removeNonNested$intervalstore_api_IntervalI', function (entry) {
var startIndex=$I$(4,"findFirst$java_util_List$Z$intervalstore_impl_BinarySearcher_Compare$I",[this.nonNested, true, $I$(5).GE, entry.getBegin$()]);
var from=entry.getBegin$();
var i=startIndex;
var size=this.nonNested.size$();
while (i < size){
var sf=this.nonNested.get$I(i);
if (sf.getBegin$() > from) {
break;
}if (sf.equals$O(entry)) {
this.nonNested.remove$I(i);
return true;
}i++;
}
return false;
});

Clazz.newMeth(C$, 'getDepth$', function () {
if (this.size$() == 0) {
return 0;
}return (this.nonNested.isEmpty$() ? 0 : 1) + (this.nested == null  ? 0 : this.nested.getDepth$());
});

Clazz.newMeth(C$, 'addNestedInterval$intervalstore_api_IntervalI', function (interval) {
if (this.nested == null ) {
this.nested=Clazz.new_($I$(3,1));
}this.nested.add$intervalstore_api_IntervalI(interval);
});

Clazz.newMeth(C$, 'listContains$java_util_List$O', function (intervals, entry) {
if (intervals == null  || entry == null   || !(Clazz.instanceOf(entry, "intervalstore.api.IntervalI")) ) {
return false;
}var interval=entry;
var pos=$I$(4,"findFirst$java_util_List$Z$intervalstore_impl_BinarySearcher_Compare$I",[intervals, true, $I$(5).GE, interval.getBegin$()]);
var len=intervals.size$();
while (pos < len){
var sf=intervals.get$I(pos);
if (sf.getBegin$() > interval.getBegin$()) {
return false;
}if (sf.equals$O(interval)) {
return true;
}pos++;
}
return false;
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(6,1).c$$intervalstore_impl_IntervalStore,[this, null, this]);
});

Clazz.newMeth(C$, 'clear$', function () {
this.nonNested.clear$();
this.nested=Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'findNonNestedOverlaps$J$J$java_util_List', function (from, to, result) {
var startIndex=$I$(4,"findFirst$java_util_List$Z$intervalstore_impl_BinarySearcher_Compare$I",[this.nonNested, false, $I$(5).GE, (from|0)]);
var startIndex1=startIndex;
var i=startIndex1;
while (i < this.nonNested.size$()){
var sf=this.nonNested.get$I(i);
if (sf.getBegin$() > to) {
break;
}if (sf.getBegin$() <= to && sf.getEnd$() >= from ) {
result.add$O(sf);
}i++;
}
});

Clazz.newMeth(C$, 'toString', function () {
var s=this.nonNested.toString();
if (this.nested != null ) {
s=s + System.lineSeparator$() + this.nested.toString() ;
}return s;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.IntervalStore, "IntervalIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['topLevelIterator','java.util.Iterator','+nestedIterator']]]

Clazz.newMeth(C$, 'c$$intervalstore_impl_IntervalStore', function (intervalStore) {
;C$.$init$.apply(this);
this.topLevelIterator=this.this$0.nonNested.iterator$();
if (this.this$0.nested != null ) {
this.nestedIterator=this.this$0.nested.iterator$();
}}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.topLevelIterator.hasNext$() ? true : (this.nestedIterator != null  && this.nestedIterator.hasNext$() );
});

Clazz.newMeth(C$, 'next$', function () {
if (this.topLevelIterator.hasNext$()) {
return this.topLevelIterator.next$();
}if (this.nestedIterator != null ) {
return this.nestedIterator.next$();
}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
