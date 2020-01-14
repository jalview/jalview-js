(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.Spliterators','java.util.stream.Nodes','java.util.Arrays',['java.util.stream.Nodes','.InternalNodeSpliterator','.OfInt'],['java.util.stream.Nodes','.InternalNodeSpliterator','.OfLong'],['java.util.stream.Nodes','.InternalNodeSpliterator','.OfDouble'],['java.util.stream.Nodes','.InternalNodeSpliterator','.OfRef'],'java.util.Objects','java.util.ArrayDeque','java.util.stream.AbstractTask',['java.util.stream.Nodes','.ConcNode'],['java.util.stream.Nodes','.ConcNode','.OfInt'],['java.util.stream.Nodes','.ConcNode','.OfLong'],['java.util.stream.Nodes','.ConcNode','.OfDouble'],['java.util.stream.Nodes','.EmptyNode','.OfRef'],['java.util.stream.Nodes','.EmptyNode','.OfInt'],['java.util.stream.Nodes','.EmptyNode','.OfLong'],['java.util.stream.Nodes','.EmptyNode','.OfDouble'],'Error','java.util.stream.StreamShape',['java.util.stream.Nodes','.ArrayNode'],['java.util.stream.Nodes','.CollectionNode'],['java.util.stream.Nodes','.FixedNodeBuilder'],['java.util.stream.Nodes','.SpinedNodeBuilder'],['java.util.stream.Nodes','.IntArrayNode'],['java.util.stream.Nodes','.IntFixedNodeBuilder'],['java.util.stream.Nodes','.IntSpinedNodeBuilder'],['java.util.stream.Nodes','.LongArrayNode'],['java.util.stream.Nodes','.LongFixedNodeBuilder'],['java.util.stream.Nodes','.LongSpinedNodeBuilder'],['java.util.stream.Nodes','.DoubleArrayNode'],['java.util.stream.Nodes','.DoubleFixedNodeBuilder'],['java.util.stream.Nodes','.DoubleSpinedNodeBuilder'],['java.util.stream.Nodes','.SizedCollectorTask','.OfRef'],['java.util.stream.Nodes','.CollectorTask','.OfRef'],['java.util.stream.Nodes','.SizedCollectorTask','.OfInt'],['java.util.stream.Nodes','.CollectorTask','.OfInt'],['java.util.stream.Nodes','.SizedCollectorTask','.OfLong'],['java.util.stream.Nodes','.CollectorTask','.OfLong'],['java.util.stream.Nodes','.SizedCollectorTask','.OfDouble'],['java.util.stream.Nodes','.CollectorTask','.OfDouble'],['java.util.stream.Nodes','.ToArrayTask','.OfRef'],['java.util.stream.Nodes','.ToArrayTask','.OfInt'],['java.util.stream.Nodes','.ToArrayTask','.OfLong'],['java.util.stream.Nodes','.ToArrayTask','.OfDouble']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Nodes", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.EMPTY_NODE=null;
C$.EMPTY_INT_NODE=null;
C$.EMPTY_LONG_NODE=null;
C$.EMPTY_DOUBLE_NODE=null;
C$.EMPTY_INT_ARRAY=null;
C$.EMPTY_LONG_ARRAY=null;
C$.EMPTY_DOUBLE_ARRAY=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.EMPTY_NODE=Clazz.new_($I$(15));
C$.EMPTY_INT_NODE=Clazz.new_($I$(16));
C$.EMPTY_LONG_NODE=Clazz.new_($I$(17));
C$.EMPTY_DOUBLE_NODE=Clazz.new_($I$(18));
C$.EMPTY_INT_ARRAY=Clazz.array(Integer.TYPE, [0]);
C$.EMPTY_LONG_ARRAY=Clazz.array(Long.TYPE, [0]);
C$.EMPTY_DOUBLE_ARRAY=Clazz.array(Double.TYPE, [0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
throw Clazz.new_($I$(19).c$$S,["no instances"]);
}, 1);

Clazz.newMeth(C$, 'emptyNode$java_util_stream_StreamShape', function (shape) {
switch (shape) {
case $I$(20).REFERENCE:
return C$.EMPTY_NODE;
case $I$(20).INT_VALUE:
return C$.EMPTY_INT_NODE;
case $I$(20).LONG_VALUE:
return C$.EMPTY_LONG_NODE;
case $I$(20).DOUBLE_VALUE:
return C$.EMPTY_DOUBLE_NODE;
default:
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Unknown shape " + shape]);
}
}, 1);

Clazz.newMeth(C$, 'conc$java_util_stream_StreamShape$java_util_stream_Node$java_util_stream_Node', function (shape, left, right) {
switch (shape) {
case $I$(20).REFERENCE:
return Clazz.new_($I$(11).c$$java_util_stream_Node$java_util_stream_Node,[left, right]);
case $I$(20).INT_VALUE:
return Clazz.new_($I$(12).c$$java_util_stream_Node_OfInt$java_util_stream_Node_OfInt,[left, right]);
case $I$(20).LONG_VALUE:
return Clazz.new_($I$(13).c$$java_util_stream_Node_OfLong$java_util_stream_Node_OfLong,[left, right]);
case $I$(20).DOUBLE_VALUE:
return Clazz.new_($I$(14).c$$java_util_stream_Node_OfDouble$java_util_stream_Node_OfDouble,[left, right]);
default:
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Unknown shape " + shape]);
}
}, 1);

Clazz.newMeth(C$, 'node$TTA', function (array) {
return Clazz.new_($I$(21).c$$TTA,[array]);
}, 1);

Clazz.newMeth(C$, 'node$java_util_Collection', function (c) {
return Clazz.new_($I$(22).c$$java_util_Collection,[c]);
}, 1);

Clazz.newMeth(C$, 'builder$J$java_util_function_IntFunction', function (exactSizeIfKnown, generator) {
return (exactSizeIfKnown >= 0 && exactSizeIfKnown < 2147483639 ) ? Clazz.new_($I$(23).c$$J$java_util_function_IntFunction,[exactSizeIfKnown, generator]) : C$.builder$();
}, 1);

Clazz.newMeth(C$, 'builder$', function () {
return Clazz.new_($I$(24));
}, 1);

Clazz.newMeth(C$, 'node$IA', function (array) {
return Clazz.new_($I$(25).c$$IA,[array]);
}, 1);

Clazz.newMeth(C$, 'intBuilder$J', function (exactSizeIfKnown) {
return (exactSizeIfKnown >= 0 && exactSizeIfKnown < 2147483639 ) ? Clazz.new_($I$(26).c$$J,[exactSizeIfKnown]) : C$.intBuilder$();
}, 1);

Clazz.newMeth(C$, 'intBuilder$', function () {
return Clazz.new_($I$(27));
}, 1);

Clazz.newMeth(C$, 'node$JA', function (array) {
return Clazz.new_($I$(28).c$$JA,[array]);
}, 1);

Clazz.newMeth(C$, 'longBuilder$J', function (exactSizeIfKnown) {
return (exactSizeIfKnown >= 0 && exactSizeIfKnown < 2147483639 ) ? Clazz.new_($I$(29).c$$J,[exactSizeIfKnown]) : C$.longBuilder$();
}, 1);

Clazz.newMeth(C$, 'longBuilder$', function () {
return Clazz.new_($I$(30));
}, 1);

Clazz.newMeth(C$, 'node$DA', function (array) {
return Clazz.new_($I$(31).c$$DA,[array]);
}, 1);

Clazz.newMeth(C$, 'doubleBuilder$J', function (exactSizeIfKnown) {
return (exactSizeIfKnown >= 0 && exactSizeIfKnown < 2147483639 ) ? Clazz.new_($I$(32).c$$J,[exactSizeIfKnown]) : C$.doubleBuilder$();
}, 1);

Clazz.newMeth(C$, 'doubleBuilder$', function () {
return Clazz.new_($I$(33));
}, 1);

Clazz.newMeth(C$, 'collect$java_util_stream_PipelineHelper$java_util_Spliterator$Z$java_util_function_IntFunction', function (helper, spliterator, flattenTree, generator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (size >= 0 && spliterator.hasCharacteristics$I(16384) ) {
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var array=generator.apply$((size|0));
Clazz.new_($I$(34).c$$java_util_Spliterator$java_util_stream_PipelineHelper$TP_OUTA,[spliterator, helper, array]).invoke$();
return C$.node$TTA(array);
} else {
var node=Clazz.new_($I$(35).c$$java_util_stream_PipelineHelper$java_util_function_IntFunction$java_util_Spliterator,[helper, generator, spliterator]).invoke$();
return flattenTree ? C$.flatten$java_util_stream_Node$java_util_function_IntFunction(node, generator) : node;
}}, 1);

Clazz.newMeth(C$, 'collectInt$java_util_stream_PipelineHelper$java_util_Spliterator$Z', function (helper, spliterator, flattenTree) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (size >= 0 && spliterator.hasCharacteristics$I(16384) ) {
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var array=Clazz.array(Integer.TYPE, [(size|0)]);
Clazz.new_($I$(36).c$$java_util_Spliterator$java_util_stream_PipelineHelper$IA,[spliterator, helper, array]).invoke$();
return C$.node$IA(array);
} else {
var node=Clazz.new_($I$(37).c$$java_util_stream_PipelineHelper$java_util_Spliterator,[helper, spliterator]).invoke$();
return flattenTree ? C$.flattenInt$java_util_stream_Node_OfInt(node) : node;
}}, 1);

