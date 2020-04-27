(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.SB','org.jmol.viewer.Viewer','javajs.util.PT','org.jmol.c.VDW','org.jmol.util.Edge','org.jmol.modelset.BondSet','org.jmol.modelset.Bond','org.jmol.util.Escape','org.jmol.util.BSUtil','org.jmol.viewer.JC','org.jmol.viewer.StateManager','org.jmol.util.ColorEncoder','org.jmol.script.T','org.jmol.viewer.GlobalSettings','java.util.Arrays','org.jmol.c.STR','org.jmol.shape.Shape','org.jmol.util.Font','javajs.util.P3','org.jmol.shape.Measures','org.jmol.util.C','javajs.util.BS','org.jmol.c.PAL','org.jmol.modelset.AtomCollection','org.jmol.util.Logger','java.util.Date']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StateCreator", null, 'org.jmol.viewer.JmolStateCreator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.temp=Clazz.new_($I$(1,1));
this.temp2=Clazz.new_($I$(1,1));
this.temp3=Clazz.new_($I$(1,1));
this.undoWorking=false;
},1);

C$.$fields$=[['Z',['undoWorking'],'O',['vwr','org.jmol.viewer.Viewer','temp','java.util.Map','+temp2','+temp3']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
});

Clazz.newMeth(C$, 'getStateScript$S$I$I', function (type, width, height) {
var isAll=(type == null  || type.equalsIgnoreCase$S("all") );
var s=Clazz.new_($I$(2,1));
var sfunc=(isAll ? Clazz.new_($I$(2,1)).append$S("function _setState() {\n") : null);
if (isAll) {
s.append$S("# Jmol state version " + $I$(3).getJmolVersion$() + ";\n" );
if (this.vwr.isApplet) {
p$1.app$javajs_util_SB$S.apply(this, [s, "# fullName = " + $I$(4).esc$S(this.vwr.fullName)]);
p$1.app$javajs_util_SB$S.apply(this, [s, "# documentBase = " + (function(a,f){return f.apply(null,a)})([$I$(3).appletDocumentBase],$I$(4).esc$S)]);
p$1.app$javajs_util_SB$S.apply(this, [s, "# codeBase = " + (function(a,f){return f.apply(null,a)})([$I$(3).appletCodeBase],$I$(4).esc$S)]);
s.append$S("\n");
}}var global=this.vwr.g;
if (isAll || type.equalsIgnoreCase$S("windowState") ) s.append$S(p$1.getWindowState$javajs_util_SB$I$I.apply(this, [sfunc, width, height]));
if (isAll || type.equalsIgnoreCase$S("fileState") ) s.append$S(p$1.getFileState$javajs_util_SB.apply(this, [sfunc]));
if (isAll || type.equalsIgnoreCase$S("definedState") ) s.append$S(p$1.getDefinedState$javajs_util_SB$Z.apply(this, [sfunc, true]));
if (isAll || type.equalsIgnoreCase$S("variableState") ) s.append$S(p$1.getParameterState$org_jmol_viewer_GlobalSettings$javajs_util_SB.apply(this, [global, sfunc]));
if (isAll || type.equalsIgnoreCase$S("dataState") ) s.append$S(p$1.getDataState$javajs_util_SB.apply(this, [sfunc]));
if (isAll || type.equalsIgnoreCase$S("modelState") ) s.append$S(this.getModelState$javajs_util_SB$Z$Z(sfunc, true, this.vwr.getBooleanProperty$S("saveProteinStructureState")));
if (isAll || type.equalsIgnoreCase$S("colorState") ) s.append$S(p$1.getColorState$org_jmol_viewer_ColorManager$javajs_util_SB.apply(this, [this.vwr.cm, sfunc]));
if (isAll || type.equalsIgnoreCase$S("frameState") ) s.append$S(p$1.getAnimState$org_jmol_viewer_AnimationManager$javajs_util_SB.apply(this, [this.vwr.am, sfunc]));
if (isAll || type.equalsIgnoreCase$S("perspectiveState") ) s.append$S(p$1.getViewState$org_jmol_viewer_TransformManager$javajs_util_SB.apply(this, [this.vwr.tm, sfunc]));
if (isAll || type.equalsIgnoreCase$S("selectionState") ) s.append$S(p$1.getSelectionState$org_jmol_viewer_SelectionManager$javajs_util_SB.apply(this, [this.vwr.slm, sfunc]));
if (sfunc != null ) {
p$1.app$javajs_util_SB$S.apply(this, [sfunc, "set refreshing true"]);
p$1.app$javajs_util_SB$S.apply(this, [sfunc, "set antialiasDisplay " + global.antialiasDisplay]);
p$1.app$javajs_util_SB$S.apply(this, [sfunc, "set antialiasTranslucent " + global.antialiasTranslucent]);
p$1.app$javajs_util_SB$S.apply(this, [sfunc, "set antialiasImages " + global.antialiasImages]);
if (this.vwr.tm.spinOn) p$1.app$javajs_util_SB$S.apply(this, [sfunc, "spin on"]);
sfunc.append$S("}\n\n_setState;\n");
}if (isAll) s.appendSB$javajs_util_SB(sfunc);
return s.toString();
});

Clazz.newMeth(C$, 'getDataState$javajs_util_SB', function (sfunc) {
var commands=Clazz.new_($I$(2,1));
var haveData=false;
var atomProps=this.getAtomicPropertyState$I$javajs_util_BS(-1, null);
if (atomProps.length$() > 0) {
haveData=true;
commands.append$S(atomProps);
}if (this.vwr.userVdws != null ) {
var info=this.vwr.getDefaultVdwNameOrData$I$org_jmol_c_VDW$javajs_util_BS(0, $I$(5).USER, this.vwr.bsUserVdws);
if (info.length$() > 0) {
haveData=true;
commands.append$S(info);
}}if (this.vwr.nmrCalculation != null ) haveData|=this.vwr.nmrCalculation.getState$javajs_util_SB(commands);
if (this.vwr.dm != null ) haveData|=this.vwr.dm.getDataState$org_jmol_viewer_JmolStateCreator$javajs_util_SB(this, commands);
if (!haveData) return "";
var cmd="";
if (sfunc != null ) {
sfunc.append$S("  _setDataState;\n");
cmd="function _setDataState() {\n";
commands.append$S("}\n\n");
}return cmd + commands.toString();
}, p$1);

Clazz.newMeth(C$, 'getDefinedState$javajs_util_SB$Z', function (sfunc, isAll) {
var ms=this.vwr.ms;
var len=ms.stateScripts.size$();
if (len == 0) return "";
var haveDefs=false;
var commands=Clazz.new_($I$(2,1));
var cmd;
for (var i=0; i < len; i++) {
var ss=ms.stateScripts.get$I(i);
if (ss.inDefinedStateBlock && (cmd=ss.toString()).length$() > 0 ) {
p$1.app$javajs_util_SB$S.apply(this, [commands, cmd]);
haveDefs=true;
}}
if (!haveDefs) return "";
cmd="";
if (isAll && sfunc != null  ) {
sfunc.append$S("  _setDefinedState;\n");
cmd="function _setDefinedState() {\n\n";
}if (sfunc != null ) commands.append$S("\n}\n\n");
return cmd + commands.toString();
}, p$1);

