(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'javajs.util.V3','javajs.util.P3','org.jmol.jvxl.readers.Parameters','org.jmol.jvxl.data.MeshData','org.jmol.jvxl.data.JvxlData','org.jmol.jvxl.data.VolumeData','javajs.util.PT','javajs.util.AU','org.jmol.util.Logger','org.jmol.jvxl.readers.SurfaceReader','javajs.util.P4','org.jmol.jvxl.data.JvxlCoder','javajs.util.Rdr','org.jmol.jvxl.readers.VolumeFileReader','org.jmol.viewer.FileManager','javajs.util.Measure','javajs.util.BS']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SurfaceGenerator");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.params=null;
this.jvxlData=null;
this.meshData=null;
this.volumeDataTemp=null;
this.meshDataServer=null;
this.atomDataServer=null;
this.marchingSquares=null;
this.version=null;
this.isValid=false;
this.fileType=null;
this.bsVdw=null;
this.colorPtr=0;
this.surfaceReader=null;
this.out=null;
this.readerData=null;
this.vAB=null;
this.vNorm=null;
this.ptRef=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isValid=true;
this.vAB=Clazz.new_($I$(1));
this.vNorm=Clazz.new_($I$(1));
this.ptRef=$I$(2).new3$F$F$F(0, 0, 9.9999999E14);
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_atomdata_AtomDataServer$org_jmol_jvxl_api_MeshDataServer$org_jmol_jvxl_data_MeshData$org_jmol_jvxl_data_JvxlData', function (atomDataServer, meshDataServer, meshData, jvxlData) {
C$.$init$.apply(this);
this.atomDataServer=atomDataServer;
this.meshDataServer=meshDataServer;
this.params=Clazz.new_($I$(3));
this.meshData=(meshData == null  ? Clazz.new_($I$(4)) : meshData);
this.jvxlData=(jvxlData == null  ? Clazz.new_($I$(5)) : jvxlData);
this.volumeDataTemp=Clazz.new_($I$(6));
this.initializeIsosurface$();
}, 1);

Clazz.newMeth(C$, 'setJvxlData$org_jmol_jvxl_data_JvxlData', function (jvxlData) {
this.jvxlData=jvxlData;
if (jvxlData != null ) jvxlData.version=this.version;
});

