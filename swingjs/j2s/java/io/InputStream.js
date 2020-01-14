(function(){var P$=java.io;
var C$=Clazz.newClass(P$, "InputStream", null, null, 'java.io.Closeable');
C$.skipBuf=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'available$', function () {
return 0;
});

Clazz.newMeth(C$, 'close$', function () {
});

Clazz.newMeth(C$, 'mark$I', function (readlimit) {
});

Clazz.newMeth(C$, 'markSupported$', function () {
return false;
});

Clazz.newMeth(C$, 'read$BA', function (b) {
return this.read$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, offset, length) {
if (offset <= b.length && 0 <= offset  && 0 <= length  && length <= b.length - offset ) {
for (var i=0; i < length; i++) {
var c;
try {
if ((c=this.read$()) == -1) return i == 0 ? -1 : i;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if (i != 0) return i;
throw e;
} else {
throw e;
}
}
b[offset + i]=((c|0)|0);
}
return length;
}throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException'));
});

Clazz.newMeth(C$, 'reset$', function () {
throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'skip$J', function (n) {
if (n <= 0) return 0;
var skipped=0;
var toRead=n < 4096 ? (n|0) : 4096;
if (C$.skipBuf == null  || C$.skipBuf.length < toRead ) C$.skipBuf=Clazz.array(Byte.TYPE, [toRead]);
while (skipped < n){
var read=this.read$BA$I$I(C$.skipBuf, 0, toRead);
if (read == -1) return skipped;
skipped+=read;
if (read < toRead) return skipped;
if (n - skipped < toRead) toRead=((n - skipped)|0);
}
return skipped;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
