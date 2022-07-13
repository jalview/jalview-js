(function(){var P$=Clazz.newPackage("jalview.rest"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RestHandler", null, 'jalview.httpserver.AbstractRequestHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['instance','jalview.rest.RestHandler']]]

Clazz.newMeth(C$, 'getInstance$',  function () {
{
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setPath$S("rest");
}, 1);

Clazz.newMeth(C$, 'processRequest$javax_servlet_http_HttpServletRequest$javax_servlet_http_HttpServletResponse',  function (request, response) {
var queryString=request.getQueryString$();
var reply="REST not yet implemented; received " + request.getMethod$() + ": " + request.getRequestURL$() + (queryString == null  ? "" : "?" + queryString) ;
System.out.println$S(reply);
response.setHeader$S$S("Cache-Control", "no-cache/no-store");
response.setHeader$S$S("Content-type", "text/plain");
var writer=response.getWriter$();
writer.write$S(reply);
writer.close$();
});

Clazz.newMeth(C$, 'getName$',  function () {
return "Rest";
});

C$.$static$=function(){C$.$static$=0;
C$.instance=null;
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
