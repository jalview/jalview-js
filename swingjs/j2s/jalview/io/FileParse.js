(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'Error','jalview.util.MessageManager','java.io.File','java.io.FileInputStream','java.io.BufferedReader','java.io.FileReader','java.io.InputStreamReader','java.util.zip.GZIPInputStream','java.net.URL','jalview.util.Platform','jalview.io.DataSourceType','java.io.ByteArrayInputStream','java.io.StringReader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileParse");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dataName=null;
this.inFile=null;
this.bytes=null;
this.viewport=null;
this.exportSettings=null;
this.index=0;
this.suffixSeparator='\0';
this.newline=null;
this.suffix=null;
this.dataSourceType=null;
this.dataIn=null;
this.errormessage=null;
this.error=false;
this.warningMessage=null;
this.READAHEAD_LIMIT=0;
}, 1);

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
}, 1);

Clazz.newMeth(C$, 'getBytes$', function () {
return this.bytes;
});

Clazz.newMeth(C$, 'setNewlineString$S', function (nl) {
this.newline=nl;
});

Clazz.newMeth(C$, 'getNewlineString$', function () {
return this.newline;
});

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse', function (from) {
C$.$init$.apply(this);
if (from == null ) {
throw Clazz.new_($I$(1).c$$S,[$I$(2).getString$S("error.implementation_error_null_fileparse")]);
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

Clazz.newMeth(C$, 'checkFileSource$S', function (fileStr) {
this.error=false;
this.inFile=Clazz.new_($I$(3).c$$S,[fileStr]);
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
if (fileStr.toLowerCase$().endsWith$S(".gz")) {
try {
this.dataIn=p$1.tryAsGzipSource$java_io_InputStream.apply(this, [Clazz.new_($I$(4).c$$S,[fileStr])]);
this.dataName=fileStr;
return this.error;
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
this.warningMessage="Failed  to resolve as a GZ stream (" + x.getMessage$() + ")" ;
} else {
throw x;
}
}
;}this.dataIn=Clazz.new_($I$(5).c$$java_io_Reader,[Clazz.new_($I$(6).c$$S,[fileStr])]);
this.dataName=fileStr;
}return this.error;
}, p$1);

Clazz.newMeth(C$, 'tryAsGzipSource$java_io_InputStream', function (inputStream) {
var inData=Clazz.new_($I$(5).c$$java_io_Reader,[Clazz.new_($I$(7).c$$java_io_InputStream,[Clazz.new_($I$(8).c$$java_io_InputStream,[inputStream])])]);
inData.mark$I(2048);
inData.read$();
inData.reset$();
return inData;
}, p$1);

Clazz.newMeth(C$, 'checkURLSource$S', function (fileStr) {
this.errormessage="URL NOT FOUND";
var url=Clazz.new_($I$(9).c$$S,[fileStr]);
var e=null;
if (fileStr.toLowerCase$().endsWith$S(".gz")) {
try {
var inputStream=url.openStream$();
this.dataIn=p$1.tryAsGzipSource$java_io_InputStream.apply(this, [inputStream]);
this.dataName=fileStr;
return false;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
e=ex;
} else {
throw ex;
}
}
}try {
this.dataIn=Clazz.new_($I$(5).c$$java_io_Reader,[Clazz.new_($I$(7).c$$java_io_InputStream,[url.openStream$()])]);
} catch (q) {
if (Clazz.exceptionOf(q,"java.io.IOException")){
if (e != null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S$Throwable,[$I$(2).getString$S("exception.failed_to_resolve_gzip_stream"), e]);
}throw q;
} else {
throw q;
}
}
this.dataName=fileStr;
return false;
}, p$1);

Clazz.newMeth(C$, 'extractSuffix$S', function (fileStr) {
var sfpos=fileStr.lastIndexOf$I(this.suffixSeparator);
if (sfpos > -1 && sfpos < fileStr.length$() - 1 ) {
this.suffix=fileStr.substring$I(sfpos + 1);
return fileStr.substring$I$I(0, sfpos);
}return null;
}, p$1);

