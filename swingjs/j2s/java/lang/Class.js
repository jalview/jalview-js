(function(){var P$=java.lang,p$1={},I$=[[0,'java.lang.reflect.Method','java.util.Arrays','java.lang.reflect.TypeVariable','swingjs.JSUtil','java.lang.reflect.Field','java.lang.reflect.Constructor','Boolean','Void','java.util.HashMap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Class", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.io.Serializable', 'java.lang.reflect.GenericDeclaration']);
C$.initted=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.initted=false;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$clazz$=null;
this.$methodList$=null;
this.name=null;
this.fields=null;
this.classRedefinedCount=0;
this.lastRedefinedCount=0;
this.enumConstants=null;
this.enumConstantDirectory=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.classRedefinedCount=0;
this.lastRedefinedCount=0;
this.enumConstants=null;
this.enumConstantDirectory=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return (this.isInterface$() ? "interface " : (this.isPrimitive$() ? "" : "class ")) + this.getName$();
});

Clazz.newMeth(C$, 'forName$S', function (className) {
return C$.forName0$S$Z$ClassLoader(className, true, null);
}, 1);

Clazz.newMeth(C$, 'forName$S$Z$ClassLoader', function (name, initialize, loader) {
return C$.forName0$S$Z$ClassLoader(name, initialize, loader);
}, 1);

Clazz.newMeth(C$, 'forName0$S$Z$ClassLoader', function (name, initialize, loader) {
{
return Clazz.forName(name, initialize, loader);
}
}, 1);

Clazz.newMeth(C$, 'newInstance$', function () {
{
return new this.$clazz$;
}
});

Clazz.newMeth(C$, 'isInstance$O', function (obj) {
{
return Clazz.instanceOf(obj, this.$clazz$);
}
});

Clazz.newMeth(C$, 'isAssignableFrom$Class', function (cls) {
{
return(Clazz.instanceOf(cls.$clazz$, this.$clazz$));
}
});

Clazz.newMeth(C$, 'isInterface$', function () {
{
return this.$clazz$.$isInterface;
}
});

Clazz.newMeth(C$, 'isArray$', function () {
{
return !!this.$clazz$.__ARRAYTYPE;
}
});

Clazz.newMeth(C$, 'isPrimitive$', function () {
{
return !!this.__PRIMITIVE;
}
});

Clazz.newMeth(C$, 'isAnnotation$', function () {
return (this.getModifiers$() & 8192) != 0;
});

Clazz.newMeth(C$, 'isSynthetic$', function () {
return (this.getModifiers$() & 4096) != 0;
});

Clazz.newMeth(C$, 'getName$', function () {
if (this.name == null ) this.name=p$1.getName0.apply(this, []);
return this.name;
});

Clazz.newMeth(C$, 'getName0', function () {
var code="";

code = this.$clazz$.__CLASS_NAME$__ || this.$clazz$.__CLASS_NAME__;
if (code) return code;
code = this.$clazz$.__PARAMCODE;
switch (code) {
case "S":
code="String";
break;
case "I":
code="Integer";
break;
case "H":
code="Short";
break;
case "B":
code="Byte";
break;
case "L":
code="Long";
break;
case "C":
code="Character";
break;
default:
return null;
}
return "java.lang." + code;
}, p$1);

Clazz.newMeth(C$, 'getClassLoader$', function () {
var cl=this.getClassLoader0$();

cl.baseClass = this;
return cl;
});

Clazz.newMeth(C$, 'getClassLoader0$', function () {
var loader=null;
{
var baseFolder = Clazz._Loader.getJ2SLibBase();
loader = Clazz._Loader.requireLoaderByBase(baseFolder);
var me = this;
loader.getResourceAsStream$S = function(s) { return me.getResourceAsStream$S(s.indexOf("/") == 0 ? s : "/" + s) };
loader.getResource$S = function(s) { return me.getResource$S(s.indexOf("/") == 0 ? s : "/" + s) };
}
return loader;
});

Clazz.newMeth(C$, 'getTypeParameters$', function () {
return Clazz.array($I$(3), [0]);
});

