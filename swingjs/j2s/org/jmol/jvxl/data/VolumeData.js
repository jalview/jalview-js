(function(){var P$=Clazz.newPackage("org.jmol.jvxl.data"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.V3','javajs.util.M3','java.util.Hashtable','org.jmol.util.Logger','javajs.util.SB','org.jmol.util.Escape']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VolumeData");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sr=null;
this.doIterate=false;
this.volumetricOrigin=null;
this.origin=null;
this.volumetricVectors=null;
this.voxelCounts=null;
this.nPoints=0;
this.voxelData=null;
this.voxelMap=null;
this.volumetricVectorLengths=null;
this.maxVectorLength=0;
this.minToPlaneDistance=0;
this.yzCount=0;
this.unitVolumetricVectors=null;
this.volumetricMatrix=null;
this.inverseMatrix=null;
this.thePlane=null;
this.thePlaneNormalMag=0;
this.ptXyzTemp=null;
this.xmlData=null;
this.mappingPlane=null;
this.mappingPlaneNormalMag=0;
this.minGrid=0;
this.maxGrid=0;
this.voxelVolume=0;
this.oabc=null;
this.isPeriodic=false;
this.isSquared=false;
this.edgeVector=null;
this.ptTemp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.doIterate=true;
this.volumetricOrigin=Clazz.new_($I$(1));
this.origin=Clazz.array(Float.TYPE, [3]);
this.volumetricVectors=Clazz.array($I$(2), [3]);
this.voxelCounts=Clazz.array(Integer.TYPE, [3]);
this.volumetricVectorLengths=Clazz.array(Float.TYPE, [3]);
this.unitVolumetricVectors=Clazz.array($I$(2), [3]);
this.volumetricMatrix=Clazz.new_($I$(3));
this.inverseMatrix=Clazz.new_($I$(3));
this.ptXyzTemp=Clazz.new_($I$(1));
this.edgeVector=Clazz.new_($I$(2));
this.ptTemp=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getVoxelData$', function () {
return this.voxelData;
});

Clazz.newMeth(C$, 'setVoxelDataAsArray$FAAA', function (voxelData) {
this.voxelData=voxelData;
if (voxelData != null ) this.sr=null;
});

Clazz.newMeth(C$, 'hasPlane$', function () {
return (this.thePlane != null );
});

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.volumetricVectors[0]=Clazz.new_($I$(2));
this.volumetricVectors[1]=Clazz.new_($I$(2));
this.volumetricVectors[2]=Clazz.new_($I$(2));
this.unitVolumetricVectors[0]=Clazz.new_($I$(2));
this.unitVolumetricVectors[1]=Clazz.new_($I$(2));
this.unitVolumetricVectors[2]=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'setMappingPlane$javajs_util_P4', function (plane) {
this.mappingPlane=plane;
if (plane == null ) return;
this.mappingPlaneNormalMag=Math.sqrt(plane.x * plane.x + plane.y * plane.y + plane.z * plane.z);
});

Clazz.newMeth(C$, 'distanceToMappingPlane$javajs_util_T3', function (pt) {
return (this.mappingPlane.x * pt.x + this.mappingPlane.y * pt.y + this.mappingPlane.z * pt.z + this.mappingPlane.w) / this.mappingPlaneNormalMag;
});

Clazz.newMeth(C$, 'setVolumetricOrigin$F$F$F', function (x, y, z) {
this.volumetricOrigin.set$F$F$F(x, y, z);
});

Clazz.newMeth(C$, 'getOriginFloat$', function () {
return this.origin;
});

Clazz.newMeth(C$, 'getYzCount$', function () {
this.minGrid=this.volumetricVectors[0].length$();
this.minGrid=Math.min(this.minGrid, this.volumetricVectors[1].length$());
this.minGrid=Math.min(this.minGrid, this.volumetricVectors[2].length$());
this.maxGrid=this.volumetricVectors[0].length$();
this.maxGrid=Math.max(this.maxGrid, this.volumetricVectors[1].length$());
this.maxGrid=Math.max(this.maxGrid, this.volumetricVectors[2].length$());
this.nPoints=this.voxelCounts[0] * this.voxelCounts[1] * this.voxelCounts[2] ;
return this.yzCount=this.voxelCounts[1] * this.voxelCounts[2];
});

