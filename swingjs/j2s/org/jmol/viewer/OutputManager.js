(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'org.jmol.util.Logger','java.util.Hashtable','javajs.util.PT','org.jmol.viewer.Viewer','org.jmol.viewer.JC','org.jmol.viewer.FileManager','org.jmol.api.Interface','Boolean','javajs.util.AU',['org.jmol.viewer.Viewer','.ACCESS'],'javajs.util.OC','javajs.util.SB','org.jmol.i18n.GT','javajs.util.Lst','java.util.Date','javajs.util.ZipTools']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "OutputManager");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.privateKey=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer$D', function (vwr, privateKey) {
this.vwr=vwr;
this.privateKey=privateKey;
return this;
});

Clazz.newMeth(C$, 'writeToOutputChannel$java_util_Map', function (params) {
var type=params.get$O("type");
var fileName=params.get$O("fileName");
var text=params.get$O("text");
var bytes=params.get$O("bytes");
var quality=C$.getInt$java_util_Map$S$I(params, "quality", -2147483648);
var out=params.get$O("outputChannel");
var closeStream=(out == null );
var len=-1;
var ret=null;
try {
if (!this.vwr.checkPrivateKey$D(this.privateKey)) return "ERROR: SECURITY";
if (bytes != null ) {
if (out == null ) out=this.openOutputChannel$D$S$Z$Z(this.privateKey, fileName, false, false);
out.write$BA$I$I(bytes, 0, bytes.length);
} else if (text != null  && !type.equals$O("ZIPDATA")  && !type.equals$O("BINARY") ) {
if (out == null ) out=this.openOutputChannel$D$S$Z$Z(this.privateKey, fileName, true, false);
out.append$S(text);
} else {
var errMsg=p$1.getOrSaveImage$java_util_Map.apply(this, [params]);
if (errMsg != null ) return errMsg;
len=(params.get$O("byteCount")).intValue$();
}} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
$I$(1).errorEx$S$Throwable("IO Exception", exc);
return exc.toString();
} else {
throw exc;
}
} finally {
if (out != null ) {
if (closeStream) ret=out.closeChannel$();
len=out.getByteCount$();
}}
var pt=fileName.indexOf$S("?POST?");
if (pt >= 0) fileName=fileName.substring$I$I(0, pt);
return (len < 0 ? "Creation of " + fileName + " failed: " + (ret == null  ? this.vwr.getErrorMessageUn$() : ret)  : "OK " + type + " " + (len > 0 ? len + " " : "") + fileName + (quality == -2147483648 ? "" : "; quality=" + quality) );
}, p$1);

Clazz.newMeth(C$, 'getOrSaveImage$java_util_Map', function (params) {
var bytes=null;
var errMsg=null;
var type=(params.get$O("type")).toUpperCase$();
var fileName=params.get$O("fileName");
var scripts=params.get$O("scripts");
var objImage=params.get$O("image");
var rgbbuf=params.get$O("rgbbuf");
var out=params.get$O("outputChannel");
var asBytes=(out == null  && fileName == null  );
var closeChannel=(out == null  && fileName != null  );
var releaseImage=(objImage == null );
var image=(type.equals$O("BINARY") || type.equals$O("ZIPDATA")  ? "" : rgbbuf != null  ? rgbbuf : objImage != null  ? objImage : this.vwr.getScreenImageBuffer$());
var isOK=false;
try {
if (image == null ) return errMsg=this.vwr.getErrorMessage$();
if (fileName != null  && fileName.startsWith$S("\u0001") ) {
isOK=true;
var info=Clazz.new_($I$(2));
info.put$TK$TV("_IMAGE_", image);
this.vwr.fm.loadImage$O$S$Z(info, fileName, false);
return errMsg="OK - viewing " + fileName.substring$I(1);
}var isPngj=type.equals$O("PNGJ");
if (!isPngj) {
if (out == null  && (out=this.openOutputChannel$D$S$Z$Z(this.privateKey, fileName, false, false)) == null  ) return errMsg="ERROR: canceled";
fileName=out.getFileName$();
}var comment=null;
var stateData=null;
params.put$TK$TV("date", this.vwr.apiPlatform.getDateFormat$S("8601"));
if (type.startsWith$S("JP")) {
type=$I$(3).rep$S$S$S(type, "E", "");
if (type.equals$O("JPG64")) {
params.put$TK$TV("outputChannelTemp", this.getOutputChannel$S$SA(null, null));
comment="";
} else {
comment=(!asBytes ? this.getWrappedState$S$SA$O$javajs_util_OC(null, null, image, null) : "");
}params.put$TK$TV("jpgAppTag", " #Jmol...\u0000");
} else if (type.equals$O("PDF")) {
comment="";
} else if (type.startsWith$S("PNG")) {
comment="";
if (isPngj) {
var outTemp=this.getOutputChannel$S$SA(null, null);
this.getWrappedState$S$SA$O$javajs_util_OC(fileName, scripts, image, outTemp);
stateData=outTemp.toByteArray$();
if (out == null  && (out=this.openOutputChannel$D$S$Z$Z(this.privateKey, fileName, false, false)) == null  ) return errMsg="ERROR: canceled";
} else if (rgbbuf == null  && !asBytes  && !params.containsKey$O("captureMode") ) {
stateData=(this.getWrappedState$S$SA$O$javajs_util_OC(null, scripts, image, null)).getBytes$();
}if (stateData != null ) {
params.put$TK$TV("pngAppData", stateData);
params.put$TK$TV("pngAppPrefix", "Jmol Type");
}}if (type.equals$O("PNGT") || type.equals$O("GIFT") ) params.put$TK$TV("transparentColor", Integer.valueOf$I(this.vwr.getBackgroundArgb$()));
if (type.length$() == 4) type=type.substring$I$I(0, 3);
if (comment != null ) params.put$TK$TV("comment", comment.length$() == 0 ? $I$(4).getJmolVersion$() : comment);
var errRet=Clazz.array(String, [1]);
isOK=p$1.createTheImage$O$S$javajs_util_OC$java_util_Map$SA.apply(this, [image, type, out, params, errRet]);
if (closeChannel) out.closeChannel$();
if (isOK) {
if (params.containsKey$O("captureMsg") && !params.containsKey$O("captureSilent") ) this.vwr.prompt$S$S$SA$Z(params.get$O("captureMsg"), "OK", null, true);
if (asBytes) bytes=out.toByteArray$();
 else if (params.containsKey$O("captureByteCount")) errMsg="OK: " + params.get$O("captureByteCount").toString() + " bytes" ;
} else {
errMsg=errRet[0];
}} finally {
if (releaseImage) this.vwr.releaseScreenImage$();
if (bytes != null  || out != null  ) params.put$TK$TV("byteCount", Integer.valueOf$I(bytes != null  ? bytes.length : isOK ? out.getByteCount$() : -1));
if (objImage != null ) {
return fileName;
}}
return (errMsg == null  ? bytes : errMsg);
}, p$1);

