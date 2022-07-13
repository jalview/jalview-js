(function(){var P$=Clazz.newPackage("sun.awt.shell"),I$=[[0,'java.awt.Toolkit','sun.awt.shell.ShellFolderManager','Error','java.util.Vector','java.io.File','java.util.Collections','sun.awt.shell.ShellFolder','sun.awt.shell.ShellFolderColumnInfo','Thread']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ShellFolder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.io.File');
C$.$classes$=[['Invoker',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['parent','sun.awt.shell.ShellFolder']]
,['O',['shellFolderManager','sun.awt.shell.ShellFolderManager','invoker','sun.awt.shell.ShellFolder.Invoker','DEFAULT_COMPARATOR','java.util.Comparator','+FILE_COMPARATOR']]]

Clazz.newMeth(C$, 'c$$sun_awt_shell_ShellFolder$S', function (parent, pathname) {
;C$.superclazz.c$$S.apply(this,[(pathname != null ) ? pathname : "ShellFolder"]);C$.$init$.apply(this);
this.parent=parent;
}, 1);

Clazz.newMeth(C$, 'isFileSystem$', function () {
return (!this.getPath$().startsWith$S("ShellFolder"));
});

Clazz.newMeth(C$, 'getParent$', function () {
if (this.parent == null  && this.isFileSystem$() ) {
return C$.superclazz.prototype.getParent$.apply(this, []);
}if (this.parent != null ) {
return (this.parent.getPath$());
} else {
return null;
}});

Clazz.newMeth(C$, 'getParentFile$', function () {
if (this.parent != null ) {
return this.parent;
} else if (this.isFileSystem$()) {
return C$.superclazz.prototype.getParentFile$.apply(this, []);
} else {
return null;
}});

Clazz.newMeth(C$, 'listFiles$', function () {
return this.listFiles$Z(true);
});

Clazz.newMeth(C$, 'listFiles$Z', function (includeHiddenFiles) {
var files=C$.superclazz.prototype.listFiles$.apply(this, []);
if (!includeHiddenFiles) {
var v=Clazz.new_($I$(4,1));
var nameCount=(files == null ) ? 0 : files.length;
for (var i=0; i < nameCount; i++) {
if (!files[i].isHidden$()) {
v.addElement$O(files[i]);
}}
files=v.toArray$OA(Clazz.array($I$(5), [v.size$()]));
}return files;
});

Clazz.newMeth(C$, ['compareTo$java_io_File','compareTo$O'], function (file2) {
if (file2 == null  || !(Clazz.instanceOf(file2, "sun.awt.shell.ShellFolder"))  || ((Clazz.instanceOf(file2, "sun.awt.shell.ShellFolder")) && (file2).isFileSystem$() ) ) {
if (this.isFileSystem$()) {
return C$.superclazz.prototype.compareTo$java_io_File.apply(this, [file2]);
} else {
return -1;
}} else {
if (this.isFileSystem$()) {
return 1;
} else {
return this.getName$().compareTo$S(file2.getName$());
}}});

Clazz.newMeth(C$, 'getIcon$Z', function (getLargeIcon) {
return null;
});

Clazz.newMeth(C$, 'getShellFolder$java_io_File', function (file) {
if (Clazz.instanceOf(file, "sun.awt.shell.ShellFolder")) {
return file;
}if (!file.exists$()) {
throw Clazz.new_(Clazz.load('java.io.FileNotFoundException'));
}return C$.shellFolderManager.createShellFolder$java_io_File(file);
}, 1);

Clazz.newMeth(C$, 'get$S', function (key) {
return C$.shellFolderManager.get$S(key);
}, 1);

Clazz.newMeth(C$, 'isComputerNode$java_io_File', function (dir) {
return C$.shellFolderManager.isComputerNode$java_io_File(dir);
}, 1);

Clazz.newMeth(C$, 'isFileSystemRoot$java_io_File', function (dir) {
return C$.shellFolderManager.isFileSystemRoot$java_io_File(dir);
}, 1);

Clazz.newMeth(C$, 'getNormalizedFile$java_io_File', function (f) {
var canonical=f.getCanonicalFile$();
if (f.equals$O(canonical)) {
return canonical;
}return Clazz.new_([f.toURI$().normalize$()],$I$(5,1).c$$java_net_URI);
}, 1);

Clazz.newMeth(C$, 'sort$java_util_List', function (files) {
if (files == null  || files.size$() <= 1 ) {
return;
}C$.invoke$java_util_concurrent_Callable(((P$.ShellFolder$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ShellFolder$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.concurrent.Callable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'call$', function () {
var commonParent=null;
for (var file, $file = this.$finals$.files.iterator$(); $file.hasNext$()&&((file=($file.next$())),1);) {
var parent=file.getParentFile$();
if (parent == null  || !(Clazz.instanceOf(file, "sun.awt.shell.ShellFolder")) ) {
commonParent=null;
break;
}if (commonParent == null ) {
commonParent=parent;
} else {
if (commonParent !== parent  && !commonParent.equals$O(parent) ) {
commonParent=null;
break;
}}}
if (Clazz.instanceOf(commonParent, "sun.awt.shell.ShellFolder")) {
(commonParent).sortChildren$java_util_List(this.$finals$.files);
} else {
$I$(6,"sort$java_util_List$java_util_Comparator",[this.$finals$.files, $I$(7).FILE_COMPARATOR]);
}return null;
});
})()
), Clazz.new_(P$.ShellFolder$3.$init$,[this, {files:files}])));
}, 1);

