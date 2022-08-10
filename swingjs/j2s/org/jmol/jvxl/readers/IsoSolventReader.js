(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'javajs.util.V3','javajs.util.P3','javajs.util.P4','javajs.util.BS','org.jmol.util.BSUtil','org.jmol.util.MeshSurface','org.jmol.jvxl.data.MeshData','org.jmol.util.TempArray','org.jmol.util.Logger','javajs.util.Lst','java.util.Hashtable',['org.jmol.jvxl.readers.IsoSolventReader','.Edge'],['org.jmol.jvxl.readers.IsoSolventReader','.Face'],'javajs.util.Measure']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IsoSolventReader", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.jvxl.readers.AtomDataReader');
C$.$classes$=[['Edge',2],['Face',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ptS1=Clazz.new_($I$(2,1));
this.ptS2=Clazz.new_($I$(2,1));
this.vTemp=Clazz.new_($I$(1,1));
this.plane=Clazz.new_($I$(3,1));
this.ptTemp2=Clazz.new_($I$(2,1));
this.vTemp2=Clazz.new_($I$(1,1));
this.p=Clazz.new_($I$(2,1));
this.nTest=0;
},1);

C$.$fields$=[['Z',['doCalculateTroughs','isCavity','isPocket','isSurfacePoint'],'F',['cavityRadius','envelopeRadius','rAS','rBS','rAS2','rBS2','dAB','dAB2','ecosASB2'],'I',['iAtomSurface','nTest'],'O',['dots','javajs.util.P3[]','iter','org.jmol.api.AtomIndexIterator','bsSurfacePoints','javajs.util.BS','+bsSurfaceDone','bsLocale','javajs.util.BS[]','htEdges','java.util.Map','vEdges','javajs.util.Lst','+vFaces','ptS1','javajs.util.P3','+ptS2','vTemp','javajs.util.V3','plane','javajs.util.P4','ptTemp2','javajs.util.P3','vTemp2','javajs.util.V3','p','javajs.util.P3','bsAtomMinMax','javajs.util.BS[]']]
,['Z',['testLinear']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initADR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
});

Clazz.newMeth(C$, 'readVolumeParameters$Z', function (isMapData) {
this.setup$Z(isMapData);
this.initializeVolumetricData$();
this.volumeData.setUnitVectors$();
this.vl0=this.volumeData.volumetricVectorLengths[0];
this.vl1=this.volumeData.volumetricVectorLengths[1];
this.vl2=this.volumeData.volumetricVectorLengths[2];
if (this.isProgressive) {
this.volumeData.getYzCount$();
this.bsAtomMinMax=Clazz.array($I$(4), [this.nPointsX]);
this.getAtomMinMax$javajs_util_BS$javajs_util_BSA(null, this.bsAtomMinMax);
this.voxelSource=Clazz.array(Integer.TYPE, [this.volumeData.nPoints]);
}return true;
});

Clazz.newMeth(C$, 'setup$Z', function (isMapData) {
this.setup2$();
if (this.contactPair == null ) {
this.cavityRadius=this.params.cavityRadius;
this.envelopeRadius=this.params.envelopeRadius;
this.sr=this.params.solventRadius;
this.point=this.params.point;
this.isCavity=(this.params.isCavity && this.meshDataServer != null  );
this.isPocket=(this.params.pocket != null  && this.meshDataServer != null  );
this.doCalculateTroughs=(!isMapData && this.sg.atomDataServer != null   && !this.isCavity  && this.sr > 0   && (this.dataType == 1195 || this.dataType == 1203 ) );
this.doUseIterator=this.doCalculateTroughs;
this.getAtoms$javajs_util_BS$Z$Z$Z$Z$Z$Z$F$javajs_util_M4(this.params.bsSelected, this.doAddHydrogens, true, false, false, true, false, NaN, null);
if (this.isCavity || this.isPocket ) this.dots=this.meshDataServer.calculateGeodesicSurface$javajs_util_BS$F(this.bsMySelected, this.envelopeRadius);
this.setHeader$S$S("solvent/molecular surface", this.params.calculationType);
if (this.havePlane || !isMapData ) {
var minPtsPerAng=0;
this.setRanges$F$I$F(this.params.solvent_ptsPerAngstrom, this.params.solvent_gridMax, minPtsPerAng);
this.volumeData.getYzCount$();
this.margin=this.volumeData.maxGrid * 2.0;
}if (this.bsNearby != null ) this.bsMySelected.or$javajs_util_BS(this.bsNearby);
} else if (!isMapData) {
this.setVolumeData$();
}if (!this.doCalculateTroughs) {
if (isMapData) {
this.precalculateVoxelData=false;
this.volumeData.sr=this;
} else if (!this.isCavity) {
this.isProgressive=this.isXLowToHigh=true;
}}if (this.thisAtomSet == null ) this.thisAtomSet=$I$(5).setAll$I(this.myAtomCount);
});

