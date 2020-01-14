(function(){var P$=Clazz.newPackage("org.jmol.shapesurface"),p$1={},I$=[[0,'org.jmol.atomdata.RadiusData',['org.jmol.atomdata.RadiusData','.EnumType'],'org.jmol.c.VDW','javajs.util.V3','javajs.util.P3','org.jmol.jvxl.data.JvxlCoder','org.jmol.util.Logger','org.jmol.util.Escape','org.jmol.util.BSUtil','Boolean','org.jmol.jvxl.data.MeshData','javajs.util.BS','javajs.util.CU','org.jmol.jvxl.data.VolumeData','org.jmol.util.BoxInfo','javajs.util.Lst','org.jmol.atomdata.AtomData','org.jmol.util.ContactPair','org.jmol.c.HB','org.jmol.util.TempArray','javajs.util.Measure','java.util.Hashtable','org.jmol.script.T']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Contact", null, 'org.jmol.shapesurface.Isosurface');
C$.rdVDW=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.rdVDW=Clazz.new_($I$(1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW,[null, 1, $I$(2).FACTOR, $I$(3).AUTO]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.displayType=0;
this.atoms=null;
this.ac=0;
this.minData=0;
this.maxData=0;
this.vZ=null;
this.vY=null;
this.vX=null;
this.pt1=null;
this.pt2=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.vZ=Clazz.new_($I$(4));
this.vY=Clazz.new_($I$(4));
this.vX=Clazz.new_($I$(4));
this.pt1=Clazz.new_($I$(5));
this.pt2=Clazz.new_($I$(5));
}, 1);

Clazz.newMeth(C$, 'initShape$', function () {
C$.superclazz.prototype.initShape$.apply(this, []);
this.myType="contact";
});

Clazz.newMeth(C$, 'getProperty$S$I', function (property, index) {
return this.getPropC$S$I(property, index);
});

Clazz.newMeth(C$, 'getPropC$S$I', function (property, index) {
var thisMesh=this.thisMesh;
if (index >= 0 && (index >= this.meshCount || (thisMesh=this.isomeshes[index]) == null  ) ) return null;
if (property == "jvxlFileInfo") {
thisMesh.setJvxlColorMap$Z(false);
if (this.displayType == 134217750) {
$I$(6).jvxlCreateColorData$org_jmol_jvxl_data_JvxlData$FA(this.jvxlData, thisMesh.vvs);
var minmax=thisMesh.getDataMinMax$();
this.jvxlData.mappedDataMin=minmax[0];
this.jvxlData.mappedDataMax=minmax[1];
}return $I$(6).jvxlGetInfo$org_jmol_jvxl_data_JvxlData(this.jvxlData);
}return this.getPropI$S$I(property, index);
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("set" == propertyName) {
p$1.setContacts$OA$Z.apply(this, [value, !this.vwr.getBoolean$I(603979965)]);
return;
}if ("init" == propertyName) {
this.translucentLevel=0;
}this.setPropI$S$O$javajs_util_BS(propertyName, value, bs);
});

Clazz.newMeth(C$, 'setContacts$OA$Z', function (value, doEditCpList) {
var contactType=(value[0]).intValue$();
var displayType=(value[1]).intValue$();
var colorDensity=(value[2]).booleanValue$();
var colorByType=(value[3]).booleanValue$();
var bsA=value[4];
var bsB=value[5];
var rd=value[6];
var saProbeRadius=(value[7]).floatValue$();
var parameters=value[8];
var modelIndex=(value[9]).intValue$();
var command=value[10];
if (Float.isNaN$F(saProbeRadius)) saProbeRadius=0;
if (rd == null ) rd=Clazz.new_($I$(1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW,[null, saProbeRadius, $I$(2).OFFSET, $I$(3).AUTO]);
if (colorDensity) {
switch (displayType) {
case 1073741961:
case 1275068932:
case 134217750:
displayType=1275068932;
break;
case 4106:
case 1073742036:
case 2097180:
case 1073742135:
break;
case 1073741875:
colorDensity=false;
break;
}
}var bs;
this.ac=this.vwr.ms.ac;
this.atoms=this.vwr.ms.at;
var intramolecularMode=((parameters == null  || parameters.length < 2  ? 0 : parameters[1])|0);
var ptSize=(colorDensity && parameters != null   && parameters[0] < 0   ? Math.abs(parameters[0]) : 0.15);
if ($I$(7).debugging) {
$I$(7).debug$S("Contact intramolecularMode " + intramolecularMode);
$I$(7).debug$S("Contacts for " + bsA.cardinality$() + ": " + $I$(8).eBS$javajs_util_BS(bsA) );
$I$(7).debug$S("Contacts to " + bsB.cardinality$() + ": " + $I$(8).eBS$javajs_util_BS(bsB) );
}this.setPropI$S$O$javajs_util_BS("newObject", null, null);
this.thisMesh.setMerged$Z(true);
this.thisMesh.nSets=0;
this.thisMesh.info=null;
var func=null;
var fullyLit=true;
switch (displayType) {
case 1073741961:
func="(a>b?a:b)";
break;
case 134217750:
case 1073741875:
func="a-b";
break;
case 4106:
func="a+b";
break;
}
switch (displayType) {
case 1073742036:
colorByType=fullyLit=false;
bs=$I$(9).copy$javajs_util_BS(bsA);
bs.or$javajs_util_BS(bsB);
if (parameters[0] < 0 ) parameters[0]=0;
this.sg.params.colorDensity=colorDensity;
this.sg.params.bsSelected=bs;
this.sg.params.bsSolvent=bsB;
this.sg.setProp$S$O$javajs_util_BS("parameters", parameters, null);
this.setPropI$S$O$javajs_util_BS("nci", $I$(10).TRUE, null);
break;
case 1073742135:
case 2097180:
colorByType=fullyLit=false;
this.thisMesh.nSets=1;
p$1.newSurface$I$org_jmol_util_ContactPair$javajs_util_BS$javajs_util_BS$org_jmol_atomdata_RadiusData$FA$O$Z$org_jmol_jvxl_data_VolumeData$F.apply(this, [2097180, null, bsA, bsB, rd, null, null, colorDensity, null, saProbeRadius]);
break;
case 1073741875:
colorByType=fullyLit=false;
this.thisMesh.nSets=1;
p$1.newSurface$I$org_jmol_util_ContactPair$javajs_util_BS$javajs_util_BS$org_jmol_atomdata_RadiusData$FA$O$Z$org_jmol_jvxl_data_VolumeData$F.apply(this, [554176565, null, bsA, bsB, rd, null, null, false, null, 0]);
this.sg.initState$();
p$1.newSurface$I$org_jmol_util_ContactPair$javajs_util_BS$javajs_util_BS$org_jmol_atomdata_RadiusData$FA$O$Z$org_jmol_jvxl_data_VolumeData$F.apply(this, [134217750, null, bsA, bsB, rd, parameters, func, colorDensity, this.sg.volumeDataTemp, 0]);
p$1.mergeMesh$org_jmol_jvxl_data_MeshData.apply(this, [null]);
break;
case 1073741961:
case 1275068932:
colorByType=false;
p$1.newSurface$I$org_jmol_util_ContactPair$javajs_util_BS$javajs_util_BS$org_jmol_atomdata_RadiusData$FA$O$Z$org_jmol_jvxl_data_VolumeData$F.apply(this, [1275068932, null, bsA, bsB, rd, null, null, colorDensity, null, 0]);
if (displayType == 1073741961) {
this.sg.initState$();
p$1.newSurface$I$org_jmol_util_ContactPair$javajs_util_BS$javajs_util_BS$org_jmol_atomdata_RadiusData$FA$O$Z$org_jmol_jvxl_data_VolumeData$F.apply(this, [1275068932, null, bsB, bsA, rd, parameters, func, colorDensity, null, 0]);
p$1.mergeMesh$org_jmol_jvxl_data_MeshData.apply(this, [null]);
} else {
var meshData=Clazz.new_($I$(11));
this.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(meshData, 1, null);
meshData.getSurfaceSet$();
this.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(meshData, 3, null);
}break;
case 4106:
case 134217750:
var volume=0;
var pairs=p$1.getPairs$javajs_util_BS$javajs_util_BS$org_jmol_atomdata_RadiusData$I$Z.apply(this, [bsA, bsB, rd, intramolecularMode, doEditCpList]);
this.thisMesh.info=pairs;
volume += p$1.combineSurfaces$javajs_util_Lst$I$I$FA$O$Z$Z.apply(this, [pairs, contactType, displayType, parameters, func, colorDensity, colorByType]);
this.thisMesh.calculatedVolume=Float.valueOf$F(volume);
p$1.mergeMesh$org_jmol_jvxl_data_MeshData.apply(this, [null]);
break;
}
this.thisMesh.setMerged$Z(false);
if (modelIndex != -2147483648) this.thisMesh.modelIndex=modelIndex;
this.thisMesh.jvxlData.vertexDataOnly=true;
this.thisMesh.reinitializeLightingAndColor$org_jmol_viewer_Viewer(this.vwr);
if (contactType != 1073742036) {
this.thisMesh.bsVdw=Clazz.new_($I$(12));
this.thisMesh.bsVdw.or$javajs_util_BS(bsA);
this.thisMesh.bsVdw.or$javajs_util_BS(bsB);
}this.setPropI$S$O$javajs_util_BS("finalize", command, null);
if (colorDensity) {
this.setPropI$S$O$javajs_util_BS("pointSize", Float.valueOf$F(ptSize), null);
} else {
this.setPropI$S$O$javajs_util_BS("token", Integer.valueOf$I(fullyLit ? 1073741964 : 1073741958), null);
}if (this.thisMesh.slabOptions != null ) {
this.thisMesh.slabOptions=null;
this.thisMesh.polygonCount0=-1;
}this.discardTempData$Z(true);
var defaultColor=null;
switch (contactType) {
case 1613238294:
defaultColor="lightgreen";
break;
case 1073741881:
defaultColor="yellow";
break;
case 2097180:
defaultColor="skyblue";
break;
}
var ce=null;
if (colorByType) {
ce=this.vwr.cm.getColorEncoder$S("rwb");
ce.setRange$F$F$Z(-0.5, 0.5, false);
} else if (defaultColor != null ) {
this.setPropI$S$O$javajs_util_BS("color", Integer.valueOf$I($I$(13).getArgbFromString$S(defaultColor)), null);
} else if (displayType == 1073742036) {
ce=this.vwr.cm.getColorEncoder$S("bgr");
ce.setRange$F$F$Z(-0.03, 0.03, false);
} else {
ce=this.vwr.cm.getColorEncoder$S("rgb");
if (colorDensity) ce.setRange$F$F$Z(-0.3, 0.3, false);
 else ce.setRange$F$F$Z(-0.5, 1.0, false);
}if (ce != null ) this.thisMesh.remapColors$org_jmol_viewer_Viewer$org_jmol_util_ColorEncoder$F(this.vwr, ce, this.translucentLevel);
}, p$1);

Clazz.newMeth(C$, 'combineSurfaces$javajs_util_Lst$I$I$FA$O$Z$Z', function (pairs, contactType, displayType, parameters, func, isColorDensity, colorByType) {
var volumeData=Clazz.new_($I$(14));
var logLevel=$I$(7).getLogLevel$();
$I$(7).setLogLevel$I(0);
var resolution=this.sg.params.resolution;
var nContacts=pairs.size$();
var volume=0;
if (displayType == 1073741961 && resolution == 3.4028235E38  ) resolution=(nContacts > 1000 ? 3 : 10);
var box=Clazz.new_($I$(15));
for (var i=nContacts; --i >= 0; ) {
var cp=pairs.get$I(i);
var oldScore=cp.score;
var isVdwClash=(displayType == 134217750 && (contactType == 1648363544 || contactType == 0 )  && cp.setForVdwClash$Z(true) );
if (isVdwClash) cp.score=0;
if (contactType != 0 && cp.contactType != contactType ) continue;
var nV=this.thisMesh.vc;
this.thisMesh.nSets++;
if (contactType != 0 || cp.contactType != 1648363544 ) volume += cp.volume;
p$1.setVolumeData$I$org_jmol_jvxl_data_VolumeData$org_jmol_util_ContactPair$F$I.apply(this, [displayType, volumeData, cp, resolution, nContacts]);
switch (displayType) {
case 1073741961:
p$1.newSurface$I$org_jmol_util_ContactPair$javajs_util_BS$javajs_util_BS$org_jmol_atomdata_RadiusData$FA$O$Z$org_jmol_jvxl_data_VolumeData$F.apply(this, [displayType, cp, null, null, null, null, func, isColorDensity, volumeData, 0]);
cp.switchAtoms$();
p$1.newSurface$I$org_jmol_util_ContactPair$javajs_util_BS$javajs_util_BS$org_jmol_atomdata_RadiusData$FA$O$Z$org_jmol_jvxl_data_VolumeData$F.apply(this, [displayType, cp, null, null, null, null, null, isColorDensity, volumeData, 0]);
break;
case 1275068932:
case 134217750:
case 4106:
p$1.newSurface$I$org_jmol_util_ContactPair$javajs_util_BS$javajs_util_BS$org_jmol_atomdata_RadiusData$FA$O$Z$org_jmol_jvxl_data_VolumeData$F.apply(this, [displayType, cp, null, null, null, parameters, func, isColorDensity, volumeData, 0]);
if (isVdwClash && cp.setForVdwClash$Z(false) ) {
if (colorByType) nV=p$1.setColorByScore$F$I.apply(this, [cp.score, nV]);
cp.score=oldScore;
volume += cp.volume;
p$1.newSurface$I$org_jmol_util_ContactPair$javajs_util_BS$javajs_util_BS$org_jmol_atomdata_RadiusData$FA$O$Z$org_jmol_jvxl_data_VolumeData$F.apply(this, [displayType, cp, null, null, null, parameters, func, isColorDensity, volumeData, 0]);
}break;
}
if (i > 0 && (i % 1000) == 0  && logLevel == 4 ) {
$I$(7).setLogLevel$I(4);
$I$(7).info$S("contact..." + i);
$I$(7).setLogLevel$I(0);
}if (colorByType) p$1.setColorByScore$F$I.apply(this, [(cp.contactType == 1613238294 ? 4 : cp.score), nV]);
for (var j=this.thisMesh.vc; --j >= 0; ) box.addBoundBoxPoint$javajs_util_T3(this.thisMesh.vs[j]);

}
$I$(7).setLogLevel$I(logLevel);
if (this.jvxlData.boundingBox == null ) {
System.out.println$S("???");
} else {
this.jvxlData.boundingBox[0]=box.bbCorner0;
this.jvxlData.boundingBox[1]=box.bbCorner1;
}this.displayType=displayType;
return volume;
}, p$1);

Clazz.newMeth(C$, 'setColorByScore$F$I', function (score, nV) {
for (var iv=this.thisMesh.vc; --iv >= nV; ) this.thisMesh.vvs[iv]=score;

return this.thisMesh.vc;
}, p$1);

Clazz.newMeth(C$, 'getPairs$javajs_util_BS$javajs_util_BS$org_jmol_atomdata_RadiusData$I$Z', function (bsA, bsB, rd, intramolecularMode, doEditCpList) {
var list=Clazz.new_($I$(16));
var ad=Clazz.new_($I$(17));
ad.radiusData=rd;
var bs=$I$(9).copy$javajs_util_BS(bsA);
bs.or$javajs_util_BS(bsB);
if (bs.isEmpty$()) return list;
ad.bsSelected=bs;
var iModel=this.atoms[bs.nextSetBit$I(0)].mi;
var isMultiModel=(iModel != this.atoms[bs.length$() - 1].mi);
ad.modelIndex=(isMultiModel ? -1 : iModel);
var isSelf=bsA.equals$O(bsB);
this.vwr.fillAtomData$org_jmol_atomdata_AtomData$I(ad, 2 | (isMultiModel ? 16 : 0) | 4 );
var maxRadius=0;
for (var ib=bsB.nextSetBit$I(0); ib >= 0; ib=bsB.nextSetBit$I(ib + 1)) if (ad.atomRadius[ib] > maxRadius ) maxRadius=ad.atomRadius[ib];

var iter=this.vwr.getSelectedAtomIterator$javajs_util_BS$Z$Z$Z(bsB, isSelf, false, isMultiModel);
for (var ia=bsA.nextSetBit$I(0); ia >= 0; ia=bsA.nextSetBit$I(ia + 1)) {
var atomA=this.atoms[ia];
var vdwA=atomA.getVanderwaalsRadiusFloat$org_jmol_viewer_Viewer$org_jmol_c_VDW(this.vwr, $I$(3).AUTO);
if (isMultiModel) this.vwr.setIteratorForPoint$org_jmol_api_AtomIndexIterator$I$javajs_util_T3$F(iter, -1, ad.atoms[ia], ad.atomRadius[ia] + maxRadius);
 else this.vwr.setIteratorForAtom$org_jmol_api_AtomIndexIterator$I$F(iter, ia, ad.atomRadius[ia] + maxRadius);
while (iter.hasNext$()){
var ib=iter.next$();
if (isMultiModel && !bsB.get$I(ib) ) continue;
var atomB=this.atoms[ib];
var isSameMolecule=(ad.atomMolecule[ia] == ad.atomMolecule[ib]);
if (ia == ib || isSameMolecule && p$1.isWithinFourBonds$org_jmol_modelset_Atom$org_jmol_modelset_Atom.apply(this, [atomA, atomB])  ) continue;
switch (intramolecularMode) {
case 0:
break;
case 1:
case 2:
if (isSameMolecule != (intramolecularMode == 1) ) continue;
}
var vdwB=atomB.getVanderwaalsRadiusFloat$org_jmol_viewer_Viewer$org_jmol_c_VDW(this.vwr, $I$(3).AUTO);
var ra=ad.atomRadius[ia];
var rb=ad.atomRadius[ib];
var d=atomA.distance$javajs_util_T3(atomB);
if (d > ra + rb ) continue;
var cp=Clazz.new_($I$(18).c$$org_jmol_modelset_AtomA$I$I$F$F$F$F,[this.atoms, ia, ib, ra, rb, vdwA, vdwB]);
if (cp.score < 0 ) C$.getVdwClashRadius$org_jmol_util_ContactPair$D$D$D$D(cp, ra - vdwA, vdwA, vdwB, d);
var typeA=$I$(19).getType$org_jmol_modelset_Atom(atomA);
var typeB=(typeA === $I$(19).NOT  ? $I$(19).NOT : $I$(19).getType$org_jmol_modelset_Atom(atomB));
var isHBond=$I$(19).isPossibleHBond$org_jmol_c_HB$org_jmol_c_HB(typeA, typeB);
var hbondCutoff=(atomA.getElementNumber$() == 1 || atomB.getElementNumber$() == 1  ? -1.2 : -1.0);
if (isHBond && cp.score < hbondCutoff  ) isHBond=false;
if (isHBond && cp.score < 0  ) cp.contactType=1613238294;
list.addLast$TV(cp);
}
}
iter.release$();
iter=null;
if (!doEditCpList) return list;
var n=list.size$() - 1;
var bsBad=Clazz.new_($I$(12));
for (var i=0; i < n; i++) {
var cp1=list.get$I(i);
for (var j=i + 1; j <= n; j++) {
var cp2=list.get$I(j);
for (var m=0; m < 2; m++) {
for (var p=0; p < 2; p++) {
switch (C$.checkCp$org_jmol_util_ContactPair$org_jmol_util_ContactPair$I$I(cp1, cp2, m, p)) {
case 1:
bsBad.set$I(i);
break;
case 2:
bsBad.set$I(j);
break;
default:
}
}
}
}
}
for (var i=bsBad.length$(); --i >= 0; ) if (bsBad.get$I(i)) list.removeItemAt$I(i);

if ($I$(7).debugging) for (var i=0; i < list.size$(); i++) $I$(7).debug$S(list.get$I(i).toString());

$I$(7).info$S("Contact pairs: " + list.size$());
return list;
}, p$1);

Clazz.newMeth(C$, 'isWithinFourBonds$org_jmol_modelset_Atom$org_jmol_modelset_Atom', function (atomA, atomB) {
if (atomA.mi != atomB.mi) return false;
if (atomA.isCovalentlyBonded$org_jmol_modelset_Atom(atomB)) return true;
var bondsOther=atomB.bonds;
var bonds=atomA.bonds;
if (bondsOther != null  && bonds != null  ) for (var i=0; i < bondsOther.length; i++) {
var atom2=bondsOther[i].getOtherAtom$org_jmol_modelset_Atom(atomB);
if (atomA.isCovalentlyBonded$org_jmol_modelset_Atom(atom2)) return true;
for (var j=0; j < bonds.length; j++) if (bonds[j].getOtherAtom$org_jmol_modelset_Atom(atomA).isCovalentlyBonded$org_jmol_modelset_Atom(atom2)) return true;

}
return false;
}, p$1);

Clazz.newMeth(C$, 'checkCp$org_jmol_util_ContactPair$org_jmol_util_ContactPair$I$I', function (cp1, cp2, i1, i2) {
if (cp1.myAtoms[i1] !== cp2.myAtoms[i2] ) return 0;
var clash1=(cp1.pt.distance$javajs_util_T3(cp2.myAtoms[1 - i2]) < cp2.radii[1 - i2] );
var clash2=(cp2.pt.distance$javajs_util_T3(cp1.myAtoms[1 - i1]) < cp1.radii[1 - i1] );
return (!clash1 && !clash2  ? 0 : cp1.score > cp2.score  ? 1 : 2);
}, 1);

Clazz.newMeth(C$, 'newSurface$I$org_jmol_util_ContactPair$javajs_util_BS$javajs_util_BS$org_jmol_atomdata_RadiusData$FA$O$Z$org_jmol_jvxl_data_VolumeData$F', function (displayType, cp, bs1, bs2, rd, parameters, func, isColorDensity, volumeData, sasurfaceRadius) {
var params=this.sg.params;
params.isSilent=true;
if (cp == null ) {
bs2.andNot$javajs_util_BS(bs1);
if (bs1.isEmpty$() || bs2.isEmpty$() ) return;
} else {
params.contactPair=cp;
}var iSlab0=0;
var iSlab1=0;
this.sg.initState$();
switch (displayType) {
case 1073742135:
case 2097180:
case 554176565:
case 1275068932:
case 1073741961:
var rdA;
var rdB;
if (displayType == 2097180) {
rdA=C$.rdVDW;
rdB=Clazz.new_($I$(1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW,[null, (rd.factorType === $I$(2).OFFSET  ? rd.value * 2 : (rd.value - 1) * 2 + 1), rd.factorType, rd.vdwType]);
} else {
rdA=rdB=rd;
}params.colorDensity=isColorDensity;
if (isColorDensity) {
this.setPropI$S$O$javajs_util_BS("cutoffRange", Clazz.array(Float.TYPE, -1, [-100.0, 0.0]), null);
}if (cp == null ) {
params.atomRadiusData=rdA;
params.bsIgnore=$I$(9).copyInvert$javajs_util_BS$I(bs1, this.ac);
params.bsSelected=bs1;
params.bsSolvent=null;
}params.volumeData=volumeData;
this.setPropI$S$O$javajs_util_BS("sasurface", Float.valueOf$F(sasurfaceRadius), null);
this.setPropI$S$O$javajs_util_BS("map", $I$(10).TRUE, null);
if (cp == null ) {
params.atomRadiusData=rdB;
params.bsIgnore=$I$(9).copyInvert$javajs_util_BS$I(bs2, this.ac);
params.bsSelected=bs2;
}params.volumeData=volumeData;
this.setPropI$S$O$javajs_util_BS("sasurface", Float.valueOf$F(sasurfaceRadius), null);
switch (displayType) {
case 1073741961:
case 1275068932:
iSlab0=-100;
break;
case 1073742135:
case 2097180:
if (isColorDensity) iSlab0=-100;
break;
case 554176565:
iSlab1=-100;
}
break;
case 134217750:
case 4106:
if (displayType == 4106) this.sg.setProp$S$O$javajs_util_BS("parameters", parameters, null);
if (cp == null ) {
params.atomRadiusData=rd;
params.bsIgnore=$I$(9).copyInvert$javajs_util_BS$I(bs2, this.ac);
params.bsIgnore.andNot$javajs_util_BS(bs1);
}params.func=func;
params.intersection=Clazz.array($I$(12), -1, [bs1, bs2]);
params.volumeData=volumeData;
params.colorDensity=isColorDensity;
if (isColorDensity) this.setPropI$S$O$javajs_util_BS("cutoffRange", Clazz.array(Float.TYPE, -1, [-5.0, 0.0]), null);
this.setPropI$S$O$javajs_util_BS("sasurface", Float.valueOf$F(0), null);
this.setPropI$S$O$javajs_util_BS("map", $I$(10).TRUE, null);
params.volumeData=volumeData;
this.setPropI$S$O$javajs_util_BS("sasurface", Float.valueOf$F(0), null);
if (displayType == 134217750) {
iSlab0=-100;
}break;
}
if (iSlab0 != iSlab1) this.thisMesh.getMeshSlicer$().slabPolygons$OA$Z($I$(20).getSlabWithinRange$F$F(iSlab0, iSlab1), false);
if (displayType != 2097180) this.thisMesh.setMerged$Z(true);
}, p$1);

Clazz.newMeth(C$, 'setVolumeData$I$org_jmol_jvxl_data_VolumeData$org_jmol_util_ContactPair$F$I', function (type, volumeData, cp, resolution, nPairs) {
this.pt1.setT$javajs_util_T3(cp.myAtoms[0]);
this.pt2.setT$javajs_util_T3(cp.myAtoms[1]);
this.vX.sub2$javajs_util_T3$javajs_util_T3(this.pt2, this.pt1);
var dAB=this.vX.length$();
var dYZ=(cp.radii[0] * cp.radii[0] + dAB * dAB - cp.radii[1] * cp.radii[1]) / (2 * dAB * cp.radii[0] );
dYZ=2.1 * (cp.radii[0] * Math.sin(Math.acos(dYZ)));
$I$(21).getNormalToLine$javajs_util_P3$javajs_util_P3$javajs_util_V3(this.pt1, this.pt2, this.vZ);
this.vZ.scale$F(dYZ);
this.vY.cross$javajs_util_T3$javajs_util_T3(this.vZ, this.vX);
this.vY.normalize$();
this.vY.scale$F(dYZ);
if (type != 4106) {
this.vX.normalize$();
this.pt1.scaleAdd2$F$javajs_util_T3$javajs_util_T3((dAB - cp.radii[1]) * 0.95, this.vX, this.pt1);
this.pt2.scaleAdd2$F$javajs_util_T3$javajs_util_T3((cp.radii[0] - dAB) * 0.95, this.vX, this.pt2);
this.vX.sub2$javajs_util_T3$javajs_util_T3(this.pt2, this.pt1);
}if (resolution == 3.4028235E38 ) resolution=(nPairs > 100 ? 3 : 10);
var nX=Math.max(5, (Math.floor(this.pt1.distance$javajs_util_T3(this.pt2) * resolution + 1)|0));
if ((nX % 2) == 0) nX++;
var nYZ=Math.max(7, (Math.floor(dYZ * resolution + 1)|0));
if ((nYZ % 2) == 0) nYZ++;
volumeData.setVoxelCounts$I$I$I(nX, nYZ, nYZ);
this.pt1.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-0.5, this.vY, this.pt1);
this.pt1.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-0.5, this.vZ, this.pt1);
volumeData.setVolumetricOrigin$F$F$F(this.pt1.x, this.pt1.y, this.pt1.z);
this.vX.scale$F(1.0 / (nX - 1));
this.vY.scale$F(1.0 / (nYZ - 1));
this.vZ.scale$F(1.0 / (nYZ - 1));
volumeData.setVolumetricVector$I$F$F$F(0, this.vX.x, this.vX.y, this.vX.z);
volumeData.setVolumetricVector$I$F$F$F(1, this.vY.x, this.vY.y, this.vY.z);
volumeData.setVolumetricVector$I$F$F$F(2, this.vZ.x, this.vZ.y, this.vZ.z);
}, p$1);

Clazz.newMeth(C$, 'mergeMesh$org_jmol_jvxl_data_MeshData', function (md) {
this.thisMesh.merge$org_jmol_jvxl_data_MeshData(md);
if (this.minData == 3.4028235E38 ) {
} else if (this.jvxlData.mappedDataMin == 3.4028235E38 ) {
this.jvxlData.mappedDataMin=this.minData;
this.jvxlData.mappedDataMax=this.maxData;
} else {
this.jvxlData.mappedDataMin=Math.min(this.minData, this.jvxlData.mappedDataMin);
this.jvxlData.mappedDataMax=Math.max(this.maxData, this.jvxlData.mappedDataMax);
}this.minData=this.jvxlData.mappedDataMin;
this.maxData=this.jvxlData.mappedDataMax;
this.jvxlData.valueMappedToBlue=this.minData;
this.jvxlData.valueMappedToRed=this.maxData;
}, p$1);

Clazz.newMeth(C$, 'addMeshInfo$org_jmol_shapesurface_IsosurfaceMesh$java_util_Map', function (mesh, info) {
if (mesh.info == null ) return;
var pairInfo=Clazz.new_($I$(16));
info.put$TK$TV("pairInfo", pairInfo);
var list=mesh.info;
for (var i=0; i < list.size$(); i++) {
var cpInfo=Clazz.new_($I$(22));
pairInfo.addLast$TV(cpInfo);
var cp=list.get$I(i);
cpInfo.put$TK$TV("type", $I$(23).nameOf$I(cp.contactType));
cpInfo.put$TK$TV("volume", Double.valueOf$D(cp.volume));
cpInfo.put$TK$TV("vdwVolume", Double.valueOf$D(cp.vdwVolume));
if (!Float.isNaN$F(cp.xVdwClash)) {
cpInfo.put$TK$TV("xVdwClash", Double.valueOf$D(cp.xVdwClash));
}cpInfo.put$TK$TV("score", Double.valueOf$D(cp.score));
cpInfo.put$TK$TV("atoms", cp.myAtoms);
cpInfo.put$TK$TV("radii", cp.radii);
cpInfo.put$TK$TV("vdws", cp.vdws);
}
});

Clazz.newMeth(C$, 'getVdwClashRadius$org_jmol_util_ContactPair$D$D$D$D', function (cp, x0, vdwA, vdwB, d) {
var sum=vdwA + vdwB;
var dif2=vdwA - vdwB;
dif2 *= dif2;
var v0_nopi=x0 * x0 * (sum + 1.3333333333333333 * x0 - dif2 / sum) ;
cp.vdwVolume=cp.volume - v0_nopi * 3.141592653589793;
var a=(sum - d);
var b=d + 2 * sum - 3 * dif2 / d;
var c=v0_nopi * 12;
var a2=a * a;
var a3=a * a2;
var b2=b * b;
var b3=b * b2;
var f=-a * 2 / 3 - b / 6;
var g=(4 * a2 - 4 * a * b  + b2) / 36;
var v=a3 / 27 - a2 * b / 18 + a * b2 / 36 - b3 / 216 + c / 4;
var u=-c / 432 * (8 * a3 - 12 * a2 * b  + 6 * a * b2  - b3 + 27 * c);
var theta=Math.atan2(Math.sqrt(u), v);
var vvu=Math.pow(v * v + u, 0.16666666666666666);
var costheta=Math.cos(theta / 3);
var x;
x=f + (g / vvu + vvu) * costheta;
if (x > 0 ) {
cp.xVdwClash=((x / 2));
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:21 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
