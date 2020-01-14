(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.concurrent.ForkJoinPool']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractTask", null, 'java.util.concurrent.CountedCompleter');
C$.LEAF_TARGET=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.LEAF_TARGET=$I$(1).getCommonPoolParallelism$() << 2;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.helper=null;
this.spliterator=null;
this.targetSize=0;
this.leftChild=null;
this.rightChild=null;
this.localResult=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_stream_PipelineHelper$java_util_Spliterator','c$null'], function (helper, spliterator) {
C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this, [null]);
C$.$init$.apply(this);
this.helper=helper;
this.spliterator=spliterator;
this.targetSize=0;
}, 1);

Clazz.newMeth(C$, ['c$$TK$java_util_Spliterator'], function (parent, spliterator) {
C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this, [parent]);
C$.$init$.apply(this);
this.spliterator=spliterator;
this.helper=parent.helper;
this.targetSize=parent.targetSize;
}, 1);

Clazz.newMeth(C$, 'suggestTargetSize$J', function (sizeEstimate) {
var est=(sizeEstimate/C$.LEAF_TARGET|0);
return est > 0 ? est : 1;
}, 1);

Clazz.newMeth(C$, 'getTargetSize$J', function (sizeEstimate) {
var s;
return ((s=this.targetSize) != 0 ? s : (this.targetSize=C$.suggestTargetSize$J(sizeEstimate)));
});

Clazz.newMeth(C$, 'getRawResult$', function () {
return this.localResult;
});

Clazz.newMeth(C$, ['setRawResult$TR','setRawResult$TV','setRawResult$TT'], function (result) {
if (result != null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$, 'getLocalResult$', function () {
return this.localResult;
});

Clazz.newMeth(C$, ['setLocalResult$TR'], function (localResult) {
this.localResult=localResult;
});

Clazz.newMeth(C$, 'isLeaf$', function () {
return this.leftChild == null ;
});

Clazz.newMeth(C$, 'isRoot$', function () {
return this.getParent$() == null ;
});

Clazz.newMeth(C$, 'getParent$', function () {
return this.getCompleter$();
});

Clazz.newMeth(C$, 'compute$', function () {
var rs=this.spliterator;
var ls;
var sizeEstimate=rs.estimateSize$();
var sizeThreshold=this.getTargetSize$J(sizeEstimate);
var forkRight=false;
var task=this;
while (sizeEstimate > sizeThreshold && (ls=rs.trySplit$()) != null  ){
var leftChild;
var rightChild;
var taskToFork;
task.leftChild=leftChild=task.makeChild$java_util_Spliterator(ls);
task.rightChild=rightChild=task.makeChild$java_util_Spliterator(rs);
task.setPendingCount$I(1);
if (forkRight) {
forkRight=false;
rs=ls;
task=leftChild;
taskToFork=rightChild;
} else {
forkRight=true;
task=rightChild;
taskToFork=leftChild;
}taskToFork.fork$();
sizeEstimate=rs.estimateSize$();
}
task.setLocalResult$TR(task.doLeaf$());
task.tryComplete$();
});

Clazz.newMeth(C$, 'onCompletion$java_util_concurrent_CountedCompleter', function ($caller) {
this.spliterator=null;
this.leftChild=this.rightChild=null;
});

Clazz.newMeth(C$, 'isLeftmostNode$', function () {
var node=this;
while (node != null ){
var parent=node.getParent$();
if (parent != null  && parent.leftChild !== node  ) return false;
node=parent;
}
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
