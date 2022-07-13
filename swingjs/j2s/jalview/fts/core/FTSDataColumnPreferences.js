(function(){var P$=Clazz.newPackage("jalview.fts.core"),p$1={},I$=[[0,['jalview.fts.core.FTSDataColumnPreferences','.PreferenceSource'],'javax.swing.JTable','javax.swing.JScrollPane','java.util.HashMap','java.util.LinkedHashSet',['jalview.fts.core.FTSDataColumnPreferences','.FTSDataColumnPrefsTableModel'],'javax.swing.table.TableRowSorter','java.util.ArrayList',['javax.swing.RowSorter','.SortKey'],'javax.swing.SortOrder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FTSDataColumnPreferences", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JScrollPane');
C$.$classes$=[['PreferenceSource',25],['FTSDataColumnPrefsTableModel',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tbl_FTSDataColumnPrefs=Clazz.new_($I$(2,1));
this.scrl_pdbDocFieldConfig=Clazz.new_($I$(3,1).c$$java_awt_Component,[this.tbl_FTSDataColumnPrefs]);
this.map=Clazz.new_($I$(4,1));
this.structSummaryColumns=Clazz.new_($I$(5,1));
this.allFTSDataColumns=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['O',['tbl_FTSDataColumnPrefs','javax.swing.JTable','scrl_pdbDocFieldConfig','javax.swing.JScrollPane','map','java.util.HashMap','structSummaryColumns','java.util.Collection','+allFTSDataColumns','currentSource','jalview.fts.core.FTSDataColumnPreferences.PreferenceSource','ftsRestClient','jalview.fts.api.FTSRestClientI']]]

Clazz.newMeth(C$, 'c$$jalview_fts_core_FTSDataColumnPreferences_PreferenceSource$jalview_fts_api_FTSRestClientI',  function (source, ftsRestClient) {
Clazz.super_(C$, this);
this.ftsRestClient=ftsRestClient;
if (source.equals$O($I$(1).STRUCTURE_CHOOSER) || source.equals$O($I$(1).PREFERENCES) ) {
this.structSummaryColumns=(ftsRestClient).getAllDefaultDisplayedStructureDataColumns$();
}this.allFTSDataColumns.addAll$java_util_Collection(ftsRestClient.getAllFTSDataColumns$());
this.tbl_FTSDataColumnPrefs.setAutoCreateRowSorter$Z(true);
this.getViewport$().add$java_awt_Component(this.tbl_FTSDataColumnPrefs);
this.currentSource=source;
var columnNames=ftsRestClient.getPreferencesColumnsFor$jalview_fts_core_FTSDataColumnPreferences_PreferenceSource(source);
var data=Clazz.array(java.lang.Object, [this.allFTSDataColumns.size$(), 3]);
var x=0;
for (var field, $field = this.allFTSDataColumns.iterator$(); $field.hasNext$()&&((field=($field.next$())),1);) {
if (field.getName$().equalsIgnoreCase$S("all")) {
continue;
}switch (source) {
case $I$(1).SEARCH_SUMMARY:
data[x++]=Clazz.array(java.lang.Object, -1, [Boolean.valueOf$Z(ftsRestClient.getAllDefaultDisplayedFTSDataColumns$().contains$O(field)), field.getName$(), field.getGroup$()]);
break;
case $I$(1).STRUCTURE_CHOOSER:
data[x++]=Clazz.array(java.lang.Object, -1, [Boolean.valueOf$Z(this.structSummaryColumns.contains$O(field)), field.getName$(), field.getGroup$()]);
break;
case $I$(1).PREFERENCES:
data[x++]=Clazz.array(java.lang.Object, -1, [field.getName$(), Boolean.valueOf$Z(ftsRestClient.getAllDefaultDisplayedFTSDataColumns$().contains$O(field)), Boolean.valueOf$Z(this.structSummaryColumns.contains$O(field))]);
break;
default:
break;
}
this.map.put$O$O(field.getName$(), field);
}
var model=Clazz.new_($I$(6,1).c$$SA$OAA,[this, null, columnNames, data]);
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
var sorter=Clazz.new_([this.tbl_FTSDataColumnPrefs.getModel$()],$I$(7,1).c$$javax_swing_table_TableModel);
this.tbl_FTSDataColumnPrefs.setRowSorter$javax_swing_RowSorter(sorter);
var sortKeys=Clazz.new_($I$(8,1));
var columnIndexToSort=2;
sortKeys.add$O(Clazz.new_([columnIndexToSort, $I$(10).ASCENDING],$I$(9,1).c$$I$javax_swing_SortOrder));
sorter.setComparator$I$java_util_Comparator(columnIndexToSort, ((P$.FTSDataColumnPreferences$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FTSDataColumnPreferences$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$jalview_fts_api_FTSDataColumnI_FTSDataColumnGroupI$jalview_fts_api_FTSDataColumnI_FTSDataColumnGroupI','compare$O$O'],  function (o1, o2) {
return o1.getSortOrder$() - o2.getSortOrder$();
});
})()
), Clazz.new_(P$.FTSDataColumnPreferences$1.$init$,[this, null])));
sorter.setSortKeys$java_util_List(sortKeys);
this.tbl_FTSDataColumnPrefs.setAutoResizeMode$I(1);
break;
case $I$(1).PREFERENCES:
default:
break;
}
}, 1);

