(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'javajs.util.BS','javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JTable", null, 'org.jmol.awtjs.swing.JComponent', ['org.jmol.awtjs.swing.ListSelectionModel', 'org.jmol.awtjs.swing.ColumnSelectionModel']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tableModel=null;
this.bsSelectedCells=null;
this.bsSelectedRows=null;
this.rowSelectionAllowed=false;
this.cellSelectionEnabled=false;
this.selectionListener=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_awtjs_swing_AbstractTableModel', function (tableModel) {
C$.superclazz.c$$S.apply(this, ["JT"]);
C$.$init$.apply(this);
this.tableModel=tableModel;
this.bsSelectedCells=Clazz.new_($I$(1));
this.bsSelectedRows=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getSelectionModel$', function () {
return this;
});

Clazz.newMeth(C$, 'getColumnModel$', function () {
return this;
});

Clazz.newMeth(C$, 'setPreferredScrollableViewportSize$java_awt_Dimension', function (dimension) {
this.width=dimension.width;
this.height=dimension.height;
});

Clazz.newMeth(C$, 'clearSelection$', function () {
this.bsSelectedCells.clearAll$();
this.bsSelectedRows.clearAll$();
});

Clazz.newMeth(C$, 'setRowSelectionAllowed$Z', function (b) {
this.rowSelectionAllowed=b;
});

Clazz.newMeth(C$, 'setRowSelectionInterval$I$I', function (i, j) {
this.bsSelectedRows.clearAll$();
this.bsSelectedRows.setBits$I$I(i, j);
this.bsSelectedCells.clearAll$();
});

Clazz.newMeth(C$, 'setCellSelectionEnabled$Z', function (enabled) {
this.cellSelectionEnabled=enabled;
});

Clazz.newMeth(C$, ['addListSelectionListener$O','addListSelectionListener$'], function (listener) {
this.selectionListener=listener;
});

Clazz.newMeth(C$, 'getColumn$I', function (i) {
return this.tableModel.getColumn$I(i);
});

Clazz.newMeth(C$, 'toHTML$', function () {
var sb=Clazz.new_($I$(2));
sb.append$S("\n<table id='" + this.id + "_table' class='JTable' >" );
this.tableModel.toHTML$javajs_util_SB$S$javajs_util_BS(sb, this.id, this.bsSelectedRows);
sb.append$S("\n</table>\n");
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
