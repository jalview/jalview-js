(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,'java.security.AccessController']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ICUData");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getStream$Class$S$Z',  function (root, resourceName, required) {
var i=null;
if (System.getSecurityManager$() != null ) {
i=$I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.ICUData$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ICUData$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return this.$finals$.root.getResourceAsStream$S(this.$finals$.resourceName);
});
})()
), Clazz.new_(P$.ICUData$1.$init$,[this, {resourceName:resourceName,root:root}]))]);
} else {
i=root.getResourceAsStream$S(resourceName);
}if (i == null  && required ) {
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,["could not locate data", root.getPackage$().getName$(), resourceName]);
}return i;
}, 1);

Clazz.newMeth(C$, 'getStream$S',  function (resourceName) {
return C$.getStream$Class$S$Z(Clazz.getClass(C$), resourceName, false);
}, 1);

Clazz.newMeth(C$, 'getRequiredStream$S',  function (resourceName) {
return C$.getStream$Class$S$Z(Clazz.getClass(C$), resourceName, true);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:09 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
