(function(){var P$=java.util,I$=[[0,'java.util.Objects','java.util.Tripwire']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "PrimitiveIterator", function(){
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
;
(function(){var C$=Clazz.newInterface(P$.PrimitiveIterator, "OfInt", function(){
}, null, 'java.util.PrimitiveIterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$TT_CONS'], function (action) {
$I$(1).requireNonNull$TT(action);
while (this.hasNext$())action.accept$(this.nextInt$());

});

Clazz.newMeth(C$, 'next$', function () {
if (false) $I$(2).trip$Class$S(this.getClass$(), "{0} calling PrimitiveIterator.OfInt.nextInt()");
return new Integer(this.nextInt$());
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer','forEachRemainingnull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.IntConsumer")) {
this.forEachRemaining$java_util_function_IntConsumer(action);
} else {
$I$(1).requireNonNull$TT(action);
if (false) $I$(2).trip$Class$S(this.getClass$(), "{0} calling PrimitiveIterator.OfInt.forEachRemainingInt(action::accept)");
this.forEachRemaining$java_util_function_IntConsumer((function($class$){((P$.PrimitiveIterator$OfInt$lambda1||
(function(){var C$=Clazz.newClass(P$, "PrimitiveIterator$OfInt$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $class$.accept$.apply($class$,[t])});
})()
)); return Clazz.new_(P$.PrimitiveIterator$OfInt$lambda1.$init$, [this, null])})(action));
}});
};})()
;
(function(){var C$=Clazz.newInterface(P$.PrimitiveIterator, "OfLong", function(){
}, null, 'java.util.PrimitiveIterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_LongConsumer','forEachRemaining$TT_CONS'], function (action) {
$I$(1).requireNonNull$TT(action);
while (this.hasNext$())action.accept$(this.nextLong$());

});

Clazz.newMeth(C$, 'next$', function () {
if (false) $I$(2).trip$Class$S(this.getClass$(), "{0} calling PrimitiveIterator.OfLong.nextLong()");
return new Long(this.nextLong$());
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer','forEachRemainingnull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.LongConsumer")) {
this.forEachRemaining$java_util_function_LongConsumer(action);
} else {
$I$(1).requireNonNull$TT(action);
if (false) $I$(2).trip$Class$S(this.getClass$(), "{0} calling PrimitiveIterator.OfLong.forEachRemainingLong(action::accept)");
this.forEachRemaining$java_util_function_LongConsumer((function($class$){((P$.PrimitiveIterator$OfLong$lambda1||
(function(){var C$=Clazz.newClass(P$, "PrimitiveIterator$OfLong$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $class$.accept$.apply($class$,[t])});
})()
)); return Clazz.new_(P$.PrimitiveIterator$OfLong$lambda1.$init$, [this, null])})(action));
}});
};})()
;
(function(){var C$=Clazz.newInterface(P$.PrimitiveIterator, "OfDouble", function(){
}, null, 'java.util.PrimitiveIterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_DoubleConsumer','forEachRemaining$TT_CONS'], function (action) {
$I$(1).requireNonNull$TT(action);
while (this.hasNext$())action.accept$(this.nextDouble$());

});

Clazz.newMeth(C$, 'next$', function () {
if (false) $I$(2).trip$Class$S(this.getClass$(), "{0} calling PrimitiveIterator.OfDouble.nextLong()");
return new Double(this.nextDouble$());
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer','forEachRemainingnull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.DoubleConsumer")) {
this.forEachRemaining$java_util_function_DoubleConsumer(action);
} else {
$I$(1).requireNonNull$TT(action);
if (false) $I$(2).trip$Class$S(this.getClass$(), "{0} calling PrimitiveIterator.OfDouble.forEachRemainingDouble(action::accept)");
this.forEachRemaining$java_util_function_DoubleConsumer((function($class$){((P$.PrimitiveIterator$OfDouble$lambda1||
(function(){var C$=Clazz.newClass(P$, "PrimitiveIterator$OfDouble$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $class$.accept$.apply($class$,[t])});
})()
)); return Clazz.new_(P$.PrimitiveIterator$OfDouble$lambda1.$init$, [this, null])})(action));
}});
};})()
;
(function(){var C$=Clazz.newInterface(P$.PrimitiveIterator, "OfInt", function(){
}, null, 'java.util.PrimitiveIterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$TT_CONS'], function (action) {
$I$(1).requireNonNull$TT(action);
while (this.hasNext$())action.accept$(this.nextInt$());

});

Clazz.newMeth(C$, 'next$', function () {
if (false) $I$(2).trip$Class$S(this.getClass$(), "{0} calling PrimitiveIterator.OfInt.nextInt()");
return new Integer(this.nextInt$());
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer','forEachRemainingnull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.IntConsumer")) {
this.forEachRemaining$java_util_function_IntConsumer(action);
} else {
$I$(1).requireNonNull$TT(action);
if (false) $I$(2).trip$Class$S(this.getClass$(), "{0} calling PrimitiveIterator.OfInt.forEachRemainingInt(action::accept)");
this.forEachRemaining$java_util_function_IntConsumer((function($class$){((P$.PrimitiveIterator$OfInt$lambda1||
(function(){var C$=Clazz.newClass(P$, "PrimitiveIterator$OfInt$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $class$.accept$.apply($class$,[t])});
})()
)); return Clazz.new_(P$.PrimitiveIterator$OfInt$lambda1.$init$, [this, null])})(action));
}});
};})()
;
(function(){var C$=Clazz.newInterface(P$.PrimitiveIterator, "OfLong", function(){
}, null, 'java.util.PrimitiveIterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_LongConsumer','forEachRemaining$TT_CONS'], function (action) {
$I$(1).requireNonNull$TT(action);
while (this.hasNext$())action.accept$(this.nextLong$());

});

Clazz.newMeth(C$, 'next$', function () {
if (false) $I$(2).trip$Class$S(this.getClass$(), "{0} calling PrimitiveIterator.OfLong.nextLong()");
return new Long(this.nextLong$());
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer','forEachRemainingnull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.LongConsumer")) {
this.forEachRemaining$java_util_function_LongConsumer(action);
} else {
$I$(1).requireNonNull$TT(action);
if (false) $I$(2).trip$Class$S(this.getClass$(), "{0} calling PrimitiveIterator.OfLong.forEachRemainingLong(action::accept)");
this.forEachRemaining$java_util_function_LongConsumer((function($class$){((P$.PrimitiveIterator$OfLong$lambda1||
(function(){var C$=Clazz.newClass(P$, "PrimitiveIterator$OfLong$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $class$.accept$.apply($class$,[t])});
})()
)); return Clazz.new_(P$.PrimitiveIterator$OfLong$lambda1.$init$, [this, null])})(action));
}});
};})()
;
(function(){var C$=Clazz.newInterface(P$.PrimitiveIterator, "OfDouble", function(){
}, null, 'java.util.PrimitiveIterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_DoubleConsumer','forEachRemaining$TT_CONS'], function (action) {
$I$(1).requireNonNull$TT(action);
while (this.hasNext$())action.accept$(this.nextDouble$());

});

Clazz.newMeth(C$, 'next$', function () {
if (false) $I$(2).trip$Class$S(this.getClass$(), "{0} calling PrimitiveIterator.OfDouble.nextLong()");
return new Double(this.nextDouble$());
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer','forEachRemainingnull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.DoubleConsumer")) {
this.forEachRemaining$java_util_function_DoubleConsumer(action);
} else {
$I$(1).requireNonNull$TT(action);
if (false) $I$(2).trip$Class$S(this.getClass$(), "{0} calling PrimitiveIterator.OfDouble.forEachRemainingDouble(action::accept)");
this.forEachRemaining$java_util_function_DoubleConsumer((function($class$){((P$.PrimitiveIterator$OfDouble$lambda1||
(function(){var C$=Clazz.newClass(P$, "PrimitiveIterator$OfDouble$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $class$.accept$.apply($class$,[t])});
})()
)); return Clazz.new_(P$.PrimitiveIterator$OfDouble$lambda1.$init$, [this, null])})(action));
}});
};})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:49 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
