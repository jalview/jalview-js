(function(){var P$=Clazz.newPackage("jalview.fts.core"),I$=[[0,'jalview.fts.api.FTSDataColumnI','jalview.datamodel.SequenceI','javax.swing.table.DefaultTableModel','jalview.fts.core.DecimalFormatTableCellRenderer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FTSRestResponse");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['numberOfItemsFound'],'S',['responseTime'],'O',['searchSummary','java.util.Collection']]]

Clazz.newMeth(C$, 'getNumberOfItemsFound$',  function () {
return this.numberOfItemsFound;
});

Clazz.newMeth(C$, 'setNumberOfItemsFound$I',  function (itemFound) {
this.numberOfItemsFound=itemFound;
});

Clazz.newMeth(C$, 'getResponseTime$',  function () {
return this.responseTime;
});

Clazz.newMeth(C$, 'setResponseTime$S',  function (responseTime) {
this.responseTime=responseTime;
});

Clazz.newMeth(C$, 'getSearchSummary$',  function () {
return this.searchSummary;
});

Clazz.newMeth(C$, 'setSearchSummary$java_util_Collection',  function (searchSummary) {
this.searchSummary=searchSummary;
});

Clazz.newMeth(C$, 'getTableModel$jalview_fts_core_FTSRestRequest$java_util_Collection',  function (request, summariesList) {
var cols=request.getWantedFields$().toArray$OA(Clazz.array($I$(1), [0]));
var colOffset=request.getAssociatedSequence$() == null  ? 0 : 1;
var tableModel=((P$.FTSRestResponse$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FTSRestResponse$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.table.DefaultTableModel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, column) {
return false;
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (columnIndex) {
if (this.$finals$.colOffset == 1 && columnIndex == 0 ) {
return Clazz.getClass($I$(2),['addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation','addDBRef$jalview_datamodel_DBRefEntry','addPDBId$jalview_datamodel_PDBEntry','addSequenceFeature$jalview_datamodel_SequenceFeature','createDatasetSequence$','deleteChars$I$I','deleteFeature$jalview_datamodel_SequenceFeature','deriveSequence$','findFeatures$I$I$SA','findIndex$I','findPosition$I','findPositionMap$','findPositions$I$I','firstResidueOutsideIterator$java_util_Iterator','gapBitset$','gapMap$','getAlignmentAnnotations$S$S','getAlignmentAnnotations$S$S$S','getAllPDBEntries$','getAnnotation$','getAnnotation$S','getCharAt$I','getDBRefs$','getDatasetSequence$','getDescription$','getDisplayId$Z','getEnd$','getFeatures$','getGeneLoci$','getInsertions$','getInsertionsAsBits$','getLength$','getName$','getPDBEntry$S','getPrimaryDBRefs$','getRNA$','getSequence$','getSequence$I$I','getSequenceAsString$','getSequenceAsString$I$I','getSequenceFeatures$','getSequenceStringFromIterator$java_util_Iterator','getStart$','getSubSequence$I$I','getVamsasId$','hasAnnotation$jalview_datamodel_AlignmentAnnotation','insertCharAt$I$C','insertCharAt$I$I$C','isProtein$','removeAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation','replace$C$C','sequenceChanged$','setAlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA','setDBRefs$jalview_datamodel_Sequence_DBModList','setDatasetSequence$jalview_datamodel_SequenceI','setDescription$S','setEnd$I','setGeneLoci$S$S$S$jalview_util_MapList','setName$S','setPDBId$java_util_Vector','setRNA$fr_orsay_lri_varna_models_rna_RNA','setSequence$S','setSequenceFeatures$java_util_List','setStart$I','setVamsasId$S','transferAnnotation$jalview_datamodel_SequenceI$jalview_datamodel_Mapping','updatePDBIds$']);
}return this.$finals$.cols[columnIndex - this.$finals$.colOffset].getDataType$().getDataTypeClass$();
});
})()
), Clazz.new_($I$(3,1),[this, {colOffset:colOffset,cols:cols}],P$.FTSRestResponse$1));
if (request.getAssociatedSequence$() != null ) {
tableModel.addColumn$O("Ref Sequence");
}for (var field, $field = request.getWantedFields$().iterator$(); $field.hasNext$()&&((field=($field.next$())),1);) {
tableModel.addColumn$O(field.getName$());
}
for (var res, $res = summariesList.iterator$(); $res.hasNext$()&&((res=($res.next$())),1);) {
tableModel.addRow$OA(res.getSummaryData$());
}
return tableModel;
}, 1);

Clazz.newMeth(C$, 'configureTableColumn$javax_swing_JTable$java_util_Collection$java_util_Map',  function (tbl_summary, wantedFields, columnPrefs) {
for (var wantedField, $wantedField = wantedFields.iterator$(); $wantedField.hasNext$()&&((wantedField=($wantedField.next$())),1);) {
try {
tbl_summary.getColumn$O(wantedField.getName$()).setMinWidth$I(wantedField.getMinWidth$());
tbl_summary.getColumn$O(wantedField.getName$()).setMaxWidth$I(wantedField.getMaxWidth$());
var prefedWidth=columnPrefs.get$O(wantedField.getName$()) == null  ? wantedField.getPreferredWidth$() : (columnPrefs.get$O(wantedField.getName$())).$c();
tbl_summary.getColumn$O(wantedField.getName$()).setPreferredWidth$I(prefedWidth);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
if (wantedField.getDataType$().getDataTypeClass$() === Clazz.getClass(Double) ) {
var dfr=Clazz.new_([wantedField.getDataType$().isFormtted$(), wantedField.getDataType$().getSignificantFigures$()],$I$(4,1).c$$Z$I);
tbl_summary.getColumn$O(wantedField.getName$()).setCellRenderer$javax_swing_table_TableCellRenderer(dfr);
} else if (wantedField.getDataType$().getDataTypeClass$() === Clazz.getClass(Integer) ) {
var dfr=Clazz.new_([wantedField.getDataType$().isFormtted$(), wantedField.getDataType$().getSignificantFigures$()],$I$(4,1).c$$Z$I);
tbl_summary.getColumn$O(wantedField.getName$()).setCellRenderer$javax_swing_table_TableCellRenderer(dfr);
}}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
