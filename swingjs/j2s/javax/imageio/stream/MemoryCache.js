(function(){var P$=Clazz.newPackage("javax.imageio.stream"),p$1={},I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MemoryCache");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cache=Clazz.new_($I$(1,1));
this.cacheStart=0;
this.length=0;
},1);

C$.$fields$=[['J',['cacheStart','length'],'O',['cache','java.util.ArrayList']]]

Clazz.newMeth(C$, 'getCacheBlock$J', function (blockNum) {
var blockOffset=blockNum - this.cacheStart;
if (blockOffset > 2147483647) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Cache addressing limit exceeded!"]);
}return this.cache.get$I((blockOffset|0));
}, p$1);

Clazz.newMeth(C$, 'loadFromStream$java_io_InputStream$J', function (stream, pos) {
if (pos < this.length) {
return pos;
}var offset=((this.length % 8192)|0);
var buf=null;
var len=pos - this.length;
if (offset != 0) {
buf=p$1.getCacheBlock$J.apply(this, [(this.length/8192|0)]);
}while (len > 0){
if (buf == null ) {
try {
buf=Clazz.array(Byte.TYPE, [8192]);
} catch (e) {
if (Clazz.exceptionOf(e,"OutOfMemoryError")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["No memory left for cache!"]);
} else {
throw e;
}
}
offset=0;
}var left=8192 - offset;
var nbytes=(Math.min(len, left)|0);
nbytes=stream.read$BA$I$I(buf, offset, nbytes);
if (nbytes == -1) {
return this.length;
}if (offset == 0) {
this.cache.add$O(buf);
}len-=nbytes;
this.length+=nbytes;
offset+=nbytes;
if (offset >= 8192) {
buf=null;
}}
return pos;
});

Clazz.newMeth(C$, 'writeToStream$java_io_OutputStream$J$J', function (stream, pos, len) {
if (pos + len > this.length) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Argument out of cache"]);
}if ((pos < 0) || (len < 0) ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Negative pos or len"]);
}if (len == 0) {
return;
}var bufIndex=(pos/8192|0);
if (bufIndex < this.cacheStart) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["pos already disposed"]);
}var offset=((pos % 8192)|0);
var buf=p$1.getCacheBlock$J.apply(this, [bufIndex++]);
while (len > 0){
if (buf == null ) {
buf=p$1.getCacheBlock$J.apply(this, [bufIndex++]);
offset=0;
}var nbytes=(Math.min(len, (8192 - offset))|0);
stream.write$BA$I$I(buf, offset, nbytes);
buf=null;
len-=nbytes;
}
});

Clazz.newMeth(C$, 'pad$J', function (pos) {
var currIndex=this.cacheStart + this.cache.size$() - 1;
var lastIndex=(pos/8192|0);
var numNewBuffers=lastIndex - currIndex;
for (var i=0; i < numNewBuffers; i++) {
try {
this.cache.add$O(Clazz.array(Byte.TYPE, [8192]));
} catch (e) {
if (Clazz.exceptionOf(e,"OutOfMemoryError")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["No memory left for cache!"]);
} else {
throw e;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'write$BA$I$I$J', function (b, off, len, pos) {
if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["b == null!"]);
}if ((off < 0) || (len < 0) || (pos < 0) || (off + len > b.length) || (off + len < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}var lastPos=pos + len - 1;
if (lastPos >= this.length) {
p$1.pad$J.apply(this, [lastPos]);
this.length=lastPos + 1;
}var offset=((pos % 8192)|0);
while (len > 0){
var buf=p$1.getCacheBlock$J.apply(this, [(pos/8192|0)]);
var nbytes=Math.min(len, 8192 - offset);
System.arraycopy$O$I$O$I$I(b, off, buf, offset, nbytes);
pos+=nbytes;
off+=nbytes;
len-=nbytes;
offset=0;
}
});

Clazz.newMeth(C$, 'write$I$J', function (b, pos) {
if (pos < 0) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["pos < 0"]);
}if (pos >= this.length) {
p$1.pad$J.apply(this, [pos]);
this.length=pos + 1;
}var buf=p$1.getCacheBlock$J.apply(this, [(pos/8192|0)]);
var offset=((pos % 8192)|0);
buf[offset]=(b|0);
});

Clazz.newMeth(C$, 'getLength$', function () {
return this.length;
});

Clazz.newMeth(C$, 'read$J', function (pos) {
if (pos >= this.length) {
return -1;
}var buf=p$1.getCacheBlock$J.apply(this, [(pos/8192|0)]);
if (buf == null ) {
return -1;
}return buf[((pos % 8192)|0)] & 255;
});

Clazz.newMeth(C$, 'read$BA$I$I$J', function (b, off, len, pos) {
if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["b == null!"]);
}if ((off < 0) || (len < 0) || (pos < 0) || (off + len > b.length) || (off + len < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}if (pos + len > this.length) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}var index=(pos/8192|0);
var offset=(pos|0) % 8192;
while (len > 0){
var nbytes=Math.min(len, 8192 - offset);
var buf=p$1.getCacheBlock$J.apply(this, [index++]);
System.arraycopy$O$I$O$I$I(buf, offset, b, off, nbytes);
len-=nbytes;
off+=nbytes;
offset=0;
}
});

Clazz.newMeth(C$, 'disposeBefore$J', function (pos) {
var index=(pos/8192|0);
if (index < this.cacheStart) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["pos already disposed"]);
}var numBlocks=Math.min(index - this.cacheStart, this.cache.size$());
for (var i=0; i < numBlocks; i++) {
this.cache.remove$I(0);
}
this.cacheStart=index;
});

Clazz.newMeth(C$, 'reset$', function () {
this.cache.clear$();
this.cacheStart=0;
this.length=0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
