(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'javax.swing.event.TableModelEvent','java.awt.Color',['org.openscience.jmol.app.janocchio.TableSorter','.Directive'],'java.util.HashMap','java.util.ArrayList',['org.openscience.jmol.app.janocchio.TableSorter','.MouseHandler'],['org.openscience.jmol.app.janocchio.TableSorter','.TableModelHandler'],['org.openscience.jmol.app.janocchio.TableSorter','.SortableHeaderRenderer'],['org.openscience.jmol.app.janocchio.TableSorter','.Arrow'],['org.openscience.jmol.app.janocchio.TableSorter','.Row'],'java.util.Arrays']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TableSorter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.table.AbstractTableModel');
C$.$classes$=[['Row',2],['TableModelHandler',2],['MouseHandler',2],['Arrow',10],['SortableHeaderRenderer',2],['Directive',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.columnComparators=Clazz.new_($I$(4,1));
this.sortingColumns=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['O',['tableModel','javax.swing.table.TableModel','viewToModel','org.openscience.jmol.app.janocchio.TableSorter.Row[]','modelToView','int[]','tableHeader','javax.swing.table.JTableHeader','mouseListener','java.awt.event.MouseListener','tableModelListener','javax.swing.event.TableModelListener','columnComparators','java.util.Map','sortingColumns','java.util.List']]
,['O',['EMPTY_DIRECTIVE','org.openscience.jmol.app.janocchio.TableSorter.Directive','COMPARABLE_COMAPRATOR','java.util.Comparator','+LEXICAL_COMPARATOR']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.mouseListener=Clazz.new_($I$(6,1),[this, null]);
this.tableModelListener=Clazz.new_($I$(7,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_table_TableModel', function (tableModel) {
C$.c$.apply(this, []);
this.setTableModel$javax_swing_table_TableModel(tableModel);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_table_TableModel$javax_swing_table_JTableHeader', function (tableModel, tableHeader) {
C$.c$.apply(this, []);
this.setTableHeader$javax_swing_table_JTableHeader(tableHeader);
this.setTableModel$javax_swing_table_TableModel(tableModel);
}, 1);

Clazz.newMeth(C$, 'clearSortingState', function () {
this.viewToModel=null;
this.modelToView=null;
}, p$1);

Clazz.newMeth(C$, 'getTableModel$', function () {
return this.tableModel;
});

Clazz.newMeth(C$, 'setTableModel$javax_swing_table_TableModel', function (tableModel) {
if (this.tableModel != null ) {
this.tableModel.removeTableModelListener$javax_swing_event_TableModelListener(this.tableModelListener);
}this.tableModel=tableModel;
if (this.tableModel != null ) {
this.tableModel.addTableModelListener$javax_swing_event_TableModelListener(this.tableModelListener);
}p$1.clearSortingState.apply(this, []);
this.fireTableStructureChanged$();
});

Clazz.newMeth(C$, 'getTableHeader$', function () {
return this.tableHeader;
});

Clazz.newMeth(C$, 'setTableHeader$javax_swing_table_JTableHeader', function (tableHeader) {
if (this.tableHeader != null ) {
this.tableHeader.removeMouseListener$java_awt_event_MouseListener(this.mouseListener);
var defaultRenderer=this.tableHeader.getDefaultRenderer$();
if (Clazz.instanceOf(defaultRenderer, "org.openscience.jmol.app.janocchio.TableSorter.SortableHeaderRenderer")) {
this.tableHeader.setDefaultRenderer$javax_swing_table_TableCellRenderer((defaultRenderer).tableCellRenderer);
}}this.tableHeader=tableHeader;
if (this.tableHeader != null ) {
this.tableHeader.addMouseListener$java_awt_event_MouseListener(this.mouseListener);
this.tableHeader.setDefaultRenderer$javax_swing_table_TableCellRenderer(Clazz.new_([this, null, this.tableHeader.getDefaultRenderer$()],$I$(8,1).c$$javax_swing_table_TableCellRenderer));
}});

Clazz.newMeth(C$, 'isSorting$', function () {
return this.sortingColumns.size$() != 0;
});

Clazz.newMeth(C$, 'getDirective$I', function (column) {
for (var i=0; i < this.sortingColumns.size$(); i++) {
var directive=this.sortingColumns.get$I(i);
if (directive.column == column) {
return directive;
}}
return C$.EMPTY_DIRECTIVE;
}, p$1);

Clazz.newMeth(C$, 'getSortingStatus$I', function (column) {
return p$1.getDirective$I.apply(this, [column]).direction;
});

Clazz.newMeth(C$, 'sortingStatusChanged', function () {
p$1.clearSortingState.apply(this, []);
this.fireTableDataChanged$();
if (this.tableHeader != null ) {
this.tableHeader.repaint$();
}}, p$1);

Clazz.newMeth(C$, 'setSortingStatus$I$I', function (column, status) {
var directive=p$1.getDirective$I.apply(this, [column]);
if (directive !== C$.EMPTY_DIRECTIVE ) {
this.sortingColumns.remove$O(directive);
}if (status != 0) {
this.sortingColumns.add$O(Clazz.new_($I$(3,1).c$$I$I,[column, status]));
}p$1.sortingStatusChanged.apply(this, []);
});

Clazz.newMeth(C$, 'getHeaderRendererIcon$I$I', function (column, size) {
var directive=p$1.getDirective$I.apply(this, [column]);
if (directive === C$.EMPTY_DIRECTIVE ) {
return null;
}return Clazz.new_([directive.direction == -1, size, this.sortingColumns.indexOf$O(directive)],$I$(9,1).c$$Z$I$I);
});

Clazz.newMeth(C$, 'cancelSorting', function () {
this.sortingColumns.clear$();
p$1.sortingStatusChanged.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setColumnComparator$Class$java_util_Comparator', function (type, comparator) {
if (comparator == null ) {
this.columnComparators.remove$O(type);
} else {
this.columnComparators.put$O$O(type, comparator);
}});

Clazz.newMeth(C$, 'getComparator$I', function (column) {
var columnType=this.tableModel.getColumnClass$I(column);
var comparator=this.columnComparators.get$O(columnType);
if (comparator != null ) {
return comparator;
}if (Clazz.getClass(Comparable,['compareTo$O']).isAssignableFrom$Class(columnType)) {
return C$.COMPARABLE_COMAPRATOR;
}return C$.LEXICAL_COMPARATOR;
});

Clazz.newMeth(C$, 'getViewToModel', function () {
if (this.viewToModel == null ) {
var tableModelRowCount=this.tableModel.getRowCount$();
this.viewToModel=Clazz.array($I$(10), [tableModelRowCount]);
for (var row=0; row < tableModelRowCount; row++) {
this.viewToModel[row]=Clazz.new_($I$(10,1).c$$I,[this, null, row]);
}
if (this.isSorting$()) {
$I$(11).sort$OA(this.viewToModel);
}}return this.viewToModel;
}, p$1);

Clazz.newMeth(C$, 'modelIndex$I', function (viewIndex) {
return p$1.getViewToModel.apply(this, [])[viewIndex].modelIndex;
});

Clazz.newMeth(C$, 'getModelToView', function () {
if (this.modelToView == null ) {
var n=p$1.getViewToModel.apply(this, []).length;
this.modelToView=Clazz.array(Integer.TYPE, [n]);
for (var i=0; i < n; i++) {
this.modelToView[this.modelIndex$I(i)]=i;
}
}return this.modelToView;
}, p$1);

Clazz.newMeth(C$, 'getRowCount$', function () {
return (this.tableModel == null ) ? 0 : this.tableModel.getRowCount$();
});

Clazz.newMeth(C$, 'getColumnCount$', function () {
return (this.tableModel == null ) ? 0 : this.tableModel.getColumnCount$();
});

Clazz.newMeth(C$, 'getColumnName$I', function (column) {
return this.tableModel.getColumnName$I(column);
});

Clazz.newMeth(C$, 'getColumnClass$I', function (column) {
return this.tableModel.getColumnClass$I(column);
});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, column) {
return this.tableModel.isCellEditable$I$I(this.modelIndex$I(row), column);
});

Clazz.newMeth(C$, 'getValueAt$I$I', function (row, column) {
return this.tableModel.getValueAt$I$I(this.modelIndex$I(row), column);
});

Clazz.newMeth(C$, 'setValueAt$O$I$I', function (aValue, row, column) {
this.tableModel.setValueAt$O$I$I(aValue, this.modelIndex$I(row), column);
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY_DIRECTIVE=Clazz.new_($I$(3,1).c$$I$I,[-1, 0]);
C$.COMPARABLE_COMAPRATOR=((P$.TableSorter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableSorter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'compare$O$O', function (o1, o2) {
return (o1).compareTo$O(o2);
});
})()
), Clazz.new_(P$.TableSorter$1.$init$,[this, null]));
C$.LEXICAL_COMPARATOR=((P$.TableSorter$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableSorter$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'compare$O$O', function (o1, o2) {
return o1.toString().compareTo$S(o2.toString());
});
})()
), Clazz.new_(P$.TableSorter$2.$init$,[this, null]));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableSorter, "Row", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['modelIndex']]]