Clazz.newMeth(C$, 'generateCube$', function () {
if (this.isCavity && this.params.theProperty != null  ) return;
if (this.isCavity && this.dataType != 1207  && this.dataType != 1208 ) {
this.params.vertexSource=null;
this.newVoxelDataCube$();
this.resetVoxelData$F(3.4028235E38);
this.markSphereVoxels$F$F(this.cavityRadius, this.params.distance);
p$1.generateSolventCavity.apply(this, []);
this.resetVoxelData$F(3.4028235E38);
this.markSphereVoxels$F$F(0, NaN);
} else {
this.voxelSource=Clazz.array(Integer.TYPE, [this.volumeData.nPoints]);
p$1.generateSolventCube.apply(this, []);
}this.unsetVoxelData$();
var info=this.params.slabInfo;
if (info != null ) for (var i=0; i < info.size$(); i++) if ((info.get$I(i)[2]).booleanValue$() && Clazz.instanceOf(info.get$I(i)[0], "javajs.util.P4") ) {
this.volumeData.capData$javajs_util_P4$F(info.get$I(i)[0], this.params.cutoff);
info.removeItemAt$I(i--);
}
});

Clazz.newMeth(C$, 'getSurfacePointAndFraction$F$Z$F$F$javajs_util_T3$javajs_util_V3$I$I$I$I$I$FA$javajs_util_T3', function (cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA0, vB0, fReturn, ptReturn) {
var vA=this.marchingCubes.getLinearOffset$I$I$I$I(x, y, z, vA0);
var vB=this.marchingCubes.getLinearOffset$I$I$I$I(x, y, z, vB0);
this.isSurfacePoint=(this.bsSurfaceVoxels != null  && (this.bsSurfaceVoxels.get$I(vA) || this.bsSurfaceVoxels.get$I(vB) ) );
if (this.voxelSource != null ) {
var vs=Math.abs(Float.isNaN$F(valueB) || valueA < valueB   ? this.voxelSource[vA] : this.voxelSource[vB]);
if (vs > 0) this.iAtomSurface=this.atomIndex[vs - 1];
}if (C$.testLinear || this.voxelSource == null   || this.voxelSource[vA] == 0  || this.voxelSource[vA] != this.voxelSource[vB] ) return this.getSPF$F$Z$F$F$javajs_util_T3$javajs_util_V3$I$I$I$I$I$FA$javajs_util_T3(cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, ptReturn);
var fraction=fReturn[0]=$I$(6,"getSphericalInterpolationFraction$D$D$D$D",[(this.voxelSource[vA] < 0 ? this.sr : this.atomRadius[this.voxelSource[vA] - 1]), valueA, valueB, edgeVector.length$()]);
ptReturn.scaleAdd2$F$javajs_util_T3$javajs_util_T3(fraction, edgeVector, pointA);
var diff=valueB - valueA;
return valueA + fraction * diff;
});

Clazz.newMeth(C$, 'addVertexCopy$javajs_util_T3$F$I$Z', function (vertexXYZ, value, assocVertex, asCopy) {
var i=this.addVC$javajs_util_T3$F$I$Z(vertexXYZ, value, assocVertex, asCopy);
if (i < 0) return i;
if (this.isSurfacePoint) this.bsSurfacePoints.set$I(i);
if (this.params.vertexSource != null ) this.params.vertexSource[i]=this.iAtomSurface;
return i;
});

