(function(){var P$=Clazz.newPackage("org.jmol.api"),p$1={},p$2={},I$=[[0,'Boolean','java.io.File','org.jmol.api.TestScriptsImpl','org.jmol.util.JUnitLogger','javax.swing.JFrame','java.util.Hashtable','org.openscience.jmol.app.Jmol','org.jmol.util.Profiling','java.io.BufferedReader','java.io.FileReader','junit.framework.Assert','org.jmol.api.JmolViewer','org.jmol.adapter.smarter.SmarterJmolAdapter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TestScripts", null, 'junit.framework.TestSuite');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Class$S', function (theClass, name) {
;C$.superclazz.c$$Class$S.apply(this,[theClass, name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Class', function (theClass) {
;C$.superclazz.c$$Class.apply(this,[theClass]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'suite$', function () {
var performance=$I$(1).getBoolean$S("test.performance");
var result=Clazz.new_(C$.c$$S,["Test for scripts"]);
var datafileDirectory=System.getProperty$S$S("test.datafile.script.directory", "../Jmol-datafiles/tests/scripts");
var resultCheck=Clazz.new_(C$.c$$S,["Test for checking scripts"]);
p$1.addDirectory$S$Z$Z.apply(resultCheck, [datafileDirectory + "/check", true, performance]);
if (resultCheck.countTestCases$() > 0) {
result.addTest$junit_framework_Test(resultCheck);
}var resultRun=Clazz.new_(C$.c$$S,["Test for running scripts"]);
p$1.addDirectory$S$Z$Z.apply(resultRun, [datafileDirectory + "/run", false, performance]);
if (resultRun.countTestCases$() > 0) {
result.addTest$junit_framework_Test(resultRun);
}var resultRunPerformance=Clazz.new_(C$.c$$S,["Test for running scripts with performance testing"]);
p$1.addDirectory$S$Z$Z.apply(resultRunPerformance, [datafileDirectory + "/run_performance", false, true]);
if (resultRunPerformance.countTestCases$() > 0) {
result.addTest$junit_framework_Test(resultRunPerformance);
}return result;
}, 1);

Clazz.newMeth(C$, 'addDirectory$S$Z$Z', function (directory, checkOnly, performance) {
var dir=Clazz.new_($I$(2,1).c$$S,[directory]);
var files=dir.list$java_io_FilenameFilter(((P$.TestScripts$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TestScripts$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.FilenameFilter', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File$S', function (dir, name) {
if (name.endsWith$S(".spt")) {
return true;
}return false;
});
})()
), Clazz.new_(P$.TestScripts$1.$init$,[this, null])));
if (files != null ) {
for (var i=0; i < files.length; i++) {
p$1.addFile$S$S$Z$Z.apply(this, [directory, files[i], checkOnly, performance]);
}
}var dirs=dir.list$java_io_FilenameFilter(((P$.TestScripts$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TestScripts$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.FilenameFilter', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File$S', function (dir, name) {
var file=Clazz.new_($I$(2,1).c$$java_io_File$S,[dir, name]);
return file.isDirectory$();
});
})()
), Clazz.new_(P$.TestScripts$2.$init$,[this, null])));
if (dirs != null ) {
for (var i=0; i < dirs.length; i++) {
p$1.addDirectory$S$Z$Z.apply(this, [Clazz.new_($I$(2,1).c$$S$S,[directory, dirs[i]]).getAbsolutePath$(), checkOnly, performance]);
}
}}, p$1);

Clazz.newMeth(C$, 'addFile$S$S$Z$Z', function (directory, filename, checkOnly, performance) {
var file=Clazz.new_($I$(2,1).c$$S$S,[directory, filename]);
var test=Clazz.new_($I$(3,1).c$$java_io_File$Z$Z,[file, checkOnly, performance]);
this.addTest$junit_framework_Test(test);
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
