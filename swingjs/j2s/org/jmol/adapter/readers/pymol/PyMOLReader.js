(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.pymol"),p$1={},I$=[[0,'javajs.util.BS','javajs.util.P3','Boolean','javajs.util.Lst','org.jmol.util.Logger','org.jmol.adapter.readers.pymol.PickleReader','org.jmol.util.BSUtil','org.jmol.adapter.readers.pymol.PyMOLScene','javajs.util.PT','java.util.Hashtable','org.jmol.adapter.readers.pymol.PyMOL','javajs.util.AU','javajs.util.BC','org.jmol.adapter.smarter.Bond','org.jmol.adapter.smarter.Atom','org.jmol.util.BoxInfo','javajs.util.V3','org.jmol.c.STR','org.jmol.adapter.smarter.Structure','javajs.util.CU']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PyMOLReader", null, 'org.jmol.adapter.readers.pdb.PdbReader', 'org.jmol.api.PymolAtomReader');
C$.nucleic=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.nucleic=" A C G T U ADE THY CYT GUA URI DA DC DG DT DU ";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.allowSurface=false;
this.doResize=false;
this.doCache=false;
this.isStateScript=false;
this.sourcePNGJ=false;
this.ac0=0;
this.$ac=0;
this.stateCount=0;
this.structureCount=0;
this.isHidden=false;
this.bsStructureDefined=null;
this.bsBytesExcluded=null;
this.atomMap=null;
this.ssMapSeq=null;
this.pymolScene=null;
this.xyzMin=null;
this.xyzMax=null;
this.nModels=0;
this.logging=false;
this.reps=null;
this.isMovie=false;
this.pymolFrame=0;
this.allStates=false;
this.totalAtomCount=0;
this.pymolVersion=0;
this.trajectoryStep=null;
this.trajectoryPtr=0;
this.objectName=null;
this.volumeData=null;
this.mapObjects=null;
this.haveMeasurements=false;
this.frames=null;
this.uniqueSettings=null;
this.atoms=null;
this.haveScenes=false;
this.baseModelIndex=0;
this.sceneOrder=null;
this.bondCount=0;
this.haveBinaryArrays=false;
this.ptTemp=null;
this.aTemp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.allowSurface=true;
this.bsStructureDefined=Clazz.new_($I$(1));
this.xyzMin=$I$(2).new3$F$F$F(1000000.0, 1000000.0, 1000000.0);
this.xyzMax=$I$(2).new3$F$F$F(-1000000.0, -1000000.0, -1000000.0);
this.reps=Clazz.array($I$(1), [23]);
this.haveBinaryArrays=true;
this.ptTemp=Clazz.new_($I$(2));
this.aTemp=Clazz.array(Byte.TYPE, [16]);
}, 1);

Clazz.newMeth(C$, 'setup$S$java_util_Map$O', function (fullPath, htParams, reader) {
this.isBinary=this.mustFinalizeModelSet=true;
this.setupASCR$S$java_util_Map$O(fullPath, htParams, reader);
});

Clazz.newMeth(C$, 'initializeReader$', function () {
this.baseAtomIndex=(this.htParams.get$O("baseAtomIndex")).intValue$();
this.baseModelIndex=(this.htParams.get$O("baseModelIndex")).intValue$();
this.asc.setInfo$S$O("noAutoBond", $I$(3).TRUE);
this.asc.setCurrentModelInfo$S$O("pdbNoHydrogens", $I$(3).TRUE);
this.asc.setInfo$S$O("isPyMOL", $I$(3).TRUE);
if (this.isTrajectory) this.trajectorySteps=Clazz.new_($I$(4));
this.isStateScript=this.htParams.containsKey$O("isStateScript");
this.sourcePNGJ=this.htParams.containsKey$O("sourcePNGJ");
this.doResize=this.checkFilterKey$S("DORESIZE");
this.allowSurface=!this.checkFilterKey$S("NOSURFACE");
this.doCache=this.checkFilterKey$S("DOCACHE");
if (this.doCache && this.sourcePNGJ ) this.doCache=false;
 else if (this.sourcePNGJ && !this.doCache ) this.sourcePNGJ=false;
if (this.doCache) this.bsBytesExcluded=Clazz.new_($I$(1));
C$.superclazz.prototype.initializeReader$.apply(this, []);
});

Clazz.newMeth(C$, 'processBinaryDocument$', function () {
var logFile=this.vwr.getLogFileName$();
this.logging=(logFile.length$() > 0);
$I$(5).info$S(this.logging ? "PyMOL (1) file data streaming to " + logFile : "To view raw PyMOL file data, use \'set logFile \"some_filename\" ");
var reader=Clazz.new_($I$(6).c$$javajs_api_GenericBinaryDocument$org_jmol_viewer_Viewer,[this.binaryDoc, this.vwr]);
var map=reader.getMap$Z(this.logging && $I$(5).debuggingHigh );
reader=null;
p$1.process$java_util_Map.apply(this, [map]);
});

Clazz.newMeth(C$, 'setAdditionalAtomParameters$org_jmol_adapter_smarter_Atom', function (atom) {
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.finalizeReaderPDB$();
this.asc.setTensors$();
});

Clazz.newMeth(C$, 'finalizeModelSet$', function () {
this.pymolScene.setReaderObjects$();
if (this.haveMeasurements) {
this.appendLoadNote$S(this.vwr.getMeasurementInfoAsString$());
this.setLoadNote$();
}if (this.haveScenes) {
var scenes=Clazz.array(String, [this.sceneOrder.size$()]);
for (var i=scenes.length; --i >= 0; ) scenes[i]=C$.stringAt$javajs_util_Lst$I(this.sceneOrder, i);

this.vwr.ms.msInfo.put$TK$TV("scenes", scenes);
}this.vwr.ms.setTrajectoryBs$javajs_util_BS($I$(7).newBitSet2$I$I(this.baseModelIndex, this.vwr.ms.mc));
if (!this.isStateScript) this.pymolScene.setFrameObject$I$O(0, null);
if (this.bsBytesExcluded != null ) {
var nExcluded=this.bsBytesExcluded.cardinality$();
var bytes0=this.vwr.fm.getFileAsBytes$S$javajs_util_OC(this.filePath, null);
var bytes=Clazz.array(Byte.TYPE, [bytes0.length - nExcluded]);
for (var i=this.bsBytesExcluded.nextClearBit$I(0), n=bytes0.length, pt=0; i < n; i=this.bsBytesExcluded.nextClearBit$I(i + 1)) bytes[pt++]=(bytes0[i]|0);

bytes0=null;
var fileName=this.filePath;
this.vwr.cachePut$S$O(fileName, bytes);
}});

