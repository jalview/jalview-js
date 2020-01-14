(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.pymol"),p$1={},I$=[[0,'javajs.util.BS','java.util.Hashtable','javajs.util.Lst','javajs.util.P3','org.jmol.adapter.readers.pymol.PyMOLReader','org.jmol.adapter.readers.pymol.PyMOL','javajs.util.CU','org.jmol.util.Logger','Boolean','org.jmol.util.BSUtil','org.jmol.adapter.readers.pymol.JmolObject','org.jmol.adapter.readers.pymol.PyMOLGroup','javajs.util.AU','org.jmol.util.C','org.jmol.modelset.MeasurementData','org.jmol.util.Point3fi','javajs.util.SB','org.jmol.util.Escape','javajs.util.PT','org.jmol.modelset.Text','org.jmol.atomdata.RadiusData',['org.jmol.atomdata.RadiusData','.EnumType'],'org.jmol.c.VDW']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PyMOLScene", null, null, 'org.jmol.api.JmolSceneGenerator');
C$.MEAS_DIGITS=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.MEAS_DIGITS=Clazz.array(Integer.TYPE, -1, [530, 531, 532]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.pymolVersion=0;
this.bsHidden=null;
this.bsNucleic=null;
this.bsNonbonded=null;
this.bsLabeled=null;
this.bsHydrogen=null;
this.bsNoSurface=null;
this.htSpacefill=null;
this.ssMapAtom=null;
this.atomColorList=null;
this.occludedObjects=null;
this.labels=null;
this.colixes=null;
this.frameObj=null;
this.groups=null;
this.objectSettings=null;
this.bsCartoon=null;
this.htCarveSets=null;
this.htDefinedAtoms=null;
this.htHiddenObjects=null;
this.moleculeNames=null;
this.jmolObjects=null;
this.htAtomMap=null;
this.htObjectAtoms=null;
this.htObjectGroups=null;
this.htMeasures=null;
this.htObjectSettings=null;
this.objectInfo=null;
this.settings=null;
this.htStateSettings=null;
this.stateSettings=null;
this.uniqueSettings=null;
this.uniqueList=null;
this.bsUniqueBonds=null;
this.bgRgb=0;
this.dotColor=0;
this.surfaceMode=0;
this.surfaceColor=0;
this.cartoonColor=0;
this.ribbonColor=0;
this.sphereColor=0;
this.labelFontId=0;
this.labelColor=0;
this.cartoonTranslucency=0;
this.ribbonTranslucency=0;
this.labelSize=0;
this.meshWidth=0;
this.nonbondedSize=0;
this.nonbondedTranslucency=0;
this.sphereScale=0;
this.sphereTranslucency=0;
this.stickTranslucency=0;
this.transparency=0;
this.cartoonLadderMode=false;
this.cartoonRockets=false;
this.haveNucleicLadder=false;
this.labelPosition=null;
this.labelPosition0=null;
this.objectName=null;
this.objectNameID=null;
this.objectJmolName=null;
this.objectType=0;
this.bsAtoms=null;
this.objectHidden=false;
this.reader=null;
this.uniqueIDs=null;
this.cartoonTypes=null;
this.sequenceNumbers=null;
this.newChain=null;
this.radii=null;
this.baseModelIndex=0;
this.baseAtomIndex=0;
this.stateCount=0;
this.mepList=null;
this.doCache=false;
this.haveScenes=false;
this.bsCarve=null;
this.solventAccessible=false;
this.bsLineBonds=null;
this.bsStickBonds=null;
this.thisState=0;
this.currentAtomSetIndex=0;
this.surfaceInfoName=null;
this.ptTemp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.bsHidden=Clazz.new_($I$(1));
this.bsNucleic=Clazz.new_($I$(1));
this.bsNonbonded=Clazz.new_($I$(1));
this.bsLabeled=Clazz.new_($I$(1));
this.bsHydrogen=Clazz.new_($I$(1));
this.bsNoSurface=Clazz.new_($I$(1));
this.htSpacefill=Clazz.new_($I$(2));
this.ssMapAtom=Clazz.new_($I$(2));
this.atomColorList=Clazz.new_($I$(3));
this.occludedObjects=Clazz.new_($I$(2));
this.labels=Clazz.new_($I$(2));
this.bsCartoon=Clazz.new_($I$(1));
this.htCarveSets=Clazz.new_($I$(2));
this.htDefinedAtoms=Clazz.new_($I$(2));
this.htHiddenObjects=Clazz.new_($I$(2));
this.moleculeNames=Clazz.new_($I$(3));
this.jmolObjects=Clazz.new_($I$(3));
this.htAtomMap=Clazz.new_($I$(2));
this.htObjectAtoms=Clazz.new_($I$(2));
this.htObjectGroups=Clazz.new_($I$(2));
this.htMeasures=Clazz.new_($I$(2));
this.htObjectSettings=Clazz.new_($I$(2));
this.objectInfo=Clazz.new_($I$(2));
this.htStateSettings=Clazz.new_($I$(2));
this.labelPosition0=Clazz.new_($I$(4));
this.mepList="";
this.bsLineBonds=Clazz.new_($I$(1));
this.bsStickBonds=Clazz.new_($I$(1));
this.ptTemp=Clazz.new_($I$(4));
}, 1);

Clazz.newMeth(C$, 'clearReaderData', function () {
this.reader=null;
this.colixes=null;
this.atomColorList=null;
this.objectSettings=null;
this.stateSettings=null;
if (this.haveScenes) return;
this.settings=null;
this.groups=null;
this.labels=null;
this.ssMapAtom=null;
this.htSpacefill=null;
this.htAtomMap=null;
this.htMeasures=null;
this.htObjectGroups=null;
this.htObjectAtoms=null;
this.htObjectSettings=null;
this.htStateSettings=null;
this.htHiddenObjects=null;
this.objectInfo=null;
this.occludedObjects=null;
this.bsHidden=this.bsNucleic=this.bsNonbonded=this.bsLabeled=this.bsHydrogen=this.bsNoSurface=this.bsCartoon=null;
}, p$1);

Clazz.newMeth(C$, 'setUniqueBond$I$I', function (index, uniqueID) {
if (uniqueID < 0) return;
if (this.uniqueList == null ) {
this.uniqueList=Clazz.new_($I$(2));
this.bsUniqueBonds=Clazz.new_($I$(1));
}this.uniqueList.put$TK$TV(Integer.valueOf$I(index), Integer.valueOf$I(uniqueID));
this.bsUniqueBonds.set$I(index);
});

Clazz.newMeth(C$, 'setStateCount$I', function (stateCount) {
this.stateCount=stateCount;
});

Clazz.newMeth(C$, 'c$$org_jmol_api_PymolAtomReader$org_jmol_viewer_Viewer$javajs_util_Lst$java_util_Map$I$Z$I$I$Z$S', function (reader, vwr, settings, uniqueSettings, pymolVersion, haveScenes, baseAtomIndex, baseModelIndex, doCache, filePath) {
C$.$init$.apply(this);
this.reader=reader;
this.vwr=vwr;
this.settings=settings;
this.uniqueSettings=uniqueSettings;
this.pymolVersion=pymolVersion;
this.haveScenes=haveScenes;
this.baseAtomIndex=baseAtomIndex;
this.baseModelIndex=baseModelIndex;
this.doCache=doCache;
this.surfaceInfoName=filePath + "##JmolSurfaceInfo##";
p$1.setVersionSettings.apply(this, []);
settings.trimToSize$();
this.bgRgb=p$1.colorSetting$I.apply(this, [6]);
this.labelPosition0=p$1.pointSetting$I.apply(this, [471]);
}, 1);