Clazz.newMeth(C$, 'getSuperclass$', function () {
{
if (this.$clazz$ == java.lang.Object) return null;
return Clazz.getClass(this.$clazz$.superclazz || java.lang.Object);
}
});

Clazz.newMeth(C$, 'getInterfaces$', function () {
$I$(4).notImplemented$S(null);
return Clazz.array(Class, [0]);
});

Clazz.newMeth(C$, 'getComponentType$', function () {
return null;
});

Clazz.newMeth(C$, 'getModifiers$', function () {
return 1 | (this.isEnum$() ? 16384 : this.isInterface$() ? 512 : 0);
});

Clazz.newMeth(C$, 'getSigners$', function () {
$I$(4).notImplemented$S(null);
return Clazz.array(java.lang.Object, [0]);
});

Clazz.newMeth(C$, 'setSigners$OA', function (signers) {
$I$(4).notImplemented$S(null);
});

Clazz.newMeth(C$, 'getDeclaringClass$', function () {
$I$(4).notImplemented$S(null);
return null;
});

Clazz.newMeth(C$, 'getSimpleName$', function () {
if (this.isArray$()) return this.getComponentType$().getSimpleName$() + "[]";
var name="";
{
name = (this.$clazz$.__ANON ? "" : this.$clazz$.__CLASS_NAME__);
}
return name.substring$I(name.lastIndexOf$S(".") + 1);
});

Clazz.newMeth(C$, 'getCanonicalName$', function () {
if (this.isArray$()) {
var canonicalName=this.getComponentType$().getCanonicalName$();
if (canonicalName != null ) return canonicalName + "[]";
 else return null;
}if (p$1.isLocalOrAnonymousClass.apply(this, [])) return null;
var name=null;

name = this.$clazz$.__CLASS_NAME__ || null;
return name;
});

Clazz.newMeth(C$, 'isAnonymousClass$', function () {
return "".equals$O(this.getSimpleName$());
});

Clazz.newMeth(C$, 'isLocalClass$', function () {
{
return !!this.$clazz$.__LOCAL;
}
});

Clazz.newMeth(C$, 'isLocalOrAnonymousClass', function () {
{
return !!this.$clazz$.__ISANON || !!this.$clazz$.__LOCAL;
}
}, p$1);

Clazz.newMeth(C$, 'getClasses$', function () {
return null;
});

Clazz.newMeth(C$, 'getFields$', function () {
if (this.fields != null ) return this.fields;
this.fields=Clazz.array($I$(5), [0]);
var _static=8;
var cl=this.$clazz$ ||null;
var proto=cl.prototype ||null;
p$1.addFields$O$reflect_FieldA$I.apply(this, [proto, this.fields, 0]);
p$1.addFields$O$reflect_FieldA$I.apply(this, [cl, this.fields, _static]);
return this.fields;
});

Clazz.newMeth(C$, 'getMethods$', function () {
return (p$1.privateGetPublicMethods.apply(this, []));
});

Clazz.newMeth(C$, 'getConstructors$', function () {
return null;
});

Clazz.newMeth(C$, 'getField$S', function (name) {
this.getFields$();
for (var i=this.fields.length; --i >= 0; ) {
if (this.fields[i].jsName == name) return this.fields[i];
}
throw Clazz.new_(Clazz.load('NoSuchFieldException').c$$S,["field " + name]);
});

Clazz.newMeth(C$, 'addFields$O$reflect_FieldA$I', function (c, f, modifiers) {
var m=null;
for (m in c) { if (!modifiers && this.$clazz$[m]) continue;
if (this.excludeField$S(m)) continue;
var o = c[m];
switch (typeof o) { case "object": if (o && o.__CLASS_NAME__) continue;
case "number": case "boolean": case "string":p$1.addField$reflect_FieldA$S$I.apply(this, [f, m, modifiers]);

break;
} }
}, p$1);

Clazz.newMeth(C$, 'excludeField$S', function (name) {
return (name == "prototype" || name.startsWith$S("__") );
});

Clazz.newMeth(C$, 'addField$reflect_FieldA$S$I', function (fields, m, modifiers) {
var f=Clazz.new_($I$(5).c$$Class$S$I,[this, m, modifiers]);

fields.push(f);
}, p$1);

