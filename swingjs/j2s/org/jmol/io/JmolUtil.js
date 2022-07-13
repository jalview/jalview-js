(function(){var P$=Clazz.newPackage("org.jmol.io"),p$1={},I$=[[0,'javajs.util.AU','javajs.util.OC','java.net.URL','javajs.util.Rdr','org.jmol.util.Logger','org.jmol.viewer.FileManager','javajs.util.Lst','java.util.Hashtable','javajs.util.ZipTools','org.jmol.api.Interface','javajs.util.PT','org.jmol.adapter.smarter.AtomSetCollection']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JmolUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getImage$org_jmol_viewer_Viewer$O$S$Z', function (vwr, fullPathNameOrBytes, echoName, forceSync) {
var image=null;
var info=null;
var apiPlatform=vwr.apiPlatform;
var createImage=false;
var fullPathName="" + fullPathNameOrBytes;
if (Clazz.instanceOf(fullPathNameOrBytes, "java.lang.String")) {
var isBMP=fullPathName.toUpperCase$().endsWith$S("BMP");
if (forceSync || fullPathName.indexOf$S("|") > 0  || isBMP ) {
var ret=vwr.fm.getFileAsBytes$S$javajs_util_OC(fullPathName, null);
if (!$I$(1).isAB$O(ret)) return "" + ret;
if (vwr.isJSNoAWT) info=Clazz.array(java.lang.Object, -1, [echoName, fullPathNameOrBytes, ret]);
 else image=apiPlatform.createImage$O(ret);
} else if ($I$(2).urlTypeIndex$S(fullPathName) >= 0) {
if (vwr.isJSNoAWT) info=Clazz.array(java.lang.Object, -1, [echoName, fullPathNameOrBytes, null]);
 else try {
image=apiPlatform.createImage$O(Clazz.new_($I$(3,1).c$$java_net_URL$S$java_net_URLStreamHandler,[null, fullPathName, null]));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return "bad URL: " + fullPathName;
} else {
throw e;
}
}
} else {
createImage=true;
}} else if (vwr.isJSNoAWT) {
info=Clazz.array(java.lang.Object, -1, [echoName, $I$(4).guessMimeTypeForBytes$BA(fullPathNameOrBytes), fullPathNameOrBytes]);
} else {
createImage=true;
}if (createImage) image=apiPlatform.createImage$O("\u0001close".equals$O(fullPathNameOrBytes) ? "\u0001close" + echoName : fullPathNameOrBytes);
 else if (info != null ) image=apiPlatform.createImage$O(info);
{
return image;
}
});