Clazz.newMeth(C$, 'colorSetting$I', function (i) {
var pos=$I$(5).listAt$javajs_util_Lst$I(this.settings, i);
var o=(pos == null  || pos.size$() != 3  ? null : pos.get$I(2));
if (o == null ) return ($I$(6).getDefaultSetting$I$I(i, this.pymolVersion)|0);
return (Clazz.instanceOf(o, "java.lang.Integer") ? (o).intValue$() : $I$(7).colorPtToFFRGB$javajs_util_T3($I$(5).pointAt$javajs_util_Lst$I$javajs_util_P3(o, 0, this.ptTemp)));
}, p$1);

Clazz.newMeth(C$, 'pointSetting$I', function (i) {
var pt=Clazz.new_($I$(4));
var pos=$I$(5).listAt$javajs_util_Lst$I(this.settings, i);
if (pos != null  && pos.size$() == 3 ) return $I$(5).pointAt$javajs_util_Lst$I$javajs_util_P3(pos.get$I(2), 0, pt);
return $I$(6).getDefaultSettingPt$I$I$javajs_util_P3(i, this.pymolVersion, pt);
}, p$1);

Clazz.newMeth(C$, 'ensureCapacity$I', function (n) {
this.atomColorList.ensureCapacity$I(this.atomColorList.size$() + n);
});

Clazz.newMeth(C$, 'setReaderObjectInfo$S$I$S$Z$javajs_util_Lst$javajs_util_Lst$S', function (name, type, groupName, isHidden, listObjSettings, listStateSettings, ext) {
this.objectName=name;
this.objectHidden=isHidden;
this.objectNameID=(this.objectName == null  ? null : p$1.fixName$S.apply(this, [this.objectName + ext]));
this.objectSettings=Clazz.new_($I$(2));
this.stateSettings=Clazz.new_($I$(2));
if (this.objectName != null ) {
this.objectJmolName=p$1.getJmolName$S.apply(this, [name]);
if (groupName != null ) {
this.htObjectGroups.put$TK$TV(this.objectName, groupName);
this.htObjectGroups.put$TK$TV(this.objectNameID, groupName);
}this.objectInfo.put$TK$TV(this.objectName, Clazz.array(java.lang.Object, -1, [this.objectNameID, Integer.valueOf$I(type)]));
if (this.htObjectSettings.get$O(this.objectName) == null ) {
p$1.listToSettings$javajs_util_Lst$java_util_Map.apply(this, [listObjSettings, this.objectSettings]);
this.htObjectSettings.put$TK$TV(this.objectName, this.objectSettings);
}if (this.htStateSettings.get$O(this.objectNameID) == null ) {
p$1.listToSettings$javajs_util_Lst$java_util_Map.apply(this, [listStateSettings, this.stateSettings]);
this.htStateSettings.put$TK$TV(this.objectNameID, this.stateSettings);
}}p$1.getObjectSettings.apply(this, []);
});

Clazz.newMeth(C$, 'listToSettings$javajs_util_Lst$java_util_Map', function (list, objectSettings) {
if (list != null  && list.size$() != 0 ) {
for (var i=list.size$(); --i >= 0; ) {
var setting=list.get$I(i);
objectSettings.put$TK$TV(setting.get$I(0), setting);
}
}}, p$1);

Clazz.newMeth(C$, 'getObjectSettings', function () {
this.transparency=this.floatSetting$I(138);
this.dotColor=(this.floatSetting$I(210)|0);
this.nonbondedSize=this.floatSetting$I(65);
this.nonbondedTranslucency=this.floatSetting$I(524);
this.sphereScale=this.floatSetting$I(155);
this.cartoonColor=(this.floatSetting$I(236)|0);
this.ribbonColor=(this.floatSetting$I(235)|0);
this.sphereColor=(this.floatSetting$I(173)|0);
this.cartoonTranslucency=this.floatSetting$I(279);
this.ribbonTranslucency=this.floatSetting$I(666);
this.stickTranslucency=this.floatSetting$I(198);
this.sphereTranslucency=this.floatSetting$I(172);
this.cartoonLadderMode=this.booleanSetting$I(448);
this.cartoonRockets=this.booleanSetting$I(180);
this.surfaceMode=(this.floatSetting$I(143)|0);
this.surfaceColor=(this.floatSetting$I(144)|0);
this.solventAccessible=this.booleanSetting$I(338);
this.meshWidth=this.floatSetting$I(90);
var carveSet=this.stringSetting$I(342).trim$();
if (carveSet.length$() == 0) {
this.bsCarve=null;
} else {
this.bsCarve=this.htCarveSets.get$O(carveSet);
if (this.bsCarve == null ) this.htCarveSets.put$TK$TV(carveSet, this.bsCarve=Clazz.new_($I$(1)));
}this.labelPosition=Clazz.new_($I$(4));
try {
var setting=this.getObjectSetting$I(471);
$I$(5).pointAt$javajs_util_Lst$I$javajs_util_P3($I$(5).listAt$javajs_util_Lst$I(setting, 2), 0, this.labelPosition);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.labelPosition.add$javajs_util_T3(this.labelPosition0);
this.labelColor=(this.floatSetting$I(66)|0);
this.labelSize=this.floatSetting$I(453);
this.labelFontId=(this.floatSetting$I(328)|0);
}, p$1);

Clazz.newMeth(C$, 'setAtomInfo$IA$IA$IA$ZA$FA', function (uniqueIDs, cartoonTypes, sequenceNumbers, newChain, radii) {
this.uniqueIDs=uniqueIDs;
this.cartoonTypes=cartoonTypes;
this.sequenceNumbers=sequenceNumbers;
this.newChain=newChain;
this.radii=radii;
});

Clazz.newMeth(C$, 'setSceneObject$S$I', function (name, istate) {
this.objectName=name;
this.objectType=p$1.getObjectType$S.apply(this, [name]);
this.objectJmolName=p$1.getJmolName$S.apply(this, [name]);
this.objectNameID=(istate == 0 && this.objectType != 0  ? this.getObjectID$S(name) : this.objectJmolName + "_" + istate );
this.bsAtoms=this.htObjectAtoms.get$O(name);
this.objectSettings=this.htObjectSettings.get$O(name);
this.stateSettings=this.htStateSettings.get$O(name + "_" + istate );
var groupName=this.htObjectGroups.get$O(name);
this.objectHidden=(this.htHiddenObjects.containsKey$O(name) || groupName != null  && !this.groups.get$O(groupName).visible  );
p$1.getObjectSettings.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'buildScene$S$javajs_util_Lst$java_util_Map$java_util_Map', function (name, thisScene, htObjNames, htSecrets) {
var frame=thisScene.get$I(2);
var smap=Clazz.new_($I$(2));
smap.put$TK$TV("pymolFrame", frame);
smap.put$TK$TV("generator", this);
smap.put$TK$TV("name", name);
var view=$I$(5).listAt$javajs_util_Lst$I(thisScene, 0);
if (view != null ) smap.put$TK$TV("pymolView", p$1.getPymolView$javajs_util_Lst$Z.apply(this, [view, false]));
var visibilities=thisScene.get$I(1);
smap.put$TK$TV("visibilities", visibilities);
var sname="_scene_" + name + "_" ;
var reps=Clazz.array(java.lang.Object, [$I$(6).REP_LIST.length]);
for (var j=$I$(6).REP_LIST.length; --j >= 0; ) {
var list=htObjNames.get$O(sname + $I$(6).REP_LIST[j]);
var data=$I$(5).listAt$javajs_util_Lst$I(list, 5);
if (data != null  && data.size$() > 0 ) reps[j]=$I$(5).listToMap$javajs_util_Lst(data);
}
smap.put$TK$TV("moleculeReps", reps);
sname="_!c_" + name + "_" ;
var colorection=$I$(5).listAt$javajs_util_Lst$I(thisScene, 3);
var n=colorection.size$();
n-=n % 2;
var colors=Clazz.array(java.lang.Object, [(n/2|0)]);
for (var j=0, i=0; j < n; j+=2) {
var color=$I$(5).intAt$javajs_util_Lst$I(colorection, j);
var c=htSecrets.get$O(sname + color);
if (c != null  && c.size$() > 1 ) colors[i++]=Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(color), c.get$I(1)]);
}
smap.put$TK$TV("colors", colors);
p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [1073742139, null, smap]).jmolName=name;
});

