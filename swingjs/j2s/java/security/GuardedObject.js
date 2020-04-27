(function(){var P$=Clazz.newPackage("java.security"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "GuardedObject", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['object','java.lang.Object','guard','java.security.Guard']]]

Clazz.newMeth(C$, 'c$$O$java_security_Guard', function (object, guard) {
;C$.$init$.apply(this);
this.guard=guard;
this.object=object;
}, 1);

Clazz.newMeth(C$, 'getObject$', function () {
if (this.guard != null ) this.guard.checkGuard$O(this.object);
return this.object;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (oos) {
if (this.guard != null ) this.guard.checkGuard$O(this.object);
oos.defaultWriteObject$();
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
