(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'java.io.File','org.jmol.awt.AwtClipboard','javajs.util.OC',['org.jmol.viewer.Viewer','.ACCESS'],'java.io.FileOutputStream','javajs.util.PT','java.util.Hashtable','javajs.util.Lst','org.jmol.util.Logger','javajs.util.SB','org.jmol.viewer.Viewer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OutputManagerAwt", null, 'org.jmol.viewer.OutputManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getLogPath$S', function (fileName) {
return (this.vwr.isApplet ? fileName : (Clazz.new_($I$(1,1).c$$S,[fileName]).getAbsolutePath$()));
});

Clazz.newMeth(C$, 'clipImageOrPasteText$S', function (text) {
var msg;
try {
if (text == null ) {
var image=this.vwr.getScreenImage$();
$I$(2).setClipboard$O(image);
msg="OK image to clipboard: " + (image.getWidth$java_awt_image_ImageObserver(null) * image.getHeight$java_awt_image_ImageObserver(null));
} else {
$I$(2).setClipboard$O(text);
msg="OK text to clipboard: " + text.length$();
}} catch (er) {
if (Clazz.exceptionOf(er,"Error")){
msg=this.vwr.getErrorMessage$();
} else {
throw er;
}
} finally {
if (text == null ) this.vwr.releaseScreenImage$();
}
return msg;
});

Clazz.newMeth(C$, 'getClipboardText$', function () {
return $I$(2).getClipboardText$();
});

Clazz.newMeth(C$, 'openOutputChannel$D$S$Z$Z', function (privateKey, fileName, asWriter, asAppend) {
var isLocal=$I$(3).isLocal$S(fileName);
if (asAppend && isLocal && fileName.indexOf$S("JmolLog_") < 0  ) asAppend=false;
return (fileName != null  && !this.vwr.haveAccess$org_jmol_viewer_Viewer_ACCESS($I$(4).ALL)  || !this.vwr.checkPrivateKey$D(privateKey)  ? null : (Clazz.new_($I$(3,1))).setParams$javajs_api_BytePoster$S$Z$java_io_OutputStream(this.vwr.fm, fileName, asWriter, (isLocal ? Clazz.new_($I$(5,1).c$$S$Z,[fileName, asAppend]) : null)));
});

