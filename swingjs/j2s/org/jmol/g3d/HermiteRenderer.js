(function(){var P$=Clazz.newPackage("org.jmol.g3d"),p$1={},I$=[[0,'javajs.util.V3','javajs.util.P3i','javajs.util.P3','javajs.util.Lst']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HermiteRenderer", null, null, 'org.jmol.g3d.G3DRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pLeft=Clazz.array($I$(2), [16]);
this.pRight=Clazz.array($I$(2), [16]);
this.sLeft=Clazz.array(Float.TYPE, [16]);
this.sRight=Clazz.array(Float.TYPE, [16]);
this.pTopLeft=Clazz.array($I$(3), [16]);
this.pTopRight=Clazz.array($I$(3), [16]);
this.pBotLeft=Clazz.array($I$(3), [16]);
this.pBotRight=Clazz.array($I$(3), [16]);
{
for (var i=16; --i >= 0; ) {
this.pLeft[i]=Clazz.new_($I$(2,1));
this.pRight[i]=Clazz.new_($I$(2,1));
this.pTopLeft[i]=Clazz.new_($I$(3,1));
this.pTopRight[i]=Clazz.new_($I$(3,1));
this.pBotLeft[i]=Clazz.new_($I$(3,1));
this.pBotRight[i]=Clazz.new_($I$(3,1));
}
}
this.a1=Clazz.new_($I$(3,1));
this.a2=Clazz.new_($I$(3,1));
this.b1=Clazz.new_($I$(3,1));
this.b2=Clazz.new_($I$(3,1));
this.c1=Clazz.new_($I$(3,1));
this.c2=Clazz.new_($I$(3,1));
this.d1=Clazz.new_($I$(3,1));
this.d2=Clazz.new_($I$(3,1));
this.T1=Clazz.new_($I$(1,1));
this.T2=Clazz.new_($I$(1,1));
this.depth1=Clazz.new_($I$(1,1));
this.needToFill=Clazz.array(Boolean.TYPE, [16]);
},1);

C$.$fields$=[['O',['g3d','org.jmol.api.JmolRendererInterface','gdata','org.jmol.util.GData','pLeft','javajs.util.P3i[]','+pRight','sLeft','float[]','+sRight','pTopLeft','javajs.util.P3[]','+pTopRight','+pBotLeft','+pBotRight','a1','javajs.util.P3','+a2','+b1','+b2','+c1','+c2','+d1','+d2','T1','javajs.util.V3','+T2','+depth1','needToFill','boolean[]']]
,['O',['vAB','javajs.util.V3','+vAC']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_api_JmolRendererInterface$org_jmol_util_GData', function (g3d, gdata) {
this.g3d=g3d;
this.gdata=gdata;
return this;
});

Clazz.newMeth(C$, 'renderHermiteRope$Z$I$I$I$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (fill, tension, diameterBeg, diameterMid, diameterEnd, p0, p1, p2, p3) {
var z1=(p1.z|0);
var z2=(p2.z|0);
if (p0.z == 1  || z1 == 1  || z2 == 1  || p3.z == 1  ) return;
if (this.gdata.isClippedZ$I(z1) || this.gdata.isClippedZ$I(z2) ) return;
var x1=(p1.x|0);
var y1=(p1.y|0);
var x2=(p2.x|0);
var y2=(p2.y|0);
var xT1=(((x2 - (p0.x|0)) * tension)/8|0);
var yT1=(((y2 - (p0.y|0)) * tension)/8|0);
var zT1=(((z2 - (p0.z|0)) * tension)/8|0);
var xT2=((((p3.x|0) - x1) * tension)/8|0);
var yT2=((((p3.y|0) - y1) * tension)/8|0);
var zT2=((((p3.z|0) - z1) * tension)/8|0);
this.sLeft[0]=0;
this.pLeft[0].set$I$I$I(x1, y1, z1);
this.sRight[0]=1;
this.pRight[0].set$I$I$I(x2, y2, z2);
var sp=0;
var dDiameterFirstHalf=0;
var dDiameterSecondHalf=0;
if (fill) {
dDiameterFirstHalf=2 * (diameterMid - diameterBeg);
dDiameterSecondHalf=2 * (diameterEnd - diameterMid);
}do {
var a=this.pLeft[sp];
var b=this.pRight[sp];
var dx=b.x - a.x;
if (dx >= -1 && dx <= 1 ) {
var dy=b.y - a.y;
if (dy >= -1 && dy <= 1 ) {
var s=this.sLeft[sp];
if (fill) {
var d=(s < 0.5  ? diameterBeg + ((dDiameterFirstHalf * s)|0) : diameterMid + ((dDiameterSecondHalf * (s - 0.5))|0));
this.g3d.fillSphereI$I$javajs_util_P3i(d, a);
} else {
this.g3d.plotPixelClippedP3i$javajs_util_P3i(a);
}--sp;
continue;
}}var s=(this.sLeft[sp] + this.sRight[sp]) / 2;
var s2=s * s;
var s3=s2 * s;
var h1=2 * s3 - 3 * s2 + 1;
var h2=-2 * s3 + 3 * s2;
var h3=s3 - 2 * s2 + s;
var h4=s3 - s2;
if (sp >= 15) break;
var pMid=this.pRight[sp + 1];
pMid.x=((h1 * x1 + h2 * x2 + h3 * xT1 + h4 * xT2)|0);
pMid.y=((h1 * y1 + h2 * y2 + h3 * yT1 + h4 * yT2)|0);
pMid.z=((h1 * z1 + h2 * z2 + h3 * zT1 + h4 * zT2)|0);
this.pRight[sp + 1]=this.pRight[sp];
this.sRight[sp + 1]=this.sRight[sp];
this.pRight[sp]=pMid;
this.sRight[sp]=s;
++sp;
this.pLeft[sp].setT$javajs_util_T3i(pMid);
this.sLeft[sp]=s;
} while (sp >= 0);
});

