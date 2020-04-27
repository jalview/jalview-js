(function(){var P$=Clazz.newPackage("org.jmol.api"),I$=[[0,'java.util.Hashtable','Boolean','org.jmol.viewer.Viewer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JmolViewer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['menuStructure'],'O',['apiPlatform','org.jmol.api.GenericPlatform']]]

Clazz.newMeth(C$, 'allocateViewer$O$org_jmol_api_JmolAdapter$S$java_net_URL$java_net_URL$S$org_jmol_api_JmolStatusListener$org_jmol_api_GenericPlatform', function (display, modelAdapter, fullName, documentBase, codeBase, commandOptions, statusListener, implementedPlatform) {
var info=Clazz.new_($I$(1,1));
if (display != null ) info.put$O$O("display", display);
if (modelAdapter != null ) info.put$O$O("adapter", modelAdapter);
if (statusListener != null ) info.put$O$O("statuslistener", statusListener);
if (implementedPlatform != null ) info.put$O$O("platform", implementedPlatform);
if (commandOptions != null ) info.put$O$O("options", commandOptions);
if (fullName != null ) info.put$O$O("fullname", fullName);
if (documentBase != null ) info.put$O$O("documentbase", documentBase);
if (codeBase != null ) info.put$O$O("codebase", codeBase);
info.put$O$O("isApp", $I$(2).TRUE);
return Clazz.new_($I$(3,1).c$$java_util_Map,[info]);
}, 1);

Clazz.newMeth(C$, 'allocateViewer$O$org_jmol_api_JmolAdapter', function (container, jmolAdapter) {
return C$.allocateViewer$O$org_jmol_api_JmolAdapter$S$java_net_URL$java_net_URL$S$org_jmol_api_JmolStatusListener$org_jmol_api_GenericPlatform(container, jmolAdapter, null, null, null, null, null, null);
}, 1);

Clazz.newMeth(C$, 'allocateViewer$O$org_jmol_api_JmolAdapter$S$java_net_URL$java_net_URL$S$org_jmol_api_JmolStatusListener', function (display, modelAdapter, fullName, documentBase, codeBase, commandOptions, statusListener) {
return C$.allocateViewer$O$org_jmol_api_JmolAdapter$S$java_net_URL$java_net_URL$S$org_jmol_api_JmolStatusListener$org_jmol_api_GenericPlatform(display, modelAdapter, fullName, documentBase, codeBase, commandOptions, statusListener, null);
}, 1);

Clazz.newMeth(C$, 'setConsole$org_jmol_api_JmolAppConsoleInterface', function (console) {
this.getProperty$S$S$O("DATA_API", "getAppConsole", console);
});

Clazz.newMeth(C$, 'getJmolVersion$', function () {
return $I$(3).getJmolVersion$();
}, 1);

Clazz.newMeth(C$, 'openReader$S$O', function (fullPathName, reader) {
return this.openReader$S$S$O(fullPathName == null  ? "String" : fullPathName, null, reader);
});

Clazz.newMeth(C$, 'openFileAsync$S', function (fileName) {
this.openFileAsyncSpecial$S$I(fileName, 0);
});

Clazz.newMeth(C$, 'renderScreenImage$O$O$O', function (g, currentSize, rectClip) {
this.apiPlatform.renderScreenImage$O$O(g, currentSize);
});

Clazz.newMeth(C$, 'runScriptCautiously$S', function (script) {
return null;
});

Clazz.newMeth(C$, 'dispose$', function () {
});

C$.$static$=function(){C$.$static$=0;
{

self.Jmol || (Jmol = self.J2S);
Jmol._isSwingJS = true; Jmol._isAWTjs = true;
};
{
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
