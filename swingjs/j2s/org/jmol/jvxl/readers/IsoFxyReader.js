(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'javajs.util.SB','org.jmol.jvxl.data.JvxlCoder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IsoFxyReader", null, 'org.jmol.jvxl.readers.AtomDataReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.values=Clazz.array(Float.TYPE, [3]);
},1);

C$.$fields$=[['Z',['isPlanarMapping'],'O',['data','float[][]','func','Object[]','values','float[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initIFR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
});

Clazz.newMeth(C$, 'initIFR$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initADR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
this.isXLowToHigh=true;
this.precalculateVoxelData=false;
this.params.fullyLit=true;
this.isPlanarMapping=(this.params.thePlane != null  || this.params.state == 3 );
if (this.params.func != null ) this.volumeData.sr=this;
});

Clazz.newMeth(C$, 'setup$Z', function (isMapData) {
if (this.params.functionInfo.size$() > 5) this.data=this.params.functionInfo.get$I(5);
this.setupType$S("functionXY");
});

Clazz.newMeth(C$, 'setupType$S', function (type) {
this.func=this.params.func;
var functionName=this.params.functionInfo.get$I(0);
this.jvxlFileHeaderBuffer=Clazz.new_($I$(1,1));
this.jvxlFileHeaderBuffer.append$S(type).append$S("\n").append$S(functionName).append$S("\n");
if (this.params.thePlane != null  || this.data == null  && !this.useOriginStepsPoints  ) this.setVolumeForPlane$();
 else if (this.data == null ) this.setVolumeDataParams$();
 else this.setVolumeData$();
$I$(2).jvxlCreateHeaderWithoutTitleOrAtoms$org_jmol_jvxl_data_VolumeData$javajs_util_SB(this.volumeData, this.jvxlFileHeaderBuffer);
});

Clazz.newMeth(C$, 'setVolumeData$', function () {
if (this.data == null ) {
this.setVolumeDataADR$();
return;
}this.volumetricOrigin.setT$javajs_util_T3(this.params.functionInfo.get$I(1));
for (var i=0; i < 3; i++) {
var info=this.params.functionInfo.get$I(i + 2);
this.voxelCounts[i]=Math.abs((info.x|0));
this.volumetricVectors[i].set$F$F$F(info.y, info.z, info.w);
}
if (this.isAnisotropic) this.setVolumetricAnisotropy$();
});

Clazz.newMeth(C$, 'readSurfaceData$Z', function (isMapData) {
if (this.volumeData.sr != null ) return;
this.readSurfaceDataVDR$Z(isMapData);
});

Clazz.newMeth(C$, 'getPlane$I', function (x) {
var plane=this.getPlaneSR$I(x);
p$1.setPlane$I$FA.apply(this, [x, plane]);
return plane;
});

Clazz.newMeth(C$, 'setPlane$I$FA', function (x, plane) {
for (var y=0, ptyz=0; y < this.nPointsY; ++y) for (var z=0; z < this.nPointsZ; ++z) plane[ptyz++]=this.getValue$I$I$I(x, y, z);


}, p$1);

Clazz.newMeth(C$, 'getValue$I$I$I', function (x, y, z) {
var value;
if (this.data == null ) {
value=this.evaluateValue$I$I$I(x, y, z);
} else {
this.volumeData.voxelPtToXYZ$I$I$I$javajs_util_T3(x, y, z, this.ptTemp);
value=this.data[x][y];
}return (this.isPlanarMapping ? value : value - this.ptTemp.z);
});

Clazz.newMeth(C$, 'getValueAtPoint$javajs_util_T3$Z', function (pt, getSource) {
if (this.params.func == null ) return 0;
this.values[0]=pt.x;
this.values[1]=pt.y;
this.values[2]=pt.z;
return this.sg.atomDataServer.evalFunctionFloat$O$O$FA(this.func[0], this.func[1], this.values);
});

Clazz.newMeth(C$, 'evaluateValue$I$I$I', function (x, y, z) {
this.volumeData.voxelPtToXYZ$I$I$I$javajs_util_T3(x, y, z, this.ptTemp);
return this.getValueAtPoint$javajs_util_T3$Z(this.ptTemp, false);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
