(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[[0,'javax.swing.JLabel','javax.swing.JTextField','javax.swing.JButton','javax.swing.JComboBox','javax.swing.DefaultComboBoxModel','javax.swing.GroupLayout',['javax.swing.GroupLayout','.Alignment'],['javax.swing.LayoutStyle','.ComponentPlacement']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NoeParameterSelectionPanel", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['noeTable','org.openscience.jmol.app.janocchio.NoeTable','cutoffField','javax.swing.JTextField','cutoffLabel','javax.swing.JLabel','freqField','javax.swing.JTextField','freqLabel','javax.swing.JLabel','noesyComboBox','javax.swing.JComboBox','noesyLabel','javax.swing.JLabel','refSingleComboBox','javax.swing.JComboBox','refSingleLabel','javax.swing.JLabel','rhoStarField','javax.swing.JTextField','rhoStarLabel','javax.swing.JLabel','setAllButton','javax.swing.JButton','tMixField','javax.swing.JTextField','tMixLabel','javax.swing.JLabel','tauField','javax.swing.JTextField','tauLabel','javax.swing.JLabel','+titleLabel']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_janocchio_NoeTable', function (noeTable) {
Clazz.super_(C$, this);
this.noeTable=noeTable;
this.initComponents$();
this.freqField.setText$S(String.valueOf$D(noeTable.getNMRfreq$()));
this.tauField.setText$S(String.valueOf$D(noeTable.getCorrelationTime$()));
this.tMixField.setText$S(String.valueOf$D(noeTable.getMixingTime$()));
this.cutoffField.setText$S(String.valueOf$D(noeTable.getCutoff$()));
this.rhoStarField.setText$S(String.valueOf$D(noeTable.getRhoStar$()));
this.freqField.setHorizontalAlignment$I(4);
this.tauField.setHorizontalAlignment$I(4);
this.tMixField.setHorizontalAlignment$I(4);
this.cutoffField.setHorizontalAlignment$I(4);
this.rhoStarField.setHorizontalAlignment$I(4);
}, 1);

Clazz.newMeth(C$, 'initComponents$', function () {
this.freqLabel=Clazz.new_($I$(1,1));
this.freqField=Clazz.new_($I$(2,1));
this.tMixLabel=Clazz.new_($I$(1,1));
this.tMixField=Clazz.new_($I$(2,1));
this.tauLabel=Clazz.new_($I$(1,1));
this.tauField=Clazz.new_($I$(2,1));
this.cutoffLabel=Clazz.new_($I$(1,1));
this.cutoffField=Clazz.new_($I$(2,1));
this.rhoStarLabel=Clazz.new_($I$(1,1));
this.rhoStarField=Clazz.new_($I$(2,1));
this.setAllButton=Clazz.new_($I$(3,1));
this.titleLabel=Clazz.new_($I$(1,1));
this.noesyLabel=Clazz.new_($I$(1,1));
this.noesyComboBox=Clazz.new_($I$(4,1));
this.refSingleLabel=Clazz.new_($I$(1,1));
this.refSingleComboBox=Clazz.new_($I$(4,1));
this.freqLabel.setText$S("Spectrometer Frequency/MHz");
this.freqField.addActionListener$java_awt_event_ActionListener(((P$.NoeParameterSelectionPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeParameterSelectionPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'].freqFieldActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.NoeParameterSelectionPanel$1.$init$,[this, null])));
this.tMixLabel.setText$S("Mixing Time/s");
this.tMixField.addActionListener$java_awt_event_ActionListener(((P$.NoeParameterSelectionPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeParameterSelectionPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'].tMixFieldActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.NoeParameterSelectionPanel$2.$init$,[this, null])));
this.tauLabel.setText$S("Correlation Time/ps");
this.tauField.addActionListener$java_awt_event_ActionListener(((P$.NoeParameterSelectionPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeParameterSelectionPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'].tauFieldActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.NoeParameterSelectionPanel$3.$init$,[this, null])));
this.cutoffLabel.setText$S("Spin-pair cutoff/A");
this.cutoffField.addActionListener$java_awt_event_ActionListener(((P$.NoeParameterSelectionPanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeParameterSelectionPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'].cutoffFieldActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.NoeParameterSelectionPanel$4.$init$,[this, null])));
this.rhoStarLabel.setText$S("Constant relaxation term/s-1");
this.rhoStarField.addActionListener$java_awt_event_ActionListener(((P$.NoeParameterSelectionPanel$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeParameterSelectionPanel$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'].rhoStarFieldActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.NoeParameterSelectionPanel$5.$init$,[this, null])));
this.setAllButton.setText$S("Set All");
this.setAllButton.addActionListener$java_awt_event_ActionListener(((P$.NoeParameterSelectionPanel$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeParameterSelectionPanel$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'].setAllButtonActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.NoeParameterSelectionPanel$6.$init$,[this, null])));
this.titleLabel.setText$S("Parameters for NOE Calculation");
this.noesyLabel.setText$S("NOESY or ROESY");
this.noesyComboBox.setModel$javax_swing_ComboBoxModel(Clazz.new_([Clazz.array(String, -1, ["NOESY", "ROESY"])],$I$(5,1).c$$OA));
this.noesyComboBox.addActionListener$java_awt_event_ActionListener(((P$.NoeParameterSelectionPanel$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeParameterSelectionPanel$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'].noesyComboBoxActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.NoeParameterSelectionPanel$7.$init$,[this, null])));
this.refSingleLabel.setText$S("Normalisation");
this.refSingleComboBox.setModel$javax_swing_ComboBoxModel(Clazz.new_([Clazz.array(String, -1, ["Single", "Diag"])],$I$(5,1).c$$OA));
this.refSingleComboBox.addActionListener$java_awt_event_ActionListener(((P$.NoeParameterSelectionPanel$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeParameterSelectionPanel$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'].refSingleComboBoxActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.NoeParameterSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.NoeParameterSelectionPanel$8.$init$,[this, null])));
var layout=Clazz.new_($I$(6,1).c$$java_awt_Container,[this]);
this.setLayout$java_awt_LayoutManager(layout);
layout.setHorizontalGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addGroup$javax_swing_GroupLayout_Alignment$javax_swing_GroupLayout_Group($I$(7).TRAILING, layout.createSequentialGroup$().addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).TRAILING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addContainerGap$().addComponent$java_awt_Component(this.setAllButton)).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addGap$I$I$I(35, 35, 35).addComponent$java_awt_Component(this.titleLabel)).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addContainerGap$().addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addComponent$java_awt_Component(this.cutoffLabel).addComponent$java_awt_Component(this.freqLabel).addComponent$java_awt_Component(this.tMixLabel).addComponent$java_awt_Component(this.tauLabel)).addGap$I$I$I(18, 18, 18)).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addComponent$java_awt_Component$I$I$I(this.noesyLabel, -1, 195, 32767).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED))).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).TRAILING).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment$Z($I$(7).TRAILING, false).addComponent$java_awt_Component$javax_swing_GroupLayout_Alignment(this.tauField, $I$(7).LEADING).addComponent$java_awt_Component$javax_swing_GroupLayout_Alignment(this.tMixField, $I$(7).LEADING).addComponent$java_awt_Component$I$I$I(this.freqField, -1, 61, 32767).addComponent$java_awt_Component(this.cutoffField).addComponent$java_awt_Component$javax_swing_GroupLayout_Alignment(this.rhoStarField, $I$(7).LEADING)).addComponent$java_awt_Component$I$I$I(this.noesyComboBox, -2, -1, -2))).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addComponent$java_awt_Component$I$I$I(this.rhoStarLabel, -1, 276, 32767).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED)))).addGroup$javax_swing_GroupLayout_Alignment$javax_swing_GroupLayout_Group($I$(7).TRAILING, layout.createSequentialGroup$().addContainerGap$().addComponent$java_awt_Component(this.refSingleLabel).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement$I$I($I$(8).RELATED, 119, 32767).addComponent$java_awt_Component$I$I$I(this.refSingleComboBox, -2, 69, -2)))).addContainerGap$()));
layout.setVerticalGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addComponent$java_awt_Component$I$I$I(this.titleLabel, -2, 24, -2).addGap$I$I$I(15, 15, 15).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).BASELINE).addComponent$java_awt_Component(this.freqLabel).addComponent$java_awt_Component$I$I$I(this.freqField, -2, -1, -2)).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).BASELINE).addComponent$java_awt_Component(this.tMixLabel).addComponent$java_awt_Component$I$I$I(this.tMixField, -2, -1, -2)).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).BASELINE).addComponent$java_awt_Component$I$I$I(this.tauLabel, -2, 23, -2).addComponent$java_awt_Component$I$I$I(this.tauField, -2, -1, -2)).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).BASELINE).addComponent$java_awt_Component$I$I$I(this.cutoffField, -2, -1, -2).addComponent$java_awt_Component(this.cutoffLabel)).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).BASELINE).addComponent$java_awt_Component(this.rhoStarLabel).addComponent$java_awt_Component$I$I$I(this.rhoStarField, -2, 19, -2)).addGap$I$I$I(8, 8, 8).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).BASELINE).addComponent$java_awt_Component$I$I$I(this.noesyComboBox, -2, -1, -2).addComponent$java_awt_Component(this.noesyLabel)).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).BASELINE).addComponent$java_awt_Component$I$I$I(this.refSingleComboBox, -2, -1, -2).addComponent$java_awt_Component(this.refSingleLabel)).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement$I$I($I$(8).RELATED, 66, 32767).addComponent$java_awt_Component(this.setAllButton).addContainerGap$()));
});

