(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[[0,'java.util.Objects','java.nio.file.FileVisitResult']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SimpleFileVisitor", null, null, 'java.nio.file.FileVisitor');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['preVisitDirectory$TT$java_nio_file_attribute_BasicFileAttributes'], function (dir, attrs) {
$I$(1).requireNonNull$TT(dir);
$I$(1).requireNonNull$TT(attrs);
return $I$(2).CONTINUE;
});

Clazz.newMeth(C$, ['visitFile$TT$java_nio_file_attribute_BasicFileAttributes'], function (file, attrs) {
$I$(1).requireNonNull$TT(file);
$I$(1).requireNonNull$TT(attrs);
return $I$(2).CONTINUE;
});

Clazz.newMeth(C$, ['visitFileFailed$TT$java_io_IOException'], function (file, exc) {
$I$(1).requireNonNull$TT(file);
throw exc;
});

Clazz.newMeth(C$, ['postVisitDirectory$TT$java_io_IOException'], function (dir, exc) {
$I$(1).requireNonNull$TT(dir);
if (exc != null ) throw exc;
return $I$(2).CONTINUE;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:41 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