Clazz.newMeth(C$, 'process$java_util_Map', function (map) {
this.pymolVersion=(map.get$O("version")).intValue$();
this.appendLoadNote$S("PyMOL version: " + this.pymolVersion);
var settings=p$1.fixSettings$javajs_util_Lst.apply(this, [C$.getMapList$java_util_Map$S(map, "settings")]);
var lst=C$.listAt$javajs_util_Lst$I(settings, 749);
this.haveBinaryArrays=(lst != null  && C$.floatAt$javajs_util_Lst$I(lst, 2) == 1  );
this.sceneOrder=C$.getMapList$java_util_Map$S(map, "scene_order");
this.haveScenes=p$1.getFrameScenes$java_util_Map.apply(this, [map]);
var file=C$.listAt$javajs_util_Lst$I(settings, 440);
if (file != null  && file.size$() > 2 ) $I$(5).info$S("PyMOL session file: " + file.get$I(2));
p$1.setUniqueSettings$javajs_util_Lst.apply(this, [C$.getMapList$java_util_Map$S(map, "unique_settings")]);
this.pymolScene=Clazz.new_($I$(8).c$$org_jmol_api_PymolAtomReader$org_jmol_viewer_Viewer$javajs_util_Lst$java_util_Map$I$Z$I$I$Z$S,[this, this.vwr, settings, this.uniqueSettings, this.pymolVersion, this.haveScenes, this.baseAtomIndex, this.baseModelIndex, this.doCache, this.filePath]);
var logFile=this.vwr.getLogFileName$();
this.logging=(logFile.length$() > 0);
$I$(5).info$S(this.logging ? "PyMOL file data streaming to " + logFile : "To view raw PyMOL file data, use \'set logFile \"some_filename\" ");
var names=C$.getMapList$java_util_Map$S(map, "names");
for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var name=e.getKey$();
$I$(5).info$S(name);
if (name.equals$O("names")) {
for (var i=1; i < names.size$(); i++) {
var obj=C$.listAt$javajs_util_Lst$I(names, i);
$I$(5).info$S("  " + C$.stringAt$javajs_util_Lst$I(obj, 0));
}
}}
if (this.logging) {
if (this.logging) this.vwr.log$S("$CLEAR$");
for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var name=e.getKey$();
if (!"names".equals$O(name)) {
this.vwr.log$S("\n===" + name + "===" );
this.vwr.log$S($I$(9).rep$S$S$S(e.getValue$().toString(), "[", "\n["));
}}
this.vwr.log$S("\n===names===");
for (var i=1; i < names.size$(); i++) {
this.vwr.log$S("");
var list=names.get$I(i);
this.vwr.log$S(" =" + C$.bytesToString$O(list.get$I(0)) + "=" );
try {
this.vwr.log$S($I$(9).rep$S$S$S(list.toString(), "[", "\n["));
} catch (e) {
}
}
}p$1.addColors$javajs_util_Lst$Z.apply(this, [C$.getMapList$java_util_Map$S(map, "colors"), this.pymolScene.globalSetting$I(214) != 0 ]);
this.allStates=(this.pymolScene.globalSetting$I(49) != 0 );
this.pymolFrame=(this.pymolScene.globalSetting$I(194)|0);
p$1.getAtomAndStateCount$javajs_util_Lst.apply(this, [names]);
this.pymolScene.setStateCount$I(this.stateCount);
var pymolState=(this.pymolScene.globalSetting$I(193)|0);
if (!this.isMovie) this.pymolScene.setFrameObject$I$O(4115, (this.allStates ? Integer.valueOf$I(-1) : Integer.valueOf$I(pymolState - 1)));
this.appendLoadNote$S("frame=" + this.pymolFrame + " state=" + pymolState + " all_states=" + this.allStates );
if (!this.isStateScript && this.doResize ) {
var width=0;
var height=0;
var main=C$.getMapList$java_util_Map$S(map, "main");
if (main != null ) {
width=C$.intAt$javajs_util_Lst$I(main, 0);
height=C$.intAt$javajs_util_Lst$I(main, 1);
}var note;
if (width > 0 && height > 0 ) {
note="PyMOL dimensions width=" + width + " height=" + height ;
this.asc.setInfo$S$O("preferredWidthHeight", Clazz.array(Integer.TYPE, -1, [width, height]));
this.vwr.resizeInnerPanel$I$I(width, height);
} else {
note="PyMOL dimensions?";
}this.appendLoadNote$S(note);
}var mov;
if (!this.isStateScript && !this.allStates && (mov=C$.getMapList$java_util_Map$S(map, "movie")) != null   ) {
var frameCount=C$.intAt$javajs_util_Lst$I(mov, 0);
if (frameCount > 0) p$1.processMovie$javajs_util_Lst$I.apply(this, [mov, frameCount]);
}if (this.totalAtomCount == 0) this.asc.newAtomSet$();
if (this.allStates && this.desiredModelNumber == -2147483648 ) {
} else if (this.isMovie) {
switch (this.desiredModelNumber) {
case -2147483648:
break;
default:
this.desiredModelNumber=this.frames[(this.desiredModelNumber > 0 && this.desiredModelNumber <= this.frames.length  ? this.desiredModelNumber : this.pymolFrame) - 1];
this.pymolScene.setFrameObject$I$O(4115, Integer.valueOf$I(this.desiredModelNumber - 1));
break;
}
} else if (this.desiredModelNumber == 0) {
this.desiredModelNumber=pymolState;
} else {
}var n=names.size$();
for (var j=0; j < this.stateCount; j++) {
if (!this.doGetModel$I$S(++this.nModels, null)) continue;
this.model$I(this.nModels);
this.pymolScene.currentAtomSetIndex=this.asc.iSet;
if (this.isTrajectory) {
this.trajectoryStep=Clazz.array($I$(2), [this.totalAtomCount]);
this.trajectorySteps.addLast$TV(this.trajectoryStep);
this.trajectoryPtr=0;
}for (var i=1; i < n; i++) p$1.processObject$javajs_util_Lst$Z$I.apply(this, [C$.listAt$javajs_util_Lst$I(names, i), true, j]);

}
for (var i=1; i < n; i++) p$1.processObject$javajs_util_Lst$Z$I.apply(this, [C$.listAt$javajs_util_Lst$I(names, i), false, 0]);

this.pymolScene.setReaderObjectInfo$S$I$S$Z$javajs_util_Lst$javajs_util_Lst$S(null, 0, null, false, null, null, null);
if (this.mapObjects != null  && this.allowSurface ) p$1.processMeshes.apply(this, []);
if (this.isTrajectory) {
this.appendLoadNote$S("PyMOL trajectories read: " + this.trajectorySteps.size$());
this.asc.finalizeTrajectoryAs$javajs_util_Lst$javajs_util_Lst(this.trajectorySteps, null);
}p$1.processDefinitions.apply(this, []);
p$1.processSelectionsAndScenes$java_util_Map.apply(this, [map]);
this.pymolScene.finalizeVisibility$();
if (!this.isStateScript) {
this.vwr.initialize$Z$Z(false, true);
this.addJmolScript$S(this.pymolScene.getViewScript$javajs_util_Lst(C$.getMapList$java_util_Map$S(map, "view")).toString());
}if (this.$ac == 0) this.asc.setInfo$S$O("dataOnly", $I$(3).TRUE);
this.pymolScene.offsetObjects$();
}, p$1);

Clazz.newMeth(C$, 'fixSettings$javajs_util_Lst', function (settings) {
var n=settings.size$();
for (var i=0; i < n; i++) {
var i2=C$.intAt$javajs_util_Lst$I(settings.get$I(i), 0);
if (i2 == -1) {
$I$(5).info$S("PyMOL reader adding null setting #" + i);
settings.set$I$TE(i, Clazz.new_($I$(4)));
} else {
while (i < i2){
$I$(5).info$S("PyMOL reader adding null setting #" + i);
settings.add$I$TE(i++, Clazz.new_($I$(4)));
n++;
}
}}
return settings;
}, p$1);

Clazz.newMeth(C$, 'getFrameScenes$java_util_Map', function (map) {
if (this.sceneOrder == null ) return false;
var scenes=map.get$O("scene_dict");
for (var i=0; i < this.sceneOrder.size$(); i++) {
var name=C$.stringAt$javajs_util_Lst$I(this.sceneOrder, i);
var thisScene=C$.getMapList$java_util_Map$S(scenes, name);
if (thisScene == null  || thisScene.get$I(2) == null  ) this.sceneOrder.removeItemAt$I(i--);
}
return (this.sceneOrder != null  && this.sceneOrder.size$() != 0 );
}, p$1);

