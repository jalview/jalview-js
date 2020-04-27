(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'javax.swing.JLabel','javax.swing.JTextField','javax.swing.JButton','java.awt.Color','javax.swing.GroupLayout',['javax.swing.GroupLayout','.Alignment'],['javax.swing.LayoutStyle','.ComponentPlacement']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NoeColourSelectionPanel", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['noeTable','org.openscience.jmol.app.janocchio.NoeTable','jLabel1','javax.swing.JLabel','+jLabel2','+jLabel3','+jLabel4','+jLabel5','redField','javax.swing.JTextField','redLabel','javax.swing.JLabel','setAllButton','javax.swing.JButton','yellowField','javax.swing.JTextField','yellowLabel','javax.swing.JLabel']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_janocchio_NoeTable', function (noeTable) {
Clazz.super_(C$, this);
this.noeTable=noeTable;
p$1.initComponents.apply(this, []);
this.redField.setText$S(String.valueOf$D(noeTable.getRedValue$()));
this.yellowField.setText$S(String.valueOf$D(noeTable.getYellowValue$()));
}, 1);

Clazz.newMeth(C$, 'initComponents', function () {
this.jLabel1=Clazz.new_($I$(1,1));
this.jLabel2=Clazz.new_($I$(1,1));
this.jLabel3=Clazz.new_($I$(1,1));
this.redLabel=Clazz.new_($I$(1,1));
this.yellowLabel=Clazz.new_($I$(1,1));
this.redField=Clazz.new_($I$(2,1));
this.yellowField=Clazz.new_($I$(2,1));
this.setAllButton=Clazz.new_($I$(3,1));
this.jLabel4=Clazz.new_($I$(1,1));
this.jLabel5=Clazz.new_($I$(1,1));
this.jLabel1.setText$S("Colour Cutoffs");
this.jLabel2.setText$S("     Delta = |log(Calc/Exp)| ");
this.jLabel3.setText$S("For Exp Distances:");
this.redLabel.setBackground$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I,[255, 200, 200]));
this.redLabel.setText$S("Red if Delta > ");
this.yellowLabel.setText$S("Yellow if Delta > ");
this.redField.setBackground$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I,[255, 200, 200]));
this.redField.setHorizontalAlignment$I(4);
this.redField.addActionListener$java_awt_event_ActionListener(((P$.NoeColourSelectionPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeColourSelectionPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.NoeColourSelectionPanel'].redFieldActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.NoeColourSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.NoeColourSelectionPanel$1.$init$,[this, null])));
this.yellowField.setBackground$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I,[255, 255, 0]));
this.yellowField.setHorizontalAlignment$I(4);
this.yellowField.addActionListener$java_awt_event_ActionListener(((P$.NoeColourSelectionPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeColourSelectionPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.NoeColourSelectionPanel'].yellowFieldActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.NoeColourSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.NoeColourSelectionPanel$2.$init$,[this, null])));
this.setAllButton.setText$S("Set All");
this.setAllButton.addActionListener$java_awt_event_ActionListener(((P$.NoeColourSelectionPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "NoeColourSelectionPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.NoeColourSelectionPanel'].setAllButtonActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.NoeColourSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.NoeColourSelectionPanel$3.$init$,[this, null])));
this.jLabel4.setText$S("For Normalised NOEs:");
this.jLabel5.setText$S("     Delta = | Calc - Exp |");
var layout=Clazz.new_($I$(5,1).c$$java_awt_Container,[this]);
this.setLayout$java_awt_LayoutManager(layout);
layout.setHorizontalGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(6).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(6).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addGap$I$I$I(71, 71, 71).addComponent$java_awt_Component(this.jLabel1)).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addContainerGap$().addComponent$java_awt_Component(this.jLabel3)).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addContainerGap$().addComponent$java_awt_Component$I$I$I(this.jLabel2, -2, 233, -2)).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addContainerGap$().addComponent$java_awt_Component(this.jLabel4)).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addGap$I$I$I(62, 62, 62).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(6).TRAILING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addComponent$java_awt_Component(this.yellowLabel).addGap$I$I$I(2, 2, 2).addComponent$java_awt_Component$I$I$I(this.yellowField, -2, 61, -2)).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addComponent$java_awt_Component(this.redLabel).addGap$I$I$I(1, 1, 1).addComponent$java_awt_Component$I$I$I(this.redField, -2, 61, -2)).addComponent$java_awt_Component(this.setAllButton))).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addContainerGap$().addComponent$java_awt_Component(this.jLabel5))).addContainerGap$I$I(-1, 32767)));
layout.setVerticalGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(6).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addComponent$java_awt_Component$I$I$I(this.jLabel1, -2, 24, -2).addGap$I$I$I(4, 4, 4).addComponent$java_awt_Component(this.jLabel4).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(7).RELATED).addComponent$java_awt_Component(this.jLabel2).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(7).RELATED).addComponent$java_awt_Component(this.jLabel3).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(7).RELATED).addComponent$java_awt_Component(this.jLabel5).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(7).RELATED).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(6).BASELINE).addComponent$java_awt_Component(this.redLabel).addComponent$java_awt_Component$I$I$I(this.redField, -2, -1, -2)).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(7).RELATED).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(6).BASELINE).addComponent$java_awt_Component(this.yellowLabel).addComponent$java_awt_Component$I$I$I(this.yellowField, -2, -1, -2)).addGap$I$I$I(18, 18, 18).addComponent$java_awt_Component(this.setAllButton).addContainerGap$()));
}, p$1);

Clazz.newMeth(C$, 'setAllButtonActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.yellowFieldActionPerformed$java_awt_event_ActionEvent(evt);
this.redFieldActionPerformed$java_awt_event_ActionEvent(evt);
});

Clazz.newMeth(C$, 'yellowFieldActionPerformed$java_awt_event_ActionEvent', function (evt) {
var text=this.yellowField.getText$();
this.noeTable.setYellowValue$D(Double.parseDouble$S(text));
this.yellowField.setText$S(String.valueOf$D(this.noeTable.getYellowValue$()));
});

Clazz.newMeth(C$, 'redFieldActionPerformed$java_awt_event_ActionEvent', function (evt) {
var text=this.redField.getText$();
this.noeTable.setRedValue$D(Double.parseDouble$S(text));
this.redField.setText$S(String.valueOf$D(this.noeTable.getRedValue$()));
});

Clazz.newMeth(C$, 'getYellowField$', function () {
return this.yellowField;
});

Clazz.newMeth(C$, 'getRedField$', function () {
return this.redField;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1