Clazz.newMeth(C$, 'refSingleComboBoxActionPerformed$java_awt_event_ActionEvent', function (evt) {
var sel=this.refSingleComboBox.getSelectedItem$();
if (sel.equals$O("Single")) {
this.noeTable.setlrefSingle$Z(true);
} else {
this.noeTable.setlrefSingle$Z(false);
}});

Clazz.newMeth(C$, 'noesyComboBoxActionPerformed$java_awt_event_ActionEvent', function (evt) {
var sel=this.noesyComboBox.getSelectedItem$();
if (sel.equals$O("NOESY")) {
this.noeTable.setNoesy$Z(true);
} else {
this.noeTable.setNoesy$Z(false);
}});

Clazz.newMeth(C$, 'setAllButtonActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.rhoStarFieldActionPerformed$java_awt_event_ActionEvent(evt);
this.cutoffFieldActionPerformed$java_awt_event_ActionEvent(evt);
this.tauFieldActionPerformed$java_awt_event_ActionEvent(evt);
this.tMixFieldActionPerformed$java_awt_event_ActionEvent(evt);
this.freqFieldActionPerformed$java_awt_event_ActionEvent(evt);
this.noesyComboBoxActionPerformed$java_awt_event_ActionEvent(evt);
this.refSingleComboBoxActionPerformed$java_awt_event_ActionEvent(evt);
});

