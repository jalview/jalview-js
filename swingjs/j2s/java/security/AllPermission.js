(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'java.security.AllPermissionCollection','sun.security.util.SecurityConstants']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AllPermission", null, 'java.security.Permission');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["<all permissions>"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (name, actions) {
C$.c$.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'implies$java_security_Permission',  function (p) {
return true;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return (Clazz.instanceOf(obj, "java.security.AllPermission"));
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getActions$',  function () {
return "<all actions>";
});

Clazz.newMeth(C$, 'newPermissionCollection$',  function () {
return Clazz.new_($I$(1,1));
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:05 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
