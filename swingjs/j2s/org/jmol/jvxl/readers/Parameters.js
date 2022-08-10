(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'javajs.util.BS','javajs.util.P3','org.jmol.util.Logger','javajs.util.V3','javajs.util.M3','javajs.util.A4','javajs.util.P4','org.jmol.util.Escape','java.util.Hashtable','javajs.util.Lst']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Parameters");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.state=0;
this.testFlags=0;
this.logMessages=false;
this.logCompression=false;
this.logCube=false;
this.isSilent=false;
this.assocCutoff=0.3;
this.calculationType="";
this.propertySmoothingPower=4;
this.slabPlaneOffset=NaN;
this.solvent_ptsPerAngstrom=4.0;
this.solvent_gridMax=60;
this.plane_ptsPerAngstrom=4.0;
this.plane_gridMax=81;
this.anisotropy=Clazz.array(Float.TYPE, [3]);
this.psi_n=2;
this.psi_l=1;
this.psi_m=1;
this.psi_Znuc=1;
this.psi_ptsPerAngstrom=5.0;
this.psi_monteCarloCount=0;
this.mep_gridMax=40;
this.mep_ptsPerAngstrom=3.0;
this.mep_marginAngstroms=1.0;
this.mep_calcType=-1;
this.qm_gridMax=80;
this.qm_ptsPerAngstrom=10.0;
this.qm_marginAngstroms=1.0;
this.qm_moNumber=2147483647;
this.qm_moLinearCombination=null;
this.fileIndex=-1;
this.modelIndex=-1;
this.modelInvRotation=null;
this.cutoff=3.4028235E38;
this.sigma=3.4028235E38;
this.cutoffAutomatic=true;
this.usePropertyForColorRange=true;
this.propertyDistanceMax=2147483647;
},1);

C$.$fields$=[['Z',['logMessages','logCompression','logCube','isSilent','addHydrogens','propertySmoothing','isCavity','colorBySign','colorByPhase','colorBySets','colorDensity','iAddGridPoints','isAngstroms','isAnisotropic','isEccentric','allowVolumeRender','blockCubeData','readAllData','isXLowToHigh','insideOut','dataXYReversed','cutoffAutomatic','isCutoffAbsolute','isPositiveOnly','rangeAll','rangeSelected','rangeDefined','isColorReversed','isBicolorMap','isSquared','isSquaredLinear','isContoured','contourFromZero','colorSchemeTranslucent','usePropertyForColorRange','isPeriodic','doFullMolecular','fullyLit','isMapped','showTiming','isModelConnected'],'F',['assocCutoff','solventRadius','solventExtendedAtomRadius','envelopeRadius','cavityRadius','slabPlaneOffset','solvent_ptsPerAngstrom','plane_ptsPerAngstrom','scale','scale3d','eccentricityScale','eccentricityRatio','psi_Znuc','psi_ptsPerAngstrom','mep_ptsPerAngstrom','mep_marginAngstroms','qm_ptsPerAngstrom','qm_marginAngstroms','distance','cutoff','sigma','valueMappedToRed','valueMappedToBlue','mappedDataMin','mappedDataMax','resolution','propertyDistanceMax','extendGrid','pointSize'],'I',['state','testFlags','dataType','surfaceType','propertySmoothingPower','minSet','solvent_gridMax','plane_gridMax','colorRgb','colorNeg','colorPos','colorPosLCAO','colorNegLCAO','colorPhase','atomIndex','psi_n','psi_l','psi_m','psi_monteCarloCount','mep_gridMax','mep_calcType','qmOrbitalType','qmOrbitalCount','qm_gridMax','qm_nAtoms','qm_moNumber','fileIndex','modelIndex','nContours','thisContour','downsampleFactor','maxSet','contourType','randomSeed'],'S',['calculationType','lcaoType','script','fileName'],'O',['atomRadiusData','org.jmol.atomdata.RadiusData','pocket','Boolean','slabInfo','javajs.util.Lst','theProperty','float[]','+anisotropy','eccentricityMatrix','javajs.util.M3','+eccentricityMatrixInverse','aniosU','float[]','+anisoB','functionInfo','javajs.util.Lst','moData','java.util.Map','qm_moLinearCombination','float[]','center','javajs.util.P3','+point','bsSelected','javajs.util.BS','+bsIgnore','+bsSolvent','func','java.lang.Object','title','String[]','modelInvRotation','javajs.util.M4','thePlane','javajs.util.P4','parameters','float[]','+contoursDiscrete','contourColixes','short[]','contourIncrements','javajs.util.P3','boundingBox','javajs.util.P3[]','bsExcluded','javajs.util.BS[]','colorEncoder','org.jmol.util.ColorEncoder','vertexSource','int[]','intersection','javajs.util.BS[]','origin','javajs.util.P3','+steps','+points','volumeData','org.jmol.jvxl.data.VolumeData','contactPair','org.jmol.util.ContactPair','mapLattice','javajs.util.P3','surfaceAtoms','javajs.util.BS','filesData','Object[]']]]

