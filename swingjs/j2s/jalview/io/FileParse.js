(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'Error','jalview.util.MessageManager','java.io.File','java.io.FileInputStream','jalview.bin.Console','java.io.BufferedInputStream','java.io.InputStreamReader','java.io.BufferedReader','java.util.zip.GZIPInputStream','java.net.URL','jalview.util.Platform','jalview.io.DataSourceType','java.io.ByteArrayInputStream','java.io.StringReader','java.io.FileReader']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileParse");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dataName="unknown source";
this.inFile=null;
this.index=1;
this.suffixSeparator="#";
this.newline=System.getProperty$S("line.separator");
this.suffix=null;
this.dataSourceType=null;
this.dataIn=null;
this.errormessage="UNINITIALISED SOURCE";
this.error=true;
this.warningMessage=null;
this.READAHEAD_LIMIT=2048;
},1);

C$.$fields$=[['Z',['error'],'C',['suffixSeparator'],'I',['index','READAHEAD_LIMIT'],'S',['dataName','newline','suffix','errormessage','warningMessage'],'O',['inFile','java.io.File','bytes','byte[]','viewport','jalview.api.AlignViewportI','exportSettings','jalview.api.AlignExportSettingsI','dataSourceType','jalview.io.DataSourceType','dataIn','java.io.BufferedReader']]]

Clazz.newMeth(C$, 'getBytes$',  function () {
return this.bytes;
});

Clazz.newMeth(C$, 'setNewlineString$S',  function (nl) {
this.newline=nl;
});

Clazz.newMeth(C$, 'getNewlineString$',  function () {
return this.newline;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse',  function (from) {
;C$.$init$.apply(this);
if (from == null ) {
throw Clazz.new_([$I$(2).getString$S("error.implementation_error_null_fileparse")],$I$(1,1).c$$S);
}if (from === this ) {
return;
}this.index=++from.index;
this.inFile=from.inFile;
this.suffixSeparator=from.suffixSeparator;
this.suffix=from.suffix;
this.errormessage=from.errormessage;
this.error=false;
this.dataSourceType=from.dataSourceType;
this.dataIn=from.dataIn;
if (this.dataIn != null ) {
this.mark$();
}this.dataName=from.dataName;
}, 1);

Clazz.newMeth(C$, 'checkFileSource$S',  function (fileStr) {
this.error=false;
this.inFile=Clazz.new_($I$(3,1).c$$S,[fileStr]);
if (!this.inFile.exists$()) {
this.errormessage="FILE NOT FOUND";
this.error=true;
}if (!this.inFile.canRead$()) {
this.errormessage="FILE CANNOT BE OPENED FOR READING";
this.error=true;
}if (this.inFile.isDirectory$()) {
this.errormessage="FILE IS A DIRECTORY";
this.error=true;
}if (!this.error) {
try {
this.dataIn=p$1.checkForGzipStream$java_io_InputStream.apply(this, [Clazz.new_($I$(4,1).c$$S,[fileStr])]);
this.dataName=fileStr;
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
this.warningMessage="Failed to resolve " + fileStr + " as a data source. (" + x.getMessage$() + ")" ;
this.error=true;
} else {
throw x;
}
}
;}return this.error;
}, p$1);

Clazz.newMeth(C$, 'isGzipStream$java_io_InputStream',  function (input) {
if (!input.markSupported$()) {
$I$(5).error$S("FileParse.izGzipStream: input stream must support mark/reset");
return false;
}input.mark$I(4);
var bytes=Clazz.array(Byte.TYPE, [2]);
var read=input.read$BA(bytes);
input.reset$();
if (read != bytes.length) {
return false;
}var header=(bytes[0] & 255) | ((bytes[1] << 8) & 65280);
return (35615 == header);
}, 1);

Clazz.newMeth(C$, 'checkForGzipStream$java_io_InputStream',  function (input) {
if (!input.markSupported$()) {
input=Clazz.new_($I$(6,1).c$$java_io_InputStream$I,[input, 16]);
}if (C$.isGzipStream$java_io_InputStream(input)) {
return p$1.getGzipReader$java_io_InputStream.apply(this, [input]);
}var isReader=Clazz.new_($I$(7,1).c$$java_io_InputStream,[input]);
var toReadFrom=Clazz.new_($I$(8,1).c$$java_io_Reader,[isReader]);
return toReadFrom;
}, p$1);