Clazz.newMeth(C$, 'getStructureSummaryFields$',  function () {
return this.structSummaryColumns;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.FTSDataColumnPreferences, "PreferenceSource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "SEARCH_SUMMARY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "STRUCTURE_CHOOSER", 1, []);
Clazz.newEnumConst($vals, C$.c$, "PREFERENCES", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FTSDataColumnPreferences, "FTSDataColumnPrefsTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['data','Object[][]','columnNames','String[]']]]

Clazz.newMeth(C$, 'c$$SA$OAA',  function (columnNames, data) {
Clazz.super_(C$, this);
this.data=data;
this.columnNames=columnNames;
}, 1);

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.columnNames.length;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.data.length;
});

Clazz.newMeth(C$, 'getColumnName$I',  function (col) {
return this.columnNames[col];
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, col) {
return this.data[row][col];
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (c) {
return this.getValueAt$I$I(0, c).getClass$();
});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, col) {
switch (this.b$['jalview.fts.core.FTSDataColumnPreferences'].currentSource) {
case $I$(1).SEARCH_SUMMARY:
case $I$(1).STRUCTURE_CHOOSER:
return (col == 0) && !this.isPrimaryKeyCell$I$I(row, 1) ;
case $I$(1).PREFERENCES:
return (col == 1 || col == 2 ) && !this.isPrimaryKeyCell$I$I(row, 0) ;
default:
return false;
}
});

Clazz.newMeth(C$, 'isPrimaryKeyCell$I$I',  function (row, col) {
var name=this.getValueAt$I$I(row, col).toString();
var pdbField=this.b$['jalview.fts.core.FTSDataColumnPreferences'].map.get$O(name);
return pdbField.isPrimaryKeyColumn$();
});

Clazz.newMeth(C$, 'setValueAt$O$I$I',  function (value, row, col) {
this.data[row][col]=value;
this.fireTableCellUpdated$I$I(row, col);
var name=null;
switch (this.b$['jalview.fts.core.FTSDataColumnPreferences'].currentSource) {
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
var ftsDataColumn=this.b$['jalview.fts.core.FTSDataColumnPreferences'].map.get$O(name);
if (this.b$['jalview.fts.core.FTSDataColumnPreferences'].currentSource === $I$(1).SEARCH_SUMMARY ) {
p$1.updatePrefs$java_util_Collection$jalview_fts_api_FTSDataColumnI$Z.apply(this, [this.b$['jalview.fts.core.FTSDataColumnPreferences'].ftsRestClient.getAllDefaultDisplayedFTSDataColumns$(), ftsDataColumn, selected]);
} else if (this.b$['jalview.fts.core.FTSDataColumnPreferences'].currentSource === $I$(1).STRUCTURE_CHOOSER ) {
p$1.updatePrefs$java_util_Collection$jalview_fts_api_FTSDataColumnI$Z.apply(this, [this.b$['jalview.fts.core.FTSDataColumnPreferences'].structSummaryColumns, ftsDataColumn, selected]);
} else if (this.b$['jalview.fts.core.FTSDataColumnPreferences'].currentSource === $I$(1).PREFERENCES ) {
if (col == 1) {
p$1.updatePrefs$java_util_Collection$jalview_fts_api_FTSDataColumnI$Z.apply(this, [this.b$['jalview.fts.core.FTSDataColumnPreferences'].ftsRestClient.getAllDefaultDisplayedFTSDataColumns$(), ftsDataColumn, selected]);
} else if (col == 2) {
p$1.updatePrefs$java_util_Collection$jalview_fts_api_FTSDataColumnI$Z.apply(this, [this.b$['jalview.fts.core.FTSDataColumnPreferences'].structSummaryColumns, ftsDataColumn, selected]);
}}});

Clazz.newMeth(C$, 'updatePrefs$java_util_Collection$jalview_fts_api_FTSDataColumnI$Z',  function (prefConfig, dataColumn, selected) {
if (prefConfig.contains$O(dataColumn) && !selected ) {
prefConfig.remove$O(dataColumn);
}if (!prefConfig.contains$O(dataColumn) && selected ) {
prefConfig.add$O(dataColumn);
}}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
