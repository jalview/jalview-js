(function(){var P$=Clazz.newPackage("ext.edu.ucsf.rbvi.strucviz2"),I$=[[0,'org.slf4j.LoggerFactory','ext.edu.ucsf.rbvi.strucviz2.ChimeraManager','java.util.ArrayList','java.util.Properties','java.util.HashMap','java.io.File',['ext.edu.ucsf.rbvi.strucviz2.StructureManager','.ModelType'],'java.util.Arrays','jalview.bin.Cache','java.util.Locale']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StructureManager", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ModelType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.chimeraCommandAttr="ChimeraCommand";
this.chimeraOutputTable="ChimeraTable";
this.chimeraOutputAttr="ChimeraOutput";
this.haveGUI=true;
this.chimeraManager=null;
this.ignoreCySelection=false;
this.configurationDirectory=null;
this.defaultSettings=null;
},1);

C$.$fields$=[['Z',['haveGUI','ignoreCySelection'],'S',['chimeraCommandAttr','chimeraOutputTable','chimeraOutputAttr'],'O',['chimeraManager','ext.edu.ucsf.rbvi.strucviz2.ChimeraManager','configurationDirectory','java.io.File','defaultSettings','ext.edu.ucsf.rbvi.strucviz2.StructureSettings']]
,['O',['CHIMERA_VERSIONS','String[]','+CHIMERAX_VERSIONS','+defaultStructureKeys','+defaultChemStructKeys','+defaultResidueKeys','pathProps','java.util.Properties','chimSelectionList','java.util.List','logger','org.slf4j.Logger']]]

Clazz.newMeth(C$, 'c$$Z',  function (haveGUI) {
;C$.$init$.apply(this);
this.haveGUI=haveGUI;
this.chimeraManager=Clazz.new_($I$(2,1).c$$ext_edu_ucsf_rbvi_strucviz2_StructureManager,[this]);
C$.chimSelectionList=Clazz.new_($I$(3,1));
C$.pathProps=Clazz.new_($I$(4,1));
}, 1);

Clazz.newMeth(C$, 'getChimeraManager$',  function () {
return this.chimeraManager;
});

Clazz.newMeth(C$, 'openStructures$java_util_Collection$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType',  function (chimObjNames, type) {
var newModels=Clazz.new_($I$(5,1));
if (chimObjNames.size$() > 0) {
var names=chimObjNames.iterator$().next$();
if (names == null ) {
return false;
}for (var chimObjName, $chimObjName = names.iterator$(); $chimObjName.hasNext$()&&((chimObjName=($chimObjName.next$())),1);) {
var currentModels=this.chimeraManager.getChimeraModels$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType(chimObjName, type);
if (currentModels.size$() == 0) {
currentModels=this.chimeraManager.openModel$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType(chimObjName, type);
if (currentModels == null ) {
continue;
}newModels.put$O$O(chimObjName, currentModels);
for (var currentModel, $currentModel = currentModels.iterator$(); $currentModel.hasNext$()&&((currentModel=($currentModel.next$())),1);) {
}
}}
} else {
return false;
}return true;
});

Clazz.newMeth(C$, 'closeStructures$java_util_Set',  function (chimObjNames) {
for (var modelName, $modelName = chimObjNames.iterator$(); $modelName.hasNext$()&&((modelName=($modelName.next$())),1);) {
var models=this.chimeraManager.getChimeraModels$S(modelName);
for (var model, $model = models.iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
this.closeModel$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel(model);
}
}
});

Clazz.newMeth(C$, 'saveChimeraImage$',  function () {
var tmpFile=null;
try {
tmpFile=$I$(6).createTempFile$S$S("structureViz", ".png");
this.chimeraManager.sendChimeraCommand$S$Z("set bgTransparency", false);
this.chimeraManager.sendChimeraCommand$S$Z("copy file " + tmpFile.getAbsolutePath$() + " png" , true);
this.chimeraManager.sendChimeraCommand$S$Z("unset bgTransparency", false);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
C$.logger.error$S$Throwable("Error writing image", ioe);
} else {
throw ioe;
}
}
return tmpFile;
});