Clazz.newMeth(C$, 'collectLong$java_util_stream_PipelineHelper$java_util_Spliterator$Z', function (helper, spliterator, flattenTree) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (size >= 0 && spliterator.hasCharacteristics$I(16384) ) {
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var array=Clazz.array(Long.TYPE, [(size|0)]);
Clazz.new_($I$(38).c$$java_util_Spliterator$java_util_stream_PipelineHelper$JA,[spliterator, helper, array]).invoke$();
return C$.node$JA(array);
} else {
var node=Clazz.new_($I$(39).c$$java_util_stream_PipelineHelper$java_util_Spliterator,[helper, spliterator]).invoke$();
return flattenTree ? C$.flattenLong$java_util_stream_Node_OfLong(node) : node;
}}, 1);

Clazz.newMeth(C$, 'collectDouble$java_util_stream_PipelineHelper$java_util_Spliterator$Z', function (helper, spliterator, flattenTree) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (size >= 0 && spliterator.hasCharacteristics$I(16384) ) {
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var array=Clazz.array(Double.TYPE, [(size|0)]);
Clazz.new_($I$(40).c$$java_util_Spliterator$java_util_stream_PipelineHelper$DA,[spliterator, helper, array]).invoke$();
return C$.node$DA(array);
} else {
var node=Clazz.new_($I$(41).c$$java_util_stream_PipelineHelper$java_util_Spliterator,[helper, spliterator]).invoke$();
return flattenTree ? C$.flattenDouble$java_util_stream_Node_OfDouble(node) : node;
}}, 1);

Clazz.newMeth(C$, 'flatten$java_util_stream_Node$java_util_function_IntFunction', function (node, generator) {
if (node.getChildCount$() > 0) {
var size=node.count$();
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var array=generator.apply$((size|0));
Clazz.new_($I$(42).c$$java_util_stream_Node$TTA$I,[node, array, 0]).invoke$();
return C$.node$TTA(array);
} else {
return node;
}}, 1);

Clazz.newMeth(C$, 'flattenInt$java_util_stream_Node_OfInt', function (node) {
if (node.getChildCount$() > 0) {
var size=node.count$();
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var array=Clazz.array(Integer.TYPE, [(size|0)]);
Clazz.new_($I$(43).c$$java_util_stream_Node_OfInt$IA$I,[node, array, 0]).invoke$();
return C$.node$IA(array);
} else {
return node;
}}, 1);

Clazz.newMeth(C$, 'flattenLong$java_util_stream_Node_OfLong', function (node) {
if (node.getChildCount$() > 0) {
var size=node.count$();
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var array=Clazz.array(Long.TYPE, [(size|0)]);
Clazz.new_($I$(44).c$$java_util_stream_Node_OfLong$JA$I,[node, array, 0]).invoke$();
return C$.node$JA(array);
} else {
return node;
}}, 1);

Clazz.newMeth(C$, 'flattenDouble$java_util_stream_Node_OfDouble', function (node) {
if (node.getChildCount$() > 0) {
var size=node.count$();
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var array=Clazz.array(Double.TYPE, [(size|0)]);
Clazz.new_($I$(45).c$$java_util_stream_Node_OfDouble$DA$I,[node, array, 0]).invoke$();
return C$.node$DA(array);
} else {
return node;
}}, 1);
;
(function(){var C$=Clazz.newClass(P$.Nodes, "EmptyNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.Node');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'asArray$java_util_function_IntFunction', function (generator) {
return generator.apply$(0);
});

Clazz.newMeth(C$, ['copyInto$TT_ARR$I'], function (array, offset) {
});

Clazz.newMeth(C$, 'count$', function () {
return 0;
});

Clazz.newMeth(C$, ['forEach$TT_CONS'], function (consumer) {
});
;
(function(){var C$=Clazz.newClass(P$.Nodes.EmptyNode, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.EmptyNode']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(1).emptySpliterator$();
});
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.EmptyNode, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.EmptyNode'], [['java.util.stream.Node','java.util.stream.Node.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(1).emptyIntSpliterator$();
});

Clazz.newMeth(C$, 'asPrimitiveArray$', function () {
return $I$(2).EMPTY_INT_ARRAY;
});
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.EmptyNode, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.EmptyNode'], [['java.util.stream.Node','java.util.stream.Node.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(1).emptyLongSpliterator$();
});

Clazz.newMeth(C$, 'asPrimitiveArray$', function () {
return $I$(2).EMPTY_LONG_ARRAY;
});
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.EmptyNode, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.EmptyNode'], [['java.util.stream.Node','java.util.stream.Node.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(1).emptyDoubleSpliterator$();
});

Clazz.newMeth(C$, 'asPrimitiveArray$', function () {
return $I$(2).EMPTY_DOUBLE_ARRAY;
});
})()
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "ArrayNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.Node');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
this.curSize=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J$java_util_function_IntFunction', function (size, generator) {
C$.$init$.apply(this);
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
this.array=generator.apply$((size|0));
this.curSize=0;
}, 1);

Clazz.newMeth(C$, 'c$$TTA', function (array) {
C$.$init$.apply(this);
this.array=array;
this.curSize=array.length;
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(3).spliterator$TTA$I$I(this.array, 0, this.curSize);
});

Clazz.newMeth(C$, 'copyInto$TTA$I', function (dest, destOffset) {
System.arraycopy$O$I$O$I$I(this.array, 0, dest, destOffset, this.curSize);
});

