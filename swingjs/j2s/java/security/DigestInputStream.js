(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DigestInputStream", null, 'java.io.FilterInputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.on=true;
},1);

C$.$fields$=[['Z',['on'],'O',['digest','java.security.MessageDigest']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream$java_security_MessageDigest',  function (stream, digest) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[stream]);C$.$init$.apply(this);
this.setMessageDigest$java_security_MessageDigest(digest);
}, 1);

Clazz.newMeth(C$, 'getMessageDigest$',  function () {
return this.digest;
});

Clazz.newMeth(C$, 'setMessageDigest$java_security_MessageDigest',  function (digest) {
this.digest=digest;
});

Clazz.newMeth(C$, 'read$',  function () {
var ch=this.$in.read$();
if (this.on && ch != -1 ) {
this.digest.update$B(($b$[0] = ch, $b$[0]));
}return ch;
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
var result=this.$in.read$BA$I$I(b, off, len);
if (this.on && result != -1 ) {
this.digest.update$BA$I$I(b, off, result);
}return result;
});

Clazz.newMeth(C$, 'on$Z',  function (on) {
this.on=on;
});

Clazz.newMeth(C$, 'toString',  function () {
return "[Digest Input Stream] " + this.digest.toString();
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:05 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