Clazz.newMeth(C$, 'closeModel$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel',  function (model) {
this.chimeraManager.closeModel$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel(model);
});

Clazz.newMeth(C$, 'exitChimera$',  function () {
this.chimeraManager.exitChimera$();
});

Clazz.newMeth(C$, 'clearOnChimeraExit$',  function () {
C$.chimSelectionList.clear$();
});

Clazz.newMeth(C$, 'updateCytoscapeSelection$',  function () {
this.ignoreCySelection=true;
this.ignoreCySelection=false;
});

Clazz.newMeth(C$, 'cytoscapeSelectionChanged$java_util_Map',  function (selectedRows) {
this.updateChimeraSelection$();
this.selectionChanged$();
});

Clazz.newMeth(C$, 'updateChimeraSelection$',  function () {
var selSpec="";
for (var i=0; i < C$.chimSelectionList.size$(); i++) {
var nodeInfo=C$.chimSelectionList.get$I(i);
selSpec=selSpec.concat$S(nodeInfo.toSpec$());
if (i < C$.chimSelectionList.size$() - 1) {
selSpec.concat$S("|");
}}
if (selSpec.length$() > 0) {
this.chimeraManager.select$S("sel " + selSpec);
} else {
this.chimeraManager.select$S("~sel");
}});

Clazz.newMeth(C$, 'chimeraSelectionChanged$',  function () {
this.clearSelectionList$();
var selectedModelsMap=this.chimeraManager.getSelectedModels$();
this.chimeraManager.getSelectedResidues$java_util_Map(selectedModelsMap);
try {
for (var selectedModel, $selectedModel = selectedModelsMap.values$().iterator$(); $selectedModel.hasNext$()&&((selectedModel=($selectedModel.next$())),1);) {
var modelNumber=selectedModel.getModelNumber$();
var subModelNumber=selectedModel.getSubModelNumber$();
if (this.chimeraManager.hasChimeraModel$Integer$Integer(Integer.valueOf$I(modelNumber), Integer.valueOf$I(subModelNumber))) {
var dataModel=this.chimeraManager.getChimeraModel$Integer$Integer(Integer.valueOf$I(modelNumber), Integer.valueOf$I(subModelNumber));
if (dataModel.getResidueCount$() == selectedModel.getResidueCount$() || dataModel.getModelType$() === $I$(7).SMILES  ) {
this.addChimSelection$ext_edu_ucsf_rbvi_strucviz2_ChimeraStructuralObject(dataModel);
} else {
for (var selectedChain, $selectedChain = selectedModel.getChains$().iterator$(); $selectedChain.hasNext$()&&((selectedChain=($selectedChain.next$())),1);) {
var dataChain=dataModel.getChain$S(selectedChain.getChainId$());
if (selectedChain.getResidueCount$() == dataChain.getResidueCount$()) {
this.addChimSelection$ext_edu_ucsf_rbvi_strucviz2_ChimeraStructuralObject(dataChain);
}for (var res, $res = selectedChain.getResidues$().iterator$(); $res.hasNext$()&&((res=($res.next$())),1);) {
var residueIndex=res.getIndex$();
var residue=dataChain.getResidue$S(residueIndex);
if (residue == null ) {
continue;
}this.addChimSelection$ext_edu_ucsf_rbvi_strucviz2_ChimeraStructuralObject(residue);
}
}
}}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
C$.logger.warn$S$Throwable("Could not update selection", ex);
} else {
throw ex;
}
}
this.selectionChanged$();
this.updateCytoscapeSelection$();
});

Clazz.newMeth(C$, 'selectFunctResidues$java_util_Collection',  function (models) {
this.clearSelectionList$();
for (var model, $model = models.iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
for (var residue, $residue = model.getFuncResidues$().iterator$(); $residue.hasNext$()&&((residue=($residue.next$())),1);) {
this.addChimSelection$ext_edu_ucsf_rbvi_strucviz2_ChimeraStructuralObject(residue);
}
}
this.updateChimeraSelection$();
this.updateCytoscapeSelection$();
this.selectionChanged$();
});