Clazz.newMeth(C$, 'getWrappedState$S$SA$O$javajs_util_OC', function (pngjName, scripts, objImage, pgjOut) {
var width=this.vwr.apiPlatform.getImageWidth$O(objImage);
var height=this.vwr.apiPlatform.getImageHeight$O(objImage);
if (width > 0 && !this.vwr.g.imageState  && pgjOut == null   || !this.vwr.g.preserveState ) return "";
var s=this.vwr.getStateInfo3$S$I$I(null, width, height);
if (pgjOut != null ) {
return p$1.createZipSet$S$SA$Z$javajs_util_OC$S.apply(this, [s, scripts, true, pgjOut, pngjName]);
}try {
s=$I$(5).embedScript$S($I$(6).setScriptFileReferences$S$S$S$S(s, ".", null, null));
} catch (e) {
$I$(1).error$S("state could not be saved: " + e.toString());
s="Jmol " + $I$(4).getJmolVersion$();
}
return s;
});

Clazz.newMeth(C$, 'createTheImage$O$S$javajs_util_OC$java_util_Map$SA', function (objImage, type, out, params, errRet) {
type=type.substring$I$I(0, 1) + type.substring$I(1).toLowerCase$();
var isZipData=type.equals$O("Zipdata");
if (isZipData || type.equals$O("Binary") ) {
var v=params.get$O("imageData");
if (v.size$() >= 2 && v.get$I(0).equals$O("_IMAGE_") ) {
if (isZipData) {
errRet[0]=p$1.writeZipFile$javajs_util_OC$javajs_util_Lst$S$S.apply(this, [out, v, "OK JMOL", null]);
return true;
}objImage=null;
v.removeItemAt$I(0);
v.removeItemAt$I(0);
params.put$TK$TV("pngImgData", v.removeItemAt$I(0));
var oz=this.getOutputChannel$S$SA(null, null);
errRet[0]=p$1.writeZipFile$javajs_util_OC$javajs_util_Lst$S$S.apply(this, [oz, v, "OK JMOL", null]);
params.put$TK$TV("type", "PNGJ");
type="Png";
params.put$TK$TV("pngAppPrefix", "Jmol Type");
params.put$TK$TV("pngAppData", oz.toByteArray$());
} else if (v.size$() == 1) {
var b=v.removeItemAt$I(0);
out.write$BA$I$I(b, 0, b.length);
return true;
} else {
errRet[0]=p$1.writeZipFile$javajs_util_OC$javajs_util_Lst$S$S.apply(this, [out, v, "OK JMOL", null]);
return true;
}}var ie=$I$(7).getInterface$S$org_jmol_viewer_Viewer$S("javajs.img." + type + "Encoder" , this.vwr, "file");
if (ie == null ) {
errRet[0]="Image encoder type " + type + " not available" ;
return false;
}var doClose=true;
try {
if (type.equals$O("Gif") && this.vwr.getBoolean$I(603979962) ) params.put$TK$TV("reducedColors", $I$(8).TRUE);
var w=objImage == null  ? -1 : $I$(9).isAI$O(objImage) ? (params.get$O("width")).intValue$() : this.vwr.apiPlatform.getImageWidth$O(objImage);
var h=objImage == null  ? -1 : $I$(9).isAI$O(objImage) ? (params.get$O("height")).intValue$() : this.vwr.apiPlatform.getImageHeight$O(objImage);
params.put$TK$TV("imageWidth", Integer.valueOf$I(w));
params.put$TK$TV("imageHeight", Integer.valueOf$I(h));
var pixels=p$1.encodeImage$I$I$O.apply(this, [w, h, objImage]);
if (pixels != null ) params.put$TK$TV("imagePixels", pixels);
params.put$TK$TV("logging", $I$(8).valueOf$Z($I$(1).debugging));
doClose=ie.createImage$(type, out, params);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
errRet[0]=e.toString();
out.cancel$();
doClose=true;
} else {
throw e;
}
} finally {
if (doClose) out.closeChannel$();
}
return (errRet[0] == null );
}, p$1);

