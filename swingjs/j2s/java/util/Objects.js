(function(){var P$=java.util,I$=[[0,'AssertionError','java.util.Arrays']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Objects");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
throw Clazz.new_($I$(1,1).c$$O,["No java.util.Objects instances for you!"]);
}, 1);

Clazz.newMeth(C$, 'equals$O$O', function (a, b) {
return (a === b ) || (a != null  && a.equals$O(b) ) ;
}, 1);

Clazz.newMeth(C$, 'deepEquals$O$O', function (a, b) {
if (a === b ) return true;
 else if (a == null  || b == null  ) return false;
 else return $I$(2).deepEquals0$O$O(a, b);
}, 1);

Clazz.newMeth(C$, 'hashCode$O', function (o) {
return o != null  ? o.hashCode$() : 0;
}, 1);

Clazz.newMeth(C$, 'hash$OA', function (values) {
return $I$(2).hashCode$OA(values);
}, 1);

Clazz.newMeth(C$, 'toString$O', function (o) {
return String.valueOf$O(o);
}, 1);

Clazz.newMeth(C$, 'toString$O$S', function (o, nullDefault) {
return (o != null ) ? o.toString() : nullDefault;
}, 1);

Clazz.newMeth(C$, 'compare$O$O$java_util_Comparator', function (a, b, c) {
return (a === b ) ? 0 : c.compare$O$O(a, b);
}, 1);

Clazz.newMeth(C$, 'requireNonNull$O', function (obj) {
if (obj == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return obj;
}, 1);

Clazz.newMeth(C$, 'requireNonNull$O$S', function (obj, message) {
if (obj == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[message]);
return obj;
}, 1);

Clazz.newMeth(C$, 'isNull$O', function (obj) {
return obj == null ;
}, 1);

Clazz.newMeth(C$, 'nonNull$O', function (obj) {
return obj != null ;
}, 1);

Clazz.newMeth(C$, 'requireNonNull$O$java_util_function_Supplier', function (obj, messageSupplier) {
if (obj == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[messageSupplier.get$()]);
return obj;
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
