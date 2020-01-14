(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'java.nio.charset.CoderResult']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSCharsetEncoder", null, 'java.nio.charset.CharsetEncoder');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$F$F', function (cs, averageBytesPerChar, maxBytesPerChar) {
C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this, [cs, averageBytesPerChar, maxBytesPerChar]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'encodeLoop$java_nio_CharBuffer$java_nio_ByteBuffer', function ($in, out) {
try {
var b=$in.toString().getBytes$S("utf-8");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
e.printStackTrace$();
} else {
throw e;
}
}

out.a = b;
out.length = out.limit = b.length;
out.position = 0;
return $I$(1).UNDERFLOW;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:41 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
