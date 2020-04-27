(function(){var P$=Clazz.newPackage("intervalstore.impl"),I$=[[0,['intervalstore.impl.BinarySearcher','.Compare']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BinarySearcher", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Compare',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'findFirst$java_util_List$Z$intervalstore_impl_BinarySearcher_Compare$I', function (list, compareBegin, comp, compareto) {
var start=0;
var matched=list.size$();
var end=matched - 1;
if (end > 0) {
var last=list.get$I(end);
if (!C$.compare$intervalstore_api_IntervalI$Z$intervalstore_impl_BinarySearcher_Compare$I(last, compareBegin, comp, compareto)) {
return matched;
}}while (start <= end){
var mid=((start + end)/2|0);
var entry=list.get$I(mid);
if (C$.compare$intervalstore_api_IntervalI$Z$intervalstore_impl_BinarySearcher_Compare$I(entry, compareBegin, comp, compareto)) {
matched=mid;
end=mid - 1;
} else {
start=mid + 1;
}}
return matched;
}, 1);

Clazz.newMeth(C$, 'compare$intervalstore_api_IntervalI$Z$intervalstore_impl_BinarySearcher_Compare$I', function (entry, compareBegin, comp, compareTo) {
var val=compareBegin ? entry.getBegin$() : entry.getEnd$();
var result;
switch (comp) {
case $I$(1).LT:
result=val < compareTo;
break;
case $I$(1).LE:
result=val <= compareTo;
break;
case $I$(1).EQ:
result=val == compareTo;
break;
case $I$(1).GE:
result=val >= compareTo;
break;
case $I$(1).GT:
default:
result=val > compareTo;
}
return result;
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.BinarySearcher, "Compare", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "LT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "LE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "EQ", 2, []);
Clazz.newEnumConst($vals, C$.c$, "GE", 3, []);
Clazz.newEnumConst($vals, C$.c$, "GT", 4, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
