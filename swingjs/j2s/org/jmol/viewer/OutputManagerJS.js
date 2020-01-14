(function(){var P$=Clazz.newPackage("org.jmol.viewer"),I$=[[0,'javajs.util.OC']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "OutputManagerJS", null, 'org.jmol.viewer.OutputManager');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
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
return (Clazz.new_($I$(1))).setParams$javajs_api_BytePoster$S$Z$java_io_OutputStream(this.vwr.fm, fileName, asWriter, null);
});

Clazz.newMeth(C$, 'createSceneSet$S$S$I$I', function (sceneFile, type, width, height) {
return "ERROR: Not Available";
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