Clazz.newMeth(C$, 'getModelState$javajs_util_SB$Z$Z', function (sfunc, isAll, withProteinStructure) {
var commands=Clazz.new_($I$(2,1));
if (isAll && sfunc != null  ) {
sfunc.append$S("  _setModelState;\n");
commands.append$S("function _setModelState() {\n");
}var cmd;
var ms=this.vwr.ms;
var bonds=ms.bo;
var models=ms.am;
var modelCount=ms.mc;
if (isAll) {
var len=ms.stateScripts.size$();
for (var i=0; i < len; i++) {
var ss=ms.stateScripts.get$I(i);
if (!ss.inDefinedStateBlock && (cmd=ss.toString()).length$() > 0 ) {
p$1.app$javajs_util_SB$S.apply(this, [commands, cmd]);
}}
var sb=Clazz.new_($I$(2,1));
for (var i=0; i < ms.bondCount; i++) if (!models[bonds[i].atom1.mi].isModelKit) if (bonds[i].isHydrogen$() || (bonds[i].order & 131072) != 0 ) {
var bond=bonds[i];
var index=bond.atom1.i;
if (bond.atom1.group.isAdded$I(index)) index=-1 - index;
sb.appendI$I(index).appendC$C("\t").appendI$I(bond.atom2.i).appendC$C("\t").appendI$I(bond.order & ~131072).appendC$C("\t").appendF$F(bond.mad / 1000.0).appendC$C("\t").appendF$F(bond.getEnergy$()).appendC$C("\t").append$S($I$(6).getBondOrderNameFromOrder$I(bond.order)).append$S(";\n");
}
if (sb.length$() > 0) commands.append$S("data \"connect_atoms\"\n").appendSB$javajs_util_SB(sb).append$S("end \"connect_atoms\";\n");
commands.append$S("\n");
}if (ms.haveHiddenBonds) {
var bs=Clazz.new_($I$(7,1));
for (var i=ms.bondCount; --i >= 0; ) if (bonds[i].mad != 0 && (bonds[i].shapeVisibilityFlags & $I$(8).myVisibilityFlag) == 0 ) bs.set$I(i);

if (bs.isEmpty$()) ms.haveHiddenBonds=false;
 else commands.append$S("  hide ").append$S($I$(9).eBond$javajs_util_BS(bs)).append$S(";\n");
}this.vwr.setModelVisibility$();
if (withProteinStructure) commands.append$S(ms.getProteinStructureState$javajs_util_BS$I(null, isAll ? 1073742327 : 1073742158));
for (var i=0; i < modelCount; i++) if (models[i].mat4 != null ) commands.append$S("  frame orientation " + ms.getModelNumberDotted$I(i) + $I$(9).matrixToScript$O(models[i].mat4) + ";\n" );

p$1.getShapeStatePriv$javajs_util_SB$Z$I.apply(this, [commands, isAll, 2147483647]);
if (isAll) {
var needOrientations=false;
for (var i=0; i < modelCount; i++) if (models[i].isJmolDataFrame) {
needOrientations=true;
break;
}
var sb=Clazz.new_($I$(2,1));
for (var i=0; i < modelCount; i++) {
var m=models[i];
sb.setLength$I(0);
var s=ms.getInfo$I$S(i, "modelID");
if (s != null  && !s.equals$O(ms.getInfo$I$S(i, "modelID0")) ) sb.append$S("  frame ID ").append$S($I$(4).esc$S(s)).append$S(";\n");
var t=ms.frameTitles[i];
if (t != null  && t.length$() > 0 ) sb.append$S("  frame title ").append$S($I$(4).esc$S(t)).append$S(";\n");
if (needOrientations && m.orientation != null   && !ms.isTrajectorySubFrame$I(i) ) sb.append$S("  ").append$S(m.orientation.getMoveToText$Z(false)).append$S(";\n");
if (m.frameDelay != 0 && !ms.isTrajectorySubFrame$I(i) ) sb.append$S("  frame delay ").appendF$F(m.frameDelay / 1000.0).append$S(";\n");
if (m.simpleCage != null ) {
sb.append$S("  unitcell ").append$S((function(a,f){return f.apply(null,a)})([m.simpleCage.getUnitCellVectors$()],$I$(9).eAP$javajs_util_T3A)).append$S(";\n");
p$1.getShapeStatePriv$javajs_util_SB$Z$I.apply(this, [sb, isAll, 33]);
}if (sb.length$() > 0) commands.append$S("  frame " + ms.getModelNumberDotted$I(i) + ";\n" ).appendSB$javajs_util_SB(sb);
}
var loadUC=false;
if (ms.unitCells != null ) {
var haveModulation=false;
for (var i=0; i < modelCount; i++) {
var symmetry=ms.getUnitCell$I(i);
if (symmetry == null ) continue;
sb.setLength$I(0);
if (symmetry.getState$javajs_util_SB(sb)) {
loadUC=true;
commands.append$S("  frame ").append$S(ms.getModelNumberDotted$I(i)).appendSB$javajs_util_SB(sb).append$S(";\n");
}haveModulation|=(this.vwr.ms.getLastVibrationVector$I$I(i, 1275072532) >= 0);
}
if (loadUC) this.vwr.shm.loadShape$I(33);
p$1.getShapeStatePriv$javajs_util_SB$Z$I.apply(this, [commands, isAll, 33]);
if (haveModulation) {
var temp=Clazz.new_($I$(1,1));
var ivib;
for (var i=modelCount; --i >= 0; ) {
if ((ivib=this.vwr.ms.getLastVibrationVector$I$I(i, 1275072532)) >= 0) for (var j=models[i].firstAtomIndex; j <= ivib; j++) {
var mset=ms.getModulation$I(j);
if (mset != null ) (function(a,f){return f.apply(null,a)})([temp, j, j, mset.getState$()],$I$(10).setMapBitSet$java_util_Map$I$I$S);
}
}
commands.append$S(this.getCommands$java_util_Map$java_util_Map$S(temp, null, "select"));
}}commands.append$S("  set fontScaling " + this.vwr.getBoolean$I(603979845) + ";\n" );
}if (sfunc != null ) commands.append$S("\n}\n\n");
return commands.toString();
});

Clazz.newMeth(C$, 'getWindowState$javajs_util_SB$I$I', function (sfunc, width, height) {
var global=this.vwr.g;
var str=Clazz.new_($I$(2,1));
if (sfunc != null ) {
sfunc.append$S("  initialize;\n  set refreshing false;\n  _setWindowState;\n");
str.append$S("\nfunction _setWindowState() {\n");
}if (width != 0) str.append$S("# preferredWidthHeight ").appendI$I(width).append$S(" ").appendI$I(height).append$S(";\n");
str.append$S("# width ").appendI$I(width == 0 ? this.vwr.getScreenWidth$() : width).append$S(";\n# height ").appendI$I(height == 0 ? this.vwr.getScreenHeight$() : height).append$S(";\n");
p$1.app$javajs_util_SB$S.apply(this, [str, "stateVersion = " + $I$(11).versionInt]);
p$1.app$javajs_util_SB$S.apply(this, [str, "background " + $I$(9).escapeColor$I(global.objColors[0])]);
for (var i=1; i < 7; i++) if (global.objColors[i] != 0) p$1.app$javajs_util_SB$S.apply(this, [str, $I$(12).getObjectNameFromId$I(i) + "Color = \"" + $I$(9).escapeColor$I(global.objColors[i]) + '\"' ]);

if (global.backgroundImageFileName != null ) {
p$1.app$javajs_util_SB$S.apply(this, [str, "background IMAGE " + (global.backgroundImageFileName.startsWith$S(";base64,") ? "" : "/*file*/") + $I$(4).esc$S(global.backgroundImageFileName) ]);
}str.append$S(this.getLightingState$Z(false));
if (sfunc != null ) str.append$S("}\n\n");
return str.toString();
}, p$1);

Clazz.newMeth(C$, 'getLightingState$Z', function (isAll) {
var str=Clazz.new_($I$(2,1));
var g=this.vwr.gdata;
p$1.app$javajs_util_SB$S.apply(this, [str, "set ambientPercent " + g.getAmbientPercent$()]);
p$1.app$javajs_util_SB$S.apply(this, [str, "set diffusePercent " + g.getDiffusePercent$()]);
p$1.app$javajs_util_SB$S.apply(this, [str, "set specular " + g.getSpecular$()]);
p$1.app$javajs_util_SB$S.apply(this, [str, "set specularPercent " + g.getSpecularPercent$()]);
p$1.app$javajs_util_SB$S.apply(this, [str, "set specularPower " + g.getSpecularPower$()]);
var se=g.getSpecularExponent$();
var pe=g.getPhongExponent$();
p$1.app$javajs_util_SB$S.apply(this, [str, (Math.pow(2, se) == pe  ? "set specularExponent " + se : "set phongExponent " + pe)]);
p$1.app$javajs_util_SB$S.apply(this, [str, "set celShading " + g.getCel$()]);
p$1.app$javajs_util_SB$S.apply(this, [str, "set celShadingPower " + g.getCelPower$()]);
p$1.app$javajs_util_SB$S.apply(this, [str, "set zShadePower " + this.vwr.g.zShadePower]);
if (isAll) p$1.getZshadeState$javajs_util_SB$org_jmol_viewer_TransformManager$Z.apply(this, [str, this.vwr.tm, true]);
return str.toString();
});

Clazz.newMeth(C$, 'getFileState$javajs_util_SB', function (sfunc) {
var commands=Clazz.new_($I$(2,1));
if (sfunc != null ) {
sfunc.append$S("  _setFileState;\n");
commands.append$S("function _setFileState() {\n\n");
}if (commands.indexOf$S("append") < 0 && this.vwr.getModelSetFileName$().equals$O("zapped") ) commands.append$S("  zap;\n");
p$1.appendLoadStates$javajs_util_SB.apply(this, [commands]);
if (sfunc != null ) commands.append$S("\n}\n\n");
return commands.toString();
}, p$1);

Clazz.newMeth(C$, 'appendLoadStates$javajs_util_SB', function (cmds) {
var ligandModelSet=this.vwr.ligandModelSet;
if (ligandModelSet != null ) {
for (var key, $key = ligandModelSet.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var data=this.vwr.ligandModels.get$O(key + "_data");
if (data != null ) cmds.append$S("  ").append$S((function(a,f){return f.apply(null,a)})(["ligand_" + key, data.trim$() + "\n", 0],$I$(9).encapsulateData$S$O$I));
data=this.vwr.ligandModels.get$O(key + "_file");
if (data != null ) cmds.append$S("  ").append$S((function(a,f){return f.apply(null,a)})(["file_" + key, data.trim$() + "\n", 0],$I$(9).encapsulateData$S$O$I));
}
}var commands=Clazz.new_($I$(2,1));
var ms=this.vwr.ms;
var models=ms.am;
var modelCount=ms.mc;
for (var i=0; i < modelCount; i++) {
if (ms.isJmolDataFrameForModel$I(i) || ms.isTrajectorySubFrame$I(i) ) continue;
var m=models[i];
var pt=commands.indexOf$S(m.loadState);
if (pt < 0 || pt != commands.lastIndexOf$S(m.loadState) ) commands.append$S(models[i].loadState);
if (models[i].isModelKit) {
var bs=ms.getModelAtomBitSetIncludingDeleted$I$Z(i, false);
if (ms.tainted != null ) {
if (ms.tainted[2] != null ) ms.tainted[2].andNot$javajs_util_BS(bs);
if (ms.tainted[3] != null ) ms.tainted[3].andNot$javajs_util_BS(bs);
}m.loadScript=Clazz.new_($I$(2,1));
this.getInlineData$javajs_util_SB$S$Z$S(commands, this.vwr.getModelExtract$O$Z$Z$S(bs, false, true, "MOL"), i > 0, null);
} else {
commands.appendSB$javajs_util_SB(m.loadScript);
}}
var s=commands.toString();
if (s.indexOf$S("data \"append ") < 0) {
var i=s.indexOf$S("load /*data*/");
var j=s.indexOf$S("load /*file*/");
if (j >= 0 && j < i ) i=j;
if ((j=s.indexOf$S("load \"@")) >= 0 && j < i ) i=j;
if (i >= 0) s=s.substring$I$I(0, i) + "zap;" + s.substring$I(i) ;
}cmds.append$S(s);
}, p$1);

Clazz.newMeth(C$, 'getInlineData$javajs_util_SB$S$Z$S', function (loadScript, strModel, isAppend, loadFilter) {
var tag=(isAppend ? "append" : "model") + " inline";
loadScript.append$S("load /*data*/ data \"").append$S(tag).append$S("\"\n").append$S(strModel).append$S("end \"").append$S(tag).append$S(loadFilter == null  || loadFilter.length$() == 0  ? "" : " filter" + $I$(4).esc$S(loadFilter)).append$S("\";");
});