Clazz.newMeth(C$, 'getVolumetricVectorLengths$', function () {
return this.volumetricVectorLengths;
});

Clazz.newMeth(C$, 'setVolumetricVector$I$F$F$F', function (i, x, y, z) {
this.volumetricVectors[i].x=x;
this.volumetricVectors[i].y=y;
this.volumetricVectors[i].z=z;
this.setUnitVectors$();
});

Clazz.newMeth(C$, 'getVoxelCounts$', function () {
return this.voxelCounts;
});

Clazz.newMeth(C$, 'setVoxelCounts$I$I$I', function (nPointsX, nPointsY, nPointsZ) {
this.voxelCounts[0]=nPointsX;
this.voxelCounts[1]=nPointsY;
this.voxelCounts[2]=nPointsZ;
return nPointsX * nPointsY * nPointsZ ;
});

Clazz.newMeth(C$, 'getVoxelDataAt$I', function (pt) {
var ix=(pt/this.yzCount|0);
pt-=ix * this.yzCount;
var iy=(pt/this.voxelCounts[2]|0);
var iz=pt - iy * this.voxelCounts[2];
return this.voxelData[ix][iy][iz];
});

Clazz.newMeth(C$, 'getPointIndex$I$I$I', function (x, y, z) {
return x * this.yzCount + y * this.voxelCounts[2] + z;
});

Clazz.newMeth(C$, 'getPoint$I$javajs_util_P3', function (ipt, pt) {
var ix=(ipt/this.yzCount|0);
ipt-=ix * this.yzCount;
var iy=(ipt/this.voxelCounts[2]|0);
var iz=ipt - iy * this.voxelCounts[2];
this.voxelPtToXYZ$I$I$I$javajs_util_T3(ix, iy, iz, pt);
});

Clazz.newMeth(C$, 'setVoxelData$I$F', function (pt, value) {
var ix=(pt/this.yzCount|0);
pt-=ix * this.yzCount;
var iy=(pt/this.voxelCounts[2]|0);
var iz=pt - iy * this.voxelCounts[2];
this.voxelData[ix][iy][iz]=value;
});

Clazz.newMeth(C$, 'setVoxelMap$', function () {
this.voxelMap=Clazz.new_($I$(4));
this.getYzCount$();
});

