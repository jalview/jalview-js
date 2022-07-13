(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'org.jmol.api.Interface','javajs.util.PT']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SurfaceFileReader", null, 'org.jmol.jvxl.readers.SurfaceReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.next=Clazz.array(Integer.TYPE, [1]);
},1);

C$.$fields$=[['S',['line'],'O',['br','java.io.BufferedReader','binarydoc','javajs.api.GenericBinaryDocument','out','javajs.util.OC','next','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setStream$S$Z', function (fileName, isBigEndian) {
if (fileName == null ) this.binarydoc.setStream$java_io_BufferedInputStream$Z(null, isBigEndian);
 else try {
if (Clazz.instanceOf(this.br, "javajs.util.Rdr.StreamReader")) {
var stream=(this.br).getStream$();
stream.reset$();
this.binarydoc.setStream$java_io_BufferedInputStream$Z(stream, true);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("BCifDensityReader " + e);
this.binarydoc.setStream$java_io_BufferedInputStream$Z(this.sg.atomDataServer.getBufferedInputStream$S(fileName), isBigEndian);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'init$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initSR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
});

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2SFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
});

Clazz.newMeth(C$, 'init2SFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.br=br;
this.init$org_jmol_jvxl_readers_SurfaceGenerator(sg);
});

Clazz.newMeth(C$, 'newBinaryDocument$', function () {
return $I$(1).getInterface$S$org_jmol_viewer_Viewer$S("javajs.util.BinaryDocument", this.sg.atomDataServer, "file");
});

Clazz.newMeth(C$, 'setOutputChannel$javajs_util_OC', function (out) {
if (this.binarydoc == null ) this.out=out;
 else this.sg.setOutputChannel$javajs_api_GenericBinaryDocument$javajs_util_OC(this.binarydoc, out);
});

Clazz.newMeth(C$, 'closeReader$', function () {
this.closeReaderSFR$();
});

Clazz.newMeth(C$, 'closeReaderSFR$', function () {
if (this.br != null ) try {
this.br.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
if (this.out != null ) this.out.closeChannel$();
if (this.binarydoc != null ) this.binarydoc.close$();
});

Clazz.newMeth(C$, 'discardTempData$Z', function (discardAll) {
this.closeReader$();
this.discardTempDataSR$Z(discardAll);
});

Clazz.newMeth(C$, 'getTokens$', function () {
return $I$(2).getTokensAt$S$I(this.line, 0);
});

Clazz.newMeth(C$, 'parseFloat$', function () {
return $I$(2).parseFloatNext$S$IA(this.line, this.next);
});

Clazz.newMeth(C$, 'parseFloatStr$S', function (s) {
this.next[0]=0;
return $I$(2).parseFloatNext$S$IA(s, this.next);
});

Clazz.newMeth(C$, 'parseFloatRange$S$I$I', function (s, iStart, iEnd) {
this.next[0]=iStart;
return $I$(2).parseFloatRange$S$I$IA(s, iEnd, this.next);
});

Clazz.newMeth(C$, 'parseInt$', function () {
return $I$(2).parseIntNext$S$IA(this.line, this.next);
});

Clazz.newMeth(C$, 'parseIntStr$S', function (s) {
this.next[0]=0;
return $I$(2).parseIntNext$S$IA(s, this.next);
});

Clazz.newMeth(C$, 'parseIntNext$S', function (s) {
return $I$(2).parseIntNext$S$IA(s, this.next);
});

Clazz.newMeth(C$, 'parseFloatArrayStr$S', function (s) {
this.next[0]=0;
return $I$(2).parseFloatArrayNext$S$IA$FA$S$S(s, this.next, null, null, null);
});

Clazz.newMeth(C$, 'parseFloatArray$FA$S$S', function (a, strStart, strEnd) {
return $I$(2).parseFloatArrayNext$S$IA$FA$S$S(this.line, this.next, a, strStart, strEnd);
});

Clazz.newMeth(C$, 'getQuotedStringNext$', function () {
return $I$(2).getQuotedStringNext$S$IA(this.line, this.next);
});

Clazz.newMeth(C$, 'skipTo$S$S', function (info, what) {
if (info != null ) while (this.rd$().indexOf$S(info) < 0){
}
if (what != null ) this.next[0]=this.line.indexOf$S(what) + what.length$() + 2 ;
});

Clazz.newMeth(C$, 'rd$', function () {
this.line=this.br.readLine$();
if (this.line != null ) {
this.nBytes+=this.line.length$();
if (this.out != null ) {
var b=this.line.getBytes$();
this.out.write$BA$I$I(b, 0, b.length);
this.out.writeByteAsInt$I(10);
}}return this.line;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:36 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
