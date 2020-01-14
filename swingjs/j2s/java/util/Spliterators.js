(function(){var P$=java.util,I$=[[0,'java.util.Objects',['java.util.Spliterators','.AbstractSpliterator','.HoldingConsumer'],['java.util.Spliterators','.ArraySpliterator'],['java.util.Spliterators','.AbstractIntSpliterator','.HoldingIntConsumer'],['java.util.Spliterators','.IntArraySpliterator'],['java.util.Spliterators','.AbstractLongSpliterator','.HoldingLongConsumer'],['java.util.Spliterators','.LongArraySpliterator'],['java.util.Spliterators','.AbstractDoubleSpliterator','.HoldingDoubleConsumer'],['java.util.Spliterators','.DoubleArraySpliterator'],['java.util.Spliterators','.EmptySpliterator','.OfRef'],['java.util.Spliterators','.EmptySpliterator','.OfInt'],['java.util.Spliterators','.EmptySpliterator','.OfLong'],['java.util.Spliterators','.EmptySpliterator','.OfDouble'],['java.util.Spliterators','.IteratorSpliterator'],['java.util.Spliterators','.IntIteratorSpliterator'],['java.util.Spliterators','.LongIteratorSpliterator'],['java.util.Spliterators','.DoubleIteratorSpliterator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Spliterators", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.EMPTY_SPLITERATOR=null;
C$.EMPTY_INT_SPLITERATOR=null;
C$.EMPTY_LONG_SPLITERATOR=null;
C$.EMPTY_DOUBLE_SPLITERATOR=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.EMPTY_SPLITERATOR=Clazz.new_($I$(10));
C$.EMPTY_INT_SPLITERATOR=Clazz.new_($I$(11));
C$.EMPTY_LONG_SPLITERATOR=Clazz.new_($I$(12));
C$.EMPTY_DOUBLE_SPLITERATOR=Clazz.new_($I$(13));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'emptySpliterator$', function () {
return C$.EMPTY_SPLITERATOR;
}, 1);

Clazz.newMeth(C$, 'emptyIntSpliterator$', function () {
return C$.EMPTY_INT_SPLITERATOR;
}, 1);

Clazz.newMeth(C$, 'emptyLongSpliterator$', function () {
return C$.EMPTY_LONG_SPLITERATOR;
}, 1);

Clazz.newMeth(C$, 'emptyDoubleSpliterator$', function () {
return C$.EMPTY_DOUBLE_SPLITERATOR;
}, 1);

Clazz.newMeth(C$, 'spliterator$OA$I', function (array, additionalCharacteristics) {
return Clazz.new_($I$(3).c$$OA$I,[$I$(1).requireNonNull$TT(array), additionalCharacteristics]);
}, 1);

Clazz.newMeth(C$, 'spliterator$OA$I$I$I', function (array, fromIndex, toIndex, additionalCharacteristics) {
C$.checkFromToBounds$I$I$I($I$(1).requireNonNull$TT(array).length, fromIndex, toIndex);
return Clazz.new_($I$(3).c$$OA$I$I$I,[array, fromIndex, toIndex, additionalCharacteristics]);
}, 1);

Clazz.newMeth(C$, 'spliterator$IA$I', function (array, additionalCharacteristics) {
return Clazz.new_($I$(5).c$$IA$I,[$I$(1).requireNonNull$TT(array), additionalCharacteristics]);
}, 1);

Clazz.newMeth(C$, 'spliterator$IA$I$I$I', function (array, fromIndex, toIndex, additionalCharacteristics) {
C$.checkFromToBounds$I$I$I($I$(1).requireNonNull$TT(array).length, fromIndex, toIndex);
return Clazz.new_($I$(5).c$$IA$I$I$I,[array, fromIndex, toIndex, additionalCharacteristics]);
}, 1);

Clazz.newMeth(C$, 'spliterator$JA$I', function (array, additionalCharacteristics) {
return Clazz.new_($I$(7).c$$JA$I,[$I$(1).requireNonNull$TT(array), additionalCharacteristics]);
}, 1);

Clazz.newMeth(C$, 'spliterator$JA$I$I$I', function (array, fromIndex, toIndex, additionalCharacteristics) {
C$.checkFromToBounds$I$I$I($I$(1).requireNonNull$TT(array).length, fromIndex, toIndex);
return Clazz.new_($I$(7).c$$JA$I$I$I,[array, fromIndex, toIndex, additionalCharacteristics]);
}, 1);

Clazz.newMeth(C$, 'spliterator$DA$I', function (array, additionalCharacteristics) {
return Clazz.new_($I$(9).c$$DA$I,[$I$(1).requireNonNull$TT(array), additionalCharacteristics]);
}, 1);

Clazz.newMeth(C$, 'spliterator$DA$I$I$I', function (array, fromIndex, toIndex, additionalCharacteristics) {
C$.checkFromToBounds$I$I$I($I$(1).requireNonNull$TT(array).length, fromIndex, toIndex);
return Clazz.new_($I$(9).c$$DA$I$I$I,[array, fromIndex, toIndex, additionalCharacteristics]);
}, 1);

Clazz.newMeth(C$, 'checkFromToBounds$I$I$I', function (arrayLength, origin, fence) {
if (origin > fence) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["origin(" + origin + ") > fence(" + fence + ")" ]);
}if (origin < 0) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[origin]);
}if (fence > arrayLength) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[fence]);
}}, 1);

