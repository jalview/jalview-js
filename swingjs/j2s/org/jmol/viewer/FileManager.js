(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.api.Interface','java.net.URL','org.jmol.viewer.Viewer','org.jmol.util.Logger','org.jmol.io.FileReader','javajs.util.Rdr','javajs.util.SB','javajs.util.DataReader','javajs.util.AU','javajs.util.PT','javajs.util.Base64','javajs.util.OC','java.net.URLEncoder','org.jmol.viewer.JC','javajs.util.ZipTools','javajs.util.CompoundDocument',['org.jmol.viewer.Viewer','.ACCESS'],'java.io.BufferedInputStream','javajs.util.LimitedLineReader','javajs.util.Lst']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileManager", null, null, 'javajs.api.BytePoster');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pathForAllFiles="";
this.nameAsGiven="zapped";
this.lastNameAsGiven="zapped";
this.appletDocumentBaseURL=null;
this.cache=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['S',['pathForAllFiles','nameAsGiven','fullPathName','lastFullPathName','lastNameAsGiven','fileName','appletProxy'],'O',['vwr','org.jmol.viewer.Viewer','spartanDoc','org.jmol.adapter.readers.spartan.SpartanUtil','jzu','org.jmol.io.JmolUtil','appletDocumentBaseURL','java.net.URL','cache','java.util.Map','+pngjCache','+spardirCache']]
,['S',['SIMULATION_PROTOCOL'],'O',['scriptFilePrefixes','String[]']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer', function (vwr) {
;C$.$init$.apply(this);
this.vwr=vwr;
this.clear$();
}, 1);

Clazz.newMeth(C$, 'spartanUtil$', function () {
return (this.spartanDoc == null  ? this.spartanDoc=($I$(2,"getInterface$S$org_jmol_viewer_Viewer$S",["org.jmol.adapter.readers.spartan.SpartanUtil", this.vwr, "fm getSpartanUtil()"])).set$org_jmol_viewer_FileManager(this) : this.spartanDoc);
});

Clazz.newMeth(C$, 'getJzu$', function () {
return (this.jzu == null  ? this.jzu=$I$(2).getOption$S$org_jmol_viewer_Viewer$S("io.JmolUtil", this.vwr, "file") : this.jzu);
});

Clazz.newMeth(C$, 'clear$', function () {
this.setFileInfo$SA(Clazz.array(String, -1, [this.vwr.getZapName$()]));
this.spardirCache=null;
});

Clazz.newMeth(C$, 'setLoadState$java_util_Map', function (htParams) {
if (this.vwr.getPreserveState$()) {
htParams.put$O$O("loadState", this.vwr.g.getLoadState$java_util_Map(htParams));
}}, p$1);

Clazz.newMeth(C$, 'getPathForAllFiles$', function () {
return this.pathForAllFiles;
});

Clazz.newMeth(C$, 'setPathForAllFiles$S', function (value) {
if (value.length$() > 0 && !value.endsWith$S("/")  && !value.endsWith$S("|") ) value += "/";
return this.pathForAllFiles=value;
});

Clazz.newMeth(C$, 'setFileInfo$SA', function (fileInfo) {
if (fileInfo == null ) {
this.fullPathName=this.lastFullPathName;
this.nameAsGiven=this.lastNameAsGiven;
return;
}this.fullPathName=fileInfo[0];
this.fileName=fileInfo[Math.min(1, fileInfo.length - 1)];
this.nameAsGiven=fileInfo[Math.min(2, fileInfo.length - 1)];
if (!this.nameAsGiven.equals$O("zapped")) {
this.lastNameAsGiven=this.nameAsGiven;
this.lastFullPathName=this.fullPathName;
}});

Clazz.newMeth(C$, 'getFileInfo$', function () {
return Clazz.array(String, -1, [this.fullPathName, this.fileName, this.nameAsGiven]);
});

Clazz.newMeth(C$, 'getFullPathName$Z', function (orPrevious) {
var f=(this.fullPathName != null  ? this.fullPathName : this.nameAsGiven);
return (!orPrevious || !f.equals$O("zapped")  ? f : this.lastFullPathName != null  ? this.lastFullPathName : this.lastNameAsGiven);
});

Clazz.newMeth(C$, 'getFileName$', function () {
return this.fileName != null  ? this.fileName : this.nameAsGiven;
});

Clazz.newMeth(C$, 'getAppletDocumentBase$', function () {
return (this.appletDocumentBaseURL == null  ? "" : this.appletDocumentBaseURL.toString());
});

