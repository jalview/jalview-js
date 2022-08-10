(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'org.jmol.i18n.GT','org.openscience.jmol.app.janocchio.MeasureCouple','org.openscience.jmol.app.janocchio.Measure','org.openscience.jmol.app.janocchio.NMRTableCellRenderer','javax.swing.JPanel','java.awt.BorderLayout','org.openscience.jmol.app.janocchio.CoupleParameterSelectionPanel','org.openscience.jmol.app.janocchio.CoupleColourSelectionPanel',['org.openscience.jmol.app.janocchio.CoupleTable','.CoupleTableModel'],'javax.swing.JTable','java.awt.Dimension','javax.swing.JScrollPane','java.awt.FlowLayout','javax.swing.JButton','java.util.Arrays']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CoupleTable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JTabbedPane');
C$.$classes$=[['CoupleListWindowListener',0],['CoupleTableModel',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.molCDKuptodate=false;
this.selectedCoupleRow=Clazz.array(Integer.TYPE, [2]);
this.degtorad=0.017453292519943295;
this.yellowValue=2.0;
this.redValue=3.0;
this.CHequation="was";
this.colorCellRenderer=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['Z',['molCDKuptodate'],'D',['degtorad','yellowValue','redValue'],'I',['natomsPerModel'],'S',['CHequation'],'O',['viewer','org.openscience.jmol.app.janocchio.NMR_Viewer','labelArray','String[]','calcProps','org.openscience.jmol.app.janocchio.NmrMolecule','expCouples','String[][]','coupleTable','javax.swing.JTable','coupleTableModel','org.openscience.jmol.app.janocchio.CoupleTable.CoupleTableModel','coupleSelection','javax.swing.ListSelectionModel','selectedCoupleRow','int[]','coupledeleteButton','javax.swing.JButton','+coupleAddAllButton','+coupledeleteAllButton','frameDeltaDisplay','org.openscience.jmol.app.janocchio.FrameDeltaDisplay','colorCellRenderer','org.openscience.jmol.app.janocchio.NMRTableCellRenderer','coupleColourSelectionPanel','org.openscience.jmol.app.janocchio.CoupleColourSelectionPanel','nmrPanel','org.openscience.jmol.app.janocchio.NMR_JmolPanel']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_janocchio_NMR_JmolPanel$javax_swing_JFrame', function (nmrPanel, parentFrame) {
Clazz.super_(C$, this);
this.nmrPanel=nmrPanel;
this.viewer=nmrPanel.vwr;
var mainTable=Clazz.new_($I$(5,1));
mainTable.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
mainTable.add$java_awt_Component$O(this.constructCoupleTable$(), "Center");
var foo=Clazz.new_($I$(5,1));
foo.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
foo.add$java_awt_Component$O(this.constructCoupleButtonPanel$(), "West");
mainTable.add$java_awt_Component$O(foo, "South");
this.addTab$S$javax_swing_Icon$java_awt_Component$S("Table", null, mainTable, "Table of Selected Coupling Constants");
var coupleParameterSelectionPanel=Clazz.new_($I$(7,1).c$$org_openscience_jmol_app_janocchio_CoupleTable,[this]);
this.addTab$S$javax_swing_Icon$java_awt_Component$S("Parameters", null, coupleParameterSelectionPanel, "Parameter Setting");
this.coupleColourSelectionPanel=Clazz.new_($I$(8,1).c$$org_openscience_jmol_app_janocchio_CoupleTable,[this]);
this.addTab$S$javax_swing_Icon$java_awt_Component$S("Cell Colours", null, this.coupleColourSelectionPanel, "Cell Colour Setting");
this.selectedCoupleRow[0]=this.selectedCoupleRow[1]=-1;
}, 1);

Clazz.newMeth(C$, 'constructCoupleTable$', function () {
this.coupleTableModel=Clazz.new_($I$(9,1),[this, null]);
this.coupleTable=Clazz.new_($I$(10,1).c$$javax_swing_table_TableModel,[this.coupleTableModel]);
var tc=this.coupleTable.getColumnModel$().getColumn$I(1);
this.colorCellRenderer.setYellowLevel$D(this.yellowValue);
this.colorCellRenderer.setRedLevel$D(this.redValue);
tc.setCellRenderer$javax_swing_table_TableCellRenderer(this.colorCellRenderer);
this.coupleTable.setPreferredScrollableViewportSize$java_awt_Dimension(Clazz.new_($I$(11,1).c$$I$I,[300, 100]));
this.coupleTable.getColumnModel$().getColumn$I(0).setPreferredWidth$I(50);
for (var i=5; --i > 0; ) this.coupleTable.getColumnModel$().getColumn$I(i).setPreferredWidth$I(15);

this.coupleTable.setSelectionMode$I(1);
this.coupleTable.setRowSelectionAllowed$Z(true);
this.coupleTable.setColumnSelectionAllowed$Z(false);
this.coupleSelection=this.coupleTable.getSelectionModel$();
this.coupleSelection.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.CoupleTable$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoupleTable$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent', function (e) {
if (e.getValueIsAdjusting$()) return;
var lsm=e.getSource$();
if (lsm.isSelectionEmpty$()) {
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].selectedCoupleRow[0]=this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].selectedCoupleRow[1]=-1;
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].coupledeleteButton.setEnabled$Z(false);
} else if (lsm.getMinSelectionIndex$() != lsm.getMaxSelectionIndex$()) {
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].selectedCoupleRow[0]=lsm.getMinSelectionIndex$();
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].selectedCoupleRow[1]=lsm.getMaxSelectionIndex$();
} else {
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].selectedCoupleRow[0]=lsm.getMinSelectionIndex$();
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].selectedCoupleRow[1]=lsm.getMaxSelectionIndex$();
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].coupledeleteButton.setEnabled$Z(true);
}});
})()
), Clazz.new_(P$.CoupleTable$1.$init$,[this, null])));
return Clazz.new_($I$(12,1).c$$java_awt_Component,[this.coupleTable]);
});

