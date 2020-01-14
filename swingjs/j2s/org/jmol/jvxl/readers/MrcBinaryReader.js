(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'org.jmol.util.Logger','javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MrcBinaryReader", null, 'org.jmol.jvxl.readers.MapFileReader');
C$.b8=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.b8=Clazz.array(Byte.TYPE, [8]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.labels=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
var fileName=(sg.getReaderData$())[0];
this.init2MFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.binarydoc=this.newBinaryDocument$();
this.setStream$S$Z(fileName, true);
this.nSurfaces=1;
if (this.params.thePlane == null ) this.params.insideOut=!this.params.insideOut;
this.allowSigma=true;
});

Clazz.newMeth(C$, 'readParameters$', function () {
var ispg;
var nsymbt;
var extra=Clazz.array(Byte.TYPE, [100]);
var map=Clazz.array(Byte.TYPE, [4]);
var machst=Clazz.array(Byte.TYPE, [4]);
var rmsDeviation;
var nlabel;
this.n0=this.binarydoc.readInt$();
if (this.n0 < 0 || this.n0 > 256 ) {
this.setStream$S$Z(null, false);
this.n0=this.binarydoc.swapBytesI$I(this.n0);
if (this.n0 < 0 || this.n0 > 1000 ) {
$I$(1).info$S("nx=" + this.n0 + " not displayable as MRC file" );
throw Clazz.new_(Clazz.load('Exception').c$$S,["MRC file type not readable"]);
}$I$(1).info$S("reading little-endian MRC file");
}this.n1=this.binarydoc.readInt$();
this.n2=this.binarydoc.readInt$();
this.mode=this.binarydoc.readInt$();
if (this.mode < 0 || this.mode > 6 ) {
this.setStream$S$Z(null, false);
this.n0=this.binarydoc.swapBytesI$I(this.n0);
this.n1=this.binarydoc.swapBytesI$I(this.n1);
this.n2=this.binarydoc.swapBytesI$I(this.n2);
this.mode=this.binarydoc.swapBytesI$I(this.mode);
}$I$(1).info$S("MRC header: mode: " + this.mode);
$I$(1).info$S("MRC header: nx ny nz: " + this.n0 + " " + this.n1 + " " + this.n2 );
this.xyzStart[0]=this.binarydoc.readInt$();
this.xyzStart[1]=this.binarydoc.readInt$();
this.xyzStart[2]=this.binarydoc.readInt$();
$I$(1).info$S("MRC header: nxyzStart: " + new Float(this.xyzStart[0]).toString() + " " + new Float(this.xyzStart[1]).toString() + " " + new Float(this.xyzStart[2]).toString() );
this.na=this.binarydoc.readInt$();
this.nb=this.binarydoc.readInt$();
this.nc=this.binarydoc.readInt$();
if (this.na == 0) this.na=this.n0 - 1;
if (this.nb == 0) this.nb=this.n1 - 1;
if (this.nc == 0) this.nc=this.n2 - 1;
$I$(1).info$S("MRC header: na nb nc: " + this.na + " " + this.nb + " " + this.nc );
this.a=this.binarydoc.readFloat$();
this.b=this.binarydoc.readFloat$();
this.c=this.binarydoc.readFloat$();
this.alpha=this.binarydoc.readFloat$();
this.beta=this.binarydoc.readFloat$();
this.gamma=this.binarydoc.readFloat$();
if (this.alpha == 0 ) {
this.alpha=this.beta=this.gamma=90;
$I$(1).info$S("MRC header: alpha,beta,gamma 0 changed to 90,90,90");
$I$(1).info$S("MRC header: alpha,beta,gamma 0 reversing insideOut sense");
if (this.params.thePlane == null ) this.params.insideOut=!this.params.insideOut;
}this.mapc=this.binarydoc.readInt$();
this.mapr=this.binarydoc.readInt$();
this.maps=this.binarydoc.readInt$();
if (this.mapc == 2 && this.mapr == 1  && this.params.thePlane == null  ) this.params.insideOut=!this.params.insideOut;
var s="" + this.mapc + this.mapr + this.maps ;
$I$(1).info$S("MRC header: mapc mapr maps: " + s);
if (this.params.thePlane == null  && "21321".indexOf$S(s) >= 1 ) {
$I$(1).info$S("MRC header: data are xy-reversed");
this.params.dataXYReversed=true;
}this.dmin=this.binarydoc.readFloat$();
this.dmax=this.binarydoc.readFloat$();
this.dmean=this.binarydoc.readFloat$();
$I$(1).info$S("MRC header: dmin,dmax,dmean: " + new Float(this.dmin).toString() + "," + new Float(this.dmax).toString() + "," + new Float(this.dmean).toString() );
ispg=this.binarydoc.readInt$();
nsymbt=this.binarydoc.readInt$();
$I$(1).info$S("MRC header: ispg,nsymbt: " + ispg + "," + nsymbt );
this.binarydoc.readByteArray$BA$I$I(extra, 0, extra.length);
this.origin.x=this.binarydoc.readFloat$();
this.origin.y=this.binarydoc.readFloat$();
this.origin.z=this.binarydoc.readFloat$();
$I$(1).info$S("MRC header: origin: " + this.origin);
this.binarydoc.readByteArray$BA$I$I(map, 0, map.length);
this.binarydoc.readByteArray$BA$I$I(machst, 0, machst.length);
rmsDeviation=this.binarydoc.readFloat$();
$I$(1).info$S("MRC header: rms: " + new Float(rmsDeviation).toString());
nlabel=this.binarydoc.readInt$();
$I$(1).info$S("MRC header: labels: " + nlabel);
this.labels=Clazz.array(String, [nlabel]);
if (nlabel > 0) this.labels[0]="Jmol MrcBinaryReader";
for (var i=0; i < 10; i++) {
s=this.binarydoc.readString$I(80).trim$();
if (i < nlabel) {
this.labels[i]=s;
$I$(1).info$S(this.labels[i]);
}}
for (var i=0; i < nsymbt; i+=80) {
var position=this.binarydoc.getPosition$();
s=this.binarydoc.readString$I(80).trim$();
if (s.indexOf$I("\u0000") != s.lastIndexOf$I("\u0000")) {
$I$(1).error$S("File indicates " + nsymbt + " symmetry lines, but " + i + " found!" );
this.binarydoc.seek$J(position);
break;
}$I$(1).info$S("MRC file symmetry information: " + s);
}
$I$(1).info$S("MRC header: bytes read: " + this.binarydoc.getPosition$() + "\n" );
this.getVectorsAndOrigin$();
if (this.params.thePlane == null  && (this.params.cutoffAutomatic || !Float.isNaN$F(this.params.sigma) ) ) {
var sigma=(this.params.sigma < 0  || Float.isNaN$F(this.params.sigma)  ? 1 : this.params.sigma);
this.params.cutoff=rmsDeviation * sigma + this.dmean;
$I$(1).info$S("Cutoff set to (mean + rmsDeviation*" + new Float(sigma).toString() + " = " + new Float(this.params.cutoff).toString() + ")\n" );
}this.jvxlFileHeaderBuffer=Clazz.new_($I$(2));
this.jvxlFileHeaderBuffer.append$S("MRC DATA ").append$S(nlabel > 0 ? this.labels[0] : "").append$S("\n");
this.jvxlFileHeaderBuffer.append$S("see http://ami.scripps.edu/software/mrctools/mrc_specification.php\n");
});

Clazz.newMeth(C$, 'nextVoxel$', function () {
var voxelValue;
switch (this.mode) {
case 0:
voxelValue=this.binarydoc.readByte$();
break;
case 1:
voxelValue=this.binarydoc.readShort$();
break;
default:
case 2:
voxelValue=this.binarydoc.readFloat$();
break;
case 3:
voxelValue=this.binarydoc.readShort$();
this.binarydoc.readShort$();
break;
case 4:
voxelValue=this.binarydoc.readFloat$();
this.binarydoc.readFloat$();
break;
case 6:
voxelValue=this.binarydoc.readUnsignedShort$();
break;
}
this.nBytes=this.binarydoc.getPosition$();
return voxelValue;
});

Clazz.newMeth(C$, 'skipData$I', function (nPoints) {
for (var i=0; i < nPoints; i++) switch (this.mode) {
case 0:
this.binarydoc.readByte$();
break;
case 1:
case 6:
this.binarydoc.readByteArray$BA$I$I(C$.b8, 0, 2);
break;
default:
case 2:
case 3:
this.binarydoc.readByteArray$BA$I$I(C$.b8, 0, 4);
break;
case 4:
this.binarydoc.readByteArray$BA$I$I(C$.b8, 0, 8);
break;
}

});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
