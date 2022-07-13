(function(){var P$=Clazz.newPackage("org.jmol.jvxl.calc"),p$1={},I$=[[0,'javajs.util.V3','javajs.util.SB','javajs.util.BS','javajs.util.P3','org.jmol.util.TriangleData','org.jmol.jvxl.data.JvxlCoder']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MarchingCubes", null, 'org.jmol.util.TriangleData');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.integrateSquared=true;
this.edgeData=Clazz.new_($I$(2,1));
this.excludePartialCubes=true;
this.vertexValues=Clazz.array(Float.TYPE, [8]);
this.voxelVertexVectors=Clazz.array($I$(1), [8]);
this.edgeVectors=Clazz.array($I$(1), [12]);
{
for (var i=12; --i >= 0; ) this.edgeVectors[i]=Clazz.new_($I$(1,1));

}
this.edgePointIndexes=Clazz.array(Integer.TYPE, [12]);
this.bsValues=Clazz.new_($I$(3,1));
this.pt0=Clazz.new_($I$(4,1));
this.pointA=Clazz.new_($I$(4,1));
this.fReturn=Clazz.array(Float.TYPE, [1]);
this.linearOffsets=Clazz.array(Integer.TYPE, [8]);
},1);

C$.$fields$=[['Z',['isContoured','isCutoffAbsolute','isSquared','isXLowToHigh','colorDensity','integrateSquared','excludePartialCubes','allInside','isInside'],'F',['cutoff'],'I',['contourType','cubeCountX','cubeCountY','cubeCountZ','nY','nZ','yzCount','mode','edgeCount','nTriangles'],'O',['surfaceReader','org.jmol.jvxl.api.VertexDataServer','volumeData','org.jmol.jvxl.data.VolumeData','bsVoxels','javajs.util.BS','+bsExcludedVertices','+bsExcludedTriangles','+bsExcludedPlanes','edgeData','javajs.util.SB','vertexValues','float[]','voxelVertexVectors','javajs.util.V3[]','+edgeVectors','edgePointIndexes','int[]','isoPointIndexPlanes','int[][][]','yzPlanes','float[][]','mappingPlane','javajs.util.P4','offset','javajs.util.P3i','voxelData','float[][][]','bsValues','javajs.util.BS','pt0','javajs.util.P3','+pointA','edgeVertexPointers','int[]','+edgeVertexPlanes','fReturn','float[]','linearOffsets','int[]']]
,['O',['yzPlanePts','int[]','+edgeVertexPointersLowToHigh','+edgeVertexPointersHighToLow','+edgeVertexPlanesLowToHigh','+edgeVertexPlanesHighToLow','cubeVertexVectors','javajs.util.V3[]','edgeTypeTable','int[]','insideMaskTable','short[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_jvxl_api_VertexDataServer$org_jmol_jvxl_data_VolumeData$org_jmol_jvxl_readers_Parameters$javajs_util_BS', function (surfaceReader, volumeData, params, bsVoxels) {
Clazz.super_(C$, this);
this.excludePartialCubes=true;
this.surfaceReader=surfaceReader;
this.bsVoxels=bsVoxels;
var bsExcluded=params.bsExcluded;
this.bsExcludedVertices=(bsExcluded[0] == null  ? bsExcluded[0]=Clazz.new_($I$(3,1)) : bsExcluded[0]);
this.bsExcludedPlanes=(bsExcluded[2] == null  ? bsExcluded[2]=Clazz.new_($I$(3,1)) : bsExcluded[2]);
this.bsExcludedTriangles=(bsExcluded[3] == null  ? bsExcluded[3]=Clazz.new_($I$(3,1)) : bsExcluded[3]);
this.mode=(volumeData.getVoxelData$() != null  || volumeData.mappingPlane != null   ? 1 : bsVoxels != null  ? 2 : 3);
this.setParameters$org_jmol_jvxl_data_VolumeData$org_jmol_jvxl_readers_Parameters(volumeData, params);
}, 1);

Clazz.newMeth(C$, 'setParameters$org_jmol_jvxl_data_VolumeData$org_jmol_jvxl_readers_Parameters', function (volumeData, params) {
this.volumeData=volumeData;
this.colorDensity=params.colorDensity;
this.isContoured=params.thePlane == null  && params.isContoured  && !this.colorDensity ;
this.cutoff=params.cutoff;
this.isCutoffAbsolute=params.isCutoffAbsolute;
this.contourType=params.contourType;
this.isSquared=params.isSquared;
this.isXLowToHigh=params.isXLowToHigh;
this.cubeCountX=volumeData.voxelCounts[0] - 1;
this.cubeCountY=volumeData.voxelCounts[1] - 1;
this.cubeCountZ=volumeData.voxelCounts[2] - 1;
volumeData.getYzCount$();
if (params.mapLattice != null ) {
this.cubeCountX=(this.cubeCountX*(Math.abs(params.mapLattice.x))|0);
this.cubeCountY=(this.cubeCountY*(Math.abs(params.mapLattice.y))|0);
this.cubeCountZ=(this.cubeCountZ*(Math.abs(params.mapLattice.z))|0);
}this.nY=this.cubeCountY + 1;
this.nZ=this.cubeCountZ + 1;
this.yzCount=this.nY * this.nZ;
if (this.bsVoxels == null ) this.bsVoxels=Clazz.new_($I$(3,1));
this.edgeVertexPointers=(this.isXLowToHigh ? C$.edgeVertexPointersLowToHigh : C$.edgeVertexPointersHighToLow);
this.edgeVertexPlanes=(this.isXLowToHigh ? C$.edgeVertexPlanesLowToHigh : C$.edgeVertexPlanesHighToLow);
this.isoPointIndexPlanes=Clazz.array(Integer.TYPE, [2, this.yzCount, 3]);
this.yzPlanes=(this.mode == 3 ? Clazz.array(Float.TYPE, [2, this.yzCount]) : null);
this.setLinearOffsets$();
this.calcVoxelVertexVectors$();
});

Clazz.newMeth(C$, 'calcVoxelVertexVectors$', function () {
for (var i=8; --i >= 0; ) this.volumeData.transform$javajs_util_V3$javajs_util_V3(C$.cubeVertexVectors[i], this.voxelVertexVectors[i]=Clazz.new_($I$(1,1)));

for (var i=12; --i >= 0; ) this.edgeVectors[i].sub2$javajs_util_T3$javajs_util_T3(this.voxelVertexVectors[$I$(5).edgeVertexes[i + i + 1 ]], this.voxelVertexVectors[$I$(5).edgeVertexes[i + i]]);

});

Clazz.newMeth(C$, 'resetIndexPlane$IAA', function (plane) {
for (var i=0; i < this.yzCount; i++) for (var j=0; j < 3; j++) plane[i][j]=-2147483648;


return plane;
});

Clazz.newMeth(C$, 'getEdgeData$', function () {
if (this.cubeCountX < 0 || this.cubeCountY < 0  || this.cubeCountZ < 0 ) return "";
this.mappingPlane=this.volumeData.mappingPlane;
this.edgeCount=0;
var x0;
var x1;
var xStep;
var ptStep;
var pt;
var ptX;
if (this.isXLowToHigh) {
x0=0;
x1=this.cubeCountX + (this.colorDensity ? 1 : 0);
if (this.colorDensity) {
x1=this.cubeCountX + 1;
ptX=this.yzCount - 1;
} else {
x1=this.cubeCountX;
ptX=(this.yzCount - 1) - this.nZ - 1 ;
}xStep=1;
ptStep=this.yzCount;
} else {
if (this.colorDensity) {
x0=this.cubeCountX;
ptX=(this.cubeCountX + 1) * this.yzCount - 1;
} else {
x0=this.cubeCountX - 1;
ptX=(this.cubeCountX * this.yzCount - 1) - this.nZ - 1 ;
}x1=-1;
xStep=-1;
ptStep=-this.yzCount;
}pt=ptX;
this.resetIndexPlane$IAA(this.isoPointIndexPlanes[1]);
this.voxelData=null;
var y1=this.cubeCountY + (this.colorDensity ? 1 : 0);
var z1=this.cubeCountZ + (this.colorDensity ? 1 : 0);
switch (this.mode) {
case 3:
p$1.getPlane$I$Z.apply(this, [x0, false]);
break;
case 1:
this.voxelData=this.volumeData.getVoxelData$();
break;
}
this.allInside=(this.colorDensity && (this.cutoff == 0  || this.mode == 2 && this.bsVoxels.nextSetBit$I(0) < 0  ) );
var colorDensityAll=(this.colorDensity && this.cutoff == 0  );
var v=0;
for (var x=x0; x != x1; x+=xStep, ptX+=ptStep, pt=ptX) {
if (this.mode == 3) {
if (x + xStep <= x1) p$1.getPlane$I$Z.apply(this, [x + xStep, true]);
}if (this.bsExcludedPlanes.get$I(x) && this.bsExcludedPlanes.get$I(x + xStep) ) continue;
if (this.colorDensity) {
for (var y=y1; --y >= 0; ) for (var z=z1; --z >= 0; pt--) {
v=p$1.getValue$I$I$I$I$I.apply(this, [x, y, z, pt, 0]);
if (colorDensityAll || this.isInside ) {
this.addVertex$I$I$I$I$F(x, y, z, pt, v);
}}

continue;
}var indexPlane=this.isoPointIndexPlanes[0];
this.isoPointIndexPlanes[0]=this.isoPointIndexPlanes[1];
this.isoPointIndexPlanes[1]=this.resetIndexPlane$IAA(indexPlane);
var noValues=true;
for (var y=y1; --y >= 0; pt--) {
for (var z=z1; --z >= 0; pt--) {
var insideMask=0;
for (var i=8; --i >= 0; ) {
v=p$1.getValue$I$I$I$I$I.apply(this, [x, y, z, pt, i]);
if (this.isInside) insideMask|=$I$(5).Pwr2[i];
}
if (noValues && !Float.isNaN$F(v) ) noValues=false;
if (insideMask == 0) {
continue;
}if (insideMask == 255) {
continue;
}if (this.processOneCubical$I$I$I$I$I(insideMask, x, y, z, pt) && !this.isContoured && !this.colorDensity  ) {
this.processTriangles$I(insideMask);
}}
}
if (noValues) {
this.bsExcludedPlanes.set$I(x);
}}
return this.edgeData.toString();
});

Clazz.newMeth(C$, 'getValue$I$I$I$I$I', function (x, y, z, pt, i) {
var v;
this.offset=$I$(5).cubeVertexOffsets[i];
var pti=pt + this.linearOffsets[i];
switch (this.mode) {
case 3:
v=this.vertexValues[i]=this.getValueArray$I$I$I$I$FA(x + this.offset.x, y + this.offset.y, z + this.offset.z, pti, this.yzPlanes[C$.yzPlanePts[i]]);
this.isInside=(this.allInside || this.bsVoxels.get$I(pti) );
break;
case 2:
this.isInside=(this.allInside || this.bsVoxels.get$I(pti) );
v=this.vertexValues[i]=(this.bsExcludedVertices.get$I(pti) ? NaN : this.isInside ? 1 : 0);
break;
default:
case 1:
if (this.mappingPlane == null ) {
v=this.vertexValues[i]=this.voxelData[x + this.offset.x][y + this.offset.y][z + this.offset.z];
} else {
this.volumeData.voxelPtToXYZ$I$I$I$javajs_util_T3(x + this.offset.x, y + this.offset.y, z + this.offset.z, this.pt0);
v=this.vertexValues[i]=this.volumeData.distanceToMappingPlane$javajs_util_T3(this.pt0);
}if (this.isSquared) this.vertexValues[i] *= this.vertexValues[i];
this.isInside=(this.allInside ? true : C$.isInside$F$F$Z(this.vertexValues[i], this.cutoff, this.isCutoffAbsolute));
if (this.isInside) this.bsVoxels.set$I(pti);
}
return v;
}, p$1);

Clazz.newMeth(C$, 'getPlane$I$Z', function (i, andSwap) {
if (i < 0 || i > this.cubeCountX ) return;
this.surfaceReader.getPlane$I(i);
if (andSwap) {
var plane=this.yzPlanes[0];
this.yzPlanes[0]=this.yzPlanes[1];
this.yzPlanes[1]=plane;
}}, p$1);

Clazz.newMeth(C$, 'processTriangles$I', function (insideMask) {
var triangles=$I$(5).triangleTable2[insideMask];
for (var i=triangles.length; (i-=4) >= 0; ) this.addTriangle$I$I$I$I(triangles[i], triangles[i + 1], triangles[i + 2], triangles[i + 3]);

});

Clazz.newMeth(C$, 'addVertex$I$I$I$I$F', function (x, y, z, pti, value) {
this.volumeData.voxelPtToXYZ$I$I$I$javajs_util_T3(x, y, z, this.pt0);
if (this.surfaceReader.addVertexCopy$javajs_util_T3$F$I$Z(this.pt0, value, -4, true) < 0) this.bsExcludedVertices.set$I(pti);
});

Clazz.newMeth(C$, 'addTriangle$I$I$I$I', function (ia, ib, ic, edgeType) {
if (!this.bsExcludedTriangles.get$I(this.nTriangles) && this.surfaceReader.addTriangleCheck$I$I$I$I$I$Z$I(this.edgePointIndexes[ia], this.edgePointIndexes[ib], this.edgePointIndexes[ic], edgeType, 0, this.isCutoffAbsolute, 0) < 0 ) {
this.bsExcludedTriangles.set$I(this.nTriangles);
}this.nTriangles++;
});

Clazz.newMeth(C$, 'getValueArray$I$I$I$I$FA', function (x, y, z, pt, tempValues) {
var ptyz=pt % this.yzCount;
this.bsValues.set$I(pt);
var value=this.surfaceReader.getValue$I$I$I$I(x, y, z, ptyz);
if (this.isSquared) value *= value;
tempValues[ptyz]=value;
if (C$.isInside$F$F$Z(value, this.cutoff, this.isCutoffAbsolute)) this.bsVoxels.set$I(pt);
return value;
});

Clazz.newMeth(C$, 'isInside$F$F$Z', function (voxelValue, max, isAbsolute) {
return ((max > 0  && (isAbsolute ? Math.abs(voxelValue) : voxelValue) >= max  ) || (max <= 0  && voxelValue <= max  ) );
}, 1);

Clazz.newMeth(C$, 'processOneCubical$I$I$I$I$I', function (insideMask, x, y, z, pt) {
var edgeMask=C$.insideMaskTable[insideMask];
var isNaN=false;
for (var iEdge=12; --iEdge >= 0; ) {
var xEdge=$I$(5).Pwr2[iEdge];
if ((edgeMask & xEdge) == 0) continue;
var iPlane=this.edgeVertexPlanes[iEdge];
var iPt=(pt + this.linearOffsets[this.edgeVertexPointers[iEdge]]) % this.yzCount;
var iType=C$.edgeTypeTable[iEdge];
var index=this.edgePointIndexes[iEdge]=this.isoPointIndexPlanes[iPlane][iPt][iType];
if (index != -2147483648) {
if (index == -1) isNaN=this.excludePartialCubes;
continue;
}var vertexA=$I$(5).edgeVertexes[iEdge << 1];
var vertexB=$I$(5).edgeVertexes[(iEdge << 1) + 1];
var valueA=this.vertexValues[vertexA];
var valueB=this.vertexValues[vertexB];
this.calcVertexPoint$I$I$I$I$javajs_util_P3(x, y, z, vertexA, this.pointA);
this.edgeCount++;
var i=this.edgePointIndexes[iEdge]=this.isoPointIndexPlanes[iPlane][iPt][iType]=this.surfaceReader.getSurfacePointIndexAndFraction$F$Z$I$I$I$javajs_util_P3i$I$I$F$F$javajs_util_T3$javajs_util_V3$Z$FA(this.cutoff, this.isCutoffAbsolute, x, y, z, $I$(5).cubeVertexOffsets[vertexA], vertexA, vertexB, valueA, valueB, this.pointA, this.edgeVectors[iEdge], iType == this.contourType, this.fReturn);
this.addEdgeData$F(i < 0 ? NaN : this.fReturn[0]);
if (Float.isNaN$F(this.fReturn[0]) || i < 0 ) isNaN=this.excludePartialCubes;
}
return !isNaN;
});

Clazz.newMeth(C$, 'addEdgeData$F', function (f) {
var ch=$I$(6).jvxlFractionAsCharacter$F(f);
this.edgeData.appendC$C(ch);
});

Clazz.newMeth(C$, 'calcVertexPoint$I$I$I$I$javajs_util_P3', function (x, y, z, vertex, pt) {
this.volumeData.voxelPtToXYZ$I$I$I$javajs_util_T3(x, y, z, this.pt0);
pt.add2$javajs_util_T3$javajs_util_T3(this.pt0, this.voxelVertexVectors[vertex]);
});

Clazz.newMeth(C$, 'setLinearOffsets$', function () {
this.linearOffsets[0]=0;
this.linearOffsets[1]=this.yzCount;
this.linearOffsets[2]=this.yzCount + 1;
this.linearOffsets[3]=1;
this.linearOffsets[4]=this.nZ;
this.linearOffsets[5]=this.yzCount + this.nZ;
this.linearOffsets[6]=this.yzCount + this.nZ + 1 ;
this.linearOffsets[7]=this.nZ + 1;
});

Clazz.newMeth(C$, 'getLinearOffset$I$I$I$I', function (x, y, z, offset) {
return x * this.yzCount + y * this.nZ + z + this.linearOffsets[offset];
});

C$.$static$=function(){C$.$static$=0;
C$.yzPlanePts=Clazz.array(Integer.TYPE, -1, [0, 1, 1, 0, 0, 1, 1, 0]);
C$.edgeVertexPointersLowToHigh=Clazz.array(Integer.TYPE, -1, [1, 1, 2, 0, 5, 5, 6, 4, 0, 1, 2, 3]);
C$.edgeVertexPointersHighToLow=Clazz.array(Integer.TYPE, -1, [0, 1, 3, 0, 4, 5, 7, 4, 0, 1, 2, 3]);
C$.edgeVertexPlanesLowToHigh=Clazz.array(Integer.TYPE, -1, [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);
C$.edgeVertexPlanesHighToLow=Clazz.array(Integer.TYPE, -1, [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1]);
C$.cubeVertexVectors=Clazz.array($I$(1), -1, [$I$(1).new3$F$F$F(0, 0, 0), $I$(1).new3$F$F$F(1, 0, 0), $I$(1).new3$F$F$F(1, 0, 1), $I$(1).new3$F$F$F(0, 0, 1), $I$(1).new3$F$F$F(0, 1, 0), $I$(1).new3$F$F$F(1, 1, 0), $I$(1).new3$F$F$F(1, 1, 1), $I$(1).new3$F$F$F(0, 1, 1)]);
C$.edgeTypeTable=Clazz.array(Integer.TYPE, -1, [0, 2, 0, 2, 0, 2, 0, 2, 1, 1, 1, 1]);
C$.insideMaskTable=Clazz.array(Short.TYPE, -1, [0, 265, 515, 778, 1030, 1295, 1541, 1804, 2060, 2309, 2575, 2822, 3082, 3331, 3593, 3840, 400, 153, 915, 666, 1430, 1183, 1941, 1692, 2460, 2197, 2975, 2710, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 1590, 1855, 1077, 1340, 2620, 2869, 2111, 2358, 3642, 3891, 3129, 3376, 928, 681, 419, 170, 1958, 1711, 1445, 1196, 2988, 2725, 2479, 2214, 4010, 3747, 3497, 3232, 1120, 1385, 1635, 1898, 102, 367, 613, 876, 3180, 3429, 3695, 3942, 2154, 2403, 2665, 2912, 1520, 1273, 2035, 1786, 502, 255, 1013, 764, 3580, 3317, 4095, 3830, 2554, 2291, 3065, 2800, 1616, 1881, 1107, 1370, 598, 863, 85, 348, 3676, 3925, 3167, 3414, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 966, 719, 453, 204, 4044, 3781, 3535, 3270, 3018, 2755, 2505, 2240, 2240, 2505, 2755, 3018, 3270, 3535, 3781, 4044, 204, 453, 719, 966, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 3414, 3167, 3925, 3676, 348, 85, 863, 598, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 3830, 4095, 3317, 3580, 764, 1013, 255, 502, 1786, 2035, 1273, 1520, 2912, 2665, 2403, 2154, 3942, 3695, 3429, 3180, 876, 613, 367, 102, 1898, 1635, 1385, 1120, 3232, 3497, 3747, 4010, 2214, 2479, 2725, 2988, 1196, 1445, 1711, 1958, 170, 419, 681, 928, 3376, 3129, 3891, 3642, 2358, 2111, 2869, 2620, 1340, 1077, 1855, 1590, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 2710, 2975, 2197, 2460, 1692, 1941, 1183, 1430, 666, 915, 153, 400, 3840, 3593, 3331, 3082, 2822, 2575, 2309, 2060, 1804, 1541, 1295, 1030, 778, 515, 265, 0]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