Clazz.newMeth(C$, 'spliterator$java_util_Collection$I', function (c, characteristics) {
return Clazz.new_($I$(14).c$$java_util_Collection$I,[$I$(1).requireNonNull$TT(c), characteristics]);
}, 1);

Clazz.newMeth(C$, 'spliterator$java_util_Iterator$J$I', function (iterator, size, characteristics) {
return Clazz.new_($I$(14).c$$java_util_Iterator$J$I,[$I$(1).requireNonNull$TT(iterator), size, characteristics]);
}, 1);

Clazz.newMeth(C$, 'spliteratorUnknownSize$java_util_Iterator$I', function (iterator, characteristics) {
return Clazz.new_($I$(14).c$$java_util_Iterator$I,[$I$(1).requireNonNull$TT(iterator), characteristics]);
}, 1);

Clazz.newMeth(C$, 'spliterator$java_util_PrimitiveIterator_OfInt$J$I', function (iterator, size, characteristics) {
return Clazz.new_($I$(15).c$$java_util_PrimitiveIterator_OfInt$J$I,[$I$(1).requireNonNull$TT(iterator), size, characteristics]);
}, 1);

Clazz.newMeth(C$, 'spliteratorUnknownSize$java_util_PrimitiveIterator_OfInt$I', function (iterator, characteristics) {
return Clazz.new_($I$(15).c$$java_util_PrimitiveIterator_OfInt$I,[$I$(1).requireNonNull$TT(iterator), characteristics]);
}, 1);

Clazz.newMeth(C$, 'spliterator$java_util_PrimitiveIterator_OfLong$J$I', function (iterator, size, characteristics) {
return Clazz.new_($I$(16).c$$java_util_PrimitiveIterator_OfLong$J$I,[$I$(1).requireNonNull$TT(iterator), size, characteristics]);
}, 1);

Clazz.newMeth(C$, 'spliteratorUnknownSize$java_util_PrimitiveIterator_OfLong$I', function (iterator, characteristics) {
return Clazz.new_($I$(16).c$$java_util_PrimitiveIterator_OfLong$I,[$I$(1).requireNonNull$TT(iterator), characteristics]);
}, 1);

Clazz.newMeth(C$, 'spliterator$java_util_PrimitiveIterator_OfDouble$J$I', function (iterator, size, characteristics) {
return Clazz.new_($I$(17).c$$java_util_PrimitiveIterator_OfDouble$J$I,[$I$(1).requireNonNull$TT(iterator), size, characteristics]);
}, 1);

Clazz.newMeth(C$, 'spliteratorUnknownSize$java_util_PrimitiveIterator_OfDouble$I', function (iterator, characteristics) {
return Clazz.new_($I$(17).c$$java_util_PrimitiveIterator_OfDouble$I,[$I$(1).requireNonNull$TT(iterator), characteristics]);
}, 1);

Clazz.newMeth(C$, 'iterator$java_util_Spliterator', function (spliterator) {
$I$(1).requireNonNull$TT(spliterator);
return Clazz.new_(P$.Spliterators$1Adapter.$init$, [this, {spliterator: spliterator}]);
}, 1);

Clazz.newMeth(C$, 'iterator$java_util_Spliterator_OfInt', function (spliterator) {
$I$(1).requireNonNull$TT(spliterator);
return Clazz.new_(P$.Spliterators$2Adapter.$init$, [this, {spliterator: spliterator}]);
}, 1);

