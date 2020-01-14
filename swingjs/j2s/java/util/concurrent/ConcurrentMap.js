(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[[0,'java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "ConcurrentMap", null, null, 'java.util.Map');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['getOrDefault$O$TV'], function (key, defaultValue) {
var v;
return ((v=this.get$O(key)) != null ) ? v : defaultValue;
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
continue;
} else {
throw ise;
}
}
action.accept$(k, v);
}
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction', function ($function) {
$I$(1).requireNonNull$TT($function);
this.forEach$java_util_function_BiConsumer(((P$.ConcurrentMap$lambda1||
(function(){var C$=Clazz.newClass(P$, "ConcurrentMap$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (k, v) {
while (!this.b$['java.util.concurrent.ConcurrentMap'].replace$TK$TV$TV.apply(this.b$['java.util.concurrent.ConcurrentMap'], [k, v, this.$finals$.$function.apply$(k, v)])){
if ((v=this.b$['java.util.Map'].get$O.apply(this.b$['java.util.Map'], [k])) == null ) {
break;
}}
});
})()
), Clazz.new_(P$.ConcurrentMap$lambda1.$init$, [this, {$function: $function}])));
});

Clazz.newMeth(C$, ['computeIfAbsent$TK$java_util_function_Function'], function (key, mappingFunction) {
$I$(1).requireNonNull$TT(mappingFunction);
var v;
var newValue;
return ((v=this.get$O(key)) == null  && (newValue=mappingFunction.apply$(key)) != null   && (v=this.putIfAbsent$TK$TV(key, newValue)) == null  ) ? newValue : v;
});

Clazz.newMeth(C$, ['computeIfPresent$TK$java_util_function_BiFunction'], function (key, remappingFunction) {
$I$(1).requireNonNull$TT(remappingFunction);
var oldValue;
while ((oldValue=this.get$O(key)) != null ){
var newValue=remappingFunction.apply$(key, oldValue);
if (newValue != null ) {
if (this.replace$TK$TV$TV(key, oldValue, newValue)) return newValue;
} else if (this.remove$O$O(key, oldValue)) return null;
}
return oldValue;
});

Clazz.newMeth(C$, ['compute$TK$java_util_function_BiFunction'], function (key, remappingFunction) {
$I$(1).requireNonNull$TT(remappingFunction);
var oldValue=this.get$O(key);
for (; ; ) {
var newValue=remappingFunction.apply$(key, oldValue);
if (newValue == null ) {
if (oldValue != null  || this.containsKey$O(key) ) {
if (this.remove$O$O(key, oldValue)) {
return null;
}oldValue=this.get$O(key);
} else {
return null;
}} else {
if (oldValue != null ) {
if (this.replace$TK$TV$TV(key, oldValue, newValue)) {
return newValue;
}oldValue=this.get$O(key);
} else {
if ((oldValue=this.putIfAbsent$TK$TV(key, newValue)) == null ) {
return newValue;
}}}}
});

Clazz.newMeth(C$, ['merge$TK$TV$java_util_function_BiFunction'], function (key, value, remappingFunction) {
$I$(1).requireNonNull$TT(remappingFunction);
$I$(1).requireNonNull$TT(value);
var oldValue=this.get$O(key);
for (; ; ) {
if (oldValue != null ) {
var newValue=remappingFunction.apply$(oldValue, value);
if (newValue != null ) {
if (this.replace$TK$TV$TV(key, oldValue, newValue)) return newValue;
} else if (this.remove$O$O(key, oldValue)) {
return null;
}oldValue=this.get$O(key);
} else {
if ((oldValue=this.putIfAbsent$TK$TV(key, value)) == null ) {
return value;
}}}
});
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