Clazz.newMeth(C$, 'setAppletContext$S', function (documentBase) {
try {
System.out.println$S("setting document base to \"" + documentBase + "\"" );
this.appletDocumentBaseURL=(documentBase.length$() == 0 ? null : Clazz.new_($I$(3,1).c$$java_net_URL$S$java_net_URLStreamHandler,[null, documentBase, null]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
System.out.println$S("error setting document base to " + documentBase);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setAppletProxy$S', function (appletProxy) {
this.appletProxy=(appletProxy == null  || appletProxy.length$() == 0  ? null : appletProxy);
});

Clazz.newMeth(C$, 'createAtomSetCollectionFromFile$S$java_util_Map$Z', function (name, htParams, isAppend) {
if (htParams.get$O("atomDataOnly") == null ) p$1.setLoadState$java_util_Map.apply(this, [htParams]);
var name0=name;
name=this.vwr.resolveDatabaseFormat$S(name);
if (!name0.equals$O(name) && name0.indexOf$S("/") < 0  && $I$(4).hasDatabasePrefix$S(name0) ) {
htParams.put$O$O("dbName", name0);
}if (name.endsWith$S("%2D%")) {
var filter=htParams.get$O("filter");
htParams.put$O$O("filter", (filter == null  ? "" : filter) + "2D");
name=name.substring$I$I(0, name.length$() - 4);
}var pt=name.indexOf$S("::");
var nameAsGiven=(pt >= 0 ? name.substring$I(pt + 2) : name);
var fileType=(pt >= 0 ? name.substring$I$I(0, pt) : null);
$I$(5,"info$S",["\nFileManager.getAtomSetCollectionFromFile(" + nameAsGiven + ")" + (name.equals$O(nameAsGiven) ? "" : " //" + name) ]);
var names=p$1.getClassifiedName$S$Z.apply(this, [nameAsGiven, true]);
if (names.length == 1) return names[0];
var fullPathName=names[0];
var fileName=names[1];
htParams.put$O$O("fullPathName", (fileType == null  ? "" : fileType + "::") + C$.fixDOSName$S(fullPathName));
if (this.vwr.getBoolean$I(603979879) && this.vwr.getBoolean$I(603979825) ) this.vwr.getChimeMessenger$().update$S(fullPathName);
var fileReader=Clazz.new_($I$(6,1).c$$org_jmol_viewer_Viewer$S$S$S$S$O$java_util_Map$Z,[this.vwr, fileName, fullPathName, nameAsGiven, fileType, null, htParams, isAppend]);
fileReader.run$();
return fileReader.getAtomSetCollection$();
});

Clazz.newMeth(C$, 'createAtomSetCollectionFromFiles$SA$java_util_Map$Z', function (fileNames, htParams, isAppend) {
p$1.setLoadState$java_util_Map.apply(this, [htParams]);
var fullPathNames=Clazz.array(String, [fileNames.length]);
var namesAsGiven=Clazz.array(String, [fileNames.length]);
var fileTypes=Clazz.array(String, [fileNames.length]);
for (var i=0; i < fileNames.length; i++) {
var pt=fileNames[i].indexOf$S("::");
var nameAsGiven=(pt >= 0 ? fileNames[i].substring$I(pt + 2) : fileNames[i]);
System.out.println$S(i + " FM " + nameAsGiven );
var fileType=(pt >= 0 ? fileNames[i].substring$I$I(0, pt) : null);
var names=p$1.getClassifiedName$S$Z.apply(this, [nameAsGiven, true]);
if (names.length == 1) return names[0];
fullPathNames[i]=names[0];
fileNames[i]=C$.fixDOSName$S(names[0]);
fileTypes[i]=fileType;
namesAsGiven[i]=nameAsGiven;
}
htParams.put$O$O("fullPathNames", fullPathNames);
htParams.put$O$O("fileTypes", fileTypes);
var filesReader=p$1.newFilesReader$SA$SA$SA$javajs_util_DataReaderA$java_util_Map$Z.apply(this, [fullPathNames, namesAsGiven, fileTypes, null, htParams, isAppend]);
filesReader.run$();
return filesReader.getAtomSetCollection$();
});

Clazz.newMeth(C$, 'createAtomSetCollectionFromString$S$java_util_Map$Z', function (strModel, htParams, isAppend) {
p$1.setLoadState$java_util_Map.apply(this, [htParams]);
var isAddH=(strModel.indexOf$S("Viewer.AddHydrogens") >= 0);
var fnames=(isAddH ? this.getFileInfo$() : null);
var fileReader=Clazz.new_([this.vwr, "string", null, null, null, $I$(7).getBR$S(strModel), htParams, isAppend],$I$(6,1).c$$org_jmol_viewer_Viewer$S$S$S$S$O$java_util_Map$Z);
fileReader.run$();
if (fnames != null ) this.setFileInfo$SA(fnames);
if (!isAppend && !(Clazz.instanceOf(fileReader.getAtomSetCollection$(), "java.lang.String")) ) {
this.setFileInfo$SA(Clazz.array(String, -1, [strModel == "5\n\nC 0 0 0\nH .63 .63 .63\nH -.63 -.63 .63\nH -.63 .63 -.63\nH .63 -.63 -.63" ? "Jmol Model Kit" : "string"]));
}return fileReader.getAtomSetCollection$();
});

Clazz.newMeth(C$, 'createAtomSeCollectionFromStrings$SA$javajs_util_SB$java_util_Map$Z', function (arrayModels, loadScript, htParams, isAppend) {
if (!htParams.containsKey$O("isData")) {
var oldSep="\"" + this.vwr.getDataSeparator$() + "\"" ;
var tag="\"" + (isAppend ? "append" : "model") + " inline\"" ;
var sb=Clazz.new_($I$(8,1));
sb.append$S("set dataSeparator \"~~~next file~~~\";\ndata ").append$S(tag);
for (var i=0; i < arrayModels.length; i++) {
if (i > 0) sb.append$S("~~~next file~~~");
sb.append$S(arrayModels[i]);
}
sb.append$S("end ").append$S(tag).append$S(";set dataSeparator ").append$S(oldSep);
loadScript.appendSB$javajs_util_SB(sb);
}p$1.setLoadState$java_util_Map.apply(this, [htParams]);
$I$(5,"info$S",["FileManager.getAtomSetCollectionFromStrings(string[])"]);
var fullPathNames=Clazz.array(String, [arrayModels.length]);
var readers=Clazz.array($I$(9), [arrayModels.length]);
for (var i=0; i < arrayModels.length; i++) {
fullPathNames[i]="string[" + i + "]" ;
readers[i]=C$.newDataReader$org_jmol_viewer_Viewer$O(this.vwr, arrayModels[i]);
}
var filesReader=p$1.newFilesReader$SA$SA$SA$javajs_util_DataReaderA$java_util_Map$Z.apply(this, [fullPathNames, fullPathNames, null, readers, htParams, isAppend]);
filesReader.run$();
return filesReader.getAtomSetCollection$();
});

Clazz.newMeth(C$, 'createAtomSeCollectionFromArrayData$javajs_util_Lst$java_util_Map$Z', function (arrayData, htParams, isAppend) {
$I$(5,"info$S",["FileManager.getAtomSetCollectionFromArrayData(Vector)"]);
var nModels=arrayData.size$();
var fullPathNames=Clazz.array(String, [nModels]);
var readers=Clazz.array($I$(9), [nModels]);
for (var i=0; i < nModels; i++) {
fullPathNames[i]="String[" + i + "]" ;
readers[i]=C$.newDataReader$org_jmol_viewer_Viewer$O(this.vwr, arrayData.get$I(i));
}
var filesReader=p$1.newFilesReader$SA$SA$SA$javajs_util_DataReaderA$java_util_Map$Z.apply(this, [fullPathNames, fullPathNames, null, readers, htParams, isAppend]);
filesReader.run$();
return filesReader.getAtomSetCollection$();
});

Clazz.newMeth(C$, 'newDataReader$org_jmol_viewer_Viewer$O', function (vwr, data) {
var reader=(Clazz.instanceOf(data, "java.lang.String") ? "String" : $I$(10).isAS$O(data) ? "Array" : Clazz.instanceOf(data, "javajs.util.Lst") ? "List" : null);
if (reader == null ) return null;
var dr=$I$(2).getInterface$S$org_jmol_viewer_Viewer$S("javajs.util." + reader + "DataReader" , vwr, "file");
return dr.setData$O(data);
}, 1);

Clazz.newMeth(C$, 'newFilesReader$SA$SA$SA$javajs_util_DataReaderA$java_util_Map$Z', function (fullPathNames, namesAsGiven, fileTypes, readers, htParams, isAppend) {
var fr=$I$(2).getOption$S$org_jmol_viewer_Viewer$S("io.FilesReader", this.vwr, "file");
fr.set$org_jmol_viewer_FileManager$org_jmol_viewer_Viewer$SA$SA$SA$javajs_util_DataReaderA$java_util_Map$Z(this, this.vwr, fullPathNames, namesAsGiven, fileTypes, readers, htParams, isAppend);
return fr;
}, p$1);

Clazz.newMeth(C$, 'createAtomSetCollectionFromDOM$O$java_util_Map', function (DOMNode, htParams) {
var aDOMReader=$I$(2).getOption$S$org_jmol_viewer_Viewer$S("io.DOMReader", this.vwr, "file");
aDOMReader.set$org_jmol_viewer_FileManager$org_jmol_viewer_Viewer$O$java_util_Map(this, this.vwr, DOMNode, htParams);
aDOMReader.run$();
return aDOMReader.getAtomSetCollection$();
});

Clazz.newMeth(C$, 'createAtomSetCollectionFromReader$S$S$O$java_util_Map', function (fullPathName, name, reader, htParams) {
var fileReader=Clazz.new_($I$(6,1).c$$org_jmol_viewer_Viewer$S$S$S$S$O$java_util_Map$Z,[this.vwr, name, fullPathName, null, null, reader, htParams, false]);
fileReader.run$();
return fileReader.getAtomSetCollection$();
});

Clazz.newMeth(C$, 'getBufferedInputStream$S', function (fullPathName) {
var ret=this.getBufferedReaderOrErrorMessageFromName$S$SA$Z$Z(fullPathName, Clazz.array(String, [2]), true, true);
return (Clazz.instanceOf(ret, "java.io.BufferedInputStream") ? ret : null);
});

Clazz.newMeth(C$, 'getBufferedInputStreamOrErrorMessageFromName$S$S$Z$Z$BA$Z$Z', function (name, fullName, showMsg, checkOnly, outputBytes, allowReader, allowCached) {
var bis=null;
var ret=null;
var errorMessage=null;
var cacheBytes=(allowCached && outputBytes == null   ? cacheBytes=p$1.getPngjOrDroppedBytes$S$S.apply(this, [fullName, name]) : null);
try {
if (allowCached && name.indexOf$S(".png") >= 0  && this.pngjCache == null   && !this.vwr.getBoolean$I(603979960) ) this.pngjCache=Clazz.new_($I$(1,1));
if (cacheBytes == null ) {
var isPngjBinaryPost=(name.indexOf$S("?POST?_PNGJBIN_") >= 0);
var isPngjPost=(isPngjBinaryPost || name.indexOf$S("?POST?_PNGJ_") >= 0 );
if (name.indexOf$S("?POST?_PNG_") > 0 || isPngjPost ) {
var errMsg=Clazz.array(String, [1]);
var bytes=this.vwr.getImageAsBytes$S$I$I$I$SA(isPngjPost ? "PNGJ" : "PNG", 0, 0, -1, errMsg);
if (errMsg[0] != null ) return errMsg[0];
if (isPngjBinaryPost) {
outputBytes=bytes;
name=$I$(11,"rep$S$S$S",[name, "?_", "=_"]);
} else {
name=Clazz.new_($I$(8,1)).append$S(name).append$S("=").appendSB$javajs_util_SB($I$(12).getBase64$BA(bytes)).toString();
}}var iurl=$I$(13).urlTypeIndex$S(name);
var isURL=(iurl >= 0);
var post=null;
if (isURL && (iurl=name.indexOf$S("?POST?")) >= 0 ) {
post=name.substring$I(iurl + 6);
name=name.substring$I$I(0, iurl);
}var isApplet=(this.appletDocumentBaseURL != null );
if (isApplet || isURL ) {
if (isApplet && isURL && this.appletProxy != null   ) name=this.appletProxy + "?url=" + p$1.urlEncode$S.apply(this, [name]) ;
var url=(isApplet ? Clazz.new_($I$(3,1).c$$java_net_URL$S$java_net_URLStreamHandler,[this.appletDocumentBaseURL, name, null]) : Clazz.new_($I$(3,1).c$$java_net_URL$S$java_net_URLStreamHandler,[null, name, null]));
if (checkOnly) return null;
name=url.toString();
if (showMsg && name.toLowerCase$().indexOf$S("password") < 0 ) $I$(5).info$S("FileManager opening url " + name);
ret=this.vwr.apiPlatform.getURLContents$java_net_URL$BA$S$Z(url, outputBytes, post, false);
var bytes=null;
if (Clazz.instanceOf(ret, "javajs.util.SB")) {
var sb=ret;
if (allowReader && !$I$(7).isBase64$javajs_util_SB(sb) ) return $I$(7,"getBR$S",[sb.toString()]);
bytes=$I$(7).getBytesFromSB$javajs_util_SB(sb);
} else if ($I$(10).isAB$O(ret)) {
bytes=ret;
}if (bytes != null ) ret=$I$(7).getBIS$BA(bytes);
} else if (!allowCached || (cacheBytes=this.cacheGet$S$Z(name, true)) == null  ) {
if (showMsg) $I$(5).info$S("FileManager opening file " + name);
ret=this.vwr.apiPlatform.getBufferedFileInputStream$S(name);
}if (Clazz.instanceOf(ret, "java.lang.String")) return ret;
}bis=(cacheBytes == null  ? ret : $I$(7).getBIS$BA(cacheBytes));
if (checkOnly) {
bis.close$();
bis=null;
}return bis;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
try {
if (bis != null ) bis.close$();
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.io.IOException")){
} else {
throw e1;
}
}
errorMessage="" + e;
} else {
throw e;
}
}
return errorMessage;
});

Clazz.newMeth(C$, 'getBufferedReaderForResource$org_jmol_viewer_Viewer$O$S$S', function (vwr, resourceClass, classPath, resourceName) {
var url;
{

}
resourceName=(url == null  ? vwr.vwrOptions.get$O("codePath") + classPath + resourceName  : url.getFile$());
if (vwr.async) {
var bytes=vwr.fm.cacheGet$S$Z(resourceName, false);
if (bytes == null ) throw Clazz.new_(Clazz.load('org.jmol.viewer.JmolAsyncException').c$$S,[resourceName]);
return $I$(7,"getBufferedReader$java_io_BufferedInputStream$S",[$I$(7).getBIS$BA(bytes), null]);
}return vwr.fm.getBufferedReaderOrErrorMessageFromName$S$SA$Z$Z(resourceName, Clazz.array(String, -1, [null, null]), false, true);
}, 1);

Clazz.newMeth(C$, 'urlEncode$S', function (name) {
try {
return $I$(14).encode$S$S(name, "utf-8");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
return name;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getEmbeddedFileState$S$Z$S', function (fileName, allowCached, sptName) {
var dir=this.getZipDirectory$S$Z$Z(fileName, false, allowCached);
if (dir.length == 0) {
var state=this.vwr.getFileAsString4$S$I$Z$Z$Z$S(fileName, -1, false, true, false, "file");
return (state.indexOf$S("**** Jmol Embedded Script ****") < 0 ? "" : C$.getEmbeddedScript$S(state));
}for (var i=0; i < dir.length; i++) if (dir[i].indexOf$S(sptName) >= 0) {
var data=Clazz.array(String, -1, [fileName + "|" + dir[i] , null]);
this.getFileDataAsString$SA$I$Z$Z$Z(data, -1, false, false, false);
return data[1];
}
return "";
});

Clazz.newMeth(C$, 'getFullPathNameOrError$S$Z$SA', function (filename, getStream, ret) {
var names=p$1.getClassifiedName$S$Z.apply(this, [$I$(15).fixProtocol$S(filename), true]);
if (names == null  || names[0] == null   || names.length < 2 ) return Clazz.array(String, -1, [null, "cannot read file name: " + filename]);
var name=names[0];
var fullPath=C$.fixDOSName$S(names[0]);
name=$I$(7).getZipRoot$S(name);
var errMsg=this.getBufferedInputStreamOrErrorMessageFromName$S$S$Z$Z$BA$Z$Z(name, fullPath, false, !getStream, null, false, !getStream);
ret[0]=fullPath;
if (Clazz.instanceOf(errMsg, "java.lang.String")) ret[1]=errMsg;
return errMsg;
});

Clazz.newMeth(C$, 'getBufferedReaderOrErrorMessageFromName$S$SA$Z$Z', function (name, fullPathNameReturn, isBinary, doSpecialLoad) {
name=$I$(15).fixProtocol$S(name);
var data=this.cacheGet$S$Z(name, false);
var isBytes=$I$(10).isAB$O(data);
var bytes=(isBytes ? data : null);
if (name.startsWith$S("cache://")) {
if (data == null ) return "cannot read " + name;
if (isBytes) {
bytes=data;
} else {
return $I$(7).getBR$S(data);
}}var names=p$1.getClassifiedName$S$Z.apply(this, [name, true]);
if (names == null ) return "cannot read file name: " + name;
if (fullPathNameReturn != null ) fullPathNameReturn[0]=C$.fixDOSName$S(names[0]);
return this.getUnzippedReaderOrStreamFromName$S$O$Z$Z$Z$Z$java_util_Map(names[0], bytes, false, isBinary, false, doSpecialLoad, null);
});

Clazz.newMeth(C$, 'getUnzippedReaderOrStreamFromName$S$O$Z$Z$Z$Z$java_util_Map', function (name, bytesOrStream, allowZipStream, forceInputStream, isTypeCheckOnly, doSpecialLoad, htParams) {
if (doSpecialLoad && bytesOrStream == null  ) {
var o=(name.endsWith$S(".spt") ? Clazz.array(String, -1, [null, null, null]) : name.indexOf$S(".spardir") < 0 ? null : this.spartanUtil$().getFileList$S$Z(name, isTypeCheckOnly));
if (o != null ) return o;
}name=$I$(15).fixProtocol$S(name);
if (bytesOrStream == null  && (bytesOrStream=p$1.getCachedPngjBytes$S.apply(this, [name])) != null   && htParams != null  ) htParams.put$O$O("sourcePNGJ", Boolean.TRUE);
name=name.replace$CharSequence$CharSequence("#_DOCACHE_", "");
var fullName=name;
var subFileList=null;
if (name.indexOf$S("|") >= 0) {
subFileList=$I$(11,"split$S$S",[name.replace$C$C("\\", "/"), "|"]);
if (bytesOrStream == null ) $I$(5).info$S("FileManager opening zip " + name);
name=subFileList[0];
}var t=(bytesOrStream == null  ? this.getBufferedInputStreamOrErrorMessageFromName$S$S$Z$Z$BA$Z$Z(name, fullName, true, false, null, !forceInputStream, true) : $I$(10).isAB$O(bytesOrStream) ? $I$(7).getBIS$BA(bytesOrStream) : bytesOrStream);
try {
if (Clazz.instanceOf(t, "java.lang.String") || Clazz.instanceOf(t, "java.io.BufferedReader") ) return t;
var bis=t;
if ($I$(7).isGzipS$java_io_InputStream(bis)) bis=$I$(16).getUnzippedInputStream$java_io_BufferedInputStream(bis);
 else if ($I$(7).isBZip2S$java_io_InputStream(bis)) bis=$I$(16).getUnzippedInputStreamBZip2$java_io_BufferedInputStream(bis);
if (forceInputStream && subFileList == null  ) return bis;
if ($I$(7).isCompoundDocumentS$java_io_InputStream(bis)) {
var doc=Clazz.new_($I$(17,1));
doc.setDocStream$java_io_BufferedInputStream(bis);
var s=doc.getAllDataFiles$S$S("Molecule", "Input").toString();
return (forceInputStream ? $I$(7,"getBIS$BA",[s.getBytes$()]) : $I$(7).getBR$S(s));
}if ($I$(7).isMessagePackS$java_io_InputStream(bis) || $I$(7).isPickleS$java_io_InputStream(bis) ) return bis;
if ($I$(7).isPngZipStream$java_io_InputStream(bis)) bis=$I$(16).getPngZipStream$java_io_BufferedInputStream$Z(bis, true);
if ($I$(7).isZipS$java_io_InputStream(bis)) {
if (allowZipStream) return $I$(16).newZipInputStream$java_io_InputStream(bis);
var o=$I$(16).getZipFileDirectory$java_io_BufferedInputStream$SA$I$Z(bis, subFileList, 1, forceInputStream);
return (Clazz.instanceOf(o, "java.lang.String") ? $I$(7).getBR$S(o) : o);
}return (forceInputStream ? bis : $I$(7).getBufferedReader$java_io_BufferedInputStream$S(bis, null));
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"Exception")){
return ioe.toString();
} else {
throw ioe;
}
}
});