Clazz.newMeth(C$, ['generateScene$java_util_Map','generateScene$'], function (scene) {
$I$(8).info$S("PyMOLScene - generateScene " + scene.get$O("name"));
this.jmolObjects.clear$();
this.bsHidden.clearAll$();
this.occludedObjects.clear$();
this.htHiddenObjects.clear$();
var frame=scene.get$O("pymolFrame");
this.thisState=frame.intValue$();
p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [4115, null, Integer.valueOf$I(this.thisState - 1)]);
try {
p$1.generateVisibilities$java_util_Map.apply(this, [scene.get$O("visibilities")]);
p$1.generateColors$OA.apply(this, [scene.get$O("colors")]);
p$1.generateShapes$OA.apply(this, [scene.get$O("moleculeReps")]);
this.finalizeVisibility$();
this.offsetObjects$();
p$1.finalizeObjects.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(8).info$S("PyMOLScene exception " + e);
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'generateColors$OA', function (colors) {
if (colors == null ) return;
for (var i=colors.length; --i >= 0; ) {
var item=colors[i];
var color=(item[0]).intValue$();
var icolor=$I$(6).getRGB$I(color);
var molecules=item[1];
var bs=p$1.getSelectionAtoms$javajs_util_Lst$I$javajs_util_BS.apply(this, [molecules, this.thisState, Clazz.new_($I$(1))]);
p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [1140850689, bs, null]).argb=icolor;
}
}, p$1);

Clazz.newMeth(C$, 'processSelection$javajs_util_Lst', function (selection) {
var id=selection.get$I(0).toString();
id="_" + (id.equals$O("sele") ? id : "sele_" + id);
var g=this.getGroup$S(id);
p$1.getSelectionAtoms$javajs_util_Lst$I$javajs_util_BS.apply(this, [$I$(5).listAt$javajs_util_Lst$I(selection, 5), 0, g.bsAtoms]);
});

Clazz.newMeth(C$, 'getSelectionAtoms$javajs_util_Lst$I$javajs_util_BS', function (molecules, istate, bs) {
if (molecules != null ) for (var j=molecules.size$(); --j >= 0; ) p$1.selectAllAtoms$javajs_util_Lst$I$javajs_util_BS.apply(this, [$I$(5).listAt$javajs_util_Lst$I(molecules, j), istate, bs]);

return bs;
}, p$1);

Clazz.newMeth(C$, 'selectAllAtoms$javajs_util_Lst$I$javajs_util_BS', function (obj, istate, bs) {
var name=$I$(5).stringAt$javajs_util_Lst$I(obj, 0);
p$1.setSceneObject$S$I.apply(this, [name, istate]);
var atomList=$I$(5).listAt$javajs_util_Lst$I(obj, 1);
var k0=(istate == 0 ? 1 : istate);
var k1=(istate == 0 ? this.stateCount : istate);
for (var k=k0; k <= k1; k++) {
var atomMap=this.htAtomMap.get$O(p$1.fixName$S.apply(this, [name + "_" + k ]));
if (atomMap == null ) continue;
p$1.getBsAtoms$javajs_util_Lst$IA$javajs_util_BS.apply(this, [atomList, atomMap, bs]);
}
}, p$1);

Clazz.newMeth(C$, 'generateVisibilities$java_util_Map', function (vis) {
if (vis == null ) return;
var bs=Clazz.new_($I$(1));
p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [12294, null, null]);
for (var e, $e = this.groups.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) e.getValue$().visible=true;

for (var e, $e = vis.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var name=e.getKey$();
if (name.equals$O("all")) continue;
var list=e.getValue$();
var tok=($I$(5).intAt$javajs_util_Lst$I(list, 0) == 1 ? 1610625028 : 12294);
if (tok == 12294) this.htHiddenObjects.put$TK$TV(name, $I$(9).TRUE);
switch (p$1.getObjectType$S.apply(this, [name])) {
case 12:
var g=this.groups.get$O(name);
if (g != null ) g.visible=(tok == 1610625028);
break;
}
}
p$1.setGroupVisibilities.apply(this, []);
for (var e, $e = vis.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var name=e.getKey$();
if (name.equals$O("all")) continue;
p$1.setSceneObject$S$I.apply(this, [name, this.thisState]);
if (this.objectHidden) continue;
var list=e.getValue$();
var tok=(this.objectHidden ? 12294 : 1610625028);
bs=null;
var info=this.objectJmolName;
switch (this.objectType) {
case 0:
case 12:
continue;
case 1:
bs=this.vwr.getDefinedAtomSet$S(info);
if (bs.nextSetBit$I(0) < 0) continue;
break;
case 4:
if (tok == 1610625028) {
var mdList=this.htMeasures.get$O(name);
if (mdList != null ) this.addMeasurements$org_jmol_modelset_MeasurementDataA$I$javajs_util_Lst$javajs_util_BS$I$javajs_util_Lst$Z(mdList, mdList[0].points.size$(), null, p$1.getBS$javajs_util_Lst.apply(this, [$I$(5).listAt$javajs_util_Lst$I(list, 2)]), $I$(5).intAt$javajs_util_Lst$I(list, 3), null, true);
}info += "_*";
break;
case 6:
case 3:
case 2:
break;
}
p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [tok, bs, info]);
}
}, p$1);

Clazz.newMeth(C$, 'generateShapes$OA', function (reps) {
if (reps == null ) return;
p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [12295, null, null]).argb=this.thisState - 1;
for (var m=0; m < this.moleculeNames.size$(); m++) {
p$1.setSceneObject$S$I.apply(this, [this.moleculeNames.get$I(m), this.thisState]);
if (this.objectHidden) continue;
var molReps=Clazz.array($I$(1), [23]);
for (var i=0; i < 23; i++) molReps[i]=Clazz.new_($I$(1));

for (var i=reps.length; --i >= 0; ) {
var repMap=reps[i];
var list=(repMap == null  ? null : repMap.get$O(this.objectName));
if (list != null ) p$1.selectAllAtoms$javajs_util_Lst$I$javajs_util_BS.apply(this, [list, this.thisState, molReps[i]]);
}
this.createShapeObjects$javajs_util_BSA$Z$I$I(molReps, true, -1, -1);
}
}, p$1);

Clazz.newMeth(C$, 'getBS$javajs_util_Lst', function (list) {
var bs=Clazz.new_($I$(1));
for (var i=list.size$(); --i >= 0; ) bs.set$I($I$(5).intAt$javajs_util_Lst$I(list, i));

return bs;
}, p$1);

Clazz.newMeth(C$, 'getBsAtoms$javajs_util_Lst$IA$javajs_util_BS', function (list, atomMap, bs) {
for (var i=list.size$(); --i >= 0; ) bs.set$I(atomMap[$I$(5).intAt$javajs_util_Lst$I(list, i)]);

}, p$1);

Clazz.newMeth(C$, 'setReaderObjects$', function () {
p$1.clearReaderData.apply(this, []);
p$1.finalizeObjects.apply(this, []);
if (!this.haveScenes) {
this.uniqueSettings=null;
this.bsUniqueBonds=this.bsStickBonds=this.bsLineBonds=null;
}});

Clazz.newMeth(C$, 'finalizeObjects', function () {
this.vwr.setStringProperty$S$S("defaults", "PyMOL");
for (var i=0; i < this.jmolObjects.size$(); i++) {
try {
var obj=this.jmolObjects.get$I(i);
obj.finalizeObject$org_jmol_adapter_readers_pymol_PyMOLScene$org_jmol_modelset_ModelSet$S$Z(this, this.vwr.ms, this.mepList, this.doCache);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$O(e);
e.printStackTrace$();
} else {
throw e;
}
}
}
p$1.finalizeUniqueBonds.apply(this, []);
this.jmolObjects.clear$();
}, p$1);

