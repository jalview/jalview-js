(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "IntPredicate");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'and$java_util_function_IntPredicate', function (other) {
$I$(1).requireNonNull$TT(other);
return ((P$.IntPredicate$lambda1||
(function(){var C$=Clazz.newClass(P$, "IntPredicate$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntPredicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (value) { return (this.test$(value) && this.$finals$.other.test$(value) );});
})()
), Clazz.new_(P$.IntPredicate$lambda1.$init$, [this, {other: other}]));
});

Clazz.newMeth(C$, 'negate$', function () {
return ((P$.IntPredicate$lambda2||
(function(){var C$=Clazz.newClass(P$, "IntPredicate$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntPredicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (value) { return (!this.test$(value));});
})()
), Clazz.new_(P$.IntPredicate$lambda2.$init$, [this, null]));
});

Clazz.newMeth(C$, 'or$java_util_function_IntPredicate', function (other) {
$I$(1).requireNonNull$TT(other);
return ((P$.IntPredicate$lambda3||
(function(){var C$=Clazz.newClass(P$, "IntPredicate$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntPredicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (value) { return (this.test$(value) || this.$finals$.other.test$(value) );});
})()
), Clazz.new_(P$.IntPredicate$lambda3.$init$, [this, {other: other}]));
});
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
