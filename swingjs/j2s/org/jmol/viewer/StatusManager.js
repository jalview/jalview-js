(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.Lst','javajs.util.PT','org.jmol.util.Logger','org.jmol.c.CBK','Boolean','org.jmol.script.SV','org.jmol.api.Interface']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StatusManager");
C$.MAXIMUM_QUEUE_LENGTH=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.MAXIMUM_QUEUE_LENGTH=16;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.jsl=null;
this.cbl=null;
this.statusList=null;
this.allowStatusReporting=false;
this.messageQueue=null;
this.statusPtr=0;
this.jmolScriptCallbacks=null;
this.imageMap=null;
this.minSyncRepeatMs=0;
this.syncingScripts=false;
this.syncingMouse=false;
this.drivingSync=false;
this.isSynced=false;
this.syncDisabled=false;
this.stereoSync=false;
this.qualityJPG=0;
this.qualityPNG=0;
this.imageType=null;
this.audios=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.statusList="";
this.messageQueue=Clazz.new_($I$(1));
this.statusPtr=0;
this.jmolScriptCallbacks=Clazz.new_($I$(1));
this.minSyncRepeatMs=100;
this.syncingScripts=false;
this.syncingMouse=false;
this.qualityJPG=-1;
this.qualityPNG=-1;
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer', function (vwr) {
C$.$init$.apply(this);
this.vwr=vwr;
}, 1);

Clazz.newMeth(C$, 'recordStatus$S', function (statusName) {
return (this.allowStatusReporting && this.statusList.length$() > 0  && (this.statusList.equals$O("all") || this.statusList.indexOf$S(statusName) >= 0 ) );
}, p$1);

Clazz.newMeth(C$, 'setStatusChanged$S$I$O$Z', function (statusName, intInfo, statusInfo, isReplace) {
if (!p$1.recordStatus$S.apply(this, [statusName])) return;
var msgRecord=Clazz.new_($I$(2));
msgRecord.addLast$TV(Integer.valueOf$I(++this.statusPtr));
msgRecord.addLast$TV(statusName);
msgRecord.addLast$TV(Integer.valueOf$I(intInfo));
msgRecord.addLast$TV(statusInfo);
var statusRecordSet=(isReplace ? null : this.messageQueue.get$O(statusName));
if (statusRecordSet == null ) this.messageQueue.put$TK$TV(statusName, statusRecordSet=Clazz.new_($I$(2)));
 else if (statusRecordSet.size$() == C$.MAXIMUM_QUEUE_LENGTH) statusRecordSet.removeItemAt$I(0);
statusRecordSet.addLast$TV(msgRecord);
}, p$1);

Clazz.newMeth(C$, 'getStatusChanged$S', function (newStatusList) {
var isRemove=(newStatusList.length$() > 0 && newStatusList.charAt$I(0) == "-" );
var isAdd=(newStatusList.length$() > 0 && newStatusList.charAt$I(0) == "+" );
var getList=false;
if (isRemove) {
this.statusList=$I$(3).rep$S$S$S(this.statusList, newStatusList.substring$I$I(1, newStatusList.length$()), "");
} else {
newStatusList=$I$(3).rep$S$S$S(newStatusList, "+", "");
if (this.statusList.equals$O(newStatusList) || isAdd && this.statusList.indexOf$S(newStatusList) >= 0  ) {
getList=true;
} else {
if (!isAdd) this.statusList="";
this.statusList += newStatusList;
if ($I$(4).debugging) $I$(4).debug$S("StatusManager messageQueue = " + this.statusList);
}}var list=Clazz.new_($I$(2));
if (getList) for (var e, $e = this.messageQueue.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) list.addLast$TV(e.getValue$());

this.messageQueue.clear$();
this.statusPtr=0;
return list;
});

Clazz.newMeth(C$, 'jmolScriptCallback$org_jmol_c_CBK', function (callback) {
var s=this.jmolScriptCallbacks.get$O(callback);
if (s != null ) this.vwr.evalStringQuietSync$S$Z$Z(s, true, false);
return s;
}, p$1);

