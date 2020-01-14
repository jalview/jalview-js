(function(){var P$=java.util,I$=[[0,'java.util.Objects','java.util.Spliterators','java.util.stream.StreamSupport']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "Collection", null, null, 'Iterable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate', function (filter) {
$I$(1).requireNonNull$TT(filter);
var removed=false;
var each=this.iterator$();
while (each.hasNext$()){
if (filter.test$(each.next$())) {
each.remove$();
removed=true;
}}
return removed;
});

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(2).spliterator$java_util_Collection$I(this, 0);
});

Clazz.newMeth(C$, 'stream$', function () {
return $I$(3).stream$java_util_Spliterator$Z(this.spliterator$(), false);
});

Clazz.newMeth(C$, 'parallelStream$', function () {
return $I$(3).stream$java_util_Spliterator$Z(this.spliterator$(), true);
});
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:45 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
