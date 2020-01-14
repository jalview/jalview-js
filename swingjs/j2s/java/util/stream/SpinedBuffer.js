(function(){var P$=Clazz.newPackage("java.util.stream"),p$1={},p$2={},I$=[[0,'java.util.Objects','java.util.Arrays','java.util.stream.Tripwire','java.util.Spliterators',['java.util.stream.SpinedBuffer','.OfPrimitive','.BaseSpliterator'],'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SpinedBuffer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.stream.AbstractSpinedBuffer', ['java.util.function.Consumer', 'Iterable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.curChunk=null;
this.spine=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
C$.superclazz.c$$I.apply(this, [initialCapacity]);
C$.$init$.apply(this);
this.curChunk=Clazz.array(java.lang.Object, [1 << this.initialChunkPower]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.curChunk=Clazz.array(java.lang.Object, [1 << this.initialChunkPower]);
}, 1);

Clazz.newMeth(C$, 'capacity$', function () {
return (this.spineIndex == 0) ? this.curChunk.length : this.priorElementCount[this.spineIndex] + this.spine[this.spineIndex].length;
});

Clazz.newMeth(C$, 'inflateSpine', function () {
if (this.spine == null ) {
this.spine=Clazz.array(java.lang.Object, [8, null]);
this.priorElementCount=Clazz.array(Long.TYPE, [8]);
this.spine[0]=this.curChunk;
}}, p$2);

Clazz.newMeth(C$, 'ensureCapacity$J', function (targetSize) {
var capacity=this.capacity$();
if (targetSize > capacity) {
p$2.inflateSpine.apply(this, []);
for (var i=this.spineIndex + 1; targetSize > capacity; i++) {
if (i >= this.spine.length) {
var newSpineSize=this.spine.length * 2;
this.spine=$I$(2).copyOf$TTA$I(this.spine, newSpineSize);
this.priorElementCount=$I$(2).copyOf$JA$I(this.priorElementCount, newSpineSize);
}var nextChunkSize=this.chunkSize$I(i);
this.spine[i]=Clazz.array(java.lang.Object, [nextChunkSize]);
this.priorElementCount[i]=this.priorElementCount[i - 1] + this.spine[i - 1].length;
capacity+=nextChunkSize;
}
}});

Clazz.newMeth(C$, 'increaseCapacity$', function () {
this.ensureCapacity$J(this.capacity$() + 1);
});

Clazz.newMeth(C$, 'get$J', function (index) {
if (this.spineIndex == 0) {
if (index < this.elementIndex) return this.curChunk[((index|0))];
 else throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Long.toString$J(index)]);
}if (index >= this.count$()) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Long.toString$J(index)]);
for (var j=0; j <= this.spineIndex; j++) if (index < this.priorElementCount[j] + this.spine[j].length) return this.spine[j][(((index - this.priorElementCount[j])|0))];

throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Long.toString$J(index)]);
});

Clazz.newMeth(C$, 'copyInto$TEA$I', function (array, offset) {
var finalOffset=offset + this.count$();
if (finalOffset > array.length || finalOffset < offset ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["does not fit"]);
}if (this.spineIndex == 0) System.arraycopy$O$I$O$I$I(this.curChunk, 0, array, offset, this.elementIndex);
 else {
for (var i=0; i < this.spineIndex; i++) {
System.arraycopy$O$I$O$I$I(this.spine[i], 0, array, offset, this.spine[i].length);
offset+=this.spine[i].length;
}
if (this.elementIndex > 0) System.arraycopy$O$I$O$I$I(this.curChunk, 0, array, offset, this.elementIndex);
}});

Clazz.newMeth(C$, 'asArray$java_util_function_IntFunction', function (arrayFactory) {
var size=this.count$();
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var result=arrayFactory.apply$((size|0));
this.copyInto$TEA$I(result, 0);
return result;
});

Clazz.newMeth(C$, 'clear$', function () {
if (this.spine != null ) {
this.curChunk=this.spine[0];
for (var i=0; i < this.curChunk.length; i++) this.curChunk[i]=null;

this.spine=null;
this.priorElementCount=null;
} else {
for (var i=0; i < this.elementIndex; i++) this.curChunk[i]=null;

}this.elementIndex=0;
this.spineIndex=0;
});

