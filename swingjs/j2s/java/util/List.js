(function(){var P$=java.util,I$=[[0,'java.util.Objects','java.util.Arrays','java.util.Spliterators']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "List", null, null, 'java.util.Collection');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'replaceAll$java_util_function_UnaryOperator', function (operator) {
$I$(1).requireNonNull$O(operator);
var li=this.listIterator$();
while (li.hasNext$()){
li.set$O(operator.apply$O(li.next$()));
}
});

Clazz.newMeth(C$, 'sort$java_util_Comparator', function (c) {
var a=this.toArray$();
$I$(2).sort$OA$java_util_Comparator(a, c);
var i=this.listIterator$();
for (var e, $e = 0, $$e = a; $e<$$e.length&&((e=($$e[$e])),1);$e++) {
i.next$();
i.set$O(e);
}
});

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(3).spliterator$java_util_Collection$I(this, 16);
});
};})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
