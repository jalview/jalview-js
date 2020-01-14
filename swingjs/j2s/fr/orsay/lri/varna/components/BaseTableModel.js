(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.components"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BaseTableModel", null, 'javax.swing.table.AbstractTableModel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.columnNames=null;
this.data=null;
this._bases=null;
this._singleBases=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.columnNames=Clazz.array(String, -1, ["Numbers", "Base", "Outline Color", "Inner Color", "Name Color", "Number Color"]);
this.data=Clazz.new_($I$(1));
this._singleBases=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ArrayList', function (bases) {
Clazz.super_(C$, this,1);
this._bases=bases;
var ligne;
for (var i=0; i < bases.size$(); i++) {
ligne=Clazz.new_($I$(1));
var bl=bases.get$I(i);
if (bl.size$() != 1) {
this._singleBases=false;
}ligne.add$TE(bl.getNumbers$());
ligne.add$TE(bl.getContents$());
ligne.add$TE(bl.getAverageOutlineColor$());
ligne.add$TE(bl.getAverageInnerColor$());
ligne.add$TE(bl.getAverageNameColor$());
ligne.add$TE(bl.getAverageNumberColor$());
this.data.add$TE(ligne);
}
}, 1);

Clazz.newMeth(C$, 'getColumnCount$', function () {
return this.columnNames.length;
});

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.data.size$();
});

Clazz.newMeth(C$, 'getColumnName$I', function (col) {
return this.columnNames[col];
});

Clazz.newMeth(C$, 'getValueAt$I$I', function (row, col) {
return this.data.get$I(row).get$I(col);
});

Clazz.newMeth(C$, 'getColumnClass$I', function (c) {
return this.getValueAt$I$I(0, c).getClass$();
});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, col) {
if (col < 1) {
return false;
} else {
return true;
}});

Clazz.newMeth(C$, 'setValueAt$O$I$I', function (value, row, col) {
this.data.get$I(row).set$I$TE(col, value);
if (col == 1 && this._singleBases ) {
var mb=this._bases.get$I(row).getBases$().get$I(0);
mb.setContent$S(value.toString());
}this.fireTableCellUpdated$I$I(row, col);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
