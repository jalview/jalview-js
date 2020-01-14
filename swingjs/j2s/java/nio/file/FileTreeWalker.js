(function(){var P$=Clazz.newPackage("java.nio.file"),p$1={},I$=[[0,'java.util.ArrayDeque','java.nio.file.FileVisitOption','AssertionError','java.nio.file.LinkOption','java.nio.file.Files','java.nio.file.attribute.BasicFileAttributes',['java.nio.file.FileTreeWalker','.Event'],['java.nio.file.FileTreeWalker','.EventType'],['java.nio.file.FileTreeWalker','.DirectoryNode']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileTreeWalker", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Closeable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.followLinks=false;
this.linkOptions=null;
this.maxDepth=0;
this.stack=null;
this.closed=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.stack=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection$I', function (options, maxDepth) {
C$.$init$.apply(this);
var fl=false;
for (var option, $option = options.iterator$(); $option.hasNext$()&&((option=($option.next$())),1);) {
switch (option) {
case $I$(2).FOLLOW_LINKS:
fl=true;
break;
default:
throw Clazz.new_($I$(3).c$$O,["Should not get here"]);
}
}
if (maxDepth < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["\'maxDepth\' is negative"]);
this.followLinks=fl;
this.linkOptions=(fl) ? Clazz.array($I$(4), [0]) : Clazz.array($I$(4), -1, [$I$(4).NOFOLLOW_LINKS]);
this.maxDepth=maxDepth;
}, 1);

Clazz.newMeth(C$, 'getAttributes$java_nio_file_Path$Z', function (file, canUseCached) {
if (canUseCached && (Clazz.instanceOf(file, "sun.nio.fs.BasicFileAttributesHolder")) && (System.getSecurityManager$() == null )  ) {
var cached=(file).get$();
if (cached != null  && (!this.followLinks || !cached.isSymbolicLink$() ) ) {
return cached;
}}var attrs;
try {
attrs=$I$(5).readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA(file, Clazz.getClass($I$(6),['creationTime$','fileKey$','isDirectory$','isOther$','isRegularFile$','isSymbolicLink$','lastAccessTime$','lastModifiedTime$','size$']), this.linkOptions);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
if (!this.followLinks) throw ioe;
attrs=$I$(5).readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA(file, Clazz.getClass($I$(6),['creationTime$','fileKey$','isDirectory$','isOther$','isRegularFile$','isSymbolicLink$','lastAccessTime$','lastModifiedTime$','size$']), [$I$(4).NOFOLLOW_LINKS]);
} else {
throw ioe;
}
}
return attrs;
}, p$1);

Clazz.newMeth(C$, 'wouldLoop$java_nio_file_Path$O', function (dir, key) {
for (var ancestor, $ancestor = this.stack.iterator$(); $ancestor.hasNext$()&&((ancestor=($ancestor.next$())),1);) {
var ancestorKey=ancestor.key$();
if (key != null  && ancestorKey != null  ) {
if (key.equals$O(ancestorKey)) {
return true;
}} else {
try {
if ($I$(5).isSameFile$java_nio_file_Path$java_nio_file_Path(dir, ancestor.directory$())) {
return true;
}} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException") || Clazz.exceptionOf(x,"SecurityException")){
} else {
throw x;
}
}
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'visit$java_nio_file_Path$Z$Z', function (entry, ignoreSecurityException, canUseCached) {
var attrs;
try {
attrs=p$1.getAttributes$java_nio_file_Path$Z.apply(this, [entry, canUseCached]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
return Clazz.new_($I$(7).c$$java_nio_file_FileTreeWalker_EventType$java_nio_file_Path$java_io_IOException,[$I$(8).ENTRY, entry, ioe]);
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var se = e$$;
{
if (ignoreSecurityException) return null;
throw se;
}
} else {
throw e$$;
}
}
var depth=this.stack.size$();
if (depth >= this.maxDepth || !attrs.isDirectory$() ) {
return Clazz.new_($I$(7).c$$java_nio_file_FileTreeWalker_EventType$java_nio_file_Path$java_nio_file_attribute_BasicFileAttributes,[$I$(8).ENTRY, entry, attrs]);
}if (this.followLinks && p$1.wouldLoop$java_nio_file_Path$O.apply(this, [entry, attrs.fileKey$()]) ) {
return Clazz.new_($I$(7).c$$java_nio_file_FileTreeWalker_EventType$java_nio_file_Path$java_io_IOException,[$I$(8).ENTRY, entry, Clazz.new_(Clazz.load('java.nio.file.FileSystemLoopException').c$$S,[entry.toString()])]);
}var stream=null;
try {
stream=$I$(5).newDirectoryStream$java_nio_file_Path(entry);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
return Clazz.new_($I$(7).c$$java_nio_file_FileTreeWalker_EventType$java_nio_file_Path$java_io_IOException,[$I$(8).ENTRY, entry, ioe]);
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var se = e$$;
{
if (ignoreSecurityException) return null;
throw se;
}
} else {
throw e$$;
}
}
this.stack.push$TE(Clazz.new_($I$(9).c$$java_nio_file_Path$O$java_nio_file_DirectoryStream,[entry, attrs.fileKey$(), stream]));
return Clazz.new_($I$(7).c$$java_nio_file_FileTreeWalker_EventType$java_nio_file_Path$java_nio_file_attribute_BasicFileAttributes,[$I$(8).START_DIRECTORY, entry, attrs]);
}, p$1);

Clazz.newMeth(C$, 'walk$java_nio_file_Path', function (file) {
if (this.closed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Closed"]);
var ev=p$1.visit$java_nio_file_Path$Z$Z.apply(this, [file, false, false]);
Clazz.assert(C$, this, function(){return ev != null });
return ev;
});

Clazz.newMeth(C$, 'next$', function () {
var top=this.stack.peek$();
if (top == null ) return null;
var ev;
do {
var entry=null;
var ioe=null;
if (!top.skipped$()) {
var iterator=top.iterator$();
try {
if (iterator.hasNext$()) {
entry=iterator.next$();
}} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.file.DirectoryIteratorException")){
ioe=x.getCause$();
} else {
throw x;
}
}
}if (entry == null ) {
try {
top.stream$().close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if (ioe == null ) {
ioe=e;
} else {
ioe.addSuppressed$Throwable(e);
}} else {
throw e;
}
}
this.stack.pop$();
return Clazz.new_($I$(7).c$$java_nio_file_FileTreeWalker_EventType$java_nio_file_Path$java_io_IOException,[$I$(8).END_DIRECTORY, top.directory$(), ioe]);
}ev=p$1.visit$java_nio_file_Path$Z$Z.apply(this, [entry, true, true]);
} while (ev == null );
return ev;
});

