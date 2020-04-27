(function(){var P$=Clazz.newPackage("org.jmol.api"),p$1={},p$2={},I$=[[0,'Boolean','java.io.File','org.jmol.api.TestScriptsImpl','org.jmol.util.JUnitLogger','javax.swing.JFrame','java.util.Hashtable','org.openscience.jmol.app.Jmol','org.jmol.util.Profiling','java.io.BufferedReader','java.io.FileReader','junit.framework.Assert','org.jmol.api.JmolViewer','org.jmol.adapter.smarter.SmarterJmolAdapter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TestScriptsImpl", null, 'junit.framework.TestCase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['checkOnly','performance'],'I',['nbExecutions'],'O',['file','java.io.File']]]

Clazz.newMeth(C$, 'c$$java_io_File$Z$Z', function (file, checkOnly, performance) {
;C$.superclazz.c$$S.apply(this,["testFile"]);C$.$init$.apply(this);
this.file=file;
this.checkOnly=checkOnly;
this.performance=performance;
var nbExec=1;
try {
nbExec=Integer.parseInt$S(System.getProperty$S$S("test.nbExecutions", "1"));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
this.nbExecutions=nbExec;
}, 1);

Clazz.newMeth(C$, 'runTest$', function () {
this.testScript$();
});

Clazz.newMeth(C$, 'testScript$', function () {
(function(a,f){return f.apply(null,a)})([this.file.getPath$()],$I$(4).setInformation$S);
if (this.performance) {
this.runPerformanceTest$();
return;
}this.runSimpleTest$();
});

Clazz.newMeth(C$, 'runPerformanceTest$', function () {
var frame=Clazz.new_($I$(5,1));
var viewerOptions=Clazz.new_($I$(6,1));
if (this.checkOnly) viewerOptions.put$O$O("check", $I$(1).TRUE);
var jmol=$I$(7).getJmol$javax_swing_JFrame$I$I$java_util_Map(frame, 500, 500, viewerOptions);
var viewer=jmol.vwr;
var beginFull=$I$(8).getTime$();
for (var i=0; i < this.nbExecutions; i++) {
viewer.scriptWaitStatus$S$S("set defaultDirectory \"" + this.file.getParent$().replace$C$C("\\", "/") + "\"" , "");
var lineNum=0;
var reader=null;
try {
reader=Clazz.new_([Clazz.new_($I$(10,1).c$$java_io_File,[this.file])],$I$(9,1).c$$java_io_Reader);
var line=null;
var beginScript=$I$(8).getTime$();
while ((line=reader.readLine$()) != null ){
lineNum++;
var begin=$I$(8).getTime$();
if (line.indexOf$S("TESTBLOCKSTART") >= 0) {
var s="";
while ((line=reader.readLine$()) != null  && line.indexOf$S("TESTBLOCKEND") < 0 ){
s += line + "\n";
lineNum++;
}
line=s;
}var info=viewer.scriptWaitStatus$S$S(line, "scriptTerminated");
var end=$I$(8).getTime$();
if ((info != null ) && (info.size$() > 0) ) {
var error=info.get$I(0).toString();
if (Clazz.instanceOf(info.get$I(0), "java.util.List")) {
var vector=info.get$I(0);
if (vector.size$() > 0) {
if (Clazz.instanceOf(vector.get$I(0), "java.util.List")) {
vector=vector.get$I(0);
error=vector.get$I(vector.size$() - 1).toString();
}}}if (!error.equalsIgnoreCase$S("Jmol script terminated successfully")) {
(function(a,f){return f.apply(null,a)})(["Error in script [" + this.file.getPath$() + "] " + "at line " + lineNum + " (" + line + "):\n" + error ],$I$(11).fail$S);
}}if ((end - begin) > 0) {
p$2.outputPerformanceMessage$J$S.apply(this, [end - begin, "execute [" + line + "]" ]);
}}
var endScript=$I$(8).getTime$();
p$2.outputPerformanceMessage$J$S.apply(this, [endScript - beginScript, "execute script [" + this.file.getPath$() + "]" ]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
(function(a,f){return f.apply(null,a)})(["File " + this.file.getPath$() + " not found" ],$I$(11).fail$S);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
(function(a,f){return f.apply(null,a)})(["Error reading line " + lineNum + " of " + this.file.getPath$() ],$I$(11).fail$S);
}
} else {
throw e$$;
}
} finally {
if (reader != null ) {
try {
reader.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
}
var endFull=$I$(8).getTime$();
if (this.nbExecutions > 1) {
p$2.outputPerformanceMessage$J$S.apply(this, [endFull - beginFull, this.nbExecutions + " of script"]);
}});

Clazz.newMeth(C$, 'runSimpleTest$', function () {
(function(a,f){return f.apply(null,a)})([this.file.getPath$()],$I$(4).setInformation$S);
var viewer=(function(a,f){return f.apply(null,a)})([Clazz.new_($I$(5,1)), Clazz.new_($I$(13,1)), null, null, null, this.checkOnly ? "-n -c -l " : "-n -l ", null],$I$(12).allocateViewer$O$org_jmol_api_JmolAdapter$S$java_net_URL$java_net_URL$S$org_jmol_api_JmolStatusListener);
var s=viewer.evalFile$S(this.file.getPath$() + " -noqueue");
(function(a,f){return f.apply(null,a)})(["Error in script [" + this.file.getPath$() + ":\n" + s , s],$I$(11).assertNull$S$O);
});

Clazz.newMeth(C$, 'outputPerformanceMessage$J$S', function (duration, message) {
var time="            " + duration;
time=time.substring$I(Math.min(12, time.length$() - 12));
System.err.println$S(time + $I$(8).getUnit$() + ": " + message );
}, p$2);

Clazz.newMeth(C$, 'getName$', function () {
if (this.file != null ) {
return C$.superclazz.prototype.getName$.apply(this, []) + " [" + this.file.getPath$() + "]" ;
}return C$.superclazz.prototype.getName$.apply(this, []);
});

Clazz.newMeth(C$, 'setUp$', function () {
C$.superclazz.prototype.setUp$.apply(this, []);
$I$(4).activateLogger$();
$I$(4).setInformation$S(null);
});

Clazz.newMeth(C$, 'tearDown$', function () {
C$.superclazz.prototype.tearDown$.apply(this, []);
$I$(4).setInformation$S(null);
this.file=null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
