(function(){var P$=Clazz.newPackage("org.jmol.smiles"),I$=[[0,'javajs.util.V3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PolyhedronStereoSorter", null, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vTemp=null;
this.vRef=null;
this.align1=null;
this.align2=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.vTemp=Clazz.new_($I$(1));
this.align1=Clazz.new_($I$(1));
this.align2=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setRef$javajs_util_V3', function (vRef) {
this.vRef=vRef;
});

Clazz.newMeth(C$, ['compare$OA$OA','compare$','compare$TT$TT'], function (a, b) {
var torA=(a[1]).floatValue$();
var torB=(b[1]).floatValue$();
if (Math.abs(torA - torB) < 1.0 ) {
torA=0;
this.vTemp.sub2$javajs_util_T3$javajs_util_T3(b[2], a[2]);
torB=this.vRef.dot$javajs_util_T3(this.vTemp);
}return (torA < torB  ? 1 : torA > torB  ? -1 : 0);
});

Clazz.newMeth(C$, 'isAligned$javajs_util_T3$javajs_util_T3$javajs_util_T3', function (pt1, pt2, pt3) {
this.align1.sub2$javajs_util_T3$javajs_util_T3(pt1, pt2);
this.align2.sub2$javajs_util_T3$javajs_util_T3(pt2, pt3);
var angle=this.align1.angle$javajs_util_V3(this.align2);
return (angle < 0.17453292 );
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
