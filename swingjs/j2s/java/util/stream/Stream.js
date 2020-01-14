(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,['java.util.stream.Streams','.StreamBuilderImpl'],'java.util.stream.StreamSupport','java.util.Spliterators','java.util.Arrays','java.util.Objects','java.util.stream.Streams',['java.util.stream.StreamSpliterators','.InfiniteSupplyingSpliterator','.OfRef'],['java.util.stream.Streams','.ConcatSpliterator','.OfRef']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "Stream", function(){
}, null, 'java.util.stream.BaseStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, 'builder$', function () {
return Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'empty$', function () {
return $I$(2).stream$java_util_Spliterator$Z($I$(3).emptySpliterator$(), false);
}, 1);

Clazz.newMeth(C$, ['of$TT'], function (t) {
return $I$(2).stream$java_util_Spliterator$Z(Clazz.new_($I$(1).c$$TT,[t]), false);
}, 1);

Clazz.newMeth(C$, ['of$TTA','ofnull'], function (values) {
return $I$(4).stream$TTA(values);
}, 1);

Clazz.newMeth(C$, ['iterate$TT$java_util_function_UnaryOperator'], function (seed, f) {
$I$(5).requireNonNull$TT(f);
var iterator=((P$.Stream$1||
(function(){var C$=Clazz.newClass(P$, "Stream$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.t=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.t=$I$(6).NONE;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return true;
});

Clazz.newMeth(C$, 'next$', function () {
return this.t=(this.t === $I$(6).NONE ) ? this.$finals$.seed : this.$finals$.f.apply$(this.t);
});
})()
), Clazz.new_(P$.Stream$1.$init$, [this, {seed: seed, f: f}]));
return $I$(2).stream$java_util_Spliterator$Z($I$(3).spliteratorUnknownSize$java_util_Iterator$I(iterator, 1040), false);
}, 1);

Clazz.newMeth(C$, 'generate$java_util_function_Supplier', function (s) {
$I$(5).requireNonNull$TT(s);
return $I$(2).stream$java_util_Spliterator$Z(Clazz.new_($I$(7).c$$J$java_util_function_Supplier,[9223372036854775807, s]), false);
}, 1);

Clazz.newMeth(C$, 'concat$java_util_stream_Stream$java_util_stream_Stream', function (a, b) {
$I$(5).requireNonNull$TT(a);
$I$(5).requireNonNull$TT(b);
var split=Clazz.new_($I$(8).c$$java_util_Spliterator$java_util_Spliterator,[a.spliterator$(), b.spliterator$()]);
var stream=$I$(2).stream$java_util_Spliterator$Z(split, a.isParallel$() || b.isParallel$() );
return stream.onClose$Runnable($I$(6).composedClose$java_util_stream_BaseStream$java_util_stream_BaseStream(a, b));
}, 1);
;
(function(){var C$=Clazz.newInterface(P$.Stream, "Builder", function(){
}, null, 'java.util.function.Consumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['add$TT'], function (t) {
this.accept$TT(t);
return this;
});
};})()
;
(function(){var C$=Clazz.newInterface(P$.Stream, "Builder", function(){
}, null, 'java.util.function.Consumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['add$TT'], function (t) {
this.accept$TT(t);
return this;
});
};})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
