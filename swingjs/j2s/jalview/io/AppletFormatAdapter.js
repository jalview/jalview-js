(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'jalview.io.FileFormats','StringBuffer','jalview.structure.StructureImportSettings',['jalview.structure.StructureImportSettings','.StructureParser'],'jalview.ext.jmol.JmolParser','mc_view.PDBfile','jalview.io.FileFormat',['jalview.datamodel.PDBEntry','.Type'],'jalview.io.FileParse','jalview.io.DataSourceType','jalview.io.FastaFile','jalview.datamodel.Alignment','java.util.Locale','jalview.util.Platform','java.io.File','jalview.io.IdentifyFile']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AppletFormatAdapter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.annotFromStructure=false;
this.localSecondaryStruct=false;
this.serviceSecondaryStruct=false;
this.alignFile=null;
this.newline=System.getProperty$S("line.separator");
},1);

C$.$fields$=[['Z',['annotFromStructure','localSecondaryStruct','serviceSecondaryStruct'],'S',['inFile','newline'],'O',['viewpanel','jalview.api.AlignmentViewPanel','alignFile','jalview.io.AlignmentFileReaderI','exportSettings','jalview.api.AlignExportSettingsI','selectedFile','java.io.File']]
,['S',['INVALID_CHARACTERS']]]

Clazz.newMeth(C$, 'getSupportedFormats$',  function () {
return "Formats currently supported are\n" + C$.prettyPrint$java_util_List($I$(1).getInstance$().getReadableFormats$());
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignmentViewPanel',  function (viewpanel) {
;C$.$init$.apply(this);
this.viewpanel=viewpanel;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignmentViewPanel$jalview_api_AlignExportSettingsI',  function (alignPanel, settings) {
;C$.$init$.apply(this);
this.viewpanel=alignPanel;
this.exportSettings=settings;
}, 1);

Clazz.newMeth(C$, 'prettyPrint$java_util_List',  function (things) {
var list=Clazz.new_($I$(2,1));
for (var i=0, iSize=things.size$() - 1; i < iSize; i++) {
list.append$S(things.get$I(i).toString());
list.append$S(", ");
}
list.append$S(" and " + things.get$I(things.size$() - 1).toString() + "." );
return list.toString();
}, 1);

Clazz.newMeth(C$, 'setNewlineString$S',  function (nl) {
this.newline=nl;
});

Clazz.newMeth(C$, 'getNewlineString$',  function () {
return this.newline;
});

Clazz.newMeth(C$, 'readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI',  function (file, sourceType, fileFormat) {
return this.readFile$java_io_File$S$jalview_io_DataSourceType$jalview_io_FileFormatI(null, file, sourceType, fileFormat);
});

Clazz.newMeth(C$, 'readFile$java_io_File$S$jalview_io_DataSourceType$jalview_io_FileFormatI',  function (selectedFile, file, sourceType, fileFormat) {
this.selectedFile=selectedFile;
if (selectedFile != null ) {
this.inFile=selectedFile.getPath$();
}this.inFile=file;
try {
if (fileFormat.isStructureFile$()) {
var structureParser=$I$(3).getDefaultPDBFileParser$();
var isParseWithJMOL=structureParser.equalsIgnoreCase$S($I$(4).JMOL_PARSER.toString());
$I$(3).addSettings$Z$Z$Z(this.annotFromStructure, this.localSecondaryStruct, this.serviceSecondaryStruct);
if (isParseWithJMOL) {
this.alignFile=Clazz.new_([selectedFile == null  ? this.inFile : selectedFile, sourceType],$I$(5,1).c$$O$jalview_io_DataSourceType);
} else {
$I$(3).setShowSeqFeatures$Z(true);
this.alignFile=Clazz.new_($I$(6,1).c$$Z$Z$Z$S$jalview_io_DataSourceType,[this.annotFromStructure, this.localSecondaryStruct, this.serviceSecondaryStruct, this.inFile, sourceType]);
}(this.alignFile).setDbRefType$jalview_datamodel_PDBEntry_Type($I$(7).PDB.equals$O(fileFormat) ? $I$(8).PDB : $I$(8).MMCIF);
} else if (selectedFile != null ) {
this.alignFile=fileFormat.getReader$jalview_io_FileParse(Clazz.new_($I$(9,1).c$$O$jalview_io_DataSourceType,[selectedFile, sourceType]));
} else {
this.alignFile=fileFormat.getReader$jalview_io_FileParse(Clazz.new_($I$(9,1).c$$O$jalview_io_DataSourceType,[this.inFile, sourceType]));
}return p$1.buildAlignmentFromFile.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.err.println$S("Failed to read alignment using the '" + fileFormat + "' reader.\n" + e );
if (e.getMessage$() != null  && e.getMessage$().startsWith$S(C$.INVALID_CHARACTERS) ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[e.getMessage$()]);
}if (sourceType === $I$(10).PASTE ) {
try {
this.alignFile=Clazz.new_([">UNKNOWN\n" + this.inFile, $I$(10).PASTE],$I$(11,1).c$$S$jalview_io_DataSourceType);
return p$1.buildAlignmentFromFile.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
if (ex.toString().startsWith$S(C$.INVALID_CHARACTERS)) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[e.getMessage$()]);
}ex.printStackTrace$();
} else {
throw ex;
}
}
}if ($I$(7).Html.equals$O(fileFormat)) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[e.getMessage$()]);
}} else {
throw e;
}
}
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[C$.getSupportedFormats$()]);
});

