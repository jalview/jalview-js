(function(){var P$=Clazz.newPackage("components"),p$1={},I$=[[0,'java.awt.GridLayout','javax.swing.JTable','java.awt.Dimension','java.awt.event.MouseAdapter','javax.swing.JScrollPane','javax.swing.JFrame','test.components.SimpleTableDemo','javax.swing.SwingUtilities']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SimpleTableDemo", null, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.DEBUG=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.DEBUG=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(1).c$$I$I,[1, 0])]);
C$.$init$.apply(this);
var columnNames=Clazz.array(String, -1, ["First Name", "Last Name", "Sport", "# of Years", "Vegetarian"]);
var data=Clazz.array(java.lang.Object, -2, [Clazz.array(java.lang.Object, -1, ["Kathy", "Smith", "Snowboarding",  new Integer(5),  Boolean.from(false)]), Clazz.array(java.lang.Object, -1, ["John", "Doe", "Rowing",  new Integer(3),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, ["Sue", "Black", "Knitting",  new Integer(2),  Boolean.from(false)]), Clazz.array(java.lang.Object, -1, ["Jane", "White", "Speed reading",  new Integer(20),  Boolean.from(true)]), Clazz.array(java.lang.Object, -1, ["Joe", "Brown", "Pool",  new Integer(10),  Boolean.from(false)])]);
var table=Clazz.new_($I$(2).c$$OAA$OA,[data, columnNames]);
table.setPreferredScrollableViewportSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[500, 70]));
table.setFillsViewportHeight$Z(true);
if (this.DEBUG) {
table.addMouseListener$java_awt_event_MouseListener(((P$.t.components.SimpleTableDemo$2963||
(function(){var C$=Clazz.newClass(P$, "t.components.SimpleTableDemo$2963", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
p$1.printDebugData$javax_swing_JTable.apply(this.b$['test.components.SimpleTableDemo'], [this.$finals$.table]);
});
})()
), Clazz.new_($I$(4), [this, {table: table}],test.components.SimpleTableDemo$2963)));
}var scrollPane=Clazz.new_($I$(5).c$$java_awt_Component,[table]);
this.add$java_awt_Component(scrollPane);
}, 1);

Clazz.newMeth(C$, 'printDebugData$javax_swing_JTable', function (table) {
var numRows=table.getRowCount$();
var numCols=table.getColumnCount$();
var model=table.getModel$();
System.out.println$S("Value of data: ");
for (var i=0; i < numRows; i++) {
System.out.print$S("    row " + i + ":" );
for (var j=0; j < numCols; j++) {
System.out.print$S("  " + model.getValueAt$I$I(i, j));
}
System.out.println$();
}
System.out.println$S("--------------------------");
}, p$1);

Clazz.newMeth(C$, 'createAndShowGUI$', function () {
var frame=Clazz.new_($I$(6).c$$S,["SimpleTableDemo"]);
frame.setDefaultCloseOperation$I(3);
var newContentPane=Clazz.new_($I$(7));
newContentPane.setOpaque$Z(true);
frame.setContentPane$java_awt_Container(newContentPane);
frame.pack$();
frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
$I$(8).invokeLater$Runnable(((P$.t.components.SimpleTableDemo$4775||
(function(){var C$=Clazz.newClass(P$, "t.components.SimpleTableDemo$4775", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
test.components.SimpleTableDemo.createAndShowGUI$();
});
})()
), Clazz.new_(test.components.SimpleTableDemo$4775.$init$, [this, null])));
}, 1);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-07 12:28:41 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
