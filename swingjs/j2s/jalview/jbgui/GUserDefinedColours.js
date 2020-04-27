(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JColorChooser','javax.swing.JPanel','java.awt.GridLayout','javax.swing.JButton','javax.swing.JLabel','javax.swing.JTextField','java.awt.BorderLayout','java.awt.GridBagLayout','java.awt.FlowLayout','javax.swing.JCheckBox','java.awt.Font','jalview.util.MessageManager','jalview.gui.JvSwingUtils','java.awt.Color','java.awt.Dimension','javax.swing.colorchooser.AbstractColorChooserPanel','java.util.ArrayList']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GUserDefinedColours", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.colorChooser=Clazz.new_($I$(1,1));
this.buttonPanel=Clazz.new_($I$(2,1));
this.gridLayout=Clazz.new_($I$(3,1));
this.lowerPanel=Clazz.new_($I$(2,1));
this.okButton=Clazz.new_($I$(4,1));
this.applyButton=Clazz.new_($I$(4,1));
this.loadbutton=Clazz.new_($I$(4,1));
this.savebutton=Clazz.new_($I$(4,1));
this.cancelButton=Clazz.new_($I$(4,1));
this.namePanel=Clazz.new_($I$(2,1));
this.jLabel1=Clazz.new_($I$(5,1));
this.schemeName=Clazz.new_($I$(6,1));
this.borderLayout1=Clazz.new_($I$(7,1));
this.panel1=Clazz.new_($I$(2,1));
this.okCancelPanel=Clazz.new_($I$(2,1));
this.saveLoadPanel=Clazz.new_($I$(2,1));
this.borderLayout3=Clazz.new_($I$(7,1));
this.gridBagLayout1=Clazz.new_($I$(8,1));
this.borderLayout2=Clazz.new_($I$(7,1));
this.flowLayout1=Clazz.new_($I$(9,1));
this.borderLayout4=Clazz.new_($I$(7,1));
this.jPanel4=Clazz.new_($I$(2,1));
this.borderLayout5=Clazz.new_($I$(7,1));
this.label=Clazz.new_($I$(5,1));
this.casePanel=Clazz.new_($I$(2,1));
this.caseSensitive=Clazz.new_($I$(10,1));
this.lcaseColour=Clazz.new_($I$(10,1));
},1);

