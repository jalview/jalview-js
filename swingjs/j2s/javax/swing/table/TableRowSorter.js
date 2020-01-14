(function(){var P$=Clazz.newPackage("javax.swing.table"),I$=[[0,['javax.swing.table.TableRowSorter','.TableRowSorterModelWrapper'],['javax.swing.table.TableRowSorter','.StringComparator'],['javax.swing.table.TableRowSorter','.ComparableComparator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TableRowSorter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.DefaultRowSorter');
C$.COMPARABLE_COMPARATOR=null;
C$.STRING_COMPARATOR=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tableModel=null;
this.stringConverter=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$TM.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, ['c$$TM'], function (model) {
Clazz.super_(C$, this,1);
this.setModel$TM(model);
}, 1);

Clazz.newMeth(C$, ['setModel$TM'], function (model) {
this.tableModel=model;
this.setModelWrapper$javax_swing_DefaultRowSorter_ModelWrapper(Clazz.new_($I$(1), [this, null]));
});

Clazz.newMeth(C$, 'setStringConverter$javax_swing_table_TableStringConverter', function (stringConverter) {
this.stringConverter=stringConverter;
});

Clazz.newMeth(C$, 'getStringConverter$', function () {
return this.stringConverter;
});

Clazz.newMeth(C$, 'getComparator$I', function (column) {
var comparator=C$.superclazz.prototype.getComparator$I.apply(this, [column]);
if (comparator != null ) {
return comparator;
}var columnClass=this.getModel$().getColumnClass$I(column);
if (columnClass === Clazz.getClass(String) ) {
if (C$.STRING_COMPARATOR == null ) C$.STRING_COMPARATOR=Clazz.new_($I$(2));
return C$.STRING_COMPARATOR;
}if (Clazz.getClass(Comparable,['compareTo$TT']).isAssignableFrom$Class(columnClass)) {
if (C$.COMPARABLE_COMPARATOR == null ) C$.COMPARABLE_COMPARATOR=Clazz.new_($I$(3));
return C$.COMPARABLE_COMPARATOR;
}return null;
});

Clazz.newMeth(C$, 'useToString$I', function (column) {
var comparator=C$.superclazz.prototype.getComparator$I.apply(this, [column]);
if (comparator != null ) {
return false;
}var columnClass=this.getModel$().getColumnClass$I(column);
if (columnClass === Clazz.getClass(String) ) {
return false;
}if (Clazz.getClass(Comparable,['compareTo$TT']).isAssignableFrom$Class(columnClass)) {
return false;
}return true;
});
;
(function(){var C$=Clazz.newClass(P$.TableRowSorter, "TableRowSorterModelWrapper", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.DefaultRowSorter','.ModelWrapper']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getModel$', function () {
return this.this$0.tableModel;
});

Clazz.newMeth(C$, 'getColumnCount$', function () {
return (this.this$0.tableModel == null ) ? 0 : this.this$0.tableModel.getColumnCount$();
});

Clazz.newMeth(C$, 'getRowCount$', function () {
return (this.this$0.tableModel == null ) ? 0 : this.this$0.tableModel.getRowCount$();
});

Clazz.newMeth(C$, 'getValueAt$I$I', function (row, column) {
return this.this$0.tableModel.getValueAt$I$I(row, column);
});

Clazz.newMeth(C$, 'getStringValueAt$I$I', function (row, column) {
var converter=this.b$['javax.swing.table.TableRowSorter'].getStringConverter$.apply(this.b$['javax.swing.table.TableRowSorter'], []);
if (converter != null ) {
var value=converter.toString$javax_swing_table_TableModel$I$I(this.this$0.tableModel, row, column);
if (value != null ) {
return value;
}return "";
}var o=this.getValueAt$I$I(row, column);
if (o == null ) {
return "";
}var string=o.toString();
if (string == null ) {
return "";
}return string;
});

Clazz.newMeth(C$, 'getIdentifier$I', function (index) {
return new Integer(index);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.TableRowSorter, "StringComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$O$O','compare$','compare$TT$TT'], function (o1, o2) {
return (o1).compareTo$S(o2);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.TableRowSorter, "ComparableComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$O$O','compare$','compare$TT$TT'], function (o1, o2) {
return (o1).compareTo$(o2);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:22 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