Clazz.newMeth(C$, 'getGzipReader$java_io_InputStream',  function (inputStream) {
var inData=Clazz.new_([Clazz.new_([Clazz.new_($I$(9,1).c$$java_io_InputStream,[inputStream])],$I$(7,1).c$$java_io_InputStream)],$I$(8,1).c$$java_io_Reader);
inData.mark$I(2048);
inData.read$();
inData.reset$();
return inData;
}, p$1);

Clazz.newMeth(C$, 'checkURLSource$S',  function (urlStr) {
this.errormessage="URL NOT FOUND";
var url=Clazz.new_($I$(10,1).c$$S,[urlStr]);
var _conn=url.openConnection$();
if (Clazz.instanceOf(_conn, "java.net.HttpURLConnection")) {
var conn=_conn;
var rc=conn.getResponseCode$();
if (rc != 200) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Response status from " + urlStr + " was " + rc ]);
}} else {
try {
this.dataIn=p$1.checkForGzipStream$java_io_InputStream.apply(this, [_conn.getInputStream$()]);
this.dataName=urlStr;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ex = e$$;
{
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S$Throwable,["Failed to handle non-HTTP URI stream", ex]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S$Throwable,["Failed to determine type of input stream for given URI", ex]);
}
} else {
throw e$$;
}
}
return;
}var encoding=_conn.getContentEncoding$();
var contentType=_conn.getContentType$();
var isgzipped="application/x-gzip".equalsIgnoreCase$S(contentType) || "gzip".equals$O(encoding) ;
var e=null;
var inputStream=_conn.getInputStream$();
if (isgzipped) {
try {
this.dataIn=p$1.getGzipReader$java_io_InputStream.apply(this, [inputStream]);
this.dataName=urlStr;
} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S$Throwable,[$I$(2).getString$S("exception.failed_to_resolve_gzip_stream"), e]);
} else {
throw e1;
}
}
return;
}this.dataIn=Clazz.new_([Clazz.new_($I$(7,1).c$$java_io_InputStream,[inputStream])],$I$(8,1).c$$java_io_Reader);
this.dataName=urlStr;
return;
}, p$1);

Clazz.newMeth(C$, 'extractSuffix$S',  function (fileStr) {
var sfpos=fileStr.lastIndexOf$I(this.suffixSeparator);
if (sfpos > -1 && sfpos < fileStr.length$() - 1 ) {
this.suffix=fileStr.substring$I(sfpos + 1);
return fileStr.substring$I$I(0, sfpos);
}return null;
}, p$1);

