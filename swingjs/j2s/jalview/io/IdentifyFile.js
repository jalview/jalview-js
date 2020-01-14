(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'jalview.io.FileParse','jalview.io.FileFormat']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IdentifyFile");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'identify$O$jalview_io_DataSourceType', function (file, protocol) {
return (Clazz.instanceOf(file, "java.io.File") ? this.identify$java_io_File$jalview_io_DataSourceType(file, protocol) : this.identify$S$jalview_io_DataSourceType(file, protocol));
});

Clazz.newMeth(C$, 'identify$java_io_File$jalview_io_DataSourceType', function (file, sourceType) {
var emessage="UNIDENTIFIED FILE PARSING ERROR";
var parser=null;
try {
parser=Clazz.new_($I$(1).c$$O$jalview_io_DataSourceType,[file, sourceType]);
if (parser.isValid$()) {
return this.identify$jalview_io_FileParse(parser);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error whilst identifying " + file);
e.printStackTrace$java_io_PrintStream(System.err);
emessage=e.getMessage$();
} else {
throw e;
}
}
if (parser != null ) {
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[parser.errormessage]);
}throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[emessage]);
});

Clazz.newMeth(C$, 'identify$S$jalview_io_DataSourceType', function (file, sourceType) {
var emessage="UNIDENTIFIED FILE PARSING ERROR";
var parser=null;
try {
parser=Clazz.new_($I$(1).c$$O$jalview_io_DataSourceType,[file, sourceType]);
if (parser.isValid$()) {
return this.identify$jalview_io_FileParse(parser);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error whilst identifying " + file);
e.printStackTrace$java_io_PrintStream(System.err);
emessage=e.getMessage$();
} else {
throw e;
}
}
if (parser != null ) {
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[parser.errormessage]);
}throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[emessage]);
});

Clazz.newMeth(C$, 'identify$jalview_io_FileParse', function (source) {
return this.identify$jalview_io_FileParse$Z(source, true);
});

Clazz.newMeth(C$, 'identify$jalview_io_AlignmentFileReaderI$Z', function (file, closeSource) {
var fp=Clazz.new_($I$(1).c$$O$jalview_io_DataSourceType,[file.getInFile$(), file.getDataSourceType$()]);
return this.identify$jalview_io_FileParse$Z(fp, closeSource);
});