Clazz.newMeth(C$, 'asArray$java_util_function_IntFunction', function (generator) {
if (this.array.length == this.curSize) {
return this.array;
} else {
throw Clazz.new_(Clazz.load('IllegalStateException'));
}});

Clazz.newMeth(C$, 'count$', function () {
return this.curSize;
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (consumer) {
for (var i=0; i < this.curSize; i++) {
consumer.accept$(this.array[i]);
}
});

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("ArrayNode[%d][%s]", [new Integer(this.array.length - this.curSize), $I$(3).toString$OA(this.array)]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "CollectionNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.Node');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.c=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
C$.$init$.apply(this);
this.c=c;
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
return this.c.stream$().spliterator$();
});

Clazz.newMeth(C$, 'copyInto$TTA$I', function (array, offset) {
for (var t, $t = this.c.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) array[offset++]=t;

});

Clazz.newMeth(C$, 'asArray$java_util_function_IntFunction', function (generator) {
return this.c.toArray$TTA(generator.apply$(this.c.size$()));
});

Clazz.newMeth(C$, 'count$', function () {
return this.c.size$();
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (consumer) {
this.c.forEach$java_util_function_Consumer(consumer);
});

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("CollectionNode[%d][%s]", [new Integer(this.c.size$()), this.c]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "AbstractConcNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.Node');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.left=null;
this.right=null;
this.size=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TT_NODE$TT_NODE'], function (left, right) {
C$.$init$.apply(this);
this.left=left;
this.right=right;
this.size=left.count$() + right.count$();
}, 1);

Clazz.newMeth(C$, 'getChildCount$', function () {
return 2;
});

Clazz.newMeth(C$, 'getChild$I', function (i) {
if (i == 0) return this.left;
if (i == 1) return this.right;
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
});

