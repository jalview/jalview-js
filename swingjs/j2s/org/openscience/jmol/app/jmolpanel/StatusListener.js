(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),p$1={},I$=[[0,'org.jmol.c.CBK','java.util.Hashtable','org.openscience.jmol.app.jmolpanel.JmolResourceHandler','org.jmol.dialog.Dialog','org.openscience.jmol.app.webexport.WebExport','Boolean','java.net.URI','org.jmol.util.Logger','jspecview.application.MainFrame','javajs.util.PT','java.io.FileInputStream','java.io.FileOutputStream']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StatusListener", null, null, ['org.jmol.api.JmolStatusListener', 'org.jmol.api.JmolSyncInterface', 'org.jmol.api.JSVInterface']);
C$.propertiesFileName=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.propertiesFileName="jspecview.properties";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.jmol=null;
this.display=null;
this.vwr=null;
this.jSpecViewFrame=null;
this.jSpecViewForceNew=false;
this.nboOptions=null;
this.modificationMode=0;
this.lastSimulate=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
});

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_jmolpanel_JmolPanel$org_openscience_jmol_app_jmolpanel_DisplayPanel', function (jmol, display) {
C$.$init$.apply(this);
this.jmol=jmol;
this.display=display;
}, 1);

Clazz.newMeth(C$, 'notifyEnabled$org_jmol_c_CBK', function (type) {
switch (type) {
case $I$(1).ANIMFRAME:
case $I$(1).ECHO:
case $I$(1).IMAGE:
case $I$(1).LOADSTRUCT:
case $I$(1).STRUCTUREMODIFIED:
case $I$(1).MEASURE:
case $I$(1).MESSAGE:
case $I$(1).SERVICE:
case $I$(1).PICK:
case $I$(1).SCRIPT:
case $I$(1).SYNC:
return true;
case $I$(1).AUDIO:
case $I$(1).EVAL:
case $I$(1).ATOMMOVED:
case $I$(1).CLICK:
case $I$(1).DRAGDROP:
case $I$(1).ERROR:
case $I$(1).HOVER:
case $I$(1).MINIMIZATION:
case $I$(1).RESIZE:
case $I$(1).APPLETREADY:
break;
}
return false;
});