Clazz.newMeth(C$, 'getChimSelectionList$',  function () {
return C$.chimSelectionList;
});

Clazz.newMeth(C$, 'getChimSelectionCount$',  function () {
return C$.chimSelectionList.size$();
});

Clazz.newMeth(C$, 'addChimSelection$ext_edu_ucsf_rbvi_strucviz2_ChimeraStructuralObject',  function (selectionToAdd) {
if (selectionToAdd != null  && !C$.chimSelectionList.contains$O(selectionToAdd) ) {
C$.chimSelectionList.add$O(selectionToAdd);
selectionToAdd.setSelected$Z(true);
}});

Clazz.newMeth(C$, 'removeChimSelection$ext_edu_ucsf_rbvi_strucviz2_ChimeraStructuralObject',  function (selectionToRemove) {
if (selectionToRemove != null  && C$.chimSelectionList.contains$O(selectionToRemove) ) {
C$.chimSelectionList.remove$O(selectionToRemove);
selectionToRemove.setSelected$Z(false);
}});

Clazz.newMeth(C$, 'clearSelectionList$',  function () {
for (var cso, $cso = C$.chimSelectionList.iterator$(); $cso.hasNext$()&&((cso=($cso.next$())),1);) {
if (cso != null ) {
cso.setSelected$Z(false);
}}
C$.chimSelectionList.clear$();
});

Clazz.newMeth(C$, 'updateModels$',  function () {
this.chimeraManager.stopListening$();
var newModelList=this.chimeraManager.getModelList$();
for (var newModel, $newModel = newModelList.iterator$(); $newModel.hasNext$()&&((newModel=($newModel.next$())),1);) {
newModel.setModelColor$java_awt_Color(this.chimeraManager.getModelColor$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel(newModel));
var modelNumber=newModel.getModelNumber$();
var subModelNumber=newModel.getSubModelNumber$();
if (this.chimeraManager.hasChimeraModel$Integer$Integer(Integer.valueOf$I(modelNumber), Integer.valueOf$I(subModelNumber))) {
var oldModel=this.chimeraManager.getChimeraModel$Integer$Integer(Integer.valueOf$I(modelNumber), Integer.valueOf$I(subModelNumber));
this.chimeraManager.removeChimeraModel$Integer$Integer(Integer.valueOf$I(modelNumber), Integer.valueOf$I(subModelNumber));
newModel.setModelType$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType(oldModel.getModelType$());
if (oldModel.getModelType$() === $I$(7).SMILES ) {
newModel.setModelName$S(oldModel.getModelName$());
}}this.chimeraManager.addChimeraModel$Integer$Integer$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel(Integer.valueOf$I(modelNumber), Integer.valueOf$I(subModelNumber), newModel);
if (newModel.getModelType$() !== $I$(7).SMILES ) {
this.chimeraManager.addResidues$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel(newModel);
}}
this.chimeraManager.startListening$();
});

Clazz.newMeth(C$, 'launchModelNavigatorDialog$',  function () {
});

Clazz.newMeth(C$, 'isMNDialogOpen$',  function () {
return false;
});

Clazz.newMeth(C$, 'modelChanged$',  function () {
});

Clazz.newMeth(C$, 'selectionChanged$',  function () {
});

Clazz.newMeth(C$, 'launchAlignDialog$Z',  function (useChains) {
var chimObjectList=Clazz.new_($I$(3,1));
for (var model, $model = this.chimeraManager.getChimeraModels$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
if (useChains) {
for (var chain, $chain = model.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
chimObjectList.add$O(chain);
}
} else {
chimObjectList.add$O(model);
}}
});

Clazz.newMeth(C$, 'getAllStructureKeys$',  function () {
return $I$(8).asList$OA(C$.defaultStructureKeys);
});

Clazz.newMeth(C$, 'getAllChemStructKeys$',  function () {
return $I$(8).asList$OA(C$.defaultChemStructKeys);
});