Clazz.newMeth(C$, 'setUniqueSettings$javajs_util_Lst', function (list) {
this.uniqueSettings=Clazz.new_($I$(10));
var max=0;
if (list != null  && list.size$() != 0 ) {
for (var i=list.size$(); --i >= 0; ) {
var atomSettings=list.get$I(i);
var id=C$.intAt$javajs_util_Lst$I(atomSettings, 0);
if (id > max) max=id;
var mySettings=atomSettings.get$I(1);
for (var j=mySettings.size$(); --j >= 0; ) {
var setting=mySettings.get$I(j);
var uid=(id << 10) + C$.intAt$javajs_util_Lst$I(setting, 0);
this.uniqueSettings.put$TK$TV(Integer.valueOf$I(uid), setting);
}
}
}return max;
}, p$1);

Clazz.newMeth(C$, 'addColors$javajs_util_Lst$Z', function (colors, isClamped) {
if (colors == null  || colors.size$() == 0 ) return;
for (var i=colors.size$(); --i >= 0; ) {
var c=C$.listAt$javajs_util_Lst$I(colors, i);
$I$(11).addColor$Integer$I(c.get$I(1), isClamped ? C$.colorSettingClamped$javajs_util_Lst$javajs_util_P3(c, this.ptTemp) : C$.getColorPt$O$javajs_util_P3(c.get$I(2), this.ptTemp));
}
}, p$1);

Clazz.newMeth(C$, 'getAtomAndStateCount$javajs_util_Lst', function (names) {
var n=0;
for (var i=1; i < names.size$(); i++) {
var execObject=C$.listAt$javajs_util_Lst$I(names, i);
var type=C$.intAt$javajs_util_Lst$I(execObject, 4);
if (!p$1.checkObject$javajs_util_Lst.apply(this, [execObject])) continue;
if (type == 1) {
var pymolObject=C$.listAt$javajs_util_Lst$I(execObject, 5);
var states=C$.listAt$javajs_util_Lst$I(pymolObject, 4);
var ns=states.size$();
if (ns > this.stateCount) this.stateCount=ns;
var nAtoms;
var nBonds;
if (this.haveBinaryArrays) {
nBonds=((C$.listAt$javajs_util_Lst$I(pymolObject, 6).get$I(1)).length/20|0);
nAtoms=((C$.listAt$javajs_util_Lst$I(pymolObject, 7).get$I(1)).length/120|0);
n+=nAtoms;
} else {
nBonds=C$.listAt$javajs_util_Lst$I(pymolObject, 6).size$();
nAtoms=C$.listAt$javajs_util_Lst$I(pymolObject, 7).size$();
}System.out.println$S("Object " + this.objectName + " nBonds=" + nBonds + ", nAtoms = " + nAtoms );
for (var j=0; j < ns; j++) {
var state=C$.listAt$javajs_util_Lst$I(states, j);
var idxToAtm=C$.listAt$javajs_util_Lst$I(state, 3);
if (idxToAtm == null ) {
this.isTrajectory=false;
} else {
var m=idxToAtm.size$();
n+=m;
if (this.isTrajectory && m != nAtoms ) this.isTrajectory=false;
}}
}}
this.totalAtomCount=n;
$I$(5).info$S("PyMOL total atom count = " + this.totalAtomCount);
$I$(5).info$S("PyMOL state count = " + this.stateCount);
}, p$1);

Clazz.newMeth(C$, 'checkObject$javajs_util_Lst', function (execObject) {
this.objectName=C$.stringAt$javajs_util_Lst$I(execObject, 0);
this.isHidden=(C$.intAt$javajs_util_Lst$I(execObject, 2) != 1);
return (this.objectName.indexOf$S("_") != 0);
}, p$1);

Clazz.newMeth(C$, 'processMovie$javajs_util_Lst$I', function (mov, frameCount) {
var movie=Clazz.new_($I$(10));
movie.put$TK$TV("frameCount", Integer.valueOf$I(frameCount));
movie.put$TK$TV("currentFrame", Integer.valueOf$I(this.pymolFrame - 1));
var haveCommands=false;
var haveViews=false;
var haveFrames=false;
var list=C$.listAt$javajs_util_Lst$I(mov, 4);
for (var i=list.size$(); --i >= 0; ) if (C$.intAt$javajs_util_Lst$I(list, i) != 0) {
this.frames=Clazz.array(Integer.TYPE, [list.size$()]);
for (var j=this.frames.length; --j >= 0; ) this.frames[j]=C$.intAt$javajs_util_Lst$I(list, j) + 1;

movie.put$TK$TV("frames", this.frames);
haveFrames=true;
break;
}
var cmds=C$.listAt$javajs_util_Lst$I(mov, 5);
var cmd;
for (var i=cmds.size$(); --i >= 0; ) if ((cmd=C$.stringAt$javajs_util_Lst$I(cmds, i)) != null  && cmd.length$() > 1 ) {
cmds=C$.fixMovieCommands$javajs_util_Lst(cmds);
if (cmds != null ) {
movie.put$TK$TV("commands", cmds);
haveCommands=true;
break;
}}
var views=C$.listAt$javajs_util_Lst$I(mov, 6);
var view;
for (var i=views.size$(); --i >= 0; ) if ((view=C$.listAt$javajs_util_Lst$I(views, i)) != null  && view.size$() >= 12  && view.get$I(1) != null  ) {
haveViews=true;
views=C$.fixMovieViews$javajs_util_Lst(views);
if (views != null ) {
movie.put$TK$TV("views", views);
break;
}}
this.appendLoadNote$S("PyMOL movie frameCount = " + frameCount);
if (haveFrames && !haveCommands && !haveViews  ) {
this.isMovie=true;
this.pymolScene.setReaderObjectInfo$S$I$S$Z$javajs_util_Lst$javajs_util_Lst$S(null, 0, null, false, null, null, null);
this.pymolScene.setFrameObject$I$O(1073742031, movie);
} else {
}}, p$1);

Clazz.newMeth(C$, 'fixMovieViews$javajs_util_Lst', function (views) {
return views;
}, 1);

Clazz.newMeth(C$, 'fixMovieCommands$javajs_util_Lst', function (cmds) {
return cmds;
}, 1);

