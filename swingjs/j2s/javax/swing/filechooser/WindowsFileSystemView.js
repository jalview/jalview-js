(function(){var P$=Clazz.newPackage("javax.swing.filechooser"),I$=[[0,'javax.swing.filechooser.GenericFileSystemView','java.lang.ref.WeakReference','java.io.File',['javax.swing.filechooser.FileSystemView','.FileSystemRoot'],'javax.swing.UIManager','java.text.MessageFormat','java.security.AccessController']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WindowsFileSystemView", null, 'javax.swing.filechooser.FileSystemView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['newFolderString','newFolderNextString']]]

Clazz.newMeth(C$, 'isTraversable$java_io_File', function (f) {
return Boolean.valueOf$Z(this.isFileSystemRoot$java_io_File(f) || this.isComputerNode$java_io_File(f) || f.isDirectory$()  );
});

Clazz.newMeth(C$, 'getChild$java_io_File$S', function (parent, fileName) {
if (fileName.startsWith$S("\\") && !fileName.startsWith$S("\\\\") && this.isFileSystem$java_io_File(parent)  ) {
var path=parent.getAbsolutePath$();
if (path.length$() >= 2 && path.charAt$I(1) == ":"  && Character.isLetter$C(path.charAt$I(0)) ) {
return this.createFileObject$S(path.substring$I$I(0, 2) + fileName);
}}return C$.superclazz.prototype.getChild$java_io_File$S.apply(this, [parent, fileName]);
});

Clazz.newMeth(C$, 'getSystemTypeDescription$java_io_File', function (f) {
if (f == null ) {
return null;
}return f.toString();
});

Clazz.newMeth(C$, 'getHomeDirectory$', function () {
var roots=this.getRoots$();
return (roots.length == 0) ? null : roots[0];
});

Clazz.newMeth(C$, 'createNewFolder$java_io_File', function (containingDir) {
if (containingDir == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Containing directory is null:"]);
}var newFolder=this.createFileObject$java_io_File$S(containingDir, C$.newFolderString);
var i=2;
while (newFolder.exists$() && i < 100 ){
newFolder=this.createFileObject$java_io_File$S(containingDir, $I$(6,"format$S$OA",[C$.newFolderNextString, Clazz.array(java.lang.Object, -1, [ new Integer(i)])]));
i++;
}
if (newFolder.exists$()) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Directory already exists:" + newFolder.getAbsolutePath$()]);
} else {
newFolder.mkdirs$();
}return newFolder;
});

Clazz.newMeth(C$, 'isDrive$java_io_File', function (dir) {
return this.isFileSystemRoot$java_io_File(dir);
});

Clazz.newMeth(C$, 'isFloppyDrive$java_io_File', function (dir) {
var path=$I$(7,"doPrivileged$java_security_PrivilegedAction",[((P$.WindowsFileSystemView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "WindowsFileSystemView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
return this.$finals$.dir.getAbsolutePath$();
});
})()
), Clazz.new_(P$.WindowsFileSystemView$1.$init$,[this, {dir:dir}]))]);
return path != null  && (path.equals$O("A:\\") || path.equals$O("B:\\") ) ;
});

Clazz.newMeth(C$, 'createFileObject$S', function (path) {
if (path.length$() >= 2 && path.charAt$I(1) == ":"  && Character.isLetter$C(path.charAt$I(0)) ) {
if (path.length$() == 2) {
path += "\\";
} else if (path.charAt$I(2) != "\\") {
path=path.substring$I$I(0, 2) + "\\" + path.substring$I(2) ;
}}return C$.superclazz.prototype.createFileObject$S.apply(this, [path]);
});

Clazz.newMeth(C$, 'createFileSystemRoot$java_io_File', function (f) {
return ((P$.WindowsFileSystemView$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "WindowsFileSystemView$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['javax.swing.filechooser.FileSystemView','.FileSystemRoot']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'exists$', function () {
return true;
});
})()
), Clazz.new_($I$(4,1).c$$java_io_File,[this, null, f],P$.WindowsFileSystemView$2));
});

C$.$static$=function(){C$.$static$=0;
C$.newFolderString=$I$(5).getString$O("FileChooser.win32.newFolder");
C$.newFolderNextString=$I$(5).getString$O("FileChooser.win32.newFolder.subsequent");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-07-27 14:31:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
