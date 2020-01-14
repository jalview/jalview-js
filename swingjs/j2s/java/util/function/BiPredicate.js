(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "BiPredicate");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'and$java_util_function_BiPredicate', function (other) {
$I$(1).requireNonNull$TT(other);
return ((P$.BiPredicate$lambda1||
(function(){var C$=Clazz.newClass(P$, "BiPredicate$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiPredicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t, u) { return (this.test$(t, u) && this.$finals$.other.test$(t, u) );});
})()
), Clazz.new_(P$.BiPredicate$lambda1.$init$, [this, {other: other}]));
});

Clazz.newMeth(C$, 'negate$', function () {
return ((P$.BiPredicate$lambda2||
(function(){var C$=Clazz.newClass(P$, "BiPredicate$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiPredicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t, u) { return (!this.test$(t, u));});
})()
), Clazz.new_(P$.BiPredicate$lambda2.$init$, [this, null]));
});

Clazz.newMeth(C$, 'or$java_util_function_BiPredicate', function (other) {
$I$(1).requireNonNull$TT(other);
return ((P$.BiPredicate$lambda3||
(function(){var C$=Clazz.newClass(P$, "BiPredicate$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiPredicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t, u) { return (this.test$(t, u) || this.$finals$.other.test$(t, u) );});
})()
), Clazz.new_(P$.BiPredicate$lambda3.$init$, [this, {other: other}]));
});
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
