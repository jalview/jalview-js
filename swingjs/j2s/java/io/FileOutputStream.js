(function(){var P$=java.io,p$1={},I$=[[0,'java.io.File','java.io.FileDescriptor','javajs.util.OC','java.io.ByteArrayOutputStream',['swingjs.JSFileSystem','.JSFileChannel']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileOutputStream", null, 'java.io.OutputStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fd=null;
this.append=false;
this.out=null;
this.channel=null;
this.path=null;
this.closeLock=null;
this.closed=false;
this._file=null;
this._bytes=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.closeLock= Clazz.new_();
this.closed=false;
}, 1);

Clazz.newMeth(C$, '_getFile$', function () {
return this._file;
});

Clazz.newMeth(C$, '_getBytes$', function () {
return this._bytes;
});

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.c$$java_io_File$Z.apply(this, [name != null  ? Clazz.new_($I$(1).c$$S,[name]) : null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z', function (name, append) {
C$.c$$java_io_File$Z.apply(this, [name != null  ? Clazz.new_($I$(1).c$$S,[name]) : null, append]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File', function (file) {
C$.c$$java_io_File$Z.apply(this, [file, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$Z', function (file, append) {
Clazz.super_(C$, this,1);
this._file=file;
var name=(file != null  ? file.getPath$() : null);
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.fd=Clazz.new_($I$(2));
this.fd.attach$java_io_Closeable(this);
this.append=append;
this.path=name;
p$1.open$S$Z.apply(this, [name, append]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_FileDescriptor', function (fdObj) {
Clazz.super_(C$, this,1);
var security=System.getSecurityManager$();
if (fdObj == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.fd=fdObj;
this.append=false;
this.path=null;
this.fd.attach$java_io_Closeable(this);
}, 1);

Clazz.newMeth(C$, 'open0$S$Z', function (name, append) {
this.out=Clazz.new_($I$(3));
var bos=null;
if (append && this._file != null   && this._file._bytes != null  ) {
bos=Clazz.new_($I$(4));
bos.write$BA$I$I(this._file._bytes, 0, this._file._bytes.length);
}this.out.setParams$javajs_api_BytePoster$S$Z$java_io_OutputStream(null, name, false, bos);
this.out.setTemp$Z(this._file != null  && Clazz.instanceOf(this._file, "swingjs.JSTempFile") );
}, p$1);

Clazz.newMeth(C$, 'open$S$Z', function (name, append) {
p$1.open0$S$Z.apply(this, [name, append]);
}, p$1);

Clazz.newMeth(C$, 'writeBytes$BA$I$I', function (b, off, len) {
this.out.write$BA$I$I(b, off, len);
}, p$1);

Clazz.newMeth(C$, 'write$I', function (b) {
this.out.writeByteAsInt$I(b);
});

Clazz.newMeth(C$, 'write$BA', function (b) {
p$1.writeBytes$BA$I$I.apply(this, [b, 0, b.length]);
});

Clazz.newMeth(C$, 'write$BA$I$I', function (b, off, len) {
p$1.writeBytes$BA$I$I.apply(this, [b, off, len]);
});

Clazz.newMeth(C$, 'close$', function () {
this.out.closeChannel$();
this._bytes=this.out.toByteArray$();
if (this._file != null  && this._bytes != null  ) this._file._bytes=this._bytes;
if (Clazz.instanceOf(this._file, "swingjs.JSTempFile")) (this._file).cacheBytes$();
{
if (this.closed) {
return;
}this.closed=true;
}if (this.channel != null ) {
this.channel.close$();
}this.fd.closeAll$java_io_Closeable(((P$.FileOutputStream$1||
(function(){var C$=Clazz.newClass(P$, "FileOutputStream$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Closeable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'close$', function () {
p$1.close0.apply(this.b$['java.io.FileOutputStream'], []);
});
})()
), Clazz.new_(P$.FileOutputStream$1.$init$, [this, null])));
});

Clazz.newMeth(C$, 'getFD$', function () {
if (this.fd != null ) {
return this.fd;
}throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'getChannel$', function () {
if (this.channel == null ) {
this.channel=$I$(5).open$java_io_FileDescriptor$S$Z$Z$Z$O(this.fd, this.path, false, true, this.append, null);
}return this.channel;
});

Clazz.newMeth(C$, 'finalize$', function () {
if (this.fd != null ) {
if (this.fd === $I$(2).out  || this.fd === $I$(2).err  ) {
this.flush$();
} else {
this.close$();
}}});

Clazz.newMeth(C$, 'close0', function () {
this.out.closeChannel$();
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
