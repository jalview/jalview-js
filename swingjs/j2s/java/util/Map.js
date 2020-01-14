(function(){var P$=java.util,I$=[[0,'java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "Map", function(){
});
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getOrDefault$O$TV', function (key, defaultValue) {
var v;
return (((v=this.get$O(key)) != null ) || this.containsKey$O(key) ) ? v : defaultValue;
});

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer', function (action) {
$I$(1).requireNonNull$TT(action);
for (var entry, $entry = this.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var k;
var v;
try {
k=entry.getKey$();
v=entry.getValue$();
} catch (ise) {
if (Clazz.exceptionOf(ise,"IllegalStateException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException').c$$Throwable,[ise]);
} else {
throw ise;
}
}
action.accept$(k, v);
}
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction', function ($function) {
$I$(1).requireNonNull$TT($function);
for (var entry, $entry = this.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var k;
var v;
try {
k=entry.getKey$();
v=entry.getValue$();
} catch (ise) {
if (Clazz.exceptionOf(ise,"IllegalStateException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException').c$$Throwable,[ise]);
} else {
throw ise;
}
}
v=$function.apply$(k, v);
try {
entry.setValue$TV(v);
} catch (ise) {
if (Clazz.exceptionOf(ise,"IllegalStateException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException').c$$Throwable,[ise]);
} else {
throw ise;
}
}
}
});

Clazz.newMeth(C$, 'putIfAbsent$TK$TV', function (key, value) {
var v=this.get$O(key);
if (v == null ) {
v=this.put$TK$TV(key, value);
}return v;
});

Clazz.newMeth(C$, 'remove$O$O', function (key, value) {
var curValue=this.get$O(key);
if (!$I$(1).equals$O$O(curValue, value) || (curValue == null  && !this.containsKey$O(key) ) ) {
return false;
}this.remove$O(key);
return true;
});

Clazz.newMeth(C$, 'replace$TK$TV$TV', function (key, oldValue, newValue) {
var curValue=this.get$O(key);
if (!$I$(1).equals$O$O(curValue, oldValue) || (curValue == null  && !this.containsKey$O(key) ) ) {
return false;
}this.put$TK$TV(key, newValue);
return true;
});

Clazz.newMeth(C$, 'replace$TK$TV', function (key, value) {
var curValue;
if (((curValue=this.get$O(key)) != null ) || this.containsKey$O(key) ) {
curValue=this.put$TK$TV(key, value);
}return curValue;
});

Clazz.newMeth(C$, 'computeIfAbsent$TK$java_util_function_Function', function (key, mappingFunction) {
$I$(1).requireNonNull$TT(mappingFunction);
var v;
if ((v=this.get$O(key)) == null ) {
var newValue;
if ((newValue=mappingFunction.apply$(key)) != null ) {
this.put$TK$TV(key, newValue);
return newValue;
}}return v;
});

Clazz.newMeth(C$, 'computeIfPresent$TK$java_util_function_BiFunction', function (key, remappingFunction) {
$I$(1).requireNonNull$TT(remappingFunction);
var oldValue;
if ((oldValue=this.get$O(key)) != null ) {
var newValue=remappingFunction.apply$(key, oldValue);
if (newValue != null ) {
this.put$TK$TV(key, newValue);
return newValue;
} else {
this.remove$O(key);
return null;
}} else {
return null;
}});

Clazz.newMeth(C$, 'compute$TK$java_util_function_BiFunction', function (key, remappingFunction) {
$I$(1).requireNonNull$TT(remappingFunction);
var oldValue=this.get$O(key);
var newValue=remappingFunction.apply$(key, oldValue);
if (newValue == null ) {
if (oldValue != null  || this.containsKey$O(key) ) {
this.remove$O(key);
return null;
} else {
return null;
}} else {
this.put$TK$TV(key, newValue);
return newValue;
}});

Clazz.newMeth(C$, 'merge$TK$TV$java_util_function_BiFunction', function (key, value, remappingFunction) {
$I$(1).requireNonNull$TT(remappingFunction);
$I$(1).requireNonNull$TT(value);
var oldValue=this.get$O(key);
var newValue=(oldValue == null ) ? value : remappingFunction.apply$(oldValue, value);
if (newValue == null ) {
this.remove$O(key);
} else {
this.put$TK$TV(key, newValue);
}return newValue;
});
};;
(function(){var C$=Clazz.newInterface(P$.Map, "Entry", function(){
});

Clazz.newMeth(C$, 'comparingByKey$', function () {
return ((P$.Map$Entry$lambda1||
(function(){var C$=Clazz.newClass(P$, "Map$Entry$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, '', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$'], function (c1, c2) { return (c1.getKey$().compareTo$(c2.getKey$()));});
})()
), Clazz.new_(P$.Map$Entry$lambda1.$init$, [this, null]));
}, 1);

Clazz.newMeth(C$, 'comparingByValue$', function () {
return ((P$.Map$Entry$lambda2||
(function(){var C$=Clazz.newClass(P$, "Map$Entry$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, '', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$'], function (c1, c2) { return (c1.getValue$().compareTo$(c2.getValue$()));});
})()
), Clazz.new_(P$.Map$Entry$lambda2.$init$, [this, null]));
}, 1);

Clazz.newMeth(C$, 'comparingByKey$java_util_Comparator', function (cmp) {
$I$(1).requireNonNull$TT(cmp);
return ((P$.Map$Entry$lambda3||
(function(){var C$=Clazz.newClass(P$, "Map$Entry$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, '', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$'], function (c1, c2) { return (this.$finals$.cmp.compare$(c1.getKey$(), c2.getKey$()));});
})()
), Clazz.new_(P$.Map$Entry$lambda3.$init$, [this, {cmp: cmp}]));
}, 1);

Clazz.newMeth(C$, 'comparingByValue$java_util_Comparator', function (cmp) {
$I$(1).requireNonNull$TT(cmp);
return ((P$.Map$Entry$lambda4||
(function(){var C$=Clazz.newClass(P$, "Map$Entry$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, '', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$'], function (c1, c2) { return (this.$finals$.cmp.compare$(c1.getValue$(), c2.getValue$()));});
})()
), Clazz.new_(P$.Map$Entry$lambda4.$init$, [this, {cmp: cmp}]));
}, 1);
})()
;
(function(){var C$=Clazz.newInterface(P$.Map, "Entry", function(){
});

Clazz.newMeth(C$, 'comparingByKey$', function () {
return ((P$.Map$Entry$lambda1||
(function(){var C$=Clazz.newClass(P$, "Map$Entry$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, '', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$'], function (c1, c2) { return (c1.getKey$().compareTo$(c2.getKey$()));});
})()
), Clazz.new_(P$.Map$Entry$lambda1.$init$, [this, null]));
}, 1);

Clazz.newMeth(C$, 'comparingByValue$', function () {
return ((P$.Map$Entry$lambda2||
(function(){var C$=Clazz.newClass(P$, "Map$Entry$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, '', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$'], function (c1, c2) { return (c1.getValue$().compareTo$(c2.getValue$()));});
})()
), Clazz.new_(P$.Map$Entry$lambda2.$init$, [this, null]));
}, 1);

Clazz.newMeth(C$, 'comparingByKey$java_util_Comparator', function (cmp) {
$I$(1).requireNonNull$TT(cmp);
return ((P$.Map$Entry$lambda3||
(function(){var C$=Clazz.newClass(P$, "Map$Entry$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, '', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$'], function (c1, c2) { return (this.$finals$.cmp.compare$(c1.getKey$(), c2.getKey$()));});
})()
), Clazz.new_(P$.Map$Entry$lambda3.$init$, [this, {cmp: cmp}]));
}, 1);

Clazz.newMeth(C$, 'comparingByValue$java_util_Comparator', function (cmp) {
$I$(1).requireNonNull$TT(cmp);
return ((P$.Map$Entry$lambda4||
(function(){var C$=Clazz.newClass(P$, "Map$Entry$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, '', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$'], function (c1, c2) { return (this.$finals$.cmp.compare$(c1.getValue$(), c2.getValue$()));});
})()
), Clazz.new_(P$.Map$Entry$lambda4.$init$, [this, {cmp: cmp}]));
}, 1);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
