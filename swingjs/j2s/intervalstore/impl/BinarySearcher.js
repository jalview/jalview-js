(function(){var P$=Clazz.newPackage("intervalstore.impl"),I$=[];
var C$=Clazz.newClass(P$, "BinarySearcher");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'findFirst$java_util_List$java_util_function_Function', function (list, test) {
var start=0;
var end=list.size$() - 1;
var matched=list.size$();
while (start <= end){
var mid=((start + end)/2|0);
var entry=list.get$I(mid);
var itsTrue=(test.apply$(entry)).booleanValue$();
if (itsTrue) {
matched=mid;
end=mid - 1;
} else {
start=mid + 1;
}}
return matched;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-03-13 17:03:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