Clazz.newMeth(C$, 'encodeImage$I$I$O', function (width, height, objImage) {
if (width < 0) return null;
var pixels;
if ($I$(9).isAI$O(objImage)) {
pixels=objImage;
} else {
{
pixels = null;
}
pixels=this.vwr.apiPlatform.grabPixels$O$I$I$IA$I$I(objImage, width, height, pixels, 0, height);
}return pixels;
}, p$1);

Clazz.newMeth(C$, 'outputToFile$java_util_Map', function (params) {
return this.handleOutputToFile$java_util_Map$Z(params, true);
});

Clazz.newMeth(C$, 'getOutputChannel$S$SA', function (fileName, fullPath) {
if (!this.vwr.haveAccess$org_jmol_viewer_Viewer_ACCESS($I$(10).ALL)) return null;
var isCache=(fileName != null  && fileName.startsWith$S("cache://") );
if (fileName != null  && !isCache ) {
fileName=p$1.getOutputFileNameFromDialog$S$I$java_util_Map.apply(this, [fileName, -2147483648, null]);
if (fileName == null ) return null;
}if (fullPath != null ) fullPath[0]=fileName;
var localName=($I$(11).isLocal$S(fileName) || isCache  ? fileName : null);
try {
return this.openOutputChannel$D$S$Z$Z(this.privateKey, localName, false, false);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(1).info$S(e.toString());
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'processWriteOrCapture$java_util_Map', function (params) {
var fileName=params.get$O("fileName");
if (fileName == null ) return this.vwr.clipImageOrPasteText$S(params.get$O("text"));
var bsFrames=params.get$O("bsFrames");
var nVibes=C$.getInt$java_util_Map$S$I(params, "nVibes", 0);
return (bsFrames != null  || nVibes != 0  ? p$1.processMultiFrameOutput$S$javajs_util_BS$I$java_util_Map.apply(this, [fileName, bsFrames, nVibes, params]) : this.handleOutputToFile$java_util_Map$Z(params, true));
});

Clazz.newMeth(C$, 'getInt$java_util_Map$S$I', function (params, key, def) {
var p=params.get$O(key);
return (p == null  ? def : p.intValue$());
}, 1);

Clazz.newMeth(C$, 'processMultiFrameOutput$S$javajs_util_BS$I$java_util_Map', function (fileName, bsFrames, nVibes, params) {
var info="";
var n=0;
var quality=C$.getInt$java_util_Map$S$I(params, "quality", -1);
fileName=p$1.setFullPath$java_util_Map$S.apply(this, [params, p$1.getOutputFileNameFromDialog$S$I$java_util_Map.apply(this, [fileName, quality, null])]);
if (fileName == null ) return null;
var rootExt=Clazz.array(String, [2]);
C$.getRootExt$S$SA$I(fileName, rootExt, 0);
var sb=Clazz.new_($I$(12));
if (bsFrames == null ) {
this.vwr.tm.vibrationOn=true;
sb=Clazz.new_($I$(12));
for (var i=0; i < nVibes; i++) {
for (var j=0; j < 20; j++) {
this.vwr.tm.setVibrationT$F(j / 20.0 + 0.2501);
if (!p$1.writeFrame$I$SA$java_util_Map$javajs_util_SB.apply(this, [++n, rootExt, params, sb])) return "ERROR WRITING FILE SET: \n" + info;
}
}
this.vwr.tm.setVibrationPeriod$F(0);
} else {
for (var i=bsFrames.nextSetBit$I(0); i >= 0; i=bsFrames.nextSetBit$I(i + 1)) {
this.vwr.setCurrentModelIndex$I(i);
if (!p$1.writeFrame$I$SA$java_util_Map$javajs_util_SB.apply(this, [++n, rootExt, params, sb])) return "ERROR WRITING FILE SET: \n" + info;
}
}if (info.length$() == 0) info="OK\n";
return info + "\n" + n + " files created" ;
}, p$1);

Clazz.newMeth(C$, 'getRootExt$S$SA$I', function (fileName, rootExt, n) {
if (fileName == null ) {
fileName="0000" + n;
return rootExt[0] + fileName.substring$I(fileName.length$() - 4) + rootExt[1] ;
}var ptDot=fileName.lastIndexOf$S(".");
if (ptDot < 0) ptDot=fileName.length$();
var froot=fileName.substring$I$I(0, ptDot);
if (froot.endsWith$S("0")) froot=$I$(3).trim$S$S(froot, "0");
rootExt[0]=froot;
rootExt[1]=fileName.substring$I(ptDot);
return rootExt;
}, 1);

Clazz.newMeth(C$, 'setFullPath$java_util_Map$S', function (params, fileName) {
var fullPath=params.get$O("fullPath");
if (fullPath != null ) fullPath[0]=fileName;
if (fileName == null ) return null;
params.put$TK$TV("fileName", fileName);
return fileName;
}, p$1);

Clazz.newMeth(C$, 'getOutputFromExport$java_util_Map', function (params) {
var width=C$.getInt$java_util_Map$S$I(params, "width", 0);
var height=C$.getInt$java_util_Map$S$I(params, "height", 0);
var fileName=params.get$O("fileName");
if (fileName != null ) {
fileName=p$1.setFullPath$java_util_Map$S.apply(this, [params, p$1.getOutputFileNameFromDialog$S$I$java_util_Map.apply(this, [fileName, -2147483648, null])]);
if (fileName == null ) return null;
}this.vwr.mustRender=true;
var saveWidth=this.vwr.dimScreen.width;
var saveHeight=this.vwr.dimScreen.height;
this.vwr.resizeImage$I$I$Z$Z$Z(width, height, true, true, false);
this.vwr.setModelVisibility$();
var data=this.vwr.rm.renderExport$org_jmol_util_GData$org_jmol_modelset_ModelSet$java_util_Map(this.vwr.gdata, this.vwr.ms, params);
this.vwr.resizeImage$I$I$Z$Z$Z(saveWidth, saveHeight, true, true, true);
return data;
});

Clazz.newMeth(C$, 'getImageAsBytes$S$I$I$I$SA', function (type, width, height, quality, errMsg) {
var saveWidth=this.vwr.dimScreen.width;
var saveHeight=this.vwr.dimScreen.height;
this.vwr.mustRender=true;
this.vwr.resizeImage$I$I$Z$Z$Z(width, height, true, false, false);
this.vwr.setModelVisibility$();
this.vwr.creatingImage=true;
var bytes=null;
try {
var params=Clazz.new_($I$(2));
params.put$TK$TV("type", type);
if (quality > 0) params.put$TK$TV("quality", Integer.valueOf$I(quality));
var bytesOrError=p$1.getOrSaveImage$java_util_Map.apply(this, [params]);
if (Clazz.instanceOf(bytesOrError, "java.lang.String")) errMsg[0]=bytesOrError;
 else bytes=bytesOrError;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
errMsg[0]=e.toString();
this.vwr.setErrorMessage$S$S("Error creating image: " + e, null);
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var er = e$$;
{
this.vwr.handleError$Error$Z(er, false);
this.vwr.setErrorMessage$S$S("Error creating image: " + er, null);
errMsg[0]=this.vwr.getErrorMessage$();
}
} else {
throw e$$;
}
}
this.vwr.creatingImage=false;
this.vwr.resizeImage$I$I$Z$Z$Z(saveWidth, saveHeight, true, false, true);
return bytes;
});

Clazz.newMeth(C$, 'writeFileData$S$S$I$OA', function (fileName, type, modelIndex, plotParameters) {
var fullPath=Clazz.array(String, [1]);
var out=this.getOutputChannel$S$SA(fileName, fullPath);
if (out == null ) return "";
fileName=fullPath[0];
var pathName=(type.equals$O("FILE") ? this.vwr.fm.getFullPathName$Z(false) : null);
var getCurrentFile=(pathName != null  && (pathName.equals$O("string") || pathName.equals$O("String[]") || pathName.equals$O("JSNode")  ) );
var asBytes=(pathName != null  && !getCurrentFile );
if (asBytes) {
pathName=this.vwr.getModelSetPathName$();
if (pathName == null ) return null;
}out.setType$S(type);
var msg=(type.startsWith$S("PDB") ? this.vwr.getPdbAtomData$javajs_util_BS$javajs_util_OC$Z$Z(null, out, false, false) : type.startsWith$S("PLOT") ? this.vwr.getPdbData$I$S$javajs_util_BS$OA$javajs_util_OC$Z(modelIndex, type.substring$I(5), null, plotParameters, out, true) : getCurrentFile ? out.append$S(this.vwr.getCurrentFileAsString$S("write")).toString() : this.vwr.fm.getFileAsBytes$S$javajs_util_OC(pathName, out));
out.closeChannel$();
if (msg != null ) msg="OK " + msg + " " + fileName ;
return msg;
});

Clazz.newMeth(C$, 'writeFrame$I$SA$java_util_Map$javajs_util_SB', function (n, rootExt, params, sb) {
var fileName=C$.getRootExt$S$SA$I(null, rootExt, n);
fileName=p$1.setFullPath$java_util_Map$S.apply(this, [params, fileName]);
if (fileName == null ) return false;
var msg=this.handleOutputToFile$java_util_Map$Z(params, false);
this.vwr.scriptEcho$S(msg);
sb.append$S(msg).append$S("\n");
return msg.startsWith$S("OK");
}, p$1);

Clazz.newMeth(C$, 'getOutputFileNameFromDialog$S$I$java_util_Map', function (fileName, quality, params) {
if (fileName == null  || this.vwr.isKiosk ) return null;
var useDialog=fileName.startsWith$S("?");
if (useDialog) fileName=fileName.substring$I(1);
useDialog|=this.vwr.isApplet && (fileName.indexOf$S("http:") < 0) ;
fileName=$I$(6).getLocalPathForWritingFile$org_jmol_viewer_Viewer$S(this.vwr, fileName);
if (useDialog) fileName=this.vwr.dialogAsk$S$S$java_util_Map(quality == -2147483648 ? "Save" : "Save Image", fileName, params);
return fileName;
}, p$1);

Clazz.newMeth(C$, 'handleOutputToFile$java_util_Map$Z', function (params, doCheck) {
var fileName=params.get$O("fileName");
var out=params.get$O("outputChannel");
if (fileName == null  && out == null  ) return null;
var sret=null;
var type=params.get$O("type");
var text=params.get$O("text");
var width=C$.getInt$java_util_Map$S$I(params, "width", 0);
var height=C$.getInt$java_util_Map$S$I(params, "height", 0);
var saveWidth=0;
var saveHeight=0;
var quality=C$.getInt$java_util_Map$S$I(params, "quality", -2147483648);
var captureMode=params.get$O("captureMode");
var localName=null;
if (captureMode != null  && !this.vwr.allowCapture$() ) return "ERROR: Cannot capture on this platform.";
var mustRender=(quality != -2147483648);
if (captureMode != null ) {
doCheck=false;
mustRender=false;
}if (out == null ) {
if (!fileName.startsWith$S("\u0001")) {
if (doCheck) fileName=p$1.getOutputFileNameFromDialog$S$I$java_util_Map.apply(this, [fileName, quality, params]);
fileName=p$1.setFullPath$java_util_Map$S.apply(this, [params, fileName]);
}if (fileName == null ) return null;
params.put$TK$TV("fileName", fileName);
if ($I$(11).isLocal$S(fileName)) localName=fileName;
saveWidth=this.vwr.dimScreen.width;
saveHeight=this.vwr.dimScreen.height;
this.vwr.creatingImage=true;
if (mustRender) {
this.vwr.mustRender=true;
this.vwr.resizeImage$I$I$Z$Z$Z(width, height, true, false, false);
this.vwr.setModelVisibility$();
}}try {
if (type.equals$O("JMOL")) type="ZIPALL";
if (type.equals$O("ZIP") || type.equals$O("ZIPALL") ) {
var scripts=params.get$O("scripts");
if (scripts != null  && type.equals$O("ZIP") ) type="ZIPALL";
sret=p$1.createZipSet$S$SA$Z$javajs_util_OC$S.apply(this, [text, scripts, type.equals$O("ZIPALL"), out == null  ? this.getOutputChannel$S$SA(fileName, null) : out, null]);
} else if (type.equals$O("SCENE")) {
sret=this.createSceneSet$S$S$I$I(fileName, text, width, height);
} else {
var bytes=params.get$O("bytes");
sret=this.vwr.sm.createImage$S$S$S$BA$I(fileName, type, text, bytes, quality);
if (sret == null ) {
var createImage=true;
var captureMsg=null;
if (captureMode != null ) {
out=null;
var cparams=this.vwr.captureParams;
var imode="ad on of en ca mo ".indexOf$S(captureMode.substring$I$I(0, 2));
var rootExt;
if (imode == 15) {
if (cparams != null  && cparams.containsKey$O("outputChannel") ) (cparams.get$O("outputChannel")).closeChannel$();
var streaming=params.containsKey$O("streaming");
if (streaming && (out=this.getOutputChannel$S$SA(localName, null)) == null  ) {
sret=captureMsg="ERROR: capture canceled";
this.vwr.captureParams=null;
} else {
this.vwr.captureParams=params;
if (params.containsKey$O("captureRootExt")) {
imode=0;
} else {
if (out != null ) localName=out.getFileName$();
params.put$TK$TV("captureFileName", localName);
if (streaming) {
captureMsg=type + "_STREAM_OPEN " + localName ;
params.put$TK$TV("captureMode", "movie");
} else {
rootExt=Clazz.array(String, [2]);
params.put$TK$TV("captureRootExt", C$.getRootExt$S$SA$I(localName, rootExt, 0));
localName=C$.getRootExt$S$SA$I(null, rootExt, 1);
imode=-1;
cparams=params;
createImage=false;
}}if (!params.containsKey$O("captureCount")) params.put$TK$TV("captureCount", Integer.valueOf$I(0));
}}if (imode >= 0 && imode != 15 ) {
if (cparams == null ) {
sret=captureMsg="ERROR: capture not active";
} else {
params=cparams;
switch (imode) {
default:
sret=captureMsg="ERROR: CAPTURE MODE=" + captureMode + "?" ;
break;
case 0:
if ($I$(8).FALSE === params.get$O("captureEnabled") ) {
sret=captureMsg="capturing OFF; use CAPTURE ON/END/CANCEL to continue";
} else {
var count=C$.getInt$java_util_Map$S$I(params, "captureCount", 0);
params.put$TK$TV("captureCount", Integer.valueOf$I(++count));
if ((rootExt=params.get$O("captureRootExt")) != null ) {
localName=C$.getRootExt$S$SA$I(null, rootExt, count);
captureMsg=null;
createImage=true;
} else {
captureMsg=type + "_STREAM_ADD " + count ;
}}break;
case 3:
case 6:
params=cparams;
params.put$TK$TV("captureEnabled", (captureMode.equals$O("on") ? $I$(8).TRUE : $I$(8).FALSE));
sret=type + "_STREAM_" + (captureMode.equals$O("on") ? "ON" : "OFF") ;
params.put$TK$TV("captureMode", "add");
break;
case 9:
case 12:
params=cparams;
params.put$TK$TV("captureMode", captureMode);
fileName=params.get$O("captureFileName");
captureMsg=type + "_STREAM_" + (captureMode.equals$O("end") ? "CLOSE " : "CANCEL ") + fileName ;
this.vwr.captureParams=null;
params.put$TK$TV("captureMsg", $I$(13).$$S("Capture") + ": " + (captureMode.equals$O("cancel") ? $I$(13).$$S("canceled") : $I$(13).o$S$O($I$(13).$$S("{0} saved"), fileName)) );
if (params.containsKey$O("captureRootExt")) createImage=false;
break;
}
}}if (createImage && out != null  ) params.put$TK$TV("outputChannel", out);
}if (createImage) {
if (localName != null ) params.put$TK$TV("fileName", localName);
if (sret == null ) sret=p$1.writeToOutputChannel$java_util_Map.apply(this, [params]);
this.vwr.sm.createImage$S$S$S$BA$I(sret, type, null, null, quality);
if (captureMode != null ) {
if (captureMsg == null ) captureMsg=sret;
 else captureMsg += " (" + params.get$O(params.containsKey$O("captureByteCount") ? "captureByteCount" : "byteCount") + " bytes)" ;
}}if (captureMsg != null ) {
this.vwr.showString$S$Z(captureMsg, false);
}}}} catch (er) {
er.printStackTrace$();
$I$(1).error$S(this.vwr.setErrorMessage$S$S(sret="ERROR creating image??: " + er, null));
} finally {
this.vwr.creatingImage=false;
if (quality != -2147483648 && saveWidth > 0 ) this.vwr.resizeImage$I$I$Z$Z$Z(saveWidth, saveHeight, true, false, true);
}
return sret;
});

Clazz.newMeth(C$, 'setLogFile$S', function (value) {
var path=null;

if (typeof value == "function") path = value;
if (this.vwr.logFilePath == null  || value.indexOf$S("\\") >= 0 ) {
value=null;
} else if (value.startsWith$S("http://") || value.startsWith$S("https://") ) {
path=value;
} else if (value.indexOf$S("/") >= 0) {
value=null;
} else if (value.length$() > 0) {
if (!value.startsWith$S("JmolLog_")) value="JmolLog_" + value;
path=this.getLogPath$S(this.vwr.logFilePath + value);
}if (path == null ) value=null;
 else $I$(1).info$S($I$(13).o$S$O($I$(13).$$S("Setting log file to {0}"), path));
if (value == null  || !this.vwr.haveAccess$org_jmol_viewer_Viewer_ACCESS($I$(10).ALL) ) {
$I$(1).info$S($I$(13).$$S("Cannot set log file path."));
value=null;
} else {
this.vwr.logFileName=path;
this.vwr.g.setO$S$O("_logFile", this.vwr.isApplet ? value : path);
}return value;
});

Clazz.newMeth(C$, 'logToFile$S', function (data) {
try {
var doClear=(data.equals$O("$CLEAR$"));
if (data.indexOf$S("$NOW$") >= 0) data=$I$(3).rep$S$S$S(data, "$NOW$", this.vwr.apiPlatform.getDateFormat$S(null));
if (this.vwr.logFileName == null ) {
$I$(1).info$S(data);
return;
}var out=(this.vwr.haveAccess$org_jmol_viewer_Viewer_ACCESS($I$(10).ALL) ? this.openOutputChannel$D$S$Z$Z(this.privateKey, this.vwr.logFileName, true, !doClear) : null);
if (!doClear) {
var ptEnd=data.indexOf$I("\u0000");
if (ptEnd >= 0) data=data.substring$I$I(0, ptEnd);
out.append$S(data);
if (ptEnd < 0) out.append$S("\n");
}var s=out.closeChannel$();
$I$(1).info$S(s);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if ($I$(1).debugging) $I$(1).debug$S("cannot log " + data);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'createZipSet$S$SA$Z$javajs_util_OC$S', function (script, scripts, includeRemoteFiles, out, pngjName) {
var v=Clazz.new_($I$(14));
var fm=this.vwr.fm;
var fileNames=Clazz.new_($I$(14));
var crcMap=Clazz.new_($I$(2));
var haveSceneScript=(scripts != null  && scripts.length == 3  && scripts[1].startsWith$S("###scene.spt###") );
var sceneScriptOnly=(haveSceneScript && scripts[2].equals$O("min") );
if (!sceneScriptOnly) {
$I$(6).getFileReferences$S$javajs_util_Lst(script, fileNames);
if (haveSceneScript) $I$(6).getFileReferences$S$javajs_util_Lst(scripts[1], fileNames);
}var haveScripts=(!haveSceneScript && scripts != null   && scripts.length > 0 );
if (haveScripts) {
script=this.wrapPathForAllFiles$S$S("script " + $I$(3).esc$S(scripts[0]), "");
for (var i=0; i < scripts.length; i++) fileNames.addLast$TV(scripts[i]);

}var nFiles=fileNames.size$();
var newFileNames=Clazz.new_($I$(14));
for (var iFile=0; iFile < nFiles; iFile++) {
var name=fileNames.get$I(iFile);
var isLocal=!$I$(4).isJS && $I$(11).isLocal$S(name) ;
var newName=name;
if (isLocal || includeRemoteFiles ) {
var ptSlash=name.lastIndexOf$S("/");
newName=(name.indexOf$S("?") > 0 && name.indexOf$S("|") < 0  ? $I$(3).replaceAllCharacters$S$S$S(name, "/:?\"\'=&", "_") : $I$(6).stripPath$S(name));
newName=$I$(3).replaceAllCharacters$S$S$S(newName, "[]", "_");
newName=$I$(3).rep$S$S$S(newName, "#_DOCACHE_", "");
var isSparDir=(fm.spardirCache != null  && fm.spardirCache.containsKey$O(name) );
if (isLocal && name.indexOf$S("|") < 0  && !isSparDir ) {
v.addLast$TV(name);
v.addLast$TV(newName);
v.addLast$TV(null);
} else {
var ret=(isSparDir ? fm.spardirCache.get$O(name) : fm.getFileAsBytes$S$javajs_util_OC(name, null));
if (!$I$(9).isAB$O(ret)) return "ERROR: " + ret;
newName=p$1.addPngFileBytes$S$BA$I$java_util_Hashtable$Z$S$I$javajs_util_Lst.apply(this, [name, ret, iFile, crcMap, isSparDir, newName, ptSlash, v]);
}name="$SCRIPT_PATH$" + newName;
}crcMap.put$TK$TV(newName, newName);
newFileNames.addLast$TV(name);
}
if (!sceneScriptOnly) {
script=$I$(3).replaceQuotedStrings$S$javajs_util_Lst$javajs_util_Lst(script, fileNames, newFileNames);
v.addLast$TV("state.spt");
v.addLast$TV(null);
v.addLast$TV(script.getBytes$());
}if (haveSceneScript) {
if (scripts[0] != null ) {
v.addLast$TV("animate.spt");
v.addLast$TV(null);
v.addLast$TV(scripts[0].getBytes$());
}v.addLast$TV("scene.spt");
v.addLast$TV(null);
script=$I$(3).replaceQuotedStrings$S$javajs_util_Lst$javajs_util_Lst(scripts[1], fileNames, newFileNames);
v.addLast$TV(script.getBytes$());
}var sname=(haveSceneScript ? "scene.spt" : "state.spt");
v.addLast$TV("JmolManifest.txt");
v.addLast$TV(null);
var sinfo="# Jmol Manifest Zip Format 1.1\n# Created " + (Clazz.new_($I$(15))) + "\n" + "# JmolVersion " + $I$(4).getJmolVersion$() + "\n" + sname ;
v.addLast$TV(sinfo.getBytes$());
v.addLast$TV("Jmol_version_" + $I$(4).getJmolVersion$().replace$C$C(" ", "_").replace$C$C(":", "."));
v.addLast$TV(null);
v.addLast$TV(Clazz.array(Byte.TYPE, [0]));
if (out.getFileName$() != null ) {
var bytes=this.vwr.getImageAsBytes$S$I$I$I$SA("PNG", 0, 0, -1, null);
if (bytes != null ) {
v.addLast$TV("preview.png");
v.addLast$TV(null);
v.addLast$TV(bytes);
}}return p$1.writeZipFile$javajs_util_OC$javajs_util_Lst$S$S.apply(this, [out, v, "OK JMOL", pngjName]);
}, p$1);

Clazz.newMeth(C$, 'addPngFileBytes$S$BA$I$java_util_Hashtable$Z$S$I$javajs_util_Lst', function (name, ret, iFile, crcMap, isSparDir, newName, ptSlash, v) {
var crcValue=Integer.valueOf$I($I$(16).getCrcValue$BA(ret));
if (crcMap.containsKey$O(crcValue)) {
newName=crcMap.get$O(crcValue);
} else {
if (isSparDir) newName=newName.replace$C$C(".", "_");
if (crcMap.containsKey$O(newName)) {
var pt=newName.lastIndexOf$S(".");
if (pt > ptSlash) newName=newName.substring$I$I(0, pt) + "[" + iFile + "]" + newName.substring$I(pt) ;
 else newName=newName + "[" + iFile + "]" ;
}v.addLast$TV(name);
v.addLast$TV(newName);
v.addLast$TV(ret);
crcMap.put$TK$TV(crcValue, newName);
}return newName;
}, p$1);

Clazz.newMeth(C$, 'writeZipFile$javajs_util_OC$javajs_util_Lst$S$S', function (out, fileNamesAndByteArrays, msg, pngjName) {
var buf=Clazz.array(Byte.TYPE, [1024]);
var nBytesOut=0;
var nBytes=0;
var outFileName=out.getFileName$();
if (pngjName != null  && pngjName.startsWith$S("//") ) pngjName="file:" + pngjName.substring$I(1);
$I$(1).info$S("creating zip file " + (outFileName == null  ? "" : outFileName) + "..." );
var fileList="";
try {
var bos;
{
bos = out;
}
var fm=this.vwr.fm;
var zos=$I$(16).getZipOutputStream$O(bos);
for (var i=0; i < fileNamesAndByteArrays.size$(); i+=3) {
var fname=fileNamesAndByteArrays.get$I(i);
var bytes=null;
var data=fm.cacheGet$S$Z(fname, false);
if (Clazz.instanceOf(data, "java.util.Map")) continue;
if (fname.indexOf$S("file:/") == 0) {
fname=fname.substring$I(5);
if (fname.length$() > 2 && fname.charAt$I(2) == ":" ) fname=fname.substring$I(1);
} else if (fname.indexOf$S("cache://") == 0) {
fname=fname.substring$I(8);
}var fnameShort=fileNamesAndByteArrays.get$I(i + 1);
if (fnameShort == null ) fnameShort=fname;
if (data != null ) bytes=($I$(9).isAB$O(data) ? data : (data).getBytes$());
if (bytes == null ) bytes=fileNamesAndByteArrays.get$I(i + 2);
var key=";" + fnameShort + ";" ;
if (fileList.indexOf$S(key) >= 0) {
$I$(1).info$S("duplicate entry");
continue;
}fileList += key;
$I$(16).addZipEntry$O$S(zos, fnameShort);
var nOut=0;
if (bytes == null ) {
var $in=this.vwr.getBufferedInputStream$S(fname);
var len;
while ((len=$in.read$BA$I$I(buf, 0, 1024)) > 0){
zos.write$BA$I$I(buf, 0, len);
nOut+=len;
}
$in.close$();
} else {
zos.write$BA$I$I(bytes, 0, bytes.length);
if (pngjName != null ) this.vwr.fm.recachePngjBytes$S$BA(pngjName + "|" + fnameShort , bytes);
nOut+=bytes.length;
}nBytesOut+=nOut;
$I$(16).closeZipEntry$O(zos);
$I$(1).info$S("...added " + fname + " (" + nOut + " bytes)" );
}
zos.flush$();
zos.close$();
$I$(1).info$S(nBytesOut + " bytes prior to compression");
var ret=out.closeChannel$();
if (ret != null ) {
if (ret.indexOf$S("Exception") >= 0) return ret;
msg += " " + ret;
}nBytes=out.getByteCount$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(1).info$S(e.toString());
return e.toString();
} else {
throw e;
}
}
var fileName=out.getFileName$();
return (fileName == null  ? null : msg + " " + nBytes + " " + fileName );
}, p$1);

Clazz.newMeth(C$, 'wrapPathForAllFiles$S$S', function (cmd, strCatch) {
var vname="v__" + ("" + new Double(Math.random()).toString()).substring$I(3);
return "# Jmol script\n{\n\tVar " + vname + " = pathForAllFiles\n\tpathForAllFiles=\"$SCRIPT_PATH$\"\n\ttry{\n\t\t" + cmd + "\n\t}catch(e){" + strCatch + "}\n\tpathForAllFiles = " + vname + "\n}\n" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
