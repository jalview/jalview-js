(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'jalview.io.DataSourceType','jalview.io.FileParse','jalview.io.FileFormats','jalview.io.IdentifyFile','jalview.io.AppletFormatAdapter','jalview.io.FileFormat']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewLiteURLRetrieve", null, 'java.applet.Applet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['init$','init'], function () {
this.setSize$I$I(300, 200);
var file=this.getParameter$S("file");
if (file == null ) {
System.out.println$S("Specify a resource to read on the file parameter");
return;
}var protocol=null;
try {
System.out.println$S("Loading thread started with:\n>>file\n" + file + ">>endfile" );
try {
var rtn=false;
var is=this.getClass$().getResourceAsStream$S("/" + file);
if (is != null ) {
rtn=true;
is.close$();
}System.err.println$S("Resource '" + file + "' was " + (rtn ? "" : "not") + " located by classloader." );
if (rtn) {
protocol=$I$(1).CLASSLOADER;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Exception checking resources: " + file + " " + ex );
} else {
throw ex;
}
}
if (file.indexOf$S("://") > -1) {
protocol=$I$(1).URL;
} else {
protocol=$I$(1).FILE;
}System.out.println$S("Trying to get contents of resource:");
var fp=Clazz.new_($I$(2,1).c$$O$jalview_io_DataSourceType,[file, protocol]);
if (fp.isValid$()) {
var ln=null;
while ((ln=fp.nextLine$()) != null ){
System.out.print$S(ln);
}
fp.close$();
} else {
System.out.println$S("Resource at " + file + " cannot be read with protocol==" + protocol );
return;
}var format=$I$(3).getInstance$().forName$S(this.getParameter$S("format"));
if (format == null ) {
format=Clazz.new_($I$(4,1)).identify$S$jalview_io_DataSourceType(file, protocol);
System.out.println$S("Format is " + format);
} else {
System.out.println$S("User specified Format is " + format);
}var al=null;
try {
al=Clazz.new_($I$(5,1)).readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(file, protocol, format);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
System.err.println$S("Failed to open the file.");
ex.printStackTrace$();
} else {
throw ex;
}
}
if (al != null ) {
System.out.println$S(Clazz.new_($I$(5,1)).formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$Z($I$(6).Fasta, al, false));
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("bailing out : Unexpected exception:");
e.printStackTrace$();
} else {
throw e;
}
}
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
