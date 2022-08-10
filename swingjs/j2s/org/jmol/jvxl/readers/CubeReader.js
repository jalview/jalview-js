(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'javajs.util.SB','javajs.util.PT','org.jmol.jvxl.readers.VolumeFileReader','org.jmol.util.Logger']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CubeReader", null, 'org.jmol.jvxl.readers.VolumeFileReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2VFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
});

Clazz.newMeth(C$, 'readParameters$', function () {
this.jvxlFileHeaderBuffer=Clazz.new_($I$(1,1));
this.jvxlFileHeaderBuffer.append$S(this.rd$()).appendC$C("\n");
this.jvxlFileHeaderBuffer.append$S(this.rd$()).appendC$C("\n");
var atomLine=this.rd$();
var tokens=$I$(2).getTokensAt$S$I(atomLine, 0);
this.ac=this.parseIntStr$S(tokens[0]);
this.negativeAtomCount=(this.ac < 0);
if (this.negativeAtomCount) this.ac=-this.ac;
this.volumetricOrigin.set$F$F$F(this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]), this.parseFloatStr$S(tokens[3]));
$I$(3).checkAtomLine$Z$Z$S$S$javajs_util_SB(this.isXLowToHigh, this.isAngstroms, tokens[0], atomLine, this.jvxlFileHeaderBuffer);
if (!this.isAngstroms) this.volumetricOrigin.scale$F(0.5291772);
for (var i=0; i < 3; ++i) this.readVoxelVector$I(i);

for (var i=0; i < this.ac; ++i) this.jvxlFileHeaderBuffer.append$S(this.rd$() + "\n");

if (!this.negativeAtomCount) {
this.nSurfaces=1;
} else {
this.rd$();
$I$(4).info$S("Reading extra CUBE information line: " + this.line);
this.nSurfaces=this.parseIntStr$S(this.line);
}});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:35 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
