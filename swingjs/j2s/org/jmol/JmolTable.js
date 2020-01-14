(function(){var P$=Clazz.newPackage("org.jmol"),I$=[[0,'org.jmol.JmolTable','org.jmol.JmolPanel','org.jmol.util.Logger','javax.swing.JFrame','org.jmol.AppCloser','javax.swing.JTable',['org.jmol.JmolTable','.JmolPanelJTableModel'],['org.jmol.JmolTable','.JmolColumnModelListener'],'javax.swing.JScrollPane','java.awt.Dimension',['org.jmol.JmolTable','.JmolPanelCellRenderer'],['org.jmol.JmolTable','.JmolPanelCellEditor'],'org.jmol.adapter.smarter.SmarterJmolAdapter','org.jmol.api.JmolViewer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JmolTable", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.STRUCTURE_COL=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.STRUCTURE_COL=0;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
if (args.length == 0) args=Clazz.array(String, -1, ["caffeine.xyz", "C6H6.smol"]);
var nobject=args.length;
var ncol=2;
var data=Clazz.array(java.lang.Object, [nobject, ncol]);
for (var i=0; i < nobject; i++) {
data[i][0]=Clazz.new_($I$(2));
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
var frame=Clazz.new_($I$(4).c$$S,["Structure Viewer"]);
frame.addWindowListener$java_awt_event_WindowListener(Clazz.new_($I$(5)));
frame.setDefaultCloseOperation$I(3);
var mtable=Clazz.new_($I$(6).c$$javax_swing_table_TableModel,[Clazz.new_($I$(7).c$$OAA$SA,[data, colNames])]);
mtable.setShowGrid$Z(true);
mtable.getColumnModel$().addColumnModelListener$javax_swing_event_TableColumnModelListener(Clazz.new_($I$(8).c$$javax_swing_JTable,[mtable]));
mtable.setCellSelectionEnabled$Z(true);
mtable.getTableHeader$().setReorderingAllowed$Z(false);
var scrollpane=Clazz.new_($I$(9).c$$java_awt_Component,[mtable]);
mtable.setPreferredScrollableViewportSize$java_awt_Dimension(Clazz.new_($I$(10).c$$I$I,[500, 70]));
frame.getContentPane$().add$java_awt_Component(scrollpane);
var col=mtable.getColumnModel$().getColumn$I(C$.STRUCTURE_COL);
col.setCellRenderer$javax_swing_table_TableCellRenderer(Clazz.new_($I$(11)));
col.setCellEditor$javax_swing_table_TableCellEditor(Clazz.new_($I$(12)));
frame.pack$();
frame.setSize$I$I(300, 300);
frame.setVisible$Z(true);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.JmolTable, "JmolColumnModelListener", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.swing.event.TableColumnModelListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.table=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JTable', function (t) {
C$.$init$.apply(this);
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
(function(){var C$=Clazz.newClass(P$.JmolTable, "JmolPanelJTableModel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rows=null;
this.columns=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$OAA$SA', function (objs, cols) {
Clazz.super_(C$, this,1);
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
(function(){var C$=Clazz.newClass(P$.JmolTable, "JmolPanelCellRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.jmol.JmolPanel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I','getTableCellRendererComponent$'], function (table, value, isSelected, hasFocus, rowIndex, vColIndex) {
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
(function(){var C$=Clazz.newClass(P$.JmolTable, "JmolPanelCellEditor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.AbstractCellEditor', 'javax.swing.table.TableCellEditor');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
