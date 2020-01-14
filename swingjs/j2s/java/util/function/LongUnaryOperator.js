(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "LongUnaryOperator");

Clazz.newMeth(C$, 'identity$', function () {
return ((P$.LongUnaryOperator$lambda3||
(function(){var C$=Clazz.newClass(P$, "LongUnaryOperator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongUnaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsLong$', function (t) { return (t);});
})()
), Clazz.new_(P$.LongUnaryOperator$lambda3.$init$, [this, null]));
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'compose$java_util_function_LongUnaryOperator', function (before) {
$I$(1).requireNonNull$TT(before);
return ((P$.LongUnaryOperator$lambda1||
(function(){var C$=Clazz.newClass(P$, "LongUnaryOperator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongUnaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsLong$', function (v) { return (this.applyAsLong$(this.$finals$.before.applyAsLong$(v)));});
})()
), Clazz.new_(P$.LongUnaryOperator$lambda1.$init$, [this, {before: before}]));
});

Clazz.newMeth(C$, 'andThen$java_util_function_LongUnaryOperator', function (after) {
$I$(1).requireNonNull$TT(after);
return ((P$.LongUnaryOperator$lambda2||
(function(){var C$=Clazz.newClass(P$, "LongUnaryOperator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongUnaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsLong$', function (t) { return (this.$finals$.after.applyAsLong$(this.applyAsLong$(t)));});
})()
), Clazz.new_(P$.LongUnaryOperator$lambda2.$init$, [this, {after: after}]));
});
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
