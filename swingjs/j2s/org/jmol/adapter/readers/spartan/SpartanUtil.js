(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.spartan"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.SB','org.jmol.util.Logger','javajs.util.Rdr','org.jmol.util.Escape','javajs.util.ZipTools','javajs.util.PT','javajs.util.Lst','java.util.StringTokenizer','org.jmol.api.Interface','java.io.BufferedInputStream']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SpartanUtil");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fm=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_viewer_FileManager', function (fm) {
this.fm=fm;
return this;
});

Clazz.newMeth(C$, 'getFileList$S$Z', function (name, isTypeCheckOnly) {
var pt=name.lastIndexOf$S(".spardir");
var info=null;
if (name.endsWith$S(".spardir.zip")) {
info=Clazz.array(String, -1, ["SpartanSmol", "Directory Entry ", name + "|output"]);
} else {
name=name.replace$C$C("\\", "/");
if (!name.endsWith$S(".spardir") && name.indexOf$S(".spardir/") < 0 ) return null;
info=(name.lastIndexOf$S("/") > pt ? Clazz.array(String, -1, ["SpartanSmol", "Directory Entry ", name + "/input", name + "/archive", name + "/parchive", name + "/Molecule:asBinaryString", name + "/proparc"]) : Clazz.array(String, -1, ["SpartanSmol", "Directory Entry ", name + "/output"]));
}if (isTypeCheckOnly) return info;
var name00=name;
var header=info[1];
var outputFileName=info[2];
var fileData=Clazz.new_($I$(1));
if (info.length == 3) {
outputFileName=p$1.spartanGetObjectAsSections$S$S$java_util_Map.apply(this, [outputFileName, header, fileData]);
fileData.put$TK$TV("OUTPUT", outputFileName);
info=p$1.spartanFileList$S$S.apply(this, [name, fileData.get$O(outputFileName)]);
if (info.length == 3) {
outputFileName=p$1.spartanGetObjectAsSections$S$S$java_util_Map.apply(this, [info[2], header, fileData]);
fileData.put$TK$TV("OUTPUT", outputFileName);
info=p$1.spartanFileList$S$S.apply(this, [info[1], fileData.get$O(outputFileName)]);
}}var sb=Clazz.new_($I$(2));
var s;
if (fileData.get$O("OUTPUT") != null ) {
sb.append$S(fileData.get$O(fileData.get$O("OUTPUT")));
}for (var i=2; i < info.length; i++) {
name=info[i];
name=p$1.spartanGetObjectAsSections$S$S$java_util_Map.apply(this, [name, header, fileData]);
$I$(3).info$S("reading " + name);
s=fileData.get$O(name);
sb.append$S(s);
}
s=sb.toString();
if (this.fm.spardirCache == null ) this.fm.spardirCache=Clazz.new_($I$(1));
this.fm.spardirCache.put$TK$TV(name00.replace$C$C("\\", "/"), s.getBytes$());
return $I$(4).getBR$S(s);
});

Clazz.newMeth(C$, 'getData$java_io_InputStream$SA', function (is, zipDirectory) {
var data=Clazz.new_($I$(2));
data.append$S("Zip File Directory: ").append$S("\n").append$S($I$(5).eAS$SA$Z(zipDirectory, true)).append$S("\n");
var fileData=Clazz.new_($I$(1));
$I$(6).getAllZipData$java_io_InputStream$SA$S$S$S$java_util_Map(is, Clazz.array(String, -1, []), "", "Molecule", "__MACOSX", fileData);
var prefix="|";
var outputData=fileData.get$O(prefix + "output");
if (outputData == null ) outputData=fileData.get$O((prefix="|" + zipDirectory[1]) + "output");
data.append$S(outputData);
var files=p$1.getSpartanFileList$S$SA.apply(this, [prefix, p$1.getSpartanDirs$S.apply(this, [outputData])]);
for (var i=2; i < files.length; i++) {
var name=files[i];
if (fileData.containsKey$O(name)) data.append$S(fileData.get$O(name));
 else data.append$S(name + "\n");
}
return data;
});

Clazz.newMeth(C$, 'spartanFileList$S$S', function (name, outputFileData) {
var dirNums=p$1.getSpartanDirs$S.apply(this, [outputFileData]);
if (dirNums.length == 0) {
if (name.endsWith$S(".spardir")) return p$1.getSpartanFileList$S$SA.apply(this, [name, Clazz.array(String, -1, ["M0001"])]);
if (name.endsWith$S(".spardir.zip")) {
if (outputFileData.indexOf$S(".zip|output") >= 0) {
var sname=name.replace$C$C("\\", "/");
var pt=name.lastIndexOf$S(".spardir");
pt=sname.lastIndexOf$S("/");
sname=name + "|" + $I$(7).rep$S$S$S(name.substring$I$I(pt + 1, name.length$() - 4), "DROP_", "") ;
return Clazz.array(String, -1, ["SpartanSmol", sname, sname + "/output"]);
}}}return p$1.getSpartanFileList$S$SA.apply(this, [name, dirNums]);
}, p$1);

