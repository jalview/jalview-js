(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'org.jmol.i18n.GT','org.openscience.jmol.app.janocchio.Measure','org.openscience.jmol.app.janocchio.MeasureNoe','org.openscience.jmol.app.janocchio.MeasureDist','org.openscience.jmol.app.janocchio.NMRTableCellRenderer','javax.swing.JPanel','java.awt.BorderLayout','org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel','org.openscience.jmol.app.janocchio.NoeColourSelectionPanel',['org.openscience.jmol.app.janocchio.NoeTable','.NoeTableModel'],'javax.swing.JTable','java.awt.Dimension','javax.swing.JScrollPane','java.awt.FlowLayout','javax.swing.JButton','java.util.Arrays','javax.swing.JComboBox']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NoeTable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JTabbedPane');
C$.$classes$=[['NoeListWindowListener',0],['NoeTableModel',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.molCDKuptodate=false;
this.lexpNoes=true;
this.freq=400;
this.tau=80;
this.tMix=0.5;
this.cutoff=10;
this.rhoStar=0.1;
this.noesy=true;
this.yellowValue=0.2;
this.redValue=0.4;
this.colorCellRenderer=Clazz.new_($I$(5,1));
this.selectedNoeRow=Clazz.array(Integer.TYPE, [2]);
this.noeNPrefValue=1.0;
this.noeNPrefIndices=Clazz.array(Integer.TYPE, [2]);
this.noeExprefValue=1.0;
this.lrefSingle=true;
},1);

C$.$fields$=[['Z',['molCDKuptodate','lexpNoes','noesy','lrefSingle'],'D',['freq','tau','tMix','cutoff','rhoStar','yellowValue','redValue','noeNPrefValue','noeExprefValue'],'I',['natomsPerModel'],'O',['nmrPanel','org.openscience.jmol.app.janocchio.NMR_JmolPanel','viewer','org.openscience.jmol.app.janocchio.NMR_Viewer','labelArray','String[]','expNoes','String[][]','+expDists','calcProps','org.openscience.jmol.app.janocchio.NmrMolecule','frameDeltaDisplay','org.openscience.jmol.app.janocchio.FrameDeltaDisplay','colorCellRenderer','org.openscience.jmol.app.janocchio.NMRTableCellRenderer','noeTable','javax.swing.JTable','noeTableModel','org.openscience.jmol.app.janocchio.NoeTable.NoeTableModel','noeSelection','javax.swing.ListSelectionModel','selectedNoeRow','int[]','noedeleteButton','javax.swing.JButton','+noedeleteAllButton','+noesetRefButton','expOrDistButton','javax.swing.JComboBox','noeNPrefIndices','int[]','noeParameterSelectionPanel','org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel','noeColourSelectionPanel','org.openscience.jmol.app.janocchio.NoeColourSelectionPanel']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_janocchio_NMR_JmolPanel$javax_swing_JFrame', function (nmrPanel, parentFrame) {
Clazz.super_(C$, this);
this.nmrPanel=nmrPanel;
this.viewer=nmrPanel.vwr;
var mainTable=Clazz.new_($I$(6,1));
mainTable.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1)));
mainTable.add$java_awt_Component$O(this.constructNoeTable$(), "Center");
var foo=Clazz.new_($I$(6,1));
foo.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1)));
foo.add$java_awt_Component$O(this.constructNoeButtonPanel$(), "Center");
mainTable.add$java_awt_Component$O(foo, "South");
this.addTab$S$javax_swing_Icon$java_awt_Component$S("Table", null, mainTable, "Table of Selected NOEs");
this.noeParameterSelectionPanel=Clazz.new_($I$(8,1).c$$org_openscience_jmol_app_janocchio_NoeTable,[this]);
this.addTab$S$javax_swing_Icon$java_awt_Component$S("Parameters", null, this.noeParameterSelectionPanel, "Parameter Setting");
this.noeColourSelectionPanel=Clazz.new_($I$(9,1).c$$org_openscience_jmol_app_janocchio_NoeTable,[this]);
this.addTab$S$javax_swing_Icon$java_awt_Component$S("Cell Colours", null, this.noeColourSelectionPanel, "Cell Colour Setting");
this.selectedNoeRow[0]=this.selectedNoeRow[1]=-1;
this.noeNPrefIndices[0]=this.noeNPrefIndices[1]=-1;
}, 1);