Clazz.newMeth(C$, 'initialize$', function () {
this.addHydrogens=false;
this.allowVolumeRender=true;
this.atomRadiusData=null;
this.atomIndex=-1;
this.blockCubeData=false;
this.boundingBox=null;
this.bsExcluded=Clazz.array($I$(1), [4]);
this.bsIgnore=null;
this.bsSelected=null;
this.bsSolvent=null;
this.calculationType="";
this.center=Clazz.new_($I$(2,1));
this.resetForMapping$Z(true);
this.colorBySign=this.colorByPhase=this.colorBySets=false;
this.colorEncoder=null;
this.colorNeg=-65536;
this.colorNegLCAO=-8388480;
this.colorPos=-16776961;
this.colorPosLCAO=-23296;
this.colorRgb=-2147483648;
this.colorSchemeTranslucent=false;
this.contactPair=null;
this.contourIncrements=null;
this.contoursDiscrete=null;
this.contourColixes=null;
this.contourFromZero=true;
this.cutoff=3.4028235E38;
this.cutoffAutomatic=true;
this.dataXYReversed=false;
this.distance=3.4028235E38;
this.doFullMolecular=false;
this.envelopeRadius=10.0;
this.extendGrid=0;
this.fileIndex=1;
this.readAllData=true;
this.fileName="";
this.filesData=null;
this.fullyLit=false;
this.functionInfo=null;
this.iAddGridPoints=false;
this.insideOut=false;
this.isAngstroms=false;
this.isBicolorMap=this.isCutoffAbsolute=this.isPositiveOnly=false;
this.isCavity=false;
this.isColorReversed=false;
this.isModelConnected=false;
this.isSquared=false;
this.isSquaredLinear=false;
this.isContoured=false;
this.isEccentric=false;
this.isMapped=false;
this.isPeriodic=false;
this.isSilent=false;
this.logCube=this.logCompression=false;
this.logMessages=$I$(3).debugging;
this.mapLattice=null;
this.mep_calcType=-1;
this.minSet=0;
this.modelIndex=-1;
this.modelInvRotation=null;
this.nContours=0;
this.pocket=null;
this.pointSize=NaN;
this.propertyDistanceMax=2147483647;
this.propertySmoothing=false;
this.propertySmoothingPower=4;
this.rangeDefined=false;
this.rangeAll=false;
this.rangeSelected=false;
this.resolution=3.4028235E38;
this.scale=NaN;
this.scale3d=0;
this.sigma=NaN;
this.slabInfo=null;
this.solventExtendedAtomRadius=0;
this.state=1;
this.testFlags=0;
this.thePlane=null;
this.theProperty=null;
this.thisContour=-1;
this.title=null;
this.usePropertyForColorRange=true;
this.vertexSource=null;
});

