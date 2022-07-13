(function(){var P$=java.lang,I$=[[0,'java.util.stream.StreamSupport','java.util.Spliterators']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "CharSequence");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'chars$',  function () {
return $I$(1,"intStream$java_util_function_Supplier$I$Z",[((P$.CharSequence$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "CharSequence$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return ($I$(2,"spliterator$java_util_PrimitiveIterator_OfInt$J$I",[Clazz.new_(CharSequence$1CharIterator.$init$,[this, null]), this.b$['CharSequence'].length$.apply(this.b$['CharSequence'], []), 16]));});
})()
), Clazz.new_(CharSequence$lambda1.$init$,[this, null])), 16464, false]);
});

Clazz.newMeth(C$, 'codePoints$',  function () {
return $I$(1,"intStream$java_util_function_Supplier$I$Z",[(CharSequence$lambda2$||(CharSequence$lambda2$=(((P$.CharSequence$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "CharSequence$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return ($I$(2,"spliteratorUnknownSize$java_util_PrimitiveIterator_OfInt$I",[Clazz.new_(CharSequence$1CodePointIterator.$init$,[this, null]), 16]));});
})()
), Clazz.new_(CharSequence$lambda2.$init$,[this, null]))))), 16, false]);
});
};;
(function(){/*l*/var C$=Clazz.newClass(P$, "CharSequence$1CharIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.PrimitiveIterator','java.util.PrimitiveIterator.OfInt']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cur=0;
},1);

C$.$fields$=[['I',['cur']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.cur < this.b$['CharSequence'].length$.apply(this.b$['CharSequence'], []);
});

Clazz.newMeth(C$, 'nextInt$',  function () {
if (this.hasNext$()) {
return this.b$['CharSequence'].charAt$I.apply(this.b$['CharSequence'], [this.cur++]).$c();
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$O'],  function (block) {
for (; this.cur < this.b$['CharSequence'].length$.apply(this.b$['CharSequence'], []); this.cur++) {
block.accept$I(this.b$['CharSequence'].charAt$I.apply(this.b$['CharSequence'], [this.cur]).$c());
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "CharSequence$1CodePointIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.PrimitiveIterator','java.util.PrimitiveIterator.OfInt']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cur=0;
},1);

C$.$fields$=[['I',['cur']]]

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$O'],  function (block) {
var length=this.b$['CharSequence'].length$.apply(this.b$['CharSequence'], []);
var i=this.cur;
try {
while (i < length){
var c1=this.b$['CharSequence'].charAt$I.apply(this.b$['CharSequence'], [i++]);
if (!Character.isHighSurrogate$C(c1) || i >= length ) {
block.accept$I(c1.$c());
} else {
var c2=this.b$['CharSequence'].charAt$I.apply(this.b$['CharSequence'], [i]);
if (Character.isLowSurrogate$C(c2)) {
++i;
block.accept$I(Character.toCodePoint$C$C(c1, c2));
} else {
block.accept$I(c1.$c());
}}}
} finally {
this.cur=i;
}
});

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.cur < this.b$['CharSequence'].length$.apply(this.b$['CharSequence'], []);
});

Clazz.newMeth(C$, 'nextInt$',  function () {
var length=this.b$['CharSequence'].length$.apply(this.b$['CharSequence'], []);
if (this.cur >= length) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}var c1=this.b$['CharSequence'].charAt$I.apply(this.b$['CharSequence'], [this.cur++]);
if (Character.isHighSurrogate$C(c1) && this.cur < length ) {
var c2=this.b$['CharSequence'].charAt$I.apply(this.b$['CharSequence'], [this.cur]);
if (Character.isLowSurrogate$C(c2)) {
++this.cur;
return Character.toCodePoint$C$C(c1, c2);
}}return c1.$c();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:08:57 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
