(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'jalview.bin.Cache','jalview.datamodel.SequenceI','jalview.util.Comparison','jalview.datamodel.Sequence','java.util.Locale','jalview.datamodel.Alignment','jalview.datamodel.AlignmentAnnotation','jalview.io.FileParse']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FormatAdapter", null, 'jalview.io.AppletFormatAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignmentViewPanel',  function (viewpanel) {
;C$.superclazz.c$$jalview_api_AlignmentViewPanel.apply(this,[viewpanel]);C$.$init$.apply(this);
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignmentViewPanel$jalview_api_AlignExportSettingsI',  function (alignPanel, settings) {
;C$.superclazz.c$$jalview_api_AlignmentViewPanel$jalview_api_AlignExportSettingsI.apply(this,[alignPanel, settings]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'init',  function () {
if ($I$(1).getDefault$S$Z("STRUCT_FROM_PDB", true)) {
this.annotFromStructure=$I$(1).getDefault$S$Z("ADD_TEMPFACT_ANN", true);
this.localSecondaryStruct=$I$(1).getDefault$S$Z("ADD_SS_ANN", true);
this.serviceSecondaryStruct=$I$(1).getDefault$S$Z("USE_RNAVIEW", true);
} else {
this.annotFromStructure=false;
this.localSecondaryStruct=false;
this.serviceSecondaryStruct=false;
}}, p$1);

Clazz.newMeth(C$, 'formatSequences$jalview_io_FileFormatI$jalview_datamodel_SequenceIA$SA$IA',  function (format, seqs, omitHiddenColumns, exportRange) {
return this.formatSequences$jalview_io_FileFormatI$jalview_datamodel_SequenceIA(format, this.replaceStrings$jalview_datamodel_SequenceIA$SA$IA(seqs, omitHiddenColumns, exportRange));
});

Clazz.newMeth(C$, 'replaceStrings$jalview_datamodel_SequenceIA$SA$IA',  function (seqs, omitHiddenColumns, startEnd) {
if (omitHiddenColumns != null ) {
var tmp=Clazz.array($I$(2), [seqs.length]);
var startRes;
var endRes;
var startIndex;
var endIndex;
for (var i=0; i < seqs.length; i++) {
startRes=seqs[i].getStart$();
endRes=seqs[i].getEnd$();
if (startEnd != null ) {
startIndex=startEnd[0];
endIndex=startEnd[1];
while ($I$(3,"isGap$C",[seqs[i].getCharAt$I(startIndex)]) && startIndex < endIndex ){
++startIndex;
}
while ($I$(3,"isGap$C",[seqs[i].getCharAt$I(endIndex)]) && endIndex > startIndex ){
--endIndex;
}
startRes=seqs[i].findPosition$I(startIndex);
endRes=seqs[i].findPosition$I(endIndex);
}tmp[i]=Clazz.new_([seqs[i].getName$(), omitHiddenColumns[i], startRes, endRes],$I$(4,1).c$$S$S$I$I);
tmp[i].setDescription$S(seqs[i].getDescription$());
}
seqs=tmp;
}return seqs;
});

Clazz.newMeth(C$, 'formatSequences$jalview_io_FileFormatI$jalview_datamodel_SequenceIA',  function (format, seqs) {
var withSuffix=this.getCacheSuffixDefault$jalview_io_FileFormatI(format);
return format.getWriter$jalview_datamodel_AlignmentI(null).print$jalview_datamodel_SequenceIA$Z(seqs, withSuffix);
});

Clazz.newMeth(C$, 'getCacheSuffixDefault$jalview_io_FileFormatI',  function (format) {
return $I$(1,"getDefault$S$Z",[format.getName$().toUpperCase$java_util_Locale($I$(5).ROOT) + "_JVSUFFIX", true]);
});

Clazz.newMeth(C$, 'formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$SA$IA$jalview_datamodel_HiddenColumns',  function (format, alignment, omitHidden, exportRange, hidden) {
return this.formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$SA$IA$Z$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup(format, alignment, omitHidden, exportRange, this.getCacheSuffixDefault$jalview_io_FileFormatI(format), hidden, null);
});

Clazz.newMeth(C$, 'formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$SA$IA$Z$jalview_datamodel_HiddenColumns',  function (format, alignment, omitHidden, exportRange, suffix, hidden) {
return this.formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$SA$IA$Z$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup(format, alignment, omitHidden, exportRange, suffix, hidden, null);
});

Clazz.newMeth(C$, 'formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$SA$IA$Z$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup',  function (format, alignment, omitHidden, exportRange, suffix, hidden, selgp) {
if (omitHidden != null ) {
var alv=Clazz.new_([this.replaceStrings$jalview_datamodel_SequenceIA$SA$IA(alignment.getSequencesArray$(), omitHidden, exportRange)],$I$(6,1).c$$jalview_datamodel_SequenceIA);
var ala=alignment.getAlignmentAnnotation$();
if (ala != null ) {
for (var i=0; i < ala.length; i++) {
var na=Clazz.new_($I$(7,1).c$$jalview_datamodel_AlignmentAnnotation,[ala[i]]);
if (selgp != null ) {
na.makeVisibleAnnotation$I$I$jalview_datamodel_HiddenColumns(selgp.getStartRes$(), selgp.getEndRes$(), hidden);
} else {
na.makeVisibleAnnotation$jalview_datamodel_HiddenColumns(hidden);
}alv.addAnnotation$jalview_datamodel_AlignmentAnnotation(na);
}
}return this.formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$Z(format, alv, suffix);
}return this.formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$Z(format, alignment, suffix);
});

Clazz.newMeth(C$, 'readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI',  function (file, sourceType, fileFormat) {
var al=C$.superclazz.prototype.readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI.apply(this, [file, sourceType, fileFormat]);
return al;
});

Clazz.newMeth(C$, 'readFile$java_io_File$jalview_io_DataSourceType$jalview_io_FileFormatI',  function (file, sourceType, fileFormat) {
var al=C$.superclazz.prototype.readFile$java_io_File$S$jalview_io_DataSourceType$jalview_io_FileFormatI.apply(this, [file, null, sourceType, fileFormat]);
return al;
});

Clazz.newMeth(C$, 'readFromFile$jalview_io_FileParse$jalview_io_FileFormatI',  function (source, format) {
var al=C$.superclazz.prototype.readFromFile$jalview_io_FileParse$jalview_io_FileFormatI.apply(this, [source, format]);
return al;
});

Clazz.newMeth(C$, 'formatSequences$jalview_io_FileFormatI$jalview_api_AlignmentViewPanel$Z',  function (format, ap, selectedOnly) {
return this.formatSequences$jalview_io_FileFormatI$Z$jalview_api_AlignmentViewPanel$Z(format, this.getCacheSuffixDefault$jalview_io_FileFormatI(format), ap, selectedOnly);
});

Clazz.newMeth(C$, 'readFromFile$jalview_io_AlignmentFileReaderI$jalview_io_FileFormatI',  function (source, format) {
var fp=Clazz.new_([source.getInFile$(), source.getDataSourceType$()],$I$(8,1).c$$O$jalview_io_DataSourceType);
return this.readFromFile$jalview_io_FileParse$jalview_io_FileFormatI(fp, format);
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
