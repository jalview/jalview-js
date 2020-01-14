(function(){var P$=java.util,I$=[[0,'AssertionError','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Objects");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
throw Clazz.new_($I$(1).c$$O,["No java.util.Objects instances for you!"]);
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

Clazz.newMeth(C$, 'compare$TT$TT$java_util_Comparator', function (a, b, c) {
return (a === b ) ? 0 : c.compare$(a, b);
}, 1);

Clazz.newMeth(C$, 'requireNonNull$TT', function (obj) {
if (obj == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return obj;
}, 1);

Clazz.newMeth(C$, 'requireNonNull$TT$S', function (obj, message) {
if (obj == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[message]);
return obj;
}, 1);

Clazz.newMeth(C$, 'isNull$O', function (obj) {
return obj == null ;
}, 1);

Clazz.newMeth(C$, 'nonNull$O', function (obj) {
return obj != null ;
}, 1);

Clazz.newMeth(C$, 'requireNonNull$TT$java_util_function_Supplier', function (obj, messageSupplier) {
if (obj == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[messageSupplier.get$()]);
return obj;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
