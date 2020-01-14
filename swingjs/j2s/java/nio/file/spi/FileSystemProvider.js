(function(){var P$=Clazz.newPackage("java.nio.file.spi"),I$=[[0,'RuntimePermission','java.util.ArrayList','java.util.ServiceLoader','java.nio.file.FileSystems','Error','java.security.AccessController','java.util.Collections','java.nio.file.StandardOpenOption','java.nio.channels.Channels','java.nio.file.Files','java.util.HashSet']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileSystemProvider");
C$.lock=null;
C$.installedProviders=null;
C$.loadingProviders=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.lock= Clazz.new_();
C$.loadingProviders=false;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'checkPermission$', function () {
var sm=System.getSecurityManager$();
if (sm != null ) sm.checkPermission$java_security_Permission(Clazz.new_($I$(1).c$$S,["fileSystemProvider"]));
return null;
}, 1);

Clazz.newMeth(C$, 'c$$Void', function (ignore) {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Void.apply(this, [C$.checkPermission$()]);
}, 1);

Clazz.newMeth(C$, 'loadInstalledProviders$', function () {
var list=Clazz.new_($I$(2));
var sl=$I$(3).load$Class$ClassLoader(Clazz.getClass(C$), ClassLoader.getSystemClassLoader$());
for (var provider, $provider = sl.iterator$(); $provider.hasNext$()&&((provider=($provider.next$())),1);) {
var scheme=provider.getScheme$();
if (!scheme.equalsIgnoreCase$S("file")) {
var found=false;
for (var p, $p = list.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
if (p.getScheme$().equalsIgnoreCase$S(scheme)) {
found=true;
break;
}}
if (!found) {
list.add$TE(provider);
}}}
return list;
}, 1);

Clazz.newMeth(C$, 'installedProviders$', function () {
if (C$.installedProviders == null ) {
var defaultProvider=$I$(4).getDefault$().provider$();
{
if (C$.installedProviders == null ) {
if (C$.loadingProviders) {
throw Clazz.new_($I$(5).c$$S,["Circular loading of installed providers detected"]);
}C$.loadingProviders=true;
var list=$I$(6).doPrivileged$java_security_PrivilegedAction(((P$.FileSystemProvider$1||
(function(){var C$=Clazz.newClass(P$, "FileSystemProvider$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return P$.FileSystemProvider.loadInstalledProviders$();
});
})()
), Clazz.new_(P$.FileSystemProvider$1.$init$, [this, null])));
list.add$I$TE(0, defaultProvider);
C$.installedProviders=$I$(7).unmodifiableList$java_util_List(list);
}}}return C$.installedProviders;
}, 1);

Clazz.newMeth(C$, 'newFileSystem$java_nio_file_Path$java_util_Map', function (path, env) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'newInputStream$java_nio_file_Path$java_nio_file_OpenOptionA', function (path, options) {
if (options.length > 0) {
for (var opt, $opt = 0, $$opt = options; $opt<$$opt.length&&((opt=($$opt[$opt])),1);$opt++) {
if (opt === $I$(8).APPEND  || opt === $I$(8).WRITE  ) throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["'" + opt + "' not allowed" ]);
}
}return $I$(9).newInputStream$java_nio_channels_ReadableByteChannel($I$(10).newByteChannel$java_nio_file_Path$java_nio_file_OpenOptionA(path, options));
});

Clazz.newMeth(C$, 'newOutputStream$java_nio_file_Path$java_nio_file_OpenOptionA', function (path, options) {
var len=options.length;
var opts=Clazz.new_($I$(11).c$$I,[len + 3]);
if (len == 0) {
opts.add$TE($I$(8).CREATE);
opts.add$TE($I$(8).TRUNCATE_EXISTING);
} else {
for (var opt, $opt = 0, $$opt = options; $opt<$$opt.length&&((opt=($$opt[$opt])),1);$opt++) {
if (opt === $I$(8).READ ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["READ not allowed"]);
opts.add$TE(opt);
}
}opts.add$TE($I$(8).WRITE);
return $I$(9).newOutputStream$java_nio_channels_WritableByteChannel(this.newByteChannel$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA(path, opts, []));
});

Clazz.newMeth(C$, 'newFileChannel$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA', function (path, options, attrs) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'newAsynchronousFileChannel$java_nio_file_Path$java_util_Set$java_util_concurrent_ExecutorService$java_nio_file_attribute_FileAttributeA', function (path, options, executor, attrs) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'createSymbolicLink$java_nio_file_Path$java_nio_file_Path$java_nio_file_attribute_FileAttributeA', function (link, target, attrs) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'createLink$java_nio_file_Path$java_nio_file_Path', function (link, existing) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'deleteIfExists$java_nio_file_Path', function (path) {
try {
this.delete$java_nio_file_Path(path);
return true;
} catch (ignore) {
if (Clazz.exceptionOf(ignore,"java.nio.file.NoSuchFileException")){
return false;
} else {
throw ignore;
}
}
});

Clazz.newMeth(C$, 'readSymbolicLink$java_nio_file_Path', function (link) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:42 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
