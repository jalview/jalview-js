(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'org.jmol.atomdata.AtomData','javajs.util.BS','javajs.util.P3','javajs.util.P3i','org.jmol.atomdata.RadiusData',['org.jmol.atomdata.RadiusData','.EnumType'],'org.jmol.c.VDW','org.jmol.util.BSUtil','org.jmol.util.Logger','javajs.util.V3','javajs.util.AU','javajs.util.SB','org.jmol.jvxl.data.JvxlCoder']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomDataReader", null, 'org.jmol.jvxl.readers.VolumeDataReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.atomData=Clazz.new_($I$(1,1));
this.bsMySelected=Clazz.new_($I$(2,1));
this.bsMyIgnored=Clazz.new_($I$(2,1));
this.ptY0=Clazz.new_($I$(3,1));
this.ptZ0=Clazz.new_($I$(3,1));
this.pt0=Clazz.new_($I$(4,1));
this.pt1=Clazz.new_($I$(4,1));
this.ptV=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['Z',['doAddHydrogens','havePlane','doUseIterator','haveOneProperty'],'F',['maxDistance','theProperty','minPtsPerAng','sr','maxRS','margin','vl0','vl1','vl2'],'I',['modelIndex','ac','myAtomCount','nearbyAtomCount','firstNearbyAtom','thisX'],'S',['fileName','fileDotModel'],'O',['contactPair','org.jmol.util.ContactPair','atomData','org.jmol.atomdata.AtomData','atomXyzTruncated','javajs.util.P3[]','atomRadius','float[]','+atomProp','atomNo','int[]','+atomIndex','+myIndex','bsMySelected','javajs.util.BS','+bsMyIgnored','+bsNearby','rs','float[]','+rs2','+thisPlane','thisAtomSet','javajs.util.BS','+bsSurfaceVoxels','+validSpheres','+noFaceSpheres','voxelSource','int[]','ptY0','javajs.util.P3','+ptZ0','pt0','javajs.util.P3i','+pt1','ptV','javajs.util.P3']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'initADR$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initVDR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
this.precalculateVoxelData=true;
});

Clazz.newMeth(C$, 'setup$Z', function (isMapData) {
this.setup2$();
});

Clazz.newMeth(C$, 'setup2$', function () {
this.contactPair=this.params.contactPair;
this.doAddHydrogens=(this.sg.atomDataServer != null  && this.params.addHydrogens );
this.modelIndex=this.params.modelIndex;
if (this.params.bsIgnore != null ) this.bsMyIgnored=this.params.bsIgnore;
if (this.params.volumeData != null ) {
this.setVolumeDataV$org_jmol_jvxl_data_VolumeData(this.params.volumeData);
this.setBBox$javajs_util_T3$F(this.volumeData.volumetricOrigin, 0);
this.ptV.setT$javajs_util_T3(this.volumeData.volumetricOrigin);
for (var i=0; i < 3; i++) this.ptV.scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.volumeData.voxelCounts[i] - 1, this.volumeData.volumetricVectors[i], this.ptV);

this.setBBox$javajs_util_T3$F(this.ptV, 0);
}this.havePlane=(this.params.thePlane != null );
if (this.havePlane) this.volumeData.setPlaneParameters$javajs_util_P4(this.params.thePlane);
});

Clazz.newMeth(C$, 'markPlaneVoxels$javajs_util_P3$F', function (p, r) {
for (var i=0, pt=this.thisX * this.yzCount, pt1=pt + this.yzCount; pt < pt1; pt++, i++) {
this.volumeData.getPoint$I$javajs_util_P3(pt, this.ptV);
this.thisPlane[i]=this.ptV.distance$javajs_util_T3(p) - r;
}
});