Clazz.newMeth(C$, 'constructNoeTable$', function () {
this.noeTableModel=Clazz.new_($I$(10,1),[this, null]);
this.noeTable=Clazz.new_($I$(11,1).c$$javax_swing_table_TableModel,[this.noeTableModel]);
var tc=this.noeTable.getColumnModel$().getColumn$I(1);
this.setYellowValue$D(this.yellowValue);
this.setRedValue$D(this.redValue);
tc.setCellRenderer$javax_swing_table_TableCellRenderer(this.colorCellRenderer);
tc=this.noeTable.getColumnModel$().getColumn$I(0);
tc.setCellRenderer$javax_swing_table_TableCellRenderer(this.colorCellRenderer);
this.noeTable.setPreferredScrollableViewportSize$java_awt_Dimension(Clazz.new_($I$(12,1).c$$I$I,[300, 100]));
this.noeTable.getColumnModel$().getColumn$I(0).setPreferredWidth$I(50);
for (var i=5; --i > 0; ) this.noeTable.getColumnModel$().getColumn$I(i).setPreferredWidth$I(15);

this.noeTable.setSelectionMode$I(1);
this.noeTable.setRowSelectionAllowed$Z(true);
this.noeTable.setColumnSelectionAllowed$Z(false);
this.noeSelection=this.noeTable.getSelectionModel$();
this.noeSelection.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.NoeTable$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeTable$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent', function (e) {
if (e.getValueIsAdjusting$()) return;
var lsm=e.getSource$();
if (lsm.isSelectionEmpty$()) {
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].selectedNoeRow[0]=this.b$['org.openscience.jmol.app.janocchio.NoeTable'].selectedNoeRow[1]=-1;
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].noedeleteButton.setEnabled$Z(false);
} else if (lsm.getMinSelectionIndex$() != lsm.getMaxSelectionIndex$()) {
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].selectedNoeRow[0]=lsm.getMinSelectionIndex$();
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].selectedNoeRow[1]=lsm.getMaxSelectionIndex$();
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].noesetRefButton.setEnabled$Z(false);
} else {
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].selectedNoeRow[0]=lsm.getMinSelectionIndex$();
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].selectedNoeRow[1]=lsm.getMaxSelectionIndex$();
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].noedeleteButton.setEnabled$Z(true);
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].noesetRefButton.setEnabled$Z(true);
}});
})()
), Clazz.new_(P$.NoeTable$1.$init$,[this, null])));
return Clazz.new_($I$(13,1).c$$java_awt_Component,[this.noeTable]);
});