Clazz.newMeth(C$, 'count$', function () {
return this.size;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "ConcNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.AbstractConcNode'], 'java.util.stream.Node');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Node$java_util_stream_Node', function (left, right) {
C$.superclazz.c$$TT_NODE$TT_NODE.apply(this, [left, right]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
return Clazz.new_($I$(7).c$$java_util_stream_Node,[this]);
});

Clazz.newMeth(C$, 'copyInto$TTA$I', function (array, offset) {
$I$(8).requireNonNull$TT(array);
this.left.copyInto$TTA$I(array, offset);
this.right.copyInto$TTA$I(array, offset + (this.left.count$()|0));
});

Clazz.newMeth(C$, 'asArray$java_util_function_IntFunction', function (generator) {
var size=this.count$();
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var array=generator.apply$((size|0));
this.copyInto$TTA$I(array, 0);
return array;
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (consumer) {
this.left.forEach$java_util_function_Consumer(consumer);
this.right.forEach$java_util_function_Consumer(consumer);
});

Clazz.newMeth(C$, 'truncate$J$J$java_util_function_IntFunction', function (from, to, generator) {
if (from == 0 && to == this.count$() ) return this;
var leftCount=this.left.count$();
if (from >= leftCount) return this.right.truncate$J$J$java_util_function_IntFunction(from - leftCount, to - leftCount, generator);
 else if (to <= leftCount) return this.left.truncate$J$J$java_util_function_IntFunction(from, to, generator);
 else {
return $I$(2).conc$java_util_stream_StreamShape$java_util_stream_Node$java_util_stream_Node(this.getShape$(), this.left.truncate$J$J$java_util_function_IntFunction(from, leftCount, generator), this.right.truncate$J$J$java_util_function_IntFunction(0, to - leftCount, generator));
}});

Clazz.newMeth(C$, 'toString', function () {
if (this.count$() < 32) {
return String.format$S$OA("ConcNode[%s.%s]", [this.left, this.right]);
} else {
return String.format$S$OA("ConcNode[size=%d]", [new Long(this.count$())]);
}});
;
(function(){var C$=Clazz.newClass(P$.Nodes.ConcNode, "OfPrimitive", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.AbstractConcNode'], [['java.util.stream.Node','java.util.stream.Node.OfPrimitive']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TT_NODE$TT_NODE'], function (left, right) {
C$.superclazz.c$$TT_NODE$TT_NODE.apply(this, [left, right]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['forEach$TT_CONS'], function (consumer) {
this.left.forEach$TT_CONS(consumer);
this.right.forEach$TT_CONS(consumer);
});

Clazz.newMeth(C$, ['copyInto$TT_ARR$I'], function (array, offset) {
this.left.copyInto$TT_ARR$I(array, offset);
this.right.copyInto$TT_ARR$I(array, offset + (this.left.count$()|0));
});

Clazz.newMeth(C$, 'asPrimitiveArray$', function () {
var size=this.count$();
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var array=this.newArray$I((size|0));
this.copyInto$TT_ARR$I(array, 0);
return array;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.count$() < 32) return String.format$S$OA("%s[%s.%s]", [this.getClass$().getName$(), this.left, this.right]);
 else return String.format$S$OA("%s[size=%d]", [this.getClass$().getName$(), new Long(this.count$())]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.ConcNode, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.ConcNode','.OfPrimitive'], [['java.util.stream.Node','java.util.stream.Node.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Node_OfInt$java_util_stream_Node_OfInt', function (left, right) {
C$.superclazz.c$$TT_NODE$TT_NODE.apply(this, [left, right]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
return Clazz.new_($I$(4).c$$java_util_stream_Node_OfInt,[this]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.ConcNode, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.ConcNode','.OfPrimitive'], [['java.util.stream.Node','java.util.stream.Node.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Node_OfLong$java_util_stream_Node_OfLong', function (left, right) {
C$.superclazz.c$$TT_NODE$TT_NODE.apply(this, [left, right]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
return Clazz.new_($I$(5).c$$java_util_stream_Node_OfLong,[this]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.ConcNode, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.ConcNode','.OfPrimitive'], [['java.util.stream.Node','java.util.stream.Node.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Node_OfDouble$java_util_stream_Node_OfDouble', function (left, right) {
C$.superclazz.c$$TT_NODE$TT_NODE.apply(this, [left, right]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
return Clazz.new_($I$(6).c$$java_util_stream_Node_OfDouble,[this]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "InternalNodeSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.curNode=null;
this.curChildIndex=0;
this.lastNodeSpliterator=null;
this.tryAdvanceSpliterator=null;
this.tryAdvanceStack=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TN'], function (curNode) {
C$.$init$.apply(this);
this.curNode=curNode;
}, 1);

Clazz.newMeth(C$, 'initStack$', function () {
var stack=Clazz.new_($I$(9).c$$I,[8]);
for (var i=this.curNode.getChildCount$() - 1; i >= this.curChildIndex; i--) stack.addFirst$TE(this.curNode.getChild$I(i));

return stack;
});

Clazz.newMeth(C$, 'findNextLeafNode$java_util_Deque', function (stack) {
var n=null;
while ((n=stack.pollFirst$()) != null ){
if (n.getChildCount$() == 0) {
if (n.count$() > 0) return n;
} else {
for (var i=n.getChildCount$() - 1; i >= 0; i--) stack.addFirst$TE(n.getChild$I(i));

}}
return null;
});

Clazz.newMeth(C$, 'initTryAdvance$', function () {
if (this.curNode == null ) return false;
if (this.tryAdvanceSpliterator == null ) {
if (this.lastNodeSpliterator == null ) {
this.tryAdvanceStack=this.initStack$();
var leaf=this.findNextLeafNode$java_util_Deque(this.tryAdvanceStack);
if (leaf != null ) this.tryAdvanceSpliterator=leaf.spliterator$();
 else {
this.curNode=null;
return false;
}} else this.tryAdvanceSpliterator=this.lastNodeSpliterator;
}return true;
});

Clazz.newMeth(C$, 'trySplit$', function () {
if (this.curNode == null  || this.tryAdvanceSpliterator != null  ) return null;
 else if (this.lastNodeSpliterator != null ) return this.lastNodeSpliterator.trySplit$();
 else if (this.curChildIndex < this.curNode.getChildCount$() - 1) return this.curNode.getChild$I(this.curChildIndex++).spliterator$();
 else {
this.curNode=this.curNode.getChild$I(this.curChildIndex);
if (this.curNode.getChildCount$() == 0) {
this.lastNodeSpliterator=this.curNode.spliterator$();
return this.lastNodeSpliterator.trySplit$();
} else {
this.curChildIndex=0;
return this.curNode.getChild$I(this.curChildIndex++).spliterator$();
}}});

Clazz.newMeth(C$, 'estimateSize$', function () {
if (this.curNode == null ) return 0;
if (this.lastNodeSpliterator != null ) return this.lastNodeSpliterator.estimateSize$();
 else {
var size=0;
for (var i=this.curChildIndex; i < this.curNode.getChildCount$(); i++) size+=this.curNode.getChild$I(i).count$();

return size;
}});

Clazz.newMeth(C$, 'characteristics$', function () {
return 64;
});
;
(function(){var C$=Clazz.newClass(P$.Nodes.InternalNodeSpliterator, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.InternalNodeSpliterator']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Node', function (curNode) {
C$.superclazz.c$$TN.apply(this, [curNode]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer', function (consumer) {
if (!this.initTryAdvance$()) return false;
var hasNext=this.tryAdvanceSpliterator.tryAdvance$java_util_function_Consumer(consumer);
if (!hasNext) {
if (this.lastNodeSpliterator == null ) {
var leaf=this.findNextLeafNode$java_util_Deque(this.tryAdvanceStack);
if (leaf != null ) {
this.tryAdvanceSpliterator=leaf.spliterator$();
return this.tryAdvanceSpliterator.tryAdvance$java_util_function_Consumer(consumer);
}}this.curNode=null;
}return hasNext;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (consumer) {
if (this.curNode == null ) return;
if (this.tryAdvanceSpliterator == null ) {
if (this.lastNodeSpliterator == null ) {
var stack=this.initStack$();
var leaf;
while ((leaf=this.findNextLeafNode$java_util_Deque(stack)) != null ){
leaf.forEach$java_util_function_Consumer(consumer);
}
this.curNode=null;
} else this.lastNodeSpliterator.forEachRemaining$java_util_function_Consumer(consumer);
} else while (this.tryAdvance$java_util_function_Consumer(consumer)){
}
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.InternalNodeSpliterator, "OfPrimitive", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.InternalNodeSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfPrimitive']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TN'], function (cur) {
C$.superclazz.c$$TN.apply(this, [cur]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['tryAdvance$TT_CONS'], function (consumer) {
if (!this.initTryAdvance$()) return false;
var hasNext=this.tryAdvanceSpliterator.tryAdvance$TT_CONS(consumer);
if (!hasNext) {
if (this.lastNodeSpliterator == null ) {
var leaf=this.findNextLeafNode$java_util_Deque(this.tryAdvanceStack);
if (leaf != null ) {
this.tryAdvanceSpliterator=leaf.spliterator$();
return this.tryAdvanceSpliterator.tryAdvance$TT_CONS(consumer);
}}this.curNode=null;
}return hasNext;
});

Clazz.newMeth(C$, ['forEachRemaining$TT_CONS'], function (consumer) {
if (this.curNode == null ) return;
if (this.tryAdvanceSpliterator == null ) {
if (this.lastNodeSpliterator == null ) {
var stack=this.initStack$();
var leaf;
while ((leaf=this.findNextLeafNode$java_util_Deque(stack)) != null ){
leaf.forEach$TT_CONS(consumer);
}
this.curNode=null;
} else this.lastNodeSpliterator.forEachRemaining$TT_CONS(consumer);
} else while (this.tryAdvance$TT_CONS(consumer)){
}
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.InternalNodeSpliterator, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.InternalNodeSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Node_OfInt', function (cur) {
C$.superclazz.c$$TN.apply(this, [cur]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.InternalNodeSpliterator, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.InternalNodeSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Node_OfLong', function (cur) {
C$.superclazz.c$$TN.apply(this, [cur]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.InternalNodeSpliterator, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.InternalNodeSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Node_OfDouble', function (cur) {
C$.superclazz.c$$TN.apply(this, [cur]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "FixedNodeBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.ArrayNode'], [['java.util.stream.Node','java.util.stream.Node.Builder']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J$java_util_function_IntFunction', function (size, generator) {
C$.superclazz.c$$J$java_util_function_IntFunction.apply(this, [size, generator]);
C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return size < 2147483639});
}, 1);

Clazz.newMeth(C$, 'build$', function () {
if (this.curSize < this.array.length) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("Current size %d is less than fixed size %d", [new Integer(this.curSize), new Integer(this.array.length)])]);
return this;
});

Clazz.newMeth(C$, 'begin$J', function (size) {
if (size != this.array.length) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("Begin size %d is not equal to fixed size %d", [new Long(size), new Integer(this.array.length)])]);
this.curSize=0;
});

Clazz.newMeth(C$, ['accept$TT','accept$'], function (t) {
if (this.curSize < this.array.length) {
this.array[this.curSize++]=t;
} else {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("Accept exceeded fixed size of %d", [new Integer(this.array.length)])]);
}});

Clazz.newMeth(C$, 'end$', function () {
if (this.curSize < this.array.length) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("End size %d is less than fixed size %d", [new Integer(this.curSize), new Integer(this.array.length)])]);
});

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("FixedNodeBuilder[%d][%s]", [new Integer(this.array.length - this.curSize), $I$(3).toString$OA(this.array)]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "SpinedNodeBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.SpinedBuffer', ['java.util.stream.Node', ['java.util.stream.Node','java.util.stream.Node.Builder']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.building=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.building=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
return C$.superclazz.prototype.spliterator$.apply(this, []);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (consumer) {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
C$.superclazz.prototype.forEach$java_util_function_Consumer.apply(this, [consumer]);
});

Clazz.newMeth(C$, 'begin$J', function (size) {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "was already building"});
this.building=true;
this.clear$();
this.ensureCapacity$J(size);
});

Clazz.newMeth(C$, ['accept$TT','accept$','accept$TE'], function (t) {
Clazz.assert(C$, this, function(){return this.building}, function(){return "not building"});
C$.superclazz.prototype.accept$TE.apply(this, [t]);
});

Clazz.newMeth(C$, 'end$', function () {
Clazz.assert(C$, this, function(){return this.building}, function(){return "was not building"});
this.building=false;
});

Clazz.newMeth(C$, 'copyInto$TTA$I', function (array, offset) {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
C$.superclazz.prototype.copyInto$TEA$I.apply(this, [array, offset]);
});

Clazz.newMeth(C$, 'asArray$java_util_function_IntFunction', function (arrayFactory) {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
return C$.superclazz.prototype.asArray$java_util_function_IntFunction.apply(this, [arrayFactory]);
});

Clazz.newMeth(C$, 'build$', function () {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
return this;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "IntArrayNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.stream.Node','java.util.stream.Node.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
this.curSize=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J', function (size) {
C$.$init$.apply(this);
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
this.array=Clazz.array(Integer.TYPE, [(size|0)]);
this.curSize=0;
}, 1);

Clazz.newMeth(C$, 'c$$IA', function (array) {
C$.$init$.apply(this);
this.array=array;
this.curSize=array.length;
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(3).spliterator$IA$I$I(this.array, 0, this.curSize);
});

Clazz.newMeth(C$, 'asPrimitiveArray$', function () {
if (this.array.length == this.curSize) {
return this.array;
} else {
return $I$(3).copyOf$IA$I(this.array, this.curSize);
}});

Clazz.newMeth(C$, ['copyInto$IA$I','copyInto$TT_ARR$I'], function (dest, destOffset) {
System.arraycopy$O$I$O$I$I(this.array, 0, dest, destOffset, this.curSize);
});

Clazz.newMeth(C$, 'count$', function () {
return this.curSize;
});

Clazz.newMeth(C$, ['forEach$java_util_function_IntConsumer','forEach$TT_CONS'], function (consumer) {
for (var i=0; i < this.curSize; i++) {
consumer.accept$(this.array[i]);
}
});

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("IntArrayNode[%d][%s]", [new Integer(this.array.length - this.curSize), $I$(3).toString$IA(this.array)]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "LongArrayNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.stream.Node','java.util.stream.Node.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
this.curSize=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J', function (size) {
C$.$init$.apply(this);
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
this.array=Clazz.array(Long.TYPE, [(size|0)]);
this.curSize=0;
}, 1);

Clazz.newMeth(C$, 'c$$JA', function (array) {
C$.$init$.apply(this);
this.array=array;
this.curSize=array.length;
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(3).spliterator$JA$I$I(this.array, 0, this.curSize);
});

Clazz.newMeth(C$, 'asPrimitiveArray$', function () {
if (this.array.length == this.curSize) {
return this.array;
} else {
return $I$(3).copyOf$JA$I(this.array, this.curSize);
}});

Clazz.newMeth(C$, ['copyInto$JA$I','copyInto$TT_ARR$I'], function (dest, destOffset) {
System.arraycopy$O$I$O$I$I(this.array, 0, dest, destOffset, this.curSize);
});

Clazz.newMeth(C$, 'count$', function () {
return this.curSize;
});

Clazz.newMeth(C$, ['forEach$java_util_function_LongConsumer','forEach$TT_CONS'], function (consumer) {
for (var i=0; i < this.curSize; i++) {
consumer.accept$(this.array[i]);
}
});

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("LongArrayNode[%d][%s]", [new Integer(this.array.length - this.curSize), $I$(3).toString$JA(this.array)]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "DoubleArrayNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.stream.Node','java.util.stream.Node.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
this.curSize=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J', function (size) {
C$.$init$.apply(this);
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
this.array=Clazz.array(Double.TYPE, [(size|0)]);
this.curSize=0;
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (array) {
C$.$init$.apply(this);
this.array=array;
this.curSize=array.length;
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(3).spliterator$DA$I$I(this.array, 0, this.curSize);
});

Clazz.newMeth(C$, 'asPrimitiveArray$', function () {
if (this.array.length == this.curSize) {
return this.array;
} else {
return $I$(3).copyOf$DA$I(this.array, this.curSize);
}});

Clazz.newMeth(C$, ['copyInto$DA$I','copyInto$TT_ARR$I'], function (dest, destOffset) {
System.arraycopy$O$I$O$I$I(this.array, 0, dest, destOffset, this.curSize);
});

Clazz.newMeth(C$, 'count$', function () {
return this.curSize;
});

Clazz.newMeth(C$, ['forEach$java_util_function_DoubleConsumer','forEach$TT_CONS'], function (consumer) {
for (var i=0; i < this.curSize; i++) {
consumer.accept$(this.array[i]);
}
});

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("DoubleArrayNode[%d][%s]", [new Integer(this.array.length - this.curSize), $I$(3).toString$DA(this.array)]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "IntFixedNodeBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.IntArrayNode'], [['java.util.stream.Node','java.util.stream.Node.Builder','java.util.stream.Node.Builder.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J', function (size) {
C$.superclazz.c$$J.apply(this, [size]);
C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return size < 2147483639});
}, 1);

Clazz.newMeth(C$, 'build$', function () {
if (this.curSize < this.array.length) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("Current size %d is less than fixed size %d", [new Integer(this.curSize), new Integer(this.array.length)])]);
}return this;
});

Clazz.newMeth(C$, 'begin$J', function (size) {
if (size != this.array.length) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("Begin size %d is not equal to fixed size %d", [new Long(size), new Integer(this.array.length)])]);
}this.curSize=0;
});

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (i) {
if (this.curSize < this.array.length) {
this.array[this.curSize++]=i;
} else {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("Accept exceeded fixed size of %d", [new Integer(this.array.length)])]);
}});

