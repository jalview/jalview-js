(function(){var P$=java.io;
var C$=Clazz.newClass(P$, "Reader", null, null, ['Readable', 'java.io.Closeable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lock=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.lock=this;
}, 1);

Clazz.newMeth(C$, 'c$$O', function (lock) {
C$.$init$.apply(this);
if (lock != null ) this.lock="";
 else throw Clazz.new_(Clazz.load('NullPointerException'));
}, 1);

Clazz.newMeth(C$, 'mark$I', function (readLimit) {
throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'markSupported$', function () {
return false;
});

Clazz.newMeth(C$, 'read$', function () {
{
var charArray=Clazz.array(Character.TYPE, [1]);
if (this.read$CA$I$I(charArray, 0, 1) != -1) return charArray[0].$c();
return -1;
}});

Clazz.newMeth(C$, 'read$CA', function (buf) {
return this.read$CA$I$I(buf, 0, buf.length);
});

Clazz.newMeth(C$, 'ready$', function () {
return false;
});

Clazz.newMeth(C$, 'reset$', function () {
throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'skip$J', function (count) {
if (count >= 0) {
{
var skipped=0;
var toRead=count < 512 ? (count|0) : 512;
var charsSkipped=Clazz.array(Character.TYPE, [toRead]);
while (skipped < count){
var read=this.read$CA$I$I(charsSkipped, 0, toRead);
if (read == -1) {
return skipped;
}skipped+=read;
if (read < toRead) {
return skipped;
}if (count - skipped < toRead) {
toRead=((count - skipped)|0);
}}
return skipped;
}}throw Clazz.new_(Clazz.load('IllegalArgumentException'));
});

Clazz.newMeth(C$, 'read$java_nio_CharBuffer', function (target) {
if (null == target ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var length=target.length$();
var buf=Clazz.array(Character.TYPE, [length]);
length=Math.min(length, this.read$CA(buf));
if (length > 0) {
target.put$CA$I$I(buf, 0, length);
}return length;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
