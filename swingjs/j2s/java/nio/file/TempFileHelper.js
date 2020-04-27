(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[[0,'java.nio.file.attribute.PosixFilePermissions','java.util.EnumSet','java.nio.file.attribute.PosixFilePermission','java.nio.file.Paths','java.security.AccessController','sun.security.action.GetPropertyAction','java.nio.file.FileSystems','java.security.SecureRandom','java.nio.file.attribute.FileAttribute',['java.nio.file.TempFileHelper','.PosixPermissions'],'java.nio.file.Files']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TempFileHelper", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['PosixPermissions',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['isPosix'],'O',['tmpdir','java.nio.file.Path','random','java.security.SecureRandom']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'generatePath$S$S$java_nio_file_Path', function (prefix, suffix, dir) {
var n=C$.random.nextInt$();
n=(n == -9223372036854775808) ? 0 : Math.abs(n);
var name=dir.getFileSystem$().getPath$S$SA(prefix + Long.toString$J(n) + suffix , []);
if (name.getParent$() != null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid prefix or suffix"]);
return dir.resolve$java_nio_file_Path(name);
}, 1);

Clazz.newMeth(C$, 'create$java_nio_file_Path$S$S$Z$java_nio_file_attribute_FileAttributeA', function (dir, prefix, suffix, createDirectory, attrs) {
if (prefix == null ) prefix="";
if (suffix == null ) suffix=(createDirectory) ? "" : ".tmp";
if (dir == null ) dir=C$.tmpdir;
if (C$.isPosix && (dir.getFileSystem$() === $I$(7).getDefault$() ) ) {
if (attrs.length == 0) {
attrs=Clazz.array($I$(9), [1]);
attrs[0]=(createDirectory) ? $I$(10).dirPermissions : $I$(10).filePermissions;
} else {
var hasPermissions=false;
for (var i=0; i < attrs.length; i++) {
if (attrs[i].name$().equals$O("posix:permissions")) {
hasPermissions=true;
break;
}}
if (!hasPermissions) {
var copy=Clazz.array($I$(9), [attrs.length + 1]);
System.arraycopy$O$I$O$I$I(attrs, 0, copy, 0, attrs.length);
attrs=copy;
attrs[attrs.length - 1]=(createDirectory) ? $I$(10).dirPermissions : $I$(10).filePermissions;
}}}var sm=System.getSecurityManager$();
for (; ; ) {
var f;
try {
f=C$.generatePath$S$S$java_nio_file_Path(prefix, suffix, dir);
} catch (e) {
if (Clazz.exceptionOf(e,"java.nio.file.InvalidPathException")){
if (sm != null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid prefix or suffix"]);
throw e;
} else {
throw e;
}
}
try {
if (createDirectory) {
return $I$(11).createDirectory$java_nio_file_Path$java_nio_file_attribute_FileAttributeA(f, attrs);
} else {
return $I$(11).createFile$java_nio_file_Path$java_nio_file_attribute_FileAttributeA(f, attrs);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"SecurityException")){
var e = e$$;
{
if (dir === C$.tmpdir  && sm != null  ) throw Clazz.new_(Clazz.load('SecurityException').c$$S,["Unable to create temporary file or directory"]);
throw e;
}
} else if (Clazz.exceptionOf(e$$,"java.nio.file.FileAlreadyExistsException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
}
}, 1);

Clazz.newMeth(C$, 'createTempFile$java_nio_file_Path$S$S$java_nio_file_attribute_FileAttributeA', function (dir, prefix, suffix, attrs) {
return C$.create$java_nio_file_Path$S$S$Z$java_nio_file_attribute_FileAttributeA(dir, prefix, suffix, false, attrs);
}, 1);

Clazz.newMeth(C$, 'createTempDirectory$java_nio_file_Path$S$java_nio_file_attribute_FileAttributeA', function (dir, prefix, attrs) {
return C$.create$java_nio_file_Path$S$S$Z$java_nio_file_attribute_FileAttributeA(dir, prefix, null, true, attrs);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.tmpdir=$I$(4,"get$S$SA",[$I$(5,"doPrivileged$java_security_PrivilegedAction",[Clazz.new_($I$(6,1).c$$S,["java.io.tmpdir"])]), []]);
C$.isPosix=$I$(7).getDefault$().supportedFileAttributeViews$().contains$O("posix");
C$.random=Clazz.new_($I$(8,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TempFileHelper, "PosixPermissions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['filePermissions','java.nio.file.attribute.FileAttribute','+dirPermissions']]]

C$.$static$=function(){C$.$static$=0;
C$.filePermissions=$I$(1,"asFileAttribute$java_util_Set",[$I$(2,"of$Enum$Enum",[$I$(3).OWNER_READ, $I$(3).OWNER_WRITE])]);
C$.dirPermissions=$I$(1,"asFileAttribute$java_util_Set",[$I$(2,"of$Enum$Enum$Enum",[$I$(3).OWNER_READ, $I$(3).OWNER_WRITE, $I$(3).OWNER_EXECUTE])]);
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:29 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