Clazz.newMeth(C$, 'iterator$java_util_Spliterator_OfLong', function (spliterator) {
$I$(1).requireNonNull$TT(spliterator);
return Clazz.new_(P$.Spliterators$3Adapter.$init$, [this, {spliterator: spliterator}]);
}, 1);

Clazz.newMeth(C$, 'iterator$java_util_Spliterator_OfDouble', function (spliterator) {
$I$(1).requireNonNull$TT(spliterator);
return Clazz.new_(P$.Spliterators$4Adapter.$init$, [this, {spliterator: spliterator}]);
}, 1);
;
(function(){var C$=Clazz.newClass(P$, "Spliterators$1Adapter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.util.Iterator', 'java.util.function.Consumer'], 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.valueReady=false;
this.nextElement=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.valueReady=false;
}, 1);

Clazz.newMeth(C$, ['accept$TT','accept$'], function (t) {
this.valueReady=true;
this.nextElement=t;
});

Clazz.newMeth(C$, 'hasNext$', function () {
if (!this.valueReady) this.$finals$.spliterator.tryAdvance$java_util_function_Consumer(this);
return this.valueReady;
});

Clazz.newMeth(C$, 'next$', function () {
if (!this.valueReady && !this.hasNext$() ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
 else {
this.valueReady=false;
return this.nextElement;
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$, "Spliterators$2Adapter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.PrimitiveIterator','java.util.PrimitiveIterator.OfInt'], 'java.util.function.IntConsumer'], 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.valueReady=false;
this.nextElement=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.valueReady=false;
}, 1);

Clazz.newMeth(C$, ['accept$I','accept$'], function (t) {
this.valueReady=true;
this.nextElement=t;
});

Clazz.newMeth(C$, 'hasNext$', function () {
if (!this.valueReady) this.$finals$.spliterator.tryAdvance$java_util_function_IntConsumer(this);
return this.valueReady;
});

Clazz.newMeth(C$, 'nextInt$', function () {
if (!this.valueReady && !this.hasNext$() ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
 else {
this.valueReady=false;
return this.nextElement;
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$, "Spliterators$3Adapter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.PrimitiveIterator','java.util.PrimitiveIterator.OfLong'], 'java.util.function.LongConsumer'], 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.valueReady=false;
this.nextElement=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.valueReady=false;
}, 1);

Clazz.newMeth(C$, ['accept$J','accept$'], function (t) {
this.valueReady=true;
this.nextElement=t;
});

Clazz.newMeth(C$, 'hasNext$', function () {
if (!this.valueReady) this.$finals$.spliterator.tryAdvance$java_util_function_LongConsumer(this);
return this.valueReady;
});

Clazz.newMeth(C$, 'nextLong$', function () {
if (!this.valueReady && !this.hasNext$() ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
 else {
this.valueReady=false;
return this.nextElement;
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$, "Spliterators$4Adapter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.PrimitiveIterator','java.util.PrimitiveIterator.OfDouble'], 'java.util.function.DoubleConsumer'], 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.valueReady=false;
this.nextElement=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.valueReady=false;
}, 1);

Clazz.newMeth(C$, ['accept$D','accept$'], function (t) {
this.valueReady=true;
this.nextElement=t;
});

Clazz.newMeth(C$, 'hasNext$', function () {
if (!this.valueReady) this.$finals$.spliterator.tryAdvance$java_util_function_DoubleConsumer(this);
return this.valueReady;
});

Clazz.newMeth(C$, 'nextDouble$', function () {
if (!this.valueReady && !this.hasNext$() ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
 else {
this.valueReady=false;
return this.nextElement;
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators, "EmptySpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
return null;
});

Clazz.newMeth(C$, 'tryAdvance$TC', function (consumer) {
$I$(1).requireNonNull$TT(consumer);
return false;
});

Clazz.newMeth(C$, 'forEachRemaining$TC', function (consumer) {
$I$(1).requireNonNull$TT(consumer);
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return 0;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return 16448;
});
;
(function(){var C$=Clazz.newClass(P$.Spliterators.EmptySpliterator, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Spliterators','.EmptySpliterator'], 'java.util.Spliterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators.EmptySpliterator, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Spliterators','.EmptySpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators.EmptySpliterator, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Spliterators','.EmptySpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators.EmptySpliterator, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.Spliterators','.EmptySpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);
})()
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators, "ArraySpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
this.index=0;
this.fence=0;
this.characteristics=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$OA$I', function (array, additionalCharacteristics) {
C$.c$$OA$I$I$I.apply(this, [array, 0, array.length, additionalCharacteristics]);
}, 1);

Clazz.newMeth(C$, 'c$$OA$I$I$I', function (array, origin, fence, additionalCharacteristics) {
C$.$init$.apply(this);
this.array=array;
this.index=origin;
this.fence=fence;
this.characteristics=additionalCharacteristics | 64 | 16384 ;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var lo=this.index;
var mid=(lo + this.fence) >>> 1;
return (lo >= mid) ? null : Clazz.new_(C$.c$$OA$I$I$I,[this.array, lo, this.index=mid, this.characteristics]);
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (action) {
var a;
var i;
var hi;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if ((a=this.array).length >= (hi=this.fence) && (i=this.index) >= 0  && i < (this.index=hi) ) {
do {
action.accept$(a[i]);
} while (++i < hi);
}});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer', function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.index >= 0 && this.index < this.fence ) {
var e=this.array[this.index++];
action.accept$(e);
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return (this.fence - this.index);
});

Clazz.newMeth(C$, 'characteristics$', function () {
return this.characteristics;
});

Clazz.newMeth(C$, 'getComparator$', function () {
if (this.hasCharacteristics$I(4)) return null;
throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators, "IntArraySpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
this.index=0;
this.fence=0;
this.characteristics=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$IA$I', function (array, additionalCharacteristics) {
C$.c$$IA$I$I$I.apply(this, [array, 0, array.length, additionalCharacteristics]);
}, 1);

Clazz.newMeth(C$, 'c$$IA$I$I$I', function (array, origin, fence, additionalCharacteristics) {
C$.$init$.apply(this);
this.array=array;
this.index=origin;
this.fence=fence;
this.characteristics=additionalCharacteristics | 64 | 16384 ;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var lo=this.index;
var mid=(lo + this.fence) >>> 1;
return (lo >= mid) ? null : Clazz.new_(C$.c$$IA$I$I$I,[this.array, lo, this.index=mid, this.characteristics]);
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$TT_CONS'], function (action) {
var a;
var i;
var hi;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if ((a=this.array).length >= (hi=this.fence) && (i=this.index) >= 0  && i < (this.index=hi) ) {
do {
action.accept$(a[i]);
} while (++i < hi);
}});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_IntConsumer','tryAdvance$TT_CONS'], function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.index >= 0 && this.index < this.fence ) {
action.accept$(this.array[this.index++]);
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return (this.fence - this.index);
});

Clazz.newMeth(C$, 'characteristics$', function () {
return this.characteristics;
});

Clazz.newMeth(C$, 'getComparator$', function () {
if (this.hasCharacteristics$I(4)) return null;
throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators, "LongArraySpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
this.index=0;
this.fence=0;
this.characteristics=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$JA$I', function (array, additionalCharacteristics) {
C$.c$$JA$I$I$I.apply(this, [array, 0, array.length, additionalCharacteristics]);
}, 1);

Clazz.newMeth(C$, 'c$$JA$I$I$I', function (array, origin, fence, additionalCharacteristics) {
C$.$init$.apply(this);
this.array=array;
this.index=origin;
this.fence=fence;
this.characteristics=additionalCharacteristics | 64 | 16384 ;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var lo=this.index;
var mid=(lo + this.fence) >>> 1;
return (lo >= mid) ? null : Clazz.new_(C$.c$$JA$I$I$I,[this.array, lo, this.index=mid, this.characteristics]);
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_LongConsumer','forEachRemaining$TT_CONS'], function (action) {
var a;
var i;
var hi;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if ((a=this.array).length >= (hi=this.fence) && (i=this.index) >= 0  && i < (this.index=hi) ) {
do {
action.accept$(a[i]);
} while (++i < hi);
}});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_LongConsumer','tryAdvance$TT_CONS'], function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.index >= 0 && this.index < this.fence ) {
action.accept$(this.array[this.index++]);
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return (this.fence - this.index);
});

Clazz.newMeth(C$, 'characteristics$', function () {
return this.characteristics;
});

Clazz.newMeth(C$, 'getComparator$', function () {
if (this.hasCharacteristics$I(4)) return null;
throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators, "DoubleArraySpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
this.index=0;
this.fence=0;
this.characteristics=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$DA$I', function (array, additionalCharacteristics) {
C$.c$$DA$I$I$I.apply(this, [array, 0, array.length, additionalCharacteristics]);
}, 1);

Clazz.newMeth(C$, 'c$$DA$I$I$I', function (array, origin, fence, additionalCharacteristics) {
C$.$init$.apply(this);
this.array=array;
this.index=origin;
this.fence=fence;
this.characteristics=additionalCharacteristics | 64 | 16384 ;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var lo=this.index;
var mid=(lo + this.fence) >>> 1;
return (lo >= mid) ? null : Clazz.new_(C$.c$$DA$I$I$I,[this.array, lo, this.index=mid, this.characteristics]);
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_DoubleConsumer','forEachRemaining$TT_CONS'], function (action) {
var a;
var i;
var hi;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if ((a=this.array).length >= (hi=this.fence) && (i=this.index) >= 0  && i < (this.index=hi) ) {
do {
action.accept$(a[i]);
} while (++i < hi);
}});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_DoubleConsumer','tryAdvance$TT_CONS'], function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.index >= 0 && this.index < this.fence ) {
action.accept$(this.array[this.index++]);
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return (this.fence - this.index);
});

