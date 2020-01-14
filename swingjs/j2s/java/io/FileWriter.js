(function(){var P$=java.io,I$=[[0,'java.io.FileOutputStream']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileWriter", null, 'java.io.OutputStreamWriter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (fileName) {
C$.superclazz.c$$java_io_OutputStream.apply(this, [Clazz.new_($I$(1).c$$S,[fileName])]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z', function (fileName, append) {
C$.superclazz.c$$java_io_OutputStream.apply(this, [Clazz.new_($I$(1).c$$S$Z,[fileName, append])]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File', function (file) {
C$.superclazz.c$$java_io_OutputStream.apply(this, [Clazz.new_($I$(1).c$$java_io_File,[file])]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$Z', function (file, append) {
C$.superclazz.c$$java_io_OutputStream.apply(this, [Clazz.new_($I$(1).c$$java_io_File$Z,[file, append])]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
