(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.Objects',['java.util.stream.ReferencePipeline','.Head'],'java.util.stream.StreamOpFlag',['java.util.stream.IntPipeline','.Head'],['java.util.stream.LongPipeline','.Head'],['java.util.stream.DoublePipeline','.Head']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StreamSupport");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'stream$java_util_Spliterator$Z', function (spliterator, parallel) {
$I$(1).requireNonNull$TT(spliterator);
return Clazz.new_($I$(2).c$$java_util_Spliterator$I$Z,[spliterator, $I$(3).fromCharacteristics$java_util_Spliterator(spliterator), parallel]);
}, 1);

Clazz.newMeth(C$, 'stream$java_util_function_Supplier$I$Z', function (supplier, characteristics, parallel) {
$I$(1).requireNonNull$TT(supplier);
return Clazz.new_($I$(2).c$$java_util_function_Supplier$I$Z,[supplier, $I$(3).fromCharacteristics$I(characteristics), parallel]);
}, 1);

Clazz.newMeth(C$, 'intStream$java_util_Spliterator_OfInt$Z', function (spliterator, parallel) {
return Clazz.new_($I$(4).c$$java_util_Spliterator$I$Z,[spliterator, $I$(3).fromCharacteristics$java_util_Spliterator(spliterator), parallel]);
}, 1);

Clazz.newMeth(C$, 'intStream$java_util_function_Supplier$I$Z', function (supplier, characteristics, parallel) {
return Clazz.new_($I$(4).c$$java_util_function_Supplier$I$Z,[supplier, $I$(3).fromCharacteristics$I(characteristics), parallel]);
}, 1);

Clazz.newMeth(C$, 'longStream$java_util_Spliterator_OfLong$Z', function (spliterator, parallel) {
return Clazz.new_($I$(5).c$$java_util_Spliterator$I$Z,[spliterator, $I$(3).fromCharacteristics$java_util_Spliterator(spliterator), parallel]);
}, 1);

Clazz.newMeth(C$, 'longStream$java_util_function_Supplier$I$Z', function (supplier, characteristics, parallel) {
return Clazz.new_($I$(5).c$$java_util_function_Supplier$I$Z,[supplier, $I$(3).fromCharacteristics$I(characteristics), parallel]);
}, 1);

Clazz.newMeth(C$, 'doubleStream$java_util_Spliterator_OfDouble$Z', function (spliterator, parallel) {
return Clazz.new_($I$(6).c$$java_util_Spliterator$I$Z,[spliterator, $I$(3).fromCharacteristics$java_util_Spliterator(spliterator), parallel]);
}, 1);

Clazz.newMeth(C$, 'doubleStream$java_util_function_Supplier$I$Z', function (supplier, characteristics, parallel) {
return Clazz.new_($I$(6).c$$java_util_function_Supplier$I$Z,[supplier, $I$(3).fromCharacteristics$I(characteristics), parallel]);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
