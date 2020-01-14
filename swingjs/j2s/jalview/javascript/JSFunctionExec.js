(function(){var P$=Clazz.newPackage("jalview.javascript"),I$=[[0,'netscape.javascript.JSObject','jalview.bin.JalviewLite','StringBuffer','java.net.URL','Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSFunctionExec", null, null, 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.jvlite=null;
this.jsExecQueue=null;
this.executor=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.executor=null;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_bin_JalviewLite', function (applet) {
C$.$init$.apply(this);
this.jvlite=applet;
this.jsExecQueue=this.jvlite.getJsExecQueue$();
this.jvlite.setExecutor$jalview_javascript_JSFunctionExec(this);
}, 1);

Clazz.newMeth(C$, 'stopQueue$', function () {
if (this.jsExecQueue != null ) {
var q=null;
{
q=this.jsExecQueue;
this.jsExecQueue=null;
}if (q != null ) {
for (var jx, $jx = q.iterator$(); $jx.hasNext$()&&((jx=($jx.next$())),1);) {
jx.jvlite=null;
}
q.removeAllElements$();
{
q.notifyAll$();
}}}this.jvlite=null;
this.executor=null;
});

Clazz.newMeth(C$, 'run$', function () {
while (this.jsExecQueue != null ){
if (this.jsExecQueue.size$() > 0) {
var r=this.jsExecQueue.elementAt$I(0);
this.jsExecQueue.removeElementAt$I(0);
try {
r.run$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
ex.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var ex = e$$;
{
ex.printStackTrace$();
}
} else {
throw e$$;
}
}
} else {
try {
{
this.jsExecQueue.wait$J(1000);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
;}}
});

Clazz.newMeth(C$, 'executeJavascriptFunction$S$OA', function (_listener, objects) {
this.executeJavascriptFunction$Z$S$OA(false, _listener, objects);
});

Clazz.newMeth(C$, 'executeJavascriptFunction$Z$S$OA', function (async, _listener, $arguments) {
this.executeJavascriptFunction$Z$S$OA$S(async, _listener, $arguments, null);
});

Clazz.newMeth(C$, 'executeJavascriptFunction$Z$S$OA$S', function (async, _listener, $arguments, dbgMsg) {
var objects=Clazz.array(java.lang.Object, [$arguments != null  ? $arguments.length : 0]);
if ($arguments != null ) {
System.arraycopy$O$I$O$I$I($arguments, 0, objects, 0, $arguments.length);
}var jsex=Clazz.array(Clazz.load('Exception'), [1]);
var exec=((P$.JSFunctionExec$1||
(function(){var C$=Clazz.newClass(P$, "JSFunctionExec$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
var scriptObject=null;
try {
scriptObject=$I$(1).getWindow$java_applet_Applet(this.b$['jalview.javascript.JSFunctionExec'].jvlite);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
;if (scriptObject != null ) {
if ($I$(2).debug && this.$finals$.dbgMsg != null  ) {
System.err.println$S(this.$finals$.dbgMsg);
}scriptObject.call$S$OA(this.$finals$._listener, this.$finals$.objects);
}} catch (jex) {
if (Clazz.exceptionOf(jex,"Exception")){
if (!(Clazz.instanceOf(jex, "java.net.MalformedURLException"))) {
if ($I$(2).debug) {
System.err.println$O(jex);
}if (Clazz.instanceOf(jex, "netscape.javascript.JSException") && this.b$['jalview.javascript.JSFunctionExec'].jvlite.jsfallbackEnabled ) {
this.$finals$.jsex[0]=jex;
if ($I$(2).debug) {
System.err.println$S("Falling back to javascript: url call");
}var sb=Clazz.new_($I$(3).c$$S,["javascript:" + this.$finals$._listener + "(" ]);
for (var i=0; this.$finals$.objects != null  && i < this.$finals$.objects.length ; i++) {
if (i > 0) {
sb.append$S(",");
}sb.append$S("\"");
if (this.$finals$.objects[i] != null  && !(this.$finals$.objects[i].getClass$().getName$().indexOf$S("jalview") == 0) ) {
sb.append$S(this.$finals$.objects[i].toString());
}sb.append$S("\"");
}
sb.append$S(")");
if ($I$(2).debug) {
System.err.println$S(sb.toString());
}var url=null;
try {
url=Clazz.new_($I$(4).c$$S,[sb.toString()]);
this.b$['jalview.javascript.JSFunctionExec'].jvlite.getAppletContext$().showDocument$java_net_URL(url);
jex=null;
} catch (uex) {
if (Clazz.exceptionOf(uex,"Exception")){
jex=uex;
} else {
throw uex;
}
}
}if (jex != null ) {
if (this.$finals$.async) {
jex.printStackTrace$();
} else {
this.$finals$.jsex[0]=jex;
}};}} else {
throw jex;
}
}
});
})()
), Clazz.new_(P$.JSFunctionExec$1.$init$, [this, {dbgMsg: dbgMsg, _listener: _listener, objects: objects, jsex: jsex, async: async}]));
if (async) {
if (this.executor == null ) {
this.executor=Clazz.new_($I$(5).c$$Runnable,[Clazz.new_(C$.c$$jalview_bin_JalviewLite,[this.jvlite])]);
this.executor.start$();
}{
this.jsExecQueue.addElement$TE(exec);
this.jsExecQueue.notify$();
}} else {
exec.run$();
if (jsex[0] != null ) {
throw (jsex[0]);
}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