Clazz.newMeth(C$, 'iterator$', function () {
return $I$(4).iterator$java_util_Spliterator(this.spliterator$());
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (consumer) {
for (var j=0; j < this.spineIndex; j++) for (var t, $t = 0, $$t = this.spine[j]; $t<$$t.length&&((t=($$t[$t])),1);$t++) consumer.accept$(t);


for (var i=0; i < this.elementIndex; i++) consumer.accept$(this.curChunk[i]);

});

Clazz.newMeth(C$, ['accept$TE','accept$','accept$TT'], function (e) {
if (this.elementIndex == this.curChunk.length) {
p$2.inflateSpine.apply(this, []);
if (this.spineIndex + 1 >= this.spine.length || this.spine[this.spineIndex + 1] == null  ) this.increaseCapacity$();
this.elementIndex=0;
++this.spineIndex;
this.curChunk=this.spine[this.spineIndex];
}this.curChunk[this.elementIndex++]=e;
});

Clazz.newMeth(C$, 'toString', function () {
var list=Clazz.new_($I$(6));
this.forEach$java_util_function_Consumer((function($class$){((P$.SpinedBuffer$lambda1||
(function(){var C$=Clazz.newClass(P$, "SpinedBuffer$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$'], function (t) { return $class$.add$TE.apply($class$,[t])});
})()
)); return Clazz.new_(P$.SpinedBuffer$lambda1.$init$, [this, null])})(list));
return "SpinedBuffer:" + list.toString();
});

Clazz.newMeth(C$, 'spliterator$', function () {
return Clazz.new_(P$.SpinedBuffer$1Splitr.$init$, [this, null]);
});
;
(function(){var C$=Clazz.newClass(P$, "SpinedBuffer$1Splitr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Spliterator', 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.splSpineIndex=0;
this.lastSpineIndex=0;
this.splElementIndex=0;
this.lastSpineElementFence=0;
this.splChunk=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
C$.$init$.apply(this);
this.splSpineIndex=firstSpineIndex;
this.lastSpineIndex=lastSpineIndex;
this.splElementIndex=firstSpineElementIndex;
this.lastSpineElementFence=lastSpineElementFence;
Clazz.assert(C$, this, function(){return this.this$0.spine != null  || firstSpineIndex == 0 && lastSpineIndex == 0  });
this.splChunk=(this.this$0.spine == null ) ? this.this$0.curChunk : this.this$0.spine[firstSpineIndex];
}, 1);

Clazz.newMeth(C$, 'estimateSize$', function () {
return (this.splSpineIndex == this.lastSpineIndex) ? this.lastSpineElementFence - this.splElementIndex : this.this$0.priorElementCount[this.lastSpineIndex] + this.lastSpineElementFence - this.this$0.priorElementCount[this.splSpineIndex] - this.splElementIndex;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return 16464;
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer', function (consumer) {
$I$(1).requireNonNull$TT(consumer);
if (this.splSpineIndex < this.lastSpineIndex || (this.splSpineIndex == this.lastSpineIndex && this.splElementIndex < this.lastSpineElementFence ) ) {
consumer.accept$(this.splChunk[this.splElementIndex++]);
if (this.splElementIndex == this.splChunk.length) {
this.splElementIndex=0;
++this.splSpineIndex;
if (this.this$0.spine != null  && this.splSpineIndex <= this.lastSpineIndex ) this.splChunk=this.this$0.spine[this.splSpineIndex];
}return true;
}return false;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (consumer) {
$I$(1).requireNonNull$TT(consumer);
if (this.splSpineIndex < this.lastSpineIndex || (this.splSpineIndex == this.lastSpineIndex && this.splElementIndex < this.lastSpineElementFence ) ) {
var i=this.splElementIndex;
for (var sp=this.splSpineIndex; sp < this.lastSpineIndex; sp++) {
var chunk=this.this$0.spine[sp];
for (; i < chunk.length; i++) {
consumer.accept$(chunk[i]);
}
i=0;
}
var chunk=(this.splSpineIndex == this.lastSpineIndex) ? this.splChunk : this.this$0.spine[this.lastSpineIndex];
var hElementIndex=this.lastSpineElementFence;
for (; i < hElementIndex; i++) {
consumer.accept$(chunk[i]);
}
this.splSpineIndex=this.lastSpineIndex;
this.splElementIndex=this.lastSpineElementFence;
}});

Clazz.newMeth(C$, 'trySplit$', function () {
if (this.splSpineIndex < this.lastSpineIndex) {
var ret=Clazz.new_(P$.SpinedBuffer$1Splitr.$init$, [this, null]);
this.splSpineIndex=this.lastSpineIndex;
this.splElementIndex=0;
this.splChunk=this.this$0.spine[this.splSpineIndex];
return ret;
} else if (this.splSpineIndex == this.lastSpineIndex) {
var t=((this.lastSpineElementFence - this.splElementIndex)/2|0);
if (t == 0) return null;
 else {
var ret=$I$(2).spliterator$TTA$I$I(this.splChunk, this.splElementIndex, this.splElementIndex + t);
this.splElementIndex+=t;
return ret;
}} else {
return null;
}});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.SpinedBuffer, "OfPrimitive", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.AbstractSpinedBuffer', 'Iterable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.curChunk=null;
this.spine=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
C$.superclazz.c$$I.apply(this, [initialCapacity]);
C$.$init$.apply(this);
this.curChunk=this.newArray$I(1 << this.initialChunkPower);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.curChunk=this.newArray$I(1 << this.initialChunkPower);
}, 1);

Clazz.newMeth(C$, 'capacity$', function () {
return (this.spineIndex == 0) ? this.arrayLength$TT_ARR(this.curChunk) : this.priorElementCount[this.spineIndex] + this.arrayLength$TT_ARR(this.spine[this.spineIndex]);
});

Clazz.newMeth(C$, 'inflateSpine', function () {
if (this.spine == null ) {
this.spine=this.newArrayArray$I(8);
this.priorElementCount=Clazz.array(Long.TYPE, [8]);
this.spine[0]=this.curChunk;
}}, p$1);

Clazz.newMeth(C$, 'ensureCapacity$J', function (targetSize) {
var capacity=this.capacity$();
if (targetSize > capacity) {
p$1.inflateSpine.apply(this, []);
for (var i=this.spineIndex + 1; targetSize > capacity; i++) {
if (i >= this.spine.length) {
var newSpineSize=this.spine.length * 2;
this.spine=$I$(2).copyOf$TTA$I(this.spine, newSpineSize);
this.priorElementCount=$I$(2).copyOf$JA$I(this.priorElementCount, newSpineSize);
}var nextChunkSize=this.chunkSize$I(i);
this.spine[i]=this.newArray$I(nextChunkSize);
this.priorElementCount[i]=this.priorElementCount[i - 1] + this.arrayLength$TT_ARR(this.spine[i - 1]);
capacity+=nextChunkSize;
}
}});

Clazz.newMeth(C$, 'increaseCapacity$', function () {
this.ensureCapacity$J(this.capacity$() + 1);
});

Clazz.newMeth(C$, 'chunkFor$J', function (index) {
if (this.spineIndex == 0) {
if (index < this.elementIndex) return 0;
 else throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Long.toString$J(index)]);
}if (index >= this.count$()) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Long.toString$J(index)]);
for (var j=0; j <= this.spineIndex; j++) if (index < this.priorElementCount[j] + this.arrayLength$TT_ARR(this.spine[j])) return j;

throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Long.toString$J(index)]);
});

Clazz.newMeth(C$, ['copyInto$TT_ARR$I'], function (array, offset) {
var finalOffset=offset + this.count$();
if (finalOffset > this.arrayLength$TT_ARR(array) || finalOffset < offset ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["does not fit"]);
}if (this.spineIndex == 0) System.arraycopy$O$I$O$I$I(this.curChunk, 0, array, offset, this.elementIndex);
 else {
for (var i=0; i < this.spineIndex; i++) {
System.arraycopy$O$I$O$I$I(this.spine[i], 0, array, offset, this.arrayLength$TT_ARR(this.spine[i]));
offset+=this.arrayLength$TT_ARR(this.spine[i]);
}
if (this.elementIndex > 0) System.arraycopy$O$I$O$I$I(this.curChunk, 0, array, offset, this.elementIndex);
}});

Clazz.newMeth(C$, 'asPrimitiveArray$', function () {
var size=this.count$();
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var result=this.newArray$I((size|0));
this.copyInto$TT_ARR$I(result, 0);
return result;
});

Clazz.newMeth(C$, 'preAccept$', function () {
if (this.elementIndex == this.arrayLength$TT_ARR(this.curChunk)) {
p$1.inflateSpine.apply(this, []);
if (this.spineIndex + 1 >= this.spine.length || this.spine[this.spineIndex + 1] == null  ) this.increaseCapacity$();
this.elementIndex=0;
++this.spineIndex;
this.curChunk=this.spine[this.spineIndex];
}});

