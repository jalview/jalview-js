(function(){var P$=java.lang.reflect,I$=[[0,'Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Method", null, 'java.lang.reflect.AccessibleObject', ['java.lang.reflect.GenericDeclaration', 'java.lang.reflect.Member']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.signature=null;
this.Class_=null;
this.name=null;
this.returnType=null;
this.parameterTypes=null;
this.exceptionTypes=null;
this.modifiers=0;
this.isProxy=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.modifiers=0;
}, 1);

Clazz.newMeth(C$, 'c$$Class$S$ClassA$Class$ClassA$I', function (declaringClass, name, parameterTypes, returnType, checkedExceptions, modifiers) {
Clazz.super_(C$, this,1);
this.Class_=declaringClass;
this.name=name;
this.parameterTypes=parameterTypes;
this.returnType=returnType;
this.exceptionTypes=checkedExceptions;
this.modifiers=modifiers;
this.signature=name + Class.argumentTypesToString$ClassA(parameterTypes);
}, 1);

Clazz.newMeth(C$, 'invoke$O$OA', function (receiver, args) {
var a=Class.getArgumentArray$ClassA$OA$Z(this.parameterTypes, args, this.isProxy);
var c=(this.isProxy ? receiver : this.Class_);
var m=null;
var val=null;

if (!this.isProxy) c = c.$clazz$;
m= c[this.signature] || c.prototype && c.prototype[this.signature];
val = (m == null ? null : m.apply(receiver,a));
if (val != null && !this.isProxy) val = this.wrap$O(val);
if (m == null ) {
var message="Method " + this.getDeclaringClass$().getName$() + "." + this.signature + " was not found" ;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[message]);
}return val;
});

Clazz.newMeth(C$, 'wrap$O', function (o) {
switch (typeof o ||"") {
case "number":
var d=(1 ? o :0);
return new Double((d == (d|0)  ? (Integer.valueOf$I((d|0))).intValue$() : (Double.valueOf$D(d)).doubleValue$()));
case "boolean":
return $I$(1).valueOf$Z(o ||false);
}
return o;
});

Clazz.newMeth(C$, 'getTypeParameters$', function () {
return null;
});

Clazz.newMeth(C$, 'toGenericString$', function () {
return null;
});

Clazz.newMeth(C$, 'getGenericParameterTypes$', function () {
return null;
});

Clazz.newMeth(C$, 'getGenericExceptionTypes$', function () {
return null;
});

Clazz.newMeth(C$, 'getGenericReturnType$', function () {
return null;
});

Clazz.newMeth(C$, 'getParameterAnnotations$', function () {
return null;
});

Clazz.newMeth(C$, 'isVarArgs$', function () {
return false;
});

Clazz.newMeth(C$, 'isBridge$', function () {
return false;
});

Clazz.newMeth(C$, 'isSynthetic$', function () {
return false;
});

Clazz.newMeth(C$, 'getDefaultValue$', function () {
return null;
});

Clazz.newMeth(C$, 'equals$O', function (object) {
if (object != null  && Clazz.instanceOf(object, "java.lang.reflect.Method") ) {
var other=object;
if ((this.getDeclaringClass$() === other.getDeclaringClass$() ) && (this.getName$() == other.getName$()) ) {
var params1=this.parameterTypes;
var params2=other.parameterTypes;
if (params1.length == params2.length) {
for (var i=0; i < params1.length; i++) {
if (params1[i] !== params2[i] ) return false;
}
return true;
}}}return false;
});

Clazz.newMeth(C$, 'getDeclaringClass$', function () {
return this.Class_;
});

Clazz.newMeth(C$, 'getExceptionTypes$', function () {
return this.exceptionTypes;
});

Clazz.newMeth(C$, 'getModifiers$', function () {
return this.modifiers;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getParameterTypes$', function () {
return this.parameterTypes;
});

Clazz.newMeth(C$, 'getReturnType$', function () {
return this.returnType;
});

Clazz.newMeth(C$, 'getSignature$', function () {
return this.signature;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getDeclaringClass$().getName$().hashCode$() ^ this.getName$().hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.Class_.getName$() + "." + this.name ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
