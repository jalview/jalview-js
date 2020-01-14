(function(){var P$=Clazz.newPackage("jalview.javascript.web"),I$=[[0,'jalview.javascript.web.ClientResponse','java.net.URL','jalview.util.Platform','java.net.URI',['jalview.javascript.web.WebResource','.Builder']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "WebResource", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.endpoint=null;
this.params=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.params="";
}, 1);

Clazz.newMeth(C$, 'c$$S', function (endpoint) {
C$.$init$.apply(this);
this.endpoint=endpoint;
}, 1);

Clazz.newMeth(C$, 'queryParam$S$S', function (key, value) {
this.params += (this.params == "" ? "?" : "&") + key + "=" + $I$(3).encodeURI$S(value) ;
return this;
});

Clazz.newMeth(C$, 'getURI$', function () {
try {
return Clazz.new_($I$(4).c$$S,[this.endpoint + this.params]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
e.printStackTrace$();
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'accept$SA', function (encoding) {
return Clazz.new_($I$(5).c$$java_net_URI$SA,[this.getURI$(), encoding]);
});
;
(function(){var C$=Clazz.newClass(P$.WebResource, "Builder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.uri=null;
this.encoding=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URI$SA', function (uri, encoding) {
C$.$init$.apply(this);
this.uri=uri;
this.encoding=encoding;
}, 1);

Clazz.newMeth(C$, 'get$Class', function (c) {
try {
return Clazz.new_($I$(1).c$$java_net_URL$SA,[Clazz.new_($I$(2).c$$S,[this.uri.toString()]), this.encoding]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
