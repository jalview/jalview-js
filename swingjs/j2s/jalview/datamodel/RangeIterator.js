(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={},I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RangeIterator", null, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentPosition=0;
},1);

C$.$fields$=[['I',['currentPosition'],'O',['currentRange','int[]','localRanges','java.util.List']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (rangeList) {
;C$.$init$.apply(this);
if (!rangeList.isEmpty$()) {
var last=rangeList.get$I(rangeList.size$() - 1)[1];
p$1.init$I$I$java_util_List.apply(this, [0, last, rangeList]);
} else {
p$1.init$I$I$java_util_List.apply(this, [0, 0, rangeList]);
}}, 1);

Clazz.newMeth(C$, 'c$$I$I$java_util_List', function (lowerBound, upperBound, rangeList) {
;C$.$init$.apply(this);
p$1.init$I$I$java_util_List.apply(this, [lowerBound, upperBound, rangeList]);
}, 1);

Clazz.newMeth(C$, 'init$I$I$java_util_List', function (lowerBound, upperBound, rangeList) {
var start=lowerBound;
var end=upperBound;
if (rangeList != null ) {
this.localRanges=Clazz.new_($I$(1,1));
var i=0;
while ((i < rangeList.size$()) && (rangeList.get$I(i)[1] < start) ){
i++;
}
while (i < rangeList.size$() && (rangeList.get$I(i)[0] <= end) ){
var rh=rangeList.get$I(i);
var cp=Clazz.array(Integer.TYPE, [2]);
System.arraycopy$O$I$O$I$I(rh, 0, cp, 0, rh.length);
this.localRanges.add$O(cp);
i++;
}
}}, p$1);

Clazz.newMeth(C$, 'hasNext$', function () {
return (this.localRanges != null ) && (this.currentPosition < this.localRanges.size$()) ;
});

Clazz.newMeth(C$, 'next$', function () {
this.currentRange=this.localRanges.get$I(this.currentPosition);
this.currentPosition++;
return this.currentRange;
});

Clazz.newMeth(C$, 'remove$', function () {
this.localRanges.remove$I(--this.currentPosition);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
