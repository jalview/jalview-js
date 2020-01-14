(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'Thread','javax.swing.SwingUtilities','java.util.Vector','jalview.io.DataSourceType','jalview.bin.Cache','java.util.StringTokenizer','StringBuffer','Runtime','jalview.gui.Desktop','jalview.io.IdentifyFile','jalview.bin.Jalview','jalview.gui.JvOptionPane','jalview.util.MessageManager','jalview.io.AppletFormatAdapter','jalview.io.FileFormat','jalview.project.Jalview2XML','jalview.io.FormatAdapter','java.io.File','jalview.ws.utils.UrlDownloadClient','jalview.structure.StructureSelectionManager','jalview.gui.AlignFrame','jalview.json.binding.biojson.v1.ColourSchemeMapper','java.io.BufferedReader','java.io.FileReader','jalview.util.Platform','java.io.InputStreamReader','java.io.ByteArrayInputStream']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileLoader", null, null, 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.file=null;
this.protocol=null;
this.format=null;
this.source=null;
this.viewport=null;
this.alignFrame=null;
this.loadtime=0;
this.memused=0;
this.raiseGUI=false;
this.selectedFile=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.source=null;
this.raiseGUI=true;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z.apply(this, [true]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (raiseGUI) {
C$.$init$.apply(this);
this.raiseGUI=raiseGUI;
}, 1);

Clazz.newMeth(C$, 'LoadFile$jalview_gui_AlignViewport$O$jalview_io_DataSourceType$jalview_io_FileFormatI', function (viewport, file, protocol, format) {
this.viewport=viewport;
if (Clazz.instanceOf(file, "java.io.File")) {
this.selectedFile=file;
file=this.selectedFile.getPath$();
}this.LoadFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(file.toString(), protocol, format);
});

Clazz.newMeth(C$, 'LoadFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI', function (file, protocol, format) {
this.file=file;
this.protocol=protocol;
this.format=format;
var loader=Clazz.new_($I$(1).c$$Runnable,[this]);
$I$(2).invokeLater$Runnable(((P$.FileLoader$1||
(function(){var C$=Clazz.newClass(P$, "FileLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.loader.start$();
});
})()
), Clazz.new_(P$.FileLoader$1.$init$, [this, {loader: loader}])));
});

Clazz.newMeth(C$, 'LoadFile$S$jalview_io_DataSourceType', function (file, protocol) {
this.LoadFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(file, protocol, null);
});

Clazz.newMeth(C$, 'LoadFileWaitTillLoaded$S$jalview_io_DataSourceType', function (file, sourceType) {
return this.LoadFileWaitTillLoaded$S$jalview_io_DataSourceType$jalview_io_FileFormatI(file, sourceType, null);
});

Clazz.newMeth(C$, 'LoadFileWaitTillLoaded$S$jalview_io_DataSourceType$jalview_io_FileFormatI', function (file, sourceType, format) {
this.file=file;
this.protocol=sourceType;
this.format=format;
return this._LoadFileWaitTillLoaded$();
});

Clazz.newMeth(C$, 'LoadFileWaitTillLoaded$java_io_File$jalview_io_DataSourceType$jalview_io_FileFormatI', function (file, sourceType, format) {
this.selectedFile=file;
this.file=file.getPath$();
this.protocol=sourceType;
this.format=format;
return this._LoadFileWaitTillLoaded$();
});

Clazz.newMeth(C$, 'LoadFileWaitTillLoaded$jalview_io_AlignmentFileReaderI$jalview_io_FileFormatI', function (source, format) {
this.source=source;
this.file=source.getInFile$();
this.protocol=source.getDataSourceType$();
this.format=format;
return this._LoadFileWaitTillLoaded$();
});

Clazz.newMeth(C$, '_LoadFileWaitTillLoaded$', function () {
this.run$();
return this.alignFrame;
});

