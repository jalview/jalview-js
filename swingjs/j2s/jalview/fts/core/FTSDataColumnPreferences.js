(function(){var P$=Clazz.newPackage("jalview.fts.core"),p$1={},I$=[[0,['jalview.fts.core.FTSDataColumnPreferences','.PreferenceSource'],'javax.swing.JTable','javax.swing.JScrollPane','java.util.HashMap','java.util.LinkedHashSet',['jalview.fts.core.FTSDataColumnPreferences','.FTSDataColumnPrefsTableModel'],'javax.swing.table.TableRowSorter','java.util.ArrayList',['javax.swing.RowSorter','.SortKey'],'javax.swing.SortOrder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FTSDataColumnPreferences", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JScrollPane');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tbl_FTSDataColumnPrefs=null;
this.scrl_pdbDocFieldConfig=null;
this.map=null;
this.structSummaryColumns=null;
this.allFTSDataColumns=null;
this.currentSource=null;
this.ftsRestClient=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.tbl_FTSDataColumnPrefs=Clazz.new_($I$(2));
this.scrl_pdbDocFieldConfig=Clazz.new_($I$(3).c$$java_awt_Component,[this.tbl_FTSDataColumnPrefs]);
this.map=Clazz.new_($I$(4));
this.structSummaryColumns=Clazz.new_($I$(5));
this.allFTSDataColumns=Clazz.new_($I$(5));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_fts_core_FTSDataColumnPreferences_PreferenceSource$jalview_fts_api_FTSRestClientI', function (source, ftsRestClient) {
Clazz.super_(C$, this,1);
this.ftsRestClient=ftsRestClient;
if (source.equals$O($I$(1).STRUCTURE_CHOOSER) || source.equals$O($I$(1).PREFERENCES) ) {
this.structSummaryColumns=(ftsRestClient).getAllDefaultDisplayedStructureDataColumns$();
}this.allFTSDataColumns.addAll$java_util_Collection(ftsRestClient.getAllFTSDataColumns$());
this.tbl_FTSDataColumnPrefs.setAutoCreateRowSorter$Z(true);
this.getViewport$().add$java_awt_Component(this.tbl_FTSDataColumnPrefs);
this.currentSource=source;
var columnNames=null;
switch (source) {
case $I$(1).SEARCH_SUMMARY:
columnNames=Clazz.array(String, -1, ["", "Display", "Group"]);
break;
case $I$(1).STRUCTURE_CHOOSER:
columnNames=Clazz.array(String, -1, ["", "Display", "Group"]);
break;
case $I$(1).PREFERENCES:
columnNames=Clazz.array(String, -1, ["PDB Field", "Show in search summary", "Show in structure summary"]);
break;
default:
break;
}
var data=Clazz.array(java.lang.Object, [this.allFTSDataColumns.size$() - 1, 3]);
var x=0;
for (var field, $field = this.allFTSDataColumns.iterator$(); $field.hasNext$()&&((field=($field.next$())),1);) {
if (field.getName$().equalsIgnoreCase$S("all")) {
continue;
}switch (source) {
case $I$(1).SEARCH_SUMMARY:
data[x++]=Clazz.array(java.lang.Object, -1, [new Boolean(ftsRestClient.getAllDefaultDisplayedFTSDataColumns$().contains$O(field)), field.getName$(), field.getGroup$()]);
break;
case $I$(1).STRUCTURE_CHOOSER:
data[x++]=Clazz.array(java.lang.Object, -1, [new Boolean(this.structSummaryColumns.contains$O(field)), field.getName$(), field.getGroup$()]);
break;
case $I$(1).PREFERENCES:
data[x++]=Clazz.array(java.lang.Object, -1, [field.getName$(), new Boolean(ftsRestClient.getAllDefaultDisplayedFTSDataColumns$().contains$O(field)), new Boolean(this.structSummaryColumns.contains$O(field))]);
break;
default:
break;
}
this.map.put$TK$TV(field.getName$(), field);
}
var model=Clazz.new_($I$(6).c$$SA$OAA, [this, null, columnNames, data]);
this.tbl_FTSDataColumnPrefs.setModel$javax_swing_table_TableModel(model);
switch (source) {
case $I$(1).SEARCH_SUMMARY:
case $I$(1).STRUCTURE_CHOOSER:
this.tbl_FTSDataColumnPrefs.getColumnModel$().getColumn$I(0).setPreferredWidth$I(30);
this.tbl_FTSDataColumnPrefs.getColumnModel$().getColumn$I(0).setMinWidth$I(20);
this.tbl_FTSDataColumnPrefs.getColumnModel$().getColumn$I(0).setMaxWidth$I(40);
this.tbl_FTSDataColumnPrefs.getColumnModel$().getColumn$I(1).setPreferredWidth$I(150);
this.tbl_FTSDataColumnPrefs.getColumnModel$().getColumn$I(1).setMinWidth$I(150);
this.tbl_FTSDataColumnPrefs.getColumnModel$().getColumn$I(2).setPreferredWidth$I(150);
this.tbl_FTSDataColumnPrefs.getColumnModel$().getColumn$I(2).setMinWidth$I(150);
var sorter=Clazz.new_($I$(7).c$$TM,[this.tbl_FTSDataColumnPrefs.getModel$()]);
this.tbl_FTSDataColumnPrefs.setRowSorter$javax_swing_RowSorter(sorter);
var sortKeys=Clazz.new_($I$(8));
var columnIndexToSort=2;
sortKeys.add$TE(Clazz.new_($I$(9).c$$I$javax_swing_SortOrder,[columnIndexToSort, $I$(10).ASCENDING]));
sorter.setComparator$I$java_util_Comparator(columnIndexToSort, ((P$.FTSDataColumnPreferences$1||
(function(){var C$=Clazz.newClass(P$, "FTSDataColumnPreferences$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$jalview_fts_api_FTSDataColumnI_FTSDataColumnGroupI$jalview_fts_api_FTSDataColumnI_FTSDataColumnGroupI','compare$','compare$TT$TT'], function (o1, o2) {
return o1.getSortOrder$() - o2.getSortOrder$();
});
})()
), Clazz.new_(P$.FTSDataColumnPreferences$1.$init$, [this, null])));
sorter.setSortKeys$java_util_List(sortKeys);
this.tbl_FTSDataColumnPrefs.setAutoResizeMode$I(1);
break;
case $I$(1).PREFERENCES:
default:
break;
}
}, 1);

