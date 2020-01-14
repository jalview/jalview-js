(function(){var P$=Clazz.newPackage("intervalstore.impl"),I$=[[0,['intervalstore.impl.NCListBuilder','.NCListComparator'],'java.util.ArrayList','java.util.Collections','intervalstore.impl.Range']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "NCListBuilder", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.comparator=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.comparator=Clazz.new_($I$(1), [this, null]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getComparator$', function () {
return this.comparator;
});

Clazz.newMeth(C$, 'partitionNestedSublists$java_util_List', function (ranges) {
var sublists=Clazz.new_($I$(2));
$I$(3).sort$java_util_List$java_util_Comparator(ranges, this.comparator);
var listStartIndex=0;
var lastParent=ranges.get$I(0);
var first=true;
for (var i=0; i < ranges.size$(); i++) {
var nextInterval=ranges.get$I(i);
if (!first && !lastParent.properlyContainsInterval$intervalstore_api_IntervalI(nextInterval) ) {
sublists.add$TE(Clazz.new_($I$(4).c$$I$I,[listStartIndex, i - 1]));
listStartIndex=i;
lastParent=nextInterval;
}first=false;
}
sublists.add$TE(Clazz.new_($I$(4).c$$I$I,[listStartIndex, ranges.size$() - 1]));
return sublists;
});
;
(function(){var C$=Clazz.newClass(P$.NCListBuilder, "NCListComparator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$TV$TV','compare$','compare$TT$TT'], function (o1, o2) {
var order=Integer.compare$I$I(o1.getBegin$(), o2.getBegin$());
if (order == 0) {
order=Integer.compare$I$I(o2.getEnd$(), o1.getEnd$());
}return order;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-03-13 17:03:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