Clazz.newMeth(C$, 'setCallbackFunction$S$S', function (callbackType, callbackFunction) {
var callback=$I$(5).getCallback$S(callbackType);
System.out.println$S("callback set for " + callbackType + " " + callbackFunction + " " + callback );
if (callback != null ) {
var pt=(callbackFunction == null  ? 0 : callbackFunction.length$() > 7 && callbackFunction.toLowerCase$().indexOf$S("script:") == 0  ? 7 : callbackFunction.length$() > 11 && callbackFunction.toLowerCase$().indexOf$S("jmolscript:") == 0  ? 11 : 0);
if (pt == 0) this.jmolScriptCallbacks.remove$O(callback);
 else this.jmolScriptCallbacks.put$TK$TV(callback, callbackFunction.substring$I(pt).trim$());
}if (this.cbl != null ) this.cbl.setCallbackFunction$S$S(callbackType, callbackFunction);
});

Clazz.newMeth(C$, 'notifyEnabled$org_jmol_c_CBK', function (type) {
return this.cbl != null  && this.cbl.notifyEnabled$org_jmol_c_CBK(type) ;
});

Clazz.newMeth(C$, 'setStatusAppletReady$S$Z', function (htmlName, isReady) {
var sJmol=(isReady ? p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).APPLETREADY]) : null);
if (this.notifyEnabled$org_jmol_c_CBK($I$(5).APPLETREADY)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).APPLETREADY, Clazz.array(java.lang.Object, -1, [sJmol, htmlName, $I$(6).valueOf$Z(isReady), null]));
});

Clazz.newMeth(C$, 'setStatusAtomMoved$javajs_util_BS', function (bsMoved) {
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).ATOMMOVED]);
p$1.setStatusChanged$S$I$O$Z.apply(this, ["atomMoved", -1, bsMoved, false]);
if (this.notifyEnabled$org_jmol_c_CBK($I$(5).ATOMMOVED)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).ATOMMOVED, Clazz.array(java.lang.Object, -1, [sJmol, bsMoved]));
});

Clazz.newMeth(C$, 'setStatusAtomPicked$I$S$java_util_Map', function (atomIndex, strInfo, map) {
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).PICK]);
$I$(4).info$S("setStatusAtomPicked(" + atomIndex + "," + strInfo + ")" );
p$1.setStatusChanged$S$I$O$Z.apply(this, ["atomPicked", atomIndex, strInfo, false]);
if (this.notifyEnabled$org_jmol_c_CBK($I$(5).PICK)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).PICK, Clazz.array(java.lang.Object, -1, [sJmol, strInfo, Integer.valueOf$I(atomIndex), map]));
});

Clazz.newMeth(C$, 'setStatusClicked$I$I$I$I$I', function (x, y, action, clickCount, mode) {
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).CLICK]);
if (!this.notifyEnabled$org_jmol_c_CBK($I$(5).CLICK)) return action;
var m=Clazz.array(Integer.TYPE, -1, [action, mode]);
this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).CLICK, Clazz.array(java.lang.Object, -1, [sJmol, Integer.valueOf$I(x), Integer.valueOf$I(y), Integer.valueOf$I(action), Integer.valueOf$I(clickCount), m]));
return m[0];
});

Clazz.newMeth(C$, 'setStatusResized$I$I', function (width, height) {
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).RESIZE]);
if (this.notifyEnabled$org_jmol_c_CBK($I$(5).RESIZE)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).RESIZE, Clazz.array(java.lang.Object, -1, [sJmol, Integer.valueOf$I(width), Integer.valueOf$I(height)]));
});

Clazz.newMeth(C$, 'haveHoverCallback$', function () {
return (this.jmolScriptCallbacks.containsKey$O($I$(5).HOVER) || this.notifyEnabled$org_jmol_c_CBK($I$(5).HOVER) );
});