Clazz.newMeth(C$, 'pop$', function () {
if (!this.stack.isEmpty$()) {
var node=this.stack.pop$();
try {
node.stream$().close$();
} catch (ignore) {
if (Clazz.exceptionOf(ignore,"java.io.IOException")){
} else {
throw ignore;
}
}
}});

Clazz.newMeth(C$, 'skipRemainingSiblings$', function () {
if (!this.stack.isEmpty$()) {
this.stack.peek$().skip$();
}});

Clazz.newMeth(C$, 'isOpen$', function () {
return !this.closed;
});

Clazz.newMeth(C$, 'close$', function () {
if (!this.closed) {
while (!this.stack.isEmpty$()){
this.pop$();
}
this.closed=true;
}});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){var C$=Clazz.newClass(P$.FileTreeWalker, "DirectoryNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dir=null;
this.key=null;
this.stream=null;
this.iterator=null;
this.skipped=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_Path$O$java_nio_file_DirectoryStream', function (dir, key, stream) {
C$.$init$.apply(this);
this.dir=dir;
this.key=key;
this.stream=stream;
this.iterator=stream.iterator$();
}, 1);

Clazz.newMeth(C$, 'directory$', function () {
return this.dir;
});

Clazz.newMeth(C$, 'key$', function () {
return this.key;
});

Clazz.newMeth(C$, 'stream$', function () {
return this.stream;
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.iterator;
});

Clazz.newMeth(C$, 'skip$', function () {
this.skipped=true;
});

Clazz.newMeth(C$, 'skipped$', function () {
return this.skipped;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.FileTreeWalker, "EventType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "START_DIRECTORY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "END_DIRECTORY", 1, []);
Clazz.newEnumConst($vals, C$.c$, "ENTRY", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.FileTreeWalker, "Event", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=null;
this.file=null;
this.attrs=null;
this.ioe=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_FileTreeWalker_EventType$java_nio_file_Path$java_nio_file_attribute_BasicFileAttributes$java_io_IOException', function (type, file, attrs, ioe) {
C$.$init$.apply(this);
this.type=type;
this.file=file;
this.attrs=attrs;
this.ioe=ioe;
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_FileTreeWalker_EventType$java_nio_file_Path$java_nio_file_attribute_BasicFileAttributes', function (type, file, attrs) {
C$.c$$java_nio_file_FileTreeWalker_EventType$java_nio_file_Path$java_nio_file_attribute_BasicFileAttributes$java_io_IOException.apply(this, [type, file, attrs, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_FileTreeWalker_EventType$java_nio_file_Path$java_io_IOException', function (type, file, ioe) {
C$.c$$java_nio_file_FileTreeWalker_EventType$java_nio_file_Path$java_nio_file_attribute_BasicFileAttributes$java_io_IOException.apply(this, [type, file, null, ioe]);
}, 1);

Clazz.newMeth(C$, 'type$', function () {
return this.type;
});

Clazz.newMeth(C$, 'file$', function () {
return this.file;
});

Clazz.newMeth(C$, 'attributes$', function () {
return this.attrs;
});

Clazz.newMeth(C$, 'ioeException$', function () {
return this.ioe;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