Clazz.newMeth(C$, 'notifyCallback$org_jmol_c_CBK$OA', function (type, data) {
if (!this.jmol.plugins.isEmpty$()) for (var p, $p = this.jmol.plugins.values$().iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) p.notifyCallback$org_jmol_c_CBK$OA(type, data);

var strInfo=(data == null  || data[1] == null   ? null : data[1].toString());
var info;
switch (type) {
case $I$(1).LOADSTRUCT:
p$1.notifyFileLoaded$S$S$S$S$Boolean.apply(this, [strInfo, data[2], data[3], data[4], data[8]]);
if (this.jmol.gaussianDialog != null ) this.jmol.gaussianDialog.updateModel$I(-2);
return;
case $I$(1).ANIMFRAME:
var iData=data[1];
var modelIndex=iData[0];
if (modelIndex <= -2) modelIndex=-2 - modelIndex;
if (this.display.haveDisplay) {
var menuName=data[2];
if (menuName.equals$O("0.0: ")) menuName="";
this.display.status.setStatus$I$S(1, menuName);
if (this.jmol.frame != null ) {
this.jmol.frame.setTitle$S(menuName);
}}return;
case $I$(1).SCRIPT:
var msWalltime=(data[3]).intValue$();
if (msWalltime == 0) {
if (data[2] != null  && this.display.haveDisplay ) this.display.status.setStatus$I$S(1, data[2]);
}return;
case $I$(1).ECHO:
break;
case $I$(1).MEASURE:
var mystatus=data[3];
if (mystatus.indexOf$S("Sequence") < 0) {
if (mystatus.indexOf$S("Pending") < 0 && this.display.haveDisplay ) this.display.measurementTable.updateTables$();
if (mystatus.indexOf$S("Picked") >= 0) p$1.notifyAtomPicked$S.apply(this, [strInfo]);
 else if (mystatus.indexOf$S("Completed") < 0) return;
}break;
case $I$(1).MESSAGE:
break;
case $I$(1).SERVICE:
if (this.display == null ) return;
info=data[1];
try {
var service=info.get$O("service");
if ("nbo".equals$O(service)) {
if ("showPanel".equals$O(info.get$O("action"))) this.jmol.startNBO$java_util_Map(info);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return;
case $I$(1).PICK:
p$1.notifyAtomPicked$S.apply(this, [strInfo]);
if (this.jmol.gaussianDialog != null ) this.jmol.gaussianDialog.updateModel$I((data[2]).intValue$());
break;
case $I$(1).STRUCTUREMODIFIED:
var mode=(data[1]).intValue$();
var atomIndex=(data[2]).intValue$();
var modelIndexx=(data[3]).intValue$();
p$1.notifyStructureModified$I$I$I.apply(this, [atomIndex, modelIndexx, mode]);
if (this.jmol.gaussianDialog != null ) this.jmol.gaussianDialog.updateModel$I(-1);
break;
case $I$(1).SYNC:
var lc=(strInfo == null  ? "" : strInfo.toLowerCase$());
if (lc.startsWith$S("jspecview")) {
this.setJSpecView$S$Z$Z(strInfo.substring$I(9).trim$(), false, false);
return;
}if (lc.equals$O("getpreference")) {
data[0]=(data[2] == null  ? this.jmol.preferencesDialog : this.jmol.getPreference$S(data[2].toString()));
return;
}if (strInfo != null  && strInfo.toLowerCase$().startsWith$S("nbo:") ) {
if (this.nboOptions == null ) this.nboOptions=Clazz.new_($I$(2));
this.nboOptions.put$TK$TV("options", strInfo);
this.jmol.startNBO$java_util_Map(this.nboOptions);
return;
}this.jmol.sendNioMessage$I$S((data[3]).intValue$(), strInfo);
return;
case $I$(1).AUDIO:
case $I$(1).DRAGDROP:
case $I$(1).ERROR:
case $I$(1).HOVER:
case $I$(1).IMAGE:
case $I$(1).MINIMIZATION:
case $I$(1).RESIZE:
case $I$(1).EVAL:
case $I$(1).ATOMMOVED:
case $I$(1).CLICK:
case $I$(1).APPLETREADY:
return;
}
if (this.jmol.service != null ) this.jmol.service.scriptCallback$S(strInfo);
var appConsole=this.vwr.getProperty$S$S$O("DATA_API", "getAppConsole", null);
if (appConsole != null ) appConsole.notifyCallback$org_jmol_c_CBK$OA(type, data);
});

Clazz.newMeth(C$, 'notifyStructureModified$I$I$I', function (atomIndex, modelIndex, mode) {
this.modificationMode=mode;
if (mode < 0) {
switch (mode) {
case -1:
case -2:
case -3:
case -4:
case -5:
p$1.checkJSpecView$Z.apply(this, [false]);
return;
}
}}, p$1);

Clazz.newMeth(C$, 'setCallbackFunction$S$S', function (callbackType, callbackFunction) {
if (callbackType.equals$O("modelkit")) {
if (callbackFunction.equals$O("ON")) this.display.buttonModelkit.setSelected$Z(true);
 else this.display.buttonRotate.setSelected$Z(true);
return;
}if (callbackType.equalsIgnoreCase$S("language")) {
$I$(3).clear$();
$I$(4).setupUIManager$();
if (this.jmol.webExport != null ) {
$I$(5).saveHistory$();
$I$(5).dispose$();
this.jmol.createWebExport$();
}var appConsole=this.vwr.getProperty$S$S$O("DATA_API", "getAppConsole", null);
if (appConsole != null ) appConsole.sendConsoleEcho$S(null);
this.jmol.updateLabels$();
return;
}});

Clazz.newMeth(C$, 'eval$S', function (strEval) {
var msg="# this funcationality is implemented only for the applet.\n" + strEval;
p$1.sendConsoleMessage$S.apply(this, [msg]);
return msg;
});

Clazz.newMeth(C$, 'createImage$S$S$O$I', function (fileName, type, text_or_bytes, quality) {
return null;
});

Clazz.newMeth(C$, 'notifyAtomPicked$S', function (info) {
if (this.display.haveDisplay) this.display.status.setStatus$I$S(1, info);
}, p$1);

Clazz.newMeth(C$, 'notifyFileLoaded$S$S$S$S$Boolean', function (fullPathName, fileName, modelName, errorMsg, isAsync) {
if (errorMsg != null ) {
return;
}if (!this.display.haveDisplay) return;
var title="Jmol";
if (fileName != null  && fileName.startsWith$S("DROP_") ) fileName=fileName.substring$I(5);
if (modelName != null  && fileName != null  ) title=(fileName.contains$CharSequence("&") ? "" : fileName + " - ") + modelName;
 else if (fileName != null ) title=fileName;
 else if (modelName != null ) title=modelName;
this.jmol.notifyFileOpen$S$S(fullPathName == null  ? null : fullPathName + (isAsync === $I$(6).TRUE  ? " (*)" : ""), title);
p$1.checkJSpecView$Z.apply(this, [fullPathName == null ]);
}, p$1);

Clazz.newMeth(C$, 'sendConsoleMessage$S', function (strStatus) {
var appConsole=this.vwr.getProperty$S$S$O("DATA_API", "getAppConsole", null);
if (appConsole != null ) appConsole.sendConsoleMessage$S(strStatus);
}, p$1);

Clazz.newMeth(C$, 'showUrl$S', function (url) {
try {
var c=Clazz.forName("java.awt.Desktop");
var getDesktop=c.getMethod$S$ClassA("getDesktop", Clazz.array(Class, -1, []));
var deskTop=getDesktop.invoke$O$OA(null, Clazz.array(java.lang.Object, -1, []));
var browse=c.getMethod$S$ClassA("browse", Clazz.array(Class, -1, [Clazz.getClass($I$(7))]));
var $arguments=Clazz.array(java.lang.Object, -1, [Clazz.new_($I$(7).c$$S,[url])]);
browse.invoke$O$OA(deskTop, $arguments);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(8).error$S(e.getMessage$());
var appConsole=this.vwr.getProperty$S$S$O("DATA_API", "getAppConsole", null);
if (appConsole != null ) {
appConsole.sendConsoleMessage$S("Java 6 Desktop.browse() capability unavailable. Could not open " + url);
} else {
$I$(8).error$S("Java 6 Desktop.browse() capability unavailable. Could not open " + url);
}} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'functionXY$S$I$I', function (functionName, nX, nY) {
nX=Math.abs(nX);
nY=Math.abs(nY);
var f=Clazz.array(Float.TYPE, [nX, nY]);
for (var i=nX; --i >= 0; ) for (var j=nY; --j >= 0; ) {
var x=i / 5.0;
var y=j / 5.0;
f[i][j]=(x * x + y);
if (Float.isNaN$F(f[i][j])) f[i][j]=-Math.sqrt(-x * x - y);
}

return f;
});

Clazz.newMeth(C$, 'functionXYZ$S$I$I$I', function (functionName, nX, nY, nZ) {
nX=Math.abs(nX);
nY=Math.abs(nY);
nZ=Math.abs(nZ);
var f=Clazz.array(Float.TYPE, [nX, nY, nZ]);
for (var i=nX; --i >= 0; ) for (var j=nY; --j >= 0; ) for (var k=nZ; --k >= 0; ) {
var x=i / ((nX - 1) / 2.0) - 1;
var y=j / ((nY - 1) / 2.0) - 1;
var z=k / ((nZ - 1) / 2.0) - 1;
f[i][j][k]=x * x + y * y - z * z;
}


return f;
});

Clazz.newMeth(C$, 'getRegistryInfo$', function () {
return null;
});

Clazz.newMeth(C$, 'resizeInnerPanel$S', function (data) {
return this.jmol.resizeInnerPanel$S(data);
});

Clazz.newMeth(C$, 'checkJSpecView$Z', function (closeAll) {
if (this.jSpecViewFrame != null  && this.modificationMode <= 0 ) {
this.jSpecViewForceNew=this.jSpecViewFrame.isVisible$();
this.setJSpecView$S$Z$Z(closeAll ? "none" : "", true, true);
this.jSpecViewForceNew=true;
}}, p$1);

Clazz.newMeth(C$, 'setJSpecView$S$Z$Z', function (peaks, doLoadCheck, isFileLoad) {
if (peaks.startsWith$S(":")) peaks=peaks.substring$I(1);
if (peaks.equals$O("none") || peaks.equals$O("NONESimulate:") ) {
if (this.jSpecViewFrame != null ) {
this.jSpecViewFrame.syncScript$S("close ALL");
this.jSpecViewFrame.awaken$Z(false);
}return;
}var isC13=peaks.equals$O("C13Simulate:");
var isSimulation=(peaks.equals$O("H1Simulate:") || isC13 );
var isStartup=(peaks.length$() == 0 || isSimulation );
var newSim=(isSimulation && !peaks.equals$O(this.lastSimulate) );
var data=null;
if (isSimulation) {
data=this.vwr.extractMolData$S(null);
if (data == null  || data.length$() == 0 ) return;
}if (this.jSpecViewFrame == null ) {
this.jSpecViewFrame=Clazz.new_($I$(9).c$$java_awt_Component$org_jmol_api_JSVInterface,[this.vwr.getBoolean$I(603979869) ? this.vwr.display : null, this]);
this.jSpecViewFrame.setSize$I$I(Math.max(1000, this.jmol.frame.getWidth$() + 50), 600);
this.jSpecViewFrame.setLocation$I$I(this.jmol.frame.getLocation$().x + 10, this.jmol.frame.getLocation$().y + 100);
this.jSpecViewFrame.register$S$org_jmol_api_JmolSyncInterface("Jmol", this);
this.vwr.setBooleanProperty$S$Z("_jspecview", true);
if (isStartup) {
doLoadCheck=true;
}}if (doLoadCheck || this.jSpecViewForceNew || newSim  ) {
var type="" + this.vwr.getP$S("_modelType");
if (type.equalsIgnoreCase$S("jcampdx")) {
this.jSpecViewForceNew=false;
var file="" + this.vwr.getP$S("_modelFile");
if (file.indexOf$S("/") < 0) return;
peaks="hidden true; load CHECK " + $I$(10).esc$S(file) + ";hidden false" + (newSim && isC13  ? ";scaleby 0.5" : null) ;
} else if (isFileLoad && !this.jSpecViewForceNew && !newSim  ) {
return;
} else {
this.jSpecViewForceNew=false;
if (newSim) this.lastSimulate=peaks;
var model="" + this.vwr.getP$S("_modelNumber");
if (data == null ) {
peaks="hidden false";
} else {
data=$I$(10).replaceAllCharacters$S$S$S(data, "&", "_");
peaks="hidden true; load CHECK " + (peaks.equals$O("H1Simulate:") ? "H1 " : "C13 ") + $I$(10).esc$S("id='~" + model + "';" + data ) + ";hidden false #SYNC_PEAKS" ;
}isStartup=false;
}}if (!this.jSpecViewFrame.isVisible$()) {
if (peaks.contains$CharSequence("<PeakData")) return;
this.jSpecViewFrame.awaken$Z(true);
this.display.setViewer$org_jmol_viewer_Viewer(this.vwr);
}if (isStartup) peaks="HIDDEN false";
this.jSpecViewFrame.syncScript$S(peaks);
});

Clazz.newMeth(C$, 'register$S$org_jmol_api_JmolSyncInterface', function (id, jsi) {
});

Clazz.newMeth(C$, 'syncScript$S', function (script) {
this.jmol.syncScript$S(script);
});

Clazz.newMeth(C$, 'setProperties$java_util_Properties', function (properties) {
try {
var fileIn=Clazz.new_($I$(11).c$$S,[C$.propertiesFileName]);
properties.load$java_io_InputStream(fileIn);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'saveProperties$java_util_Properties', function (properties) {
try {
var fileOut=Clazz.new_($I$(12).c$$S,[C$.propertiesFileName]);
properties.store$java_io_OutputStream$S(fileOut, "JSpecView Application Properties");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'exitJSpecView$Z$O', function (withDialog, frame) {
});

Clazz.newMeth(C$, 'runScript$S', function (script) {
this.jSpecViewFrame.runScriptNow$S(script);
});

Clazz.newMeth(C$, 'syncToJmol$S', function (msg) {
});

Clazz.newMeth(C$, 'getJSpecViewProperty$S', function (type) {
if (type.toLowerCase$().startsWith$S("jspecview")) {
type=type.substring$I(9);
if (type.startsWith$S(":")) type=type.substring$I(1);
return (this.jSpecViewFrame == null  ? null : this.jSpecViewFrame.getJSpecViewProperty$S(type));
}return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
