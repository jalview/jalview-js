(function(){var P$=Clazz.newPackage("org.jmol.io"),I$=[[0,'javajs.util.AU','java.io.BufferedReader','org.jmol.util.Logger','javajs.util.PT','org.jmol.api.Interface','javajs.util.Rdr']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileReader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isAppend'],'S',['fileNameIn','fullPathNameIn','nameAsGivenIn','fileTypeIn'],'O',['vwr','org.jmol.viewer.Viewer','atomSetCollection','java.lang.Object','+readerOrDocument','htParams','java.util.Map','bytesOrStream','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$S$S$S$S$O$java_util_Map$Z', function (vwr, fileName, fullPathName, nameAsGiven, type, reader, htParams, isAppend) {
;C$.$init$.apply(this);
this.vwr=vwr;
this.fileNameIn=(fileName == null  ? fullPathName : fileName);
this.fullPathNameIn=(fullPathName == null  ? this.fileNameIn : fullPathName);
this.nameAsGivenIn=(nameAsGiven == null  ? this.fileNameIn : nameAsGiven);
this.fileTypeIn=type;
if (reader != null ) {
if ($I$(1).isAB$O(reader) || Clazz.instanceOf(reader, "java.io.BufferedInputStream") ) {
this.bytesOrStream=reader;
reader=null;
} else if (Clazz.instanceOf(reader, "java.io.Reader") && !(Clazz.instanceOf(reader, "java.io.BufferedReader")) ) {
reader=Clazz.new_($I$(2,1).c$$java_io_Reader,[reader]);
}}this.readerOrDocument=reader;
this.htParams=htParams;
this.isAppend=isAppend;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if (!this.isAppend && this.vwr.displayLoadErrors ) this.vwr.zap$Z$Z$Z(false, true, false);
var errorMessage=null;
var t=null;
if (this.fullPathNameIn.contains$CharSequence("#_DOCACHE_")) this.readerOrDocument=C$.getChangeableReader$org_jmol_viewer_Viewer$S$S(this.vwr, this.nameAsGivenIn, this.fullPathNameIn);
if (this.readerOrDocument == null ) {
t=this.vwr.fm.getUnzippedReaderOrStreamFromName$S$O$Z$Z$Z$Z$java_util_Map(this.fullPathNameIn, this.bytesOrStream, true, false, false, true, this.htParams);
if (t == null  || Clazz.instanceOf(t, "java.lang.String") ) {
errorMessage=(t == null  ? "error opening:" + this.nameAsGivenIn : t);
if (!errorMessage.startsWith$S("NOTE:")) $I$(3).error$S("file ERROR: " + this.fullPathNameIn + "\n" + errorMessage );
this.atomSetCollection=errorMessage;
return;
}if (Clazz.instanceOf(t, "java.io.BufferedReader")) {
this.readerOrDocument=t;
} else if (Clazz.instanceOf(t, "javajs.api.ZInputStream")) {
var name=this.fullPathNameIn;
var subFileList=null;
name=name.replace$C$C("\\", "/");
if (name.indexOf$S("|") >= 0 && !name.endsWith$S(".zip") ) {
subFileList=$I$(4).split$S$S(name, "|");
name=subFileList[0];
}if (subFileList != null ) this.htParams.put$O$O("subFileList", subFileList);
var zis=t;
var zipDirectory=this.vwr.fm.getZipDirectory$S$Z$Z(name, true, true);
this.atomSetCollection=t=this.vwr.fm.getJzu$().getAtomSetCollectionOrBufferedReaderFromZip$org_jmol_viewer_Viewer$java_io_InputStream$S$SA$java_util_Map$I$Z(this.vwr, zis, name, zipDirectory, this.htParams, 1, false);
try {
zis.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}}if (Clazz.instanceOf(t, "java.io.BufferedInputStream")) this.readerOrDocument=($I$(5).getInterface$S$org_jmol_viewer_Viewer$S("javajs.util.BinaryDocument", this.vwr, "file")).setStream$java_io_BufferedInputStream$Z(t, !this.htParams.containsKey$O("isLittleEndian"));
if (this.readerOrDocument != null ) {
this.atomSetCollection=this.vwr.getModelAdapter$().getAtomSetCollectionReader$S$S$O$java_util_Map(this.fullPathNameIn, this.fileTypeIn, this.readerOrDocument, this.htParams);
if (!(Clazz.instanceOf(this.atomSetCollection, "java.lang.String"))) this.atomSetCollection=this.vwr.getModelAdapter$().getAtomSetCollection$O(this.atomSetCollection);
try {
if (Clazz.instanceOf(this.readerOrDocument, "java.io.BufferedReader")) (this.readerOrDocument).close$();
 else if (Clazz.instanceOf(this.readerOrDocument, "javajs.api.GenericBinaryDocument")) (this.readerOrDocument).close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}if (Clazz.instanceOf(this.atomSetCollection, "java.lang.String")) return;
if (!this.isAppend && !this.vwr.displayLoadErrors ) this.vwr.zap$Z$Z$Z(false, true, false);
this.vwr.fm.setFileInfo$SA(Clazz.array(String, -1, [this.fullPathNameIn, this.fileNameIn, this.nameAsGivenIn]));
});

Clazz.newMeth(C$, 'getChangeableReader$org_jmol_viewer_Viewer$S$S', function (vwr, nameAsGivenIn, fullPathNameIn) {
return $I$(6,"getBR$S",[vwr.getLigandModel$S$S$S$S(nameAsGivenIn, fullPathNameIn, "_file", null)]);
}, 1);

Clazz.newMeth(C$, 'getAtomSetCollection$', function () {
return this.atomSetCollection;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
