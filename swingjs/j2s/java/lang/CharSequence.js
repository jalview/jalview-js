(function(){var P$=java.lang,I$=[[0,'java.util.stream.StreamSupport','java.util.Spliterators']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "CharSequence");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'chars$', function () {
return $I$(1).intStream$java_util_function_Supplier$I$Z(((P$.rSequence$lambda1||
(function(){var C$=Clazz.newClass(P$, "rSequence$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return ($I$(2).spliterator$java_util_PrimitiveIterator_OfInt$J$I(Clazz.new_(CharSequence$1CharIterator.$init$, [this, null]), this.b$['CharSequence'].length$.apply(this.b$['CharSequence'], []), 16));});
})()
), Clazz.new_(CharSequence$lambda1.$init$, [this, null])), 16464, false);
});

Clazz.newMeth(C$, 'codePoints$', function () {
return $I$(1).intStream$java_util_function_Supplier$I$Z(((P$.rSequence$lambda2||
(function(){var C$=Clazz.newClass(P$, "rSequence$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return ($I$(2).spliteratorUnknownSize$java_util_PrimitiveIterator_OfInt$I(Clazz.new_(CharSequence$1CodePointIterator.$init$, [this, null]), 16));});
})()
), Clazz.new_(CharSequence$lambda2.$init$, [this, null])), 16, false);
});
};;
(function(){var C$=Clazz.newClass(P$, "CharSequence$1CharIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.PrimitiveIterator','java.util.PrimitiveIterator.OfInt']], 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cur=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.cur=0;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.cur < this.this$0.length$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'nextInt$', function () {
if (this.hasNext$()) {
return this.this$0.charAt$I.apply(this.this$0, [this.cur++]).$c();
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$TT_CONS'], function (block) {
for (; this.cur < this.this$0.length$.apply(this.this$0, []); this.cur++) {
block.accept$(this.this$0.charAt$I.apply(this.this$0, [this.cur]).$c());
}
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$, "CharSequence$1CodePointIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.PrimitiveIterator','java.util.PrimitiveIterator.OfInt']], 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cur=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.cur=0;
}, 1);

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$TT_CONS'], function (block) {
var length=this.this$0.length$.apply(this.this$0, []);
var i=this.cur;
try {
while (i < length){
var c1=this.this$0.charAt$I.apply(this.this$0, [i++]);
if (!Character.isHighSurrogate$C(c1) || i >= length ) {
block.accept$(c1.$c());
} else {
var c2=this.this$0.charAt$I.apply(this.this$0, [i]);
if (Character.isLowSurrogate$C(c2)) {
i++;
block.accept$(Character.toCodePoint$C$C(c1, c2));
} else {
block.accept$(c1.$c());
}}}
} finally {
this.cur=i;
}
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.cur < this.this$0.length$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'nextInt$', function () {
var length=this.this$0.length$.apply(this.this$0, []);
if (this.cur >= length) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}var c1=this.this$0.charAt$I.apply(this.this$0, [this.cur++]);
if (Character.isHighSurrogate$C(c1) && this.cur < length ) {
var c2=this.this$0.charAt$I.apply(this.this$0, [this.cur]);
if (Character.isLowSurrogate$C(c2)) {
this.cur++;
return Character.toCodePoint$C$C(c1, c2);
}}return c1.$c();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
