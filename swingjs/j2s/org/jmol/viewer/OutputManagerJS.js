(function(){var P$=Clazz.newPackage("org.jmol.viewer"),I$=[[0,'javajs.util.OC']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OutputManagerJS", null, 'org.jmol.viewer.OutputManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getLogPath$S', function (fileName) {
return fileName;
});

Clazz.newMeth(C$, 'clipImageOrPasteText$S', function (text) {
return "Clipboard not available";
});

Clazz.newMeth(C$, 'getClipboardText$', function () {
return "Clipboard not available";
});

Clazz.newMeth(C$, 'openOutputChannel$D$S$Z$Z', function (privateKey, fileName, asWriter, asAppend) {
return (Clazz.new_($I$(1,1))).setParams$javajs_api_BytePoster$S$Z$java_io_OutputStream(this.vwr.fm, fileName, asWriter, null);
});

Clazz.newMeth(C$, 'createSceneSet$S$S$I$I', function (sceneFile, type, width, height) {
return "ERROR: Not Available";
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:26 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