Clazz.newMeth(C$, 'getSpartanDirs$S', function (outputFileData) {
if (outputFileData == null ) return Clazz.array(String, -1, []);
var v=Clazz.new_($I$(8));
var token;
var lastToken="";
if (outputFileData.startsWith$S("java.io.FileNotFoundException") || outputFileData.startsWith$S("FILE NOT FOUND") || outputFileData.indexOf$S("<html") >= 0  ) return Clazz.array(String, [0]);
try {
var tokens=Clazz.new_($I$(9).c$$S$S,[outputFileData, " \t\r\n"]);
while (tokens.hasMoreTokens$()){
if ((token=tokens.nextToken$()).equals$O(")")) v.addLast$TV(lastToken);
 else if (token.equals$O("Start-") && tokens.nextToken$().equals$O("Molecule") ) v.addLast$TV($I$(7).split$S$S(tokens.nextToken$(), "\"")[1]);
 else if (token.equals$O("Molecules")) {
var n=$I$(7).parseInt$S(lastToken);
for (var i=1; i <= n; i++) {
var s="0000" + i;
v.addLast$TV("M" + s.substring$I(s.length$() - 4));
}
}lastToken=token;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return (v.size$() == 0 ? Clazz.array(String, -1, ["M0001"]) : v.toArray$TTA(Clazz.array(String, [v.size$()])));
}, p$1);

Clazz.newMeth(C$, 'getSpartanFileList$S$SA', function (name, dirNums) {
var files=Clazz.array(String, [2 + dirNums.length * 6]);
files[0]="SpartanSmol";
files[1]="Directory Entry ";
var pt=2;
name=name.replace$C$C("\\", "/");
if (name.endsWith$S("/")) name=name.substring$I$I(0, name.length$() - 1);
var sep=(name.equals$O("|") ? "" : name.endsWith$S(".zip") ? "|" : "/");
for (var i=0; i < dirNums.length; i++) {
var path=name + sep;
var s=dirNums[i];
path += ($I$(7).isDigit$C(s.charAt$I(0)) ? "Profile." + s : s) + "/";
files[pt++]=path + "#JMOL_MODEL " + dirNums[i] ;
files[pt++]=path + "input";
files[pt++]=path + "archive";
files[pt++]=path + "parchive";
files[pt++]=path + "Molecule:asBinaryString";
files[pt++]=path + "proparc";
}
return files;
}, p$1);

Clazz.newMeth(C$, 'spartanGetObjectAsSections$S$S$java_util_Map', function (name, header, fileData) {
if (name == null ) return null;
var subFileList=null;
var asBinaryString=false;
var path=name.replace$C$C("\\", "/");
if (name.indexOf$S(":asBinaryString") >= 0) {
asBinaryString=true;
name=name.substring$I$I(0, name.indexOf$S(":asBinaryString"));
}var sb=null;
if (fileData.containsKey$O(path)) return path;
if (path.indexOf$S("#JMOL_MODEL ") >= 0) {
fileData.put$TK$TV(path, path + "\n");
return path;
}var fullName=name;
if (name.indexOf$S("|") >= 0) {
subFileList=$I$(7).split$S$S(name, "|");
name=subFileList[0];
}var bis=null;
try {
var t=this.fm.getBufferedInputStreamOrErrorMessageFromName$S$S$Z$Z$BA$Z$Z(name, fullName, false, false, null, false, true);
if (Clazz.instanceOf(t, "java.lang.String")) {
fileData.put$TK$TV(path, t + "\n");
return path;
}name=name.replace$C$C("\\", "/");
bis=t;
if ($I$(4).isCompoundDocumentS$java_io_InputStream(bis)) {
var doc=$I$(10).getInterface$S$org_jmol_viewer_Viewer$S("javajs.util.CompoundDocument", this.fm.vwr, "file");
doc.setDocStream$java_io_BufferedInputStream(bis);
doc.getAllDataMapped$S$S$java_util_Map(name, "Molecule", fileData);
} else if ($I$(4).isZipS$java_io_InputStream(bis)) {
$I$(6).getAllZipData$java_io_InputStream$SA$S$S$S$java_util_Map(bis, subFileList, name, "Molecule", "__MACOSX", fileData);
} else if (asBinaryString) {
var bd=$I$(10).getInterface$S$org_jmol_viewer_Viewer$S("javajs.util.BinaryDocument", this.fm.vwr, "file");
bd.setStream$java_io_BufferedInputStream$Z(bis, false);
sb=Clazz.new_($I$(2));
if (header != null ) sb.append$S("BEGIN Directory Entry " + path + "\n" );
try {
while (true)sb.append$S(Integer.toHexString$I(bd.readByte$() & 255)).appendC$C(" ");

} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
sb.appendC$C("\n");
} else {
throw e1;
}
}
if (header != null ) sb.append$S("\nEND Directory Entry " + path + "\n" );
fileData.put$TK$TV(path, sb.toString());
} else {
var br=$I$(4).getBufferedReader$java_io_BufferedInputStream$S($I$(4).isGzipS$java_io_InputStream(bis) ? Clazz.new_($I$(11).c$$java_io_InputStream,[$I$(6).newGZIPInputStream$java_io_InputStream(bis)]) : bis, null);
var line;
sb=Clazz.new_($I$(2));
if (header != null ) sb.append$S("BEGIN Directory Entry " + path + "\n" );
while ((line=br.readLine$()) != null ){
sb.append$S(line);
sb.appendC$C("\n");
}
br.close$();
if (header != null ) sb.append$S("\nEND Directory Entry " + path + "\n" );
fileData.put$TK$TV(path, sb.toString());
}} catch (ioe) {
if (Clazz.exceptionOf(ioe,"Exception")){
fileData.put$TK$TV(path, ioe.toString());
} else {
throw ioe;
}
}
if (bis != null ) try {
bis.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (!fileData.containsKey$O(path)) fileData.put$TK$TV(path, "FILE NOT FOUND: " + path + "\n" );
return path;
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
