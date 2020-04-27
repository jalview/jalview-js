(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Permission", null, null, ['java.security.Guard', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]]

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'checkGuard$O', function (object) {
var sm=System.getSecurityManager$();
if (sm != null ) sm.checkPermission$java_security_Permission(this);
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'newPermissionCollection$', function () {
return null;
});

Clazz.newMeth(C$, 'toString', function () {
var actions=this.getActions$();
if ((actions == null ) || (actions.length$() == 0) ) {
return "(\"" + this.getClass$().getName$() + "\" \"" + this.name + "\")" ;
} else {
return "(\"" + this.getClass$().getName$() + "\" \"" + this.name + "\" \"" + actions + "\")" ;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
