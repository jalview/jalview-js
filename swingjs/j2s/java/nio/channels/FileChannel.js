(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.file.attribute.FileAttribute','java.util.HashSet','java.util.Collections']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileChannel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.nio.channels.spi.AbstractInterruptibleChannel', ['java.nio.channels.SeekableByteChannel', 'java.nio.channels.GatheringByteChannel', 'java.nio.channels.ScatteringByteChannel']);
C$.NO_ATTRIBUTES=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.NO_ATTRIBUTES=Clazz.array($I$(1), [0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'open$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA', function (path, options, attrs) {
var provider=path.getFileSystem$().provider$();
return provider.newFileChannel$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA(path, options, attrs);
}, 1);

Clazz.newMeth(C$, 'open$java_nio_file_Path$java_nio_file_OpenOptionA', function (path, options) {
var set=Clazz.new_($I$(2).c$$I,[options.length]);
$I$(3).addAll$java_util_Collection$TTA(set, options);
return C$.open$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA(path, set, C$.NO_ATTRIBUTES);
}, 1);

Clazz.newMeth(C$, 'read$java_nio_ByteBufferA', function (dsts) {
return this.read$java_nio_ByteBufferA$I$I(dsts, 0, dsts.length);
});

Clazz.newMeth(C$, 'write$java_nio_ByteBufferA', function (srcs) {
return this.write$java_nio_ByteBufferA$I$I(srcs, 0, srcs.length);
});

Clazz.newMeth(C$, 'lock$', function () {
return this.lock$J$J$Z(0, 9223372036854775807, false);
});

Clazz.newMeth(C$, 'tryLock$', function () {
return this.tryLock$J$J$Z(0, 9223372036854775807, false);
});
;
(function(){var C$=Clazz.newClass(P$.FileChannel, "MapMode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.READ_ONLY=null;
C$.READ_WRITE=null;
C$.PRIVATE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.READ_ONLY=Clazz.new_(C$.c$$S,["READ_ONLY"]);
C$.READ_WRITE=Clazz.new_(C$.c$$S,["READ_WRITE"]);
C$.PRIVATE=Clazz.new_(C$.c$$S,["PRIVATE"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
