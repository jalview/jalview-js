(function(){var P$=Clazz.newPackage("org.jmol.bspt"),I$=[[0,'javajs.util.Lst','org.jmol.bspt.Bspt','org.jmol.util.Point3fi','org.jmol.util.BSUtil','javajs.util.P3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PointIterator");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'withinDistPoints$F$javajs_util_P3$javajs_util_P3A$javajs_util_P3A$OA', function (distance, pt, ap3, ap31, ret) {
var pts=Clazz.new_($I$(1));
var bspt=Clazz.new_($I$(2).c$$I$I,[3, 0]);
var iter;
if (pt != null  && Float.isNaN$F(pt.x) ) {
var pt3=Clazz.array($I$(3), [ap3.length]);
var p;
for (var i=pt3.length; --i >= 0; ) {
var p3=ap3[i];
if (p3 == null ) return 0;
p=Clazz.new_($I$(3));
p.setT$javajs_util_T3(p3);
p.i=i;
pt3[i]=p;
bspt.addTuple$javajs_util_T3(p);
}
iter=bspt.allocateCubeIterator$();
var bsp=$I$(4).newBitSet2$I$I(0, ap3.length);
for (var i=pt3.length; --i >= 0; ) {
iter.initialize$javajs_util_T3$F$Z(p=pt3[i], distance, false);
var d2=distance * distance;
var n=0;
while (iter.hasMoreElements$()){
var pt2=iter.nextElement$();
if (bsp.get$I(pt2.i) && pt2.distanceSquared$javajs_util_T3(p) <= d2   && (++n > 1) ) bsp.clear$I(pt2.i);
}
}
for (var i=bsp.nextSetBit$I(0); i >= 0; i=bsp.nextSetBit$I(i + 1)) pts.addLast$TV($I$(5).newP$javajs_util_T3(pt3[i]));

ret[0]=pts;
return 1073742001;
}if (distance == 0 ) {
if (ap31 == null ) {
var d2=3.4028235E38;
var pt3=null;
for (var i=ap3.length; --i >= 0; ) {
var pta=ap3[i];
distance=pta.distanceSquared$javajs_util_T3(pt);
if (distance < d2 ) {
pt3=pta;
d2=distance;
}}
ret[0]=(pt3 == null  ? "" : pt3);
return (pt3 == null  ? 4 : 134217751);
}var ptsOut=Clazz.array(Integer.TYPE, [ap31.length]);
for (var i=ptsOut.length; --i >= 0; ) {
var d2=3.4028235E38;
var imin=-1;
pt=ap31[i];
for (var j=ap3.length; --j >= 0; ) {
var pta=ap3[j];
distance=pta.distanceSquared$javajs_util_T3(pt);
if (distance < d2 ) {
imin=j;
d2=distance;
}}
ptsOut[i]=imin;
}
ret[0]=ptsOut;
return 1275068418;
}for (var i=ap3.length; --i >= 0; ) bspt.addTuple$javajs_util_T3(ap3[i]);

iter=bspt.allocateCubeIterator$();
iter.initialize$javajs_util_T3$F$Z(pt, distance, false);
var d2=distance * distance;
while (iter.hasMoreElements$()){
var pt2=iter.nextElement$();
if (pt2.distanceSquared$javajs_util_T3(pt) <= d2 ) pts.addLast$TV(pt2);
}
iter.release$();
ret[0]=pts;
return 1073742001;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
