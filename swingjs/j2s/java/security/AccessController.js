(function(){var P$=Clazz.newPackage("java.security"),I$=[];
var C$=Clazz.newClass(P$, "AccessController", null, null, 'java.security.AccessControlContext');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'doPrivileged$java_security_PrivilegedAction', function (action) {
return action.run$();
}, 1);

Clazz.newMeth(C$, 'doPrivileged$java_security_PrivilegedExceptionAction', function (action) {
try {
return action.run$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'doPrivileged$java_security_PrivilegedAction$java_security_AccessControlContext', function (action, context) {
return action.run$();
}, 1);

Clazz.newMeth(C$, 'getContext$', function () {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, ['checkPermission$O','checkPermission$'], function (perm) {
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:42 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