Clazz.newMeth(C$, 'resetForMapping$Z', function (haveSurface) {
if (!haveSurface) this.state=2;
this.center.x=NaN;
this.colorDensity=false;
this.func=null;
this.intersection=null;
this.isAnisotropic=false;
this.isMapped=true;
this.mappedDataMin=3.4028235E38;
this.origin=null;
this.parameters=null;
this.points=null;
this.qmOrbitalType=0;
this.steps=null;
this.volumeData=null;
});

Clazz.newMeth(C$, 'setAnisotropy$javajs_util_P3', function (pt) {
this.anisotropy[0]=pt.x;
this.anisotropy[1]=pt.y;
this.anisotropy[2]=pt.z;
this.isAnisotropic=true;
if (Float.isNaN$F(this.center.x)) this.center.set$F$F$F(0, 0, 0);
});

Clazz.newMeth(C$, 'setEccentricity$javajs_util_P4', function (info) {
var ecc=$I$(4).new3$F$F$F(info.x, info.y, info.z);
var c=(this.scale > 0  ? this.scale : info.w < 0  ? 1.0 : ecc.length$());
var fab_c=Math.abs(info.w);
ecc.normalize$();
var z=$I$(4).new3$F$F$F(0, 0, 1);
ecc.add$javajs_util_T3(z);
ecc.normalize$();
if (Float.isNaN$F(ecc.x)) ecc.set$F$F$F(1, 0, 0);
this.eccentricityMatrixInverse=Clazz.new_($I$(5,1));
this.eccentricityMatrixInverse.invertM$javajs_util_M3(this.eccentricityMatrix=Clazz.new_($I$(5,1)).setAA$javajs_util_A4($I$(6).newVA$javajs_util_V3$F(ecc, 3.1415927)));
this.isEccentric=this.isAnisotropic=true;
this.eccentricityScale=c;
this.eccentricityRatio=fab_c;
if (fab_c > 1 ) this.eccentricityScale *= fab_c;
this.anisotropy[0]=fab_c * c;
this.anisotropy[1]=fab_c * c;
this.anisotropy[2]=c;
if (Float.isNaN$F(this.center.x)) this.center.set$F$F$F(0, 0, 0);
});

Clazz.newMeth(C$, 'setPlane$javajs_util_P4', function (plane) {
this.thePlane=plane;
if (this.thePlane.x == 0  && this.thePlane.y == 0   && this.thePlane.z == 0  ) this.thePlane.z=1;
this.isContoured=true;
});

Clazz.newMeth(C$, 'setSphere$F$Z', function (radius, isGeodesic) {
this.dataType=(isGeodesic ? 74 : 65);
this.distance=radius;
this.setEccentricity$javajs_util_P4($I$(7).new4$F$F$F$F(0, 0, 1, 1));
this.cutoff=1.4E-45;
this.isCutoffAbsolute=false;
this.isSilent=!this.logMessages;
this.script=p$1.getScriptParams.apply(this, []) + " SPHERE " + new Float(radius).toString() + ";" ;
});

Clazz.newMeth(C$, 'setEllipsoidP4$javajs_util_P4', function (v) {
this.dataType=66;
this.distance=1.0;
this.setEccentricity$javajs_util_P4(v);
this.cutoff=1.4E-45;
this.isCutoffAbsolute=false;
this.isSilent=!this.logMessages;
});

Clazz.newMeth(C$, 'setEllipsoidAF$FA', function (bList) {
this.anisoB=bList;
this.dataType=67;
this.distance=0.3 * (Float.isNaN$F(this.scale) ? 1.0 : this.scale);
this.cutoff=1.4E-45;
this.isCutoffAbsolute=false;
this.isSilent=!this.logMessages;
if (Float.isNaN$F(this.center.x)) this.center.set$F$F$F(0, 0, 0);
if (this.resolution == 3.4028235E38 ) this.resolution=6;
});

