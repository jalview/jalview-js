(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.treealign"),I$=[[0,'java.util.LinkedList','java.util.ArrayList',['fr.orsay.lri.varna.models.treealign.Tree','.DFSPrefixIterator']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Tree", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Iterable');
C$.$classes$=[['DFSPrefixIterator',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tree=this;
},1);

C$.$fields$=[['O',['children','java.util.List','value','<T>','tree','fr.orsay.lri.varna.models.treealign.Tree']]]

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$O', function (value) {
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
this.children.add$O(child);
}
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.children=Clazz.new_($I$(2,1));
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
return (Clazz.new_($I$(3,1),[this, null]));
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Tree, "DFSPrefixIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.remainingNodes=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['remainingNodes','java.util.LinkedList']]]

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
this.remainingNodes.add$O(children.get$I(i));
}
return currentNode;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.remainingNodes.add$O(this.this$0.tree);
}, 1);

Clazz.newMeth(C$, 'remove$', function () {
throw (Clazz.new_(Clazz.load('UnsupportedOperationException')));
});
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
