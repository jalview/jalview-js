(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[[0,'java.nio.file.StandardCopyOption','java.nio.file.LinkOption','java.nio.file.CopyOption',['java.nio.file.CopyMoveHelper','.CopyOptions'],'java.nio.file.Files','java.nio.file.attribute.BasicFileAttributes','java.nio.file.attribute.BasicFileAttributeView']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CopyMoveHelper", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'convertMoveToCopyOptions$java_nio_file_CopyOptionA', function (options) {
var len=options.length;
var newOptions=Clazz.array($I$(3), [len + 2]);
for (var i=0; i < len; i++) {
var option=options[i];
if (option === $I$(1).ATOMIC_MOVE ) {
throw Clazz.new_(Clazz.load('java.nio.file.AtomicMoveNotSupportedException').c$$S$S$S,[null, null, "Atomic move between providers is not supported"]);
}newOptions[i]=option;
}
newOptions[len]=$I$(2).NOFOLLOW_LINKS;
newOptions[len + 1]=$I$(1).COPY_ATTRIBUTES;
return newOptions;
}, 1);

Clazz.newMeth(C$, 'copyToForeignTarget$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA', function (source, target, options) {
var opts=$I$(4).parse$java_nio_file_CopyOptionA(options);
var linkOptions=(opts.followLinks) ? Clazz.array($I$(2), [0]) : Clazz.array($I$(2), -1, [$I$(2).NOFOLLOW_LINKS]);
var attrs=$I$(5).readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA(source, Clazz.getClass($I$(6),['creationTime$','fileKey$','isDirectory$','isOther$','isRegularFile$','isSymbolicLink$','lastAccessTime$','lastModifiedTime$','size$']), linkOptions);
if (attrs.isSymbolicLink$()) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Copying of symbolic links not supported"]);
if (opts.replaceExisting) {
$I$(5).deleteIfExists$java_nio_file_Path(target);
} else if ($I$(5).exists$java_nio_file_Path$java_nio_file_LinkOptionA(target, [])) throw Clazz.new_(Clazz.load('java.nio.file.FileAlreadyExistsException').c$$S,[target.toString()]);
if (attrs.isDirectory$()) {
$I$(5).createDirectory$java_nio_file_Path$java_nio_file_attribute_FileAttributeA(target, []);
} else {
/*try*/ {var $in=$I$(5).newInputStream$java_nio_file_Path$java_nio_file_OpenOptionA(source, []);
$I$(5).copy$java_io_InputStream$java_nio_file_Path$java_nio_file_CopyOptionA($in, target, []);
}
}if (opts.copyAttributes) {
var view=$I$(5).getFileAttributeView$java_nio_file_Path$Class$java_nio_file_LinkOptionA(target, Clazz.getClass($I$(7),['name$','readAttributes$','setTimes$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime']), []);
try {
view.setTimes$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime(attrs.lastModifiedTime$(), attrs.lastAccessTime$(), attrs.creationTime$());
} catch (x) {
try {
$I$(5).delete$java_nio_file_Path(target);
} catch (suppressed) {
x.addSuppressed$Throwable(suppressed);
}
throw x;
}
}}, 1);

Clazz.newMeth(C$, 'moveToForeignTarget$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA', function (source, target, options) {
C$.copyToForeignTarget$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA(source, target, C$.convertMoveToCopyOptions$java_nio_file_CopyOptionA(options));
$I$(5).delete$java_nio_file_Path(source);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.CopyMoveHelper, "CopyOptions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.replaceExisting=false;
this.copyAttributes=false;
this.followLinks=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.replaceExisting=false;
this.copyAttributes=false;
this.followLinks=true;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parse$java_nio_file_CopyOptionA', function (options) {
var result=Clazz.new_(C$);
for (var option, $option = 0, $$option = options; $option<$$option.length&&((option=($$option[$option])),1);$option++) {
if (option === $I$(1).REPLACE_EXISTING ) {
result.replaceExisting=true;
continue;
}if (option === $I$(2).NOFOLLOW_LINKS ) {
result.followLinks=false;
continue;
}if (option === $I$(1).COPY_ATTRIBUTES ) {
result.copyAttributes=true;
continue;
}if (option == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["'" + option + "' is not a recognized copy option" ]);
}
return result;
}, 1);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