Clazz.newMeth(C$, 'offsetObjects$', function () {
for (var i=0, n=this.jmolObjects.size$(); i < n; i++) this.jmolObjects.get$I(i).offset$I$I(this.baseModelIndex, this.baseAtomIndex);

});

Clazz.newMeth(C$, 'getJmolObject$I$javajs_util_BS$O', function (id, bsAtoms, info) {
if (this.baseAtomIndex > 0) bsAtoms=$I$(10).copy$javajs_util_BS(bsAtoms);
return Clazz.new_($I$(11).c$$I$S$javajs_util_BS$O,[id, this.objectNameID, bsAtoms, info]);
}, p$1);

Clazz.newMeth(C$, 'addJmolObject$I$javajs_util_BS$O', function (id, bsAtoms, info) {
return p$1.addObject$org_jmol_adapter_readers_pymol_JmolObject.apply(this, [p$1.getJmolObject$I$javajs_util_BS$O.apply(this, [id, bsAtoms, info])]);
}, p$1);

Clazz.newMeth(C$, 'getPymolView$javajs_util_Lst$Z', function (view, isViewObj) {
var pymolView=Clazz.array(Float.TYPE, [21]);
var depthCue=this.booleanSetting$I(84);
var fog=this.booleanSetting$I(88);
var fog_start=this.floatSetting$I(192);
var pt=0;
var i=0;
for (var j=0; j < 3; j++) pymolView[pt++]=$I$(5).floatAt$javajs_util_Lst$I(view, i++);

if (isViewObj) i++;
for (var j=0; j < 3; j++) pymolView[pt++]=$I$(5).floatAt$javajs_util_Lst$I(view, i++);

if (isViewObj) i++;
for (var j=0; j < 3; j++) pymolView[pt++]=$I$(5).floatAt$javajs_util_Lst$I(view, i++);

if (isViewObj) i+=5;
for (var j=0; j < 8; j++) pymolView[pt++]=$I$(5).floatAt$javajs_util_Lst$I(view, i++);

var isOrtho=this.booleanSetting$I(23);
var fov=this.floatSetting$I(152);
pymolView[pt++]=(isOrtho ? fov : -fov);
pymolView[pt++]=(depthCue ? 1 : 0);
pymolView[pt++]=(fog ? 1 : 0);
pymolView[pt++]=fog_start;
return pymolView;
}, p$1);

Clazz.newMeth(C$, 'globalSetting$I', function (i) {
var setting=$I$(5).listAt$javajs_util_Lst$I(this.settings, i);
if (setting != null  && setting.size$() == 3 ) return (setting.get$I(2)).floatValue$();
return $I$(6).getDefaultSetting$I$I(i, this.pymolVersion);
});

Clazz.newMeth(C$, 'addGroup$javajs_util_Lst$S$I$javajs_util_BS', function (object, parent, type, bsAtoms) {
if (this.groups == null ) this.groups=Clazz.new_($I$(2));
var myGroup=this.getGroup$S(this.objectName);
myGroup.object=object;
myGroup.objectNameID=this.objectNameID;
myGroup.visible=!this.objectHidden;
myGroup.type=type;
if (!myGroup.visible) {
this.occludedObjects.put$TK$TV(this.objectNameID, $I$(9).TRUE);
this.htHiddenObjects.put$TK$TV(this.objectName, $I$(9).TRUE);
}if (parent != null  && parent.length$() != 0 ) this.getGroup$S(parent).addList$org_jmol_adapter_readers_pymol_PyMOLGroup(myGroup);
if (bsAtoms != null ) myGroup.addGroupAtoms$javajs_util_BS(bsAtoms);
return myGroup;
});

Clazz.newMeth(C$, 'getGroup$S', function (name) {
var g=this.groups.get$O(name);
if (g == null ) {
this.groups.put$TK$TV(name, (g=Clazz.new_($I$(12).c$$S,[name])));
p$1.defineAtoms$S$javajs_util_BS.apply(this, [name, g.bsAtoms]);
}return g;
});

Clazz.newMeth(C$, 'finalizeVisibility$', function () {
p$1.setGroupVisibilities.apply(this, []);
if (this.groups != null ) for (var i=this.jmolObjects.size$(); --i >= 0; ) {
var obj=this.jmolObjects.get$I(i);
if (obj.jmolName != null  && this.occludedObjects.containsKey$O(obj.jmolName) ) obj.visible=false;
}
if (!this.bsHidden.isEmpty$()) p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [2097194, this.bsHidden, null]);
});

Clazz.newMeth(C$, 'setCarveSets$java_util_Map', function (htObjNames) {
if (this.htCarveSets.isEmpty$()) return;
for (var e, $e = this.htCarveSets.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) p$1.getSelectionAtoms$javajs_util_Lst$I$javajs_util_BS.apply(this, [$I$(5).listAt$javajs_util_Lst$I(htObjNames.get$O(e.getKey$()), 5), 0, e.getValue$()]);

});

Clazz.newMeth(C$, 'setGroupVisibilities', function () {
if (this.groups == null ) return;
var list=this.groups.values$();
var bsAll=Clazz.new_($I$(1));
for (var g, $g = list.iterator$(); $g.hasNext$()&&((g=($g.next$())),1);) {
bsAll.or$javajs_util_BS(g.bsAtoms);
if (g.parent == null ) p$1.setGroupVisible$org_jmol_adapter_readers_pymol_PyMOLGroup$Z.apply(this, [g, true]);
 else if (g.list.isEmpty$()) g.addGroupAtoms$javajs_util_BS(Clazz.new_($I$(1)));
}
p$1.defineAtoms$S$javajs_util_BS.apply(this, ["all", bsAll]);
}, p$1);

Clazz.newMeth(C$, 'defineAtoms$S$javajs_util_BS', function (name, bs) {
this.htDefinedAtoms.put$TK$TV(p$1.getJmolName$S.apply(this, [name]), bs);
}, p$1);

Clazz.newMeth(C$, 'getJmolName$S', function (name) {
return "__" + p$1.fixName$S.apply(this, [name]);
}, p$1);

Clazz.newMeth(C$, 'createShapeObjects$javajs_util_BSA$Z$I$I', function (reps, allowSurface, ac0, ac) {
if (ac >= 0) {
this.bsAtoms=$I$(10).newBitSet2$I$I(ac0, ac);
var jo;
jo=p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [1140850689, this.bsAtoms, null]);
this.colixes=$I$(13).ensureLengthShort$HA$I(this.colixes, ac);
for (var i=ac; --i >= ac0; ) this.colixes[i]=(this.atomColorList.get$I(i).intValue$()|0);

jo.setColors$HA$F(this.colixes, 0);
jo.setSize$F(0);
jo=p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [1, this.bsAtoms, null]);
jo.setSize$F(0);
}p$1.createShapeObject$I$javajs_util_BS.apply(this, [7, reps[7]]);
p$1.createShapeObject$I$javajs_util_BS.apply(this, [0, reps[0]]);
p$1.fixReps$javajs_util_BSA.apply(this, [reps]);
p$1.createSpacefillObjects.apply(this, []);
for (var i=0; i < 23; i++) switch (i) {
case 7:
case 0:
continue;
case 8:
case 2:
if (!allowSurface) continue;
switch (this.surfaceMode) {
case 0:
reps[i].andNot$javajs_util_BS(this.bsNoSurface);
break;
case 1:
case 3:
break;
case 2:
case 4:
reps[i].andNot$javajs_util_BS(this.bsHydrogen);
break;
}
default:
p$1.createShapeObject$I$javajs_util_BS.apply(this, [i, reps[i]]);
continue;
}

