(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'javax.swing.JLabel','javax.swing.JTextField','javax.swing.JButton','java.awt.Color','javax.swing.GroupLayout',['javax.swing.GroupLayout','.Alignment'],['javax.swing.LayoutStyle','.ComponentPlacement']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CoupleColourSelectionPanel", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['coupleTable','org.openscience.jmol.app.janocchio.CoupleTable','jLabel1','javax.swing.JLabel','+jLabel2','redField','javax.swing.JTextField','redLabel','javax.swing.JLabel','setAllButton','javax.swing.JButton','yellowField','javax.swing.JTextField','yellowLabel','javax.swing.JLabel']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_janocchio_CoupleTable', function (coupleTable) {
Clazz.super_(C$, this);
this.coupleTable=coupleTable;
p$1.initComponents.apply(this, []);
this.redField.setText$S(String.valueOf$D(coupleTable.getRedValue$()));
this.yellowField.setText$S(String.valueOf$D(coupleTable.getYellowValue$()));
}, 1);

Clazz.newMeth(C$, 'initComponents', function () {
this.jLabel1=Clazz.new_($I$(1,1));
this.jLabel2=Clazz.new_($I$(1,1));
this.redLabel=Clazz.new_($I$(1,1));
this.yellowLabel=Clazz.new_($I$(1,1));
this.redField=Clazz.new_($I$(2,1));
this.yellowField=Clazz.new_($I$(2,1));
this.setAllButton=Clazz.new_($I$(3,1));
this.setAutoscrolls$Z(true);
this.setPreferredSize$java_awt_Dimension(null);
this.jLabel1.setText$S("Colour Cutoffs");
this.jLabel2.setText$S("Delta = |Calc - Exp| ");
this.redLabel.setBackground$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I,[255, 200, 200]));
this.redLabel.setText$S("Red if Delta > ");
this.yellowLabel.setText$S("Yellow if Delta > ");
this.redField.setBackground$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I,[255, 200, 200]));
this.redField.setHorizontalAlignment$I(4);
this.redField.addActionListener$java_awt_event_ActionListener(((P$.CoupleColourSelectionPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoupleColourSelectionPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.CoupleColourSelectionPanel'].redFieldActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleColourSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.CoupleColourSelectionPanel$1.$init$,[this, null])));
this.yellowField.setBackground$java_awt_Color(Clazz.new_($I$(4,1).c$$I$I$I,[255, 255, 0]));
this.yellowField.setHorizontalAlignment$I(4);
this.yellowField.addActionListener$java_awt_event_ActionListener(((P$.CoupleColourSelectionPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoupleColourSelectionPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.CoupleColourSelectionPanel'].yellowFieldActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleColourSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.CoupleColourSelectionPanel$2.$init$,[this, null])));
this.setAllButton.setText$S("Set All");
this.setAllButton.addActionListener$java_awt_event_ActionListener(((P$.CoupleColourSelectionPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoupleColourSelectionPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['org.openscience.jmol.app.janocchio.CoupleColourSelectionPanel'].setAllButtonActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleColourSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.CoupleColourSelectionPanel$3.$init$,[this, null])));
var layout=Clazz.new_($I$(5,1).c$$java_awt_Container,[this]);
this.setLayout$java_awt_LayoutManager(layout);
layout.setHorizontalGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(6).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addGap$I$I$I(71, 71, 71).addComponent$java_awt_Component(this.jLabel1)).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addContainerGap$().addComponent$java_awt_Component$I$I$I(this.jLabel2, -2, 233, -2)).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addGap$I$I$I(52, 52, 52).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(6).TRAILING).addComponent$java_awt_Component(this.setAllButton).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addComponent$java_awt_Component(this.yellowLabel).addGap$I$I$I(2, 2, 2).addComponent$java_awt_Component$I$I$I(this.yellowField, -2, 61, -2)).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addComponent$java_awt_Component(this.redLabel).addGap$I$I$I(2, 2, 2).addComponent$java_awt_Component$I$I$I(this.redField, -2, 61, -2)))));
layout.setVerticalGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(6).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addComponent$java_awt_Component$I$I$I(this.jLabel1, -2, 24, -2).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(7).RELATED).addComponent$java_awt_Component$I$I$I(this.jLabel2, -2, 34, -2).addGap$I$I$I(15, 15, 15).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(6).BASELINE).addComponent$java_awt_Component(this.redLabel).addComponent$java_awt_Component$I$I$I(this.redField, -2, -1, -2)).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(7).RELATED).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(6).BASELINE).addComponent$java_awt_Component(this.yellowLabel).addComponent$java_awt_Component$I$I$I(this.yellowField, -2, -1, -2)).addGap$I$I$I(30, 30, 30).addComponent$java_awt_Component(this.setAllButton).addContainerGap$()));
}, p$1);

Clazz.newMeth(C$, 'setAllButtonActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.yellowFieldActionPerformed$java_awt_event_ActionEvent(evt);
this.redFieldActionPerformed$java_awt_event_ActionEvent(evt);
});

Clazz.newMeth(C$, 'yellowFieldActionPerformed$java_awt_event_ActionEvent', function (evt) {
var text=this.yellowField.getText$();
this.coupleTable.setYellowValue$D(Double.parseDouble$S(text));
this.yellowField.setText$S(String.valueOf$D(this.coupleTable.getYellowValue$()));
});

Clazz.newMeth(C$, 'redFieldActionPerformed$java_awt_event_ActionEvent', function (evt) {
var text=this.redField.getText$();
this.coupleTable.setRedValue$D(Double.parseDouble$S(text));
this.redField.setText$S(String.valueOf$D(this.coupleTable.getRedValue$()));
});

Clazz.newMeth(C$, 'getYellowField$', function () {
return this.yellowField;
});

Clazz.newMeth(C$, 'getRedField$', function () {
return this.redField;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
