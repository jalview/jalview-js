(function(){var P$=Clazz.newPackage("ext.edu.ucsf.rbvi.strucviz2"),p$1={},I$=[[0,'org.slf4j.LoggerFactory','java.util.HashMap',['ext.edu.ucsf.rbvi.strucviz2.StructureManager','.ModelType'],'java.util.ArrayList','ext.edu.ucsf.rbvi.strucviz2.ChimUtils','java.io.File','ext.edu.ucsf.rbvi.strucviz2.ChimeraModel','ext.edu.ucsf.rbvi.strucviz2.ChimeraResidue','java.nio.file.Paths','java.nio.file.LinkOption','ProcessBuilder','java.io.BufferedReader','java.io.InputStreamReader','StringBuilder','Thread','java.net.URLEncoder','java.nio.charset.StandardCharsets','org.apache.http.message.BasicNameValuePair','jalview.ws.HttpClientUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChimeraManager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.logger=$I$(1,"getLogger$Class",[Clazz.getClass(C$)]);
this.busy=false;
},1);

C$.$fields$=[['Z',['busy'],'I',['chimeraRestPort'],'O',['chimera','Process','chimeraListenerThread','ext.edu.ucsf.rbvi.strucviz2.port.ListenerThreads','currentModelsMap','java.util.Map','logger','org.slf4j.Logger','structureManager','ext.edu.ucsf.rbvi.strucviz2.StructureManager']]]

Clazz.newMeth(C$, 'c$$ext_edu_ucsf_rbvi_strucviz2_StructureManager',  function (structureManager) {
;C$.$init$.apply(this);
this.structureManager=structureManager;
this.chimera=null;
this.chimeraListenerThread=null;
this.currentModelsMap=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'getChimeraModels$S',  function (modelName) {
var models=this.getChimeraModels$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType(modelName, $I$(3).PDB_MODEL);
models.addAll$java_util_Collection(this.getChimeraModels$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType(modelName, $I$(3).SMILES));
return models;
});

Clazz.newMeth(C$, 'getChimeraModels$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType',  function (modelName, modelType) {
var models=Clazz.new_($I$(4,1));
for (var model, $model = this.currentModelsMap.values$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
if (modelName.equals$O(model.getModelName$()) && modelType.equals$O(model.getModelType$()) ) {
models.add$O(model);
}}
return models;
});

Clazz.newMeth(C$, 'getChimeraModelsMap$',  function () {
var models=Clazz.new_($I$(2,1));
for (var model, $model = this.currentModelsMap.values$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
var modelName=model.getModelName$();
if (!models.containsKey$O(modelName)) {
models.put$O$O(modelName, Clazz.new_($I$(4,1)));
}if (!models.get$O(modelName).contains$O(model)) {
models.get$O(modelName).add$O(model);
}}
return models;
});

Clazz.newMeth(C$, 'getChimeraModel$Integer$Integer',  function (modelNumber, subModelNumber) {
var key=$I$(5,"makeModelKey$I$I",[(modelNumber).$c(), (subModelNumber).$c()]);
if (this.currentModelsMap.containsKey$O(key)) {
return this.currentModelsMap.get$O(key);
}return null;
});

Clazz.newMeth(C$, 'getChimeraModel$',  function () {
return this.currentModelsMap.values$().iterator$().next$();
});

Clazz.newMeth(C$, 'getChimeraModels$',  function () {
return this.currentModelsMap.values$();
});

Clazz.newMeth(C$, 'getChimeraModelsCount$Z',  function (smiles) {
var counter=this.currentModelsMap.size$();
if (smiles) {
return counter;
}for (var model, $model = this.currentModelsMap.values$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
if (model.getModelType$() === $I$(3).SMILES ) {
--counter;
}}
return counter;
});

Clazz.newMeth(C$, 'hasChimeraModel$Integer',  function (modelNubmer) {
return this.hasChimeraModel$Integer$Integer(modelNubmer, Integer.valueOf$I(0));
});

Clazz.newMeth(C$, 'hasChimeraModel$Integer$Integer',  function (modelNubmer, subModelNumber) {
return this.currentModelsMap.containsKey$O($I$(5,"makeModelKey$I$I",[(modelNubmer).$c(), (subModelNumber).$c()]));
});

Clazz.newMeth(C$, 'addChimeraModel$Integer$Integer$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel',  function (modelNumber, subModelNumber, model) {
this.currentModelsMap.put$O$O($I$(5,"makeModelKey$I$I",[(modelNumber).$c(), (subModelNumber).$c()]), model);
});

Clazz.newMeth(C$, 'removeChimeraModel$Integer$Integer',  function (modelNumber, subModelNumber) {
var modelKey=($I$(5,"makeModelKey$I$I",[(modelNumber).$c(), (subModelNumber).$c()])).$c();
if (this.currentModelsMap.containsKey$O(Integer.valueOf$I(modelKey))) {
this.currentModelsMap.remove$O(Integer.valueOf$I(modelKey));
}});

Clazz.newMeth(C$, 'openModel$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType',  function (modelPath, type) {
return this.openModel$S$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType(modelPath, p$1.getFileNameFromPath$S.apply(this, [modelPath]), type);
});

Clazz.newMeth(C$, 'openModel$S$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType',  function (modelPath, modelName, type) {
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
modelList.add$O(newModel);
}}
for (var chimeraModel, $chimeraModel = modelList.iterator$(); $chimeraModel.hasNext$()&&((chimeraModel=($chimeraModel.next$())),1);) {
var modelColor=this.isChimeraX$() ? null : this.getModelColor$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel(chimeraModel);
if (modelColor != null ) {
chimeraModel.setModelColor$java_awt_Color(modelColor);
}if (type !== $I$(3).SMILES  && !this.isChimeraX$() ) {
this.addResidues$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel(chimeraModel);
}}
this.sendChimeraCommand$S$Z("focus", false);
return modelList;
});

Clazz.newMeth(C$, 'getFileNameFromPath$S',  function (modelPath) {
var modelName=modelPath;
if (modelPath == null ) {
return null;
}if (modelPath.lastIndexOf$S($I$(6).separator) > 0) {
modelName=modelPath.substring$I(modelPath.lastIndexOf$S($I$(6).separator) + 1);
} else if (modelPath.lastIndexOf$S("/") > 0) {
modelName=modelPath.substring$I(modelPath.lastIndexOf$S("/") + 1);
}return modelName;
}, p$1);

Clazz.newMeth(C$, 'closeModel$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel',  function (model) {
this.stopListening$();
this.logger.info$S("chimera close model " + model.getModelName$());
if (this.currentModelsMap.containsKey$O($I$(5,"makeModelKey$I$I",[model.getModelNumber$(), model.getSubModelNumber$()]))) {
this.sendChimeraCommand$S$Z("close " + model.toSpec$(), false);
this.currentModelsMap.remove$O($I$(5,"makeModelKey$I$I",[model.getModelNumber$(), model.getSubModelNumber$()]));
} else {
this.logger.warn$S("Could not find model " + model.getModelName$() + " to close." );
}this.startListening$();
});

Clazz.newMeth(C$, 'startListening$',  function () {
this.sendChimeraCommand$S$Z("listen start models; listen start selection", false);
});

Clazz.newMeth(C$, 'stopListening$',  function () {
var command="listen stop models ; listen stop selection ";
this.sendChimeraCommand$S$Z(command, false);
});

Clazz.newMeth(C$, 'startListening$S',  function (uri) {
var command="listen start models url " + uri;
this.sendChimeraCommand$S$Z(command, false);
command="listen start select prefix SelectionChanged url " + uri;
this.sendChimeraCommand$S$Z(command, false);
});

Clazz.newMeth(C$, 'select$S',  function (command) {
this.sendChimeraCommand$S$Z("listen stop selection; " + command + "; listen start selection" , false);
});

Clazz.newMeth(C$, 'focus$',  function () {
this.sendChimeraCommand$S$Z("focus", false);
});

Clazz.newMeth(C$, 'clearOnChimeraExit$',  function () {
this.chimera=null;
this.currentModelsMap.clear$();
this.chimeraRestPort=0;
this.structureManager.clearOnChimeraExit$();
});

Clazz.newMeth(C$, 'exitChimera$',  function () {
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

Clazz.newMeth(C$, 'getSelectedModels$',  function () {
var selectedModelsMap=Clazz.new_($I$(2,1));
var chimeraReply=this.sendChimeraCommand$S$Z("list selection level molecule", true);
if (chimeraReply != null ) {
for (var modelLine, $modelLine = chimeraReply.iterator$(); $modelLine.hasNext$()&&((modelLine=($modelLine.next$())),1);) {
var chimeraModel=Clazz.new_($I$(7,1).c$$S,[modelLine]);
var modelKey=$I$(5,"makeModelKey$I$I",[chimeraModel.getModelNumber$(), chimeraModel.getSubModelNumber$()]);
selectedModelsMap.put$O$O(modelKey, chimeraModel);
}
}return selectedModelsMap;
});

Clazz.newMeth(C$, 'getSelectedResidueSpecs$',  function () {
var selectedResidues=Clazz.new_($I$(4,1));
var command="list selection level residue";
var chimeraReply=this.sendChimeraCommand$S$Z(command, true);
if (chimeraReply != null ) {
for (var inputLine, $inputLine = chimeraReply.iterator$(); $inputLine.hasNext$()&&((inputLine=($inputLine.next$())),1);) {
var inputLineParts=inputLine.split$S("\\s+");
if (inputLineParts.length >= 5) {
selectedResidues.add$O(inputLineParts[2]);
}}
}return selectedResidues;
});

Clazz.newMeth(C$, 'getSelectedResidues$java_util_Map',  function (selectedModelsMap) {
var chimeraReply=this.sendChimeraCommand$S$Z("list selection level residue", true);
if (chimeraReply != null ) {
for (var inputLine, $inputLine = chimeraReply.iterator$(); $inputLine.hasNext$()&&((inputLine=($inputLine.next$())),1);) {
var r=Clazz.new_($I$(8,1).c$$S,[inputLine]);
var modelKey=$I$(5,"makeModelKey$I$I",[r.getModelNumber$(), r.getSubModelNumber$()]);
if (selectedModelsMap.containsKey$O(modelKey)) {
var model=selectedModelsMap.get$O(modelKey);
model.addResidue$ext_edu_ucsf_rbvi_strucviz2_ChimeraResidue(r);
}}
}});

Clazz.newMeth(C$, 'getModelList$',  function () {
var modelList=Clazz.new_($I$(4,1));
var command="list models type " + (this.isChimeraX$() ? "AtomicStructure" : "molecule");
var list=this.sendChimeraCommand$S$Z(command, true);
if (list != null ) {
for (var modelLine, $modelLine = list.iterator$(); $modelLine.hasNext$()&&((modelLine=($modelLine.next$())),1);) {
try {
var chimeraModel=Clazz.new_($I$(7,1).c$$S,[modelLine]);
modelList.add$O(chimeraModel);
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException")){
} else {
throw e;
}
}
}
}return modelList;
});

Clazz.newMeth(C$, 'getPresets$',  function () {
var presetList=Clazz.new_($I$(4,1));
var output=this.sendChimeraCommand$S$Z("preset list", true);
if (output != null ) {
for (var preset, $preset = output.iterator$(); $preset.hasNext$()&&((preset=($preset.next$())),1);) {
preset=preset.substring$I(7);
preset=preset.replaceFirst$S$S("\"", "(");
preset=preset.replaceFirst$S$S("\"", ")");
presetList.add$O(preset);
}
}return presetList;
});

Clazz.newMeth(C$, 'isChimeraLaunched$',  function () {
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

Clazz.newMeth(C$, 'launchChimera$java_util_List',  function (chimeraPaths) {
if (this.isChimeraLaunched$()) {
return true;
}var error="Error message: ";
var workingPath="";
for (var chimeraPath, $chimeraPath = chimeraPaths.iterator$(); $chimeraPath.hasNext$()&&((chimeraPath=($chimeraPath.next$())),1);) {
try {
chimeraPath=$I$(9,"get$S$SA",[chimeraPath, Clazz.array(String, -1, [])]).toRealPath$java_nio_file_LinkOptionA(Clazz.array($I$(10), -1, [])).toString();
var path=Clazz.new_($I$(6,1).c$$S,[chimeraPath]);
if (!path.canExecute$()) {
error+="File '" + path + "' does not exist.\n" ;
continue;
}var args=Clazz.new_($I$(4,1));
args.add$O(chimeraPath);
this.addLaunchArguments$java_util_List(args);
var pb=Clazz.new_($I$(11,1).c$$java_util_List,[args]);
this.chimera=pb.start$();
error="";
workingPath=chimeraPath;
break;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
error+=e.getMessage$();
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

Clazz.newMeth(C$, 'addLaunchArguments$java_util_List',  function (args) {
args.add$O("--start");
args.add$O("RESTServer");
});

Clazz.newMeth(C$, 'getPortNumber',  function () {
var port=0;
var readChan=this.chimera.getInputStream$();
var lineReader=Clazz.new_([Clazz.new_($I$(13,1).c$$java_io_InputStream,[readChan])],$I$(12,1).c$$java_io_Reader);
var responses=Clazz.new_($I$(14,1));
try {
var response=lineReader.readLine$();
while (response != null ){
responses.append$S("\n" + response);
if (response.startsWith$S("REST server")) {
var tokens=response.split$S(" ");
for (var i=0; i < tokens.length - 1; i++) {
if ("port".equals$O(tokens[i])) {
port=Integer.parseInt$S(tokens[i + 1]);
break;
}}
}if (port > 0) {
break;
}response=lineReader.readLine$();
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

Clazz.newMeth(C$, 'getModelColor$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel',  function (model) {
var colorLines=this.sendChimeraCommand$S$Z("list model spec " + model.toSpec$() + " attribute color" , true);
if (colorLines == null  || colorLines.size$() == 0 ) {
return null;
}return $I$(5,"parseModelColor$S",[colorLines.get$I(0)]);
});

Clazz.newMeth(C$, 'addResidues$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel',  function (model) {
var modelNumber=model.getModelNumber$();
var subModelNumber=model.getSubModelNumber$();
var reply=this.sendChimeraCommand$S$Z("list residues spec " + model.toSpec$(), true);
if (reply == null ) {
return;
}for (var inputLine, $inputLine = reply.iterator$(); $inputLine.hasNext$()&&((inputLine=($inputLine.next$())),1);) {
var r=Clazz.new_($I$(8,1).c$$S,[inputLine]);
if (r.getModelNumber$() == modelNumber || r.getSubModelNumber$() == subModelNumber ) {
model.addResidue$ext_edu_ucsf_rbvi_strucviz2_ChimeraResidue(r);
}}
});

Clazz.newMeth(C$, 'getAttrList$',  function () {
var attributes=Clazz.new_($I$(4,1));
var command=(this.isChimeraX$() ? "info " : "list ") + "resattr";
var reply=this.sendChimeraCommand$S$Z(command, true);
if (reply != null ) {
for (var inputLine, $inputLine = reply.iterator$(); $inputLine.hasNext$()&&((inputLine=($inputLine.next$())),1);) {
var lineParts=inputLine.split$S("\\s");
if (lineParts.length == 2 && lineParts[0].equals$O("resattr") ) {
attributes.add$O(lineParts[1]);
}}
}return attributes;
});

Clazz.newMeth(C$, 'getAttrValues$S$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel',  function (aCommand, model) {
var values=Clazz.new_($I$(2,1));
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
values.put$O$O(residue, Boolean.valueOf$S(value));
continue;
}try {
var doubleValue=Double.valueOf$S(value);
values.put$O$O(residue, doubleValue);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
values.put$O$O(residue, value);
} else {
throw ex;
}
}
}}}
}return values;
});

Clazz.newMeth(C$, 'sendChimeraCommand$S$Z',  function (command, reply) {
if (false) {
System.out.println$S("chimeradebug>> " + command);
}if (!this.isChimeraLaunched$() || command == null   || "".equals$O(command.trim$()) ) {
return null;
}var waited=0;
var pause=25;
while (this.busy && waited < 1001 ){
try {
$I$(15).sleep$J(pause);
waited+=pause;
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
System.out.println$S("Chimera command took " + (Long.$s(Long.$sub(System.currentTimeMillis$(),startTime))) + "ms: " + command );
}}
});

Clazz.newMeth(C$, 'sendRestCommand$S',  function (command) {
var restUrl="http://127.0.0.1:" + this.chimeraRestPort + "/run" ;
var commands=Clazz.new_($I$(4,1).c$$I,[1]);
var method=this.getHttpRequestMethod$();
if ("GET".equals$O(method)) {
try {
command=$I$(16,"encode$S$S",[command, $I$(17).UTF_8.name$()]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
command=command.replace$CharSequence$CharSequence(" ", "+").replace$CharSequence$CharSequence("#", "%23").replace$CharSequence$CharSequence("|", "%7C").replace$CharSequence$CharSequence(";", "%3B").replace$CharSequence$CharSequence(":", "%3A");
} else {
throw e;
}
}
}commands.add$O(Clazz.new_($I$(18,1).c$$S$S,["command", command]));
var reply=Clazz.new_($I$(4,1));
var response=null;
try {
response="GET".equals$O(method) ? $I$(19).doHttpGet$S$java_util_List$I$I(restUrl, commands, 100, 15000) : $I$(19).doHttpUrlPost$S$java_util_List$I$I(restUrl, commands, 100, 15000);
var line="";
while ((line=response.readLine$()) != null ){
reply.add$O(line);
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

Clazz.newMeth(C$, 'getHttpRequestMethod$',  function () {
return "POST";
});

Clazz.newMeth(C$, 'sendStdinCommand$S$Z',  function (command, readReply) {
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

Clazz.newMeth(C$, 'getStructureManager$',  function () {
return this.structureManager;
});

Clazz.newMeth(C$, 'isBusy$',  function () {
return this.busy;
});

Clazz.newMeth(C$, 'getChimeraProcess$',  function () {
return this.chimera;
});

Clazz.newMeth(C$, 'isChimeraX$',  function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