Clazz.newMeth(C$, 'renderHermiteRibbon$Z$Z$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$I$I', function (fill, border, tension, p0, p1, p2, p3, p4, p5, p6, p7, aspectRatio, fillType) {
if (p0.z == 1  || p1.z == 1   || p2.z == 1   || p3.z == 1   || p4.z == 1   || p5.z == 1   || p6.z == 1   || p7.z == 1  ) return;
if (!fill) {
tension=Math.abs(tension);
p$1.renderParallelPair$Z$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3.apply(this, [fill, tension, p0, p1, p2, p3, p4, p5, p6, p7]);
return;
}var isRev=(tension < 0);
if (isRev) tension=-tension;
var ratio=1.0 / aspectRatio;
var x1=(p1.x|0);
var y1=(p1.y|0);
var z1=(p1.z|0);
var x2=(p2.x|0);
var y2=(p2.y|0);
var z2=(p2.z|0);
var xT1=(((x2 - (p0.x|0)) * tension)/8|0);
var yT1=(((y2 - (p0.y|0)) * tension)/8|0);
var zT1=(((z2 - (p0.z|0)) * tension)/8|0);
var xT2=((((p3.x|0) - x1) * tension)/8|0);
var yT2=((((p3.y|0) - y1) * tension)/8|0);
var zT2=((((p3.z|0) - z1) * tension)/8|0);
this.pTopLeft[0].set$F$F$F(x1, y1, z1);
this.pTopRight[0].set$F$F$F(x2, y2, z2);
var x5=(p5.x|0);
var y5=(p5.y|0);
var z5=(p5.z|0);
var x6=(p6.x|0);
var y6=(p6.y|0);
var z6=(p6.z|0);
var xT5=(((x6 - (p4.x|0)) * tension)/8|0);
var yT5=(((y6 - (p4.y|0)) * tension)/8|0);
var zT5=(((z6 - (p4.z|0)) * tension)/8|0);
var xT6=((((p7.x|0) - x5) * tension)/8|0);
var yT6=((((p7.y|0) - y5) * tension)/8|0);
var zT6=((((p7.z|0) - z5) * tension)/8|0);
this.pBotLeft[0].set$F$F$F(x5, y5, z5);
this.pBotRight[0].set$F$F$F(x6, y6, z6);
this.sLeft[0]=0;
this.sRight[0]=1;
this.needToFill[0]=true;
var sp=0;
var closeEnd=false;
do {
var a=this.pTopLeft[sp];
var b=this.pTopRight[sp];
var dxTop=b.x - a.x;
var dxTop2=dxTop * dxTop;
if (dxTop2 < 10 ) {
var dyTop=b.y - a.y;
var dyTop2=dyTop * dyTop;
if (dyTop2 < 10 ) {
var c=this.pBotLeft[sp];
var d=this.pBotRight[sp];
var dxBot=d.x - c.x;
var dxBot2=dxBot * dxBot;
if (dxBot2 < 8 ) {
var dyBot=d.y - c.y;
var dyBot2=dyBot * dyBot;
if (dyBot2 < 8 ) {
if (border) {
this.g3d.fillSphereBits$I$javajs_util_P3(3, a);
this.g3d.fillSphereBits$I$javajs_util_P3(3, c);
}if (this.needToFill[sp]) {
if (aspectRatio > 0) {
this.T1.sub2$javajs_util_T3$javajs_util_T3(a, c);
this.T1.scale$F(ratio);
this.T2.sub2$javajs_util_T3$javajs_util_T3(a, b);
this.depth1.cross$javajs_util_T3$javajs_util_T3(this.T1, this.T2);
this.depth1.scale$F(this.T1.length$() / this.depth1.length$());
this.a1.add2$javajs_util_T3$javajs_util_T3(a, this.depth1);
this.a2.sub2$javajs_util_T3$javajs_util_T3(a, this.depth1);
this.b1.add2$javajs_util_T3$javajs_util_T3(b, this.depth1);
this.b2.sub2$javajs_util_T3$javajs_util_T3(b, this.depth1);
this.c1.add2$javajs_util_T3$javajs_util_T3(c, this.depth1);
this.c2.sub2$javajs_util_T3$javajs_util_T3(c, this.depth1);
this.d1.add2$javajs_util_T3$javajs_util_T3(d, this.depth1);
this.d2.sub2$javajs_util_T3$javajs_util_T3(d, this.depth1);
this.g3d.fillQuadrilateral$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(this.a1, this.b1, this.d1, this.c1, false);
this.g3d.fillQuadrilateral$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(this.a2, this.b2, this.d2, this.c2, false);
this.g3d.fillQuadrilateral$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(this.a1, this.b1, this.b2, this.a2, false);
this.g3d.fillQuadrilateral$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(this.c1, this.d1, this.d2, this.c2, false);
closeEnd=true;
} else {
if (fillType == 0) {
if (isRev) this.g3d.fillQuadrilateral$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(c, d, b, a, false);
 else this.g3d.fillQuadrilateral$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(a, b, d, c, false);
} else {
if (isRev) {
if (fillType != C$.isFront$javajs_util_P3$javajs_util_P3$javajs_util_P3(a, b, d)) this.g3d.fillTriangle3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(a, b, d, false);
if (fillType != C$.isFront$javajs_util_P3$javajs_util_P3$javajs_util_P3(a, d, c)) this.g3d.fillTriangle3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(a, d, c, false);
} else {
if (fillType == C$.isFront$javajs_util_P3$javajs_util_P3$javajs_util_P3(a, b, d)) this.g3d.fillTriangle3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(a, b, d, false);
if (fillType == C$.isFront$javajs_util_P3$javajs_util_P3$javajs_util_P3(a, d, c)) this.g3d.fillTriangle3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(a, d, c, false);
}}}this.needToFill[sp]=false;
}if (dxTop2 + dyTop2 < 2  && dxBot2 + dyBot2 < 2  ) {
--sp;
continue;
}}}}}var s=(this.sLeft[sp] + this.sRight[sp]) / 2;
var s2=s * s;
var s3=s2 * s;
var h1=2 * s3 - 3 * s2 + 1;
var h2=-2 * s3 + 3 * s2;
var h3=s3 - 2 * s2 + s;
var h4=s3 - s2;
if (sp >= 15) break;
var spNext=sp + 1;
var pMidTop=this.pTopRight[spNext];
pMidTop.x=(h1 * x1 + h2 * x2 + h3 * xT1 + h4 * xT2);
pMidTop.y=(h1 * y1 + h2 * y2 + h3 * yT1 + h4 * yT2);
pMidTop.z=(h1 * z1 + h2 * z2 + h3 * zT1 + h4 * zT2);
var pMidBot=this.pBotRight[spNext];
pMidBot.x=(h1 * x5 + h2 * x6 + h3 * xT5 + h4 * xT6);
pMidBot.y=(h1 * y5 + h2 * y6 + h3 * yT5 + h4 * yT6);
pMidBot.z=(h1 * z5 + h2 * z6 + h3 * zT5 + h4 * zT6);
this.pTopRight[spNext]=this.pTopRight[sp];
this.pTopRight[sp]=pMidTop;
this.pBotRight[spNext]=this.pBotRight[sp];
this.pBotRight[sp]=pMidBot;
this.sRight[spNext]=this.sRight[sp];
this.sRight[sp]=s;
this.needToFill[spNext]=this.needToFill[sp];
this.pTopLeft[spNext].setT$javajs_util_T3(pMidTop);
this.pBotLeft[spNext].setT$javajs_util_T3(pMidBot);
this.sLeft[spNext]=s;
++sp;
} while (sp >= 0);
if (closeEnd) {
this.a1.z += 1;
this.c1.z += 1;
this.c2.z += 1;
this.a2.z += 1;
this.g3d.fillQuadrilateral$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z(this.a1, this.c1, this.c2, this.a2, false);
}});

