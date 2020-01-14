(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.treealign"),I$=[[0,'java.util.LinkedList','java.util.ArrayList',['fr.orsay.lri.varna.models.treealign.Tree','.DFSPrefixIterator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Tree", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Iterable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.children=null;
this.value=null;
this.tree=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.tree=this;
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, ['setValue$TT'], function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getChildren$', function () {
return this.children;
});

Clazz.newMeth(C$, 'replaceChildrenListBy$java_util_List', function (children) {
this.children=children;
});

Clazz.newMeth(C$, 'c$$Iterable', function (children) {
C$.c$.apply(this, []);
for (var child, $child = children.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
this.children.add$TE(child);
}
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.children=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'rootDegree$', function () {
return this.children.size$();
});

Clazz.newMeth(C$, 'countNodes$', function () {
var count=1;
for (var child, $child = this.children.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
count+=child.countNodes$();
}
return count;
});

Clazz.newMeth(C$, 'computeDegree$', function () {
var max=this.children.size$();
for (var child, $child = this.children.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
var maxCandidate=child.computeDegree$();
if (maxCandidate > max) {
max=maxCandidate;
}}
return max;
});

Clazz.newMeth(C$, 'toGraphvizNodeId$', function () {
return C$.superclazz.prototype.toString.apply(this, []);
});

Clazz.newMeth(C$, 'iterator$', function () {
return (Clazz.new_($I$(3), [this, null]));
});
;
(function(){var C$=Clazz.newClass(P$.Tree, "DFSPrefixIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.remainingNodes=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.remainingNodes=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return !this.remainingNodes.isEmpty$();
});

Clazz.newMeth(C$, 'next$', function () {
if (this.remainingNodes.isEmpty$()) {
throw (Clazz.new_(Clazz.load('java.util.NoSuchElementException')));
}var currentNode=this.remainingNodes.getLast$();
this.remainingNodes.removeLast$();
var children=currentNode.getChildren$();
var n=children.size$();
for (var i=n - 1; i >= 0; i--) {
this.remainingNodes.add$TE(children.get$I(i));
}
return currentNode;
});

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.remainingNodes.add$TE(this.this$0.tree);
}, 1);

Clazz.newMeth(C$, 'remove$', function () {
throw (Clazz.new_(Clazz.load('UnsupportedOperationException')));
});
})()
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