Clazz.newMeth(C$, 'setVolumeForPlane$', function () {
if (this.useOriginStepsPoints) {
this.xyzMin=$I$(3).newP$javajs_util_T3(this.params.origin);
this.xyzMax=$I$(3).newP$javajs_util_T3(this.params.origin);
this.xyzMax.add3$F$F$F((this.params.points.x - 1) * this.params.steps.x, (this.params.points.y - 1) * this.params.steps.y, (this.params.points.z - 1) * this.params.steps.z);
} else if (this.params.boundingBox == null ) {
this.getAtoms$javajs_util_BS$Z$Z$Z$Z$Z$Z$F$javajs_util_M4(this.params.bsSelected, false, true, false, false, false, false, this.params.mep_marginAngstroms, this.params.modelInvRotation);
if (this.xyzMin == null ) {
this.xyzMin=$I$(3).new3$F$F$F(-10, -10, -10);
this.xyzMax=$I$(3).new3$F$F$F(10, 10, 10);
}} else {
this.xyzMin=$I$(3).newP$javajs_util_T3(this.params.boundingBox[0]);
this.xyzMax=$I$(3).newP$javajs_util_T3(this.params.boundingBox[1]);
}this.setRanges$F$I$F(this.params.plane_ptsPerAngstrom, this.params.plane_gridMax, 0);
});

