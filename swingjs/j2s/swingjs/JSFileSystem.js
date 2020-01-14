(function(){var P$=Clazz.newPackage("swingjs"),p$1={},p$2={},I$=[[0,['swingjs.JSFileSystem','.JSByteChannel'],'java.io.File','java.util.HashSet','java.nio.file.StandardOpenOption','java.nio.channels.FileChannel','swingjs.JSUtil',['swingjs.JSFileSystem','.JSMappedByteBuffer'],['swingjs.JSFileSystem','.JSFileLock'],'java.nio.file.attribute.FileTime','java.util.Arrays','javajs.util.AU','java.io.BufferedInputStream','java.io.ByteArrayInputStream',['swingjs.JSFileSystem','.JSFileAttributes'],'java.net.URI',['swingjs.JSFileSystem','.JSPathIterator'],'java.util.Hashtable','swingjs.JSFileSystem',['swingjs.JSFileSystem','.JSFileChannel'],['swingjs.JSFileSystem','.JSPath'],['swingjs.JSFileSystem','.JSFileSystemProvider']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSFileSystem", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.nio.file.FileSystem');
C$.views=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.scheme=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (scheme) {
Clazz.super_(C$, this,1);
this.scheme=scheme;
}, 1);

Clazz.newMeth(C$, 'close$', function () {
});

Clazz.newMeth(C$, 'isOpen$', function () {
return true;
});

Clazz.newMeth(C$, 'isReadOnly$', function () {
return false;
});

Clazz.newMeth(C$, 'getSeparator$', function () {
return "/";
});

Clazz.newMeth(C$, 'getRootDirectories$', function () {
C$.ni$();
return null;
});

Clazz.newMeth(C$, 'getFileStores$', function () {
C$.ni$();
return null;
});

Clazz.newMeth(C$, 'supportedFileAttributeViews$', function () {
if (C$.views == null ) {
C$.views=Clazz.new_($I$(3));
C$.views.add$TE("basic");
}return C$.views;
});

Clazz.newMeth(C$, 'getPath$S$SA', function (first, more) {
if (more != null ) first=(first == null  ? "" : first + "/") + (more.join("/")||"");
return Clazz.new_($I$(20).c$$S$swingjs_JSFileSystem, [this, null, first, this]);
});

Clazz.newMeth(C$, 'getPathMatcher$S', function (syntaxAndPattern) {
C$.ni$();
return null;
});

Clazz.newMeth(C$, 'getUserPrincipalLookupService$', function () {
C$.ni$();
return null;
});

Clazz.newMeth(C$, 'newWatchService$', function () {
C$.ni$();
return null;
});

Clazz.newMeth(C$, 'provider$', function () {
return Clazz.new_($I$(21));
});

Clazz.newMeth(C$, 'ni$', function () {
$I$(6).notImplemented$S("JSFileSystem");
}, 1);
;
(function(){var C$=Clazz.newClass(P$.JSFileSystem, "JSMappedByteBuffer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.MappedByteBuffer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I$I$I$I$java_io_FileDescriptor', function (hb, mark, pos, lim, cap, off, fd) {
C$.superclazz.c$$BA$I$I$I$I$I$java_io_FileDescriptor.apply(this, [hb, mark, pos, lim, cap, off, fd]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSFileSystem, "JSFileLock", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.channels.FileLock');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_AsynchronousFileChannel$J$J$Z', function (channel, position, size, shared) {
C$.superclazz.c$$java_nio_channels_AsynchronousFileChannel$J$J$Z.apply(this, [channel, position, size, shared]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_FileChannel$J$J$Z', function (channel, position, size, shared) {
C$.superclazz.c$$java_nio_channels_FileChannel$J$J$Z.apply(this, [channel, position, size, shared]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isValid$', function () {
return true;
});

Clazz.newMeth(C$, 'release$', function () {
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSFileSystem, "JSFileChannel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.channels.FileChannel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fd=null;
this.parent=null;
this.path=null;
this.bc=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'open$java_io_FileDescriptor$S$Z$Z$O', function (fd, path, readable, writable, parent) {
return Clazz.new_(C$.c$$java_io_FileDescriptor$S$Z$Z$Z$O,[fd, path, readable, writable, false, parent]);
}, 1);

Clazz.newMeth(C$, 'open$java_io_FileDescriptor$S$Z$Z$Z$O', function (fd, path, readable, writable, append, parent) {
return Clazz.new_(C$.c$$java_io_FileDescriptor$S$Z$Z$Z$O,[fd, path, readable, writable, append, parent]);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA', function (path, options, attrs) {
Clazz.super_(C$, this,1);
this.fd=null;
this.parent=null;
this.path=path;
try {
this.bc=Clazz.new_($I$(1).c$$swingjs_JSFileSystem_JSPath$java_util_Set$java_nio_file_attribute_FileAttributeA,[this.path, options, attrs]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.nio.file.FileAlreadyExistsException")){
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$java_io_FileDescriptor$S$Z$Z$Z$O', function (fd, path, readable, writable, append, parent) {
Clazz.super_(C$, this,1);
this.fd=fd;
this.parent=parent;
this.path=Clazz.new_($I$(2).c$$S,[path]).toPath$();
var options=Clazz.new_($I$(3));
if (readable) options.add$TE($I$(4).READ);
if (writable) {
options.add$TE($I$(4).WRITE);
options.add$TE($I$(4).CREATE);
}if (append) options.add$TE($I$(4).APPEND);
try {
this.bc=Clazz.new_($I$(1).c$$swingjs_JSFileSystem_JSPath$java_util_Set$java_nio_file_attribute_FileAttributeA,[this.path, options, $I$(5).NO_ATTRIBUTES]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.nio.file.FileAlreadyExistsException")){
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'read$java_nio_ByteBuffer', function (dst) {
return this.bc.read$java_nio_ByteBuffer(dst);
});

Clazz.newMeth(C$, 'read$java_nio_ByteBufferA$I$I', function (dsts, offset, length) {
var ntotal=0;
for (var n0=length, i=offset; i < dsts.length && ntotal < n0 ; i++) {
var n=this.bc.read$java_nio_ByteBuffer$I$I$Z(dsts[i], length, this.bc.pos, true);
if (n < 0) break;
ntotal+=n;
length-=n;
}
return ntotal;
});

Clazz.newMeth(C$, 'write$java_nio_ByteBuffer', function (src) {
return this.bc.write$java_nio_ByteBuffer(src);
});

Clazz.newMeth(C$, 'write$java_nio_ByteBufferA$I$I', function (srcs, offset, length) {
var ntotal=0;
for (var n0=length, i=offset; i < srcs.length && ntotal < n0 ; i++) {
var n=p$1.write$java_nio_ByteBuffer$I.apply(this.bc, [srcs[i], Math.min(length, srcs[i].remaining$())]);
ntotal+=n;
length-=n;
}
return ntotal;
});

Clazz.newMeth(C$, 'position$', function () {
return this.bc.position$();
});

Clazz.newMeth(C$, 'position$J', function (newPosition) {
this.bc.position$J(newPosition);
return this;
});

Clazz.newMeth(C$, 'size$', function () {
return this.bc.size$();
});

Clazz.newMeth(C$, 'truncate$J', function (size) {
this.bc.len=(size|0);
return this;
});

Clazz.newMeth(C$, 'force$Z', function (metaData) {
this.path._bytes=this.bc._bytes;
$I$(6).cacheFileData$S$O(this.path.name, this.path._bytes);
});

Clazz.newMeth(C$, 'transferTo$J$J$java_nio_channels_WritableByteChannel', function (position, count, target) {
var n=this.bc.transferTo$I$swingjs_JSFileSystem_JSByteChannel$I$I$Z((position|0), (target), (target).pos, (count|0), false);
return n;
});

Clazz.newMeth(C$, 'transferFrom$java_nio_channels_ReadableByteChannel$J$J', function (src, position, count) {
return (src).transferTo$I$swingjs_JSFileSystem_JSByteChannel$I$I$Z((src).pos, this.bc, (position|0), (count|0), true);
});

Clazz.newMeth(C$, 'read$java_nio_ByteBuffer$J', function (dst, position) {
return this.bc.read$java_nio_ByteBuffer$I$I$Z(dst, dst.position$(), (position|0), false);
});

Clazz.newMeth(C$, 'write$java_nio_ByteBuffer$J', function (src, position) {
return p$1._get$BA$I$I$I$Z.apply(this.bc, [src.array$(), src.arrayOffset$() + src.position$(), (position|0), src.remaining$(), false]);
});

Clazz.newMeth(C$, 'map$java_nio_channels_FileChannel_MapMode$J$J', function (mode, position, size) {
P$.JSFileSystem.ni$();
return Clazz.new_($I$(7).c$$BA$I$I$I$I$I$java_io_FileDescriptor,[this.bc._bytes, -1, (position|0), (size|0), (size|0), 0, this.fd]);
});

Clazz.newMeth(C$, 'lock$J$J$Z', function (position, size, shared) {
P$.JSFileSystem.ni$();
return Clazz.new_($I$(8).c$$java_nio_channels_FileChannel$J$J$Z,[this, position, size, shared]);
});

Clazz.newMeth(C$, 'tryLock$J$J$Z', function (position, size, shared) {
P$.JSFileSystem.ni$();
return Clazz.new_($I$(8).c$$java_nio_channels_FileChannel$J$J$Z,[this, position, size, shared]);
});

Clazz.newMeth(C$, 'implCloseChannel$', function () {
this.bc.close$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSFileSystem, "JSFileAttributes", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.nio.file.attribute.BasicFileAttributes');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lastModified=null;
this.lastAccessed=null;
this.created=null;
this.channel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_JSFileSystem_JSByteChannel', function (channel) {
C$.$init$.apply(this);
this.channel=channel;
}, 1);

Clazz.newMeth(C$, 'lastModifiedTime$', function () {
return (this.lastModified == null  ? $I$(9).fromMillis$J(this.channel.tMod) : this.lastModified);
});

Clazz.newMeth(C$, 'lastAccessTime$', function () {
return (this.lastAccessed == null  ? $I$(9).fromMillis$J(this.channel.tAccess) : this.lastAccessed);
});

Clazz.newMeth(C$, 'creationTime$', function () {
return (this.created == null  ? $I$(9).fromMillis$J(this.channel.tCreate) : this.created);
});

Clazz.newMeth(C$, 'isRegularFile$', function () {
return true;
});

Clazz.newMeth(C$, 'isDirectory$', function () {
return false;
});

Clazz.newMeth(C$, 'isSymbolicLink$', function () {
return false;
});

Clazz.newMeth(C$, 'isOther$', function () {
return false;
});

Clazz.newMeth(C$, 'size$', function () {
try {
return this.channel.size$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return 0;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'fileKey$', function () {
return this.channel.path.name;
});
})()
;
(function(){var C$=Clazz.newClass(P$.JSFileSystem, "JSFileAttribute", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.nio.file.attribute.FileAttribute');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.value=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$S$TT'], function (name, value) {
C$.$init$.apply(this);
this.name=name;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'name$', function () {
return this.name;
});

Clazz.newMeth(C$, 'value$', function () {
return this.value;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSFileSystem, "JSByteChannel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.nio.channels.SeekableByteChannel', 'java.nio.channels.WritableByteChannel', 'java.nio.channels.ReadableByteChannel', 'java.nio.file.attribute.BasicFileAttributeView']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tCreate=0;
this.tMod=0;
this.tAccess=0;
this.path=null;
this._bytes=null;
this.bis=null;
this.pos=0;
this.len=0;
this.attrs=null;
this.open=false;
this.append=false;
this.write=false;
this.$delete=false;
this.fsAttrs=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_JSFileSystem_JSPath$java_util_Set$java_nio_file_attribute_FileAttributeA', function (path, options, attrs) {
C$.$init$.apply(this);
this.path=path;
this.attrs=attrs;
this.write=options.contains$O($I$(4).WRITE);
this.append=options.contains$O($I$(4).APPEND);
this.$delete=options.contains$O($I$(4).DELETE_ON_CLOSE);
var truncate=options.contains$O($I$(4).TRUNCATE_EXISTING);
var create=options.contains$O($I$(4).CREATE);
var createNew=options.contains$O($I$(4).CREATE_NEW);
if (this.append) {
this.write=true;
this.pos=this.len=p$1.getBytes.apply(this, []).length;
} else if (this.write) {
if (create || createNew ) {
if (createNew) {
var b=$I$(6).getFileAsBytes$O$Z(path.name, true);
if (b != null ) throw Clazz.new_(Clazz.load('java.nio.file.FileAlreadyExistsException').c$$S,[path.name]);
}path._bytes=null;
$I$(6).cacheFileData$S$O(path.name, null);
} else if (truncate) {
path._bytes=null;
}if (path._bytes == null ) {
this._bytes=Clazz.array(Byte.TYPE, [4096]);
} else {
p$1.getBytes.apply(this, []);
}}}, 1);

Clazz.newMeth(C$, 'isOpen$', function () {
return this.open;
});

Clazz.newMeth(C$, 'close$', function () {
this.open=false;
if (this.$delete) {
this._bytes=null;
$I$(6).cacheFileData$S$O(this.path.name, null);
} else if (this.write) {
if (this.len < this._bytes.length) this._bytes=$I$(10).copyOf$BA$I(this._bytes, this.len);
this.path._bytes=this._bytes;
$I$(6).cacheFileData$S$O(this.path.name, this._bytes);
$I$(6).saveFile$S$O$S$S(this.path.name, this._bytes, null, null);
}});

Clazz.newMeth(C$, 'read$java_nio_ByteBuffer', function (dst) {
return this.read$java_nio_ByteBuffer$I$I$Z(dst, dst.remaining$(), this.pos, true);
});

Clazz.newMeth(C$, 'read$java_nio_ByteBuffer$I$I$Z', function (dst, n, pos, updatePos) {
n=Math.min(dst.remaining$(), Math.min(this.len - pos, n));
if (n <= 0) return -1;
System.arraycopy$O$I$O$I$I(this._bytes, pos, dst.array$(), dst.arrayOffset$() + dst.position$(), n);
dst.position$I(dst.position$() + n);
if (updatePos) this.pos+=n;
return n;
});

Clazz.newMeth(C$, 'write$java_nio_ByteBuffer', function (src) {
return p$1.write$java_nio_ByteBuffer$I.apply(this, [src, src.remaining$()]);
});

Clazz.newMeth(C$, 'write$java_nio_ByteBuffer$I', function (src, n) {
return p$1._get$BA$I$I$I$Z.apply(this, [src.array$(), src.position$() + src.arrayOffset$(), this.pos, n, true]);
}, p$1);

Clazz.newMeth(C$, 'transferTo$I$swingjs_JSFileSystem_JSByteChannel$I$I$Z', function (fromPos, bc, toPos, n, updatePos) {
n=Math.min(this.len - fromPos, n);
return p$1._get$BA$I$I$I$Z.apply(bc, [this._bytes, fromPos, toPos, n, updatePos]);
});

Clazz.newMeth(C$, '_get$BA$I$I$I$Z', function (array, from, to, n, updatePos) {
if (to + n > p$1.getBytes.apply(this, []).length) this._bytes=$I$(11).ensureLengthByte$BA$I(this._bytes, (to + n) * 2);
System.arraycopy$O$I$O$I$I(array, from, this._bytes, to, n);
this.pos+=n;
if (this.pos > this.len) this.len=this.pos;
if (!updatePos) this.pos-=n;
return n;
}, p$1);

Clazz.newMeth(C$, 'getBytes', function () {
if (this._bytes == null ) this._bytes=this.path._bytes;
if (this._bytes == null ) {
this._bytes=$I$(6).getFileAsBytes$O(this.path.toString());
this.len=this._bytes.length;
}return this._bytes;
}, p$1);

Clazz.newMeth(C$, 'size$', function () {
return this.len;
});

Clazz.newMeth(C$, 'getInputStream$', function () {
return (this.bis == null  ? (this.bis=Clazz.new_($I$(12).c$$java_io_InputStream,[Clazz.new_($I$(13).c$$BA,[p$1.getBytes.apply(this, [])])])) : this.bis);
});

Clazz.newMeth(C$, 'truncate$J', function (size) {
P$.JSFileSystem.ni$();
return null;
});

Clazz.newMeth(C$, 'position$', function () {
return this.pos;
});

Clazz.newMeth(C$, 'position$J', function (newPosition) {
this.pos=(newPosition|0);
return this;
});

Clazz.newMeth(C$, 'name$', function () {
return "basic";
});

Clazz.newMeth(C$, 'readAttributes$', function () {
return p$1.getFileAttrs.apply(this, []);
});

Clazz.newMeth(C$, 'setTimes$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime', function (lastModifiedTime, lastAccessTime, createTime) {
p$1.getFileAttrs.apply(this, []);
this.fsAttrs.lastModified=lastModifiedTime;
this.fsAttrs.lastAccessed=lastAccessTime;
this.fsAttrs.created=createTime;
});

Clazz.newMeth(C$, 'getFileAttrs', function () {
return (this.fsAttrs == null  ? (this.fsAttrs=Clazz.new_($I$(14).c$$swingjs_JSFileSystem_JSByteChannel,[this])) : this.fsAttrs);
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSFileSystem, "JSPathIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.index=0;
this.array=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_JSFileSystem_JSPath', function (jsPath) {
C$.$init$.apply(this);
this.index=(jsPath.isAbsolute$() ? 2 : 0);
this.array=p$2.getNameArray.apply(jsPath, []);
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.index < this.array.length;
});

Clazz.newMeth(C$, 'next$', function () {
return this.this$0.getPath$S$SA.apply(this.this$0, [this.array[this.index++], []]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSFileSystem, "JSPath", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.nio.file.Path');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.fileSystem=null;
this.nameArray=null;
this._bytes=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getNameArray', function () {
if (this.nameArray == null ) this.nameArray=(name.split('/') ||null);
return this.nameArray;
}, p$2);

Clazz.newMeth(C$, 'c$$S$swingjs_JSFileSystem', function (name, jsFileSystem) {
C$.$init$.apply(this);
this.name=name;
this.fileSystem=jsFileSystem;
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_Path', function (jsPath) {
C$.$init$.apply(this);
this.name=(jsPath).name;
this.fileSystem=(jsPath).fileSystem;
this.nameArray=(jsPath).nameArray;
}, 1);

Clazz.newMeth(C$, 'getFileSystem$', function () {
return this.fileSystem;
});

Clazz.newMeth(C$, 'isAbsolute$', function () {
return this.name.indexOf$S(this.fileSystem.scheme + "://") == 0;
});

Clazz.newMeth(C$, 'getRoot$', function () {
if (!this.isAbsolute$()) return null;
return Clazz.new_(C$.c$$S$swingjs_JSFileSystem, [this, null, this.fileSystem.scheme + "://", this.fileSystem]);
});

Clazz.newMeth(C$, 'getFileName$', function () {
return Clazz.new_(C$.c$$S$swingjs_JSFileSystem, [this, null, this.name.substring$I(this.name.lastIndexOf$I("/") + 1), this.fileSystem]);
});

Clazz.newMeth(C$, 'getParent$', function () {
var pt=this.name.lastIndexOf$I("/");
return Clazz.new_(C$.c$$S$swingjs_JSFileSystem, [this, null, this.name.substring$I$I(0, Math.max(0, pt)), this.fileSystem]);
});

Clazz.newMeth(C$, 'getNameCount$', function () {
return p$2.getNameArray.apply(this, []).length - (this.isAbsolute$() ? 2 : 0);
});

Clazz.newMeth(C$, 'getName$I', function (index) {
return Clazz.new_(C$.c$$S$swingjs_JSFileSystem, [this, null, p$2.getNameArray.apply(this, [])[p$2.adjustIndex$I.apply(this, [index])], this.fileSystem]);
});

Clazz.newMeth(C$, 'adjustIndex$I', function (index) {
var len=p$2.getNameArray.apply(this, []).length;
if (index < 0 || index >= len ) throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException'));
return this.isAbsolute$() ? index + 2 : index;
}, p$2);

Clazz.newMeth(C$, 'subpath$I$I', function (beginIndex, endIndex) {
return p$2.subpath$S$I$I.apply(this, [null, beginIndex, endIndex]);
});

Clazz.newMeth(C$, 'subpath$S$I$I', function (pre, beginIndex, endIndex) {
return this.this$0.getPath$S$SA.apply(this.this$0, [pre, $I$(10).copyOfRange$TTA$I$I(p$2.getNameArray.apply(this, []), p$2.adjustIndex$I.apply(this, [beginIndex]), p$2.adjustIndex$I.apply(this, [endIndex]))]);
}, p$2);

Clazz.newMeth(C$, 'startsWith$java_nio_file_Path', function (other) {
return (this.name.startsWith$S((other).name));
});

Clazz.newMeth(C$, 'startsWith$S', function (other) {
return this.name.startsWith$S(other);
});

Clazz.newMeth(C$, 'endsWith$java_nio_file_Path', function (other) {
return this.name.endsWith$S((other).name);
});

Clazz.newMeth(C$, 'endsWith$S', function (other) {
return this.name.endsWith$S(other);
});

Clazz.newMeth(C$, 'normalize$', function () {
return Clazz.new_(C$.c$$java_nio_file_Path, [this, null, this]);
});

Clazz.newMeth(C$, 'resolve$java_nio_file_Path', function (other) {
if (other.isAbsolute$()) return Clazz.new_(C$.c$$java_nio_file_Path, [this, null, other]);
return Clazz.new_(C$.c$$S$swingjs_JSFileSystem, [this, null, this.name + "/" + (other).name , this.fileSystem]);
});

Clazz.newMeth(C$, 'resolve$S', function (other) {
return this.resolve$java_nio_file_Path(Clazz.new_(C$.c$$S$swingjs_JSFileSystem, [this, null, other, this.fileSystem]));
});

Clazz.newMeth(C$, 'resolveSibling$java_nio_file_Path', function (other) {
return this.getParent$().resolve$java_nio_file_Path(other);
});

Clazz.newMeth(C$, 'resolveSibling$S', function (other) {
return this.getParent$().resolve$S(other);
});

Clazz.newMeth(C$, 'relativize$java_nio_file_Path', function (other) {
if (this.equals$O(other)) return Clazz.new_(C$.c$$S$swingjs_JSFileSystem, [this, null, "", this.fileSystem]);
if (this.isAbsolute$() != other.isAbsolute$() ) return null;
var oname=(other).name;
if (oname.startsWith$S(this.name + "/")) return Clazz.new_(C$.c$$S$swingjs_JSFileSystem, [this, null, "." + oname.substring$I(this.name.length$()), this.fileSystem]);
var a=p$2.getNameArray.apply((this.getParent$()), []);
var b=p$2.getNameArray.apply((other.getParent$()), []);
var c=Clazz.array(String, [Math.max(a.length, b.length)]);
var min=Math.min(a.length, b.length);
var firstDiff=0;
for (; firstDiff < min; firstDiff++) {
if (a[firstDiff] != b[firstDiff]) break;
}
var s;
if (firstDiff == min && a.length <= b.length ) {
s="/.";
} else {
s="";
for (var i=a.length - firstDiff; --i >= 0; ) s += "/..";

}return this.this$0.getPath$S$SA.apply(this.this$0, [s.substring$I(1), (other.subpath$I$I(firstDiff, other.getNameCount$())).nameArray]);
});

Clazz.newMeth(C$, 'toUri$', function () {
try {
return Clazz.new_($I$(15).c$$S,[this.isAbsolute$() ? this.name : "http://./" + this.name]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toAbsolutePath$', function () {
var path=this.this$0.getPath$S$SA.apply(this.this$0, [this.isAbsolute$() ? this.name : "http://./" + this.name, []]);
(path)._bytes=this._bytes;
return path;
});

Clazz.newMeth(C$, 'toRealPath$java_nio_file_LinkOptionA', function (options) {
return this;
});

Clazz.newMeth(C$, 'toFile$', function () {
var f=Clazz.new_($I$(2).c$$S,[this.name]);
f._bytes=this._bytes;
return f;
});

Clazz.newMeth(C$, 'register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA$java_nio_file_WatchEvent_ModifierA', function (watcher, events, modifiers) {
P$.JSFileSystem.ni$();
return null;
});

Clazz.newMeth(C$, 'register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA', function (watcher, events) {
P$.JSFileSystem.ni$();
return null;
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(16).c$$swingjs_JSFileSystem_JSPath, [this, null, this]);
});

Clazz.newMeth(C$, ['compareTo$java_nio_file_Path','compareTo$','compareTo$TT'], function (other) {
return 0;
});

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$, 'setAttribute$S$O', function (attribute, value) {
});
})()
;
(function(){var C$=Clazz.newClass(P$.JSFileSystem, "JSFileSystemProvider", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.file.spi.FileSystemProvider');
C$.fsMap=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.fsMap=Clazz.new_($I$(17));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getScheme$', function () {
return null;
});

Clazz.newMeth(C$, 'newFileSystem$java_net_URI$java_util_Map', function (uri, env) {
var scheme=uri.getScheme$();
var fs=C$.fsMap.get$O(scheme);
if (fs == null ) C$.fsMap.put$TK$TV(scheme, fs=Clazz.new_($I$(18).c$$S,[scheme]));
return fs;
});

Clazz.newMeth(C$, 'getFileSystem$java_net_URI', function (uri) {
try {
return this.newFileSystem$java_net_URI$java_util_Map(uri, null);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'getPath$java_net_URI', function (uri) {
return this.getFileSystem$java_net_URI(uri).getPath$S$SA(uri.toString(), []);
});

Clazz.newMeth(C$, 'newByteChannel$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA', function (path, options, attrs) {
return Clazz.new_($I$(1).c$$swingjs_JSFileSystem_JSPath$java_util_Set$java_nio_file_attribute_FileAttributeA,[path, options, attrs]);
});

Clazz.newMeth(C$, 'newFileChannel$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA', function (path, options, attrs) {
return Clazz.new_($I$(19).c$$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA,[path, options, attrs]);
});

Clazz.newMeth(C$, 'newDirectoryStream$java_nio_file_Path$java_nio_file_DirectoryStream_Filter', function (dir, filter) {
P$.JSFileSystem.ni$();
return null;
});

Clazz.newMeth(C$, 'createDirectory$java_nio_file_Path$java_nio_file_attribute_FileAttributeA', function (dir, attrs) {
P$.JSFileSystem.ni$();
throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'delete$java_nio_file_Path', function (path) {
P$.JSFileSystem.ni$();
});

Clazz.newMeth(C$, 'copy$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA', function (source, target, options) {
P$.JSFileSystem.ni$();
throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'move$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA', function (source, target, options) {
P$.JSFileSystem.ni$();
throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'isSameFile$java_nio_file_Path$java_nio_file_Path', function (path, path2) {
return (path.toString() == path2.toString());
});

Clazz.newMeth(C$, 'isHidden$java_nio_file_Path', function (path) {
return false;
});

Clazz.newMeth(C$, 'getFileStore$java_nio_file_Path', function (path) {
P$.JSFileSystem.ni$();
return null;
});

Clazz.newMeth(C$, 'checkAccess$java_nio_file_Path$java_nio_file_AccessModeA', function (path, modes) {
P$.JSFileSystem.ni$();
});

Clazz.newMeth(C$, 'getFileAttributeView$java_nio_file_Path$Class$java_nio_file_LinkOptionA', function (path, type, options) {
P$.JSFileSystem.ni$();
return null;
});

Clazz.newMeth(C$, 'readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA', function (path, type, options) {
P$.JSFileSystem.ni$();
throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'readAttributes$java_nio_file_Path$S$java_nio_file_LinkOptionA', function (path, attributes, options) {
P$.JSFileSystem.ni$();
throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'setAttribute$java_nio_file_Path$S$O$java_nio_file_LinkOptionA', function (path, attribute, value, options) {
(path).setAttribute$S$O(attribute, value);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:42 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
