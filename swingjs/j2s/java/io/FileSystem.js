(function(){var P$=java.io,p$1={},I$=[[0,'swingjs.JSUtil']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileSystem");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getFileSystem$', function () {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'getSeparator$', function () {
return "/";
});

Clazz.newMeth(C$, 'getPathSeparator$', function () {
return "/";
});

Clazz.newMeth(C$, 'delete$java_io_File', function (f) {
f.秘bytes=null;
$I$(1,"removeCachedFileData$S",[f.toPath$().toString()]);
return true;
});

Clazz.newMeth(C$, 'list$java_io_File', function (f) {
return null;
});

Clazz.newMeth(C$, 'getBooleanAttributes$java_io_File', function (file) {
return (this._isDir$java_io_File(file) ? 4 : 0) | (this._exists$java_io_File(file) ? 1 : 0) | (p$1._regular$java_io_File.apply(this, [file]) ? 2 : 0) | (p$1._hidden$java_io_File.apply(this, [file]) ? 8 : 0) ;
});

Clazz.newMeth(C$, '_hidden$java_io_File', function (file) {
return false;
}, p$1);

Clazz.newMeth(C$, '_regular$java_io_File', function (file) {
return !this._isDir$java_io_File(file);
}, p$1);

Clazz.newMeth(C$, '_exists$java_io_File', function (file) {
return (file.秘bytes != null  || (file.秘bytes=$I$(1).getFileAsBytes$O(file)) != null  );
});

Clazz.newMeth(C$, '_isDir$java_io_File', function (file) {
return (file.getPrefixLength$() == file.path.length$() || !this._exists$java_io_File(file) );
});

Clazz.newMeth(C$, 'prefixLength$S', function (path) {
return path.lastIndexOf$S("/") + 1;
});

Clazz.newMeth(C$, 'resolve$java_io_File', function (file) {
return file.path;
});

Clazz.newMeth(C$, 'getDefaultParent$', function () {
return "/";
});

Clazz.newMeth(C$, 'fromURIPath$S', function (path) {
if (path.startsWith$S("file://")) path=path.substring$I(7);
return path;
});

Clazz.newMeth(C$, 'isAbsolute$java_io_File', function (f) {
return f.getAbsolutePath$() == f.path;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