this.bsAtoms=null;
});

Clazz.newMeth(C$, 'addLabel$I$I$I$FA$S', function (atomIndex, uniqueID, atomColor, labelPos, label) {
var icolor=(this.getUniqueFloatDef$I$I$F(uniqueID, 66, this.labelColor)|0);
if (icolor == -7 || icolor == -6 ) {
} else if (icolor < 0) {
icolor=atomColor;
}if (labelPos == null ) {
var offset=this.getUniquePoint$I$I$javajs_util_P3(uniqueID, 471, null);
if (offset == null ) offset=this.labelPosition;
 else offset.add$javajs_util_T3(this.labelPosition);
this.setLabelPosition$javajs_util_P3$FA(offset, labelPos);
}this.labels.put$TK$TV(Integer.valueOf$I(atomIndex), p$1.newTextLabel$S$FA$I$I$F.apply(this, [label, labelPos, icolor, this.labelFontId, this.labelSize]));
});

Clazz.newMeth(C$, 'getUniqueFloatDef$I$I$F', function (id, key, defaultValue) {
var setting;
if (id <= 0 || (setting=this.uniqueSettings.get$O(Integer.valueOf$I((id << 10) + key))) == null  ) return defaultValue;
var v=(setting.get$I(2)).floatValue$();
if ($I$(8).debugging) $I$(8).debug$S("Pymol unique setting for " + id + ": [" + key + "] = " + new Float(v).toString() );
return v;
});

Clazz.newMeth(C$, 'getUniquePoint$I$I$javajs_util_P3', function (id, key, pt) {
var setting;
if (id <= 0 || (setting=this.uniqueSettings.get$O(Integer.valueOf$I((id << 10) + key))) == null  ) return pt;
pt=Clazz.new_($I$(4));
$I$(5).pointAt$javajs_util_Lst$I$javajs_util_P3(setting.get$I(2), 0, pt);
$I$(8).info$S("Pymol unique setting for " + id + ": " + key + " = " + pt );
return pt;
});

Clazz.newMeth(C$, 'getObjectSetting$I', function (i) {
return this.objectSettings.get$O(Integer.valueOf$I(i));
});

Clazz.newMeth(C$, 'booleanSetting$I', function (i) {
return (this.floatSetting$I(i) != 0 );
});

Clazz.newMeth(C$, 'floatSetting$I', function (i) {
var setting=p$1.getSetting$I.apply(this, [i]);
if (setting != null  && setting.size$() == 3 ) return (setting.get$I(2)).floatValue$();
return $I$(6).getDefaultSetting$I$I(i, this.pymolVersion);
});

Clazz.newMeth(C$, 'stringSetting$I', function (i) {
var setting=p$1.getSetting$I.apply(this, [i]);
if (setting != null  && setting.size$() == 3 ) return setting.get$I(2).toString();
return $I$(6).getDefaultSettingS$I$I(i, this.pymolVersion);
});

Clazz.newMeth(C$, 'getSetting$I', function (i) {
var setting=null;
if (this.stateSettings != null ) setting=this.stateSettings.get$O(Integer.valueOf$I(i));
if (setting == null  && this.objectSettings != null  ) setting=this.objectSettings.get$O(Integer.valueOf$I(i));
if (setting == null  && i < this.settings.size$() ) setting=this.settings.get$I(i);
return setting;
}, p$1);

Clazz.newMeth(C$, 'setLabelPosition$javajs_util_P3$FA', function (offset, labelPos) {
labelPos[0]=1;
labelPos[1]=offset.x;
labelPos[2]=offset.y;
labelPos[3]=offset.z;
return labelPos;
});

Clazz.newMeth(C$, 'addCGO$javajs_util_Lst$I', function (data, color) {
data.addLast$TV(this.objectName);
var jo=p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [23, null, data]);
jo.argb=color;
jo.translucency=this.floatSetting$I(441);
return p$1.fixName$S.apply(this, [this.objectName]);
});

Clazz.newMeth(C$, 'addMeasurements$org_jmol_modelset_MeasurementDataA$I$javajs_util_Lst$javajs_util_BS$I$javajs_util_Lst$Z', function (mdList, nCoord, list, bsReps, color, offsets, haveLabels) {
var isNew=(mdList == null );
var n=(isNew ? (list.size$()/3 / nCoord |0) : mdList.length);
if (n == 0) return false;
var drawLabel=haveLabels && bsReps.get$I(3) ;
var drawDashes=bsReps.get$I(10);
var rad=this.floatSetting$I(107) / 20;
if (rad == 0 ) rad=0.05;
if (!drawDashes) rad=-5.0E-4;
if (color < 0) color=(this.floatSetting$I(574)|0);
var c=$I$(6).getRGB$I(color);
var colix=$I$(14).getColix$I(c);
var clabel=(this.labelColor < 0 ? color : this.labelColor);
if (isNew) {
mdList=Clazz.array($I$(15), [n]);
this.htMeasures.put$TK$TV(this.objectName, mdList);
}var bs=$I$(10).newAndSetBit$I(0);
for (var index=0, p=0; index < n; index++) {
var md;
var offset;
if (isNew) {
var points=Clazz.new_($I$(3));
for (var i=0; i < nCoord; i++, p+=3) points.addLast$TV($I$(5).pointAt$javajs_util_Lst$I$javajs_util_P3(list, p, Clazz.new_($I$(16))));

offset=$I$(5).floatsAt$javajs_util_Lst$I$FA$I($I$(5).listAt$javajs_util_Lst$I(offsets, index), 0, Clazz.array(Float.TYPE, [7]), 7);
if (offset == null ) offset=this.setLabelPosition$javajs_util_P3$FA(this.labelPosition, Clazz.array(Float.TYPE, [7]));
md=mdList[index]=this.vwr.newMeasurementData$S$javajs_util_Lst(this.objectNameID + "_" + (index + 1) , points);
md.note=this.objectName;
} else {
md=mdList[index];
offset=md.text.pymolOffset;
}var nDigits=(this.floatSetting$I(C$.MEAS_DIGITS[nCoord - 2])|0);
var strFormat=nCoord + ": " + (drawLabel ? "%0." + (nDigits < 0 ? 1 : nDigits) + "VALUE"  : "") ;
var text=p$1.newTextLabel$S$FA$I$I$F.apply(this, [strFormat, offset, clabel, (this.floatSetting$I(328)|0), this.floatSetting$I(453)]);
md.set$I$java_util_Map$org_jmol_atomdata_RadiusData$S$S$org_jmol_modelset_TickInfo$Z$Z$Boolean$Z$I$H$org_jmol_modelset_Text(12290, null, null, strFormat, "angstroms", null, false, false, null, false, ((rad * 2000)|0), colix, text);
p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [6, bs, md]);
}
return true;
});

Clazz.newMeth(C$, 'getViewScript$javajs_util_Lst', function (view) {
var sb=Clazz.new_($I$(17));
var pymolView=p$1.getPymolView$javajs_util_Lst$Z.apply(this, [view, true]);
sb.append$S(";set translucent " + (this.globalSetting$I(213) != 2 ) + ";set zshadePower 1;set traceAlpha " + (this.globalSetting$I(111) != 0 ) );
var rockets=this.cartoonRockets;
sb.append$S(";set cartoonRockets " + rockets);
if (rockets) sb.append$S(";set rocketBarrels " + rockets);
sb.append$S(";set cartoonLadders " + this.haveNucleicLadder);
sb.append$S(";set ribbonBorder " + (this.globalSetting$I(118) != 0 ));
sb.append$S(";set cartoonFancy " + (this.globalSetting$I(118) == 0 ));
var s="000000" + Integer.toHexString$I(this.bgRgb & 16777215);
s="[x" + s.substring$I(s.length$() - 6) + "]" ;
sb.append$S(";background " + s);
sb.append$S(";moveto 0 PyMOL " + $I$(18).eAF$FA(pymolView));
sb.append$S(";save orientation \'default\';");
return sb;
});