Clazz.newMeth(C$, 'end$', function () {
if (this.curSize < this.array.length) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("End size %d is less than fixed size %d", [new Integer(this.curSize), new Integer(this.array.length)])]);
}});

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("IntFixedNodeBuilder[%d][%s]", [new Integer(this.array.length - this.curSize), $I$(3).toString$IA(this.array)]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "LongFixedNodeBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.LongArrayNode'], [['java.util.stream.Node','java.util.stream.Node.Builder','java.util.stream.Node.Builder.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J', function (size) {
C$.superclazz.c$$J.apply(this, [size]);
C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return size < 2147483639});
}, 1);

Clazz.newMeth(C$, 'build$', function () {
if (this.curSize < this.array.length) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("Current size %d is less than fixed size %d", [new Integer(this.curSize), new Integer(this.array.length)])]);
}return this;
});

Clazz.newMeth(C$, 'begin$J', function (size) {
if (size != this.array.length) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("Begin size %d is not equal to fixed size %d", [new Long(size), new Integer(this.array.length)])]);
}this.curSize=0;
});

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (i) {
if (this.curSize < this.array.length) {
this.array[this.curSize++]=i;
} else {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("Accept exceeded fixed size of %d", [new Integer(this.array.length)])]);
}});

Clazz.newMeth(C$, 'end$', function () {
if (this.curSize < this.array.length) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("End size %d is less than fixed size %d", [new Integer(this.curSize), new Integer(this.array.length)])]);
}});

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("LongFixedNodeBuilder[%d][%s]", [new Integer(this.array.length - this.curSize), $I$(3).toString$JA(this.array)]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "DoubleFixedNodeBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.DoubleArrayNode'], [['java.util.stream.Node','java.util.stream.Node.Builder','java.util.stream.Node.Builder.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J', function (size) {
C$.superclazz.c$$J.apply(this, [size]);
C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return size < 2147483639});
}, 1);

Clazz.newMeth(C$, 'build$', function () {
if (this.curSize < this.array.length) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("Current size %d is less than fixed size %d", [new Integer(this.curSize), new Integer(this.array.length)])]);
}return this;
});

