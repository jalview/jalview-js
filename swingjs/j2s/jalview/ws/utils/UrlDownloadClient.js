(function(){var P$=Clazz.newPackage("jalview.ws.utils"),I$=[[0,'java.nio.file.Files','java.net.URL','java.nio.channels.Channels','java.io.FileOutputStream','java.nio.file.Paths','java.nio.file.StandardCopyOption','jalview.util.Platform']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UrlDownloadClient");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'download$S$S', function (urlstring, outfile) {
var fos=null;
var rbc=null;
var temp=null;
try {
temp=$I$(1).createTempFile$S$S$java_nio_file_attribute_FileAttributeA(".jalview_", ".tmp", []);
var url=Clazz.new_($I$(2,1).c$$S,[urlstring]);
rbc=$I$(3,"newChannel$java_io_InputStream",[url.openStream$()]);
fos=Clazz.new_([temp.toString()],$I$(4,1).c$$S);
fos.getChannel$().transferFrom$java_nio_channels_ReadableByteChannel$J$J(rbc, 0, 9223372036854775807);
$I$(1,"copy$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA",[temp, $I$(5).get$S$SA(outfile, []), [$I$(6).REPLACE_EXISTING]]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw e;
} else {
throw e;
}
} finally {
try {
if (fos != null ) {
fos.close$();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.out.println$S("Exception while closing download file output stream: " + e.getMessage$());
} else {
throw e;
}
}
try {
if (rbc != null ) {
rbc.close$();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.out.println$S("Exception while closing download channel: " + e.getMessage$());
} else {
throw e;
}
}
try {
if (temp != null ) {
$I$(1).deleteIfExists$java_nio_file_Path(temp);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.out.println$S("Exception while deleting download temp file: " + e.getMessage$());
} else {
throw e;
}
}
}
}, 1);

Clazz.newMeth(C$, 'download$S$java_io_File', function (urlstring, tempFile) {
if (!$I$(7).setFileBytes$java_io_File$S(tempFile, urlstring)) {
C$.download$S$S(urlstring, tempFile.toString());
}}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