Clazz.newMeth(C$, 'isFront$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (a, b, c) {
C$.vAB.sub2$javajs_util_T3$javajs_util_T3(b, a);
C$.vAC.sub2$javajs_util_T3$javajs_util_T3(c, a);
C$.vAB.cross$javajs_util_T3$javajs_util_T3(C$.vAB, C$.vAC);
return (C$.vAB.z < 0  ? -1 : 1);
}, 1);

Clazz.newMeth(C$, 'renderParallelPair$Z$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (fill, tension, p0, p1, p2, p3, p4, p5, p6, p7) {
var endPoints=Clazz.array($I$(3), -1, [p2, p1, p6, p5]);
var points=Clazz.new_($I$(4,1));
var whichPoint=0;
var numTopStrandPoints=2;
var numPointsPerSegment=5.0;
var interval=(1.0 / numPointsPerSegment);
var currentInt=0.0;
var x1=(p1.x|0);
var y1=(p1.y|0);
var z1=(p1.z|0);
var x2=(p2.x|0);
var y2=(p2.y|0);
var z2=(p2.z|0);
var xT1=(((x2 - (p0.x|0)) * tension)/8|0);
var yT1=(((y2 - (p0.y|0)) * tension)/8|0);
var zT1=(((z2 - (p0.z|0)) * tension)/8|0);
var xT2=((((p3.x|0) - x1) * tension)/8|0);
var yT2=((((p3.y|0) - y1) * tension)/8|0);
var zT2=((((p3.z|0) - z1) * tension)/8|0);
this.sLeft[0]=0;
this.pLeft[0].set$I$I$I(x1, y1, z1);
this.sRight[0]=1;
this.pRight[0].set$I$I$I(x2, y2, z2);
var sp=0;
for (var strands=2; strands > 0; strands--) {
if (strands == 1) {
x1=(p5.x|0);
y1=(p5.y|0);
z1=(p5.z|0);
x2=(p6.x|0);
y2=(p6.y|0);
z2=(p6.z|0);
xT1=(((x2 - (p4.x|0)) * tension)/8|0);
yT1=(((y2 - (p4.y|0)) * tension)/8|0);
zT1=(((z2 - (p4.z|0)) * tension)/8|0);
xT2=((((p7.x|0) - x1) * tension)/8|0);
yT2=((((p7.y|0) - y1) * tension)/8|0);
zT2=((((p7.z|0) - z1) * tension)/8|0);
this.sLeft[0]=0;
this.pLeft[0].set$I$I$I(x1, y1, z1);
this.sRight[0]=1;
this.pRight[0].set$I$I$I(x2, y2, z2);
sp=0;
}points.addLast$O(endPoints[whichPoint++]);
currentInt=interval;
do {
var a=this.pLeft[sp];
var b=this.pRight[sp];
var dx=b.x - a.x;
var dy=b.y - a.y;
var dist2=dx * dx + dy * dy;
if (dist2 <= 2) {
var s=this.sLeft[sp];
this.g3d.fillSphereI$I$javajs_util_P3i(3, a);
if (s < 1.0 - currentInt ) {
var temp=Clazz.new_($I$(3,1));
temp.set$F$F$F(a.x, a.y, a.z);
points.addLast$O(temp);
currentInt += interval;
if (strands == 2) {
numTopStrandPoints++;
}}--sp;
} else {
var s=(this.sLeft[sp] + this.sRight[sp]) / 2;
var s2=s * s;
var s3=s2 * s;
var h1=2 * s3 - 3 * s2 + 1;
var h2=-2 * s3 + 3 * s2;
var h3=s3 - 2 * s2 + s;
var h4=s3 - s2;
if (sp >= 15) break;
var pMid=this.pRight[sp + 1];
pMid.x=((h1 * x1 + h2 * x2 + h3 * xT1 + h4 * xT2)|0);
pMid.y=((h1 * y1 + h2 * y2 + h3 * yT1 + h4 * yT2)|0);
pMid.z=((h1 * z1 + h2 * z2 + h3 * zT1 + h4 * zT2)|0);
this.pRight[sp + 1]=this.pRight[sp];
this.sRight[sp + 1]=this.sRight[sp];
this.pRight[sp]=pMid;
this.sRight[sp]=s;
++sp;
this.pLeft[sp].setT$javajs_util_T3i(pMid);
this.sLeft[sp]=s;
}} while (sp >= 0);
points.addLast$O(endPoints[whichPoint++]);
}
var size=points.size$();
for (var top=0; top < numTopStrandPoints && (top + numTopStrandPoints) < size ; top++) this.g3d.drawLineAB$javajs_util_P3$javajs_util_P3(points.get$I(top), points.get$I(top + numTopStrandPoints));

}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.vAB=Clazz.new_($I$(1,1));
C$.vAC=Clazz.new_($I$(1,1));
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:08 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