Clazz.newMeth(C$, 'getColorState$org_jmol_viewer_ColorManager$javajs_util_SB', function (cm, sfunc) {
var s=Clazz.new_($I$(2,1));
var n=p$1.getCEState$org_jmol_util_ColorEncoder$javajs_util_SB.apply(this, [cm.ce, s]);
if (n > 0 && sfunc != null  ) sfunc.append$S("\n  _setColorState\n");
return (n > 0 && sfunc != null   ? "function _setColorState() {\n" + s.append$S("}\n\n").toString() : s.toString());
}, p$1);

Clazz.newMeth(C$, 'getCEState$org_jmol_util_ColorEncoder$javajs_util_SB', function (p, s) {
var n=0;
for (var entry, $entry = p.schemes.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var name=entry.getKey$();
if (!!(name.length$() > 0 & n++ >= 0)) s.append$S("color \"" + name + "=" + (function(a,f){return f.apply(null,a)})([entry.getValue$()],$I$(13).getColorSchemeList$IA) + "\";\n" );
}
return n;
}, p$1);

Clazz.newMeth(C$, 'getAnimState$org_jmol_viewer_AnimationManager$javajs_util_SB', function (am, sfunc) {
var modelCount=this.vwr.ms.mc;
if (modelCount < 2) return "";
var commands=Clazz.new_($I$(2,1));
if (sfunc != null ) {
sfunc.append$S("  _setFrameState;\n");
commands.append$S("function _setFrameState() {\n");
}commands.append$S("# frame state;\n");
commands.append$S("# modelCount ").appendI$I(modelCount).append$S(";\n# first ").append$S(this.vwr.getModelNumberDotted$I(0)).append$S(";\n# last ").append$S(this.vwr.getModelNumberDotted$I(modelCount - 1)).append$S(";\n");
if (am.backgroundModelIndex >= 0) p$1.app$javajs_util_SB$S.apply(this, [commands, "set backgroundModel " + this.vwr.getModelNumberDotted$I(am.backgroundModelIndex)]);
if (this.vwr.tm.bsFrameOffsets != null ) {
p$1.app$javajs_util_SB$S.apply(this, [commands, "frame align " + $I$(9).eBS$javajs_util_BS(this.vwr.tm.bsFrameOffsets)]);
} else if (this.vwr.ms.translations != null ) {
for (var i=modelCount; --i >= 0; ) {
var t=(this.vwr.ms.getTranslation$I(i));
if (t != null ) p$1.app$javajs_util_SB$S.apply(this, [commands, "frame " + this.vwr.ms.getModelNumberDotted$I(i) + " align " + t ]);
}
}p$1.app$javajs_util_SB$S.apply(this, [commands, "frame RANGE " + am.getModelSpecial$I(-1) + " " + am.getModelSpecial$I(1) ]);
p$1.app$javajs_util_SB$S.apply(this, [commands, "animation DIRECTION " + (am.animationDirection == 1 ? "+1" : "-1")]);
p$1.app$javajs_util_SB$S.apply(this, [commands, "animation FPS " + am.animationFps]);
p$1.app$javajs_util_SB$S.apply(this, [commands, "animation MODE " + $I$(14).nameOf$I(am.animationReplayMode) + " " + new Float(am.firstFrameDelay).toString() + " " + new Float(am.lastFrameDelay).toString() ]);
if (am.morphCount > 0) p$1.app$javajs_util_SB$S.apply(this, [commands, "animation MORPH " + am.morphCount]);
var showModel=true;
if (am.animationFrames != null ) {
p$1.app$javajs_util_SB$S.apply(this, [commands, "anim frames " + $I$(9).eAI$IA(am.animationFrames)]);
var i=am.caf;
p$1.app$javajs_util_SB$S.apply(this, [commands, "frame " + (i + 1)]);
showModel=(am.cmi != am.modelIndexForFrame$I(i));
}if (showModel) {
var s=am.getModelSpecial$I(0);
p$1.app$javajs_util_SB$S.apply(this, [commands, s.equals$O("0") ? "frame *" : "model " + s]);
}p$1.app$javajs_util_SB$S.apply(this, [commands, "animation " + (!am.animationOn ? "OFF" : am.currentDirection == 1 ? "PLAY" : "PLAYREV")]);
if (am.animationOn && am.animationPaused ) p$1.app$javajs_util_SB$S.apply(this, [commands, "animation PAUSE"]);
if (sfunc != null ) commands.append$S("}\n\n");
return commands.toString();
}, p$1);

Clazz.newMeth(C$, 'getParameterState$org_jmol_viewer_GlobalSettings$javajs_util_SB', function (global, sfunc) {
var list=Clazz.array(String, [global.htBooleanParameterFlags.size$() + global.htNonbooleanParameterValues.size$()]);
var commands=Clazz.new_($I$(2,1));
var isState=(sfunc != null );
if (isState) {
sfunc.append$S("  _setParameterState;\n");
commands.append$S("function _setParameterState() {\n\n");
}var n=0;
for (var key, $key = global.htBooleanParameterFlags.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) if ($I$(15).doReportProperty$S(key)) list[n++]="set " + key + " " + global.htBooleanParameterFlags.get$O(key) ;

for (var key, $key = global.htNonbooleanParameterValues.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) if ($I$(15).doReportProperty$S(key)) {
var value=global.htNonbooleanParameterValues.get$O(key);
if (key.charAt$I(0) == "=") {
key=key.substring$I(1);
} else {
key=(key.indexOf$S("default") == 0 ? " " : "") + "set " + key ;
value=$I$(9).e$O(value);
}list[n++]=key + " " + value ;
}
switch (global.axesMode) {
case 603979808:
list[n++]="set axes unitcell";
break;
case 603979804:
list[n++]="set axes molecular";
break;
default:
list[n++]="set axes window";
}
$I$(16).sort$OA$I$I(list, 0, n);
for (var i=0; i < n; i++) if (list[i] != null ) p$1.app$javajs_util_SB$S.apply(this, [commands, list[i]]);

var s=$I$(12).getVariableList$java_util_Map$I$Z$Z(global.htUserVariables, 0, false, true);
if (s.length$() > 0) {
commands.append$S("\n#user-defined atom sets; \n");
commands.append$S(s);
}if (this.vwr.shm.getShape$I(5) != null ) commands.append$S(p$1.getDefaultLabelState$org_jmol_shape_Labels.apply(this, [this.vwr.shm.shapes[5]]));
if (global.haveSetStructureList) {
var slist=global.structureList;
commands.append$S("struture HELIX set " + (function(a,f){return f.apply(null,a)})([slist.get$O($I$(17).HELIX)],$I$(9).eAF$FA));
commands.append$S("struture SHEET set " + (function(a,f){return f.apply(null,a)})([slist.get$O($I$(17).SHEET)],$I$(9).eAF$FA));
commands.append$S("struture TURN set " + (function(a,f){return f.apply(null,a)})([slist.get$O($I$(17).TURN)],$I$(9).eAF$FA));
}if (sfunc != null ) commands.append$S("\n}\n\n");
return commands.toString();
}, p$1);

Clazz.newMeth(C$, 'getDefaultLabelState$org_jmol_shape_Labels', function (l) {
var s=Clazz.new_($I$(2,1)).append$S("\n# label defaults;\n");
p$1.app$javajs_util_SB$S.apply(this, [s, "select none"]);
p$1.app$javajs_util_SB$S.apply(this, [s, $I$(18).getColorCommand$S$B$H$Z("label", l.defaultPaletteID, l.defaultColix, l.translucentAllowed)]);
p$1.app$javajs_util_SB$S.apply(this, [s, "background label " + $I$(18).encodeColor$H(l.defaultBgcolix)]);
p$1.app$javajs_util_SB$S.apply(this, [s, "set labelOffset " + $I$(11).getXOffset$I(l.defaultOffset) + " " + ($I$(11).getYOffset$I(l.defaultOffset)) ]);
var align=$I$(11).getHorizAlignmentName$I(l.defaultAlignment);
p$1.app$javajs_util_SB$S.apply(this, [s, "set labelAlignment " + (align.length$() < 5 ? "left" : align)]);
var pointer=$I$(11).getPointerName$I(l.defaultPointer);
p$1.app$javajs_util_SB$S.apply(this, [s, "set labelPointer " + (pointer.length$() == 0 ? "off" : pointer)]);
if ((l.defaultZPos & 32) != 0) p$1.app$javajs_util_SB$S.apply(this, [s, "set labelFront"]);
 else if ((l.defaultZPos & 16) != 0) p$1.app$javajs_util_SB$S.apply(this, [s, "set labelGroup"]);
p$1.app$javajs_util_SB$S.apply(this, [s, (function(a,f){return f.apply(null,a)})(["label", $I$(19).getFont3D$B(l.defaultFontId)],$I$(18).getFontCommand$S$org_jmol_util_Font)]);
return s.toString();
}, p$1);

Clazz.newMeth(C$, 'getSelectionState$org_jmol_viewer_SelectionManager$javajs_util_SB', function (sm, sfunc) {
var commands=Clazz.new_($I$(2,1));
if (sfunc != null ) {
sfunc.append$S("  _setSelectionState;\n");
commands.append$S("function _setSelectionState() {\n");
}if (this.vwr.ms.trajectory != null ) p$1.app$javajs_util_SB$S.apply(this, [commands, this.vwr.ms.trajectory.getState$()]);
var temp=Clazz.new_($I$(1,1));
var cmd=null;
p$1.addBs$javajs_util_SB$S$javajs_util_BS.apply(this, [commands, "hide ", sm.bsHidden]);
p$1.addBs$javajs_util_SB$S$javajs_util_BS.apply(this, [commands, "subset ", sm.bsSubset]);
p$1.addBs$javajs_util_SB$S$javajs_util_BS.apply(this, [commands, "delete ", sm.bsDeleted]);
p$1.addBs$javajs_util_SB$S$javajs_util_BS.apply(this, [commands, "fix ", sm.bsFixed]);
temp.put$O$O("-", this.vwr.slm.getSelectedAtomsNoSubset$());
cmd=this.getCommands$java_util_Map$java_util_Map$S(temp, null, "select");
if (cmd == null ) p$1.app$javajs_util_SB$S.apply(this, [commands, "select none"]);
 else commands.append$S(cmd);
p$1.app$javajs_util_SB$S.apply(this, [commands, "set hideNotSelected " + sm.hideNotSelected]);
commands.append$S(this.vwr.getShapeProperty$I$S(1, "selectionState"));
if (this.vwr.getSelectionHalosEnabled$()) p$1.app$javajs_util_SB$S.apply(this, [commands, "SelectionHalos ON"]);
if (sfunc != null ) commands.append$S("}\n\n");
return commands.toString();
}, p$1);