Clazz.newMeth(C$, 'setStatusAtomHovered$I$S', function (iatom, strInfo) {
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).HOVER]);
if (this.notifyEnabled$org_jmol_c_CBK($I$(5).HOVER)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).HOVER, Clazz.array(java.lang.Object, -1, [sJmol, strInfo, Integer.valueOf$I(iatom)]));
});

Clazz.newMeth(C$, 'setStatusObjectHovered$S$S$javajs_util_T3', function (id, strInfo, pt) {
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).HOVER]);
if (this.notifyEnabled$org_jmol_c_CBK($I$(5).HOVER)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).HOVER, Clazz.array(java.lang.Object, -1, [sJmol, strInfo, Integer.valueOf$I(-1), id, Float.valueOf$F(pt.x), Float.valueOf$F(pt.y), Float.valueOf$F(pt.z)]));
});

Clazz.newMeth(C$, 'showImage$S$O', function (title, image) {
var a=$I$(3).split$S$S(title, "\u0001");
title=(a.length < 3 || a[2].equals$O("null")  ? a[1].substring$I(a[1].lastIndexOf$S("/") + 1) : a[2]);
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).IMAGE]);
if (this.notifyEnabled$org_jmol_c_CBK($I$(5).IMAGE)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).IMAGE, Clazz.array(java.lang.Object, -1, [sJmol, title, image]));
if ($I$(6).TRUE.equals$O(image)) {
if (this.imageMap == null ) return;
var lst=Clazz.new_($I$(2));
for (var key, $key = this.imageMap.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) lst.addLast$TV(key);

for (var i=lst.size$(); --i >= 0; ) this.imageMap.get$O(lst.get$I(i)).closeMe$();

return;
}if (this.imageMap == null ) this.imageMap=Clazz.new_($I$(1));
var d=this.imageMap.get$O(title);
if ($I$(6).FALSE.equals$O(image)) {
if (d != null ) d.closeMe$();
return;
}if (d == null  && image != null  ) d=this.vwr.apiPlatform.getImageDialog$S$java_util_Map(title, this.imageMap);
if (d == null ) return;
if (image == null ) d.closeMe$();
 else d.setImage$O(image);
});

Clazz.newMeth(C$, 'setFileLoadStatus$S$S$S$S$I$Z$Boolean', function (fullPathName, fileName, modelName, errorMsg, ptLoad, doCallback, isAsync) {
if (fullPathName == null  && "resetUndo".equals$O(fileName) ) {
var appConsole=this.vwr.getProperty$S$S$O("DATA_API", "getAppConsole", null);
if (appConsole != null ) appConsole.zap$();
fileName=this.vwr.getZapName$();
}p$1.setStatusChanged$S$I$O$Z.apply(this, ["fileLoaded", ptLoad, fullPathName, false]);
if (errorMsg != null ) p$1.setStatusChanged$S$I$O$Z.apply(this, ["fileLoadError", ptLoad, errorMsg, false]);
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).LOADSTRUCT]);
if (doCallback && this.notifyEnabled$org_jmol_c_CBK($I$(5).LOADSTRUCT) ) {
var name=this.vwr.getP$S("_smilesString");
if (name.length$() != 0) fileName=name;
this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).LOADSTRUCT, Clazz.array(java.lang.Object, -1, [sJmol, fullPathName, fileName, modelName, errorMsg, Integer.valueOf$I(ptLoad), this.vwr.getP$S("_modelNumber"), this.vwr.getModelNumberDotted$I(this.vwr.ms.mc - 1), isAsync]));
}});

