(function(){var P$=java.io,p$1={},I$=[[0,'java.io.FileSystem','java.net.URI','Error','java.util.ArrayList','java.util.Random','swingjs.JSTempFile','java.nio.file.FileSystems']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "File", null, null, 'Comparable');
C$.fs=null;
C$.separatorChar='\0';
C$.separator=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.fs=$I$(1).getFileSystem$();
C$.separatorChar=C$.fs.getSeparator$();
C$.separator="" + C$.separatorChar;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._bytes=null;
this.path=null;
this.prefixLength=0;
this.lastModified=0;
this.filePath=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPrefixLength$', function () {
return this.prefixLength;
});

Clazz.newMeth(C$, 'c$$S$I', function (pathname, prefixLength) {
C$.$init$.apply(this);
this.path=pathname;
this.prefixLength=prefixLength;
}, 1);

Clazz.newMeth(C$, 'c$$S$java_io_File', function (child, parent) {
C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return parent.path != null });
Clazz.assert(C$, this, function(){return (!parent.path.equals$O(""))});
this.path=p$1.resolve$S$S.apply(this, [parent.path, child]);
this.prefixLength=parent.prefixLength;
}, 1);

Clazz.newMeth(C$, 'resolve$S$S', function (path, child) {
if (child.length$() > 0 && !path.endsWith$S("/") ) path += "/";
return path + child;
}, p$1);

