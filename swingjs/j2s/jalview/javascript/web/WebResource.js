(function(){var P$=Clazz.newPackage("jalview.javascript.web"),I$=[[0,'jalview.javascript.web.ClientResponse','java.net.URL','jalview.util.Platform','java.net.URI',['jalview.javascript.web.WebResource','.Builder']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WebResource", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Builder',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.params="";
},1);

C$.$fields$=[['S',['endpoint','params']]]

Clazz.newMeth(C$, 'c$$S',  function (endpoint) {
;C$.$init$.apply(this);
this.endpoint=endpoint;
}, 1);

Clazz.newMeth(C$, 'queryParam$S$S',  function (key, value) {
this.params+=(this.params === ""  ? "?" : "&") + key + "=" + $I$(3).encodeURI$S(value) ;
return this;
});

Clazz.newMeth(C$, 'getURI$',  function () {
try {
return Clazz.new_($I$(4,1).c$$S,[this.endpoint + this.params]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
e.printStackTrace$();
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'accept$SA',  function (encoding) {
return Clazz.new_([this.getURI$(), encoding],$I$(5,1).c$$java_net_URI$SA);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.WebResource, "Builder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['uri','java.net.URI','encoding','String[]']]]

Clazz.newMeth(C$, 'c$$java_net_URI$SA',  function (uri, encoding) {
;C$.$init$.apply(this);
this.uri=uri;
this.encoding=encoding;
}, 1);

Clazz.newMeth(C$, 'get$Class',  function (c) {
try {
return Clazz.new_([Clazz.new_([this.uri.toString()],$I$(2,1).c$$S), this.encoding],$I$(1,1).c$$java_net_URL$SA);
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

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