Clazz.newMeth(C$, 'begin$J', function (size) {
if (size != this.array.length) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("Begin size %d is not equal to fixed size %d", [new Long(size), new Integer(this.array.length)])]);
}this.curSize=0;
});

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (i) {
if (this.curSize < this.array.length) {
this.array[this.curSize++]=i;
} else {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("Accept exceeded fixed size of %d", [new Integer(this.array.length)])]);
}});

Clazz.newMeth(C$, 'end$', function () {
if (this.curSize < this.array.length) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("End size %d is less than fixed size %d", [new Integer(this.curSize), new Integer(this.array.length)])]);
}});

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("DoubleFixedNodeBuilder[%d][%s]", [new Integer(this.array.length - this.curSize), $I$(3).toString$DA(this.array)]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "IntSpinedNodeBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SpinedBuffer','.OfInt'], [['java.util.stream.Node','java.util.stream.Node.OfInt'], ['java.util.stream.Node','java.util.stream.Node.Builder','java.util.stream.Node.Builder.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.building=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.building=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
return C$.superclazz.prototype.spliterator$.apply(this, []);
});

Clazz.newMeth(C$, ['forEach$java_util_function_IntConsumer','forEach$TT_CONS'], function (consumer) {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
C$.superclazz.prototype.forEach$TT_CONS.apply(this, [consumer]);
});

Clazz.newMeth(C$, 'begin$J', function (size) {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "was already building"});
this.building=true;
this.clear$();
this.ensureCapacity$J(size);
});

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (i) {
Clazz.assert(C$, this, function(){return this.building}, function(){return "not building"});
C$.superclazz.prototype.accept$I.apply(this, [i]);
});

Clazz.newMeth(C$, 'end$', function () {
Clazz.assert(C$, this, function(){return this.building}, function(){return "was not building"});
this.building=false;
});

Clazz.newMeth(C$, ['copyInto$IA$I','copyInto$TT_ARR$I'], function (array, offset) {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
C$.superclazz.prototype.copyInto$TT_ARR$I.apply(this, [array, offset]);
});

Clazz.newMeth(C$, 'asPrimitiveArray$', function () {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
return C$.superclazz.prototype.asPrimitiveArray$.apply(this, []);
});

Clazz.newMeth(C$, 'build$', function () {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
return this;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "LongSpinedNodeBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SpinedBuffer','.OfLong'], [['java.util.stream.Node','java.util.stream.Node.OfLong'], ['java.util.stream.Node','java.util.stream.Node.Builder','java.util.stream.Node.Builder.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.building=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.building=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
return C$.superclazz.prototype.spliterator$.apply(this, []);
});

Clazz.newMeth(C$, ['forEach$java_util_function_LongConsumer','forEach$TT_CONS'], function (consumer) {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
C$.superclazz.prototype.forEach$TT_CONS.apply(this, [consumer]);
});

Clazz.newMeth(C$, 'begin$J', function (size) {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "was already building"});
this.building=true;
this.clear$();
this.ensureCapacity$J(size);
});

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (i) {
Clazz.assert(C$, this, function(){return this.building}, function(){return "not building"});
C$.superclazz.prototype.accept$J.apply(this, [i]);
});

Clazz.newMeth(C$, 'end$', function () {
Clazz.assert(C$, this, function(){return this.building}, function(){return "was not building"});
this.building=false;
});

Clazz.newMeth(C$, ['copyInto$JA$I','copyInto$TT_ARR$I'], function (array, offset) {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
C$.superclazz.prototype.copyInto$TT_ARR$I.apply(this, [array, offset]);
});

Clazz.newMeth(C$, 'asPrimitiveArray$', function () {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
return C$.superclazz.prototype.asPrimitiveArray$.apply(this, []);
});

Clazz.newMeth(C$, 'build$', function () {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
return this;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "DoubleSpinedNodeBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SpinedBuffer','.OfDouble'], [['java.util.stream.Node','java.util.stream.Node.OfDouble'], ['java.util.stream.Node','java.util.stream.Node.Builder','java.util.stream.Node.Builder.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.building=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.building=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
return C$.superclazz.prototype.spliterator$.apply(this, []);
});

Clazz.newMeth(C$, ['forEach$java_util_function_DoubleConsumer','forEach$TT_CONS'], function (consumer) {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
C$.superclazz.prototype.forEach$TT_CONS.apply(this, [consumer]);
});

Clazz.newMeth(C$, 'begin$J', function (size) {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "was already building"});
this.building=true;
this.clear$();
this.ensureCapacity$J(size);
});

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (i) {
Clazz.assert(C$, this, function(){return this.building}, function(){return "not building"});
C$.superclazz.prototype.accept$D.apply(this, [i]);
});

Clazz.newMeth(C$, 'end$', function () {
Clazz.assert(C$, this, function(){return this.building}, function(){return "was not building"});
this.building=false;
});

Clazz.newMeth(C$, ['copyInto$DA$I','copyInto$TT_ARR$I'], function (array, offset) {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
C$.superclazz.prototype.copyInto$TT_ARR$I.apply(this, [array, offset]);
});

Clazz.newMeth(C$, 'asPrimitiveArray$', function () {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
return C$.superclazz.prototype.asPrimitiveArray$.apply(this, []);
});

Clazz.newMeth(C$, 'build$', function () {
Clazz.assert(C$, this, function(){return !this.building}, function(){return "during building"});
return this;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "SizedCollectorTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.CountedCompleter', 'java.util.stream.Sink');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.spliterator=null;
this.helper=null;
this.targetSize=0;
this.offset=0;
this.length=0;
this.index=0;
this.fence=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$java_util_stream_PipelineHelper$I', function (spliterator, helper, arrayLength) {
Clazz.super_(C$, this,1);
Clazz.assert(C$, this, function(){return spliterator.hasCharacteristics$I(16384)});
this.spliterator=spliterator;
this.helper=helper;
this.targetSize=$I$(10).suggestTargetSize$J(spliterator.estimateSize$());
this.offset=0;
this.length=arrayLength;
}, 1);

Clazz.newMeth(C$, ['c$$TK$java_util_Spliterator$J$J$I'], function (parent, spliterator, offset, length, arrayLength) {
C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this, [parent]);
C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return spliterator.hasCharacteristics$I(16384)});
this.spliterator=spliterator;
this.helper=parent.helper;
this.targetSize=parent.targetSize;
this.offset=offset;
this.length=length;
if (offset < 0 || length < 0  || (offset + length - 1 >= arrayLength) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[String.format$S$OA("offset and length interval [%d, %d + %d) is not within array size interval [0, %d)", [new Long(offset), new Long(offset), new Long(length), new Integer(arrayLength)])]);
}}, 1);

Clazz.newMeth(C$, 'compute$', function () {
var task=this;
var rightSplit=this.spliterator;
var leftSplit;
while (rightSplit.estimateSize$() > task.targetSize && (leftSplit=rightSplit.trySplit$()) != null  ){
task.setPendingCount$I(1);
var leftSplitSize=leftSplit.estimateSize$();
task.makeChild$java_util_Spliterator$J$J(leftSplit, task.offset, leftSplitSize).fork$();
task=task.makeChild$java_util_Spliterator$J$J(rightSplit, task.offset + leftSplitSize, task.length - leftSplitSize);
}
Clazz.assert(C$, this, function(){return task.offset + task.length < 2147483639});
var sink=task;
task.helper.wrapAndCopyInto$TS$java_util_Spliterator(sink, rightSplit);
task.propagateCompletion$();
});

