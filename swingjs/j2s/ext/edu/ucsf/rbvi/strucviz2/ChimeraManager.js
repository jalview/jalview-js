(function(){var P$=Clazz.newPackage("ext.edu.ucsf.rbvi.strucviz2"),p$1={},I$=[[0,'org.slf4j.LoggerFactory','java.util.HashMap',['ext.edu.ucsf.rbvi.strucviz2.StructureManager','.ModelType'],'java.util.ArrayList','ext.edu.ucsf.rbvi.strucviz2.ChimUtils','java.io.File','ext.edu.ucsf.rbvi.strucviz2.ChimeraModel','ext.edu.ucsf.rbvi.strucviz2.ChimeraResidue','java.nio.file.Paths','ProcessBuilder','java.io.BufferedReader','java.io.InputStreamReader','StringBuilder','Boolean','Thread','org.apache.http.message.BasicNameValuePair','jalview.ws.HttpClientUtils']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ChimeraManager");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.chimeraRestPort=0;
this.chimera=null;
this.chimeraListenerThread=null;
this.currentModelsMap=null;
this.logger=null;
this.structureManager=null;
this.busy=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.logger=$I$(1).getLogger$Class(Clazz.getClass(C$));
this.busy=false;
}, 1);

Clazz.newMeth(C$, 'c$$ext_edu_ucsf_rbvi_strucviz2_StructureManager', function (structureManager) {
C$.$init$.apply(this);
this.structureManager=structureManager;
this.chimera=null;
this.chimeraListenerThread=null;
this.currentModelsMap=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'getChimeraModels$S', function (modelName) {
var models=this.getChimeraModels$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType(modelName, $I$(3).PDB_MODEL);
models.addAll$java_util_Collection(this.getChimeraModels$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType(modelName, $I$(3).SMILES));
return models;
});

Clazz.newMeth(C$, 'getChimeraModels$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType', function (modelName, modelType) {
var models=Clazz.new_($I$(4));
for (var model, $model = this.currentModelsMap.values$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
if (modelName.equals$O(model.getModelName$()) && modelType.equals$O(model.getModelType$()) ) {
models.add$TE(model);
}}
return models;
});

Clazz.newMeth(C$, 'getChimeraModelsMap$', function () {
var models=Clazz.new_($I$(2));
for (var model, $model = this.currentModelsMap.values$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
var modelName=model.getModelName$();
if (!models.containsKey$O(modelName)) {
models.put$TK$TV(modelName, Clazz.new_($I$(4)));
}if (!models.get$O(modelName).contains$O(model)) {
models.get$O(modelName).add$TE(model);
}}
return models;
});

Clazz.newMeth(C$, 'getChimeraModel$Integer$Integer', function (modelNumber, subModelNumber) {
var key=$I$(5).makeModelKey$I$I((modelNumber).intValue$(), (subModelNumber).intValue$());
if (this.currentModelsMap.containsKey$O(key)) {
return this.currentModelsMap.get$O(key);
}return null;
});

Clazz.newMeth(C$, 'getChimeraModel$', function () {
return this.currentModelsMap.values$().iterator$().next$();
});

Clazz.newMeth(C$, 'getChimeraModels$', function () {
return this.currentModelsMap.values$();
});

Clazz.newMeth(C$, 'getChimeraModelsCount$Z', function (smiles) {
var counter=this.currentModelsMap.size$();
if (smiles) {
return counter;
}for (var model, $model = this.currentModelsMap.values$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
if (model.getModelType$() === $I$(3).SMILES ) {
counter--;
}}
return counter;
});

Clazz.newMeth(C$, 'hasChimeraModel$Integer', function (modelNubmer) {
return this.hasChimeraModel$Integer$Integer(modelNubmer, new Integer(0));
});

Clazz.newMeth(C$, 'hasChimeraModel$Integer$Integer', function (modelNubmer, subModelNumber) {
return this.currentModelsMap.containsKey$O($I$(5).makeModelKey$I$I((modelNubmer).intValue$(), (subModelNumber).intValue$()));
});

Clazz.newMeth(C$, 'addChimeraModel$Integer$Integer$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel', function (modelNumber, subModelNumber, model) {
this.currentModelsMap.put$TK$TV($I$(5).makeModelKey$I$I((modelNumber).intValue$(), (subModelNumber).intValue$()), model);
});

Clazz.newMeth(C$, 'removeChimeraModel$Integer$Integer', function (modelNumber, subModelNumber) {
var modelKey=($I$(5).makeModelKey$I$I((modelNumber).intValue$(), (subModelNumber).intValue$())).intValue$();
if (this.currentModelsMap.containsKey$O(new Integer(modelKey))) {
this.currentModelsMap.remove$O(new Integer(modelKey));
}});

Clazz.newMeth(C$, 'openModel$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType', function (modelPath, type) {
return this.openModel$S$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType(modelPath, p$1.getFileNameFromPath$S.apply(this, [modelPath]), type);
});

Clazz.newMeth(C$, 'openModel$S$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType', function (modelPath, modelName, type) {
this.logger.info$S("chimera open " + modelPath);
var modelList=this.getModelList$();
var response=null;
if (type === $I$(3).MODBASE_MODEL ) {
response=this.sendChimeraCommand$S$Z("open modbase:" + modelPath, true);
} else {
response=this.sendChimeraCommand$S$Z("open " + modelPath, true);
}if (response == null ) {
this.logger.warn$S("Could not open " + modelPath);
return null;
}for (var newModel, $newModel = this.getModelList$().iterator$(); $newModel.hasNext$()&&((newModel=($newModel.next$())),1);) {
if (!modelList.contains$O(newModel)) {
newModel.setModelName$S(modelName);
this.sendChimeraCommand$S$Z("setattr M name " + modelName + " #" + newModel.getModelNumber$() , false);
modelList.add$TE(newModel);
}}
for (var chimeraModel, $chimeraModel = modelList.iterator$(); $chimeraModel.hasNext$()&&((chimeraModel=($chimeraModel.next$())),1);) {
var modelColor=this.getModelColor$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel(chimeraModel);
if (modelColor != null ) {
chimeraModel.setModelColor$java_awt_Color(modelColor);
}if (type !== $I$(3).SMILES ) {
this.addResidues$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel(chimeraModel);
}}
this.sendChimeraCommand$S$Z("focus", false);
return modelList;
});

Clazz.newMeth(C$, 'getFileNameFromPath$S', function (modelPath) {
var modelName=modelPath;
if (modelPath == null ) {
return null;
}if (modelPath.lastIndexOf$S($I$(6).separator) > 0) {
modelName=modelPath.substring$I(modelPath.lastIndexOf$S($I$(6).separator) + 1);
} else if (modelPath.lastIndexOf$S("/") > 0) {
modelName=modelPath.substring$I(modelPath.lastIndexOf$S("/") + 1);
}return modelName;
}, p$1);

Clazz.newMeth(C$, 'closeModel$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel', function (model) {
this.stopListening$();
this.logger.info$S("chimera close model " + model.getModelName$());
if (this.currentModelsMap.containsKey$O($I$(5).makeModelKey$I$I(model.getModelNumber$(), model.getSubModelNumber$()))) {
this.sendChimeraCommand$S$Z("close " + model.toSpec$(), false);
this.currentModelsMap.remove$O($I$(5).makeModelKey$I$I(model.getModelNumber$(), model.getSubModelNumber$()));
} else {
this.logger.warn$S("Could not find model " + model.getModelName$() + " to close." );
}this.startListening$();
});

Clazz.newMeth(C$, 'startListening$', function () {
this.sendChimeraCommand$S$Z("listen start models; listen start selection", false);
});

Clazz.newMeth(C$, 'stopListening$', function () {
this.sendChimeraCommand$S$Z("listen stop models ; listen stop selection ", false);
});

Clazz.newMeth(C$, 'startListening$S', function (uri) {
this.sendChimeraCommand$S$Z("listen start models url " + uri + ";listen start select prefix SelectionChanged url " + uri , false);
});

Clazz.newMeth(C$, 'select$S', function (command) {
this.sendChimeraCommand$S$Z("listen stop selection; " + command + "; listen start selection" , false);
});

Clazz.newMeth(C$, 'focus$', function () {
this.sendChimeraCommand$S$Z("focus", false);
});

Clazz.newMeth(C$, 'clearOnChimeraExit$', function () {
this.chimera=null;
this.currentModelsMap.clear$();
this.chimeraRestPort=0;
this.structureManager.clearOnChimeraExit$();
});

Clazz.newMeth(C$, 'exitChimera$', function () {
if (this.isChimeraLaunched$() && this.chimera != null  ) {
this.sendChimeraCommand$S$Z("stop really", false);
try {
this.chimera.destroy$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}this.clearOnChimeraExit$();
});

Clazz.newMeth(C$, 'getSelectedModels$', function () {
var selectedModelsMap=Clazz.new_($I$(2));
var chimeraReply=this.sendChimeraCommand$S$Z("list selection level molecule", true);
if (chimeraReply != null ) {
for (var modelLine, $modelLine = chimeraReply.iterator$(); $modelLine.hasNext$()&&((modelLine=($modelLine.next$())),1);) {
var chimeraModel=Clazz.new_($I$(7).c$$S,[modelLine]);
var modelKey=$I$(5).makeModelKey$I$I(chimeraModel.getModelNumber$(), chimeraModel.getSubModelNumber$());
selectedModelsMap.put$TK$TV(modelKey, chimeraModel);
}
}return selectedModelsMap;
});

Clazz.newMeth(C$, 'getSelectedResidueSpecs$', function () {
var selectedResidues=Clazz.new_($I$(4));
var chimeraReply=this.sendChimeraCommand$S$Z("list selection level residue", true);
if (chimeraReply != null ) {
for (var inputLine, $inputLine = chimeraReply.iterator$(); $inputLine.hasNext$()&&((inputLine=($inputLine.next$())),1);) {
var inputLineParts=inputLine.split$S("\\s+");
if (inputLineParts.length == 5) {
selectedResidues.add$TE(inputLineParts[2]);
}}
}return selectedResidues;
});

Clazz.newMeth(C$, 'getSelectedResidues$java_util_Map', function (selectedModelsMap) {
var chimeraReply=this.sendChimeraCommand$S$Z("list selection level residue", true);
if (chimeraReply != null ) {
for (var inputLine, $inputLine = chimeraReply.iterator$(); $inputLine.hasNext$()&&((inputLine=($inputLine.next$())),1);) {
var r=Clazz.new_($I$(8).c$$S,[inputLine]);
var modelKey=$I$(5).makeModelKey$I$I(r.getModelNumber$(), r.getSubModelNumber$());
if (selectedModelsMap.containsKey$O(modelKey)) {
var model=selectedModelsMap.get$O(modelKey);
model.addResidue$ext_edu_ucsf_rbvi_strucviz2_ChimeraResidue(r);
}}
}});

Clazz.newMeth(C$, 'getModelList$', function () {
var modelList=Clazz.new_($I$(4));
var list=this.sendChimeraCommand$S$Z("list models type molecule", true);
if (list != null ) {
for (var modelLine, $modelLine = list.iterator$(); $modelLine.hasNext$()&&((modelLine=($modelLine.next$())),1);) {
var chimeraModel=Clazz.new_($I$(7).c$$S,[modelLine]);
modelList.add$TE(chimeraModel);
}
}return modelList;
});

Clazz.newMeth(C$, 'getPresets$', function () {
var presetList=Clazz.new_($I$(4));
var output=this.sendChimeraCommand$S$Z("preset list", true);
if (output != null ) {
for (var preset, $preset = output.iterator$(); $preset.hasNext$()&&((preset=($preset.next$())),1);) {
preset=preset.substring$I(7);
preset=preset.replaceFirst$S$S("\"", "(");
preset=preset.replaceFirst$S$S("\"", ")");
presetList.add$TE(preset);
}
}return presetList;
});

Clazz.newMeth(C$, 'isChimeraLaunched$', function () {
var launched=false;
if (this.chimera != null ) {
try {
this.chimera.exitValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalThreadStateException")){
launched=true;
} else {
throw e;
}
}
}return launched;
});

Clazz.newMeth(C$, 'launchChimera$java_util_List', function (chimeraPaths) {
if (this.isChimeraLaunched$()) {
return true;
}var error="Error message: ";
var workingPath="";
for (var chimeraPath, $chimeraPath = chimeraPaths.iterator$(); $chimeraPath.hasNext$()&&((chimeraPath=($chimeraPath.next$())),1);) {
try {
chimeraPath=$I$(9).get$S$SA(chimeraPath, []).toRealPath$java_nio_file_LinkOptionA([]).toString();
var path=Clazz.new_($I$(6).c$$S,[chimeraPath]);
if (!path.canExecute$()) {
error += "File '" + path + "' does not exist.\n" ;
continue;
}var args=Clazz.new_($I$(4));
args.add$TE(chimeraPath);
args.add$TE("--start");
args.add$TE("RESTServer");
var pb=Clazz.new_($I$(10).c$$java_util_List,[args]);
this.chimera=pb.start$();
error="";
workingPath=chimeraPath;
break;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
error += e.getMessage$();
} else {
throw e;
}
}
}
if (error.length$() == 0) {
this.chimeraRestPort=p$1.getPortNumber.apply(this, []);
System.out.println$S("Chimera REST API started on port " + this.chimeraRestPort);
this.structureManager.setChimeraPathProperty$S(workingPath);
return (this.chimeraRestPort > 0);
}this.logger.warn$S(error);
return false;
});

Clazz.newMeth(C$, 'getPortNumber', function () {
var port=0;
var readChan=this.chimera.getInputStream$();
var lineReader=Clazz.new_($I$(11).c$$java_io_Reader,[Clazz.new_($I$(12).c$$java_io_InputStream,[readChan])]);
var responses=Clazz.new_($I$(13));
try {
var response=lineReader.readLine$();
while (response != null ){
responses.append$S("\n" + response);
if (response.startsWith$S("REST server")) {
var tokens=response.split$S(" ");
if (tokens.length == 7 && "port".equals$O(tokens[5]) ) {
port=Integer.parseInt$S(tokens[6]);
break;
}}response=lineReader.readLine$();
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.logger.error$S("Failed to get REST port number from " + responses + ": " + e.getMessage$() );
} else {
throw e;
}
} finally {
try {
lineReader.close$();
} catch (e2) {
if (Clazz.exceptionOf(e2,"java.io.IOException")){
} else {
throw e2;
}
}
}
if (port == 0) {
System.err.println$S("Failed to start Chimera with REST service, response was: " + responses);
}this.logger.info$S("Chimera REST service listening on port " + this.chimeraRestPort);
return port;
}, p$1);

Clazz.newMeth(C$, 'getModelColor$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel', function (model) {
var colorLines=this.sendChimeraCommand$S$Z("list model spec " + model.toSpec$() + " attribute color" , true);
if (colorLines == null  || colorLines.size$() == 0 ) {
return null;
}return $I$(5).parseModelColor$S(colorLines.get$I(0));
});

Clazz.newMeth(C$, 'addResidues$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel', function (model) {
var modelNumber=model.getModelNumber$();
var subModelNumber=model.getSubModelNumber$();
var reply=this.sendChimeraCommand$S$Z("list residues spec " + model.toSpec$(), true);
if (reply == null ) {
return;
}for (var inputLine, $inputLine = reply.iterator$(); $inputLine.hasNext$()&&((inputLine=($inputLine.next$())),1);) {
var r=Clazz.new_($I$(8).c$$S,[inputLine]);
if (r.getModelNumber$() == modelNumber || r.getSubModelNumber$() == subModelNumber ) {
model.addResidue$ext_edu_ucsf_rbvi_strucviz2_ChimeraResidue(r);
}}
});

Clazz.newMeth(C$, 'getAttrList$', function () {
var attributes=Clazz.new_($I$(4));
var reply=this.sendChimeraCommand$S$Z("list resattr", true);
if (reply != null ) {
for (var inputLine, $inputLine = reply.iterator$(); $inputLine.hasNext$()&&((inputLine=($inputLine.next$())),1);) {
var lineParts=inputLine.split$S("\\s");
if (lineParts.length == 2 && lineParts[0].equals$O("resattr") ) {
attributes.add$TE(lineParts[1]);
}}
}return attributes;
});

Clazz.newMeth(C$, 'getAttrValues$S$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel', function (aCommand, model) {
var values=Clazz.new_($I$(2));
var reply=this.sendChimeraCommand$S$Z("list residue spec " + model.toSpec$() + " attribute " + aCommand , true);
if (reply != null ) {
for (var inputLine, $inputLine = reply.iterator$(); $inputLine.hasNext$()&&((inputLine=($inputLine.next$())),1);) {
var lineParts=inputLine.split$S("\\s");
if (lineParts.length == 5) {
var residue=$I$(5).getResidue$S$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel(lineParts[2], model);
var value=lineParts[4];
if (residue != null ) {
if (value.equals$O("None")) {
continue;
}if (value.equals$O("True") || value.equals$O("False") ) {
values.put$TK$TV(residue, $I$(14).valueOf$S(value));
continue;
}try {
var doubleValue=Double.valueOf$S(value);
values.put$TK$TV(residue, doubleValue);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
values.put$TK$TV(residue, value);
} else {
throw ex;
}
}
}}}
}return values;
});

