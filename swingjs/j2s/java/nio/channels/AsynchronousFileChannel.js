(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.file.attribute.FileAttribute','java.util.HashSet','java.util.Collections']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AsynchronousFileChannel", null, null, 'java.nio.channels.AsynchronousChannel');
C$.NO_ATTRIBUTES=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.NO_ATTRIBUTES=Clazz.array($I$(1), [0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'open$java_nio_file_Path$java_util_Set$java_util_concurrent_ExecutorService$java_nio_file_attribute_FileAttributeA', function (file, options, executor, attrs) {
var provider=file.getFileSystem$().provider$();
return provider.newAsynchronousFileChannel$java_nio_file_Path$java_util_Set$java_util_concurrent_ExecutorService$java_nio_file_attribute_FileAttributeA(file, options, executor, attrs);
}, 1);

Clazz.newMeth(C$, 'open$java_nio_file_Path$java_nio_file_OpenOptionA', function (file, options) {
var set=Clazz.new_($I$(2).c$$I,[options.length]);
$I$(3).addAll$java_util_Collection$TTA(set, options);
return C$.open$java_nio_file_Path$java_util_Set$java_util_concurrent_ExecutorService$java_nio_file_attribute_FileAttributeA(file, set, null, C$.NO_ATTRIBUTES);
}, 1);

Clazz.newMeth(C$, 'lock$TA$java_nio_channels_CompletionHandler', function (attachment, handler) {
this.lock$J$J$Z$TA$java_nio_channels_CompletionHandler(0, 9223372036854775807, false, attachment, handler);
});

Clazz.newMeth(C$, 'lock$', function () {
return this.lock$J$J$Z(0, 9223372036854775807, false);
});

Clazz.newMeth(C$, 'tryLock$', function () {
return this.tryLock$J$J$Z(0, 9223372036854775807, false);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