Clazz.newMeth(C$, 'c$$java_io_BufferedReader$S$jalview_io_DataSourceType',  function (source, originString, sourceType) {
;C$.$init$.apply(this);
this.dataSourceType=sourceType;
this.error=false;
this.inFile=null;
this.dataName=originString;
this.dataIn=source;
try {
if (this.dataIn.markSupported$()) {
this.dataIn.mark$I(2048);
}} catch (q) {
if (Clazz.exceptionOf(q,"java.io.IOException")){
} else {
throw q;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$O$jalview_io_DataSourceType',  function (file, sourceType) {
;C$.$init$.apply(this);
if (Clazz.instanceOf(file, "java.io.File")) {
p$1.parse$java_io_File$S$jalview_io_DataSourceType$Z.apply(this, [file, (file).getPath$(), sourceType, true]);
} else {
p$1.parse$java_io_File$S$jalview_io_DataSourceType$Z.apply(this, [null, file.toString(), sourceType, false]);
}}, 1);

Clazz.newMeth(C$, 'parse$java_io_File$S$jalview_io_DataSourceType$Z',  function (file, fileStr, sourceType, isFileObject) {
this.bytes=$I$(11).getFileBytes$java_io_File(file);
this.dataSourceType=sourceType;
this.error=false;
if (sourceType === $I$(12).FILE ) {
if (this.bytes != null ) {
this.inFile=file;
this.dataIn=Clazz.new_([Clazz.new_([Clazz.new_($I$(13,1).c$$BA,[this.bytes])],$I$(7,1).c$$java_io_InputStream)],$I$(8,1).c$$java_io_Reader);
this.dataName=fileStr;
} else if (p$1.checkFileSource$S.apply(this, [fileStr])) {
var suffixLess=p$1.extractSuffix$S.apply(this, [fileStr]);
if (suffixLess != null ) {
if (p$1.checkFileSource$S.apply(this, [suffixLess])) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(2,"formatMessage$S$SA",["exception.problem_opening_file_also_tried", Clazz.array(String, -1, [this.inFile.getName$(), suffixLess, this.errormessage])])]);
}} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(2,"formatMessage$S$SA",["exception.problem_opening_file", Clazz.array(String, -1, [this.inFile.getName$(), this.errormessage])])]);
}}} else if (sourceType === $I$(12).RELATIVE_URL ) {
this.bytes=$I$(11).getFileAsBytes$S(fileStr);
this.dataIn=Clazz.new_([Clazz.new_([Clazz.new_($I$(13,1).c$$BA,[this.bytes])],$I$(7,1).c$$java_io_InputStream)],$I$(8,1).c$$java_io_Reader);
this.dataName=fileStr;
} else if (sourceType === $I$(12).URL ) {
try {
try {
p$1.checkURLSource$S.apply(this, [fileStr]);
if (this.suffixSeparator == "#") {
p$1.extractSuffix$S.apply(this, [fileStr]);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
var suffixLess=p$1.extractSuffix$S.apply(this, [fileStr]);
if (suffixLess == null ) {
throw (e);
} else {
try {
p$1.checkURLSource$S.apply(this, [suffixLess]);
} catch (e2) {
if (Clazz.exceptionOf(e2,"java.io.IOException")){
this.errormessage="BAD URL WITH OR WITHOUT SUFFIX";
throw (e);
} else {
throw e2;
}
}
}} else {
throw e;
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.errormessage="CANNOT ACCESS DATA AT URL '" + fileStr + "' (" + e.getMessage$() + ")" ;
this.error=true;
} else {
throw e;
}
}
} else if (sourceType === $I$(12).PASTE ) {
this.errormessage="PASTE INACCESSIBLE!";
this.dataIn=Clazz.new_([Clazz.new_($I$(14,1).c$$S,[fileStr])],$I$(8,1).c$$java_io_Reader);
this.dataName="Paste";
} else if (sourceType === $I$(12).CLASSLOADER ) {
this.errormessage="RESOURCE CANNOT BE LOCATED";
var is=this.getClass$().getResourceAsStream$S("/" + fileStr);
if (is == null ) {
var suffixLess=p$1.extractSuffix$S.apply(this, [fileStr]);
if (suffixLess != null ) {
is=this.getClass$().getResourceAsStream$S("/" + suffixLess);
}}if (is != null ) {
this.dataIn=Clazz.new_([Clazz.new_($I$(7,1).c$$java_io_InputStream,[is])],$I$(8,1).c$$java_io_Reader);
this.dataName=fileStr;
} else {
this.error=true;
}} else {
this.errormessage="PROBABLE IMPLEMENTATION ERROR : Datasource Type given as '" + (sourceType != null  ? sourceType : "null") + "'" ;
this.error=true;
}if (this.dataIn == null  || this.error ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(2,"formatMessage$S$SA",["exception.failed_to_read_data_from_source", Clazz.array(String, -1, [this.errormessage])])]);
}this.error=false;
this.dataIn.mark$I(2048);
}, p$1);

Clazz.newMeth(C$, 'mark$',  function () {
if (this.dataIn != null ) {
this.dataIn.mark$I(2048);
} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(2).getString$S("exception.no_init_source_stream")]);
}});

Clazz.newMeth(C$, 'nextLine$',  function () {
if (!this.error) {
return this.dataIn.readLine$();
}throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(2,"formatMessage$S$SA",["exception.invalid_source_stream", Clazz.array(String, -1, [this.errormessage])])]);
});

Clazz.newMeth(C$, 'isExporting$',  function () {
return !this.error && this.dataIn == null  ;
});

Clazz.newMeth(C$, 'isValid$',  function () {
return !this.error;
});

Clazz.newMeth(C$, 'close$',  function () {
this.errormessage="EXCEPTION ON CLOSE";
this.error=true;
this.dataIn.close$();
this.dataIn=null;
this.errormessage="SOURCE IS CLOSED";
});

