(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'java.util.Collections','java.util.HashMap']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DomainLoadStoreParameter", null, null, [['java.security.KeyStore','java.security.KeyStore.LoadStoreParameter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['configuration','java.net.URI','protectionParams','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_net_URI$java_util_Map',  function (configuration, protectionParams) {
;C$.$init$.apply(this);
if (configuration == null  || protectionParams == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["invalid null input"]);
}this.configuration=configuration;
this.protectionParams=$I$(1,"unmodifiableMap$java_util_Map",[Clazz.new_($I$(2,1).c$$java_util_Map,[protectionParams])]);
}, 1);

Clazz.newMeth(C$, 'getConfiguration$',  function () {
return this.configuration;
});

Clazz.newMeth(C$, 'getProtectionParams$',  function () {
return this.protectionParams;
});

Clazz.newMeth(C$, 'getProtectionParameter$',  function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:05 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
