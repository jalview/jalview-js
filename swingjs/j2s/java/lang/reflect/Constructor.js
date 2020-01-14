(function(){var P$=java.lang.reflect,I$=[];
var C$=Clazz.newClass(P$, "Constructor", null, 'java.lang.reflect.AccessibleObject', ['java.lang.reflect.GenericDeclaration', 'java.lang.reflect.Member']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.Class_=null;
this.parameterTypes=null;
this.exceptionTypes=null;
this.modifiers=0;
this.signature=null;
this.constr=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Class$ClassA$ClassA$I', function (declaringClass, parameterTypes, checkedExceptions, modifiers) {
Clazz.super_(C$, this,1);
this.Class_=declaringClass;
this.parameterTypes=parameterTypes;
this.exceptionTypes=checkedExceptions;
this.modifiers=modifiers;
this.parameterTypes=parameterTypes;
this.signature="c$" + Class.argumentTypesToString$ClassA(parameterTypes);
this.constr=this.Class_.$clazz$[this.signature] ||null;
}, 1);

Clazz.newMeth(C$, 'newInstance$OA', function (args) {
if (this.constr != null ) {
var a=Class.getArgumentArray$ClassA$OA$Z(this.parameterTypes, args, false);
var instance=Clazz.new_(this.constr, a) ||null;
if (instance != null ) return instance;
}var message="Constructor " + this.getDeclaringClass$().getName$() + "." + this.signature + " was not found" ;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[message]);
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

Clazz.newMeth(C$, 'getParameterAnnotations$', function () {
return null;
});

Clazz.newMeth(C$, 'isVarArgs$', function () {
return false;
});

Clazz.newMeth(C$, 'isSynthetic$', function () {
return false;
});

Clazz.newMeth(C$, 'equals$O', function (object) {
if (object != null  && Clazz.instanceOf(object, "java.lang.reflect.Constructor") ) {
var other=object;
if (this.getDeclaringClass$() === other.getDeclaringClass$() ) {
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
return this.getDeclaringClass$().getName$();
});

Clazz.newMeth(C$, 'getParameterTypes$', function () {
return this.parameterTypes;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getDeclaringClass$().getName$().hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.Class_.getName$() + "." + this.signature ;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
