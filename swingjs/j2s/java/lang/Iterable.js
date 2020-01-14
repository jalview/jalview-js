(function(){var P$=java.lang,I$=[[0,'java.util.Objects','java.util.Spliterators']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "Iterable");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
$I$(1).requireNonNull$TT(action);
for (var t, $t = this.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
action.accept$(t);
}
});

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(2).spliteratorUnknownSize$java_util_Iterator$I(this.iterator$(), 0);
});
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:35 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