Clazz.newMeth(C$, 'identify$jalview_io_FileParse$Z', function (source, closeSource) {
var reply=$I$(2).Pfam;
var data;
var bytesRead=0;
var trimmedLength=0;
var lineswereskipped=false;
var isBinary=false;
try {
if (!closeSource) {
source.mark$();
}var aaIndexHeaderRead=false;
while ((data=source.nextLine$()) != null ){
bytesRead+=data.length$();
trimmedLength+=data.trim$().length$();
if (!lineswereskipped) {
for (var i=0; !isBinary && i < data.length$() ; i++) {
var c=data.charAt$I(i);
isBinary=(c.$c() < 32  && c != "\t"  && c != "\n"  && c != "\r"  && c.$c() != 5   && c.$c() != 27  );
}
}if (isBinary) {
if (source.inFile != null ) {
var fileStr=source.inFile.getName$();
if (fileStr.contains$CharSequence(".jar") || fileStr.contains$CharSequence(".zip") || fileStr.contains$CharSequence(".jvp")  ) {
reply=$I$(2).Jalview;
}}if (!lineswereskipped && data.startsWith$S("PK") ) {
reply=$I$(2).Jalview;
break;
}}data=data.toUpperCase$();
if (data.startsWith$S("SCOREMATRIX")) {
reply=$I$(2).ScoreMatrix;
break;
}if (data.startsWith$S("H ") && !aaIndexHeaderRead ) {
aaIndexHeaderRead=true;
}if (data.startsWith$S("D ") && aaIndexHeaderRead ) {
reply=$I$(2).ScoreMatrix;
break;
}if (data.startsWith$S("##GFF-VERSION")) {
reply=$I$(2).Features;
break;
}if (this.looksLikeFeatureData$S(data)) {
reply=$I$(2).Features;
break;
}if (data.indexOf$S("# STOCKHOLM") > -1) {
reply=$I$(2).Stockholm;
break;
}if (data.indexOf$S("_ENTRY.ID") > -1 || data.indexOf$S("_AUDIT_AUTHOR.NAME") > -1  || data.indexOf$S("_ATOM_SITE.") > -1 ) {
reply=$I$(2).MMCif;
break;
}if (data.startsWith$S(">")) {
var checkPIR=false;
var starterm=false;
if ((data.indexOf$S(">P1;") > -1) || (data.indexOf$S(">DL;") > -1) ) {
checkPIR=true;
reply=$I$(2).PIR;
}data=source.nextLine$();
if (data.indexOf$S(">") > -1) {
reply=$I$(2).BLC;
} else {
var data1=source.nextLine$();
var data2=source.nextLine$();
var c1;
if (checkPIR) {
starterm=(data1 != null  && data1.indexOf$S("*") > -1 ) || (data2 != null  && data2.indexOf$S("*") > -1 ) ;
}if (data2 != null  && (c1=data.indexOf$S("*")) > -1 ) {
if (c1 == 0 && c1 == data2.indexOf$S("*") ) {
reply=$I$(2).BLC;
} else {
reply=$I$(2).Fasta;
}} else {
reply=$I$(2).Fasta;
if (!checkPIR) {
break;
}}}if (checkPIR) {
var dta=null;
if (!starterm) {
do {
try {
dta=source.nextLine$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
if (dta != null  && dta.indexOf$S("*") > -1 ) {
starterm=true;
}} while (dta != null  && !starterm );
}if (starterm) {
reply=$I$(2).PIR;
break;
} else {
reply=$I$(2).Fasta;
}}break;
}if (data.indexOf$S("{\"") > -1) {
reply=$I$(2).Json;
break;
}var lessThan=data.indexOf$S("<");
if ((lessThan > -1)) {
var upper=data.toUpperCase$();
if (upper.substring$I(lessThan).startsWith$S("<HTML")) {
reply=$I$(2).Html;
break;
}if (upper.substring$I(lessThan).startsWith$S("<RNAML")) {
reply=$I$(2).Rnaml;
break;
}}if ((data.length$() < 1) || (data.indexOf$S("#") == 0) ) {
lineswereskipped=true;
continue;
}if (data.indexOf$S("PILEUP") > -1) {
reply=$I$(2).Pileup;
break;
}if ((data.indexOf$S("//") == 0) || ((data.indexOf$S("!!") > -1) && (data.indexOf$S("!!") < data.indexOf$S("_MULTIPLE_ALIGNMENT ")) ) ) {
reply=$I$(2).MSF;
break;
} else if (data.indexOf$S("CLUSTAL") > -1) {
reply=$I$(2).Clustal;
break;
} else if (data.indexOf$S("HEADER") == 0 || data.indexOf$S("ATOM") == 0 ) {
reply=$I$(2).PDB;
break;
} else if (data.matches$S("\\s*\\d+\\s+\\d+\\s*")) {
reply=$I$(2).Phylip;
break;
} else {
if (!lineswereskipped && this.looksLikeJnetData$S(data) ) {
reply=$I$(2).Jnet;
break;
}}lineswereskipped=true;
}
if (closeSource) {
source.close$();
} else {
source.reset$I(bytesRead);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("File Identification failed!\n" + ex);
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[source.errormessage]);
} else {
throw ex;
}
}
if (trimmedLength == 0) {
System.err.println$S("File Identification failed! - Empty file was read.");
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,["EMPTY DATA FILE"]);
}System.out.println$S("File format identified as " + reply.toString());
return reply;
});

Clazz.newMeth(C$, 'looksLikeJnetData$S', function (data) {
var firstChar=data.charAt$I(0);
var colonPos=data.indexOf$S(":");
var commaPos=data.indexOf$S(",");
var isJnet=firstChar != "*" && firstChar != " "  && colonPos > -1  && commaPos > -1  && colonPos < commaPos ;
return isJnet;
});

Clazz.newMeth(C$, 'looksLikeFeatureData$S', function (data) {
if (data == null ) {
return false;
}var columns=data.split$S("\t");
if (columns.length < 6) {
return false;
}for (var col=3; col < 5; col++) {
try {
Integer.parseInt$S(columns[col]);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return false;
} else {
throw e;
}
}
}
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
