(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "BinaryOperator", null, null, 'java.util.function.BiFunction');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, 'minBy$java_util_Comparator', function (comparator) {
$I$(1).requireNonNull$TT(comparator);
return ((P$.BinaryOperator$lambda1||
(function(){var C$=Clazz.newClass(P$, "BinaryOperator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (a, b) { return (this.$finals$.comparator.compare$(a, b) <= 0 ? a : b);});
})()
), Clazz.new_(P$.BinaryOperator$lambda1.$init$, [this, {comparator: comparator}]));
}, 1);

Clazz.newMeth(C$, 'maxBy$java_util_Comparator', function (comparator) {
$I$(1).requireNonNull$TT(comparator);
return ((P$.BinaryOperator$lambda2||
(function(){var C$=Clazz.newClass(P$, "BinaryOperator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (a, b) { return (this.$finals$.comparator.compare$(a, b) >= 0 ? a : b);});
})()
), Clazz.new_(P$.BinaryOperator$lambda2.$init$, [this, {comparator: comparator}]));
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
