(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'java.awt.Font','javax.swing.JSlider','javax.swing.JTextField','javax.swing.JLabel','javax.swing.JPanel','javax.swing.JButton','javax.swing.JCheckBox','java.awt.Color','java.awt.event.MouseAdapter','java.awt.Dimension','java.awt.event.FocusAdapter','jalview.util.MessageManager','java.awt.GridLayout','java.awt.FlowLayout','java.awt.BorderLayout']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GSliderPanel", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.slider=Clazz.new_($I$(2,1));
this.valueField=Clazz.new_($I$(3,1));
this.label=Clazz.new_($I$(4,1));
this.southPanel=Clazz.new_($I$(5,1));
this.applyButton=Clazz.new_($I$(6,1));
this.undoButton=Clazz.new_($I$(6,1));
this.allGroupsCheck=Clazz.new_($I$(7,1));
},1);

C$.$fields$=[['O',['slider','javax.swing.JSlider','valueField','javax.swing.JTextField','label','javax.swing.JLabel','southPanel','javax.swing.JPanel','applyButton','javax.swing.JButton','+undoButton','allGroupsCheck','javax.swing.JCheckBox']]
,['O',['VERDANA_11','java.awt.Font']]]

Clazz.newMeth(C$, 'c$',  function () {
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

Clazz.newMeth(C$, 'jbInit',  function () {
this.slider.setMajorTickSpacing$I(10);
this.slider.setMinorTickSpacing$I(1);
this.slider.setPaintTicks$Z(true);
this.slider.setBackground$java_awt_Color($I$(8).white);
this.slider.setFont$java_awt_Font(C$.VERDANA_11);
this.slider.setDoubleBuffered$Z(true);
this.slider.addMouseListener$java_awt_event_MouseListener(((P$.GSliderPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GSliderPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.b$['jalview.jbgui.GSliderPanel'].slider_mouseReleased$java_awt_event_MouseEvent.apply(this.b$['jalview.jbgui.GSliderPanel'], [e]);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.GSliderPanel$1)));
this.valueField.setFont$java_awt_Font(C$.VERDANA_11);
this.valueField.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[6, 14]));
this.valueField.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[50, 12]));
this.valueField.setText$S("");
this.valueField.setHorizontalAlignment$I(0);
this.valueField.addActionListener$java_awt_event_ActionListener(((P$.GSliderPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GSliderPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GSliderPanel'].valueField_actionPerformed$.apply(this.b$['jalview.jbgui.GSliderPanel'], []);
});
})()
), Clazz.new_(P$.GSliderPanel$2.$init$,[this, null])));
this.valueField.addFocusListener$java_awt_event_FocusListener(((P$.GSliderPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "GSliderPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['jalview.jbgui.GSliderPanel'].valueField_actionPerformed$.apply(this.b$['jalview.jbgui.GSliderPanel'], []);
});
})()
), Clazz.new_($I$(11,1),[this, null],P$.GSliderPanel$3)));
this.label.setFont$java_awt_Font(C$.VERDANA_11);
this.label.setOpaque$Z(false);
this.label.setHorizontalAlignment$I(0);
this.label.setText$S($I$(12).getString$S("label.set_this_label_text"));
this.applyButton.setFont$java_awt_Font(C$.VERDANA_11);
this.applyButton.setOpaque$Z(false);
this.applyButton.setText$S($I$(12).getString$S("action.apply"));
this.applyButton.addActionListener$java_awt_event_ActionListener(((P$.GSliderPanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "GSliderPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GSliderPanel'].applyButton_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GSliderPanel'], [e]);
});
})()
), Clazz.new_(P$.GSliderPanel$4.$init$,[this, null])));
this.undoButton.setEnabled$Z(false);
this.undoButton.setFont$java_awt_Font(C$.VERDANA_11);
this.undoButton.setOpaque$Z(false);
this.undoButton.setText$S($I$(12).getString$S("action.undo"));
this.undoButton.addActionListener$java_awt_event_ActionListener(((P$.GSliderPanel$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "GSliderPanel$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GSliderPanel'].undoButton_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GSliderPanel'], [e]);
});
})()
), Clazz.new_(P$.GSliderPanel$5.$init$,[this, null])));
this.allGroupsCheck.setEnabled$Z(false);
this.allGroupsCheck.setFont$java_awt_Font(C$.VERDANA_11);
this.allGroupsCheck.setOpaque$Z(false);
this.allGroupsCheck.setText$S($I$(12).getString$S("action.apply_all_groups"));
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I,[2, 0]));
this.setBackground$java_awt_Color($I$(8).white);
var firstRow=Clazz.new_([Clazz.new_($I$(14,1))],$I$(5,1).c$$java_awt_LayoutManager);
firstRow.setOpaque$Z(false);
firstRow.add$java_awt_Component(this.label);
firstRow.add$java_awt_Component(this.applyButton);
firstRow.add$java_awt_Component(this.undoButton);
this.add$java_awt_Component(firstRow);
var jPanel1=Clazz.new_([Clazz.new_($I$(15,1))],$I$(5,1).c$$java_awt_LayoutManager);
jPanel1.setOpaque$Z(false);
jPanel1.add$java_awt_Component$O(this.valueField, "Center");
jPanel1.add$java_awt_Component$O(this.allGroupsCheck, "East");
this.southPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15,1)));
this.southPanel.setOpaque$Z(false);
this.southPanel.add$java_awt_Component$O(jPanel1, "East");
this.southPanel.add$java_awt_Component$O(this.slider, "Center");
this.add$java_awt_Component(this.southPanel);
}, p$1);

Clazz.newMeth(C$, 'valueField_actionPerformed$',  function () {
try {
var i=(Integer.valueOf$S(this.valueField.getText$())).$c();
this.slider.setValue$I(i);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
this.valueField.setText$S(String.valueOf$I(this.slider.getValue$()));
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'applyButton_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'undoButton_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'slider_mouseReleased$java_awt_event_MouseEvent',  function (e) {
});

C$.$static$=function(){C$.$static$=0;
C$.VERDANA_11=Clazz.new_($I$(1,1).c$$S$I$I,["Verdana", 0, 11]);
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
