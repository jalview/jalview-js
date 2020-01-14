(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'javajs.util.BS']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IsoIntersectAtomReader", null, 'org.jmol.jvxl.readers.AtomDataReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.myBsA=null;
this.myBsB=null;
this.bsAtomMinMax=null;
this.func=null;
this.funcType=0;
this.thisPlaneB=null;
this.values=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.myBsA=Clazz.new_($I$(1));
this.myBsB=Clazz.new_($I$(1));
this.bsAtomMinMax=Clazz.array($I$(1), [2, null]);
this.funcType=0;
this.values=Clazz.array(Float.TYPE, [2]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'init$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initADR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
});

Clazz.newMeth(C$, 'readVolumeParameters$Z', function (isMapData) {
this.setup$Z(isMapData);
if (isMapData) return false;
this.initializeVolumetricData$();
this.volumeData.setUnitVectors$();
this.thisPlaneB=Clazz.array(Float.TYPE, [this.volumeData.getYzCount$()]);
this.voxelSource=Clazz.array(Integer.TYPE, [this.volumeData.nPoints]);
this.vl0=this.volumeData.volumetricVectorLengths[0];
this.vl1=this.volumeData.volumetricVectorLengths[1];
this.vl2=this.volumeData.volumetricVectorLengths[2];
this.getAtomMinMax$javajs_util_BS$javajs_util_BSA(this.myBsA, this.bsAtomMinMax[0]=Clazz.array($I$(1), [this.nPointsX]));
this.getAtomMinMax$javajs_util_BS$javajs_util_BSA(this.myBsB, this.bsAtomMinMax[1]=Clazz.array($I$(1), [this.nPointsX]));
return true;
});

Clazz.newMeth(C$, 'setup$Z', function (isMapData) {
this.setup2$();
this.params.fullyLit=true;
this.point=this.params.point;
if (Clazz.instanceOf(this.params.func, "java.lang.String")) {
this.funcType=(this.params.func.equals$O("a-b") ? 2 : this.params.func.equals$O("a+b") ? 1 : 3);
} else if (this.params.func == null  || this.sg.atomDataServer == null  ) {
this.funcType=2;
} else {
this.func=this.params.func;
}if (this.contactPair == null ) {
var bsA=this.params.intersection[0];
var bsB=this.params.intersection[1];
var bsSelected=Clazz.new_($I$(1));
bsSelected.or$javajs_util_BS(bsA);
bsSelected.or$javajs_util_BS(bsB);
this.doUseIterator=true;
this.getAtoms$javajs_util_BS$Z$Z$Z$Z$Z$Z$F$javajs_util_M4(bsSelected, this.doAddHydrogens, true, true, false, false, false, NaN, null);
for (var i=bsA.nextSetBit$I(0); i >= 0; i=bsA.nextSetBit$I(i + 1)) this.myBsA.set$I(this.myIndex[i]);

for (var i=bsB.nextSetBit$I(0); i >= 0; i=bsB.nextSetBit$I(i + 1)) this.myBsB.set$I(this.myIndex[i]);

this.setHeader$S$S("VDW intersection surface", this.params.calculationType);
this.setRanges$F$I$F(this.params.solvent_ptsPerAngstrom, this.params.solvent_gridMax, 0);
this.margin=5.0;
} else {
this.setVolumeData$();
}this.isProgressive=this.isXLowToHigh=true;
});

Clazz.newMeth(C$, 'getPlane$I', function (x) {
if (this.yzCount == 0) {
this.initPlanes$();
}this.thisX=x;
this.thisPlane=this.yzPlanes[x % 2];
if (this.contactPair == null ) {
this.thisAtomSet=this.bsAtomMinMax[0][x];
this.resetPlane$F(3.4028235E38);
this.markSphereVoxels$F$F(0, this.params.distance);
this.thisPlane=this.thisPlaneB;
this.thisAtomSet=this.bsAtomMinMax[1][x];
this.resetPlane$F(3.4028235E38);
this.markSphereVoxels$F$F(0, this.params.distance);
} else {
this.markPlaneVoxels$javajs_util_P3$F(this.contactPair.myAtoms[0], this.contactPair.radii[0]);
this.thisPlane=this.thisPlaneB;
this.markPlaneVoxels$javajs_util_P3$F(this.contactPair.myAtoms[1], this.contactPair.radii[1]);
}this.thisPlane=this.yzPlanes[x % 2];
if (!p$1.setVoxels.apply(this, [])) this.resetPlane$F(0);
if (this.contactPair == null ) this.unsetVoxelData$();
return this.thisPlane;
});

Clazz.newMeth(C$, 'setVoxels', function () {
for (var i=0; i < this.yzCount; i++) {
var va=this.thisPlane[i];
var vb=this.thisPlaneB[i];
var v=p$1.getValueAB$F$F.apply(this, [va, vb]);
if (Float.isNaN$F(v)) return false;
this.thisPlane[i]=v;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'getValueAB$F$F', function (va, vb) {
if (va == 3.4028235E38  || vb == 3.4028235E38   || Float.isNaN$F(va)  || Float.isNaN$F(vb) ) return 3.4028235E38;
switch (this.funcType) {
case 1:
return (va + vb);
case 2:
case 4:
return (va - vb);
case 3:
return (va > vb  ? va : vb);
default:
this.values[0]=va;
this.values[1]=vb;
return this.sg.atomDataServer.evalFunctionFloat$O$O$FA(this.func[0], this.func[1], this.values);
}
}, p$1);

Clazz.newMeth(C$, 'getValueAtPoint$javajs_util_T3$Z', function (pt, getSource) {
return p$1.getValueAB$F$F.apply(this, [p$1.getValueAtPoint2$javajs_util_T3$javajs_util_BS.apply(this, [pt, this.myBsA]), p$1.getValueAtPoint2$javajs_util_T3$javajs_util_BS.apply(this, [pt, this.myBsB])]);
});

Clazz.newMeth(C$, 'getValueAtPoint2$javajs_util_T3$javajs_util_BS', function (pt, bs) {
var value=3.4028235E38;
for (var iAtom=bs.nextSetBit$I(0); iAtom >= 0; iAtom=bs.nextSetBit$I(iAtom + 1)) {
var r=pt.distance$javajs_util_T3(this.atomXyzTruncated[iAtom]) - this.atomRadius[iAtom];
if (r < value ) value=r;
}
return (value == 3.4028235E38  ? NaN : value);
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
