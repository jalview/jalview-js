(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'sun.misc.Unsafe','sun.nio.fs.NativeBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "NativeBuffers");
C$.unsafe=null;
C$.threadLocal=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.unsafe=$I$(1).getUnsafe$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'allocNativeBuffer$I', function (size) {
if (size < 2048) size=2048;
return Clazz.new_($I$(2).c$$I,[size]);
}, 1);

Clazz.newMeth(C$, 'getNativeBufferFromCache$I', function (size) {
var buffers=C$.threadLocal;
if (buffers != null ) {
for (var i=0; i < 3; i++) {
var buffer=buffers[i];
if (buffer != null  && buffer.size$() >= size ) {
buffers[i]=null;
return buffer;
}}
}return null;
}, 1);

Clazz.newMeth(C$, 'getNativeBuffer$I', function (size) {
var buffer=C$.getNativeBufferFromCache$I(size);
if (buffer != null ) {
buffer.setOwner$O(null);
return buffer;
} else {
return C$.allocNativeBuffer$I(size);
}}, 1);

Clazz.newMeth(C$, 'releaseNativeBuffer$sun_nio_fs_NativeBuffer', function (buffer) {
var buffers=C$.threadLocal;
if (buffers == null ) {
buffers=Clazz.array($I$(2), [3]);
buffers[0]=buffer;
C$.threadLocal=(buffers);
return;
}for (var i=0; i < 3; i++) {
if (buffers[i] == null ) {
buffers[i]=buffer;
return;
}}
for (var i=0; i < 3; i++) {
var existing=buffers[i];
if (existing.size$() < buffer.size$()) {
existing.cleaner$().clean$();
buffers[i]=buffer;
return;
}}
buffer.cleaner$().clean$();
}, 1);

Clazz.newMeth(C$, 'copyCStringToNativeBuffer$BA$sun_nio_fs_NativeBuffer', function (cstr, buffer) {
var offset=$I$(1).ARRAY_BYTE_BASE_OFFSET;
var len=cstr.length;
Clazz.assert(C$, this, function(){return buffer.size$() >= (len + 1)});
C$.unsafe.copyMemory$O$J$O$J$J(cstr, offset, null, buffer.address$(), len);
C$.unsafe.putByte$J$B(buffer.address$() + len, ($b$[0] = 0, $b$[0]));
}, 1);

Clazz.newMeth(C$, 'asNativeBuffer$BA', function (cstr) {
var buffer=C$.getNativeBuffer$I(cstr.length + 1);
C$.copyCStringToNativeBuffer$BA$sun_nio_fs_NativeBuffer(cstr, buffer);
return buffer;
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