Clazz.newMeth(C$, 'readFromFile$jalview_io_FileParse$jalview_io_FileFormatI',  function (source, format) {
this.inFile=source.getInFile$();
var type=source.dataSourceType;
try {
if ($I$(7).PDB.equals$O(format) || $I$(7).MMCif.equals$O(format) ) {
var isParseWithJMOL=false;
if (isParseWithJMOL) {
$I$(3).addSettings$Z$Z$Z(this.annotFromStructure, this.localSecondaryStruct, this.serviceSecondaryStruct);
this.alignFile=Clazz.new_($I$(5,1).c$$jalview_io_FileParse,[source]);
} else {
$I$(3).setShowSeqFeatures$Z(true);
this.alignFile=Clazz.new_($I$(6,1).c$$Z$Z$Z$jalview_io_FileParse,[this.annotFromStructure, this.localSecondaryStruct, this.serviceSecondaryStruct, source]);
}(this.alignFile).setDbRefType$jalview_datamodel_PDBEntry_Type($I$(8).PDB);
} else {
this.alignFile=format.getReader$jalview_io_FileParse(source);
}return p$1.buildAlignmentFromFile.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.err.println$S("Failed to read alignment using the '" + format + "' reader.\n" + e );
if (e.getMessage$() != null  && e.getMessage$().startsWith$S(C$.INVALID_CHARACTERS) ) {
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[e.getMessage$()]);
}if (type === $I$(10).PASTE ) {
try {
this.alignFile=Clazz.new_([">UNKNOWN\n" + this.inFile, $I$(10).PASTE],$I$(11,1).c$$S$jalview_io_DataSourceType);
return p$1.buildAlignmentFromFile.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
if (ex.toString().startsWith$S(C$.INVALID_CHARACTERS)) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[e.getMessage$()]);
}ex.printStackTrace$();
} else {
throw ex;
}
}
}throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[C$.getSupportedFormats$()]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'buildAlignmentFromFile',  function () {
var al=Clazz.new_([this.alignFile.getSeqsAsArray$()],$I$(12,1).c$$jalview_datamodel_SequenceIA);
this.alignFile.addAnnotations$jalview_datamodel_AlignmentI(al);
this.alignFile.addGroups$jalview_datamodel_AlignmentI(al);
return al;
}, p$1);

Clazz.newMeth(C$, 'formatSequences$jalview_io_FileFormatI$Z$jalview_api_AlignmentViewPanel$Z',  function (format, jvsuffix, ap, selectedOnly) {
var selvew=ap.getAlignViewport$().getAlignmentView$Z$Z(selectedOnly, false);
var aselview=selvew.getVisibleAlignment$C(ap.getAlignViewport$().getGapCharacter$());
var ala=(ap.getAlignViewport$().getVisibleAlignmentAnnotation$Z(selectedOnly));
if (ala != null ) {
for (var aa, $aa = ala.iterator$(); $aa.hasNext$()&&((aa=($aa.next$())),1);) {
aselview.addAnnotation$jalview_datamodel_AlignmentAnnotation(aa);
}
}this.viewpanel=ap;
return this.formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$Z(format, aselview, jvsuffix);
});

