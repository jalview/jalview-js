(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'java.security.AccessController','AssertionError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Reflect");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setAccessible$reflect_AccessibleObject', function (ao) {
$I$(1).doPrivileged$java_security_PrivilegedAction(((P$.Reflect$1||
(function(){var C$=Clazz.newClass(P$, "Reflect$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.ao.setAccessible$Z(true);
return null;
});
})()
), Clazz.new_(P$.Reflect$1.$init$, [this, {ao: ao}])));
}, 1);

Clazz.newMeth(C$, 'lookupField$S$S', function (className, fieldName) {
try {
var cl=Clazz.forName(className);
var f=cl.getDeclaredField$S(fieldName);
C$.setAccessible$reflect_AccessibleObject(f);
return f;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var x = e$$;
{
throw Clazz.new_($I$(2).c$$O,[x]);
}
} else if (Clazz.exceptionOf(e$$,"NoSuchFieldException")){
var x = e$$;
{
throw Clazz.new_($I$(2).c$$O,[x]);
}
} else {
throw e$$;
}
}
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
