(function(){var P$=Clazz.newPackage("java.util.zip");
/*c*/var C$=Clazz.newClass(P$, "CheckedInputStream", null, 'java.io.FilterInputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['cksum','swingjs.jzlib.Checksum']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream$swingjs_jzlib_Checksum', function ($in, cksum) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[$in]);C$.$init$.apply(this);
this.cksum=cksum;
}, 1);

Clazz.newMeth(C$, 'read$', function () {
var b=this.$in.read$();
if (b != -1) {
this.cksum.updateByteAsInt$I(b);
}return b;
});

Clazz.newMeth(C$, 'read$BA$I$I', function (buf, off, len) {
len=this.$in.read$BA$I$I(buf, off, len);
if (len != -1) {
this.cksum.update$BA$I$I(buf, off, len);
}return len;
});

Clazz.newMeth(C$, 'skip$J', function (n) {
var buf=Clazz.array(Byte.TYPE, [512]);
var total=0;
while (total < n){
var len=n - total;
len=this.read$BA$I$I(buf, 0, len < buf.length ? (len|0) : buf.length);
if (len == -1) {
return total;
}total+=len;
}
return total;
});

Clazz.newMeth(C$, 'getChecksum$', function () {
return this.cksum;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
