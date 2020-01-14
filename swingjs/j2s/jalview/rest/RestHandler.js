(function(){var P$=Clazz.newPackage("jalview.rest"),I$=[];
var C$=Clazz.newClass(P$, "RestHandler", null, 'jalview.httpserver.AbstractRequestHandler');
C$.instance=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.instance=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
{
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setPath$S("rest");
}, 1);

Clazz.newMeth(C$, 'processRequest$javax_servlet_http_HttpServletRequest$javax_servlet_http_HttpServletResponse', function (request, response) {
var queryString=request.getQueryString$();
var reply="REST not yet implemented; received " + request.getMethod$() + ": " + request.getRequestURL$() + (queryString == null  ? "" : "?" + queryString) ;
System.out.println$S(reply);
response.setHeader$S$S("Cache-Control", "no-cache/no-store");
response.setHeader$S$S("Content-type", "text/plain");
var writer=response.getWriter$();
writer.write$S(reply);
writer.close$();
});

Clazz.newMeth(C$, 'getName$', function () {
return "Rest";
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