Clazz.newMeth(C$, 'getMethod$S$ClassA', function (name, paramTypes) {
var m=Clazz.new_($I$(1).c$$Class$S$ClassA$Class$ClassA$I,[this, name, paramTypes, null, null, 0]);
if (!this.isInterface$()) {
var o=null;
var qname=name + C$.argumentTypesToString$ClassA(paramTypes);

o = this.$clazz$;
o = o[qname] || o.prototype && o.prototype[qname];
if (o == null ) throw Clazz.new_(Clazz.load('NoSuchMethodException').c$$S,[this.getName$() + "." + qname ]);
}return m;
});

Clazz.newMeth(C$, 'getConstructor$ClassA', function (parameterTypes) {
var x=parameterTypes;
if (parameterTypes == null ) parameterTypes=Clazz.array(Class, [0]);
return Clazz.new_($I$(6).c$$Class$ClassA$ClassA$I,[this, parameterTypes, Clazz.array(Class, [0]), 0]);
});

Clazz.newMeth(C$, 'getDeclaredClasses$', function () {
return this.getClasses$();
});

Clazz.newMeth(C$, 'getDeclaredFields$', function () {
return this.getFields$();
});

Clazz.newMeth(C$, 'getDeclaredMethods$', function () {
return this.getMethods$();
});

Clazz.newMeth(C$, 'getDeclaredConstructors$', function () {
return this.getConstructors$();
});

Clazz.newMeth(C$, 'getDeclaredField$S', function (name) {
return this.getField$S(name);
});

Clazz.newMeth(C$, 'getDeclaredMethod$S$ClassA', function (name, parameterTypes) {
return this.getMethod$S$ClassA(name, parameterTypes);
});

Clazz.newMeth(C$, 'getDeclaredConstructor$ClassA', function (parameterTypes) {
return this.getConstructor$ClassA(parameterTypes);
});

Clazz.newMeth(C$, 'getResourceAsStream$S', function (name) {
var clazzName=this.$clazz$.__CLASS_NAME$__ ||  this.$clazz$.__CLASS_NAME__ ||"";
var data=null;
var fname=null;

if (!name) return null;
name = name.replace (/\\/g, '/');
var baseFolder = null;
fname = name;
if (arguments.length == 2 && name.indexOf ('/') != 0) { // additional argument
name = "/" + name;
} if (name.indexOf ('/') == 0) { if (arguments.length == 2)  // additional argument
baseFolder = arguments[1];
if (!baseFolder) baseFolder = Clazz._Loader.getJ2SLibBase();
if (baseFolder.charAt(baseFolder.length - 1) != '/') baseFolder += "/";
fname = baseFolder + name.substring (1);
} else { baseFolder = Clazz._Loader.getJ2SLibBase(); // getClass().getClassLoader() uses full path
fname = baseFolder;
if (this.$_$base == null) { // getClass().getResource() will be here
var pkgs = clazzName.split(".");
var fname = baseFolder;
if (fname.charAt(fname.length - 1) != '/') fname += "/";
var map = Clazz._allPackage;
for (var i = 0; i < pkgs.length - 1; i++) { if (!(map = map[pkgs[i]])) break;
fname += pkgs[i] + "/";
} } fname += name;
} var url = null;
var javapath = fname;
try { if (fname.indexOf(":/") < 0) { var d = document.location.href.split("?")[0].split("/");
d[d.length - 1] = fname;
fname = d.join("/");
} Clazz.load("java.net.URL");
url = Clazz.new_(java.net.URL.c$$S,[fname]);
} catch (e) { return null;
} var fileCache = J2S.getSetJavaFileCache(null);
data = fileCache && fileCache.get$O(javapath);
if (data == null ) data=$I$(4).J2S.getFileData(fname.toString(), null, true, true);
{
if (data == null || data == "error" || data.indexOf && data.indexOf("[Exception") == 0) return null;
var bytes = (data.__BYTESIZE == 1 ? data : J2S._strToBytes(data));
Clazz.load("java.io.BufferedInputStream");
Clazz.load("java.io.ByteArrayInputStream");
var is = Clazz.new_(java.io.BufferedInputStream.c$$java_io_InputStream, [Clazz.new_(java.io.ByteArrayInputStream.c$$BA, [bytes])]);
is.url = url;
url._streamData = is;
return is;
}
});

