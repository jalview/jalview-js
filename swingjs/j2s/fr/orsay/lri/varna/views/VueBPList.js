(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,['fr.orsay.lri.varna.views.VueBPList','.Actions'],'java.awt.GridLayout','java.util.ArrayList','java.util.Collections',['fr.orsay.lri.varna.views.VueBPList','.BPTableModel'],'javax.swing.JTable','java.awt.Color','fr.orsay.lri.varna.components.ColorRenderer','fr.orsay.lri.varna.components.ActionRenderer',['fr.orsay.lri.varna.models.rna.ModeleBP','.Edge'],'javax.swing.DefaultCellEditor','javax.swing.JComboBox',['fr.orsay.lri.varna.models.rna.ModeleBP','.Stericity'],'fr.orsay.lri.varna.components.ActionEditor','java.awt.Dimension','javax.swing.JScrollPane','javax.swing.JOptionPane']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VueBPList", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['javax.swing.event.TableModelListener', 'java.awt.event.ActionListener']);
C$.$classes$=[['Actions',25],['BPTableModel',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['table','javax.swing.JTable','_tm','fr.orsay.lri.varna.views.VueBPList.BPTableModel','_vp','fr.orsay.lri.varna.VARNAPanel','data','java.util.ArrayList','+_backup','+columns']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(2,1).c$$I$I,[1, 0])]);C$.$init$.apply(this);
this._vp=vp;
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'init', function () {
var col=Clazz.array(java.lang.Object, -1, ["Sec.Str.", "5\' partner", "3\' partner", "5\' edge", "3\' edge", "Orientation", "Remove"]);
this.columns=Clazz.new_($I$(3,1));
for (var i=0; i < col.length; i++) {
this.columns.add$O(col[i]);
}
this._backup=Clazz.new_($I$(3,1));
this.data=Clazz.new_($I$(3,1));
for (var ms, $ms = this._vp.getRNA$().getAllBPs$().iterator$(); $ms.hasNext$()&&((ms=($ms.next$())),1);) {
this.data.add$O(ms);
}
$I$(4).sort$java_util_List(this.data);
this._tm=Clazz.new_($I$(5,1),[this, null]);
this.table=Clazz.new_($I$(6,1).c$$javax_swing_table_TableModel,[this._tm]);
this.table.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass($I$(7)), Clazz.new_($I$(8,1).c$$Z,[true]));
this.table.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass($I$(1)), Clazz.new_($I$(9,1)));
this.table.setDefaultEditor$Class$javax_swing_table_TableCellEditor(Clazz.getClass($I$(10)), Clazz.new_([Clazz.new_([$I$(10).values$()],$I$(12,1).c$$OA)],$I$(11,1).c$$javax_swing_JComboBox));
this.table.setDefaultEditor$Class$javax_swing_table_TableCellEditor(Clazz.getClass($I$(13)), Clazz.new_([Clazz.new_([$I$(13).values$()],$I$(12,1).c$$OA)],$I$(11,1).c$$javax_swing_JComboBox));
this.table.setDefaultEditor$Class$javax_swing_table_TableCellEditor(Clazz.getClass($I$(1)), Clazz.new_($I$(14,1).c$$java_awt_event_ActionListener,[this]));
this.table.setPreferredScrollableViewportSize$java_awt_Dimension(Clazz.new_($I$(15,1).c$$I$I,[500, 500]));
this.table.getModel$().addTableModelListener$javax_swing_event_TableModelListener(this);
this.table.setRowHeight$I(25);
var scrollPane=Clazz.new_($I$(16,1).c$$java_awt_Component,[this.table]);
this.add$java_awt_Component(scrollPane);
this.setOpaque$Z(true);
this.doLayout$();
$I$(17).showMessageDialog$java_awt_Component$O$S$I(this._vp, this, "Base pairs Edition", -1);
}, p$1);

Clazz.newMeth(C$, 'cancelChanges$', function () {
for (var i=0; i < this._vp.getRNA$().get_listeBases$().size$(); i++) {
var mb=this._vp.getRNA$().get_listeBases$().get$I(i);
mb.setValue$D((this._backup.get$I(i)).valueOf());
}
this._vp.getRNA$().rescaleColorMap$fr_orsay_lri_varna_models_rna_ModeleColorMap(this._vp.getColorMap$());
});

Clazz.newMeth(C$, 'tableChanged$javax_swing_event_TableModelEvent', function (e) {
if (e.getType$() == 0) {
this.table.repaint$();
}});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (arg0) {
var data2=arg0.getActionCommand$().split$S("-");
var row=Integer.parseInt$S(data2[data2.length - 1]);
if (data2[0].equals$O("Delete")) {
var ms=this.data.get$I(row);
this._vp.getVARNAUI$().UIRemoveBP$fr_orsay_lri_varna_models_rna_ModeleBP(ms);
this.data.remove$I(row);
this._tm.fireTableRowsDeleted$I$I(row, row);
}});
;
(function(){/*e*/var C$=Clazz.newClass(P$.VueBPList, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toString', function () {
switch (this) {
case C$.ACTION_DELETE:
return "Delete";
case C$.ACTION_EDIT_STYLE:
return "Edit Style";
}
return "N/A";
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ACTION_DELETE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ACTION_EDIT_STYLE", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.VueBPList, "BPTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

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
return  Boolean.from(mb.getPartner3$().getElementStructure$() == mb.getPartner5$().getIndex$());
} else if (col == 1) {
return  String.instantialize("" + mb.getPartner5$().getBaseNumber$() + "-" + mb.getPartner5$().getContent$() );
} else if (col == 2) {
return  String.instantialize("" + mb.getPartner3$().getBaseNumber$() + "-" + mb.getPartner3$().getContent$() );
} else if (col == 3) {
return mb.getEdgePartner5$();
} else if (col == 4) {
return mb.getEdgePartner3$();
} else if (col == 5) {
return mb.getStericity$();
} else if (col == 6) {
return $I$(1).ACTION_DELETE;
}return "N/A";
});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, col) {
if (col == 3 || col == 4  || col == 5  || col == 6 ) return true;
return false;
});

Clazz.newMeth(C$, 'setValueAt$O$I$I', function (value, row, col) {
if (col == 3 || col == 4  || col == 5 ) {
var mb=this.this$0.data.get$I(row);
if (col == 3) {
mb.setEdge5$fr_orsay_lri_varna_models_rna_ModeleBP_Edge(value);
} else if (col == 4) {
mb.setEdge3$fr_orsay_lri_varna_models_rna_ModeleBP_Edge(value);
} else if (col == 5) {
mb.setStericity$fr_orsay_lri_varna_models_rna_ModeleBP_Stericity(value);
}this.fireTableCellUpdated$I$I(row, col);
this.this$0._vp.repaint$();
}});

Clazz.newMeth(C$, 'getColumnClass$I', function (c) {
return this.getValueAt$I$I(0, c).getClass$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