Clazz.newMeth(C$, 'getStructureSummaryFields$', function () {
return this.structSummaryColumns;
});
;
(function(){var C$=Clazz.newClass(P$.FTSDataColumnPreferences, "PreferenceSource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "SEARCH_SUMMARY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "STRUCTURE_CHOOSER", 1, []);
Clazz.newEnumConst($vals, C$.c$, "PREFERENCES", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.FTSDataColumnPreferences, "FTSDataColumnPrefsTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.data=null;
this.columnNames=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$SA$OAA', function (columnNames, data) {
Clazz.super_(C$, this,1);
this.data=data;
this.columnNames=columnNames;
}, 1);

Clazz.newMeth(C$, 'getColumnCount$', function () {
return this.columnNames.length;
});

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.data.length;
});

Clazz.newMeth(C$, 'getColumnName$I', function (col) {
return this.columnNames[col];
});

Clazz.newMeth(C$, 'getValueAt$I$I', function (row, col) {
return this.data[row][col];
});

Clazz.newMeth(C$, 'getColumnClass$I', function (c) {
return this.getValueAt$I$I(0, c).getClass$();
});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, col) {
switch (this.this$0.currentSource) {
case $I$(1).SEARCH_SUMMARY:
case $I$(1).STRUCTURE_CHOOSER:
return (col == 0) && !this.isPrimaryKeyCell$I$I(row, 1) ;
case $I$(1).PREFERENCES:
return (col == 1 || col == 2 ) && !this.isPrimaryKeyCell$I$I(row, 0) ;
default:
return false;
}
});

Clazz.newMeth(C$, 'isPrimaryKeyCell$I$I', function (row, col) {
var name=this.getValueAt$I$I(row, col).toString();
var pdbField=this.this$0.map.get$O(name);
return pdbField.isPrimaryKeyColumn$();
});

Clazz.newMeth(C$, 'setValueAt$O$I$I', function (value, row, col) {
this.data[row][col]=value;
this.fireTableCellUpdated$I$I(row, col);
var name=null;
switch (this.this$0.currentSource) {
case $I$(1).SEARCH_SUMMARY:
case $I$(1).STRUCTURE_CHOOSER:
name=this.getValueAt$I$I(row, 1).toString();
break;
case $I$(1).PREFERENCES:
name=this.getValueAt$I$I(row, 0).toString();
break;
default:
break;
}
var selected=(value).booleanValue$();
var ftsDataColumn=this.this$0.map.get$O(name);
if (this.this$0.currentSource === $I$(1).SEARCH_SUMMARY ) {
p$1.updatePrefs$java_util_Collection$jalview_fts_api_FTSDataColumnI$Z.apply(this, [this.this$0.ftsRestClient.getAllDefaultDisplayedFTSDataColumns$(), ftsDataColumn, selected]);
} else if (this.this$0.currentSource === $I$(1).STRUCTURE_CHOOSER ) {
p$1.updatePrefs$java_util_Collection$jalview_fts_api_FTSDataColumnI$Z.apply(this, [this.this$0.structSummaryColumns, ftsDataColumn, selected]);
} else if (this.this$0.currentSource === $I$(1).PREFERENCES ) {
if (col == 1) {
p$1.updatePrefs$java_util_Collection$jalview_fts_api_FTSDataColumnI$Z.apply(this, [this.this$0.ftsRestClient.getAllDefaultDisplayedFTSDataColumns$(), ftsDataColumn, selected]);
} else if (col == 2) {
p$1.updatePrefs$java_util_Collection$jalview_fts_api_FTSDataColumnI$Z.apply(this, [this.this$0.structSummaryColumns, ftsDataColumn, selected]);
}}});

Clazz.newMeth(C$, 'updatePrefs$java_util_Collection$jalview_fts_api_FTSDataColumnI$Z', function (prefConfig, dataColumn, selected) {
if (prefConfig.contains$O(dataColumn) && !selected ) {
prefConfig.remove$O(dataColumn);
}if (!prefConfig.contains$O(dataColumn) && selected ) {
prefConfig.add$TE(dataColumn);
}}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