Clazz.newMeth(C$, 'processObject$javajs_util_Lst$Z$I', function (execObject, moleculeOnly, iState) {
if (execObject == null ) return;
var type=C$.intAt$javajs_util_Lst$I(execObject, 4);
var startLen=execObject.get$I(execObject.size$() - 1);
if ((type == 1) != moleculeOnly  || !p$1.checkObject$javajs_util_Lst.apply(this, [execObject]) ) return;
var pymolObject=C$.listAt$javajs_util_Lst$I(execObject, 5);
var stateSettings=null;
if (type == 1) {
var states=C$.listAt$javajs_util_Lst$I(pymolObject, 4);
var state=C$.listAt$javajs_util_Lst$I(states, iState);
var idxToAtm=C$.listAt$javajs_util_Lst$I(state, 3);
if (iState > 0 && (idxToAtm == null  || idxToAtm.size$() == 0 ) ) return;
stateSettings=C$.listAt$javajs_util_Lst$I(state, 7);
} else if (iState > 0) {
return;
}$I$(5).info$S("PyMOL model " + (this.nModels) + " Object " + this.objectName + (this.isHidden ? " (hidden)" : " (visible)") );
if (!this.isHidden && !this.isMovie && !this.allStates  ) {
if (this.pymolFrame > 0 && this.pymolFrame != this.nModels ) {
this.pymolFrame=this.nModels;
this.allStates=true;
this.pymolScene.setFrameObject$I$O(4115, Integer.valueOf$I(-1));
}}var objectHeader=C$.listAt$javajs_util_Lst$I(pymolObject, 0);
var parentGroupName=(execObject.size$() < 8 ? null : C$.stringAt$javajs_util_Lst$I(execObject, 6));
if (" ".equals$O(parentGroupName)) parentGroupName=null;
this.pymolScene.setReaderObjectInfo$S$I$S$Z$javajs_util_Lst$javajs_util_Lst$S(this.objectName, type, parentGroupName, this.isHidden, C$.listAt$javajs_util_Lst$I(objectHeader, 8), stateSettings, (moleculeOnly ? "_" + (iState + 1) : ""));
var bsAtoms=null;
var doExclude=(this.bsBytesExcluded != null );
var msg=null;
switch (type) {
default:
msg="" + type;
break;
case -1:
this.pymolScene.processSelection$javajs_util_Lst(execObject);
break;
case 1:
doExclude=false;
bsAtoms=p$1.processMolecule$javajs_util_Lst$I.apply(this, [pymolObject, iState]);
break;
case 4:
doExclude=false;
p$1.processMeasure$javajs_util_Lst.apply(this, [pymolObject]);
break;
case 3:
case 2:
p$1.processMap$javajs_util_Lst$Z$Z.apply(this, [pymolObject, type == 3, false]);
break;
case 8:
p$1.processGadget$javajs_util_Lst.apply(this, [pymolObject]);
break;
case 12:
if (parentGroupName == null ) parentGroupName="";
break;
case 6:
msg="CGO";
p$1.processCGO$javajs_util_Lst.apply(this, [pymolObject]);
break;
case 11:
msg="ALIGNEMENT";
break;
case 9:
msg="CALCULATOR";
break;
case 5:
msg="CALLBACK";
break;
case 10:
msg="SLICE";
break;
case 7:
msg="SURFACE";
break;
}
if (parentGroupName != null  || bsAtoms != null  ) this.pymolScene.addGroup$javajs_util_Lst$S$I$javajs_util_BS(execObject, parentGroupName, type, bsAtoms);
if (doExclude) {
var i0=C$.intAt$javajs_util_Lst$I(startLen, 0);
var len=C$.intAt$javajs_util_Lst$I(startLen, 1);
this.bsBytesExcluded.setBits$I$I(i0, i0 + len);
$I$(5).info$S("cached PSE file excludes PyMOL object type " + type + " name=" + this.objectName + " len=" + len );
}if (msg != null ) $I$(5).error$S("Unprocessed object type " + msg + " " + this.objectName );
}, p$1);

Clazz.newMeth(C$, 'processCGO$javajs_util_Lst', function (pymolObject) {
if (this.isStateScript) return;
if (this.isHidden) return;
var data=C$.sublistAt$javajs_util_Lst$IA(pymolObject, [2, 0]);
var color=$I$(11).getRGB$I(C$.intAt$javajs_util_Lst$I(C$.listAt$javajs_util_Lst$I(pymolObject, 0), 2));
var name=this.pymolScene.addCGO$javajs_util_Lst$I(data, color);
if (name != null ) this.appendLoadNote$S("CGO " + name);
}, p$1);

Clazz.newMeth(C$, 'processGadget$javajs_util_Lst', function (pymolObject) {
if (this.objectName.endsWith$S("_e_pot")) p$1.processMap$javajs_util_Lst$Z$Z.apply(this, [pymolObject, true, true]);
}, p$1);

Clazz.newMeth(C$, 'processMap$javajs_util_Lst$Z$Z', function (pymolObject, isObject, isGadget) {
if (isObject) {
if (this.sourcePNGJ) return;
if (this.isHidden && !isGadget ) return;
if (this.mapObjects == null ) this.mapObjects=Clazz.new_($I$(4));
this.mapObjects.addLast$TV(pymolObject);
} else {
if (this.volumeData == null ) this.volumeData=Clazz.new_($I$(10));
this.volumeData.put$TK$TV(this.objectName, pymolObject);
if (!this.isHidden && !this.isStateScript ) this.pymolScene.addIsosurface$S(this.objectName);
}pymolObject.addLast$TV(this.objectName);
}, p$1);

Clazz.newMeth(C$, 'processMeasure$javajs_util_Lst', function (pymolObject) {
if (this.isStateScript) return;
if (this.isHidden) return;
$I$(5).info$S("PyMOL measure " + this.objectName);
var measure=C$.sublistAt$javajs_util_Lst$IA(pymolObject, [2, 0]);
var pt;
var nCoord=(Clazz.instanceOf(measure.get$I(pt=1), "javajs.util.Lst") ? 2 : Clazz.instanceOf(measure.get$I(pt=4), "javajs.util.Lst") ? 3 : Clazz.instanceOf(measure.get$I(pt=6), "javajs.util.Lst") ? 4 : 0);
if (nCoord == 0) return;
var setting=C$.listAt$javajs_util_Lst$I(pymolObject, 0);
var bsReps=C$.getBsReps$javajs_util_Lst(C$.listAt$javajs_util_Lst$I(setting, 3));
var list=C$.listAt$javajs_util_Lst$I(measure, pt);
var offsets=C$.listAt$javajs_util_Lst$I(measure, 8);
var haveLabels=(measure.size$() > 8);
var color=C$.intAt$javajs_util_Lst$I(setting, 2);
if (this.pymolScene.addMeasurements$org_jmol_modelset_MeasurementDataA$I$javajs_util_Lst$javajs_util_BS$I$javajs_util_Lst$Z(null, nCoord, list, bsReps, color, offsets, haveLabels)) this.haveMeasurements=true;
}, p$1);