Clazz.newMeth(C$, 'setStatusFrameChanged$I$I$I$I$I$F$S', function (fileNo, modelNo, firstNo, lastNo, currentFrame, currentMorphModel, entryName) {
if (this.vwr.ms == null ) return;
var animating=this.vwr.am.animationOn;
var frameNo=(animating ? -2 - currentFrame : currentFrame);
p$1.setStatusChanged$S$I$O$Z.apply(this, ["frameChanged", frameNo, (currentFrame >= 0 ? this.vwr.getModelNumberDotted$I(currentFrame) : ""), false]);
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).ANIMFRAME]);
if (this.notifyEnabled$org_jmol_c_CBK($I$(5).ANIMFRAME)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).ANIMFRAME, Clazz.array(java.lang.Object, -1, [sJmol, Clazz.array(Integer.TYPE, -1, [frameNo, fileNo, modelNo, firstNo, lastNo, currentFrame]), entryName, Float.valueOf$F(currentMorphModel)]));
if (!animating) this.vwr.checkMenuUpdate$();
});

Clazz.newMeth(C$, 'setStatusDragDropped$I$I$I$S', function (mode, x, y, fileName) {
p$1.setStatusChanged$S$I$O$Z.apply(this, ["dragDrop", 0, "", false]);
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).DRAGDROP]);
if (!this.notifyEnabled$org_jmol_c_CBK($I$(5).DRAGDROP)) return false;
this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).DRAGDROP, Clazz.array(java.lang.Object, -1, [sJmol, Integer.valueOf$I(mode), Integer.valueOf$I(x), Integer.valueOf$I(y), fileName]));
return true;
});

Clazz.newMeth(C$, 'setScriptEcho$S$Z', function (strEcho, isScriptQueued) {
if (strEcho == null ) return;
p$1.setStatusChanged$S$I$O$Z.apply(this, ["scriptEcho", 0, strEcho, false]);
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).ECHO]);
if (this.notifyEnabled$org_jmol_c_CBK($I$(5).ECHO)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).ECHO, Clazz.array(java.lang.Object, -1, [sJmol, strEcho, Integer.valueOf$I(isScriptQueued ? 1 : 0)]));
});

Clazz.newMeth(C$, 'setStatusMeasuring$S$I$S$F', function (status, intInfo, strMeasure, value) {
p$1.setStatusChanged$S$I$O$Z.apply(this, [status, intInfo, strMeasure, false]);
var sJmol=null;
if (status.equals$O("measureCompleted")) {
$I$(4).info$S("measurement[" + intInfo + "] = " + strMeasure );
sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).MEASURE]);
} else if (status.equals$O("measurePicked")) {
p$1.setStatusChanged$S$I$O$Z.apply(this, ["measurePicked", intInfo, strMeasure, false]);
$I$(4).info$S("measurePicked " + intInfo + " " + strMeasure );
}if (this.notifyEnabled$org_jmol_c_CBK($I$(5).MEASURE)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).MEASURE, Clazz.array(java.lang.Object, -1, [sJmol, strMeasure, Integer.valueOf$I(intInfo), status, Float.valueOf$F(value)]));
});

Clazz.newMeth(C$, 'notifyError$S$S$S', function (errType, errMsg, errMsgUntranslated) {
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).ERROR]);
if (this.notifyEnabled$org_jmol_c_CBK($I$(5).ERROR)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).ERROR, Clazz.array(java.lang.Object, -1, [sJmol, errType, errMsg, this.vwr.getShapeErrorState$(), errMsgUntranslated]));
});

Clazz.newMeth(C$, 'notifyMinimizationStatus$S$Integer$Float$Float$S', function (minStatus, minSteps, minEnergy, minEnergyDiff, ff) {
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).MINIMIZATION]);
if (this.notifyEnabled$org_jmol_c_CBK($I$(5).MINIMIZATION)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).MINIMIZATION, Clazz.array(java.lang.Object, -1, [sJmol, minStatus, minSteps, minEnergy, minEnergyDiff, ff]));
});