Clazz.newMeth(C$, 'getZipDirectory$S$Z$Z', function (fileName, addManifest, allowCached) {
var t=this.getBufferedInputStreamOrErrorMessageFromName$S$S$Z$Z$BA$Z$Z(fileName, fileName, false, false, null, false, allowCached);
return $I$(16).getZipDirectoryAndClose$java_io_BufferedInputStream$S(t, addManifest ? "JmolManifest" : null);
});

Clazz.newMeth(C$, 'getFileAsBytes$S$javajs_util_OC', function (name, out) {
if (name == null ) return null;
var fullName=name;
var subFileList=null;
if (name.indexOf$S("|") >= 0) {
subFileList=$I$(11).split$S$S(name, "|");
name=subFileList[0];
}var bytes=(subFileList == null  ? null : p$1.getPngjOrDroppedBytes$S$S.apply(this, [fullName, name]));
if (bytes == null ) {
var t=this.getBufferedInputStreamOrErrorMessageFromName$S$S$Z$Z$BA$Z$Z(name, fullName, false, false, null, false, true);
if (Clazz.instanceOf(t, "java.lang.String")) return "Error:" + t;
try {
var bis=t;
bytes=(out != null  || subFileList == null   || subFileList.length <= 1  || !$I$(7).isZipS$java_io_InputStream(bis) && !$I$(7).isPngZipStream$java_io_InputStream(bis)   ? $I$(7).getStreamAsBytes$java_io_BufferedInputStream$javajs_util_OC(bis, out) : $I$(16).getZipFileContentsAsBytes$java_io_BufferedInputStream$SA$I(bis, subFileList, 1));
bis.close$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"Exception")){
return ioe.toString();
} else {
throw ioe;
}
}
}if (out == null  || !$I$(10).isAB$O(bytes) ) return bytes;
out.write$BA$I$I(bytes, 0, -1);
return (bytes).length + " bytes";
});