Clazz.newMeth(C$, 'constructCoupleButtonPanel$', function () {
var coupleButtonPanel=Clazz.new_($I$(5,1));
coupleButtonPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I,[0]));
this.coupleAddAllButton=Clazz.new_([$I$(1).$$S("Add All")],$I$(14,1).c$$S);
this.coupleAddAllButton.setToolTipText$S("Add all 1H-1H Couplings");
this.coupleAddAllButton.addActionListener$java_awt_event_ActionListener(((P$.CoupleTable$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoupleTable$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].viewer.scriptWait$S("measure search \'{[H]}CC{[H]}\'");
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].updateCoupleTableData$.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'], []);
});
})()
), Clazz.new_(P$.CoupleTable$2.$init$,[this, null])));
this.coupleAddAllButton.setEnabled$Z(true);
this.coupledeleteButton=Clazz.new_([$I$(1).$$S("Del")],$I$(14,1).c$$S);
this.coupledeleteButton.setToolTipText$S("Delete Selected Couplings");
this.coupledeleteButton.addActionListener$java_awt_event_ActionListener(((P$.CoupleTable$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoupleTable$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var ndelete=this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].selectedCoupleRow[1] - this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].selectedCoupleRow[0] + 1;
var deletevRows=Clazz.array(Integer.TYPE, [ndelete]);
for (var j=0, i=this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].selectedCoupleRow[0]; i <= this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].selectedCoupleRow[1]; i++) {
deletevRows[j++]=this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].getViewerRow$I.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'], [i]);
}
$I$(15).sort$IA(deletevRows);
for (var i=ndelete; --i >= 0; ) {
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].viewer.deleteMeasurement$I(deletevRows[i]);
}
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].updateCoupleTableData$.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'], []);
});
})()
), Clazz.new_(P$.CoupleTable$3.$init$,[this, null])));
this.coupledeleteButton.setEnabled$Z(false);
this.coupledeleteAllButton=Clazz.new_([$I$(1).$$S("Del All")],$I$(14,1).c$$S);
this.coupledeleteAllButton.setToolTipText$S("Delete All Couplings");
this.coupledeleteAllButton.addActionListener$java_awt_event_ActionListener(((P$.CoupleTable$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoupleTable$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
for (var i=this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].coupleTable.getRowCount$(); --i >= 0; ) {
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].viewer.deleteMeasurement$I(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].getViewerRow$I.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'], [i]));
}
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].updateCoupleTableData$.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'], []);
});
})()
), Clazz.new_(P$.CoupleTable$4.$init$,[this, null])));
this.coupledeleteAllButton.setEnabled$Z(false);
coupleButtonPanel.add$java_awt_Component(this.coupleAddAllButton);
coupleButtonPanel.add$java_awt_Component(this.coupledeleteButton);
coupleButtonPanel.add$java_awt_Component(this.coupledeleteAllButton);
return coupleButtonPanel;
});

