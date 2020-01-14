(function(){var P$=java.util,p$1={},p$2={},I$=[[0,'java.util.EnumSet','Enum','java.util.RegularEnumSet','java.util.JumboEnumSet','AssertionError',['java.util.EnumSet','.SerializationProxy']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EnumSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractSet', ['Cloneable', 'java.io.Serializable']);
C$.ZERO_LENGTH_ENUM_ARRAY=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.ZERO_LENGTH_ENUM_ARRAY=Clazz.array($I$(2), [0]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.elementType=null;
this.universe=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Class$EnumA', function (elementType, universe) {
Clazz.super_(C$, this,1);
this.elementType=elementType;
this.universe=universe;
}, 1);

Clazz.newMeth(C$, 'noneOf$Class', function (elementType) {
var universe=C$.getUniverse$Class(elementType);
if (universe == null ) throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[elementType + " not an enum"]);
if (universe.length <= 64) return Clazz.new_($I$(3).c$$Class$EnumA,[elementType, universe]);
 else return Clazz.new_($I$(4).c$$Class$EnumA,[elementType, universe]);
}, 1);

Clazz.newMeth(C$, 'allOf$Class', function (elementType) {
var result=C$.noneOf$Class(elementType);
result.addAll$();
return result;
}, 1);

Clazz.newMeth(C$, 'copyOf$java_util_EnumSet', function (s) {
return s.clone$();
}, 1);

Clazz.newMeth(C$, 'copyOf$java_util_Collection', function (c) {
if (Clazz.instanceOf(c, "java.util.EnumSet")) {
return (c).clone$();
} else {
if (c.isEmpty$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Collection is empty"]);
var i=c.iterator$();
var first=i.next$();
var result=C$.of$TE(first);
while (i.hasNext$())result.add$TE(i.next$());

return result;
}}, 1);

Clazz.newMeth(C$, 'complementOf$java_util_EnumSet', function (s) {
var result=C$.copyOf$java_util_EnumSet(s);
result.complement$();
return result;
}, 1);

Clazz.newMeth(C$, ['of$TE'], function (e) {
var result=C$.noneOf$Class(e.getDeclaringClass$());
result.add$TE(e);
return result;
}, 1);

Clazz.newMeth(C$, ['of$TE$TE'], function (e1, e2) {
var result=C$.noneOf$Class(e1.getDeclaringClass$());
result.add$TE(e1);
result.add$TE(e2);
return result;
}, 1);

Clazz.newMeth(C$, ['of$TE$TE$TE'], function (e1, e2, e3) {
var result=C$.noneOf$Class(e1.getDeclaringClass$());
result.add$TE(e1);
result.add$TE(e2);
result.add$TE(e3);
return result;
}, 1);

Clazz.newMeth(C$, ['of$TE$TE$TE$TE'], function (e1, e2, e3, e4) {
var result=C$.noneOf$Class(e1.getDeclaringClass$());
result.add$TE(e1);
result.add$TE(e2);
result.add$TE(e3);
result.add$TE(e4);
return result;
}, 1);

Clazz.newMeth(C$, ['of$TE$TE$TE$TE$TE'], function (e1, e2, e3, e4, e5) {
var result=C$.noneOf$Class(e1.getDeclaringClass$());
result.add$TE(e1);
result.add$TE(e2);
result.add$TE(e3);
result.add$TE(e4);
result.add$TE(e5);
return result;
}, 1);

Clazz.newMeth(C$, ['of$TE$TEA','ofnull'], function (first, rest) {
var result=C$.noneOf$Class(first.getDeclaringClass$());
result.add$TE(first);
for (var e, $e = 0, $$e = rest; $e<$$e.length&&((e=($$e[$e])),1);$e++) result.add$TE(e);

return result;
}, 1);

Clazz.newMeth(C$, ['range$TE$TE'], function (from, to) {
if (from.compareTo$TE(to) > 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[from + " > " + to ]);
var result=C$.noneOf$Class(from.getDeclaringClass$());
result.addRange$TE$TE(from, to);
return result;
}, 1);

Clazz.newMeth(C$, 'clone$', function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(5).c$$O,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, ['typeCheck$TE'], function (e) {
var eClass=e.getClass$();
if (eClass !== this.elementType  && eClass.getSuperclass$() !== this.elementType  ) throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[eClass + " != " + this.elementType ]);
});

Clazz.newMeth(C$, 'getUniverse$Class', function (elementType) {
return elementType.getEnumConstants$();
}, 1);

Clazz.newMeth(C$, 'writeReplace$', function () {
return Clazz.new_($I$(6).c$$java_util_EnumSet,[this]);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (stream) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Proxy required"]);
}, p$2);
;
(function(){var C$=Clazz.newClass(P$.EnumSet, "SerializationProxy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.elementType=null;
this.elements=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_EnumSet', function (set) {
C$.$init$.apply(this);
this.elementType=set.elementType;
this.elements=set.toArray$TTA($I$(1).ZERO_LENGTH_ENUM_ARRAY);
}, 1);

Clazz.newMeth(C$, 'readResolve', function () {
var result=$I$(1).noneOf$Class(this.elementType);
for (var e, $e = 0, $$e = this.elements; $e<$$e.length&&((e=($$e[$e])),1);$e++) result.add$TE(e);

return result;
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:46 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
