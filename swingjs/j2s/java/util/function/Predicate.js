(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "Predicate");

Clazz.newMeth(C$, 'isEqual$O', function (targetRef) {
return (null == targetRef ) ? (function($class$){((P$.Predicate$lambda4||
(function(){var C$=Clazz.newClass(P$, "Predicate$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['test$'], function (t) { return $class$.isNull$O.apply(null,[t])});
})()
)); return Clazz.new_(P$.Predicate$lambda4.$init$, [this, null])})($I$(1)) : ((P$.Predicate$lambda5||
(function(){var C$=Clazz.newClass(P$, "Predicate$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (object) { return (this.$finals$.targetRef.equals$O(object));});
})()
), Clazz.new_(P$.Predicate$lambda5.$init$, [this, {targetRef: targetRef}]));
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'and$java_util_function_Predicate', function (other) {
$I$(1).requireNonNull$TT(other);
return ((P$.Predicate$lambda1||
(function(){var C$=Clazz.newClass(P$, "Predicate$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (this.test$(t) && this.$finals$.other.test$(t) );});
})()
), Clazz.new_(P$.Predicate$lambda1.$init$, [this, {other: other}]));
});

Clazz.newMeth(C$, 'negate$', function () {
return ((P$.Predicate$lambda2||
(function(){var C$=Clazz.newClass(P$, "Predicate$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (!this.test$(t));});
})()
), Clazz.new_(P$.Predicate$lambda2.$init$, [this, null]));
});

Clazz.newMeth(C$, 'or$java_util_function_Predicate', function (other) {
$I$(1).requireNonNull$TT(other);
return ((P$.Predicate$lambda3||
(function(){var C$=Clazz.newClass(P$, "Predicate$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (this.test$(t) || this.$finals$.other.test$(t) );});
})()
), Clazz.new_(P$.Predicate$lambda3.$init$, [this, {other: other}]));
});
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
