(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "Function");

Clazz.newMeth(C$, 'identity$', function () {
return ((P$.Function$lambda3||
(function(){var C$=Clazz.newClass(P$, "Function$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (t) { return (t);});
})()
), Clazz.new_(P$.Function$lambda3.$init$, [this, null]));
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'compose$java_util_function_Function', function (before) {
$I$(1).requireNonNull$TT(before);
return ((P$.Function$lambda1||
(function(){var C$=Clazz.newClass(P$, "Function$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (v) { return (this.apply$(this.$finals$.before.apply$(v)));});
})()
), Clazz.new_(P$.Function$lambda1.$init$, [this, {before: before}]));
});

Clazz.newMeth(C$, 'andThen$java_util_function_Function', function (after) {
$I$(1).requireNonNull$TT(after);
return ((P$.Function$lambda2||
(function(){var C$=Clazz.newClass(P$, "Function$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (t) { return (this.$finals$.after.apply$(this.apply$(t)));});
})()
), Clazz.new_(P$.Function$lambda2.$init$, [this, {after: after}]));
});
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
