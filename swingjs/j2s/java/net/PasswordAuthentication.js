(function(){var P$=Clazz.newPackage("java.net"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PasswordAuthentication");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['userName'],'O',['password','char[]']]]

Clazz.newMeth(C$, 'c$$S$CA',  function (userName, password) {
;C$.$init$.apply(this);
this.userName=userName;
this.password=password.clone$();
}, 1);

Clazz.newMeth(C$, 'getUserName$',  function () {
return this.userName;
});

Clazz.newMeth(C$, 'getPassword$',  function () {
return this.password;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:00 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
