(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'javajs.util.SB','org.jmol.util.Logger','org.jmol.viewer.Viewer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "XplorReader", null, 'org.jmol.jvxl.readers.MapFileReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nBlock=0;
this.linePt=0;
this.nRead=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.linePt=2147483647;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2MFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
if (this.params.thePlane == null ) this.params.insideOut=!this.params.insideOut;
this.nSurfaces=1;
});

Clazz.newMeth(C$, 'readParameters$', function () {
this.jvxlFileHeaderBuffer=Clazz.new_($I$(1));
var nLines=this.parseIntStr$S(p$1.getLine.apply(this, []));
for (var i=nLines; --i >= 0; ) {
this.line=this.br.readLine$().trim$();
$I$(2).info$S("XplorReader: " + this.line);
this.jvxlFileHeaderBuffer.append$S("# ").append$S(this.line).appendC$C("\n");
}
this.jvxlFileHeaderBuffer.append$S("Xplor data\nJmol " + $I$(3).getJmolVersion$() + '\n' );
this.na=this.parseIntStr$S(p$1.getLine.apply(this, []));
this.xyzStart[0]=this.parseInt$();
this.n0=((this.parseInt$() - this.xyzStart[0] + 1)|0);
this.nb=this.parseInt$();
this.xyzStart[1]=this.parseInt$();
this.n1=((this.parseInt$() - this.xyzStart[1] + 1)|0);
this.nc=this.parseInt$();
this.xyzStart[2]=this.parseInt$();
this.n2=((this.parseInt$() - this.xyzStart[2] + 1)|0);
this.a=this.parseFloatStr$S(p$1.getLine.apply(this, []));
this.b=this.parseFloat$();
this.c=this.parseFloat$();
this.alpha=this.parseFloat$();
this.beta=this.parseFloat$();
this.gamma=this.parseFloat$();
p$1.getLine.apply(this, []);
this.maps=3;
this.mapr=2;
this.mapc=1;
this.getVectorsAndOrigin$();
this.setCutoffAutomatic$();
this.nBlock=this.voxelCounts[2] * this.voxelCounts[1];
});

Clazz.newMeth(C$, 'getLine', function () {
this.rd$();
while (this.line != null  && (this.line.length$() == 0 || this.line.indexOf$S("REMARKS") >= 0  || this.line.indexOf$S("XPLOR:") >= 0 ) )this.rd$();

return this.line;
}, p$1);

Clazz.newMeth(C$, 'nextVoxel$', function () {
if (this.linePt >= this.line.length$()) {
this.rd$();
this.linePt=0;
if ((this.nRead % this.nBlock) == 0) {
this.rd$();
}}if (this.line == null ) return 0;
var val=this.parseFloatRange$S$I$I(this.line, this.linePt, this.linePt + 12);
this.linePt+=12;
this.nRead++;
return val;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