Clazz.newMeth(C$, 'constructNoeButtonPanel$', function () {
var noeButtonPanel=Clazz.new_($I$(6,1));
noeButtonPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1).c$$I,[0]));
this.noedeleteButton=Clazz.new_([$I$(1).$$S("Del")],$I$(15,1).c$$S);
this.noedeleteButton.setToolTipText$S("Delete Selected NOEs");
this.noedeleteButton.addActionListener$java_awt_event_ActionListener(((P$.NoeTable$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeTable$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var ndelete=this.b$['org.openscience.jmol.app.janocchio.NoeTable'].selectedNoeRow[1] - this.b$['org.openscience.jmol.app.janocchio.NoeTable'].selectedNoeRow[0] + 1;
var deletevRows=Clazz.array(Integer.TYPE, [ndelete]);
for (var pt=0, n=this.b$['org.openscience.jmol.app.janocchio.NoeTable'].selectedNoeRow[1], i=this.b$['org.openscience.jmol.app.janocchio.NoeTable'].selectedNoeRow[0]; i <= n; i++) {
var vRow=this.b$['org.openscience.jmol.app.janocchio.NoeTable'].getViewerRow$I.apply(this.b$['org.openscience.jmol.app.janocchio.NoeTable'], [i]);
deletevRows[pt]=vRow;
pt++;
}
$I$(16).sort$IA(deletevRows);
for (var i=ndelete - 1; i >= 0; i--) {
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].viewer.deleteMeasurement$I(deletevRows[i]);
}
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].updateNoeTableData$.apply(this.b$['org.openscience.jmol.app.janocchio.NoeTable'], []);
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].viewer.script$S("background white");
});
})()
), Clazz.new_(P$.NoeTable$2.$init$,[this, null])));
this.noedeleteButton.setEnabled$Z(false);
this.noesetRefButton=Clazz.new_([$I$(1).$$S("Ref")],$I$(15,1).c$$S);
this.noesetRefButton.setToolTipText$S("Set Reference NOE");
this.noesetRefButton.addActionListener$java_awt_event_ActionListener(((P$.NoeTable$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeTable$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var vRow=this.b$['org.openscience.jmol.app.janocchio.NoeTable'].getViewerRow$I.apply(this.b$['org.openscience.jmol.app.janocchio.NoeTable'], [this.b$['org.openscience.jmol.app.janocchio.NoeTable'].selectedNoeRow[0]]);
var countPlusIndices=this.b$['org.openscience.jmol.app.janocchio.NoeTable'].viewer.getMeasurementCountPlusIndices$I(vRow);
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].noeNPrefIndices[0]=countPlusIndices[1];
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].noeNPrefIndices[1]=countPlusIndices[2];
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].noeNPrefValue=this.b$['org.openscience.jmol.app.janocchio.NoeTable'].calcProps.getJmolNoe$I$I(countPlusIndices[1], countPlusIndices[2]);
var val=this.b$['org.openscience.jmol.app.janocchio.NoeTable'].expNoes[countPlusIndices[1]][countPlusIndices[2]];
if (val == null ) {
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].noeExprefValue=1.0;
} else {
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].noeExprefValue=(Double.valueOf$S(val)).doubleValue$();
if (!((this.b$['org.openscience.jmol.app.janocchio.NoeTable'].noeExprefValue < 0.0 ) || (this.b$['org.openscience.jmol.app.janocchio.NoeTable'].noeExprefValue > 0.0 ) )) {
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].noeExprefValue=1.0;
}}this.b$['org.openscience.jmol.app.janocchio.NoeTable'].updateNoeTableData$.apply(this.b$['org.openscience.jmol.app.janocchio.NoeTable'], []);
});
})()
), Clazz.new_(P$.NoeTable$3.$init$,[this, null])));
this.noesetRefButton.setEnabled$Z(false);
this.noedeleteAllButton=Clazz.new_([$I$(1).$$S("Del All")],$I$(15,1).c$$S);
this.noedeleteAllButton.setToolTipText$S("Delete All NOEs");
this.noedeleteAllButton.addActionListener$java_awt_event_ActionListener(((P$.NoeTable$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeTable$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
for (var i=this.b$['org.openscience.jmol.app.janocchio.NoeTable'].noeTable.getRowCount$() - 1; i >= 0; i--) {
var vRow=this.b$['org.openscience.jmol.app.janocchio.NoeTable'].getViewerRow$I.apply(this.b$['org.openscience.jmol.app.janocchio.NoeTable'], [i]);
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].viewer.deleteMeasurement$I(vRow);
}
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].updateNoeTableData$.apply(this.b$['org.openscience.jmol.app.janocchio.NoeTable'], []);
});
})()
), Clazz.new_(P$.NoeTable$4.$init$,[this, null])));
this.noedeleteAllButton.setEnabled$Z(false);
var labels=Clazz.array(String, -1, ["Exp NOEs", "Exp Dists"]);
this.expOrDistButton=Clazz.new_($I$(17,1).c$$OA,[labels]);
this.expOrDistButton.setToolTipText$S("Choose either experimental NOEs or experimental distances to display and enter");
this.expOrDistButton.addActionListener$java_awt_event_ActionListener(((P$.NoeTable$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeTable$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var cb=e.getSource$();
var sel=cb.getSelectedIndex$();
if (sel == 0) {
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].lexpNoes=true;
} else {
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].lexpNoes=false;
}this.b$['org.openscience.jmol.app.janocchio.NoeTable'].updateNoeTableStructure$.apply(this.b$['org.openscience.jmol.app.janocchio.NoeTable'], []);
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].updateNoeTableData$.apply(this.b$['org.openscience.jmol.app.janocchio.NoeTable'], []);
});
})()
), Clazz.new_(P$.NoeTable$5.$init$,[this, null])));
noeButtonPanel.add$java_awt_Component(this.noesetRefButton);
noeButtonPanel.add$java_awt_Component(this.noedeleteButton);
noeButtonPanel.add$java_awt_Component(this.noedeleteAllButton);
noeButtonPanel.add$java_awt_Component(this.expOrDistButton);
return noeButtonPanel;
});

