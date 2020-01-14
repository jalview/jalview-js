(function(){var P$=java.lang,I$=[[0,'java.nio.charset.CodingErrorAction','java.nio.ByteBuffer','java.nio.CharBuffer','Error','java.util.Arrays','java.nio.charset.Charset','sun.misc.MessageUtils',['StringCoding','.StringDecoder'],['StringCoding','.StringEncoder']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StringCoding", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.decoder=null;
C$.encoder=null;
C$.warnUnsupportedCharset=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.warnUnsupportedCharset=true;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'safeTrim$BA$I$java_nio_charset_Charset$Z', function (ba, len, cs, isTrusted) {
if (len == ba.length) return ba;
 else return $I$(5).copyOf$BA$I(ba, len);
}, 1);

Clazz.newMeth(C$, 'safeTrim$CA$I$java_nio_charset_Charset$Z', function (ca, len, cs, isTrusted) {
if (len == ca.length) return ca;
 else return $I$(5).copyOf$CA$I(ca, len);
}, 1);

Clazz.newMeth(C$, 'scale$I$F', function (len, expansionFactor) {
return ((len * expansionFactor)|0);
}, 1);

Clazz.newMeth(C$, 'lookupCharset$S', function (csn) {
if ($I$(6).isSupported$S(csn)) {
try {
return $I$(6).forName$S(csn);
} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.charset.UnsupportedCharsetException")){
throw Clazz.new_($I$(4).c$$Throwable,[x]);
} else {
throw x;
}
}
}return null;
}, 1);

Clazz.newMeth(C$, 'warnUnsupportedCharset$S', function (csn) {
if (C$.warnUnsupportedCharset) {
$I$(7).err$S("WARNING: Default charset " + csn + " not supported, using ISO-8859-1 instead" );
C$.warnUnsupportedCharset=false;
}}, 1);

Clazz.newMeth(C$, 'decode$S$BA$I$I', function (charsetName, ba, off, len) {
var sd=C$.decoder;
var csn=(charsetName == null ) ? "ISO-8859-1" : charsetName;
if ((sd == null ) || !(csn.equals$O(sd.requestedCharsetName$()) || csn.equals$O(sd.charsetName$()) ) ) {
sd=null;
try {
var cs=C$.lookupCharset$S(csn);
if (cs != null ) sd=Clazz.new_($I$(8).c$$java_nio_charset_Charset$S,[cs, csn]);
} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.charset.IllegalCharsetNameException")){
} else {
throw x;
}
}
if (sd == null ) throw Clazz.new_(Clazz.load('java.io.UnsupportedEncodingException').c$$S,[csn]);
C$.decoder=sd;
}return sd.decode$BA$I$I(ba, off, len);
}, 1);

Clazz.newMeth(C$, 'decode$java_nio_charset_Charset$BA$I$I', function (cs, ba, off, len) {
var cd=cs.newDecoder$();
var en=C$.scale$I$F(len, cd.maxCharsPerByte$());
var ca=Clazz.array(Character.TYPE, [en]);
if (len == 0) return ca;
var isTrusted=false;
if (System.getSecurityManager$() != null ) {
if (!(isTrusted=(cs.getClass$().getClassLoader0$() == null ))) {
ba=$I$(5).copyOfRange$BA$I$I(ba, off, off + len);
off=0;
}}cd.onMalformedInput$java_nio_charset_CodingErrorAction($I$(1).REPLACE).onUnmappableCharacter$java_nio_charset_CodingErrorAction($I$(1).REPLACE).reset$();
if (Clazz.instanceOf(cd, "sun.nio.cs.ArrayDecoder")) {
var clen=(cd).decode$(ba, off, len, ca);
return C$.safeTrim$CA$I$java_nio_charset_Charset$Z(ca, clen, cs, isTrusted);
} else {
var bb=$I$(2).wrap$BA$I$I(ba, off, len);
var cb=$I$(3).wrap$CA(ca);
try {
var cr=cd.decode$java_nio_ByteBuffer$java_nio_CharBuffer$Z(bb, cb, true);
if (!cr.isUnderflow$()) cr.throwException$();
cr=cd.flush$java_nio_CharBuffer(cb);
if (!cr.isUnderflow$()) cr.throwException$();
} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.charset.CharacterCodingException")){
throw Clazz.new_($I$(4).c$$Throwable,[x]);
} else {
throw x;
}
}
return C$.safeTrim$CA$I$java_nio_charset_Charset$Z(ca, cb.position$(), cs, isTrusted);
}}, 1);