Clazz.newMeth(C$, 'getAllResidueKeys$',  function () {
return $I$(8).asList$OA(C$.defaultResidueKeys);
});

Clazz.newMeth(C$, 'getAllChimeraResidueAttributes$',  function () {
var attributes=Clazz.new_($I$(3,1));
attributes.addAll$java_util_Collection(this.chimeraManager.getAttrList$());
return attributes;
});

Clazz.newMeth(C$, 'getChimeraPaths$Z',  function (isChimeraX) {
var pathList=Clazz.new_($I$(3,1));
var os=System.getProperty$S("os.name");
var userPath=$I$(9).getDefault$S$S(isChimeraX ? "CHIMERAX_PATH" : "CHIMERA_PATH", null);
var chimera=isChimeraX ? "ChimeraX" : "Chimera";
var chimeraExe=isChimeraX ? "ChimeraX" : "chimera";
if (userPath != null ) {
var adjusted=false;
if (os.startsWith$S("Mac") && userPath.endsWith$S((".app")) ) {
var possiblePath=String.format$S$OA("%s/Contents/MacOS/%s", Clazz.array(java.lang.Object, -1, [userPath, chimeraExe]));
if (Clazz.new_($I$(6,1).c$$S,[possiblePath]).exists$()) {
pathList.add$O(possiblePath);
adjusted=true;
}}if (!adjusted) {
pathList.add$O(userPath);
}}if (os.startsWith$S("Linux")) {
pathList.add$O(String.format$S$OA("/usr/bin/%s", Clazz.array(java.lang.Object, -1, [chimeraExe.toLowerCase$java_util_Locale($I$(10).ROOT)])));
pathList.add$O(String.format$S$OA("/usr/bin/%s", Clazz.array(java.lang.Object, -1, [chimeraExe])));
pathList.add$O(String.format$S$OA("/usr/local/bin/%s", Clazz.array(java.lang.Object, -1, [chimeraExe.toLowerCase$java_util_Locale($I$(10).ROOT)])));
pathList.add$O(String.format$S$OA("/usr/local/bin/%s", Clazz.array(java.lang.Object, -1, [chimeraExe])));
pathList.add$O(String.format$S$OA("/usr/lib/ucsf-%s/bin/%s", Clazz.array(java.lang.Object, -1, [chimera.toLowerCase$java_util_Locale($I$(10).ROOT), chimeraExe])));
pathList.add$O(String.format$S$OA("/usr/libexec/UCSF-%s/bin/%s", Clazz.array(java.lang.Object, -1, [chimera, chimeraExe])));
pathList.add$O(String.format$S$OA("/usr/local/chimera/bin/%s", Clazz.array(java.lang.Object, -1, [chimeraExe])));
pathList.add$O(String.format$S$OA("%s/bin/%s", Clazz.array(java.lang.Object, -1, [System.getProperty$S("user.home"), chimeraExe.toLowerCase$java_util_Locale($I$(10).ROOT)])));
pathList.add$O(String.format$S$OA("%s/bin/%s", Clazz.array(java.lang.Object, -1, [System.getProperty$S("user.home"), chimeraExe])));
pathList.add$O(String.format$S$OA("%s/opt/bin/%s", Clazz.array(java.lang.Object, -1, [System.getProperty$S("user.home"), chimeraExe.toLowerCase$java_util_Locale($I$(10).ROOT)])));
pathList.add$O(String.format$S$OA("%s/opt/bin/%s", Clazz.array(java.lang.Object, -1, [System.getProperty$S("user.home"), chimeraExe])));
pathList.add$O(String.format$S$OA("%s/local/bin/%s", Clazz.array(java.lang.Object, -1, [System.getProperty$S("user.home"), chimeraExe.toLowerCase$java_util_Locale($I$(10).ROOT)])));
pathList.add$O(String.format$S$OA("%s/local/bin/%s", Clazz.array(java.lang.Object, -1, [System.getProperty$S("user.home"), chimeraExe])));
} else if (os.startsWith$S("Windows")) {
for (var root, $root = 0, $$root = Clazz.array(String, -1, ["\\Program Files", "C:\\Program Files", "\\Program Files (x86)", "C:\\Program Files (x86)", String.format$S$OA("%s\\AppData\\Local", Clazz.array(java.lang.Object, -1, [System.getProperty$S("user.home")]))]); $root<$$root.length&&((root=($$root[$root])),1);$root++) {
var candidates=isChimeraX ? C$.CHIMERAX_VERSIONS : C$.CHIMERA_VERSIONS;
for (var version, $version = 0, $$version = candidates; $version<$$version.length&&((version=($$version[$version])),1);$version++) {
var path=String.format$S$OA("%s\\%s %s\\bin\\%s", Clazz.array(java.lang.Object, -1, [root, chimera, version, chimeraExe]));
pathList.add$O(path);
pathList.add$O(path + ".exe");
}
var path=String.format$S$OA("%s\\%s\\bin\\%s", Clazz.array(java.lang.Object, -1, [root, chimera, chimeraExe]));
pathList.add$O(path);
pathList.add$O(path + ".exe");
}
} else if (os.startsWith$S("Mac")) {
var candidates=isChimeraX ? C$.CHIMERAX_VERSIONS : C$.CHIMERA_VERSIONS;
for (var version, $version = 0, $$version = candidates; $version<$$version.length&&((version=($$version[$version])),1);$version++) {
pathList.add$O(String.format$S$OA("/Applications/%s-%s.app/Contents/MacOS/%s", Clazz.array(java.lang.Object, -1, [chimera, version, chimeraExe])));
pathList.add$O(String.format$S$OA("%s/Applications/%s-%s.app/Contents/MacOS/%s", Clazz.array(java.lang.Object, -1, [System.getProperty$S("user.home"), chimera, version, chimeraExe])));
}
pathList.add$O(String.format$S$OA("/Applications/%s.app/Contents/MacOS/%s", Clazz.array(java.lang.Object, -1, [chimera, chimeraExe])));
pathList.add$O(String.format$S$OA("%s/Applications/%s.app/Contents/MacOS/%s", Clazz.array(java.lang.Object, -1, [System.getProperty$S("user.home"), chimera, chimeraExe])));
}return pathList;
}, 1);

