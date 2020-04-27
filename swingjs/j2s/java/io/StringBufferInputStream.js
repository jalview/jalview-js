(function(){var P$=java.io;
/*c*/var C$=Clazz.newClass(P$, "StringBufferInputStream", null, 'java.io.InputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pos','count'],'S',['buffer']]]

Clazz.newMeth(C$, 'c$$S', function (s) {
Clazz.super_(C$, this);
this.buffer=s;
this.count=s.length$();
}, 1);

Clazz.newMeth(C$, 'read$', function () {
return (this.pos < this.count) ? ((this.buffer.charCodeAt$I(this.pos++)) & 255) : -1;
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
} else if ((off < 0) || (off > b.length) || (len < 0) || ((off + len) > b.length) || ((off + len) < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}if (this.pos >= this.count) {
return -1;
}if (this.pos + len > this.count) {
len=this.count - this.pos;
}if (len <= 0) {
return 0;
}var s=this.buffer;
var cnt=len;
while (--cnt >= 0){
b[off++]=(s.charAt$I(this.pos++).$c()|0);
}
return len;
});

Clazz.newMeth(C$, 'skip$J', function (n) {
if (n < 0) {
return 0;
}if (n > this.count - this.pos) {
n=this.count - this.pos;
}this.pos+=n;
return n;
});

Clazz.newMeth(C$, 'available$', function () {
return this.count - this.pos;
});

Clazz.newMeth(C$, 'reset$', function () {
this.pos=0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
