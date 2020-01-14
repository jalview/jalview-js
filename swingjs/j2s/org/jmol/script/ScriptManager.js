(function(){var P$=Clazz.newPackage("org.jmol.script"),p$1={},I$=[[0,'Thread','javajs.util.Lst','org.jmol.api.Interface','javajs.util.PT','Boolean','org.jmol.util.Logger','org.jmol.script.ScriptQueueThread','javajs.util.SB','org.jmol.viewer.FileManager','javajs.util.Rdr','javajs.util.AU','javajs.util.ZipTools','org.jmol.util.Elements','javajs.util.BS']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ScriptManager", null, null, 'org.jmol.api.JmolScriptManager');
C$.prevCovalentVersion=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.prevCovalentVersion=1;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.eval=null;
this.evalTemp=null;
this.queueThreads=null;
this.scriptQueueRunning=null;
this.commandWatcherThread=null;
this.scriptQueue=null;
this.useCommandWatcherThread=false;
this.scriptIndex=0;
this.isScriptQueued=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.queueThreads=Clazz.array($I$(1), [2]);
this.scriptQueueRunning=Clazz.array(Boolean.TYPE, [2]);
this.scriptQueue=Clazz.new_($I$(2));
this.useCommandWatcherThread=false;
this.isScriptQueued=true;
}, 1);

Clazz.newMeth(C$, 'getScriptQueue$', function () {
return this.scriptQueue;
});

Clazz.newMeth(C$, 'isScriptQueued$', function () {
return this.isScriptQueued;
});

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
this.eval=p$1.newScriptEvaluator.apply(this, []);
this.eval.setCompiler$();
return this.eval;
});

