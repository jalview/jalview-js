(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'java.awt.BorderLayout','java.util.ArrayList',['fr.orsay.lri.varna.views.VueRNAList','.ValueTableModel'],'javax.swing.JTable','java.awt.Color','fr.orsay.lri.varna.components.ColorRenderer','java.awt.Dimension','javax.swing.JScrollPane','javax.swing.JPanel','javax.swing.JLabel','javax.swing.JButton']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueRNAList", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['javax.swing.event.TableModelListener', 'java.awt.event.ActionListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.table=null;
this._tm=null;
this.data=null;
this.columns=null;
this.included=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ArrayList', function (rnas) {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(1))]);
C$.$init$.apply(this);
this.data=rnas;
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getSelectedRNAs$', function () {
var result=Clazz.new_($I$(2));
for (var i=0; i < this.data.size$(); i++) {
if ((this.included.get$I(i)).booleanValue$()) {
result.add$TE(this.data.get$I(i));
}}
return result;
});

Clazz.newMeth(C$, 'init', function () {
var col=Clazz.array(java.lang.Object, -1, ["Num", "Selected", "Name", "ID", "Length"]);
this.columns=Clazz.new_($I$(2));
for (var i=0; i < col.length; i++) {
this.columns.add$TE(col[i]);
}
this.included=Clazz.new_($I$(2));
for (var i=0; i < this.data.size$(); i++) {
this.included.add$TE( Boolean.from(true));
}
this._tm=Clazz.new_($I$(3), [this, null]);
this.table=Clazz.new_($I$(4).c$$javax_swing_table_TableModel,[this._tm]);
this.table.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass($I$(5)), Clazz.new_($I$(6).c$$Z,[true]));
this.table.setPreferredScrollableViewportSize$java_awt_Dimension(Clazz.new_($I$(7).c$$I$I,[600, 300]));
this.table.setAutoResizeMode$I(0);
var c0=this.table.getColumnModel$().getColumn$I(0);
c0.setPreferredWidth$I(30);
var c1=this.table.getColumnModel$().getColumn$I(1);
c1.setPreferredWidth$I(30);
var c2=this.table.getColumnModel$().getColumn$I(2);
c2.setPreferredWidth$I(200);
var c3=this.table.getColumnModel$().getColumn$I(3);
c3.setPreferredWidth$I(200);
var c4=this.table.getColumnModel$().getColumn$I(4);
c4.setPreferredWidth$I(30);
this.table.setAutoResizeMode$I(4);
this.table.getModel$().addTableModelListener$javax_swing_event_TableModelListener(this);
var scrollPane=Clazz.new_($I$(8).c$$java_awt_Component,[this.table]);
this.add$java_awt_Component$O(scrollPane, "Center");
var jp=Clazz.new_($I$(9));
var jpl=Clazz.new_($I$(9));
var jpr=Clazz.new_($I$(9));
jp.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1)));
jp.add$java_awt_Component$O(jpl, "West");
jp.add$java_awt_Component$O(jpr, "East");
jp.add$java_awt_Component$O(Clazz.new_($I$(10).c$$S,["Please select which model(s) should be imported."]), "South");
var selectAll=Clazz.new_($I$(11).c$$S,["Select All"]);
selectAll.addActionListener$java_awt_event_ActionListener(this);
selectAll.setActionCommand$S("all");
var deselectAll=Clazz.new_($I$(11).c$$S,["Deselect All"]);
deselectAll.addActionListener$java_awt_event_ActionListener(this);
deselectAll.setActionCommand$S("none");
jpl.add$java_awt_Component(selectAll);
jpr.add$java_awt_Component(deselectAll);
this.add$java_awt_Component$O(scrollPane, "Center");
this.add$java_awt_Component$O(jp, "South");
}, p$1);

Clazz.newMeth(C$, ['tableChanged$javax_swing_event_TableModelEvent','tableChanged$'], function (e) {
if (e.getType$() == 0) {
this.table.repaint$();
}});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (e.getActionCommand$().equals$O("none")) {
for (var i=0; i < this.included.size$(); i++) {
this.included.set$I$TE(i, new Boolean(false));
}
this._tm.fireTableRowsUpdated$I$I(0, this.included.size$() - 1);
} else if (e.getActionCommand$().equals$O("all")) {
for (var i=0; i < this.included.size$(); i++) {
this.included.set$I$TE(i, new Boolean(true));
}
this._tm.fireTableRowsUpdated$I$I(0, this.included.size$() - 1);
}});
;
(function(){var C$=Clazz.newClass(P$.VueRNAList, "ValueTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getColumnName$I', function (col) {
return this.this$0.columns.get$I(col).toString();
});

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.this$0.data.size$();
});

Clazz.newMeth(C$, 'getColumnCount$', function () {
return this.this$0.columns.size$();
});

Clazz.newMeth(C$, 'getValueAt$I$I', function (row, col) {
var r=this.this$0.data.get$I(row);
if (col == 0) {
return  new Integer(row + 1);
} else if (col == 1) {
return  Boolean.from((this.this$0.included.get$I(row)).booleanValue$());
} else if (col == 2) {
return  String.instantialize(r.getName$());
} else if (col == 3) {
return  String.instantialize(r.getID$());
} else if (col == 4) {
return  new Integer(r.getSize$());
}return "N/A";
});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, col) {
if (col == 1) return true;
return false;
});

Clazz.newMeth(C$, 'setValueAt$O$I$I', function (value, row, col) {
if (col == 1) {
this.this$0.included.set$I$TE(row, value);
this.fireTableCellUpdated$I$I(row, col);
}});

Clazz.newMeth(C$, 'getColumnClass$I', function (c) {
return this.getValueAt$I$I(0, c).getClass$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