Clazz.newMeth(C$, 'setProp$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("debug" == propertyName) {
var TF=(value).booleanValue$();
this.params.logMessages=TF;
this.params.logCube=TF;
return true;
}if ("init" == propertyName) {
this.initializeIsosurface$();
if (Clazz.instanceOf(value, "org.jmol.jvxl.readers.Parameters")) {
this.params=value;
} else {
this.params.script=value;
if (this.params.script != null  && this.params.script.indexOf$S(";#") >= 0 ) {
this.params.script=$I$(7).rep$S$S$S(this.params.script, ";#", "; #");
}}return false;
}if ("silent" == propertyName) {
this.params.isSilent=true;
return true;
}if ("map" == propertyName) {
this.params.resetForMapping$Z((value).booleanValue$());
if (this.surfaceReader != null ) this.surfaceReader.minMax=null;
return true;
}if ("finalize" == propertyName) {
this.initializeIsosurface$();
return true;
}if ("clear" == propertyName) {
if (this.surfaceReader != null ) this.surfaceReader.discardTempData$Z(true);
return false;
}if ("fileIndex" == propertyName) {
this.params.fileIndex=(value).intValue$();
if (this.params.fileIndex < 0) this.params.fileIndex=0;
this.params.readAllData=false;
return true;
}if ("blockData" == propertyName) {
this.params.blockCubeData=(value).booleanValue$();
return true;
}if ("withinPoints" == propertyName) {
this.params.boundingBox=(value)[1];
return true;
}if ("boundingBox" == propertyName) {
var pts=value;
this.params.boundingBox=Clazz.array($I$(2), -1, [$I$(2).newP$javajs_util_T3(pts[0]), $I$(2).newP$javajs_util_T3(pts[pts.length - 1])]);
return true;
}if ("func" == propertyName) {
this.params.func=value;
return true;
}if ("intersection" == propertyName) {
this.params.intersection=value;
return true;
}if ("bsSolvent" == propertyName) {
this.params.bsSolvent=value;
return true;
}if ("select" == propertyName) {
this.params.bsSelected=value;
return true;
}if ("ignore" == propertyName) {
this.params.bsIgnore=value;
return true;
}if ("propertySmoothing" == propertyName) {
this.params.propertySmoothing=(value).booleanValue$();
return true;
}if ("propertyDistanceMax" == propertyName) {
this.params.propertyDistanceMax=(value).floatValue$();
return true;
}if ("propertySmoothingPower" == propertyName) {
this.params.propertySmoothingPower=(value).intValue$();
return true;
}if ("title" == propertyName) {
if (value == null ) {
this.params.title=null;
return true;
} else if ($I$(8).isAS$O(value)) {
this.params.title=value;
if ($I$(9).debugging) for (var i=0; i < this.params.title.length; i++) if (this.params.title[i].length$() > 0) $I$(9).info$S(this.params.title[i]);

}return true;
}if ("sigma" == propertyName) {
this.params.cutoff=this.params.sigma=(value).floatValue$();
this.params.isPositiveOnly=false;
this.params.cutoffAutomatic=false;
return true;
}if ("cutoff" == propertyName) {
this.params.cutoff=(value).floatValue$();
this.params.isPositiveOnly=false;
this.params.cutoffAutomatic=false;
return true;
}if ("parameters" == propertyName) {
this.params.parameters=$I$(8).ensureLengthA$FA$I(value, 2);
if (this.params.parameters.length > 0 && this.params.parameters[0] != 0  ) this.params.cutoff=this.params.parameters[0];
return true;
}if ("cutoffPositive" == propertyName) {
this.params.cutoff=(value).floatValue$();
this.params.isPositiveOnly=true;
return true;
}if ("cap" == propertyName || "slab" == propertyName ) {
if (value != null ) this.params.addSlabInfo$OA(value);
return true;
}if ("scale" == propertyName) {
this.params.scale=(value).floatValue$();
return true;
}if ("scale3d" == propertyName) {
this.params.scale3d=(value).floatValue$();
return true;
}if ("angstroms" == propertyName) {
this.params.isAngstroms=true;
return true;
}if ("resolution" == propertyName) {
var resolution=(value).floatValue$();
this.params.resolution=(resolution > 0  ? resolution : 3.4028235E38);
return true;
}if ("downsample" == propertyName) {
var rate=(value).intValue$();
this.params.downsampleFactor=(rate >= 0 ? rate : 0);
return true;
}if ("anisotropy" == propertyName) {
if ((this.params.dataType & 32) == 0) this.params.setAnisotropy$javajs_util_P3(value);
return true;
}if ("eccentricity" == propertyName) {
this.params.setEccentricity$javajs_util_P4(value);
return true;
}if ("addHydrogens" == propertyName) {
this.params.addHydrogens=(value).booleanValue$();
return true;
}if ("squareData" == propertyName) {
this.params.isSquared=(value == null  ? false : (value).booleanValue$());
return true;
}if ("squareLinear" == propertyName) {
this.params.isSquaredLinear=(value == null  ? false : (value).booleanValue$());
return true;
}if ("gridPoints" == propertyName) {
this.params.iAddGridPoints=true;
return true;
}if ("atomIndex" == propertyName) {
this.params.atomIndex=(value).intValue$();
return true;
}if ("insideOut" == propertyName) {
this.params.insideOut=true;
return true;
}if ("sign" == propertyName) {
this.params.isCutoffAbsolute=true;
this.params.colorBySign=true;
this.colorPtr=0;
return true;
}if ("colorRGB" == propertyName) {
var rgb=(value).intValue$();
this.params.colorRgb=this.params.colorPos=this.params.colorPosLCAO=rgb;
if (this.colorPtr++ == 0) {
this.params.colorNeg=this.params.colorNegLCAO=rgb;
} else {
this.params.colorRgb=2147483647;
}return true;
}if ("monteCarloCount" == propertyName) {
this.params.psi_monteCarloCount=(value).intValue$();
return true;
}if ("rangeAll" == propertyName) {
this.params.rangeAll=true;
return true;
}if ("rangeSelected" == propertyName) {
this.params.rangeSelected=true;
return true;
}if ("red" == propertyName) {
this.params.valueMappedToRed=(value).floatValue$();
return true;
}if ("blue" == propertyName) {
this.params.valueMappedToBlue=(value).floatValue$();
if (this.params.valueMappedToRed > this.params.valueMappedToBlue ) {
var f=this.params.valueMappedToRed;
this.params.valueMappedToRed=this.params.valueMappedToBlue;
this.params.valueMappedToBlue=f;
this.params.isColorReversed=!this.params.isColorReversed;
}this.params.rangeDefined=true;
this.params.rangeAll=false;
return true;
}if ("reverseColor" == propertyName) {
this.params.isColorReversed=true;
return true;
}if ("setColorScheme" == propertyName) {
p$1.getSurfaceSets.apply(this, []);
this.params.colorBySets=true;
p$1.mapSurface.apply(this, []);
return true;
}if ("center" == propertyName) {
this.params.center.setT$javajs_util_T3(value);
return true;
}if ("origin" == propertyName) {
this.params.origin=value;
return true;
}if ("step" == propertyName) {
this.params.steps=value;
return true;
}if ("modelInvRotation" == propertyName) {
this.params.modelInvRotation=value;
return true;
}if ("point" == propertyName) {
this.params.points=value;
return true;
}if ("withinDistance" == propertyName) {
this.params.distance=(value).floatValue$();
return true;
}if ("withinPoint" == propertyName) {
this.params.point=value;
return true;
}if ("progressive" == propertyName) {
this.params.isXLowToHigh=true;
return true;
}if ("phase" == propertyName) {
var color=value;
this.params.isCutoffAbsolute=true;
this.params.colorBySign=true;
this.params.colorByPhase=true;
this.params.colorPhase=$I$(10).getColorPhaseIndex$S(color);
if (this.params.colorPhase < 0) {
$I$(9).warn$S(" invalid color phase: " + color);
this.params.colorPhase=0;
}this.params.colorByPhase=this.params.colorPhase != 0;
if (this.params.state >= 2) {
this.params.dataType=this.params.surfaceType;
this.params.state=3;
this.params.isBicolorMap=true;
this.surfaceReader.applyColorScale$();
}return true;
}if ("radius" == propertyName) {
$I$(9).info$S("solvent probe radius set to " + value);
this.params.atomRadiusData=value;
return true;
}if ("envelopeRadius" == propertyName) {
this.params.envelopeRadius=(value).floatValue$();
return true;
}if ("cavityRadius" == propertyName) {
this.params.cavityRadius=(value).floatValue$();
return true;
}if ("cavity" == propertyName) {
this.params.isCavity=true;
return true;
}if ("doFullMolecular" == propertyName) {
this.params.doFullMolecular=true;
return true;
}if ("pocket" == propertyName) {
this.params.pocket=value;
this.params.fullyLit=this.params.pocket.booleanValue$();
return true;
}if ("minset" == propertyName) {
this.params.minSet=(value).intValue$();
return true;
}if ("maxset" == propertyName) {
this.params.maxSet=(value).intValue$();
return true;
}if ("plane" == propertyName) {
this.params.setPlane$javajs_util_P4(value);
return true;
}if ("contour" == propertyName) {
this.params.isContoured=true;
var n;
if ($I$(8).isAF$O(value)) {
this.params.contoursDiscrete=value;
this.params.nContours=this.params.contoursDiscrete.length;
} else if (Clazz.instanceOf(value, "javajs.util.P3")) {
var pt=this.params.contourIncrements=value;
var from=pt.x;
var to=pt.y;
var step=pt.z;
if (step <= 0 ) step=1;
n=0;
for (var p=from; p <= to + step / 10 ; p += step, n++) {
}
this.params.contoursDiscrete=Clazz.array(Float.TYPE, [n]);
var p=from;
for (var i=0; i < n; i++, p += step) {
this.params.contoursDiscrete[i]=p;
}
this.params.nContours=n;
} else {
n=(value).intValue$();
this.params.thisContour=0;
if (n == 0) this.params.nContours=9;
 else if (n > 0) this.params.nContours=n;
 else this.params.thisContour=-n;
}return true;
}if ("colorDiscrete" == propertyName) {
this.params.contourColixes=value;
return true;
}if ("colorDensity" == propertyName) {
this.params.colorDensity=true;
if (value != null ) this.params.pointSize=(value).floatValue$();
return false;
}if ("fullPlane" == propertyName) {
this.params.contourFromZero=!(value).booleanValue$();
return true;
}if ("mapLattice" == propertyName) {
this.params.mapLattice=value;
return true;
}if ("extendGrid" == propertyName) {
this.params.extendGrid=(value).floatValue$();
return true;
}if ("property" == propertyName) {
this.params.dataType=1208;
this.params.theProperty=value;
p$1.mapSurface.apply(this, []);
return true;
}if ("sphere" == propertyName) {
this.params.setSphere$F$Z((value).floatValue$(), false);
this.readerData=Float.valueOf$F(this.params.distance);
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoShapeReader"]);
p$1.generateSurface.apply(this, []);
return true;
}if ("geodesic" == propertyName) {
this.params.setSphere$F$Z((value).floatValue$(), true);
this.readerData=Float.valueOf$F(this.params.distance);
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoShapeReader"]);
p$1.generateSurface.apply(this, []);
return true;
}if ("ellipsoid" == propertyName) {
if (Clazz.instanceOf(value, "javajs.util.P4")) this.params.setEllipsoidP4$javajs_util_P4(value);
 else if ($I$(8).isAF$O(value)) this.params.setEllipsoidAF$FA(value);
 else return true;
this.readerData=Float.valueOf$F(this.params.distance);
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoShapeReader"]);
p$1.generateSurface.apply(this, []);
return true;
}if ("ellipsoid3" == propertyName) {
this.params.setEllipsoidAF$FA(value);
this.readerData=Float.valueOf$F(this.params.distance);
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoShapeReader"]);
p$1.generateSurface.apply(this, []);
return true;
}if ("lp" == propertyName) {
this.params.setLp$javajs_util_P4(value);
this.readerData=Clazz.array(Float.TYPE, -1, [3, 2, 0, 15, 0]);
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoShapeReader"]);
p$1.generateSurface.apply(this, []);
return true;
}if ("rad" == propertyName) {
this.params.setRadical$javajs_util_P4(value);
this.readerData=Clazz.array(Float.TYPE, -1, [3, 2, 0, 15, 0]);
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoShapeReader"]);
p$1.generateSurface.apply(this, []);
return true;
}if ("lobe" == propertyName) {
this.params.setLobe$javajs_util_P4(value);
this.readerData=Clazz.array(Float.TYPE, -1, [3, 2, 0, 15, 0]);
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoShapeReader"]);
p$1.generateSurface.apply(this, []);
return true;
}if ("hydrogenOrbital" == propertyName) {
if (!this.params.setAtomicOrbital$FA(value)) {
this.isValid=false;
return true;
}this.readerData=Clazz.array(Float.TYPE, -1, [this.params.psi_n, this.params.psi_l, this.params.psi_m, this.params.psi_Znuc, this.params.psi_monteCarloCount]);
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoShapeReader"]);
p$1.processState.apply(this, []);
return true;
}if ("functionXY" == propertyName) {
this.params.setFunctionXY$javajs_util_Lst(value);
if (this.params.isContoured) this.volumeDataTemp.setPlaneParameters$javajs_util_P4(this.params.thePlane == null  ? this.params.thePlane=$I$(11).new4$F$F$F$F(0, 0, 1, 0) : this.params.thePlane);
if ((this.params.functionInfo.get$I(0)).indexOf$S("_xyz") >= 0) p$1.getFunctionZfromXY.apply(this, []);
p$1.processState.apply(this, []);
return true;
}if ("functionXYZ" == propertyName) {
this.params.setFunctionXYZ$javajs_util_Lst(value);
p$1.processState.apply(this, []);
return true;
}if ("lcaoType" == propertyName) {
this.params.setLcao$S$I(value, this.colorPtr);
return true;
}if ("lcaoCartoonCenter" == propertyName) {
if (++this.params.state != 2) return true;
if (Float.isNaN$F(this.params.center.x)) this.params.center.setT$javajs_util_T3(value);
return false;
}if ("molecular" == propertyName || "solvent" == propertyName  || "sasurface" == propertyName  || "nomap" == propertyName ) {
this.params.setSolvent$S$F(propertyName, (value).floatValue$());
if (!this.params.isSilent) $I$(9).info$S(this.params.calculationType);
p$1.processState.apply(this, []);
return true;
}if ("moData" == propertyName) {
this.params.moData=value;
return true;
}if ("mepCalcType" == propertyName) {
this.params.mep_calcType=(value).intValue$();
return true;
}if ("mep" == propertyName) {
this.params.setMep$FA$Z(value, false);
p$1.processState.apply(this, []);
return true;
}if ("mlp" == propertyName) {
this.params.setMep$FA$Z(value, true);
p$1.processState.apply(this, []);
return true;
}if ("nci" == propertyName) {
var isPromolecular=(value).booleanValue$();
this.params.setNci$Z(isPromolecular);
if (isPromolecular) p$1.processState.apply(this, []);
return true;
}if ("calculationType" == propertyName) {
this.params.calculationType=value;
return true;
}if ("charges" == propertyName) {
this.params.theProperty=value;
return true;
}if ("randomSeed" == propertyName) {
this.params.randomSeed=(value).intValue$();
return true;
}if ("molecularOrbital" == propertyName) {
var iMo=0;
var linearCombination=null;
if (Clazz.instanceOf(value, "java.lang.Integer")) {
iMo=(value).intValue$();
} else {
linearCombination=value;
}this.params.setMO$I$FA(iMo, linearCombination);
$I$(9).info$S(this.params.calculationType);
p$1.processState.apply(this, []);
return true;
}if ("fileType" == propertyName) {
this.fileType=value;
return true;
}if ("fileName" == propertyName) {
this.params.fileName=value;
return true;
}if ("filesData" == propertyName) {
this.params.filesData=value;
return true;
}if ("outputChannel" == propertyName) {
this.out=value;
return true;
}if ("readFile" == propertyName) {
if ((this.surfaceReader=p$1.setFileData$org_jmol_viewer_Viewer$O.apply(this, [this.atomDataServer, value])) == null ) {
$I$(9).error$S("Could not set the surface data");
return true;
}this.surfaceReader.setOutputChannel$javajs_util_OC(this.out);
p$1.generateSurface.apply(this, []);
return true;
}if ("mapColor" == propertyName) {
if ((this.surfaceReader=p$1.setFileData$org_jmol_viewer_Viewer$O.apply(this, [this.atomDataServer, value])) == null ) {
$I$(9).error$S("Could not set the mapping data");
return true;
}this.surfaceReader.setOutputChannel$javajs_util_OC(this.out);
p$1.mapSurface.apply(this, []);
return true;
}if ("getSurfaceSets" == propertyName) {
p$1.getSurfaceSets.apply(this, []);
return true;
}if ("periodic" == propertyName) {
this.params.isPeriodic=true;
}return false;
});