Clazz.newMeth(C$, 'selectPocket$Z', function (doExclude) {
if (this.meshDataServer != null ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 1, null);
var v=this.meshData.vs;
var nVertices=this.meshData.vc;
var vv=this.meshData.vvs;
var nDots=this.dots.length;
for (var i=0; i < nVertices; i++) {
for (var j=0; j < nDots; j++) {
if (this.dots[j].distance$javajs_util_T3(v[i]) < this.envelopeRadius ) {
vv[i]=NaN;
continue;
}}
}
this.meshData.getSurfaceSet$();
var nSets=this.meshData.nSets;
var pocketSet=$I$(4).newN$I(nSets);
var ss;
for (var i=0; i < nSets; i++) if ((ss=this.meshData.surfaceSet[i]) != null ) for (var j=ss.nextSetBit$I(0); j >= 0; j=ss.nextSetBit$I(j + 1)) if (Float.isNaN$F(this.meshData.vvs[j])) {
pocketSet.set$I(i);
break;
}

for (var i=0; i < nSets; i++) if (this.meshData.surfaceSet[i] != null  && pocketSet.get$I(i) == doExclude  ) this.meshData.invalidateSurfaceSet$I(i);

this.updateSurfaceData$();
if (!doExclude) this.meshData.surfaceSet=null;
if (this.meshDataServer != null ) {
this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 3, null);
this.meshData=Clazz.new_($I$(7,1));
}});

Clazz.newMeth(C$, 'postProcessVertices$', function () {
this.setVertexSource$();
if (this.doCalculateTroughs && this.bsSurfacePoints != null  ) {
var bsAll=Clazz.new_($I$(4,1));
var bsSurfaces=this.meshData.getSurfaceSet$();
var bsSources=null;
var volumes=(this.isPocket ? null : $I$(7).calculateVolumeOrArea$org_jmol_jvxl_data_MeshData$I$Z$Z(this.meshData, -2147483648, false, false));
var minVolume=(this.isCavity ? (1.5 * 3.141592653589793 * Math.pow(this.sr, 3) ) : 0);
var maxVolume=0;
var maxIsNegative=false;
if (volumes != null  && !this.isCavity ) for (var i=0; i < this.meshData.nSets; i++) {
var v=volumes[i];
if (Math.abs(v) > maxVolume ) {
maxVolume=Math.abs(v);
maxIsNegative=(v < 0 );
}}
var factor=(maxIsNegative ? -1 : 1);
for (var i=0; i < this.meshData.nSets; i++) {
var bss=bsSurfaces[i];
if (bss.intersects$javajs_util_BS(this.bsSurfacePoints)) {
if (volumes == null  || volumes[i] * factor > minVolume  ) if (this.params.vertexSource != null ) {
var bs=Clazz.new_($I$(4,1));
if (bsSources == null ) bsSources=Clazz.array($I$(4), [bsSurfaces.length]);
for (var j=bss.nextSetBit$I(0); j >= 0; j=bss.nextSetBit$I(j + 1)) {
var iatom=this.params.vertexSource[j];
if (iatom < 0) continue;
if (bsAll.get$I(iatom)) {
this.meshData.invalidateSurfaceSet$I(i);
break;
}bs.set$I(iatom);
}
bsAll.or$javajs_util_BS(bs);
continue;
}}this.meshData.invalidateSurfaceSet$I(i);
}
this.updateSurfaceData$();
if (this.meshDataServer != null ) {
this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 3, null);
this.meshData=Clazz.new_($I$(7,1));
}}if (this.params.thePlane != null  && this.params.slabInfo == null  ) this.params.addSlabInfo$OA($I$(8).getSlabWithinRange$F$F(-100, 0));
});

Clazz.newMeth(C$, 'generateSolventCavity', function () {
var bs=$I$(4).newN$I(this.nPointsX * this.nPointsY * this.nPointsZ );
var i=0;
var nDots=this.dots.length;
var n=0;
var d;
var r2=this.envelopeRadius;
for (var x=0; x < this.nPointsX; ++x) for (var y=0; y < this.nPointsY; ++y) {
 out : for (var z=0; z < this.nPointsZ; ++z, ++i) if ((d=this.voxelData[x][y][z]) < 3.4028235E38  && d >= this.cavityRadius  ) {
this.volumeData.voxelPtToXYZ$I$I$I$javajs_util_T3(x, y, z, this.ptV);
for (var j=0; j < nDots; j++) {
if (this.dots[j].distance$javajs_util_T3(this.ptV) < r2 ) continue out;
}
bs.set$I(i);
n++;
}
}

$I$(9).info$S("cavities include " + n + " voxel points" );
this.atomRadius=Clazz.array(Float.TYPE, [n]);
this.atomXyzTruncated=Clazz.array($I$(2), [n]);
for (var x=0, ipt=0, apt=0; x < this.nPointsX; ++x) for (var y=0; y < this.nPointsY; ++y) for (var z=0; z < this.nPointsZ; ++z) if (bs.get$I(ipt++)) {
this.volumeData.voxelPtToXYZ$I$I$I$javajs_util_T3(x, y, z, (this.atomXyzTruncated[apt]=Clazz.new_($I$(2,1))));
this.atomRadius[apt++]=this.voxelData[x][y][z];
}


this.myAtomCount=this.firstNearbyAtom=n;
this.thisAtomSet=$I$(5).setAll$I(this.myAtomCount);
this.rs=null;
this.setRadii$();
}, p$1);