Clazz.newMeth(C$, 'getResource$S', function (name) {
{
var stream = this.getResourceAsStream$S(name);
return(stream ? stream.url : null);
}
});

Clazz.newMeth(C$, 'getPrimitiveClass$S', function (name) {
switch (name) {
case "boolean":
return $I$(7).TYPE;
case "byte":
return Byte.TYPE;
case "char":
return Character.TYPE;
case "short":
return Short.TYPE;
case "int":
return Integer.TYPE;
case "long":
return Long.TYPE;
case "float":
return Float.TYPE;
case "double":
return Double.TYPE;
default:
return null;
}
}, 1);

Clazz.newMeth(C$, 'privateGetPublicMethods', function () {
var ms;
if (this.$methodList$ != null ) {
ms=Clazz.array($I$(1), [this.$methodList$.length]);
for (var i=ms.length; --i >= 0; ) {
ms[i]=Clazz.new_($I$(1).c$$Class$S$ClassA$Class$ClassA$I,[this, this.$methodList$[i], null, Clazz.getClass($I$(8)), null, 1]);
}
return ms;
}ms=Clazz.array($I$(1), [0]);
{
var p = this.$clazz$.prototype;
for (var attr in p) { if (typeof p[attr] == "function" && !p[attr].__CLASS_NAME__ && p[attr] != this.$clazz$[attr] && p[attr].exClazz == this.$clazz$) { // there are polynormical methods.
ms.push(Clazz.new_(Clazz.load('java.lang.reflect.Method').c$$Class$S$ClassA$Class$ClassA$I,  [this, attr, [], java.lang.Void, [], 1]));
} } p = this.$clazz$;
for (var attr in p) { if (typeof p[attr] == "function" && !p[attr].__CLASS_NAME__  && p[attr].exClazz == this.$clazz$) { ms.push(Clazz.new_(Clazz.load('java.lang.reflect.Method').c$$Class$S$ClassA$Class$ClassA$I,  [this, attr, [], java.lang.Void, [], 1 | 8]));
} }
}
return ms;
}, p$1);

