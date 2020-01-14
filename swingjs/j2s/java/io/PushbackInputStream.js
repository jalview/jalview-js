(function(){var P$=java.io,p$1={};
var C$=Clazz.newClass(P$, "PushbackInputStream", null, 'java.io.FilterInputStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.buf=null;
this.pos=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'ensureOpen', function () {
if (this.$in == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}, p$1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$I', function ($in, size) {
C$.superclazz.c$$java_io_InputStream.apply(this, [$in]);
C$.$init$.apply(this);
if (size <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size <= 0"]);
}this.buf=Clazz.array(Byte.TYPE, [size]);
this.pos=size;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream', function ($in) {
C$.c$$java_io_InputStream$I.apply(this, [$in, 1]);
}, 1);

Clazz.newMeth(C$, 'read$', function () {
p$1.ensureOpen.apply(this, []);
if (this.pos < this.buf.length) {
return this.buf[this.pos++] & 255;
}return this.$in.read$();
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
p$1.ensureOpen.apply(this, []);
if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
} else if (off < 0 || len < 0  || len > b.length - off ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return 0;
}var avail=this.buf.length - this.pos;
if (avail > 0) {
if (len < avail) {
avail=len;
}System.arraycopy$O$I$O$I$I(this.buf, this.pos, b, off, avail);
this.pos+=avail;
off+=avail;
len-=avail;
}if (len > 0) {
len=this.$in.read$BA$I$I(b, off, len);
if (len == -1) {
return avail == 0 ? -1 : avail;
}return avail + len;
}return avail;
});

Clazz.newMeth(C$, 'unreadByte$I', function (b) {
p$1.ensureOpen.apply(this, []);
if (this.pos == 0) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Push back buffer is full"]);
}this.buf[--this.pos]=((b|0)|0);
});

Clazz.newMeth(C$, 'unread$BA$I$I', function (b, off, len) {
p$1.ensureOpen.apply(this, []);
if (len > this.pos) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Push back buffer is full"]);
}this.pos-=len;
System.arraycopy$O$I$O$I$I(b, off, this.buf, this.pos, len);
});

Clazz.newMeth(C$, 'available$', function () {
p$1.ensureOpen.apply(this, []);
var n=this.buf.length - this.pos;
var avail=this.$in.available$();
return n > (2147483647 - avail) ? 2147483647 : n + avail;
});

Clazz.newMeth(C$, 'skip$J', function (n) {
p$1.ensureOpen.apply(this, []);
if (n <= 0) {
return 0;
}var pskip=this.buf.length - this.pos;
if (pskip > 0) {
if (n < pskip) {
pskip=n;
}this.pos+=pskip;
n-=pskip;
}if (n > 0) {
pskip+=this.$in.skip$J(n);
}return pskip;
});

Clazz.newMeth(C$, 'markSupported$', function () {
return false;
});

Clazz.newMeth(C$, 'mark$I', function (readlimit) {
});

Clazz.newMeth(C$, 'reset$', function () {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["mark/reset not supported"]);
});

Clazz.newMeth(C$, 'close$', function () {
if (this.$in == null ) return;
this.$in.close$();
this.$in=null;
this.buf=null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