Clazz.newMeth(C$, 'createSceneSet$S$S$I$I', function (sceneFile, type, width, height) {
var script0=this.vwr.getFileAsString3$S$Z$S(sceneFile, false, null);
if (script0 == null ) return "no such file: " + sceneFile;
sceneFile=$I$(6).rep$S$S$S(sceneFile, ".spt", "");
var fileRoot=sceneFile;
var fileExt=type.toLowerCase$();
var scenes=$I$(6).split$S$S(script0, "pause scene ");
var htScenes=Clazz.new_($I$(7,1));
var list=Clazz.new_($I$(8,1));
var script=p$1.getSceneScript$SA$java_util_Map$javajs_util_Lst.apply(this, [scenes, htScenes, list]);
if ($I$(9).debugging) $I$(9).debug$S(script);
script0=(function(a,f){return f.apply(null,a)})([script0, "pause scene", "delay " + new Float(this.vwr.am.lastFrameDelay).toString() + " # scene" ],$I$(6).rep$S$S$S);
var str=Clazz.array(String, -1, [script0, script, null]);
this.vwr.stm.saveState$S("_scene0");
var nFiles=0;
if (scenes[0] != "") this.vwr.zap$Z$Z$Z(true, true, false);
var iSceneLast=-1;
for (var i=0; i < scenes.length - 1; i++) {
try {
var iScene=list.get$I(i).intValue$();
if (iScene > iSceneLast) this.vwr.showString$S$Z("Creating Scene " + iScene, false);
this.vwr.eval.runScript$S(scenes[i]);
if (iScene <= iSceneLast) continue;
iSceneLast=iScene;
str[2]="all";
var fileName=fileRoot + "_scene_" + iScene + ".all." + fileExt ;
var params=Clazz.new_($I$(7,1));
params.put$O$O("fileName", fileName);
params.put$O$O("type", "PNGJ");
params.put$O$O("scripts", str);
params.put$O$O("width", Integer.valueOf$I(width));
params.put$O$O("height", Integer.valueOf$I(height));
var msg=this.handleOutputToFile$java_util_Map$Z(params, false);
str[0]=null;
str[2]="min";
fileName=fileRoot + "_scene_" + iScene + ".min." + fileExt ;
params.put$O$O("fileName", fileName);
params.put$O$O("width", Integer.valueOf$I(Math.min(width, 200)));
params.put$O$O("height", Integer.valueOf$I(Math.min(height, 200)));
msg += "\n" + this.handleOutputToFile$java_util_Map$Z(params, false);
this.vwr.showString$S$Z(msg, false);
nFiles+=2;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return "script error " + e.toString();
} else {
throw e;
}
}
}
try {
this.vwr.eval.runScript$S(this.vwr.stm.getSavedState$S("_scene0"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return "OK " + nFiles + " files created" ;
});

Clazz.newMeth(C$, 'getSceneScript$SA$java_util_Map$javajs_util_Lst', function (scenes, htScenes, list) {
var iSceneLast=0;
var iScene=0;
var sceneScript=Clazz.new_($I$(10,1)).append$S("###scene.spt###").append$S(" Jmol ").append$S($I$(11).getJmolVersion$()).append$S("\n{\nsceneScripts={");
for (var i=1; i < scenes.length; i++) {
scenes[i - 1]=$I$(6).trim$S$S(scenes[i - 1], "\t\n\r ");
var pt=Clazz.array(Integer.TYPE, [1]);
iScene=$I$(6).parseIntNext$S$IA(scenes[i], pt);
if (iScene == -2147483648) return "bad scene ID: " + iScene;
scenes[i]=scenes[i].substring$I(pt[0]);
list.addLast$O(Integer.valueOf$I(iScene));
var key=iSceneLast + "-" + iScene ;
htScenes.put$O$O(key, scenes[i - 1]);
if (i > 1) sceneScript.append$S(",");
sceneScript.appendC$C("\n").append$S($I$(6).esc$S(key)).append$S(": ").append$S($I$(6).esc$S(scenes[i - 1]));
iSceneLast=iScene;
}
sceneScript.append$S("\n}\n");
if (list.size$() == 0) return "no lines \'pause scene n\'";
sceneScript.append$S("\nthisSceneRoot = \'$SCRIPT_PATH$\'.split(\'_scene_\')[1];\n").append$S("thisSceneID = 0 + (\'$SCRIPT_PATH$\'.split(\'_scene_\')[2]).split(\'.\')[1];\n").append$S("var thisSceneState = \'$SCRIPT_PATH$\'.replace(\'.min.png\',\'.all.png\') + \'state.spt\';\n").append$S("var spath = \'\'+currentSceneID+\'-\'+thisSceneID;\n").append$S("print thisSceneRoot + \' \' + spath;\n").append$S("var sscript = sceneScripts[spath];\n").append$S("var isOK = true;\n").append$S("try{\n").append$S("if (thisSceneRoot != currentSceneRoot){\n").append$S(" isOK = false;\n").append$S("} else if (sscript != \'\') {\n").append$S(" isOK = true;\n").append$S("} else if (thisSceneID <= currentSceneID){\n").append$S(" isOK = false;\n").append$S("} else {\n").append$S(" sscript = \'\';\n").append$S(" for (var i = currentSceneID; i < thisSceneID; i++){\n").append$S("  var key = \'\'+i+\'-\'+(i + 1); var script = sceneScripts[key];\n").append$S("  if (script = \'\') {isOK = false;break;}\n").append$S("  sscript += \';\'+script;\n").append$S(" }\n").append$S("}\n}catch(e){print e;isOK = false}\n").append$S("if (isOK) {" + this.wrapPathForAllFiles$S$S("script inline @sscript", "print e;isOK = false") + "}\n" ).append$S("if (!isOK){script @thisSceneState}\n").append$S("currentSceneRoot = thisSceneRoot; currentSceneID = thisSceneID;\n}\n");
return sceneScript.toString();
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:26 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