Clazz.newMeth(C$, 'generateSolventCube', function () {
if (this.dataType == 1207) return;
this.params.vertexSource=Clazz.array(Integer.TYPE, [this.volumeData.nPoints]);
this.bsSurfaceDone=Clazz.new_($I$(4,1));
this.bsSurfaceVoxels=Clazz.new_($I$(4,1));
this.bsSurfacePoints=Clazz.new_($I$(4,1));
if (this.doCalculateTroughs) {
this.iter=this.sg.atomDataServer.getSelectedAtomIterator$javajs_util_BS$Z$Z$Z(this.bsMySelected, true, false, false);
this.vEdges=Clazz.new_($I$(10,1));
this.bsLocale=Clazz.array($I$(4), [this.myAtomCount]);
this.htEdges=Clazz.new_($I$(11,1));
p$1.getEdges.apply(this, []);
$I$(9,"info$S",[this.vEdges.size$() + " edges"]);
this.vFaces=Clazz.new_($I$(10,1));
p$1.getFaces.apply(this, []);
$I$(9,"info$S",[this.vFaces.size$() + " faces"]);
this.bsLocale=null;
this.htEdges=null;
this.iter.release$();
this.iter=null;
this.newVoxelDataCube$();
this.resetVoxelData$F(3.4028235E38);
p$1.markFaceVoxels$Z.apply(this, [true]);
p$1.markToroidVoxels.apply(this, []);
this.validSpheres.or$javajs_util_BS(this.noFaceSpheres);
this.vEdges=null;
p$1.markFaceVoxels$Z.apply(this, [false]);
this.vFaces=null;
} else {
this.newVoxelDataCube$();
this.resetVoxelData$F(3.4028235E38);
}this.markSphereVoxels$F$F(0, this.doCalculateTroughs ? 3.4028235E38 : this.params.distance);
this.noFaceSpheres=null;
this.validSpheres=null;
}, p$1);

Clazz.newMeth(C$, 'getEdges', function () {
for (var iatomA=0; iatomA < this.myAtomCount; iatomA++) this.bsLocale[iatomA]=Clazz.new_($I$(4,1));

for (var iatomA=0; iatomA < this.myAtomCount; iatomA++) {
var ptA=this.atomXyzTruncated[iatomA];
var rA=this.rs[iatomA];
this.sg.atomDataServer.setIteratorForAtom$org_jmol_api_AtomIndexIterator$I$F(this.iter, this.atomIndex[iatomA], rA + this.maxRS);
while (this.iter.hasNext$()){
var iB=this.iter.next$();
var iatomB=this.myIndex[iB];
if (iatomA >= this.firstNearbyAtom && iatomB >= this.firstNearbyAtom ) continue;
var ptB=this.atomXyzTruncated[iatomB];
var rB=this.rs[iatomB];
var dAB=ptA.distance$javajs_util_T3(ptB);
if (dAB >= rA + rB ) continue;
var edge=Clazz.new_($I$(12,1).c$$org_jmol_jvxl_readers_IsoSolventReader$I$I$F,[this, null, this, iatomA, iatomB, dAB]);
this.vEdges.addLast$O(edge);
this.bsLocale[iatomA].set$I(iatomB);
this.bsLocale[iatomB].set$I(iatomA);
this.htEdges.put$O$O(edge.toString(), edge);
}
}
}, p$1);

Clazz.newMeth(C$, 'findEdge$I$I', function (i, j) {
return this.htEdges.get$O(i < j ? i + "_" + j  : j + "_" + i );
});

