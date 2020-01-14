(function(){var P$=java.io,p$1={},I$=[[0,'OutOfMemoryError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ByteArrayOutputStream", null, 'java.io.OutputStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.buf=null;
this.count=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [32]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (size) {
Clazz.super_(C$, this,1);
if (size < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative initial size: " + size]);
}this.buf=Clazz.array(Byte.TYPE, [size]);
}, 1);

Clazz.newMeth(C$, 'ensureCapacity$I', function (minCapacity) {
if (minCapacity - this.buf.length > 0) p$1.grow$I.apply(this, [minCapacity]);
}, p$1);

Clazz.newMeth(C$, 'grow$I', function (minCapacity) {
var oldCapacity=this.buf.length;
var newCapacity=oldCapacity << 1;
if (newCapacity - minCapacity < 0) newCapacity=minCapacity;
if (newCapacity < 0) {
if (minCapacity < 0) throw Clazz.new_($I$(1));
newCapacity=minCapacity;
}this.buf=C$.arrayCopyByte$BA$I(this.buf, newCapacity);
}, p$1);

Clazz.newMeth(C$, 'arrayCopyByte$BA$I', function (array, newLength) {
var t=Clazz.array(Byte.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(array, 0, t, 0, array.length < newLength ? array.length : newLength);
return t;
}, 1);

Clazz.newMeth(C$, 'write$I', function (b) {
p$1.ensureCapacity$I.apply(this, [this.count + 1]);
this.buf[this.count]=((b|0)|0);
this.count+=1;
});

Clazz.newMeth(C$, 'write$BA$I$I', function (b, off, len) {
if ((off < 0) || (off > b.length) || (len < 0) || ((off + len) - b.length > 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}p$1.ensureCapacity$I.apply(this, [this.count + len]);
System.arraycopy$O$I$O$I$I(b, off, this.buf, this.count, len);
this.count+=len;
});

Clazz.newMeth(C$, 'writeTo$java_io_OutputStream', function (out) {
out.write$BA$I$I(this.buf, 0, this.count);
});

Clazz.newMeth(C$, 'reset$', function () {
this.count=0;
});

Clazz.newMeth(C$, 'toByteArray$', function () {
return (this.count == this.buf.length ? this.buf : C$.arrayCopyByte$BA$I(this.buf, this.count));
});

Clazz.newMeth(C$, 'size$', function () {
return this.count;
});

Clazz.newMeth(C$, 'toString', function () {
return  String.instantialize(this.buf, 0, this.count);
});

Clazz.newMeth(C$, 'close$', function () {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
