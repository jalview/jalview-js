(function(){var P$=java.lang,I$=[[0,'Shutdown','RuntimePermission','ApplicationShutdownHooks','java.util.StringTokenizer','java.io.File','UnsatisfiedLinkError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Runtime");
C$.currentRuntime=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.currentRuntime=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRuntime$', function () {
return C$.currentRuntime;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'exit$I', function (status) {
var security=System.getSecurityManager$();
if (security != null ) {
security.checkExit$I(status);
}$I$(1).exit$I(status);
});

Clazz.newMeth(C$, 'addShutdownHook$Thread', function (hook) {
var sm=System.getSecurityManager$();
if (sm != null ) {
sm.checkPermission$java_security_Permission(Clazz.new_($I$(2).c$$S,["shutdownHooks"]));
}$I$(3).add$Thread(hook);
});

Clazz.newMeth(C$, 'removeShutdownHook$Thread', function (hook) {
var sm=System.getSecurityManager$();
if (sm != null ) {
sm.checkPermission$java_security_Permission(Clazz.new_($I$(2).c$$S,["shutdownHooks"]));
}return $I$(3).remove$Thread(hook);
});

Clazz.newMeth(C$, 'halt$I', function (status) {
var sm=System.getSecurityManager$();
if (sm != null ) {
sm.checkExit$I(status);
}$I$(1).halt$I(status);
});

Clazz.newMeth(C$, 'runFinalizersOnExit$Z', function (value) {
var security=System.getSecurityManager$();
if (security != null ) {
try {
security.checkExit$I(0);
} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
throw Clazz.new_(Clazz.load('SecurityException').c$$S,["runFinalizersOnExit"]);
} else {
throw e;
}
}
}$I$(1).setRunFinalizersOnExit$Z(value);
}, 1);

Clazz.newMeth(C$, 'exec$S', function (command) {
return this.exec$S$SA$java_io_File(command, null, null);
});

Clazz.newMeth(C$, 'exec$S$SA', function (command, envp) {
return this.exec$S$SA$java_io_File(command, envp, null);
});

Clazz.newMeth(C$, 'exec$S$SA$java_io_File', function (command, envp, dir) {
if (command.length$() == 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Empty command"]);
var st=Clazz.new_($I$(4).c$$S,[command]);
var cmdarray=Clazz.array(String, [st.countTokens$()]);
for (var i=0; st.hasMoreTokens$(); i++) cmdarray[i]=st.nextToken$();

return this.exec$SA$SA$java_io_File(cmdarray, envp, dir);
});

Clazz.newMeth(C$, 'exec$SA', function (cmdarray) {
return this.exec$SA$SA$java_io_File(cmdarray, null, null);
});

Clazz.newMeth(C$, 'exec$SA$SA', function (cmdarray, envp) {
return this.exec$SA$SA$java_io_File(cmdarray, envp, null);
});

Clazz.newMeth(C$, 'exec$SA$SA$java_io_File', function (cmdarray, envp, dir) {

alert("Runtime.exec is not implemented. "+cmdarray[0]);
return null;
});

Clazz.newMeth(C$, 'availableProcessors$', function () {
return 2147483647;
});

Clazz.newMeth(C$, 'freeMemory$', function () {
return 2147483647;
});

Clazz.newMeth(C$, 'totalMemory$', function () {
return 2147483647;
});

Clazz.newMeth(C$, 'maxMemory$', function () {
return 2147483647;
});

Clazz.newMeth(C$, 'gc$', function () {
});

Clazz.newMeth(C$, 'runFinalization0$', function () {
}, 1);

Clazz.newMeth(C$, 'runFinalization$', function () {
C$.runFinalization0$();
});

Clazz.newMeth(C$, 'traceInstructions$Z', function (on) {
});

Clazz.newMeth(C$, 'traceMethodCalls$Z', function (on) {
});

Clazz.newMeth(C$, 'load$S', function (filename) {
this.load0$Class$S(null, filename);
});

Clazz.newMeth(C$, 'load0$Class$S', function (fromClass, filename) {
if (!(Clazz.new_($I$(5).c$$S,[filename]).isAbsolute$())) {
throw Clazz.new_($I$(6).c$$S,["Expecting an absolute path of the library: " + filename]);
}ClassLoader.loadLibrary$Class$S$Z(fromClass, filename, true);
});

Clazz.newMeth(C$, 'loadLibrary$S', function (libname) {
this.loadLibrary0$Class$S(null, libname);
});

Clazz.newMeth(C$, 'loadLibrary0$Class$S', function (fromClass, libname) {
if (libname.indexOf$I($I$(5).separatorChar.$c()) != -1) {
throw Clazz.new_($I$(6).c$$S,["Directory separator should not appear in library name: " + libname]);
}ClassLoader.loadLibrary$Class$S$Z(fromClass, libname, false);
});

Clazz.newMeth(C$, 'getLocalizedInputStream$java_io_InputStream', function ($in) {
return $in;
});

Clazz.newMeth(C$, 'getLocalizedOutputStream$java_io_OutputStream', function (out) {
return out;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:35 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