Clazz.newMeth(C$, 'clear$', function () {
if (this.spine != null ) {
this.curChunk=this.spine[0];
this.spine=null;
this.priorElementCount=null;
}this.elementIndex=0;
this.spineIndex=0;
});

Clazz.newMeth(C$, ['forEach$TT_CONS'], function (consumer) {
for (var j=0; j < this.spineIndex; j++) this.arrayForEach$TT_ARR$I$I$TT_CONS(this.spine[j], 0, this.arrayLength$TT_ARR(this.spine[j]), consumer);

this.arrayForEach$TT_ARR$I$I$TT_CONS(this.curChunk, 0, this.elementIndex, consumer);
});
;
(function(){var C$=Clazz.newClass(P$.SpinedBuffer.OfPrimitive, "BaseSpliterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfPrimitive']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.splSpineIndex=0;
this.lastSpineIndex=0;
this.splElementIndex=0;
this.lastSpineElementFence=0;
this.splChunk=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
C$.$init$.apply(this);
this.splSpineIndex=firstSpineIndex;
this.lastSpineIndex=lastSpineIndex;
this.splElementIndex=firstSpineElementIndex;
this.lastSpineElementFence=lastSpineElementFence;
Clazz.assert(C$, this, function(){return this.this$0.spine != null  || firstSpineIndex == 0 && lastSpineIndex == 0  });
this.splChunk=(this.this$0.spine == null ) ? this.this$0.curChunk : this.this$0.spine[firstSpineIndex];
}, 1);

Clazz.newMeth(C$, 'estimateSize$', function () {
return (this.splSpineIndex == this.lastSpineIndex) ? this.lastSpineElementFence - this.splElementIndex : this.this$0.priorElementCount[this.lastSpineIndex] + this.lastSpineElementFence - this.this$0.priorElementCount[this.splSpineIndex] - this.splElementIndex;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return 16464;
});

Clazz.newMeth(C$, ['tryAdvance$TT_CONS'], function (consumer) {
$I$(1).requireNonNull$TT(consumer);
if (this.splSpineIndex < this.lastSpineIndex || (this.splSpineIndex == this.lastSpineIndex && this.splElementIndex < this.lastSpineElementFence ) ) {
this.arrayForOne$TT_ARR$I$TT_CONS(this.splChunk, this.splElementIndex++, consumer);
if (this.splElementIndex == this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].arrayLength$TT_ARR.apply(this.b$['java.util.stream.SpinedBuffer.OfPrimitive'], [this.splChunk])) {
this.splElementIndex=0;
++this.splSpineIndex;
if (this.this$0.spine != null  && this.splSpineIndex <= this.lastSpineIndex ) this.splChunk=this.this$0.spine[this.splSpineIndex];
}return true;
}return false;
});