C$.$fields$=[['O',['colorChooser','javax.swing.JColorChooser','buttonPanel','javax.swing.JPanel','gridLayout','java.awt.GridLayout','lowerPanel','javax.swing.JPanel','okButton','javax.swing.JButton','+applyButton','+loadbutton','+savebutton','+cancelButton','namePanel','javax.swing.JPanel','jLabel1','javax.swing.JLabel','schemeName','javax.swing.JTextField','borderLayout1','java.awt.BorderLayout','panel1','javax.swing.JPanel','+okCancelPanel','+saveLoadPanel','borderLayout3','java.awt.BorderLayout','gridBagLayout1','java.awt.GridBagLayout','borderLayout2','java.awt.BorderLayout','flowLayout1','java.awt.FlowLayout','borderLayout4','java.awt.BorderLayout','jPanel4','javax.swing.JPanel','borderLayout5','java.awt.BorderLayout','label','javax.swing.JLabel','casePanel','javax.swing.JPanel','caseSensitive','javax.swing.JCheckBox','+lcaseColour','selectedButtons','java.util.List']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'jbInit', function () {
this.setLayout$java_awt_LayoutManager(this.borderLayout4);
this.buttonPanel.setLayout$java_awt_LayoutManager(this.gridLayout);
this.gridLayout.setColumns$I(4);
this.gridLayout.setRows$I(5);
this.okButton.setFont$java_awt_Font(Clazz.new_($I$(11,1).c$$S$I$I,["Verdana", 0, 11]));
this.okButton.setText$S($I$(12).getString$S("action.ok"));
this.okButton.addActionListener$java_awt_event_ActionListener(((P$.GUserDefinedColours$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GUserDefinedColours$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GUserDefinedColours'].okButton_actionPerformed$.apply(this.b$['jalview.jbgui.GUserDefinedColours'], []);
});
})()
), Clazz.new_(P$.GUserDefinedColours$1.$init$,[this, null])));
this.applyButton.setFont$java_awt_Font(Clazz.new_($I$(11,1).c$$S$I$I,["Verdana", 0, 11]));
this.applyButton.setText$S($I$(12).getString$S("action.apply"));
this.applyButton.addActionListener$java_awt_event_ActionListener(((P$.GUserDefinedColours$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GUserDefinedColours$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GUserDefinedColours'].applyButton_actionPerformed$.apply(this.b$['jalview.jbgui.GUserDefinedColours'], []);
});
})()
), Clazz.new_(P$.GUserDefinedColours$2.$init$,[this, null])));
this.loadbutton.setFont$java_awt_Font(Clazz.new_($I$(11,1).c$$S$I$I,["Verdana", 0, 11]));
this.loadbutton.setText$S($I$(12).getString$S("action.load_scheme"));
this.loadbutton.addActionListener$java_awt_event_ActionListener(((P$.GUserDefinedColours$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "GUserDefinedColours$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GUserDefinedColours'].loadbutton_actionPerformed$.apply(this.b$['jalview.jbgui.GUserDefinedColours'], []);
});
})()
), Clazz.new_(P$.GUserDefinedColours$3.$init$,[this, null])));
this.savebutton.setFont$java_awt_Font(Clazz.new_($I$(11,1).c$$S$I$I,["Verdana", 0, 11]));
this.savebutton.setText$S($I$(12).getString$S("action.save_scheme"));
this.savebutton.addActionListener$java_awt_event_ActionListener(((P$.GUserDefinedColours$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "GUserDefinedColours$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GUserDefinedColours'].savebutton_actionPerformed$.apply(this.b$['jalview.jbgui.GUserDefinedColours'], []);
});
})()
), Clazz.new_(P$.GUserDefinedColours$4.$init$,[this, null])));
this.cancelButton.setFont$java_awt_Font($I$(13).getLabelFont$());
this.cancelButton.setText$S($I$(12).getString$S("action.cancel"));
this.cancelButton.addActionListener$java_awt_event_ActionListener(((P$.GUserDefinedColours$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "GUserDefinedColours$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GUserDefinedColours'].cancelButton_actionPerformed$.apply(this.b$['jalview.jbgui.GUserDefinedColours'], []);
});
})()
), Clazz.new_(P$.GUserDefinedColours$5.$init$,[this, null])));
this.setBackground$java_awt_Color(Clazz.new_($I$(14,1).c$$I$I$I,[212, 208, 223]));
this.lowerPanel.setOpaque$Z(false);
this.lowerPanel.setLayout$java_awt_LayoutManager(this.borderLayout3);
this.colorChooser.setOpaque$Z(false);
this.jLabel1.setFont$java_awt_Font($I$(13).getLabelFont$());
this.jLabel1.setText$S($I$(12).getString$S("label.name"));
this.namePanel.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(15,1).c$$I$I,[300, 31]));
this.namePanel.setOpaque$Z(false);
this.namePanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(15,1).c$$I$I,[240, 25]));
this.namePanel.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.schemeName.setFont$java_awt_Font($I$(13).getLabelFont$());
this.schemeName.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(15,1).c$$I$I,[105, 21]));
this.schemeName.setText$S("");
this.schemeName.setHorizontalAlignment$I(0);
this.panel1.setLayout$java_awt_LayoutManager(this.flowLayout1);
this.panel1.setOpaque$Z(false);
this.okCancelPanel.setOpaque$Z(false);
this.saveLoadPanel.setOpaque$Z(false);
this.jPanel4.setLayout$java_awt_LayoutManager(this.borderLayout5);
this.label.setFont$java_awt_Font(Clazz.new_($I$(11,1).c$$S$I$I,["Verdana", 2, 10]));
this.label.setOpaque$Z(false);
this.label.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(15,1).c$$I$I,[260, 34]));
this.label.setText$S($I$(12,"formatMessage$S$SA",["label.html_content", Clazz.array(String, -1, [$I$(12).getString$S("label.save_colour_scheme_with_unique_name_added_to_colour_menu")])]));
this.caseSensitive.setText$S($I$(12).getString$S("label.case_sensitive"));
this.caseSensitive.addActionListener$java_awt_event_ActionListener(((P$.GUserDefinedColours$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "GUserDefinedColours$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GUserDefinedColours'].caseSensitive_actionPerformed$.apply(this.b$['jalview.jbgui.GUserDefinedColours'], []);
});
})()
), Clazz.new_(P$.GUserDefinedColours$6.$init$,[this, null])));
this.lcaseColour.setText$S($I$(12).getString$S("label.lower_case_colour"));
this.lcaseColour.setToolTipText$S($I$(12).getString$S("label.lower_case_tip"));
this.saveLoadPanel.add$java_awt_Component(this.savebutton);
this.saveLoadPanel.add$java_awt_Component(this.loadbutton);
this.okCancelPanel.add$java_awt_Component(this.applyButton);
this.okCancelPanel.add$java_awt_Component(this.okButton);
this.okCancelPanel.add$java_awt_Component(this.cancelButton);
this.lowerPanel.add$java_awt_Component$O(this.saveLoadPanel, "North");
this.lowerPanel.add$java_awt_Component$O(this.okCancelPanel, "South");
this.namePanel.add$java_awt_Component$O(this.schemeName, "Center");
this.namePanel.add$java_awt_Component$O(this.jLabel1, "West");
this.panel1.add$java_awt_Component$O(this.namePanel, null);
this.panel1.add$java_awt_Component$O(this.buttonPanel, null);
this.panel1.add$java_awt_Component(this.casePanel);
this.casePanel.add$java_awt_Component(this.caseSensitive);
this.casePanel.add$java_awt_Component(this.lcaseColour);
this.panel1.add$java_awt_Component$O(this.lowerPanel, null);
this.panel1.add$java_awt_Component(this.label);
this.jPanel4.add$java_awt_Component$O(this.panel1, "Center");
this.add$java_awt_Component$O(this.jPanel4, "Center");
this.add$java_awt_Component$O(this.colorChooser, "East");
var choosers=this.colorChooser.getChooserPanels$();
if (choosers.length > 3) {
this.colorChooser.setChooserPanels$javax_swing_colorchooser_AbstractColorChooserPanelA(Clazz.array($I$(16), -1, [choosers[0]]));
}this.selectedButtons=Clazz.new_($I$(17,1));
}, p$1);

Clazz.newMeth(C$, 'okButton_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'applyButton_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'loadbutton_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'savebutton_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'cancelButton_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'caseSensitive_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'lcaseColour_actionPerformed$', function () {
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