Clazz.newMeth(C$, 'sendChimeraCommand$S$Z', function (command, reply) {
if (!this.isChimeraLaunched$() || command == null   || "".equals$O(command.trim$()) ) {
return null;
}while (this.busy){
try {
$I$(15).sleep$J(25);
} catch (q) {
if (Clazz.exceptionOf(q,"InterruptedException")){
} else {
throw q;
}
}
}
this.busy=true;
var startTime=System.currentTimeMillis$();
try {
return this.sendRestCommand$S(command);
} finally {
this.busy=false;
if (false) {
System.out.println$S("Chimera command took " + (System.currentTimeMillis$() - startTime) + "ms: " + command );
}}
});

Clazz.newMeth(C$, 'sendRestCommand$S', function (command) {
var restUrl="http://127.0.0.1:" + this.chimeraRestPort + "/run" ;
var commands=Clazz.new_($I$(4).c$$I,[1]);
commands.add$TE(Clazz.new_($I$(16).c$$S$S,["command", command]));
var reply=Clazz.new_($I$(4));
var response=null;
try {
response=$I$(17).doHttpUrlPost$S$java_util_List$I$I(restUrl, commands, 100, 15000);
var line="";
while ((line=response.readLine$()) != null ){
reply.add$TE(line);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.logger.error$S("REST call '" + command + "' failed: " + e.getMessage$() );
} else {
throw e;
}
} finally {
if (response != null ) {
try {
response.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
return reply;
});

Clazz.newMeth(C$, 'sendStdinCommand$S$Z', function (command, readReply) {
this.chimeraListenerThread.clearResponse$S(command);
var text=command.concat$S("\n");
try {
this.chimera.getOutputStream$().write$BA(text.getBytes$());
this.chimera.getOutputStream$().flush$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.logger.warn$S("Unable to execute command: " + text);
this.logger.warn$S("Exiting...");
this.clearOnChimeraExit$();
return null;
} else {
throw e;
}
}
if (!readReply) {
return null;
}var rsp=this.chimeraListenerThread.getResponse$S(command);
return rsp;
});

Clazz.newMeth(C$, 'getStructureManager$', function () {
return this.structureManager;
});

Clazz.newMeth(C$, 'isBusy$', function () {
return this.busy;
});

Clazz.newMeth(C$, 'getChimeraProcess$', function () {
return this.chimera;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