Clazz.newMeth(C$, ['forEachRemaining$TT_CONS'], function (consumer) {
$I$(1).requireNonNull$TT(consumer);
if (this.splSpineIndex < this.lastSpineIndex || (this.splSpineIndex == this.lastSpineIndex && this.splElementIndex < this.lastSpineElementFence ) ) {
var i=this.splElementIndex;
for (var sp=this.splSpineIndex; sp < this.lastSpineIndex; sp++) {
var chunk=this.this$0.spine[sp];
this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].arrayForEach$TT_ARR$I$I$TT_CONS.apply(this.b$['java.util.stream.SpinedBuffer.OfPrimitive'], [chunk, i, this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].arrayLength$TT_ARR.apply(this.b$['java.util.stream.SpinedBuffer.OfPrimitive'], [chunk]), consumer]);
i=0;
}
var chunk=(this.splSpineIndex == this.lastSpineIndex) ? this.splChunk : this.this$0.spine[this.lastSpineIndex];
this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].arrayForEach$TT_ARR$I$I$TT_CONS.apply(this.b$['java.util.stream.SpinedBuffer.OfPrimitive'], [chunk, i, this.lastSpineElementFence, consumer]);
this.splSpineIndex=this.lastSpineIndex;
this.splElementIndex=this.lastSpineElementFence;
}});