Clazz.newMeth(C$, 'c$$S', function (pathname) {
C$.c$$S$S.apply(this, [pathname, ""]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (parent, child) {
C$.$init$.apply(this);
if (child == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (parent != null ) {
if (parent.equals$O("")) {
this.path=p$1.resolve$S$S.apply(this, [".", child]);
} else {
this.path=p$1.resolve$S$S.apply(this, [parent, child]);
}} else {
this.path=p$1.resolve$S$S.apply(this, [".", child]);
}this.prefixLength=this.path.lastIndexOf$S("/") + 1;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$S', function (parent, child) {
C$.c$$S$S.apply(this, [parent == null  ? null : parent.getPath$(), child]);
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
var index=this.path.lastIndexOf$I(C$.separatorChar);
if (index < this.prefixLength) return this.path.substring$I(this.prefixLength);
return this.path.substring$I(index + 1);
});

Clazz.newMeth(C$, 'getParent$', function () {
var index=this.path.lastIndexOf$I(C$.separatorChar);
if (index < this.prefixLength) {
if ((this.prefixLength > 0) && (this.path.length$() > this.prefixLength) ) return this.path.substring$I$I(0, this.prefixLength);
return null;
}return this.path.substring$I$I(0, index);
});

Clazz.newMeth(C$, 'getParentFile$', function () {
var p=this.getParent$();
if (p == null ) return null;
return Clazz.new_(C$.c$$S$I,[p, this.prefixLength]);
});

Clazz.newMeth(C$, 'getPath$', function () {
return this.path;
});

Clazz.newMeth(C$, 'isAbsolute$', function () {
switch (this.path.indexOf$S("/")) {
case 0:
return true;
case 2:
return this.path.indexOf$S(":") == 1;
}
return false;
});

Clazz.newMeth(C$, 'getAbsolutePath$', function () {
return this.path;
});

Clazz.newMeth(C$, 'getAbsoluteFile$', function () {
return this;
});

Clazz.newMeth(C$, 'getCanonicalPath$', function () {
return this.path.replace$C$C("\\", "/");
});

Clazz.newMeth(C$, 'getCanonicalFile$', function () {
return this;
});

Clazz.newMeth(C$, 'slashify$S$Z', function (path, isDirectory) {
var p=path;
p=p.replace$C$C("\\", "/");
if (!p.startsWith$S("/")) p="/" + p;
if (!p.endsWith$S("/") && isDirectory ) p=p + "/";
return p;
}, 1);

Clazz.newMeth(C$, 'toURI$', function () {
try {
var f=this.getAbsoluteFile$();
var sp=C$.slashify$S$Z(f.getPath$(), f.isDirectory$());
if (sp.startsWith$S("//")) sp="//" + sp;
return Clazz.new_($I$(2).c$$S$S$S$S,["file", null, sp, null]);
} catch (x) {
if (Clazz.exceptionOf(x,"java.net.URISyntaxException")){
throw Clazz.new_($I$(3).c$$Throwable,[x]);
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'canRead$', function () {
return true;
});

Clazz.newMeth(C$, 'canWrite$', function () {
return true;
});

Clazz.newMeth(C$, 'exists$', function () {
return true;
});

Clazz.newMeth(C$, 'isDirectory$', function () {
return true;
});

Clazz.newMeth(C$, 'isFile$', function () {
return true;
});

Clazz.newMeth(C$, 'length$', function () {
return (this._bytes ? this._bytes.length :0);
});

Clazz.newMeth(C$, 'createNewFile$', function () {
return true;
});

Clazz.newMeth(C$, 'delete$', function () {
return true;
});

Clazz.newMeth(C$, 'deleteOnExit$', function () {
});

Clazz.newMeth(C$, 'list$', function () {
throw Clazz.new_(Clazz.load('java.security.AccessControlException').c$$S,["access denied"]);
});

Clazz.newMeth(C$, 'list$java_io_FilenameFilter', function (filter) {
var names=this.list$();
if ((names == null ) || (filter == null ) ) {
return names;
}var v=Clazz.new_($I$(4));
for (var i=0; i < names.length; i++) {
if (filter.accept$(this, names[i])) {
v.add$TE(names[i]);
}}
return (v.toArray$TTA(Clazz.array(String, [v.size$()])));
});

Clazz.newMeth(C$, 'listFiles$', function () {
var ss=this.list$();
if (ss == null ) return null;
var n=ss.length;
var fs=Clazz.array(C$, [n]);
for (var i=0; i < n; i++) {
fs[i]=Clazz.new_(C$.c$$S$java_io_File,[ss[i], this]);
}
return fs;
});

Clazz.newMeth(C$, 'mkdir$', function () {
return true;
});

Clazz.newMeth(C$, 'mkdirs$', function () {
return true;
});

Clazz.newMeth(C$, 'renameTo$java_io_File', function (dest) {
this.path=dest.path;
return true;
});

Clazz.newMeth(C$, 'setLastModified$J', function (time) {
this.lastModified=time;
return true;
});

Clazz.newMeth(C$, 'setReadOnly$', function () {
return true;
});

Clazz.newMeth(C$, 'setWritable$Z$Z', function (writable, ownerOnly) {
return true;
});

Clazz.newMeth(C$, 'setWritable$Z', function (writable) {
return this.setWritable$Z$Z(writable, true);
});

Clazz.newMeth(C$, 'setReadable$Z$Z', function (readable, ownerOnly) {
return true;
});

Clazz.newMeth(C$, 'setReadable$Z', function (readable) {
return true;
});

Clazz.newMeth(C$, 'setExecutable$Z$Z', function (executable, ownerOnly) {
return false;
});

Clazz.newMeth(C$, 'setExecutable$Z', function (executable) {
return false;
});

Clazz.newMeth(C$, 'canExecute$', function () {
return false;
});

Clazz.newMeth(C$, 'generateFile$S$S$java_io_File', function (prefix, suffix, dir) {
var n=Clazz.new_($I$(5)).nextInt$();
if (n == -9223372036854775808) {
n=0;
} else {
n=Math.abs(n);
}return Clazz.new_($I$(6).c$$java_io_File$S,[dir, prefix + Long.toString$J(n) + suffix ]);
}, 1);

Clazz.newMeth(C$, 'createTempFile0$S$S$java_io_File$Z', function (prefix, suffix, directory, restrictive) {
if (prefix == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (prefix.length$() < 3) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Prefix string too short"]);
var s=(suffix == null ) ? ".tmp" : suffix;
directory=Clazz.new_(C$.c$$S,["/TEMP/" + (directory == null  ? "" : directory)]);
var f;
f=C$.generateFile$S$S$java_io_File(prefix, s, directory);
return f;
}, 1);

Clazz.newMeth(C$, 'createTempFile$S$S$java_io_File', function (prefix, suffix, directory) {
return C$.createTempFile0$S$S$java_io_File$Z(prefix, suffix, directory, false);
}, 1);

Clazz.newMeth(C$, 'createTempFile$S$S', function (prefix, suffix) {
return C$.createTempFile0$S$S$java_io_File$Z(prefix, suffix, null, false);
}, 1);

Clazz.newMeth(C$, ['compareTo$java_io_File','compareTo$','compareTo$TT'], function (pathname) {
return this.getPath$().compareTo$S(pathname.getPath$());
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if ((obj != null ) && (Clazz.instanceOf(obj, "java.io.File")) ) {
return this.compareTo$java_io_File(obj) == 0;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
try {
return this.getCanonicalPath$().hashCode$() | 1234321;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return 0;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toString', function () {
return this.getPath$();
});

Clazz.newMeth(C$, 'toPath$', function () {
var result=this.filePath;
if (result == null ) {
{
result=this.filePath;
if (result == null ) {
result=$I$(7).getDefault$().getPath$S$SA(this.path, []);
(result)._bytes=this._bytes;
this.filePath=result;
}}}return result;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