Clazz.newMeth(C$, 'setChimeraPathProperty$S',  function (path) {
});

Clazz.newMeth(C$, 'setStructureSettings$ext_edu_ucsf_rbvi_strucviz2_StructureSettings',  function (structureSettings) {
this.defaultSettings=structureSettings;
});

Clazz.newMeth(C$, 'getCurrentChimeraPath$O',  function (object) {
if (this.defaultSettings != null ) {
return this.defaultSettings.getChimeraPath$();
} else {
return "";
}});

C$.$static$=function(){C$.$static$=0;
C$.CHIMERA_VERSIONS=Clazz.array(String, -1, ["1.16.2", "1.16.1", "1.16", "1.15.2", "1.15.1", "1.15", "1.14.2", "1.14.1", "1.14", "1.13.1", "1.13", "1.12.2", "1.12.1", "1.12", "1.11.2", "1.11.2", "1.11.1", "1.11"]);
C$.CHIMERAX_VERSIONS=Clazz.array(String, -1, ["1.3", "1.2.5", "1.0", "0.93", "0.92", "0.91", "0.9"]);
C$.defaultStructureKeys=Clazz.array(String, -1, ["Structure", "pdb", "pdbFileName", "PDB ID", "structure", "biopax.xref.PDB", "pdb_ids", "ModelName", "ModelNumber"]);
C$.defaultChemStructKeys=Clazz.array(String, -1, ["Smiles", "smiles", "SMILES"]);
C$.defaultResidueKeys=Clazz.array(String, -1, ["FunctionalResidues", "ResidueList", "Residues"]);
C$.logger=$I$(1,"getLogger$Class",[Clazz.getClass(C$)]);
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.StructureManager, "ModelType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "PDB_MODEL", 0, []);
Clazz.newEnumConst($vals, C$.c$, "MODBASE_MODEL", 1, []);
Clazz.newEnumConst($vals, C$.c$, "SMILES", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