Clazz.newMeth(C$, 'getViewState$org_jmol_viewer_TransformManager$javajs_util_SB', function (tm, sfunc) {
var commands=Clazz.new_($I$(2,1));
var moveToText=tm.getMoveToText$F$Z(0, false);
if (sfunc != null ) {
sfunc.append$S("  _setPerspectiveState;\n");
commands.append$S("function _setPerspectiveState() {\n");
}p$1.app$javajs_util_SB$S.apply(this, [commands, "set perspectiveModel " + tm.perspectiveModel]);
p$1.app$javajs_util_SB$S.apply(this, [commands, "set scaleAngstromsPerInch " + new Float(tm.scale3DAngstromsPerInch).toString()]);
p$1.app$javajs_util_SB$S.apply(this, [commands, "set perspectiveDepth " + tm.perspectiveDepth]);
p$1.app$javajs_util_SB$S.apply(this, [commands, "set visualRange " + new Float(tm.visualRangeAngstroms).toString()]);
if (!tm.isWindowCentered$()) p$1.app$javajs_util_SB$S.apply(this, [commands, "set windowCentered false"]);
p$1.app$javajs_util_SB$S.apply(this, [commands, "set cameraDepth " + new Float(tm.cameraDepth).toString()]);
var navigating=(tm.mode == 1);
if (navigating) p$1.app$javajs_util_SB$S.apply(this, [commands, "set navigationMode true"]);
p$1.app$javajs_util_SB$S.apply(this, [commands, this.vwr.ms.getBoundBoxCommand$Z(false)]);
p$1.app$javajs_util_SB$S.apply(this, [commands, "center " + $I$(9).eP$javajs_util_T3(tm.fixedRotationCenter)]);
commands.append$S(this.vwr.getOrientationText$I$S$javajs_util_BS(1073742034, null, null).toString());
p$1.app$javajs_util_SB$S.apply(this, [commands, moveToText]);
if (!navigating && !tm.zoomEnabled ) p$1.app$javajs_util_SB$S.apply(this, [commands, "zoom off"]);
commands.append$S("  slab ").appendI$I(tm.slabPercentSetting).append$S(";depth ").appendI$I(tm.depthPercentSetting).append$S(tm.slabEnabled && !navigating  ? ";slab on" : "").append$S(";\n");
commands.append$S("  set slabRange ").appendF$F(tm.slabRange).append$S(";\n");
if (tm.slabPlane != null ) commands.append$S("  slab plane ").append$S($I$(9).eP4$javajs_util_P4(tm.slabPlane)).append$S(";\n");
if (tm.depthPlane != null ) commands.append$S("  depth plane ").append$S($I$(9).eP4$javajs_util_P4(tm.depthPlane)).append$S(";\n");
p$1.getZshadeState$javajs_util_SB$org_jmol_viewer_TransformManager$Z.apply(this, [commands, tm, false]);
commands.append$S(this.getSpinState$Z(true)).append$S("\n");
if (this.vwr.ms.modelSetHasVibrationVectors$() && tm.vibrationOn ) p$1.app$javajs_util_SB$S.apply(this, [commands, "set vibrationPeriod " + new Float(tm.vibrationPeriod).toString() + ";vibration on" ]);
var slabInternal=(tm.depthPlane != null  || tm.slabPlane != null  );
if (navigating) {
commands.append$S(tm.getNavigationState$());
}if (!tm.slabEnabled && slabInternal ) commands.append$S("  slab off;\n");
if (sfunc != null ) commands.append$S("}\n\n");
return commands.toString();
}, p$1);