Clazz.newMeth(C$, 'getFileAsMap$S$S', function (name, type) {
var bdata=Clazz.new_($I$(1,1));
var t;
if (name == null ) {
var errMsg=Clazz.array(String, [1]);
var bytes=this.vwr.getImageAsBytes$S$I$I$I$SA(type, -1, -1, -1, errMsg);
if (errMsg[0] != null ) {
bdata.put$O$O("_ERROR_", errMsg[0]);
return bdata;
}t=$I$(7).getBIS$BA(bytes);
} else {
var data=Clazz.array(String, [2]);
t=this.getFullPathNameOrError$S$Z$SA(name, true, data);
if (Clazz.instanceOf(t, "java.lang.String")) {
bdata.put$O$O("_ERROR_", t);
return bdata;
}if (!p$1.checkSecurity$S.apply(this, [data[0]])) {
bdata.put$O$O("_ERROR_", "java.io. Security exception: cannot read file " + data[0]);
return bdata;
}}try {
$I$(16).readFileAsMap$java_io_BufferedInputStream$java_util_Map$S(t, bdata, name);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
bdata.clear$();
bdata.put$O$O("_ERROR_", "" + e);
} else {
throw e;
}
}
return bdata;
});

Clazz.newMeth(C$, 'getFileDataAsString$SA$I$Z$Z$Z', function (data, nBytesMax, doSpecialLoad, allowBinary, checkProtected) {
data[1]="";
var name=data[0];
if (name == null ) return false;
var t=this.getBufferedReaderOrErrorMessageFromName$S$SA$Z$Z(name, data, false, doSpecialLoad);
if (Clazz.instanceOf(t, "java.lang.String")) {
data[1]=t;
return false;
}if (checkProtected && !p$1.checkSecurity$S.apply(this, [data[0]]) ) {
data[1]="java.io. Security exception: cannot read file " + data[0];
return false;
}try {
return $I$(7).readAllAsString$java_io_BufferedReader$I$Z$SA$I(t, nBytesMax, allowBinary, data, 1);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'checkSecurity$S', function (f) {
if (!f.startsWith$S("file:")) return true;
var pt=f.lastIndexOf$I("/");
if (f.lastIndexOf$S(":/") == pt - 1 || f.indexOf$S("/.") >= 0  || f.lastIndexOf$I(".") < f.lastIndexOf$I("/") ) return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'loadImage$O$S$Z', function (nameOrBytes, echoName, forceSync) {
var image=null;
var nameOrError=null;
var bytes=null;
var isPopupImage=(echoName != null  && echoName.startsWith$S("\u0001") );
if (isPopupImage) {
if (echoName.equals$O("\u0001closeall\u0001null")) return this.vwr.loadImageData$O$S$S$O(Boolean.TRUE, "\u0001closeall", "\u0001closeall", null);
if ("\u0001close".equals$O(nameOrBytes)) return this.vwr.loadImageData$O$S$S$O(Boolean.FALSE, "\u0001close", echoName, null);
}if (Clazz.instanceOf(nameOrBytes, "java.util.Map")) {
nameOrBytes=((nameOrBytes).containsKey$O("_DATA_") ? (nameOrBytes).get$O("_DATA_") : (nameOrBytes).get$O("_IMAGE_"));
}if (Clazz.instanceOf(nameOrBytes, "org.jmol.script.SV")) nameOrBytes=(nameOrBytes).value;
var name=(Clazz.instanceOf(nameOrBytes, "java.lang.String") ? nameOrBytes : null);
var isAsynchronous=false;
if (name != null  && name.startsWith$S(";base64,") ) {
bytes=$I$(12).decodeBase64$S(name);
} else if (Clazz.instanceOf(nameOrBytes, "javajs.util.BArray")) {
bytes=(nameOrBytes).data;
} else if (echoName == null  || Clazz.instanceOf(nameOrBytes, "java.lang.String") ) {
var names=p$1.getClassifiedName$S$Z.apply(this, [nameOrBytes, true]);
nameOrError=(names == null  ? "cannot read file name: " + nameOrBytes : C$.fixDOSName$S(names[0]));
if (names != null ) image=this.getJzu$().getImage$org_jmol_viewer_Viewer$O$S$Z(this.vwr, nameOrError, echoName, forceSync);
isAsynchronous=(image == null );
} else {
image=nameOrBytes;
}if (bytes != null ) {
image=this.getJzu$().getImage$org_jmol_viewer_Viewer$O$S$Z(this.vwr, bytes, echoName, true);
isAsynchronous=false;
}if (Clazz.instanceOf(image, "java.lang.String")) {
nameOrError=image;
image=null;
}if (!$I$(4).isJS && image != null   && bytes != null  ) nameOrError=";base64," + $I$(12).getBase64$BA(bytes).toString();
if (!$I$(4).isJS || isPopupImage && nameOrError == null    || !isPopupImage && image != null   ) return this.vwr.loadImageData$O$S$S$O(image, nameOrError, echoName, null);
return isAsynchronous;
});

Clazz.newMeth(C$, 'getClassifiedName$S$Z', function (name, isFullLoad) {
if (name == null ) return Clazz.array(String, -1, [null]);
var doSetPathForAllFiles=(this.pathForAllFiles.length$() > 0);
if (name.startsWith$S("?") || name.startsWith$S("http://?") || name.startsWith$S("https://?")  ) {
if (!$I$(4).isJS && (name=this.vwr.dialogAsk$S$S$java_util_Map("Load", name, null)) == null  ) return Clazz.array(String, -1, [isFullLoad ? "#CANCELED#" : null]);
doSetPathForAllFiles=false;
}var file=null;
var url=null;
var names=null;
if (name.startsWith$S("cache://")) {
names=Clazz.array(String, [3]);
names[0]=names[2]=name;
names[1]=C$.stripPath$S(names[0]);
return names;
}name=this.vwr.resolveDatabaseFormat$S(name);
if (name.indexOf$S(":") < 0 && name.indexOf$S("/") != 0 ) name=C$.addDirectory$S$S(this.vwr.getDefaultDirectory$(), name);
if (this.appletDocumentBaseURL == null ) {
if ($I$(13).urlTypeIndex$S(name) >= 0 || this.vwr.haveAccess$org_jmol_viewer_Viewer_ACCESS($I$(18).NONE)  || this.vwr.haveAccess$org_jmol_viewer_Viewer_ACCESS($I$(18).READSPT) && !name.endsWith$S(".spt") && !name.endsWith$S("/")   ) {
try {
url=Clazz.new_($I$(3,1).c$$java_net_URL$S$java_net_URLStreamHandler,[null, name, null]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return Clazz.array(String, -1, [isFullLoad ? e.toString() : null]);
} else {
throw e;
}
}
} else {
file=this.vwr.apiPlatform.newFile$S(name);
var s=file.getFullPath$();
var fname=file.getName$();
names=Clazz.array(String, -1, [(s == null  ? fname : s), fname, (s == null  ? fname : "file:/" + s.replace$C$C("\\", "/"))]);
}} else {
try {
if (name.indexOf$S(":\\") == 1 || name.indexOf$S(":/") == 1 ) name="file:/" + name;
url=Clazz.new_($I$(3,1).c$$java_net_URL$S$java_net_URLStreamHandler,[this.appletDocumentBaseURL, name, null]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return Clazz.array(String, -1, [isFullLoad ? e.toString() : null]);
} else {
throw e;
}
}
}if (url != null ) {
names=Clazz.array(String, [3]);
names[0]=names[2]=url.toString();
names[1]=C$.stripPath$S(names[0]);
}if (doSetPathForAllFiles) {
var name0=names[0];
names[0]=this.pathForAllFiles + names[1];
$I$(5).info$S("FileManager substituting " + name0 + " --> " + names[0] );
}if (isFullLoad && (file != null  || $I$(13).urlTypeIndex$S(names[0]) == 4 ) ) {
var path=(file == null  ? $I$(11,"trim$S$S",[names[0].substring$I(5), "/"]) : names[0]);
var pt=path.length$() - names[1].length$() - 1 ;
if (pt > 0) {
path=path.substring$I$I(0, pt);
C$.setLocalPath$org_jmol_viewer_Viewer$S$Z(this.vwr, path, true);
}}return names;
}, p$1);

Clazz.newMeth(C$, 'addDirectory$S$S', function (defaultDirectory, name) {
if (defaultDirectory.length$() == 0 || defaultDirectory.equals$O(".") ) return name;
var ch=(name.length$() > 0 ? name.charAt$I(0) : " ");
var s=defaultDirectory.toLowerCase$();
if ((s.endsWith$S(".zip") || s.endsWith$S(".tar") ) && ch != "|"  && ch != "/" ) defaultDirectory += "|";
return defaultDirectory + (ch == "/" || ch == "/"  || (ch=defaultDirectory.charAt$I(defaultDirectory.length$() - 1)) == "|"  || ch == "/"  ? "" : "/") + name ;
}, 1);

Clazz.newMeth(C$, 'getDefaultDirectory$S', function (name) {
var names=p$1.getClassifiedName$S$Z.apply(this, [name, true]);
if (names == null ) return "";
name=C$.fixPath$S(names[0]);
return (name == null  ? "" : name.substring$I$I(0, name.lastIndexOf$S("/")));
});

Clazz.newMeth(C$, 'fixPath$S', function (path) {
path=C$.fixDOSName$S(path);
path=$I$(11).rep$S$S$S(path, "/./", "/");
var pt=path.lastIndexOf$S("//") + 1;
if (pt < 1) pt=path.indexOf$S(":/") + 1;
if (pt < 1) pt=path.indexOf$S("/");
if (pt < 0) return null;
var protocol=path.substring$I$I(0, pt);
path=path.substring$I(pt);
while ((pt=path.lastIndexOf$S("/../")) >= 0){
var pt0=path.substring$I$I(0, pt).lastIndexOf$S("/");
if (pt0 < 0) return $I$(11).rep$S$S$S(protocol + path, "/../", "/");
path=path.substring$I$I(0, pt0) + path.substring$I(pt + 3);
}
if (path.length$() == 0) path="/";
return protocol + path;
}, 1);

Clazz.newMeth(C$, 'getFilePath$S$Z$Z', function (name, addUrlPrefix, asShortName) {
var names=p$1.getClassifiedName$S$Z.apply(this, [name, false]);
return (names == null  || names.length == 1  ? "" : asShortName ? names[1] : addUrlPrefix ? names[2] : names[0] == null  ? "" : C$.fixDOSName$S(names[0]));
});

Clazz.newMeth(C$, 'getLocalDirectory$org_jmol_viewer_Viewer$Z', function (vwr, forDialog) {
var localDir=vwr.getP$S(forDialog ? "currentLocalPath" : "defaultDirectoryLocal");
if (forDialog && localDir.length$() == 0 ) localDir=vwr.getP$S("defaultDirectoryLocal");
if (localDir.length$() == 0) return (vwr.isApplet ? null : vwr.apiPlatform.newFile$S(System.getProperty$S$S("user.dir", ".")));
if (vwr.isApplet && localDir.indexOf$S("file:/") == 0 ) localDir=localDir.substring$I(6);
var f=vwr.apiPlatform.newFile$S(localDir);
try {
return f.isDirectory$() ? f : f.getParentAsFile$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'setLocalPath$org_jmol_viewer_Viewer$S$Z', function (vwr, path, forDialog) {
while (path.endsWith$S("/") || path.endsWith$S("\\") )path=path.substring$I$I(0, path.length$() - 1);

vwr.setStringProperty$S$S("currentLocalPath", path);
if (!forDialog) vwr.setStringProperty$S$S("defaultDirectoryLocal", path);
}, 1);

Clazz.newMeth(C$, 'getLocalPathForWritingFile$org_jmol_viewer_Viewer$S', function (vwr, file) {
if (file.startsWith$S("http://") || file.startsWith$S("https://") ) return file;
file=$I$(11).rep$S$S$S(file, "?", "");
if (file.indexOf$S("file:/") == 0) return file.substring$I(6);
if (file.indexOf$S("/") == 0 || file.indexOf$S(":") >= 0 ) return file;
var dir=null;
try {
dir=C$.getLocalDirectory$org_jmol_viewer_Viewer$Z(vwr, false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return (dir == null  ? file : C$.fixPath$S(dir.toString() + "/" + file ));
}, 1);

Clazz.newMeth(C$, 'fixDOSName$S', function (fileName) {
return (fileName.indexOf$S(":\\") >= 0 ? fileName.replace$C$C("\\", "/") : fileName);
}, 1);

Clazz.newMeth(C$, 'stripPath$S', function (name) {
var pt=Math.max(name.lastIndexOf$S("|"), name.lastIndexOf$S("/"));
return name.substring$I(pt + 1);
}, 1);

Clazz.newMeth(C$, 'determineSurfaceTypeIs$java_io_InputStream', function (is) {
var br;
try {
br=$I$(7,"getBufferedReader$java_io_BufferedInputStream$S",[Clazz.new_($I$(19,1).c$$java_io_InputStream,[is]), "ISO-8859-1"]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return null;
} else {
throw e;
}
}
return C$.determineSurfaceFileType$java_io_BufferedReader(br);
}, 1);

Clazz.newMeth(C$, 'isScriptType$S', function (fname) {
return $I$(11,"isOneOf$S$S",[fname.toLowerCase$().substring$I(fname.lastIndexOf$S(".") + 1), ";pse;spt;png;pngj;jmol;zip;"]);
}, 1);

Clazz.newMeth(C$, 'isSurfaceType$S', function (fname) {
return $I$(11,"isOneOf$S$S",[fname.toLowerCase$().substring$I(fname.lastIndexOf$S(".") + 1), ";jvxl;kin;o;msms;map;pmesh;mrc;efvet;cube;obj;dssr;bcif;"]);
}, 1);

Clazz.newMeth(C$, 'determineSurfaceFileType$java_io_BufferedReader', function (bufferedReader) {
var line=null;
if (Clazz.instanceOf(bufferedReader, "javajs.util.Rdr.StreamReader")) {
var is=(bufferedReader).getStream$();
if (is.markSupported$()) {
try {
is.mark$I(300);
var buf=Clazz.array(Byte.TYPE, [300]);
is.read$BA$I$I(buf, 0, 300);
is.reset$();
if ((buf[0] & 255) == 131) return "BCifDensity";
if (buf[0] == 80  && buf[1] == 77   && buf[2] == 1  && buf[3] == 0 ) return "Pmesh";
if (buf[208] == 77  && buf[209] == 65   && buf[210] == 80  ) return "Mrc";
if (buf[0] == 20  && buf[1] == 0  && buf[2] == 0  && buf[3] == 0 ) return "DelPhi";
if (buf[36] == 0 && buf[37] == 100 ) return "Dsn6";
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}var br=null;
try {
br=Clazz.new_($I$(20,1).c$$java_io_BufferedReader$I,[bufferedReader, 16000]);
line=br.getHeader$I(0);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (br == null  || line == null   || line.length$() == 0 ) return null;
var pt0=line.indexOf$I("\u0000");
if (pt0 >= 0) {
if ((line.charCodeAt$I(0)) == 131 ) return "BCifDensity";
if (line.indexOf$S("PM\u0001\u0000") == 0) return "Pmesh";
if (line.indexOf$S("MAP ") == 208) return "Mrc";
if (line.indexOf$S("\u0014\u0000\u0000\u0000") == 0) return "DelPhi";
if (line.length$() > 37 && ((line.charCodeAt$I(36)) == 0  && (line.charCodeAt$I(37)) == 100   || (line.charCodeAt$I(36)) == 0  && (line.charCodeAt$I(37)) == 100   ) ) {
return "Dsn6";
}}switch ((line.charCodeAt$I(0))) {
case 64:
if (line.indexOf$S("@text") == 0) return "Kinemage";
break;
case 35:
if (line.indexOf$S(".obj") >= 0) return "Obj";
if (line.indexOf$S("MSMS") >= 0) return "Msms";
break;
case 38:
if (line.indexOf$S("&plot") == 0) return "Jaguar";
break;
case 13:
case 10:
if (line.indexOf$S("ZYX") >= 0) return "Xplor";
break;
}
if (line.indexOf$S("Here is your gzipped map") >= 0) return "UPPSALA" + line;
if (line.startsWith$S("data_SERVER")) return "CifDensity";
if (line.startsWith$S("4MESHC")) return "Pmesh4";
if (line.indexOf$S("! nspins") >= 0) return "CastepDensity";
if (line.indexOf$S("<jvxl") >= 0 && line.indexOf$S("<?xml") >= 0 ) return "JvxlXml";
if (line.indexOf$S("#JVXL+") >= 0) return "Jvxl+";
if (line.indexOf$S("#JVXL") >= 0) return "Jvxl";
if (line.indexOf$S("#JmolPmesh") >= 0) return "Pmesh";
if (line.indexOf$S("#obj") >= 0) return "Obj";
if (line.indexOf$S("#pmesh") >= 0) return "Obj";
if (line.indexOf$S("<efvet ") >= 0) return "Efvet";
if (line.indexOf$S("usemtl") >= 0) return "Obj";
if (line.indexOf$S("# object with") == 0) return "Nff";
if (line.indexOf$S("BEGIN_DATAGRID_3D") >= 0 || line.indexOf$S("BEGIN_BANDGRID_3D") >= 0 ) return "Xsf";
if (line.indexOf$S("tiles in x, y") >= 0) return "Ras3D";
if (line.indexOf$S(" 0.00000e+00 0.00000e+00      0      0\n") >= 0) return "Uhbd";
line=br.readLineWithNewline$();
if (line.indexOf$S("object 1 class gridpositions counts") == 0) return "Apbs";
var tokens=$I$(11).getTokens$S(line);
var line2=br.readLineWithNewline$();
if (tokens.length == 2 && $I$(11).parseInt$S(tokens[0]) == 3  && $I$(11).parseInt$S(tokens[1]) != -2147483648 ) {
tokens=$I$(11).getTokens$S(line2);
if (tokens.length == 3 && $I$(11).parseInt$S(tokens[0]) != -2147483648  && $I$(11).parseInt$S(tokens[1]) != -2147483648  && $I$(11).parseInt$S(tokens[2]) != -2147483648 ) return "PltFormatted";
}var line3=br.readLineWithNewline$();
if (line.startsWith$S("v ") && line2.startsWith$S("v ") && line3.startsWith$S("v ")  ) return "Obj";
var nAtoms=$I$(11).parseInt$S(line3);
if (nAtoms == -2147483648) return (line3.indexOf$S("+") == 0 ? "Jvxl+" : null);
tokens=$I$(11).getTokens$S(line3);
if (tokens[0].indexOf$S(".") > 0) return (line3.length$() >= 60 || tokens.length != 3  ? null : "VaspChgcar");
if (nAtoms >= 0) return (tokens.length == 4 || tokens.length == 5 && tokens[4].equals$O("1")   ? "Cube" : null);
nAtoms=-nAtoms;
for (var i=4 + nAtoms; --i >= 0; ) if ((line=br.readLineWithNewline$()) == null ) return null;

var nSurfaces=$I$(11).parseInt$S(line);
if (nSurfaces == -2147483648) return null;
return (nSurfaces < 0 ? "Jvxl" : "Cube");
}, 1);

Clazz.newMeth(C$, 'getManifestScriptPath$S', function (manifest) {
if (manifest.indexOf$S("$SCRIPT_PATH$") >= 0) return "";
var ch=(manifest.indexOf$I("\n") >= 0 ? "\n" : "\r");
if (manifest.indexOf$S(".spt") >= 0) {
var s=$I$(11).split$S$S(manifest, ch);
for (var i=s.length; --i >= 0; ) if (s[i].indexOf$S(".spt") >= 0) return "|" + $I$(11).trim$S$S(s[i], "\r\n \t");

}return null;
}, 1);

Clazz.newMeth(C$, 'getEmbeddedScript$S', function (script) {
if (script == null ) return script;
var pt=script.indexOf$S("**** Jmol Embedded Script ****");
if (pt < 0) return script;
var pt1=script.lastIndexOf$S$I("/*", pt);
var pt2=script.indexOf$S$I((script.charAt$I(pt1 + 2) == "*" ? "*" : "") + "*/", pt);
if (pt1 >= 0 && pt2 >= pt ) script=script.substring$I$I(pt + "**** Jmol Embedded Script ****".length$(), pt2) + "\n";
while ((pt1=script.indexOf$S(" #Jmol...\u0000")) >= 0)script=script.substring$I$I(0, pt1) + script.substring$I(pt1 + " #Jmol...\u0000".length$() + 4 );

if ($I$(5).debugging) $I$(5).debug$S(script);
return script;
}, 1);

Clazz.newMeth(C$, 'getFileReferences$S$javajs_util_Lst', function (script, fileList) {
for (var ipt=0; ipt < C$.scriptFilePrefixes.length; ipt++) {
var tag=C$.scriptFilePrefixes[ipt];
var i=-1;
while ((i=script.indexOf$S$I(tag, i + 1)) >= 0){
var s=$I$(11).getQuotedStringAt$S$I(script, i);
if (s.indexOf$S("::") >= 0) s=$I$(11).split$S$S(s, "::")[1];
fileList.addLast$O(s);
}
}
}, 1);

Clazz.newMeth(C$, 'setScriptFileReferences$S$S$S$S', function (script, localPath, remotePath, scriptPath) {
if (localPath != null ) script=C$.setScriptFileRefs$S$S$Z(script, localPath, true);
if (remotePath != null ) script=C$.setScriptFileRefs$S$S$Z(script, remotePath, false);
script=$I$(11).rep$S$S$S(script, "\u0001\"", "\"");
if (scriptPath != null ) {
while (scriptPath.endsWith$S("/"))scriptPath=scriptPath.substring$I$I(0, scriptPath.length$() - 1);

for (var ipt=0; ipt < C$.scriptFilePrefixes.length; ipt++) {
var tag=C$.scriptFilePrefixes[ipt];
script=$I$(11).rep$S$S$S(script, tag + ".", tag + scriptPath);
}
}return script;
}, 1);

Clazz.newMeth(C$, 'setScriptFileRefs$S$S$Z', function (script, dataPath, isLocal) {
if (dataPath == null ) return script;
var noPath=(dataPath.length$() == 0);
var fileNames=Clazz.new_($I$(21,1));
C$.getFileReferences$S$javajs_util_Lst(script, fileNames);
var oldFileNames=Clazz.new_($I$(21,1));
var newFileNames=Clazz.new_($I$(21,1));
var nFiles=fileNames.size$();
for (var iFile=0; iFile < nFiles; iFile++) {
var name0=fileNames.get$I(iFile);
var name=name0;
if (isLocal == $I$(13).isLocal$S(name) ) {
var pt=(noPath ? -1 : name.indexOf$S("/" + dataPath + "/" ));
if (pt >= 0) {
name=name.substring$I(pt + 1);
} else {
pt=name.lastIndexOf$S("/");
if (pt < 0 && !noPath ) name="/" + name;
if (pt < 0 || noPath ) pt++;
name=dataPath + name.substring$I(pt);
}}$I$(5).info$S("FileManager substituting " + name0 + " --> " + name );
oldFileNames.addLast$O("\"" + name0 + "\"" );
newFileNames.addLast$O("\u0001\"" + name + "\"" );
}
return $I$(11).replaceStrings$S$javajs_util_Lst$javajs_util_Lst(script, oldFileNames, newFileNames);
}, 1);

Clazz.newMeth(C$, 'cachePut$S$O', function (key, data) {
key=C$.fixDOSName$S(key);
if ($I$(5).debugging) $I$(5).debug$S("cachePut " + key);
if (data == null  || "".equals$O(data) ) {
this.cache.remove$O(key);
return;
}this.cache.put$O$O(key, data);
p$1.getCachedPngjBytes$S.apply(this, [key]);
});

Clazz.newMeth(C$, 'cacheGet$S$Z', function (key, bytesOnly) {
key=C$.fixDOSName$S(key);
var pt=key.indexOf$S("|");
if (pt >= 0 && !key.endsWith$S("##JmolSurfaceInfo##") ) key=key.substring$I$I(0, pt);
key=this.getFilePath$S$Z$Z(key, true, false);
var data=null;
{
data = Jmol.Cache.get(key);
if (data == null && Jmol.getCachedJavaFile) data = Jmol.getCachedJavaFile(key);
}
if (data == null ) data=this.cache.get$O(key);
if (data != null ) $I$(5).info$S("cacheGet " + key);
return (bytesOnly && (Clazz.instanceOf(data, "java.lang.String"))  ? null : data);
});

Clazz.newMeth(C$, 'cacheClear$', function () {
$I$(5).info$S("cache cleared");
this.cache.clear$();
if (this.pngjCache == null ) return;
this.pngjCache=null;
$I$(5).info$S("PNGJ cache cleared");
});

Clazz.newMeth(C$, 'cacheFileByNameAdd$S$Z', function (fileName, isAdd) {
if (fileName == null  || !isAdd && fileName.equalsIgnoreCase$S("")  ) {
this.cacheClear$();
return -1;
}var data;
if (isAdd) {
fileName=$I$(15,"fixProtocol$S",[this.vwr.resolveDatabaseFormat$S(fileName)]);
data=this.getFileAsBytes$S$javajs_util_OC(fileName, null);
if (Clazz.instanceOf(data, "java.lang.String")) return 0;
this.cachePut$S$O(fileName, data);
} else {
if (fileName.endsWith$S("*")) return $I$(10,"removeMapKeys$java_util_Map$S",[this.cache, fileName.substring$I$I(0, fileName.length$() - 1)]);
data=this.cache.remove$O(C$.fixDOSName$S(fileName));
}return (data == null  ? 0 : Clazz.instanceOf(data, "java.lang.String") ? (data).length$() : (data).length);
});

Clazz.newMeth(C$, 'cacheList$', function () {
var map=Clazz.new_($I$(1,1));
for (var entry, $entry = this.cache.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) map.put$O$O(entry.getKey$(), Integer.valueOf$I($I$(10,"isAB$O",[entry.getValue$()]) ? (entry.getValue$()).length : entry.getValue$().toString().length$()));

return map;
});

Clazz.newMeth(C$, 'getCanonicalName$S', function (pathName) {
var names=p$1.getClassifiedName$S$Z.apply(this, [pathName, true]);
return (names == null  ? pathName : names[2]);
});

Clazz.newMeth(C$, 'recachePngjBytes$S$BA', function (fileName, bytes) {
if (this.pngjCache == null  || !this.pngjCache.containsKey$O(fileName) ) return;
this.pngjCache.put$O$O(fileName, bytes);
$I$(5,"info$S",["PNGJ recaching " + fileName + " (" + bytes.length + ")" ]);
});

Clazz.newMeth(C$, 'getPngjOrDroppedBytes$S$S', function (fullName, name) {
var bytes=p$1.getCachedPngjBytes$S.apply(this, [fullName]);
return (bytes == null  ? this.cacheGet$S$Z(name, true) : bytes);
}, p$1);

Clazz.newMeth(C$, 'getCachedPngjBytes$S', function (pathName) {
return (pathName == null  || this.pngjCache == null   || pathName.indexOf$S(".png") < 0  ? null : this.getJzu$().getCachedPngjBytes$org_jmol_viewer_FileManager$S(this, pathName));
}, p$1);

Clazz.newMeth(C$, 'postByteArray$S$BA', function (fileName, bytes) {
if (fileName.startsWith$S("cache://")) {
this.cachePut$S$O(fileName, bytes);
return "OK " + bytes.length + "cached" ;
}var ret=this.getBufferedInputStreamOrErrorMessageFromName$S$S$Z$Z$BA$Z$Z(fileName, null, false, false, bytes, false, true);
if (Clazz.instanceOf(ret, "java.lang.String")) return ret;
try {
ret=$I$(7).getStreamAsBytes$java_io_BufferedInputStream$javajs_util_OC(ret, null);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
try {
(ret).close$();
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.io.IOException")){
} else {
throw e1;
}
}
} else {
throw e;
}
}
return (ret == null  ? "" : $I$(7).fixUTF$BA(ret));
});

C$.$static$=function(){C$.$static$=0;
C$.SIMULATION_PROTOCOL="http://SIMULATION/";
C$.scriptFilePrefixes=Clazz.array(String, -1, ["/*file*/\"", "FILE0=\"", "FILE1=\""]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