Clazz.newMeth(C$, 'constructDismissButtonPanel$', function () {
var dismissButtonPanel=Clazz.new_($I$(6,1));
dismissButtonPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1).c$$I,[2]));
var dismissButton=Clazz.new_([$I$(1).$$S("Dismiss")],$I$(15,1).c$$S);
dismissButton.addActionListener$java_awt_event_ActionListener(((P$.NoeTable$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeTable$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.janocchio.NoeTable'].close$.apply(this.b$['org.openscience.jmol.app.janocchio.NoeTable'], []);
});
})()
), Clazz.new_(P$.NoeTable$6.$init$,[this, null])));
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
this.updateNoeTableData$();
this.setVisible$Z(true);
});

Clazz.newMeth(C$, 'updateNoeTableData$', function () {
this.noedeleteAllButton.setEnabled$Z(this.viewer.getMeasurementCount$() > 0);
this.noeTableModel.fireTableDataChanged$();
p$1.calcFrameDelta.apply(this, []);
this.nmrPanel.clearViewerSelection$();
});

Clazz.newMeth(C$, 'updateNoeTableStructure$', function () {
this.noeTableModel.fireTableStructureChanged$();
var tc=this.noeTable.getColumnModel$().getColumn$I(1);
tc.setCellRenderer$javax_swing_table_TableCellRenderer(this.colorCellRenderer);
tc=this.noeTable.getColumnModel$().getColumn$I(0);
tc.setCellRenderer$javax_swing_table_TableCellRenderer(this.colorCellRenderer);
});

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.noeTableModel.getRowCount$();
});

Clazz.newMeth(C$, 'getMeasurementCountPlusIndices$I', function (row) {
return this.noeTableModel.getMeasurementCountPlusIndices$I(row);
});

Clazz.newMeth(C$, 'calcFrameDelta', function () {
var n=this.noeTableModel.getRowCount$();
var frameDelta=0.0;
for (var i=0; i < n; i++) {
if (this.lexpNoes) {
frameDelta += ((this.noeTableModel.getValueAt$I$I(i, 1))).getDiff$();
} else {
frameDelta += ((this.noeTableModel.getValueAt$I$I(i, 0))).getDiff$();
}}
this.frameDeltaDisplay.setFrameDeltaNoe$D(frameDelta);
}, p$1);

Clazz.newMeth(C$, 'updateTables$', function () {
this.updateNoeTableData$();
});

Clazz.newMeth(C$, 'getViewerRow$I', function (i) {
return this.nmrPanel.getViewerRow$I$I(i, 8);
});

Clazz.newMeth(C$, 'checkNoe$I', function (i) {
return (this.nmrPanel.getViewerMeasurement$I$I(i, 8) != null );
});

Clazz.newMeth(C$, 'calcNatomsPerModel$', function () {
var nmodel=this.viewer.getModelCount$();
return (nmodel > 0 ? (this.viewer.getAtomCount$()/nmodel|0) : 0);
});

Clazz.newMeth(C$, 'addMol$', function () {
this.calcProps=this.nmrPanel.getDistanceJMolecule$javajs_util_BS$SA$Z(null, this.labelArray, true);
this.calcProps.setCorrelationTimeTauPS$D(this.tau);
this.calcProps.setMixingTimeSec$D(this.tMix);
this.calcProps.setNMRfreqMHz$D(this.freq);
this.calcProps.setCutoffAng$D(this.cutoff);
this.calcProps.setRhoStar$D(this.rhoStar);
this.calcProps.setNoesy$Z(this.noesy);
this.calcProps.calcNOEs$();
this.molCDKuptodate=true;
});