Clazz.newMeth(C$, 'sortChildren$java_util_List', function (files) {
C$.invoke$java_util_concurrent_Callable(((P$.ShellFolder$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ShellFolder$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.concurrent.Callable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'call$', function () {
$I$(6,"sort$java_util_List$java_util_Comparator",[this.$finals$.files, $I$(7).FILE_COMPARATOR]);
return null;
});
})()
), Clazz.new_(P$.ShellFolder$4.$init$,[this, {files:files}])));
});

Clazz.newMeth(C$, 'isAbsolute$', function () {
return (!this.isFileSystem$() || C$.superclazz.prototype.isAbsolute$.apply(this, []) );
});

Clazz.newMeth(C$, 'getAbsoluteFile$', function () {
return (this.isFileSystem$() ? C$.superclazz.prototype.getAbsoluteFile$.apply(this, []) : this);
});

Clazz.newMeth(C$, 'canRead$', function () {
return (this.isFileSystem$() ? C$.superclazz.prototype.canRead$.apply(this, []) : true);
});

Clazz.newMeth(C$, 'canWrite$', function () {
return (this.isFileSystem$() ? C$.superclazz.prototype.canWrite$.apply(this, []) : false);
});

Clazz.newMeth(C$, 'exists$', function () {
return (!this.isFileSystem$() || C$.isFileSystemRoot$java_io_File(this) || C$.superclazz.prototype.exists$.apply(this, [])  );
});

Clazz.newMeth(C$, 'isDirectory$', function () {
return (this.isFileSystem$() ? C$.superclazz.prototype.isDirectory$.apply(this, []) : true);
});

Clazz.newMeth(C$, 'isFile$', function () {
return (this.isFileSystem$() ? C$.superclazz.prototype.isFile$.apply(this, []) : !this.isDirectory$());
});

Clazz.newMeth(C$, 'lastModified$', function () {
return (this.isFileSystem$() ? C$.superclazz.prototype.lastModified$.apply(this, []) : 0);
});

Clazz.newMeth(C$, 'length$', function () {
return (this.isFileSystem$() ? C$.superclazz.prototype.length$.apply(this, []) : 0);
});

Clazz.newMeth(C$, 'createNewFile$', function () {
return (this.isFileSystem$() ? C$.superclazz.prototype.createNewFile$.apply(this, []) : false);
});

Clazz.newMeth(C$, 'delete$', function () {
return (this.isFileSystem$() ? C$.superclazz.prototype.delete$.apply(this, []) : false);
});

Clazz.newMeth(C$, 'deleteOnExit$', function () {
if (this.isFileSystem$()) {
C$.superclazz.prototype.deleteOnExit$.apply(this, []);
} else {
}});

Clazz.newMeth(C$, 'mkdir$', function () {
return (this.isFileSystem$() ? C$.superclazz.prototype.mkdir$.apply(this, []) : false);
});

Clazz.newMeth(C$, 'mkdirs$', function () {
return (this.isFileSystem$() ? C$.superclazz.prototype.mkdirs$.apply(this, []) : false);
});

Clazz.newMeth(C$, 'renameTo$java_io_File', function (dest) {
return (this.isFileSystem$() ? C$.superclazz.prototype.renameTo$java_io_File.apply(this, [dest]) : false);
});

Clazz.newMeth(C$, 'setLastModified$J', function (time) {
return (this.isFileSystem$() ? C$.superclazz.prototype.setLastModified$J.apply(this, [time]) : false);
});

Clazz.newMeth(C$, 'setReadOnly$', function () {
return (this.isFileSystem$() ? C$.superclazz.prototype.setReadOnly$.apply(this, []) : false);
});

Clazz.newMeth(C$, 'toString', function () {
return (this.isFileSystem$() ? C$.superclazz.prototype.toString.apply(this, []) : this.getDisplayName$());
});

