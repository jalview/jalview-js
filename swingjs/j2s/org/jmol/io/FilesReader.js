(function(){var P$=Clazz.newPackage("org.jmol.io"),I$=[[0,'org.jmol.util.Logger','javajs.util.PT','org.jmol.io.FileReader','javajs.util.Rdr','org.jmol.api.Interface']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FilesReader", null, null, 'org.jmol.api.JmolFilesReaderInterface');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fm=null;
this.vwr=null;
this.fullPathNamesIn=null;
this.namesAsGivenIn=null;
this.fileTypesIn=null;
this.atomSetCollection=null;
this.dataReaders=null;
this.htParams=null;
this.isAppend=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_viewer_FileManager$org_jmol_viewer_Viewer$SA$SA$SA$javajs_util_DataReaderA$java_util_Map$Z', function (fileManager, vwr, name, nameAsGiven, types, readers, htParams, isAppend) {
this.fm=fileManager;
this.vwr=vwr;
this.fullPathNamesIn=name;
this.namesAsGivenIn=nameAsGiven;
this.fileTypesIn=types;
this.dataReaders=readers;
this.htParams=htParams;
this.isAppend=isAppend;
});

Clazz.newMeth(C$, 'run$', function () {
if (!this.isAppend && this.vwr.displayLoadErrors ) this.vwr.zap$Z$Z$Z(false, true, false);
var getReadersOnly=!this.vwr.displayLoadErrors;
this.atomSetCollection=this.vwr.getModelAdapter$().getAtomSetCollectionReaders$org_jmol_api_JmolFilesReaderInterface$SA$SA$java_util_Map$Z(this, this.fullPathNamesIn, this.fileTypesIn, this.htParams, getReadersOnly);
this.dataReaders=null;
if (getReadersOnly && !(Clazz.instanceOf(this.atomSetCollection, "java.lang.String")) ) {
this.atomSetCollection=this.vwr.getModelAdapter$().getAtomSetCollectionFromSet$O$O$java_util_Map(this.atomSetCollection, null, this.htParams);
}if (Clazz.instanceOf(this.atomSetCollection, "java.lang.String")) {
$I$(1).error$S("file ERROR: " + this.atomSetCollection);
return;
}if (!this.isAppend && !this.vwr.displayLoadErrors ) this.vwr.zap$Z$Z$Z(false, true, false);
this.fm.setFileInfo$SA(Clazz.array(String, -1, [this.dataReaders == null  ? this.fullPathNamesIn[0] : "String[]"]));
});

Clazz.newMeth(C$, 'getBufferedReaderOrBinaryDocument$I$Z', function (i, forceBinary) {
if (this.dataReaders != null ) return (forceBinary ? null : this.dataReaders[i].getBufferedReader$());
var name=this.fullPathNamesIn[i];
var subFileList=null;
this.htParams.remove$O("subFileList");
if (name.indexOf$S("|") >= 0 && !this.htParams.containsKey$O("isStateScript") ) {
subFileList=$I$(2).split$S$S(name, "|");
name=subFileList[0];
}if (name.contains$CharSequence("#_DOCACHE_")) return $I$(3).getChangeableReader$org_jmol_viewer_Viewer$S$S(this.vwr, this.namesAsGivenIn[i], name);
var t=this.fm.getUnzippedReaderOrStreamFromName$S$O$Z$Z$Z$Z$java_util_Map(name, null, true, forceBinary, false, true, this.htParams);
if (Clazz.instanceOf(t, "java.io.BufferedInputStream") && $I$(4).isZipS$java_io_InputStream(t) ) {
if (subFileList != null ) this.htParams.put$TK$TV("subFileList", subFileList);
var zipDirectory=this.fm.getZipDirectory$S$Z$Z(name, true, true);
t=this.fm.getBufferedInputStreamOrErrorMessageFromName$S$S$Z$Z$BA$Z$Z(name, this.fullPathNamesIn[i], false, false, null, false, true);
t=this.fm.getJzu$().getAtomSetCollectionOrBufferedReaderFromZip$org_jmol_viewer_Viewer$java_io_InputStream$S$SA$java_util_Map$I$Z(this.vwr, t, name, zipDirectory, this.htParams, 1, true);
}return (Clazz.instanceOf(t, "java.io.BufferedInputStream") ? ($I$(5).getInterface$S$org_jmol_viewer_Viewer$S("javajs.util.BinaryDocument", this.vwr, "file")).setStream$java_io_BufferedInputStream$Z(t, true) : Clazz.instanceOf(t, "java.io.BufferedReader") || Clazz.instanceOf(t, "javajs.api.GenericBinaryDocument")  ? t : t == null  ? "error opening:" + this.namesAsGivenIn[i] : t);
});

Clazz.newMeth(C$, 'getAtomSetCollection$', function () {
return this.atomSetCollection;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
