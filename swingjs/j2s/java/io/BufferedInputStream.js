(function(){var P$=java.io,p$1={},I$=[[0,'org.apache.harmony.luni.util.Msg']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BufferedInputStream", null, 'java.io.FilterInputStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.buf=null;
this.count=0;
this.marklimit=0;
this.markpos=0;
this.pos=0;
this.closed=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.markpos=-1;
this.closed=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream', function ($in) {
C$.superclazz.c$$java_io_InputStream.apply(this, [$in]);
C$.$init$.apply(this);
this.buf=($in == null ) ? null : Clazz.array(Byte.TYPE, [8192]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$I', function ($in, size) {
C$.superclazz.c$$java_io_InputStream.apply(this, [$in]);
C$.$init$.apply(this);
if (size <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("K0058")]);
}this.buf=($in == null ) ? null : Clazz.array(Byte.TYPE, [size]);
}, 1);

Clazz.newMeth(C$, 'available$', function () {
if (this.buf == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K0059")]);
}return this.count - this.pos + this.$in.available$();
});

Clazz.newMeth(C$, 'close$', function () {
if (null != this.$in ) {
C$.superclazz.prototype.close$.apply(this, []);
this.$in=null;
}this.buf=null;
this.closed=true;
});

Clazz.newMeth(C$, 'fillbuf', function () {
if (this.markpos == -1 || (this.pos - this.markpos >= this.marklimit) ) {
var result=this.$in.read$BA(this.buf);
if (result > 0) {
this.markpos=-1;
this.pos=0;
this.count=result == -1 ? 0 : result;
}return result;
}if (this.markpos == 0 && this.marklimit > this.buf.length ) {
var newLength=this.buf.length * 2;
if (newLength > this.marklimit) {
newLength=this.marklimit;
}var newbuf=Clazz.array(Byte.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(this.buf, 0, newbuf, 0, this.buf.length);
this.buf=newbuf;
} else if (this.markpos > 0) {
System.arraycopy$O$I$O$I$I(this.buf, this.markpos, this.buf, 0, this.buf.length - this.markpos);
}this.pos-=this.markpos;
this.count=this.markpos=0;
var bytesread=this.$in.read$BA$I$I(this.buf, this.pos, this.buf.length - this.pos);
this.count=bytesread <= 0 ? this.pos : this.pos + bytesread;
return bytesread;
}, p$1);

Clazz.newMeth(C$, 'mark$I', function (readlimit) {
this.marklimit=readlimit;
this.markpos=this.pos;
});

Clazz.newMeth(C$, 'markSupported$', function () {
return true;
});

Clazz.newMeth(C$, 'read$', function () {
if (this.buf == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K0059")]);
}if (this.pos >= this.count && p$1.fillbuf.apply(this, []) == -1 ) {
return -1;
}if (this.count - this.pos > 0) {
return this.buf[this.pos++] & 255;
}return -1;
});

Clazz.newMeth(C$, 'read$BA$I$I', function (buffer, offset, length) {
if (this.closed) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K0059")]);
}if (offset > buffer.length - length || offset < 0  || length < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}if (length == 0) {
return 0;
}if (null == this.buf ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K0059")]);
}var required;
if (this.pos < this.count) {
var copylength=this.count - this.pos >= length ? length : this.count - this.pos;
System.arraycopy$O$I$O$I$I(this.buf, this.pos, buffer, offset, copylength);
this.pos+=copylength;
if (copylength == length || this.$in.available$() == 0 ) {
return copylength;
}offset+=copylength;
required=length - copylength;
} else {
required=length;
}while (true){
var read;
if (this.markpos == -1 && required >= this.buf.length ) {
read=this.$in.read$BA$I$I(buffer, offset, required);
if (read == -1) {
return required == length ? -1 : length - required;
}} else {
if (p$1.fillbuf.apply(this, []) == -1) {
return required == length ? -1 : length - required;
}read=this.count - this.pos >= required ? required : this.count - this.pos;
System.arraycopy$O$I$O$I$I(this.buf, this.pos, buffer, offset, read);
this.pos+=read;
}required-=read;
if (required == 0) {
return length;
}if (this.$in.available$() == 0) {
return length - required;
}offset+=read;
}
});

Clazz.newMeth(C$, 'reset$', function () {
if (this.closed) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K0059")]);
}if (-1 == this.markpos) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K005a")]);
}this.pos=this.markpos;
});

Clazz.newMeth(C$, 'skip$J', function (amount) {
if (null == this.$in ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(1).getString$S("K0059")]);
}if (amount < 1) {
return 0;
}if (this.count - this.pos >= amount) {
this.pos+=amount;
return amount;
}var read=this.count - this.pos;
this.pos=this.count;
if (this.markpos != -1) {
if (amount <= this.marklimit) {
if (p$1.fillbuf.apply(this, []) == -1) {
return read;
}if (this.count - this.pos >= amount - read) {
this.pos+=amount - read;
return amount;
}read+=(this.count - this.pos);
this.pos=this.count;
return read;
}this.markpos=-1;
}return read + this.$in.skip$J(amount - read);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