Clazz.newMeth(C$, 'reset$I',  function (bytesRead) {
if (bytesRead >= 2048) {
System.err.println$S(String.format$S$OA("File reset error: read %d bytes but reset limit is %d", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(bytesRead), Integer.valueOf$I(2048)])));
}if (this.dataIn != null  && !this.error ) {
this.dataIn.reset$();
} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(2).getString$S("error.implementation_error_reset_called_for_invalid_source")]);
}});

Clazz.newMeth(C$, 'hasWarningMessage$',  function () {
return (this.warningMessage != null  && this.warningMessage.length$() > 0 );
});

Clazz.newMeth(C$, 'getWarningMessage$',  function () {
return this.warningMessage;
});

Clazz.newMeth(C$, 'getInFile$',  function () {
if (this.inFile != null ) {
return this.inFile.getAbsolutePath$() + " (" + this.index + ")" ;
} else {
return "From Paste + (" + this.index + ")" ;
}});

Clazz.newMeth(C$, 'getDataName$',  function () {
return this.dataName;
});

Clazz.newMeth(C$, 'setDataName$S',  function (dataname) {
this.dataName=dataname;
});

Clazz.newMeth(C$, 'getReader$',  function () {
if (this.dataIn != null ) {
return this.dataIn;
}return null;
});

Clazz.newMeth(C$, 'getViewport$',  function () {
return this.viewport;
});

Clazz.newMeth(C$, 'setViewport$jalview_api_AlignViewportI',  function (viewport) {
this.viewport=viewport;
});

Clazz.newMeth(C$, 'getExportSettings$',  function () {
return this.exportSettings;
});

Clazz.newMeth(C$, 'setExportSettings$jalview_api_AlignExportSettingsI',  function (exportSettings) {
this.exportSettings=exportSettings;
});

Clazz.newMeth(C$, 'configureForView$jalview_api_AlignmentViewPanel',  function (avpanel) {
if (avpanel != null ) {
this.setViewport$jalview_api_AlignViewportI(avpanel.getAlignViewport$());
}});

Clazz.newMeth(C$, 'getFeatureColourScheme$',  function () {
return null;
});

Clazz.newMeth(C$, 'getDataSourceType$',  function () {
return this.dataSourceType;
});

Clazz.newMeth(C$, 'getBufferedReader$O$jalview_io_DataSourceType',  function (file, sourceType) {
var $in=null;
var bytes;
switch (sourceType) {
case $I$(12).FILE:
if (Clazz.instanceOf(file, "java.lang.String")) {
return Clazz.new_([Clazz.new_($I$(15,1).c$$S,[file])],$I$(8,1).c$$java_io_Reader);
}bytes=$I$(11).getFileBytes$java_io_File(file);
if (bytes != null ) {
return Clazz.new_([Clazz.new_([Clazz.new_($I$(13,1).c$$BA,[bytes])],$I$(7,1).c$$java_io_InputStream)],$I$(8,1).c$$java_io_Reader);
}return Clazz.new_([Clazz.new_($I$(15,1).c$$java_io_File,[file])],$I$(8,1).c$$java_io_Reader);
case $I$(12).URL:
var url=Clazz.new_([file.toString()],$I$(10,1).c$$S);
$in=Clazz.new_([Clazz.new_([url.openStream$()],$I$(7,1).c$$java_io_InputStream)],$I$(8,1).c$$java_io_Reader);
break;
case $I$(12).RELATIVE_URL:
bytes=$I$(11,"getFileAsBytes$S",[file.toString()]);
if (bytes != null ) {
$in=Clazz.new_([Clazz.new_([Clazz.new_($I$(13,1).c$$BA,[bytes])],$I$(7,1).c$$java_io_InputStream)],$I$(8,1).c$$java_io_Reader);
}break;
case $I$(12).PASTE:
$in=Clazz.new_([Clazz.new_([file.toString()],$I$(14,1).c$$S)],$I$(8,1).c$$java_io_Reader);
break;
case $I$(12).CLASSLOADER:
var is=this.getClass$().getResourceAsStream$S("/" + file);
if (is != null ) {
$in=Clazz.new_([Clazz.new_($I$(7,1).c$$java_io_InputStream,[is])],$I$(8,1).c$$java_io_Reader);
}break;
}
return $in;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