Clazz.newMeth(C$, 'arrayContentsEq$OA$OA', function (a1, a2) {
if (a1 == null ) {
return a2 == null  || a2.length == 0 ;
}if (a2 == null ) {
return a1.length == 0;
}if (a1.length != a2.length) {
return false;
}for (var i=0; i < a1.length; i++) {
if (a1[i] !== a2[i] ) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'argumentTypesToString$ClassA', function (parameterTypes) {
var s="";
if (parameterTypes != null ) for (var i=0; i < parameterTypes.length; i++) s += "$" + (Clazz._getParamCode(parameterTypes[i]) ||null);

return s;
}, 1);

Clazz.newMeth(C$, 'isEnum$', function () {
{
return this.$clazz$.$isEnum;
}
});

Clazz.newMeth(C$, 'getEnumConstants$', function () {
return this.getEnumConstantsShared$();
});

Clazz.newMeth(C$, 'getEnumConstantsShared$', function () {
if (this.enumConstants == null ) {
if (this.isEnum$()) this.enumConstants=this.$clazz$.values$() ||null;
}return this.enumConstants;
});

Clazz.newMeth(C$, 'enumConstantDirectory$', function () {
if (this.enumConstantDirectory == null ) {
var universe=this.getEnumConstantsShared$();
if (universe == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[this.getName$() + " is not an enum type"]);
var m=Clazz.new_($I$(9).c$$I,[2 * universe.length]);
for (var constant, $constant = 0, $$constant = universe; $constant<$$constant.length&&((constant=($$constant[$constant])),1);$constant++) m.put$TK$TV((constant).name$(), constant);

this.enumConstantDirectory=m;
}return this.enumConstantDirectory;
});

Clazz.newMeth(C$, 'cast$O', function (obj) {
if (obj != null  && !this.isInstance$O(obj) ) throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[p$1.cannotCastMsg$O.apply(this, [obj])]);
return obj;
});

Clazz.newMeth(C$, 'cannotCastMsg$O', function (obj) {
return "Cannot cast " + obj.getClass$().getName$() + " to " + this.getName$() ;
}, p$1);

Clazz.newMeth(C$, 'hashCode$', function () {
var name=null;

name = this.$clazz$.__CLASS_NAME__ || this.$clazz$.toString();
return name.hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {

return o.__CLASS_NAME__ == "java.lang.Class" && o.$clazz$ == this.$clazz$;
return false;
});

Clazz.newMeth(C$, 'getArgumentArray$ClassA$OA$Z', function (types, args, isProxy) {
var a=Clazz.array(java.lang.Object, [args == null  ? 0 : args.length]);
if (args != null  && (types != null  || isProxy ) ) for (var i=args.length; --i >= 0; ) a[i]=(isProxy ? args[i] : (types[i].__PRIMITIVE && args[i].valueOf$ ? args[i].valueOf$() : args[i]) ||null);

return a;
}, 1);

Clazz.newMeth(C$, 'getPackage$', function () {
return null;
});

Clazz.newMeth(C$, 'getAnnotation$Class', function (c) {
return null;
});

Clazz.newMeth(C$, 'getJ2SSuperclassFor$Class', function (cl) {
var c=null;
{
c = cl.getSuperclass$ && cl.getSuperclass$();
}
if (c == null  && cl !== Clazz.getClass(java.lang.Object)  ) {
c=Clazz.getClass(java.lang.Object);
}return c;
}, 1);
;
(function(){var C$=Clazz.newClass(P$.Class, "JSClass", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.__CLASS_NAME__=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Class, "MethodArray", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.methods=null;
this.length=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.methods=Clazz.array($I$(1), [20]);
this.length=0;
}, 1);

Clazz.newMeth(C$, 'add$reflect_Method', function (m) {
if (this.length == this.methods.length) {
this.methods=$I$(2).copyOf$TTA$I(this.methods, 2 * this.methods.length);
}this.methods[this.length++]=m;
});

Clazz.newMeth(C$, 'addAll$reflect_MethodA', function (ma) {
for (var i=0; i < ma.length; i++) {
this.add$reflect_Method(ma[i]);
}
});

Clazz.newMeth(C$, 'addAll$Class_MethodArray', function (ma) {
for (var i=0; i < ma.length$(); i++) {
this.add$reflect_Method(ma.get$I(i));
}
});

Clazz.newMeth(C$, 'addIfNotPresent$reflect_Method', function (newMethod) {
for (var i=0; i < this.length; i++) {
var m=this.methods[i];
if (m === newMethod  || (m != null  && m.equals$O(newMethod) ) ) {
return;
}}
this.add$reflect_Method(newMethod);
});

Clazz.newMeth(C$, 'addAllIfNotPresent$Class_MethodArray', function (newMethods) {
for (var i=0; i < newMethods.length$(); i++) {
var m=newMethods.get$I(i);
if (m != null ) {
this.addIfNotPresent$reflect_Method(m);
}}
});

Clazz.newMeth(C$, 'length$', function () {
return this.length;
});

Clazz.newMeth(C$, 'get$I', function (i) {
return this.methods[i];
});

Clazz.newMeth(C$, 'removeByNameAndSignature$reflect_Method', function (toRemove) {
for (var i=0; i < this.length; i++) {
var m=this.methods[i];
if (m != null  && m.getReturnType$() === toRemove.getReturnType$()   && m.getName$() == toRemove.getName$()  && Class.arrayContentsEq$OA$OA(m.getParameterTypes$(), toRemove.getParameterTypes$()) ) {
this.methods[i]=null;
}}
});

Clazz.newMeth(C$, 'compactAndTrim$', function () {
var newPos=0;
for (var pos=0; pos < this.length; pos++) {
var m=this.methods[pos];
if (m != null ) {
if (pos != newPos) {
this.methods[newPos]=m;
}newPos++;
}}
if (newPos != this.methods.length) {
this.methods=$I$(2).copyOf$TTA$I(this.methods, newPos);
}});

Clazz.newMeth(C$, 'getArray$', function () {
return this.methods;
});
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:35 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