Clazz.newMeth(C$, 'getFaces', function () {
var bs=Clazz.new_($I$(4,1));
this.params.surfaceAtoms=this.validSpheres=Clazz.new_($I$(4,1));
this.noFaceSpheres=$I$(5).setAll$I(this.myAtomCount);
for (var i=this.vEdges.size$(); --i >= 0; ) {
var edge=this.vEdges.get$I(i);
var ia=edge.ia;
var ib=edge.ib;
bs.clearAll$();
bs.or$javajs_util_BS(this.bsLocale[ia]);
bs.and$javajs_util_BS(this.bsLocale[ib]);
for (var ic=bs.nextSetBit$I(ib + 1); ic >= 0; ic=bs.nextSetBit$I(ic + 1)) {
if (p$1.getSolventPoints$org_jmol_jvxl_readers_IsoSolventReader_Edge$I$I$I.apply(this, [edge, ia, ib, ic])) {
var f;
var isOK=false;
if ((f=p$1.validateFace$I$I$I$org_jmol_jvxl_readers_IsoSolventReader_Edge$javajs_util_P3.apply(this, [ia, ib, ic, edge, this.ptS1])) != null ) {
this.vFaces.addLast$O(f);
isOK=true;
}if ((f=p$1.validateFace$I$I$I$org_jmol_jvxl_readers_IsoSolventReader_Edge$javajs_util_P3.apply(this, [ia, ib, ic, edge, this.ptS2])) != null ) {
this.vFaces.addLast$O(f);
isOK=true;
}if (isOK) {
this.noFaceSpheres.clear$I(ia);
this.noFaceSpheres.clear$I(ib);
this.noFaceSpheres.clear$I(ic);
}}}
}
}, p$1);

Clazz.newMeth(C$, 'validateFace$I$I$I$org_jmol_jvxl_readers_IsoSolventReader_Edge$javajs_util_P3', function (ia, ib, ic, edge, ptS) {
this.sg.atomDataServer.setIteratorForPoint$org_jmol_api_AtomIndexIterator$I$javajs_util_T3$F(this.iter, this.modelIndex, ptS, this.maxRS);
var isValid=true;
while (this.iter.hasNext$()){
var iia=this.iter.next$();
var iatom=this.myIndex[iia];
if (iatom == ia || iatom == ib  || iatom == ic ) continue;
var d=this.atomData.atoms[iia].distance$javajs_util_T3(ptS);
if (d < this.atomData.atomRadius[iia] + this.sr ) {
isValid=false;
break;
}}
var bc=this.findEdge$I$I(ib, ic);
var ca=this.findEdge$I$I(ia, ic);
var f=(isValid ? Clazz.new_($I$(13,1).c$$I$I$I$javajs_util_P3,[this, null, ia, ib, ic, ptS]) : null);
edge.addFace$org_jmol_jvxl_readers_IsoSolventReader_Face(f);
bc.addFace$org_jmol_jvxl_readers_IsoSolventReader_Face(f);
ca.addFace$org_jmol_jvxl_readers_IsoSolventReader_Face(f);
if (!isValid) return null;
this.validSpheres.set$I(ia);
this.validSpheres.set$I(ib);
this.validSpheres.set$I(ic);
return f;
}, p$1);

Clazz.newMeth(C$, 'markFaceVoxels$Z', function (firstPass) {
var bsThisPass=Clazz.new_($I$(4,1));
var v0=this.volumetricVectors[0];
var v1=this.volumetricVectors[1];
var v2=this.volumetricVectors[2];
for (var fi=this.vFaces.size$(); --fi >= 0; ) {
var f=this.vFaces.get$I(fi);
var ptA=this.atomXyzTruncated[f.ia];
var ptB=this.atomXyzTruncated[f.ib];
var ptC=this.atomXyzTruncated[f.ic];
var ptS=f.pS;
this.setGridLimitsForAtom$javajs_util_P3$F$javajs_util_P3i$javajs_util_P3i(ptS, this.sr, this.pt0, this.pt1);
this.volumeData.voxelPtToXYZ$I$I$I$javajs_util_T3(this.pt0.x, this.pt0.y, this.pt0.z, this.ptV);
for (var i=this.pt0.x; i < this.pt1.x; i++, this.ptV.add2$javajs_util_T3$javajs_util_T3(v0, this.ptY0)) {
this.ptY0.setT$javajs_util_T3(this.ptV);
for (var j=this.pt0.y; j < this.pt1.y; j++, this.ptV.add2$javajs_util_T3$javajs_util_T3(v1, this.ptZ0)) {
this.ptZ0.setT$javajs_util_T3(this.ptV);
for (var k=this.pt0.z; k < this.pt1.z; k++, this.ptV.add$javajs_util_T3(v2)) {
var value=this.sr - this.ptV.distance$javajs_util_T3(ptS);
var v=this.voxelData[i][j][k];
var ipt=this.volumeData.getPointIndex$I$I$I(i, j, k);
if (firstPass && value > 0  ) this.bsSurfaceDone.set$I(ipt);
if ($I$(14).isInTetrahedron$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P4$javajs_util_V3$javajs_util_V3$Z(this.ptV, ptA, ptB, ptC, ptS, this.plane, this.vTemp, this.vTemp2, false)) {
if (!firstPass ? !this.bsSurfaceDone.get$I(ipt) && value < 0   && value > -this.volumeData.maxGrid * 1.8   && (value > v ) == bsThisPass.get$I(ipt)   : (value > 0  && (v < 0  || v == 3.4028235E38   || (value > v ) == bsThisPass.get$I(ipt)  ) )) {
bsThisPass.set$I(ipt);
this.setVoxel$I$I$I$I$F(i, j, k, ipt, value);
if (this.voxelSource != null ) this.voxelSource[ipt]=-1 - f.ia;
if (value > 0 ) {
this.bsSurfaceVoxels.set$I(ipt);
}}}}
}
}
}
}, p$1);

