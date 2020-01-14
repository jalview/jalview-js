(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},I$=[[0,'Thread','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Resource");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cis=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'cachedInputStream', function () {
if (this.cis == null ) {
this.cis=this.getInputStream$();
}return this.cis;
}, p$1);

Clazz.newMeth(C$, 'getBytes$', function () {
var b;
var $in=p$1.cachedInputStream.apply(this, []);
var isInterrupted=$I$(1).interrupted$();
var len;
for (; ; ) {
try {
len=this.getContentLength$();
break;
} catch (iioe) {
if (Clazz.exceptionOf(iioe,"java.io.InterruptedIOException")){
$I$(1).interrupted$();
isInterrupted=true;
} else {
throw iioe;
}
}
}
try {
b=Clazz.array(Byte.TYPE, [0]);
if (len == -1) len=2147483647;
var pos=0;
while (pos < len){
var bytesToRead;
if (pos >= b.length) {
bytesToRead=Math.min(len - pos, b.length + 1024);
if (b.length < pos + bytesToRead) {
b=$I$(2).copyOf$BA$I(b, pos + bytesToRead);
}} else {
bytesToRead=b.length - pos;
}var cc=0;
try {
cc=$in.read$BA$I$I(b, pos, bytesToRead);
} catch (iioe) {
if (Clazz.exceptionOf(iioe,"java.io.InterruptedIOException")){
$I$(1).interrupted$();
isInterrupted=true;
} else {
throw iioe;
}
}
if (cc < 0) {
if (len != 2147483647) {
throw Clazz.new_(Clazz.load('java.io.EOFException').c$$S,["Detect premature EOF"]);
} else {
if (b.length != pos) {
b=$I$(2).copyOf$BA$I(b, pos);
}break;
}}pos+=cc;
}
} finally {
try {
$in.close$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var iioe = e$$;
{
isInterrupted=true;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ignore = e$$;
{
}
} else {
throw e$$;
}
}
if (isInterrupted) {
$I$(1).currentThread$().interrupt$();
}}
return b;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
