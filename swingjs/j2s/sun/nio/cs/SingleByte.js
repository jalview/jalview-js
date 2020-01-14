(function(){var P$=Clazz.newPackage("sun.nio.cs"),p$1={},p$2={},I$=[[0,'java.nio.charset.CoderResult',['sun.nio.cs.Surrogate','.Parser']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SingleByte", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'withResult$java_nio_charset_CoderResult$java_nio_Buffer$I$java_nio_Buffer$I', function (cr, src, sp, dst, dp) {
src.position$I(sp - src.arrayOffset$());
dst.position$I(dp - dst.arrayOffset$());
return cr;
}, 1);

Clazz.newMeth(C$, 'initC2B$CA$CA$CA$CA', function (b2c, c2bNR, c2b, c2bIndex) {
for (var i=0; i < c2bIndex.length; i++) c2bIndex[i]=String.fromCharCode(65533);

for (var i=0; i < c2b.length; i++) c2b[i]=String.fromCharCode(65533);

var off=0;
for (var i=0; i < b2c.length; i++) {
var c=b2c[i];
if (c == "\ufffd") continue;
var index=(c.$c() >> 8);
if ((c2bIndex[index]).$c() == 65533 ) {
c2bIndex[index]=String.fromCharCode(off);
off+=256;
}index=(c2bIndex[index]).$c() + (c.$c() & 255);
c2b[index]=String.fromCharCode(((i >= 128) ? (i - 128) : (i + 128)));
}
if (c2bNR != null ) {
var i=0;
while (i < c2bNR.length){
var b=c2bNR[i++];
var c=c2bNR[i++];
var index=(c.$c() >> 8);
if ((c2bIndex[index]).$c() == 65533 ) {
c2bIndex[index]=String.fromCharCode(off);
off+=256;
}index=(c2bIndex[index]).$c() + (c.$c() & 255);
c2b[index]=b;
}
}}, 1);
;
(function(){var C$=Clazz.newClass(P$.SingleByte, "Decoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.charset.CharsetDecoder', 'sun.nio.cs.ArrayDecoder');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.b2c=null;
this.repl='\0';
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.repl="\ufffd";
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$CA', function (cs, b2c) {
C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this, [cs, 1.0, 1.0]);
C$.$init$.apply(this);
this.b2c=b2c;
}, 1);

Clazz.newMeth(C$, 'decodeArrayLoop$java_nio_ByteBuffer$java_nio_CharBuffer', function (src, dst) {
var sa=src.array$();
var sp=src.arrayOffset$() + src.position$();
var sl=src.arrayOffset$() + src.limit$();
var da=dst.array$();
var dp=dst.arrayOffset$() + dst.position$();
var dl=dst.arrayOffset$() + dst.limit$();
var cr=$I$(1).UNDERFLOW;
if ((dl - dp) < (sl - sp)) {
sl=sp + (dl - dp);
cr=$I$(1).OVERFLOW;
}while (sp < sl){
var c=this.decode$I(sa[sp]);
if (c == "\ufffd") {
return P$.SingleByte.withResult$java_nio_charset_CoderResult$java_nio_Buffer$I$java_nio_Buffer$I($I$(1).unmappableForLength$I(1), src, sp, dst, dp);
}da[dp++]=c;
sp++;
}
return P$.SingleByte.withResult$java_nio_charset_CoderResult$java_nio_Buffer$I$java_nio_Buffer$I(cr, src, sp, dst, dp);
}, p$1);

Clazz.newMeth(C$, 'decodeBufferLoop$java_nio_ByteBuffer$java_nio_CharBuffer', function (src, dst) {
var mark=src.position$();
try {
while (src.hasRemaining$()){
var c=this.decode$I(src.get$());
if (c == "\ufffd") return $I$(1).unmappableForLength$I(1);
if (!dst.hasRemaining$()) return $I$(1).OVERFLOW;
dst.put$C(c);
mark++;
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(mark);
}
}, p$1);

Clazz.newMeth(C$, 'decodeLoop$java_nio_ByteBuffer$java_nio_CharBuffer', function (src, dst) {
if (src.hasArray$() && dst.hasArray$() ) return p$1.decodeArrayLoop$java_nio_ByteBuffer$java_nio_CharBuffer.apply(this, [src, dst]);
 else return p$1.decodeBufferLoop$java_nio_ByteBuffer$java_nio_CharBuffer.apply(this, [src, dst]);
});

Clazz.newMeth(C$, 'decode$I', function (b) {
return this.b2c[b + 128];
});

Clazz.newMeth(C$, 'implReplaceWith$S', function (newReplacement) {
this.repl=newReplacement.charAt$I(0);
});

Clazz.newMeth(C$, ['decode$BA$I$I$CA','decode$'], function (src, sp, len, dst) {
if (len > dst.length) len=dst.length;
var dp=0;
while (dp < len){
dst[dp]=this.decode$I(src[sp++]);
if (dst[dp] == "\ufffd") {
dst[dp]=this.repl;
}dp++;
}
return dp;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.SingleByte, "Encoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.charset.CharsetEncoder', 'sun.nio.cs.ArrayEncoder');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sgp=null;
this.c2b=null;
this.c2bIndex=null;
this.repl=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.repl=($b$[0] = 63, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$CA$CA', function (cs, c2b, c2bIndex) {
C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this, [cs, 1.0, 1.0]);
C$.$init$.apply(this);
this.c2b=c2b;
this.c2bIndex=c2bIndex;
}, 1);

Clazz.newMeth(C$, 'canEncode$C', function (c) {
return this.encode$C(c) != 65533;
});

Clazz.newMeth(C$, 'isLegalReplacement$BA', function (repl) {
return ((repl.length == 1 && repl[0] == 63 ) || C$.superclazz.prototype.isLegalReplacement$BA.apply(this, [repl]) );
});

Clazz.newMeth(C$, 'encodeArrayLoop$java_nio_CharBuffer$java_nio_ByteBuffer', function (src, dst) {
var sa=src.array$();
var sp=src.arrayOffset$() + src.position$();
var sl=src.arrayOffset$() + src.limit$();
var da=dst.array$();
var dp=dst.arrayOffset$() + dst.position$();
var dl=dst.arrayOffset$() + dst.limit$();
var cr=$I$(1).UNDERFLOW;
if ((dl - dp) < (sl - sp)) {
sl=sp + (dl - dp);
cr=$I$(1).OVERFLOW;
}while (sp < sl){
var c=sa[sp];
var b=this.encode$C(c);
if (b == 65533) {
if (Character.isSurrogate$C(c)) {
if (this.sgp == null ) this.sgp=Clazz.new_($I$(2));
if (this.sgp.parse$C$CA$I$I(c, sa, sp, sl) < 0) return P$.SingleByte.withResult$java_nio_charset_CoderResult$java_nio_Buffer$I$java_nio_Buffer$I(this.sgp.error$(), src, sp, dst, dp);
return P$.SingleByte.withResult$java_nio_charset_CoderResult$java_nio_Buffer$I$java_nio_Buffer$I(this.sgp.unmappableResult$(), src, sp, dst, dp);
}return P$.SingleByte.withResult$java_nio_charset_CoderResult$java_nio_Buffer$I$java_nio_Buffer$I($I$(1).unmappableForLength$I(1), src, sp, dst, dp);
}da[dp++]=((b|0)|0);
sp++;
}
return P$.SingleByte.withResult$java_nio_charset_CoderResult$java_nio_Buffer$I$java_nio_Buffer$I(cr, src, sp, dst, dp);
}, p$2);

Clazz.newMeth(C$, 'encodeBufferLoop$java_nio_CharBuffer$java_nio_ByteBuffer', function (src, dst) {
var mark=src.position$();
try {
while (src.hasRemaining$()){
var c=src.get$();
var b=this.encode$C(c);
if (b == 65533) {
if (Character.isSurrogate$C(c)) {
if (this.sgp == null ) this.sgp=Clazz.new_($I$(2));
if (this.sgp.parse$C$java_nio_CharBuffer(c, src) < 0) return this.sgp.error$();
return this.sgp.unmappableResult$();
}return $I$(1).unmappableForLength$I(1);
}if (!dst.hasRemaining$()) return $I$(1).OVERFLOW;
dst.put$B(($b$[0] = (b|0), $b$[0]));
mark++;
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(mark);
}
}, p$2);

Clazz.newMeth(C$, 'encodeLoop$java_nio_CharBuffer$java_nio_ByteBuffer', function (src, dst) {
if (src.hasArray$() && dst.hasArray$() ) return p$2.encodeArrayLoop$java_nio_CharBuffer$java_nio_ByteBuffer.apply(this, [src, dst]);
 else return p$2.encodeBufferLoop$java_nio_CharBuffer$java_nio_ByteBuffer.apply(this, [src, dst]);
});

Clazz.newMeth(C$, 'encode$C', function (ch) {
var index=this.c2bIndex[ch.$c() >> 8];
if (index.$c() == 65533 ) return 65533;
return this.c2b[index.$c() + (ch.$c() & 255)].$c();
});

Clazz.newMeth(C$, 'implReplaceWith$BA', function (newReplacement) {
this.repl=($b$[0] = newReplacement[0], $b$[0]);
});

Clazz.newMeth(C$, ['encode$CA$I$I$BA','encode$'], function (src, sp, len, dst) {
var dp=0;
var sl=sp + Math.min(len, dst.length);
while (sp < sl){
var c=src[sp++];
var b=this.encode$C(c);
if (b != 65533) {
dst[dp++]=((b|0)|0);
continue;
}if (Character.isHighSurrogate$C(c) && sp < sl  && Character.isLowSurrogate$C(src[sp]) ) {
if (len > dst.length) {
sl++;
len--;
}sp++;
}dst[dp++]=(this.repl|0);
}
return dp;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
