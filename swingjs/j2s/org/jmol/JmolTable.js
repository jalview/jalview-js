(function(){var P$=Clazz.newPackage("org.jmol"),I$=[[0,'org.jmol.JmolTable','org.jmol.JmolPanel','org.jmol.util.Logger','javax.swing.JFrame','org.jmol.AppCloser','javax.swing.JTable',['org.jmol.JmolTable','.JmolPanelJTableModel'],['org.jmol.JmolTable','.JmolColumnModelListener'],'javax.swing.JScrollPane','java.awt.Dimension',['org.jmol.JmolTable','.JmolPanelCellRenderer'],['org.jmol.JmolTable','.JmolPanelCellEditor'],'org.jmol.adapter.smarter.SmarterJmolAdapter','org.jmol.api.JmolViewer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JmolTable", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['JmolColumnModelListener',8],['JmolPanelJTableModel',8],['JmolPanelCellRenderer',8],['JmolPanelCellEditor',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['STRUCTURE_COL']]]

Clazz.newMeth(C$, 'main$SA', function (args) {
if (args.length == 0) args=Clazz.array(String, -1, ["caffeine.xyz", "C6H6.smol"]);
var nobject=args.length;
var ncol=2;
var data=Clazz.array(java.lang.Object, [nobject, ncol]);
for (var i=0; i < nobject; i++) {
data[i][0]=Clazz.new_($I$(2,1));
var v=(data[i][0]).getViewer$();
var strError=v.openFile$S(args[i]);
if (strError != null ) {
$I$(3).error$S(strError);
}data[i][1]=args[i];
}
var colNames=Clazz.array(String, -1, ["Structure", "Filename"]);
C$.showMolecules$SA$OAA$I(colNames, data, nobject);
}, 1);

Clazz.newMeth(C$, 'showMolecules$SA$OAA$I', function (colNames, data, nmol) {
var frame=Clazz.new_($I$(4,1).c$$S,["Structure Viewer"]);
frame.addWindowListener$java_awt_event_WindowListener(Clazz.new_($I$(5,1)));
frame.setDefaultCloseOperation$I(3);
var mtable=Clazz.new_([Clazz.new_($I$(7,1).c$$OAA$SA,[data, colNames])],$I$(6,1).c$$javax_swing_table_TableModel);
mtable.setShowGrid$Z(true);
mtable.getColumnModel$().addColumnModelListener$javax_swing_event_TableColumnModelListener(Clazz.new_($I$(8,1).c$$javax_swing_JTable,[mtable]));
mtable.setCellSelectionEnabled$Z(true);
mtable.getTableHeader$().setReorderingAllowed$Z(false);
var scrollpane=Clazz.new_($I$(9,1).c$$java_awt_Component,[mtable]);
mtable.setPreferredScrollableViewportSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[500, 70]));
frame.getContentPane$().add$java_awt_Component(scrollpane);
var col=mtable.getColumnModel$().getColumn$I(C$.STRUCTURE_COL);
col.setCellRenderer$javax_swing_table_TableCellRenderer(Clazz.new_($I$(11,1)));
col.setCellEditor$javax_swing_table_TableCellEditor(Clazz.new_($I$(12,1)));
frame.pack$();
frame.setSize$I$I(300, 300);
frame.setVisible$Z(true);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.STRUCTURE_COL=0;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolTable, "JmolColumnModelListener", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.swing.event.TableColumnModelListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['table','javax.swing.JTable']]]

Clazz.newMeth(C$, 'c$$javax_swing_JTable', function (t) {
;C$.$init$.apply(this);
this.table=t;
}, 1);

Clazz.newMeth(C$, 'columnAdded$javax_swing_event_TableColumnModelEvent', function (e) {
});

Clazz.newMeth(C$, 'columnRemoved$javax_swing_event_TableColumnModelEvent', function (e) {
});

Clazz.newMeth(C$, 'columnMoved$javax_swing_event_TableColumnModelEvent', function (e) {
});

Clazz.newMeth(C$, 'columnMarginChanged$javax_swing_event_ChangeEvent', function (e) {
var colwidth=this.table.getColumnModel$().getColumn$I($I$(1).STRUCTURE_COL).getWidth$();
for (var i=0; i < this.table.getRowCount$(); i++) {
this.table.setRowHeight$I$I(i, colwidth);
}
});

Clazz.newMeth(C$, 'columnSelectionChanged$javax_swing_event_ListSelectionEvent', function (e) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolTable, "JmolPanelJTableModel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['rows','Object[][]','columns','String[]']]]

Clazz.newMeth(C$, 'c$$OAA$SA', function (objs, cols) {
Clazz.super_(C$, this);
this.rows=objs;
this.columns=cols;
}, 1);

Clazz.newMeth(C$, 'getColumnName$I', function (column) {
return this.columns[column];
});

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.rows.length;
});

Clazz.newMeth(C$, 'getColumnCount$', function () {
return this.columns.length;
});

Clazz.newMeth(C$, 'getValueAt$I$I', function (row, column) {
return this.rows[row][column];
});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, column) {
if (column == $I$(1).STRUCTURE_COL) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getColumnClass$I', function (column) {
return this.getValueAt$I$I(0, column).getClass$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolTable, "JmolPanelCellRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.jmol.JmolPanel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I', function (table, value, isSelected, hasFocus, rowIndex, vColIndex) {
return value;
});

Clazz.newMeth(C$, 'validate$', function () {
});

Clazz.newMeth(C$, 'revalidate$', function () {
});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O', function (propertyName, oldValue, newValue) {
});

Clazz.newMeth(C$, 'firePropertyChange$S$Z$Z', function (propertyName, oldValue, newValue) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JmolTable, "JmolPanelCellEditor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.AbstractCellEditor', 'javax.swing.table.TableCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I', function (table, value, isSelected, row, column) {
return value;
});

Clazz.newMeth(C$, 'getCellEditorValue$', function () {
return  Clazz.new_();
});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, column) {
if (column == $I$(1).STRUCTURE_COL) {
return true;
}return false;
});

Clazz.newMeth(C$, 'stopCellEditing$', function () {
return true;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
