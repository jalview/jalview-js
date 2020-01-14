(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'org.jmol.util.Logger','javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PyMOLMeshReader", null, 'org.jmol.jvxl.readers.MapFileReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.data=null;
this.voxelList=null;
this.surfaceName=null;
this.pymolType=0;
this.isMesh=false;
this.pt=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, brNull) {
this.init2MFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, null);
this.allowSigma=true;
this.nSurfaces=1;
var map=sg.getReaderData$();
this.data=map.get$O(this.params.calculationType);
if (this.data == null ) return;
this.pymolType=(p$1.getFloat$javajs_util_Lst$I.apply(this, [C$.getList$javajs_util_Lst$I(this.data, 0), 0])|0);
this.isMesh=(this.pymolType == 3);
this.surfaceName=this.data.get$I(this.data.size$() - 1);
$I$(1).info$S("PyMOLMeshReader for " + this.params.calculationType + " pymolType=" + this.pymolType + "; isMesh=" + this.isMesh + " surfaceName=" + this.surfaceName );
this.data=C$.getList$javajs_util_Lst$I(C$.getList$javajs_util_Lst$I(this.data, 2), 0);
if (this.isMesh && this.params.thePlane == null   && this.params.cutoffAutomatic ) {
this.params.cutoff=p$1.getFloat$javajs_util_Lst$I.apply(this, [this.data, 8]);
this.params.cutoffAutomatic=false;
}if (this.isMesh) this.data=C$.getList$javajs_util_Lst$I(C$.getList$javajs_util_Lst$I(map.get$O(this.surfaceName), 2), 0);
this.voxelList=C$.getList$javajs_util_Lst$I(C$.getList$javajs_util_Lst$I(C$.getList$javajs_util_Lst$I(this.data, 14), 2), 6);
$I$(1).info$S("PyMOLMeshReader: Number of grid points = " + this.voxelList.size$());
});

Clazz.newMeth(C$, 'getList$javajs_util_Lst$I', function (list, i) {
return list.get$I(i);
}, 1);

Clazz.newMeth(C$, 'readParameters$', function () {
var t;
this.jvxlFileHeaderBuffer=Clazz.new_($I$(2));
this.jvxlFileHeaderBuffer.append$S("PyMOL surface reader\n");
this.jvxlFileHeaderBuffer.append$S(this.surfaceName + " (" + this.params.calculationType + ")\n" );
var s=C$.getList$javajs_util_Lst$I(this.data, 1);
t=C$.getList$javajs_util_Lst$I(s, 0);
var haveUnitCell=false;
if (t != null ) {
if (t.size$() < 3) t=C$.getList$javajs_util_Lst$I(s=C$.getList$javajs_util_Lst$I(s, 0), 0);
this.a=p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 0]);
haveUnitCell=(this.a != 1 );
if (haveUnitCell) {
this.b=p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 1]);
this.c=p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 2]);
t=C$.getList$javajs_util_Lst$I(s, 1);
this.alpha=p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 0]);
this.beta=p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 1]);
this.gamma=p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 2]);
}}t=C$.getList$javajs_util_Lst$I(this.data, 7);
this.origin.set$F$F$F(p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 0]), p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 1]), p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 2]));
t=C$.getList$javajs_util_Lst$I(this.data, 10);
this.na=(p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 0])|0);
this.nb=(p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 1])|0);
this.nc=(p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 2])|0);
t=C$.getList$javajs_util_Lst$I(this.data, 11);
this.xyzStart[0]=p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 0]);
this.xyzStart[1]=p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 1]);
this.xyzStart[2]=p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 2]);
t=C$.getList$javajs_util_Lst$I(this.data, 13);
this.n2=(p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 0])|0);
this.n1=(p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 1])|0);
this.n0=(p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 2])|0);
if (!haveUnitCell) {
this.na=this.n2 - 1;
this.nb=this.n1 - 1;
this.nc=this.n0 - 1;
t=C$.getList$javajs_util_Lst$I(this.data, 8);
this.a=p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 0]) - this.origin.x;
this.b=p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 1]) - this.origin.y;
this.c=p$1.getFloat$javajs_util_Lst$I.apply(this, [t, 2]) - this.origin.z;
this.alpha=this.beta=this.gamma=90;
}this.mapc=3;
this.mapr=2;
this.maps=1;
this.getVectorsAndOrigin$();
this.setCutoffAutomatic$();
});

Clazz.newMeth(C$, 'nextVoxel$', function () {
return p$1.getFloat$javajs_util_Lst$I.apply(this, [this.voxelList, this.pt++]);
});

Clazz.newMeth(C$, 'getFloat$javajs_util_Lst$I', function (list, i) {
return (list.get$I(i)).floatValue$();
}, p$1);

Clazz.newMeth(C$, 'skipData$I', function (nPoints) {
});

Clazz.newMeth(C$, 'setCutoffAutomatic$', function () {
if (this.params.thePlane != null ) return;
if (Float.isNaN$F(this.params.sigma)) {
if (!this.params.cutoffAutomatic) return;
this.params.cutoff=(this.boundingBox == null  ? 3.0 : 1.6);
if (this.dmin != 3.4028235E38 ) {
if (this.params.cutoff > this.dmax ) this.params.cutoff=this.dmax / 4;
}} else {
this.params.cutoff=p$1.calculateCutoff.apply(this, []);
}$I$(1).info$S("MapReader: setting cutoff to default value of " + new Float(this.params.cutoff).toString() + (this.boundingBox == null  ? " (no BOUNDBOX parameter)\n" : "\n") );
});

Clazz.newMeth(C$, 'calculateCutoff', function () {
var n=this.voxelList.size$();
var sum=0;
var sum2=0;
for (var i=0; i < n; i++) {
var v=p$1.getFloat$javajs_util_Lst$I.apply(this, [this.voxelList, i]);
sum += v;
sum2 += v * v;
}
var mean=sum / n;
var rmsd=Math.sqrt(sum2 / n);
$I$(1).info$S("PyMOLMeshReader rmsd=" + new Float(rmsd).toString() + " mean=" + new Float(mean).toString() );
return this.params.sigma * rmsd + mean;
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
