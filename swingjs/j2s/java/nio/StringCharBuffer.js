(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.ByteOrder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StringCharBuffer", null, 'java.nio.CharBuffer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.str=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$CharSequence$I$I', function (s, start, end) {
C$.superclazz.c$$I$I$I$I.apply(this, [-1, start, end, s.length$()]);
C$.$init$.apply(this);
var n=s.length$();
if ((start < 0) || (start > n) || (end < start) || (end > n)  ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
this.str=s;
}, 1);

Clazz.newMeth(C$, 'slice$', function () {
return Clazz.new_(C$.c$$CharSequence$I$I$I$I$I,[this.str, -1, 0, this.remaining$(), this.remaining$(), this.offset + this.position$()]);
});

Clazz.newMeth(C$, 'c$$CharSequence$I$I$I$I$I', function (s, mark, pos, limit, cap, offset) {
C$.superclazz.c$$I$I$I$I$CA$I.apply(this, [mark, pos, limit, cap, null, offset]);
C$.$init$.apply(this);
this.str=s;
}, 1);

Clazz.newMeth(C$, 'duplicate$', function () {
return Clazz.new_(C$.c$$CharSequence$I$I$I$I$I,[this.str, this.markValue$(), this.position$(), this.limit$(), this.capacity$(), this.offset]);
});

Clazz.newMeth(C$, 'asReadOnlyBuffer$', function () {
return this.duplicate$();
});

Clazz.newMeth(C$, 'get$', function () {
return this.str.charAt$I(this.nextGetIndex$() + this.offset);
});

Clazz.newMeth(C$, 'get$I', function (index) {
return this.str.charAt$I(this.checkIndex$I(index) + this.offset);
});

Clazz.newMeth(C$, 'getUnchecked$I', function (index) {
return this.str.charAt$I(index + this.offset);
});

Clazz.newMeth(C$, 'put$C', function (c) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'put$I$C', function (index, c) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'compact$', function () {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'isReadOnly$', function () {
return true;
});

Clazz.newMeth(C$, 'toString$I$I', function (start, end) {
return this.str.toString().substring$I$I(start + this.offset, end + this.offset);
});

Clazz.newMeth(C$, 'subSequence$I$I', function (start, end) {
try {
var pos=this.position$();
return Clazz.new_(C$.c$$CharSequence$I$I$I$I$I,[this.str, -1, pos + this.checkIndex$I$I(start, pos), pos + this.checkIndex$I$I(end, pos), this.capacity$(), this.offset]);
} catch (x) {
if (Clazz.exceptionOf(x,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'isDirect$', function () {
return false;
});

Clazz.newMeth(C$, 'order$', function () {
return $I$(1).nativeOrder$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:38 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
