(function(){var P$=Clazz.newPackage("intervalstore.impl"),p$1={},I$=[[0,'intervalstore.impl.NCNode','java.util.ArrayList','java.util.Collections','intervalstore.impl.NCListBuilder','intervalstore.impl.Range','intervalstore.impl.BinarySearcher','StringBuilder',['intervalstore.impl.NCList','.NCListIterator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "NCList", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractCollection');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.size=0;
this.subranges=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (ranges) {
C$.c$.apply(this, []);
this.build$java_util_List(ranges);
}, 1);

Clazz.newMeth(C$, 'build$java_util_List', function (ranges) {
var sublists=this.partitionNestedSublists$java_util_List(ranges);
for (var sublist, $sublist = sublists.iterator$(); $sublist.hasNext$()&&((sublist=($sublist.next$())),1);) {
this.subranges.add$TE(Clazz.new_($I$(1).c$$java_util_List,[ranges.subList$I$I(sublist.getBegin$(), sublist.getEnd$() + 1)]));
}
this.size=ranges.size$();
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.subranges=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'partitionNestedSublists$java_util_List', function (ranges) {
var sublists=Clazz.new_($I$(2));
if (ranges.isEmpty$()) {
return sublists;
}$I$(3).sort$java_util_List$java_util_Comparator(ranges, Clazz.new_($I$(4)).getComparator$());
var listStartIndex=0;
var lastParent=ranges.get$I(0);
var first=true;
for (var i=0; i < ranges.size$(); i++) {
var nextInterval=ranges.get$I(i);
if (!first && !lastParent.properlyContainsInterval$intervalstore_api_IntervalI(nextInterval) ) {
sublists.add$TE(Clazz.new_($I$(5).c$$I$I,[listStartIndex, i - 1]));
listStartIndex=i;
lastParent=nextInterval;
}first=false;
}
sublists.add$TE(Clazz.new_($I$(5).c$$I$I,[listStartIndex, ranges.size$() - 1]));
return sublists;
});

Clazz.newMeth(C$, ['add$TT','add$TE'], function (entry) {
var newNode=Clazz.new_($I$(1).c$$TT,[entry]);
this.addNode$intervalstore_impl_NCNode(newNode);
return true;
});

Clazz.newMeth(C$, 'addNode$intervalstore_impl_NCNode', function (newNode) {
var start=newNode.getBegin$();
var end=newNode.getEnd$();
this.size+=newNode.size$();
var candidateIndex=this.findFirstOverlap$J(start);
var enclosing=false;
var firstEnclosed=0;
var lastEnclosed=0;
for (var j=candidateIndex; j < this.subranges.size$(); j++) {
var subrange=this.subranges.get$I(j);
if (subrange.equalsInterval$intervalstore_api_IntervalI(newNode)) {
this.subranges.add$I$TE(j, newNode);
return;
}if (end < subrange.getBegin$() && !enclosing ) {
this.subranges.add$I$TE(j, newNode);
return;
}if (subrange.properlyContainsInterval$intervalstore_api_IntervalI(newNode)) {
subrange.addNode$intervalstore_impl_NCNode(newNode);
return;
}if (start <= subrange.getBegin$()) {
if (end >= subrange.getEnd$()) {
if (!enclosing) {
firstEnclosed=j;
}lastEnclosed=j;
enclosing=true;
continue;
} else {
if (enclosing) {
this.push$intervalstore_impl_NCNode$I$I(newNode, firstEnclosed, lastEnclosed);
} else {
this.subranges.add$I$TE(j, newNode);
}return;
}}}
if (enclosing) {
this.push$intervalstore_impl_NCNode$I$I(newNode, firstEnclosed, lastEnclosed);
} else {
this.subranges.add$TE(newNode);
}});

Clazz.newMeth(C$, 'contains$O', function (entry) {
if (!(Clazz.instanceOf(entry, "intervalstore.api.IntervalI"))) {
return false;
}var interval=entry;
var candidateIndex=this.findFirstOverlap$J(interval.getBegin$());
var to=interval.getEnd$();
for (var i=candidateIndex; i < this.subranges.size$(); i++) {
var candidate=this.subranges.get$I(i);
if (candidate.getBegin$() > to) {
break;
}if (candidate.contains$intervalstore_api_IntervalI(interval)) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'push$intervalstore_impl_NCNode$I$I', function (node, i, j) {
for (var k=i; k <= j; k++) {
var n=this.subranges.get$I(k);
if (!node.containsInterval$intervalstore_api_IntervalI(n)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can't push " + n.toString() + " inside " + node.toString() ]);
}node.addNode$intervalstore_impl_NCNode(n);
}
for (var k=j; k >= i; k--) {
this.subranges.remove$I(k);
}
this.subranges.add$I$TE(i, node);
});

Clazz.newMeth(C$, 'findOverlaps$J$J', function (from, to) {
var result=Clazz.new_($I$(2));
this.findOverlaps$J$J$java_util_List(from, to, result);
return result;
});

Clazz.newMeth(C$, 'findOverlaps$J$J$java_util_List', function (from, to, result) {
var candidateIndex=this.findFirstOverlap$J(from);
for (var i=candidateIndex; i < this.subranges.size$(); i++) {
var candidate=this.subranges.get$I(i);
if (candidate.getBegin$() > to) {
break;
}candidate.findOverlaps$J$J$java_util_List(from, to, result);
}
});

Clazz.newMeth(C$, 'findFirstOverlap$J', function (from) {
return $I$(6).findFirst$java_util_List$java_util_function_Function(this.subranges, ((P$.NCList$lambda1||
(function(){var C$=Clazz.newClass(P$, "NCList$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (val) { return (val.getEnd$() >= this.$finals$.from);});
})()
), Clazz.new_(P$.NCList$lambda1.$init$, [this, {from: from}])));
});

Clazz.newMeth(C$, 'toString', function () {
return this.subranges.toString();
});

Clazz.newMeth(C$, 'prettyPrint$', function () {
var sb=Clazz.new_($I$(7).c$$I,[512]);
var offset=0;
var indent=2;
this.prettyPrint$StringBuilder$I$I(sb, offset, indent);
sb.append$S(System.lineSeparator$());
return sb.toString();
});

Clazz.newMeth(C$, 'prettyPrint$StringBuilder$I$I', function (sb, offset, indent) {
var first=true;
for (var subrange, $subrange = this.subranges.iterator$(); $subrange.hasNext$()&&((subrange=($subrange.next$())),1);) {
if (!first) {
sb.append$S(System.lineSeparator$());
}first=false;
subrange.prettyPrint$StringBuilder$I$I(sb, offset, indent);
}
});

Clazz.newMeth(C$, 'isValid$', function () {
var count=0;
for (var subrange, $subrange = this.subranges.iterator$(); $subrange.hasNext$()&&((subrange=($subrange.next$())),1);) {
count+=subrange.size$();
}
if (count != this.size) {
return false;
}return this.isValid$I$I(-2147483648, 2147483647);
});

Clazz.newMeth(C$, 'isValid$I$I', function (start, end) {
var lastRange=null;
for (var subrange, $subrange = this.subranges.iterator$(); $subrange.hasNext$()&&((subrange=($subrange.next$())),1);) {
if (subrange.getBegin$() < start) {
System.err.println$S("error in NCList: range " + subrange.toString() + " starts before " + end );
return false;
}if (subrange.getEnd$() > end) {
System.err.println$S("error in NCList: range " + subrange.toString() + " ends after " + end );
return false;
}if (lastRange != null ) {
if (subrange.getBegin$() < lastRange.getBegin$()) {
System.err.println$S("error in NCList: range " + subrange.toString() + " starts before " + lastRange.toString() );
return false;
}if (subrange.properlyContainsInterval$intervalstore_api_IntervalI(lastRange)) {
System.err.println$S("error in NCList: range " + subrange.toString() + " encloses preceding: " + lastRange.toString() );
return false;
}if (lastRange.properlyContainsInterval$intervalstore_api_IntervalI(subrange)) {
System.err.println$S("error in NCList: range " + subrange.toString() + " enclosed by preceding: " + lastRange.toString() );
return false;
}}lastRange=subrange;
if (!subrange.isValid$()) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'getEntries$', function () {
var result=Clazz.new_($I$(2));
this.getEntries$java_util_List(result);
return result;
});

Clazz.newMeth(C$, 'getEntries$java_util_List', function (result) {
for (var subrange, $subrange = this.subranges.iterator$(); $subrange.hasNext$()&&((subrange=($subrange.next$())),1);) {
subrange.getEntries$java_util_List(result);
}
});

Clazz.newMeth(C$, ['remove$TT'], function (entry) {
if (entry == null ) {
return false;
}var i=this.findFirstOverlap$J(entry.getBegin$());
for (; i < this.subranges.size$(); i++) {
var subrange=this.subranges.get$I(i);
if (subrange.getBegin$() > entry.getBegin$()) {
return false;
}var subRegions=subrange.getSubRegions$();
if (subrange.getRegion$().equals$O(entry)) {
this.subranges.remove$I(i);
this.size-=subrange.size$();
if (subRegions != null ) {
for (var r, $r = subRegions.subranges.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
this.addNode$intervalstore_impl_NCNode(r);
}
}return true;
} else {
if (subrange.remove$TT(entry)) {
this.size--;
return true;
}}}
return false;
});

Clazz.newMeth(C$, 'getDepth$', function () {
var subDepth=0;
for (var subrange, $subrange = this.subranges.iterator$(); $subrange.hasNext$()&&((subrange=($subrange.next$())),1);) {
subDepth=Math.max(subDepth, subrange.getDepth$());
}
return subDepth;
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(8), [this, null]);
});

Clazz.newMeth(C$, 'clear$', function () {
this.subranges.clear$();
this.size=0;
});
;
(function(){var C$=Clazz.newClass(P$.NCList, "NCListIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.subrangeIndex=0;
this.nodeIterator=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.subrangeIndex=p$1.nextSubrange$I.apply(this, [-1]);
}, 1);

Clazz.newMeth(C$, 'nextSubrange$I', function (after) {
var nextIndex=after + 1;
if (nextIndex < this.this$0.subranges.size$()) {
this.nodeIterator=this.this$0.subranges.get$I(nextIndex).iterator$();
return nextIndex;
}this.nodeIterator=null;
return -1;
}, p$1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.nodeIterator != null  && this.nodeIterator.hasNext$() ;
});

Clazz.newMeth(C$, 'next$', function () {
if (this.nodeIterator == null  || !this.nodeIterator.hasNext$() ) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}var result=this.nodeIterator.next$();
if (!this.nodeIterator.hasNext$()) {
this.subrangeIndex=p$1.nextSubrange$I.apply(this, [this.subrangeIndex]);
}return result;
});
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-03-13 17:03:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