Clazz.newMeth(C$, 'begin$J', function (size) {
if (size > this.length) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["size passed to Sink.begin exceeds array length"]);
this.index=(this.offset|0);
this.fence=this.index + (this.length|0);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){var C$=Clazz.newClass(P$.Nodes.SizedCollectorTask, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.SizedCollectorTask'], 'java.util.stream.Sink');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$java_util_stream_PipelineHelper$TP_OUTA', function (spliterator, helper, array) {
C$.superclazz.c$$java_util_Spliterator$java_util_stream_PipelineHelper$I.apply(this, [spliterator, helper, array.length]);
C$.$init$.apply(this);
this.array=array;
}, 1);

Clazz.newMeth(C$, ['c$$java_util_stream_Nodes_SizedCollectorTask_OfRef$java_util_Spliterator$J$J'], function (parent, spliterator, offset, length) {
C$.superclazz.c$$TK$java_util_Spliterator$J$J$I.apply(this, [parent, spliterator, offset, length, parent.array.length]);
C$.$init$.apply(this);
this.array=parent.array;
}, 1);

Clazz.newMeth(C$, ['makeChild$java_util_Spliterator$J$J'], function (spliterator, offset, size) {
return Clazz.new_(C$.c$$java_util_stream_Nodes_SizedCollectorTask_OfRef$java_util_Spliterator$J$J,[this, spliterator, offset, size]);
});

Clazz.newMeth(C$, ['accept$TP_OUT','accept$','accept$TT'], function (value) {
if (this.index >= this.fence) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Integer.toString$I(this.index)]);
}this.array[this.index++]=value;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.SizedCollectorTask, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.SizedCollectorTask'], [['java.util.stream.Sink','java.util.stream.Sink.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$java_util_stream_PipelineHelper$IA', function (spliterator, helper, array) {
C$.superclazz.c$$java_util_Spliterator$java_util_stream_PipelineHelper$I.apply(this, [spliterator, helper, array.length]);
C$.$init$.apply(this);
this.array=array;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Nodes_SizedCollectorTask_OfInt$java_util_Spliterator$J$J', function (parent, spliterator, offset, length) {
C$.superclazz.c$$TK$java_util_Spliterator$J$J$I.apply(this, [parent, spliterator, offset, length, parent.array.length]);
C$.$init$.apply(this);
this.array=parent.array;
}, 1);

Clazz.newMeth(C$, 'makeChild$java_util_Spliterator$J$J', function (spliterator, offset, size) {
return Clazz.new_(C$.c$$java_util_stream_Nodes_SizedCollectorTask_OfInt$java_util_Spliterator$J$J,[this, spliterator, offset, size]);
});

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (value) {
if (this.index >= this.fence) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Integer.toString$I(this.index)]);
}this.array[this.index++]=value;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.SizedCollectorTask, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.SizedCollectorTask'], [['java.util.stream.Sink','java.util.stream.Sink.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$java_util_stream_PipelineHelper$JA', function (spliterator, helper, array) {
C$.superclazz.c$$java_util_Spliterator$java_util_stream_PipelineHelper$I.apply(this, [spliterator, helper, array.length]);
C$.$init$.apply(this);
this.array=array;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Nodes_SizedCollectorTask_OfLong$java_util_Spliterator$J$J', function (parent, spliterator, offset, length) {
C$.superclazz.c$$TK$java_util_Spliterator$J$J$I.apply(this, [parent, spliterator, offset, length, parent.array.length]);
C$.$init$.apply(this);
this.array=parent.array;
}, 1);

Clazz.newMeth(C$, 'makeChild$java_util_Spliterator$J$J', function (spliterator, offset, size) {
return Clazz.new_(C$.c$$java_util_stream_Nodes_SizedCollectorTask_OfLong$java_util_Spliterator$J$J,[this, spliterator, offset, size]);
});

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (value) {
if (this.index >= this.fence) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Integer.toString$I(this.index)]);
}this.array[this.index++]=value;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.SizedCollectorTask, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.SizedCollectorTask'], [['java.util.stream.Sink','java.util.stream.Sink.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$java_util_stream_PipelineHelper$DA', function (spliterator, helper, array) {
C$.superclazz.c$$java_util_Spliterator$java_util_stream_PipelineHelper$I.apply(this, [spliterator, helper, array.length]);
C$.$init$.apply(this);
this.array=array;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Nodes_SizedCollectorTask_OfDouble$java_util_Spliterator$J$J', function (parent, spliterator, offset, length) {
C$.superclazz.c$$TK$java_util_Spliterator$J$J$I.apply(this, [parent, spliterator, offset, length, parent.array.length]);
C$.$init$.apply(this);
this.array=parent.array;
}, 1);

Clazz.newMeth(C$, 'makeChild$java_util_Spliterator$J$J', function (spliterator, offset, size) {
return Clazz.new_(C$.c$$java_util_stream_Nodes_SizedCollectorTask_OfDouble$java_util_Spliterator$J$J,[this, spliterator, offset, size]);
});

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (value) {
if (this.index >= this.fence) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Integer.toString$I(this.index)]);
}this.array[this.index++]=value;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "ToArrayTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.CountedCompleter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.node=null;
this.offset=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TT_NODE$I'], function (node, offset) {
Clazz.super_(C$, this,1);
this.node=node;
this.offset=offset;
}, 1);

Clazz.newMeth(C$, ['c$$TK$TT_NODE$I'], function (parent, node, offset) {
C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this, [parent]);
C$.$init$.apply(this);
this.node=node;
this.offset=offset;
}, 1);