Clazz.newMeth(C$, 'decode$BA$I$I', function (ba, off, len) {
var csn=$I$(6).defaultCharset$().name$();
try {
return C$.decode$S$BA$I$I(csn, ba, off, len);
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.UnsupportedEncodingException")){
C$.warnUnsupportedCharset$S(csn);
} else {
throw x;
}
}
try {
return C$.decode$S$BA$I$I("ISO-8859-1", ba, off, len);
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.UnsupportedEncodingException")){
$I$(7).err$S("ISO-8859-1 charset not available: " + x.toString());
System.exit$I(1);
return null;
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'encode$S$CA$I$I', function (charsetName, ca, off, len) {
var se=C$.encoder;
var csn=(charsetName == null ) ? "ISO-8859-1" : charsetName;
if ((se == null ) || !(csn.equals$O(se.requestedCharsetName$()) || csn.equals$O(se.charsetName$()) ) ) {
se=null;
try {
var cs=C$.lookupCharset$S(csn);
if (cs != null ) se=Clazz.new_($I$(9).c$$java_nio_charset_Charset$S,[cs, csn]);
} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.charset.IllegalCharsetNameException")){
} else {
throw x;
}
}
if (se == null ) throw Clazz.new_(Clazz.load('java.io.UnsupportedEncodingException').c$$S,[csn]);
C$.encoder=se;
}return se.encode$CA$I$I(ca, off, len);
}, 1);

Clazz.newMeth(C$, 'encode$java_nio_charset_Charset$CA$I$I', function (cs, ca, off, len) {
var ce=cs.newEncoder$();
var en=C$.scale$I$F(len, ce.maxBytesPerChar$());
var ba=Clazz.array(Byte.TYPE, [en]);
if (len == 0) return ba;
var isTrusted=false;
if (System.getSecurityManager$() != null ) {
if (!(isTrusted=(cs.getClass$().getClassLoader0$() == null ))) {
ca=$I$(5).copyOfRange$CA$I$I(ca, off, off + len);
off=0;
}}ce.onMalformedInput$java_nio_charset_CodingErrorAction($I$(1).REPLACE).onUnmappableCharacter$java_nio_charset_CodingErrorAction($I$(1).REPLACE).reset$();
if (Clazz.instanceOf(ce, "sun.nio.cs.ArrayEncoder")) {
var blen=(ce).encode$(ca, off, len, ba);
return C$.safeTrim$BA$I$java_nio_charset_Charset$Z(ba, blen, cs, isTrusted);
} else {
var bb=$I$(2).wrap$BA(ba);
var cb=$I$(3).wrap$CA$I$I(ca, off, len);
try {
var cr=ce.encode$java_nio_CharBuffer$java_nio_ByteBuffer$Z(cb, bb, true);
if (!cr.isUnderflow$()) cr.throwException$();
cr=ce.flush$java_nio_ByteBuffer(bb);
if (!cr.isUnderflow$()) cr.throwException$();
} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.charset.CharacterCodingException")){
throw Clazz.new_($I$(4).c$$Throwable,[x]);
} else {
throw x;
}
}
return C$.safeTrim$BA$I$java_nio_charset_Charset$Z(ba, bb.position$(), cs, isTrusted);
}}, 1);

