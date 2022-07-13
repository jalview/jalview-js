(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'javajs.util.P3','javajs.util.V3','org.jmol.util.Point3fi']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BoxInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bbCorner0=Clazz.new_($I$(1,1));
this.bbCorner1=Clazz.new_($I$(1,1));
this.bbCenter=Clazz.new_($I$(1,1));
this.bbVector=Clazz.new_($I$(2,1));
this.bbVertices=Clazz.array($I$(3), [8]);
{
for (var i=0; i < 8; i++) {
C$.unitBboxPoints[i]=$I$(1).new3$F$F$F(-1, -1, -1);
C$.unitBboxPoints[i].scaleAdd2$F$javajs_util_T3$javajs_util_T3(2, C$.unitCubePoints[i], C$.unitBboxPoints[i]);
}
}
},1);

C$.$fields$=[['Z',['isScaleSet'],'F',['margin'],'O',['bbCorner0','javajs.util.P3','+bbCorner1','+bbCenter','bbVector','javajs.util.V3','bbVertices','org.jmol.util.Point3fi[]']]
,['O',['bbcageTickEdges','char[]','+uccageTickEdges','edges','byte[]','unitCubePoints','javajs.util.P3[]','facePoints','int[][]','toCanonical','int[]','unitBboxPoints','javajs.util.P3[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
for (var i=8; --i >= 0; ) this.bbVertices[i]=Clazz.new_($I$(3,1));

this.reset$();
}, 1);

Clazz.newMeth(C$, 'reset$', function () {
this.isScaleSet=false;
this.bbCorner0.set$F$F$F(3.4028235E38, 3.4028235E38, 3.4028235E38);
this.bbCorner1.set$F$F$F(-3.4028235E38, -3.4028235E38, -3.4028235E38);
});

Clazz.newMeth(C$, 'scaleBox$javajs_util_P3A$F', function (pts, scale) {
if (scale == 0  || scale == 1  ) return;
var center=Clazz.new_($I$(1,1));
var v=Clazz.new_($I$(2,1));
for (var i=0; i < 8; i++) center.add$javajs_util_T3(pts[i]);

center.scale$F(0.125);
for (var i=0; i < 8; i++) {
v.sub2$javajs_util_T3$javajs_util_T3(pts[i], center);
v.scale$F(scale);
pts[i].add2$javajs_util_T3$javajs_util_T3(center, v);
}
}, 1);

Clazz.newMeth(C$, 'getVerticesFromOABC$javajs_util_P3A', function (oabc) {
var vertices=Clazz.array($I$(1), [8]);
for (var i=0; i <= 7; i++) {
vertices[i]=$I$(1).newP$javajs_util_T3(oabc[0]);
if ((i & 4) == 4) vertices[i].add$javajs_util_T3(oabc[1]);
if ((i & 2) == 2) vertices[i].add$javajs_util_T3(oabc[2]);
if ((i & 1) == 1) vertices[i].add$javajs_util_T3(oabc[3]);
}
return vertices;
}, 1);

Clazz.newMeth(C$, 'getCanonicalCopy$javajs_util_P3A$F', function (boxPoints, scale) {
var pts=Clazz.array($I$(1), [8]);
for (var i=0; i < 8; i++) pts[C$.toCanonical[i]]=$I$(1).newP$javajs_util_T3(boxPoints[i]);

C$.scaleBox$javajs_util_P3A$F(pts, scale);
return pts;
}, 1);

Clazz.newMeth(C$, 'toOABC$javajs_util_P3A$javajs_util_T3', function (bbVertices, offset) {
var center=$I$(1).newP$javajs_util_T3(bbVertices[0]);
var a=$I$(1).newP$javajs_util_T3(bbVertices[4]);
var b=$I$(1).newP$javajs_util_T3(bbVertices[2]);
var c=$I$(1).newP$javajs_util_T3(bbVertices[1]);
a.sub$javajs_util_T3(center);
b.sub$javajs_util_T3(center);
c.sub$javajs_util_T3(center);
if (offset != null ) center.add$javajs_util_T3(offset);
return Clazz.array($I$(1), -1, [center, a, b, c]);
}, 1);

Clazz.newMeth(C$, 'getBoundBoxCenter$', function () {
if (!this.isScaleSet) this.setBbcage$F(1);
return this.bbCenter;
});

Clazz.newMeth(C$, 'getBoundBoxCornerVector$', function () {
if (!this.isScaleSet) this.setBbcage$F(1);
return this.bbVector;
});

Clazz.newMeth(C$, 'getBoundBoxPoints$Z', function (isAll) {
if (!this.isScaleSet) this.setBbcage$F(1);
return (isAll ? Clazz.array($I$(1), -1, [this.bbCenter, $I$(1).newP$javajs_util_T3(this.bbVector), this.bbCorner0, this.bbCorner1]) : Clazz.array($I$(1), -1, [this.bbCorner0, this.bbCorner1]));
});

Clazz.newMeth(C$, 'getBoundBoxVertices$', function () {
if (!this.isScaleSet) this.setBbcage$F(1);
return this.bbVertices;
});

Clazz.newMeth(C$, 'setBoundBoxFromOABC$javajs_util_T3A', function (points) {
var origin=$I$(1).newP$javajs_util_T3(points[0]);
var pt111=Clazz.new_($I$(1,1));
for (var i=0; i < 4; i++) pt111.add$javajs_util_T3(points[i]);

this.setBoundBox$javajs_util_T3$javajs_util_T3$Z$F(origin, pt111, true, 1);
});

Clazz.newMeth(C$, 'setBoundBox$javajs_util_T3$javajs_util_T3$Z$F', function (pt1, pt2, byCorner, scale) {
if (pt1 != null ) {
if (scale == 0 ) return;
if (byCorner) {
if (pt1.distance$javajs_util_T3(pt2) == 0 ) return;
this.bbCorner0.set$F$F$F(Math.min(pt1.x, pt2.x), Math.min(pt1.y, pt2.y), Math.min(pt1.z, pt2.z));
this.bbCorner1.set$F$F$F(Math.max(pt1.x, pt2.x), Math.max(pt1.y, pt2.y), Math.max(pt1.z, pt2.z));
} else {
if (pt2.x == 0  || pt2.y == 0  && pt2.z == 0   ) return;
this.bbCorner0.set$F$F$F(pt1.x - pt2.x, pt1.y - pt2.y, pt1.z - pt2.z);
this.bbCorner1.set$F$F$F(pt1.x + pt2.x, pt1.y + pt2.y, pt1.z + pt2.z);
}}this.setBbcage$F(scale);
});

Clazz.newMeth(C$, 'setMargin$F', function (m) {
this.margin=m;
});

Clazz.newMeth(C$, 'addBoundBoxPoint$javajs_util_T3', function (pt) {
this.isScaleSet=false;
C$.addPoint$javajs_util_T3$javajs_util_T3$javajs_util_T3$F(pt, this.bbCorner0, this.bbCorner1, this.margin);
});

Clazz.newMeth(C$, 'addPoint$javajs_util_T3$javajs_util_T3$javajs_util_T3$F', function (pt, xyzMin, xyzMax, margin) {
if (pt.x - margin < xyzMin.x ) xyzMin.x=pt.x - margin;
if (pt.x + margin > xyzMax.x ) xyzMax.x=pt.x + margin;
if (pt.y - margin < xyzMin.y ) xyzMin.y=pt.y - margin;
if (pt.y + margin > xyzMax.y ) xyzMax.y=pt.y + margin;
if (pt.z - margin < xyzMin.z ) xyzMin.z=pt.z - margin;
if (pt.z + margin > xyzMax.z ) xyzMax.z=pt.z + margin;
}, 1);

Clazz.newMeth(C$, 'addPointXYZ$F$F$F$javajs_util_P3$javajs_util_P3$F', function (x, y, z, xyzMin, xyzMax, margin) {
if (x - margin < xyzMin.x ) xyzMin.x=x - margin;
if (x + margin > xyzMax.x ) xyzMax.x=x + margin;
if (y - margin < xyzMin.y ) xyzMin.y=y - margin;
if (y + margin > xyzMax.y ) xyzMax.y=y + margin;
if (z - margin < xyzMin.z ) xyzMin.z=z - margin;
if (z + margin > xyzMax.z ) xyzMax.z=z + margin;
}, 1);

Clazz.newMeth(C$, 'setBbcage$F', function (scale) {
this.isScaleSet=true;
this.bbCenter.add2$javajs_util_T3$javajs_util_T3(this.bbCorner0, this.bbCorner1);
this.bbCenter.scale$F(0.5);
this.bbVector.sub2$javajs_util_T3$javajs_util_T3(this.bbCorner1, this.bbCenter);
if (scale > 0 ) {
this.bbVector.scale$F(scale);
} else {
this.bbVector.x -= scale / 2;
this.bbVector.y -= scale / 2;
this.bbVector.z -= scale / 2;
}for (var i=8; --i >= 0; ) {
var pt=this.bbVertices[i];
pt.setT$javajs_util_T3(C$.unitBboxPoints[i]);
pt.x *= this.bbVector.x;
pt.y *= this.bbVector.y;
pt.z *= this.bbVector.z;
pt.add$javajs_util_T3(this.bbCenter);
}
this.bbCorner0.setT$javajs_util_T3(this.bbVertices[0]);
this.bbCorner1.setT$javajs_util_T3(this.bbVertices[7]);
});

Clazz.newMeth(C$, 'isWithin$javajs_util_P3', function (pt) {
if (!this.isScaleSet) this.setBbcage$F(1);
return (pt.x >= this.bbCorner0.x  && pt.x <= this.bbCorner1.x   && pt.y >= this.bbCorner0.y   && pt.y <= this.bbCorner1.y   && pt.z >= this.bbCorner0.z   && pt.z <= this.bbCorner1.z  );
});

Clazz.newMeth(C$, 'getMaxDim$', function () {
return this.bbVector.length$() * 2;
});

C$.$static$=function(){C$.$static$=0;
C$.bbcageTickEdges=Clazz.array(Character.TYPE, -1, ["z", "\u0000", "\u0000", "y", "x", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000"]);
C$.uccageTickEdges=Clazz.array(Character.TYPE, -1, ["z", "y", "x", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000", "\u0000"]);
C$.edges=Clazz.array(Byte.TYPE, -1, [0, 1, 0, 2, 0, 4, 1, 3, 1, 5, 2, 3, 2, 6, 3, 7, 4, 5, 4, 6, 5, 7, 6, 7]);
C$.unitCubePoints=Clazz.array($I$(1), -1, [$I$(1).new3$F$F$F(0, 0, 0), $I$(1).new3$F$F$F(0, 0, 1), $I$(1).new3$F$F$F(0, 1, 0), $I$(1).new3$F$F$F(0, 1, 1), $I$(1).new3$F$F$F(1, 0, 0), $I$(1).new3$F$F$F(1, 0, 1), $I$(1).new3$F$F$F(1, 1, 0), $I$(1).new3$F$F$F(1, 1, 1)]);
C$.facePoints=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [4, 0, 6]), Clazz.array(Integer.TYPE, -1, [4, 6, 5]), Clazz.array(Integer.TYPE, -1, [5, 7, 1]), Clazz.array(Integer.TYPE, -1, [1, 3, 0]), Clazz.array(Integer.TYPE, -1, [6, 2, 7]), Clazz.array(Integer.TYPE, -1, [1, 0, 5]), Clazz.array(Integer.TYPE, -1, [0, 2, 6]), Clazz.array(Integer.TYPE, -1, [6, 7, 5]), Clazz.array(Integer.TYPE, -1, [7, 3, 1]), Clazz.array(Integer.TYPE, -1, [3, 2, 0]), Clazz.array(Integer.TYPE, -1, [2, 3, 7]), Clazz.array(Integer.TYPE, -1, [0, 4, 5])]);
C$.toCanonical=Clazz.array(Integer.TYPE, -1, [0, 3, 4, 7, 1, 2, 5, 6]);
C$.unitBboxPoints=Clazz.array($I$(1), [8]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