Clazz.newMeth(C$, 'getColix$I$F', function (colorIndex, translucency) {
var colix=(colorIndex == -7 ? ($I$(14).getBgContrast$I(this.bgRgb) == 8 ? 4 : 8) : colorIndex == -6 ? $I$(14).getBgContrast$I(this.bgRgb) : $I$(14).getColixO$O(Integer.valueOf$I($I$(6).getRGB$I(colorIndex))));
return $I$(14).getColixTranslucent3$H$Z$F(colix, translucency > 0 , translucency);
});

Clazz.newMeth(C$, 'setAtomColor$I', function (atomColor) {
this.atomColorList.addLast$TV(Integer.valueOf$I(this.getColix$I$F(atomColor, 0)));
});

Clazz.newMeth(C$, 'setFrameObject$I$O', function (type, info) {
if (info != null ) {
this.frameObj=p$1.getJmolObject$I$javajs_util_BS$O.apply(this, [type, null, info]);
return;
}if (this.frameObj == null ) return;
this.frameObj.finalizeObject$org_jmol_adapter_readers_pymol_PyMOLScene$org_jmol_modelset_ModelSet$S$Z(this, this.vwr.ms, null, false);
this.frameObj=null;
});

Clazz.newMeth(C$, 'fixName$S', function (name) {
var chars=name.toLowerCase$().toCharArray$();
for (var i=chars.length; --i >= 0; ) if (!$I$(19).isLetterOrDigit$C(chars[i])) chars[i]="_";

return String.valueOf$CA(chars);
}, p$1);

Clazz.newMeth(C$, 'getObjectID$S', function (name) {
return this.objectInfo.get$O(name)[0];
});

Clazz.newMeth(C$, 'getObjectType$S', function (name) {
var o=this.objectInfo.get$O(name);
return (o == null  ? 0 : (o[1]).intValue$());
}, p$1);

Clazz.newMeth(C$, 'setAtomMap$IA$I', function (atomMap, ac0) {
this.htAtomMap.put$TK$TV(this.objectNameID, atomMap);
var bsAtoms=this.htDefinedAtoms.get$O(this.objectJmolName);
if (bsAtoms == null ) {
bsAtoms=$I$(1).newN$I(ac0 + atomMap.length);
$I$(8).info$S("PyMOL molecule " + this.objectName);
this.htDefinedAtoms.put$TK$TV(this.objectJmolName, bsAtoms);
this.htObjectAtoms.put$TK$TV(this.objectName, bsAtoms);
this.moleculeNames.addLast$TV(this.objectName);
}return bsAtoms;
});

Clazz.newMeth(C$, 'newTextLabel$S$FA$I$I$F', function (label, labelOffset, colorIndex, fontID, fontSize) {
var face;
var factor=1.0;
switch (fontID) {
default:
case 11:
case 12:
case 13:
case 14:
face="SansSerif";
break;
case 0:
case 1:
face="Monospaced";
break;
case 9:
case 10:
case 15:
case 16:
case 17:
case 18:
face="Serif";
break;
}
var style;
switch (fontID) {
default:
style="Plain";
break;
case 6:
case 12:
case 16:
case 17:
style="Italic";
break;
case 7:
case 10:
case 13:
style="Bold";
break;
case 8:
case 14:
case 18:
style="BoldItalic";
break;
}
var font=this.vwr.getFont3D$S$S$F(face, style, fontSize == 0  ? 12 : fontSize * factor);
var t=$I$(20).newLabel$org_jmol_viewer_Viewer$javajs_awt_Font$S$H$H$I$F(this.vwr, font, label, this.getColix$I$F(colorIndex, 0), 0, 0, 0);
if (t != null ) t.pymolOffset=labelOffset;
return t;
}, p$1);

Clazz.newMeth(C$, 'setVersionSettings', function () {
if (this.pymolVersion < 100) {
p$1.addSetting$I$I$O.apply(this, [550, 2, Integer.valueOf$I(0)]);
p$1.addSetting$I$I$O.apply(this, [529, 2, Integer.valueOf$I(2)]);
p$1.addSetting$I$I$O.apply(this, [471, 4, Clazz.array(Double.TYPE, -1, [1, 1, 0])]);
if (this.pymolVersion < 99) {
p$1.addSetting$I$I$O.apply(this, [448, 2, Integer.valueOf$I(0)]);
p$1.addSetting$I$I$O.apply(this, [431, 2, Integer.valueOf$I(0)]);
p$1.addSetting$I$I$O.apply(this, [361, 2, Integer.valueOf$I(1)]);
}}}, p$1);

Clazz.newMeth(C$, 'addSetting$I$I$O', function (key, type, val) {
var settingCount=this.settings.size$();
if (settingCount <= key) for (var i=key + 1; --i >= settingCount; ) this.settings.addLast$TV(null);

if (type == 4) {
var d=val;
var list;
val=list=Clazz.new_($I$(3));
for (var i=0; i < 3; i++) list.addLast$TV(Double.valueOf$D(d[i]));

}var setting=Clazz.new_($I$(3));
setting.addLast$TV(Integer.valueOf$I(key));
setting.addLast$TV(Integer.valueOf$I(type));
setting.addLast$TV(val);
this.settings.set$I$TE(key, setting);
}, p$1);

Clazz.newMeth(C$, 'fixReps$javajs_util_BSA', function (reps) {
this.htSpacefill.clear$();
this.bsCartoon.clearAll$();
for (var iAtom=this.bsAtoms.nextSetBit$I(0); iAtom >= 0; iAtom=this.bsAtoms.nextSetBit$I(iAtom + 1)) {
var rad=0;
var uniqueID=(this.reader == null  ? this.uniqueIDs[iAtom] : this.reader.getUniqueID$I(iAtom));
if (reps[1].get$I(iAtom)) {
rad=(this.reader == null  ? this.radii[iAtom] : this.reader.getVDW$I(iAtom)) * this.getUniqueFloatDef$I$I$F(uniqueID, 155, this.sphereScale);
} else if (reps[4].get$I(iAtom)) {
rad=this.nonbondedSize;
}if (rad != 0 ) {
var r=Float.valueOf$F(rad);
var bsr=this.htSpacefill.get$O(r);
if (bsr == null ) this.htSpacefill.put$TK$TV(r, bsr=Clazz.new_($I$(1)));
bsr.set$I(iAtom);
}var cartoonType=(this.reader == null  ? this.cartoonTypes[iAtom] : this.reader.getCartoonType$I(iAtom));
if (reps[5].get$I(iAtom)) {
switch (cartoonType) {
case 1:
case 4:
reps[21].set$I(iAtom);
case -1:
reps[5].clear$I(iAtom);
this.bsCartoon.clear$I(iAtom);
break;
case 7:
reps[22].set$I(iAtom);
reps[5].clear$I(iAtom);
this.bsCartoon.clear$I(iAtom);
break;
default:
this.bsCartoon.set$I(iAtom);
}
}}
reps[5].and$javajs_util_BS(this.bsCartoon);
p$1.cleanSingletons$javajs_util_BS.apply(this, [reps[5]]);
p$1.cleanSingletons$javajs_util_BS.apply(this, [reps[6]]);
p$1.cleanSingletons$javajs_util_BS.apply(this, [reps[21]]);
p$1.cleanSingletons$javajs_util_BS.apply(this, [reps[22]]);
this.bsCartoon.and$javajs_util_BS(reps[5]);
}, p$1);