Clazz.newMeth(C$, 'setScriptStatus$S$S$I$S', function (strStatus, statusMessage, msWalltime, strErrorMessageUntranslated) {
if (msWalltime < -1) {
var iscript=-2 - msWalltime;
p$1.setStatusChanged$S$I$O$Z.apply(this, ["scriptStarted", iscript, statusMessage, false]);
strStatus="script " + iscript + " started" ;
} else if (strStatus == null ) {
return;
}var sJmol=(msWalltime == 0 ? p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).SCRIPT]) : null);
var isScriptCompletion=(strStatus == "Script completed");
if (p$1.recordStatus$S.apply(this, ["script"])) {
var isError=(strErrorMessageUntranslated != null );
p$1.setStatusChanged$S$I$O$Z.apply(this, [(isError ? "scriptError" : "scriptStatus"), 0, strStatus, false]);
if (isError || isScriptCompletion ) p$1.setStatusChanged$S$I$O$Z.apply(this, ["scriptTerminated", 1, "Jmol script terminated" + (isError ? " unsuccessfully: " + strStatus : " successfully"), false]);
}if (isScriptCompletion && this.vwr.getBoolean$I(603979880) && this.vwr.getBoolean$I(603979825)  ) strStatus=this.vwr.getChimeMessenger$().scriptCompleted$org_jmol_viewer_StatusManager$S$S(this, statusMessage, strErrorMessageUntranslated);
var data=Clazz.array(java.lang.Object, -1, [sJmol, strStatus, statusMessage, Integer.valueOf$I(isScriptCompletion ? -1 : msWalltime), strErrorMessageUntranslated]);
if (this.notifyEnabled$org_jmol_c_CBK($I$(5).SCRIPT)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).SCRIPT, data);
this.processScript$OA(data);
});

Clazz.newMeth(C$, 'processScript$OA', function (data) {
var msWalltime=(data[3]).intValue$();
if (this.vwr.scriptEditor != null ) {
if (msWalltime > 0) {
this.vwr.scriptEditor.notifyScriptTermination$();
} else if (msWalltime < 0) {
if (msWalltime == -2) this.vwr.scriptEditor.notifyScriptStart$();
} else if (this.vwr.scriptEditor.isVisible$() && (data[2]).length$() > 0 ) {
this.vwr.scriptEditor.notifyContext$org_jmol_script_ScriptContext$OA(this.vwr.getScriptContext$S("SE notify"), data);
}}if (this.vwr.appConsole != null ) {
if (msWalltime == 0) {
var strInfo=(data[1] == null  ? null : data[1].toString());
this.vwr.appConsole.sendConsoleMessage$S(strInfo);
}}});

Clazz.newMeth(C$, 'doSync$', function () {
return (this.isSynced && this.drivingSync && !this.syncDisabled  );
});

Clazz.newMeth(C$, 'setSync$S', function (mouseCommand) {
if (this.syncingMouse) {
if (mouseCommand != null ) this.syncSend$S$O$I(mouseCommand, "*", 0);
} else if (!this.syncingScripts) this.syncSend$S$O$I("!" + this.vwr.tm.getMoveToText$F$Z(this.minSyncRepeatMs / 1000.0, false), "*", 0);
});

Clazz.newMeth(C$, 'setSyncDriver$I', function (syncMode) {
if (this.stereoSync && syncMode != 4 ) {
this.syncSend$S$O$I("SET_GRAPHICS_OFF", "*", 0);
this.stereoSync=false;
}switch (syncMode) {
case 4:
if (!this.syncDisabled) return;
this.syncDisabled=false;
break;
case 3:
this.syncDisabled=true;
break;
case 5:
this.drivingSync=true;
this.isSynced=true;
this.stereoSync=true;
break;
case 1:
this.drivingSync=true;
this.isSynced=true;
break;
case 2:
this.drivingSync=false;
this.isSynced=true;
break;
default:
this.drivingSync=false;
this.isSynced=false;
}
if ($I$(4).debugging) {
$I$(4).debug$S(this.vwr.appletName + " sync mode=" + syncMode + "; synced? " + this.isSynced + "; driving? " + this.drivingSync + "; disabled? " + this.syncDisabled );
}});