Clazz.newMeth(C$, 'getAtomSetCollectionOrBufferedReaderFromZip$org_jmol_viewer_Viewer$java_io_InputStream$S$SA$java_util_Map$I$Z', function (vwr, is, fileName, zipDirectory, htParams, subFilePtr, asBufferedReader) {
var adapter=vwr.getModelAdapter$();
var doCombine=(subFilePtr == 1);
htParams.put$O$O("zipSet", fileName);
var subFileList=htParams.get$O("subFileList");
if (subFileList == null ) subFileList=p$1.getSpartanSubfiles$SA.apply(this, [zipDirectory]);
var subFileName=(subFileList == null  || subFilePtr >= subFileList.length  ? htParams.get$O("SubFileName") : subFileList[subFilePtr]);
if (subFileName != null  && (subFileName.startsWith$S("/") || subFileName.startsWith$S("\\") ) ) subFileName=subFileName.substring$I(1);
var selectedFile=0;
if (subFileName == null  && htParams.containsKey$O("modelNumber") ) {
selectedFile=(htParams.get$O("modelNumber")).intValue$();
if (selectedFile > 0 && doCombine ) htParams.remove$O("modelNumber");
}var manifest=htParams.get$O("manifest");
var useFileManifest=(manifest == null );
if (useFileManifest) manifest=(zipDirectory.length > 0 ? zipDirectory[0] : "");
var haveManifest=(manifest.length$() > 0);
if (haveManifest) {
if ($I$(5).debugging) $I$(5).debug$S("manifest for  " + fileName + ":\n" + manifest );
}var ignoreErrors=(manifest.indexOf$S("IGNORE_ERRORS") >= 0);
var selectAll=(manifest.indexOf$S("IGNORE_MANIFEST") >= 0);
var exceptFiles=(manifest.indexOf$S("EXCEPT_FILES") >= 0);
if (selectAll || subFileName != null  ) haveManifest=false;
if (useFileManifest && haveManifest ) {
var path=$I$(6).getManifestScriptPath$S(manifest);
if (path != null ) {
return "NOTE: file recognized as a script file: " + fileName + path + "\n" ;
}}var vCollections=Clazz.new_($I$(7,1));
var htCollections=(haveManifest ? Clazz.new_($I$(8,1)) : null);
var nFiles=0;
try {
var spartanData=(p$1.isSpartanZip$SA.apply(this, [zipDirectory]) ? vwr.fm.spartanUtil$().getData$java_io_InputStream$SA(is, zipDirectory) : null);
var ret;
if (spartanData != null ) {
var reader=$I$(4,"getBR$S",[spartanData.toString()]);
if (asBufferedReader) return reader;
ret=adapter.getAtomSetCollectionFromReader$S$O$java_util_Map(fileName, reader, htParams);
if (Clazz.instanceOf(ret, "java.lang.String")) return ret;
if (Clazz.instanceOf(ret, "org.jmol.adapter.smarter.AtomSetCollection")) {
var atomSetCollection=ret;
if (atomSetCollection.errorMessage != null ) {
if (ignoreErrors) return null;
return atomSetCollection.errorMessage;
}return atomSetCollection;
}if (ignoreErrors) return null;
return "unknown reader error";
}if (Clazz.instanceOf(is, "java.io.BufferedInputStream") && $I$(4).isPngZipStream$java_io_InputStream(is) ) is=$I$(9).getPngZipStream$java_io_BufferedInputStream$Z(is, true);
var zis=$I$(9).newZipInputStream$java_io_InputStream(is);
var ze;
if (haveManifest) manifest='|' + manifest.replace$C$C("\r", "|").replace$C$C("\n", "|") + '|' ;
while ((ze=zis.getNextEntry$()) != null  && (selectedFile <= 0 || vCollections.size$() < selectedFile ) ){
if (ze.isDirectory$()) continue;
var thisEntry=ze.getName$();
if (subFileName != null  && !thisEntry.equals$O(subFileName) ) continue;
if (subFileName != null ) htParams.put$O$O("subFileName", subFileName);
if (thisEntry.startsWith$S("JmolManifest") || haveManifest && exceptFiles == manifest.indexOf$S("|" + thisEntry + "|" ) >= 0   ) continue;
var bytes=$I$(4,"getLimitedStreamBytes$java_io_InputStream$J",[zis, ze.getSize$()]);
if ($I$(4).isGzipB$BA(bytes)) bytes=$I$(4,"getLimitedStreamBytes$java_io_InputStream$J",[$I$(9).getUnGzippedInputStream$BA(bytes), -1]);
if ($I$(4).isZipB$BA(bytes) || $I$(4).isPngZipB$BA(bytes) ) {
var bis=$I$(4).getBIS$BA(bytes);
var zipDir2=$I$(9).getZipDirectoryAndClose$java_io_BufferedInputStream$S(bis, "JmolManifest");
bis=$I$(4).getBIS$BA(bytes);
var atomSetCollections=this.getAtomSetCollectionOrBufferedReaderFromZip$org_jmol_viewer_Viewer$java_io_InputStream$S$SA$java_util_Map$I$Z(vwr, bis, fileName + "|" + thisEntry , zipDir2, htParams, ++subFilePtr, asBufferedReader);
if (Clazz.instanceOf(atomSetCollections, "java.lang.String")) {
if (ignoreErrors) continue;
return atomSetCollections;
} else if (Clazz.instanceOf(atomSetCollections, "org.jmol.adapter.smarter.AtomSetCollection") || Clazz.instanceOf(atomSetCollections, "javajs.util.Lst") ) {
if (haveManifest && !exceptFiles ) htCollections.put$O$O(thisEntry, atomSetCollections);
 else vCollections.addLast$O(atomSetCollections);
} else if (Clazz.instanceOf(atomSetCollections, "java.io.BufferedReader")) {
if (doCombine) zis.close$();
return atomSetCollections;
} else {
if (ignoreErrors) continue;
zis.close$();
return "unknown zip reader error";
}} else if ($I$(4).isPickleB$BA(bytes)) {
var bis=$I$(4).getBIS$BA(bytes);
if (doCombine) zis.close$();
return bis;
} else {
var sData;
if ($I$(4).isCompoundDocumentB$BA(bytes)) {
var jd=$I$(10).getInterface$S$org_jmol_viewer_Viewer$S("javajs.util.CompoundDocument", vwr, "file");
jd.setDocStream$java_io_BufferedInputStream($I$(4).getBIS$BA(bytes));
sData=jd.getAllDataFiles$S$S("Molecule", "Input").toString();
} else {
sData=$I$(4).fixUTF$BA(bytes);
}var reader=$I$(4).getBR$S(sData);
if (asBufferedReader) {
if (doCombine) zis.close$();
return reader;
}var fname=fileName + "|" + ze.getName$() ;
ret=adapter.getAtomSetCollectionFromReader$S$O$java_util_Map(fname, reader, htParams);
if (!(Clazz.instanceOf(ret, "org.jmol.adapter.smarter.AtomSetCollection"))) {
if (ignoreErrors) continue;
zis.close$();
return "" + ret;
}if (haveManifest && !exceptFiles ) htCollections.put$O$O(thisEntry, ret);
 else vCollections.addLast$O(ret);
var a=ret;
if (a.errorMessage != null ) {
if (ignoreErrors) continue;
zis.close$();
return a.errorMessage;
}}}
if (doCombine) zis.close$();
if (haveManifest && !exceptFiles ) {
var list=$I$(11).split$S$S(manifest, "|");
for (var i=0; i < list.length; i++) {
var file=list[i];
if (file.length$() == 0 || file.indexOf$S("#") == 0 ) continue;
if (htCollections.containsKey$O(file)) vCollections.addLast$O(htCollections.get$O(file));
 else if ($I$(5).debugging) $I$(5).debug$S("manifested file " + file + " was not found in " + fileName );
}
}if (!doCombine) return vCollections;
var result=(vCollections.size$() == 1 && Clazz.instanceOf(vCollections.get$I(0), "org.jmol.adapter.smarter.AtomSetCollection")  ? vCollections.get$I(0) : Clazz.new_($I$(12,1).c$$S$org_jmol_adapter_smarter_AtomSetCollectionReader$org_jmol_adapter_smarter_AtomSetCollectionA$javajs_util_Lst,["Array", null, null, vCollections]));
if (result.errorMessage != null ) {
if (ignoreErrors) return null;
return result.errorMessage;
}if (nFiles == 1) selectedFile=1;
if (selectedFile > 0 && selectedFile <= vCollections.size$() ) return vCollections.get$I(selectedFile - 1);
return result;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
if (ignoreErrors) return null;
$I$(5).error$S("" + e);
return "" + e;
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var er = e$$;
{
$I$(5).errorEx$S$Throwable(null, er);
return "" + er;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'getCachedPngjBytes$org_jmol_viewer_FileManager$S', function (fm, pathName) {
if (pathName.startsWith$S("file:///")) pathName="file:" + pathName.substring$I(7);
$I$(5).info$S("JmolUtil checking PNGJ cache for " + pathName);
var shortName=p$1.shortSceneFilename$S.apply(this, [pathName]);
if (fm.pngjCache == null  && !p$1.clearAndCachePngjFile$org_jmol_viewer_FileManager$SA.apply(this, [fm, Clazz.array(String, -1, [pathName, null])]) ) return null;
var cache=fm.pngjCache;
var isMin=(pathName.indexOf$S(".min.") >= 0);
if (!isMin) {
var cName=fm.getCanonicalName$S($I$(4).getZipRoot$S(pathName));
if (!cache.containsKey$O(cName) && !p$1.clearAndCachePngjFile$org_jmol_viewer_FileManager$SA.apply(this, [fm, Clazz.array(String, -1, [pathName, null])]) ) return null;
if (pathName.indexOf$S("|") < 0) shortName=cName;
}if (cache.containsKey$O(shortName)) {
$I$(5).info$S("FileManager using memory cache " + shortName);
return fm.pngjCache.get$O(shortName);
}if (!isMin || !p$1.clearAndCachePngjFile$org_jmol_viewer_FileManager$SA.apply(this, [fm, Clazz.array(String, -1, [pathName, null])]) ) return null;
$I$(5).info$S("FileManager using memory cache " + shortName);
return cache.get$O(shortName);
});

Clazz.newMeth(C$, 'clearAndCachePngjFile$org_jmol_viewer_FileManager$SA', function (fm, data) {
fm.pngjCache=Clazz.new_($I$(8,1));
if (data == null  || data[0] == null  ) return false;
data[0]=$I$(4).getZipRoot$S(data[0]);
var shortName=p$1.shortSceneFilename$S.apply(this, [data[0]]);
var cache=fm.pngjCache;
try {
data[1]=$I$(9,"cacheZipContents$java_io_BufferedInputStream$S$java_util_Map$Z",[$I$(9,"getPngZipStream$java_io_BufferedInputStream$Z",[fm.getBufferedInputStreamOrErrorMessageFromName$S$S$Z$Z$BA$Z$Z(data[0], null, false, false, null, false, true), true]), shortName, cache, false]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
if (data[1] == null ) return false;
var bytes=data[1].getBytes$();
cache.put$O$O(fm.getCanonicalName$S(data[0]), bytes);
if (shortName.indexOf$S("_scene_") >= 0) {
cache.put$O$O(p$1.shortSceneFilename$S.apply(this, [data[0]]), bytes);
bytes=cache.remove$O(shortName + "|state.spt");
if (bytes != null ) cache.put$O$O(p$1.shortSceneFilename$S.apply(this, [data[0] + "|state.spt"]), bytes);
}return true;
}, p$1);

Clazz.newMeth(C$, 'shortSceneFilename$S', function (pathName) {
var pt=pathName.indexOf$S("_scene_") + 7;
if (pt < 7) return pathName;
var s="";
if (pathName.endsWith$S("|state.spt")) {
var pt1=pathName.indexOf$I$I(".", pt);
if (pt1 < 0) return pathName;
s=pathName.substring$I$I(pt, pt1);
}var pt2=pathName.lastIndexOf$S("|");
return pathName.substring$I$I(0, pt) + s + (pt2 > 0 ? pathName.substring$I(pt2) : "") ;
}, p$1);

Clazz.newMeth(C$, 'getSpartanSubfiles$SA', function (zipDirectory) {
var name=(zipDirectory.length < 2 ? null : zipDirectory[1]);
return (name == null  || zipDirectory.length != 2  || !name.endsWith$S(".spardir/")  ? null : Clazz.array(String, -1, ["", $I$(11).trim$S$S(name, "/")]));
}, p$1);

Clazz.newMeth(C$, 'isSpartanZip$SA', function (zipDirectory) {
for (var i=1; i < zipDirectory.length; i++) if (zipDirectory[i].endsWith$S(".spardir/") || zipDirectory[i].indexOf$S("_spartandir") >= 0 ) return true;

return false;
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
