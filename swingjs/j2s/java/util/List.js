(function(){var P$=java.util,I$=[[0,'java.util.Objects','java.util.Arrays','java.util.Spliterators']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "List", null, null, 'java.util.Collection');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'replaceAll$java_util_function_UnaryOperator', function (operator) {
$I$(1).requireNonNull$TT(operator);
var li=this.listIterator$();
while (li.hasNext$()){
li.set$TE(operator.apply$(li.next$()));
}
});

Clazz.newMeth(C$, 'sort$java_util_Comparator', function (c) {
var a=this.toArray$();
$I$(2).sort$TTA$java_util_Comparator(a, c);
var i=this.listIterator$();
for (var e, $e = 0, $$e = a; $e<$$e.length&&((e=($$e[$e])),1);$e++) {
i.next$();
i.set$TE(e);
}
});

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(3).spliterator$java_util_Collection$I(this, 16);
});
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