Clazz.newMeth(C$, 'rhoStarFieldActionPerformed$java_awt_event_ActionEvent', function (evt) {
var text=this.rhoStarField.getText$();
this.noeTable.setRhoStar$D(Double.parseDouble$S(text));
this.rhoStarField.setText$S(String.valueOf$D(this.noeTable.getRhoStar$()));
});

Clazz.newMeth(C$, 'cutoffFieldActionPerformed$java_awt_event_ActionEvent', function (evt) {
var text=this.cutoffField.getText$();
this.noeTable.setCutoff$D(Double.parseDouble$S(text));
this.cutoffField.setText$S(String.valueOf$D(this.noeTable.getCutoff$()));
});

Clazz.newMeth(C$, 'tauFieldActionPerformed$java_awt_event_ActionEvent', function (evt) {
var text=this.tauField.getText$();
this.noeTable.setCorrelationTime$D(Double.parseDouble$S(text));
this.tauField.setText$S(String.valueOf$D(this.noeTable.getCorrelationTime$()));
});

Clazz.newMeth(C$, 'tMixFieldActionPerformed$java_awt_event_ActionEvent', function (evt) {
var text=this.tMixField.getText$();
this.noeTable.setMixingTime$D(Double.parseDouble$S(text));
this.tMixField.setText$S(String.valueOf$D(this.noeTable.getMixingTime$()));
});

Clazz.newMeth(C$, 'freqFieldActionPerformed$java_awt_event_ActionEvent', function (evt) {
var text=this.freqField.getText$();
this.noeTable.setNMRfreq$D(Double.parseDouble$S(text));
this.freqField.setText$S(String.valueOf$D(this.noeTable.getNMRfreq$()));
});

Clazz.newMeth(C$, 'getRhoStarField$', function () {
return this.rhoStarField;
});

Clazz.newMeth(C$, 'getCutoffField$', function () {
return this.cutoffField;
});

Clazz.newMeth(C$, 'getTauField$', function () {
return this.tauField;
});

Clazz.newMeth(C$, 'gettMixField$', function () {
return this.tMixField;
});

Clazz.newMeth(C$, 'getFreqField$', function () {
return this.freqField;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:56 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