Clazz.newMeth(C$, 'newReader$S', function (name) {
var sr=C$.getInterface$S(name);
if (sr != null ) sr.init$org_jmol_jvxl_readers_SurfaceGenerator(this);
return sr;
}, p$1);

Clazz.newMeth(C$, 'newReaderBr$S$java_io_BufferedReader', function (name, br) {
var sr=C$.getInterface$S(name);
if (sr != null ) sr.init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(this, br);
return sr;
}, p$1);

Clazz.newMeth(C$, 'getInterface$S', function (name) {
try {
var x=Clazz.forName("org.jmol.jvxl.readers." + name);
return (x == null  ? null : x.newInstance$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(9).error$S("Interface.java Error creating instance for " + name + ": \n" + e.toString() );
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getSurfaceSets', function () {
if (this.meshDataServer == null ) {
this.meshData.getSurfaceSet$();
} else {
this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 1, null);
this.meshData.getSurfaceSet$();
this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 3, null);
}}, p$1);

Clazz.newMeth(C$, 'processState', function () {
if (this.params.state == 1 && this.params.thePlane != null  ) this.params.state++;
if (this.params.state >= 2) {
p$1.mapSurface.apply(this, []);
} else {
p$1.generateSurface.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'setReader', function () {
this.readerData=null;
if (this.surfaceReader != null ) return !this.surfaceReader.vertexDataOnly;
switch (this.params.dataType) {
case 1207:
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoPlaneReader"]);
break;
case 1208:
this.surfaceReader=p$1.newReader$S.apply(this, ["AtomPropertyMapper"]);
break;
case 1328:
case 1329:
this.readerData=(this.params.dataType == 1328 ? "Mep" : "Mlp");
if (this.params.state == 3) {
this.surfaceReader=p$1.newReader$S.apply(this, ["AtomPropertyMapper"]);
} else {
this.surfaceReader=p$1.newReader$S.apply(this, ["Iso" + this.readerData + "Reader" ]);
}break;
case 1334:
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoIntersectFileReader"]);
break;
case 1333:
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoIntersectAtomReader"]);
break;
case 1195:
case 1203:
case 1196:
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoSolventReader"]);
break;
case 1844:
case 1837:
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoMOReader"]);
break;
case 8:
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoFxyReader"]);
break;
case 9:
this.surfaceReader=p$1.newReader$S.apply(this, ["IsoFxyzReader"]);
break;
}
if ($I$(9).debugging) $I$(9).info$S("Using surface reader " + this.surfaceReader);
if (this.params.isSilent && this.surfaceReader != null  ) this.surfaceReader.isQuiet=true;
return true;
}, p$1);

Clazz.newMeth(C$, 'generateSurface', function () {
if (++this.params.state != 2) return;
p$1.setReader.apply(this, []);
var haveMeshDataServer=(this.meshDataServer != null );
if (this.params.colorBySign) this.params.isBicolorMap=true;
if (this.surfaceReader == null ) {
$I$(9).error$S("surfaceReader is null for " + this.params.dataType);
return;
}if (!this.surfaceReader.createIsosurface$Z(false)) {
$I$(9).error$S("Could not create isosurface");
this.params.cutoff=NaN;
this.surfaceReader.closeReader$();
return;
}if (this.params.pocket != null  && haveMeshDataServer ) this.surfaceReader.selectPocket$Z(!this.params.pocket.booleanValue$());
if (this.params.minSet > 0) this.surfaceReader.excludeMinimumSet$();
if (this.params.maxSet > 0) this.surfaceReader.excludeMaximumSet$();
if (this.params.slabInfo != null ) this.surfaceReader.slabIsosurface$javajs_util_Lst(this.params.slabInfo);
if (haveMeshDataServer && this.meshDataServer.notifySurfaceGenerationCompleted$() ) this.surfaceReader.hasColorData=false;
if (this.jvxlData.thisSet >= 0) p$1.getSurfaceSets.apply(this, []);
if (this.jvxlData.jvxlDataIs2dContour) {
this.surfaceReader.colorIsosurface$();
this.params.state=3;
}if (this.jvxlData.jvxlDataIsColorDensity) {
this.params.state=3;
}if (this.params.colorBySign || this.params.isBicolorMap ) {
this.params.state=3;
this.surfaceReader.applyColorScale$();
}if (this.jvxlData.vertexColorMap != null ) {
this.jvxlData.vertexColorMap=null;
this.surfaceReader.hasColorData=false;
}this.surfaceReader.jvxlUpdateInfo$();
this.marchingSquares=this.surfaceReader.marchingSquares;
this.surfaceReader.discardTempData$Z(false);
this.params.mappedDataMin=3.4028235E38;
this.surfaceReader.closeReader$();
if (this.params.state != 3 && (this.surfaceReader.hasColorData || this.params.colorDensity ) ) {
this.params.state=3;
this.colorIsosurface$();
}this.surfaceReader=null;
}, p$1);

Clazz.newMeth(C$, 'mapSurface', function () {
if (this.params.state == 1 && this.params.thePlane != null  ) this.params.state++;
if (++this.params.state < 3) return;
if (!p$1.setReader.apply(this, [])) return;
if (this.params.isPeriodic) this.surfaceReader.volumeData.isPeriodic=true;
if (this.params.thePlane != null ) {
var isSquared=this.params.isSquared;
this.params.isSquared=false;
this.params.cutoff=0;
this.surfaceReader.volumeData.setMappingPlane$javajs_util_P4(this.params.thePlane);
this.surfaceReader.createIsosurface$Z(!this.params.isPeriodic);
this.surfaceReader.volumeData.setMappingPlane$javajs_util_P4(null);
if (this.meshDataServer != null ) this.meshDataServer.notifySurfaceGenerationCompleted$();
if (this.params.dataType == 1207) {
this.surfaceReader.discardTempData$Z(true);
return;
}this.params.isSquared=isSquared;
this.params.mappedDataMin=3.4028235E38;
this.surfaceReader.readVolumeData$Z(true);
if (this.params.mapLattice != null ) this.surfaceReader.volumeData.isPeriodic=true;
} else if (!this.params.colorBySets && !this.params.colorDensity ) {
this.surfaceReader.readAndSetVolumeParameters$Z(true);
this.params.mappedDataMin=3.4028235E38;
this.surfaceReader.readVolumeData$Z(true);
}this.colorIsosurface$();
this.surfaceReader.closeReader$();
this.surfaceReader=null;
}, p$1);

Clazz.newMeth(C$, 'colorIsosurface$', function () {
this.surfaceReader.colorIsosurface$();
this.surfaceReader.jvxlUpdateInfo$();
this.surfaceReader.updateTriangles$();
this.surfaceReader.discardTempData$Z(true);
if (this.meshDataServer != null ) this.meshDataServer.notifySurfaceMappingCompleted$();
});

Clazz.newMeth(C$, 'getProperty$S$I', function (property, index) {
if (property == "jvxlFileData") return $I$(12).jvxlGetFile$org_jmol_jvxl_data_JvxlData$org_jmol_jvxl_data_MeshData$SA$S$Z$I$S$S(this.jvxlData, null, this.params.title, "", true, index, null, null);
if (property == "jvxlFileInfo") return $I$(12).jvxlGetInfo$org_jmol_jvxl_data_JvxlData(this.jvxlData);
return null;
});

Clazz.newMeth(C$, 'setFileData$org_jmol_viewer_Viewer$O', function (vwr, value) {
var fileType=this.fileType;
this.fileType=null;
if (Clazz.instanceOf(value, "java.util.Map")) {
var map=value;
if (map.containsKey$O("__pymolSurfaceData__")) {
this.readerData=map;
return p$1.newReaderBr$S$java_io_BufferedReader.apply(this, ["PyMOLMeshReader", null]);
}value=map.get$O("volumeData");
}if (Clazz.instanceOf(value, "org.jmol.jvxl.data.VolumeData")) {
this.volumeDataTemp=value;
return p$1.newReader$S.apply(this, ["VolumeDataReader"]);
}var data=null;
if (Clazz.instanceOf(value, "java.lang.String")) {
data=value;
value=$I$(13).getBR$S(value);
}if (Clazz.instanceOf(value, Clazz.array(java.lang.Object, -1))) {
var a=(value)[0];
var b=Clazz.array($I$(14), [a.length]);
for (var i=0; i < a.length; i++) b[i]=p$1.setFileData$org_jmol_viewer_Viewer$O.apply(this, [vwr, a[i]]);

(value)[0]=b;
this.readerData=value;
return p$1.newReader$S.apply(this, ["IsoIntersectGridReader"]);
}var br=value;
if (fileType == null ) fileType=$I$(15).determineSurfaceFileType$java_io_BufferedReader(br);
if (fileType != null  && fileType.startsWith$S("UPPSALA") ) {
var fname=this.params.fileName;
fname=fname.substring$I$I(0, fname.indexOf$S$I("/", 10));
fname += $I$(7).getQuotedStringAt$S$I(fileType, fileType.indexOf$S("A HREF") + 1);
this.params.fileName=fname;
value=this.atomDataServer.getBufferedInputStream$S(fname);
if (value == null ) {
$I$(9).error$S("Isosurface: could not open file " + fname);
return null;
}try {
br=$I$(13).getBufferedReader$java_io_BufferedInputStream$S(value, null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
fileType=$I$(15).determineSurfaceFileType$java_io_BufferedReader(br);
}if (fileType == null ) fileType="UNKNOWN";
$I$(9).info$S("data file type was determined to be " + fileType);
if (fileType.equals$O("Jvxl+")) return p$1.newReaderBr$S$java_io_BufferedReader.apply(this, ["JvxlReader", br]);
this.readerData=Clazz.array(java.lang.Object, -1, [this.params.fileName, data]);
if ("MRC DELPHI DSN6".indexOf$S(fileType.toUpperCase$()) >= 0) {
fileType += "Binary";
}return p$1.newReaderBr$S$java_io_BufferedReader.apply(this, [fileType + "Reader", br]);
}, p$1);

Clazz.newMeth(C$, 'getReaderData$', function () {
var o=this.readerData;
this.readerData=null;
return o;
});

Clazz.newMeth(C$, 'initializeIsosurface$', function () {
this.params.initialize$();
this.colorPtr=0;
this.surfaceReader=null;
this.marchingSquares=null;
this.initState$();
});

Clazz.newMeth(C$, 'initState$', function () {
this.params.state=1;
this.params.dataType=this.params.surfaceType=0;
});

Clazz.newMeth(C$, 'setLcao$', function () {
this.params.colorPos=this.params.colorPosLCAO;
this.params.colorNeg=this.params.colorNegLCAO;
return this.params.lcaoType;
});

Clazz.newMeth(C$, 'getFunctionZfromXY', function () {
var origin=this.params.functionInfo.get$I(1);
var counts=Clazz.array(Integer.TYPE, [3]);
var nearest=Clazz.array(Integer.TYPE, [3]);
var vectors=Clazz.array($I$(1), [3]);
for (var i=0; i < 3; i++) {
var info=this.params.functionInfo.get$I(i + 2);
counts[i]=Math.abs((info.x|0));
vectors[i]=$I$(1).new3$F$F$F(info.y, info.z, info.w);
}
var nx=counts[0];
var ny=counts[1];
var pt=Clazz.new_($I$(2));
var pta=Clazz.new_($I$(2));
var ptb=Clazz.new_($I$(2));
var ptc=Clazz.new_($I$(2));
var data=this.params.functionInfo.get$I(5);
var data2=Clazz.array(Float.TYPE, [nx, ny]);
var d;
for (var i=0; i < nx; i++) for (var j=0; j < ny; j++) {
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(i, vectors[0], origin);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(j, vectors[1], pt);
var dist=C$.findNearestThreePoints$F$F$FAA$IA(pt.x, pt.y, data, nearest);
pta.set$F$F$F((d=data[nearest[0]])[0], d[1], d[2]);
if (dist < 1.0E-5 ) {
pt.z=d[2];
} else {
ptb.set$F$F$F((d=data[nearest[1]])[0], d[1], d[2]);
ptc.set$F$F$F((d=data[nearest[2]])[0], d[1], d[2]);
pt.z=p$1.distanceVerticalToPlane$F$F$javajs_util_P3$javajs_util_P3$javajs_util_P3.apply(this, [pt.x, pt.y, pta, ptb, ptc]);
}data2[i][j]=pt.z;
}

this.params.functionInfo.set$I$TE(5, data2);
}, p$1);

Clazz.newMeth(C$, 'distanceVerticalToPlane$F$F$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (x, y, pta, ptb, ptc) {
var d=$I$(16).getDirectedNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3(pta, ptb, ptc, this.ptRef, this.vNorm, this.vAB);
return (this.vNorm.x * x + this.vNorm.y * y + d) / -this.vNorm.z;
}, p$1);

Clazz.newMeth(C$, 'findNearestThreePoints$F$F$FAA$IA', function (x, y, xyz, result) {
var d;
var dist1;
var dist2;
var dist3;
var i1;
var i2;
var i3;
i1=i2=i3=-1;
dist1=dist2=dist3=3.4028235E38;
for (var i=xyz.length; --i >= 0; ) {
d=(d=xyz[i][0] - x) * d + (d=xyz[i][1] - y) * d;
if (d < dist1 ) {
dist3=dist2;
dist2=dist1;
dist1=d;
i3=i2;
i2=i1;
i1=i;
} else if (d < dist2 ) {
dist3=dist2;
dist2=d;
i3=i2;
i2=i;
} else if (d < dist3 ) {
dist3=d;
i3=i;
}}
result[0]=i1;
result[1]=i2;
result[2]=i3;
return dist1;
}, 1);

Clazz.newMeth(C$, 'addRequiredFile$S', function (fileName) {
if (this.meshDataServer == null ) return;
this.meshDataServer.addRequiredFile$S(fileName);
});

Clazz.newMeth(C$, 'setRequiredFile$S$S', function (oldName, fileName) {
if (this.meshDataServer == null ) return;
this.meshDataServer.setRequiredFile$S$S(oldName, fileName);
});

Clazz.newMeth(C$, 'log$S', function (msg) {
if (this.atomDataServer == null ) System.out.println$S(msg);
 else this.atomDataServer.log$S(msg);
});

Clazz.newMeth(C$, 'setOutputChannel$javajs_api_GenericBinaryDocument$javajs_util_OC', function (binaryDoc, out) {
if (this.meshDataServer == null ) return;
this.meshDataServer.setOutputChannel$javajs_api_GenericBinaryDocument$javajs_util_OC(binaryDoc, out);
});

Clazz.newMeth(C$, 'fillAtomData$org_jmol_atomdata_AtomData$I', function (atomData, mode) {
if ((mode & 2) != 0 && atomData.bsSelected != null  ) {
if (this.bsVdw == null ) this.bsVdw=Clazz.new_($I$(17));
this.bsVdw.or$javajs_util_BS(atomData.bsSelected);
}this.atomDataServer.fillAtomData$org_jmol_atomdata_AtomData$I(atomData, mode);
});

Clazz.newMeth(C$, 'getOriginVaVbVc$', function () {
return (this.surfaceReader.volumeData == null  ? null : this.surfaceReader.volumeData.oabc);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
