(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "IntUnaryOperator");

Clazz.newMeth(C$, 'identity$', function () {
return ((P$.IntUnaryOperator$lambda3||
(function(){var C$=Clazz.newClass(P$, "IntUnaryOperator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntUnaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsInt$', function (t) { return (t);});
})()
), Clazz.new_(P$.IntUnaryOperator$lambda3.$init$, [this, null]));
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'compose$java_util_function_IntUnaryOperator', function (before) {
$I$(1).requireNonNull$TT(before);
return ((P$.IntUnaryOperator$lambda1||
(function(){var C$=Clazz.newClass(P$, "IntUnaryOperator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntUnaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsInt$', function (v) { return (this.applyAsInt$(this.$finals$.before.applyAsInt$(v)));});
})()
), Clazz.new_(P$.IntUnaryOperator$lambda1.$init$, [this, {before: before}]));
});

Clazz.newMeth(C$, 'andThen$java_util_function_IntUnaryOperator', function (after) {
$I$(1).requireNonNull$TT(after);
return ((P$.IntUnaryOperator$lambda2||
(function(){var C$=Clazz.newClass(P$, "IntUnaryOperator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntUnaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsInt$', function (t) { return (this.$finals$.after.applyAsInt$(this.applyAsInt$(t)));});
})()
), Clazz.new_(P$.IntUnaryOperator$lambda2.$init$, [this, {after: after}]));
});
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
