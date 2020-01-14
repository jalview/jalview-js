(function(){var P$=java.io,I$=[[0,'java.io.FileInputStream']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileReader", null, 'java.io.InputStreamReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (fileName) {
C$.superclazz.c$$java_io_InputStream.apply(this, [Clazz.new_($I$(1).c$$S,[fileName])]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File', function (file) {
C$.superclazz.c$$java_io_InputStream.apply(this, [Clazz.new_($I$(1).c$$java_io_File,[file])]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_FileDescriptor', function (fd) {
C$.superclazz.c$$java_io_InputStream.apply(this, [Clazz.new_($I$(1).c$$java_io_FileDescriptor,[fd])]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
