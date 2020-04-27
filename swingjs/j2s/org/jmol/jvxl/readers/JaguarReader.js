(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'javajs.util.SB','javajs.util.PT','org.jmol.jvxl.readers.VolumeFileReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JaguarReader", null, 'org.jmol.jvxl.readers.VolumeFileReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.extents=Clazz.array(Float.TYPE, [3]);
},1);

C$.$fields$=[['O',['extents','float[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2VFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.nSurfaces=1;
});

Clazz.newMeth(C$, 'readParameters$', function () {
this.jvxlFileHeaderBuffer=Clazz.new_($I$(1,1));
this.jvxlFileHeaderBuffer.append$S("Jaguar data\n");
this.jvxlFileHeaderBuffer.append$S("\n");
var atomLine;
while ((atomLine=this.rd$()) != null  && atomLine.indexOf$S("origin=") < 0 ){
}
var tokens=$I$(2).getTokensAt$S$I(atomLine, 0);
if (tokens.length == 4 && tokens[0].equals$O("origin=") ) {
this.volumetricOrigin.set$F$F$F(this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]), this.parseFloatStr$S(tokens[3]));
$I$(3).checkAtomLine$Z$Z$S$S$javajs_util_SB(this.isXLowToHigh, this.isAngstroms, "0", "0 " + tokens[1] + " " + tokens[2] + " " + tokens[3] , this.jvxlFileHeaderBuffer);
if (!this.isAngstroms) this.volumetricOrigin.scale$F(0.5291772);
}p$1.readExtents$I.apply(this, [0]);
p$1.readExtents$I.apply(this, [1]);
p$1.readExtents$I.apply(this, [2]);
tokens=(function(a,f){return f.apply(null,a)})([this.rd$()],$I$(2).getTokens$S);
this.voxelCounts[0]=this.parseIntStr$S(tokens[1]);
this.voxelCounts[1]=this.parseIntStr$S(tokens[2]);
this.voxelCounts[2]=this.parseIntStr$S(tokens[3]);
var factor=(this.isAngstroms ? 1 : 0.5291772);
var d=this.extents[0] / (this.voxelCounts[0] - 1);
this.volumetricVectors[0].set$F$F$F(d * factor, 0, 0);
this.jvxlFileHeaderBuffer.append$S(this.voxelCounts[0] + " " + new Float(d).toString() + " 0.0 0.0\n" );
d=this.extents[1] / (this.voxelCounts[1] - 1);
this.volumetricVectors[1].set$F$F$F(0, d * factor, 0);
this.jvxlFileHeaderBuffer.append$S(this.voxelCounts[1] + " 0.0 " + new Float(d).toString() + " 0.0\n" );
d=this.extents[2] / (this.voxelCounts[2] - 1);
this.volumetricVectors[2].set$F$F$F(0, 0, d * factor);
this.jvxlFileHeaderBuffer.append$S(this.voxelCounts[2] + " 0.0 0.0 " + new Float(d).toString() + "\n" );
this.rd$();
});

Clazz.newMeth(C$, 'readExtents$I', function (voxelVectorIndex) {
var tokens=(function(a,f){return f.apply(null,a)})([this.rd$()],$I$(2).getTokens$S);
this.extents[voxelVectorIndex]=this.parseFloatStr$S(tokens[voxelVectorIndex + 1]);
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
