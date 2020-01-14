(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'javajs.util.SB','javajs.util.PT','org.jmol.jvxl.readers.VolumeFileReader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ApbsReader", null, 'org.jmol.jvxl.readers.VolumeFileReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2VFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
if (this.params.thePlane == null ) this.params.insideOut=!this.params.insideOut;
this.isAngstroms=true;
this.nSurfaces=1;
});

Clazz.newMeth(C$, 'readParameters$', function () {
this.jvxlFileHeaderBuffer=$I$(1).newS$S(this.skipComments$Z(false));
while (this.line != null  && this.line.length$() == 0 )this.rd$();

this.jvxlFileHeaderBuffer.append$S("APBS OpenDx DATA ").append$S(this.line).append$S("\n");
this.jvxlFileHeaderBuffer.append$S("see http://apbs.sourceforge.net\n");
var atomLine=this.rd$();
var tokens=$I$(2).getTokens$S(atomLine);
if (tokens.length >= 4) {
this.volumetricOrigin.set$F$F$F(this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]), this.parseFloatStr$S(tokens[3]));
}$I$(3).checkAtomLine$Z$Z$S$S$javajs_util_SB(this.isXLowToHigh, this.isAngstroms, tokens[0], atomLine, this.jvxlFileHeaderBuffer);
this.readVoxelVector$I(0);
this.readVoxelVector$I(1);
this.readVoxelVector$I(2);
this.rd$();
tokens=this.getTokens$();
for (var i=0; i < 3; i++) this.voxelCounts[i]=this.parseIntStr$S(tokens[i + 5]);

this.rd$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