Clazz.newMeth(C$, 'setmolCDKuptodate$Z', function (value) {
this.molCDKuptodate=value;
});

Clazz.newMeth(C$, 'allocateLabelArray$I', function (numAtoms) {
this.labelArray=Clazz.array(String, [numAtoms]);
});

Clazz.newMeth(C$, 'allocateExpNoes$I', function (numAtoms) {
this.expNoes=Clazz.array(String, [numAtoms, numAtoms]);
this.expDists=Clazz.array(String, [numAtoms, numAtoms]);
});

Clazz.newMeth(C$, 'getExpNoe$I$I', function (i, j) {
return this.expNoes[i][j];
});

Clazz.newMeth(C$, 'getExpDist$I$I', function (i, j) {
return this.expDists[i][j];
});

Clazz.newMeth(C$, 'setExpNoe$S$I$I', function (value, i, j) {
if (value.trim$().length$() == 0) {
value=null;
}this.expNoes[i][j]=value;
this.expNoes[j][i]=value;
});

Clazz.newMeth(C$, 'setExpDist$S$I$I', function (value, i, j) {
if (value.trim$().length$() == 0) {
value=null;
}this.expDists[i][j]=value;
this.expDists[j][i]=value;
});

Clazz.newMeth(C$, 'setLabelArray$SA', function (labelArray) {
this.labelArray=labelArray;
});

Clazz.newMeth(C$, 'setCorrelationTime$D', function (t) {
this.tau=t;
this.setmolCDKuptodate$Z(false);
});

Clazz.newMeth(C$, 'setMixingTime$D', function (t) {
this.tMix=t;
this.setmolCDKuptodate$Z(false);
});

Clazz.newMeth(C$, 'setNMRfreq$D', function (f) {
this.freq=f;
this.setmolCDKuptodate$Z(false);
});

Clazz.newMeth(C$, 'setCutoff$D', function (c) {
this.cutoff=c;
this.setmolCDKuptodate$Z(false);
});

Clazz.newMeth(C$, 'setRhoStar$D', function (c) {
this.rhoStar=c;
this.setmolCDKuptodate$Z(false);
});

Clazz.newMeth(C$, 'setNoesy$Z', function (b) {
this.noesy=b;
this.setmolCDKuptodate$Z(false);
});

Clazz.newMeth(C$, 'setlrefSingle$Z', function (l) {
this.lrefSingle=l;
});

Clazz.newMeth(C$, 'getCorrelationTime$', function () {
return this.tau;
});

Clazz.newMeth(C$, 'getMixingTime$', function () {
return this.tMix;
});

Clazz.newMeth(C$, 'getNMRfreq$', function () {
return this.freq;
});

Clazz.newMeth(C$, 'getCutoff$', function () {
return this.cutoff;
});

Clazz.newMeth(C$, 'getRhoStar$', function () {
return this.rhoStar;
});