Clazz.newMeth(C$, 'trySplit$', function () {
if (this.splSpineIndex < this.lastSpineIndex) {
var ret=this.newSpliterator$I$I$I$I(this.splSpineIndex, this.lastSpineIndex - 1, this.splElementIndex, this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].arrayLength$TT_ARR.apply(this.b$['java.util.stream.SpinedBuffer.OfPrimitive'], [this.this$0.spine[this.lastSpineIndex - 1]]));
this.splSpineIndex=this.lastSpineIndex;
this.splElementIndex=0;
this.splChunk=this.this$0.spine[this.splSpineIndex];
return ret;
} else if (this.splSpineIndex == this.lastSpineIndex) {
var t=((this.lastSpineElementFence - this.splElementIndex)/2|0);
if (t == 0) return null;
 else {
var ret=this.arraySpliterator$TT_ARR$I$I(this.splChunk, this.splElementIndex, t);
this.splElementIndex+=t;
return ret;
}} else {
return null;
}});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
})()
;
(function(){var C$=Clazz.newClass(P$.SpinedBuffer, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SpinedBuffer','.OfPrimitive'], 'java.util.function.IntConsumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
C$.superclazz.c$$I.apply(this, [initialCapacity]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['forEach$java_util_function_Consumer','forEachnull'], function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.IntConsumer")) {
this.forEach$TT_CONS(consumer);
} else {
if (false) $I$(3).trip$Class$S(this.getClass$(), "{0} calling SpinedBuffer.OfInt.forEach(Consumer)");
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, 'newArrayArray$I', function (size) {
return Clazz.array(Integer.TYPE, [size, null]);
});

Clazz.newMeth(C$, 'newArray$I', function (size) {
return Clazz.array(Integer.TYPE, [size]);
});

Clazz.newMeth(C$, ['arrayLength$IA','arrayLength$TT_ARR'], function (array) {
return array.length;
});

Clazz.newMeth(C$, ['arrayForEach$IA$I$I$java_util_function_IntConsumer','arrayForEach$TT_ARR$I$I$TT_CONS'], function (array, from, to, consumer) {
for (var i=from; i < to; i++) consumer.accept$(array[i]);

});

Clazz.newMeth(C$, ['accept$I','accept$'], function (i) {
this.preAccept$();
this.curChunk[this.elementIndex++]=i;
});

Clazz.newMeth(C$, 'get$J', function (index) {
var ch=this.chunkFor$J(index);
if (this.spineIndex == 0 && ch == 0 ) return this.curChunk[(index|0)];
 else return this.spine[ch][((index - this.priorElementCount[ch])|0)];
});

Clazz.newMeth(C$, 'iterator$', function () {
return $I$(4).iterator$java_util_Spliterator_OfInt(this.spliterator$());
});

Clazz.newMeth(C$, 'spliterator$', function () {
return Clazz.new_($I$(5).c$$I$I$I$I, [this, null, 0, this.spineIndex, 0, this.elementIndex],P$.SpinedBuffer$OfInt$1Splitr);
});

Clazz.newMeth(C$, 'toString', function () {
var array=this.asPrimitiveArray$();
if (array.length < 200) {
return String.format$S$OA("%s[length=%d, chunks=%d]%s", [this.getClass$().getSimpleName$(), new Integer(array.length), new Integer(this.spineIndex), $I$(2).toString$IA(array)]);
} else {
var array2=$I$(2).copyOf$IA$I(array, 200);
return String.format$S$OA("%s[length=%d, chunks=%d]%s...", [this.getClass$().getSimpleName$(), new Integer(array.length), new Integer(this.spineIndex), $I$(2).toString$IA(array2)]);
}});
;
(function(){var C$=Clazz.newClass(P$, "SpinedBuffer$OfInt$1Splitr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.SpinedBuffer','.OfPrimitive','.BaseSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfInt']], 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
C$.superclazz.c$$I$I$I$I.apply(this, [firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newSpliterator$I$I$I$I', function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
return Clazz.new_($I$(5).c$$I$I$I$I, [this, null, firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence],C$);
});

Clazz.newMeth(C$, ['arrayForOne$IA$I$java_util_function_IntConsumer'], function (array, index, consumer) {
consumer.accept$(array[index]);
});

Clazz.newMeth(C$, ['arraySpliterator$IA$I$I'], function (array, offset, len) {
return $I$(2).spliterator$IA$I$I(array, offset, offset + len);
});

Clazz.newMeth(C$);
})()
})()
;
(function(){var C$=Clazz.newClass(P$.SpinedBuffer, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SpinedBuffer','.OfPrimitive'], 'java.util.function.LongConsumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
C$.superclazz.c$$I.apply(this, [initialCapacity]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['forEach$java_util_function_Consumer','forEachnull'], function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.LongConsumer")) {
this.forEach$TT_CONS(consumer);
} else {
if (false) $I$(3).trip$Class$S(this.getClass$(), "{0} calling SpinedBuffer.OfLong.forEach(Consumer)");
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, 'newArrayArray$I', function (size) {
return Clazz.array(Long.TYPE, [size, null]);
});

Clazz.newMeth(C$, 'newArray$I', function (size) {
return Clazz.array(Long.TYPE, [size]);
});

Clazz.newMeth(C$, ['arrayLength$JA','arrayLength$TT_ARR'], function (array) {
return array.length;
});

Clazz.newMeth(C$, ['arrayForEach$JA$I$I$java_util_function_LongConsumer','arrayForEach$TT_ARR$I$I$TT_CONS'], function (array, from, to, consumer) {
for (var i=from; i < to; i++) consumer.accept$(array[i]);

});

Clazz.newMeth(C$, ['accept$J','accept$'], function (i) {
this.preAccept$();
this.curChunk[this.elementIndex++]=i;
});

Clazz.newMeth(C$, 'get$J', function (index) {
var ch=this.chunkFor$J(index);
if (this.spineIndex == 0 && ch == 0 ) return this.curChunk[(index|0)];
 else return this.spine[ch][((index - this.priorElementCount[ch])|0)];
});

Clazz.newMeth(C$, 'iterator$', function () {
return $I$(4).iterator$java_util_Spliterator_OfLong(this.spliterator$());
});

Clazz.newMeth(C$, 'spliterator$', function () {
return Clazz.new_($I$(5).c$$I$I$I$I, [this, null, 0, this.spineIndex, 0, this.elementIndex],P$.SpinedBuffer$OfLong$1Splitr);
});

Clazz.newMeth(C$, 'toString', function () {
var array=this.asPrimitiveArray$();
if (array.length < 200) {
return String.format$S$OA("%s[length=%d, chunks=%d]%s", [this.getClass$().getSimpleName$(), new Integer(array.length), new Integer(this.spineIndex), $I$(2).toString$JA(array)]);
} else {
var array2=$I$(2).copyOf$JA$I(array, 200);
return String.format$S$OA("%s[length=%d, chunks=%d]%s...", [this.getClass$().getSimpleName$(), new Integer(array.length), new Integer(this.spineIndex), $I$(2).toString$JA(array2)]);
}});
;
(function(){var C$=Clazz.newClass(P$, "SpinedBuffer$OfLong$1Splitr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.SpinedBuffer','.OfPrimitive','.BaseSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfLong']], 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
C$.superclazz.c$$I$I$I$I.apply(this, [firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newSpliterator$I$I$I$I', function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
return Clazz.new_($I$(5).c$$I$I$I$I, [this, null, firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence],C$);
});

Clazz.newMeth(C$, ['arrayForOne$JA$I$java_util_function_LongConsumer'], function (array, index, consumer) {
consumer.accept$(array[index]);
});

Clazz.newMeth(C$, ['arraySpliterator$JA$I$I'], function (array, offset, len) {
return $I$(2).spliterator$JA$I$I(array, offset, offset + len);
});

Clazz.newMeth(C$);
})()
})()
;
(function(){var C$=Clazz.newClass(P$.SpinedBuffer, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SpinedBuffer','.OfPrimitive'], 'java.util.function.DoubleConsumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
C$.superclazz.c$$I.apply(this, [initialCapacity]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['forEach$java_util_function_Consumer','forEachnull'], function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.DoubleConsumer")) {
this.forEach$TT_CONS(consumer);
} else {
if (false) $I$(3).trip$Class$S(this.getClass$(), "{0} calling SpinedBuffer.OfDouble.forEach(Consumer)");
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, 'newArrayArray$I', function (size) {
return Clazz.array(Double.TYPE, [size, null]);
});

Clazz.newMeth(C$, 'newArray$I', function (size) {
return Clazz.array(Double.TYPE, [size]);
});

Clazz.newMeth(C$, ['arrayLength$DA','arrayLength$TT_ARR'], function (array) {
return array.length;
});

Clazz.newMeth(C$, ['arrayForEach$DA$I$I$java_util_function_DoubleConsumer','arrayForEach$TT_ARR$I$I$TT_CONS'], function (array, from, to, consumer) {
for (var i=from; i < to; i++) consumer.accept$(array[i]);

});

Clazz.newMeth(C$, ['accept$D','accept$'], function (i) {
this.preAccept$();
this.curChunk[this.elementIndex++]=i;
});

Clazz.newMeth(C$, 'get$J', function (index) {
var ch=this.chunkFor$J(index);
if (this.spineIndex == 0 && ch == 0 ) return this.curChunk[(index|0)];
 else return this.spine[ch][((index - this.priorElementCount[ch])|0)];
});

Clazz.newMeth(C$, 'iterator$', function () {
return $I$(4).iterator$java_util_Spliterator_OfDouble(this.spliterator$());
});

Clazz.newMeth(C$, 'spliterator$', function () {
return Clazz.new_($I$(5).c$$I$I$I$I, [this, null, 0, this.spineIndex, 0, this.elementIndex],P$.SpinedBuffer$OfDouble$1Splitr);
});

Clazz.newMeth(C$, 'toString', function () {
var array=this.asPrimitiveArray$();
if (array.length < 200) {
return String.format$S$OA("%s[length=%d, chunks=%d]%s", [this.getClass$().getSimpleName$(), new Integer(array.length), new Integer(this.spineIndex), $I$(2).toString$DA(array)]);
} else {
var array2=$I$(2).copyOf$DA$I(array, 200);
return String.format$S$OA("%s[length=%d, chunks=%d]%s...", [this.getClass$().getSimpleName$(), new Integer(array.length), new Integer(this.spineIndex), $I$(2).toString$DA(array2)]);
}});
;
(function(){var C$=Clazz.newClass(P$, "SpinedBuffer$OfDouble$1Splitr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.SpinedBuffer','.OfPrimitive','.BaseSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfDouble']], 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
C$.superclazz.c$$I$I$I$I.apply(this, [firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newSpliterator$I$I$I$I', function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
return Clazz.new_($I$(5).c$$I$I$I$I, [this, null, firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence],C$);
});

Clazz.newMeth(C$, ['arrayForOne$DA$I$java_util_function_DoubleConsumer'], function (array, index, consumer) {
consumer.accept$(array[index]);
});

Clazz.newMeth(C$, ['arraySpliterator$DA$I$I'], function (array, offset, len) {
return $I$(2).spliterator$DA$I$I(array, offset, offset + len);
});

Clazz.newMeth(C$);
})()
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