Clazz.newMeth(C$, 'markToroidVoxels', function () {
var v0=this.volumetricVectors[0];
var v1=this.volumetricVectors[1];
var v2=this.volumetricVectors[2];
for (var ei=this.vEdges.size$(); --ei >= 0; ) {
var edge=this.vEdges.get$I(ei);
if (!edge.isValid$()) continue;
var ia=edge.ia;
var ib=edge.ib;
var ptA=this.atomXyzTruncated[ia];
var ptB=this.atomXyzTruncated[ib];
this.rAS=this.rs[ia];
this.rBS=this.rs[ib];
this.rAS2=this.rs2[ia];
this.rBS2=this.rs2[ib];
this.dAB=edge.d;
this.dAB2=edge.d2;
this.ecosASB2=edge.cosASB2;
this.setGridLimitsForAtom$javajs_util_P3$F$javajs_util_P3i$javajs_util_P3i(edge, edge.maxr, this.pt0, this.pt1);
this.volumeData.voxelPtToXYZ$I$I$I$javajs_util_T3(this.pt0.x, this.pt0.y, this.pt0.z, this.ptV);
for (var i=this.pt0.x; i < this.pt1.x; i++, this.ptV.add2$javajs_util_T3$javajs_util_T3(v0, this.ptY0)) {
this.ptY0.setT$javajs_util_T3(this.ptV);
for (var j=this.pt0.y; j < this.pt1.y; j++, this.ptV.add2$javajs_util_T3$javajs_util_T3(v1, this.ptZ0)) {
this.ptZ0.setT$javajs_util_T3(this.ptV);
for (var k=this.pt0.z; k < this.pt1.z; k++, this.ptV.add$javajs_util_T3(v2)) {
var dVS=p$1.checkSpecialVoxel$javajs_util_P3$javajs_util_P3$javajs_util_P3.apply(this, [ptA, ptB, this.ptV]);
if (Float.isNaN$F(dVS)) continue;
var value=this.sr - dVS;
if (value < this.voxelData[i][j][k] ) {
var ipt=this.volumeData.getPointIndex$I$I$I(i, j, k);
this.setVoxel$I$I$I$I$F(i, j, k, ipt, value);
if (this.voxelSource != null ) this.voxelSource[ipt]=-1 - ia;
}}
}
}
}
}, p$1);

Clazz.newMeth(C$, 'unsetVoxelData$', function () {
if (!this.havePlane) {
this.unsetVoxelData2$();
return;
}if (this.isProgressive) for (var i=0; i < this.yzCount; i++) {
if (this.thisPlane[i] < 0.001 ) {
} else {
this.thisPlane[i]=0.001;
}}
 else for (var x=0; x < this.nPointsX; ++x) for (var y=0; y < this.nPointsY; ++y) for (var z=0; z < this.nPointsZ; ++z) if (this.voxelData[x][y][z] < 0.001 ) {
} else {
this.voxelData[x][y][z]=0.001;
}


});