Clazz.newMeth(C$, 'setMatrix', function () {
for (var i=0; i < 3; i++) this.volumetricMatrix.setColumnV$I$javajs_util_T3(i, this.volumetricVectors[i]);

try {
this.inverseMatrix.invertM$javajs_util_M3(this.volumetricMatrix);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).error$S("VolumeData error setting matrix -- bad unit vectors? ");
return false;
} else {
throw e;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'transform$javajs_util_V3$javajs_util_V3', function (v1, v2) {
this.volumetricMatrix.rotate2$javajs_util_T3$javajs_util_T3(v1, v2);
});

Clazz.newMeth(C$, 'setPlaneParameters$javajs_util_P4', function (plane) {
this.thePlane=plane;
this.thePlaneNormalMag=Math.sqrt(plane.x * plane.x + plane.y * plane.y + plane.z * plane.z);
});

Clazz.newMeth(C$, 'calcVoxelPlaneDistance$I$I$I', function (x, y, z) {
this.voxelPtToXYZ$I$I$I$javajs_util_T3(x, y, z, this.ptXyzTemp);
return this.distancePointToPlane$javajs_util_T3(this.ptXyzTemp);
});

Clazz.newMeth(C$, 'getToPlaneParameter$', function () {
return (Math.sqrt(this.thePlane.x * this.thePlane.x + this.thePlane.y * this.thePlane.y + this.thePlane.z * this.thePlane.z) * this.minToPlaneDistance);
});

Clazz.newMeth(C$, 'isNearPlane$I$I$I$F', function (x, y, z, toPlaneParameter) {
this.voxelPtToXYZ$I$I$I$javajs_util_T3(x, y, z, this.ptXyzTemp);
return ((this.thePlane.x * this.ptXyzTemp.x + this.thePlane.y * this.ptXyzTemp.y + this.thePlane.z * this.ptXyzTemp.z + this.thePlane.w) < toPlaneParameter );
});

Clazz.newMeth(C$, 'distancePointToPlane$javajs_util_T3', function (pt) {
return (this.thePlane.x * pt.x + this.thePlane.y * pt.y + this.thePlane.z * pt.z + this.thePlane.w) / this.thePlaneNormalMag;
});

Clazz.newMeth(C$, 'voxelPtToXYZ$I$I$I$javajs_util_T3', function (x, y, z, pt) {
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(x, this.volumetricVectors[0], this.volumetricOrigin);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(y, this.volumetricVectors[1], pt);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(z, this.volumetricVectors[2], pt);
});

Clazz.newMeth(C$, 'setUnitVectors$', function () {
this.maxVectorLength=0;
this.voxelVolume=1;
for (var i=0; i < 3; i++) {
var d=this.volumetricVectorLengths[i]=this.volumetricVectors[i].length$();
if (d == 0 ) return false;
if (d > this.maxVectorLength ) this.maxVectorLength=d;
this.voxelVolume *= d;
this.unitVolumetricVectors[i].setT$javajs_util_T3(this.volumetricVectors[i]);
this.unitVolumetricVectors[i].normalize$();
}
this.minToPlaneDistance=this.maxVectorLength * 2;
this.origin[0]=this.volumetricOrigin.x;
this.origin[1]=this.volumetricOrigin.y;
this.origin[2]=this.volumetricOrigin.z;
this.oabc=Clazz.array($I$(2), [4]);
this.oabc[0]=$I$(2).newV$javajs_util_T3(this.volumetricOrigin);
for (var i=0; i < 3; i++) {
var v=this.oabc[i + 1]=Clazz.new_($I$(2));
v.scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.voxelCounts[i] - 1, this.volumetricVectors[i], v);
}
return p$1.setMatrix.apply(this, []);
});

Clazz.newMeth(C$, 'xyzToVoxelPt$F$F$F$javajs_util_T3i', function (x, y, z, pt3i) {
this.ptXyzTemp.set$F$F$F(x, y, z);
this.ptXyzTemp.sub$javajs_util_T3(this.volumetricOrigin);
this.inverseMatrix.rotate$javajs_util_T3(this.ptXyzTemp);
pt3i.set$I$I$I(Math.round(this.ptXyzTemp.x), Math.round(this.ptXyzTemp.y), Math.round(this.ptXyzTemp.z));
});

Clazz.newMeth(C$, 'lookupInterpolatedVoxelValue$javajs_util_T3$Z', function (point, getSource) {
if (this.mappingPlane != null ) return this.distanceToMappingPlane$javajs_util_T3(point);
if (this.sr != null ) {
var v=this.sr.getValueAtPoint$javajs_util_T3$Z(point, getSource);
return (this.isSquared ? v * v : v);
}this.ptXyzTemp.sub2$javajs_util_T3$javajs_util_T3(point, this.volumetricOrigin);
this.inverseMatrix.rotate$javajs_util_T3(this.ptXyzTemp);
var iMax;
var xLower=p$1.indexLower$F$I.apply(this, [this.ptXyzTemp.x, iMax=this.voxelCounts[0] - 1]);
var xUpper=p$1.indexUpper$F$I$I.apply(this, [this.ptXyzTemp.x, xLower, iMax]);
var yLower=p$1.indexLower$F$I.apply(this, [this.ptXyzTemp.y, iMax=this.voxelCounts[1] - 1]);
var yUpper=p$1.indexUpper$F$I$I.apply(this, [this.ptXyzTemp.y, yLower, iMax]);
var zLower=p$1.indexLower$F$I.apply(this, [this.ptXyzTemp.z, iMax=this.voxelCounts[2] - 1]);
var zUpper=p$1.indexUpper$F$I$I.apply(this, [this.ptXyzTemp.z, zLower, iMax]);
var v1=C$.getFractional2DValue$F$F$F$F$F$F(p$1.mantissa$F.apply(this, [this.ptXyzTemp.x - xLower]), p$1.mantissa$F.apply(this, [this.ptXyzTemp.y - yLower]), this.getVoxelValue$I$I$I(xLower, yLower, zLower), this.getVoxelValue$I$I$I(xUpper, yLower, zLower), this.getVoxelValue$I$I$I(xLower, yUpper, zLower), this.getVoxelValue$I$I$I(xUpper, yUpper, zLower));
var v2=C$.getFractional2DValue$F$F$F$F$F$F(p$1.mantissa$F.apply(this, [this.ptXyzTemp.x - xLower]), p$1.mantissa$F.apply(this, [this.ptXyzTemp.y - yLower]), this.getVoxelValue$I$I$I(xLower, yLower, zUpper), this.getVoxelValue$I$I$I(xUpper, yLower, zUpper), this.getVoxelValue$I$I$I(xLower, yUpper, zUpper), this.getVoxelValue$I$I$I(xUpper, yUpper, zUpper));
return v1 + p$1.mantissa$F.apply(this, [this.ptXyzTemp.z - zLower]) * (v2 - v1);
});

