(function(){var P$=Clazz.newPackage("jalview.httpserver"),I$=[[0,'java.util.Collections','jalview.httpserver.HttpServer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractRequestHandler", null, 'org.eclipse.jetty.server.handler.AbstractHandler');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.path=null;
this.uri=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'handle$S$org_eclipse_jetty_server_Request$javax_servlet_http_HttpServletRequest$javax_servlet_http_HttpServletResponse', function (target, baseRequest, request, response) {
try {
this.processRequest$javax_servlet_http_HttpServletRequest$javax_servlet_http_HttpServletResponse(request, response);
} catch (t) {
System.err.println$S("Exception handling request " + request.getRequestURI$() + " : " + t.getMessage$() );
if (response.isCommitted$()) {
System.err.println$S("Unable to return HTTP 500 as response already committed");
} else {
response.setStatus$I(500);
}} finally {
response.getWriter$().flush$();
baseRequest.setHandled$Z(true);
}
});

Clazz.newMeth(C$, 'dumpRequest$javax_servlet_http_HttpServletRequest', function (request) {
System.out.println$S(request.getMethod$());
System.out.println$O(request.getRequestURL$());
for (var hdr, $hdr = $I$(1).list$java_util_Enumeration(request.getHeaderNames$()).iterator$(); $hdr.hasNext$()&&((hdr=($hdr.next$())),1);) {
for (var val, $val = $I$(1).list$java_util_Enumeration(request.getHeaders$S(hdr)).iterator$(); $val.hasNext$()&&((val=($val.next$())),1);) {
System.out.println$S(hdr + ": " + val );
}
}
for (var param, $param = $I$(1).list$java_util_Enumeration(request.getParameterNames$()).iterator$(); $param.hasNext$()&&((param=($param.next$())),1);) {
for (var val, $val = 0, $$val = request.getParameterValues$S(param); $val<$$val.length&&((val=($$val[$val])),1);$val++) {
System.out.println$S(param + "=" + val );
}
}
});

Clazz.newMeth(C$, 'shutdown$', function () {
try {
$I$(2).getInstance$().removeHandler$jalview_httpserver_AbstractRequestHandler(this);
this.stop$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error stopping " + this.getName$() + ": " + e.getMessage$() );
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getUri$', function () {
return this.uri;
});

Clazz.newMeth(C$, 'setUri$S', function (u) {
this.uri=u;
});

Clazz.newMeth(C$, 'setPath$S', function (p) {
this.path=p;
});

Clazz.newMeth(C$, 'getPath$', function () {
return this.path;
});

Clazz.newMeth(C$, 'registerHandler$', function () {
$I$(2).getInstance$().registerHandler$jalview_httpserver_AbstractRequestHandler(this);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
