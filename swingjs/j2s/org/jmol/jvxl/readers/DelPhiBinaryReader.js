(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'org.jmol.util.Logger','javajs.util.V3','javajs.util.SB']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DelPhiBinaryReader", null, 'org.jmol.jvxl.readers.VolumeFileReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pt'],'O',['data','float[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
var fileName=(sg.getReaderData$())[0];
this.init2VFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.binarydoc=this.newBinaryDocument$();
this.setStream$S$Z(fileName, false);
this.nSurfaces=1;
if (this.params.thePlane == null ) this.params.insideOut=!this.params.insideOut;
this.allowSigma=false;
this.isAngstroms=true;
});

Clazz.newMeth(C$, 'readParameters$', function () {
var uplbl=p$1.readString.apply(this, []);
$I$(1).info$S(uplbl);
var nxttoplbl=p$1.readString.apply(this, []);
$I$(1).info$S(nxttoplbl);
this.data=p$1.readFloatArray.apply(this, []);
$I$(1).info$S("DelPhi data length: " + this.data.length);
var botlbl=p$1.readString.apply(this, []);
$I$(1).info$S(botlbl);
var scalemid=p$1.readFloatArray.apply(this, []);
var scale=scalemid[0];
$I$(1,"info$S",["DelPhi scale: " + new Float(scale).toString()]);
var dx=(scale == 1  ? 0.84375 : 1 / scale);
this.volumetricVectors[0]=$I$(2).new3$F$F$F(0, 0, dx);
this.volumetricVectors[1]=$I$(2).new3$F$F$F(0, dx, 0);
this.volumetricVectors[2]=$I$(2).new3$F$F$F(dx, 0, 0);
$I$(1,"info$S",["DelPhi resolution (pts/angstrom) set to: " + new Float(dx).toString()]);
var nx=65;
this.voxelCounts[0]=this.voxelCounts[1]=this.voxelCounts[2]=nx;
$I$(1).info$S("DelPhi voxel counts: " + nx);
dx *= ((nx - 1)/2|0);
this.volumetricOrigin.set$F$F$F(scalemid[1], scalemid[2], scalemid[3]);
$I$(1).info$S("DelPhi center " + this.volumetricOrigin);
this.volumetricOrigin.x -= dx;
this.volumetricOrigin.y -= dx;
this.volumetricOrigin.z -= dx;
this.jvxlFileHeaderBuffer=Clazz.new_($I$(3,1));
this.jvxlFileHeaderBuffer.append$S("DelPhi DATA ").append$S(nxttoplbl.replace$C$C("\n", " ").trim$()).append$S("\n\n");
});

Clazz.newMeth(C$, 'readString', function () {
var n=this.binarydoc.readInt$();
var buf=Clazz.array(Byte.TYPE, [n]);
this.binarydoc.readByteArray$BA$I$I(buf, 0, n);
this.binarydoc.readInt$();
return  String.instantialize(buf);
}, p$1);

Clazz.newMeth(C$, 'readFloatArray', function () {
var n=this.binarydoc.readInt$() >> 2;
var a=Clazz.array(Float.TYPE, [n]);
for (var i=0; i < n; i++) a[i]=this.binarydoc.readFloat$();

this.binarydoc.readInt$();
return a;
}, p$1);

Clazz.newMeth(C$, 'nextVoxel$', function () {
this.nBytes+=4;
return this.data[this.pt++];
});

Clazz.newMeth(C$, 'skipData$I', function (nPoints) {
this.pt+=nPoints;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:35 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