Clazz.newMeth(C$, 'updateRecentlyOpened$', function () {
var recent=Clazz.new_($I$(3));
if (this.protocol === $I$(4).PASTE ) {
return;
}if (this.file != null  && this.file.indexOf$S(System.getProperty$S("java.io.tmpdir")) > -1 ) {
return;
}var type=this.protocol === $I$(4).FILE  ? "RECENT_FILE" : "RECENT_URL";
var historyItems=$I$(5).getProperty$S(type);
var st;
if (historyItems != null ) {
st=Clazz.new_($I$(6).c$$S$S,[historyItems, "\t"]);
while (st.hasMoreTokens$()){
recent.addElement$TE(st.nextToken$().trim$());
}
}if (recent.contains$O(this.file)) {
recent.remove$O(this.file);
}var newHistory=Clazz.new_($I$(7).c$$S,[this.file]);
for (var i=0; i < recent.size$() && i < 10 ; i++) {
newHistory.append$S("\t");
newHistory.append$S(recent.elementAt$I(i));
}
$I$(5).setProperty$S$S(type, newHistory.toString());
if (this.protocol === $I$(4).FILE ) {
$I$(5).setProperty$S$S("DEFAULT_FILE_FORMAT", this.format.getName$());
}});

Clazz.newMeth(C$, 'run$', function () {
var title=this.protocol === $I$(4).PASTE  ? "Copied From Clipboard" : this.file;
var rt=$I$(8).getRuntime$();
try {
if ($I$(9).instance != null ) {
$I$(9).instance.startLoading$O(this.file);
}if (this.format == null ) {
if (this.source != null ) {
this.format=Clazz.new_($I$(10)).identify$jalview_io_AlignmentFileReaderI$Z(this.source, false);
} else if (this.selectedFile != null ) {
this.format=Clazz.new_($I$(10)).identify$java_io_File$jalview_io_DataSourceType(this.selectedFile, this.protocol);
} else {
this.format=Clazz.new_($I$(10)).identify$S$jalview_io_DataSourceType(this.file, this.protocol);
}}if (this.format == null ) {
$I$(9).instance.stopLoading$();
System.err.println$S("The input file \"" + this.file + "\" has null or unidentifiable data content!" );
if (!$I$(11).isHeadlessMode$()) {
$I$(12).showInternalMessageDialog$java_awt_Component$S$S$I($I$(9).desktop, $I$(13).getString$S("label.couldnt_read_data") + " in " + this.file + "\n" + $I$(14).getSupportedFormats$() , $I$(13).getString$S("label.couldnt_read_data"), 2);
}return;
}if ($I$(9).desktop != null  && $I$(9).desktop.isShowMemoryUsage$() ) {
System.gc$();
this.memused=(rt.maxMemory$() - rt.totalMemory$() + rt.freeMemory$());
}this.loadtime=-System.currentTimeMillis$();
var al=null;
if ($I$(15).Jalview.equals$O(this.format)) {
if (this.source != null ) {
System.err.println$S("IMPLEMENTATION ERROR: Cannot read consecutive Jalview XML projects from a stream.");
}this.alignFrame=Clazz.new_($I$(16).c$$Z,[this.raiseGUI]).loadJalviewAlign$O(this.selectedFile == null  ? this.file : this.selectedFile);
} else {
var error=$I$(14).getSupportedFormats$();
try {
if (this.source != null ) {
al=Clazz.new_($I$(17)).readFromFile$jalview_io_AlignmentFileReaderI$jalview_io_FileFormatI(this.source, this.format);
} else {
var fa=Clazz.new_($I$(17));
var downloadStructureFile=this.format.isStructureFile$() && this.protocol.equals$O($I$(4).URL) ;
if (downloadStructureFile) {
var structExt=this.format.getExtensions$().split$S(",")[0];
var urlLeafName=this.file.substring$I$I(this.file.lastIndexOf$S(System.getProperty$S("file.separator")), this.file.lastIndexOf$S("."));
var tempStructureFileStr=C$.createNamedJvTempFile$S$S(urlLeafName, structExt);
var tempFile=Clazz.new_($I$(18).c$$S,[tempStructureFileStr]);
$I$(19).download$S$java_io_File(this.file, tempFile);
al=fa.readFile$java_io_File$jalview_io_DataSourceType$jalview_io_FileFormatI(tempFile, $I$(4).FILE, this.format);
this.source=fa.getAlignFile$();
} else {
if (this.selectedFile == null ) {
al=fa.readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(this.file, this.protocol, this.format);
} else {
al=fa.readFile$java_io_File$jalview_io_DataSourceType$jalview_io_FileFormatI(this.selectedFile, this.protocol, this.format);
}this.source=fa.getAlignFile$();
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
error=ex.getMessage$();
} else {
throw ex;
}
}
if ((al != null ) && (al.getHeight$() > 0) && al.hasValidSequence$()  ) {
for (var sq, $sq = al.getSequences$().iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
while (sq.getDatasetSequence$() != null ){
sq=sq.getDatasetSequence$();
}
if (sq.getAllPDBEntries$() != null ) {
for (var pdbe, $pdbe = sq.getAllPDBEntries$().iterator$(); $pdbe.hasNext$()&&((pdbe=($pdbe.next$())),1);) {
$I$(20).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider($I$(9).instance).registerPDBEntry$jalview_datamodel_PDBEntry(pdbe);
}
}}
var proxyColourScheme=this.source.getFeatureColourScheme$();
if (this.viewport != null ) {
if (proxyColourScheme != null ) {
this.viewport.applyFeaturesStyle$jalview_api_FeatureSettingsModelI(proxyColourScheme);
}this.viewport.addAlignment$jalview_datamodel_AlignmentI$S(al, title);
} else {
if (Clazz.instanceOf(this.source, "jalview.api.ComplexAlignFile")) {
var colSel=(this.source).getHiddenColumns$();
var hiddenSeqs=(this.source).getHiddenSequences$();
var colourSchemeName=(this.source).getGlobalColourScheme$();
var fd=(this.source).getDisplayedFeatures$();
this.alignFrame=Clazz.new_($I$(21).c$$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA$jalview_datamodel_HiddenColumns$I$I,[al, hiddenSeqs, colSel, 700, 500]);
this.alignFrame.getViewport$().setFeaturesDisplayed$jalview_api_FeaturesDisplayedI(fd);
this.alignFrame.getViewport$().setShowSequenceFeatures$Z((this.source).isShowSeqFeatures$());
var cs=$I$(22).getJalviewColourScheme$S$jalview_datamodel_AnnotatedCollectionI(colourSchemeName, al);
if (cs != null ) {
this.alignFrame.changeColour$jalview_schemes_ColourSchemeI(cs);
}} else {
this.alignFrame=Clazz.new_($I$(21).c$$jalview_datamodel_AlignmentI$I$I,[al, 700, 500]);
if (Clazz.instanceOf(this.source, "jalview.api.FeaturesSourceI")) {
this.alignFrame.getViewport$().setShowSequenceFeatures$Z(true);
}}if (!(this.protocol === $I$(4).PASTE )) {
this.alignFrame.setFileName$S$jalview_io_FileFormatI(this.file, this.format);
this.alignFrame.setFileObject$java_io_File(this.selectedFile);
}if (proxyColourScheme != null ) {
this.alignFrame.getViewport$().applyFeaturesStyle$jalview_api_FeatureSettingsModelI(proxyColourScheme);
}this.alignFrame.setStatus$S($I$(13).formatMessage$S$SA("label.successfully_loaded_file", Clazz.array(String, -1, [title])));
if (this.raiseGUI) {
$I$(9).addInternalFrame$javax_swing_JInternalFrame$S$I$I(this.alignFrame, title, 700, 500);
}try {
this.alignFrame.setMaximum$Z($I$(5).getDefault$S$Z("SHOW_FULLSCREEN", false));
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.PropertyVetoException")){
} else {
throw ex;
}
}
}} else {
if ($I$(9).instance != null ) {
$I$(9).instance.stopLoading$();
}var errorMessage=$I$(13).getString$S("label.couldnt_load_file") + " " + title + "\n" + error ;
if (this.raiseGUI && $I$(9).desktop != null  ) {
$I$(2).invokeLater$Runnable(((P$.FileLoader$2||
(function(){var C$=Clazz.newClass(P$, "FileLoader$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(12).showInternalMessageDialog$java_awt_Component$S$S$I($I$(9).desktop, this.$finals$.errorMessage, $I$(13).getString$S("label.error_loading_file"), 2);
});
})()
), Clazz.new_(P$.FileLoader$2.$init$, [this, {errorMessage: errorMessage}])));
} else {
System.err.println$S(errorMessage);
}}}this.updateRecentlyOpened$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var er = e$$;
{
System.err.println$S("Exception whilst opening file '" + this.file);
er.printStackTrace$();
if (this.raiseGUI) {
$I$(2).invokeLater$Runnable(((P$.FileLoader$3||
(function(){var C$=Clazz.newClass(P$, "FileLoader$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(12).showInternalMessageDialog$java_awt_Component$S$S$I($I$(9).desktop, $I$(13).formatMessage$S$SA("label.problems_opening_file", Clazz.array(String, -1, [this.b$['jalview.io.FileLoader'].file])), $I$(13).getString$S("label.file_open_error"), 2);
});
})()
), Clazz.new_(P$.FileLoader$3.$init$, [this, null])));
}this.alignFrame=null;
}
} else if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var er = e$$;
{
er.printStackTrace$();
this.alignFrame=null;
if (this.raiseGUI) {
$I$(2).invokeLater$Runnable(((P$.FileLoader$4||
(function(){var C$=Clazz.newClass(P$, "FileLoader$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(12).showInternalMessageDialog$java_awt_Component$S$S$I($I$(9).desktop, $I$(13).formatMessage$S$SA("warn.out_of_memory_loading_file", Clazz.array(String, -1, [this.b$['jalview.io.FileLoader'].file])), $I$(13).getString$S("label.out_of_memory"), 2);
});
})()
), Clazz.new_(P$.FileLoader$4.$init$, [this, null])));
}System.err.println$S("Out of memory loading file " + this.file + "!!" );
}
} else {
throw e$$;
}
}
this.loadtime+=System.currentTimeMillis$();
this.memused=this.memused - (rt.maxMemory$() - rt.totalMemory$() + rt.freeMemory$());
if ($I$(9).desktop != null  && $I$(9).desktop.isShowMemoryUsage$() ) {
if (this.alignFrame != null ) {
var al=this.alignFrame.getViewport$().getAlignment$();
System.out.println$S("Loaded '" + title + "' in " + new Double((this.loadtime / 1000.0)).toString() + "s, took an additional " + new Double((1.0 * this.memused / (1048576.0))).toString() + " MB (" + al.getHeight$() + " seqs by " + al.getWidth$() + " cols)" );
} else {
System.out.println$S("Failed to load '" + title + "' in " + new Double((this.loadtime / 1000.0)).toString() + "s, took an additional " + new Double((1.0 * this.memused / (1048576.0))).toString() + " MB (alignment is null)" );
}}if ($I$(9).instance != null ) {
$I$(9).instance.stopLoading$();
}});

Clazz.newMeth(C$, 'createNamedJvTempFile$S$S', function (fileName, extension) {
var seprator=System.getProperty$S("file.separator");
var jvTempDir=System.getProperty$S("java.io.tmpdir") + "jalview" + seprator + System.currentTimeMillis$() ;
var tempStructFile=Clazz.new_($I$(18).c$$S,[jvTempDir + seprator + fileName + "." + extension ]);
tempStructFile.mkdirs$();
return tempStructFile.toString();
}, 1);

Clazz.newMeth(C$, 'getBufferedReader$O', function (file) {
if (Clazz.instanceOf(file, "java.lang.String")) {
return Clazz.new_($I$(23).c$$java_io_Reader,[Clazz.new_($I$(24).c$$S,[file])]);
}var bytes=$I$(25).getFileBytes$java_io_File(file);
if (bytes != null ) {
return Clazz.new_($I$(23).c$$java_io_Reader,[Clazz.new_($I$(26).c$$java_io_InputStream,[Clazz.new_($I$(27).c$$BA,[bytes])])]);
}return Clazz.new_($I$(23).c$$java_io_Reader,[Clazz.new_($I$(24).c$$java_io_File,[file])]);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