Clazz.newMeth(C$, 'setLobe$javajs_util_P4', function (v) {
this.dataType=68;
this.setEccentricity$javajs_util_P4(v);
if (this.cutoff == 3.4028235E38 ) {
this.cutoff=0.14;
if (this.isSquared) this.cutoff=this.cutoff * this.cutoff;
}this.isSilent=!this.logMessages;
this.script=p$1.getScriptParams.apply(this, []) + " LOBE {" + new Float(v.x).toString() + " " + new Float(v.y).toString() + " " + new Float(v.z).toString() + " " + new Float(v.w).toString() + "};" ;
});

Clazz.newMeth(C$, 'getScriptParams', function () {
return " center " + $I$(8).eP$javajs_util_T3(this.center) + (Float.isNaN$F(this.scale) ? "" : " scale " + new Float(this.scale).toString()) ;
}, p$1);

Clazz.newMeth(C$, 'setLp$javajs_util_P4', function (v) {
this.dataType=70;
this.setEccentricity$javajs_util_P4(v);
if (this.cutoff == 3.4028235E38 ) {
this.cutoff=0.14;
if (this.isSquared) this.cutoff=this.cutoff * this.cutoff;
}this.isSilent=!this.logMessages;
this.script=" center " + $I$(8).eP$javajs_util_T3(this.center) + (Float.isNaN$F(this.scale) ? "" : " scale " + new Float(this.scale).toString()) + " LP {" + new Float(v.x).toString() + " " + new Float(v.y).toString() + " " + new Float(v.z).toString() + " " + new Float(v.w).toString() + "};" ;
});

Clazz.newMeth(C$, 'setRadical$javajs_util_P4', function (v) {
this.dataType=71;
this.setEccentricity$javajs_util_P4(v);
if (this.cutoff == 3.4028235E38 ) {
this.cutoff=0.14;
if (this.isSquared) this.cutoff=this.cutoff * this.cutoff;
}this.isSilent=!this.logMessages;
this.script=" center " + $I$(8).eP$javajs_util_T3(this.center) + (Float.isNaN$F(this.scale) ? "" : " scale " + new Float(this.scale).toString()) + " RAD {" + new Float(v.x).toString() + " " + new Float(v.y).toString() + " " + new Float(v.z).toString() + " " + new Float(v.w).toString() + "};" ;
});

Clazz.newMeth(C$, 'setLcao$S$I', function (type, colorPtr) {
this.lcaoType=type;
if (colorPtr == 1) this.colorPosLCAO=this.colorNegLCAO;
this.isSilent=!this.logMessages;
});

Clazz.newMeth(C$, 'setSolvent$S$F', function (propertyName, radius) {
this.isEccentric=this.isAnisotropic=false;
this.solventRadius=Math.abs(radius);
this.dataType=(this.intersection != null  ? 1333 : "nomap" === propertyName  ? 1207 : "molecular" === propertyName  ? 1203 : "sasurface" === propertyName  || this.solventRadius == 0.0   ? 1196 : 1195);
if (this.state < 2 && (this.cutoffAutomatic || !this.colorDensity )  && (this.intersection == null  || this.cutoff == 3.4028235E38  ) ) this.cutoff=0.0;
switch (this.dataType) {
case 1333:
this.calculationType="VDW intersection";
break;
case 1207:
this.calculationType="unmapped plane";
break;
case 1203:
this.calculationType="molecular surface with radius " + new Float(this.solventRadius).toString();
break;
case 1195:
this.calculationType="solvent-excluded surface with radius " + new Float(this.solventRadius).toString();
break;
case 1196:
this.calculationType="solvent-accessible surface with radius " + new Float(this.solventRadius).toString();
break;
}
switch (this.dataType) {
case 1207:
this.solventExtendedAtomRadius=this.solventRadius;
this.solventRadius=0.0;
this.isContoured=false;
break;
case 1203:
this.solventExtendedAtomRadius=0.0;
break;
case 1195:
this.solventExtendedAtomRadius=0.0;
if (this.bsIgnore == null ) this.bsIgnore=this.bsSolvent;
 else if (this.bsSolvent != null ) this.bsIgnore.or$javajs_util_BS(this.bsSolvent);
break;
case 1196:
this.solventExtendedAtomRadius=this.solventRadius;
this.solventRadius=0.0;
if (this.bsIgnore == null ) this.bsIgnore=this.bsSolvent;
 else if (this.bsSolvent != null ) this.bsIgnore.or$javajs_util_BS(this.bsSolvent);
break;
}
});