Clazz.newMeth(C$, 'mantissa$F', function (f) {
return (this.isPeriodic ? f - Math.floor(f) : f);
}, p$1);

Clazz.newMeth(C$, 'getVoxelValue$I$I$I', function (x, y, z) {
if (this.voxelMap == null ) return this.voxelData[x][y][z];
var f=this.voxelMap.get$O(Integer.valueOf$I(this.getPointIndex$I$I$I(x, y, z)));
return (f == null  ? NaN : f.floatValue$());
});

Clazz.newMeth(C$, 'getFractional2DValue$F$F$F$F$F$F', function (fx, fy, x11, x12, x21, x22) {
var v1=x11 + fx * (x12 - x11);
var v2=x21 + fx * (x22 - x21);
return v1 + fy * (v2 - v1);
}, 1);

Clazz.newMeth(C$, 'indexLower$F$I', function (x, xMax) {
if (this.isPeriodic && xMax > 0 ) {
while (x < 0 )x += xMax;

while (x >= xMax )x -= xMax;

return (Math.floor(x)|0);
}if (x < 0 ) return 0;
var floor=(Math.floor(x)|0);
return (floor > xMax ? xMax : floor);
}, p$1);

Clazz.newMeth(C$, 'indexUpper$F$I$I', function (x, xLower, xMax) {
return (!this.isPeriodic && x < 0   || xLower == xMax  ? xLower : xLower + 1);
}, p$1);

Clazz.newMeth(C$, 'offsetCenter$javajs_util_P3', function (center) {
var pt=Clazz.new_($I$(1));
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3((this.voxelCounts[0] - 1) / 2.0, this.volumetricVectors[0], pt);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3((this.voxelCounts[1] - 1) / 2.0, this.volumetricVectors[1], pt);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3((this.voxelCounts[2] - 1) / 2.0, this.volumetricVectors[2], pt);
this.volumetricOrigin.sub2$javajs_util_T3$javajs_util_T3(center, pt);
});

Clazz.newMeth(C$, 'setDataDistanceToPlane$javajs_util_P4', function (plane) {
this.setPlaneParameters$javajs_util_P4(plane);
var nx=this.voxelCounts[0];
var ny=this.voxelCounts[1];
var nz=this.voxelCounts[2];
this.voxelData=Clazz.array(Float.TYPE, [nx, ny, nz]);
for (var x=0; x < nx; x++) for (var y=0; y < ny; y++) for (var z=0; z < nz; z++) this.voxelData[x][y][z]=this.calcVoxelPlaneDistance$I$I$I(x, y, z);



});

