(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "Principal");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'implies$javax_security_auth_Subject', function (subject) {
if (subject == null ) return false;
return subject.getPrincipals$().contains$O(this);
});
};})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
