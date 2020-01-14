(function(){var P$=Clazz.newPackage("components"),p$1={},I$=[[0,'test.components.TableDemo','javax.swing.border.LineBorder','java.awt.Color',['test.components.TableDemo','.DemoColor'],'java.awt.GridLayout','javax.swing.JTable',['test.components.TableDemo','.MyTableModel'],'java.awt.Dimension',['test.components.TableDemo','.ColorRenderer'],'javax.swing.JScrollPane','javax.swing.JFrame','javax.swing.SwingUtilities']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TableDemo", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.colors=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.colors=Clazz.array($I$(3), -1, [$I$(3).red, $I$(3).blue, $I$(3).green]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.color=null;
this.DEBUG=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.color=Clazz.new_($I$(4), [this, null]);
this.DEBUG=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(5).c$$I$I,[1, 0])]);
C$.$init$.apply(this);
var table=Clazz.new_($I$(6).c$$javax_swing_table_TableModel,[Clazz.new_($I$(7), [this, null])]);
table.setPreferredScrollableViewportSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[500, 70]));
table.setFillsViewportHeight$Z(true);
table.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass($I$(4)), Clazz.new_($I$(9), [this, null]));
var scrollPane=Clazz.new_($I$(10).c$$java_awt_Component,[table]);
this.add$java_awt_Component(scrollPane);
}, 1);

Clazz.newMeth(C$, 'createAndShowGUI$', function () {
var frame=Clazz.new_($I$(11).c$$S,["TableDemo"]);
frame.setDefaultCloseOperation$I(3);
var newContentPane=Clazz.new_($I$(1));
newContentPane.setOpaque$Z(true);
frame.setContentPane$java_awt_Container(newContentPane);
frame.pack$();
frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
$I$(12).invokeLater$Runnable(((P$.t.components.TableDemo$8097||
(function(){var C$=Clazz.newClass(P$, "t.components.TableDemo$8097", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
test.components.TableDemo.createAndShowGUI$();
});
})()
), Clazz.new_(test.components.TableDemo$8097.$init$, [this, null])));
}, 1);
;
(function(){var C$=Clazz.newClass(P$.TableDemo, "ColorRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I','getTableCellRendererComponent$'], function (table, value, isSelected, hasFocus, row, column) {
this.setOpaque$Z(true);
this.setBackground$java_awt_Color($I$(1).colors[row % 3]);
this.setText$S("" + row);
this.setHorizontalAlignment$I(0);
this.setBorder$javax_swing_border_Border(Clazz.new_($I$(2).c$$java_awt_Color$I,[$I$(3).white, 3]));
return this;
});

Clazz.newMeth(C$, 'getComponent$', function () {
return this;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.TableDemo, "DemoColor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.TableDemo, "MyTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.columnNames=null;
this.i=0;
this.data=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.columnNames=Clazz.array(String, -1, ["Row", "Fav. Color", "First Name", "Last Name", "Sport", "# of Years", "Vegetarian"]);
this.i=0;
this.data=Clazz.array(java.lang.Object, -2, [Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Kathy", "Smith", "Snowboarding",  new Integer(5),  Boolean.from(false)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "John", "Doe", "Rowing",  new Integer(3),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Sue", "Black", "Knitting",  new Integer(2),  Boolean.from(false)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Jane", "White", "Speed reading",  new Integer(20),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "John", "Doe", "Rowing",  new Integer(3),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Sue", "Black", "Knitting",  new Integer(2),  Boolean.from(false)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Jane", "White", "Speed reading",  new Integer(20),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "John", "Doe", "Rowing",  new Integer(3),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Sue", "Black", "Knitting",  new Integer(2),  Boolean.from(false)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Jane", "White", "Speed reading",  new Integer(20),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "John", "Doe", "Rowing",  new Integer(3),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Sue", "Black", "Knitting",  new Integer(2),  Boolean.from(false)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Jane", "White", "Speed reading",  new Integer(20),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "John", "Doe", "Rowing",  new Integer(3),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Sue", "Black", "Knitting",  new Integer(2),  Boolean.from(false)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Jane", "White", "Speed reading",  new Integer(20),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "John", "Doe", "Rowing",  new Integer(3),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Sue", "Black", "Knitting",  new Integer(2),  Boolean.from(false)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Jane", "White", "Speed reading",  new Integer(20),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "John", "Doe", "Rowing",  new Integer(3),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Sue", "Black", "Knitting",  new Integer(2),  Boolean.from(false)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Jane", "White", "Speed reading",  new Integer(20),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, [new Integer(++this.i), this.b$['test.components.TableDemo'].color, "Joe", "Brown", "Pool",  new Integer(10),  Boolean.from(false)])]);
}, 1);

Clazz.newMeth(C$, 'getColumnCount$', function () {
return this.columnNames.length;
});

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.data.length;
});

Clazz.newMeth(C$, 'getColumnName$I', function (col) {
return this.columnNames[col];
});

Clazz.newMeth(C$, 'getValueAt$I$I', function (row, col) {
return this.data[row][col];
});

Clazz.newMeth(C$, 'getColumnClass$I', function (c) {
return this.getValueAt$I$I(0, c).getClass$();
});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, col) {
if (col < 3) {
return false;
} else {
return true;
}});

Clazz.newMeth(C$, 'setValueAt$O$I$I', function (value, row, col) {
if (this.b$['test.components.TableDemo'].DEBUG) {
System.out.println$S("Setting value at " + row + "," + col + " to " + value + " (an instance of " + value.getClass$() + ")" );
}this.data[row][col]=value;
this.fireTableCellUpdated$I$I(row, col);
if (this.b$['test.components.TableDemo'].DEBUG) {
System.out.println$S("New value of data:");
p$1.printDebugData.apply(this, []);
}});

Clazz.newMeth(C$, 'printDebugData', function () {
var numRows=this.getRowCount$();
var numCols=this.getColumnCount$();
for (var i=0; i < numRows; i++) {
System.out.print$S("    row " + i + ":" );
for (var j=0; j < numCols; j++) {
System.out.print$S("  " + this.data[i][j]);
}
System.out.println$();
}
System.out.println$S("--------------------------");
}, p$1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-07 12:28:41 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
