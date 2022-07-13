(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),I$=[[0,'org.jmol.i18n.GT','javax.swing.JPanel','java.awt.BorderLayout',['org.openscience.jmol.app.jmolpanel.MeasurementTable','.MeasurementListWindowListener'],['org.openscience.jmol.app.jmolpanel.MeasurementTable','.MeasurementTableModel'],'javax.swing.JTable','java.awt.Dimension','javax.swing.JScrollPane','java.awt.FlowLayout','javax.swing.JButton']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MeasurementTable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog');
C$.$classes$=[['MeasurementListWindowListener',0],['MeasurementTableModel',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.selectedMeasurementRow=-1;
this.stringClass="".getClass$();
},1);

C$.$fields$=[['I',['selectedMeasurementRow'],'O',['vwr','org.jmol.viewer.Viewer','measurementTable','javax.swing.JTable','measurementTableModel','org.openscience.jmol.app.jmolpanel.MeasurementTable.MeasurementTableModel','deleteButton','javax.swing.JButton','+deleteAllButton','stringClass','Class']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$javax_swing_JFrame', function (vwr, parentFrame) {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[parentFrame, $I$(1).$$S("Measurements"), false]);C$.$init$.apply(this);
this.vwr=vwr;
var container=Clazz.new_($I$(2,1));
container.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
container.add$java_awt_Component$O(this.constructMeasurementTable$(), "Center");
var foo=Clazz.new_($I$(2,1));
foo.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
foo.add$java_awt_Component$O(this.constructMeasurementButtonPanel$(), "West");
foo.add$java_awt_Component$O(this.constructDismissButtonPanel$(), "East");
container.add$java_awt_Component$O(foo, "South");
this.addWindowListener$java_awt_event_WindowListener(Clazz.new_($I$(4,1),[this, null]));
this.getContentPane$().add$java_awt_Component(container);
this.pack$();
this.centerDialog$();
}, 1);

Clazz.newMeth(C$, 'constructMeasurementTable$', function () {
this.measurementTableModel=Clazz.new_($I$(5,1),[this, null]);
this.measurementTable=Clazz.new_($I$(6,1).c$$javax_swing_table_TableModel,[this.measurementTableModel]);
this.measurementTable.setPreferredScrollableViewportSize$java_awt_Dimension(Clazz.new_($I$(7,1).c$$I$I,[300, 100]));
this.measurementTable.getColumnModel$().getColumn$I(0).setPreferredWidth$I(50);
for (var i=5; --i > 0; ) this.measurementTable.getColumnModel$().getColumn$I(i).setPreferredWidth$I(15);

this.measurementTable.setSelectionMode$I(0);
this.measurementTable.setRowSelectionAllowed$Z(true);
this.measurementTable.setColumnSelectionAllowed$Z(false);
var measurementSelection=this.measurementTable.getSelectionModel$();
measurementSelection.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.MeasurementTable$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MeasurementTable$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent', function (e) {
if (e.getValueIsAdjusting$()) return;
var lsm=e.getSource$();
if (lsm.isSelectionEmpty$()) {
this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].selectedMeasurementRow=-1;
this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].deleteButton.setEnabled$Z(false);
} else {
this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].selectedMeasurementRow=lsm.getMinSelectionIndex$();
this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].deleteButton.setEnabled$Z(true);
}});
})()
), Clazz.new_(P$.MeasurementTable$1.$init$,[this, null])));
return Clazz.new_($I$(8,1).c$$java_awt_Component,[this.measurementTable]);
});