Clazz.newMeth(C$, 'getViewerRow$I', function (i) {
return this.nmrPanel.getViewerRow$I$I(i, 7);
});

Clazz.newMeth(C$, 'constructDismissButtonPanel$', function () {
var dismissButtonPanel=Clazz.new_($I$(5,1));
dismissButtonPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I,[2]));
var dismissButton=Clazz.new_([$I$(1).$$S("Dismiss")],$I$(14,1).c$$S);
dismissButton.addActionListener$java_awt_event_ActionListener(((P$.CoupleTable$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoupleTable$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].close$.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'], []);
});
})()
), Clazz.new_(P$.CoupleTable$5.$init$,[this, null])));
dismissButtonPanel.add$java_awt_Component(dismissButton);
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
this.updateCoupleTableData$();
this.setVisible$Z(true);
});

Clazz.newMeth(C$, 'updateCoupleTableData$', function () {
this.coupledeleteAllButton.setEnabled$Z(this.viewer.getMeasurementCount$() > 0);
this.coupleTableModel.fireTableDataChanged$();
p$1.calcFrameDelta.apply(this, []);
this.nmrPanel.clearViewerSelection$();
});

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.coupleTableModel.getRowCount$();
});

Clazz.newMeth(C$, 'getMeasurementCountPlusIndices$I', function (row) {
return this.coupleTableModel.getMeasurementCountPlusIndicesForTableRow$I(row);
});

Clazz.newMeth(C$, 'calcFrameDelta', function () {
var n=this.coupleTableModel.getRowCount$();
var frameDelta=0.0;
for (var i=0; i < n; i++) {
var measure=(this.coupleTableModel.getValueAt$I$I(i, 1));
if (measure != null ) frameDelta += measure.getDiff$();
}
this.frameDeltaDisplay.setFrameDeltaCouple$D(frameDelta);
}, p$1);

Clazz.newMeth(C$, 'updateTables$', function () {
this.updateCoupleTableData$();
});

Clazz.newMeth(C$, 'calcNatomsPerModel$', function () {
return this.nmrPanel.getFrameAtomCount$();
});

Clazz.newMeth(C$, 'addMol$', function () {
this.calcProps=this.nmrPanel.getDistanceJMolecule$javajs_util_BS$SA$Z(null, this.labelArray, false);
this.calcProps.setCHequation$S(this.CHequation);
this.molCDKuptodate=true;
});

Clazz.newMeth(C$, 'setmolCDKuptodate$Z', function (value) {
this.molCDKuptodate=value;
});

Clazz.newMeth(C$, 'allocateLabelArray$I', function (numAtoms) {
this.labelArray=Clazz.array(String, [numAtoms]);
});

Clazz.newMeth(C$, 'allocateExpCouples$I', function (numAtoms) {
this.expCouples=Clazz.array(String, [numAtoms, numAtoms]);
});

Clazz.newMeth(C$, 'getExpCouple$I$I', function (i, j) {
return this.expCouples[i][j];
});

Clazz.newMeth(C$, 'setExpCouple$S$I$I', function (value, i, j) {
if (value.trim$().length$() == 0) {
value=null;
}this.expCouples[i][j]=value;
this.expCouples[j][i]=value;
});

Clazz.newMeth(C$, 'setLabelArray$SA', function (labelArray) {
this.labelArray=labelArray;
});

Clazz.newMeth(C$, 'setRedValue$D', function (value) {
this.redValue=value;
this.colorCellRenderer.setRedLevel$D(this.redValue);
});

Clazz.newMeth(C$, 'setYellowValue$D', function (value) {
this.yellowValue=value;
this.colorCellRenderer.setYellowLevel$D(this.yellowValue);
});