Clazz.newMeth(C$, 'getSolventPoints$org_jmol_jvxl_readers_IsoSolventReader_Edge$I$I$I', function (edge, ia, ib, ic) {
var rAS=this.rs[ia];
var v=edge.v;
var cosAngleBAS=(edge.d2 + this.rs2[ia] - this.rs2[ib]) / (2 * edge.d * rAS );
var angleBAS=Math.acos(cosAngleBAS);
this.p.scaleAdd2$F$javajs_util_T3$javajs_util_T3(cosAngleBAS * rAS, v, this.atomXyzTruncated[ia]);
$I$(14).getPlaneThroughPoint$javajs_util_T3$javajs_util_V3$javajs_util_P4(this.p, v, this.plane);
var dPS=(Math.sin(angleBAS) * rAS);
var ptC=this.atomXyzTruncated[ic];
var rCS=this.rs[ic];
var dCT=$I$(14).distanceToPlane$javajs_util_P4$javajs_util_T3(this.plane, ptC);
if (Math.abs(dCT) >= rCS * 0.9 ) return false;
this.ptTemp.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-dCT, v, ptC);
var dpT=this.p.distance$javajs_util_T3(this.ptTemp);
var dsp2=dPS * dPS;
var dST2=this.rs2[ic] - dCT * dCT;
var cosTheta=(dsp2 + dpT * dpT - dST2) / (2 * dPS * dpT );
if (Math.abs(cosTheta) >= 0.99 ) return false;
var vXS=this.vTemp2;
vXS.sub2$javajs_util_T3$javajs_util_T3(this.ptTemp, this.p);
vXS.normalize$();
this.ptTemp.scaleAdd2$F$javajs_util_T3$javajs_util_T3(dPS * cosTheta, vXS, this.p);
vXS.cross$javajs_util_T3$javajs_util_T3(v, vXS);
vXS.normalize$();
vXS.scale$F((Math.sqrt(1 - cosTheta * cosTheta) * dPS));
this.ptS1.add2$javajs_util_T3$javajs_util_T3(this.ptTemp, vXS);
this.ptS2.sub2$javajs_util_T3$javajs_util_T3(this.ptTemp, vXS);
return true;
}, p$1);

Clazz.newMeth(C$, 'checkSpecialVoxel$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (ptA, ptB, ptV) {
var dAV=ptA.distance$javajs_util_T3(ptV);
var dAV2=ptA.distanceSquared$javajs_util_T3(ptV);
var f=this.rAS / dAV;
if (f > 1 ) {
this.p.set$F$F$F(ptA.x + (ptV.x - ptA.x) * f, ptA.y + (ptV.y - ptA.y) * f, ptA.z + (ptV.z - ptA.z) * f);
return (ptB.distanceSquared$javajs_util_T3(this.p) >= this.rBS2  ? NaN : p$1.solventDistance$F$F$F$F$F$F.apply(this, [this.rAS, this.rAS2, this.rBS2, dAV, dAV2, ptB.distanceSquared$javajs_util_T3(ptV)]));
}var dBV=ptB.distance$javajs_util_T3(ptV);
if ((f=this.rBS / dBV) > 1 ) {
this.p.set$F$F$F(ptB.x + (ptV.x - ptB.x) * f, ptB.y + (ptV.y - ptB.y) * f, ptB.z + (ptV.z - ptB.z) * f);
return (ptA.distanceSquared$javajs_util_T3(this.p) >= this.rAS2  ? NaN : p$1.solventDistance$F$F$F$F$F$F.apply(this, [this.rBS, this.rBS2, this.rAS2, dBV, dBV * dBV, dAV2]));
}return NaN;
}, p$1);

Clazz.newMeth(C$, 'solventDistance$F$F$F$F$F$F', function (rAS, rAS2, rBS2, dAV, dAV2, dBV2) {
var angleVAB=Math.acos((dAV2 + this.dAB2 - dBV2) / (2 * dAV * this.dAB ));
var angleSAB=Math.acos((rAS2 + this.dAB2 - rBS2) / (2 * rAS * this.dAB ));
var dVS2=(rAS2 + dAV2 - 2 * rAS * dAV * Math.cos(angleSAB - angleVAB) );
var dVS=Math.sqrt(dVS2);
return (this.ecosASB2 < (rAS2 + dVS2 - dAV * dAV) / (dVS * rAS)  ? dVS : NaN);
}, p$1);

Clazz.newMeth(C$, 'dumpLine$javajs_util_P3$javajs_util_T3$S$S', function (pt1, pt2, label, color) {
this.sg.log$S("draw ID \"x" + label + (this.nTest++) + "\" " + $I$(2).newP$javajs_util_T3(pt1) + " " + $I$(2).newP$javajs_util_T3(pt2) + " color " + color );
});