Clazz.newMeth(C$, 'c$$java_io_BufferedReader$S$jalview_io_DataSourceType', function (source, originString, sourceType) {
C$.$init$.apply(this);
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

Clazz.newMeth(C$, 'c$$O$jalview_io_DataSourceType', function (file, sourceType) {
C$.$init$.apply(this);
if (Clazz.instanceOf(file, "java.io.File")) {
p$1.parse$java_io_File$S$jalview_io_DataSourceType$Z.apply(this, [file, (file).getPath$(), sourceType, true]);
} else {
p$1.parse$java_io_File$S$jalview_io_DataSourceType$Z.apply(this, [null, file.toString(), sourceType, false]);
}}, 1);

Clazz.newMeth(C$, 'parse$java_io_File$S$jalview_io_DataSourceType$Z', function (file, fileStr, sourceType, isFileObject) {
this.bytes=$I$(10).getFileBytes$java_io_File(file);
this.dataSourceType=sourceType;
this.error=false;
if (sourceType === $I$(11).FILE ) {
if (this.bytes != null ) {
this.inFile=file;
this.dataIn=Clazz.new_($I$(5).c$$java_io_Reader,[Clazz.new_($I$(7).c$$java_io_InputStream,[Clazz.new_($I$(12).c$$BA,[this.bytes])])]);
this.dataName=fileStr;
} else if (p$1.checkFileSource$S.apply(this, [fileStr])) {
var suffixLess=p$1.extractSuffix$S.apply(this, [fileStr]);
if (suffixLess != null ) {
if (p$1.checkFileSource$S.apply(this, [suffixLess])) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(2).formatMessage$S$SA("exception.problem_opening_file_also_tried", Clazz.array(String, -1, [this.inFile.getName$(), suffixLess, this.errormessage]))]);
}} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(2).formatMessage$S$SA("exception.problem_opening_file", Clazz.array(String, -1, [this.inFile.getName$(), this.errormessage]))]);
}}} else if (sourceType === $I$(11).RELATIVE_URL ) {
this.bytes=$I$(10).getFileAsBytes$S(fileStr);
this.dataIn=Clazz.new_($I$(5).c$$java_io_Reader,[Clazz.new_($I$(7).c$$java_io_InputStream,[Clazz.new_($I$(12).c$$BA,[this.bytes])])]);
this.dataName=fileStr;
} else if (sourceType === $I$(11).URL ) {
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
} else if (sourceType === $I$(11).PASTE ) {
this.errormessage="PASTE INACCESSIBLE!";
this.dataIn=Clazz.new_($I$(5).c$$java_io_Reader,[Clazz.new_($I$(13).c$$S,[fileStr])]);
this.dataName="Paste";
} else if (sourceType === $I$(11).CLASSLOADER ) {
this.errormessage="RESOURCE CANNOT BE LOCATED";
var is=this.getClass$().getResourceAsStream$S("/" + fileStr);
if (is == null ) {
var suffixLess=p$1.extractSuffix$S.apply(this, [fileStr]);
if (suffixLess != null ) {
is=this.getClass$().getResourceAsStream$S("/" + suffixLess);
}}if (is != null ) {
this.dataIn=Clazz.new_($I$(5).c$$java_io_Reader,[Clazz.new_($I$(7).c$$java_io_InputStream,[is])]);
this.dataName=fileStr;
} else {
this.error=true;
}} else {
this.errormessage="PROBABLE IMPLEMENTATION ERROR : Datasource Type given as '" + (sourceType != null  ? sourceType : "null") + "'" ;
this.error=true;
}if (this.dataIn == null  || this.error ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(2).formatMessage$S$SA("exception.failed_to_read_data_from_source", Clazz.array(String, -1, [this.errormessage]))]);
}this.error=false;
this.dataIn.mark$I(2048);
}, p$1);

Clazz.newMeth(C$, 'mark$', function () {
if (this.dataIn != null ) {
this.dataIn.mark$I(2048);
} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(2).getString$S("exception.no_init_source_stream")]);
}});

Clazz.newMeth(C$, 'nextLine$', function () {
if (!this.error) {
return this.dataIn.readLine$();
}throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(2).formatMessage$S$SA("exception.invalid_source_stream", Clazz.array(String, -1, [this.errormessage]))]);
});

Clazz.newMeth(C$, 'isExporting$', function () {
return !this.error && this.dataIn == null  ;
});

Clazz.newMeth(C$, 'isValid$', function () {
return !this.error;
});

Clazz.newMeth(C$, 'close$', function () {
this.errormessage="EXCEPTION ON CLOSE";
this.error=true;
this.dataIn.close$();
this.dataIn=null;
this.errormessage="SOURCE IS CLOSED";
});

Clazz.newMeth(C$, 'reset$I', function (bytesRead) {
if (bytesRead >= 2048) {
System.err.println$S(String.format$S$OA("File reset error: read %d bytes but reset limit is %d", [new Integer(bytesRead), new Integer(2048)]));
}if (this.dataIn != null  && !this.error ) {
this.dataIn.reset$();
} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(2).getString$S("error.implementation_error_reset_called_for_invalid_source")]);
}});

Clazz.newMeth(C$, 'hasWarningMessage$', function () {
return (this.warningMessage != null  && this.warningMessage.length$() > 0 );
});

Clazz.newMeth(C$, 'getWarningMessage$', function () {
return this.warningMessage;
});

Clazz.newMeth(C$, 'getInFile$', function () {
if (this.inFile != null ) {
return this.inFile.getAbsolutePath$() + " (" + this.index + ")" ;
} else {
return "From Paste + (" + this.index + ")" ;
}});

Clazz.newMeth(C$, 'getDataName$', function () {
return this.dataName;
});

Clazz.newMeth(C$, 'setDataName$S', function (dataname) {
this.dataName=dataname;
});

Clazz.newMeth(C$, 'getReader$', function () {
if (this.dataIn != null ) {
return this.dataIn;
}return null;
});

Clazz.newMeth(C$, 'getViewport$', function () {
return this.viewport;
});

Clazz.newMeth(C$, 'setViewport$jalview_api_AlignViewportI', function (viewport) {
this.viewport=viewport;
});

Clazz.newMeth(C$, 'getExportSettings$', function () {
return this.exportSettings;
});

Clazz.newMeth(C$, 'setExportSettings$jalview_api_AlignExportSettingsI', function (exportSettings) {
this.exportSettings=exportSettings;
});

Clazz.newMeth(C$, 'configureForView$jalview_api_AlignmentViewPanel', function (avpanel) {
if (avpanel != null ) {
this.setViewport$jalview_api_AlignViewportI(avpanel.getAlignViewport$());
}});

Clazz.newMeth(C$, 'getFeatureColourScheme$', function () {
return null;
});

Clazz.newMeth(C$, 'getDataSourceType$', function () {
return this.dataSourceType;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
