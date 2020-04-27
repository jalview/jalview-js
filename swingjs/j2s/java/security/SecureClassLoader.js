(function(){var P$=Clazz.newPackage("java.security"),p$1={},I$=[[0,'sun.security.util.Debug','java.util.HashMap','java.security.Permissions','java.security.ProtectionDomain']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SecureClassLoader", null, 'ClassLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pdcache=Clazz.new_($I$(2,1).c$$I,[11]);
},1);

C$.$fields$=[['Z',['initialized'],'O',['pdcache','java.util.HashMap']]
,['O',['debug','sun.security.util.Debug']]]

Clazz.newMeth(C$, 'c$$ClassLoader', function (parent) {
;C$.superclazz.c$$ClassLoader.apply(this,[parent]);C$.$init$.apply(this);
var security=System.getSecurityManager$();
if (security != null ) {
security.checkCreateClassLoader$();
}this.initialized=true;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
var security=System.getSecurityManager$();
if (security != null ) {
security.checkCreateClassLoader$();
}this.initialized=true;
}, 1);

Clazz.newMeth(C$, 'defineClass$S$BA$I$I$java_security_CodeSource', function (name, b, off, len, cs) {
return this.defineClass$S$BA$I$I$java_security_ProtectionDomain(name, b, off, len, p$1.getProtectionDomain$java_security_CodeSource.apply(this, [cs]));
});

Clazz.newMeth(C$, 'defineClass$S$java_nio_ByteBuffer$java_security_CodeSource', function (name, b, cs) {
return this.defineClass$S$java_nio_ByteBuffer$java_security_ProtectionDomain(name, b, p$1.getProtectionDomain$java_security_CodeSource.apply(this, [cs]));
});

Clazz.newMeth(C$, 'getPermissions$java_security_CodeSource', function (codesource) {
p$1.check.apply(this, []);
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getProtectionDomain$java_security_CodeSource', function (cs) {
if (cs == null ) return null;
var pd=null;
{
pd=this.pdcache.get$O(cs);
if (pd == null ) {
var perms=this.getPermissions$java_security_CodeSource(cs);
pd=Clazz.new_($I$(4,1).c$$java_security_CodeSource$java_security_PermissionCollection$ClassLoader$java_security_PrincipalA,[cs, perms, this, null]);
this.pdcache.put$O$O(cs, pd);
if (C$.debug != null ) {
C$.debug.println$S(" getPermissions " + pd);
C$.debug.println$S("");
}}}return pd;
}, p$1);

Clazz.newMeth(C$, 'check', function () {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('SecurityException').c$$S,["ClassLoader object not initialized"]);
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.debug=$I$(1).getInstance$S("scl");
{
ClassLoader.registerAsParallelCapable$();
};
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