Clazz.newMeth(C$, 'filterData$Z$F', function (isSquared, invertCutoff) {
var doInvert=(!Float.isNaN$F(invertCutoff));
if (this.sr != null ) {
this.isSquared=isSquared;
return;
}var nx=this.voxelCounts[0];
var ny=this.voxelCounts[1];
var nz=this.voxelCounts[2];
if (isSquared) for (var x=0; x < nx; x++) for (var y=0; y < ny; y++) for (var z=0; z < nz; z++) this.voxelData[x][y][z] *= this.voxelData[x][y][z];



if (doInvert) for (var x=0; x < nx; x++) for (var y=0; y < ny; y++) for (var z=0; z < nz; z++) this.voxelData[x][y][z]=invertCutoff - this.voxelData[x][y][z];



});

Clazz.newMeth(C$, 'capData$javajs_util_P4$F', function (plane, cutoff) {
if (this.voxelData == null ) return;
var nx=this.voxelCounts[0];
var ny=this.voxelCounts[1];
var nz=this.voxelCounts[2];
var normal=$I$(2).new3$F$F$F(plane.x, plane.y, plane.z);
normal.normalize$();
var f=1.0;
for (var x=0; x < nx; x++) for (var y=0; y < ny; y++) for (var z=0; z < nz; z++) {
var value=this.voxelData[x][y][z] - cutoff;
this.voxelPtToXYZ$I$I$I$javajs_util_T3(x, y, z, this.ptXyzTemp);
var d=(this.ptXyzTemp.x * normal.x + this.ptXyzTemp.y * normal.y + this.ptXyzTemp.z * normal.z + plane.w - cutoff) / f;
if (d >= 0  || d > value  ) this.voxelData[x][y][z]=d;
}


});

Clazz.newMeth(C$, 'setVolumetricXml$', function () {
var sb=Clazz.new_($I$(6));
if (this.voxelCounts[0] == 0) {
sb.append$S("<jvxlVolumeData>\n");
} else {
sb.append$S("<jvxlVolumeData origin=\"" + $I$(7).eP$javajs_util_T3(this.volumetricOrigin) + "\">\n" );
for (var i=0; i < 3; i++) sb.append$S("<jvxlVolumeVector type=\"" + i + "\" count=\"" + this.voxelCounts[i] + "\" vector=\"" + $I$(7).eP$javajs_util_T3(this.volumetricVectors[i]) + "\"></jvxlVolumeVector>\n" );

}sb.append$S("</jvxlVolumeData>\n");
return this.xmlData=sb.toString();
});

Clazz.newMeth(C$, 'setVoxelMapValue$I$I$I$F', function (x, y, z, v) {
if (this.voxelMap == null ) return;
this.voxelMap.put$TK$TV(Integer.valueOf$I(this.getPointIndex$I$I$I(x, y, z)), Float.valueOf$F(v));
});

Clazz.newMeth(C$, 'calculateFractionalPoint$F$javajs_util_P3$javajs_util_P3$F$F$javajs_util_P3', function (cutoff, pointA, pointB, valueA, valueB, pt) {
var d=(valueB - valueA);
var fraction=(cutoff - valueA) / d;
this.edgeVector.sub2$javajs_util_T3$javajs_util_T3(pointB, pointA);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(fraction, this.edgeVector, pointA);
if (this.sr == null  || !this.doIterate  || valueB == valueA   || fraction < 0.01   || fraction > 0.99   || (this.edgeVector.length$()) < 0.01  ) return cutoff;
var n=0;
this.ptTemp.setT$javajs_util_T3(pt);
var v=this.lookupInterpolatedVoxelValue$javajs_util_T3$Z(this.ptTemp, false);
var v0=NaN;
while (++n < 10){
var fnew=(v - valueA) / d;
if (fnew < 0  || fnew > 1  ) break;
var diff=(cutoff - v) / d / 2 ;
fraction += diff;
if (fraction < 0  || fraction > 1  ) break;
pt.setT$javajs_util_T3(this.ptTemp);
v0=v;
if (Math.abs(diff) < 0.005 ) break;
this.ptTemp.scaleAdd2$F$javajs_util_T3$javajs_util_T3(diff, this.edgeVector, pt);
v=this.lookupInterpolatedVoxelValue$javajs_util_T3$Z(this.ptTemp, false);
}
return v0;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
