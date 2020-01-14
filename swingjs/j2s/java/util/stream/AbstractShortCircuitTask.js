(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.concurrent.atomic.AtomicReference']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractShortCircuitTask", null, 'java.util.stream.AbstractTask');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sharedResult=null;
this.canceled=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_stream_PipelineHelper$java_util_Spliterator','c$null'], function (helper, spliterator) {
C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator.apply(this, [helper, spliterator]);
C$.$init$.apply(this);
this.sharedResult=Clazz.new_($I$(1).c$$TV,[null]);
}, 1);

Clazz.newMeth(C$, ['c$$TK$java_util_Spliterator'], function (parent, spliterator) {
C$.superclazz.c$$TK$java_util_Spliterator.apply(this, [parent, spliterator]);
C$.$init$.apply(this);
this.sharedResult=parent.sharedResult;
}, 1);

Clazz.newMeth(C$, 'compute$', function () {
var rs=this.spliterator;
var ls;
var sizeEstimate=rs.estimateSize$();
var sizeThreshold=this.getTargetSize$J(sizeEstimate);
var forkRight=false;
var task=this;
var sr=this.sharedResult;
var result;
while ((result=sr.get$()) == null ){
if (task.taskCanceled$()) {
result=task.getEmptyResult$();
break;
}if (sizeEstimate <= sizeThreshold || (ls=rs.trySplit$()) == null  ) {
result=task.doLeaf$();
break;
}var leftChild;
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
task.setLocalResult$TR(result);
task.tryComplete$();
});

Clazz.newMeth(C$, ['shortCircuit$TR'], function (result) {
if (result != null ) this.sharedResult.compareAndSet$TV$TV(null, result);
});

Clazz.newMeth(C$, ['setLocalResult$TR'], function (localResult) {
if (this.isRoot$()) {
if (localResult != null ) this.sharedResult.compareAndSet$TV$TV(null, localResult);
} else C$.superclazz.prototype.setLocalResult$TR.apply(this, [localResult]);
});

Clazz.newMeth(C$, 'getRawResult$', function () {
return this.getLocalResult$();
});

Clazz.newMeth(C$, 'getLocalResult$', function () {
if (this.isRoot$()) {
var answer=this.sharedResult.get$();
return (answer == null ) ? this.getEmptyResult$() : answer;
} else return C$.superclazz.prototype.getLocalResult$.apply(this, []);
});

Clazz.newMeth(C$, 'cancel$', function () {
this.canceled=true;
});

Clazz.newMeth(C$, 'taskCanceled$', function () {
var cancel=this.canceled;
if (!cancel) {
for (var parent=this.getParent$(); !cancel && parent != null  ; parent=parent.getParent$()) cancel=parent.canceled;

}return cancel;
});

Clazz.newMeth(C$, 'cancelLaterNodes$', function () {
for (var parent=this.getParent$(), node=this; parent != null ; node=parent, parent=parent.getParent$()) {
if (parent.leftChild === node ) {
var rightSibling=parent.rightChild;
if (!rightSibling.canceled) rightSibling.cancel$();
}}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