Clazz.newMeth(C$, 'newScriptEvaluator', function () {
return ($I$(3).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.script.ScriptEval", this.vwr, "setOptions")).setViewer$org_jmol_viewer_Viewer(this.vwr);
}, p$1);

Clazz.newMeth(C$, 'clear$Z', function (isAll) {
if (!isAll) {
this.evalTemp=null;
return;
}this.startCommandWatcher$Z(false);
this.interruptQueueThreads$();
});

Clazz.newMeth(C$, 'addScript$S$Z', function (strScript, isQuiet) {
return p$1.addScr$S$S$S$Z.apply(this, ["String", strScript, "", isQuiet]);
});

Clazz.newMeth(C$, 'addScr$S$S$S$Z', function (returnType, strScript, statusList, isQuiet) {
{
this.useCommandWatcherThread = false;
}
if (!this.vwr.g.useScriptQueue) {
this.clearQueue$();
this.vwr.haltScriptExecution$();
}if (this.commandWatcherThread == null  && this.useCommandWatcherThread ) this.startCommandWatcher$Z(true);
if (this.commandWatcherThread != null  && strScript.indexOf$S("/*SPLIT*/") >= 0 ) {
var scripts=$I$(4).split$S$S(strScript, "/*SPLIT*/");
for (var i=0; i < scripts.length; i++) p$1.addScr$S$S$S$Z.apply(this, [returnType, scripts[i], statusList, isQuiet]);

return "split into " + scripts.length + " sections for processing" ;
}var useCommandThread=(this.commandWatcherThread != null  && (strScript.indexOf$S("javascript") < 0 || strScript.indexOf$S("#javascript ") >= 0 ) );
var scriptItem=Clazz.new_($I$(2));
scriptItem.addLast$TV(strScript);
scriptItem.addLast$TV(statusList);
scriptItem.addLast$TV(returnType);
scriptItem.addLast$TV(isQuiet ? $I$(5).TRUE : $I$(5).FALSE);
scriptItem.addLast$TV(Integer.valueOf$I(useCommandThread ? -1 : 1));
this.scriptQueue.addLast$TV(scriptItem);
p$1.startScriptQueue$Z.apply(this, [false]);
return "pending";
}, p$1);

Clazz.newMeth(C$, 'clearQueue$', function () {
this.scriptQueue.clear$();
});

Clazz.newMeth(C$, 'waitForQueue$', function () {
if (this.vwr.isSingleThreaded) return;
var n=0;
while (this.isQueueProcessing$()){
try {
$I$(1).sleep$J(100);
if (((n++) % 10) == 0) if ($I$(6).debugging) {
$I$(6).debug$S("...scriptManager waiting for queue: " + this.scriptQueue.size$() + " thread=" + $I$(1).currentThread$().getName$() );
}} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'isQueueProcessing$', function () {
return this.queueThreads[0] != null  || this.queueThreads[1] != null  ;
});

Clazz.newMeth(C$, 'flushQueue$S', function (command) {
for (var i=this.scriptQueue.size$(); --i >= 0; ) {
var strScript=(this.scriptQueue.get$I(i).get$I(0));
if (strScript.indexOf$S(command) == 0) {
this.scriptQueue.removeItemAt$I(i);
if ($I$(6).debugging) $I$(6).debug$S(this.scriptQueue.size$() + " scripts; removed: " + strScript );
}}
}, p$1);

Clazz.newMeth(C$, 'startScriptQueue$Z', function (startedByCommandWatcher) {
var pt=(startedByCommandWatcher ? 1 : 0);
if (this.scriptQueueRunning[pt]) return;
this.scriptQueueRunning[pt]=true;
this.queueThreads[pt]=Clazz.new_($I$(7).c$$org_jmol_script_ScriptManager$org_jmol_viewer_Viewer$Z$I,[this, this.vwr, startedByCommandWatcher, pt]);
this.queueThreads[pt].start$();
}, p$1);

Clazz.newMeth(C$, 'getScriptItem$Z$Z', function (watching, isByCommandWatcher) {
if (this.vwr.isSingleThreaded && this.vwr.queueOnHold ) return null;
var scriptItem=this.scriptQueue.get$I(0);
var flag=((scriptItem.get$I(4)).intValue$());
var isOK=(watching ? flag < 0 : isByCommandWatcher ? flag == 0 : flag == 1);
return (isOK ? scriptItem : null);
});

Clazz.newMeth(C$, 'startCommandWatcher$Z', function (isStart) {
this.useCommandWatcherThread=isStart;
if (isStart) {
if (this.commandWatcherThread != null ) return;
this.commandWatcherThread=$I$(3).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.script.CommandWatcherThread", this.vwr, "setOptions");
this.commandWatcherThread.setManager$O$org_jmol_viewer_Viewer$O(this, this.vwr, null);
this.commandWatcherThread.start$();
} else {
if (this.commandWatcherThread == null ) return;
this.clearCommandWatcherThread$();
}if ($I$(6).debugging) {
$I$(6).debug$S("command watcher " + (isStart ? "started" : "stopped") + this.commandWatcherThread );
}});

Clazz.newMeth(C$, 'interruptQueueThreads$', function () {
for (var i=0; i < this.queueThreads.length; i++) {
if (this.queueThreads[i] != null ) this.queueThreads[i].interrupt$();
}
});

Clazz.newMeth(C$, 'clearCommandWatcherThread$', function () {
if (this.commandWatcherThread == null ) return;
this.commandWatcherThread.interrupt$();
this.commandWatcherThread=null;
});

Clazz.newMeth(C$, 'queueThreadFinished$I', function (pt) {
this.queueThreads[pt].interrupt$();
this.scriptQueueRunning[pt]=false;
this.queueThreads[pt]=null;
this.vwr.setSyncDriver$I(4);
this.vwr.queueOnHold=false;
});

Clazz.newMeth(C$, 'runScriptNow$', function () {
if (this.scriptQueue.size$() > 0) {
var scriptItem=this.getScriptItem$Z$Z(true, true);
if (scriptItem != null ) {
scriptItem.set$I$TE(4, Integer.valueOf$I(0));
p$1.startScriptQueue$Z.apply(this, [true]);
}}});

Clazz.newMeth(C$, 'evalFile$S', function (strFilename) {
var ptWait=strFilename.indexOf$S(" -noqueue");
if (ptWait >= 0) {
return this.evalStringWaitStatusQueued$S$S$S$Z$Z("String", "script " + $I$(4).esc$S(strFilename.substring$I$I(0, ptWait)), "", false, false);
}return this.addScript$S$Z("script " + $I$(4).esc$S(strFilename), false);
});

Clazz.newMeth(C$, 'evalStringWaitStatusQueued$S$S$S$Z$Z', function (returnType, strScript, statusList, isQuiet, isQueued) {
if (strScript == null ) return null;
var str=p$1.checkScriptExecution$S$Z.apply(this, [strScript, false]);
if (str != null ) return str;
var outputBuffer=(statusList == null  || statusList.equals$O("output")  ? Clazz.new_($I$(8)) : null);
var oldStatusList=this.vwr.sm.statusList;
this.vwr.getStatusChanged$S(statusList);
if (this.vwr.isSyntaxCheck) $I$(6).info$S("--checking script:\n" + this.eval.getScript$() + "\n----\n" );
var historyDisabled=(strScript.indexOf$S(")") == 0);
if (historyDisabled) strScript=strScript.substring$I(1);
historyDisabled=historyDisabled || !isQueued ;
this.vwr.setErrorMessage$S$S(null, null);
var eval=(isQueued ? this.eval : p$1.newScriptEvaluator.apply(this, []));
var isOK=eval.compileScriptString$S$Z(strScript, isQuiet);
var strErrorMessage=eval.getErrorMessage$();
var strErrorMessageUntranslated=eval.getErrorMessageUntranslated$();
this.vwr.setErrorMessage$S$S(strErrorMessage, strErrorMessageUntranslated);
this.vwr.refresh$I$S(7, "script complete");
if (isOK) {
this.isScriptQueued=isQueued;
if (!isQuiet) this.vwr.setScriptStatus$S$S$I$S(null, strScript, -2 - (++this.scriptIndex), null);
eval.evaluateCompiledScript$Z$Z$Z$Z$javajs_util_SB$Z(this.vwr.isSyntaxCheck, this.vwr.isSyntaxAndFileCheck, historyDisabled, this.vwr.listCommands, outputBuffer, isQueued || !this.vwr.isSingleThreaded );
} else {
this.vwr.scriptStatus$S(strErrorMessage);
this.vwr.setScriptStatus$S$S$I$S("Jmol script terminated", strErrorMessage, 1, strErrorMessageUntranslated);
if (eval.isStateScript$()) C$.setStateScriptVersion$org_jmol_viewer_Viewer$S(this.vwr, null);
}if (strErrorMessage != null  && this.vwr.autoExit ) this.vwr.exitJmol$();
if (this.vwr.isSyntaxCheck) {
if (strErrorMessage == null ) $I$(6).info$S("--script check ok");
 else $I$(6).error$S("--script check error\n" + strErrorMessageUntranslated);
$I$(6).info$S("(use \'exit\' to stop checking)");
}this.isScriptQueued=true;
if (returnType.equalsIgnoreCase$S("String")) return strErrorMessageUntranslated;
if (outputBuffer != null ) return (strErrorMessageUntranslated == null  ? outputBuffer.toString() : strErrorMessageUntranslated);
var info=this.vwr.getProperty$S$S$O(returnType, "jmolStatus", statusList);
this.vwr.getStatusChanged$S(oldStatusList);
return info;
});

Clazz.newMeth(C$, 'checkScriptExecution$S$Z', function (strScript, isInsert) {
var str=strScript;
if (str.indexOf$S("\u0001##") >= 0) str=str.substring$I$I(0, str.indexOf$S("\u0001##"));
if (p$1.checkResume$S.apply(this, [str])) return "script processing resumed";
if (p$1.checkStepping$S.apply(this, [str])) return "script processing stepped";
if (this.checkHalt$S$Z(str, isInsert)) return "script execution halted";
return null;
}, p$1);

Clazz.newMeth(C$, 'checkResume$S', function (str) {
if (str.equalsIgnoreCase$S("resume")) {
this.vwr.setScriptStatus$S$S$I$S("", "execution resumed", 0, null);
this.eval.resumePausedExecution$();
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'checkStepping$S', function (str) {
if (str.equalsIgnoreCase$S("step")) {
this.eval.stepPausedExecution$();
return true;
}if (str.equalsIgnoreCase$S("?")) {
this.vwr.scriptStatus$S(this.eval.getNextStatement$());
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'evalStringQuietSync$S$Z$Z', function (strScript, isQuiet, allowSyncScript) {
if (allowSyncScript && this.vwr.sm.syncingScripts && strScript.indexOf$S("#NOSYNC;") < 0  ) this.vwr.syncScript$S$S$I(strScript + " #NOSYNC;", null, 0);
if (this.eval.isPaused$() && strScript.charAt$I(0) != "!" ) strScript='!' + $I$(4).trim$S$S(strScript, "\n\r\t ");
var isInsert=(strScript.length$() > 0 && strScript.charAt$I(0) == "!" );
if (isInsert) strScript=strScript.substring$I(1);
var msg=p$1.checkScriptExecution$S$Z.apply(this, [strScript, isInsert]);
if (msg != null ) return msg;
if (this.vwr.isScriptExecuting$() && (isInsert || this.eval.isPaused$() ) ) {
this.vwr.setInsertedCommand$S(strScript);
if (strScript.indexOf$S("moveto ") == 0) p$1.flushQueue$S.apply(this, ["moveto "]);
return "!" + strScript;
}this.vwr.setInsertedCommand$S("");
if (isQuiet) strScript += "\u0001## EDITOR_IGNORE ##";
return this.addScript$S$Z(strScript, isQuiet && !this.vwr.getBoolean$I(603979880) );
});

Clazz.newMeth(C$, 'checkHalt$S$Z', function (str, isInsert) {
if (str.equalsIgnoreCase$S("pause")) {
this.vwr.pauseScriptExecution$();
if (this.vwr.scriptEditorVisible) this.vwr.setScriptStatus$S$S$I$S("", "paused -- type RESUME to continue", 0, null);
return true;
}if (str.equalsIgnoreCase$S("menu")) {
this.vwr.getProperty$S$S$O("DATA_API", "getPopupMenu", "\u0000");
return true;
}str=str.toLowerCase$();
var exitScript=false;
var haltType=null;
if (str.startsWith$S("exit")) {
this.vwr.haltScriptExecution$();
this.vwr.clearScriptQueue$();
this.vwr.clearTimeouts$();
exitScript=str.equals$O(haltType="exit");
} else if (str.startsWith$S("quit")) {
this.vwr.haltScriptExecution$();
exitScript=str.equals$O(haltType="quit");
}if (haltType == null ) return false;
if (isInsert) {
this.vwr.clearThreads$();
this.vwr.queueOnHold=false;
}if (isInsert || this.vwr.g.waitForMoveTo ) {
this.vwr.tm.stopMotion$();
}$I$(6).info$S(this.vwr.isSyntaxCheck ? haltType + " -- stops script checking" : (isInsert ? "!" : "") + haltType + " received" );
this.vwr.isSyntaxCheck=false;
return exitScript;
});

Clazz.newMeth(C$, 'getAtomBitSetEval$org_jmol_api_JmolScriptEvaluator$O', function (eval, atomExpression) {
if (eval == null ) {
eval=this.evalTemp;
if (eval == null ) eval=this.evalTemp=p$1.newScriptEvaluator.apply(this, []);
}return this.vwr.slm.excludeAtoms$javajs_util_BS$Z(eval.getAtomBitSet$O(atomExpression), false);
});

Clazz.newMeth(C$, 'scriptCheckRet$S$Z', function (strScript, returnContext) {
if (strScript.indexOf$S(")") == 0 || strScript.indexOf$S("!") == 0 ) strScript=strScript.substring$I(1);
var sc=p$1.newScriptEvaluator.apply(this, []).checkScriptSilent$S(strScript);
return (returnContext || sc.errorMessage == null   ? sc : sc.errorMessage);
});

Clazz.newMeth(C$, 'openFileAsync$S$I', function (fileName, flags) {
var noScript=((flags & 2) == 2);
var isAppend=((flags & 4) == 4);
var pdbCartoons=((flags & 1) == 1 && !isAppend );
var noAutoPlay=((flags & 8) == 8);
var cmd=null;
fileName=fileName.trim$();
if (fileName.startsWith$S("\t")) {
noScript=true;
fileName=fileName.substring$I(1);
}fileName=fileName.replace$C$C("\\", "/");
var isCached=fileName.startsWith$S("cache://");
if (this.vwr.isApplet && fileName.indexOf$S("://") < 0 ) fileName="file://" + (fileName.startsWith$S("/") ? "" : "/") + fileName ;
try {
if (fileName.endsWith$S(".pse")) {
cmd=(isCached ? "" : "zap;") + "load SYNC " + $I$(4).esc$S(fileName) + (this.vwr.isApplet ? "" : " filter \'DORESIZE\'") ;
return;
}if (fileName.endsWith$S("jvxl")) {
cmd="isosurface ";
} else if (!fileName.toLowerCase$().endsWith$S(".spt")) {
var type=p$1.getDragDropFileTypeName$S.apply(this, [fileName]);
if (type == null ) {
type=$I$(9).determineSurfaceTypeIs$java_io_InputStream(this.vwr.getBufferedInputStream$S(fileName));
if (type != null ) cmd="if (_filetype == 'Pdb') { isosurface sigma 1.0 within 2.0 {*} " + $I$(4).esc$S(fileName) + " mesh nofill }; else; { isosurface " + $I$(4).esc$S(fileName) + "}" ;
return;
}if (type.equals$O("dssr")) {
cmd="model {visible} property dssr ";
} else if (type.equals$O("Jmol")) {
cmd="script ";
} else if (type.equals$O("Cube")) {
cmd="isosurface sign red blue ";
} else if (!type.equals$O("spt")) {
cmd=this.vwr.g.defaultDropScript;
cmd=$I$(4).rep$S$S$S(cmd, "%FILE", fileName);
cmd=$I$(4).rep$S$S$S(cmd, "%ALLOWCARTOONS", "" + pdbCartoons);
if (cmd.toLowerCase$().startsWith$S("zap") && (isCached || isAppend ) ) cmd=cmd.substring$I(3);
if (isAppend) {
cmd=$I$(4).rep$S$S$S(cmd, "load SYNC", "load append");
}return;
}}if (cmd == null  && !noScript  && this.vwr.scriptEditorVisible ) this.vwr.showEditor$SA(Clazz.array(String, -1, [fileName, this.vwr.getFileAsString3$S$Z$S(fileName, true, null)]));
 else cmd=(cmd == null  ? "script " : cmd) + $I$(4).esc$S(fileName);
} finally {
if (cmd != null ) this.vwr.evalString$S(cmd + (noAutoPlay ? "#!NOAUTOPLAY" : ""));
}
});

Clazz.newMeth(C$, 'getDragDropFileTypeName$S', function (fileName) {
var pt=fileName.indexOf$S("::");
if (pt >= 0) return fileName.substring$I$I(0, pt);
if (fileName.startsWith$S("=")) return "pdb";
if (fileName.endsWith$S(".dssr")) return "dssr";
var br=this.vwr.fm.getUnzippedReaderOrStreamFromName$S$O$Z$Z$Z$Z$java_util_Map(fileName, null, true, false, true, true, null);
if (Clazz.instanceOf(br, "javajs.api.ZInputStream")) {
var zipDirectory=p$1.getZipDirectoryAsString$S.apply(this, [fileName]);
if (zipDirectory.indexOf$S("JmolManifest") >= 0) return "Jmol";
return this.vwr.getModelAdapter$().getFileTypeName$O($I$(10).getBR$S(zipDirectory));
}if (Clazz.instanceOf(br, "java.io.BufferedReader") || Clazz.instanceOf(br, "java.io.BufferedInputStream") ) return this.vwr.getModelAdapter$().getFileTypeName$O(br);
if ($I$(11).isAS$O(br)) {
return (br)[0];
}return null;
}, p$1);

Clazz.newMeth(C$, 'getZipDirectoryAsString$S', function (fileName) {
var t=this.vwr.fm.getBufferedInputStreamOrErrorMessageFromName$S$S$Z$Z$BA$Z$Z(fileName, fileName, false, false, null, false, true);
return $I$(12).getZipDirectoryAsStringAndClose$java_io_BufferedInputStream(t);
}, p$1);

Clazz.newMeth(C$, 'setStateScriptVersion$org_jmol_viewer_Viewer$S', function (vwr, version) {
if (version != null ) {
C$.prevCovalentVersion=$I$(13).bondingVersion;
var tokens=$I$(4).getTokens$S(version.replace$C$C(".", " ").replace$C$C("_", " "));
try {
var main=$I$(4).parseInt$S(tokens[0]);
var sub=$I$(4).parseInt$S(tokens[1]);
var minor=$I$(4).parseInt$S(tokens[2]);
if (minor == -2147483648) minor=0;
if (main != -2147483648 && sub != -2147483648 ) {
var ver=vwr.stateScriptVersionInt=main * 10000 + sub * 100 + minor;
vwr.setBooleanProperty$S$Z("legacyautobonding", (ver < 110924));
vwr.g.legacyHAddition=(ver < 130117);
vwr.setBooleanProperty$S$Z("legacyjavafloat", (ver < 140206 || ver >= 140300 && ver < 140306  ));
vwr.setIntProperty$S$I("bondingVersion", ver < 140111 ? 0 : 1);
return;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}vwr.setIntProperty$S$I("bondingVersion", C$.prevCovalentVersion);
vwr.setBooleanProperty$S$Z("legacyautobonding", false);
vwr.g.legacyHAddition=false;
vwr.stateScriptVersionInt=2147483647;
}, 1);

Clazz.newMeth(C$, 'addHydrogensInline$javajs_util_BS$javajs_util_Lst$javajs_util_P3A', function (bsAtoms, vConnections, pts) {
var iatom=bsAtoms.nextSetBit$I(0);
var modelIndex=(iatom < 0 ? this.vwr.ms.mc - 1 : this.vwr.ms.at[iatom].mi);
if (modelIndex != this.vwr.ms.mc - 1) return Clazz.new_($I$(14));
var bsA=this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex);
this.vwr.g.appendNew=false;
var atomIndex=this.vwr.ms.ac;
var atomno=this.vwr.ms.getAtomCountInModel$I(modelIndex);
var sbConnect=Clazz.new_($I$(8));
for (var i=0; i < vConnections.size$(); i++) {
var a=vConnections.get$I(i);
sbConnect.append$S(";  connect 0 100 ").append$S("({" + (atomIndex++) + "}) " ).append$S("({" + a.i + "}) group;" );
}
var sb=Clazz.new_($I$(8));
sb.appendI$I(pts.length).append$S("\n").append$S("Viewer.AddHydrogens").append$S("#noautobond").append$S("\n");
for (var i=0; i < pts.length; i++) sb.append$S("H ").appendF$F(pts[i].x).append$S(" ").appendF$F(pts[i].y).append$S(" ").appendF$F(pts[i].z).append$S(" - - - - ").appendI$I(++atomno).appendC$C("\n");

this.vwr.openStringInlineParamsAppend$S$java_util_Map$Z(sb.toString(), null, true);
this.eval.runScriptBuffer$S$javajs_util_SB$Z(sbConnect.toString(), null, false);
var bsB=this.vwr.getModelUndeletedAtomsBitSet$I(modelIndex);
bsB.andNot$javajs_util_BS(bsA);
return bsB;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-16 07:18:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
