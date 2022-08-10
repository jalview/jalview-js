(function(){var P$=Clazz.newPackage("intervalstore.impl"),I$=[[0,'java.util.ArrayList','java.util.Collections','intervalstore.api.IntervalI','intervalstore.impl.Range']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NCListBuilder", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['NCListComparator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'partitionNestedSublists$java_util_List', function (ranges) {
var sublists=Clazz.new_($I$(1,1));
$I$(2,"sort$java_util_List$java_util_Comparator",[ranges, $I$(3).COMPARE_BEGIN_ASC_END_DESC]);
var listStartIndex=0;
var lastParent=ranges.get$I(0);
var first=true;
for (var i=0; i < ranges.size$(); i++) {
var nextInterval=ranges.get$I(i);
if (!first && !lastParent.properlyContainsInterval$intervalstore_api_IntervalI(nextInterval) ) {
sublists.add$O(Clazz.new_($I$(4,1).c$$I$I,[listStartIndex, i - 1]));
listStartIndex=i;
lastParent=nextInterval;
}first=false;
}
sublists.add$O(Clazz.new_([listStartIndex, ranges.size$() - 1],$I$(4,1).c$$I$I));
return sublists;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.NCListBuilder, "NCListComparator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$intervalstore_api_IntervalI$intervalstore_api_IntervalI','compare$O$O'], function (o1, o2) {
var order=Integer.compare$I$I(o1.getBegin$(), o2.getBegin$());
if (order == 0) {
order=Integer.compare$I$I(o2.getEnd$(), o1.getEnd$());
}return order;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
