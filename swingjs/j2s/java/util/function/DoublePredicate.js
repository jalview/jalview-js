(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "DoublePredicate");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'and$java_util_function_DoublePredicate', function (other) {
$I$(1).requireNonNull$O(other);
return (P$.DoublePredicate$lambda1$||(P$.DoublePredicate$lambda1$=(((P$.DoublePredicate$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePredicate$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoublePredicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$D','test$O'], function (value) { return (this.test$D(value) && other.test$D(value) );});
})()
), Clazz.new_(P$.DoublePredicate$lambda1.$init$,[this, null])))));
});

Clazz.newMeth(C$, 'negate$', function () {
return (P$.DoublePredicate$lambda2$||(P$.DoublePredicate$lambda2$=(((P$.DoublePredicate$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePredicate$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoublePredicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$D','test$O'], function (value) { return (!this.test$D(value));});
})()
), Clazz.new_(P$.DoublePredicate$lambda2.$init$,[this, null])))));
});

Clazz.newMeth(C$, 'or$java_util_function_DoublePredicate', function (other) {
$I$(1).requireNonNull$O(other);
return (P$.DoublePredicate$lambda3$||(P$.DoublePredicate$lambda3$=(((P$.DoublePredicate$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePredicate$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoublePredicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$D','test$O'], function (value) { return (this.test$D(value) || other.test$D(value) );});
})()
), Clazz.new_(P$.DoublePredicate$lambda3.$init$,[this, null])))));
});
};})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:44 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