Clazz.newMeth(C$, 'cleanSingletons$javajs_util_BS', function (bs) {
if (bs.isEmpty$()) return;
bs.and$javajs_util_BS(this.bsAtoms);
var bsr=Clazz.new_($I$(1));
var n=bs.length$();
var pass=0;
while (true){
for (var i=0, offset=0, iPrev=-2147483648, iSeqLast=-2147483648, iSeq=-2147483648; i < n; i++) {
if (iPrev < 0 || (this.reader == null  ? this.newChain[i] : this.reader.compareAtoms$I$I(iPrev, i)) ) offset++;
iSeq=(this.reader == null  ? this.sequenceNumbers[i] : this.reader.getSequenceNumber$I(i));
if (iSeq != iSeqLast) {
iSeqLast=iSeq;
offset++;
}if (pass == 0) {
if (bs.get$I(i)) bsr.set$I(offset);
} else if (!bsr.get$I(offset)) bs.clear$I(i);
iPrev=i;
}
if (++pass == 2) break;
var bsnot=Clazz.new_($I$(1));
for (var i=bsr.nextSetBit$I(0); i >= 0; i=bsr.nextSetBit$I(i + 1)) if (!bsr.get$I(i - 1) && !bsr.get$I(i + 1) ) bsnot.set$I(i);

bsr.andNot$javajs_util_BS(bsnot);
}
}, p$1);

Clazz.newMeth(C$, 'createShapeObject$I$javajs_util_BS', function (shapeID, bs) {
if (bs.isEmpty$()) return;
var jo=null;
switch (shapeID) {
case 11:
bs.and$javajs_util_BS(this.bsNonbonded);
if (bs.isEmpty$()) return;
p$1.setUniqueObjects$I$javajs_util_BS$I$I$I$F$I$F$F.apply(this, [7, bs, 0, 0, 524, this.nonbondedTranslucency, 0, this.nonbondedSize, 0.5]);
break;
case 4:
case 1:
p$1.setUniqueObjects$I$javajs_util_BS$I$I$I$F$I$F$F.apply(this, [0, bs, 173, this.sphereColor, 172, this.sphereTranslucency, 155, this.sphereScale, 1]);
break;
case 19:
var ellipsoidTranslucency=this.floatSetting$I(571);
var ellipsoidColor=(this.floatSetting$I(570)|0);
var ellipsoidScale=this.floatSetting$I(569);
p$1.setUniqueObjects$I$javajs_util_BS$I$I$I$F$I$F$F.apply(this, [20, bs, 570, ellipsoidColor, 571, ellipsoidTranslucency, 569, ellipsoidScale, 50]);
break;
case 9:
p$1.setUniqueObjects$I$javajs_util_BS$I$I$I$F$I$F$F.apply(this, [16, bs, 210, this.dotColor, 0, 0, 155, this.sphereScale, 1]);
break;
case 2:
var withinDistance=this.floatSetting$I(344);
jo=p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [135180, bs, Clazz.array(java.lang.Object, -1, [this.booleanSetting$I(156) ? "FULLYLIT" : "FRONTLIT", (this.surfaceMode == 3 || this.surfaceMode == 4 ) ? " only" : "", this.bsCarve, Float.valueOf$F(withinDistance)])]);
jo.setSize$F(this.floatSetting$I(4) * (this.solventAccessible ? -1 : 1));
jo.translucency=this.transparency;
if (this.surfaceColor >= 0) jo.argb=$I$(6).getRGB$I(this.surfaceColor);
jo.modelIndex=this.currentAtomSetIndex;
jo.cacheID=this.surfaceInfoName;
p$1.setUniqueObjects$I$javajs_util_BS$I$I$I$F$I$F$F.apply(this, [24, bs, 144, this.surfaceColor, 138, this.transparency, 0, 0, 0]);
break;
case 8:
jo=p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [135180, bs, null]);
jo.setSize$F(this.floatSetting$I(4));
jo.translucency=this.transparency;
p$1.setUniqueObjects$I$javajs_util_BS$I$I$I$F$I$F$F.apply(this, [24, bs, 144, this.surfaceColor, 138, this.transparency, 0, 0, 0]);
break;
case 3:
bs.and$javajs_util_BS(this.bsLabeled);
if (bs.isEmpty$()) return;
jo=p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [5, bs, this.labels]);
break;
case 10:
case 7:
jo=p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [659488, bs, null]);
jo.setSize$F(this.floatSetting$I(44) / 15);
var color=(this.floatSetting$I(526)|0);
if (color >= 0) jo.argb=$I$(6).getRGB$I(color);
break;
case 0:
jo=p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [1, bs, null]);
jo.setSize$F(this.floatSetting$I(21) * 2);
jo.translucency=this.stickTranslucency;
var col=(this.floatSetting$I(376)|0);
if (col >= 0) jo.argb=$I$(6).getRGB$I(col);
break;
case 5:
p$1.createCartoonObject$S$I.apply(this, ["H", (this.cartoonRockets ? 181 : 100)]);
p$1.createCartoonObject$S$I.apply(this, ["S", 96]);
p$1.createCartoonObject$S$I.apply(this, ["L", 92]);
p$1.createCartoonObject$S$I.apply(this, [" ", 92]);
break;
case 22:
p$1.createPuttyObject$javajs_util_BS.apply(this, [bs]);
break;
case 21:
p$1.createTraceObject$javajs_util_BS.apply(this, [bs]);
break;
case 6:
p$1.createRibbonObject$javajs_util_BS.apply(this, [bs]);
break;
default:
$I$(8).error$S("Unprocessed representation type " + shapeID);
}
}, p$1);

Clazz.newMeth(C$, 'setUniqueObjects$I$javajs_util_BS$I$I$I$F$I$F$F', function (shape, bs, setColor, color, setTrans, trans, setSize, size, f) {
var n=bs.cardinality$();
var colixes=(setColor == 0 ? null : Clazz.array(Short.TYPE, [n]));
var atrans=(setTrans == 0 ? null : Clazz.array(Float.TYPE, [n]));
var sizes=Clazz.array(Float.TYPE, [n]);
for (var pt=0, i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1), pt++) {
var id=(this.reader == null  ? this.uniqueIDs[i] : this.reader.getUniqueID$I(i));
if (colixes != null ) {
var c=(this.getUniqueFloatDef$I$I$F(id, setColor, color)|0);
if (c > 0) colixes[pt]=this.getColix$I$F(c, 0);
}if (atrans != null ) {
atrans[pt]=this.getUniqueFloatDef$I$I$F(id, setTrans, trans);
}sizes[pt]=this.getUniqueFloatDef$I$I$F(id, setSize, size) * f;
}
return p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [shape, bs, Clazz.array(java.lang.Object, -1, [colixes, atrans, sizes])]);
}, p$1);

Clazz.newMeth(C$, 'createSpacefillObjects', function () {
for (var e, $e = this.htSpacefill.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var r=e.getKey$().floatValue$();
var bs=e.getValue$();
p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [1140850689, bs, null]).rd=Clazz.new_($I$(21).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW,[null, r, $I$(22).ABSOLUTE, $I$(23).AUTO]);
}
this.htSpacefill.clear$();
}, p$1);

Clazz.newMeth(C$, 'createTraceObject$javajs_util_BS', function (bs) {
p$1.checkNucleicObject$javajs_util_BS$Z.apply(this, [bs, true]);
if (bs.isEmpty$()) return;
var r=this.floatSetting$I(103);
var jo=p$1.setUniqueObjects$I$javajs_util_BS$I$I$I$F$I$F$F.apply(this, [10, bs, 236, this.cartoonColor, 0, 0, 0, 0, 0]);
jo.setSize$F(r * 2);
jo.translucency=this.cartoonTranslucency;
}, p$1);

Clazz.newMeth(C$, 'checkNucleicObject$javajs_util_BS$Z', function (bs, isTrace) {
var jo;
var bsNuc=$I$(10).copy$javajs_util_BS(this.bsNucleic);
bsNuc.and$javajs_util_BS(bs);
if (!bsNuc.isEmpty$()) {
if (isTrace && this.cartoonLadderMode ) this.haveNucleicLadder=true;
jo=p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [11, bsNuc, null]);
jo.translucency=this.cartoonTranslucency;
jo.setSize$F(this.floatSetting$I(103) * 2);
bs.andNot$javajs_util_BS(bsNuc);
}}, p$1);