Clazz.newMeth(C$, 'dumpLine2$javajs_util_P3$javajs_util_P3$S$F$S$S', function (pt1, pt2, label, d, color1, color2) {
var pt=Clazz.new_($I$(1,1));
pt.setT$javajs_util_T3(pt2);
pt.sub$javajs_util_T3(pt1);
pt.normalize$();
pt.scale$F(d);
pt.add$javajs_util_T3(pt1);
this.sg.log$S("draw ID \"" + label + (this.nTest++) + "\" " + $I$(2).newP$javajs_util_T3(pt1) + " " + $I$(2).newP$javajs_util_T3(pt) + " color " + color1 );
this.sg.log$S("draw ID \"" + label + (this.nTest++) + "\"" + $I$(2).newP$javajs_util_T3(pt) + " " + $I$(2).newP$javajs_util_T3(pt2) + " color " + color2 + "\"" + label + "\"" );
});

Clazz.newMeth(C$, 'dumpPoint$javajs_util_P3$S$S', function (pt, label, color) {
this.sg.log$S("draw ID \"" + label + (this.nTest++) + "\"" + $I$(2).newP$javajs_util_T3(pt) + " color " + color );
});

Clazz.newMeth(C$, 'getValueAtPoint$javajs_util_T3$Z', function (pt, getSource) {
if (this.contactPair != null ) return pt.distance$javajs_util_T3(this.contactPair.myAtoms[1]) - this.contactPair.radii[1];
var value=3.4028235E38;
for (var iAtom=0; iAtom < this.firstNearbyAtom; iAtom++) {
var r=pt.distance$javajs_util_T3(this.atomXyzTruncated[iAtom]) - this.rs[iAtom];
if (r < value ) value=r;
}
return (value == 3.4028235E38  ? NaN : value);
});

Clazz.newMeth(C$, 'discardTempData$Z', function (discardAll) {
this.rs=null;
this.rs2=null;
this.discardTempDataSR$Z(discardAll);
});

Clazz.newMeth(C$, 'getPlane$I', function (x) {
if (this.yzCount == 0) {
this.initPlanes$();
}this.thisX=x;
this.thisPlane=this.yzPlanes[x % 2];
if (this.contactPair == null ) {
this.resetPlane$F(3.4028235E38);
this.thisAtomSet=this.bsAtomMinMax[x];
this.markSphereVoxels$F$F(0, this.params.distance);
this.unsetVoxelData$();
} else {
this.markPlaneVoxels$javajs_util_P3$F(this.contactPair.myAtoms[0], this.contactPair.radii[0]);
}return this.thisPlane;
});

C$.$static$=function(){C$.$static$=0;
C$.testLinear=false;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.IsoSolventReader, "Edge", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javajs.util.P3');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['d','d2','maxr','cosASB2'],'I',['ia','ib','nFaces','nInvalid'],'O',['v','javajs.util.V3']]]

Clazz.newMeth(C$, 'c$$org_jmol_jvxl_readers_IsoSolventReader$I$I$F', function (r, ia, ib, d) {
Clazz.super_(C$, this);
this.ia=Math.min(ia, ib);
this.ib=Math.max(ia, ib);
this.d=d;
this.d2=d * d;
this.maxr=Math.sqrt(this.d2 / 4 + Math.max(r.rs2[ia], r.rs2[ib]));
this.ave$javajs_util_T3$javajs_util_T3(r.atomXyzTruncated[ia], r.atomXyzTruncated[ib]);
this.cosASB2=(r.rs2[ia] + r.rs2[ib] - this.d2) / (r.rs[ib] * r.rs[ia]);
this.v=$I$(1).newVsub$javajs_util_T3$javajs_util_T3(r.atomXyzTruncated[ib], r.atomXyzTruncated[ia]);
this.v.normalize$();
}, 1);

Clazz.newMeth(C$, 'addFace$org_jmol_jvxl_readers_IsoSolventReader_Face', function (f) {
this.nFaces++;
if (f == null ) {
this.nInvalid++;
return;
}});

Clazz.newMeth(C$, 'isValid$', function () {
return (this.nFaces == 0 || this.nInvalid != this.nFaces );
});

Clazz.newMeth(C$, 'toString', function () {
return this.ia + "_" + this.ib ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.IsoSolventReader, "Face", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['ia','ib','ic'],'O',['pS','javajs.util.P3']]]

Clazz.newMeth(C$, 'c$$I$I$I$javajs_util_P3', function (ia, ib, ic, pS) {
;C$.$init$.apply(this);
this.ia=ia;
this.ib=ib;
this.ic=ic;
this.pS=$I$(2).newP$javajs_util_T3(pS);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.ia + "_" + this.ib + "_" + this.ic + "_" + this.pS ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:35 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
