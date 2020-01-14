(function(){var P$=Clazz.newPackage("jalview.httpserver"),p$1={},I$=[[0,'java.util.HashMap','jalview.rest.RestHandler','org.eclipse.jetty.util.thread.QueuedThreadPool','org.eclipse.jetty.server.Server','org.eclipse.jetty.server.ServerConnector','org.eclipse.jetty.server.handler.HandlerCollection','java.util.Collections','org.eclipse.jetty.server.handler.ContextHandler','Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HttpServer");
C$.instance=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.server=null;
this.contextHandlers=null;
this.myHandlers=null;
this.contextRoot=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.myHandlers=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
{
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
p$1.startServer.apply(this, []);
this.registerHandler$jalview_httpserver_AbstractRequestHandler($I$(2).getInstance$());
}, 1);

Clazz.newMeth(C$, 'startServer', function () {
try {
var tp=Clazz.new_($I$(3).c$$I$I,[4, 1]);
this.server=Clazz.new_($I$(4).c$$org_eclipse_jetty_util_thread_ThreadPool,[tp]);
var connector=Clazz.new_($I$(5).c$$org_eclipse_jetty_server_Server$I$I,[this.server, 0, 2]);
connector.setHost$S("localhost");
this.server.addConnector$org_eclipse_jetty_server_Connector(connector);
this.server.setStopAtShutdown$Z(true);
this.contextHandlers=Clazz.new_($I$(6).c$$Z,[true]);
this.server.setHandler$org_eclipse_jetty_server_Handler(this.contextHandlers);
this.server.start$();
this.contextRoot=this.server.getURI$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error trying to start HttpServer: " + e.getMessage$());
try {
this.server.stop$();
} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
e1.printStackTrace$();
} else {
throw e1;
}
}
} else {
throw e;
}
}
if (this.server == null ) {
throw Clazz.new_(Clazz.load('java.net.BindException').c$$S,["HttpServer failed to allocate a port"]);
}}, p$1);

Clazz.newMeth(C$, 'getUri$', function () {
return this.server == null  ? null : this.server.getURI$();
});

Clazz.newMeth(C$, 'dumpRequest$javax_servlet_http_HttpServletRequest$javax_servlet_http_HttpServletResponse', function (request, response) {
for (var hdr, $hdr = $I$(7).list$java_util_Enumeration(request.getHeaderNames$()).iterator$(); $hdr.hasNext$()&&((hdr=($hdr.next$())),1);) {
for (var val, $val = $I$(7).list$java_util_Enumeration(request.getHeaders$S(hdr)).iterator$(); $val.hasNext$()&&((val=($val.next$())),1);) {
System.out.println$S(hdr + ": " + val );
}
}
for (var param, $param = $I$(7).list$java_util_Enumeration(request.getParameterNames$()).iterator$(); $param.hasNext$()&&((param=($param.next$())),1);) {
for (var val, $val = 0, $$val = request.getParameterValues$S(param); $val<$$val.length&&((val=($$val[$val])),1);$val++) {
System.out.println$S(param + "=" + val );
}
}
});

Clazz.newMeth(C$, 'stopServer$', function () {
if (this.server != null ) {
if (this.server.isStarted$()) {
try {
this.server.stop$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error stopping Http Server on " + this.server.getURI$() + ": " + e.getMessage$() );
} else {
throw e;
}
}
}}});

Clazz.newMeth(C$, 'registerHandler$jalview_httpserver_AbstractRequestHandler', function (handler) {
var path=handler.getPath$();
if (path == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Must set handler path before registering handler"]);
}var ch=Clazz.new_($I$(8));
ch.setAllowNullPathInfo$Z(true);
ch.setContextPath$S("/" + "jalview" + "/" + path );
ch.setResourceBase$S(".");
ch.setClassLoader$ClassLoader($I$(9).currentThread$().getContextClassLoader$());
ch.setHandler$org_eclipse_jetty_server_Handler(handler);
this.myHandlers.put$TK$TV(handler, ch);
this.contextHandlers.addHandler$org_eclipse_jetty_server_Handler(ch);
try {
ch.start$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error starting handler for " + path + ": " + e.getMessage$() );
} else {
throw e;
}
}
handler.setUri$S(this.contextRoot + ch.getContextPath$().substring$I(1));
System.out.println$S("Jalview " + handler.getName$() + " handler started on " + handler.getUri$() );
});

Clazz.newMeth(C$, 'removeHandler$jalview_httpserver_AbstractRequestHandler', function (handler) {
var ch=this.myHandlers.get$O(handler);
if (ch != null ) {
this.contextHandlers.removeHandler$org_eclipse_jetty_server_Handler(ch);
this.myHandlers.remove$O(handler);
System.out.println$S("Stopped Jalview " + handler.getName$() + " handler on " + handler.getUri$() );
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