Clazz.newMeth(C$, 'characteristics$', function () {
return this.characteristics;
});

Clazz.newMeth(C$, 'getComparator$', function () {
if (this.hasCharacteristics$I(4)) return null;
throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators, "AbstractSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.characteristics=0;
this.est=0;
this.batch=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J$I', function (est, additionalCharacteristics) {
C$.$init$.apply(this);
this.est=est;
this.characteristics=((additionalCharacteristics & 64) != 0) ? additionalCharacteristics | 16384 : additionalCharacteristics;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var holder=Clazz.new_($I$(2));
var s=this.est;
if (s > 1 && this.tryAdvance$java_util_function_Consumer(holder) ) {
var n=this.batch + 1024;
if (n > s) n=(s|0);
if (n > 33554432) n=33554432;
var a=Clazz.array(java.lang.Object, [n]);
var j=0;
do {
a[j]=holder.value;
} while (++j < n && this.tryAdvance$java_util_function_Consumer(holder) );
this.batch=j;
if (this.est != 9223372036854775807) this.est-=j;
return Clazz.new_($I$(3).c$$OA$I$I$I,[a, 0, j, this.characteristics$()]);
}return null;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return this.est;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return this.characteristics;
});
;
(function(){var C$=Clazz.newClass(P$.Spliterators.AbstractSpliterator, "HoldingConsumer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.function.Consumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$TT','accept$'], function (value) {
this.value=value;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators, "AbstractIntSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.characteristics=0;
this.est=0;
this.batch=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J$I', function (est, additionalCharacteristics) {
C$.$init$.apply(this);
this.est=est;
this.characteristics=((additionalCharacteristics & 64) != 0) ? additionalCharacteristics | 16384 : additionalCharacteristics;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var holder=Clazz.new_($I$(4));
var s=this.est;
if (s > 1 && this.tryAdvance$java_util_function_IntConsumer(holder) ) {
var n=this.batch + 1024;
if (n > s) n=(s|0);
if (n > 33554432) n=33554432;
var a=Clazz.array(Integer.TYPE, [n]);
var j=0;
do {
a[j]=holder.value;
} while (++j < n && this.tryAdvance$java_util_function_IntConsumer(holder) );
this.batch=j;
if (this.est != 9223372036854775807) this.est-=j;
return Clazz.new_($I$(5).c$$IA$I$I$I,[a, 0, j, this.characteristics$()]);
}return null;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return this.est;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return this.characteristics;
});
;
(function(){var C$=Clazz.newClass(P$.Spliterators.AbstractIntSpliterator, "HoldingIntConsumer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.function.IntConsumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$I','accept$'], function (value) {
this.value=value;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators, "AbstractLongSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.characteristics=0;
this.est=0;
this.batch=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J$I', function (est, additionalCharacteristics) {
C$.$init$.apply(this);
this.est=est;
this.characteristics=((additionalCharacteristics & 64) != 0) ? additionalCharacteristics | 16384 : additionalCharacteristics;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var holder=Clazz.new_($I$(6));
var s=this.est;
if (s > 1 && this.tryAdvance$java_util_function_LongConsumer(holder) ) {
var n=this.batch + 1024;
if (n > s) n=(s|0);
if (n > 33554432) n=33554432;
var a=Clazz.array(Long.TYPE, [n]);
var j=0;
do {
a[j]=holder.value;
} while (++j < n && this.tryAdvance$java_util_function_LongConsumer(holder) );
this.batch=j;
if (this.est != 9223372036854775807) this.est-=j;
return Clazz.new_($I$(7).c$$JA$I$I$I,[a, 0, j, this.characteristics$()]);
}return null;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return this.est;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return this.characteristics;
});
;
(function(){var C$=Clazz.newClass(P$.Spliterators.AbstractLongSpliterator, "HoldingLongConsumer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.function.LongConsumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$J','accept$'], function (value) {
this.value=value;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators, "AbstractDoubleSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.characteristics=0;
this.est=0;
this.batch=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J$I', function (est, additionalCharacteristics) {
C$.$init$.apply(this);
this.est=est;
this.characteristics=((additionalCharacteristics & 64) != 0) ? additionalCharacteristics | 16384 : additionalCharacteristics;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var holder=Clazz.new_($I$(8));
var s=this.est;
if (s > 1 && this.tryAdvance$java_util_function_DoubleConsumer(holder) ) {
var n=this.batch + 1024;
if (n > s) n=(s|0);
if (n > 33554432) n=33554432;
var a=Clazz.array(Double.TYPE, [n]);
var j=0;
do {
a[j]=holder.value;
} while (++j < n && this.tryAdvance$java_util_function_DoubleConsumer(holder) );
this.batch=j;
if (this.est != 9223372036854775807) this.est-=j;
return Clazz.new_($I$(9).c$$DA$I$I$I,[a, 0, j, this.characteristics$()]);
}return null;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return this.est;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return this.characteristics;
});
;
(function(){var C$=Clazz.newClass(P$.Spliterators.AbstractDoubleSpliterator, "HoldingDoubleConsumer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.function.DoubleConsumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$D','accept$'], function (value) {
this.value=value;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators, "IteratorSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.collection=null;
this.it=null;
this.characteristics=0;
this.est=0;
this.batch=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection$I', function (collection, characteristics) {
C$.$init$.apply(this);
this.collection=collection;
this.it=null;
this.characteristics=(characteristics & 4096) == 0 ? characteristics | 64 | 16384  : characteristics;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Iterator$J$I', function (iterator, size, characteristics) {
C$.$init$.apply(this);
this.collection=null;
this.it=iterator;
this.est=size;
this.characteristics=(characteristics & 4096) == 0 ? characteristics | 64 | 16384  : characteristics;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Iterator$I', function (iterator, characteristics) {
C$.$init$.apply(this);
this.collection=null;
this.it=iterator;
this.est=9223372036854775807;
this.characteristics=characteristics & ~(16448);
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var i;
var s;
if ((i=this.it) == null ) {
i=this.it=this.collection.iterator$();
s=this.est=this.collection.size$();
} else s=this.est;
if (s > 1 && i.hasNext$() ) {
var n=this.batch + 1024;
if (n > s) n=(s|0);
if (n > 33554432) n=33554432;
var a=Clazz.array(java.lang.Object, [n]);
var j=0;
do {
a[j]=i.next$();
} while (++j < n && i.hasNext$() );
this.batch=j;
if (this.est != 9223372036854775807) this.est-=j;
return Clazz.new_($I$(3).c$$OA$I$I$I,[a, 0, j, this.characteristics]);
}return null;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i;
if ((i=this.it) == null ) {
i=this.it=this.collection.iterator$();
this.est=this.collection.size$();
}i.forEachRemaining$java_util_function_Consumer(action);
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer', function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.it == null ) {
this.it=this.collection.iterator$();
this.est=this.collection.size$();
}if (this.it.hasNext$()) {
action.accept$(this.it.next$());
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
if (this.it == null ) {
this.it=this.collection.iterator$();
return this.est=this.collection.size$();
}return this.est;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return this.characteristics;
});

Clazz.newMeth(C$, 'getComparator$', function () {
if (this.hasCharacteristics$I(4)) return null;
throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators, "IntIteratorSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.it=null;
this.characteristics=0;
this.est=0;
this.batch=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_PrimitiveIterator_OfInt$J$I', function (iterator, size, characteristics) {
C$.$init$.apply(this);
this.it=iterator;
this.est=size;
this.characteristics=(characteristics & 4096) == 0 ? characteristics | 64 | 16384  : characteristics;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_PrimitiveIterator_OfInt$I', function (iterator, characteristics) {
C$.$init$.apply(this);
this.it=iterator;
this.est=9223372036854775807;
this.characteristics=characteristics & ~(16448);
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var i=this.it;
var s=this.est;
if (s > 1 && i.hasNext$() ) {
var n=this.batch + 1024;
if (n > s) n=(s|0);
if (n > 33554432) n=33554432;
var a=Clazz.array(Integer.TYPE, [n]);
var j=0;
do {
a[j]=i.nextInt$();
} while (++j < n && i.hasNext$() );
this.batch=j;
if (this.est != 9223372036854775807) this.est-=j;
return Clazz.new_($I$(5).c$$IA$I$I$I,[a, 0, j, this.characteristics]);
}return null;
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$TT_CONS'], function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.it.forEachRemaining$java_util_function_IntConsumer(action);
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_IntConsumer','tryAdvance$TT_CONS'], function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.it.hasNext$()) {
action.accept$(this.it.nextInt$());
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return this.est;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return this.characteristics;
});

Clazz.newMeth(C$, 'getComparator$', function () {
if (this.hasCharacteristics$I(4)) return null;
throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators, "LongIteratorSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.it=null;
this.characteristics=0;
this.est=0;
this.batch=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_PrimitiveIterator_OfLong$J$I', function (iterator, size, characteristics) {
C$.$init$.apply(this);
this.it=iterator;
this.est=size;
this.characteristics=(characteristics & 4096) == 0 ? characteristics | 64 | 16384  : characteristics;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_PrimitiveIterator_OfLong$I', function (iterator, characteristics) {
C$.$init$.apply(this);
this.it=iterator;
this.est=9223372036854775807;
this.characteristics=characteristics & ~(16448);
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var i=this.it;
var s=this.est;
if (s > 1 && i.hasNext$() ) {
var n=this.batch + 1024;
if (n > s) n=(s|0);
if (n > 33554432) n=33554432;
var a=Clazz.array(Long.TYPE, [n]);
var j=0;
do {
a[j]=i.nextLong$();
} while (++j < n && i.hasNext$() );
this.batch=j;
if (this.est != 9223372036854775807) this.est-=j;
return Clazz.new_($I$(7).c$$JA$I$I$I,[a, 0, j, this.characteristics]);
}return null;
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_LongConsumer','forEachRemaining$TT_CONS'], function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.it.forEachRemaining$java_util_function_LongConsumer(action);
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_LongConsumer','tryAdvance$TT_CONS'], function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.it.hasNext$()) {
action.accept$(this.it.nextLong$());
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return this.est;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return this.characteristics;
});

Clazz.newMeth(C$, 'getComparator$', function () {
if (this.hasCharacteristics$I(4)) return null;
throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Spliterators, "DoubleIteratorSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.it=null;
this.characteristics=0;
this.est=0;
this.batch=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_PrimitiveIterator_OfDouble$J$I', function (iterator, size, characteristics) {
C$.$init$.apply(this);
this.it=iterator;
this.est=size;
this.characteristics=(characteristics & 4096) == 0 ? characteristics | 64 | 16384  : characteristics;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_PrimitiveIterator_OfDouble$I', function (iterator, characteristics) {
C$.$init$.apply(this);
this.it=iterator;
this.est=9223372036854775807;
this.characteristics=characteristics & ~(16448);
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var i=this.it;
var s=this.est;
if (s > 1 && i.hasNext$() ) {
var n=this.batch + 1024;
if (n > s) n=(s|0);
if (n > 33554432) n=33554432;
var a=Clazz.array(Double.TYPE, [n]);
var j=0;
do {
a[j]=i.nextDouble$();
} while (++j < n && i.hasNext$() );
this.batch=j;
if (this.est != 9223372036854775807) this.est-=j;
return Clazz.new_($I$(9).c$$DA$I$I$I,[a, 0, j, this.characteristics]);
}return null;
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_DoubleConsumer','forEachRemaining$TT_CONS'], function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.it.forEachRemaining$java_util_function_DoubleConsumer(action);
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_DoubleConsumer','tryAdvance$TT_CONS'], function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.it.hasNext$()) {
action.accept$(this.it.nextDouble$());
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return this.est;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return this.characteristics;
});

Clazz.newMeth(C$, 'getComparator$', function () {
if (this.hasCharacteristics$I(4)) return null;
throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:49 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
