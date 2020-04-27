(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'java.io.DataInputStream','javajs.util.Rdr','org.jmol.util.Logger','javajs.util.SB']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Dsn6BinaryReader", null, 'org.jmol.jvxl.readers.MapFileReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['byteFactor'],'I',['xyCount','nBrickX','nBrickY','brickLayerVoxelCount','brickLayerByteCount','brickRowByteCount','pt'],'O',['brickLayer','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, brNull) {
this.init2MFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, this.br);
this.binarydoc=this.newBinaryDocument$();
var o2=sg.getReaderData$();
var fileName=o2[0];
var data=o2[1];
if (data == null ) this.binarydoc.setStream$java_io_BufferedInputStream$Z(sg.atomDataServer.getBufferedInputStream$S(fileName), true);
 else this.binarydoc.setStreamData$java_io_DataInputStream$Z(Clazz.new_([(function(a,f){return f.apply(null,a)})([data.getBytes$()],$I$(2).getBIS$BA)],$I$(1,1).c$$java_io_InputStream), true);
if (this.params.thePlane == null ) this.params.insideOut=!this.params.insideOut;
this.nSurfaces=1;
});

Clazz.newMeth(C$, 'readParameters$', function () {
var header=Clazz.array(Short.TYPE, [19]);
for (var i=0; i < 19; i++) header[i]=this.binarydoc.readShort$();

if (header[18] != 100) {
this.binarydoc.setStream$java_io_BufferedInputStream$Z(null, false);
for (var i=0; i < 19; i++) header[i]=this.binarydoc.swapBytesS$H(header[i]);

}this.xyzStart[0]=header[0];
this.xyzStart[1]=header[1];
this.xyzStart[2]=header[2];
this.n0=header[3];
this.n1=header[4];
this.n2=header[5];
this.na=header[6];
this.nb=header[7];
this.nc=header[8];
this.a=header[9];
this.b=header[10];
this.c=header[11];
this.alpha=header[12];
this.beta=header[13];
this.gamma=header[14];
var header16=header[15];
var header17=header[16];
var scalingFactor=header[17];
var header19=header[18];
this.maps=3;
this.mapr=2;
this.mapc=1;
this.dmin=(0 - header17) * header19 / header16;
this.dmax=(255 - header17) * header19 / header16;
this.drange=this.dmax - this.dmin;
this.byteFactor=this.drange / 255;
var dminError1=(0 - header17 - 0.5 ) * header19 / (header16 - 0.5);
var dminError2=(0 - header17 + 0.5) * header19 / (header16 + 0.5);
var dmaxError1=(255 - header17 - 0.5 ) * header19 / (header16 - 0.5);
var dmaxError2=(255 - header17 + 0.5) * header19 / (header16 + 0.5);
var dminError=Math.round((dminError2 - dminError1) / 0.002) * 0.001;
var dmaxError=Math.round((dmaxError2 - dmaxError1) / 0.002) * 0.001;
(function(a,f){return f.apply(null,a)})(["DNS6 dmin,dmax = " + new Float(this.dmin).toString() + "+/-" + new Float(dminError).toString() + "," + new Float(this.dmax).toString() + "+/-" + new Float(dmaxError).toString() ],$I$(3).info$S);
this.a /= scalingFactor;
this.b /= scalingFactor;
this.c /= scalingFactor;
this.alpha /= scalingFactor;
this.beta /= scalingFactor;
this.gamma /= scalingFactor;
this.binarydoc.seek$J(512);
this.getVectorsAndOrigin$();
this.setCutoffAutomatic$();
this.xyCount=this.n0 * this.n1;
this.brickLayerVoxelCount=this.xyCount * 8;
this.nBrickX=((this.n0 + 7)/8|0);
this.nBrickY=((this.n1 + 7)/8|0);
this.brickRowByteCount=this.nBrickX * 512;
this.brickLayerByteCount=this.brickRowByteCount * this.nBrickY;
this.brickLayer=Clazz.array(Byte.TYPE, [this.brickLayerByteCount]);
this.jvxlFileHeaderBuffer=Clazz.new_($I$(4,1));
this.jvxlFileHeaderBuffer.append$S("DNS6/O progressive brick data reader\n");
this.jvxlFileHeaderBuffer.append$S("see http://www.uoxray.uoregon.edu/tnt/manual/node104.html\n");
});

Clazz.newMeth(C$, 'readBrickLayer', function () {
this.binarydoc.readByteArray$BA$I$I(this.brickLayer, 0, this.brickLayerByteCount);
this.pt=0;
this.nBytes=this.binarydoc.getPosition$();
}, p$1);

Clazz.newMeth(C$, 'getBrickValue$I', function (pt) {
var x=pt % this.n0;
var y=((pt/this.n0|0)) % this.n1;
var z=(pt/this.xyCount|0);
var brickX=x % 8;
var brickY=y % 8;
var brickZ=z % 8;
var bX=(x/8|0);
var bY=(y/8|0);
var bPt=bY * 512 * this.nBrickX  + bX * 512 + brickZ * 64 + brickY * 8 + brickX;
if (bPt % 2 == 0) bPt++;
 else bPt--;
var value=(this.brickLayer[bPt] + 256) % 256;
return this.dmin + value * this.byteFactor;
}, p$1);

Clazz.newMeth(C$, 'nextVoxel$', function () {
if ((this.pt % this.brickLayerVoxelCount) == 0) p$1.readBrickLayer.apply(this, []);
return p$1.getBrickValue$I.apply(this, [this.pt++]);
});

Clazz.newMeth(C$, 'skipData$I', function (nPoints) {
for (var i=0; i < nPoints; i++) this.binarydoc.readByte$();

});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:09 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