Clazz.newMeth(C$, 'getRedValue$', function () {
return this.redValue;
});

Clazz.newMeth(C$, 'getYellowValue$', function () {
return this.yellowValue;
});

Clazz.newMeth(C$, 'setCHequation$S', function (eq) {
this.CHequation=eq;
this.setmolCDKuptodate$Z(false);
});

Clazz.newMeth(C$, 'setFrameDeltaDisplay$org_openscience_jmol_app_janocchio_FrameDeltaDisplay', function (frameDeltaDisplay) {
this.frameDeltaDisplay=frameDeltaDisplay;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CoupleTable, "CoupleListWindowListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.WindowAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].close$.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CoupleTable, "CoupleTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.coupleHeaders=Clazz.array(String, -1, [$I$(1).$$S("Angle"), $I$(1).$$S("J"), "Atom 1", "Atom 2", "Exp J"]);
},1);

C$.$fields$=[['O',['coupleHeaders','String[]']]]

Clazz.newMeth(C$, 'getColumnName$I', function (col) {
return this.coupleHeaders[col];
});

Clazz.newMeth(C$, 'getRowCount$', function () {
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].natomsPerModel=this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].calcNatomsPerModel$.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'], []);
var rowCount=0;
for (var i=0; i < this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].viewer.getMeasurementCount$(); i++) {
if (this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].nmrPanel.getViewerMeasurement$I$I(i, 7) != null ) {
++rowCount;
}}
return rowCount;
});

Clazz.newMeth(C$, 'getColumnCount$', function () {
return 5;
});

Clazz.newMeth(C$, 'getColumnClass$I', function (col) {
return Clazz.getClass(String);
});

Clazz.newMeth(C$, 'getMeasurementCountPlusIndicesForTableRow$I', function (row) {
return this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].viewer.getMeasurementCountPlusIndices$I(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].getViewerRow$I.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'], [row]));
});

Clazz.newMeth(C$, 'getValueAt$I$I', function (row, col) {
if (!this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].molCDKuptodate) {
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].addMol$.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'], []);
}var vRow=this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].getViewerRow$I.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'], [row]);
var atoms=this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].nmrPanel.getViewerMeasurement$I$I(vRow, 7);
var dihecouple=this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].calcProps.calcCouple$org_jmol_modelset_AtomA(atoms);
var measure=(dihecouple == null  ? null : Clazz.new_([this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].expCouples[this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].viewer.indexInFrame$org_jmol_modelset_Atom(atoms[0])][this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].viewer.indexInFrame$org_jmol_modelset_Atom(atoms[3])], dihecouple[1]],$I$(2,1).c$$S$D));
if (col == 0) {
return $I$(3,"formatDistance$D",[dihecouple == null  ? 0 : dihecouple[0] / 0.017453292519943295]);
}if (col == 1) {
return measure;
}if (col == 4) {
return (measure == null  ? "" : measure.getExpValue$());
}var atomIndex=(col == 2 ? atoms[0].i : atoms[3].i);
if (atomIndex < 0) return "";
var name=this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].labelArray[atomIndex];
var reserve="" + this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].viewer.getAtomNumber$I(atomIndex) + " " + this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].viewer.getAtomName$I(atomIndex) ;
if (name == null ) {
name=reserve;
return name;
} else if (name.trim$().length$() == 0) {
name=reserve;
}return name;
});

Clazz.newMeth(C$, 'setValueAt$O$I$I', function (value, row, col) {
if (col == 4) {
var val=value;
if (val.trim$().length$() == 0) {
val=null;
}try {
Double.valueOf$S(val);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
val=null;
} else {
throw e;
}
}
var vRow=this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].getViewerRow$I.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'], [row]);
var countPlusIndices=this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].getMeasurementCountPlusIndices$I.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'], [vRow]);
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].expCouples[countPlusIndices[1]][countPlusIndices[4]]=val;
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].expCouples[countPlusIndices[4]][countPlusIndices[1]]=val;
this.b$['org.openscience.jmol.app.janocchio.CoupleTable'].updateCoupleTableData$.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleTable'], []);
}});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, col) {
return (col == 4);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