Clazz.newMeth(C$, 'getZshadeState$javajs_util_SB$org_jmol_viewer_TransformManager$Z', function (s, tm, isAll) {
if (isAll) {
p$1.app$javajs_util_SB$S.apply(this, [s, "set zDepth " + tm.zDepthPercentSetting]);
p$1.app$javajs_util_SB$S.apply(this, [s, "set zSlab " + tm.zSlabPercentSetting]);
if (!tm.zShadeEnabled) p$1.app$javajs_util_SB$S.apply(this, [s, "set zShade false"]);
}if (tm.zShadeEnabled) p$1.app$javajs_util_SB$S.apply(this, [s, "set zShade true"]);
try {
if (tm.zSlabPoint != null ) p$1.app$javajs_util_SB$S.apply(this, [s, "set zSlab " + $I$(9).eP$javajs_util_T3(tm.zSlabPoint)]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getSpinState$Z', function (isAll) {
var tm=this.vwr.tm;
var s="  set spinX " + (tm.spinX|0) + "; set spinY " + (tm.spinY|0) + "; set spinZ " + (tm.spinZ|0) + "; set spinFps " + (tm.spinFps|0) + ";" ;
if (!Float.isNaN$F(tm.navFps)) s += "  set navX " + (tm.navX|0) + "; set navY " + (tm.navY|0) + "; set navZ " + (tm.navZ|0) + "; set navFps " + (tm.navFps|0) + ";" ;
if (tm.navOn) s += " navigation on;";
if (!tm.spinOn) return s;
var prefix=(tm.isSpinSelected ? "\n  select " + (function(a,f){return f.apply(null,a)})([this.vwr.bsA$()],$I$(9).eBS$javajs_util_BS) + ";\n  rotateSelected"  : "\n ");
if (tm.isSpinInternal) {
var pt=$I$(20).newP$javajs_util_T3(tm.internalRotationCenter);
pt.sub$javajs_util_T3(tm.rotationAxis);
s += prefix + " spin " + new Float(tm.rotationRate).toString() + " " + $I$(9).eP$javajs_util_T3(tm.internalRotationCenter) + " " + $I$(9).eP$javajs_util_T3(pt) ;
} else if (tm.isSpinFixed) {
s += prefix + " spin axisangle " + $I$(9).eP$javajs_util_T3(tm.rotationAxis) + " " + new Float(tm.rotationRate).toString() ;
} else {
s += " spin on";
}return s + ";";
});

Clazz.newMeth(C$, 'getCommands$java_util_Map$java_util_Map$S', function (htDefine, htMore, selectCmd) {
var s=Clazz.new_($I$(2,1));
var setPrev=p$1.getCommands2$java_util_Map$javajs_util_SB$S$S.apply(this, [htDefine, s, null, selectCmd]);
if (htMore != null ) p$1.getCommands2$java_util_Map$javajs_util_SB$S$S.apply(this, [htMore, s, setPrev, "select"]);
return s.toString();
});

Clazz.newMeth(C$, 'getCommands2$java_util_Map$javajs_util_SB$S$S', function (ht, s, setPrev, selectCmd) {
if (ht == null ) return "";
for (var entry, $entry = ht.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
var set=(function(a,f){return f.apply(null,a)})([entry.getValue$()],$I$(9).eBS$javajs_util_BS);
if (set.length$() < 5) continue;
set=selectCmd + " " + set ;
if (!set.equals$O(setPrev)) p$1.app$javajs_util_SB$S.apply(this, [s, set]);
setPrev=set;
if (key.indexOf$S("-") != 0) p$1.app$javajs_util_SB$S.apply(this, [s, key]);
}
return setPrev;
}, p$1);

Clazz.newMeth(C$, 'app$javajs_util_SB$S', function (s, cmd) {
if (cmd.length$() != 0) s.append$S("  ").append$S(cmd).append$S(";\n");
}, p$1);

Clazz.newMeth(C$, 'addBs$javajs_util_SB$S$javajs_util_BS', function (sb, key, bs) {
if (bs == null  || bs.length$() == 0 ) return;
p$1.app$javajs_util_SB$S.apply(this, [sb, key + $I$(9).eBS$javajs_util_BS(bs)]);
}, p$1);

Clazz.newMeth(C$, 'getFontState$S$org_jmol_util_Font', function (myType, font3d) {
var objId=(function(a,f){return f.apply(null,a)})([myType.equalsIgnoreCase$S("axes") ? "axis" : myType],$I$(12).getObjectIdFromName$S);
if (objId < 0) return "";
var mad=this.vwr.getObjectMad10$I(objId);
var s=Clazz.new_($I$(2,1)).append$S("\n");
p$1.app$javajs_util_SB$S.apply(this, [s, myType + (mad == 0 ? " off" : mad == 1 ? " on" : mad == -1 ? " dotted" : mad < 20 ? " " + mad : " " + (new Float(mad / 20000.0).toString()))]);
if (s.length$() < 3) return "";
var fcmd=$I$(18).getFontCommand$S$org_jmol_util_Font(myType, font3d);
if (fcmd.length$() > 0) fcmd="  " + fcmd + ";\n" ;
return (s + fcmd);
}, p$1);

Clazz.newMeth(C$, 'appendTickInfo$S$javajs_util_SB$org_jmol_modelset_TickInfo', function (myType, sb, t) {
sb.append$S("  ");
sb.append$S(myType);
C$.addTickInfo$javajs_util_SB$org_jmol_modelset_TickInfo$Z(sb, t, false);
sb.append$S(";\n");
}, p$1);

Clazz.newMeth(C$, 'addTickInfo$javajs_util_SB$org_jmol_modelset_TickInfo$Z', function (sb, tickInfo, addFirst) {
sb.append$S(" ticks ").append$S(tickInfo.type).append$S(" ").append$S($I$(9).eP$javajs_util_T3(tickInfo.ticks));
var isUnitCell=(tickInfo.scale != null  && Float.isNaN$F(tickInfo.scale.x) );
if (isUnitCell) sb.append$S(" UNITCELL");
if (tickInfo.tickLabelFormats != null ) sb.append$S(" format ").append$S($I$(9).eAS$SA$Z(tickInfo.tickLabelFormats, false));
if (!isUnitCell && tickInfo.scale != null  ) sb.append$S(" scale ").append$S($I$(9).eP$javajs_util_T3(tickInfo.scale));
if (addFirst && !Float.isNaN$F(tickInfo.first) && tickInfo.first != 0   ) sb.append$S(" first ").appendF$F(tickInfo.first);
if (tickInfo.reference != null ) sb.append$S(" point ").append$S($I$(9).eP$javajs_util_T3(tickInfo.reference));
}, 1);

Clazz.newMeth(C$, 'getMeasurementState$org_jmol_shape_Measures', function (shape) {
var mList=shape.measurements;
var measurementCount=shape.measurementCount;
var font3d=$I$(21).font3d;
var ti=shape.defaultTickInfo;
var commands=Clazz.new_($I$(2,1));
p$1.app$javajs_util_SB$S.apply(this, [commands, "measures delete"]);
for (var i=0; i < measurementCount; i++) {
var m=mList.get$I(i);
var count=m.count;
var sb=Clazz.new_($I$(2,1)).append$S("measure");
if (m.thisID != null ) sb.append$S(" ID ").append$S($I$(4).esc$S(m.thisID));
if (m.mad != 0) sb.append$S(" radius ").appendF$F(m.thisID == null  || m.mad > 0  ? m.mad / 2000.0 : 0);
if (m.colix != 0) sb.append$S(" color ").append$S((function(a,f){return f.apply(null,a)})([$I$(22).getArgb$H(m.colix)],$I$(9).escapeColor$I));
if (m.text != null ) {
if (m.text.font != null ) sb.append$S(" font ").append$S(m.text.font.getInfo$());
if (m.text.align != 0) sb.append$S(" align ").append$S($I$(11).getHorizAlignmentName$I(m.text.align));
if (m.text.pymolOffset != null ) sb.append$S(" offset ").append$S($I$(9).eAF$FA(m.text.pymolOffset));
}var tickInfo=m.tickInfo;
if (tickInfo != null ) C$.addTickInfo$javajs_util_SB$org_jmol_modelset_TickInfo$Z(sb, tickInfo, true);
for (var j=1; j <= count; j++) sb.append$S(" ").append$S(m.getLabel$I$Z$Z(j, true, true));

sb.append$S("; # " + shape.getInfoAsString$I(i));
p$1.app$javajs_util_SB$S.apply(this, [commands, sb.toString()]);
}
p$1.app$javajs_util_SB$S.apply(this, [commands, "select *; set measures " + this.vwr.g.measureDistanceUnits]);
p$1.app$javajs_util_SB$S.apply(this, [commands, $I$(18).getFontCommand$S$org_jmol_util_Font("measures", font3d)]);
var nHidden=0;
var temp=Clazz.new_($I$(1,1));
var bs=$I$(23).newN$I(measurementCount);
for (var i=0; i < measurementCount; i++) {
var m=mList.get$I(i);
if (m.isHidden) {
nHidden++;
bs.set$I(i);
}if (shape.bsColixSet != null  && shape.bsColixSet.get$I(i) ) (function(a,f){return f.apply(null,a)})([temp, i, i, $I$(18).getColorCommandUnk$S$H$Z("measure", m.colix, shape.translucentAllowed)],$I$(10).setMapBitSet$java_util_Map$I$I$S);
if (m.strFormat != null ) (function(a,f){return f.apply(null,a)})([temp, i, i, "measure " + $I$(4).esc$S(m.strFormat)],$I$(10).setMapBitSet$java_util_Map$I$I$S);
}
if (nHidden > 0) if (nHidden == measurementCount) p$1.app$javajs_util_SB$S.apply(this, [commands, "measures off; # lines and numbers off"]);
 else for (var i=0; i < measurementCount; i++) if (bs.get$I(i)) $I$(10).setMapBitSet$java_util_Map$I$I$S(temp, i, i, "measure off");

if (ti != null ) {
commands.append$S(" measure ");
C$.addTickInfo$javajs_util_SB$org_jmol_modelset_TickInfo$Z(commands, ti, true);
commands.append$S(";\n");
}if (shape.mad >= 0) commands.append$S(" set measurements ").appendF$F(shape.mad / 2000.0).append$S(";\n");
var s=this.getCommands$java_util_Map$java_util_Map$S(temp, null, "select measures");
if (s != null  && s.length$() != 0 ) {
commands.append$S(s);
p$1.app$javajs_util_SB$S.apply(this, [commands, "select measures ({null})"]);
}return commands.toString();
}, p$1);

Clazz.newMeth(C$, 'getShapeStatePriv$javajs_util_SB$Z$I', function (commands, isAll, iShape) {
var shapes=this.vwr.shm.shapes;
if (shapes == null ) return;
var i;
var imax;
if (iShape == 2147483647) {
i=0;
imax=37;
} else {
imax=(i=iShape) + 1;
}for (; i < imax; ++i) {
var shape=shapes[i];
if (shape != null  && (isAll || i >= 9 && i < 16  ) ) {
var cmd=p$1.getShapeState$org_jmol_shape_Shape.apply(this, [shape]);
if (cmd != null  && cmd.length$() > 1 ) commands.append$S(cmd);
}}
commands.append$S("  select *;\n");
}, p$1);

Clazz.newMeth(C$, 'getBondState$org_jmol_shape_Sticks', function (shape) {
var bsOrderSet=shape.bsOrderSet;
var reportAll=shape.reportAll;
p$1.clearTemp.apply(this, []);
var modelSet=this.vwr.ms;
var haveTainted=false;
var bonds=modelSet.bo;
var bondCount=modelSet.bondCount;
var r;
if (reportAll || shape.bsSizeSet != null  ) {
var i0=(reportAll ? bondCount - 1 : shape.bsSizeSet.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(reportAll ? i - 1 : shape.bsSizeSet.nextSetBit$I(i + 1))) (function(a,f){return f.apply(null,a)})([this.temp, i, i, "wireframe " + ((r=bonds[i].mad) == 1 ? "on" : "" + $I$(4).escF$F(r / 2000.0))],$I$(10).setMapBitSet$java_util_Map$I$I$S);

}if (reportAll || bsOrderSet != null  ) {
var i0=(reportAll ? bondCount - 1 : bsOrderSet.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(reportAll ? i - 1 : bsOrderSet.nextSetBit$I(i + 1))) {
var bond=bonds[i];
if (reportAll || (bond.order & 131072) == 0 ) (function(a,f){return f.apply(null,a)})([this.temp, i, i, "bondOrder " + $I$(6).getBondOrderNameFromOrder$I(bond.order)],$I$(10).setMapBitSet$java_util_Map$I$I$S);
}
}if (shape.bsColixSet != null ) for (var i=shape.bsColixSet.nextSetBit$I(0); i >= 0; i=shape.bsColixSet.nextSetBit$I(i + 1)) {
var colix=bonds[i].colix;
if ((colix & -30721) == 2) (function(a,f){return f.apply(null,a)})([this.temp, i, i, (function(a,f){return f.apply(null,a)})(["bonds", $I$(24).CPK.id, colix, shape.translucentAllowed],$I$(18).getColorCommand$S$B$H$Z)],$I$(10).setMapBitSet$java_util_Map$I$I$S);
 else (function(a,f){return f.apply(null,a)})([this.temp, i, i, $I$(18).getColorCommandUnk$S$H$Z("bonds", colix, shape.translucentAllowed)],$I$(10).setMapBitSet$java_util_Map$I$I$S);
}
var s=this.getCommands$java_util_Map$java_util_Map$S(this.temp, null, "select BONDS") + "\n" + (haveTainted ? this.getCommands$java_util_Map$java_util_Map$S(this.temp2, null, "select BONDS") + "\n" : "") ;
p$1.clearTemp.apply(this, []);
return s;
}, p$1);

Clazz.newMeth(C$, 'clearTemp', function () {
this.temp.clear$();
this.temp2.clear$();
}, p$1);

Clazz.newMeth(C$, 'getShapeState$org_jmol_shape_Shape', function (shape) {
var s;
switch (shape.shapeID) {
case 34:
s=p$1.getAxesState$org_jmol_shape_Axes.apply(this, [shape]);
break;
case 33:
if (!this.vwr.ms.haveUnitCells) return "";
var st=s=p$1.getFontLineShapeState$org_jmol_shape_FontLineShape.apply(this, [shape]);
var iAtom=this.vwr.am.cai;
if (iAtom >= 0) s += "  unitcell ({" + iAtom + "});\n" ;
var uc=this.vwr.getCurrentUnitCell$();
if (uc != null ) {
s += uc.getUnitCellState$();
s += st;
}break;
case 32:
s=p$1.getFontLineShapeState$org_jmol_shape_FontLineShape.apply(this, [shape]);
break;
case 36:
s=p$1.getFontState$S$org_jmol_util_Font.apply(this, [shape.myType, (shape).baseFont3d]);
break;
case 6:
s=p$1.getMeasurementState$org_jmol_shape_Measures.apply(this, [shape]);
break;
case 7:
case 18:
s=this.getAtomShapeState$org_jmol_shape_AtomShape(shape);
break;
case 1:
s=p$1.getBondState$org_jmol_shape_Sticks.apply(this, [shape]);
break;
case 31:
var es=shape;
var sb=Clazz.new_($I$(2,1));
sb.append$S("\n  set echo off;\n");
for (var t, $t = es.objects.values$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
sb.append$S(p$1.getTextState$org_jmol_modelset_Text.apply(this, [t]));
if (t.hidden) sb.append$S("  set echo ID ").append$S($I$(4).esc$S(t.target)).append$S(" hidden;\n");
}
s=sb.toString();
break;
case 8:
var hs=shape;
s=this.getAtomShapeState$org_jmol_shape_AtomShape(hs) + (hs.colixSelection == 2 ? "" : hs.colixSelection == 0 ? "  color SelectionHalos NONE;\n" : $I$(18).getColorCommandUnk$S$H$Z("selectionHalos", hs.colixSelection, hs.translucentAllowed) + ";\n");
if (hs.bsHighlight != null ) s += "  set highlight " + $I$(9).eBS$javajs_util_BS(hs.bsHighlight) + "; " + $I$(18).getColorCommandUnk$S$H$Z("highlight", hs.colixHighlight, hs.translucentAllowed) + ";\n" ;
break;
case 35:
p$1.clearTemp.apply(this, []);
var h=shape;
if (h.atomFormats != null ) for (var i=this.vwr.ms.ac; --i >= 0; ) if (h.atomFormats[i] != null ) (function(a,f){return f.apply(null,a)})([this.temp, i, i, "set hoverLabel " + $I$(4).esc$S(h.atomFormats[i])],$I$(10).setMapBitSet$java_util_Map$I$I$S);

s="\n  hover " + (function(a,f){return f.apply(null,a)})([(h.labelFormat == null  ? "" : h.labelFormat)],$I$(4).esc$S) + ";\n" + this.getCommands$java_util_Map$java_util_Map$S(this.temp, null, "select") ;
p$1.clearTemp.apply(this, []);
break;
case 5:
var l=shape;
if (!l.isActive || l.bsSizeSet == null  ) return "";
p$1.clearTemp.apply(this, []);
for (var i=l.bsSizeSet.nextSetBit$I(0); i >= 0; i=l.bsSizeSet.nextSetBit$I(i + 1)) {
var t=l.getLabel$I(i);
var cmd="label ";
if (t == null ) {
cmd += $I$(4).esc$S(l.formats[i]);
} else {
cmd += $I$(4).esc$S(t.textUnformatted);
if (t.pymolOffset != null ) cmd += ";set labelOffset " + $I$(9).eAF$FA(t.pymolOffset);
}$I$(10).setMapBitSet$java_util_Map$I$I$S(this.temp, i, i, cmd);
if (l.bsColixSet != null  && l.bsColixSet.get$I(i) ) (function(a,f){return f.apply(null,a)})([this.temp2, i, i, $I$(18).getColorCommand$S$B$H$Z("label", l.paletteIDs[i], l.colixes[i], l.translucentAllowed)],$I$(10).setMapBitSet$java_util_Map$I$I$S);
if (l.bsBgColixSet != null  && l.bsBgColixSet.get$I(i) ) (function(a,f){return f.apply(null,a)})([this.temp2, i, i, "background label " + $I$(18).encodeColor$H(l.bgcolixes[i])],$I$(10).setMapBitSet$java_util_Map$I$I$S);
var text=l.getLabel$I(i);
var sppm=(text != null  ? text.scalePixelsPerMicron : 0);
if (sppm > 0 ) (function(a,f){return f.apply(null,a)})([this.temp2, i, i, "set labelScaleReference " + (new Float(10000.0 / sppm).toString())],$I$(10).setMapBitSet$java_util_Map$I$I$S);
if (l.offsets != null  && l.offsets.length > i ) {
var offsetFull=l.offsets[i];
(function(a,f){return f.apply(null,a)})([this.temp2, i, i, "set " + ($I$(11).isOffsetAbsolute$I(offsetFull) ? "labelOffsetAbsolute " : "labelOffset ") + $I$(11).getXOffset$I(offsetFull) + " " + $I$(11).getYOffset$I(offsetFull) ],$I$(10).setMapBitSet$java_util_Map$I$I$S);
var align=$I$(11).getHorizAlignmentName$I(offsetFull >> 2);
var pointer=$I$(11).getPointerName$I(offsetFull);
if (pointer.length$() > 0) $I$(10).setMapBitSet$java_util_Map$I$I$S(this.temp2, i, i, "set labelPointer " + pointer);
if ((offsetFull & 32) != 0) $I$(10).setMapBitSet$java_util_Map$I$I$S(this.temp2, i, i, "set labelFront");
 else if ((offsetFull & 16) != 0) $I$(10).setMapBitSet$java_util_Map$I$I$S(this.temp2, i, i, "set labelGroup");
if (align.length$() > 0) $I$(10).setMapBitSet$java_util_Map$I$I$S(this.temp3, i, i, "set labelAlignment " + align);
}if (l.mads != null  && l.mads[i] < 0 ) $I$(10).setMapBitSet$java_util_Map$I$I$S(this.temp2, i, i, "set toggleLabel");
if (l.bsFontSet != null  && l.bsFontSet.get$I(i) ) (function(a,f){return f.apply(null,a)})([this.temp2, i, i, (function(a,f){return f.apply(null,a)})(["label", $I$(19).getFont3D$B(l.fids[i])],$I$(18).getFontCommand$S$org_jmol_util_Font)],$I$(10).setMapBitSet$java_util_Map$I$I$S);
}
s=this.getCommands$java_util_Map$java_util_Map$S(this.temp, this.temp2, "select") + this.getCommands$java_util_Map$java_util_Map$S(null, this.temp3, "select");
this.temp3.clear$();
p$1.clearTemp.apply(this, []);
break;
case 0:
p$1.clearTemp.apply(this, []);
var ac=this.vwr.ms.ac;
var atoms=this.vwr.ms.at;
var balls=shape;
var colixes=balls.colixes;
var pids=balls.paletteIDs;
var r=0;
for (var i=0; i < ac; i++) {
if (shape.bsSizeSet != null  && shape.bsSizeSet.get$I(i) ) {
if ((r=atoms[i].madAtom) < 0 ) $I$(10).setMapBitSet$java_util_Map$I$I$S(this.temp, i, i, "Spacefill on");
 else (function(a,f){return f.apply(null,a)})([this.temp, i, i, "Spacefill " + $I$(4).escF$F(r / 2000.0)],$I$(10).setMapBitSet$java_util_Map$I$I$S);
}if (shape.bsColixSet != null  && shape.bsColixSet.get$I(i) ) {
var pid=atoms[i].paletteID;
if (pid != $I$(24).CPK.id || $I$(22).isColixTranslucent$H(atoms[i].colixAtom) ) (function(a,f){return f.apply(null,a)})([this.temp, i, i, $I$(18).getColorCommand$S$B$H$Z("atoms", pid, atoms[i].colixAtom, shape.translucentAllowed)],$I$(10).setMapBitSet$java_util_Map$I$I$S);
if (colixes != null  && i < colixes.length ) (function(a,f){return f.apply(null,a)})([this.temp2, i, i, $I$(18).getColorCommand$S$B$H$Z("balls", pids[i], colixes[i], shape.translucentAllowed)],$I$(10).setMapBitSet$java_util_Map$I$I$S);
}}
s=this.getCommands$java_util_Map$java_util_Map$S(this.temp, this.temp2, "select");
p$1.clearTemp.apply(this, []);
break;
default:
s=shape.getShapeState$();
break;
}
return s;
}, p$1);

Clazz.newMeth(C$, 'getFontLineShapeState$org_jmol_shape_FontLineShape', function (shape) {
var s=p$1.getFontState$S$org_jmol_util_Font.apply(this, [shape.myType, shape.font3d]);
if (shape.tickInfos == null ) return s;
var isOff=(s.indexOf$S(" off") >= 0);
var sb=Clazz.new_($I$(2,1));
sb.append$S(s);
for (var i=0; i < 4; i++) if (shape.tickInfos[i] != null ) p$1.appendTickInfo$S$javajs_util_SB$org_jmol_modelset_TickInfo.apply(this, [shape.myType, sb, shape.tickInfos[i]]);

if (isOff) sb.append$S("  " + shape.myType + " off;\n" );
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'getAxesState$org_jmol_shape_Axes', function (axes) {
var sb=Clazz.new_($I$(2,1));
sb.append$S(p$1.getFontLineShapeState$org_jmol_shape_FontLineShape.apply(this, [axes]));
sb.append$S("  axes scale ").appendF$F(this.vwr.getFloat$I(570425346)).append$S(";\n");
if (axes.fixedOrigin != null ) sb.append$S("  axes center ").append$S($I$(9).eP$javajs_util_T3(axes.fixedOrigin)).append$S(";\n");
var axisXY=axes.axisXY;
if (axisXY.z != 0 ) sb.append$S("  axes position [").appendI$I((axisXY.x|0)).append$S(" ").appendI$I((axisXY.y|0)).append$S(" ").append$S(axisXY.z < 0  ? " %" : "").append$S("];\n");
var labels=axes.labels;
if (labels != null ) {
sb.append$S("  axes labels ");
for (var i=0; i < labels.length; i++) if (labels[i] != null ) sb.append$S($I$(4).esc$S(labels[i])).append$S(" ");

sb.append$S(";\n");
}if (axes.axisType != null ) {
sb.append$S("  axes type " + $I$(4).esc$S(axes.axisType));
}return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'getAtomShapeState$org_jmol_shape_AtomShape', function (shape) {
if (!shape.isActive) return "";
p$1.clearTemp.apply(this, []);
var type=$I$(11).shapeClassBases[shape.shapeID];
var isVector=(shape.shapeID == 18);
var mad;
if (shape.bsSizeSet != null ) for (var i=shape.bsSizeSet.nextSetBit$I(0); i >= 0; i=shape.bsSizeSet.nextSetBit$I(i + 1)) (function(a,f){return f.apply(null,a)})([this.temp, i, i, type + " " + ((mad=shape.mads[i]) < 0 ? (isVector && mad < -1  ? "" + -mad : "on") : $I$(4).escF$F(mad / 2000.0)) ],$I$(10).setMapBitSet$java_util_Map$I$I$S);

if (shape.bsColixSet != null ) for (var i=shape.bsColixSet.nextSetBit$I(0); i >= 0; i=shape.bsColixSet.nextSetBit$I(i + 1)) (function(a,f){return f.apply(null,a)})([this.temp2, i, i, $I$(18).getColorCommand$S$B$H$Z(type, shape.paletteIDs[i], shape.colixes[i], shape.translucentAllowed)],$I$(10).setMapBitSet$java_util_Map$I$I$S);

var s=this.getCommands$java_util_Map$java_util_Map$S(this.temp, this.temp2, "select");
p$1.clearTemp.apply(this, []);
return s;
});

Clazz.newMeth(C$, 'getTextState$org_jmol_modelset_Text', function (t) {
var s=Clazz.new_($I$(2,1));
var text=t.text;
if (text == null  || !t.isEcho  || t.target.equals$O("error") ) return "";
var isImage=(t.image != null );
var strOff=null;
var echoCmd="set echo ID " + $I$(4).esc$S(t.target);
switch (t.valign) {
case 3:
if (t.movableXPercent == 2147483647 || t.movableYPercent == 2147483647 ) {
strOff=(t.movableXPercent == 2147483647 ? t.movableX + " " : t.movableXPercent + "% ") + (t.movableYPercent == 2147483647 ? t.movableY + "" : t.movableYPercent + "%");
} else {
strOff="[" + t.movableXPercent + " " + t.movableYPercent + "%]" ;
}case 4:
if (strOff == null ) strOff=$I$(9).eP$javajs_util_T3(t.xyz);
s.append$S("  ").append$S(echoCmd).append$S(" ").append$S(strOff);
if (t.align != 4) s.append$S(";  ").append$S(echoCmd).append$S(" ").append$S($I$(11).getHorizAlignmentName$I(t.align));
break;
default:
s.append$S("  set echo ").append$S($I$(11).getEchoName$I(t.valign)).append$S(" ").append$S($I$(11).getHorizAlignmentName$I(t.align));
}
if (t.movableZPercent != 2147483647) s.append$S(";  ").append$S(echoCmd).append$S(" depth ").appendI$I(t.movableZPercent);
if (isImage) s.append$S("; ").append$S(echoCmd).append$S(" IMAGE /*file*/");
 else s.append$S("; echo ");
s.append$S($I$(4).esc$S(text));
s.append$S(";\n");
if (isImage && t.imageScale != 1  ) s.append$S("  ").append$S(echoCmd).append$S(" scale ").appendF$F(t.imageScale).append$S(";\n");
if (t.script != null ) s.append$S("  ").append$S(echoCmd).append$S(" script ").append$S($I$(4).esc$S(t.script)).append$S(";\n");
if (t.modelIndex >= 0) s.append$S("  ").append$S(echoCmd).append$S(" model ").append$S(this.vwr.getModelNumberDotted$I(t.modelIndex)).append$S(";\n");
if (t.pointerPt != null ) {
s.append$S("  ").append$S(echoCmd).append$S(" point ").append$S(Clazz.instanceOf(t.pointerPt, "org.jmol.modelset.Atom") ? "({" + (t.pointerPt).i + "})"  : $I$(9).eP$javajs_util_T3(t.pointerPt)).append$S(";\n");
}if (t.pymolOffset != null ) {
s.append$S("  ").append$S(echoCmd).append$S(" offset ").append$S($I$(9).escapeFloatA$FA$Z(t.pymolOffset, true)).append$S(";\n");
}t.appendFontCmd$javajs_util_SB(s);
s.append$S("; color echo");
if ($I$(22).isColixTranslucent$H(t.colix)) s.append$S($I$(22).getColixTranslucencyLabel$H(t.colix));
s.append$S(" ").append$S($I$(22).getHexCode$H(t.colix));
if (t.bgcolix != 0) {
s.append$S("; color echo background ");
if ($I$(22).isColixTranslucent$H(t.bgcolix)) s.append$S($I$(22).getColixTranslucencyLabel$H(t.bgcolix)).append$S(" ");
s.append$S($I$(22).getHexCode$H(t.bgcolix));
}s.append$S(";\n");
return s.toString();
}, p$1);

Clazz.newMeth(C$, 'getAllSettings$S', function (prefix) {
var g=this.vwr.g;
var commands=Clazz.new_($I$(2,1));
var list=Clazz.array(String, [g.htBooleanParameterFlags.size$() + g.htNonbooleanParameterValues.size$() + g.htUserVariables.size$() ]);
var n=0;
var _prefix="_" + prefix;
for (var key, $key = g.htBooleanParameterFlags.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (prefix == null  || key.indexOf$S(prefix) == 0  || key.indexOf$S(_prefix) == 0 ) list[n++]=(key.indexOf$S("_") == 0 ? key + " = " : "set " + key + " " ) + g.htBooleanParameterFlags.get$O(key);
}
for (var key, $key = g.htNonbooleanParameterValues.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (key.charAt$I(0) != "@" && (prefix == null  || key.indexOf$S(prefix) == 0  || key.indexOf$S(_prefix) == 0 ) ) {
var value=g.htNonbooleanParameterValues.get$O(key);
if (Clazz.instanceOf(value, "java.lang.String")) value=C$.chop$S($I$(4).esc$S(value));
list[n++]=(key.indexOf$S("_") == 0 ? key + " = " : "set " + key + " " ) + value;
}}
for (var key, $key = g.htUserVariables.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (prefix == null  || key.indexOf$S(prefix) == 0 ) {
var value=g.htUserVariables.get$O(key);
var s=value.escape$();
list[n++]=key + " " + (key.startsWith$S("@") ? "" : "= ") + (value.tok == 4 ? C$.chop$S($I$(4).esc$S(s)) : s) ;
}}
$I$(16).sort$OA$I$I(list, 0, n);
for (var i=0; i < n; i++) if (list[i] != null ) p$1.app$javajs_util_SB$S.apply(this, [commands, list[i]]);

commands.append$S("\n");
return commands.toString();
});

Clazz.newMeth(C$, 'chop$S', function (s) {
var len=s.length$();
if (len < 512) return s;
var sb=Clazz.new_($I$(2,1));
var sep="\"\\\n    + \"";
var pt=0;
for (var i=72; i < len; pt=i, i+=72) {
while (s.charAt$I(i - 1) == "\\")i++;

sb.append$S((pt == 0 ? "" : sep)).append$S(s.substring$I$I(pt, i));
}
sb.append$S(sep).append$S(s.substring$I$I(pt, len));
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'getFunctionCalls$S', function (f) {
if (f == null ) f="";
var s=Clazz.new_($I$(2,1));
var pt=f.indexOf$S("*");
var isGeneric=(pt >= 0);
var isStatic=(f.indexOf$S("static_") == 0);
var namesOnly=(f.equalsIgnoreCase$S("names") || f.equalsIgnoreCase$S("static_names") );
if (namesOnly) f="";
if (isGeneric) f=f.substring$I$I(0, pt);
f=f.toLowerCase$();
if (isStatic || f.length$() == 0 ) p$1.addFunctions$javajs_util_SB$java_util_Map$S$Z$Z.apply(this, [s, $I$(3).staticFunctions, f, isGeneric, namesOnly]);
if (!isStatic || f.length$() == 0 ) p$1.addFunctions$javajs_util_SB$java_util_Map$S$Z$Z.apply(this, [s, this.vwr.localFunctions, f, isGeneric, namesOnly]);
return s.toString();
});

Clazz.newMeth(C$, 'addFunctions$javajs_util_SB$java_util_Map$S$Z$Z', function (s, ht, selectedFunction, isGeneric, namesOnly) {
var names=Clazz.array(String, [ht.size$()]);
var n=0;
for (var name, $name = ht.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) if (selectedFunction.length$() == 0 && !name.startsWith$S("_")  || name.equalsIgnoreCase$S(selectedFunction)  || isGeneric && name.toLowerCase$().indexOf$S(selectedFunction) == 0  ) names[n++]=name;

$I$(16).sort$OA$I$I(names, 0, n);
for (var i=0; i < n; i++) {
var f=ht.get$O(names[i]);
s.append$S(namesOnly ? f.getSignature$() : f.toString());
s.appendC$C("\n");
}
}, p$1);

Clazz.newMeth(C$, 'isTainted$javajs_util_BSA$I$I', function (tainted, atomIndex, type) {
return (tainted != null  && tainted[type] != null   && tainted[type].get$I(atomIndex) );
}, 1);

Clazz.newMeth(C$, 'getAtomicPropertyState$I$javajs_util_BS', function (taintWhat, bsSelected) {
if (!this.vwr.g.preserveState) return "";
var bs;
var commands=Clazz.new_($I$(2,1));
for (var type=0; type < 17; type++) if (taintWhat < 0 || type == taintWhat ) if ((bs=(bsSelected != null  ? bsSelected : this.vwr.ms.getTaintedAtoms$I(type))) != null ) this.getAtomicPropertyStateBuffer$javajs_util_SB$I$javajs_util_BS$S$FA(commands, type, bs, null, null);

return commands.toString();
});

Clazz.newMeth(C$, 'getAtomicPropertyStateBuffer$javajs_util_SB$I$javajs_util_BS$S$FA', function (commands, type, bs, label, fData) {
if (!this.vwr.g.preserveState) return;
var s=Clazz.new_($I$(2,1));
var dataLabel=(label == null  ? $I$(25).userSettableValues[type] : label) + " set";
var n=0;
var isDefault=(type == 2);
var atoms=this.vwr.ms.at;
var tainted=this.vwr.ms.tainted;
if (bs != null ) for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (atoms[i].isDeleted$()) continue;
s.appendI$I(i + 1).append$S(" ").append$S(atoms[i].getElementSymbol$()).append$S(" ").append$S(atoms[i].getInfo$().replace$C$C(" ", "_")).append$S(" ");
switch (type) {
case 17:
if (i < fData.length) s.appendF$F(fData[i]);
break;
case 13:
s.appendI$I(atoms[i].getAtomNumber$());
break;
case 16:
s.append$S(atoms[i].getChainIDStr$());
break;
case 15:
s.appendI$I(atoms[i].group.getResno$());
break;
case 14:
s.appendI$I(atoms[i].getSeqID$());
break;
case 0:
s.append$S(atoms[i].getAtomName$());
break;
case 1:
s.append$S(atoms[i].getAtomType$());
break;
case 2:
if (C$.isTainted$javajs_util_BSA$I$I(tainted, i, 2)) isDefault=false;
s.appendF$F(atoms[i].x).append$S(" ").appendF$F(atoms[i].y).append$S(" ").appendF$F(atoms[i].z);
break;
case 12:
var v=atoms[i].getVibrationVector$();
if (v == null ) s.append$S("0 0 0");
 else if (Float.isNaN$F(v.modScale)) s.appendF$F(v.x).append$S(" ").appendF$F(v.y).append$S(" ").appendF$F(v.z);
 else s.appendF$F(1.4E-45).append$S(" ").appendF$F(1.4E-45).append$S(" ").appendF$F(v.modScale);
break;
case 3:
s.appendI$I(atoms[i].getAtomicAndIsotopeNumber$());
break;
case 4:
s.appendI$I(atoms[i].getFormalCharge$());
break;
case 6:
s.appendF$F(atoms[i].getBondingRadius$());
break;
case 7:
s.appendI$I(atoms[i].getOccupancy100$());
break;
case 8:
s.appendF$F(atoms[i].getPartialCharge$());
break;
case 9:
s.appendF$F(atoms[i].getBfactor100$() / 100.0);
break;
case 10:
s.appendI$I(atoms[i].getValence$());
break;
case 11:
s.appendF$F(atoms[i].getVanderwaalsRadiusFloat$org_jmol_viewer_Viewer$org_jmol_c_VDW(this.vwr, $I$(5).AUTO));
break;
}
s.append$S(" ;\n");
++n;
}
if (n == 0) return;
if (isDefault) dataLabel += "(default)";
commands.append$S("\n  DATA \"" + dataLabel + "\"\n" ).appendI$I(n).append$S(" ;\nJmol Property Data Format 1 -- Jmol ").append$S($I$(3).getJmolVersion$()).append$S(";\n");
commands.appendSB$javajs_util_SB(s);
commands.append$S("  end \"" + dataLabel + "\";\n" );
});

Clazz.newMeth(C$, 'undoMoveAction$I$I', function (action, n) {
switch (action) {
case 4165:
case 4139:
switch (n) {
case -2:
this.vwr.undoClear$();
break;
case -1:
(action == 4165 ? this.vwr.actionStates : this.vwr.actionStatesRedo).clear$();
break;
case 0:
n=2147483647;
default:
if (n > 100) n=(action == 4165 ? this.vwr.actionStates : this.vwr.actionStatesRedo).size$();
for (var i=0; i < n; i++) this.undoMoveActionClear$I$I$Z(0, action, true);

}
break;
}
});

Clazz.newMeth(C$, 'undoMoveActionClear$I$I$Z', function (taintedAtom, type, clearRedo) {
if (!this.vwr.g.preserveState) return;
var modelIndex=(taintedAtom >= 0 ? this.vwr.ms.at[taintedAtom].mi : this.vwr.ms.mc - 1);
switch (type) {
case 4139:
case 4165:
this.vwr.stopMinimization$();
var s="";
var list1;
var list2;
switch (type) {
default:
case 4165:
list1=this.vwr.actionStates;
list2=this.vwr.actionStatesRedo;
break;
case 4139:
list1=this.vwr.actionStatesRedo;
list2=this.vwr.actionStates;
if (this.vwr.actionStatesRedo.size$() == 1) return;
break;
}
if (list1.size$() == 0 || this.undoWorking ) return;
this.undoWorking=true;
list2.add$I$O(0, list1.removeItemAt$I(0));
s=this.vwr.actionStatesRedo.get$I(0);
if (type == 4165 && list2.size$() == 1 ) {
var pt=Clazz.array(Integer.TYPE, -1, [1]);
type=$I$(4).parseIntNext$S$IA(s, pt);
taintedAtom=$I$(4).parseIntNext$S$IA(s, pt);
this.undoMoveActionClear$I$I$Z(taintedAtom, type, false);
}if (this.vwr.ms.am[modelIndex].isModelKit || s.indexOf$S("zap ") < 0 ) {
if ($I$(26).debugging) this.vwr.log$S(s);
this.vwr.evalStringQuiet$S(s);
} else {
this.vwr.actionStates.clear$();
}break;
default:
if (this.undoWorking && clearRedo ) return;
this.undoWorking=true;
var bs;
var sb=Clazz.new_($I$(2,1));
sb.append$S("#" + type + " " + taintedAtom + " " + (Clazz.new_($I$(27,1))) + "\n" );
if (taintedAtom >= 0) {
bs=this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex);
this.vwr.ms.taintAtoms$javajs_util_BS$I(bs, type);
sb.append$S(this.getAtomicPropertyState$I$javajs_util_BS(-1, null));
} else {
bs=this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex);
sb.append$S("zap ");
sb.append$S($I$(9).eBS$javajs_util_BS(bs)).append$S(";");
this.getInlineData$javajs_util_SB$S$Z$S(sb, this.vwr.getModelExtract$O$Z$Z$S(bs, false, true, "MOL"), true, null);
sb.append$S("set refreshing false;").append$S(this.vwr.acm.getPickingState$()).append$S(this.vwr.tm.getMoveToText$F$Z(0, false)).append$S("set refreshing true;");
}if (clearRedo) {
this.vwr.actionStates.add$I$O(0, sb.toString());
this.vwr.actionStatesRedo.clear$();
} else {
this.vwr.actionStatesRedo.add$I$O(1, sb.toString());
}if (this.vwr.actionStates.size$() == 100) {
this.vwr.actionStates.removeItemAt$I(99);
}}
this.undoWorking=!clearRedo;
});

Clazz.newMeth(C$, 'syncScript$S$S$I', function (script, applet, port) {
var sm=this.vwr.sm;
if ("GET_GRAPHICS".equalsIgnoreCase$S(script)) {
sm.setSyncDriver$I(5);
sm.syncSend$S$O$I(script, applet, 0);
this.vwr.setBooleanProperty$S$Z("_syncMouse", false);
this.vwr.setBooleanProperty$S$Z("_syncScript", false);
return;
}if ("=".equals$O(applet)) {
applet="~";
sm.setSyncDriver$I(2);
}var disableSend="~".equals$O(applet);
if (port > 0 || !disableSend && !".".equals$O(applet)  ) {
sm.syncSend$S$O$I(script, applet, port);
if (!"*".equals$O(applet) || script.startsWith$S("{") ) return;
}if (script.equalsIgnoreCase$S("on") || script.equalsIgnoreCase$S("true") ) {
sm.setSyncDriver$I(1);
return;
}if (script.equalsIgnoreCase$S("off") || script.equalsIgnoreCase$S("false") ) {
sm.setSyncDriver$I(0);
return;
}if (script.equalsIgnoreCase$S("slave")) {
sm.setSyncDriver$I(2);
return;
}var syncMode=sm.getSyncMode$();
if (syncMode == 0) return;
if (syncMode != 1) disableSend=false;
if ($I$(26).debugging) $I$(26).debug$S(this.vwr.htmlName + " syncing with script: " + script );
if (disableSend) sm.setSyncDriver$I(3);
if (script.indexOf$S("Mouse: ") != 0) {
var serviceMode=$I$(11).getServiceCommand$S(script);
switch (serviceMode) {
case 70:
case 42:
case 49:
case 56:
case 63:
sm.syncSend$S$O$I(script, ".", port);
return;
case -1:
break;
case 0:
case 77:
case 28:
case 35:
if (disableSend) return;
case 21:
case 7:
case 14:
if ((script=this.vwr.getJSV$().processSync$S$I(script, serviceMode)) == null ) return;
}
this.vwr.evalStringQuietSync$S$Z$Z(script, true, false);
return;
}this.mouseScript$S(script);
if (disableSend) this.vwr.setSyncDriver$I(4);
});

Clazz.newMeth(C$, 'mouseScript$S', function (script) {
var tokens=$I$(4).getTokens$S(script);
var key=tokens[1];
try {
key=(key.toLowerCase$() + "...............").substring$I$I(0, 15);
switch (("zoombyfactor...zoomby.........rotatezby......rotatexyby.....translatexyby..rotatemolecule.spinxyby.......rotatearcball..").indexOf$S(key)) {
case 0:
switch (tokens.length) {
case 3:
this.vwr.zoomByFactor$F$I$I($I$(4).parseFloat$S(tokens[2]), 2147483647, 2147483647);
return;
case 5:
this.vwr.zoomByFactor$F$I$I($I$(4).parseFloat$S(tokens[2]), $I$(4).parseInt$S(tokens[3]), $I$(4).parseInt$S(tokens[4]));
return;
}
break;
case 15:
switch (tokens.length) {
case 3:
this.vwr.zoomBy$I($I$(4).parseInt$S(tokens[2]));
return;
}
break;
case 30:
switch (tokens.length) {
case 3:
this.vwr.rotateZBy$I$I$I($I$(4).parseInt$S(tokens[2]), 2147483647, 2147483647);
return;
case 5:
this.vwr.rotateZBy$I$I$I($I$(4).parseInt$S(tokens[2]), $I$(4).parseInt$S(tokens[3]), $I$(4).parseInt$S(tokens[4]));
}
break;
case 45:
this.vwr.rotateXYBy$F$F($I$(4).parseFloat$S(tokens[2]), $I$(4).parseFloat$S(tokens[3]));
return;
case 60:
this.vwr.translateXYBy$I$I($I$(4).parseInt$S(tokens[2]), $I$(4).parseInt$S(tokens[3]));
return;
case 75:
this.vwr.rotateSelected$F$F$javajs_util_BS($I$(4).parseFloat$S(tokens[2]), $I$(4).parseFloat$S(tokens[3]), null);
return;
case 90:
this.vwr.spinXYBy$I$I$F($I$(4).parseInt$S(tokens[2]), $I$(4).parseInt$S(tokens[3]), $I$(4).parseFloat$S(tokens[4]));
return;
case 105:
this.vwr.rotateXYBy$F$F($I$(4).parseInt$S(tokens[2]), $I$(4).parseInt$S(tokens[3]));
return;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.vwr.showString$S$Z("error reading SYNC command: " + script, false);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:26 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
