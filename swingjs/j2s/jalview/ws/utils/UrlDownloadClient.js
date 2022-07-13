(function(){var P$=Clazz.newPackage("jalview.ws.utils"),I$=[[0,'java.nio.file.Files','java.nio.file.attribute.FileAttribute','java.net.URL','java.nio.channels.Channels','java.io.FileOutputStream','java.nio.file.Paths','java.nio.file.CopyOption','java.nio.file.StandardCopyOption','jalview.util.Platform']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UrlDownloadClient");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'download$S$S',  function (urlstring, outfile) {
var fos=null;
var rbc=null;
var temp=null;
try {
temp=$I$(1,"createTempFile$S$S$java_nio_file_attribute_FileAttributeA",[".jalview_", ".tmp", Clazz.array($I$(2), -1, [])]);
var url=Clazz.new_($I$(3,1).c$$S,[urlstring]);
rbc=$I$(4,"newChannel$java_io_InputStream",[url.openStream$()]);
fos=Clazz.new_([temp.toString()],$I$(5,1).c$$S);
fos.getChannel$().transferFrom$java_nio_channels_ReadableByteChannel$J$J(rbc, 0, [16777215,549755813887,1]);
$I$(1,"copy$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA",[temp, $I$(6,"get$S$SA",[outfile, Clazz.array(String, -1, [])]), Clazz.array($I$(7), -1, [$I$(8).REPLACE_EXISTING])]);
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

Clazz.newMeth(C$, 'download$S$java_io_File',  function (urlstring, tempFile) {
if (!$I$(9).setFileBytes$java_io_File$S(tempFile, urlstring)) {
C$.download$S$S(urlstring, tempFile.toString());
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
