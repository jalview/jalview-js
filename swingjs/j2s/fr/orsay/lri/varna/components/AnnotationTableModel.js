(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.components"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationTableModel", null, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.columnNames=Clazz.array(String, -1, ["Annotation"]);
this.data=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['columnNames','String[]','data','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$java_util_ArrayList', function (annot) {
Clazz.super_(C$, this);
var ligne;
for (var i=0; i < annot.size$(); i++) {
ligne=Clazz.new_($I$(1,1));
ligne.add$O(annot.get$I(i));
this.data.add$O(ligne);
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
this.data.get$I(row).set$I$O(col, value);
this.fireTableCellUpdated$I$I(row, col);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
