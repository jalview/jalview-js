(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StartRegionIterator", null, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.start=0;
this.end=0;
this.currentPosition=0;
this.positions=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.currentPosition=0;
this.positions=null;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$java_util_List', function (lowerBound, upperBound, hiddenColumns) {
C$.c$$jalview_datamodel_HiddenCursorPosition$I$I$java_util_List.apply(this, [null, lowerBound, upperBound, hiddenColumns]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_HiddenCursorPosition$I$I$java_util_List', function (pos, lowerBound, upperBound, hiddenColumns) {
C$.$init$.apply(this);
this.start=lowerBound;
this.end=upperBound;
if (hiddenColumns != null ) {
this.positions=Clazz.new_($I$(1).c$$I,[hiddenColumns.size$()]);
var i=0;
var hiddenSoFar=0;
if (pos != null ) {
i=pos.getRegionIndex$();
hiddenSoFar=pos.getHiddenSoFar$();
} else {
while ((i < hiddenColumns.size$()) && (hiddenColumns.get$I(i)[0] < this.start + hiddenSoFar) ){
var region=hiddenColumns.get$I(i);
hiddenSoFar+=region[1] - region[0] + 1;
i++;
}
}while (i < hiddenColumns.size$() && (hiddenColumns.get$I(i)[0] <= this.end + hiddenSoFar) ){
var region=hiddenColumns.get$I(i);
this.positions.add$TE(new Integer(region[0] - hiddenSoFar));
hiddenSoFar+=region[1] - region[0] + 1;
i++;
}
} else {
this.positions=Clazz.new_($I$(1));
}}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return (this.currentPosition < this.positions.size$());
});

Clazz.newMeth(C$, 'next$', function () {
var result=(this.positions.get$I(this.currentPosition)).intValue$();
this.currentPosition++;
return new Integer(result);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