Clazz.newMeth(C$, 'c$$I', function (index) {
;C$.$init$.apply(this);
this.modelIndex=index;
}, 1);

Clazz.newMeth(C$, 'compareTo$O', function (o) {
var row1=this.modelIndex;
var row2=(o).modelIndex;
for (var it=this.b$['org.openscience.jmol.app.janocchio.TableSorter'].sortingColumns.iterator$(); it.hasNext$(); ) {
var directive=it.next$();
var column=directive.column;
var o1=this.b$['org.openscience.jmol.app.janocchio.TableSorter'].tableModel.getValueAt$I$I(row1, column);
var o2=this.b$['org.openscience.jmol.app.janocchio.TableSorter'].tableModel.getValueAt$I$I(row2, column);
var comparison=0;
if (o1 == null  && o2 == null  ) {
comparison=0;
} else if (o1 == null ) {
comparison=-1;
} else if (o2 == null ) {
comparison=1;
} else {
comparison=this.b$['org.openscience.jmol.app.janocchio.TableSorter'].getComparator$I.apply(this.b$['org.openscience.jmol.app.janocchio.TableSorter'], [column]).compare$O$O(o1, o2);
}if (comparison != 0) {
return directive.direction == -1 ? -comparison : comparison;
}}
return 0;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableSorter, "TableModelHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.TableModelListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'tableChanged$javax_swing_event_TableModelEvent', function (e) {
if (!this.b$['org.openscience.jmol.app.janocchio.TableSorter'].isSorting$.apply(this.b$['org.openscience.jmol.app.janocchio.TableSorter'], [])) {
p$1.clearSortingState.apply(this.b$['org.openscience.jmol.app.janocchio.TableSorter'], []);
this.b$['javax.swing.table.AbstractTableModel'].fireTableChanged$javax_swing_event_TableModelEvent.apply(this.b$['javax.swing.table.AbstractTableModel'], [e]);
return;
}if (e.getFirstRow$() == -1) {
p$1.cancelSorting.apply(this.b$['org.openscience.jmol.app.janocchio.TableSorter'], []);
this.b$['javax.swing.table.AbstractTableModel'].fireTableChanged$javax_swing_event_TableModelEvent.apply(this.b$['javax.swing.table.AbstractTableModel'], [e]);
return;
}var column=e.getColumn$();
if (e.getFirstRow$() == e.getLastRow$() && column != -1  && this.b$['org.openscience.jmol.app.janocchio.TableSorter'].getSortingStatus$I.apply(this.b$['org.openscience.jmol.app.janocchio.TableSorter'], [column]) == 0  && this.b$['org.openscience.jmol.app.janocchio.TableSorter'].modelToView != null  ) {
var viewIndex=p$1.getModelToView.apply(this.b$['org.openscience.jmol.app.janocchio.TableSorter'], [])[e.getFirstRow$()];
this.b$['javax.swing.table.AbstractTableModel'].fireTableChanged$javax_swing_event_TableModelEvent.apply(this.b$['javax.swing.table.AbstractTableModel'], [Clazz.new_([this.b$['org.openscience.jmol.app.janocchio.TableSorter'], viewIndex, viewIndex, column, e.getType$()],$I$(1,1).c$$javax_swing_table_TableModel$I$I$I$I)]);
return;
}p$1.clearSortingState.apply(this.b$['org.openscience.jmol.app.janocchio.TableSorter'], []);
this.b$['javax.swing.table.AbstractTableModel'].fireTableDataChanged$.apply(this.b$['javax.swing.table.AbstractTableModel'], []);
return;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableSorter, "MouseHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.MouseAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
var h=e.getSource$();
var columnModel=h.getColumnModel$();
var viewColumn=columnModel.getColumnIndexAtX$I(e.getX$());
var column=columnModel.getColumn$I(viewColumn).getModelIndex$();
if (column != -1) {
var status=this.b$['org.openscience.jmol.app.janocchio.TableSorter'].getSortingStatus$I.apply(this.b$['org.openscience.jmol.app.janocchio.TableSorter'], [column]);
if (!e.isControlDown$()) {
p$1.cancelSorting.apply(this.b$['org.openscience.jmol.app.janocchio.TableSorter'], []);
}status=status + (e.isShiftDown$() ? -1 : 1);
status=(status + 4) % 3 - 1;
this.b$['org.openscience.jmol.app.janocchio.TableSorter'].setSortingStatus$I$I.apply(this.b$['org.openscience.jmol.app.janocchio.TableSorter'], [column, status]);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableSorter, "Arrow", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.swing.Icon');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['descending'],'I',['size','priority']]]

Clazz.newMeth(C$, 'c$$Z$I$I', function (descending, size, priority) {
;C$.$init$.apply(this);
this.descending=descending;
this.size=size;
this.priority=priority;
}, 1);

Clazz.newMeth(C$, 'paintIcon$java_awt_Component$java_awt_Graphics$I$I', function (c, g, x, y) {
var color=c == null  ? $I$(2).GRAY : c.getBackground$();
var dx=(((this.size/2|0) * Math.pow(0.8, this.priority))|0);
var dy=this.descending ? dx : -dx;
y=y + (5 * this.size/6|0) + (this.descending ? -dy : 0);
var shift=this.descending ? 1 : -1;
g.translate$I$I(x, y);
g.setColor$java_awt_Color(color.darker$());
g.drawLine$I$I$I$I((dx/2|0), dy, 0, 0);
g.drawLine$I$I$I$I((dx/2|0), dy + shift, 0, shift);
g.setColor$java_awt_Color(color.brighter$());
g.drawLine$I$I$I$I((dx/2|0), dy, dx, 0);
g.drawLine$I$I$I$I((dx/2|0), dy + shift, dx, shift);
if (this.descending) {
g.setColor$java_awt_Color(color.darker$().darker$());
} else {
g.setColor$java_awt_Color(color.brighter$().brighter$());
}g.drawLine$I$I$I$I(dx, 0, 0, 0);
g.setColor$java_awt_Color(color);
g.translate$I$I(-x, -y);
});

Clazz.newMeth(C$, 'getIconWidth$', function () {
return this.size;
});

Clazz.newMeth(C$, 'getIconHeight$', function () {
return this.size;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableSorter, "SortableHeaderRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['tableCellRenderer','javax.swing.table.TableCellRenderer']]]

Clazz.newMeth(C$, 'c$$javax_swing_table_TableCellRenderer', function (tableCellRenderer) {
;C$.$init$.apply(this);
this.tableCellRenderer=tableCellRenderer;
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I', function (table, value, isSelected, hasFocus, row, column) {
var c=this.tableCellRenderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(table, value, isSelected, hasFocus, row, column);
if (Clazz.instanceOf(c, "javax.swing.JLabel")) {
var l=c;
l.setHorizontalTextPosition$I(2);
var modelColumn=table.convertColumnIndexToModel$I(column);
l.setIcon$javax_swing_Icon(this.b$['org.openscience.jmol.app.janocchio.TableSorter'].getHeaderRendererIcon$I$I.apply(this.b$['org.openscience.jmol.app.janocchio.TableSorter'], [modelColumn, l.getFont$().getSize$()]));
}return c;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableSorter, "Directive", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['column','direction']]]

Clazz.newMeth(C$, 'c$$I$I', function (column, direction) {
;C$.$init$.apply(this);
this.column=column;
this.direction=direction;
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:56 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