Clazz.newMeth(C$, 'getAtoms$javajs_util_BS$Z$Z$Z$Z$Z$Z$F$javajs_util_M4', function (bsSelected, doAddHydrogens, getRadii, getMolecules, getAllModels, addNearbyAtoms, getAtomMinMax, marginAtoms, modelInvRotation) {
if (addNearbyAtoms) getRadii=true;
if (getRadii) {
if (this.params.atomRadiusData == null ) this.params.atomRadiusData=Clazz.new_([null, 1, $I$(6).FACTOR, $I$(7).AUTO],$I$(5,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW);
this.atomData.radiusData=this.params.atomRadiusData;
this.atomData.radiusData.valueExtended=this.params.solventExtendedAtomRadius;
if (doAddHydrogens) this.atomData.radiusData.vdwType=$I$(7).NOJMOL;
}this.atomData.modelIndex=this.modelIndex;
this.atomData.bsSelected=bsSelected;
this.atomData.bsIgnored=this.bsMyIgnored;
this.sg.fillAtomData$org_jmol_atomdata_AtomData$I(this.atomData, 1 | (getAllModels ? 16 : 0) | (getMolecules ? 4 : 0) | (getRadii ? 2 : 0) );
if (this.doUseIterator) this.atomData.bsSelected=null;
this.ac=this.atomData.ac;
this.modelIndex=this.atomData.firstModelIndex;
if (modelInvRotation != null ) this.atomData.transformXYZ$javajs_util_M4$javajs_util_BS(modelInvRotation, bsSelected);
var needRadius=false;
for (var i=0; i < this.ac; i++) {
if ((bsSelected == null  || bsSelected.get$I(i) ) && (!this.bsMyIgnored.get$I(i)) ) {
if (this.havePlane && Math.abs(this.volumeData.distancePointToPlane$javajs_util_T3(this.atomData.xyz[i])) > 2 * (this.atomData.atomRadius[i]=p$1.getWorkingRadius$I$F.apply(this, [i, marginAtoms]))  ) continue;
this.bsMySelected.set$I(i);
needRadius=!this.havePlane;
}if (getRadii && (addNearbyAtoms || needRadius ) ) this.atomData.atomRadius[i]=p$1.getWorkingRadius$I$F.apply(this, [i, marginAtoms]);
}
var rH=(getRadii && doAddHydrogens  ? p$1.getWorkingRadius$I$F.apply(this, [-1, marginAtoms]) : 0);
this.myAtomCount=$I$(8).cardinalityOf$javajs_util_BS(this.bsMySelected);
var atomSet=$I$(8).copy$javajs_util_BS(this.bsMySelected);
var nH=0;
this.atomProp=null;
this.theProperty=3.4028235E38;
this.haveOneProperty=false;
var props=this.params.theProperty;
if (this.myAtomCount > 0) {
var hAtoms=null;
if (doAddHydrogens) {
this.atomData.bsSelected=atomSet;
this.sg.atomDataServer.fillAtomData$org_jmol_atomdata_AtomData$I(this.atomData, 8);
hAtoms=Clazz.array($I$(3), [nH=this.atomData.hydrogenAtomCount]);
for (var i=0; i < this.atomData.hAtoms.length; i++) if (this.atomData.hAtoms[i] != null ) for (var j=this.atomData.hAtoms[i].length; --j >= 0; ) hAtoms[--nH]=this.atomData.hAtoms[i][j];


nH=hAtoms.length;
$I$(9).info$S(nH + " attached hydrogens added");
}var n=nH + this.myAtomCount;
if (getRadii) this.atomRadius=Clazz.array(Float.TYPE, [n]);
this.atomXyzTruncated=Clazz.array($I$(3), [n]);
if (this.params.theProperty != null ) this.atomProp=Clazz.array(Float.TYPE, [n]);
this.atomNo=Clazz.array(Integer.TYPE, [n]);
this.atomIndex=Clazz.array(Integer.TYPE, [n]);
this.myIndex=Clazz.array(Integer.TYPE, [this.ac]);
for (var i=0; i < nH; i++) {
if (getRadii) this.atomRadius[i]=rH;
this.atomXyzTruncated[i]=hAtoms[i];
this.atomNo[i]=-1;
if (this.atomProp != null ) p$1.addAtomProp$I$F.apply(this, [i, NaN]);
}
this.myAtomCount=nH;
for (var i=atomSet.nextSetBit$I(0); i >= 0; i=atomSet.nextSetBit$I(i + 1)) {
if (this.atomProp != null ) p$1.addAtomProp$I$F.apply(this, [this.myAtomCount, (props != null  && i < props.length  ? props[i] : NaN)]);
this.atomXyzTruncated[this.myAtomCount]=this.atomData.xyz[i];
this.atomNo[this.myAtomCount]=this.atomData.atomicNumber[i];
this.atomIndex[this.myAtomCount]=i;
this.myIndex[i]=this.myAtomCount;
if (getRadii) this.atomRadius[this.myAtomCount]=this.atomData.atomRadius[i];
this.myAtomCount++;
}
}this.firstNearbyAtom=this.myAtomCount;
if (!this.isQuiet) $I$(9).info$S(this.myAtomCount + " atoms will be used in the surface calculation");
if (this.myAtomCount == 0) {
this.setBBox$javajs_util_T3$F($I$(3).new3$F$F$F(10, 10, 10), 0);
this.setBBox$javajs_util_T3$F($I$(3).new3$F$F$F(-10, -10, -10), 0);
}for (var i=0; i < this.myAtomCount; i++) this.setBBox$javajs_util_T3$F(this.atomXyzTruncated[i], getRadii ? this.atomRadius[i] + 0.5 : 0);

if (!Float.isNaN$F(this.params.scale)) {
var v=$I$(10).newVsub$javajs_util_T3$javajs_util_T3(this.xyzMax, this.xyzMin);
v.scale$F(0.5);
this.xyzMin.add$javajs_util_T3(v);
v.scale$F(this.params.scale);
this.xyzMax.add2$javajs_util_T3$javajs_util_T3(this.xyzMin, v);
this.xyzMin.sub$javajs_util_T3(v);
}if (!addNearbyAtoms || this.myAtomCount == 0 ) return;
var pt=Clazz.new_($I$(3,1));
this.bsNearby=Clazz.new_($I$(2,1));
for (var i=0; i < this.ac; i++) {
if (atomSet.get$I(i) || this.bsMyIgnored.get$I(i) ) continue;
var rA=this.atomData.atomRadius[i];
if (this.params.thePlane != null  && Math.abs(this.volumeData.distancePointToPlane$javajs_util_T3(this.atomData.xyz[i])) > 2 * rA  ) continue;
if (this.params.theProperty != null ) rA += this.maxDistance;
pt=this.atomData.xyz[i];
if (pt.x + rA > this.xyzMin.x  && pt.x - rA < this.xyzMax.x   && pt.y + rA > this.xyzMin.y   && pt.y - rA < this.xyzMax.y   && pt.z + rA > this.xyzMin.z   && pt.z - rA < this.xyzMax.z  ) {
this.bsNearby.set$I(i);
this.nearbyAtomCount++;
}}
var nAtoms=this.myAtomCount;
if (this.nearbyAtomCount != 0) {
nAtoms+=this.nearbyAtomCount;
this.atomRadius=$I$(11).arrayCopyF$FA$I(this.atomRadius, nAtoms);
this.atomXyzTruncated=$I$(11).arrayCopyObject$O$I(this.atomXyzTruncated, nAtoms);
if (this.atomIndex != null ) this.atomIndex=$I$(11).arrayCopyI$IA$I(this.atomIndex, nAtoms);
if (props != null ) this.atomProp=$I$(11).arrayCopyF$FA$I(this.atomProp, nAtoms);
for (var i=this.bsNearby.nextSetBit$I(0); i >= 0; i=this.bsNearby.nextSetBit$I(i + 1)) {
if (props != null ) p$1.addAtomProp$I$F.apply(this, [this.myAtomCount, props[i]]);
this.myIndex[i]=this.myAtomCount;
this.atomIndex[this.myAtomCount]=i;
this.atomXyzTruncated[this.myAtomCount]=this.atomData.xyz[i];
this.atomRadius[this.myAtomCount++]=this.atomData.atomRadius[i];
}
}if (getRadii) this.setRadii$();
this.haveOneProperty=(!Float.isNaN$F(this.theProperty));
});

Clazz.newMeth(C$, 'setRadii$', function () {
if (this.rs != null ) return;
this.maxRS=0;
this.rs=Clazz.array(Float.TYPE, [this.myAtomCount]);
this.rs2=Clazz.array(Float.TYPE, [this.myAtomCount]);
for (var i=0; i < this.myAtomCount; i++) {
var r=this.rs[i]=this.atomRadius[i] + this.sr;
if (r > this.maxRS ) this.maxRS=r;
this.rs2[i]=this.rs[i] * this.rs[i];
}
});

Clazz.newMeth(C$, 'addAtomProp$I$F', function (i, f) {
this.atomProp[i]=f;
if (!Float.isNaN$F(this.theProperty)) if (f != this.theProperty ) this.theProperty=(this.theProperty == 3.4028235E38  ? f : NaN);
}, p$1);

Clazz.newMeth(C$, 'getWorkingRadius$I$F', function (i, marginAtoms) {
var r=(i < 0 ? this.atomData.hAtomRadius : this.atomData.atomRadius[i]);
return (Float.isNaN$F(marginAtoms) ? Math.max(r, 0.1) : r + marginAtoms);
}, p$1);

Clazz.newMeth(C$, 'setHeader$S$S', function (calcType, line2) {
this.jvxlFileHeaderBuffer=Clazz.new_($I$(12,1));
if (this.atomData.programInfo != null ) this.jvxlFileHeaderBuffer.append$S("#created by ").append$S(this.atomData.programInfo).append$S(" on ").append$S("" + Clazz.new_(java.util.Date)).append$S("\n");
this.jvxlFileHeaderBuffer.append$S(calcType).append$S("\n").append$S(line2).append$S("\n");
});

Clazz.newMeth(C$, 'setRanges$F$I$F', function (ptsPerAngstrom, maxGrid, minPtsPerAng) {
if (this.xyzMin == null ) return;
this.ptsPerAngstrom=ptsPerAngstrom;
this.maxGrid=maxGrid;
this.minPtsPerAng=minPtsPerAng;
this.setVolumeData$();
$I$(13).jvxlCreateHeader$org_jmol_jvxl_data_VolumeData$javajs_util_SB(this.volumeData, this.jvxlFileHeaderBuffer);
});

Clazz.newMeth(C$, 'setVolumeData$', function () {
this.setVolumeDataADR$();
});

Clazz.newMeth(C$, 'setVolumeDataADR$', function () {
if (!this.setVolumeDataParams$()) {
this.setVoxelRange$I$F$F$F$I$F(0, this.xyzMin.x, this.xyzMax.x, this.ptsPerAngstrom, this.maxGrid, this.minPtsPerAng);
this.setVoxelRange$I$F$F$F$I$F(1, this.xyzMin.y, this.xyzMax.y, this.ptsPerAngstrom, this.maxGrid, this.minPtsPerAng);
this.setVoxelRange$I$F$F$F$I$F(2, this.xyzMin.z, this.xyzMax.z, this.ptsPerAngstrom, this.maxGrid, this.minPtsPerAng);
}});

Clazz.newMeth(C$, 'setVertexSource$', function () {
if (this.meshDataServer != null ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 1, null);
if (this.params.vertexSource != null ) {
this.params.vertexSource=$I$(11).arrayCopyI$IA$I(this.params.vertexSource, this.meshData.vc);
for (var i=0; i < this.meshData.vc; i++) this.params.vertexSource[i]=Math.abs(this.params.vertexSource[i]) - 1;

}});

Clazz.newMeth(C$, 'resetPlane$F', function (value) {
for (var i=0; i < this.yzCount; i++) this.thisPlane[i]=value;

});

Clazz.newMeth(C$, 'resetVoxelData$F', function (value) {
for (var x=0; x < this.nPointsX; ++x) for (var y=0; y < this.nPointsY; ++y) for (var z=0; z < this.nPointsZ; ++z) this.voxelData[x][y][z]=value;



});

Clazz.newMeth(C$, 'getVoxel$I$I$I$I', function (i, j, k, ipt) {
return (this.isProgressive ? this.thisPlane[ipt % this.yzCount] : this.voxelData[i][j][k]);
}, p$1);

Clazz.newMeth(C$, 'unsetVoxelData$', function () {
this.unsetVoxelData2$();
});

Clazz.newMeth(C$, 'unsetVoxelData2$', function () {
if (this.isProgressive) for (var i=0; i < this.yzCount; i++) {
if (this.thisPlane[i] == 3.4028235E38 ) this.thisPlane[i]=NaN;
}
 else for (var x=0; x < this.nPointsX; ++x) for (var y=0; y < this.nPointsY; ++y) for (var z=0; z < this.nPointsZ; ++z) if (this.voxelData[x][y][z] == 3.4028235E38 ) this.voxelData[x][y][z]=NaN;



});

Clazz.newMeth(C$, 'setGridLimitsForAtom$javajs_util_P3$F$javajs_util_P3i$javajs_util_P3i', function (ptA, rA, pt0, pt1) {
rA += this.margin;
this.volumeData.xyzToVoxelPt$F$F$F$javajs_util_T3i(ptA.x, ptA.y, ptA.z, pt0);
var x=(Math.floor(rA / this.volumeData.volumetricVectorLengths[0])|0);
var y=(Math.floor(rA / this.volumeData.volumetricVectorLengths[1])|0);
var z=(Math.floor(rA / this.volumeData.volumetricVectorLengths[2])|0);
pt1.set$I$I$I(pt0.x + x, pt0.y + y, pt0.z + z);
pt0.set$I$I$I(pt0.x - x, pt0.y - y, pt0.z - z);
pt0.x=Math.max(pt0.x - 1, 0);
pt0.y=Math.max(pt0.y - 1, 0);
pt0.z=Math.max(pt0.z - 1, 0);
pt1.x=Math.min(pt1.x + 1, this.nPointsX);
pt1.y=Math.min(pt1.y + 1, this.nPointsY);
pt1.z=Math.min(pt1.z + 1, this.nPointsZ);
});

Clazz.newMeth(C$, 'getAtomMinMax$javajs_util_BS$javajs_util_BSA', function (bs, bsAtomMinMax) {
for (var i=0; i < this.nPointsX; i++) bsAtomMinMax[i]=Clazz.new_($I$(2,1));

for (var iAtom=this.myAtomCount; --iAtom >= 0; ) {
if (bs != null  && !bs.get$I(iAtom) ) continue;
this.setGridLimitsForAtom$javajs_util_P3$F$javajs_util_P3i$javajs_util_P3i(this.atomXyzTruncated[iAtom], this.atomRadius[iAtom], this.pt0, this.pt1);
for (var i=this.pt0.x; i < this.pt1.x; i++) bsAtomMinMax[i].set$I(iAtom);

}
});

Clazz.newMeth(C$, 'markSphereVoxels$F$F', function (r0, distance) {
var isWithin=(distance != 3.4028235E38  && this.point != null  );
var v0=this.volumetricVectors[0];
var v1=this.volumetricVectors[1];
var v2=this.volumetricVectors[2];
for (var iAtom=this.thisAtomSet.nextSetBit$I(0); iAtom >= 0; iAtom=this.thisAtomSet.nextSetBit$I(iAtom + 1)) {
if (!this.havePlane && this.validSpheres != null   && !this.validSpheres.get$I(iAtom) ) continue;
var isSurface=(this.noFaceSpheres != null  && this.noFaceSpheres.get$I(iAtom) );
var isNearby=(iAtom >= this.firstNearbyAtom);
var ptA=this.atomXyzTruncated[iAtom];
var rA=this.atomRadius[iAtom];
if (isWithin && ptA.distance$javajs_util_T3(this.point) > distance + rA + 0.5   ) continue;
var rA0=rA + r0;
this.setGridLimitsForAtom$javajs_util_P3$F$javajs_util_P3i$javajs_util_P3i(ptA, rA0, this.pt0, this.pt1);
if (this.isProgressive) {
this.pt0.x=this.thisX;
this.pt1.x=this.thisX + 1;
}this.volumeData.voxelPtToXYZ$I$I$I$javajs_util_T3(this.pt0.x, this.pt0.y, this.pt0.z, this.ptV);
for (var i=this.pt0.x; i < this.pt1.x; i++, this.ptV.add2$javajs_util_T3$javajs_util_T3(v0, this.ptY0)) {
this.ptY0.setT$javajs_util_T3(this.ptV);
for (var j=this.pt0.y; j < this.pt1.y; j++, this.ptV.add2$javajs_util_T3$javajs_util_T3(v1, this.ptZ0)) {
this.ptZ0.setT$javajs_util_T3(this.ptV);
for (var k=this.pt0.z; k < this.pt1.z; k++, this.ptV.add$javajs_util_T3(v2)) {
var value=this.ptV.distance$javajs_util_T3(ptA) - rA;
var ipt=this.volumeData.getPointIndex$I$I$I(i, j, k);
if ((r0 == 0  || value <= rA0  ) && value < p$1.getVoxel$I$I$I$I.apply(this, [i, j, k, ipt])  ) {
if (isNearby || isWithin && this.ptV.distance$javajs_util_T3(this.point) > distance   ) value=NaN;
this.setVoxel$I$I$I$I$F(i, j, k, ipt, value);
if (!Float.isNaN$F(value)) {
if (this.voxelSource != null ) this.voxelSource[ipt]=iAtom + 1;
if (value < 0  && isSurface ) this.bsSurfaceVoxels.set$I(ipt);
}}}
}
}
}
});

Clazz.newMeth(C$, 'setVoxel$I$I$I$I$F', function (i, j, k, ipt, value) {
if (this.isProgressive) this.thisPlane[ipt % this.yzCount]=value;
 else this.voxelData[i][j][k]=value;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
