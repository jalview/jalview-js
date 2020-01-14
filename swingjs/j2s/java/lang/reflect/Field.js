(function(){var P$=java.lang.reflect,I$=[];
var C$=Clazz.newClass(P$, "Field", null, 'java.lang.reflect.AccessibleObject', 'java.lang.reflect.Member');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.jsName=null;
this.Class_=null;
this.modifiers=0;
this.isStatic=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Class$S$I', function (cl, name, modifiers) {
Clazz.super_(C$, this,1);
this.jsName=name;
this.Class_=cl;
this.modifiers=modifiers;
this.isStatic=(modifiers == 8);
}, 1);

Clazz.newMeth(C$, 'isAccessible$', function () {
return true;
});

Clazz.newMeth(C$, 'isSynthetic$', function () {
return false;
});

Clazz.newMeth(C$, 'toGenericString$', function () {
return null;
});

Clazz.newMeth(C$, 'isEnumConstant$', function () {
return false;
});

Clazz.newMeth(C$, 'getGenericType$', function () {
return null;
});

Clazz.newMeth(C$, 'equals$O', function (object) {
if (object == null ) return false;
var o=this.getObj$O(object);
;
o = o[this.jsName];
if (typeof o == "number" || typeof o == "boolean") return false;
return object.equals$O(o);
});

Clazz.newMeth(C$, 'get$O', function (object) {
object=this.getObj$O(object);

object = object[this.jsName];
if (typeof object == "number") return (object == object|0 ?  new Integer(object) : new Double(object));
if (typeof object == "boolean") return new Boolean(object);
if (typeof object != "undefined") return object;
throw Clazz.new_(Clazz.load('NullPointerException'));
});

Clazz.newMeth(C$, 'getObj$O', function (object) {
{
return (object == null || this.isStatic ? this.Class_.$clazz$ : object);
}
});

Clazz.newMeth(C$, 'getBoolean$O', function (object) {
object=this.getObj$O(object);
{
return !!object[this.jsName];
}
});

Clazz.newMeth(C$, 'getByte$O', function (object) {
object=this.getObj$O(object);
{
return object[this.jsName]|0;
}
});

Clazz.newMeth(C$, 'getChar$O', function (object) {
object=this.getObj$O(object);
{
return object[this.jsName];
}
});

Clazz.newMeth(C$, 'getDeclaringClass$', function () {
return this.Class_;
});

Clazz.newMeth(C$, 'getDouble$O', function (object) {
object=this.getObj$O(object);
{
return object[this.jsName];
}
});

Clazz.newMeth(C$, 'getFloat$O', function (object) {
object=this.getObj$O(object);
{
return object[this.jsName];
}
});

Clazz.newMeth(C$, 'getInt$O', function (object) {
object=this.getObj$O(object);
{
return object[this.jsName]|0;
}
});

Clazz.newMeth(C$, 'getLong$O', function (object) {
object=this.getObj$O(object);
{
return object[this.jsName]|0;
}
});

Clazz.newMeth(C$, 'getModifiers$', function () {
return this.modifiers;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.jsName;
});

Clazz.newMeth(C$, 'getShort$O', function (object) {
object=this.getObj$O(object);
{
return object[this.jsName]|0;
}
});

Clazz.newMeth(C$, 'getSignature$', function () {
return this.jsName;
});

Clazz.newMeth(C$, 'getType$', function () {
return null;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return 0;
});

Clazz.newMeth(C$, 'set$O$O', function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setBoolean$O$Z', function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setByte$O$B', function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setChar$O$C', function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setDouble$O$D', function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setFloat$O$F', function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setInt$O$I', function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setLong$O$J', function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'setShort$O$H', function (object, value) {
object=this.getObj$O(object);

object[this.jsName] = value;
});

Clazz.newMeth(C$, 'toString', function () {
return "[field: " + this.jsName + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
