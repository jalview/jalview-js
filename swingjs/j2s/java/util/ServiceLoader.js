(function(){var P$=java.util,p$1={},I$=[[0,'Error','java.security.AccessController','java.util.LinkedHashMap',['java.util.ServiceLoader','.LazyIterator'],'java.util.Objects','java.util.ServiceConfigurationError','java.util.ArrayList','java.io.BufferedReader','java.io.InputStreamReader','Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ServiceLoader", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Iterable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.service=null;
this.loader=null;
this.acc=null;
this.providers=null;
this.lookupIterator=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.providers=Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'reload$', function () {
this.providers.clear$();
this.lookupIterator=Clazz.new_($I$(4).c$$Class$ClassLoader, [this, null, this.service, this.loader]);
});

Clazz.newMeth(C$, 'c$$Class$ClassLoader', function (svc, cl) {
C$.$init$.apply(this);
this.service=$I$(5).requireNonNull$TT$S(svc, "Service interface cannot be null");
this.loader=(cl == null ) ? ClassLoader.getSystemClassLoader$() : cl;
this.acc=null;
this.reload$();
}, 1);

Clazz.newMeth(C$, 'fail$Class$S$Throwable', function (service, msg, cause) {
throw Clazz.new_($I$(6).c$$S$Throwable,[service.getName$() + ": " + msg , cause]);
}, 1);

Clazz.newMeth(C$, 'fail$Class$S', function (service, msg) {
throw Clazz.new_($I$(6).c$$S,[service.getName$() + ": " + msg ]);
}, 1);

Clazz.newMeth(C$, 'fail$Class$java_net_URL$I$S', function (service, u, line, msg) {
C$.fail$Class$S(service, u + ":" + line + ": " + msg );
}, 1);

Clazz.newMeth(C$, 'parseLine$Class$java_net_URL$java_io_BufferedReader$I$java_util_List', function (service, u, r, lc, names) {
var ln=r.readLine$();
if (ln == null ) {
return -1;
}var ci=ln.indexOf$I("#");
if (ci >= 0) ln=ln.substring$I$I(0, ci);
ln=ln.trim$();
var n=ln.length$();
if (n != 0) {
if ((ln.indexOf$I(" ") >= 0) || (ln.indexOf$I("\t") >= 0) ) C$.fail$Class$java_net_URL$I$S(service, u, lc, "Illegal configuration-file syntax");
var cp=ln.codePointAt$I(0);
if (!Character.isJavaIdentifierStart$I(cp)) C$.fail$Class$java_net_URL$I$S(service, u, lc, "Illegal provider-class name: " + ln);
for (var i=Character.charCount$I(cp); i < n; i+=Character.charCount$I(cp)) {
cp=ln.codePointAt$I(i);
if (!Character.isJavaIdentifierPart$I(cp) && (cp != 46 ) ) C$.fail$Class$java_net_URL$I$S(service, u, lc, "Illegal provider-class name: " + ln);
}
if (!this.providers.containsKey$O(ln) && !names.contains$O(ln) ) names.add$TE(ln);
}return lc + 1;
}, p$1);

Clazz.newMeth(C$, 'parse$Class$java_net_URL', function (service, u) {
var $in=null;
var r=null;
var names=Clazz.new_($I$(7));
try {
$in=u.openStream$();
r=Clazz.new_($I$(8).c$$java_io_Reader,[Clazz.new_($I$(9).c$$java_io_InputStream$S,[$in, "utf-8"])]);
var lc=1;
while ((lc=p$1.parseLine$Class$java_net_URL$java_io_BufferedReader$I$java_util_List.apply(this, [service, u, r, lc, names])) >= 0);
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
C$.fail$Class$S$Throwable(service, "Error reading configuration file", x);
} else {
throw x;
}
} finally {
try {
if (r != null ) r.close$();
if ($in != null ) $in.close$();
} catch (y) {
if (Clazz.exceptionOf(y,"java.io.IOException")){
C$.fail$Class$S$Throwable(service, "Error closing configuration file", y);
} else {
throw y;
}
}
}
return names.iterator$();
}, p$1);

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.ServiceLoader$1||
(function(){var C$=Clazz.newClass(P$, "ServiceLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.knownProviders=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.knownProviders=this.b$['java.util.ServiceLoader'].providers.entrySet$().iterator$();
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
if (this.knownProviders.hasNext$()) return true;
return this.b$['java.util.ServiceLoader'].lookupIterator.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
if (this.knownProviders.hasNext$()) return this.knownProviders.next$().getValue$();
return this.b$['java.util.ServiceLoader'].lookupIterator.next$();
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.ServiceLoader$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'load$Class$ClassLoader', function (service, loader) {
return Clazz.new_(C$.c$$Class$ClassLoader,[service, loader]);
}, 1);

Clazz.newMeth(C$, 'load$Class', function (service) {
var cl=$I$(10).currentThread$().getContextClassLoader$();
return C$.load$Class$ClassLoader(service, cl);
}, 1);

Clazz.newMeth(C$, 'loadInstalled$Class', function (service) {
var cl=ClassLoader.getSystemClassLoader$();
var prev=null;
while (cl != null ){
prev=cl;
cl=cl.getParent$();
}
return C$.load$Class$ClassLoader(service, prev);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "java.util.ServiceLoader[" + this.service.getName$() + "]" ;
});
;
(function(){var C$=Clazz.newClass(P$.ServiceLoader, "LazyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.service=null;
this.loader=null;
this.configs=null;
this.pending=null;
this.nextName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.configs=null;
this.pending=null;
this.nextName=null;
}, 1);

Clazz.newMeth(C$, 'c$$Class$ClassLoader', function (service, loader) {
C$.$init$.apply(this);
this.service=service;
this.loader=loader;
}, 1);

Clazz.newMeth(C$, 'hasNextService', function () {
if (this.nextName != null ) {
return true;
}if (this.configs == null ) {
try {
var fullName="META-INF/services/" + this.service.getName$();
if (this.loader == null ) this.configs=ClassLoader.getSystemResources$S(fullName);
 else this.configs=this.loader.getResources$S(fullName);
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
P$.ServiceLoader.fail$Class$S$Throwable(this.service, "Error locating configuration files", x);
} else {
throw x;
}
}
}while ((this.pending == null ) || !this.pending.hasNext$() ){
if (!this.configs.hasMoreElements$()) {
return false;
}this.pending=p$1.parse$Class$java_net_URL.apply(this.b$['java.util.ServiceLoader'], [this.service, this.configs.nextElement$()]);
}
this.nextName=this.pending.next$();
return true;
}, p$1);

Clazz.newMeth(C$, 'nextService', function () {
if (!p$1.hasNextService.apply(this, [])) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var cn=this.nextName;
this.nextName=null;
var c=null;
try {
c=Clazz.forName(cn, false, this.loader);
} catch (x) {
if (Clazz.exceptionOf(x,"ClassNotFoundException")){
P$.ServiceLoader.fail$Class$S(this.service, "Provider " + cn + " not found" );
} else {
throw x;
}
}
if (!this.service.isAssignableFrom$Class(c)) {
P$.ServiceLoader.fail$Class$S(this.service, "Provider " + cn + " not a subtype" );
}try {
var p=this.service.cast$O(c.newInstance$());
this.this$0.providers.put$TK$TV(cn, p);
return p;
} catch (x) {
P$.ServiceLoader.fail$Class$S$Throwable(this.service, "Provider " + cn + " could not be instantiated" , x);
}
throw Clazz.new_($I$(1));
}, p$1);

Clazz.newMeth(C$, 'hasNext$', function () {
if (this.this$0.acc == null ) {
return p$1.hasNextService.apply(this, []);
} else {
var action=((P$.ServiceLoader$LazyIterator$1||
(function(){var C$=Clazz.newClass(P$, "ServiceLoader$LazyIterator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return new Boolean(p$1.hasNextService.apply(this.b$['java.util.ServiceLoader.LazyIterator'], []));
});
})()
), Clazz.new_(P$.ServiceLoader$LazyIterator$1.$init$, [this, null]));
return ($I$(2).doPrivileged$java_security_PrivilegedAction$java_security_AccessControlContext(action, this.this$0.acc)).booleanValue$();
}});

Clazz.newMeth(C$, 'next$', function () {
if (this.this$0.acc == null ) {
return p$1.nextService.apply(this, []);
} else {
var action=((P$.ServiceLoader$LazyIterator$2||
(function(){var C$=Clazz.newClass(P$, "ServiceLoader$LazyIterator$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return p$1.nextService.apply(this.b$['java.util.ServiceLoader.LazyIterator'], []);
});
})()
), Clazz.new_(P$.ServiceLoader$LazyIterator$2.$init$, [this, null]));
return $I$(2).doPrivileged$java_security_PrivilegedAction$java_security_AccessControlContext(action, this.this$0.acc);
}});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:49 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