Clazz.newMeth(C$, 'processMolecule$javajs_util_Lst$I', function (pymolObject, iState) {
var states=C$.listAt$javajs_util_Lst$I(pymolObject, 4);
var state=C$.listAt$javajs_util_Lst$I(states, iState);
var idxToAtm;
var coords;
var labelPositions;
var idxArray=null;
var coordsArray=null;
var labelArray=null;
var nBonds=C$.intAt$javajs_util_Lst$I(pymolObject, 2);
var nAtoms=C$.intAt$javajs_util_Lst$I(pymolObject, 3);
var n=nAtoms;
if (this.haveBinaryArrays && $I$(12).isAB$O(state.get$I(3)) ) {
idxToAtm=coords=labelPositions=null;
idxArray=Clazz.array(Integer.TYPE, [nAtoms]);
coordsArray=Clazz.array(Float.TYPE, [nAtoms * 3]);
p$1.fillFloatArrayFromBytes$BA$FA.apply(this, [state.get$I(2), coordsArray]);
p$1.fillIntArrayFromBytes$BA$IA.apply(this, [state.get$I(3), idxArray]);
var b=state.get$I(8);
if (b != null ) {
labelArray=Clazz.array(Float.TYPE, [nAtoms * 7]);
p$1.fillFloatArrayFromBytes$BA$FA.apply(this, [b, labelArray]);
}} else {
coords=C$.listAt$javajs_util_Lst$I(state, 2);
idxToAtm=C$.listAt$javajs_util_Lst$I(state, 3);
labelPositions=C$.listAt$javajs_util_Lst$I(state, 8);
if (idxToAtm != null ) n=idxToAtm.size$();
}if (n == 0) return null;
this.$ac=this.ac0=this.asc.ac;
if (nAtoms == 0) return null;
this.ssMapSeq=Clazz.new_($I$(10));
if (iState == 0) p$1.processMolCryst$javajs_util_Lst.apply(this, [C$.listAt$javajs_util_Lst$I(pymolObject, 10)]);
var bonds=p$1.getBondList$javajs_util_Lst.apply(this, [C$.listAt$javajs_util_Lst$I(pymolObject, 6)]);
var pymolAtoms=C$.listAt$javajs_util_Lst$I(pymolObject, 7);
this.atomMap=Clazz.array(Integer.TYPE, [nAtoms]);
var bsAtoms=this.pymolScene.setAtomMap$IA$I(this.atomMap, this.ac0);
for (var i=0; i < 23; i++) this.reps[i]=$I$(1).newN$I(1000);

if (iState == 0 || !this.isTrajectory ) {
this.pymolScene.ensureCapacity$I(n);
var lexStr=null;
var atomArray=null;
var vArray=null;
if (this.haveBinaryArrays) {
var ver=C$.intAt$javajs_util_Lst$I(pymolAtoms, 0);
atomArray=pymolAtoms.get$I(1);
lexStr=p$1.getLexStr$BA.apply(this, [pymolAtoms.get$I(2)]);
System.out.println$S("PyMOL atom dump version " + ver);
vArray=(this.haveBinaryArrays ? $I$(11).getVArray$I(ver) : null);
}for (var idx=0; idx < n; idx++) {
var a=p$1.addAtom$javajs_util_Lst$I$BA$IA$SA$I$javajs_util_Lst$FA$javajs_util_Lst$FA$javajs_util_BS$I.apply(this, [pymolAtoms, (idxToAtm != null  ? C$.intAt$javajs_util_Lst$I(idxToAtm, idx) : idxArray != null  ? idxArray[idx] : idx), atomArray, vArray, lexStr, idx, coords, coordsArray, labelPositions, labelArray, bsAtoms, iState]);
if (a != null ) this.trajectoryStep[this.trajectoryPtr++]=a;
}
}p$1.addBonds$javajs_util_Lst.apply(this, [bonds]);
p$1.addMolStructures.apply(this, []);
this.atoms=this.asc.atoms;
if (!this.isStateScript) p$1.createShapeObjects.apply(this, []);
this.ssMapSeq=null;
$I$(5).info$S("reading " + (this.$ac - this.ac0) + " atoms and " + nBonds + " bonds" );
$I$(5).info$S("----------");
return bsAtoms;
}, p$1);

Clazz.newMeth(C$, 'getLexStr$BA', function (lex) {
var pt=0;
var n=$I$(13).bytesToInt$BA$I$Z(lex, pt, false);
var index=Clazz.array(Integer.TYPE, [n]);
var imax=0;
for (var i=0; i < n; i++) {
pt+=4;
var ipt=index[i]=$I$(13).bytesToInt$BA$I$Z(lex, pt, false);
if (ipt > imax) imax=ipt;
}
var tokens=Clazz.array(String, [imax + 1]);
tokens[0]=" ";
pt+=4;
for (var i=0; i < n; i++) {
var s=tokens[index[i]]=p$1.getCStr$BA$I.apply(this, [lex, pt]);
pt+=s.length$() + 1;
}
return tokens;
}, p$1);

