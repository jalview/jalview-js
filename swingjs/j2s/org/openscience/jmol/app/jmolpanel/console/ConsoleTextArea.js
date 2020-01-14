(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel.console"),p$1={},I$=[[0,'org.openscience.jmol.app.jmolpanel.LoopedStreams','java.io.PrintStream','java.io.BufferedReader','java.io.InputStreamReader','Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ConsoleTextArea", null, 'javax.swing.JTextArea');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStreamA', function (inStreams) {
Clazz.super_(C$, this,1);
for (var i=0; i < inStreams.length; ++i) {
p$1.startConsoleReaderThread$java_io_InputStream.apply(this, [inStreams[i]]);
}
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (doRedirect) {
Clazz.super_(C$, this,1);
var ls=Clazz.new_($I$(1));
var redirect=(doRedirect ? System.getProperty$S("JmolConsole") : "false");
if (redirect == null  || redirect.equals$O("true") ) {
var ps=Clazz.new_($I$(2).c$$java_io_OutputStream,[ls.getOutputStream$()]);
System.setOut$java_io_PrintStream(ps);
System.setErr$java_io_PrintStream(ps);
}p$1.startConsoleReaderThread$java_io_InputStream.apply(this, [ls.getInputStream$()]);
}, 1);

Clazz.newMeth(C$, 'startConsoleReaderThread$java_io_InputStream', function (inStream) {
var br=Clazz.new_($I$(3).c$$java_io_Reader,[Clazz.new_($I$(4).c$$java_io_InputStream,[inStream])]);
Clazz.new_($I$(5).c$$Runnable,[((P$.ConsoleTextArea$1||
(function(){var C$=Clazz.newClass(P$, "ConsoleTextArea$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(5).currentThread$().setName$S("ConsoleReaderThread");
try {
var s;
while ((s=this.$finals$.br.readLine$()) != null ){
this.b$['javax.swing.JTextArea'].append$S.apply(this.b$['javax.swing.JTextArea'], [s + "\n"]);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.ConsoleTextArea$1.$init$, [this, {br: br}]))]).start$();
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
