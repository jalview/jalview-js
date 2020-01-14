(function(){var P$=java.io,p$1={},I$=[[0,'swingjs.JSTempFile','java.io.File','java.io.FileDescriptor','swingjs.JSUtil','java.io.ByteArrayInputStream',['swingjs.JSFileSystem','.JSFileChannel']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileInputStream", null, 'java.io.InputStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fd=null;
this.is=null;
this.path=null;
this.channel=null;
this.closed=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.channel=null;
this.closed=false;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.c$$java_io_File.apply(this, [(name == null  ? null : name.startsWith$S("/TEMP/") ? Clazz.new_($I$(1).c$$S,[name]) : Clazz.new_($I$(2).c$$S,[name]))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File', function (file) {
Clazz.super_(C$, this,1);
var name=(file != null  ? file.getPath$() : null);
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.fd=Clazz.new_($I$(3));
this.fd.attach$java_io_Closeable(this);
this.path=name;
p$1.open$java_io_File.apply(this, [file]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_FileDescriptor', function (fdObj) {
Clazz.super_(C$, this,1);
var security=System.getSecurityManager$();
if (fdObj == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (security != null ) {
security.checkRead$java_io_FileDescriptor(fdObj);
}this.fd=fdObj;
this.path=null;
this.fd.attach$java_io_Closeable(this);
}, 1);

Clazz.newMeth(C$, 'open$java_io_File', function (file) {
var bytes=$I$(4).getFileAsBytes$O(file);
if (bytes == null ) throw Clazz.new_(Clazz.load('java.io.FileNotFoundException').c$$S,["Opening file " + file]);
file._bytes=bytes;
this.is=Clazz.new_($I$(5).c$$BA,[bytes]);
}, p$1);

Clazz.newMeth(C$, 'read$', function () {
return this.is.read$();
});

Clazz.newMeth(C$, 'readBytes$BA$I$I', function (b, off, len) {
return this.is.read$BA$I$I(b, off, len);
}, p$1);

Clazz.newMeth(C$, 'read$BA', function (b) {
return p$1.readBytes$BA$I$I.apply(this, [b, 0, b.length]);
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
return p$1.readBytes$BA$I$I.apply(this, [b, off, len]);
});

Clazz.newMeth(C$, 'skip$J', function (n) {
return this.is.skip$J(n);
});

Clazz.newMeth(C$, 'available$', function () {
return this.is.available$();
});

Clazz.newMeth(C$, 'close$', function () {
if (this.closed) {
return;
}this.is.close$();
this.closed=true;
if (this.channel != null ) {
this.channel.close$();
}this.fd.closeAll$java_io_Closeable(((P$.FileInputStream$1||
(function(){var C$=Clazz.newClass(P$, "FileInputStream$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Closeable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'close$', function () {
});
})()
), Clazz.new_(P$.FileInputStream$1.$init$, [this, null])));
});

Clazz.newMeth(C$, 'getFD$', function () {
if (this.fd != null ) {
return this.fd;
}throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'getChannel$', function () {
{
if (this.channel == null ) {
this.channel=$I$(6).open$java_io_FileDescriptor$S$Z$Z$O(this.fd, this.path, true, false, this);
}return this.channel;
}});

Clazz.newMeth(C$, 'finalize$', function () {
if ((this.fd != null ) && (this.fd !== $I$(3).$in ) ) {
this.close$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
