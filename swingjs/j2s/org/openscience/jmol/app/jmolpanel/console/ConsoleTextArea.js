(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel.console"),p$1={},I$=[[0,'org.openscience.jmol.app.jmolpanel.LoopedStreams','org.jmol.viewer.Viewer','java.io.PrintStream','java.io.BufferedReader','java.io.InputStreamReader','Thread']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ConsoleTextArea", null, 'javax.swing.JTextArea');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_io_InputStreamA', function (inStreams) {
Clazz.super_(C$, this);
for (var i=0; i < inStreams.length; ++i) {
p$1.startConsoleReaderThread$java_io_InputStream.apply(this, [inStreams[i]]);
}
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (doRedirect) {
Clazz.super_(C$, this);
var ls=Clazz.new_($I$(1,1));
var redirect=(doRedirect ? System.getProperty$S("JmolConsole") : "false");
if (!$I$(2).isSwingJS) if (redirect == null  || redirect.equals$O("true") ) {
var ps=Clazz.new_([ls.getOutputStream$()],$I$(3,1).c$$java_io_OutputStream);
System.setOut$java_io_PrintStream(ps);
System.setErr$java_io_PrintStream(ps);
}if (!$I$(2).isSwingJS) p$1.startConsoleReaderThread$java_io_InputStream.apply(this, [ls.getInputStream$()]);
}, 1);

Clazz.newMeth(C$, 'startConsoleReaderThread$java_io_InputStream', function (inStream) {
var br=Clazz.new_([Clazz.new_($I$(5,1).c$$java_io_InputStream,[inStream])],$I$(4,1).c$$java_io_Reader);
Clazz.new_([((P$.ConsoleTextArea$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ConsoleTextArea$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
$I$(6).currentThread$().setName$S("ConsoleReaderThread");
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
), Clazz.new_(P$.ConsoleTextArea$1.$init$,[this, {br:br}]))],$I$(6,1).c$$Runnable).start$();
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
