(function(){var P$=Clazz.newPackage("org.jmol.jvxl.calc"),p$1={},I$=[[0,'javajs.util.P3',['org.jmol.jvxl.calc.MarchingSquares','.ContourVertex'],['org.jmol.jvxl.calc.MarchingSquares','.Triangle'],'java.util.Hashtable','javajs.util.AU','org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MarchingSquares", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.surfaceReader=null;
this.volumeData=null;
this.nContourSegments=0;
this.contourType=0;
this.thisContour=0;
this.valueMin=0;
this.valueMax=0;
this.pointA=null;
this.pointB=null;
this.contourFromZero=false;
this.contoursDiscrete=null;
this.contourVertexCount=0;
this.contourVertexes=null;
this.contourPlaneMinimumValue=0;
this.contourPlaneMaximumValue=0;
this.contourValuesUsed=null;
this.ptTemp=null;
this.triangleCount=0;
this.triangles=null;
this.htPts=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.thisContour=0;
this.pointA=Clazz.new_($I$(1));
this.pointB=Clazz.new_($I$(1));
this.contourFromZero=true;
this.contourVertexes=Clazz.array($I$(2), [1000]);
this.ptTemp=Clazz.new_($I$(1));
this.triangleCount=0;
this.triangles=Clazz.array($I$(3), [1000]);
this.htPts=Clazz.new_($I$(4));
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_jvxl_api_VertexDataServer$org_jmol_jvxl_data_VolumeData$javajs_util_P4$FA$I$I$Z', function (surfaceReader, volumeData, thePlane, contoursDiscrete, nContours, thisContour, contourFromZero) {
C$.$init$.apply(this);
this.surfaceReader=surfaceReader;
this.volumeData=volumeData;
this.thisContour=thisContour;
this.contoursDiscrete=contoursDiscrete;
this.contourFromZero=contourFromZero;
if (contoursDiscrete == null ) {
var i=0;
this.nContourSegments=(nContours == 0 ? 9 : nContours) + i;
if (this.nContourSegments > 100) this.nContourSegments=100;
} else {
nContours=contoursDiscrete.length;
this.nContourSegments=nContours;
this.contourFromZero=false;
}}, 1);

Clazz.newMeth(C$, 'setMinMax$F$F', function (valueMin, valueMax) {
this.valueMin=valueMin;
this.valueMax=valueMax;
});

Clazz.newMeth(C$, 'addContourVertex$javajs_util_P3$F', function (vertexXYZ, value) {
if (this.contourVertexCount == this.contourVertexes.length) this.contourVertexes=$I$(5).doubleLength$O(this.contourVertexes);
var vPt=this.surfaceReader.addVertexCopy$javajs_util_T3$F$I$Z(vertexXYZ, value, -2, true);
this.contourVertexes[this.contourVertexCount++]=Clazz.new_($I$(2).c$$javajs_util_P3, [this, null, vertexXYZ]);
return vPt;
});

Clazz.newMeth(C$, 'setContourData$I$F', function (i, value) {
this.contourVertexes[i].setValue$F(value);
});

Clazz.newMeth(C$, 'calcContourPoint$F$F$F$javajs_util_P3', function (cutoff, valueA, valueB, pt) {
return this.volumeData.calculateFractionalPoint$F$javajs_util_P3$javajs_util_P3$F$F$javajs_util_P3(cutoff, this.pointA, this.pointB, valueA, valueB, pt);
});

Clazz.newMeth(C$, 'addTriangle$I$I$I$I$I', function (iA, iB, iC, check, iContour) {
if (this.triangleCount == this.triangles.length) this.triangles=$I$(5).doubleLength$O(this.triangles);
this.triangles[this.triangleCount++]=Clazz.new_($I$(3).c$$I$I$I$I$I, [this, null, iA, iB, iC, check, iContour]);
return 0;
});

Clazz.newMeth(C$, 'generateContourData$Z$F', function (haveData, zeroOffset) {
$I$(6).info$S("generateContours: " + this.nContourSegments + " segments" );
p$1.getVertexValues$Z.apply(this, [haveData]);
p$1.createContours$F$F$F.apply(this, [this.valueMin, this.valueMax, zeroOffset]);
p$1.addAllTriangles.apply(this, []);
return this.contourVertexCount;
});

Clazz.newMeth(C$, 'getVertexValues$Z', function (haveData) {
this.contourPlaneMinimumValue=3.4028235E38;
this.contourPlaneMaximumValue=-3.4028235E38;
for (var i=0; i < this.contourVertexCount; i++) {
var c=this.contourVertexes[i];
var value;
if (haveData) {
value=c.value;
} else {
value=this.volumeData.lookupInterpolatedVoxelValue$javajs_util_T3$Z(c, false);
c.setValue$F(value);
}if (value < this.contourPlaneMinimumValue ) this.contourPlaneMinimumValue=value;
if (value > this.contourPlaneMaximumValue ) this.contourPlaneMaximumValue=value;
}
}, p$1);

Clazz.newMeth(C$, 'createContours$F$F$F', function (min, max, zeroOffset) {
var diff=max - min;
this.contourValuesUsed=Clazz.array(Float.TYPE, [this.nContourSegments]);
for (var i=this.triangleCount; --i >= 0; ) this.triangles[i].check=0;

var minCutoff=-3.4028235E38;
var cutoff=minCutoff;
for (var i=0; i < this.nContourSegments; i++) {
cutoff=(this.contoursDiscrete != null  ? this.contoursDiscrete[i] : this.contourFromZero ? min + (i * 1.0 / this.nContourSegments) * diff : i == 0 ? -3.4028235E38 : i == this.nContourSegments - 1 ? 3.4028235E38 : min + ((i - 1) * 1.0 / (this.nContourSegments - 1)) * diff);
if (this.contoursDiscrete == null  && Math.abs(cutoff) < zeroOffset  ) cutoff=(cutoff < 0  ? -zeroOffset : zeroOffset);
this.contourValuesUsed[i]=cutoff;
$I$(6).info$S("#contour " + (i + 1) + " " + new Float(cutoff).toString() + " " + this.triangleCount );
this.htPts.clear$();
for (var ii=this.triangleCount; --ii >= 0; ) {
if (this.triangles[ii].isValid) p$1.checkContour$org_jmol_jvxl_calc_MarchingSquares_Triangle$I$F.apply(this, [this.triangles[ii], i, cutoff]);
}
if (this.thisContour > 0) {
if (i + 1 == this.thisContour) minCutoff=cutoff;
} else {
}}
if (this.contoursDiscrete != null ) {
minCutoff=this.contoursDiscrete[0];
}this.valueMin=this.contourValuesUsed[0];
this.valueMax=(this.contourValuesUsed.length == 0 ? this.valueMin : this.contourValuesUsed[this.contourValuesUsed.length - 1]);
return true;
}, p$1);

Clazz.newMeth(C$, 'intercept$org_jmol_jvxl_calc_MarchingSquares_Triangle$I$F', function (t, i, value) {
var iA=t.pts[i];
var iB=t.pts[(i + 1) % 3];
if (iA == 2147483647 || iB == 2147483647 ) return -1;
var key=(iA < iB ? iA + "_" + iB  : iB + "_" + iA );
if (this.htPts.containsKey$O(key)) return this.htPts.get$O(key).intValue$();
var valueA=this.contourVertexes[iA].value;
var valueB=this.contourVertexes[iB].value;
var iPt=-1;
if (valueA != valueB ) {
var f=(value - valueA) / (valueB - valueA);
if (f >= 0  && f <= 1  ) {
this.pointA.setT$javajs_util_T3(this.contourVertexes[iA]);
this.pointB.setT$javajs_util_T3(this.contourVertexes[iB]);
value=this.calcContourPoint$F$F$F$javajs_util_P3(value, valueA, valueB, this.ptTemp);
if (!Float.isNaN$F(value)) {
iPt=this.addContourVertex$javajs_util_P3$F(this.ptTemp, value);
if (iPt < 0) return -1;
this.contourVertexes[iPt].setValue$F(value);
} else {
}}}this.htPts.put$TK$TV(key, Integer.valueOf$I(iPt));
return iPt;
}, p$1);

Clazz.newMeth(C$, 'checkContour$org_jmol_jvxl_calc_MarchingSquares_Triangle$I$F', function (t, i, value) {
if (this.thisContour > 0 && i + 1 != this.thisContour ) return;
var ipt0=p$1.intercept$org_jmol_jvxl_calc_MarchingSquares_Triangle$I$F.apply(this, [t, 0, value]);
var ipt1=p$1.intercept$org_jmol_jvxl_calc_MarchingSquares_Triangle$I$F.apply(this, [t, 1, value]);
var ipt2=p$1.intercept$org_jmol_jvxl_calc_MarchingSquares_Triangle$I$F.apply(this, [t, 2, value]);
var pts=t.pts;
var mode=0;
if (ipt0 >= 0) {
mode+=1;
}if (ipt1 >= 0) {
mode+=2;
}if (ipt2 >= 0) {
mode+=4;
}switch (mode) {
case 3:
this.addTriangle$I$I$I$I$I(pts[0], ipt0, ipt1, 2 | (t.check & 1), i);
this.addTriangle$I$I$I$I$I(ipt0, pts[1], ipt1, 4 | (t.check & 3), i);
this.addTriangle$I$I$I$I$I(pts[0], ipt1, pts[2], (t.check & 6), i);
break;
case 5:
this.addTriangle$I$I$I$I$I(pts[0], ipt0, ipt2, 2 | (t.check & 5), i);
this.addTriangle$I$I$I$I$I(ipt0, pts[1], ipt2, 4 | (t.check & 1), i);
this.addTriangle$I$I$I$I$I(ipt2, pts[1], pts[2], (t.check & 6), i);
break;
case 6:
this.addTriangle$I$I$I$I$I(pts[0], pts[1], ipt2, (t.check & 5), i);
this.addTriangle$I$I$I$I$I(ipt2, pts[1], ipt1, 4 | (t.check & 2), i);
this.addTriangle$I$I$I$I$I(ipt2, ipt1, pts[2], 1 | (t.check & 6), i);
break;
default:
return;
}
t.isValid=false;
}, p$1);

Clazz.newMeth(C$, 'getMinMax$', function () {
return Clazz.array(Float.TYPE, -1, [this.valueMin, this.valueMax]);
});

Clazz.newMeth(C$, 'addAllTriangles', function () {
for (var i=0; i < this.triangleCount; i++) if (this.triangles[i].isValid) {
var t=this.triangles[i];
this.surfaceReader.addTriangleCheck$I$I$I$I$I$Z$I(t.pts[0], t.pts[1], t.pts[2], t.check, t.contourIndex, false, -1);
}
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.MarchingSquares, "ContourVertex", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javajs.util.P3');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javajs_util_P3', function (vertexXYZ) {
Clazz.super_(C$, this,1);
this.setT$javajs_util_T3(vertexXYZ);
}, 1);

Clazz.newMeth(C$, 'setValue$F', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'toString', function () {
return new Float(this.value).toString() + " " + new Float(this.x).toString() + " " + new Float(this.y).toString() + " " + new Float(this.z).toString() ;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.MarchingSquares, "Triangle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pts=null;
this.check=0;
this.isValid=false;
this.contourIndex=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isValid=true;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I', function (iA, iB, iC, check, contourIndex) {
C$.$init$.apply(this);
this.pts=Clazz.array(Integer.TYPE, -1, [iA, iB, iC]);
this.check=check;
this.contourIndex=contourIndex;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
