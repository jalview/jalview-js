(function(){var P$=java.io,I$=[];
/*c*/var C$=Clazz.newClass(P$, "OutputStream", null, null, ['java.io.Closeable', 'java.io.Flushable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'write$BA',  function (b) {
this.write$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
} else if ((off < 0) || (off > b.length) || (len < 0) || ((off + len) > b.length) || ((off + len) < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return;
}for (var i=0; i < len; i++) {
this.write$I(b[off + i]);
}
});

Clazz.newMeth(C$, 'flush$',  function () {
});

Clazz.newMeth(C$, 'close$',  function () {
});

Clazz.newMeth(C$, '秘setBytes$BA',  function (b) {
try {
this.write$BA$I$I(b, 0, b.length);
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:08:57 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
