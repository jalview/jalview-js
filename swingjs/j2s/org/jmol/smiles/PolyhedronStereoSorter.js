(function(){var P$=Clazz.newPackage("org.jmol.smiles"),I$=[[0,'javajs.util.V3']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PolyhedronStereoSorter", null, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vTemp=Clazz.new_($I$(1,1));
this.align1=Clazz.new_($I$(1,1));
this.align2=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['vTemp','javajs.util.V3','+vRef','+align1','+align2']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setRef$javajs_util_V3', function (vRef) {
this.vRef=vRef;
});

Clazz.newMeth(C$, ['compare$OA$OA','compare$O$O'], function (a, b) {
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