Clazz.newMeth(C$, 'constructMeasurementButtonPanel$', function () {
var measurementButtonPanel=Clazz.new_($I$(2,1));
measurementButtonPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(9,1).c$$I,[0]));
this.deleteButton=Clazz.new_([$I$(1).$$S("Delete")],$I$(10,1).c$$S);
this.deleteButton.addActionListener$java_awt_event_ActionListener(((P$.MeasurementTable$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "MeasurementTable$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].vwr.script$S("measures delete " + (this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].selectedMeasurementRow + 1) + "\u0001## EDITOR_IGNORE ##" );
this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].updateMeasurementTableData$.apply(this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'], []);
});
})()
), Clazz.new_(P$.MeasurementTable$2.$init$,[this, null])));
this.deleteButton.setEnabled$Z(false);
this.deleteAllButton=Clazz.new_([$I$(1).$$S("DeleteAll")],$I$(10,1).c$$S);
this.deleteAllButton.addActionListener$java_awt_event_ActionListener(((P$.MeasurementTable$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "MeasurementTable$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].vwr.script$S("measures delete\u0001## EDITOR_IGNORE ##");
this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].updateMeasurementTableData$.apply(this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'], []);
});
})()
), Clazz.new_(P$.MeasurementTable$3.$init$,[this, null])));
this.deleteAllButton.setEnabled$Z(false);
measurementButtonPanel.add$java_awt_Component(this.deleteAllButton);
measurementButtonPanel.add$java_awt_Component(this.deleteButton);
return measurementButtonPanel;
});

Clazz.newMeth(C$, 'constructDismissButtonPanel$', function () {
var dismissButtonPanel=Clazz.new_($I$(2,1));
dismissButtonPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(9,1).c$$I,[2]));
var dismissButton=Clazz.new_([$I$(1).$$S("Dismiss")],$I$(10,1).c$$S);
dismissButton.addActionListener$java_awt_event_ActionListener(((P$.MeasurementTable$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "MeasurementTable$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].close$.apply(this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'], []);
});
})()
), Clazz.new_(P$.MeasurementTable$4.$init$,[this, null])));
dismissButtonPanel.add$java_awt_Component(dismissButton);
this.getRootPane$().setDefaultButton$javax_swing_JButton(dismissButton);
return dismissButtonPanel;
});

Clazz.newMeth(C$, 'centerDialog$', function () {
var screenSize=this.getToolkit$().getScreenSize$();
var size=this.getSize$();
screenSize.height=(screenSize.height/2|0);
screenSize.width=(screenSize.width/2|0);
size.height=(size.height/2|0);
size.width=(size.width/2|0);
var y=screenSize.height - size.height;
var x=screenSize.width - size.width;
this.setLocation$I$I(x, y);
});

Clazz.newMeth(C$, 'close$', function () {
this.setVisible$Z(false);
});

Clazz.newMeth(C$, 'activate$', function () {
this.updateMeasurementTableData$();
this.setVisible$Z(true);
});

Clazz.newMeth(C$, 'updateMeasurementTableData$', function () {
this.deleteAllButton.setEnabled$Z(this.vwr.getMeasurementCount$() > 0);
this.measurementTableModel.fireTableDataChanged$();
});

Clazz.newMeth(C$, 'updateTables$', function () {
this.updateMeasurementTableData$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.MeasurementTable, "MeasurementListWindowListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.WindowAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].close$.apply(this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MeasurementTable, "MeasurementTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.measurementHeaders=Clazz.array(String, -1, [$I$(1).$$S("Value"), "a", "b", "c", "d"]);
},1);

C$.$fields$=[['O',['measurementHeaders','String[]']]]

Clazz.newMeth(C$, 'getColumnName$I', function (col) {
return this.measurementHeaders[col];
});

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].vwr.getMeasurementCount$();
});

Clazz.newMeth(C$, 'getColumnCount$', function () {
return 5;
});

Clazz.newMeth(C$, 'getColumnClass$I', function (col) {
return this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].stringClass;
});

Clazz.newMeth(C$, 'getValueAt$I$I', function (row, col) {
if (col == 0) {
this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].deleteAllButton.setEnabled$Z(true);
return this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].vwr.getMeasurementStringValue$I(row);
}var countPlusIndices=this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].vwr.getMeasurementCountPlusIndices$I(row);
if (countPlusIndices == null  || col > countPlusIndices[0] ) return null;
var atomIndex=countPlusIndices[col];
return (this.b$['org.openscience.jmol.app.jmolpanel.MeasurementTable'].vwr.getAtomInfo$I(atomIndex >= 0 ? atomIndex : -row * 10 - col));
});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, col) {
return false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