Clazz.newMeth(C$, 'compute$', function () {
var task=this;
while (true){
if (task.node.getChildCount$() == 0) {
task.copyNodeToArray$();
task.propagateCompletion$();
return;
} else {
task.setPendingCount$I(task.node.getChildCount$() - 1);
var size=0;
var i=0;
for (; i < task.node.getChildCount$() - 1; i++) {
var leftTask=task.makeChild$I$I(i, task.offset + size);
size+=leftTask.node.count$();
leftTask.fork$();
}
task=task.makeChild$I$I(i, task.offset + size);
}}
});
;
(function(){var C$=Clazz.newClass(P$.Nodes.ToArrayTask, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.ToArrayTask']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Node$TTA$I', function (node, array, offset) {
C$.superclazz.c$$TT_NODE$I.apply(this, [node, offset]);
C$.$init$.apply(this);
this.array=array;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Nodes_ToArrayTask_OfRef$java_util_stream_Node$I', function (parent, node, offset) {
C$.superclazz.c$$TK$TT_NODE$I.apply(this, [parent, node, offset]);
C$.$init$.apply(this);
this.array=parent.array;
}, 1);

Clazz.newMeth(C$, 'makeChild$I$I', function (childIndex, offset) {
return Clazz.new_(C$.c$$java_util_stream_Nodes_ToArrayTask_OfRef$java_util_stream_Node$I,[this, this.node.getChild$I(childIndex), offset]);
});

Clazz.newMeth(C$, 'copyNodeToArray$', function () {
this.node.copyInto$TTA$I(this.array, this.offset);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.ToArrayTask, "OfPrimitive", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.ToArrayTask']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TT_NODE$TT_ARR$I','c$null'], function (node, array, offset) {
C$.superclazz.c$$TT_NODE$I.apply(this, [node, offset]);
C$.$init$.apply(this);
this.array=array;
}, 1);

Clazz.newMeth(C$, ['c$$java_util_stream_Nodes_ToArrayTask_OfPrimitive$TT_NODE$I','c$null'], function (parent, node, offset) {
C$.superclazz.c$$TK$TT_NODE$I.apply(this, [parent, node, offset]);
C$.$init$.apply(this);
this.array=parent.array;
}, 1);

Clazz.newMeth(C$, ['makeChild$I$I'], function (childIndex, offset) {
return Clazz.new_(C$.c$$java_util_stream_Nodes_ToArrayTask_OfPrimitive$TT_NODE$I,[this, this.node.getChild$I(childIndex), offset]);
});

Clazz.newMeth(C$, 'copyNodeToArray$', function () {
this.node.copyInto$TT_ARR$I(this.array, this.offset);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.ToArrayTask, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.ToArrayTask','.OfPrimitive']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Node_OfInt$IA$I', function (node, array, offset) {
C$.superclazz.c$$TT_NODE$TT_ARR$I.apply(this, [node, array, offset]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.ToArrayTask, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.ToArrayTask','.OfPrimitive']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Node_OfLong$JA$I', function (node, array, offset) {
C$.superclazz.c$$TT_NODE$TT_ARR$I.apply(this, [node, array, offset]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.ToArrayTask, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.ToArrayTask','.OfPrimitive']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Node_OfDouble$DA$I', function (node, array, offset) {
C$.superclazz.c$$TT_NODE$TT_ARR$I.apply(this, [node, array, offset]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes, "CollectorTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.AbstractTask');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$helper=null;
this.builderFactory=null;
this.concFactory=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_LongFunction$java_util_function_BinaryOperator', function (helper, spliterator, builderFactory, concFactory) {
C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator.apply(this, [helper, spliterator]);
C$.$init$.apply(this);
this.$helper=helper;
this.builderFactory=builderFactory;
this.concFactory=concFactory;
}, 1);

Clazz.newMeth(C$, ['c$$java_util_stream_Nodes_CollectorTask$java_util_Spliterator'], function (parent, spliterator) {
C$.superclazz.c$$TK$java_util_Spliterator.apply(this, [parent, spliterator]);
C$.$init$.apply(this);
this.$helper=parent.$helper;
this.builderFactory=parent.builderFactory;
this.concFactory=parent.concFactory;
}, 1);

Clazz.newMeth(C$, ['makeChild$java_util_Spliterator'], function (spliterator) {
return Clazz.new_(C$.c$$java_util_stream_Nodes_CollectorTask$java_util_Spliterator,[this, spliterator]);
});

Clazz.newMeth(C$, 'doLeaf$', function () {
var builder=this.builderFactory.apply$(this.$helper.exactOutputSizeIfKnown$java_util_Spliterator(this.spliterator));
return this.$helper.wrapAndCopyInto$TS$java_util_Spliterator(builder, this.spliterator).build$();
});

Clazz.newMeth(C$, 'onCompletion$java_util_concurrent_CountedCompleter', function ($caller) {
if (!this.isLeaf$()) this.setLocalResult$TR(this.concFactory.apply$(this.leftChild.getLocalResult$(), this.rightChild.getLocalResult$()));
C$.superclazz.prototype.onCompletion$java_util_concurrent_CountedCompleter.apply(this, [$caller]);
});
;
(function(){var C$=Clazz.newClass(P$.Nodes.CollectorTask, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.CollectorTask']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_function_IntFunction$java_util_Spliterator', function (helper, generator, spliterator) {
C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_LongFunction$java_util_function_BinaryOperator.apply(this, [helper, spliterator, ((P$.Nodes$CollectorTask$OfRef$lambda1||
(function(){var C$=Clazz.newClass(P$, "Nodes$CollectorTask$OfRef$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (s) { return (P$.Nodes.builder$J$java_util_function_IntFunction(s, this.$finals$.generator));});
})()
), Clazz.new_(P$.Nodes$CollectorTask$OfRef$lambda1.$init$, [this, {generator: generator}])), ((P$.Nodes$CollectorTask$OfRef$lambda2||
(function(){var C$=Clazz.newClass(P$, "Nodes$CollectorTask$OfRef$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, ['apply$'], function (t,u) { return Clazz.new_($I$(11).c$$java_util_stream_Node$java_util_stream_Node,[t,u])});
})()
), Clazz.new_(P$.Nodes$CollectorTask$OfRef$lambda2.$init$, [this, null]))]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.CollectorTask, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.CollectorTask']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_Spliterator', function (helper, spliterator) {
C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_LongFunction$java_util_function_BinaryOperator.apply(this, [helper, spliterator, (function($class$){((P$.Nodes$CollectorTask$OfInt$lambda1||
(function(){var C$=Clazz.newClass(P$, "Nodes$CollectorTask$OfInt$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return $class$.intBuilder$J.apply(null,[t])});
})()
)); return Clazz.new_(P$.Nodes$CollectorTask$OfInt$lambda1.$init$, [this, null])})($I$(2)), ((P$.Nodes$CollectorTask$OfInt$lambda2||
(function(){var C$=Clazz.newClass(P$, "Nodes$CollectorTask$OfInt$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, ['apply$'], function (t,u) { return Clazz.new_($I$(12).c$$java_util_stream_Node_OfInt$java_util_stream_Node_OfInt,[t,u])});
})()
), Clazz.new_(P$.Nodes$CollectorTask$OfInt$lambda2.$init$, [this, null]))]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.CollectorTask, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.CollectorTask']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_Spliterator', function (helper, spliterator) {
C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_LongFunction$java_util_function_BinaryOperator.apply(this, [helper, spliterator, (function($class$){((P$.Nodes$CollectorTask$OfLong$lambda1||
(function(){var C$=Clazz.newClass(P$, "Nodes$CollectorTask$OfLong$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return $class$.longBuilder$J.apply(null,[t])});
})()
)); return Clazz.new_(P$.Nodes$CollectorTask$OfLong$lambda1.$init$, [this, null])})($I$(2)), ((P$.Nodes$CollectorTask$OfLong$lambda2||
(function(){var C$=Clazz.newClass(P$, "Nodes$CollectorTask$OfLong$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, ['apply$'], function (t,u) { return Clazz.new_($I$(13).c$$java_util_stream_Node_OfLong$java_util_stream_Node_OfLong,[t,u])});
})()
), Clazz.new_(P$.Nodes$CollectorTask$OfLong$lambda2.$init$, [this, null]))]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Nodes.CollectorTask, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Nodes','.CollectorTask']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_Spliterator', function (helper, spliterator) {
C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_LongFunction$java_util_function_BinaryOperator.apply(this, [helper, spliterator, (function($class$){((P$.Nodes$CollectorTask$OfDouble$lambda1||
(function(){var C$=Clazz.newClass(P$, "Nodes$CollectorTask$OfDouble$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return $class$.doubleBuilder$J.apply(null,[t])});
})()
)); return Clazz.new_(P$.Nodes$CollectorTask$OfDouble$lambda1.$init$, [this, null])})($I$(2)), ((P$.Nodes$CollectorTask$OfDouble$lambda2||
(function(){var C$=Clazz.newClass(P$, "Nodes$CollectorTask$OfDouble$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, ['apply$'], function (t,u) { return Clazz.new_($I$(14).c$$java_util_stream_Node_OfDouble$java_util_stream_Node_OfDouble,[t,u])});
})()
), Clazz.new_(P$.Nodes$CollectorTask$OfDouble$lambda2.$init$, [this, null]))]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:57 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
