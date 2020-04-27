(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'org.jmol.api.Interface','org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AtomPropertyMapper", null, 'org.jmol.jvxl.readers.AtomDataReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.calcType=0;
},1);

C$.$fields$=[['Z',['doSmoothProperty'],'F',['smoothingPower'],'I',['calcType','iAtomSurface'],'S',['mepType'],'O',['mepCalc','org.jmol.quantum.MepCalculation','iter','org.jmol.api.AtomIndexIterator']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initADR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
this.mepType=sg.getReaderData$();
});

Clazz.newMeth(C$, 'setup$Z', function (isMapData) {
this.setup2$();
this.haveSurfaceAtoms=true;
this.volumeData.sr=this;
this.volumeData.doIterate=false;
this.point=this.params.point;
this.doSmoothProperty=this.params.propertySmoothing;
this.doUseIterator=true;
if (this.doSmoothProperty) {
this.smoothingPower=this.params.propertySmoothingPower;
if (this.smoothingPower < 0 ) this.smoothingPower=0;
 else if (this.smoothingPower > 10 ) this.smoothingPower=10;
if (this.smoothingPower == 0 ) this.doSmoothProperty=false;
this.smoothingPower=(this.smoothingPower - 11) / 2.0;
}this.maxDistance=this.params.propertyDistanceMax;
if (this.mepType != null ) {
this.doSmoothProperty=true;
if (this.params.mep_calcType >= 0) this.calcType=this.params.mep_calcType;
this.mepCalc=$I$(1).getOption$S$org_jmol_viewer_Viewer$S("quantum." + this.mepType + "Calculation" , this.sg.atomDataServer, "file");
}if (!this.doSmoothProperty && this.maxDistance == 2147483647  ) this.maxDistance=5;
this.getAtoms$javajs_util_BS$Z$Z$Z$Z$Z$Z$F$javajs_util_M4(this.params.bsSelected, this.doAddHydrogens, true, false, false, true, false, NaN, null);
if (this.meshDataServer != null ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 1, null);
if (!this.doSmoothProperty && this.meshData.vertexSource != null  ) {
this.hasColorData=true;
for (var i=this.meshData.vc; --i >= 0; ) {
var iAtom=this.meshData.vertexSource[i];
if (iAtom >= 0) {
this.meshData.vvs[i]=this.params.theProperty[iAtom];
} else {
this.hasColorData=false;
break;
}}
}this.setHeader$S$S("property", this.params.calculationType);
this.setRanges$F$I$F(this.params.solvent_ptsPerAngstrom, this.params.solvent_gridMax, 0);
this.params.cutoff=0;
});

Clazz.newMeth(C$, 'setVolumeData$', function () {
if (this.params.thePlane != null ) this.setVolumeDataADR$();
});

Clazz.newMeth(C$, 'initializeMapping$', function () {
if (this.params.showTiming) $I$(2).startTimer$S("property mapping");
if (this.bsNearby != null ) this.bsMySelected.or$javajs_util_BS(this.bsNearby);
this.iter=this.sg.atomDataServer.getSelectedAtomIterator$javajs_util_BS$Z$Z$Z(this.bsMySelected, false, false, false);
});

Clazz.newMeth(C$, 'finalizeMapping$', function () {
this.iter.release$();
this.iter=null;
if (this.params.showTiming) $I$(2).checkTimer$S$Z("property mapping", false);
});

Clazz.newMeth(C$, 'generateCube$', function () {
});

Clazz.newMeth(C$, 'getSurfaceAtomIndex$', function () {
return this.iAtomSurface;
});

Clazz.newMeth(C$, 'getValueAtPoint$javajs_util_T3$Z', function (pt, getSource) {
if (this.haveOneProperty && !getSource ) return this.theProperty;
var dmin=3.4028235E38;
var dminNearby=3.4028235E38;
var value=(this.doSmoothProperty ? 0 : NaN);
var vdiv=0;
this.sg.atomDataServer.setIteratorForPoint$org_jmol_api_AtomIndexIterator$I$javajs_util_T3$F(this.iter, this.modelIndex, pt, this.maxDistance);
this.iAtomSurface=-1;
while (this.iter.hasNext$()){
var ia=this.iter.next$();
var myAtom=this.myIndex[ia];
var isNearby=(myAtom >= this.firstNearbyAtom);
var ptA=this.atomXyzTruncated[myAtom];
var p=this.atomProp[myAtom];
if (Float.isNaN$F(p)) continue;
var d2=pt.distanceSquared$javajs_util_T3(ptA);
if (isNearby) {
if (d2 < dminNearby ) {
dminNearby=d2;
if (!this.doSmoothProperty && dminNearby < dmin  ) {
dmin=d2;
value=NaN;
}}} else if (d2 < dmin ) {
dmin=d2;
this.iAtomSurface=ia;
if (!this.doSmoothProperty) value=p;
}if (this.mepCalc != null ) {
value += this.mepCalc.valueFor$F$F$I(p, d2, this.calcType);
} else if (this.doSmoothProperty) {
d2=Math.pow(d2, this.smoothingPower);
vdiv += d2;
value += d2 * p;
}}
return (this.mepCalc != null  ? value : this.doSmoothProperty ? (vdiv == 0  || dminNearby < dmin   ? NaN : value / vdiv) : value);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:09 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
