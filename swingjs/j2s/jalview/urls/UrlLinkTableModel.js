(function(){var P$=Clazz.newPackage("jalview.urls"),I$=[[0,'jalview.urls.UrlLinkDisplay','jalview.bin.Cache','jalview.util.UrlLink']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UrlLinkTableModel", null, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['primaryRow'],'O',['data','java.util.List','dataProvider','jalview.urls.api.UrlProviderI','displayColumns','java.util.List']]]

Clazz.newMeth(C$, 'c$$jalview_urls_api_UrlProviderI', function (baseData) {
Clazz.super_(C$, this);
this.dataProvider=baseData;
this.data=baseData.getLinksForTable$();
this.displayColumns=$I$(1).getDisplayColumnNames$();
this.primaryRow=0;
var it=this.data.iterator$();
while (it.hasNext$()){
if (it.next$().getIsPrimary$()) {
break;
} else {
this.primaryRow++;
}}
this.addTableModelListener$javax_swing_event_TableModelListener(((P$.UrlLinkTableModel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "UrlLinkTableModel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TableModelListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'tableChanged$javax_swing_event_TableModelEvent', function (e) {
try {
this.b$['jalview.urls.UrlLinkTableModel'].dataProvider.setUrlData$java_util_List(this.b$['jalview.urls.UrlLinkTableModel'].data);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalArgumentException")){
$I$(2).log.error$O(ex.getMessage$());
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.UrlLinkTableModel$1.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'getRowCount$', function () {
if (this.data == null ) {
return 0;
} else {
return this.data.size$();
}});

Clazz.newMeth(C$, 'getColumnCount$', function () {
return this.displayColumns.size$();
});

Clazz.newMeth(C$, 'getValueAt$I$I', function (rowIndex, columnIndex) {
return this.data.get$I(rowIndex).getValue$I(columnIndex);
});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (rowIndex, columnIndex) {
return this.data.get$I(rowIndex).isEditable$I(columnIndex);
});

Clazz.newMeth(C$, 'isRowEditable$I', function (rowIndex) {
return (this.dataProvider.isUserEntry$S(this.data.get$I(rowIndex).getId$()));
});

Clazz.newMeth(C$, 'isRowDeletable$I', function (rowIndex) {
return (this.dataProvider.isUserEntry$S(this.data.get$I(rowIndex).getId$()) && !this.data.get$I(rowIndex).getIsPrimary$() );
});

Clazz.newMeth(C$, 'setValueAt$O$I$I', function (aValue, rowIndex, columnIndex) {
if (columnIndex == 4) {
if (rowIndex != this.primaryRow) {
this.data.get$I(this.primaryRow).setValue$I$O(columnIndex, new Boolean(false));
this.fireTableRowsUpdated$I$I(this.primaryRow, this.primaryRow);
this.primaryRow=rowIndex;
this.data.get$I(rowIndex).setValue$I$O(columnIndex, aValue);
this.fireTableRowsUpdated$I$I(rowIndex, rowIndex);
}} else {
this.data.get$I(rowIndex).setValue$I$O(columnIndex, aValue);
this.fireTableRowsUpdated$I$I(rowIndex, rowIndex);
}});

Clazz.newMeth(C$, 'getColumnClass$I', function (columnIndex) {
return this.getValueAt$I$I(0, columnIndex).getClass$();
});

Clazz.newMeth(C$, 'getColumnName$I', function (columnIndex) {
return this.displayColumns.get$I(columnIndex);
});

Clazz.newMeth(C$, 'removeRow$I', function (rowIndex) {
this.data.remove$I(rowIndex);
if (this.primaryRow > rowIndex) {
this.primaryRow--;
}this.fireTableRowsDeleted$I$I(rowIndex, rowIndex);
});

Clazz.newMeth(C$, 'insertRow$S$S', function (name, url) {
var link=Clazz.new_($I$(3,1).c$$S$S$S,[name, url, name]);
var u=Clazz.new_($I$(1,1).c$$S$jalview_util_UrlLink$Z$Z,[name, link, true, false]);
var index=this.data.size$();
this.data.add$O(u);
this.fireTableRowsInserted$I$I(index, index);
return index;
});

Clazz.newMeth(C$, 'getPrimaryColumn$', function () {
return 4;
});

Clazz.newMeth(C$, 'getNameColumn$', function () {
return 1;
});

Clazz.newMeth(C$, 'getDatabaseColumn$', function () {
return 0;
});

Clazz.newMeth(C$, 'getIdColumn$', function () {
return 5;
});

Clazz.newMeth(C$, 'getUrlColumn$', function () {
return 2;
});

Clazz.newMeth(C$, 'getSelectedColumn$', function () {
return 3;
});

Clazz.newMeth(C$, 'isUserEntry$javax_swing_RowFilter_Entry', function (entry) {
return this.dataProvider.isUserEntry$S(entry.getStringValue$I(5));
});

Clazz.newMeth(C$, 'isUniqueName$S', function (name) {
return !this.dataProvider.contains$S(name);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
