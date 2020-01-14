(function(){var P$=Clazz.newPackage("jalview.fts.core"),I$=[[0,'jalview.fts.api.FTSDataColumnI','javax.swing.table.DefaultTableModel','jalview.fts.core.DecimalFormatTableCellRenderer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FTSRestResponse");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.numberOfItemsFound=0;
this.responseTime=null;
this.searchSummary=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getNumberOfItemsFound$', function () {
return this.numberOfItemsFound;
});

Clazz.newMeth(C$, 'setNumberOfItemsFound$I', function (itemFound) {
this.numberOfItemsFound=itemFound;
});

Clazz.newMeth(C$, 'getResponseTime$', function () {
return this.responseTime;
});

Clazz.newMeth(C$, 'setResponseTime$S', function (responseTime) {
this.responseTime=responseTime;
});

Clazz.newMeth(C$, 'getSearchSummary$', function () {
return this.searchSummary;
});

Clazz.newMeth(C$, 'setSearchSummary$java_util_Collection', function (searchSummary) {
this.searchSummary=searchSummary;
});

Clazz.newMeth(C$, 'getTableModel$jalview_fts_core_FTSRestRequest$java_util_Collection', function (request, summariesList) {
var cols=request.getWantedFields$().toArray$TTA(Clazz.array($I$(1), [0]));
var colOffset=request.getAssociatedSequence$() == null  ? 0 : 1;
var tableModel=((P$.FTSRestResponse$1||
(function(){var C$=Clazz.newClass(P$, "FTSRestResponse$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.table.DefaultTableModel'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, column) {
return false;
});

Clazz.newMeth(C$, 'getColumnClass$I', function (columnIndex) {
if (this.$finals$.colOffset == 1 && columnIndex == 0 ) {
return Clazz.getClass(String);
}return this.$finals$.cols[columnIndex - this.$finals$.colOffset].getDataType$().getDataTypeClass$();
});
})()
), Clazz.new_($I$(2), [this, {colOffset: colOffset, cols: cols}],P$.FTSRestResponse$1));
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

Clazz.newMeth(C$, 'configureTableColumn$javax_swing_JTable$java_util_Collection$java_util_Map', function (tbl_summary, wantedFields, columnPrefs) {
for (var wantedField, $wantedField = wantedFields.iterator$(); $wantedField.hasNext$()&&((wantedField=($wantedField.next$())),1);) {
try {
tbl_summary.getColumn$O(wantedField.getName$()).setMinWidth$I(wantedField.getMinWidth$());
tbl_summary.getColumn$O(wantedField.getName$()).setMaxWidth$I(wantedField.getMaxWidth$());
var prefedWidth=columnPrefs.get$O(wantedField.getName$()) == null  ? wantedField.getPreferredWidth$() : (columnPrefs.get$O(wantedField.getName$())).intValue$();
tbl_summary.getColumn$O(wantedField.getName$()).setPreferredWidth$I(prefedWidth);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
if (wantedField.getDataType$().getDataTypeClass$() === Clazz.getClass(Double) ) {
var dfr=Clazz.new_($I$(3).c$$Z$I,[wantedField.getDataType$().isFormtted$(), wantedField.getDataType$().getSignificantFigures$()]);
tbl_summary.getColumn$O(wantedField.getName$()).setCellRenderer$javax_swing_table_TableCellRenderer(dfr);
} else if (wantedField.getDataType$().getDataTypeClass$() === Clazz.getClass(Integer) ) {
var dfr=Clazz.new_($I$(3).c$$Z$I,[wantedField.getDataType$().isFormtted$(), wantedField.getDataType$().getSignificantFigures$()]);
tbl_summary.getColumn$O(wantedField.getName$()).setCellRenderer$javax_swing_table_TableCellRenderer(dfr);
}}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