Clazz.newMeth(C$, 'formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$Z',  function (format, alignment, jvsuffix) {
try {
var afile=format.getWriter$jalview_datamodel_AlignmentI(alignment);
afile.setNewlineString$S(this.newline);
afile.setExportSettings$jalview_api_AlignExportSettingsI(this.exportSettings);
afile.configureForView$jalview_api_AlignmentViewPanel(this.viewpanel);
var seqs=null;
if (this.viewpanel == null  || this.viewpanel.getAlignment$() == null   || this.viewpanel.getAlignment$() !== alignment  ) {
seqs=alignment.getSequencesArray$();
} else {
seqs=this.viewpanel.getAlignment$().getSequencesArray$();
}var afileresp=afile.print$jalview_datamodel_SequenceIA$Z(seqs, jvsuffix);
if (afile.hasWarningMessage$()) {
System.err.println$S("Warning raised when writing as " + format + " : " + afile.getWarningMessage$() );
}return afileresp;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Failed to write alignment as a '" + format.getName$() + "' file\n" );
e.printStackTrace$();
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'checkProtocol$O',  function (dataObject) {
if (Clazz.instanceOf(dataObject, "java.io.File")) {
return $I$(10).FILE;
}var data=dataObject.toString();
var protocol=$I$(10).PASTE;
var ft=data.toLowerCase$java_util_Locale($I$(13).ROOT).trim$();
if (ft.indexOf$S("http:") == 0 || ft.indexOf$S("https:") == 0  || ft.indexOf$S("file:") == 0 ) {
protocol=$I$(10).URL;
} else if ($I$(14).isJS$()) {
protocol=$I$(10).RELATIVE_URL;
} else if (Clazz.new_($I$(15,1).c$$S,[data]).exists$()) {
protocol=$I$(10).FILE;
}return protocol;
}, 1);

Clazz.newMeth(C$, 'resolveProtocol$S$jalview_io_FileFormatI',  function (file, format) {
return C$.resolveProtocol$S$jalview_io_FileFormatI$Z(file, format, false);
}, 1);

Clazz.newMeth(C$, 'resolveProtocol$S$jalview_io_FileFormatI$Z',  function (file, format, debug) {
var protocol=null;
if (debug) {
System.out.println$S("resolving datasource started with:\n>>file\n" + file + ">>endfile" );
}try {
var rtn=false;
var is=System.getSecurityManager$().getClass$().getResourceAsStream$S("/" + file);
if (is != null ) {
rtn=true;
is.close$();
}if (debug) {
System.err.println$S("Resource '" + file + "' was " + (rtn ? "" : "not") + " located by classloader." );
}if (rtn) {
protocol=$I$(10).CLASSLOADER;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Exception checking resources: " + file + " " + ex );
} else {
throw ex;
}
}
if (file.indexOf$S("://") > -1) {
protocol=$I$(10).URL;
} else {
protocol=$I$(10).FILE;
}var fp=null;
try {
if (debug) {
System.out.println$S("Trying to get contents of resource as " + protocol + ":" );
}fp=Clazz.new_($I$(9,1).c$$O$jalview_io_DataSourceType,[file, protocol]);
if (!fp.isValid$()) {
fp=null;
} else {
if (debug) {
System.out.println$S("Successful.");
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (debug) {
System.err.println$S("Exception when accessing content: " + e);
}fp=null;
} else {
throw e;
}
}
if (fp == null ) {
if (debug) {
System.out.println$S("Accessing as paste.");
}protocol=$I$(10).PASTE;
fp=null;
try {
fp=Clazz.new_($I$(9,1).c$$O$jalview_io_DataSourceType,[file, protocol]);
if (!fp.isValid$()) {
fp=null;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Failed to access content as paste!");
e.printStackTrace$();
fp=null;
} else {
throw e;
}
}
}if (fp == null ) {
return null;
}if (format == null ) {
return protocol;
} else {
try {
var idformat=Clazz.new_($I$(16,1)).identify$S$jalview_io_DataSourceType(file, protocol);
if (idformat == null ) {
if (debug) {
System.out.println$S("Format not identified. Inaccessible file.");
}return null;
}if (debug) {
System.out.println$S("Format identified as " + idformat + "and expected as " + format );
}if (idformat.equals$O(format)) {
if (debug) {
System.out.println$S("Protocol identified as " + protocol);
}return protocol;
} else {
if (debug) {
System.out.println$S("File deemed not accessible via " + protocol);
}fp.close$();
return null;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (debug) {
System.err.println$S("File deemed not accessible via " + protocol);
e.printStackTrace$();
}} else {
throw e;
}
}
}return null;
}, 1);

Clazz.newMeth(C$, 'getAlignFile$',  function () {
return this.alignFile;
});

C$.$static$=function(){C$.$static$=0;
C$.INVALID_CHARACTERS="Contains invalid characters";
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
