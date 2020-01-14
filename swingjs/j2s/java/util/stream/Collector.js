(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.Objects','java.util.stream.Collectors','java.util.Collections','java.util.EnumSet',['java.util.stream.Collector','.Characteristics'],['java.util.stream.Collectors','.CollectorImpl']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "Collector", function(){
});

Clazz.newMeth(C$, 'of$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_stream_Collector_CharacteristicsA', function (supplier, accumulator, combiner, characteristics) {
$I$(1).requireNonNull$TT(supplier);
$I$(1).requireNonNull$TT(accumulator);
$I$(1).requireNonNull$TT(combiner);
$I$(1).requireNonNull$TT(characteristics);
var cs=(characteristics.length == 0) ? $I$(2).CH_ID : $I$(3).unmodifiableSet$java_util_Set($I$(4).of$TE$TEA($I$(5).IDENTITY_FINISH, characteristics));
return Clazz.new_($I$(6).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_Set,[supplier, accumulator, combiner, cs]);
}, 1);

Clazz.newMeth(C$, 'of$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_stream_Collector_CharacteristicsA', function (supplier, accumulator, combiner, finisher, characteristics) {
$I$(1).requireNonNull$TT(supplier);
$I$(1).requireNonNull$TT(accumulator);
$I$(1).requireNonNull$TT(combiner);
$I$(1).requireNonNull$TT(finisher);
$I$(1).requireNonNull$TT(characteristics);
var cs=$I$(2).CH_NOID;
if (characteristics.length > 0) {
cs=$I$(4).noneOf$Class(Clazz.getClass($I$(5)));
$I$(3).addAll$java_util_Collection$TTA(cs, characteristics);
cs=$I$(3).unmodifiableSet$java_util_Set(cs);
}return Clazz.new_($I$(6).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set,[supplier, accumulator, combiner, finisher, cs]);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.Collector, "Characteristics", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "CONCURRENT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "UNORDERED", 1, []);
Clazz.newEnumConst($vals, C$.c$, "IDENTITY_FINISH", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
