(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'java.awt.GridLayout','java.util.ArrayList',['fr.orsay.lri.varna.views.VueBaseValues','.ValueTableModel'],'javax.swing.JTable','java.awt.Color','fr.orsay.lri.varna.components.ColorRenderer','java.awt.Dimension','javax.swing.JScrollPane']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueBaseValues", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', 'javax.swing.event.TableModelListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.table=null;
this._tm=null;
this._vp=null;
this.data=null;
this._backup=null;
this.columns=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(1).c$$I$I,[1, 0])]);
C$.$init$.apply(this);
this._vp=vp;
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'init', function () {
var col=Clazz.array(java.lang.Object, -1, ["Number", "Base", "Value", "Preview"]);
this.columns=Clazz.new_($I$(2));
for (var i=0; i < col.length; i++) {
this.columns.add$TE(col[i]);
}
this._backup=Clazz.new_($I$(2));
this.data=Clazz.new_($I$(2));
for (var i=0; i < this._vp.getRNA$().get_listeBases$().size$(); i++) {
var mb=this._vp.getRNA$().get_listeBases$().get$I(i);
this.data.add$TE(mb);
this._backup.add$TE(new Double(mb.getValue$()));
}
this._tm=Clazz.new_($I$(3), [this, null]);
this.table=Clazz.new_($I$(4).c$$javax_swing_table_TableModel,[this._tm]);
this.table.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass($I$(5)), Clazz.new_($I$(6).c$$Z,[true]));
this.table.setPreferredScrollableViewportSize$java_awt_Dimension(Clazz.new_($I$(7).c$$I$I,[300, 300]));
this.table.getModel$().addTableModelListener$javax_swing_event_TableModelListener(this);
var scrollPane=Clazz.new_($I$(8).c$$java_awt_Component,[this.table]);
this.add$java_awt_Component(scrollPane);
}, p$1);

Clazz.newMeth(C$, 'cancelChanges$', function () {
for (var i=0; i < this._vp.getRNA$().get_listeBases$().size$(); i++) {
var mb=this._vp.getRNA$().get_listeBases$().get$I(i);
mb.setValue$D((this._backup.get$I(i)).doubleValue$());
}
this._vp.getRNA$().rescaleColorMap$fr_orsay_lri_varna_models_rna_ModeleColorMap(this._vp.getColorMap$());
});

Clazz.newMeth(C$, ['tableChanged$javax_swing_event_TableModelEvent','tableChanged$'], function (e) {
if (e.getType$() == 0) {
this.table.repaint$();
}});
;
(function(){var C$=Clazz.newClass(P$.VueBaseValues, "ValueTableModel", function(){
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
var mb=this.this$0.data.get$I(row);
if (col == 0) {
return  new Integer(mb.getBaseNumber$());
} else if (col == 1) {
return  String.instantialize(mb.getContent$());
} else if (col == 2) {
return  new Double(mb.getValue$());
} else if (col == 3) {
return this.this$0._vp.getColorMap$().getColorForValue$D(mb.getValue$());
}return "N/A";
});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, col) {
if (this.getColumnName$I(col).equals$O("Value")) return true;
return false;
});

Clazz.newMeth(C$, 'setValueAt$O$I$I', function (value, row, col) {
if (this.getColumnName$I(col).equals$O("Value")) {
this.this$0.data.get$I(row).setValue$D(((value)).doubleValue$());
this.this$0._vp.getRNA$().rescaleColorMap$fr_orsay_lri_varna_models_rna_ModeleColorMap(this.this$0._vp.getColorMap$());
this.this$0._vp.repaint$();
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
