(function(){var P$=java.util,I$=[[0,'java.util.Collections','java.util.Objects',['java.util.Comparators','.NaturalOrderComparator'],['java.util.Comparators','.NullComparator']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Comparator");

Clazz.newMeth(C$, 'reverseOrder$',  function () {
return $I$(1).reverseOrder$();
}, 1);

Clazz.newMeth(C$, 'naturalOrder$',  function () {
return $I$(3).INSTANCE;
}, 1);

Clazz.newMeth(C$, 'nullsFirst$java_util_Comparator',  function (comparator) {
return Clazz.new_($I$(4,1).c$$Z$java_util_Comparator,[true, comparator]);
}, 1);

Clazz.newMeth(C$, 'nullsLast$java_util_Comparator',  function (comparator) {
return Clazz.new_($I$(4,1).c$$Z$java_util_Comparator,[false, comparator]);
}, 1);

Clazz.newMeth(C$, 'comparing$java_util_function_Function$java_util_Comparator',  function (keyExtractor, keyComparator) {
$I$(2).requireNonNull$O(keyExtractor);
$I$(2).requireNonNull$O(keyComparator);
return ((P$.Comparator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Comparator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Serializable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'compare$O$O',  function (c1, c2) { return (this.$finals$.keyComparator.compare$O$O(this.$finals$.keyExtractor.apply$O(c1), this.$finals$.keyExtractor.apply$O(c2)));});
})()
), Clazz.new_(P$.Comparator$lambda2.$init$,[this, {keyExtractor:keyExtractor,keyComparator:keyComparator}]));
}, 1);

Clazz.newMeth(C$, 'comparing$java_util_function_Function',  function (keyExtractor) {
$I$(2).requireNonNull$O(keyExtractor);
return ((P$.Comparator$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Comparator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Serializable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'compare$O$O',  function (c1, c2) { return (this.$finals$.keyExtractor.apply$O(c1).compareTo$O(this.$finals$.keyExtractor.apply$O(c2)));});
})()
), Clazz.new_(P$.Comparator$lambda3.$init$,[this, {keyExtractor:keyExtractor}]));
}, 1);

Clazz.newMeth(C$, 'comparingInt$java_util_function_ToIntFunction',  function (keyExtractor) {
$I$(2).requireNonNull$O(keyExtractor);
return ((P$.Comparator$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Comparator$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Serializable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'compare$O$O',  function (c1, c2) { return (Integer.compare$I$I(this.$finals$.keyExtractor.applyAsInt$O(c1), this.$finals$.keyExtractor.applyAsInt$O(c2)));});
})()
), Clazz.new_(P$.Comparator$lambda4.$init$,[this, {keyExtractor:keyExtractor}]));
}, 1);

Clazz.newMeth(C$, 'comparingLong$java_util_function_ToLongFunction',  function (keyExtractor) {
$I$(2).requireNonNull$O(keyExtractor);
return ((P$.Comparator$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Comparator$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Serializable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'compare$O$O',  function (c1, c2) { return (Long.compare$J$J(this.$finals$.keyExtractor.applyAsLong$O(c1), this.$finals$.keyExtractor.applyAsLong$O(c2)));});
})()
), Clazz.new_(P$.Comparator$lambda5.$init$,[this, {keyExtractor:keyExtractor}]));
}, 1);

Clazz.newMeth(C$, 'comparingDouble$java_util_function_ToDoubleFunction',  function (keyExtractor) {
$I$(2).requireNonNull$O(keyExtractor);
return ((P$.Comparator$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Comparator$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Serializable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'compare$O$O',  function (c1, c2) { return (Double.compare$D$D(this.$finals$.keyExtractor.applyAsDouble$O(c1), this.$finals$.keyExtractor.applyAsDouble$O(c2)));});
})()
), Clazz.new_(P$.Comparator$lambda6.$init$,[this, {keyExtractor:keyExtractor}]));
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'reversed$',  function () {
return $I$(1).reverseOrder$java_util_Comparator(this);
});

Clazz.newMeth(C$, 'thenComparing$java_util_Comparator',  function (other) {
$I$(2).requireNonNull$O(other);
return ((P$.Comparator$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Comparator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Serializable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'compare$O$O',  function (c1, c2) {
var res=this.compare$O$O(c1, c2);
return (res != 0) ? res : this.$finals$.other.compare$O$O(c1, c2);
});
})()
), Clazz.new_(P$.Comparator$lambda1.$init$,[this, {other:other}]));
});

Clazz.newMeth(C$, 'thenComparing$java_util_function_Function$java_util_Comparator',  function (keyExtractor, keyComparator) {
return this.thenComparing$java_util_Comparator(C$.comparing$java_util_function_Function$java_util_Comparator(keyExtractor, keyComparator));
});

Clazz.newMeth(C$, 'thenComparing$java_util_function_Function',  function (keyExtractor) {
return this.thenComparing$java_util_Comparator(C$.comparing$java_util_function_Function(keyExtractor));
});

Clazz.newMeth(C$, 'thenComparingInt$java_util_function_ToIntFunction',  function (keyExtractor) {
return this.thenComparing$java_util_Comparator(C$.comparingInt$java_util_function_ToIntFunction(keyExtractor));
});

Clazz.newMeth(C$, 'thenComparingLong$java_util_function_ToLongFunction',  function (keyExtractor) {
return this.thenComparing$java_util_Comparator(C$.comparingLong$java_util_function_ToLongFunction(keyExtractor));
});

Clazz.newMeth(C$, 'thenComparingDouble$java_util_function_ToDoubleFunction',  function (keyExtractor) {
return this.thenComparing$java_util_Comparator(C$.comparingDouble$java_util_function_ToDoubleFunction(keyExtractor));
});
};})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:11 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