Clazz.newMeth(C$, 'syncSend$S$O$I', function (script, appletNameOrProp, port) {
if (port != 0 || this.notifyEnabled$org_jmol_c_CBK($I$(5).SYNC) ) {
var o=Clazz.array(java.lang.Object, -1, [null, script, appletNameOrProp, Integer.valueOf$I(port)]);
if (this.cbl != null ) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).SYNC, o);
return o[0];
}return null;
});

Clazz.newMeth(C$, 'modifySend$I$I$I$S', function (atomIndex, modelIndex, mode, msg) {
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).STRUCTUREMODIFIED]);
if (this.notifyEnabled$org_jmol_c_CBK($I$(5).STRUCTUREMODIFIED)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).STRUCTUREMODIFIED, Clazz.array(java.lang.Object, -1, [sJmol, Integer.valueOf$I(mode), Integer.valueOf$I(atomIndex), Integer.valueOf$I(modelIndex), msg]));
});

Clazz.newMeth(C$, 'processService$java_util_Map', function (info) {
var s=info.get$O("service");
if (s == null ) return null;
if (Clazz.instanceOf(s, "org.jmol.script.SV")) {
var m=Clazz.new_($I$(1));
for (var e, $e = info.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) m.put$TK$TV(e.getKey$(), $I$(7).oValue$O(e.getValue$()));

info=m;
}if (this.notifyEnabled$org_jmol_c_CBK($I$(5).SERVICE)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).SERVICE, Clazz.array(java.lang.Object, -1, [null, info]));
return info;
});

Clazz.newMeth(C$, 'getSyncMode$', function () {
return (!this.isSynced ? 0 : this.drivingSync ? 1 : 2);
});

Clazz.newMeth(C$, 'showUrl$S', function (urlString) {
if (this.jsl != null ) this.jsl.showUrl$S(urlString);
});

Clazz.newMeth(C$, 'clearConsole$', function () {
if (this.vwr.appConsole != null ) {
this.vwr.appConsole.sendConsoleMessage$S(null);
}if (this.jsl != null ) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).MESSAGE, null);
});

Clazz.newMeth(C$, 'functionXY$S$I$I', function (functionName, nX, nY) {
return (this.jsl == null  ? Clazz.array(Float.TYPE, [Math.abs(nX), Math.abs(nY)]) : this.jsl.functionXY$S$I$I(functionName, nX, nY));
});

Clazz.newMeth(C$, 'functionXYZ$S$I$I$I', function (functionName, nX, nY, nZ) {
return (this.jsl == null  ? Clazz.array(Float.TYPE, [Math.abs(nX), Math.abs(nY), Math.abs(nY)]) : this.jsl.functionXYZ$S$I$I$I(functionName, nX, nY, nZ));
});

Clazz.newMeth(C$, 'jsEval$S', function (strEval) {
return (this.jsl == null  ? "" : this.jsl.eval$S(strEval));
});

Clazz.newMeth(C$, 'createImage$S$S$S$BA$I', function (fileNameOrError, type, text, bytes, quality) {
return (this.jsl == null  ? null : this.jsl.createImage$S$S$O$I(fileNameOrError, type, text == null  ? bytes : text, quality));
});

Clazz.newMeth(C$, 'getRegistryInfo$', function () {
return (this.jsl == null  ? null : this.jsl.getRegistryInfo$());
});