Clazz.newMeth(C$, 'setFunctionXY$javajs_util_Lst', function (value) {
this.dataType=8;
this.functionInfo=value;
this.cutoff=1.4E-45;
this.isEccentric=this.isAnisotropic=false;
});

Clazz.newMeth(C$, 'setFunctionXYZ$javajs_util_Lst', function (value) {
this.dataType=9;
this.functionInfo=value;
if (this.cutoff == 3.4028235E38 ) this.cutoff=1.4E-45;
this.isEccentric=this.isAnisotropic=false;
});

Clazz.newMeth(C$, 'setAtomicOrbital$FA', function (nlmZprs) {
this.dataType=1294;
this.setEccentricity$javajs_util_P4($I$(7).new4$F$F$F$F(0, 0, 1, 1));
this.psi_n=(nlmZprs[0]|0);
this.psi_l=(nlmZprs[1]|0);
this.psi_m=(nlmZprs[2]|0);
this.psi_Znuc=nlmZprs[3];
this.psi_monteCarloCount=(nlmZprs[4]|0);
this.distance=nlmZprs[5];
if (this.distance != 0  || this.thePlane != null  ) this.allowVolumeRender=false;
this.randomSeed=(nlmZprs[6]|0);
this.psi_ptsPerAngstrom=10;
if (this.cutoff == 3.4028235E38  || this.cutoff == 0.14  ) {
this.cutoff=(this.psi_monteCarloCount > 0 ? 0 : 0.04);
if (this.isSquared) this.cutoff=this.cutoff * this.cutoff;
}this.isCutoffAbsolute=true;
if (this.state < 2 && this.thePlane == null   && this.colorBySign ) this.isBicolorMap=true;
return (this.psi_Znuc > 0  && Math.abs(this.psi_m) <= this.psi_l  && this.psi_l < this.psi_n );
});

Clazz.newMeth(C$, 'setMep$FA$Z', function (charges, isMLP) {
this.dataType=(isMLP ? 1329 : 1328);
this.theProperty=charges;
this.usePropertyForColorRange=false;
this.isEccentric=this.isAnisotropic=false;
if (this.cutoff == 3.4028235E38 ) {
this.cutoff=0.1;
if (this.isSquared) this.cutoff=this.cutoff * this.cutoff;
}this.isCutoffAbsolute=(this.cutoff > 0  && !this.isPositiveOnly );
this.contourFromZero=false;
if (this.state >= 2 || this.thePlane != null  ) {
if (!this.rangeDefined && !this.rangeAll ) {
this.valueMappedToRed=-0.1;
this.valueMappedToBlue=0.1;
this.rangeDefined=true;
}} else {
this.colorBySign=true;
this.isBicolorMap=true;
}});

Clazz.newMeth(C$, 'setNci$Z', function (isPromolecular) {
this.fullyLit=true;
this.qm_gridMax=200;
if (isPromolecular) this.dataType=1844;
this.qm_marginAngstroms=2.0;
this.qmOrbitalType=(isPromolecular ? 3 : 4);
if (isPromolecular) {
if (this.parameters == null  || this.parameters.length < 2 ) this.parameters=Clazz.array(Float.TYPE, -1, [this.cutoff, 2]);
}if (this.cutoff == 3.4028235E38  || this.cutoff == 0  ) this.cutoff=0.3;
if (this.isSquared) this.cutoff *= this.cutoff;
if (this.title == null ) this.title=Clazz.array(String, [0]);
this.moData=Clazz.new_($I$(9,1));
});