Clazz.newMeth(C$, 'getCStr$BA$I', function (lex, pt) {
try {
var a=this.aTemp;
var apt=0;
var b=($b$[0] = 0, $b$[0]);
while ((b=($b$[0] = lex[pt++], $b$[0])) != 0){
if (apt >= a.length) a=this.aTemp=$I$(12).doubleLengthByte$BA(a);
a[apt++]=(b|0);
}
return  String.instantialize($I$(12).arrayCopyByte$BA$I(a, apt), "UTF-8");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
return null;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'processMolCryst$javajs_util_Lst', function (cryst) {
if (cryst == null  || cryst.size$() == 0 ) return;
var l=C$.sublistAt$javajs_util_Lst$IA(cryst, [0, 0]);
var a=C$.sublistAt$javajs_util_Lst$IA(cryst, [0, 1]);
this.setUnitCell$F$F$F$F$F$F(C$.floatAt$javajs_util_Lst$I(l, 0), C$.floatAt$javajs_util_Lst$I(l, 1), C$.floatAt$javajs_util_Lst$I(l, 2), C$.floatAt$javajs_util_Lst$I(a, 0), C$.floatAt$javajs_util_Lst$I(a, 1), C$.floatAt$javajs_util_Lst$I(a, 2));
this.setSpaceGroupName$S(C$.stringAt$javajs_util_Lst$I(cryst, 1));
}, p$1);

Clazz.newMeth(C$, 'getBondList$javajs_util_Lst', function (bonds) {
var asSingle=!this.pymolScene.booleanSetting$I(64);
var b=null;
var vArray=null;
var n=bonds.size$();
var len=0;
if (this.haveBinaryArrays && n == 2 ) {
var ver=C$.intAt$javajs_util_Lst$I(bonds, 0);
System.out.println$S("PyMOL bond dump version " + ver);
vArray=$I$(11).getVArrayB$I(ver);
b=bonds.get$I(1);
len=vArray[0];
n=(b.length/len|0);
}var bondList=Clazz.new_($I$(4));
bondList.ensureCapacity$I(n);
var ia;
var ib;
var order;
var uid=-1;
for (var i=0, apt=0; i < n; i++) {
if (this.haveBinaryArrays) {
ia=$I$(13).bytesToInt$BA$I$Z(b, apt + vArray[1], false);
ib=$I$(13).bytesToInt$BA$I$Z(b, apt + vArray[2], false);
uid=(b[apt + vArray[6]] == 0 ? -1 : $I$(13).bytesToInt$BA$I$Z(b, apt + vArray[5], false));
order=b[apt + vArray[3]];
apt+=len;
} else {
var lst=C$.listAt$javajs_util_Lst$I(bonds, i);
ia=C$.intAt$javajs_util_Lst$I(lst, 0);
ib=C$.intAt$javajs_util_Lst$I(lst, 1);
order=C$.intAt$javajs_util_Lst$I(lst, 2);
uid=(lst.size$() > 6 && C$.intAt$javajs_util_Lst$I(lst, 6) != 0  ? C$.intAt$javajs_util_Lst$I(lst, 5) : -1);
}if (order < 1 || order > 3 ) order=1;
order|=(asSingle || order == 1  ? 65536 : 98304);
var bond=Clazz.new_($I$(14).c$$I$I$I,[ia, ib, order]);
bond.uniqueID=uid;
bondList.addLast$TV(bond);
}
return bondList;
}, p$1);

Clazz.newMeth(C$, 'fillIntArrayFromBytes$BA$IA', function (b, array) {
for (var i=0, pt=0; i < b.length; i+=4) array[pt++]=$I$(13).bytesToInt$BA$I$Z(b, i, false);

}, p$1);

Clazz.newMeth(C$, 'fillFloatArrayFromBytes$BA$FA', function (b, array) {
try {
for (var i=0, pt=0; i < b.length; i+=4) array[pt++]=$I$(13).bytesToFloat$BA$I$Z(b, i, false);

} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'addAtom$javajs_util_Lst$I$BA$IA$SA$I$javajs_util_Lst$FA$javajs_util_Lst$FA$javajs_util_BS$I', function (pymolAtoms, apt, atomArray, vArray, lexStr, icoord, coords, coordArray, labelPositions, labelArray, bsState, iState) {
this.atomMap[apt]=-1;
var chainID;
var altLoc;
var group3;
var name;
var sym;
var label;
var ssType;
var resi;
var insCode=null;
var bfactor;
var occupancy;
var radius;
var partialCharge;
var seqNo;
var intReps;
var formalCharge;
var atomColor;
var serNo;
var cartoonType;
var flags;
var uniqueID=-1;
var isHetero;
var bonded;
var anisou=null;
var bsReps=null;
if (this.haveBinaryArrays) {
var vpt;
var pt=apt * vArray[0];
seqNo=p$1.atomInt$BA$I$I.apply(this, [atomArray, pt, vArray[1]]);
chainID=p$1.atomStr$BA$I$I$SA.apply(this, [atomArray, pt, vArray[34], lexStr]);
resi=p$1.atomStr$BA$I$I$SA.apply(this, [atomArray, pt, vArray[38], lexStr]);
group3=p$1.atomStr$BA$I$I$SA.apply(this, [atomArray, pt, vArray[41], lexStr]);
if (group3.length$() > 3) group3=group3.substring$I$I(0, 3);
name=p$1.atomStr$BA$I$I$SA.apply(this, [atomArray, pt, vArray[36], lexStr]);
sym=p$1.atomStr$BA$I$I$SA.apply(this, [atomArray, pt, vArray[37], lexStr]);
label=p$1.atomStr$BA$I$I$SA.apply(this, [atomArray, pt, vArray[19], lexStr]);
ssType=p$1.atomStr$BA$I$I$SA.apply(this, [atomArray, pt, vArray[39], null]);
altLoc=p$1.atomStr$BA$I$I$SA.apply(this, [atomArray, pt, vArray[40], null]);
if ((vpt=vArray[42]) == 0) {
resi=p$1.atomStr$BA$I$I$SA.apply(this, [atomArray, pt, vArray[38], null]);
} else {
var b=($b$[0] = atomArray[pt + vpt], $b$[0]);
insCode=(b == 0 ? " " : "" + String.fromCharCode(b));
}bfactor=p$1.atomFloat$BA$I$I.apply(this, [atomArray, pt, vArray[4]]);
occupancy=p$1.atomFloat$BA$I$I.apply(this, [atomArray, pt, vArray[5]]);
radius=p$1.atomFloat$BA$I$I.apply(this, [atomArray, pt, vArray[6]]);
partialCharge=p$1.atomFloat$BA$I$I.apply(this, [atomArray, pt, vArray[7]]);
formalCharge=atomArray[pt + vArray[28]];
if (formalCharge > 125) formalCharge-=512;
intReps=p$1.atomInt$BA$I$I.apply(this, [atomArray, pt, vArray[20]]);
atomColor=p$1.atomInt$BA$I$I.apply(this, [atomArray, pt, vArray[9]]);
serNo=p$1.atomInt$BA$I$I.apply(this, [atomArray, pt, vArray[10]]);
cartoonType=p$1.atomInt$BA$I$I.apply(this, [atomArray, pt, vArray[30]]);
flags=p$1.atomInt$BA$I$I.apply(this, [atomArray, pt, vArray[11]]);
uniqueID=p$1.atomInt$BA$I$I.apply(this, [atomArray, pt, vArray[13]]);
if (uniqueID == 0) uniqueID=-1;
anisou=Clazz.array(Float.TYPE, [8]);
if ((vpt=vArray[45]) > 0) for (var i=0; i < 6; i++) anisou[i]=$I$(13).bytesToShort$BA$I$Z(atomArray, pt + vpt + (i << 1) , false);

bonded=p$1.atomBool$BA$I$I$I.apply(this, [atomArray, pt, vArray[22], vArray[47]]);
isHetero=p$1.atomBool$BA$I$I$I.apply(this, [atomArray, pt, vArray[21], vArray[46]]);
} else {
var a=C$.listAt$javajs_util_Lst$I(pymolAtoms, apt);
seqNo=C$.intAt$javajs_util_Lst$I(a, 0);
chainID=C$.stringAt$javajs_util_Lst$I(a, 1);
altLoc=C$.stringAt$javajs_util_Lst$I(a, 2);
resi=C$.stringAt$javajs_util_Lst$I(a, 3);
group3=C$.stringAt$javajs_util_Lst$I(a, 5);
name=C$.stringAt$javajs_util_Lst$I(a, 6);
sym=C$.stringAt$javajs_util_Lst$I(a, 7);
label=C$.stringAt$javajs_util_Lst$I(a, 9);
ssType=C$.stringAt$javajs_util_Lst$I(a, 10).substring$I$I(0, 1);
bfactor=C$.floatAt$javajs_util_Lst$I(a, 14);
occupancy=C$.floatAt$javajs_util_Lst$I(a, 15);
radius=C$.floatAt$javajs_util_Lst$I(a, 16);
partialCharge=C$.floatAt$javajs_util_Lst$I(a, 17);
formalCharge=C$.intAt$javajs_util_Lst$I(a, 18);
isHetero=(C$.intAt$javajs_util_Lst$I(a, 19) != 0);
bsReps=C$.getBsReps$javajs_util_Lst(C$.listAt$javajs_util_Lst$I(a, 20));
intReps=(bsReps == null  ? C$.intAt$javajs_util_Lst$I(a, 20) : 0);
atomColor=C$.intAt$javajs_util_Lst$I(a, 21);
serNo=C$.intAt$javajs_util_Lst$I(a, 22);
cartoonType=C$.intAt$javajs_util_Lst$I(a, 23);
flags=C$.intAt$javajs_util_Lst$I(a, 24);
bonded=(C$.intAt$javajs_util_Lst$I(a, 25) != 0);
uniqueID=(a.size$() > 40 && C$.intAt$javajs_util_Lst$I(a, 40) == 1  ? C$.intAt$javajs_util_Lst$I(a, 32) : -1);
if (a.size$() > 46) anisou=C$.floatsAt$javajs_util_Lst$I$FA$I(a, 41, Clazz.array(Float.TYPE, [8]), 6);
}if (insCode == null ) {
var len=resi.length$();
var ch=(len > 0 ? resi.charAt$I(len - 1) : " ");
insCode=($I$(9).isDigit$C(ch) ? " " : "" + ch);
}if (group3.length$() > 3) group3=group3.substring$I$I(0, 3);
if (group3.equals$O(" ")) group3="UNK";
if (sym.equals$O("A")) sym="C";
var ichain=this.vwr.getChainID$S$Z(chainID, true);
var atom=this.processAtom$org_jmol_adapter_smarter_Atom$S$C$S$I$I$C$Z$S(Clazz.new_($I$(15)), name, altLoc.charAt$I(0), group3, ichain, seqNo, insCode.charAt$I(0), isHetero, sym);
if (!this.filterPDBAtom$org_jmol_adapter_smarter_Atom$I(atom, this.fileAtomIndex++)) return null;
var x;
var y;
var z;
icoord*=3;
if (this.haveBinaryArrays) {
x=coordArray[icoord];
y=coordArray[++icoord];
z=coordArray[++icoord];
} else {
x=C$.floatAt$javajs_util_Lst$I(coords, icoord);
y=C$.floatAt$javajs_util_Lst$I(coords, ++icoord);
z=C$.floatAt$javajs_util_Lst$I(coords, ++icoord);
}$I$(16).addPointXYZ$F$F$F$javajs_util_P3$javajs_util_P3$F(x, y, z, this.xyzMin, this.xyzMax, 0);
if (this.isTrajectory && iState > 0 ) return null;
var isNucleic=(C$.nucleic.indexOf$S(group3) >= 0);
if (bsState != null ) bsState.set$I(this.$ac);
if (seqNo >= -1000 && (!ssType.equals$O(" ") || name.equals$O("CA") || isNucleic  ) ) {
var bs=this.ssMapSeq.get$O(ssType);
if (bs == null ) this.ssMapSeq.put$TK$TV(ssType, bs=Clazz.new_($I$(1)));
bs.set$I(seqNo - -1000);
ssType += ichain;
bs=this.ssMapSeq.get$O(ssType);
if (bs == null ) this.ssMapSeq.put$TK$TV(ssType, bs=Clazz.new_($I$(1)));
bs.set$I(seqNo - -1000);
}atom.bfactor=bfactor;
atom.foccupancy=occupancy;
atom.radius=radius;
if (atom.radius == 0 ) atom.radius=1;
atom.partialCharge=partialCharge;
atom.vib=$I$(17).new3$F$F$F(uniqueID, cartoonType, NaN);
if (anisou != null  && anisou[0] != 0  ) this.asc.setAnisoBorU$org_jmol_adapter_smarter_Atom$FA$I(atom, anisou, 12);
this.pymolScene.setAtomColor$I(atomColor);
this.processAtom2$org_jmol_adapter_smarter_Atom$I$F$F$F$I(atom, serNo, x, y, z, formalCharge);
if (!bonded) this.pymolScene.bsNonbonded.set$I(this.$ac);
if (!label.equals$O(" ")) {
this.pymolScene.bsLabeled.set$I(this.$ac);
var labelPos=Clazz.array(Float.TYPE, [7]);
if (labelArray != null ) {
for (var i=0; i < 7; i++) labelPos[i]=labelArray[apt * 7 + i];

} else {
var labelOffset=C$.listAt$javajs_util_Lst$I(labelPositions, apt);
if (labelOffset != null ) {
for (var i=0; i < 7; i++) labelPos[i]=C$.floatAt$javajs_util_Lst$I(labelOffset, i);

}}this.pymolScene.addLabel$I$I$I$FA$S(this.$ac, uniqueID, atomColor, labelPos, label);
}if (this.isHidden) this.pymolScene.bsHidden.set$I(this.$ac);
if (isNucleic) this.pymolScene.bsNucleic.set$I(this.$ac);
for (var i=0; i < 21; i++) if (bsReps == null  ? ((intReps & (1 << i)) != 0) : bsReps.get$I(i)) this.reps[i].set$I(this.$ac);

if (atom.elementSymbol.equals$O("H")) this.pymolScene.bsHydrogen.set$I(this.$ac);
if ((flags & $I$(11).FLAG_NOSURFACE) != 0) this.pymolScene.bsNoSurface.set$I(this.$ac);
this.atomMap[apt]=this.$ac++;
return null;
}, p$1);

Clazz.newMeth(C$, 'atomBool$BA$I$I$I', function (atomArray, pt, offset, mask) {
return ((atomArray[pt + offset] & mask) != 0);
}, p$1);

Clazz.newMeth(C$, 'atomFloat$BA$I$I', function (atomArray, pt, offset) {
try {
return $I$(13).bytesToFloat$BA$I$Z(atomArray, pt + offset, false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return 0;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'atomStr$BA$I$I$SA', function (atomArray, pt, offset, lexStr) {
if (offset < 0) return lexStr[$I$(13).bytesToInt$BA$I$Z(atomArray, pt - offset, false)];
var s=p$1.getCStr$BA$I.apply(this, [atomArray, pt + offset]);
return (s.length$() == 0 ? " " : s);
}, p$1);

Clazz.newMeth(C$, 'atomInt$BA$I$I', function (atomArray, pt, offset) {
return $I$(13).bytesToInt$BA$I$Z(atomArray, pt + offset, false);
}, p$1);

Clazz.newMeth(C$, 'addBonds$javajs_util_Lst', function (bonds) {
var n=bonds.size$();
for (var i=0; i < n; i++) {
var bond=bonds.get$I(i);
bond.atomIndex1=this.atomMap[bond.atomIndex1];
bond.atomIndex2=this.atomMap[bond.atomIndex2];
if (bond.atomIndex1 < 0 || bond.atomIndex2 < 0 ) continue;
this.pymolScene.setUniqueBond$I$I(this.bondCount++, bond.uniqueID);
this.asc.addBond$org_jmol_adapter_smarter_Bond(bond);
}
}, p$1);

Clazz.newMeth(C$, 'addMolStructures', function () {
p$1.addMolSS$S$org_jmol_c_STR.apply(this, ["H", $I$(18).HELIX]);
p$1.addMolSS$S$org_jmol_c_STR.apply(this, ["S", $I$(18).SHEET]);
p$1.addMolSS$S$org_jmol_c_STR.apply(this, ["L", $I$(18).TURN]);
p$1.addMolSS$S$org_jmol_c_STR.apply(this, [" ", $I$(18).NONE]);
}, p$1);

Clazz.newMeth(C$, 'addMolSS$S$org_jmol_c_STR', function (ssType, type) {
if (this.ssMapSeq.get$O(ssType) == null ) return;
var istart=-1;
var iend=-1;
var ichain=0;
var atoms=this.asc.atoms;
var bsSeq=null;
var bsAtom=this.pymolScene.getSSMapAtom$S(ssType);
var n=this.$ac + 1;
var seqNo=-1;
var thischain=0;
var imodel=-1;
var thisModel=-1;
for (var i=this.ac0; i < n; i++) {
if (i == this.$ac) {
thischain=0;
} else {
seqNo=atoms[i].sequenceNumber;
thischain=atoms[i].chainID;
thisModel=atoms[i].atomSetIndex;
}if (thischain != ichain || thisModel != imodel ) {
ichain=thischain;
imodel=thisModel;
bsSeq=this.ssMapSeq.get$O(ssType + thischain);
--i;
if (istart < 0) continue;
} else if (bsSeq != null  && seqNo >= -1000  && bsSeq.get$I(seqNo - -1000) ) {
iend=i;
if (istart < 0) istart=i;
continue;
} else if (istart < 0) {
continue;
}if (type !== $I$(18).NONE ) {
var pt=this.bsStructureDefined.nextSetBit$I(istart);
if (pt >= 0 && pt <= iend ) continue;
this.bsStructureDefined.setBits$I$I(istart, iend + 1);
var structure=Clazz.new_($I$(19).c$$I$org_jmol_c_STR$org_jmol_c_STR$S$I$I$javajs_util_BSA,[imodel, type, type, type.toString(), ++this.structureCount, type === $I$(18).SHEET  ? 1 : 0, null]);
var a=atoms[istart];
var b=atoms[iend];
var i0=this.asc.getAtomSetAtomIndex$I(thisModel);
structure.set$I$I$C$I$I$C$I$I(a.chainID, a.sequenceNumber, a.insertionCode, b.chainID, b.sequenceNumber, b.insertionCode, istart - i0, iend - i0);
this.asc.addStructure$org_jmol_adapter_smarter_Structure(structure);
}bsAtom.setBits$I$I(istart, iend + 1);
istart=-1;
}
}, p$1);

Clazz.newMeth(C$, 'createShapeObjects', function () {
this.pymolScene.createShapeObjects$javajs_util_BSA$Z$I$I(this.reps, this.allowSurface && !this.isHidden , this.ac0, this.$ac);
}, p$1);

Clazz.newMeth(C$, 'processMeshes', function () {
var fileName=this.vwr.fm.getFilePath$S$Z$Z(this.pymolScene.surfaceInfoName, true, false);
this.vwr.cachePut$S$O(fileName, this.volumeData);
for (var i=this.mapObjects.size$(); --i >= 0; ) {
var obj=this.mapObjects.get$I(i);
var objName=obj.get$I(obj.size$() - 1).toString();
var isMep=objName.endsWith$S("_e_pot");
var mapName;
var tok;
if (isMep) {
tok=1073742016;
var root=objName.substring$I$I(0, objName.length$() - 3);
mapName=root + "map";
var isosurfaceName=this.pymolScene.getObjectID$S(root + "chg");
if (isosurfaceName == null ) continue;
obj.addLast$TV(isosurfaceName);
this.pymolScene.mepList += ";" + isosurfaceName + ";" ;
} else {
tok=1073742018;
mapName=C$.stringAt$javajs_util_Lst$I(C$.sublistAt$javajs_util_Lst$IA(obj, [2, 0]), 1);
}var surface=this.volumeData.get$O(mapName);
if (surface == null ) continue;
obj.addLast$TV(mapName);
this.volumeData.put$TK$TV(objName, obj);
this.volumeData.put$TK$TV("__pymolSurfaceData__", obj);
if (!this.isStateScript) this.pymolScene.addMesh$I$javajs_util_Lst$S$Z(tok, obj, objName, isMep);
this.appendLoadNote$S("PyMOL object " + objName + " references map " + mapName );
}
}, p$1);

Clazz.newMeth(C$, 'processDefinitions', function () {
var s=this.vwr.getAtomDefs$java_util_Map(this.pymolScene.setAtomDefs$());
if (s.length$() > 2) s=s.substring$I$I(0, s.length$() - 2);
this.appendLoadNote$S(s);
}, p$1);

Clazz.newMeth(C$, 'processSelectionsAndScenes$java_util_Map', function (map) {
if (!this.pymolScene.needSelections$()) return;
var htObjNames=C$.listToMap$javajs_util_Lst(C$.getMapList$java_util_Map$S(map, "names"));
if (this.haveScenes) {
var scenes=map.get$O("scene_dict");
p$1.finalizeSceneData.apply(this, []);
var htSecrets=C$.listToMap$javajs_util_Lst(C$.getMapList$java_util_Map$S(map, "selector_secrets"));
for (var i=0; i < this.sceneOrder.size$(); i++) {
var name=C$.stringAt$javajs_util_Lst$I(this.sceneOrder, i);
var thisScene=C$.getMapList$java_util_Map$S(scenes, name);
if (thisScene == null ) continue;
this.pymolScene.buildScene$S$javajs_util_Lst$java_util_Map$java_util_Map(name, thisScene, htObjNames, htSecrets);
this.appendLoadNote$S("scene: " + name);
}
}this.pymolScene.setCarveSets$java_util_Map(htObjNames);
}, p$1);

Clazz.newMeth(C$, 'finalizeSceneData', function () {
var cartoonTypes=Clazz.array(Integer.TYPE, [this.$ac]);
var uniqueIDs=Clazz.array(Integer.TYPE, [this.$ac]);
var sequenceNumbers=Clazz.array(Integer.TYPE, [this.$ac]);
var newChain=Clazz.array(Boolean.TYPE, [this.$ac]);
var radii=Clazz.array(Float.TYPE, [this.$ac]);
var lastAtomChain=-2147483648;
var lastAtomSet=-2147483648;
for (var i=0; i < this.$ac; i++) {
cartoonTypes[i]=this.getCartoonType$I(i);
uniqueIDs[i]=this.getUniqueID$I(i);
sequenceNumbers[i]=this.getSequenceNumber$I(i);
radii[i]=this.getVDW$I(i);
if (lastAtomChain != this.atoms[i].chainID || lastAtomSet != this.atoms[i].atomSetIndex ) {
newChain[i]=true;
lastAtomChain=this.atoms[i].chainID;
lastAtomSet=this.atoms[i].atomSetIndex;
}}
this.pymolScene.setAtomInfo$IA$IA$IA$ZA$FA(uniqueIDs, cartoonTypes, sequenceNumbers, newChain, radii);
}, p$1);

Clazz.newMeth(C$, 'intAt$javajs_util_Lst$I', function (list, i) {
return (list == null  ? -1 : (list.get$I(i)).intValue$());
}, 1);

Clazz.newMeth(C$, 'pointAt$javajs_util_Lst$I$javajs_util_P3', function (list, i, pt) {
pt.set$F$F$F(C$.floatAt$javajs_util_Lst$I(list, i++), C$.floatAt$javajs_util_Lst$I(list, i++), C$.floatAt$javajs_util_Lst$I(list, i));
return pt;
}, 1);

Clazz.newMeth(C$, 'floatsAt$javajs_util_Lst$I$FA$I', function (a, pt, data, len) {
if (a == null ) return null;
for (var i=0; i < len; i++) data[i]=C$.floatAt$javajs_util_Lst$I(a, pt++);

return data;
}, 1);

Clazz.newMeth(C$, 'floatAt$javajs_util_Lst$I', function (list, i) {
return (list == null  || i >= list.size$()  ? 0 : (list.get$I(i)).floatValue$());
}, 1);

Clazz.newMeth(C$, 'listAt$javajs_util_Lst$I', function (list, i) {
if (list == null  || i >= list.size$() ) return null;
var o=list.get$I(i);
return (Clazz.instanceOf(o, "javajs.util.Lst") ? o : null);
}, 1);

Clazz.newMeth(C$, 'sublistAt$javajs_util_Lst$IA', function (mesh, pt) {
for (var i=0; i < pt.length; i++) mesh=mesh.get$I(pt[i]);

return mesh;
}, 1);

Clazz.newMeth(C$, 'listToMap$javajs_util_Lst', function (list) {
var map=Clazz.new_($I$(10));
for (var i=list.size$(); --i >= 0; ) {
var item=C$.listAt$javajs_util_Lst$I(list, i);
if (item != null  && item.size$() > 0 ) map.put$TK$TV(C$.stringAt$javajs_util_Lst$I(item, 0), item);
}
return map;
}, 1);

Clazz.newMeth(C$, 'stringAt$javajs_util_Lst$I', function (list, i) {
var a=list.get$I(i);
return (a.length == 0 ? " " : C$.bytesToString$O(a));
}, 1);

Clazz.newMeth(C$, 'bytesToString$O', function (object) {
try {
return  String.instantialize(object, "UTF-8");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return object.toString();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'colorSettingClamped$javajs_util_Lst$javajs_util_P3', function (c, ptTemp) {
return C$.getColorPt$O$javajs_util_P3(c.get$I(c.size$() < 6 || C$.intAt$javajs_util_Lst$I(c, 4) == 0  ? 2 : 5), ptTemp);
}, 1);

Clazz.newMeth(C$, 'getColorPt$O$javajs_util_P3', function (o, ptTemp) {
return (o == null  ? 0 : Clazz.instanceOf(o, "java.lang.Integer") ? (o).intValue$() : $I$(20).colorPtToFFRGB$javajs_util_T3(C$.pointAt$javajs_util_Lst$I$javajs_util_P3(o, 0, ptTemp)));
}, 1);

Clazz.newMeth(C$, 'getMapList$java_util_Map$S', function (map, key) {
return map.get$O(key);
}, 1);

Clazz.newMeth(C$, 'getBsReps$javajs_util_Lst', function (list) {
if (list == null ) return null;
var bsReps=Clazz.new_($I$(1));
var n=Math.min(list.size$(), 21);
for (var i=0; i < n; i++) {
if (C$.intAt$javajs_util_Lst$I(list, i) == 1) bsReps.set$I(i);
}
return bsReps;
}, 1);

Clazz.newMeth(C$, 'getUniqueID$I', function (iAtom) {
return (this.atoms[iAtom].vib.x|0);
});

Clazz.newMeth(C$, 'getCartoonType$I', function (iAtom) {
return (this.atoms[iAtom].vib.y|0);
});

Clazz.newMeth(C$, 'getVDW$I', function (iAtom) {
return this.atoms[iAtom].radius;
});

Clazz.newMeth(C$, 'getSequenceNumber$I', function (iAtom) {
return this.atoms[iAtom].sequenceNumber;
});

Clazz.newMeth(C$, 'compareAtoms$I$I', function (iPrev, i) {
return this.atoms[iPrev].chainID != this.atoms[i].chainID;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
