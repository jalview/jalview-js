(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "URIParameter", null, null, [['java.security.Policy','java.security.Policy.Parameters'], ['javax.security.auth.login.Configuration','javax.security.auth.login.Configuration.Parameters']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['uri','java.net.URI']]]

Clazz.newMeth(C$, 'c$$java_net_URI',  function (uri) {
;C$.$init$.apply(this);
if (uri == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["invalid null URI"]);
}this.uri=uri;
}, 1);

Clazz.newMeth(C$, 'getURI$',  function () {
return this.uri;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:06 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
