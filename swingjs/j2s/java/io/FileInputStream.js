(function(){var P$=java.io,p$1={},I$=[[0,'swingjs.JSTempFile','java.io.File','java.io.FileDescriptor','swingjs.JSUtil','java.io.ByteArrayInputStream',['swingjs.JSFileSystem','.JSFileChannel']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileInputStream", null, 'java.io.InputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.channel=null;
this.closed=false;
},1);

C$.$fields$=[['Z',['closed'],'S',['path'],'O',['fd','java.io.FileDescriptor','is','java.io.ByteArrayInputStream','channel','swingjs.JSFileSystem.JSFileChannel','_file','java.io.File']]]

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.c$$java_io_File.apply(this, [(name == null  ? null : name.startsWith$S("/TEMP/") ? Clazz.new_($I$(1,1).c$$S,[name]) : Clazz.new_($I$(2,1).c$$S,[name]))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File', function (file) {
Clazz.super_(C$, this);
var name=(file != null  ? file.getPath$() : null);
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.fd=Clazz.new_($I$(3,1));
this._file=file;
this.fd.attach$java_io_Closeable(this);
this.path=name;
p$1.open$java_io_File.apply(this, [file]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_FileDescriptor', function (fdObj) {
Clazz.super_(C$, this);
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
file.秘bytes=bytes;
this.is=Clazz.new_($I$(5,1).c$$BA,[bytes]);
}, p$1);

Clazz.newMeth(C$, 'read$', function () {
return (this.channel == null  ? this.is.read$() : this.channel.read$());
});

Clazz.newMeth(C$, 'readBytes$BA$I$I', function (b, off, len) {
return this.channel == null  ? this.is.read$BA$I$I(b, off, len) : this.channel.readBytes$BA$I$I(b, off, len);
}, p$1);

Clazz.newMeth(C$, 'read$BA', function (b) {
return p$1.readBytes$BA$I$I.apply(this, [b, 0, b.length]);
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
return p$1.readBytes$BA$I$I.apply(this, [b, off, len]);
});

Clazz.newMeth(C$, 'skip$J', function (n) {
return this.channel == null  ? this.is.skip$J(n) : this.channel.skip$J(n);
});

Clazz.newMeth(C$, 'available$', function () {
return this.channel == null  ? this.is.available$() : this.channel.available$();
});

Clazz.newMeth(C$, 'close$', function () {
if (this.closed) {
return;
}this.closed=true;
this.fd.closeAll$java_io_Closeable(((P$.FileInputStream$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileInputStream$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Closeable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'close$', function () {
if (this.b$['java.io.FileInputStream'].channel == null ) {
this.b$['java.io.FileInputStream'].is.close$();
} else {
this.b$['java.io.FileInputStream'].channel.close$();
}});
})()
), Clazz.new_(P$.FileInputStream$1.$init$,[this, null])));
});

Clazz.newMeth(C$, 'getFD$', function () {
if (this.fd != null ) {
return this.fd;
}throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'getChannel$', function () {
{
if (this.channel == null ) {
try {
this.fd._setPosAndLen$I$I(this.is.pos, this.is.pos + this.is.available$());
this.channel=$I$(6).open$java_io_FileDescriptor$S$Z$Z$O(this.fd, this.path, true, false, this);
this.is=null;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
}return this.channel;
}});

Clazz.newMeth(C$, 'finalize$', function () {
if ((this.fd != null ) && (this.fd !== $I$(3).$in ) ) {
this.close$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