Clazz.newMeth(C$, 'setMO$I$FA', function (iMo, linearCombination) {
this.isModelConnected=true;
this.qm_moLinearCombination=linearCombination;
this.qm_moNumber=(linearCombination == null  ? Math.abs(iMo) : (linearCombination[1]|0));
this.qmOrbitalType=(this.moData.containsKey$O("haveVolumeData") ? 5 : this.moData.containsKey$O("gaussians") ? 1 : this.moData.containsKey$O("slaters") ? 2 : 0);
var isElectronDensity=(iMo <= 0 && linearCombination == null  );
if (this.qmOrbitalType == 0) {
$I$(3,"error$S",["MO ERROR: No basis functions found in file for MO calculation. (GAUSSIAN \'gfprint\' keyword may be missing?)"]);
this.title=Clazz.array(String, -1, ["no basis functions found in file"]);
} else {
var mos=this.moData.get$O("mos");
this.qmOrbitalCount=mos.size$();
this.calculationType=this.moData.get$O("calculationType");
this.calculationType="Molecular orbital #" + this.qm_moNumber + "/" + this.qmOrbitalCount + " " + (this.calculationType == null  ? "" : this.calculationType) ;
if (!isElectronDensity) {
if (this.title == null ) {
this.title=Clazz.array(String, [5]);
this.title[0]="%F";
this.title[1]="Model %M  MO %I/%N %T";
this.title[2]="?Energy = %E %U";
this.title[3]="?Symmetry = %S";
this.title[4]="?Occupancy = %O";
}}}this.dataType=1837;
if (this.cutoff == 3.4028235E38 ) {
this.cutoff=(isElectronDensity ? 0.01 : 0.05);
}if (this.isSquared || this.isSquaredLinear ) this.cutoff=this.cutoff * this.cutoff;
this.isEccentric=this.isAnisotropic=false;
this.isCutoffAbsolute=(this.cutoff > 0  && !this.isPositiveOnly );
if (this.state >= 2 || this.thePlane != null  ) return;
this.colorBySign=true;
if (this.colorByPhase && this.colorPhase == 0 ) this.colorByPhase=false;
this.isBicolorMap=true;
});

Clazz.newMeth(C$, 'setMapRanges$org_jmol_jvxl_readers_SurfaceReader$Z', function (surfaceReader, haveData) {
if (!this.colorDensity) if (this.colorByPhase || this.colorBySign || (this.thePlane != null  || this.isBicolorMap ) && !this.isContoured   ) {
this.mappedDataMin=-1;
this.mappedDataMax=1;
}if (this.mappedDataMin == 3.4028235E38  || this.mappedDataMin == this.mappedDataMax  ) {
var minMax=surfaceReader.getMinMaxMappedValues$Z(haveData);
System.out.println$S("parameters - setmapranges " + new Float(minMax[0]).toString() + " " + new Float(minMax[1]).toString() );
this.mappedDataMin=minMax[0];
this.mappedDataMax=minMax[1];
}if (this.mappedDataMin == 0  && this.mappedDataMax == 0  ) {
this.mappedDataMin=-1;
this.mappedDataMax=1;
}if (!this.rangeDefined) {
this.valueMappedToRed=this.mappedDataMin;
this.valueMappedToBlue=this.mappedDataMax;
}});

Clazz.newMeth(C$, 'addSlabInfo$OA', function (slabObject) {
if (this.slabInfo == null ) this.slabInfo=Clazz.new_($I$(10,1));
this.slabInfo.addLast$O(slabObject);
});

Clazz.newMeth(C$, 'isInsideOut$', function () {
return this.insideOut != this.dataXYReversed ;
});

Clazz.newMeth(C$, 'isFullyLit$', function () {
return (this.thePlane != null  || this.fullyLit );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:36 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