Clazz.newMeth(C$, 'encode$CA$I$I', function (ca, off, len) {
var csn=$I$(6).defaultCharset$().name$();
try {
return C$.encode$S$CA$I$I(csn, ca, off, len);
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.UnsupportedEncodingException")){
C$.warnUnsupportedCharset$S(csn);
} else {
throw x;
}
}
try {
return C$.encode$S$CA$I$I("ISO-8859-1", ca, off, len);
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.UnsupportedEncodingException")){
$I$(7).err$S("ISO-8859-1 charset not available: " + x.toString());
System.exit$I(1);
return null;
} else {
throw x;
}
}
}, 1);
;
(function(){var C$=Clazz.newClass(P$.StringCoding, "StringDecoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.requestedCharsetName=null;
this.cs=null;
this.cd=null;
this.isTrusted=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$S', function (cs, rcn) {
C$.$init$.apply(this);
this.requestedCharsetName=rcn;
this.cs=cs;
this.cd=cs.newDecoder$().onMalformedInput$java_nio_charset_CodingErrorAction($I$(1).REPLACE).onUnmappableCharacter$java_nio_charset_CodingErrorAction($I$(1).REPLACE);
this.isTrusted=true;
}, 1);

Clazz.newMeth(C$, 'charsetName$', function () {
if (Clazz.instanceOf(this.cs, "sun.nio.cs.HistoricallyNamedCharset")) return (this.cs).historicalName$();
return this.cs.name$();
});

Clazz.newMeth(C$, 'requestedCharsetName$', function () {
return this.requestedCharsetName;
});

Clazz.newMeth(C$, 'decode$BA$I$I', function (ba, off, len) {
var en=StringCoding.scale$I$F(len, this.cd.maxCharsPerByte$());
var ca=Clazz.array(Character.TYPE, [en]);
if (len == 0) return ca;
if (Clazz.instanceOf(this.cd, "sun.nio.cs.ArrayDecoder")) {
var clen=(this.cd).decode$(ba, off, len, ca);
return StringCoding.safeTrim$CA$I$java_nio_charset_Charset$Z(ca, clen, this.cs, this.isTrusted);
} else {
this.cd.reset$();
var bb=$I$(2).wrap$BA$I$I(ba, off, len);
var cb=$I$(3).wrap$CA(ca);
try {
var cr=this.cd.decode$java_nio_ByteBuffer$java_nio_CharBuffer$Z(bb, cb, true);
if (!cr.isUnderflow$()) cr.throwException$();
cr=this.cd.flush$java_nio_CharBuffer(cb);
if (!cr.isUnderflow$()) cr.throwException$();
} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.charset.CharacterCodingException")){
throw Clazz.new_($I$(4).c$$Throwable,[x]);
} else {
throw x;
}
}
return StringCoding.safeTrim$CA$I$java_nio_charset_Charset$Z(ca, cb.position$(), this.cs, this.isTrusted);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.StringCoding, "StringEncoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cs=null;
this.ce=null;
this.requestedCharsetName=null;
this.isTrusted=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$S', function (cs, rcn) {
C$.$init$.apply(this);
this.requestedCharsetName=rcn;
this.cs=cs;
this.ce=cs.newEncoder$().onMalformedInput$java_nio_charset_CodingErrorAction($I$(1).REPLACE).onUnmappableCharacter$java_nio_charset_CodingErrorAction($I$(1).REPLACE);
this.isTrusted=(cs.getClass$().getClassLoader0$() == null );
}, 1);

Clazz.newMeth(C$, 'charsetName$', function () {
if (Clazz.instanceOf(this.cs, "sun.nio.cs.HistoricallyNamedCharset")) return (this.cs).historicalName$();
return this.cs.name$();
});

Clazz.newMeth(C$, 'requestedCharsetName$', function () {
return this.requestedCharsetName;
});

Clazz.newMeth(C$, 'encode$CA$I$I', function (ca, off, len) {
var en=StringCoding.scale$I$F(len, this.ce.maxBytesPerChar$());
var ba=Clazz.array(Byte.TYPE, [en]);
if (len == 0) return ba;
if (Clazz.instanceOf(this.ce, "sun.nio.cs.ArrayEncoder")) {
var blen=(this.ce).encode$(ca, off, len, ba);
return StringCoding.safeTrim$BA$I$java_nio_charset_Charset$Z(ba, blen, this.cs, this.isTrusted);
} else {
this.ce.reset$();
var bb=$I$(2).wrap$BA(ba);
var cb=$I$(3).wrap$CA$I$I(ca, off, len);
try {
var cr=this.ce.encode$java_nio_CharBuffer$java_nio_ByteBuffer$Z(cb, bb, true);
if (!cr.isUnderflow$()) cr.throwException$();
cr=this.ce.flush$java_nio_ByteBuffer(bb);
if (!cr.isUnderflow$()) cr.throwException$();
} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.charset.CharacterCodingException")){
throw Clazz.new_($I$(4).c$$Throwable,[x]);
} else {
throw x;
}
}
return StringCoding.safeTrim$BA$I$java_nio_charset_Charset$Z(ba, bb.position$(), this.cs, this.isTrusted);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