Clazz.newMeth(C$, 'dialogAsk$S$S$java_util_Map', function (type, fileName, params) {
var isImage=type.equals$O("Save Image");
var sd=$I$(8).getOption$S$org_jmol_viewer_Viewer$S("dialog.Dialog", this.vwr, "status");
if (sd == null ) return null;
sd.setupUI$Z(false);
if (isImage) sd.setImageInfo$I$I$S(this.qualityJPG, this.qualityPNG, this.imageType);
var outputFileName=sd.getFileNameFromDialog$org_jmol_viewer_Viewer$S$S(this.vwr, type, fileName);
if (isImage && outputFileName != null  ) {
this.qualityJPG=sd.getQuality$S("JPG");
this.qualityPNG=sd.getQuality$S("PNG");
var sType=sd.getType$();
if (params != null ) {
params.put$TK$TV("qualityJPG", Integer.valueOf$I(this.qualityJPG));
params.put$TK$TV("qualityPNG", Integer.valueOf$I(this.qualityPNG));
if (sType != null ) params.put$TK$TV("dialogImageType", sType);
}if (sType != null ) this.imageType=sType;
}return outputFileName;
});

Clazz.newMeth(C$, 'getJspecViewProperties$S', function (myParam) {
return (this.jsl == null  ? null : this.jsl.getJSpecViewProperty$S(myParam == null  || myParam.length$() == 0  ? "" : ":" + myParam));
});

Clazz.newMeth(C$, 'resizeInnerPanel$I$I', function (width, height) {
return (this.jsl == null  || width == this.vwr.getScreenWidth$() && height == this.vwr.getScreenHeight$()   ? Clazz.array(Integer.TYPE, -1, [width, height]) : this.jsl.resizeInnerPanel$S("preferredWidthHeight " + width + " " + height + ";" ));
});

Clazz.newMeth(C$, 'resizeInnerPanelString$S', function (data) {
if (this.jsl != null ) this.jsl.resizeInnerPanel$S(data);
});

Clazz.newMeth(C$, 'registerAudio$S$java_util_Map', function (id, htParams) {
p$1.stopAudio$S.apply(this, [id]);
if (this.audios == null ) this.audios=Clazz.new_($I$(1));
if (htParams == null ) this.audios.remove$O(id);
 else this.audios.put$TK$TV(id, htParams.get$O("audioPlayer"));
});

Clazz.newMeth(C$, 'stopAudio$S', function (id) {
if (this.audios == null ) return;
var player=this.audios.get$O(id);
if (player != null ) player.action$("kill");
}, p$1);

Clazz.newMeth(C$, 'playAudio$java_util_Map', function (htParams) {
if (!this.vwr.getBoolean$I(603979797)) {
if (htParams == null ) return;
htParams.put$TK$TV("status", "close");
$I$(4).info$S("allowAudio is set false");
this.notifyAudioStatus$java_util_Map(htParams);
return;
}try {
var action=(htParams == null  ? "close" : htParams.get$O("action"));
var id=(htParams == null  ? null : htParams.get$O("id"));
if (action != null  && action.length$() > 0 ) {
if (id == null  || id.length$() == 0 ) {
if (this.audios == null  || this.audios.isEmpty$() ) return;
if (action.equals$O("close")) {
for (var key, $key = this.audios.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var player=this.audios.remove$O(key);
player.action$("close");
}
}return;
}var player=this.audios.get$O(id);
if (player != null ) {
player.action$(action);
return;
}}try {
($I$(8).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.util.JmolAudio", this.vwr, "script")).playAudio$org_jmol_viewer_Viewer$java_util_Map(this.vwr, htParams);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(4).info$S(e.getMessage$());
} else {
throw e;
}
}
} catch (t) {
}
});

Clazz.newMeth(C$, 'notifyAudioStatus$java_util_Map', function (htParams) {
var status=htParams.get$O("status");
System.out.println$S(status);
var script=htParams.get$O(status);
if (script != null ) this.vwr.script$S(script);
if (status == "ended") this.registerAudio$S$java_util_Map(htParams.get$O("id"), null);
var sJmol=p$1.jmolScriptCallback$org_jmol_c_CBK.apply(this, [$I$(5).AUDIO]);
if (this.notifyEnabled$org_jmol_c_CBK($I$(5).AUDIO)) this.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(5).AUDIO, Clazz.array(java.lang.Object, -1, [sJmol, htParams]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
