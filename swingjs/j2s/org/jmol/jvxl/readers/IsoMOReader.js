(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'org.jmol.api.Interface','javajs.util.AU','javajs.util.P3','java.util.Random','javajs.util.PT','org.jmol.quantum.QS','javajs.util.V3','javajs.util.Measure','org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IsoMOReader", null, 'org.jmol.jvxl.readers.AtomDataReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vDist=Clazz.array(Float.TYPE, [3]);
},1);

C$.$fields$=[['Z',['isNci','isElectronDensityCalc','qSetupDone'],'O',['random','java.util.Random','points','javajs.util.P3[]','vTemp','javajs.util.V3','q','org.jmol.quantum.QuantumCalculation','mos','javajs.util.Lst','coef','float[]','dfCoefMaps','int[][]','linearCombination','float[]','coefs','float[][]','mo','java.util.Map','vDist','float[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initADR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
this.isNci=(this.params.qmOrbitalType == 3);
if (this.isNci) {
this.isXLowToHigh=this.hasColorData=true;
this.precalculateVoxelData=false;
this.params.insideOut=!this.params.insideOut;
}});

Clazz.newMeth(C$, 'setup$Z', function (isMapData) {
this.mos=this.params.moData.get$O("mos");
this.linearCombination=this.params.qm_moLinearCombination;
this.mo=(this.mos != null  && this.linearCombination == null   ? this.mos.get$I(this.params.qm_moNumber - 1) : null);
var haveVolumeData=this.params.moData.containsKey$O("haveVolumeData");
if (haveVolumeData && this.mo != null  ) this.params.volumeData=this.mo.get$O("volumeData");
this.setup2$();
this.doAddHydrogens=false;
this.getAtoms$javajs_util_BS$Z$Z$Z$Z$Z$Z$F$javajs_util_M4(this.params.bsSelected, this.doAddHydrogens, !this.isNci, this.isNci, this.isNci, false, false, this.params.qm_marginAngstroms, (this.isNci ? null : this.params.modelInvRotation));
var className;
if (this.isNci) {
className="quantum.NciCalculation";
this.setHeader$S$S("NCI (promolecular)", "see NCIPLOT: A Program for Plotting Noncovalent Interaction Regions, Julia Contreras-Garcia, et al., J. of Chemical Theory and Computation, 2011, 7, 625-632");
} else {
className="quantum.MOCalculation";
this.setHeader$S$S("MO", "calculation type: " + this.params.moData.get$O("calculationType"));
}this.setRanges$F$I$F(this.params.qm_ptsPerAngstrom, this.params.qm_gridMax, 0);
if (haveVolumeData) {
for (var i=this.params.title.length; --i >= 0; ) p$1.fixTitleLine$I$java_util_Map.apply(this, [i, this.mo]);

} else {
this.q=$I$(1).getOption$S$org_jmol_viewer_Viewer$S(className, this.sg.atomDataServer, "file");
if (this.isNci) {
this.qpc=this.q;
} else {
if (this.linearCombination == null ) {
for (var i=this.params.title.length; --i >= 0; ) p$1.fixTitleLine$I$java_util_Map.apply(this, [i, this.mo]);

this.coef=this.mo.get$O("coefficients");
this.dfCoefMaps=this.mo.get$O("dfCoefMaps");
} else {
this.coefs=(function(a,f){return f.apply(null,a)})([this.mos.size$()],$I$(2).newFloat2$I);
for (var i=1; i < this.linearCombination.length; i+=2) {
var j=(this.linearCombination[i]|0);
if (j > this.mos.size$() || j < 1 ) return;
this.coefs[j - 1]=this.mos.get$I(j - 1).get$O("coefficients");
}
for (var i=this.params.title.length; --i >= 0; ) p$1.fixTitleLine$I$java_util_Map.apply(this, [i, null]);

}}this.isElectronDensityCalc=(this.coef == null  && this.linearCombination == null   && !this.isNci );
}this.volumeData.sr=null;
if (isMapData && !this.isElectronDensityCalc && !haveVolumeData  ) {
this.volumeData.doIterate=false;
this.volumeData.setVoxelDataAsArray$FAAA(this.voxelData=Clazz.array(Float.TYPE, [1, 1, 1]));
this.volumeData.sr=this;
this.points=Clazz.array($I$(3), [1]);
this.points[0]=Clazz.new_($I$(3,1));
if (!p$1.setupCalculation.apply(this, [])) this.q=null;
} else if (this.params.psi_monteCarloCount > 0) {
this.vertexDataOnly=true;
this.random=Clazz.new_($I$(4,1).c$$J,[this.params.randomSeed]);
}});

Clazz.newMeth(C$, 'readVolumeParameters$Z', function (isMapData) {
this.setup$Z(isMapData);
if (this.volumeData.sr == null ) this.initializeVolumetricData$();
return true;
});

Clazz.newMeth(C$, 'fixTitleLine$I$java_util_Map', function (iLine, mo) {
if (this.params.title == null ) return;
var line=this.params.title[iLine];
if (line.indexOf$S(" MO ") >= 0) {
var nboType=this.params.moData.get$O("nboType");
if (nboType != null ) line=$I$(5).rep$S$S$S(line, " MO ", " " + nboType + " " );
}if (line.indexOf$S("%M") >= 0) line=this.params.title[iLine]=$I$(5).formatStringS$S$S$S(line, "M", this.atomData.modelName);
if (line.indexOf$S("%F") >= 0) line=this.params.title[iLine]=(function(a,f){return f.apply(null,a)})([line, "F", $I$(5).rep$S$S$S(this.params.fileName, "DROP_", "")],$I$(5).formatStringS$S$S$S);
var pt=line.indexOf$S("%");
if (line.length$() == 0 || pt < 0 ) return;
var rep=0;
if (line.indexOf$S("%I") >= 0) line=(function(a,f){return f.apply(null,a)})([line, "I", this.params.qm_moLinearCombination == null  ? "" + this.params.qm_moNumber : $I$(6).getMOString$FA(this.params.qm_moLinearCombination)],$I$(5).formatStringS$S$S$S);
if (line.indexOf$S("%N") >= 0) line=$I$(5).formatStringS$S$S$S(line, "N", "" + this.params.qmOrbitalCount);
var energy=null;
if (mo == null ) {
for (var i=0; i < this.linearCombination.length; i+=2) if (this.linearCombination[i] != 0 ) {
mo=this.mos.get$I((this.linearCombination[i + 1]|0) - 1);
var e=mo.get$O("energy");
if (energy == null ) {
if (e == null ) break;
energy=e;
} else if (!energy.equals$O(e)) {
energy=null;
break;
}}
} else {
if (mo.containsKey$O("energy")) energy=mo.get$O("energy");
}if (line.indexOf$S("%E") >= 0) {
line=(function(a,f){return f.apply(null,a)})([line, "E", energy != null  && ++rep != 0  ? "" + energy.toString() : ""],$I$(5).formatStringS$S$S$S);
} else if (energy != null ) {
var s=(function(a,f){return f.apply(null,a)})([line, "E", energy.floatValue$()],$I$(5).formatStringF$S$S$F);
if (s != line) {
line=s;
rep++;
}}if (line.indexOf$S("%U") >= 0) line=(function(a,f){return f.apply(null,a)})([line, "U", energy != null  && this.params.moData.containsKey$O("energyUnits")  && ++rep != 0  ? this.params.moData.get$O("energyUnits") : ""],$I$(5).formatStringS$S$S$S);
if (line.indexOf$S("%L") >= 0) {
var labels=this.params.moData.get$O("nboLabels");
line=(function(a,f){return f.apply(null,a)})([line, "L", (labels != null  && this.params.qm_moNumber > 0  && ++rep != 0  ? labels[(this.params.qm_moNumber - 1) % labels.length] : "")],$I$(5).formatStringS$S$S$S);
}if (line.indexOf$S("%S") >= 0) line=(function(a,f){return f.apply(null,a)})([line, "S", mo != null  && mo.containsKey$O("symmetry")  && ++rep != 0  ? "" + mo.get$O("symmetry") : ""],$I$(5).formatStringS$S$S$S);
if (line.indexOf$S("%O") >= 0) {
var obj=(mo == null  ? null : mo.get$O("occupancy"));
var o=(obj == null  ? 0 : obj.floatValue$());
line=(function(a,f){return f.apply(null,a)})([line, "O", obj != null  && ++rep != 0  ? (o == (o|0)  ? "" + (o|0) : $I$(5).formatF$F$I$I$Z$Z(o, 0, 4, false, false)) : ""],$I$(5).formatStringS$S$S$S);
}if (line.indexOf$S("%T") >= 0) line=(function(a,f){return f.apply(null,a)})([line, "T", mo != null  && mo.containsKey$O("type")  && ++rep != 0  ? "" + mo.get$O("type") : ""],$I$(5).formatStringS$S$S$S);
if (line.equals$O("string")) {
this.params.title[iLine]="";
return;
}var isOptional=(line.indexOf$S("?") == 0);
this.params.title[iLine]=(!isOptional ? line : rep > 0 && !line.trim$().endsWith$S("=")  ? line.substring$I(1) : "");
}, p$1);

Clazz.newMeth(C$, 'readSurfaceData$Z', function (isMapData) {
if (this.volumeData.sr != null ) return;
if (this.params.psi_monteCarloCount <= 0) {
this.readSurfaceDataVDR$Z(isMapData);
return;
}if (this.points != null ) return;
this.points=Clazz.array($I$(3), [1000]);
for (var j=0; j < 1000; j++) this.points[j]=Clazz.new_($I$(3,1));

if (this.params.thePlane != null ) this.vTemp=Clazz.new_($I$(7,1));
for (var i=0; i < 3; i++) this.vDist[i]=this.volumeData.volumetricVectorLengths[i] * this.volumeData.voxelCounts[i];

this.volumeData.setVoxelDataAsArray$FAAA(this.voxelData=Clazz.array(Float.TYPE, [1000, 1, 1]));
p$1.getValues.apply(this, []);
var value;
var f=0;
for (var j=0; j < 1000; j++) if ((value=Math.abs(this.voxelData[j][0][0])) > f ) f=value;

if (f < 1.0E-4 ) return;
for (var i=0; i < this.params.psi_monteCarloCount; ) {
p$1.getValues.apply(this, []);
for (var j=0; j < 1000; j++) {
value=this.voxelData[j][0][0];
var absValue=Math.abs(value);
if (absValue <= p$1.getRnd$F.apply(this, [f]) ) continue;
this.addVC$javajs_util_T3$F$I$Z(this.points[j], value, 0, false);
if (++i == this.params.psi_monteCarloCount) break;
}
}
});

Clazz.newMeth(C$, 'postProcessVertices$', function () {
});

Clazz.newMeth(C$, 'getValues', function () {
for (var j=0; j < 1000; j++) {
this.voxelData[j][0][0]=0;
this.points[j].set$F$F$F(this.volumeData.volumetricOrigin.x + p$1.getRnd$F.apply(this, [this.vDist[0]]), this.volumeData.volumetricOrigin.y + p$1.getRnd$F.apply(this, [this.vDist[1]]), this.volumeData.volumetricOrigin.z + p$1.getRnd$F.apply(this, [this.vDist[2]]));
if (this.params.thePlane != null ) $I$(8).getPlaneProjection$javajs_util_P3$javajs_util_P4$javajs_util_P3$javajs_util_V3(this.points[j], this.params.thePlane, this.points[j], this.vTemp);
}
this.createOrbital$();
}, p$1);

Clazz.newMeth(C$, 'getValueAtPoint$javajs_util_T3$Z', function (pt, getSource) {
return (this.q == null  ? 0 : this.q.processPt$javajs_util_T3(pt));
});

Clazz.newMeth(C$, 'getRnd$F', function (f) {
return this.random.nextFloat$() * f;
}, p$1);

Clazz.newMeth(C$, 'generateCube$', function () {
if (this.params.volumeData != null ) return;
this.newVoxelDataCube$();
this.createOrbital$();
});

Clazz.newMeth(C$, 'createOrbital$', function () {
var isMonteCarlo=(this.params.psi_monteCarloCount > 0);
if (this.isElectronDensityCalc) {
if (this.mos == null  || isMonteCarlo ) return;
for (var i=this.params.qm_moNumber; --i >= 0; ) {
(function(a,f){return f.apply(null,a)})([" generating isosurface data for MO " + (i + 1)],$I$(9).info$S);
var mo=this.mos.get$I(i);
this.coef=mo.get$O("coefficients");
this.dfCoefMaps=mo.get$O("dfCoefMaps");
if (!p$1.setupCalculation.apply(this, [])) return;
this.q.createCube$();
}
} else {
if (!isMonteCarlo) (function(a,f){return f.apply(null,a)})(["generating isosurface data for MO using cutoff " + new Float(this.params.cutoff).toString()],$I$(9).info$S);
if (!p$1.setupCalculation.apply(this, [])) return;
this.q.createCube$();
this.jvxlData.integration=this.q.getIntegration$();
if (this.mo != null ) this.mo.put$O$O("integration", Float.valueOf$F(this.jvxlData.integration));
}});

Clazz.newMeth(C$, 'getPlane$I', function (x) {
if (!this.qSetupDone) p$1.setupCalculation.apply(this, []);
return this.getPlaneSR$I(x);
});

Clazz.newMeth(C$, 'setupCalculation', function () {
this.qSetupDone=true;
switch (this.params.qmOrbitalType) {
case 5:
break;
case 2:
case 1:
return (this.q).setupCalculation$java_util_Map$Z$org_jmol_jvxl_data_VolumeData$javajs_util_BS$javajs_util_T3A$org_jmol_modelset_AtomA$I$IAA$FA$FA$Z$FAA$javajs_util_T3A(this.params.moData, this.params.qmOrbitalType == 2, this.volumeData, this.bsMySelected, this.atomData.xyz, this.atomData.atoms, this.atomData.firstAtomIndex, this.dfCoefMaps, this.coef, this.linearCombination, this.params.isSquaredLinear, this.coefs, this.points);
case 3:
return (this.q).setupCalculation$org_jmol_jvxl_data_VolumeData$javajs_util_BS$javajs_util_BS$javajs_util_BSA$javajs_util_T3A$I$Z$javajs_util_T3A$FA$I(this.volumeData, this.bsMySelected, this.params.bsSolvent, this.atomData.bsMolecules, this.atomData.atoms, this.atomData.firstAtomIndex, true, this.points, this.params.parameters, this.params.testFlags);
}
return false;
}, p$1);

Clazz.newMeth(C$, 'getSurfacePointAndFraction$F$Z$F$F$javajs_util_T3$javajs_util_V3$I$I$I$I$I$FA$javajs_util_T3', function (cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, ptReturn) {
var zero=this.getSPF$F$Z$F$F$javajs_util_T3$javajs_util_V3$I$I$I$I$I$FA$javajs_util_T3(cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, ptReturn);
if (this.q != null  && !Float.isNaN$F(zero) ) {
zero=this.q.processPt$javajs_util_T3(ptReturn);
if (this.params.isSquared) zero *= zero;
}return zero;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