Clazz.newMeth(C$, 'getFolderColumns$java_io_File', function (dir) {
var columns=null;
if (Clazz.instanceOf(dir, "sun.awt.shell.ShellFolder")) {
columns=(dir).getFolderColumns$();
}if (columns == null ) {
columns=Clazz.array($I$(8), -1, [Clazz.new_(["FileChooser.fileNameHeaderText", new Integer(150), new Integer(10), true, null, C$.FILE_COMPARATOR],$I$(8,1).c$$S$Integer$Integer$Z$javax_swing_SortOrder$java_util_Comparator), Clazz.new_(["FileChooser.fileSizeHeaderText", new Integer(75), new Integer(4), true, null, C$.DEFAULT_COMPARATOR, true],$I$(8,1).c$$S$Integer$Integer$Z$javax_swing_SortOrder$java_util_Comparator$Z), Clazz.new_(["FileChooser.fileDateHeaderText", new Integer(130), new Integer(10), true, null, C$.DEFAULT_COMPARATOR, true],$I$(8,1).c$$S$Integer$Integer$Z$javax_swing_SortOrder$java_util_Comparator$Z)]);
}return columns;
}, 1);

Clazz.newMeth(C$, 'getFolderColumns$', function () {
return null;
});

Clazz.newMeth(C$, 'getFolderColumnValue$java_io_File$I', function (file, column) {
if (Clazz.instanceOf(file, "sun.awt.shell.ShellFolder")) {
var value=(file).getFolderColumnValue$I(column);
if (value != null ) {
return value;
}}if (file == null  || !file.exists$() ) {
return null;
}switch (column) {
case 0:
return file;
case 1:
return file.isDirectory$() ? null : Long.valueOf$J(file.length$());
case 2:
if (C$.isFileSystemRoot$java_io_File(file)) {
return null;
}var time=file.lastModified$();
return (time == 0) ? null : Clazz.new_(java.util.Date.c$$J,[time]);
default:
return null;
}
}, 1);

Clazz.newMeth(C$, 'getFolderColumnValue$I', function (column) {
return null;
});

Clazz.newMeth(C$, 'invoke$java_util_concurrent_Callable', function (task) {
try {
return C$.invoke$java_util_concurrent_Callable$Class(task, Clazz.getClass(Clazz.load('RuntimeException')));
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'invoke$java_util_concurrent_Callable$Class', function (task, exceptionClass) {
try {
return C$.invoker.invoke$java_util_concurrent_Callable(task);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (Clazz.instanceOf(e, "java.lang.RuntimeException")) {
throw e;
}if (Clazz.instanceOf(e, "java.lang.InterruptedException")) {
$I$(9).currentThread$().interrupt$();
throw e;
}if (exceptionClass.isInstance$O(e)) {
throw exceptionClass.cast$O(e);
}throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["Unexpected error", e]);
} else {
throw e;
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
{
var managerClassName=$I$(1).getDefaultToolkit$().getDesktopProperty$S("Shell.shellFolderManager");
var managerClass=null;
try {
managerClass=Clazz.forName(managerClassName, false, null);
if (!Clazz.getClass($I$(2)).isAssignableFrom$Class(managerClass)) {
managerClass=null;
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"NullPointerException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
if (managerClass == null ) {
managerClass=Clazz.getClass($I$(2));
}try {
C$.shellFolderManager=managerClass.newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e = e$$;
{
throw Clazz.new_(["Could not instantiate Shell Folder Manager: " + managerClass.getName$()],$I$(3,1).c$$S);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_(["Could not access Shell Folder Manager: " + managerClass.getName$()],$I$(3,1).c$$S);
}
} else {
throw e$$;
}
}
C$.invoker=C$.shellFolderManager.createInvoker$();
};
C$.DEFAULT_COMPARATOR=((P$.ShellFolder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ShellFolder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'compare$O$O', function (o1, o2) {
var gt;
if (o1 == null  && o2 == null  ) {
gt=0;
} else if (o1 != null  && o2 == null  ) {
gt=1;
} else if (o1 == null  && o2 != null  ) {
gt=-1;
} else if (Clazz.instanceOf(o1, "java.lang.Comparable")) {
gt=(o1).compareTo$O(o2);
} else {
gt=0;
}return gt;
});
})()
), Clazz.new_(P$.ShellFolder$1.$init$,[this, null]));
C$.FILE_COMPARATOR=((P$.ShellFolder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ShellFolder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['compare$java_io_File$java_io_File','compare$O$O'], function (f1, f2) {
var sf1=null;
var sf2=null;
if (Clazz.instanceOf(f1, "sun.awt.shell.ShellFolder")) {
sf1=f1;
if (sf1.isFileSystem$()) {
sf1=null;
}}if (Clazz.instanceOf(f2, "sun.awt.shell.ShellFolder")) {
sf2=f2;
if (sf2.isFileSystem$()) {
sf2=null;
}}if (sf1 != null  && sf2 != null  ) {
return sf1.compareTo$java_io_File(sf2);
} else if (sf1 != null ) {
return -1;
} else if (sf2 != null ) {
return 1;
} else {
var name1=f1.getName$();
var name2=f2.getName$();
var diff=name1.compareToIgnoreCase$S(name2);
if (diff != 0) {
return diff;
} else {
return name1.compareTo$S(name2);
}}});
})()
), Clazz.new_(P$.ShellFolder$2.$init$,[this, null]));
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.ShellFolder, "Invoker", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-07-27 14:21:08 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