Clazz.newMeth(C$, 'getNoesy$', function () {
return this.noesy;
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

Clazz.newMeth(C$, 'getnoeNPrefIndices$', function () {
return this.noeNPrefIndices;
});

Clazz.newMeth(C$, 'setNoeNPrefIndices$IA', function (noeNPrefIndices) {
this.noeNPrefIndices=noeNPrefIndices;
});

Clazz.newMeth(C$, 'getNoeExprefValue$', function () {
return this.noeExprefValue;
});

Clazz.newMeth(C$, 'setNoeExprefValue$D', function (value) {
this.noeExprefValue=value;
});

Clazz.newMeth(C$, 'setFrameDeltaDisplay$org_openscience_jmol_app_janocchio_FrameDeltaDisplay', function (frameDeltaDisplay) {
this.frameDeltaDisplay=frameDeltaDisplay;
});

Clazz.newMeth(C$, 'getlexpNoes$', function () {
return this.lexpNoes;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.NoeTable, "NoeListWindowListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.WindowAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
this.this$0.close$.apply(this.this$0, []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NoeTable, "NoeTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.noeHeaders=Clazz.array(String, -1, [$I$(1).$$S("Distance/A"), $I$(1).$$S("NOE"), "Atom 1", "Atom 2", "Exp NOE", "Exp Distance/A"]);
},1);

C$.$fields$=[['O',['noeHeaders','String[]']]]

Clazz.newMeth(C$, 'getColumnName$I', function (col) {
if (col < 4) {
return this.noeHeaders[col];
}if (this.this$0.lexpNoes) {
return this.noeHeaders[4];
}return this.noeHeaders[5];
});

Clazz.newMeth(C$, 'getRowCount$', function () {
this.this$0.natomsPerModel=this.this$0.nmrPanel.getFrameAtomCount$();
var rowCount=0;
for (var i=0; i < this.this$0.viewer.getMeasurementCount$(); i++) {
if (this.this$0.checkNoe$I.apply(this.this$0, [i])) {
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

Clazz.newMeth(C$, 'getMeasurementCountPlusIndices$I', function (row) {
var vRow=this.this$0.getViewerRow$I.apply(this.this$0, [row]);
var countPlusIndices=this.this$0.viewer.getMeasurementCountPlusIndices$I(vRow);
return countPlusIndices;
});

Clazz.newMeth(C$, 'getValueAt$I$I', function (row, col) {
if (!this.this$0.molCDKuptodate) {
this.this$0.addMol$.apply(this.this$0, []);
}var vRow=this.this$0.getViewerRow$I.apply(this.this$0, [row]);
var m=this.this$0.viewer.getMeasurementCountPlusIndices$I(vRow);
var a1=m[1];
var a2=m[2];
var noeNP=this.this$0.calcProps.getJmolNoe$I$I(a1, a2);
var noeNPref=1.0;
var base=this.this$0.viewer.getFrameBase$I(a1);
var f1=a1 - base;
var f2=a2 - base;
if (this.this$0.lrefSingle) {
if (this.this$0.noeNPrefIndices[0] != -1 && this.this$0.noeNPrefIndices[1] != -1 ) {
noeNPref=this.this$0.calcProps.getJmolNoe$I$I(this.this$0.noeNPrefIndices[0], this.this$0.noeNPrefIndices[1]);
}} else {
noeNPref=noeNP;
}noeNP /= noeNPref;
var expNOE=this.this$0.expNoes[f1][f2];
var expDist=this.this$0.expDists[f1][f2];
var dExpNOE;
try {
dExpNOE=(Double.valueOf$S(expNOE)).doubleValue$();
if (this.this$0.lrefSingle) {
dExpNOE /= this.this$0.noeExprefValue;
}expNOE=$I$(2).formatExpNOE$D(dExpNOE);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
var distNP=this.this$0.calcProps.getJmolDistance$I$I(a1, a2);
var measure=Clazz.new_($I$(3,1).c$$S$D,[expNOE, noeNP]);
var measured=Clazz.new_($I$(4,1).c$$S$D,[expDist, distNP]);
if (col == 0) {
return measured;
}if (col == 1) {
return measure;
}if (col == 4) {
if (this.this$0.lexpNoes) {
return measure.getExpValue$();
}return measured.getExpValue$();
}if (col >= m[0] + 2) return null;
var atomIndex=m[col - 1];
var name=this.this$0.labelArray[atomIndex];
var reserve="" + this.this$0.viewer.getAtomNumber$I(atomIndex) + " " + this.this$0.viewer.getAtomName$I(atomIndex) ;
return (name == null  || name.trim$().length$() == 0  ? reserve : name.trim$());
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
var vRow=this.this$0.getViewerRow$I.apply(this.this$0, [row]);
var m=this.this$0.viewer.getMeasurementCountPlusIndices$I(vRow);
if (this.this$0.lexpNoes) {
this.this$0.expNoes[m[1]][m[2]]=val;
this.this$0.expNoes[m[2]][m[1]]=val;
} else {
this.this$0.expDists[m[1]][m[2]]=val;
this.this$0.expDists[m[2]][m[1]]=val;
}this.this$0.updateNoeTableData$.apply(this.this$0, []);
}});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, col) {
return (col == 4);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