Clazz.newMeth(C$, 'createPuttyObject$javajs_util_BS', function (bs) {
var info=Clazz.array(Float.TYPE, -1, [this.floatSetting$I(378), this.floatSetting$I(377), this.floatSetting$I(382), this.floatSetting$I(379), this.floatSetting$I(380), this.floatSetting$I(381), this.floatSetting$I(581)]);
p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [1112152078, bs, info]).translucency=this.cartoonTranslucency;
}, p$1);

Clazz.newMeth(C$, 'createRibbonObject$javajs_util_BS', function (bs) {
var isTrace=(this.floatSetting$I(19) > 1 );
var r=this.floatSetting$I(20) * 2;
var rayScale=this.floatSetting$I(327);
if (r == 0 ) r=this.floatSetting$I(106) * (isTrace ? 1 : (rayScale <= 1  ? 0.5 : rayScale)) * 0.1 ;
var jo=p$1.setUniqueObjects$I$javajs_util_BS$I$I$I$F$I$F$F.apply(this, [(isTrace ? 10 : 9), bs, 235, this.ribbonColor, 0, 0, 0, 0, 0]);
jo.setSize$F(r);
jo.translucency=this.ribbonTranslucency;
}, p$1);

Clazz.newMeth(C$, 'createCartoonObject$S$I', function (key, sizeID) {
var bs=$I$(10).copy$javajs_util_BS(this.ssMapAtom.get$O(key));
if (bs == null ) return;
bs.and$javajs_util_BS(this.bsCartoon);
if (bs.isEmpty$()) return;
if (key.equals$O(" ")) {
p$1.checkNucleicObject$javajs_util_BS$Z.apply(this, [bs, false]);
if (bs.isEmpty$()) return;
}var jo=p$1.setUniqueObjects$I$javajs_util_BS$I$I$I$F$I$F$F.apply(this, [11, bs, 236, this.cartoonColor, 0, 0, 0, 0, 0]);
jo.setSize$F(this.floatSetting$I(sizeID) * 2);
jo.translucency=this.cartoonTranslucency;
}, p$1);

Clazz.newMeth(C$, 'addObject$org_jmol_adapter_readers_pymol_JmolObject', function (obj) {
this.jmolObjects.addLast$TV(obj);
return obj;
}, p$1);

Clazz.newMeth(C$, 'setGroupVisible$org_jmol_adapter_readers_pymol_PyMOLGroup$Z', function (g, parentVis) {
var vis=parentVis && g.visible ;
if (vis) return;
g.visible=false;
this.occludedObjects.put$TK$TV(g.objectNameID, $I$(9).TRUE);
this.htHiddenObjects.put$TK$TV(g.name, $I$(9).TRUE);
switch (g.type) {
case 1:
this.bsHidden.or$javajs_util_BS(g.bsAtoms);
break;
default:
g.occluded=true;
break;
}
for (var gg, $gg = g.list.values$().iterator$(); $gg.hasNext$()&&((gg=($gg.next$())),1);) {
p$1.setGroupVisible$org_jmol_adapter_readers_pymol_PyMOLGroup$Z.apply(this, [gg, vis]);
}
}, p$1);

Clazz.newMeth(C$, 'getSSMapAtom$S', function (ssType) {
var bs=this.ssMapAtom.get$O(ssType);
if (bs == null ) this.ssMapAtom.put$TK$TV(ssType, bs=Clazz.new_($I$(1)));
return bs;
});

Clazz.newMeth(C$, 'setAtomDefs$', function () {
p$1.setGroupVisibilities.apply(this, []);
var defs=Clazz.new_($I$(2));
for (var e, $e = this.htDefinedAtoms.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var bs=e.getValue$();
if (!bs.isEmpty$()) defs.put$TK$TV(e.getKey$(), bs);
}
p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [12290, null, defs]);
return defs;
});

Clazz.newMeth(C$, 'needSelections$', function () {
return this.haveScenes || !this.htCarveSets.isEmpty$() ;
});

Clazz.newMeth(C$, 'setUniqueBonds$javajs_util_BS$Z', function (bsBonds, isSticks) {
if (isSticks) {
this.bsStickBonds.or$javajs_util_BS(bsBonds);
this.bsStickBonds.andNot$javajs_util_BS(this.bsLineBonds);
} else {
this.bsLineBonds.or$javajs_util_BS(bsBonds);
this.bsLineBonds.andNot$javajs_util_BS(this.bsStickBonds);
}});

Clazz.newMeth(C$, 'finalizeUniqueBonds', function () {
if (this.uniqueList == null ) return;
var bondCount=this.vwr.ms.bondCount;
var bonds=this.vwr.ms.bo;
for (var i=this.bsUniqueBonds.nextSetBit$I(0); i >= 0; i=this.bsUniqueBonds.nextSetBit$I(i + 1)) {
var rad=NaN;
var id=this.uniqueList.get$O(Integer.valueOf$I(i)).intValue$();
if (this.bsLineBonds.get$I(i)) {
rad=this.getUniqueFloatDef$I$I$F(id, 44, NaN) / 30;
} else if (this.bsStickBonds.get$I(i)) {
rad=this.getUniqueFloatDef$I$I$F(id, 21, NaN);
}var c=(this.getUniqueFloatDef$I$I$F(id, 376, 2147483647)|0);
if (c != 2147483647) c=$I$(6).getRGB$I(c);
var valence=this.getUniqueFloatDef$I$I$F(id, 64, NaN);
var t=this.getUniqueFloatDef$I$I$F(id, 198, NaN);
if (i < 0 || i >= bondCount ) return;
var b=bonds[i];
this.setBondParameters$org_jmol_modelset_Bond$I$F$F$I$F(b, this.thisState - 1, rad, valence, c, t);
}
}, p$1);

Clazz.newMeth(C$, 'setBondParameters$org_jmol_modelset_Bond$I$F$F$I$F', function (b, modelIndex, rad, pymolValence, argb, trans) {
if (modelIndex >= 0 && b.atom1.mi != modelIndex ) return;
if (!Float.isNaN$F(rad)) b.mad=($s$[0] = (rad * 2000), $s$[0]);
var colix=b.colix;
if (argb != 2147483647) colix=$I$(14).getColix$I(argb);
if (!Float.isNaN$F(trans)) b.colix=$I$(14).getColixTranslucent3$H$Z$F(colix, trans != 0 , trans);
 else if (b.colix != colix) b.colix=$I$(14).copyColixTranslucency$H$H(b.colix, colix);
if (pymolValence == 1 ) b.order|=98304;
 else if (pymolValence == 0 ) b.order|=65536;
});

Clazz.newMeth(C$, 'addMesh$I$javajs_util_Lst$S$Z', function (tok, obj, objName, isMep) {
var jo=p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [tok, null, obj]);
p$1.setSceneObject$S$I.apply(this, [objName, -1]);
var meshColor=(this.floatSetting$I(146)|0);
if (meshColor < 0) meshColor=$I$(5).intAt$javajs_util_Lst$I($I$(5).listAt$javajs_util_Lst$I(obj, 0), 2);
if (!isMep) {
jo.setSize$F(this.meshWidth);
jo.argb=$I$(6).getRGB$I(meshColor);
}jo.translucency=this.transparency;
jo.cacheID=this.surfaceInfoName;
});

Clazz.newMeth(C$, 'addIsosurface$S', function (objectName) {
var jo=p$1.addJmolObject$I$javajs_util_BS$O.apply(this, [135180, null, objectName]);
jo.cacheID=this.surfaceInfoName;
return jo;
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
