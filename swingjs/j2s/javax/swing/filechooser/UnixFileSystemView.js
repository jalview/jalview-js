(function(){var P$=Clazz.newPackage("javax.swing.filechooser"),I$=[[0,'javax.swing.filechooser.GenericFileSystemView','java.lang.ref.WeakReference','java.io.File',['javax.swing.filechooser.FileSystemView','.FileSystemRoot'],'javax.swing.UIManager','java.text.MessageFormat','java.security.AccessController']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnixFileSystemView", null, 'javax.swing.filechooser.FileSystemView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['newFolderString','newFolderNextString']]]

Clazz.newMeth(C$, 'createNewFolder$java_io_File', function (containingDir) {
if (containingDir == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Containing directory is null:"]);
}var newFolder;
newFolder=this.createFileObject$java_io_File$S(containingDir, C$.newFolderString);
var i=1;
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

Clazz.newMeth(C$, 'isFileSystemRoot$java_io_File', function (dir) {
return dir != null  && dir.getAbsolutePath$().equals$O("/") ;
});

Clazz.newMeth(C$, 'isDrive$java_io_File', function (dir) {
return this.isFloppyDrive$java_io_File(dir);
});

Clazz.newMeth(C$, 'isFloppyDrive$java_io_File', function (dir) {
return false;
});

Clazz.newMeth(C$, 'isComputerNode$java_io_File', function (dir) {
if (dir != null ) {
var parent=dir.getParent$();
if (parent != null  && parent.equals$O("/net") ) {
return true;
}}return false;
});

C$.$static$=function(){C$.$static$=0;
C$.newFolderString=$I$(5).getString$O("FileChooser.other.newFolder");
C$.newFolderNextString=$I$(5).getString$O("FileChooser.other.newFolder.subsequent");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-07-27 14:31:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
