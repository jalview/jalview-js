(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'javax.swing.ButtonGroup','javax.swing.JLabel','javax.swing.JRadioButton','javax.swing.BorderFactory','java.awt.Insets','javax.swing.GroupLayout',['javax.swing.GroupLayout','.Alignment'],['javax.swing.LayoutStyle','.ComponentPlacement']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CoupleParameterSelectionPanel", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['coupleTable','org.openscience.jmol.app.janocchio.CoupleTable','chButtonGroup','javax.swing.ButtonGroup','eq0RadioButton','javax.swing.JRadioButton','+eq1RadioButton','+eq2RadioButton','+eq3RadioButton','jLabel1','javax.swing.JLabel','+jLabel2','+jLabel3','+jLabel4','+titleLabel']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_janocchio_CoupleTable', function (coupleTable) {
Clazz.super_(C$, this);
this.coupleTable=coupleTable;
p$1.initComponents.apply(this, []);
this.eq0RadioButton.setSelected$Z(true);
}, 1);

Clazz.newMeth(C$, 'initComponents', function () {
this.chButtonGroup=Clazz.new_($I$(1,1));
this.titleLabel=Clazz.new_($I$(2,1));
this.jLabel2=Clazz.new_($I$(2,1));
this.jLabel1=Clazz.new_($I$(2,1));
this.jLabel3=Clazz.new_($I$(2,1));
this.jLabel4=Clazz.new_($I$(2,1));
this.eq0RadioButton=Clazz.new_($I$(3,1));
this.eq1RadioButton=Clazz.new_($I$(3,1));
this.eq2RadioButton=Clazz.new_($I$(3,1));
this.eq3RadioButton=Clazz.new_($I$(3,1));
this.setAutoscrolls$Z(true);
this.titleLabel.setText$S("Parameters for J Calculation");
this.jLabel2.setText$S("3JHH:");
this.jLabel1.setText$S("Altona if two sp3 carbons");
this.jLabel1.setToolTipText$S("(Tetrahedron 36, 2783-2792)");
this.jLabel3.setText$S("Karplus otherwise");
this.jLabel3.setToolTipText$S("-90<theta<90: 8.5*cos(theta)^2 - 0.28;else 9.5*cos(theta)^2 - 0.28");
this.jLabel4.setText$S("3JCH:");
this.chButtonGroup.add$javax_swing_AbstractButton(this.eq0RadioButton);
this.eq0RadioButton.setText$S("none");
this.eq0RadioButton.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 0, 0, 0));
this.eq0RadioButton.setMargin$java_awt_Insets(Clazz.new_($I$(5,1).c$$I$I$I$I,[0, 0, 0, 0]));
this.eq0RadioButton.addActionListener$java_awt_event_ActionListener(((P$.CoupleParameterSelectionPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoupleParameterSelectionPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
p$1.eq0RadioButtonActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleParameterSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.CoupleParameterSelectionPanel$1.$init$,[this, null])));
this.chButtonGroup.add$javax_swing_AbstractButton(this.eq1RadioButton);
this.eq1RadioButton.setText$S("Wasylichen");
this.eq1RadioButton.setToolTipText$S("3.56*cos(2*theta) - cos(theta) + 4.26 (Can. J. Chem. (1973) 51 961)");
this.eq1RadioButton.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 0, 0, 0));
this.eq1RadioButton.setMargin$java_awt_Insets(Clazz.new_($I$(5,1).c$$I$I$I$I,[0, 0, 0, 0]));
this.eq1RadioButton.addActionListener$java_awt_event_ActionListener(((P$.CoupleParameterSelectionPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoupleParameterSelectionPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
p$1.eq1RadioButtonActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleParameterSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.CoupleParameterSelectionPanel$2.$init$,[this, null])));
this.chButtonGroup.add$javax_swing_AbstractButton(this.eq2RadioButton);
this.eq2RadioButton.setText$S("Tvaroska");
this.eq2RadioButton.setToolTipText$S("4.5 - 0.87*cos(theta) + cos(2*theta)  (Adv. Carbohydrate Chem. Biochem. (1995) 51, 15-61)");
this.eq2RadioButton.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 0, 0, 0));
this.eq2RadioButton.setMargin$java_awt_Insets(Clazz.new_($I$(5,1).c$$I$I$I$I,[0, 0, 0, 0]));
this.eq2RadioButton.addActionListener$java_awt_event_ActionListener(((P$.CoupleParameterSelectionPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoupleParameterSelectionPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
p$1.eq2RadioButtonActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleParameterSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.CoupleParameterSelectionPanel$3.$init$,[this, null])));
this.chButtonGroup.add$javax_swing_AbstractButton(this.eq3RadioButton);
this.eq3RadioButton.setText$S("Aydin");
this.eq3RadioButton.setToolTipText$S("5.8 * cos(theta)^2 - 1.6*cos(theta) + 0.28*sin(2*theta) - 0.02*sin(theta) + 0.52 (Mag. Res. Chem. (1990) 28, 448-457)");
this.eq3RadioButton.setBorder$javax_swing_border_Border($I$(4).createEmptyBorder$I$I$I$I(0, 0, 0, 0));
this.eq3RadioButton.setMargin$java_awt_Insets(Clazz.new_($I$(5,1).c$$I$I$I$I,[0, 0, 0, 0]));
this.eq3RadioButton.addActionListener$java_awt_event_ActionListener(((P$.CoupleParameterSelectionPanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoupleParameterSelectionPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
p$1.eq3RadioButtonActionPerformed$java_awt_event_ActionEvent.apply(this.b$['org.openscience.jmol.app.janocchio.CoupleParameterSelectionPanel'], [evt]);
});
})()
), Clazz.new_(P$.CoupleParameterSelectionPanel$4.$init$,[this, null])));
var layout=Clazz.new_($I$(6,1).c$$java_awt_Container,[this]);
this.setLayout$java_awt_LayoutManager(layout);
layout.setHorizontalGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addGap$I$I$I(54, 54, 54).addComponent$java_awt_Component(this.titleLabel)).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addContainerGap$().addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).TRAILING).addComponent$java_awt_Component(this.jLabel4).addComponent$java_awt_Component(this.jLabel2)).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addComponent$java_awt_Component(this.jLabel3).addComponent$java_awt_Component$I$I$I(this.jLabel1, -1, 219, 32767).addGroup$javax_swing_GroupLayout_Alignment$javax_swing_GroupLayout_Group($I$(7).TRAILING, layout.createSequentialGroup$().addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addComponent$java_awt_Component(this.eq2RadioButton).addComponent$java_awt_Component(this.eq0RadioButton).addComponent$java_awt_Component(this.eq1RadioButton).addComponent$java_awt_Component(this.eq3RadioButton)).addGap$I$I$I(39, 39, 39))))).addContainerGap$()));
layout.setVerticalGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addComponent$java_awt_Component$I$I$I(this.titleLabel, -2, 24, -2).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).BASELINE).addComponent$java_awt_Component(this.jLabel2).addComponent$java_awt_Component(this.jLabel1)).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED).addComponent$java_awt_Component(this.jLabel3).addGap$I$I$I(10, 10, 10).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).BASELINE).addComponent$java_awt_Component(this.jLabel4).addComponent$java_awt_Component(this.eq0RadioButton)).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED).addComponent$java_awt_Component(this.eq1RadioButton).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED).addComponent$java_awt_Component(this.eq2RadioButton).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED).addComponent$java_awt_Component(this.eq3RadioButton).addContainerGap$I$I(63, 32767)));
}, p$1);

Clazz.newMeth(C$, 'eq0RadioButtonActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.coupleTable.setCHequation$S("none");
}, p$1);

Clazz.newMeth(C$, 'eq1RadioButtonActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.coupleTable.setCHequation$S("was");
}, p$1);

Clazz.newMeth(C$, 'eq3RadioButtonActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.coupleTable.setCHequation$S("ayd");
}, p$1);

Clazz.newMeth(C$, 'eq2RadioButtonActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.coupleTable.setCHequation$S("tva");
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
