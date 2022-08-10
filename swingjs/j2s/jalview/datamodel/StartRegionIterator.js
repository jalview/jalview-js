(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StartRegionIterator", null, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentPosition=0;
this.positions=null;
},1);

C$.$fields$=[['I',['start','end','currentPosition'],'O',['positions','java.util.List']]]

Clazz.newMeth(C$, 'c$$I$I$java_util_List',  function (lowerBound, upperBound, hiddenColumns) {
C$.c$$jalview_datamodel_HiddenCursorPosition$I$I$java_util_List.apply(this, [null, lowerBound, upperBound, hiddenColumns]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_HiddenCursorPosition$I$I$java_util_List',  function (pos, lowerBound, upperBound, hiddenColumns) {
;C$.$init$.apply(this);
this.start=lowerBound;
this.end=upperBound;
if (hiddenColumns != null ) {
this.positions=Clazz.new_([hiddenColumns.size$()],$I$(1,1).c$$I);
var i=0;
var hiddenSoFar=0;
if (pos != null ) {
i=pos.getRegionIndex$();
hiddenSoFar=pos.getHiddenSoFar$();
} else {
while ((i < hiddenColumns.size$()) && (hiddenColumns.get$I(i)[0] < this.start + hiddenSoFar) ){
var region=hiddenColumns.get$I(i);
hiddenSoFar+=region[1] - region[0] + 1;
++i;
}
}while (i < hiddenColumns.size$() && (hiddenColumns.get$I(i)[0] <= this.end + hiddenSoFar) ){
var region=hiddenColumns.get$I(i);
this.positions.add$O(Integer.valueOf$I(region[0] - hiddenSoFar));
hiddenSoFar+=region[1] - region[0] + 1;
++i;
}
} else {
this.positions=Clazz.new_($I$(1,1));
}}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return (this.currentPosition < this.positions.size$());
});

Clazz.newMeth(C$, 'next$',  function () {
var result=(this.positions.get$I(this.currentPosition)).$c();
++this.currentPosition;
return Integer.valueOf$I(result);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
